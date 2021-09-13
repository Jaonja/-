<template>
  <div class="footer-task">
    <p class="task-function">1/3 left</p>
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

<style lang="scss">
@import "@/assets/styles.scss";

.footer-task {
  display: flex;
  background-color: $main-color;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 1.375rem;
  .task-function {
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
  .footer-task .task-function {
    display: none;
  }
  .footer-task {
    margin-top: 0.875rem;
  }
}
</style>
