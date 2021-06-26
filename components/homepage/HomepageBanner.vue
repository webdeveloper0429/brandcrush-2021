<template>
  <section class="banner-section-w">
    <div class="container">
      <div class="banner-section">
        <div class="title bc-h1 text-white">Unlock and grow media revenue with one simple platform</div>
        <div class="description bc-para-lrg text-white">
          Transform the potential of your retail media and partnerships with a powerful end-to-end platform.
        </div>
        <div class="button-w">
          <button class="btn btn-responsive btn-secondary">Start today</button>
          <button class="btn btn-responsive btn-outline-white">Book a demo</button>
        </div>
        <div class="decorator-w">
          <img src="/images/decorator/decorator-1.svg" alt="decorator-1.svg" width="743" height="258" />
        </div>
        <div class="image-w">
          <img
            src="/images/computer-asset-potential@3x.png"
            alt="computer-asset-potential@3x.png"
            width="1437"
            height="1119"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.banner-section-w {
  background: $bcteal;
  .banner-section {
    padding: 5.5rem 2.5rem 5rem;
    position: relative;
    @media (max-width: $tablet) {
      padding: 3.125rem 1.25rem 8.375rem;
    }
    @media (max-width: $mobile) {
      padding: 2.5rem 0.625rem 6.375rem;
    }
    .title {
      max-width: 36.25rem;
      margin-bottom: 1.438rem;
      @media (max-width: $tablet) {
        max-width: 26.563rem;
        margin-bottom: 1.25rem;
      }
      @media (max-width: $mobile) {
        max-width: 16.25rem;
        text-align: center;
      }
    }
    .description {
      max-width: 34rem;
      margin-bottom: 5.625rem;
      @media (max-width: $tablet) {
        max-width: 24rem;
        margin-bottom: 2.5rem;
      }
      @media (max-width: $mobile) {
        max-width: 16.25rem;
        text-align: center;
      }
    }
    .button-w {
      .btn {
        min-width: 11.25rem;
        margin-right: $spacing;
      }
      @media (max-width: $tablet) {
        .btn {
          min-width: 7.5rem;
        }
      }
      @media (max-width: $mobile) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .btn {
          margin: 0;
        }
      }
    }
    .decorator-w {
      position: absolute;
      right: -1.25rem;
      bottom: -2rem;
      img {
        width: 46.438rem;
        height: auto;
      }
      @media (max-width: $tablet) {
        img {
          width: 28.375rem;
        }
      }
      @media (max-width: $mobile) {
        right: 0rem;
        bottom: -12rem;
      }
    }
    .image-w {
      position: absolute;
      right: 4.375rem;
      bottom: 0;
      img {
        width: 29.938rem;
        height: auto;
      }
      @media (max-width: $tablet) {
        right: 0rem;
        img {
          width: 20rem;
        }
      }
      @media (max-width: $mobile) {
        right: 0rem;
        bottom: -10.75rem;
      }
    }
  }
}
</style>
