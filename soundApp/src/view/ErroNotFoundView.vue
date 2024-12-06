<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center error-container">
    <div>
      <div class="error-number animate-zoom">
        404
      </div>

      <div class="text-h2 animate-opacity" style="opacity:.6">
        Oops. Nothing here...
      </div>

      <q-btn class="q-mt-xl animate-bounce" color="accent" text-color="primary" unelevated to="/" label="Go Home"
        no-caps />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ErrorNotFound'
});
</script>

<style scoped>
/* Applying the color palette */
.bg-primary {
  background-color: #4a249d;
  /* $primary */
}

.text-white {
  color: #f6f5f5;
  /* $accent */
}

.error-number {
  font-size: 30vh;
  transition: transform 0.5s ease;
}

.animate-zoom:hover {
  transform: scale(1.1);
}

.animate-opacity {
  transition: opacity 2s ease-in-out;
}

.q-btn.animate-bounce {
  animation: bounce 2s infinite;
  border: 2px solid #f6f5f5;
  /* Accent color for border */
}

/* Keyframes for animations */
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes background-color-change {
  0% {
    background-color: #4a249d;
    /* Primary */
  }

  100% {
    background-color: #009fbd;
    /* Secondary */
  }
}

.error-container {
  animation: background-color-change 5s ease-in-out infinite alternate;
}
</style>
