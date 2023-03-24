import FormField from './FormField'
import biblio from './bib/biblio'

export default {
    collection: 'bib',
    fields() {
        return [

            new FormField({ name: 'biba', label: 'Biba', type: 'text', value: '' }),
            new FormField({ name: 'bibd', label: 'Bibd', type: 'text', value: '' }),
            new FormField({ name: 'bibn', label: 'Bibn', type: 'text', value: '' }),
            new FormField({ name: 'bibi', label: 'Bibi', type: 'text', value: '' }),
            new FormField({ name: 'bil', label: 'Bil', type: 'textarea', value: '' }),
            new FormField({
            name: 'biblio',
            label: 'Biblio', type: 'manyToMany', value: [],
            relation: 'biblio',
            foreign_key: 'biblio_id',
            preview: (item) => { return `${item?.id ?? '--'} - ${item?.bibn}` },
            fields: biblio.fields,
            filter: (text) => {
            if(text.trim()==='') return {}
            return { bib: { _contains: text } }
            },
            }),
           
        ]
    },
        
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'biba',label:'Biba',sortable: true},
            {key:'bibd',label:'Bibd',sortable: true},
             {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}