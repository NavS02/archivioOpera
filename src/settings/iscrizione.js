import FormField from './FormField'
//import isrc from './iscrizione/isrc'
//import isrl from './iscrizione/isrl'
//import isrs from './iscrizione/isrs'
import isrt from './iscrizione/isrt'

export default {
    collection: 'iscrizione',
    fields() {
        return [
            //isrc waiting for select box
            //isrl waiting for select box
            //isrs waiting for select box
            /*new FormField({
                name: 'isrt',
                label: 'Isrt', type: 'manyToMany', value: [],
                relation: 'isrt',
                foreign_key: 'isrt_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.isrt}` },
                fields: isrt.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { isrt: { _contains: text } }
                },
            }),*/
            new FormField({ name: 'isrp', label: 'Isrp', type: 'text', value: '' }),
            new FormField({ name: 'isra', label: 'Isra', type: 'text', value: '' }),
            new FormField({ name: 'isri', label: 'Isri', type: 'textarea', value: '' }),
            new FormField({ name: 'ognac', label: 'Ognac', type: 'number', value: '' }),
           
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'isrp',label:'Isrp',sortable: true},
            {key:'isra',label:'Isra',sortable: true},
            {key:'isri',label:'Isri',sortable: true},
            {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}