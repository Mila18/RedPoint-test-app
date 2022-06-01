<template>
    <div style="width: 25rem; height: 25em; background-color: aliceblue;">
        <form class="p-2 form">
            <h3 class="mb-5">Создание нового тикета</h3>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Заголовок</label>
                <input type="text" class="form-control" v-model="ticket.title">
            </div>
            <div class="mb-3">
                <label for="password-input" class="form-label">Описание</label>
                <textarea class="form-control" rows="3" v-model="ticket.description"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click="addTicket">Создать</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ticket:{
                title:'',
                description:''
            }
        }
    },
    methods:{
        addTicket(){
                this.axios
                .post('https://localhost:5001/Tickets',this.ticket)
            }
    }
}
</script>

<style scoped>

.form{
    display: flex;
    flex-direction: column;
}

.input{
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}

.btn{
    align-self: flex-end;
    margin-top: 15px;
}
</style>