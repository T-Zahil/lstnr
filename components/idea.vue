<template>
  <div class="idea columns">
    <div class="column is-2">
      <up-vote votes="1266"></up-vote>
    </div>
    <div class="column desc">
      <div class="subtitle" v-if="author">{{ author }}</div>
      <h4>Disable explicit image filtering for bot accounts</h4>
      <p v-if="isTooLong(content)">{{ content.substring(0, 300) + '...'}}</p>
      <p v-else>{{ content }}</p>
      <span @click="test">{{ nbComments }} Comments</span>
    </div>
  </div>
</template>

<style lang="scss">
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
  props: ['title', 'content', 'votes', 'nbComments', 'author'],
  components: {
    upVote
  },
  methods: {
    isTooLong(content) {
      if (content.length >= 300) {
        return true
      } else {
        return false
      }
    },
    async test() {
      const hello = await this.$axios
        .$get('/users', {
          identifier: this.$data.email,
          password: this.$data.password
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
          self.$toast.open({
            duration: 2000,
            message: `Error: ${error.response.data.message}`,
            type: 'is-danger'
          })
        })
    }
  }
}
</script>

