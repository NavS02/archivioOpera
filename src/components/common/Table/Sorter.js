const SORTDIRECTION = Object.freeze({
    ASC: 'ASC',
    DESC: 'DESC',
    IGNORE: 'IGNORE',
})

class SortRule {
    key
    direction
    sortFn

    constructor(key, direction=SORTDIRECTION.ASC, sortFn=null) {
        this.key = key
        this.direction = direction
        this.sortFn = sortFn
    }
}

/**
 * 
 * @param {SortRule[]} sortRules [{key, direction}] 
 * @param {Array} items 
 */
const multiSort = (sortRules, items) => {
    // helper method to detect if both elements are numeric
    const areNumeric = (a,b) => {
        let typeA = typeof a
        let typeB = typeof b
        let areNumeric = (typeA == 'number' && typeA == typeB)
        return areNumeric
    }
    const compareNumbers = (a, b) => {
        return a - b;
    }
    const compareStrings = (a, b) => {
        a = a ?? '' // take care of null values
        b = b ?? '' // take care of null values
        return a.localeCompare(b);
    }
    const getSortFunction = (a, b) => {
        const numeric = areNumeric(a, b)
        if(numeric) return compareNumbers
        return compareStrings
    }

    // do not use the original array
    const toBeSorted = [...items]

    toBeSorted.sort((itemA, itemB) => {
        let result = 0
        for(let sortRule of sortRules) {
            let {key, direction, sortFn} = sortRule
            let directionAdjust = direction===SORTDIRECTION.ASC ? 1 : -1
            let a = itemA[key]
            let b = itemB[key]
            // use the custom sort function or a default one
            sortFn = (typeof sortFn == 'function') ? sortFn : getSortFunction(a,b)
            result = sortFn(a, b) * directionAdjust // invert id DESC
            if(result!==0) return result
        }
        return result
    })
    return toBeSorted
}

export { SORTDIRECTION, SortRule, multiSort}