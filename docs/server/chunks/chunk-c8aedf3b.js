const e="2023-05-30",o="test blog",n=["I'm a header"],a={date:e,title:o,content:n},_=Object.freeze(Object.defineProperty({__proto__:null,content:n,date:e,default:a,title:o},Symbol.toStringTag,{value:"Module"})),l="1988-01-04",c="historical blog",s=["What's going on"],i={date:l,title:c,content:s},g=Object.freeze(Object.defineProperty({__proto__:null,content:s,date:l,default:i,title:c},Symbol.toStringTag,{value:"Module"})),b=Object.assign({"/blogs/1.json":_,"/blogs/2.json":g}),r=Object.values(b).map(t=>t.default),d=t=>`${t.date}-${t.title.replace(/[^ a-zA-Z]/g,"").replace(/ /g,"-").slice(0,28)}`;export{d as a,r as b};
