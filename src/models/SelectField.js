import { FormField } from "."
/**
 * provide a structure for fields used in a form
 */
export default class extends FormField {
    type = 'select'
    emptyText = 'Select an option...'
    options = []

    constructor(params) {
        super(params)
        if(params?.emptyText) this.emptyText = params.emptyText
        if(Array.isArray(params?.options)) this.options = params.options
    }

}