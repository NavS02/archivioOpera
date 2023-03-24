<template>
  <div class="content">
    <!-- Define the HTML template to render -->
    <div id="element">
      <div class="container-fluid">
        <!-- Display the collection name -->
        <h4>{{ collection }}</h4>

        <div class="panel panel-default" v-show="response">
          <!-- Display a table with data from the response object -->
          <span v-for="(value, field) in response" :key="field">
            <!-- If the value is not an array, display it as text -->
            <strong>{{ field }}:</strong>
            <span v-if="!Array.isArray(value)" id="itemName">{{ value }}</span>

            <!-- If the value is an array, display each item as a list with its fields -->
            <ul v-else>
              <li v-for="(item, index) in value" :key="index">
                <ul>
                  <li v-for="(itemValue, itemField) in item" :key="itemField">
                    {{ itemField }}: {{ itemValue }}
                  </li>
                </ul>
              </li>
            </ul>
            <br />
          </span>
        </div>
      </div>
    </div>
    <button
      class="btn btn-sm btn-primary button"
      title="Print"
      @click="onPrintClicked"
    >
      Print PDF
    </button>
  </div>
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
                "id,icona,lc,tsk,lir,nctr,nctn,roz,files,ogtd,ogtt,ogtv,ogtn,ogtp,qntn,qnts,sgti,sgtt,ldcs,piano,sala,parete,specifiche,deso,dess,desi,nsc,restauro,iscrizione,stemmi,localizzazione,roff,rofo,rofs,rofa,rofd,rofc,cronologia,autore,ambito,committenza,inventario,fotografia,fonte,mostra,acqt,acqn,acqd,acql,cdgg,cdgs,cdgi,stcc,stcs,mtc,misa,misu,misl,misp,misd,misn,miss,misg,misv,misr,mist,frm,adsp,adsm,cmpd,cmpn,fur,rvmd,rvmn,oss",
            });
        } else if (collection.value == "autore") {
          response.value = await directus
            .items(collection.value)
            .readOne(id.value, {
              fields: "id,auts,autr,autn,auta,auth,autb,autm,aat,pic",
            });
        }

        originalResponse = { ...response.value };

        for (let key in response.value) {
          if (Array.isArray(response.value[key])) {
            let responseArray = [];
            for (let i = 0; i < response.value[key].length; i++) {
              try {
                let item = await directus
                  .items(key)
                  .readOne(response.value[key][i]);
                delete item.user_created;
                delete item.date_created;
                delete item.user_updated;
                delete item.date_updated;
                responseArray.push(item);
              } catch (error) {
                console.log(
                  "Trying to search in: " + (collection.value + "_" + key)
                );
                try {
                  let itemS = await directus
                    .items(collection.value + "_" + key)
                    .readOne(response.value[key][i]);
                  let newId = (key + "_id").toString();
                  let relationalItem = await directus
                    .items(collection.value)
                    .readOne(itemS[newId]);
                  delete relationalItem.user_created;
                  delete relationalItem.date_created;
                  delete relationalItem.user_updated;
                  delete relationalItem.date_updated;
                  responseArray.push(relationalItem);

                  console.log("ITEM FOUND");
                } catch (error) {
                  console.log(
                    "ITEM (" +
                      key +
                      ") with PK (" +
                      response.value[key][i] +
                      ") NOT FOUND (" +
                      collection.value +
                      "_" +
                      key +
                      "/" +
                      key +
                      ")"
                  );
                }
              }
            }
            response.value[key] = responseArray;
          }
        }
        for (let key in response.value) {
          if (!Array.isArray(response.value[key])) {
            if (response.value[key] !== originalResponse[key]) {
            }
          } else {
            for (let i = 0; i < response.value[key].length; i++) {
              if (response.value[key][i] !== originalResponse[key][i]) {
              }
            }
          }
        }
      } catch (error) {}

    }

    return { response, loaded };
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
  },
  data() {
    return {};
  },
};
</script>

<style>
.content {
  margin-left: 300px;
  margin-top: 100px;
}
.button {
  width: 200px;
  margin-left: 50%;
}
.loader {
  --height-of-loader: 4px;
  --loader-color: #0071e2;
  width: 60%;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
}

.loader::before {
  content: "";
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 30px;
  animation: moving 1s ease-in-out infinite;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}
</style>
