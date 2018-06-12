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
      <a href="#" class="card-footer-item">{{ nbComments }} Comments</a>
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
    }
  }
}
</script>

