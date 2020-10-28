<template>
  <div :class="$style.container">
    <header :class="$style.navbar">
      <nuxt-link nuxt-link to="/" :class="$style.icon">
        <div :class="$style.navbarIconImg">
          <img src="../assets//img/logo.svg" alt="logo" />
        </div>
        <a href="#" :class="$style.navbarIconImg">
          <img src="../assets/img/logo2.svg" alt="logo-p" />
        </a>
        <div :class="$style.navbarText">
          World's first affordable airsharing
        </div>
      </nuxt-link>
      <div :class="$style.wrapper">
        <a href="#" :class="$style.nightmode">
          <div :class="$style.img">
            <img
              :class="$style.img"
              src="../assets/img/nightmod.svg"
              alt="nightmode"
            />
          </div>
          <p :class="$style.toggler">Night mod</p>
        </a>

        <div :class="$style.notification">
          <nuxt-link to="/" :class="$style.notificationImg">
            <img src="../assets//img/message.svg" alt="messages" />
          </nuxt-link>
          <nuxt-link to="/" :class="$style.notificationImg">
            <img src="../assets/img/bell.svg" alt="bell" />
          </nuxt-link>
        </div>
        <div :class="$style.flex">
          <div :class="$style.user">
            <a href="#" :class="$style.name">Bessie Cooper</a>
            <div>
              <img
                :class="$style.photo"
                src="../assets/img/avatar.png"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// console.log(styles);
export default {
  name: "Navbar",
};
</script>


<style module src="../assets/SCSS/navbar.module.scss" lang="scss">
</style>