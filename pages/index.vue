<template>
  <div class="homepage">
    <HomepageBanner />
    <OfferBrands />
    <div class="container"></div>
  </div>
</template>

<script>
import HomepageBanner from '@/components/homepage/HomepageBanner.vue'
import OfferBrands from '@/components/homepage/OfferBrands.vue'
export default {
  components: {
    HomepageBanner,
    OfferBrands,
  },
}
</script>
