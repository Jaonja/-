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
  margin: 15px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: rgba(127, 75, 19, 0.42);
}
.radio .label {
  position: relative;
  display: block;
  float: left;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 2px solid red;
  border-radius: 100%;
  -webkit-tap-highlight-color: transparent;
}
.radio .label:after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: red;
  transform: scale(0);
  transition: all 0.2s ease;
  opacity: 0.08;
  pointer-events: none;
}
.radio:hover .label:after {
  transform: scale(3.6);
}
input[type="radio"]:checked + .label {
  border-color: green;
}
input[type="radio"]:checked + .label:after {
  transform: scale(1);
  transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
  opacity: 1;
}
</style>
