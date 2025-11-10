<template>
  <v-container fluid>
    <v-card class="mb-4">
      <v-card-title class="text-h5 pa-4">
        {{ t('common.welcome') }} - i18n 示例頁面
      </v-card-title>
      
      <v-card-text>
        <v-row>
          <!-- 日期選擇器示例 -->
          <v-col cols="12" md="6">
            <v-card variant="outlined">
              <v-card-title>日期選擇器 (Date Picker)</v-card-title>
              <v-card-text>
                <p class="mb-4">切換語言後，月份和星期名稱會自動本地化</p>
                <v-date-picker
                  v-model="selectedDate"
                  :title="t('common.select')"
                />
              </v-card-text>
            </v-card>
          </v-col>

          <!-- 文件輸入示例 -->
          <v-col cols="12" md="6">
            <v-card variant="outlined">
              <v-card-title>文件輸入 (File Input)</v-card-title>
              <v-card-text>
                <p class="mb-4">按鈕文字會自動本地化</p>
                <v-file-input
                  v-model="selectedFiles"
                  :label="t('common.selectFile')"
                  multiple
                  chips
                  show-size
                />
              </v-card-text>
            </v-card>
          </v-col>

          <!-- 數據表格示例 -->
          <v-col cols="12">
            <v-card variant="outlined">
              <v-card-title>數據表格 (Data Table)</v-card-title>
              <v-card-text>
                <p class="mb-4">分頁文字、每頁筆數等會自動本地化</p>
                <v-data-table
                  :headers="demoHeaders"
                  :items="demoItems"
                  :items-per-page="5"
                  :items-per-page-text="t('table.rowsPerPage')"
                />
              </v-card-text>
            </v-card>
          </v-col>

          <!-- 對話框示例 -->
          <v-col cols="12" md="6">
            <v-card variant="outlined">
              <v-card-title>對話框 (Dialog)</v-card-title>
              <v-card-text>
                <p class="mb-4">對話框內的按鈕文字會本地化</p>
                <v-btn color="primary" @click="dialog = true">
                  {{ t('common.openDialog') }}
                </v-btn>
                <v-dialog v-model="dialog" max-width="500">
                  <v-card>
                    <v-card-title>{{ t('message.confirm') }}</v-card-title>
                    <v-card-text>
                      這是一個示例對話框，用於展示 Vuetify 的 i18n 功能。
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn variant="text" @click="dialog = false">
                        {{ t('common.cancel') }}
                      </v-btn>
                      <v-btn color="primary" variant="text" @click="dialog = false">
                        {{ t('common.confirm') }}
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- 分頁示例 -->
          <v-col cols="12" md="6">
            <v-card variant="outlined">
              <v-card-title>分頁 (Pagination)</v-card-title>
              <v-card-text>
                <p class="mb-4">分頁控件的文字會本地化</p>
                <v-pagination
                  v-model="currentPage"
                  :length="10"
                  total-visible="5"
                />
                <p class="mt-4">當前頁: {{ currentPage }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { DataTableHeader } from 'vuetify'

const { t } = useI18n()

// 日期選擇器
const selectedDate = ref(new Date())

// 文件輸入
const selectedFiles = ref<File[]>([])

// 對話框
const dialog = ref(false)

// 分頁
const currentPage = ref(1)

// 數據表格
const demoHeaders = computed<DataTableHeader[]>(() => [
  { title: t('table.name'), key: 'name', sortable: true },
  { title: t('table.category'), key: 'category', sortable: true },
  { title: t('table.count'), key: 'count', sortable: true },
  { title: t('table.status'), key: 'status', sortable: true },
])

const demoItems = [
  { name: '項目 A', category: '類別 1', count: 100, status: '完成' },
  { name: '項目 B', category: '類別 2', count: 150, status: '進行中' },
  { name: '項目 C', category: '類別 1', count: 75, status: '完成' },
  { name: '項目 D', category: '類別 3', count: 200, status: '完成' },
  { name: '項目 E', category: '類別 2', count: 120, status: '進行中' },
  { name: '項目 F', category: '類別 1', count: 90, status: '完成' },
  { name: '項目 G', category: '類別 3', count: 180, status: '待處理' },
  { name: '項目 H', category: '類別 2', count: 95, status: '完成' },
]
</script>

