<template>
  <div id="app">
    <h1>Welcome to Vue.js App!</h1>

    <!-- La visualizzazione dei componenti dipende dalla rotta -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
