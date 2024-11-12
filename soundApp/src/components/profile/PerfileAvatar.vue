<template>
  <q-avatar :size="size" class="profile-avatar">
    <img :src="avatarSrc" alt="Profile Picture" />
  </q-avatar>
</template>

<script setup>
defineProps({
  avatarSrc: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '100px',
  },
});
</script>

<style scoped>
.profile-avatar {
  border: 4px solid white;
  margin-bottom: 10px;
}
</style>
