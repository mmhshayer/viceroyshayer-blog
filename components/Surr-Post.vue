<template>
  <nav class="py-2 flex flex-row justify-between">
    <div class="pl-5 text-left block hover:shadow-md w-1/2 h-1/2 rounded-xl
    bg-gradient-to-r from-green-400 hover:from-pink-500
    ">
      <NuxtLink v-if="prev" :to="{ name: 'slug', params: { slug: prev.slug } }">
        <span>« PREV PAGE</span>
        <br>
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="pr-5 text-right block hover:shadow-md w-1/2 h-1/2 rounded-xl
    bg-gradient-to-l from-green-400 hover:from-pink-500
    ">
      <NuxtLink v-if="next" :to="{ name: 'slug', params: { slug: next.slug } }">
        <span >NEXT PAGE »</span>
        <br>
        {{ next.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped></style>
