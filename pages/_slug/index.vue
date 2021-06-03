<template>
  <div>
    <h1>something</h1>
    <h1>{{ article.title }}</h1>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content( params.slug )
        .fetch()
      return {
        article
      }
    },
  }
</script>

<style scoped>

</style>
