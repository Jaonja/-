<template>
  <label for="opt1" class="radio">
    <input type="radio" name="rdo" id="opt1" class="hidden" />
    <span class="label"></span>{{ text }}
  </label>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles.scss";

</style>
