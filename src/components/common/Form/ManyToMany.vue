<template>
  <div>
    <slot name="label">
      <label
        :for="`field-${field.name}`"
        class="form-label"
        v-html="field.label"
      >
      </label>
    </slot>

    <div class="card">
      <div class="card-body items d-flex flex-column gap-2">
        <template v-for="(item, index) in items" :key="index">
          <div class="item d-flex p-2">
            <div class="preview">
              <!-- run the preview function if available -->
              <template v-if="typeof preview == 'function'">
                {{ preview(item.value) }}
              </template>
              <!-- show the id otherwise -->
              <template v-else>
                <span>{{ item.value.id }}</span>
              </template>
            </div>
            <template v-if="item.deleted">
              <button
                class="btn btn-sm btn-info ms-auto"
                @click="onRestoreClicked(item)"
              >
                <font-awesome-icon icon="fa-solid fa-rotate-left" fixed-width />
              </button>
            </template>
            <template v-else>
              <button
                class="btn btn-sm btn-danger ms-auto"
                @click="onRemoveClicked(item)"
              >
                <font-awesome-icon icon="fa-solid fa-trash" fixed-width />
              </button>
            </template>
          </div>
          <slot :item="item"></slot>
        </template>

        <div class="buttons d-flex gap-2">
          <button class="btn btn-sm btn-primary" @click="onCreateNewClicked">
            <font-awesome-icon icon="fa-solid fa-plus" fixed-width />
            <span class="ms-1">Crea nuovo</span>
          </button>
          <button class="btn btn-sm btn-primary" @click="onAddExistingClicked">
            <font-awesome-icon icon="fa-solid fa-list" fixed-width />
            <span class="ms-1">Aggiungi esistente</span>
          </button>
        </div>
      </div>
    </div>

    <Drawer ref="createDrawer">
      <template v-slot:header>
        <span>Create item</span>
      </template>

      <MyForm :fields="newItemFields" v-model="newItem"> </MyForm>
    </Drawer>

    <Drawer ref="selectDrawer">
      <template v-slot:header>
        <span>Select item</span>

        <div>
          <div class="input-group">
            <input
              class="form-control"
              type="text"
              v-model.lazy="query"
              placeholder="3 characters min..."
            />
            <button class="btn btn-sm btn-primary" @click="onSearchClicked">
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                fixed-width
              />
              <span class="ms-1">Cerca</span>
            </button>
          </div>
        </div>
      </template>
      <div>
        <template v-for="(item, index) in results" :key="index">
          <div class="card mt-2">
            <div class="preview card-body">
              <input
                class="form-check-input"
                :id="`select-${item.id}`"
                type="checkbox"
                v-model="selectedIDs"
                :value="item.id"
              />
              <!-- run the preview function if available -->
              <label class="form-check-label ms-2" :for="`select-${item.id}`">
                <template v-if="typeof preview == 'function'">
                  {{ preview(item) }}
                </template>
                <!-- show the id otherwise -->
                <template v-else>
                  <span>{{ item.id }}</span>
                </template>
              </label>
            </div>
          </div>
        </template>
      </div>
    </Drawer>
  </div>
</template>

<script>
import FormField from "../../../models/FormField";
import { ref, toRefs, computed, watch, defineAsyncComponent } from "vue";
import { directus } from "../../../API/";
/**
 * A relation could be displayed as a number or an object;
 * the object contains an ID when updating and no ID when creating.
 *
 * @see https://docs.directus.io/reference/introduction.html#relational-data
 *
 * - number: ID of the associated item
 * - object with no ID: newly created item; will be saved if associated
 * - object with ID: object that has been updated; will be updated when associated
 *
 * example:
 *   [
 *    1,
 *    2,
 *    {
 *        name: 'john'
 *    },
 *    {
 *        id: 5,
 *        name: 'jane'
 *    },
 *    6
 *   ]
 */

class MetaItem {
  relationID; // id of the many to many relation in the table
  itemID; // id ot the related item
  value;
  deleted = false;
  updated = false;

  constructor(itemID = null, relationID = null) {
    this.itemID = itemID;
    this.relationID = relationID;
  }

  get isExisting() {
    if (!this.relationID) return false;
    if (this.updated) return false;
    return true;
  }
}

