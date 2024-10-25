<template>
  <div class="profile-info q-mx-sm">
    <ProfileName :name="name" />

  </div>
</template>

<script setup>
import ProfileName from './ProfileName.vue';

defineProps({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.profile-bio {
  color: #b12727;
  font-size: 4rem;
  /* opacity: 0.8; */
}
</style>
