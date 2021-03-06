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
      upvotes: [],
      congrats: false,
    },
    mutations: {
      loggin(state, payload) {
        state.user = payload.user;
        state.token = payload.jwt;
      },
      logout(state) {
        state.user = false;
        state.token = false;
      },
      upvote(state, upvoteId) {
        state.upvotes = [...state.upvotes, upvoteId];
      },
      congrats(state) {
        state.congrats = true;
      }
    }
  } )
}

export default store
