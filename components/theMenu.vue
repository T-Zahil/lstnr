<template>
  <nav class="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="~/assets/logo.png">
      </nuxt-link>
      <div class="navbar-burger burger" @click="toggleBurger" :class="{'is-active': isBurgerActive}" data-target="navbar-Lstnr">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>
    <div id="navbar-Lstnr" :class="{'is-active': isBurgerActive}" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <b-field>
            <b-input @focus="addEnterListener" @blur="removeEnterListener" v-model="search" placeholder="Search" type="search" icon="magnify">
            </b-input>
          </b-field>
        </div>
        <div class="navbar-item">
          <nuxt-link to="/">Home</nuxt-link>
        </div>
        <div class="navbar-item">
          <nuxt-link to="/add-a-product">
            <button v-if="user" class="button is-primary is-medium">
              Add a product
            </button>
          </nuxt-link>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item" v-if="!user">
          <Login></Login>
        </div>
        <div class="navbar-item" v-if="!user">
          <Register></Register>
        </div>
        <div class="navbar-item is-hoverable" v-if="user">
          <div class="field is-grouped">
            <figure class="image">
              <img class="avatar" :src="`https://api.adorable.io/avatars/40/${user.email}.png`">
            </figure>
            <div class="user">
              {{ user.username }}
            </div>

            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" @click="logout">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import Login from './login.vue'
import Register from './register.vue'
export default {
  name: 'theMenu',
  data() {
    return {
      test: 'empty',
      isBurgerActive: false,
      search: '',
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    toggleBurger() {
      this.$data.isBurgerActive = !this.$data.isBurgerActive
    },
    logout() {
      this.$store.commit('logout')
    },
    addEnterListener() {
      console.log('hidd');
      document.addEventListener('keypress', this.sendSearch);
    },
    removeEnterListener() {
      console.log('hiooo');
      document.removeEventListener('keypress', this.sendSearch);
    },
    sendSearch(e) {
      console.log('hi');
      if(e.keyCode === 13) {
        window.location.href = `/search/${this.$data.search}`;
      }
    }
  },
  components: {
    Login,
    Register
  }
}
</script>

<style lang="scss">
.navbar {
  height: 6rem;
  padding: 0 4rem;

  .avatar {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    max-height: initial;
    border: solid 2px #732ffb;
  }
  .field.is-grouped {
    display: flex;
    align-items: center;
  }
  .navbar-menu {
    .navbar-start {
      .navbar-item {
        .field {
          margin: 0 1rem;
          input {
            background-color: #f6f6f6;
            color: #9b9b9b;
            border-radius: 4px;
            border-color: transparent;
            box-shadow: none;
          }
        }
        a {
          font-size: 0.8rem;
          font-family: 'Futura Bold';
          color: #1f1f1f;
        }
      }
    }
    .navbar-end {
      .navbar-item {
        figure {
          margin-right: 1rem;
        }
        .navbar-dropdown {
          top: calc(100% + (-1rem));
        }
      }
    }
  }

}
</style>

