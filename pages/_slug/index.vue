<template>
  <div>
    <h1>something</h1>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('art', params.slug)
        .fetch()
      // the article being returned is an array of object. i need a single object.
      console.log(article)
      return {
        article
      }
    },
  }
</script>

<style scoped>

</style>
