<template>
  <h1 class="profile-name">{{ name }}</h1>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss"  scoped>
.profile-name {
  color: $text-grey;
  font-size: 2.7rem;
  margin: 0;
  font-weight: bold;
}
</style>
