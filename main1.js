const { createApp } = Vue;
createApp({
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("product.json")
      .then((response) => (this.products = response.data.products));
  },
}).mount("#app");