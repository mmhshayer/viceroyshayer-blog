<template>
  <div class="mx-5 md:mx-24 lg:mx-44 xl:mx-56 2xl:mx-86">

    <section class="text-center py-10">
      <h1 class="text-7xl font-bold">Blog</h1>
      <section >
        <sub class="leading-8 font-light text-sm">Mohammad Mustakim Hassan</sub>
        <p>
          Hi! Welcome to my blog. Here I write about different things, mostly focusing on my thoughts, experiance and opinion. This was blog was intentiolnally made without image, advertisement, code snippet support. They have no use here.
        </p>
      </section>
    </section>

    <input v-model="query" type="search" autocomplete="off" placeholder="Search" class="w-full rounded-md h-10 p-5 my-5 shadow-lg" />

    <button v-for="(tag, index) of this.tagFilter" :key="index" @click="removeTagFilter(index)" class="mx-2 p-2 my-2 rounded-xl bg-blue-400 hover:bg-red-400 mb-5 shadow-2xl hover:shadow-inner">
      {{ tag }}
    </button>

    <div class="">
      <div v-for="(post, index) of postList" :key="index">
        <div class="mb-5 p-5 rounded-lg shadow-lg hover:shadow-2xl bg-indigo-500 hover:bg-indigo-600">
          <h2 class="text-2xl font-bold leading-8 tracking-tight" >{{ post.title }}</h2>
          <p class="max-w-none">{{ post.description }}</p>
          <p><NuxtLink :to="post.slug">[ Read More ]</NuxtLink></p>
          <button v-for="(tag, index) of post.tags" :key="index" @click="pushTagFilter(tag)" class="mr-2 p-2 mt-2 rounded-xl bg-green-500 hover:bg-blue-400 hover:shadow-2xl">{{ tag }}</button>
        </div>
      </div>
	  </div>

  <Pagination />
  </div>
</template>

<script>
export default {
  layout: 'list',
	async asyncData({ $content }) {
		const postList = await $content()
			.only(['title', 'description', 'slug', 'tags'])
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
          .only(['title', 'description', 'slug', 'tags'])
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
          .only(['title', 'description', 'slug', 'tags'])
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

<!--
     async filterByTags ( tagFilter ) {
      if ( !tagFilter ) {
        this.postList = this.postList
      }
      this.postList = await this.$content()
        .only(['title', 'description', 'slug', 'tags'])
        .where(
          { tags: { $contains: tagFilter } }
        )
        .fetch()
    }
-->
