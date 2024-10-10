<template>
  <div class="profile-banner">
    <div class="banner-overlay">
      <q-avatar size="100px" class="profile-avatar">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile Picture" />
      </q-avatar>
      <div class="profile-info">
        <h1>{{ profileName }}</h1>
        <p class="profile-bio">{{ profileBio }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const profileName = ref('Jane Doe')
const profileBio = ref('Full Stack Developer | Passionate about Coding')
</script>

<style scoped>
.profile-banner {
  position: relative;
  width: 100%;
  /* max-width: 400px; */
  /* height: 200px; */
  /* background-image: url('https://images.unsplash.com/photo-1519985176271-adb1088fa94c'); */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}

.banner-overlay {
  /* background: rgba(0, 0, 0, 0.5); */
  /* Slightly dark overlay for readability */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  /* justify-content: end; */
  /* align-items: center; */
  /* text-align: center; */
}

.profile-avatar {
  border: 4px solid white;
  margin-bottom: 10px;
}

.profile-info h1 {
  color: #f6f5f5;
  /* Accent color */
  font-size: 2.5rem;
  margin: 0;
}

.profile-bio {
  color: #f6f5f5;
  font-size: 1rem;
  opacity: 0.8;
}
</style>
