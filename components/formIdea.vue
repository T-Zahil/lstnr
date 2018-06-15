<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">How can we improve {{ company }}</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Title">
        <b-input type="text" :value="title" v-model="title" placeholder="Enter a title" required>
        </b-input>
      </b-field>
      <b-field label="Your idea">
        <b-input type="textarea" :value="description" v-model="description" placeholder="Describe your idea" required>
        </b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary" @click="postIdea">Send</button>
    </footer>
  </div>
</template>

<script>
import FormLogin from '~/components/formLogin.vue'
import { mapState } from 'vuex'
import slug from 'slug'

export default {
  props: ['product'],
  data() {
    return {
      title: '',
      description: ''
    }
  },
  computed: {
    ...mapState(['token', 'user'])
  },
  methods: {
    async postIdea() {
      const self = this
      const register = await this.$axios
        .$post(
          '/idea',
          {
            title: this.$data.title,
            description: this.$data.description,
            product: this.product,
            author: this.user._id,
            upvote: 0,
            slug: slug(this.$data.title.toLowerCase())
          },
          {
            headers: {
              Authorization: `Bearer ${self.token}`
            }
          }
        )
        .then(function(response) {
          self.$toast.open({
            duration: 2000,
            message: `Your feedback has been successfully added`,
            type: 'is-success'
          })
          self.$parent.close()
          window.location.reload(true)
        })
        .catch(function(error) {
          console.log(error.response)
          if (
            error.response.data.statusCode === 403 ||
            error.response.data.statusCode === 401
          ) {
            self.$parent.close()
            self.$modal.open({
              parent: self,
              component: FormLogin,
              hasModalCard: true
            })
            self.$toast.open({
              duration: 3000,
              message: `You have to login in order to provide a feedback`,
              type: 'is-danger'
            })
          } else {
            self.$toast.open({
              duration: 2000,
              message: `Error: ${error.response.data.message}`,
              type: 'is-danger'
            })
          }
        })
    }
  }
}
</script>
