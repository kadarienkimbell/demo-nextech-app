export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <section class="p-4 p-md-5 mb-4 rounded-4 bg-white shadow-sm">
        <div class="row align-items-center gx-4">
          <div class="col-lg-7">
            <span class="badge bg-primary bg-opacity-10 text-primary mb-3">New Release Showcase</span>
            <h1 class="display-6 fw-bold mb-3">Ka'Darien's Game Promotion</h1>
            <p class="lead text-secondary mb-4">
              Explore the latest titles, streamer-ready picks, and powerful game previews on one exciting homepage. Ka'Darien makes it easy to browse, search, and discover games fast.
            </p>
            <router-link to="/items" class="btn btn-primary btn-lg">
              <i class="bi bi-controller me-2"></i>Browse Featured Games
            </router-link>
          </div>
          <div class="col-lg-5">
            <div class="border rounded-4 p-3 bg-light text-center">
              <div class="mb-3">
                <i class="bi bi-stars display-4 text-primary"></i>
              </div>
              <h2 class="h5">Spotlight</h2>
              <p class="mb-0 text-muted">
                Clean, fast, and focused game discovery for players and streamers alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="row g-3">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h5">Curated games</h3>
              <p class="text-muted mb-0">
                Browse a handpicked set of titles with strong visuals and clear descriptions.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h5">Title search</h3>
              <p class="text-muted mb-0">
                Find any game quickly using the collection page search box.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h5">Stream-ready picks</h3>
              <p class="text-muted mb-0">
                Perfect for creators who want featured games with strong promotional appeal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="mt-4 p-4 rounded-4 bg-white shadow-sm">
        <h2 class="h4 mb-3">Why Ka'Darien works</h2>
        <p class="text-muted mb-2">
          Ka'Darien helps users discover promotional games quickly by keeping the experience simple, visual, and easy to navigate.
        </p>
        <ul class="list-unstyled mb-0">
          <li class="mb-2"><strong>Fast browsing:</strong> jump from home to the collection and details in one click.</li>
          <li class="mb-2"><strong>Visual previews:</strong> each game card pairs an image with a short, compelling description.</li>
          <li><strong>Focused design:</strong> no clutter, just the games and the information you need.</li>
        </ul>
      </section>
    </div>
  `,
};
