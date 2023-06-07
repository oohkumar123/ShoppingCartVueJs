(function(){"use strict";var t={6209:function(t,e,a){var s=a(9242),r=a(3396);const i={class:"container"};function l(t,e,a,s,l,n){const o=(0,r.up)("HeaderBar"),d=(0,r.up)("ContentBar"),c=(0,r.up)("FooterBar");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(o),(0,r.Wm)(d),(0,r.Wm)(c)])}const n=t=>((0,r.dD)("data-v-47f27b9d"),t=t(),(0,r.Cn)(),t),o={class:"header"},d=n((()=>(0,r._)("h1",null,"Wonderful Widgets Inc.",-1))),c={class:"navbar",ref:"navbar"};function u(t,e,a,s,i,l){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",o,[d,(0,r._)("div",c,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),this.$store.state.cartQuantity>0?((0,r.wg)(),(0,r.j4)(n,{key:0,to:"/cart",class:"cart","data-before":this.$store.state.cartQuantity},{default:(0,r.w5)((()=>[(0,r.Uk)("Cart")])),_:1},8,["data-before"])):((0,r.wg)(),(0,r.j4)(n,{key:1,to:"/cart"},{default:(0,r.w5)((()=>[(0,r.Uk)("Cart")])),_:1})),(0,r.Wm)(n,{to:"/account"},{default:(0,r.w5)((()=>[(0,r.Uk)("Account")])),_:1})],512)])}var p={name:"HeaderBar",data(){return{}},beforeMount(){},mounted(){},updated(){},methods:{}},m=a(89);const _=(0,m.Z)(p,[["render",u],["__scopeId","data-v-47f27b9d"]]);var h=_,g=a(7139);function v(t,e,a,s,i,l){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(this.$store.getters.getCategories,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id},[(0,r.Wm)(n,{to:`/categories/${t.id}`},{default:(0,r.w5)((()=>[(0,r.Uk)((0,g.zw)(t.title),1)])),_:2},1032,["to"])])))),128))]),(0,r._)("main",null,[(0,r.Wm)(o)])],64)}var f={name:"Category"};const w=(0,m.Z)(f,[["render",v],["__scopeId","data-v-c818dae4"]]);var y=w;function b(t,e){return(0,r.wg)(),(0,r.iD)("footer",null,"FOOTER")}const k={},C=(0,m.Z)(k,[["render",b],["__scopeId","data-v-18999852"]]);var D=C,U={name:"App",components:{HeaderBar:h,ContentBar:y,FooterBar:D}};const z=(0,m.Z)(U,[["render",l]]);var A=z,q=a(2483);const x=t=>((0,r.dD)("data-v-972e46b6"),t=t(),(0,r.Cn)(),t),P={class:"category"},S=x((()=>(0,r._)("div",{class:"marketing-grid"},[(0,r._)("div",{class:"marketing-box"},[(0,r._)("div",{class:"text"},[(0,r._)("h1",null,[(0,r.Uk)("Welcome to "),(0,r._)("br"),(0,r.Uk)(" Wonderful Widgets")]),(0,r._)("p",null,"We stock the most wonderful of all widgets!")]),(0,r._)("img",{src:"https://unsplash.it/640/428"})])],-1))),W={class:"product-grid"},$={class:"image"},T=["src"],V={class:"desc"},I={class:"name"},N={class:"descrip"},O={class:"price"},M={class:"btn"};function Z(t,e,a,s,i,l){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",P,[S,(0,r._)("div",W,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.displayThreeRandomizedProducts(),(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"product-box"},[(0,r._)("div",$,[(0,r._)("img",{src:t.img,alt:""},null,8,T)]),(0,r._)("div",V,[(0,r._)("p",I,(0,g.zw)(t.name),1),(0,r._)("p",N,(0,g.zw)(t.desc),1),(0,r._)("p",O,"$"+(0,g.zw)(t.price),1)]),(0,r._)("div",M,[(0,r.Wm)(n,{to:{name:"product",params:{id:t.id}}},{default:(0,r.w5)((()=>[(0,r.Uk)("More Info")])),_:2},1032,["to"])])])))),128))])])}var E={name:"HomeView",data(){return{categories:[],products:[],category:[]}},mounted(){this.products=this.$store.getters.getProducts},updated(){},methods:{displayThreeRandomizedProducts(t){this.products.map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t));return this.products.slice(0,3)}}};const H=(0,m.Z)(E,[["render",Z],["__scopeId","data-v-972e46b6"]]);var j=H;const B={class:"about"};function F(t,e){return(0,r.wg)(),(0,r.iD)("div",B,"ABOUT")}const L={},Q=(0,m.Z)(L,[["render",F],["__scopeId","data-v-5184676a"]]);var X=Q;const Y={class:"account"};function G(t,e){return(0,r.wg)(),(0,r.iD)("div",Y,"Account")}const K={},R=(0,m.Z)(K,[["render",G],["__scopeId","data-v-dc50e72c"]]);var J=R;const tt={class:"category"},et={class:"product-grid"},at={class:"image"},st=["src"],rt={class:"desc"},it={class:"name"},lt={class:"descrip"},nt={class:"price"},ot={class:"btn"};function dt(t,e,a,s,i,l){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",tt,[(0,r._)("h2",null,(0,g.zw)(i.category.title),1),(0,r._)("div",et,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.displayProducts(this.id),(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"product-box"},[(0,r._)("div",at,[(0,r._)("img",{src:t.img,alt:""},null,8,st)]),(0,r._)("div",rt,[(0,r._)("p",it,(0,g.zw)(t.name),1),(0,r._)("p",lt,(0,g.zw)(t.desc),1),(0,r._)("p",nt,"$"+(0,g.zw)(t.price),1)]),(0,r._)("div",ot,[(0,r.Wm)(n,{to:{name:"product",params:{id:t.id}}},{default:(0,r.w5)((()=>[(0,r.Uk)("More Info")])),_:2},1032,["to"])])])))),128))])])}var ct={name:"CategoryView",props:["id"],data(){return{categories:[],products:[],category:[]}},mounted(){this.products=this.$store.getters.getProducts,this.categories=this.$store.getters.getCategories},updated(){this.categoryTitle()},methods:{displayProducts(t){return"all"!=t?this.products.filter((e=>e.cat_id==t)):this.products},categoryTitle(){this.category=this.categories.find((t=>t.id==this.id))}}};const ut=(0,m.Z)(ct,[["render",dt],["__scopeId","data-v-94279874"]]);var pt=ut;const mt=t=>((0,r.dD)("data-v-72f6b6e5"),t=t(),(0,r.Cn)(),t),_t={class:"product"},ht={class:"image-box"},gt=["src"],vt={class:"product-box"},ft={class:"desc"},wt={class:"name"},yt={class:"descrip"},bt={class:"price"},kt={class:"btn"},Ct={key:0,class:"product-added"},Dt=mt((()=>(0,r._)("br",null,null,-1)));function Ut(t,e,a,i,l,n){const o=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",_t,[(0,r._)("div",ht,[(0,r._)("img",{src:l.product.img,alt:""},null,8,gt)]),(0,r._)("div",vt,[(0,r._)("div",ft,[(0,r._)("p",wt,(0,g.zw)(l.product.name),1),(0,r._)("p",yt,(0,g.zw)(l.product.desc),1),(0,r._)("p",bt,"$"+(0,g.zw)(l.product.price),1),(0,r._)("div",kt,[(0,r._)("a",{href:"#",onClick:e[0]||(e[0]=(0,s.iM)((t=>n.addProductToCart()),["prevent"]))},"Buy")]),l.showhide?((0,r.wg)(),(0,r.iD)("p",Ct,[(0,r.Uk)("Your product has been added "),Dt,(0,r.Wm)(o,{to:"/cart"},{default:(0,r.w5)((()=>[(0,r.Uk)("Click here to go cart")])),_:1})])):(0,r.kq)("",!0)])])])}var zt={name:"ProductView",props:["id"],data(){return{product:[],products:this.$store.getters.getProducts,showhide:!1}},mounted(){this.product=this.products.find((t=>t.id==this.id))},methods:{addProductToCart(){this.$store.commit("addProductToCart",this.product.id),this.showhide=!0}}};const At=(0,m.Z)(zt,[["render",Ut],["__scopeId","data-v-72f6b6e5"]]);var qt=At;const xt={class:"cart"};function Pt(t,e,a,s,i,l){const n=(0,r.up)("CartTitle"),o=(0,r.up)("CartContents");return(0,r.wg)(),(0,r.iD)("div",xt,[(0,r.Wm)(n,{title:"Shopping Cart"}),(0,r.Wm)(o,{parent:"cart"})])}const St=t=>((0,r.dD)("data-v-38fe6437"),t=t(),(0,r.Cn)(),t),Wt={key:0,class:"cart-area"},$t={class:"image"},Tt=["src"],Vt={class:"desc"},It={class:"name"},Nt={class:"price"},Ot={class:"info"},Mt={key:0,class:"update"},Zt=["onUpdate:modelValue"],Et=["onClick"],Ht={class:"sub-total"},jt={class:"cart-product"},Bt=St((()=>(0,r._)("div",{class:"image"},null,-1))),Ft={class:"btn-checkout"},Lt={class:"info"},Qt={class:"grand-total"},Xt={key:1,class:"cart-area"},Yt={class:"cart-product no-products"},Gt=St((()=>(0,r._)("h3",null,"No products in cart",-1))),Kt={class:"btn-checkout"};function Rt(t,e,a,i,l,n){const o=(0,r.up)("router-link");return n.listCartproducts().length?((0,r.wg)(),(0,r.iD)("div",Wt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.listCartproducts(),(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"cart-product"},[(0,r._)("div",$t,[(0,r._)("img",{src:t.img,alt:""},null,8,Tt)]),(0,r._)("div",Vt,[(0,r._)("p",It,(0,g.zw)(t.name),1),(0,r._)("p",Nt,"$"+(0,g.zw)(t.price)+" each",1)]),(0,r._)("div",Ot,["cart"==a.parent?((0,r.wg)(),(0,r.iD)("div",Mt,[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e=>t.quantity=e},null,8,Zt),[[s.nr,t.quantity]]),(0,r._)("button",{class:"btn",onClick:e=>n.updateCart(t)},"Update",8,Et)])):(0,r.kq)("",!0),(0,r._)("div",Ht,[(0,r._)("p",null,"$"+(0,g.zw)(n.calculateTotal(t)),1)])])])))),128)),(0,r._)("div",jt,[Bt,(0,r._)("div",Ft,["cart"==a.parent?((0,r.wg)(),(0,r.j4)(o,{key:0,to:{name:"checkout"},class:"btn"},{default:(0,r.w5)((()=>[(0,r.Uk)("Checkout")])),_:1})):(0,r.kq)("",!0)]),(0,r._)("div",Lt,[(0,r._)("div",Qt,[(0,r._)("p",null,"$"+(0,g.zw)(n.calculateCartTotal()),1)])])])])):((0,r.wg)(),(0,r.iD)("div",Xt,[(0,r._)("div",Yt,[Gt,(0,r._)("div",Kt,[(0,r.Wm)(o,{to:"/categories/all",class:"btn"},{default:(0,r.w5)((()=>[(0,r.Uk)("Continue Shopping")])),_:1})])])]))}a(7658);var Jt={name:"CartView",props:{parent:parent},data(){return{categories:[],products:[],category:[]}},mounted(){this.listCartproducts(),console.info("%cparent: %o","color: red;font-size:12px",this.parent)},methods:{updateCart(t){this.$store.commit("updateCart",t)},listCartproducts(){let t=[];return this.$store.getters.getCart.forEach((e=>{let a=this.$store.getters.getProduct(e.id);a={...a,quantity:e.quantity},t.push(a)})),t},calculateTotal(t){return t.quantity*t.price},calculateCartTotal(){let t=0;return this.$store.getters.getCart.forEach((e=>{let a=this.$store.getters.getProduct(e.id);t+=e.quantity*a.price})),t}}};const te=(0,m.Z)(Jt,[["render",Rt],["__scopeId","data-v-38fe6437"]]);var ee=te;function ae(t,e,a,s,i,l){return(0,r.wg)(),(0,r.iD)("h2",null,(0,g.zw)(a.title),1)}var se={name:"CartTitle",props:["title"]};const re=(0,m.Z)(se,[["render",ae],["__scopeId","data-v-f6b7f1fc"]]);var ie=re,le={name:"CartView",components:{CartContents:ee,CartTitle:ie}};const ne=(0,m.Z)(le,[["render",Pt],["__scopeId","data-v-bf37321e"]]);var oe=ne;const de=t=>((0,r.dD)("data-v-d067ea70"),t=t(),(0,r.Cn)(),t),ce={class:"cart"},ue={class:"checkout-area"},pe={class:"customer-area"},me={class:"customer-details"},_e=de((()=>(0,r._)("h3",null,"Login",-1))),he={class:"details-form"},ge={class:"form-row"},ve=de((()=>(0,r._)("label",null,"Name:",-1))),fe={class:"form-row"},we=de((()=>(0,r._)("label",null,"Address:",-1))),ye=de((()=>(0,r._)("div",{class:"form-row btn"},[(0,r._)("div",{class:"btn"},"Log In")],-1))),be={class:"customer-details"},ke=de((()=>(0,r._)("h3",null,"Customer Details",-1))),Ce={class:"details-form"},De={class:"form-row"},Ue=de((()=>(0,r._)("label",null,"Name:",-1))),ze={class:"form-row"},Ae=de((()=>(0,r._)("label",null,"Street:",-1))),qe={class:"form-row"},xe=de((()=>(0,r._)("label",null,"City:",-1))),Pe={class:"form-row"},Se=de((()=>(0,r._)("label",null,"Zip:",-1))),We={class:"customer-details"},$e=de((()=>(0,r._)("h3",null,"Shipping Details",-1))),Te={class:"ship-same-customer"},Ve=de((()=>(0,r._)("span",null,"Same as customer",-1))),Ie={class:"details-form"},Ne={class:"form-row"},Oe=de((()=>(0,r._)("label",null,"Name:",-1))),Me={class:"form-row"},Ze=de((()=>(0,r._)("label",null,"Street:",-1))),Ee={class:"form-row"},He=de((()=>(0,r._)("label",null,"City:",-1))),je={class:"form-row"},Be=de((()=>(0,r._)("label",null,"Zip:",-1))),Fe={class:"customer-details"},Le=de((()=>(0,r._)("h3",null,"Payment Details",-1))),Qe={class:"details-form"},Xe={class:"form-row"},Ye=de((()=>(0,r._)("label",null,"Payment Method:",-1))),Ge=de((()=>(0,r._)("option",{value:"visa"},"Visa",-1))),Ke=de((()=>(0,r._)("option",{value:"mastercard"},"MasterCard",-1))),Re=de((()=>(0,r._)("option",{value:"paypal"},"Paypal",-1))),Je=[Ge,Ke,Re],ta={class:"form-row"},ea=de((()=>(0,r._)("label",null,"Card Number:",-1))),aa={class:"form-row"},sa=de((()=>(0,r._)("label",null,"Exp Date:",-1))),ra={class:"form-row"},ia=de((()=>(0,r._)("label",null,"Security Code:",-1))),la={class:"customer-details"},na={class:"details-form"},oa={class:"form-row pay"},da={class:"btn"};function ca(t,e,a,i,l,n){const o=(0,r.up)("CartTitle"),d=(0,r.up)("CartContents");return(0,r.wg)(),(0,r.iD)("div",ce,[(0,r.Wm)(o,{title:"Checkout"}),(0,r._)("div",ue,[(0,r.Wm)(d,{parent:"checkout"}),(0,r._)("div",pe,[(0,r._)("div",me,[_e,(0,r._)("div",he,[(0,r._)("div",ge,[ve,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.account.loginName=t)},null,512),[[s.nr,l.account.loginName]])]),(0,r._)("div",fe,[we,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>l.account.loginPassword=t)},null,512),[[s.nr,l.account.loginPassword]])]),ye])]),(0,r._)("div",be,[ke,(0,r._)("div",Ce,[(0,r._)("div",De,[Ue,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>l.billingAddress.name=t)},null,512),[[s.nr,l.billingAddress.name]])]),(0,r._)("div",ze,[Ae,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>l.billingAddress.street=t)},null,512),[[s.nr,l.billingAddress.street]])]),(0,r._)("div",qe,[xe,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=t=>l.billingAddress.city=t)},null,512),[[s.nr,l.billingAddress.city]])]),(0,r._)("div",Pe,[Se,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=t=>l.billingAddress.zip=t)},null,512),[[s.nr,l.billingAddress.zip]])])])]),(0,r._)("div",We,[$e,(0,r._)("p",Te,[(0,r._)("input",{type:"checkbox",onClick:e[6]||(e[6]=t=>n.sameAsCustomer(t))}),Ve]),(0,r._)("div",Ie,[(0,r._)("div",Ne,[Oe,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[7]||(e[7]=t=>l.shippingAddress.name=t)},null,512),[[s.nr,l.shippingAddress.name]])]),(0,r._)("div",Me,[Ze,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[8]||(e[8]=t=>l.shippingAddress.street=t)},null,512),[[s.nr,l.shippingAddress.street]])]),(0,r._)("div",Ee,[He,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[9]||(e[9]=t=>l.shippingAddress.city=t)},null,512),[[s.nr,l.shippingAddress.city]])]),(0,r._)("div",je,[Be,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[10]||(e[10]=t=>l.shippingAddress.zip=t)},null,512),[[s.nr,l.shippingAddress.zip]])])])]),(0,r._)("div",Fe,[Le,(0,r._)("div",Qe,[(0,r._)("div",Xe,[Ye,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":e[11]||(e[11]=t=>l.paymentDetails.method=t)},Je,512),[[s.bM,l.paymentDetails.method]])]),(0,r._)("div",ta,[ea,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[12]||(e[12]=t=>l.paymentDetails.cardNum=t)},null,512),[[s.nr,l.paymentDetails.cardNum]])]),(0,r._)("div",aa,[sa,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[13]||(e[13]=t=>l.paymentDetails.cardExp=t)},null,512),[[s.nr,l.paymentDetails.cardExp]])]),(0,r._)("div",ra,[ia,(0,r.Uk)(),(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[14]||(e[14]=t=>l.paymentDetails.cardSec=t)},null,512),[[s.nr,l.paymentDetails.cardSec]])])])]),(0,r._)("div",la,[(0,r._)("div",na,[(0,r._)("div",oa,[(0,r._)("div",da,[(0,r._)("a",{href:"#",onClick:e[15]||(e[15]=(0,s.iM)((t=>n.completePurchase()),["prevent"]))},"Complete Purchase")])])])])])])])}var ua={name:"CartView",components:{CartContents:ee,CartTitle:ie},data(){return{categories:[],products:[],category:[],shipping:20,billingAddress:{name:"Kumar Desai",street:"420 Monte Vista Avenue",city:"Mill Valley",zip:"94941"},shippingAddress:{name:"",street:"",city:"",zip:""},paymentDetails:{method:"",cardNum:"",cardExp:"",cardSec:""},account:{loginName:"",loginPassword:""}}},beforeMount(){},mounted(){},methods:{sameAsCustomer(t){t.target.checked?this.shippingAddress=JSON.parse(JSON.stringify(this.billingAddress)):this.shippingAddress={name:"",address:"",city:"",zip:""}},completePurchase(){let t={customerId:123,name:this.billingAddress.name,billingAddress:{street:this.billingAddress.street,city:this.billingAddress.city,zip:this.billingAddress.zip},shippingAddress:{street:this.shippingAddress.street,city:this.shippingAddress.city,zip:this.shippingAddress.zip},paymentDetails:{method:this.paymentDetails.method,cardNum:this.paymentDetails.cardNum,cardExp:this.paymentDetails.cardExp,cardSec:this.paymentDetails.cardSec},shippingCharge:20,shippingStatus:"Not Shipped",shippingMethod:"UPS",productList:[]};this.$store.getters.getCart.forEach((e=>{t.productList.push([e.id,e.quantity])})),this.$store.commit("addSale",t);let e=this.$store.getters.getOrderId;this.$router.push({name:"salecomplete",params:{order_id:e}})}}};const pa=(0,m.Z)(ua,[["render",ca],["__scopeId","data-v-d067ea70"]]);var ma=pa;const _a=t=>((0,r.dD)("data-v-c7b6eec8"),t=t(),(0,r.Cn)(),t),ha={class:"sale-complete"},ga={class:"sale-complete-area"},va={class:"cart-area"},fa={class:"image"},wa=["src"],ya={class:"desc"},ba={class:"name"},ka={class:"price"},Ca={class:"info"},Da={class:"sub-total"},Ua={class:"cart-product"},za=_a((()=>(0,r._)("div",{class:"image"},null,-1))),Aa=_a((()=>(0,r._)("div",{class:"btn-checkout"},null,-1))),qa={class:"info"},xa={class:"grand-total"},Pa={class:"bold"},Sa={class:"customer-area"},Wa={class:"customer-details"},$a=_a((()=>(0,r._)("h3",null,"Customer Details",-1))),Ta={class:"details-form"},Va={class:"form-row"},Ia=_a((()=>(0,r._)("label",null,"Name:",-1))),Na={class:"form-row"},Oa=_a((()=>(0,r._)("label",null,"Address:",-1))),Ma={class:"form-row"},Za=_a((()=>(0,r._)("label",null,"City:",-1))),Ea={class:"form-row"},Ha=_a((()=>(0,r._)("label",null,"Zip:",-1))),ja={class:"customer-details"},Ba=_a((()=>(0,r._)("h3",null,"Shipping Details",-1))),Fa={class:"details-form"},La={class:"form-row"},Qa=_a((()=>(0,r._)("label",null,"Address:",-1))),Xa={class:"form-row"},Ya=_a((()=>(0,r._)("label",null,"City:",-1))),Ga={class:"form-row"},Ka=_a((()=>(0,r._)("label",null,"Zip:",-1))),Ra={class:"form-row"},Ja=_a((()=>(0,r._)("label",null,"Shipping Cost:",-1))),ts={class:"form-row"},es=_a((()=>(0,r._)("label",null,"Shipping Method:",-1))),as={class:"form-row"},ss=_a((()=>(0,r._)("label",null,"Shipping Status:",-1))),rs={style:{color:"green"}},is={class:"customer-details"},ls=_a((()=>(0,r._)("h3",null,"Payment Details",-1))),ns={class:"details-form"},os={class:"form-row"},ds=_a((()=>(0,r._)("label",null,"Payment Method:",-1))),cs={class:"form-row"},us=_a((()=>(0,r._)("label",null,"Card Number Ending:",-1))),ps={class:"form-row"},ms=_a((()=>(0,r._)("label",null,"Exp Date:",-1))),_s={class:"form-row"},hs=_a((()=>(0,r._)("label",null,"Security Code:",-1))),gs={class:"customer-details btn"},vs={class:"details-form btn"},fs={class:"form-row pay"},ws={class:"btn"};function ys(t,e,a,s,i,l){const n=(0,r.up)("CartTitle"),o=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",ha,[(0,r.Wm)(n,{title:"Sale Complete"}),(0,r._)("div",ga,[(0,r._)("div",va,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.listPurchasedProducts(),(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"cart-product"},[(0,r._)("div",fa,[(0,r._)("img",{src:t.img,alt:""},null,8,wa)]),(0,r._)("div",ya,[(0,r._)("p",ba,(0,g.zw)(t.name),1),(0,r._)("p",ka,"$"+(0,g.zw)(t.price)+" per item",1)]),(0,r._)("div",Ca,[(0,r._)("div",Da,[(0,r._)("p",null,"$"+(0,g.zw)(l.calculateSubTotal(t)),1)])])])))),128)),(0,r._)("div",Ua,[za,Aa,(0,r._)("div",qa,[(0,r._)("div",xa,[(0,r._)("p",null,"SubTotal: $"+(0,g.zw)(l.calculateCartTotal()),1),(0,r._)("p",null,"Shipping: $"+(0,g.zw)(i.sale.shippingCharge),1),(0,r._)("p",Pa,"Total: $"+(0,g.zw)(l.calculateGrandTotal()),1)])])])]),(0,r._)("div",Sa,[(0,r._)("div",Wa,[$a,(0,r._)("div",Ta,[(0,r._)("div",Va,[Ia,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.name),1)]),(0,r._)("div",Na,[Oa,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.billingAddress.street),1)]),(0,r._)("div",Ma,[Za,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.billingAddress.city),1)]),(0,r._)("div",Ea,[Ha,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.billingAddress.zip),1)])])]),(0,r._)("div",ja,[Ba,(0,r._)("div",Fa,[(0,r._)("div",La,[Qa,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.shippingAddress.street),1)]),(0,r._)("div",Xa,[Ya,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.shippingAddress.city),1)]),(0,r._)("div",Ga,[Ka,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.shippingAddress.zip),1)]),(0,r._)("div",Ra,[Ja,(0,r.Uk)(),(0,r._)("span",null,"$"+(0,g.zw)(i.sale.shippingCharge),1)]),(0,r._)("div",ts,[es,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.shippingMethod),1)]),(0,r._)("div",as,[ss,(0,r.Uk)(),(0,r._)("span",rs,(0,g.zw)(i.sale.shippingStatus),1)])])]),(0,r._)("div",is,[ls,(0,r._)("div",ns,[(0,r._)("div",os,[ds,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.paymentDetails.method),1)]),(0,r._)("div",cs,[us,(0,r.Uk)(),(0,r._)("span",null,"XXX-XXXX-"+(0,g.zw)(i.sale.paymentDetails.cardNum.substr(i.sale.paymentDetails.cardNum.length-4)),1)]),(0,r._)("div",ps,[ms,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.paymentDetails.cardExp),1)]),(0,r._)("div",_s,[hs,(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(i.sale.paymentDetails.cardSec),1)])])]),(0,r._)("div",gs,[(0,r._)("div",vs,[(0,r._)("div",fs,[(0,r._)("div",ws,[(0,r.Wm)(o,{to:{name:"home"}},{default:(0,r.w5)((()=>[(0,r.Uk)("Return to homepage")])),_:1})])])])])])])])}var bs={name:"SaleCompleteView",props:["order_id"],data(){return{sale:[]}},beforeMount(){this.sale=this.$store.getters.getSales(this.order_id),console.info("%cthis.sale: %o","color: red;font-size:12px",this.sale)},mounted(){console.info("%cthis.sale: %o","color: red;font-size:12px",this.sale)},updated(){},watch:{},computed:{},methods:{listPurchasedProducts(){let t=[];return this.sale.productList.forEach((e=>{let a=this.$store.getters.getProduct(e[0]);a={...a,quantity:e[1]},t.push(a)})),t},calculateSubTotal(t){return t.quantity*t.price},calculateCartTotal(){let t=0;return this.sale.productList.forEach((e=>{let a=this.$store.getters.getProduct(e[0]);t+=e[1]*a.price})),t},calculateGrandTotal(){let t=0;return this.sale.productList.forEach((e=>{let a=this.$store.getters.getProduct(e[0]);t+=e[1]*a.price})),t+this.sale.shippingCharge}}};const ks=(0,m.Z)(bs,[["render",ys],["__scopeId","data-v-c7b6eec8"]]);var Cs=ks;const Ds={class:"not-found"};function Us(t,e){return(0,r.wg)(),(0,r.iD)("div",Ds,"Not found")}const zs={},As=(0,m.Z)(zs,[["render",Us],["__scopeId","data-v-54fd1153"]]);var qs=As;const xs=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:X},{path:"/account",name:"account",component:J},{path:"/categories/:id",name:"category",component:pt,props:!0},{path:"/product/:id",name:"product",component:qt,props:!0},{path:"/cart/",name:"cart",component:oe,props:!0},{path:"/checkout/",name:"checkout",component:ma,props:!0},{path:"/salecomplete/:order_id?",name:"salecomplete",component:Cs,props:!0},{path:"/:pathMatch(.*)",component:qs}],Ps=(0,q.p7)({history:(0,q.PO)("/ShoppingCartVueJs/"),routes:xs});var Ss=Ps,Ws=a(65),$s=(0,Ws.MT)({state:{cart:[],categories:[{id:"all",title:"All Widgets"},{id:"123",title:"Fabulous Widgets"},{id:"456",title:"Great Widgets"},{id:"789",title:"Ok Widgets"}],products:[{id:1,name:"Fabulous Widgets 1",price:100,desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",cat_id:123,img:"https://unsplash.it/640/425"},{id:2,name:"Fabulous Widgets 2",price:150,desc:"Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",cat_id:123,img:"https://unsplash.it/640/426"},{id:3,name:"Fabulous Widgets 3",price:200,desc:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",cat_id:123,img:"https://unsplash.it/640/427"},{id:4,name:"Great Widgets 1",price:90,desc:"Voluptatem sequi nesciunt.",cat_id:456,img:"https://unsplash.it/640/428"},{id:5,name:"Great Widgets 2",price:80,desc:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",cat_id:456,img:"https://unsplash.it/640/429"},{id:6,name:"Great Widgets 3",price:70,desc:"Incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",cat_id:456,img:"https://unsplash.it/640/430"},{id:7,name:"Ok Widgets 1",price:90,desc:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",cat_id:789,img:"https://unsplash.it/640/431"},{id:8,name:"Ok Widgets 2",price:80,desc:"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. ",cat_id:789,img:"https://unsplash.it/640/432"},{id:9,name:"Ok Widgets 3",price:70,desc:"Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",cat_id:789,img:"https://unsplash.it/640/433"}],sales:[],orderId:0,cartQuantity:0},getters:{getProducts(t){return t.products},getCategories(t){return t.categories},getCart(t){return t.cart},getProduct:t=>e=>t.products.filter((t=>t.id==e))[0],getSales:t=>e=>t.sales.filter((t=>t.orderId==e))[0],getSaleList:t=>t.sales,getOrderId:t=>t.orderId},mutations:{addSale(t,e){t.orderId=e.orderId=t.sales.length+1,t.sales.push(e)},addProductToCart(t,e){let a=!0;for(let s=0;s<t.cart.length;s++)if(t.cart[s].id==e){t.cart[s].quantity++,a=!1;break}a&&t.cart.push({id:Number(e),quantity:1}),t.cartQuantity=t.cart.length},updateCart(t,e){let a=t.cart.findIndex((t=>t.id==e.id));0==e.quantity?t.cart=t.cart.filter(((t,e)=>e!=a)):t.cart[a].quantity=e.quantity,t.cartQuantity=t.cart.length}},actions:{testAction(){return"test"}},modules:{}});const Ts={class:"cart-area"},Vs=(0,r._)("div",{class:"cart-product"},[(0,r._)("button",null,"test")],-1),Is=[Vs];function Ns(t,e){return(0,r.wg)(),(0,r.iD)("div",Ts,Is)}const Os={},Ms=(0,m.Z)(Os,[["render",Ns]]);var Zs=Ms;(0,s.ri)(A).component("test",Zs).use($s).use(Ss).mount("#app")}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,i){if(!s){var l=1/0;for(c=0;c<t.length;c++){s=t[c][0],r=t[c][1],i=t[c][2];for(var n=!0,o=0;o<s.length;o++)(!1&i||l>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[o])}))?s.splice(o--,1):(n=!1,i<l&&(l=i));if(n){t.splice(c--,1);var d=r();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,r,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,i,l=s[0],n=s[1],o=s[2],d=0;if(l.some((function(e){return 0!==t[e]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(o)var c=o(a)}for(e&&e(s);d<l.length;d++)i=l[d],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(c)},s=self["webpackChunkshoppingcart"]=self["webpackChunkshoppingcart"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6209)}));s=a.O(s)})();
//# sourceMappingURL=app.691e5c87.js.map