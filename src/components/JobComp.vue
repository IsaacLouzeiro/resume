<template>
    <section class="jobComp">
        <h2>{{ title }}</h2>

        <p class="subtitle">{{ subTitle }} <a :href="linkedin" target="_blank">Linkedin <font-awesome-icon :icon="['fas', 'link']" class="icon"/></a></p>

        <ul>
            <li v-for="item in jobs" :key="item.jobs">
                <span>{{ item.titleJob }} - {{ item.startJob }} a <span v-show="item.endJob == ''">Atualmente</span> {{ item.endJob }}</span>

                <p>{{ item.instJob }}</p>

                <p>{{ item.descJob }}</p>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    name: 'JobComp',
    data() {
        return {
            jobs: [
                {
                    titleJob: 'EXPERT EM INTERAÇÃO ELETRONICO',
                    startJob: '09/2022',
                    endJob: 'Atualmente',
                    instJob: 'Teleperformance',
                    descJob: 'Atendimento Multiskill (Voz, Chat, E-mail e Whatsapp); Realizar um atendimento direcionado aos clientes que utilizam o serviço de bilhetagem eletrônica.',
                },
                {
                    titleJob: 'JOVEM APRENDIZ',
                    startJob: '10/2021',
                    endJob: '08/2022',
                    instJob: 'Ultrafarma',
                    descJob: 'Ajudar os clientes quando é necessário e colegas de trabalho em suas funções, organizar os produtos nas prateleiras, entre outras funções da área de Comércio e Varejo.',
                },
                {
                    titleJob: 'DESENVOLVEDOR WEB FREELANCER',
                    startJob: '04/2022',
                    endJob: '07/2022',
                    instJob: 'Favela Jiu-Jitsu',
                    descJob: 'Responsável por gerenciar, criar funcionalidades e dar manutenções no site, favelajiujitsu.com e favelajiujitsu.com.br',
                }
            ]
        }
    },
    props: {
        title: String,
        subTitle: String,
        linkedin: String
    },
}
</script>

<style lang="scss" scoped>

    section {
        ul {
            padding: 0;
            margin-top: 5px;
            list-style-type: none;

            li {
                padding: 8px 0;

                span {
                    font-weight: 500;
                }

                a {
                    font-size: 1.2em;
                    cursor: pointer;
                }
                p {
                    margin: 0px;
                    margin-bottom: 5px;
                }
            }
        }
    }
</style>