<template>
  <v-card dark>
    <v-toolbar :color="safe.color">
      <v-toolbar-title>{{safe.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row align="center">
      <v-col>
        <v-card-text>{{safe.description}}</v-card-text>
      </v-col>
    </v-row>
     <v-card-actions>
      <v-card-text class="text-right blue--text text-lighten-3">{{total}}</v-card-text>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {priceFormatter} from '@/utils/formatters'

import {computed} from '@nuxtjs/composition-api'

const props = defineProps({
  safe: Object
})

const total 
= computed(() =>{
  return priceFormatter(props.safe.total)
})
</script>