!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["reference"];function n(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function r(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=document.createElement("style");h.innerHTML="@font-face{font-family:GaramondBT;src:url(/making-known/font/OriginalGaramondBT-Roman.otf);font-style:normal;font-weight:300 500}@font-face{font-family:GaramondBT;src:url(/making-known/font/OriginalGaramondBT-Italic.otf);font-style:italic;font-weight:300 500}@font-face{font-family:GaramondBT;src:url(/making-known/font/OriginalGaramondBT-BoldItalic.otf);font-style:italic;font-weight:600 800}body{font-family:GaramondBT,serif,system-ui,-apple-system,-apple-system-font}html,body{margin:0;height:100%;overflow:hidden}body{-webkit-touch-callout:none;-webkit-user-select:text;--text-color: #ffebb1;color:var(--text-color);background:url(./assets/bg-main.058fa9e6.jpeg) no-repeat 95% 75%;background-size:cover;font-size:calc(12pt + 1.25vmin)}.text{width:80%;max-width:700px;max-height:85%;padding-right:.6em;line-height:1.3em;overflow-y:auto;-webkit-overflow-scrolling:touch}.text p{margin-block:.8em}p:first-child{-webkit-margin-after:1.2em;margin-block-end:1.2em}p:last-child{-webkit-margin-after:0;margin-block-end:0}a{color:var(--text-color);text-decoration-thickness:1px;text-underline-offset:.3ex}button{-webkit-tap-highlight-color:transparent;font-size:100%;border:0;outline:0;padding:0;height:1.5em;width:1.75em;color:transparent;background:transparent no-repeat scroll;background-size:contain;transition:opacity 80ms ease-in .1s;cursor:pointer}button:active{transition:none;opacity:.5}ul.svelte-gj5g15{list-style:none;line-height:2em}li.svelte-gj5g15{transform:translate(calc((var(--i) - 1) * .6em))}.timeline.svelte-1w52k8y{transform:rotate(-5deg);height:30px;width:12em;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.blip.svelte-1w52k8y{border-radius:100%;height:5px;width:5px;background-color:rgba(103,108,113,.88);transition-property:background-color,height,width;transition-duration:.3s;transition-timing-function:ease-out}.blip.lit.svelte-1w52k8y{background-color:rgba(233,233,203,.8)}.blip.big.svelte-1w52k8y{height:9px;width:9px}.svelte-1v8qv43.svelte-1v8qv43{text-align:center}h4.svelte-1v8qv43.svelte-1v8qv43{font-size:1.2em;line-height:1em;-webkit-margin-after:.6em;margin-block-end:.6em;font-style:italic}h4.svelte-1v8qv43+p.svelte-1v8qv43{-webkit-margin-before:1ex;margin-block-start:1ex}.controls.svelte-k78tc5{margin-top:1em;display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:12.5em}.title.svelte-k78tc5{height:7em;cursor:pointer;margin-bottom:.7em}.text.condensed.svelte-k78tc5{height:60%;will-change:opacity,height}.absolute.svelte-k78tc5{position:absolute}button.play-pause.svelte-k78tc5{width:8em;height:2.5em;background-image:url(./assets/play-pause.d8a623cd.png);background-size:100% auto}button.play-pause.playing.svelte-k78tc5{background-position:50% 100%}.play-pause.playing.waiting.svelte-k78tc5{-webkit-animation:svelte-k78tc5-throb 2.3s infinite;animation:svelte-k78tc5-throb 2.3s infinite}@-webkit-keyframes svelte-k78tc5-throb{0%{opacity:1}50%{opacity:0}to{opacity:1}}@keyframes svelte-k78tc5-throb{0%{opacity:1}50%{opacity:0}to{opacity:1}}button.ffw.svelte-k78tc5{background-image:url(./assets/ffw.e1a27f76.png);opacity:.85;margin-bottom:.7em}button.rew.svelte-k78tc5{background-image:url(./assets/rew.ff414925.png);opacity:.85;margin-top:.7em}.carousel.svelte-1yjfy5u.svelte-1yjfy5u{height:100%;width:100%;overflow:auto;display:flex}.carousel.horizontal.svelte-1yjfy5u.svelte-1yjfy5u{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;flex-direction:row}.centred.svelte-1yjfy5u.svelte-1yjfy5u{display:flex;flex-direction:column;align-items:center;justify-content:center}.slide.svelte-1yjfy5u.svelte-1yjfy5u{flex:none;height:100%;width:100%}.carousel.snap.svelte-1yjfy5u>.slide.svelte-1yjfy5u{scroll-snap-stop:always;scroll-snap-align:center}.title.svelte-1yjfy5u.svelte-1yjfy5u{max-height:70%;max-width:90%}.background.svelte-1yjfy5u.svelte-1yjfy5u{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background-size:cover;opacity:0;transition:opacity .3s ease-out;will-change:opacity}.background.show.svelte-1yjfy5u.svelte-1yjfy5u{opacity:1}.background.red.svelte-1yjfy5u.svelte-1yjfy5u{background:#a6241d}.background.jane.svelte-1yjfy5u.svelte-1yjfy5u{background-image:url(./assets/bg-jane.2cfd9804.jpeg);background-position:32% 0}.background.dianna.svelte-1yjfy5u.svelte-1yjfy5u{background-image:url(./assets/bg-dianna.7f4365b6.jpeg);background-position:80% 80%}.background.paul.svelte-1yjfy5u.svelte-1yjfy5u{background-image:url(./assets/bg-paul.231944fb.jpeg);background-position:0 0}button.arrow.svelte-1yjfy5u.svelte-1yjfy5u{width:5em}button.arrow.right.svelte-1yjfy5u.svelte-1yjfy5u{background-image:url(./assets/forward.b8cbbaa0.png)}button.inline.svelte-1yjfy5u.svelte-1yjfy5u{margin-top:.6em}\n",document.head.appendChild(h),System.register(["./vendor-legacy.a3e07c51.js"],(function(){"use strict";var e,a,s,u,v,y,p,h,m,g,b,w,k,x,j,C,$,S,P,T,q,M,N,O,I,J,D,A,H,B,R,L,F,W,z,E,G,_,K,V,Y,Q,U,X,Z,ee;return{setters:[function(t){e=t.S,a=t.i,s=t.s,u=t.e,v=t.t,y=t.a,p=t.b,h=t.c,m=t.d,g=t.f,b=t.l,w=t.n,k=t.g,x=t.h,j=t.j,C=t.k,$=t.m,S=t.o,P=t.u,T=t.p,q=t.q,M=t.r,N=t.v,O=t.w,I=t.x,J=t.y,D=t.z,A=t.A,H=t.B,B=t.C,R=t.D,L=t.E,F=t.F,W=t.G,z=t.H,E=t.I,G=t.J,_=t.K,K=t.L,V=t.M,Y=t.N,Q=t.O,U=t.P,X=t.Q,Z=t.R,ee=t.T}],execute:function(){var te=function(e){return e[e.Text=0]="Text",e[e.Menu=1]="Menu",e[e.Player=2]="Player",e}(te||{}),ne=function(e){return e.Jane="jane",e.Dianna="dianna",e.Paul="paul",e}(ne||{});function re(e){switch(e){case"jane":return"Dear Jane";case"dianna":return"Dear Dianna";case"paul":return"Dear Paul"}}function ae(e,t,n){var r=e.slice();return r[2]=t[n],r[4]=n,r}function oe(e){var t,n,r,a,o,i,l,s,c,f=e[4]+1+"",d=re(e[2])+"";return{c:function(){t=u("li"),n=u("a"),r=v("No. "),a=v(f),o=y(),i=v(d),l=y(),p(n,"href","#"+e[2]),h(t,"--i",e[4]),p(t,"class","svelte-gj5g15")},m:function(u,f){m(u,t,f),g(t,n),g(n,r),g(n,a),g(n,o),g(n,i),g(t,l),s||(c=b(n,"click",e[0]),s=!0)},p:w,d:function(e){e&&k(t),s=!1,c()}}}function ie(e){for(var t,n=[ne.Jane,ne.Dianna,ne.Paul],r=[],a=0;a<3;a+=1)r[a]=oe(ae(e,n,a));return{c:function(){t=u("ul");for(var e=0;e<3;e+=1)r[e].c();p(t,"class","svelte-gj5g15")},m:function(e,n){m(e,t,n);for(var a=0;a<3;a+=1)r[a].m(t,null)},p:function(e,a){var o=d(a,1)[0];if(1&o){var i;for(n=[ne.Jane,ne.Dianna,ne.Paul],i=0;i<3;i+=1){var l=ae(e,n,i);r[i]?r[i].p(l,o):(r[i]=oe(l),r[i].c(),r[i].m(t,null))}for(;i<3;i+=1)r[i].d(1)}},i:w,o:w,d:function(e){e&&k(t),x(r,e)}}}function le(e){var t=j();return[function(){t("select")}]}var se=function(e){l(n,e);var t=c(n);function n(e){var r;return i(this,n),r=t.call(this),a(f(r),e,le,ie,s,{}),r}return o(n)}(e);function ce(e,t,n){var r=e.slice();return r[7]=t[n].lit,r[8]=t[n].big,r[10]=n,r}function ue(e,t){var n;return{key:e,first:null,c:function(){n=u("div"),p(n,"class","blip svelte-1w52k8y"),C(n,"lit",t[7]),C(n,"big",t[8]),this.first=n},m:function(e,t){m(e,n,t)},p:function(e,r){t=e,2&r&&C(n,"lit",t[7]),2&r&&C(n,"big",t[8])},d:function(e){e&&k(n)}}}function fe(e){for(var t,n,r=[],a=new Map,o=e[1],i=function(e){return e[10]},l=0;l<o.length;l+=1){var s=ce(e,o,l),c=i(s);a.set(c,r[l]=ue(c,s))}return{c:function(){t=u("div");for(var n=0;n<r.length;n+=1)r[n].c();p(t,"class","timeline svelte-1w52k8y"),$((function(){return e[5].call(t)}))},m:function(a,o){m(a,t,o);for(var i=0;i<r.length;i+=1)r[i].m(t,null);n=S(t,e[5].bind(t))},p:function(e,n){var l=d(n,1)[0];2&l&&(o=e[1],r=P(r,l,i,1,e,o,a,t,T,ue,null,ce))},i:w,o:w,d:function(e){e&&k(t);for(var a=0;a<r.length;a+=1)r[a].d();n()}}}function ve(e,t,n){var a,o,i=t.progress,l=void 0===i?0:i,s=t.playing,c=void 0!==s&&s,u=600;function f(e,t){var n,a=Math.floor(t*e);return(n=e,r(Array(n).keys())).map((function(e){return{lit:e<=a,big:c&&e==a}}))}return e.$$set=function(e){"progress"in e&&n(2,l=e.progress),"playing"in e&&n(3,c=e.playing)},e.$$.update=function(){1&e.$$.dirty&&n(4,a=8+Math.floor(u/25)),20&e.$$.dirty&&n(1,o=f(a,l))},[u,o,l,c,a,function(){u=this.clientWidth,n(0,u)}]}var de=function(e){l(n,e);var t=c(n);function n(e){var r;return i(this,n),r=t.call(this),a(f(r),e,ve,fe,s,{progress:2,playing:3}),r}return o(n)}(e);function ye(e){var t,n,r,a,o,i,l,s,c,f,v,d,h,g,b,w,x,j,C,$,S,P,T,q,M,N,O;return{c:function(){(t=u("h4")).textContent="Narration",n=y(),(r=u("p")).textContent="Benny Nemer, Shea Lime, Timothy Rainey II",a=y(),(o=u("h4")).textContent="Choral",i=y(),(l=u("p")).textContent="St. Olaf Chamber Singers, directed by Therees Tkach Hibbard",s=y(),(c=u("p")).textContent="Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.",f=y(),(v=u("h4")).textContent="Sound Design",d=y(),(h=u("p")).textContent="Johannes Malfatti",g=y(),(b=u("h4")).textContent="Narration Recording",w=y(),(x=u("p")).textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",j=y(),(C=u("h4")).textContent="Boe Chapel Choral Recording",$=y(),(S=u("p")).textContent="Jeffrey O’Donnell and Joshua Wyatt",P=y(),(T=u("p")).innerHTML='<em class="svelte-1v8qv43">Speech on the Occasion of Receiving the Literature Prize of the Free Hanseatic City of Bremen</em>, Paul Celan, 1958. \tTranslation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.',q=y(),(M=u("p")).innerHTML='<em class="svelte-1v8qv43">Blume</em>, Paul Celan, 1959. Translation Michael Hamburger, Poems of Paul Celan, New York, Persea, 1988.',N=y(),(O=u("p")).innerHTML='<em class="svelte-1v8qv43">Sprich auch du</em>, Paul Celan, 1955. Translation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.',p(t,"class","svelte-1v8qv43"),p(r,"class","svelte-1v8qv43"),p(o,"class","svelte-1v8qv43"),p(l,"class","svelte-1v8qv43"),p(c,"class","svelte-1v8qv43"),p(v,"class","svelte-1v8qv43"),p(h,"class","svelte-1v8qv43"),p(b,"class","svelte-1v8qv43"),p(x,"class","svelte-1v8qv43"),p(C,"class","svelte-1v8qv43"),p(S,"class","svelte-1v8qv43"),p(T,"class","svelte-1v8qv43"),p(M,"class","svelte-1v8qv43"),p(O,"class","svelte-1v8qv43")},m:function(e,u){m(e,t,u),m(e,n,u),m(e,r,u),m(e,a,u),m(e,o,u),m(e,i,u),m(e,l,u),m(e,s,u),m(e,c,u),m(e,f,u),m(e,v,u),m(e,d,u),m(e,h,u),m(e,g,u),m(e,b,u),m(e,w,u),m(e,x,u),m(e,j,u),m(e,C,u),m(e,$,u),m(e,S,u),m(e,P,u),m(e,T,u),m(e,q,u),m(e,M,u),m(e,N,u),m(e,O,u)},d:function(e){e&&k(t),e&&k(n),e&&k(r),e&&k(a),e&&k(o),e&&k(i),e&&k(l),e&&k(s),e&&k(c),e&&k(f),e&&k(v),e&&k(d),e&&k(h),e&&k(g),e&&k(b),e&&k(w),e&&k(x),e&&k(j),e&&k(C),e&&k($),e&&k(S),e&&k(P),e&&k(T),e&&k(q),e&&k(M),e&&k(N),e&&k(O)}}}function pe(e){var t,n,r,a,o,i,l,s,c,f,v,d,h,g,b,w,x,j,C;return{c:function(){(t=u("h4")).textContent="Narration",n=y(),(r=u("p")).textContent="Benny Nemer, Shea Lime, Timothy Rainey II",a=y(),(o=u("h4")).textContent="Interview",i=y(),(l=u("p")).textContent="Dianna Clise",s=y(),(c=u("h4")).textContent="Sound Design",f=y(),(v=u("p")).textContent="Johannes Malfatti",d=y(),(h=u("h4")).textContent="Narration Recording",g=y(),(b=u("p")).textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",w=y(),(x=u("h4")).textContent="Interview Recording",j=y(),(C=u("p")).textContent="Jim Loveland and Tyler Thomas",p(t,"class","svelte-1v8qv43"),p(r,"class","svelte-1v8qv43"),p(o,"class","svelte-1v8qv43"),p(l,"class","svelte-1v8qv43"),p(c,"class","svelte-1v8qv43"),p(v,"class","svelte-1v8qv43"),p(h,"class","svelte-1v8qv43"),p(b,"class","svelte-1v8qv43"),p(x,"class","svelte-1v8qv43"),p(C,"class","svelte-1v8qv43")},m:function(e,u){m(e,t,u),m(e,n,u),m(e,r,u),m(e,a,u),m(e,o,u),m(e,i,u),m(e,l,u),m(e,s,u),m(e,c,u),m(e,f,u),m(e,v,u),m(e,d,u),m(e,h,u),m(e,g,u),m(e,b,u),m(e,w,u),m(e,x,u),m(e,j,u),m(e,C,u)},d:function(e){e&&k(t),e&&k(n),e&&k(r),e&&k(a),e&&k(o),e&&k(i),e&&k(l),e&&k(s),e&&k(c),e&&k(f),e&&k(v),e&&k(d),e&&k(h),e&&k(g),e&&k(b),e&&k(w),e&&k(x),e&&k(j),e&&k(C)}}}function he(e){var t,n,r,a,o,i,l,s,c,f,v,d,h,g,b,w,x,j,C,$,S;return{c:function(){(t=u("h4")).textContent="Narration",n=y(),(r=u("p")).textContent="Benny Nemer, Shea Lime, Timothy Rainey II",a=y(),(o=u("h4")).textContent="Choral",i=y(),(l=u("p")).textContent="St. Olaf Chamber Singers, directed by Therees Tkach Hibbard",s=y(),(c=u("p")).textContent="Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.",f=y(),(v=u("h4")).textContent="Sound Design",d=y(),(h=u("p")).textContent="Johannes Malfatti",g=y(),(b=u("h4")).textContent="Narration Recording",w=y(),(x=u("p")).textContent="Julien Creus (Paris), Douglas Hamilton (Northfield)",j=y(),(C=u("h4")).textContent="Boe Chapel Choral Recording",$=y(),(S=u("p")).textContent="Jeffrey O’Donnell and Joshua Wyatt",p(t,"class","svelte-1v8qv43"),p(r,"class","svelte-1v8qv43"),p(o,"class","svelte-1v8qv43"),p(l,"class","svelte-1v8qv43"),p(c,"class","svelte-1v8qv43"),p(v,"class","svelte-1v8qv43"),p(h,"class","svelte-1v8qv43"),p(b,"class","svelte-1v8qv43"),p(x,"class","svelte-1v8qv43"),p(C,"class","svelte-1v8qv43"),p(S,"class","svelte-1v8qv43")},m:function(e,u){m(e,t,u),m(e,n,u),m(e,r,u),m(e,a,u),m(e,o,u),m(e,i,u),m(e,l,u),m(e,s,u),m(e,c,u),m(e,f,u),m(e,v,u),m(e,d,u),m(e,h,u),m(e,g,u),m(e,b,u),m(e,w,u),m(e,x,u),m(e,j,u),m(e,C,u),m(e,$,u),m(e,S,u)},d:function(e){e&&k(t),e&&k(n),e&&k(r),e&&k(a),e&&k(o),e&&k(i),e&&k(l),e&&k(s),e&&k(c),e&&k(f),e&&k(v),e&&k(d),e&&k(h),e&&k(g),e&&k(b),e&&k(w),e&&k(x),e&&k(j),e&&k(C),e&&k($),e&&k(S)}}}function me(e){var t;function n(e,t){return e[0]===ne.Jane?he:e[0]===ne.Dianna?pe:e[0]===ne.Paul?ye:void 0}var r=n(e),a=r&&r(e);return{c:function(){a&&a.c(),t=q()},m:function(e,n){a&&a.m(e,n),m(e,t,n)},p:function(e,o){d(o,1)[0];r!==(r=n(e))&&(a&&a.d(1),(a=r&&r(e))&&(a.c(),a.m(t.parentNode,t)))},i:w,o:w,d:function(e){a&&a.d(e),e&&k(t)}}}function ge(e,t,n){var r=t.piece;return e.$$set=function(e){"piece"in e&&n(0,r=e.piece)},[r]}var be=function(e){l(n,e);var t=c(n);function n(e){var r;return i(this,n),r=t.call(this),a(f(r),e,ge,me,s,{piece:0}),r}return o(n)}(e);function we(e,r){var a=r.reference,o=n(r,t),i=parseFloat(getComputedStyle(e).height.replace("px",""))-a;return{delay:o.delay||0,duration:o.duration||400,easing:o.easing||M,css:function(e,t){var n=a+i*e;return"opacity: ".concat(e,"; height: ").concat(n,"px;")}}}function ke(e,t){return{destroy:t}}var xe=H.isNaN;function je(e){var t,n,r,a,o,i,l,s;return n=new be({props:{piece:e[0]}}),{c:function(){t=u("div"),L(n.$$.fragment),p(t,"class","text condensed svelte-k78tc5"),C(t,"absolute",e[9])},m:function(a,o){m(a,t,o),F(n,t,null),i=!0,l||(s=W(r=ke.call(null,t,e[29])),l=!0)},p:function(a,o){e=a;var i={};1&o[0]&&(i.piece=e[0]),n.$set(i),r&&z(r.update)&&1024&o[0]&&r.update.call(null,e[29]),512&o[0]&&C(t,"absolute",e[9])},i:function(r){i||(D(n.$$.fragment,r),$((function(){o&&o.end(1),(a=E(t,we,{reference:e[8],delay:e[11],duration:Se,easing:G})).start()})),i=!0)},o:function(r){I(n.$$.fragment,r),a&&a.invalidate(),o=_(t,we,{reference:e[8],duration:e[12],easing:K}),i=!1},d:function(e){e&&k(t),V(n),e&&o&&o.end(),l=!1,s()}}}function Ce(e){var t,n,r,a,o,i,l,s,c,f,d,h,w,x,j,S,P=e[6]?"Pause":"Play";return n=new de({props:{progress:e[14],playing:e[6]}}),{c:function(){t=u("div"),L(n.$$.fragment),r=y(),a=u("div"),(o=u("button")).textContent="Rewind",i=y(),l=u("button"),s=v(P),c=y(),(f=u("button")).textContent="Fast forward",p(o,"class","rew svelte-k78tc5"),p(l,"class","play-pause svelte-k78tc5"),C(l,"playing",e[6]),C(l,"waiting",e[7]),p(f,"class","ffw svelte-k78tc5"),p(a,"class","controls svelte-k78tc5"),p(t,"class","svelte-k78tc5"),C(t,"absolute",e[10])},m:function(u,v){m(u,t,v),F(n,t,null),g(t,r),g(t,a),g(a,o),g(a,i),g(a,l),g(l,s),g(a,c),g(a,f),e[27](t),x=!0,j||(S=[b(o,"click",e[17]),b(l,"click",e[15]),b(f,"click",e[16]),W(d=ke.call(null,t,e[28]))],j=!0)},p:function(r,a){e=r;var o={};16384&a[0]&&(o.progress=e[14]),64&a[0]&&(o.playing=e[6]),n.$set(o),(!x||64&a[0])&&P!==(P=e[6]?"Pause":"Play")&&Y(s,P),64&a[0]&&C(l,"playing",e[6]),128&a[0]&&C(l,"waiting",e[7]),d&&z(d.update)&&512&a[0]&&d.update.call(null,e[28]),1024&a[0]&&C(t,"absolute",e[10])},i:function(r){x||(D(n.$$.fragment,r),$((function(){w&&w.end(1),(h=E(t,Q,{duration:e[11],delay:e[12]})).start()})),x=!0)},o:function(r){I(n.$$.fragment,r),h&&h.invalidate(),w=_(t,Q,{duration:e[11]}),x=!1},d:function(r){r&&k(t),V(n),e[27](null),r&&w&&w.end(),j=!1,A(S)}}}function $e(e){var t,n,r,a,o,i,l,s,c,f,v,d,h,g,w=!1,x=!0;function j(){cancelAnimationFrame(r),t.paused||(r=B(j),w=!0),e[20].call(t)}var C=[Ce,je],S=[];function P(e,t){return e[1]?1:0}return c=P(e),f=S[c]=C[c](e),{c:function(){t=u("audio"),a=y(),o=u("img"),s=y(),f.c(),v=q(),N(t.src,n="/making-known/audio/"+e[0]+".mp3")||p(t,"src",n),void 0===e[4]&&$((function(){return e[22].call(t)})),N(o.src,i=e[13])||p(o,"src",i),p(o,"alt",l=re(e[0])),p(o,"class","title svelte-k78tc5")},m:function(n,r){m(n,t,r),m(n,a,r),m(n,o,r),m(n,s,r),S[c].m(n,r),m(n,v,r),d=!0,h||(g=[b(t,"timeupdate",j),b(t,"play",e[21]),b(t,"pause",e[21]),b(t,"durationchange",e[22]),b(t,"waiting",e[23]),b(t,"canplay",e[24]),b(t,"ended",e[25]),b(o,"click",e[26])],h=!0)},p:function(e,r){(!d||1&r[0]&&!N(t.src,n="/making-known/audio/"+e[0]+".mp3"))&&p(t,"src",n),!w&&4&r[0]&&!xe(e[2])&&(t.currentTime=e[2]),w=!1,8&r[0]&&x!==(x=e[3])&&t[x?"pause":"play"](),(!d||8192&r[0]&&!N(o.src,i=e[13]))&&p(o,"src",i),(!d||1&r[0]&&l!==(l=re(e[0])))&&p(o,"alt",l);var a=c;(c=P(e))===a?S[c].p(e,r):(O(),I(S[a],1,1,(function(){S[a]=null})),J(),(f=S[c])?f.p(e,r):(f=S[c]=C[c](e)).c(),D(f,1),f.m(v.parentNode,v))},i:function(e){d||(D(f),d=!0)},o:function(e){I(f),d=!1},d:function(e){e&&k(t),e&&k(a),e&&k(o),e&&k(s),S[c].d(e),e&&k(v),h=!1,A(g)}}}var Se=800;function Pe(e,t,n){var r,a,o,i,l,s,c,u=t.piece,f=t.isInView,v=!1,d=0,y=!0,p=0,h=!1,m=null,g=null,b=!0,w=!1;function k(){window.localStorage.setItem(u,d.toString())}return e.$$set=function(e){"piece"in e&&n(0,u=e.piece),"isInView"in e&&n(18,f=e.isInView)},e.$$.update=function(){1&e.$$.dirty[0]&&(n(19,m=function(e){var t=parseFloat(window.localStorage.getItem(e));return isNaN(t)?null:t}(u)),n(3,y=!0),n(1,v=!1)),8&e.$$.dirty[0]&&n(6,r=!y),524308&e.$$.dirty[0]&&n(14,a=0==p?0:(null!=m?m:d)/p),1&e.$$.dirty[0]&&n(13,o=function(e){switch(e){case ne.Jane:return"./assets/title-jane.42cf81d7.png";case ne.Dianna:return"./assets/title-dianna.d61fe826.png";case ne.Paul:return"./assets/title-paul.b29e4aea.png"}}(u)),64&e.$$.dirty[0]&&(r?(null!==m&&(n(2,d=m),n(19,m=null)),g=window.setInterval(k,1e3)):g&&(window.clearInterval(g),g=null)),32&e.$$.dirty[0]&&s&&n(8,c=parseFloat(getComputedStyle(s).height.replace("px",""))),2&e.$$.dirty[0]&&(v||n(9,b=!0)),2&e.$$.dirty[0]&&v&&n(10,w=!0),262144&e.$$.dirty[0]&&n(12,i=f?600:0),262144&e.$$.dirty[0]&&n(11,l=f?300:0)},[u,v,d,y,p,s,r,h,c,b,w,l,i,o,a,function(){n(3,y=!y)},function(){n(2,d+=10),k()},function(){n(2,d-=10),k()},f,m,function(){d=this.currentTime,n(2,d)},function(){y=this.paused,n(3,y),n(0,u)},function(){p=this.duration,n(4,p)},function(){return n(7,h=!0)},function(){return n(7,h=!1)},function(){return window.setTimeout((function(){return n(1,v=!0)}),1e3)},function(){return n(1,v=!v)},function(e){R[e?"unshift":"push"]((function(){n(5,s=e)}))},function(){return n(9,b=!1)},function(){return n(10,w=!1)}]}var Te=function(e){l(n,e);var t=c(n);function n(e){var r;return i(this,n),r=t.call(this),a(f(r),e,Pe,$e,s,{piece:0,isInView:18},null,[-1,-1]),r}return o(n)}(e);function qe(e){var t,n,r,a,o,i,l,s,c,f,v,h,w,x,j,$,S,P,T,q,M,O,J,H,B,R,z,E,G,_,K,Y,Q;return(S=new se({})).$on("select",e[18]),q=new Te({props:{piece:e[1],isInView:e[0]===te.Player}}),{c:function(){t=u("main"),n=u("header"),r=u("img"),a=y(),o=u("div"),i=u("div"),(l=u("p")).textContent="This is a narrated encounter with posters designed by the Nazi German government to\n        communicate with the occupied nations of Belgium, France, and Luxembourg during the\n        Second World War. The posters are part of the Tetlie Collection of WWII Propaganda\n        Posters at the Flaten Art Museum at St Olaf College in Northfield, Minnesota.",s=y(),(c=u("p")).textContent="The encounter takes form through three audio letters written by the artist to individuals of\n        relevance to the preservation and interpretation of the posters and their twenty-first century\n        meaning: a curator, a paper conservator, and a poet. Each letter lasts between fifteen and\n        twenty minutes.",f=y(),(v=u("p")).innerHTML="Please put on your headphones, turn off the ringer of your device, and when you are\n        ready, proceed to the menu to select one of the audio letters of <em>The Making Known</em>.",h=y(),w=u("p"),(x=u("button")).textContent="Forward",j=y(),$=u("div"),L(S.$$.fragment),P=y(),T=u("div"),L(q.$$.fragment),M=y(),(O=u("div")).innerHTML='<div class="text"><p><em>The Making Known</em> was written and created by <a href="https://nemer.be" target="_blank">Benny Nemer</a>\n        to accompany a scenography of flowers, paper mobiles, and a selection of posters from the Tetlie\n        Collection, exhibited in a solo exhibition at the Flaten Art Museum at St Olaf College in the\n        winter of 2022. The project was commissioned by museum Director and Curator Jane\n        Becker Nelson with financial support from Institute of Museum and Library Services.\n        Website programming by Nikita Gaidakov.</p></div>',J=y(),H=u("div"),B=y(),R=u("div"),z=y(),E=u("div"),G=y(),_=u("div"),p(r,"class","title svelte-1yjfy5u"),N(r.src,"./assets/title.32c1d342.png")||p(r,"src","./assets/title.32c1d342.png"),p(r,"alt","The Making Known"),p(n,"class","centred slide svelte-1yjfy5u"),p(x,"class","arrow right inline svelte-1yjfy5u"),p(w,"class","centred svelte-1yjfy5u"),p(i,"class","text"),p(o,"class","centred slide svelte-1yjfy5u"),p($,"class","centred slide svelte-1yjfy5u"),p(T,"class","centred slide svelte-1yjfy5u"),p(O,"class","centred slide svelte-1yjfy5u"),p(H,"class","background red svelte-1yjfy5u"),C(H,"show",e[0]===te.Menu),p(R,"class","background jane svelte-1yjfy5u"),C(R,"show",e[0]===te.Player&&e[1]===ne.Jane),p(E,"class","background dianna svelte-1yjfy5u"),C(E,"show",e[0]===te.Player&&e[1]===ne.Dianna),p(_,"class","background paul svelte-1yjfy5u"),C(_,"show",e[0]===te.Player&&e[1]===ne.Paul),p(t,"class","carousel horizontal svelte-1yjfy5u"),C(t,"snap",!e[3])},m:function(u,d){m(u,t,d),g(t,n),g(n,r),g(t,a),g(t,o),g(o,i),g(i,l),g(i,s),g(i,c),g(i,f),g(i,v),g(i,h),g(i,w),g(w,x),e[17](o),g(t,j),g(t,$),F(S,$,null),e[19]($),g(t,P),g(t,T),F(q,T,null),e[20](T),g(t,M),g(t,O),g(t,J),g(t,H),g(t,B),g(t,R),g(t,z),g(t,E),g(t,G),g(t,_),e[21](t),K=!0,Y||(Q=[W(e[8].call(null,n)),b(n,"leave",e[15]),b(x,"click",e[16]),W(e[8].call(null,o)),b(o,"enter",e[9]),W(e[8].call(null,$)),b($,"enter",e[11]),W(e[8].call(null,T)),b(T,"enter",e[10]),W(e[8].call(null,O)),b(O,"enter",e[9]),W(e[8].call(null,t)),b(t,"enter",e[9])],Y=!0)},p:function(e,n){var r=d(n,1)[0],a={};2&r&&(a.piece=e[1]),1&r&&(a.isInView=e[0]===te.Player),q.$set(a),1&r&&C(H,"show",e[0]===te.Menu),3&r&&C(R,"show",e[0]===te.Player&&e[1]===ne.Jane),3&r&&C(E,"show",e[0]===te.Player&&e[1]===ne.Dianna),3&r&&C(_,"show",e[0]===te.Player&&e[1]===ne.Paul),8&r&&C(t,"snap",!e[3])},i:function(e){K||(D(S.$$.fragment,e),D(q.$$.fragment,e),K=!0)},o:function(e){I(S.$$.fragment,e),I(q.$$.fragment,e),K=!1},d:function(n){n&&k(t),e[17](null),V(S),e[19](null),V(q),e[20](null),e[21](null),Y=!1,A(Q)}}}function Me(e,t,n){var r,a,o,i,l=m(),s=U(navigator.userAgent),c="ios"===s.os.name&&s.os.majorVersion<15||"safari"===s.browser.name&&s.browser.majorVersion<15,u=te.Text,f=l||ne.Jane,v=!1,d=!1,y=!1,p=!1,h=null;function m(){switch(window.location.hash){case"#jane":return ne.Jane;case"#dianna":return ne.Dianna;case"#paul":return ne.Paul;default:return null}}X((function(){return window.setTimeout((function(){return n(14,d=!0)}),2e3)})),window.onload=function(){return n(13,v=!0)},window.addEventListener("hashchange",(function(){n(1,f=m()||ne.Jane)}));function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800;h=e,c||n(3,p=!0),window.requestAnimationFrame((function(){return ee.scrollTo({container:r,element:e,duration:t,easing:G,scrollX:!0,scrollY:!1,onDone:function(){h=null,n(3,p=!1)}})}))}return e.$$.update=function(){24576&e.$$.dirty&&v&&d&&(y||g(null!==l?i:a,1400))},[u,f,y,p,r,a,o,i,function(e){return Z(e,{threshold:.8})},function(){return n(0,u=te.Text)},function(){return n(0,u=te.Player)},function(){p&&h!==o||n(0,u=te.Menu)},g,v,d,function(){return n(2,y=!0)},function(){return g(o)},function(e){R[e?"unshift":"push"]((function(){n(5,a=e)}))},function(){return g(i)},function(e){R[e?"unshift":"push"]((function(){n(6,o=e)}))},function(e){R[e?"unshift":"push"]((function(){n(7,i=e)}))},function(e){R[e?"unshift":"push"]((function(){n(4,r=e)}))}]}new(function(e){l(n,e);var t=c(n);function n(e){var r;return i(this,n),r=t.call(this),a(f(r),e,Me,qe,s,{}),r}return o(n)}(e))({target:document.body})}}}))}();
//# sourceMappingURL=index-legacy.2299c478.js.map
