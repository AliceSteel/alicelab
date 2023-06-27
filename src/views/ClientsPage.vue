<template>
  <div v-if="clients !== null">
    <section id="clients">
      <ul class="side_menu">
        <li
          v-for="(client, index) in clients"
          :key="index"
          class="menu_link_white container"
          @mouseover="setClientPic(client.pic5)"
          @mousemove="calcPicPosition"
        >
          <sup class="list_counter"></sup>
          <a :href="client.websiteUrl" class="text_white" target="_blank">
            {{ client.company }}
          </a>
        </li>
      </ul>
      <atropos
        v-if="clientPic !== ''"
        class="pic_wrap_clients"
        :activeOffset="30"
        :shadowScale="2"
        :style="`top: ${top}; right: ${right}`"
      >
        <img :src="clientPic" alt="client image" data-atropos-offset="-5" />
      </atropos>
    </section>
  </div>
</template>

<script>
import 'atropos/scss'
import Atropos from 'atropos/vue'
import axios from 'axios'

export default {
  name: 'ClientsPage',
  components: {
    Atropos
  },
  data() {
    return {
      clients: null,
      clientPic: '',
      top: '14%',
      right: '11%'
    }
  },
  created() {
    axios.get('/assets/data/projects.json').then((resp) => {
      this.clients = resp.data
      this.clientPic = this.clients[0].pic5
    })
  },
  methods: {
    setClientPic(pic) {
      this.clientPic = pic
    },
    calcPicPosition(e) {
      this.top = e.target.offsetTop > 800 ? '800px' : e.target.offsetTop + 100 + 'px'
      console.log(e.target.offsetTop)
      this.right = Math.floor(Math.random() * (18 - 8 + 1)) + 8 + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
#clients {
  position: relative;
  background-color: #000;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 30vh;
  overflow: hidden;
  padding-bottom: 200px;
}

li {
  font-size: 3rem;
  border-radius: 0;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
}

.pic_wrap_clients {
  transition: all 0.7s ease-out;
  position: absolute;
  z-index: 200;
  width: 40%;
  max-width: 433px;
}

@media screen and (max-width: 500px) {
  #clients_list li {
    font-size: 2rem;

    sup {
      vertical-align: top;
    }
  }
}
</style>
