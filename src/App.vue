<template>
  <main>
    <header-comp
      :class="{ scroll: isScroll }"
      :color="isScroll || $route.name === 'About' ? '#000' : '#fff'"
    />
    <router-view />
    <footer-comp
      v-if="$route.name !== 'Projects'"
      :footerTheme="
        $route.name === 'ClientsPage' ? 'dark' : $route.name === 'ProjectN' ? 'dark' : 'footer'
      "
    >
    </footer-comp>
  </main>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  },
  data() {
    return {
      isScroll: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.toggleFixedHeader)
  },
  methods: {
    toggleFixedHeader() {
      console.log('header listener')
      if (document.querySelector('section').offsetHeight !== null) {
        this.isScroll = window.scrollY > document.querySelector('section').offsetHeight
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.toggleFixedHeader)
  }
}
</script>
