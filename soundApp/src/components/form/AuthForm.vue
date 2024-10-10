<template>


  <q-btn class="glossy q-mx-sm text-white" color="secondary" rounded label="Registrarse" @click="openRegisterModal" />
  <q-btn class="glossy q-mx-sm text-bae" rounded label="Iniciar Sesión" @click="openLoginModal" />

  <!-- Modal para Registro -->
  <BaseModal :isOpen="isRegisterModalOpen" title="Registro" @close="closeRegisterModal">
    <BaseForm :is-register="true" @submit="handleRegister" />
  </BaseModal>

  <!-- Modal para Inicio de Sesión -->
  <BaseModal :isOpen="isLoginModalOpen" title="Iniciar Sesión" @close="closeLoginModal">
    <BaseForm :is-register="false" @submit="handleLogin" />
  </BaseModal>

</template>

<script setup>
import BaseForm from 'src/components/shared/BaseForm.vue';
import BaseModal from 'src/components/shared/BaseModal.vue';


import { ref } from 'vue';


// Control de los modales de registro e inicio de sesión
const isRegisterModalOpen = ref(false);
const isLoginModalOpen = ref(false);

// Funciones para abrir los modales
const openRegisterModal = () => {
  isRegisterModalOpen.value = true;
};

const openLoginModal = () => {
  isLoginModalOpen.value = true;
};

// Funciones para cerrar los modales
const closeRegisterModal = () => {
  isRegisterModalOpen.value = false;
};

const closeLoginModal = () => {
  isLoginModalOpen.value = false;
};

// Funciones para manejar el envío del formulario
const handleRegister = (formData) => {
  console.log('Registro:', formData);
  closeRegisterModal();
};

const handleLogin = (formData) => {
  console.log('Inicio de Sesión:', formData);
  closeLoginModal();
};
</script>
