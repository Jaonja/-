<template>
  <div class="radioButtons">
    <RadioButton v-for="button in buttons" :key="button.id" :text="button.text" />
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
        { text: "all", id: 1, isCheked: true },
        { text: "complited", id: 2, isCheked: false },
        { text: "active", id: 3, isCheked: false },
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
  background-color: $main-color;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 22px;
  .task-function {
    display: flex;
    margin-left: 40px;
    color: rgba(127, 75, 19, 0.42);
    font-family: $Open-Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
}


.radio {
  position: relative;
  cursor: pointer;
  line-height: 20px;
  font-size: 19px;
  margin: 15px;
  font-family: $Open-Sans;
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
  border: 2px solid $radioColor;
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
  background: $radioColor;
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
  label.radio {
    font-size: 14px;
  }

  .radioButtons {
    margin-left: 20px;
    margin-top: 2px;
  }
}
</style>
