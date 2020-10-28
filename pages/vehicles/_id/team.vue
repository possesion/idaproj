
<template>
  <div :class="$style.team">
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </p>
    <h3>Qualified specialists</h3>
    <div :class="$style.specialists">
      <div :class="$style.teamItem">
        <img src="../../../assets/img/team1.png" alt="specialist" />
        <div :class="$style.column">
          <h5>Marvin McKinney</h5>
          <p :class="$style.teamText">Pilot assistant</p>
        </div>
      </div>
      <div :class="$style.teamItem">
        <img src="../../../assets/img/team2.png" alt="specialist" />
        <div :class="$style.column">
          <h5>Savannah Nguyen</h5>
          <p :class="$style.teamText">Mechanic</p>
        </div>
      </div>
      <div :class="$style.teamItem">
        <img src="../../../assets/img/team3.png" alt="specialist" />
        <div :class="$style.column">
          <h5>Courtney Henry</h5>
          <p :class="$style.teamText">Stewardess</p>
        </div>
      </div>
    </div>
    <div :class="$style.teamContent">{{ currentVehicle.team_text }}</div>
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