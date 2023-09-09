import{f as z,g as o,o as f,a as p,d as r,i as P,h as l,w as b,a6 as G,a9 as E,F as N,y as j,v as $,t as M,aa as Z,ab as ee,l as se,u as te,r as B,a7 as Q,x as R,a3 as ae,n as T,s as ne,j as oe,ac as k,ad as V,ae as re,q as le,P as ce,p as ie,b as ue,_ as he}from"./index-12d5f51a.js";import{S as fe,_ as de}from"./PageContainer.vue_vue_type_style_index_0_lang-0695fc34.js";const pe=""+new URL("persona-answers-5f4217e2.webp",import.meta.url).href,ve={class:"question-sign"},Se=r("p",{class:"instruction"}," Read the question on this shape ",-1),_e={class:"shape"},ge={class:"answers"},me=r("img",{class:"circles",src:pe},null,-1),we={class:"texts"},xe=["onClick"],ye=z({__name:"PersonaStepSet",props:{historyStep:null,idxOffset:{default:0},stepState:{default:"question"},onNext:{type:Function,default:()=>{}},onSelect:null,isLast:{type:Boolean,default:!1}},setup(n){const q=n,i=o(()=>Z[q.historyStep.answerSet.question]),x=o(()=>ee([...q.historyStep.answerSet.answers]));return(u,I)=>(f(),p("div",{class:$(["step-set",n.idxOffset?n.idxOffset==1?"next-1 question-state":n.idxOffset==-1?"prev-1 answers-state":!1:"active "+n.stepState+"-state",n.isLast?"last":""])},[r("div",ve,[Se,r("div",_e,[P(fe,{src:"persona-shapes.webp","x-sprites":2,"y-sprites":3,x:l(i).x,y:l(i).y},null,8,["x","y"])]),P(E,{class:"cta",onClick:n.onNext},{default:b(()=>[G(" Continue ")]),_:1},8,["onClick"])]),r("div",ge,[me,r("div",we,[(f(!0),p(N,null,j(l(x),(c,v)=>(f(),p("div",{key:v,class:$(["answer",v%2==0?"even":"odd"])},[r("p",{onClick:S=>n.onSelect(c)},M(c.text),9,xe)],2))),128))])])],2))}});const Ae=n=>(ie("data-v-8f2e233a"),n=n(),ue(),n),Be={class:"persona-answers"},Pe={class:"number current"},qe={class:"current"},Ce={class:"all"},ke=Ae(()=>r("p",{class:"instruction"}," Finished in the Bright Room ",-1)),be=z({__name:"PersonaAnswersPage",setup(n){const i=se(),x=te(),u=B(i.progress.personaHistory),I=o(()=>{const e={};return u.value.map(a=>e[a.answerSet.id]=!0),e}),c=o(()=>u.value.length),v=o(()=>u.value[c.value-1]||null),S=B("question"),_=o(()=>S.value=="question"&&c.value==k+1),y=o(()=>{let e=0,a=V[e];for(;c.value>a.until;)e++,a=V[e];return a}),H=o(()=>i.progress.personaScoresSum),g=B([]);for(let e=0;e<Q.length;e++){const a=Q[e].id;g.value.push({arch:a,score:H.value[a]||0,idx:e})}const m=o(()=>{const e=y.value.focusBetween;for(let s=0;s<g.value.length;s++){const t=g.value[s];t.score=H.value[t.arch]||0}const a=[...g.value];return a.sort((s,t)=>s.score==t.score?Math.random()-.5:s.score>t.score?-1:1),a.slice(0,e)}),L=o(()=>{let e=0;const a=m.value;for(let s=0;s<a.length;s++){const t=a[s];e+=t.score}return e/=a.length,a.filter(s=>s.score<e).sort((s,t)=>s.idx<t.idx?-1:1)}),w=o(()=>(m.value.length==g.value.length,re.filter(a=>!(a.question==U.value||I.value[a.id])))),d=B([]);function D(){d.value=[...w.value],y.value.contrastMult&&(y.value.contrastMult>0?d.value.sort((s,t)=>s.contrast<t.contrast?1:-1):y.value.contrastMult<0&&d.value.sort((s,t)=>s.contrast>t.contrast?1:-1));for(let s=0;s<w.value.length;s++){const t=w.value[s];t.fitness=0;for(let h=0;h<m.value.length;h++){const A=m.value[h];t.fitness+=(t.sumScores[A.arch]||0)*-A.score}}d.value.sort((s,t)=>s.fitness>t.fitness?-1:1);const e=L.value.length>1?L.value:m.value;if(e.length>1){for(let s=0;s<w.value.length;s++){const t=w.value[s];if(t.fitness=0,e.length)for(let h=0;h<e.length;h++){const A=e[h].arch,O=t.contrasts[A];if(O)for(let C=0;C<e.length;C++){const X=e[C].arch;t.fitness+=O[X]||0}}}d.value.sort((s,t)=>s.fitness>t.fitness?-1:1)}const a=d.value[0];a&&i.addPersonaStep({answerSet:a})}const U=o(()=>u.value.length?u.value[u.value.length-1].answerSet.question:null),Y=o(()=>!_.value&&(!v.value||!!v.value.selectedScores));R(Y,(e,a)=>{e!=a&&e&&D()},{immediate:!0});function J(){S.value="answers"}function K(e){i.selectPersonaAnswer(e.scores),S.value="question"}function W(){i.selectPersona(),le.replace({name:ce.PersonaToSideRoom})}R(_,(e,a)=>{e!=a&&F()},{immediate:!0}),ae(()=>F(!0));function F(e=!1){_.value?setTimeout(()=>{x.setBGSetting({logoSize:.5,headerY:.5})},e?0:800):x.setBGSetting({})}return(e,a)=>(f(),p("div",Be,[r("div",{class:"steps-container",style:T({top:"-"+(l(c)-1)*1.5*100+"vh"})},[(f(!0),p(N,null,j(l(i).progress.personaHistory,(s,t)=>(f(),p(N,null,[Math.abs(l(c)-(t+1))<=1?(f(),ne(ye,{key:t,"history-step":s,"idx-offset":t-l(c)+1,"step-state":S.value,"on-next":J,"on-select":K,"is-last":l(_),style:T({top:t*1.5*100+"vh"})},null,8,["history-step","idx-offset","step-state","is-last","style"])):oe("",!0)],64))),256))],4),r("div",{class:$(["others",{last:l(_)}])},[r("div",Pe,[r("span",qe,M(Math.min(l(c),l(k))),1),r("span",Ce,"/"+M(l(k)),1)]),P(de,{"outer-class":{closing:!0}},{default:b(()=>[ke,P(E,{class:"cta",onClick:W},{default:b(()=>[G(" Continue ")]),_:1})]),_:1})],2)]))}});const Me=he(be,[["__scopeId","data-v-8f2e233a"]]);export{Me as default};
