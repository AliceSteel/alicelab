<template>
  <div>
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

export default {
  name: 'ProjectsPage',

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
      axios.get('/assets/data/projects.json').then((resp) => {
        this.list = resp.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.project_bg {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
h2 {
  font-size: 4rem;
  line-height: 4.75rem;
}
.project_01 {
  margin-top: -42px;
  background-image: url('/assets/images/girl_p4@1440.jpg');
}
.project_02 {
  background-image: url('/assets/images/project_reebok@1440.jpg');
}

.project_03 {
  background-image: url('/assets/images/project_lesMiles@1440.jpg');
}

.project_04 {
  background-image: url('/assets/images/b&w_subway@1440.jpg');
}

.projects_wrap {
  width: 90%;
  height: 100%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 668px 0 81px;
  position: relative;
}

.project_descr {
  width: 62%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  text-align: left;
}

.project_id_wrap {
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.pr_text {
  width: 68%;
  min-width: 240px;
}
.arrow_wrap {
  width: 37%;
  min-width: 140px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-top: 2rem;
}
.project_title {
  padding-bottom: 2rem;
  width: 90%;
}

@media screen and (max-width: 636px) {
  .project_id_wrap {
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 3rem;
  }
}
</style>
