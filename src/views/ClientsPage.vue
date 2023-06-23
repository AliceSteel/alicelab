<template>
  <div v-if="clients !== null">
    <header-comp logo="INTERVIEW_logo.png" color="#fff"></header-comp>

    <section id="clients">
      <ul id="clients_list">
        <li v-for="(client, index) in clients" :key="index">
          <div class="container" @mouseover="setClientPic(client.pic)" @mousemove="calcPicPosition">
            <sup></sup>{{ client.title }}
          </div>
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
import HeaderComp from '@/components/HeaderComp.vue'
import 'atropos/scss'
import Atropos from 'atropos/vue'
import axios from 'axios'

export default {
  name: 'ClientsPage',
  components: {
    HeaderComp,
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
    axios.get('data/clients.json').then((resp) => {
      this.clients = resp.data
      this.clientPic = require('@/assets/images/' + this.clients[0].pic)
    })
  },
  methods: {
    setClientPic(pic) {
      this.clientPic = require('@/assets/images/' + pic)
    },
    calcPicPosition(e) {
      this.top = e.target.offsetTop > 800 ? '800px' : e.target.offsetTop - 80 + 'px'
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
  padding-top: 165px;
  overflow: hidden;
  padding-bottom: 200px;
}

#clients_list {
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  counter-reset: my_counter;

  li {
    counter-increment: my_counter;
    width: 100%;
    padding: 22px 10% 23px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 50px;
    font-size: 3rem;
    border-radius: 0;
    border: transparent;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);

    div.container sup {
      width: 20px;
      height: 20px;
      position: relative;

      &::before {
        content: '(' counter(my_counter) ')';
        display: inline-block;
        width: 20px;
        height: 20px;
        position: absolute;
        left: -1.5rem;
        top: -1.2rem;
      }
    }
  }
}

.pic_wrap_clients {
  transition: all 0.7s ease-out;
  position: absolute;
  z-index: 20;
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
