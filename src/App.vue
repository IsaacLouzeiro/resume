<template>
    <section id="paper">
        <HeaderComp :nome="nome" :nomeCompleto="nomeCompleto" :idade="idade" :local="local" :profissao="profissao" />
        <ContactComp :title="titleContact" :tel="tel" :mail="mail" :linkedin="linkedin" :github="github" />
        <EducationComp :title="titleEducation"/>
    </section>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import ContactComp from './components/ContactComp.vue';
import EducationComp from './components/EducationComp.vue';

export default {
    name: 'App',
    data() {
        return {
            // HeaderComp.vue
            nome: 'Isaac Louzeiro',
            nomeCompleto: 'Isaac Elias Louzeiro Silva das Virgens',
            idade: '19 anos',
            local: 'São Paulo, SP',
            profissao: 'Desenvolvedor Front-End Jr',
            // ContactComp.vue
            titleContact: 'INFORMAÇÕES DE CONTATO',
            tel: '(11) 95341-7083',
            mail: 'isaacelias1110@gmail.com',
            linkedin: 'linkedin.com/in/isaac-louzeiro/',
            github: 'github.com/IsaacLouzeiro/',
            // EducationComp.vue
            titleEducation: 'FORMAÇÃO'
        }
    },
    components: {
        HeaderComp,
        ContactComp,
        EducationComp
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

    h2 {
        font-size: 1.1em;
        margin-bottom: .5em;

        @media only screen and (max-width: 650px) {
            font-size: 1em;
        }
    }
</style>