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
    <div class="offer-banner">
      <h2 class="offer-banner-text">Check Out Our Offers!</h2>
    </div>
    <div class="offers-list-container">
      <div class="offers-container" v-for="offer, index in offers" :key="index">
        <div class="offers-title-container">
          <h3> {{ offer.title }} </h3>
        </div>
        <div class="offers-image-container">
          <div class="offers-image" :style="{ backgroundImage: `url(${ offer.mainImage })`}"></div>
        </div>
        <div class="offers-description-container">
          <h4 class="offers-description"> {{ offer.previewText | stripHTML }} </h4>
        </div>
        <h4 class="link-container-home"><a href="/offers" class="links-home">View</a></h4>
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
      info: [],
      offers: [],
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
  axios.get("https://visit-melchester.destinationcoreone.com/offers.json?token=BDFw4tCXJWiYslbVyzUdeOGDP5FBDL1t")
    .then(response => this.offers = response.data.data)
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
/* Banner Styling */
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
/* Offers Styling */
.offer-banner {
  width: 100%;
  background-color: #ff013c;
  padding: 5px 0px;
}
.offer-banner-text {
  color: #fff;
}
.offers-list-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #212529;
  justify-content: space-between;
}
.offers-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: space-between;
  background: #212529;
  color: #fff;
  width: 350px;
  height: 535px;
  border: 2px solid #ff013c;
  margin: 15px 15px;
}
.offers-title-container {
  background-color: #ff013c;
}
.offers-image-container {
  width: 100%;
}
.offers-image {
  width: 100%;
  height: 150px;
}
.offers-description-container{
  padding: 5px;
  flex-grow: 2;
}
.offer-description {
  height: 240px;
}
.link-container-home {
  width: 100%;
  background-color: #ff013c;
  margin: 0;
  align-self: flex-end;
}
.links-home {
  border-radius: 5px;
  color: #fff!important;
  font-size: 1.2rem;
  text-decoration: none;
}
.links:hover {
  text-decoration: underline;
}

</style>