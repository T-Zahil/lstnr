<template>
  <div class="wrapper">
    <section class="container idea">
      <div>
        <div class="columns">
          <div class="column is-two-thirds">
            <idea-card-expanded title="hello" votes="9536" content="hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !"></idea-card-expanded>
          </div>
          <div class="column">
            <listener-profile-card></listener-profile-card>
          </div>
        </div>
        <comment-card title="hello" votes="9536" content="hi" depth="1"></comment-card>
        <comment-card title="hello" votes="9536" content="hi" depth="2"></comment-card>
        <comment-card title="hello" votes="9536" content="hi" depth="2"></comment-card>
        <comment-card title="hello" votes="9536" content="hi" depth="1"></comment-card>
        <comment-card title="hello" votes="9536" content="hi" depth="2"></comment-card>
      </div>
    </section>
  </div>
</template>

<script>
import ideaCardExpanded from '~/components/ideaCardExpanded.vue'
import commentCard from '~/components/commentCard.vue'
import listenerProfileCard from '~/components/listenerProfileCard.vue'

export default {
  name: 'profile',
  components: {
    ideaCardExpanded,
    listenerProfileCard,
    commentCard
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fbfbfb;
  .idea {
    padding-top: 8rem;
  }
}
</style>
