<template>
    <div class="cart-area" v-if="listCartproducts().length">
        <div v-for="product in listCartproducts()" :key="product.id" class="cart-product">
            <div class="image">
                <img :src="product.img" alt="">
            </div>
            <div class="desc">
                <p class="name">{{product.name}}</p>
                <p class="price">${{product.price}} each</p>
            </div>
            <div class="info">
                <div class="update" v-if="parent == 'cart'"><input type="text" v-model="product.quantity"><button class="btn" @click="updateCart(product)">Update</button></div>
                <div class="sub-total"><p>${{ calculateTotal(product) }}</p></div>
            </div>
        </div>
        <div class="cart-product">
            <div class="image"></div>
            <div class="btn-checkout"><router-link v-if="parent == 'cart'" :to="{name:'checkout'}" class="btn">Checkout</router-link></div>
            <div class="info"><div class="grand-total"><p>${{calculateCartTotal()}}</p></div></div>
        </div>
    </div>
    <div class="cart-area" v-else>
        <div class="cart-product no-products">
            <h3>No products in cart</h3>
            <div class="btn-checkout"><router-link :to="`/categories/all`" class="btn">Continue Shopping</router-link></div>
        </div>
    </div>
</template>


<script>

export default {
    name: "CartView",
    props: {
        parent
    },
    data() {
        return {
            categories: [],
            products: [],
            category: []
        }
    },
    mounted() {
        this.listCartproducts()
        console.info('%cparent: %o', 'color: red;font-size:12px', this.parent);
    },
    methods: {
        
        updateCart(product) {
            this.$store.commit('updateCart', product);
        },

        listCartproducts() {
            let cartProd = [];
            this.$store.getters.getCart.forEach((c)=>{
                let obj = this.$store.getters.getProduct(c.id);
                obj = {...obj, quantity:c.quantity}
                cartProd.push(obj);
            });
            
            return cartProd;
        },
        
        calculateTotal(product) {
            return product.quantity * product.price;
        },

        calculateCartTotal() {
            let grandTotal = 0;
            this.$store.getters.getCart.forEach((c)=>{
                let product = this.$store.getters.getProduct(c.id);
                grandTotal += c.quantity * product.price
            });
            return grandTotal;
        }
    }
}
</script>

<style lang="scss" scoped>
    
    .cart-area {
        display: block;
        padding: 20px;
        @include sm {
            padding-bottom:0;
        }

        
        .cart-product {
            padding:10px;
            background-color: white;
            border-radius: 15px;
            display: grid;
            margin-bottom:20px;
            grid-template-columns: 150px 1fr 130px;
            @include sm {
                grid-template-columns: 1fr;
            }

            &.no-products {
                grid-template-columns: 1fr;
                padding: 10px 0;
                text-align: center;
                h3 {
                    font-size: 20px;
                    font-weight:400;
                    padding:10px 0;
                }
                .btn-checkout {
                    padding:15px 0;
                    .btn {
                        font-size:14px;
                    }
                }
            }
            
            .image {
                img {
                    width:100%;
                    max-width:150px;
                    min-width: 80px;
                    border-radius:10px;
                    @include sm {
                        max-width:100%;
                        padding-bottom:5px;
                    }
                }
            }
            
            .desc {
                flex-grow: 1;
                padding-top:5px;
                padding-left:10px;
                padding-right:10px;
                line-height: 130%;
                @include sm {
                    padding: 0;
                    padding-bottom: 20px;
                }
                .name {
                    font-size:16px;
                    font-weight: 600;
                }
                .descrip {
                    font-size:12px;
                    font-weight: 400;
                }
                .price {
                    font-size:14px;
                    font-weight: 400;
                    
                }
            }
            
            .info {
                display:flex;
                flex-direction:column;
                justify-content: flex-start;
                padding-right:10px;
                width:130px;
                padding-top: 5px;
                
                &.checkout {
                    justify-content: flex-start;
                }
                .update {
                    padding-bottom:20px;
                    input {
                        border: 0;
                        background-color: #ccc;
                        width:30px;
                        text-align:center;
                        font-size:16px;
                        padding:2px 4px;
                    }
                    .btn {
                        font-size:14px;
                        padding:4px 15px;
                        background-color: $colorC;
                        border-radius: 15px;
                        border:0;
                        color:white;
                        font-weight:600;
                        box-shadow: 2px 2px 3px #000000;
                        text-decoration: none;
                        margin-left: 5px;
                    }
                }
                .sub-total {
                    font-weight: 400;
                    font-size:20px;
                    text-align:center;
                    @include sm {
                        text-align:left;
                    }
                }
                .grand-total {
                    font-weight: 400;
                    font-size:24px;
                    text-align:center;
                    @include sm {
                        text-align:left;
                    }
                }
            }
            .btn-checkout {
                display:flex;
                justify-content: center;
                align-items:center;
                @include sm {
                    order:2;
                }

                .btn {
                    font-size:18px;
                    padding:4px 15px;
                    background-color: $colorA;
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
