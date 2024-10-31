<template>
  <div class="profile-banner">
    <div class="banner-overlay  q-pa-sm">
      <ProfileAvatar :avatarSrc="avatarSrc" />
    <div class="container-info q-mx-lg">
      <PerfilName :name="profileName"  />
      <p class="profile-bio text-primar">{{ profileBio }}</p>
    </div>
    </div>

  </div>
<div>
  <PerfileBody/>
</div>
</template>

<script setup>
import { ref } from 'vue';
import ProfileAvatar from './PerfileAvatar.vue';

import { default as PerfilName } from './PerfilName.vue';
import PerfileBody from './PerfileBody.vue';
const avatarSrc = ref('https://randomuser.me/api/portraits/women/44.jpg');
const profileName = ref('Jane Doe');
const profileBio = ref('1 Lista publica | siguiendo a 6 usuario');
</script>

<style scoped>
.profile-banner {

  width: 100%;
  background-image: url('https://img.freepik.com/foto-gratis/fondo-musical-volumetrico-clave-sol-notas-generativas-ai_169016-29576.jpg');
  background-size: cover;
  background-position: center;

}

.banner-overlay {
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  padding: 50px;
}
</style>
