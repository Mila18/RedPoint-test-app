<template>
    <div class="row">
        <ticket-form class="m-3 col3"/>
        <tickets-list class="m-3 col"/>
    </div>
</template>

<script>
    import TicketForm from '../components/TicketForm.vue';
    import TicketsList from '../components/TicketsList.vue';

    export default {
        components:{
            TicketsList, TicketForm
        }
    }
</script>

<style>

</style>