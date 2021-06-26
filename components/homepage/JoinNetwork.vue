<template>
  <section class="join-network-section-w">
    <div class="container">
      <div class="join-network-section">
        <div class="title bc-h3 text-primary mx-auto">
          Join a growing network of businesses unlocking and growing media revenue
        </div>
        <div class="sponsors-w">
          <div class="d-block d-md-none">
            <div class="my-4 d-flex align-items-center justify-content-between">
              <div v-for="(sponsor, idx) in sponsors1" :key="idx" class="sponsor">
                <img
                  :src="`/images/homepage/${sponsor.icon}`"
                  alt="sponsor.icon"
                  :width="sponsor.width"
                  :height="sponsor.height"
                />
              </div>
            </div>
            <div class="my-4 d-flex align-items-center justify-content-between">
              <div v-for="(sponsor, idx) in sponsors2" :key="idx" class="sponsor">
                <img
                  :src="`/images/homepage/${sponsor.icon}`"
                  alt="sponsor.icon"
                  :width="sponsor.width"
                  :height="sponsor.height"
                />
              </div>
            </div>
          </div>
          <div class="d-none d-md-block d-xl-none">
            <div class="py-4 d-flex align-items-center justify-content-between">
              <div v-for="(sponsor, idx) in sponsors1" :key="idx" class="sponsor">
                <img
                  :src="`/images/homepage/${sponsor.icon}`"
                  alt="sponsor.icon"
                  :width="sponsor.width"
                  :height="sponsor.height"
                />
              </div>
              <div v-for="(sponsor, idx) in sponsors2" :key="idx" class="sponsor">
                <img
                  :src="`/images/homepage/${sponsor.icon}`"
                  alt="sponsor.icon"
                  :width="sponsor.width"
                  :height="sponsor.height"
                />
              </div>
            </div>
          </div>
          <div class="d-none d-xl-block">
            <div class="d-flex align-items-center justify-content-around">
              <div v-for="(sponsor, idx) in sponsors1" :key="idx" class="sponsor">
                <img
                  :src="`/images/homepage/${sponsor.icon}`"
                  alt="sponsor.icon"
                  :width="sponsor.widthXl"
                  :height="sponsor.heightXl"
                />
              </div>
              <div v-for="(sponsor, idx) in sponsors2" :key="idx" class="sponsor">
                <img
                  :src="`/images/homepage/${sponsor.icon}`"
                  alt="sponsor.icon"
                  :width="sponsor.widthXl"
                  :height="sponsor.heightXl"
                />
              </div>
            </div>
          </div>
        </div>
        <StartBookButtons />
      </div>
    </div>
  </section>
</template>

<script>
import StartBookButtons from '@/components/homepage/StartBookButtons.vue'
export default {
  components: {
    StartBookButtons,
  },
  data() {
    return {
      sponsors1: [
        {
          icon: 'monahs-university-grey@3x.png',
          width: '75',
          height: '23',
          widthXl: '121',
          heightXl: '36',
        },
        {
          icon: 'hello-fresh-grey@3x.png',
          width: '52',
          height: '27',
          widthXl: '85',
          heightXl: '41',
        },
        {
          icon: 'bluestonelane-grey@3x.png',
          width: '99',
          height: '9',
          widthXl: '164',
          heightXl: '13',
        },
      ],
      sponsors2: [
        {
          icon: 'grabox-grey@3x.png',
          width: '78',
          height: '19',
          widthXl: '128',
          heightXl: '27',
        },
        {
          icon: 'marley-spoon-grey@3x.png',
          width: '66',
          height: '29',
          widthXl: '107',
          heightXl: '45',
        },
        {
          icon: 'clubcorp-grey@3x.png',
          width: '72',
          height: '12',
          widthXl: '118',
          heightXl: '18',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.join-network-section-w {
  margin-top: 2rem;
  margin-bottom: 3.75rem;
  @media (min-width: $md) {
    margin-bottom: 4.375rem;
  }
  @media (min-width: $xl) {
    margin-bottom: 7.5rem;
  }
  .join-network-section {
    .title {
      margin-bottom: 1rem;
      @media (min-width: $md) {
        max-width: 31.125rem;
      }
      @media (min-width: $xl) {
        max-width: 41.875rem;
        margin-bottom: 3.5rem;
      }
    }
    .sponsors-w {
      margin: 2.25rem 0;
      @media (min-width: $xl) {
        margin: 4rem 0;
      }
    }
  }
}
</style>
