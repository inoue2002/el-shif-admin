import{A as f,s as _,w as l,o as c,a as e,E as r,u as n,G as b,a0 as g,I as w,J as V,K as m,p as $,D as h,e as y,q as k}from"./index.63431331.js";import{_ as U}from"./SectionFullScreen.5d2daf49.js";import{_ as t,a as x}from"./FormField.2700a3fc.js";const v={__name:"LoginView",setup(A){const a=f({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:["remember"]}),i=k(),u=()=>{i.push("/dashboard")};return(B,o)=>(c(),_(U,{bg:"login"},{default:l(({cardClass:d,cardRounded:p})=>[e(y,{class:$(d),rounded:p,form:"",onSubmit:h(u,["prevent"])},{default:l(()=>[e(t,{label:"Login",help:"Please enter your login"},{default:l(()=>[e(r,{modelValue:a.login,"onUpdate:modelValue":o[0]||(o[0]=s=>a.login=s),icon:n(b),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(t,{label:"Password",help:"Please enter your password"},{default:l(()=>[e(r,{modelValue:a.pass,"onUpdate:modelValue":o[1]||(o[1]=s=>a.pass=s),icon:n(g),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(x,{modelValue:a.remember,"onUpdate:modelValue":o[2]||(o[2]=s=>a.remember=s),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),e(w),e(V,null,{default:l(()=>[e(m,{type:"submit",color:"info",label:"Login"}),e(m,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),_:2},1032,["class","rounded","onSubmit"])]),_:1}))}};export{v as default};
