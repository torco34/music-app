<template>

  <div class="blur-green-bg col flex text-white items-center q-pb-md">
    <q-input borderless v-model="searchTerm" input-class="" class="q-mx-lg col text-white "
      placeholder="Buscar tu musica">
      <template v-slot:prepend>
        <q-icon v-if="searchTerm === ''" name="search" class="text-base text-xl" />
        <q-icon v-else name="clear" class="cursor-pointer text-base " @click="search = ''" />
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// const search = ref('');

const searchTerm = ref('');

// const filteredItems = computed(() => {
//   return items.value.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
//   );
// });

const handleItemClick = (item) => {

}
</script>

<style lang="scss" scoped>
.blur-green-bg {
  backdrop-filter: blur(20px);

  background-color: rgba(234, 223, 238, 0.6);
  width: 400px;
}
</style>
