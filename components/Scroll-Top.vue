<template>
  <button v-show="isScrolled" @click="returnTop" class="fixed bottom-10 right-10 shadow-xl" >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-up"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg>
  </button>
</template>

<script>
export default {
  props: {
    isScrolled: {
      type: Boolean,
    }
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped></style>
