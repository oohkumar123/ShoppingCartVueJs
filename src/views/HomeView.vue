<template>
    <div class="category">
        <div class="marketing-grid">
            <div class="marketing-box">
                <div class="text">
                    <h1>Welcome to <br> Wonderful Widgets</h1>
                    <p>We stock the most wonderful of all widgets!</p>
                </div>
                <img src="https://unsplash.it/640/428">
            </div>
        </div>
        <div class="product-grid">
            
            <div v-for="product in displayThreeRandomizedProducts()" :key="product.id" class="product-box">
                <div class="image">
                    <img :src="product.img" alt="">
                </div>
                <div class="desc">
                    <p class="name">{{product.name}}</p>
                    <p class="descrip">{{product.desc}}</p>
                    <p class="price">${{product.price}}</p>
                </div>
                <div class="btn"><router-link :to="{ name: 'product', params: { id: product.id }}">More Info</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView", 
    data() {
        return {
            categories: [],
            products: [],
            category: [],
        }
    },
    mounted() {
        this.products = this.$store.getters.getProducts;
    },
    updated() {},
    methods: {
        displayThreeRandomizedProducts(id) {
          let shuffled = this.products
              .map(value => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value)
          return this.products.slice(0, 3);;
        }
    }
}
</script>

<style lang="scss" scoped>
.category {
    padding-top:10px;
    .marketing-grid {
        padding: 20px;
        padding-bottom: 0;

        .marketing-box  {
            padding:10px;
            background-color: white;
            border-radius: 15px;
            height:350px;
            @include sm {
                height:auto;
            }

            position: relative;

            img {
                width:100%;
                object-fit: cover;
                height:100%;
            }
            
            .text {
                position: absolute;
                top:0;
                left:0;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width:100%;
                height:100%;

                h1 {
                    text-align:center;
                    color:black;
                    font-size: clamp(21px, 5vw, 50px);
                    font-weight:700;
                    text-shadow:3px 3px 5px #ffffff;
                    margin-bottom:25px;
                    line-height: 120%;
                    @include sm {
                        padding: 0 41px;
                        padding-bottom: 0;
                    }
                }
                
                p {
                    text-align:center;
                    color:$colorB;
                    font-weight: 600;
                    text-shadow: 3px 3px 5px #000000;
                    font-size: clamp(17px, 3vw, 24px);
                    width: clamp(300px, 50%, 100%);
                    @include sm {
                        padding: 0 41px;
                    }
                }
            }
        }
    }
    
    .product-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:15px;
        padding: 20px;
        @include lg {
            grid-template-columns: 1fr 1fr;
        }
        @include sm {
            grid-template-columns: 1fr;
        }
        
        .product-box {
            padding:10px;
            background-color: white;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .image {
                img {
                    max-width:100%;
                    border-radius:10px;
                }
            }
            .desc {
                margin-top:10px;
                padding-left:2px;
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
}
</style>
