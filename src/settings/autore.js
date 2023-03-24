import FormField from './FormField'
import autm from './autore/autm'
import auts from './autore/auts'
import autr from './autore/autr'

export default {
    collection: 'autore',
    fields() {
        return [
            // new FormField({ name: 'id', label: 'id', type: 'text' }),
           /* new FormField({
                name: 'auts',
                label: 'auts', type: 'manyToMany', value: [],
                relation: 'auts',
                foreign_key: 'auts_id',
                preview: (item) => { return `${item.id} - ${item.auts}` },
                fields: auts.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { tipo: { _contains: text } }
                },
            }),
            new FormField({
                name: 'autr',
                label: 'autr', type: 'manyToMany', value: [],
                relation: 'autr',
                foreign_key: 'autr_id',
                preview: (item) => { return `${item.id} - ${item.tipo}` },
                fields: autr.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { tipo: { _contains: text } }
                },
            }),*/
            new FormField({ name: 'autn', label: 'Autn', type: 'text', value: '' }),
            new FormField({ name: 'auta', label: 'Auta', type: 'text', value: '' }),
            new FormField({ name: 'auth', label: 'Auth', type: 'number', value: '' }),
            new FormField({ name: 'autb', label: 'Autb', type: 'text', value: '' }),
            /*new FormField({
                name: 'autm',
                label: 'autm', type: 'manyToMany', value: [],
                relation: 'autm',
                foreign_key: 'autm_id',
                preview: (item) => { return `${item.id} - ${item.tipo}` },
                fields: autm.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { tipo: { _contains: text } }
                },
            }),*/
            new FormField({ name: 'aat', label: 'Aat', type: 'text' }),
            //pic
            // new FormField({ name: 'date_created', label: 'date_created', type: 'text' }),
            // new FormField({ name: 'date_updated', label: 'date_updated', type: 'text' }),
            // new FormField({ name: 'user_created', label: 'user_created', type: 'text' }),
            // new FormField({ name: 'user_updated', label: 'user_updated', type: 'text' }),
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'autn',label:'AUTN',sortable: true},
            {key:'auta',label:'AUTA',sortable: true},
            {key:'autm',label:'AUTM',sortable: false},
            {key:'actions',label:'Actions',sortable: false},
        ]
    }
}