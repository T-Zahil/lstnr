<template>
  <div>
    <a href="">Login</a>
    <li @click='login'>Register</li>
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
    },
    async login() {
      const login = await this.$axios
        .$post('/auth/local', {
          identifier: 'TEST',
          password: 'strapiPassword'
        })
        .then(function(response) {
          console.log(response)
        })
    }
  }
}
</script>