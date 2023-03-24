import FormField from './FormField'


export default {
    collection: 'inventario',
    fields() {
        return [
            
            new FormField({ name: 'invn', label: 'Invn', type: 'text', value: '' }),
            new FormField({ name: 'invd', label: 'Invd', type: 'text', value: '' }),
            new FormField({ name: 'invc', label: 'Invc', type: 'text', value: '' }),
           
        ]
    }
}