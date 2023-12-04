<script setup lang="ts">
defineProps({
  placeholder: String,
  data: Array,
  modelValue: String
});
defineEmits(['update:modelValue'])
</script>

<template>
    <v-text-field :label="`Search for ${placeholder}...`"  variant="underlined" :focused="false"
    @keyup.enter="$emit('update:modelValue', $event.target.value)">
    </v-text-field>
</template>