<template>
  <q-page class="library-page">
    <div class="library-container">
      <div class="library-header">
        <h1 class="library-title">Los artistas  mas escuchados de la semana</h1>
       <HomeFeatured/>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import HomeFeatured from 'src/components/home/HomeFeatured.vue';

</script>

<style lang="scss" scoped>
.library-page {
   background: #f5f5f5;
  /* Fondo gris claro */
  // color: $primary ;
  /* Color de texto oscuro */
  // padding: 20px;
  /* Espaciado interno */
}

.library-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.library-header {
  text-align: center;
  margin-bottom: 20px;
}

.library-title {
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
  /* Fuente atractiva */
}

.library-description {
  font-size: 1rem;
  line-height: 1.5;
}

.library-content {
  width: 100%;
}

.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: 'Arial', sans-serif;
}

.albums-list,
.playlists-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.album-item,
.playlist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  max-width: 200px;
  background: linear-gradient(to right, #ededf5, #f2f6f7);
  background: #fff;
  /* Fondo blanco para los elementos */
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  /* Sombra para los elementos */
}

.album-cover,
.playlist-cover {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
}

.album-info,
.playlist-info {
  text-align: center;
}

.album-title,
.playlist-name {
  font-size: 1rem;
  margin-bottom: 5px;
  font-weight: bold;
}

.album-artist,
.playlist-description {
  font-size: 0.875rem;
  color: #666;
  /* Color de texto más claro para descripciones */
}
</style>
