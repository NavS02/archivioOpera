<template>
  <main id="main" class="main">
    <section class="section profile" id="element">
      <div class="row">
        <div class="col-xl-4">

          <div class="card">
            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src="/not-found.svg" />
              <br>
              <h3 class="card-title">{{ response?.sgti }}</h3>

              <div class="social-links mt-2">
                <a   @click="onPrintClicked" class="twitter"><i class="bi bi-printer"></i></a>

              </div>
            </div>
          </div>

        </div>

        <div class="col-xl-8">

          <div class="card">
            <div class=" tab-content pt-2 tab-pane  profile-overview card-body profile-card pt-4 d-flex flex-column">
              <div class="row">
                <!-- Display a table with data from the response object -->
                <template v-for="(value, field) in response" :key="field">
                  <!-- If the value is not an array, display it as text -->
                  <template v-if="opera.indexOf(field) !== -1">
                    <div v-if="value" class="col-lg-3 col-md-4 label ">{{ field }}</div>

                    <div v-if="!Array.isArray(value) && value" id="itemName" class="col-lg-9 col-md-8">{{ value }}</div>
                  </template>
                  <!-- If the value is an array, display each item as a list with its fields -->
                </template>


              </div>

            </div>
          </div>

        </div>


        <div class="col-xl-12">

          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">

                <li class="nav-item" role="presentation">
                  <button @click="greet" class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview"
                    aria-selected="true" role="tab">Mostra</button>
                </li>

                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit" aria-selected="false"
                    tabindex="-1" role="tab">Autore</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#iscrizione" aria-selected="false"
                    tabindex="-1" role="tab">Iscrizione</button>
                </li>
                

                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#ambito" aria-selected="false"
                    tabindex="-1" role="tab">Ambito</button>
                </li>
                
                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#restauro" aria-selected="false"
                    tabindex="-1" role="tab">Restauro</button>
                </li>
        
                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#stemmi" aria-selected="false"
                    tabindex="-1" role="tab">Stemmi</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#fonte" aria-selected="false"
                    tabindex="-1" role="tab">Fonte</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#committenza" aria-selected="false"
                    tabindex="-1" role="tab">Committenza</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings" aria-selected="false"
                    tabindex="-1" role="tab">Cronologia</button>
                </li>
              </ul>
              <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-overview" id="profile-overview" role="tabpanel">



                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->


                    <div v-if="field === 'mostra'">



                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div class="row" v-for="(item, index) in value" :key="index">

                        <template v-for="(itemValue, itemField) in item" :key="itemField">
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9 "> : {{ itemValue }} </span>
                          </li>
                        </template>

                      </div>

                    </div>
                  </span>



                </div>

                <div class="tab-pane fade profile-overview pt-3" id="profile-edit" role="tabpanel">

                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->


                    <div v-if="field === 'autore'">



                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div class="row" v-for="(item, index) in value" :key="index">

                        <template v-for="(itemValue, itemField) in item" :key="itemField">
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9 "> : {{ itemValue }} </span>
                          </li>
                        </template>

                      </div>

                    </div>
                  </span>


                </div>

                <div class="tab-pane  profile-overview fade pt-3" id="profile-settings" role="tabpanel">

                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->


                    <div v-if="field === 'cronologia'">



                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div class="row" v-for="(item, index) in value" :key="index">

                        <template v-for="(itemValue, itemField) in item" :key="itemField">
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9"> : {{ itemValue }} </span>
                          </li>
                        </template>

                      </div>

                    </div>
                  </span>

                </div>

                <div class="tab-pane fade pt-3" id="ambito" role="tabpanel">
                  <!-- Change Password Form -->
                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->


                    <div v-if="field === 'ambito'">



                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div class="row" v-for="(item, index) in value" :key="index">

                        <template v-for="(itemValue, itemField) in item" :key="itemField">
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9 "> : {{ itemValue }} </span>
                          </li>
                        </template>

                      </div>

                    </div>
                  </span>

                </div>


                <div class="tab-pane  profile-overview fade pt-3" id="committenza" role="tabpanel">

                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->


                    <div v-if="field === 'committenza'">



                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div class="row" v-for="(item, index) in value" :key="index">

                        <template v-for="(itemValue, itemField) in item" :key="itemField">
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9"> : {{ itemValue }} </span>
                          </li>
                        </template>

                      </div>

                    </div>
                  </span>

                </div>




                <div class="tab-pane  profile-overview fade pt-3" id="restauro" role="tabpanel">

                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->


                    <div v-if="field === 'restauro'">



                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div class="row" v-for="(item, index) in value" :key="index">

                        <template v-for="(itemValue, itemField) in item" :key="itemField">
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9"> : {{ itemValue }} </span>
                          </li>
                        </template>

                      </div>

                    </div>
                  </span>

                </div>

                <div class="tab-pane  profile-overview fade pt-3" id="iscrizione" role="tabpanel">

                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->


                    <div v-if="field === 'iscrizione'">



                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div class="row" v-for="(item, index) in value" :key="index">

                        <template v-for="(itemValue, itemField) in item" :key="itemField">
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9"> : {{ itemValue }} </span>
                          </li>
                        </template>

                      </div>

                    </div>
                  </span>

                </div>


                <div class="tab-pane  profile-overview fade pt-3" id="stemmi" role="tabpanel">

                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->


                    <div v-if="field === 'stemmi'">



                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div class="row" v-for="(item, index) in value" :key="index">

                        <template v-for="(itemValue, itemField) in item" :key="itemField">
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9"> : {{ itemValue }} </span>
                          </li>
                        </template>

                      </div>

                    </div>
                  </span>

                </div>

                <div class="tab-pane  profile-overview fade pt-3" id="fonte" role="tabpanel">

                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->


                    <div v-if="field === 'fonte'">



                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div class="row" v-for="(item, index) in value" :key="index">

                        <template v-for="(itemValue, itemField) in item" :key="itemField">
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9"> : {{ itemValue }} </span>
                          </li>
                        </template>

                      </div>

                    </div>
                  </span>

                </div>



              </div><!-- End Bordered Tabs -->

            </div>
          </div>

        </div><!--  -->

      </div>
    </section>
  </main>
