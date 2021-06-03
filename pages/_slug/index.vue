<template>
  <div class="mx-5 md:mx-24 lg:mx-44 xl:mx-56 2xl:mx-86">

    <section class="text-center my-10">
      <h1 class="text-5xl font-bold">{{ article.title }}</h1>
      <section >
        <sub class="leading-8 font-light text-sm">{{ article.date }}</sub>
        <p>
          {{ article.description }}
        </p>
      </section>
    </section>

    <nuxt-content :document="article" />

    <button v-for="(tag, index) of article.tags" :key="index" @click="removeTagFilter(index)" class="mx-2 p-1 rounded-xl bg-blue-400 mb-5 shadow-lg">
      {{ tag }}
    </button>

  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content( params.slug )
        .fetch()
      return {
        article
      }
    },
  }
</script>

<style scoped>

</style>
