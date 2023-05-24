<template>
    <header class="header">
        <h1>Wonderful Widgets Inc.</h1>  
        <div class="navbar" ref="navbar">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/cart" class="cart" v-if="this.$store.state.cartQuantity>0" :data-before="this.$store.state.cartQuantity">Cart</router-link>
            <router-link to="/cart" v-else>Cart</router-link>
            <router-link to="/account">Account</router-link>
        </div>
    </header>
</template>
<script>

export default {
    name: "HeaderBar", 
    data() {
        return {

        }
    },
    beforeMount() {},
    mounted() {},
    updated() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
.header {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-image: url('../assets/images/photo-1458682625221-3a45f8a844c7.avif');
    background-size: cover;

    h1 {
        color: white;
        font-weight: 900;
        font-size: 55px;
        padding-bottom:20px;
        text-shadow: 5px 5px 5px black;
        @include lg {
            font-size: 35px;
        }
        @include sm {
            font-size: 25px;
            text-shadow: 2px 2px 2px black;
        }
    }
    .navbar {
        display: flex;
        gap:20px;
        background-color:rgba(0,0,0,0.3);
        border-radius: 20px;
        padding:3px 20px 4px 20px;
        a {
            color: white;
            font-weight: 500;
            font-size: 20px;
            text-decoration: none;
            text-shadow: 2px 2px 2px black;
            position: relative;
            &:hover {
                color:$colorC;
            }

            @include lg {
                font-size: 18px;
            }
            @include sm {
                font-size: 15px;
            }
            &.cart::before {
                content: attr(data-before);
                background-color: white;
                color: black;
                border-radius: 15px;
                font-size: 11px;
                padding: 2px 5px;
                position: absolute;
                top: 0;
                right:-14px;
            }

        }
    }
}
</style>
