import FormField from "./FormField"

/**
 * In an M2O relationship, multiple items from the parent collection
 * are linked to one item in a related collection. For example,
 * there are many cities in a country, but a city can only be in one country.
 */
export default class extends FormField {
    
    // relational data
    relation = null// for relational data
    foreign_key = null// for relational data
    preview = {} // for relational data
    fields = [] // for relational data (list of fields )
    filter = () => ({})// for searching

    constructor(params) {
        super(params)
        if(params?.relation) this.relation = params.relation
        if(params?.foreign_key) this.foreign_key = params.foreign_key
        if(params?.preview) this.preview = params.preview
        if(params?.fields) this.fields = params.fields
        if(params?.filter) this.filter = params.filter
    }

}