<template>
  <div class="h-screen w-screen bg-yellow-400 flex flex-col justify-center content-center flex-wrap">
    <h1 v-if="error.statusCode === 404" class="text-black text-7xl error-text">404: Page not found</h1>
    <h1 v-else class="text-black text-5xl error-text">An error occurred</h1>
    <div class="my-3 text-xl text-center">
      <span class="opacity-50">Take me back to</span>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>