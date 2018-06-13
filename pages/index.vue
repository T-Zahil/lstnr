<template>
  <section>
    <the-Menu></the-Menu>
    <div class="columns header">
      <section class="hero column is-7">
        <div class="hero-body">
          <h1 class="title">
            Tell your favorite products what you want to see next !
          </h1>
          <div class="subtitle">
            <p>Share your ideas and vote for your favorite ones.</p>
            <p>lstnr provides a one of a kind dialog between online products and their caring users.</p>
            <p>Challenge ideas, interract with teams and see what’s coming to constantly improve the products you love.</p>
            <div>
              <button class="button">join lstnr</button>
              <span>or</span>
              <button class="button">add a product</button>
            </div>
          </div>
        </div>
      </section>
      <div class="column is-1"></div>
      <div class="column is-4 level">
        <img src="~/assets/hero.png" alt="" class="level-item">
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="columns">
          <div class="column is-9">
            <section class="week">
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
          </div>
          <div class="colum is-3">

          </div>
        </div>
        <section class="columns">
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
          <div class="column">
            <listener-card></listener-card>
          </div>
          <div class="column">
            <listener-card></listener-card>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import theMenu from '~/components/theMenu.vue'
import listenerCard from '~/components/listenerCard.vue'
export default {
  components: {
    theMenu,
    listenerCard
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Futura';
  src: url('../static/fonts/FuturaStd-Book.otf') format('truetype');
}
@font-face {
  font-family: 'Futura Bold';
  src: url('../static/fonts/FuturaStd-Bold.otf') format('truetype');
}

* {
  font-family: 'Futura';
}

.header {
  padding: 7rem 0;
  margin-top: 6rem;
  background-image: url('../assets/hero-bg.jpg');
  background-size: 100%;
  .hero {
    .hero-body {
      margin-left: 3rem;
      .title {
        font-family: 'Futura Bold';
        color: white;
      }
      .subtitle {
        margin-top: 3rem;
        p {
          margin: 1rem 0;
          color: white;
        }
        div {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 3rem;
          color: white;
          button {
            width: 10rem;
            height: 2.3rem;
            border-radius: 20px;
            font-family: 'Futura Bold';
            line-height: 1.15rem;
            &:first-child {
              margin-right: 2rem;
              text-transform: uppercase;
              color: #732ffb;
            }
            &:last-child {
              color: white;
              background-color: transparent;
              margin-left: 2rem;
              border-width: 4px;
            }
          }
        }
      }
    }
  }
  .level {
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
.wrapper {
  background-color: #f7f7f7;
}
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
          border-radius: 23px;
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
