import{d as $,e as I,f as j,Y as c,U as B,Z as g,o as S,c as w,b as r,u as s,g as n,w as o,W as a,t as d,$ as P,F as v,m as C,a0 as K,a1 as O,p as q,a as L,_ as N}from"./base-bbb4a87e.js";import{a as R}from"./archetypes-5eb05ca8.js";import{p as h}from"./passcodes-7974dc75.js";import{r as V}from"./index-dcc955c4.js";import{a as y}from"./personaAnswerSets-ac915f33.js";import"./archetype-82cba3d4.js";import"./images-5702e0d1.js";const u=m=>(q("data-v-4c9fbb06"),m=m(),L(),m),D={class:"free-menu"},G={class:"content"},H=u(()=>r("h2",null,"Intro",-1)),Q=u(()=>r("h2",null,"Persona",-1)),W=u(()=>r("h2",null,"Shadow",-1)),z=u(()=>r("h2",null,"Self",-1)),E=u(()=>r("h2",null,"Outro",-1)),T={class:"archetypes"},U={class:"part"},Y=["onClick"],Z=u(()=>r("div",{class:"spacer"},null,-1)),J=$({__name:"FreeMenuPage",setup(m){const t=I();t.setFreeMode(!0);const x=j(()=>t.progress.topArchetypes),A=[c.Persona,c.Self,c.Shadow];function f(){return g(R).id}function F(_){t.erasePersonaHistory(),t.addPersonaStep({answerSet:y[0],selectedScores:{[_]:100}})}function k(_,l){t.erasePersonaHistory();for(let e=0;e<_;e++)t.addPersonaStep({answerSet:g(y),selectedScores:{[f()]:100}});V.push({name:"area-1-answers",params:{stepIdx:_,state:l}})}return B(()=>{t.setBGSetting({}),t.setFreeMode(!0),t.addPersonaStep({answerSet:g(y),selectedScores:{[f()]:100}}),t.selectShadow(f()),t.selectSelf(f())}),(_,l)=>{const e=K("RouterLink");return S(),w("div",D,[r("div",G,[r("a",{class:"link",style:{color:"red"},onClick:l[0]||(l[0]=(...i)=>s(t).reset&&s(t).reset(...i))}," Reset Progress "),H,n(e,{class:"link",to:{name:"welcome"}},{default:o(()=>[a(" Welcome > ")]),_:1}),n(e,{class:"link",to:{name:"online-reg"}},{default:o(()=>[a(" Online Registration > ")]),_:1}),n(e,{class:"link",to:{name:"on-site-reg"}},{default:o(()=>[a(" On Site Registration > ")]),_:1}),n(e,{class:"link",to:{name:"intro-to-next-area"}},{default:o(()=>[a(" Ke Ruang Selanjutnya > ")]),_:1}),Q,n(e,{class:"link",to:{name:"area-1-passcode"}},{default:o(()=>[a(' Passcode > "'+d(s(h)[s(P).Persona])+'" ',1)]),_:1}),r("a",{class:"link",onClick:l[1]||(l[1]=i=>k(1,"question"))}," Question 1 > "),r("a",{class:"link",onClick:l[2]||(l[2]=i=>k(1,"answers"))}," Answers 1 > "),r("a",{class:"link",onClick:l[3]||(l[3]=i=>k(10,"question"))}," Question 10 > "),r("a",{class:"link",onClick:l[4]||(l[4]=i=>k(11,"question"))}," Done > "),n(e,{class:"link",to:{name:"area-1-to-next-area"}},{default:o(()=>[a(" Ke Ruang Selanjutnya > ")]),_:1}),W,n(e,{class:"link",to:{name:"area-2-passcode"}},{default:o(()=>[a(' Passcode > "'+d(s(h)[s(P).Shadow])+'" ',1)]),_:1}),n(e,{class:"link",to:{name:"area-2-answers"}},{default:o(()=>[a(" Answers > ")]),_:1}),n(e,{class:"link",to:{name:"area-2-to-next-area"}},{default:o(()=>[a(" Ke Ruang Selanjutnya > ")]),_:1}),z,n(e,{class:"link",to:{name:"area-3-passcode"}},{default:o(()=>[a(' Passcode > "'+d(s(h)[s(P).Self])+'" ',1)]),_:1}),n(e,{class:"link",to:{name:"area-3-answers"}},{default:o(()=>[a(" Answers > ")]),_:1}),n(e,{class:"link",to:{name:"area-3-to-next-area"}},{default:o(()=>[a(" Ke Ruang Selanjutnya > ")]),_:1}),E,r("div",T,[(S(),w(v,null,C(A,(i,M)=>r("div",{key:M},[a(d(i)+" ",1),r("div",U,[(S(!0),w(v,null,C(s(R),(p,b)=>(S(),w("div",{key:b,class:O({archetype:!0,active:p.id==s(x)[i]}),onClick:X=>i==s(c).Persona?F(p.id):i==s(c).Shadow?s(t).selectShadow(p.id):i==s(c).Self?s(t).selectSelf(p.id):()=>{}},d(p.id),11,Y))),128))])])),64))]),n(e,{class:"link",to:{name:"graph-instructions"}},{default:o(()=>[a(" Graph Instructions > ")]),_:1}),n(e,{class:"link",to:{name:"outro-passcode"}},{default:o(()=>[a(' Passcode > "'+d(s(h)[s(P).Outro])+'" ',1)]),_:1}),n(e,{class:"link",to:{name:"result"}},{default:o(()=>[a(" Result > ")]),_:1}),Z])])}}});const le=N(J,[["__scopeId","data-v-4c9fbb06"]]);export{le as default};
