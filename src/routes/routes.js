import Vue from "vue";
import vueRouter from "vue-router";

import Piechart from "../components/Piechart"
import Radarchart from "../components/Radarchart"


Vue.use(vueRouter);


const router = new vueRouter({
mode:'history',
routes:[
    {
        path:'/',
        name:'piechart',
        component:Piechart,
        props:true,
    },
    {
        path:'/piechart',
        name:'piechart',
        component:Piechart,
        props:true,
    },
    {
        path:'/language',
        name:'language',
        component:Piechart,
        props:true,
    },
    {
        path:'/radarchart',
        name:'radarchart',
        component:Radarchart,
        props:true,
    },
   
]
});

export default router;