import{d as n,q as r,c,o as i,a as l,h as _,u,S as p,_ as g,e as m,W as S,n as o,K as f}from"./index-dec5304f.js";const y={class:"logo-set"},v=n({__name:"LogoSet",setup(e){const t=r(),s=c(()=>!!t.bgSettings.bg);return(a,d)=>(i(),l("div",y,[_(p,{class:"logo-img",src:"logos.webp",alt:"Logo NuArt, Indonesian Society of Botanical Artists, Ourchetype","x-sprites":1,y:u(s)?1:0},null,8,["y"])]))}});const C=g(v,[["__scopeId","data-v-92502152"]]),b=n({__name:"PageContainer",props:{outerClass:{type:Object,default:()=>{}},innerClass:{type:Object,default:()=>{}}},setup(e){const t=r(),s=c(()=>{switch(t.bgSettings.logoSize){case 2:return"70vw";case 1:return"60vw";default:return"0"}});return(a,d)=>(i(),l("div",{class:o(["outer container",e.outerClass])},[m("div",{class:o(["inner container main-content",e.innerClass]),style:f({paddingTop:u(s)})},[S(a.$slots,"default")],6),_(C)],2))}});export{C as L,b as _};