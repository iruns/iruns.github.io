import{d as h,A as s,b as p,l as o,o as k,a as b,e as m,f as r,t as l,u as n,g as i,w as v,B as f,n as S,h as B,_ as P}from"./index-f3e9b7d0.js";import{L as x}from"./LogoSet-cf8903f5.js";const w={class:"chunk-1"},y={class:"chunk-2"},z=h({__name:"PasscodePage",props:{area:{default:s.Persona}},setup(g){const c=g,_=p();let t=o(),u=o(`Selamat
Datang di`),e=o(void 0),d=o(`Bacalah instruksi
di ruangan, lalu
masukkan passcode`);o("");const a={};switch(t.value="/"+c.area+"/answers",c.area){case s.Persona:t.value+="/0",a.logoBright=!0,a.logoSize=1,e.value="Ruang Terang";break;case s.Shadow:a.bg="dark",a.logoSize=1,e.value="Ruang Bias";break;case s.Self:a.bg="color",a.logoSize=1,e.value="Ruang Cahaya";break;case s.Outro:t.value="/result/{}",a.headerY=.5,a.logoSize=.5,u.value=`Masukan
passcode yang
ada di`,e.value="Ruang Hasil",d.value=`untuk melihat
hasilnya`;break}return k(()=>{_.setBGSetting(a)}),(C,N)=>(b(),m("div",{class:S({"passcode full-width center-col under-header":!0,"color-bg":a.bg=="color","dark-bg":a.bg=="dark"})},[r("p",w,l(n(u)),1),r("h1",null,l(n(e)),1),r("p",y,l(n(d)),1),i(f,{to:n(t)},{default:v(()=>[B("Lanjut")]),_:1},8,["to"]),i(x)],2))}});const V=P(z,[["__scopeId","data-v-96a18b63"]]);export{V as default};
