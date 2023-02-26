<template>
    <section class="educationComp">
        <h2>{{ title }}</h2>

        <div v-for="item in formacao" :key="item.formacao" class="education">
            <h4 v-show="item.nomeGrad != ''">{{ item.nomeGrad }} - {{ item.dataInicio }} a {{ item.dataFim }}</h4>
            <p v-show="item.nomeGrad != ''">{{ item.tipoGrad }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EducationComp',
    data() {
        return {
            nome: 'EducationComp',
            formacao: [
            {
                nomeGrad: 'FATEC - FACULDADE DE TECNOLOGIA DE FRANCO DA ROCHA',
                tipoGrad: 'Tecnólogo em Gestão da Tecnologia da Informação (TI)',
                dataInicio: '02/2023',
                dataFim: '12/2025'
            },
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
    section {
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