
<template>
  <div class="banner">
    <div class="container">
      <!-- Imagen con overlay -->
      <div
        class="image-wrapper"
        @click="triggerFileInput"
        @mouseover="showOverlay = true"
        @mouseleave="showOverlay = false"
      >
        <q-img :src="localImageSrc" class="banner-image" />

        <!-- Overlay para subir imagen -->
        <div v-if="showOverlay" class="overlay">

          <span class="overlay-text">
            <q-icon name="cloud_upload" size="2rem" color="white" />
          </span>
        </div>

        <!-- Input oculto para subir imagen -->
        <input
          type="file"
          accept="image/*"
          ref="fileInput"
          class="hidden-input"
          @change="onImageUpload"
        />
      </div>

      <!-- Contenido del banner -->
      <div class="banner-content">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props
const props = defineProps({
  imageSrc: {
    type: String,
    default: "https://via.placeholder.com/1500x500",
  },
  title: {
    type: String,
    default: "Bienvenido a Tu Música",
  },
  subtitle: {
    type: String,
    default: "Explora tus géneros favoritos",
  },
});

// Imagen local y estado del overlay
const localImageSrc = ref(props.imageSrc);
const showOverlay = ref(false);

// Referencia al input oculto
const fileInput = ref(null);

// Función para abrir el input al hacer clic en la imagen
const triggerFileInput = () => {
  fileInput.value.click();
};

// Función para manejar la carga de la imagen
const onImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      localImageSrc.value = e.target.result; // Actualiza la imagen
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  height: 240px;
  width: 100%;
  background-image: url("https://www.orquestafilarmonia.com/wp-content/uploads/2024/01/obras-clasicas.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.container {
  background: rgba(5, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.image-wrapper {
  position: relative;
  cursor: pointer;
}

.banner-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
}

.banner-image:hover {
  transform: scale(1.03);
}

/* Overlay al pasar el mouse */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 3rem;
  width: 150px;
  height: 150px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  pointer-events: none;
}

.overlay-text {
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}

/* Input oculto */
.hidden-input {
  display: none;
}

.banner-content {
  margin-left: 14%;
  width: 90%;
}

.banner-content h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-left: 4rem;
  margin-bottom: 1rem;
  color: rgb(197, 188, 188);
  text-transform: uppercase;
}

.banner-content p {
  font-size: 1.2rem;
  margin-left: 4rem;
  font-style: italic;
}

/* RESPONSIVE STYLES */

/* Tablets */
@media (max-width: 768px) {
  .banner {
    height: 200px;
  }

  .banner-image {
    width: 120px;
    height: 120px;
    margin-left: 1.5rem;
  }

  .banner-content {
    margin-left: 6%;
  }

  .banner-content h1 {
    font-size: 1.5rem;
    margin-left: 2rem;
  }

  .banner-content p {
    font-size: 1rem;
    margin-left: 2rem;
  }
}

/* Móviles */
@media (max-width: 480px) {
  .banner {
    height: 180px;
    flex-direction: column;
    align-items: flex-start;
  }

  .banner-image {
    width: 100px;
    height: 100px;
    margin-left: 1rem;
  }

  .banner-content {
    margin-left: 1rem;
  }

  .banner-content h1 {
    font-size: 1.2rem;
    margin-left: 1rem;
  }

  .banner-content p {
    font-size: 0.9rem;
    margin-left: 1rem;
  }
}
</style>
