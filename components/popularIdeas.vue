<template>
  <section class='popularIdeas'>
    <div class="head">
      <div class="titles">
        <h3 class="title">
          ideas
        </h3>
        <h4 class="subtitle">popular</h4>
      </div>
    </div>
    <section class="section popularIdeas__content">
      <div class="idea columns">
        <div class="column is-2">
          <up-vote votes="1266"></up-vote>
        </div>
        <div class="column desc">
          <div class="subtitle">Allan Porter on Cornerio</div>
          <h4>Disable explicit image filtering for bot accounts</h4>
          <p>As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots</p>
          <span>810 comments</span>
        </div>
      </div>
      <div class="idea columns">
        <div class="column is-2">
          <up-vote votes="1266"></up-vote>
        </div>
        <div class="column desc">
          <div class="subtitle">Allan Porter on Cornerio</div>
          <h4>Disable explicit image filtering for bot accounts</h4>
          <p>As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots</p>
          <span>810 comments</span>
        </div>
      </div>
      <div class="idea columns">
        <div class="column is-2">
          <up-vote votes="1266"></up-vote>
        </div>
        <div class="column desc">
          <div class="subtitle">Allan Porter on Cornerio</div>
          <h4>Disable explicit image filtering for bot accounts</h4>
          <p>As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots</p>
          <span>810 comments</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import upVote from '~/components/upvote.vue'

export default {
  name: 'popularIdeas',
  components: {
    upVote
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
        margin-bottom: 0rem;
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
    .idea {
      .is-2 {
        display: flex;
        align-items: center;
      }
      .upvote {
        width: 70%;
      }
      .desc {
        .subtitle {
          font-family: 'Futura Bold';
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
          color: #9b9b9b;
          line-height: 19px;
          margin-bottom: 0.3rem;
        }
        span {
          font-family: 'Futura Bold';
          font-size: 0.7rem;
          color: #1f1f1f;
        }
      }
    }
  }
}
</style>
