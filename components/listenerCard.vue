<template>
  <nuxt-link :to="'/'+slug" tag="div" class="card card--small-lstnr">
    <div class="card-image" :style="'background-color: #' + color">
      <figure class="image is-96x96">
        <img :src="image" alt="">
      </figure>
      <h3>{{ name }}</h3>
      <div class="tag__cat">
        <div class="cat">
          {{ cat }}
        </div>
      </div>
    </div>
    <div class="card-content">
      <p>
        {{ desc.substring(0, 100) + '...' }}
      </p>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item">
        <b-icon icon="account-multiple" size="is-small">
        </b-icon>
        {{ views }}
      </span>
      <span class="card-footer-item">
        <b-icon icon="lightbulb" size="is-small">
        </b-icon>
        {{ ideas }}
      </span>
    </footer>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'cat', 'color', 'desc', 'views', 'ideas', 'logo', 'slug'],
  data() {
    return {
      image: 'http://api-lstnr.thomas-sanlis.com' + this.logo
    }
  }
}
</script>


<style lang="scss">
.card {
  border-radius: 8px;
  box-shadow: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }
  .card-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;
    border-radius: 8px 8px 0 0;
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
    h3 {
      text-align: center;
      font-family: 'Futura Bold';
      color: #fff;
    }
    .tag__cat {
      display: flex;
      justify-content: center;
      font-family: 'Futura Bold';
      .cat {
        width: 100%;
        height: 1rem;
        line-height: 0.15rem;
        font-family: 'Futura Bold';
        color: #7289da;
        text-align: center;
        text-transform: uppercase;
        font-size: 0.6rem;
        margin-top: 0.6rem;
        padding: 0.75rem;
        background-color: white;
        border-radius: 23px;
      }
    }
  }
  .card-content {
    padding: 1rem;
    border: none;
    min-height: 8rem;
    p {
      color: #a8a8a8;
      font-size: 0.8rem;
    }
  }
  .card-footer {
    border: none;
    span {
      color: #979595;
      border: none;
      font-size: 0.8rem;
      &:first-child {
        justify-content: flex-start;
        .icon {
          margin-right: 0.3rem;
        }
      }
      &:last-child {
        justify-content: flex-end;
        .icon {
          margin-left: 0.3rem;
        }
      }
    }
  }
}
</style>


