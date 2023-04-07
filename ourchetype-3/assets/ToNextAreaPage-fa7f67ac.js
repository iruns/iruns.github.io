import{S as _}from"./SpriteSheetImg-ee1ace36.js";import{d as v,A as a,b,c as m,m as u,o as f,a as d,e as k,f as i,t as p,u as t,z as x,C as w,g,w as B,B as y,n as I,p as j,l as z,h as C,_ as N}from"./index-9d99deac.js";import{L as P}from"./LogoSet-45551aa3.js";const A=s=>(j("data-v-b276102b"),s=s(),z(),s),R=A(()=>i("div",{class:"divider"},null,-1)),T=v({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(s){const h=s,c=b(),S=m(()=>!!c.bgSetting.bg);let n=u("/"),o=u(""),r=u(""),l=u(-1);const e={};switch(h.area){case a.Intro:n.value+=a.Persona+"/passcode",e.headerY=.5,e.logoSize=.5,o.value=`Menuju
Ruang Terang`,r.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=0;break;case a.Persona:n.value+=a.Shadow+"/passcode",o.value=`Menuju
Ruang Bias`,r.value=`Ikuti jalur
berwarna Biru
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=1;break;case a.Shadow:n.value+=a.Self+"/passcode",o.value=`Selesai
Ruang Bias`,r.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case a.Self:n.value+="graph-instructions",o.value=`Selesai
Ruang Cahaya`,r.value=`Ikuti jalur
berwarna Hijau di
lantai menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,l.value=2;break}return f(()=>{c.setBGSetting(e)}),(Y,M)=>(d(),k("div",{class:I({"to-next-area full-width center-col under-header":!0,dark:t(S)})},[i("p",null,p(t(o)),1),R,i("p",null,p(t(r)),1),t(l)>-1?(d(),x(_,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:t(l)},null,8,["y"])):w("",!0),g(y,{to:t(n)},{default:B(()=>[C("Sampai")]),_:1},8,["to"]),g(P)],2))}});const E=N(T,[["__scopeId","data-v-b276102b"]]);export{E as default};
