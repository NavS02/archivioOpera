<template>
  <main id="main" class="main">
    <section class="section profile" id="element">
      <div class="card">
        <div class="card-body">
          <div v-for="(opera, index) in response" :key="index">

            <div
              class="card-header"
              style="background-color: #484a8c; color: white"
            >
              <h1>{{ opera?.sgtt }}</h1>
              {{ opera?.sgti }}
              <br />
            </div>

            <div class="row">
              <div class="col-8">
                <div>
                  <br />

                  <h3 class="text-center" style="background-color: #cae8d8">
                    Codici
                  </h3>
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <td>ID:</td>
                        <td>{{ opera?.id }}</td>
                      </tr>
                      <tr>
                        <td>Tipo Scheda:</td>
                        <td>{{ opera?.tsk }}</td>
                      </tr>
                      <tr>
                        <td>Livello di ricerca</td>
                        <td>{{ opera?.lir }}</td>
                      </tr>
                      <tr>
                        <td>Num. Regione</td>
                        <td>{{ opera?.nctr }}</td>
                      </tr>
                      <tr>
                        <td>Num. Catalogo</td>
                        <td>{{ opera?.lir }}</td>
                      </tr>
                      <tr>
                        <td>Restituite</td>
                        <td>{{ opera?.nctn }}</td>
                      </tr>
                      <tr>
                        <td>Altri Codici</td>
                        <td>{{ opera?.acc }}</td>
                      </tr>
                      <tr>
                        <td>Numero Inventario</td>
                        <td>{{ opera?.invn }}</td>
                      </tr>
                      <tr>
                        <td>STIMA</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-4">
                <div class="card mt-3" style="width: 100%; height: 90%">
                  <div class="card-body text-center">
                    <img
                      :src="
                        opera?.icona
                          ? url +
                            '/assets/' +
                            opera.icona
                          : urlImg
                      "
                      style="width: 80%; height: 80%"
                    />
                  </div>
                </div>
              </div>
              <h3 class="text-center" style="background-color: #cae8d8">
                Oggetto
              </h3>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Definizione</td>
                    <td>{{ opera?.ogtd }}</td>
                  </tr>
                  <tr>
                    <td>Tipologia</td>
                    <td>{{ opera?.ogtt }}</td>
                  </tr>
                  <tr>
                    <td>Identificazione</td>
                    <td>{{ opera?.ogtv }}</td>
                  </tr>
                  <tr>
                    <td>Denominazione/ dedicazione</td>
                    <td>{{ opera?.ogtn }}</td>
                  </tr>
                  <tr>
                    <td>Posizione</td>
                    <td>{{ opera?.ogtp }}</td>
                  </tr>
                  <tr>
                    <td>Quantità Numero</td>
                    <td>{{ opera?.qntn }}</td>
                  </tr>
                  <tr>
                    <td>Quantità non rilevata</td>
                    <td>{{ opera?.qnts }}</td>
                  </tr>
                  <tr>
                    <td>Soggetto</td>
                    <td>{{ opera?.sgti }}</td>
                  </tr>
                  <tr>
                    <td>Titolo</td>
                    <td>{{ opera?.sgtt }}</td>
                  </tr>
                  <tr>
                    <td>Indicazioni sull'oggetto</td>
                    <td>{{ opera?.deso }}</td>
                  </tr>
                  <tr>
                    <td>Indicazioni sul soggetto</td>
                    <td>{{ opera?.dess }}</td>
                  </tr>
                  <tr>
                    <td>Codifica Iconclass</td>
                    <td>{{ opera?.desi }}</td>
                  </tr>
                  <tr>
                    <td>Notizie Storico Critiche</td>
                    <td>{{ opera?.nsc }}</td>
                  </tr>
                  <tr>
                    <td>Cronologia</td>
                    <td>{{ opera?.cronologia }}</td>
                  </tr>
                  <tr>
                    <td>Materia e Tecnica</td>
                    <td>{{ opera?.mtc }}</td>
                  </tr>
                  <tr>
                    <td>Osservazioni</td>
                    <td>{{ opera?.oss }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="row"></div>
              <h3 class="text-center" style="background-color: #cae8d8">
                Misure
              </h3>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Unità di misura</td>
                    <td>{{ opera?.misu }}</td>
                  </tr>
                  <tr>
                    <td>MIS verificate</td>
                    <td>{{ opera?.mis_verificate }}</td>
                  </tr>
                  <tr>
                    <td>Altezza</td>
                    <td>{{ opera?.misa }}</td>
                  </tr>
                  <tr>
                    <td>Larghezza</td>
                    <td>{{ opera?.misl }}</td>
                  </tr>
                  <tr>
                    <td>Profondità</td>
                    <td>{{ opera?.misp }}</td>
                  </tr>
                  <tr>
                    <td>Diametro</td>
                    <td>{{ opera?.misd }}</td>
                  </tr>
                  <tr>
                    <td>Lunghezza</td>
                    <td>{{ opera?.misn }}</td>
                  </tr>
                  <tr>
                    <td>Spessore</td>
                    <td>{{ opera?.miss }}</td>
                  </tr>
                  <tr>
                    <td>Peso</td>
                    <td>{{ opera?.misg }}</td>
                  </tr>
                  <tr>
                    <td>Varie</td>
                    <td>{{ opera?.misv }}</td>
                  </tr>
                  <tr>
                    <td>Mancanza</td>
                    <td>{{ opera?.misr }}</td>
                  </tr>
                  <tr>
                    <td>validità</td>
                    <td>{{ opera?.mist }}</td>
                  </tr>
                  <tr>
                    <td>Ingombro</td>
                    <td>{{ opera?.mis_ingombro }}</td>
                  </tr>
                  <tr>
                    <td>Cornice</td>
                    <td>{{ opera?.mis_cornice }}</td>
                  </tr>
                  <tr>
                    <td>Formato</td>
                    <td>{{ opera?.frm }}</td>
                  </tr>
                  <tr>
                    <td>Osservazioni</td>
                    <td>{{ opera?.oss }}</td>
                  </tr>
                </tbody>
              </table>
              <h3 class="text-center" style="background-color: #cae8d8">
                Rapporto Opera finale
              </h3>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Stadio opera</td>
                    <td>{{ opera?.roff }}</td>
                  </tr>
                  <tr>
                    <td>Opera finale/originale</td>
                    <td>{{ opera?.rofo }}</td>
                  </tr>
                  <tr>
                    <td>Soggetto opera finale/originale</td>
                    <td>{{ opera?.rofs }}</td>
                  </tr>
                  <tr>
                    <td>Autore opera finale/originale</td>
                    <td>{{ opera?.rofa }}</td>
                  </tr>
                  <tr>
                    <td>Datazione opera finale/originale</td>
                    <td>{{ opera?.rofd }}</td>
                  </tr>
                  <tr>
                    <td>Collocazione opera finale/originale</td>
                    <td>{{ opera?.rofc }}</td>
                  </tr>
                </tbody>
              </table>
              <h3 class="text-center" style="background-color: #cae8d8">
                Collocazione
              </h3>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Localizzazione</td>
                    <td>{{ opera?.lc }}</td>
                  </tr>
                  <tr>
                    <td>Deposito</td>
                    <td>{{ opera?.deposito }}</td>
                  </tr>
                  <tr>
                    <td>Collocazione Specifica</td>
                    <td>{{ opera?.ldcs }}</td>
                  </tr>
                  <tr>
                    <td>Piano</td>
                    <td>{{ opera?.piano }}</td>
                  </tr>
                  <tr>
                    <td>Sala</td>
                    <td>{{ opera?.sala }}</td>
                  </tr>
                  <tr>
                    <td>Parete</td>
                    <td>{{ opera?.parete }}</td>
                  </tr>
                  <tr>
                    <td>Specifiche</td>
                    <td>{{ opera?.specifiche }}</td>
                  </tr>
                </tbody>
              </table>
              <h3 class="text-center" style="background-color: #cae8d8">
                Conservazione e Restauro
              </h3>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Stato di Conservazione</td>
                    <td>{{ opera?.stcc }}</td>
                  </tr>
                  <tr>
                    <td>Indicazioni specifiche</td>
                    <td>{{ opera?.stcs }}</td>
                  </tr>
                  <tr>
                    <td>Corretta esposizione [x scheda prestito]</td>
                    <td>{{ opera?.esposizione }}</td>
                  </tr>
                  <tr>
                    <td>Corretto trasporto [x scheda prestito]</td>
                    <td>{{ opera?.trasporto }}</td>
                  </tr>
                  <tr>
                    <td>Restauro</td>
                    <td>{{ opera?.restauro }}</td>
                  </tr>
                </tbody>
              </table>
              <h3 class="text-center" style="background-color: #cae8d8">
                Condizione giuridica
              </h3>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Alienazione Tipo</td>
                    <td>{{ opera?.alnt }}</td>
                  </tr>
                  <tr>
                    <td>Alienazione Data</td>
                    <td>{{ opera?.alnd }}</td>
                  </tr>
                  <tr>
                    <td>Alienazione Note</td>
                    <td>{{ opera?.alnn }}</td>
                  </tr>
                  <tr>
                    <td>Indicazione generica</td>
                    <td>{{ opera?.cdgg }}</td>
                  </tr>
                  <tr>
                    <td>Indicazione specifica</td>
                    <td>{{ opera?.cdgs }}</td>
                  </tr>
                  <tr>
                    <td>Tipo Acquisizione</td>
                    <td>{{ opera?.acqt }}</td>
                  </tr>
                  <tr>
                    <td>Nome</td>
                    <td>{{ opera?.acqn }}</td>
                  </tr>
                  <tr>
                    <td>Data Acquisizione</td>
                    <td>{{ opera?.acqd }}</td>
                  </tr>
                  <tr>
                    <td>Luogo Acquisizione</td>
                    <td>{{ opera?.acql }}</td>
                  </tr>
                </tbody>
              </table>
              <h3 class="text-center" style="background-color: #cae8d8">
                Compilazione
              </h3>

              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Data</td>
                    <td>{{ opera?.cmpd }}</td>
                  </tr>
                  <tr>
                    <td>Compilatore</td>
                    <td>{{ opera?.cmpn }}</td>
                  </tr>
                  <tr>
                    <td>Funzionario</td>
                    <td>{{ opera?.fur }}</td>
                  </tr>
                  <tr>
                    <td>Data revisione</td>
                    <td>{{ opera?.rvmd }}</td>
                  </tr>
                  <tr>
                    <td>Nome revisione</td>
                    <td>{{ opera?.rvmn }}</td>
                  </tr>
                </tbody>
              </table>
              <h3 class="text-center" style="background-color: #cae8d8">
                Dati Fisici
              </h3>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Iscrizione</td>
                    <td>{{ opera?.iscrizione }}</td>
                  </tr>
                  <tr>
                    <td>Stemmi</td>
                    <td>{{ opera?.stemmi }}</td>
                  </tr>
                </tbody>
              </table>
              <h3 class="text-center" style="background-color: #cae8d8">
                DATI CULTURALI
              </h3>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Localizzazione</td>
                    <td>{{ opera?.localizzazione }}</td>
                  </tr>
                  <tr>
                    <td>Autore</td>
                    <td>{{ opera?.autore }}</td>
                  </tr>
                  <tr>
                    <td>Ambito</td>
                    <td>{{ opera?.ambito }}</td>
                  </tr>
                  <tr>
                    <td>Committenza</td>
                    <td>{{ opera?.committenza }}</td>
                  </tr>
                </tbody>
              </table>

              <h3 class="text-center" style="background-color: #cae8d8">
                DATI ALLEGATI
              </h3>
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>Fotografia</td>
                    <td>{{ opera?.fta }}</td>
                  </tr>
                  <tr>
                    <td>Fonte</td>
                    <td>{{ opera?.fonte }}</td>
                  </tr>
                  <tr>
                    <td>Bibliografia</td>
                    <td>{{ opera?.bib }}</td>
                  </tr>
                  <tr>
                    <td>Mostra</td>
                    <td>{{ opera?.mostra }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <button
      type="button"
      class="btn btn-primary btn-lg text-center"
      @click="printItem()"
    >
      Print
    </button>
  </main>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { directus } from "../../../API";
import store from "../../../store";
import * as settings from "../../../settings/";
import html2pdf from "html2pdf.js";

export default {
  setup(props, context) {
    // Define some variables to use in the component
    const route = useRoute();
    const router = useRouter();
    const user = computed(() => store.user);
    const collection = ref("");
    const item = ref("");
    const id = ref(509);
    const response = ref(null);
    const responseArray = [];
    const url = ref(import.meta.env.VITE_API_BASE_URL);
    let urlImg = ref("/not-found.svg");

    // Watch for changes in the route object
    watch(
      route,
      () => {
        // Infer the collection from the route parameters
        collection.value = "opera";
        if (!collection.value) return;
        // Retrieve the settings for the collection
        const itemSettings = settings[collection.value];
        // Fetch data for the collection
      },
      { immediate: true, deep: true }
    );
    getData();

    function printItem() {
      var opt = {
        margin: 0.2,
        filename: (new Date()) + ".pdf",
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
      this.showAlert = false;
    }
    async function getData() {
      let originalResponse = {};

      try {
        if (collection.value == "opera") {
          const favItems = await directus.items("pref").readByQuery({
            filter: {
              user_created: {
                _eq: user.value.id,
              },
            },
          });
          const operaIds = favItems.data.map((item) => item.id_opera);
          const responseFav = await directus
            .items(collection.value)
            .readByQuery({
              filter: {
                id: { _in: operaIds },
              },
              limit: -1,
            });
          response.value = responseFav.data;
          // urlImg.value =
          //   import.meta.env.VITE_API_BASE_URL +
          //   "/assets/" +
          //   response.value.icona;
        }
        originalResponse = { ...response.value };
      } catch (error) {}
    }

    const opera = [
      "nctn",
      "lir",
      "ogtd",
      "piano",
      "sala",
      "parete",
      "specifiche",
      "ogtt",
      "ogtv",
      "qntn",
      "qnts",
      "sgti",
      "sgtt",
      "deso",
      "dess",
      "desi",
      "stcc",
      "stcs",
      "misa",
      "misu",
    ];

    return { response, opera, urlImg, printItem, url };
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
      this.showAlert = true;
    },
    closeAlert() {
      this.showAlert = false;
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
    return {
      showAlert: false,
    };
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
.cardSelector:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-35px);
  transition: all 2s ease;
  cursor: pointer;
}
</style>
