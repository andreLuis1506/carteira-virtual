<template>
  <v-dialog
    v-model="content"
    max-width="350"
  >
    <template v-slot:activator="{ on, attrs }">
      <slot name="activador" v-bind="attrs" v-on="on" ></slot>
    </template>
      <v-card>
        <v-card-title>
          Adicionar novo Cofre
        </v-card-title>
        <v-form @submit.prevent="add" v-model="valid">
          <v-card-text>
              <v-text-field v-model="name" label="Nome" required :rules="rules" />
              <v-textarea v-model="description" label="Descrição" required :rules="rules" />
              <v-text-field v-model="total" label="Dinheiro guardado" type="number" required :rules="rules"/>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" type="submit" :disabled="!valid" text right>
              Adicionar
            </v-btn>
          </v-card-actions>
        </v-form>
     </v-card>
  </v-dialog>
</template>

<script setup>
import {defineProps, defineEmits, watch, ref, useStore} from '@nuxtjs/composition-api'

const props = defineProps({
  value: Boolean
})
const emit = defineEmits(['input'])
const store = useStore()

const content  = ref(props.value)

watch (() => props.value, (value) => {
  content.value = value
})

watch(content, (value) => {
  emit('input', value)
})

const name = ref('')
const description = ref('')
const total = ref(0)
const  rules = [ value => !!value || 'Required.']
const valid = ref(true)
function add(){
  store.dispatch('modules/safe/add',{safe: {
    name: name.value,
    description: description.value,
    total: total.value
  }})
  content.value = false
}


</script>
