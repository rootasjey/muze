import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VuePlyr from 'vue-plyr'
import './styles.scss'

// import VueI18n from 'vue-i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import frLocale from 'element-ui/lib/locale/lang/fr'

Vue.use(ElementUI)
// Vue.use(VueI18n)

// Vue.config.lang = 'en'
// Vue.locale('en', enLocale)
// Vue.locale('fr', frLocale)

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ['ended']
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
