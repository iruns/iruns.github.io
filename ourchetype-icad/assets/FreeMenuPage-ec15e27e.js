import{d as T,b as C,c as S,a as h,e as r,n as y,u as e,t as k,r as $,o as m,f as t,_ as R,g as M,P as _,h as o,F,i as N,j as s,A as w,k as j,l as D,p as O,m as K}from"./index-da2bde02.js";import{p as A}from"./passcodes-c88ca51f.js";const W={class:"free-menu-item"},B=T({__name:"FreeMenuItem",props:{route:null,text:null},setup(d){const u=d;C();const p=S(()=>t[u.route.name]),v=S(()=>p.value.meta.guards),P=S(()=>p.value.meta.flow),f=S(()=>!P.value.isDone||P.value.isDone()),c=S(()=>{var x,l;return f.value?(x=v.value)==null?void 0:x.deleteProgress:(l=v.value)==null?void 0:l.fakeProgress});function a(){$.replace({name:u.route.name})}return(x,l)=>(m(),h("div",W,[r("div",{class:y(["was-done",{done:e(f),switchable:!!e(c)}]),onClick:l[0]||(l[0]=I=>{var g;return(g=e(c))==null?void 0:g()})},null,2),r("a",{onClick:a},k(d.text),1)]))}});const n=R(B,[["__scopeId","data-v-01970088"]]),i=d=>(O("data-v-c18f2aea"),d=d(),K(),d),V={class:"free-menu"},G={class:"content"},b=i(()=>r("div",{class:"switch"},[r("div",{class:"indicator"})],-1)),z=i(()=>r("span",null,"Auto-Fake Progress",-1)),E=[b,z],H=i(()=>r("h2",null,"Intro",-1)),L=i(()=>r("h2",null,"Persona",-1)),Q=i(()=>r("h2",null,"Shadow",-1)),q=i(()=>r("h2",null,"Self",-1)),J=i(()=>r("h2",null,"Outro",-1)),U={class:"archetypes"},X={class:"part"},Y=["onClick"],Z=i(()=>r("div",{class:"spacer"},null,-1)),ee=T({__name:"FreeMenuPage",setup(d){const u=C(),p=M();p.switchFreeMode(!0);const v=S(()=>u.progress.topArchetypes),P=[_.Persona,_.Shadow,_.Self];return(f,c)=>(m(),h("div",V,[r("div",G,[r("div",{class:y(["switch-control",{on:e(p).isAutoFakingProgress}]),onClick:c[0]||(c[0]=a=>e(p).switchAutoFakingProgress())},E,2),r("a",{class:"link",style:{color:"red"},onClick:c[1]||(c[1]=(...a)=>e(u).resetAll&&e(u).resetAll(...a))}," Hapus Semua Data "),r("a",{class:"link",style:{color:"red"},onClick:c[2]||(c[2]=(...a)=>e(u).reset&&e(u).reset(...a))}," Reset Progress "),H,o(n,{route:e(t)[e(s).Welcome],text:"Welcome >"},null,8,["route"]),o(n,{route:e(t)[e(s).OnlineReg],text:"Online Registration >"},null,8,["route"]),o(n,{route:e(t)[e(s).IntroToNextArea],text:"Ke Area Selanjutnya >"},null,8,["route"]),L,o(n,{route:e(t)[e(s).PersonaSideRoomInstructions],text:"Side Instructions"},null,8,["route"]),o(n,{route:e(t)[e(s).PersonaToNextSpot],text:"Side To Next Spot"},null,8,["route"]),o(n,{route:e(t)[e(s).PersonaPasscode],text:`Passcode > [${e(A)[e(w).Persona]}]`},null,8,["route","text"]),o(n,{route:e(t)[e(s).PersonaAnswers],text:"Question 1 >"},null,8,["route"]),o(n,{route:e(t)[e(s).PersonaToNextArea],text:"Ke Area Selanjutnya >"},null,8,["route"]),Q,o(n,{route:e(t)[e(s).ShadowSideRoomInstructions],text:"Side Instructions"},null,8,["route"]),o(n,{route:e(t)[e(s).ShadowToNextSpot],text:"Side To Next Spot"},null,8,["route"]),o(n,{route:e(t)[e(s).ShadowPasscode],text:`Passcode > [${e(A)[e(w).Shadow]}]`},null,8,["route","text"]),o(n,{route:e(t)[e(s).ShadowAnswers],text:"Answers >"},null,8,["route"]),o(n,{route:e(t)[e(s).ShadowToNextArea],text:"Ke Area Selanjutnya >"},null,8,["route"]),q,o(n,{route:e(t)[e(s).SelfPasscode],text:`Passcode > [${e(A)[e(w).Self]}]`},null,8,["route","text"]),o(n,{route:e(t)[e(s).SelfAnswers],text:"Answers >"},null,8,["route"]),o(n,{route:e(t)[e(s).SelfToNextSpot],text:"Side To Next Spot"},null,8,["route"]),o(n,{route:e(t)[e(s).SelfSideRoomInstructions],text:"Side Instructions"},null,8,["route"]),o(n,{route:e(t)[e(s).SelfToNextArea],text:"Ke Area Selanjutnya >"},null,8,["route"]),J,o(n,{route:e(t)[e(s).OutroWelcome],text:"Welcome"},null,8,["route"]),r("div",U,[(m(),h(F,null,N(P,(a,x)=>r("div",{key:x},[j(k(a)+" ",1),r("div",X,[(m(!0),h(F,null,N(e(D),(l,I)=>(m(),h("div",{key:I,class:y({archetype:!0,active:l.id==e(v)[a]}),onClick:g=>a==e(_).Persona?e(u).forceTopArchProgress(e(_).Persona,l.id):a==e(_).Shadow?e(u).selectShadow(l.id):a==e(_).Self?e(u).selectSelf(l.id):()=>{}},k(l.id),11,Y))),128))])])),64))]),o(n,{route:e(t)[e(s).GraphInstructions],text:"Graph Instructions >"},null,8,["route"]),o(n,{route:e(t)[e(s).Result],text:"Result >"},null,8,["route"]),Z])]))}});const se=R(ee,[["__scopeId","data-v-c18f2aea"]]);export{se as default};
