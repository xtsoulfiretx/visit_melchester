<template>
  <div id="landing">
    <div id="Back">
      <router-link to="/directory" class="backbtn">Back</router-link>
    </div>
    <div>
      {{ $route.params.url }}
    </div>
    <div v-for="business, index in business" :key="index">
    <h3> {{ business.title }}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'landing',
  props: {
    url:String
  },
  data () {
    return {
      business: []
    }
  },
  created() {
  // GET request using axios with error handling
  newurl = this.props.url,
  axios.get(newurl)
    .then(response => this.business = response.data)
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  }
}
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.backbtn {
  color: #000;
}
.links {
  color: #000;
}
</style>