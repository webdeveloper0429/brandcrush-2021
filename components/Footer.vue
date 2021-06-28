<template>
  <div>
    <footer>
      <div class="container">
        <div class="sign-up-w">
          <div class="title bc-para-lrg text-secondary text-center mx-auto">
            Sign up below to get the latest tips, product features and industry insights direct to your inbox.
          </div>
          <form class="form-w">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="select-w">
                  <select class="form-select form-select-lg">
                    <option value="0" selected>I’m a partner</option>
                    <option value="1">I’m a brand</option>
                    <option value="2">I’m an agency</option>
                    <option value="3">Other</option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-md-8">
                <div class="submit-w">
                  <div class="custom-form-group d-flex align-items-center justify-content-between">
                    <input type="email" placeholder="Email" />
                    <button class="btn responsive btn-secondary">Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <hr />
          <div class="content-w">
            <div class="row">
              <div class="col-12 col-xl-8">
                <div class="links-w">
                  <div class="row">
                    <div v-for="(content, index) in contents" :key="index" class="col-12 col-md-4">
                      <div class="links-block">
                        <div class="block-title text-primary text-uppercase">{{ content.title }}</div>
                        <div v-for="(item, idx) in content.links" :key="idx" class="link text-bccharcoal">
                          <a :href="item.link">
                            {{ item.text }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-4">
                <div class="tos-icon-w">
                  <div class="row align-items-center">
                    <div class="col-12 col-md-8 col-xl-12">
                      <div class="tos-w">
                        <span>© Brandcrush Pty Ltd 2018 | </span>
                        <span class="text-bccharcoal">Terms & Privacy</span>
                      </div>
                    </div>
                    <div class="col-12 col-md-4 col-xl-12">
                      <div class="icon-w">
                        <a href="#">
                          <img src="/images/facebook.svg" alt="facebook.svg" />
                        </a>
                        <a href="#">
                          <img src="/images/insta.svg" alt="insta.svg" />
                        </a>
                        <a href="#">
                          <img src="/images/linked-in.svg" alt="linked-in.svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="country-w">
            <div class="d-block d-md-none">
              <div class="country text-secondary text-uppercase">UNITED STATES &nbsp; | &nbsp; AUSTRALIA</div>
              <div class="country text-secondary text-uppercase">NEW ZEALAND &nbsp; | &nbsp; UNITED KINGDOM</div>
            </div>
            <div class="d-none d-md-block">
              <div class="country text-secondary text-uppercase">
                UNITED STATES &nbsp; | &nbsp; AUSTRALIA &nbsp; | &nbsp; NEW ZEALAND &nbsp; | &nbsp; UNITED KINGDOM
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          title: 'How it works',
          links: [
            {
              link: '#',
              text: 'Partners',
            },
            {
              link: '#',
              text: 'Brands',
            },
            {
              link: '#',
              text: 'Agencies',
            },
            {
              link: '#',
              text: 'FAQs',
            },
          ],
        },
        {
          title: 'Discover',
          links: [
            {
              link: '#',
              text: 'About Brandcrush',
            },
            {
              link: '#',
              text: 'Our blog',
            },
            {
              link: '#',
              text: 'Contact us',
            },
          ],
        },
        {
          title: 'Brandcrush For',
          links: [
            {
              link: '#',
              text: 'Retail & grocery',
            },
            {
              link: '#',
              text: 'Shopping centres/Malls',
            },
            {
              link: '#',
              text: 'Rideshare & food delivery',
            },
            {
              link: '#',
              text: 'D2C retailers',
            },
            {
              link: '#',
              text: 'Health, fitness & beauty',
            },
            {
              link: '#',
              text: 'Corporate & coworking',
            },
            {
              link: '#',
              text: 'Recreation & education',
            },
            {
              link: '#',
              text: 'Hospitality & travel',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
footer {
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: $xl) {
    max-width: 65rem;
    margin-left: auto;
    margin-right: auto;
  }
  .sign-up-w {
    margin-bottom: 3rem;
    .title {
      margin-bottom: 1.125rem;
      font-weight: bold;
      max-width: 17.5rem;
      @media (min-width: $md) {
        margin-bottom: 2.5rem;
        max-width: 23rem;
      }
      @media (min-width: $xl) {
        margin-bottom: 2rem;
        max-width: 28rem;
        font-size: 1rem;
      }
    }
    .form-w {
      margin-bottom: 3rem;
      @media (min-width: $md) {
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 4.344rem;
      }
      @media (min-width: $xl) {
        margin-left: 4rem;
        margin-right: 4rem;
        margin-bottom: 5.563rem;
      }
      .select-w {
        max-width: 14.375rem;
        margin: auto;
        margin-bottom: 1.125rem;
        @media (min-width: $xl) {
          max-width: unset;
        }
      }
      .submit-w {
        .custom-form-group {
          border: 1px solid #888887;
          height: 50px;
          border-radius: 6px;
          padding: 0 0.625rem;
          input {
            border: none;
            width: 10rem;
            font-family: Karla;
            font-size: 1rem;
            line-height: 1.5;
            &:focus {
              outline: none;
            }
          }
          .btn {
            min-width: 5.625rem;
            @media (min-width: $md) {
              min-width: 6.25rem;
            }
            @media (min-width: $xl) {
              min-width: 7.5rem;
            }
          }
        }
      }
    }
    .content-w {
      margin-top: 1.844rem;
      margin-bottom: 3rem;
      @media (min-width: $xl) {
        margin-top: 3rem;
      }
      .links-w {
        .links-block {
          margin-bottom: 3.125rem;
          text-align: center;
          @media (min-width: $md) {
            text-align: unset;
          }
          .block-title {
            margin-bottom: 0.625rem;
            font-family: CocogooseProCm;
            font-size: 0.744rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.51;
            letter-spacing: 1.08px;
          }
          .link {
            font-family: Karla;
            font-size: 0.875rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2.29;
            letter-spacing: normal;
            color: $bccharcoal;
            a {
              color: $bccharcoal;
              text-decoration: none;
            }
          }
        }
      }
      .tos-icon-w {
        .tos-w {
          @media (min-width: $xl) {
            margin-bottom: 2rem;
          }
          font-family: Karla;
          font-size: 0.688rem;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 2.18;
          letter-spacing: normal;
          text-align: center;
          color: rgba(64, 64, 65, 0.6);
          @media (min-width: $md) {
            text-align: left;
          }
          @media (min-width: $xl) {
            text-align: right;
          }
        }
        .icon-w {
          display: flex;
          justify-content: center;
          margin-left: -0.5rem;
          margin-right: -0.5rem;
          img {
            width: 2.5rem;
            height: 2.5rem;
            margin: 0.5rem;
          }
          @media (min-width: $md) {
            justify-content: flex-end;
          }
        }
      }
    }
    .country-w {
      margin-top: 1.344rem;
      margin-bottom: 1.344rem;
      @media (min-width: $md) {
        margin-top: 1.844rem;
        margin-bottom: 1.844rem;
      }
      @media (min-width: $xl) {
        margin-top: 1.313rem;
        margin-bottom: 1.313rem;
      }
      .country {
        font-family: Poppins;
        font-size: 0.688rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        text-align: center;
      }
    }
  }
}
</style>
