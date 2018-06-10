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
      loggin(state, user, jwt) {
        state.user = user;
        state.token = jwt;
      }
    }
  } )
}

export default store
