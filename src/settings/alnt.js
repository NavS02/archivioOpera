import {FormField, OneToManyField} from '../models'
import { opera } from '.'

export default {
    collection: 'opere',
    fields() {
        return [
            new FormField({ name: 'alnt', label: 'alnt', type: 'text', value: '' }),
            new OneToManyField({
                name: 'opere',
                label: 'Opere', value: [],
                related: 'opera',
                foreign_key: 'id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.alnt} ` },
                fields: opera.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { alnt: { _contains: text } }
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