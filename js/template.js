Vue.config.devtools = true;

Vue.component("navbar", {
  template: `
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-center align-items-sm-center" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/officers/index.html">Officers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/meetings/index.html">Meetings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/tournaments/index.html">Tournaments</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/resources/index.html">Resources</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Points</a>
      </li>
    </ul>
  </div>
</nav>

	`
});
Vue.component("nav-spacer", {
  template: `
  <nav>
  <button>
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
	`
});
Vue.component("officer-card", {
  props: ["name", "role", "number", "first"],
  template: `
  <div class="card d-flex justify-content-center me-4 ms-4 align-items-sm-center ">
    <img src="/images/face.png" class="card-img-top w-75 pt-3" alt="">
    <div class="card-body ">
       <h5 class="card-title d-flex justify-content-center align-items-sm-center">{{ name }}</h5>
        <p class=" d-flex justify-content-center align-items-sm-center card-text">{{ role }}</p>
        <button class="btn w-100 pe-5 ps-5 mw-100 btn-primary " type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#' + first" aria-expanded="false">
        Contact
        </button>
        <div class="collapse m-0 mt-2" v-bind:id="first">
          <div class="card card-body d-flex justify-content-center align-items-sm-center">
            {{ number }}
          </div>
        </div>
    </div>
  </div>
	`
});
Vue.component("vfooter", {
  template: `
  <nav class="navbar fixed-bottom navbar-light bg-light">
  <div class="container-fluid d-flex justify-content-center align-items-sm-center">
    <a class="navbar-brand" href="#">McNeil Chess Club</a>
  </div>
</nav>
	`
});

var app = new Vue({
  el: "#app",
});

$("#app").show();