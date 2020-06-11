<template>
  <div class="search">
    <div class="form-container" v-show="showForm">
      <h2>Type in your search term</h2>
      <p class="error" v-show="showError">
        Please check the information you have entered. Be sure to fill in all
        fields.
      </p>
      <form
        v-on:submit.prevent="
          validateForm()
          getResult(query)
        "
      >
        <input type="text" placeholder="Type in your search" v-model="query" />
        <button type="submit">Search</button>
      </form>
    </div>
    <div class="results" v-if="results">
      <ul v-for="result in results" :key="result.id">
        <li>{{ result }}</li>
      </ul>
    </div>
    <div class="success-message" v-show="!showForm">
      <h1>Start over?</h1>
      <p>
        <router-link :to="{ name: 'home' }">Click here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'search',
  data() {
    return {
      msg: 'Search',
      query: '',
      results: [],
      showForm: true,
      showError: false
    }
  },
  methods: {
    validateForm: function() {
      if (this.query !== '') {
        this.showForm = false
      } else {
        this.showError = true
      }
    },
    getResult(query) {
      axios
        .get(
          'https://api.duckduckgo.com/?q=' +
            query +
            '&format=json' +
            '&pretty=1' +
            '&no_redirects=1' +
            '&no_html=1' +
            '&skip_disambig=1'
        )
        .then(response => {
          console.log(response.data)
          this.results = response.data
        })
        .catch(error => {
          console.log('There was an error:' + error.response)
        })
    }
  }
}
</script>
