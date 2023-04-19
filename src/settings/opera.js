import FormField from "./FormField";
import autore from "./autore";

import ogtd from "./ogtd";
import ogtt from "./ogtd";
import ogtv from "./ogtv";
import frm from "./frm";
import roff from "./roff";
import cdgg from "./cdgg";
import acqt from "./acqt";
import lc from "./lc";
import acc from "./opere/acc";
import alnt from "./alnt";
import stima from "./opere/stima";

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
  ManyToOneField,
} from "../models";

export default {
  collection: "opera",
  fields() {
    return [
      new FormField({
        name: "icona",
        label: "Icona",
        type: "upload",
        value: "",
        column: "12",
      }),
      new FormField({
        name: "codici",
        label: "Codici",
        type: "biglabel",
        value: "",
      }),

      // new FormField({ name: 'id', label: 'id', type: 'text' }), waiting for select box
      new FormField({
        name: "tsk",
        label: "Tipo Scheda",
        type: "text",
        value: "OA",
        column: "2",
      }),

      new RadioField({
        name: "lir",
        column: "4",
        label: "Livello di ricerca",
        type: "radio",
        value: "I",
        inline: true,
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
        column: "2",
      }),
      new FormField({
        name: "nctn",
        label: "Num. Catalogo",
        type: "text",
        value: "",
        column: "2",
      }),

      new FormField({
        name: "resti",
        label: "Restituite",
        type: "toggle",
        value: "",
        column: "2",
      }),

      new FormField({
        name: "acc",
        label: "Altri Codici",
        type: "manyToMany",
        value: [],
        column: "6",

        relation: "acc",
        foreign_key: "acc_id",
        preview: (item) => {
          return `${item?.acc}`;
        },
        fields: acc.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { acc: { _contains: text } };
        },
      }),
      /* i



      new FormField({
        name: "roz",
        label: "Riferimento Orizzontale",
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
        name: "inv",
        label: "Numero Inventario",
        type: "manyToMany",
        value: [],
        column: "6",

        relation: "inv",
        foreign_key: "inv_id",
        preview: (item) => {
          return ` ${item?.invn}`;
        },
        fields: inventario.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inventario: { _contains: text } };
        },
      }),

      new FormField({
        name: "stima",
        label: "STIMA",
        type: "manyToMany",
        value: [],
        column: "6",

        relation: "stima",
        foreign_key: "stima_id",
        preview: (item) => {
          return ` ${item?.stima}`;
        },
        fields: stima.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { stima: { _contains: text } };
        },
      }),
      //File waiting for File upload

      new Divider({ type: "divider" }),

      new FormField({
        label: "Oggetto",
        type: "biglabel",
        value: "",
        name: "oggetto",
      }),

      // OGTD
      new ManyToOneField({
        name: "ogtd",
        label: "Definizione",
        value: null,
        related: "ogtd",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.ogtd}`;
        },
        fields: ogtd.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { nome: { _contains: text } };
        },
      }),

      // TO CHECK
      new ManyToOneField({
        name: "ogtt",
        label: "Tipologia",
        value: null,
        related: "ogtt",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.ogtt}`;
        },
        fields: ogtt.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { nome: { _contains: text } };
        },
      }),
      new ManyToOneField({
        name: "ogtv",
        label: "Identificazione",
        value: null,
        related: "ogtv",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.ogtv}`;
        },
        fields: ogtv.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { nome: { _contains: text } };
        },
      }),

      new FormField({
        name: "ogtn",
        label: "Denominazione/ dedicazione",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "ogtp",
        label: "Posizione",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "qntn",
        label: "Quantità Numero",
        type: "number",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "qnts",
        label: "Quantità non rilevata ",
        type: "text",
        value: "",
        column: "3",
      }),
      new FormField({
        name: "sgti",
        label: "Soggetto",
        type: "text",
        value: "",
        column: "6",
      }),
      new FormField({
        name: "sgtt",
        label: "Titolo",
        type: "text",
        value: "",
        column: "6",
      }),
      new FormField({
        name: "deso",
        label: "Indicazioni sull'oggetto",
        type: "textarea",
        value: "",
        column: "12",
      }),

      new FormField({
        name: "dess",
        label: "Indicazioni sul soggetto",
        type: "textarea",
        value: "",
        column: "6",
      }),
      new FormField({
        name: "desi",
        label: "Codifica Iconclass",
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
        column: "6",
        foreign_key: "cronologia_id",

        preview: (item) => {
          return `${item?.dtzg}, ${item?.dtsi}, ${item?.dtsf} (id: ${
            item?.id ?? "--"
          })`;
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
        column: "6",

        preview: (item) => {
          return `${item?.mtc}  (id: ${item?.id ?? "--"})`;
        },
        fields: mtc.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { mtc: { _contains: text } };
        },
      }),
      new FormField({
        name: "oss",
        label: "Osservazioni",
        type: "textarea",
        defaultValue: null,
        column: "12",
      }),
      new Divider({ type: "divider" }),

      new FormField({
        label: "Misure",
        type: "biglabel",
        value: "",
        name: "misure",
      }),

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
        name: "mis_verificate",
        label: "MIS verificate",
        type: "text",
        defaultValue: null,
        column: "3",
      }),

      new FormField({
        name: "misa",
        label: "Altezza",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misl",
        label: "Larghezza",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misp",
        label: "Profondità",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misd",
        label: "Diametro",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misn",
        label: "Lunghezza",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "miss",
        label: "Spessore",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misg",
        label: "Peso",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "misv",
        label: "Varie",
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
      new FormField({
        name: "mis_ingombro	",
        label: "Ingombro",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "mis_cornice",
        label: "Cornice",
        type: "text",
        defaultValue: null,
        column: "3",
      }),

      new ManyToOneField({
        name: "frm",
        label: "Formato",
        value: null,
        related: "frm",
        column: "3",
        type: "manyToOne",
        preview: (item) => {
          return `${item?.frm}`;
        },
        fields: frm.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { nome: { _contains: text } };
        },
      }),
      new Divider({ type: "divider" }),

      new FormField({
        label: "Rapporto Opera finale",
        type: "biglabel",
        value: "",
        name: "Rof",
      }),

      //roff
      new ManyToOneField({
        name: "roff",
        label: "Stadio opera",
        value: null,
        related: "roff",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.roff}`;
        },
        fields: roff.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { nome: { _contains: text } };
        },
      }),

      new FormField({
        name: "rofo",
        label: "Opera finale/originale",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "rofs",
        label: "Soggetto opera finale/originale",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "rofa",
        label: "Autore opera finale/originale ",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "rofd",
        label: "Datazione opera finale/originale",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "rofc",
        label: "Collocazione opera finale/originale",
        type: "text",
        defaultValue: null,
        column: "3",
      }),

      new Divider({ type: "divider" }),

      new FormField({
        label: "Collocazione",
        type: "biglabel",
        value: "",
        name: "collocazione",
      }),

      new ManyToOneField({
        name: "lc",
        label: "Localizzazione",
        value: null,
        related: "collocazione",
        type: "manyToOne",
        column: "6",
        preview: (item) => {
          return `${item?.ldcm}`;
        },
        fields: lc.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { nome: { _contains: text } };
        },
      }),

      new FormField({
        name: "deposito",
        label: "Deposito",
        type: "toggle",
        value: "",
        column: "2",
      }),
      new FormField({
        name: "ldcs",
        label: "Collocazione Specifica",
        type: "text",
        value: "",
        column: "6",
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
        name: "CeR",
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
        label: "Indicazioni specifiche ",
        type: "text",
        defaultValue: null,
        column: "6",
      }),
      new FormField({
        name: "esposizione",
        label: "Corretta esposizione [x scheda prestito]",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "trasporto",
        label: "Corretto trasporto [x scheda prestito]",
        type: "text",
        defaultValue: null,
        column: "3",
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
          return `${item?.rste}`;
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
        name: "condizioneG",
      }),

      new ManyToOneField({
        name: "alnt",
        label: "Alienazione Tipo",
        value: null,
        related: "alnt",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.alnt}`;
        },
        fields: alnt.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { alnt: { _contains: text } };
        },
      }),
      new FormField({
        name: "alnd",
        label: "Alienazione Data",
        type: "text",
        defaultValue: null,
        column: "6",
      }),
      new FormField({
        name: "alnn",
        label: "Alienazione Note",
        type: "text",
        defaultValue: null,
        column: "6",
      }),

      //cdgg
      new ManyToOneField({
        name: "cdgg",
        label: "Indicazione generica",
        value: null,
        related: "cdgg",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.cdgg}`;
        },
        fields: cdgg.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { nome: { _contains: text } };
        },
      }),
      new FormField({
        name: "cdgs",
        label: "Indicazione specifica",
        type: "text",
        defaultValue: null,
        column: "3",
      }),
      new FormField({
        name: "cdgi",
        label: "Indirizzo",
        type: "text",
        defaultValue: null,
        column: "3",
      }),

      //acquisizione
      new ManyToOneField({
        name: "acqt",
        label: "Tipo Acquisizione",
        value: null,
        related: "acqt",
        type: "manyToOne",
        column: "3",

        preview: (item) => {
          return `${item?.acqt}`;
        },
        fields: acqt.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { nome: { _contains: text } };
        },
      }),
      new FormField({
        name: "acqn",
        label: "Nome",
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

      new FormField({
        label: "Compilazione",
        type: "biglabel",
        value: "",
        name: "compilazione",
      }),

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

      //Compilazione
      new Divider({ type: "divider" }),

      new FormField({
        label: "Dati Fisici",
        type: "biglabel",
        value: "",
        name: "dFisici",
      }),
      /* iscrizione */

      new FormField({
        name: "iscrizione",
        label: "Iscrizione",
        type: "manyToMany",
        value: [],
        column: "6",
        relation: "iscrizione",
        foreign_key: "iscrizione_id",
        preview: (item) => {
          return `${item?.isrp}`;
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
        column: "6",

        foreign_key: "stemmi_id",
        preview: (item) => {
          return `${item?.stmi}`;
        },
        fields: stemmi.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { stemmi: { _contains: text } };
        },
      }),

      new Divider({ type: "divider" }),

      new FormField({
        label: "DATI CULTURALI",
        type: "biglabel",
        value: "",
        name: "datiC",
      }),
      /* localizzazione */

      new FormField({
        name: "localizzazione",
        label: "Localizzazione",
        type: "manyToMany",
        value: [],
        column: "6",
        relation: "localizzazione",
        foreign_key: "localizzazione_id",
        preview: (item) => {
          return `${item?.prcd}`;
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
        column: "6",
        relation: "autore",
        foreign_key: "autore_id",
        preview: (item) => {
          return `${item?.autn}`;
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
        column: "6",
        relation: "ambito",
        foreign_key: "ambito_id",
        preview: (item) => {
          return `${item?.atbd}`;
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
        column: "6",
        relation: "committenza",
        foreign_key: "committenza_id",
        preview: (item) => {
          return `${item?.cmmn}`;
        },
        fields: committenza.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { committenza: { _contains: text } };
        },
      }),
      new Divider({ type: "divider" }),

      new FormField({
        label: "DATI ALLEGATI",
        type: "biglabel",
        value: "",
        name: "dAllegati",
      }),

      /* fta */

      new FormField({
        name: "fta",
        label: "Fotografia",
        type: "manyToMany",
        value: [],
        column: "6",
        relation: "fta",
        foreign_key: "fta_id",
        preview: (item) => {
          return `${item?.ftan}`;
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
        column: "6",
        relation: "fonte",
        foreign_key: "fonte_id",
        preview: (item) => {
          return `${item?.fntp}`;
        },
        fields: fonte.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { fonte: { _contains: text } };
        },
      }),

      // BIB
      new FormField({
        name: "bib",
        label: "Bibliografia",
        type: "manyToMany",
        value: [],
        column: "6",
        relation: "bib",
        foreign_key: "bib_id",
        preview: (item) => {
          return `${item?.bibx}`;
        },
        fields: bib.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { bib: { _contains: text } };
        },
      }),


      /* mostra */

      new FormField({
        name: "mostra",
        label: "Mostra",
        type: "manyToMany",
        value: [],
        column: "6",
        relation: "mostra",
        foreign_key: "mostra_id",
        preview: (item) => {
          return `${item?.mstfin}`;
        },
        fields: mostra.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { mostra: { _contains: text } };
        },
      }),
      // new RadioField({
      //   name: "adsp",
      //   label: "Profilo di accesso",
      //   type: "radio",
      //   value: "I",
      //   inline: false,
      //   column: "3",
      //   choices: [
      //     { value: "1", label: "basso" },
      //     { value: "2", label: "medio" },
      //     { value: "3", label: "alto" },
      //   ],
      // }),

      new Divider({ type: "divider" }),

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
      // { key: "tsk", label: "TSK", sortable: true },
      // { key: "lir", label: "LIR", sortable: true },
      // { key: "nctr", label: "NCTR", sortable: true },
      { key: "inventario", label: "INV", sortable: true },
      { key: "nctn", label: "NCTN", sortable: true },
      { key: "autore", label: "Autore", sortable: false },
      { key: "ogtd", label: "OGTD", sortable: true },
      { key: "sgti", label: "SGTI", sortable: true },
      { key: "ldcs", label: "Localizzazione", sortable: false },
      { key: "mtc", label: "MTC", sortable: true },
      // {key:'ambito',label:'Ambito',sortable: false},
      { key: "actions", label: "Azione", sortable: false },
    ];
  },
};
