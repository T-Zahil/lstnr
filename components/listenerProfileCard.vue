<template>
  <div class="card card-lstnr-prorfile">
    <div class="card-image" :style="{ backgroundColor: `#${brandColor}`}">
      <figure class="image is-96x96">
        <img :src="'http://localhost:1337' + logo" alt="The brand logo">
      </figure>
      <div class="card-image-title">
        {{ name }}
      </div>
      <b-tag rounded v-bind:style="{ color: `#${brandColor}`}" type="is-white">{{ industry }}</b-tag>
    </div>
    <div class="card-content">
      <p class="content">
        {{ bio }}
      </p>
      <div class="additionnal-info">
        <div class="additionnal-item">Website <a :href="website"><span v-bind:style="{ color: `#${brandColor}`, fontWeight: 'bold', paddingLeft: '20px' }">{{ website }}</span></a></div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Follow</a>
    </footer>
  </div>
</template>

<style>
  .card-lstnr-prorfile {
    border-radius: 4px;
  }

  .card-lstnr-prorfile .card-header {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  .card-lstnr-prorfile .card-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  .card-lstnr-prorfile .image {
    margin-top: 30px;
  }

  .card-lstnr-prorfile .card-image-title {
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 30px;
  }

  .card-lstnr-prorfile img {
    border-radius: 4px;
  }

  .card-lstnr-prorfile .card-title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .card-lstnr-prorfile .tag {
    margin-top: 14px;
    font-weight: bold;
  }

  .card-lstnr-prorfile .additionnal-item {
    color: lightgray;
    font-weight: bold;
  }

</style>

<script>
export default {
  props: ['logo', 'name', 'brandColor', 'bio', 'industry', 'website'],
}
</script>

