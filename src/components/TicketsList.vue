<template>
    <div>
        <h3>Список постов</h3>
        <ticket v-for="ticket in tickets" :ticket="ticket"/>
    </div>
</template>

<script>
import Ticket from './Ticket.vue'
    export default{
  components: { Ticket },
        props:{
            tickets:{
                type: Array,
                required: true,
            }
        }
    }
</script>

<style scoped>
.ticket {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
</style>