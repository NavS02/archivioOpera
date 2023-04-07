import {FormField, OneToManyField} from '../../models'
import { opera } from '..'

export default {
    collection: 'opere',
    fields() {
        return [
            new FormField({ name: 'stim', label: 'stim', type: 'text', value: '' }),
            new OneToManyField({
                name: 'opere',
                label: 'Opere', value: [],
                related: 'opera',
                foreign_key: 'id',
                preview: (item) => { return `${item?.stim} ` },
                fields: opera.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { stim: { _contains: text } }
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