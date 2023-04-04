import {FormField, OneToManyField} from '../models'
import { opera } from '.'

export default {
    collection: 'opere',
    fields() {
        return [
            new FormField({ name: 'ogtt', label: 'ogtt', type: 'text', value: '' }),
            new OneToManyField({
                name: 'opere',
                label: 'Opere', value: [],
                related: 'opera',
                foreign_key: 'id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.ogtt} ` },
                fields: opera.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { autn: { _contains: text } }
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