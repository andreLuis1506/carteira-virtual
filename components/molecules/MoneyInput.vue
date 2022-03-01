<template>
  <div class="v-input theme--dark v-text-field v-text-field--is-booted">
    <div class="v-input__control">
      <div class="v-input__slot">
        <div class="v-text-field__slot">
          <label for="input-money" class="v-label theme--dark" style="top: -18px; left: 0px; right: auto; position: absolute;">{{props.label}}</label>
          <Money id="input-money" v-bind="configMoney" v-model="content" />
        </div>
      </div>
      <div class="v-text-field__details">
        <div class="v-messages theme--dark">
          <div class="v-messages__wrapper"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch, defineProps, defineEmits} from '@nuxtjs/composition-api'

const props = defineProps({
  value: [String, Number], 
  label: String,
})
const emit = defineEmits(['input'])

const content = ref(props.value)

watch(() => props.value, (value)=> {
  content.value = value
})

watch(content, (value)=> {
  emit('input', value)
})

import { Money } from 'v-money'
const configMoney = {
  decimal: ',',
  thousands: '.',
  prefix: 'R$ ',
  precision: 2,
}
</script>