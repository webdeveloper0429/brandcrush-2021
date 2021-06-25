<template>
  <section class="banner-section-w">
    <b-container>
      <div class="banner-section">
        <div class="title">Unlock and grow media revenue with one simple platform</div>
        <div class="description">
          Transform the potential of your retail media and partnerships with a powerful end-to-end platform.
        </div>
        <div class="action-w">
          <b-button variant="secondary">Start today</b-button>
          <b-button variant="outline-white">Book a demo</b-button>
        </div>
        <div class="decorator-w"></div>
        <div class="image-w"></div>
      </div>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.banner-section-w {
  background: $bcteal;
  padding: 5.5rem 3.75rem 5rem;
  .banner-section {
  }
  .title {
    max-width: 36.25rem;
    font-family: CocogooseProCm;
    font-size: 2.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: 0.5px;
    color: $white;
    margin-bottom: 1.438rem;
  }
  .description {
    max-width: 34rem;
    font-family: Poppins;
    font-size: 1.25rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: $white;
    margin-bottom: 5.625rem;
  }
  .btn {
    min-width: 11.25rem;
    margin-right: $spacing;
  }
}
</style>
