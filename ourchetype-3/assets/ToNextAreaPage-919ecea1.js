import{_ as m,S as k}from"./PageContainer.vue_vue_type_style_index_0_lang-180c9541.js";import{d as b,$ as a,e as w,f as x,r as l,U as B,V as y,o as d,k as p,w as _,u as t,b as i,t as g,h as I,g as j,W as N,X as P,p as R,a as z,_ as C}from"./base-c6bf4b0c.js";import{r as f}from"./index-dac72a0a.js";import"./images-5702e0d1.js";import"./archetype-82cba3d4.js";const h=s=>(R("data-v-cfcfe18d"),s=s(),z(),s),T=h(()=>i("div",null,null,-1)),V=h(()=>i("div",{class:"divider"},null,-1)),Y=b({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(s){const v=s,c=w(),S=x(()=>!!c.bgSetting.bg);let n=l("/"),r=l(""),o=l(""),u=l(-1);const e={};switch(v.area){case a.Intro:n.value+=a.Persona+"/passcode",e.headerY=.5,e.logoSize=.5,r.value=`Menuju
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
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,u.value=2;break}return B(()=>{c.setBGSetting(e),f.currentRoute.value.fullPath}),y(()=>{f.forward()}),(A,M)=>(d(),p(m,{"inner-class":{"to-next-area full-width center-col under-header":!0,dark:t(S)}},{default:_(()=>[T,i("p",null,g(t(r)),1),V,i("p",null,g(t(o)),1),t(u)>-1?(d(),p(k,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:t(u)},null,8,["y"])):I("",!0),j(P,{to:t(n)},{default:_(()=>[N("Sampai")]),_:1},8,["to"])]),_:1},8,["inner-class"]))}});const H=C(Y,[["__scopeId","data-v-cfcfe18d"]]);export{H as default};
