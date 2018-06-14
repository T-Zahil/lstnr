<template>
  <div class="card comment-card" v-if="dataReady" :class="{ 'has-parent': comment.parent }">
    <div class="card-content">
      <div class="card-info">
        <div class="profile">
          <div class="profile-picture">
            <figure class="image is-64x64">
              <img :src="`https://api.adorable.io/avatars/64/${author.email}.png`" alt="Placeholder image">
            </figure>
          </div>
          <div class="profile-content">
            <p class="profile-name">{{ author.username }}</p>
            <p class="profile-info">{{ `${author['company-position']} @${author.company}` }}</p>
          </div>
        </div>
        <time class="card-time is-primary" :datetime="comment.createdAt">{{ `${new Date(comment.createdAt).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })} ${new Date(comment.createdAt).toLocaleTimeString()}` }}</time>
      </div>
      <div class="content-and-upvote">
      <upvote :votes="comment.upvote" type="comment" :id="comment._id"></upvote>
      <p class="content">
          {{ comment.description }}
      </p>
      </div>
    </div>
    <footer class="card-footer" v-if="!comment.parent">
      <a @click="commentModal" v-if="author._id !== user._id" class="card-footer-item">Reply</a>
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

  .has-parent {
    margin-left: 4rem;
    position: relative;
  }

  .has-parent::before {
    content: '';
    border: 2px solid lightgray;
    height: 100%;
    position: absolute;
    left: calc(-2rem - 1px);
  }
</style>

<script>
import upvote from '~/components/upvote.vue'
import { mapState } from 'vuex'
import FormComment from '~/components/formComment.vue'

export default {
  props: ['comment'],
  components: {
    upvote
  },
  computed: {
    ...mapState(['token', 'user'])
  },
  data() {
    return {
      author: {},
      dataReady: false
    }
  },
  async beforeMount() {
    var self = this

    const author = await this.$axios.$get(`/user/${this.comment.author}`)
      .then(function(response) {
        self.author = response
        self.dataReady = true;
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    commentModal() {
        this.$modal.open({
            parent: this,
            props: {
              parentComment: this.comment._id,
              idea: this.comment.idea
            },
            component: FormComment,
            hasModalCard: true
        })
    }
  }
}
</script>
