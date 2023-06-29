export default {
  data() {
    return {
      isScrolled: false,
      id: ''
    }
  },
  methods: {
    handleScroll(projectId) {
      this.id = projectId
      window.addEventListener('scroll', this.doOnScroll)
    },
    doOnScroll() {
      this.isScrolled = window.scrollY >= document.getElementById(this.id)?.offsetTop * 0.75
      this.isScrolled ? window.removeEventListener('scroll', this.doOnScroll) : null
    }
  }
}
