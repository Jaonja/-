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

@media screen and (max-width: 690px) {
  label.radio {
    font-size: 14px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>
