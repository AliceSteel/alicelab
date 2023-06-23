<template>
  <div>
    <header-comp logo="INTERVIEW_logo_black.png" color="#fff"></header-comp>
    <section class="w100">
      <div class="four_o_four">
        <div class="white">404</div>
        <div class="black">
          <p>
            Sorry, but that page doesn't exist.<br />
            <router-link to="/" class="menu_link_white">Back to Homepage</router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  name: '404Page',
  components: { HeaderComp }
}
</script>

<style lang="scss" scoped>
section.w100 {
  height: 100%;
}
.four_o_four {
  height: calc(100vh - 162px); //footer is 162px
  display: flex;
  flex-flow: row wrap;
}
.white,
.black {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem;
}
.white {
  background-color: #fff;
  font-size: 4rem;
}
.black {
  background-color: #000;
  p,
  a {
    text-align: left;
    color: #fff;
    font-size: 3rem;
  }
}
</style>
