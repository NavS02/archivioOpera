import FormField from './FormField'
//import tcl from './localizzazione/tcl'
/*import prvs from './localizzazione/prvs'
import prvr from './localizzazione/prvr'
import prvp from './localizzazione/prvp'
import prvc from './localizzazione/prvc'
import prct from './localizzazione/prct'
import prcq from './localizzazione/prcq'*/
import prvl from './localizzazione/prvl'

export default {
    collection: 'localizzazione',
    fields() {
        return [

            //tcl ////waiting for selectbox
            //prvs ////waiting for selectbox
            //prvr ////waiting for selectbox
            //prvp ////waiting for selectbox
            //prvc ////waiting for selectbox

           /* new FormField({
                name: 'prvl',
                label: 'prvl', type: 'manyToMany', value: [],
                relation: 'prvl',
                foreign_key: 'prvl_id',
                preview: (item) => { return `${item.id} - ${item.prvl}` },
                fields: prvl.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { prvl: { _contains: text } }
                },
            }),*/
            //prct
            //prcq
            new FormField({ name: 'prcd', label: 'prcd', type: 'text', value: '' }),
            new FormField({ name: 'prcc', label: 'prcc', type: 'text', value: '' }),
            new FormField({ name: 'prcu', label: 'prcu', type: 'text', value: '' }),
            new FormField({ name: 'prcm', label: 'prcm', type: 'text', value: '' }),
            new FormField({ name: 'prcs', label: 'prcs', type: 'text', value: '' }),
            new FormField({ name: 'prdi', label: 'prdi', type: 'text', value: '' }),
            new FormField({ name: 'prdu', label: 'prdu', type: 'text', value: '' }),
           
           
            // new FormField({ name: 'date_created', label: 'date_created', type: 'text' }),
            // new FormField({ name: 'date_updated', label: 'date_updated', type: 'text' }),
            // new FormField({ name: 'user_created', label: 'user_created', type: 'text' }),
            // new FormField({ name: 'user_updated', label: 'user_updated', type: 'text' }),
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'prcd',label:'prcd',sortable: true},
            {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}