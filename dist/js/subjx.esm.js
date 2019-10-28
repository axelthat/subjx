const t={passive:!1},e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},o=window.cancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)},s=Array.prototype.forEach,n=Array.prototype.slice,r=Array.prototype.map,a=Array.prototype.reduce,i=console.warn;function c(t){return null!=t}function l(t){return null==t}function h(t){return"function"==typeof t}class u{constructor(t){if("string"==typeof t){let e=document.querySelectorAll(t);this.length=e.length;for(let t=0;t<this.length;t++)this[t]=e[t]}else if("object"!=typeof t||1!==t.nodeType&&t!==document)if(t instanceof u){this.length=t.length;for(let e=0;e<this.length;e++)this[e]=t[e]}else{if(!c(e=t)||"object"!=typeof e||!(Array.isArray(e)||c(window.Symbol)&&"function"==typeof e[window.Symbol.iterator]||c(e.forEach)||"number"==typeof e.length&&(0===e.length||e.length>0&&e.length-1 in e)))throw new Error("Passed parameter must be selector/element/elementArray");this.length=0;for(let e=0;e<this.length;e++)1===t.nodeType&&(this[e]=t[e],this.length++)}else this[0]=t,this.length=1;var e}css(t){const e={setStyle(t){return((t,e)=>{let o=t.length;for(;o--;)for(let s in e)t[o].style[s]=e[s];return t.style})(this,t)},getStyle(){return(e=>{let o=e.length;for(;o--;)return e[o].currentStyle?e[o].currentStyle[t]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e[o],"")[t]:e[o].style[t]})(this)}};return"string"==typeof t?e.getStyle.apply(this,n.call(arguments,1)):"object"!=typeof t&&t?(i(`Method ${t} does not exist`),!1):e.setStyle.apply(this,arguments)}find(t){let e,o=this.length;for(;o--;)return p(e=this[o].querySelectorAll(t))}each(t){const e=n.call(this,0);for(let o=e.length-1;o>=0;--o){const s=()=>e[o];t.call(s())}return this}on(){let t=this.length;for(;t--;)this[t].events||(this[t].events={},this[t].events[arguments[0]]=[]),"string"!=typeof arguments[1]?document.addEventListener?this[t].addEventListener(arguments[0],arguments[1],arguments[2]):document.attachEvent?this[t].attachEvent(`on${arguments[0]}`,arguments[1]):this[t][`on${arguments[0]}`]=arguments[1]:d(this[t],arguments[0],arguments[1],arguments[2],arguments[3],!0);return this}off(){let t=this.length;for(;t--;)this[t].events||(this[t].events={},this[t].events[arguments[0]]=[]),"string"!=typeof arguments[1]?document.removeEventListener?this[t].removeEventListener(arguments[0],arguments[1],arguments[2]):document.detachEvent?this[t].detachEvent(`on${arguments[0]}`,arguments[1]):this[t][`on${arguments[0]}`]=null:d(this[t],arguments[0],arguments[1],arguments[2],arguments[3],!1);return this}is(t){const e=p(t);let o=this.length;for(;o--;)if(this[o]===e[o])return!0;return!1}}function d(t,e,o,s,n,r){const a=function(t){let e=t.target;for(;e&&e!==this;)e.matches(o)&&s.call(e,t),e=e.parentNode};!0===r?document.addEventListener?t.addEventListener(e,a,n||!1):document.attachEvent?t.attachEvent(`on${e}`,a):t[`on${e}`]=a:document.removeEventListener?t.removeEventListener(e,a,n||!1):document.detachEvent?t.detachEvent(`on${e}`,a):t[`on${e}`]=null}function p(t){return new u(t)}class f{constructor(){this.observers={}}subscribe(t,e){const o=this.observers;return l(o[t])&&Object.defineProperty(o,t,{value:[]}),o[t].push(e),this}unsubscribe(t,e){const o=this.observers;if(c(o[t])){const s=o[t].indexOf(e);o[t].splice(s,1)}return this}notify(t,e,o){l(this.observers[t])||this.observers[t].forEach(s=>{if(e!==s)switch(t){case"onmove":s.notifyMove(o);break;case"onrotate":s.notifyRotate(o);break;case"onresize":s.notifyResize(o);break;case"onapply":s.notifyApply(o);break;case"ongetstate":s.notifyGetState(o)}})}}function x(t){return t.getBoundingClientRect()}function y(t){return t.css("-webkit-transform")||t.css("-moz-transform")||t.css("-ms-transform")||t.css("-o-transform")||t.css("transform")||"none"}function m(t){const e=t.match(/-?\d+\.?\d+|-?\d+/g);return e?e.map(t=>parseFloat(t)):[1,0,0,1,0,0]}function b(t,e){if(e){if(t.classList){if(!(e.indexOf(" ")>-1))return t.classList.add(e);e.split(/\s+/).forEach(e=>t.classList.add(e))}return t}}function g(t,e){if(e){if(t.classList){if(!(e.indexOf(" ")>-1))return t.classList.remove(e);e.split(/\s+/).forEach(e=>t.classList.remove(e))}return t}}const v=Math.PI/180;function _(t,e){if(0===e)return t;{const o=function(t,e){return 0===e?t:Math.round(t/e)*e}(t,e);if(o-t<e)return o}}function M(t,e,o,s,n,r,a,i,c){const l=parseFloat(o)/2,h=parseFloat(s)/2,u=t+l,d=e+h,p=t-u,f=e-d,x=Math.atan2(i?0:f,c?0:p)+n,y=Math.sqrt(Math.pow(c?0:l,2)+Math.pow(i?0:h,2));let m=Math.cos(x),b=Math.sin(x);const g=d+y*(b=!0===a?-b:b);return{left:w(u+y*(m=!0===r?-m:m)),top:w(g)}}function w(t,e=6){return Number(t.toFixed(e))}class E{constructor(t,e){if(this.constructor===E)throw new TypeError("Cannot construct Subject instances directly");this.el=t,this.storage=null,this.proxyMethods=null,this.observable=e,this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._animate=this._animate.bind(this)}enable(t){l(this.storage)?(this._processOptions(t),this._init(this.el)):i("Already enabled")}disable(){const{storage:e,proxyMethods:o,el:s}=this;l(e)||(e.onExecution&&(this._end(),p(document).off("mousemove",this._onMouseMove).off("mouseup",this._onMouseUp).off("touchmove",this._onTouchMove,t).off("touchend",this._onTouchEnd,t)),g(s,"sjx-drag"),this._destroy(),this.unsubscribe(),o.onDestroy.call(this,s),delete this.storage)}_init(){throw Error("'_init()' method not implemented")}_destroy(){throw Error("'_destroy()' method not implemented")}_cursorPoint(){throw Error("'_cursorPoint()' method not implemented")}_drag(){this._processMove(...arguments),this.proxyMethods.onMove.call(this,...arguments)}_rotate(){this._processRotate(...arguments),this.proxyMethods.onRotate.call(this,...arguments)}_resize(){this._processResize(...arguments),this.proxyMethods.onResize.call(this,...arguments)}_processOptions(t){const{el:e}=this;b(e,"sjx-drag");const o={x:10,y:10,angle:10*v},s={move:!1,resize:!1,rotate:!1};let n=null,r=!1,a="xy",i="auto",h="auto",u="auto",d="#00a8ff",f=!1,x=()=>{},y=()=>{},m=()=>{},g=()=>{},_=()=>{},M=()=>{},w=e.parentNode;if(c(t)){const{snap:b,each:E,axis:j,cursorMove:V,cursorResize:k,cursorRotate:A,rotationPoint:C,restrict:S,onInit:D,onDrop:R,onMove:N,onResize:z,onRotate:X,onDestroy:Y,container:P,proportions:B,themeColor:$}=t;if(c(b)){const{x:t,y:e,angle:s}=b;o.x=l(t)?10:t,o.y=l(e)?10:e,o.angle=l(s)?o.angle:s*v}if(c(E)){const{move:t,resize:e,rotate:o}=E;s.move=t||!1,s.resize=e||!1,s.rotate=o||!1}c(S)&&(n="parent"===S?e.parentNode:p(S)[0]||document),d=$||"#00a8ff",i=V||"auto",h=k||"auto",u=A||"auto",a=j||"xy",w=c(P)&&p(P)[0]?p(P)[0]:w,f=C||!1,r=B||!1,x=T(D),_=T(R),y=T(N),g=T(z),m=T(X),M=T(Y),x.call(this,e)}this.options={axis:a,themeColor:d,cursorMove:i,cursorRotate:u,cursorResize:h,rotationPoint:f,restrict:n,container:w,snap:o,each:s,proportions:r},this.proxyMethods={onInit:x,onDrop:_,onMove:y,onResize:g,onRotate:m,onDestroy:M},this.subscribe(s)}_draw(){this._animate()}_animate(){const t=this,{observable:o,storage:s,options:n}=t;if(l(s))return;if(s.frame=e(t._animate),!s.doDraw)return;s.doDraw=!1;let{dox:r,doy:a,clientX:i,clientY:h,doDrag:u,doResize:d,doRotate:p,doSetCenter:f,revX:x,revY:y,handle:m}=s;const{snap:b,each:g,restrict:v}=n,{move:M,resize:w,rotate:E}=g;if(d){const{transform:e,cx:n,cy:c}=s,{x:l,y:u}=this._pointToElement({x:i,y:h});let d=r?_(l-n,b.x/e.scX):0,p=a?_(u-c,b.y/e.scY):0;d=r?x?-d:d:0,p=a?y?-p:p:0,t._resize(d,p,m[0]),w&&o.notify("onresize",t,{dx:d,dy:p,handle:m[0]})}if(u){const{restrictOffset:e,elementOffset:n,nx:l,ny:u}=s;c(v)&&(i-e.left<l-n.left&&(i=l-n.left+e.left),h-e.top<u-n.top&&(h=u-n.top+e.top));const d=r?_(i-l,b.x):0,p=a?_(h-u,b.y):0;t._drag(d,p),M&&o.notify("onmove",t,{dx:d,dy:p})}if(p){const{pressang:e,center:n}=s,r=Math.atan2(h-n.y,i-n.x)-e;t._rotate(_(r,b.angle)),E&&o.notify("onrotate",t,{radians:r})}if(f){const{bx:e,by:o}=s,{x:n,y:r}=this._pointToControls({x:i,y:h});t._moveCenterHandle(n-e,r-o)}}_start(t){const{observable:e,storage:o,options:s,el:n}=this,r=this._compute(t);Object.keys(r).forEach(t=>{o[t]=r[t]});const{onRightEdge:a,onBottomEdge:i,onTopEdge:l,onLeftEdge:h,handle:u,factor:d,revX:p,revY:f,doW:y,doH:m}=r,b=a||i||l||h,{handles:v,radius:_}=o,{axis:M,restrict:w}=s;c(_)&&g(_,"sjx-hidden");const E=u.is(v.rotator),T=!!c(v.center)&&u.is(v.center),{clientX:j,clientY:V}=t,{x:k,y:A}=this._cursorPoint({clientX:j,clientY:V}),{x:C,y:S}=this._pointToElement({x:k,y:A}),{x:D,y:R}=this._pointToControls({x:k,y:A}),N={clientX:j,clientY:V,nx:k,ny:A,cx:C,cy:S,bx:D,by:R,doResize:b,doDrag:!(E||b||T),doRotate:E,doSetCenter:T,onExecution:!0,cursor:null,elementOffset:x(n),restrictOffset:c(w)?x(w):null,dox:/\x/.test(M)&&(!b||(u.is(v.ml)||u.is(v.mr)||u.is(v.tl)||u.is(v.tr)||u.is(v.bl)||u.is(v.br))),doy:/\y/.test(M)&&(!b||(u.is(v.br)||u.is(v.bl)||u.is(v.bc)||u.is(v.tr)||u.is(v.tl)||u.is(v.tc)))};this.storage={...o,...N},e.notify("ongetstate",this,{factor:d,revX:p,revY:f,doW:y,doH:m}),this._draw()}_moving(t){const{storage:e,options:o}=this,{x:s,y:n}=this._cursorPoint(t);e.e=t,e.clientX=s,e.clientY=n,e.doDraw=!0;let{doRotate:r,doDrag:a,doResize:i,cursor:c}=e;const{cursorMove:h,cursorResize:u,cursorRotate:d}=o;l(c)&&(a?c=h:r?c=d:i&&(c=u),p(document.body).css({cursor:c}))}_end(t){const{observable:e,storage:s,proxyMethods:n,el:r}=this,{doResize:a,doDrag:i,frame:l,radius:h}=s,u=a?"resize":i?"drag":"rotate";s.doResize=!1,s.doDrag=!1,s.doRotate=!1,s.doSetCenter=!1,s.doDraw=!1,s.onExecution=!1,s.cursor=null,this._apply(u),n.onDrop.call(this,t,r),e.notify("onapply",this,{actionName:u,e:t}),o(l),p(document.body).css({cursor:"auto"}),c(h)&&b(h,"sjx-hidden")}_checkHandles(t,e){const o=t.is(e.tl),s=t.is(e.tc),n=t.is(e.tr),r=t.is(e.bl),a=t.is(e.bc),i=t.is(e.br),c=t.is(e.ml),l=t.is(e.mr);return{revX:o||c||r||s,revY:o||n||s||c,onTopEdge:s||n||o,onLeftEdge:o||c||r,onRightEdge:n||l||i,onBottomEdge:i||a||r,doW:c||l,doH:s||a}}_onMouseDown(t){this._start(t),p(document).on("mousemove",this._onMouseMove).on("mouseup",this._onMouseUp)}_onTouchStart(e){this._start(e.touches[0]),p(document).on("touchmove",this._onTouchMove,t).on("touchend",this._onTouchEnd,t)}_onMouseMove(t){t.preventDefault&&t.preventDefault(),this._moving(t,this.el)}_onTouchMove(t){t.preventDefault&&t.preventDefault(),this._moving(t.touches[0],this.el)}_onMouseUp(t){p(document).off("mousemove",this._onMouseMove).off("mouseup",this._onMouseUp),this._end(t,this.el)}_onTouchEnd(t){p(document).off("touchmove",this._onTouchMove).off("touchend",this._onTouchEnd),0===t.touches.length&&this._end(t.changedTouches[0],this.el)}notifyMove({dx:t,dy:e}){this._drag(t,e)}notifyRotate({radians:t}){const{snap:e}=this.options;this._rotate(_(t,e.angle))}notifyResize({dx:t,dy:e}){this._resize(t,e)}notifyApply({e:t,actionName:e}){this.proxyMethods.onDrop.call(this,t,this.el),this._apply(e)}notifyGetState(t){const{storage:e}=this,o=this._getState(t);this.storage={...e,...o}}subscribe(t){const{observable:e}=this,{resize:o,move:s,rotate:n}=t;(s||o||n)&&e.subscribe("ongetstate",this).subscribe("onapply",this),s&&e.subscribe("onmove",this),o&&e.subscribe("onresize",this),n&&e.subscribe("onrotate",this)}unsubscribe(){const{observable:t}=this;t.unsubscribe("ongetstate",this).unsubscribe("onapply",this).unsubscribe("onmove",this).unsubscribe("onresize",this).unsubscribe("onrotate",this)}}function T(t){return h(t)?function(){t.call(this,...arguments)}:()=>{}}const j=2,V=7;class k extends E{constructor(t,e,o){super(t,o),this.enable(e)}_init(t){const e=document.createElement("div");b(e,"sjx-wrapper"),t.parentNode.insertBefore(e,t);const o=p(t),{options:s}=this,{rotationPoint:n}=s,{left:r,top:a,width:i,height:h}=t.style,u=i||o.css("width"),d=h||o.css("height"),f=a||o.css("top"),x=r||o.css("left"),m=p(e.parentNode),g={top:f,left:x,width:u,height:d,transform:y(o)},v=document.createElement("div"),_={normal:["sjx-normal"],tl:["sjx-hdl","sjx-hdl-t","sjx-hdl-l","sjx-hdl-tl"],tr:["sjx-hdl","sjx-hdl-t","sjx-hdl-r","sjx-hdl-tr"],br:["sjx-hdl","sjx-hdl-b","sjx-hdl-r","sjx-hdl-br"],bl:["sjx-hdl","sjx-hdl-b","sjx-hdl-l","sjx-hdl-bl"],tc:["sjx-hdl","sjx-hdl-t","sjx-hdl-c","sjx-hdl-tc"],bc:["sjx-hdl","sjx-hdl-b","sjx-hdl-c","sjx-hdl-bc"],ml:["sjx-hdl","sjx-hdl-m","sjx-hdl-l","sjx-hdl-ml"],mr:["sjx-hdl","sjx-hdl-m","sjx-hdl-r","sjx-hdl-mr"],center:n?["sjx-hdl","sjx-hdl-m","sjx-hdl-c","sjx-hdl-mc"]:void 0,rotator:["sjx-hdl","sjx-hdl-m","sjx-rotator"]};if(Object.keys(_).forEach(t=>{const e=_[t];if(l(e))return;const o=function(t){const e=document.createElement("div");return t.forEach(t=>{b(e,t)}),e}(e);_[t]=o,v.appendChild(o)}),c(_.center)){p(_.center).css({left:`${t.getAttribute("data-cx")}px`,top:`${t.getAttribute("data-cy")}px`})}b(v,"sjx-controls"),e.appendChild(v);const M=p(v);M.css(g);const w=p(e);this.storage={controls:v,handles:_,radius:w.find(".sjx-radius"),parent:m},M.on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart)}_destroy(){const{controls:t}=this.storage;p(t).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart);const e=t.parentNode;e.parentNode.removeChild(e)}_compute(t){const{handles:e}=this.storage,o=p(t.target),{revX:s,revY:n,onTopEdge:r,onLeftEdge:a,onRightEdge:i,onBottomEdge:c,doW:l,doH:h}=this._checkHandles(o,e),u=o.is(e.tr)||o.is(e.bl)?-1:1,d=this._getState({factor:u,revX:s,revY:n,doW:l,doH:h}),{x:f,y:x}=this._cursorPoint(t),y=Math.atan2(x-d.center.y,f-d.center.x);return{...d,onTopEdge:r,onLeftEdge:a,onRightEdge:i,onBottomEdge:c,handle:o,pressang:y}}_pointToElement({x:t,y:e}){const{transform:o}=this.storage,s=[...o.matrix];return s[4]=s[5]=0,this._applyMatrixToPoint(S(s),t,e)}_pointToControls(t){return this._pointToElement(t)}_applyMatrixToPoint(t,e,o){return C({x:e,y:o},t)}_cursorPoint({clientX:t,clientY:e}){const{container:o}=this.options;return C({x:t,y:e},S(m(y(p(o)))))}_apply(){const{el:t,storage:e}=this,o=p(t),{cached:s,controls:n,transform:r,handles:a}=e,i=p(n),h=parseFloat(i.css("width"))/2,u=parseFloat(i.css("height"))/2,{center:d}=a,f=c(d),x=f?parseFloat(p(d).css("left")):h,y=f?parseFloat(p(d).css("top")):u;if(t.setAttribute("data-cx",x),t.setAttribute("data-cy",y),l(s))return;const{dx:m,dy:b}=s,g=A(r.matrix),v=parseFloat(t.style.left||o.css("left")),_=parseFloat(t.style.top||o.css("top"));g.left=`${v+m}px`,g.top=`${_+b}px`,o.css(g),i.css(g),this.storage.cached=null}_processResize(t,e){const{el:o,storage:s,options:n}=this,{proportions:r}=n,{controls:a,coords:i,cw:c,ch:l,transform:h,refang:u,revX:d,revY:f,doW:x,doH:y}=s,m=x||!x&&!y?(c+t)/c:(l+e)/l,b=r?c*m:c+t,g=r?l*m:l+e;if(b<j||g<j)return;const v=[...h.matrix],_=M(v[4],v[5],b,g,u,d,f,x,y),w=i.left-_.left,E=i.top-_.top;v[4]+=w,v[5]+=E;const T=A(v);T.width=`${b}px`,T.height=`${g}px`,p(a).css(T),p(o).css(T),s.cached={dx:w,dy:E}}_processMove(t,e){const{el:o,storage:s}=this,{controls:n,transform:r}=s,{matrix:a,parentMatrix:i}=r,c=[...i];c[4]=c[5]=0;const l=[...a];l[4]=a[4]+t,l[5]=a[5]+e;const h=A(l);p(n).css(h),p(o).css(h),s.cached={dx:t,dy:e}}_processRotate(t){const{el:e,storage:o}=this,{controls:s,transform:n,center:r}=o,{matrix:a,parentMatrix:i}=n,c=w(Math.cos(t)),l=w(Math.sin(t)),h=[1,0,0,1,r.cx,r.cy],u=[c,l,-l,c,0,0],d=[...i];d[4]=d[5]=0;const f=D(S(d),D(u,d)),x=D(D(h,f),S(h)),y=A(D(x,a));p(s).css(y),p(e).css(y)}_getState(t){const{factor:e,revX:o,revY:s,doW:n,doH:r}=t,{el:a,storage:i,options:l}=this,{container:h}=l,{handles:u,controls:d,parent:f}=i,{center:b,tl:g,tr:v}=u,_=x(g),w=x(v),E=Math.atan2(w.top-_.top,w.left-_.left)*e,T=p(d),j=m(y(p(h))),k=m(y(p(d))),A=m(y(f)),C={matrix:k,parentMatrix:f===h?D(A,j):j,scX:Math.sqrt(k[0]*k[0]+k[1]*k[1]),scY:Math.sqrt(k[2]*k[2]+k[3]*k[3])},S=parseFloat(T.css("width")),R=parseFloat(T.css("height")),N=M(k[4],k[5],S,R,E,o,s,n,r),z=S/2,X=R/2,Y=x(a),P=c(b),B=P?parseFloat(p(b).css("left")):z,$=P?parseFloat(p(b).css("top")):X,L=P?V:0;return{transform:C,cw:S,ch:R,coords:N,center:{x:Y.left+B-L,y:Y.top+$-L,cx:-B+z-L,cy:-$+X-L,hx:B,hy:$},factor:e,refang:E,revX:o,revY:s,doW:n,doH:r}}_moveCenterHandle(t,e){const{storage:o}=this,{handles:s,center:n}=o,r=`${n.hx+t}px`,a=`${n.hy+e}px`;p(s.center).css({left:r,top:a})}resetCenterPoint(){const{handles:t}=this.storage;p(t.center).css({left:null,top:null})}get controls(){return this.storage.controls}}function A(t){const e=`matrix(${t.join()})`;return{transform:e,webkitTranform:e,mozTransform:e,msTransform:e,otransform:e}}function C(t,e){const{x:o,y:s}=t,[n,r,a,i,c,l]=e;return{x:n*o+a*s+c,y:r*o+i*s+l}}function S(t){const e=[[t[0],t[2],t[4]],[t[1],t[3],t[5]],[0,0,1]];if(e.length!==e[0].length)return;const o=e.length,s=[],n=[];for(let t=0;t<o;t+=1){s[s.length]=[],n[n.length]=[];for(let r=0;r<o;r+=1)s[t][r]=t==r?1:0,n[t][r]=e[t][r]}for(let t=0;t<o;t+=1){let e=n[t][t];if(0===e){for(let r=t+1;r<o;r+=1)if(0!==n[r][t]){for(let a=0;a<o;a++)e=n[t][a],n[t][a]=n[r][a],n[r][a]=e,e=s[t][a],s[t][a]=s[r][a],s[r][a]=e;break}if(0===(e=n[t][t]))return}for(let r=0;r<o;r++)n[t][r]=n[t][r]/e,s[t][r]=s[t][r]/e;for(let r=0;r<o;r++)if(r!=t){e=n[r][t];for(let a=0;a<o;a++)n[r][a]-=e*n[t][a],s[r][a]-=e*s[t][a]}}return[s[0][0],s[1][0],s[0][1],s[1][1],s[0][2],s[1][2]]}function D(t,e){const o=[[t[0],t[2],t[4]],[t[1],t[3],t[5]],[0,0,1]],s=[[e[0],e[2],e[4]],[e[1],e[3],e[5]],[0,0,1]],n=[];for(let t=0;t<s.length;t++){n[t]=[];for(let e=0;e<o[0].length;e++){let r=0;for(let n=0;n<o.length;n++)r+=o[n][e]*s[t][n];n[t].push(r)}}return[n[0][0],n[1][0],n[0][1],n[1][1],n[0][2],n[1][2]]}const R=["circle","ellipse","image","line","path","polygon","polyline","rect","text","g"];function N(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(){return N("svg").createSVGMatrix()}function X(t,e){return(e.getScreenCTM()||z()).inverse().multiply(t.getScreenCTM()||z())}function Y(t){return`matrix(${t.a},${t.b},${t.c},${t.d},${t.e},${t.f})`}function P(t,e,o,s){const n=e.createSVGPoint();return n.x=o,n.y=s,n.matrixTransform(t)}function B(t){const e=z();return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e.e=t.e,e.f=t.f,e}const $=/\s*([achlmqstvz])([^achlmqstvz]*)\s*/gi,L=/\s*,\s*|\s+/g;function F(t){let e=$.lastIndex=0;const o=[];for(;e=$.exec(t);){const t=e[1],s=t.toUpperCase(),n=e[2].replace(/([^e])-/g,"$1 -").replace(/ +/g," ");o.push({relative:t!==s,key:s,cmd:t,values:n.trim().split(L).map(t=>{if(!isNaN(t))return Number(t)})})}return o}function H(t){const{path:e,dx:o,dy:s}=t;try{const t=F(e);let n="",r=" ",a=!0;for(let e=0,i=t.length;e<i;e++){const i=t[e],{values:c,key:l,relative:h}=i,u=[];switch(l){case"M":for(let t=0,e=c.length;t<e;t+=2){const[e,n]=c.slice(t,t+2);h&&!a||(e+=o,n+=s),u.push(e,n),a=!1}break;case"A":for(let t=0,e=c.length;t<e;t+=7){const e=c.slice(t,t+7);h||(e[5]+=o,e[6]+=s),u.push(...e)}break;case"C":for(let t=0,e=c.length;t<e;t+=6){const e=c.slice(t,t+6);h||(e[0]+=o,e[1]+=s,e[2]+=o,e[3]+=s,e[4]+=o,e[5]+=s),u.push(...e)}break;case"H":for(let t=0,e=c.length;t<e;t+=1){const e=c.slice(t,t+1);h||(e[0]+=o),u.push(e[0])}break;case"V":for(let t=0,e=c.length;t<e;t+=1){const e=c.slice(t,t+1);h||(e[0]+=s),u.push(e[0])}break;case"L":case"T":for(let t=0,e=c.length;t<e;t+=2){const[e,n]=c.slice(t,t+2);h||(e+=o,n+=s),u.push(e,n)}break;case"Q":case"S":for(let t=0,e=c.length;t<e;t+=4){const[e,n,r,a]=c.slice(t,t+4);h||(e+=o,n+=s,r+=o,a+=s),u.push(e,n,r,a)}break;case"Z":c[0]="",r=""}n+=i.cmd+u.join(",")+r}return n}catch(t){i("Path parsing error: "+t)}}function O(t){const{path:e,localCTM:o,container:s}=t;try{const t=F(e);let n="",r=" ";const a=[];let i=!0;for(let e=0,c=t.length;e<c;e++){const c=t[e],{values:l,key:h,relative:u}=c;switch(h){case"A":{const t=[];for(let e=0,n=l.length;e<n;e+=7){const[n,r,a,i,c,h,d]=l.slice(e,e+7),p=B(o);u&&(p.e=p.f=0);const{x:f,y:x}=P(p,s,h,d);t.push(w(f),w(x)),p.e=p.f=0;const{x:y,y:m}=P(p,s,n,r);t.unshift(w(y),w(m),a,i,c)}a.push(t);break}case"C":{const t=[];for(let e=0,n=l.length;e<n;e+=6){const[n,r,a,i,c,h]=l.slice(e,e+6),d=B(o);u&&(d.e=d.f=0);const{x:p,y:f}=P(d,s,n,r),{x:x,y:y}=P(d,s,a,i),{x:m,y:b}=P(d,s,c,h);t.push(w(p),w(f),w(x),w(y),w(m),w(b))}a.push(t);break}case"H":{const t=[];for(let e=0,n=l.length;e<n;e+=1){const[n]=l.slice(e,e+1),r=B(o);u&&(r.e=r.f=0);const{x:a}=P(r,s,n,0);t.push(w(a))}a.push(t);break}case"V":{const t=[];for(let e=0,n=l.length;e<n;e+=1){const[n]=l.slice(e,e+1),r=B(o);u&&(r.e=r.f=0);const{y:a}=P(r,s,0,n);t.push(w(a))}a.push(t);break}case"T":case"L":{const t=[];for(let e=0,n=l.length;e<n;e+=2){const[n,r]=l.slice(e,e+2),a=B(o);u&&(a.e=a.f=0);const{x:i,y:c}=P(a,s,n,r);t.push(w(i),w(c))}a.push(t);break}case"M":{const t=[];for(let e=0,n=l.length;e<n;e+=2){const[n,r]=l.slice(e,e+2),a=B(o);u&&!i&&(a.e=a.f=0);const{x:c,y:h}=P(a,s,n,r);t.push(w(c),w(h)),i=!1}a.push(t);break}case"Q":{const t=[];for(let e=0,n=l.length;e<n;e+=4){const[n,r,a,i]=l.slice(e,e+4),c=B(o);u&&(c.e=c.f=0);const{x:h,y:d}=P(c,s,n,r),{x:p,y:f}=P(c,s,a,i);t.push(w(h),w(d),w(p),w(f))}a.push(t);break}case"S":{const t=[];for(let e=0,n=l.length;e<n;e+=4){const[n,r,a,i]=l.slice(e,e+4),c=B(o);u&&(c.e=c.f=0);const{x:h,y:d}=P(c,s,n,r),{x:p,y:f}=P(c,s,a,i);t.push(w(h),w(d),w(p),w(f))}a.push(t);break}case"Z":a.push([""]),r=""}n+=c.cmd+a[e].join(",")+r}return n}catch(t){i("Path parsing error: "+t)}}const W=5,q=50,U=/[+-]?\d+(\.\d+)?/g;class G extends E{constructor(t,e,o){super(t,o),this.enable(e)}_init(t){const{options:e}=this,{rotationPoint:o,container:s,themeColor:n}=e,r=N("g");s.appendChild(r);const{width:a,height:i,x:c,y:h}=t.getBBox(),u=X(t,s),d=N("rect");[["width",a],["height",i],["x",c],["y",h],["fill",n],["fill-opacity",.1],["stroke",n],["stroke-dasharray","3 3"],["vector-effect","non-scaling-stroke"],["transform",Y(u)]].forEach(t=>{d.setAttribute(t[0],t[1])});const f=N("g"),x=N("g"),y=N("g");y.appendChild(d),r.appendChild(y),r.appendChild(x),r.appendChild(f);const{x:m,y:g,width:v,height:_}=d.getBBox(),M=t.getAttribute("data-cx"),w=t.getAttribute("data-cy"),E=X(d,d.parentNode),T=P(E,s,m+v/2,g+_/2),j={tl:P(E,s,m,g),tr:P(E,s,m+v,g),br:P(E,s,m+v,g+_),bl:P(E,s,m,g+_),tc:P(E,s,m+v/2,g),bc:P(E,s,m+v/2,g+_),ml:P(E,s,m,g+_/2),mr:P(E,s,m+v,g+_/2),center:o?ot(s,M,w)||T:void 0,rotator:{}},V=Math.atan2(j.tl.y-j.tr.y,j.tl.x-j.tr.x);j.rotator.x=j.mr.x-q*Math.cos(V),j.rotator.y=j.mr.y-q*Math.sin(V);const k=N("line");k.x1.baseVal.value=j.mr.x,k.y1.baseVal.value=j.mr.y,k.x2.baseVal.value=j.rotator.x,k.y2.baseVal.value=j.rotator.y,et(k,n),x.appendChild(k);let A=null;o&&(b(A=N("line"),"sjx-hidden"),A.x1.baseVal.value=T.x,A.y1.baseVal.value=T.y,A.x2.baseVal.value=M||T.x,A.y2.baseVal.value=w||T.y,et(A,"#fe3232"),A.setAttribute("opacity",.5),x.appendChild(A)),Object.keys(j).forEach(t=>{const e=j[t];if(l(e))return;const{x:o,y:s}=e,r="center"===t?"#fe3232":n;j[t]=function(t,e,o,s){const n=N("circle");b(n,`sjx-svg-hdl-${s}`);const r={cx:t,cy:e,r:5.5,fill:o,stroke:"#fff","fill-opacity":1,"vector-effect":"non-scaling-stroke","stroke-width":1};return Object.keys(r).map(t=>{n.setAttribute(t,r[t])}),n}(o,s,r,t),f.appendChild(j[t])}),this.storage={wrapper:r,box:d,handles:j,normalLine:k,radius:o?A:void 0,parent:t.parentNode},p(r).on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart)}_destroy(){const{wrapper:t}=this.storage;p(t).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart),t.parentNode.removeChild(t)}_compute(t){const{storage:e}=this,{handles:o}=e,s=p(t.target),{revX:n,revY:r,onTopEdge:a,onLeftEdge:i,onRightEdge:c,onBottomEdge:l,doW:h,doH:u}=this._checkHandles(s,o),d=this._getState({revX:n,revY:r,doW:h,doH:u}),{x:f,y:x}=this._cursorPoint(t),y=Math.atan2(x-d.center.y,f-d.center.x);return{...d,doW:h,doH:u,onTopEdge:a,onLeftEdge:i,onRightEdge:c,onBottomEdge:l,handle:s,pressang:y}}_cursorPoint({clientX:t,clientY:e}){const{container:o}=this.options;return P(o.getScreenCTM().inverse(),o,t,e)}_pointToElement({x:t,y:e}){const{transform:o}=this.storage,{ctm:s}=o,n=s.inverse();return n.e=n.f=0,this._applyMatrixToPoint(n,t,e)}_pointToControls({x:t,y:e}){const{transform:o}=this.storage,{boxCTM:s}=o,n=s.inverse();return n.e=n.f=0,this._applyMatrixToPoint(n,t,e)}_applyMatrixToPoint(t,e,o){const{container:s}=this.options,n=s.createSVGPoint();return n.x=e,n.y=o,n.matrixTransform(t)}_apply(t){const{el:e,storage:o,options:s}=this,{container:n}=s,{box:r,handles:a,cached:i,transform:h}=o,{matrix:u}=h,d=e.getBBox(),{x:p,y:f,width:x,height:y}=d,m=c(a.center)?P(h.boxCTM,n,a.center.cx.baseVal.value,a.center.cy.baseVal.value):P(u,n,p+x/2,f+y/2);if(e.setAttribute("data-cx",m.x),e.setAttribute("data-cy",m.y),l(i))return;const{scaleX:b,scaleY:g,dx:v,dy:_,ox:M,oy:w}=i;if("drag"===t){if(0===v&&0===_)return;const t=z();t.e=v,t.f=_;const o=t.multiply(u).multiply(t.inverse());if(e.setAttribute("transform",Y(o)),J(e)){K(e).forEach(t=>{const o=n.createSVGPoint(),s=X(e.parentNode,n).inverse();o.x=M,o.y=w,s.e=s.f=0;const r=o.matrixTransform(s),a=z();a.e=v,a.f=_;const i=a.multiply(X(t,t.parentNode)).multiply(a.inverse());(function(t){return 1===t.a&&0===t.b&&0===t.c&&1===t.d&&0===t.e&&0===t.f})(i)||t.setAttribute("transform",Y(i)),J(t)||I(t,{x:r.x,y:r.y})})}else I(e,{x:v,y:_})}if("resize"===t){const{x:t,y:s,width:a,height:i}=r.getBBox();if(Z(o,{x:t,y:s,width:a,height:i},n),J(e)){K(e).forEach(t=>{J(t)||Q(t,{scaleX:b,scaleY:g,defaultCTM:t.__ctm__,bBox:h.bBox,container:n,storage:o})})}else Q(e,{scaleX:b,scaleY:g,defaultCTM:h.ctm,bBox:h.bBox,container:n,storage:o});e.setAttribute("transform",Y(u))}this.storage.cached=null}_processResize(t,e){const{el:o,storage:s,options:n}=this,{container:r,proportions:a}=n,{box:i,left:c,top:l,cw:h,ch:u,transform:d,revX:p,revY:f,doW:x,doH:y}=this.storage,{matrix:m,scMatrix:b,trMatrix:g,scaleX:v,scaleY:_}=d;let{width:M,height:w}=i.getBBox();const E=x||!x&&!y?(h+t)/h:(u+e)/u;if(M=a?h*E:h+t,w=a?u*E:u+e,Math.abs(M)<W||Math.abs(w)<W)return;const T=M/h,j=w/u;b.a=T,b.b=0,b.c=0,b.d=j,b.e=0,b.f=0,g.e=v,g.f=_;const V=g.multiply(b).multiply(g.inverse()),k=m.multiply(V);o.setAttribute("transform",Y(k)),this.storage.cached={scaleX:T,scaleY:j},Z(s,{x:c-(M-h)*(y?.5:p?1:0),y:l-(w-u)*(x?.5:f?1:0),width:M,height:w},r)}_processMove(t,e){const{container:o}=this.options,{transform:s,wrapper:n,center:r}=this.storage,{matrix:a,trMatrix:i,scMatrix:c,wrapperMatrix:l,parentMatrix:h}=s;c.e=t,c.f=e;const u=c.multiply(l);n.setAttribute("transform",Y(u)),h.e=h.f=0;const{x:d,y:p}=P(h.inverse(),o,t,e);i.e=d,i.f=p;const f=i.multiply(a);if(this.el.setAttribute("transform",Y(f)),this.storage.cached={dx:d,dy:p,ox:t,oy:e},!r.isShifted)return;const x=l.inverse();x.e=x.f=0;const{x:y,y:m}=P(x,o,t,e);this._moveCenterHandle(-y,-m)}_processRotate(t){const{center:e,transform:o,wrapper:s}=this.storage,{matrix:n,wrapperMatrix:r,parentMatrix:a,trMatrix:i,scMatrix:c,rotMatrix:l}=o,h=w(Math.cos(t)),u=w(Math.sin(t));i.e=e.x,i.f=e.y,l.a=h,l.b=u,l.c=-u,l.d=h;const d=i.multiply(l).multiply(i.inverse()).multiply(r);s.setAttribute("transform",Y(d)),c.e=e.el_x,c.f=e.el_y,a.e=a.f=0;const p=a.inverse().multiply(l).multiply(a),f=c.multiply(p).multiply(c.inverse()).multiply(n);this.el.setAttribute("transform",Y(f))}_getState({revX:t,revY:e,doW:o,doH:s}){const{el:n,storage:r,options:a}=this,{container:i}=a,{box:l,wrapper:h,parent:u,handles:d}=r,{center:p}=d,f=n.getBBox(),{x:x,y:y,width:m,height:b}=f,{width:g,height:v,x:_,y:M}=l.getBBox(),E=X(n,u),T=X(n,i),j=X(l.parentNode,i),V=X(u,i),k=x+m*(s?.5:t?1:0),A=y+b*(o?.5:e?1:0),C={matrix:E,ctm:T,boxCTM:j,parentMatrix:V,wrapperMatrix:X(h,h.parentNode),trMatrix:z(),scMatrix:z(),rotMatrix:z(),scaleX:k,scaleY:A,scX:Math.sqrt(T.a*T.a+T.b*T.b),scY:Math.sqrt(T.c*T.c+T.d*T.d),bBox:f},S=_+g/2,D=M+v/2,R=p?p.cx.baseVal.value:S,N=p?p.cy.baseVal.value:D,{x:Y,y:B}=P(j,i,R,N),{x:$,y:L}=c(p)?P(V.inverse(),i,Y,B):P(E,i,x+m/2,y+b/2),{x:F,y:H}=P(X(l,i),i,S,D);return K(n).forEach(t=>{t.__ctm__=X(t,i)}),{transform:C,cw:g,ch:v,center:{x:p?Y:F,y:p?B:H,el_x:$,el_y:L,hx:p?p.cx.baseVal.value:null,hy:p?p.cy.baseVal.value:null,isShifted:w(F,3)!==w(Y,3)&&w(H,3)!==w(B,3)},left:_,top:M,revX:t,revY:e,doW:o,doH:s}}_moveCenterHandle(t,e){const{handles:o,center:s,radius:n}=this.storage;l(o.center)||(o.center.cx.baseVal.value=s.hx+t,o.center.cy.baseVal.value=s.hy+e,n.x2.baseVal.value=s.hx+t,n.y2.baseVal.value=s.hy+e)}resetCenterPoint(){const{box:t,handles:e,radius:o}=this.storage,{center:s}=e,{container:n}=this.options,{width:r,height:a,x:i,y:c}=t.getBBox(),l=X(t,t.parentNode),{x:h,y:u}=P(l,n,i+r/2,c+a/2);s.cx.baseVal.value=h,s.cy.baseVal.value=u,s.isShifted=!1,o.x2.baseVal.value=h,o.y2.baseVal.value=u}get controls(){return this.storage.wrapper}}function I(t,{x:e,y:o}){const s=[];switch(t.tagName.toLowerCase()){case"use":case"image":case"text":case"rect":{const n=c(t.x.baseVal.value)?t.x.baseVal.value+e:(Number(t.getAttribute("x"))||0)+e,r=c(t.y.baseVal.value)?t.y.baseVal.value+o:(Number(t.getAttribute("y"))||0)+o;s.push(["x",n],["y",r]);break}case"circle":case"ellipse":{const n=t.cx.baseVal.value+e,r=t.cy.baseVal.value+o;s.push(["cx",n],["cy",r]);break}case"line":{const n=t.x1.baseVal.value+e,r=t.y1.baseVal.value+o,a=t.x2.baseVal.value+e,i=t.y2.baseVal.value+o;s.push(["x1",n],["y1",r],["x2",a],["y2",i]);break}case"polygon":case"polyline":{const n=tt(t.getAttribute("points")).map(t=>(t[0]=Number(t[0])+e,t[1]=Number(t[1])+o,t.join(" "))).join(" ");s.push(["points",n]);break}case"path":{const n=t.getAttribute("d");s.push(["d",H({path:n,dx:e,dy:o})]);break}}s.forEach(e=>{t.setAttribute(e[0],e[1])})}function Q(t,e){const{scaleX:o,scaleY:s,bBox:n,defaultCTM:r,container:a}=e,{width:i,height:c}=n,l=[],h=X(t,a),u=r.inverse().multiply(h);switch(t.tagName.toLowerCase()){case"text":{const e=t.x.baseVal.value||Number(t.getAttribute("x")),n=t.y.baseVal.value||Number(t.getAttribute("y")),{x:r,y:h}=P(u,a,e,n);l.push(["x",r+(o<0?i:0)],["y",h+(s<0?c:0)]);break}case"circle":{const e=t.r.baseVal.value,n=t.cx.baseVal.value,r=t.cy.baseVal.value,i=e*(Math.abs(o)+Math.abs(s))/2,{x:c,y:h}=P(u,a,n,r);l.push(["r",i],["cx",c],["cy",h]);break}case"image":case"rect":{const e=t.width.baseVal.value,n=t.height.baseVal.value,r=t.x.baseVal.value,i=t.y.baseVal.value,{x:c,y:h}=P(u,a,r,i),d=Math.abs(e*o),p=Math.abs(n*s);l.push(["x",c-(o<0?d:0)],["y",h-(s<0?p:0)],["width",d],["height",p]);break}case"ellipse":{const e=t.rx.baseVal.value,n=t.ry.baseVal.value,r=t.cx.baseVal.value,i=t.cy.baseVal.value,{x:c,y:h}=P(u,a,r,i),d=z();d.a=o,d.d=s;const{x:p,y:f}=P(d,a,e,n);l.push(["rx",Math.abs(p)],["ry",Math.abs(f)],["cx",c],["cy",h]);break}case"line":{const e=t.x1.baseVal.value,o=t.y1.baseVal.value,s=t.x2.baseVal.value,n=t.y2.baseVal.value,{x:r,y:i}=P(u,a,e,o),{x:c,y:h}=P(u,a,s,n);l.push(["x1",r],["y1",i],["x2",c],["y2",h]);break}case"polygon":case"polyline":{const e=tt(t.getAttribute("points")).map(t=>{const{x:e,y:o}=P(u,a,Number(t[0]),Number(t[1]));return t[0]=e,t[1]=o,t.join(" ")}).join(" ");l.push(["points",e]);break}case"path":{const e=t.getAttribute("d");l.push(["d",O({path:e,localCTM:u,container:a})]);break}}l.forEach(e=>{t.setAttribute(e[0],e[1])})}function Z(t,e,o){const{box:s,handles:n,normalLine:r,radius:a,center:i}=t;let{x:h,y:u,width:d,height:p}=e;const f=d/2,x=p/2,y=X(s,s.parentNode),m=P(y,o,h+f,u+x),b={tl:P(y,o,h,u),tr:P(y,o,h+d,u),br:P(y,o,h+d,u+p),bl:P(y,o,h,u+p),tc:P(y,o,h+f,u),bc:P(y,o,h+f,u+p),ml:P(y,o,h,u+x),mr:P(y,o,h+d,u+x),rotator:{},center:!i.isShifted&&c(n.center)?m:void 0},g=Math.atan2(b.tl.y-b.tr.y,b.tl.x-b.tr.x);b.rotator.x=b.mr.x-q*Math.cos(g),b.rotator.y=b.mr.y-q*Math.sin(g),r.x1.baseVal.value=b.mr.x,r.y1.baseVal.value=b.mr.y,r.x2.baseVal.value=b.rotator.x,r.y2.baseVal.value=b.rotator.y,c(a)&&(a.x1.baseVal.value=m.x,a.y1.baseVal.value=m.y,i.isShifted||(a.x2.baseVal.value=m.x,a.y2.baseVal.value=m.y));const v={x:h+=d<0?d:0,y:u+=p<0?p:0,width:Math.abs(d),height:Math.abs(p)};Object.keys(v).forEach(t=>{s.setAttribute(t,v[t])}),Object.keys(b).forEach(t=>{const e=n[t],o=b[t];l(o)||(e.setAttribute("cx",o.x),e.setAttribute("cy",o.y))})}function J(t){return"g"===t.tagName.toLowerCase()}function K(t){const e=[];return J(t)?s.call(t.childNodes,t=>{if(1===t.nodeType){const o=t.tagName.toLowerCase();-1!==R.indexOf(o)&&("g"===o&&e.push(...K(t)),e.push(t))}}):e.push(t),e}function tt(t){return t.match(U).reduce((t,e,o,s)=>(o%2==0&&t.push(s.slice(o,o+2)),t),[])}function et(t,e){t.setAttribute("stroke",e),t.setAttribute("stroke-dasharray","3 3"),t.setAttribute("vector-effect","non-scaling-stroke")}function ot(t,e,o){if(l(e)||l(o))return null;const s=t.createSVGPoint();return s.x=e,s.y=o,s}function st(t,e){if(this.length){const o=c(e)&&e instanceof f?e:new f;return a.call(this,(e,s)=>(s instanceof SVGElement?function(t){const e=t.tagName.toLowerCase();return-1!==R.indexOf(e)||(i("Selected element is not allowed to transform. Allowed elements:\ncircle, ellipse, image, line, path, polygon, polyline, rect, text, g"),!1)}(s)&&e.push(new G(s,t,o)):e.push(new k(s,t,o)),e),[])}}class nt{constructor(t,e){this.el=t,this.options=e||{},this.storage=null,this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._animate=this._animate.bind(this),this.enable()}enable(){l(this.storage)?this._init():i("Already enabled")}disable(){this._destroy()}_init(){const{el:t,options:e}=this,o=p(t),{style:s,onDrop:n,appendTo:r,stack:a}=e,i={position:"absolute","z-index":"2147483647",style:c(s)&&"object"==typeof s?s:void 0},l=c(a)?p(a)[0]:document,u=h(n)?function(t){const{clone:e}=this.storage;(function(t,e){const{top:o,left:s}=x(t),{top:n,left:r}=x(e),a=p(t),i=p(e);return!(o<n||o+parseFloat(a.css("height"))>n+parseFloat(i.css("height"))||s<r||s+parseFloat(a.css("width"))>r+parseFloat(i.css("width")))})(e,l)&&n.call(this,t,this.el,e)}:()=>{};this.storage={onDrop:u,options:e,css:i,parent:c(r)?p(r)[0]:document.body,stack:l},o.on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart)}_start(t){const{storage:e,el:o}=this,{parent:s,css:n}=e,r=x(s),{clientX:a,clientY:i}=t;n.left=`${a-r.left}px`,n.top=`${i-r.top}px`;const c=o.cloneNode(!0);p(c).css(n),e.clientX=a,e.clientY=i,e.cx=a,e.cy=i,e.clone=c,p(s)[0].appendChild(c),this._draw()}_move(t){const{storage:e}=this;e.clientX=t.clientX,e.clientY=t.clientY,e.doDraw=!0,e.doMove=!0}_end(t){const{storage:e}=this,{clone:s,frameId:n,onDrop:r}=e;e.doDraw=!1,o(n),l(s)||(r.call(this,t),s.parentNode.removeChild(s),delete e.clone)}_draw(){this._animate()}_animate(){const{storage:t}=this;t.frameId=e(this._animate);const{doDraw:o,clientX:s,clientY:n,cx:r,cy:a,clone:i}=t;if(!o)return;t.doDraw=!1;const c=`translate(${s-r}px, ${n-a}px)`;p(i).css({transform:c,webkitTranform:c,mozTransform:c,msTransform:c,otransform:c})}_destroy(){l(this.storage)||(p(this.el).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart),delete this.storage)}_onMouseDown(t){this._start(t),p(document).on("mousemove",this._onMouseMove).on("mouseup",this._onMouseUp)}_onMouseMove(t){t.preventDefault&&t.preventDefault(),this._move(t)}_onMouseUp(t){this._end(t),p(document).off("mousemove",this._onMouseMove).off("mouseup",this._onMouseUp)}_onTouchStart(e){this._start(e.touches[0]),p(document).on("touchmove",this._onTouchMove,t).on("touchend",this._onTouchEnd,t)}_onTouchMove(t){t.preventDefault&&t.preventDefault(),this._move(t.touches[0])}_onTouchEnd(e){0===e.touches.length&&this._end(e.changedTouches[0]),p(document).off("touchmove",this._onTouchMove,t).off("touchend",this._onTouchEnd,t)}}function rt(t){if(this.length)return r.call(this,e=>new nt(e,t))}class at extends u{constructor(t){super(t)}drag(){return st.call(this,...arguments)}clone(){return rt.call(this,...arguments)}}
/* @license
 * Move/Rotate/Resize tool
 * Released under the MIT license, 2018-2019
 * Karen Sarksyan
 * nichollascarter@gmail.com
*/function it(t){return new at(t)}Object.defineProperty(it,"createObservable",{value:()=>new f}),Object.defineProperty(it,"Subjx",{value:at}),Object.defineProperty(it,"Observable",{value:f});export default it;