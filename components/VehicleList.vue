<template>
  <div class="list-vehicle">
    <Card v-for="vehicle in vehicles" :key="vehicle.id" :vehicle="vehicle" />
  </div>
</template>

<script>
import { getVehicles } from "../assets/API/request.js";
import Card from "./Card";
// console.log(getVehicles().then(res => console.log(res)))
export default {
  computed: {
    vehicles() {
      return this.$store.state.vehicles;
    },
  },
  mounted() {
    try {
      this.$store.dispatch("getAllVehicles");
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list-vehicle {
  display: flex;
  /* align-items: stretch; */
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
