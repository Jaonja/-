<template>
  <label for="opt1" class="radio">
    <input type="radio" name="rdo" id="opt1" class="hidden" />
    <span class="label"></span>{{ text }}
  </label>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles.scss";



.radio {
  position: relative;
  cursor: pointer;
  line-height: 20px;
  font-size: 19px;
  font-family: $Open-Sans;
  margin: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: rgba(127, 75, 19, 0.42);

  .label {
    position: relative;
    display: block;
    float: left;
    border: 2px solid $radioColor;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: "";
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
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
  border-color: green;

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
  right: 20px;
  bottom: 20px;
  transition: all 0.2s ease;
  -webkit-user-select: none;
  user-select: none;
  opacity: 0.6;

  img {
    width: 72px;
  }

  &:hover {
    transform: scale(0.95);
  }
}
@media screen and (max-width: 690px) {
  label.radio {
    font-size: 14px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>
