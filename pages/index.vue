<template>
  <div class="container">
    <header class="navbar">
      <div class="navbar-icon flex">
        <div class="navbar-icon-img">
          <img src="../assets//img/logo.svg" alt="logo" />
        </div>
        <a href="#" class="navbar-icon-img">
          <img src="../assets/img/logo2.svg" alt="logo-p" />
        </a>
        <div class="navbar-icon-text">World's first affordable airsharing</div>
      </div>
      <div class="navbar-navigator flex">
        <div class="navbar-nightmode flex">
          <div class="navbar-nightmode-img">
            <img
              class="navbar-nightmode-img"
              src="../assets/img/nightmod.svg"
              alt="nightmode"
            />
          </div>
          <a href="#" class="navbar-nightmode-text">Night mod</a>
        </div>

        <div class="navbar-notification flex">
          <a href="#" class="navbar-notification-item">
            <img src="../assets//img/message.svg" alt="messages" />
          </a>
          <a href="#" class="navbar-notification-item">
            <img src="../assets/img/bell.svg" alt="bell" />
          </a>
        </div>
        <div class="navbar-right flex">
          <div class="navbar-user flex">
            <a href="#" class="navbar-user-name">Bessie Cooper</a>
            <div class="navbar-user-photo">
              <img src="../assets/img/avatar.png" alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="main-menu flex">
        <div class="main-menu-filter">
          Rent
          <SelectFilter />
          <!-- <span class="purple">whatever</span> -->
        </div>
        <div class="main-menu_add flex">
          <div class="main-menu-title">Add new</div>
          <button class="main-menu-btn">
            <img class="menu-btn" src="../assets/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
      <VehicleList />
      <PageError v-if="!isLoaded" />
    </main>
  </div>
</template>

<script>
// console.log(isLoaded)
import VehicleList from "../components/VehicleList";
import PageError from "../components/PageError";
import SelectFilter from "../components/SelectFilter";
export default {
  computed: {
    isLoaded() {
      return this.$store.state.isLoaded;
    },
  },
};
</script>

<style>
.container {
  width: 1312px;
  margin: 0 auto;
}
.purple {
  color: #4959ff;
}
.flex {
  display: flex;
}
/* .navbar-icon {

} */
.navbar {
  margin: 48px 0 40px;
  display: flex;
  align-items: center;
}
.navbar-icon {
  align-items: center;
  margin-right: auto;
}
.navbar-icon-img {
  margin-right: 32px;
  user-select: none;
}

.navbar-icon-text {
  align-items: center;
  letter-spacing: 0px;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  font-style: normal;
  text-align: left;
  color: #677b8f;
}
.navbar-right {
  /* flex-direction: column; */
}
.navbar-nightmode {
  margin-right: 107px;
  align-items: center;
}
.navbar-nightmode-text {
  text-decoration: none;
  user-select: none;
}
.navbar-nightmode-text:hover {
  transform: scale(1.3);
}
.navbar-nightmode-img {
  margin-right: 17px;
  align-items: center;
}
.navbar-notification {
  align-items: center;
  margin-right: 53px;
}
.navbar-notification-item {
  margin-left: 29px;
}
.navbar-notification-item:hover {
  transform: scale(1.3);
}
.navbar-user {
  margin-left: auto;
  align-items: center;
}
.navbar-user-name {
  margin-right: 16px;
  text-decoration: none;
  user-select: none;
}
.navbar-user-photo > img {
  border-radius: 50%;
}

.main {
  height: 100%;
  background: #f3f4f7;
  margin-bottom: 48px;
  border-radius: 48px;
}
.main-menu {
  justify-content: space-between;
  padding: 56px 64px 0;
}
.main-menu_add {
  align-items: center;
}
.main-menu-name {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
}
.main-menu-title {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  margin-right: 20px;
  user-select: none;
  color: #4959ff;
}
.main-menu-btn {
  width: 48px;
  height: 48px;
  background: #4959ff;
  border-radius: 16px;
  outline: none;
  cursor: pointer;
}
.main-menu-btn:hover {
  filter: brightness(65%);
}
.main-menu-filter {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  user-select: none;
  color: #012345;
}
.main-menu-dropdown:hover {
  cursor: pointer;
  transform: scale(1.3);
}

@media (max-width: 376px) {
  .container {
    width: 374px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .navbar {
    justify-content: space-evenly;
  }
  .navbar-icon {
    width: 70px;
  }
  .navbar > div {
    margin: 0;
    padding: 0;
  }
  .navbar-navigator > div {
    /* width: 373px; */
    margin: 0;
    padding: 0;
  }
  .navbar-user-name {
    display: none;
  }
  .navbar-icon-text {
    display: none;
  }
  .navbar-nightmode-text {
    display: none;
  }
  .main-menu {
    margin: 0 16px;
    padding: 24px 0;
    justify-content: space-evenly;
    align-items: center;
  }
  .main-menu-title {
    font-size: 16px;
  }
  .main-menu-filter {
    font-size: 24px;
  }
}
</style>
