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
  margin-top: 22px;
  .task-function {
    display: flex;
    margin-left: 40px;
    font-family: $Open-Sans;
    font-style: normal;
    font-weight: 600;
    color: $footerText;
    font-size: 20px;
    line-height: 28px;
  }
}

@media screen and (max-width: 690px) {
  .footer-task .task-function {
    display: none;
  }
  .footer-task {
    margin-top: 14px;
  }
}
</style>
