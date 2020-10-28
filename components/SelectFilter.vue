<template>
  <div>
    <select :class="$style.select" v-model="currentFilter">
      <option value="">Whatever</option>
      <option v-for="vehicle in vehicles" :key="vehicle.type">
        <p class="select-text">{{ vehicle }}</p>
      </option>
    </select>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "SelectFilter",
  computed: {
    currentFilter: {
      set(val) {
        this.$store.commit("SET_FILTER", val);
      },
      get() {
        return this.$store.state.currentFilter;
      },
    },
    vehicles() {
      const {
        state: { vehicles },
      } = this.$store;
      return _.uniq(vehicles.map(({ type }) => type));
    },
  },
};
</script>
<style module src="../assets/SCSS/selectFilter.module.scss" lang="scss">
</style>