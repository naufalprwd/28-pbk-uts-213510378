<template>
    <h1>Error</h1>
    <p>The Job id is {{ id }}</p>
</template>

<script>
export default{
    data(){
        return{
            id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>