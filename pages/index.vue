<template>
  <div :class="$style.container">
    <main :class="$style.main">
      <div :class="$style.menu">
        <div :class="$style.menuFilter">
          <span>Rent</span>
          <SelectFilter :vehicles="vehicles" />
        </div>
        <div :class="$style.add">
          <div :class="$style.title">Add new</div>
          <button @click="handler">
            <img
              :class="$style.btnImg"
              src="../assets/img/plus.svg"
              alt="plus"
            />
          </button>
        </div>
      </div>      
      <nuxt-child />
      <VehicleList
        :isLoaded="isLoaded"
        :vehicles="vehicles"
        :currentFilter="currentFilter"
      />
      <PageError v-if="!isLoaded" />
    </main>
  </div>
</template>

<script>
// console.log(store.getters)
import VehicleList from "../components/VehicleList";
import PageError from "../components/PageError";
import SelectFilter from "../components/SelectFilter";
import VehicleDetails from "../components/VehicleDetails";

export default {
  computed: {
    isLoaded() {
      return this.$store.state.isLoaded;
    },
    vehicles() {
      return this.$store.state.vehicles;
    },
    currentFilter() {
      // console.log(this.$store.state.currentFilter);
      return this.$store.state.currentFilter;
    },
  },
  mounted() {
    try {
      this.$store.dispatch("getAllVehicles");
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    handler: function () {
      alert("Oops, something went wrong!");
    },
  },
};
</script>

<style module src="../assets/SCSS/index.module.scss" lang="scss">
</style>