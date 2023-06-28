<template>
  <div v-if="aboutUsData !== null && projectData !== null">
    <section>
      <atropos class="homepage" :rotateXMax="5" :rotateYMax="5">
        <img src="/assets/images/Homepage@1440.png" alt="homepage" data-atropos-offset="-5" />
        <h1>{{ aboutUsData.h1 }}</h1>
      </atropos>
    </section>
    <!-- description section--------------------------------------------------------------- -->
    <about-comp :aboutContent="aboutUsData" :linkTo="'/about'"> </about-comp>
    <!-- featured section------------------------------------------------------------------ -->
    <section id="featured_project_1">
      <featured-pr-comp
        :projectContent="projectData[0]"
        :textClass="'project_text_1 text_white'"
        :svgClass="'svg_white'"
        :underlineClass="'menu_link_white'"
      >
      </featured-pr-comp>
    </section>

    <section class="w100">
      <div class="featured_project_2">
        <video loop muted preload autoplay poster="/assets/images/video_p@1900.jpg">
          <source src="/assets/video/la_siluette.mp4" type="video/mp4" />
          <source src="/assets/video/la_siluette.webm" type="video/webm" />
        </video>

        <div class="content_over_video">
          <div class="text_wrap text_white">
            <div class="project_id">{{ this.projectData[1].id }}</div>
            <h3>Project</h3>
            <h2>{{ projectData[1].title }}</h2>
            <p>{{ projectData[1].descr }}</p>
            <a :href="projectData[1].websiteUrl" target="_blank" class="arrow text_white">
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
            </a>
          </div>
        </div>
      </div>
    </section>

    <featured-pr-comp
      :projectContent="projectData[2]"
      :textClass="'project_text_1 text_black'"
      :underlineClass="'menu_link'"
    >
    </featured-pr-comp>
  </div>
</template>

<script>
import AboutComp from '@/components/AboutComp.vue'
import FeaturedPrComp from '@/components/FeaturedPrComp.vue'
import axios from 'axios'
import 'atropos/scss'
import Atropos from 'atropos/vue'

export default {
  components: {
    AboutComp,
    FeaturedPrComp,
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
      this.aboutUsData = resp.data[0]
    })
    axios.get('/assets/data/projects.json').then((resp) => {
      this.projectData = resp.data
    })
  }
}
</script>

<style lang="scss" scoped>
.homepage {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  img {
    height: 100%;
  }
  h1 {
    position: absolute;
    width: max-content;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;
    color: #c4091e;
    text-transform: uppercase;
    mix-blend-mode: difference;
  }
}

#featured_project_1 {
  background-color: #000;
  margin-top: -50px;
}

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