</template>

<script>
import { ref, watch, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { directus } from "../../API";
import * as settings from "../../settings/";
import html2pdf from "html2pdf.js";

export default {
  setup(props, context) {
    // Define some variables to use in the component
    const route = useRoute();
    const router = useRouter();
    const collection = ref("");
    const item = ref("");
    const { id } = toRefs(props);
    const response = ref(null);
    const responseArray = [];
    var loaded = false;

    // Watch for changes in the route object
    watch(
      route,
      () => {
        // Infer the collection from the route parameters
        collection.value = route.params?.collection;
        if (!collection.value) return;
        // Retrieve the settings for the collection
        const itemSettings = settings[collection.value];
        // Fetch data for the collection
        getData();
      },
      { immediate: true, deep: true }
    );

    async function getData() {
      let originalResponse = {};

      try {
        if (collection.value == "opera") {
          response.value = await directus
            .items(collection.value)
            .readOne(id.value, {
              fields:
                "*",
            });
        } 

        originalResponse = { ...response.value };

        for (let key in response.value) {
      if (Array.isArray(response.value[key]) && response.value[key].length > 0) {
        const responseArray = [];
        for (let i = 0; i < response.value[key].length; i++) {
          try {
            const item = await directus
              .items(key)
              .readOne(response.value[key][i]);
            const fieldsToDelete = ["user_created", "date_created", "user_updated", "date_updated"];
            fieldsToDelete.forEach((field) => delete item[field]);
            responseArray.push(item);
          } catch (error) {
            console.log("Trying to search in: " + (collection.value + "_" + key));
            try {
              const itemS = await directus
                .items(collection.value + "_" + key)
                .readOne(response.value[key][i]);
              const newId = `${key}_id`;
              const relationalItem = await directus
                .items(collection.value)
                .readOne(itemS[newId]);
              const fieldsToDelete = ["user_created", "date_created", "user_updated", "date_updated", "autore", "roz", "ambito", "committenza", "localizzazione", "restauro", "iscrizione", "stemmi", "inventario", "fonte", "mostra", "cronologia", "mtc", "fotografia"];
              fieldsToDelete.forEach((field) => delete relationalItem[field]);
              responseArray.push(relationalItem);
              console.log("ITEM FOUND");
            } catch (error) {
              console.log(`ITEM (${key}) with PK (${response.value[key][i]}) NOT FOUND (${collection.value}_${key}/${key})`);
            }
          }
        }
        response.value[key] = responseArray;
      }
    }

      } catch (error) { }

    }
    const opera = ["nctn","lir","ogtd","piano","sala","parete","specifiche", "ogtt", "ogtv", "qntn", "qnts", "sgti", "sgtt", "deso", "dess", "desi", "stcc", "stcs", "misa", "misu"];


    return { response, loaded, opera };

  },
  props: {
    collection: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {

    onPrintClicked() {
  
      var opt = {
        margin: 1,
        filename: this.id + ".pdf",
        image: { type: "png", quality: 0.5 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };
      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          console.log("PDF Generated");
        });
    },
    greet(response) {
      const autore = ["auta", "autb"];
      let html = "";

      if (response && response.__v_raw) {
        const arrayObject = response.__v_raw;

        for (let i = 0; i < arrayObject.length; i++) {
          for (let j = 0; j < autore.length; j++) {
            html += `<h5 class="card-title">${arrayObject[i][autore[j]]}</h5>`;
            console.log(arrayObject[i][autore[j]]);
          }
        }
      }

      return html;
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.profile .profile-card img {
  max-width: 100%;
}

.nav-tabs-bordered .nav-link.active {
  background-color: #fff;
  color: #4154f1;
  border-bottom: 2px solid #4154f1;
}

.nav-tabs-bordered .nav-link.active {
  background-color: #fff;
  color: #4154f1;
  border-bottom: 2px solid #4154f1;
}

.nav-tabs-bordered .nav-link {
  margin-bottom: -2px;
  border: none;
  color: #2c384e;
}

.profile .profile-overview .label {
  font-weight: 600;
  color: rgba(1, 41, 112, 0.6);
  text-transform: capitalize;
  padding: 8px;
}

div#itemName {
  padding: 7px;
}

li {
  list-style: none;
  padding: 6px;
}

h3.card-title {
  text-align: center;
  text-transform: capitalize;
}

h3.card-title {
  padding: 0px;
  font-size: 18px;
  font-weight: 500;
  color: #012970;
  font-family: "Poppins", sans-serif;
}

.profile .profile-card .social-links a {
  font-size: 36px;
  display: inline-block;
  color: rgba(1, 41, 112, 0.5);
  line-height: 0;
  margin-right: 10px;
  text-align: center;
  transition: 0.3s;
}



.profile .profile-overview .row {
  margin-bottom: 0px;
  font-size: 15px;
}

      /* Style the tab */
      .tab {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
      }

      /* Style the buttons inside the tab */
      .tab button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;
      }

      /* Change background color of buttons on hover */
      .tab button:hover {
        background-color: #ddd;
      }

      /* Create an active/current tablink class */
      .tab button.active {
        background-color: #ccc;
      }

      /* Style the tab content */
      .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
      }
</style>
