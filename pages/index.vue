<template>
  <div class="homepage">
    <HomepageBanner />
    <OfferBrands />
    <JoinNetwork />
    <div class="container"></div>
  </div>
</template>

<script>
import HomepageBanner from '@/components/homepage/HomepageBanner.vue'
import OfferBrands from '@/components/homepage/OfferBrands.vue'
import JoinNetwork from '@/components/homepage/JoinNetwork.vue'
export default {
  components: {
    HomepageBanner,
    OfferBrands,
    JoinNetwork,
  },
}
</script>
