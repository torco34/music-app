<template>
  <q-page class="fullscree">
    <ProfileBanner />

  </q-page>
</template>

<script setup>
import ProfileBanner from 'src/components/profile/ProfileBanner.vue';
import { ref } from 'vue';

const profileName = ref('John Doe')
const profileBio = ref('Software Developer | Tech Enthusiast')
const email = ref('john.doe@example.com')
const phone = ref('+123 456 7890')
const location = ref('San Francisco, CA')
</script>
