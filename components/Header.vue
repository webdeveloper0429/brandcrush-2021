<template>
  <div>
    <nav class="navbar navbar-expand-xl navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/images/logo.svg" alt="Brandcrush" width="151" height="24" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-xl-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Partners</a>
            </li>
            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Brands
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Brands</a></li>
                <li><a class="dropdown-item" href="#">Brandcrush for agencies</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Login</a>
            </li>
          </ul>
          <form class="d-flex ms-3">
            <button class="btn btn-primary">Request a demo</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/_variables';
.nav-link {
  font-family: Karla;
  font-size: 0.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: $bccharcoal !important;
}
</style>
<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.nav-item {
  margin-left: 1rem;
  min-height: 2.75rem;
  display: flex;
  align-items: center;
}
.btn {
  min-width: 10.625rem;
}
.navbar::v-deep .dropdown-item {
  font-family: Karla;
  font-size: 0.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: $bccharcoal !important;
  padding: 0.625rem;
  &:active {
    background: $gray-400;
  }
}
</style>
