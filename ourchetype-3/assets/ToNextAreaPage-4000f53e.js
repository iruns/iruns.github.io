import{_ as m,S as b}from"./PageContainer.vue_vue_type_style_index_0_lang-01072750.js";import{d as k,X as a,e as w,f as x,N as l,P as B,Q as y,o as p,g,i as _,u as t,b as i,W as h,a1 as I,h as P,R as N,S as R,p as j,a as Y,_ as z}from"./base-ccb28cfa.js";import{r as c}from"./index-22b3b33d.js";import"./images-5702e0d1.js";import"./archetype-82cba3d4.js";const f=n=>(j("data-v-4de6905c"),n=n(),Y(),n),C=f(()=>i("div",null,null,-1)),T=f(()=>i("div",{class:"divider"},null,-1)),A=k({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(n){const v=n,d=w(),S=x(()=>!!d.bgSetting.bg);let o=l("/"),r=l(""),s=l(""),u=l(-1);const e={};switch(v.area){case a.Intro:o.value+=a.Persona+"/passcode",e.headerY=.5,e.logoSize=.5,r.value=`Menuju
Ruang Terang`,s.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5,u.value=0;break;case a.Persona:o.value+=a.Shadow+"/passcode",r.value=`Menuju
Ruang Bias`,s.value=`Ikuti jalur
berwarna Biru
di lantai`,e.headerY=.5,e.logoSize=.5,u.value=1;break;case a.Shadow:o.value+=a.Self+"/passcode",r.value=`Selesai
Ruang Bias`,s.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case a.Self:o.value+="graph-instructions",r.value=`Selesai
Ruang Cahaya`,s.value=`Ikuti jalur
berwarna Hijau di
lantai menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,u.value=2;break}return B(()=>{d.setBGSetting(e),c.currentRoute.value.fullPath}),window.onbeforeunload=function(){return"Your work will be lost."},y(()=>{console.log(c.currentRoute.value.fullPath),c.forward()}),(M,V)=>(p(),g(m,{"inner-class":{"to-next-area full-width center-col under-header":!0,dark:t(S)}},{default:_(()=>[C,i("p",null,h(t(r)),1),T,i("p",null,h(t(s)),1),t(u)>-1?(p(),g(b,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:t(u)},null,8,["y"])):I("",!0),P(R,{to:t(o)},{default:_(()=>[N("Sampai")]),_:1},8,["to"])]),_:1},8,["inner-class"]))}});const O=z(A,[["__scopeId","data-v-4de6905c"]]);export{O as default};
