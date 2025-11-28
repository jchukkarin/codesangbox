<template>  
  <div id="app">
    <login-form/>
    <dashboard/>
    <widget-card/>
  </div>
</template>

<script>

import LoginForm from "./components/LoginForm.vue";


export default {
  name: "App",
  components: {
    LoginForm,
  }
};
</script>

<style>

</style>
