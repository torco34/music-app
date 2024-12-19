<template>
  <q-page>
    <section>
      <BaseBanner
        v-for="banner in bannersFavorite"
        :key="banner.id"
        :imageSrc="banner.imageSrc"
        :title="banner.title"
        :subtitle="banner.subtitle"
        :buttonLabel="banner.buttonLabel"
      />

    </section>
    <section>
      <FavoriteMusicFather />
    </section>
  </q-page>
</template>

<script setup>
import FavoriteMusicFather from "src/components/favoriteMusic/FavoriteMusicFather.vue";
import BaseBanner from "src/components/shared/BaseBanner.vue";
import dataBanners from "src/dataJson/dataBanner/dataBanners.json";
import { ref } from "vue";

const bannersFavorite = ref(dataBanners.dataFavoriteJson);
</script>

<style scoped>
section {
  margin-bottom: 20px;
}
</style>
