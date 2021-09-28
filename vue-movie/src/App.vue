<template>
  <div>
    <div class="wrapper">
      <div class="wrapper-content">
        <div class="todo-wrapper">
          <Header />
          <ChekboxWrapper />
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ChekboxWrapper from "@/components/ChekboxWrapper.vue";
export default {
  components: {
    Header,
    ChekboxWrapper,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";

body {
  background-color: $color-body;
}

.todo-wrapper {
  width: 33.75rem;
  background: $TdwrapCol;
  position: relative;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid $TdWrbord;
  box-sizing: border-box;
  box-shadow: 0px 0.5rem 2.1875rem 0.3125rem $main-color;
}

@media screen and (max-width: 690px) {
  .todo-wrapper {
    max-width: 20rem;
    max-height: 25.25rem;
  }
}
</style>
