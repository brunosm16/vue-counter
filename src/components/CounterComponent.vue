<template>
  <div class="counter">
    <h1 class="counter__number">1</h1>

    <div class="counter__actions">
      <button @click="decrease">-</button>
      <button @click="increase">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',

  methods: {
    decrease() {},

    increase() {},
  },
};
</script>

<style scoped lang="scss">
.counter {
  border: 1px black solid;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &__number {
    font-size: 3rem;
    color: #264653;
  }

  &__actions {
    display: flex;
    gap: 16px;
    button {
      padding: 8px 16px;
      background: #344e41;
      color: #fff;
      font-size: 1rem;
    }
  }
}
</style>
