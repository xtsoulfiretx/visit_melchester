<template>
  <div id="landing">
    <div class="business-details">
      <div class="business-detail-container">
        <div class="image-open">
          <div class="detail-image-container">
            <img :src="details.mainImage" class="detail-image">
          </div>
          <div class="opening-times-container">
              <h4> {{ details.openingHours | stripHTML }} </h4>
          </div>
        </div>
        <div class="additional-info-container">
          <div class="business-name-container">
            <h1 class="business-name">{{ details.title }}</h1>
          </div>
          <div class="description-container">
            <h3> {{ details.body | stripHTML }} </h3>
          </div>
          <div class="get-in-touch">
            <h4>Get in touch: <br> Phone: {{ details.telephone }} <br> Email: {{ details.email }} <br> Website: {{ details.website }}</h4>
          </div>
        </div>
      </div>
        <router-link to="/directory" class="backbtnL">Back</router-link>
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
  height: 100vh;
}
.business-details {
  height: 100vh;
  background-color: #212529;
}
.business-detail-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #212529;
  color: #fff;
  justify-content: space-between; 
}
.business-name-container {
  width: 100%;
  background-color: #ff013c;
}
.image-open {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  border-bottom: 3px solid #ff013c;
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
  flex-grow: 2;
  align-content: space-between;
  justify-content: space-between;
  border-left: 3px solid #ff013c;
  border-bottom: 3px solid #ff013c;
}
.description-container {
  padding: 5px;
}
.get-in-touch {
  font-size: 1.5rem;
}
.opening-times-container {
  width: 100%;
  border-top: 3px solid #ff013c;
}
.backbtnL {
  display: block;
  background: #ff013c;
  font-size: 1.5rem;
  width: 100%!important;
  text-decoration: none;
  color: #fff!important;
  padding: 0;
}
.backbtnL:hover {
  text-decoration: underline;
  background-color: #bf002d;
}
.links {
  color: #000;
}
</style>