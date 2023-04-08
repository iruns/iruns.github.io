import{_ as f,S as m}from"./PageContainer.vue_vue_type_style_index_0_lang-8fb9e01d.js";import{d as b,A as a,b as k,c as x,m as u,o as w,a as d,s as p,w as _,u as t,f as i,t as g,D as B,g as y,h as I,B as j,p as N,l as P,_ as z}from"./index-7c10d1c0.js";const h=s=>(N("data-v-8d247705"),s=s(),P(),s),A=h(()=>i("div",null,null,-1)),C=h(()=>i("div",{class:"divider"},null,-1)),R=b({__name:"ToNextAreaPage",props:{area:{default:a.Persona}},setup(s){const S=s,c=k(),v=x(()=>!!c.bgSetting.bg);let n=u("/"),o=u(""),r=u(""),l=u(-1);const e={};switch(S.area){case a.Intro:n.value+=a.Persona+"/passcode",e.headerY=.5,e.logoSize=.5,o.value=`Menuju
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
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,l.value=2;break}return w(()=>{c.setBGSetting(e)}),(T,Y)=>(d(),p(f,{"inner-class":{"to-next-area full-width center-col under-header":!0,dark:t(v)}},{default:_(()=>[A,i("p",null,g(t(o)),1),C,i("p",null,g(t(r)),1),t(l)>-1?(d(),p(m,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:t(l)},null,8,["y"])):B("",!0),y(j,{to:t(n)},{default:_(()=>[I("Sampai")]),_:1},8,["to"])]),_:1},8,["inner-class"]))}});const D=z(R,[["__scopeId","data-v-8d247705"]]);export{D as default};
