export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const searchTerm = Vue.ref('');

    const filteredItems = Vue.computed(() => {
      const term = String(searchTerm.value || '').trim().toLowerCase();
      if (term === '') {
        return itemsStore.items;
      }
      return itemsStore.items.filter((item) => {
        return String(item.name || '').toLowerCase().includes(term);
      });
    });

    return {
      itemsStore,
      searchTerm,
      filteredItems,
    };
  },
  template: /* html */ `
    <section class="container py-4 featured-games-section">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 gap-3 featured-games-header">
        <div>
          <h1 class="h3 mb-1">Featured Games</h1>
          <p class="text-muted mb-0">Browse featured games and open one to view its details.</p>
        </div>
        <span class="badge text-bg-light border">{{ filteredItems.length }} of {{ itemsStore.items.length }} shown</span>
      </div>

      <div class="mb-4">
        <label class="form-label visually-hidden" for="game-search-input">Search by game title</label>
        <input
          id="game-search-input"
          v-model="searchTerm"
          type="search"
          class="form-control"
          placeholder="Search by game title"
          aria-label="Search games by title"
        />
      </div>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading items...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="filteredItems.length === 0" class="alert alert-warning" role="alert">
        <span v-if="searchTerm">No games match your search.</span>
        <span v-else>No items found in the dataset.</span>
      </div>

      <div v-else class="featured-games-scroll d-flex flex-row flex-nowrap gap-3 overflow-auto pb-3">
        <div class="collection-card-column" v-for="item in filteredItems" :key="item.id">
          <article class="card h-100 shadow-sm border-0 featured-game-card">
            <img
              v-if="item.imageUrl"
              :src="item.imageUrl"
              :alt="item.name"
              class="card-img-top collection-card-image object-fit-cover" />
            <div
              v-else
              class="collection-card-image d-flex align-items-center justify-content-center bg-light text-muted">
              No image available
            </div>

            <div class="card-body d-flex flex-column collection-card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h2 class="h5 card-title mb-0">{{ item.name }}</h2>
                <span class="badge text-bg-primary ms-2">{{ item.category || 'General' }}</span>
              </div>

              <p class="card-text text-muted flex-grow-1 collection-description">
                {{ item.description || 'No description available.' }}
              </p>

              <p class="small mb-3"><strong>Location:</strong> {{ item.location || 'N/A' }}</p>

              <div class="d-grid">
                <router-link :to="'/items/' + item.id" class="btn btn-outline-secondary btn-sm">
                  View details
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
};
