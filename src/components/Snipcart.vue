<template>
  <div class="snipcart">
    <g-link class="snipcart-checkout">
      <span class="snipcart-total-items"></span>
      <span class="snipcart-total-price">{{
        this.totalPrice | formatMoney
      }}</span>
    </g-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    getTotalPrice: function () {
      return Snipcart.store.getState().cart.total;
    },
  },
  mounted: function () {
    this.totalPrice = this.getTotalPrice();
  },
};
</script>
