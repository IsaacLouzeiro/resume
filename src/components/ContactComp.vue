<template>
    <section class="contactComp">
        <h2>{{ title }}</h2>
        <p><font-awesome-icon :icon="['fas', 'envelope']" class="icon"/><a>{{ mail }}</a></p>
        <p><font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon"/><a :href="linkedin" target="_blank">{{ linkedin }} <font-awesome-icon :icon="['fas', 'external-link-alt']"/></a></p>
        <p><font-awesome-icon :icon="['fab', 'medium']" class="icon"/><a :href="medium" target="_blank">{{ medium }} <font-awesome-icon :icon="['fas', 'external-link-alt']"/></a></p>
        <p><font-awesome-icon :icon="['fab', 'github']" class="icon"/><a :href="github" target="_blank">{{ github }} <font-awesome-icon :icon="['fas', 'external-link-alt']"/></a></p>
        <p><font-awesome-icon :icon="['fas', 'window-maximize']" class="icon"/><a :href="website" target="_blank">{{ website }} <font-awesome-icon :icon="['fas', 'external-link-alt']"/></a></p>
    </section>
</template>

<script>
export default {
    name: 'ContactComp',
    props: {
        title: String,
        mail: String,
        linkedin: String,
        github: String,
        website: String,
        medium: String
    }
}
</script>

<style lang="scss" scoped>
    section {
        p {
            padding: 5px 0;
            margin: 0;
            display: flex;
            align-items: center;

            .icon {
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