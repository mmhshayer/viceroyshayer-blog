<template>
  <nav class="py-2 flex flex-row justify-between">
    <div v-if="prev" class="pl-5 text-left block hover:shadow-md w-1/2 h-1/2 rounded-xl
    bg-gradient-to-r from-green-400 hover:from-pink-500
    ">
      <NuxtLink :to="{ name: 'slug', params: { slug: prev.slug } }">
        <span>« PREV PAGE</span>
        <br>
        {{ prev.title }}
      </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
    <div v-if="next" class="pr-5 text-right block hover:shadow-md w-1/2 h-1/2 rounded-xl
    bg-gradient-to-l from-green-400 hover:from-pink-500
    ">
      <NuxtLink :to="{ name: 'slug', params: { slug: next.slug } }">
        <span >NEXT PAGE »</span>
        <br>
        {{ next.title }}
      </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
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
