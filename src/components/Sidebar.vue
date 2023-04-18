<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import store from "../store";

export default {
  setup(props, context) {
    const accessToken = store?.tokenInfo?.access_token;
    const authenticated = computed(() => store.authenticated);

    return {
      authenticated,
    };
  },
};
</script>

<template>
  <!-- ======= Sidebar ======= -->
  <aside v-if="authenticated" id="sidebar" class="sidebar">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            HOME
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul class="list-group">
              <li class="list-group-item">
                <router-link class="nav-link" :to="{ name: 'home' }">
                  <i class="bi bi-house text-primary"></i>
                  Dashboard</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link class="nav-link" :to="{ name: 'SearchItem' }">
                  <i class="bi bi-search text-warning"></i> Cerca</router-link
                >
              </li>
              <li class="list-group-item">
                <i class="bi bi-file-earmark-plus text-info"></i> Nuova scheda
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            INDICI
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul class="list-group" id="sidebar-nav">
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'listItems', params: { collection: 'opera' } }"
                  >Opere</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{
                    name: 'listItems',
                    params: { collection: 'cronologia' },
                  }"
                  >Cronologia</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{
                    name: 'listItems',
                    params: { collection: 'localizzazione' },
                  }"
                  >Localizzazione</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'listItems', params: { collection: 'autore' } }"
                  >Autore</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'listItems', params: { collection: 'ambito' } }"
                  >Ambito</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{
                    name: 'listItems',
                    params: { collection: 'committenza' },
                  }"
                  >Committenza</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{
                    name: 'listItems',
                    params: { collection: 'restauro' },
                  }"
                  >Restauro</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{
                    name: 'listItems',
                    params: { collection: 'iscrizione' },
                  }"
                  >Iscrizione</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'listItems', params: { collection: 'stemmi' } }"
                  >Stemmi</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'listItems', params: { collection: 'fta' } }"
                  >Fotografia</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'listItems', params: { collection: 'mostra' } }"
                  >Mostra</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'listItems', params: { collection: 'fonte' } }"
                  >Fonte</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link
                  class="nav-link"
                  :to="{ name: 'listItems', params: { collection: 'bib' } }"
                  >Bibliografia</router-link
                >
              </li>

              <!---<li class="nav-item"><router-link class="nav-link" :to="{name:'listItems',params:{collection:'autore'}}">Autori</router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{name:'notes'}">Notes</router-link></li>--->
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapse3"
          >
            FUNZIONI
          </button>
        </h2>
        <div
          id="collapse3"
          class="accordion-collapse collapse"
          aria-labelledby="heading3"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul class="list-group">
              <li class="list-group-item">
                <router-link class="nav-link" :to="{ name: 'model1' }">
                  <i class="bi bi-printer"></i> Option 1</router-link
                >
              </li>
              <li class="list-group-item">
                <router-link class="nav-link" :to="{ name: 'home' }">
                   <i class="bi bi-printer"></i> Option 2</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </aside>
  <!-- End Sidebar-->
</template>
<style></style>
