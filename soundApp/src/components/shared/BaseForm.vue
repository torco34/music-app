<!-- <template>
  <q-form @submit.prevent="handleSubmit" class="full-width">
    <q-input
      v-model="formData.username"
      label="Nombre de usuario"
      v-if="isRegister"
      required
    />


    <q-input
      v-model="formData.email"
      label="Correo electrónico"
      type="email"
      required
    />
    <q-input
      v-model="formData.password"
      label="Contraseña"
      type="password"
      required
    />

    <div class="q-mt-md">
      <q-btn
        type="submit"
        :label="isRegister ? 'Registrar' : 'Iniciar Sesión'"
        color="primary"
      />
    </div>
  </q-form>
</template>

<script setup>
const passwordValidationPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

import { ref } from "vue";

const props = defineProps({
  isRegister: {
    type: Boolean,
    default: false,
  },
});

const formData = ref({
  username: "",
  email: "",
  password: "",
  showNewPwd: false,
  showConfirmPwd: false,
});

const emit = defineEmits(["submit"]);

const handleSubmit = () => {
  if (password.value.newPassword && password.value.confirmPassword) {
    emit('submit', passwordData.value);
  }
  // emit('submit', { ...formData.value });
};
</script>
<style lang="scss" scoped>
.full-width {
  width: 400px;
  color: #0d0c0e;
}
</style> -->
<template>
  <q-form @submit.prevent="handleSubmit" class="full-width">
    <q-input
      v-model="formData.username"
      label="Nombre de usuario"
      v-if="isRegister"
      dense

      required
      :rules="[(val) => !!val || 'El nombre de usuario es obligatorio']"
    />

    <q-input
      v-model="formData.email"
      label="Correo electrónico"
      type="email"
      dense

      required
      :rules="[
        (val) => !!val || 'El correo es obligatorio',
        (val) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Correo inválido'
      ]"
    />

    <q-input
      v-model="formData.password"
      :type="showNewPwd ? 'text' : 'password'"
      label="Contraseña"
      dense

      required
      :rules="[
        (val) => !!val || 'La contraseña es obligatoria',
        (val) =>
          passwordValidationPattern.test(val) ||
          'Debe tener 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 especial'
      ]"
    >
      <template #append>
        <q-icon
          :name="formData.showNewPwd ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          color="primary"
          @click="formData.showNewPwd = !formData.showNewPwd"
        />
      </template>
    </q-input>

    <div class="q-mt-md">
      <q-btn
        type="submit"
        :label="isRegister ? 'Registrar' : 'Iniciar Sesión'"
        color="primary"
      />
    </div>
  </q-form>
</template>

<script setup>
import { ref } from 'vue';

// Patrón de validación para la contraseña
const passwordValidationPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Props: Define si es un formulario de registro o inicio de sesión
const props = defineProps({
  isRegister: {
    type: Boolean,
    default: false,
  },
});

// Estado reactivo para los datos del formulario y visibilidad de la contraseña
const formData = ref({
  username: '',
  email: '',
  password: '',
 // Controla visibilidad de la contraseña
});
const showNewPwd = ref(false);
// Emitimos evento con los datos del formulario al enviarlo
const emit = defineEmits(['submit']);

const handleSubmit = () => {
  emit('submit', { ...formData.value }); // Emite los datos del formulario
};
</script>

<style lang="scss" scoped>
.full-width {
  width: 400px;
  margin:  auto;
  color: #0d0c0e;
  background-color: $text-grey;
}

.q-mt-md {
  margin-top: 1rem;

}
</style>
