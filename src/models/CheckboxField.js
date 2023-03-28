import { FormField } from "."
/**
 * provide a structure for a checkbox field
 * in directus, in the interface options of the field,
 * choose "Enable custom values" if the options provided
 * in this field should be indipendent from the ones
 * provided in directus
 */
export default class extends FormField {
    options = []
    inline = false // how to display the options

    constructor(params) {
        super(params)
        if(Array.isArray(params?.options)) this.options = params.options
        if(params?.inline) this.inline =  Boolean(params.inline)
    }

}