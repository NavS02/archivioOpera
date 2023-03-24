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
    <!----<ul class="sidebar-nav" id="sidebar-nav">
    
          <li class="nav-item">
            <a class="nav-link collapsed" href="#">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li> End Dashboard Nav -->

    <!---- <li class="nav-item">
            <a class="nav-link " data-bs-target="#opera-nav" data-bs-toggle="collapse" href="#">
              <i class="bi bi-menu-button-wide"></i><span>opera</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="opera-nav" class="nav-content collapse show" data-bs-parent="#sidebar-nav">
              <li>
                <a href="#">
                  <i class="bi bi-circle"></i><span>List</span>
                </a>
              </li>
             
            </ul>
          </li> End opera Nav
    
        </ul>--->

    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <router-link
          :to="{ name: 'home' }"
          v-slot="{ isExactActive, href }"
          custom
        >
          <a
            class="nav-link"
            :href="href"
            :class="isExactActive ? 'active' : ''"
            >Home</a
          >
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'SearchItem' }"
          >Cerca</router-link
        >
      </li>

      <hr />

      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'opera' } }"
          >Opere</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'cronologia' } }"
          >Cronologia</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'localizzazione' } }"
          >Localizzazione</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'autore' } }"
          >Autore</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'ambito' } }"
          >Ambito</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'committenza' } }"
          >Committenza</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'restauro' } }"
          >Restauro</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'iscrizione' } }"
          >Iscrizione</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'stemmi' } }"
          >Stemmi</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'fta' } }"
          >Fotografia</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'mostra' } }"
          >mostra</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'fonte' } }"
          >Fonte</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'listItems', params: { collection: 'bib' } }"
          >Bibliografia</router-link
        >
      </li>

      <!---<li class="nav-item"><router-link class="nav-link" :to="{name:'listItems',params:{collection:'autore'}}">Autori</router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{name:'notes'}">Notes</router-link></li>--->
    </ul>
  </aside>
  <!-- End Sidebar-->
</template>
