<template>
    <section>
        <h2>{{ title }}</h2>

        <div v-for="item in formacao" :key="item.formacao" class="education">
            <h4 v-show="item.nomeGrad != ''">{{ item.nomeGrad }} - {{ item.dataInicio }} a {{ item.dataFim }}</h4>
            <p v-show="item.nomeGrad != ''">{{ item.tipoGrad }}</p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            nome: 'EducationComp',
            formacao: [
            {
                nomeGrad: 'ETEC PROF. BASILIDES DE GODOY',
                tipoGrad: 'Técnico em Desenvolvimento de Sistemas',
                dataInicio: '07/2019',
                dataFim: '12/2020'
            }
            ]
        }
    },
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/colors.scss';

    section {
        padding: 1.2em 0;
        border-bottom: 1px solid $color4;

        .education {
            margin-bottom: 10px;
            h4 {
                font-size: .95em;
                font-weight: 500;
                margin-top: 10px;
                margin-bottom: 5px;
            }
        }

    }
</style>