var ue=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var fe=(e,t)=>{var l={};for(var s in e)Te.call(e,s)&&t.indexOf(s)<0&&(l[s]=e[s]);if(e!=null&&ue)for(var s of ue(e))t.indexOf(s)<0&&Se.call(e,s)&&(l[s]=e[s]);return l};import{S as $,i as ee,s as te,e as v,a as C,b as Z,c as p,n as Me,d as a,f as N,l as F,g as G,h as r,j as Ne,k as ge,t as H,m as oe,o as Ie,u as Je,p as De,q as be,r as He,v as ze,w as V,x as Le,y as Q,z as re,A as Fe,B as je,C as x,D as ne,E as se,F as Y,G as he,H as Ce,I as ke,J as qe,K as Ae,L as ie,M as We,N as Re,O as ce,P as Oe,Q as Be,R as Ke,T as Ee}from"./vendor.2c8fae84.js";function wt(){import("data:text/javascript,")}const Ye=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}};Ye();var j=(e=>(e[e.Text=0]="Text",e[e.Menu=1]="Menu",e[e.Player=2]="Player",e))(j||{}),L=(e=>(e.Jane="jane",e.Dianna="dianna",e.Paul="paul",e))(L||{});function ae(e){switch(e){case"jane":return"Dear Jane";case"dianna":return"Dear Dianna";case"paul":return"Dear Paul"}}function pe(e,t,l){const s=e.slice();return s[2]=t[l],s}function de(e){let t,l,s,n,i,u,o,w,d,b;return{c(){t=v("li"),l=v("a"),s=v("img"),w=C(),Z(s.src,n="img/item-"+e[2]+".png")||p(s,"src",n),p(s,"alt",i=ae(e[2])),p(s,"class",u=Me(e[2])+" svelte-2wsprp"),p(l,"href",o="#"+e[2]),p(l,"class","svelte-2wsprp")},m(_,k){a(_,t,k),N(t,l),N(l,s),N(t,w),d||(b=F(l,"click",e[0]),d=!0)},p:G,d(_){_&&r(t),d=!1,b()}}}function Ge(e){let t,l=[L.Jane,L.Dianna,L.Paul],s=[];for(let n=0;n<3;n+=1)s[n]=de(pe(e,l,n));return{c(){t=v("ul");for(let n=0;n<3;n+=1)s[n].c();p(t,"class","svelte-2wsprp")},m(n,i){a(n,t,i);for(let u=0;u<3;u+=1)s[u].m(t,null)},p(n,[i]){if(i&1){l=[L.Jane,L.Dianna,L.Paul];let u;for(u=0;u<3;u+=1){const o=pe(n,l,u);s[u]?s[u].p(o,i):(s[u]=de(o),s[u].c(),s[u].m(t,null))}for(;u<3;u+=1)s[u].d(1)}},i:G,o:G,d(n){n&&r(t),Ne(s,n)}}}function Ue(e){const t=ge();function l(){t("select")}return[l]}class Ve extends ${constructor(t){super();ee(this,t,Ue,Ge,te,{})}}function ve(e,t,l){const s=e.slice();return s[7]=t[l].lit,s[8]=t[l].big,s[10]=l,s}function me(e,t){let l;return{key:e,first:null,c(){l=v("div"),p(l,"class","blip svelte-1w52k8y"),H(l,"lit",t[7]),H(l,"big",t[8]),this.first=l},m(s,n){a(s,l,n)},p(s,n){t=s,n&2&&H(l,"lit",t[7]),n&2&&H(l,"big",t[8])},d(s){s&&r(l)}}}function Qe(e){let t,l=[],s=new Map,n,i=e[1];const u=o=>o[10];for(let o=0;o<i.length;o+=1){let w=ve(e,i,o),d=u(w);s.set(d,l[o]=me(d,w))}return{c(){t=v("div");for(let o=0;o<l.length;o+=1)l[o].c();p(t,"class","timeline svelte-1w52k8y"),oe(()=>e[5].call(t))},m(o,w){a(o,t,w);for(let d=0;d<l.length;d+=1)l[d].m(t,null);n=Ie(t,e[5].bind(t))},p(o,[w]){w&2&&(i=o[1],l=Je(l,w,u,1,o,i,s,t,De,me,null,ve))},i:G,o:G,d(o){o&&r(t);for(let w=0;w<l.length;w+=1)l[w].d();n()}}}function Xe(e){return[...Array(e).keys()]}function Ze(e,t,l){let s,n,{progress:i=0}=t,{playing:u=!1}=t,o=600;function w(b,_){const k=Math.floor(_*b);return Xe(b).map(P=>({lit:P<=k,big:u&&P==k}))}function d(){o=this.clientWidth,l(0,o)}return e.$$set=b=>{"progress"in b&&l(2,i=b.progress),"playing"in b&&l(3,u=b.playing)},e.$$.update=()=>{e.$$.dirty&1&&l(4,s=8+Math.floor(o/25)),e.$$.dirty&20&&l(1,n=w(s,i))},[o,n,i,u,s,d]}class xe extends ${constructor(t){super();ee(this,t,Ze,Qe,te,{progress:2,playing:3})}}function $e(e){let t,l,s,n,i,u,o,w,d,b,_,k,P,S,T,I,J,M,h,y,f,c,q,B,A,K,W;return{c(){t=v("h4"),t.textContent="Narration",l=C(),s=v("p"),s.textContent="Benny Nemer, Shea Lime, Timothy Rainey II",n=C(),i=v("h4"),i.textContent="Choral",u=C(),o=v("p"),o.textContent="St. Olaf Chamber Singers, directed by Therees Tkach Hibbard",w=C(),d=v("p"),d.textContent="Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.",b=C(),_=v("h4"),_.textContent="Sound Design",k=C(),P=v("p"),P.textContent="Johannes Malfatti",S=C(),T=v("h4"),T.textContent="Narration Recording",I=C(),J=v("p"),J.textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",M=C(),h=v("h4"),h.textContent="Boe Chapel Choral Recording",y=C(),f=v("p"),f.textContent="Jeffrey O\u2019Donnell and Joshua Wyatt",c=C(),q=v("p"),q.innerHTML='<em class="svelte-1v8qv43">Speech on the Occasion of Receiving the Literature Prize of the Free Hanseatic City of Bremen</em>, Paul Celan, 1958. 	Translation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.',B=C(),A=v("p"),A.innerHTML='<em class="svelte-1v8qv43">Blume</em>, Paul Celan, 1959. Translation Michael Hamburger, Poems of Paul Celan, New York, Persea, 1988.',K=C(),W=v("p"),W.innerHTML='<em class="svelte-1v8qv43">Sprich auch du</em>, Paul Celan, 1955. Translation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.',p(t,"class","svelte-1v8qv43"),p(s,"class","svelte-1v8qv43"),p(i,"class","svelte-1v8qv43"),p(o,"class","svelte-1v8qv43"),p(d,"class","svelte-1v8qv43"),p(_,"class","svelte-1v8qv43"),p(P,"class","svelte-1v8qv43"),p(T,"class","svelte-1v8qv43"),p(J,"class","svelte-1v8qv43"),p(h,"class","svelte-1v8qv43"),p(f,"class","svelte-1v8qv43"),p(q,"class","svelte-1v8qv43"),p(A,"class","svelte-1v8qv43"),p(W,"class","svelte-1v8qv43")},m(m,g){a(m,t,g),a(m,l,g),a(m,s,g),a(m,n,g),a(m,i,g),a(m,u,g),a(m,o,g),a(m,w,g),a(m,d,g),a(m,b,g),a(m,_,g),a(m,k,g),a(m,P,g),a(m,S,g),a(m,T,g),a(m,I,g),a(m,J,g),a(m,M,g),a(m,h,g),a(m,y,g),a(m,f,g),a(m,c,g),a(m,q,g),a(m,B,g),a(m,A,g),a(m,K,g),a(m,W,g)},d(m){m&&r(t),m&&r(l),m&&r(s),m&&r(n),m&&r(i),m&&r(u),m&&r(o),m&&r(w),m&&r(d),m&&r(b),m&&r(_),m&&r(k),m&&r(P),m&&r(S),m&&r(T),m&&r(I),m&&r(J),m&&r(M),m&&r(h),m&&r(y),m&&r(f),m&&r(c),m&&r(q),m&&r(B),m&&r(A),m&&r(K),m&&r(W)}}}function et(e){let t,l,s,n,i,u,o,w,d,b,_,k,P,S,T,I,J,M,h;return{c(){t=v("h4"),t.textContent="Narration",l=C(),s=v("p"),s.textContent="Benny Nemer, Shea Lime, Timothy Rainey II",n=C(),i=v("h4"),i.textContent="Interview",u=C(),o=v("p"),o.textContent="Dianna Clise",w=C(),d=v("h4"),d.textContent="Sound Design",b=C(),_=v("p"),_.textContent="Johannes Malfatti",k=C(),P=v("h4"),P.textContent="Narration Recording",S=C(),T=v("p"),T.textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",I=C(),J=v("h4"),J.textContent="Interview Recording",M=C(),h=v("p"),h.textContent="Jim Loveland and Tyler Thomas",p(t,"class","svelte-1v8qv43"),p(s,"class","svelte-1v8qv43"),p(i,"class","svelte-1v8qv43"),p(o,"class","svelte-1v8qv43"),p(d,"class","svelte-1v8qv43"),p(_,"class","svelte-1v8qv43"),p(P,"class","svelte-1v8qv43"),p(T,"class","svelte-1v8qv43"),p(J,"class","svelte-1v8qv43"),p(h,"class","svelte-1v8qv43")},m(y,f){a(y,t,f),a(y,l,f),a(y,s,f),a(y,n,f),a(y,i,f),a(y,u,f),a(y,o,f),a(y,w,f),a(y,d,f),a(y,b,f),a(y,_,f),a(y,k,f),a(y,P,f),a(y,S,f),a(y,T,f),a(y,I,f),a(y,J,f),a(y,M,f),a(y,h,f)},d(y){y&&r(t),y&&r(l),y&&r(s),y&&r(n),y&&r(i),y&&r(u),y&&r(o),y&&r(w),y&&r(d),y&&r(b),y&&r(_),y&&r(k),y&&r(P),y&&r(S),y&&r(T),y&&r(I),y&&r(J),y&&r(M),y&&r(h)}}}function tt(e){let t,l,s,n,i,u,o,w,d,b,_,k,P,S,T,I,J,M,h,y,f;return{c(){t=v("h4"),t.textContent="Narration",l=C(),s=v("p"),s.textContent="Benny Nemer, Shea Lime, Timothy Rainey II",n=C(),i=v("h4"),i.textContent="Choral",u=C(),o=v("p"),o.textContent="St. Olaf Chamber Singers, directed by Therees Tkach Hibbard",w=C(),d=v("p"),d.textContent="Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.",b=C(),_=v("h4"),_.textContent="Sound Design",k=C(),P=v("p"),P.textContent="Johannes Malfatti",S=C(),T=v("h4"),T.textContent="Narration Recording",I=C(),J=v("p"),J.textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",M=C(),h=v("h4"),h.textContent="Boe Chapel Choral Recording",y=C(),f=v("p"),f.textContent="Jeffrey O\u2019Donnell and Joshua Wyatt",p(t,"class","svelte-1v8qv43"),p(s,"class","svelte-1v8qv43"),p(i,"class","svelte-1v8qv43"),p(o,"class","svelte-1v8qv43"),p(d,"class","svelte-1v8qv43"),p(_,"class","svelte-1v8qv43"),p(P,"class","svelte-1v8qv43"),p(T,"class","svelte-1v8qv43"),p(J,"class","svelte-1v8qv43"),p(h,"class","svelte-1v8qv43"),p(f,"class","svelte-1v8qv43")},m(c,q){a(c,t,q),a(c,l,q),a(c,s,q),a(c,n,q),a(c,i,q),a(c,u,q),a(c,o,q),a(c,w,q),a(c,d,q),a(c,b,q),a(c,_,q),a(c,k,q),a(c,P,q),a(c,S,q),a(c,T,q),a(c,I,q),a(c,J,q),a(c,M,q),a(c,h,q),a(c,y,q),a(c,f,q)},d(c){c&&r(t),c&&r(l),c&&r(s),c&&r(n),c&&r(i),c&&r(u),c&&r(o),c&&r(w),c&&r(d),c&&r(b),c&&r(_),c&&r(k),c&&r(P),c&&r(S),c&&r(T),c&&r(I),c&&r(J),c&&r(M),c&&r(h),c&&r(y),c&&r(f)}}}function lt(e){let t;function l(i,u){if(i[0]===L.Jane)return tt;if(i[0]===L.Dianna)return et;if(i[0]===L.Paul)return $e}let s=l(e),n=s&&s(e);return{c(){n&&n.c(),t=be()},m(i,u){n&&n.m(i,u),a(i,t,u)},p(i,[u]){s!==(s=l(i))&&(n&&n.d(1),n=s&&s(i),n&&(n.c(),n.m(t.parentNode,t)))},i:G,o:G,d(i){n&&n.d(i),i&&r(t)}}}function nt(e,t,l){let{piece:s}=t;return e.$$set=n=>{"piece"in n&&l(0,s=n.piece)},[s]}class st extends ${constructor(t){super();ee(this,t,nt,lt,te,{piece:0})}}function _e(e,s){var n=s,{reference:t}=n,l=fe(n,["reference"]);const u=parseFloat(getComputedStyle(e).height.replace("px",""))-t;return{delay:l.delay||0,duration:l.duration||400,easing:l.easing||He,css:(o,w)=>{const d=t+u*o;return`opacity: ${o}; height: ${d}px;`}}}function Pe(e,t){return{destroy:t}}const{isNaN:it}=Fe;function ot(e){let t,l,s,n,i,u,o,w;return l=new st({props:{piece:e[0]}}),{c(){t=v("div"),ne(l.$$.fragment),p(t,"class","text condensed svelte-9c5zsy"),H(t,"absolute",e[9])},m(d,b){a(d,t,b),se(l,t,null),u=!0,o||(w=Y(s=Pe.call(null,t,e[28])),o=!0)},p(d,b){e=d;const _={};b[0]&1&&(_.piece=e[0]),l.$set(_),s&&he(s.update)&&b[0]&1024&&s.update.call(null,e[28]),b[0]&512&&H(t,"absolute",e[9])},i(d){u||(Q(l.$$.fragment,d),oe(()=>{i&&i.end(1),n=Ce(t,_e,{reference:e[8],delay:e[11],duration:ut,easing:ke}),n.start()}),u=!0)},o(d){V(l.$$.fragment,d),n&&n.invalidate(),i=qe(t,_e,{reference:e[8],duration:e[12],easing:Ae}),u=!1},d(d){d&&r(t),ie(l),d&&i&&i.end(),o=!1,w()}}}function at(e){let t,l,s,n,i,u,o,w=e[6]?"Pause":"Play",d,b,_,k,P,S,T,I,J;return l=new xe({props:{progress:e[13],playing:e[6]}}),{c(){t=v("div"),ne(l.$$.fragment),s=C(),n=v("div"),i=v("button"),i.textContent="Rewind",u=C(),o=v("button"),d=We(w),b=C(),_=v("button"),_.textContent="Fast forward",p(i,"class","rew svelte-9c5zsy"),p(o,"class","play-pause svelte-9c5zsy"),H(o,"playing",e[6]),H(o,"waiting",e[7]),p(_,"class","ffw svelte-9c5zsy"),p(n,"class","controls svelte-9c5zsy"),p(t,"class","svelte-9c5zsy"),H(t,"absolute",e[10])},m(M,h){a(M,t,h),se(l,t,null),N(t,s),N(t,n),N(n,i),N(n,u),N(n,o),N(o,d),N(n,b),N(n,_),e[26](t),T=!0,I||(J=[F(i,"click",e[16]),F(o,"click",e[14]),F(_,"click",e[15]),Y(k=Pe.call(null,t,e[27]))],I=!0)},p(M,h){e=M;const y={};h[0]&8192&&(y.progress=e[13]),h[0]&64&&(y.playing=e[6]),l.$set(y),(!T||h[0]&64)&&w!==(w=e[6]?"Pause":"Play")&&Re(d,w),h[0]&64&&H(o,"playing",e[6]),h[0]&128&&H(o,"waiting",e[7]),k&&he(k.update)&&h[0]&512&&k.update.call(null,e[27]),h[0]&1024&&H(t,"absolute",e[10])},i(M){T||(Q(l.$$.fragment,M),oe(()=>{S&&S.end(1),P=Ce(t,ce,{duration:e[11],delay:e[12]}),P.start()}),T=!0)},o(M){V(l.$$.fragment,M),P&&P.invalidate(),S=qe(t,ce,{duration:e[11]}),T=!1},d(M){M&&r(t),ie(l),e[26](null),M&&S&&S.end(),I=!1,re(J)}}}function rt(e){let t,l,s=!1,n,i=!0,u,o,w,d,b,_,k,P,S,T,I;function J(){cancelAnimationFrame(n),t.paused||(n=je(J),s=!0),e[19].call(t)}const M=[at,ot],h=[];function y(f,c){return f[1]?1:0}return _=y(e),k=h[_]=M[_](e),{c(){t=v("audio"),u=C(),o=v("img"),b=C(),k.c(),P=be(),Z(t.src,l="audio/"+e[0]+".mp3")||p(t,"src",l),e[4]===void 0&&oe(()=>e[21].call(t)),Z(o.src,w="img/title-"+e[0]+".png")||p(o,"src",w),p(o,"alt",d=ae(e[0])),p(o,"class","title svelte-9c5zsy")},m(f,c){a(f,t,c),a(f,u,c),a(f,o,c),a(f,b,c),h[_].m(f,c),a(f,P,c),S=!0,T||(I=[F(t,"timeupdate",J),F(t,"play",e[20]),F(t,"pause",e[20]),F(t,"durationchange",e[21]),F(t,"waiting",e[22]),F(t,"canplay",e[23]),F(t,"ended",e[24]),F(o,"click",e[25])],T=!0)},p(f,c){(!S||c[0]&1&&!Z(t.src,l="audio/"+f[0]+".mp3"))&&p(t,"src",l),!s&&c[0]&4&&!it(f[2])&&(t.currentTime=f[2]),s=!1,c[0]&8&&i!==(i=f[3])&&t[i?"pause":"play"](),(!S||c[0]&1&&!Z(o.src,w="img/title-"+f[0]+".png"))&&p(o,"src",w),(!S||c[0]&1&&d!==(d=ae(f[0])))&&p(o,"alt",d);let q=_;_=y(f),_===q?h[_].p(f,c):(ze(),V(h[q],1,1,()=>{h[q]=null}),Le(),k=h[_],k?k.p(f,c):(k=h[_]=M[_](f),k.c()),Q(k,1),k.m(P.parentNode,P))},i(f){S||(Q(k),S=!0)},o(f){V(k),S=!1},d(f){f&&r(t),f&&r(u),f&&r(o),f&&r(b),h[_].d(f),f&&r(P),T=!1,re(I)}}}const ye=10,ut=800;function ft(e){const t=parseFloat(window.localStorage.getItem(e));return isNaN(t)?null:t}function ct(e,t,l){let s,n,i,u,{piece:o}=t,{isInView:w}=t,d=!1,b=0,_=!0,k=0,P=!1,S=null,T=null,I,J,M=!0,h=!1;function y(){l(3,_=!_)}function f(){l(2,b+=ye),q()}function c(){l(2,b-=ye),q()}function q(){window.localStorage.setItem(o,b.toString())}function B(){T=window.setInterval(q,1e3)}function A(){T&&(window.clearInterval(T),T=null)}function K(){S!==null&&(l(2,b=S),l(18,S=null))}function W(){b=this.currentTime,l(2,b)}function m(){_=this.paused,l(3,_),l(0,o)}function g(){k=this.duration,l(4,k)}const U=()=>l(7,P=!0),D=()=>l(7,P=!1),E=()=>window.setTimeout(()=>l(1,d=!0),1e3),X=()=>l(1,d=!d);function le(O){x[O?"unshift":"push"](()=>{I=O,l(5,I)})}const z=()=>l(9,M=!1),R=()=>l(10,h=!1);return e.$$set=O=>{"piece"in O&&l(0,o=O.piece),"isInView"in O&&l(17,w=O.isInView)},e.$$.update=()=>{e.$$.dirty[0]&1&&(l(18,S=ft(o)),l(3,_=!0),l(1,d=!1)),e.$$.dirty[0]&8&&l(6,s=!_),e.$$.dirty[0]&262164&&l(13,n=k==0?0:(S!=null?S:b)/k),e.$$.dirty[0]&64&&(s?(K(),B()):A()),e.$$.dirty[0]&32&&I&&l(8,J=parseFloat(getComputedStyle(I).height.replace("px",""))),e.$$.dirty[0]&2&&(d||l(9,M=!0)),e.$$.dirty[0]&2&&d&&l(10,h=!0),e.$$.dirty[0]&131072&&l(12,i=w?600:0),e.$$.dirty[0]&131072&&l(11,u=w?300:0)},[o,d,b,_,k,I,s,P,J,M,h,u,i,n,y,f,c,w,S,W,m,g,U,D,E,X,le,z,R]}class pt extends ${constructor(t){super();ee(this,t,ct,rt,te,{piece:0,isInView:17},null,[-1,-1])}}function dt(e){let t,l,s,n,i,u,o,w,d,b,_,k,P,S,T,I,J,M,h,y,f,c,q,B,A,K,W,m,g,U,D,E,X,le;return I=new Ve({}),I.$on("select",e[18]),h=new pt({props:{piece:e[1],isInView:e[0]===j.Player}}),{c(){t=v("main"),l=v("header"),l.innerHTML='<img class="title svelte-pjazcq" src="img/title.png" alt="The Making Known"/>',s=C(),n=v("div"),i=v("div"),u=v("p"),u.textContent=`This is a narrated encounter with posters designed by the Nazi German government to
        communicate with the occupied nations of Belgium, France, and Luxembourg during the
        Second World War. The posters are part of the Tetlie Collection of WWII Propaganda
        Posters at the Flaten Art Museum at St Olaf College in Northfield, Minnesota.`,o=C(),w=v("p"),w.textContent=`The encounter takes form through three audio letters written by the artist to individuals of
        relevance to the preservation and interpretation of the posters and their twenty-first century
        meaning: a curator, a paper conservator, and a poet. Each letter lasts between fifteen and
        twenty minutes.`,d=C(),b=v("p"),b.innerHTML=`Please put on your headphones, turn off the ringer of your device, and when you are
        ready, proceed to the menu to select one of the audio letters of <em>The Making Known</em>.`,_=C(),k=v("p"),P=v("button"),P.textContent="Forward",S=C(),T=v("div"),ne(I.$$.fragment),J=C(),M=v("div"),ne(h.$$.fragment),y=C(),f=v("div"),f.innerHTML=`<div class="text"><p><em>The Making Known</em> was written and created by <a href="https://nemer.be" target="_blank">Benny Nemer</a>
        to accompany a scenography of flowers, paper mobiles, and a selection of posters from the Tetlie
        Collection, exhibited in a solo exhibition at the Flaten Art Museum at St Olaf College in the
        winter of 2022. The project was commissioned by museum Director and Curator Jane
        Becker Nelson with financial support from Institute of Museum and Library Services.
        Website programming by Nikita Gaidakov.</p></div>`,c=C(),q=v("div"),B=C(),A=v("div"),K=C(),W=v("div"),m=C(),g=v("div"),U=C(),D=v("div"),p(l,"class","centred slide svelte-pjazcq"),p(P,"class","arrow right inline svelte-pjazcq"),p(k,"class","centred svelte-pjazcq"),p(i,"class","text"),p(n,"class","centred slide svelte-pjazcq"),p(T,"class","centred slide svelte-pjazcq"),p(M,"class","centred slide svelte-pjazcq"),p(f,"class","centred slide svelte-pjazcq"),p(q,"class","background default svelte-pjazcq"),H(q,"show",e[0]===j.Text),p(A,"class","background red svelte-pjazcq"),H(A,"show",e[0]===j.Menu),p(W,"class","background jane svelte-pjazcq"),H(W,"show",e[0]===j.Player&&e[1]===L.Jane),p(g,"class","background dianna svelte-pjazcq"),H(g,"show",e[0]===j.Player&&e[1]===L.Dianna),p(D,"class","background paul svelte-pjazcq"),H(D,"show",e[0]===j.Player&&e[1]===L.Paul),p(t,"class","carousel horizontal svelte-pjazcq"),H(t,"snap",!e[3])},m(z,R){a(z,t,R),N(t,l),N(t,s),N(t,n),N(n,i),N(i,u),N(i,o),N(i,w),N(i,d),N(i,b),N(i,_),N(i,k),N(k,P),e[17](n),N(t,S),N(t,T),se(I,T,null),e[19](T),N(t,J),N(t,M),se(h,M,null),e[20](M),N(t,y),N(t,f),N(t,c),N(t,q),N(t,B),N(t,A),N(t,K),N(t,W),N(t,m),N(t,g),N(t,U),N(t,D),e[21](t),E=!0,X||(le=[Y(e[8].call(null,l)),F(l,"leave",e[15]),F(P,"click",e[16]),Y(e[8].call(null,n)),F(n,"enter",e[9]),Y(e[8].call(null,T)),F(T,"enter",e[11]),Y(e[8].call(null,M)),F(M,"enter",e[10]),Y(e[8].call(null,f)),F(f,"enter",e[9]),Y(e[8].call(null,t)),F(t,"enter",e[9])],X=!0)},p(z,[R]){const O={};R&2&&(O.piece=z[1]),R&1&&(O.isInView=z[0]===j.Player),h.$set(O),R&1&&H(q,"show",z[0]===j.Text),R&1&&H(A,"show",z[0]===j.Menu),R&3&&H(W,"show",z[0]===j.Player&&z[1]===L.Jane),R&3&&H(g,"show",z[0]===j.Player&&z[1]===L.Dianna),R&3&&H(D,"show",z[0]===j.Player&&z[1]===L.Paul),R&8&&H(t,"snap",!z[3])},i(z){E||(Q(I.$$.fragment,z),Q(h.$$.fragment,z),E=!0)},o(z){V(I.$$.fragment,z),V(h.$$.fragment,z),E=!1},d(z){z&&r(t),e[17](null),ie(I),e[19](null),ie(h),e[20](null),e[21](null),X=!1,re(le)}}}const vt=2e3,we=1400;function mt(e,t,l){const s=M(),n=Oe(navigator.userAgent),i=n.os.name==="ios"&&n.os.majorVersion<15||n.browser.name==="safari"&&n.browser.majorVersion<15;let u=j.Text,o=s||L.Jane,w=!1,d=!1,b=!1,_=!1,k,P,S,T,I=null;Be(()=>window.setTimeout(()=>l(14,d=!0),vt)),window.onload=()=>l(13,w=!0);function J(){b||q(s!==null?T:P,we)}function M(){switch(window.location.hash){case"#jane":return L.Jane;case"#dianna":return L.Dianna;case"#paul":return L.Paul;default:return null}}window.addEventListener("hashchange",()=>{l(1,o=M()||L.Jane)});const h=D=>Ke(D,{threshold:.8}),y=()=>l(0,u=j.Text),f=()=>l(0,u=j.Player),c=()=>{(!_||I===S)&&l(0,u=j.Menu)};function q(D,E=800){I=D,i||l(3,_=!0),window.requestAnimationFrame(()=>Ee.scrollTo({container:k,element:D,duration:E,easing:ke,scrollX:!0,scrollY:!1,onDone:()=>{I=null,l(3,_=!1)}}))}const B=()=>l(2,b=!0),A=()=>q(S);function K(D){x[D?"unshift":"push"](()=>{P=D,l(5,P)})}const W=()=>q(T);function m(D){x[D?"unshift":"push"](()=>{S=D,l(6,S)})}function g(D){x[D?"unshift":"push"](()=>{T=D,l(7,T)})}function U(D){x[D?"unshift":"push"](()=>{k=D,l(4,k)})}return e.$$.update=()=>{e.$$.dirty&24576&&w&&d&&J()},[u,o,b,_,k,P,S,T,h,y,f,c,q,w,d,B,A,K,W,m,g,U]}class _t extends ${constructor(t){super();ee(this,t,mt,dt,te,{})}}new _t({target:document.body});export{wt as __vite_legacy_guard};
//# sourceMappingURL=index.7ff9b7e5.js.map
