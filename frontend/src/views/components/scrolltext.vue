<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },


})
</script>

<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>