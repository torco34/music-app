<template>
  <q-footer class="blur-green-bg" elevated>
    <q-toolbar>
      <q-toolbar-title>
        <div>© 2024 - Torco's App</div> <!-- Texto del footer -->
      </q-toolbar-title>

      <!-- Opcional: Enlaces de navegación -->
      <q-btn flat label="Privacidad" />
      <q-btn flat label="Términos"  />
    </q-toolbar>
  </q-footer>
</template>

<script setup>

</script>

<style scoped>
.blur-green-bg {
  backdrop-filter: blur(20px);
  height: 100px;
  background-color: rgba(236, 226, 242, 0.6);

  color: white;

}
</style>
