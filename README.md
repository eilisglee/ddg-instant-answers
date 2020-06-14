# ddg-instant-answers

Vue.js [DuckDuckGo](https://duckduckgo.com/api) Instant Answers API consumption with Axios.

## Usage

```
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
    }
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
