<template>
  <div class="chekboxWrapper">
    <ChekboxTask
      v-for="ckeckBox in ckeckBoxs"
      :key="ckeckBox.id"
      :textTask="ckeckBox.textTask"
      :isChecked="ckeckBox.isChecked"
    />
    <div>
      <input type="text" placeholder="Add a new task" class="input-task" />
    </div>
  </div>
</template>

<script>
import ChekboxTask from "@/components/ChekboxTask.vue";
export default {
  components: {
    ChekboxTask,
  },
  data() {
    return {
      ckeckBoxs: [
        { textTask: "Task 1", id: 1, isChecked: false },
        { textTask: "Task 2", id: 2, isChecked: false },
        { textTask: "Task 3", id: 3, isChecked: false },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/styles.scss";

.chekboxWrapper {
  justify-content: center;
  flex-direction: column;
  margin-left: 1.5625rem;
  input[type="text"] {
    font-size: 1.875rem;
    font-weight: 700;
  }
  @media screen and (max-width: 690px) {
    .input-task {
      max-width: 18.125rem;
    }
    .chekboxWrapper {
      display: contents;
      margin-left: 0;
    }
    .checkbox-task {
      width: 18.125rem;
      margin-left: 0.8125rem;
    }
    .input-task {
      display: block;
      justify-content: center;
      align-items: center;
      margin-left: 0.6875rem;
      margin-top: 0.625rem;
      margin-bottom: 0.625rem;
    }

    .chekbox-wrapper .close:before,
    .chekbox-wrapper .close:after {
      margin: 0;
    }
    .chekbox-wrapper .close1:before,
    .chekbox-wrapper .close1:after {
      margin: 0;
    }
    .chekbox-wrapper .close2:before,
    .chekbox-wrapper .close2:after {
      margin: 0;
    }
  }
}
</style>
