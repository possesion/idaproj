<template>
  <div :class="$style.specifications">
    <p>{{ currentVehicle.specifications_text }}</p>
    <div :class="$style.content">
      <h1>Features</h1>
      <div :class="$style.table">
        <div :class="$style.box">
          <div :class="$style.icon">
            <img src="../../../assets/img/goblet.svg" alt="winner" />
          </div>
        </div>
        <div :class="$style.text">
          <h5>A challenge for a true champion</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
      <div :class="$style.table">
        <div :class="$style.box">
          <div :class="$style.icon">
            <img src="../../../assets/img/pilot.svg" alt="pilot"/>
          </div>
        </div>
        <div :class="$style.text">
          <h5>Pilot's sweaty hands</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "VehicleDetails",

  computed: {
    currentVehicle() {
      return this.$store.state.currentVehicle;
    },
  },
};
</script>
<style module src="../../../assets/SCSS/vehicleDetails.module.scss" lang="scss">
</style>