<template>
  <div class="card card-lstnr-profile">
    <div class="card-image" style="background-color: #738BD7">
      <figure class="image is-96x96">
        <img src="~/static/discord.jpg" alt="">
      </figure>
      <div class="card-image-title">
        Discord
      </div>
      <b-tag rounded style="color: #6441A4" type="is-white">Gaming</b-tag>
    </div>
    <div class="card-content">
      <div class="level">
        <div class="level-item">
          <p>821</p>
          <span>lstnrs</span>
        </div>
        <div class="level-item">
          <p>78</p>
          <span>feedbacks</span>
        </div>
      </div>
      <p class="content">
        All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.
      </p>
      <div class="additionnal-info">
        <div class="additionnal-item">
          <a href="#">
            <span>discordapp.com</span>
          </a>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <button class="card-footer-item button">Following</button>
    </footer>
  </div>
</template>

<style lang="scss">
.card-lstnr-profile {
  border-radius: 4px;
  .card-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 250px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    figure {
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
      img {
        border-radius: 10px;
      }
    }
    .card-image-title {
      font-family: 'Futura Bold';
      font-size: 1.5rem;
      color: #ffffff;
      margin: 1rem 0;
    }
    span {
      color: #738bd7;
      text-transform: uppercase;
      font-family: 'Futura Bold';
      padding: 0 1rem;
    }
  }
  .card-content {
    .level {
      .level-item {
        display: flex;
        flex-direction: column;
        p {
          font-family: 'Futura Bold';
          font-size: 1.4rem;
          color: #7289da;
        }
        span {
          font-family: 'Futura Bold';
          font-size: 0.8rem;
          color: #e0e0e0;
        }
      }
    }
    .content {
      font-size: 0.9rem;
    }
    .additionnal-item {
      a {
        span {
          font-family: 'Futura Bold';
          font-size: 0.8rem;
          color: #738bd7;
        }
      }
    }
  }
  .card-footer {
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    .card-footer-item {
      width: 90%;
      height: 2.5rem;
      background: #7289da;
      border-radius: 40px;
      font-family: 'Futura Bold';
      font-size: 0.9rem;
      color: #ffffff;
      flex-grow: 0;
      line-height: 0.5rem;
      margin-bottom: 1rem;
    }
  }
}
</style>