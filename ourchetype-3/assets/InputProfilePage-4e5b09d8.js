import{d as x,j as h,c as d,k as I,l as B,o as P,a as L,b as a,m as i,v,n,u as o,q as p,e as R,w as y,f as k,B as C,s as D,p as M,h as N,_ as S}from"./index-a1946f24.js";import{b as z,c as j,R as A}from"./base-5a81bd90.js";import{o as E}from"./gtag-952211a4.js";const T=""+new URL("bg-4ccce4ce.png",import.meta.url).href,Z=""+new URL("blotch-a945e52c.png",import.meta.url).href,q=""+new URL("ring-0-d38e739e.png",import.meta.url).href,W=""+new URL("ring-1-69287836.png",import.meta.url).href,$=""+new URL("logo-ab3a3dd9.png",import.meta.url).href,F=r=>(M("data-v-d4789257"),r=r(),N(),r),G={id:"registration",class:"full-width"},H=D('<div class="top" data-v-d4789257><img class="bg" src="'+T+'" data-v-d4789257><img class="blotch" src="'+Z+'" data-v-d4789257><img class="ring-0" src="'+q+'" data-v-d4789257><img class="ring-1" src="'+W+'" data-v-d4789257><img class="logo" src="'+$+'" data-v-d4789257></div>',1),J={class:"content"},K={class:"form"},O={class:"options"},Q={class:"options"},X=F(()=>a("div",{class:"logos"},[a("div",null,"logo 1"),a("div",null,"logo 2"),a("div",null,"logo 3")],-1)),Y=x({__name:"InputProfilePage",setup(r){const m=z(),U=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,e=h(new A),s=h(!1),f=d(()=>e.value.email?U.test(e.value.email.toLowerCase()):!1),_=d(()=>e.value.name&&e.value.name.length>2),V=d(()=>!e.value.age||typeof e.value.age=="string"?!1:!!e.value.age),c=d(()=>e.value.gender),g=d(()=>!!e.value.domicile),b=d(()=>e.value.info_from&&e.value.info_from.length>2);let u=!1;return I(()=>e.value,()=>{m.freeMode||f.value&&_&&V&&c&&g&&b?u=!0:u=!1},{deep:!0}),I(()=>m.freeMode,w=>{w&&(u=!0)}),B(()=>{E(j.welcome),m.setBackgroundColor("white")}),(w,l)=>(P(),L("div",G,[H,a("div",J,[a("div",K,[i(a("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>e.value.name=t),placeholder:"Nama",class:n({text:!0,invalid:s.value&&!o(_)})},null,2),[[v,e.value.name]]),i(a("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.email=t),placeholder:"Email",class:n({text:!0,invalid:s.value&&!o(f)})},null,2),[[v,e.value.email]]),a("div",O,[i(a("input",{id:"pria","onUpdate:modelValue":l[2]||(l[2]=t=>e.value.gender=t),type:"radio",value:"pria"},null,512),[[p,e.value.gender]]),a("label",{class:n({invalid:s.value&&!o(c)}),for:"pria"},"Pria",2),i(a("input",{id:"wanita","onUpdate:modelValue":l[3]||(l[3]=t=>e.value.gender=t),type:"radio",value:"wanita"},null,512),[[p,e.value.gender]]),a("label",{class:n({invalid:s.value&&!o(c)}),for:"wanita"},"Wanita",2)]),i(a("input",{"onUpdate:modelValue":l[4]||(l[4]=t=>e.value.age=t),placeholder:"Usia",class:n({text:!0,invalid:s.value&&!o(V)})},null,2),[[v,e.value.age,void 0,{number:!0}]]),a("div",Q,[i(a("input",{id:"bdg","onUpdate:modelValue":l[5]||(l[5]=t=>e.value.domicile=t),type:"radio",value:"Bandung"},null,512),[[p,e.value.domicile]]),a("label",{class:n({invalid:s.value&&!o(g)}),for:"bandung"},"Dari Bdg",2),i(a("input",{id:"luar","onUpdate:modelValue":l[6]||(l[6]=t=>e.value.domicile=t),type:"radio",value:"Luar Bandung"},null,512),[[p,e.value.domicile]]),a("label",{class:n({invalid:s.value&&!o(g)}),for:"luar"},"Luar Bdg",2)]),i(a("input",{"onUpdate:modelValue":l[7]||(l[7]=t=>e.value.info_from=t),placeholder:"Informasi Pameran Dari",class:n(["text",{text:!0,invalid:s.value&&!o(b)}])},null,2),[[v,e.value.info_from]])]),R(C,{disabled:!o(u),class:"cta",to:"/registration"},{default:y(()=>[k(" Lanjut ")]),_:1},8,["disabled"]),X])]))}});const te=S(Y,[["__scopeId","data-v-d4789257"]]);export{te as default};
