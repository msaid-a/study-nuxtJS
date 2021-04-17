<template>
  <div class="mt-5">
    <div class="container">
      <div class="mb-5">
          <input type="text" v-model="search" />
          <button @click="find" >Search</button>
      </div>
      <div class="card-columns">
        <div class="card" v-for="item in post" v-bind:key="item.key" @click="openDetail(item)">
          <img class="card-img-top" :src="item.urlToImage" alt="Card image cap">
          <div class="card-body">
            <p class="card-text"><small class="text-muted">{{ item.author }} - {{ item.source.name }}</small></p>
            <h5 class="card-title">{{ item.title }}</h5>
            <a :href=item.url target="blank">detail...</a>
            <p class="card-text"><small class="text-muted">{{ item.publishedAt }}</small></p>
          </div>
        </div>        
      </div>
    </div>
    <button class="btn btn-primary btn-more" @click="loadMore">remove</button>

  </div>

</template>
  
  <script>
  // export default {
  //   layout: 'blog'
  // }
  import axios from 'axios'
export default {
  computed: {
    current () { return this.$store.state.current },
    post () { return this.$store.state.post },
    allPost () { return this.$store.state.allPost }
  },
  methods : {
    loadMore () {
      this.$store.commit('setPost', [])
    },
    openDetail (data) {
      this.$store.commit('setArticle', data)
      this.$router.replace({ 'path': '/detail' })
    },
    find () {
      axios(`https://newsapi.org/v2/everything?q=${this.search}&apiKey=dacd081181ce4a34ac2b8a461b7ea8d0`, {
      crossDomain: true
    }).then( ({ data }) => {
      this.$store.commit('setAllPost', data.articles)
      this.$store.commit('setPost', data.articles)
    })
    }
  },
  data () {
    return {
      search: ''
    }
  },
  mounted () {
    axios('https://newsapi.org/v2/everything?q=programming&domains=techcrunch.com,techinasia.com&apiKey=dacd081181ce4a34ac2b8a461b7ea8d0', {
      crossDomain: true
    }).then( ({ data }) => {
      this.$store.commit('setAllPost', data.articles)
      this.$store.commit('setPost', data.articles)
    })
  }  
}
  </script>
