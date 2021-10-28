<template>
  <div id="app">
  <div class="nav-container">
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/directory'">Business Directory</router-link>
    <router-link v-bind:to="'/404'">Events</router-link>
    <router-link v-bind:to="'/404'">Offers</router-link>
    <router-link v-bind:to="'/404'">Blog</router-link>
    <router-link class="last-link" v-bind:to="'/404'">Community</router-link>
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
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}
a {
  color: #fff;
  padding: 10px;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.nav-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  height: 2rem;
  background-color: #000;
  color: #fff;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  font-family: dco-heading-font,sans-serif;
  text-transform: uppercase;
  font-weight: 600;
}
.last-link{
  margin-right: 2rem;
}
</style>
