import{d as c,c as r,a as n,e as p,f as u,u as s,y as l,_ as m}from"./index-9d99deac.js";const d={class:"sprite-sheet-img"},y=["src","alt"],S=c({__name:"SpriteSheetImg",props:{src:{type:String,required:!0},xSprites:{type:Number,default:0},ySprites:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},alt:{type:String,default:""}},setup(e){const t=e,a="./imgs",i=r(()=>t.xSprites?100*t.xSprites+"%":"auto"),o=r(()=>t.ySprites?100*t.ySprites+"%":"auto");return(f,h)=>(n(),p("div",d,[u("img",{src:s(a)+"/"+e.src,style:l({width:s(i),height:s(o),left:-e.x*100+"%",top:-e.y*100+"%"}),alt:e.alt},null,12,y)]))}}),x=m(S,[["__scopeId","data-v-0e806e90"]]);export{x as S};