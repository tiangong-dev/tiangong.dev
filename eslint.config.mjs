import withNuxt from './.nuxt/eslint.config.mjs'
import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(js.configs.recommended, eslintConfigPrettier, ...pluginVue.configs['flat/essential'])
