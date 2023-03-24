import FormField from '../FormField'

export default {
    collection: 'roz',
    fields() {
        return [
            // new FormField({ name: 'id', label: 'id', type: 'text' }),
           
            new FormField({ name: 'ognac', label: 'Ognac', type: 'text', value: '' }),
            new FormField({ name: 'roz', label: 'Roz', type: 'text', value: '' }),
            // new FormField({ name: 'date_created', label: 'date_created', type: 'text' }),
            // new FormField({ name: 'date_updated', label: 'date_updated', type: 'text' }),
            // new FormField({ name: 'user_created', label: 'user_created', type: 'text' }),
            // new FormField({ name: 'user_updated', label: 'user_updated', type: 'text' }),
        ]
    }
}