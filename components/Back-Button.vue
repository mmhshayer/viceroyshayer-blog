<template>
  <button @click="returnHome" class="px-7 py-2 rounded-lg w-20
  bg-blue-400 hover:bg-red-400
  ">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
  </button>
</template>

<script>
  export default {
    methods: {
      returnHome() {
        this.$router.push('/');
      },
    }
  }
</script>

<style scoped>

</style>
