<template>
  <main id="main" class="main">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Edit item ID #{{ id }} - OGTD #{{ ogtd }} - SGTI #{{ sgti }}
        </h5>

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
                <font-awesome-icon icon="fa-solid fa-floppy-disk" fixed-width />
                <span class="ms-1">Save</span>
              </button>
            </div>
          </template>
        </Form>
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
        console.log(response);
        ogtd.value = response.ogtd.ogtd;
        sgti.value = response.sgti;

        item.value = response;
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

const alertElement = document.createElement("div");
alertElement.classList.add("alert", "alert-success", "my-3");
alertElement.innerText = "Item #"+id.value +" updated!";

alertElement.style.position = "fixed";
alertElement.style.top = "30px";
alertElement.style.right = "10px";
alertElement.style.zIndex = "9999";

document.body.appendChild(alertElement);
setTimeout(() => {
  alertElement.remove();
}, 4000);


        goToList();
      } catch (error) {
        console.error(error);
        // alert(error);
        const alertElement = document.createElement("div");
alertElement.classList.add("alert", "alert-danger", "my-3");
alertElement.innerText = "ERROR:"+error;

alertElement.style.position = "fixed";
alertElement.style.top = "10px";
alertElement.style.right = "10px";
alertElement.style.zIndex = "9999";

document.body.appendChild(alertElement);
setTimeout(() => {
  alertElement.remove();
}, 4000);
      }
    }

    return {
      fields,
      item,
      onCancelClicked,
      onSaveClicked,
      ogtd,
      sgti,
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
