<template>
  <div id="app">
    <CounterComponent />
  </div>
</template>

<script>
import CounterComponent from '@/components/CounterComponent.vue';

export default {
  name: 'App',

  components: {
    CounterComponent,
  },
};
</script>

<style lang="scss"></style>
