<template>
  <section>
    <the-Menu></the-Menu>
    <div class="columns header">
      <section class="hero column is-6">
        <div class="hero-body">
          <h1 class="title">
            Tell your favorite products what you want to see next !
          </h1>
          <div class="subtitle">
            <p>Share your ideas and vote for your favorite ones.</p>
            <p>lstnr provides a one of a kind dialog between online products and their caring users.</p>
            <p>Challenge ideas, interract with teams and see what’s coming to constantly improve the products you love.</p>
            <div>
              <button class="button">join lstnr</button>
              <span>or</span>
              <button class="button">add a product</button>
            </div>
          </div>
        </div>
      </section>
      <div class="column is-2"></div>
      <div class="column is-4">
        <img src="~/assets/hero.png" alt="">
      </div>
    </div>
    <section class="columns">
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
    </section>
  </section>
</template>

<script>
import theMenu from '~/components/theMenu.vue'
import listenerCard from '~/components/listenerCard.vue'
export default {
  components: {
    theMenu,
    listenerCard
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Futura';
  src: url('../static/fonts/FuturaStd-Book.otf') format('truetype');
}
@font-face {
  font-family: 'Futura Bold';
  src: url('../static/fonts/FuturaStd-Bold.otf') format('truetype');
}

* {
  font-family: 'Futura';
}

.header {
  padding: 7rem 0;
  background-image: url('../assets/hero-bg.jpg');
  background-size: 100%;
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
}
</style>
