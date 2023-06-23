<template>
  <div v-if="item !== null">
    <header-comp logo="INTERVIEW_logo.png" :color="this.isScroll ? '#000' : '#fff'"></header-comp>

    <section class="homepage">
      <img :src="require('@/assets/images/' + item.pic2)" :alt="item.title" />
    </section>
    <section class="container">
      <div class="project_info">
        <div class="project_titles">
          <h3>
            {{ item.title }}
          </h3>
          <span>
            <h1>
              <sup>({{ item.id }})</sup>{{ item.company }}
            </h1>
          </span>
        </div>
        <div class="project_about">
          <h2>{{ item.descr }}</h2>
        </div>

        <nav class="services">
          <h3><b>Services</b></h3>
          <ul>
            <li>Production/</li>
            <li>Art Direction/</li>
            <li>Set Design/</li>
            <li>Video</li>
          </ul>
        </nav>
      </div>
    </section>
    <!-- SLIDER---------------------------------------------------------------------- -->
    <section class="project_slider">
      <div class="container w100">
        <carousel :settings="sliderSettings" :breakpoints="breakpoints">
          <slide v-for="(image, index) in itemPics" :key="index">
            <div class="carousel__item">
              <img
                :src="require('@/assets/images/' + image)"
                alt="project_slider_2"
                v-if="image !== ' '"
              />
            </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
        <h3>{{ item.title }}</h3>
      </div>
    </section>
    <!-- VIDEO--------------------------------------------------------------------- -->
    <section class="project_video" v-if="item.video !== 'N/A'">
      <div class="container">
        <div class="video_wrap">
          <a
            v-show="!this.isVideo"
            href="#"
            class="load_video"
            @click.stop.prevent="this.isVideo = true"
          >
            <img
              :src="require('@/assets/images/poster_' + item.video + '.jpg')"
              alt="video screenshot"
            />
          </a>
          <video
            v-if="this.isVideo"
            autoplay
            loop
            muted
            controls
            :title="item.title"
            :poster="require('@/assets/images/poster_' + item.video + '.jpg')"
          >
            <source :src="require('@/assets/video/' + item.video + '.mp4')" type="video/mp4" />
            <source :src="require('@/assets/video/' + item.video + '.webm')" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
    <section class="next">
      <div class="container">
        <router-link
          :to="{ name: 'ProjectN', params: { id: this.nextPageId } }"
          class="next_project_btn"
          target="_blank"
        >
          Next Project
          <span>
            <svg
              width="50"
              height="40"
              viewBox="0 0 30 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="svg_white"
                d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z"
                fill="white4"
              />
            </svg>
          </span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import axios from 'axios'

export default {
  components: {
    HeaderComp,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      item: null,
      itemPics: [],
      isVideo: false,

      sliderSettings: {
        itemsToShow: 1.5,
        wrapAround: true,
        snapAlign: 'center'
      },

      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 2.5
        }
      }
    }
  },
  computed: {
    pageId() {
      let id = parseInt(this.$route.params.id) - 1
      return id
    },
    nextPageId() {
      let nextPage = '0' + (parseInt(this.$route.params.id) + 1)
      return nextPage
    }
  },
  created() {
    axios.get('data/projects.json').then((resp) => {
      this.item = resp.data[this.pageId]
      this.itemPics.push(this.item.pic2, this.item.pic3, this.item.pic4, this.item.pic5)
    })
  },
  methods: {
    nextPage() {
      this.$router.push({ name: 'ProjectN', params: { id: this.nextPageId } })
    }
  }
}
</script>

<style lang="scss">
.project_info {
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
  padding: 14% 0;
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-rows: 126px 1fr;
  gap: 3rem;
  text-align: left;
}

.services li,
.services h3 {
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  padding-bottom: 0.5rem;
}

.project_titles {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
}

.project_about {
  width: 90%;
  max-width: 655px;
  grid-area: 2/1/3/2;
}

nav.services {
  grid-area: 2/2/3/3;
}

.project_slider {
  width: 100%;
  height: 50%;
  padding: 100px 0 215px;
  overflow: hidden;

  h3 {
    position: relative;
    top: 41px;
    left: 10%;
  }
}

.carousel__item {
  padding: 0 30px;
}

//CUstom_Navigation:_______________
.project_slider {
  button.carousel__prev,
  button.carousel__next {
    background-color: transparent;
    border-radius: 0;
    top: 105%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    width: 2rem;
    height: 2rem;

    svg {
      display: none;
    }
  }

  button.carousel__prev {
    background-image: url('@/assets/images/arrow_l.svg');
    left: 90%;
  }

  button.carousel__next {
    background-image: url('@/assets/images/arrow_r.svg');
    right: 5%;
  }
}

//VIDEO:___________________________________________________
.project_video {
  background-color: #000;
  padding: 181px 0;
}

.video_wrap {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

//______________________________________________________-

section.next {
  background-color: #000;
  padding: 23px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.next_project_btn {
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 500;
  font-size: 4rem;
  text-transform: capitalize;
  line-height: 4.75rem;
  color: #fff;
  text-align: left;
  padding: 0.5rem 1rem;
  border-radius: 2.5rem;

  span {
    padding-left: 1rem;
  }

  &:hover {
    box-shadow: 0 0 5px rgb(153, 153, 153);
    transform: scale(1.1);
  }
}

@media screen and (max-width: 700px) {
  .project_slider button.carousel__prev {
    left: 84%;
  }
}
@media screen and (max-width: 600px) {
  .project_info {
    display: block;
  }
  .project_about h2 {
    font-size: 2rem;
  }
  .project_titles {
    padding-bottom: 1.5rem;
  }
  nav.services {
    padding: 1.5rem 0;
  }
  a.next_project_btn {
    font-size: 2rem;
    svg {
      height: 20px;
    }
  }
}
</style>
