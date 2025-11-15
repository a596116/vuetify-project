<template>
  <suspense>
    <v-app class="overflow-hidden h-screen">
      <router-view />
    </v-app>
  </suspense>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

// 在應用載入時初始化訪問計數
onMounted(() => {
  appStore.initVisitCount()
})
</script>
