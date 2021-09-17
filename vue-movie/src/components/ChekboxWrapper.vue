<template>
  <div :class="$style.checkboxWrapper">
    <ChekboxTask
      v-for="ckeckBox in ckeckBoxs"
      :key="ckeckBox.id"
      :textTask="ckeckBox.textTask"
      :isChecked="ckeckBox.isChecked"
    />
    <div>
      <input type="text" placeholder="Add a new task" :class="$style.input" />
    </div>
  </div>
</template>

<script>
import ChekboxTask from "@/components/ChekboxTask.vue";

import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["ckeckBoxs"]),
  },
  components: {
    ChekboxTask,
  },
};
</script>
<style lang="scss" module>
@import "@/assets/styles.scss";

.checkboxWrapper {
  justify-content: center;
  flex-direction: column;
  margin-left: 1.5625rem;
  input[type="text"] {
    font-size: 1.875rem;
    font-weight: 700;
  }
}

.input {
  margin-top: 1.25rem;
  justify-content: center;
  text-align: center;
  background: $inputTask;
  box-sizing: border-box;
  border: 0.0625rem dashed $main-color;
  border-radius: 0.625rem;
  width: 30rem;
  height: 3.125rem;
}

@media screen and (max-width: 690px) {
  .checkboxWrapper {
    display: contents;
    margin-left: 0;
  }
  .input {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0.6875rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    max-width: 18.125rem;
  }
}
</style>
