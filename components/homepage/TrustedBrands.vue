<template>
  <section class="trusted-brands-section-w">
    <div class="container">
      <div class="trusted-brands-section">
        <div class="title bc-h3 text-primary mx-auto">Trusted by the world's leading brands and agencies</div>
        <MediaView image="group-4@3x.jpg">
          <template #check-list>
            <div class="ul-w">
              <div v-for="(list, idx) in lists" :key="idx" class="li-w d-flex">
                <div class="icon-w text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                    />
                  </svg>
                </div>
                <div class="list-text bc-para">
                  {{ list }}
                </div>
              </div>
            </div>
          </template>
        </MediaView>
        <StartBookButtons />
      </div>
    </div>
  </section>
</template>

<script>
import MediaView from '@/components/homepage/MediaView.vue'
import StartBookButtons from '@/components/homepage/StartBookButtons.vue'

export default {
  components: {
    MediaView,
    StartBookButtons,
  },
  data() {
    return {
      lists: [
        'Easily onboard brands & agencies onto your media platform',
        'Full control to approve/decline campaign requests',
        'Propose tailored campaigns to brands to drive upsell',
        'Opt in to promote your media on the Brandcrush marketplace',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.trusted-brands-section-w {
  padding-top: 3.125rem;
  padding-bottom: 3.375rem;
  margin-top: 2rem;
  margin-bottom: 1.875rem;
  @media (min-width: $md) {
    margin-bottom: 4.375rem;
  }
  @media (min-width: $xl) {
    padding-top: 4.375rem;
    padding-bottom: 7rem;
    margin-bottom: 8.125rem;
  }
  background: $gray-bg;
  .trusted-brands-section {
    .title {
      margin-bottom: 1.875rem;
      @media (min-width: $md) {
        margin-bottom: 2.5rem;
      }
      @media (min-width: $xl) {
        margin-bottom: 4.375rem;
      }
    }
    .ul-w {
      margin-top: 1.875rem;
      .li-w {
        margin-bottom: 0.5rem;
        @media (min-width: $md) {
          margin-bottom: 1rem;
        }
        @media (min-width: $xl) {
          margin-bottom: 1.5rem;
        }
        .icon-w {
          margin-right: 0.5rem;
          @media (min-width: $xl) {
            margin-bottom: 1.25rem;
          }
          svg {
            width: 1.5rem;
            height: 1.5rem;
            @media (min-width: $xl) {
              width: 2rem;
              height: 2rem;
            }
          }
        }
      }
    }
  }
}
.trusted-brands-section-w::v-deep .media-block {
  @media (min-width: $md) {
    margin-bottom: 2.5rem;
  }
  @media (min-width: $xl) {
    margin-bottom: 4.375rem;
  }
  .text-w {
    max-width: 16.25rem;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: $md) {
      max-width: 16.25rem;
      margin-left: unset;
      margin-right: unset;
    }
    @media (min-width: $xl) {
      max-width: 22rem;
      margin-left: 3.5rem;
      margin-right: 3.5rem;
    }
  }
}
</style>
