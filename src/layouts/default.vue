<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>{{ t('common.appTitle') }}</v-toolbar-title>
      <v-spacer />
      <LanguageSwitcher />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          :prepend-icon="item.icon"
          :title="item.title"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()
const drawer = ref(false)

const menuItems = computed(() => [
  {
    title: t('menu.home'),
    path: '/',
    icon: 'mdi-home'
  },
  {
    title: t('menu.charts'),
    path: '/charts',
    icon: 'mdi-chart-bar'
  },
  {
    title: t('menu.i18nDemo'),
    path: '/i18n-demo',
    icon: 'mdi-translate'
  }
])
</script>
