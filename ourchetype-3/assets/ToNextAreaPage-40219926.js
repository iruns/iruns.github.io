import{_ as f,S as m}from"./PageContainer.vue_vue_type_style_index_0_lang-4d9daac0.js";import{d as k,$ as a,e as b,f as x,r as l,U as w,o as d,k as p,w as _,u as t,b as i,t as g,h as y,g as B,W as I,X as j,p as N,a as P,_ as R}from"./base-0f655f47.js";import{r as z}from"./index-51c8f47d.js";import"./images-5702e0d1.js";import"./archetype-82cba3d4.js";const h=s=>(N("data-v-45e1464d"),s=s(),P(),s),C=h(()=>i("div",null,null,-1)),T=h(()=>i("div",{class:"divider"},null,-1)),Y=k({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(s){const v=s,c=b(),S=x(()=>!!c.bgSetting.bg);let n=l("/"),r=l(""),o=l(""),u=l(-1);const e={};switch(v.area){case a.Intro:n.value+=a.Persona+"/passcode",e.headerY=.5,e.logoSize=.5,r.value=`Menuju
Ruang Terang`,o.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5,u.value=0;break;case a.Persona:n.value+=a.Shadow+"/passcode",r.value=`Menuju
Ruang Bias`,o.value=`Ikuti jalur
berwarna Biru
di lantai`,e.headerY=.5,e.logoSize=.5,u.value=1;break;case a.Shadow:n.value+=a.Self+"/passcode",r.value=`Selesai
Ruang Bias`,o.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case a.Self:n.value+="graph-instructions",r.value=`Selesai
Ruang Cahaya`,o.value=`Ikuti jalur
berwarna Hijau di
lantai menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,u.value=2;break}return w(()=>{c.setBGSetting(e),z.currentRoute.value.fullPath}),(A,M)=>(d(),p(f,{"inner-class":{"to-next-area full-width center-col under-header":!0,dark:t(S)}},{default:_(()=>[C,i("p",null,g(t(r)),1),T,i("p",null,g(t(o)),1),t(u)>-1?(d(),p(m,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:t(u)},null,8,["y"])):y("",!0),B(j,{to:t(n)},{default:_(()=>[I("Sampai")]),_:1},8,["to"])]),_:1},8,["inner-class"]))}});const H=R(Y,[["__scopeId","data-v-45e1464d"]]);export{H as default};
