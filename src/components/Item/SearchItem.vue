<template>
  <main id="main" class="main">
    <div class="col-12">
      <!-- Search Form -->
      <h5 class="card-title">ID:</h5>
      <input
        type="number"
        class="form-control"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        id="resultID"
      />
      <h5 class="card-title">Autore:</h5>
      <input
        type="text"
        class="form-control"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        id="resultAutore"
      />
      <h5 class="card-title">Sogetto (SGTI):</h5>
      <input
        type="text"
        class="form-control"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        id="resultSGTI"
      />
      <h5 class="card-title">Titolo (SGTT):</h5>
      <input
        type="text"
        class="form-control"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        id="resultSGTT"
      />
      <h5 class="card-title">Oggetto (OGTD):</h5>
      <input
        type="text"
        class="form-control"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        id="resultOGTD"
      />
      <h5 class="card-title">Inventario:</h5>
      <input
        type="text"
        class="form-control"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        id="resultInv"
      />
      <h5 class="card-title">Tecnica (MTC):</h5>
      <input
        type="text"
        class="form-control"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        id="resultMTC"
      />
      <br />

      <button type="button" class="btn btn-primary" @click="fetchData()">
        Cerca
      </button>

      <hr />
      Mostra:
      <input
        type="number"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value="50"
        id="limit"
      />
      <div style="float: right">
        Ricerca:
        <input
          type="text"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          id="ricercaBar"
          v-on:keyup="filterTable()"
        />
      </div>
      <br />
      <div class="form-check" style="float: right">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault1"> Llista </label>
      </div>
      <div class="form-check" style="float: right">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2"> Carta </label>
      </div>
      <div class="card gradient-dark-grey" style="margin-top: 30px">
        <div class="card-header">
          <div class="">
            <header class="mb-2"></header>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <Table
              class="table v-middle m-0"
              :items="items"
              :fields="fields"
              id="table"
            >
              <template #cell(actions)="{ item, field, value }">
                <div class="actions">
                  <button
                    title="edit"
                    class="btn btn-sm btn-light"
                    @click="onEditClicked(item)"
                  >
                    <font-awesome-icon icon="fa-solid fa-pencil" fixed-width />
                  </button>
                  <button
                    title="delete"
                    class="btn btn-sm btn-light text-danger"
                    @click="onDeleteClicked(item)"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash" fixed-width />
                  </button>
                  <!-- <button
                    title="Info"
                    class="btn btn-sm btn-light"
                    @click="onInfoClicked(item)"
                  >
                    <font-awesome-icon icon="fa-solid fa-eye" />
                  </button> -->
                </div>
              </template>
            </Table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { directus } from "../../API/";
import * as settings from "../../settings/";
import Table from "../common/Table/Table.vue";

