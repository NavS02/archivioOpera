import FormField from './FormField'
//ftax
//ftap

export default {
    collection: 'fta',
    fields() {
        return [
            //ftax
            //ftap
            new FormField({ name: 'ftaa', label: 'Ftaa', type: 'text', value: '' }),
            new FormField({ name: 'ftad', label: 'Ftad', type: 'text', value: '' }),
            new FormField({ name: 'ftae', label: 'Ftae', type: 'text', value: '' }),
            new FormField({ name: 'ftan', label: 'Ftan', type: 'text', value: '' }),
            new FormField({ name: 'ftat', label: 'Ftat', type: 'text', value: '' }),
           
        ]
    },
        
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'ftan',label:'ftan',sortable: true},
            {key:'ftad',label:'Ftad',sortable: true},
             {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}