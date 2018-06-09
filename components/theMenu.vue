<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" @click="toggleBurger" :class="{'is-active': isBurgerActive}" data-target="navbar-Lstnr">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>

    <div id="navbar-Lstnr" :class="{'is-active': isBurgerActive}" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <a class="navbar-item" href="#">
            Home
          </a>
        </div>
        <div class="navbar-item">
          <a class="navbar-item" href="#">
            Platforms
          </a>
        </div>
        <div class="navbar-item">
          <a class="navbar-item" href="#">
            Our roadmap
          </a>
        </div>
        <div class="navbar-item">
          <a class="navbar-item" href="#">
            FAQ
          </a>
        </div>
        <div class="navbar-item" v-if="!user">
            <Login v-if="!user"></Login>
        </div>
        <div class="navbar-item is-hoverable" v-if="user">
            <div class="field is-grouped">
              <figure class="image is-24x24">
                <img class="avatar" src="https://bulma.io/images/placeholders/24x24.png">
              </figure>
              <div class="user">
                {{ user.username }}
              </div>

              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="#">
                  Profile
                </a>
                <a class="navbar-item" href="#">
                  Settings
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
  .avatar {
    border-radius: 50%;
    border: 2px solid purple;
  }
  .user {
    padding-left: 10px;
  }
</style>

<script>
import { mapState } from 'vuex'
import Login from './login.vue';
export default {
  name: 'theMenu',
  data() {
    return {
      test: 'empty',
      isBurgerActive: false,
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async register() {
      const register = await this.$axios.$post('/auth/local/register', {
        username: 'TEST',
        email: 'user@strapi.io',
        password: 'strapiPassword'
      })
    },
    toggleBurger() {
      this.$data.isBurgerActive = !this.$data.isBurgerActive;
    }
  },
  components: {
    Login
  }
}
</script>
