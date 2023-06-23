<template>
  <div>
    <div id="side_block">
      <nav id="mobile_menu" @click="toggleMenu()">
        <ul>
          <li>
            <router-link to="/about" class="menu_link"><sup>(1)</sup>About</router-link>
          </li>
          <li>
            <router-link to="/projects" class="menu_link"><sup>(2)</sup>Projects</router-link>
          </li>
          <li>
            <router-link to="/clients" class="menu_link"><sup>(3)</sup>Clients</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'About', hash: '#contact' }" class="menu_link"
              ><sup>(4)</sup>Contact</router-link
            >
          </li>
        </ul>
      </nav>
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

  /* created() {
    window.addEventListener('scroll', this.toggleFixedHeader)
  },
  methods: {
    toggleFixedHeader() {
      if (document.querySelector('section').offsetHeight !== null) {
        this.isScroll = window.scrollY > document.querySelector('section').offsetHeight
      }
    },*/
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

<style lang="scss">
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
h3 {
  text-transform: uppercase;
  mix-blend-mode: difference;
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
  z-index: 100;
  transition: all 0.3s ease;
  transform: translateX(-100%);
}

nav#mobile_menu {
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

#mobile_menu ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid rgba(0, 0, 0, 0.8);

  li {
    width: 100%;
    height: 120px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;

    a {
      height: 100%;
      padding: 1rem 11%;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 4.5rem;
    }
  }
}

.menu_link,
.menu_link_white {
  color: inherit;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.menu_link::after {
  background-color: #000;
}
.menu_link::after,
.menu_link_white::after {
  content: '';
  opacity: 0;
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5px;
  transform: translateX(calc(-100% - 0.1rem));
  transition: opacity 400ms, transform 400ms;
}
.menu_link_white::after {
  background-color: #fff;
}

.menu_link_white:hover::after,
.menu_link:hover::after,
.menu_link:focus::after,
.menu_link:focus-visible::after {
  opacity: 1;
  transform: translateX(0);
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
