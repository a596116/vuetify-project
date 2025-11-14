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
            <v-list-item
              v-bind="props"
              :to="item.path"
              :prepend-icon="item.icon"
              :title="item.title"
              :active="activated === item.path"
            />
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

    <v-main class="flex overflow-hidden relative w-full">
      <!-- <router-view #default="{ Component }" class="flex-1">
        <Transition appear name="fade-slide" mode="out-in">
          <component :is="Component" class="overflow-hidden absolute h-full w-fit" />
        </Transition>
      </router-view> -->
      <router-view class="!overflow-auto !h-full w-full" />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()
const rail = ref(false)
const activated = ref('')
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
  },
  {
    title: t('menu.osUsage'),
    path: '/os-usage',
    icon: 'mdi-monitor-dashboard'
  },
  {
    title: t('menu.kpiOverview'),
    path: '/kpi-overview',
    icon: 'mdi-view-dashboard-outline'
  },
  {
    title: t('menu.notificationDemo'),
    path: '/notification-demo',
    icon: 'mdi-bell-outline'
  },
  {
    title: t('menu.componentsDemo'),
    path: '/components-demo',
    icon: 'mdi-puzzle'
  }
])

const route = useRoute()
watch(
  route,
  () => {
    activated.value = route.path as string
  },
  { immediate: true }
)
</script>
