<template>
  <main id="main" class="main">
    <div class="col-12">
      <!-- Search Form -->
      <div class="row">
        <div class="col-md-6">
          <h5 class="card-title">ID:</h5>
          <input
            type="number"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            id="resultID"
          />
        </div>
        <div class="col-md-6">
          <h5 class="card-title">Autore (AUTN):</h5>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            id="resultAutore"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <h5 class="card-title">Soggetto (SGTI):</h5>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            id="resultSGTI"
          />
        </div>
        <div class="col-md-6">
          <h5 class="card-title">Inventario (INVN):</h5>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            id="resultInv"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h5 class="card-title">Titolo (SGTT):</h5>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            id="resultSGTT"
          />
        </div>
        <div class="col-md-6">
          <h5 class="card-title">Oggetto (OGTD):</h5>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            id="resultOGTD"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h5 class="card-title">Tecnica (MTC):</h5>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            id="resultMTC"
          />
        </div>
      </div>

      <br />
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="fetchData()"
      >
        Cerca
      </button>
      &nbsp
      <button type="button" class="btn btn-outline-danger" @click="clearData()">
        Annulla
      </button>
      <hr />
      Mostra:
      <input
        type="number"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value="50"
        id="limit"
        @input="infoQty()"
      />
      &nbsp
      {{ totalResult }} schede trovate
      <!-- <div style="float: right">
        Ricerca:
        <input
          type="text"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          id="ricercaBar"
          v-on:keyup="filterTable()"
        />
      </div> -->
      <div class="form-check" style="float: right">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDisabled"
          id="flexRadioDefault1"
          v-model="selectedOption"
          value="list"
        />
        <label class="form-check-label" for="flexRadioDefault1"> Lista </label>
      </div>
      <div class="form-check" style="float: right">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDisabled"
          id="flexRadioDefault2"
          v-model="selectedOption"
          value="card"
        />
        <label class="form-check-label" for="flexRadioDefault2"> Carta </label>
      </div>

      <div class="card gradient-dark-grey" style="margin-top: 30px">
        <div class="card-header">
          <div class="">
            <header class="mb-2"></header>
          </div>
        </div>
        <div class="card-body" v-if="selectedOption === 'list'">
          <div class="table-responsive">
            <Table
              class="table v-middle m-0"
              :items="items"
              :fields="fields"
              id="table"
            >
              <template #cell(actions)="{ item, field, value }">
                <div class="actions">
                  <!-- <a :href="'http://localhost:5173/#/items/opera/edit/'+item.id" target="_blank"> -->
                  <button title="edit" class="btn btn-sm btn-light">
                    <font-awesome-icon icon="fa-solid fa-pencil" fixed-width />
                  </button>
                  <!-- </a> -->

                  <button
                    title="save"
                    class="btn btn-sm btn-light text-danger"
                    @click="onSaveClicked(item)"
                  >
                    <i class="bi bi-heart" :id="'saveButton-' + item.id"></i>
                  </button>
                  <button
                    title="delete"
                    class="btn btn-sm btn-light text-danger"
                    @click="onDeleteClicked(item)"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash" fixed-width />
                  </button>

                  <button
                    title="Info"
                    class="btn btn-sm btn-light"
                    @click="onInfoClicked(item)"
                  >
                    <font-awesome-icon icon="fa-solid fa-eye" />
                  </button>
                </div>
              </template>
            </Table>
          </div>
        </div>

        <div class="card-body" v-if="selectedOption === 'card'">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div
                  v-for="(item, index) in items"
                  :key="index"
                  class="card mb-3 col-md-2"
                  style="margin-bottom: 20px"
                >
                  <div class="card-body">
                    <h4 class="text-center">num {{ item.id }}</h4>

                    <button
                      title="save"
                      class="btn btn-sm btn-light text-danger text-center"
                      style="position: absolute; top: 10px; right: 10px"
                      @click="onSaveClicked(item)"
                    >
                      <i class="bi bi-heart" :id="'saveButton-' + item.id"></i>
                    </button>
                    <div
                      class="text-center"
                      style="
                        border: 1px solid #999999;
                        width: 200px;
                        height: 200px;
                        margin: 0 auto;
                        margin-top: 15px;
                      "
                    >
                      <img
                        src="/logoopaSiena.png"
                        alt=""
                        style="
                          margin-top: 20px;
                          max-width: 150%;
                          max-height: 150%;
                        "
                      />
                    </div>
                    <div class="text-center">
                      <h5 style="margin-top: 20px">
                        {{ item.inventario }}, {{ item.ogtd }}, {{ item.sgti }}
                      </h5>
                      <div class="actions">
                        <button
                          title="edit"
                          class="btn btn-sm btn-light"
                          @click="onEditClicked(item)"
                        >
                          <font-awesome-icon
                            icon="fa-solid fa-pencil"
                            fixed-width
                          />
                        </button>

                        <button
                          title="delete"
                          class="btn btn-sm btn-light text-danger"
                          @click="onDeleteClicked(item)"
                        >
                          <font-awesome-icon
                            icon="fa-solid fa-trash"
                            fixed-width
                          />
                        </button>
                        <button
                          title="Info"
                          class="btn btn-sm btn-light"
                          @click="onInfoClicked(item)"
                        >
                          <font-awesome-icon icon="fa-solid fa-eye" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="...">
          <ul
            class="pagination"
            style="display: flex; flex-wrap: wrap; justify-content: center"
          >
            <li
              class="page-item"
              @click="skipPage('first')"
              :id="'before'"
              v-if="totalPages > 0"
            >
              <a class="page-link">First</a>
            </li>
            <li
              class="page-item"
              @click="skipPage('substract')"
              :id="''"
              v-if="totalPages > 0"
            >
              <a class="page-link" v-if="currentPage - 1 !== 0">
                <span>{{ currentPage - 1 }}</span>
              </a>
            </li>
            <li
              class="page-item"
              @click="skipPage('current')"
              :id="'tablePage-'"
              v-if="totalPages > 0"
            >
              <a class="page-link">{{ currentPage }}</a>
            </li>
            <li
              class="page-item"
              @click="skipPage('pass')"
              :id="'tablePage-'"
              v-if="totalPages > 0"
            >
              <a class="page-link" v-if="currentPage + 1 !== totalPages + 1">
                {{ currentPage + 1 }}</a
              >
            </li>
            <!-- <li
              v-for="index in totalPages"
              :key="index"
              class="page-item"
              @click="skipPage(index)"
              :id="'tablePage-' + index"
            >
              <a class="page-link">{{ index }}</a>
            </li> -->
            <li
              class="page-item"
              @click="skipPage('last')"
              :id="'tablePage-'"
              v-if="totalPages > 0"
            >
              <a class="page-link">Last</a>
            </li>
          </ul>
        </nav>
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
import store from "../../store";

