!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["reference"];function n(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function r(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=document.createElement("style");v.innerHTML="html,body{margin:0;height:100%;overflow:hidden}@font-face{font-family:GaramondBT;src:url(/making-known/font/OriginalGaramondBT-Roman.otf);font-style:normal;font-weight:300 500}@font-face{font-family:GaramondBT;src:url(/making-known/font/OriginalGaramondBT-Italic.otf);font-style:italic;font-weight:300 500}@font-face{font-family:GaramondBT;src:url(/making-known/font/OriginalGaramondBT-BoldItalic.otf);font-style:italic;font-weight:600 800}body{-webkit-touch-callout:none;-webkit-user-select:text;font-family:GaramondBT,serif,system-ui,-apple-system,-apple-system-font;--text-color: #ffebb1;color:var(--text-color);background:linear-gradient(190deg,#3e3c3c,20%,#858a8d);font-size:calc(12pt + 1.25vmin)}.text{width:80%;max-width:700px;max-height:85%;padding-right:.6em;line-height:1.3em;overflow-y:auto;-webkit-overflow-scrolling:touch}.text p{margin-block:.8em}p:first-child{-webkit-margin-after:1.2em;margin-block-end:1.2em}p:last-child{-webkit-margin-after:0;margin-block-end:0}a{color:var(--text-color);text-decoration-thickness:1px;text-underline-offset:.3ex}button,a.button{-webkit-tap-highlight-color:transparent;font-size:100%;border:0;outline:0;padding:0;height:1.5em;width:1.75em;background:transparent no-repeat scroll;background-size:contain;transition:opacity .2s ease-in-out .1s;cursor:pointer}button:active,a.button:active{transition:none;opacity:.5}ul.svelte-1kok2ed{list-style:none;line-height:1.5em}h4.svelte-1kok2ed{font-style:italic;font-weight:400;font-size:1.5em;margin-bottom:.4em;margin-left:calc((var(--i) - 1) * .8em + .4em)}img.svelte-1kok2ed{height:2.5em}.jane.svelte-1kok2ed{margin-left:-1.4em;height:2.8em}.dianna.svelte-1kok2ed{margin-left:-.8em;height:3.1em}.paul.svelte-1kok2ed{margin-top:-.2em;margin-left:.6em;height:2.9em}.timeline.svelte-1w52k8y{transform:rotate(-5deg);height:30px;width:12em;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.blip.svelte-1w52k8y{border-radius:100%;height:5px;width:5px;background-color:rgba(103,108,113,.88);transition-property:background-color,height,width;transition-duration:.3s;transition-timing-function:ease-out}.blip.lit.svelte-1w52k8y{background-color:rgba(233,233,203,.8)}.blip.big.svelte-1w52k8y{height:9px;width:9px}.svelte-ux6lxf.svelte-ux6lxf{text-align:center}h4.svelte-ux6lxf.svelte-ux6lxf{font-style:italic;font-weight:400;font-size:1em;line-height:1.4em;-webkit-margin-after:0;margin-block-end:0}h4.svelte-ux6lxf+p.svelte-ux6lxf{-webkit-margin-before:0;margin-block-start:0}.controls.svelte-1a5hr25{margin-top:1em;display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:12.5em}.title.svelte-1a5hr25{height:7em;cursor:pointer;margin-bottom:.7em}.text.condensed.svelte-1a5hr25{height:60%;will-change:opacity,height}.absolute.svelte-1a5hr25{position:absolute}button.play-pause.svelte-1a5hr25{width:8em;height:2.5em;background-image:url(/making-known/img/play-pause.png);background-size:100% auto}button.play-pause.playing.svelte-1a5hr25{background-position:50% 100%}.play-pause.playing.waiting.svelte-1a5hr25{-webkit-animation:svelte-1a5hr25-throb 2.3s infinite;animation:svelte-1a5hr25-throb 2.3s infinite}@-webkit-keyframes svelte-1a5hr25-throb{0%{opacity:1}50%{opacity:0}to{opacity:1}}@keyframes svelte-1a5hr25-throb{0%{opacity:1}50%{opacity:0}to{opacity:1}}button.ffw.svelte-1a5hr25{background-image:url(/making-known/img/ffw.png);margin-bottom:.7em}button.rew.svelte-1a5hr25{background-image:url(/making-known/img/rew.png);margin-top:.7em}button.ffw.svelte-1a5hr25,button.rew.svelte-1a5hr25{opacity:.85}button.ffw.svelte-1a5hr25:active,button.rew.svelte-1a5hr25:active{opacity:.4}.carousel.svelte-k6rp6z.svelte-k6rp6z{height:100%;width:100%;overflow:auto;display:flex}.carousel.horizontal.svelte-k6rp6z.svelte-k6rp6z{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;flex-direction:row}.centred.svelte-k6rp6z.svelte-k6rp6z{display:flex;flex-direction:column;align-items:center;justify-content:center}.slide.svelte-k6rp6z.svelte-k6rp6z{flex:none;height:100%;width:100%}.carousel.snap.svelte-k6rp6z>.slide.svelte-k6rp6z{scroll-snap-stop:always;scroll-snap-align:center}.title.svelte-k6rp6z.svelte-k6rp6z{max-height:70%;max-width:90%}.background.svelte-k6rp6z.svelte-k6rp6z{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background-size:cover;opacity:0;transition:opacity .3s ease-out;will-change:opacity}.background.show.svelte-k6rp6z.svelte-k6rp6z{opacity:1}.background.default.svelte-k6rp6z.svelte-k6rp6z{background-image:url(/making-known/img/bg-main.jpeg);background-position:95% 75%}.background.jane.svelte-k6rp6z.svelte-k6rp6z{background-image:url(/making-known/img/bg-jane.jpeg);background-position:32% 0}.background.dianna.svelte-k6rp6z.svelte-k6rp6z{background-image:url(/making-known/img/bg-dianna.jpeg);background-position:80% 80%}.background.paul.svelte-k6rp6z.svelte-k6rp6z{background-image:url(/making-known/img/bg-paul.jpeg);background-position:0 0}button.arrow.svelte-k6rp6z.svelte-k6rp6z{width:5em}button.arrow.left.svelte-k6rp6z.svelte-k6rp6z{background-image:url(/making-known/img/back.png)}button.arrow.right.svelte-k6rp6z.svelte-k6rp6z{background-image:url(/making-known/img/forward.png)}button.inline.svelte-k6rp6z.svelte-k6rp6z{margin-top:.6em}.arrow.side.svelte-k6rp6z.svelte-k6rp6z{position:absolute;bottom:12%;--margin:10%}@media (max-width: 1200px){.arrow.side.svelte-k6rp6z.svelte-k6rp6z{display:none}}@media (hover: none){.arrow.side.svelte-k6rp6z.svelte-k6rp6z{display:none}}@media (hover: hover) and (min-width: 1200px){.arrow.inline.svelte-k6rp6z.svelte-k6rp6z{display:none}}.arrow.side.left.svelte-k6rp6z.svelte-k6rp6z{left:var(--margin)}.arrow.side.right.svelte-k6rp6z.svelte-k6rp6z{right:var(--margin)}\n",document.head.appendChild(v),System.register(["./vendor-legacy.7c35d841.js"],(function(){"use strict";var e,o,s,c,d,h,m,v,g,y,b,k,w,x,$,C,z,S,T,P,j,M,N,O,I,J,A,D,H,B,L,R,F,W,E,G,K,_,V,Y,q,Q,U,X,Z,ee;return{setters:[function(t){e=t.S,o=t.i,s=t.s,c=t.e,d=t.t,h=t.a,m=t.b,v=t.c,g=t.n,y=t.d,b=t.f,k=t.g,w=t.l,x=t.h,$=t.j,C=t.k,z=t.m,S=t.o,T=t.p,P=t.q,j=t.u,M=t.r,N=t.v,O=t.w,I=t.x,J=t.y,A=t.z,D=t.A,H=t.B,B=t.C,L=t.D,R=t.E,F=t.F,W=t.G,E=t.H,G=t.I,K=t.J,_=t.K,V=t.L,Y=t.M,q=t.N,Q=t.O,U=t.P,X=t.Q,Z=t.R,ee=t.T}],execute:function(){var te=function(e){return e.Jane="jane",e.Dianna="dianna",e.Paul="paul",e}(te||{});function ne(e){switch(e){case"jane":return"Dear Jane";case"dianna":return"Dear Dianna";case"paul":return"Dear Paul"}}function re(e,t,n){var r=e.slice();return r[2]=t[n],r[4]=n,r}function oe(e){var t,n,r,o,i,a,l,s,u,f,p=e[4]+1+"";return{c:function(){t=c("li"),n=c("h4"),r=d(p),o=h(),i=c("a"),a=c("img"),s=h(),m(n,"class","svelte-1kok2ed"),v(a.src,l="img/item-"+e[2]+".png")||m(a,"src",l),m(a,"alt",ne(e[2])),m(a,"class",g(e[2])+" svelte-1kok2ed"),m(i,"class","button"),m(i,"href","#"+e[2]),y(t,"--i",e[4])},m:function(l,c){b(l,t,c),k(t,n),k(n,r),k(t,o),k(t,i),k(i,a),k(t,s),u||(f=w(i,"click",e[0]),u=!0)},p:x,d:function(e){e&&$(t),u=!1,f()}}}function ie(e){for(var t,n=[te.Jane,te.Dianna,te.Paul],r=[],o=0;o<3;o+=1)r[o]=oe(re(e,n,o));return{c:function(){t=c("ul");for(var e=0;e<3;e+=1)r[e].c();m(t,"class","svelte-1kok2ed")},m:function(e,n){b(e,t,n);for(var o=0;o<3;o+=1)r[o].m(t,null)},p:function(e,o){var i=p(o,1)[0];if(1&i){var a;for(n=[te.Jane,te.Dianna,te.Paul],a=0;a<3;a+=1){var l=re(e,n,a);r[a]?r[a].p(l,i):(r[a]=oe(l),r[a].c(),r[a].m(t,null))}for(;a<3;a+=1)r[a].d(1)}},i:x,o:x,d:function(e){e&&$(t),C(r,e)}}}function ae(e){var t=z();return[function(){t("select")}]}var le=function(e){l(n,e);var t=u(n);function n(e){var r;return a(this,n),r=t.call(this),o(f(r),e,ae,ie,s,{}),r}return i(n)}(e);function se(e,t,n){var r=e.slice();return r[7]=t[n].lit,r[8]=t[n].big,r[10]=n,r}function ue(e,t){var n;return{key:e,first:null,c:function(){n=c("div"),m(n,"class","blip svelte-1w52k8y"),S(n,"lit",t[7]),S(n,"big",t[8]),this.first=n},m:function(e,t){b(e,n,t)},p:function(e,r){t=e,2&r&&S(n,"lit",t[7]),2&r&&S(n,"big",t[8])},d:function(e){e&&$(n)}}}function ce(e){for(var t,n,r=[],o=new Map,i=e[1],a=function(e){return e[10]},l=0;l<i.length;l+=1){var s=se(e,i,l),u=a(s);o.set(u,r[l]=ue(u,s))}return{c:function(){t=c("div");for(var n=0;n<r.length;n+=1)r[n].c();m(t,"class","timeline svelte-1w52k8y"),T((function(){return e[5].call(t)}))},m:function(o,i){b(o,t,i);for(var a=0;a<r.length;a+=1)r[a].m(t,null);n=P(t,e[5].bind(t))},p:function(e,n){var l=p(n,1)[0];2&l&&(i=e[1],r=j(r,l,a,1,e,i,o,t,M,ue,null,se))},i:x,o:x,d:function(e){e&&$(t);for(var o=0;o<r.length;o+=1)r[o].d();n()}}}function fe(e,t,n){var o,i,a=t.progress,l=void 0===a?0:a,s=t.playing,u=void 0!==s&&s,c=600;function f(e,t){var n,o=Math.floor(t*e);return(n=e,r(Array(n).keys())).map((function(e){return{lit:e<=o,big:u&&e==o}}))}return e.$$set=function(e){"progress"in e&&n(2,l=e.progress),"playing"in e&&n(3,u=e.playing)},e.$$.update=function(){1&e.$$.dirty&&n(4,o=8+Math.floor(c/25)),20&e.$$.dirty&&n(1,i=f(o,l))},[c,i,l,u,o,function(){c=this.clientWidth,n(0,c)}]}var de=function(e){l(n,e);var t=u(n);function n(e){var r;return a(this,n),r=t.call(this),o(f(r),e,fe,ce,s,{progress:2,playing:3}),r}return i(n)}(e);function pe(e){var t,n,r,o,i,a,l,s,u,f,d,p,v,g,y,k,w,x,C,z,S,T,P,j,M,N,O;return{c:function(){(t=c("h4")).textContent="Narration",n=h(),(r=c("p")).textContent="Benny Nemer, Shea Lime, Timothy Rainey II",o=h(),(i=c("h4")).textContent="Choral",a=h(),(l=c("p")).textContent="St. Olaf Chamber Singers, directed by Therees Tkach Hibbard",s=h(),(u=c("p")).textContent="Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.",f=h(),(d=c("h4")).textContent="Sound Design",p=h(),(v=c("p")).textContent="Johannes Malfatti",g=h(),(y=c("h4")).textContent="Narration Recording",k=h(),(w=c("p")).textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",x=h(),(C=c("h4")).textContent="Boe Chapel Choral Recording",z=h(),(S=c("p")).textContent="Jeffrey O’Donnell and Joshua Wyatt",T=h(),(P=c("p")).innerHTML='<em class="svelte-ux6lxf">Speech on the Occasion of Receiving the Literature Prize of the Free Hanseatic City of Bremen</em>, Paul Celan, 1958. \tTranslation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.',j=h(),(M=c("p")).innerHTML='<em class="svelte-ux6lxf">Blume</em>, Paul Celan, 1959. Translation Michael Hamburger, Poems of Paul Celan, New York, Persea, 1988.',N=h(),(O=c("p")).innerHTML='<em class="svelte-ux6lxf">Sprich auch du</em>, Paul Celan, 1955. Translation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.',m(t,"class","svelte-ux6lxf"),m(r,"class","svelte-ux6lxf"),m(i,"class","svelte-ux6lxf"),m(l,"class","svelte-ux6lxf"),m(u,"class","svelte-ux6lxf"),m(d,"class","svelte-ux6lxf"),m(v,"class","svelte-ux6lxf"),m(y,"class","svelte-ux6lxf"),m(w,"class","svelte-ux6lxf"),m(C,"class","svelte-ux6lxf"),m(S,"class","svelte-ux6lxf"),m(P,"class","svelte-ux6lxf"),m(M,"class","svelte-ux6lxf"),m(O,"class","svelte-ux6lxf")},m:function(e,c){b(e,t,c),b(e,n,c),b(e,r,c),b(e,o,c),b(e,i,c),b(e,a,c),b(e,l,c),b(e,s,c),b(e,u,c),b(e,f,c),b(e,d,c),b(e,p,c),b(e,v,c),b(e,g,c),b(e,y,c),b(e,k,c),b(e,w,c),b(e,x,c),b(e,C,c),b(e,z,c),b(e,S,c),b(e,T,c),b(e,P,c),b(e,j,c),b(e,M,c),b(e,N,c),b(e,O,c)},d:function(e){e&&$(t),e&&$(n),e&&$(r),e&&$(o),e&&$(i),e&&$(a),e&&$(l),e&&$(s),e&&$(u),e&&$(f),e&&$(d),e&&$(p),e&&$(v),e&&$(g),e&&$(y),e&&$(k),e&&$(w),e&&$(x),e&&$(C),e&&$(z),e&&$(S),e&&$(T),e&&$(P),e&&$(j),e&&$(M),e&&$(N),e&&$(O)}}}function he(e){var t,n,r,o,i,a,l,s,u,f,d,p,v,g,y,k,w,x,C;return{c:function(){(t=c("h4")).textContent="Narration",n=h(),(r=c("p")).textContent="Benny Nemer, Shae Lime, Timothy Rainey II",o=h(),(i=c("h4")).textContent="Interview",a=h(),(l=c("p")).textContent="Dianna Clise",s=h(),(u=c("h4")).textContent="Sound Design",f=h(),(d=c("p")).textContent="Johannes Malfatti",p=h(),(v=c("h4")).textContent="Narration Recording",g=h(),(y=c("p")).textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",k=h(),(w=c("h4")).textContent="Interview Recording",x=h(),(C=c("p")).textContent="Jim Loveland and Tyler Thomas",m(t,"class","svelte-ux6lxf"),m(r,"class","svelte-ux6lxf"),m(i,"class","svelte-ux6lxf"),m(l,"class","svelte-ux6lxf"),m(u,"class","svelte-ux6lxf"),m(d,"class","svelte-ux6lxf"),m(v,"class","svelte-ux6lxf"),m(y,"class","svelte-ux6lxf"),m(w,"class","svelte-ux6lxf"),m(C,"class","svelte-ux6lxf")},m:function(e,c){b(e,t,c),b(e,n,c),b(e,r,c),b(e,o,c),b(e,i,c),b(e,a,c),b(e,l,c),b(e,s,c),b(e,u,c),b(e,f,c),b(e,d,c),b(e,p,c),b(e,v,c),b(e,g,c),b(e,y,c),b(e,k,c),b(e,w,c),b(e,x,c),b(e,C,c)},d:function(e){e&&$(t),e&&$(n),e&&$(r),e&&$(o),e&&$(i),e&&$(a),e&&$(l),e&&$(s),e&&$(u),e&&$(f),e&&$(d),e&&$(p),e&&$(v),e&&$(g),e&&$(y),e&&$(k),e&&$(w),e&&$(x),e&&$(C)}}}function me(e){var t,n,r,o,i,a,l,s,u,f,d,p,v,g,y,k,w,x,C,z,S;return{c:function(){(t=c("h4")).textContent="Narration",n=h(),(r=c("p")).textContent="Benny Nemer, Shea Lime, Timothy Rainey II",o=h(),(i=c("h4")).textContent="Choral",a=h(),(l=c("p")).textContent="St. Olaf Chamber Singers, directed by Therees Tkach Hibbard",s=h(),(u=c("p")).textContent="Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.",f=h(),(d=c("h4")).textContent="Sound Design",p=h(),(v=c("p")).textContent="Johannes Malfatti",g=h(),(y=c("h4")).textContent="Narration Recording",k=h(),(w=c("p")).textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",x=h(),(C=c("h4")).textContent="Boe Chapel Choral Recording",z=h(),(S=c("p")).textContent="Jeffrey O’Donnell and Joshua Wyatt",m(t,"class","svelte-ux6lxf"),m(r,"class","svelte-ux6lxf"),m(i,"class","svelte-ux6lxf"),m(l,"class","svelte-ux6lxf"),m(u,"class","svelte-ux6lxf"),m(d,"class","svelte-ux6lxf"),m(v,"class","svelte-ux6lxf"),m(y,"class","svelte-ux6lxf"),m(w,"class","svelte-ux6lxf"),m(C,"class","svelte-ux6lxf"),m(S,"class","svelte-ux6lxf")},m:function(e,c){b(e,t,c),b(e,n,c),b(e,r,c),b(e,o,c),b(e,i,c),b(e,a,c),b(e,l,c),b(e,s,c),b(e,u,c),b(e,f,c),b(e,d,c),b(e,p,c),b(e,v,c),b(e,g,c),b(e,y,c),b(e,k,c),b(e,w,c),b(e,x,c),b(e,C,c),b(e,z,c),b(e,S,c)},d:function(e){e&&$(t),e&&$(n),e&&$(r),e&&$(o),e&&$(i),e&&$(a),e&&$(l),e&&$(s),e&&$(u),e&&$(f),e&&$(d),e&&$(p),e&&$(v),e&&$(g),e&&$(y),e&&$(k),e&&$(w),e&&$(x),e&&$(C),e&&$(z),e&&$(S)}}}function ve(e){var t;function n(e,t){return e[0]===te.Jane?me:e[0]===te.Dianna?he:e[0]===te.Paul?pe:void 0}var r=n(e),o=r&&r(e);return{c:function(){o&&o.c(),t=N()},m:function(e,n){o&&o.m(e,n),b(e,t,n)},p:function(e,i){p(i,1)[0];r!==(r=n(e))&&(o&&o.d(1),(o=r&&r(e))&&(o.c(),o.m(t.parentNode,t)))},i:x,o:x,d:function(e){o&&o.d(e),e&&$(t)}}}function ge(e,t,n){var r=t.piece;return e.$$set=function(e){"piece"in e&&n(0,r=e.piece)},[r]}var ye=function(e){l(n,e);var t=u(n);function n(e){var r;return a(this,n),r=t.call(this),o(f(r),e,ge,ve,s,{piece:0}),r}return i(n)}(e);function be(e,r){var o=r.reference,i=n(r,t),a=parseFloat(getComputedStyle(e).height.replace("px",""))-o;return{delay:i.delay||0,duration:i.duration||400,easing:i.easing||O,css:function(e,t){var n=o+a*e;return"opacity: ".concat(e,"; height: ").concat(n,"px;")}}}function ke(e,t){return{destroy:t}}var we=B.isNaN;function xe(e){var t,n,r,o,i,a,l,s;return n=new ye({props:{piece:e[0]}}),{c:function(){t=c("div"),F(n.$$.fragment),m(t,"class","text condensed svelte-1a5hr25"),S(t,"absolute",e[9])},m:function(o,i){b(o,t,i),W(n,t,null),a=!0,l||(s=E(r=ke.call(null,t,e[29])),l=!0)},p:function(o,i){e=o;var a={};1&i[0]&&(a.piece=e[0]),n.$set(a),r&&G(r.update)&&1024&i[0]&&r.update.call(null,e[29]),512&i[0]&&S(t,"absolute",e[9])},i:function(r){a||(D(n.$$.fragment,r),T((function(){i&&i.end(1),(o=K(t,be,{reference:e[8],delay:e[11],duration:ze,easing:_})).start()})),a=!0)},o:function(r){J(n.$$.fragment,r),o&&o.invalidate(),i=V(t,be,{reference:e[8],duration:e[12],easing:Y}),a=!1},d:function(e){e&&$(t),q(n),e&&i&&i.end(),l=!1,s()}}}function $e(e){var t,n,r,o,i,a,l,s,u,f,d,p,v,g,y,x;return n=new de({props:{progress:e[13],playing:e[6]}}),{c:function(){t=c("div"),F(n.$$.fragment),r=h(),o=c("div"),i=c("button"),a=h(),l=c("button"),u=h(),f=c("button"),m(i,"class","rew svelte-1a5hr25"),m(i,"title","rewind"),m(l,"class","play-pause svelte-1a5hr25"),m(l,"title",s=e[6]?"Pause":"Play"),S(l,"playing",e[6]),S(l,"waiting",e[7]),m(f,"class","ffw svelte-1a5hr25"),m(f,"title","fast forward"),m(o,"class","controls svelte-1a5hr25"),m(t,"class","svelte-1a5hr25"),S(t,"absolute",e[10])},m:function(s,c){b(s,t,c),W(n,t,null),k(t,r),k(t,o),k(o,i),k(o,a),k(o,l),k(o,u),k(o,f),e[27](t),g=!0,y||(x=[w(i,"click",e[16]),w(l,"click",e[14]),w(f,"click",e[15]),E(d=ke.call(null,t,e[28]))],y=!0)},p:function(r,o){e=r;var i={};8192&o[0]&&(i.progress=e[13]),64&o[0]&&(i.playing=e[6]),n.$set(i),(!g||64&o[0]&&s!==(s=e[6]?"Pause":"Play"))&&m(l,"title",s),64&o[0]&&S(l,"playing",e[6]),128&o[0]&&S(l,"waiting",e[7]),d&&G(d.update)&&512&o[0]&&d.update.call(null,e[28]),1024&o[0]&&S(t,"absolute",e[10])},i:function(r){g||(D(n.$$.fragment,r),T((function(){v&&v.end(1),(p=K(t,Q,{duration:e[11],delay:e[12]})).start()})),g=!0)},o:function(r){J(n.$$.fragment,r),p&&p.invalidate(),v=V(t,Q,{duration:e[11]}),g=!1},d:function(r){r&&$(t),q(n),e[27](null),r&&v&&v.end(),y=!1,H(x)}}}function Ce(e){var t,n,r,o,i,a,l,s,u,f,d,p,g,y,k=!1,x=!0;function C(){cancelAnimationFrame(r),t.paused||(r=L(C),k=!0),e[21].call(t)}var z=[$e,xe],S=[];function P(e,t){return e[1]?1:0}return u=P(e),f=S[u]=z[u](e),{c:function(){t=c("audio"),o=h(),i=c("img"),s=h(),f.c(),d=N(),v(t.src,n="audio/"+e[0]+".mp3")||m(t,"src",n),void 0===e[4]&&T((function(){return e[23].call(t)})),v(i.src,a="img/title-"+e[0]+".png")||m(i,"src",a),m(i,"alt",l=ne(e[0])),m(i,"class","title svelte-1a5hr25")},m:function(n,r){b(n,t,r),b(n,o,r),b(n,i,r),b(n,s,r),S[u].m(n,r),b(n,d,r),p=!0,g||(y=[w(t,"timeupdate",C),w(t,"play",e[22]),w(t,"pause",e[22]),w(t,"durationchange",e[23]),w(t,"waiting",e[24]),w(t,"canplay",e[25]),w(t,"ended",e[17]),w(i,"click",e[26])],g=!0)},p:function(e,r){(!p||1&r[0]&&!v(t.src,n="audio/"+e[0]+".mp3"))&&m(t,"src",n),!k&&4&r[0]&&!we(e[2])&&(t.currentTime=e[2]),k=!1,8&r[0]&&x!==(x=e[3])&&t[x?"pause":"play"](),(!p||1&r[0]&&!v(i.src,a="img/title-"+e[0]+".png"))&&m(i,"src",a),(!p||1&r[0]&&l!==(l=ne(e[0])))&&m(i,"alt",l);var o=u;(u=P(e))===o?S[u].p(e,r):(I(),J(S[o],1,1,(function(){S[o]=null})),A(),(f=S[u])?f.p(e,r):(f=S[u]=z[u](e)).c(),D(f,1),f.m(d.parentNode,d))},i:function(e){p||(D(f),p=!0)},o:function(e){J(f),p=!1},d:function(e){e&&$(t),e&&$(o),e&&$(i),e&&$(s),S[u].d(e),e&&$(d),g=!1,H(y)}}}var ze=800;function Se(e,t,n){var r,o,i,a,l=t.piece,s=t.isInView,u=!1;var c,f,d=0,p=!0,h=0,m=!1,v=null,g=null,y=!0,b=!1;function k(){var e=Math.max(d-5,0);window.localStorage.setItem(l,e.toString())}return e.$$set=function(e){"piece"in e&&n(0,l=e.piece),"isInView"in e&&n(18,s=e.isInView)},e.$$.update=function(){1&e.$$.dirty[0]&&(n(20,v=function(e){var t=parseFloat(window.localStorage.getItem(e));return isNaN(t)?null:t}(l)),n(3,p=!0),n(1,u=!1),function(e){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:ne(e),album:"The Making Known",artwork:[96,128,192,256,384,512].map((function(t){var n="".concat(t,"x").concat(t);return{src:"img/album-art/album-".concat(e,"-").concat(n,".jpeg"),sizes:n,type:"image/jpeg"}}))}))}(l)),8&e.$$.dirty[0]&&n(6,r=!p),1048596&e.$$.dirty[0]&&n(13,o=0==h?0:(null!=v?v:d)/h),64&e.$$.dirty[0]&&(r?(null!==v&&(n(2,d=v),n(20,v=null)),g=window.setInterval(k,2e3)):(g&&(window.clearInterval(g),g=null),k())),32&e.$$.dirty[0]&&c&&n(8,f=parseFloat(getComputedStyle(c).height.replace("px",""))),2&e.$$.dirty[0]&&(u||n(9,y=!0)),2&e.$$.dirty[0]&&u&&n(10,b=!0),262144&e.$$.dirty[0]&&n(12,i=s?600:0),262144&e.$$.dirty[0]&&n(11,a=s?300:0)},[l,u,d,p,h,c,r,m,f,y,b,a,i,o,function(){n(3,p=!p)},function(){n(2,d+=10),k()},function(){n(2,d-=10),k()},function(){window.setTimeout((function(){return n(1,u=!0)}),1e3)},s,function(){n(1,u=!1)},v,function(){d=this.currentTime,n(2,d)},function(){p=this.paused,n(3,p),n(0,l)},function(){h=this.duration,n(4,h)},function(){return n(7,m=!0)},function(){return n(7,m=!1)},function(){return n(1,u=!u)},function(e){R[e?"unshift":"push"]((function(){n(5,c=e)}))},function(){return n(9,y=!1)},function(){return n(10,b=!1)}]}var Te=function(e){l(n,e);var t=u(n);function n(e){var r;return a(this,n),r=t.call(this),o(f(r),e,Se,Ce,s,{piece:0,isInView:18,select:19},null,[-1,-1]),r}return i(n,[{key:"select",get:function(){return this.$$.ctx[19]}}]),n}(e);function Pe(e,t,n){var r=e.slice();return r[40]=t[n],r}function je(e){var t,n,r,o;return(t=new Z({props:{root:e[4],element:e[40],threshold:.96}})).$on("observe",(function(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e)[31].apply(t,[e[40]].concat(r))})),(r=new Z({props:{root:e[4],element:e[40],threshold:.8}})).$on("intersect",(function(){return e[32](e[40])})),{c:function(){F(t.$$.fragment),n=h(),F(r.$$.fragment)},m:function(e,i){W(t,e,i),b(e,n,i),W(r,e,i),o=!0},p:function(n,o){e=n;var i={};16&o[0]&&(i.root=e[4]),1024&o[0]&&(i.element=e[40]),t.$set(i);var a={};16&o[0]&&(a.root=e[4]),1024&o[0]&&(a.element=e[40]),r.$set(a)},i:function(e){o||(D(t.$$.fragment,e),D(r.$$.fragment,e),o=!0)},o:function(e){J(t.$$.fragment,e),J(r.$$.fragment,e),o=!1},d:function(e){q(t,e),e&&$(n),q(r,e)}}}function Me(e){var t,n,r,o,i,a;return{c:function(){t=c("button"),m(t,"class","arrow left side svelte-k6rp6z"),m(t,"title","back")},m:function(n,r){b(n,t,r),o=!0,i||(a=w(t,"click",e[16]),i=!0)},p:x,i:function(e){o||(T((function(){r&&r.end(1),(n=K(t,Q,{duration:400})).start()})),o=!0)},o:function(e){n&&n.invalidate(),r=V(t,Q,{duration:150}),o=!1},d:function(e){e&&$(t),e&&r&&r.end(),i=!1,a()}}}function Ne(e){var t,n,r,o,i,a;return{c:function(){t=c("button"),m(t,"class","arrow right side svelte-k6rp6z"),m(t,"title","forward")},m:function(n,r){b(n,t,r),o=!0,i||(a=w(t,"click",e[15]),i=!0)},p:x,i:function(e){o||(T((function(){r&&r.end(1),(n=K(t,Q,{duration:400})).start()})),o=!0)},o:function(e){n&&n.invalidate(),r=V(t,Q,{duration:150}),o=!1},d:function(e){e&&$(t),e&&r&&r.end(),i=!1,a()}}}function Oe(e){var t,n,r,o,i,a,l,s,u,f,d,p,v,g,y,x,z,T,P,j,M,N,O,B,L,R,E,G,K,_,V,Y,Q,U,X,Z,ee=e[11]&&[e[7],e[1],e[8]].includes(e[2]),ne=e[11]&&[e[6],e[1]].includes(e[2]);(x=new le({})).$on("select",e[18]);var re={piece:e[3]};P=new Te({props:re}),e[27](P);for(var oe=e[10],ie=[],ae=0;ae<oe.length;ae+=1)ie[ae]=je(Pe(e,oe,ae));var se=function(e){return J(ie[e],1,1,(function(){ie[e]=null}))},ue=ee&&Me(e),ce=ne&&Ne(e);return{c:function(){t=c("main"),(n=c("header")).innerHTML='<img class="title svelte-k6rp6z" src="img/title.png" alt="The Making Known"/>',r=h(),o=c("div"),i=c("div"),(a=c("p")).textContent="This is a narrated encounter with posters designed by the Nazi German government to\n        communicate with the occupied nations of Belgium, France, and Luxembourg during the\n        Second World War. The posters are part of the Tetlie Collection of WWII Propaganda\n        Posters at the Flaten Art Museum at St Olaf College in Northfield, Minnesota.",l=h(),(s=c("p")).textContent="The encounter takes form through three audio letters written by the artist to individuals of\n        relevance to the preservation and interpretation of the posters and their twenty-first century\n        meaning: a curator, a paper conservator, and a poet. Each letter lasts between fifteen and\n        twenty minutes.",u=h(),(f=c("p")).innerHTML="Please put on your headphones, turn off the ringer of your device, and when you are\n        ready, proceed to the menu to select one of the audio letters of <em>The Making Known</em>.",d=h(),p=c("p"),v=c("button"),g=h(),y=c("div"),F(x.$$.fragment),z=h(),T=c("div"),F(P.$$.fragment),j=h(),(M=c("div")).innerHTML='<div class="text"><p><em>The Making Known</em> was written and created by <a href="https://nemer.be" target="_blank">Benny Nemer</a>\n        to accompany a scenography of flowers, paper mobiles, and a selection of posters from the Tetlie\n        Collection, exhibited in a solo exhibition at the Flaten Art Museum at St Olaf College in the\n        winter of 2022. The project was commissioned by museum Director and Curator Jane\n        Becker Nelson with financial support from Institute of Museum and Library Services.\n        Website programming by Nikita Gaidakov.</p></div>',N=h(),O=c("div"),B=h(),L=c("div"),R=h(),E=c("div"),G=h(),K=c("div"),_=h();for(var b=0;b<ie.length;b+=1)ie[b].c();V=h(),ue&&ue.c(),Y=h(),ce&&ce.c(),Q=h(),m(n,"class","centred slide svelte-k6rp6z"),m(v,"class","arrow right inline svelte-k6rp6z"),m(v,"title","forward"),m(p,"class","centred svelte-k6rp6z"),m(i,"class","text"),m(o,"class","centred slide svelte-k6rp6z"),m(y,"class","centred slide svelte-k6rp6z"),m(T,"class","centred slide svelte-k6rp6z"),m(M,"class","centred slide svelte-k6rp6z"),m(O,"class","background default svelte-k6rp6z"),S(O,"show",[e[5],e[6],e[8],null].includes(e[2])),m(L,"class","background jane svelte-k6rp6z"),S(L,"show",e[12]&&e[3]===te.Jane),m(E,"class","background dianna svelte-k6rp6z"),S(E,"show",e[12]&&e[3]===te.Dianna),m(K,"class","background paul svelte-k6rp6z"),S(K,"show",e[12]&&e[3]===te.Paul),m(t,"class","carousel horizontal svelte-k6rp6z"),S(t,"snap",!e[0]||e[13])},m:function(c,h){b(c,t,h),k(t,n),e[23](n),k(t,r),k(t,o),k(o,i),k(i,a),k(i,l),k(i,s),k(i,u),k(i,f),k(i,d),k(i,p),k(p,v),e[25](o),k(t,g),k(t,y),W(x,y,null),e[26](y),k(t,z),k(t,T),W(P,T,null),e[28](T),k(t,j),k(t,M),e[29](M),k(t,N),k(t,O),k(t,B),k(t,L),k(t,R),k(t,E),k(t,G),k(t,K),e[30](t),b(c,_,h);for(var m=0;m<ie.length;m+=1)ie[m].m(c,h);b(c,V,h),ue&&ue.m(c,h),b(c,Y,h),ce&&ce.m(c,h),b(c,Q,h),U=!0,X||(Z=[w(v,"click",e[24]),w(document.body,"keydown",e[17])],X=!0)},p:function(e,n){var r={};if(8&n[0]&&(r.piece=e[3]),P.$set(r),356&n[0]&&S(O,"show",[e[5],e[6],e[8],null].includes(e[2])),4104&n[0]&&S(L,"show",e[12]&&e[3]===te.Jane),4104&n[0]&&S(E,"show",e[12]&&e[3]===te.Dianna),4104&n[0]&&S(K,"show",e[12]&&e[3]===te.Paul),8193&n[0]&&S(t,"snap",!e[0]||e[13]),525332&n[0]){var o;for(oe=e[10],o=0;o<oe.length;o+=1){var i=Pe(e,oe,o);ie[o]?(ie[o].p(i,n),D(ie[o],1)):(ie[o]=je(i),ie[o].c(),D(ie[o],1),ie[o].m(V.parentNode,V))}for(I(),o=oe.length;o<ie.length;o+=1)se(o);A()}2438&n[0]&&(ee=e[11]&&[e[7],e[1],e[8]].includes(e[2])),ee?ue?(ue.p(e,n),2438&n[0]&&D(ue,1)):((ue=Me(e)).c(),D(ue,1),ue.m(Y.parentNode,Y)):ue&&(I(),J(ue,1,1,(function(){ue=null})),A()),2118&n[0]&&(ne=e[11]&&[e[6],e[1]].includes(e[2])),ne?ce?(ce.p(e,n),2118&n[0]&&D(ce,1)):((ce=Ne(e)).c(),D(ce,1),ce.m(Q.parentNode,Q)):ce&&(I(),J(ce,1,1,(function(){ce=null})),A())},i:function(e){if(!U){D(x.$$.fragment,e),D(P.$$.fragment,e);for(var t=0;t<oe.length;t+=1)D(ie[t]);D(ue),D(ce),U=!0}},o:function(e){J(x.$$.fragment,e),J(P.$$.fragment,e),ie=ie.filter(Boolean);for(var t=0;t<ie.length;t+=1)J(ie[t]);J(ue),J(ce),U=!1},d:function(n){n&&$(t),e[23](null),e[25](null),q(x),e[26](null),e[27](null),q(P),e[28](null),e[29](null),e[30](null),n&&$(_),C(ie,n),n&&$(V),ue&&ue.d(n),n&&$(Y),ce&&ce.d(n),n&&$(Q),X=!1,H(Z)}}}function Ie(e,t,n){var r,o,i,a,l,s,u,c,f,d,p=$(),h=U(navigator.userAgent),m="ios"===h.os.name&&h.os.majorVersion<15||"safari"===h.browser.name&&h.browser.majorVersion<15,v=p||te.Jane,g=!1,y=!1,b=!1,k=!1,w=!0,x=[];function $(){switch(window.location.hash){case"#jane":return te.Jane;case"#dianna":return te.Dianna;case"#paul":return te.Paul;default:return null}}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.duration,o=void 0===r?800:r,a=t.delay,l=void 0===a?0:a;n(0,k=!0);var s=function(){return ee.scrollTo({container:i,element:e,duration:o,easing:_,scrollX:!0,scrollY:!1,onDone:function(){n(0,k=!1)}})};l?window.setTimeout(s,l):window.requestAnimationFrame(s)}function z(){T(1)}function S(){T(-1)}function T(e){if(null!==d){var t=x.indexOf(d),n=x[t+e];null!=n&&C(n)}}function P(e,t){var r=t.detail.isIntersecting;(b||e===a)&&(n(22,w=r),r||(b=!0))}X((function(){n(10,x=[a,l,s,u,c]),n(2,d=a),window.setTimeout((function(){return n(21,y=!0)}),2e3)})),window.onload=function(){return n(20,g=!0)},window.addEventListener("hashchange",(function(){n(3,v=$()||te.Jane)}));return e.$$.update=function(){6&e.$$.dirty[0]&&n(12,r=u&&d===u),4194309&e.$$.dirty[0]&&n(11,o=w&&!k&&null!=d),3145728&e.$$.dirty[0]&&g&&y&&(b||C(null!==p?u:l,{duration:1400}))},[k,u,d,v,i,a,l,s,c,f,x,o,r,m,C,z,S,function(e){"ArrowLeft"===e.key?(e.preventDefault(),S()):"ArrowRight"===e.key&&(e.preventDefault(),z())},function(){f.select(),C(u,{delay:150})},P,g,y,w,function(e){R[e?"unshift":"push"]((function(){n(5,a=e)}))},function(){return C(s)},function(e){R[e?"unshift":"push"]((function(){n(6,l=e)}))},function(e){R[e?"unshift":"push"]((function(){n(7,s=e)}))},function(e){R[e?"unshift":"push"]((function(){n(9,f=e)}))},function(e){R[e?"unshift":"push"]((function(){n(1,u=e)}))},function(e){R[e?"unshift":"push"]((function(){n(8,c=e)}))},function(e){R[e?"unshift":"push"]((function(){n(4,i=e)}))},function(e,t){return P(e,t)},function(e){return n(2,d=e)}]}new(function(e){l(n,e);var t=u(n);function n(e){var r;return a(this,n),r=t.call(this),o(f(r),e,Ie,Oe,s,{},null,[-1,-1]),r}return i(n)}(e))({target:document.body})}}}))}();
//# sourceMappingURL=index-legacy.40a710e6.js.map
