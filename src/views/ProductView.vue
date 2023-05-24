<template>
    <div class="product">
        <div class="image-box">
            <img :src="product.img" alt="">
        </div>
        <div class="product-box">
            <div class="desc">
                <p class="name">{{ product.name }}</p>
                <p class="descrip">{{ product.desc }}</p>
                <p class="price">${{ product.price }}</p>
                <div class="btn"><a href="#" v-on:click.prevent="addProductToCart()">Buy</a></div>
                <p class="product-added" v-if="showhide">Your product has been added</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "ProductView", 
    props: ['id'],
    data() {
        return {
            product:[],
            products: this.$store.getters.getProducts,
            showhide: false
        }
    },
    mounted() {
        this.product = this.products.find((p) => p.id == this.id);
    },
    methods: {
        addProductToCart() {
          this.$store.commit('addProductToCart', this.product.id);
          this.showhide = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.product {
    padding-top:10px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap:15px;
    padding: 20px;
    
    @include sm {
        grid-template-columns: 1fr 1fr;
    }
    
    .image-box {
        img {
            max-width:100%;
            border-radius:10px;
        }
    }
    
    .product-box {
        
        .desc {
            padding:20px;
            border-radius: 15px;
            background-color: white;
            .name {
                font-size:16px;
                font-weight: 600;
                padding-bottom:8px;
            }
            .descrip {
                font-size:12px;
                line-height:150%;
                font-weight: 400;
                padding-bottom:8px;
            }
            .price {
                font-size:16px;
                font-weight: 600
            }
            .product-added  {
                padding-top:10px;
                font-size:16px;
                font-weight: 600;
                color: red;
            }

        }
        
        .btn {
            padding-top:18px;
            padding-bottom: 10px;
            padding-left:2px;
            
            a {
                font-size:14px;
                padding:4px 15px;
                background-color: $colorC;
                border-radius: 15px;
                border:0;
                color:white;
                font-weight:600;
                box-shadow: 2px 2px 3px #000000;
                text-decoration: none;
            }
        }
    }
}
</style>
