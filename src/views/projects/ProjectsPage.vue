<template>
  <div>
    <header-comp logo="INTERVIEW_logo.png" :color="this.isScroll ? '#000' : '#fff'"></header-comp>

    <main v-if="list !== null">
      <section
        v-for="project in list"
        :key="project.id"
        :class="'project_bg project_' + project.id"
      >
        <div class="projects_wrap">
          <div class="project_descr text_white">
            <div class="project_title">
              <h2>{{ project.title }}</h2>
            </div>
            <div class="project_id_wrap">
              <div class="project_id">{{ project.id }}</div>
              <h3>{{ project.company }}</h3>
            </div>
            <div class="pr_text">
              <p>{{ project.descr }}</p>
            </div>
          </div>

          <router-link
            :to="{ name: 'ProjectN', params: { id: project.id } }"
            class="arrow text_white arrow_wrap"
          >
            <span class="menu_link_white">View Project</span>
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
                  fill="white"
                />
              </svg>
            </span>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  name: 'ProjectsPage',
  components: {
    HeaderComp
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('data/projects.json').then((resp) => {
        this.list = resp.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('@/assets/scss/projects.scss');
</style>
