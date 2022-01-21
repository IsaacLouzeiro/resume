<template>
    <section id="paper">
        <HeaderComp />
        <ContactComp />
    </section>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import ContactComp from './components/ContactComp.vue';

export default {
    name: 'App',
    components: {
        HeaderComp,
        ContactComp
    }
}
</script>

<style lang="scss">
    @import './assets/sass/colors.scss';

    * { 
        margin: 0; 
        padding: 0;
        -moz-box-sizing: border-box; 
        -webkit-box-sizing: border-box; 
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }

    body, html, #app {
        min-height: 100%;
    }
    
    #app {
        background-color: $color3;
        color: $color1;
        padding: 2em 0;
        display: flex;
        justify-content: center;

        @media only screen and (max-width: 794px) {
            padding: 0;
        }
    }

    #paper {
        background-color: $color5;
        width: 100%;
        max-width: 794px;
        height: 1123px;
        padding: 1.7em;

        @media only screen and (max-width: 650px) {
            padding: 10px;
        }
    }
</style>