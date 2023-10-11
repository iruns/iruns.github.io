import{d as Te,b as De,E as Me,c as b,s,I as Ne,T as Pe,w as We,v as Se,x as Ie,o as T,e,u as l,a as F,U as ze,t as o,B as C,K as p,h as P,k as Fe,D as Ve,F as Ce,i as Ue,n as He,S as te,V as Ke,W as Ye,Q as ne,X as je,Y as Oe,p as Je,m as Ge,Z as qe,$ as $e,_ as Ze}from"./index-da2bde02.js";import{_ as Qe,L as Xe}from"./PageContainer.vue_vue_type_style_index_0_lang-fe03d0cf.js";import{S as U}from"./SpriteSheetImg-82df203c.js";import{I as el}from"./IncompleteAlert-ff786557.js";const ll=""+new URL("shadow-orbit-903cdd91.webp",import.meta.url).href,al={normal:"source-over",multiply:"multiply",screen:"screen",overlay:"overlay",darken:"darken",lighten:"lighten","color-dodge":"color-dodge","color-burn":"color-burn","hard-light":"hard-light","soft-light":"soft-light",difference:"difference",exclusion:"exclusion",hue:"hue",saturation:"saturation",color:"color",luminosity:"luminosity"};function r(i,D,g=1,x,v){const L=D.getBoundingClientRect(),_=L.x*g,c=L.y*g,M=L.width*g,W=L.height*g,{style:f,innerText:u}=D,V=f.filter;V&&(i.filter=V);const H=al[f.mixBlendMode]||"source-over";i.globalCompositeOperation=H;let y;switch(D.tagName){case"IMG":if(y=D,M!=null&&W!=null)if(x){const d=x.container.getBoundingClientRect(),E=d.x*g,h=d.y*g,m=d.width*g,N=d.height*g,A=y.naturalWidth/x.xSprites,B=y.naturalHeight/x.ySprites;i.drawImage(y,x.x*A,x.y*B,A,B,E,h,m,N)}else i.drawImage(y,_,c,M,W);else i.drawImage(y,_,c);break;case"DIV":f.backgroundColor&&(i.fillStyle=f.backgroundColor,i.fillRect(_,c,M,W),i.fillStyle="none");break}if(u&&u.length){i.fillStyle=f.color;let d=f.fontSize||"16px";const[,E,h]=d.match(/^([\d.]+)(\D+)$/);let m=Number(E)*g;h=="rem"&&(m*=16);const N=((v==null?void 0:v.y)||0)*m;d=m+"px";const A=[f.fontStyle,f.fontVariant,f.fontWeight,d,f.fontFamily];i.font=A.filter(B=>!!B).join(" "),i.textAlign=f.textAlign||"left",i.fillText(u,_,c+m+N,M),i.fillStyle="none"}i.filter="none",i.globalCompositeOperation="source-over"}const Le={Ev:[{label:"Erasmus Huis"},{label:"Makmur Djaja"},{label:"Sabiq Hibatulbaqi"},{label:"Sight at Site"},{label:"Ari Puguh"},{label:"Theyvapaalan S Jayaratnam"}],Ru:[{label:"British Council"},{label:"Museum Benda"},{label:"Rima Aisha & Aditya Suwito"}],He:[{label:"IDDC"},{label:"Fadrié"},{label:"Ivonne Kani"}],Ma:[{label:"Japan Foundation"},{label:"Habitat Design Group"},{label:"ōd architecture studio x MYCL-Mycotech Lab"},{label:"Ourchetype"},{label:"Mater Design Lab"},{label:"Tujusemesta x MOTIONBEAST"}],Cr:[{label:"Alex Abbad x VIRO"},{label:"Octo Cornelius"},{label:"Sasanti Puri Ardini"},{label:"Kancata"},{label:"Otak Atik Kotak"}],Re:[{label:"Galih Johar"},{label:"Alfaz Syam"},{label:"No-To-Scale* x Mebelle"},{label:"Adhi Nugraha"},{label:"Mit Jai Inn"},{label:"Ramadhan Bouquie"}],In:[{label:"Indra Dodi"},{label:"Widi Pangestu"},{label:"Nidiya Kusmaya"},{label:"Jalanpulang"},{label:"Mahaputra Vito"}],Ex:[{label:"Rara Sekar"},{label:"Conture Concrete Lab"},{label:"Arum Larasati Winarso, Austera Premakara, Dearista Nooria Kusuma"},{label:"Lee Mok Yee"}],En:[{label:"Naufal Abshar"},{label:"Ressa Rizky Mutiara"},{label:"Studio Pancaroba"},{label:"SZKUTY"},{label:"Benyamin Suaeb"}],Sa:[{label:"Parti Gastronomi"},{label:"Eames Demetrios"},{label:"Entang Wiharso"},{label:"Irene Agrivina"},{label:"Reza Kutjh"},{label:"Forrest Wong"}],Lo:[{label:"Aldri Indrayana"},{label:"Adin Ibrahim x Asmara Abigail"},{label:"Sinta Tantra"},{label:"Veronica Ajeng Larasati"}],Ca:[{label:"Arahmaiani"},{label:"Meita Meilita"}]},oe=i=>(Je("data-v-f7cdaa56"),i=i(),Ge(),i),sl={class:"canvas-container"},tl={class:"intro"},nl={class:"labels"},ol={class:"label-container"},rl=["src"],il={class:"label-container"},cl=["src"],ul={class:"picture"},dl=["src","alt"],fl=["src","alt"],pl=["alt"],vl={class:"parts"},ml={class:"text"},gl={class:"part-container"},yl={class:"part"},bl={class:"part-container"},hl={class:"part-container"},_l={class:"info hidden-info"},El=oe(()=>e("div",{class:"spacer"},null,-1)),wl={class:"info"},kl={class:"descriptions"},xl={class:"description"},Sl={class:"description"},Il=oe(()=>e("div",{class:"bg-part ring-1"},[e("img",{src:qe})],-1)),Cl={class:"description"},Ll=oe(()=>e("div",{class:"bg-part ring-0"},[e("img",{src:$e})],-1)),Al={class:"result-items"},Bl={class:"result-items-logos"},Rl={class:"container"},Tl=["src"],Dl=Te({__name:"ResultPage",setup(i){const D="./imgs",g=De(),x=Me(),v=b(()=>x.lang),L=b(()=>g.regData.name),_=b(()=>g.progress.topArchetypes),c=b(()=>_.value.persona?te[_.value.persona]:null),M=b(()=>c.value?Ke[c.value.id]:null),W=b(()=>c.value?Ye[c.value.id]:null),f=b(()=>{var n;return ne[((n=c.value)==null?void 0:n.id)||"Ev"]}),u=b(()=>_.value.self?te[_.value.self]:null),V=b(()=>u.value?je[u.value.id]:null),H=b(()=>u.value?Oe[u.value.id]:null),y=b(()=>{var n;return ne[((n=u.value)==null?void 0:n.id)||"Ev"]}),d=b(()=>_.value.shadow?te[_.value.shadow]:null),E=b(()=>{var n;return ne[((n=d.value)==null?void 0:n.id)||"Ev"]}),h=s({fontSize:"0.8rem",fontWeight:"bold",color:"black",fontFamily:"Nanum Myeongjo, serif"}),m=s({fontSize:"0.8rem",color:"black",fontFamily:"Poppins, sans-serif"}),N=s(null),A=s(null),B=s(""),K=s(null),re=s(null),ie=s(null),Y=s(null),j=s(null),ce=s(null),O=s(null),J=s(null),ue=s(null),G=s(null),q=s(null),$=s(null),de=s(null),fe=s(null),Z=s(null),Q=s(null),X=s(null),ee=s(null),le=s(null),pe=s(null),ve=s(null),me=s(null),ge=s(null),ye=s(null),be=s(null),he=s(null),_e=s(null),Ee=s(null),we=s(null),ae=s(null),se=s(!1);Ne(()=>{Pe(()=>{var w,a,k,S;$.value=((w=q.value)==null?void 0:w.getElementsByTagName("img")[0])||null,ee.value=((a=Z.value)==null?void 0:a.getElementsByTagName("img")[0])||null,le.value=((k=Q.value)==null?void 0:k.getElementsByTagName("img")[0])||null,pe.value=((S=X.value)==null?void 0:S.getElementsByTagName("img")[0])||null,ae.value=document.getElementsByClassName("info-logo-set")[0].getElementsByTagName("img")[0]||null;const n=[K.value,Y.value,j.value,O.value,J.value,G.value,$.value,ee.value,le.value,ae.value],t=setInterval(()=>{for(let I=0;I<n.length;I++){const R=n[I];R!=null&&R.complete&&R.naturalHeight&&(n.splice(I,1),I--)}n.length||(clearInterval(t),se.value=!0)},1e3)})}),We(se,(n,t)=>{!t&&n&&(Ae(),ue.value.style.animationDuration="10s",Be())});function Ae(){const n=A.value,t=n.getContext("2d"),w=N.value.getBoundingClientRect().width,a=n.clientWidth/w;t&&(t.fillStyle="#ffffff",t.fillRect(0,0,n.clientWidth,n.clientHeight),r(t,K.value,a),r(t,re.value,a,void 0,{x:0,y:.1}),r(t,ie.value,a),r(t,Y.value,a),r(t,j.value,a),r(t,ce.value,a),r(t,O.value,a),r(t,J.value,a),r(t,G.value,a),r(t,$.value,a,{container:q.value,xSprites:3,ySprites:4,x:E.value.x,y:E.value.y}),r(t,de.value,a),r(t,fe.value,a),r(t,ee.value,a,{container:Z.value,xSprites:3,ySprites:4,x:f.value.x,y:f.value.y}),r(t,le.value,a,{container:Q.value,xSprites:3,ySprites:4,x:y.value.x,y:y.value.y}),r(t,pe.value,a,{container:X.value,xSprites:3,ySprites:4,x:y.value.x,y:y.value.y}),r(t,ve.value,a),r(t,me.value,a),r(t,ge.value,a),r(t,ye.value,a),r(t,be.value,a),r(t,he.value,a),r(t,_e.value,a),r(t,Ee.value,a),r(t,we.value,a),r(t,ae.value,a),B.value=n.toDataURL("image/png;base64"))}const ke=s([]);function Be(){const n=ke.value;c.value&&n.push(...Le[c.value.id]),u.value&&c.value!=u.value&&n.push(...Le[u.value.id]),n.sort((a,k)=>a.label>k.label?1:-1);const t=D+"/result-items/";for(let a=0;a<n.length;a++){const k=n[a],S=t+k.label+".webp";var w=new Image;w.onload=()=>{k.imgUrl=S},w.src=S}}return(n,t)=>(T(),Se(Qe,{"inner-class":{result:!0}},{default:Ie(()=>{var w,a,k,S,I,R,xe;return[e("div",{ref_key:"widthEl",ref:N,style:{width:"100vw"}},null,512),!l(L)||!l(c)||!l(u)||!l(d)?(T(),Se(el,{key:0,message:JSON.stringify({name:l(L),persona:l(c),self:l(u),shadow:l(d)},null,2)},null,8,["message"])):(T(),F(Ce,{key:1},[e("div",sl,[e("canvas",{ref_key:"canvasEl",ref:A,width:1080,height:1920},null,512)]),e("img",{ref_key:"logoEl",ref:K,class:"logo",src:ze,style:{filter:"brightness(0)"}},null,512),e("p",tl,[e("span",{ref_key:"nameEl",ref:re,class:"name",style:{color:"black",fontFamily:"Poppins",fontWeight:"bold",fontSize:"1rem"}},o(l(g).regData.name)+"'s ",513),e("span",{ref_key:"todayEl",ref:ie,style:{color:"black",fontFamily:"Marcellus",fontSize:"1rem"}},o(l(C)("intro")),513)]),e("div",nl,[e("div",ol,[e("img",{ref_key:"personaTextEl",ref:Y,src:l(W)},null,8,rl)]),e("div",il,[e("img",{ref_key:"selfTextEl",ref:j,src:l(H)},null,8,cl)]),e("div",{ref_key:"screenEl",ref:ce,class:"screen",style:p({backgroundColor:l(u).color.hex,mixBlendMode:"lighten"})},null,4)]),e("div",ul,[e("img",{ref_key:"selfEl",ref:O,class:"part-large self",src:l(V),alt:(w=l(u))==null?void 0:w.labels.root},null,8,dl),e("img",{ref_key:"personaEl",ref:J,class:"part-large persona",src:l(M),alt:(a=l(c))==null?void 0:a.labels.root},null,8,fl),e("div",{ref_key:"shadowEl",ref:ue,class:"part-large shadow"},[e("img",{ref_key:"shadowOrbitEl",ref:G,class:"shadow-orbit",src:ll,alt:(k=l(d))==null?void 0:k.labels.root},null,8,pl),e("div",{ref_key:"shadowIconEl",ref:q,class:"shadow-icon"},[P(U,{src:"shadow-icons.webp",alt:(S=l(d))==null?void 0:S.labels.root,"x-sprites":3,"y-sprites":4,x:l(E).x,y:l(E).y},null,8,["alt","x","y"])],512)],512)]),e("div",vl,[e("div",ml,[e("p",{ref_key:"fusion1El",ref:de,style:p(h.value)},o(l(C)("fusion1")),5),e("p",{ref_key:"fusion2El",ref:fe,style:p(h.value)},o(l(C)("fusion2")),5)]),e("div",gl,[e("span",{ref_key:"part3PartLabelEl",ref:he,style:p(h.value)}," (shadow) ",4),e("div",yl,[e("div",{ref_key:"part3El",ref:X,class:"shadow-part"},[P(U,{src:"shadow-icons.webp",alt:"Element 3","x-sprites":3,"y-sprites":4,x:l(E).x,y:l(E).y},null,8,["x","y"])],512)]),e("span",{ref_key:"part3LabelEl",ref:ge,style:p(h.value)},o(((I=l(d))==null?void 0:I.details[l(v)].shadow.label)||""),5)]),e("div",bl,[e("span",{ref_key:"part1PartLabelEl",ref:ye,style:p(h.value)}," (persona) ",4),e("div",{ref_key:"part1El",ref:Z,class:"part"},[P(U,{src:"elements-small.webp",alt:"Element 1","x-sprites":3,"y-sprites":4,x:l(f).x,y:l(f).y},null,8,["x","y"])],512),e("span",{ref_key:"part1LabelEl",ref:ve,style:p(h.value)},o(((R=l(c))==null?void 0:R.labels.root)||""),5)]),e("div",hl,[e("span",{ref_key:"part2PartLabelEl",ref:be,style:p(h.value)}," (self) ",4),e("div",{ref_key:"part2El",ref:Q,class:"part"},[P(U,{src:"elements-small.webp",alt:"Element 2","x-sprites":3,"y-sprites":4,x:l(y).x,y:l(y).y},null,8,["x","y"])],512),e("span",{ref_key:"part2LabelEl",ref:me,style:p(h.value)},o(((xe=l(u))==null?void 0:xe.labels.root)||""),5)])]),e("div",_l,[e("p",{ref_key:"info1El",ref:_e,style:p([m.value,{"margin-top":"0.6rem"}])}," Indonesian Contemporary Art & Design (ICAD) ",4),e("p",{ref_key:"info2El",ref:Ee,style:p([m.value,{"font-weight":"bold"}])},o(l(C)("date")),5),e("p",{ref_key:"info3El",ref:we,style:p(m.value)},o(l(C)("place")),5),P(Xe,{class:"info-logo-set",style:{"margin-top":"0.2rem"}})]),P(Ve,{class:"cta",disabled:!se.value,download:"Ourchetype.png",href:B.value},{default:Ie(()=>[Fe(" Share ")]),_:1},8,["disabled","download","href"]),El,e("div",wl,[e("p",{style:p([m.value,{"font-size":"1rem","font-weight":"bold"}])}," Exhibition ",4),e("p",{style:p(m.value)}," Indonesian Contemporary Art & Design (ICAD) ",4),e("p",{style:p([m.value,{"font-weight":"bold"}])},o(l(C)("date")),5),e("p",{style:p(m.value)},o(l(C)("place")),5)]),e("div",kl,[e("div",xl,[e("h2",null,o(l(v)=="eng"?"Your":"")+" Persona "+o(l(v)=="ina"?"-mu":""),1),e("h3",null,o(l(c).labels.root+" Archetype"),1),e("p",null,o(l(c).details[l(v)].persona.description),1)]),e("div",Sl,[Il,e("h2",null,o(l(v)=="eng"?"Your":"")+" Shadow "+o(l(v)=="ina"?"-mu":""),1),e("h3",null,o(l(d).details[l(v)].shadow.label),1),e("p",null,o(l(d).details[l(v)].shadow.description),1)]),e("div",Cl,[Ll,e("h2",null,o(l(v)=="eng"?"Your":"")+" Self "+o(l(v)=="ina"?"-mu":""),1),e("h3",null,o(l(u).labels.root+" Archetype"),1),e("p",null,o(l(u).details[l(v)].self.description),1)])]),e("div",Al,[e("h2",null,o(l(C)("items_intro")),1),e("div",Bl,[(T(!0),F(Ce,null,Ue(ke.value,(z,Re)=>(T(),F("figure",{key:Re,class:"result-item"},[e("div",Rl,[z.imgUrl?(T(),F("img",{key:0,src:z.imgUrl},null,8,Tl)):(T(),F("div",{key:1,class:He(["label",{small:z.maxWordLength>=10}])},o(z.label),3))]),e("figcaption",null,o(z.label),1)]))),128))])])],64))]}),_:1}))}});const zl=Ze(Dl,[["__scopeId","data-v-f7cdaa56"]]);export{zl as default};
