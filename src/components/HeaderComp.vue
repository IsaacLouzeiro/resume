<template>
    <header class="headerComp">
        <div class="details">
            <!-- Rounded switch -->
            <label class="switch">
            <input @click="aboutTheme" type="checkbox">
            <span class="slider round"></span>
            </label>
            <h1>{{ nome }}</h1>
            <span>{{ nomeCompleto }} | {{ local }}</span>
            <h4>{{ profissao }}</h4>
        </div>
        <div class="image"></div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComp',
    props: {
        nome: String,
        nomeCompleto: String,
        local: String,
        profissao: String
    },
    created() {
        document.getElementById('global').classList.add('whiteTheme')
    },
    methods: {
        aboutTheme() {
            document.getElementById('global').classList.toggle('whiteTheme')
            document.getElementById('global').classList.toggle('blackTheme')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/colors.scss';

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 1.3em;

        .details {
            h1 {
                font-size: 1.8em;
                margin: 0;
                @media only screen and (max-width: 650px) {
                    font-size: 1.7em;
                }
            }
            
            span {
                font-style: italic;

                @media only screen and (max-width: 650px) {
                    font-size: .9em;
                }
            }
            h4 {
                font-size: 1.2em;
                margin-top: 5px;
                @media only screen and (max-width: 650px) {
                    font-size: 1.1em;
                }
            }
        }

        .image {
            background-image: url('../assets/img/my-image.webp');
            background-size: cover;
            width: 130px;
            height: 130px;
            margin-left: 10px;
            border-radius: 100%;

            @media only screen and (max-width: 650px) {
                width: 100px;
                min-width: 100px;
                height: 100px;
            }
        }
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 28px;
        margin: 0;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $color5;
        -webkit-transition: .4s;
        transition: .4s;
        height: 20px;
        border: 1px solid $color1;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 28px;
        width: 28px;
        left: -2px;
        bottom: -5px;
        background-color: $color2;
        -webkit-transition: .4s;
        transition: .4s;
        border: 1px solid $color5;
    }

    input:checked + .slider {
        background-color: $color5;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px $color1;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>