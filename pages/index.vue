<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-card-title>
          Carteira virtual
        </v-card-title>
        <v-row align="center" class="mx-1">
          <v-card-text>
            Aqui possisvelmente vai ter a informação do total guardado
          </v-card-text>
        </v-row>
        <v-divider class="mx-1 mt-4"></v-divider>
        <v-card-title>
          Cofres: 
        </v-card-title>
        <v-row align="center" class="px-2">
          <v-col v-for="(item, i) in safes" :key="i" >
            <Safe :safe="item" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {ref} from '@nuxtjs/composition-api'

import Safe from '@/components/organisms/Safe.vue'

const safes = ref([
  {name: 'Cofre 1'},
  {name: 'Cofre 2'}
])

</script>
