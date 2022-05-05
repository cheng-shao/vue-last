<template>
  <h1>math</h1>
  <slot v-if="$slot.header" name="header"></slot>

  <slot v-if="$slot.default"></slot>
</template>

<script setup lang="ts">
const $slot = useSlots()
console.log($slot, 'slot')
</script>

<style lang="scss"></style>
