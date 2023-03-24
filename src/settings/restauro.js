import FormField from '././FormField'
import rstn from './restauro/rstn'
import rstr from './restauro/rstr'

export default {
    collection: 'roz',
    fields() {
        return [
            // new FormField({ name: 'id', label: 'id', type: 'text' }),
           
            new FormField({ name: 'rstd', label: 'Rstd', type: 'text', value: '' }),
            new FormField({ name: 'rste', label: 'Rste', type: 'text', value: '' }),
           /* new FormField({
                name: 'rstn',
                label: 'Rstn', type: 'manyToMany', value: [],
                relation: 'rstn',
                foreign_key: 'rstn_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.rstn}` },
                fields: rstn.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { rstn: { _contains: text } }
                },
            }),*/
           // new FormField({ name: 'rstn', label: 'Rstn', type: 'text', value: '' }),
            new FormField({ name: 'rsts', label: 'Rsts', type: 'text', value: '' }),
            new FormField({ name: 'rstl', label: 'Rstl', type: 'text', value: '' }),
           
          /* new FormField({
            name: 'rstr',
            label: 'Rstr', type: 'manyToMany', value: [],
            relation: 'rstr',
            foreign_key: 'rstr_id',
            preview: (item) => { return `${item?.id ?? '--'} - ${item?.rstr}` },
            fields: rstr.fields,
            filter: (text) => {
                if(text.trim()==='') return {}
                return { rstr: { _contains: text } }
            },
        }),*/
            new FormField({ name: 'rsdu', label: 'Rsdu', type: 'text', value: '' }),
            new FormField({ name: 'rsdr', label: 'Rsdr', type: 'text', value: '' }),
            new FormField({ name: 'rstnote', label: 'Rstnote', type: 'text', value: '' }),

            
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'rstd',label:'Rste',sortable: true},
            {key:'rstn',label:'Rstn',sortable: true},
            {key:'rsts',label:'Rsts',sortable: true},
            {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}


