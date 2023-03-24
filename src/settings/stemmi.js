import FormField from './FormField'
//import stmc from './stemmi/stmc'
//import stmq from './stemmi/stmq'

export default {
    collection: 'stemmi',
    fields() {
        return [
            
           new FormField({ name: 'ognac', label: 'Ognac', type: 'number', value: '' }),
           //stmc waiting for select box 
           //stmq waiting for select box 
            new FormField({ name: 'stmi', label: 'Stmi', type: 'text', value: '' }),
            new FormField({ name: 'stmu', label: 'Stmu', type: 'text', value: '' }),
            new FormField({ name: 'stmp', label: 'Stmp', type: 'text', value: '' }),
            new FormField({ name: 'stmd', label: 'Stmd', type: 'text', value: '' }),
           
        ]
    },
    
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'stmi',label:'Stmi',sortable: true},
            {key:'stmu',label:'Stmu',sortable: true},
            {key:'stmp',label:'Stmp',sortable: true},
            {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}