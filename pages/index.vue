<template>
  <div class="mx-5 md:mx-24 lg:mx-44 xl:mx-56 2xl:mx-86">

    <section class="text-center my-10">
      <h1 class="text-5xl font-bold">Blog</h1>
      <section >
        <sub class="leading-8 font-light text-sm">Definitely not showing off</sub>
        <p>
          Here you will find a curated list of prsonal articles and previous work I am allowed to showcase.
        </p>
      </section>
    </section>

    <div class="bg-red-500">
      <div v-for="(tag, index) of this.tagFilter" :key="index">
        <div @click="removeTagFilter(index)">
          {{ tag }}
        </div>
      </div>
	  </div>

    <div class="">
      <div v-for="(post, index) of postList" :key="index">
        <nuxt-link :to="post.slug">
          <div class="mb-5 p-5 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold leading-8 tracking-tight" >{{ post.title }}</h2>
            <p class="max-w-none">{{ post.description }}</p>
          </div>
        </nuxt-link>
      </div>
	  </div>

  </div>
</template>

<script>
export default {
	async asyncData( { $content, params } ) {
		const postList = await $content( params.slug )
			.only(['title', 'description', 'slug', 'tags'])
			.fetch();
		return {
			postList
		}
	},
  data () {
    return {
      tagFilter: [
        'something',
        'anything',
        'a',
        'b',
        'c',
        'd',
      ]
    }
  },
  methods: {
    removeTagFilter (index) {
      this.tagFilter.splice(index, 1)
    }
  },
}
</script>

<style scoped>
</style>

<!--
    <div class="flex flex-wrap mt-8 justify-center space-x-2">
      <div v-for="(tag, i) in tags" :key="i">
        <button class="btn" @click="toggle($event)">
          {{ tag }}
        </button>
      </div>
    </div>

	  <div class="pt-3 mb-5 text-center">
      <h1 class="text-5xl font-bold "> Showcase </h1>
      <section >
        <sub class="leading-8 font-light text-sm">Definitely not showing off</sub>
        <p>
          Here you will find a curated list of prsonal articles and previous work I am allowed to showcase.
        </p>
      </section>
    </div>

    <div class="mx-16">
      <div v-for="(project, index) of projects" :key="index">
        <nuxt-link :to="{ name: 'slug', params: { slug: project.slug } }">
          <div>
            <div class="mb-5 p-5 rounded-lg bg-red-400">
              <h2 class="text-2xl font-bold leading-8 tracking-tight" >{{ project.title }}</h2>
              <p class="max-w-none">{{ project.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
	  </div>
-->
