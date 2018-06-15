<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Sign up</p>
        </header>
        <section class="modal-card-body">
            <b-field label="First Name">
                <b-input
                    type="text"
                    :value="firstname"
                    v-model="firstname"
                    placeholder="Your first name"
                    required>
                </b-input>
            </b-field>
            <b-field label="Last Name">
                <b-input
                    type="text"
                    :value="lastname"
                    v-model="lastname"
                    placeholder="Your last name"
                    required>
                </b-input>
            </b-field>
            <b-field label="Email">
                <b-input
                    type="email"
                    :value="email"
                    v-model="email"
                    placeholder="Your email"
                    required>
                </b-input>
            </b-field>
            <b-field label="Company">
                <b-input
                    type="text"
                    :value="company"
                    v-model="company"
                    placeholder="Your company"
                    required>
                </b-input>
            </b-field>
            <b-field label="Company Position">
                <b-input
                    type="text"
                    :value="companyPosition"
                    v-model="companyPosition"
                    placeholder="Your position"
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
            <button class="button is-primary" @click="signUp" >Sign up</button>
        </footer>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          companyPosition: '',
          company: '',
        }
      },
      methods: {
        async signUp() {
          const self = this;
          const register = await this.$axios.$post('/auth/local/register', {
            username: this.$data.firstname + ' ' + this.$data.lastname,
            email: this.$data.email,
            password: this.$data.password,
            'company-position': this.$data.companyPosition,
            company: this.$data.company,
            points: 0,
          })
          .then(function(response) {
            self.$toast.open({
              duration: 2000,
              message: `Welcome ${response.user.username} !`,
              type: 'is-success'
            });
            self.$store.commit('loggin', { user: response.user, jwt: response.jwt});
            self.$parent.close();
          })
          .catch(function (error){
            self.$toast.open({
              duration: 2000,
              message: `Error: ${error.response.data.message}`,
              type: 'is-danger'
            });
          });
        }
      }
    }
</script>
