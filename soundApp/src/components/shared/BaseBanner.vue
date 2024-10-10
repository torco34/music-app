<template>
  <div class="banner">
    <q-img :src="imageSrc" class="banner-image" :style="{ height: bannerHeight, width: '100%' }" />
    <div class="banner-content">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <q-btn color="secondary" :label="buttonLabel" @click="$emit('navigate')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseBanner',
  props: {
    imageSrc: {
      type: String,
      default: 'https://via.placeholder.com/1500x500'
    },
    title: {
      type: String,
      default: 'Bienvenido a Tu Música'
    },
    subtitle: {
      type: String,
      default: 'Explora tus géneros favoritos'
    },
    buttonLabel: {
      type: String,
      default: 'Explorar'
    }
  },
  data() {
    return {
      bannerHeight: '300px'
    };
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  text-align: center;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
