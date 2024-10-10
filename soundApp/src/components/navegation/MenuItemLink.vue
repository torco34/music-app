<template>
  <q-item clickable tag="router-link" :to="props.link" class="menu-item">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" class="menu-icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="menu-title">{{ props.title }}</q-item-label>
      <q-item-label caption class="menu-caption">{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    // required: true
  },
  caption: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: '#'
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped>
.menu-item {
  display: flex;
  align-items: center;
  margin-top: 15px;
  /* padding-right: 18px; */

  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.menu-item:hover {
  border-right: 4px solid $primary;
  color: $text;
}

.menu-icon {
  color: $primary;
  font-size: 30px;

  font-size: 30px;
}

.menu-title {
  font-weight: bold;
  font-size: 16px;
  // color: $primary;
  // color: #333;
}

.menu-caption {
  font-size: 14px;
  color: $text;
}
</style>
