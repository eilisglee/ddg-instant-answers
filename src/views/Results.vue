<template>
  <div class="results">
    <BaseIcon />
    <Search />
  </div>
</template>

<script>
import axios from 'axios'
import Search from '@/components/Search.vue'
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'Results',
  components: {
    Search,
    BaseIcon
  }
}
</script>

<style scoped>
form {
  /* Center the form on the page */
  margin: 0 auto;
  width: 400px;
  /* Form outline */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* Uniform size & alignment */
  display: inline-block;
  width: auto;
  text-align: right;
}

input {
  /* To make sure that all text fields have the same font settings
     By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* Uniform text field size */
  width: 300px;
  box-sizing: border-box;

  /* Match form field borders */
  border: 1px solid #999;
}

input:focus {
  /* Additional highlight for focused elements */
  border-color: #000;
}

.button {
  /* Align buttons with the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent roughly the same space as the space
     between the labels and their text fields */
  margin-left: 0.5em;
}
</style>
