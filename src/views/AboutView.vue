<template>
  <div>
    <header-comp logo="INTERVIEW_logo_black.png" color="#000"></header-comp>

    <section id="learn_about" v-if="this.aboutUsData !== null">
      <about-comp
        :picVert="this.aboutUsData[1].pic1"
        :picHor="this.aboutUsData[1].pic2"
        :title="this.aboutUsData[1].title"
        :text1="this.aboutUsData[1].text1"
        :text2="this.aboutUsData[1].text2"
        h2Id="title_page_about"
        itemId="page_about_item"
        :buttonText="this.aboutUsData[1].button"
        linkTo="ContactPage"
      >
      </about-comp>
    </section>

    <section id="services">
      <div class="container_services">
        <div class="pic_services_wrap">
          <img src="@/assets/images/services@1184.jpg" alt="services" />
        </div>
        <div class="services_descr text_white">
          <div class="services_title">
            <h2>Services</h2>
          </div>
          <div v-for="(service, index) in servicesData" :key="index" class="services_item">
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <contact-comp></contact-comp>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import AboutComp from '@/components/AboutComp.vue'
import ContactComp from '@/components/ContactComp.vue'
import axios from 'axios'

export default {
  name: 'AboutView',
  components: { HeaderComp, AboutComp, ContactComp },
  data() {
    return {
      aboutUsData: null,
      servicesData: null
    }
  },

  created() {
    axios.get('data/aboutUs.json').then((resp) => {
      this.aboutUsData = resp.data
    })
    axios.get('data/services.json').then((resp) => {
      this.servicesData = resp.data
    })
  }
}
</script>

<style lang="scss" scoped>
#services {
  background-color: #000;
  padding: 337px 0 185px;
  margin-top: -270px;
}

.container_services {
  width: 90%;
  max-width: 1184px;
  margin: 0 auto;
  text-align: left;
}

.pic_services_wrap {
  width: 100%;
  max-width: 1184px;
  object-fit: cover;
}

.services_descr {
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
}

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
