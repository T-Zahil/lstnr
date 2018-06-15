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
              <span>sort: </span>
              <ul>
                <li :class="{'tag-selected' : isNewest }" @click="sortByDate">date</li>
                <li :class="{'tag-selected' : isPopular }" @click="sortByPopularity">popularity</li>
              </ul>
            </div>
          </div>
          <idea v-for="(idea, index) in product.ideas" :key="index" :product="product.slug" :slug="idea.slug" :title="idea.title" :content="idea.description" :votes="idea.upvote" :id="idea._id" :author="idea.author">
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
      dataReady: false,
      isPopular: false,
      isNewest: false
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
        self.sortByDate();
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
        props: {
          product: this.product._id
        },
        component: formIdea,
        hasModalCard: true
      })
    },
    sortByPopularity() {
      this.$data.isPopular = true;
      this.$data.isNewest = false;
      this.$data.product.ideas.sort(this.compareDesc);
    },
    sortByDate() {
      this.$data.isPopular = false;
      this.$data.isNewest = true;
      this.$data.product.ideas.sort(this.compareDate);
    },
    sortByAll() {

    },
    compareDate(a,b) {
      if (a.createdAt > b.createdAt)
        return -1;
      if (a.createdAt < b.createdAt)
        return 1;
      return 0;
    },
    compareDesc(a,b) {
      if (a.upvote > b.upvote)
        return -1;
      if (a.upvote < b.upvote)
        return 1;
      return 0;
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
            cursor: pointer;
          }
        }
      }
    }

    .tag-selected {
      background: #732ffb;
      color: #ffffff;
    }
    .side {
      padding-top: 0;
    }
  }
}
</style>

