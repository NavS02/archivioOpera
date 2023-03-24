import FormField from './FormField'
  //fntp

export default {
    collection: 'fonte',
    fields() {
        return [
      
            new FormField({ name: 'ognac', label: 'ognac', type: 'number', value: '' }),
           //fntp
            new FormField({ name: 'fnta', label: 'Fnta', type: 'text', value: '' }),
            new FormField({ name: 'fntt', label: 'Fntt', type: 'text', value: '' }),
            new FormField({ name: 'fntd', label: 'Fntd', type: 'text', value: '' }),
            new FormField({ name: 'fntf', label: 'Fntf', type: 'text', value: '' }),
            new FormField({ name: 'fntn', label: 'Fntn', type: 'text', value: '' }),
            new FormField({ name: 'fnts', label: 'Fnts', type: 'text', value: '' }),
            new FormField({ name: 'fnti', label: 'Fnti', type: 'text', value: '' }),
           
        ]
    },
            
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'fnta',label:'Fnta',sortable: true},
            {key:'fntt',label:'Fntt',sortable: true},
            {key:'fntd',label:'Fntd',sortable: true},
            {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}