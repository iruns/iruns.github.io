import{d as x,b as A,c as y,P as r,o as R,a as p,e as f,f as o,g as a,w as t,h as e,t as c,u as n,A as h,F as g,r as w,i as C,j as F,k as I,n as j,p as M,l as B,_ as K}from"./index-9d99deac.js";import{p as k}from"./passcodes-912a88f1.js";const i=_=>(M("data-v-59b3c7e8"),_=_(),B(),_),O={class:"free-menu full"},q={class:"content"},L=i(()=>o("h2",null,"Intro",-1)),N=i(()=>o("h2",null,"Persona",-1)),V=i(()=>o("h2",null,"Shadow",-1)),b=i(()=>o("h2",null,"Self",-1)),D=i(()=>o("h2",null,"Outro",-1)),G={class:"archetypes"},z={class:"part"},E=["onClick"],T=i(()=>o("div",{class:"spacer"},null,-1)),W=x({__name:"FreeMenuPage",setup(_){const l=A();l.setFreeMode(!0);const S=y(()=>l.progress.top_archetypes),P=[r.Persona,r.Self,r.Shadow];return y(()=>C(S.value)),R(()=>{l.setBGSetting({})}),($,H)=>{const s=F("RouterLink");return p(),f("div",O,[o("div",q,[L,a(s,{class:"link",to:"/"},{default:t(()=>[e("Welcome >")]),_:1}),a(s,{class:"link",to:"/online-reg"},{default:t(()=>[e(" Online Registration > ")]),_:1}),a(s,{class:"link",to:"/on-site-reg"},{default:t(()=>[e(" On Site Registration > ")]),_:1}),a(s,{class:"link",to:"/intro/to-next-area"},{default:t(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),N,a(s,{class:"link",to:"/area-1/passcode"},{default:t(()=>[e(' Passcode > "'+c(n(k)[n(h).Persona])+'" ',1)]),_:1}),a(s,{class:"link",to:"/area-1/answers/0/question-step"},{default:t(()=>[e(" Answers 1 > ")]),_:1}),a(s,{class:"link",to:"/area-1/answers/9/question-step"},{default:t(()=>[e(" Answers 10 > ")]),_:1}),a(s,{class:"link",to:"/area-1/answers/10/question-step"},{default:t(()=>[e(" Answers Done > ")]),_:1}),a(s,{class:"link",to:"/area-1/to-next-area"},{default:t(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),V,a(s,{class:"link",to:"/area-2/passcode"},{default:t(()=>[e(' Passcode > "'+c(n(k)[n(h).Shadow])+'" ',1)]),_:1}),a(s,{class:"link",to:"/area-2/answers"},{default:t(()=>[e(" Answers > ")]),_:1}),a(s,{class:"link",to:"/area-2/to-next-area"},{default:t(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),b,a(s,{class:"link",to:"/area-3/passcode"},{default:t(()=>[e(' Passcode > "'+c(n(k)[n(h).Self])+'" ',1)]),_:1}),a(s,{class:"link",to:"/area-3/answers"},{default:t(()=>[e(" Answers > ")]),_:1}),a(s,{class:"link",to:"/area-3/to-next-area"},{default:t(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),D,o("div",G,[(p(),f(g,null,w(P,(d,v)=>o("div",{key:v},[e(c(d)+" ",1),o("div",z,[(p(!0),f(g,null,w(n(I),(u,m)=>(p(),f("div",{key:m,class:j({archetype:!0,active:u.id==n(S)[d]}),onClick:J=>d==n(r).Persona?n(l).selectPersona({[u.id]:1},!0):d==n(r).Shadow?n(l).selectShadow(u.id):d==n(r).Self?n(l).selectSelf(u.id):()=>{}},c(u.id),11,E))),128))])])),64))]),a(s,{class:"link",to:"/graph-instructions"},{default:t(()=>[e(" Graph Instructions > ")]),_:1}),a(s,{class:"link",to:"/outro/passcode"},{default:t(()=>[e(' Passcode > "'+c(n(k)[n(h).Outro])+'" ',1)]),_:1}),a(s,{class:"link",to:"/result"},{default:t(()=>[e(" Result > ")]),_:1}),T])])}}});const X=K(W,[["__scopeId","data-v-59b3c7e8"]]);export{X as default};