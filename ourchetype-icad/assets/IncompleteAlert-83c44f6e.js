import{d as p,b as d,s as m,w as i,o as a,a as t,L as r,t as _,$ as u,p as g,m as f,e as h,_ as v}from"./index-3a343bb9.js";const I=e=>(g("data-v-cf4d77a2"),e=e(),f(),e),k={class:"incomplete-alert"},S=I(()=>h("h2",{class:"alert"}," Proses belum lengkap. Coba selesaikan proses terlebih dahulu ",-1)),b={key:1,class:"message"},y=p({__name:"IncompleteAlert",props:{message:{type:String,default:""}},setup(e){const l=e,n=d(),s=m(!1);return i(()=>l.message,o=>{u(o||"<no message>",n.progress)},{immediate:!0}),(o,c)=>(a(),t("div",k,[S,e.message&&!s.value?(a(),t("a",{key:0,onClick:c[0]||(c[0]=w=>s.value=!0)},"Show details")):r("",!0),e.message&&s.value?(a(),t("pre",b,_(e.message),1)):r("",!0)]))}});const C=v(y,[["__scopeId","data-v-cf4d77a2"]]);export{C as I};
