<template>
  <div class="app"> 
    <form>
      <input class="input" type="text" placeholder="Название">
      <input class="input" type="text" placeholder="описание">
      <button class="btn" @click="createPost">Создать</button>
    </form>
     <div class="post" v-for="post in posts" :key="post.title">
       <div>Название: {{post.title}}</div>
       <div>Описание: {{post.body}}</div>
       <div>АЙДИ: {{post.id}}</div>
     </div>
  </div>
</template>

<script>

export default{
  data (){
    return {
      posts: [
        {id:1, title: 'БМВ', body: '2018 года'},
        {id:2, title: 'Мерседес', body: '2020 года'},
        {id:3, title: 'Ауди', body: '2021 года'},
      ]
    }
  },
methods:{
  createPost(){

  }
}
}
</script>

<style>

form {
  display: flex;
  flex-direction: column;
}
.app{
  padding: 20px;
}
.post {
  margin-top: 30px;
  background-color: bisque;
  border: 2px solid red;
}
.input {
  width: 100%;
  border: 1px solid teal;
padding: 10px 15px;
margin-top: 15px;
}
.btn{
  align-self: flex-start;
  margin-top: 15px;
  background-color: wheat;
  border: 3px solid;
}
.btn:hover{
  background-color: violet;
  box-shadow: red 0px 0px 10px 0px;
}
</style>
