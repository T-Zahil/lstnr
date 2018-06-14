<template>
  <div class="wrapper">
    <section class="container idea" v-if="dataReady">
      <div>
        <div class="columns">
          <div class="column is-two-thirds">
            <idea-card-expanded :idea="idea" :author="author"></idea-card-expanded>
          </div>
          <div class="column">
             <listener-profile-card :product="product"></listener-profile-card>
          </div>
        </div>
        <comment-card v-for="(comment, index) in comments" :key="index" :comment="comment"></comment-card>
      </div>
    </section>
  </div>
</template>

<script>
import ideaCardExpanded from '~/components/ideaCardExpanded.vue'
import commentCard from '~/components/commentCard.vue'
import listenerProfileCard from '~/components/listenerProfileCard.vue'

export default {
  name: 'profile',
  components: {
    ideaCardExpanded,
    listenerProfileCard,
    commentCard
  },
  data() {
    return {
      idea: {},
      comments: [],
      author: {},
      product: {},
      dataReady: false
    };
  },
  async beforeMount() {
    var self = this

    const idea = await this.$axios.$get(`/idea/${this.$route.params.slug}`)
      .then(function(response) {
        self.idea = response
        self.author = response.author
        self.comments = self.sortComments(response.comments);
      })
      .catch(function(error) {
        console.log(error)
      })

      const product = this.$axios.$get(`/product/${this.$route.params.lstnrprofile}`)
      .then(function(response) {
        self.product = response
        self.dataReady = true
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    sortComments(comments) {
      let sortedComments = [];

      for(let i = 0, l = comments.length; i < l; i++) {
        if(!comments[i].parent) {
          comments[i].childs = [];
          sortedComments[comments[i]._id] = comments[i];
        }
      }

      for(let i = 0, l = comments.length; i < l; i++) {
        if(comments[i].parent) {
          sortedComments[comments[i].parent].childs.push(comments[i]);
        }
      }

      let tmpSortedComments = [];

      Object.keys(sortedComments).forEach((id) => {
        tmpSortedComments.push(sortedComments[id]);
      });

      tmpSortedComments.sort(this.compare);

      Object.keys(tmpSortedComments).forEach((id) => {
        if(tmpSortedComments[id].childs.length > 0) {
          tmpSortedComments[id].childs.sort(this.compare)
        }
      });

      let sortedCommentsFlat = [];
      tmpSortedComments.forEach(function (comment) {
        sortedCommentsFlat.push(comment);
        if(comment.childs.length > 0) {
          comment.childs.forEach((commentChild) => {
            sortedCommentsFlat.push(commentChild);
          });
        }
      });

      return sortedCommentsFlat;
    },
    compare(a,b) {
      if (a.upvote > b.upvote)
        return -1;
      if (a.upvote < b.upvote)
        return 1;
      return 0;
    }
  },
  computed: {
    commentsCards() {
      const comments = [];
      for(let i = 0, l = this.comments; i < l; i++) {
        comments.push(this.comments[i]);
        for(let j = 0, t = this.comments.childs; j < t; j++) {
          comments.push(this.comments[i].childs[j]);
        }
      }
      return comments;
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fbfbfb;
  .idea {
    padding-top: 8rem;
  }
}
</style>
