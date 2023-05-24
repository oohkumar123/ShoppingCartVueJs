<template>
    <div class="cart">
        <CartTitle title="Shopping Cart"/>
        <CartContents parent="cart"/>
    </div>
</template>
<script>
import CartContents from "@/views/sub-views/CartContents.vue";
import CartTitle from "@/views/sub-views/CartTitle.vue";

export default {
    name: "CartView",
    components: {
        CartContents,
        CartTitle
    }
}
</script>

<style lang="scss" scoped>
.cart {
    padding-top:10px;
    h2 {
        text-align:center;
        font-size: 30px;
        padding: 15px 0 5px 0;
        font-weight:600;
        color: white;
        text-shadow: 2px 2px 3px #000000;
    }
}
</style>
