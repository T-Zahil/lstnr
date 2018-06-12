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

export default {
  props: ['title', 'content', 'votes', 'nbComments'],
  components: {
    upvote
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
            const hello = await this.$axios.$get('/users', {
            identifier: this.$data.email,
            password: this.$data.password,
            })
            .then(function(response) {
              console.log(response);
            })
            .catch(function (error){
              console.log(error);
              self.$toast.open({
                duration: 2000,
                message: `Error: ${error.response.data.message}`,
                type: 'is-danger'
              });
            })
    }
  }
}
</script>

