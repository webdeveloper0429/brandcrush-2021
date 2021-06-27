<template>
  <div class="media-block">
    <div class="row">
      <div class="col-12 col-md-7 order-sm-0" :class="rightImage ? 'order-md-2' : ''">
        <div class="image-w">
          <img :src="`/images/homepage/${image}`" :alt="image" />
        </div>
      </div>
      <div class="col-12 col-md-5" :class="rightImage ? 'order-md-1' : ''">
        <div class="text-w" :class="rightImage ? 'ms-auto' : ''">
          <slot name="check-list">
            <div class="title bc-h2 text-secondary">{{ title }}</div>
            <div class="description bc-para text-bccharcoal">{{ description }}</div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rightImage: {
      type: Boolean,
      required: false,
      default: false,
    },
    image: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.media-block {
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (min-width: $md) {
    margin-bottom: 4.375rem;
  }
  .text-w {
    margin-top: 1rem;
    @media (min-width: $md) {
      margin-top: 3.125rem;
      max-width: 14.688rem;
    }
    @media (min-width: $xl) {
      margin-top: 7.5rem;
      max-width: 21.375rem;
      margin-left: 3.5rem;
      margin-right: 3.5rem;
    }
    .title {
      margin-bottom: 0.625rem;

      @media (min-width: $md) {
        margin-bottom: 1.25rem;
        text-align: unset;
        max-width: 14.688rem;
      }
    }
    .description {
      text-align: center;
      @media (min-width: $md) {
        text-align: unset;
        max-width: 14.688rem;
      }
      @media (min-width: $xl) {
        max-width: 21.375rem;
      }
    }
  }
  .image-w {
    img {
      width: 100%;
    }
  }
}
</style>
