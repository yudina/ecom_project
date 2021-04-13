<template>
  <Layout>
    <div>
      <h1 v-html="$page.product.title"></h1>
      <g-image :src="$page.product.image" />
      <ul>
        <li v-html="$page.product.type"></li>
        <li v-html="$page.product.brand"></li>
        <li>{{ $page.product.price | formatMoney }}</li>
      </ul>
      <p>
        {{ $page.product.excerpt }}
      </p>
    </div>
    <button
  class="snipcart-add-item"
  :data-item-id="$page.product.id"
  :data-item-description="$page.product.excerpt"
  :data-item-price="$page.product.price"
  :data-item-name="$page.product.title"
  :data-item-url="$page.product.path"
  :data-item-image="$page.product.image"
>
  Add to cart
</button>
  </Layout>
</template>

<page-query>
    query ($path: String!){
        product (path: $path) {
            title
            type
            price
            id
            excerpt
            brand
            path
            image
        }
    }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.product.title,
    };
  },
};
</script>

<style>
</style>