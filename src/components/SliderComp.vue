<template>
  <carousel v-if="projectPics.length > 0" :settings="sliderSettings" :breakpoints="breakpoints">
    <slide v-for="(image, index) in projectPics" :key="index">
      <img :src="image" alt="project_slider" />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import axios from 'axios'

export default {
  name: 'SliderComp',
  components: {
    Carousel,
    Slide,
    Pagination
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      projectPics: [],
      sliderSettings: {
        itemsToShow: 2,
        wrapAround: true,
        autoplay: 2000,
        transition: 500,
        snapAlign: 'center'
      },
      breakpoints: {
        // 1000px and up
        1000: {
          itemsToShow: 1
        }
      }
    }
  },
  created() {
    axios.get('/assets/data/projects.json').then((resp) => {
      let pics = resp.data[this.id]
      this.projectPics.push(pics.pic3, pics.pic4, pics.pic5, pics.pic2)
    })
  }
}
</script>

<style lang="scss">
//__Custom Dots:______________

.carousel__pagination {
  position: relative;
  bottom: 2.5rem;
  gap: 1rem;
}

.carousel__pagination-button {
  background-color: #f8f1eab2;
  border-radius: 50%;
  border: 1px solid gray;
  height: 1rem;
  width: 1rem;

  &--active {
    background-color: #fff;
    border-color: #000;
  }
}
</style>
