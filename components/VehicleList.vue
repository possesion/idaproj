<template>
  <div :class="$style.list">
    <Card v-for="vehicle in filtered" :key="vehicle.id" :vehicle="vehicle" />
  </div>
</template>

<script>
import { getVehicles } from "../assets/API/request.js";
import Card from "./Card";

export default {
  computed: {
    filtered() {
      const { currentFilter } = this.$props;
      const {
        state: { vehicles },
      } = this.$store;
      if (currentFilter.length === 0) {
        return vehicles;
      }
      return vehicles.filter((item) => item.type === currentFilter);
    },
  },
  props: {
    isLoaded: Boolean,
    vehicles: Array,
    currentFilter: String,
  },
};
</script>

<style module src="../assets/SCSS/vehicleList.module.scss" lang="scss">
</style>