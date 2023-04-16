import{_ as v,S as f}from"./PageContainer.vue_vue_type_style_index_0_lang-3904b936.js";import{d as b,a1 as a,e as k,f as w,r as u,W as x,o as d,m as p,w as _,u as t,b as i,t as g,h as y,g as B,Y as I,Z as j,p as N,a as P,_ as Y}from"./base-a4493cd8.js";import"./index-72268a61.js";import"./images-5702e0d1.js";import"./archetype-82cba3d4.js";const h=n=>(N("data-v-3364a8ea"),n=n(),P(),n),z=h(()=>i("div",null,null,-1)),C=h(()=>i("div",{class:"divider"},null,-1)),R=b({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(n){const m=n,c=k(),S=w(()=>!!c.bgSetting.bg);let s=u({name:"welcome"}),o=u(""),r=u(""),l=u(-1);const e={};switch(m.area){case a.Intro:s.value.name=a.Persona+"-passcode",e.headerY=.5,e.logoSize=.5,o.value=`Menuju
Ruang Terang`,r.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=0;break;case a.Persona:s.value.name=a.Shadow+"-passcode",o.value=`Menuju
Ruang Bias`,r.value=`Ikuti jalur
berwarna Biru
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=1;break;case a.Shadow:s.value.name=a.Self+"-passcode",o.value=`Selesai
Ruang Bias`,r.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case a.Self:s.value.name="graph-instructions",o.value=`Selesai
Ruang Cahaya`,r.value=`Ikuti jalur
berwarna Hijau di
lantai menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,l.value=2;break}return x(()=>{c.setBGSetting(e)}),(T,A)=>(d(),p(v,{"inner-class":{"to-next-area full-width center-col under-header":!0,dark:t(S)}},{default:_(()=>[z,i("p",null,g(t(o)),1),C,i("p",null,g(t(r)),1),t(l)>-1?(d(),p(f,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:t(l)},null,8,["y"])):y("",!0),B(j,{to:t(s)},{default:_(()=>[I("Sampai")]),_:1},8,["to"])]),_:1},8,["inner-class"]))}});const H=Y(R,[["__scopeId","data-v-3364a8ea"]]);export{H as default};
