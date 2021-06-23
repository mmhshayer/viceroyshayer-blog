<template>
  <div class="">
    <section class="text-center py-10">
      <h1 class="text-5xl font-bold">{{ article.title }}</h1>
      <sub >
        <sub class="leading-8 font-light text-sm">{{ article.date }} 7th june 2020</sub>
      </sub>
    </section>

    <Back-Button />
    <ToC :article="article"/>

    <p>{{ article.description }}</p>
    <nuxt-content :document="article"/>

    <Tag-Button :article="article"/>
    <SMS />
    <Surr-Post :prev="prev" :next="next" />
  </div>
</template>

<script>
  export default {
    layout: 'post',
    async asyncData({ $content, params }) {
      const article = await $content( params.slug )
        .fetch()
    const [prev, next] = await $content()
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
      return {
        article,
        prev,
        next,
      }
    },
  }
</script>

<style scoped>

</style>
