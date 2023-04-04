/**
 * class with metadata used in the one-to-many  relationship
 */
export default class {
    itemID // id ot the related item
    value
    deleted = false
    updated = false

    constructor(itemID=null) {
        this.itemID = itemID
    }

    get isExisting() {
        if(!this.itemID) return false
        if(this.updated) return false
        return true
    }
}