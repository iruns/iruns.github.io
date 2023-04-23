import{_ as f,S as w}from"./PageContainer.vue_vue_type_style_index_0_lang-75afac8b.js";import{e as x,u as y,f as l,r as i,a8 as o,a2 as B,k as p,w as _,g as a,o as g,d as u,t as h,i as I,h as N,a5 as j,a4 as z,p as C,b as M,_ as R}from"./progress-0ab57a67.js";import{n as T,r as Y}from"./index-1d20ee38.js";const m=r=>(C("data-v-6d3081b7"),r=r(),M(),r),A=m(()=>u("div",null,null,-1)),P=m(()=>u("div",{class:"divider"},null,-1)),V=x({__name:"ToNextAreaPage",setup(r){const c=y(),v=T(),S=l(()=>!!c.bgSetting.bg);let t=i(""),n=i(""),s=i(-1);const d=l(()=>Y.currentRoute.value),k=l(()=>({name:v.pageFlows[d.value.name].next.page})),e={};switch(d.value.meta.area){case o.Intro:e.headerY=.5,e.logoSize=.5,t.value=`Silakan menuju
ke tempat pembelian
tiket

HTM:
weekday 15K
weekend 20K`,n.value=`Ikuti jalur
berwarna Kuning
di lantai`,e.headerY=.5,e.logoSize=.5,s.value=0;break;case o.Persona:t.value=`Menuju
Ruang Bias`,n.value=`Ikuti jalur
berwarna Merah
di lantai`,e.headerY=.5,e.logoSize=.5,s.value=1;break;case o.Shadow:t.value=`Selesai
Ruang Bias`,n.value=`Masuk ke
Ruang Cahaya`,e.bg="dark",e.logoSize=1;break;case o.Self:t.value=`Selesai
Ruang Cahaya`,n.value=`Ikuti jalur berwarna
Biru di lantai,
menuju hasil
Ourchetype-mu`,e.headerY=.5,e.logoSize=.5,s.value=2;break}return B(()=>{c.setBGSetting(e)}),(b,F)=>(g(),p(f,{"inner-class":{"to-next-area full-width center-col under-header":!0,dark:a(S)}},{default:_(()=>[A,u("p",null,h(a(t)),1),P,u("p",null,h(a(n)),1),a(s)>-1?(g(),p(w,{key:0,class:"path",src:"paths.webp",alt:"Warna garis","x-sprites":1,y:a(s)},null,8,["y"])):I("",!0),N(z,{to:a(k),replace:""},{default:_(()=>[j("Sampai")]),_:1},8,["to"])]),_:1},8,["inner-class"]))}});const H=R(V,[["__scopeId","data-v-6d3081b7"]]);export{H as default};
