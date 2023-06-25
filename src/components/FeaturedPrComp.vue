<template>
  <div class="container w100 container_featured">
    <div class="project_content_wrap">
      <div :class="'text_wrap ' + textClass">
        <div class="project_id">
          {{ id }}
        </div>

        <h3>Featured Project</h3>

        <h2 class="align_r">{{ title }}</h2>

        <p class="align_r">{{ text }}</p>

        <a :href="websiteUrl" target="_blank" :class="'arrow ' + linkClass"
          ><span :class="underlineClass">View Project</span>
          <span>
            <svg width="30" height="10" viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
              <path
                :class="svgClass"
                d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z"
                fill="black"
              />
            </svg>
          </span>
        </a>
      </div>
      <atropos class="project_pic" v-if="picURL !== ''" :activeOffset="20">
        <img :src="picURL" alt="Featued Project" data-atropos-offset="-5" />
      </atropos>
    </div>
  </div>
</template>

<script>
import 'atropos/scss'
import Atropos from 'atropos/vue'

export default {
  name: 'FeaturesProjectComp',
  components: { Atropos },
  props: {
    title: String,
    id: String,
    textClass: String,
    text: String,
    svgColor: String,
    svgClass: String,
    picURL: String,
    linkClass: String,
    underlineClass: String,
    websiteUrl: String
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 1000px) {
  .container_featured {
    padding: 0;
  }
  .project_content_wrap {
    padding: 70px 0;
    flex-direction: column;
    margin: 0 auto;
  }
  .text_wrap,
  .project_pic {
    max-width: 828px;
    margin: 0 auto;
    padding-bottom: 1.25rem;
  }
}
@media screen and (max-width: 810px) {
  .project_text_1 {
    padding: 2rem 1rem;
  }
}
</style>
