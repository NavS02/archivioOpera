import FormField from "./FormField"

/**
 * In an M2O relationship, multiple items from the parent collection
 * are linked to one item in a related collection. For example,
 * there are many cities in a country, but a city can only be in one country.
 */
export default class extends FormField {
    type = 'oneToMany'
    // relational data
    related = null// name of related collection
    foreign_key = null// id of related collection in many to many table
    preview = {} // for relational data
    fields = [] // list of fields of related collection
    filter = () => ({})// for searching

    constructor(params) {
        super(params)
        if(params?.related) this.related = params.related
        if(params?.foreign_key) this.foreign_key = params.foreign_key
        if(params?.preview) this.preview = params.preview
        if(params?.fields) this.fields = params.fields
        if(params?.filter) this.filter = params.filter
    }

}