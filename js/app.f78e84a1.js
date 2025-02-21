(function(){"use strict";var e={3584:function(e,t,n){var r=n(3751),o=n(641);const a={id:"app"};function i(e,t,n,r,i,s){const u=(0,o.g2)("router-view"),c=(0,o.g2)("FooterComponent");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(u),(0,o.bF)(c)])}const s={class:"footer"};function u(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("footer",s,t[0]||(t[0]=[(0,o.Lk)("div",{class:"footer-content"},[(0,o.Lk)("p",null,"Email: support@shop.com"),(0,o.Lk)("p",null,"Телефон: +380 50 123 4567"),(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#"},"Про нас")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#"},"Доставка")])])],-1),(0,o.Lk)("div",{class:"footer-bottom"},[(0,o.Lk)("p",null,"© 2025 My Shop. Усі права захищено.")],-1)]))}var c={name:"FooterComponent"},l=n(6262);const p=(0,l.A)(c,[["render",u],["__scopeId","data-v-67fccc03"]]);var d=p,m={components:{FooterComponent:d}};const h=(0,l.A)(m,[["render",i]]);var v=h,f=n(5220);function g(e,t,n,r,a,i){const s=(0,o.g2)("router-link"),u=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("nav",null,[(0,o.bF)(s,{to:"/admin/products","active-class":"active-link"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Головна")]))),_:1}),(0,o.bF)(s,{to:"/admin/reviews","active-class":"active-link"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("Відгуки")]))),_:1}),(0,o.bF)(s,{to:"/login","active-class":"active-link"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("Особистий кабінет")]))),_:1})]),(0,o.Lk)("main",null,[(0,o.bF)(u)])])}var k={name:"AdminDashboard"};const L=(0,l.A)(k,[["render",g],["__scopeId","data-v-43dd8b02"]]);var b=L;function C(e,t,n,a,i,s){const u=(0,o.g2)("ManageCart"),c=(0,o.g2)("ProductList");return(0,o.uX)(),(0,o.CE)("div",null,[t[1]||(t[1]=(0,o.Lk)("h2",null,"Пошук товарів",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.searchQuery=e),placeholder:"Введіть назву товару"},null,512),[[r.Jo,a.searchQuery]]),(0,o.bF)(u),(0,o.bF)(c,{products:a.filteredProducts},null,8,["products"])])}n(4114),n(8111),n(2489),n(8237);var _=n(953),w=n(33);const y={key:0},E=["src","alt"],I=["onClick"],X={key:1};function A(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("div",null,[t[0]||(t[0]=(0,o.Lk)("h2",null,"Кошик покупок",-1)),0===r.cartItems.length?((0,o.uX)(),(0,o.CE)("p",y,"Кошик порожній")):(0,o.Q3)("",!0),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.cartItems,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t},[(0,o.Lk)("img",{src:e.image,alt:e.name,width:"50"},null,8,E),(0,o.eW)(" "+(0,w.v_)(e.name)+" - "+(0,w.v_)(e.price)+" грн ",1),(0,o.Lk)("button",{onClick:e=>r.removeItem(t)},"Видалити",8,I)])))),128))]),r.cartItems.length>0?((0,o.uX)(),(0,o.CE)("p",X,"Загальна сума: "+(0,w.v_)(r.totalPrice)+" грн",1)):(0,o.Q3)("",!0)])}var j={setup(){const e=(0,o.WQ)("cartItems"),t=(0,o.WQ)("totalPrice"),n=(0,o.WQ)("removeItem");return{cartItems:e,totalPrice:t,removeItem:n}}};const F=(0,l.A)(j,[["render",A],["__scopeId","data-v-ea0e6a54"]]);var S=F;const P={class:"product-list"};function O(e,t,n,r,a,i){const s=(0,o.g2)("ProductCard");return(0,o.uX)(),(0,o.CE)("div",P,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.products,(e=>((0,o.uX)(),(0,o.Wv)(s,{key:e.id,name:e.name,description:e.description,price:e.price,image:e.image},null,8,["name","description","price","image"])))),128))])}const W={class:"product-card"},Q=["src","alt"],T={class:"price"};function M(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("div",W,[(0,o.Lk)("img",{src:n.image,alt:n.name,class:"product-image"},null,8,Q),(0,o.Lk)("h2",null,(0,w.v_)(n.name),1),(0,o.Lk)("p",null,(0,w.v_)(n.description),1),(0,o.Lk)("p",T,(0,w.v_)(n.price)+" грн",1),(0,o.Lk)("button",{class:"buy-button",onClick:t[0]||(t[0]=(...e)=>r.addToCart&&r.addToCart(...e))},"Купити")])}var x={props:{name:String,description:String,price:Number,image:String},setup(e){const t=(0,o.WQ)("addToCart");function n(){t({name:e.name,price:e.price,image:e.image})}return{addToCart:n}}};const K=(0,l.A)(x,[["render",M],["__scopeId","data-v-35756ad6"]]);var R=K,U={components:{ProductCard:R},props:{products:{type:Array,required:!0}}};const G=(0,l.A)(U,[["render",O],["__scopeId","data-v-0b083086"]]);var J=G,N={components:{ProductList:J,ManageCart:S},setup(){const e=(0,_.KR)(""),t=(0,_.KR)([]),n=(0,_.KR)([{id:1,name:"Смартфон Samsung Galaxy S23",price:35e3,image:"https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg"},{id:2,name:"Ноутбук Apple MacBook Air M2",price:58e3,image:"https://img.freepik.com/free-photo/workplace-with-laptop-stand-near-eyeglasses_23-2148040478.jpg"},{id:3,name:"Бездротові навушники Sony",price:7800,image:"https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg"},{id:4,name:"Механічна клавіатура HyperX",price:4500,image:"https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg"},{id:5,name:"Смарт-годинник Apple Watch Series 9",price:17e3,image:"https://img.freepik.com/free-photo/modern-sport-adult-hand-lifestyle_1127-2745.jpg"},{id:6,name:"Портативна колонка JBL Series 1",price:5200,image:"https://img.freepik.com/free-photo/still-life-tech-device_23-2150722602.jpg"},{id:7,name:"Телевізор Samsung 4K QLED",price:28e3,image:"https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg"},{id:8,name:"Фітнес-браслет Xiaomi Mi Band 7",price:1800,image:"https://img.freepik.com/free-photo/futuristic-virtual-reality-headset-illuminates-dark-studio-shot-generated-by-ai_188544-13298.jpg"}]),r=(0,o.EW)((function(){return n.value.filter((function(t){return t.name.toLowerCase().includes(e.value.toLowerCase())}))})),a=(0,o.EW)((function(){return t.value.reduce((function(e,t){return e+t.price}),0)}));function i(e){t.value.push(e)}function s(e){t.value.splice(e,1)}return(0,o.Gt)("cartItems",t),(0,o.Gt)("totalPrice",a),(0,o.Gt)("addToCart",i),(0,o.Gt)("removeItem",s),{searchQuery:e,products:n,filteredProducts:r}}};const $=(0,l.A)(N,[["render",C],["__scopeId","data-v-6236f678"]]);var B=$;function V(e,t,n,r,a,i){const s=(0,o.g2)("ReviewsComponent");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(s)])}function D(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("div",null,[t[1]||(t[1]=(0,o.Lk)("h2",null,"Відгуки",-1)),(0,o.Lk)("table",null,[t[0]||(t[0]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Ім'я"),(0,o.Lk)("th",null,"Рейтинг"),(0,o.Lk)("th",null,"Коментар")])],-1)),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.reviews,((e,t)=>((0,o.uX)(),(0,o.CE)("tr",{key:t},[(0,o.Lk)("td",null,(0,w.v_)(e.Name),1),(0,o.Lk)("td",null,(0,w.v_)(e.Rating),1),(0,o.Lk)("td",null,(0,w.v_)(e.Comment),1)])))),128))])])])}var H=n(5501),q=n.n(H),z={data(){return{reviews:[]}},created(){const e="\n  Name,Rating,Comment\nІван,5,Дякую за швидку доставку\nОльга,5,Все супер! Буду замовляти ще\nАндрій,5,Обслуговування, як завжди - на висоті\nМарина,4,Все чудово! Покупкою задоволена, але коробка була прим'ята.\nСергій,5,Рекомендую цей чудовий магазин усім!\nДанило,5,Дуже демократичні ціни. Я завжди купую лише тут.\nМатвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.\nАнна,5,Дякую за чудові знижки\nРаймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.\n      ";q().parse(e.trim(),{header:!0,complete:e=>{this.reviews=e.data}})}};const Y=(0,l.A)(z,[["render",D],["__scopeId","data-v-6b549981"]]);var Z=Y,ee={components:{ReviewsComponent:Z}};const te=(0,l.A)(ee,[["render",V]]);var ne=te;const re={class:"login-container"},oe={key:0,class:"error"};function ae(e,t,n,a,i,s){return(0,o.uX)(),(0,o.CE)("div",re,[t[3]||(t[3]=(0,o.Lk)("h2",null,"Авторизація",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),placeholder:"Логін"},null,512),[[r.Jo,i.username]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),type:"password",placeholder:"Пароль"},null,512),[[r.Jo,i.password]]),(0,o.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>s.login&&s.login(...e))},"Увійти"),i.message?((0,o.uX)(),(0,o.CE)("p",oe,(0,w.v_)(i.message),1)):(0,o.Q3)("",!0)])}n(116);var ie={data(){return{username:"",password:"",message:"",users:[]}},async mounted(){try{const e=await fetch("/admin.json");if(!e.ok)throw new Error(`HTTP помилка: ${e.status}`);this.users=await e.json()}catch(e){console.error("Помилка завантаження JSON:",e),this.message="Помилка сервера! Спробуйте пізніше."}},methods:{login(){if(!this.username||!this.password)return void(this.message="Введіть логін та пароль!");const e=this.users.find((e=>e.username===this.username&&e.password===this.password));e?(localStorage.setItem("authUser",this.username),this.$router.push("/profile")):this.message="Невірний логін або пароль!"}}};const se=(0,l.A)(ie,[["render",ae]]);var ue=se;const ce={class:"admin-container"};function le(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("div",ce,[t[1]||(t[1]=(0,o.Lk)("h2",null,"Адмін-панель",-1)),(0,o.Lk)("p",null,"Вітаємо, "+(0,w.v_)(a.username)+"!",1),(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.logout&&i.logout(...e))},"Вийти")])}var pe={data(){return{username:localStorage.getItem("authUser")||""}},methods:{logout(){localStorage.removeItem("authUser"),this.$router.push("/")}},beforeMount(){this.username||this.$router.push("/login")}};const de=(0,l.A)(pe,[["render",le]]);var me=de;const he=[{path:"/",component:b,children:[{path:"",component:B},{path:"reviews",component:ne}]},{path:"/admin",component:b,children:[{path:"products",component:B},{path:"reviews",component:ne}]},{path:"/login",component:ue},{path:"/profile",component:me}],ve=(0,f.aE)({history:(0,f.LA)("/my-shop7.9/"),routes:he});var fe=ve;(0,r.Ef)(v).use(fe).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkmy_shop7_9"]=self["webpackChunkmy_shop7_9"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(3584)}));r=n.O(r)})();
//# sourceMappingURL=app.f78e84a1.js.map