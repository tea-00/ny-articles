<script setup>
defineProps({
  type: { type: String, default: null }
});

const CHIPS = {
  News: {
    color: 'pink-accent-1'
  },
  'Op-Ed': {
    color: 'purple-accent-2'
  },
  Review: {
    color: 'indigo-accent-2'
  },
  Video: {
    color: 'teal-accent-2'
  },
  Quote: {
    color: 'cyan-accent-2'
  },
  DEFAULT: {
    color: 'amber-accent-2'
  }
}
</script>

<template>
  <v-chip
    v-if="type"
    v-bind="CHIPS[type] || CHIPS.DEFAULT"
    :text="type"
    size="small"
    class="text-uppercase"
    label />
</template>
