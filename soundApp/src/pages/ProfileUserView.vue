<template>
  <q-page class="fullscree">
  <div>
    <ProfileBanner />
  </div>
    <div class="q-pt-xl">
      <MusicGenreView/>
    </div>

  </q-page>
</template>

<script setup>
import ProfileBanner from 'src/components/profile/ProfileBanner.vue';
import MusicGenreView from './MusicGenreView.vue';
</script>
