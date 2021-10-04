<template>
  <div :class="$style.header">
    <p>To do List</p>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles.scss";

.header {
  display: flex;
  background-color: $main-color;
  margin: 0;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  height: 3.125rem;
  color: $headerh1;
  align-items: center;
  justify-content: center;
}
</style>
