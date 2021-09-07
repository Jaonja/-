<template>
    <div class="checkboxTask">
      <label>
        <input type="checkbox" class="option-input checkbox" checked />
         {{textTask}}
      </label>
      <a class="close"></a>
      <a class="close1"></a>
      <a class="close2"></a>
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
    top: 0.8125rem;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.5625rem;
    border-radius: 20%;
    width: 1.5625rem;
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
        height: 1.5625rem;
        width: 1.5625rem;
        position: absolute;
        content: "✔";
        display: inline-block;
        font-size: 1rem;
        text-align: center;
        line-height: 40px;
        bottom: 0.3125rem;
        right: -0.125rem;
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

  .input-task {
    margin-top: 1.25rem;
    justify-content: center;
    text-align: center;
    background: #ffecd8;
    box-sizing: border-box;
    border: 0.0625rem dashed $main-color;
    border-radius: 0.625rem;
    width: 30rem;
    height: 3.125rem;
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
      background-color: #333;
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
      background-color: #333;
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
      background-color: #333;
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
  .input-task {
    max-width: 18.125rem;
  }
  .chekboxWrapper {
    display: contents;
    margin-left: 0;
  }
  .checkboxTask {
    width: 18.125rem;
    margin-left: 0.8125rem;
  }
  .input-task {
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 0.6875rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
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
