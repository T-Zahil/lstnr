<template>
  <section>
    <button class="button is-primary is-medium" @click="cardModal()">
      Sign in
    </button>
  </section>
</template>

<script>
import FormLogin from './formLogin.vue'

export default {
  components: {
    FormLogin
  },
  methods: {
    cardModal() {
      this.$modal.open({
        parent: this,
        component: FormLogin,
        hasModalCard: true
      })
    }
  }
}
</script>
