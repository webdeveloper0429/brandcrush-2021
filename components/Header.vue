<template>
  <div>
    <b-navbar toggleable="lg" variant="white">
      <b-navbar-brand href="#">
        <img src="/images/logo.svg" alt="Brandcrush" width="151" height="24" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Partners</b-nav-item>
          <b-nav-item-dropdown text="Brands" left>
            <b-dropdown-item href="#">Brands</b-dropdown-item>
            <b-dropdown-item href="#">Brandcrush for agencies</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">Pricing</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Login</b-nav-item>
          <b-nav-form class="ml-3">
            <b-button size="sm" variant="primary" class="my-2 my-sm-0">Request a demo</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNav: false,
    }
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/_variables';
.nav-link {
  font-family: Karla;
  font-size: 0.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: $bccharcoal !important;
}
</style>
<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.nav-item {
  margin-left: 1rem;
  min-height: 2.75rem;
  display: flex;
  align-items: center;
}
.btn {
  min-width: 10.625rem;
}
.dropdown-menu {
  margin: 1rem;
}
.navbar::v-deep .dropdown-item {
  font-family: Karla;
  font-size: 0.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: $bccharcoal !important;
  padding: 0.625rem;
  &:active {
    background: $gray-400;
  }
}
</style>
