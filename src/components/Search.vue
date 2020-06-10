<template>
  <div class="search">
    <h2>Type in your search term</h2>
    <div class="form-container" v-show="showForm">
      <form v-on:submit.prevent="getResult(query)">
        <input type="text" placeholder="Type in your search" v-model="query" />
        <button type="submit">Search</button>
      </form>
      <div class="results" v-if="results">
        <ul v-for="result in results" :key="result.id">
          <li>{{ result }}</li>
        </ul>
      </div>
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
      showForm: true
    }
  },
  methods: {
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


