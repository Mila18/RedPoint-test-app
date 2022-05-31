<template>
    <div class="ticket">
            <div><strong>Название: </strong>{{ticket.title}}</div> 
            <div><strong>Описание: </strong>{{ticket.body}}</div> 
    </div>
</template>

<script>
export default {
    props:{
        ticket:{
            type: Object,
            required:true,
        }
    }
}
</script>

<style scoped>

</style>