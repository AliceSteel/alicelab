<template>
  <div v-if="aboutUsData !== null && projectData !== null">
    <section>
      <atropos class="homepage" :rotateXMax="5" :rotateYMax="5">
        <img src="/assets/images/Homepage@1440.jpg" alt="homepage" data-atropos-offset="-5" />
        <h1>{{ aboutUsData[0].h1 }}</h1>
      </atropos>
    </section>
    <!-- description section--------------------------------------------------------------- -->
    <about-comp
      :picVertURL="this.aboutUsData[0].pic1"
      :picHorURL="this.aboutUsData[0].pic2"
      :title="this.aboutUsData[0].title"
      :text1="this.aboutUsData[0].text1"
      :buttonText="this.aboutUsData[0].button"
      linkTo="About"
    >
    </about-comp>
    <!-- featured section------------------------------------------------------------------ -->
    <section id="featured_project_1">
      <featuredPrComp
        :title="this.projectData[0].title"
        :id="this.projectData[0].id"
        textClass="project_text_1 text_white"
        :text="this.projectData[0].descr"
        svgClass="svg_white"
        :picURL="this.projectData[0].pic1"
        linkClass="text_white"
        underlineClass="menu_link_white"
      >
      </featuredPrComp>
    </section>

    <section class="w100">
      <div class="featured_project_2">
        <video loop muted preload autoplay poster="/assets/images/video_p@1900.jpg">
          <source src="/assets/video/la_siluette.mp4" type="video/mp4" />
          <source src="/assets/video/la_siluette.webm" type="video/webm" />
        </video>

        <div class="content_over_video">
          <div class="text_wrap text_white align_l">
            <div class="project_id">{{ this.projectData[1].id }}</div>
            <h3>Featured Project</h3>
            <h2>{{ this.projectData[1].title }}</h2>
            <p>{{ this.projectData[1].descr }}</p>
            <router-link
              :to="{ name: 'ProjectN', params: { id: this.projectData[1].id } }"
              class="arrow text_white"
            >
              <span class="menu_link_white">View Project</span>
              <span>
                <svg width="30" height="10" viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    class="svg_white"
                    d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z"
                    fill="black"
                  />
                </svg>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section id="featured_project_3">
      <featured-pr-comp
        :title="this.projectData[2].title"
        :id="this.projectData[2].id"
        textClass="project_text_1 text_black"
        :text="this.projectData[2].descr"
        :picURL="this.projectData[2].pic1"
        linkClass="text_black"
        underlineClass="menu_link"
      >
      </featured-pr-comp>
    </section>

    <section id="featured_project_4">
      <div class="container w100">
        <div class="project_content_wrap gap15">
          <div class="text_wrap project_text_4">
            <div class="project_id">{{ projectData[3].id }}</div>
            <h3>Featured Project</h3>
            <div class="pic_wrap_project_4">
              <img src="/assets/images/roots@476.jpg" alt="project_4" />
            </div>
            <h2>{{ projectData[3].title }}</h2>
            <p class="align_r">{{ projectData[3].descr }}</p>
            <router-link
              :to="{ name: 'ProjectN', params: { id: this.projectData[3].id } }"
              class="arrow"
              ><span class="menu_link text_black">View Project</span>
              <span>
                <svg width="30" height="10" viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z"
                    fill="black"
                  />
                </svg>
              </span>
            </router-link>
          </div>
          <div class="project_4_slider">
            <SliderComp id="3"></SliderComp>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutComp from '@/components/AboutComp.vue'
import FeaturedPrComp from '@/components/FeaturedPrComp.vue'
import axios from 'axios'
import SliderComp from '@/components/SliderComp.vue'
import 'atropos/scss'
import Atropos from 'atropos/vue'

export default {
  components: {
    AboutComp,
    FeaturedPrComp,
    SliderComp,
    Atropos
  },
  name: 'HomeView',
  data() {
    return {
      projectData: null,
      aboutUsData: null
    }
  },

  created() {
    axios.get('/assets/data/aboutUs.json').then((resp) => {
      this.aboutUsData = resp.data
    })
    axios.get('/assets/data/projects.json').then((resp) => {
      this.projectData = resp.data
    })
  }
}
</script>

<style lang="scss" scoped>
.featured_project_2 {
  //.video_wrap
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 = 56.25%*/
  height: 0;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 5;
  }
}

.content_over_video {
  position: absolute;
  width: 80%;
  height: 50%;
  left: 5%;
  bottom: 10%;
  z-index: 6;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

@media screen and (max-width: 1000px) {
  .content_over_video .text_wrap {
    left: 5%;
  }
  #featured_project_4 {
    padding: 0;
    .project_content_wrap {
      padding-bottom: 2rem;
    }
  }
  .project_text_4 {
    width: 100%;
    .project_id,
    h3,
    h2,
    p.align_r,
    a.arrow {
      padding: 0 1rem;
    }
  }
  .project_4_slider {
    width: 100%;
  }
  .pic_wrap_project_4 {
    margin: 0;
  }
}
@media screen and (max-width: 620px) {
  .content_over_video .text_wrap {
    gap: 5px;
    h3 {
      display: none;
    }
    p {
      font-size: 1rem;
      max-height: 2.3rem;
      overflow: hidden;
    }
  }
}
@media screen and (max-width: 350px) {
  .homepage h1 {
    font-size: 1.5rem;
  }
}
</style>
