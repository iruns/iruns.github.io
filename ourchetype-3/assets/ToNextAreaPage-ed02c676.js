import{S as h}from"./SpriteSheetImg-58409440.js";import{d as v,A as a,b as f,c as m,m as u,o as k,a as d,e as b,f as i,t as p,u as t,z as x,C as w,g,w as B,B as y,n as I,p as j,l as z,h as C,_ as N}from"./index-27667974.js";import{L as P}from"./LogoSet-2b760d94.js";const A=s=>(j("data-v-740763f8"),s=s(),z(),s),R=A(()=>i("div",{class:"divider"},null,-1)),T=v({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(s){const S=s,c=f(),_=m(()=>!!c.bgSetting.bg);let o=u("/"),n=u(""),r=u(""),l=u(-1);const e={};switch(S.area){case a.Intro:o.value+=a.Persona+"/passcode",e.headerY=.5,e.logoSize=.5,n.value=`Menuju
Ruang Terang`,r.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=0;break;case a.Persona:o.value+=a.Shadow+"/passcode",n.value=`Menuju
Ruang Bias`,r.value=`Ikuti jalur
berwarna Biru
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=1;break;case a.Shadow:o.value+=a.Self+"/passcode",n.value=`Selesai
Ruang Bias`,r.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case a.Self:o.value+=a.Outro+"/passcode",n.value=`Selesai
Ruang Cahaya`,r.value=`Ikuti jalur
berwarna Hijau di
lantai menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,l.value=2;break}return k(()=>{c.setBGSetting(e)}),(Y,M)=>(d(),b("div",{class:I({"to-next-area full-width center-col under-header":!0,dark:t(_)})},[i("p",null,p(t(n)),1),R,i("p",null,p(t(r)),1),t(l)>-1?(d(),x(h,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:t(l)},null,8,["y"])):w("",!0),g(y,{to:t(o)},{default:B(()=>[C("Sampai")]),_:1},8,["to"]),g(P)],2))}});const D=N(T,[["__scopeId","data-v-740763f8"]]);export{D as default};
