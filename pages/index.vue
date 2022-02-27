<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="11">
      <v-card>
        <v-card-title class="title">
          Carteira virtual
        </v-card-title>
        <v-row align="center" class="mx-1">
          <v-col>
            <v-card-text>
              Aqui possisvelmente vai ter a informação do total guardado
            </v-card-text>
          </v-col>
          <v-col class="text-right">
            <v-card-text>Total:  <strong> {{total}} </strong></v-card-text>
          </v-col>
        </v-row>
        <v-divider class="mx-1 mt-4"></v-divider>
        <v-card-title class="subtitle-2">
          Cofres: 
        </v-card-title>
        <v-row align="center" class="px-2">
          <v-col v-for="(item, i) in safes" :key="i" >
            <Safe :safe="item" />
          </v-col>
        </v-row>
        <v-card-actions class="mt-5">
          <v-btn text color="blue">
            Adicionar
            <v-icon
              right
              dark
            >
              mdi-plus-thick
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {priceFormatter} from '@/utils/formatters'

import {ref, computed} from '@nuxtjs/composition-api'

import Safe from '@/components/organisms/Safe.vue'

const safes = ref([
  {name: 'Cofre 1', description: 'teste de descriçcão', total: 55.44},
  {name: 'Cofre 2', description: 'teste de descriçcão', total: 55.44}
])

const total = computed(() => {
  return priceFormatter(100)
})
</script>
