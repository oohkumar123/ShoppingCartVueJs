<template>
    <div class="category">
        <h2>
            {{ category.title }}
        </h2>
        <div class="product-grid">
            
            <div v-for="product in displayProducts(this.id)" :key="product.id" class="product-box">
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
    name: "CategoryView", 
    props: ['id'],
    data() {
        return {
            categories: [],
            products: [],
            category: [],
        }
    },
    mounted() {
        this.products = this.$store.getters.getProducts;
        this.categories = this.$store.getters.getCategories;
    },
    updated() {
        this.categoryTitle();
    },
    methods: {
        displayProducts(id) {
            return (id !='all') ? this.products.filter( (p) => p.cat_id == id ) : this.products;
        },
        categoryTitle() {
            this.category = this.categories.find( (c) => c.id == this.id );
        }
    }
}
</script>

<style lang="scss" scoped>
.category {
    padding-top:10px;
    h2 {
        text-align:center;
        font-size: 30px;
        padding: 15px 0 5px 0;
        font-weight:600;
        color: white;
        text-shadow: 2px 2px 3px #000000
    }
    
    
    .product-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:15px;
        padding: 20px;
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
