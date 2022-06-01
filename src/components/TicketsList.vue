<template>
    <div>
        <h3>Список тикетов</h3>
        <table class="table table-hover">
            <thead>
            <tr style="background-color:aliceblue;">
                <th>Заголовок</th>
                <th>Описание</th>
                <th>id</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="ticket in ticketsList">
                <td class="table-light">
                    {{ticket.title}}
                </td>
                <td class="table-light">
                    {{ticket.description}}
                </td>
                <td class="table-light">
                    {{ticket.id}} 
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import '../router/router'
    export default{
        data(){
            return{
                ticketsList:null
            }
        },
        methods:{
            getList(){
                this.axios.get('https://localhost:5001/Tickets').then((response)=> {
                    this.ticketsList = response.data;         
                    })
                this.$router.push('/ticket');
            }   
        },
        mounted(){
            this.getList();
        }
    }
</script>

<style>
</style>