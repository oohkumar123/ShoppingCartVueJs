<template>
    <div class="sale-complete">
        <CartTitle title="Sale Complete"/>
        <div class="sale-complete-area">
            <div class="cart-area">
                <div v-for="product in listPurchasedProducts()" :key="product.id" class="cart-product">
                    <div class="image">
                        <img :src="product.img" alt="">
                    </div>
                    <div class="desc">
                        <p class="name">{{product.name}}</p>
                        <p class="price">${{product.price}} per item</p>
                    </div>
                    <div class="info">
                       <div class="sub-total"><p>${{ calculateSubTotal(product) }}</p></div>
                    </div>
                </div>
                <div class="cart-product">
                    <div class="image"></div>
                    <div class="btn-checkout"></div>
                    <div class="info">
                        <div class="grand-total">
                            <p>SubTotal: ${{calculateCartTotal()}}</p>
                            <p>Shipping: ${{sale.shippingCharge}}</p>
                            <p class="bold">Total: ${{calculateGrandTotal()}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="customer-area">
                <div class="customer-details">
                    <h3>Customer Details</h3>
                    <div class="details-form">
                        <div class="form-row"><label>Name:</label> <span>{{sale.name}}</span></div>
                        <div class="form-row"><label>Address:</label> <span>{{sale.billingAddress.street}}</span></div>
                        <div class="form-row"><label>City:</label> <span>{{sale.billingAddress.city}}</span></div>
                        <div class="form-row"><label>Zip:</label> <span>{{sale.billingAddress.zip}}</span></div>
                    </div>
                </div>
                <div class="customer-details">
                    <h3>Shipping Details</h3>
                    <div class="details-form">
                        <div class="form-row"><label>Address:</label> <span>{{sale.shippingAddress.street}}</span></div>
                        <div class="form-row"><label>City:</label> <span>{{sale.shippingAddress.city}}</span></div>
                        <div class="form-row"><label>Zip:</label> <span>{{sale.shippingAddress.zip}}</span></div>
                        <div class="form-row"><label>Shipping Cost:</label> <span>${{sale.shippingCharge}}</span></div>
                        <div class="form-row"><label>Shipping Method:</label> <span>${{sale.shippingMethod}}</span></div>
                        <div class="form-row"><label>Shipping Status:</label> <span style="color: green">{{sale.shippingStatus}}</span></div>
                    </div>
                </div>
                <div class="customer-details">
                    <h3>Payment Details</h3>
                    <div class="details-form">
                        <div class="form-row"><label>Payment Method:</label> <span>{{sale.paymentDetails.method}}</span></div>
                        <div class="form-row"><label>Card Number Ending:</label> <span>XXX-XXXX-{{sale.paymentDetails.cardNum.substr(sale.paymentDetails.cardNum.length - 4)}}</span></div>
                        <div class="form-row"><label>Exp Date:</label> <span>{{sale.paymentDetails.cardExp}}</span></div>
                        <div class="form-row"><label>Security Code:</label> <span>{{sale.paymentDetails.cardSec}}</span></div>
                    </div>
                </div>
                <div class="customer-details btn">
                    <div class="details-form btn">
                        <div class="form-row pay"><div class="btn"><router-link :to="{ name: 'home' }">Return to homepage</router-link></div></div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    name: "SaleCompleteView", 
    props: ['order_id'],
    data() {
        return {
            sale: []
        }
    },
    beforeMount () {
        this.sale = this.$store.getters.getSales (this.order_id);
        console.info('%cthis.sale: %o', 'color: red;font-size:12px', this.sale);

    },
    mounted() {
        console.info('%cthis.sale: %o', 'color: red;font-size:12px', this.sale);
    },
    updated() {
    },
    watch: {
    },
    computed:  {
    },
    methods: {

        listPurchasedProducts () {
            
            let purchasedProds = [];
            this.sale.productList.forEach((c)=>{
                let obj = this.$store.getters.getProduct(c[0]);
                obj = {...obj, quantity:c[1]}
                purchasedProds.push(obj);
            });
           return purchasedProds;
        },

        calculateSubTotal(product) {
            return product.quantity * product.price;
        },

        calculateCartTotal() {
            let grandTotal = 0;
            this.sale.productList.forEach((c)=>{
                let product = this.$store.getters.getProduct(c[0]);
                grandTotal += c[1] * product.price
            });
            return grandTotal;
        },

        calculateGrandTotal() {
            let grandTotal = 0;
            this.sale.productList.forEach((c)=>{
                let product = this.$store.getters.getProduct(c[0]);
                grandTotal += c[1] * product.price
            });
            return grandTotal+this.sale.shippingCharge;
        },

    }
}
</script>

