<template>
  <Layout>

    <about></about>

    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">
        <h2>{{ edge.node.title }}</h2>
      </g-link>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts:allProduct {
    edges {
      node {
        id
        title
        type
        excerpt
        path
      }
    }
  }
}
</page-query>

<script>
import About from '../components/About'

export default {
  components: {
    About
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
