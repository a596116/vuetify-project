<template>
  <v-layout class="!overflow-hidden !h-screen" full-height>
    <Menu />
    <AppBar />

    <v-main class="flex overflow-hidden relative w-full">
      <router-view v-slot="{ Component }" class="!overflow-auto !h-full w-full">
        <v-scroll-x-transition hide-on-leave>
          <component :is="Component" />
        </v-scroll-x-transition>
      </router-view>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import Menu from '@/components/Layout/Menu.vue'
import AppBar from '@/components/Layout/AppBar.vue'
</script>
