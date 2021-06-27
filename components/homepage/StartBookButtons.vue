<template>
  <div class="start-book-buttons-w d-flex align-items-center justify-content-center my-3">
    <button class="btn responsive btn-secondary">Start today</button>
    <button class="btn responsive btn-outline-secondary">Book a demo</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.btn {
  width: 7.5rem;
  margin: 0 $spacing-xs;
  @media (min-width: $xl) {
    width: 11.25rem;
  }
}
</style>
