<template>
  <q-page>
    <section>
      <BaseBanner
        v-for="banner in dataHome"
        :key="banner.id"
        :imageSrc="banner.imageSrc"
        :title="banner.title"
        :subtitle="banner.subtitle"
        :buttonLabel="banner.buttonLabel"
      />
    </section>
    <section class="q-pa-sm">
      <HomeInformation />
    </section>
  </q-page>
</template>

<script setup>
import HomeInformation from "src/components/home/HomeInformation.vue";
import BaseBanner from "src/components/shared/BaseBanner.vue";
import dataBanners from "src/dataJson/dataBanner/dataBanners.json";
import { ref } from "vue";

const dataHome = ref(dataBanners.dataHomeJson);
</script>
