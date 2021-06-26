<template>
  <section class="offer-brands-section-w">
    <div class="container">
      <div class="offer-brands-section">
        <div class="title bc-h2 text-secondary mx-auto">
          Offer brands authentic connections to your audience where they shop, live, work and play.
        </div>
        <div class="cards-w">
          <div class="row">
            <div v-for="(card, idx) in cards" :key="idx" class="col-12 col-md-4">
              <div class="card">
                <div class="image-w">
                  <img :src="`/images/homepage/${card.image}`" class="card-img-top" :alt="card.image" />
                  <div class="icon-w">
                    <img :src="`/images/homepage/${card.icon}`" class="icon" :alt="card.icon" />
                  </div>
                </div>
                <div class="card-title bc-h3 text-secondary">{{ card.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: 'at-home-image@3x.jpg',
          icon: 'home.svg',
          title: 'AT HOME',
        },
        {
          image: 'onsite-image@3x.jpg',
          icon: 'onsite.svg',
          title: 'ONSITE',
        },
        {
          image: 'online-image@3x.jpg',
          icon: 'online.svg',
          title: 'ONLINE',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.offer-brands-section-w {
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  @media (min-width: $xl) {
    margin-bottom: 5.5rem;
  }
  .offer-brands-section {
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
  }
  .cards-w {
    margin: 0 1rem;
    display: flex;
    .card {
      margin: 0.875rem 0 1rem;
      border: none;
      .image-w {
        position: relative;
        .icon-w {
          position: absolute;
          width: 100%;
          bottom: -1rem;
          display: flex;
          justify-content: center;
          .icon {
            width: 3.75rem;
            @media (min-width: $xl) {
              width: 4.375rem;
            }
          }
        }
      }
      .card-title {
        margin-top: 1.563rem;
        @media (min-width: $xl) {
          margin-top: 2.5rem;
          font-size: 1.5rem;
        }
      }
    }
    @media (min-width: $md) {
      margin: 0;
    }
    @media (min-width: $xl) {
      margin: 0 4.5rem;
      .card {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
}
</style>
