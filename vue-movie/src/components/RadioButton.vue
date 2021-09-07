<template>
  <label for="opt1" class="radio">
    <input type="radio" name="rdo" id="opt1" class="hidden" :checked = "isChecked" />
    <span class="label"></span>{{ text }}
  </label>
</template>
<script>
export default {
  props: {
    text: String,
    isChecked: Boolean,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles.scss";

.radio {
  position: relative;
  cursor: pointer;
  line-height: 1.25rem;
  font-size: 1.1875rem;
  font-family: $Open-Sans;
  margin: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  color: rgba(127, 75, 19, 0.42);

  .label {
    position: relative;
    display: block;
    float: left;
    border: 0.125rem solid $radioColor;
    margin-right: 0.625rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: "";
      position: absolute;
      top: 0.3125rem;
      left: 0.3125rem;
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 100%;
      background: $radioColor;
      transform: scale(0);
      transition: all 0.2s ease;
      opacity: 0.08;
      pointer-events: none;
    }
  }

  &:hover .label:after {
    transform: scale(3.6);
  }
}

input[type="radio"]:checked + .label {
  border-color: $inputRadio;

  &:after {
    transform: scale(1);
    transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
    opacity: 1;
  }
}

.hidden {
  display: none;
}

.credit {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  transition: all 0.2s ease;
  -webkit-user-select: none;
  user-select: none;
  opacity: 0.6;

  img {
    width: 4.5rem;
  }

  &:hover {
    transform: scale(0.95);
  }
}
@media screen and (max-width: 690px) {
  label.radio {
    font-size: 0.875rem;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>
