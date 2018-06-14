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
      <b-field label="Propriétaire">
        <b-input v-model="product.company"></b-input>
      </b-field>
      <b-field label="Couleur">
        <b-input v-model="product.color"></b-input>
      </b-field>
      <button class="button" @click="postProduct">Create your product</button>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'add-a-product',
  data() {
    return {
      product: {
        name: '',
        desc: '',
        website: '',
        company: '',
        color: '',
        files: '',
        logo: ''
      }
    }
  },
  computed: {
    ...mapState(['token', 'user'])
  },
  methods: {
    async postProduct() {
      const self = this
      const register = await this.$axios
        .$post(
          '/product',
          {
            name: this.$data.product.name,
            description: this.$data.product.desc,
            website: this.$data.product.website,
            color: this.$data.product.color
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
          window.location.reload(true)
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
