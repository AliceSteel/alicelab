<template>
  <div>
    <header-comp logo="INTERVIEW_logo_black.png" color="#000"></header-comp>
    <contact-comp></contact-comp>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import ContactComp from '@/components/ContactComp.vue'

export default {
  components: { HeaderComp, ContactComp },
  name: 'ContactPage'
}
</script>
