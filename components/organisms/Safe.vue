<template>
  <v-card>
    <v-card-title>
      {{ safe.name }}
    </v-card-title>
  </v-card>
</template>

<script setup>
const props = defineProps({
  safe: Object
})
</script>