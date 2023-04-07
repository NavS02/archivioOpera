import {FormField, OneToManyField} from '../../models'
import { opera } from '..'

export default {
    collection: 'opere',
    fields() {
        return [
            new FormField({ name: 'sti_tipo', label: 'sti_tipo', type: 'text', value: '' }),
            new OneToManyField({
                name: 'opere',
                label: 'Opere', value: [],
                related: 'opera',
                foreign_key: 'id',
                preview: (item) => { return `${item?.sti_tipo} ` },
                fields: opera.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { sti_tipo: { _contains: text } }
                },
            }),
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'nome',label:'Nome',sortable: true},
            {key:'opere',label:'Opere',sortable: true},
            {key:'actions',label:'Actions',sortable: false},
        ]
    }
}