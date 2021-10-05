<template>
  <div :class="$style.checkboxTask">
    <label>
      <input
        type="checkbox"
        :class="$style.optionCheckbox"
        :checked="isChecked"
        @click="next"
      />
      {{ textTask }}
      <div :class="$style.close" @click="del"></div>
    </label>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    textTask: String,
    isChecked: Boolean,
    id: Number,
  },
  methods: {
    ...mapMutations(["delTask", "addTask", "CheckBoxNext"]),

    del() {
      this.delTask(this.id);
    },
    next() {
      this.CheckBoxNext(this.id);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles.scss";

.optionCheckbox {
  appearance: none;
  position: relative;
  top: 0.8125rem;
  left: 0;
  height: 1.5625rem;
  border-radius: 20%;
  width: 1.5625rem;
  transition: all 0.15s ease-out 0s;
  background: $OptionInputBack;
  border: none;
  color: $OptionInputColor;
  cursor: pointer;
  border: 0.0625rem solid $OptionInpCheck;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;

  &:checked {
    background: $OptionInpCheck;

    &::before {
      height: 1.5625rem;
      width: 1.5625rem;
      position: absolute;
      content: "✔";
      display: inline-block;
      font-size: 1rem;
      text-align: center;
      line-height: 2.5rem;
      bottom: 0.3125rem;
      right: -0.125rem;
    }

    &::after {
      -webkit-animation: click-wave 0.65s;
      -moz-animation: click-wave 0.65s;
      animation: click-wave 0.65s;
      background: $OptionInpAft;
      content: "";
      display: block;
      position: relative;
      z-index: 100;
    }
  }
}

label {
  font-size: 1.25rem;
  color: $headerh1;
  line-height: 1.75rem;
  margin-left: 1.25rem;
  z-index: 100;
}

.checkboxTask {
  margin-top: 1.25rem;
  border-radius: 0.625rem;
  background-color: $chekTask;
  max-width: 30rem;
  min-height: 3.125rem;
  display: flex;
}

.close {
  height: 24px;
  width: 24px;
  background-color: #ffdfbe;
  border-radius: 5px;
  position: relative;
  margin-left: 390px;
  z-index: 0;
  margin-top: -25px;
  border: 1px solid $inputRadio;
  display: flex;
  justify-content: center;
  &:after {
    position: absolute;
    top: -38px;
    bottom: 0;
    left: 0;
    right: 0;
    content: "\d7";
    font-size: 40px;
    color: $footerText;
    line-height: 100px;
    text-align: center;
    cursor: pointer;
  }
  &:hover {
    border-color: $radioColor;
  }
  &:hover:after {
    color: $radioColor;
  }
}

@media screen and (max-width: 690px) {
  .checkboxTask {
    width: 18.125rem;
    margin-left: 0.8125rem;
  }
  .close {
    margin: 0;
    margin-left: 220px;
    margin-top: -25px;
  }
}
</style>
