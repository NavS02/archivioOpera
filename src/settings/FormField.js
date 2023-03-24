
/**
 * provide a structure for fields used in a form
 */
export default class Field {
    name
    label
    type
    column
    $initialValue // save initial value
    $value // value that can be updated
    $dirty = false // mark the field as dirty if modified
    // relational data
    relation // for relational data
    foreign_key // for relational data
    preview // for relational data
    fields // for relational data (list of fields )
    filter // for searching

    constructor(params) {
        this.name = params?.name ?? ''
        this.label = params?.label ?? ''
        this.column = params?.column ?? '12'
        this.type = params?.type ?? 'text'
        this.$initialValue = this.$value = params?.value ?? this.#getDefaultValueByType(this.type)
        // relational data
        this.relation = params?.relation ?? null
        this.foreign_key = params?.foreign_key ?? null
        this.preview = params?.preview ?? (() => ({}))
        this.fields = params?.fields ?? (() => [])
        this.filter = params?.filter ?? (() => ({}))
    }

    get value() { return this.$value }
    set value(value) {
        this.$dirty = true
        this.$value = value
    }

    get dirty() { return this.$dirty }

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