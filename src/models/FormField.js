
/**
 * provide a structure for fields used in a form
 */
export default class {
    name = ''
    label = ''
    type = 'text'
    __initialValue = null // save initial value
    __value = null// value that can be updated
    __dirty = false // mark the field as dirty if modified
    


    constructor(params) {
        if(params?.name) this.name = params.name
        if(params?.label) this.label = params.label
        if(params?.column) this.column = params.column
        if(params?.type) this.type = params.type
        this.__initialValue = this.__value = params?.value ?? this.#getDefaultValueByType(this.type)
    }

    get value() { return this.__value }
    set value(value) {
        this.__dirty = true
        this.__value = value
    }

    get dirty() { return this.__dirty }

    #getDefaultValueByType(type) {
        let value
        switch (type) {
            case 'text':
                value = ''
                break;
            case 'number':
                value = 0
                break;
            case 'boolean':
                value = false
                break;
            default:
                break;
        }
        return value
    }

}