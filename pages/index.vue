<template>
  <div class="homepage">
    <HomepageBanner />
    <OfferBrands />
    <JoinNetwork />
    <div class="media-section-w">
      <div class="container">
        <div class="media-section">
          <div class="title bc-h3 text-primary mx-auto">
            Seamlessly manage your media with a dedicated end-to-end retail media and partnerships platform
          </div>
          <div>
            <MediaView
              v-for="(mediaBlock, idx) in mediaBlocks"
              :key="idx"
              :image="mediaBlock.image"
              :title="mediaBlock.title"
              :description="mediaBlock.description"
              :right-image="mediaBlock.rightImage"
            />
          </div>
          <StartBookButtons />
        </div>
      </div>
    </div>
    <TrustedBrands />
    <YourMedia />
  </div>
</template>

<script>
import HomepageBanner from '@/components/homepage/HomepageBanner.vue'
import OfferBrands from '@/components/homepage/OfferBrands.vue'
import JoinNetwork from '@/components/homepage/JoinNetwork.vue'
import MediaView from '@/components/homepage/MediaView.vue'
import StartBookButtons from '@/components/homepage/StartBookButtons.vue'
import TrustedBrands from '@/components/homepage/TrustedBrands.vue'
import YourMedia from '@/components/homepage/YourMedia.vue'

export default {
  components: {
    HomepageBanner,
    OfferBrands,
    JoinNetwork,
    MediaView,
    StartBookButtons,
    TrustedBrands,
    YourMedia,
  },
  data() {
    return {
      mediaBlocks: [
        {
          image: 'group-5@3x.png',
          title: 'Maximize your media sales',
          description: 'Grow and scale revenue with custom platform tools',
          rightImage: true,
        },
        {
          image: 'group-11@3x.jpg',
          title: 'Streamline your activations',
          description: 'Manage your activations, with booking, inventory and campaign workflows',
          rightImage: false,
        },
        {
          image: 'group-3-copy-3@3x.png',
          title: 'Simplify your payments',
          description: 'Full vendor management, payments and collections',
          rightImage: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.media-section-w {
  margin-bottom: 3.75rem;
  @media (min-width: $md) {
    margin-bottom: 4.375rem;
  }
  @media (min-width: $xl) {
    margin-bottom: 7.5rem;
  }
  .media-section {
    .title {
      margin-top: 1rem;
      margin-bottom: 2.5rem;

      @media (min-width: $md) {
        max-width: 31.25rem;
      }
      @media (min-width: $xl) {
        margin-bottom: 4.375rem;
        max-width: 41.25rem;
      }
    }
  }
}
</style>
