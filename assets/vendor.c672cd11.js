function x(){}const $=e=>e;function Re(e,t){for(const n in t)e[n]=t[n];return e}function _e(e){return e()}function le(){return Object.create(null)}function M(e){e.forEach(_e)}function q(e){return typeof e=="function"}function We(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let D;function yt(e,t){return D||(D=document.createElement("a")),D.href=t,e===D.href}function He(e){return Object.keys(e).length===0}function Xe(e,t,n,r){if(e){const s=ye(e,t,n,r);return e[0](s)}}function ye(e,t,n,r){return e[1]&&r?Re(n.ctx.slice(),e[1](r(t))):n.ctx}function Ye(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const i=[],u=Math.max(t.dirty.length,s.length);for(let w=0;w<u;w+=1)i[w]=t.dirty[w]|s[w];return i}return t.dirty|s}return t.dirty}function ze(e,t,n,r,s,i){if(s){const u=ye(t,n,r,i);e.p(u,s)}}function Fe(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function bt(e){return e==null?"":e}function pt(e){return e&&q(e.destroy)?e.destroy:x}const be=typeof window!="undefined";let j=be?()=>window.performance.now():()=>Date.now(),ee=be?e=>requestAnimationFrame(e):x;const E=new Set;function pe(e){E.forEach(t=>{t.c(e)||(E.delete(t),t.f())}),E.size!==0&&ee(pe)}function te(e){let t;return E.size===0&&ee(pe),{promise:new Promise(n=>{E.add(t={c:e,f:n})}),abort(){E.delete(t)}}}function ve(e,t){e.appendChild(t)}function ke(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function qe(e){const t=xe("style");return Ae(ke(e),t),t.sheet}function Ae(e,t){ve(e.head||e,t)}function vt(e,t,n){e.insertBefore(t,n||null)}function Se(e){e.parentNode.removeChild(e)}function kt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function xe(e){return document.createElement(e)}function Ne(e){return document.createTextNode(e)}function St(){return Ne(" ")}function xt(){return Ne("")}function fe(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Nt(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ke(e){return Array.from(e.childNodes)}function Ot(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let R;function Ue(){if(R===void 0){R=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{R=!0}}return R}function Et(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=xe("iframe");r.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),r.setAttribute("aria-hidden","true"),r.tabIndex=-1;const s=Ue();let i;return s?(r.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",i=fe(window,"message",u=>{u.source===r.contentWindow&&t()})):(r.src="about:blank",r.onload=()=>{i=fe(r.contentWindow,"resize",t)}),ve(e,r),()=>{(s||i&&r.contentWindow)&&i(),Se(r)}}function Mt(e,t,n){e.classList[n?"add":"remove"](t)}function Oe(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}const Y=new Map;let z=0;function Ge(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Je(e,t){const n={stylesheet:qe(t),rules:{}};return Y.set(e,n),n}function Ee(e,t,n,r,s,i,u,w=0){const h=16.666/r;let c=`{
`;for(let g=0;g<=1;g+=h){const d=t+(n-t)*i(g);c+=g*100+`%{${u(d,1-d)}}
`}const a=c+`100% {${u(n,1-n)}}
}`,o=`__svelte_${Ge(a)}_${w}`,l=ke(e),{stylesheet:f,rules:m}=Y.get(l)||Je(l,e);m[o]||(m[o]=!0,f.insertRule(`@keyframes ${o} ${a}`,f.cssRules.length));const _=e.style.animation||"";return e.style.animation=`${_?`${_}, `:""}${o} ${r}ms linear ${s}ms 1 both`,z+=1,o}function Q(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),s=n.length-r.length;s&&(e.style.animation=r.join(", "),z-=s,z||Qe())}function Qe(){ee(()=>{z||(Y.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),Y.clear())})}let V;function P(e){V=e}function ne(){if(!V)throw new Error("Function called outside component initialization");return V}function Ze(e){ne().$$.on_mount.push(e)}function $e(e){ne().$$.after_update.push(e)}function je(){const e=ne();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const s=Oe(t,n);r.slice().forEach(i=>{i.call(e,s)})}}}const B=[],ce=[],H=[],ue=[],Me=Promise.resolve();let Z=!1;function Ce(){Z||(Z=!0,Me.then(Te))}function et(){return Ce(),Me}function L(e){H.push(e)}const J=new Set;let W=0;function Te(){const e=V;do{for(;W<B.length;){const t=B[W];W++,P(t),tt(t.$$)}for(P(null),B.length=0,W=0;ce.length;)ce.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];J.has(n)||(J.add(n),n())}H.length=0}while(B.length);for(;ue.length;)ue.pop()();Z=!1,J.clear(),P(e)}function tt(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}let T;function Be(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function F(e,t,n){e.dispatchEvent(Oe(`${t?"intro":"outro"}${n}`))}const X=new Set;let N;function Ct(){N={r:0,c:[],p:N}}function Tt(){N.r||M(N.c),N=N.p}function re(e,t){e&&e.i&&(X.delete(e),e.i(t))}function nt(e,t,n,r){if(e&&e.o){if(X.has(e))return;X.add(e),N.c.push(()=>{X.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const Pe={duration:0};function Bt(e,t,n){let r=t(e,n),s=!1,i,u,w=0;function h(){i&&Q(e,i)}function c(){const{delay:o=0,duration:l=300,easing:f=$,tick:m=x,css:_}=r||Pe;_&&(i=Ee(e,0,1,l,o,f,_,w++)),m(0,1);const g=j()+o,d=g+l;u&&u.abort(),s=!0,L(()=>F(e,!0,"start")),u=te(b=>{if(s){if(b>=d)return m(1,0),F(e,!0,"end"),h(),s=!1;if(b>=g){const k=f((b-g)/l);m(k,1-k)}}return s})}let a=!1;return{start(){a||(a=!0,Q(e),q(r)?(r=r(),Be().then(c)):c())},invalidate(){a=!1},end(){s&&(h(),s=!1)}}}function Pt(e,t,n){let r=t(e,n),s=!0,i;const u=N;u.r+=1;function w(){const{delay:h=0,duration:c=300,easing:a=$,tick:o=x,css:l}=r||Pe;l&&(i=Ee(e,1,0,c,h,a,l));const f=j()+h,m=f+c;L(()=>F(e,!1,"start")),te(_=>{if(s){if(_>=m)return o(0,1),F(e,!1,"end"),--u.r||M(u.c),!1;if(_>=f){const g=a((_-f)/c);o(1-g,g)}}return s})}return q(r)?Be().then(()=>{r=r(),w()}):w(),{end(h){h&&r.tick&&r.tick(1,0),s&&(i&&Q(e,i),s=!1)}}}const Vt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Lt(e,t){e.d(1),t.delete(e.key)}function It(e,t,n,r,s,i,u,w,h,c,a,o){let l=e.length,f=i.length,m=l;const _={};for(;m--;)_[e[m].key]=m;const g=[],d=new Map,b=new Map;for(m=f;m--;){const y=o(s,i,m),p=n(y);let v=u.get(p);v?r&&v.p(y,t):(v=c(p,y),v.c()),d.set(p,g[m]=v),p in _&&b.set(p,Math.abs(m-_[p]))}const k=new Set,I=new Set;function C(y){re(y,1),y.m(w,a),u.set(y.key,y),a=y.first,f--}for(;l&&f;){const y=g[f-1],p=e[l-1],v=y.key,O=p.key;y===p?(a=y.first,l--,f--):d.has(O)?!u.has(v)||k.has(v)?C(y):I.has(O)?l--:b.get(v)>b.get(O)?(I.add(v),C(y)):(k.add(O),l--):(h(p,u),l--)}for(;l--;){const y=e[l];d.has(y.key)||h(y,u)}for(;f;)C(g[f-1]);return g}function Dt(e){e&&e.c()}function rt(e,t,n,r){const{fragment:s,on_mount:i,on_destroy:u,after_update:w}=e.$$;s&&s.m(t,n),r||L(()=>{const h=i.map(_e).filter(q);u?u.push(...h):M(h),e.$$.on_mount=[]}),w.forEach(L)}function st(e,t){const n=e.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,t){e.$$.dirty[0]===-1&&(B.push(e),Ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function it(e,t,n,r,s,i,u,w=[-1]){const h=V;P(e);const c=e.$$={fragment:null,ctx:null,props:i,update:x,not_equal:s,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:le(),dirty:w,skip_bound:!1,root:t.target||h.$$.root};u&&u(c.root);let a=!1;if(c.ctx=n?n(e,t.props||{},(o,l,...f)=>{const m=f.length?f[0]:l;return c.ctx&&s(c.ctx[o],c.ctx[o]=m)&&(!c.skip_bound&&c.bound[o]&&c.bound[o](m),a&&ot(e,o)),l}):[],c.update(),a=!0,M(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const o=Ke(t.target);c.fragment&&c.fragment.l(o),o.forEach(Se)}else c.fragment&&c.fragment.c();t.intro&&re(e.$$.fragment),rt(e,t.target,t.anchor,t.customElement),Te()}P(h)}class at{$destroy(){st(this,1),this.$destroy=x}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!He(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function lt(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function Rt(e){const t=e-1;return t*t*t+1}function Wt(e){return e<.5?8*Math.pow(e,4):-8*Math.pow(e-1,4)+1}function Ht(e,{delay:t=0,duration:n=400,easing:r=$}={}){const s=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:i=>`opacity: ${i*s}`}}const de=e=>typeof e=="string"?document.querySelector(e):e,A=(...e)=>Object.assign({},...e),me=e=>{let t=0,n=0;do t+=e.offsetTop||0,n+=e.offsetLeft||0,e=e.offsetParent;while(e);return{top:t,left:n}},Ve=e=>e&&e!==document&&e!==document.body,he=(e,t)=>{const n=t!==void 0;return Ve(e)?n?e.scrollTop=t:e.scrollTop:n?document.documentElement.scrollTop=document.body.scrollTop=t:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},ge=(e,t)=>{const n=t!==void 0;return Ve(e)?n?e.scrollLeft=t:e.scrollLeft:n?document.documentElement.scrollLeft=document.body.scrollLeft=t:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0},Le={container:"body",duration:500,delay:0,offset:0,easing:lt,onStart:x,onDone:x,onAborting:x,scrollX:!1,scrollY:!0},se=e=>{const{duration:t,delay:n,easing:r,x:s=0,y:i=0,scrollX:u,scrollY:w,onStart:h,onDone:c,container:a,onAborting:o,element:l}=e;let{offset:f}=e;typeof f=="function"&&(f=f());const m=me(a),_=l?me(l):{top:i,left:s},g=ge(a),d=he(a),b=_.left-m.left+f,k=_.top-m.top+f,I=b-g,C=k-d;let y=!0,p=!1;const v=j()+n,O=v+t;function De(S,U,G){u&&ge(S,G),w&&he(S,U)}function ie(S){S||(p=!0,h(l,{x:s,y:i}))}function K(S){De(a,d+C*S,g+I*S)}function ae(){y=!1}return te(S=>{if(!p&&S>=v&&ie(!1),p&&S>=O&&(K(1),ae(),c(l,{x:s,y:i})),!y)return o(l,{x:s,y:i}),!1;if(p){const U=S-v,G=0+1*r(U/t);K(G)}return!0}),ie(n),K(0),ae},oe=e=>{const t=A({},Le,e);return t.container=de(t.container),t.element=de(t.element),t},ft=e=>{if(e&&e!==document&&e!==document.body)return e.scrollHeight-e.offsetHeight;const{body:t}=document,n=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)},ct=e=>{A(Le,e||{})},ut=e=>se(oe(e)),dt=e=>(e=oe(e),se(A(e,{element:null,y:ft(e.container)}))),mt=e=>(e=oe(e),se(A(e,{element:null,y:0}))),Xt={scrollTo:ut,scrollToTop:mt,scrollToBottom:dt,setGlobalOptions:ct},ht=e=>({intersecting:e&1,entry:e&2,observer:e&4}),we=e=>({intersecting:e[0],entry:e[1],observer:e[2]});function gt(e){let t;const n=e[9].default,r=Xe(n,e,e[8],we);return{c(){r&&r.c()},m(s,i){r&&r.m(s,i),t=!0},p(s,[i]){r&&r.p&&(!t||i&263)&&ze(r,n,s,s[8],t?Ye(n,s[8],i,ht):Fe(s[8]),we)},i(s){t||(re(r,s),t=!0)},o(s){nt(r,s),t=!1},d(s){r&&r.d(s)}}}function wt(e,t,n){let{$$slots:r={},$$scope:s}=t,{element:i=null}=t,{once:u=!1}=t,{intersecting:w=!1}=t,{root:h=null}=t,{rootMargin:c="0px"}=t,{threshold:a=0}=t,{entry:o=null}=t,{observer:l=null}=t;const f=je();let m=null,_=null;const g=()=>{n(2,l=new IntersectionObserver(d=>{d.forEach(b=>{n(1,o=b),n(0,w=b.isIntersecting)})},{root:h,rootMargin:c,threshold:a}))};return Ze(()=>(g(),()=>{l&&(l.disconnect(),n(2,l=null))})),$e(async()=>{o!==null&&(f("observe",o),o.isIntersecting&&(f("intersect",o),u&&l.unobserve(i))),await et(),i!==null&&i!==_&&(l.observe(i),_!==null&&l.unobserve(_),_=i),m&&c!==m&&(l.disconnect(),_=null,g()),m=c}),e.$$set=d=>{"element"in d&&n(3,i=d.element),"once"in d&&n(4,u=d.once),"intersecting"in d&&n(0,w=d.intersecting),"root"in d&&n(5,h=d.root),"rootMargin"in d&&n(6,c=d.rootMargin),"threshold"in d&&n(7,a=d.threshold),"entry"in d&&n(1,o=d.entry),"observer"in d&&n(2,l=d.observer),"$$scope"in d&&n(8,s=d.$$scope)},[w,o,l,i,u,h,c,a,s,r]}class Yt extends at{constructor(t){super();it(this,t,wt,gt,We,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}var _t=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ie={exports:{}};/*!
 * Sniffer is a clientside browser/engine/os/device detection tool
 * v. 4.1.0 | https://github.com/wilddeer/Sniffer
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */(function(e){(function(t){var n=function(r){var s={browser:{fullName:"",name:"",version:"",majorVersion:null,minorVersion:null,patchVersion:null,engine:""},os:{fullName:"",name:"",version:"",versionName:"",versionAltNames:[],majorVersion:null,minorVersion:null,patchVersion:null},features:{bw:!1,mobile:!1,tv:!1,proxy:!1}},i={browser:[{test:["SailfishBrowser"],browser:{fullName:"Sailfish Browser",name:"sailfishbrowser",engine:"gecko",$version:{search:"SailfishBrowser/"}},features:{mobile:!0}},{test:["Edge/"],browser:{fullName:"Edge",name:"edge",engine:"edgehtml",$version:{search:"Edge/"}}},{test:["Edg/"],browser:{fullName:"Edge",name:"edge",engine:"webkit",$version:{search:"Edg/"}}},{test:["MSIE"],browser:{fullName:"Internet Explorer",name:"ie",engine:"trident",$version:{search:"MSIE "}}},{test:["Trident"],browser:{fullName:"Internet Explorer",name:"ie",engine:"trident",$version:{search:"rv:"}}},{test:["OPR/"],browser:{fullName:"Opera",name:"opera",engine:"webkit",$version:{search:"OPR/"}}},{test:["UCBrowser"],browser:{fullName:"UC Browser",name:"ucbrowser",engine:"webkit",$version:{search:"UCBrowser/"}}},{test:["YaBrowser"],browser:{fullName:"Yandex Browser",name:"yabrowser",engine:"webkit",$version:{search:"YaBrowser/"}}},{test:["Chrome"],browser:{fullName:"Chrome",name:"chrome",engine:"webkit",$version:{search:"Chrome/"}}},{test:["Firefox"],browser:{fullName:"Firefox",name:"firefox",engine:"gecko",$version:{search:"Firefox/"}}},{test:["NokiaBrowser"],browser:{fullName:"Nokia Browser",name:"nokiabrowser",engine:"webkit",$version:{search:"NokiaBrowser/"}},features:{mobile:!0}},{test:["Opera Mini","Presto"],browser:{fullName:"Opera Mini",name:"operamini",engine:"presto",$version:{search:"Version/"}},features:{mobile:!0,proxy:!0}},{test:["Opera Mini","WebKit"],browser:{fullName:"Opera Mini",name:"operamini",engine:"webkit"},features:{mobile:!0,proxy:!0}},{test:["Opera"],browser:{fullName:"Opera",name:"opera",engine:"presto",$version:{search:"Version/"}}},{test:["OviBrowser"],browser:{fullName:"Ovi Browser",name:"ovi",engine:"gecko",$version:{search:"OviBrowser/"}},features:{mobile:!0,proxy:!0}},{test:["CriOS/"],browser:{fullName:"Chrome",name:"chrome",engine:"webkit",$version:{search:"CriOS/"}}},{test:["Coast/"],browser:{fullName:"Opera Coast",name:"coast",engine:"webkit",$version:{search:"Coast/"}}},{test:["Safari","Version/",/(iPhone|iPod|iPad|Macintosh|Windows)/],browser:{fullName:"Safari",name:"safari",engine:"webkit",$version:{search:"Version/"}}},{test:["WebKit"],browser:{engine:"webkit"}},{test:["Gecko/"],browser:{engine:"gecko"}}],os:[{test:["Sailfish"],os:{fullName:"Sailfish OS",name:"sailfish"},features:{mobile:!0}},{test:["Windows Phone"],os:{fullName:"Windows Phone",name:"winphone",$version:{search:"Windows Phone "}},features:{mobile:!0}},{test:["Windows"],os:{fullName:"Windows",name:"win",$version:{search:"Windows NT ",names:{"10.0":"10","6.3":"8.1","6.2":"8","6.1":"7","6.0":"Vista","5.2":"XP","5.1":"XP","5.01":"2000","5.0":"2000"},altNames:{"5.2":["Server 2003"]}}}},{test:["Macintosh","OS X"],os:{fullName:"macOS",name:"osx",$version:{search:/OS X /,names:{"10.6":"Snow Leopard","10.7":"Lion","10.8":"Mountain Lion","10.9":"Mavericks","10.10":"Yosemite","10.11":"El Capitan","10.12":"Sierra","10.13":"High Sierra","10.14":"Mojave","10.15":"Catalina","11.0":"Big Sur"}}}},{test:["Ubuntu"],os:{fullName:"Ubuntu",name:"ubuntu"}},{test:["Fedora"],os:{fullName:"Fedora",name:"fedora",$version:{search:"Fedora/",names:{"20":"Heisenbug","19":"Schr\xF6dinger's Cat","18":"Spherical Cow","17":"Beefy Miracle","16":"Verne","15":"Lovelock","14":"Laughlin","13":"Goddard","12":"Constantine","11":"Leonidas","10":"Cambridge","9":"Sulphur","8":"Werewolf","7":"Moonshine"}}}},{test:["Kindle"],os:{fullName:"Kindle",name:"kindle",$version:{search:"Kindle/"}},features:{bw:!0,mobile:!0}},{test:[/(BlackBerry|BB\d+)/],os:{fullName:"BlackBerry",name:"blackberry",$version:{search:"Version/"}},features:{mobile:!0}},{test:["Symbian"],os:{fullName:"Symbian",name:"symbian"},features:{mobile:!0}},{test:["Series40"],os:{fullName:"Symbian",name:"symbian"},features:{mobile:!0}},{test:["PlayStation Vita"],os:{fullName:"PlayStation Vita",name:"psvita"},features:{mobile:!0}},{test:[/playstation/i],os:{fullName:"PlayStation",name:"playstation",$version:{search:/playstation\s/i}},features:{tv:!0}},{test:["Nintendo DSi"],os:{fullName:"Nintendo DSi",name:"dsi"},features:{mobile:!0}},{test:["New Nintendo 3DS"],os:{fullName:"New Nintendo 3DS",name:"n3ds"},browser:{engine:"webkit"},features:{mobile:!0}},{test:["Nintendo 3DS"],os:{fullName:"Nintendo 3DS",name:"3ds"},browser:{engine:"webkit"},features:{mobile:!0}},{test:["Viera"],os:{fullName:"Viera",name:"viera"},browser:{engine:"webkit"},features:{tv:!0}},{test:["SonyDTV"],features:{tv:!0}},{test:["Android"],os:{fullName:"Android",name:"android",$version:{search:"Android "}},features:{mobile:!0}},{test:[/iPhone|iPod|iPad/],os:{fullName:"iOS",name:"ios",$version:{search:"OS "}},features:{mobile:!0}}],features:[{test:[/mobile/i],features:{mobile:!0}},{test:[/smart-{0,1}tv/i],features:{tv:!0}}]};if(!r)return s;function u(){for(var a in i)w(i[a])}function w(a){for(var o=0;o<a.length;o++){for(var l=!0,f=0;f<a[o].test.length;f++)if(a[o].test[f]instanceof RegExp){if(!a[o].test[f].test(r)){l=!1;break}}else if(r.indexOf(a[o].test[f])==-1){l=!1;break}if(l){h(a[o]);break}}}function h(a){for(var o in i)if(i.hasOwnProperty(o)&&a[o]){if(a[o].$version){var l=c(a[o].$version.search);if(l){var f=l.split("."),m=a[o].$version.names,_=a[o].$version.altNames;if(a[o].version=l,f[0]&&(a[o].majorVersion=parseInt(f[0])),f[1]&&(a[o].minorVersion=parseInt(f[1])),f[2]&&(a[o].patchVersion=parseInt(f[2])),m)for(var g,d=[],b=0;b<f.length;b++)d.push(f[b]),g=d.join("."),m[g]&&(a[o].versionName=m[g]),_&&_[g]&&(a[o].versionAltNames=_[g])}}for(var k in a[o])a[o].hasOwnProperty(k)&&k[0]!=="$"&&(s[o][k]=a[o][k])}}function c(a){var o;if(a instanceof RegExp){if(o=(r.match(a)||[])[0],!o)return}else o=a;var l=r.indexOf(o);if(l!=-1){var f=r.substring(l+o.length),m=/^(\d+(\.|_)){0,2}\d+/.exec(f);if(!!m)return m[0].replace(/_/g,".")}}return u(),s};e.exports?e.exports=n:t.Sniffer=n})(_t)})(Ie);var zt=Ie.exports;export{re as A,M as B,Vt as C,ee as D,ce as E,Dt as F,rt as G,pt as H,q as I,Bt as J,Wt as K,Pt as L,lt as M,st as N,Ht as O,zt as P,Ze as Q,Yt as R,at as S,Xt as T,St as a,Nt as b,yt as c,Ot as d,xe as e,vt as f,ve as g,x as h,it as i,Se as j,kt as k,fe as l,je as m,bt as n,Mt as o,L as p,Et as q,Lt as r,We as s,Ne as t,It as u,xt as v,Rt as w,Ct as x,nt as y,Tt as z};
//# sourceMappingURL=vendor.c672cd11.js.map
