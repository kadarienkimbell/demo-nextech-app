export default {
  name: 'landing-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    // Completed
    const featuredItems = Vue.computed(() => {
      return (itemsStore.items || []).filter((item) => item.imageUrl).slice(0, 6);
    });

    return {
      itemsStore,
      featuredItems,
    };
  },
  template: /* html */ `
    <div class="container py-4">
      <section class="hero-panel p-4 p-md-5 mb-4 rounded-4 bg-white shadow-sm">
        <div class="row align-items-center gx-4">
          <div class="col-lg-7">
            <span class="badge bg-primary bg-opacity-10 text-primary mb-3">New Release Showcase</span>
            <h1 class="display-4 fw-bold mb-3">Ka'Darien's Game Promotion</h1>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <span class="badge rounded-pill bg-light text-primary border">Curated by theme</span>
              <span class="badge rounded-pill bg-light text-primary border">Quick previews</span>
              <span class="badge rounded-pill bg-light text-primary border">Built for discovery</span>
            </div>
            <div class="d-flex flex-wrap gap-3">
              <router-link to="/items" class="btn btn-primary btn-lg">
                <i class="bi bi-controller me-2"></i>Browse Featured Games
              </router-link>
              <router-link to="/about" class="btn btn-outline-primary btn-lg">
                <i class="bi bi-info-circle me-2"></i>Learn about the collection
              </router-link>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="border rounded-4 p-3 bg-light position-relative overflow-hidden" style="min-height: 320px;">
              <div v-if="itemsStore.isLoading" class="text-muted">Loading featured images...</div>
              <div v-else-if="itemsStore.error" class="text-danger">{{ itemsStore.error }}</div>
              <div v-else class="d-flex flex-wrap gap-3 justify-content-center align-items-center">
                <div
                  v-for="(item, index) in featuredItems"
                  :key="item.id"
                  class="home-image-card rounded-4 overflow-hidden shadow-sm"
                  :style="{ transform: 'rotate(' + ((index % 3) - 1) * 6 + 'deg)' }"
                >
                  <img :src="item.imageUrl" :alt="item.name" class="w-100 h-100 object-fit-cover" />
                  <div class="home-image-caption">
                    <span class="fw-semibold">{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="h4 mb-0">Featured games at a glance</h2>
          <router-link to="/items" class="btn btn-sm btn-outline-primary">View all</router-link>
        </div>
        <div class="row g-3">
          <div v-for="item in featuredItems.slice(0, 4)" :key="item.id" class="col-md-6 col-xl-3">
            <div class="card h-100 border-0 shadow-sm home-feature-card">
              <div class="home-feature-image-wrapper">
                <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.name" class="home-feature-image" />
                <div v-else class="home-feature-image home-feature-placeholder">No image</div>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
                  <h3 class="h6 mb-0">{{ item.name }}</h3>
                  <span class="badge text-bg-primary">{{ item.category || 'General' }}</span>
                </div>
                <p class="text-muted small mb-0 home-feature-description">{{ item.description || 'A standout game with exciting gameplay and a strong first impression.' }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="row g-3 mb-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h5">Curated selection</h3>
              <p class="text-muted mb-0">
                Only the most compelling promotional games are featured here, making the experience feel polished and intentional from the first scroll.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h5">Search by title</h3>
              <p class="text-muted mb-0">
                Visitors can quickly find a specific game using the search experience on the collection page, which keeps exploration smooth and efficient.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h5">Streamer-ready picks</h3>
              <p class="text-muted mb-0">
                The layout is designed to make standout titles easy to preview and share, whether someone is browsing casually or preparing a showcase.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="mt-4 p-4 rounded-4 bg-white shadow-sm">
        <div class="row g-4 align-items-center">
          <div class="col-lg-7">
            <h2 class="h4 mb-3">A little about Ka'Darien</h2>
            <p class="text-muted mb-2">
              My name is Ka'Darien. I love basketball and video games, and I built this app to share my passion for gaming in a simple, welcoming way.
            </p>
            <p class="text-muted mb-0">
              This collection is meant to help people discover games they might enjoy, whether they are new to gaming or just looking for something fresh to try.
            </p>
          </div>
          <div class="col-lg-5">
            <div class="border rounded-3 p-3 bg-light">
              <h3 class="h6 mb-2">What this app is for</h3>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><i class="bi bi-controller text-primary me-2"></i>Showcasing games in a clean, easy-to-browse format</li>
                <li class="mb-2"><i class="bi bi-people text-primary me-2"></i>Helping beginners and fans discover new favorites</li>
                <li><i class="bi bi-lightbulb text-primary me-2"></i>Making game discovery feel fun, friendly, and simple</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
};
