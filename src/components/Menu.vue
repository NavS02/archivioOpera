<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'

export default {
  setup(props, context) {
    const accessToken = store?.tokenInfo?.access_token
    const authenticated = computed(() => store.authenticated)
    const user = computed(() => store.user)

    const router = useRouter()

    function toggleClass() {
      this.isToggled = !this.isToggled;
      document.body.classList.toggle("toggle-sidebar", this.isToggled);
    }

    function confirmLogout() {
      const confirmed = confirm('Are you sure you want to logout?')
      if (confirmed) router.push({ name: 'logout' })
    }
    

    return {
      authenticated, user,
      confirmLogout,
      toggleClass,
      isToggled: false
    }
  }
}
</script>

<template>
  <header v-if="authenticated" id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between">
      <a class="logo d-flex align-items-center">
        <!------ <img src="assets/img/logo.png" alt="">----->
        <span class="d-none d-lg-block">Archivio opera d'arte
        </span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn" @click="toggleClass" ></i>
    </div>
    <!-- End Logo -->
    
    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <ul class="nav">
          
          <li class="nav-item dropdown pe-3">
            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <!---- <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">-->
              <span class="d-none d-md-block dropdown-toggle ps-2">{{ user.first_name }}</span>
            </a>
            <!-- End Profile Iamge Icon -->
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li class="dropdown-header">
                <h6> {{ user.first_name }} </h6>
                <span></span>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center">
                  <i class="ri-translate-2"></i>
                  <span> {{ user.language }}</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center">
                  <i class="ri-mail-fill"></i>
                  <span> {{ user.email }}</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li>
                <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="confirmLogout">
                  <i class="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
            <!-- End Profile Dropdown Items -->
          </li>
          <!-- End Profile Nav -->
        </ul>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.active {
  font-weight: bold;
}
</style>
