<template>
  <div>
    <nav class="navbar flex items-center justify-between flex-wrap bg-teal">
      <div
        class="navbar-brand flex items-center flex-no-shrink text-white px-6"
      >
        <img src="/images/logo.svg" alt="Brandcrush" width="151" height="24" />
      </div>
      <div class="block sm:hidden">
        <div
          :class="mobileNav ? 'is-active' : ''"
          class="navbar-burger burger"
          data-target="navbarBrandCrush"
          @click="mobileNav = !mobileNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        :class="mobileNav ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-sm sm:flex-grow">
          <a
            href="#responsive-header"
            class="
              no-underline
              block
              mt-4
              sm:inline-block sm:mt-0
              text-teal-lighter
              hover:bg-bcLightblue
              mr-4
            "
          >
            Partners
          </a>
          <a
            href="#responsive-header"
            class="
              no-underline
              block
              mt-4
              sm:inline-block sm:mt-0
              text-teal-lighter
              hover:bg-bcLightblue
              mr-4
            "
          >
            Brands
          </a>
          <a
            href="#responsive-header"
            class="
              no-underline
              block
              mt-4
              sm:inline-block sm:mt-0
              text-teal-lighter
              hover:bg-bcLightblue
            "
          >
            Pricing
          </a>
        </div>
        <div class="navbar-item">
          <a href="#" class="bc-btn">Request a demo</a>
        </div>
      </div>
    </nav>
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

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.navbar {
  min-height: 3.75rem;
  .navbar-item {
    padding: 0.5rem 0.75rem;
  }
}
.navbar-burger {
  @apply cursor-pointer ml-auto;

  width: $navbar-height;
  height: $navbar-height;
  position: relative;
  span {
    background-color: currentColor;
    display: block;
    height: 1px;
    width: 16px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    &:nth-child(1) {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }
  &.is-active {
    span {
      &:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  }
}
</style>
