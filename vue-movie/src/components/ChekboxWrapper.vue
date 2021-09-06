<template>
  <div class="chekboxWrapper">
    <div class="checkbox-task">
      <label>
        <input type="checkbox" class="option-input checkbox" checked />
        Task 1
      </label>
      <a href="#" class="close"></a>
    </div>
    <div class="checkbox-task">
      <label>
        <input type="checkbox" class="option-input checkbox" checked />
        Task 2 </label
      ><a href="#" class="close1"></a>
    </div>
    <div class="checkbox-task">
      <label>
        <input type="checkbox" class="option-input checkbox" checked />
        Task 3 </label
      ><a href="#" class="close2"></a>
    </div>
    <div><input type="text" placeholder="Add a new task" class="input-task" /></div>
  </div>
</template>

<script></script>

<style lang="scss">
@import "@/assets/styles.scss";

.chekboxWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 25px;
  input[type="text"] {
    font-size: 30px;
    font-weight: 700;
  }
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
  }

  .option-input:checked {
    background: #feb567;
  }
  .option-input:checked::before {
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
  .option-input:checked::after {
    -webkit-animation: click-wave 0.65s;
    -moz-animation: click-wave 0.65s;
    animation: click-wave 0.65s;
    background: #40e0d0;
    content: "";
    display: block;
    position: relative;
    z-index: 100;
  }
  label {
    font-size: 20px;
    font-size: 20px;
    line-height: 28px;
    color: #7f4b13;
    margin-left: 20px;
  }

  .checkbox-task {
    background-color: #ffdfbe;
    margin-top: 20px;
    border-radius: 10px;
    max-width: 480px;
    min-height: 50px;
    display: flex;
  }
  .input-task {
    margin-top: 20px;
    justify-content: center;
    text-align: center;
    background: #ffecd8;
    border: 1.5px dashed #ffca93;
    box-sizing: border-box;
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
  }
  .close:hover {
    opacity: 1;
  }
  .close:before,
  .close:after {
    position: absolute;
    left: 10px;
    top: 50px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
    margin-left: -20px;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
  .close1 {
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
  }
  .close1:hover {
    opacity: 1;
  }
  .close1:before,
  .close1:after {
    position: absolute;
    left: 10px;
    top: 120px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
    margin-left: -20px;
  }
  .close1:before {
    transform: rotate(45deg);
  }
  .close1:after {
    transform: rotate(-45deg);
  }
  .close2 {
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
  }
  .close2:hover {
    opacity: 1;
  }
  .close2:before,
  .close2:after {
    position: absolute;
    left: 10px;
    top: 185px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
    margin-left: -20px;
  }
  .close2:before {
    transform: rotate(45deg);
  }
  .close2:after {
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
  .checkbox-task {
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

  .chekbox-wrapper .close:before,
  .chekbox-wrapper .close:after {
    margin: 0;
  }
  .chekbox-wrapper .close1:before,
  .chekbox-wrapper .close1:after {
    margin: 0;
  }
  .chekbox-wrapper .close2:before,
  .chekbox-wrapper .close2:after {
    margin: 0;
  }
}
</style>
