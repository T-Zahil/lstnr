<template>
  <div class='footer'>
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <nuxt-link to="/">
            <img src="~/assets/logo.png">
          </nuxt-link>
        </div>
        <div class="column is-4">
          <div class="columns">
            <div class="column">
              <ul>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Bug reports</a>
                </li>
                <li>
                  <a href="">Our roadmap</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>
            <div class="column">
              <ul>
                <li>
                  <a href="">Code of conducts</a>
                </li>
                <li>
                  <a href="">Privacy policy</a>
                </li>
                <li>
                  <a href="">Terms of service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss">
.footer {
  margin-top: 3rem;
  background-color: #fff;
  padding: 2.5rem;
  .is-8 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 4rem;
    }
  }
  .is-4 {
    ul {
      li {
        a {
          font-family: 'Futura Bold';
          font-size: 0.9rem;
          color: #1f1f1f;
        }
      }
    }
  }
}
</style>
