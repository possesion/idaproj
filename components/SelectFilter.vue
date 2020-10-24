<template>
  <select v-model="vehicles" class="select">
    <option v-for="vehicle in vehicles" :key="vehicle.id">
      {{ vehicle.type }}
    </option>
  </select>
</template>

<script>
// let type = this.$store.getters.TYPE;
// console.log(type);
export default {
  name: "SelectFilter",
  computed: {
    vehicles() {
      return this.$store.state.vehicles;
    },
  },
  //   props: ["vehicles"],
};
</script>

<style scoped>
.select {
  background: transparent;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  color: #4959ff;
}

@media (max-width: 376px) {
  .select {
    font-size: 24px;
  }
}
</style>
