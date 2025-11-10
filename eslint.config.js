import vuetify from 'eslint-config-vuetify'
import pluginVue from 'eslint-plugin-vue'

export default vuetify({
  ...pluginVue.configs['flat/recommended']
})
