<template>
  <div class="card flex">
    <div>
      <img class="card-img" :src="vehicle.preview" alt="img" />
    </div>
    <div class="card-content">
      <div class="card-content-title">
        {{ vehicle.type }} "{{ vehicle.name }}"
      </div>
      <div class="card-content-text">{{ vehicle.description }}</div>
      <div class="card-content-price">{{ vehicle.rent }} $/h</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["vehicle"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  display: flex;
}
.card {
  width: 373px;
  height: 164px;
  background: #fcfcfc;
  border-radius: 32px;
  margin: 32px;
  /* padding: 32px 16px; */
}
.card-img {
  max-width: 88px;
  max-height: 88px;
  border-radius: 24px;
  align-self: flex-start;
  margin: 24px;
  box-shadow: 0 0 1px black;
}
.card-content {
  align-self: center;
}
.card-content-title {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  margin-bottom: 12px;
}
.card-content-text {
  width: 197px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 148%;
  color: #677B8F;
}
.card-content-price {  
  font-style: normal;
  font-family: 'Arial', Times, serif;
  font-weight: bold;
  font-size: 14px;
  margin-top: 16px;
  color: #f84ab3;
}

@media (max-width: 376px) {
  .card {
    margin: 12px 16px;
  }
}
</style>
