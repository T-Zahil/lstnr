<template>
  <div class="card card-idea">
    <header class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <upvote :votes="votes"></upvote>
      <p class="content">
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
    margin-top: 20px;
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
  }
}
</script>

