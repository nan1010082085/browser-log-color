(function(o,r){typeof exports=="object"&&typeof module!="undefined"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(o=typeof globalThis!="undefined"?globalThis:o||self,r(o.index={}))})(this,function(o){"use strict";const r="color:#FFF;padding:3px;border: 1px solid #FFF;",g="border-radius:5px;",i="border-radius: 5px 0 0 5px;",s="border-radius: 0 5px 5px 0;",l="font-weight:bold;",t=new Map([["red","color:red"],["blue","color:blue"],["yellow","color:yellow"],["green","color:green"],["orange","color:orange"],["boldRed",`${l}color:red`],["boldBlue",`${l}color:blue`],["boldYellow",`${l}color:yellow`],["boldGreen",`${l}color:green`],["boldOrange",`${l}color:orange`],["bgBlack",`${r}${g}${l}background:#000;`],["bgGreen",`${r.replace("#FFF","#000")}${g}${l}background:#0F0;`],["bgBlue",`${r}${g}${l}background:#00F;`],["bgYellow",`${r.replace("#FFF","#000")}${g}${l}background:#FF0;`],["bgRed",`${r}${g}${l}background:#FF0000;`],["bgOrange",`${r}${g}${l}background:#FF8C00;`],["bgSpringGreen",`${r}${g}${l}background:#3CB371;`],["gradientBlack",`${r}${g}${l}background:linear-gradient(#FFF, #000);`],["gradientGreen",`${r}${g}${l}background:linear-gradient(#FFF, #3CB371);`]]),n=(e,c)=>[`%c ${e} `,t.get(c)],u=(e,c)=>[e.map(d=>`%c ${d} `).join(""),...c.map((d,a)=>{let b="";return a===0?b=i:a-1===c.length&&(b=s),`${t.get(d)}${b}`})],$=e=>console.log(...n(e,"bgBlack")),F=e=>console.log(...n(e,"bgRed")),B=e=>console.log(...n(e,"bgBlue")),G=e=>console.log(...n(e,"bgYellow")),k=e=>console.log(...n(e,"bgGreen")),f=e=>console.log(...n(e,"bgOrange")),w=e=>console.log(...n(e,"bgSpringGreen")),y=e=>console.log(...n(e,"gradientBlack")),R=e=>console.log(...n(e,"gradientGreen")),p=e=>console.log(...u(e,["bgBlack","bgSpringGreen"])),O=e=>console.log(...u(e,["gradientBlack","gradientGreen"])),S=e=>console.log(...n(e,"red")),Y=e=>console.log(...n(e,"blue")),h=e=>console.log(...n(e,"green")),m=e=>console.log(...n(e,"yellow")),C=e=>console.log(...n(e,"orange")),M=e=>console.log(...n(e,"boldRed")),j=e=>console.log(...n(e,"boldBlue")),T=e=>console.log(...n(e,"boldGreen")),_=e=>console.log(...n(e,"boldYellow")),v=e=>console.log(...n(e,"boldOrange"));o.bgBlack=$,o.bgBlue=B,o.bgGreen=k,o.bgGroupBlack=p,o.bgGroupGradientBlack=O,o.bgOrange=f,o.bgRed=F,o.bgSpringGreen=w,o.bgYellow=G,o.blue=Y,o.boldBlue=j,o.boldGreen=T,o.boldOrange=v,o.boldRed=M,o.boldYellow=_,o.gradientBlack=y,o.gradientGreen=R,o.green=h,o.orange=C,o.red=S,o.yellow=m,Object.defineProperty(o,"__esModule",{value:!0}),o[Symbol.toStringTag]="Module"});