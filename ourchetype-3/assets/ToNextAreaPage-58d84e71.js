import{S as v,L as S}from"./LogoSet-ad2c4d3b.js";import{d as b,A as a,b as m,c as k,l as u,o as f,a as d,e as w,f as c,t as p,u as s,y as x,z as y,g,w as B,B as I,n as z,p as N,k as j,h as C,_ as P}from"./index-2d44d34d.js";const T=t=>(N("data-v-4bec6da5"),t=t(),j(),t),A=T(()=>c("div",{class:"divider"},null,-1)),R=b({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(t){const _=t,i=m(),h=k(()=>!!i.bgSetting.bg);let o=u("/"),n=u(""),r=u(""),l=u(-1);const e={};switch(_.area){case a.Intro:o.value+=a.Persona+"/passcode",e.headerY=.5,e.logoSize=.5,n.value=`menuju
Ruang Terang`,r.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=0;break;case a.Persona:o.value+=a.Shadow+"/passcode",n.value=`selesai
Ruang Terang`,r.value=`Ikuti jalur
berwarna Biru
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=1;break;case a.Shadow:o.value+=a.Self+"/passcode",n.value=`selesai
Ruang Bias`,r.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case a.Self:o.value+=a.Outro+"/passcode",n.value=`selesai
Ruang Cahaya`,r.value=`Ikuti jalur
berwarna Hijau di
lantai menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,l.value=2;break}return f(()=>{i.setBGSetting(e)}),(Y,V)=>(d(),w("div",{class:z({"to-area-room full-width center-col under-header":!0,dark:s(h)})},[c("p",null,p(s(n)),1),A,c("p",null,p(s(r)),1),s(l)>-1?(d(),x(v,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:s(l)},null,8,["y"])):y("",!0),g(I,{to:s(o)},{default:B(()=>[C("Sampai")]),_:1},8,["to"]),g(S)],2))}});const O=P(R,[["__scopeId","data-v-4bec6da5"]]);export{O as default};
