<template>
  <div id="app">
    <h1>Search for Instant Answers</h1>
    <h2>Results from DuckDuckGo</h2>
    <BaseIcon />
    <!-- <router-link :to="{ name: 'results' }">Search</router-link> -->
    <router-view />
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'app',
  components: {
    BaseIcon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
img {
  height: 20%;
  width: 20%;
}
</style>
