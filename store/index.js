import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store( {
    state: {
      posts: {},
      categories: {},
      products_cats: {},
      cart: {
        totalprice: 0
      },
      user: false
    },
    mutations: {
      loggin(state, user) {
        state.user = user;
      }
    }
  } )
}

export default store
