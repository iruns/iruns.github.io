import{d as w,b as R,c as h,P as r,o as x,a as _,e as p,f as n,g as t,w as a,h as e,F as k,r as S,u as o,i as C,t as m,j as F,n as I,p as j,k as A,_ as M}from"./index-2d44d34d.js";import{e as B}from"./utils-e1ad973d.js";const d=u=>(j("data-v-08560b43"),u=u(),A(),u),K={class:"free-menu full"},L={class:"content"},N=d(()=>n("h2",null,"Intro",-1)),O=d(()=>n("h2",null,"Persona",-1)),V=d(()=>n("h2",null,"Shadow",-1)),b=d(()=>n("h2",null,"Self",-1)),G=d(()=>n("h2",null,"Outro",-1)),z={class:"archetypes"},D={class:"part"},E=["onClick"],H=w({__name:"FreeMenuPage",setup(u){const l=R();l.setFreeMode(!0);const f=h(()=>l.state.top_archetypes),y=[r.Persona,r.Self,r.Shadow],g=h(()=>B(f.value));return x(()=>{l.setBGSetting({})}),(T,W)=>{const s=C("RouterLink");return _(),p("div",K,[n("div",L,[N,t(s,{class:"link",to:"/"},{default:a(()=>[e("Welcome >")]),_:1}),t(s,{class:"link",to:"/online-reg"},{default:a(()=>[e(" Online Registration > ")]),_:1}),t(s,{class:"link",to:"/on-site-reg"},{default:a(()=>[e(" On Site Registration > ")]),_:1}),t(s,{class:"link",to:"/intro/to-area-room"},{default:a(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),O,t(s,{class:"link",to:"/area-1/passcode"},{default:a(()=>[e(" Passcode > ")]),_:1}),t(s,{class:"link",to:"/area-1/answers/0"},{default:a(()=>[e(" Answers > ")]),_:1}),t(s,{class:"link",to:"/area-1/to-area-room"},{default:a(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),V,t(s,{class:"link",to:"/area-2/passcode"},{default:a(()=>[e(" Passcode > ")]),_:1}),t(s,{class:"link",to:"/area-2/answers"},{default:a(()=>[e(" Answers > ")]),_:1}),t(s,{class:"link",to:"/area-2/to-area-room"},{default:a(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),b,t(s,{class:"link",to:"/area-3/passcode"},{default:a(()=>[e(" Passcode > ")]),_:1}),t(s,{class:"link",to:"/area-3/answers"},{default:a(()=>[e(" Answers > ")]),_:1}),t(s,{class:"link",to:"/area-3/to-area-room"},{default:a(()=>[e(" Ke Ruang Selanjutnya > ")]),_:1}),G,t(s,{class:"link",to:"/outro/passcode"},{default:a(()=>[e(" Passcode > ")]),_:1}),n("div",z,[(_(),p(k,null,S(y,(c,P)=>n("div",{key:P},[e(m(c)+" ",1),n("div",D,[(_(!0),p(k,null,S(o(F),(i,v)=>(_(),p("div",{key:v,class:I({archetype:!0,active:i.id==o(f)[c]}),onClick:$=>c==o(r).Persona?o(l).selectPersona({[i.id]:1},!0):c==o(r).Shadow?o(l).selectShadow(i.id):c==o(r).Self?o(l).selectSelf(i.id):()=>{}},m(i.id),11,E))),128))])])),64))]),t(s,{class:"link",to:"/graph-instructions"},{default:a(()=>[e(" Graph Instructions > ")]),_:1}),t(s,{class:"link",to:"/result"},{default:a(()=>[e(" Result > ")]),_:1}),t(s,{class:"link",to:"/result-share/"+o(g)},{default:a(()=>[e(" Share > ")]),_:1},8,["to"])])])}}});const Q=M(H,[["__scopeId","data-v-08560b43"]]);export{Q as default};
