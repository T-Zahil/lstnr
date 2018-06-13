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
      user: false,
      token: false,
    },
    mutations: {
      loggin(state, payload) {
        state.user = payload.user;
        state.token = payload.jwt;
      },
      logout(state) {
        state.user = false;
        state.token = false;
      }
    }
  } )
}

export default store
