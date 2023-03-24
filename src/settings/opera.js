import FormField from './FormField'
import autore from './autore'
import roz from './opere/roz'
import mtc from './opere/mtc'
import restauro from './restauro'
import iscrizione from './iscrizione'
import stemmi from './stemmi'
import localizzazione from './localizzazione'
///import roff from './roff'
import cronologia from './cronologia'
import ambito from './ambito'
import committenza from './committenza'
import inventario from './inventario'
import fta from './fta'
import fonte from './fonte'
import mostra from './mostra'
import bib from './bib'



export default {
    collection: 'opera',
    fields() {
        return [
            // new FormField({ name: 'id', label: 'id', type: 'text' }), waiting for select box
            //new FormField({ name: 'tsk', label: 'Tsk', type: 'text', value: '' }), waiting for select box
            //new FormField({ name: 'lir', label: 'Lir', type: 'text', value: '' }), waiting for select box
            //new FormField({ name: 'nctr', label: 'Nctr', type: 'text', value: '' }),
            new FormField({ name: 'nctn', label: 'Nctn', type: 'text', value: '',column: '4' }),
            new FormField({
                name: 'roz',
                label: 'Roz', type: 'manyToMany', value: [],
                relation: 'roz',
                foreign_key: 'roz_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.roz}` },
                fields: roz.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { roz: { _contains: text } }
                },
            }),
            //File waiting for File upload
            //new FormField({ name: 'ogtd', label: 'Ogtd', type: 'text', value: '' }), waiting for select box
           // new FormField({ name: 'ogtt', label: 'Ogtt', type: 'text', value: '' }), waiting for select box
           // new FormField({ name: 'ogtv', label: 'Ogtv', type: 'text', value: '' }), waiting for select box
           
            new FormField({ name: 'ogtn', label: 'Ogtn', type: 'text', value: '', column: '6' }),
            new FormField({ name: 'ogtp', label: 'Ogtp', type: 'text', value: '', column: '6' }),
            new FormField({ name: 'qntn', label: 'Qntn', type: 'number', value: '', column: '6' }),
            new FormField({ name: 'qnts', label: 'Qnts', type: 'text', value: '', column: '6' }),
            new FormField({ name: 'sgti', label: 'Sgti', type: 'text', value: ''  }),
            new FormField({ name: 'sgtt', label: 'Sgtt', type: 'text', value: '' }),
            new FormField({ name: 'ldcs', label: 'Ldcs', type: 'text', value: '' }),
            new FormField({ name: 'piano', label: 'Piano', type: 'text', value: '', column: '6' }),
            new FormField({ name: 'sala', label: 'Sala', type: 'text', value: '', column: '6' }),
            new FormField({ name: 'parete', label: 'Parete', type: 'text', value: '', column: '6' }),
            new FormField({ name: 'specifiche', label: 'Specifiche', type: 'text', value: '', column: '6' }),
            new FormField({ name: 'deso', label: 'Deso', type: 'textarea', value: '' }),
            new FormField({ name: 'desi', label: 'Desi', type: 'text', value: '', column: '6' }),
            new FormField({ name: 'dess', label: 'Dess', type: 'textarea', value: '' }),
            new FormField({ name: 'nsc', label: 'Nsc', type: 'textarea', value: ''  }),
            new FormField({ label: 'DATI FISICI', type: 'biglabel', value: '' }),

              /* restauro */ 

            new FormField({
                name: 'restauro',
                label: 'Restauro', type: 'manyToMany', value: [],
                relation: 'restauro',
                foreign_key: 'restauro_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.rste}` },
                fields: restauro.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { restauro: { _contains: text } }
                },
            }),

              /* iscrizione */ 

            new FormField({
                name: 'iscrizione',
                label: 'Iscrizione', type: 'manyToMany', value: [],
                relation: 'iscrizione',
                foreign_key: 'iscrizione_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.isrp}` },
                fields: iscrizione.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { iscrizione: { _contains: text } }
                },
            }),

                /* stemmi */ 

                new FormField({
                name: 'stemmi',
                label: 'Stemmi', type: 'manyToMany', value: [],
                relation: 'stemmi',
                foreign_key: 'stemmi_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.stmi}` },
                fields: stemmi.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { stemmi: { _contains: text } }
                },
            }),
            new FormField({ label: 'DATI CULTURALI', type: 'biglabel', value: '' }),
                /* localizzazione */ 

                new FormField({
                    name: 'localizzazione',
                    label: 'Localizzazione', type: 'manyToMany', value: [],
                    relation: 'localizzazione',
                    foreign_key: 'localizzazione_id',
                    preview: (item) => { return `${item?.id ?? '--'} - ${item?.prcd}` },
                    fields: localizzazione.fields,
                    filter: (text) => {
                        if(text.trim()==='') return {}
                        return { localizzazione: { _contains: text } }
                    },
                }),

                 //roff
                 new FormField({ name: 'rofo', label: 'Rofo', type: 'text', defaultValue: null, column: '6'  }),
                 new FormField({ name: 'rofs', label: 'Rofs', type: 'text', defaultValue: null, column: '6'  }),
                 new FormField({ name: 'rofa', label: 'Rofa', type: 'text', defaultValue: null, column: '6'  }),
                 new FormField({ name: 'rofd', label: 'Rofd', type: 'text', defaultValue: null, column: '6'  }),
                 new FormField({ name: 'rofc', label: 'Rofc', type: 'text', defaultValue: null, column: '6' }),

                /* cronologia */ 

                new FormField({
                    name: 'cronologia',
                    label: 'Cronologia', type: 'manyToMany', value: [],
                    relation: 'cronologia',
                    foreign_key: 'cronologia_id',
                    preview: (item) => { return `${item?.id ?? '--'} - ${item?.dtzg}` },
                    fields: cronologia.fields,
                    filter: (text) => {
                        if(text.trim()==='') return {}
                        return { cronologia: { _contains: text } }
                    },
                }),
                
                /* autore */  

                new FormField({
                    name: 'autore',
                    label: 'Autore', type: 'manyToMany', value: [],
                    relation: 'autore',
                    foreign_key: 'autore_id',
                    preview: (item) => { return `${item?.id ?? '--'} - ${item?.autn}` },
                    fields: autore.fields,
                    filter: (text) => {
                    if(text.trim()==='') return {}
                    return { autn: { _contains: text } }
                    },
                    }),

                    /* ambito */  
                
                new FormField({
                    name: 'ambito',
                    label: 'Ambito', type: 'manyToMany', value: [],
                    relation: 'ambito',
                    foreign_key: 'ambito_id',
                    preview: (item) => { return `${item?.id ?? '--'} - ${item?.atbd}` },
                    fields: ambito.fields,
                    filter: (text) => {
                    if(text.trim()==='') return {}
                    return { ambito: { _contains: text } }
                    },
                    }),

                    /* committenza */  
                
                    new FormField({
                        name: 'committenza',
                        label: 'Committenza', type: 'manyToMany', value: [],
                        relation: 'committenza',
                        foreign_key: 'committenza_id',
                        preview: (item) => { return `${item?.id ?? '--'} - ${item?.cmmn}` },
                        fields: committenza.fields,
                        filter: (text) => {
                        if(text.trim()==='') return {}
                        return { committenza: { _contains: text } }
                        },
                        }),
                        
                    new FormField({ label: 'DATI ALLEGATI', type: 'biglabel', value: '' }),

                    /* inventario */  
                
                    new FormField({
                        name: 'inventario',
                        label: 'Inventario', type: 'manyToMany', value: [],
                        relation: 'inventario',
                        foreign_key: 'inventario_id',
                        preview: (item) => { return `${item?.id ?? '--'} - ${item?.invn}` },
                        fields: inventario.fields,
                        filter: (text) => {
                        if(text.trim()==='') return {}
                        return { inventario: { _contains: text } }
                        },
                        }),


                    /* fta */  
                
                    new FormField({
                        name: 'fta',
                        label: 'Fotografia', type: 'manyToMany', value: [],
                        relation: 'fta',
                        foreign_key: 'fta_id',
                        preview: (item) => { return `${item?.id ?? '--'} - ${item?.ftan}` },
                        fields: fta.fields,
                        filter: (text) => {
                        if(text.trim()==='') return {}
                        return { fta: { _contains: text } }
                        },
                        }),


                    /* fonte */  
                
                    new FormField({
                    name: 'fonte',
                    label: 'Fonte', type: 'manyToMany', value: [],
                    relation: 'fonte',
                    foreign_key: 'fonte_id',
                    preview: (item) => { return `${item?.id ?? '--'} - ${item?.fntp}` },
                    fields: fonte.fields,
                    filter: (text) => {
                    if(text.trim()==='') return {}
                    return { fonte: { _contains: text } }
                    },
                    }),

                    /* mostra */  

                    new FormField({
                        name: 'mostra',
                        label: 'Mostra', type: 'manyToMany', value: [],
                        relation: 'mostra',
                        foreign_key: 'mostra_id',
                        preview: (item) => { return `${item?.id ?? '--'} - ${item?.mstfin}` },
                        fields: mostra.fields,
                        filter: (text) => {
                        if(text.trim()==='') return {}
                        return { mostra: { _contains: text } }
                        },
                        }),

                    //acqt
                    new FormField({ name: 'acqn', label: 'Acqn', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'acqd', label: 'Acqd', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'acql', label: 'Acql', type: 'text', defaultValue: null, column: '6'  }),
                    //cdgg
                    new FormField({ name: 'cdgs', label: 'Cdgs', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'cdgi', label: 'Cdgi', type: 'text', defaultValue: null, column: '6'  }),
                    //stcc
                    new FormField({ name: 'stcs', label: 'Stcs', type: 'text', defaultValue: null, column: '6'  }),
                    //Mtc 
                    //
                    new FormField({
                        name: 'mtc',
                        label: 'Mtc', type: 'manyToMany', value: [],
                        relation: 'mtc',
                        foreign_key: 'mtc_id',
                        preview: (item) => { return `${item?.id ?? '--'} - ${item?.mtc}` },
                        fields: mtc.fields,
                        filter: (text) => {
                        if(text.trim()==='') return {}
                        return { mtc: { _contains: text } }
                        },
                        }),


                    new FormField({ name: 'misa', label: 'Misa', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'misu', label: 'Misu', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'misl', label: 'Misl', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'misp', label: 'Misp', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'misd', label: 'Misd', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'misn', label: 'Misn', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'miss', label: 'Miss', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'misg', label: 'Misg', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'misv', label: 'Misv', type: 'text', defaultValue: null, column: '6'  }),
                    //misr
                    //mist
                    //frm
                    //adsp
                    //adsm
                    new FormField({ name: 'cmpd', label: 'Cmpd', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'cmpd', label: 'Cmpn', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'fur', label: 'Fur', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'rvmd', label: 'Rvmd', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'rvmn', label: 'Rvmn', type: 'text', defaultValue: null, column: '6'  }),
                    new FormField({ name: 'oss', label: 'Oss', type: 'textarea', defaultValue: null, column: '12'  }),

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
            
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'tsk',label:'TSK',sortable: true},
            {key:'lir',label:'LIR',sortable: true},
            {key:'nctr',label:'NCTR',sortable: true},
            {key:'nctn',label:'NCTN',sortable: true},
            {key:'ogtn',label:'OGTN',sortable: true},
            {key:'ogtp',label:'OGTP',sortable: true},
            {key:'lc',label:'Localizzazione',sortable: false},
            {key:'autore',label:'Autore',sortable: false},
            // {key:'ambito',label:'Ambito',sortable: false},
            {key:'actions',label:'Actions',sortable: false},
        ]
    }
}