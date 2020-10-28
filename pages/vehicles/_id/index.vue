<template>
  <div class="default">
    <p>
      ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Omnis atque reprehenderit voluptatem quae ipsum vitae dolor ducimus
            perspiciatis necessitatibus eligendi eveniet excepturi suscipit
    </p>
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

<style scoped>
   .default {
       margin-bottom: 24px;
       color: #677b8f;
   } 
</style>
