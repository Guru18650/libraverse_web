import{s as p,n as b}from"./scheduler.e108d1fd.js";import{S as y,i as _,g as f,m as g,s as k,h as c,j as h,n as v,f as m,c as F,k as o,a as x,y as u,o as E}from"./index.5ae4157e.js";function I(r){let e,t,a,s,i;return{c(){e=f("div"),t=f("label"),a=g(r[0]),s=k(),i=f("input"),this.h()},l(n){e=c(n,"DIV",{});var l=h(e);t=c(l,"LABEL",{for:!0,class:!0});var d=h(t);a=v(d,r[0]),d.forEach(m),s=F(l),i=c(l,"INPUT",{type:!0,name:!0,class:!0}),l.forEach(m),this.h()},h(){o(t,"for",r[2]),o(t,"class","block mb-2 text-sm font-medium "),o(i,"type",r[1]),o(i,"name",r[2]),o(i,"class","bg-gray-700 border border-gray-600 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5")},m(n,l){x(n,e,l),u(e,t),u(t,a),u(e,s),u(e,i)},p(n,[l]){l&1&&E(a,n[0]),l&4&&o(t,"for",n[2]),l&2&&o(i,"type",n[1]),l&4&&o(i,"name",n[2])},i:b,o:b,d(n){n&&m(e)}}}function S(r,e,t){let{label:a,type:s,name:i}=e;return r.$$set=n=>{"label"in n&&t(0,a=n.label),"type"in n&&t(1,s=n.type),"name"in n&&t(2,i=n.name)},[a,s,i]}class N extends y{constructor(e){super(),_(this,e,S,I,p,{label:0,type:1,name:2})}}function T(r){let e,t;return{c(){e=f("button"),t=g(r[0]),this.h()},l(a){e=c(a,"BUTTON",{type:!0,class:!0});var s=h(e);t=v(s,r[0]),s.forEach(m),this.h()},h(){o(e,"type","submit"),o(e,"class","w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center")},m(a,s){x(a,e,s),u(e,t)},p(a,[s]){s&1&&E(t,a[0])},i:b,o:b,d(a){a&&m(e)}}}function w(r,e,t){let{text:a}=e;return r.$$set=s=>{"text"in s&&t(0,a=s.text)},[a]}class U extends y{constructor(e){super(),_(this,e,w,T,p,{text:0})}}export{N as F,U as a};
