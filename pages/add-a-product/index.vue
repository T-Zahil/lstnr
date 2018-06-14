<template>
  <div class='add-a-product'>
    <section class="section">
      <b-field label="Nom">
        <b-input v-model="product.name"></b-input>
      </b-field>
      <b-field class="file">
        <b-upload v-model="product.files">
          <a class="button is-primary">
            <b-icon icon="Image"></b-icon>
            <span>Cliquez pour uploader</span>
          </a>
        </b-upload>
        <span class="file-name" v-if="product.files && product.files.length">
          {{ product.files[0].name }}
        </span>
      </b-field>
      <b-field label="Description">
        <b-input maxlength="200" type="textarea" v-model="product.desc"></b-input>
      </b-field>
      <b-field label="Site internet">
        <b-input v-model="product.website"></b-input>
      </b-field>
      <b-field label="Industry">
          <b-select v-model="product.industry" placeholder="Select an industry">
              <option
                  v-for="industry in industries"
                  :value="industry._id"
                  :key="industry._id">
                  {{ industry.name }}
              </option>
          </b-select>
      </b-field>
      <b-field label="Couleur">
        <b-input v-model="product.color" type="color" placeholder="Enter a color in hexadecimal"></b-input>
      </b-field>
      <button class="button" @click="postProduct">Create your product</button>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import slug from 'slug'

export default {
  name: 'add-a-product',
  data() {
    return {
      product: {
        name: '',
        desc: '',
        website: '',
        company: '',
        color: '000000',
        files: '',
        logo: '',
        industry: ''
      }
    }
  },
  computed: {
    ...mapState(['token', 'user'])
  },
  async asyncData({ app, route, error }) {
      let response = await app.$axios.get(`industry`)
      const industries = response.data
      return { industries }
  },
  methods: {
    async postProduct() {
      const self = this
      const register = await this.$axios
        .$post(
          '/product',
          {
            name: this.capitalizeFirstLetter(this.$data.product.name),
            description: this.$data.product.desc,
            website: this.$data.product.website,
            color: this.$data.product.color,
            slug: slug(this.$data.product.name.toLowerCase()),
            owner: this.user._id,
            industry: this.$data.product.industry
          },
          {
            headers: {
              Authorization: `Bearer ${self.token}`
            }
          }
        )
        .then(function(response) {
          self.$toast.open({
            duration: 3000,
            message: `Your Product has been successfully added, redirecting to product page in a second`,
            type: 'is-success'
          })
          console.log('/' + slug(self.$data.product.name.toLowerCase()))
          setTimeout(() => {
            window.location.href = '/' + slug(self.$data.product.name.toLowerCase());
          }, 3000)
        })
        .catch(function(error) {
          console.log(error)
          if (
            error.response.data.statusCode === 403 ||
            error.response.data.statusCode === 401
          ) {
            self.$toast.open({
              duration: 3000,
              message: `You have to login in order to add a product`,
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
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}
</script>

<style lang="scss">
.add-a-product {
  width: 100%;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
