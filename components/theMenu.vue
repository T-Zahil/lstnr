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
      const register = await this.$axios.$post('/auth/local/register', {
        username: 'TEST',
        email: 'user@strapi.io',
        password: 'strapiPassword'
      })
    }
  }
}
</script>