/**
 * class with metadata used in the many-to-many  relationship
 */
export default class {
    relationID // id of the many to many relation in the table
    itemID // id ot the related item
    value
    deleted = false
    updated = false

    constructor(itemID=null, relationID=null) {
        this.itemID = itemID
        this.relationID = relationID
    }

    get isExisting() {
        if(!this.relationID) return false
        if(this.updated) return false
        return true
    }
}