<template>
  <div :class="$style.card">
    <div>
      <img :class="$style.img" :src="vehicle.preview" alt="img" />
    </div>
    <!-- <nuxt-link
      :to="/catalog/ + vehicle.id"
      @click.prevent="openVehicle(vehicle.id)"
      :class="$style.cardContent"
    > -->
    <a
      :class="$style.cardContent"
      href="#"
      @click.prevent="openVehicle(vehicle.id)"
    >
      <div :class="$style.title">{{ vehicle.type }} "{{ vehicle.name }}"</div>
      <div :class="$style.text">{{ vehicle.description }}</div>
      <div :class="$style.price">{{ vehicle.rent }} $/h</div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["vehicle"],
  methods: {
    openVehicle(vehicle) {
      this.$router.push("/catalog/" + vehicle);
      this.$store.commit("SET_CURRENT_VEHICLE", vehicle);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module src="../assets/SCSS/card.module.scss" lang="scss">
</style>