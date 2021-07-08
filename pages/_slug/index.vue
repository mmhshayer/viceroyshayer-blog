<template>
  <div class="bg-yellow-400 min-h-screen">
    <div class="flex flex-col justify-between mx-auto px-4 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl">
      <section class="text-center py-10">
        <h1 class="text-5xl font-bold">{{ article.title }}</h1>
        <sub >
          <sub class="leading-8 font-light text-sm">{{ formatDate(article.createdAt) }}</sub>
        </sub>
      </section>

      <Back-Button />
      <ToC :article="article"/>

      <p class="article-description">{{ article.description }}</p>
      <nuxt-content :document="article"/>

      <div class="">
        <hr class="custom-hr"/>
        <Tag-Button :article="article"/>
        <Surr-Post :prev="prev" :next="next"/>
        <Scroll-Top :isScrolled="isScrolled" />
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import dateMixin from '~/mixins/date.js'
  export default {
    mixins: [dateMixin],
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
    data() {
      return {
        isScrolled: false,
        scroll: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollWindow)
    },
    methods: {
      scrollWindow() {
        const top = 100
        this.scroll = window.scrollY
        if (top <= this.scroll) {
          this.isScrolled = true
        } else {
          this.isScrolled = false
        }
      }
    }
  }
</script>

<style>
</style>
