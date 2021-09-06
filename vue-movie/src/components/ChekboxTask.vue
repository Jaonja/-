<template>
    <div class="checkboxTask">
      <label>
        <input type="checkbox" class="option-input checkbox" checked />
         {{textTask}}
      </label>
      <a class="close"></a>
    </div>
</template>


<script>
export default {
  props: {
    textTask: String,
  },
};
</script>


<style lang="scss">
@import "@/assets/styles.scss";

  .option-input {
    appearance: none;
    position: relative;
    top: 13.33333px;
    right: 0;
    bottom: 0;
    left: 0;
    height: 25px;
    border-radius: 20%;
    width: 25px;
    transition: all 0.15s ease-out 0s;
    background: #ffdfbe;
    border: none;
    color: #fff;
    cursor: pointer;
    border: 1.5px solid #feb567;
    display: inline-block;
    margin-right: 0.5rem;
    outline: none;
    position: relative;
    z-index: 1000;

    &:checked {
      background: #feb567;

      &::before {
        height: 25px;
        width: 25px;
        position: absolute;
        content: "✔";
        display: inline-block;
        font-size: 16.66667px;
        text-align: center;
        line-height: 40px;
        bottom: 5px;
        right: -2px;
      }

      &::after {
        -webkit-animation: click-wave 0.65s;
        -moz-animation: click-wave 0.65s;
        animation: click-wave 0.65s;
        background: #40e0d0;
        content: "";
        display: block;
        position: relative;
        z-index: 100;
      }
    }
  }

  label {
    font-size: 20px;
    font-size: 20px;
    color: $headerh1;
    line-height: 28px;
    margin-left: 20px;
  }

  .checkboxTask {
    margin-top: 20px;
    border-radius: 10px;
    background-color: $chekTask;
    max-width: 480px;
    min-height: 50px;
    display: flex;
  }

  .input-task {
    margin-top: 20px;
    justify-content: center;
    text-align: center;
    background: #ffecd8;
    box-sizing: border-box;
    border: 1.5px dashed $main-color;
    border-radius: 10px;
    width: 480px;
    height: 50px;
  }

  .close {
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    margin-left: 20px;

    &:hover {
      opacity: 1;
    }

    &:before,
    &:after {
      position: absolute;
      left: 10px;
      top: 50px;
      content: " ";
      height: 33px;
      width: 2px;
      background-color: #333;
      margin-left: -20px;
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
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;

    &:hover {
      opacity: 1;
    }

    &:before,
    &:after {
      position: absolute;
      left: 10px;
      top: 120px;
      content: " ";
      height: 33px;
      width: 2px;
      background-color: #333;
      margin-left: -20px;
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
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;

    &:hover {
      opacity: 1;
    }

    &:before,
    &:after {
      position: absolute;
      left: 10px;
      top: 185px;
      content: " ";
      height: 33px;
      width: 2px;
      background-color: #333;
      margin-left: -20px;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
  @media screen and (max-width: 690px) {
  .input-task {
    max-width: 290px;
  }
  .chekboxWrapper {
    display: contents;
    margin-left: 0;
  }
  .checkboxTask {
    width: 290px;
    margin-left: 13px;
  }
  .input-task {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 11px;
    margin-top: 10px;
    margin-bottom: 10px;
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
