<template>
  <div class="mt-5">
    <div class="container">
      <div class="card-columns">
        <div class="card" v-for="item in posts" v-bind:key="item.key">
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
    <button class="btn btn-primary btn-more" @click="loadMore">Load More</button>

  </div>

</template>
  
  <script>
  // export default {
  //   layout: 'blog'
  // }
  import axios from 'axios'
export default {
  methods : {
    loadMore () {
      this.posts = []
      this.current += 9
      this.allPost.map((item, key) => item.description !== null && this.posts.length < this.current ? this.posts.push(item) : '')
    }
  },
  data () {
    return {
      allPost: [],
      posts: [],
      current: 9

    }
  },
  mounted () {
    axios('https://newsapi.org/v2/everything?q=programming&domains=techcrunch.com,techinasia.com&apiKey=dacd081181ce4a34ac2b8a461b7ea8d0', {
      crossDomain: true
    }).then( ({ data }) => {
      this.allPost = data.articles
      data.articles.map((item, key) => {
        if (item.description !== null && this.posts.length < this.current) {
          this.posts.push(item)
        }
      })
    })
  }  
}
  </script>

<style lang="scss" scoped>
  /*
   * Card Columns Masonry - Bootstrap 4
   * https://codepen.io/JacobLett/pen/oZmWdd
   */
  /* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
  @media (min-width: 768px) {  
    .card-columns {column-count: 3;}
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { 
   .card-columns {column-count: 3;}
  }
   
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {  
     .card-columns {column-count: 3;} 
  }
  </style>
