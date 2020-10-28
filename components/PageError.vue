<template>
  <div class="card-error flex">
    <div class="card-error-content">
      <h1 class="card-error-title">An error has occurred</h1>
      <p class="card-error-text">please refresh the page</p>
      <button @click="handleClick()" class="card-error-btn">Reload page</button>
    </div>
  </div>
</template>

<script>
import "../assets/SCSS/pageError.scss";

export default {
  name: "Page-error",
  methods: {
    handleClick() {
      const { dispatch } = this.$store;
      console.log(this.$store.state);
      dispatch("reloadFetch");
    },
  },
};
</script>

