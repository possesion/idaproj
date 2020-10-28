<template>
  <div class="container">
    <div class="vehicle-img"></div>
    <div class="vehicle-description">
      <h1>NAME</h1>
      <div class="vehicle-description-tabs flex">
        <nuxt-link
          to="/vehicles/specification"
          class="vehicle-description-tabs__specification"
        ></nuxt-link>
        <nuxt-link to="/vehicles/team" class="vehicle-description-tabs__team"
          >Team</nuxt-link
        >
        <nuxt-link to="/vehicles/term" class="vehicle-description-tabs__terms"
          >Term</nuxt-link
        >
      </div>
      ipsum Lorem ipsum dolor sit, amet consectetur
      <div class="vehicle-description-features">FEATURES</div>
      <div class="vehicle-description-wrapper">
        <div class="vehicle-description-icon"></div>
        <div class="vehicle-description-article">
          <h5>Challenge</h5>
          <p>
            ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Omnis atque reprehenderit voluptatem quae ipsum vitae dolor ducimus
            perspiciatis necessitatibus eligendi eveniet excepturi suscipit
            doloribus ad iste provident, asperiores eum molestiae?
          </p>
        </div>
      </div>
      <div class="vehicle-description-rent">
        <div class="vehicle-description-rent__price"></div>
        <div class="vehicle-description-rent__btn">Rent now</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "VehicleDetails",
};
</script>

<style module src="../assets/SCSS/vehicleDetails.module.scss" lang="scss">
</style>