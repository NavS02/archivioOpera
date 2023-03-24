<template>
    <table v-bind="{...$attrs}" :class="{striped:striped, hover:hover}">
        <thead>
            <template v-for="field in _fields" :key="`thead-${field.key}`">
                <th :class="{sortable: field.sortable}" @click="field.sortable && sortBy(field)">
                    <span data-sort-indicator v-if="field.sortable">
                        <span class="sort-direction">
                            <font-awesome-icon :icon="sortIcon(field)" fixed-width/>
                        </span>
                        <span class="sort-index" v-html="sortIndex(field)"></span>
                    </span>
                    <slot :name="`head(${field.key})`" :field="field" :data="this">{{field.label}}</slot>
                </th>
            </template>
        </thead>
        <tbody>
            <template v-for="(item, itemIndex) in _items" :key="`trow-${item?.id ?? itemIndex}`">
                <tr>
                    <template v-for="field in _fields" :key="`tcell-${field.key + (item?.id ?? itemIndex)}`">
                        <td :class="{ [`tcell-${field.key}`]: true }"><slot :name="`cell(${field.key})`"
                            :data="this" :item="item" :field="field"
                            :value="item[field.key]"
                        >{{item[field.key]}}</slot></td>
                    </template>
                </tr>
            </template>
        </tbody>
        <tfoot>
            <slot name="footer" :data="this"></slot>
        </tfoot>
    </table>
</template>

<script>
import {SORTDIRECTION, SortRule, multiSort} from './Sorter'
    
class Field {
    key='' // age
    label='' // Person age
    sortable=false // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
     sortFn=null 

    constructor(data) {
        if(typeof data === 'string') {
            this.key = data
            this.label = data
        }else {
            this.key = data?.key
            this.label = data?.label
            this.sortable = data?.sortable || false
            this.sortFn = data?.sortFn || null
        }
    }
}

const extractKeysFromList = (items) => {
    let keys = []
    for (const item of items) {
        keys = keys.concat(Object.keys(item))
    }
    // remove duplicates
    keys = keys.filter( (item, index) => keys.indexOf(item) == index )
    return keys
}

export default {
    data() {
        return {
            sorts: []
        }
    },
    props: {
        fields: { type: Array, default: [] },
        items: { type: Array, default: [] },
        striped: { type: Boolean, default: true },
        hover: { type: Boolean, default: true },
    },
    computed: {
        _items() {
            if(this.sorts.length==0) return this.items
            const items = [...this.items]
            const sorted = multiSort(this.sorts, items)
            return sorted
        },
        /**
         * map fields to Field objects
         */
        _fields() {
            let fields = this.fields
            if(fields.length===0) {
                fields = extractKeysFromList([...this.items])
            }
            return fields.map( field => new Field(field) )
        }
    },
    methods: {
        sortIndex(field) {
            const index = this.sorts.findIndex(item => item.key === field.key)
            if(index<0) return '\u00A0'
            return index+1
        },
        sortIcon(field) {
            const index = this.sorts.findIndex(item => item.key === field.key)
            if(index<0) return 'fa-solid fa-sort'
            const sortRule = this.sorts[index]
            if(sortRule.direction===SORTDIRECTION.ASC) return 'fa-sort-up'
            else if(sortRule.direction===SORTDIRECTION.DESC) return 'fa-sort-down'
            else {
                console.error(`error finding the sort status for field ${field.key}`)
                return 'fa-solid fa-exclamation-triangle'
            }
        },
        sortBy(field) {
            const { key } = field
            const index = this.sorts.findIndex(item => item.key === key)
            if(index<0) {
                const sortItem = new SortRule(key, SORTDIRECTION.ASC, field.sortFn)
                this.sorts.push(sortItem)
            } else {
                const sortItem = this.sorts[index]
                const direction = sortItem.direction
                if(direction===SORTDIRECTION.ASC) sortItem.direction = SORTDIRECTION.DESC
                else if(direction===SORTDIRECTION.DESC) {
                    this.sorts.splice(index,1)
                }
            }
        },
    }
}
</script>

<style scoped>
.table>:not(:first-child) {
    border-top: 2px solid #ededed;
    padding-bottom: 10px;
}
table {
    overflow: hidden;
}
th {
    padding: 13px;
}
</style>