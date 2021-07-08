<template>
  <div class="mx-5 md:mx-24 lg:mx-44 xl:mx-56 2xl:mx-86">

    <section class="text-center py-10">
      <h1 class="text-7xl font-bold">Blog</h1>
      <section >
        <sub class="leading-8 font-light text-sm">Mohammad Mustakim Hassan</sub>
        <p>
          Hi! Welcome to my blog. I write about my experiances, thoughts on random topic. I use this like a diary/journal, so it is opinioned, you may or maynot like it. However I am open to constructive discussion and debates. Emails are welcome.
        </p>
      </section>
    </section>

    <input v-model="query" type="search" autocomplete="off" placeholder="Search" class="w-full rounded-2xl h-10 p-5 my-5 shadow-lg" />

    <button v-for="(tag, index) of this.tagFilter" :key="index" @click="removeTagFilter(index)" class="mx-2 p-2 my-2 rounded-2xl bg-blue-400 hover:bg-red-400 mb-5 shadow-2xl hover:shadow-inner">
      {{ tag }}
    </button>

    <div class="">
      <div v-for="(post, index) of postList" :key="index">
        <div class="mb-5 p-5 rounded-2xl shadow-lg hover:shadow-2xl bg-indigo-500 hover:bg-indigo-600">
          <h2 class="text-2xl font-bold leading-8 tracking-tight" >{{ post.title }}</h2>
          <sub class="" >{{ formatDate(post.createdAt) }}</sub>
          <div class="flex flex-row justify-between">
            <p class="max-w-none">{{ post.description }}</p>
            <button
              class="h-20 w-20 rounded-2xl bg-green-500 hover:bg-blue-400 hover:shadow-2xl"
              >
            <NuxtLink :to="post.slug">Read More</NuxtLink></button>
          </div>
          <button v-for="(tag, index) of post.tags" :key="index" @click="pushTagFilter(tag)" class="mr-2 p-2 mt-2 rounded-2xl bg-green-500 hover:bg-blue-400 hover:shadow-2xl">{{ tag }}</button>
        </div>
      </div>
	  </div>
  </div>
</template>

<script>
import dateMixin from '~/mixins/date.js'
export default {
  layout: 'list',
  mixins: [dateMixin],
	async asyncData({ $content }) {
		const postList = await $content()
			.only(['title', 'description', 'slug', 'tags', 'createdAt' ])
			.fetch();
		return {
			postList
		}
	},
  data () {
    return {
      query: '',
      tagFilter: [],
    }
  },
  methods: {
    pushTagFilter (tag) {
      if ( this.tagFilter.includes(tag) ) {
        return
      }
      this.tagFilter.push(tag)
    },
    removeTagFilter (index) {
      this.tagFilter.splice(index, 1)
    }
  },
  watch: {
    query: {
      handler: async function (query) {
        if (!this.query) {
          this.postList = this.postList
        }
        this.postList = await this.$content()
          .only(['title', 'description', 'slug', 'tags', 'createdAt' ])
          .where(
            { tags: { $contains: this.tagFilter } }
          )
          .search(query)
          .fetch()
      }
    },
    tagFilter: {
      handler: async function () {
        if ( this.tagFilter.length == 0 ) {
          this.postList = this.postList
        }
        this.postList = await this.$content()
          .only(['title', 'description', 'slug', 'tags', 'createdAt' ])
          .where(
            { tags: { $contains: this.tagFilter } }
          )
          .fetch()
      }
    }
  },
}
</script>

<style scoped>
</style>