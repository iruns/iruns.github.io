import{_ as z}from"./PageContainer.vue_vue_type_style_index_0_lang-75afac8b.js";import{I as L}from"./IncompleteAlert-a1e3d7df.js";import{e as N,u as O,f as r,a2 as V,k as G,w as R,o as l,g as e,a,d as t,t as f,n as _,F as c,q as v,l as h,h as F,a5 as X,P as Y,a4 as q,p as D,b as E,_ as M}from"./progress-0ab57a67.js";import{b as $,d as o,g as I}from"./index-0fdf0b30.js";const m=g=>(D("data-v-08656d89"),g=g(),E(),g),H={class:"text"},J=m(()=>t("span",null,f(`Silakan ambil sticker
berwarna `),-1)),K=m(()=>t("p",null,f(`dan tempelkan
pada grafik di posisi ini`),-1)),Q={class:"graph"},U=m(()=>t("div",null,null,-1)),W={key:0,class:"circle"},Z={key:1,class:"circle top"},ee=m(()=>t("div",{class:"col"},null,-1)),se=m(()=>t("div",null,null,-1)),te=N({__name:"GraphInstructionsPage",setup(g){const S=$(),j=O(),u=r(()=>S.progress.topArchetypes),y=r(()=>u.value.persona?I[u.value.persona]:null),k=r(()=>y.value?o.indexOf(y.value):0),b=r(()=>u.value.self?I[u.value.self]:null),d=r(()=>b.value?o.indexOf(b.value):0),w=r(()=>u.value.self?I[u.value.shadow]:null),C=r(()=>{const i=["1fr"];for(let n=0;n<o.length;n++)i.push(n!=d.value?"1fr":"1.5fr");return i.join(" ")}),x=r(()=>{const i=["1.2fr"];for(let n=0;n<o.length;n++)i.push(n!=k.value?"1fr":"1.5fr");return i.join(" ")});return V(()=>{j.setBGSetting({logoSize:.5,headerY:.5}),S.endRun()}),(i,n)=>(l(),G(z,{"inner-class":{"graph-instruction":!0}},{default:R(()=>{var B,P;return[!e(y)||!e(b)?(l(),G(L,{key:0})):(l(),a(c,{key:1},[t("div",H,[t("p",null,[J,t("b",null,f((B=e(w))==null?void 0:B.colorLabel),1)]),t("div",{class:"sticker",style:_({backgroundColor:(P=e(w))==null?void 0:P.color})},null,4),K]),t("div",Q,[t("div",{class:"cells",style:_({gridTemplateColumns:e(C),gridTemplateRows:e(x)})},[U,(l(!0),a(c,null,v(e(o),(p,s)=>(l(),a("div",{key:s,class:h(["self-label",{top:e(d)==s}])},f(p.labels.self.substring(0,2)),3))),128)),(l(!0),a(c,null,v(e(o),(p,s)=>(l(),a(c,{key:s},[t("div",{class:h(["persona-label",{top:e(k)==s}])},f(p.labels.persona.substring(0,2)),3),(l(!0),a(c,null,v(e(o),(le,T)=>{var A;return l(),a("div",{key:T+"-"+s,class:h({cell:!0,even:s%2==0})},[e(d)!=T||e(k)!=s?(l(),a("div",W)):(l(),a("div",Z,[t("div",{class:"stuck-sticker",style:_({backgroundColor:(A=e(w))==null?void 0:A.color})},null,4)]))],2)}),128))],64))),128))],4),t("div",{class:"cols",style:_({gridTemplateColumns:e(C)})},[ee,(l(!0),a(c,null,v(e(o),(p,s)=>(l(),a("div",{key:s,class:h({col:!0,last:s<11,top:e(d)==s||e(d)-1==s})},null,2))),128))],4),t("div",{class:"rows",style:_({gridTemplateRows:e(x)})},[se,(l(!0),a(c,null,v(e(o),(p,s)=>(l(),a("div",{key:s,class:"row"},[t("div",{class:h(["line",{top:e(k)==s}])},null,2)]))),128))],4)]),F(q,{to:{name:e(Y).OutroPasscode},replace:""},{default:R(()=>[X(" Lanjut ")]),_:1},8,["to"])],64))]}),_:1}))}});const ce=M(te,[["__scopeId","data-v-08656d89"]]);export{ce as default};
