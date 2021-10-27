<template>
  <div id="Directory">
    <div id="Back">
      <router-link to="/" class="backbtn">Back</router-link>
    </div>
    <div class="list-container" v-for="business, index in list" :key="index">
      <div class="list-item-container">
        <h3 class="item-title"> {{ business.title }}</h3>
        <div class="Category-container">
          <h4 class="item-category"> Category: {{ business.category }} </h4>
        </div>
        <div class="image-container">
          <img :src="business.mainImage" class="list-item-image">
        </div>
        <h4 class="item-description"> {{ business.previewText | stripHTML}} </h4>
        <h4 class="link-container"><router-link :to="{name: 'landing', params: { id: business.id, url: business.jsonUrl }}" class="links">view</router-link></h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Directory',

  data () {
    return {
      list: []
    }
  },
  // computed: {
  //   cleanText: function() {
  //     return JSON.parse(this.list.previewText)
  //   }
  // },
  mounted() {
  // GET request using axios with error handling
  axios.get("https://visit-melchester.destinationcoreone.com/businesses.json?token=BDFw4tCXJWiYslbVyzUdeOGDP5FBDL1t")
    .then(response => this.list = response.data.data)
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
    // .cleanText()
  }
}
</script>
<!-- styling for the component -->
<style>
#Directory {
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
#Back {
  width: 100%;
}
.backbtn {
  background: #ff013c;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 10px 20px;
}
.list-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  margin: 20px;
}
.list-item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: #212529;
}
.item-title {
  width: 100%;
  padding: 5px;
  background: #ff013c;
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
}
.Category-container {
  width: 100%;
  background: #000;
}
.item-category {
  font-size: 1.25rem;
  color: #fff;
  font-weight: 500;
}
.image-container {
  width: 450px;
  border: 1px solid #000;
}
.list-item-image {
  width: 100%;
  height: 100%;
}
.item-description {
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: 500;
}
.link-container{
  width: 100%;
  margin-top: 10px;
}
.links {
  padding: 10px 15px;
  background-color: #ff013c;
  border-radius: 5px;
  color: #fff;
}
</style>