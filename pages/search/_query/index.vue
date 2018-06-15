<template>
  <div class='add-a-product'>
    <div class="results">
      <listener-card class="card-lstnr" v-if="products.length > 0" v-for="(product, index) in products" :key="index" :name="product.name" :slug="product.slug" :cat="product.industry.name" :color="product.color" :desc="product.description" :logo="product.log ? product.logo.url: null" views="12034" :ideas="product.ideas.length"></listener-card>
    </div>
  </div>
</template>

<script>
import listenerCard from '~/components/listenerCard.vue'

export default {
  components: {
    listenerCard
  },
  async asyncData({ app, route, error }) {
    let response = await app.$axios.get(`product?name_contains=${route.params.query}`)
    const products = response.data
    return { products }
  },
}
</script>

<style lang="scss">
.add-a-product {
  width: 100%;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.results{
  height: 100%;
  width: 100%;
  padding: 0 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-lstnr {
  margin: 1rem;
  width: 20%;
}
</style>
