import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importar la libreria de bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Instalar BootstrapVue
Vue.use(BootstrapVue)
// Opcionalmente instalar el componente para iconos
Vue.use(IconsPlugin)

// Importar los estilos css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
