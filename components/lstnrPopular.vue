<template>
  <section class='lstnrPopular'>
    <div class="head">
      <div class="titles">
        <h3 class="title">
          lstnrs
        </h3>
        <h4 class="subtitle">popular</h4>
      </div>
      <a href="#">see all</a>
    </div>
    <div class="columns">
      <div class="column">
        <listener-card :name="products[0].name" :cat="products[0].industry.name" :color="products[0].color" :desc="products[0].description" :logo="products[0].logo.url" views="12034" ideas="124"></listener-card>
      </div>
      <div class="column">
        <listener-card :name="products[1].name" :cat="products[1].industry.name" :color="products[1].color" :desc="products[1].description" :logo="products[1].logo.url" views="12034" ideas="124"></listener-card>
      </div>
      <div class="column">
        <listener-card :name="products[2].name" :cat="products[2].industry.name" :color="products[2].color" :desc="products[2].description" :logo="products[2].logo.url" views="12034" ideas="124"></listener-card>
      </div>
      <div class="column">
        <listener-card :name="products[3].name" :cat="products[3].industry.name" :color="products[3].color" :desc="products[3].description" :logo="products[3].logo.url" views="12034" ideas="124"></listener-card>
      </div>
    </div>
  </section>
</template>

<script>
import listenerCard from '~/components/listenerCard.vue'

export default {
  name: 'lstnrPopular',
  props: ['products'],
  components: {
    listenerCard
  }
}
</script>

<style lang="scss">
.lstnrPopular {
  margin: 2rem 0;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .titles {
      .title {
        font-family: 'Futura Bold';
        font-size: 1.2rem;
        margin-bottom: 0rem;
      }
      .subtitle {
        font-family: 'Futura Bold';
        color: #b8afaf;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        margin-top: 0;
      }
    }
    a {
      margin-bottom: 1rem;
    }
  }
}
</style>
