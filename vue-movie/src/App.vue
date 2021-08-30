<template>
  <div>
    <div class="wrapper">
      <div class="wrapper-content">
        <div class="todo-wrapper">
          <h1>To do list</h1>
          <div class="chekbox-wrapper">
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
          <div class="footer-task">
            <p class="task-function">1/3 left</p>
            <label for="opt1" class="radio">
              <input type="radio" name="rdo" id="opt1" class="hidden" />
              <span class="label"></span>All
            </label>

            <label for="opt2" class="radio">
              <input type="radio" name="rdo" id="opt2" class="hidden" />
              <span class="label"></span>Active
            </label>

            <label for="opt3" class="radio">
              <input type="radio" name="rdo" id="opt3" class="hidden" />
              <span class="label"></span>Completed
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
@import "./assets/styles.scss";
body {
  background-color: $color-body;
}

.todo-wrapper {
  width: 540px;
  height: 424px;
  background: #fff4e9;
  position: relative;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid #905b3cf2;
  box-sizing: border-box;
  box-shadow: 0px 8px 35px 5px $main-color;
  h1 {
    display: flex;
    background-color: $main-color;
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    height: 50px;
    color: #7f4b13;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 30px;
    line-height: 28px;
  }
}
.chekbox-wrapper {
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
.footer-task {
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
  .todo-wrapper {
    max-width: 320px;
  }
  .input-task {
    max-width: 290px;
  }
  .footer-task {
    margin: 0;
    height: 80px;

  }
  .footer-task .task-function {
    display: none;
  }
  .chekbox-wrapper{
    display: contents;
  }
  .checkbox-task{
    width: 290px;
    margin-left: 13px;
  }
  .input-task{
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: 11px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .radio{
  margin: 0;
   margin-bottom: 23px;
   font-size: 14px;
  }
  .chekbox-wrapper .close:before, .chekbox-wrapper .close:after {
    
    margin: 0;
}
.chekbox-wrapper .close1:before, .chekbox-wrapper .close1:after {
     margin: 0;
}
.chekbox-wrapper .close2:before, .chekbox-wrapper .close2:after {
     margin: 0;
}
}
</style>
