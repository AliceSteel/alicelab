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
        <div v-if="errors.name.length" class="errors_panel">{{ errors.name }}</div>
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
        <div v-if="errors.email" class="errors_panel">{{ errors.email }}</div>
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
        <div v-if="errors.message.length" class="errors_panel">{{ errors.message }}</div>
      </div>

      <button id="form_btn" type="submit">
        <span><sup>(4) </sup>Submit</span>
      </button>
      <div
        v-if="answer"
        :class="{ success: answer.success, errors_panel: answer.success === false }"
      >
        {{ answer.text }}
      </div>
    </form>
  </section>
</template>

<script>
import Email from '@/utilities/email'

export default {
  name: 'ContactComp',
  data() {
    return {
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
    async checkAndSend() {
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
        Email.send({
          Host: 'smtp.elasticemail.com',
          Username: 'alicedevlab@gmail.com',
          Password: '4E4CB299494A0BC888DA1CA24CA458DC7319',
          To: 'alicedevlab@gmail.com',
          From: 'alicedevlab@gmail.com',
          Subject: 'Message from AliceDevlab App',
          Body: this.name + ' from ' + this.email + ' sends message: ' + this.message
        })
          .then((resp) => {
            if (resp == 'OK') {
              this.answer.success = true
              this.answer.text = 'Message successfully sent'
              this.name = this.email = this.message = ''
            } else {
              console.log(resp)
              this.answer.success = false
              this.answer.text = resp
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
