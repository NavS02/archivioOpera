import FormField from './FormField'
import dtm from './cronologia/dtm'
import adt from './cronologia/adt'


export default {
    collection: 'cronologia',
    fields() {
        return [
            
           new FormField({ name: 'dtzg', label: 'Dtzg', type: 'text', value: '' }),
          // waiting for select box dtzs
           new FormField({ name: 'dtsi', label: 'Dtsi', type: 'text', value: '' }),
          //select box
           new FormField({ name: 'dtsf', label: 'Dtsf', type: 'text', value: '' }),
          //select box,
           //new FormField({ name: 'dtm', label: 'Dtzg', type: 'number', value: '' }),
           //new FormField({ name: 'adt', label: 'Adt', type: 'number', value: '' }),

           new FormField({
            name: 'dtm',
            label: 'Dtm', type: 'manyToMany', value: [],
            relation: 'dtm',
            foreign_key: 'dtm_id',
            preview: (item) => { return `${item?.id ?? '--'} - ${item?.dtm}` },
            fields: dtm.fields,
            filter: (text) => {
                if(text.trim()==='') return {}
                return { dtm: { _contains: text } }
            },
        }),
        new FormField({
            name: 'adt',
            label: 'Adt', type: 'manyToMany', value: [],
            relation: 'adt',
            foreign_key: 'adt_id',
            preview: (item) => { return `${item?.id ?? '--'} - ${item?.adt}` },
            fields: adt.fields,
            filter: (text) => {
                if(text.trim()==='') return {}
                return { adt: { _contains: text } }
            },
        }),
           
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'dtzg',label:'Dtzg',sortable: true},
            {key:'dtzs',label:'Dtzs',sortable: true},
            {key:'dtsi',label:'Dtsi',sortable: true},
            {key:'dtsf',label:'Dtsf',sortable: true},
            {key:'dtsv',label:'Dtsv',sortable: true},
            {key:'dtm',label:'Dtsf',sortable: true},
            {key:'actions',label:'Actions',sortable: false},
        ]
    }

}