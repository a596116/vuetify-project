<template>
  <v-layout class="!overflow-hidden !h-screen" full-height>
    <v-app-bar color="primary">
      <v-toolbar-title>{{ t('common.appTitle') }}</v-toolbar-title>
      <v-spacer />
      <LanguageSwitcher />
    </v-app-bar>

    <v-navigation-drawer :rail="rail" permanent>
      <v-list density="compact" nav>
        <v-tooltip v-for="item in menuItems" :key="item.path" :disabled="!rail" :text="item.title" location="right">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :to="item.path" :prepend-icon="item.icon" :title="item.title" />
          </template>
        </v-tooltip>
      </v-list>
      <template #append>
        <div class="flex justify-end !p-2">
          <v-btn
            :icon="rail ? 'mdi-chevron-double-right' : 'mdi-chevron-double-left'"
            size="44"
            @click="rail = !rail"
          />
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view class="!overflow-auto !h-full" />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()
const rail = ref(false)

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
    title: t('menu.chartTable'),
    path: '/chart-table',
    icon: 'mdi-chart-box-outline'
  }
])
</script>
