<template>
    <section class="skillsComp">
        <h2>{{ title }}</h2>
        <ul>
            <li v-for="item in skills" :key="item.skills">
                <span>{{ item.typeSkill }}: <span>{{ item.nameSkill }}</span></span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'SkillsComp',
    data() {
        return {
            skills: [
                {
                    typeSkill: 'Idioma',
                    nameSkill: 'Inglês (A2 Básico - Elementar)'
                },
                {
                    typeSkill: 'Desenvolvimento Web',
                    nameSkill: 'HTML, ' + 'CSS, ' + 'SASS, ' + 'Bootstrap, ' + 'JavaScript, ' + 'Vue JS, ' + 'SEO'
                },
                {
                    typeSkill: 'Banco de Dados',
                    nameSkill: 'SQL, ' + 'MySQL'
                },
                {
                    typeSkill: 'Design',
                    nameSkill: 'Photoshop, ' + 'Adobe XD, ' + 'Inkscape'
                },
                {
                    typeSkill: 'Versionamento de código',
                    nameSkill: 'Git, ' + 'Github'
                },
                {
                    typeSkill: 'Metodologia ágil',
                    nameSkill: 'Scrum, ' + 'Trello'
                },
                {
                    typeSkill: 'Sistema operacional',
                    nameSkill: 'Linux, ' + 'Windows, ' + 'MacOS'
                }
            ]
        }
    },
    props: {
        title: String,
        subTitle: String
    }
}
</script>

<style lang="scss" scoped>
    section {
        ul {
            padding: 0;
            list-style-type: none;
            
            li {
                margin: 5px 0;
            }
        }
    }
</style>