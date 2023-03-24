import FormField from './FormField'


export default {
    collection: 'committenza',
    fields() {
        return [

            new FormField({ name: 'ognac', label: 'Ognac', type: 'number', value: '' }),
            new FormField({ name: 'cmmn', label: 'Cmmn', type: 'text', value: '' }),
            new FormField({ name: 'cmmd', label: 'Cmmd', type: 'text', value: '' }),
            new FormField({ name: 'cmmmc', label: 'Cmmmc', type: 'text', value: '' }),
            new FormField({ name: 'cmmmf', label: 'Cmmmf', type: 'text', value: '' }),
           
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'cmmn',label:'Cmmn',sortable: true},
            {key:'cmmd',label:'Cmmd',sortable: true},
            {key:'actions',label:'Actions',sortable: false},
        ]
    }
}