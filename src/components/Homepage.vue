<template>
  <div id="Homepage">
    <div v-for="info, index in info" :key="index">
      <div class="homepage-banner">
        <div class="banner-image" :style="{ backgroundImage: `url(${ info.mainImage })`}">
          <div class="banner-image-overlay"></div>
          <div class="text-container">
          <h1 class="banner-header-text"> {{ info.title }}</h1>
          <h2 class="homepage-secondary-text"> {{info.subtitle}} </h2>
        </div>
        </div>
      </div>
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
#Homepage {
  margin-top: 0px;
}
.homepage-banner{
  display: flex;
  flex-direction: column;
}
.text-container {
  display: flex;
  flex-direction: column;
  color: #fff;
  z-index: 2;
}
.banner-header-text {
  font-family: dco-heading-font,sans-serif;
    color: #fff;
    position: relative;
    left: 10%;
    font-size: 6rem;
    max-width: 90%;
    text-align: left;
    margin-bottom: 0;
}
.homepage-secondary-text {
  font-family: dco-body-font,sans-serif;
    color: #fff;
    position: relative;
    left: 10%;
    font-size: 1.5rem;
    max-width: 50%;
    text-align: left;
    padding-top: 0;
    font-weight: 500;
}
.banner-image-overlay{
  position: absolute;
    z-index: 1;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: .6;
    background: linear-gradient(180deg,#000 0,transparent);
}
.banner-image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 550px;
      background-size: cover;
      background-position: 50%;
      position: relative;
}
</style>