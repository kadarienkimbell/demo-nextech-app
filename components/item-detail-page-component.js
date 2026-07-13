export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    const detailHighlights = Vue.computed(() => {
      const item = selectedItem.value;
      if (!item) {
        return [];
      }

      const category = String(item.category || '').toLowerCase();
      const highlights = [];

      if (category.includes('action')) {
        highlights.push('A strong mix of exploration, missions, and memorable story moments.');
        highlights.push('Built for players who enjoy freedom, variety, and exciting progression.');
      } else if (category.includes('sport')) {
        highlights.push('Designed for fast-paced competition and a polished sports feel.');
        highlights.push('Great for players who want realistic action and strong match energy.');
      } else if (category.includes('shooter')) {
        highlights.push('Focused on quick reactions, tactical play, and exciting combat encounters.');
        highlights.push('Ideal for players who enjoy adrenaline, teamwork, and high-pressure moments.');
      } else if (category.includes('story')) {
        highlights.push('Highlights character-driven action and dramatic, immersive gameplay.');
        highlights.push('A solid pick for players who enjoy a more narrative-focused experience.');
      } else {
        highlights.push('Offers a creative and flexible experience with plenty to discover.');
        highlights.push('Well suited for players who like variety, exploration, and self-expression.');
      }

      return highlights;
    });

    return {
      itemsStore,
      selectedItem,
      detailHighlights,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <router-link to="/items" class="btn btn-link ps-0 mb-3">← Back to collection</router-link>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading game details...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="!selectedItem" class="alert alert-warning" role="alert">
        Item not found.
      </div>

      <article v-else class="card shadow-sm border-0 overflow-hidden">
        <img
          v-if="selectedItem.imageUrl"
          :src="selectedItem.imageUrl"
          :alt="selectedItem.name"
          class="item-detail-image w-100 object-fit-cover" />
        <div
          v-else
          class="item-detail-image w-100 d-flex align-items-center justify-content-center bg-light text-muted">
          No image available
        </div>

        <div class="card-body p-4">
          <div class="d-flex align-items-center gap-2 mb-2">
            <h1 class="h3 mb-0">{{ selectedItem.name }}</h1>
            <span class="badge text-bg-primary">{{ selectedItem.category || 'General' }}</span>
          </div>

          <p class="lead mb-3">{{ selectedItem.description || 'No description available.' }}</p>

          <div class="row g-3 mt-2">
            <div class="col-lg-8">
              <h2 class="h5 mb-2">Why this game stands out</h2>
              <p class="text-muted mb-3">
                This title is presented as a strong pick for players who want a memorable experience with clear style, engaging gameplay, and an easy-to-understand appeal.
              </p>
              <div class="d-flex flex-column gap-2">
                <div v-for="highlight in detailHighlights" :key="highlight" class="d-flex gap-2 align-items-start">
                  <i class="bi bi-controller text-primary mt-1"></i>
                  <span>{{ highlight }}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="border rounded-3 p-3 bg-light">
                <h3 class="h6 mb-3">Quick facts</h3>
                <p class="mb-2"><strong>Genre:</strong> {{ selectedItem.category || 'General' }}</p>
                <p class="mb-2"><strong>Platform:</strong> {{ selectedItem.location || 'N/A' }}</p>
                <p class="mb-0 text-muted"><strong>Game ID:</strong> {{ selectedItem.id }}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  `,
};
