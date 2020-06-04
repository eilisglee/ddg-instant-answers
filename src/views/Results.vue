<template>
  <div class="results">
    <BaseIcon />
    

    <form v-on:submit.prevent="getAnswers">
      <p>
        Find results for
        <input type="text" v-model="search" />
        <button type="submit">Search</button>
      </p>
    </form>

    <SearchCard v-for="result in results" :key="result.id" :result="result" />
    
    <!-- <ul v-if="results && results.length > 0" class="results">
      <li v-for="result of results" class="result" :key="result">
        <p>
          <strong>
            {{ results }}
          </strong>
        </p>
      </li>
    </ul>
    <div v-else-if="results && results.length == 0" class="no-results">
      <h2>No results found</h2>
      <p>Please adjust your search to find more instant answers</p>
    </div>
    <ul v-if="errors.length > 0" class="errors">
      <li v-for="error of errors" v-bind:key="error">
        {{ error.message }}
      </li>
    </ul> -->

  </div>
</template>

<script>
import SearchCard from '@/components/SearchCard.vue'
import SearchApi from '@/api/SearchApi.js'

export default {
  name: 'Results',
  data() {
    return {
      Answer: null,
      posts: [],
      errors: [],
      search: '',
      results: []
    }
  },
  created() {
    SearchApi.getAnswers()
      .then(response => {
        this.results = response.data
      })
      .catch(error => {
        console.log('There was an error' + error.response)
      })
  },
  components: {
    SearchCard
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
