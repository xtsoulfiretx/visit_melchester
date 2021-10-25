<template>
  <div id="app">
  <div class="nav-container">
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/directory'">Business Directory</router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0;
}
a {
  color: #fff;
  padding: 10px;

}
.nav-container {
    height: 2rem;
    background-color: #000;
    color: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: dco-heading-font,sans-serif;
    text-transform: uppercase;
    font-weight: 600;
}
</style>
