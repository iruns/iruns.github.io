import{b as v,P as r,a as P}from"./base-5035abb8.js";import{d as S,c as x,o as i,a as d,b as o,e as t,w as a,f as e,F as h,r as f,g as C,t as k,u as _,n as I,p as R,h as A,_ as F}from"./index-2ea636ac.js";const n=l=>(R("data-v-dedeaa72"),l=l(),A(),l),M={class:"free-menu"},j={class:"content"},B=n(()=>o("h2",null,"Intro",-1)),K=n(()=>o("h2",null,"Persona",-1)),L=n(()=>o("h2",null,"Shadow",-1)),N=n(()=>o("h2",null,"Self",-1)),O=n(()=>o("h2",null,"Outro",-1)),V={class:"archetypes"},b={class:"part"},E=["onClick"],z=S({__name:"FreeMenuPage",setup(l){const u=v();u.setFreeMode(!0);const m=x(()=>u.state.top_archetypes),g=[r.persona,r.self,r.shadow];return(D,G)=>{const s=C("RouterLink");return i(),d("div",M,[o("div",j,[B,t(s,{class:"link",to:"/"},{default:a(()=>[e("Welcome >")]),_:1}),t(s,{class:"link",to:"/online-reg"},{default:a(()=>[e(" Online Registration > ")]),_:1}),t(s,{class:"link",to:"/on-site-reg"},{default:a(()=>[e(" On Site Registration > ")]),_:1}),K,t(s,{class:"link",to:"/persona/passcode"},{default:a(()=>[e(" Passcode > ")]),_:1}),t(s,{class:"link",to:"/persona/answers/0"},{default:a(()=>[e(" Answers > ")]),_:1}),t(s,{class:"link",to:"/persona/to-next-room"},{default:a(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),L,t(s,{class:"link",to:"/shadow/passcode"},{default:a(()=>[e(" Passcode > ")]),_:1}),t(s,{class:"link",to:"/shadow/answers"},{default:a(()=>[e(" Answers > ")]),_:1}),t(s,{class:"link",to:"/shadow/to-next-room"},{default:a(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),N,t(s,{class:"link",to:"/self/passcode"},{default:a(()=>[e(" Passcode > ")]),_:1}),t(s,{class:"link",to:"/self/initial-split"},{default:a(()=>[e(" Initial Split > ")]),_:1}),t(s,{class:"link",to:"/self/answers"},{default:a(()=>[e(" Answers > ")]),_:1}),t(s,{class:"link",to:"/self/to-next-room"},{default:a(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),O,o("div",V,[(i(),d(h,null,f(g,(c,y)=>o("div",{key:y},[e(k(c)+" ",1),o("div",b,[(i(!0),d(h,null,f(_(P),(p,w)=>(i(),d("div",{key:w,class:I({archetype:!0,active:p.id==_(m)[c]}),onClick:T=>_(u).submitAction({changes:{[c]:{[p.id]:1}},resetPersonas:c==_(r).persona})},k(p.id),11,E))),128))])])),64))]),t(s,{class:"link",to:"/graph-instructions/{}"},{default:a(()=>[e(" Graph Instructions > ")]),_:1}),t(s,{class:"link",to:"/end-conclusion/{}"},{default:a(()=>[e(" End Conclusion > ")]),_:1})])])}}});const q=F(z,[["__scopeId","data-v-dedeaa72"]]);export{q as default};
