<template>
  <section class='lstnrWeek week'>
    <h3 class="title">
      lstnr of the week
    </h3>
    <div class="week__content columns">
      <div class="content__left column is-4">
        <div class="left__header">
          <div class="header__people">
            <b-icon icon="account-multiple">
            </b-icon>
            12034
          </div>
          <div class="header__ideas">
            <b-icon icon="lightbulb-on">
            </b-icon>
            124
          </div>
        </div>
        <div class="left__img">
          <img src="~/assets/discord.jpg" alt="">
        </div>
        <div class="left__name">Discord</div>
        <div class="left__cat">
          <div class="cat">
            Gaming
          </div>
        </div>
      </div>
      <div class="content__ideas column is-4">
        <p class="title">Last ideas</p>
        <div class="ideas__content">
          <div class="idea columns">
            <div class="column idea__img is-2">
              <img src="~/assets/idea.jpg" alt="">
            </div>
            <div class="column idea__content is-8">
              <p>Let users set timers</p>
              <span>
                <b-icon icon="chevron-up" size="is-small">
                </b-icon>
                34
              </span>
              <span>
                <b-icon icon="message-reply" size="is-small">
                </b-icon>
                5
              </span>
            </div>
            <div class="column idea__link is-2">
              <img src="~/assets/arrow.jpg" alt="">
            </div>
          </div>
          <div class="idea columns">
            <div class="column idea__img is-2">
              <img src="~/assets/idea.jpg" alt="">
            </div>
            <div class="column idea__content is-8">
              <p>Let users set timers</p>
              <span>
                <b-icon icon="chevron-up" size="is-small">
                </b-icon>
                34
              </span>
              <span>
                <b-icon icon="message-reply" size="is-small">
                </b-icon>
                5
              </span>
            </div>
            <div class="column idea__link is-2">
              <img src="~/assets/arrow.jpg" alt="">
            </div>
          </div>
          <div class="idea columns">
            <div class="column idea__img is-2">
              <img src="~/assets/idea.jpg" alt="">
            </div>
            <div class="column idea__content is-8">
              <p>Let users set timers</p>
              <span>
                <b-icon icon="chevron-up" size="is-small">
                </b-icon>
                34
              </span>
              <span>
                <b-icon icon="message-reply" size="is-small">
                </b-icon>
                5
              </span>
            </div>
            <div class="column idea__link is-2">
              <img src="~/assets/arrow.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="content__article column is-4">
        <p class="title">Last ideas</p>
        <div class="content">
          <h3>How did discord conquer vocal gaming?</h3>
          <p>
            Discord has won over 2 billion users in only 3 years, thanks to its interface and its one-of-a-kind communication. Let’s dig into it.
          </p>
          <button class="button">read</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'lstnrWeek'
}
</script>

<style lang="scss">
.week {
  .title {
    font-family: 'Futura Bold';
    font-size: 1.2rem;
    margin-top: 1rem;
    color: black;
  }
  .week__content {
    margin: 0;
    border-radius: 8px;
    .content__left {
      border-radius: 8px 0 0 8px;
      background-color: #7289da;
      color: white;
      padding: 1rem;
      .left__header {
        display: flex;
        justify-content: space-between;
      }
      .left__img {
        margin: 1rem 0;
        text-align: center;
        img {
          width: 40%;
          border-radius: 8px;
          box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
        }
      }
      .left__name {
        text-align: center;
        font-family: 'Futura Bold';
      }
      .left__cat {
        display: flex;
        justify-content: center;
        font-family: 'Futura Bold';
        .cat {
          width: 50%;
          height: 1.5rem;
          line-height: 1.5rem;
          font-family: 'Futura Bold';
          color: #7289da;
          text-align: center;
          text-transform: uppercase;
          font-size: 0.7rem;
          margin: 1rem 0;
          background-color: white;
          border-radius: 23px;
        }
      }
    }
    .content__ideas {
      background-color: #fff;
      .title {
        font-size: 0.8rem;
      }
      .ideas__content {
        display: flex;
        align-items: center;
        padding: 0;
        flex-direction: column;
        .idea {
          margin: 0.5rem 0;
          .idea__img {
            display: flex;
            align-items: center;
          }
          .idea__content {
            padding: 0;
            p {
              padding: 0;
              font-size: 0.9rem;
              font-family: 'Futura Bold';
              color: black;
            }
          }
          .idea__link {
            cursor: pointer;
          }
        }
      }
    }
    .content__article {
      background-color: #fff;
      border-radius: 0 8px 8px 0;
      .title {
        font-size: 0.8rem;
      }
      .content {
        h3 {
          font-family: 'Futura Bold';
          font-size: 1rem;
        }
        p {
          font-size: 0.9rem;
        }
        button {
          width: 50%;
          height: 2rem;
          text-transform: uppercase;
          border: 3px solid #732ffb;
          border-radius: 40px;
          font-family: 'Futura Bold';
          font-size: 0.7rem;
          line-height: 0.7rem;
          color: #732ffb;
          letter-spacing: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
