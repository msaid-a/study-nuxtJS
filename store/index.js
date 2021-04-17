import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      article: {},
      post: [],
      allPost: [],
      current: 18
    },
    mutations: {
      setArticle (state, data) {
        console.log('asdasd')
        state.article = data
      },
      setPost (state, data) {
          state.post = data
      },
      setAllPost (state, data) {
          state.allPost = data
      },
    //   setCurrent (state, data) {
    //       state.current = data
    //   }
    }
  })
}

export default createStore