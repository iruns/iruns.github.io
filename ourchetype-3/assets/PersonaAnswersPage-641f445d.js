import{d as E,f as i,a4 as T,o as f,c as p,b as c,g as M,u as o,w as L,W as F,X as G,F as $,m as K,a1 as H,t as k,e as Z,r as C,j as Q,U as ee,n as V,k as te,h as se,p as ae,a as ne,T as re,_ as oe}from"./base-0f655f47.js";import{r as x}from"./index-51c8f47d.js";import{S as ce,_ as le}from"./PageContainer.vue_vue_type_style_index_0_lang-4d9daac0.js";import{a as ie}from"./personaAnswerSets-ac915f33.js";import{a as j}from"./archetypes-5eb05ca8.js";import"./images-5702e0d1.js";import"./archetype-82cba3d4.js";var h=(a=>(a[a.Biasanya=0]="Biasanya",a[a.Penting=1]="Penting",a[a.Menyenangkan=2]="Menyenangkan",a[a.Krisis=3]="Krisis",a[a.TidakDitolerir=4]="TidakDitolerir",a))(h||{});const ue=[{type:h.Biasanya,x:0,y:0},{type:h.Penting,x:1,y:0},{type:h.Menyenangkan,x:0,y:1},{type:h.Krisis,x:1,y:1},{type:h.TidakDitolerir,x:0,y:2}],R={};ue.forEach(a=>R[a.type]=a);const z=[{until:5,focusBetween:12,contrastMult:-1},{until:8,focusBetween:6,contrastMult:0},{until:1/0,focusBetween:3,contrastMult:1}],q=10,fe=""+new URL("persona-answers-5f4217e2.webp",import.meta.url).href,de={class:"question-sign"},he=c("p",{class:"instruction"},k(`Lihat pertanyaan
di bentuk ini`),-1),pe={class:"shape"},ve={class:"answers"},ge=c("img",{class:"circles",src:fe},null,-1),Se={class:"texts"},_e=["onClick"],me=E({__name:"PersonaStepSet",props:{historyStep:null,idxOffset:{default:0},state:{default:"question"},onNext:{type:Function,default:()=>{}},onSelect:null,isLast:{type:Boolean,default:!1}},setup(a){const v=a,g=i(()=>R[v.historyStep.answerSet.question]),l=i(()=>T([...v.historyStep.answerSet.answers]));return(r,S)=>(f(),p("div",{class:H(["step-set",a.idxOffset?a.idxOffset==1?"next-1 question-state":a.idxOffset==-1?"prev-1 answers-state":!1:"active "+a.state+"-state",a.isLast?"last":""])},[c("div",de,[he,c("div",pe,[M(ce,{src:"persona-shapes.webp","x-sprites":2,"y-sprites":3,x:o(g).x,y:o(g).y},null,8,["x","y"])]),M(G,{class:"cta",onClick:a.onNext},{default:L(()=>[F(" Lanjut ")]),_:1},8,["onClick"])]),c("div",ve,[ge,c("div",Se,[(f(!0),p($,null,K(o(l),(A,B)=>(f(),p("div",{key:B,class:H(["answer",B%2==0?"even":"odd"])},[c("p",{onClick:_=>a.onSelect(A)},k(A.text),9,_e)],2))),128))])])],2))}});const ye=a=>(ae("data-v-a3b9bd88"),a=a(),ne(),a),we={class:"persona-answers"},xe={class:"number current"},ke={class:"number all"},Ae=ye(()=>c("p",{class:"instruction"},k(`Selesai di
Ruang Terang`),-1)),Be=E({__name:"PersonaAnswersPage",props:{stepIdx:{default:"0"},state:{default:"question"}},setup(a){const v=a,g=1.5,l=i(()=>Number.parseInt(v.stepIdx)),r=Z(),S=C(r.progress.personaHistory),A=i(()=>S.value.map(s=>s.answerSet)),B=i(()=>S.value.length?S.value[S.value.length-1].answerSet.question:null),_=i(()=>{let s=0,n=z[s];for(;l.value>n.until;)s++,n=z[s];return n}),D=i(()=>r.progress.personaScoresSum),m=C([]);for(let s=0;s<j.length;s++){const n=j[s].id;m.value.push({arch:n,score:D.value[n]||0,idx:s})}const y=i(()=>{const s=_.value.focusBetween;for(let e=0;e<m.value.length;e++){const t=m.value[e];t.score=D.value[t.arch]||0}const n=[...m.value];return n.sort((e,t)=>e.score==t.score?Math.random()-.5:e.score>t.score?-1:1),n.slice(0,s)}),O=i(()=>{let s=0;const n=y.value;for(let e=0;e<n.length;e++){const t=n[e];s+=t.score}return s/=n.length,n.filter(e=>e.score<s).sort((e,t)=>e.idx<t.idx?-1:1)}),w=i(()=>(y.value.length==m.value.length,ie.filter(n=>!(n.question==B.value||A.value.includes(n))))),d=C([]);function U(){d.value=[...w.value],_.value.contrastMult&&(_.value.contrastMult>0?d.value.sort((e,t)=>e.contrast<t.contrast?1:-1):_.value.contrastMult<0&&d.value.sort((e,t)=>e.contrast>t.contrast?1:-1));for(let e=0;e<w.value.length;e++){const t=w.value[e];t.fitness=0;for(let u=0;u<y.value.length;u++){const b=y.value[u];t.fitness+=(t.sumScores[b.arch]||0)*-b.score}}d.value.sort((e,t)=>e.fitness>t.fitness?-1:1);const s=O.value.length>1?O.value:y.value;if(s.length>1){for(let e=0;e<w.value.length;e++){const t=w.value[e];if(t.fitness=0,s.length)for(let u=0;u<s.length;u++){const b=s[u].arch,P=t.contrasts[b];if(P)for(let N=0;N<s.length;N++){const J=s[N].arch;t.fitness+=P[J]||0}}}d.value.sort((e,t)=>e.fitness>t.fitness?-1:1)}const n=d.value[0];n&&r.addPersonaStep({answerSet:n})}const I=i(()=>l.value==q+1);function W(){x.push("/area-1/answers/"+l.value+"/answers")}function X(s){r.selectPersonaAnswer(s.scores),x.push("/area-1/answers/"+(l.value+1)+"/question")}function Y(){x.push("/area-1/to-next-area")}return Q(x.currentRoute,()=>{re(()=>{const s=l.value,n=r.progress.personaHistory.length;if(s>n){const e=r.progress.personaHistory[n-1],t=!e||!!e.selectedScores;t&&U(),x.replace({name:"area-1-answers",params:{stepIdx:n+(t?1:0),state:"question"}})}else s<n&&(r.progress.personaHistory.length=s);v.state=="question"&&I.value?setTimeout(()=>{r.setBGSetting({logoSize:.5,headerY:.5})},500):r.setBGSetting({})})},{immediate:!0}),ee(()=>r.setBGSetting({})),(s,n)=>(f(),p("div",we,[c("div",{class:"steps-container",style:V({top:"-"+(o(l)-1)*g*100+"vh"})},[(f(!0),p($,null,K(o(r).progress.personaHistory,(e,t)=>(f(),p($,null,[Math.abs(o(l)-(t+1))<=1?(f(),te(me,{key:t,"history-step":e,"idx-offset":t-o(l)+1,state:a.state,"on-next":W,"on-select":X,"is-last":o(I),style:V({top:t*g*100+"vh"})},null,8,["history-step","idx-offset","state","is-last","style"])):se("",!0)],64))),256))],4),c("div",{class:H(["others",{last:o(I)}])},[c("div",xe,k(Math.min(o(l),o(q))),1),c("div",ke,"/"+k(o(q)),1),M(le,{"outer-class":{closing:!0}},{default:L(()=>[Ae,M(G,{class:"cta",onClick:Y},{default:L(()=>[F(" Lanjut ")]),_:1})]),_:1})],2)]))}});const $e=oe(Be,[["__scopeId","data-v-a3b9bd88"]]);export{$e as default};
