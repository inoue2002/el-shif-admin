import{o as a,c as o,n as l,p as n,q as r,s as c}from"./index.d28957bc.js";const m={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"},u={__name:"SectionTitle",props:{custom:Boolean,first:Boolean,last:Boolean},setup(e){return(t,s)=>(a(),o("section",{class:n(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":e.first,"-mt-6":e.last,"-my-6":!e.first&&!e.last}])},[e.custom?l(t.$slots,"default",{key:0}):(a(),o("h1",m,[l(t.$slots,"default")]))],2))}},f={__name:"SectionBottomOtherPages",setup(e){const t=r().getRoutes();for(const s in t)t[s].path,t[s].meta&&t[s].meta.title&&t[s].meta.title;return(s,i)=>(a(),c(u,{last:""}))}};export{f as _,u as a};
