import{S as h,L as v}from"./LogoSet-99c38979.js";import{d as f,A as a,b as k,c as m,l as u,o as b,a as d,e as x,f as i,t as p,u as t,y as w,z as y,g,w as B,B as I,n as z,p as N,k as j,h as C,_ as P}from"./index-065fd380.js";const T=s=>(N("data-v-96da4ef2"),s=s(),j(),s),A=T(()=>i("div",{class:"divider"},null,-1)),R=f({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(s){const S=s,c=k(),_=m(()=>!!c.bgSetting.bg);let n=u("/"),o=u(""),r=u(""),l=u(-1);const e={};switch(S.area){case a.Intro:n.value+=a.Persona+"/passcode",e.headerY=.5,e.logoSize=.5,o.value=`Menuju
Ruang Terang`,r.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=0;break;case a.Persona:n.value+=a.Shadow+"/passcode",o.value=`Selesai
Ruang Terang`,r.value=`Ikuti jalur
berwarna Biru
di lantai`,e.headerY=.5,e.logoSize=.5,l.value=1;break;case a.Shadow:n.value+=a.Self+"/passcode",o.value=`Selesai
Ruang Bias`,r.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case a.Self:n.value+=a.Outro+"/passcode",o.value=`Selesai
Ruang Cahaya`,r.value=`Ikuti jalur
berwarna Hijau di
lantai menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,l.value=2;break}return b(()=>{c.setBGSetting(e)}),(Y,V)=>(d(),x("div",{class:z({"to-next-area full-width center-col under-header":!0,dark:t(_)})},[i("p",null,p(t(o)),1),A,i("p",null,p(t(r)),1),t(l)>-1?(d(),w(h,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:t(l)},null,8,["y"])):y("",!0),g(I,{to:t(n)},{default:B(()=>[C("Sampai")]),_:1},8,["to"]),g(v)],2))}});const O=P(R,[["__scopeId","data-v-96da4ef2"]]);export{O as default};
