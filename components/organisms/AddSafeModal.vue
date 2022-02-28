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
        <v-card-text>
          <v-form>
            <v-text-field v-model="name" label="Nome" />
            <v-textarea v-model="description" label="Descrição"></v-textarea>
            <v-text-field v-model="total" label="Dinheiro guardado" type="number" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="add" text right>
            Adicionar
          </v-btn>
        </v-card-actions>
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
function add(){
  console.log({
    name: name.value,
    description: description.value,
    total: total.value}
  )
  store.dispatch('modules/safe/add',{safe: {
    name: name.value,
    description: description.value,
    total: total.value
  }})
}


</script>
