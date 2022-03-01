<template>
  <v-row justify="center" align="center" style="height: 700px;">
    <v-col cols="12" sm="8" md="11">
      <v-card>
        <v-row align="center" class="mx-1">
          <v-col>
            <v-card-title class="title">
              Carteira <br/> virtual
            </v-card-title>
          </v-col>
          <v-col class="text-right">
            <v-card-text>Guardado:  <strong> {{total}} </strong></v-card-text>
          </v-col>
        </v-row>
        <v-divider class="mx-1 mt-4"></v-divider>
        <v-card-title class="subtitle-2">
          Cofres: 
        </v-card-title>
        <v-row justify="start" align="center" class="px-2">
          <v-col v-if="safes.length === 0">
            <p class="my-4 grey--text text-h4 text-center">Nehum cofre registrado ainda</p>
          </v-col>
          <v-col v-else v-for="(item, i) in safes" :key="i" md="4" >
            <Safe :safe="item" />
          </v-col>
        </v-row>
        <v-card-actions class="mt-5">
          <AddSafeModal  v-model="addModal" >
            <template #activador>
              <v-btn text color="blue" @click="add">
                Adicionar
                <v-icon
                  right
                  dark
                >
                  mdi-plus-thick
                </v-icon>
              </v-btn>
            </template>
          </AddSafeModal>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {ref, computed, onBeforeMount, useStore} from '@nuxtjs/composition-api'

import {priceFormatter} from '@/utils/formatters'

import Safe from '@/components/organisms/Safe.vue'
import AddSafeModal from '@/components/organisms/AddSafeModal.vue'

const store = useStore()

onBeforeMount(async() => {
  await store.dispatch('openDB')
  await store.dispatch('modules/safe/list')
})

const safes = computed( () => {
  return store.state.modules.safe.safes
})

const total = computed(() => {
  return priceFormatter(store.getters['modules/safe/totalInWallet'])
})

function add() {
  addModal.value = true
}
const addModal = ref(false)
</script>
