<template>
  <div>
    <div id="side_block">
      <ul class="side_menu" id="mobile_menu" @click="toggleMenu()">
        <li class="menu_link">
          <sup class="list_counter"></sup>
          <router-link to="/about">About</router-link>
        </li>
        <li class="menu_link">
          <sup class="list_counter"></sup>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li class="menu_link">
          <sup class="list_counter"></sup>
          <router-link :to="{ name: 'About', hash: '#contact' }">Contact</router-link>
        </li>
      </ul>
    </div>
    <header id="header">
      <router-link to="/">
        <div class="w100 text_white">
          <h3 :style="'color:' + color">AliceLab</h3>
        </div>
      </router-link>

      <nav class="burger_menu">
        <button class="hamburger hamburger--spin" type="button" @click="toggleMenu()">
          <span class="hamburger-box">
            <span class="hamburger-inner" :style="'background-color:' + color"></span>
          </span>
        </button>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* isScroll: false,*/
      isMenuOpen: false
    }
  },
  props: {
    color: {
      type: String,
      default: '#000'
    }
  },
  methods: {
    toggleMenu() {
      document.querySelector('.hamburger').classList.toggle('is-active')
      document.getElementById('side_block').classList.toggle('open')
      document.querySelector('body').classList.toggle('lock')
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  background-color: transparent;
  padding: 21px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.scroll #header {
  box-shadow: 0 0 5px rgb(153, 153, 153);
  backdrop-filter: blur(5px);
  transition: all 0.2s ease;
}

.logo_wrap {
  width: 100%;
  max-width: 93px;
}
button.hamburger {
  padding: 0;
}
//Side Menu:__________________________________

#side_block {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #777b60f3;
  height: 100vh;
  z-index: 300;
  transition: all 0.3s ease;
  transform: translateX(-100%);
  padding: 12% 0;
}

.burger_menu {
  display: block;
}

.hamburger-inner {
  background-color: #fff;
}

.hamburger.is-active .hamburger-inner {
  background-color: #000 !important;
}

.hamburger-inner::before,
.hamburger-inner::after {
  background-color: inherit !important;
}

.lock {
  overflow-y: hidden;
  width: 100%;
  height: 100%;
}

#side_block.open {
  transform: translateX(0);
}

@media screen and (max-width: 500px) {
  #mobile_menu ul li a {
    font-size: 4rem;
  }
}
</style>
