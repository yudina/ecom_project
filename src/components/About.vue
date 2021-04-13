<template>
  <div>
    <h1 v-html="$static.content.title"></h1>
    <p v-html="$static.content.excerpt"></p>
  </div>
</template>

<static-query>
query {
  content(id: "1") {
		title
    excerpt
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
