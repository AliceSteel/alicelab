<template>
  <div class="container" :id="projectContent.id">
    <div class="project_content_wrap">
      <div :class="textClass">
        <div
          class="project_id invisible"
          :class="{ slide_right: isScrolled }"
          style="animation-delay: 0s"
        >
          {{ projectContent.id }}
        </div>

        <h3 class="invisible" :class="{ slide_right: isScrolled }" style="animation-delay: 1s">
          Project
        </h3>

        <h2 class="invisible" :class="{ slide_right: isScrolled }" style="animation-delay: 2s">
          {{ projectContent.title }}
        </h2>

        <p class="invisible" :class="{ slide_right: isScrolled }" style="animation-delay: 3s">
          {{ projectContent.text }}
        </p>

        <a
          :href="projectContent.websiteUrl"
          target="_blank"
          class="arrow invisible"
          :class="{ slide_right: isScrolled }"
          style="animation-delay: 4s"
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
      <atropos class="project_pic" v-if="projectContent.pic1 !== ''" :activeOffset="20">
        <img :src="projectContent.pic1" alt="Featued Project" data-atropos-offset="-5" />
      </atropos>
    </div>
  </div>
</template>

<script>
import 'atropos/scss'
import Atropos from 'atropos/vue'
import isScrolled from '@/mixins/isScrolled.js'

export default {
  name: 'FeaturesProjectComp',
  components: { Atropos },
  mixins: [isScrolled],
  props: {
    projectContent: {
      type: Object,
      required: true
    },
    textClass: String,
    svgClass: String,
    underlineClass: String
  },
  mounted() {
    this.handleScroll(this.projectContent.id)
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 135px 0 114px 127px;
}
.project_content_wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5%;

  &.gap15 {
    gap: 15%;
  }
}

.project_text_1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  gap: 1.5rem;
  padding: 0 80px;
  overflow: hidden;
}

.project_pic {
  width: 100%;
  max-width: 828px;
  overflow: hidden;
}

@media screen and (max-width: 1000px) {
  .container {
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
