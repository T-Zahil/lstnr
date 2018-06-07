<template>
  <div>
    <a href="">Login</a>
    <li @click='register'>Register</li>
    {{ test }}
  </div>
</template>

<script>
export default {
  name: 'theMenu',
  data() {
    return {
      test: 'empty'
    }
  },
  methods: {
    async register() {
      console.log('coucou')
      // const register = await this.$axios.$post('auth/local/register', {
      //   body: {
      //     username: 'TEST',
      //     email: 'user@strapi.io',
      //     password: 'strapiPassword'
      //   }
      // })
      const test = await this.$axios.$get('/test')
      this.test = test
    }
  }
}
</script>