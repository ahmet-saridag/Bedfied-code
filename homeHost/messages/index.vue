<template>
   <div>
        <h1 style="margin-top:20%; margin-left:40%">Böyle bir sayfa yok</h1>
    <button class="btn btn-danger" style=" margin-left:47%" @click.prevent="$router.push('/homeHost/messages/messageId')">Geri dön</button>
   </div>
</template>

<script>
export default {
    layout:'homes'
    
}
</script>

<style scoped>

</style>