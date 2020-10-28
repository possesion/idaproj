<template>
  <div :class="$style.container">
    <div :class="$style.flex">
      <div :class="$style.flexCenter">
        <img :class="$style.vehicleImg" :src="currentVehicle.image" alt="img" />
      </div>
      <div :class="$style.description">
        <h1>{{ currentVehicle.type }} "{{ currentVehicle.name }}"</h1>
        <div :class="$style.tabs">
          <nuxt-link
            exact
            active-class="active"
            :to="{
              name: 'catalog-id-specifications',
              params: { id: currentVehicle.id },
            }"
            >Specification</nuxt-link
          >
          <nuxt-link
            :to="{
              name: 'catalog-id-team',
              params: { id: currentVehicle.id },
            }"
            active-class="active"
            :class="$style.team"
            >Team</nuxt-link
          >
          <nuxt-link
            active-class="active"
            :to="{
              name: 'catalog-id-term',
              params: { id: currentVehicle.id },
            }"
            >Term</nuxt-link
          >
        </div>

        <div>
          <nuxt-child :class="$style.tabsContent" />
        </div>
        <div :class="$style.rent">
          <div :class="$style.rentPrice">
            Rent for <span>{{ currentVehicle.rent }} $/h</span>
          </div>
          <button :class="$style.rentBtn">Rent now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentVehicle() {
      return this.$store.state.currentVehicle;
    },
  },
};
</script>
<style module src="../../assets/SCSS/vehicleDetails.module.scss" lang="scss">
</style>