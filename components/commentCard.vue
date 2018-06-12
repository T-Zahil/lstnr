<template>
  <div class="card comment-card" :class="['depth-' + depth]">
    <div class="card-content">
      <div class="card-info">
        <div class="profile">
          <div class="profile-picture">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/64x64.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="profile-content">
            <p class="profile-name">Léo Loriol</p>
            <p class="profile-info">Student @hetic - Cofounder, lstnr</p>
          </div>
        </div>
        <time class="card-time is-primary" datetime="2016-1-1">May 06, 2018 - 3:59am</time>
      </div>
      <div class="content-and-upvote">
      <upvote :votes="votes"></upvote>
      <p class="content">
          {{ content }}
      </p>
      </div>
    </div>
    <footer class="card-footer" v-if="depth < 2">
      <a href="#" class="card-footer-item">Reply</a>
    </footer>
  </div>
</template>

<style>
  .card.comment-card {
    margin-top: 40px;
    width: 70%;
  }

  .comment-card .content-and-upvote {
    display: flex;
  }

  .comment-card .content {
    padding-left: 4rem;
  }

  .comment-card .card-content {
    padding-left: 4rem;
  }

  .profile {
    display: flex;
  }

  .profile-content {
    padding-left: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .profile-content .subtitle {
    padding: 0px;
  }

  .profile-picture img {
    border-radius: 50%;
  }

  .profile-name {
    font-weight: bold;
  }

  .profile-info {
    font-size: 0.9rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 8rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  .card-time {
    display: block;
    color: #7957d5;
    font-size: 0.8rem;
    font-weight: bold;
    padding-left: 8rem;
    margin-bottom: 1rem;
  }

  .depth-2 {
    margin-left: 4rem;
    position: relative;
  }

  .depth-2::before {
    content: '';
    border: 2px solid lightgray;
    height: 100%;
    position: absolute;
    left: calc(-2rem - 1px);
  }
</style>

<script>
import upvote from '~/components/upvote.vue'

export default {
  props: ['title', 'content', 'votes', 'depth'],
  components: {
    upvote
  }
}
</script>
