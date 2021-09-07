<template>
  <div class="radioButtons">
    <RadioButton v-for="button in buttons" :key="button.id" :text="button.text" :isChecked="button.isChecked" />
  </div>
</template>

<script>
import RadioButton from "@/components/RadioButton.vue";
export default {
  components: {
    RadioButton,
  },
  data() {
    return {
      buttons: [
        { text: "all", id: 1, isChecked: false },
        { text: "complited", id: 2, isChecked: false },
        { text: "active", id: 3, isChecked: false },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";

.radioButtons {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: $main-color;
  justify-content: space-around;
  margin-top: 0.125rem;
}

@media screen and (max-width: 690px) {
  .radioButtons {
    margin-top: 0.75rem;
  }
}
</style>
