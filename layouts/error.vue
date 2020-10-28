<template>
  <div class="wrap">
    <h1>Error has been found</h1>
    <nuxt-link class="text" to="/">
      <button class="error-btn">Home</button>
    </nuxt-link>
  </div>
</template>
<script>
export default {};
</script>

<style lang="css">
.text {
  color: #fff;
}
.wrap {
  display: flex;
  align-items: center;
  flex-direction: column;

  color: red;
}
.error-btn {
  width: 100px;
  height: 50px;
  margin: 55px;
  border-radius: 15%;
  background: #4959ff;
  color: #fff;
  outline: none;
}
</style>