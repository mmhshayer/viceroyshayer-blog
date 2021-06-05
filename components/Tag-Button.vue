<template>
  <div class="py-2 flex flex-row justify-center">
    <button v-for="(tag, index) of article.tags" :key="index" class="mx-2 p-1 rounded-xl bg-blue-400 shadow-lg">
      {{ tag }}
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      article: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<style scoped>

</style>
