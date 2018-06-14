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
      <idea author="Allan Porter on Cornerio" title="Disable explicit image filtering for bot accounts" content="As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots" votes="810" nbComments="2">
      </idea>
      <idea author="Allan Porter on Cornerio" title="Disable explicit image filtering for bot accounts" content="As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots" votes="810" nbComments="2">
      </idea>
      <idea author="Allan Porter on Cornerio" title="Disable explicit image filtering for bot accounts" content="As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots" votes="810" nbComments="2">
      </idea>
    </section>
  </section>
</template>

<script>
import upVote from '~/components/upvote.vue'
import idea from '~/components/idea.vue'

export default {
  name: 'popularIdeas',
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
