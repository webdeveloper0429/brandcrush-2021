<template>
  <section class="banner-section-w">
    <div class="container">
      <div class="banner-section">
        <div class="title bc-h1 text-white">Unlock and grow media revenue with one simple platform</div>
        <div class="description bc-para-lrg text-white">
          Transform the potential of your retail media and partnerships with a powerful end-to-end platform.
        </div>
        <div class="button-w">
          <button class="btn bc-btn btn-secondary">Start today</button>
          <button class="btn bc-btn btn-outline-white">Book a demo</button>
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
  margin-bottom: 14rem;
  @media (min-width: $md) {
    margin-bottom: 6.25rem;
  }
  @media (min-width: $xl) {
    margin-bottom: 10rem;
  }
  .banner-section {
    padding: 2.5rem 0.625rem 6.375rem;
    position: relative;

    @media (min-width: $md) {
      padding: 3.125rem 1.25rem 8.375rem;
    }
    @media (min-width: $xl) {
      padding: 5.5rem 2.5rem 5rem;
    }
    .title {
      max-width: 16.25rem;
      margin-bottom: 1.25rem;
      @media (min-width: $md) {
        max-width: 26.563rem;
      }
      @media (min-width: $xl) {
        max-width: 36.25rem;
        margin-bottom: 1.438rem;
      }
    }
    .description {
      max-width: 16.25rem;
      margin-bottom: 2.5rem;
      @media (min-width: $md) {
        max-width: 24rem;
      }
      @media (min-width: $xl) {
        max-width: 34rem;
        margin-bottom: 5.625rem;
      }
    }
    .button-w {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .btn {
        width: 7.5rem;
        margin: 0;
      }
      @media (min-width: $md) {
        justify-content: flex-start;
        .btn {
          margin-right: $spacing;
        }
      }
      @media (min-width: $xl) {
        .btn {
          width: 11.25rem;
        }
      }
    }
    .decorator-w {
      position: absolute;
      right: 0rem;
      bottom: -12rem;
      img {
        width: 28.375rem;
        height: auto;
      }
      @media (min-width: $md) {
        right: -1.25rem;
        bottom: -2rem;
      }
      @media (min-width: $xl) {
        img {
          width: 46.438rem;
        }
      }
    }
    .image-w {
      position: absolute;
      right: 0rem;
      bottom: -10.75rem;
      img {
        width: 20rem;
        height: auto;
      }
      @media (min-width: $md) {
        right: 0rem;
        bottom: 0;
      }
      @media (min-width: $xl) {
        right: 4.375rem;
        img {
          width: 29.938rem;
        }
      }
    }
  }
}
</style>
