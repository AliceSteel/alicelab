<template>
  <section class="about_us">
    <div class="container about_us_wrap">
      <atropos class="about_us_item_vertical" :activeOffset="20" :rotateXMax="5" :shadow-scale="0">
        <img :src="aboutContent.picVertURL" alt="about us" data-atropos-offset="5" />
      </atropos>
      <div class="about_us_item_text">
        <div class="text_wrap">
          <h2
            class="invisible w100"
            style="animation-delay: 0s"
            :class="{ slide_text: isScrolled }"
          >
            {{ aboutContent.titleL1 }}
          </h2>
          <h2
            class="invisible w100"
            style="animation-delay: 1s"
            :class="{ slide_text: isScrolled }"
          >
            {{ aboutContent.titleL2 }}
          </h2>
          <p class="invisible w100" :class="{ slide_text: isScrolled }" style="animation-delay: 2s">
            {{ aboutContent.text1 }}
          </p>
          <p
            v-if="aboutContent.text2"
            class="invisible w100"
            :class="{ slide_text: isScrolled }"
            style="animation-delay: 3s"
          >
            {{ aboutContent.text2 }}
          </p>
          <a
            v-if="this.$route.name === 'About'"
            :href="linkTo"
            class="w100 arrow text_black invisible"
            :class="{ slide_text: isScrolled }"
            style="animation-delay: 4s"
            ><span class="menu_link">{{ aboutContent.buttonText }}</span>
            <span>
              <svg
                width="30"
                height="10"
                viewBox="0 0 30 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z"
                  fill="black"
                />
              </svg> </span
          ></a>
          <router-link
            v-else
            :to="linkTo"
            class="w100 arrow text_black invisible"
            :class="{ slide_text: isScrolled }"
            style="animation-delay: 4s"
            ><span class="menu_link">{{ aboutContent.buttonText }}</span>
            <span>
              <svg
                width="30"
                height="10"
                viewBox="0 0 30 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z"
                  fill="black"
                />
              </svg>
            </span>
          </router-link>
        </div>
      </div>
      <div class="about_us_item_horizontal">
        <atropos class="pic_wrap" :activeOffset="30">
          <img :src="aboutContent.picHorURL" alt="about us" data-atropos-offset="5" />
        </atropos>
      </div>
    </div>
  </section>
</template>

<script>
import 'atropos/scss'
import Atropos from 'atropos/vue'

export default {
  name: 'AboutComp',
  components: { Atropos },
  props: {
    aboutContent: {
      required: true,
      type: Object
    },
    linkTo: String
  },
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    this.$route.name === 'About'
      ? (this.isScrolled = true)
      : window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > window.screen.height / 2
      if (this.isScrolled) {
        window.removeEventListener('scroll', this.handleScroll)
        console.log('listener removed')
      }
    }
  }
}
</script>

<style lang="scss">
.invisible {
  opacity: 0;
}
.slide_text {
  animation: slide-left 2s forwards;
}

@keyframes slide-left {
  0% {
    transform: translate(101%);
    opacity: 1;
  }
  100% {
    transform: translate(0%);
    opacity: 1;
  }
}

@media screen and (max-width: 600px) {
  .about_us_wrap {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .about_us_item_vertical,
  .about_us_item_text {
    margin: 0 auto;
    padding: 0 40px;
    max-width: 405px;
    float: none;
  }
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
  }
}
@media screen and (max-width: 350px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
