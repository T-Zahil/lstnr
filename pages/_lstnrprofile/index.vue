<template>
  <div class="wrapper">
    <section class="container profile">
      <the-Menu></the-Menu>
      <div class="columns">
        <div class="column is-two-thirds ideas">
          <div class="ideas__header columns">
            <div class="column is-2"></div>
            <div class="column is-6">
              <button class="button">give feedback</button>
            </div>
            <div class="colum is-4 sorting">
              <span>tags: </span>
              <ul>
                <li>all</li>
                <li>popular</li>
                <li>newest</li>
              </ul>
            </div>
          </div>
          <idea title="Disable explicit image filtering for bot accounts" content="As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots" votes="810" nbComments="2">
          </idea>
          <idea title="Disable explicit image filtering for bot accounts" content="As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots" votes="810" nbComments="2">
          </idea>
          <idea title="Disable explicit image filtering for bot accounts" content="As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots" votes="810" nbComments="2">
          </idea>
          <idea title="Disable explicit image filtering for bot accounts" content="As the owner of one of the biggest nsfw bots the explicit image filtering of all bots accs breaks my opt-on commands, explicit image filtering for bots should use the users and bot owners filter settings and not be on by default for all bots" votes="810" nbComments="2">
          </idea>
        </div>
        <div class="column side">
          <listener-profile-card></listener-profile-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import theMenu from '~/components/theMenu.vue'
import idea from '~/components/idea.vue'
import listenerProfileCard from '~/components/listenerProfileCard.vue'

export default {
  name: 'profile',
  components: {
    theMenu,
    idea,
    listenerProfileCard
  },
  data() {
    return {
      product: {},
      logo: {},
      industry: {},
    }
  },
  async beforeMount() {
    var self = this;

    const product = await this.$axios.$get(`/product/${this.$route.params.lstnrprofile}`)
    .then(function(response) {
      self.product = response;
      self.industry = response.industry;
      self.logo = response.logo;
    })
    .catch(function (error){
      console.log(error);
    })
  },
}
</script>

<style lang="scss">
.wrapper {
  background-color: #fbfbfb;
  .profile {
    padding-top: 10rem;
    .ideas {
      background-color: #fff;
      border-radius: 10px;
      padding: 2rem 4rem;
      .ideas__header {
        .button {
          background: #732ffb;
          border-radius: 40px;
          font-family: 'Futura Bold';
          font-size: 0.7rem;
          padding: 1rem 2rem;
          text-transform: uppercase;
          line-height: 0.1rem;
          color: #ffffff;
        }
      }
      .sorting {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span {
          font-family: 'Futura Bold';
          font-size: 0.6rem;
          color: #1f1f1f;
          text-transform: uppercase;
          margin-right: 0.5rem;
        }
        ul {
          display: flex;
          li {
            padding: 0.3rem 0.7rem;
            border-radius: 2px;
            font-family: 'Futura Bold';
            font-size: 0.5rem;
            text-transform: uppercase;
            &:first-child {
              background: #732ffb;
              margin-right: 1rem;
              color: #ffffff;
            }
            &:last-child {
              border-left: 1px solid #e0e0e0;
              color: #e0e0e0;
            }
          }
        }
      }
    }
    .side {
      padding-top: 0;
    }
  }
}
</style>

