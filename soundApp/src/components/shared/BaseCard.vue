<template>
  <q-card class="generic-card"   @click="handleClick">

      <img :src="imageSrc" alt="Imagen genérica" />
      <q-card-section>
        <q-item-label >{{ title }}</q-item-label>
        <q-item-label >{{ subtitle }}</q-item-label>
      </q-card-section>

  </q-card>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },


})
const emit = defineEmits(['click']);


const handleClick = () => {
  emit('click', props.link);
};

</script>

<style scoped>
.generic-card {
  width: 100%;
  height: 260px;
  overflow: hidden;
  cursor: pointer;
}

.generic-card img {
  width: 100%;
  height: 72%;
}

.generic-card {
  cursor: pointer;
  color: rgb(238, 236, 236);
  font-weight: bold;
  transition: transform 0.2s ease;
  background-color: rgba(234, 223, 238, 0.6);
}

.generic-card:hover {
  transform: scale(1.05);

}

.link {
  text-decoration: none;
  color: inherit;
}
</style>
