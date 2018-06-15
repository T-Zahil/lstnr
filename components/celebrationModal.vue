<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">🏆 Congrats 🏆</p>
    </header>
    <section class="modal-card-body">
        <figure class="image">
           <img class="modal-icon" src="https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png" alt="Trophy" />
        </figure>
        <div class="text-modal">You just gost your first point of karma</div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
    </footer>
  </div>
</template>

<script>
import { confetti } from 'dom-confetti';

export default {
  mounted() {
    setTimeout(this.yeah, 600);
  },
  methods: {
    yeah() {
      const icon = document.querySelector(".modal")
      console.log(icon);
      let confetti_colors = [
        '#E68F17',
        '#FAB005',
        '#FA5252',
        '#E64980',
        '#BE4BDB',
        '#0B7285',
        '#15AABF',
        '#EE1233',
        '#40C057'
      ];
      confetti(icon, {
          angle: 90,
          spread: 360,
          startVelocity: 60,
          elementCount: 200,
          decay: 0.82,
          colors: confetti_colors
      })
    }
  }
}
</script>

<style>
  .modal-card-title {
    font-family: 'Futura Bold';
  }
  .text-modal {
    font-family: 'Futura Bold';
    color:#7957d5;
  }

  .modal-card-body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .image{
    width:256px;
    margin-bottom: 20px;
  }
</style>

