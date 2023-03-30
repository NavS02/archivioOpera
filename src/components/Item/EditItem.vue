<template>
  <main id="main" class="main">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <div style="text-align: right">
            <button
              class="btn btn-outline-success"
              @click="onEditClicked(parseInt(id) - 1)"
            >
              <i class="bi bi-arrow-left"></i>
            </button>
            &nbsp;
            <button
              class="btn btn-outline-success"
              @click="onEditClicked(parseInt(id) + 1)"
            >
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>

          Edit item ID #{{ id }} - OGTD #{{ ogtd }} - SGTI #{{ sgti }}
        </h5>

        <div class="card-body">
          <!-- Default Tabs -->

          <Form :fields="fields">
            <template v-slot:footer="{ data }">
              <div class="buttons">
                <button
                  class="btn btn-sm btn-secondary"
                  @click="onCancelClicked()"
                >
                  <font-awesome-icon icon="fa-solid fa-xmark" fixed-width />
                  <span class="ms-1">Cancel</span>
                </button>
                <button
                  class="btn btn-sm btn-primary"
                  @click="onSaveClicked(data)"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-floppy-disk"
                    fixed-width
                  />
                  <span class="ms-1">Save</span>
                </button>
              </div>
            </template>
          </Form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, watch, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { directus } from "../../API";
import * as settings from "../../settings/";
import Form from "../common/Form/Form.vue";

export default {
  components: { Form },
  setup(props, context) {
    const route = useRoute();
    const router = useRouter();

    const collection = ref("");
    const fields = ref([]);
    const item = ref({});

    const { id } = toRefs(props);
    let ogtd = ref("");
    let sgti = ref("");
    // watch the route and update data based on the collection param
    watch(
      route,
      () => {
        // infer the collection from the route
        collection.value = route.params?.collection;
        if (!collection.value) return;
        // retrieve the settings
        const itemSettings = settings[collection.value];
        // define the subset of fields you need to view in the table
        const collectionFields = itemSettings.fields();
        fields.value = collectionFields;
        fetchData();
      },
      { immediate: true, deep: true }
    );

    watch(
      item,
      (item) => {
        fields.value.forEach((field) => {
          field.value = item?.[field.name];
        });
      },
      { immediate: true }
    );

    async function fetchData() {
      try {
        const response = await directus
          .items(collection.value)
          .readOne(id.value, {
            fields: "*.*",
          });
        item.value = response;
        // ogtd.value = response.ogtd.ogtd;
        sgti.value = response.sgti;
      } catch (error) {
        console.log(error);
      }
    }
    function onCancelClicked() {
      const confirmed = confirm("Are you sure you want to leave this page?");
      if (!confirmed) return;
      goToList();
    }
    function onSaveClicked(form) {
      save(form);
    }
    function goToList() {
      router.push({
        name: "listItems",
        params: { collection: collection.value },
      });
    }
    async function save(data) {
      try {
        const response = await directus
          .items(collection.value)
          .updateOne(id.value, data);
        // console.log(response)
        alert("saved successfully");
        goToList();
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    function onEditClicked(itemID) {
      router.push({
        name: "editItem",
        params: { id: itemID, collection: collection.value },
      });
    }

    return {
      fields,
      item,
      onCancelClicked,
      onSaveClicked,
      ogtd,
      sgti,
      onEditClicked,
    };
  },
  props: {
    collection: { type: String, default: "" },
    id: { type: String, default: null }, // this prop is coming from the router
  },
};
</script>

<style scoped>
.buttons {
  display: flex;
  gap: 5px;
}
</style>
