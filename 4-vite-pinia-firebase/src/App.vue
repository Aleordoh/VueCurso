<script setup>
import LoadingSpinner from "./components/LoadingSpinner.vue";
import { useUserStore } from "./store/userStore";
const userStore = useUserStore();
</script>

<template>
  <div>
    <h1>MAO - App</h1>
    <nav
      id="mainNav"
      class="navbar staticBar is-fixed-top is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/#">
          <img src="/src/assets/vue.svg" alt="" width="122" class="vueIcon" />
        </router-link>
        <span class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <div v-if="!userStore.loadingSession" class="navbar-item">
            <router-link class="navbar-item" to="/" v-if="userStore.userData">
              Home
            </router-link>
            <router-link
              class="navbar-item"
              to="/register"
              v-if="!userStore.userData"
            >
              Register
            </router-link>
            <div class="buttons are-small">
              <router-link
                class="button is-success is-rounded is-outlined has-text-white"
                to="/login"
                v-if="!userStore.userData"
              >
                <strong>Log In</strong>
              </router-link>
              <router-link
                to="/login"
                class="button is-danger is-rounded is-outlined has-text-white"
                @click="userStore.logoutUser"
                v-if="userStore.userData"
              >
                <strong>Log Out</strong>
              </router-link>
            </div>
          </div>
          <LoadingSpinner v-else></LoadingSpinner>
        </div>
      </div>
    </nav>
    <router-view> </router-view>
  </div>
</template>

<style scoped></style>
