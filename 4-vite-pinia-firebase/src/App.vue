<script setup></script>

<template>
  <div>
    <h1>App</h1>
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
          <div class="navbar-item">
            <router-link class="navbar-item" to="/"> Home </router-link>
            <router-link class="navbar-item" to="/register">
              Register
            </router-link>
            <div class="buttons are-small ">
              <router-link class="button is-success is-rounded is-outlined has-text-white" to="/login">
                <strong>Log In</strong>
              </router-link>
              <router-link class="button is-danger is-rounded is-outlined has-text-white" to="/">
                <strong>Log Out</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view> </router-view>
  </div>
</template>

<style scoped></style>
