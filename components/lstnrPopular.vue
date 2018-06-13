<template>
  <section class='lstnrPopular'>
    <div class="head">
      <div class="titles">
        <h3 class="title">
          lstnrs
        </h3>
        <h4 class="subtitle">popular</h4>
      </div>
      <a href="#">see all</a>
    </div>
    <div class="columns">
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
    </div>
  </section>
</template>

<script>
import listenerCard from '~/components/listenerCard.vue'

export default {
  name: 'lstnrPopular',
  components: {
    listenerCard
  }
}
</script>

<style lang="scss">
.lstnrPopular {
  margin: 2rem 0;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .titles {
      .title {
        font-family: 'Futura Bold';
        font-size: 1.2rem;
        margin-bottom: 0rem;
      }
      .subtitle {
        font-family: 'Futura Bold';
        color: #b8afaf;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        margin-top: 0;
      }
    }
    a {
      margin-bottom: 1rem;
    }
  }
}
</style>
