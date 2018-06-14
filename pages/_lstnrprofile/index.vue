<template>
  <div class="wrapper" v-if="dataReady">
    <section class="container profile">
      <div class="columns">
        <div class="column is-two-thirds ideas">
          <div class="ideas__header columns">
            <div class="column is-2"></div>
            <div class="column is-6">
              <button @click="feedbackModal" class="button">give feedback</button>
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
          <idea v-for="(idea, index) in product.ideas" :key="index" :product="product.slug" :slug="idea.slug" :title="idea.title" :content="idea.description" :votes="idea.upvote" :id="idea._id">
          </idea>
        </div>
        <div class="column side">
          <listener-profile-card :product="product"></listener-profile-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import idea from '~/components/idea.vue'
import listenerProfileCard from '~/components/listenerProfileCard.vue'
import formIdea from '~/components/formIdea.vue'

export default {
  name: 'profile',
  components: {
    idea,
    listenerProfileCard
  },
  data() {
    return {
      product: {},
      logo: {},
      industry: {},
      dataReady: false
    }
  },
  async beforeMount() {
    var self = this

    const product = await this.$axios
      .$get(`/product/${this.$route.params.lstnrprofile}`)
      .then(function(response) {
        self.product = response
        self.industry = response.industry
        self.logo = response.logo
        self.dataReady = true
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    feedbackModal() {
      this.$modal.open({
        parent: this,
        component: formIdea,
        hasModalCard: true
      })
    }
  }
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

