<template>
  <div class="upvote" :class="{ upvoted: isUpvoted }" @click="upvote">
    <b-icon
        icon="chevron-up"
        size="is-large">
    </b-icon>
    <div class="votes">
      <span class="number-vote">{{ formattedVotes }}</span>
      <span class="text-vote">votes</span>
    </div>
  </div>
</template>

<style>
  .upvote {
    display: flex;
    flex-direction: column;
    height: 100px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    padding: 0px 6px;
    border: 2px solid hsl(0, 0%, 86%);
    background-color: #fff;
    color:black;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .upvote:hover {
    background-color: #7957d5;
    border: 2px solid #7957d5;
    color:white;
  }

  .upvote.upvoted {
    background-color: #7957d5;
    border: 2px solid #7957d5;
    color:white;
    cursor: initial;
  }

  .upvote .icon {
    color: #7957d5;
    transition: all 0.3s ease;
  }

  .upvote:hover .icon {
    color:white;
  }

  .upvote.upvoted .icon {
    color:white;
  }

  .votes {
    display: flex;
    flex-direction: column;
    line-height: 1.2rem;
  }

  .number-vote {
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
  }

  .text-vote {
    color: hsl(0, 0%, 71%);
    font-size: 0.8rem;
    text-align: center;
  }
</style>


<script>
  export default {
    data() {
      return {
        isUpvoted: false
      }
    },
    props: ['votes'],
    computed: {
      formattedVotes() {
        return this.reverseString(this.chunk(this.reverseString(String(this.votes)), 3).join(','));
      }
    },
    methods: {
      chunk(str, n) {
        var ret = [];
        var i;
        var len;

        for(i = 0, len = str.length; i < len; i += n) {
           ret.push(str.substr(i, n))
        }

        return ret
      },
      reverseString(str) {
        return str.split("").reverse().join("");
      },
      upvote() {
        this.$data.isUpvoted = true;
      }
    }
  }
</script>

