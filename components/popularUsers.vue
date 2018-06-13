<template>
  <section class='popularUsers'>
    <h3 class="title">
      popular tnkrs
    </h3>
    <div class="popularsUsers__content">
      <div class="content__user columns">
        <div class="column is-3">
          <figure>
            <img src="~/assets/user.jpg" alt="">
          </figure>
        </div>
        <div class="column user">
          <h4>Lucie Alfan</h4>
          <span>153 cells</span>
          <p>designer @sporteo</p>
          <button class="button">follow</button>
        </div>
      </div>
      <div class="content__user columns">
        <div class="column is-3">
          <figure>
            <img src="~/assets/user.jpg" alt="">
          </figure>
        </div>
        <div class="column user">
          <h4>Lucie Alfan</h4>
          <span>153 cells</span>
          <p>designer @sporteo</p>
          <button class="button">follow</button>
        </div>
      </div>
      <div class="content__user columns">
        <div class="column is-3">
          <figure>
            <img src="~/assets/user.jpg" alt="">
          </figure>
        </div>
        <div class="column user">
          <h4>Lucie Alfan</h4>
          <span>153 cells</span>
          <p>designer @sporteo</p>
          <button class="button">follow</button>
        </div>
      </div>
      <div class="content__user columns">
        <div class="column is-3">
          <figure>
            <img src="~/assets/user.jpg" alt="">
          </figure>
        </div>
        <div class="column user">
          <h4>Lucie Alfan</h4>
          <span>153 cells</span>
          <p>designer @sporteo</p>
          <button class="button">follow</button>
        </div>
      </div>
      <div class="content__user columns">
        <div class="column is-3">
          <figure>
            <img src="~/assets/user.jpg" alt="">
          </figure>
        </div>
        <div class="column user">
          <h4>Lucie Alfan</h4>
          <span>153 cells</span>
          <p>designer @sporteo</p>
          <button class="button">follow</button>
        </div>
      </div>
      <div class="content__user columns">
        <div class="column is-3">
          <figure>
            <img src="~/assets/user.jpg" alt="">
          </figure>
        </div>
        <div class="column user">
          <h4>Lucie Alfan</h4>
          <span>153 cells</span>
          <p>designer @sporteo</p>
          <button class="button">follow</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'popularUsers'
}
</script>

<style lang="scss">
.popularUsers {
  .title {
    font-family: 'Futura Bold';
    font-size: 1.2rem;
    margin-top: 1rem;
    color: black;
  }
  .popularsUsers__content {
    background: #ffffff;
    border-radius: 10px;
    padding: 1.5rem 1rem;
    .content__user {
      .user {
        h4 {
          font-family: 'Futura Bold';
          font-size: 0.9rem;
          color: #000000;
          display: inline-block;
        }
        span {
          font-size: 0.8rem;
          color: #9b9b9b;
          letter-spacing: 0.21px;
          float: right;
        }
        p {
          font-size: 0.9rem;
          color: #8b8b8b;
        }
        button {
          border: 2px solid #732ffb;
          border-radius: 98px;
          font-family: 'Futura Bold';
          font-size: 0.7rem;
          color: #732ffb;
          text-align: center;
          margin-top: 0.3rem;
        }
      }
    }
  }
}
</style>
