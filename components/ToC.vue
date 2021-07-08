<template>
  <nav class="mt-4">
    <ul v-if="article.toc" class=" text-center">
      <li
        :class="{
          'pl-4': link.depth === 3,
        }"
        class="toc-list"
        v-for="link of article.toc"
        :key="link.id"
      >
        <a
          role="button"
          :href="`#${link.id}`"
          >{{ link.text }}</a
        >
      </li>
    </ul>
    <span v-else>&nbsp;</span>
  </nav>
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
