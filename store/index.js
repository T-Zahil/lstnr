import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store( {
    state: {
      posts: {},
      categories: {},
      products_cats: {},
      cart: {
        totalprice: 0
      }
    }
  } )
}

export default store
