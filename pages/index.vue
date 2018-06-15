<template>
  <section>
    <div v-if="!user" class="columns header">
      <section class="hero column is-7">
        <div class="hero-body">
          <h1 class="title">
            Tell your favorite products what you want to see next !
          </h1>
          <div class="subtitle">
            <p>Share your ideas and vote for your favorite ones.</p>
            <p>lstnr provides a one of a kind dialog between online products and their caring users.</p>
            <p>Challenge ideas, interract with teams and see what’s coming to constantly improve the products you love.</p>
            <div>
              <button class="button" @click="cardModal()">join lstnr</button>
              <nuxt-link tag="button" class="button" to="add-a-product">
                add a product
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <div class="column is-5 level">
        <img src="~/assets/hero.jpg" alt="" class="level-item">
      </div>
    </div>
    <div :class="{wrapper: true, connected: user}">
      <div class="container">
        <div class="columns">
          <div class="column">
            <lstnr-Popular :products="products"></lstnr-Popular>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12">
            <popular-ideas :ideas="ideas"></popular-ideas>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import listenerCard from '~/components/listenerCard.vue'
import lstnrWeek from '~/components/lstnrWeek.vue'
import lstnrPopular from '~/components/lstnrPopular.vue'
import popularUsers from '~/components/popularUsers.vue'
import popularIdeas from '~/components/popularIdeas.vue'
import FormRegister from '~/components/formRegister.vue'
import { mapState } from 'vuex'

export default {
  components: {
    listenerCard,
    lstnrWeek,
    lstnrPopular,
    popularUsers,
    popularIdeas,
    FormRegister
  },
  computed: {
    ...mapState(['token', 'user'])
  },
  async asyncData({ app, route, error }) {
    let response = await app.$axios.get(`product`)
    const products = response.data
    response = await app.$axios.get(`idea`)
    const ideas = response.data
    return { products, ideas }
  },
  methods: {
    cardModal() {
      this.$modal.open({
        parent: this,
        component: FormRegister,
        hasModalCard: true
      })
    }
  }
}
</script>

<style lang="scss">
.header {
  padding: 3rem 0;
  margin-top: 6rem;
  background-image: url('../assets/hero-bg.png');
  background-color: #eee;
  background-size: auto 100%;
  background-repeat: no-repeat;
  .hero {
    .hero-body {
      margin-left: 3rem;
      .title {
        font-family: 'Futura Bold';
        color: white;
      }
      .subtitle {
        margin-top: 3rem;
        p {
          margin: 1rem 0;
          color: white;
        }
        div {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 3rem;
          color: white;
          button {
            width: 10rem;
            height: 2.3rem;
            border-radius: 20px;
            font-family: 'Futura Bold';
            line-height: 1.15rem;
            font-size: 0.8rem;
            &:first-child {
              margin-right: 2rem;
              text-transform: uppercase;
              color: #732ffb;
            }
            &:last-child {
              color: white;
              background-color: transparent;
              margin-left: 2rem;
              border-width: 4px;
            }
          }
        }
      }
    }
  }
  .level {
    align-items: center;
    justify-content: center;
    display: flex;
    padding-right: 5rem;
    img {
      border-radius: 8px;
      box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
.wrapper {
  background-color: #eee;
}

.wrapper.connected {
  margin-top: 6rem;
}
</style>
