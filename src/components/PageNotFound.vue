<template>
  <div id="PageNotFound">
    <div class="error">
      <div class="error-container">
          <h1 class="error-title">404 Page Not Found!</h1>
          <h2 class="error-text">Oh No! It look's like the page you are looking for has not been made yet! <br>Come back again sometime and hopefully we will have sorted it.</h2>
      </div>
      <div id="Back">
        <router-link to="/" class="backbtnErr">Go Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
}

</script>
<!-- styling for the component -->
<style>
.error {
  background-color: #212529;
  height: 100vh;
  padding-top: 5rem;
}
.error-title {
    font-size: 3rem;
    margin-bottom: 5rem;
    color: #ff013c;
}
.error-text {
    font-size: 2rem;
    color: #fff;
}
.backbtnErr {
  background: #ff013c;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff!important;
}
.backbtnErr:hover {
  text-decoration: underline;
  background-color: #bf002d;
}
</style>