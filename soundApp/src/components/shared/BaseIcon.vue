<template>
  <div class="music-icon-container">
    <q-icon class="music-icon" name="music_note" />
    <span class="music-text">La Rockola</span>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.music-icon-container {
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;

  font-size: 20px;

  color: #cec8da;

}

.music-icon {
  font-size: 30px;

  margin-right: 10px;

  color: $primary;

}

.music-text {
  font-weight: bold;
  /* Opción para hacer el texto más destacado */
}
</style>
