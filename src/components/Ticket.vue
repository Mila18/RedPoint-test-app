<template>
<tbody>
    <tr>
        <td class="table-light">
            {{ticket.title}} 
        </td>
        <td class="table-light">
            {{ticket.body}}
        </td>
        <td>
            
        </td>
    </tr>
</tbody>
    
   
             
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