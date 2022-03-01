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
              <v-dialog v-model="isEditing" max-width="350">
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">
                    <v-icon
                      left
                      dark
                      small
                    >
                      mdi-pencil
                    </v-icon>
                    Editar
                  </span>
                </template>
                <v-card>
                  <v-card-title>
                    Editando<strong>{{ safe.name }}</strong>
                  </v-card-title>
                    <v-form @submit.prevent="edit">
                      <v-card-text>
                        <v-text-field
                          v-model="name"
                          label="Nome"
                          :rules="rules"
                        />
                        <v-textarea
                          v-model="description"
                          label="Descrição"
                          :rules="rules"
                        />
                        <v-text-field
                          v-model="totalSafe"
                          label="Dinheiro guardado"
                          type="number"
                          :rules="rules"
                        />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          color="success"
                          text
                          type="submit" 
                          :disabled="!valid"
                        >
                          Salvar
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                </v-card>
              </v-dialog>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <DecisionsDialog action="Excluir" icon="mdi-delete" @accepted="del(safe.id)">
                <template #title>
                  Excluir <strong> {{safe.name}} </strong>
                </template>
                <template #description>
                  Essa ação é permanente, tem certeza que deseja continuar?
                </template>
              </DecisionsDialog>
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

import {computed, ref, useStore} from '@nuxtjs/composition-api'

import DecisionsDialog from '@/components/molecules/DecisionsDialog.vue'

const store = useStore()
const props = defineProps({
  safe: Object
})

const total = computed(() =>{
  return priceFormatter(props.safe.total)
})

const isEditing = ref(false)
const valid = ref(true)
const rules = [ value => !!value || 'Required.']
const name = ref(props.safe.name)
const description = ref(props.safe.description)
const totalSafe = ref(props.safe.total)
function edit (){
  store.dispatch('modules/safe/editSafe', {
    safe: {id: props.safe.id, name: name.value, description: description.value, total:totalSafe.value},
    id: props.safe.id,
  })
}
function del(id){
  console.log('me chamou')
  store.dispatch('modules/safe/deleteSafe', {id})
}

</script>