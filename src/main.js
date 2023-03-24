import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// global components
import Drawer from './components/common/Modal/Drawer.vue'
import Modal from './components/common/Modal/Modal.vue'

const app = createApp(App)

// register global components
app.component('Modal', Modal)
app.component('Drawer', Drawer)

/** --- Bootstrap --- */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import "@popperjs/core";


/** --- extra from theme --- */

import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'



/** --- FontAwesome --- */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
app.component('font-awesome-icon', FontAwesomeIcon)

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(fas, far, fab)



/* router */
import {router} from './router'
app.use(router)

app.mount('#app')

