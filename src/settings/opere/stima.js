import { FormField, ManyToOneField } from '../../models'
import sti_tipo from '../stima/sti_tipo'
import stim from '../stima/stim'

export default {
    collection: 'stima',
    fields() {
        return [

            new FormField({ name: 'stis', label: 'Stima', type: 'text', value: '' }),
            new FormField({ name: 'stis_assicurazione', label: 'stis_assicurazione', type: 'text', value: '' }),
            new FormField({ name: 'stid', label: 'Data', type: 'text', value: '' }),
            
            new ManyToOneField({
                name: "sti_tipo",
                label: "sti_tipo",
                value: null,
                related: "sti_tipo",
                type: "manyToOne",
                column: "3",
                preview: (item) => {
                  return `${item?.sti_tipo}`;
                },
                fields: sti_tipo.fields,
                filter: (text) => {
                  if (text.trim() === "") return {};
                  return { sti_tipo: { _contains: text } };
                },
              }),

              new ManyToOneField({
                name: "stim",
                label: "stim",
                value: null,
                related: "stim",
                type: "manyToOne",
                column: "3",
                preview: (item) => {
                  return `${item?.stim}`;
                },
                fields: stim.fields,
                filter: (text) => {
                  if (text.trim() === "") return {};
                  return { stim: { _contains: text } };
                },
              }),
        ]
    },
    tableFields() {
        return [
        ]
    }
}