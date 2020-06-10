<template>
  <div class="home">
    <BaseIcon />
    <div class="form-container" v-show="showForm">
      <form v-on:submit.prevent="validateForm">
        <p>
          Placeholder
          <input
            type="text"
            v-model="query"
            id="querybox"
            placeholder="Type something here"
          />
          <button type="submit">Search</button>
        </p>
        <p class="error" v-show="showError">
          Please check the information you have entered. Be sure to fill in all
          fields.
        </p>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
// import Search from '@/components/Search.vue'
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'Home',
  data() {
    return {
      search: '',
      showForm: true,
      showError: false,
      results: [],
      errors: [],
      query: ''
    }
  },
  methods: {
    validateForm: function() {
      if (this.query != '') {
        this.showForm = false
        this.$router.push('results')
      } else {
        this.showError = true
      }
    }
  }
}
components: {
  // Search, 
  BaseIcon
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
