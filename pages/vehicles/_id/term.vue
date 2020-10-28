<template>
  <div>
    <div>
      <p class="">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
      <p :class="$style.teamContent">{{ currentVehicle.term_text }}</p>
      <h3>Additional conditions:</h3>
      <ul>
        <li>
          <span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>
        </li>
        <li>
          <span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li>
        <li>
          <span
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terms",
  computed: {
    currentVehicle() {
      return this.$store.state.currentVehicle;
    },
  },
};
</script>

<style module src="../../../assets/SCSS/vehicleDetails.module.scss" lang="scss">
</style>