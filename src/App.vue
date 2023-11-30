<template>
  <div>
    <nav class="navbar navbar-light bg-light" v-if="showNavbar">
      <a class="navbar-brand" href="#">
        <img
          src="https://i.imgur.com/xILgPko.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        Counter
      </a>
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

  color: #2c3e50;
}
</style>
