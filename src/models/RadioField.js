import { FormField } from "."
/**
 * provide a structure for fields used in a form
 */
export default class extends FormField {
    choices = []
    inline = false // how to display the options

    constructor(params) {
        super(params)
        if(Array.isArray(params?.choices)) this.choices = params.choices
        if(params?.inline) this.inline =  Boolean(params.inline)
    }

}