<template>
  <div id="landing">
    <div class="business-detail-container">
      <div class="business-name-container">
        <h1 class="business-name">{{ details.title }}</h1>
      </div>
      <div class="detail-image-container">
        <img :src="details.mainImage" class="detail-image">
      </div>
      <div class="additional-info-container">
        <div class="description-container">
          <h3> {{ details.body | stripHTML }} </h3>
        </div>
        <div class="get-in-touch">
          <h4>Get in touch: <br> Phone: {{ details.telephone }} <br> Email: {{ details.email }} <br> Website: {{ details.website }}</h4>
        </div>
        <div class="opening-times-container">
          <h4> {{ details.openingHours | stripHTML }} </h4>
        </div>
      </div>
    </div>
    <div id="BackL">
      <router-link to="/directory" class="backbtn">Back</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'landing',
  data () {
    return {
      details: []
    }
  },
  created() {
  // GET request using axios with error handling
  axios.get(this.$route.params.url)
    .then(response => this.details = response.data)
    .strip_tags(details.body)
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  },
}
</script>
<!-- styling for the component -->
<style>
#landing {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
#BackL{
  margin-top: 20px;
}
.business-detail-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.business-name-container {
  width: 100%;
}
.detail-image-container {
  width: 50%;
  margin: 20px;
}
.detail-image {
  width: 100%;
  height: 100%;
}
.additional-info-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40%;
}

.backbtn {
  color: #000;
}
.links {
  color: #000;
}
</style>