<template>
  <div>
    <img alt="DuckDuckGo logo" src="..\assets\ddg-logo.png" />
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>

<style scoped></style>
