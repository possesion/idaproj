<template>
  <div :class="$style.error">
    <div :class="$style.content">
      <h1 :class="$style.title">An error has occurred</h1>
      <p :class="$style.text">please refresh the page</p>
      <button @click="handleClick()" class="card-error-btn">Reload page</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page-error",
  methods: {
    handleClick() {
      const { dispatch } = this.$store;
      for (let i = 0; i <= 3; i += 1) {
        console.log("Попытка подключения" + i + 1);
        if (this.$store.state.vehicles.length !== 0) {
          return;
        }
        dispatch("reloadFetch");
      }
    },
  },
};
</script>

<style module src="../assets/SCSS/pageError.module.scss" lang="scss">
</style>