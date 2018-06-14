<template>
  <section class='popularUsers'>
    <h3 class="title">
      🧠 Thinkers of the week
    </h3>
    <div class="popularsUsers__content">
      <div class="content__user columns">
        <div class="column is-3">
          <figure>
            <img src="~/assets/user.jpg" alt="">
          </figure>
        </div>
        <div class="column user">
          <h4>Léo Loriol</h4>
          <span>432 <img src="~/assets/karma.jpg" alt=""></span>
          <p>Student @hetic - Cofounder, lstnr</p>
        </div>
        <div class="column is-2">
          <img src="~/assets/arrow.png" alt="">
        </div>
      </div>
      <div class="content__user columns">
        <div class="column is-3">
          <figure>
            <img src="~/assets/user.jpg" alt="">
          </figure>
        </div>
        <div class="column user">
          <h4>Léo Loriol</h4>
          <span>432 <img src="~/assets/karma.jpg" alt=""></span>
          <p>Student @hetic - Cofounder, lstnr</p>
        </div>
        <div class="column is-2">
          <img src="~/assets/arrow.png" alt="">
        </div>
      </div>
      <div class="content__user columns">
        <div class="column is-3">
          <figure>
            <img src="~/assets/user.jpg" alt="">
          </figure>
        </div>
        <div class="column user">
          <h4>Léo Loriol</h4>
          <span>432 <img src="~/assets/karma.jpg" alt=""></span>
          <p>Student @hetic - Cofounder, lstnr</p>
        </div>
        <div class="column is-2">
          <img src="~/assets/arrow.png" alt="">
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
    padding: 1rem 1rem;
    .content__user {
      margin: 0;
      .is-3 {
        display: flex;
        justify-content: flex-end;
        margin-top: 0.5rem;
        figure {
          width: 24px;
        }
      }
      .is-2 {
        margin-top: 0.5rem;
        img {
          cursor: pointer;
          width: 24px;
        }
      }
      .user {
        padding: 0.2rem;
        h4 {
          font-family: 'Futura Bold';
          font-size: 0.9rem;
          color: #000000;
          display: inline-block;
        }
        span {
          margin-left: 0.5rem;
          font-family: 'Futura Bold';
          color: #732ffb;
          img {
            width: 13px;
          }
        }
        p {
          font-size: 0.9rem;
          color: #c9c9c9;
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
