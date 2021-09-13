<template>
  <div :class="$style.footerTodo">
    <p :class="$style.taskTodo">1/3 left</p>
    <RadioButtons />
  </div>
</template>

<script>
import RadioButtons from "@/components/RadioButtons.vue";
export default {
  components: {
    RadioButtons,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles.scss";

.footerTodo {
  display: flex;
  background-color: $main-color;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 1.375rem;
  .taskTodo {
    display: flex;
    margin-left: 2.5rem;
    font-family: $Open-Sans;
    font-style: normal;
    font-weight: 600;
    color: $footerText;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

@media screen and (max-width: 690px) {
  .footerTodo .taskTodo {
    display: none;
  }
  .footerTodo {
    margin-top: 0.875rem;
  }
}
</style>
