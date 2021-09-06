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
  align-items: flex-end;
  background-color: $main-color;
  justify-content: space-around;
  margin-top: 2px;
}

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
</style>
