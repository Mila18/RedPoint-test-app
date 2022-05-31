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
            
            <ticket v-for="ticket in tickets" :ticket="ticket"/>
        </table>
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