<template>
  <div class="footer-task">
    <p class="task-function">1/3 left</p>
    <RadioButtons />
  </div>
</template>

<script>
import RadioButtons from "@/components/RadioButtons.vue";
export default {
  components: {
    RadioButtons,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";

.footer-task {
  display: flex;
  flex-direction: row;
  background-color: $main-color;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 14px;
  .task-function {
    display: flex;
    margin-left: 40px;
    color: rgba(127, 75, 19, 0.42);
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
}
@keyframes click-wave {
  0% {
    height: 40px;
    width: 40px;
    opacity: 0.35;
    position: relative;
  }
  100% {
    height: 200px;
    width: 200px;
    margin-left: -80px;
    margin-top: -80px;
    opacity: 0;
  }
}

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
}
.credit img {
  width: 72px;
}
.credit:hover {
  transform: scale(0.95);
}

@media screen and (max-width: 690px) {
  .footer-task .task-function {
    display: none;
  }
}
</style>
