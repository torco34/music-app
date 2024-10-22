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
        <q-btn flat label="Cerrar" @click="closeModal" />
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
  width: 400px;
  color: #0d0c0e;

}


</style>
