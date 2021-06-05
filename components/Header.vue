<template>
  <nav v-show="isScrolled" class="top-0 h-auto text-center sticky shadow-xl transition transition-shadow ease-in-out">
    <a href="https://viceroyshayer.github.io/" class="text-xl md:text-2xl lg:text-3xl font-bold">viceroyshayer</a>
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
