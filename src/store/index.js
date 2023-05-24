import { createStore } from "vuex";

export default createStore({
    state: {
        cart: [],
        
        categories: [
            {id: 'all',title: 'All Widgets'},
            {id: '123',title: 'Fabulous Widgets'},
            {id: '456',title: 'Great Widgets'},
            {id: '789',title: 'Ok Widgets'},
        ],
        
        products: [
            { id: 1, name: "Fabulous Widgets 1", price: 100, desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.", cat_id: 123, img: "https://unsplash.it/640/425" },
            { id: 2, name: "Fabulous Widgets 2", price: 150, desc: "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", cat_id: 123, img: "https://unsplash.it/640/426" },
            { id: 3, name: "Fabulous Widgets 3", price: 200, desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.", cat_id: 123, img: "https://unsplash.it/640/427" },
            { id: 4, name: "Great Widgets 1", price: 90, desc: "Voluptatem sequi nesciunt.", cat_id: 456, img: "https://unsplash.it/640/428" },
            { id: 5, name: "Great Widgets 2", price: 80, desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.", cat_id: 456, img: "https://unsplash.it/640/429" },
            { id: 6, name: "Great Widgets 3", price: 70, desc: "Incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", cat_id: 456, img: "https://unsplash.it/640/430" },
            { id: 7, name: "Ok Widgets 1", price: 90, desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.", cat_id: 789, img: "https://unsplash.it/640/431" },
            { id: 8, name: "Ok Widgets 2", price: 80, desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. ", cat_id: 789, img: "https://unsplash.it/640/432" },
            { id: 9, name: "Ok Widgets 3", price: 70, desc: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.", cat_id: 789, img: "https://unsplash.it/640/433" },
        ],
        
        sales: [],
        
        orderId: 0,

        cartQuantity: 0
    },
    
    getters: {
        getProducts(state) {
            return state.products;
        },
        getCategories(state) {
            return state.categories;
        },
        getCart(state) {;
            return state.cart;
        },
        getProduct: (state) => (id) =>  {
            return state.products.filter((p)=> p.id==id)[0];
        },
        getSales: (state) => (orderId) =>  {
            return state.sales.filter((s)=> s.orderId==orderId)[0];
        },
        getSaleList: (state) => {
            return state.sales
        },
        getOrderId: (state) => {
            return state.orderId;
        }
    },
    
    mutations: {
        addSale(state, sale) {
            state.orderId = sale.orderId = state.sales.length+1;
            state.sales.push(sale);
        },
        
        addProductToCart(state, id) {

            let flag = true;
            
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id==id) {
                    state.cart[i].quantity++;
                    flag=false;
                    break;
                }
            }
            
            if (flag) state.cart.push({ id:Number(id), quantity:1})
            state.cartQuantity = state.cart.length;
        },
        
        updateCart(state, product) {
            let objIndex = state.cart.findIndex((obj => obj.id == product.id));
            
            if (product.quantity == 0) {
                state.cart = state.cart.filter((item, index) => index != objIndex)
            } else {
                state.cart[objIndex].quantity = product.quantity;
            }
            state.cartQuantity = state.cart.length;


        }
    },
    
    actions: {
        testAction () {
            return 'test';
        }

    },
    modules: {},
});
