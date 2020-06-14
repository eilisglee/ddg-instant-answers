<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'search' }">Search</router-link> | 
      <router-link :to="{ name: 'home' }">About</router-link>
    <h1>Search for Instant Answers</h1>
    <h2>Abstract from DuckDuckGo</h2>
    <BaseIcon />
    <router-view />
    </div>
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
  text-align: left;
  color: #2c3e50;
}
#app {
  box-sizing: border-box;
  width: 800px;
  padding: 0 20px 20px;
  margin: 0 auto;
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
  border-style: none;
  width: 25%;
}
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
h1,
h2,
h3,
h4 {
  display: float;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}
h1 {
  font-size: 50px;
  font-weight: 700;
}
h2 {
  font-size: 38px;
  font-weight: 700;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
h4 {
  font-size: 21px;
  font-weight: 700;
}
button,
input {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 5px;
}
button,
input {
  overflow: visible;
}
button,
[type='button'],
[type='submit'] {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type='button']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 2px solid #39b982;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
</style>
