<template>
  <div class="search">
    <div class="form-container" v-show="showForm">
      <h3>Type in your search term</h3>
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
      <spinner v-if="showSpinner"></spinner>
      <h3>{{ results.Heading }}</h3>
      <p>{{ results.Abstract }}</p>
      <p>{{ results.AbstractSource }}</p>
      <p>{{ results.AbstractURL }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CubeSpinner from '@/components/CubeSpinner'

export default {
  name: 'search',
  components: {
    spinner: CubeSpinner
  },
  data() {
    return {
      msg: 'Search',
      query: '',
      results: [],
      showForm: true,
      showError: false,
      showSpinner: false
    }
  },
  methods: {
    validateForm: function() {
      if (this.query !== '') {
        this.showForm = true
      } else {
        this.showError = true
      }
    },
    getResult(query) {
      this.showSpinner = true
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
          this.showSpinner = false
          this.results = response.data
        })
        .catch(error => {
          console.log('There was an error:' + error.response)
          this.showSpinner = false
        })
    }
  }
}
</script>
