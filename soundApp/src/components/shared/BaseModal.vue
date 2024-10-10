<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6 text-dark">{{ title }}</div>
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

// Emitir un evento cuando se quiera cerrar el modal
const emit = defineEmits(['close']);

// Computed para manejar el estado del modal sin mutar la prop
const isDialogOpen = computed(() => props.isOpen);

// Función para cerrar el modal
const closeModal = () => {
  emit('close');
};
</script>
