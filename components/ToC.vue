<template>
  <nav class="mt-4">
    <ul v-if="article.toc">
      <li
        :class="{
          'pl-4': link.depth === 3,
        }"
        class="toc-list"
        v-for="link of article.toc"
        :key="link.id"
      >
        <a
        :class="{
            'text-red-500 hover:text-red-600': link.id === currentlyActiveToc,
            'text-black hover:gray-900': link.id !== currentlyActiveToc,
          }"
          role="button"
          class="transition-colors duration-75 text-base mb-2 block"
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
