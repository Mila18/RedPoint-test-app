<template>
    <div class="app">
        <ticket-form @create="createTicket"/>
        <tickets-list :tickets="tickets"/>
    </div>
</template>

<script>
    import TicketForm from './components/TicketForm.vue';
    import TicketsList from './components/TicketsList.vue';

    export default {
        components:{
            TicketsList, TicketForm
        },
        data(){
            return{
               tickets: [
                   {id: 1, title: 'javascript', body: 'Описание поста'},
                   {id: 2, title: 'javascript', body: 'Описание поста 2'},
                   {id: 3, title: 'javascript', body: 'Описание поста 3'},
                   {id: 4, title: 'javascript', body: 'Описание поста 4'},
               ],
            }
        },
        methods:{
           createTicket(ticket){
              this.tickets.push(ticket);
           },
        }
    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app{
    padding: 20px ;
}
</style>