<template>
<div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" @click="$router.push('/')">Главная</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" @click="$router.push('/profile')">Профиль</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" @click="$router.push('/ticket')">Список обращений</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" @click="$router.push('/login')">Выполнить вход</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" @click="logout">Выйти</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <div class="app">
        <router-view></router-view>
    </div>
</div>  
</template>

<script>
export default {
     methods:{
         logout(){
           localStorage.setItem('isAuth', "");
           this.$router.push('/login');
       }
     }
}
</script>

<style>

</style>