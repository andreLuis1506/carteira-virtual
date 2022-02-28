<template>
  <v-card dark>
    <v-toolbar :color="safe.color">
      <v-toolbar-title>{{safe.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <template  v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-icon
                left
                dark
                small
              >
                mdi-pencil
              </v-icon>
              Editar
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon
              left
              dark
              small
            >
              mdi-delete
            </v-icon>
              Excluir
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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

const total = computed(() =>{
  return priceFormatter(props.safe.total)
})
</script>