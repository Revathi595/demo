"use strict";(self.webpackChunkangularproject=self.webpackChunkangularproject||[]).push([[98],{3098:(b,i,r)=>{r.r(i),r.d(i,{CounterModule:()=>Z});var l=r(1509),t=r(3556),a=r(7587),p=r(5452),C=r(6019);function m(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"button",10),t._uU(2),t.qZA(),t.TgZ(3,"button",11),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().counterActions("INC",c)}),t._uU(4,"Increment"),t.qZA(),t.TgZ(5,"button",11),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().counterActions("DEC",c)}),t._uU(6,"Decrement"),t.qZA(),t.TgZ(7,"button",12),t.NdJ("click",function(){const c=t.CHM(e).index;return t.oxw().counterActions("DEL",c)}),t._uU(8,"Delete"),t.qZA(),t.qZA()}if(2&n){const e=u.$implicit;t.xp6(2),t.Oqu(e.count)}}const g=[{path:"",component:(()=>{class n{constructor(e){this.shared=e,this.counterArr=[{count:4},{count:20},{count:3},{count:16},{count:2}]}addCounter(){this.counterArr.push({count:0}),this.shared.setData(this.counterArr.length)}resetAll(){this.counterArr=[],this.shared.setData(this.counterArr.length)}counterActions(e,o){"INC"==e?this.counterArr[o].count+=1:"DEC"==e?this.counterArr[o].count-=1:"DEL"==e&&(this.counterArr.splice(o,1),this.shared.setData(this.counterArr.length))}ngOnInit(){this.shared.setData(this.counterArr.length)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.i))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-counter"]],decls:16,vars:3,consts:[[3,"count"],[1,"container-fluid"],[1,"p-3"],[1,"my-2"],["type","button",1,"btn","btn-primary","p-3","w-25","rounded-0",2,"text-align","left","color","#000000"],[1,"m-0"],[1,"badge","rounded-circle","badge-secondary","bg-secondary","px-3","py-2","m-0"],[1,"mb-2"],["type","button",1,"btn","btn-primary",3,"click"],["class","mb-2",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,o){1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"button",4),t.TgZ(5,"h3",5),t._uU(6," Counter App "),t.TgZ(7,"span",6),t.TgZ(8,"h5",5),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",7),t.TgZ(11,"button",8),t.NdJ("click",function(){return o.resetAll()}),t._uU(12,"Reset"),t.qZA(),t.TgZ(13,"button",8),t.NdJ("click",function(){return o.addCounter()}),t._uU(14,"Add"),t.qZA(),t.qZA(),t.YNc(15,m,9,1,"div",9),t.qZA(),t.qZA()),2&e&&(t.Q6J("count",o.counterArr.length),t.xp6(9),t.Oqu(o.counterArr.length),t.xp6(6),t.Q6J("ngForOf",o.counterArr))},directives:[p.G,C.sg],styles:["","button[_ngcontent-%COMP%]{\n        margin-right: 5px;\n    }"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(g)],l.Bz]}),n})();var A=r(6798);let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h,A.I]]}),n})()}}]);