<template>
  <div>
    <section id="learn_about" v-if="aboutUsData !== null">
      <about-comp :aboutContent="aboutUsData" :linkTo="'#contact'" />
    </section>

    <section id="services"></section>
    <section id="contact">
      <contact-comp />
    </section>
  </div>
</template>

<script>
import AboutComp from '@/components/AboutComp.vue'
import ContactComp from '@/components/ContactComp.vue'
import axios from 'axios'

export default {
  name: 'AboutView',
  components: { AboutComp, ContactComp },
  data() {
    return {
      aboutUsData: null
    }
  },

  created() {
    axios.get('/assets/data/aboutUs.json').then((resp) => {
      this.aboutUsData = resp.data[1]
    })
  }
}
</script>

<style lang="scss" scoped>
#services {
  background-color: #000;
  padding: 10vh;
  margin-top: -270px;
}

/*.container_services {
  width: 90%;
  max-width: 1184px;
  margin: 0 auto;
  text-align: left;
}

.pic_services_wrap {
  width: 100%;
  max-width: 1184px;
  object-fit: cover;
}*/

/*.services_descr {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 50px;
  margin-top: 175px;
}

.services_title {
  grid-area: 1/1/4/2;
}

.services_item {
  padding-bottom: 1.5rem;

  h2 {
    padding-bottom: 1rem;
  }
}*/

@media screen and (max-width: 660px) {
  #services {
    padding: 100px 0;
    margin-top: -200px;
  }

  .services_descr {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 1fr 1fr 1fr;
    margin-top: 100px;
  }

  .services_title {
    grid-area: 1/1/2/3;
  }
}
@media screen and (max-width: 460px) {
  p {
    font-size: 1rem;
  }
  .services_descr {
    display: block;
  }
}
</style>
