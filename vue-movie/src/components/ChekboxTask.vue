<template>
  <div :class="$style.checkboxTask">
    <label>
      <input
        type="checkbox"
        :class="$style.optionCheckbox"
        :checked="isChecked"
      />
      {{ textTask }}
    </label>
    <a :class="$style.close"></a>
    <a :class="$style.close1"></a>
    <a :class="$style.close2"></a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    textTask: String,
    isChecked: Boolean,
    id: Number,
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
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 2rem;
  height: 2rem;
  opacity: 0.3;
  margin-left: 1.25rem;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 0.625rem;
    top: 3.125rem;
    content: " ";
    height: 2.0625rem;
    width: 0.125rem;
    background-color: $checkBoxAftBack;
    margin-left: -1.25rem;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}

.close1 {
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 2rem;
  height: 2rem;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 0.625rem;
    top: 7.5rem;
    content: " ";
    height: 2.0625rem;
    width: 0.125rem;
    background-color: $checkBoxAftBack;
    margin-left: -1.25rem;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}

.close2 {
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 2rem;
  height: 2rem;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 0.625rem;
    top: 11.5625rem;
    content: " ";
    height: 2.0625rem;
    width: 0.125rem;
    background-color: $checkBoxAftBack;
    margin-left: -1.25rem;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}
@media screen and (max-width: 690px) {
  .checkboxTask {
    width: 18.125rem;
    margin-left: 0.8125rem;
  }

  .chekboxWrapper .close:before,
  .chekboxWrapper .close:after {
    margin: 0;
  }
  .chekboxWrapper .close1:before,
  .chekboxWrapper .close1:after {
    margin: 0;
  }
  .chekboxWrapper .close2:before,
  .chekboxWrapper .close2:after {
    margin: 0;
  }
}
</style>
