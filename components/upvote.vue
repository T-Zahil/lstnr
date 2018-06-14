<template>
  <div class="upvote" :class="{ upvoted: isUpvoted }" @click="upvote">
    <b-icon icon="chevron-up" size="is-large">
    </b-icon>
    <div class="votes">
      <span class="number-vote">{{ formattedVotes }}</span>
      <span class="text-vote">votes</span>
    </div>
  </div>
</template>

<style>
.upvote {
  display: flex;
  flex-direction: column;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding: 0px 6px;
  border: 2px solid #eeeeee;
  border-radius: 4px;
  background-color: #fff;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upvote:hover {
  background-color: #7957d5;
  border: 2px solid #7957d5;
  color: white;
}

.upvote.upvoted {
  background-color: #7957d5;
  border: 2px solid #7957d5;
  color: white;
  cursor: initial;
}

.upvote .icon {
  color: #7957d5;
  transition: all 0.3s ease;
}

.upvote:hover .icon {
  color: white;
}

.upvote.upvoted .icon {
  color: white;
}

.votes {
  display: flex;
  flex-direction: column;
  line-height: 1.2rem;
}

.number-vote {
  font-family: 'Futura Bold';
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
}

.text-vote {
  color: #e0e0e0;
  font-size: 0.8rem;
  text-align: center;
}
</style>


<script>
import { mapState } from 'vuex'
import FormLogin from '~/components/formLogin.vue'
export default {
  data() {
    return {
      isUpvoted: false
    }
  },
  props: ['votes', 'type', 'id'],
  computed: {
    formattedVotes() {
      return this.reverseString(
        this.chunk(this.reverseString(String(this.votes)), 3).join(',')
      )
    },
    ...mapState(['token', 'upvotes'])
  },
  mounted() {
    if(this.upvotes.indexOf(this.id) !== -1) {
      this.$data.isUpvoted = true;
    }
  },
  methods: {
    chunk(str, n) {
      var ret = []
      var i
      var len

      for (i = 0, len = str.length; i < len; i += n) {
        ret.push(str.substr(i, n))
      }

      return ret
    },
    reverseString(str) {
      return str
        .split('')
        .reverse()
        .join('')
    },
    async upvote() {
      if(this.$data.isUpvoted) {
        return false;
      }
      this.$data.isUpvoted = true
      const tmpvote = this.votes + 1;
      const self = this;
      const upvote = await this.$axios.$put(`/${this.type}/${this.id}`, {
        upvote: tmpvote
      },
      {
        headers: {
          'Authorization': `Bearer ${self.token}`
        }
      })
      .then(function(response) {
        self.votes++;
        self.$store.commit('upvote', self.id);
      })
      .catch(function (error){
        if(error.response.data.statusCode === 403 || error.response.data.statusCode === 401) {
          self.$modal.open({
                parent: self,
                component: FormLogin,
                hasModalCard: true
          });
          self.$toast.open({
            duration: 2000,
            message: `You have to login in order to upvote`,
            type: 'is-danger'
          });
        } else {
          self.$toast.open({
            duration: 2000,
            message: `Error: ${error.response.data.message}`,
            type: 'is-danger'
          });
        }
      });
    }
  }
}
</script>

