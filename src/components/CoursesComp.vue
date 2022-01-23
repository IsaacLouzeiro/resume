<template>
    <section class="coursesComp">
        <div id="modal">
            <font-awesome-icon :icon="['fas', 'window-close']" class="closeBtn" @click="modalClose" />
            <hr/>
            <div>
                <a :href="link1" target="_blank">Instituto Proa <br> <font-awesome-icon :icon="['fas', 'print']" /></a>
                <a :href="link2" target="_blank">Senac <br> <font-awesome-icon :icon="['fas', 'print']" /></a>
            </div>
        </div>


        <h2>{{ title }}</h2>
        <p>{{ subTitle }} <a :href="linkedin" target="_blank">Linkedin <font-awesome-icon :icon="['fas', 'link']" class="icon"/></a></p>
    
        <ul>
            <li v-for="item in courses" :key="item.courses">
                <div class="flex">
                    <span>{{ item.titleCourse }} - {{ item.startCourse }} <span v-show="item.endCourse != ''">a</span> {{ item.endCourse }}</span>
                    <a v-if="item.pdfCourse == ''" @click="modalScreen"><font-awesome-icon :icon="['fas', 'print']" /></a>
                    <a v-else :href="item.pdfCourse" target="_blank"><font-awesome-icon :icon="['fas', 'print']" /></a>
                </div>
                <p class="courseLoad">{{ item.instCourse }} - Carga horária {{ item.loadCourse }}</p>
                <p>{{ item.descCourse }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'CoursesComp',
    data() {
        return {
            link1: 'https://drive.google.com/file/d/157c1HMG3432ZdBmELVzHVsQuTrjINUkl/view?usp=sharing',
            link2: 'https://drive.google.com/file/d/11W5p16WwlpRrYhbBoQp0DU8araZL3jpe/view?usp=sharing',
            courses: [
                {
                    pdfCourse: 'https://drive.google.com/file/d/1ijyNb_BU0kDiRzmmZCFB3F7erWeJHAXT/view?usp=sharing',
                    titleCourse: 'CURSO DE INGLÊS',
                    startCourse: '07/2021',
                    endCourse: '12/2021',
                    instCourse: 'Soul Bilíngue',
                    loadCourse: '100h',
                    descCourse: 'Aulas de língua inglesa, de acordo com o meu nível A2 Elementary, qualificado pelo EF English Live.'
                },
                {
                    pdfCourse: '',
                    titleCourse: 'CURSO PROPROFISSÃO 4.0',
                    startCourse: '03/2021',
                    endCourse: '07/2021',
                    instCourse: 'Instituto PROA, Senac',
                    loadCourse: '440h',
                    descCourse: 'Curso Profissionalizante voltado à Programação Web em Java.'
                },
                {
                    pdfCourse: 'https://drive.google.com/file/d/1t08QwElau5zyzVphI4nDzqiFskIj6r1f/view?usp=sharing',
                    titleCourse: 'MELHOR ALUNO EVOLUÇÃO EM DESENVOLVIMENTO',
                    startCourse: '12/2020',
                    endCourse: '',
                    instCourse: 'ETEC Professor Basilídes de Godoy',
                    loadCourse: '440h',
                    descCourse: 'Certificado de reconhecimento, pelo meu esforço e dedicação ao decorrer do curso.'
                }
            ]
        }
    },
    props: {
        title: String,
        subTitle: String,
        linkedin: String
    },
    methods: {
        modalScreen() {
            setTimeout(() => {
                document.getElementById('modal').style.top = "0";
                document.getElementById('modal').style.opacity = "1";        
            }, 500)
            document.getElementById('modal').style.display = "flex";
        },
        modalClose() {
            document.getElementById('modal').style.top = "150px";
            document.getElementById('modal').style.opacity = "0";
            setTimeout(() => {
                document.getElementById('modal').style.display = "none";
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
    section {
        position: relative;

        #modal {
            max-width: 260px;
            height: 150px;
            border-radius: 3px;
            position: absolute;
            top: 150px;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            display: none;
            justify-content: space-evenly;
            align-items: center;
            transition: 0.5s;
            flex-wrap: wrap;
            opacity: 0;

            .closeBtn {
                font-size: 1.7em;
                align-self: center;
                cursor: pointer;

                &:hover {
                    opacity: .8;
                }
            }

            hr {
                width: 100%;
                align-self: start;
            }

            div {
                align-self: flex-start;
                display: flex;
                justify-content: space-around;
                width: 100%;
                a {
                    display: inline-block;
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-weight: 500;
                    text-align: center;
    
                    &:hover {
                        opacity: .8;
                    }
                }
            }
        }
        
        ul {
            padding: 0;
            margin-top: 5px;
            list-style-type: none;

            li {
                padding: 8px 0;

                .flex {
                    display: flex;
                    justify-content: space-between;

                    span {
                        font-weight: 500;
                    }

                    a {
                        font-size: 1.2em;
                        cursor: pointer;
                    }
                }

                .courseLoad {
                    margin: -3px 0;
                }
                p {
                    margin-top: 8px;
                }
            }
        }
    }
</style>