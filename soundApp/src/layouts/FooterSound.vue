<template>
  <q-footer class="blur-green-bg" elevated>
    <q-toolbar>
      <q-toolbar-title>
        <div>© 2024 - Torco's App</div> <!-- Texto del footer -->
      </q-toolbar-title>

      <!-- Opcional: Enlaces de navegación -->
      <q-btn flat label="Privacidad" @click="goToPrivacyPolicy" />
      <q-btn flat label="Términos" @click="goToTerms" />
    </q-toolbar>
  </q-footer>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goToPrivacyPolicy = () => {
  router.push('/privacidad') // Redirige a la página de Política de privacidad
}

const goToTerms = () => {
  router.push('/terminos') // Redirige a la página de Términos y condiciones
}
</script>

<style scoped>
.blur-green-bg {
  backdrop-filter: blur(20px);
  height: 100px;
  background-color: rgba(236, 226, 242, 0.6);

  color: white;

}
</style>
