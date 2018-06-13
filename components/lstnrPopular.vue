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
        <listener-card name="Twitch" cat="gaming" color="#6445A1" desc="Twitch is the number one online streaming platform focused on video games and real-life shows." views="12034" ideas="124"></listener-card>
      </div>
      <div class="column">
        <listener-card name="Cleanfox" cat="email" color="#1CA9F3" desc="Cleanfox help people clean their filled mailbox and plant trees for them." views="239" ideas="43"></listener-card>
      </div>
      <div class="column">
        <listener-card name="Mailchimp" cat="crm" color="#8E684D" desc="With Mailchimp, easily manage your emailing campaigns and touch more users, with the right message at the right time." views="456" ideas="123"></listener-card>
      </div>
      <div class="column">
        <listener-card name="Scrivener" cat="writing" color="#0C0C0C" desc="Scrivener helps writers write their novels, and allows them to manage their story easily." views="12 034" ideas="124"></listener-card>
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
