import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
