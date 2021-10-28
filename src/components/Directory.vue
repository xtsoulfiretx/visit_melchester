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
        <h4 class="item-description fancy-scroll"> {{ business.previewText | stripHTML}} </h4>
        <h4 class="link-container"><router-link :to="{name: 'landing', params: { id: business.id, url: business.jsonUrl }}" class="links">View</router-link></h4>
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
  background-color: #212529;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
#Back {
  width: 100%;
  margin-top: 20px;
}
.backbtn {
  background: #ff013c;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff!important
}
.backbtn:hover {
  text-decoration: underline;
  background-color: #bf002d;
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
  border: 2px solid #ff013c;
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
  height: 200px;
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
  height: 150px;
  overflow-y: scroll;
}
.fancy-scroll::-webkit-scrollbar-track
  {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      background-color: #212529;
  }

.fancy-scroll::-webkit-scrollbar
  {
      width: 12px;
      background-color: #212529;
  }

.fancy-scroll::-webkit-scrollbar-thumb
  {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #ff013c;
  }

.fancy-scroll::-webkit-scrollbar-corner {
      background: rgba(0,0,0,0);
    }
.link-container{
  width: 100%;
  margin-top: 10px;
}
.links {
  padding: 10px 15px;
  background-color: #ff013c;
  border-radius: 5px;
  color: #fff!important;
  font-size: 1.2rem;
  text-decoration: none;
}
.links:hover {
  text-decoration: underline;
  background-color: #bf002d;
}
</style>