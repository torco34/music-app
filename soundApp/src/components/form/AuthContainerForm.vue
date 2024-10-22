
<template>
  <div class="button-container">
    <q-btn
      class="glossy q-mx-sm"
      color="primary"
      rounded
      label="Registrarse"
      @click="openModal('register')"
    />
    <q-btn
      class="glossy q-mx-sm"
      color="secondary"
      rounded
      label="Iniciar Sesión"
      @click="openModal('login')"
    />
  </div>

  <!--  Modal para Registro -->
  <BaseModal
    :isOpen="isRegisterModalOpen"
    title="Registro"
    @close="closeModal('register')"
  >
    <RegisterLoginForm :is-register="true" @submit="handleRegister" />
  </BaseModal>
  <!-- Modal para Inicio de Sesión -->
  <BaseModal
    :isOpen="isLoginModalOpen"
    title="Iniciar Sesión"
    @close="closeModal('login')"
  >
    <RegisterLoginForm :is-register="false" @submit="handleLogin" />
  </BaseModal>
</template>

<script setup>
import RegisterLoginForm from 'src/components/form/RegisterLoginForm.vue';
import BaseModal from 'src/components/shared/BaseModal.vue';
import { ref } from 'vue';
import { useAuthStore } from '../../stores/storeAuth/AuthStore.js';
const authStore = useAuthStore();
console.log(authStore, "authStore")
// Estado reactivo para controlar los modales
const isRegisterModalOpen = ref(false);
const isLoginModalOpen = ref(false);

// Métodos para abrir y cerrar modales
const openModal = (type) => {
  if (type === 'register') isRegisterModalOpen.value = true;
  if (type === 'login') isLoginModalOpen.value = true;
};

const closeModal = (type) => {
  if (type === 'register') isRegisterModalOpen.value = false;
  if (type === 'login') isLoginModalOpen.value = false;
};


// lógica para manejar el registros
const handleRegister = async (data) => {
  try {
    const response = await authStore.register(data);
    if (!authStore.error) {
      closeModal('register');
    }
  } catch (error) {
    console.error('Error en el registro:', authStore.error);
  }
};



// Lógica para manejar el inicio de sesión
const handleLogin = async (data) => {
  try {
    const response = await loginUser(data);
    console.log('Inicio de sesión exitoso:', response.data);
    closeModal('login');
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
  }
};


</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
</style>
