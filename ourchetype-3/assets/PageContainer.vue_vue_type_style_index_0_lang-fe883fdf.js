import{f as i,g as r,o as c,a as l,d,h as a,n as _,_ as p,u as g,i as m,k as S,v as u}from"./index-52c1f2f5.js";const f={class:"sprite-sheet-img"},h=["src","alt"],v=i({__name:"SpriteSheetImg",props:{src:{type:String,required:!0},xSprites:{type:Number,default:0},ySprites:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},alt:{type:String,default:""}},setup(e){const t=e,s="./imgs",o=r(()=>t.xSprites?100*t.xSprites+"%":"auto"),n=r(()=>t.ySprites?100*t.ySprites+"%":"auto");return(y,w)=>(c(),l("div",f,[d("img",{src:a(s)+"/"+e.src,style:_({width:a(o),height:a(n),left:-e.x*100+"%",top:-e.y*100+"%"}),alt:e.alt},null,12,h)]))}});const x=p(v,[["__scopeId","data-v-0e9f2866"]]),b={class:"logo-set"},C=i({__name:"LogoSet",setup(e){const t=g(),s=r(()=>!!t.bgSetting.bg);return(o,n)=>(c(),l("div",b,[m(x,{class:"logo-img",src:"logos.webp",alt:"Logo Tujusemesta, Motionbeast, dan WWW","x-sprites":1,y:a(s)?1:0},null,8,["y"])]))}});const k=p(C,[["__scopeId","data-v-d6645dc4"]]),I=i({__name:"PageContainer",props:{outerClass:{type:Object,default:()=>{}},innerClass:{type:Object,default:()=>{}},onClick:{type:Function,default:()=>{}}},setup(e){const t=g(),s=r(()=>{switch(t.bgSetting.logoSize){case 1:return"60vw";case .5:return"50vw";default:return"0"}});return(o,n)=>(c(),l("div",{class:u(["outer container",e.outerClass])},[d("div",{class:u(["inner container",e.innerClass]),style:_({paddingTop:a(s)}),onClick:n[0]||(n[0]=y=>e.onClick())},[S(o.$slots,"default")],6),m(k)],2))}});export{k as L,x as S,I as _};
