<template>
  <div class="card card--small-lstnr">
  <header class="card-header" style="background-color: #6441A4">
    <b-icon
      icon="earth"
      type="is-white"
      size="is-24x24">
    </b-icon>
    <b-icon
      icon="plus"
      type="is-white"
      size="is-24x24">
    </b-icon>
  </header>
    <div class="card-image" style="background-color: #6441A4">
      <figure class="image is-96x96">
        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <h3 class="card-title">Twitch</h3>
      <b-taglist>
        <b-tag type="is-primary">Gaming</b-tag>
        <b-tag type="is-primary">Vocal</b-tag>
      </b-taglist>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item">
        <b-icon
          icon="account-multiple"
          size="is-small">
        </b-icon>
        12 034
      </span>
      <span class="card-footer-item">
        124
        <b-icon
          icon="lightbulb"
          size="is-small">
        </b-icon>
      </span>
    </footer>
  </div>
</template>

<style>
  .card--small-lstnr {
    border-radius: 4px;
  }

  .card--small-lstnr .card-header {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  .card--small-lstnr .card-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    padding-bottom:36px;
  }

  .card--small-lstnr img {
    border-radius: 4px;
  }

  .card--small-lstnr .card-title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .card--small-lstnr .tags {
    margin-top: 10px;
  }

  .card--small-lstnr .card-footer {
    border: none;
  }

  .card--small-lstnr .card-footer .card-footer-item {
    border:none;
    padding: 12px;
    justify-content: flex-start;
  }

  .card--small-lstnr .card-footer .card-footer-item:last-child {
    justify-content: flex-end;
  }

  .card--small-lstnr .card-footer .card-footer-item .icon {
    padding-right: 6px;
  }

    .card--small-lstnr .card-footer .card-footer-item:last-child .icon {
    padding-left: 6px;
  }

</style>

