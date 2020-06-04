<template>
  <div>
    <h4>{{ result }}</h4>
  </div>
</template>

<script>
export default {
  prop: {
    result: Object
  }
}
</script>

<style scoped>
h4 {
  color: green;
}
</style>
