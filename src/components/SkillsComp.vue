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
                    nameSkill: 'Inglês (B2 Upper Intermediate)'
                },
                {
                    typeSkill: 'Desenvolvimento Web',
                    nameSkill: 'HTML, ' + 'CSS, ' + 'SCSS, ' + 'Bootstrap, ' + 'JavaScript, ' + 'TypeScript, ' + 'VueJS, ' + 'Angular, ' + 'Wordpress'
                },
                {
                    typeSkill: 'Gerenciador de Pacotes',
                    nameSkill: 'NPM'
                },
                {
                    typeSkill: 'Versionamento de código',
                    nameSkill: 'Git, ' + 'Github'
                },
                {
                    typeSkill: 'Design',
                    nameSkill: 'UI/UX, ' + 'Photoshop, ' + 'Adobe XD, ' + 'Figma'
                },
                {
                    typeSkill: 'Banco de Dados',
                    nameSkill: 'SQL, ' + 'MySQL'
                },
                {
                    typeSkill: 'Metodologia ágil',
                    nameSkill: 'Scrum'
                },
                {
                    typeSkill: 'Ferramenta ágil',
                    nameSkill: 'Trello,     ' + 'Asana'
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