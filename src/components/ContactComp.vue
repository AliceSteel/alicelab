<template>
  <section id="contact">
    <h2>Contact</h2>
    <form id="contact_form" @submit.prevent="checkAndSend" novalidate="true">
      <div class="form_content">
        <input
          v-model.trim="name"
          @focus="resetError('name')"
          class="form_input"
          type="text"
          placeholder=" "
          name="name"
        />
        <label class="floating_label"><sup>(1) </sup>Name</label>
        <div v-if="this.errors.name.length" class="errors_panel">{{ errors.name }}</div>
      </div>

      <div class="form_content">
        <input
          v-model.trim="email"
          @focus="resetError('email')"
          class="form_input"
          type="email"
          placeholder=" "
          name="email"
        />
        <label class="floating_label"><sup>(2) </sup>Email</label>
        <div v-if="this.errors.email" class="errors_panel">{{ errors.email }}</div>
      </div>

      <div class="form_content_textarea">
        <textarea
          v-model.trim="message"
          rows="2"
          @focus="resetError('message')"
          class="form_input"
          type="text"
          name="message"
          placeholder=" "
        ></textarea>
        <label class="floating_label"><sup>(3) </sup>Message</label>
        <div v-if="this.errors.message.length" class="errors_panel">{{ errors.message }}</div>
      </div>

      <button id="form_btn" type="submit">
        <span><sup>(4) </sup>Submit</span>
      </button>
      <div v-if="this.answer.success" class="success">{{ answer.text }}</div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactComp',
  data() {
    return {
      API_BOT_ID: '5430381288:AAE_eQ93YVTYwbmZ8s_uAyzqmgqXbPnE_Fk',
      CHAT_ID: '-1001772014948',
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: ''
      },
      answer: {
        success: null,
        text: ''
      }
    }
  },
  methods: {
    checkAndSend() {
      let valid = true
      if (!this.name || this.name.length <= 1) {
        this.errors.name = 'Name longer than 1 letter is required.'
        valid = false
      }
      if (!this.email) {
        this.errors.email = 'Email is required.'
        valid = false
      } else {
        if (!this.isValidEmail(this.email)) {
          this.errors.email = 'Valid email is required.'
          valid = false
        }
      }
      if (!this.message || this.message.length < 2) {
        this.errors.message = 'Message longer than 2 characters is required.'
        valid = false
      }

      if (valid) {
        const message_text =
          '<i>Message from AliceLabWebsite</i>' +
          '%0a<b>Name: </b>' +
          this.name +
          '%0a<b>Email: </b>' +
          this.email +
          '%0a<b>Message: </b>' +
          this.message
        fetch(
          `https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`
        )
          .then((resp) => {
            return resp.json()
          })
          .then((resp) => {
            if (resp.ok) {
              this.answer.success = true
              this.answer.text = 'Message successfully sent'
              this.name = this.email = this.message = ''
            } else {
              console.log(resp)
              this.answer.success = false
              this.answer.text = resp.description
            }
            setTimeout(() => {
              this.answer.success = null
              this.answer.text = ''
            }, 5000)
          })
          .catch((er) => {
            console.log(er)
            this.answer.success = false
            this.answer.text = 'AJAX error. Please try again later'
          })
      }
    },

    resetError(field) {
      this.errors[field] = ''
    },

    isValidEmail(email) {
      let re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/contact.scss';
</style>
