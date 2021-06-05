<template>
  <nav v-show="isScrolled" class="bg-white top-0 h-8 text-2xl font-bold text-center sticky shadow-xl transition-shadow">
    <a href="https://viceroyshayer.github.io/">viceroyshayer</a>
  </nav>
</template>

<script>
  export default {
    props: {
      isScrolled: {
        type: Boolean,
      }
    },
  }
</script>

<style scoped>

</style>
