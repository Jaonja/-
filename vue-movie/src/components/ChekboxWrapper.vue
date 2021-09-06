<template>
  <div class="chekboxWrapper">
    <ChekboxTask v-for="ckeckBox in ckeckBoxs" :key="ckeckBox" :textTask="ckeckBox.textTask" />
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
      ckeckBoxs: [{ textTask: "Task 1" }, { textTask: "Task 2" }, { textTask: "Task 3" }],
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/styles.scss";

.chekboxWrapper {
  justify-content: center;
  flex-direction: column;
  margin-left: 25px;
  input[type="text"] {
    font-size: 30px;
    font-weight: 700;
  }
  @media screen and (max-width: 690px) {
    .input-task {
      max-width: 290px;
    }
    .chekboxWrapper {
      display: contents;
      margin-left: 0;
    }
    .checkbox-task {
      width: 290px;
      margin-left: 13px;
    }
    .input-task {
      display: block;
      justify-content: center;
      align-items: center;
      margin-left: 11px;
      margin-top: 10px;
      margin-bottom: 10px;
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
