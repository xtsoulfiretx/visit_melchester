<template>
  <div id="PageNotFound">
    <div class="error-container">
        <h1 class="error-title">404 Page Not Found</h1>
        <h2 class="error-text">Oh No! It look's like the page you are looking for has not been made yet! <br>Come back again sometime and hopefully we will have sorted it.</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PageNotFound',
}

</script>
<!-- styling for the component -->
<style>
.error-title {
    font-size: 3rem;
    margin: 5rem 0;
}
.error-text {
    font-size: 2rem;
}
</style>