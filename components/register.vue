<template>
    <section>
        <button class="button is-primary is-medium" @click="cardModal()">
            Sign up
        </button>
    </section>
</template>

<script>
    import FormRegister from './formRegister.vue';
    export default {
        components: {
          FormRegister
        },
        methods: {
            cardModal() {
                this.$modal.open({
                    parent: this,
                    component: FormRegister,
                    hasModalCard: true
                })
            }
        }
    }
</script>
