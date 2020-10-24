<template>
  <div class="card-error flex">
    <div class="card-error-content">
      <h1 class="card-error-title">An error has occurred</h1>
      <p class="card-error-text">please refresh the page</p>
      <button class="card-error-btn">Reload page</button>
    </div>
  </div>
</template>

<script>
const handleClick = () => {
  this.$store.dispatch("getAllVehicles");
};
export default {
  name: "Page-error",
};
</script>

<style scoped>
.flex {
  display: flex;
}
.card-error {
  height: 100vh;
  margin-bottom: 48px;
  justify-content: center;
  align-items: center;
}
.card-error-content {
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-shrink: 0;
  text-align: center;
}
.card-error-title {
  margin: 24px;
}
.card-error-text {
  margin: 40px;
}
.card-error-btn {
  width: 161px;
  height: 48px;
  background: #4959ff;
  border-radius: 12px;
  font-style: normal;
  font-size: 16px;
  line-height: 14px;
  outline: none;
  color: #fcfcfc;
}
</style>
