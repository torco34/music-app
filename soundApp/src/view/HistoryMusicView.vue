<template>
  <q-page padding>
    <div>
      <div class="">
    <BaseBanner
      v-for="(banner, index) in bannersRef"
      :key="index"
      :imageSrc="banner.imageSrc"
      :title="banner.title"
      :subtitle="banner.subtitle"
      :buttonLabel="banner.buttonLabel"
      @navigate="handleNavigate(banner.title)"
    />
  </div>
      <HistoryMusic />
    </div>
  </q-page>
</template>

<script setup>
import HistoryMusic from "src/components/historyMusic/HistoryMusic.vue";
import BaseBanner from "src/components/shared/BaseBanner.vue";

</script>
<style scoped></style>
