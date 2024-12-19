<template>
  <q-page>
    <section>
      <BaseBanner
        v-for="banner in dataHistory"
        :key="banner.id"
        :imageSrc="banner.imageSrc"
        :title="banner.title"
        :subtitle="banner.subtitle"
        :buttonLabel="banner.buttonLabel"
      />
    </section>

    <section class="q-pa-xl">
      <HistoryMusic />
    </section>
  </q-page>
</template>

<script setup>
import HistoryMusic from "src/components/historyMusic/HistoryMusic.vue";
import dataBanners from "src/dataJson/dataBanner/dataBanners.json";
import BaseBanner from "src/components/shared/BaseBanner.vue";
import { ref } from "vue";

const dataHistory = ref(dataBanners.dataHistoryJson);
console.log("dataHistory", dataHistory);
</script>
<style scoped>
section {
  margin-bottom: 50px;
}</style>
