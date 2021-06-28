<template>
  <section class="your-media-section-w">
    <div class="container">
      <div class="your-media-section">
        <div class="title bc-h3 text-secondary">Your media, your platform</div>
        <div class="description bc-para text-bccharcoal">
          Power your media sales with a fully customisable media platform that looks, sounds and operates as your
          organisation.
        </div>
        <div class="button-w">
          <button class="btn responsive btn-primary">Brandcrush for your business</button>
        </div>
        <div class="decorator-w">
          <img src="/images/decorator/decorator-1.svg" alt="decorator-1.svg" width="743" height="258" />
        </div>
        <div class="image-w">
          <img src="/images/homepage/group-65.svg" alt="group-65.svg" width="816" height="551" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.your-media-section-w {
  margin-top: 1.875rem;
  margin-bottom: 8.75rem;
  padding-top: 3.125rem;
  padding-bottom: 10.5rem;
  background: $bclightpink;
  @media (min-width: $md) {
    padding-top: 4.375rem;
    padding-bottom: 5rem;
    padding-left: 2.5rem;
  }
  @media (min-width: $xl) {
    padding-top: 5.625rem;
    padding-bottom: 7.5rem;
    padding-left: 6.25rem;
  }
  .your-media-section {
    position: relative;
    .title {
      margin-bottom: 0.625rem;
      @media (min-width: $md) {
        text-align: unset;
      }
    }
    .description {
      text-align: center;
      max-width: 16.25rem;
      margin-bottom: 1.875rem;
      @media (min-width: $md) {
        text-align: unset;
        max-width: 18.75rem;
      }
    }
    .button-w {
      text-align: center;
      .btn {
        min-width: 15rem;
      }
      @media (min-width: $md) {
        text-align: unset;
      }
      @media (min-width: $xl) {
        .btn {
          min-width: 18.438rem;
        }
      }
    }
    .decorator-w {
      position: absolute;
      width: 100%;
      right: 0;
      bottom: -12rem;
      img {
        width: 100%;
        height: auto;
      }
      @media (min-width: $md) {
        bottom: -6.5rem;
        width: 24rem;
      }
      @media (min-width: $xl) {
        right: 2rem;
        bottom: -8.5rem;
        width: 42rem;
      }
    }
    .image-w {
      position: absolute;
      right: 0;
      bottom: -13.25rem;
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
      @media (min-width: $md) {
        bottom: -8rem;
        width: 27rem;
      }
      @media (min-width: $xl) {
        bottom: -11rem;
        width: 49rem;
      }
    }
  }
}
</style>
