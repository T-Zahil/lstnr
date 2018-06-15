<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Sign in</p>
        </header>
        <section class="modal-card-body">
            <b-field label="Email">
                <b-input
                    type="email"
                    :value="email"
                    v-model="email"
                    placeholder="Your email"
                    required>
                </b-input>
            </b-field>
            <b-field label="Password">
                <b-input
                    type="password"
                    :value="password"
                    v-model="password"
                    password-reveal
                    placeholder="Your password"
                    required>
                </b-input>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" @click="login" >Login</button>
        </footer>
    </div>
</template>

<script>
    import FormLogin from './formLogin.vue';
    import celebrationModal from '~/components/celebrationModal.vue'
    import { mapState } from 'vuex'
    export default {
      data() {
        return {
          email: '',
          password: '',
        }
      },
      computed: {
        ...mapState(['congrats'])
      },
      methods: {
        async login() {
          const self = this;
          const login = await this.$axios.$post('/auth/local', {
            identifier: this.$data.email,
            password: this.$data.password,
            })
            .then(function(response) {
              self.$toast.open({
                duration: 2000,
                message: `Welcome back ${response.user.username}`,
                type: 'is-success'
              });
              self.$store.commit('loggin', { user: response.user, jwt: response.jwt });
              self.$parent.close();
              if(response.user.points === 1 && !self.congrats) {
                self.$modal.open({
                  parent: self,
                  component: celebrationModal,
                  hasModalCard: true
                })
                self.$store.commit('congrats');
              }

            })
            .catch(function (error){
              self.$toast.open({
                duration: 2000,
                message: `Error: ${error.response.data.message}`,
                type: 'is-danger'
              });
            })
        }
      }
    }
</script>