export default {
  components: { Table },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const user = computed(() => store.user);

    // infer the collection from the route
    const collection = [];
    const items = ref([]);
    const fields = ref([]);
    var itemsFiltered = [];
    var totalResult = ref(0);
    var totalPages = ref();
    let currentPage = ref(2);
    let selectedOption = ref("list");
    const url = ref();

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
    watch(selectedOption, () => {
      skipPage("first");
    });

    const createLink = computed(() => ({
      name: "createItem",
      params: { collection: collection.value },
    }));
    function infoQty() {
      try {
        let resultLimit = document.getElementById("limit").value;
        const { data = [] } = itemsFiltered;
        items.value = data.slice(0, resultLimit);

        totalResult.value = itemsFiltered.data.length;
        totalPages.value = Math.ceil(totalResult.value / resultLimit);
      } catch (error) {}
      skipPage("first");
    }

    // CHANGE PAGE
    function skipPage(page) {
      let resultLimit = document.getElementById("limit").value;
      if (page == "pass" && currentPage.value < totalPages.value) {
        currentPage.value++;
      } else if (page == "substract" && currentPage.value > 1) {
        currentPage.value--;
      } else if (page == "first") {
        currentPage.value = 1;
      } else if (page == "last") {
        currentPage.value = totalPages.value;
      }

      const { data = [] } = itemsFiltered;
      data.slice(1, 3);
      items.value = data.slice(
        (currentPage.value - 1) * resultLimit,
        currentPage.value * resultLimit
      );
      fetchIconSaved();
    }

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
        limit: -1,
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
          if (privateData.data.length > 1) {
            const ids = privateData.data.map((item) => item.id);
            const opereAutore = await directus
              .items("opera_autore")
              .readByQuery({
                filter: {
                  autore_id: { _in: ids },
                },
                limit: -1,
              });
            const operaIds = opereAutore.data.map(({ id }) => id);
            query["filter"]["autore"] = { _in: operaIds };
          } else {
            query["filter"]["autore"] = { _in: null };
          }
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
          if (privateData.data.length > 1) {
            const ogtdId = privateData.data.map(({ id }) => id);
            query["filter"]["ogtd"] = { _in: ogtdId };
          } else {
            query["filter"]["ogtd"] = { _in: null };
          }
        }
        // INVENTARIO
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
          const idInvOp = opereInventario.data.map(({ id }) => id);
          query["filter"]["inventario"] = {
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
        const { data = [] } = response;
        if (data.length < 1) {
          items.value = null;
        } else {
          items.value = data;
        }
      } catch (error) {
        items.value = null;
      }
      // SAVED ITEMS
      infoQty();
      fetchRelations();
    }
    async function fetchRelations() {
      const opereMtc = await directus.items("opera_mtc").readByQuery({
        limit: -1,
      });
    }
    async function fetchIconSaved() {
      let query2 = {
        limit: -1,
        filter: {
          user_created: {
            _eq: user.value.id,
          },
        },
      };
      const responseSaved = await directus.items("pref").readByQuery(query2);

      for (let x = 0; x < responseSaved.data.length; x++) {
        try {
          let iconSaved = document.getElementById(
            "saveButton-" + responseSaved.data[x].id_opera
          );

          iconSaved.className = "bi bi-heart-fill";
        } catch (error) {}
      }
    }
    function clearData() {
      document.getElementById("resultID").value = null;
      document.getElementById("resultAutore").value = null;
      document.getElementById("resultSGTI").value = null;
      document.getElementById("resultSGTT").value = null;
      document.getElementById("resultOGTD").value = null;
      document.getElementById("resultInv").value = null;
      document.getElementById("resultMTC").value = null;
      totalResult.value = 0;
      totalPages.value = 0;
      url.value = window.location.origin;

      // CLEAR TABLE
      items.value = null;
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
    async function onSaveClicked(item) {
      let iconSaved = document.getElementById("saveButton-" + item.id);

      if (iconSaved.classList.contains("bi-heart")) {
        iconSaved.className = "bi bi-heart-fill";
        await directus.items("pref").createOne({
          id_opera: item.id,
        });
      } else {
        iconSaved.className = "bi bi-heart";

        let query = {
          limit: -1,
          filter: {
            id_opera: {
              _eq: item.id,
            },
            user_created: {
              _eq: user.value.id,
            },
          },
        };

        iconSaved.className = "bi bi-heart";
        let response = await directus.items("pref").readByQuery(query);
        await directus.items("pref").deleteOne(response.data[0].id);
      }
    }

    return {
      items,
      fields,
      createLink,
      totalResult,
      totalPages,
      currentPage,
      selectedOption,
      onEditClicked,
      onDeleteClicked,
      onInfoClicked,
      onSaveClicked,
      fetchData,
      infoQty,
      clearData,
      skipPage,
    };
  },
};
</script>

<style scoped>
.pagination-container {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  overflow: auto;
}
h5 {
  font-size: 16px;
}
</style>
