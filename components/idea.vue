<template>
  <div class="idea columns" v-if="dataReady">
    <div class="column is-2">
      <up-vote :votes="votes" type="idea" :id="id" :user="author"></up-vote>
    </div>
    <div class="column desc">
      <div class="subtitle" v-if="author">{{ author.username }}</div>
      <nuxt-link :to="product + '/idea/' + slug">
        <h4>{{ title }}</h4>
      </nuxt-link>
      <p v-if="isTooLong(content)">{{ content.substring(0, 300) + '...'}}</p>
      <p v-else>{{ content }}</p>
      <span>See comments</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.idea {
  .is-2 {
    display: flex;
    align-items: center;
  }
  .upvote {
    width: 75%;
  }
  .desc {
    .subtitle {
      font-family: 'Futura Bold';
      font-weight: bold;
      font-size: 0.8rem;
      color: #9b9b9b;
      margin-bottom: 0.3rem;
    }
    h4 {
      font-family: 'Futura Bold';
      font-size: 1rem;
      color: #1f1f1f;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 0.9rem;
      font-family: 'Futura';
      font-weight: normal;
      color: #9b9b9b;
      line-height: 19px;
      margin-bottom: 0.3rem;
    }
    span {
      font-family: 'Futura Bold';
      font-weight: bold;
      font-size: 0.7rem;
      color: #1f1f1f;
    }
  }
}
</style>



<script>
import upVote from '~/components/upvote.vue'

export default {
  props: [
    'title',
    'content',
    'votes',
    'nbComments',
    'author',
    'slug',
    'product',
    'id'
  ],
  components: {
    upVote
  },
  data() {
    return {
      dataReady: false
    }
  },
  async beforeMount() {
    var self = this

    const author = await this.$axios.$get(`/user/${this.author}`)
      .then(function(response) {
        self.author = response
        self.dataReady = true;
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    isTooLong(content) {
      if (content.length >= 300) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

