<template>
  <section class="container">
    <the-Menu></the-Menu>
    <div class="columns">
      <div class="column is-two-thirds">
        <idea-card-collapsed v-for="(idea, index) in product.ideas" :title="idea.title" :content="idea.description" :votes="idea.upvote" :key="index"></idea-card-collapsed>
      </div>
      <div class="column">
        <listener-profile-card :name="product.name" :industry="industry.name" :logo="logo.url" :bio="product.description"  :brandColor="product.color" :website="product.website"></listener-profile-card>
      </div>
    </div>
  </section>
</template>

<script>
import theMenu from '~/components/theMenu.vue'
import ideaCardCollapsed from '~/components/ideaCardCollapsed.vue'
import listenerProfileCard from '~/components/listenerProfileCard.vue'

export default {
  name: 'profile',
  components: {
    theMenu,
    ideaCardCollapsed,
    listenerProfileCard
  },
  data() {
    return {
      product: {},
      logo: {},
      industry: {},
    }
  },
  async beforeMount() {
    var self = this;

    const product = await this.$axios.$get(`/product/${this.$route.params.lstnrprofile}`)
    .then(function(response) {
      self.product = response;
      self.industry = response.industry;
      self.logo = response.logo;
    })
    .catch(function (error){
      console.log(error);
    })
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