export default {
  components: { Table },
  setup() {
    const route = useRoute();
    const router = useRouter();
    // infer the collection from the route
    const collection = [];
    const items = ref([]);
    const fields = ref([]);
    var itemsFiltered = [];
    // watch the route and update data based on the collection param
    watch(
      route,
      () => {
        collection.value = "opera";
        if (!collection.value) return;
        // retrieve the settings
        const itemSettings = settings[collection.value];
        // define the subset of fields you need to view in the table
        const collectionFields = itemSettings.tableFields();
        fields.value = collectionFields;
      },
      { immediate: true, deep: true }
    );

    const createLink = computed(() => ({
      name: "createItem",
      params: { collection: collection.value },
    }));
    async function fetchData() {
      let resultLimit = document.getElementById("limit").value;
      let resultID = document.getElementById("resultID").value;
      let resultAutore = document.getElementById("resultAutore").value;
      let resultSGTI = document.getElementById("resultSGTI").value;
      let resultSGTT = document.getElementById("resultSGTT").value;
      let resultOGTD = document.getElementById("resultOGTD").value;
      let resultInv = document.getElementById("resultInv").value;
      let resultMTC = document.getElementById("resultMTC").value;

      let query = {
        limit: resultLimit,
        filter: {},
      };
      try {
        if (resultID !== "") {
          query["filter"]["id"] = { _eq: resultID };
        }
        if (resultAutore !== "") {
          const privateData = await directus.items("autore").readByQuery({
            filter: {
              autn: {
                _contains: resultAutore,
              },
            },
            limit: -1,
          });

          const ids = privateData.data.map((item) => item.id);
          const opereAutore = await directus.items("opera_autore").readByQuery({
            filter: {
              autore_id: { _in: ids },
            },
            limit: -1,
          });
          const operaIds = opereAutore.data.map(({ opera_id }) => opera_id);
          query["filter"]["id"] = {
            _in: operaIds,
          };
        }

        if (resultSGTI !== "") {
          query["filter"]["sgti"] = { _contains: resultSGTI };
        }
        if (resultSGTT !== "") {
          query["filter"]["sgtt"] = { _contains: resultSGTT };
        }
        if (resultOGTD !== "") {
          const privateData = await directus.items("ogtd").readByQuery({
            filter: {
              ogtd: {
                _contains: resultOGTD,
              },
            },
            limit: -1,
          });
          const ogtdId = privateData.data.map(({ id }) => id);
          query["filter"]["ogtd"] = {
            _in: ogtdId,
          };
        }
        if (resultInv !== "") {
          const privateData = await directus.items("inventario").readByQuery({
            filter: {
              invn: { _eq: resultInv },
            },
            limit: -1,
          });
          const idInv = privateData.data.map(({ id }) => id);
          const opereInventario = await directus
            .items("opera_inventario")
            .readByQuery({
              filter: {
                inventario_id: { _in: idInv },
              },
              limit: -1,
            });
          const idInvOp = opereInventario.data.map(({ opera_id }) => opera_id);
          query["filter"]["id"] = {
            _in: idInvOp,
          };
        }
        if (resultMTC !== "") {
          const privateData = await directus.items("mtc").readByQuery({
            filter: {
              mtc: { _contains: resultMTC },
            },
            limit: -1,
          });
          const idmtc = privateData.data.map(({ id }) => id);

          const opereMtcD = await directus.items("opera_mtc").readByQuery({
            limit: -1,
          });
          const opereMtc = await directus.items("opera_mtc").readByQuery({
            filter: {
              mtc_id: { _in: idmtc },
            },
            limit: -1,
          });

          const idOpereMTC = opereMtc.data.map(({ mtc_id }) => mtc_id);
          query["filter"]["mtc"] = {
            _in: idOpereMTC,
          };
        }

        const response = await directus
          .items(collection.value)
          .readByQuery(query);
        itemsFiltered = response;
        console.log(response);
        const { data = [] } = response;
        if (data.length < 1) {
          items.value = null;
        } else {
          items.value = data;
        }
      } catch (error) {
        items.value = null;
      }
    }

    function filterTable() {
      const ricercaBar = document
        .getElementById("ricercaBar")
        .value.toLowerCase();
      const filteredItems = itemsFiltered.data.filter((item) => {
        for (let key in item) {
          console.log(key)
          if (
            item[key] &&
            item[key].toString().toLowerCase().includes(ricercaBar)
          ) {
            return true;
          }
        }
        return false;
      });
      console.log(filteredItems);
      itemsFiltered.data = filteredItems;
    }

    async function deleteItem(item) {
      const { id } = item;
      await directus.items(collection.value).deleteOne(id);
      fetchData();
    }
    function onEditClicked(item) {
      router.push({
        name: "editItem",
        params: { id: item.id, collection: collection.value },
      });
    }
    function onDeleteClicked(item) {
      const confirmed = confirm("Are you sure you want to delete this item?");
      if (confirmed) deleteItem(item);
    }
    function onInfoClicked(item) {
      router.push({
        name: "infoItem",
        params: { collection: collection.value, id: item.id },
      });
    }

    return {
      items,
      fields,
      createLink,
      onEditClicked,
      onDeleteClicked,
      onInfoClicked,
      fetchData,
      filterTable,
    };
  },
};
</script>

<style scoped></style>
