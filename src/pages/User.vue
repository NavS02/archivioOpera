<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Profile</h1>
    </div>
    <!-- End Page Title -->

    <section class="section profile">
      <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div
              class="card-body profile-card pt-4 d-flex flex-column align-items-center"
            >
              <img src="/not-found.svg" alt="Profile" class="rounded-circle" />
              <h2>{{ user.first_name }} {{ user.last_name }}</h2>
              <h3>{{ user.email }}</h3>
              <button
                type="button"
                class="btn btn-danger"
                @click.prevent="confirmLogout"
              >
                Esci
              </button>
            </div>
          </div>
        </div>

        <div class="col-xl-8">
          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-overview"
                    aria-selected="true"
                    role="tab"
                  >
                    Overview
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-edit"
                    aria-selected="false"
                    role="tab"
                    tabindex="-1"
                  >
                    Edit Profile
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-settings"
                    aria-selected="false"
                    role="tab"
                    tabindex="-1"
                  >
                    Settings
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-change-password"
                    aria-selected="false"
                    role="tab"
                    tabindex="-1"
                  >
                    Change Password
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-favorite-items"
                    aria-selected="false"
                    role="tab"
                    tabindex="-1"
                  >
                    Favorite Items
                  </button>
                </li>
              </ul>
              <div class="tab-content pt-2">
                <div
                  class="tab-pane fade profile-overview active show"
                  id="profile-overview"
                  role="tabpanel"
                >
                  <h5 class="card-title">About</h5>
                  <p class="small fst-italic">
                    {{ user.description }}
                  </p>

                  <h5 class="card-title">Profile Details</h5>

                  <div class="container">
                    <div class="row align-items-center justify-content-between">
                      <div class="col-lg-3 col-md-3 label">Name</div>
                      <div class="col-lg-9 col-md-9">
                        {{ user.first_name }} {{ user.last_name }}
                      </div>
                    </div>

                    <div class="row align-items-center justify-content-between">
                      <div class="col-lg-3 col-md-3 label">Company</div>
                      <div class="col-lg-9 col-md-9">Opera Metropolitana</div>
                    </div>

                    <div class="row align-items-center justify-content-between">
                      <div class="col-lg-3 col-md-3 label">Role</div>
                      <div class="col-lg-9 col-md-9">{{ user.role }}</div>
                    </div>

                    <div class="row align-items-center justify-content-between">
                      <div class="col-lg-3 col-md-3 label">Country</div>
                      <div class="col-lg-9 col-md-9">{{ user.location }}</div>
                    </div>

                    <div class="row align-items-center justify-content-between">
                      <div class="col-lg-3 col-md-3 label">Language</div>
                      <div class="col-lg-9 col-md-9">{{ user.language }}</div>
                    </div>

                    <div class="row align-items-center justify-content-between">
                      <div class="col-lg-3 col-md-3 label">Email</div>
                      <div class="col-lg-9 col-md-9">{{ user.email }}</div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade profile-edit pt-3"
                  id="profile-edit"
                  role="tabpanel"
                >
                  <!-- Profile Edit Form -->
                  <form>
                    <div class="row mb-3">
                      <label
                        for="profileImage"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Profile Image</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <img src="/not-found.svg" alt="Profile" />
                        <div class="pt-2">
                          <a
                            href="#"
                            class="btn btn-primary btn-sm"
                            title="Upload new profile image"
                            ><i class="bi bi-upload"></i
                          ></a>
                          <a
                            href="#"
                            class="btn btn-danger btn-sm"
                            title="Remove my profile image"
                            ><i class="bi bi-trash"></i
                          ></a>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Name" class="col-md-4 col-lg-3 col-form-label"
                        >Name</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="Name"
                          type="text"
                          class="form-control"
                          id="Name"
                          :value="user.first_name"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label
                        for="Surname"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Surname</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="Surname"
                          type="text"
                          class="form-control"
                          id="Surname"
                          :value="user.last_name"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label
                        for="description"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Description</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="description"
                          type="text"
                          class="form-control"
                          id="description"
                          :value="user.description"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="company"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Company</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="company"
                          type="text"
                          class="form-control"
                          id="company"
                          :value="user.title"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Job" class="col-md-4 col-lg-3 col-form-label"
                        >Job</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="job"
                          type="text"
                          class="form-control"
                          id="Job"
                          :value="user.role"
                          readonly
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="Country"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Country</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="country"
                          type="text"
                          class="form-control"
                          id="Country"
                          :value="user.location"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="Email"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Email</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="email"
                          type="email"
                          class="form-control"
                          id="Email"
                          :value="user.email"
                        />
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                  <!-- End Profile Edit Form -->
                </div>

                <div
                  class="tab-pane fade pt-3"
                  id="profile-settings"
                  role="tabpanel"
                >
                  <!-- Settings Form -->
                  <form>
                    <div class="row mb-3">
                      <label
                        for="fullName"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Email Notifications</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="changesMade"
                            checked=""
                          />
                          <label class="form-check-label" for="changesMade">
                            Changes made to your account
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="newProducts"
                            checked=""
                          />
                          <label class="form-check-label" for="newProducts">
                            Information on new products and services
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="proOffers"
                          />
                          <label class="form-check-label" for="proOffers">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="securityNotify"
                            checked=""
                            disabled=""
                          />
                          <label class="form-check-label" for="securityNotify">
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                  <!-- End settings Form -->
                </div>

                <div
                  class="tab-pane fade pt-3"
                  id="profile-change-password"
                  role="tabpanel"
                >
                  <!-- Change Password Form -->
                  <form>
                    <div class="row mb-3">
                      <label
                        for="currentPassword"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Current Password</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="password"
                          type="password"
                          class="form-control"
                          id="currentPassword"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="newPassword"
                        class="col-md-4 col-lg-3 col-form-label"
                        >New Password</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="newpassword"
                          type="password"
                          class="form-control"
                          id="newPassword"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="renewPassword"
                        class="col-md-4 col-lg-3 col-form-label"
                        >Re-enter New Password</label
                      >
                      <div class="col-md-8 col-lg-9">
                        <input
                          name="renewpassword"
                          type="password"
                          class="form-control"
                          id="renewPassword"
                        />
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">
                        Change Password
                      </button>
                    </div>
                  </form>
                  <!-- End Change Password Form -->
                </div>
                <!-- Favorite Items Form -->

                <div
                  class="tab-pane fade pt-3"
                  id="profile-favorite-items"
                  role="tabpanel"
                >
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
                  >
                    <font-awesome-icon icon="fa-solid fa-pencil" fixed-width />
                  </button>
                  <button title="save" class="btn btn-sm btn-light text-danger">
                    <i class="bi bi-heart"></i>
                  </button>
                  <button
                    title="delete"
                    class="btn btn-sm btn-light text-danger"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash" fixed-width />
                  </button>

                  <button
                    title="Info"
                    class="btn btn-sm btn-light"
                  >
                    <font-awesome-icon icon="fa-solid fa-eye" />
                  </button>
                </div>
              </template>
            </Table>
                </div>
              </div>
              <!-- End Bordered Tabs -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import store from "../store";
import { directus } from "../API/";
import Table from "../components/common/Table/Table.vue";

export default {
  components: { Table },

  setup(props, context) {
    const accessToken = store?.tokenInfo?.access_token;
    const authenticated = computed(() => store.authenticated);
    const user = computed(() => store.user);

    const router = useRouter();
    const userRol = ref();

    fetchData();
    async function fetchData() {
    }
    function toggleClass() {
      this.isToggled = !this.isToggled;
      document.body.classList.toggle("toggle-sidebar", this.isToggled);
    }

    function confirmLogout() {
      const confirmed = confirm("Are you sure you want to logout?");
      if (confirmed) router.push({ name: "logout" });
    }

    return {
      authenticated,
      user,
      userRol,
      confirmLogout,
      toggleClass,
      isToggled: false,
    };
  },
};
</script>
<style scoped></style>
