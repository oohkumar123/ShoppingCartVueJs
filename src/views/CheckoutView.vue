<template>
    <div class="cart">
        
        <CartTitle title="Checkout"/>
        
        <div class="checkout-area">
            
            <CartContents parent="checkout"/>
            
            <div class="customer-area">
                <div class="customer-details">
                    <h3>Login</h3>
                    <div class="details-form">
                        <div class="form-row"><label>Name:</label> <input type="text" v-model="account.loginName"></div>
                        <div class="form-row"><label>Address:</label> <input type="text" v-model="account.loginPassword"></div>
                        <div class="form-row btn"> <div class="btn">Log In</div></div>
                    </div>
                </div>
                <div class="customer-details">
                    <h3>Customer Details</h3>
                    <div class="details-form">
                        <div class="form-row"><label>Name:</label> <input type="text" v-model="billingAddress.name"></div>
                        <div class="form-row"><label>Street:</label> <input type="text" v-model="billingAddress.street"></div>
                        <div class="form-row"><label>City:</label> <input type="text" v-model="billingAddress.city"></div>
                        <div class="form-row"><label>Zip:</label> <input type="text" v-model="billingAddress.zip"></div>
                    </div>
                </div>
                <div class="customer-details">
                    <h3>Shipping Details</h3>
                    <p class="ship-same-customer">
                        <input type="checkbox" v-on:click="sameAsCustomer($event)"><span>Same as customer</span>
                    </p>
                    <div class="details-form">
                        <div class="form-row"><label>Name:</label> <input type="text" v-model="shippingAddress.name"></div>
                        <div class="form-row"><label>Street:</label> <input type="text" v-model="shippingAddress.street"></div>
                        <div class="form-row"><label>City:</label> <input type="text" v-model="shippingAddress.city"></div>
                        <div class="form-row"><label>Zip:</label> <input type="text" v-model="shippingAddress.zip"></div>
                    </div>
                </div>
                <div class="customer-details">
                    <h3>Payment Details</h3>
                    <div class="details-form">
                        <div class="form-row"><label>Payment Method:</label> 
                            <select v-model="paymentDetails.method">
                                <option value="visa">Visa</option>    
                                <option value="mastercard">MasterCard</option>    
                                <option value="paypal">Paypal</option>    
                            </select>
                        </div>
                        <div class="form-row"><label>Card Number:</label> <input type="text" v-model="paymentDetails.cardNum"></div>
                        <div class="form-row"><label>Exp Date:</label> <input type="text" v-model="paymentDetails.cardExp"></div>
                        <div class="form-row"><label>Security Code:</label> <input type="text" v-model="paymentDetails.cardSec"></div>
                    </div>
                </div>
                <div class="customer-details">
                    <div class="details-form">
                        <div class="form-row pay"><div class="btn"><a href="#" v-on:click.prevent="completePurchase()">Complete Purchase</a></div></div>
                    </div>
                </div>
            </div>
       </div>
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
    },
    data() {
        return {
            categories: [],
            products: [],
            category: [],
            shipping: 20,
            billingAddress: {name:'Kumar Desai', street:'420 Monte Vista Avenue', city:'Mill Valley', zip:'94941'},
            shippingAddress: {name:'', street:'', city:'', zip:''},
            paymentDetails: {method:'', cardNum:'', cardExp:'', cardSec:''},
            account: {loginName:'',loginPassword:''}
        }
    },
    beforeMount () {
    },
    mounted() {
    },
    methods: {
        
        sameAsCustomer (e) {
            if (e.target.checked) {
                this.shippingAddress = JSON.parse(JSON.stringify(this.billingAddress));
            } else {
                this.shippingAddress =  {name:'', address:'', city:'', zip:''};
            }
        },

        completePurchase () {
            
            let newSale = {
                customerId: 123, 
                name: this.billingAddress.name,
                billingAddress: {
                    street: this.billingAddress.street, 
                    city: this.billingAddress.city, 
                    zip: this.billingAddress.zip
                },
                shippingAddress: {
                    street: this.shippingAddress.street, 
                    city: this.shippingAddress.city, 
                    zip: this.shippingAddress.zip
                },
                paymentDetails: {
                    method: this.paymentDetails.method, 
                    cardNum: this.paymentDetails.cardNum, 
                    cardExp: this.paymentDetails.cardExp, 
                    cardSec: this.paymentDetails.cardSec
                },
                shippingCharge: 20,
                shippingStatus: 'Not Shipped',
                shippingMethod: 'UPS',
                productList: []
            }
            
            this.$store.getters.getCart.forEach((c)=>{
                newSale.productList.push([c.id, c.quantity]);
            });
            
            
            this.$store.commit('addSale', newSale);
            let order_id = this.$store.getters.getOrderId;
            this.$router.push({ name: 'salecomplete', params: { order_id: order_id } })
        }
    }
}
</script>

<style lang="scss" scoped>
.cart {
    padding-top:10px;
    
    .checkout-area {
        display:grid;
        grid-template-columns: 2fr 1fr;
        gap:20px;

        @include sm {
            grid-template-columns: 1fr;
            gap:20px;
        }
        
        .customer-area {
            flex: 1;
            padding:20px;
            padding-left:0;
            @include sm {
                padding-left:20px;
            }
            .customer-details {
                padding:10px;
                background-color: white;
                border-radius: 15px;
                margin-bottom:20px;
                h3 {
                    text-align:center;
                    font-size: 18px;
                    font-weight:600;
                    color: black;
                }
                .ship-same-customer {
                    display: flex;
                    align-items: center;

                    padding-top:5px;
                    input[type="checkbox"]  {
                        width:15px; 
                        height:15px;
                        appearance: checkbox;
                        border:1px solid #000;
                    }
                    span {
                        font-size: 12px;
                        font-weight:600;
                        color: black;
                        padding-left:2px;
                    }
                }
                .details-form {
                    padding-top:10px;
                    .form-row {
                        margin-bottom:10px;
                        &.btn {
                            margin-bottom:5px;
                        }
                        label {
                            display:block;
                            font-size: 12px;
                            font-weight:400;
                            color: black;
                            padding-bottom:2px;
                        }
                        input, select {
                            border:1px solid #999;
                            width:100%;
                            border-radius: 10px;
                            padding:5px 5px;
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
                            :hover {
                                background-color: $colorD;
                                cursor: pointer;
                            }
                            .btn {
                                width:auto;
                                padding: 10px 0;
                                font-size:18px;
                                a {
                                    color: white;
                                    text-decoration:none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
