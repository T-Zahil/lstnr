<template>
  <div class="card card-idea">
    <header class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <upvote :votes="votes"></upvote>
      <p class="content" v-if="isTooLong(content)">
          {{ content.substring(0, 300) + '...'}}
      </p>
      <p class="content" v-else>
          {{ content }}
      </p>
    </div>
    <footer class="card-footer">
      <a href="#" @click="test" class="card-footer-item">{{ nbComments }} Comments</a>
    </footer>
  </div>
</template>

<style>
  .card-idea {
    margin-bottom: 20px;
  }

  .card-idea .card-content {
    display: flex;
  }

  .card-idea .content {
    padding-left: 20px;
  }
</style>


<script>
import upvote from '~/components/upvote.vue'
import { mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'
import removeMarkdown from 'remove-markdown'

export default {
  props: ['title', 'content', 'votes', 'nbComments'],
  components: {
    upvote,
    VueMarkdown
  },
  computed: {
    ...mapState(['token'])
  },
  methods: {
    isTooLong(content) {
      if(content.length >= 300) {
        return true;
      } else {
        return false;
      }
    },
    async test() {
            var self = this;
            const hello = await this.$axios.$get('/idea', {
                headers: {
                  'Authorization': `Bearer ${self.token}`
                },
            })
            .then(function(response) {
              self.content = removeMarkdown(response[0].description);
            })
            .catch(function (error){
              console.log(error.response);
            })
    }
  }
}
</script>

