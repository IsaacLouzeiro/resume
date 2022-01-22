<template>
    <section>
        <h2>{{ title }}</h2>
        <p><font-awesome-icon :icon="['fas', 'phone-alt']" class="icon"/><a>{{ tel }}</a></p>
        <p><font-awesome-icon :icon="['fas', 'envelope']" class="icon"/><a>{{ mail }}</a></p>
        <p><font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon"/><a :href="linkedin" target="_blank">{{ linkedin }} <font-awesome-icon :icon="['fas', 'external-link-alt']"/></a></p>
        <p><font-awesome-icon :icon="['fab', 'github']" class="icon"/><a :href="github" target="_blank">{{ github }} <font-awesome-icon :icon="['fas', 'external-link-alt']"/></a></p>
    </section>
</template>

<script>
export default {
    name: 'ContactComp',
    props: {
        title: String,
        tel: String,
        mail: String,
        linkedin: String,
        github: String
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/colors.scss';

    section {
        p {
            padding: 5px 0;
            display: flex;
            align-items: center;

            .icon {
                background-color: $color4;
                color: $color5;
                padding: 3px;
                border-radius: 3px;
                font-size: 1.5em;
                width: 25px;
                height: 25px;
                margin-right: 10px;
            }
        }
    }
</style>