<template>
  <div>
    <Header :isScrolled="isScrolled" />
    <Nuxt class="mx-auto px-4 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl"/>
    <Scroll-Top :isScrolled="isScrolled" />
    <Footer />
  </div>
</template>

<script>
export default {
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
