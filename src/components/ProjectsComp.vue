<template>
    <section class="projectsComp">
        <h2>{{ title }}</h2>
        <p>{{ subTitle }} <a :href="website" target="_blank">Site <font-awesome-icon :icon="['fas', 'link']" /></a> ou <a :href="github" target="_blank">Github <font-awesome-icon :icon="['fas', 'link']" /></a></p>
    
        <ul>
            <li v-for="item in projects" :key="item.projects">
                <div class="flex">
                    <span>{{ item.titleProject }} - {{ item.dateProject }}</span>
                    <a v-if="item.typeLink == 'site'" class="linkProject" :href="item.linkProject" target="_blank"><font-awesome-icon :icon="['fas', 'window-maximize']" /><font-awesome-icon :icon="['fas', 'link']" class="link" /></a>
                    <a v-else class="linkProject" :href="item.linkProject" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /><font-awesome-icon :icon="['fas', 'link']" class="link" /></a>
                </div>
                <p>{{ item.descProject }}</p>

                <ul>
                    <li class="titleExp">Experiência:</li>
                    <li style="word-spacing: 7px;">{{ item.expProject }}</li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    nome: 'ProjectsComp',
    data() {
        return {
            projects: [
                {
                    linkProject: 'https://www.alivisual.com.br/',
                    titleProject: 'ALIVISUAL',
                    dateProject: '11/2021',
                    descProject: 'O site foi criado para a Alivisual, uma produtora de audiovisual e fotografia de São Paulo.',
                    expProject: 'HTML ' + 'CSS ' + 'SASS ' + 'Bootstrap ' + 'JavaScript ' + 'PHP ' + 'Adobe_XD ' + 'Git ' + 'Github ' + 'SEO',
                    typeLink: 'site'
                },
                {
                    linkProject: 'https://github.com/IsaacLouzeiro/economie',
                    titleProject: 'DEMODAY',
                    dateProject: '7/2021',
                    descProject: 'Ajudar os consumidores na administração dos seus gastos e rendimentos, calculando o que entra e o que sai de maneira clara e intuitiva e consequentemente, reverter o quadro de desinformação que endivida excessivamente grande parte da população.',
                    expProject: 'HTML ' + 'CSS ' + 'JavaScript ' + 'MySQL ' + 'Adobe_XD ' + 'Git ' + 'Github ' + 'Scrum ' + 'Trello',
                    typeLink: 'github'
                },
                {
                    linkProject: 'https://github.com/IsaacLouzeiro/petshop-tcc',
                    titleProject: 'TRABALHO DE CONCLUSÃO DE CURSO | ETEC',
                    dateProject: '12/2020',
                    descProject: 'Sistema de petshop para uma empresa fictícia, voltado à venda de produtos a animais domésticos, e o cadastro de pets para o serviço de banho e tosa, além do site institucional da empresa.',
                    expProject: 'HTML ' + 'CSS ' + 'Bootstrap ' + 'JavaScript ' + 'MySQL ' + 'Asp.Net ' + 'Scrum ' + 'Trello',
                    typeLink: 'github'
                }
            ]
        }
    },
    props: {
        title: String,
        subTitle: String,
        website: String,
        github: String
    }
}
</script>

<style lang="scss" scoped>
    section {
        ul {
            margin: 20px 0;
            list-style-type: none;

            li {
                margin: 10px 0;

                .flex {
                    display: flex;
                    justify-content: space-between;

                    span {
                        font-weight: 500;
                        margin-bottom: 5px;
                    }

                    a {
                        font-size: 1.3em;
                        display: flex;
                        align-items: center;

                        .link {
                            margin-left: 2px;
                            font-size: .6em;
                        }
                    }
                }

                ul {
                    margin: 0;
                    margin-bottom: 25px;

                    li {
                        font-weight: 500;
                    }

                }
            }
        }
    }
</style>