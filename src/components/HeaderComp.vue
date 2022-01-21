<template>
    <header>
        <div class="details">
            <h1>{{ nome }}</h1>
            <span>{{ nomeCompleto }}, {{ idade }} | {{ local }}</span>
            <h4>{{ profissao }}</h4>
        </div>
        <div class="image"></div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComp',
    data() {
        return {
            nome: 'Isaac Louzeiro',
            nomeCompleto: 'Isaac Elias Louzeiro Silva das Virgens',
            idade: '19 anos',
            local: 'São Paulo, SP',
            profissao: 'Desenvolvedor Front-End Jr'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/colors.scss';

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 1.5em;
        border-bottom: 1px solid $color4;

        .details {
            span {
                font-style: italic;
                color: $color3;
            }
            h4 {
                margin-top: 5px;
            }
        }

        .image {
            background-image: url('../assets/img/my-image.webp');
            background-size: cover;
            width: 130px;
            height: 130px;
            margin-left: 10px;
            border-radius: 100%;

            @media only screen and (max-width: 650px) {
                width: 100px;
                min-width: 100px;
                height: 100px;
            }
        }
    }
</style>