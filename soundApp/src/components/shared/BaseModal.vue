<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card class="modal-content">
      <q-card-section>
        <div class="text-h6 text-dark text-center">{{ title }}</div>
      </q-card-section>

      <q-card-section>
        <slot></slot>
      </q-card-section>

      <q-card-actions>
        <q-btn rounded flat icon="close"  @click="closeModal" class="glossy btn-cerrar"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed } from 'vue';

// Props para recibir el título del modal y el control de apertura/cierre
const props = defineProps({
  title: {
    type: String,
    default: 'Modal',
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['close']);
const isDialogOpen = computed(() => props.isOpen);
const closeModal = () => {
  emit('close');
};
</script>
<style lang="scss" scoped>
.modal-content {
  width: 500px;
  color: #ebe8ee;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: none;
  backdrop-filter: blur(40px);
  background-color: rgba(234, 223, 238, 0.6);
}
.btn-cerrar{
  background-color: #8c66d8;
  width: 10px;
}

</style>
