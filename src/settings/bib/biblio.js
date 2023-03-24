import FormField from '../FormField'


export default {
    collection: 'biblio',
    fields() {
        return [

            new FormField({ name: 'bibh', label: 'Bibh', type: 'text', value: '' }),
            new FormField({ name: 'biba', label: 'Biba', type: 'text', value: '' }),
            new FormField({ name: 'bibc', label: 'Bibc', type: 'text', value: '' }),
            new FormField({ name: 'bibg', label: 'Bibg', type: 'text', value: '' }),
            new FormField({ name: 'bibt', label: 'Bibt', type: 'text', value: '' }),
            new FormField({ name: 'bibl', label: 'Bibl', type: 'text', value: '' }),
            new FormField({ name: 'bibz', label: 'Bibz', type: 'text', value: '' }),
            new FormField({ name: 'bibd', label: 'Bibd', type: 'text', value: '' }),
            new FormField({ name: 'bibe', label: 'Bibe', type: 'text', value: '' }),
            new FormField({ name: 'bibs', label: 'Bibs', type: 'text', value: '' }),
            new FormField({ name: 'bibv', label: 'Bibv', type: 'text', value: '' }),
            new FormField({ name: 'bibp', label: 'Bibp', type: 'text', value: '' }),
            new FormField({ name: 'cmpd', label: 'Cmpd', type: 'text', value: '' }),
            new FormField({ name: 'cmpn', label: 'Cmpn', type: 'text', value: '' }),
           
        ]
    },
        
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'biba',label:'Biba',sortable: true},
            {key:'bibc',label:'Bibc',sortable: true},
             {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}