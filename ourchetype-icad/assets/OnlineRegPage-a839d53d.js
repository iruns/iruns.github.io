import{d as C,b as U,q as k,s as m,c as r,w as I,v as D,x as y,o as R,e as a,n as d,u as l,y as s,z as u,B as n,t,C as v,h as z,k as O,D as P,_ as N}from"./index-3a343bb9.js";import{_ as S}from"./PageContainer.vue_vue_type_style_index_0_lang-b830fa0b.js";import"./SpriteSheetImg-b127eb21.js";const $=["placeholder"],A={class:"error-info"},L=["placeholder"],M={class:"error-info"},T={for:"pria"},Z={for:"wanita"},j=["placeholder"],q={class:"error-info"},F={for:"bandung"},E={for:"luar"},G=["placeholder"],H={class:"error-info"},J=C({__name:"OnlineRegPage",setup(K){const p=U();k();const w=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,e=m(Object.assign({},p.regData)),f=m(!1),_=r(()=>e.value.email?w.test(e.value.email.toLowerCase()):!1),g=r(()=>e.value.name&&e.value.name.length>=3&&e.value.name.length<=20),h=r(()=>!e.value.age||typeof e.value.age=="string"?!1:!!e.value.age),V=r(()=>!!e.value.gender),b=r(()=>!!e.value.domicile),x=r(()=>e.value.info_from&&e.value.info_from.length>2),c=m(!1);I(()=>e.value,()=>{g.value&&_.value&&V.value&&h.value&&b.value&&x.value?c.value=!0:c.value=!1},{deep:!0,immediate:!0});function B(){p.submitRegForm(e.value)}return(Q,o)=>(R(),D(S,{"inner-class":{"registration full-width":!0}},{default:y(()=>[a("div",{class:d(["form",{checked:f.value}])},[a("div",{class:d(["field",{invalid:!l(g)}])},[s(a("input",{"onUpdate:modelValue":o[0]||(o[0]=i=>e.value.name=i),placeholder:l(n)("name_placeholder"),class:"text"},null,8,$),[[u,e.value.name]]),a("div",A,t(l(n)("name_error_info")),1)],2),a("div",{class:d(["field",{invalid:!l(_)}])},[s(a("input",{"onUpdate:modelValue":o[1]||(o[1]=i=>e.value.email=i),placeholder:l(n)("email_placeholder"),class:"text"},null,8,L),[[u,e.value.email]]),a("div",M,t(l(n)("email_error_info")),1)],2),a("div",{class:d(["options",{invalid:!l(V)}])},[s(a("input",{id:"pria","onUpdate:modelValue":o[2]||(o[2]=i=>e.value.gender=i),type:"radio",value:"pria"},null,512),[[v,e.value.gender]]),a("label",T,t(l(n)("gender_male")),1),s(a("input",{id:"wanita","onUpdate:modelValue":o[3]||(o[3]=i=>e.value.gender=i),type:"radio",value:"wanita"},null,512),[[v,e.value.gender]]),a("label",Z,t(l(n)("gender_female")),1)],2),a("div",{class:d(["field",{invalid:!l(h)}])},[s(a("input",{"onUpdate:modelValue":o[4]||(o[4]=i=>e.value.age=i),placeholder:l(n)("age_placeholder"),class:"text"},null,8,j),[[u,e.value.age,void 0,{number:!0}]]),a("div",q,t(l(n)("age_error_info")),1)],2),a("div",{class:d(["options",{invalid:!l(b)}])},[s(a("input",{id:"bandung","onUpdate:modelValue":o[5]||(o[5]=i=>e.value.domicile=i),type:"radio",value:"Bandung"},null,512),[[v,e.value.domicile]]),a("label",F,t(l(n)("domicile_bandung")),1),s(a("input",{id:"luar","onUpdate:modelValue":o[6]||(o[6]=i=>e.value.domicile=i),type:"radio",value:"Luar Bandung"},null,512),[[v,e.value.domicile]]),a("label",E,t(l(n)("domicile_others")),1)],2),a("div",{class:d(["field",{invalid:!l(x)}])},[s(a("input",{"onUpdate:modelValue":o[7]||(o[7]=i=>e.value.info_from=i),placeholder:l(n)("information_from_placeholder"),class:"text"},null,8,G),[[u,e.value.info_from]]),a("div",H,t(l(n)("information_from_error_info")),1)],2)],2),a("div",{onClick:o[8]||(o[8]=i=>f.value=!0)},[z(P,{disabled:!c.value,onClick:B,class:"cta",replace:""},{default:y(()=>[O(t(l(n)("continue","general")),1)]),_:1},8,["disabled"])])]),_:1}))}});const ee=N(J,[["__scopeId","data-v-2d05997c"]]);export{ee as default};