export default {
  components: {
    MyForm: defineAsyncComponent(() => import("../Form/Form.vue")),
  },
  setup(props, context) {
    const items = ref([]); // list selected items (numeric form)
    const { modelValue, field } = toRefs(props);
    const {
      relation, // name of the collection
      foreign_key, // field for the connection
      preview, // function used to preview the item
      filter, // filter function used when searching for an item by text
    } = field.value;

    const createDrawer = ref(null); // reference an item in the template
    const createItemForm = ref(null); // reference an item in the template

    const selectDrawer = ref(null); // reference an item in the template

    const selectedIDs = ref([]);
    const unwatch = watch(modelValue, async (value) => {
      const _ids = [];
      let list = [];
      for (let item of value) {
        const relationID = item.id;
        const itemID = item[foreign_key];

        const metaItem = new MetaItem(itemID, relationID);
        _ids.push(itemID);
        list.push(metaItem);
      }
      if (_ids.length > 0) {
        // if we have ids (selected items, then fetch and assign data)
        const data = await fetchIDs(_ids);
        data.forEach((element) => {
          const id = element?.id;
          const _metaItem = list.find((item) => item.itemID === id);
          if (_metaItem) _metaItem.value = element;
        });
      }
      items.value = list;
      unwatch(); // run just once!
    });

    watch(
      items,
      (list) => {
        const data = [];
        list.forEach((metaItem) => {
          if (metaItem.deleted) return;
          if (metaItem.isExisting) {
            data.push(metaItem.relationID); // use the same relation ID since nothing changed
          } else {
            let payload = { [foreign_key]: metaItem.value };
            data.push(payload);
          }
        });
        context.emit("update:modelValue", data);
      },
      {
        deep: true,
      }
    );

    const currentIDs = computed(() => {
      const _ids = [];
      items.value.forEach((item) => {
        const id = item?.value?.id;
        if (id) _ids.push(id);
      });
      return _ids;
    });

    const query = ref("");
    const results = ref([]);

    // data for creating new items
    const newItemFields = ref({});
    const newItem = ref({});

    /**
     * fetch a list of items matching specific IDs
     */
    async function getById(id) {
      // make a request filtering by id
      const item = await directus.items(relation).readOne(id);
      return item;
    }
    async function fetchIDs(ids = []) {
  //  SOMETIMES SEND AN OBJECT
      if (ids.length == 0) return;
      // make a request filtering by id
      const response = await directus.items(relation).readByQuery({
        filter: {
          id: {
            _in: ids,
          },
        },
        limit: -1,
      });
      const { data = [] } = response;
      return data;
    }
    async function search() {
      const text = query.value;
      const params = { limit: -1 }; // default params
      params.filter = filter(text); // apply filter if a query is set
      const existingIDs = currentIDs.value;
      if (existingIDs.length > 0) {
        params.filter.id = {
          _nin: currentIDs.value,
        };
      }
      const response = await directus.items(relation).readByQuery(params);
      const { data = [] } = response;
      results.value = data;
    }
    async function addExisting() {
      const _ids = selectedIDs.value;
      if (_ids.length === 0) return;
      const data = await fetchIDs(_ids);
      data.forEach((element) => {
        const metaItem = new MetaItem(element.id);
        metaItem.value = element;
        items.value.push(metaItem);
      });
    }
    function addNew() {
      // todo: get data directly from the form in the creation drawer
      const data = newItem.value;
      if (!data) return;
      const metaItem = new MetaItem();
      metaItem.value = data;
      items.value.push(metaItem);
    }
    /**
     * search and remove one of the possible items as available in the modelValue:
     * number, object with ID, and object without ID
     * @param {Object} itemToRemove
     */
    function remove(item) {
      item.deleted = true; // mark the metaitem as deleted
    }
    function restore(item) {
      item.deleted = false; // mark the metaitem as deleted
    }
    /**
     * remove the item from both
     * the ids (triggering the v-model update)
     * and from the items
     * @param {Object} itemToRemove
     */
    function onRemoveClicked(item) {
      remove(item);
    }
    function onRestoreClicked(item) {
      restore(item);
    }
    async function onCreateNewClicked() {
      newItemFields.value = field.value.fields(); // reset
      const response = await createDrawer.value.show();
      if (response === false) return;
      else addNew();
    }
    async function onAddExistingClicked() {
      selectedIDs.value = []; // reset ids
      query.value = ""; // reset query
      await search();
      const response = await selectDrawer.value.show();
      if (response === false) return;
      else addExisting();
    }
    function onSearchClicked() {
      search();
    }

    const test = ref({});

    // init() // fetch associated items
    return {
      newItem,
      selectedIDs,
      newItemFields,
      items,
      query,
      results,
      preview,
      createDrawer,
      selectDrawer,
      createItemForm, // refs
      onRemoveClicked,
      onRestoreClicked,
      onCreateNewClicked,
      onAddExistingClicked,
      onSearchClicked,
    };
  },
  emits: ["update:modelValue"], // v-model
  props: {
    modelValue: { type: [Array, Object], default: () => [] }, // v-model
    field: { type: FormField, default: null },
  },
};
</script>

<style scoped>
.item {
  border: solid 1px rgb(0 0 0 / 0.15);
}
</style>
