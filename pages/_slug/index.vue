<template>
  <div class="">
    <section class="text-center my-10">
      <h1 class="text-5xl font-bold">{{ article.title }}</h1>
      <sub >
        <sub class="leading-8 font-light text-sm">{{ article.date }} 7th june 2020</sub>
      </sub>
    </section>

    <p>{{ article.description }}</p>
    <nuxt-content :document="article" class="py-7"/>

		<div class="py-2 flex flex-row justify-center">
      <button v-for="(tag, index) of article.tags" :key="index" @click="removeTagFilter(index)" class="mx-2 p-1 rounded-xl bg-blue-400 shadow-lg">
        {{ tag }}
      </button>
		</div>
  </div>
</template>

<script>
  export default {
    layout: 'post',
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