<style lang="scss" scoped>
.sale-complete {
    padding-top:10px;
    
    h2 {
        text-align:center;
        font-size: 30px;
        padding: 15px 0 5px 0;
        font-weight:600;
        color: white;
        text-shadow: 2px 2px 3px #000000
    }
    .sale-complete-area {
        width: 550px;
        margin: auto;
        .cart-area {
            display: block;
            padding: 20px;
            flex: 2;
            
            .cart-product {
                padding:10px;
                background-color: white;
                box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
                border-radius: 15px;
                display: grid;
                grid-template-columns: 150px 1fr 130px;
                margin-bottom:20px;
                
                .image {
                    img {
                        width:100%;
                        max-width:150px;
                        min-width: 80px;
                        border-radius:10px;
                        display:block;
                    }
                }
                
                .desc {
                    flex-grow: 1;
                    padding-top:5px;
                    padding-left:10px;
                    padding-right:10px;
                    line-height: 130%;
                    .name {
                        font-size:16px;
                        font-weight: 600;
                    }
                    .descrip {
                        font-size:12px;
                        font-weight: 400;
                    }
                    .price {
                        font-size:16px;
                        font-weight: 400
                    }
                }
                
                .info {
                    display:flex;
                    justify-content: flex-end;
                    padding-right:10px;
                    .sub-total {
                        font-weight: 400;
                        font-size:20px;
                        text-align:center;
                        padding-top:5px
                    }
                    .grand-total {
                        p {
                            font-weight: 400;
                            font-size:14px;
                            text-align:center;
                            padding-top:5px;
                            text-align:right;
                            border-bottom: 1px dotted #ccc;
                            padding-bottom:5px;
                            &.bold {
                                font-weight: 600;

                            }
                        }
                    }
                }
            }
        }
        
        .customer-area {
            padding:20px;
            .customer-details {
                padding:10px;
                padding-bottom: 25px;
                background-color: white;
                border-radius: 15px;
                margin-bottom:20px;
                box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
                
                &.btn {
                    background-color: transparent;
                    border-radius: 0;
                    margin-bottom:0;
                    box-shadow: none;
                }
                
                h3 {
                    text-align:center;
                    font-size: 18px;
                    font-weight:600;
                    color: black;
                    padding-bottom: 10px;
                }
                
                .details-form {
                    border-radius: 15px;
                    border: 1px #cccccc dotted;
                    padding:10px;
                    max-width: 450px;
                    margin: auto;
                    &.btn {
                        border: 0px #cccccc dotted;
                    }
                    .form-row {
                        margin-bottom:10px;
                        border-bottom: 1px dotted #cccccc;
                        padding-bottom: 5px;
                        
                        &:last-child {
                            margin-bottom:0;
                            border-bottom: 0 dotted #cccccc;
                            padding-bottom: 0;
                            a {
                                text-decoration: none; 
                                color: #fff;
                            }
                        }
                        
                        label {
                            font-size: 14px;
                            font-weight:600;
                            color: black;
                        }
                        span {
                            font-size: 14px;
                            font-weight:400;
                            color: black;
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
                            text-align: center;
                            width:100px;
                        }
                        &.pay {
                            .btn {
                                width:auto;
                                padding: 10px 0;
                                font-size:18px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
