import FormField from "./FormField";
import autore from "./autore";
import roz from "./opere/roz";
import mtc from "./opere/mtc";
import restauro from "./restauro";
import iscrizione from "./iscrizione";
import stemmi from "./stemmi";
import localizzazione from "./localizzazione";
import Divider from "../models/Divider";

///import roff from './roff'
import cronologia from "./cronologia";
import ambito from "./ambito";
import committenza from "./committenza";
import inventario from "./inventario";
import fta from "./fta";
import fonte from "./fonte";
import mostra from "./mostra";
import bib from "./bib";
import {
  CheckboxField,
  SelectField,
  ManyToManyField,
  RadioField,
} from "../models";

export default {
  collection: "opera",
  fields() {
    return [

      new FormField({ label: "Codici", type: "biglabel", value: "" }),

      // new FormField({ name: 'id', label: 'id', type: 'text' }), waiting for select box
      new FormField({
        name: "tsk",
        label: "Tipo Scheda",
        type: "text",
        value: "OA",
        column: "3",
      }),
      new RadioField({
        name: "lir",
        column: "3",
        label: "Livello di ricerca",
        type: "radio",
        value: "I",
        inline: false,
        choices: [
          { value: "C", label: "Catalogo" },
          { value: "P", label: "Precatalogo" },
          { value: "I", label: "Inventario" },
        ],
      }),

      new FormField({
        name: "nctr",
        label: "Num. Regione",
        type: "text",
        value: "09",
        column: "3",
      }),
      new FormField({
        name: "nctn",
        label: "Num. Catalogo",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "roz",
        label: "Rif. Orizzontale",
        type: "manyToMany",
        value: [],
        column: "6",

        relation: "roz",
        foreign_key: "roz_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.roz}`;
        },
        fields: roz.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { roz: { _contains: text } };
        },
      }),
      /* inventario */

      new FormField({
        name: "inventario",
        label: "Inventario",
        type: "manyToMany",
        value: [],
        column: "6",

        relation: "inventario",
        foreign_key: "inventario_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.invn}`;
        },
        fields: inventario.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inventario: { _contains: text } };
        },
      }),
      //File waiting for File upload
      //new FormField({ name: 'ogtd', label: 'Ogtd', type: 'text', value: '' }), waiting for manytoOne box
      // new FormField({ name: 'ogtt', label: 'Ogtt', type: 'text', value: '' }), waiting for manytoOne box
      // new FormField({ name: 'ogtv', label: 'Ogtv', type: 'text', value: '' }), waiting for manytoOne box

      new Divider({ type: "divider" }),

      new FormField({ label: "Oggetto", type: "biglabel", value: "" }),

      new FormField({
        name: "ogtn",
        label: "Oggetto",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "ogtp",
        label: "posizione",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "qntn",
        label: "Quantità",
        type: "number",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "qnts",
        label: "Qnts",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "sgti",
        label: "Soggetto",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "sgtt",
        label: "Titolo",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "deso",
        label: "Descrizione oggetto",
        type: "textarea",
        value: "",
        column: "12",
      }),

      new FormField({
        name: "dess",
        label: "Descrizione soggetto",
        type: "textarea",
        value: "",
        column: "6",
      }),
      new FormField({
        name: "desi",
        label: "Desi",
        type: "text",
        value: "",
        column: "6",
      }),
      new FormField({
        name: "nsc",
        label: "Notizie Storico Critiche",
        type: "textarea",
        value: "",
        column: "12",
      }),

      /* cronologia */

      new FormField({
        name: "cronologia",
        label: "Cronologia",
        type: "manyToMany",
        value: [],
        relation: "cronologia",
        foreign_key: "cronologia_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.dtzg}`;
        },
        fields: cronologia.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { cronologia: { _contains: text } };
        },
      }),
      //Mtc
      //
      new FormField({
        name: "mtc",
        label: "Materia e Tecnica",
        type: "manyToMany",
        value: [],
        relation: "mtc",
        foreign_key: "mtc_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.mtc}`;
        },
        fields: mtc.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { mtc: { _contains: text } };
        },
      }),
      new FormField({
        name: "oss",
        label: "Oss",
        type: "textarea",
        defaultValue: null,
        column: "12",
      }),
      new Divider({ type: "divider" }),

      new FormField({ label: "Misure", type: "biglabel", value: "" }),

      //new FormField({ name: 'misu', label: 'Misu', type: 'text', defaultValue: null, column: '6'  }),
      new SelectField({
        name: "misu",
        label: "Unità di misura",
        type: "select",
        column: "3",
        value: "",
        options: [
          { value: "", label: " " },
          { value: "cm", label: "cm" },
          { value: "ct", label: "ct" },
          { value: "g", label: "g" },
          { value: "hg", label: "hg" },
          { value: "kg", label: "kg" },
          { value: "l", label: "l" },
          { value: "m", label: "m" },
          { value: "mc", label: "mc" },
          { value: "mm", label: "mm" },
          { value: "mq", label: "mq" },
          { value: "UNR", label: "Unità Non Rilevata" },
        ],
      }),
      new FormField({
        name: "misa",
        label: "Misa",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misl",
        label: "Misl",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misp",
        label: "Misp",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misd",
        label: "Misd",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misn",
        label: "Misn",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "miss",
        label: "Miss",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misg",
        label: "Misg",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misv",
        label: "Misv",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new SelectField({
        name: "misr",
        label: "Mancanza",
        type: "select",
        column: "3",
        value: "",
        options: [
          { value: "", label: " " },
          { value: "mnr", label: "mnr" },
        ],
      }),
      new SelectField({
        name: "mist",
        label: "validità",
        type: "select",
        column: "3",
        value: "",
        options: [
          { value: "", label: " " },
          { value: "ca", label: "ca" },
        ],
      }),

      // new CheckboxField({
      //   name: "misr",
      //   label: "mancanza",
      //   type: "checkbox",
      //   value: [],
      //   inline: false,
      //   column: "4",
      //   options: [{ value: "mnr", label: "mnr" }],
      // }),
      // new CheckboxField({
      //   name: "mist",
      //   label: "validità",
      //   type: "checkbox",
      //   value: [],
      //   inline: false,
      //   column: "4",
      //   options: [{ value: true, label: "ca" }],
      // }),

      //frm

      new Divider({ type: "divider" }),

      new FormField({
        label: "Rapporto Opera finale",
        type: "biglabel",
        value: "",
      }),

      //roff
      new FormField({
        name: "rofo",
        label: "Rofo",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "rofs",
        label: "Rofs",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "rofa",
        label: "Rofa",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "rofd",
        label: "Rofd",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "rofc",
        label: "Rofc",
        type: "text",
        defaultValue: null,
        column: "3",
      }),

      new Divider({ type: "divider" }),

      new FormField({ label: "Collocazione", type: "biglabel", value: "" }),

      new FormField({
        name: "ldcs",
        label: "Collocazione",
        type: "text",
        value: "",
        column: "12",
      }),
      new FormField({
        name: "piano",
        label: "Piano",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "sala",
        label: "Sala",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "parete",
        label: "Parete",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "specifiche",
        label: "Specifiche",
        type: "text",
        value: "",
        column: "3",
      }),
      new Divider({ type: "divider" }),

      new FormField({
        label: "Conservazione e Restauro",
        type: "biglabel",
        value: "",
      }),
      //stcc
      new SelectField({
        name: "stcc",
        label: "Stato di Conservazione",
        type: "select",
        value: "",
        column: "6",
        options: [
          { value: "", label: "" },
          { value: "buono", label: "buono" },
          { value: "discreto", label: "discreto" },
          { value: "mediocre", label: "mediocre" },
          { value: "cattivo", label: "cattivo" },
        ],
      }),
      new FormField({
        name: "stcs",
        label: "Stcs",
        type: "text",
        defaultValue: null,
        column: "6",
      }),

      /* restauro */

      new FormField({
        name: "restauro",
        label: "Restauro",
        type: "manyToMany",
        value: [],
        relation: "restauro",
        foreign_key: "restauro_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.rste}`;
        },
        fields: restauro.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { restauro: { _contains: text } };
        },
      }),
      new Divider({ type: "divider" }),

      new FormField({
        label: "Condizione giuridica",
        type: "biglabel",
        value: "",
      }),

      //cdgg
      new FormField({
        name: "cdgs",
        label: "Cdgs",
        type: "text",
        defaultValue: null,
        column: "6",
      }),
      new FormField({
        name: "cdgi",
        label: "Indirizzo",
        type: "text",
        defaultValue: null,
        column: "6",
      }),

      //acquisizione

      new FormField({
        name: "acqt",
        label: "Tipo Acquisizione",
        type: "manytoOne",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "acqn",
        label: "Nome Acquisizione",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "acqd",
        label: "Data Acquisizione",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "acql",
        label: "Luogo Acquisizione",
        type: "text",
        defaultValue: null,
        column: "3",
      }),

      //Compilazione
      new Divider({ type: "divider" }),

      new FormField({ label: "Compilazione", type: "biglabel", value: "" }),

      new FormField({
        name: "cmpd",
        label: "Data",
        type: "text",
        defaultValue: null,
        column: "4",
      }),
      new FormField({
        name: "cmpn",
        label: "Compilatore",
        type: "text",
        defaultValue: null,
        column: "4",
      }),
      new FormField({
        name: "fur",
        label: "Funzionario",
        type: "text",
        defaultValue: null,
        column: "4",
      }),
      new FormField({
        name: "rvmd",
        label: "Data revisione",
        type: "text",
        defaultValue: null,
        column: "4",
      }),
      new FormField({
        name: "rvmn",
        label: "Nome revisione",
        type: "text",
        defaultValue: null,
        column: "4",
      }),

      /* iscrizione */

      new FormField({
        name: "iscrizione",
        label: "Iscrizione",
        type: "manyToMany",
        value: [],
        relation: "iscrizione",
        foreign_key: "iscrizione_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.isrp}`;
        },
        fields: iscrizione.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { iscrizione: { _contains: text } };
        },
      }),

      /* stemmi */

      new FormField({
        name: "stemmi",
        label: "Stemmi",
        type: "manyToMany",
        value: [],
        relation: "stemmi",
        foreign_key: "stemmi_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.stmi}`;
        },
        fields: stemmi.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { stemmi: { _contains: text } };
        },
      }),
      new Divider({ type: "divider" }),

      new FormField({ label: "DATI CULTURALI", type: "biglabel", value: "" }),
      /* localizzazione */

      new FormField({
        name: "localizzazione",
        label: "Localizzazione",
        type: "manyToMany",
        value: [],
        relation: "localizzazione",
        foreign_key: "localizzazione_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.prcd}`;
        },
        fields: localizzazione.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { localizzazione: { _contains: text } };
        },
      }),

      /* autore */

      new FormField({
        name: "autore",
        label: "Autore",
        type: "manyToMany",
        value: [],
        relation: "autore",
        foreign_key: "autore_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.autn}`;
        },
        fields: autore.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { autn: { _contains: text } };
        },
      }),

      /* ambito */

      new FormField({
        name: "ambito",
        label: "Ambito",
        type: "manyToMany",
        value: [],
        relation: "ambito",
        foreign_key: "ambito_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.atbd}`;
        },
        fields: ambito.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { ambito: { _contains: text } };
        },
      }),

      /* committenza */

      new FormField({
        name: "committenza",
        label: "Committenza",
        type: "manyToMany",
        value: [],
        relation: "committenza",
        foreign_key: "committenza_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.cmmn}`;
        },
        fields: committenza.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { committenza: { _contains: text } };
        },
      }),
      new Divider({ type: "divider" }),

      new FormField({ label: "DATI ALLEGATI", type: "biglabel", value: "" }),

      /* fta */

      new FormField({
        name: "fta",
        label: "Fotografia",
        type: "manyToMany",
        value: [],
        relation: "fta",
        foreign_key: "fta_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.ftan}`;
        },
        fields: fta.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { fta: { _contains: text } };
        },
      }),

      /* fonte */

      new FormField({
        name: "fonte",
        label: "Fonte",
        type: "manyToMany",
        value: [],
        relation: "fonte",
        foreign_key: "fonte_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.fntp}`;
        },
        fields: fonte.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { fonte: { _contains: text } };
        },
      }),

      /* mostra */

      new FormField({
        name: "mostra",
        label: "Mostra",
        type: "manyToMany",
        value: [],
        relation: "mostra",
        foreign_key: "mostra_id",
        preview: (item) => {
          return `${item?.id ?? "--"} - ${item?.mstfin}`;
        },
        fields: mostra.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { mostra: { _contains: text } };
        },
      }),
      new RadioField({
        name: "adsp",
        label: "Profilo di accesso",
        type: "radio",
        value: "I",
        inline: false,
        column: "3",
        choices: [
          { value: "1", label: "basso" },
          { value: "2", label: "medio" },
          { value: "3", label: "alto" },
        ],
      }),
      // new RadioField({ name: 'adsm', label: 'Motivazione', type: 'radio', value: 'I',
      //      inline: false,
      //      choices: [
      //         { value: 'dati liberamente accessibili', label: 'dati liberamente accessibili'},
      //         { value: 'dati personali', label: 'dati personali'},
      //         { value: 'bene di proprietà privata', label: 'bene di proprietà privata'},
      //         { value: 'scheda di bene a rischio', label: 'scheda di bene a rischio'},
      //         { value: 'bene non adeguatamente sorvegliabile', label: 'bene non adeguatamente sorvegliabile'},
      //     ]
      // }),

      /*new FormField({
                        name: 'bib',
                        label: 'Bib', type: 'manyToMany', value: [],
                        relation: 'bib',
                        foreign_key: 'bib_id',
                        preview: (item) => { return `${item?.id ?? '--'} - ${item?.bibn}` },
                        fields: bib.fields,
                        filter: (text) => {
                        if(text.trim()==='') return {}
                        return { bib: { _contains: text } }
                        },
                        }),*/

      // new FormField({ name: 'lc', label: 'lc', type: 'text', defaultValue: null }),
      // new FormField({ name: 'date_created', label: 'date_created', type: 'text' }),
      // new FormField({ name: 'date_updated', label: 'date_updated', type: 'text' }),
      // new FormField({ name: 'user_created', label: 'user_created', type: 'text' }),
      // new FormField({ name: 'user_updated', label: 'user_updated', type: 'text' }),
    ];
  },
  tableFields() {
    return [
      { key: "id", label: "ID", sortable: false },
      { key: "tsk", label: "TSK", sortable: true },
      { key: "lir", label: "LIR", sortable: true },
      { key: "nctr", label: "NCTR", sortable: true },
      { key: "nctn", label: "NCTN", sortable: true },
      { key: "ogtn", label: "OGTN", sortable: true },
      { key: "ogtp", label: "OGTP", sortable: true },
      { key: "lc", label: "Localizzazione", sortable: false },
      { key: "autore", label: "Autore", sortable: false },
      // {key:'ambito',label:'Ambito',sortable: false},
      { key: "actions", label: "Actions", sortable: false },
    ];
  },
};
