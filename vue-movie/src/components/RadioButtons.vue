<template>
  <div :class="$style.radioButtons">
    <RadioButton
      v-for="button in buttons"
      :key="button.id"
      :text="button.text"
      :isChecked="button.isChecked"
    />
  </div>
</template>

<script>
import RadioButton from "@/components/RadioButton.vue";

import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["buttons"]),
  },
  components: {
    RadioButton,
  },
};
</script>

<style lang="scss" module>
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
