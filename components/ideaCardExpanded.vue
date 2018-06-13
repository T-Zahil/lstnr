<template>
  <div class="card card-idea-expanded">
    <div class="card-content">
      <div class="card-info">
        <div class="profile">
          <div class="profile-picture">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/64x64.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="profile-content">
            <p class="profile-name">John Smith</p>
            <p class="profile-info">@johnsmith</p>
          </div>
        </div>
        <h1 class="title">Title is great !</h1>
        <time class="card-time is-primary" datetime="2016-1-1">May 06, 2018 - 3:59am</time>
      </div>
      <div class="content-and-upvote">
        <upvote :votes="votes"></upvote>
        <p class="content">
          {{ content }}
        </p>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Reply</a>
    </footer>
  </div>
</template>

<style lang="scss">
.card {
  box-shadow: none;
}
</style>

<style>
.card-idea-expanded .content-and-upvote {
  display: flex;
}

.card-idea-expanded .content {
  padding-left: 4rem;
}

.card-idea-expanded .card-content {
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
