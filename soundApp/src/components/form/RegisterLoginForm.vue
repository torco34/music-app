<!-- <template>
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
          :name="showNewPwd ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          color="primary"
          @click="showNewPwd = !showNewPwd"
        />
      </template>
    </q-input>

    <div class="q-mt-lg full-width">
      <q-btn
        type="submit"
        rounded
        :label="isRegister ? 'Registrar' : 'Iniciar Sesión'"
        color="accent" class="glossy btn-form"
      />
    </div>
  </q-form>
</template>

<script setup>
import { ref } from 'vue';


const passwordValidationPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Props
const props = defineProps({
  isRegister: {
    type: Boolean,
    default: false,
  },
});


const formData = ref({
  username: '',
  email: '',
  password: '',

});
const showNewPwd = ref(false);

const emit = defineEmits(['submit']);

const handleSubmit = () => {


  emit('submit', { ...formData.value });
};
</script>

<style lang="scss" scoped>
.full-width {
  width: 400px;
  margin:  auto;
  color: #f7f7fa;

}

.q-mt-md {
  margin-top: 1rem;
  text-transform: none;
}
.btn-form{
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
  text-transform: none;
}
</style> -->
<template>
  <q-form @submit.prevent="handleSubmit" class="full-width">
    <q-input
      v-if="isRegister"
      v-model="formData.username"
      label="Nombre de usuario"
      dense
      required
      :rules="[(val) => !!val || 'El nombre de usuario es obligatorio']"
      autocomplete="username"
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
      autocomplete="email"
    />

    <q-input
      v-model="formData.password"
      :type="showNewPwd ? 'text' : 'password'"
      label="Contraseña"
      dense
      required
      :rules="getPasswordRules()"
      autocomplete="new-password"
    >
      <template #append>
        <q-icon
          :name="showNewPwd ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          color="primary"
          @click="showNewPwd = !showNewPwd"
        />
      </template>
    </q-input>

    <div class="q-mt-lg full-width">
      <q-btn
        type="submit"
        rounded
        :label="isRegister ? 'Registrar' : 'Iniciar Sesión'"
        color="accent" class="glossy btn-form"
      />
    </div>
  </q-form>
</template>

<script setup>
import { ref } from 'vue';

// Función para definir patrones de validación
const getPasswordRules = () => {
  if (props.isRegister) {
    return [
      (val) => !!val || 'La contraseña es obligatoria',
      (val) =>
        passwordValidationPattern.test(val) ||
        'Debe tener 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 especial'
    ];
  }
  // Validación para el inicio de sesión
  return [
    (val) => !!val || 'La contraseña es obligatoria'
    // Puedes agregar más reglas aquí si es necesario
  ];
};

const passwordValidationPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Props
const props = defineProps({
  isRegister: {
    type: Boolean,
    default: false,
  },
});

const formData = ref({
  username: '',
  email: '',
  password: '',
});

const showNewPwd = ref(false);

const emit = defineEmits(['submit']);

const handleSubmit = () => {
  emit('submit', { ...formData.value });
};
</script>

<style lang="scss" scoped>
.full-width {
  width: 400px;
  margin: auto;
  color: #f7f7fa;
}

.q-mt-md {
  margin-top: 1rem;
  text-transform: none;
}

.btn-form {
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
  text-transform: none;
}
</style>
