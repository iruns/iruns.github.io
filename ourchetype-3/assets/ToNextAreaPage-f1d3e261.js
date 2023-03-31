import{d as _,A as a,b as g,l as r,o as h,a as v,e as S,f as u,t as c,u as l,g as i,w as b,B as f,p as k,k as m,h as w,_ as x}from"./index-ff60b9de.js";import{L as B}from"./LogoSet-03c26cf0.js";const I=s=>(k("data-v-6c5cc91b"),s=s(),m(),s),j={class:"to-area-room full-width center-col under-header"},y=I(()=>u("div",{class:"divider"},null,-1)),N=_({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(s){const d=s,p=g();let o=r("/"),t=r(""),n=r("");const e={};switch(d.area){case a.Intro:o.value+=a.Persona+"/passcode",e.headerY=.5,e.logoSize=.5,t.value=`menuju
Ruang Terang`,n.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5;break;case a.Persona:o.value+=a.Shadow+"/passcode",t.value=`selesai
Ruang Terang`,n.value=`Ikuti jalur
berwarna Biru
di lantai`,e.headerY=.5,e.logoSize=.5;break;case a.Shadow:o.value+=a.Self+"/passcode",t.value=`selesai
Ruang Bias`,n.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case a.Self:o.value+=a.Outro+"/passcode",t.value=`selesai
Ruang Cahaya`,n.value=`Ikuti jalur
berwarna Hijau di
lantai menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5;break}return h(()=>{p.setBGSetting(e)}),(P,T)=>(v(),S("div",j,[u("p",null,c(l(t)),1),y,u("p",null,c(l(n)),1),i(f,{to:l(o)},{default:b(()=>[w("Sampai")]),_:1},8,["to"]),i(B)]))}});const R=x(N,[["__scopeId","data-v-6c5cc91b"]]);export{R as default};
