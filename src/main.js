// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//Import Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//import the Homepage component
import Homepage from './components/Homepage'
//import the Directory component
import Directory from './components/Directory'
//Import the Landing component
import landing from './components/landing'
// Import the Page not found component
import PageNotFound from './components/PageNotFound'
//tell vue to use the router & Axios
window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'
Vue.prototype.$https = axios
Vue.use(VueRouter, VueAxios)
//define your routes
const routes = [
//define the root url of the application.
{ path: '/',
  component: Homepage 
},
{ path: '/directory',
  component: Directory
},
{ path: '/landing/:id',
  name: 'landing', 
  id:'list', 
  props: true,
  component: landing
},
{ path: "*",
 component: PageNotFound 
}
]


// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
