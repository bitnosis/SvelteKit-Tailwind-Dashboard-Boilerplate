import{S as z,i as F,s as J,l as c,a as S,r as I,M as K,m as i,n as m,h as t,c as T,u as k,p as r,G as e,b as L,v as O,E as P}from"../chunks/index-1ad192d9.js";function Q(h){let a,u,v,n,o,p,s,x,w,D,g,H,V,E,b=h[0].message+"",y,q,_,A;return{c(){a=c("meta"),u=c("html"),v=S(),n=c("div"),o=c("div"),p=c("section"),s=c("div"),x=c("div"),w=I(h[1]),D=S(),g=c("h2"),H=I("We are sorry, Somthing went wrong!"),V=S(),E=c("p"),y=I(b),q=S(),_=c("a"),A=I("Back To Homepage"),this.h()},l(l){const d=K('[data-svelte="svelte-r8odq2"]',document.head);a=i(d,"META",{name:!0,content:!0}),u=i(d,"HTML",{lang:!0}),m(u).forEach(t),d.forEach(t),v=T(l),n=i(l,"DIV",{class:!0});var M=m(n);o=i(M,"DIV",{class:!0});var B=m(o);p=i(B,"SECTION",{class:!0});var C=m(p);s=i(C,"DIV",{class:!0});var f=m(s);x=i(f,"DIV",{class:!0});var N=m(x);w=k(N,h[1]),N.forEach(t),D=T(f),g=i(f,"H2",{class:!0});var W=m(g);H=k(W,"We are sorry, Somthing went wrong!"),W.forEach(t),V=T(f),E=i(f,"P",{class:!0});var j=m(E);y=k(j,b),j.forEach(t),q=T(f),_=i(f,"A",{href:!0,class:!0});var G=m(_);A=k(G,"Back To Homepage"),G.forEach(t),f.forEach(t),C.forEach(t),B.forEach(t),M.forEach(t),this.h()},h(){document.title="Something wrong | NameAuditor",r(a,"name","robots"),r(a,"content","noindex nofollow"),r(u,"lang","en"),r(x,"class","md:max-w-lg mx-auto text-9xl font-bold"),r(g,"class","mt-8 uppercase text-xl lg:text-5xl font-black"),r(E,"class","mt-6 uppercase text-sm lg:text-base text-gray-900"),r(_,"href","/"),r(_,"class","mt-6 bg-blue-500 hover:bg-blue-700 text-white font-light py-4 px-6 rounded-full inline-block uppercase shadow-md"),r(s,"class","max-w-auto mx-auto"),r(p,"class","py-8 px-4 text-center"),r(o,"class","container m-auto px-4"),r(n,"class","flex h-screen bg-gray-100 justify-items-center")},m(l,d){e(document.head,a),e(document.head,u),L(l,v,d),L(l,n,d),e(n,o),e(o,p),e(p,s),e(s,x),e(x,w),e(s,D),e(s,g),e(g,H),e(s,V),e(s,E),e(E,y),e(s,q),e(s,_),e(_,A)},p(l,[d]){d&2&&O(w,l[1]),d&1&&b!==(b=l[0].message+"")&&O(y,b)},i:P,o:P,d(l){t(a),t(u),l&&t(v),l&&t(n)}}}function X({error:h,status:a}){return{props:{error:h,status:a}}}function R(h,a,u){let{error:v}=a,{status:n}=a;return h.$$set=o=>{"error"in o&&u(0,v=o.error),"status"in o&&u(1,n=o.status)},[v,n]}class Y extends z{constructor(a){super(),F(this,a,R,Q,J,{error:0,status:1})}}export{Y as default,X as load};