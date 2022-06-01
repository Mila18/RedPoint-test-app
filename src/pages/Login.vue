<template>
    <div style="width: 25rem; background-color: aliceblue; margin-left: auto; margin-right: auto;">
        <form class="p-5 mt-5">
        <h2 class="mb-5">Авторизация</h2>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Логин</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите логин">
        </div>
        <div id="password" class="mb-3" style="position:relative;">
            <label for="password-input" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="password-input" placeholder="Введите пароль" v-model="password" v-show="!showPass">
            <input type="text" class="form-control" v-model="password" v-show="showPass">
            <a href="#" @click="showPass = !showPass">
                <span class="password-control" v-show="!showPass"></span>
                <span class="password-control view" v-show="showPass"></span>
            </a>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login">Войти</button>
        </form>
    </div>
</template>

<script>
import '../router/router'
export default {
    el: '#password',
   data(){
       return{ 
        showPass: false,
        password: '',
       } 
   },
   methods:{
       login(){
           localStorage.setItem('isAuth', true);
           this.$router.push('/');
       }
   }
}
</script>

<style>


.password-control {
	position: absolute;
	top: 40px;
	right: 10px;
	display: inline-block;
	width: 20px;
	height: 20px;
	background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
}
.view {
	background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
}
</style>