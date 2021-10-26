<template>
  <div id="Homepage">
    <div v-for="info, index in info" :key="index">
    <p> {{ info.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Homepage',

  data () {
    return {
      info: []
    }
  },
  created() {
  // GET request using axios with error handling
  axios.get("https://visit-melchester.destinationcoreone.com/home.json?token=BDFw4tCXJWiYslbVyzUdeOGDP5FBDL1t")
    .then(response => this.info = response.data.data)
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  }
}

</script>
<!-- styling for the component -->
<style>
</style>