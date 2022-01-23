<template>
    <section id="paper" class="row g-0">
        <div class="col-12">
            <HeaderComp :nome="nome" :nomeCompleto="nomeCompleto" :idade="idade" :local="local" :profissao="profissao" />
        </div>
        <div class="row col-12 col-md-6 g-0 p-0 pe-md-2">
            <ContactComp :title="titleContact" :tel="tel" :mail="mail" :linkedin="linkedin" :github="github" />
            <ProjectsComp class="d-none d-md-block" :title="titleProjects" :subTitle="subTitleProjects" :website="website" :github="github" />
        </div>

        <div class="row h-25 col-12 col-md-6 g-0 p-0 ps-md-2">
            <EducationComp :title="titleEducation"/>
            <SkillsComp :title="titleSkills" />
            <CoursesComp :title="titleCourses" :subTitle="subTitleCourses" :linkedin="linkedin" />
            <ProjectsComp class="d-block d-md-none" :title="titleProjects" :subTitle="subTitleProjects" :website="website" :github="github" />
        </div>
    </section>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import ContactComp from './components/ContactComp.vue';
import EducationComp from './components/EducationComp.vue';
import SkillsComp from './components/SkillsComp.vue';
import CoursesComp from './components/CoursesComp.vue';
import ProjectsComp from './components/ProjectsComp.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
            linkedin: 'https://linkedin.com/in/isaac-louzeiro/',
            github: 'https://github.com/IsaacLouzeiro/',
            website: 'https://isaaclouzeiro.github.io/portfolio/',
            // EducationComp.vue
            titleEducation: 'FORMAÇÃO',
            // SkillsComp.vue
            titleSkills: 'HABILIDADES E COMPETÊNCIAS',
            // CoursesComp.vue
            titleCourses: 'CURSOS E QUALIFICAÇÕES',
            subTitleCourses: 'Caso queira ver mais informações ou certificações obtidas, acesse o meu ',
            // ProjectsComp.vue
            titleProjects: 'PROJETOS',
            subTitleProjects: 'Abaixo estão três projetos relevantes do meu portfolio. Caso queira ver mais, acesse o meu '
            
        }
    },
    components: {
        HeaderComp,
        ContactComp,
        EducationComp,
        SkillsComp,
        CoursesComp,
        ProjectsComp
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
        transition: .5s;
    }
    
    #app {
        padding: 2em 0;
        display: flex;
        justify-content: center;

        @media only screen and (max-width: 794px) {
            padding: 0;
        }
    }

    #paper {
        width: 100%;
        max-width: 794px;
        min-height: 1123px;
        padding: 1.7em;
        border: none;

        @media only screen and (max-width: 768px) {
            height: 100%;
            padding: 1.3em 10px;
        }
    }

    section {
        padding: 1.2em 0;

        h2 {
            font-size: 1.2em;
            margin-bottom: .5em;

            @media only screen and (max-width: 768px) {
                font-size: 1.1em;
            }
        }

        a {
            text-decoration: none;
            cursor: pointer;
            transition: 0.2s;
        }
        float: left;
    }
</style>