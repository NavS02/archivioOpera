import FormField from './FormField'


export default {
    collection: 'mostra',
    fields() {
        return [
      
            new FormField({ name: 'mstt', label: 'mstt', type: 'number', value: '' }),
            new FormField({ name: 'mstl', label: 'mstl', type: 'text', value: '' }),
            new FormField({ name: 'mstd', label: 'mstd', type: 'text', value: '' }),
            new FormField({ name: 'mstfin', label: 'mstfin', type: 'text', value: '' }),
            new FormField({ name: 'mstini', label: 'mstini', type: 'text', value: '' }),
            new FormField({ name: 'mstval', label: 'mstval', type: 'text', value: '' }),

           
        ]
    },
            
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'mstt',label:'Mstt',sortable: true},
            {key:'mstd',label:'Mstd',sortable: true},
            {key:'mstfin',label:'Mstfin',sortable: true},
            {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}