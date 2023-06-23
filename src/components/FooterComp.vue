<template>
  <footer :class="footerTheme">
    <div class="container">
      <div class="footer_wrap">
        <div class="copyright">© 2023 - ALICELAB / All Rights Reserved</div>
        <div class="social">
          <ul>
            <li>Contact on socials:</li>
            <li>
              <a
                href="https://www.linkedin.com/in/olga-garkusha-49598a12b/"
                target="_blank"
                rel="nofollow, noreferrer"
                class="menu_link"
                >LinkedIn</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  props: {
    footerTheme: {
      type: String,
      default: 'footer'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap-reverse;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 66px 0 77px;
}

.copyright {
  color: rgba(1, 1, 1, 0.37);
}

.social ul {
  width: 100%;
  max-width: 325px;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  li a {
    margin-left: 23px;
  }
}

.dark {
  background-color: #000;
  .social ul li a,
  .social ul li {
    color: #fff;
  }
  .copyright {
    color: rgba(255, 255, 255, 0.37);
  }
  a.menu_link::after {
    background-color: #fff;
  }
}
@media screen and (max-width: 640px) {
  .footer_wrap {
    justify-content: space-evenly;
  }
}
</style>
