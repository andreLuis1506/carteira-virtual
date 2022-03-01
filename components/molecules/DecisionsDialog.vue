<template>
  <v-dialog max-width="350" v-model="activated"> 
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on">
        <v-icon left dark smal >
          {{ icon }}
        </v-icon>
        {{action}}
      </span>
    </template>
    <v-card>
      <v-card-title>
        <slot name="title"></slot>
      </v-card-title>
      <v-card-text>
        <slot name="description"></slot>
      </v-card-text>
      <v-card-actions>
        <v-btn>{{action}}</v-btn>
        <v-btn @click="activated = false">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {ref, defineProps} from '@nuxtjs/composition-api'

const props = defineProps({
  action: String,
  icon: String
})
const activated = ref(false)
</script>