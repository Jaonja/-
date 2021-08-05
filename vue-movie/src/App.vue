<template>
  <div>
    <div class="wrapper">
      <div class="wrapper-content">
        <div class="todo-wrapper">
          <h1>to do list</h1>
          <div class="chekbox-wrapper">
            <div class="checkbox-task"><input type="checkbox" /><span class="task-text">Task 1</span> <a href="#" class="close"></a></div>
            <div class="checkbox-task"><input type="checkbox" /><span class="task-text">Task 2</span> <a href="#" class="close1"></a></div>
            <div class="checkbox-task"><input type="checkbox" /> <span class="task-text">Task 3</span> <a href="#" class="close2"></a></div>
            <div><input type="text" placeholder="Add a new task" class="input-task" /></div>
          </div>
          <div class="footer-task">
            <p class="task-function">1/3 left</p>
            <p class="task-function">All</p>
            <p class="task-function">Active</p>
            <p class="task-function">Completed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
@import './scss/functions.scss';
body {
  background-color: $color-body;
}

.todo-wrapper {
  width: 540px;
  height: 437px;
  background: #fff4e9;
  position: relative;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 8px 35px 5px $main-color;
  h1 {
    display: flex;
    justify-content: center;
    background-color: $main-color;;
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    height: 50px;
    color: #7f4b13;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 28px;
    text-align: center;
  }
}
.chekbox-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 25px;

  .checkbox-task {
    background-color: #ffdfbe;
    margin-top: 20px;
    border-radius: 10px;
    max-width: 480px;
    min-height: 50px;
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      width: 24px;
      height: 24px;
      background: $main-color;;
      border-radius: 5px;
      margin-left: 20px;
    }
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
  .task-text {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #7f4b13;
    margin-left: 30px;
  }
  .close {
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
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
  background-color: $main-color;;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 34px;
  .task-function {
    display: flex;
    margin-left: 40px;
    color: rgba(127, 75, 19, 0.42);
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    &:nth-child(2) {
      border: 1px solid rgba(127, 75, 19, 0.42);
      border-radius: 10px;
      width: 49px;
      justify-content: center;
    }
  }
}
</style>
