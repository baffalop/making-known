var Te=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var ge=(e,t)=>{var l={};for(var i in e)Ve.call(e,i)&&t.indexOf(i)<0&&(l[i]=e[i]);if(e!=null&&Te)for(var i of Te(e))t.indexOf(i)<0&&qe.call(e,i)&&(l[i]=e[i]);return l};import{S as me,i as _e,s as ve,e as m,t as Ye,a as h,b as f,c as de,n as Ge,d as Ue,f as r,g as I,l as V,h as $,j as a,k as We,m as Qe,o as R,p as ce,q as Xe,u as Ze,r as xe,v as Re,w as $e,x as be,y as Y,z as ye,A as K,B as Ce,C as et,D as tt,E as te,F as ae,G as ue,H as Be,I as Ke,J as he,K as je,L as ke,M as lt,N as fe,O as pe,P as nt,Q as it,R as Pe,T as st}from"./vendor.c672cd11.js";function Ft(){import("data:text/javascript,")}const ot=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}};ot();var B=(e=>(e.Jane="jane",e.Dianna="dianna",e.Paul="paul",e))(B||{});function we(e){switch(e){case"jane":return"Dear Jane";case"dianna":return"Dear Dianna";case"paul":return"Dear Paul"}}function Me(e,t,l){const i=e.slice();return i[2]=t[l],i[4]=l,i}function Ne(e){let t,l,i=e[4]+1+"",s,o,u,n,_,d,S,w,k,C,D;return{c(){t=m("li"),l=m("h4"),s=Ye(i),o=h(),u=m("a"),n=m("img"),k=h(),f(l,"class","svelte-1kok2ed"),de(n.src,_="img/item-"+e[2]+".png")||f(n,"src",_),f(n,"alt",d=we(e[2])),f(n,"class",S=Ge(e[2])+" svelte-1kok2ed"),f(u,"class","button"),f(u,"href",w="#"+e[2]),Ue(t,"--i",e[4])},m(T,J){r(T,t,J),I(t,l),I(l,s),I(t,o),I(t,u),I(u,n),I(t,k),C||(D=V(u,"click",e[0]),C=!0)},p:$,d(T){T&&a(t),C=!1,D()}}}function rt(e){let t,l=[B.Jane,B.Dianna,B.Paul],i=[];for(let s=0;s<3;s+=1)i[s]=Ne(Me(e,l,s));return{c(){t=m("ul");for(let s=0;s<3;s+=1)i[s].c();f(t,"class","svelte-1kok2ed")},m(s,o){r(s,t,o);for(let u=0;u<3;u+=1)i[u].m(t,null)},p(s,[o]){if(o&1){l=[B.Jane,B.Dianna,B.Paul];let u;for(u=0;u<3;u+=1){const n=Me(s,l,u);i[u]?i[u].p(n,o):(i[u]=Ne(n),i[u].c(),i[u].m(t,null))}for(;u<3;u+=1)i[u].d(1)}},i:$,o:$,d(s){s&&a(t),We(i,s)}}}function at(e){const t=Qe();function l(){t("select")}return[l]}class ut extends me{constructor(t){super();_e(this,t,at,rt,ve,{})}}function De(e,t,l){const i=e.slice();return i[7]=t[l].lit,i[8]=t[l].big,i[10]=l,i}function Ie(e,t){let l;return{key:e,first:null,c(){l=m("div"),f(l,"class","blip svelte-1w52k8y"),R(l,"lit",t[7]),R(l,"big",t[8]),this.first=l},m(i,s){r(i,l,s)},p(i,s){t=i,s&2&&R(l,"lit",t[7]),s&2&&R(l,"big",t[8])},d(i){i&&a(l)}}}function ft(e){let t,l=[],i=new Map,s,o=e[1];const u=n=>n[10];for(let n=0;n<o.length;n+=1){let _=De(e,o,n),d=u(_);i.set(d,l[n]=Ie(d,_))}return{c(){t=m("div");for(let n=0;n<l.length;n+=1)l[n].c();f(t,"class","timeline svelte-1w52k8y"),ce(()=>e[5].call(t))},m(n,_){r(n,t,_);for(let d=0;d<l.length;d+=1)l[d].m(t,null);s=Xe(t,e[5].bind(t))},p(n,[_]){_&2&&(o=n[1],l=Ze(l,_,u,1,n,o,i,t,xe,Ie,null,De))},i:$,o:$,d(n){n&&a(t);for(let _=0;_<l.length;_+=1)l[_].d();s()}}}function pt(e){return[...Array(e).keys()]}function ct(e,t,l){let i,s,{progress:o=0}=t,{playing:u=!1}=t,n=600;function _(S,w){const k=Math.floor(w*S);return pt(S).map(C=>({lit:C<=k,big:u&&C==k}))}function d(){n=this.clientWidth,l(0,n)}return e.$$set=S=>{"progress"in S&&l(2,o=S.progress),"playing"in S&&l(3,u=S.playing)},e.$$.update=()=>{e.$$.dirty&1&&l(4,i=8+Math.floor(n/25)),e.$$.dirty&20&&l(1,s=_(i,o))},[n,s,o,u,i,d]}class dt extends me{constructor(t){super();_e(this,t,ct,ft,ve,{progress:2,playing:3})}}function mt(e){let t,l,i,s,o,u,n,_,d,S,w,k,C,D,T,J,P,M,g,y,c,p,N,U,W,Q,j;return{c(){t=m("h4"),t.textContent="Narration",l=h(),i=m("p"),i.textContent="Benny Nemer, Shea Lime, Timothy Rainey II",s=h(),o=m("h4"),o.textContent="Choral",u=h(),n=m("p"),n.textContent="St. Olaf Chamber Singers, directed by Therees Tkach Hibbard",_=h(),d=m("p"),d.textContent="Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.",S=h(),w=m("h4"),w.textContent="Sound Design",k=h(),C=m("p"),C.textContent="Johannes Malfatti",D=h(),T=m("h4"),T.textContent="Narration Recording",J=h(),P=m("p"),P.textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",M=h(),g=m("h4"),g.textContent="Boe Chapel Choral Recording",y=h(),c=m("p"),c.textContent="Jeffrey O\u2019Donnell and Joshua Wyatt",p=h(),N=m("p"),N.innerHTML='<em class="svelte-ux6lxf">Speech on the Occasion of Receiving the Literature Prize of the Free Hanseatic City of Bremen</em>, Paul Celan, 1958. 	Translation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.',U=h(),W=m("p"),W.innerHTML='<em class="svelte-ux6lxf">Blume</em>, Paul Celan, 1959. Translation Michael Hamburger, Poems of Paul Celan, New York, Persea, 1988.',Q=h(),j=m("p"),j.innerHTML='<em class="svelte-ux6lxf">Sprich auch du</em>, Paul Celan, 1955. Translation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.',f(t,"class","svelte-ux6lxf"),f(i,"class","svelte-ux6lxf"),f(o,"class","svelte-ux6lxf"),f(n,"class","svelte-ux6lxf"),f(d,"class","svelte-ux6lxf"),f(w,"class","svelte-ux6lxf"),f(C,"class","svelte-ux6lxf"),f(T,"class","svelte-ux6lxf"),f(P,"class","svelte-ux6lxf"),f(g,"class","svelte-ux6lxf"),f(c,"class","svelte-ux6lxf"),f(N,"class","svelte-ux6lxf"),f(W,"class","svelte-ux6lxf"),f(j,"class","svelte-ux6lxf")},m(b,H){r(b,t,H),r(b,l,H),r(b,i,H),r(b,s,H),r(b,o,H),r(b,u,H),r(b,n,H),r(b,_,H),r(b,d,H),r(b,S,H),r(b,w,H),r(b,k,H),r(b,C,H),r(b,D,H),r(b,T,H),r(b,J,H),r(b,P,H),r(b,M,H),r(b,g,H),r(b,y,H),r(b,c,H),r(b,p,H),r(b,N,H),r(b,U,H),r(b,W,H),r(b,Q,H),r(b,j,H)},d(b){b&&a(t),b&&a(l),b&&a(i),b&&a(s),b&&a(o),b&&a(u),b&&a(n),b&&a(_),b&&a(d),b&&a(S),b&&a(w),b&&a(k),b&&a(C),b&&a(D),b&&a(T),b&&a(J),b&&a(P),b&&a(M),b&&a(g),b&&a(y),b&&a(c),b&&a(p),b&&a(N),b&&a(U),b&&a(W),b&&a(Q),b&&a(j)}}}function _t(e){let t,l,i,s,o,u,n,_,d,S,w,k,C,D,T,J,P,M,g;return{c(){t=m("h4"),t.textContent="Narration",l=h(),i=m("p"),i.textContent="Benny Nemer, Shae Lime, Timothy Rainey II",s=h(),o=m("h4"),o.textContent="Interview",u=h(),n=m("p"),n.textContent="Dianna Clise",_=h(),d=m("h4"),d.textContent="Sound Design",S=h(),w=m("p"),w.textContent="Johannes Malfatti",k=h(),C=m("h4"),C.textContent="Narration Recording",D=h(),T=m("p"),T.textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",J=h(),P=m("h4"),P.textContent="Interview Recording",M=h(),g=m("p"),g.textContent="Jim Loveland and Tyler Thomas",f(t,"class","svelte-ux6lxf"),f(i,"class","svelte-ux6lxf"),f(o,"class","svelte-ux6lxf"),f(n,"class","svelte-ux6lxf"),f(d,"class","svelte-ux6lxf"),f(w,"class","svelte-ux6lxf"),f(C,"class","svelte-ux6lxf"),f(T,"class","svelte-ux6lxf"),f(P,"class","svelte-ux6lxf"),f(g,"class","svelte-ux6lxf")},m(y,c){r(y,t,c),r(y,l,c),r(y,i,c),r(y,s,c),r(y,o,c),r(y,u,c),r(y,n,c),r(y,_,c),r(y,d,c),r(y,S,c),r(y,w,c),r(y,k,c),r(y,C,c),r(y,D,c),r(y,T,c),r(y,J,c),r(y,P,c),r(y,M,c),r(y,g,c)},d(y){y&&a(t),y&&a(l),y&&a(i),y&&a(s),y&&a(o),y&&a(u),y&&a(n),y&&a(_),y&&a(d),y&&a(S),y&&a(w),y&&a(k),y&&a(C),y&&a(D),y&&a(T),y&&a(J),y&&a(P),y&&a(M),y&&a(g)}}}function vt(e){let t,l,i,s,o,u,n,_,d,S,w,k,C,D,T,J,P,M,g,y,c;return{c(){t=m("h4"),t.textContent="Narration",l=h(),i=m("p"),i.textContent="Benny Nemer, Shea Lime, Timothy Rainey II",s=h(),o=m("h4"),o.textContent="Choral",u=h(),n=m("p"),n.textContent="St. Olaf Chamber Singers, directed by Therees Tkach Hibbard",_=h(),d=m("p"),d.textContent="Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.",S=h(),w=m("h4"),w.textContent="Sound Design",k=h(),C=m("p"),C.textContent="Johannes Malfatti",D=h(),T=m("h4"),T.textContent="Narration Recording",J=h(),P=m("p"),P.textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",M=h(),g=m("h4"),g.textContent="Boe Chapel Choral Recording",y=h(),c=m("p"),c.textContent="Jeffrey O\u2019Donnell and Joshua Wyatt",f(t,"class","svelte-ux6lxf"),f(i,"class","svelte-ux6lxf"),f(o,"class","svelte-ux6lxf"),f(n,"class","svelte-ux6lxf"),f(d,"class","svelte-ux6lxf"),f(w,"class","svelte-ux6lxf"),f(C,"class","svelte-ux6lxf"),f(T,"class","svelte-ux6lxf"),f(P,"class","svelte-ux6lxf"),f(g,"class","svelte-ux6lxf"),f(c,"class","svelte-ux6lxf")},m(p,N){r(p,t,N),r(p,l,N),r(p,i,N),r(p,s,N),r(p,o,N),r(p,u,N),r(p,n,N),r(p,_,N),r(p,d,N),r(p,S,N),r(p,w,N),r(p,k,N),r(p,C,N),r(p,D,N),r(p,T,N),r(p,J,N),r(p,P,N),r(p,M,N),r(p,g,N),r(p,y,N),r(p,c,N)},d(p){p&&a(t),p&&a(l),p&&a(i),p&&a(s),p&&a(o),p&&a(u),p&&a(n),p&&a(_),p&&a(d),p&&a(S),p&&a(w),p&&a(k),p&&a(C),p&&a(D),p&&a(T),p&&a(J),p&&a(P),p&&a(M),p&&a(g),p&&a(y),p&&a(c)}}}function bt(e){let t;function l(o,u){if(o[0]===B.Jane)return vt;if(o[0]===B.Dianna)return _t;if(o[0]===B.Paul)return mt}let i=l(e),s=i&&i(e);return{c(){s&&s.c(),t=Re()},m(o,u){s&&s.m(o,u),r(o,t,u)},p(o,[u]){i!==(i=l(o))&&(s&&s.d(1),s=i&&i(o),s&&(s.c(),s.m(t.parentNode,t)))},i:$,o:$,d(o){s&&s.d(o),o&&a(t)}}}function yt(e,t,l){let{piece:i}=t;return e.$$set=s=>{"piece"in s&&l(0,i=s.piece)},[i]}class wt extends me{constructor(t){super();_e(this,t,yt,bt,ve,{piece:0})}}function Je(e,i){var s=i,{reference:t}=s,l=ge(s,["reference"]);const u=parseFloat(getComputedStyle(e).height.replace("px",""))-t;return{delay:l.delay||0,duration:l.duration||400,easing:l.easing||$e,css:(n,_)=>{const d=t+u*n;return`opacity: ${n}; height: ${d}px;`}}}function Ee(e,t){return{destroy:t}}const{isNaN:ht}=et;function kt(e){let t,l,i,s,o,u,n,_;return l=new wt({props:{piece:e[0]}}),{c(){t=m("div"),ae(l.$$.fragment),f(t,"class","text condensed svelte-1a5hr25"),R(t,"absolute",e[9])},m(d,S){r(d,t,S),ue(l,t,null),u=!0,n||(_=Be(i=Ee.call(null,t,e[29])),n=!0)},p(d,S){e=d;const w={};S[0]&1&&(w.piece=e[0]),l.$set(w),i&&Ke(i.update)&&S[0]&1024&&i.update.call(null,e[29]),S[0]&512&&R(t,"absolute",e[9])},i(d){u||(K(l.$$.fragment,d),ce(()=>{o&&o.end(1),s=he(t,Je,{reference:e[8],delay:e[11],duration:Pt,easing:je}),s.start()}),u=!0)},o(d){Y(l.$$.fragment,d),s&&s.invalidate(),o=ke(t,Je,{reference:e[8],duration:e[12],easing:lt}),u=!1},d(d){d&&a(t),fe(l),d&&o&&o.end(),n=!1,_()}}}function Ct(e){let t,l,i,s,o,u,n,_,d,S,w,k,C,D,T,J;return l=new dt({props:{progress:e[13],playing:e[6]}}),{c(){t=m("div"),ae(l.$$.fragment),i=h(),s=m("div"),o=m("button"),u=h(),n=m("button"),d=h(),S=m("button"),f(o,"class","rew svelte-1a5hr25"),f(o,"title","rewind"),f(n,"class","play-pause svelte-1a5hr25"),f(n,"title",_=e[6]?"Pause":"Play"),R(n,"playing",e[6]),R(n,"waiting",e[7]),f(S,"class","ffw svelte-1a5hr25"),f(S,"title","fast forward"),f(s,"class","controls svelte-1a5hr25"),f(t,"class","svelte-1a5hr25"),R(t,"absolute",e[10])},m(P,M){r(P,t,M),ue(l,t,null),I(t,i),I(t,s),I(s,o),I(s,u),I(s,n),I(s,d),I(s,S),e[27](t),D=!0,T||(J=[V(o,"click",e[16]),V(n,"click",e[14]),V(S,"click",e[15]),Be(w=Ee.call(null,t,e[28]))],T=!0)},p(P,M){e=P;const g={};M[0]&8192&&(g.progress=e[13]),M[0]&64&&(g.playing=e[6]),l.$set(g),(!D||M[0]&64&&_!==(_=e[6]?"Pause":"Play"))&&f(n,"title",_),M[0]&64&&R(n,"playing",e[6]),M[0]&128&&R(n,"waiting",e[7]),w&&Ke(w.update)&&M[0]&512&&w.update.call(null,e[28]),M[0]&1024&&R(t,"absolute",e[10])},i(P){D||(K(l.$$.fragment,P),ce(()=>{C&&C.end(1),k=he(t,pe,{duration:e[11],delay:e[12]}),k.start()}),D=!0)},o(P){Y(l.$$.fragment,P),k&&k.invalidate(),C=ke(t,pe,{duration:e[11]}),D=!1},d(P){P&&a(t),fe(l),e[27](null),P&&C&&C.end(),T=!1,Ce(J)}}}function St(e){let t,l,i=!1,s,o=!0,u,n,_,d,S,w,k,C,D,T,J;function P(){cancelAnimationFrame(s),t.paused||(s=tt(P),i=!0),e[21].call(t)}const M=[Ct,kt],g=[];function y(c,p){return c[1]?1:0}return w=y(e),k=g[w]=M[w](e),{c(){t=m("audio"),u=h(),n=m("img"),S=h(),k.c(),C=Re(),de(t.src,l="audio/"+e[0]+".mp3")||f(t,"src",l),e[4]===void 0&&ce(()=>e[23].call(t)),de(n.src,_="img/title-"+e[0]+".png")||f(n,"src",_),f(n,"alt",d=we(e[0])),f(n,"class","title svelte-1a5hr25")},m(c,p){r(c,t,p),r(c,u,p),r(c,n,p),r(c,S,p),g[w].m(c,p),r(c,C,p),D=!0,T||(J=[V(t,"timeupdate",P),V(t,"play",e[22]),V(t,"pause",e[22]),V(t,"durationchange",e[23]),V(t,"waiting",e[24]),V(t,"canplay",e[25]),V(t,"ended",e[17]),V(n,"click",e[26])],T=!0)},p(c,p){(!D||p[0]&1&&!de(t.src,l="audio/"+c[0]+".mp3"))&&f(t,"src",l),!i&&p[0]&4&&!ht(c[2])&&(t.currentTime=c[2]),i=!1,p[0]&8&&o!==(o=c[3])&&t[o?"pause":"play"](),(!D||p[0]&1&&!de(n.src,_="img/title-"+c[0]+".png"))&&f(n,"src",_),(!D||p[0]&1&&d!==(d=we(c[0])))&&f(n,"alt",d);let N=w;w=y(c),w===N?g[w].p(c,p):(be(),Y(g[N],1,1,()=>{g[N]=null}),ye(),k=g[w],k?k.p(c,p):(k=g[w]=M[w](c),k.c()),K(k,1),k.m(C.parentNode,C))},i(c){D||(K(k),D=!0)},o(c){Y(k),D=!1},d(c){c&&a(t),c&&a(u),c&&a(n),c&&a(S),g[w].d(c),c&&a(C),T=!1,Ce(J)}}}const He=10,Tt=2e3,gt=5,Pt=800;function Mt(e){const t=parseFloat(window.localStorage.getItem(e));return isNaN(t)?null:t}function Nt(e,t,l){let i,s,o,u,{piece:n}=t,{isInView:_}=t,d=!1;function S(){l(1,d=!1)}let w=0,k=!0,C=0,D=!1,T=null,J=null,P,M,g=!0,y=!1;function c(){l(3,k=!k)}function p(){l(2,w+=He),W()}function N(){l(2,w-=He),W()}function U(){window.setTimeout(()=>l(1,d=!0),1e3)}function W(){const E=Math.max(w-gt,0);window.localStorage.setItem(n,E.toString())}function Q(){J=window.setInterval(W,Tt)}function j(){J&&(window.clearInterval(J),J=null)}function b(){T!==null&&(l(2,w=T),l(20,T=null))}function H(E){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:we(E),album:"The Making Known",artwork:[96,128,192,256,384,512].map(G=>{const z=`${G}x${G}`;return{src:`img/album-art/album-${E}-${z}.jpeg`,sizes:z,type:"image/jpeg"}})}))}function le(){w=this.currentTime,l(2,w)}function X(){k=this.paused,l(3,k),l(0,n)}function ne(){C=this.duration,l(4,C)}const Z=()=>l(7,D=!0),ie=()=>l(7,D=!1),x=()=>l(1,d=!d);function ee(E){te[E?"unshift":"push"](()=>{P=E,l(5,P)})}const se=()=>l(9,g=!1),oe=()=>l(10,y=!1);return e.$$set=E=>{"piece"in E&&l(0,n=E.piece),"isInView"in E&&l(18,_=E.isInView)},e.$$.update=()=>{e.$$.dirty[0]&1&&(l(20,T=Mt(n)),l(3,k=!0),l(1,d=!1),H(n)),e.$$.dirty[0]&8&&l(6,i=!k),e.$$.dirty[0]&1048596&&l(13,s=C==0?0:(T!=null?T:w)/C),e.$$.dirty[0]&64&&(i?(b(),Q()):(j(),W())),e.$$.dirty[0]&32&&P&&l(8,M=parseFloat(getComputedStyle(P).height.replace("px",""))),e.$$.dirty[0]&2&&(d||l(9,g=!0)),e.$$.dirty[0]&2&&d&&l(10,y=!0),e.$$.dirty[0]&262144&&l(12,o=_?600:0),e.$$.dirty[0]&262144&&l(11,u=_?300:0)},[n,d,w,k,C,P,i,D,M,g,y,u,o,s,c,p,N,U,_,S,T,le,X,ne,Z,ie,x,ee,se,oe]}class Dt extends me{constructor(t){super();_e(this,t,Nt,St,ve,{piece:0,isInView:18,select:19},null,[-1,-1])}get select(){return this.$$.ctx[19]}}function Le(e,t,l){const i=e.slice();return i[40]=t[l],i}function Ae(e){let t,l,i,s;function o(...n){return e[31](e[40],...n)}t=new Pe({props:{root:e[4],element:e[40],threshold:.96}}),t.$on("observe",o);function u(){return e[32](e[40])}return i=new Pe({props:{root:e[4],element:e[40],threshold:.8}}),i.$on("intersect",u),{c(){ae(t.$$.fragment),l=h(),ae(i.$$.fragment)},m(n,_){ue(t,n,_),r(n,l,_),ue(i,n,_),s=!0},p(n,_){e=n;const d={};_[0]&16&&(d.root=e[4]),_[0]&1024&&(d.element=e[40]),t.$set(d);const S={};_[0]&16&&(S.root=e[4]),_[0]&1024&&(S.element=e[40]),i.$set(S)},i(n){s||(K(t.$$.fragment,n),K(i.$$.fragment,n),s=!0)},o(n){Y(t.$$.fragment,n),Y(i.$$.fragment,n),s=!1},d(n){fe(t,n),n&&a(l),fe(i,n)}}}function Fe(e){let t,l,i,s,o,u;return{c(){t=m("button"),f(t,"class","arrow left side svelte-k6rp6z"),f(t,"title","back")},m(n,_){r(n,t,_),s=!0,o||(u=V(t,"click",e[16]),o=!0)},p:$,i(n){s||(ce(()=>{i&&i.end(1),l=he(t,pe,{duration:400}),l.start()}),s=!0)},o(n){l&&l.invalidate(),i=ke(t,pe,{duration:150}),s=!1},d(n){n&&a(t),n&&i&&i.end(),o=!1,u()}}}function ze(e){let t,l,i,s,o,u;return{c(){t=m("button"),f(t,"class","arrow right side svelte-k6rp6z"),f(t,"title","forward")},m(n,_){r(n,t,_),s=!0,o||(u=V(t,"click",e[15]),o=!0)},p:$,i(n){s||(ce(()=>{i&&i.end(1),l=he(t,pe,{duration:400}),l.start()}),s=!0)},o(n){l&&l.invalidate(),i=ke(t,pe,{duration:150}),s=!1},d(n){n&&a(t),n&&i&&i.end(),o=!1,u()}}}function It(e){let t,l,i,s,o,u,n,_,d,S,w,k,C,D,T,J,P,M,g,y,c,p,N,U,W,Q,j,b,H,le,X,ne=e[11]&&[e[7],e[1],e[8]].includes(e[2]),Z,ie=e[11]&&[e[6],e[1]].includes(e[2]),x,ee,se,oe;J=new ut({}),J.$on("select",e[18]);let E={piece:e[3]};g=new Dt({props:E}),e[27](g);let G=e[10],z=[];for(let v=0;v<G.length;v+=1)z[v]=Ae(Le(e,G,v));const L=v=>Y(z[v],1,1,()=>{z[v]=null});let F=ne&&Fe(e),O=ie&&ze(e);return{c(){t=m("main"),l=m("header"),l.innerHTML='<img class="title svelte-k6rp6z" src="img/title.png" alt="The Making Known"/>',i=h(),s=m("div"),o=m("div"),u=m("p"),u.textContent=`This is a narrated encounter with posters designed by the Nazi German government to
        communicate with the occupied nations of Belgium, France, and Luxembourg during the
        Second World War. The posters are part of the Tetlie Collection of WWII Propaganda
        Posters at the Flaten Art Museum at St Olaf College in Northfield, Minnesota.`,n=h(),_=m("p"),_.textContent=`The encounter takes form through three audio letters written by the artist to individuals of
        relevance to the preservation and interpretation of the posters and their twenty-first century
        meaning: a curator, a paper conservator, and a poet. Each letter lasts between fifteen and
        twenty minutes.`,d=h(),S=m("p"),S.innerHTML=`Please put on your headphones, turn off the ringer of your device, and when you are
        ready, proceed to the menu to select one of the audio letters of <em>The Making Known</em>.`,w=h(),k=m("p"),C=m("button"),D=h(),T=m("div"),ae(J.$$.fragment),P=h(),M=m("div"),ae(g.$$.fragment),y=h(),c=m("div"),c.innerHTML=`<div class="text"><p><em>The Making Known</em> was written and created by <a href="https://nemer.be" target="_blank">Benny Nemer</a>
        to accompany a scenography of flowers, paper mobiles, and a selection of posters from the Tetlie
        Collection, exhibited in a solo exhibition at the Flaten Art Museum at St Olaf College in the
        winter of 2022. The project was commissioned by museum Director and Curator Jane
        Becker Nelson with financial support from Institute of Museum and Library Services.
        Website programming by Nikita Gaidakov.</p></div>`,p=h(),N=m("div"),U=h(),W=m("div"),Q=h(),j=m("div"),b=h(),H=m("div"),le=h();for(let v=0;v<z.length;v+=1)z[v].c();X=h(),F&&F.c(),Z=h(),O&&O.c(),x=h(),f(l,"class","centred slide svelte-k6rp6z"),f(C,"class","arrow right inline svelte-k6rp6z"),f(C,"title","forward"),f(k,"class","centred svelte-k6rp6z"),f(o,"class","text"),f(s,"class","centred slide svelte-k6rp6z"),f(T,"class","centred slide svelte-k6rp6z"),f(M,"class","centred slide svelte-k6rp6z"),f(c,"class","centred slide svelte-k6rp6z"),f(N,"class","background default svelte-k6rp6z"),R(N,"show",[e[5],e[6],e[8],null].includes(e[2])),f(W,"class","background jane svelte-k6rp6z"),R(W,"show",e[12]&&e[3]===B.Jane),f(j,"class","background dianna svelte-k6rp6z"),R(j,"show",e[12]&&e[3]===B.Dianna),f(H,"class","background paul svelte-k6rp6z"),R(H,"show",e[12]&&e[3]===B.Paul),f(t,"class","carousel horizontal svelte-k6rp6z"),R(t,"snap",!e[0]||e[13])},m(v,A){r(v,t,A),I(t,l),e[23](l),I(t,i),I(t,s),I(s,o),I(o,u),I(o,n),I(o,_),I(o,d),I(o,S),I(o,w),I(o,k),I(k,C),e[25](s),I(t,D),I(t,T),ue(J,T,null),e[26](T),I(t,P),I(t,M),ue(g,M,null),e[28](M),I(t,y),I(t,c),e[29](c),I(t,p),I(t,N),I(t,U),I(t,W),I(t,Q),I(t,j),I(t,b),I(t,H),e[30](t),r(v,le,A);for(let re=0;re<z.length;re+=1)z[re].m(v,A);r(v,X,A),F&&F.m(v,A),r(v,Z,A),O&&O.m(v,A),r(v,x,A),ee=!0,se||(oe=[V(C,"click",e[24]),V(document.body,"keydown",e[17])],se=!0)},p(v,A){const re={};if(A[0]&8&&(re.piece=v[3]),g.$set(re),A[0]&356&&R(N,"show",[v[5],v[6],v[8],null].includes(v[2])),A[0]&4104&&R(W,"show",v[12]&&v[3]===B.Jane),A[0]&4104&&R(j,"show",v[12]&&v[3]===B.Dianna),A[0]&4104&&R(H,"show",v[12]&&v[3]===B.Paul),A[0]&8193&&R(t,"snap",!v[0]||v[13]),A[0]&525332){G=v[10];let q;for(q=0;q<G.length;q+=1){const Se=Le(v,G,q);z[q]?(z[q].p(Se,A),K(z[q],1)):(z[q]=Ae(Se),z[q].c(),K(z[q],1),z[q].m(X.parentNode,X))}for(be(),q=G.length;q<z.length;q+=1)L(q);ye()}A[0]&2438&&(ne=v[11]&&[v[7],v[1],v[8]].includes(v[2])),ne?F?(F.p(v,A),A[0]&2438&&K(F,1)):(F=Fe(v),F.c(),K(F,1),F.m(Z.parentNode,Z)):F&&(be(),Y(F,1,1,()=>{F=null}),ye()),A[0]&2118&&(ie=v[11]&&[v[6],v[1]].includes(v[2])),ie?O?(O.p(v,A),A[0]&2118&&K(O,1)):(O=ze(v),O.c(),K(O,1),O.m(x.parentNode,x)):O&&(be(),Y(O,1,1,()=>{O=null}),ye())},i(v){if(!ee){K(J.$$.fragment,v),K(g.$$.fragment,v);for(let A=0;A<G.length;A+=1)K(z[A]);K(F),K(O),ee=!0}},o(v){Y(J.$$.fragment,v),Y(g.$$.fragment,v),z=z.filter(Boolean);for(let A=0;A<z.length;A+=1)Y(z[A]);Y(F),Y(O),ee=!1},d(v){v&&a(t),e[23](null),e[25](null),fe(J),e[26](null),e[27](null),fe(g),e[28](null),e[29](null),e[30](null),v&&a(le),We(z,v),v&&a(X),F&&F.d(v),v&&a(Z),O&&O.d(v),v&&a(x),se=!1,Ce(oe)}}}const Jt=2e3,Oe=1400;function Ht(e,t,l){let i,s;const o=U(),u=nt(navigator.userAgent),n=u.os.name==="ios"&&u.os.majorVersion<15||u.browser.name==="safari"&&u.browser.majorVersion<15;let _=o||B.Jane,d=!1,S=!1,w=!1,k=!1,C=!0,D,T,J,P,M,g,y,c=[],p;it(()=>{l(10,c=[T,J,P,M,g]),l(2,p=T),window.setTimeout(()=>l(21,S=!0),Jt)}),window.onload=()=>l(20,d=!0);function N(){w||(o!==null?W(M,{duration:Oe}):W(J,{duration:Oe}))}function U(){switch(window.location.hash){case"#jane":return B.Jane;case"#dianna":return B.Dianna;case"#paul":return B.Paul;default:return null}}window.addEventListener("hashchange",()=>{l(3,_=U()||B.Jane)});function W(L,{duration:F=800,delay:O=0}={}){l(0,k=!0);const v=()=>st.scrollTo({container:D,element:L,duration:F,easing:je,scrollX:!0,scrollY:!1,onDone:()=>{l(0,k=!1)}});O?window.setTimeout(v,O):window.requestAnimationFrame(v)}function Q(){b(1)}function j(){b(-1)}function b(L){if(p===null)return;const F=c.indexOf(p),O=c[F+L];O!=null&&W(O)}function H(L){L.key==="ArrowLeft"?(L.preventDefault(),j()):L.key==="ArrowRight"&&(L.preventDefault(),Q())}function le(){y.select(),W(M,{delay:150})}function X(L,{detail:{isIntersecting:F}}){!w&&L!==T||(l(22,C=F),F||(w=!0))}function ne(L){te[L?"unshift":"push"](()=>{T=L,l(5,T)})}const Z=()=>W(P);function ie(L){te[L?"unshift":"push"](()=>{J=L,l(6,J)})}function x(L){te[L?"unshift":"push"](()=>{P=L,l(7,P)})}function ee(L){te[L?"unshift":"push"](()=>{y=L,l(9,y)})}function se(L){te[L?"unshift":"push"](()=>{M=L,l(1,M)})}function oe(L){te[L?"unshift":"push"](()=>{g=L,l(8,g)})}function E(L){te[L?"unshift":"push"](()=>{D=L,l(4,D)})}const G=(L,F)=>X(L,F),z=L=>l(2,p=L);return e.$$.update=()=>{e.$$.dirty[0]&6&&l(12,i=M&&p===M),e.$$.dirty[0]&4194309&&l(11,s=C&&!k&&p!=null),e.$$.dirty[0]&3145728&&d&&S&&N()},[k,M,p,_,D,T,J,P,g,y,c,s,i,n,W,Q,j,H,le,X,d,S,C,ne,Z,ie,x,ee,se,oe,E,G,z]}class Lt extends me{constructor(t){super();_e(this,t,Ht,It,ve,{},null,[-1,-1])}}new Lt({target:document.body});export{Ft as __vite_legacy_guard};
//# sourceMappingURL=index.63ba2f43.js.map
