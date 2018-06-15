<template>
  <section class='popularIdeas'>
    <div class="head">
      <div class="titles">
        <h3 class="title">
          ✍️ New threads
        </h3>
      </div>
    </div>
    <section class="section popularIdeas__content">
      <idea :author="ideas[0].author.username + ' on ' + ideas[0].product.name" :title="ideas[0].title" :content="ideas[0].description" :votes="ideas[0].upvote" :product="ideas[0].product.slug" :slug="ideas[0].slug" :id="ideas[0]._id">
      </idea>
      <idea :author="ideas[1].author.username + ' on ' + ideas[1].product.name" :title="ideas[1].title" :content="ideas[1].description" :votes="ideas[1].upvote" :product="ideas[1].product.slug" :slug="ideas[1].slug" :id="ideas[1]._id">
      </idea>
      <idea :author="ideas[2].author.username + ' on ' + ideas[2].product.name" :title="ideas[2].title" :content="ideas[2].description" :votes="ideas[2].upvote" :product="ideas[2].product.slug" :slug="ideas[2].slug" :id="ideas[2]._id">
      </idea>
    </section>
  </section>
</template>

<script>
import upVote from '~/components/upvote.vue'
import idea from '~/components/idea.vue'

export default {
  name: 'popularIdeas',
  props: ['ideas'],
  components: {
    upVote,
    idea
  }
}
</script>

<style lang="scss">
.popularIdeas {
  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .titles {
      .title {
        font-family: 'Futura Bold';
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        color: #000;
      }
      .subtitle {
        font-family: 'Futura Bold';
        color: #b8afaf;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        margin-top: 0;
      }
    }
  }
  .popularIdeas__content {
    background: #ffffff;
    border-radius: 8px;
    padding: 2rem 4rem;
  }
}
</style>
