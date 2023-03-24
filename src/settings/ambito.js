import FormField from './FormField'
import atbm from './ambito/atbm'
import atbr from './ambito/atbr'

export default {
    collection: 'ambito',
    fields() {
        return [
            //atbt
           /* new FormField({
                name: 'atbr',
                label: 'atbr', type: 'manyToMany', value: [],
                relation: 'atbr',
                foreign_key: 'atbr_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.atbr}` },
                fields: atbr.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { atbr: { _contains: text } }
                },
            }),*/
            new FormField({
                name: 'atbm',
                label: 'atbm', type: 'manyToMany', value: [],
                relation: 'atbm',
                foreign_key: 'atbm_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.atbm}` },
                fields: atbm.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { atbm: { _contains: text } }
                },
            }),
           
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'atbm',label:'Atbm',sortable: true},
            {key:'atbr',label:'Atbr',sortable: true},
            
            {key:'actions',label:'Actions',sortable: false},
        ]
    }
}