<template>
  <div id="app">
    <Header />

    <div class="py-2">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
export default {
  name: 'App',
  components: {
    Header
  }
};
</script>
