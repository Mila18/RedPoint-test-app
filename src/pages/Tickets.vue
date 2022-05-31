<template>
    <div>
        <ticket-form @create="createTicket"/>
        <tickets-list :tickets="tickets"/>
    </div>
</template>

<script>
    import TicketForm from '../components/TicketForm.vue';
    import TicketsList from '../components/TicketsList.vue';

    export default {
        components:{
            TicketsList, TicketForm
        },
        data(){
            return{
               tickets: [
                   {id: 1, title: 'javascript', body: 'Описание тикета 1'},
                   {id: 2, title: 'javascript', body: 'Описание тикета 2'},
                   {id: 3, title: 'javascript', body: 'Описание тикета 3'},
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

</style>