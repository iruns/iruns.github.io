import{f as F,m as C,g as P,a as h,d as a,v as w,h as e,t as R,q as $,o as g,_ as T,l as K,u as B,a2 as p,a3 as O,i as t,F as A,y as I,a4 as o,P as s,a5 as f,a6 as D,a7 as N,p as b,b as j}from"./index-12d5f51a.js";import{p as m}from"./passcodes-35af4e5e.js";const G={class:"free-menu-item"},V=F({__name:"FreeMenuItem",props:{route:null,text:null},setup(c){const u=c,v=C(),d=P(()=>v.pageFlows[u.route.name]),x=P(()=>d.value.wasDone()),S=P(()=>x.value?d.value.deleteProgress:d.value.fakeProgress);function y(){$.replace({name:u.route.name})}return(_,r)=>(g(),h("div",G,[a("div",{class:w(["was-done",{done:e(x),switchable:!!e(S)}]),onClick:r[0]||(r[0]=k=>{var l;return(l=e(S))==null?void 0:l()})},null,2),a("a",{onClick:y},R(c.text),1)]))}});const n=T(V,[["__scopeId","data-v-61fe4c2c"]]),i=c=>(b("data-v-6afa34f1"),c=c(),j(),c),W={class:"free-menu"},q={class:"content"},z=i(()=>a("div",{class:"switch"},[a("div",{class:"indicator"})],-1)),E=i(()=>a("span",null,"Auto-Fake Progress",-1)),H=[z,E],L=i(()=>a("h2",null,"Intro",-1)),Q=i(()=>a("h2",null,"Persona",-1)),J=i(()=>a("h2",null,"Shadow",-1)),U=i(()=>a("h2",null,"Self",-1)),X=i(()=>a("h2",null,"Outro",-1)),Y={class:"archetypes"},Z={class:"part"},ee=["onClick"],te=i(()=>a("div",{class:"spacer"},null,-1)),oe=F({__name:"FreeMenuPage",setup(c){const u=K(),v=B(),d=C();d.switchFreeMode(!0);const x=P(()=>u.progress.topArchetypes),S=[p.Persona,p.Shadow,p.Self];return O(()=>{v.setBGSetting({})}),(y,_)=>(g(),h("div",W,[a("div",q,[a("div",{class:w(["switch-control",{on:e(d).isAutoFakingProgress}]),onClick:_[0]||(_[0]=r=>e(d).switchAutoFakingProgress())},H,2),a("a",{class:"link",style:{color:"red"},onClick:_[1]||(_[1]=(...r)=>e(u).resetAll&&e(u).resetAll(...r))}," Hapus Semua Data "),a("a",{class:"link",style:{color:"red"},onClick:_[2]||(_[2]=(...r)=>e(u).reset&&e(u).reset(...r))}," Reset Progress "),L,t(n,{route:e(o)[e(s).Welcome],text:"Welcome >"},null,8,["route"]),t(n,{route:e(o)[e(s).OnlineReg],text:"Online Registration >"},null,8,["route"]),t(n,{route:e(o)[e(s).OnSiteReg],text:"Ke Pembelian Tiket >"},null,8,["route"]),t(n,{route:e(o)[e(s).IntroToSideRoom],text:"Ke Ruang Citra >"},null,8,["route"]),t(n,{route:e(o)[e(s).IntroToNextArea],text:"Ke Ruang Persona >"},null,8,["route"]),Q,t(n,{route:e(o)[e(s).PersonaPasscode],text:`Passcode > [${e(m)[e(f).Persona]}]`},null,8,["route","text"]),t(n,{route:e(o)[e(s).PersonaAnswers],text:"Question 1 >"},null,8,["route"]),t(n,{route:e(o)[e(s).PersonaToSideRoom],text:"Ke Ruang Resah >"},null,8,["route"]),J,t(n,{route:e(o)[e(s).ShadowInSideRoom],text:"Di Ruang Resah >"},null,8,["route"]),t(n,{route:e(o)[e(s).ShadowToMainRoom],text:"Ke Ruang Bias >"},null,8,["route"]),t(n,{route:e(o)[e(s).ShadowPasscode],text:`Passcode > [${e(m)[e(f).Shadow]}]`},null,8,["route","text"]),t(n,{route:e(o)[e(s).ShadowAnswers],text:"Answers >"},null,8,["route"]),t(n,{route:e(o)[e(s).ShadowToNextArea],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),U,t(n,{route:e(o)[e(s).SelfPasscode],text:`Passcode > [${e(m)[e(f).Self]}]`},null,8,["route","text"]),t(n,{route:e(o)[e(s).SelfAnswers],text:"Answers >"},null,8,["route"]),t(n,{route:e(o)[e(s).SelfToSideRoom],text:"Ke Ruang Berbagi >"},null,8,["route"]),t(n,{route:e(o)[e(s).SelfInSideRoom],text:"Di Ruang Berbagi >"},null,8,["route"]),t(n,{route:e(o)[e(s).SelfToNextArea],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),X,a("div",Y,[(g(),h(A,null,I(S,(r,k)=>a("div",{key:k},[D(R(r)+" ",1),a("div",Z,[(g(!0),h(A,null,I(e(N),(l,M)=>(g(),h("div",{key:M,class:w({archetype:!0,active:l.id==e(x)[r]}),onClick:se=>r==e(p).Persona?e(u).forceTopArchProgress(e(p).Persona,l.id):r==e(p).Shadow?e(u).selectShadow(l.id):r==e(p).Self?e(u).selectSelf(l.id):()=>{}},R(l.id),11,ee))),128))])])),64))]),t(n,{route:e(o)[e(s).GraphInstructions],text:"Graph Instructions >"},null,8,["route"]),t(n,{route:e(o)[e(s).OutroPasscode],text:`Passcode > [${e(m)[e(f).Outro]}]`},null,8,["route","text"]),t(n,{route:e(o)[e(s).Result],text:"Result >"},null,8,["route"]),te])]))}});const re=T(oe,[["__scopeId","data-v-6afa34f1"]]);export{re as default};
