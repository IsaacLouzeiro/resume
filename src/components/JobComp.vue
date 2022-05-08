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
                    titleJob: 'DESENVOLVEDOR WEB FREELANCER',
                    startJob: '04/2022',
                    endJob: '',
                    instJob: 'Favela Jiu-Jitsu',
                    descJob: 'Responsável por gerenciar, criar funcionalidades e dar manutenções no site, favelajiujitsu.com e favelajiujitsu.com.br',
                },
                {
                    titleJob: 'JOVEM APRENDIZ',
                    startJob: '10/2021',
                    endJob: '',
                    instJob: 'Ultrafarma',
                    descJob: 'Trabalho com reposição de mercadorias; Crio etiquetas de alteração de preços; Ajudo os colegas de trabalho em diversas tarefas; Auxilio os clientes na loja.',
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