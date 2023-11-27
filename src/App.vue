<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      v-if="showNavbar"
    >
      <a class="navbar-brand" href="#">Your Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <router-link to="/">
            <li class="nav-item">
              <a class="nav-link" href="#">Controller</a>
            </li></router-link
          >
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showNavbar: true,
    };
  },
  watch: {
    $route(to) {
      // Check the route and decide whether to show/hide the navbar
      this.showNavbar = !to.path.startsWith("/overlay/");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
