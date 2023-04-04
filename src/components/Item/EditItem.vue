<template>
  <main id="main" class="main">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-8">
            <h3>
              <ins>Scheda n. {{ id }}</ins>
            </h3>
            <h5 style="margin-top: 40px">
              Numero inventario: {{ inventario }}
            </h5>

            <h5>Oggetto: {{ ogtd }}</h5>
            <h5>Soggetto: {{ sgti }}</h5>
          </div>
          <div class="col-sm-4">
            <div class="text-end">
              <button
                class="btn btn-outline-success"
                v-if="id != firstId"
              >
                <i class="bi bi-arrow-left"></i>
              </button>
              &nbsp;
              <button
                class="btn btn-outline-success"
                v-if="id != lastId"
              >
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
            <div
              class="text-center"
              style="
                border: 1px solid #999999;
                width: 150px;
                height: 150px;
                float: right;
                margin-top: 10px;
              "
            >
              <img src="/logoopaSiena.png" alt="" style="margin-top: 20px" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title"></h5>

        <div class="card-body">
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
    let inventario = ref([]);
    let firstId = ref();
    let lastId = ref();
    let photoExample = ref();

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
    function changeView(type) {
      for (let index = 0; index < fields.value.length; index++) {
        if (
          fields.value[index].type === "biglabel" &&
          fields.value[index].label.toUpperCase() == type.toUpperCase()
        ) {
          console.log(fields.value[index]);
        }
      }
    }
    async function fetchData() {
      inventario.value = [];
      try {
        const response = await directus
          .items(collection.value)
          .readOne(id.value, {
            fields: "*.*",
          });
          console.log(response)
        item.value = response;
        // ogtd.value = response.ogtd.ogtd;
        sgti.value = response.sgti;
        const idInvOp = response.inventario.map(
          ({ inventario_id }) => inventario_id
        );
        const opereInventario = await directus.items("inventario").readByQuery({
          filter: {
            id: { _in: idInvOp },
          },
          limit: -1,
        });
        for (let index = 0; index < opereInventario.data.length; index++) {
          inventario.value.push(opereInventario.data[index].invn);
        }
        let arrayPhotos = [
          "/notFound/notFound1.jpg",
          "/notFound/notFound2.png",
          "/notFound/notFound3.png",
          "/notFound/notFound4.png",
        ];
        let randomIndex = Math.floor(Math.random() * arrayPhotos.length);
        photoExample.value = arrayPhotos[randomIndex];
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
        router.push({name: 'listItems', params: { collection: collection.value }})

    }
    async function save(data) {
     try {
        const response = await directus.items(collection.value).updateOne(id.value, data)
        // console.log(response)
        alert('saved successfully')
        goToList()
    } catch (error) {
        console.error(error)
        alert(error)
    }
    }
    function onEditClicked(itemID) {
      router.push({
        name: "editItem",
        params: { id: itemID, collection: collection.value },
      });
    }
    // async function passItem(action) {
    //   let query = {
    //     limit: -1,
    //     filter: {},
    //   };
    //   const response = await directus
    //     .items(collection.value)
    //     .readByQuery(query);
    //   let data = response.data;
    //   let myId = id.value;
    //   let index = data.findIndex((item) => item.id == myId);
    //   firstId.value = data.length > 0 ? data[0].id : null;
    //   lastId.value = data.length > 0 ? data[data.length - 1].id : null;

    //   // MANY2MANY ERROR
    //   // for (let index = 0; index < fields.value.length; index++) {
    //   //   // console.log(fields.value[index].value);
    //   //   fields.value[index].value = null;
    //   // }
    //   if (action === "next") {
    //     onEditClicked(data[index + 1].id);
    //   } else if (action === "return") {
    //     onEditClicked(data[index - 1].id);
    //   }
    // }
    return {
      fields,
      item,
      onCancelClicked,
      onSaveClicked,
      ogtd,
      sgti,
      onEditClicked,
      firstId,
      lastId,
      inventario,
      photoExample,
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
.navbar-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
