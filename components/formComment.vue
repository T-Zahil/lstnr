<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Reply</p>
        </header>
        <section class="modal-card-body">
            <b-field label="Comment">
                <b-input
                    type="textarea"
                    :value="description"
                    v-model="description"
                    placeholder="Enter your comment"
                    required>
                </b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" @click="postComment" >Send</button>
        </footer>
    </div>
</template>

<script>
    import FormLogin from '~/components/formLogin.vue';
    import { mapState } from 'vuex'

    export default {
      props: ['parent', 'idea', 'parentComment'],
      data() {
        return {
          description: '',
        }
      },
      computed: {
        ...mapState(['token', 'user'])
      },
      methods: {
        async postComment() {
          const self = this;
          const comment = await this.$axios.$post('/comment', {
            description: this.$data.description,
            author: this.user._id,
            upvote: 0,
            parent: this.parentComment,
            idea: this.idea
          },
          {
            headers: {
              'Authorization': `Bearer ${self.token}`
            }
          })
          .then(function(response) {
            self.$toast.open({
              duration: 2000,
              message: `Your comment has been successfully added`,
              type: 'is-success'
            });
            self.$parent.close();
            window.location.reload(true);
          })
          .catch(function (error){
            console.log(error.response);
            if(error.response.data.statusCode === 403 || error.response.data.statusCode === 401) {
              self.$parent.close();
              self.$modal.open({
                    parent: self,
                    component: FormLogin,
                    hasModalCard: true
              });
              self.$toast.open({
                duration: 3000,
                message: `You have to login in order to comment`,
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
