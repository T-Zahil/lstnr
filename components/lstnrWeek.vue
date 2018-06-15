<template>
  <section class='lstnrWeek week'>
    <h3 class="title">
      😎 Lstnr of the week
    </h3>
    <div class="week__content columns">
      <div class="content__left column is-4">
        <div class="left__header">
        </div>
        <div class="left__name">
          <figure class="image is-96x96">
            <img src="http://api-lstnr.thomas-sanlis.com/uploads/f375e61b59ff4e2fba22a4007a9cca08.png" alt="">
          </figure>
        </div>
        <div class="left__cat">
          <div class="cat">
            Gaming
          </div>
        </div>
      </div>
      <div class="content__ideas column is-8">
        <div class="ideas__content">
          <div class="idea columns">
            <div class="column idea__img is-2">
              <img src="~/assets/idea.jpg" alt="">
            </div>
            <div class="column idea__content is-8">
              <div class="tag soon">soon</div>
              <p>Disable explicit image filtering for bot accounts</p>
              <span>
                <b-icon icon="chevron-up" size="is-small">
                </b-icon>
                upvote (34)
              </span>
              <span>
                <b-icon icon="message-reply" size="is-small">
                </b-icon>
                reply (93)
              </span>
            </div>
          </div>
          <div class="idea columns">
            <div class="column idea__img is-2">
              <img src="~/assets/idea.jpg" alt="">
            </div>
            <div class="column idea__content is-8">
              <div class="tag soon">soon</div>
              <p>Keep @someone</p>
              <span>
                <b-icon icon="chevron-up" size="is-small">
                </b-icon>
                upvote (34)
              </span>
              <span>
                <b-icon icon="message-reply" size="is-small">
                </b-icon>
                reply (93)
              </span>
            </div>
          </div>
          <div class="idea columns">
            <div class="column idea__img is-2">
              <img src="~/assets/idea.jpg" alt="">
            </div>
            <div class="column idea__content is-8">
              <div class="tag delayed">delayed</div>
              <p>Track who joined throught what invite</p>
              <span>
                <b-icon icon="chevron-up" size="is-small">
                </b-icon>
                upvote (34)
              </span>
              <span>
                <b-icon icon="message-reply" size="is-small">
                </b-icon>
                reply (93)
              </span>
            </div>
          </div>
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px 0 0 8px;
      background-color: #7289da;
      color: white;
      padding: 1rem;
      .left__header {
        display: flex;
        justify-content: space-between;
      }
      .left__name {
        display: flex;
        font-family: 'Futura Bold';
        justify-content: center;
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
      }
      .left__cat {
        width: 100%;
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
      border-radius: 0 8px 8px 0;
      .title {
        font-size: 0.8rem;
      }
      .ideas__content {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        flex-direction: column;
        .idea {
          width: 100%;
          margin: 0;
          .idea__img {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            width: 54px;
            height: 54px;
            margin-right: 0.3rem;
          }
          .idea__content {
            padding: 0;
            .soon {
              background-color: #22c79a;
            }
            .delayed {
              background-color: #f6c5a2;
            }
            div {
              font-family: 'Futura Bold';
              font-size: 0.5rem;
              color: #ffffff;
              text-transform: uppercase;
              border-radius: 2px;
              margin-bottom: 0.25rem;
            }
            p {
              padding: 0;
              font-size: 0.8rem;
              font-family: 'Futura Bold';
              color: black;
            }
            span {
              font-family: 'Futura Bold';
              font-size: 0.6rem;
              color: #e0e0e0;
              text-transform: uppercase;
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
