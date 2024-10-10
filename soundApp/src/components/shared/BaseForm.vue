<template>
  <q-form @submit.prevent="handleSubmit" class="text-whiter">
    <q-input v-model="formData.name" label="Nombre" v-if="isRegister" required />
    <q-input v-model="formData.email" label="Correo electrónico" type="email" required />
    <q-input v-model="formData.password" label="Contraseña" type="password" required />
    <q-input v-model="formData.confirmPassword" label="Confirmar Contraseña" v-if="isRegister" type="password"
      required />
    <div class="q-mt-md">
      <q-btn type="submit" :label="isRegister ? 'Registrar' : 'Iniciar Sesión'" color="primary" />
    </div>
  </q-form>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const props = defineProps({
  isRegister: {
    type: Boolean,
    default: false,
  },
});

const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const $q = useQuasar();
const emit = defineEmits(['submit']);

const handleSubmit = () => {
  if (props.isRegister && formData.value.password !== formData.value.confirmPassword) {
    $q.notify({
      message: 'Las contraseñas no coinciden',
      color: 'negative',
    });
    return;
  }

  emit('submit', formData.value);
};
</script>
