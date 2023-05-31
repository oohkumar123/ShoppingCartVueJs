<template>
    <h2>
        {{title}}
    </h2>
</template>

<script>
    export default {
        name: "CartTitle", 
        props: [
            'title'
        ]
    }
</script>

<style lang="scss" scoped>
    h2 {
        text-align:center;
        font-size: 30px;
        padding: 15px 0 5px 0;
        font-weight:600;
        color: white;
        text-shadow: 2px 2px 3px #000000
    }
</style>