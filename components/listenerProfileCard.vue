<template>
  <div class="card card-lstnr-profile">
    <div class="card-image" :style="{ backgroundColor: `#${product.color}`}">
      <figure class="image is-96x96">
        <img v-if="product.logo !== null" :src="'http://localhost:1337' + product.logo.url" alt="The brand logo">
      </figure>
      <div class="card-image-title">
        {{ product.name }}
      </div>
      <b-tag rounded v-bind:style="{ color: `#${product.color}`}" type="is-white">{{ product.industry.name }}</b-tag>
    </div>
    <div class="card-content">
      <div class="level">
        <div class="level-item">
          <p v-bind:style="{ color: `#${product.color}`}">821</p>
          <span>lstnrs</span>
        </div>
        <div class="level-item">
          <p v-bind:style="{ color: `#${product.color}`}">{{ product.ideas.length }}</p>
          <span>feedbacks</span>
        </div>
      </div>
      <p class="content">
        {{ product.description }}
      </p>
      <div class="additionnal-info">
        <div class="additionnal-item">
            <span style="font-family: 'Futura Bold';font-size: 0.8rem;color: #e0e0e0;">Website
              <a :href="product.website">
                <span v-bind:style="{ color: `#${product.color}`, fontWeight: 'bold', paddingLeft: '20px' }">{{ product.website }}</span>
              </a>
            </span>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <button class="card-footer-item button" v-bind:style="{ color: `#${product.color}`}">Following</button>
    </footer>
  </div>
</template>

<style lang="scss">
.card-lstnr-profile {
  border-radius: 4px;
  .card-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 250px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    figure {
      width: 96px;
      height: 96px;
      margin-bottom: 0.5rem;
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      padding: 0.5rem;
      background-color: #fff;
      img {
        border-radius: 8px;
      }
    }
    .card-image-title {
      font-family: 'Futura Bold';
      font-size: 1.5rem;
      color: #ffffff;
      margin: 1rem 0;
    }
    span {
      text-transform: uppercase;
      font-family: 'Futura Bold';
      padding: 0 1rem;
    }
  }
  .card-content {
    .level {
      .level-item {
        display: flex;
        flex-direction: column;
        p {
          font-family: 'Futura Bold';
          font-size: 1.4rem;
        }
        span {
          font-family: 'Futura Bold';
          font-size: 0.8rem;
          color: #e0e0e0;
        }
      }
    }
    .content {
      font-size: 0.9rem;
    }
    .additionnal-item {
      a {
        span {
          font-family: 'Futura Bold';
          font-size: 0.8rem;
        }
      }
    }
  }
  .card-footer {
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    .card-footer-item {
      width: 90%;
      height: 2.5rem;
      border-radius: 40px;
      font-family: 'Futura Bold';
      font-size: 0.9rem;
      color: #ffffff;
      flex-grow: 0;
      line-height: 0.5rem;
      margin-bottom: 1rem;
    }
  }
}
</style>

<script>
export default {
  props: ['product']
}
</script>

