<template>
     <form @submit.prevent>
            <h4>Создание тикета</h4>

            <input 
            v-model="ticket.title"
            class="input" 
            type="text" 
            placeholder="Название"
            />
            
            <input 
            v-model="ticket.body"
            class="input" 
            type="text" 
            placeholder="Описание"
            />

            <button class="btn btn-success" @click="createTicket">Создать</button>
        </form>
</template>

<script>
export default {
    data(){
        return{
            ticket:{
                title:'',
                body:''
            }
        }
    },
    methods:{
        createTicket(){
                this.ticket.id = Date.now();
                this.$emit('create', this.ticket)
                this.ticket = {
                    title:'',
                    body:''
                }
        }
    }
}
</script>

<style scoped>
form{
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