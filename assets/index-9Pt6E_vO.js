(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function l(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(s){if(s.ep)return;s.ep=!0;const c=l(s);fetch(s.href,c)}})();function Yc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rc={exports:{}},Aa={};var hp;function d1(){if(hp)return Aa;hp=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(u,s,c){var f=null;if(c!==void 0&&(f=""+c),s.key!==void 0&&(f=""+s.key),"key"in s){c={};for(var m in s)m!=="key"&&(c[m]=s[m])}else c=s;return s=c.ref,{$$typeof:t,type:u,key:f,ref:s!==void 0?s:null,props:c}}return Aa.Fragment=a,Aa.jsx=l,Aa.jsxs=l,Aa}var mp;function h1(){return mp||(mp=1,rc.exports=d1()),rc.exports}var g=h1(),lc={exports:{}},ja={},ac={exports:{}},ic={};var pp;function m1(){return pp||(pp=1,(function(t){function a(B,Z){var ie=B.length;B.push(Z);e:for(;0<ie;){var be=ie-1>>>1,T=B[be];if(0<s(T,Z))B[be]=Z,B[ie]=T,ie=be;else break e}}function l(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var Z=B[0],ie=B.pop();if(ie!==Z){B[0]=ie;e:for(var be=0,T=B.length,N=T>>>1;be<N;){var G=2*(be+1)-1,w=B[G],le=G+1,pe=B[le];if(0>s(w,ie))le<T&&0>s(pe,w)?(B[be]=pe,B[le]=ie,be=le):(B[be]=w,B[G]=ie,be=G);else if(le<T&&0>s(pe,ie))B[be]=pe,B[le]=ie,be=le;else break e}}return Z}function s(B,Z){var ie=B.sortIndex-Z.sortIndex;return ie!==0?ie:B.id-Z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();t.unstable_now=function(){return f.now()-m}}var p=[],h=[],b=1,x=null,S=3,v=!1,C=!1,O=!1,z=!1,j=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function K(B){for(var Z=l(h);Z!==null;){if(Z.callback===null)u(h);else if(Z.startTime<=B)u(h),Z.sortIndex=Z.expirationTime,a(p,Z);else break;Z=l(h)}}function re(B){if(O=!1,K(B),!C)if(l(p)!==null)C=!0,I||(I=!0,Q());else{var Z=l(h);Z!==null&&ne(re,Z.startTime-B)}}var I=!1,ee=-1,oe=5,W=-1;function A(){return z?!0:!(t.unstable_now()-W<oe)}function P(){if(z=!1,I){var B=t.unstable_now();W=B;var Z=!0;try{e:{C=!1,O&&(O=!1,H(ee),ee=-1),v=!0;var ie=S;try{n:{for(K(B),x=l(p);x!==null&&!(x.expirationTime>B&&A());){var be=x.callback;if(typeof be=="function"){x.callback=null,S=x.priorityLevel;var T=be(x.expirationTime<=B);if(B=t.unstable_now(),typeof T=="function"){x.callback=T,K(B),Z=!0;break n}x===l(p)&&u(p),K(B)}else u(p);x=l(p)}if(x!==null)Z=!0;else{var N=l(h);N!==null&&ne(re,N.startTime-B),Z=!1}}break e}finally{x=null,S=ie,v=!1}Z=void 0}}finally{Z?Q():I=!1}}}var Q;if(typeof _=="function")Q=function(){_(P)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ae=de.port2;de.port1.onmessage=P,Q=function(){ae.postMessage(null)}}else Q=function(){j(P,0)};function ne(B,Z){ee=j(function(){B(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_next=function(B){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var ie=S;S=Z;try{return B()}finally{S=ie}},t.unstable_requestPaint=function(){z=!0},t.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ie=S;S=B;try{return Z()}finally{S=ie}},t.unstable_scheduleCallback=function(B,Z,ie){var be=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?be+ie:be):ie=be,B){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=ie+T,B={id:b++,callback:Z,priorityLevel:B,startTime:ie,expirationTime:T,sortIndex:-1},ie>be?(B.sortIndex=ie,a(h,B),l(p)===null&&B===l(h)&&(O?(H(ee),ee=-1):O=!0,ne(re,ie-be))):(B.sortIndex=T,a(p,B),C||v||(C=!0,I||(I=!0,Q()))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var Z=S;return function(){var ie=S;S=Z;try{return B.apply(this,arguments)}finally{S=ie}}}})(ic)),ic}var gp;function p1(){return gp||(gp=1,ac.exports=m1()),ac.exports}var uc={exports:{}},xe={};var xp;function g1(){if(xp)return xe;xp=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,z={};function j(N,G,w){this.props=N,this.context=G,this.refs=z,this.updater=w||C}j.prototype.isReactComponent={},j.prototype.setState=function(N,G){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,G,"setState")},j.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function H(){}H.prototype=j.prototype;function _(N,G,w){this.props=N,this.context=G,this.refs=z,this.updater=w||C}var K=_.prototype=new H;K.constructor=_,O(K,j.prototype),K.isPureReactComponent=!0;var re=Array.isArray;function I(){}var ee={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function W(N,G,w){var le=w.ref;return{$$typeof:t,type:N,key:G,ref:le!==void 0?le:null,props:w}}function A(N,G){return W(N.type,G,N.props)}function P(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function Q(N){var G={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(w){return G[w]})}var de=/\/+/g;function ae(N,G){return typeof N=="object"&&N!==null&&N.key!=null?Q(""+N.key):G.toString(36)}function ne(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(G){N.status==="pending"&&(N.status="fulfilled",N.value=G)},function(G){N.status==="pending"&&(N.status="rejected",N.reason=G)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,G,w,le,pe){var ce=typeof N;(ce==="undefined"||ce==="boolean")&&(N=null);var Ee=!1;if(N===null)Ee=!0;else switch(ce){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(N.$$typeof){case t:case a:Ee=!0;break;case b:return Ee=N._init,B(Ee(N._payload),G,w,le,pe)}}if(Ee)return pe=pe(N),Ee=le===""?"."+ae(N,0):le,re(pe)?(w="",Ee!=null&&(w=Ee.replace(de,"$&/")+"/"),B(pe,G,w,"",function(Vn){return Vn})):pe!=null&&(P(pe)&&(pe=A(pe,w+(pe.key==null||N&&N.key===pe.key?"":(""+pe.key).replace(de,"$&/")+"/")+Ee)),G.push(pe)),1;Ee=0;var Xe=le===""?".":le+":";if(re(N))for(var Ue=0;Ue<N.length;Ue++)le=N[Ue],ce=Xe+ae(le,Ue),Ee+=B(le,G,w,ce,pe);else if(Ue=v(N),typeof Ue=="function")for(N=Ue.call(N),Ue=0;!(le=N.next()).done;)le=le.value,ce=Xe+ae(le,Ue++),Ee+=B(le,G,w,ce,pe);else if(ce==="object"){if(typeof N.then=="function")return B(ne(N),G,w,le,pe);throw G=String(N),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function Z(N,G,w){if(N==null)return N;var le=[],pe=0;return B(N,le,"","",function(ce){return G.call(w,ce,pe++)}),le}function ie(N){if(N._status===-1){var G=N._result;G=G(),G.then(function(w){(N._status===0||N._status===-1)&&(N._status=1,N._result=w)},function(w){(N._status===0||N._status===-1)&&(N._status=2,N._result=w)}),N._status===-1&&(N._status=0,N._result=G)}if(N._status===1)return N._result.default;throw N._result}var be=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},T={map:Z,forEach:function(N,G,w){Z(N,function(){G.apply(this,arguments)},w)},count:function(N){var G=0;return Z(N,function(){G++}),G},toArray:function(N){return Z(N,function(G){return G})||[]},only:function(N){if(!P(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return xe.Activity=x,xe.Children=T,xe.Component=j,xe.Fragment=l,xe.Profiler=s,xe.PureComponent=_,xe.StrictMode=u,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,xe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return ee.H.useMemoCache(N)}},xe.cache=function(N){return function(){return N.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(N,G,w){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var le=O({},N.props),pe=N.key;if(G!=null)for(ce in G.key!==void 0&&(pe=""+G.key),G)!oe.call(G,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&G.ref===void 0||(le[ce]=G[ce]);var ce=arguments.length-2;if(ce===1)le.children=w;else if(1<ce){for(var Ee=Array(ce),Xe=0;Xe<ce;Xe++)Ee[Xe]=arguments[Xe+2];le.children=Ee}return W(N.type,pe,le)},xe.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},xe.createElement=function(N,G,w){var le,pe={},ce=null;if(G!=null)for(le in G.key!==void 0&&(ce=""+G.key),G)oe.call(G,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(pe[le]=G[le]);var Ee=arguments.length-2;if(Ee===1)pe.children=w;else if(1<Ee){for(var Xe=Array(Ee),Ue=0;Ue<Ee;Ue++)Xe[Ue]=arguments[Ue+2];pe.children=Xe}if(N&&N.defaultProps)for(le in Ee=N.defaultProps,Ee)pe[le]===void 0&&(pe[le]=Ee[le]);return W(N,ce,pe)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(N){return{$$typeof:m,render:N}},xe.isValidElement=P,xe.lazy=function(N){return{$$typeof:b,_payload:{_status:-1,_result:N},_init:ie}},xe.memo=function(N,G){return{$$typeof:h,type:N,compare:G===void 0?null:G}},xe.startTransition=function(N){var G=ee.T,w={};ee.T=w;try{var le=N(),pe=ee.S;pe!==null&&pe(w,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(I,be)}catch(ce){be(ce)}finally{G!==null&&w.types!==null&&(G.types=w.types),ee.T=G}},xe.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},xe.use=function(N){return ee.H.use(N)},xe.useActionState=function(N,G,w){return ee.H.useActionState(N,G,w)},xe.useCallback=function(N,G){return ee.H.useCallback(N,G)},xe.useContext=function(N){return ee.H.useContext(N)},xe.useDebugValue=function(){},xe.useDeferredValue=function(N,G){return ee.H.useDeferredValue(N,G)},xe.useEffect=function(N,G){return ee.H.useEffect(N,G)},xe.useEffectEvent=function(N){return ee.H.useEffectEvent(N)},xe.useId=function(){return ee.H.useId()},xe.useImperativeHandle=function(N,G,w){return ee.H.useImperativeHandle(N,G,w)},xe.useInsertionEffect=function(N,G){return ee.H.useInsertionEffect(N,G)},xe.useLayoutEffect=function(N,G){return ee.H.useLayoutEffect(N,G)},xe.useMemo=function(N,G){return ee.H.useMemo(N,G)},xe.useOptimistic=function(N,G){return ee.H.useOptimistic(N,G)},xe.useReducer=function(N,G,w){return ee.H.useReducer(N,G,w)},xe.useRef=function(N){return ee.H.useRef(N)},xe.useState=function(N){return ee.H.useState(N)},xe.useSyncExternalStore=function(N,G,w){return ee.H.useSyncExternalStore(N,G,w)},xe.useTransition=function(){return ee.H.useTransition()},xe.version="19.2.0",xe}var bp;function Pc(){return bp||(bp=1,uc.exports=g1()),uc.exports}var sc={exports:{}},pn={};var yp;function x1(){if(yp)return pn;yp=1;var t=Pc();function a(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var u={d:{f:l,r:function(){throw Error(a(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(p,h,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:x==null?null:""+x,children:p,containerInfo:h,implementation:b}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,pn.createPortal=function(p,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(a(299));return c(p,h,null,b)},pn.flushSync=function(p){var h=f.T,b=u.p;try{if(f.T=null,u.p=2,p)return p()}finally{f.T=h,u.p=b,u.d.f()}},pn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(p,h))},pn.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},pn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var b=h.as,x=m(b,h.crossOrigin),S=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?u.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:v}):b==="script"&&u.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},pn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=m(h.as,h.crossOrigin);u.d.M(p,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(p)},pn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,x=m(b,h.crossOrigin);u.d.L(p,b,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},pn.preloadModule=function(p,h){if(typeof p=="string")if(h){var b=m(h.as,h.crossOrigin);u.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(p)},pn.requestFormReset=function(p){u.d.r(p)},pn.unstable_batchedUpdates=function(p,h){return p(h)},pn.useFormState=function(p,h,b){return f.H.useFormState(p,h,b)},pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},pn.version="19.2.0",pn}var vp;function b1(){if(vp)return sc.exports;vp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),sc.exports=x1(),sc.exports}var Sp;function y1(){if(Sp)return ja;Sp=1;var t=p1(),a=Pc(),l=b1();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(u(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(u(188));return n!==e?null:e}for(var r=e,i=n;;){var o=r.return;if(o===null)break;var d=o.alternate;if(d===null){if(i=o.return,i!==null){r=i;continue}break}if(o.child===d.child){for(d=o.child;d;){if(d===r)return p(o),e;if(d===i)return p(o),n;d=d.sibling}throw Error(u(188))}if(r.return!==i.return)r=o,i=d;else{for(var y=!1,k=o.child;k;){if(k===r){y=!0,r=o,i=d;break}if(k===i){y=!0,i=o,r=d;break}k=k.sibling}if(!y){for(k=d.child;k;){if(k===r){y=!0,r=d,i=o;break}if(k===i){y=!0,i=d,r=o;break}k=k.sibling}if(!y)throw Error(u(189))}}if(r.alternate!==i)throw Error(u(190))}if(r.tag!==3)throw Error(u(188));return r.stateNode.current===r?e:n}function b(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=b(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),_=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case j:return"Profiler";case z:return"StrictMode";case re:return"Suspense";case I:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case _:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case K:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case oe:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}var ne=Array.isArray,B=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},be=[],T=-1;function N(e){return{current:e}}function G(e){0>T||(e.current=be[T],be[T]=null,T--)}function w(e,n){T++,be[T]=e.current,e.current=n}var le=N(null),pe=N(null),ce=N(null),Ee=N(null);function Xe(e,n){switch(w(ce,n),w(pe,e),w(le,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Lm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Lm(n),e=Um(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(le),w(le,e)}function Ue(){G(le),G(pe),G(ce)}function Vn(e){e.memoizedState!==null&&w(Ee,e);var n=le.current,r=Um(n,e.type);n!==r&&(w(pe,e),w(le,r))}function xt(e){pe.current===e&&(G(le),G(pe)),Ee.current===e&&(G(Ee),wa._currentValue=ie)}var Ol,$a;function bt(e){if(Ol===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Ol=n&&n[1]||"",$a=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ol+e+$a}var Ur=!1;function Br(e,n){if(!e||Ur)return"";Ur=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(V){var q=V}Reflect.construct(e,[],J)}else{try{J.call()}catch(V){q=V}e.call(J.prototype)}}else{try{throw Error()}catch(V){q=V}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(V){if(V&&q&&typeof V.stack=="string")return[V.stack,q.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),y=d[0],k=d[1];if(y&&k){var E=y.split(`
`),U=k.split(`
`);for(o=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;o<U.length&&!U[o].includes("DetermineComponentFrameRoot");)o++;if(i===E.length||o===U.length)for(i=E.length-1,o=U.length-1;1<=i&&0<=o&&E[i]!==U[o];)o--;for(;1<=i&&0<=o;i--,o--)if(E[i]!==U[o]){if(i!==1||o!==1)do if(i--,o--,0>o||E[i]!==U[o]){var F=`
`+E[i].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=i&&0<=o);break}}}finally{Ur=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?bt(r):""}function ei(e,n){switch(e.tag){case 26:case 27:case 5:return bt(e.type);case 16:return bt("Lazy");case 13:return e.child!==n&&n!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return Br(e.type,!1);case 11:return Br(e.type.render,!1);case 1:return Br(e.type,!0);case 31:return bt("Activity");default:return""}}function ni(e){try{var n="",r=null;do n+=ei(e,r),r=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Hr=Object.prototype.hasOwnProperty,qr=t.unstable_scheduleCallback,zl=t.unstable_cancelCallback,Iu=t.unstable_shouldYield,Vu=t.unstable_requestPaint,bn=t.unstable_now,Fu=t.unstable_getCurrentPriorityLevel,Y=t.unstable_ImmediatePriority,te=t.unstable_UserBlockingPriority,ge=t.unstable_NormalPriority,ke=t.unstable_LowPriority,Oe=t.unstable_IdlePriority,Dn=t.log,yt=t.unstable_setDisableYieldValue,yn=null,an=null;function kn(e){if(typeof Dn=="function"&&yt(e),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(yn,e)}catch{}}var Ie=Math.clz32?Math.clz32:Wx,Vt=Math.log,tt=Math.LN2;function Wx(e){return e>>>=0,e===0?32:31-(Vt(e)/tt|0)|0}var ti=256,ri=262144,li=4194304;function gr(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ai(e,n,r){var i=e.pendingLanes;if(i===0)return 0;var o=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var k=i&134217727;return k!==0?(i=k&~d,i!==0?o=gr(i):(y&=k,y!==0?o=gr(y):r||(r=k&~e,r!==0&&(o=gr(r))))):(k=i&~d,k!==0?o=gr(k):y!==0?o=gr(y):r||(r=i&~e,r!==0&&(o=gr(r)))),o===0?0:n!==0&&n!==o&&(n&d)===0&&(d=o&-o,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:o}function Ll(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function $x(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(){var e=li;return li<<=1,(li&62914560)===0&&(li=4194304),e}function Gu(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Ul(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function e0(e,n,r,i,o,d){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var k=e.entanglements,E=e.expirationTimes,U=e.hiddenUpdates;for(r=y&~r;0<r;){var F=31-Ie(r),J=1<<F;k[F]=0,E[F]=-1;var q=U[F];if(q!==null)for(U[F]=null,F=0;F<q.length;F++){var V=q[F];V!==null&&(V.lane&=-536870913)}r&=~J}i!==0&&bf(e,i,0),d!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~n))}function bf(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-Ie(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|r&261930}function yf(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var i=31-Ie(r),o=1<<i;o&n|e[i]&n&&(e[i]|=n),r&=~o}}function vf(e,n){var r=n&-n;return r=(r&42)!==0?1:Yu(r),(r&(e.suspendedLanes|n))!==0?0:r}function Yu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:ip(e.type))}function kf(e,n){var r=Z.p;try{return Z.p=e,n()}finally{Z.p=r}}var Ft=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ft,wn="__reactProps$"+Ft,Ir="__reactContainer$"+Ft,Xu="__reactEvents$"+Ft,n0="__reactListeners$"+Ft,t0="__reactHandles$"+Ft,wf="__reactResources$"+Ft,Bl="__reactMarker$"+Ft;function Ju(e){delete e[cn],delete e[wn],delete e[Xu],delete e[n0],delete e[t0]}function Vr(e){var n=e[cn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Ir]||r[cn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Gm(e);e!==null;){if(r=e[cn])return r;e=Gm(e)}return n}e=r,r=e.parentNode}return null}function Fr(e){if(e=e[cn]||e[Ir]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Hl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function Gr(e){var n=e[wf];return n||(n=e[wf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[Bl]=!0}var Cf=new Set,Tf={};function xr(e,n){Yr(e,n),Yr(e+"Capture",n)}function Yr(e,n){for(Tf[e]=n,e=0;e<n.length;e++)Cf.add(n[e])}var r0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ef={},Af={};function l0(e){return Hr.call(Af,e)?!0:Hr.call(Ef,e)?!1:r0.test(e)?Af[e]=!0:(Ef[e]=!0,!1)}function ii(e,n,r){if(l0(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function ui(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function vt(e,n,r,i){if(i===null)e.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+i)}}function Fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function a0(e,n,r){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,d=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(y){r=""+y,d.call(this,y)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qu(e){if(!e._valueTracker){var n=jf(e)?"checked":"value";e._valueTracker=a0(e,n,""+e[n])}}function Nf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),i="";return e&&(i=jf(e)?e.checked?"true":"false":e.value),e=i,e!==r?(n.setValue(e),!0):!1}function si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var i0=/[\n"\\]/g;function Gn(e){return e.replace(i0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zu(e,n,r,i,o,d,y,k){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Fn(n)):e.value!==""+Fn(n)&&(e.value=""+Fn(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Ku(e,y,Fn(n)):r!=null?Ku(e,y,Fn(r)):i!=null&&e.removeAttribute("value"),o==null&&d!=null&&(e.defaultChecked=!!d),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?e.name=""+Fn(k):e.removeAttribute("name")}function Mf(e,n,r,i,o,d,y,k){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Qu(e);return}r=r!=null?""+Fn(r):"",n=n!=null?""+Fn(n):r,k||n===e.value||(e.value=n),e.defaultValue=n}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=k?e.checked:!!i,e.defaultChecked=!!i,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Qu(e)}function Ku(e,n,r){n==="number"&&si(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Pr(e,n,r,i){if(e=e.options,n){n={};for(var o=0;o<r.length;o++)n["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=n.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Fn(r),n=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function _f(e,n,r){if(n!=null&&(n=""+Fn(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Fn(r):""}function Df(e,n,r,i){if(n==null){if(i!=null){if(r!=null)throw Error(u(92));if(ne(i)){if(1<i.length)throw Error(u(93));i=i[0]}r=i}r==null&&(r=""),n=r}r=Fn(n),e.defaultValue=r,i=e.textContent,i===r&&i!==""&&i!==null&&(e.value=i),Qu(e)}function Xr(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var u0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rf(e,n,r){var i=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,r):typeof r!="number"||r===0||u0.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Of(e,n,r){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,r!=null){for(var i in r)!r.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in n)i=n[o],n.hasOwnProperty(o)&&r[o]!==i&&Rf(e,o,i)}else for(var d in n)n.hasOwnProperty(d)&&Rf(e,d,n[d])}function Wu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var s0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),o0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(e){return o0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function St(){}var $u=null;function es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jr=null,Qr=null;function zf(e){var n=Fr(e);if(n&&(e=n.stateNode)){var r=e[wn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Zu(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Gn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var i=r[n];if(i!==e&&i.form===e.form){var o=i[wn]||null;if(!o)throw Error(u(90));Zu(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<r.length;n++)i=r[n],i.form===e.form&&Nf(i)}break e;case"textarea":_f(e,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&Pr(e,!!r.multiple,n,!1)}}}var ns=!1;function Lf(e,n,r){if(ns)return e(n,r);ns=!0;try{var i=e(n);return i}finally{if(ns=!1,(Jr!==null||Qr!==null)&&(Zi(),Jr&&(n=Jr,e=Qr,Qr=Jr=null,zf(n),e)))for(n=0;n<e.length;n++)zf(e[n])}}function ql(e,n){var r=e.stateNode;if(r===null)return null;var i=r[wn]||null;if(i===null)return null;r=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(u(231,n,typeof r));return r}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=!1;if(kt)try{var Il={};Object.defineProperty(Il,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Il,Il),window.removeEventListener("test",Il,Il)}catch{ts=!1}var Gt=null,rs=null,ci=null;function Uf(){if(ci)return ci;var e,n=rs,r=n.length,i,o="value"in Gt?Gt.value:Gt.textContent,d=o.length;for(e=0;e<r&&n[e]===o[e];e++);var y=r-e;for(i=1;i<=y&&n[r-i]===o[d-i];i++);return ci=o.slice(e,1<i?1-i:void 0)}function fi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function Bf(){return!1}function Cn(e){function n(r,i,o,d,y){this._reactName=r,this._targetInst=o,this.type=i,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(r=e[k],this[k]=r?r(d):d[k]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?di:Bf,this.isPropagationStopped=Bf,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),n}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hi=Cn(br),Vl=x({},br,{view:0,detail:0}),c0=Cn(Vl),ls,as,Fl,mi=x({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(ls=e.screenX-Fl.screenX,as=e.screenY-Fl.screenY):as=ls=0,Fl=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:as}}),Hf=Cn(mi),f0=x({},mi,{dataTransfer:0}),d0=Cn(f0),h0=x({},Vl,{relatedTarget:0}),is=Cn(h0),m0=x({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=Cn(m0),g0=x({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x0=Cn(g0),b0=x({},br,{data:0}),qf=Cn(b0),y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=S0[e])?!!n[e]:!1}function us(){return k0}var w0=x({},Vl,{key:function(e){if(e.key){var n=y0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?v0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C0=Cn(w0),T0=x({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Cn(T0),E0=x({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),A0=Cn(E0),j0=x({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=Cn(j0),M0=x({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=Cn(M0),D0=x({},br,{newState:0,oldState:0}),R0=Cn(D0),O0=[9,13,27,32],ss=kt&&"CompositionEvent"in window,Gl=null;kt&&"documentMode"in document&&(Gl=document.documentMode);var z0=kt&&"TextEvent"in window&&!Gl,Vf=kt&&(!ss||Gl&&8<Gl&&11>=Gl),Ff=" ",Gf=!1;function Yf(e,n){switch(e){case"keyup":return O0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function L0(e,n){switch(e){case"compositionend":return Pf(n);case"keypress":return n.which!==32?null:(Gf=!0,Ff);case"textInput":return e=n.data,e===Ff&&Gf?null:e;default:return null}}function U0(e,n){if(Zr)return e==="compositionend"||!ss&&Yf(e,n)?(e=Uf(),ci=rs=Gt=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vf&&n.locale!=="ko"?null:n.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!B0[e.type]:n==="textarea"}function Jf(e,n,r,i){Jr?Qr?Qr.push(i):Qr=[i]:Jr=i,n=ru(n,"onChange"),0<n.length&&(r=new hi("onChange","change",null,r,i),e.push({event:r,listeners:n}))}var Yl=null,Pl=null;function H0(e){Mm(e,0)}function pi(e){var n=Hl(e);if(Nf(n))return e}function Qf(e,n){if(e==="change")return n}var Zf=!1;if(kt){var os;if(kt){var cs="oninput"in document;if(!cs){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),cs=typeof Kf.oninput=="function"}os=cs}else os=!1;Zf=os&&(!document.documentMode||9<document.documentMode)}function Wf(){Yl&&(Yl.detachEvent("onpropertychange",$f),Pl=Yl=null)}function $f(e){if(e.propertyName==="value"&&pi(Pl)){var n=[];Jf(n,Pl,e,es(e)),Lf(H0,n)}}function q0(e,n,r){e==="focusin"?(Wf(),Yl=n,Pl=r,Yl.attachEvent("onpropertychange",$f)):e==="focusout"&&Wf()}function I0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(Pl)}function V0(e,n){if(e==="click")return pi(n)}function F0(e,n){if(e==="input"||e==="change")return pi(n)}function G0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Rn=typeof Object.is=="function"?Object.is:G0;function Xl(e,n){if(Rn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),i=Object.keys(n);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var o=r[i];if(!Hr.call(n,o)||!Rn(e[o],n[o]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nd(e,n){var r=ed(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=n&&i>=n)return{node:r,offset:n-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ed(r)}}function td(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?td(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=si(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=si(e.document)}return n}function fs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Y0=kt&&"documentMode"in document&&11>=document.documentMode,Kr=null,ds=null,Jl=null,hs=!1;function ld(e,n,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;hs||Kr==null||Kr!==si(i)||(i=Kr,"selectionStart"in i&&fs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jl&&Xl(Jl,i)||(Jl=i,i=ru(ds,"onSelect"),0<i.length&&(n=new hi("onSelect","select",null,n,r),e.push({event:n,listeners:i}),n.target=Kr)))}function yr(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Wr={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionrun:yr("Transition","TransitionRun"),transitionstart:yr("Transition","TransitionStart"),transitioncancel:yr("Transition","TransitionCancel"),transitionend:yr("Transition","TransitionEnd")},ms={},ad={};kt&&(ad=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function vr(e){if(ms[e])return ms[e];if(!Wr[e])return e;var n=Wr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in ad)return ms[e]=n[r];return e}var id=vr("animationend"),ud=vr("animationiteration"),sd=vr("animationstart"),P0=vr("transitionrun"),X0=vr("transitionstart"),J0=vr("transitioncancel"),od=vr("transitionend"),cd=new Map,ps="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ps.push("scrollEnd");function rt(e,n){cd.set(e,n),xr(n,[e])}var gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yn=[],$r=0,gs=0;function xi(){for(var e=$r,n=gs=$r=0;n<e;){var r=Yn[n];Yn[n++]=null;var i=Yn[n];Yn[n++]=null;var o=Yn[n];Yn[n++]=null;var d=Yn[n];if(Yn[n++]=null,i!==null&&o!==null){var y=i.pending;y===null?o.next=o:(o.next=y.next,y.next=o),i.pending=o}d!==0&&fd(r,o,d)}}function bi(e,n,r,i){Yn[$r++]=e,Yn[$r++]=n,Yn[$r++]=r,Yn[$r++]=i,gs|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function xs(e,n,r,i){return bi(e,n,r,i),yi(e)}function Sr(e,n){return bi(e,null,null,n),yi(e)}function fd(e,n,r){e.lanes|=r;var i=e.alternate;i!==null&&(i.lanes|=r);for(var o=!1,d=e.return;d!==null;)d.childLanes|=r,i=d.alternate,i!==null&&(i.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(o=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,o&&n!==null&&(o=31-Ie(r),e=d.hiddenUpdates,i=e[o],i===null?e[o]=[n]:i.push(n),n.lane=r|536870912),d):null}function yi(e){if(50<ga)throw ga=0,Ao=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var el={};function Q0(e,n,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,n,r,i){return new Q0(e,n,r,i)}function bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wt(e,n){var r=e.alternate;return r===null?(r=On(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function dd(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vi(e,n,r,i,o,d){var y=0;if(i=e,typeof e=="function")bs(e)&&(y=1);else if(typeof e=="string")y=e1(e,r,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=On(31,r,n,o),e.elementType=W,e.lanes=d,e;case O:return kr(r.children,o,d,n);case z:y=8,o|=24;break;case j:return e=On(12,r,n,o|2),e.elementType=j,e.lanes=d,e;case re:return e=On(13,r,n,o),e.elementType=re,e.lanes=d,e;case I:return e=On(19,r,n,o),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:y=10;break e;case H:y=9;break e;case K:y=11;break e;case ee:y=14;break e;case oe:y=16,i=null;break e}y=29,r=Error(u(130,e===null?"null":typeof e,"")),i=null}return n=On(y,r,n,o),n.elementType=e,n.type=i,n.lanes=d,n}function kr(e,n,r,i){return e=On(7,e,i,n),e.lanes=r,e}function ys(e,n,r){return e=On(6,e,null,n),e.lanes=r,e}function hd(e){var n=On(18,null,null,0);return n.stateNode=e,n}function vs(e,n,r){return n=On(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var md=new WeakMap;function Pn(e,n){if(typeof e=="object"&&e!==null){var r=md.get(e);return r!==void 0?r:(n={value:e,source:n,stack:ni(n)},md.set(e,n),n)}return{value:e,source:n,stack:ni(n)}}var nl=[],tl=0,Si=null,Ql=0,Xn=[],Jn=0,Yt=null,ct=1,ft="";function Ct(e,n){nl[tl++]=Ql,nl[tl++]=Si,Si=e,Ql=n}function pd(e,n,r){Xn[Jn++]=ct,Xn[Jn++]=ft,Xn[Jn++]=Yt,Yt=e;var i=ct;e=ft;var o=32-Ie(i)-1;i&=~(1<<o),r+=1;var d=32-Ie(n)+o;if(30<d){var y=o-o%5;d=(i&(1<<y)-1).toString(32),i>>=y,o-=y,ct=1<<32-Ie(n)+o|r<<o|i,ft=d+e}else ct=1<<d|r<<o|i,ft=e}function Ss(e){e.return!==null&&(Ct(e,1),pd(e,1,0))}function ks(e){for(;e===Si;)Si=nl[--tl],nl[tl]=null,Ql=nl[--tl],nl[tl]=null;for(;e===Yt;)Yt=Xn[--Jn],Xn[Jn]=null,ft=Xn[--Jn],Xn[Jn]=null,ct=Xn[--Jn],Xn[Jn]=null}function gd(e,n){Xn[Jn++]=ct,Xn[Jn++]=ft,Xn[Jn++]=Yt,ct=n.id,ft=n.overflow,Yt=e}var fn=null,Ye=null,Ne=!1,Pt=null,Qn=!1,ws=Error(u(519));function Xt(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zl(Pn(n,e)),ws}function xd(e){var n=e.stateNode,r=e.type,i=e.memoizedProps;switch(n[cn]=e,n[wn]=i,r){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(r=0;r<ba.length;r++)Ce(ba[r],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),Mf(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),Df(n,i.value,i.defaultValue,i.children)}r=i.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||i.suppressHydrationWarning===!0||Om(n.textContent,r)?(i.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),i.onScroll!=null&&Ce("scroll",n),i.onScrollEnd!=null&&Ce("scrollend",n),i.onClick!=null&&(n.onclick=St),n=!0):n=!1,n||Xt(e,!0)}function bd(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 31:case 13:Qn=!1;return;case 27:case 3:Qn=!0;return;default:fn=fn.return}}function rl(e){if(e!==fn)return!1;if(!Ne)return bd(e),Ne=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Vo(e.type,e.memoizedProps)),r=!r),r&&Ye&&Xt(e),bd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Fm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Fm(e)}else n===27?(n=Ye,ur(e.type)?(e=Xo,Xo=null,Ye=e):Ye=n):Ye=fn?Kn(e.stateNode.nextSibling):null;return!0}function wr(){Ye=fn=null,Ne=!1}function Cs(){var e=Pt;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Pt=null),e}function Zl(e){Pt===null?Pt=[e]:Pt.push(e)}var Ts=N(null),Cr=null,Tt=null;function Jt(e,n,r){w(Ts,n._currentValue),n._currentValue=r}function Et(e){e._currentValue=Ts.current,G(Ts)}function Es(e,n,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===r)break;e=e.return}}function As(e,n,r,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var d=o.dependencies;if(d!==null){var y=o.child;d=d.firstContext;e:for(;d!==null;){var k=d;d=o;for(var E=0;E<n.length;E++)if(k.context===n[E]){d.lanes|=r,k=d.alternate,k!==null&&(k.lanes|=r),Es(d.return,r,e),i||(y=null);break e}d=k.next}}else if(o.tag===18){if(y=o.return,y===null)throw Error(u(341));y.lanes|=r,d=y.alternate,d!==null&&(d.lanes|=r),Es(y,r,e),y=null}else y=o.child;if(y!==null)y.return=o;else for(y=o;y!==null;){if(y===e){y=null;break}if(o=y.sibling,o!==null){o.return=y.return,y=o;break}y=y.return}o=y}}function ll(e,n,r,i){e=null;for(var o=n,d=!1;o!==null;){if(!d){if((o.flags&524288)!==0)d=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var y=o.alternate;if(y===null)throw Error(u(387));if(y=y.memoizedProps,y!==null){var k=o.type;Rn(o.pendingProps.value,y.value)||(e!==null?e.push(k):e=[k])}}else if(o===Ee.current){if(y=o.alternate,y===null)throw Error(u(387));y.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(wa):e=[wa])}o=o.return}e!==null&&As(n,e,r,i),n.flags|=262144}function ki(e){for(e=e.firstContext;e!==null;){if(!Rn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Tr(e){Cr=e,Tt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dn(e){return yd(Cr,e)}function wi(e,n){return Cr===null&&Tr(e),yd(e,n)}function yd(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Tt===null){if(e===null)throw Error(u(308));Tt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Tt=Tt.next=n;return r}var Z0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},K0=t.unstable_scheduleCallback,W0=t.unstable_NormalPriority,en={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function js(){return{controller:new Z0,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&K0(W0,function(){e.controller.abort()})}var Wl=null,Ns=0,al=0,il=null;function $0(e,n){if(Wl===null){var r=Wl=[];Ns=0,al=Ro(),il={status:"pending",value:void 0,then:function(i){r.push(i)}}}return Ns++,n.then(vd,vd),n}function vd(){if(--Ns===0&&Wl!==null){il!==null&&(il.status="fulfilled");var e=Wl;Wl=null,al=0,il=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function eb(e,n){var r=[],i={status:"pending",value:null,reason:null,then:function(o){r.push(o)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var o=0;o<r.length;o++)(0,r[o])(n)},function(o){for(i.status="rejected",i.reason=o,o=0;o<r.length;o++)(0,r[o])(void 0)}),i}var Sd=B.S;B.S=function(e,n){lm=bn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$0(e,n),Sd!==null&&Sd(e,n)};var Er=N(null);function Ms(){var e=Er.current;return e!==null?e:Ve.pooledCache}function Ci(e,n){n===null?w(Er,Er.current):w(Er,n.pool)}function kd(){var e=Ms();return e===null?null:{parent:en._currentValue,pool:e}}var ul=Error(u(460)),_s=Error(u(474)),Ti=Error(u(542)),Ei={then:function(){}};function wd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cd(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(St,St),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ed(e),e;default:if(typeof n.status=="string")n.then(St,St);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=i}},function(i){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ed(e),e}throw jr=n,ul}}function Ar(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(jr=r,ul):r}}var jr=null;function Td(){if(jr===null)throw Error(u(459));var e=jr;return jr=null,e}function Ed(e){if(e===ul||e===Ti)throw Error(u(483))}var sl=null,$l=0;function Ai(e){var n=$l;return $l+=1,sl===null&&(sl=[]),Cd(sl,e,n)}function ea(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ji(e,n){throw n.$$typeof===S?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ad(e){function n(R,M){if(e){var L=R.deletions;L===null?(R.deletions=[M],R.flags|=16):L.push(M)}}function r(R,M){if(!e)return null;for(;M!==null;)n(R,M),M=M.sibling;return null}function i(R){for(var M=new Map;R!==null;)R.key!==null?M.set(R.key,R):M.set(R.index,R),R=R.sibling;return M}function o(R,M){return R=wt(R,M),R.index=0,R.sibling=null,R}function d(R,M,L){return R.index=L,e?(L=R.alternate,L!==null?(L=L.index,L<M?(R.flags|=67108866,M):L):(R.flags|=67108866,M)):(R.flags|=1048576,M)}function y(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function k(R,M,L,X){return M===null||M.tag!==6?(M=ys(L,R.mode,X),M.return=R,M):(M=o(M,L),M.return=R,M)}function E(R,M,L,X){var fe=L.type;return fe===O?F(R,M,L.props.children,X,L.key):M!==null&&(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===oe&&Ar(fe)===M.type)?(M=o(M,L.props),ea(M,L),M.return=R,M):(M=vi(L.type,L.key,L.props,null,R.mode,X),ea(M,L),M.return=R,M)}function U(R,M,L,X){return M===null||M.tag!==4||M.stateNode.containerInfo!==L.containerInfo||M.stateNode.implementation!==L.implementation?(M=vs(L,R.mode,X),M.return=R,M):(M=o(M,L.children||[]),M.return=R,M)}function F(R,M,L,X,fe){return M===null||M.tag!==7?(M=kr(L,R.mode,X,fe),M.return=R,M):(M=o(M,L),M.return=R,M)}function J(R,M,L){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=ys(""+M,R.mode,L),M.return=R,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case v:return L=vi(M.type,M.key,M.props,null,R.mode,L),ea(L,M),L.return=R,L;case C:return M=vs(M,R.mode,L),M.return=R,M;case oe:return M=Ar(M),J(R,M,L)}if(ne(M)||Q(M))return M=kr(M,R.mode,L,null),M.return=R,M;if(typeof M.then=="function")return J(R,Ai(M),L);if(M.$$typeof===_)return J(R,wi(R,M),L);ji(R,M)}return null}function q(R,M,L,X){var fe=M!==null?M.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return fe!==null?null:k(R,M,""+L,X);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case v:return L.key===fe?E(R,M,L,X):null;case C:return L.key===fe?U(R,M,L,X):null;case oe:return L=Ar(L),q(R,M,L,X)}if(ne(L)||Q(L))return fe!==null?null:F(R,M,L,X,null);if(typeof L.then=="function")return q(R,M,Ai(L),X);if(L.$$typeof===_)return q(R,M,wi(R,L),X);ji(R,L)}return null}function V(R,M,L,X,fe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return R=R.get(L)||null,k(M,R,""+X,fe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return R=R.get(X.key===null?L:X.key)||null,E(M,R,X,fe);case C:return R=R.get(X.key===null?L:X.key)||null,U(M,R,X,fe);case oe:return X=Ar(X),V(R,M,L,X,fe)}if(ne(X)||Q(X))return R=R.get(L)||null,F(M,R,X,fe,null);if(typeof X.then=="function")return V(R,M,L,Ai(X),fe);if(X.$$typeof===_)return V(R,M,L,wi(M,X),fe);ji(M,X)}return null}function ue(R,M,L,X){for(var fe=null,_e=null,se=M,ve=M=0,je=null;se!==null&&ve<L.length;ve++){se.index>ve?(je=se,se=null):je=se.sibling;var De=q(R,se,L[ve],X);if(De===null){se===null&&(se=je);break}e&&se&&De.alternate===null&&n(R,se),M=d(De,M,ve),_e===null?fe=De:_e.sibling=De,_e=De,se=je}if(ve===L.length)return r(R,se),Ne&&Ct(R,ve),fe;if(se===null){for(;ve<L.length;ve++)se=J(R,L[ve],X),se!==null&&(M=d(se,M,ve),_e===null?fe=se:_e.sibling=se,_e=se);return Ne&&Ct(R,ve),fe}for(se=i(se);ve<L.length;ve++)je=V(se,R,ve,L[ve],X),je!==null&&(e&&je.alternate!==null&&se.delete(je.key===null?ve:je.key),M=d(je,M,ve),_e===null?fe=je:_e.sibling=je,_e=je);return e&&se.forEach(function(dr){return n(R,dr)}),Ne&&Ct(R,ve),fe}function me(R,M,L,X){if(L==null)throw Error(u(151));for(var fe=null,_e=null,se=M,ve=M=0,je=null,De=L.next();se!==null&&!De.done;ve++,De=L.next()){se.index>ve?(je=se,se=null):je=se.sibling;var dr=q(R,se,De.value,X);if(dr===null){se===null&&(se=je);break}e&&se&&dr.alternate===null&&n(R,se),M=d(dr,M,ve),_e===null?fe=dr:_e.sibling=dr,_e=dr,se=je}if(De.done)return r(R,se),Ne&&Ct(R,ve),fe;if(se===null){for(;!De.done;ve++,De=L.next())De=J(R,De.value,X),De!==null&&(M=d(De,M,ve),_e===null?fe=De:_e.sibling=De,_e=De);return Ne&&Ct(R,ve),fe}for(se=i(se);!De.done;ve++,De=L.next())De=V(se,R,ve,De.value,X),De!==null&&(e&&De.alternate!==null&&se.delete(De.key===null?ve:De.key),M=d(De,M,ve),_e===null?fe=De:_e.sibling=De,_e=De);return e&&se.forEach(function(f1){return n(R,f1)}),Ne&&Ct(R,ve),fe}function qe(R,M,L,X){if(typeof L=="object"&&L!==null&&L.type===O&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case v:e:{for(var fe=L.key;M!==null;){if(M.key===fe){if(fe=L.type,fe===O){if(M.tag===7){r(R,M.sibling),X=o(M,L.props.children),X.return=R,R=X;break e}}else if(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===oe&&Ar(fe)===M.type){r(R,M.sibling),X=o(M,L.props),ea(X,L),X.return=R,R=X;break e}r(R,M);break}else n(R,M);M=M.sibling}L.type===O?(X=kr(L.props.children,R.mode,X,L.key),X.return=R,R=X):(X=vi(L.type,L.key,L.props,null,R.mode,X),ea(X,L),X.return=R,R=X)}return y(R);case C:e:{for(fe=L.key;M!==null;){if(M.key===fe)if(M.tag===4&&M.stateNode.containerInfo===L.containerInfo&&M.stateNode.implementation===L.implementation){r(R,M.sibling),X=o(M,L.children||[]),X.return=R,R=X;break e}else{r(R,M);break}else n(R,M);M=M.sibling}X=vs(L,R.mode,X),X.return=R,R=X}return y(R);case oe:return L=Ar(L),qe(R,M,L,X)}if(ne(L))return ue(R,M,L,X);if(Q(L)){if(fe=Q(L),typeof fe!="function")throw Error(u(150));return L=fe.call(L),me(R,M,L,X)}if(typeof L.then=="function")return qe(R,M,Ai(L),X);if(L.$$typeof===_)return qe(R,M,wi(R,L),X);ji(R,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,M!==null&&M.tag===6?(r(R,M.sibling),X=o(M,L),X.return=R,R=X):(r(R,M),X=ys(L,R.mode,X),X.return=R,R=X),y(R)):r(R,M)}return function(R,M,L,X){try{$l=0;var fe=qe(R,M,L,X);return sl=null,fe}catch(se){if(se===ul||se===Ti)throw se;var _e=On(29,se,null,R.mode);return _e.lanes=X,_e.return=R,_e}finally{}}}var Nr=Ad(!0),jd=Ad(!1),Qt=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kt(e,n,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Re&2)!==0){var o=i.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n,n=yi(e),fd(e,null,r),n}return bi(e,i,n,r),yi(e)}function na(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,yf(e,r)}}function Os(e,n){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var o=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?o=d=y:d=d.next=y,r=r.next}while(r!==null);d===null?o=d=n:d=d.next=n}else o=d=n;r={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var zs=!1;function ta(){if(zs){var e=il;if(e!==null)throw e}}function ra(e,n,r,i){zs=!1;var o=e.updateQueue;Qt=!1;var d=o.firstBaseUpdate,y=o.lastBaseUpdate,k=o.shared.pending;if(k!==null){o.shared.pending=null;var E=k,U=E.next;E.next=null,y===null?d=U:y.next=U,y=E;var F=e.alternate;F!==null&&(F=F.updateQueue,k=F.lastBaseUpdate,k!==y&&(k===null?F.firstBaseUpdate=U:k.next=U,F.lastBaseUpdate=E))}if(d!==null){var J=o.baseState;y=0,F=U=E=null,k=d;do{var q=k.lane&-536870913,V=q!==k.lane;if(V?(Ae&q)===q:(i&q)===q){q!==0&&q===al&&(zs=!0),F!==null&&(F=F.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var ue=e,me=k;q=n;var qe=r;switch(me.tag){case 1:if(ue=me.payload,typeof ue=="function"){J=ue.call(qe,J,q);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=me.payload,q=typeof ue=="function"?ue.call(qe,J,q):ue,q==null)break e;J=x({},J,q);break e;case 2:Qt=!0}}q=k.callback,q!==null&&(e.flags|=64,V&&(e.flags|=8192),V=o.callbacks,V===null?o.callbacks=[q]:V.push(q))}else V={lane:q,tag:k.tag,payload:k.payload,callback:k.callback,next:null},F===null?(U=F=V,E=J):F=F.next=V,y|=q;if(k=k.next,k===null){if(k=o.shared.pending,k===null)break;V=k,k=V.next,V.next=null,o.lastBaseUpdate=V,o.shared.pending=null}}while(!0);F===null&&(E=J),o.baseState=E,o.firstBaseUpdate=U,o.lastBaseUpdate=F,d===null&&(o.shared.lanes=0),tr|=y,e.lanes=y,e.memoizedState=J}}function Nd(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function Md(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Nd(r[e],n)}var ol=N(null),Ni=N(0);function _d(e,n){e=zt,w(Ni,e),w(ol,n),zt=e|n.baseLanes}function Ls(){w(Ni,zt),w(ol,ol.current)}function Us(){zt=Ni.current,G(ol),G(Ni)}var zn=N(null),Zn=null;function Wt(e){var n=e.alternate;w(We,We.current&1),w(zn,e),Zn===null&&(n===null||ol.current!==null||n.memoizedState!==null)&&(Zn=e)}function Bs(e){w(We,We.current),w(zn,e),Zn===null&&(Zn=e)}function Dd(e){e.tag===22?(w(We,We.current),w(zn,e),Zn===null&&(Zn=e)):$t()}function $t(){w(We,We.current),w(zn,zn.current)}function Ln(e){G(zn),Zn===e&&(Zn=null),G(We)}var We=N(0);function Mi(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Yo(r)||Po(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var At=0,ye=null,Be=null,nn=null,_i=!1,cl=!1,Mr=!1,Di=0,la=0,fl=null,nb=0;function Ze(){throw Error(u(321))}function Hs(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Rn(e[r],n[r]))return!1;return!0}function qs(e,n,r,i,o,d){return At=d,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?ph:no,Mr=!1,d=r(i,o),Mr=!1,cl&&(d=Od(n,r,i,o)),Rd(e),d}function Rd(e){B.H=ua;var n=Be!==null&&Be.next!==null;if(At=0,nn=Be=ye=null,_i=!1,la=0,fl=null,n)throw Error(u(300));e===null||tn||(e=e.dependencies,e!==null&&ki(e)&&(tn=!0))}function Od(e,n,r,i){ye=e;var o=0;do{if(cl&&(fl=null),la=0,cl=!1,25<=o)throw Error(u(301));if(o+=1,nn=Be=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=gh,d=n(r,i)}while(cl);return d}function tb(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?aa(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ye.flags|=1024),n}function Is(){var e=Di!==0;return Di=0,e}function Vs(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Fs(e){if(_i){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_i=!1}At=0,nn=Be=ye=null,cl=!1,la=Di=0,fl=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ye.memoizedState=nn=e:nn=nn.next=e,nn}function $e(){if(Be===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=nn===null?ye.memoizedState:nn.next;if(n!==null)nn=n,Be=e;else{if(e===null)throw ye.alternate===null?Error(u(467)):Error(u(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},nn===null?ye.memoizedState=nn=e:nn=nn.next=e}return nn}function Ri(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function aa(e){var n=la;return la+=1,fl===null&&(fl=[]),e=Cd(fl,e,n),n=ye,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?ph:no),e}function Oi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return aa(e);if(e.$$typeof===_)return dn(e)}throw Error(u(438,String(e)))}function Gs(e){var n=null,r=ye.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var i=ye.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Ri(),ye.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),i=0;i<e;i++)r[i]=A;return n.index++,r}function jt(e,n){return typeof n=="function"?n(e):n}function zi(e){var n=$e();return Ys(n,Be,e)}function Ys(e,n,r){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=r;var o=e.baseQueue,d=i.pending;if(d!==null){if(o!==null){var y=o.next;o.next=d.next,d.next=y}n.baseQueue=o=d,i.pending=null}if(d=e.baseState,o===null)e.memoizedState=d;else{n=o.next;var k=y=null,E=null,U=n,F=!1;do{var J=U.lane&-536870913;if(J!==U.lane?(Ae&J)===J:(At&J)===J){var q=U.revertLane;if(q===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),J===al&&(F=!0);else if((At&q)===q){U=U.next,q===al&&(F=!0);continue}else J={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(k=E=J,y=d):E=E.next=J,ye.lanes|=q,tr|=q;J=U.action,Mr&&r(d,J),d=U.hasEagerState?U.eagerState:r(d,J)}else q={lane:J,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(k=E=q,y=d):E=E.next=q,ye.lanes|=J,tr|=J;U=U.next}while(U!==null&&U!==n);if(E===null?y=d:E.next=k,!Rn(d,e.memoizedState)&&(tn=!0,F&&(r=il,r!==null)))throw r;e.memoizedState=d,e.baseState=y,e.baseQueue=E,i.lastRenderedState=d}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ps(e){var n=$e(),r=n.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=e;var i=r.dispatch,o=r.pending,d=n.memoizedState;if(o!==null){r.pending=null;var y=o=o.next;do d=e(d,y.action),y=y.next;while(y!==o);Rn(d,n.memoizedState)||(tn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,i]}function zd(e,n,r){var i=ye,o=$e(),d=Ne;if(d){if(r===void 0)throw Error(u(407));r=r()}else r=n();var y=!Rn((Be||o).memoizedState,r);if(y&&(o.memoizedState=r,tn=!0),o=o.queue,Qs(Bd.bind(null,i,o,e),[e]),o.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(i.flags|=2048,dl(9,{destroy:void 0},Ud.bind(null,i,o,r,n),null),Ve===null)throw Error(u(349));d||(At&127)!==0||Ld(i,n,r)}return r}function Ld(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ye.updateQueue,n===null?(n=Ri(),ye.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Ud(e,n,r,i){n.value=r,n.getSnapshot=i,Hd(n)&&qd(e)}function Bd(e,n,r){return r(function(){Hd(n)&&qd(e)})}function Hd(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Rn(e,r)}catch{return!0}}function qd(e){var n=Sr(e,2);n!==null&&Nn(n,e,2)}function Xs(e){var n=vn();if(typeof e=="function"){var r=e;if(e=r(),Mr){kn(!0);try{r()}finally{kn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},n}function Id(e,n,r,i){return e.baseState=r,Ys(e,Be,typeof i=="function"?i:jt)}function rb(e,n,r,i,o){if(Bi(e))throw Error(u(485));if(e=n.action,e!==null){var d={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?r(!0):d.isTransition=!1,i(d),r=n.pending,r===null?(d.next=n.pending=d,Vd(n,d)):(d.next=r.next,n.pending=r.next=d)}}function Vd(e,n){var r=n.action,i=n.payload,o=e.state;if(n.isTransition){var d=B.T,y={};B.T=y;try{var k=r(o,i),E=B.S;E!==null&&E(y,k),Fd(e,n,k)}catch(U){Js(e,n,U)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=r(o,i),Fd(e,n,d)}catch(U){Js(e,n,U)}}function Fd(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(i){Gd(e,n,i)},function(i){return Js(e,n,i)}):Gd(e,n,r)}function Gd(e,n,r){n.status="fulfilled",n.value=r,Yd(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,Vd(e,r)))}function Js(e,n,r){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=r,Yd(n),n=n.next;while(n!==i)}e.action=null}function Yd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Pd(e,n){return n}function Xd(e,n){if(Ne){var r=Ve.formState;if(r!==null){e:{var i=ye;if(Ne){if(Ye){n:{for(var o=Ye,d=Qn;o.nodeType!==8;){if(!d){o=null;break n}if(o=Kn(o.nextSibling),o===null){o=null;break n}}d=o.data,o=d==="F!"||d==="F"?o:null}if(o){Ye=Kn(o.nextSibling),i=o.data==="F!";break e}}Xt(i)}i=!1}i&&(n=r[0])}}return r=vn(),r.memoizedState=r.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pd,lastRenderedState:n},r.queue=i,r=dh.bind(null,ye,i),i.dispatch=r,i=Xs(!1),d=eo.bind(null,ye,!1,i.queue),i=vn(),o={state:n,dispatch:null,action:e,pending:null},i.queue=o,r=rb.bind(null,ye,o,d,r),o.dispatch=r,i.memoizedState=e,[n,r,!1]}function Jd(e){var n=$e();return Qd(n,Be,e)}function Qd(e,n,r){if(n=Ys(e,n,Pd)[0],e=zi(jt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=aa(n)}catch(y){throw y===ul?Ti:y}else i=n;n=$e();var o=n.queue,d=o.dispatch;return r!==n.memoizedState&&(ye.flags|=2048,dl(9,{destroy:void 0},lb.bind(null,o,r),null)),[i,d,e]}function lb(e,n){e.action=n}function Zd(e){var n=$e(),r=Be;if(r!==null)return Qd(n,r,e);$e(),n=n.memoizedState,r=$e();var i=r.queue.dispatch;return r.memoizedState=e,[n,i,!1]}function dl(e,n,r,i){return e={tag:e,create:r,deps:i,inst:n,next:null},n=ye.updateQueue,n===null&&(n=Ri(),ye.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,n.lastEffect=e),e}function Kd(){return $e().memoizedState}function Li(e,n,r,i){var o=vn();ye.flags|=e,o.memoizedState=dl(1|n,{destroy:void 0},r,i===void 0?null:i)}function Ui(e,n,r,i){var o=$e();i=i===void 0?null:i;var d=o.memoizedState.inst;Be!==null&&i!==null&&Hs(i,Be.memoizedState.deps)?o.memoizedState=dl(n,d,r,i):(ye.flags|=e,o.memoizedState=dl(1|n,d,r,i))}function Wd(e,n){Li(8390656,8,e,n)}function Qs(e,n){Ui(2048,8,e,n)}function ab(e){ye.flags|=4;var n=ye.updateQueue;if(n===null)n=Ri(),ye.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function $d(e){var n=$e().memoizedState;return ab({ref:n,nextImpl:e}),function(){if((Re&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function eh(e,n){return Ui(4,2,e,n)}function nh(e,n){return Ui(4,4,e,n)}function th(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rh(e,n,r){r=r!=null?r.concat([e]):null,Ui(4,4,th.bind(null,n,e),r)}function Zs(){}function lh(e,n){var r=$e();n=n===void 0?null:n;var i=r.memoizedState;return n!==null&&Hs(n,i[1])?i[0]:(r.memoizedState=[e,n],e)}function ah(e,n){var r=$e();n=n===void 0?null:n;var i=r.memoizedState;if(n!==null&&Hs(n,i[1]))return i[0];if(i=e(),Mr){kn(!0);try{e()}finally{kn(!1)}}return r.memoizedState=[i,n],i}function Ks(e,n,r){return r===void 0||(At&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=im(),ye.lanes|=e,tr|=e,r)}function ih(e,n,r,i){return Rn(r,n)?r:ol.current!==null?(e=Ks(e,r,i),Rn(e,n)||(tn=!0),e):(At&42)===0||(At&1073741824)!==0&&(Ae&261930)===0?(tn=!0,e.memoizedState=r):(e=im(),ye.lanes|=e,tr|=e,n)}function uh(e,n,r,i,o){var d=Z.p;Z.p=d!==0&&8>d?d:8;var y=B.T,k={};B.T=k,eo(e,!1,n,r);try{var E=o(),U=B.S;if(U!==null&&U(k,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=eb(E,i);ia(e,n,F,Hn(e))}else ia(e,n,i,Hn(e))}catch(J){ia(e,n,{then:function(){},status:"rejected",reason:J},Hn())}finally{Z.p=d,y!==null&&k.types!==null&&(y.types=k.types),B.T=y}}function ib(){}function Ws(e,n,r,i){if(e.tag!==5)throw Error(u(476));var o=sh(e).queue;uh(e,o,n,ie,r===null?ib:function(){return oh(e),r(i)})}function sh(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:ie},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function oh(e){var n=sh(e);n.next===null&&(n=e.alternate.memoizedState),ia(e,n.next.queue,{},Hn())}function $s(){return dn(wa)}function ch(){return $e().memoizedState}function fh(){return $e().memoizedState}function ub(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Hn();e=Zt(r);var i=Kt(n,e,r);i!==null&&(Nn(i,n,r),na(i,n,r)),n={cache:js()},e.payload=n;return}n=n.return}}function sb(e,n,r){var i=Hn();r={lane:i,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bi(e)?hh(n,r):(r=xs(e,n,r,i),r!==null&&(Nn(r,e,i),mh(r,n,i)))}function dh(e,n,r){var i=Hn();ia(e,n,r,i)}function ia(e,n,r,i){var o={lane:i,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))hh(n,o);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,k=d(y,r);if(o.hasEagerState=!0,o.eagerState=k,Rn(k,y))return bi(e,n,o,0),Ve===null&&xi(),!1}catch{}finally{}if(r=xs(e,n,o,i),r!==null)return Nn(r,e,i),mh(r,n,i),!0}return!1}function eo(e,n,r,i){if(i={lane:2,revertLane:Ro(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(n)throw Error(u(479))}else n=xs(e,r,i,2),n!==null&&Nn(n,e,2)}function Bi(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function hh(e,n){cl=_i=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function mh(e,n,r){if((r&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,r|=i,n.lanes=r,yf(e,r)}}var ua={readContext:dn,use:Oi,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};ua.useEffectEvent=Ze;var ph={readContext:dn,use:Oi,useCallback:function(e,n){return vn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:Wd,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Li(4194308,4,th.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Li(4194308,4,e,n)},useInsertionEffect:function(e,n){Li(4,2,e,n)},useMemo:function(e,n){var r=vn();n=n===void 0?null:n;var i=e();if(Mr){kn(!0);try{e()}finally{kn(!1)}}return r.memoizedState=[i,n],i},useReducer:function(e,n,r){var i=vn();if(r!==void 0){var o=r(n);if(Mr){kn(!0);try{r(n)}finally{kn(!1)}}}else o=n;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=sb.bind(null,ye,e),[i.memoizedState,e]},useRef:function(e){var n=vn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xs(e);var n=e.queue,r=dh.bind(null,ye,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Zs,useDeferredValue:function(e,n){var r=vn();return Ks(r,e,n)},useTransition:function(){var e=Xs(!1);return e=uh.bind(null,ye,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var i=ye,o=vn();if(Ne){if(r===void 0)throw Error(u(407));r=r()}else{if(r=n(),Ve===null)throw Error(u(349));(Ae&127)!==0||Ld(i,n,r)}o.memoizedState=r;var d={value:r,getSnapshot:n};return o.queue=d,Wd(Bd.bind(null,i,d,e),[e]),i.flags|=2048,dl(9,{destroy:void 0},Ud.bind(null,i,d,r,n),null),r},useId:function(){var e=vn(),n=Ve.identifierPrefix;if(Ne){var r=ft,i=ct;r=(i&~(1<<32-Ie(i)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Di++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=nb++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$s,useFormState:Xd,useActionState:Xd,useOptimistic:function(e){var n=vn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=eo.bind(null,ye,!0,r),r.dispatch=n,[e,n]},useMemoCache:Gs,useCacheRefresh:function(){return vn().memoizedState=ub.bind(null,ye)},useEffectEvent:function(e){var n=vn(),r={impl:e};return n.memoizedState=r,function(){if((Re&2)!==0)throw Error(u(440));return r.impl.apply(void 0,arguments)}}},no={readContext:dn,use:Oi,useCallback:lh,useContext:dn,useEffect:Qs,useImperativeHandle:rh,useInsertionEffect:eh,useLayoutEffect:nh,useMemo:ah,useReducer:zi,useRef:Kd,useState:function(){return zi(jt)},useDebugValue:Zs,useDeferredValue:function(e,n){var r=$e();return ih(r,Be.memoizedState,e,n)},useTransition:function(){var e=zi(jt)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:aa(e),n]},useSyncExternalStore:zd,useId:ch,useHostTransitionStatus:$s,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,n){var r=$e();return Id(r,Be,e,n)},useMemoCache:Gs,useCacheRefresh:fh};no.useEffectEvent=$d;var gh={readContext:dn,use:Oi,useCallback:lh,useContext:dn,useEffect:Qs,useImperativeHandle:rh,useInsertionEffect:eh,useLayoutEffect:nh,useMemo:ah,useReducer:Ps,useRef:Kd,useState:function(){return Ps(jt)},useDebugValue:Zs,useDeferredValue:function(e,n){var r=$e();return Be===null?Ks(r,e,n):ih(r,Be.memoizedState,e,n)},useTransition:function(){var e=Ps(jt)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:aa(e),n]},useSyncExternalStore:zd,useId:ch,useHostTransitionStatus:$s,useFormState:Zd,useActionState:Zd,useOptimistic:function(e,n){var r=$e();return Be!==null?Id(r,Be,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Gs,useCacheRefresh:fh};gh.useEffectEvent=$d;function to(e,n,r,i){n=e.memoizedState,r=r(i,n),r=r==null?n:x({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ro={enqueueSetState:function(e,n,r){e=e._reactInternals;var i=Hn(),o=Zt(i);o.payload=n,r!=null&&(o.callback=r),n=Kt(e,o,i),n!==null&&(Nn(n,e,i),na(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var i=Hn(),o=Zt(i);o.tag=1,o.payload=n,r!=null&&(o.callback=r),n=Kt(e,o,i),n!==null&&(Nn(n,e,i),na(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Hn(),i=Zt(r);i.tag=2,n!=null&&(i.callback=n),n=Kt(e,i,r),n!==null&&(Nn(n,e,r),na(n,e,r))}};function xh(e,n,r,i,o,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,y):n.prototype&&n.prototype.isPureReactComponent?!Xl(r,i)||!Xl(o,d):!0}function bh(e,n,r,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,i),n.state!==e&&ro.enqueueReplaceState(n,n.state,null)}function _r(e,n){var r=n;if("ref"in n){r={};for(var i in n)i!=="ref"&&(r[i]=n[i])}if(e=e.defaultProps){r===n&&(r=x({},r));for(var o in e)r[o]===void 0&&(r[o]=e[o])}return r}function yh(e){gi(e)}function vh(e){console.error(e)}function Sh(e){gi(e)}function Hi(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function kh(e,n,r){try{var i=e.onCaughtError;i(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function lo(e,n,r){return r=Zt(r),r.tag=3,r.payload={element:null},r.callback=function(){Hi(e,n)},r}function wh(e){return e=Zt(e),e.tag=3,e}function Ch(e,n,r,i){var o=r.type.getDerivedStateFromError;if(typeof o=="function"){var d=i.value;e.payload=function(){return o(d)},e.callback=function(){kh(n,r,i)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){kh(n,r,i),typeof o!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var k=i.stack;this.componentDidCatch(i.value,{componentStack:k!==null?k:""})})}function ob(e,n,r,i,o){if(r.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=r.alternate,n!==null&&ll(n,r,o,!0),r=zn.current,r!==null){switch(r.tag){case 31:case 13:return Zn===null?Ki():r.alternate===null&&Ke===0&&(Ke=3),r.flags&=-257,r.flags|=65536,r.lanes=o,i===Ei?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([i]):n.add(i),Mo(e,i,o)),!1;case 22:return r.flags|=65536,i===Ei?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([i]):r.add(i)),Mo(e,i,o)),!1}throw Error(u(435,r.tag))}return Mo(e,i,o),Ki(),!1}if(Ne)return n=zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,i!==ws&&(e=Error(u(422),{cause:i}),Zl(Pn(e,r)))):(i!==ws&&(n=Error(u(423),{cause:i}),Zl(Pn(n,r))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=Pn(i,r),o=lo(e.stateNode,i,o),Os(e,o),Ke!==4&&(Ke=2)),!1;var d=Error(u(520),{cause:i});if(d=Pn(d,r),pa===null?pa=[d]:pa.push(d),Ke!==4&&(Ke=2),n===null)return!0;i=Pn(i,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=o&-o,r.lanes|=e,e=lo(r.stateNode,i,e),Os(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(rr===null||!rr.has(d))))return r.flags|=65536,o&=-o,r.lanes|=o,o=wh(o),Ch(o,e,r,i),Os(r,o),!1}r=r.return}while(r!==null);return!1}var ao=Error(u(461)),tn=!1;function hn(e,n,r,i){n.child=e===null?jd(n,null,r,i):Nr(n,e.child,r,i)}function Th(e,n,r,i,o){r=r.render;var d=n.ref;if("ref"in i){var y={};for(var k in i)k!=="ref"&&(y[k]=i[k])}else y=i;return Tr(n),i=qs(e,n,r,y,d,o),k=Is(),e!==null&&!tn?(Vs(e,n,o),Nt(e,n,o)):(Ne&&k&&Ss(n),n.flags|=1,hn(e,n,i,o),n.child)}function Eh(e,n,r,i,o){if(e===null){var d=r.type;return typeof d=="function"&&!bs(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,Ah(e,n,d,i,o)):(e=vi(r.type,null,i,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!mo(e,o)){var y=d.memoizedProps;if(r=r.compare,r=r!==null?r:Xl,r(y,i)&&e.ref===n.ref)return Nt(e,n,o)}return n.flags|=1,e=wt(d,i),e.ref=n.ref,e.return=n,n.child=e}function Ah(e,n,r,i,o){if(e!==null){var d=e.memoizedProps;if(Xl(d,i)&&e.ref===n.ref)if(tn=!1,n.pendingProps=i=d,mo(e,o))(e.flags&131072)!==0&&(tn=!0);else return n.lanes=e.lanes,Nt(e,n,o)}return io(e,n,r,i,o)}function jh(e,n,r,i){var o=i.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(i=n.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~d}else i=0,n.child=null;return Nh(e,n,d,r,i)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ci(n,d!==null?d.cachePool:null),d!==null?_d(n,d):Ls(),Dd(n);else return i=n.lanes=536870912,Nh(e,n,d!==null?d.baseLanes|r:r,r,i)}else d!==null?(Ci(n,d.cachePool),_d(n,d),$t(),n.memoizedState=null):(e!==null&&Ci(n,null),Ls(),$t());return hn(e,n,o,r),n.child}function sa(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Nh(e,n,r,i,o){var d=Ms();return d=d===null?null:{parent:en._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},e!==null&&Ci(n,null),Ls(),Dd(n),e!==null&&ll(e,n,i,!0),n.childLanes=o,null}function qi(e,n){return n=Vi({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Mh(e,n,r){return Nr(n,e.child,null,r),e=qi(n,n.pendingProps),e.flags|=2,Ln(n),n.memoizedState=null,e}function cb(e,n,r){var i=n.pendingProps,o=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ne){if(i.mode==="hidden")return e=qi(n,i),n.lanes=536870912,sa(null,e);if(Bs(n),(e=Ye)?(e=Vm(e,Qn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yt!==null?{id:ct,overflow:ft}:null,retryLane:536870912,hydrationErrors:null},r=hd(e),r.return=n,n.child=r,fn=n,Ye=null)):e=null,e===null)throw Xt(n);return n.lanes=536870912,null}return qi(n,i)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(Bs(n),o)if(n.flags&256)n.flags&=-257,n=Mh(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(tn||ll(e,n,r,!1),o=(r&e.childLanes)!==0,tn||o){if(i=Ve,i!==null&&(y=vf(i,r),y!==0&&y!==d.retryLane))throw d.retryLane=y,Sr(e,y),Nn(i,e,y),ao;Ki(),n=Mh(e,n,r)}else e=d.treeContext,Ye=Kn(y.nextSibling),fn=n,Ne=!0,Pt=null,Qn=!1,e!==null&&gd(n,e),n=qi(n,i),n.flags|=4096;return n}return e=wt(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ii(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(u(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function io(e,n,r,i,o){return Tr(n),r=qs(e,n,r,i,void 0,o),i=Is(),e!==null&&!tn?(Vs(e,n,o),Nt(e,n,o)):(Ne&&i&&Ss(n),n.flags|=1,hn(e,n,r,o),n.child)}function _h(e,n,r,i,o,d){return Tr(n),n.updateQueue=null,r=Od(n,i,r,o),Rd(e),i=Is(),e!==null&&!tn?(Vs(e,n,d),Nt(e,n,d)):(Ne&&i&&Ss(n),n.flags|=1,hn(e,n,r,d),n.child)}function Dh(e,n,r,i,o){if(Tr(n),n.stateNode===null){var d=el,y=r.contextType;typeof y=="object"&&y!==null&&(d=dn(y)),d=new r(i,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ro,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=i,d.state=n.memoizedState,d.refs={},Ds(n),y=r.contextType,d.context=typeof y=="object"&&y!==null?dn(y):el,d.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(to(n,r,y,i),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&ro.enqueueReplaceState(d,d.state,null),ra(n,i,d,o),ta(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){d=n.stateNode;var k=n.memoizedProps,E=_r(r,k);d.props=E;var U=d.context,F=r.contextType;y=el,typeof F=="object"&&F!==null&&(y=dn(F));var J=r.getDerivedStateFromProps;F=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",k=n.pendingProps!==k,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(k||U!==y)&&bh(n,d,i,y),Qt=!1;var q=n.memoizedState;d.state=q,ra(n,i,d,o),ta(),U=n.memoizedState,k||q!==U||Qt?(typeof J=="function"&&(to(n,r,J,i),U=n.memoizedState),(E=Qt||xh(n,r,E,i,q,U,y))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=U),d.props=i,d.state=U,d.context=y,i=E):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{d=n.stateNode,Rs(e,n),y=n.memoizedProps,F=_r(r,y),d.props=F,J=n.pendingProps,q=d.context,U=r.contextType,E=el,typeof U=="object"&&U!==null&&(E=dn(U)),k=r.getDerivedStateFromProps,(U=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==J||q!==E)&&bh(n,d,i,E),Qt=!1,q=n.memoizedState,d.state=q,ra(n,i,d,o),ta();var V=n.memoizedState;y!==J||q!==V||Qt||e!==null&&e.dependencies!==null&&ki(e.dependencies)?(typeof k=="function"&&(to(n,r,k,i),V=n.memoizedState),(F=Qt||xh(n,r,F,i,q,V,E)||e!==null&&e.dependencies!==null&&ki(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,V,E),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,V,E)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=V),d.props=i,d.state=V,d.context=E,i=F):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),i=!1)}return d=i,Ii(e,n),i=(n.flags&128)!==0,d||i?(d=n.stateNode,r=i&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&i?(n.child=Nr(n,e.child,null,o),n.child=Nr(n,null,r,o)):hn(e,n,r,o),n.memoizedState=d.state,e=n.child):e=Nt(e,n,o),e}function Rh(e,n,r,i){return wr(),n.flags|=256,hn(e,n,r,i),n.child}var uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function so(e){return{baseLanes:e,cachePool:kd()}}function oo(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Bn),e}function Oh(e,n,r){var i=n.pendingProps,o=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),y&&(o=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ne){if(o?Wt(n):$t(),(e=Ye)?(e=Vm(e,Qn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yt!==null?{id:ct,overflow:ft}:null,retryLane:536870912,hydrationErrors:null},r=hd(e),r.return=n,n.child=r,fn=n,Ye=null)):e=null,e===null)throw Xt(n);return Po(e)?n.lanes=32:n.lanes=536870912,null}var k=i.children;return i=i.fallback,o?($t(),o=n.mode,k=Vi({mode:"hidden",children:k},o),i=kr(i,o,r,null),k.return=n,i.return=n,k.sibling=i,n.child=k,i=n.child,i.memoizedState=so(r),i.childLanes=oo(e,y,r),n.memoizedState=uo,sa(null,i)):(Wt(n),co(n,k))}var E=e.memoizedState;if(E!==null&&(k=E.dehydrated,k!==null)){if(d)n.flags&256?(Wt(n),n.flags&=-257,n=fo(e,n,r)):n.memoizedState!==null?($t(),n.child=e.child,n.flags|=128,n=null):($t(),k=i.fallback,o=n.mode,i=Vi({mode:"visible",children:i.children},o),k=kr(k,o,r,null),k.flags|=2,i.return=n,k.return=n,i.sibling=k,n.child=i,Nr(n,e.child,null,r),i=n.child,i.memoizedState=so(r),i.childLanes=oo(e,y,r),n.memoizedState=uo,n=sa(null,i));else if(Wt(n),Po(k)){if(y=k.nextSibling&&k.nextSibling.dataset,y)var U=y.dgst;y=U,i=Error(u(419)),i.stack="",i.digest=y,Zl({value:i,source:null,stack:null}),n=fo(e,n,r)}else if(tn||ll(e,n,r,!1),y=(r&e.childLanes)!==0,tn||y){if(y=Ve,y!==null&&(i=vf(y,r),i!==0&&i!==E.retryLane))throw E.retryLane=i,Sr(e,i),Nn(y,e,i),ao;Yo(k)||Ki(),n=fo(e,n,r)}else Yo(k)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,Ye=Kn(k.nextSibling),fn=n,Ne=!0,Pt=null,Qn=!1,e!==null&&gd(n,e),n=co(n,i.children),n.flags|=4096);return n}return o?($t(),k=i.fallback,o=n.mode,E=e.child,U=E.sibling,i=wt(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,U!==null?k=wt(U,k):(k=kr(k,o,r,null),k.flags|=2),k.return=n,i.return=n,i.sibling=k,n.child=i,sa(null,i),i=n.child,k=e.child.memoizedState,k===null?k=so(r):(o=k.cachePool,o!==null?(E=en._currentValue,o=o.parent!==E?{parent:E,pool:E}:o):o=kd(),k={baseLanes:k.baseLanes|r,cachePool:o}),i.memoizedState=k,i.childLanes=oo(e,y,r),n.memoizedState=uo,sa(e.child,i)):(Wt(n),r=e.child,e=r.sibling,r=wt(r,{mode:"visible",children:i.children}),r.return=n,r.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=r,n.memoizedState=null,r)}function co(e,n){return n=Vi({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Vi(e,n){return e=On(22,e,null,n),e.lanes=0,e}function fo(e,n,r){return Nr(n,e.child,null,r),e=co(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zh(e,n,r){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Es(e.return,n,r)}function ho(e,n,r,i,o,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:o,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=i,y.tail=r,y.tailMode=o,y.treeForkCount=d)}function Lh(e,n,r){var i=n.pendingProps,o=i.revealOrder,d=i.tail;i=i.children;var y=We.current,k=(y&2)!==0;if(k?(y=y&1|2,n.flags|=128):y&=1,w(We,y),hn(e,n,i,r),i=Ne?Ql:0,!k&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zh(e,r,n);else if(e.tag===19)zh(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(r=n.child,o=null;r!==null;)e=r.alternate,e!==null&&Mi(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=n.child,n.child=null):(o=r.sibling,r.sibling=null),ho(n,!1,o,r,d,i);break;case"backwards":case"unstable_legacy-backwards":for(r=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Mi(e)===null){n.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ho(n,!0,r,null,d,i);break;case"together":ho(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function Nt(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),tr|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(ll(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,r=wt(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=wt(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function mo(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ki(e)))}function fb(e,n,r){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),Jt(n,en,e.memoizedState.cache),wr();break;case 27:case 5:Vn(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:Jt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bs(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Wt(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Oh(e,n,r):(Wt(n),e=Nt(e,n,r),e!==null?e.sibling:null);Wt(n);break;case 19:var o=(e.flags&128)!==0;if(i=(r&n.childLanes)!==0,i||(ll(e,n,r,!1),i=(r&n.childLanes)!==0),o){if(i)return Lh(e,n,r);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),w(We,We.current),i)break;return null;case 22:return n.lanes=0,jh(e,n,r,n.pendingProps);case 24:Jt(n,en,e.memoizedState.cache)}return Nt(e,n,r)}function Uh(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)tn=!0;else{if(!mo(e,r)&&(n.flags&128)===0)return tn=!1,fb(e,n,r);tn=(e.flags&131072)!==0}else tn=!1,Ne&&(n.flags&1048576)!==0&&pd(n,Ql,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=Ar(n.elementType),n.type=e,typeof e=="function")bs(e)?(i=_r(e,i),n.tag=1,n=Dh(null,n,e,i,r)):(n.tag=0,n=io(null,n,e,i,r));else{if(e!=null){var o=e.$$typeof;if(o===K){n.tag=11,n=Th(null,n,e,i,r);break e}else if(o===ee){n.tag=14,n=Eh(null,n,e,i,r);break e}}throw n=ae(e)||e,Error(u(306,n,""))}}return n;case 0:return io(e,n,n.type,n.pendingProps,r);case 1:return i=n.type,o=_r(i,n.pendingProps),Dh(e,n,i,o,r);case 3:e:{if(Xe(n,n.stateNode.containerInfo),e===null)throw Error(u(387));i=n.pendingProps;var d=n.memoizedState;o=d.element,Rs(e,n),ra(n,i,null,r);var y=n.memoizedState;if(i=y.cache,Jt(n,en,i),i!==d.cache&&As(n,[en],r,!0),ta(),i=y.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Rh(e,n,i,r);break e}else if(i!==o){o=Pn(Error(u(424)),n),Zl(o),n=Rh(e,n,i,r);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=Kn(e.firstChild),fn=n,Ne=!0,Pt=null,Qn=!0,r=jd(n,null,i,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(wr(),i===o){n=Nt(e,n,r);break e}hn(e,n,i,r)}n=n.child}return n;case 26:return Ii(e,n),e===null?(r=Jm(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ne||(r=n.type,e=n.pendingProps,i=lu(ce.current).createElement(r),i[cn]=n,i[wn]=e,mn(i,r,e),sn(i),n.stateNode=i):n.memoizedState=Jm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vn(n),e===null&&Ne&&(i=n.stateNode=Ym(n.type,n.pendingProps,ce.current),fn=n,Qn=!0,o=Ye,ur(n.type)?(Xo=o,Ye=Kn(i.firstChild)):Ye=o),hn(e,n,n.pendingProps.children,r),Ii(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ne&&((o=i=Ye)&&(i=Ib(i,n.type,n.pendingProps,Qn),i!==null?(n.stateNode=i,fn=n,Ye=Kn(i.firstChild),Qn=!1,o=!0):o=!1),o||Xt(n)),Vn(n),o=n.type,d=n.pendingProps,y=e!==null?e.memoizedProps:null,i=d.children,Vo(o,d)?i=null:y!==null&&Vo(o,y)&&(n.flags|=32),n.memoizedState!==null&&(o=qs(e,n,tb,null,null,r),wa._currentValue=o),Ii(e,n),hn(e,n,i,r),n.child;case 6:return e===null&&Ne&&((e=r=Ye)&&(r=Vb(r,n.pendingProps,Qn),r!==null?(n.stateNode=r,fn=n,Ye=null,e=!0):e=!1),e||Xt(n)),null;case 13:return Oh(e,n,r);case 4:return Xe(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Nr(n,null,i,r):hn(e,n,i,r),n.child;case 11:return Th(e,n,n.type,n.pendingProps,r);case 7:return hn(e,n,n.pendingProps,r),n.child;case 8:return hn(e,n,n.pendingProps.children,r),n.child;case 12:return hn(e,n,n.pendingProps.children,r),n.child;case 10:return i=n.pendingProps,Jt(n,n.type,i.value),hn(e,n,i.children,r),n.child;case 9:return o=n.type._context,i=n.pendingProps.children,Tr(n),o=dn(o),i=i(o),n.flags|=1,hn(e,n,i,r),n.child;case 14:return Eh(e,n,n.type,n.pendingProps,r);case 15:return Ah(e,n,n.type,n.pendingProps,r);case 19:return Lh(e,n,r);case 31:return cb(e,n,r);case 22:return jh(e,n,r,n.pendingProps);case 24:return Tr(n),i=dn(en),e===null?(o=Ms(),o===null&&(o=Ve,d=js(),o.pooledCache=d,d.refCount++,d!==null&&(o.pooledCacheLanes|=r),o=d),n.memoizedState={parent:i,cache:o},Ds(n),Jt(n,en,o)):((e.lanes&r)!==0&&(Rs(e,n),ra(n,null,null,r),ta()),o=e.memoizedState,d=n.memoizedState,o.parent!==i?(o={parent:i,cache:i},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),Jt(n,en,i)):(i=d.cache,Jt(n,en,i),i!==o.cache&&As(n,[en],r,!0))),hn(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function Mt(e){e.flags|=4}function po(e,n,r,i,o){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(cm())e.flags|=8192;else throw jr=Ei,_s}else e.flags&=-16777217}function Bh(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$m(n))if(cm())e.flags|=8192;else throw jr=Ei,_s}function Fi(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?xf():536870912,e.lanes|=n,gl|=n)}function oa(e,n){if(!Ne)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(n)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=r,n}function db(e,n,r){var i=n.pendingProps;switch(ks(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return r=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),Et(en),Ue(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rl(n)?Mt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cs())),Pe(n),null;case 26:var o=n.type,d=n.memoizedState;return e===null?(Mt(n),d!==null?(Pe(n),Bh(n,d)):(Pe(n),po(n,o,null,i,r))):d?d!==e.memoizedState?(Mt(n),Pe(n),Bh(n,d)):(Pe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&Mt(n),Pe(n),po(n,o,e,i,r)),null;case 27:if(xt(n),r=ce.current,o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&Mt(n);else{if(!i){if(n.stateNode===null)throw Error(u(166));return Pe(n),null}e=le.current,rl(n)?xd(n):(e=Ym(o,i,r),n.stateNode=e,Mt(n))}return Pe(n),null;case 5:if(xt(n),o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&Mt(n);else{if(!i){if(n.stateNode===null)throw Error(u(166));return Pe(n),null}if(d=le.current,rl(n))xd(n);else{var y=lu(ce.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?y.createElement("select",{is:i.is}):y.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?y.createElement(o,{is:i.is}):y.createElement(o)}}d[cn]=n,d[wn]=i;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(mn(d,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Mt(n)}}return Pe(n),po(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&Mt(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(u(166));if(e=ce.current,rl(n)){if(e=n.stateNode,r=n.memoizedProps,i=null,o=fn,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[cn]=n,e=!!(e.nodeValue===r||i!==null&&i.suppressHydrationWarning===!0||Om(e.nodeValue,r)),e||Xt(n,!0)}else e=lu(e).createTextNode(i),e[cn]=n,n.stateNode=e}return Pe(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(i=rl(n),r!==null){if(e===null){if(!i)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[cn]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),e=!1}else r=Cs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(Ln(n),n):(Ln(n),null);if((n.flags&128)!==0)throw Error(u(558))}return Pe(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=rl(n),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[cn]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),o=!1}else o=Cs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(Ln(n),n):(Ln(n),null)}return Ln(n),(n.flags&128)!==0?(n.lanes=r,n):(r=i!==null,e=e!==null&&e.memoizedState!==null,r&&(i=n.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==o&&(i.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Fi(n,n.updateQueue),Pe(n),null);case 4:return Ue(),e===null&&Uo(n.stateNode.containerInfo),Pe(n),null;case 10:return Et(n.type),Pe(n),null;case 19:if(G(We),i=n.memoizedState,i===null)return Pe(n),null;if(o=(n.flags&128)!==0,d=i.rendering,d===null)if(o)oa(i,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Mi(e),d!==null){for(n.flags|=128,oa(i,!1),e=d.updateQueue,n.updateQueue=e,Fi(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)dd(r,e),r=r.sibling;return w(We,We.current&1|2),Ne&&Ct(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&bn()>Ji&&(n.flags|=128,o=!0,oa(i,!1),n.lanes=4194304)}else{if(!o)if(e=Mi(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Fi(n,e),oa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Ne)return Pe(n),null}else 2*bn()-i.renderingStartTime>Ji&&r!==536870912&&(n.flags|=128,o=!0,oa(i,!1),n.lanes=4194304);i.isBackwards?(d.sibling=n.child,n.child=d):(e=i.last,e!==null?e.sibling=d:n.child=d,i.last=d)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=bn(),e.sibling=null,r=We.current,w(We,o?r&1|2:r&1),Ne&&Ct(n,i.treeForkCount),e):(Pe(n),null);case 22:case 23:return Ln(n),Us(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(r&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),r=n.updateQueue,r!==null&&Fi(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==r&&(n.flags|=2048),e!==null&&G(Er),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Et(en),Pe(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function hb(e,n){switch(ks(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Et(en),Ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xt(n),null;case 31:if(n.memoizedState!==null){if(Ln(n),n.alternate===null)throw Error(u(340));wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ln(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(We),null;case 4:return Ue(),null;case 10:return Et(n.type),null;case 22:case 23:return Ln(n),Us(),e!==null&&G(Er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Et(en),null;case 25:return null;default:return null}}function Hh(e,n){switch(ks(n),n.tag){case 3:Et(en),Ue();break;case 26:case 27:case 5:xt(n);break;case 4:Ue();break;case 31:n.memoizedState!==null&&Ln(n);break;case 13:Ln(n);break;case 19:G(We);break;case 10:Et(n.type);break;case 22:case 23:Ln(n),Us(),e!==null&&G(Er);break;case 24:Et(en)}}function ca(e,n){try{var r=n.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var o=i.next;r=o;do{if((r.tag&e)===e){i=void 0;var d=r.create,y=r.inst;i=d(),y.destroy=i}r=r.next}while(r!==o)}}catch(k){Le(n,n.return,k)}}function er(e,n,r){try{var i=n.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var d=o.next;i=d;do{if((i.tag&e)===e){var y=i.inst,k=y.destroy;if(k!==void 0){y.destroy=void 0,o=n;var E=r,U=k;try{U()}catch(F){Le(o,E,F)}}}i=i.next}while(i!==d)}}catch(F){Le(n,n.return,F)}}function qh(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Md(n,r)}catch(i){Le(e,e.return,i)}}}function Ih(e,n,r){r.props=_r(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(i){Le(e,n,i)}}function fa(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof r=="function"?e.refCleanup=r(i):r.current=i}}catch(o){Le(e,n,o)}}function dt(e,n){var r=e.ref,i=e.refCleanup;if(r!==null)if(typeof i=="function")try{i()}catch(o){Le(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(o){Le(e,n,o)}else r.current=null}function Vh(e){var n=e.type,r=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&i.focus();break e;case"img":r.src?i.src=r.src:r.srcSet&&(i.srcset=r.srcSet)}}catch(o){Le(e,e.return,o)}}function go(e,n,r){try{var i=e.stateNode;zb(i,e.type,r,n),i[wn]=n}catch(o){Le(e,e.return,o)}}function Fh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ur(e.type)||e.tag===4}function xo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=St));else if(i!==4&&(i===27&&ur(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(bo(e,n,r),e=e.sibling;e!==null;)bo(e,n,r),e=e.sibling}function Gi(e,n,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(i!==4&&(i===27&&ur(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Gi(e,n,r),e=e.sibling;e!==null;)Gi(e,n,r),e=e.sibling}function Gh(e){var n=e.stateNode,r=e.memoizedProps;try{for(var i=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);mn(n,i,r),n[cn]=e,n[wn]=r}catch(d){Le(e,e.return,d)}}var _t=!1,rn=!1,yo=!1,Yh=typeof WeakSet=="function"?WeakSet:Set,on=null;function mb(e,n){if(e=e.containerInfo,qo=fu,e=rd(e),fs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var o=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var y=0,k=-1,E=-1,U=0,F=0,J=e,q=null;n:for(;;){for(var V;J!==r||o!==0&&J.nodeType!==3||(k=y+o),J!==d||i!==0&&J.nodeType!==3||(E=y+i),J.nodeType===3&&(y+=J.nodeValue.length),(V=J.firstChild)!==null;)q=J,J=V;for(;;){if(J===e)break n;if(q===r&&++U===o&&(k=y),q===d&&++F===i&&(E=y),(V=J.nextSibling)!==null)break;J=q,q=J.parentNode}J=V}r=k===-1||E===-1?null:{start:k,end:E}}else r=null}r=r||{start:0,end:0}}else r=null;for(Io={focusedElem:e,selectionRange:r},fu=!1,on=n;on!==null;)if(n=on,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,on=e;else for(;on!==null;){switch(n=on,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)o=e[r],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=n,o=d.memoizedProps,d=d.memoizedState,i=r.stateNode;try{var ue=_r(r.type,o);e=i.getSnapshotBeforeUpdate(ue,d),i.__reactInternalSnapshotBeforeUpdate=e}catch(me){Le(r,r.return,me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Go(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Go(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,on=e;break}on=n.return}}function Ph(e,n,r){var i=r.flags;switch(r.tag){case 0:case 11:case 15:Rt(e,r),i&4&&ca(5,r);break;case 1:if(Rt(e,r),i&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(y){Le(r,r.return,y)}else{var o=_r(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Le(r,r.return,y)}}i&64&&qh(r),i&512&&fa(r,r.return);break;case 3:if(Rt(e,r),i&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Md(e,n)}catch(y){Le(r,r.return,y)}}break;case 27:n===null&&i&4&&Gh(r);case 26:case 5:Rt(e,r),n===null&&i&4&&Vh(r),i&512&&fa(r,r.return);break;case 12:Rt(e,r);break;case 31:Rt(e,r),i&4&&Qh(e,r);break;case 13:Rt(e,r),i&4&&Zh(e,r),i&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=wb.bind(null,r),Fb(e,r))));break;case 22:if(i=r.memoizedState!==null||_t,!i){n=n!==null&&n.memoizedState!==null||rn,o=_t;var d=rn;_t=i,(rn=n)&&!d?Ot(e,r,(r.subtreeFlags&8772)!==0):Rt(e,r),_t=o,rn=d}break;case 30:break;default:Rt(e,r)}}function Xh(e){var n=e.alternate;n!==null&&(e.alternate=null,Xh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ju(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Tn=!1;function Dt(e,n,r){for(r=r.child;r!==null;)Jh(e,n,r),r=r.sibling}function Jh(e,n,r){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(yn,r)}catch{}switch(r.tag){case 26:rn||dt(r,n),Dt(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:rn||dt(r,n);var i=Je,o=Tn;ur(r.type)&&(Je=r.stateNode,Tn=!1),Dt(e,n,r),va(r.stateNode),Je=i,Tn=o;break;case 5:rn||dt(r,n);case 6:if(i=Je,o=Tn,Je=null,Dt(e,n,r),Je=i,Tn=o,Je!==null)if(Tn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(d){Le(r,n,d)}else try{Je.removeChild(r.stateNode)}catch(d){Le(r,n,d)}break;case 18:Je!==null&&(Tn?(e=Je,qm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Cl(e)):qm(Je,r.stateNode));break;case 4:i=Je,o=Tn,Je=r.stateNode.containerInfo,Tn=!0,Dt(e,n,r),Je=i,Tn=o;break;case 0:case 11:case 14:case 15:er(2,r,n),rn||er(4,r,n),Dt(e,n,r);break;case 1:rn||(dt(r,n),i=r.stateNode,typeof i.componentWillUnmount=="function"&&Ih(r,n,i)),Dt(e,n,r);break;case 21:Dt(e,n,r);break;case 22:rn=(i=rn)||r.memoizedState!==null,Dt(e,n,r),rn=i;break;default:Dt(e,n,r)}}function Qh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(r){Le(n,n.return,r)}}}function Zh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(r){Le(n,n.return,r)}}function pb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Yh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Yh),n;default:throw Error(u(435,e.tag))}}function Yi(e,n){var r=pb(e);n.forEach(function(i){if(!r.has(i)){r.add(i);var o=Cb.bind(null,e,i);i.then(o,o)}})}function En(e,n){var r=n.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i],d=e,y=n,k=y;e:for(;k!==null;){switch(k.tag){case 27:if(ur(k.type)){Je=k.stateNode,Tn=!1;break e}break;case 5:Je=k.stateNode,Tn=!1;break e;case 3:case 4:Je=k.stateNode.containerInfo,Tn=!0;break e}k=k.return}if(Je===null)throw Error(u(160));Jh(d,y,o),Je=null,Tn=!1,d=o.alternate,d!==null&&(d.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Kh(n,e),n=n.sibling}var lt=null;function Kh(e,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(n,e),An(e),i&4&&(er(3,e,e.return),ca(3,e),er(5,e,e.return));break;case 1:En(n,e),An(e),i&512&&(rn||r===null||dt(r,r.return)),i&64&&_t&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?i:r.concat(i))));break;case 26:var o=lt;if(En(n,e),An(e),i&512&&(rn||r===null||dt(r,r.return)),i&4){var d=r!==null?r.memoizedState:null;if(i=e.memoizedState,r===null)if(i===null)if(e.stateNode===null){e:{i=e.type,r=e.memoizedProps,o=o.ownerDocument||o;n:switch(i){case"title":d=o.getElementsByTagName("title")[0],(!d||d[Bl]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=o.createElement(i),o.head.insertBefore(d,o.querySelector("head > title"))),mn(d,i,r),d[cn]=e,sn(d),i=d;break e;case"link":var y=Km("link","href",o).get(i+(r.href||""));if(y){for(var k=0;k<y.length;k++)if(d=y[k],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(k,1);break n}}d=o.createElement(i),mn(d,i,r),o.head.appendChild(d);break;case"meta":if(y=Km("meta","content",o).get(i+(r.content||""))){for(k=0;k<y.length;k++)if(d=y[k],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(k,1);break n}}d=o.createElement(i),mn(d,i,r),o.head.appendChild(d);break;default:throw Error(u(468,i))}d[cn]=e,sn(d),i=d}e.stateNode=i}else Wm(o,e.type,e.stateNode);else e.stateNode=Zm(o,i,e.memoizedProps);else d!==i?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,i===null?Wm(o,e.type,e.stateNode):Zm(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&go(e,e.memoizedProps,r.memoizedProps)}break;case 27:En(n,e),An(e),i&512&&(rn||r===null||dt(r,r.return)),r!==null&&i&4&&go(e,e.memoizedProps,r.memoizedProps);break;case 5:if(En(n,e),An(e),i&512&&(rn||r===null||dt(r,r.return)),e.flags&32){o=e.stateNode;try{Xr(o,"")}catch(ue){Le(e,e.return,ue)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,go(e,o,r!==null?r.memoizedProps:o)),i&1024&&(yo=!0);break;case 6:if(En(n,e),An(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,r=e.stateNode;try{r.nodeValue=i}catch(ue){Le(e,e.return,ue)}}break;case 3:if(uu=null,o=lt,lt=au(n.containerInfo),En(n,e),lt=o,An(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Cl(n.containerInfo)}catch(ue){Le(e,e.return,ue)}yo&&(yo=!1,Wh(e));break;case 4:i=lt,lt=au(e.stateNode.containerInfo),En(n,e),An(e),lt=i;break;case 12:En(n,e),An(e);break;case 31:En(n,e),An(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yi(e,i)));break;case 13:En(n,e),An(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Xi=bn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yi(e,i)));break;case 22:o=e.memoizedState!==null;var E=r!==null&&r.memoizedState!==null,U=_t,F=rn;if(_t=U||o,rn=F||E,En(n,e),rn=F,_t=U,An(e),i&8192)e:for(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,o&&(r===null||E||_t||rn||Dr(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){E=r=n;try{if(d=E.stateNode,o)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{k=E.stateNode;var J=E.memoizedProps.style,q=J!=null&&J.hasOwnProperty("display")?J.display:null;k.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(ue){Le(E,E.return,ue)}}}else if(n.tag===6){if(r===null){E=n;try{E.stateNode.nodeValue=o?"":E.memoizedProps}catch(ue){Le(E,E.return,ue)}}}else if(n.tag===18){if(r===null){E=n;try{var V=E.stateNode;o?Im(V,!0):Im(E.stateNode,!1)}catch(ue){Le(E,E.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(r=i.retryQueue,r!==null&&(i.retryQueue=null,Yi(e,r))));break;case 19:En(n,e),An(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yi(e,i)));break;case 30:break;case 21:break;default:En(n,e),An(e)}}function An(e){var n=e.flags;if(n&2){try{for(var r,i=e.return;i!==null;){if(Fh(i)){r=i;break}i=i.return}if(r==null)throw Error(u(160));switch(r.tag){case 27:var o=r.stateNode,d=xo(e);Gi(e,d,o);break;case 5:var y=r.stateNode;r.flags&32&&(Xr(y,""),r.flags&=-33);var k=xo(e);Gi(e,k,y);break;case 3:case 4:var E=r.stateNode.containerInfo,U=xo(e);bo(e,U,E);break;default:throw Error(u(161))}}catch(F){Le(e,e.return,F)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Wh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Wh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Rt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ph(e,n.alternate,n),n=n.sibling}function Dr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:er(4,n,n.return),Dr(n);break;case 1:dt(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Ih(n,n.return,r),Dr(n);break;case 27:va(n.stateNode);case 26:case 5:dt(n,n.return),Dr(n);break;case 22:n.memoizedState===null&&Dr(n);break;case 30:Dr(n);break;default:Dr(n)}e=e.sibling}}function Ot(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,o=e,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ot(o,d,r),ca(4,d);break;case 1:if(Ot(o,d,r),i=d,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(U){Le(i,i.return,U)}if(i=d,o=i.updateQueue,o!==null){var k=i.stateNode;try{var E=o.shared.hiddenCallbacks;if(E!==null)for(o.shared.hiddenCallbacks=null,o=0;o<E.length;o++)Nd(E[o],k)}catch(U){Le(i,i.return,U)}}r&&y&64&&qh(d),fa(d,d.return);break;case 27:Gh(d);case 26:case 5:Ot(o,d,r),r&&i===null&&y&4&&Vh(d),fa(d,d.return);break;case 12:Ot(o,d,r);break;case 31:Ot(o,d,r),r&&y&4&&Qh(o,d);break;case 13:Ot(o,d,r),r&&y&4&&Zh(o,d);break;case 22:d.memoizedState===null&&Ot(o,d,r),fa(d,d.return);break;case 30:break;default:Ot(o,d,r)}n=n.sibling}}function vo(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Kl(r))}function So(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kl(e))}function at(e,n,r,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$h(e,n,r,i),n=n.sibling}function $h(e,n,r,i){var o=n.flags;switch(n.tag){case 0:case 11:case 15:at(e,n,r,i),o&2048&&ca(9,n);break;case 1:at(e,n,r,i);break;case 3:at(e,n,r,i),o&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kl(e)));break;case 12:if(o&2048){at(e,n,r,i),e=n.stateNode;try{var d=n.memoizedProps,y=d.id,k=d.onPostCommit;typeof k=="function"&&k(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Le(n,n.return,E)}}else at(e,n,r,i);break;case 31:at(e,n,r,i);break;case 13:at(e,n,r,i);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?at(e,n,r,i):da(e,n):d._visibility&2?at(e,n,r,i):(d._visibility|=2,hl(e,n,r,i,(n.subtreeFlags&10256)!==0||!1)),o&2048&&vo(y,n);break;case 24:at(e,n,r,i),o&2048&&So(n.alternate,n);break;default:at(e,n,r,i)}}function hl(e,n,r,i,o){for(o=o&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,y=n,k=r,E=i,U=y.flags;switch(y.tag){case 0:case 11:case 15:hl(d,y,k,E,o),ca(8,y);break;case 23:break;case 22:var F=y.stateNode;y.memoizedState!==null?F._visibility&2?hl(d,y,k,E,o):da(d,y):(F._visibility|=2,hl(d,y,k,E,o)),o&&U&2048&&vo(y.alternate,y);break;case 24:hl(d,y,k,E,o),o&&U&2048&&So(y.alternate,y);break;default:hl(d,y,k,E,o)}n=n.sibling}}function da(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,i=n,o=i.flags;switch(i.tag){case 22:da(r,i),o&2048&&vo(i.alternate,i);break;case 24:da(r,i),o&2048&&So(i.alternate,i);break;default:da(r,i)}n=n.sibling}}var ha=8192;function ml(e,n,r){if(e.subtreeFlags&ha)for(e=e.child;e!==null;)em(e,n,r),e=e.sibling}function em(e,n,r){switch(e.tag){case 26:ml(e,n,r),e.flags&ha&&e.memoizedState!==null&&n1(r,lt,e.memoizedState,e.memoizedProps);break;case 5:ml(e,n,r);break;case 3:case 4:var i=lt;lt=au(e.stateNode.containerInfo),ml(e,n,r),lt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ha,ha=16777216,ml(e,n,r),ha=i):ml(e,n,r));break;default:ml(e,n,r)}}function nm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ma(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];on=i,rm(i,e)}nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tm(e),e=e.sibling}function tm(e){switch(e.tag){case 0:case 11:case 15:ma(e),e.flags&2048&&er(9,e,e.return);break;case 3:ma(e);break;case 12:ma(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pi(e)):ma(e);break;default:ma(e)}}function Pi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];on=i,rm(i,e)}nm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:er(8,n,n.return),Pi(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Pi(n));break;default:Pi(n)}e=e.sibling}}function rm(e,n){for(;on!==null;){var r=on;switch(r.tag){case 0:case 11:case 15:er(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var i=r.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Kl(r.memoizedState.cache)}if(i=r.child,i!==null)i.return=r,on=i;else e:for(r=e;on!==null;){i=on;var o=i.sibling,d=i.return;if(Xh(i),i===r){on=null;break e}if(o!==null){o.return=d,on=o;break e}on=d}}}var gb={getCacheForType:function(e){var n=dn(en),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return dn(en).controller.signal}},xb=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ve=null,we=null,Ae=0,ze=0,Un=null,nr=!1,pl=!1,ko=!1,zt=0,Ke=0,tr=0,Rr=0,wo=0,Bn=0,gl=0,pa=null,jn=null,Co=!1,Xi=0,lm=0,Ji=1/0,Qi=null,rr=null,un=0,lr=null,xl=null,Lt=0,To=0,Eo=null,am=null,ga=0,Ao=null;function Hn(){return(Re&2)!==0&&Ae!==0?Ae&-Ae:B.T!==null?Ro():Sf()}function im(){if(Bn===0)if((Ae&536870912)===0||Ne){var e=ri;ri<<=1,(ri&3932160)===0&&(ri=262144),Bn=e}else Bn=536870912;return e=zn.current,e!==null&&(e.flags|=32),Bn}function Nn(e,n,r){(e===Ve&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(bl(e,0),ar(e,Ae,Bn,!1)),Ul(e,r),((Re&2)===0||e!==Ve)&&(e===Ve&&((Re&2)===0&&(Rr|=r),Ke===4&&ar(e,Ae,Bn,!1)),ht(e))}function um(e,n,r){if((Re&6)!==0)throw Error(u(327));var i=!r&&(n&127)===0&&(n&e.expiredLanes)===0||Ll(e,n),o=i?vb(e,n):No(e,n,!0),d=i;do{if(o===0){pl&&!i&&ar(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!bb(r)){o=No(e,n,!1),d=!1;continue}if(o===2){if(d=n,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var k=e;o=pa;var E=k.current.memoizedState.isDehydrated;if(E&&(bl(k,y).flags|=256),y=No(k,y,!1),y!==2){if(ko&&!E){k.errorRecoveryDisabledLanes|=d,Rr|=d,o=4;break e}d=jn,jn=o,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}o=y}if(d=!1,o!==2)continue}}if(o===1){bl(e,0),ar(e,n,0,!0);break}e:{switch(i=e,d=o,d){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:ar(i,n,Bn,!nr);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(o=Xi+300-bn(),10<o)){if(ar(i,n,Bn,!nr),ai(i,0,!0)!==0)break e;Lt=n,i.timeoutHandle=Bm(sm.bind(null,i,r,jn,Qi,Co,n,Bn,Rr,gl,nr,d,"Throttled",-0,0),o);break e}sm(i,r,jn,Qi,Co,n,Bn,Rr,gl,nr,d,null,-0,0)}}break}while(!0);ht(e)}function sm(e,n,r,i,o,d,y,k,E,U,F,J,q,V){if(e.timeoutHandle=-1,J=n.subtreeFlags,J&8192||(J&16785408)===16785408){J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:St},em(n,d,J);var ue=(d&62914560)===d?Xi-bn():(d&4194048)===d?lm-bn():0;if(ue=t1(J,ue),ue!==null){Lt=d,e.cancelPendingCommit=ue(gm.bind(null,e,n,d,r,i,o,y,k,E,F,J,null,q,V)),ar(e,d,y,!U);return}}gm(e,n,d,r,i,o,y,k,E)}function bb(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var i=0;i<r.length;i++){var o=r[i],d=o.getSnapshot;o=o.value;try{if(!Rn(d(),o))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(e,n,r,i){n&=~wo,n&=~Rr,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var o=n;0<o;){var d=31-Ie(o),y=1<<d;i[d]=-1,o&=~y}r!==0&&bf(e,r,n)}function Zi(){return(Re&6)===0?(xa(0),!1):!0}function jo(){if(we!==null){if(ze===0)var e=we.return;else e=we,Tt=Cr=null,Fs(e),sl=null,$l=0,e=we;for(;e!==null;)Hh(e.alternate,e),e=e.return;we=null}}function bl(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Bb(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Lt=0,jo(),Ve=e,we=r=wt(e.current,null),Ae=n,ze=0,Un=null,nr=!1,pl=Ll(e,n),ko=!1,gl=Bn=wo=Rr=tr=Ke=0,jn=pa=null,Co=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var o=31-Ie(i),d=1<<o;n|=e[o],i&=~d}return zt=n,xi(),r}function om(e,n){ye=null,B.H=ua,n===ul||n===Ti?(n=Td(),ze=3):n===_s?(n=Td(),ze=4):ze=n===ao?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Un=n,we===null&&(Ke=1,Hi(e,Pn(n,e.current)))}function cm(){var e=zn.current;return e===null?!0:(Ae&4194048)===Ae?Zn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Zn:!1}function fm(){var e=B.H;return B.H=ua,e===null?ua:e}function dm(){var e=B.A;return B.A=gb,e}function Ki(){Ke=4,nr||(Ae&4194048)!==Ae&&zn.current!==null||(pl=!0),(tr&134217727)===0&&(Rr&134217727)===0||Ve===null||ar(Ve,Ae,Bn,!1)}function No(e,n,r){var i=Re;Re|=2;var o=fm(),d=dm();(Ve!==e||Ae!==n)&&(Qi=null,bl(e,n)),n=!1;var y=Ke;e:do try{if(ze!==0&&we!==null){var k=we,E=Un;switch(ze){case 8:jo(),y=6;break e;case 3:case 2:case 9:case 6:zn.current===null&&(n=!0);var U=ze;if(ze=0,Un=null,yl(e,k,E,U),r&&pl){y=0;break e}break;default:U=ze,ze=0,Un=null,yl(e,k,E,U)}}yb(),y=Ke;break}catch(F){om(e,F)}while(!0);return n&&e.shellSuspendCounter++,Tt=Cr=null,Re=i,B.H=o,B.A=d,we===null&&(Ve=null,Ae=0,xi()),y}function yb(){for(;we!==null;)hm(we)}function vb(e,n){var r=Re;Re|=2;var i=fm(),o=dm();Ve!==e||Ae!==n?(Qi=null,Ji=bn()+500,bl(e,n)):pl=Ll(e,n);e:do try{if(ze!==0&&we!==null){n=we;var d=Un;n:switch(ze){case 1:ze=0,Un=null,yl(e,n,d,1);break;case 2:case 9:if(wd(d)){ze=0,Un=null,mm(n);break}n=function(){ze!==2&&ze!==9||Ve!==e||(ze=7),ht(e)},d.then(n,n);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:wd(d)?(ze=0,Un=null,mm(n)):(ze=0,Un=null,yl(e,n,d,7));break;case 5:var y=null;switch(we.tag){case 26:y=we.memoizedState;case 5:case 27:var k=we;if(y?$m(y):k.stateNode.complete){ze=0,Un=null;var E=k.sibling;if(E!==null)we=E;else{var U=k.return;U!==null?(we=U,Wi(U)):we=null}break n}}ze=0,Un=null,yl(e,n,d,5);break;case 6:ze=0,Un=null,yl(e,n,d,6);break;case 8:jo(),Ke=6;break e;default:throw Error(u(462))}}Sb();break}catch(F){om(e,F)}while(!0);return Tt=Cr=null,B.H=i,B.A=o,Re=r,we!==null?0:(Ve=null,Ae=0,xi(),Ke)}function Sb(){for(;we!==null&&!Iu();)hm(we)}function hm(e){var n=Uh(e.alternate,e,zt);e.memoizedProps=e.pendingProps,n===null?Wi(e):we=n}function mm(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=_h(r,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=_h(r,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Fs(n);default:Hh(r,n),n=we=dd(n,zt),n=Uh(r,n,zt)}e.memoizedProps=e.pendingProps,n===null?Wi(e):we=n}function yl(e,n,r,i){Tt=Cr=null,Fs(n),sl=null,$l=0;var o=n.return;try{if(ob(e,o,n,r,Ae)){Ke=1,Hi(e,Pn(r,e.current)),we=null;return}}catch(d){if(o!==null)throw we=o,d;Ke=1,Hi(e,Pn(r,e.current)),we=null;return}n.flags&32768?(Ne||i===1?e=!0:pl||(Ae&536870912)!==0?e=!1:(nr=e=!0,(i===2||i===9||i===3||i===6)&&(i=zn.current,i!==null&&i.tag===13&&(i.flags|=16384))),pm(n,e)):Wi(n)}function Wi(e){var n=e;do{if((n.flags&32768)!==0){pm(n,nr);return}e=n.return;var r=db(n.alternate,n,zt);if(r!==null){we=r;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Ke===0&&(Ke=5)}function pm(e,n){do{var r=hb(e.alternate,e);if(r!==null){r.flags&=32767,we=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=r}while(e!==null);Ke=6,we=null}function gm(e,n,r,i,o,d,y,k,E){e.cancelPendingCommit=null;do $i();while(un!==0);if((Re&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(d=n.lanes|n.childLanes,d|=gs,e0(e,r,d,y,k,E),e===Ve&&(we=Ve=null,Ae=0),xl=n,lr=e,Lt=r,To=d,Eo=o,am=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Tb(ge,function(){return Sm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=B.T,B.T=null,o=Z.p,Z.p=2,y=Re,Re|=4;try{mb(e,n,r)}finally{Re=y,Z.p=o,B.T=i}}un=1,xm(),bm(),ym()}}function xm(){if(un===1){un=0;var e=lr,n=xl,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var i=Z.p;Z.p=2;var o=Re;Re|=4;try{Kh(n,e);var d=Io,y=rd(e.containerInfo),k=d.focusedElem,E=d.selectionRange;if(y!==k&&k&&k.ownerDocument&&td(k.ownerDocument.documentElement,k)){if(E!==null&&fs(k)){var U=E.start,F=E.end;if(F===void 0&&(F=U),"selectionStart"in k)k.selectionStart=U,k.selectionEnd=Math.min(F,k.value.length);else{var J=k.ownerDocument||document,q=J&&J.defaultView||window;if(q.getSelection){var V=q.getSelection(),ue=k.textContent.length,me=Math.min(E.start,ue),qe=E.end===void 0?me:Math.min(E.end,ue);!V.extend&&me>qe&&(y=qe,qe=me,me=y);var R=nd(k,me),M=nd(k,qe);if(R&&M&&(V.rangeCount!==1||V.anchorNode!==R.node||V.anchorOffset!==R.offset||V.focusNode!==M.node||V.focusOffset!==M.offset)){var L=J.createRange();L.setStart(R.node,R.offset),V.removeAllRanges(),me>qe?(V.addRange(L),V.extend(M.node,M.offset)):(L.setEnd(M.node,M.offset),V.addRange(L))}}}}for(J=[],V=k;V=V.parentNode;)V.nodeType===1&&J.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<J.length;k++){var X=J[k];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}fu=!!qo,Io=qo=null}finally{Re=o,Z.p=i,B.T=r}}e.current=n,un=2}}function bm(){if(un===2){un=0;var e=lr,n=xl,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var i=Z.p;Z.p=2;var o=Re;Re|=4;try{Ph(e,n.alternate,n)}finally{Re=o,Z.p=i,B.T=r}}un=3}}function ym(){if(un===4||un===3){un=0,Vu();var e=lr,n=xl,r=Lt,i=am;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,xl=lr=null,vm(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(rr=null),Pu(r),n=n.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(yn,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=B.T,o=Z.p,Z.p=2,B.T=null;try{for(var d=e.onRecoverableError,y=0;y<i.length;y++){var k=i[y];d(k.value,{componentStack:k.stack})}}finally{B.T=n,Z.p=o}}(Lt&3)!==0&&$i(),ht(e),o=e.pendingLanes,(r&261930)!==0&&(o&42)!==0?e===Ao?ga++:(ga=0,Ao=e):ga=0,xa(0)}}function vm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kl(n)))}function $i(){return xm(),bm(),ym(),Sm()}function Sm(){if(un!==5)return!1;var e=lr,n=To;To=0;var r=Pu(Lt),i=B.T,o=Z.p;try{Z.p=32>r?32:r,B.T=null,r=Eo,Eo=null;var d=lr,y=Lt;if(un=0,xl=lr=null,Lt=0,(Re&6)!==0)throw Error(u(331));var k=Re;if(Re|=4,tm(d.current),$h(d,d.current,y,r),Re=k,xa(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(yn,d)}catch{}return!0}finally{Z.p=o,B.T=i,vm(e,n)}}function km(e,n,r){n=Pn(r,n),n=lo(e.stateNode,n,2),e=Kt(e,n,2),e!==null&&(Ul(e,2),ht(e))}function Le(e,n,r){if(e.tag===3)km(e,e,r);else for(;n!==null;){if(n.tag===3){km(n,e,r);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){e=Pn(r,e),r=wh(2),i=Kt(n,r,2),i!==null&&(Ch(r,i,n,e),Ul(i,2),ht(i));break}}n=n.return}}function Mo(e,n,r){var i=e.pingCache;if(i===null){i=e.pingCache=new xb;var o=new Set;i.set(n,o)}else o=i.get(n),o===void 0&&(o=new Set,i.set(n,o));o.has(r)||(ko=!0,o.add(r),e=kb.bind(null,e,n,r),n.then(e,e))}function kb(e,n,r){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ve===e&&(Ae&r)===r&&(Ke===4||Ke===3&&(Ae&62914560)===Ae&&300>bn()-Xi?(Re&2)===0&&bl(e,0):wo|=r,gl===Ae&&(gl=0)),ht(e)}function wm(e,n){n===0&&(n=xf()),e=Sr(e,n),e!==null&&(Ul(e,n),ht(e))}function wb(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),wm(e,r)}function Cb(e,n){var r=0;switch(e.tag){case 31:case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(n),wm(e,r)}function Tb(e,n){return qr(e,n)}var eu=null,vl=null,_o=!1,nu=!1,Do=!1,ir=0;function ht(e){e!==vl&&e.next===null&&(vl===null?eu=vl=e:vl=vl.next=e),nu=!0,_o||(_o=!0,Ab())}function xa(e,n){if(!Do&&nu){Do=!0;do for(var r=!1,i=eu;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var d=0;else{var y=i.suspendedLanes,k=i.pingedLanes;d=(1<<31-Ie(42|e)+1)-1,d&=o&~(y&~k),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Am(i,d))}else d=Ae,d=ai(i,i===Ve?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||Ll(i,d)||(r=!0,Am(i,d));i=i.next}while(r);Do=!1}}function Eb(){Cm()}function Cm(){nu=_o=!1;var e=0;ir!==0&&Ub()&&(e=ir);for(var n=bn(),r=null,i=eu;i!==null;){var o=i.next,d=Tm(i,n);d===0?(i.next=null,r===null?eu=o:r.next=o,o===null&&(vl=r)):(r=i,(e!==0||(d&3)!==0)&&(nu=!0)),i=o}un!==0&&un!==5||xa(e),ir!==0&&(ir=0)}function Tm(e,n){for(var r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-Ie(d),k=1<<y,E=o[y];E===-1?((k&r)===0||(k&i)!==0)&&(o[y]=$x(k,n)):E<=n&&(e.expiredLanes|=k),d&=~k}if(n=Ve,r=Ae,r=ai(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,r===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&zl(i),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ll(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(i!==null&&zl(i),Pu(r)){case 2:case 8:r=te;break;case 32:r=ge;break;case 268435456:r=Oe;break;default:r=ge}return i=Em.bind(null,e),r=qr(r,i),e.callbackPriority=n,e.callbackNode=r,n}return i!==null&&i!==null&&zl(i),e.callbackPriority=2,e.callbackNode=null,2}function Em(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if($i()&&e.callbackNode!==r)return null;var i=Ae;return i=ai(e,e===Ve?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(um(e,i,n),Tm(e,bn()),e.callbackNode!=null&&e.callbackNode===r?Em.bind(null,e):null)}function Am(e,n){if($i())return null;um(e,n,!0)}function Ab(){Hb(function(){(Re&6)!==0?qr(Y,Eb):Cm()})}function Ro(){if(ir===0){var e=al;e===0&&(e=ti,ti<<=1,(ti&261888)===0&&(ti=256)),ir=e}return ir}function jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oi(""+e)}function Nm(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function jb(e,n,r,i,o){if(n==="submit"&&r&&r.stateNode===o){var d=jm((o[wn]||null).action),y=i.submitter;y&&(n=(n=y[wn]||null)?jm(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var k=new hi("action","action",null,i,o);e.push({event:k,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ir!==0){var E=y?Nm(o,y):new FormData(o);Ws(r,{pending:!0,data:E,method:o.method,action:d},null,E)}}else typeof d=="function"&&(k.preventDefault(),E=y?Nm(o,y):new FormData(o),Ws(r,{pending:!0,data:E,method:o.method,action:d},d,E))},currentTarget:o}]})}}for(var Oo=0;Oo<ps.length;Oo++){var zo=ps[Oo],Nb=zo.toLowerCase(),Mb=zo[0].toUpperCase()+zo.slice(1);rt(Nb,"on"+Mb)}rt(id,"onAnimationEnd"),rt(ud,"onAnimationIteration"),rt(sd,"onAnimationStart"),rt("dblclick","onDoubleClick"),rt("focusin","onFocus"),rt("focusout","onBlur"),rt(P0,"onTransitionRun"),rt(X0,"onTransitionStart"),rt(J0,"onTransitionCancel"),rt(od,"onTransitionEnd"),Yr("onMouseEnter",["mouseout","mouseover"]),Yr("onMouseLeave",["mouseout","mouseover"]),Yr("onPointerEnter",["pointerout","pointerover"]),Yr("onPointerLeave",["pointerout","pointerover"]),xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xr("onBeforeInput",["compositionend","keypress","textInput","paste"]),xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_b=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ba));function Mm(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],o=i.event;i=i.listeners;e:{var d=void 0;if(n)for(var y=i.length-1;0<=y;y--){var k=i[y],E=k.instance,U=k.currentTarget;if(k=k.listener,E!==d&&o.isPropagationStopped())break e;d=k,o.currentTarget=U;try{d(o)}catch(F){gi(F)}o.currentTarget=null,d=E}else for(y=0;y<i.length;y++){if(k=i[y],E=k.instance,U=k.currentTarget,k=k.listener,E!==d&&o.isPropagationStopped())break e;d=k,o.currentTarget=U;try{d(o)}catch(F){gi(F)}o.currentTarget=null,d=E}}}}function Ce(e,n){var r=n[Xu];r===void 0&&(r=n[Xu]=new Set);var i=e+"__bubble";r.has(i)||(_m(n,e,2,!1),r.add(i))}function Lo(e,n,r){var i=0;n&&(i|=4),_m(r,e,i,n)}var tu="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[tu]){e[tu]=!0,Cf.forEach(function(r){r!=="selectionchange"&&(_b.has(r)||Lo(r,!1,e),Lo(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tu]||(n[tu]=!0,Lo("selectionchange",!1,n))}}function _m(e,n,r,i){switch(ip(n)){case 2:var o=a1;break;case 8:o=i1;break;default:o=Wo}r=o.bind(null,n,r,e),o=void 0,!ts||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(n,r,{capture:!0,passive:o}):e.addEventListener(n,r,!0):o!==void 0?e.addEventListener(n,r,{passive:o}):e.addEventListener(n,r,!1)}function Bo(e,n,r,i,o){var d=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var y=i.tag;if(y===3||y===4){var k=i.stateNode.containerInfo;if(k===o)break;if(y===4)for(y=i.return;y!==null;){var E=y.tag;if((E===3||E===4)&&y.stateNode.containerInfo===o)return;y=y.return}for(;k!==null;){if(y=Vr(k),y===null)return;if(E=y.tag,E===5||E===6||E===26||E===27){i=d=y;continue e}k=k.parentNode}}i=i.return}Lf(function(){var U=d,F=es(r),J=[];e:{var q=cd.get(e);if(q!==void 0){var V=hi,ue=e;switch(e){case"keypress":if(fi(r)===0)break e;case"keydown":case"keyup":V=C0;break;case"focusin":ue="focus",V=is;break;case"focusout":ue="blur",V=is;break;case"beforeblur":case"afterblur":V=is;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=A0;break;case id:case ud:case sd:V=p0;break;case od:V=N0;break;case"scroll":case"scrollend":V=c0;break;case"wheel":V=_0;break;case"copy":case"cut":case"paste":V=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=If;break;case"toggle":case"beforetoggle":V=R0}var me=(n&4)!==0,qe=!me&&(e==="scroll"||e==="scrollend"),R=me?q!==null?q+"Capture":null:q;me=[];for(var M=U,L;M!==null;){var X=M;if(L=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||L===null||R===null||(X=ql(M,R),X!=null&&me.push(ya(M,X,L))),qe)break;M=M.return}0<me.length&&(q=new V(q,ue,null,r,F),J.push({event:q,listeners:me}))}}if((n&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",q&&r!==$u&&(ue=r.relatedTarget||r.fromElement)&&(Vr(ue)||ue[Ir]))break e;if((V||q)&&(q=F.window===F?F:(q=F.ownerDocument)?q.defaultView||q.parentWindow:window,V?(ue=r.relatedTarget||r.toElement,V=U,ue=ue?Vr(ue):null,ue!==null&&(qe=c(ue),me=ue.tag,ue!==qe||me!==5&&me!==27&&me!==6)&&(ue=null)):(V=null,ue=U),V!==ue)){if(me=Hf,X="onMouseLeave",R="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(me=If,X="onPointerLeave",R="onPointerEnter",M="pointer"),qe=V==null?q:Hl(V),L=ue==null?q:Hl(ue),q=new me(X,M+"leave",V,r,F),q.target=qe,q.relatedTarget=L,X=null,Vr(F)===U&&(me=new me(R,M+"enter",ue,r,F),me.target=L,me.relatedTarget=qe,X=me),qe=X,V&&ue)n:{for(me=Db,R=V,M=ue,L=0,X=R;X;X=me(X))L++;X=0;for(var fe=M;fe;fe=me(fe))X++;for(;0<L-X;)R=me(R),L--;for(;0<X-L;)M=me(M),X--;for(;L--;){if(R===M||M!==null&&R===M.alternate){me=R;break n}R=me(R),M=me(M)}me=null}else me=null;V!==null&&Dm(J,q,V,me,!1),ue!==null&&qe!==null&&Dm(J,qe,ue,me,!0)}}e:{if(q=U?Hl(U):window,V=q.nodeName&&q.nodeName.toLowerCase(),V==="select"||V==="input"&&q.type==="file")var _e=Qf;else if(Xf(q))if(Zf)_e=F0;else{_e=I0;var se=q0}else V=q.nodeName,!V||V.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?U&&Wu(U.elementType)&&(_e=Qf):_e=V0;if(_e&&(_e=_e(e,U))){Jf(J,_e,r,F);break e}se&&se(e,q,U),e==="focusout"&&U&&q.type==="number"&&U.memoizedProps.value!=null&&Ku(q,"number",q.value)}switch(se=U?Hl(U):window,e){case"focusin":(Xf(se)||se.contentEditable==="true")&&(Kr=se,ds=U,Jl=null);break;case"focusout":Jl=ds=Kr=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,ld(J,r,F);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":ld(J,r,F)}var ve;if(ss)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Zr?Yf(e,r)&&(je="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(je="onCompositionStart");je&&(Vf&&r.locale!=="ko"&&(Zr||je!=="onCompositionStart"?je==="onCompositionEnd"&&Zr&&(ve=Uf()):(Gt=F,rs="value"in Gt?Gt.value:Gt.textContent,Zr=!0)),se=ru(U,je),0<se.length&&(je=new qf(je,e,null,r,F),J.push({event:je,listeners:se}),ve?je.data=ve:(ve=Pf(r),ve!==null&&(je.data=ve)))),(ve=z0?L0(e,r):U0(e,r))&&(je=ru(U,"onBeforeInput"),0<je.length&&(se=new qf("onBeforeInput","beforeinput",null,r,F),J.push({event:se,listeners:je}),se.data=ve)),jb(J,e,U,r,F)}Mm(J,n)})}function ya(e,n,r){return{instance:e,listener:n,currentTarget:r}}function ru(e,n){for(var r=n+"Capture",i=[];e!==null;){var o=e,d=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||d===null||(o=ql(e,r),o!=null&&i.unshift(ya(e,o,d)),o=ql(e,n),o!=null&&i.push(ya(e,o,d))),e.tag===3)return i;e=e.return}return[]}function Db(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dm(e,n,r,i,o){for(var d=n._reactName,y=[];r!==null&&r!==i;){var k=r,E=k.alternate,U=k.stateNode;if(k=k.tag,E!==null&&E===i)break;k!==5&&k!==26&&k!==27||U===null||(E=U,o?(U=ql(r,d),U!=null&&y.unshift(ya(r,U,E))):o||(U=ql(r,d),U!=null&&y.push(ya(r,U,E)))),r=r.return}y.length!==0&&e.push({event:n,listeners:y})}var Rb=/\r\n?/g,Ob=/\u0000|\uFFFD/g;function Rm(e){return(typeof e=="string"?e:""+e).replace(Rb,`
`).replace(Ob,"")}function Om(e,n){return n=Rm(n),Rm(e)===n}function He(e,n,r,i,o,d){switch(r){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Xr(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Xr(e,""+i);break;case"className":ui(e,"class",i);break;case"tabIndex":ui(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ui(e,r,i);break;case"style":Of(e,i,d);break;case"data":if(n!=="object"){ui(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(r);break}i=oi(""+i),e.setAttribute(r,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&He(e,n,"name",o.name,o,null),He(e,n,"formEncType",o.formEncType,o,null),He(e,n,"formMethod",o.formMethod,o,null),He(e,n,"formTarget",o.formTarget,o,null)):(He(e,n,"encType",o.encType,o,null),He(e,n,"method",o.method,o,null),He(e,n,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(r);break}i=oi(""+i),e.setAttribute(r,i);break;case"onClick":i!=null&&(e.onclick=St);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(r=i.__html,r!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=r}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}r=oi(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,""+i):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":i===!0?e.setAttribute(r,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,i):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(r,i):e.removeAttribute(r);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(r):e.setAttribute(r,i);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),ii(e,"popover",i);break;case"xlinkActuate":vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":vt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":vt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":vt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":vt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ii(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=s0.get(r)||r,ii(e,r,i))}}function Ho(e,n,r,i,o,d){switch(r){case"style":Of(e,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(r=i.__html,r!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=r}}break;case"children":typeof i=="string"?Xr(e,i):(typeof i=="number"||typeof i=="bigint")&&Xr(e,""+i);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=St);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tf.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(o=r.endsWith("Capture"),n=r.slice(2,o?r.length-7:void 0),d=e[wn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(n,d,o),typeof i=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,i,o);break e}r in e?e[r]=i:i===!0?e.setAttribute(r,""):ii(e,r,i)}}}function mn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var i=!1,o=!1,d;for(d in r)if(r.hasOwnProperty(d)){var y=r[d];if(y!=null)switch(d){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:He(e,n,d,y,r,null)}}o&&He(e,n,"srcSet",r.srcSet,r,null),i&&He(e,n,"src",r.src,r,null);return;case"input":Ce("invalid",e);var k=d=y=o=null,E=null,U=null;for(i in r)if(r.hasOwnProperty(i)){var F=r[i];if(F!=null)switch(i){case"name":o=F;break;case"type":y=F;break;case"checked":E=F;break;case"defaultChecked":U=F;break;case"value":d=F;break;case"defaultValue":k=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(u(137,n));break;default:He(e,n,i,F,r,null)}}Mf(e,d,k,E,U,y,o,!1);return;case"select":Ce("invalid",e),i=y=d=null;for(o in r)if(r.hasOwnProperty(o)&&(k=r[o],k!=null))switch(o){case"value":d=k;break;case"defaultValue":y=k;break;case"multiple":i=k;default:He(e,n,o,k,r,null)}n=d,r=y,e.multiple=!!i,n!=null?Pr(e,!!i,n,!1):r!=null&&Pr(e,!!i,r,!0);return;case"textarea":Ce("invalid",e),d=o=i=null;for(y in r)if(r.hasOwnProperty(y)&&(k=r[y],k!=null))switch(y){case"value":i=k;break;case"defaultValue":o=k;break;case"children":d=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(91));break;default:He(e,n,y,k,r,null)}Df(e,i,o,d);return;case"option":for(E in r)if(r.hasOwnProperty(E)&&(i=r[E],i!=null))switch(E){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:He(e,n,E,i,r,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(i=0;i<ba.length;i++)Ce(ba[i],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in r)if(r.hasOwnProperty(U)&&(i=r[U],i!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:He(e,n,U,i,r,null)}return;default:if(Wu(n)){for(F in r)r.hasOwnProperty(F)&&(i=r[F],i!==void 0&&Ho(e,n,F,i,r,void 0));return}}for(k in r)r.hasOwnProperty(k)&&(i=r[k],i!=null&&He(e,n,k,i,r,null))}function zb(e,n,r,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,d=null,y=null,k=null,E=null,U=null,F=null;for(V in r){var J=r[V];if(r.hasOwnProperty(V)&&J!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":E=J;default:i.hasOwnProperty(V)||He(e,n,V,null,i,J)}}for(var q in i){var V=i[q];if(J=r[q],i.hasOwnProperty(q)&&(V!=null||J!=null))switch(q){case"type":d=V;break;case"name":o=V;break;case"checked":U=V;break;case"defaultChecked":F=V;break;case"value":y=V;break;case"defaultValue":k=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(u(137,n));break;default:V!==J&&He(e,n,q,V,i,J)}}Zu(e,y,k,E,U,F,d,o);return;case"select":V=y=k=q=null;for(d in r)if(E=r[d],r.hasOwnProperty(d)&&E!=null)switch(d){case"value":break;case"multiple":V=E;default:i.hasOwnProperty(d)||He(e,n,d,null,i,E)}for(o in i)if(d=i[o],E=r[o],i.hasOwnProperty(o)&&(d!=null||E!=null))switch(o){case"value":q=d;break;case"defaultValue":k=d;break;case"multiple":y=d;default:d!==E&&He(e,n,o,d,i,E)}n=k,r=y,i=V,q!=null?Pr(e,!!r,q,!1):!!i!=!!r&&(n!=null?Pr(e,!!r,n,!0):Pr(e,!!r,r?[]:"",!1));return;case"textarea":V=q=null;for(k in r)if(o=r[k],r.hasOwnProperty(k)&&o!=null&&!i.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:He(e,n,k,null,i,o)}for(y in i)if(o=i[y],d=r[y],i.hasOwnProperty(y)&&(o!=null||d!=null))switch(y){case"value":q=o;break;case"defaultValue":V=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==d&&He(e,n,y,o,i,d)}_f(e,q,V);return;case"option":for(var ue in r)if(q=r[ue],r.hasOwnProperty(ue)&&q!=null&&!i.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:He(e,n,ue,null,i,q)}for(E in i)if(q=i[E],V=r[E],i.hasOwnProperty(E)&&q!==V&&(q!=null||V!=null))switch(E){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:He(e,n,E,q,i,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in r)q=r[me],r.hasOwnProperty(me)&&q!=null&&!i.hasOwnProperty(me)&&He(e,n,me,null,i,q);for(U in i)if(q=i[U],V=r[U],i.hasOwnProperty(U)&&q!==V&&(q!=null||V!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,n));break;default:He(e,n,U,q,i,V)}return;default:if(Wu(n)){for(var qe in r)q=r[qe],r.hasOwnProperty(qe)&&q!==void 0&&!i.hasOwnProperty(qe)&&Ho(e,n,qe,void 0,i,q);for(F in i)q=i[F],V=r[F],!i.hasOwnProperty(F)||q===V||q===void 0&&V===void 0||Ho(e,n,F,q,i,V);return}}for(var R in r)q=r[R],r.hasOwnProperty(R)&&q!=null&&!i.hasOwnProperty(R)&&He(e,n,R,null,i,q);for(J in i)q=i[J],V=r[J],!i.hasOwnProperty(J)||q===V||q==null&&V==null||He(e,n,J,q,i,V)}function zm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),i=0;i<r.length;i++){var o=r[i],d=o.transferSize,y=o.initiatorType,k=o.duration;if(d&&k&&zm(y)){for(y=0,k=o.responseEnd,i+=1;i<r.length;i++){var E=r[i],U=E.startTime;if(U>k)break;var F=E.transferSize,J=E.initiatorType;F&&zm(J)&&(E=E.responseEnd,y+=F*(E<k?1:(k-U)/(E-U)))}if(--i,n+=8*(d+y)/(o.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qo=null,Io=null;function lu(e){return e.nodeType===9?e:e.ownerDocument}function Lm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Um(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fo=null;function Ub(){var e=window.event;return e&&e.type==="popstate"?e===Fo?!1:(Fo=e,!0):(Fo=null,!1)}var Bm=typeof setTimeout=="function"?setTimeout:void 0,Bb=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,Hb=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(e){return Hm.resolve(null).then(e).catch(qb)}:Bm;function qb(e){setTimeout(function(){throw e})}function ur(e){return e==="head"}function qm(e,n){var r=n,i=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"||r==="/&"){if(i===0){e.removeChild(o),Cl(n);return}i--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")i++;else if(r==="html")va(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,va(r);for(var d=r.firstChild;d;){var y=d.nextSibling,k=d.nodeName;d[Bl]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=y}}else r==="body"&&va(e.ownerDocument.body);r=o}while(r);Cl(n)}function Im(e,n){var r=e;e=0;do{var i=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=i}while(r)}function Go(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Go(r),Ju(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Ib(e,n,r,i){for(;e.nodeType===1;){var o=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Bl])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Kn(e.nextSibling),e===null)break}return null}function Vb(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Kn(e.nextSibling),e===null))return null;return e}function Vm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kn(e.nextSibling),e===null))return null;return e}function Yo(e){return e.data==="$?"||e.data==="$~"}function Po(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fb(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var i=function(){n(),r.removeEventListener("DOMContentLoaded",i)};r.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xo=null;function Fm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return Kn(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function Gm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function Ym(e,n,r){switch(n=lu(r),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function va(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ju(e)}var Wn=new Map,Pm=new Set;function au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ut=Z.d;Z.d={f:Gb,r:Yb,D:Pb,C:Xb,L:Jb,m:Qb,X:Kb,S:Zb,M:Wb};function Gb(){var e=Ut.f(),n=Zi();return e||n}function Yb(e){var n=Fr(e);n!==null&&n.tag===5&&n.type==="form"?oh(n):Ut.r(e)}var Sl=typeof document>"u"?null:document;function Xm(e,n,r){var i=Sl;if(i&&typeof n=="string"&&n){var o=Gn(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof r=="string"&&(o+='[crossorigin="'+r+'"]'),Pm.has(o)||(Pm.add(o),e={rel:e,crossOrigin:r,href:n},i.querySelector(o)===null&&(n=i.createElement("link"),mn(n,"link",e),sn(n),i.head.appendChild(n)))}}function Pb(e){Ut.D(e),Xm("dns-prefetch",e,null)}function Xb(e,n){Ut.C(e,n),Xm("preconnect",e,n)}function Jb(e,n,r){Ut.L(e,n,r);var i=Sl;if(i&&e&&n){var o='link[rel="preload"][as="'+Gn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(o+='[imagesrcset="'+Gn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(o+='[imagesizes="'+Gn(r.imageSizes)+'"]')):o+='[href="'+Gn(e)+'"]';var d=o;switch(n){case"style":d=kl(e);break;case"script":d=wl(e)}Wn.has(d)||(e=x({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),Wn.set(d,e),i.querySelector(o)!==null||n==="style"&&i.querySelector(Sa(d))||n==="script"&&i.querySelector(ka(d))||(n=i.createElement("link"),mn(n,"link",e),sn(n),i.head.appendChild(n)))}}function Qb(e,n){Ut.m(e,n);var r=Sl;if(r&&e){var i=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+Gn(i)+'"][href="'+Gn(e)+'"]',d=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=wl(e)}if(!Wn.has(d)&&(e=x({rel:"modulepreload",href:e},n),Wn.set(d,e),r.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ka(d)))return}i=r.createElement("link"),mn(i,"link",e),sn(i),r.head.appendChild(i)}}}function Zb(e,n,r){Ut.S(e,n,r);var i=Sl;if(i&&e){var o=Gr(i).hoistableStyles,d=kl(e);n=n||"default";var y=o.get(d);if(!y){var k={loading:0,preload:null};if(y=i.querySelector(Sa(d)))k.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},r),(r=Wn.get(d))&&Jo(e,r);var E=y=i.createElement("link");sn(E),mn(E,"link",e),E._p=new Promise(function(U,F){E.onload=U,E.onerror=F}),E.addEventListener("load",function(){k.loading|=1}),E.addEventListener("error",function(){k.loading|=2}),k.loading|=4,iu(y,n,i)}y={type:"stylesheet",instance:y,count:1,state:k},o.set(d,y)}}}function Kb(e,n){Ut.X(e,n);var r=Sl;if(r&&e){var i=Gr(r).hoistableScripts,o=wl(e),d=i.get(o);d||(d=r.querySelector(ka(o)),d||(e=x({src:e,async:!0},n),(n=Wn.get(o))&&Qo(e,n),d=r.createElement("script"),sn(d),mn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(o,d))}}function Wb(e,n){Ut.M(e,n);var r=Sl;if(r&&e){var i=Gr(r).hoistableScripts,o=wl(e),d=i.get(o);d||(d=r.querySelector(ka(o)),d||(e=x({src:e,async:!0,type:"module"},n),(n=Wn.get(o))&&Qo(e,n),d=r.createElement("script"),sn(d),mn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(o,d))}}function Jm(e,n,r,i){var o=(o=ce.current)?au(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=kl(r.href),r=Gr(o).hoistableStyles,i=r.get(n),i||(i={type:"style",instance:null,count:0,state:null},r.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=kl(r.href);var d=Gr(o).hoistableStyles,y=d.get(e);if(y||(o=o.ownerDocument||o,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=o.querySelector(Sa(e)))&&!d._p&&(y.instance=d,y.state.loading=5),Wn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Wn.set(e,r),d||$b(o,e,r,y.state))),n&&i===null)throw Error(u(528,""));return y}if(n&&i!==null)throw Error(u(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=wl(r),r=Gr(o).hoistableScripts,i=r.get(n),i||(i={type:"script",instance:null,count:0,state:null},r.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function kl(e){return'href="'+Gn(e)+'"'}function Sa(e){return'link[rel="stylesheet"]['+e+"]"}function Qm(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function $b(e,n,r,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),mn(n,"link",r),sn(n),e.head.appendChild(n))}function wl(e){return'[src="'+Gn(e)+'"]'}function ka(e){return"script[async]"+e}function Zm(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Gn(r.href)+'"]');if(i)return n.instance=i,sn(i),i;var o=x({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),sn(i),mn(i,"style",o),iu(i,r.precedence,e),n.instance=i;case"stylesheet":o=kl(r.href);var d=e.querySelector(Sa(o));if(d)return n.state.loading|=4,n.instance=d,sn(d),d;i=Qm(r),(o=Wn.get(o))&&Jo(i,o),d=(e.ownerDocument||e).createElement("link"),sn(d);var y=d;return y._p=new Promise(function(k,E){y.onload=k,y.onerror=E}),mn(d,"link",i),n.state.loading|=4,iu(d,r.precedence,e),n.instance=d;case"script":return d=wl(r.src),(o=e.querySelector(ka(d)))?(n.instance=o,sn(o),o):(i=r,(o=Wn.get(d))&&(i=x({},r),Qo(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),sn(o),mn(o,"link",i),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,iu(i,r.precedence,e));return n.instance}function iu(e,n,r){for(var i=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,d=o,y=0;y<i.length;y++){var k=i[y];if(k.dataset.precedence===n)d=k;else if(d!==o)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Jo(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qo(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uu=null;function Km(e,n,r){if(uu===null){var i=new Map,o=uu=new Map;o.set(r,i)}else o=uu,i=o.get(r),i||(i=new Map,o.set(r,i));if(i.has(e))return i;for(i.set(e,null),r=r.getElementsByTagName(e),o=0;o<r.length;o++){var d=r[o];if(!(d[Bl]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=e+y;var k=i.get(y);k?k.push(d):i.set(y,[d])}}return i}function Wm(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function e1(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $m(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function n1(e,n,r,i){if(r.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var o=kl(i.href),d=n.querySelector(Sa(o));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=su.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=d,sn(d);return}d=n.ownerDocument||n,i=Qm(i),(o=Wn.get(o))&&Jo(i,o),d=d.createElement("link"),sn(d);var y=d;y._p=new Promise(function(k,E){y.onload=k,y.onerror=E}),mn(d,"link",i),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=su.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var Zo=0;function t1(e,n){return e.stylesheets&&e.count===0&&cu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var i=setTimeout(function(){if(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Zo===0&&(Zo=62500*Lb());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Zo?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function cu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,n.forEach(r1,e),ou=null,su.call(e))}function r1(e,n){if(!(n.state.loading&4)){var r=ou.get(e);if(r)var i=r.get(null);else{r=new Map,ou.set(e,r);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<o.length;d++){var y=o[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),i=y)}i&&r.set(null,i)}o=n.instance,y=o.getAttribute("data-precedence"),d=r.get(y)||i,d===i&&r.set(null,o),r.set(y,o),this.count++,i=su.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),d?d.parentNode.insertBefore(o,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var wa={$$typeof:_,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function l1(e,n,r,i,o,d,y,k,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.hiddenUpdates=Gu(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function ep(e,n,r,i,o,d,y,k,E,U,F,J){return e=new l1(e,n,r,y,E,U,F,J,k),n=1,d===!0&&(n|=24),d=On(3,null,null,n),e.current=d,d.stateNode=e,n=js(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:i,isDehydrated:r,cache:n},Ds(d),e}function np(e){return e?(e=el,e):el}function tp(e,n,r,i,o,d){o=np(o),i.context===null?i.context=o:i.pendingContext=o,i=Zt(n),i.payload={element:r},d=d===void 0?null:d,d!==null&&(i.callback=d),r=Kt(e,i,n),r!==null&&(Nn(r,e,n),na(r,e,n))}function rp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Ko(e,n){rp(e,n),(e=e.alternate)&&rp(e,n)}function lp(e){if(e.tag===13||e.tag===31){var n=Sr(e,67108864);n!==null&&Nn(n,e,67108864),Ko(e,67108864)}}function ap(e){if(e.tag===13||e.tag===31){var n=Hn();n=Yu(n);var r=Sr(e,n);r!==null&&Nn(r,e,n),Ko(e,n)}}var fu=!0;function a1(e,n,r,i){var o=B.T;B.T=null;var d=Z.p;try{Z.p=2,Wo(e,n,r,i)}finally{Z.p=d,B.T=o}}function i1(e,n,r,i){var o=B.T;B.T=null;var d=Z.p;try{Z.p=8,Wo(e,n,r,i)}finally{Z.p=d,B.T=o}}function Wo(e,n,r,i){if(fu){var o=$o(i);if(o===null)Bo(e,n,i,du,r),up(e,i);else if(s1(o,e,n,r,i))i.stopPropagation();else if(up(e,i),n&4&&-1<u1.indexOf(e)){for(;o!==null;){var d=Fr(o);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=gr(d.pendingLanes);if(y!==0){var k=d;for(k.pendingLanes|=2,k.entangledLanes|=2;y;){var E=1<<31-Ie(y);k.entanglements[1]|=E,y&=~E}ht(d),(Re&6)===0&&(Ji=bn()+500,xa(0))}}break;case 31:case 13:k=Sr(d,2),k!==null&&Nn(k,d,2),Zi(),Ko(d,2)}if(d=$o(i),d===null&&Bo(e,n,i,du,r),d===o)break;o=d}o!==null&&i.stopPropagation()}else Bo(e,n,i,null,r)}}function $o(e){return e=es(e),ec(e)}var du=null;function ec(e){if(du=null,e=Vr(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=m(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return du=e,null}function ip(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fu()){case Y:return 2;case te:return 8;case ge:case ke:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var nc=!1,sr=null,or=null,cr=null,Ca=new Map,Ta=new Map,fr=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function up(e,n){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Ca.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(n.pointerId)}}function Ea(e,n,r,i,o,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:i,nativeEvent:d,targetContainers:[o]},n!==null&&(n=Fr(n),n!==null&&lp(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function s1(e,n,r,i,o){switch(n){case"focusin":return sr=Ea(sr,e,n,r,i,o),!0;case"dragenter":return or=Ea(or,e,n,r,i,o),!0;case"mouseover":return cr=Ea(cr,e,n,r,i,o),!0;case"pointerover":var d=o.pointerId;return Ca.set(d,Ea(Ca.get(d)||null,e,n,r,i,o)),!0;case"gotpointercapture":return d=o.pointerId,Ta.set(d,Ea(Ta.get(d)||null,e,n,r,i,o)),!0}return!1}function sp(e){var n=Vr(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,kf(e.priority,function(){ap(r)});return}}else if(n===31){if(n=m(r),n!==null){e.blockedOn=n,kf(e.priority,function(){ap(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=$o(e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);$u=i,r.target.dispatchEvent(i),$u=null}else return n=Fr(r),n!==null&&lp(n),e.blockedOn=r,!1;n.shift()}return!0}function op(e,n,r){hu(e)&&r.delete(n)}function o1(){nc=!1,sr!==null&&hu(sr)&&(sr=null),or!==null&&hu(or)&&(or=null),cr!==null&&hu(cr)&&(cr=null),Ca.forEach(op),Ta.forEach(op)}function mu(e,n){e.blockedOn===n&&(e.blockedOn=null,nc||(nc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,o1)))}var pu=null;function cp(e){pu!==e&&(pu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){pu===e&&(pu=null);for(var n=0;n<e.length;n+=3){var r=e[n],i=e[n+1],o=e[n+2];if(typeof i!="function"){if(ec(i||r)===null)continue;break}var d=Fr(r);d!==null&&(e.splice(n,3),n-=3,Ws(d,{pending:!0,data:o,method:r.method,action:i},i,o))}}))}function Cl(e){function n(E){return mu(E,e)}sr!==null&&mu(sr,e),or!==null&&mu(or,e),cr!==null&&mu(cr,e),Ca.forEach(n),Ta.forEach(n);for(var r=0;r<fr.length;r++){var i=fr[r];i.blockedOn===e&&(i.blockedOn=null)}for(;0<fr.length&&(r=fr[0],r.blockedOn===null);)sp(r),r.blockedOn===null&&fr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(i=0;i<r.length;i+=3){var o=r[i],d=r[i+1],y=o[wn]||null;if(typeof d=="function")y||cp(r);else if(y){var k=null;if(d&&d.hasAttribute("formAction")){if(o=d,y=d[wn]||null)k=y.formAction;else if(ec(o)!==null)continue}else k=y.action;typeof k=="function"?r[i+1]=k:(r.splice(i,3),i-=3),cp(r)}}}function fp(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return o=y})},focusReset:"manual",scroll:"manual"})}function n(){o!==null&&(o(),o=null),i||setTimeout(r,20)}function r(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),o!==null&&(o(),o=null)}}}function tc(e){this._internalRoot=e}gu.prototype.render=tc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var r=n.current,i=Hn();tp(r,i,e,n,null,null)},gu.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tp(e.current,2,null,e,null,null),Zi(),n[Ir]=null}};function gu(e){this._internalRoot=e}gu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sf();e={blockedOn:null,target:e,priority:n};for(var r=0;r<fr.length&&n!==0&&n<fr[r].priority;r++);fr.splice(r,0,e),r===0&&sp(e)}};var dp=a.version;if(dp!=="19.2.0")throw Error(u(527,dp,"19.2.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(n),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var c1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{yn=xu.inject(c1),an=xu}catch{}}return ja.createRoot=function(e,n){if(!s(e))throw Error(u(299));var r=!1,i="",o=yh,d=vh,y=Sh;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=ep(e,1,!1,null,null,r,i,null,o,d,y,fp),e[Ir]=n.current,Uo(e),new tc(n)},ja.hydrateRoot=function(e,n,r){if(!s(e))throw Error(u(299));var i=!1,o="",d=yh,y=vh,k=Sh,E=null;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(k=r.onRecoverableError),r.formState!==void 0&&(E=r.formState)),n=ep(e,1,!0,n,r??null,i,o,E,d,y,k,fp),n.context=np(null),r=n.current,i=Hn(),i=Yu(i),o=Zt(i),o.callback=null,Kt(r,o,i),r=i,n.current.lanes=r,Ul(n,r),ht(n),e[Ir]=n.current,Uo(e),new gu(n)},ja.version="19.2.0",ja}var kp;function v1(){if(kp)return lc.exports;kp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),lc.exports=y1(),lc.exports}var S1=v1(),D=Pc();const Au=Yc(D);var wp="popstate";function k1(t={}){function a(u,s){let{pathname:c,search:f,hash:m}=u.location;return _c("",{pathname:c,search:f,hash:m},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function l(u,s){return typeof s=="string"?s:Fa(s)}return C1(a,l,null,t)}function Qe(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function st(t,a){if(!t){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function w1(){return Math.random().toString(36).substring(2,10)}function Cp(t,a){return{usr:t.state,key:t.key,idx:a}}function _c(t,a,l=null,u){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof a=="string"?Ml(a):a,state:l,key:a&&a.key||u||w1()}}function Fa({pathname:t="/",search:a="",hash:l=""}){return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function Ml(t){let a={};if(t){let l=t.indexOf("#");l>=0&&(a.hash=t.substring(l),t=t.substring(0,l));let u=t.indexOf("?");u>=0&&(a.search=t.substring(u),t=t.substring(0,u)),t&&(a.pathname=t)}return a}function C1(t,a,l,u={}){let{window:s=document.defaultView,v5Compat:c=!1}=u,f=s.history,m="POP",p=null,h=b();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function b(){return(f.state||{idx:null}).idx}function x(){m="POP";let z=b(),j=z==null?null:z-h;h=z,p&&p({action:m,location:O.location,delta:j})}function S(z,j){m="PUSH";let H=_c(O.location,z,j);h=b()+1;let _=Cp(H,h),K=O.createHref(H);try{f.pushState(_,"",K)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;s.location.assign(K)}c&&p&&p({action:m,location:O.location,delta:1})}function v(z,j){m="REPLACE";let H=_c(O.location,z,j);h=b();let _=Cp(H,h),K=O.createHref(H);f.replaceState(_,"",K),c&&p&&p({action:m,location:O.location,delta:0})}function C(z){return T1(z)}let O={get action(){return m},get location(){return t(s,f)},listen(z){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(wp,x),p=z,()=>{s.removeEventListener(wp,x),p=null}},createHref(z){return a(s,z)},createURL:C,encodeLocation(z){let j=C(z);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:S,replace:v,go(z){return f.go(z)}};return O}function T1(t,a=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(l,"No window.location.(origin|href) available to create URL");let u=typeof t=="string"?t:Fa(t);return u=u.replace(/ $/,"%20"),!a&&u.startsWith("//")&&(u=l+u),new URL(u,l)}function Ng(t,a,l="/"){return E1(t,a,l,!1)}function E1(t,a,l,u){let s=typeof a=="string"?Ml(a):a,c=qt(s.pathname||"/",l);if(c==null)return null;let f=Mg(t);A1(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let h=B1(c);m=L1(f[p],h,u)}return m}function Mg(t,a=[],l=[],u="",s=!1){let c=(f,m,p=s,h)=>{let b={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(u)&&p)return;Qe(b.relativePath.startsWith(u),`Absolute route path "${b.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(u.length)}let x=Ht([u,b.relativePath]),S=l.concat(b);f.children&&f.children.length>0&&(Qe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Mg(f.children,a,S,x,p)),!(f.path==null&&!f.index)&&a.push({path:x,score:O1(x,f.index),routesMeta:S})};return t.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))c(f,m);else for(let p of _g(f.path))c(f,m,!0,p)}),a}function _g(t){let a=t.split("/");if(a.length===0)return[];let[l,...u]=a,s=l.endsWith("?"),c=l.replace(/\?$/,"");if(u.length===0)return s?[c,""]:[c];let f=_g(u.join("/")),m=[];return m.push(...f.map(p=>p===""?c:[c,p].join("/"))),s&&m.push(...f),m.map(p=>t.startsWith("/")&&p===""?"/":p)}function A1(t){t.sort((a,l)=>a.score!==l.score?l.score-a.score:z1(a.routesMeta.map(u=>u.childrenIndex),l.routesMeta.map(u=>u.childrenIndex)))}var j1=/^:[\w-]+$/,N1=3,M1=2,_1=1,D1=10,R1=-2,Tp=t=>t==="*";function O1(t,a){let l=t.split("/"),u=l.length;return l.some(Tp)&&(u+=R1),a&&(u+=M1),l.filter(s=>!Tp(s)).reduce((s,c)=>s+(j1.test(c)?N1:c===""?_1:D1),u)}function z1(t,a){return t.length===a.length&&t.slice(0,-1).every((u,s)=>u===a[s])?t[t.length-1]-a[a.length-1]:0}function L1(t,a,l=!1){let{routesMeta:u}=t,s={},c="/",f=[];for(let m=0;m<u.length;++m){let p=u[m],h=m===u.length-1,b=c==="/"?a:a.slice(c.length)||"/",x=ju({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},b),S=p.route;if(!x&&h&&l&&!u[u.length-1].route.index&&(x=ju({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},b)),!x)return null;Object.assign(s,x.params),f.push({params:s,pathname:Ht([c,x.pathname]),pathnameBase:F1(Ht([c,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(c=Ht([c,x.pathnameBase]))}return f}function ju(t,a){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[l,u]=U1(t.path,t.caseSensitive,t.end),s=a.match(l);if(!s)return null;let c=s[0],f=c.replace(/(.)\/+$/,"$1"),m=s.slice(1);return{params:u.reduce((h,{paramName:b,isOptional:x},S)=>{if(b==="*"){let C=m[S]||"";f=c.slice(0,c.length-C.length).replace(/(.)\/+$/,"$1")}const v=m[S];return x&&!v?h[b]=void 0:h[b]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:t}}function U1(t,a=!1,l=!0){st(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let u=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(u.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(u.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,a?void 0:"i"),u]}function B1(t){try{return t.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return st(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),t}}function qt(t,a){if(a==="/")return t;if(!t.toLowerCase().startsWith(a.toLowerCase()))return null;let l=a.endsWith("/")?a.length-1:a.length,u=t.charAt(l);return u&&u!=="/"?null:t.slice(l)||"/"}var H1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q1=t=>H1.test(t);function I1(t,a="/"){let{pathname:l,search:u="",hash:s=""}=typeof t=="string"?Ml(t):t,c;if(l)if(q1(l))c=l;else{if(l.includes("//")){let f=l;l=l.replace(/\/\/+/g,"/"),st(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${l}`)}l.startsWith("/")?c=Ep(l.substring(1),"/"):c=Ep(l,a)}else c=a;return{pathname:c,search:G1(u),hash:Y1(s)}}function Ep(t,a){let l=a.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?l.length>1&&l.pop():s!=="."&&l.push(s)}),l.length>1?l.join("/"):"/"}function oc(t,a,l,u){return`Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function V1(t){return t.filter((a,l)=>l===0||a.route.path&&a.route.path.length>0)}function Dg(t){let a=V1(t);return a.map((l,u)=>u===a.length-1?l.pathname:l.pathnameBase)}function Rg(t,a,l,u=!1){let s;typeof t=="string"?s=Ml(t):(s={...t},Qe(!s.pathname||!s.pathname.includes("?"),oc("?","pathname","search",s)),Qe(!s.pathname||!s.pathname.includes("#"),oc("#","pathname","hash",s)),Qe(!s.search||!s.search.includes("#"),oc("#","search","hash",s)));let c=t===""||s.pathname==="",f=c?"/":s.pathname,m;if(f==null)m=l;else{let x=a.length-1;if(!u&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),x-=1;s.pathname=S.join("/")}m=x>=0?a[x]:"/"}let p=I1(s,m),h=f&&f!=="/"&&f.endsWith("/"),b=(c||f===".")&&l.endsWith("/");return!p.pathname.endsWith("/")&&(h||b)&&(p.pathname+="/"),p}var Ht=t=>t.join("/").replace(/\/\/+/g,"/"),F1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),G1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Y1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function P1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function X1(t){return t.map(a=>a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Og=["POST","PUT","PATCH","DELETE"];new Set(Og);var J1=["GET",...Og];new Set(J1);var _l=D.createContext(null);_l.displayName="DataRouter";var Ou=D.createContext(null);Ou.displayName="DataRouterState";D.createContext(!1);var zg=D.createContext({isTransitioning:!1});zg.displayName="ViewTransition";var Q1=D.createContext(new Map);Q1.displayName="Fetchers";var Z1=D.createContext(null);Z1.displayName="Await";var ot=D.createContext(null);ot.displayName="Navigation";var Pa=D.createContext(null);Pa.displayName="Location";var pt=D.createContext({outlet:null,matches:[],isDataRoute:!1});pt.displayName="Route";var Xc=D.createContext(null);Xc.displayName="RouteError";function K1(t,{relative:a}={}){Qe(Xa(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:u}=D.useContext(ot),{hash:s,pathname:c,search:f}=Qa(t,{relative:a}),m=c;return l!=="/"&&(m=c==="/"?l:Ht([l,c])),u.createHref({pathname:m,search:f,hash:s})}function Xa(){return D.useContext(Pa)!=null}function mr(){return Qe(Xa(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Pa).location}var Lg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ug(t){D.useContext(ot).static||D.useLayoutEffect(t)}function Ja(){let{isDataRoute:t}=D.useContext(pt);return t?fy():W1()}function W1(){Qe(Xa(),"useNavigate() may be used only in the context of a <Router> component.");let t=D.useContext(_l),{basename:a,navigator:l}=D.useContext(ot),{matches:u}=D.useContext(pt),{pathname:s}=mr(),c=JSON.stringify(Dg(u)),f=D.useRef(!1);return Ug(()=>{f.current=!0}),D.useCallback((p,h={})=>{if(st(f.current,Lg),!f.current)return;if(typeof p=="number"){l.go(p);return}let b=Rg(p,JSON.parse(c),s,h.relative==="path");t==null&&a!=="/"&&(b.pathname=b.pathname==="/"?a:Ht([a,b.pathname])),(h.replace?l.replace:l.push)(b,h.state,h)},[a,l,c,s,t])}D.createContext(null);function $1(){let{matches:t}=D.useContext(pt),a=t[t.length-1];return a?a.params:{}}function Qa(t,{relative:a}={}){let{matches:l}=D.useContext(pt),{pathname:u}=mr(),s=JSON.stringify(Dg(l));return D.useMemo(()=>Rg(t,JSON.parse(s),u,a==="path"),[t,s,u,a])}function ey(t,a){return Bg(t,a)}function Bg(t,a,l,u,s){Qe(Xa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=D.useContext(ot),{matches:f}=D.useContext(pt),m=f[f.length-1],p=m?m.params:{},h=m?m.pathname:"/",b=m?m.pathnameBase:"/",x=m&&m.route;{let H=x&&x.path||"";Hg(h,!x||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let S=mr(),v;if(a){let H=typeof a=="string"?Ml(a):a;Qe(b==="/"||H.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`),v=H}else v=S;let C=v.pathname||"/",O=C;if(b!=="/"){let H=b.replace(/^\//,"").split("/");O="/"+C.replace(/^\//,"").split("/").slice(H.length).join("/")}let z=Ng(t,{pathname:O});st(x||z!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),st(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=ay(z&&z.map(H=>Object.assign({},H,{params:Object.assign({},p,H.params),pathname:Ht([b,c.encodeLocation?c.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?b:Ht([b,c.encodeLocation?c.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),f,l,u,s);return a&&j?D.createElement(Pa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},j):j}function ny(){let t=cy(),a=P1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),l=t instanceof Error?t.stack:null,u="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:u},c={padding:"2px 4px",backgroundColor:u},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:c},"ErrorBoundary")," or"," ",D.createElement("code",{style:c},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},a),l?D.createElement("pre",{style:s},l):null,f)}var ty=D.createElement(ny,null),ry=class extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){this.props.onError?this.props.onError(t,a):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?D.createElement(pt.Provider,{value:this.props.routeContext},D.createElement(Xc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ly({routeContext:t,match:a,children:l}){let u=D.useContext(_l);return u&&u.static&&u.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),D.createElement(pt.Provider,{value:t},l)}function ay(t,a=[],l=null,u=null,s=null){if(t==null){if(!l)return null;if(l.errors)t=l.matches;else if(a.length===0&&!l.initialized&&l.matches.length>0)t=l.matches;else return null}let c=t,f=l?.errors;if(f!=null){let b=c.findIndex(x=>x.route.id&&f?.[x.route.id]!==void 0);Qe(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,b+1))}let m=!1,p=-1;if(l)for(let b=0;b<c.length;b++){let x=c[b];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=b),x.route.id){let{loaderData:S,errors:v}=l,C=x.route.loader&&!S.hasOwnProperty(x.route.id)&&(!v||v[x.route.id]===void 0);if(x.route.lazy||C){m=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}let h=l&&u?(b,x)=>{u(b,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:X1(l.matches),errorInfo:x})}:void 0;return c.reduceRight((b,x,S)=>{let v,C=!1,O=null,z=null;l&&(v=f&&x.route.id?f[x.route.id]:void 0,O=x.route.errorElement||ty,m&&(p<0&&S===0?(Hg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,z=null):p===S&&(C=!0,z=x.route.hydrateFallbackElement||null)));let j=a.concat(c.slice(0,S+1)),H=()=>{let _;return v?_=O:C?_=z:x.route.Component?_=D.createElement(x.route.Component,null):x.route.element?_=x.route.element:_=b,D.createElement(ly,{match:x,routeContext:{outlet:b,matches:j,isDataRoute:l!=null},children:_})};return l&&(x.route.ErrorBoundary||x.route.errorElement||S===0)?D.createElement(ry,{location:l.location,revalidation:l.revalidation,component:O,error:v,children:H(),routeContext:{outlet:null,matches:j,isDataRoute:!0},onError:h}):H()},null)}function Jc(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iy(t){let a=D.useContext(_l);return Qe(a,Jc(t)),a}function uy(t){let a=D.useContext(Ou);return Qe(a,Jc(t)),a}function sy(t){let a=D.useContext(pt);return Qe(a,Jc(t)),a}function Qc(t){let a=sy(t),l=a.matches[a.matches.length-1];return Qe(l.route.id,`${t} can only be used on routes that contain a unique "id"`),l.route.id}function oy(){return Qc("useRouteId")}function cy(){let t=D.useContext(Xc),a=uy("useRouteError"),l=Qc("useRouteError");return t!==void 0?t:a.errors?.[l]}function fy(){let{router:t}=iy("useNavigate"),a=Qc("useNavigate"),l=D.useRef(!1);return Ug(()=>{l.current=!0}),D.useCallback(async(s,c={})=>{st(l.current,Lg),l.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:a,...c}))},[t,a])}var Ap={};function Hg(t,a,l){!a&&!Ap[t]&&(Ap[t]=!0,st(!1,l))}D.memo(dy);function dy({routes:t,future:a,state:l,unstable_onError:u}){return Bg(t,void 0,l,u,a)}function Ua(t){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hy({basename:t="/",children:a=null,location:l,navigationType:u="POP",navigator:s,static:c=!1,unstable_useTransitions:f}){Qe(!Xa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=t.replace(/^\/*/,"/"),p=D.useMemo(()=>({basename:m,navigator:s,static:c,unstable_useTransitions:f,future:{}}),[m,s,c,f]);typeof l=="string"&&(l=Ml(l));let{pathname:h="/",search:b="",hash:x="",state:S=null,key:v="default"}=l,C=D.useMemo(()=>{let O=qt(h,m);return O==null?null:{location:{pathname:O,search:b,hash:x,state:S,key:v},navigationType:u}},[m,h,b,x,S,v,u]);return st(C!=null,`<Router basename="${m}"> is not able to match the URL "${h}${b}${x}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:D.createElement(ot.Provider,{value:p},D.createElement(Pa.Provider,{children:a,value:C}))}function my({children:t,location:a}){return ey(Dc(t),a)}function Dc(t,a=[]){let l=[];return D.Children.forEach(t,(u,s)=>{if(!D.isValidElement(u))return;let c=[...a,s];if(u.type===D.Fragment){l.push.apply(l,Dc(u.props.children,c));return}Qe(u.type===Ua,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let f={id:u.props.id||c.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=Dc(u.props.children,c)),l.push(f)}),l}var Cu="get",Tu="application/x-www-form-urlencoded";function zu(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function py(t){return zu(t)&&t.tagName.toLowerCase()==="button"}function gy(t){return zu(t)&&t.tagName.toLowerCase()==="form"}function xy(t){return zu(t)&&t.tagName.toLowerCase()==="input"}function by(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yy(t,a){return t.button===0&&(!a||a==="_self")&&!by(t)}var bu=null;function vy(){if(bu===null)try{new FormData(document.createElement("form"),0),bu=!1}catch{bu=!0}return bu}var Sy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cc(t){return t!=null&&!Sy.has(t)?(st(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tu}"`),null):t}function ky(t,a){let l,u,s,c,f;if(gy(t)){let m=t.getAttribute("action");u=m?qt(m,a):null,l=t.getAttribute("method")||Cu,s=cc(t.getAttribute("enctype"))||Tu,c=new FormData(t)}else if(py(t)||xy(t)&&(t.type==="submit"||t.type==="image")){let m=t.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||m.getAttribute("action");if(u=p?qt(p,a):null,l=t.getAttribute("formmethod")||m.getAttribute("method")||Cu,s=cc(t.getAttribute("formenctype"))||cc(m.getAttribute("enctype"))||Tu,c=new FormData(m,t),!vy()){let{name:h,type:b,value:x}=t;if(b==="image"){let S=h?`${h}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else h&&c.append(h,x)}}else{if(zu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Cu,u=null,s=Tu,f=t}return c&&s==="text/plain"&&(f=c,c=void 0),{action:u,method:l.toLowerCase(),encType:s,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zc(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function wy(t,a,l){let u=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return u.pathname==="/"?u.pathname=`_root.${l}`:a&&qt(u.pathname,a)==="/"?u.pathname=`${a.replace(/\/$/,"")}/_root.${l}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${l}`,u}async function Cy(t,a){if(t.id in a)return a[t.id];try{let l=await import(t.module);return a[t.id]=l,l}catch(l){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ty(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Ey(t,a,l){let u=await Promise.all(t.map(async s=>{let c=a.routes[s.route.id];if(c){let f=await Cy(c,l);return f.links?f.links():[]}return[]}));return My(u.flat(1).filter(Ty).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function jp(t,a,l,u,s,c){let f=(p,h)=>l[h]?p.route.id!==l[h].route.id:!0,m=(p,h)=>l[h].pathname!==p.pathname||l[h].route.path?.endsWith("*")&&l[h].params["*"]!==p.params["*"];return c==="assets"?a.filter((p,h)=>f(p,h)||m(p,h)):c==="data"?a.filter((p,h)=>{let b=u.routes[p.route.id];if(!b||!b.hasLoader)return!1;if(f(p,h)||m(p,h))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Ay(t,a,{includeHydrateFallback:l}={}){return jy(t.map(u=>{let s=a.routes[u.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),l&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function jy(t){return[...new Set(t)]}function Ny(t){let a={},l=Object.keys(t).sort();for(let u of l)a[u]=t[u];return a}function My(t,a){let l=new Set;return new Set(a),t.reduce((u,s)=>{let c=JSON.stringify(Ny(s));return l.has(c)||(l.add(c),u.push({key:c,link:s})),u},[])}function qg(){let t=D.useContext(_l);return Zc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function _y(){let t=D.useContext(Ou);return Zc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Kc=D.createContext(void 0);Kc.displayName="FrameworkContext";function Ig(){let t=D.useContext(Kc);return Zc(t,"You must render this element inside a <HydratedRouter> element"),t}function Dy(t,a){let l=D.useContext(Kc),[u,s]=D.useState(!1),[c,f]=D.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:h,onMouseLeave:b,onTouchStart:x}=a,S=D.useRef(null);D.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let O=j=>{j.forEach(H=>{f(H.isIntersecting)})},z=new IntersectionObserver(O,{threshold:.5});return S.current&&z.observe(S.current),()=>{z.disconnect()}}},[t]),D.useEffect(()=>{if(u){let O=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(O)}}},[u]);let v=()=>{s(!0)},C=()=>{s(!1),f(!1)};return l?t!=="intent"?[c,S,{}]:[c,S,{onFocus:Na(m,v),onBlur:Na(p,C),onMouseEnter:Na(h,v),onMouseLeave:Na(b,C),onTouchStart:Na(x,v)}]:[!1,S,{}]}function Na(t,a){return l=>{t&&t(l),l.defaultPrevented||a(l)}}function Ry({page:t,...a}){let{router:l}=qg(),u=D.useMemo(()=>Ng(l.routes,t,l.basename),[l.routes,t,l.basename]);return u?D.createElement(zy,{page:t,matches:u,...a}):null}function Oy(t){let{manifest:a,routeModules:l}=Ig(),[u,s]=D.useState([]);return D.useEffect(()=>{let c=!1;return Ey(t,a,l).then(f=>{c||s(f)}),()=>{c=!0}},[t,a,l]),u}function zy({page:t,matches:a,...l}){let u=mr(),{manifest:s,routeModules:c}=Ig(),{basename:f}=qg(),{loaderData:m,matches:p}=_y(),h=D.useMemo(()=>jp(t,a,p,s,u,"data"),[t,a,p,s,u]),b=D.useMemo(()=>jp(t,a,p,s,u,"assets"),[t,a,p,s,u]),x=D.useMemo(()=>{if(t===u.pathname+u.search+u.hash)return[];let C=new Set,O=!1;if(a.forEach(j=>{let H=s.routes[j.route.id];!H||!H.hasLoader||(!h.some(_=>_.route.id===j.route.id)&&j.route.id in m&&c[j.route.id]?.shouldRevalidate||H.hasClientLoader?O=!0:C.add(j.route.id))}),C.size===0)return[];let z=wy(t,f,"data");return O&&C.size>0&&z.searchParams.set("_routes",a.filter(j=>C.has(j.route.id)).map(j=>j.route.id).join(",")),[z.pathname+z.search]},[f,m,u,s,h,a,t,c]),S=D.useMemo(()=>Ay(b,s),[b,s]),v=Oy(b);return D.createElement(D.Fragment,null,x.map(C=>D.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...l})),S.map(C=>D.createElement("link",{key:C,rel:"modulepreload",href:C,...l})),v.map(({key:C,link:O})=>D.createElement("link",{key:C,nonce:l.nonce,...O})))}function Ly(...t){return a=>{t.forEach(l=>{typeof l=="function"?l(a):l!=null&&(l.current=a)})}}var Vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Vg&&(window.__reactRouterVersion="7.10.1")}catch{}function Uy({basename:t,children:a,unstable_useTransitions:l,window:u}){let s=D.useRef();s.current==null&&(s.current=k1({window:u,v5Compat:!0}));let c=s.current,[f,m]=D.useState({action:c.action,location:c.location}),p=D.useCallback(h=>{l===!1?m(h):D.startTransition(()=>m(h))},[l]);return D.useLayoutEffect(()=>c.listen(p),[c,p]),D.createElement(hy,{basename:t,children:a,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:l===!0})}var Fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bt=D.forwardRef(function({onClick:a,discover:l="render",prefetch:u="none",relative:s,reloadDocument:c,replace:f,state:m,target:p,to:h,preventScrollReset:b,viewTransition:x,...S},v){let{basename:C,unstable_useTransitions:O}=D.useContext(ot),z=typeof h=="string"&&Fg.test(h),j,H=!1;if(typeof h=="string"&&z&&(j=h,Vg))try{let A=new URL(window.location.href),P=h.startsWith("//")?new URL(A.protocol+h):new URL(h),Q=qt(P.pathname,C);P.origin===A.origin&&Q!=null?h=Q+P.search+P.hash:H=!0}catch{st(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=K1(h,{relative:s}),[K,re,I]=Dy(u,S),ee=Iy(h,{replace:f,state:m,target:p,preventScrollReset:b,relative:s,viewTransition:x,unstable_useTransitions:O});function oe(A){a&&a(A),A.defaultPrevented||ee(A)}let W=D.createElement("a",{...S,...I,href:j||_,onClick:H||c?a:oe,ref:Ly(v,re),target:p,"data-discover":!z&&l==="render"?"true":void 0});return K&&!z?D.createElement(D.Fragment,null,W,D.createElement(Ry,{page:_})):W});Bt.displayName="Link";var By=D.forwardRef(function({"aria-current":a="page",caseSensitive:l=!1,className:u="",end:s=!1,style:c,to:f,viewTransition:m,children:p,...h},b){let x=Qa(f,{relative:h.relative}),S=mr(),v=D.useContext(Ou),{navigator:C,basename:O}=D.useContext(ot),z=v!=null&&Py(x)&&m===!0,j=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,H=S.pathname,_=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(H=H.toLowerCase(),_=_?_.toLowerCase():null,j=j.toLowerCase()),_&&O&&(_=qt(_,O)||_);const K=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let re=H===j||!s&&H.startsWith(j)&&H.charAt(K)==="/",I=_!=null&&(_===j||!s&&_.startsWith(j)&&_.charAt(j.length)==="/"),ee={isActive:re,isPending:I,isTransitioning:z},oe=re?a:void 0,W;typeof u=="function"?W=u(ee):W=[u,re?"active":null,I?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let A=typeof c=="function"?c(ee):c;return D.createElement(Bt,{...h,"aria-current":oe,className:W,ref:b,style:A,to:f,viewTransition:m},typeof p=="function"?p(ee):p)});By.displayName="NavLink";var Hy=D.forwardRef(({discover:t="render",fetcherKey:a,navigate:l,reloadDocument:u,replace:s,state:c,method:f=Cu,action:m,onSubmit:p,relative:h,preventScrollReset:b,viewTransition:x,...S},v)=>{let{unstable_useTransitions:C}=D.useContext(ot),O=Gy(),z=Yy(m,{relative:h}),j=f.toLowerCase()==="get"?"get":"post",H=typeof m=="string"&&Fg.test(m),_=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let re=K.nativeEvent.submitter,I=re?.getAttribute("formmethod")||f,ee=()=>O(re||K.currentTarget,{fetcherKey:a,method:I,navigate:l,replace:s,state:c,relative:h,preventScrollReset:b,viewTransition:x});C&&l!==!1?D.startTransition(()=>ee()):ee()};return D.createElement("form",{ref:v,method:j,action:z,onSubmit:u?p:_,...S,"data-discover":!H&&t==="render"?"true":void 0})});Hy.displayName="Form";function qy(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gg(t){let a=D.useContext(_l);return Qe(a,qy(t)),a}function Iy(t,{target:a,replace:l,state:u,preventScrollReset:s,relative:c,viewTransition:f,unstable_useTransitions:m}={}){let p=Ja(),h=mr(),b=Qa(t,{relative:c});return D.useCallback(x=>{if(yy(x,a)){x.preventDefault();let S=l!==void 0?l:Fa(h)===Fa(b),v=()=>p(t,{replace:S,state:u,preventScrollReset:s,relative:c,viewTransition:f});m?D.startTransition(()=>v()):v()}},[h,p,b,l,u,a,t,s,c,f,m])}var Vy=0,Fy=()=>`__${String(++Vy)}__`;function Gy(){let{router:t}=Gg("useSubmit"),{basename:a}=D.useContext(ot),l=oy(),u=t.fetch,s=t.navigate;return D.useCallback(async(c,f={})=>{let{action:m,method:p,encType:h,formData:b,body:x}=ky(c,a);if(f.navigate===!1){let S=f.fetcherKey||Fy();await u(S,l,f.action||m,{preventScrollReset:f.preventScrollReset,formData:b,body:x,formMethod:f.method||p,formEncType:f.encType||h,flushSync:f.flushSync})}else await s(f.action||m,{preventScrollReset:f.preventScrollReset,formData:b,body:x,formMethod:f.method||p,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:l,flushSync:f.flushSync,viewTransition:f.viewTransition})},[u,s,a,l])}function Yy(t,{relative:a}={}){let{basename:l}=D.useContext(ot),u=D.useContext(pt);Qe(u,"useFormAction must be used inside a RouteContext");let[s]=u.matches.slice(-1),c={...Qa(t||".",{relative:a})},f=mr();if(t==null){c.search=f.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(b=>b==="")){m.delete("index"),p.filter(x=>x).forEach(x=>m.append("index",x));let b=m.toString();c.search=b?`?${b}`:""}}return(!t||t===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(c.pathname=c.pathname==="/"?l:Ht([l,c.pathname])),Fa(c)}function Py(t,{relative:a}={}){let l=D.useContext(zg);Qe(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Gg("useViewTransitionState"),s=Qa(t,{relative:a});if(!l.isTransitioning)return!1;let c=qt(l.currentLocation.pathname,u)||l.currentLocation.pathname,f=qt(l.nextLocation.pathname,u)||l.nextLocation.pathname;return ju(s.pathname,f)!=null||ju(s.pathname,c)!=null}const Xy=({theme:t,onToggleTheme:a,onNavClick:l})=>{const u=mr(),s=Ja(),c=u.pathname==="/",[f,m]=D.useState(!1),p=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"lab",label:"Lab"}],h=b=>{m(!1),c?l(b):(s("/"),setTimeout(()=>{l(b)},100))};return D.useEffect(()=>(f?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[f]),g.jsxs(g.Fragment,{children:[g.jsx("header",{className:"fixed inset-x-0 top-0 h-(--header-height) z-20 border-b backdrop-blur-xl [html[data-theme='dark']_&]:border-white/5 [html[data-theme='light']_&]:border-black/5",children:g.jsxs("div",{className:"max-w-[1040px] mx-auto h-full px-5 flex items-center justify-between gap-3",children:[g.jsx(Bt,{to:"/",className:"tracking-[0.08em] uppercase text-[14px] text-fg-muted hover:text-fg transition-colors cursor-pointer",children:"Frontend · UX"}),g.jsxs("nav",{className:"hidden md:flex items-center gap-4 text-[13px]",children:[g.jsx(Bt,{to:"/",className:`px-2.5 py-1.5 rounded-full text-[13px] border border-transparent cursor-pointer
                         transition-all duration-150 ease-out
                         hover:text-fg hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:-translate-y-px
                         ${c?"text-fg":"text-fg-muted"}`,children:"Home"}),p.map(({id:b,label:x})=>g.jsx("button",{className:`px-2.5 py-1.5 rounded-full text-[13px] text-fg-muted border border-transparent cursor-pointer\r
                           transition-all duration-150 ease-out\r
                           hover:text-fg hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:-translate-y-px`,onClick:()=>h(b),children:x},b)),g.jsx(Bt,{to:"/blog",className:`px-2.5 py-1.5 rounded-full text-[13px] border border-transparent cursor-pointer
                         transition-all duration-150 ease-out
                         hover:text-fg hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:-translate-y-px
                         ${u.pathname==="/blog"?"text-fg":"text-fg-muted"}`,children:"Blog"})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("button",{className:`md:hidden w-9 h-9 rounded-full border border-(--border-subtle) bg-(--bg-elevated)\r
                         flex items-center justify-center cursor-pointer\r
                         transition-all duration-150 ease-out\r
                         hover:bg-(--bg-soft) hover:border-(--accent)/50`,"aria-label":"Toggle menu",onClick:()=>m(!f),children:f?g.jsx(Ky,{}):g.jsx(Zy,{})}),g.jsx("button",{className:`w-9 h-9 rounded-full border border-(--border-subtle) bg-(--bg-elevated)\r
                         flex items-center justify-center cursor-pointer\r
                         transition-all duration-150 ease-out\r
                         hover:-translate-y-px hover:bg-(--bg-soft) hover:border-(--accent)/50`,"aria-label":"Toggle theme",onClick:a,children:t==="dark"?g.jsx(Jy,{}):g.jsx(Qy,{})}),g.jsx(Bt,{to:"/contact",className:`hidden sm:inline-flex text-[13px] px-4 py-2 rounded-full border border-(--border-subtle)
                         bg-(--bg-soft) hover:bg-(--bg-elevated) hover:border-(--accent)/50 hover:-translate-y-px
                         transition-all duration-150 ease-out
                         ${u.pathname==="/contact"?"text-fg border-(--accent)/50":""}`,children:"Contact"})]})]})}),f&&g.jsx("div",{className:"md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-9998",onClick:()=>m(!1)}),g.jsx("div",{className:["md:hidden fixed top-0 right-0 bottom-0 w-[280px] z-9999","bg-[#0a0a0a] [html[data-theme='light']_&]:bg-white","border-l border-(--border-subtle)","shadow-[-8px_0_24px_rgba(0,0,0,0.5)]","transition-transform duration-300 ease-out",f?"translate-x-0":"translate-x-full"].join(" "),children:g.jsxs("nav",{className:"flex flex-col p-6 pt-[calc(var(--header-height)+16px)] gap-2",children:[g.jsx(Bt,{to:"/",className:["px-4 py-3 rounded-lg text-[14px] border border-transparent","transition-all duration-150 ease-out","hover:bg-(--bg-soft) hover:border-(--border-subtle)",c?"text-fg bg-(--bg-soft)":"text-fg-muted"].join(" "),onClick:()=>m(!1),children:"Home"}),p.map(({id:b,label:x})=>g.jsx("button",{className:`px-4 py-3 rounded-lg text-[14px] text-fg-muted border border-transparent text-left\r
                         transition-all duration-150 ease-out\r
                         hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:text-fg`,onClick:()=>h(b),children:x},b)),g.jsx(Bt,{to:"/blog",className:["px-4 py-3 rounded-lg text-[14px] border border-transparent","transition-all duration-150 ease-out","hover:bg-(--bg-soft) hover:border-(--border-subtle)",u.pathname==="/blog"?"text-fg bg-(--bg-soft)":"text-fg-muted"].join(" "),onClick:()=>m(!1),children:"Blog"}),g.jsx("div",{className:"mt-4 pt-4 border-t border-(--border-subtle)",children:g.jsx(Bt,{to:"/contact",className:`block w-full text-center text-[14px] px-4 py-3 rounded-lg border border-(--border-subtle)
                         bg-(--bg-soft) hover:bg-(--bg-elevated) hover:border-(--accent)/50
                         transition-all duration-150 ease-out text-fg
                         ${u.pathname==="/contact"?"border-(--accent)/50":""}`,onClick:()=>m(!1),children:"Contact"})})]})})]})},Jy=()=>g.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{fill:"currentColor",d:"M12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4 13H3a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2Zm17 0h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2ZM6.34 6.34a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41l-.7.7Zm12.02 12.02a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7ZM6.34 17.66l-.7.7a1 1 0 1 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41Zm12.02-12.02-.7.7a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"})}),Qy=()=>g.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",fill:"currentColor"})}),Zy=()=>g.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),Ky=()=>g.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),Wy=()=>{const t=new Date().getFullYear();return g.jsxs("footer",{className:"max-w-[1040px] mx-auto px-5 pb-6 pt-4 border-t border-white/5 flex flex-col gap-2 text-[11px] text-fg-muted sm:flex-row sm:justify-between",children:[g.jsxs("span",{children:["© ",t," Your Name. All rights reserved."]}),g.jsx("span",{children:"Built with React · TypeScript · minimal black & white."})]})},$y="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",fc=({title:t,value:a})=>g.jsxs("div",{className:"rounded-2xl bg-black/40 border border-white/5 p-2.5 [html[data-theme='light']_&]:bg-[#f6f6fb] [html[data-theme='light']_&]:border-[#e2e2ee]",children:[g.jsx("div",{className:"text-[11px] text-fg-muted mb-1",children:t}),g.jsx("div",{className:"text-[13px] font-medium",children:a})]}),ev=({onScrollTo:t})=>g.jsxs("section",{id:"top",className:"grid gap-7 mb-14 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)]",children:[g.jsxs("div",{children:[g.jsx("p",{className:$y,children:"Identity Profile"}),g.jsxs("h1",{className:"text-[clamp(28px,4vw,34px)] font-semibold leading-tight mb-3",children:["'최고'를 위해",g.jsx("br",{}),"'최악'을 대비하는,",g.jsx("br",{}),"'안전한 혁신가' 권경민입니다."]}),g.jsxs("p",{className:"text-[14px] text-fg-muted leading-[1.7] max-w-[520px] mb-6",children:["단순 기능 구현을 것을 넘어, 사용자에게 전달될 가치(Value)와 그 과정의 안전(Safety)을 동시에 설계합니다.",g.jsx("br",{}),"사이버보안을 전공하며 기른 ",g.jsx("strong",{children:"'비판적 사고'"}),"와"," ",g.jsx("strong",{children:"'리스크 관리'"})," 역량을 프론트엔드 개발에 녹여내고 있습니다."]}),g.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:["Safety First","Risk Management","Team Ownership","Frontend Core"].map(a=>g.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full border border-[var(--border-subtle)] text-fg-muted bg-white/5",children:a},a))}),g.jsxs("div",{className:"flex flex-wrap gap-3",children:[g.jsx("button",{className:`text-[13px] px-4.5 py-2.5 rounded-full border border-[var(--accent)]\r
                       bg-[var(--accent)] text-black font-medium shadow-[0_10px_30px_rgba(0,0,0,0.4)]\r
                       hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)] hover:opacity-95 hover:-translate-y-px\r
                       transition-all duration-150 ease-out\r
                       [html[data-theme='light']_&]:text-white\r
                       [html[data-theme='light']_&]:shadow-[0_6px_20px_rgba(0,0,0,0.15)]\r
                       [html[data-theme='light']_&]:hover:shadow-[0_10px_28px_rgba(0,0,0,0.2)]\r
                       cursor-pointer\r
                       `,onClick:()=>t("skills"),children:g.jsx("strong",{children:"경력 바로가기 "})}),g.jsxs("button",{className:`inline-flex items-center gap-1.5 text-[13px] text-fg-muted\r
                       hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out cursor-pointer`,onClick:()=>t("about"),children:[g.jsx("span",{children:"소개 더 보기"}),g.jsx("span",{className:"text-[14px] translate-y-px",children:"↳"})]})]})]}),g.jsxs("aside",{className:`rounded-3xl border border-[var(--border-subtle)]\r
                   bg-[radial-gradient(circle_at_top_left,#262633_0,#0b0b0d_50%)]\r
                   shadow-[0_18px_40px_rgba(0,0,0,0.35)]\r
                   flex flex-col gap-3.5 text-[13px] p-4.5\r
                   [html[data-theme='light']_&]:bg-[linear-gradient(135deg,#ffffff,#f3f3f8)]\r
                   [html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.1)]`,children:[g.jsxs("div",{className:"flex items-center justify-between gap-3",children:[g.jsxs("div",{children:[g.jsx("div",{className:"text-[16px] font-semibold",children:"Kwon Kyung-Min"}),g.jsx("div",{className:"text-[12px] text-fg-muted",children:"Frontend Engineer · Security Researcher"})]}),g.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[rgba(0,255,128,0.35)] text-[11px] uppercase tracking-[0.16em]",children:[g.jsx("span",{className:"w-[7px] h-[7px] rounded-full bg-[rgba(0,255,153,0.8)] shadow-[0_0_8px_rgba(0,255,153,0.7)] animate-pulse"}),g.jsx("span",{children:"Building Stable Products"})]})]}),g.jsxs("div",{className:"flex flex-col gap-2.5",children:[g.jsx(fc,{title:"Focus",value:"Risk Mgmt, Safety, UI Arch"}),g.jsx(fc,{title:"Strength",value:"Critical Thinking, Stability"}),g.jsx(fc,{title:"Based in",value:"Seongnam, KR (KST)"})]}),g.jsx("p",{className:"text-[11px] text-fg-muted mt-1 leading-relaxed",children:"최근에는 차량 데이터 시각화 성능 개선, Web Worker를 활용한 렌더링 최적화, 그리고 팀의 심리적 안전지대를 만드는 일에 집중하고 있습니다."})]})]}),Np="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-transform transition-shadow transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/20 [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] [html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",nv="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5",tv="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",rv="text-[20px] font-semibold tracking-[0.02em]",lv="text-[13px] text-fg-muted leading-relaxed",av="text-[11px] px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-fg-muted",iv=()=>g.jsxs("section",{id:"about",className:"mb-14",children:[g.jsxs("div",{className:nv,children:[g.jsxs("div",{children:[g.jsx("p",{className:tv,children:"About"}),g.jsx("h2",{className:rv,children:"개발자로서의 가치관"})]}),g.jsx("p",{className:lv,children:"최고의 성과를 지향하되, 최악의 상황을 먼저 대비하는 '안전한 혁신'을 추구합니다."})]}),g.jsxs("div",{className:"grid gap-4.5 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]",children:[g.jsxs("div",{className:Np,children:[g.jsx("div",{className:"flex items-center justify-between gap-2 mb-2",children:g.jsx("h3",{className:"text-[15px] font-bold",children:"안전한 혁신 (Safe Innovation)"})}),g.jsxs("div",{className:"text-[13px] text-fg-muted leading-[1.7]",children:[g.jsxs("p",{children:["새로운 기술로 사람들에게 가치를 주는 것을 좋아하지만, 그 과정에서",g.jsx("strong",{children:' "누군가 피해를 보지 않도록" '}),"하는 것을 더 중요하게 생각합니다.",g.jsx("br",{}),g.jsx("br",{}),"보안을 전공하며 익힌 ",g.jsx("strong",{children:"Risk Management"})," 사고방식을 개발에 적용하여, 화려한 기능 이전에 발생할 수 있는 최악의 시나리오를 먼저 방어합니다."]}),g.jsxs("ul",{className:"mt-3 pl-4 list-disc space-y-1",children:[g.jsx("li",{children:"사용자 피해 방지를 최우선으로 하는 설계"}),g.jsx("li",{children:"통제 가능한 리스크 안에서의 과감한 기술 도전"}),g.jsx("li",{children:"보안적/비판적 사고를 통한 견고한 아키텍처 구축"})]})]})]}),g.jsxs("div",{className:Np,children:[g.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[g.jsx("h3",{className:"text-[15px] font-bold",children:"일하는 태도"}),g.jsx("span",{className:av,children:"Mindset"})]}),g.jsxs("div",{className:"text-[13px] text-fg-muted leading-[1.7]",children:[g.jsxs("p",{className:"mb-2",children:[g.jsx("strong",{children:'"팀의 심리적 안전지대"'}),"가 되고자 합니다."]}),g.jsxs("ul",{className:"mt-1.5 pl-4 list-disc space-y-1",children:[g.jsx("li",{children:"'나'보다 '우리(Team)'의 이익을 먼저 고려"}),g.jsx("li",{children:"문제가 생기면 외부 탓보다 해결책과 내 안의 원인 분석"}),g.jsx("li",{children:"끝까지 파고드는 집요함 (Log Consistency 해결 경험)"}),g.jsx("li",{children:"동료가 안심하고 등을 맡길 수 있는 신뢰 구축"})]})]})]})]})]}),uv="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-transform transition-shadow transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/20 [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] [html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",sv="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5",ov="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",cv="text-[20px] font-semibold tracking-[0.02em]",fv="text-[13px] text-fg-muted leading-relaxed",Yg="text-[11px] px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-fg-muted",Ba="text-[11px] px-2.5 py-1.5 rounded-full bg-[var(--bg-soft)] border border-[var(--border-subtle)] text-fg-muted",dv=t=>`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 border ${t?"bg-[var(--bg-soft)] text-fg border-[var(--border-subtle)]":"text-fg-muted hover:text-fg hover:bg-[var(--bg-soft)]/50 border-transparent"}`,yu=({title:t,chipLabel:a,skills:l})=>g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[g.jsx("h3",{className:"text-[15px] font-bold",children:t}),a?g.jsx("span",{className:Yg,children:a}):g.jsx(g.Fragment,{})]}),g.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:l.map(u=>g.jsx("span",{className:Ba,children:u},u))})]}),Mp=()=>{const t=[{title:"Frontend Core",skills:["React.js","Next.js","TypeScript","TailwindCSS","Electron","Node.js","Zustand","Redux","ZeroMQ"]},{title:"Architecture & Perf",skills:["Domain-Driven Design","Web Worker","Event Bus / IPC","Rendering Optimization","Memory Management"]},{title:"Security & Infra",skills:["Cyber Security","Network Forensics","Docker","Linux / Shell","GitLab / CI"]},{title:"AI & Mobile",skills:["Flutter","Python","TensorFlow","Firebase","OpenCV"]}];return g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[g.jsx(yu,{...t[0]}),g.jsx(yu,{...t[1]})]}),g.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[g.jsx(yu,{...t[2]}),g.jsx(yu,{...t[3]})]})]})},hv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfElEQVR4Ae2WA8wcQRiG39q2tTszu7XtNnYd1XZ7OzN7eyqDmmF/1jbipI7rhrVt97r/7SW/j81F9yTPYflh99tFmjQlQuc1BRHTQeU2EFdW0jKRCZUfg8LXQTEbICK62RtM7AGxnoLJIDQreXWf8626MqAHqqNUyNL6YOYu6N7wTu4gmJmcmtvWY//mJ+1vFRFhxgwQ/jZ0ciacA+QF0z6QuB1WBaEY10F5D0SFuvYVyprwH6DmVTCZCSpzEjAXzGvva45GTKjGcWiecOnszKl5CcQ9HEMCldHJVQ36nOrxafe79aTKiBliHA0H4FwD1NgOZX4lpAzFOALNKhAA3+ZkkCrse7VQAEweBOVNkTKYPA7dk3/7MPnCNoAOXAPlFMpSPW7belRn+MQCkVvA+B+nCjKs+A3NeA3KH4KJx3GpiidoJ+6CmRnQ+Eh0n1E12hQcCCJuQvcHoeUPkmR0jmH+AZH3ofE5iMyYcmBiGah4V/xgVgK685PQA0FQfglsCUFElEBNqMYEEPMEiHgGJj+CiQ/xab4HNb6A8L/hVjrjmPBPoNJCdPaXA7GagXk7Qrd6xW17b0+0W9odxPCBySdOJWw1aWvkImW0DtQGMbPQ3h8OIDTedyOlELka7QP51wOROSkOwJ0XQH4FqExhC4gYAMYvQPfmB6BFagGTk0DMzaB8Axhfl7jGWmhyPYi8HBpsTDoBMPEX1JWBUqHiHNqvDEL323qT0Oe8jIQyN22l85uYb6CKmRECMI47O1m27iQ189U9TlCaPBr54UZdp5wNPbbW/9EJ5gM0cTr0chMRKhZCWboXjO8E5TnJGho6RGSCCTdUrqEE0qT5B6CGc+DEAtyrAAAAAElFTkSuQmCC",mv=[{id:"career-1",company:"SURESOFTTECH",companyLogo:hv,position:"Frontend Developer",period:"2023.03 - 현재",projects:[{name:"차량 통합 제어기(CCU2) Log Monitor & Analyzer",period:"2024.07 - 2025.06",role:"Frontend Lead / 아키텍처 설계",description:"DLT/CAN/DoIP/SOMEIP 대용량 로그를 실시간 수집·분석하여 차량 상태를 진단하는 Electron 기반 Log Analyzer. 기존 DLT-Viewer 한계를 극복하고 비전문가도 쉽게 분석 가능한 UX/성능 중심 데스크톱 앱 구축.",tasks:["아키텍처 재설계: 기존 웹 뷰어(Web)를 Electron 데스크톱 앱으로 마이그레이션하여 시스템 접근성 및 성능 강화","비동기 파이프라인 구축: ZeroMQ와 IPC 통신을 활용해 대용량 로그 수집/처리 간 병목 현상 및 데이터 유실 방지","렌더링 엔진 튜닝: TraceTable 라이브러리의 내부 캐싱 로직을 오버라이딩하여 불필요한 리렌더링 차단","UX 고도화: 가상 스크롤(Virtual Scrolling) 및 gridBufferDataObj 활용 로직을 구현해 수십만 건 탐색 시 지연 시간 0.2초 미만 달성","데이터 정합성 관리: Zustand 기반의 전역 상태 관리 및 커스텀 스토어(CustomStore) 설계로 실시간 데이터 동기화 이슈 해결"],achievements:[" 성능 최적화: 렌더링 성능 2.3배 향상(1.04s → 450ms) 및 메모리 사용량 30% 절감(3.3GB → 2.0GB)"," 업무 효율화: 로그 분석 소요 시간 90% 단축(5분 → 30초) 및 분석 정확도 98% 확보"," 대용량 처리: 초당 80,000건 이상의 로그 데이터를 UI 멈춤(Freezing) 없이 실시간 시각화"," 안정성 확보: 테스트 코드 도입 및 스크립트 모듈화를 통해 기능 추가 시 장애 발생률 90% 감소"," 차트 개선: Aggregation 기법 적용으로 차트 렌더링 속도 85% 개선(3.2s → 0.48s)"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["ZeroMQ","DevExtreme","Zustand","TailwindCSS"],patterns:["이벤트 버스(useEventOn)","CustomStore","무한 스크롤 버퍼링"]}},{name:"사용자 정의 필터링 기반 DLT 로그 분석 툴",period:"2025.07 - 2025.09",role:"Frontend Lead / 성능 최적화",description:"수백만 건 로그(DLT/CSV)를 실시간에 가깝게 시각화하고 사용자 맞춤 UI·필터링으로 분석 효율을 극대화하는 Electron 기반 로그 분석 툴. 현업 분석가 워크플로우 단축과 정확도 향상에 집중.",tasks:["가상 스크롤 엔진 최적화: DevExtreme DataGrid 기반의 가상 스크롤을 고도화하여 대용량 데이터 렌더링 병목 해소","스트리밍 파이프라인 구축: Node.js의 Stream 처리를 적용해 메모리 오버헤드 없이 대용량 데이터를 안정적으로 파일 시스템에 기록","UI/UX 커스터마이징: rc-dock 라이브러리를 활용해 사용자 작업 환경(패널 배치)을 저장·복원할 수 있는 도킹 레이아웃 시스템 구현","프로세스 자동화: IPC 통신을 활용하여 필터 파일 자동 생성 및 외부 DLT 뷰어 실행 과정을 원클릭으로 통합","기술 문서화: 정규식 호환성, UI 렌더링 이슈 등 반복되는 문제의 해결 과정을 문서화하여 팀 내 개발 생산성 기여"],achievements:[" 초고속 데이터 처리: 100만 건 이상의 대용량 로그 로딩 및 탐색 시 평균 응답 속도 2초 이내 달성"," 리소스 최적화: 스트리밍 방식(Stream API) 도입으로 대용량 CSV 내보내기(Export) 시 메모리 사용량 60% 절감"," 데이터 입출력 성능: 100만 행의 데이터를 3초 이내에 파일로 변환 및 저장하는 고속 Export 구현"," 업무 효율성 증대: 맞춤형 레이아웃 및 외부 뷰어 연동 자동화로 반복 작업을 제거하여 업무 워크플로우 30~40% 단축"," 운영 안정성: 정밀한 시간(μs) 동기화 및 트러블슈팅 `플레이북` 도입으로 이슈 대응 속도 향상"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["rc-dock","DevExtreme DataGrid","Recharts"],patterns:["IPC 통신","가상 스크롤(Virtual Scrolling)","스트리밍 데이터 처리"]}},{name:"차량제어 시험산출물 관리 시스템 고도화(VTDM)",period:"2025.09 - 현재",role:"Frontend Developer / 유지보수·아키텍처 개선",description:"차량 테스트/평가 산출물을 클라우드에서 통합 관리하는 웹 플랫폼(SaaS) 유지보수 및 고도화. 레거시 기술 부채로 인한 유지보수 난이도와 대용량 조회 성능 문제를 해결하기 위해 도메인 중심 재설계 및 렌더링 최적화 주도.",tasks:["아키텍처 리팩토링: 기존 구조를 DDD(Domain-Driven Design)로 재편하고, 공통 로직을 커스텀 훅으로 추상화, 유지보수성 강화","스레드 최적화: 무한 스크롤의 DOM 연산 로직을 Web Worker로 분리하여 메인 스레드 블로킹(Blocking) 현상 및 UI 끊김 제거","상태 관리 개선: 불필요한 Global State를 Local State로 전환하고 렌더링 트리거를 통합 관리하여 성능 병목 해소","시각화 모듈 개발: AgGrid 및 AgChart를 커스터마이징하여 대시보드 내 시스템 로그 모니터링 및 분석 차트 구현","보안 시스템 구축: 화이트리스트 기반 접근 제어 및 이슈 대응(Hotfix) 프로세스를 정립하여 데이터 보안성 확보"],achievements:["코드 경량화: 도메인 주도 설계(DDD) 및 모듈화 도입으로 전체 코드베이스(LOC) 30% 절감","렌더링 성능: 컴포넌트 의존성 최적화로 불필요한 리렌더링 80% 감소 (5회 → 1회)","UX 최적화: 연산 부하 분산 처리를 통해 대용량 리스트 스크롤 시 프레임 드랍(Frame Drop) 0% 달성","운영 안정성: 전역 상태(Global State) 의존도 축소로 사이드 이펙트에 의한 버그 발생률 최소화"],techStack:{languages:["React(TypeScript)","Node.js"],libs:["AgGrid","AgChart"],patterns:["Domain-Driven Design(DDD)","Web Worker","Custom Hooks","Docker","Spring Boot 협업"]}}]}],pv=({techStack:t})=>g.jsxs("div",{className:"space-y-2",children:[g.jsx("div",{className:"text-[12px] font-semibold",children:"기술 스택"}),g.jsxs("div",{className:"space-y-1.5",children:[t.languages&&t.languages.length>0&&g.jsxs("div",{className:"flex gap-2 items-center",children:[g.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"언어/프레임워크"}),g.jsx("div",{className:"flex flex-wrap gap-1",children:t.languages.map(a=>g.jsx("span",{className:Ba,children:a},a))})]}),t.libs&&t.libs.length>0&&g.jsxs("div",{className:"flex gap-2 items-center",children:[g.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"라이브러리"}),g.jsx("div",{className:"flex flex-wrap gap-1",children:t.libs.map(a=>g.jsx("span",{className:Ba,children:a},a))})]}),t.patterns&&t.patterns.length>0&&g.jsxs("div",{className:"flex gap-2 items-center",children:[g.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"패턴/기법"}),g.jsx("div",{className:"flex flex-wrap gap-1",children:t.patterns.map(a=>g.jsx("span",{className:Ba,children:a},a))})]})]})]}),Pg=({open:t,children:a,durationMs:l=360})=>g.jsx("div",{className:["grid overflow-hidden","transition-[grid-template-rows]","ease-[cubic-bezier(.2,.8,.2,1)]",t?"grid-rows-[1fr]":"grid-rows-[0fr]"].join(" "),style:{transitionDuration:`${l}ms`},children:g.jsx("div",{className:"min-h-0 overflow-hidden",children:g.jsx("div",{className:["transition-[opacity,transform]","ease-[cubic-bezier(.2,.8,.2,1)]","will-change-[opacity,transform]",t?"opacity-100 translate-y-0":"opacity-0 -translate-y-1"].join(" "),style:{transitionDuration:`${Math.max(220,l-80)}ms`},children:a})})}),gv=({project:t})=>{const[a,l]=D.useState(!1);return g.jsxs("article",{className:["rounded-2xl border bg-[var(--bg-soft)] px-4 py-3","transition-colors duration-200",a?"border-gray-400":"border-[var(--border-subtle)]","hover:border-[var(--accent)]/50"].join(" "),children:[g.jsxs("button",{type:"button","aria-expanded":a,onClick:u=>{u.stopPropagation(),l(s=>!s)},className:"w-full flex items-center justify-between gap-3 text-left cursor-pointer",children:[g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsx("h4",{className:"text-[15px] font-semibold leading-snug",children:t.name}),g.jsx("div",{className:"mt-0.5 text-[12px] text-fg-muted",children:t.role})]}),g.jsx("span",{className:"shrink-0 text-[11px] text-fg-muted",children:t.period}),g.jsx("svg",{className:["w-4 h-4 shrink-0 text-fg-muted transition-transform duration-200",a?"rotate-180":""].join(" "),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),g.jsx(Pg,{open:a,durationMs:360,children:g.jsxs("div",{className:"mt-3",children:[t.description&&g.jsx("p",{className:"text-[12.5px] leading-relaxed text-fg-muted",children:t.description}),g.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),g.jsx("ul",{className:"space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted",children:t.tasks.map((u,s)=>g.jsxs("li",{className:"flex gap-2",children:[g.jsx("span",{className:"mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-muted)]/40"}),g.jsx("span",{className:"min-w-0",children:u})]},s))}),t.achievements?.length?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),g.jsx("div",{className:"text-[12px] font-semibold mb-2",children:"성과"}),g.jsx("ul",{className:"space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted",children:t.achievements.map((u,s)=>g.jsxs("li",{className:"flex gap-2",children:[g.jsx("span",{className:"mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/70"}),g.jsx("span",{className:"min-w-0",children:u})]},s))})]}):null,t.techStack?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),g.jsx(pv,{techStack:t.techStack})]}):null]})})]})},xv=({career:t})=>{const[a,l]=D.useState(!0);return g.jsxs("section",{className:"pb-8 last:pb-0",children:[g.jsx("header",{children:g.jsx("button",{type:"button","aria-expanded":a,onClick:()=>l(u=>!u),className:["w-full rounded-2xl border bg-[var(--bg-elevated)]","px-4 py-3 flex items-start justify-between gap-3","transition-colors duration-200 cursor-pointer",a?"border-gray-400":"border-[var(--border-subtle)]","hover:border-[var(--accent)]/50"].join(" "),children:g.jsxs("div",{className:"min-w-0 flex w-full items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[t.companyLogo?g.jsx("img",{src:t.companyLogo,alt:`${t.company} logo`,className:"w-9 h-9 shrink-0 object-contain rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] p-1",loading:"lazy"}):g.jsx("div",{className:"w-9 h-9 shrink-0 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)]"}),g.jsx("div",{className:"min-w-0",children:g.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-2 gap-y-1",children:[g.jsx("h3",{className:"text-[16px] font-bold leading-tight truncate",children:t.company}),g.jsx("span",{className:"text-[12px] text-fg-muted",children:t.position})]})})]}),g.jsxs("div",{className:"flex h-full items-center gap-3",children:[g.jsx("div",{className:"text-[12px] text-fg-muted uppercase tracking-wide",children:t.period}),g.jsx("svg",{className:["w-5 h-5 text-fg-muted transition-transform duration-200",a?"rotate-180":""].join(" "),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]})})}),g.jsx(Pg,{open:a,durationMs:420,children:g.jsx("div",{className:"space-y-4 mt-5 ml-2.5",children:t.projects.map((u,s)=>g.jsx(gv,{project:u,index:s},s))})})]})},bv=()=>g.jsx("div",{className:"space-y-0",children:mv.map(t=>g.jsx(xv,{career:t},t.id))}),yv=[{id:"pkg-1",name:"@broadcast-event-system",description:"“React 애플리케이션을 위한 타입 안전(Type-safe) 이벤트 버스 및 브로드캐스트 서비스입니다. React 훅을 사용할 때만 React가 필요하고, 그 외에는 의존성이 전혀 없는 순수 TypeScript(Zero dependencies)입니다.”",version:"1.0.3",githubUrl:"https://github.com/km-kwon/broadcast-event-system",npmUrl:"https://www.npmjs.com/package/broadcast-event-system",techStack:["React","TypeScript","event-driven","web-broadcast"]},{id:"pkg-2",name:"@circular-queue-react",description:"TypeScript와 React를 위한 고성능 원형 버퍼/큐입니다. 의존성은 없고(React는 선택 사항), 로그 처리, 스트리밍 데이터, 롤링 윈도우, 실시간 UI 업데이트에 좋습니다.",version:"1.0.2",githubUrl:"https://github.com/km-kwon/react-circular-queue",npmUrl:"https://www.npmjs.com/package/circular-queue-react",techStack:["React","TypeScript","Data Structure"]}],vv=()=>g.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:g.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),Sv=()=>g.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"currentColor",children:g.jsx("path",{d:"M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"})}),kv=({pkg:t})=>g.jsxs("div",{className:"bg-[var(--bg-soft)] rounded-lg p-4 border border-[var(--border-subtle)] hover:border-white/20 transition-colors",children:[g.jsxs("div",{className:"mb-3 w-full ",children:[g.jsxs("div",{className:"w-full flex justify-between items-center",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2",children:[g.jsx("h3",{className:"text-[15px] font-bold font-mono",children:t.name}),g.jsxs("span",{className:Yg,children:["v",t.version]}),t.downloads&&g.jsxs("span",{className:"text-[11px] text-fg-muted",children:["📦 ",t.downloads]})]}),g.jsxs("div",{className:"flex gap-3 text-[12px]",children:[t.githubUrl&&g.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex gap-1.5 text-fg-muted hover:text-fg transition-colors",children:[g.jsx(vv,{}),g.jsx("span",{children:"GitHub"})]}),t.npmUrl&&g.jsxs("a",{href:t.npmUrl,target:"_blank",rel:"noopener noreferrer",className:"flex gap-1.5 text-fg-muted hover:text-fg transition-colors",children:[g.jsx(Sv,{}),g.jsx("span",{children:"NPM"})]})]})]}),g.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed",children:t.description})]}),g.jsx("div",{className:"flex flex-wrap gap-1.5",children:t.techStack.map(a=>g.jsx("span",{className:Ba,children:a},a))})]}),wv=()=>g.jsx("div",{className:"grid gap-3 md:grid-cols-1",children:yv.map(t=>g.jsx(kv,{pkg:t},t.id))}),Cv=()=>{const[t,a]=D.useState("career"),l=[{key:"career",label:"경력"},{key:"opensource",label:"오픈소스"},{key:"stack",label:"기술 스택"}],u=()=>{switch(t){case"stack":return g.jsx(Mp,{});case"career":return g.jsx(bv,{});case"opensource":return g.jsx(wv,{});default:return g.jsx(Mp,{})}};return g.jsxs("section",{id:"skills",className:"mb-14",children:[g.jsxs("div",{className:sv,children:[g.jsxs("div",{children:[g.jsx("p",{className:ov,children:"Skills"}),g.jsx("h2",{className:cv,children:"경력 & 전문성"})]}),g.jsx("p",{className:fv,children:"안전하고 견고한 제품을 만들기 위해 사용하는 기술들입니다."})]}),g.jsx("div",{className:"flex gap-2 mb-4",children:l.map(s=>g.jsx("button",{onClick:()=>a(s.key),className:dv(t===s.key),children:s.label},s.key))}),g.jsx("div",{className:uv,children:u()})]})},Tv=`# AI 시대, “유지보수도 AI가 하면 되지 않나요?”라는 말에 대하여\r
\r
### – Vibe Coding, 프롬프트, 그리고 VTDM 개선 작업에서 느낀 점\r
\r
요즘 개발자들 사이에서 이런 말, 한 번쯤은 들어봤을 거다.\r
\r
> “코딩? 이젠 AI 쓰면 되지 않냐?”\r
>\r
> “유지보수도 이제 AI가 알아서 해줄 텐데…”\r
\r
겉으로 들으면 그럴싸하다.\r
\r
나도 ChatGPT, Copilot 같은 도구를 매일 쓰고 있고, 확실히 **“손으로 타이핑하는 일”** 은 줄어들고 있다.\r
\r
실제로 VTDM 개선/유지보수 작업을 맡았을 때도, 나는 AI를 꽤 공격적으로 활용했다.\r
\r
인수인계 시간은 길지 않았고, 이미 돌아가고 있는 서비스에 개선·요구사항은 계속 들어오는 상황이었다.\r
\r
- 기존 구조 전체를 완벽히 이해할 시간은 부족하고,\r
- 그렇다고 “모릅니다”라고 하며 일을 거절할 수도 없고.\r
\r
그래서 내가 선택한 전략은 이거였다.\r
\r
> “일단 내가 이해한 요구사항과 지금까지 파악한 구조를 최대한 텍스트로 정리해서\r
>\r
> AI에게 던져놓고, 구현/개선은 AI를 최대한 부려먹자.”\r
\r
실제로 이 방식은 **꽤 잘 먹혔다.**\r
\r
- 구현 속도는 빨라졌고,\r
- 작은 기능 추가나 리팩토링은 AI 도움으로 금방금방 처리됐고,\r
- 눈에 보이는 개선도 꾸준히 쌓였다.\r
\r
그런데 어느 순간 이런 생각이 들기 시작했다.\r
\r
> “내가 직접 코드를 치는 시간은 점점 줄어드는데,\r
>\r
> **이 시스템을 이해하는 비용은 줄지 않고 오히려 늘어나고 있는 것 같다.**\r
>\r
> 이게 과연 옳은 상황인가?”\r
\r
이 글은 그 질문에서 시작한다.\r
\r
---\r
\r
## 1. 유지보수의 본질은 “코드 몇 줄 고치는 것”이 아니다\r
\r
VTDM를 포함해서, 유지보수 작업을 해본 사람은 안다.\r
\r
우리가 시간을 쓰는 포인트는 대부분 **타이핑**이 아니라 **이해**다.\r
\r
조금만 쪼개보면 유지보수는 대략 이런 단계를 거친다.\r
\r
1. **도메인 이해**\r
   - 이 기능이 “왜” 존재하는지?\r
   - 어떤 비즈니스 규칙/정책/예외를 만족해야 하는지?\r
2. **현재 구조 이해**\r
   - 이 코드가 어느 모듈/서비스/컴포넌트와 연결되어 있는지?\r
   - 바꿨을 때 어디까지 파급효과가 갈 수 있는지?\r
3. **변경 설계**\r
   - 어디를 수정하고, 어디는 건드리면 안 되는지?\r
   - 추상화 수준을 올릴지 내릴지?\r
   - 나중에 다시 바뀔 걸 감안하면 어떤 구조가 버틸 수 있는지?\r
4. **구현 + 테스트**\r
   - 실제 코드 수정\r
   - 테스트 작성/수정\r
   - 배포/롤백 전략까지 포함한 검증\r
\r
AI가 가장 잘 도와줄 수 있는 부분은 **4번**이다.\r
\r
우리가 생각한 설계를 구현해 주고, 코드 템플릿을 만들어주고, 테스트 코드까지 어느 정도 뽑아줄 수 있다.\r
\r
반대로, **1~3번**에 해당하는:\r
\r
- 도메인/문제 정의\r
- 아키텍처 설계\r
- 변경 영향 범위 판단\r
\r
이 부분은 여전히 **사람의 머리**에서 결정된다.\r
\r
VTDM 작업 때 내가 느꼈던 이상한 감각도 여기서 왔다.\r
\r
- “코드 수정” 그 자체는 AI가 많이 대신해 주는데,\r
- 정작 **내가 감당해야 하는 이해 비용과 책임**은 줄지 않는다.\r
- 오히려 _“AI가 바꿔놓은 코드까지 포함해서”_ 이해해야 할 범위가 늘어난다.\r
\r
> 개선은 계속 되는데,\r
>\r
> 내가 시스템 전체를 “제대로 이해하고 있다”는 느낌은 점점 안 든다.\r
>\r
> 이게 과연 건강한 상태일까?\r
\r
---\r
\r
## 2. 프롬프트 엔지니어링 = 새로운 설계 방식\r
\r
AI를 쓸 때 우리가 작성하는 프롬프트는 사실 **요구사항 + 설계 + 제약 조건이 섞인 자유형 명세서**에 가깝다.\r
\r
예를 들어, 같은 기능이라도 이런 차이가 있다.\r
\r
- “로그인 화면 만들어줘”\r
- “이메일/비밀번호 기반 로그인 폼을 만들고,\r
  - 입력값은 클라이언트에서 1차 검증,\r
  - 서버 에러 메시지는 토스트로 노출,\r
  - 로딩 상태/에러 상태를 명확하게 분리,\r
  - React + Zustand 조합,\r
  - 나중에 소셜 로그인이 추가될 걸 감안해서 확장 가능한 구조로 작성해줘”\r
\r
둘 다 “로그인 화면”이라는 기능을 요구하지만,\r
\r
**결과물의 구조·품질·유지보수성은 완전 달라진다.**\r
\r
여기서 중요한 포인트:\r
\r
> 프롬프트를 잘 쓴다는 건\r
>\r
> 단순히 “AI에게 말을 예쁘게 한다”가 아니라,\r
>\r
> **문제를 제대로 정의하고, 제약을 설정하고,\r
> 설계 의도를 언어로 풀어낼 수 있다**는 뜻이다.\r
\r
나는 VTDM 작업을 하면서 이걸 아주 많이 느꼈다.\r
\r
- 내가 도메인/요구사항을 대충 이해한 상태에서 AI에게 시키면\r
  → 코드도 그 수준에서 “대충” 나온다.\r
- 내가 요구사항/맥락을 깊게 이해하고,\r
  엣지 케이스까지 프롬프트에 녹여서 지시하면\r
  → 코드도 훨씬 안정적이고, 나중에 수정하기 편한 구조로 나온다.\r
\r
그래서 지금은 이렇게 생각한다.\r
\r
> “프롬프트 엔지니어링”은 AI와 잘 노는 기술이 아니라,\r
>\r
> **엔지니어링 능력을 텍스트로 표현하는 새로운 인터페이스**다.\r
\r
문제는, 이게 또 다른 종류의 부담을 만든다는 것이다.\r
\r
- 코드를 직접 치는 시간은 줄었는데,\r
- 오히려 **프롬프트를 잘 쓰기 위한 이해/설계 시간**은 더 늘어난다.\r
\r
즉,\r
\r
VTDM에서 느꼈던 그 기묘한 감각:\r
\r
> “손으로 치는 코드는 줄어가는데,\r
>\r
> 머리로 이해해야 하는 범위와 책임은 오히려 늘어나는 상태”\r
\r
이건 이상한 게 아니라,\r
\r
어쩌면 **“AI 도입 초기에 자연스럽게 거쳐야 할 과도기 상태”** 일 수도 있다.\r
\r
---\r
\r
## 3. Vibe Coding: 어디까지는 좋고, 어디부터는 위험한가\r
\r
“바이브 코딩(vibe coding)”이라는 말도 요즘 많이 보인다.\r
\r
AI랑 이런저런 대화를 주고받으면서 적당히 신나게 코드를 만들어 가는 방식.\r
\r
솔직히 말해서,\r
\r
**토이 프로젝트, 개인 실험, 작은 사이드 프로젝트**에서는\r
\r
이 방식이 정말 잘 먹힌다. 나도 이런 상황에서는 그냥 즐긴다.\r
\r
문제는, VTDM처럼:\r
\r
- 실제 팀이 쓰고,\r
- 고객/실제 업무가 걸려 있고,\r
- 계속해서 요구사항과 유지보수가 발생하는 시스템에\r
\r
이 vibe를 그대로 가져올 때이다.\r
\r
이런 시스템에서는,\r
\r
- 변경의 파급효과를 예측해야 하고\r
- 장애/보안/규격 측면에서의 리스크를 관리해야 하고\r
- 팀이 교체되어도 이해 가능한 구조를 유지해야 한다.\r
\r
여기서 만약\r
\r
> “어차피 나중에 AI가 또 잘 바꿔주겠지”\r
\r
라는 마인드로 계속 덕지덕지 붙이기만 하면,\r
\r
- **코드는 점점 복잡해지고**\r
- **이해 비용은 기하급수적으로 늘고**\r
- 나중에는 AI에게 던져도 “뭐가 맞는지 내가 판단할 수 없는 상태”가 올 수 있다.\r
\r
VTDM 개선 작업을 하면서 내가 느낀 불편함은 바로 이 지점이었다.\r
\r
> “지금은 개선이 잘 되고 있는 것처럼 보이는데,\r
>\r
> 이 구조를 1~2년 뒤에 누군가에게 넘겨줘도 괜찮을까?”\r
\r
---\r
\r
## 4. AI가 도와줄 수 있는 것 vs 절대 넘기면 안 되는 것\r
\r
AI를 “과대평가”하지도, “과소평가”하지도 않으려면\r
\r
역할을 명확히 나눌 필요가 있다.\r
\r
### AI가 정말 잘하는 것\r
\r
- 반복적인 패턴 변환 (JS → TS, 스타일 정리, API 호출 패턴 통일 등)\r
- 보일러플레이트 코드 생성 (API 클라이언트, DTO, 폼 코드 등)\r
- 테스트 코드/문서 초안 작성\r
- 함수/파일 단위의 코드 설명 및 리뷰 보조\r
\r
실제로 VTDM에서도 이런 일들은 AI 덕을 많이 봤다.\r
\r
- 반복되는 CRUD/폼 처리\r
- 비슷한 패턴의 페이지/컴포넌트들\r
- 타입 보강, 리팩토링 초안\r
\r
이건 AI한테 시켜놓고, 나는 그만큼 도메인 이해와 구조 고민에 더 시간을 쓸 수 있었다.\r
\r
### AI에게 넘기면 위험한 것\r
\r
반대로, 이런 것들은 여전히 **사람 책임**이다.\r
\r
- 이 변경이 **비즈니스적으로** 맞는지 판단\r
- 도메인 전문가들이 합의한 규칙/정책/예외를 이해하고 반영\r
- 우리 회사의 인프라/조직 구조/프로세스를 고려한 변경 설계\r
- 장애 발생 시 “왜 이런 설계를 했는지”까지 설명해야 하는 책임\r
\r
AI는 말 그대로 **강력한 공구**다.\r
\r
> 어디를 파낼지, 어디를 남길지,\r
>\r
> 어느 정도까지 깊게 들어갈지는\r
>\r
> 결국 사람이 결정해야 한다.\r
\r
---\r
\r
## 5. 그럼, VTDM에서 내가 느낀 그 상황은 “옳은가?”\r
\r
이제 처음 질문으로 돌아가 보자.\r
\r
> “나는 AI를 열심히 써서 VTDM를 개선하고 있고,\r
>\r
> 코드를 직접 치는 시간은 줄어들었고,\r
>\r
> 개선 자체는 잘 되고 있다.\r
>\r
> 하지만 이해 비용은 줄지 않고, 오히려 늘어나는 느낌이다.\r
>\r
> 이게 과연 옳은 상황일까?”\r
\r
내 결론은 이렇다.\r
\r
1. **단기적으로는 꽤 괜찮은 전략일 수 있다.**\r
   - 인수인계 시간이 짧았고,\r
   - 시스템 전체를 한 번에 다 이해할 수 없는 상황에서,\r
   - “요구사항을 빠르게 반영하면서, 동시에 맥락을 점진적으로 넓혀가는 전략”으로서는 충분히 의미가 있다.\r
2. **하지만 그대로 계속 가면, 중장기적으로 리스크가 된다.**\r
   - 이해되지 않은 채로 AI가 바꾼 코드가 쌓이면,\r
   - 나중에는 나조차 “왜 이렇게 됐는지” 설명하기 어려운 상태에 도달한다.\r
   - 그 순간부터는 AI한테 던져도, 그 결과를 내가 검증할 수가 없다. (가장 무서운 지점)\r
\r
그래서 내가 요즘 스스로에게 걸어놓은 기준은 이거다.\r
\r
- **“내가 이해하지 못하는 코드/설계는 승인하지 않는다.”**\r
- AI가 짜준 코드라도,\r
  - 내가 디버깅할 수 있을 정도로\r
  - 흐름과 책임을 설명할 수 있을 정도로\r
  - 최소한의 그림은 잡힌 상태가 아니면\r
    → 그냥 다시 짜거나, 더 단순한 구조를 요구한다.\r
\r
그리고 가능하면 이런 식으로 “지식 부채”를 같이 갚으려고 한다.\r
\r
- 기능 개발을 할 때\r
  - 관련된 모듈/도메인에 대한 **간단한 다이어그램** 하나씩 추가\r
  - “이 변경이 왜 이렇게 설계되었는지”에 대한 **두세 줄 메모** 남기기\r
- 도메인 단위로 **폴더/상태/API** 를 정리하는 리팩토링을\r
  작은 단위로 조금씩 끼워 넣기 (FSD/도메인 아키텍처 쪽 고민이 여기 붙음)\r
\r
즉,\r
\r
> “AI를 안 쓰자”가 아니라,\r
>\r
> “AI를 쓰면서도 내가 감당 가능한 이해 범위를 유지하자”에 가깝다.\r
\r
---\r
\r
## 6. 앞으로 개발자의 역할은 어떻게 바뀔까?\r
\r
이 모든 경험을 통해 지금은 이렇게 생각하게 됐다.\r
\r
- “AI 쓰면 되지 않냐”는 말은\r
  개발을 단순 구현 노동으로 보는 사람의 관점에 가깝고,\r
- “AI를 써도 설계·도메인·품질 책임은 사람이 진다”는 말은\r
  현업 엔지니어 관점에 훨씬 가깝다.\r
\r
AI가 코드를 대신 써줄 수는 있다.\r
\r
하지만,\r
\r
> “무엇을, 어떻게 만들어야 하는가?”를 결정하는 일,\r
> 그리고 그 결정에 책임지는 일은\r
> 아직은, 그리고 꽤 오랫동안, 사람의 몫이다.\r
\r
VTDM 개선 작업을 하면서 나는 그걸 더 강하게 느끼게 됐다.\r
\r
- AI 덕분에 **개선 속도는 빨라졌고**,\r
- 동시에 **내가 책임져야 할 이해/설계의 범위도 커졌고**,\r
- 그래서 그 두 가지를 어떻게 균형 맞출지 계속 고민하는 중이다.\r
\r
아마 이 균형을 어디에 두느냐가,\r
\r
앞으로 개발자 커리어에서 중요한 선택 포인트가 될 것 같다.\r
\r
AI가 내 일을 “빼앗아가는 도구”가 아니라,\r
\r
**내가 책임지는 범위를 더 넓혀주는 도구**가 되도록 쓰고 싶다.\r
\r
그리고 지금 그 중간 지점 어딘가에서,\r
\r
하루하루 삽질하면서 감을 잡아가는 중이다.\r
`,Ev=`# JS 기본 동작원리, “진짜 뼈대”만 잡아보기\r
\r
JS 공부하다 보면 어느 순간 이런 상태가 된다.\r
\r
> “콜스택? 이벤트루프? 비동기?\r
>\r
> 머리로는 아는데… 왜 그런지 느낌이 안 와…”\r
\r
그래서 오늘은 **기본기에 충실하게**\r
\r
“JS가 어떻게 실행되고, 비동기는 어떻게 굴러가며, 브라우저/Node는 뭐가 다른지”를 **뼈대 중심**으로 정리해본다.\r
\r
---\r
\r
## 0. 한 문장 요약부터\r
\r
JS의 실행은 결국 이거다.\r
\r
> JS는 싱글 스레드로 콜스택에서 실행되고, 비동기는 호스트(브라우저/Node)가 맡았다가 큐에 넣고, 이벤트 루프가 스택이 빌 때 다시 실행시킨다.\r
\r
이 한 줄이 이해되면 나머지 개념은 다 “그림 맞추기”가 된다.\r
\r
---\r
\r
## 1. JS는 어디서 실행되냐?\r
\r
### 브라우저\r
\r
브라우저는 내부에 **JS 엔진**이 있다.\r
\r
- Chrome / Edge: V8\r
- Firefox: SpiderMonkey\r
- Safari: JavaScriptCore\r
\r
브라우저에서 JS는 보통 HTML 파싱 중 \`<script>\` 만나면 실행된다.\r
\r
(기본은 DOM 생성 잠깐 멈추고 JS부터 실행하는 흐름)\r
\r
### Node.js\r
\r
Node는 브라우저 없이도 JS를 돌리게 해주는 런타임.\r
\r
- JS 엔진(V8 같은 것) + 시스템 기능(파일, 네트워크 등)을 묶어줌\r
- 이벤트 루프/I/O는 보통 **libuv** 기반\r
\r
즉 **브라우저냐 Node냐**는 “JS 문법” 차이가 아니라,\r
\r
> JS 엔진이 붙어있는 ‘호스트 환경’이 다르다\r
>\r
> (브라우저는 DOM/렌더링, Node는 파일/서버/CLI)\r
\r
---\r
\r
## 2. JS 엔진의 핵심 구조: Heap + Call Stack\r
\r
JS 실행 원리를 이해할 때 제일 먼저 잡아야 할 두 개:\r
\r
### 2-1) Memory Heap\r
\r
- 객체/배열/함수 같은 **데이터 덩어리**가 저장되는 공간\r
- 참조가 끊기면 GC가 정리함 (가비지 컬렉션)\r
\r
### 2-2) Call Stack\r
\r
- “지금 실행 중인 함수가 뭔지”를 쌓아두는 스택(LIFO)\r
- **함수 호출 → push**, 함수 종료 → pop\r
\r
예를 들어 이런 코드:\r
\r
\`\`\`jsx\r
functionadd(a, b) {\r
return a + b;\r
}\r
\r
functionavg(a, b) {\r
returnadd(a, b) /2;\r
}\r
\r
console.log(avg(10,20));\r
\`\`\`\r
\r
실행 흐름 느낌:\r
\r
1. \`console.log(...)\` push\r
2. \`avg(...)\` push\r
3. \`add(...)\` push\r
4. add 끝 → pop\r
5. avg 끝 → pop\r
6. log 끝 → pop\r
\r
**스택이 비는 순간**이 엄청 중요하다.\r
\r
왜냐면 그때 비동기 콜백들이 “들어올 기회”를 얻기 때문.\r
\r
---\r
\r
## 3. JS는 싱글 스레드다 (이게 모든 것의 시작)\r
\r
JS는 기본적으로 **한 번에 한 줄기 실행(싱글 스레드)** 이다.\r
\r
그래서 콜스택에 무거운 일이 걸리면:\r
\r
- 클릭 이벤트 처리도 못 하고\r
- setTimeout 콜백도 못 하고\r
- 화면 업데이트도 밀리고\r
- 체감은 “버벅임”으로 나타남\r
\r
즉,\r
\r
> 메인 스레드(콜스택)가 막히면 모든 게 멈춘다.\r
\r
그런데도 웹에서는 “동시에 여러 일”이 되는 것처럼 보이잖아?\r
\r
그걸 가능하게 하는 게 다음 파트.\r
\r
---\r
\r
## 4. 비동기는 누가 해주냐? (Web APIs / Node APIs)\r
\r
중요 포인트:\r
\r
> setTimeout, 네트워크 요청, DOM 이벤트 같은 건\r
>\r
> **JS 엔진이 직접 처리하는 게 아니다.**\r
\r
### 브라우저라면\r
\r
- Web APIs(타이머, fetch/XHR, DOM 이벤트 등)가 맡는다.\r
\r
### Node라면\r
\r
- Node의 시스템 API(파일 I/O, 네트워크 등)가 맡고\r
- 내부적으로 이벤트 루프/libuv가 돌려준다.\r
\r
즉 JS는 “요청만 던지고”, 실제 작업은 호스트가 처리한 뒤\r
\r
완료되면 “콜백을 큐에 넣어” 다시 JS로 돌아오게 한다.\r
\r
---\r
\r
## 5. 큐가 2개다: Task Queue / Microtask Queue\r
\r
이거 체감상 제일 중요함. 실행 순서가 여기서 갈린다.\r
\r
### 5-1) Task Queue (매크로태스크)\r
\r
대략 이런 애들이 여기 들어온다:\r
\r
- \`setTimeout\`, \`setInterval\`\r
- 사용자 이벤트(click 등)\r
- (환경에 따라) 메시지 이벤트 등\r
\r
### 5-2) Microtask Queue\r
\r
대략 이런 애들이 여기에 들어온다:\r
\r
- \`Promise.then / catch / finally\`\r
- \`queueMicrotask\`\r
- (브라우저) MutationObserver 등\r
\r
그리고 **마이크로태스크가 우선순위가 더 높다.**\r
\r
---\r
\r
## 6. Event Loop: “스택 비면, 큐에서 꺼내서 실행”\r
\r
이벤트 루프를 어렵게 말하면 복잡한데, 진짜 뼈대는 다음과 같다.\r
\r
1. 콜스택이 비었나 확인\r
2. 비었으면 **Task Queue에서 하나 꺼내 실행**\r
3. 그 Task가 끝나면 **Microtask를 먼저 싹 비움**\r
4. 다음 Task로 넘어감\r
\r
여기서 “마이크로태스크를 먼저 싹 비운다”가 포인트.\r
\r
---\r
\r
## 7. 실행 순서 감 잡기 예제 (국룰)\r
\r
\`\`\`jsx\r
console.log("A");\r
\r
setTimeout(() => console.log("B"), 0);\r
\r
Promise.resolve().then(() => console.log("C"));\r
\r
console.log("D");\r
\`\`\`\r
\r
대부분 결과:\r
\r
> A → D → C → B\r
\r
이유:\r
\r
- A, D는 동기라서 콜스택에서 즉시 실행\r
- Promise.then은 **Microtask**\r
- setTimeout은 **Task**\r
- 그래서 **microtask가 task보다 먼저 끼어든다**\r
\r
---\r
\r
## 8. “0ms setTimeout인데 왜 바로 안 찍힘?”의 정체\r
\r
\`setTimeout(fn, 0)\`은 “지금 당장”이 아니라\r
\r
> “최소 0ms 뒤에, Task Queue에 넣어줄게”\r
>\r
> (단, 콜스택이 비어야 실행됨)\r
\r
이라서, 이미 스택이 바쁘면 계속 밀린다.\r
\r
---\r
\r
## 9. Node에서도 결국 뼈대는 같다\r
\r
Node도 본질은 동일하다.\r
\r
- JS는 콜스택에서 실행 (싱글 스레드)\r
- 비동기 작업은 호스트가 처리\r
- 완료되면 큐에 넣고 이벤트 루프가 다시 실행\r
\r
차이는 “호스트가 제공하는 기능”이 다르다는 점:\r
\r
- 브라우저: DOM/렌더링/이벤트 중심\r
- Node: 파일/네트워크/서버/CLI 중심\r
\r
---\r
\r
## 오늘의 결론\r
\r
- JS 실행의 중심은 **Call Stack**이다.\r
- 비동기는 **호스트(Web APIs/Node APIs)** 가 처리하고\r
- 완료된 콜백은 **큐**에 들어갔다가\r
- **Event Loop**가 **스택이 비었을 때** 다시 실행시킨다.\r
- 그리고 **Promise 계열(Microtask)이 setTimeout(Task)보다 먼저 실행되는 경우가 많다.**\r
`,Av=`# JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)\r
\r
### – ECMAScript, V8, 브라우저/Node를 한 번에 정리해보기\r
\r
자바스크립트 이벤트 루프를 공부하다 보면 꼭 이런 혼란이 온다.\r
\r
> “V8이 이벤트 루프 돌리는 거 아냐?”\r
>\r
> “setTimeout은 브라우저가 하는 거라며?”\r
>\r
> “ECMAScript? 그건 또 뭐야…?”\r
\r
검색해 보면 “매크로 태스크 / 마이크로태스크 / 이벤트 루프” 설명은 많은데,\r
\r
**“누가 뭘 하는지”** 에 대한 계층 구조를 정확히 찍어주는 설명은 의외로 잘 안 보인다.\r
\r
그래서 이 글에서는 이벤트 루프 얘기하기 전에, 먼저 이 셋을 분리해서 정리해보려고 한다.\r
\r
- **ECMAScript 스펙**\r
- **JS 엔진(V8 등)**\r
- **호스트 환경(브라우저, Node.js 등)**\r
\r
이 세 개를 구분해서 보면\r
\r
Promise, async/await, setTimeout, Node의 libuv까지 한 번에 머릿속에 정리가 된다.\r
\r
---\r
\r
## 0. 큰 그림 먼저: 세 레이어를 한 방에 보고 가기\r
\r
먼저 전체 구조를 한 컷으로 보면:\r
\r
\`\`\`\r
[ECMAScript 스펙]\r
  - 자바스크립트 언어의 "룰북" (문서)\r
\r
        ↓ 이걸 구현한 게\r
\r
[JS 엔진 (V8, SpiderMonkey, JavaScriptCore...)]\r
  - 파서, 컴파일러(JIT), 실행기\r
  - 콜 스택, 힙, GC\r
  - Promise, microtask queue 구현\r
\r
        ↓ 이 엔진을 품고 돌리는\r
\r
[호스트 환경 (브라우저, Node.js, Deno...)]\r
  - 이벤트 루프 (타이머, I/O, UI 이벤트 처리)\r
  - DOM, setTimeout, fetch, fs, net, ...\r
  - "지금 이 콜백 실행해줘"라고 엔진에게 부탁\r
\`\`\`\r
\r
조금 더 구체적으로 말하면:\r
\r
- **ECMAScript**: “자바스크립트는 이렇게 동작해야 한다”라고 적힌 **설명서/규격 문서**\r
- **V8 같은 엔진**: 그 규격을 실제 코드로 구현한 **C++ 프로그램**\r
- **브라우저/Node 같은 호스트**: OS 위에서 돌아가면서,\r
  **엔진을 안에 품고, 이벤트 루프와 각종 API(DOM/타이머/네트워크 등)를 제공하는 껍데기**\r
\r
여기까지만 잡혀도, “누가 이벤트 루프를 돌리냐”, “setTimeout은 어디 꺼냐” 같은 질문이 훨씬 덜 헷갈린다.\r
\r
---\r
\r
## 1. ECMAScript: 자바스크립트의 “법전”\r
\r
### 1-1. ECMAScript가 뭔데?\r
\r
우리가 보통 “자바스크립트”라고 부르는 언어의 공식 이름이 사실 **ECMAScript**다.\r
\r
- TC39라는 위원회가 매년 ECMAScript 2020, 2021, 2022… 이런 식으로 스펙을 찍어낸다.\r
- 이 문서 안에는:\r
  - 문법: \`if\`, \`for\`, \`function\`, \`class\`, \`async/await\`…\r
  - 타입 시스템: Number, String, Object, Symbol, BigInt…\r
  - 빌트인 객체: \`Array.prototype.map\`, \`Promise\`, \`Map\`, \`Set\`…\r
  - 심지어 **Promise가 resolve 되면 어떤 “Job”이 큐에 들어가고, 언제 실행되어야 하는지**까지\r
    알고리즘 수준으로 적혀 있다.\r
\r
중요한 포인트:\r
\r
> ECMAScript는 문서다.\r
>\r
> 코드가 아니다.\r
\r
그래서 여기에는 “타이머를 이런 OS API로 구현해라” 이런 말은 없다.\r
\r
단지:\r
\r
> “Promise가 resolve되면 PromiseReactionJob을 Job Queue에 추가해라”\r
\r
같은 말만 써 있고, 그 Job Queue를 **어떻게 / 언제 처리할지**는\r
\r
엔진/호스트 쪽에서 구현해야 할 내용이다.\r
\r
### 1-2. ECMAScript가 **하지 않는 것들**\r
\r
ECMAScript 스펙에는 **다음이 없다**:\r
\r
- \`window\`, \`document\`, \`addEventListener\`\r
- \`setTimeout\`, \`setInterval\`\r
- \`XMLHttpRequest\`, \`fetch\`\r
- DOM, CSS, Canvas\r
- 파일 시스템, TCP 소켓, HTTP 서버…\r
\r
이건 모두 “언어”가 아니라 **플랫폼 API**다.\r
\r
그래서 구조를 이렇게 볼 수 있다.\r
\r
- ECMAScript: 순수 언어 스펙\r
- 그 위에 브라우저/Node가 **자기만의 API**를 얹어서 “환경”을 만든다.\r
\r
---\r
\r
## 2. JS 엔진(V8 등): 스펙을 코드로 만든 C++ 프로그램\r
\r
이제 두 번째 레이어.\r
\r
### 2-1. V8은 정확히 뭔가?\r
\r
V8은 구글이 만든 **자바스크립트 엔진**이다.\r
\r
- 크롬, 엣지(요즘), Node.js, Deno 등이 V8을 안에 품고 있다.\r
- 하는 일:\r
  1. JS 소스 코드를 문자열로 입력받는다.\r
  2. 토큰화/파싱 → AST 생성.\r
  3. 바이트코드 / 머신코드로 **컴파일(JIT)**.\r
  4. 런타임에 그 코드를 실행하면서 콜 스택/힙/GC 관리.\r
  5. \`Promise\`, \`Map\`, \`Set\`, \`Array.prototype.map\` 같은 빌트인 동작 구현.\r
  6. **Promise Job Queue / Microtask Queue**도 여기서 관리.\r
\r
한 줄로 말하면:\r
\r
> “ECMAScript 스펙에 적힌 규칙을\r
>\r
> 실제로 지켜가며 자바스크립트를 실행해주는 C++ 프로그램”\r
\r
우리가 흔히 “JS가 컴파일된다”, “엔진이 최적화한다”고 말하는 대상이 바로 이 엔진이다.\r
\r
### 2-2. V8이 **모르는** 것들\r
\r
이게 포인트다:\r
\r
> V8은 setTimeout, DOM, 네트워크, 이벤트 루프 전체를 혼자서 책임지지 않는다.\r
\r
V8은:\r
\r
- JS 코드 파싱/실행\r
- Promise 상태 관리, microtask queue, GC 등 “언어 레벨 런타임” 구현\r
\r
까지 담당하고,\r
\r
- **“언제 어떤 JS를 실행해야 하는지”**,\r
- **“타이머/네트워크/이벤트에서 들어오는 콜백은 언제 실행해야 하는지”**\r
\r
는 **호스트(브라우저/Node)** 가 결정한다.\r
\r
즉, V8은 “실행기”,\r
\r
브라우저/Node는 “언제 무엇을 실행시킬지 스케줄링하는 운영자” 역할.\r
\r
---\r
\r
## 3. 호스트 환경: 브라우저, Node.js, Deno…\r
\r
세 번째 레이어가 여기다.\r
\r
### 3-1. 호스트 환경의 역할\r
\r
브라우저(Chrome, Firefox, Safari…)나 Node.js는 한마디로\r
\r
> OS 위에서 돌아가는 큰 프로그램이고,\r
>\r
> 그 안에 V8 같은 엔진을 **임베딩(embed)** 해서 JS를 실행한다.\r
\r
이 호스트 환경이 하는 일은 대략 이렇다:\r
\r
1. **엔진(V8)을 초기화하고, JS 코드 실행**\r
   - 예: \`<script>\` 태그 실행, Node.js에서 \`node app.js\` 실행\r
2. **플랫폼 API 제공**\r
   - 브라우저:\r
     - DOM, \`window\`, \`document\`, \`addEventListener\`, \`fetch\`, \`setTimeout\`…\r
   - Node.js:\r
     - \`fs\`, \`http\`, \`net\`, \`setTimeout\`(libuv 기반), \`process\`…\r
3. **이벤트 루프와 Task 큐 관리**\r
   - 타이머, 네트워크, 사용자 입력 등 시스템 이벤트를 감시하고\r
   - 콜백을 Task/Microtask 큐에 쌓아두었다가,\r
   - 적절한 타이밍에 **V8에 “이 콜백 실행해줘”라고 요청**한다.\r
\r
즉, 호스트는:\r
\r
> **“세상의 모든 입력(I/O, 타이머, 사용자 이벤트)을 받아서 자바스크립트 콜백 호출로 변환해주는 거대한 어댑터”** 라고 보면 된다.\r
\r
### 3-2. 브라우저 엔진 vs JS 엔진\r
\r
여기서 헷갈리기 쉬운 개념:\r
\r
- **브라우저 엔진**(예: Blink, WebKit, Gecko)은 사실 여러 컴포넌트 묶음이다.\r
  - **렌더링 엔진**: HTML 파싱, DOM, CSS, 레이아웃, 페인트\r
  - **JS 엔진**: V8(Chrome/Edge), SpiderMonkey(Firefox), JavaScriptCore(Safari)\r
  - 네트워크, GPU, 프로세스 관리, 등등…\r
- 즉:\r
  - V8 = 브라우저 엔진 안에서 “JS만 담당하는 모듈”\r
  - 브라우저 엔진 = V8 + 렌더링 + DOM + 이벤트 루프… 전체 덩어리\r
\r
Node.js 쪽은 조금 다르지만 구조는 비슷하다.\r
\r
- JS 엔진: V8\r
- 이벤트 루프 + IO: libuv\r
- 파일 시스템, HTTP, 등: Node Core 모듈\r
\r
---\r
\r
## 4. 세 레이어를 “이벤트 루프” 관점에서 다시 연결해보기\r
\r
이제 진짜 하고 싶은 이야기:\r
\r
**이 세 레벨이 어떻게 합쳐져서 이벤트 루프/비동기 동작을 만드는가?**\r
\r
### 4-1. ECMAScript 레벨에서 보는 비동기: Job Queue\r
\r
ECMAScript는 이벤트 루프를 직접 구현하지 않는다. 대신 이렇게 말한다:\r
\r
- “Promise가 resolve되면 \`PromiseReactionJob\`이라는 Job을 만들어 Job Queue에 넣어라.”\r
- “호스트는 적절한 타이밍에 이 Job들을 꺼내 실행해야 한다.”\r
\r
여기서 말하는 Job이 바로 우리가 흔히 부르는 **마이크로태스크**의 추상 모델이다.\r
\r
즉 ECMAScript는:\r
\r
- “어떤 일이 ‘나중에 실행되어야 하는지’”를 정의하고\r
- “어떤 순서로 Job을 처리해야 하는지”를 알고리즘으로 적어둔다.\r
\r
### 4-2. 엔진(V8)의 역할: Microtask Queue 구현\r
\r
V8은 ECMAScript에서 요구한 Job Queue를 실제로 구현한다.\r
\r
- \`Promise.then\`, \`queueMicrotask\`가 호출되면:\r
  - V8 내부의 microtask queue에 콜백과 관련 데이터가 쌓인다.\r
- 그리고 호스트가 “지금 microtask 처리해”라고 호출하면\r
  - V8은 queue가 빌 때까지 그 Job들을 처리한다.\r
\r
여기서 중요한 구조:\r
\r
> “microtask queue”라는 구조는 엔진이 갖고 있고,\r
> “언제 비울지” 결정하는 것은 호스트다.\r
\r
### 4-3. 호스트(브라우저)의 역할: Task → Microtask → 렌더링\r
\r
브라우저 이벤트 루프는 대략 이렇게 돈다:\r
\r
1. **Task 하나 선택**\r
   - 예: 타이머 콜백, 클릭 이벤트 콜백, \`<script>\` 실행 등\r
2. 그 Task 안의 JS를 V8에게 실행시키기\r
   - 동기 코드, 그 안에서 Promise.then, queueMicrotask 등록 가능\r
3. Task 실행이 끝나 콜 스택이 비면\r
4. **이제 microtask 처리 타이밍**\r
   - V8의 microtask queue를 비움 (Promise.then, queueMicrotask 등)\r
5. 렌더링 타이밍이면\r
   - DOM 변경사항을 기반으로 레이아웃/페인트\r
6. 다음 Task로\r
\r
그래서 흔히 나오는 패턴:\r
\r
\`\`\`jsx\r
setTimeout(() => console.log("macro"), 0);\r
Promise.resolve().then(() => console.log("micro"));\r
\`\`\`\r
\r
실행 순서:\r
\r
1. 현재 스크립트(하나의 Task) 실행\r
   - Promise.then → microtask queue\r
   - setTimeout → Task queue\r
2. Task 종료 → **microtask queue 비움** → \`"micro"\`\r
3. 그 다음 Task에서 \`"macro"\`\r
\r
→ **항상 \`Promise.then\`이 \`setTimeout(0)\`보다 먼저**인 이유가 이 구조에서 나온다.\r
\r
Node.js도 구조는 비슷하지만,\r
\r
- libuv 이벤트 루프가 \`timers → poll → check\` 같은 phase를 가지고 있고\r
- 각 phase 끝에서 \`process.nextTick\` queue와 V8 microtask queue를 비워주는 식으로 동작한다.\r
\r
---\r
\r
## 5. 정리: “누가 뭘 하는지”만 정확히 기억하면 된다\r
\r
다시 한 번, 핵심만 정리해보면:\r
\r
### 1) ECMAScript 스펙\r
\r
- 자바스크립트 언어의 **룰북/문서**\r
- “Promise가 resolve되면 이런 Job을 큐에 넣어야 한다”,\r
  “Job은 이렇게 run-to-completion 해야 한다” 정도까지 정의\r
- DOM, 브라우저, setTimeout, 파일 IO에 대한 건 **전혀 모른다**\r
\r
### 2) JS 엔진(V8 등)\r
\r
- ECMAScript 스펙을 실제 C++ 코드로 구현한 **실행기**\r
- 파싱/컴파일/JIT/GC, \`Promise\`, microtask queue 구현\r
- Promise.then/queueMicrotask → 엔진 내부 microtask queue에 쌓음\r
- 하지만:\r
  - **언제** 그 큐를 비울지는 호스트가 정해준 타이밍에 맞춰 호출해야 함\r
\r
### 3) 호스트 환경(브라우저, Node.js…)\r
\r
- OS 위에서 돌아가는 큰 프로그램\r
- 엔진(V8)을 심어서 JS를 실행시키고\r
- 이벤트 루프 + Task 큐를 직접 관리\r
- 타이머/네트워크/사용자 입력 등을 감시하다가,\r
  - “이 콜백 실행할 차례야” → V8에 JS 콜백 실행 요청\r
- 브라우저: DOM/렌더링 + 각종 Web API 제공\r
- Node: 파일 시스템, 네트워크, 서버 API 등 제공\r
\r
---\r
\r
## 6. 그래서 앞으로 이벤트 루프 공부할 때는…\r
\r
이제 문서나 글을 읽을 때 이런 식으로 구분해서 보는 게 좋다.\r
\r
- “ECMAScript Job Queue” → **언어 스펙 레벨 이야기**\r
- “Promise.then, microtask queue” → **엔진(V8) 레벨 구현 + 호스트 타이밍**\r
- “setTimeout, 클릭 이벤트, libuv phase” → **호스트(브라우저/Node) 레벨 이야기**\r
\r
이 세 레벨만 분리해서 생각해도:\r
\r
- 왜 Promise.then이 setTimeout보다 먼저인지\r
- 왜 브라우저/Node 이벤트 루프가 서로 조금씩 다르게 설명되는지\r
- 왜 “V8 혼자 이벤트 루프를 돌린다”고 말하면 틀린 건지\r
\r
이런 것들이 전부 납득이 갈 거다.\r
`,jv=`# React × Zustand × Closure: \`useCallback\` 쓰다가 stale closure에 뚝배기 맞은 썰 (그리고 구조적으로 막는 법)\r
\r
React에서 Zustand를 쓰다 보면 “상태는 분명 바뀌었는데 이벤트 핸들러가 옛날 값을 찍는다” 같은 현상을 한 번쯤 만나게 된다.\r
처음엔 **“zustand가 렌더 안 타나?”**, **“React가 업데이트 안 하나?”** 같은 느낌인데… 결국 원인은 React의 아주 고전적인 함정:\r
\r
> **stale closure**\r
> (리렌더로 값은 바뀌었는데, 콜백 함수는 옛날 값을 클로저로 물고 있는 상태)\r
\r
이 글은 내가 실제로 겪었던 stale closure 케이스를 기준으로,\r
**왜 이런 일이 생기는지(메모리/렌더 관점)**,\r
그리고 **Zustand에서 이걸 구조적으로 차단하는 패턴(getState)** 까지 정리한 글이다.\r
\r
---\r
\r
## 0. 상황: “값은 바뀌는데 핸들러는 옛날 값만 본다”\r
\r
예를 들어 이런 코드가 있다고 치자.\r
\r
\`\`\`tsx\r
const value = useStore((s) => s.value);\r
\r
const handle = useCallback(() => {\r
  console.log(value);\r
}, []);\r
\`\`\`\r
\r
\`value\`가 바뀌면 컴포넌트는 리렌더가 되고 화면도 바뀐다.\r
근데 \`handle()\`을 눌러보면 콘솔엔 **첫 렌더 때 value만 계속 찍힌다.**\r
\r
“아니… UI는 바뀌는데 왜 handle만 과거에 살고 있냐?”\r
\r
이게 stale closure다.\r
\r
---\r
\r
## 1. stale closure의 본질: “콜백은 과거 렌더의 메모리를 들고 있다”\r
\r
React 컴포넌트는 리렌더될 때마다 **함수 본문을 다시 실행**한다.\r
\r
즉 이 코드:\r
\r
\`\`\`tsx\r
function Component() {\r
  const value = useStore((s) => s.value);\r
  // ...\r
}\r
\`\`\`\r
\r
는 \`value\`가 바뀌면 \`Component()\`가 다시 실행되며 **새로운 렌더 컨텍스트**가 만들어진다.\r
\r
여기서 중요한 포인트:\r
\r
- 렌더마다 \`value\`는 새로운 값으로 계산된다.\r
- 렌더마다 \`handle\` 같은 함수도 “원칙적으로” 새로 만들어질 수 있다.\r
- 그런데 \`useCallback([])\`은 “함수를 재생성하지 말아라”라는 강력한 힌트를 준다.\r
\r
그래서 결과적으로 이런 일이 발생한다.\r
\r
### ✅ \`useCallback([])\`이 하는 일\r
\r
- 첫 렌더 시점에 \`handle\`을 만들고\r
- 그 \`handle\`을 계속 재사용한다(참조 안정성 유지)\r
\r
### ✅ closure가 하는 일\r
\r
- \`handle\` 내부에서 참조한 \`value\`는\r
- **handle이 생성되던 시점의 렌더 스코프 값을 캡처한다**\r
\r
즉:\r
\r
> \`handle\`은 “첫 렌더의 value”를 클로저로 물고 있고,\r
> \`useCallback([])\`은 그 함수를 계속 재사용하게 만들기 때문에\r
> 이후 렌더에서 \`value\`가 바뀌어도 \`handle\`은 갱신되지 않는다.\r
\r
**stale closure = “함수가 만들어질 당시의 스냅샷을 계속 들고 있음”**\r
이게 핵심이다.\r
\r
---\r
\r
## 2. 의존성 배열로 해결: 가장 정석, 가장 흔한 방식\r
\r
정석은 이거다.\r
\r
\`\`\`tsx\r
const handle = useCallback(() => {\r
  console.log(value);\r
}, [value]);\r
\`\`\`\r
\r
\`value\`가 바뀌면 콜백도 다시 만들어지고,\r
새 콜백은 최신 \`value\`를 클로저로 캡처한다.\r
\r
### 장점\r
\r
- React 방식에 가장 충실\r
- 코드 의도가 명확 (\`handle\`이 \`value\`에 의존한다)\r
\r
### 단점(현업에서 자주 문제되는 포인트)\r
\r
- 콜백이 자주 재생성됨\r
- 이 콜백이 props로 내려가거나, memoized component의 비교 기준이 되면\r
  **리렌더링 폭탄**으로 이어질 수 있음\r
- 특히 \`value\`가 빈번히 변하는 값이면(예: 스트리밍 로그, 입력, 마우스, 타이머)\r
  \`[value]\`는 사실상 “useCallback 쓰는 의미가 줄어든다”\r
\r
결국 “정석이긴 한데, 구조적으로 이게 맞나?”라는 생각이 든다.\r
\r
---\r
\r
## 3. Zustand에서 \`getState()\`를 쓰면 왜 stale closure가 구조적으로 사라질까?\r
\r
여기서 Zustand가 등장한다.\r
\r
Zustand는 React state처럼 “컴포넌트 내부 상태”가 아니라,\r
**컴포넌트 바깥 전역 store 객체**에 상태가 존재한다.\r
\r
중요한 차이:\r
\r
### React state / selector 기반 값\r
\r
- 렌더 시점에 선택되고(=스냅샷)\r
- 그 렌더 스코프에 캡처될 수 있음(=클로저 위험)\r
\r
### Zustand store (\`useStore.getState()\`)\r
\r
- React 렌더 스코프와 무관하게\r
- store 객체에서 “지금 이 순간의 값”을 읽는다\r
\r
즉 이런 코드:\r
\r
\`\`\`tsx\r
const handle = useCallback(() => {\r
  const current = useStore.getState().value;\r
  console.log(current);\r
}, []);\r
\`\`\`\r
\r
여기서 \`handle\`은 첫 렌더 때 만들어지고 계속 재사용되지만,\r
**매번 실행될 때마다 store에서 최신 값을 조회**한다.\r
\r
### ✅ 이 방식이 stale closure를 원천 차단하는 이유\r
\r
stale closure가 성립하려면 조건이 필요하다:\r
\r
- 함수 내부에서 “렌더 스코프 변수(value)”를 참조해야 한다\r
\r
근데 \`getState()\` 방식은 아예 렌더 스코프 변수를 참조하지 않는다.\r
\r
> 클로저로 \`value\`를 캡처하지 않고\r
> 매번 글로벌 store에서 “현재 값”을 조회한다.\r
\r
그래서 구조적으로 stale closure가 발생할 여지가 없다.\r
\r
---\r
\r
## 4. 메모리/구조 관점으로 더 정확히 말하면\r
\r
여기서 “전역 힙(global heap)” 같은 표현을 쓰면 좀 더 정확해진다.\r
\r
### React 값(\`const value = useStore(selector)\`)\r
\r
- 렌더 프레임 안에서 생성된 “스냅샷”\r
- 클로저가 캡처하는 대상\r
- \`useCallback([])\` 같은 것과 결합되면 stale 가능\r
\r
### Zustand store (\`useStore.getState()\`)\r
\r
- 컴포넌트 외부의 store 객체가 들고 있는 상태\r
- 함수 실행 시점에 store를 조회\r
- 콜백이 오래 살아도 상관없음 (항상 현재 store를 읽으니까)\r
\r
정리하면:\r
\r
> React 렌더 스코프 안의 값은 “캡처되는 값”이고\r
> Zustand \`getState()\`는 “조회되는 값”이다.\r
\r
캡처(capture) vs 조회(read)의 차이가 곧 stale 여부를 결정한다.\r
\r
---\r
\r
## 5. 그럼 무조건 \`getState()\`가 정답이냐? (주의할 점)\r
\r
여기서 한 번 더 전문가 관점으로 정리하면,\r
\`getState()\`가 만능은 아니고 “사용처”가 있다.\r
\r
### ✅ \`getState()\`가 특히 강력한 케이스\r
\r
- 이벤트 핸들러 (onClick, onKeyDown, onSubmit 등)\r
- setInterval / setTimeout 콜백\r
- 외부 라이브러리 콜백(WebSocket, worker, native event)\r
- 리렌더 사이클과 독립적인 로직(업로드 진행률, 스트리밍, polling 등)\r
\r
즉 “콜백이 오래 살아남고, 최신 상태가 꼭 필요”한 영역에 최고다.\r
\r
### ⚠️ 주의: React 렌더와 store 읽기의 타이밍이 다를 수 있다\r
\r
React는 concurrent 모드에서 렌더를 지연/중단/재시도할 수 있다.\r
그런데 \`getState()\`는 “그 순간 store의 실제 값”을 읽는다.\r
\r
그래서:\r
\r
- “렌더에 반영된 값”과\r
- “getState로 읽은 값”이\r
  아주 특정 상황에서 **타이밍 차이**가 날 수 있다.\r
\r
다만 일반적인 UI 이벤트/상호작용 수준에서는 실무적으로 큰 문제는 잘 안 생기고,\r
오히려 이벤트 핸들러는 “최신 값”이 필요한 경우가 더 많다.\r
\r
---\r
\r
## 6. 내가 정리한 실전 패턴들\r
\r
### 패턴 A: “핸들러는 getState로 최신값 읽고, 렌더는 selector로”\r
\r
가장 현실적인 하이브리드.\r
\r
\`\`\`tsx\r
const value = useStore((s) => s.value);\r
\r
const handle = useCallback(() => {\r
  const current = useStore.getState().value;\r
  // 최신 값 기준으로 처리\r
}, []);\r
\`\`\`\r
\r
- UI는 \`value\`로 렌더 (React 방식)\r
- 핸들러는 \`getState()\`로 최신 값 보장\r
\r
### 패턴 B: “setter도 getState로 안정화”\r
\r
setter가 store에 들어있으면 그 참조는 보통 안정적이지만,\r
복잡해질수록 안정화를 위해 \`getState()\`를 쓰기도 한다.\r
\r
\`\`\`tsx\r
const handle = useCallback(() => {\r
  const { value, setValue } = useStore.getState();\r
  setValue(value + 1);\r
}, []);\r
\`\`\`\r
\r
---\r
\r
## 7. 결론: “클로저를 고정시키는 게 문제가 아니라, 캡처된 값을 쓰는 게 문제다”\r
\r
이 글의 결론을 한 문장으로 줄이면 이거다.\r
\r
> stale closure의 원인은 \`useCallback\`이 아니라\r
> \`useCallback\`이 “캡처된 값”을 갱신하지 못하게 만드는 구조다.\r
\r
그래서 해결책도 2가지 계열로 나뉜다.\r
\r
### 1) React 정석: 의존성 배열로 캡처를 최신화\r
\r
- \`useCallback(fn, [value])\`\r
- 값이 바뀌면 fn도 바뀐다\r
\r
### 2) Zustand 실전: 캡처를 제거하고 store에서 직접 조회\r
\r
- \`useStore.getState()\`\r
- fn은 고정돼도 내부는 매번 최신 조회\r
\r
---\r
\r
# 최종 요약 (문서용)\r
\r
- React의 \`useCallback([])\`은 콜백을 고정하며, 콜백 내부에서 참조하는 값은 “생성 시점 렌더 스코프”를 클로저로 캡처한다.\r
- 따라서 리렌더 이후 값이 바뀌어도 콜백은 과거 값을 참조하는 stale closure가 발생할 수 있다.\r
- 일반적인 해결은 의존성 배열에 값을 넣어 콜백을 재생성하는 것이다.\r
- Zustand에서는 \`getState()\`를 통해 store에서 최신 값을 직접 조회함으로써, 클로저 캡처 구조 자체를 제거할 수 있다.\r
- 결과적으로 콜백을 안정적으로 유지하면서도 최신 Zustand 상태를 사용할 수 있다.\r
`,Nv=`# React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기 (찐 삽질기 / EOTP 지옥 포함)\r
\r
## 0. 시작: “npm에 올렸는데… 뭔가 허전하다”\r
\r
내가 만든 React 라이브러리를 npm에 배포했다.\r
\r
근데 딱 거기까지 하고 나니까 이런 생각이 들었다.\r
\r
- 테스트가 없으면… 내가 나중에 리팩토링하다 터뜨려도 모른다\r
- 배포는 매번 수동이면… 언젠가 귀찮아서 안 하게 된다\r
- 커버리지가 없으면… 테스트가 “있긴 한데 구멍 난 느낌”이다\r
- CI가 없으면… PR 머지하고 나서 터진 걸 뒤늦게 알게 된다\r
\r
그래서 목표를 잡았다.\r
\r
✅ **Vitest + React Testing Library로 테스트**\r
\r
✅ **Coverage 뽑아서 구멍 난 라인 직접 추격**\r
\r
✅ **GitHub Actions로 CI**\r
\r
✅ **Git 태그 푸시하면 npm 자동 배포**\r
\r
✅ **그리고 마지막 보스: EOTP(OTP) 에러 해결**\r
\r
프로젝트는 이런 느낌:\r
\r
- TypeScript 기반 원형 큐/버퍼 라이브러리\r
- 저수준 CircularBuffer + 고수준 BufferManager + React hook(useCircularBuffer)\r
\r
---\r
\r
## 1. 테스트 환경 세팅 (여기까진 “음… 쉽네?”)\r
\r
### 1-1) 설치\r
\r
테스트는 Vitest로 갔다.\r
\r
그리고 React hook 테스트는 Testing Library의 \`renderHook\`을 썼다.\r
\r
\`\`\`bash\r
npm install -D vitest@2.1.6 \\\r
  @testing-library/react \\\r
  @testing-library/jest-dom \\\r
  @testing-library/user-event \\\r
  @vitejs/plugin-react \\\r
  @vitest/coverage-v8 \\\r
  happy-dom\r
\`\`\`\r
\r
> 여기서 “happy-dom”은 뒤에서 나온다. (jsdom이 CI에서 나를 배신함)\r
\r
---\r
\r
### 1-2) vitest config\r
\r
Vite쪽 경고 싫어서 config 확장자는 \`.mts\`로 갔다.\r
\r
**vitest.config.mts**\r
\r
\`\`\`tsx\r
import { defineConfig }from"vitest/config";\r
import reactfrom"@vitejs/plugin-react";\r
\r
exportdefaultdefineConfig({\r
plugins: [react()],\r
test: {\r
environment:"happy-dom",\r
setupFiles:"./__test__/setup.ts",\r
include: ["__test__/**/*.test.{ts,tsx}"],\r
coverage: {\r
provider:"v8",\r
reporter: ["text","json","html"],\r
include: ["src/**/*.{ts,tsx}"],\r
exclude: [\r
"node_modules/",\r
"__test__/",\r
"dist/",\r
"coverage/",\r
"src/types/**",\r
"src/index.ts",\r
"src/hooks/index.ts",\r
      ],\r
    },\r
  },\r
});\r
\`\`\`\r
\r
**test/setup.ts**\r
\r
\`\`\`tsx\r
import "@testing-library/jest-dom/vitest";\r
\`\`\`\r
\r
**package.json scripts**\r
\r
\`\`\`json\r
{\r
  "scripts": {\r
    "test": "vitest run",\r
    "test:coverage": "vitest run --coverage",\r
    "build": "tsc && tsc -p tsconfig.esm.json"\r
  }\r
}\r
\`\`\`\r
\r
---\r
\r
## 2. 테스트 작성: “AI 도움도 받긴 했는데, 커버리지가 결국 나를 일하게 만들더라”\r
\r
처음에는 솔직히 테스트를 빨리 늘리고 싶어서, 기본 케이스들은 AI 도움도 받았다.\r
\r
근데 딱 테스트 돌려보면 느낌이 온다.\r
\r
> “응… 성공 케이스만 잔뜩 있네?”\r
\r
그래서 방향을 바꿨다.\r
\r
이때부터는 “테스트 많이 쓰기”가 아니라 **Coverage 기반 라인 추격 게임**이 시작된다.\r
\r
### 내가 했던 루프 (이거 진짜 중요)\r
\r
1. \`npm run test:coverage\` 돌림\r
2. coverage report에서 **빨간 줄(미커버 라인)** 찾음\r
3. 그 라인이 어떤 조건에서 실행되는지 분석\r
4. 그 조건을 억지로 만들어서 테스트 추가\r
5. 다시 커버리지 확인\r
6. 반복… 반복… 반복…\r
\r
이 방식으로 가니까 커버리지가 “쭉쭉” 오른다.\r
\r
**99%대는 테스트 수가 아니라 “구멍을 메우는 집착”** 이더라.\r
\r
---\r
\r
## 3. CI 붙이기: 이제 PR 날려도 마음이 편해짐\r
\r
### 3-1) CI workflow\r
\r
Node 버전 매트릭스로 돌렸다. (18/20/22)\r
\r
- \`npm ci\`로 lock 기반 설치\r
- test → build 순으로\r
\r
> 여기서 느낀 점: CI는 “안전벨트”가 아니라 “에어백”이다.\r
>\r
> 에어백은 사고가 나야 고마움을 안다.\r
\r
---\r
\r
### 3-2) 커버리지 업로드(CodeCov)\r
\r
커버리지 job은 CI job이랑 분리했다.\r
\r
- 이유: 테스트 매트릭스랑 커버리지 업로드를 섞으면 로그가 지저분해지고\r
- 커버리지 업로드는 한 번만 하면 된다\r
\r
---\r
\r
## 4. 자동 배포: 태그 푸시하면 npm 배포 끝 (여기까진 완벽)\r
\r
배포 트리거를 “태그 푸시(v\\*)”로 잡았다.\r
\r
**publish.yml 핵심**\r
\r
\`\`\`yaml\r
on:\r
push:\r
tags: -'v*'\r
\`\`\`\r
\r
즉, 내가 하는 일은 이것뿐:\r
\r
\`\`\`bash\r
git tag v1.0.2\r
git push origin v1.0.2\r
\`\`\`\r
\r
끝.\r
\r
이제 Actions가 알아서 테스트/빌드/배포를 한다.\r
\r
…였는데…\r
\r
---\r
\r
## 5. (대망) 배포 마지막에서 터진다: EOTP 지옥 오픈\r
\r
배포 로그를 보는데, 빌드까지는 완벽했다.\r
\r
- tarball 파일 목록 쭉 나오고\r
- “Publishing to registry…” 뜨고\r
- “Signed provenance statement…” 이런 멋있는 문장도 뜨고\r
\r
나는 이미 “됐다”라고 생각했다.\r
\r
근데 마지막에 갑자기 이게 튀어나온다:\r
\r
\`\`\`\r
npm errorcode EOTP\r
npm error This operation requiresa one-time passwordfrom your authenticator.\r
\`\`\`\r
\r
### 순간 내 머릿속:\r
\r
> “OTP? 내가 지금 로컬에서 배포하는 것도 아닌데…\r
>\r
> 여긴 GitHub Actions runner인데…\r
>\r
> 누가 폰을 들고 OTP를 입력해주지…?”\r
\r
딱 이때 깨달았다.\r
\r
**CI에서 \`npm publish\`는 ‘사람이 개입할 수 없는데’, 내 계정은 publish에 OTP(2FA)를 요구하고 있었던 것.**\r
\r
---\r
\r
## 6. EOTP가 왜 뜨는지 “진짜로” 뜯어보기\r
\r
### 6-1) 로컬 배포 vs CI 배포는 완전히 다르다\r
\r
- 로컬 배포: 내가 직접 실행하니까, OTP 있으면 붙여서 해결 가능\r
  \`\`\`bash\r
  npm publish --otp=123456\r
  \`\`\`\r
- CI 배포: GitHub Actions는 사람이 없다\r
  → OTP 입력할 창도 없고, 입력할 사람도 없다\r
  → “그럼 CI 배포는 어떻게 하라고?”가 포인트\r
\r
여기서 필요한 게 **CI용 토큰**이다.\r
\r
---\r
\r
## 7. 해결: CI에서는 “Automation(자동화) 용 토큰”으로 간다\r
\r
내가 한 해결 흐름은 이거다.\r
\r
### 7-1) npm 토큰을 “CI용”으로 새로 발급\r
\r
npm 사이트에서 토큰 만들 때, 핵심은 이런 느낌이다.\r
\r
- **CI에서 사용할 거니까** 사람이 OTP 치는 방식이 아니라\r
- **토큰으로 인증이 끝나야 한다**\r
- 그리고 publish 권한이 있어야 한다\r
\r
그래서 만든 토큰을 GitHub Secrets에 넣는다:\r
\r
- repo settings → Secrets → \`NPM_TOKEN\`\r
\r
---\r
\r
### 7-2) GitHub Actions에서 토큰을 인증으로 물려준다\r
\r
publish workflow에서 \`NODE_AUTH_TOKEN\`을 환경변수로 주입하면 된다.\r
\r
\`\`\`yaml\r
-name:Publishtonpm\r
run:npmpublish--provenance--accesspublic\r
env:\r
NODE_AUTH_TOKEN:\${{secrets.NPM_TOKEN}}\r
\`\`\`\r
\r
여기까지 해도, 토큰이 “일반 토큰”이면 계정 설정에 따라 또 막힐 수 있다.\r
\r
이 경우는 두 가지를 확인했다:\r
\r
### 체크 1) 토큰 권한이 publish 가능한 권한인지\r
\r
- read만 있으면 당연히 publish 못한다\r
- write/publish 권한이 있어야 한다\r
\r
### 체크 2) 계정의 2FA 정책이 “토큰/자동화 publish도 막는” 형태인지\r
\r
- 계정 설정에서 publish 작업에 OTP를 강제하면,\r
  어떤 토큰은 여전히 EOTP를 띄울 수도 있다.\r
- 그래서 “자동화 전용 토큰 성격”으로 맞춰야 CI가 산다.\r
\r
(이 부분 때문에 나는 한 번 더 토큰을 다시 발급했다. 진짜 귀찮았다.)\r
\r
---\r
\r
### 7-3) 최종적으로 성공했을 때의 감정\r
\r
EOTP 지옥을 뚫고 \`npm publish\`가 초록불로 끝나면\r
\r
그때부터 진짜 “아 이제 배포는 시스템이 한다” 느낌이 든다.\r
\r
내가 하는 건 태그 푸시 뿐이다.\r
\r
---\r
\r
## 8. docs-only 릴리즈: “문서만 바뀌었는데 배포는 하기 싫다”의 현실 해결\r
\r
이거 나도 엄청 고민했다.\r
\r
### 문제 상황\r
\r
- GitHub에서 README만 수정했다\r
- 근데 npm 페이지 README는 배포된 패키지 기준이라 안 바뀐다\r
- “문서 오타 하나”로 버전 올리는 게 뭔가 찜찜하다\r
\r
### 결론(현실 버전)\r
\r
**npm 페이지의 README까지 최신으로 유지하려면 결국 “patch 릴리즈”를 해야 한다.**\r
\r
그래서 나는 docs-only 릴리즈를 “공식 프로세스”로 만들었다.\r
\r
---\r
\r
### docs-only 릴리즈 커맨드 (진짜 그대로 따라하면 됨)\r
\r
### 1) 문서 수정 커밋\r
\r
\`\`\`bash\r
git add README.md\r
git commit -m"docs: update README"\r
git push origin master\r
\`\`\`\r
\r
### 2) patch 버전 올리기 (package.json 버전 업데이트)\r
\r
npm을 쓰면:\r
\r
\`\`\`bash\r
npm version patch\r
\`\`\`\r
\r
이 명령이 하는 일:\r
\r
- package.json version을 1.0.2 → 1.0.3으로 올리고\r
- 자동으로 git commit도 만들고\r
- 태그까지 만들게 설정할 수도 있음(환경에 따라)\r
\r
나는 태그 트리거 배포를 쓰니까, 보통 이렇게 갔다:\r
\r
\`\`\`bash\r
git push origin master\r
\`\`\`\r
\r
### 3) 태그 푸시 (자동 배포 트리거)\r
\r
\`\`\`bash\r
git tag v1.0.3\r
git push origin v1.0.3\r
\`\`\`\r
\r
### 4) 결과\r
\r
- GitHub Actions가 publish workflow 실행\r
- 테스트/빌드 통과하면 npm에 1.0.3 배포\r
- npm 페이지 README도 최신으로 따라옴\r
\r
> “문서 변경인데 배포까지 하냐?”가 고민이긴 한데,\r
>\r
> 실사용자가 npm 페이지를 보고 설치하는 구조면 이게 제일 깔끔하더라.\r
\r
---\r
\r
## 9. 재밌는(?) 삽질 모음: 내가 실제로 막혔던 것들\r
\r
### 9-1) jsdom이 CI에서만 터짐 → happy-dom으로 전환\r
\r
로컬에서는 잘 도는데 CI에서만 이상하게 jsdom 초기화 오류가 났다.\r
\r
그때는 그냥 “환경 차이”라고 생각했고, 빠르게 happy-dom으로 갈아탔다.\r
\r
- 결론: CI에서 안정적으로 돌아가는 게 더 중요했다\r
\r
---\r
\r
### 9-2) “popped is used before being assigned” 같은 TS 경고\r
\r
hook 테스트 쓸 때 이런거 자주 만난다.\r
\r
\`\`\`tsx\r
letpopped:number[];\r
\r
act(() => {\r
  popped = result.current.popHead(3);\r
});\r
\r
expect(popped).toEqual([1,2,3]);\r
\`\`\`\r
\r
TS는 \`act()\` 콜백에서 반드시 할당된다는 걸 증명 못 하니까 경고를 띄운다.\r
\r
테스트 코드에서는 보통 이렇게 처리했다:\r
\r
\`\`\`tsx\r
let popped!: number[];\r
\r
act(() => {\r
  popped = result.current.popHead(3);\r
});\r
\r
expect(popped).toEqual([1, 2, 3]);\r
\`\`\`\r
\r
---\r
\r
### 9-3) 커버리지 구멍 메우기: 진짜 고통인데, 끝나면 뿌듯함\r
\r
커버리지 99% 찍는 과정은 거의 이런 느낌이었다:\r
\r
- “아니 이 라인은 도대체 언제 타는 거야?”\r
- “오케이. 그럼 강제로 예외 상황을 만들자.”\r
- “아… 이런 입력에서 터지는구나”\r
- “테스트 추가”\r
- “coverage 올라감”\r
- “또 다음 빨간 줄….”\r
\r
근데 이 과정 덕분에,\r
\r
- 방어코드가 진짜로 작동하는지 확인했고\r
- “내 코드의 경계조건”을 내가 제일 잘 알게 됐다\r
\r
---\r
\r
## 10. 최종적으로 내가 얻은 것\r
\r
이제 내 라이브러리는 이런 흐름이 됐다.\r
\r
### ✅ 개발 흐름\r
\r
- PR 올리면 CI가 테스트/빌드 자동 체크\r
- 커버리지도 확인 가능\r
- 안정성 생김\r
\r
### ✅ 배포 흐름\r
\r
- 태그 푸시하면 자동 배포\r
- 사람이 하는 일 최소화\r
- 실수 확 줄어듦\r
\r
### ✅ 그리고 제일 중요한 것\r
\r
이건 포트폴리오로도 “설득력”이 생긴다.\r
\r
- “테스트 했다”가 아니라\r
- “테스트+커버리지+CI+자동배포까지 붙여서 운영 가능한 라이브러리로 만들었다”\r
  가 되니까.\r
\r
---\r
\r
## 11. 다음에 할 것\r
\r
- 성능 벤치마크(원형 큐는 성능 이야기가 잘 먹힘)\r
- docs를 더 친절하게 (사용 예제/주의사항/edge case)\r
- 릴리즈 노트 자동 생성까지 붙이면 완성형\r
\r
## Ps. 삽질 안하려면…\r
\r
1. 배포 자동화는 **브랜치 푸시가 아니라 태그(vX.Y.Z) 푸시 트리거**로 구성하기\r
2. \`npm publish\`는 CI에서 돌릴 거면 **토큰 권한(write/publish)부터 확인하기**\r
3. CI에서 \`EOTP\` 뜨면 “내가 OTP를 못 치는 환경”이라는 걸 먼저 인정하기\r
4. \`NODE_AUTH_TOKEN\` 환경변수로 인증을 넘기는지 workflow에서 확인하기\r
5. 토큰 범위 제한(특정 패키지만 허용) 걸려 있으면 **패키지 포함 여부** 확인하기\r
6. 테스트는 “AI로 초안 → 커버리지 빨간 줄 추격” 루프로 마무리하기\r
7. 로컬 OK, CI FAIL이면 환경 차이(특히 DOM 환경)부터 의심하고 빠르게 대체안 준비하기\r
8. docs만 바뀌어도 npm README까지 최신 유지하려면 **docs-only patch 릴리즈**가 현실 해답\r
9. 태그 수동이면: \`npm version patch\` 후에 **태그 생성/푸시 순서** 실수하지 않기\r
10. 배포 성공 로그 확인은 “빌드 성공”이 아니라 **publish 단계 끝까지** 보고 환호하기(진짜 중요)\r
\r
---\r
\r
## 마무리: “그냥 배포”에서 “운영 가능한 라이브러리”로\r
\r
처음엔 “테스트랑 CI 붙이는 게 그렇게 대단한가?” 싶었는데,\r
\r
막상 해보니까 진짜 체감이 크다.\r
\r
특히 EOTP는…\r
\r
**배포 다 됐다고 방심한 순간 뒤통수 맞는** 타입이라 더 기억에 남는다.\r
\r
이제는 내가 태그만 푸시하면\r
\r
나머지는 GitHub Actions가 다 한다.\r
\r
(그리고 이게 제일 좋다)\r
`,Mv=`# React 실시간 Trigger 처리 최적화 삽질기\r
\r
### Worker, Throttle, Time-slicing… 결국 Baseline이 이겼다\r
\r
실차/로그 기반 모니터링 UI를 만들다 보면, 어느 순간부터 이런 문장이 몸에 새겨진다.\r
\r
> “데이터는 계속 들어오고, UI는 멈추면 안 된다.”\r
\r
이번 글은 **ZeroMQ로 들어오는 trigger 이벤트(로그/뷰/차트)를 React 상태로 반영하는 파이프라인**에서,\r
\r
UI 버벅임을 줄이기 위해 **WebWorker / throttle / frame time-slicing / batched updates**까지 다 해본 뒤,\r
\r
**결국 baseline(그냥 바로 처리)이 가장 빠르고 합리적이었다**는 결론에 도달하기까지의 기록이다.\r
\r
---\r
\r
## 0. 목표: “빠른 처리”가 아니라 “버벅임 없는 UI”\r
\r
이번 최적화의 목적은 단순히 “평균 처리시간(avg)을 줄이기”가 아니었다.\r
\r
- 데이터 처리량은 앞으로도 계속 증가할 수 있고\r
- 사용자 입장에서는 “평균이 빠른 것”보다\r
- **가끔 멈추는 순간(프리즈/버벅임)** 이 훨씬 치명적이다\r
\r
그래서 이번에 측정하고 싶었던 건 크게 두 가지였다.\r
\r
1. **Trigger 처리의 계산 성능(처리 시간/처리량)**\r
2. **UI가 실제로 얼마나 부드러운지(FPS/최악 프레임)**\r
\r
즉, “CPU에서 빨리 끝내는가?”뿐 아니라\r
\r
“메인 스레드를 얼마나 오래 붙잡는가?”를 같이 보려 했다.\r
\r
---\r
\r
## 1. 배경: Trigger가 하는 일\r
\r
Trigger 메시지는 대략 이런 역할을 수행한다.\r
\r
- \`FilterType.Log\` → 이벤트 버스 emit (로그 리스트 등)\r
- \`FilterType.View\` → 여러 탭/뷰 스토어 업데이트\r
  - \`LATEST\`는 무조건 업데이트\r
  - \`CUR_PRINT\`는 “현재 보고 있는 탭인지” 조건부 업데이트\r
  - Sync 업데이트 중이면 \`isUpdatingFromSync\` 기준으로 무시\r
- \`FilterType.Chart\` → chart store 갱신 + 다른 chart window에 broadcast\r
\r
핵심은 **메시지 양이 많고(초당 수백~수천), View 업데이트/Chart broadcast가 UI thread를 잡아먹으면 화면이 끊긴다**는 점이었다.\r
\r
---\r
\r
## 2. 문제: UI 버벅임이 발생\r
\r
초기 구현은 “received datas를 forEach 돌면서 즉시 처리” 방식이었다.\r
\r
### Baseline(초기 코드)의 특징\r
\r
- 데이터가 들어오는 즉시 처리\r
- 분기 로직은 명확\r
- store 업데이트/handler 호출이 곧바로 실행됨\r
- 단점: 특정 타이밍에 데이터가 몰리면, 한 프레임에 처리량이 커져서 **“뚝” 끊길 수 있음**\r
\r
그럼에도 구조 자체는 단순했고, 그래서 더더욱 “최적화가 진짜 필요한지”가 궁금해졌다.\r
\r
---\r
\r
## 3. 무엇을 측정하려 했나(목적): “이 최적화가 진짜 이득인가?”\r
\r
최적화는 “느낌상 좋아질” 수 있지만, 실제로는 반대도 흔하다.\r
\r
그래서 이번엔 **Baseline vs Optimized(Worker/Time-slicing/Throttle 등)** 를 가능한 한 같은 조건에서 비교하려 했다.\r
\r
### ✅ 측정 목적(What)\r
\r
- **Trigger 처리 자체가 얼마나 걸리는지**\r
- **메시지를 얼마나 빨리 소화하는지**\r
- **UI 프레임이 얼마나 안정적인지**\r
- **꼬리 지연(tail latency: p95/p99)이 얼마나 나쁜지**\r
\r
---\r
\r
## 4. 어떻게 측정했나(방법): Perf 로그 + FPS/LongTask 관측\r
\r
### 4-1) Perf 로그에서 측정한 것들\r
\r
콘솔에 찍은 로그는 대략 이런 형태였다.\r
\r
\`\`\`\r
[PERF:baseline] n=341 avg=3.23ms p95=12.00ms max=57.90ms | msgs=5128\r
[PERF:optimized] n=39 avg=15.11ms p95=87.40ms max=101.80ms | msgs=2406 chunks=39\r
\`\`\`\r
\r
각 수치의 의미는 아래와 같다.\r
\r
### ✅ n (Samples, 샘플 수)\r
\r
- **측정한 배치 처리 횟수**\r
- Baseline은 작은 배치를 자주 처리하므로 n이 커지고\r
- Optimized는 배치를 모아서(또는 chunk로) 처리하므로 n이 작아지는 경향이 있다\r
\r
> ⚠️ 주의: n이 작다고 성능이 좋은 게 아니다. “한 번에 많이 처리했을 뿐”일 수 있다.\r
\r
### ✅ msgs (Messages, 처리한 메시지 수)\r
\r
- 측정 구간 동안 **총 처리한 메시지 개수**\r
- 비교할 때 msgs가 비슷해야 공정하다(= 같은 양을 처리했다는 뜻)\r
\r
### ✅ avg (평균 처리 시간)\r
\r
- 배치 1회 처리에 걸린 **평균 시간**\r
- 다만 UI 체감은 평균보다 **tail(p95/p99)** 에 더 민감한 경우가 많다\r
\r
### ✅ p95 / p99 (백분위)\r
\r
- p95: 95%의 배치가 이 시간 안에 끝남\r
- p99: 99%의 배치가 이 시간 안에 끝남\r
\r
UI 관점에서 중요한 이유:\r
\r
- 16ms(60fps) 안에 끝나는 비율이 높아야 버벅임이 줄어든다\r
- “가끔 엄청 느린 케이스”가 체감을 망친다\r
\r
### ✅ max (최대값)\r
\r
- 측정 구간 중 **가장 느렸던 1회**\r
- max가 크면 “한 번 멈춘 경험”으로 사용자에게 강하게 각인될 수 있다\r
\r
### ✅ chunks (Optimized에서만)\r
\r
- time-slicing처럼 “한 배치를 몇 조각으로 나눴는지” 정도를 의미\r
- chunk 분할 자체도 오버헤드가 될 수 있다\r
\r
---\r
\r
### 4-2) FPS 로그에서 측정한 것들\r
\r
내가 따로 찍은 로그:\r
\r
\`\`\`\r
[TriggerFPS] fps=34 worstFrame=185.3ms\r
[TriggerFPS] fps=2  worstFrame=736.6ms\r
\`\`\`\r
\r
이건 “처리 속도”가 아니라 **사용자가 느끼는 부드러움**에 훨씬 직결된다.\r
\r
### ✅ fps\r
\r
- 초당 프레임 수\r
- 높을수록 부드럽고, 낮아질수록 끊긴다\r
\r
### ✅ worstFrame\r
\r
- 측정 구간에서 **가장 오래 걸린 프레임(렌더/스크립트 포함)**\r
- 이 값이 큰 순간이 곧 “뚝 멈춘 순간”이다\r
  (100ms만 넘어도 체감은 거의 프리즈에 가깝다)\r
\r
---\r
\r
## 5. 첫 번째 시도: Worker로 분기/필터링을 offload하자\r
\r
아이디어는 이거였다.\r
\r
> “View/Chart에서 조건 검사/필터링이 많으니까, 그걸 worker로 빼면 main thread가 가벼워지지 않을까?”\r
\r
### Worker 구조\r
\r
- main thread는 worker에 payload를 던짐\r
- worker는 \`datas\`를 돌며 \`actions\`를 생성해서 전달\r
- main thread는 actions를 받아 handler/store update 수행\r
\r
대략 이런 느낌:\r
\r
\`\`\`tsx\r
self.onmessage =(e) => {\r
const { datas, receivingTabIds, lastClickedId, baseIndex } = e.data;\r
const actions = [];\r
\r
for (const itemof datas) {\r
switch (item.filterType) {\r
caseFilterType.Log:\r
        actions.push({type:'LOG', item });\r
break;\r
\r
caseFilterType.View:\r
        actions.push({type:'VIEW_LATEST', item });\r
if (receivingTabIds.includes(lastClickedId)) {\r
          actions.push({type:'VIEW_CUR_PRINT', item });\r
        }\r
break;\r
\r
caseFilterType.Chart:\r
if (receivingTabIds.includes(lastClickedId) && item.baseIndex >= baseIndex) {\r
          actions.push({type:'CHART', item });\r
        }\r
break;\r
    }\r
  }\r
\r
postMessage(actions);\r
};\r
\`\`\`\r
\r
---\r
\r
## 6. 결과: “수치상으로는 Worker가 훨씬 느렸다”\r
\r
실측 로그를 보면 worker쪽이 크게 느렸다.\r
\r
예시:\r
\r
\`\`\`\r
[PERF:worker] avgTotal=227.87ms | avgWorker=225.76ms | avgApply=2.11ms | msgs/s=212 | actions/s=672\r
\`\`\`\r
\r
반면 baseline:\r
\r
\`\`\`\r
[PERF:baseline] avgTotal=3.23ms | avgApply=3.23ms | msgs/s=496\r
\`\`\`\r
\r
개선 작업을 이어가도 결론은 비슷했다.\r
\r
- **Samples**\r
  - Optimized(큰 배치): 58회\r
  - Baseline(작은 배치): 268회\r
- **Messages**\r
  - 둘 다 ~3,700개 수준 (동일량)\r
- **Avg / P50 / P95 / P99 / Max**\r
  - Baseline 압승\r
- **Throughput**\r
  - baseline: 337 ops/s\r
  - optimized: 71 ops/s\r
\r
결론은 명확했다.\r
\r
> “이 workload에서는 worker 통신 오버헤드가 병렬 처리 이득을 압도한다.”\r
\r
---\r
\r
## 7. “그런데 체감 UI는 좀 부드러운 느낌도…?”의 함정\r
\r
이상한 포인트가 하나 있었다.\r
\r
- 수치상으론 optimized/worker가 느린데\r
- 체감으로는 “버벅임이 줄어든 것 같다”는 순간도 있었다\r
\r
이 괴리는 **우리가 찍는 지표가 ‘무엇을 측정하는지’** 와 관련이 있었다.\r
\r
### 7-1) queue 대기 시간/스케줄링 비용이 포함된다\r
\r
optimized 방식은 대개\r
\r
- 데이터를 모으고(queue)\r
- 프레임 단위로 나눠 처리(time-slicing)\r
- 혹은 worker round-trip\r
\r
이 과정에서 **실제 연산 시간 외의 ‘기다리는 시간’** 이 들어가면서 perf 상 시간은 커질 수 있다.\r
\r
### 7-2) FPS는 평균이 아니라 Tail이 결정한다\r
\r
사람이 느끼는 버벅임은 평균이 아니라 **worstFrame / p95~p99**가 좌우한다.\r
\r
실제 로그에서도 optimized는 최악 프레임이 크게 튀었다.\r
\r
\`\`\`\r
[TriggerFPS] fps=2 worstFrame=736.6ms\r
\`\`\`\r
\r
이 한 방이 체감에서 “멈췄다”로 남는다.\r
\r
---\r
\r
## 8. 두 번째 시도: Throttle로 state 변경을 줄이면 빨라지지 않을까?\r
\r
특히 chart broadcast가 많아서 “20fps 정도로 제한하면 좋아 보였다.”\r
\r
\`\`\`tsx\r
const throttledBroadcast = throttle((channel, payload) => {\r
  broadcastService.broadcast(channel, payload);\r
}, 50); // 20fps\r
\`\`\`\r
\r
직관은 맞아 보인다.\r
\r
> “state 변경을 줄이면 리렌더가 줄고 빨라지겠지?”\r
\r
그런데 실제 수치는 더 좋아지지 않았다.\r
\r
### 왜? (내가 내린 결론 + 추가 의견)\r
\r
### 8-1) “state 변경 수”가 병목이 아닐 수 있다\r
\r
- handler 내부 store update가 무겁거나\r
- payload 생성/가공이 무겁거나\r
- tree 변환/대용량 객체 가공이 무거우면\r
  broadcast 횟수만 줄여도 전체 비용은 크게 줄지 않는다.\r
\r
### 8-2) throttle 자체도 비용이 있다\r
\r
timer/args 저장/클로저 등 오버헤드가 있고, 작은 배치에서 특히 손해가 커질 수 있다.\r
\r
### 8-3) React/Zustand는 이미 어느 정도 batching이 된다\r
\r
React 18 이후 batching이 강화되었고, 상태 업데이트도 사용 방식에 따라 자동으로 묶이는 경우가 있다.\r
\r
즉 “또 배치/또 throttle”은 중복 최적화가 되어 손해가 날 수 있다.\r
\r
---\r
\r
## 9. 세 번째 시도: Frame Time-slicing (requestAnimationFrame 기반 분할)\r
\r
이번엔 접근을 바꿨다.\r
\r
> “평균이 조금 느려져도 좋다. 대신 UI가 끊기지만 않으면 된다.”\r
\r
프레임 예산(\`frameBudgetMs\`)을 정해 분할 처리하고,\r
\r
\`unstable_batchedUpdates\`로 React 업데이트도 묶어보았다.\r
\r
중간에 \`unstable_batchedUpdates\` 관련 이슈도 있었지만 결국 해결했다.\r
\r
### 그런데…\r
\r
최종적으로 baseline이 수치상 계속 이겼다.\r
\r
---\r
\r
## 10. “Baseline이 빠른데, 왜 버벅임이 있었나?”\r
\r
정리해보면 baseline은 평균적으로 아주 빠르다.\r
\r
- avg 2~3ms\r
- p95 12ms (16ms 목표에 근접/달성)\r
\r
문제는 **p99/max 구간에서 50~70ms 튀는 순간**이 있다는 점이다. 보통 이런 순간이 원인이다:\r
\r
- datas가 큰 배치로 몰려 들어오는 순간\r
- handler가 큰 객체를 만들거나 깊은 복사를 하는 순간\r
- GC가 터지는 순간\r
- 특정 viewType이 유독 무거운 업데이트를 수행하는 순간 (tree 변환, 대용량 가공 등)\r
\r
즉:\r
\r
> baseline의 문제는 “항상 느림”이 아니라 “가끔 한 방이 큼”이다.\r
\r
---\r
\r
## 11. 최종 방향성: Baseline 유지 + “큰 배치일 때만” 보호장치\r
\r
결론적으로 가장 합리적이었던 전략은 이거다.\r
\r
- **기본은 baseline처럼 즉시 처리**\r
- 다만 **datas가 일정 크기 이상으로 커질 때만** 분할 처리/프레임 분산 같은 보호장치 발동\r
\r
예시:\r
\r
\`\`\`tsx\r
if (datas.length > 200) {\r
  // chunk 처리 or time-slice\r
} else {\r
  // baseline 즉시 처리\r
}\r
\`\`\`\r
\r
이 방식이 좋은 이유:\r
\r
- 평소(대부분)는 baseline의 빠른 경로를 탄다\r
- 위험한 순간(큰 배치 몰림)만 방어한다\r
- “최적화 오버헤드”를 항상 지불하지 않는다\r
\r
---\r
\r
## 12. 성능 측정: 어떻게 재고, 뭘 봐야 하나?\r
\r
이번 작업에서 확실히 배운 점은:\r
\r
> 성능은 “체감”과 “숫자” 둘 다 봐야 하고, 숫자도 “무슨 숫자냐”가 중요하다.\r
\r
### 우리가 본 지표들\r
\r
### 처리 시간\r
\r
- avg / p50 / p95 / p99 / max\r
- **UI 체감은 p95~p99 + max가 중요**\r
- avg만 보면 속기 쉽다\r
\r
### Samples\r
\r
- baseline이 더 자주 호출되었다\r
- optimized는 배치를 크게 묶어 호출 횟수가 적었다\r
  → 호출 횟수가 적다고 빠른 게 아니다(한 번에 더 많이 처리하면 더 느릴 수 있음)\r
\r
### Throughput\r
\r
- baseline 337 ops/s vs optimized 71 ops/s\r
  → baseline이 처리량 측면에서도 안정적이었다\r
\r
### FPS / worstFrame\r
\r
- fps가 낮고 worstFrame이 크면 체감 버벅임이 생긴다\r
- worstFrame은 “한 번 멈춘 순간”을 그대로 보여준다\r
\r
---\r
\r
## 13. “왜 최적화했는데 더 느려졌나?” 정리 (내 의견 + 최종 결론)\r
\r
내 결론은 이렇다.\r
\r
### 13-1) 오버헤드가 이득보다 컸다\r
\r
worker, queue, slice, rAF, time-slicing…\r
\r
이 모든 건 “추가 구조”이고, 구조 자체가 비용이다.\r
\r
현재 workload는\r
\r
- 평균 배치가 아주 큰 편이 아니고 (10~20개 수준이 자주 들어옴)\r
- handler가 즉시 처리해도 충분히 빠른 편이라\r
  “추가 구조 비용”이 오히려 총 비용을 키웠다.\r
\r
### 13-2) 진짜 병목은 분기/조건이 아니라 handler 내부일 가능성이 크다\r
\r
worker가 분기만 대신해도, handler/store update가 무거우면 근본 병목은 그대로다.\r
\r
### 13-3) React batching은 이미 생각보다 잘 되어 있다\r
\r
React 18 환경에서 같은 tick 내 setState는 배치되는 경우가 많다.\r
\r
내가 직접 배치를 넣은 것이 중복 최적화가 되었을 수 있다.\r
\r
### 13-4) UI 부드러움의 핵심은 평균이 아니라 Tail\r
\r
이번 실측에서는 optimized가 tail(p95/p99/worstFrame)까지 baseline보다 좋지 않았다.\r
\r
그래서 더더욱 baseline 유지가 맞았다.\r
\r
---\r
\r
## 14. 최종 결론\r
\r
### ✅ 지금 상황에서의 최선\r
\r
- **Baseline 유지가 정답**\r
- worker는 이 workload에서는 손해\r
- throttle/time-slicing은 “항상 켜는 최적화”가 아니라\r
  “필요할 때만 발동하는 보호장치”로 쓰는 게 더 합리적\r
\r
### ✅ 앞으로의 개선 포인트\r
\r
Baseline이 이미 p95 12ms라 충분히 좋다.\r
\r
그래도 p99/max(50~70ms)를 줄이고 싶다면:\r
\r
- 큰 배치일 때만 chunk로 쪼개기\r
- 특정 viewType/chartType 핫스팟 프로파일링\r
- tree 변환 등 무거운 구간에 캐시/구조 개선 고려\r
\r
---\r
\r
## 15. 다음에 내가 한다면(추천 체크리스트)\r
\r
1. baseline 유지\r
2. datas가 커질 때만 time-slice 발동\r
3. 지표는 avg보다 **p95/p99 + worstFrame** 중심으로 본다\r
4. 최적화 대상은 분기 로직이 아니라 **handler 내부 핫스팟**\r
5. 필요하면 “전체 pipeline”이 아니라 “특정 핫스팟만” worker로 뺀다\r
\r
---\r
\r
## 덤: 이번 삽질에서 얻은 교훈\r
\r
> “최적화는 멋진 아이디어가 아니라, 측정 가능한 문제를 해결하는 과정이다.”\r
\r
worker도, batching도, throttle도 다 멋있다.\r
\r
근데 내 시스템에서는 baseline이 가장 빠르다.\r
\r
그리고 이건 실패가 아니라, **제대로 된 결론**이다.\r
`,_v=`# 브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)\r
\r
### – 프로세스 구조, V8 isolate, 렌더링 파이프라인까지 한 번에 정리\r
\r
이전 글에서\r
\r
> “ECMAScript(스펙) / JS 엔진(V8) / 호스트(브라우저/Node)”\r
\r
이렇게 세 레이어로 나눠서 JS 이벤트 루프를 봤다면,\r
\r
이번에는 **브라우저 쪽을 확대**해서 들여다볼 차례다.\r
\r
- 브라우저는 프로세스를 어떻게 나눠 쓰고 있는지?\r
- V8은 어디에 올라가서 돌아가는지?\r
- DOM 업데이트 → 화면 픽셀로 찍히기까지 어떤 파이프라인을 거치는지?\r
\r
실제 구조를 알고 나면,\r
\r
- “메인 스레드가 바쁘면 왜 렌더링이 멈추는지”\r
- “requestAnimationFrame이 왜 ‘프레임 기준’ 콜백인지”\r
- “Web Worker를 쓰면 뭐가 풀리고, 뭐는 여전히 막히는지”\r
\r
같은 것들이 훨씬 더 직관적으로 보인다.\r
\r
---\r
\r
## 0. 큰 그림: 브라우저는 사실 **여러 프로세스 + 여러 스레드**다\r
\r
크롬(Chromium) 기반 브라우저를 기준으로 보면, 구조는 대략 이렇다:\r
\r
- **브라우저 프로세스 (Browser Process)**\r
  - 탭 관리, 주소창, 히스토리, 네트워크 요청 등 “브라우저 전체” 관장\r
- **렌더러 프로세스 (Renderer Process)**\r
  - 탭 한 개당 최소 1개 (사이트 격리 전략에 따라 더 세분화될 수도 있음)\r
  - 이 프로세스 안에서:\r
    - DOM, CSSOM, 레이아웃, 페인트\r
    - JS 엔진(V8)\r
    - 메인 스레드 + 워커 스레드들\r
- **GPU 프로세스 (GPU Process)**\r
  - GPU와 통신, 컴포지팅/렌더링 관련 작업 담당\r
- 그 외 여러 유틸리티/플러그인 프로세스 등\r
\r
우리가 JS, DOM, CSS, Reflow/자식 요소 이런 거 이야기할 때\r
\r
**대부분은 “렌더러 프로세스” 내부 이야기**다.\r
\r
그리고 그 렌더러 프로세스 안의 **메인 스레드**에\r
\r
V8, DOM, 스타일/레이아웃 로직이 같이 올라가 있다.\r
\r
---\r
\r
## 1. 렌더러 프로세스 내부: 메인 스레드와 V8 Isolate\r
\r
### 1-1. 메인 스레드(Main Thread)가 하는 일\r
\r
렌더러 프로세스의 메인 스레드는 말 그대로 “한 탭의 뇌”다.\r
\r
- JS 실행 (V8)\r
- DOM 조작\r
- 스타일 계산 (Style/Recalculate Style)\r
- 레이아웃(Layout)\r
- 일부 페인트 단계\r
- 사용자 입력 이벤트 처리 (click, input 등 디스패치)\r
\r
즉, 우리가\r
\r
\`\`\`jsx\r
while (true) {} // 이런 바보 코드\r
\`\`\`\r
\r
같은 걸 메인 스레드에서 돌리면,\r
\r
이 탭은 ==**죽었다고 봐도 됨**== 😂\r
\r
- JS도 못 돌리고\r
- DOM 업데이트도 안 되고\r
- 마우스 클릭도 응답 없고\r
- 스크롤도 안 되고\r
- 렌더링도 못 한다\r
\r
이게 바로 “싱글 스레드 UI의 지옥” 포인트고,\r
\r
여기에 맞춰 **이벤트 루프 + 렌더링 파이프라인**이 설계되어 있다.\r
\r
### 1-2. V8과 Isolate 개념\r
\r
V8은 내부적으로 **Isolate**라는 개념을 쓴다.\r
\r
- **Isolate = 독립된 JS 런타임 인스턴스**\r
  - 자기만의 힙, 스택, GC, microtask queue를 가진다.\r
  - 기본적으로 한 Isolate는 한 스레드에 바인딩된다고 보면 된다.\r
- 크롬에서는 **렌더러 프로세스 안에 최소 1개의 Isolate**가 있고,\r
  - 각 탭/오리진 조합에 따라 더 세분화되는 경우도 있다(사이트 격리 정책 등).\r
\r
중요 포인트:\r
\r
> 한 탭(렌더러 프로세스) 안의 메인 스레드에 **“V8 Isolate + DOM + 렌더링 로직”**이 같이 얹혀 있다.\r
\r
그래서:\r
\r
- JS가 돌면서 DOM을 조작하는 게 “동기”로 보이는 이유,\r
- DOM API가 JS에서 바로 호출 가능한 이유\r
\r
모두 **같은 스레드, 같은 프로세스 안에 있기 때문**이다.\r
\r
---\r
\r
## 2. 렌더링 파이프라인: HTML → DOM → 픽셀까지\r
\r
브라우저 렌더링 파이프라인을 간략히 정리하면:\r
\r
1. **DOM 트리 생성 (Parsing)**\r
2. **CSSOM 트리 생성**\r
3. **Render Tree 생성 (DOM + CSSOM 결합)**\r
4. **Layout (Reflow)**\r
   - 각 노드의 위치와 크기 계산\r
5. **Paint (Rasterization 준비)**\r
   - 어떤 색/선/텍스트가 어디에 그려져야 하는지\r
6. **Compositing (합성)**\r
   - 레이어를 GPU로 보내고, 최종 프레임 조립\r
\r
이 중 **1~4단계 + 일부 아날로그한 Paint**는\r
\r
메인 스레드에서 DOM/CSS/레이아웃 알고리즘으로 수행되고,\r
\r
실제 헤비한 래스터라이즈/컴포지팅은 GPU 프로세스 쪽에서 더 처리된다.\r
\r
### 2-1. DOM/CSSOM 생성\r
\r
- HTML 파서가 HTML을 읽으면서 **DOM 트리**를 만든다.\r
- \`<style>\`, CSS 파일, 인라인 스타일 등을 파싱해서 **CSSOM**을 만든다.\r
- 둘을 합쳐서 “이 요소는 이 스타일을 가진다”라는 **Styled DOM / Render Tree**를 형성.\r
\r
이 과정에서 JS가 끼어들면:\r
\r
- \`<script>\` 태그를 만나면\r
  - JS 실행(V8) → DOM 읽기/쓰기 가능\r
  - DOM 완성 시점에 영향을 줄 수도 있음\r
- \`document.write\`, 동적 생성, 동적 CSS 주입 등으로 렌더링 흐름이 흔들릴 수 있다.\r
\r
### 2-2. Layout (Reflow)\r
\r
DOM과 스타일 정보를 기반으로:\r
\r
- 각 요소의 **위치(x, y)**, **크기(width, height)** 등을 계산한다.\r
- flex, grid, position, margin, padding 등 CSS 레이아웃 규칙을 다 적용.\r
\r
레거시 표현으로는 “Reflow”라고 부르는 단계.\r
\r
JS에서 렌더링 타이밍과 상관 없이\r
\r
DOM을 마구 변경하면:\r
\r
- 브라우저가 **레이아웃을 재계산(Reflow)** 해야 하고,\r
- 이건 메인 스레드에서 꽤 무거운 작업일 수 있다.\r
\r
### 2-3. Paint + Raster + Compositing\r
\r
레이아웃 결과를 토대로:\r
\r
- 각 요소를 어떻게 그릴지(Paint) 결정하고,\r
- 레이어(layer) 단위로 나눠서,\r
- GPU 프로세스 쪽에서 래스터라이즈(텍스처 만들기)하고,\r
- 여러 레이어를 합성(Compositing)해서 하나의 프레임 이미지로 만든다.\r
\r
**position: fixed**, **transform**, **opacity**, **will-change** 같은 속성이\r
\r
왜 “레이어 승격”과 연결되어 성능에 영향을 주는지 바로 여기와 관계 있다.\r
\r
요약하면:\r
\r
> 메인 스레드: “무엇을, 어디에, 어떻게 그릴지” 결정\r
>\r
> GPU: “결정된 걸 실제 픽셀로 찍어내는” 고성능 노동자\r
\r
---\r
\r
## 3. 이벤트 루프와 렌더링 타이밍의 관계\r
\r
이제 이전 글에서 이야기했던 **Task/Microtask + 렌더링** 흐름과 연결해보자.\r
\r
하나의 렌더러 프로세스 메인 스레드에서의 루프를\r
\r
엄청 단순화하면 이런 그림이 된다:\r
\r
\`\`\`\r
[1] Task 실행 (JS 콜백, 이벤트 핸들러 등)\r
[2] Microtask 실행 (Promise.then, queueMicrotask 등)\r
[3] 렌더링 타이밍이면 → 렌더링 파이프라인 (스타일, 레이아웃, 페인트, 합성)\r
[4] 다음 Task...\r
\`\`\`\r
\r
그래서 다음과 같은 현상이 생긴다.\r
\r
### 3-1. JS가 오래 돌면 렌더링이 막힌다\r
\r
\`\`\`jsx\r
button.addEventListener("click", () => {\r
  const start = performance.now();\r
  while (performance.now() - start < 2000) {\r
    // 2초 동안 바쁜 루프\r
  }\r
});\r
\`\`\`\r
\r
- 이 while이 돌아가는 동안:\r
  - 메인 스레드는 JS 실행에 100% 사용됨.\r
  - 이벤트 루프가 다음 Task로 못 넘어감.\r
  - Microtask도 안 돌아감 (콜 스택이 안 비니까).\r
  - 렌더링 파이프라인도 못 됨.\r
\r
그래서 UI는 그대로 멈춰 있고,\r
\r
브라우저는 “응답 없음” 팝업을 띄우고 싶어 한다.\r
\r
이게 “JS는 싱글 스레드라서 UI가 멈출 수 있다”의 실체다.\r
\r
### 3-2. requestAnimationFrame이 “프레임 맞춰 호출”되는 이유\r
\r
\`requestAnimationFrame(callback)\`은:\r
\r
- **다음 렌더링 시점 직전에** callback을 실행해달라는 요청이다.\r
- 이벤트 루프 입장에선:\r
  - Task, Microtask 처리 이후,\r
  - 렌더링을 하기 직전에, rAF 콜백 호출 → 그 안에서 DOM 업데이트 → 그걸 가지고 렌더링.\r
\r
그래서 애니메이션 로직을 rAF 안에 넣으면:\r
\r
- 프레임 단위로 DOM 변경\r
- 렌더링 타이밍과 동기화된 JS 실행\r
\r
을 보장받을 수 있다.\r
\r
### 3-3. Microtask 과사용 = 렌더링 Starvation 가능\r
\r
\`Promise.then\`, \`queueMicrotask\`는 microtask 큐에 들어가고,\r
\r
이 큐는 Task와 Task 사이에 “다 비워질 때까지” 실행된다.\r
\r
\`\`\`jsx\r
functionloop() {\r
queueMicrotask(loop);\r
}\r
loop();\r
\`\`\`\r
\r
같은 코드를 돌리면 어떻게 될까?\r
\r
- Task 하나 끝날 때마다 microtask 큐를 비워야 하는데\r
- 큐를 비울 때마다 또 새 microtask가 들어감\r
- → 사실상 이벤트 루프가 **다음 Task로 못 넘어감**\r
- → 렌더링, 입력 처리 모두 막힘\r
\r
즉, **microtask만으로도 UI를 굳혀버릴 수 있다**는 걸 기억해야 한다.\r
\r
---\r
\r
## 4. Web Worker는 어디에 서 있고, 뭐가 해결/미해결?\r
\r
> “싱글 스레드가 문제면 Worker 쓰면 되지 않나요?”\r
\r
**Web Worker**는 렌더러 프로세스 안에서 **별도 스레드**로 생성된다.\r
\r
- Worker 스레드 안에도 **V8 Isolate**가 하나 더 붙는다.\r
- 그 안에서 JS를 돌릴 수 있고,\r
  메인 스레드와는 \`postMessage\`로 메시지 교환.\r
\r
장점:\r
\r
- 무거운 계산/파싱/데이터 처리 로직을 Worker로 넘기면\r
  메인 스레드가 그만큼 가벼워짐.\r
- 메인 스레드는 DOM/렌더링/이벤트 처리에 집중 가능.\r
\r
하지만:\r
\r
- Worker는 **DOM에 직접 접근할 수 없다.**\r
  (\`document\`, \`window\` 없음)\r
- 최종 DOM 업데이트는 여전히 메인 스레드가 해야 한다.\r
- 즉, “화면에 반영되는 부분”은 여전히 싱글 스레드 목이 좁다.\r
\r
정리하면:\r
\r
> Worker = 메인 스레드 짐을 덜어주는 노동자,\r
>\r
> 하지만 **UI/렌더링 목줄은 여전히 메인 스레드**에 묶여 있다.\r
\r
---\r
\r
## 5. 실제로 이 구조를 어떻게 활용할까? (실무 관점 몇 가지)\r
\r
실제 프론트 작업/실시간 모니터링 UI/대시보드 같은 걸 만들면서\r
\r
알아두면 좋은 실전 팁들을 구조에 맞춰 연결해보면:\r
\r
1. **메인 스레드를 오래 점유하는 코드 피하기**\r
   - 큰 JSON 파싱, 복잡한 연산 → Web Worker로 넘기기\r
   - 큰 배열 map/filter/reduce 연속 호출 → chunk로 나누고 \`setTimeout\`/\`rAF\`로 쪼개기\r
2. **DOM 변경은 “배치해서” 하기**\r
   - 루프 안에서 DOM 읽기/쓰기 섞어 쓰지 말고,\r
     - 먼저 읽기\r
     - 나중에 쓰기\r
   - React/프레임워크들이 “렌더 → 커밋” 단계를 나누는 이유도 비슷한 맥락.\r
3. **Promise/microtask는 “즉시 후속 처리”에만 쓰기**\r
   - 상태 변경 직후, 그에 의존하는 후속 처리 한 번 정도는 OK\r
   - microtask 안에서 또 microtask 무한으로 만드는 패턴은 조심 (렌더링 못 함)\r
4. **requestAnimationFrame은 애니메이션 전용으로**\r
   - 스크롤, 드래그, 그래프 실시간 업데이트 같은 것들\r
   - “프레임 당 1번 갱신”이 보기에 제일 자연스러움\r
     (setInterval 16ms와는 느낌이 다르다)\r
\r
---\r
\r
## 6. 마무리: 브라우저를 “작은 운영체제”처럼 보기\r
\r
이제 전체를 한 번 더 요약해보면:\r
\r
- 브라우저는:\r
  - 브라우저 프로세스 + 렌더러 프로세스 + GPU 프로세스 등으로 이루어진 “작은 OS” 같고\r
- 렌더러 프로세스 안에서는:\r
  - 메인 스레드 위에 **V8 Isolate + DOM + 렌더링 로직** 이 같이 올라가 돌아가며\r
- 이벤트 루프는:\r
  - Task → Microtask → 렌더링 파이프라인 → Task…\r
    이런 순환을 계속 돌리고 있다.\r
\r
이 구조를 알고 나면,\r
\r
- “왜 JS와 렌더링이 서로 영향을 주는지”\r
- “왜 어떤 코드는 프레임 드랍을 만들고, 어떤 패턴은 부드럽게 느껴지는지”\r
- “왜 Web Worker를 써도 DOM 쪽 병목이 완전히 사라지지 않는지”\r
\r
같은 것들이 **“감”이 아니라 구조적으로 이해**된다.\r
`,Dv=`# 웹(Web)이란 도대체 뭘까?\r
\r
HTML/CSS/JS는 아는데… 그래서 “웹”이 어떻게 화면이 되는 건데?\r
\r
웹 개발 조금만 하다 보면 이런 시점이 온다.\r
\r
- HTML은 구조\r
- CSS는 스타일\r
- JS는 동작\r
\r
여기까지는 알겠는데…\r
\r
> “그래서… 웹이 뭐임?”\r
> “왜 URL 치면 화면이 뜨는 거지?”\r
> “그 HTML 문자열이 어떻게 픽셀이 되는 거야?”\r
\r
나도 이 지점에서 한동안 멈춰 있었음.\r
문서 보면 “DOM, CSSOM, 렌더 트리, 레이아웃, 페인트” 이런 단어가 나오는데 그냥 외우면 끝이 아니더라.\r
\r
그래서 오늘은 “웹을 **동작 원리 관점**”에서 한 번 제대로 풀어보려고 한다.\r
\r
결론부터 말하면:\r
\r
> 웹은 “화면 기술”이 아니라\r
> **리소스(문서)를 주소로 요청하고, 응답을 받아, 브라우저가 해석해서 보여주는 시스템**이다.\r
\r
이 관점이 잡히면 HTML/CSS/JS가 왜 그렇게 나뉘어 있고,\r
React/Vue가 왜 등장했고, 웹 성능이 왜 중요한지까지 줄줄이 이어진다.\r
\r
---\r
\r
## 0. 웹의 본질: “주소로 리소스를 찾고 → 프로토콜로 주고받고 → 브라우저가 해석한다”\r
\r
웹을 한 줄로 요약하면 이거다.\r
\r
> **URL로 리소스를 식별하고 → HTTP로 요청/응답하고 → 브라우저가 해석해서 렌더링한다.**\r
\r
여기서 3요소만 제대로 잡으면 웹의 절반은 끝난다.\r
\r
### 0-1) URL: “어디에 뭐가 있는지”를 식별하는 체계\r
\r
URL은 그냥 주소가 아니다. “리소스 식별자”다.\r
\r
- \`https://example.com/posts/1\`\r
- \`https://cdn.example.com/app.js\`\r
- \`https://api.example.com/users\`\r
\r
이건 전부 **“무언가를 가리키는 것”** 이지, 꼭 HTML만 가리키는 게 아니다.\r
\r
웹에서 리소스는:\r
\r
- HTML 문서\r
- CSS 파일\r
- JS 번들\r
- 이미지/폰트\r
- JSON(API 응답)\r
- video/audio\r
- wasm\r
- …등등 전부 포함된다.\r
\r
### 0-2) HTTP: “그걸 어떻게 주고받는지”를 정하는 규칙\r
\r
HTTP는 “웹의 운송 규칙”이다.\r
\r
- 클라이언트(브라우저)가 요청(request)을 보내고\r
- 서버가 응답(response)을 준다.\r
\r
그리고 그 요청/응답에는 메타데이터가 붙는다.\r
\r
- Method: GET/POST/PUT/DELETE…\r
- Status: 200/301/404/500…\r
- Header: Content-Type, Cache-Control, Cookie…\r
\r
여기서 **Content-Type**이 진짜 중요하다.\r
\r
브라우저는 응답을 받을 때 이렇게 생각한다.\r
\r
> “이게 HTML이야? JS야? 이미지야? JSON이야?”\r
\r
그 판단이 렌더링 흐름을 결정한다.\r
\r
### 0-3) 브라우저: “받은 리소스를 이해하고 실행/렌더링하는 런타임”\r
\r
브라우저는 단순한 뷰어가 아니다.\r
\r
- 네트워크 요청도 하고\r
- HTML/CSS 파싱도 하고\r
- JS 실행도 하고\r
- GPU로 렌더링도 한다\r
\r
말 그대로 **웹 앱을 실행하는 운영체제급 런타임**에 가깝다.\r
\r
---\r
\r
## 1. HTML: “문서의 구조와 의미(semantic)를 정의하는 언어”\r
\r
HTML을 처음 배울 때 다들 이렇게 외운다.\r
\r
> HTML = HyperText Markup Language\r
\r
근데 진짜 중요한 건 HyperText보다 Markup이다.\r
\r
HTML은 “프로그래밍 언어”가 아니라\r
**문서의 구조를 선언하는 언어**다.\r
\r
- \`<h1>\`: 이건 제목이다\r
- \`<p>\`: 이건 문단이다\r
- \`<nav>\`: 이건 내비게이션이다\r
- \`<button>\`: 이건 버튼이다\r
\r
즉 HTML은 “무엇이 무엇인지”를 알려주는 **의미 기반 문서**다.\r
\r
그래서 HTML에는:\r
\r
- 변수 없음\r
- if 없음\r
- for 없음\r
\r
대신 “구조/의미/관계”만 있다.\r
\r
---\r
\r
## 2. 브라우저는 HTML 문자열을 그대로 쓰지 않는다 → DOM을 만든다\r
\r
여기서 웹 동작의 핵심이 시작된다.\r
\r
HTML은 그냥 텍스트다.\r
\r
\`\`\`html\r
<div><p>Hello</p></div>\r
\`\`\`\r
\r
이걸 텍스트 그대로는 “화면”으로 만들 수 없다.\r
그래서 브라우저는 HTML을 파싱해서 **DOM 트리**로 바꾼다.\r
\r
> HTML → Parsing → DOM(Document Object Model)\r
\r
DOM은 쉽게 말하면:\r
\r
- 문서를 **트리 구조 객체**로 만든 것\r
- JS가 \`document.querySelector()\`로 만지는 그 대상\r
\r
HTML이 “문서 문자열”이라면,\r
DOM은 “렌더링/조작 가능한 객체 모델”이다.\r
\r
---\r
\r
## 3. CSS: “문서를 어떻게 보이게 할지”를 규칙으로 정의한다 (그리고 CSSOM)\r
\r
CSS는 스타일 언어인데, 여기서도 중요한 포인트가 있다.\r
\r
### 3-1) CSS가 생긴 이유 = HTML이 스타일로 오염되던 시절을 끝내기 위해\r
\r
옛날 HTML은 \`<table>\`로 레이아웃 만들고\r
\`<font>\`로 폰트 바꾸고\r
\`bgcolor\`로 배경색 넣고 난리였다.\r
\r
결국 HTML이 문서가 아니라 “디자인 스크립트”가 돼버림.\r
\r
그래서 탄생한 철학이 이거다.\r
\r
> 구조(HTML)와 표현(CSS)을 분리하자.\r
\r
이게 지금 웹 개발의 근간이다.\r
\r
### 3-2) 브라우저는 CSS도 문자열로 쓰지 않는다 → CSSOM\r
\r
CSS도 결국 텍스트다.\r
\r
\`\`\`css\r
p {\r
  color: red;\r
}\r
\`\`\`\r
\r
브라우저는 이것도 파싱해서 트리화한다.\r
\r
> CSS → Parsing → CSSOM(CSS Object Model)\r
\r
DOM과 CSSOM이 둘 다 준비되어야 “렌더링”을 시작할 수 있다.\r
\r
---\r
\r
## 4. JS(JavaScript): “동작과 로직”을 담당한다\r
\r
그리고 여기서 오해하면 안 되는 사실 하나\r
\r
JS는 웹에 “행동”을 부여한다.\r
\r
- 클릭하면 열리고\r
- 스크롤하면 로딩되고\r
- 서버에서 데이터를 가져오고\r
- 화면이 동적으로 바뀌고\r
\r
여기까지는 다들 아는데, 진짜 중요한 사실:\r
\r
> JS 엔진은 **JS 코드만 실행한다**\r
> DOM 조작, 네트워크 요청, 타이머는 JS 언어 자체 기능이 아니라 **브라우저(Web API)가 제공**한다.\r
\r
즉:\r
\r
- V8 같은 JS 엔진: “자바스크립트 실행기”\r
- Web APIs: “DOM, fetch, setTimeout, event 등 기능 제공자”\r
- Event Loop: “둘 사이를 연결하는 스케줄러”\r
\r
이 삼각형을 이해해야 “웹이 돌아가는 방식”이 명확해진다.\r
\r
---\r
\r
## 5. 브라우저 렌더링 파이프라인: HTML/CSS가 “픽셀”이 되는 과정\r
\r
여기부터가 찐이다.\r
\r
웹은 HTML/CSS/JS를 “그냥 보여주는 게 아니라”\r
일련의 파이프라인으로 **픽셀을 만들어낸다.**\r
\r
브라우저는 대략 이런 단계로 움직인다.\r
\r
### 5-1) 파싱 단계\r
\r
1. HTML 다운로드\r
2. HTML 파싱 → **DOM 생성**\r
3. CSS 다운로드\r
4. CSS 파싱 → **CSSOM 생성**\r
\r
### 5-2) 렌더 트리(Render Tree)\r
\r
5. DOM + CSSOM → **Render Tree 생성**\r
\r
Render Tree는 “화면에 실제로 그릴 노드들”만 모은 트리다.\r
\r
- \`display: none\`은 렌더 트리에 안 들어감\r
  (DOM에는 있어도 화면에는 안 그리니까)\r
- \`visibility: hidden\`은 들어감\r
  (공간은 차지하니까)\r
\r
### 5-3) Layout (Reflow)\r
\r
6. **Layout**: 각 요소의 위치/크기 계산\r
\r
여기서 계산되는 게 예를 들어:\r
\r
- 박스 모델(width/height/padding/margin)\r
- flex/grid 배치 결과\r
- line wrapping, 폰트 크기, 줄바꿈\r
- viewport 기준 상대 단위\r
\r
### 5-4) Paint\r
\r
7. **Paint**: 픽셀로 “그릴 준비”를 한다\r
\r
색, 그림자, 테두리, 텍스트 같은 것들을\r
“어떤 순서로 어떤 픽셀을 그릴지” 기록한다.\r
\r
### 5-5) Composite\r
\r
8. **Composite**: 레이어를 합쳐 최종 화면에 출력\r
\r
요즘 브라우저는 성능 때문에 레이어를 나눠 GPU에서 합성(composite)한다.\r
\r
그래서 \`transform\`, \`opacity\` 같은 속성은 레이아웃을 다시 안 하고도 애니메이션이 가능해진다.\r
\r
---\r
\r
## 6. 그래서 “성능 최적화”라는 게 왜 나오는가?\r
\r
JS가 DOM/CSSOM을 건드리면\r
렌더링 파이프라인이 다시 돈다.\r
\r
- DOM 변경 → Render Tree 재생성 가능\r
- 레이아웃 관련 CSS 변경 → Layout 발생\r
- Paint 관련 변경 → Paint 발생\r
- transform/opacity → Paint 없이 Composite만 발생할 수 있음\r
\r
그래서 성능 최적화에서 자주 나오는 말들이 다 여기서 나온다.\r
\r
- “리플로우 줄여라”\r
- “레이아웃 스래싱(layout thrashing) 조심해라”\r
- “requestAnimationFrame 써라”\r
- “쓰로틀/디바운스 해라”\r
- “transform/opacity로 애니메이션 해라”\r
\r
즉 성능은 “코드가 빠르냐 느리냐”보다\r
**렌더링 파이프라인을 얼마나 덜 흔드냐**가 훨씬 중요해진다.\r
\r
---\r
\r
## 7. JS는 어디서 실행될까? (엔진 vs 브라우저)\r
\r
브라우저는 크게 두 덩어리로 보면 된다.\r
\r
### 7-1) JS 엔진 (V8, SpiderMonkey, JSC)\r
\r
- JS 실행\r
- JIT 컴파일\r
- GC(가비지 컬렉션)\r
- 콜 스택 관리\r
\r
### 7-2) 브라우저 런타임(Web APIs)\r
\r
- DOM API\r
- fetch/XHR\r
- timer\r
- event system\r
- rendering pipeline\r
\r
즉 JS는 브라우저 안에서 혼자 사는 게 아니라,\r
브라우저가 제공하는 API와 이벤트 루프 위에서 돌아간다.\r
\r
---\r
\r
## 8. 내가 이해한 “웹”의 정의\r
\r
정리하면 웹은 단순히 “HTML/CSS/JS 묶음”이 아니다.\r
\r
> 웹은 리소스를 URL로 식별하고,\r
> HTTP로 요청/응답하며,\r
> 브라우저가 DOM/CSSOM으로 해석해 렌더링하는 시스템이다.\r
\r
그리고 우리가 하는 “웹 개발”은\r
이 시스템 위에 앱을 올리는 일이다.\r
\r
- 문서를 만들고(HTML)\r
- 보여주고(CSS)\r
- 반응하게 하고(JS)\r
- 서버랑 통신하고(fetch)\r
- 성능 튜닝하고(rendering pipeline)\r
- 프레임워크로 복잡도 관리하고(React/Vue)\r
\r
---\r
\r
## 마치며: 웹이 “화면”이 아니라 “파이프라인”이라는 걸 이해하면 다 연결된다\r
\r
웹을 “화면 만드는 기술”로만 보면\r
각 기술이 따로 노는 느낌이 든다.\r
\r
근데 웹을:\r
\r
> **요청 → 응답 → 해석 → 렌더링**\r
> 이라는 파이프라인으로 보면\r
\r
HTML/CSS/JS가 왜 존재하는지,\r
브라우저가 왜 그렇게 복잡한지,\r
SPA가 왜 등장했는지,\r
성능 최적화가 왜 중요한지까지 전부 한 줄로 이어진다.\r
`,Rv=`# 커링?? 컬링도 아니고 이게 뭐누 (근데 실무에서 은근 자주 만남)\r
\r
개발하다 보면 이런 순간이 있다.\r
\r
- 함수 하나 만들었는데\r
- 매번 똑같은 인자(설정/키/옵션)를 계속 넣고 있고\r
- 코드가 점점 \`() => () => () =>\` 처럼 이상해지기 시작함\r
\r
그때 누가 옆에서 한마디 한다.\r
\r
> “그거 커링이잖아”\r
\r
…커링?\r
컬링도 아니고?\r
카레도 아니고?\r
\r
오늘은 그 커링을 **“외워서 쓰는 게 아니라” 이해해서 쓰는 관점**으로 정리해본다.\r
\r
---\r
\r
## 0. 한 줄 정의부터 박자 맞추기\r
\r
커링(currying)은 딱 이거다.\r
\r
> **다인자 함수 \`f(a, b, c)\`를 \`f(a)(b)(c)\`처럼, 인자를 “쪼개서 순차적으로 받는 함수 체인”으로 바꾸는 기법**\r
\r
조금 더 덜 폼 잡으면:\r
\r
> **인자를 한 번에 다 받지 않고, 하나(또는 몇 개)씩 나눠 받는 함수로 바꾸는 것**\r
\r
여기서 중요한 건 “쪼갠다”가 아니라 **“함수로 바꾼다”** 는 점.\r
\r
---\r
\r
## 1. 예제로 보는 커링: “아 그냥 함수가 함수를 반환하는거구나”\r
\r
### 1-1) 일반 함수\r
\r
\`\`\`js\r
function add(a, b) {\r
  return a + b;\r
}\r
\r
add(2, 3); // 5\r
\`\`\`\r
\r
### 1-2) 커링된 함수\r
\r
\`\`\`js\r
function curriedAdd(a) {\r
  return function (b) {\r
    return a + b;\r
  };\r
}\r
\r
const add2 = curriedAdd(2);\r
add2(3); // 5\r
add2(10); // 12\r
\`\`\`\r
\r
여기서 핵심:\r
\r
- \`curriedAdd(2)\`를 호출하면\r
- “2를 기억하는 함수”가 하나 만들어지고\r
- 그 함수는 나중에 \`b\`만 받아서 계산함\r
\r
그럼 질문.\r
\r
> “근데 a=2를 어떻게 기억해?”\r
\r
정답: **클로저(closure)**\r
\r
---\r
\r
## 2. 커링이 가능한 이유 = 클로저 때문임\r
\r
커링은 결국 이런 구조다.\r
\r
\`\`\`js\r
function makeAdder(a) {\r
  return function (b) {\r
    return a + b; // 외부 스코프 변수 a를 기억함\r
  };\r
}\r
\`\`\`\r
\r
- \`makeAdder(2)\`가 끝나면 원래는 \`a\`가 사라져야 한다\r
- 근데 내부 함수가 \`a\`를 참조하고 있음\r
- 그래서 JS 런타임이 \`a\`를 메모리 어딘가에 남겨둠\r
- 내부 함수가 계속 \`a\`를 사용할 수 있음\r
\r
즉:\r
\r
> 클로저는 “상태를 기억하는 능력”이고\r
> 커링은 그 능력을 이용해서 “인자를 쪼개서 받는 패턴”을 만드는 것이다.\r
\r
---\r
\r
## 3. 커링의 진짜 맛: “인자 일부를 고정한 함수를 만들 수 있다”\r
\r
커링이 실무에서 빛나는 순간은 보통 이거다.\r
\r
> “공통 인자를 미리 고정하고, 나중에 나머지만 받아 쓰고 싶다”\r
\r
예를 들어 곱셈:\r
\r
\`\`\`js\r
const curryMultiply = (a) => (b) => a * b;\r
\r
const double = curryMultiply(2);\r
const triple = curryMultiply(3);\r
\r
double(10); // 20\r
triple(10); // 30\r
\`\`\`\r
\r
여기서 \`double\`, \`triple\`은 사실상:\r
\r
- 의미 있는 이름을 가진 “특화 함수”가 됨\r
- 재사용성이 갑자기 좋아짐\r
- 코드가 읽기 쉬워짐\r
\r
---\r
\r
## 4. 커링 vs 부분 적용(Partial Application)\r
\r
(실무에서 헷갈리기 쉬운 포인트)\r
\r
여기서 다들 한 번씩 멈춘다.\r
\r
> “커링이랑 부분 적용이랑 뭐가 달라?”\r
\r
엄밀히 말하면:\r
\r
### ✅ 커링(currying)\r
\r
- \`f(a, b, c)\` → \`f(a)(b)(c)\`\r
- **항상 인자 하나씩 받는 형태로 변환**\r
\r
### ✅ 부분 적용(partial application)\r
\r
- \`f(a, b, c)\`에 일부 인자를 먼저 넣어서\r
- \`g(b, c)\` 같은 **새 함수를 만드는 것**\r
\r
실무에서는 둘을 엄격히 구분 안 하고\r
“인자 일부 고정해서 함수 만드는 패턴”을 그냥 커링이라고 부르는 경우가 많다.\r
\r
중요한 건 용어 싸움이 아니라:\r
\r
> “공통 인자를 고정해서 코드 중복을 줄인다”\r
> 이 실전 효용임.\r
\r
---\r
\r
# 그렇다면… 어떻게 쓰는데? (실전 패턴 모음)\r
\r
이제부터가 진짜다.\r
커링이 “아 이런 데서 써먹는구나” 체감되는 예제들.\r
\r
---\r
\r
## 1) 공통 설정 고정하는 API 클라이언트 (baseUrl/헤더/에러처리)\r
\r
### 아이디어\r
\r
- 1단계: 프로젝트/도메인별 공통 설정을 고정\r
- 2단계: path와 옵션만 넣어서 호출\r
\r
\`\`\`ts\r
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\r
\r
interface BaseConfig {\r
  baseUrl: string;\r
  defaultHeaders?: Record<string, string>;\r
}\r
\r
interface RequestOptions {\r
  method?: HttpMethod;\r
  headers?: Record<string, string>;\r
  body?: unknown;\r
  query?: Record<string, string | number | boolean | undefined>;\r
}\r
\r
export const createApiClient =\r
  (baseConfig: BaseConfig) =>\r
  async <T = unknown>(\r
    path: string,\r
    options: RequestOptions = {}\r
  ): Promise<T> => {\r
    const url = new URL(path, baseConfig.baseUrl);\r
\r
    if (options.query) {\r
      Object.entries(options.query).forEach(([key, value]) => {\r
        if (value !== undefined) url.searchParams.set(key, String(value));\r
      });\r
    }\r
\r
    const res = await fetch(url.toString(), {\r
      method: options.method ?? "GET",\r
      headers: {\r
        "Content-Type": "application/json",\r
        ...baseConfig.defaultHeaders,\r
        ...options.headers,\r
      },\r
      body: options.body ? JSON.stringify(options.body) : undefined,\r
    });\r
\r
    if (!res.ok) {\r
      throw new Error(\`API Error: \${res.status} \${res.statusText}\`);\r
    }\r
\r
    return (await res.json()) as T;\r
  };\r
\`\`\`\r
\r
### 사용 예시\r
\r
\`\`\`ts\r
export const hmgApi = createApiClient({\r
  baseUrl: "/api/v1",\r
  defaultHeaders: { "X-Client": "HMG-VTDM" },\r
});\r
\r
export const sumsApi = createApiClient({\r
  baseUrl: "https://sums.internal.hmg",\r
});\r
\r
// 호출\r
const projects = await hmgApi<ProjectDto[]>("/projects", {\r
  query: { page: 1, size: 20 },\r
});\r
\r
const result = await sumsApi<ReprogramResult>("/reprogram", {\r
  method: "POST",\r
  body: { vin, ecuId, fileId },\r
});\r
\`\`\`\r
\r
포인트:\r
\r
- \`createApiClient(baseConfig)\`에서 **baseConfig를 클로저로 고정**\r
- 이후엔 매번 baseUrl/header 반복 없이 path만 넣으면 됨\r
- 그리고 공통 에러 핸들링도 한 군데로 모인다\r
\r
---\r
\r
## 2) React 이벤트 핸들러: JSX에서 인라인 람다 줄이기\r
\r
리스트/테이블에서 흔히 이런 코드가 나온다.\r
\r
\`\`\`tsx\r
onClick={() => handleClick(row.id, "DETAIL")}\r
\`\`\`\r
\r
이 패턴도 괜찮긴 한데, JSX가 복잡해지고\r
실수로 \`stopPropagation\` 같은 것도 빼먹기 쉬움.\r
\r
커링으로 핸들러 “팩토리”를 만들면 깔끔해진다.\r
\r
\`\`\`tsx\r
const createRowClickHandler =\r
  (rowId: string, mode: "DETAIL" | "EDIT") => (e: React.MouseEvent) => {\r
    e.preventDefault();\r
    console.log("clicked:", rowId, mode);\r
  };\r
\r
// 사용\r
{\r
  rows.map((row) => (\r
    <tr\r
      key={row.id}\r
      onClick={createRowClickHandler(row.id, "DETAIL")}\r
      className="cursor-pointer hover:bg-slate-50"\r
    >\r
      ...\r
    </tr>\r
  ));\r
}\r
\`\`\`\r
\r
장점:\r
\r
- JSX가 “선언적”으로 보임\r
- 핸들러 로직이 분리됨\r
- 의도 파악이 쉬움\r
\r
---\r
\r
## 3) Zustand + 커링: selector/action factory에서 진짜 유용\r
\r
### 3-1) selector를 커링으로 만들기\r
\r
\`\`\`ts\r
interface User {\r
  id: number;\r
  name: string;\r
}\r
\r
interface UserState {\r
  users: User[];\r
}\r
\r
const selectUserById = (id: number) => (state: UserState) =>\r
  state.users.find((u) => u.id === id);\r
\r
// 사용\r
const user = useUserStore(selectUserById(1001));\r
\`\`\`\r
\r
여기서 \`selectUserById(1001)\`는\r
\r
- id가 “고정된 selector”\r
- Zustand는 나중에 state를 넣어서 호출\r
\r
즉 커링이 “Zustand selector 패턴”에 자연스럽게 붙는다.\r
\r
### 3-2) action도 커링으로 만들기 (+ stale closure 회피까지)\r
\r
\`\`\`ts\r
export const createPermissionToggleHandler = (permissionKey: string) => () => {\r
  const toggle = usePermissionStore.getState().togglePermission;\r
  toggle(permissionKey);\r
};\r
\r
// 사용\r
<Button onClick={createPermissionToggleHandler("ADMIN_PAGE_ACCESS")}>\r
  토글\r
</Button>;\r
\`\`\`\r
\r
포인트:\r
\r
- \`permissionKey\`는 커링+클로저로 고정\r
- \`getState()\`로 액션을 가져오면 stale closure도 피하기 좋음\r
\r
---\r
\r
## 4) 필터/정렬: 조합 가능한 predicate 만들기\r
\r
“조건 함수(predictate)”를 커링으로 만들면 조합이 깔끔해진다.\r
\r
\`\`\`ts\r
interface FileMeta {\r
  id: string;\r
  team?: string;\r
  owner?: string;\r
  tags: string[];\r
}\r
\r
const byTeam = (team: string) => (file: FileMeta) => file.team === team;\r
const byOwner = (owner: string) => (file: FileMeta) => file.owner === owner;\r
const hasTag = (tag: string) => (file: FileMeta) => file.tags.includes(tag);\r
\r
const filterWith =\r
  <T>(predicate: (item: T) => boolean) =>\r
  (list: T[]) =>\r
    list.filter(predicate);\r
\`\`\`\r
\r
사용:\r
\r
\`\`\`ts\r
const complexPredicate = (file: FileMeta) =>\r
  byTeam("VTDM")(file) && byOwner("남훈")(file) && hasTag("J1979")(file);\r
\r
const filtered = filterWith(complexPredicate)(files);\r
\`\`\`\r
\r
이 스타일이 좋은 이유:\r
\r
- “조건(설정)”과 “실제 데이터”가 분리됨\r
- UI에서 조건을 바꿔도 predicate 구성만 바꾸면 됨\r
\r
---\r
\r
## 5) 폼 검증: “라벨 고정 + 값만 넣는” 검증기 만들기\r
\r
\`\`\`ts\r
type Validator = (value: string) => string | null;\r
\r
const required =\r
  (label: string): Validator =>\r
  (value) =>\r
    value.trim() === "" ? \`\${label}을(를) 입력해주세요.\` : null;\r
\r
const maxLength =\r
  (label: string, max: number): Validator =>\r
  (value) =>\r
    value.length > max ? \`\${label}은(는) 최대 \${max}자까지 가능합니다.\` : null;\r
\r
const combineValidators =\r
  (...validators: Validator[]): Validator =>\r
  (value) => {\r
    for (const v of validators) {\r
      const err = v(value);\r
      if (err) return err;\r
    }\r
    return null;\r
  };\r
\`\`\`\r
\r
사용:\r
\r
\`\`\`ts\r
const validateProjectName = combineValidators(\r
  required("프로젝트 이름"),\r
  maxLength("프로젝트 이름", 50)\r
);\r
\r
const error = validateProjectName(form.name);\r
if (error) toast.error(error);\r
\`\`\`\r
\r
- 라벨/제약 조건을 미리 고정해두면\r
- 입력값만 넣어서 검사 가능\r
- 폼이 커질수록 효과가 커짐\r
\r
---\r
\r
# 커링을 쓸 때 흔히 하는 실수/주의점 (중요)\r
\r
커링이 멋있어서 막 쓰면 오히려 코드가 더 어려워질 수 있다.\r
\r
### ✅ 1) “너무 쪼개면” 읽기 어려움\r
\r
\`f(a)(b)(c)(d)(e)\`는 솔직히 눈 아픔.\r
\r
- 인자 2~3개 정도에서 가장 실용적\r
- “공통 설정을 고정하는 의도”가 있을 때만\r
\r
### ✅ 2) React 렌더링에서 “매번 새 함수 만드는” 문제\r
\r
JSX에서 \`createHandler(row.id)\`를 호출하면\r
리렌더 때마다 새 함수가 만들어진다.\r
\r
- 보통 큰 문제는 아니지만\r
- props로 내려가고 memo가 걸려있으면 영향이 생길 수 있음\r
\r
이때는 \`useCallback\`으로 팩토리를 메모이즈 하거나,\r
핸들러 생성 위치를 위로 올리거나(정책적으로 관리) 하면 된다.\r
\r
### ✅ 3) 커링 = 무조건 함수형 프로그래밍… 이건 아님\r
\r
커링은 그냥 “패턴”이다.\r
필요할 때만 쓰는 게 제일 깔끔하다.\r
\r
---\r
\r
# 결론: 커링은 “인자를 쪼개는 기술”이 아니라 “공통을 고정하는 도구”다\r
\r
정리하면 커링이 실무에서 의미 있는 순간은 대부분 이거다.\r
\r
> **매번 반복되는 인자(설정/환경/키/옵션)를 먼저 고정하고**\r
> 나머지 값만 받아서 쓰도록 만들 때\r
\r
- API 클라이언트 설정 고정\r
- React 핸들러에 인자 전달 깔끔하게\r
- Zustand selector/action factory\r
- 필터/검증 같은 조건 기반 함수 조합\r
\r
이렇게 “반복되는 인자”가 보이면\r
커링을 한 번 떠올려볼 만하다.\r
`,Ov=`# 클로저란 당최 무엇인가\r
\r
“함수가 변수 기억하는 거요”로 끝내면 나중에 꼭 크게 맞는다\r
\r
JS 좀 하다 보면 클로저는 무조건 마주친다.\r
\r
- 커링할 때\r
- 콜백 쓸 때\r
- 이벤트 핸들러 만들 때\r
- React에서 \`useCallback\` 썼는데 상태가 안 바뀌는 것처럼 보일 때\r
- Zustand/Redux에서 selector/action 만들 때\r
\r
근데 대부분 설명이 이렇게 끝난다.\r
\r
> “클로저는 반환된 내부 함수다.”\r
> “내부 함수가 외부 스코프를 기억한다.”\r
\r
맞긴 한데… 이 설명만으로는 실전 버그가 생겼을 때 해결이 안 된다.\r
“왜 기억하는데?”, “어디에 기억하는데?”, “언제까지 기억하는데?” 이런 질문에 답이 안 나옴.\r
\r
그래서 오늘은 클로저를 **엔진/메모리 관점까지 포함해서** “정확히” 정리해본다.\r
\r
---\r
\r
## 1. 클로저의 정확한 정의: “반환된 함수”가 아니라 “함수 + 환경”이다\r
\r
클로저를 전문가스럽게(?) 한 문장으로 정리하면:\r
\r
> **클로저(closure)는 “함수(function)”와 “그 함수가 선언될 당시의 렉시컬 환경(lexical environment)”이 함께 묶여서 유지되는 런타임 개념이다.**\r
\r
중요한 포인트는 이거다.\r
\r
- “반환된 내부 함수”는 **클로저가 눈에 띄는 대표 패턴**일 뿐이고\r
- \`return\`이 없어도, 외부 스코프 변수를 참조하는 함수는 클로저가 될 수 있다\r
\r
예를 들면 이런 것도 클로저다.\r
\r
- 이벤트 핸들러\r
- setTimeout/setInterval 콜백\r
- Promise then/catch 콜백\r
- subscribe callback\r
- React hook 내부 함수들\r
\r
즉 “반환”은 본질이 아니다.\r
\r
> **외부 스코프 변수를 참조하는 함수가 그 외부 스코프보다 오래 살아남는 순간, 클로저가 된다.**\r
\r
---\r
\r
## 2. 클로저를 이해하려면 “렉시컬 스코프”부터 잡아야 한다\r
\r
### 2-1. 렉시컬 스코프(lexical scope)란?\r
\r
JS는 **렉시컬 스코프 언어**다.\r
\r
이 말은 스코프가\r
\r
- “어디서 호출됐냐(call site)”가 아니라\r
- **“어디서 선언됐냐(define site)”** 로 결정된다는 뜻.\r
\r
즉 코드 위치가 스코프를 정한다.\r
\r
\`\`\`js\r
const x = 10;\r
\r
function outer() {\r
  const y = 20;\r
\r
  function inner() {\r
    console.log(x, y);\r
  }\r
\r
  return inner;\r
}\r
\`\`\`\r
\r
\`inner\`는 코드상 \`outer\` 내부에서 선언되었기 때문에\r
\`outer\`의 \`y\`에 접근할 수 있다.\r
\r
여기서 핵심은 “호출 위치”가 아니다.\r
\r
\`\`\`js\r
const f = outer();\r
f(); // 여기서 호출 위치가 outer 밖이어도 y 접근 가능\r
\`\`\`\r
\r
호출을 어디서 하든 상관 없다.\r
선언이 어디서 되었는지가 스코프를 결정한다.\r
\r
---\r
\r
## 3. 렉시컬 환경(Lexical Environment)은 엔진이 실제로 스코프를 구현하는 방식이다\r
\r
여기부터가 “왜 클로저가 가능한지”의 정답.\r
\r
JS 엔진은 스코프를 그냥 감으로 처리하지 않는다.\r
각 스코프마다 내부적으로 “환경 객체”를 만든다.\r
\r
렉시컬 환경은 크게 이렇게 구성된다.\r
\r
### 3-1. Environment Record (식별자 저장소)\r
\r
현재 스코프에 선언된 변수/함수/매개변수들이 저장되는 “테이블” 같은 것.\r
\r
예: \`{ y: 20 }\`\r
\r
### 3-2. Outer Environment Reference (바깥 스코프 링크)\r
\r
지금 스코프의 바깥 스코프(부모 환경)를 가리키는 포인터.\r
\r
즉:\r
\r
> Environment Record + Outer Reference\r
> 이게 묶여서 “렉시컬 환경”이 된다.\r
\r
그리고 우리가 흔히 말하는 **스코프 체인**은:\r
\r
> “Outer Reference를 따라 올라가는 연결 리스트 체인”이다.\r
\r
어떤 변수를 찾을 때 엔진은 이렇게 한다.\r
\r
1. 현재 Environment Record에서 찾고\r
2. 없으면 Outer Environment로 올라가고\r
3. 또 없으면 계속 올라가고\r
4. 끝까지 없으면 \`ReferenceError\`\r
\r
---\r
\r
## 4. 클로저가 “기억한다”는 게 정확히 뭔데? (메모리 관점)\r
\r
보통 함수 호출이 끝나면 지역 변수는 “사라진다”고 배운다.\r
\r
- 호출 스택(stack frame)이 정리되니까\r
- 지역 변수도 함께 날아간다\r
\r
근데 클로저는 외부 함수가 끝났는데도 변수에 접근한다.\r
\r
> “그럼 이 변수는 어디에 남아있냐?”\r
\r
여기서 핵심은 GC(가비지 컬렉터)다.\r
\r
### 4-1. 원래라면\r
\r
\`outer()\`가 끝나면 \`y\`는 없어져야 한다.\r
\r
### 4-2. 그런데…\r
\r
\`inner\`가 \`y\`를 참조하고 있고,\r
\`inner\` 함수가 밖으로 나가서 계속 살아있으면?\r
\r
\`\`\`js\r
function outer() {\r
  const y = 20;\r
\r
  return function inner() {\r
    console.log(y);\r
  };\r
}\r
\r
const f = outer();\r
f(); // 20\r
\`\`\`\r
\r
엔진 입장에서 \`inner\`는 \`y\`가 있는 렉시컬 환경을 계속 참조한다.\r
\r
즉:\r
\r
- \`inner\`가 살아있다\r
- \`inner\`가 어떤 환경(렉시컬 환경)을 참조한다\r
- 그 환경에 \`y\`가 있다\r
- 그러면 GC는 “아직 참조 중이네?” 하고 안 지운다\r
\r
결과적으로:\r
\r
> **클로저가 참조하는 렉시컬 환경은 힙(heap)에 유지될 수 있다.**\r
> (정확히는 엔진 구현마다 다르지만, “스택에서 사라져야 할 것들이 살아남는다”는 현상은 동일)\r
\r
그리고 \`inner\`에 대한 참조가 모두 끊기면?\r
\r
\`\`\`js\r
f = null; // 참조 제거\r
\`\`\`\r
\r
그때서야 GC가 회수한다.\r
\r
---\r
\r
## 5. “return이 없으면 클로저가 아니다?” → 완전 아니다\r
\r
클로저는 “반환”이 아니라 “생존” 문제다.\r
\r
\`\`\`js\r
let saved;\r
\r
function outer() {\r
  let x = 10;\r
\r
  function inner() {\r
    console.log(x);\r
  }\r
\r
  saved = inner; // return 없이도 외부로 나감\r
}\r
\r
outer();\r
saved(); // 10\r
\`\`\`\r
\r
\`inner\`가 \`x\`를 참조하고 있고\r
\`inner\`가 \`saved\`에 저장되면서 outer보다 오래 살아남았다.\r
\r
=> 클로저다.\r
\r
---\r
\r
## 6. 클로저를 왜 쓰냐? 실전에서 진짜 많이 쓰는 4가지\r
\r
### 6-1. 정보 은닉 / 캡슐화 (private state)\r
\r
클래스 없이도 “외부에서 접근 못 하는 상태”를 만들 수 있다.\r
\r
\`\`\`js\r
function createCounter() {\r
  let count = 0;\r
\r
  return {\r
    inc() {\r
      return ++count;\r
    },\r
    get() {\r
      return count;\r
    },\r
  };\r
}\r
\r
const c = createCounter();\r
c.inc(); // 1\r
c.inc(); // 2\r
c.get(); // 2\r
\`\`\`\r
\r
\`count\`는 외부에서 직접 못 만진다.\r
오직 클로저를 통해서만 접근 가능.\r
\r
이게 JS에서 “private 변수” 구현하는 전통적인 방식.\r
\r
---\r
\r
### 6-2. 커링 / 부분 적용 (상태를 가진 함수)\r
\r
커링은 사실상 클로저 응용이다.\r
\r
\`\`\`js\r
const makeAdder = (x) => (y) => x + y;\r
\r
const add10 = makeAdder(10);\r
add10(5); // 15\r
add10(20); // 30\r
\`\`\`\r
\r
\`x=10\`을 기억하는 함수가 만들어지는 것 자체가 클로저다.\r
\r
---\r
\r
### 6-3. 비동기/콜백에서 “값 고정”\r
\r
예전 \`var\` 시절에 특히 유명한 케이스.\r
\r
\`\`\`js\r
for (var i = 0; i < 3; i++) {\r
  (function (copy) {\r
    setTimeout(() => console.log(copy), 100);\r
  })(i);\r
}\r
\`\`\`\r
\r
IIFE가 \`copy\`를 캡처해서\r
각 타이머마다 다른 값을 찍게 만든다.\r
\r
요즘은 \`let\`이 있어서 단순해졌지만, 원리는 여전히:\r
\r
> “비동기 환경에서 값을 고정하려면 클로저가 필요하다”\r
\r
---\r
\r
### 6-4. React / Hooks / Zustand에서 “기본 동작 방식 그 자체”\r
\r
React는 렌더마다 함수가 새로 실행된다.\r
그 렌더 스코프 안에서 만들어진 핸들러/이펙트는 전부 클로저다.\r
\r
그래서 이런 stale closure가 터진다.\r
\r
\`\`\`tsx\r
const value = useStore((s) => s.value);\r
\r
const handle = useCallback(() => {\r
  console.log(value); // 오래된 value를 캡처할 수 있음\r
}, []);\r
\`\`\`\r
\r
이게 바로 “클로저를 잘못 쓰면 상태가 안 바뀌는 것처럼 보이는” 현상.\r
\r
---\r
\r
## 7. 클로저의 부작용/주의점 (여기 진짜 중요)\r
\r
### 7-1. 불필요한 메모리 유지\r
\r
클로저가 거대한 객체를 참조하면, 그 객체가 회수되지 않는다.\r
\r
예: 대형 배열, 이미지 데이터, huge map 같은 거 캡처하면\r
“생각보다 메모리 오래 잡아먹는” 문제가 생긴다.\r
\r
### 7-2. stale closure 버그\r
\r
React에서 가장 많이 맞는 버그.\r
\r
- \`useCallback([])\`\r
- \`useEffect([])\`\r
- \`setInterval\` 안에서 state 사용\r
- debounce/throttle 콜백\r
\r
=> 최신 값이 아니라 “그때 캡처된 값”만 본다.\r
\r
해결은:\r
\r
- 의존성 배열에 넣어서 최신화하거나\r
- \`useRef\`로 최신 값을 유지하거나\r
- Zustand면 \`getState()\`로 최신 값을 읽어오거나\r
\r
### 7-3. 디버깅 난이도 상승\r
\r
클로저가 중첩되면 “이 변수가 어느 시점 값인지” 추적이 어려워진다.\r
특히 팀 코드에서 \`() => () => () =>\` 남발하면 지옥 열린다.\r
\r
---\r
\r
## 8. 한 번에 요약\r
\r
- **클로저란?**\r
  → **함수 + 그 함수가 선언될 당시의 렉시컬 환경을 함께 유지하는 런타임 구조**\r
\r
- **왜 가능한가?**\r
  → 함수가 외부 변수를 참조하면 엔진은 그 렉시컬 환경을 유지하고,\r
  참조가 남아있으면 GC가 회수하지 않는다.\r
\r
- **왜 쓰나?**\r
  → 캡슐화, 상태가 있는 함수(커링), 콜백에서 값 고정, React/Hooks 기반 동작\r
\r
- **주의할 점**\r
  → 메모리 유지, stale closure 버그, 디버깅 어려움\r
\r
---\r
\r
## 마치며: 클로저는 “신기한 기술”이 아니라 “JS가 스코프를 구현하는 방식”이다\r
\r
클로저는 뭔가 특별한 기능이 아니라,\r
JS가 렉시컬 스코프를 구현하는 과정에서 자연스럽게 생긴 메커니즘이다.\r
\r
그리고 그 위에:\r
\r
- 커링\r
- 캡슐화\r
- 이벤트 처리\r
- React Hooks\r
- 상태 관리 라이브러리\r
\r
같은 현대 JS 개발의 대부분이 올라가 있다.\r
\r
즉 클로저는 “알면 좋은 것”이 아니라\r
\r
> **모르면 언젠가 크게 맞는 것**이다.\r
`,zv=`# 프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처\r
\r
최근에 프론트엔드 아키텍처를 다시 고민하면서\r
\r
- DDD(도메인 주도 설계)\r
- FSD(Feature-Sliced Design)\r
- 그리고 어떤 분이 Velog에 정리해둔 “프론트엔드 도메인 아키텍처” 글\r
  을 같이 보게 됐다.\r
\r
특히 “기술 단위로 나눈 폴더 구조”에서 레거시 유지보수를 하다 보면\r
\r
**도메인(업무) 기준으로 코드가 안 보이는 문제**가 크게 와 닿는다.\r
\r
이 글에서는:\r
\r
1. DDD를 프론트 기준으로 간단히 정리하고\r
2. Velog 글에서 말하는 “도메인 슬라이스(Vertical Slice)” 개념을 풀어보고\r
3. 전통적인 FSD와 어떻게 다른지 비교하고\r
4. 앞으로 설계할 때 쓸 수 있는 실전 가이드를 정리해본다.\r
\r
---\r
\r
## 1. DDD(도메인 주도 설계)를 프론트 기준으로 다시 보자\r
\r
### 1-1. DDD가 말하고 싶은 한 줄 요약\r
\r
DDD를 아주 거칠게 한 줄로 줄이면 이거다.\r
\r
> “코드를 기술 단위가 아니라 비즈니스 도메인 단위로 모델링하자.”\r
\r
여기서 말하는 도메인(Domain)은\r
\r
“유사한 업무들의 집합”이다.\r
\r
예를 들면:\r
\r
- 결제(Payment)\r
- 회원(User)\r
- 주문(Order)\r
- 차량제어(Vehicle Control)\r
- 로그 분석(Log Analytics)\r
- 진단 세션(Diagnostic Session) …\r
\r
**핵심 아이디어는 두 가지**다.\r
\r
1. **코드 구조와 이름이 실제 업무 용어와 대응되게 만들자**\r
   - 클래스/함수/파일 이름이\r
     “기획에서 쓰는 단어”와 자연스럽게 매핑되게.\r
   - 예: \`updateCampaign\`, \`DiagnosticSession\`, \`VehicleReprogrammingRequest\`\r
2. **변화·규칙이 다른 ‘덩어리’마다 Bounded Context로 쪼개자**\r
   - 같은 “Campaign”이라는 단어라도\r
     - ECU 업데이트 컨텍스트의 Campaign\r
     - 테스트 산출물 관리 컨텍스트의 Campaign\r
       가 의미와 규칙이 다르면,\r
       **각각 다른 컨텍스트로 분리**해야 한다.\r
\r
프론트 개발 쪽에서 실무적으로 번역하면:\r
\r
- \`services/\`, \`utils/\`, \`components/\` 같은 **기술 기준 폴더** 대신\r
- \`user/\`, \`cart/\`, \`payment/\`, \`vehicle-diagnosis/\` 같은 **도메인 기준 폴더**로 나누는 것에 가깝다.\r
\r
### 1-2. DDD에서 중요한 개념 (프론트 친화 버전)\r
\r
DDD 책에는 더 많은 개념이 나오지만,\r
\r
프론트에서 특히 중요한 건 이 정도다.\r
\r
### 1) Ubiquitous Language (보편 언어)\r
\r
- 기획/PO/QA/개발자가 모두 **같은 용어를 쓴다.**\r
- 그 용어가 그대로 코드에도 박힌다.\r
  - “업데이트 프로세스”, “SUMS 동기화”, “진단 세션”, “캠페인 검증” 같은 단어들이\r
  - 파일명, 컴포넌트명, 상태명에 자연스럽게 등장해야 한다.\r
\r
### 2) Bounded Context\r
\r
- 한 도메인 안에서 **용어, 규칙, 모델이 일관되게 통하는 경계**.\r
- 예를 들어,\r
  - “ECU 업데이트” 컨텍스트의 \`Campaign\`과\r
  - “시험 산출물 관리” 컨텍스트의 \`Campaign\`이 의미가 다르면\r
    → 아예 **서로 다른 컨텍스트**로 분리해야 한다. (같은 타입으로 묶지 말기)\r
\r
### 3) Domain Model\r
\r
- 업무 규칙과 상태를 표현하는 모델 집합.\r
- 백엔드에선 Entity, Value Object, Domain Service 등으로 많이 나누지만\r
- 프론트에선 조금 단순하게:\r
\r
> “도메인 관련 상태 + 비즈니스 로직 + 타입 정의 묶음”\r
\r
정도로 봐도 충분하다.\r
\r
즉, 프론트에서 DDD를 크게 거창하게 가져갈 필요는 없고,\r
\r
> “코드를 비즈니스 기준으로 나눈다”\r
\r
이게 핵심이라고 보면 된다.\r
\r
---\r
\r
## 2. 도메인 단위 “슬라이스(Vertical Slice)”란 무엇인가?\r
\r
Velog 글에서 말하는 키워드가 바로 “Slice”다.\r
\r
여기에는 두 가지 의미가 섞여 있다.\r
\r
1. Redux Toolkit의 Slice\r
2. FSD(Feature-Sliced Design)의 Slice\r
\r
그리고 이 두 개를 일반화한 개념이 **“도메인 단위 수직 슬라이스(Vertical Slice)”** 다.\r
\r
### 2-1. 왜 도메인 단위로 잘라야 할까?\r
\r
글의 출발점은 이런 문제들이다.\r
\r
- **과도한 공통화**\r
  - \`CardView\` 하나에 포스트/상품/유저카드 다 때려넣기 →\r
    분기(if/삼항연산자) 지옥\r
- **“관심사 분리”의 역설**\r
  - 로직을 A/B/C/D로 잘게 쪼개놓았더니\r
    항상 A→B→C→D 순서로 같이 호출해야 하는 구조가 됨\r
  - 한 단계 빼먹으면 버그\r
- **기술별 폴더 구조의 한계**\r
  - \`ui/\`, \`hooks/\`, \`api/\`, \`utils/\`로 나눴더니\r
    작은 요구사항 하나 바꾸려 해도\r
    폴더를 계속 왔다갔다 해야 함\r
\r
그래서 나온 결론이 이거다.\r
\r
> “실제로 변경이 일어나는 단위 = 도메인이다.\r
>\r
> 사장님/기획자가 말하는 단위대로 코드를 잘라야,\r
>\r
> 변경 범위가 명확해진다.”\r
\r
예를 들어,\r
\r
- “유저 프로필에 팔로워 수 추가해 주세요”\r
  → **user 도메인**만 건드리면 끝.\r
- “장바구니에 할인 금액 보여 주세요”\r
  → **cart/payment 도메인**만 수정.\r
\r
### 2-2. Redux Slice와 FSD Slice\r
\r
글에서 말하는 “slice”는 두 가지에서 왔다.\r
\r
### 1) Redux Toolkit의 slice\r
\r
\`\`\`tsx\r
const userSlice = createSlice({\r
  name: "user",\r
  initialState: { ... },\r
  reducers: { ... },\r
});\r
\`\`\`\r
\r
- \`userSlice\`, \`productSlice\`, \`cartSlice\`처럼\r
  **도메인별로 state + reducer가 뭉쳐 있는 단위**.\r
- 예전처럼 \`actions/\`, \`reducers/\`를 폴더로 찢어놓으면\r
  - 한 기능 수정할 때 여러 폴더를 왔다 갔다 해야 하는데\r
- slice로 묶으면\r
  - “유저 관련 건은 \`userSlice\`만 보면 된다” 수준이 된다.\r
\r
### 2) FSD의 slice\r
\r
전형적인 FSD 구조를 아주 간단히 적으면:\r
\r
\`\`\`\r
src/\r
  entities/\r
    user/\r
      ui/\r
      model/\r
      api/\r
    product/\r
    cart/\r
\`\`\`\r
\r
- \`entities/user/\` 자체가 **user 도메인 slice**\r
- 그 안에 UI, 상태, API까지 다 들어 있다.\r
  → 이게 바로 도메인 단위 수직 슬라이스.\r
\r
### 2-3. Vertical Slice Architecture를 그림으로\r
\r
전통적인 “수평 레이어 구조”는 대략 이런 느낌이다.\r
\r
\`\`\`\r
src/\r
  components/   # UI\r
  hooks/        # 로직\r
  services/     # API\r
  utils/        # 유틸\r
\`\`\`\r
\r
이 구조의 문제는:\r
\r
- 기능 하나 수정하려면\r
  \`components\` → \`hooks\` → \`services\` → \`utils\`를 계속 왔다갔다 해야 한다.\r
\r
반대로, 수직 슬라이스 구조는 이렇게 간다.\r
\r
\`\`\`\r
src/\r
  user/\r
    components/\r
    hooks/\r
    api/\r
    utils/\r
  product/\r
  cart/\r
\`\`\`\r
\r
- “유저 관련 수정”이면 \`user/\` 안만 보면 된다.\r
\r
피자 비유를 빌리면,\r
\r
- 수평으로 자르면: 도우/치즈/토핑을 레이어별로 따로 자른 느낌\r
- 수직으로 자르면: 한 조각에 도우+치즈+토핑이 모두 포함된 슬라이스\r
\r
Redux slice와 FSD slice에 공통으로 흐르는 철학이 바로 이 “도메인 단위 vertical slice”다.\r
\r
---\r
\r
## 3. Velog 글에서 제안하는 “프론트엔드 도메인 아키텍처”\r
\r
이제 본론.\r
\r
Velog 글은 FSD를 참고해서 **조금 더 실전적으로 단순화한 구조**를 제안한다.\r
\r
### 3-1. 전체 레이어 구조\r
\r
글쓴이가 제안하는 기본 구조는 이렇다.\r
\r
\`\`\`\r
src/\r
  pages/     # 라우트/페이지 단위 UI\r
  state/     # 도메인 상태 관리 (Redux slice, Zustand store 등)\r
  api/       # API 호출 + 프론트 도메인에 맞게 데이터 변환\r
  stories/   # Storybook\r
  test/      # 테스트\r
\`\`\`\r
\r
포인트 몇 가지:\r
\r
- FSD의 \`entities/\` + \`features/\`를 **\`state/\` 하나로 합침**\r
  → 둘을 애매하게 나누다가 오히려 도메인 경계가 흐려지는 걸 피하자.\r
- \`api/\`는 최상위 레벨에 두고, 그 안을 \`user.ts\`, \`post.ts\`처럼 **도메인별 파일로 나눈다.**\r
\r
디렉토리 구조는 약간 수평처럼 보이지만,\r
\r
**각 레이어 안에서는 도메인 기준으로 쪼개져 있는 형태**다.\r
\r
### 3-2. Pages 레이어: 라우트/섹션 중심\r
\r
- 페이지는 라우트 기준으로 폴더를 쪼갠다.\r
\r
\`\`\`\r
pages/\r
  home/\r
    index.tsx\r
    hero-section.tsx\r
    feature-section.tsx\r
\`\`\`\r
\r
- 컴포넌트 분리는 “재사용”보다는 **섹션 구획 나누기**에 초점을 둔다.\r
  (홈 상단, 피쳐 영역, 리스트 영역 등)\r
- 중요한 철학:\r
\r
> “도메인 UI는 공통화하지 않는다.”\r
\r
- 포스트 카드 vs 상품 카드\r
  → 겉보기엔 비슷해도 요구사항이 금방 갈라지므로,\r
  분기 지옥 만들지 말고 **도메인별/페이지별로 따로 구현**한다.\r
- 대신 슬로건은 이거다.\r
\r
> “상태/로직은 재사용, UI는 반복.”\r
\r
또 하나 포인트:\r
\r
- Pages는 여러 도메인을 자유롭게 참조해도 된다.\r
  → 여기서 SRP를 강하게 주장하지 않는다.\r
  → 페이지는 “여러 도메인의 조합”이 들어오는 곳이기 때문.\r
\r
### 3-3. State 레이어: 도메인 slice 한 방에\r
\r
- \`state/user.ts\`, \`state/post.ts\`, \`state/cart.ts\`처럼\r
  **파일 하나 = 도메인 slice 하나**로 본다.\r
- Redux slice / Zustand store를 떠올리면 이해가 쉽다.\r
\r
특히 강조하는 철학이 몇 가지 있다.\r
\r
### 1) List + Detail을 한 store에서 같이 다룬다\r
\r
\`\`\`tsx\r
// state/post.ts 예시 느낌\r
const usePost = create({\r
  state: {\r
    posts: [],\r
    currentPost: null,\r
  },\r
  actions: (state) => ({\r
    likePost: () => {\r
      // currentPost, posts 둘 다 갱신\r
    },\r
    addComment: (content) => {\r
      // postId를 인자로 안 받고, currentPost에서 읽어서 사용\r
    },\r
  }),\r
});\r
\`\`\`\r
\r
- List와 Detail를 **한 store에서 같이 관리**한다.\r
- 좋아요/댓글 같은 액션 내부에서\r
  - 리스트와 디테일 상태를 같이 갱신해버린다.\r
- UI가 “좋아요 → 리스트 리로드 → 디테일 리로드” 같은 순서를 직접 호출하지 않도록.\r
\r
### 2) Action은 “순수함수”보다 “상태 지향 함수”\r
\r
- ❌ UI에서 \`currentPost.id\`를 꺼내 매번 인자로 넘기는 방식\r
- ✅ 액션 내부에서 \`state.currentPost\`에 바로 접근하는 방식\r
\r
이렇게 하면:\r
\r
- UI에서 호출하는 인터페이스는 단순해지고,\r
- 변경이 생겨도 **state 레이어 안에서만 로직 변경**하면 된다.\r
\r
### 3) 상태 관리 라이브러리 추상화\r
\r
- \`state/\` 안에서 Zustand/Redux를 직접 쓰기보다는\r
  \`createStore\` 같은 팩토리로 한 번 감싼다.\r
- 나중에 라이브러리를 바꾸더라도\r
  \`usePost()\` 같은 인터페이스는 유지되게.\r
\r
→ DDD에서 말하는 “도메인과 인프라 분리”를\r
\r
프론트 기준으로 가져온 느낌이다.\r
\r
### 3-4. API 레이어: BFF 느낌으로 가공/병합\r
\r
- API 레이어에서 **서버 응답을 프론트 도메인 모델로 가공/병합**한다.\r
\r
예를 들어,\r
\r
- \`1234567\` → \`1.2M\` (표시용 \`followerCountDisplay\`)\r
- \`2024-01-15\` → \`3일 전\` (표시용 \`createdAtDisplay\`)\r
- “내가 좋아요 누른 포스트인지 여부” → \`isLikedByMe\`\r
\r
또한, 여러 백엔드 엔드포인트를 조합해야 하면\r
\r
이 레이어에서 병합해서 반환한다.\r
\r
거의 BFF(Backend For Frontend) 같은 역할.\r
\r
UI/State에서는\r
\r
> “이미 프론트 도메인에 맞게 가공된 객체”만 쓴다.\r
\r
이 원칙을 강조한다.\r
\r
### 3-5. UI 컴포넌트 규칙\r
\r
UI 쪽에서 제안하는 규칙은 꽤 실용적이다.\r
\r
1. **글로벌 도메인 상태는 props로 깊게 전달하지 말고, 훅에서 직접 읽기**\r
\r
   \`\`\`tsx\r
   // ❌\r
   function PostDetail({ currentPost, posts }: Props) { ... }\r
\r
   // ✅\r
   function PostDetail() {\r
     const { currentPost, posts } = usePost();\r
   }\r
   \`\`\`\r
\r
2. **도메인 객체는 필드 단위로 쪼개지 말고 객체 통째로 넘기기**\r
\r
   \`\`\`tsx\r
   // ❌\r
   <PostCard title={post.title} thumbnail={post.thumbnail} ... />\r
\r
   // ✅\r
   <PostCard post={post} />\r
   \`\`\`\r
\r
이유는 단순하다.\r
\r
- 도메인 속성은 계속 늘어나고 바뀐다.\r
- props로 필드를 하나씩 넘기기 시작하면,\r
  - 새로운 필드가 추가될 때마다\r
  - 상위/하위 컴포넌트 모두 수정해야 하는 **전파 지옥**이 발생한다.\r
\r
마지막으로, 의존성 흐름은 이렇게 단순하게 가져간다.\r
\r
\`\`\`\r
pages → state → api\r
\`\`\`\r
\r
---\r
\r
## 4. “순정 FSD” vs 이 글의 “도메인 아키텍처”\r
\r
이제 전형적인 FSD 구조와 비교해 보자.\r
\r
### 4-1. 전형적인 FSD 구조\r
\r
아주 간단하게 쓰면:\r
\r
\`\`\`\r
src/\r
  app/\r
  pages/\r
  processes/\r
  features/\r
  entities/\r
  shared/\r
\`\`\`\r
\r
- **entities**: 핵심 도메인 단위 (User, Product, Cart…)\r
- **features**: 유즈케이스 단위 (“로그인”, “검색”, “필터링” 등)\r
- 각 레이어 안에서도 다시 도메인 slice (\`entities/user\`, \`features/auth\` 등)로 나뉜다.\r
\r
**장점**\r
\r
- 도메인 + 유즈케이스를 구조적으로 잘 표현할 수 있다.\r
- 대규모 제품 기준 best practice가 많이 정리되어 있다.\r
\r
**단점**\r
\r
- \`entities\` / \`features\` / \`processes\` 경계가 실제 요구사항과 잘 안 맞기 시작하면,\r
  - **폴더만 많고 어디에 뭘 둬야 할지 애매해진다.**\r
- hooks/store/ui가 여기저기 흩어져 사용되면\r
  - “이 기능 수정하려면 어디를 건드려야 하지?”가 다시 혼란스러워진다.\r
\r
### 4-2. Velog 글 구조 vs FSD\r
\r
간단 비교표로 보면:\r
\r
| 관점             | FSD 전형                                     | Velog “도메인 아키텍처”                        |\r
| ---------------- | -------------------------------------------- | ---------------------------------------------- |\r
| 최상위 레이어    | app/pages/processes/features/entities/shared | pages/state/api/stories/test                   |\r
| 도메인 분할 단위 | entities/, features/ 아래의 slice            | \`state/*.ts\`, \`api/*.ts\` 파일 단위             |\r
| 도메인 UI 위치   | entities/ui, features/ui 등                  | 대부분 pages 내부, 도메인 UI 공통화 거의 안 함 |\r
| 상태 관리 위치   | entities/model, features/model 등            | \`state/\`에서 전역 도메인 상태 관리             |\r
| API 위치         | shared/api, entities/api 등                  | 최상위 \`api/\`에서 도메인별 파일 분할           |\r
| 철학 키워드      | “도메인 + 유즈케이스 Layering”               | “도메인 vertical slice + 레이어 최소화”        |\r
\r
본질은 둘 다 **도메인 중심**이지만,\r
\r
- FSD는 **레이어 정의와 규칙이 많은 프레임워크 느낌**이고,\r
- Velog 글 구조는 **스타트업/실전용으로 최소한만 남긴 축약판**에 가깝다.\r
\r
레이어가 많을수록 설계 자유도는 늘어나지만,\r
\r
팀 합의/규칙 준수가 안 되면 오히려 혼란만 늘어날 수 있다.\r
\r
실제 유지보수를 많이 해본 사람에게는\r
\r
Velog 스타일의 “간결한 도메인 아키텍처”가 더 몸에 잘 맞을 수도 있다.\r
\r
---\r
\r
## 5. 레거시 유지보수 지옥과 DDD/FSD 관점\r
\r
지금까지 얘기를 실제 상황에 대입해 보면:\r
\r
- 처음에는 어느 정도 FSD-ish한 규칙으로 잘 설계된 서비스가 있을 수 있다.\r
- 이후에 다른 프로젝트에 투입되었는데,\r
  - 기존 서비스는 \`components/hooks/services/utils\` 같은 기술 중심 폴더 구조거나,\r
  - 또는 FSD 같긴 한데 \`entities/features\` 경계가 흐릿해진 상태일 수 있다.\r
\r
이 때 유지보수에 들어가면 생기는 문제가 바로 이거다.\r
\r
> “작은 요구사항 하나 고치려는데,\r
>\r
> 관련 코드가 **도메인 기준이 아니라 ‘기술 종류’ 기준으로 산개**되어 있어서\r
>\r
> 맥락 읽기가 너무 힘들다.”\r
\r
DDD/FSD 관점에서 보면 딱 이 상태다.\r
\r
> **변경이 일어나는 단위(도메인)** 와\r
>\r
> **코드가 묶여 있는 단위(폴더/모듈)** 가\r
>\r
> 완전히 어긋나 있는 상태.\r
\r
이게 바로 “레거시 유지보수 지옥”을 만든다.\r
\r
그래서 결국 자연스럽게:\r
\r
- “도메인 기준으로 잘라야겠다”\r
- “Vertical Slice / 도메인 슬라이스 구조를 써야겠다”\r
\r
라는 쪽으로 관심이 옮아간다.\r
\r
---\r
\r
## 6. 앞으로 설계할 때 쓸 수 있는 실전 가이드\r
\r
마지막으로, 실제 프로젝트에서 써먹을 수 있는 가이드를 정리해보자.\r
\r
### 6-1. 새 서비스 설계할 때\r
\r
1. **최상위부터 도메인 단위로 생각하기**\r
   - 예: \`vehicle/\`, \`diagnostics/\`, \`campaign/\`, \`storage/\`, \`auth/\` …\r
   - 이걸 FSD-style로 가져갈지,\r
   - Velog-style로 \`state/*.ts\`, \`api/*.ts\`로 가져갈지 선택.\r
2. **레이어는 단순하게**\r
\r
   복잡한 레이어가 팀에 잘 스며들 자신이 없으면,\r
\r
   이렇게 단순한 구조가 오히려 좋다.\r
\r
   \`\`\`\r
   pages/   # 라우트·섹션 중심 UI\r
   state/   # 도메인 상태 + 비즈니스 로직 (Zustand/Redux 추상화)\r
   api/     # 도메인 데이터 전처리, 병합\r
   shared/  # (있다면) 디자인 시스템/저수준 util 컴포넌트\r
   \`\`\`\r
\r
3. **UI 공통화는 디자인 시스템 컴포넌트까지만**\r
   - 버튼, 인풋, 모달, 토글 같은 “순수 UI”만 재사용.\r
   - “캠페인 카드”, “테스트 세션 리스트”처럼 **도메인 UI는 비슷해 보여도 각각 구현**.\r
4. **도메인 훅 / 상태는 항상 도메인 이름으로**\r
   - \`useCampaign()\`, \`useVehicle()\`, \`useDiagSession()\`\r
   - 액션 이름도 도메인 언어 그대로:\r
     \`startReprogramming\`, \`injectCanMessage\`, \`validateCampaign\` …\r
\r
### 6-2. 레거시/유지보수 프로젝트에서 DDD 도입하기\r
\r
기존 서비스를 한 번에 갈아엎기보다는\r
\r
**도메인 단위로 “섬”을 하나씩 만드는 전략**이 현실적이다.\r
\r
1. 자주 건드리는 화면/기능 하나를 고른다.\r
   - 그 도메인에 대해\r
     - \`state/XXX.ts\` (혹은 \`entities/xxx/\`)로 **도메인 store**를 추출하고\r
     - \`api/xxx.ts\`로 API + 데이터 가공 로직을 옮긴다.\r
     - 페이지에서는 \`useXXX\` 훅만 쓰도록 점차 정리한다.\r
2. 이렇게 도메인 섬이 하나 생기면,\r
   - 그 도메인 관련 요구사항이 들어올 때마다\r
   - “아, 이건 \`XXX\` 슬라이스부터 보면 되겠다”라는 기준점이 생긴다.\r
3. 이런 섬들이 늘어나면서,\r
   - 자연스럽게 도메인 경계가 드러나고,\r
   - 새 기능은 처음부터 그 경계 안에서 설계하면 된다.\r
\r
---\r
\r
## 마무리\r
\r
정리하면:\r
\r
- **DDD**는 “코드를 비즈니스 도메인 기준으로 나누자”는 철학이고,\r
- **FSD**는 이걸 프론트 쪽에 맞게 체계화한 아키텍처 스타일,\r
- Velog에서 제안한 “프론트엔드 도메인 아키텍처”는\r
  - FSD를 참고하되\r
  - 레이어를 \`pages/state/api\` 정도로 단순화하고\r
  - 도메인 UI는 과감히 중복 허용하고\r
  - 상태/액션/API를 도메인 단위로 강하게 묶는 **실전형 축약 버전**이라고 볼 수 있다.\r
\r
우리가 레거시 유지보수에서 느끼는 고통의 상당 부분은,\r
\r
> **“도메인 기준 변화 vs 기술 기준 폴더 구조”** 의 미스매치\r
\r
에서 온다.\r
\r
DDD/FSD/도메인 슬라이스 아키텍처는\r
\r
결국 이 간극을 줄이기 위한 도구들이다.\r
\r
앞으로 새로 짓는 서비스든, 레거시를 점진적으로 리팩터링하든,\r
\r
“**도메인 기준으로 코드를 자르자**”는 이 관점 하나만 머릿속에 계속 붙잡고 가도\r
\r
아키텍처는 훨씬 건강한 방향으로 흘러갈 거라고 믿는다.\r
`,Lv=Object.assign({"./mdDatas/AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여.md":Tv,"./mdDatas/JS 기본 동작원리, “진짜 뼈대”만 잡아보기.md":Ev,"./mdDatas/JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편).md":Av,"./mdDatas/React × Zustand × Closure stale closure 방지 전략 기술.md":jv,"./mdDatas/React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기.md":Nv,"./mdDatas/React 실시간 Trigger 처리 최적화 삽질기.md":Mv,"./mdDatas/브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편).md":_v,"./mdDatas/웹(Web)이란 도대체 뭘까.md":Dv,"./mdDatas/커링 컬링도 아니고 이게뭐누.md":Rv,"./mdDatas/클로저란 당최 무엇인가.md":Ov,"./mdDatas/프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처.md":zv}),it=t=>Lv[`./mdDatas/${t}.md`]||"",Uv=[{id:"react-zustand-closure",slug:"react-zustand-closure-stale-closure",title:"React × Zustand × Closure: stale closure 방지 전략 기술 정리",excerpt:"Zustand 쓰다가 '아니 왜 값이 안 바뀌지?' 하고 3시간 멍때린 적 있나요? 저도요. 결국 범인은 stale closure였습니다… 진짜 황당해서 정리해둔 글입니다. 나처럼 고통받지 말라고.",date:"2025년 12월 15일",tags:["React","Zustand","JavaScript","Closure","State Management"],cover:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:it("React × Zustand × Closure stale closure 방지 전략 기술")},{id:"js-basic",slug:"js-basic",title:'JS 기본 동작원리, "진짜 뼈대"만 잡아보기',excerpt:"비동기 개념을 계속 외우기만 했다면, 이번엔 뼈대부터 잡자. Heap/Call Stack이 무엇이고, JS가 왜 싱글 스레드인지, 비동기는 누가 처리하는지(Web APIs/Node APIs), 그리고 Task Queue vs Microtask Queue가 실행 순서를 어떻게 갈라놓는지. 딱 이 흐름만 머리에 넣으면 async/await도 결국 같은 얘기라는 걸 이해하게 된다.",date:"2025년 12월 5일",tags:["JavaScript","기초","동작원리"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:it("JS 기본 동작원리, “진짜 뼈대”만 잡아보기")},{id:"react-trigger-optimization",slug:"react-realtime-trigger-optimization",title:"React 실시간 Trigger 처리 최적화 삽질기",excerpt:"실시간 이벤트 들어올 때 UI가 뚝뚝 끊기길래, WebWorker부터 throttle까지 별짓 다 해봤습니다. 근데 결국… 가장 단순한 방법이 이겼습니다. 내 삽질의 역사 공유합니다.",date:"2025년 11월 28일",tags:["React","Performance","WebWorker","Optimization"],cover:"https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:it("React 실시간 Trigger 처리 최적화 삽질기")},{id:"web-fundamentals",slug:"what-is-web",title:"웹(Web)이란 도대체 뭘까?",excerpt:"HTML/CSS/JS는 아는데 ‘그래서 웹이 어떻게 화면이 되는 건데?’ 하고 멈춰본 적 있나요? 저도 그래서 한 번 아주 기초부터 갈아엎고 정리해봤습니다. 웹의 원리 이해하면 프론트가 더 잘 보임.",date:"2025년 10월 20일",tags:["Web","HTTP","Browser","Fundamentals"],cover:"https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:it("웹(Web)이란 도대체 뭘까")},{id:"closure-deep-dive",slug:"what-is-closure",title:"클로저란 당최 무엇인가",excerpt:"면접만 가면 꼭 나오는 게 클로저인데… 정작 설명하려면 머릿속이 하얘지는 그 개념. 그래서 빡쳐서(?) 제대로 다시 정리했습니다. 이 글 읽고 나면 최소한 면접에서 우는 일은 없습니다.",date:"2025년 9월 15일",tags:["JavaScript","Closure","Scope","Fundamentals"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:it("클로저란 당최 무엇인가")},{id:"currying",slug:"what-is-currying",title:"커링?? 컬링도 아니고 이게뭐누",excerpt:"커링 처음 보면 ‘이걸 왜 씀?’ 싶은데, 막상 알아두면 코드가 맘 편해지는 순간이 옵니다. 이 글은 커링을 드디어 사람 언어로 설명해본 글입니다. 예제 많음. 자존감 지킴.",date:"2025년 8월 25일",tags:["JavaScript","Functional Programming","Currying"],cover:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:it("커링 컬링도 아니고 이게뭐누")},{id:"react-library-ci-cd",slug:"react-library-test-ci-cd",title:'React 라이브러리 만들고 "테스트 + CI + 자동 배포" 붙이기',excerpt:"npm 배포 한 번 해보겠다고 시작했다가 GitHub Actions, semantic-release, 토큰 지옥까지 거쳐온 이야기. 진짜 별별 오류 다 봄. 그래도 자동 배포 되면 감동합니다. (눈물)",date:"2025년 12월 10일",tags:["React","Library","Testing","CI/CD","npm"],cover:"https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:it("React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기")},{id:"js-event-loop-part1",slug:"js-event-loop-understanding-part1",title:"JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)",excerpt:"비동기 헷갈리는 사람들 99%가 ‘레이어 구분’을 안 해서 그렇습니다. 엔진 / 런타임 / 브라우저 구분하면 진짜 다 이해됩니다. 나도 이거 알기 전엔 async/await이랑 싸움 중이었음.",date:"2025년 6월 18일",tags:["JavaScript","Event Loop","Asynchronous","Architecture"],cover:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:it("JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)")},{id:"browser-rendering-part2",slug:"browser-js-rendering-mechanism-part2",title:"브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)",excerpt:"브라우저는 생각보다 훨씬 복잡합니다. 렌더링 파이프라인 보면 ‘아 그래서 리렌더링이 느렸구나…’ 하고 현타 오는 그 글. 성능 최적화 힌트도 같이 담겨있음.",date:"2025년 6월 20일",tags:["Browser","Rendering","JavaScript","Performance"],cover:"https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:it("브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)")},{id:"frontend-ddd-fsd",slug:"frontend-ddd-fsd-domain-slice",title:"프론트엔드에서 DDD와 FSD, 그리고 '도메인 슬라이스' 아키텍처",excerpt:"프로젝트가 커질수록 파일이 정신없어지는 이유, 사실 구조 때문입니다. DDD/FSD를 프론트에 맞게 해석해서 ‘아 이래서 구조가 필요한 거구나’ 감이 오도록 써본 글.",date:"2025년 5월 15일",tags:["Architecture","DDD","FSD","Frontend","Design Pattern"],cover:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:it("프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처")},{id:"ai-era-maintenance",slug:"ai-era-code-maintenance",title:'AI 시대, "유지보수도 AI가 하면 되지 않나요?"라는 말에 대하여',excerpt:"‘AI가 코드도 짜주는데 유지보수도 하겠지?’라는 말을 들었는데… 현실은 전혀 다릅니다. AI가 잘하는 것과 진짜 사람이 해야 하는 일이 뭐가 다른지 정리한 글. 약간 분노도 섞여 있음.",date:"2026년 1월 1일",tags:["AI","Software Engineering","Maintenance","Opinion"],cover:"https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:it("AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여")}],et=[...Uv].sort((t,a)=>{const l=c=>{const f=c.match(/(\d+)년\s*(\d+)월\s*(\d+)일/);if(f){const[,m,p,h]=f;return new Date(parseInt(m),parseInt(p)-1,parseInt(h))}return new Date(0)},u=l(t.date);return l(a.date).getTime()-u.getTime()}),Bv="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5 w-full",Hv="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",qv="text-[20px] font-semibold tracking-[0.02em]",Iv="text-[13px] text-fg-muted leading-relaxed cursor-pointer",Vv=()=>[...et].sort(()=>Math.random()-.5).slice(0,2),Fv=()=>{const t=Ja(),[a]=D.useState(Vv),l=s=>{t(`/blog/${s}`)},u=()=>{t("/blog")};return g.jsxs("section",{id:"experience",className:"mb-14",children:[g.jsx("div",{className:Bv,children:g.jsxs("div",{className:"w-full",children:[g.jsx("p",{className:Hv,children:"Blog"}),g.jsxs("div",{className:"w-full flex justify-between",children:[g.jsx("h2",{className:qv,children:"기술 블로그"}),g.jsx("p",{className:Iv,onClick:u,children:"포스팅 전체 보기 →"})]})]})}),g.jsx("div",{className:"grid gap-6",children:a.map(s=>g.jsx("article",{onClick:()=>l(s.slug),role:"button",tabIndex:0,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&l(s.slug)},className:"group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle) cursor-pointer transition-colors hover:border-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent)/40",children:g.jsxs("div",{className:"grid md:grid-cols-[240px_1fr] md:h-[200px]",children:[s.cover&&g.jsxs("div",{className:"relative h-[180px] md:h-[200px] bg-(--bg-soft)",children:[g.jsx("img",{src:s.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/55 via-black/15 to-transparent"})]}),g.jsxs("div",{className:"p-6 md:overflow-hidden",children:[g.jsx("h3",{className:"text-[20px] font-semibold leading-snug mb-2",children:s.title}),g.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2",children:s.excerpt}),g.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.tags.slice(0,8).map(c=>g.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",children:c},c))}),g.jsx("div",{className:"flex items-center justify-between text-[12px] text-fg-muted",children:g.jsx("span",{children:s.date})})]})]})},s.id))})]})};function Gv(t){return new Worker("/portfolio/assets/fibWorker-cslZksJc.js",{name:t?.name})}const Yv="rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-transform transition-shadow transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.5)] hover:border-white/20 [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] [html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",Pv="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5",Xv="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",Jv="text-[20px] font-semibold tracking-[0.02em]",Qv="text-[13px] text-fg-muted leading-relaxed",Zv="text-[11px] px-2.5 py-1 rounded-full border border-(--border-subtle) text-fg-muted",Kv=()=>{const[t,a]=D.useState(null),[l,u]=D.useState(null),[s,c]=D.useState(!1),[f,m]=D.useState(0),p=D.useRef(null);D.useEffect(()=>{const b=new Gv;return p.current=b,b.onmessage=x=>{a(x.data.result),u(x.data.time),c(!1)},()=>{p.current?.terminate(),p.current=null}},[]),D.useEffect(()=>{let b;const x=()=>{m(S=>(S+2)%360),b=requestAnimationFrame(x)};return b=requestAnimationFrame(x),()=>cancelAnimationFrame(b)},[]);const h=()=>{p.current&&(c(!0),a(null),u(null),p.current.postMessage({type:"CALCULATE_FIBONACCI",number:45}))};return g.jsxs("section",{id:"lab",className:"mb-14",children:[g.jsxs("div",{className:Pv,children:[g.jsxs("div",{children:[g.jsx("p",{className:Xv,children:"Web Worker Lab"}),g.jsx("h2",{className:Jv,children:"스레드 분리 실험"})]}),g.jsx("p",{className:Qv,children:"무거운 계산을 Worker로 분리하여 메인 스레드(UI)를 보호합니다."})]}),g.jsx("div",{className:Yv,children:g.jsxs("div",{className:"grid items-center gap-5 md:grid-cols-2",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[g.jsx("h3",{className:"text-[15px] font-medium",children:"Fibonacci Calculator"}),g.jsx("span",{className:Zv,children:"Worker Thread"})]}),g.jsxs("p",{className:"text-[13px] text-fg-muted leading-[1.7] mb-5",children:["'계산 시작'을 누르면"," ",g.jsx("strong",{children:"DP가 아닌 피보나치 수열(45번째)"}),"을 계산합니다. 메인 스레드였다면 화면이 멈췄겠지만, Web Worker 덕분에 우측 애니메이션은 멈추지 않습니다."]}),g.jsx("button",{onClick:h,disabled:s,className:"w-full inline-flex items-center justify-center gap-2 text-[13px] px-4 py-2.5 rounded-full border border-(--border-subtle) bg-(--bg-elevated) text-fg enabled:hover:bg-(--bg-soft) enabled:hover:border-white/20 enabled:hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",children:s?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"inline-flex h-4 w-4 items-center justify-center",children:g.jsx("span",{className:"h-3 w-3 rounded-full border border-current border-t-transparent animate-spin"})}),g.jsx("span",{children:"계산 중..."})]}):"▶ 무거운 계산 시작 (Fib 45)"})]}),g.jsxs("div",{className:"relative flex flex-col items-center justify-center min-h-[160px] h-full rounded-2xl border border-(--border-subtle) bg-(--bg) px-5 py-4 overflow-hidden",children:[g.jsx("div",{className:"absolute top-3 right-3 text-[10px] text-fg-muted",children:"Main Thread UI"}),g.jsx("div",{className:"w-6 h-6 rounded-md mb-3 bg-[linear-gradient(135deg,var(--fg),var(--fg-muted))]",style:{transform:`rotate(${f}deg)`}}),g.jsx("span",{className:"text-[11px] text-fg-muted",children:"▲ UI Frame (Always Running)"}),g.jsx("div",{className:"w-full h-px my-4 bg-(--border-subtle)"}),g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"text-[11px] text-fg-muted",children:"Result (Fib 45)"}),g.jsx("div",{className:"text-[24px] font-semibold my-1",children:t!==null?t.toLocaleString():"-"}),g.jsx("div",{className:"text-[10px] text-fg-muted",children:l!==null?`Time: ${l.toFixed(1)}ms`:"-"})]})]})]})})]})},Wv={id:"gdsc-1st-team-lead-ai-project",title:"Google Developer Student Clubs (GDSC) 1기 팀장",subTitle:"AI 분리수거 리워드 앱 개발 (팀장)",period:["2022.09","2023.08"],mainContent:["GDSC 1기 멤버이자 팀장으로서 Flutter, TensorFlow, Firebase를 활용한 AI 분리수거 리워드 앱 개발 프로젝트 주도.","3개월 단기 프로젝트의 성공을 위해 기획 단계에서 기능 우선순위를 명확히 선정하고, 일정 및 리스크를 면밀히 관리.","TensorFlow 기반 이미지 분류 모델 학습을 수행하고 모바일 환경에 맞춰 최적화.","Firebase를 활용하여 실시간 데이터베이스 연동 및 리워드 시스템 백엔드 기능 구현.","프론트엔드부터 AI 모델 서빙까지 전체적인 엔드투엔드(End-to-End) 시스템을 설계하고 운영."],result:"국내 50개 팀 중 8위달성, 전사적 시스템의 전략적 설계 및 통합 운영 역량 강화.",tags:["GDSC","Team Lead","Project Manager","AI/ML","Flutter","TensorFlow","Firebase","Agile","Git"],type:"activity"},$v=Object.freeze(Object.defineProperty({__proto__:null,gdscActivity:Wv},Symbol.toStringTag,{value:"Module"})),eS={id:"ics-lab-research-tor-vpn",title:"ICS Lab 자기주도연구 (교내활동)",subTitle:"Tor와 VPN의 익명성 메커니즘 비교 및 다크웹 포렌식 기법 연구",period:["2024.03","2024.06"],mainContent:["Tor와 VPN의 암호화 프로토콜 및 익명성 메커니즘을 심층적으로 비교 분석.","다크웹 환경에서의 사용자 행위 추적 한계점을 파악하고 기술적 난제를 식별.","네트워크 트래픽, 메모리, 시스템 로그 분석을 통합한 실질적인 포렌식 기법 설계.","실제 환경과 유사한 시나리오를 구축하여 설계한 포렌식 기법의 유효성을 검증.","네트워크 보안 및 디지털 포렌식 분야에 기여하며 문제 해결 능력과 독립적인 연구 수행 역량을 향상."],result:"Tor와 VPN의 익명성 차이를 명확히 규명 및 다크웹 사용자 행위 추적을 위한 실질적 포렌식 기법 논문 작성.",tags:["Research","Security","Forensics","Darkweb","Network"],type:"activity"},nS=Object.freeze(Object.defineProperty({__proto__:null,icsLabActivity:eS},Symbol.toStringTag,{value:"Module"})),tS={id:"samteo-night-school-vp",title:"봉사 중앙 동아리 샘터야학 (부회장)",subTitle:"야학 봉사 중앙 동아리 샘터야학 (부회장)",period:["2022.09","2024.08"],mainContent:["지역사회 어르신 대상 기초 국어, 수학, 영어 검정고시반 운영 및 수업 봉사 진행 (총 2년 활동).","2023년부터 부회장직을 수행하며 동아리 운영, 기획, 홍보 전반을 총괄.","체계적인 수업 커리큘럼을 구성하고 신규 봉사자 교육을 주도하여 수업 질 향상.","동아리원들의 협력을 유도하고 어르신 맞춤형 학습 지원을 통해 성공적인 운영 견인.","조직 관리 및 기획 경험을 통해 실질적인 리더십과 조직 운영 능력을 발전."],result:"교내 동아리 콘테스트 금상 수상, VMS 우수 지역사회 봉사단 선정(2023.06).",tags:["Volunteering","Education","Club","Leadership","Management"],type:"activity"},rS=Object.freeze(Object.defineProperty({__proto__:null,samteoActivity:tS},Symbol.toStringTag,{value:"Module"})),lS={id:"whois-mentor-cl123",title:"Whois 정보보안 소학회 (멘토)",subTitle:"사이버보안학과 내 정보보안 소학회 (멘토)",period:["2019.03","2024.08"],mainContent:["1학년부터 Whois 정보보안 소학회 회원으로 활동하며 웹 프로그래밍, C 언어, 자료구조 스터디에 참여.","3학년부터는 '멘토'로 참여하여 후배 대상 보안 및 개발 관련 교육을 주도적으로 진행.","5년 6개월간 회원 → 멘토로 성장하며 보안 교육 주도","체계적인 커리큘럼 설계와 실습 중심 교육 방식을 도입하여 후배들의 이해도와 학습 효과를 크게 향상."],result:"기술적인 전문성 향상뿐만 아니라, 멘토로서의 리더십과 교육 능력 발전.",tags:["Security","Mentoring","Club","Education","Leadership"],type:"activity"},aS=Object.freeze(Object.defineProperty({__proto__:null,whoisMentorActivity:lS},Symbol.toStringTag,{value:"Module"})),iS={id:"likelion-11th-scrum-master",title:"멋쟁이 사자처럼 11기 (스크럼 마스터)",subTitle:"React.js 및 Flutter WebView 활용 일정 관리 앱 개발 (스크럼 마스터)",period:["2023.03","2023.09"],mainContent:["멋쟁이 사자처럼 11기 멤버로 활동하며 React.js와 Flutter WebView를 활용한 일정 관리 애플리케이션 제작 프로젝트 참여.","프로젝트 개발 과정에 스크럼(Scrum) 애자일 방법론을 적극적으로 적용.","스크럼 마스터 역할을 맡아 전반적인 프로젝트 관리(일정, 이슈 조율)와 팀워크 강화를 주도.","멘토링을 통해 스크럼 마스터로서 효과적인 스프린트 계획 및 실행 방법에 대한 실무적 인사이트를 학습하고 적용."],result:"스크럼 마스터 경험을 통해 프로젝트 관리 능력 및 팀워크 역량 강화, 애자일 스크럼 프로세스에 대한 실무적 이해를 증진.",tags:["Like Lion","Club","Project Development","Scrum Master","Agile","React.js","Flutter","Teamwork"],type:"activity"},uS=Object.freeze(Object.defineProperty({__proto__:null,likelionActivity:iS},Symbol.toStringTag,{value:"Module"})),sS={id:"cyber-security-student-council-director",title:"사이버보안학과 학생회 (집행국장)",subTitle:"사이버보안학과 학생회",period:["2022.09","2023.12"],mainContent:["사이버보안학과 학생회 `Cloud`의 집행국장으로서 학과 내 주요 행사 및 학습 커뮤니티 운영을 기획하고 실행.","SW 교육과 IT 트렌드 공유를 위한 스터디 프로그램을 직접 기획 및 운영.","학우들의 요구사항을 면밀히 조사하여 다양한 학습 스타일과 참여 가능 시간을 고려한 커리큘럼 설계 및 조율을 주도.","단순 행사를 넘어 세미나 등 참여 중심의 운영과 피드백 기반의 개선 활동을 주기적으로 수행.","다른 학생회원들과의 협력 과정에서 의견 조율, 역할 분담, 갈등 완화 등 리더십을 발휘."],result:"후배와 학우들의 학습 성장을 이끌며 학생회 목표 설정 및 강점 활용 역할 배분으로 조직 주도, 프로젝트 기획 및 이해관계자간 조율 역량을 향상.",tags:["Student Council","Leadership","Planning","Communication","Management","Community"],type:"activity"},oS=Object.freeze(Object.defineProperty({__proto__:null,studentCouncilActivity:sS},Symbol.toStringTag,{value:"Module"})),cS="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",fS={"trouble-shooting":"text-red-400 border-red-400/30",learning:"text-blue-400 border-blue-400/30",achievement:"text-green-400 border-green-400/30","side-project":"text-purple-400 border-purple-400/30",activity:"text-yellow-400 border-yellow-400/30"},dS={"trouble-shooting":"Trouble Shooting",learning:"Learning",achievement:"Achievement","side-project":"Side Project",activity:"Activity"},_p=({activity:t,isActive:a})=>g.jsx("article",{className:"w-full min-h-[320px] flex flex-col","aria-hidden":!a,children:g.jsxs("div",{className:"w-full flex-1 px-5 py-5 md:px-7 md:py-6 flex flex-col justify-between",children:[g.jsxs("div",{className:"flex w-full flex-col gap-3",children:[g.jsxs("div",{className:"flex w-full justify-between items-center gap-2",children:[g.jsx("span",{className:`inline-flex items-center text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${fS[t.type]}`,children:dS[t.type]}),g.jsx("span",{className:`hidden md:inline-block px-3 py-1 rounded-full\r
                         border border-(--border-subtle) bg-(--bg-soft)\r
                         text-[11px] text-fg-muted`,children:t.period.join(" ~ ")})]}),g.jsx("h3",{className:"text-[18px] md:text-[19px] font-semibold text-fg leading-snug",children:t.title}),g.jsx("p",{className:"text-[12px] md:text-[13px] text-fg-muted",children:t.subTitle}),g.jsx("div",{className:"text-[13px] text-fg-muted leading-[1.7]",children:g.jsx("ul",{className:"space-y-1.5",children:t.mainContent.map((l,u)=>g.jsxs("li",{className:"flex",children:[g.jsx("span",{className:"mt-[3px] mr-1 text-[10px]",children:"•"}),g.jsx("span",{children:l})]},u))})}),t.result&&g.jsx("p",{className:"text-[12px] md:text-[13px] text-green-400",children:t.result}),g.jsx("div",{className:"flex flex-wrap gap-1.5",children:t.tags.map(l=>g.jsx("span",{className:cS,children:l},l))})]}),t.link&&g.jsx("div",{className:"mt-3",children:g.jsxs("a",{href:t.link.href,target:"_blank",rel:"noreferrer",className:`inline-flex items-center gap-1 text-[12px] text-fg-muted\r
                         hover:text-fg transition-colors duration-200`,children:[g.jsx("span",{children:t.link.label}),g.jsx("span",{children:"↗"})]})})]})}),Nu=({isActive:t,isPaused:a,duration:l,size:u=16,strokeWidth:s=2})=>{const c=(u-s)/2,f=2*Math.PI*c;return g.jsxs("div",{className:"relative flex items-center justify-center",style:{width:u,height:u},children:[g.jsx("svg",{className:"absolute",width:u,height:u,style:{transform:"rotate(-90deg)"},children:g.jsx("circle",{cx:u/2,cy:u/2,r:c,fill:"none",className:"stroke-(--border-subtle)",strokeWidth:s,opacity:.4})}),g.jsx("svg",{className:"absolute",width:u,height:u,style:{transform:"rotate(-90deg)"},children:g.jsx("circle",{cx:u/2,cy:u/2,r:c,fill:"none",className:"stroke-(--accent)",strokeWidth:s,strokeLinecap:"round",style:{strokeDasharray:f,strokeDashoffset:t?0:f,transition:t?`stroke-dashoffset ${l}ms linear`:"stroke-dashoffset 0ms",animationPlayState:a?"paused":"running"}})}),g.jsx("span",{className:["w-2 h-2 rounded-full","transition-all duration-200 ease-out",t?"bg-(--accent)":"bg-(--bg-elevated) border border-(--border-subtle)"].join(" ")})]})},dc=4e3,Dp=500,hS=Object.assign({"./data/GDSC/index.ts":$v,"./data/ICSLab/index.ts":nS,"./data/Samtor/index.ts":rS,"./data/Whois/index.ts":aS,"./data/lion/index.ts":uS,"./data/majorClub/index.ts":oS}),Ma=Object.values(hS).map(t=>t.default??Object.values(t)[0]),mS="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-3",pS="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",gS="text-[20px] font-semibold tracking-[0.02em]",xS=()=>{const[t,a]=D.useState(0),[l,u]=D.useState(!0),[s,c]=D.useState(!1),[f,m]=D.useState(!1),p=D.useRef(null),h=D.useRef(null),b=D.useRef(0),x=D.useRef(0),S=Ma.length;D.useEffect(()=>{const _=()=>{typeof window>"u"||m(window.innerWidth<1e3)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const v=D.useCallback(()=>{a(_=>(_+1)%S)},[S]),C=D.useCallback(()=>{a(_=>(_-1+S)%S)},[S]),O=D.useCallback(_=>{a(_),u(!1),setTimeout(()=>u(!0),3e3)},[]);D.useEffect(()=>{if(!l||s){h.current&&(clearInterval(h.current),h.current=null);return}return h.current=setInterval(()=>{v()},dc),()=>{h.current&&clearInterval(h.current)}},[l,s,v]),D.useEffect(()=>{const _=K=>{K.key==="ArrowLeft"?C():K.key==="ArrowRight"&&v()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[v,C]);const z=_=>{b.current=_.touches[0].clientX},j=_=>{x.current=_.touches[0].clientX},H=()=>{if(!b.current||!x.current)return;const _=b.current-x.current;Math.abs(_)>50&&(_>0?v():C()),b.current=0,x.current=0};return g.jsxs("section",{id:"activity",className:"mb-13",children:[g.jsx("div",{className:mS,children:g.jsxs("div",{children:[g.jsx("p",{className:pS,children:"Activity"}),g.jsx("h2",{className:gS,children:"대외 활동"})]})}),f?g.jsxs("div",{className:"flex flex-col gap-6",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[g.jsx("div",{ref:p,className:"w-full overflow-hidden",onTouchStart:z,onTouchMove:j,onTouchEnd:H,children:g.jsx("div",{className:`\r
                flex w-full\r
                transition-transform\r
                duration-700\r
                ease-[cubic-bezier(0.22,0.61,0.36,1)]\r
                will-change-transform\r
              `,style:{transform:`translate3d(-${t*100}%, 0, 0)`},children:Ma.map((_,K)=>g.jsx("div",{className:"w-full shrink-0 flex justify-center px-3",children:g.jsx("div",{className:"w-full max-w-3xl rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) shadow-[0_14px_34px_rgba(0,0,0,0.32)] [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)]",children:g.jsx(_p,{activity:_,isActive:K===t})})},_.id))})}),g.jsxs("div",{className:"relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]",children:[g.jsx("div",{className:"h-px w-full max-w-3xl bg-(--border-subtle) opacity-70"}),g.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6",children:Ma.map((_,K)=>{const re=K===t;return g.jsxs("button",{type:"button",className:"relative flex flex-col items-center outline-none cursor-pointer shrink-0",onMouseEnter:()=>O(K),onClick:()=>O(K),"aria-label":`${_.title}로 이동`,children:[g.jsx("span",{className:["mb-1 h-[3px] w-5 sm:w-7 rounded-full","bg-(--border-subtle)",re?"animate-border-pulse":"opacity-40"].join(" ")}),g.jsx(Nu,{isActive:re,isPaused:s||!l,duration:dc,size:16,strokeWidth:2}),g.jsx("span",{className:"mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-[80px] text-center line-clamp-2",children:_.subTitle})]},_.id)})})]})]}):g.jsxs("div",{className:"flex flex-col md:flex-row gap-8",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[g.jsx("div",{className:"w-64 shrink-0",children:g.jsxs("div",{className:"relative py-4",style:{height:Dp},children:[g.jsx("div",{className:"absolute left-[19px] top-4 bottom-4 w-px bg-(--border-subtle) opacity-70"}),g.jsx("div",{className:"relative h-full flex flex-col justify-evenly",children:Ma.map((_,K)=>{const re=K===t;return g.jsxs("button",{type:"button",className:"relative flex items-center gap-4 outline-none cursor-pointer group/point text-left pl-1",onMouseEnter:()=>O(K),onClick:()=>O(K),"aria-label":`${_.title}로 이동`,children:[g.jsxs("div",{className:"relative z-10 flex items-center justify-center w-8 h-8 shrink-0",children:[re&&g.jsx("div",{className:"absolute inset-0 bg-blue-500/10 rounded-full blur-sm"}),g.jsx(Nu,{isActive:re,isPaused:s||!l,duration:dc,size:18,strokeWidth:2})]}),g.jsx("div",{className:"flex flex-col",children:g.jsx("span",{className:["text-[13px] font-medium transition-colors duration-200",re?"text-fg":"text-fg-muted group-hover/point:text-fg-subtle"].join(" "),children:_.subTitle})})]},_.id)})})]})}),g.jsx("div",{ref:p,className:"flex-1 w-full overflow-hidden",style:{height:Dp},children:g.jsx("div",{className:`\r
                flex flex-col \r
                h-full w-full\r
                transition-transform \r
                duration-700 \r
                ease-[cubic-bezier(0.22,0.61,0.36,1)]\r
                will-change-transform\r
              `,style:{transform:`translate3d(0, -${t*100}%, 0)`},children:Ma.map((_,K)=>g.jsx("div",{className:"h-full w-full shrink-0 flex items-center justify-center",children:g.jsx("div",{className:"w-full max-h-full overflow-y-auto rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) shadow-[0_14px_34px_rgba(0,0,0,0.32)] [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)]",children:g.jsx(_p,{activity:_,isActive:K===t})})},_.id))})})]})]})},bS="/portfolio/assets/banner-DP2kVVDA.png",yS={id:"llm-lstm-bert",banner:bS,title:"리뷰 왓수다 (감성 분석 & 평점 예측)",subTitle:"리뷰 왓수다",subtitle:"SNS/포털 영화 리뷰 감성 분석 및 평점 예측 AI 서비스",summary:"자연어 처리(NLP)와 딥러닝(LSTM/BERT)을 활용하여 텍스트 리뷰의 감성을 분석하고 평점을 예측하는 AI 모델을 개발했습니다. 정형화되지 않은 SNS 리뷰 데이터의 가치를 재발견했습니다.",tags:["Python","TensorFlow","KoNLPy","BERT","Selenium"],links:[{label:"Github",href:"#"},{label:"Demo",href:"#"}],period:"2022.09 – 2022.12",team:"AI Developer 2명, Data Analyst 1명",overview:"단순 별점만으로는 알 수 없는 구체적인 영화 평가를 분석하기 위해 시작된 프로젝트입니다. 네이버 영화 리뷰뿐만 아니라 유튜브, 인스타그램 등 평점 시스템이 없는 SNS의 텍스트 리뷰를 크롤링하여, LSTM과 BERT 모델을 통해 감성(긍정/부정)을 분류하고 예상 평점을 도출하는 시스템을 구축했습니다.",why:[{title:"Why NLP? (KoNLPy & Okt)",desc:"한글은 조사와 어미가 발달한 교착어이므로, 단순 띄어쓰기 기준 토큰화로는 의미 파악이 어렵습니다. 형태소 분석기(Okt)를 도입하여 불용어를 제거하고 실질 형태소만 추출함으로써 모델의 학습 효율을 극대화했습니다."},{title:"Why Hybrid Model? (LSTM & BERT)",desc:"순차적 데이터 처리에 강한 LSTM으로 가벼운 초기 모델을 구축하고, 문맥 양방향 이해도가 높은 BERT(KoBERT)를 도입하여 복잡한 구어체 리뷰의 감성 분류 정확도를 높이는 비교 연구를 수행했습니다."}],role:{percentage:"40% (Data Engineering & Model Training)",tasks:["데이터 파이프라인 구축: Selenium을 활용한 네이버 영화/SNS 리뷰 크롤링 및 CSV 데이터셋(200,000+) 구축","데이터 전처리(Preprocessing): 중복/결측치 제거, 정규 표현식을 이용한 특수문자 정제, KoNLPy 활용 형태소 분석 및 불용어 처리","LSTM 모델 설계 및 학습: Keras Tokenizer를 이용한 정수 인코딩, Padding 처리, 임베딩 레이어 및 LSTM 레이어 구성","성능 최적화: 리뷰 길이 분포 분석을 통한 최적 max_len 설정, 과적합(Overfitting) 방지를 위한 Dropout 및 Early Stopping 적용"]},troubleshooting:[{title:"데이터 불균형으로 인한 예측 편향(Bias) 문제 해결",problem:"초기 모델 학습 시, 긍정 리뷰(평점 8~10점)가 압도적으로 많아 모델이 무조건 '긍정'으로 예측하는 경향(Overfitting) 발생.",cause:"영화 리뷰 데이터 특성상 고평점 리뷰가 저평점보다 3배 이상 많은 'Class Imbalance' 상태였음.",solution:"Oversampling(SMOTE) 대신 데이터의 현실성을 유지하기 위해 Undersampling 기법을 적용하여 라벨별 비율을 1:1로 맞추고, 평점 구간을 1~10에서 1~5로 축소(Binning)하여 클래스 간 경계를 명확히 함.",learning:"모델의 아키텍처만큼이나 '데이터의 질과 분포'가 성능에 결정적인 영향을 미친다는 것을 체감함."},{title:"OOV(Out-Of-Vocabulary) 문제와 임베딩 품질 저하",problem:"신조어나 오타가 많은 SNS 리뷰 특성상, 학습된 단어 사전에 없는 단어(OOV)가 많아 모델의 정확도가 떨어짐.",cause:"기존 형태소 분석기 사전이 최신 인터넷 용어(예: '존잼', '노잼', '핵노잼')를 제대로 인식하지 못함.",solution:"Soynlp와 같은 비지도 학습 기반 토크나이저를 검토했으나, 데이터양의 한계로 사용자 지정 사전(User Dictionary)에 빈도수 높은 신조어를 수동으로 추가하여 형태소 분석기의 커버리지를 넓힘.",learning:"도메인 특화 데이터(SNS 리뷰)를 다룰 때는 범용 라이브러리에만 의존하지 않고, 데이터 특성에 맞는 전처리 커스터마이징이 필수적임을 배움."}],results:["LSTM 모델 정확도 85% 달성 (기존 베이스라인 대비 15% 향상)","평점 없는 SNS 텍스트 리뷰를 1~5점 척도로 정량화하는 모델 구축","비정형 데이터(댓글)의 시각화를 통해 영화 마케팅 인사이트 도출 가능성 확인"],images:[]},vS=Object.freeze(Object.defineProperty({__proto__:null,llmProject:yS},Symbol.toStringTag,{value:"Module"})),SS="/portfolio/assets/banner-CHMNdFhc.png",kS={id:"mogang",banner:SS,title:"모강(SW 강의용 다나와 서비스)",subTitle:"모강",subtitle:"SW 강의용 다나와 서비스 (강의 비교 플랫폼)",summary:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위해 1000+개의 강의 데이터를 수집·비교하는 플랫폼입니다. 2024학년도 후배들을 대상으로 배포하여 50+명의 긍정적인 반응을 얻었습니다.",tags:["Next.js","TypeScript","SSR","Styled-Components"],links:[{label:"Github",href:"#"}],period:"2023.9 ~ 2024.03",team:"Frontend 1명, Backend 1명, 기획 2명, Designer 1명",overview:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위한 'SW 강의용 다나와' 서비스입니다. 1000개 이상의 방대한 강의 데이터를 효율적으로 처리하고 비교하기 위해 Next.js(SSR)를 도입했습니다. 실제 교내 후배들을 대상으로 서비스를 제공하여 50명 이상의 유저로부터 긍정적인 피드백을 도출했습니다.",why:[{title:"Why Next.js? (SSR 도입)",desc:"1000개 이상의 강의 데이터를 처리하는 데 있어 클라이언트 사이드 렌더링(CSR)보다 서버 사이드 렌더링(SSR) 방식이 초기 로딩 속도와 검색 엔진 최적화(SEO) 측면에서 효율적이라 판단했습니다."},{title:"성장과 학습",desc:"CSR과 SSR의 차이를 이론을 넘어 직접 구현하며 비교해보고 싶었습니다. SSR이 모던 웹의 주요 렌더링 방식으로 떠오름에 따라, 기존 React 기반 지식과 비교하며 기술적 성장을 이루고자 했습니다."}],role:{percentage:"100% (Frontend Lead)",tasks:["Next.js 기반 SSR 아키텍처 설계: 초기 페이지 SSR 렌더링으로 SEO 및 LCP(Largest Contentful Paint) 최적화","SEO 및 성능 최적화: getServerSideProps, next/head 활용 메타 태그 동적 구성, Code Splitting(dynamic import) 및 next/image로 Lighthouse 90점+ 달성","추천 알고리즘 기반 렌더링: 유저 프로필/로그 기반 추천 리스트 UI 구현 및 Context API를 활용한 전역 상태 관리로 Props Drilling 해결","UI/UX 고도화: Atomic Design 패턴 일부 도입으로 컴포넌트 재사용성 강화, Skeleton UI 및 Framer-Motion 애니메이션 적용","반응형 웹 및 크로스 브라우징: Styled-Components 활용, viewport-units-buggyfill로 모바일(iOS/Android) 뷰포트 이슈 해결"]},troubleshooting:[{title:"무한 스크롤 중복 호출(Race Condition) 이슈 해결",problem:"스크롤이 하단에 도달할 때 데이터 로딩 중임에도 fetchNextPage()가 중복 호출되어, 불필요한 API 요청과 UI 중복 렌더링 발생. 특히 네트워크가 느리거나 Skeleton UI가 작을 때 심화됨.",cause:"react-infinite-scroll-component 라이브러리의 내부 스크롤 이벤트 감지 속도가 상태 업데이트(loading state)보다 빨라, 로딩 상태가 true로 변하기 전에 이벤트가 다시 트리거되는 Race Condition 발생.",solution:"1차로 isLoading 플래그를 도입해 중복 실행을 Guard Clause로 차단하고, 2차로 IntersectionObserver를 직접 구현하여 DOM 요소의 가시성(Visibility)을 정밀하게 감지하는 방식으로 제어권을 확보.",learning:"라이브러리에 의존하기보다 내부 동작 원리(DOM 감지 등)를 이해하는 것이 중요함을 깨달음. 비동기 상태 관리 시 Race Condition 위험을 인지하고 IntersectionObserver를 직접 다루며 제어 경험을 쌓음."}],results:["2023년 창업 동아리 캡스톤 디자인 평가 5위 (전체 25개 팀 중)","교내 소학회 내 소스코드 오픈 및 웹 개발 스터디 교재로 활용 (지식 공유)","실제 후배 50+명 대상 베타 테스트 진행 및 긍정적 반응 도출"],images:[]},wS=Object.freeze(Object.defineProperty({__proto__:null,mogangProject:kS},Symbol.toStringTag,{value:"Module"})),CS="/portfolio/assets/banner-DIUHLUxm.png",TS={id:"p2p-service",banner:CS,title:"Multi-Client FTP Server",subTitle:"P2P Service",subtitle:"리눅스 시스템 콜 기반의 동시성 파일 전송 서버",summary:"C언어와 리눅스 시스템 콜을 직접 활용하여 다중 접속을 지원하는 FTP 서버입니다. Fork 기반 멀티프로세싱과 파일 락(Flock)을 통해 데이터 무결성을 보장하는 동시성 제어를 구현했습니다.",tags:["C","Linux","Socket Programming","System Call","Multi-Processing"],links:[{label:"Github",href:"#"}],period:"2023.09 ~ 2023.12",team:"Individual (100%)",overview:"네트워크 프로그래밍의 핵심인 소켓(Socket)과 리눅스 시스템 콜(System Call)을 깊이 있게 이해하기 위해 시작된 프로젝트입니다. 단순 1:1 전송을 넘어, `fork()`를 활용해 여러 클라이언트가 동시에 접속하여 파일을 업로드/다운로드할 수 있는 환경을 구축했고, 이 과정에서 발생하는 경쟁 상태(Race Condition)를 제어하기 위한 동기화 메커니즘을 설계했습니다.",why:[{title:"Why Low-Level Implementation?",desc:"고수준 라이브러리 없이 `open`, `read`, `write`, `socket` 등 커널 수준의 시스템 콜을 직접 다루며 OS가 I/O와 네트워크를 처리하는 방식을 근본적으로 이해하고자 했습니다."},{title:"Why Multi-Processing?",desc:"단일 프로세스 모델의 한계를 극복하고, 다수의 클라이언트 요청을 병렬적으로 처리하기 위해 `fork()`를 통한 자식 프로세스 생성 방식을 채택하여 독립적인 세션을 보장했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처: TCP/IP 기반의 연결 지향형 통신 구현 (Bind, Listen, Accept, Connect)","동시성 처리 (Concurrency): `fork()` 시스템 콜을 활용한 다중 클라이언트 접속 처리 및 좀비 프로세스 방지(`waitpid`)","동기화 및 무결성: `flock`을 활용한 파일 잠금(Reader/Writer Lock) 메커니즘 구현으로 데이터 손상 방지","프로토콜 설계 및 기능 구현: 로그인 인증, 파일 리스트(ls), 업로드/다운로드, 삭제 등 커스텀 FTP 명령어 처리 로직 개발","예외 처리 및 시그널 핸들링: `SIGINT` 등 시그널 포착을 통한 안전한 서버/클라이언트 종료 처리"]},troubleshooting:[{title:"동시 파일 접근 시 데이터 무결성 훼손 (Race Condition)",problem:"여러 클라이언트가 동시에 같은 파일에 업로드하거나 삭제를 시도할 때, 파일 내용이 뒤섞이거나 손상되는 경쟁 상태가 발생함.",cause:"운영체제 레벨에서 파일 디스크립터에 대한 동시 접근 제어가 기본적으로 보장되지 않아, Critical Section에 대한 보호 장치가 부재했음.",solution:"`flock()` 시스템 콜을 도입하여 파일 접근 시 Advisory Lock을 걸도록 구현. 쓰기 작업 시에는 Exclusive Lock(배타적 잠금)을, 읽기 시에는 Shared Lock(공유 잠금)을 적용하여 동시성을 제어함.",learning:"멀티 프로세스 환경에서 공유 자원(파일) 관리의 중요성과 OS가 제공하는 동기화 도구(Lock)의 동작 원리를 체득함."},{title:"예기치 않은 연결 종료와 좀비 프로세스 이슈",problem:"클라이언트가 강제 종료(`Ctrl+C`)될 때 서버 측의 자식 프로세스가 제대로 회수되지 않고 좀비 프로세스로 남아 리소스를 점유하는 현상.",cause:"부모 프로세스가 자식 프로세스의 종료 상태를 수신(`wait`)하지 않아 프로세스 테이블에 엔트리가 남음.",solution:"`signal(SIGCHLD)` 핸들러를 등록하고, 핸들러 내부에서 `waitpid()`를 비봉쇄(WNOHANG) 모드로 호출하여 종료된 자식 프로세스를 즉시 회수하도록 로직 개선.",learning:"프로세스 생명주기 관리와 시그널(Signal) 처리를 통한 안정적인 데몬(Daemon) 서버 구조의 필요성을 배움."}],results:["다중 클라이언트 환경에서 안정적인 파일 업로드/다운로드/삭제 기능 구현 완료","Flock 적용 후 동시 접근 시 데이터 오염 0건 달성 (무결성 확보)","로그인 보안 및 접근 제어 로직을 통해 기본적인 보안 파일 서버 구축"],images:[]},ES=Object.freeze(Object.defineProperty({__proto__:null,p2pProject:TS},Symbol.toStringTag,{value:"Module"})),AS="/portfolio/assets/banner-h9P_7FQW.png",jS={id:"secure-chat",banner:AS,title:"Secure Chat (보안 채팅 프로그램)",subTitle:"Secure-Chat",subtitle:"Java Socket & RSA/AES 하이브리드 암호화 메신저",summary:"Java 소켓 프로그래밍으로 1:1 통신을 구현하고, RSA 비대칭키로 AES 대칭키를 안전하게 교환하여 도청이 불가능한 보안 채팅 시스템을 구축했습니다.",tags:["Java","Socket","RSA","AES-256","Multi-Thread"],links:[{label:"Github",href:"#"}],period:"2023.03 ~ 2023.06",team:"Individual (100%)",overview:"네트워크 통신의 기초인 소켓(Socket)을 활용해 1:1 채팅 프로그램을 구현하고, 그 위에 보안 계층을 입힌 프로젝트입니다. RSA 공개키 암호화 방식으로 대칭키(AES)를 안전하게 교환(Key Exchange)한 뒤, 실제 대화 내용은 AES-256으로 고속 암호화하여 전송하는 '하이브리드 암호화 시스템'을 직접 설계했습니다.",why:[{title:"Why Hybrid Encryption? (RSA + AES)",desc:"RSA는 보안성이 높지만 연산 속도가 느려 실시간 채팅에 부적합하고, AES는 빠르지만 키 배송(Key Distribution) 보안 문제가 있습니다. 이 둘을 결합해 '키 교환은 RSA, 메시지는 AES'로 처리하는 SSL/TLS의 기본 원리를 구현해보고자 했습니다."},{title:"Why Java Sockets?",desc:"고수준 라이브러리에 의존하지 않고, TCP 연결 수립(3-way handshake)부터 스트림(Stream) 데이터 처리, 스레드 관리까지 네트워크 통신의 로우 레벨 메커니즘을 깊이 있게 이해하기 위해 선택했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처 설계: Server/Client 구조 및 Multi-thread(SendThread, ReceiveThread)를 이용한 양방향 비동기 통신 구현","RSA 키 교환 프로토콜 구현: Server의 공개키(Public Key) 생성 및 배포, Client의 AES 키 암호화 전송 및 Server의 복호화 로직(Key Exchange) 개발","AES-256 메시지 암호화: 대칭키 기반의 실시간 메시지 암호화/복호화 모듈(encryptAES256/decryptAES256) 구현","보안 무결성 검증: 송수신 양측의 평문(Plaintext)과 암호문(Ciphertext) 로그 비교를 통한 기밀성 및 해킹 안전성 검증"]},troubleshooting:[{title:"Socket 입력 스트림의 블로킹(Blocking I/O) 문제 해결",problem:"메시지를 수신하는 동안(readUTF) 스레드가 입력 대기 상태에 빠져, 내가 메시지를 보내고 싶어도(writeUTF) 전송이 불가능해지는 '반이중(Half-duplex)' 현상 발생.",cause:"Java의 기본 InputStream은 블로킹 방식이므로, 단일 스레드에서 송수신을 순차적으로 처리하려다 데드락과 유사한 대기 상태가 됨.",solution:"송신(SendThread)과 수신(ReceiveThread)을 담당하는 스레드를 분리(Multi-threading)하여, 입출력 작업이 서로를 차단하지 않고 독립적으로 수행되도록 아키텍처를 재설계함.",learning:"네트워크 I/O 처리 시 스레드 분리의 필요성과 동시성(Concurrency) 제어의 중요성을 체감함."},{title:"RSA 암호화 데이터 크기 제한(BadPaddingException) 해결",problem:"RSA로 데이터를 암호화할 때 간헐적으로 `javax.crypto.BadPaddingException` 오류가 발생하며 암호화에 실패함.",cause:"RSA 알고리즘은 키 크기(예: 2048bit)에 따라 한 번에 암호화할 수 있는 평문의 길이가 제한됨. 긴 문자열을 RSA로 직접 처리하려다 허용 범위를 초과함.",solution:"RSA는 오직 짧은 데이터인 'AES 대칭키' 교환에만 사용하고, 실제 긴 채팅 메시지는 블록 암호화 방식인 AES로 처리하도록 역할 분담을 명확히 하여 해결.",learning:"비대칭키 암호화의 용도(키 교환/서명)와 대칭키 암호화의 용도(데이터 암호화)를 구분해야 하는 기술적 이유를 명확히 이해함."}],results:["RSA-2048 및 AES-256 기반의 안전한 1:1 채팅 통신 성공","Wireshark 패킷 캡처 시 평문이 노출되지 않음을 확인 (기밀성 확보)","Server/Client 간 키 교환 및 암호화 통신 시연 성공 (터미널 로그 검증)"],images:[]},NS=Object.freeze(Object.defineProperty({__proto__:null,secureChatProject:jS},Symbol.toStringTag,{value:"Module"})),MS="/portfolio/assets/banner-xAa91UBm.png",_S={id:"ssangsang",banner:MS,title:"쌍상 (봉사 매칭 서비스)",subTitle:"쌍상",subtitle:"자원봉사자-수요자 매칭 크로스 플랫폼 웹앱",summary:"100+명의 동아리 회원이 사용하는 봉사 매칭 서비스. React 웹앱으로 개발하여 접근성을 높이고, 애자일 프로세스로 운영 중입니다.",tags:["React.js","TypeScript","Progressive Web App","Axios","Agile-Scrum"],links:[{label:"Github",href:"https://github.com/your-repo"},{label:"Live",href:"https://your-service.com"}],period:"2023.01 ~ 현재 운영중",team:"Frontend 2명, Backend 1명",overview:"자원봉사자와 봉사를 받고 싶어하는 사람들을 매칭하기 위한 웹/앱 크로스 플랫폼 서비스입니다. 현재 100명 이상의 동아리 회원들이 실제 봉사 신청 및 관리에 사용하고 있습니다.",why:[{title:"Why React?",desc:"컴포넌트 기반 아키텍처와 선언형 UI를 통해 재사용성과 유지보수성을 확보했습니다. 방대한 커뮤니티와 라이브러리 생태계를 활용해 개발 생산성을 높였습니다."},{title:"Why WebApp?",desc:"하나의 코드로 웹과 모바일 환경(크로스 플랫폼)에 모두 대응하며, 스토어 심사 없이 빠른 배포와 수정이 가능하여 애자일한 운영에 적합하다고 판단했습니다."}],role:{percentage:"60%",tasks:["React-Router-Dom을 활용한 SPA 페이지 전환 및 유저 권한별 접근 제어 (Protected Route) 구현","사용자 경험(UX) 개선: Percentage Loading Indicator, 스크롤 기반 페이지네이션(Infinite Scroll), Skeleton UI 적용","반응형 디자인: viewport width 기준 rem/flex Layout으로 다양한 디바이스 대응","Axios Interceptor를 활용한 Access Token 자동 갱신 및 공통 에러 핸들링 로직 구현","GitHub/Jira/Notion 기반의 애자일 스프린트 운영 및 코드 리뷰 주도"]},troubleshooting:[{title:"React StrictMode와 useEffect 중복 실행 문제",problem:"초기 렌더링 시 useEffect 내 API 호출이 두 번 발생하여 불필요한 트래픽 유발.",cause:"React 18 StrictMode의 개발 환경 특성(마운트-언마운트-마운트)으로 인한 현상. Side-Effect 검증 과정임을 이해.",solution:"AbortController를 활용하여 언마운트 시 이전 요청을 취소(Clean-up)하도록 리팩토링하여 안전한 비동기 처리 구현.",learning:"StrictMode가 잠재적 버그를 찾아주는 도구임을 이해하고, 클린업 함수(Clean-up) 작성의 중요성을 체감."},{title:"비동기 State 업데이트 시점 차이로 인한 필터링 오류",problem:"API로 데이터를 받아온(setVolunteers) 직후 필터링을 수행했으나, 빈 배열이 반환되는 문제 발생.",cause:"setState는 비동기적으로 동작하므로, 상태 업데이트가 완료되기 전에 다음 코드가 실행되어 초기값(빈 배열)을 참조함.",solution:"필터링 로직을 별도의 useEffect로 분리하고, volunteers 상태를 의존성 배열(dependency array)에 추가하여 데이터 변경 시점에 필터링이 수행되도록 수정.",learning:"React의 상태 업데이트 사이클과 의존성 배열의 역할을 명확히 이해하게 됨."}],results:["2023 동아리 콘테스트 금상 수상 (교내 2위)","2023년 6월 우수지역사회봉사단 선정 (VMS 인증)","실사용자 100+명 확보 및 주 단위 기능 개선 사이클 정착"],images:[]},DS=Object.freeze(Object.defineProperty({__proto__:null,ssangsangProjects:_S},Symbol.toStringTag,{value:"Module"})),RS="/portfolio/assets/banner-xHcB6NbG.png",OS={id:"vary-recycle",banner:RS,title:"Vary Recycle (분리수거 리워드 서비스)",subTitle:"Vary Recycle",subtitle:"Google 기술 기반, 분리수거 인식 및 리워드 제공 환경 문제 해결 서비스",summary:"UN SDGs(지속 가능한 개발 목표) 중 환경 분야를 대상으로 한 분리수거 리워드 서비스입니다. 80% 정확도의 Computer Vision AI로 쓰레기 종류를 인식하고, 올바른 분리수거 가이드를 제공하여 사용자 행동 변화를 이끌었습니다.",tags:["Flutter","Firebase Realtime Database","Firebase Authentication","TensorFlow","Computer Vision","Google Solution Challenge"],links:[{label:"Github",href:"https://github.com/your-vary-recycle"},{label:"프로젝트 진행과정",href:"https://your-notion-or-blog.com/vary-recycle"},{label:"소개영상",href:"https://youtu.be/your-vary-recycle-demo"}],period:"2022.09 ~ 2023.08",team:"Frontend 2명, Backend 1명, AI 모델 2명, 데이터 생성 1명",overview:"Vary Recycle은 사용자가 쓰레기를 촬영하면, AI가 실시간으로 종류를 인식하고 맞는 분리수거 방법을 안내해주는 리워드형 서비스입니다. 촬영–인식–가이드–리워드까지 하나의 플로우로 연결하여, 게임처럼 재미있게 분리수거 습관을 만들도록 설계했습니다.",why:[{title:"Why Flutter?",desc:"iOS/Android를 동시에 대응해야 했기 때문에, 단일 코드베이스로 크로스 플랫폼 개발이 가능한 Flutter를 선택했습니다. 위젯 기반 UI와 Hot Reload를 활용해 짧은 기간 내에 여러 화면을 빠르게 설계·반복 개선할 수 있었습니다."},{title:"Why Computer Vision 기반 분리수거?",desc:"환경 문제 해결의 가장 큰 허들은 '귀찮음'과 '정보 부족'이라고 보았습니다. 사용자가 이름을 일일이 입력하는 대신, 카메라 한 번으로 유리병/캔/종이/PET를 자동 분류하고, 바로 분리수거 가이드를 보여줌으로써 진입장벽을 최소화했습니다."}],role:{percentage:"50%",tasks:["Flutter 기반 하이브리드 앱 프론트엔드 개발 50% 담당: 홈, 촬영 화면, 결과 출력, 로그인 등 주요 화면 직접 설계 및 구현","LayoutBuilder, MediaQuery, Flexible 등을 활용해 다양한 해상도·비율에서 깨지지 않는 반응형 UI 구성","AnimatedContainer를 이용해 분리수거 결과에 따라 카드 색상/크기/위치를 애니메이션으로 표현, 사용자 피드백 강화","Firebase Realtime Database 연동: 분리수거 결과 및 AI 학습 로그를 실시간 저장·조회하는 데이터 플로우 구현","Firebase Authentication 적용: 이메일 로그인, 인증 토큰 만료 처리, 세션 유지 로직 설계 및 예외 상황(토큰 만료, 네트워크 에러) 처리","Firebase Security Rules 작성으로 사용자별 데이터 접근 제어 및 읽기/쓰기 권한 분리","TensorFlow 기반 Computer Vision 모델과의 연동을 위해 HTTP 인터페이스(REST API) 설계 및 Flutter 클라이언트 구현","AI 인퍼런스 결과(예: 라벨, 신뢰도)에 따라 UI가 자동으로 상태를 전환하도록 상태 기반 화면 전환 로직 구현","유리병/캔/종이/PET 4종에 대해 약 7,500장의 학습용 이미지 촬영 및 정제, 조명·각도·배경을 달리하여 데이터 다양성 확보 및 오버피팅 방지"]},troubleshooting:[{title:"앱 재실행 시 로그인 상태인데도 로그인 화면으로 라우팅되는 문제",problem:"Firebase Authentication을 사용해 이메일 로그인 기능을 구현했는데, 최초 로그인 후에는 정상 동작하지만 앱을 완전히 종료 후 재실행하면 로그인되어 있음에도 로그인 페이지로 잘못 라우팅되는 문제가 발생.",cause:"앱 시작 직후 FirebaseAuth.instance.currentUser를 바로 조회하면, Firebase가 아직 내부적으로 인증 상태를 복구하기 전이라 null을 반환할 수 있음. 인증 상태 복구가 비동기적으로 동작함에도 이를 고려하지 않고 currentUser만으로 초기 라우팅을 결정한 것이 원인이었음.",solution:"FirebaseAuth.instance.authStateChanges() 스트림을 StreamBuilder로 구독하는 방식으로 초기 라우팅 구조를 전면 수정. 인증 상태 복구 중에는 SplashScreen을 보여주고, snapshot.hasData 여부에 따라 HomePage 또는 LoginPage로 분기하도록 설계하여 비동기 복구 구간을 안전하게 처리함.",learning:"Firebase Authentication의 인증 상태 복구는 비동기이며, ‘로그인 여부’뿐만 아니라 ‘복구가 끝났는지 여부’까지 UI 상태로 분리해야 한다는 것을 배웠음. 이를 계기로 Flutter 위젯 생명주기, 비동기 흐름 제어, 상태 기반 라우팅의 중요성을 몸으로 이해하게 되었고, 이후 다른 프로젝트에서도 모든 초기 라우팅을 스트림/상태 기반으로 설계하게 되는 계기가 되었음."}],results:["2022년 교내 동계 모각소 활동 ‘최우수상’ 수상 (31개 팀 중 1위)","Google Solution Challenge Winter Cup 국내 Top 8 (40+팀 중 8위)","환경·분리수거 문화를 주제로 한 실제 사용자 테스트에서 ‘분리수거 가이드가 직관적이고 재미있다’는 피드백 다수 확보"],images:[]},zS=Object.freeze(Object.defineProperty({__proto__:null,varyRecycleProjects:OS},Symbol.toStringTag,{value:"Module"})),LS=({project:t,isVisible:a,fromOffset:l,onClose:u})=>g.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity duration-200 "+(a?"opacity-100":"opacity-0 pointer-events-none"),children:[g.jsx("button",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:u,"aria-label":"Close project detail"}),g.jsx("div",{className:"relative z-50 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-[transform,opacity] duration-200 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-r-2xl [&::-webkit-scrollbar-track]:my-2 [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-(--bg-elevated) [&::-webkit-scrollbar-thumb:hover]:bg-gray-300",style:l?{transform:a?"translate3d(0,0,0) scale(1)":`translate3d(${l.x}px, ${l.y}px, 0) scale(0.9)`,transformOrigin:"center center"}:void 0,children:g.jsxs("div",{className:"p-6 md:p-8",children:[g.jsxs("div",{className:"flex justify-between items-start mb-6",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"text-2xl font-bold mb-1",children:t.title}),t.subtitle&&g.jsx("p",{className:"text-sm text-fg-muted",children:t.subtitle})]}),g.jsx("button",{onClick:u,className:"p-2 rounded-full hover:bg-(--bg-soft) transition-colors",children:"✕"})]}),g.jsxs("div",{className:"flex flex-wrap gap-4 text-xs text-fg-muted mb-8 p-4 bg-(--bg-soft) rounded-xl",children:[t.period&&g.jsxs("div",{children:["📅 ",t.period]}),t.team&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"w-px h-3 bg-(--border-subtle) self-center"}),g.jsxs("div",{children:["👥 ",t.team]})]})]}),g.jsxs("div",{className:"space-y-10 text-sm leading-relaxed text-fg-muted",children:[g.jsxs("section",{children:[g.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"🔎 프로젝트 개요"}),g.jsx("p",{children:t.overview})]}),t.images&&t.images.length>0&&g.jsxs("section",{children:[g.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"📸 Screen & Architecture"}),g.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:t.images.map((s,c)=>g.jsxs("div",{className:"space-y-2",children:[g.jsx("div",{className:"rounded-lg overflow-hidden border border-(--border-subtle) bg-(--bg) aspect-video relative",children:g.jsx("img",{src:s.src,alt:s.caption,className:"object-cover w-full h-full"})}),s.caption&&g.jsx("p",{className:"text-xs text-center text-fg-muted",children:s.caption})]},c))})]}),t.why&&g.jsxs("section",{children:[g.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"💡 기술적 의사결정 (Why?)"}),g.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:t.why.map((s,c)=>g.jsxs("div",{className:"p-4 rounded-xl border border-(--border-subtle) bg-(--bg)",children:[g.jsx("div",{className:"font-medium text-fg mb-2",children:s.title}),g.jsx("p",{className:"text-xs",children:s.desc})]},c))})]}),t.role&&g.jsxs("section",{children:[g.jsxs("h4",{className:"text-fg font-semibold text-base mb-3",children:["👩🏻‍💻 수행 역할 ( 기여도 ",t.role.percentage," )"]}),g.jsx("ul",{className:"list-disc pl-5 space-y-2",children:t.role.tasks.map((s,c)=>g.jsx("li",{children:s},c))})]}),t.troubleshooting&&g.jsxs("section",{children:[g.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"🚨 트러블 슈팅"}),g.jsx("div",{className:"space-y-4",children:t.troubleshooting.map((s,c)=>g.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(255,100,100,0.05)] border border-[rgba(255,100,100,0.1)]",children:[g.jsx("div",{className:"font-semibold text-fg mb-2",children:s.title}),g.jsxs("div",{className:"grid gap-2 text-xs",children:[g.jsxs("div",{children:[g.jsx("span",{className:"font-medium text-(--fg)",children:"문제:"})," ",s.problem]}),g.jsxs("div",{children:[g.jsx("span",{className:"font-medium text-(--fg)",children:"원인:"})," ",s.cause]}),g.jsxs("div",{children:[g.jsx("span",{className:"font-medium text-(--fg)",children:"해결:"})," ",s.solution]}),g.jsxs("div",{children:[g.jsx("span",{className:"font-medium text-(--fg)",children:"배움:"})," ",s.learning]})]})]},c))})]}),t.results&&g.jsxs("section",{children:[g.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"✨ 성과"}),g.jsx("ul",{className:"space-y-2",children:t.results.map((s,c)=>g.jsxs("li",{className:"flex gap-2 items-center",children:[g.jsx("span",{className:"text-yellow-500",children:"🏆"}),g.jsx("span",{children:s})]},c))})]})]})]})})]}),hc=3e3,US=Object.assign({"./data/LLM/LLM(LSTM-BERT).tsx":vS,"./data/Mogang/mogangData.tsx":wS,"./data/P2P/P2PService.tsx":ES,"./data/Secure-Chat/Secure-chat.tsx":NS,"./data/Ssang-sang/ssang-sangData.tsx":DS,"./data/Vary-Recycle/varyRecycle.tsx":zS}),$n=Object.values(US).map(t=>t.default??Object.values(t)[0]),BS="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-8",HS="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",qS="text-[20px] font-semibold tracking-[0.02em]",IS="text-[13px] text-fg-muted leading-relaxed",Rp="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",VS=()=>{const[t,a]=D.useState(0),[l,u]=D.useState(!1),[s,c]=D.useState(!1),[f,m]=D.useState(null),[p,h]=D.useState(!1),[b,x]=D.useState(null),S=Au.useRef(0),v=Au.useRef(0);D.useEffect(()=>{if(l||f)return;const A=setInterval(()=>{a(P=>(P+1)%$n.length)},hc);return()=>clearInterval(A)},[l,f]);const[C]=D.useState(()=>$n.map(()=>({jitterX:Math.random()*20-15,jitterY:Math.random()*30-15,baseRotate:Math.random()*16-10}))),[O,z]=D.useState(null);D.useEffect(()=>{if(typeof window>"u")return;const A=()=>{const P=window.innerWidth,Q=P<768;console.log("Projects resize:",{width:P,mobile:Q}),z(P),c(Q)};return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);const j=$n.find(A=>A.id===f)||null,H=(A,P)=>{const Q=P.getBoundingClientRect(),de=window.innerWidth,ae=window.innerHeight,ne=Q.left+Q.width/2,B=Q.top+Q.height/2,Z=de/2,ie=ae/2,be=ne-Z,T=B-ie;m(A),x({x:be,y:T}),requestAnimationFrame(()=>{h(!0)})},_=()=>{h(!1),setTimeout(()=>{m(null),x(null)},220)};D.useEffect(()=>{if(!j)return;const A=P=>{P.key==="Escape"&&_()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[j]),D.useEffect(()=>(j?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[j]);const re=(()=>{if(!O)return 140;const A=O/($n.length+1);return Math.min(180,Math.max(70,A*.8))})(),I=($n.length-1)/2,ee=A=>{S.current=A.touches[0].clientX},oe=A=>{v.current=A.touches[0].clientX},W=()=>{if(!S.current||!v.current)return;const A=S.current-v.current;Math.abs(A)>50&&(A>0?a(Q=>(Q+1)%$n.length):a(Q=>(Q-1+$n.length)%$n.length)),S.current=0,v.current=0};return g.jsxs(g.Fragment,{children:[g.jsxs("section",{id:"projects",className:"mb-16",children:[g.jsxs("div",{className:BS,children:[g.jsxs("div",{children:[g.jsx("p",{className:HS,children:"Projects"}),g.jsx("h2",{className:qS,children:"주요 프로젝트"})]}),g.jsx("p",{className:IS,children:"아래 포인트나 카드를 클릭하면 상세 모달을 볼 수 있습니다."})]}),s?g.jsxs("div",{className:"flex flex-col gap-6",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[g.jsx("div",{className:"w-full overflow-hidden",onTouchStart:ee,onTouchMove:oe,onTouchEnd:W,children:g.jsx("div",{className:"flex w-full transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform",style:{transform:`translate3d(-${t*100}%, 0, 0)`},children:$n.map(A=>g.jsx("div",{className:"w-full shrink-0 flex justify-center px-3",children:g.jsxs("article",{"data-project-id":A.id,className:"w-full max-w-3xl min-h-[320px] flex flex-col rounded-2xl bg-(--bg-elevated) shadow-[0_16px_36px_rgba(0,0,0,0.55)] [html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.12)] border border-(--border-subtle) cursor-pointer overflow-hidden",onClick:P=>H(A.id,P.currentTarget),children:[A.banner&&g.jsxs("div",{className:"relative w-full h-32 shrink-0 overflow-hidden",children:[g.jsx("img",{src:A.banner,alt:"",className:"w-full h-full object-cover grayscale-[30%]"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[color:rgba(0,0,0,0.6)] to-transparent"})]}),g.jsxs("div",{className:"relative flex flex-col flex-1 justify-between z-10 p-4 text-[13px] text-fg-muted leading-[1.6]",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"mb-1.5 text-fg text-[15px] font-semibold tracking-[0.02em]",children:A.title}),g.jsx("p",{className:"text-[12px] mb-2.5 line-clamp-2 text-fg opacity-100",children:A.summary}),g.jsx("div",{className:"flex flex-wrap gap-1.5",children:A.tags.slice(0,6).map(P=>g.jsx("span",{className:Rp,children:P},P))})]}),g.jsx("div",{className:"flex gap-3 text-[11px]  mt-3",children:A.links.map(P=>g.jsxs("a",{href:P.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-fg-muted hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out",onClick:Q=>Q.stopPropagation(),children:[g.jsx("span",{children:P.label}),g.jsx("span",{children:"↗"})]},P.label))})]})]})},A.id))})}),g.jsxs("div",{className:"relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]",children:[g.jsx("div",{className:"h-px w-full max-w-3xl bg-(--border-subtle) opacity-70"}),g.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6",children:$n.map((A,P)=>{const Q=P===t;return g.jsxs("button",{type:"button",className:"relative flex flex-col items-center outline-none cursor-pointer shrink-0",onMouseEnter:()=>a(P),onClick:()=>a(P),"aria-label":`${A.title}로 이동`,children:[g.jsx("span",{className:["mb-1 h-[3px] w-5 sm:w-7 rounded-full","bg-(--border-subtle)",Q?"animate-border-pulse":"opacity-40"].join(" ")}),g.jsx(Nu,{isActive:Q,isPaused:l,duration:hc,size:16,strokeWidth:2}),g.jsx("span",{className:"mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-[80px] text-center line-clamp-2",children:A.subTitle})]},A.id)})})]})]}):g.jsxs("div",{className:"relative flex flex-col items-center",children:[g.jsx("div",{className:"relative w-full max-w-5xl h-[260px] flex items-center justify-center mb-10 overflow-visible",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:$n.map((A,P)=>{const Q=C[P],de=P===t,ne=(P-I)*re+Q.jitterX,B=Q.jitterY,Z=Math.round(ne),ie=Math.round(B+(de?-10:6)),be=de?`translateX(${Z}px) translateY(${ie}px) scale(1.05)`:`translateX(${Z}px) translateY(${ie}px) rotate(${Q.baseRotate}deg) scale(0.96)`,T=de?999:100+P,N=de?1:.8,G=de?"none":"blur(0.8px)";return g.jsxs("article",{"data-project-id":A.id,className:["group absolute w-full","max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]","rounded-2xl bg-(--bg-elevated)","shadow-[0_16px_36px_rgba(0,0,0,0.55)]","[html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.12)]","border border-(--border-subtle)","cursor-pointer overflow-hidden","transition-all duration-250 ease-out",de?["ring-2 ring-(--accent)","ring-offset-2","ring-offset-[color:var(--bg-soft)]"].join(" "):"ring-0"].join(" "),style:{zIndex:T,transform:be,opacity:N,filter:G},onClick:w=>H(A.id,w.currentTarget),onMouseEnter:()=>a(P),onFocus:()=>a(P),tabIndex:0,onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),H(A.id,w.currentTarget))},role:"button",children:[A.banner&&g.jsxs("div",{className:["absolute inset-0 z-0 pointer-events-none","transition-all duration-200",de?"opacity-20":"opacity-40"].join(" "),children:[g.jsx("img",{src:A.banner,alt:"",className:"w-full h-full object-cover grayscale-[30%]"}),g.jsx("div",{className:["absolute inset-0 bg-gradient-to-t to-transparent transition-colors duration-200",de?"from-[color:rgba(0,0,0,0.6)] [html[data-theme='light']_&]:from-[color:rgba(0,0,0,0.52)]":"from-[color:rgba(0,0,0,0.35)] [html[data-theme='light']_&]:from-[color:rgba(0,0,0,0.3)]"].join(" ")})]}),g.jsxs("div",{className:"relative z-10 p-4 text-[13px] text-fg-muted leading-[1.6]",children:[g.jsx("h3",{className:["mb-1.5","text-fg","transition-all duration-200",de?"text-[15px] font-semibold tracking-[0.02em]":"text-[14px] font-medium tracking-[0.01em]"].join(" "),children:A.title}),g.jsx("p",{className:["transition-all duration-200","text-[12px] mb-2.5 line-clamp-2",de?"text-fg opacity-100":"text-fg-muted opacity-80"].join(" "),children:A.summary}),g.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2.5",children:A.tags.slice(0,6).map(w=>g.jsx("span",{className:Rp,children:w},w))}),g.jsx("div",{className:"flex gap-3 text-[11px] mt-1",children:A.links.map(w=>g.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-fg-muted hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out",onClick:le=>le.stopPropagation(),children:[g.jsx("span",{children:w.label}),g.jsx("span",{children:"↗"})]},w.label))})]})]},A.id)})}),g.jsxs("div",{className:"relative w-full max-w-3xl",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[g.jsx("div",{className:"h-px w-full bg-(--border-subtle) opacity-70"}),g.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between",children:$n.map((A,P)=>{const Q=P===t,de=()=>{a(P);const ae=document.querySelector(`[data-project-id="${A.id}"]`);ae&&H(A.id,ae)};return g.jsxs("button",{type:"button",className:"relative flex flex-col cursor-pointer items-center outline-none",onMouseEnter:()=>a(P),onFocus:()=>a(P),onClick:de,onKeyDown:ae=>{(ae.key==="Enter"||ae.key===" ")&&(ae.preventDefault(),de())},children:[g.jsx("span",{className:["mb-1 h-[3px] w-7 rounded-full","bg-(--border-subtle)",Q?"animate-border-pulse":"opacity-40"].join(" ")}),g.jsx(Nu,{isActive:Q,isPaused:l,duration:hc,size:16,strokeWidth:2}),g.jsx("span",{className:"mt-1 text-[10px] text-fg-muted max-w-[80px] text-center line-clamp-2",children:A.subTitle})]},A.id)})})]})]})]}),j&&g.jsx(LS,{project:j,isVisible:p,fromOffset:b,onClose:_})]})},FS=()=>{const t=D.useCallback(a=>{const l=document.getElementById(a);if(l){const f=l.getBoundingClientRect().top+window.pageYOffset-64-20;window.scrollTo({top:f,behavior:"smooth"})}},[]);return g.jsxs("main",{className:"max-w-[1040px] mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16 text-sm text-fg",children:[g.jsx(ev,{onScrollTo:t}),g.jsx(iv,{}),g.jsx(Cv,{}),g.jsx(xS,{}),g.jsx(VS,{}),g.jsx(Kv,{}),g.jsx(Fv,{})]})},GS=4200,Op=260;function _a(...t){return t.filter(Boolean).join(" ")}const YS=()=>{const t=Ja();D.useEffect(()=>{window.scrollTo(0,0)},[]);const a=D.useMemo(()=>{const W=new Map;for(const A of et)for(const P of A.tags)W.set(P,(W.get(P)??0)+1);return Array.from(W.entries()).sort((A,P)=>P[1]-A[1]).slice(0,12)},[]),[l,u]=D.useState("ALL"),s=D.useMemo(()=>et.slice(0,Math.min(3,et.length)),[]),[c,f]=D.useState(0),[m,p]=D.useState(!1);D.useEffect(()=>{if(s.length<=1)return;const W=()=>{p(!0),window.setTimeout(()=>{f(P=>(P+1)%s.length),window.setTimeout(()=>p(!1),20)},Op)},A=window.setInterval(W,GS);return()=>window.clearInterval(A)},[s.length]);const h=s[c],b=D.useMemo(()=>l==="ALL"?et:et.filter(W=>W.tags.includes(l)),[l]),x=D.useMemo(()=>b,[b]),S=10,[v,C]=D.useState(S),[O,z]=D.useState(!1),[j,H]=D.useState(!1),_=D.useMemo(()=>x.slice(0,v),[x,v]),K=v<x.length,re=W=>{W!==l&&(H(!0),setTimeout(()=>{u(W),C(S),z(!1),setTimeout(()=>H(!1),20)},200))},I=D.useCallback(async()=>{!K||O||(z(!0),await new Promise(W=>setTimeout(W,450)),C(W=>Math.min(W+S,x.length)),z(!1))},[K,O,x.length]),ee=D.useRef(null);D.useEffect(()=>{const W=ee.current;if(!W)return;const A=new IntersectionObserver(P=>{P[0]?.isIntersecting&&I()},{root:null,rootMargin:"800px 0px",threshold:0});return A.observe(W),()=>A.disconnect()},[I]);const oe=W=>{t(`/blog/${W.slug}`)};return g.jsx("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base)",children:g.jsxs("div",{className:"max-w-[1040px] mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16",children:[g.jsx("div",{className:"flex items-end justify-between gap-4 mb-6",children:g.jsxs("div",{children:[g.jsx("h1",{className:"text-[32px] font-bold tracking-[-0.02em]",children:"Posting"}),g.jsx("p",{className:"text-[13px] text-fg-muted mt-2",children:"Front-End를 공부하며 배운 알뜰신잡"})]})}),h&&g.jsx("section",{className:"mb-10",children:g.jsx("article",{role:"button",tabIndex:0,onClick:()=>oe(h),onKeyDown:W=>{(W.key==="Enter"||W.key===" ")&&oe(h)},className:_a("group relative overflow-hidden rounded-3xl border bg-(--bg-elevated) border-(--border-subtle)","cursor-pointer transition-colors hover:border-(--accent)","focus:outline-none focus:ring-2 focus:ring-(--accent)/40",m?"opacity-0":"opacity-100","transition-opacity"),style:{transitionDuration:`${Op}ms`},children:g.jsxs("div",{className:"grid md:grid-cols-[320px_1fr]",children:[g.jsxs("div",{className:"relative h-[250px] md:h-[250px] bg-(--bg-soft)",children:[h.cover?g.jsxs(g.Fragment,{children:[g.jsx("img",{src:h.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"})]}):g.jsx("div",{className:"absolute inset-0 bg-(--bg-soft)"}),g.jsx("div",{className:"absolute left-5 top-5",children:g.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-black/45 border border-white/10 text-white/90",children:"Today's"})})]}),g.jsxs("div",{className:"p-5 h-full flex flex-col justify-between",children:[g.jsx("h2",{className:"text-[22px] md:text-[24px] font-bold leading-snug tracking-[-0.02em] mb-3",children:h.title}),g.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-5 line-clamp-3",children:h.excerpt}),g.jsxs("div",{className:"flex flex-col text-[12px] text-fg-muted w-full",children:[g.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:h.tags.slice(0,6).map(W=>g.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",children:W},W))}),g.jsx("span",{children:h.date})]})]})]})})}),g.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[g.jsxs("button",{type:"button",onClick:()=>re("ALL"),className:_a("text-[12px] px-3 py-1.5 rounded-full border transition-colors",l==="ALL"?"bg-(--bg-elevated) border-(--accent) text-(--fg-base)":"bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"),children:["전체보기 (",et.length,")"]}),a.map(([W,A])=>g.jsxs("button",{type:"button",onClick:()=>re(W),className:_a("text-[12px] px-3 py-1.5 rounded-full border transition-colors",l===W?"bg-(--bg-elevated) border-(--accent) text-(--fg-base)":"bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"),children:[W," (",A,")"]},W))]}),g.jsxs("section",{className:_a("grid gap-6 transition-opacity duration-200",j?"opacity-0":"opacity-100"),children:[_.map(W=>g.jsx("article",{onClick:()=>oe(W),role:"button",tabIndex:0,onKeyDown:A=>{(A.key==="Enter"||A.key===" ")&&oe(W)},className:_a("group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle)","cursor-pointer transition-colors hover:border-(--accent)","focus:outline-none focus:ring-2 focus:ring-(--accent)/40"),children:g.jsxs("div",{className:"grid md:grid-cols-[240px_1fr] md:h-[200px]",children:[W.cover&&g.jsxs("div",{className:"relative h-[180px] md:h-[200px] bg-(--bg-soft)",children:[g.jsx("img",{src:W.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/55 via-black/15 to-transparent"})]}),g.jsxs("div",{className:"p-6 md:overflow-hidden",children:[g.jsx("h3",{className:"text-[20px] font-semibold leading-snug mb-2",children:W.title}),g.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2",children:W.excerpt}),g.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:W.tags.slice(0,8).map(A=>g.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",children:A},A))}),g.jsx("div",{className:"flex items-center justify-between text-[12px] text-fg-muted",children:g.jsx("span",{children:W.date})})]})]})},W.id)),g.jsx("div",{ref:ee,className:"h-10"}),O&&g.jsx("div",{className:"py-6 text-center text-[13px] text-fg-muted",children:"불러오는 중..."}),!K&&g.jsx("div",{className:"py-10 text-center text-[13px] text-fg-muted",children:"더 이상 글이 없습니다."})]})]})})};function PS(t,a){const l={};return(t[t.length-1]===""?[...t,""]:t).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const XS=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,JS=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,QS={};function zp(t,a){return(QS.jsx?JS:XS).test(t)}const ZS=/[ \t\n\f\r]/g;function KS(t){return typeof t=="object"?t.type==="text"?Lp(t.value):!1:Lp(t)}function Lp(t){return t.replace(ZS,"")===""}class Za{constructor(a,l,u){this.normal=l,this.property=a,u&&(this.space=u)}}Za.prototype.normal={};Za.prototype.property={};Za.prototype.space=void 0;function Xg(t,a){const l={},u={};for(const s of t)Object.assign(l,s.property),Object.assign(u,s.normal);return new Za(l,u,a)}function Rc(t){return t.toLowerCase()}class _n{constructor(a,l){this.attribute=l,this.property=a}}_n.prototype.attribute="";_n.prototype.booleanish=!1;_n.prototype.boolean=!1;_n.prototype.commaOrSpaceSeparated=!1;_n.prototype.commaSeparated=!1;_n.prototype.defined=!1;_n.prototype.mustUseProperty=!1;_n.prototype.number=!1;_n.prototype.overloadedBoolean=!1;_n.prototype.property="";_n.prototype.spaceSeparated=!1;_n.prototype.space=void 0;let WS=0;const Se=Lr(),ln=Lr(),Oc=Lr(),$=Lr(),Ge=Lr(),jl=Lr(),qn=Lr();function Lr(){return 2**++WS}const zc=Object.freeze(Object.defineProperty({__proto__:null,boolean:Se,booleanish:ln,commaOrSpaceSeparated:qn,commaSeparated:jl,number:$,overloadedBoolean:Oc,spaceSeparated:Ge},Symbol.toStringTag,{value:"Module"})),mc=Object.keys(zc);class Wc extends _n{constructor(a,l,u,s){let c=-1;if(super(a,l),Up(this,"space",s),typeof u=="number")for(;++c<mc.length;){const f=mc[c];Up(this,mc[c],(u&zc[f])===zc[f])}}}Wc.prototype.defined=!0;function Up(t,a,l){l&&(t[a]=l)}function Dl(t){const a={},l={};for(const[u,s]of Object.entries(t.properties)){const c=new Wc(u,t.transform(t.attributes||{},u),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(u)&&(c.mustUseProperty=!0),a[u]=c,l[Rc(u)]=u,l[Rc(c.attribute)]=u}return new Za(a,l,t.space)}const Jg=Dl({properties:{ariaActiveDescendant:null,ariaAtomic:ln,ariaAutoComplete:null,ariaBusy:ln,ariaChecked:ln,ariaColCount:$,ariaColIndex:$,ariaColSpan:$,ariaControls:Ge,ariaCurrent:null,ariaDescribedBy:Ge,ariaDetails:null,ariaDisabled:ln,ariaDropEffect:Ge,ariaErrorMessage:null,ariaExpanded:ln,ariaFlowTo:Ge,ariaGrabbed:ln,ariaHasPopup:null,ariaHidden:ln,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ge,ariaLevel:$,ariaLive:null,ariaModal:ln,ariaMultiLine:ln,ariaMultiSelectable:ln,ariaOrientation:null,ariaOwns:Ge,ariaPlaceholder:null,ariaPosInSet:$,ariaPressed:ln,ariaReadOnly:ln,ariaRelevant:null,ariaRequired:ln,ariaRoleDescription:Ge,ariaRowCount:$,ariaRowIndex:$,ariaRowSpan:$,ariaSelected:ln,ariaSetSize:$,ariaSort:null,ariaValueMax:$,ariaValueMin:$,ariaValueNow:$,ariaValueText:null,role:null},transform(t,a){return a==="role"?a:"aria-"+a.slice(4).toLowerCase()}});function Qg(t,a){return a in t?t[a]:a}function Zg(t,a){return Qg(t,a.toLowerCase())}const $S=Dl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:jl,acceptCharset:Ge,accessKey:Ge,action:null,allow:null,allowFullScreen:Se,allowPaymentRequest:Se,allowUserMedia:Se,alt:null,as:null,async:Se,autoCapitalize:null,autoComplete:Ge,autoFocus:Se,autoPlay:Se,blocking:Ge,capture:null,charSet:null,checked:Se,cite:null,className:Ge,cols:$,colSpan:null,content:null,contentEditable:ln,controls:Se,controlsList:Ge,coords:$|jl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Se,defer:Se,dir:null,dirName:null,disabled:Se,download:Oc,draggable:ln,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Se,formTarget:null,headers:Ge,height:$,hidden:Oc,high:$,href:null,hrefLang:null,htmlFor:Ge,httpEquiv:Ge,id:null,imageSizes:null,imageSrcSet:null,inert:Se,inputMode:null,integrity:null,is:null,isMap:Se,itemId:null,itemProp:Ge,itemRef:Ge,itemScope:Se,itemType:Ge,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Se,low:$,manifest:null,max:null,maxLength:$,media:null,method:null,min:null,minLength:$,multiple:Se,muted:Se,name:null,nonce:null,noModule:Se,noValidate:Se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Se,optimum:$,pattern:null,ping:Ge,placeholder:null,playsInline:Se,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Se,referrerPolicy:null,rel:Ge,required:Se,reversed:Se,rows:$,rowSpan:$,sandbox:Ge,scope:null,scoped:Se,seamless:Se,selected:Se,shadowRootClonable:Se,shadowRootDelegatesFocus:Se,shadowRootMode:null,shape:null,size:$,sizes:null,slot:null,span:$,spellCheck:ln,src:null,srcDoc:null,srcLang:null,srcSet:null,start:$,step:null,style:null,tabIndex:$,target:null,title:null,translate:null,type:null,typeMustMatch:Se,useMap:null,value:ln,width:$,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ge,axis:null,background:null,bgColor:null,border:$,borderColor:null,bottomMargin:$,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Se,declare:Se,event:null,face:null,frame:null,frameBorder:null,hSpace:$,leftMargin:$,link:null,longDesc:null,lowSrc:null,marginHeight:$,marginWidth:$,noResize:Se,noHref:Se,noShade:Se,noWrap:Se,object:null,profile:null,prompt:null,rev:null,rightMargin:$,rules:null,scheme:null,scrolling:ln,standby:null,summary:null,text:null,topMargin:$,valueType:null,version:null,vAlign:null,vLink:null,vSpace:$,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Se,disableRemotePlayback:Se,prefix:null,property:null,results:$,security:null,unselectable:null},space:"html",transform:Zg}),e2=Dl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:qn,accentHeight:$,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:$,amplitude:$,arabicForm:null,ascent:$,attributeName:null,attributeType:null,azimuth:$,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:$,by:null,calcMode:null,capHeight:$,className:Ge,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:$,diffuseConstant:$,direction:null,display:null,dur:null,divisor:$,dominantBaseline:null,download:Se,dx:null,dy:null,edgeMode:null,editable:null,elevation:$,enableBackground:null,end:null,event:null,exponent:$,externalResourcesRequired:null,fill:null,fillOpacity:$,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:jl,g2:jl,glyphName:jl,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:$,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:$,horizOriginX:$,horizOriginY:$,id:null,ideographic:$,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:$,k:$,k1:$,k2:$,k3:$,k4:$,kernelMatrix:qn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:$,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:$,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:$,overlineThickness:$,paintOrder:null,panose1:null,path:null,pathLength:$,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ge,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:$,pointsAtY:$,pointsAtZ:$,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:qn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:qn,rev:qn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:qn,requiredFeatures:qn,requiredFonts:qn,requiredFormats:qn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:$,specularExponent:$,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:$,strikethroughThickness:$,string:null,stroke:null,strokeDashArray:qn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:$,strokeOpacity:$,strokeWidth:null,style:null,surfaceScale:$,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:qn,tabIndex:$,tableValues:null,target:null,targetX:$,targetY:$,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:qn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:$,underlineThickness:$,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:$,values:null,vAlphabetic:$,vMathematical:$,vectorEffect:null,vHanging:$,vIdeographic:$,version:null,vertAdvY:$,vertOriginX:$,vertOriginY:$,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:$,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Qg}),Kg=Dl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,a){return"xlink:"+a.slice(5).toLowerCase()}}),Wg=Dl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Zg}),$g=Dl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,a){return"xml:"+a.slice(3).toLowerCase()}}),n2={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},t2=/[A-Z]/g,Bp=/-[a-z]/g,r2=/^data[-\w.:]+$/i;function l2(t,a){const l=Rc(a);let u=a,s=_n;if(l in t.normal)return t.property[t.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&r2.test(a)){if(a.charAt(4)==="-"){const c=a.slice(5).replace(Bp,i2);u="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=a.slice(4);if(!Bp.test(c)){let f=c.replace(t2,a2);f.charAt(0)!=="-"&&(f="-"+f),a="data"+f}}s=Wc}return new s(u,a)}function a2(t){return"-"+t.toLowerCase()}function i2(t){return t.charAt(1).toUpperCase()}const u2=Xg([Jg,$S,Kg,Wg,$g],"html"),$c=Xg([Jg,e2,Kg,Wg,$g],"svg");function s2(t){return t.join(" ").trim()}var Tl={},pc,Hp;function o2(){if(Hp)return pc;Hp=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,a=/\n/g,l=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,m=/^\s+|\s+$/g,p=`
`,h="/",b="*",x="",S="comment",v="declaration";function C(z,j){if(typeof z!="string")throw new TypeError("First argument must be a string");if(!z)return[];j=j||{};var H=1,_=1;function K(ae){var ne=ae.match(a);ne&&(H+=ne.length);var B=ae.lastIndexOf(p);_=~B?ae.length-B:_+ae.length}function re(){var ae={line:H,column:_};return function(ne){return ne.position=new I(ae),W(),ne}}function I(ae){this.start=ae,this.end={line:H,column:_},this.source=j.source}I.prototype.content=z;function ee(ae){var ne=new Error(j.source+":"+H+":"+_+": "+ae);if(ne.reason=ae,ne.filename=j.source,ne.line=H,ne.column=_,ne.source=z,!j.silent)throw ne}function oe(ae){var ne=ae.exec(z);if(ne){var B=ne[0];return K(B),z=z.slice(B.length),ne}}function W(){oe(l)}function A(ae){var ne;for(ae=ae||[];ne=P();)ne!==!1&&ae.push(ne);return ae}function P(){var ae=re();if(!(h!=z.charAt(0)||b!=z.charAt(1))){for(var ne=2;x!=z.charAt(ne)&&(b!=z.charAt(ne)||h!=z.charAt(ne+1));)++ne;if(ne+=2,x===z.charAt(ne-1))return ee("End of comment missing");var B=z.slice(2,ne-2);return _+=2,K(B),z=z.slice(ne),_+=2,ae({type:S,comment:B})}}function Q(){var ae=re(),ne=oe(u);if(ne){if(P(),!oe(s))return ee("property missing ':'");var B=oe(c),Z=ae({type:v,property:O(ne[0].replace(t,x)),value:B?O(B[0].replace(t,x)):x});return oe(f),Z}}function de(){var ae=[];A(ae);for(var ne;ne=Q();)ne!==!1&&(ae.push(ne),A(ae));return ae}return W(),de()}function O(z){return z?z.replace(m,x):x}return pc=C,pc}var qp;function c2(){if(qp)return Tl;qp=1;var t=Tl&&Tl.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(Tl,"__esModule",{value:!0}),Tl.default=l;const a=t(o2());function l(u,s){let c=null;if(!u||typeof u!="string")return c;const f=(0,a.default)(u),m=typeof s=="function";return f.forEach(p=>{if(p.type!=="declaration")return;const{property:h,value:b}=p;m?s(h,b,p):b&&(c=c||{},c[h]=b)}),c}return Tl}var Da={},Ip;function f2(){if(Ip)return Da;Ip=1,Object.defineProperty(Da,"__esModule",{value:!0}),Da.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,a=/-([a-z])/g,l=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,c=function(h){return!h||l.test(h)||t.test(h)},f=function(h,b){return b.toUpperCase()},m=function(h,b){return"".concat(b,"-")},p=function(h,b){return b===void 0&&(b={}),c(h)?h:(h=h.toLowerCase(),b.reactCompat?h=h.replace(s,m):h=h.replace(u,m),h.replace(a,f))};return Da.camelCase=p,Da}var Ra,Vp;function d2(){if(Vp)return Ra;Vp=1;var t=Ra&&Ra.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},a=t(c2()),l=f2();function u(s,c){var f={};return!s||typeof s!="string"||(0,a.default)(s,function(m,p){m&&p&&(f[(0,l.camelCase)(m,c)]=p)}),f}return u.default=u,Ra=u,Ra}var h2=d2();const m2=Yc(h2),ex=nx("end"),ef=nx("start");function nx(t){return a;function a(l){const u=l&&l.position&&l.position[t]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function p2(t){const a=ef(t),l=ex(t);if(a&&l)return{start:a,end:l}}function Ha(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Fp(t.position):"start"in t||"end"in t?Fp(t):"line"in t||"column"in t?Lc(t):""}function Lc(t){return Gp(t&&t.line)+":"+Gp(t&&t.column)}function Fp(t){return Lc(t&&t.start)+"-"+Lc(t&&t.end)}function Gp(t){return t&&typeof t=="number"?t:1}class xn extends Error{constructor(a,l,u){super(),typeof l=="string"&&(u=l,l=void 0);let s="",c={},f=!1;if(l&&("line"in l&&"column"in l?c={place:l}:"start"in l&&"end"in l?c={place:l}:"type"in l?c={ancestors:[l],place:l.position}:c={...l}),typeof a=="string"?s=a:!c.cause&&a&&(f=!0,s=a.message,c.cause=a),!c.ruleId&&!c.source&&typeof u=="string"){const p=u.indexOf(":");p===-1?c.ruleId=u:(c.source=u.slice(0,p),c.ruleId=u.slice(p+1))}if(!c.place&&c.ancestors&&c.ancestors){const p=c.ancestors[c.ancestors.length-1];p&&(c.place=p.position)}const m=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=m?m.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=m?m.line:void 0,this.name=Ha(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=f&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xn.prototype.file="";xn.prototype.name="";xn.prototype.reason="";xn.prototype.message="";xn.prototype.stack="";xn.prototype.column=void 0;xn.prototype.line=void 0;xn.prototype.ancestors=void 0;xn.prototype.cause=void 0;xn.prototype.fatal=void 0;xn.prototype.place=void 0;xn.prototype.ruleId=void 0;xn.prototype.source=void 0;const nf={}.hasOwnProperty,g2=new Map,x2=/[A-Z]/g,b2=new Set(["table","tbody","thead","tfoot","tr"]),y2=new Set(["td","th"]),tx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function v2(t,a){if(!a||a.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const l=a.filePath||void 0;let u;if(a.development){if(typeof a.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=j2(l,a.jsxDEV)}else{if(typeof a.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof a.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=A2(l,a.jsx,a.jsxs)}const s={Fragment:a.Fragment,ancestors:[],components:a.components||{},create:u,elementAttributeNameCase:a.elementAttributeNameCase||"react",evaluater:a.createEvaluater?a.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:a.ignoreInvalidStyle||!1,passKeys:a.passKeys!==!1,passNode:a.passNode||!1,schema:a.space==="svg"?$c:u2,stylePropertyNameCase:a.stylePropertyNameCase||"dom",tableCellAlignToStyle:a.tableCellAlignToStyle!==!1},c=rx(s,t,void 0);return c&&typeof c!="string"?c:s.create(t,s.Fragment,{children:c||void 0},void 0)}function rx(t,a,l){if(a.type==="element")return S2(t,a,l);if(a.type==="mdxFlowExpression"||a.type==="mdxTextExpression")return k2(t,a);if(a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement")return C2(t,a,l);if(a.type==="mdxjsEsm")return w2(t,a);if(a.type==="root")return T2(t,a,l);if(a.type==="text")return E2(t,a)}function S2(t,a,l){const u=t.schema;let s=u;a.tagName.toLowerCase()==="svg"&&u.space==="html"&&(s=$c,t.schema=s),t.ancestors.push(a);const c=ax(t,a.tagName,!1),f=N2(t,a);let m=rf(t,a);return b2.has(a.tagName)&&(m=m.filter(function(p){return typeof p=="string"?!KS(p):!0})),lx(t,f,c,a),tf(f,m),t.ancestors.pop(),t.schema=u,t.create(a,c,f,l)}function k2(t,a){if(a.data&&a.data.estree&&t.evaluater){const u=a.data.estree.body[0];return u.type,t.evaluater.evaluateExpression(u.expression)}Ga(t,a.position)}function w2(t,a){if(a.data&&a.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(a.data.estree);Ga(t,a.position)}function C2(t,a,l){const u=t.schema;let s=u;a.name==="svg"&&u.space==="html"&&(s=$c,t.schema=s),t.ancestors.push(a);const c=a.name===null?t.Fragment:ax(t,a.name,!0),f=M2(t,a),m=rf(t,a);return lx(t,f,c,a),tf(f,m),t.ancestors.pop(),t.schema=u,t.create(a,c,f,l)}function T2(t,a,l){const u={};return tf(u,rf(t,a)),t.create(a,t.Fragment,u,l)}function E2(t,a){return a.value}function lx(t,a,l,u){typeof l!="string"&&l!==t.Fragment&&t.passNode&&(a.node=u)}function tf(t,a){if(a.length>0){const l=a.length>1?a:a[0];l&&(t.children=l)}}function A2(t,a,l){return u;function u(s,c,f,m){const h=Array.isArray(f.children)?l:a;return m?h(c,f,m):h(c,f)}}function j2(t,a){return l;function l(u,s,c,f){const m=Array.isArray(c.children),p=ef(u);return a(s,c,f,m,{columnNumber:p?p.column-1:void 0,fileName:t,lineNumber:p?p.line:void 0},void 0)}}function N2(t,a){const l={};let u,s;for(s in a.properties)if(s!=="children"&&nf.call(a.properties,s)){const c=_2(t,s,a.properties[s]);if(c){const[f,m]=c;t.tableCellAlignToStyle&&f==="align"&&typeof m=="string"&&y2.has(a.tagName)?u=m:l[f]=m}}if(u){const c=l.style||(l.style={});c[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return l}function M2(t,a){const l={};for(const u of a.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&t.evaluater){const c=u.data.estree.body[0];c.type;const f=c.expression;f.type;const m=f.properties[0];m.type,Object.assign(l,t.evaluater.evaluateExpression(m.argument))}else Ga(t,a.position);else{const s=u.name;let c;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&t.evaluater){const m=u.value.data.estree.body[0];m.type,c=t.evaluater.evaluateExpression(m.expression)}else Ga(t,a.position);else c=u.value===null?!0:u.value;l[s]=c}return l}function rf(t,a){const l=[];let u=-1;const s=t.passKeys?new Map:g2;for(;++u<a.children.length;){const c=a.children[u];let f;if(t.passKeys){const p=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(p){const h=s.get(p)||0;f=p+"-"+h,s.set(p,h+1)}}const m=rx(t,c,f);m!==void 0&&l.push(m)}return l}function _2(t,a,l){const u=l2(t.schema,a);if(!(l==null||typeof l=="number"&&Number.isNaN(l))){if(Array.isArray(l)&&(l=u.commaSeparated?PS(l):s2(l)),u.property==="style"){let s=typeof l=="object"?l:D2(t,String(l));return t.stylePropertyNameCase==="css"&&(s=R2(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&u.space?n2[u.property]||u.property:u.attribute,l]}}function D2(t,a){try{return m2(a,{reactCompat:!0})}catch(l){if(t.ignoreInvalidStyle)return{};const u=l,s=new xn("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=tx+"#cannot-parse-style-attribute",s}}function ax(t,a,l){let u;if(!l)u={type:"Literal",value:a};else if(a.includes(".")){const s=a.split(".");let c=-1,f;for(;++c<s.length;){const m=zp(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};f=f?{type:"MemberExpression",object:f,property:m,computed:!!(c&&m.type==="Literal"),optional:!1}:m}u=f}else u=zp(a)&&!/^[a-z]/.test(a)?{type:"Identifier",name:a}:{type:"Literal",value:a};if(u.type==="Literal"){const s=u.value;return nf.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(u);Ga(t)}function Ga(t,a){const l=new xn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:a,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw l.file=t.filePath||void 0,l.url=tx+"#cannot-handle-mdx-estrees-without-createevaluater",l}function R2(t){const a={};let l;for(l in t)nf.call(t,l)&&(a[O2(l)]=t[l]);return a}function O2(t){let a=t.replace(x2,z2);return a.slice(0,3)==="ms-"&&(a="-"+a),a}function z2(t){return"-"+t.toLowerCase()}const gc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},L2={};function lf(t,a){const l=L2,u=typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,s=typeof l.includeHtml=="boolean"?l.includeHtml:!0;return ix(t,u,s)}function ix(t,a,l){if(U2(t)){if("value"in t)return t.type==="html"&&!l?"":t.value;if(a&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Yp(t.children,a,l)}return Array.isArray(t)?Yp(t,a,l):""}function Yp(t,a,l){const u=[];let s=-1;for(;++s<t.length;)u[s]=ix(t[s],a,l);return u.join("")}function U2(t){return!!(t&&typeof t=="object")}const Pp=document.createElement("i");function af(t){const a="&"+t+";";Pp.innerHTML=a;const l=Pp.textContent;return l.charCodeAt(l.length-1)===59&&t!=="semi"||l===a?!1:l}function In(t,a,l,u){const s=t.length;let c=0,f;if(a<0?a=-a>s?0:s+a:a=a>s?s:a,l=l>0?l:0,u.length<1e4)f=Array.from(u),f.unshift(a,l),t.splice(...f);else for(l&&t.splice(a,l);c<u.length;)f=u.slice(c,c+1e4),f.unshift(a,0),t.splice(...f),c+=1e4,a+=1e4}function nt(t,a){return t.length>0?(In(t,t.length,0,a),t):a}const Xp={}.hasOwnProperty;function ux(t){const a={};let l=-1;for(;++l<t.length;)B2(a,t[l]);return a}function B2(t,a){let l;for(l in a){const s=(Xp.call(t,l)?t[l]:void 0)||(t[l]={}),c=a[l];let f;if(c)for(f in c){Xp.call(s,f)||(s[f]=[]);const m=c[f];H2(s[f],Array.isArray(m)?m:m?[m]:[])}}}function H2(t,a){let l=-1;const u=[];for(;++l<a.length;)(a[l].add==="after"?t:u).push(a[l]);In(t,0,0,u)}function sx(t,a){const l=Number.parseInt(t,a);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)===65535||(l&65535)===65534||l>1114111?"�":String.fromCodePoint(l)}function ut(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Sn=pr(/[A-Za-z]/),gn=pr(/[\dA-Za-z]/),q2=pr(/[#-'*+\--9=?A-Z^-~]/);function Mu(t){return t!==null&&(t<32||t===127)}const Uc=pr(/\d/),I2=pr(/[\dA-Fa-f]/),V2=pr(/[!-/:-@[-`{-~]/);function he(t){return t!==null&&t<-2}function Fe(t){return t!==null&&(t<0||t===32)}function Te(t){return t===-2||t===-1||t===32}const Lu=pr(new RegExp("\\p{P}|\\p{S}","u")),zr=pr(/\s/);function pr(t){return a;function a(l){return l!==null&&l>-1&&t.test(String.fromCharCode(l))}}function Rl(t){const a=[];let l=-1,u=0,s=0;for(;++l<t.length;){const c=t.charCodeAt(l);let f="";if(c===37&&gn(t.charCodeAt(l+1))&&gn(t.charCodeAt(l+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(f=String.fromCharCode(c));else if(c>55295&&c<57344){const m=t.charCodeAt(l+1);c<56320&&m>56319&&m<57344?(f=String.fromCharCode(c,m),s=1):f="�"}else f=String.fromCharCode(c);f&&(a.push(t.slice(u,l),encodeURIComponent(f)),u=l+s+1,f=""),s&&(l+=s,s=0)}return a.join("")+t.slice(u)}function Me(t,a,l,u){const s=u?u-1:Number.POSITIVE_INFINITY;let c=0;return f;function f(p){return Te(p)?(t.enter(l),m(p)):a(p)}function m(p){return Te(p)&&c++<s?(t.consume(p),m):(t.exit(l),a(p))}}const F2={tokenize:G2};function G2(t){const a=t.attempt(this.parser.constructs.contentInitial,u,s);let l;return a;function u(m){if(m===null){t.consume(m);return}return t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),Me(t,a,"linePrefix")}function s(m){return t.enter("paragraph"),c(m)}function c(m){const p=t.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=p),l=p,f(m)}function f(m){if(m===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(m);return}return he(m)?(t.consume(m),t.exit("chunkText"),c):(t.consume(m),f)}}const Y2={tokenize:P2},Jp={tokenize:X2};function P2(t){const a=this,l=[];let u=0,s,c,f;return m;function m(_){if(u<l.length){const K=l[u];return a.containerState=K[1],t.attempt(K[0].continuation,p,h)(_)}return h(_)}function p(_){if(u++,a.containerState._closeFlow){a.containerState._closeFlow=void 0,s&&H();const K=a.events.length;let re=K,I;for(;re--;)if(a.events[re][0]==="exit"&&a.events[re][1].type==="chunkFlow"){I=a.events[re][1].end;break}j(u);let ee=K;for(;ee<a.events.length;)a.events[ee][1].end={...I},ee++;return In(a.events,re+1,0,a.events.slice(K)),a.events.length=ee,h(_)}return m(_)}function h(_){if(u===l.length){if(!s)return S(_);if(s.currentConstruct&&s.currentConstruct.concrete)return C(_);a.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return a.containerState={},t.check(Jp,b,x)(_)}function b(_){return s&&H(),j(u),S(_)}function x(_){return a.parser.lazy[a.now().line]=u!==l.length,f=a.now().offset,C(_)}function S(_){return a.containerState={},t.attempt(Jp,v,C)(_)}function v(_){return u++,l.push([a.currentConstruct,a.containerState]),S(_)}function C(_){if(_===null){s&&H(),j(0),t.consume(_);return}return s=s||a.parser.flow(a.now()),t.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:c}),O(_)}function O(_){if(_===null){z(t.exit("chunkFlow"),!0),j(0),t.consume(_);return}return he(_)?(t.consume(_),z(t.exit("chunkFlow")),u=0,a.interrupt=void 0,m):(t.consume(_),O)}function z(_,K){const re=a.sliceStream(_);if(K&&re.push(null),_.previous=c,c&&(c.next=_),c=_,s.defineSkip(_.start),s.write(re),a.parser.lazy[_.start.line]){let I=s.events.length;for(;I--;)if(s.events[I][1].start.offset<f&&(!s.events[I][1].end||s.events[I][1].end.offset>f))return;const ee=a.events.length;let oe=ee,W,A;for(;oe--;)if(a.events[oe][0]==="exit"&&a.events[oe][1].type==="chunkFlow"){if(W){A=a.events[oe][1].end;break}W=!0}for(j(u),I=ee;I<a.events.length;)a.events[I][1].end={...A},I++;In(a.events,oe+1,0,a.events.slice(ee)),a.events.length=I}}function j(_){let K=l.length;for(;K-- >_;){const re=l[K];a.containerState=re[1],re[0].exit.call(a,t)}l.length=_}function H(){s.write([null]),c=void 0,s=void 0,a.containerState._closeFlow=void 0}}function X2(t,a,l){return Me(t,t.attempt(this.parser.constructs.document,a,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Nl(t){if(t===null||Fe(t)||zr(t))return 1;if(Lu(t))return 2}function Uu(t,a,l){const u=[];let s=-1;for(;++s<t.length;){const c=t[s].resolveAll;c&&!u.includes(c)&&(a=c(a,l),u.push(c))}return a}const Bc={name:"attention",resolveAll:J2,tokenize:Q2};function J2(t,a){let l=-1,u,s,c,f,m,p,h,b;for(;++l<t.length;)if(t[l][0]==="enter"&&t[l][1].type==="attentionSequence"&&t[l][1]._close){for(u=l;u--;)if(t[u][0]==="exit"&&t[u][1].type==="attentionSequence"&&t[u][1]._open&&a.sliceSerialize(t[u][1]).charCodeAt(0)===a.sliceSerialize(t[l][1]).charCodeAt(0)){if((t[u][1]._close||t[l][1]._open)&&(t[l][1].end.offset-t[l][1].start.offset)%3&&!((t[u][1].end.offset-t[u][1].start.offset+t[l][1].end.offset-t[l][1].start.offset)%3))continue;p=t[u][1].end.offset-t[u][1].start.offset>1&&t[l][1].end.offset-t[l][1].start.offset>1?2:1;const x={...t[u][1].end},S={...t[l][1].start};Qp(x,-p),Qp(S,p),f={type:p>1?"strongSequence":"emphasisSequence",start:x,end:{...t[u][1].end}},m={type:p>1?"strongSequence":"emphasisSequence",start:{...t[l][1].start},end:S},c={type:p>1?"strongText":"emphasisText",start:{...t[u][1].end},end:{...t[l][1].start}},s={type:p>1?"strong":"emphasis",start:{...f.start},end:{...m.end}},t[u][1].end={...f.start},t[l][1].start={...m.end},h=[],t[u][1].end.offset-t[u][1].start.offset&&(h=nt(h,[["enter",t[u][1],a],["exit",t[u][1],a]])),h=nt(h,[["enter",s,a],["enter",f,a],["exit",f,a],["enter",c,a]]),h=nt(h,Uu(a.parser.constructs.insideSpan.null,t.slice(u+1,l),a)),h=nt(h,[["exit",c,a],["enter",m,a],["exit",m,a],["exit",s,a]]),t[l][1].end.offset-t[l][1].start.offset?(b=2,h=nt(h,[["enter",t[l][1],a],["exit",t[l][1],a]])):b=0,In(t,u-1,l-u+3,h),l=u+h.length-b-2;break}}for(l=-1;++l<t.length;)t[l][1].type==="attentionSequence"&&(t[l][1].type="data");return t}function Q2(t,a){const l=this.parser.constructs.attentionMarkers.null,u=this.previous,s=Nl(u);let c;return f;function f(p){return c=p,t.enter("attentionSequence"),m(p)}function m(p){if(p===c)return t.consume(p),m;const h=t.exit("attentionSequence"),b=Nl(p),x=!b||b===2&&s||l.includes(p),S=!s||s===2&&b||l.includes(u);return h._open=!!(c===42?x:x&&(s||!S)),h._close=!!(c===42?S:S&&(b||!x)),a(p)}}function Qp(t,a){t.column+=a,t.offset+=a,t._bufferIndex+=a}const Z2={name:"autolink",tokenize:K2};function K2(t,a,l){let u=0;return s;function s(v){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(v),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),c}function c(v){return Sn(v)?(t.consume(v),f):v===64?l(v):h(v)}function f(v){return v===43||v===45||v===46||gn(v)?(u=1,m(v)):h(v)}function m(v){return v===58?(t.consume(v),u=0,p):(v===43||v===45||v===46||gn(v))&&u++<32?(t.consume(v),m):(u=0,h(v))}function p(v){return v===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(v),t.exit("autolinkMarker"),t.exit("autolink"),a):v===null||v===32||v===60||Mu(v)?l(v):(t.consume(v),p)}function h(v){return v===64?(t.consume(v),b):q2(v)?(t.consume(v),h):l(v)}function b(v){return gn(v)?x(v):l(v)}function x(v){return v===46?(t.consume(v),u=0,b):v===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(v),t.exit("autolinkMarker"),t.exit("autolink"),a):S(v)}function S(v){if((v===45||gn(v))&&u++<63){const C=v===45?S:x;return t.consume(v),C}return l(v)}}const Ka={partial:!0,tokenize:W2};function W2(t,a,l){return u;function u(c){return Te(c)?Me(t,s,"linePrefix")(c):s(c)}function s(c){return c===null||he(c)?a(c):l(c)}}const ox={continuation:{tokenize:ek},exit:nk,name:"blockQuote",tokenize:$2};function $2(t,a,l){const u=this;return s;function s(f){if(f===62){const m=u.containerState;return m.open||(t.enter("blockQuote",{_container:!0}),m.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(f),t.exit("blockQuoteMarker"),c}return l(f)}function c(f){return Te(f)?(t.enter("blockQuotePrefixWhitespace"),t.consume(f),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),a):(t.exit("blockQuotePrefix"),a(f))}}function ek(t,a,l){const u=this;return s;function s(f){return Te(f)?Me(t,c,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):c(f)}function c(f){return t.attempt(ox,a,l)(f)}}function nk(t){t.exit("blockQuote")}const cx={name:"characterEscape",tokenize:tk};function tk(t,a,l){return u;function u(c){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(c),t.exit("escapeMarker"),s}function s(c){return V2(c)?(t.enter("characterEscapeValue"),t.consume(c),t.exit("characterEscapeValue"),t.exit("characterEscape"),a):l(c)}}const fx={name:"characterReference",tokenize:rk};function rk(t,a,l){const u=this;let s=0,c,f;return m;function m(x){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(x),t.exit("characterReferenceMarker"),p}function p(x){return x===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(x),t.exit("characterReferenceMarkerNumeric"),h):(t.enter("characterReferenceValue"),c=31,f=gn,b(x))}function h(x){return x===88||x===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(x),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),c=6,f=I2,b):(t.enter("characterReferenceValue"),c=7,f=Uc,b(x))}function b(x){if(x===59&&s){const S=t.exit("characterReferenceValue");return f===gn&&!af(u.sliceSerialize(S))?l(x):(t.enter("characterReferenceMarker"),t.consume(x),t.exit("characterReferenceMarker"),t.exit("characterReference"),a)}return f(x)&&s++<c?(t.consume(x),b):l(x)}}const Zp={partial:!0,tokenize:ak},Kp={concrete:!0,name:"codeFenced",tokenize:lk};function lk(t,a,l){const u=this,s={partial:!0,tokenize:re};let c=0,f=0,m;return p;function p(I){return h(I)}function h(I){const ee=u.events[u.events.length-1];return c=ee&&ee[1].type==="linePrefix"?ee[2].sliceSerialize(ee[1],!0).length:0,m=I,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),b(I)}function b(I){return I===m?(f++,t.consume(I),b):f<3?l(I):(t.exit("codeFencedFenceSequence"),Te(I)?Me(t,x,"whitespace")(I):x(I))}function x(I){return I===null||he(I)?(t.exit("codeFencedFence"),u.interrupt?a(I):t.check(Zp,O,K)(I)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),S(I))}function S(I){return I===null||he(I)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),x(I)):Te(I)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Me(t,v,"whitespace")(I)):I===96&&I===m?l(I):(t.consume(I),S)}function v(I){return I===null||he(I)?x(I):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),C(I))}function C(I){return I===null||he(I)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),x(I)):I===96&&I===m?l(I):(t.consume(I),C)}function O(I){return t.attempt(s,K,z)(I)}function z(I){return t.enter("lineEnding"),t.consume(I),t.exit("lineEnding"),j}function j(I){return c>0&&Te(I)?Me(t,H,"linePrefix",c+1)(I):H(I)}function H(I){return I===null||he(I)?t.check(Zp,O,K)(I):(t.enter("codeFlowValue"),_(I))}function _(I){return I===null||he(I)?(t.exit("codeFlowValue"),H(I)):(t.consume(I),_)}function K(I){return t.exit("codeFenced"),a(I)}function re(I,ee,oe){let W=0;return A;function A(ne){return I.enter("lineEnding"),I.consume(ne),I.exit("lineEnding"),P}function P(ne){return I.enter("codeFencedFence"),Te(ne)?Me(I,Q,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ne):Q(ne)}function Q(ne){return ne===m?(I.enter("codeFencedFenceSequence"),de(ne)):oe(ne)}function de(ne){return ne===m?(W++,I.consume(ne),de):W>=f?(I.exit("codeFencedFenceSequence"),Te(ne)?Me(I,ae,"whitespace")(ne):ae(ne)):oe(ne)}function ae(ne){return ne===null||he(ne)?(I.exit("codeFencedFence"),ee(ne)):oe(ne)}}}function ak(t,a,l){const u=this;return s;function s(f){return f===null?l(f):(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c)}function c(f){return u.parser.lazy[u.now().line]?l(f):a(f)}}const xc={name:"codeIndented",tokenize:uk},ik={partial:!0,tokenize:sk};function uk(t,a,l){const u=this;return s;function s(h){return t.enter("codeIndented"),Me(t,c,"linePrefix",5)(h)}function c(h){const b=u.events[u.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?f(h):l(h)}function f(h){return h===null?p(h):he(h)?t.attempt(ik,f,p)(h):(t.enter("codeFlowValue"),m(h))}function m(h){return h===null||he(h)?(t.exit("codeFlowValue"),f(h)):(t.consume(h),m)}function p(h){return t.exit("codeIndented"),a(h)}}function sk(t,a,l){const u=this;return s;function s(f){return u.parser.lazy[u.now().line]?l(f):he(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),s):Me(t,c,"linePrefix",5)(f)}function c(f){const m=u.events[u.events.length-1];return m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?a(f):he(f)?s(f):l(f)}}const ok={name:"codeText",previous:fk,resolve:ck,tokenize:dk};function ck(t){let a=t.length-4,l=3,u,s;if((t[l][1].type==="lineEnding"||t[l][1].type==="space")&&(t[a][1].type==="lineEnding"||t[a][1].type==="space")){for(u=l;++u<a;)if(t[u][1].type==="codeTextData"){t[l][1].type="codeTextPadding",t[a][1].type="codeTextPadding",l+=2,a-=2;break}}for(u=l-1,a++;++u<=a;)s===void 0?u!==a&&t[u][1].type!=="lineEnding"&&(s=u):(u===a||t[u][1].type==="lineEnding")&&(t[s][1].type="codeTextData",u!==s+2&&(t[s][1].end=t[u-1][1].end,t.splice(s+2,u-s-2),a-=u-s-2,u=s+2),s=void 0);return t}function fk(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function dk(t,a,l){let u=0,s,c;return f;function f(x){return t.enter("codeText"),t.enter("codeTextSequence"),m(x)}function m(x){return x===96?(t.consume(x),u++,m):(t.exit("codeTextSequence"),p(x))}function p(x){return x===null?l(x):x===32?(t.enter("space"),t.consume(x),t.exit("space"),p):x===96?(c=t.enter("codeTextSequence"),s=0,b(x)):he(x)?(t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),p):(t.enter("codeTextData"),h(x))}function h(x){return x===null||x===32||x===96||he(x)?(t.exit("codeTextData"),p(x)):(t.consume(x),h)}function b(x){return x===96?(t.consume(x),s++,b):s===u?(t.exit("codeTextSequence"),t.exit("codeText"),a(x)):(c.type="codeTextData",h(x))}}class hk{constructor(a){this.left=a?[...a]:[],this.right=[]}get(a){if(a<0||a>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+a+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return a<this.left.length?this.left[a]:this.right[this.right.length-a+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(a,l){const u=l??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(a,u):a>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-a+this.left.length).reverse():this.left.slice(a).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(a,l,u){const s=l||0;this.setCursor(Math.trunc(a));const c=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return u&&Oa(this.left,u),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(a){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(a)}pushMany(a){this.setCursor(Number.POSITIVE_INFINITY),Oa(this.left,a)}unshift(a){this.setCursor(0),this.right.push(a)}unshiftMany(a){this.setCursor(0),Oa(this.right,a.reverse())}setCursor(a){if(!(a===this.left.length||a>this.left.length&&this.right.length===0||a<0&&this.left.length===0))if(a<this.left.length){const l=this.left.splice(a,Number.POSITIVE_INFINITY);Oa(this.right,l.reverse())}else{const l=this.right.splice(this.left.length+this.right.length-a,Number.POSITIVE_INFINITY);Oa(this.left,l.reverse())}}}function Oa(t,a){let l=0;if(a.length<1e4)t.push(...a);else for(;l<a.length;)t.push(...a.slice(l,l+1e4)),l+=1e4}function dx(t){const a={};let l=-1,u,s,c,f,m,p,h;const b=new hk(t);for(;++l<b.length;){for(;l in a;)l=a[l];if(u=b.get(l),l&&u[1].type==="chunkFlow"&&b.get(l-1)[1].type==="listItemPrefix"&&(p=u[1]._tokenizer.events,c=0,c<p.length&&p[c][1].type==="lineEndingBlank"&&(c+=2),c<p.length&&p[c][1].type==="content"))for(;++c<p.length&&p[c][1].type!=="content";)p[c][1].type==="chunkText"&&(p[c][1]._isInFirstContentOfListItem=!0,c++);if(u[0]==="enter")u[1].contentType&&(Object.assign(a,mk(b,l)),l=a[l],h=!0);else if(u[1]._container){for(c=l,s=void 0;c--;)if(f=b.get(c),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(s&&(b.get(s)[1].type="lineEndingBlank"),f[1].type="lineEnding",s=c);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;s&&(u[1].end={...b.get(s)[1].start},m=b.slice(s,l),m.unshift(u),b.splice(s,l-s+1,m))}}return In(t,0,Number.POSITIVE_INFINITY,b.slice(0)),!h}function mk(t,a){const l=t.get(a)[1],u=t.get(a)[2];let s=a-1;const c=[];let f=l._tokenizer;f||(f=u.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const m=f.events,p=[],h={};let b,x,S=-1,v=l,C=0,O=0;const z=[O];for(;v;){for(;t.get(++s)[1]!==v;);c.push(s),v._tokenizer||(b=u.sliceStream(v),v.next||b.push(null),x&&f.defineSkip(v.start),v._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(b),v._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),x=v,v=v.next}for(v=l;++S<m.length;)m[S][0]==="exit"&&m[S-1][0]==="enter"&&m[S][1].type===m[S-1][1].type&&m[S][1].start.line!==m[S][1].end.line&&(O=S+1,z.push(O),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(f.events=[],v?(v._tokenizer=void 0,v.previous=void 0):z.pop(),S=z.length;S--;){const j=m.slice(z[S],z[S+1]),H=c.pop();p.push([H,H+j.length-1]),t.splice(H,2,j)}for(p.reverse(),S=-1;++S<p.length;)h[C+p[S][0]]=C+p[S][1],C+=p[S][1]-p[S][0]-1;return h}const pk={resolve:xk,tokenize:bk},gk={partial:!0,tokenize:yk};function xk(t){return dx(t),t}function bk(t,a){let l;return u;function u(m){return t.enter("content"),l=t.enter("chunkContent",{contentType:"content"}),s(m)}function s(m){return m===null?c(m):he(m)?t.check(gk,f,c)(m):(t.consume(m),s)}function c(m){return t.exit("chunkContent"),t.exit("content"),a(m)}function f(m){return t.consume(m),t.exit("chunkContent"),l.next=t.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,s}}function yk(t,a,l){const u=this;return s;function s(f){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),Me(t,c,"linePrefix")}function c(f){if(f===null||he(f))return l(f);const m=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?a(f):t.interrupt(u.parser.constructs.flow,l,a)(f)}}function hx(t,a,l,u,s,c,f,m,p){const h=p||Number.POSITIVE_INFINITY;let b=0;return x;function x(j){return j===60?(t.enter(u),t.enter(s),t.enter(c),t.consume(j),t.exit(c),S):j===null||j===32||j===41||Mu(j)?l(j):(t.enter(u),t.enter(f),t.enter(m),t.enter("chunkString",{contentType:"string"}),O(j))}function S(j){return j===62?(t.enter(c),t.consume(j),t.exit(c),t.exit(s),t.exit(u),a):(t.enter(m),t.enter("chunkString",{contentType:"string"}),v(j))}function v(j){return j===62?(t.exit("chunkString"),t.exit(m),S(j)):j===null||j===60||he(j)?l(j):(t.consume(j),j===92?C:v)}function C(j){return j===60||j===62||j===92?(t.consume(j),v):v(j)}function O(j){return!b&&(j===null||j===41||Fe(j))?(t.exit("chunkString"),t.exit(m),t.exit(f),t.exit(u),a(j)):b<h&&j===40?(t.consume(j),b++,O):j===41?(t.consume(j),b--,O):j===null||j===32||j===40||Mu(j)?l(j):(t.consume(j),j===92?z:O)}function z(j){return j===40||j===41||j===92?(t.consume(j),O):O(j)}}function mx(t,a,l,u,s,c){const f=this;let m=0,p;return h;function h(v){return t.enter(u),t.enter(s),t.consume(v),t.exit(s),t.enter(c),b}function b(v){return m>999||v===null||v===91||v===93&&!p||v===94&&!m&&"_hiddenFootnoteSupport"in f.parser.constructs?l(v):v===93?(t.exit(c),t.enter(s),t.consume(v),t.exit(s),t.exit(u),a):he(v)?(t.enter("lineEnding"),t.consume(v),t.exit("lineEnding"),b):(t.enter("chunkString",{contentType:"string"}),x(v))}function x(v){return v===null||v===91||v===93||he(v)||m++>999?(t.exit("chunkString"),b(v)):(t.consume(v),p||(p=!Te(v)),v===92?S:x)}function S(v){return v===91||v===92||v===93?(t.consume(v),m++,x):x(v)}}function px(t,a,l,u,s,c){let f;return m;function m(S){return S===34||S===39||S===40?(t.enter(u),t.enter(s),t.consume(S),t.exit(s),f=S===40?41:S,p):l(S)}function p(S){return S===f?(t.enter(s),t.consume(S),t.exit(s),t.exit(u),a):(t.enter(c),h(S))}function h(S){return S===f?(t.exit(c),p(f)):S===null?l(S):he(S)?(t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),Me(t,h,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),b(S))}function b(S){return S===f||S===null||he(S)?(t.exit("chunkString"),h(S)):(t.consume(S),S===92?x:b)}function x(S){return S===f||S===92?(t.consume(S),b):b(S)}}function qa(t,a){let l;return u;function u(s){return he(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),l=!0,u):Te(s)?Me(t,u,l?"linePrefix":"lineSuffix")(s):a(s)}}const vk={name:"definition",tokenize:kk},Sk={partial:!0,tokenize:wk};function kk(t,a,l){const u=this;let s;return c;function c(v){return t.enter("definition"),f(v)}function f(v){return mx.call(u,t,m,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function m(v){return s=ut(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),v===58?(t.enter("definitionMarker"),t.consume(v),t.exit("definitionMarker"),p):l(v)}function p(v){return Fe(v)?qa(t,h)(v):h(v)}function h(v){return hx(t,b,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function b(v){return t.attempt(Sk,x,x)(v)}function x(v){return Te(v)?Me(t,S,"whitespace")(v):S(v)}function S(v){return v===null||he(v)?(t.exit("definition"),u.parser.defined.push(s),a(v)):l(v)}}function wk(t,a,l){return u;function u(m){return Fe(m)?qa(t,s)(m):l(m)}function s(m){return px(t,c,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(m)}function c(m){return Te(m)?Me(t,f,"whitespace")(m):f(m)}function f(m){return m===null||he(m)?a(m):l(m)}}const Ck={name:"hardBreakEscape",tokenize:Tk};function Tk(t,a,l){return u;function u(c){return t.enter("hardBreakEscape"),t.consume(c),s}function s(c){return he(c)?(t.exit("hardBreakEscape"),a(c)):l(c)}}const Ek={name:"headingAtx",resolve:Ak,tokenize:jk};function Ak(t,a){let l=t.length-2,u=3,s,c;return t[u][1].type==="whitespace"&&(u+=2),l-2>u&&t[l][1].type==="whitespace"&&(l-=2),t[l][1].type==="atxHeadingSequence"&&(u===l-1||l-4>u&&t[l-2][1].type==="whitespace")&&(l-=u+1===l?2:4),l>u&&(s={type:"atxHeadingText",start:t[u][1].start,end:t[l][1].end},c={type:"chunkText",start:t[u][1].start,end:t[l][1].end,contentType:"text"},In(t,u,l-u+1,[["enter",s,a],["enter",c,a],["exit",c,a],["exit",s,a]])),t}function jk(t,a,l){let u=0;return s;function s(b){return t.enter("atxHeading"),c(b)}function c(b){return t.enter("atxHeadingSequence"),f(b)}function f(b){return b===35&&u++<6?(t.consume(b),f):b===null||Fe(b)?(t.exit("atxHeadingSequence"),m(b)):l(b)}function m(b){return b===35?(t.enter("atxHeadingSequence"),p(b)):b===null||he(b)?(t.exit("atxHeading"),a(b)):Te(b)?Me(t,m,"whitespace")(b):(t.enter("atxHeadingText"),h(b))}function p(b){return b===35?(t.consume(b),p):(t.exit("atxHeadingSequence"),m(b))}function h(b){return b===null||b===35||Fe(b)?(t.exit("atxHeadingText"),m(b)):(t.consume(b),h)}}const Nk=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Wp=["pre","script","style","textarea"],Mk={concrete:!0,name:"htmlFlow",resolveTo:Rk,tokenize:Ok},_k={partial:!0,tokenize:Lk},Dk={partial:!0,tokenize:zk};function Rk(t){let a=t.length;for(;a--&&!(t[a][0]==="enter"&&t[a][1].type==="htmlFlow"););return a>1&&t[a-2][1].type==="linePrefix"&&(t[a][1].start=t[a-2][1].start,t[a+1][1].start=t[a-2][1].start,t.splice(a-2,2)),t}function Ok(t,a,l){const u=this;let s,c,f,m,p;return h;function h(w){return b(w)}function b(w){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(w),x}function x(w){return w===33?(t.consume(w),S):w===47?(t.consume(w),c=!0,O):w===63?(t.consume(w),s=3,u.interrupt?a:T):Sn(w)?(t.consume(w),f=String.fromCharCode(w),z):l(w)}function S(w){return w===45?(t.consume(w),s=2,v):w===91?(t.consume(w),s=5,m=0,C):Sn(w)?(t.consume(w),s=4,u.interrupt?a:T):l(w)}function v(w){return w===45?(t.consume(w),u.interrupt?a:T):l(w)}function C(w){const le="CDATA[";return w===le.charCodeAt(m++)?(t.consume(w),m===le.length?u.interrupt?a:Q:C):l(w)}function O(w){return Sn(w)?(t.consume(w),f=String.fromCharCode(w),z):l(w)}function z(w){if(w===null||w===47||w===62||Fe(w)){const le=w===47,pe=f.toLowerCase();return!le&&!c&&Wp.includes(pe)?(s=1,u.interrupt?a(w):Q(w)):Nk.includes(f.toLowerCase())?(s=6,le?(t.consume(w),j):u.interrupt?a(w):Q(w)):(s=7,u.interrupt&&!u.parser.lazy[u.now().line]?l(w):c?H(w):_(w))}return w===45||gn(w)?(t.consume(w),f+=String.fromCharCode(w),z):l(w)}function j(w){return w===62?(t.consume(w),u.interrupt?a:Q):l(w)}function H(w){return Te(w)?(t.consume(w),H):A(w)}function _(w){return w===47?(t.consume(w),A):w===58||w===95||Sn(w)?(t.consume(w),K):Te(w)?(t.consume(w),_):A(w)}function K(w){return w===45||w===46||w===58||w===95||gn(w)?(t.consume(w),K):re(w)}function re(w){return w===61?(t.consume(w),I):Te(w)?(t.consume(w),re):_(w)}function I(w){return w===null||w===60||w===61||w===62||w===96?l(w):w===34||w===39?(t.consume(w),p=w,ee):Te(w)?(t.consume(w),I):oe(w)}function ee(w){return w===p?(t.consume(w),p=null,W):w===null||he(w)?l(w):(t.consume(w),ee)}function oe(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Fe(w)?re(w):(t.consume(w),oe)}function W(w){return w===47||w===62||Te(w)?_(w):l(w)}function A(w){return w===62?(t.consume(w),P):l(w)}function P(w){return w===null||he(w)?Q(w):Te(w)?(t.consume(w),P):l(w)}function Q(w){return w===45&&s===2?(t.consume(w),B):w===60&&s===1?(t.consume(w),Z):w===62&&s===4?(t.consume(w),N):w===63&&s===3?(t.consume(w),T):w===93&&s===5?(t.consume(w),be):he(w)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(_k,G,de)(w)):w===null||he(w)?(t.exit("htmlFlowData"),de(w)):(t.consume(w),Q)}function de(w){return t.check(Dk,ae,G)(w)}function ae(w){return t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),ne}function ne(w){return w===null||he(w)?de(w):(t.enter("htmlFlowData"),Q(w))}function B(w){return w===45?(t.consume(w),T):Q(w)}function Z(w){return w===47?(t.consume(w),f="",ie):Q(w)}function ie(w){if(w===62){const le=f.toLowerCase();return Wp.includes(le)?(t.consume(w),N):Q(w)}return Sn(w)&&f.length<8?(t.consume(w),f+=String.fromCharCode(w),ie):Q(w)}function be(w){return w===93?(t.consume(w),T):Q(w)}function T(w){return w===62?(t.consume(w),N):w===45&&s===2?(t.consume(w),T):Q(w)}function N(w){return w===null||he(w)?(t.exit("htmlFlowData"),G(w)):(t.consume(w),N)}function G(w){return t.exit("htmlFlow"),a(w)}}function zk(t,a,l){const u=this;return s;function s(f){return he(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c):l(f)}function c(f){return u.parser.lazy[u.now().line]?l(f):a(f)}}function Lk(t,a,l){return u;function u(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(Ka,a,l)}}const Uk={name:"htmlText",tokenize:Bk};function Bk(t,a,l){const u=this;let s,c,f;return m;function m(T){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(T),p}function p(T){return T===33?(t.consume(T),h):T===47?(t.consume(T),re):T===63?(t.consume(T),_):Sn(T)?(t.consume(T),oe):l(T)}function h(T){return T===45?(t.consume(T),b):T===91?(t.consume(T),c=0,C):Sn(T)?(t.consume(T),H):l(T)}function b(T){return T===45?(t.consume(T),v):l(T)}function x(T){return T===null?l(T):T===45?(t.consume(T),S):he(T)?(f=x,Z(T)):(t.consume(T),x)}function S(T){return T===45?(t.consume(T),v):x(T)}function v(T){return T===62?B(T):T===45?S(T):x(T)}function C(T){const N="CDATA[";return T===N.charCodeAt(c++)?(t.consume(T),c===N.length?O:C):l(T)}function O(T){return T===null?l(T):T===93?(t.consume(T),z):he(T)?(f=O,Z(T)):(t.consume(T),O)}function z(T){return T===93?(t.consume(T),j):O(T)}function j(T){return T===62?B(T):T===93?(t.consume(T),j):O(T)}function H(T){return T===null||T===62?B(T):he(T)?(f=H,Z(T)):(t.consume(T),H)}function _(T){return T===null?l(T):T===63?(t.consume(T),K):he(T)?(f=_,Z(T)):(t.consume(T),_)}function K(T){return T===62?B(T):_(T)}function re(T){return Sn(T)?(t.consume(T),I):l(T)}function I(T){return T===45||gn(T)?(t.consume(T),I):ee(T)}function ee(T){return he(T)?(f=ee,Z(T)):Te(T)?(t.consume(T),ee):B(T)}function oe(T){return T===45||gn(T)?(t.consume(T),oe):T===47||T===62||Fe(T)?W(T):l(T)}function W(T){return T===47?(t.consume(T),B):T===58||T===95||Sn(T)?(t.consume(T),A):he(T)?(f=W,Z(T)):Te(T)?(t.consume(T),W):B(T)}function A(T){return T===45||T===46||T===58||T===95||gn(T)?(t.consume(T),A):P(T)}function P(T){return T===61?(t.consume(T),Q):he(T)?(f=P,Z(T)):Te(T)?(t.consume(T),P):W(T)}function Q(T){return T===null||T===60||T===61||T===62||T===96?l(T):T===34||T===39?(t.consume(T),s=T,de):he(T)?(f=Q,Z(T)):Te(T)?(t.consume(T),Q):(t.consume(T),ae)}function de(T){return T===s?(t.consume(T),s=void 0,ne):T===null?l(T):he(T)?(f=de,Z(T)):(t.consume(T),de)}function ae(T){return T===null||T===34||T===39||T===60||T===61||T===96?l(T):T===47||T===62||Fe(T)?W(T):(t.consume(T),ae)}function ne(T){return T===47||T===62||Fe(T)?W(T):l(T)}function B(T){return T===62?(t.consume(T),t.exit("htmlTextData"),t.exit("htmlText"),a):l(T)}function Z(T){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),ie}function ie(T){return Te(T)?Me(t,be,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):be(T)}function be(T){return t.enter("htmlTextData"),f(T)}}const uf={name:"labelEnd",resolveAll:Vk,resolveTo:Fk,tokenize:Gk},Hk={tokenize:Yk},qk={tokenize:Pk},Ik={tokenize:Xk};function Vk(t){let a=-1;const l=[];for(;++a<t.length;){const u=t[a][1];if(l.push(t[a]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const s=u.type==="labelImage"?4:2;u.type="data",a+=s}}return t.length!==l.length&&In(t,0,t.length,l),t}function Fk(t,a){let l=t.length,u=0,s,c,f,m;for(;l--;)if(s=t[l][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[l][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(f){if(t[l][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=l,s.type!=="labelLink")){u=2;break}}else s.type==="labelEnd"&&(f=l);const p={type:t[c][1].type==="labelLink"?"link":"image",start:{...t[c][1].start},end:{...t[t.length-1][1].end}},h={type:"label",start:{...t[c][1].start},end:{...t[f][1].end}},b={type:"labelText",start:{...t[c+u+2][1].end},end:{...t[f-2][1].start}};return m=[["enter",p,a],["enter",h,a]],m=nt(m,t.slice(c+1,c+u+3)),m=nt(m,[["enter",b,a]]),m=nt(m,Uu(a.parser.constructs.insideSpan.null,t.slice(c+u+4,f-3),a)),m=nt(m,[["exit",b,a],t[f-2],t[f-1],["exit",h,a]]),m=nt(m,t.slice(f+1)),m=nt(m,[["exit",p,a]]),In(t,c,t.length,m),t}function Gk(t,a,l){const u=this;let s=u.events.length,c,f;for(;s--;)if((u.events[s][1].type==="labelImage"||u.events[s][1].type==="labelLink")&&!u.events[s][1]._balanced){c=u.events[s][1];break}return m;function m(S){return c?c._inactive?x(S):(f=u.parser.defined.includes(ut(u.sliceSerialize({start:c.end,end:u.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(S),t.exit("labelMarker"),t.exit("labelEnd"),p):l(S)}function p(S){return S===40?t.attempt(Hk,b,f?b:x)(S):S===91?t.attempt(qk,b,f?h:x)(S):f?b(S):x(S)}function h(S){return t.attempt(Ik,b,x)(S)}function b(S){return a(S)}function x(S){return c._balanced=!0,l(S)}}function Yk(t,a,l){return u;function u(x){return t.enter("resource"),t.enter("resourceMarker"),t.consume(x),t.exit("resourceMarker"),s}function s(x){return Fe(x)?qa(t,c)(x):c(x)}function c(x){return x===41?b(x):hx(t,f,m,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(x)}function f(x){return Fe(x)?qa(t,p)(x):b(x)}function m(x){return l(x)}function p(x){return x===34||x===39||x===40?px(t,h,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(x):b(x)}function h(x){return Fe(x)?qa(t,b)(x):b(x)}function b(x){return x===41?(t.enter("resourceMarker"),t.consume(x),t.exit("resourceMarker"),t.exit("resource"),a):l(x)}}function Pk(t,a,l){const u=this;return s;function s(m){return mx.call(u,t,c,f,"reference","referenceMarker","referenceString")(m)}function c(m){return u.parser.defined.includes(ut(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?a(m):l(m)}function f(m){return l(m)}}function Xk(t,a,l){return u;function u(c){return t.enter("reference"),t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),s}function s(c){return c===93?(t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),t.exit("reference"),a):l(c)}}const Jk={name:"labelStartImage",resolveAll:uf.resolveAll,tokenize:Qk};function Qk(t,a,l){const u=this;return s;function s(m){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(m),t.exit("labelImageMarker"),c}function c(m){return m===91?(t.enter("labelMarker"),t.consume(m),t.exit("labelMarker"),t.exit("labelImage"),f):l(m)}function f(m){return m===94&&"_hiddenFootnoteSupport"in u.parser.constructs?l(m):a(m)}}const Zk={name:"labelStartLink",resolveAll:uf.resolveAll,tokenize:Kk};function Kk(t,a,l){const u=this;return s;function s(f){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelLink"),c}function c(f){return f===94&&"_hiddenFootnoteSupport"in u.parser.constructs?l(f):a(f)}}const bc={name:"lineEnding",tokenize:Wk};function Wk(t,a){return l;function l(u){return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),Me(t,a,"linePrefix")}}const Eu={name:"thematicBreak",tokenize:$k};function $k(t,a,l){let u=0,s;return c;function c(h){return t.enter("thematicBreak"),f(h)}function f(h){return s=h,m(h)}function m(h){return h===s?(t.enter("thematicBreakSequence"),p(h)):u>=3&&(h===null||he(h))?(t.exit("thematicBreak"),a(h)):l(h)}function p(h){return h===s?(t.consume(h),u++,p):(t.exit("thematicBreakSequence"),Te(h)?Me(t,m,"whitespace")(h):m(h))}}const Mn={continuation:{tokenize:rw},exit:aw,name:"list",tokenize:tw},ew={partial:!0,tokenize:iw},nw={partial:!0,tokenize:lw};function tw(t,a,l){const u=this,s=u.events[u.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,f=0;return m;function m(v){const C=u.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(C==="listUnordered"?!u.containerState.marker||v===u.containerState.marker:Uc(v)){if(u.containerState.type||(u.containerState.type=C,t.enter(C,{_container:!0})),C==="listUnordered")return t.enter("listItemPrefix"),v===42||v===45?t.check(Eu,l,h)(v):h(v);if(!u.interrupt||v===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),p(v)}return l(v)}function p(v){return Uc(v)&&++f<10?(t.consume(v),p):(!u.interrupt||f<2)&&(u.containerState.marker?v===u.containerState.marker:v===41||v===46)?(t.exit("listItemValue"),h(v)):l(v)}function h(v){return t.enter("listItemMarker"),t.consume(v),t.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||v,t.check(Ka,u.interrupt?l:b,t.attempt(ew,S,x))}function b(v){return u.containerState.initialBlankLine=!0,c++,S(v)}function x(v){return Te(v)?(t.enter("listItemPrefixWhitespace"),t.consume(v),t.exit("listItemPrefixWhitespace"),S):l(v)}function S(v){return u.containerState.size=c+u.sliceSerialize(t.exit("listItemPrefix"),!0).length,a(v)}}function rw(t,a,l){const u=this;return u.containerState._closeFlow=void 0,t.check(Ka,s,c);function s(m){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Me(t,a,"listItemIndent",u.containerState.size+1)(m)}function c(m){return u.containerState.furtherBlankLines||!Te(m)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,f(m)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,t.attempt(nw,a,f)(m))}function f(m){return u.containerState._closeFlow=!0,u.interrupt=void 0,Me(t,t.attempt(Mn,a,l),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m)}}function lw(t,a,l){const u=this;return Me(t,s,"listItemIndent",u.containerState.size+1);function s(c){const f=u.events[u.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===u.containerState.size?a(c):l(c)}}function aw(t){t.exit(this.containerState.type)}function iw(t,a,l){const u=this;return Me(t,s,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const f=u.events[u.events.length-1];return!Te(c)&&f&&f[1].type==="listItemPrefixWhitespace"?a(c):l(c)}}const $p={name:"setextUnderline",resolveTo:uw,tokenize:sw};function uw(t,a){let l=t.length,u,s,c;for(;l--;)if(t[l][0]==="enter"){if(t[l][1].type==="content"){u=l;break}t[l][1].type==="paragraph"&&(s=l)}else t[l][1].type==="content"&&t.splice(l,1),!c&&t[l][1].type==="definition"&&(c=l);const f={type:"setextHeading",start:{...t[u][1].start},end:{...t[t.length-1][1].end}};return t[s][1].type="setextHeadingText",c?(t.splice(s,0,["enter",f,a]),t.splice(c+1,0,["exit",t[u][1],a]),t[u][1].end={...t[c][1].end}):t[u][1]=f,t.push(["exit",f,a]),t}function sw(t,a,l){const u=this;let s;return c;function c(h){let b=u.events.length,x;for(;b--;)if(u.events[b][1].type!=="lineEnding"&&u.events[b][1].type!=="linePrefix"&&u.events[b][1].type!=="content"){x=u.events[b][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||x)?(t.enter("setextHeadingLine"),s=h,f(h)):l(h)}function f(h){return t.enter("setextHeadingLineSequence"),m(h)}function m(h){return h===s?(t.consume(h),m):(t.exit("setextHeadingLineSequence"),Te(h)?Me(t,p,"lineSuffix")(h):p(h))}function p(h){return h===null||he(h)?(t.exit("setextHeadingLine"),a(h)):l(h)}}const ow={tokenize:cw};function cw(t){const a=this,l=t.attempt(Ka,u,t.attempt(this.parser.constructs.flowInitial,s,Me(t,t.attempt(this.parser.constructs.flow,s,t.attempt(pk,s)),"linePrefix")));return l;function u(c){if(c===null){t.consume(c);return}return t.enter("lineEndingBlank"),t.consume(c),t.exit("lineEndingBlank"),a.currentConstruct=void 0,l}function s(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),a.currentConstruct=void 0,l}}const fw={resolveAll:xx()},dw=gx("string"),hw=gx("text");function gx(t){return{resolveAll:xx(t==="text"?mw:void 0),tokenize:a};function a(l){const u=this,s=this.parser.constructs[t],c=l.attempt(s,f,m);return f;function f(b){return h(b)?c(b):m(b)}function m(b){if(b===null){l.consume(b);return}return l.enter("data"),l.consume(b),p}function p(b){return h(b)?(l.exit("data"),c(b)):(l.consume(b),p)}function h(b){if(b===null)return!0;const x=s[b];let S=-1;if(x)for(;++S<x.length;){const v=x[S];if(!v.previous||v.previous.call(u,u.previous))return!0}return!1}}}function xx(t){return a;function a(l,u){let s=-1,c;for(;++s<=l.length;)c===void 0?l[s]&&l[s][1].type==="data"&&(c=s,s++):(!l[s]||l[s][1].type!=="data")&&(s!==c+2&&(l[c][1].end=l[s-1][1].end,l.splice(c+2,s-c-2),s=c+2),c=void 0);return t?t(l,u):l}}function mw(t,a){let l=0;for(;++l<=t.length;)if((l===t.length||t[l][1].type==="lineEnding")&&t[l-1][1].type==="data"){const u=t[l-1][1],s=a.sliceStream(u);let c=s.length,f=-1,m=0,p;for(;c--;){const h=s[c];if(typeof h=="string"){for(f=h.length;h.charCodeAt(f-1)===32;)m++,f--;if(f)break;f=-1}else if(h===-2)p=!0,m++;else if(h!==-1){c++;break}}if(a._contentTypeTextTrailing&&l===t.length&&(m=0),m){const h={type:l===t.length||p||m<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?f:u.start._bufferIndex+f,_index:u.start._index+c,line:u.end.line,column:u.end.column-m,offset:u.end.offset-m},end:{...u.end}};u.end={...h.start},u.start.offset===u.end.offset?Object.assign(u,h):(t.splice(l,0,["enter",h,a],["exit",h,a]),l+=2)}l++}return t}const pw={42:Mn,43:Mn,45:Mn,48:Mn,49:Mn,50:Mn,51:Mn,52:Mn,53:Mn,54:Mn,55:Mn,56:Mn,57:Mn,62:ox},gw={91:vk},xw={[-2]:xc,[-1]:xc,32:xc},bw={35:Ek,42:Eu,45:[$p,Eu],60:Mk,61:$p,95:Eu,96:Kp,126:Kp},yw={38:fx,92:cx},vw={[-5]:bc,[-4]:bc,[-3]:bc,33:Jk,38:fx,42:Bc,60:[Z2,Uk],91:Zk,92:[Ck,cx],93:uf,95:Bc,96:ok},Sw={null:[Bc,fw]},kw={null:[42,95]},ww={null:[]},Cw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:kw,contentInitial:gw,disable:ww,document:pw,flow:bw,flowInitial:xw,insideSpan:Sw,string:yw,text:vw},Symbol.toStringTag,{value:"Module"}));function Tw(t,a,l){let u={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0};const s={},c=[];let f=[],m=[];const p={attempt:ee(re),check:ee(I),consume:H,enter:_,exit:K,interrupt:ee(I,{interrupt:!0})},h={code:null,containerState:{},defineSkip:O,events:[],now:C,parser:t,previous:null,sliceSerialize:S,sliceStream:v,write:x};let b=a.tokenize.call(h,p);return a.resolveAll&&c.push(a),h;function x(P){return f=nt(f,P),z(),f[f.length-1]!==null?[]:(oe(a,0),h.events=Uu(c,h.events,h),h.events)}function S(P,Q){return Aw(v(P),Q)}function v(P){return Ew(f,P)}function C(){const{_bufferIndex:P,_index:Q,line:de,column:ae,offset:ne}=u;return{_bufferIndex:P,_index:Q,line:de,column:ae,offset:ne}}function O(P){s[P.line]=P.column,A()}function z(){let P;for(;u._index<f.length;){const Q=f[u._index];if(typeof Q=="string")for(P=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===P&&u._bufferIndex<Q.length;)j(Q.charCodeAt(u._bufferIndex));else j(Q)}}function j(P){b=b(P)}function H(P){he(P)?(u.line++,u.column=1,u.offset+=P===-3?2:1,A()):P!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===f[u._index].length&&(u._bufferIndex=-1,u._index++)),h.previous=P}function _(P,Q){const de=Q||{};return de.type=P,de.start=C(),h.events.push(["enter",de,h]),m.push(de),de}function K(P){const Q=m.pop();return Q.end=C(),h.events.push(["exit",Q,h]),Q}function re(P,Q){oe(P,Q.from)}function I(P,Q){Q.restore()}function ee(P,Q){return de;function de(ae,ne,B){let Z,ie,be,T;return Array.isArray(ae)?G(ae):"tokenize"in ae?G([ae]):N(ae);function N(ce){return Ee;function Ee(Xe){const Ue=Xe!==null&&ce[Xe],Vn=Xe!==null&&ce.null,xt=[...Array.isArray(Ue)?Ue:Ue?[Ue]:[],...Array.isArray(Vn)?Vn:Vn?[Vn]:[]];return G(xt)(Xe)}}function G(ce){return Z=ce,ie=0,ce.length===0?B:w(ce[ie])}function w(ce){return Ee;function Ee(Xe){return T=W(),be=ce,ce.partial||(h.currentConstruct=ce),ce.name&&h.parser.constructs.disable.null.includes(ce.name)?pe():ce.tokenize.call(Q?Object.assign(Object.create(h),Q):h,p,le,pe)(Xe)}}function le(ce){return P(be,T),ne}function pe(ce){return T.restore(),++ie<Z.length?w(Z[ie]):B}}}function oe(P,Q){P.resolveAll&&!c.includes(P)&&c.push(P),P.resolve&&In(h.events,Q,h.events.length-Q,P.resolve(h.events.slice(Q),h)),P.resolveTo&&(h.events=P.resolveTo(h.events,h))}function W(){const P=C(),Q=h.previous,de=h.currentConstruct,ae=h.events.length,ne=Array.from(m);return{from:ae,restore:B};function B(){u=P,h.previous=Q,h.currentConstruct=de,h.events.length=ae,m=ne,A()}}function A(){u.line in s&&u.column<2&&(u.column=s[u.line],u.offset+=s[u.line]-1)}}function Ew(t,a){const l=a.start._index,u=a.start._bufferIndex,s=a.end._index,c=a.end._bufferIndex;let f;if(l===s)f=[t[l].slice(u,c)];else{if(f=t.slice(l,s),u>-1){const m=f[0];typeof m=="string"?f[0]=m.slice(u):f.shift()}c>0&&f.push(t[s].slice(0,c))}return f}function Aw(t,a){let l=-1;const u=[];let s;for(;++l<t.length;){const c=t[l];let f;if(typeof c=="string")f=c;else switch(c){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=a?" ":"	";break}case-1:{if(!a&&s)continue;f=" ";break}default:f=String.fromCharCode(c)}s=c===-2,u.push(f)}return u.join("")}function jw(t){const u={constructs:ux([Cw,...(t||{}).extensions||[]]),content:s(F2),defined:[],document:s(Y2),flow:s(ow),lazy:{},string:s(dw),text:s(hw)};return u;function s(c){return f;function f(m){return Tw(u,c,m)}}}function Nw(t){for(;!dx(t););return t}const eg=/[\0\t\n\r]/g;function Mw(){let t=1,a="",l=!0,u;return s;function s(c,f,m){const p=[];let h,b,x,S,v;for(c=a+(typeof c=="string"?c.toString():new TextDecoder(f||void 0).decode(c)),x=0,a="",l&&(c.charCodeAt(0)===65279&&x++,l=void 0);x<c.length;){if(eg.lastIndex=x,h=eg.exec(c),S=h&&h.index!==void 0?h.index:c.length,v=c.charCodeAt(S),!h){a=c.slice(x);break}if(v===10&&x===S&&u)p.push(-3),u=void 0;else switch(u&&(p.push(-5),u=void 0),x<S&&(p.push(c.slice(x,S)),t+=S-x),v){case 0:{p.push(65533),t++;break}case 9:{for(b=Math.ceil(t/4)*4,p.push(-2);t++<b;)p.push(-1);break}case 10:{p.push(-4),t=1;break}default:u=!0,t=1}x=S+1}return m&&(u&&p.push(-5),a&&p.push(a),p.push(null)),p}}const _w=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Dw(t){return t.replace(_w,Rw)}function Rw(t,a,l){if(a)return a;if(l.charCodeAt(0)===35){const s=l.charCodeAt(1),c=s===120||s===88;return sx(l.slice(c?2:1),c?16:10)}return af(l)||t}const bx={}.hasOwnProperty;function Ow(t,a,l){return typeof a!="string"&&(l=a,a=void 0),zw(l)(Nw(jw(l).document().write(Mw()(t,a,!0))))}function zw(t){const a={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(Hr),autolinkProtocol:W,autolinkEmail:W,atxHeading:c(Ur),blockQuote:c(Vn),characterEscape:W,characterReference:W,codeFenced:c(xt),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:c(xt,f),codeText:c(Ol,f),codeTextData:W,data:W,codeFlowValue:W,definition:c($a),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:c(bt),hardBreakEscape:c(Br),hardBreakTrailing:c(Br),htmlFlow:c(ei,f),htmlFlowData:W,htmlText:c(ei,f),htmlTextData:W,image:c(ni),label:f,link:c(Hr),listItem:c(zl),listItemValue:S,listOrdered:c(qr,x),listUnordered:c(qr),paragraph:c(Iu),reference:w,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:c(Ur),strong:c(Vu),thematicBreak:c(Fu)},exit:{atxHeading:p(),atxHeadingSequence:re,autolink:p(),autolinkEmail:Ue,autolinkProtocol:Xe,blockQuote:p(),characterEscapeValue:A,characterReferenceMarkerHexadecimal:pe,characterReferenceMarkerNumeric:pe,characterReferenceValue:ce,characterReference:Ee,codeFenced:p(z),codeFencedFence:O,codeFencedFenceInfo:v,codeFencedFenceMeta:C,codeFlowValue:A,codeIndented:p(j),codeText:p(ne),codeTextData:A,data:A,definition:p(),definitionDestinationString:K,definitionLabelString:H,definitionTitleString:_,emphasis:p(),hardBreakEscape:p(Q),hardBreakTrailing:p(Q),htmlFlow:p(de),htmlFlowData:A,htmlText:p(ae),htmlTextData:A,image:p(Z),label:be,labelText:ie,lineEnding:P,link:p(B),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:le,resourceDestinationString:T,resourceTitleString:N,resource:G,setextHeading:p(oe),setextHeadingLineSequence:ee,setextHeadingText:I,strong:p(),thematicBreak:p()}};yx(a,(t||{}).mdastExtensions||[]);const l={};return u;function u(Y){let te={type:"root",children:[]};const ge={stack:[te],tokenStack:[],config:a,enter:m,exit:h,buffer:f,resume:b,data:l},ke=[];let Oe=-1;for(;++Oe<Y.length;)if(Y[Oe][1].type==="listOrdered"||Y[Oe][1].type==="listUnordered")if(Y[Oe][0]==="enter")ke.push(Oe);else{const Dn=ke.pop();Oe=s(Y,Dn,Oe)}for(Oe=-1;++Oe<Y.length;){const Dn=a[Y[Oe][0]];bx.call(Dn,Y[Oe][1].type)&&Dn[Y[Oe][1].type].call(Object.assign({sliceSerialize:Y[Oe][2].sliceSerialize},ge),Y[Oe][1])}if(ge.tokenStack.length>0){const Dn=ge.tokenStack[ge.tokenStack.length-1];(Dn[1]||ng).call(ge,void 0,Dn[0])}for(te.position={start:hr(Y.length>0?Y[0][1].start:{line:1,column:1,offset:0}),end:hr(Y.length>0?Y[Y.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<a.transforms.length;)te=a.transforms[Oe](te)||te;return te}function s(Y,te,ge){let ke=te-1,Oe=-1,Dn=!1,yt,yn,an,kn;for(;++ke<=ge;){const Ie=Y[ke];switch(Ie[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ie[0]==="enter"?Oe++:Oe--,kn=void 0;break}case"lineEndingBlank":{Ie[0]==="enter"&&(yt&&!kn&&!Oe&&!an&&(an=ke),kn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:kn=void 0}if(!Oe&&Ie[0]==="enter"&&Ie[1].type==="listItemPrefix"||Oe===-1&&Ie[0]==="exit"&&(Ie[1].type==="listUnordered"||Ie[1].type==="listOrdered")){if(yt){let Vt=ke;for(yn=void 0;Vt--;){const tt=Y[Vt];if(tt[1].type==="lineEnding"||tt[1].type==="lineEndingBlank"){if(tt[0]==="exit")continue;yn&&(Y[yn][1].type="lineEndingBlank",Dn=!0),tt[1].type="lineEnding",yn=Vt}else if(!(tt[1].type==="linePrefix"||tt[1].type==="blockQuotePrefix"||tt[1].type==="blockQuotePrefixWhitespace"||tt[1].type==="blockQuoteMarker"||tt[1].type==="listItemIndent"))break}an&&(!yn||an<yn)&&(yt._spread=!0),yt.end=Object.assign({},yn?Y[yn][1].start:Ie[1].end),Y.splice(yn||ke,0,["exit",yt,Ie[2]]),ke++,ge++}if(Ie[1].type==="listItemPrefix"){const Vt={type:"listItem",_spread:!1,start:Object.assign({},Ie[1].start),end:void 0};yt=Vt,Y.splice(ke,0,["enter",Vt,Ie[2]]),ke++,ge++,an=void 0,kn=!0}}}return Y[te][1]._spread=Dn,ge}function c(Y,te){return ge;function ge(ke){m.call(this,Y(ke),ke),te&&te.call(this,ke)}}function f(){this.stack.push({type:"fragment",children:[]})}function m(Y,te,ge){this.stack[this.stack.length-1].children.push(Y),this.stack.push(Y),this.tokenStack.push([te,ge||void 0]),Y.position={start:hr(te.start),end:void 0}}function p(Y){return te;function te(ge){Y&&Y.call(this,ge),h.call(this,ge)}}function h(Y,te){const ge=this.stack.pop(),ke=this.tokenStack.pop();if(ke)ke[0].type!==Y.type&&(te?te.call(this,Y,ke[0]):(ke[1]||ng).call(this,Y,ke[0]));else throw new Error("Cannot close `"+Y.type+"` ("+Ha({start:Y.start,end:Y.end})+"): it’s not open");ge.position.end=hr(Y.end)}function b(){return lf(this.stack.pop())}function x(){this.data.expectingFirstListItemValue=!0}function S(Y){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(Y),10),this.data.expectingFirstListItemValue=void 0}}function v(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.lang=Y}function C(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.meta=Y}function O(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function z(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function j(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y.replace(/(\r?\n|\r)$/g,"")}function H(Y){const te=this.resume(),ge=this.stack[this.stack.length-1];ge.label=te,ge.identifier=ut(this.sliceSerialize(Y)).toLowerCase()}function _(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.title=Y}function K(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.url=Y}function re(Y){const te=this.stack[this.stack.length-1];if(!te.depth){const ge=this.sliceSerialize(Y).length;te.depth=ge}}function I(){this.data.setextHeadingSlurpLineEnding=!0}function ee(Y){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(Y).codePointAt(0)===61?1:2}function oe(){this.data.setextHeadingSlurpLineEnding=void 0}function W(Y){const ge=this.stack[this.stack.length-1].children;let ke=ge[ge.length-1];(!ke||ke.type!=="text")&&(ke=bn(),ke.position={start:hr(Y.start),end:void 0},ge.push(ke)),this.stack.push(ke)}function A(Y){const te=this.stack.pop();te.value+=this.sliceSerialize(Y),te.position.end=hr(Y.end)}function P(Y){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ge=te.children[te.children.length-1];ge.position.end=hr(Y.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&a.canContainEols.includes(te.type)&&(W.call(this,Y),A.call(this,Y))}function Q(){this.data.atHardBreak=!0}function de(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function ae(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function ne(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function B(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=te,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function Z(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=te,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function ie(Y){const te=this.sliceSerialize(Y),ge=this.stack[this.stack.length-2];ge.label=Dw(te),ge.identifier=ut(te).toLowerCase()}function be(){const Y=this.stack[this.stack.length-1],te=this.resume(),ge=this.stack[this.stack.length-1];if(this.data.inReference=!0,ge.type==="link"){const ke=Y.children;ge.children=ke}else ge.alt=te}function T(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.url=Y}function N(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.title=Y}function G(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function le(Y){const te=this.resume(),ge=this.stack[this.stack.length-1];ge.label=te,ge.identifier=ut(this.sliceSerialize(Y)).toLowerCase(),this.data.referenceType="full"}function pe(Y){this.data.characterReferenceType=Y.type}function ce(Y){const te=this.sliceSerialize(Y),ge=this.data.characterReferenceType;let ke;ge?(ke=sx(te,ge==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ke=af(te);const Oe=this.stack[this.stack.length-1];Oe.value+=ke}function Ee(Y){const te=this.stack.pop();te.position.end=hr(Y.end)}function Xe(Y){A.call(this,Y);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(Y)}function Ue(Y){A.call(this,Y);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(Y)}function Vn(){return{type:"blockquote",children:[]}}function xt(){return{type:"code",lang:null,meta:null,value:""}}function Ol(){return{type:"inlineCode",value:""}}function $a(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function bt(){return{type:"emphasis",children:[]}}function Ur(){return{type:"heading",depth:0,children:[]}}function Br(){return{type:"break"}}function ei(){return{type:"html",value:""}}function ni(){return{type:"image",title:null,url:"",alt:null}}function Hr(){return{type:"link",title:null,url:"",children:[]}}function qr(Y){return{type:"list",ordered:Y.type==="listOrdered",start:null,spread:Y._spread,children:[]}}function zl(Y){return{type:"listItem",spread:Y._spread,checked:null,children:[]}}function Iu(){return{type:"paragraph",children:[]}}function Vu(){return{type:"strong",children:[]}}function bn(){return{type:"text",value:""}}function Fu(){return{type:"thematicBreak"}}}function hr(t){return{line:t.line,column:t.column,offset:t.offset}}function yx(t,a){let l=-1;for(;++l<a.length;){const u=a[l];Array.isArray(u)?yx(t,u):Lw(t,u)}}function Lw(t,a){let l;for(l in a)if(bx.call(a,l))switch(l){case"canContainEols":{const u=a[l];u&&t[l].push(...u);break}case"transforms":{const u=a[l];u&&t[l].push(...u);break}case"enter":case"exit":{const u=a[l];u&&Object.assign(t[l],u);break}}}function ng(t,a){throw t?new Error("Cannot close `"+t.type+"` ("+Ha({start:t.start,end:t.end})+"): a different token (`"+a.type+"`, "+Ha({start:a.start,end:a.end})+") is open"):new Error("Cannot close document, a token (`"+a.type+"`, "+Ha({start:a.start,end:a.end})+") is still open")}function Uw(t){const a=this;a.parser=l;function l(u){return Ow(u,{...a.data("settings"),...t,extensions:a.data("micromarkExtensions")||[],mdastExtensions:a.data("fromMarkdownExtensions")||[]})}}function Bw(t,a){const l={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(a),!0)};return t.patch(a,l),t.applyData(a,l)}function Hw(t,a){const l={type:"element",tagName:"br",properties:{},children:[]};return t.patch(a,l),[t.applyData(a,l),{type:"text",value:`
`}]}function qw(t,a){const l=a.value?a.value+`
`:"",u={},s=a.lang?a.lang.split(/\s+/):[];s.length>0&&(u.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:u,children:[{type:"text",value:l}]};return a.meta&&(c.data={meta:a.meta}),t.patch(a,c),c=t.applyData(a,c),c={type:"element",tagName:"pre",properties:{},children:[c]},t.patch(a,c),c}function Iw(t,a){const l={type:"element",tagName:"del",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function Vw(t,a){const l={type:"element",tagName:"em",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function Fw(t,a){const l=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",u=String(a.identifier).toUpperCase(),s=Rl(u.toLowerCase()),c=t.footnoteOrder.indexOf(u);let f,m=t.footnoteCounts.get(u);m===void 0?(m=0,t.footnoteOrder.push(u),f=t.footnoteOrder.length):f=c+1,m+=1,t.footnoteCounts.set(u,m);const p={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+s,id:l+"fnref-"+s+(m>1?"-"+m:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};t.patch(a,p);const h={type:"element",tagName:"sup",properties:{},children:[p]};return t.patch(a,h),t.applyData(a,h)}function Gw(t,a){const l={type:"element",tagName:"h"+a.depth,properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function Yw(t,a){if(t.options.allowDangerousHtml){const l={type:"raw",value:a.value};return t.patch(a,l),t.applyData(a,l)}}function vx(t,a){const l=a.referenceType;let u="]";if(l==="collapsed"?u+="[]":l==="full"&&(u+="["+(a.label||a.identifier)+"]"),a.type==="imageReference")return[{type:"text",value:"!["+a.alt+u}];const s=t.all(a),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const f=s[s.length-1];return f&&f.type==="text"?f.value+=u:s.push({type:"text",value:u}),s}function Pw(t,a){const l=String(a.identifier).toUpperCase(),u=t.definitionById.get(l);if(!u)return vx(t,a);const s={src:Rl(u.url||""),alt:a.alt};u.title!==null&&u.title!==void 0&&(s.title=u.title);const c={type:"element",tagName:"img",properties:s,children:[]};return t.patch(a,c),t.applyData(a,c)}function Xw(t,a){const l={src:Rl(a.url)};a.alt!==null&&a.alt!==void 0&&(l.alt=a.alt),a.title!==null&&a.title!==void 0&&(l.title=a.title);const u={type:"element",tagName:"img",properties:l,children:[]};return t.patch(a,u),t.applyData(a,u)}function Jw(t,a){const l={type:"text",value:a.value.replace(/\r?\n|\r/g," ")};t.patch(a,l);const u={type:"element",tagName:"code",properties:{},children:[l]};return t.patch(a,u),t.applyData(a,u)}function Qw(t,a){const l=String(a.identifier).toUpperCase(),u=t.definitionById.get(l);if(!u)return vx(t,a);const s={href:Rl(u.url||"")};u.title!==null&&u.title!==void 0&&(s.title=u.title);const c={type:"element",tagName:"a",properties:s,children:t.all(a)};return t.patch(a,c),t.applyData(a,c)}function Zw(t,a){const l={href:Rl(a.url)};a.title!==null&&a.title!==void 0&&(l.title=a.title);const u={type:"element",tagName:"a",properties:l,children:t.all(a)};return t.patch(a,u),t.applyData(a,u)}function Kw(t,a,l){const u=t.all(a),s=l?Ww(l):Sx(a),c={},f=[];if(typeof a.checked=="boolean"){const b=u[0];let x;b&&b.type==="element"&&b.tagName==="p"?x=b:(x={type:"element",tagName:"p",properties:{},children:[]},u.unshift(x)),x.children.length>0&&x.children.unshift({type:"text",value:" "}),x.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:a.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let m=-1;for(;++m<u.length;){const b=u[m];(s||m!==0||b.type!=="element"||b.tagName!=="p")&&f.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!s?f.push(...b.children):f.push(b)}const p=u[u.length-1];p&&(s||p.type!=="element"||p.tagName!=="p")&&f.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:c,children:f};return t.patch(a,h),t.applyData(a,h)}function Ww(t){let a=!1;if(t.type==="list"){a=t.spread||!1;const l=t.children;let u=-1;for(;!a&&++u<l.length;)a=Sx(l[u])}return a}function Sx(t){const a=t.spread;return a??t.children.length>1}function $w(t,a){const l={},u=t.all(a);let s=-1;for(typeof a.start=="number"&&a.start!==1&&(l.start=a.start);++s<u.length;){const f=u[s];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}const c={type:"element",tagName:a.ordered?"ol":"ul",properties:l,children:t.wrap(u,!0)};return t.patch(a,c),t.applyData(a,c)}function eC(t,a){const l={type:"element",tagName:"p",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function nC(t,a){const l={type:"root",children:t.wrap(t.all(a))};return t.patch(a,l),t.applyData(a,l)}function tC(t,a){const l={type:"element",tagName:"strong",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function rC(t,a){const l=t.all(a),u=l.shift(),s=[];if(u){const f={type:"element",tagName:"thead",properties:{},children:t.wrap([u],!0)};t.patch(a.children[0],f),s.push(f)}if(l.length>0){const f={type:"element",tagName:"tbody",properties:{},children:t.wrap(l,!0)},m=ef(a.children[1]),p=ex(a.children[a.children.length-1]);m&&p&&(f.position={start:m,end:p}),s.push(f)}const c={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(a,c),t.applyData(a,c)}function lC(t,a,l){const u=l?l.children:void 0,c=(u?u.indexOf(a):1)===0?"th":"td",f=l&&l.type==="table"?l.align:void 0,m=f?f.length:a.children.length;let p=-1;const h=[];for(;++p<m;){const x=a.children[p],S={},v=f?f[p]:void 0;v&&(S.align=v);let C={type:"element",tagName:c,properties:S,children:[]};x&&(C.children=t.all(x),t.patch(x,C),C=t.applyData(x,C)),h.push(C)}const b={type:"element",tagName:"tr",properties:{},children:t.wrap(h,!0)};return t.patch(a,b),t.applyData(a,b)}function aC(t,a){const l={type:"element",tagName:"td",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}const tg=9,rg=32;function iC(t){const a=String(t),l=/\r?\n|\r/g;let u=l.exec(a),s=0;const c=[];for(;u;)c.push(lg(a.slice(s,u.index),s>0,!0),u[0]),s=u.index+u[0].length,u=l.exec(a);return c.push(lg(a.slice(s),s>0,!1)),c.join("")}function lg(t,a,l){let u=0,s=t.length;if(a){let c=t.codePointAt(u);for(;c===tg||c===rg;)u++,c=t.codePointAt(u)}if(l){let c=t.codePointAt(s-1);for(;c===tg||c===rg;)s--,c=t.codePointAt(s-1)}return s>u?t.slice(u,s):""}function uC(t,a){const l={type:"text",value:iC(String(a.value))};return t.patch(a,l),t.applyData(a,l)}function sC(t,a){const l={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(a,l),t.applyData(a,l)}const oC={blockquote:Bw,break:Hw,code:qw,delete:Iw,emphasis:Vw,footnoteReference:Fw,heading:Gw,html:Yw,imageReference:Pw,image:Xw,inlineCode:Jw,linkReference:Qw,link:Zw,listItem:Kw,list:$w,paragraph:eC,root:nC,strong:tC,table:rC,tableCell:aC,tableRow:lC,text:uC,thematicBreak:sC,toml:vu,yaml:vu,definition:vu,footnoteDefinition:vu};function vu(){}const kx=-1,Bu=0,Ia=1,_u=2,sf=3,of=4,cf=5,ff=6,wx=7,Cx=8,ag=typeof self=="object"?self:globalThis,cC=(t,a)=>{const l=(s,c)=>(t.set(c,s),s),u=s=>{if(t.has(s))return t.get(s);const[c,f]=a[s];switch(c){case Bu:case kx:return l(f,s);case Ia:{const m=l([],s);for(const p of f)m.push(u(p));return m}case _u:{const m=l({},s);for(const[p,h]of f)m[u(p)]=u(h);return m}case sf:return l(new Date(f),s);case of:{const{source:m,flags:p}=f;return l(new RegExp(m,p),s)}case cf:{const m=l(new Map,s);for(const[p,h]of f)m.set(u(p),u(h));return m}case ff:{const m=l(new Set,s);for(const p of f)m.add(u(p));return m}case wx:{const{name:m,message:p}=f;return l(new ag[m](p),s)}case Cx:return l(BigInt(f),s);case"BigInt":return l(Object(BigInt(f)),s);case"ArrayBuffer":return l(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:m}=new Uint8Array(f);return l(new DataView(m),f)}}return l(new ag[c](f),s)};return u},ig=t=>cC(new Map,t)(0),El="",{toString:fC}={},{keys:dC}=Object,za=t=>{const a=typeof t;if(a!=="object"||!t)return[Bu,a];const l=fC.call(t).slice(8,-1);switch(l){case"Array":return[Ia,El];case"Object":return[_u,El];case"Date":return[sf,El];case"RegExp":return[of,El];case"Map":return[cf,El];case"Set":return[ff,El];case"DataView":return[Ia,l]}return l.includes("Array")?[Ia,l]:l.includes("Error")?[wx,l]:[_u,l]},Su=([t,a])=>t===Bu&&(a==="function"||a==="symbol"),hC=(t,a,l,u)=>{const s=(f,m)=>{const p=u.push(f)-1;return l.set(m,p),p},c=f=>{if(l.has(f))return l.get(f);let[m,p]=za(f);switch(m){case Bu:{let b=f;switch(p){case"bigint":m=Cx,b=f.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+p);b=null;break;case"undefined":return s([kx],f)}return s([m,b],f)}case Ia:{if(p){let S=f;return p==="DataView"?S=new Uint8Array(f.buffer):p==="ArrayBuffer"&&(S=new Uint8Array(f)),s([p,[...S]],f)}const b=[],x=s([m,b],f);for(const S of f)b.push(c(S));return x}case _u:{if(p)switch(p){case"BigInt":return s([p,f.toString()],f);case"Boolean":case"Number":case"String":return s([p,f.valueOf()],f)}if(a&&"toJSON"in f)return c(f.toJSON());const b=[],x=s([m,b],f);for(const S of dC(f))(t||!Su(za(f[S])))&&b.push([c(S),c(f[S])]);return x}case sf:return s([m,f.toISOString()],f);case of:{const{source:b,flags:x}=f;return s([m,{source:b,flags:x}],f)}case cf:{const b=[],x=s([m,b],f);for(const[S,v]of f)(t||!(Su(za(S))||Su(za(v))))&&b.push([c(S),c(v)]);return x}case ff:{const b=[],x=s([m,b],f);for(const S of f)(t||!Su(za(S)))&&b.push(c(S));return x}}const{message:h}=f;return s([m,{name:p,message:h}],f)};return c},ug=(t,{json:a,lossy:l}={})=>{const u=[];return hC(!(a||l),!!a,new Map,u)(t),u},Du=typeof structuredClone=="function"?(t,a)=>a&&("json"in a||"lossy"in a)?ig(ug(t,a)):structuredClone(t):(t,a)=>ig(ug(t,a));function mC(t,a){const l=[{type:"text",value:"↩"}];return a>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(a)}]}),l}function pC(t,a){return"Back to reference "+(t+1)+(a>1?"-"+a:"")}function gC(t){const a=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",l=t.options.footnoteBackContent||mC,u=t.options.footnoteBackLabel||pC,s=t.options.footnoteLabel||"Footnotes",c=t.options.footnoteLabelTagName||"h2",f=t.options.footnoteLabelProperties||{className:["sr-only"]},m=[];let p=-1;for(;++p<t.footnoteOrder.length;){const h=t.footnoteById.get(t.footnoteOrder[p]);if(!h)continue;const b=t.all(h),x=String(h.identifier).toUpperCase(),S=Rl(x.toLowerCase());let v=0;const C=[],O=t.footnoteCounts.get(x);for(;O!==void 0&&++v<=O;){C.length>0&&C.push({type:"text",value:" "});let H=typeof l=="string"?l:l(p,v);typeof H=="string"&&(H={type:"text",value:H}),C.push({type:"element",tagName:"a",properties:{href:"#"+a+"fnref-"+S+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(p,v),className:["data-footnote-backref"]},children:Array.isArray(H)?H:[H]})}const z=b[b.length-1];if(z&&z.type==="element"&&z.tagName==="p"){const H=z.children[z.children.length-1];H&&H.type==="text"?H.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(...C)}else b.push(...C);const j={type:"element",tagName:"li",properties:{id:a+"fn-"+S},children:t.wrap(b,!0)};t.patch(h,j),m.push(j)}if(m.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...Du(f),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(m,!0)},{type:"text",value:`
`}]}}const Hu=(function(t){if(t==null)return vC;if(typeof t=="function")return qu(t);if(typeof t=="object")return Array.isArray(t)?xC(t):bC(t);if(typeof t=="string")return yC(t);throw new Error("Expected function, string, or object as test")});function xC(t){const a=[];let l=-1;for(;++l<t.length;)a[l]=Hu(t[l]);return qu(u);function u(...s){let c=-1;for(;++c<a.length;)if(a[c].apply(this,s))return!0;return!1}}function bC(t){const a=t;return qu(l);function l(u){const s=u;let c;for(c in t)if(s[c]!==a[c])return!1;return!0}}function yC(t){return qu(a);function a(l){return l&&l.type===t}}function qu(t){return a;function a(l,u,s){return!!(SC(l)&&t.call(this,l,typeof u=="number"?u:void 0,s||void 0))}}function vC(){return!0}function SC(t){return t!==null&&typeof t=="object"&&"type"in t}const Tx=[],kC=!0,Hc=!1,wC="skip";function Ex(t,a,l,u){let s;typeof a=="function"&&typeof l!="function"?(u=l,l=a):s=a;const c=Hu(s),f=u?-1:1;m(t,void 0,[])();function m(p,h,b){const x=p&&typeof p=="object"?p:{};if(typeof x.type=="string"){const v=typeof x.tagName=="string"?x.tagName:typeof x.name=="string"?x.name:void 0;Object.defineProperty(S,"name",{value:"node ("+(p.type+(v?"<"+v+">":""))+")"})}return S;function S(){let v=Tx,C,O,z;if((!a||c(p,h,b[b.length-1]||void 0))&&(v=CC(l(p,b)),v[0]===Hc))return v;if("children"in p&&p.children){const j=p;if(j.children&&v[0]!==wC)for(O=(u?j.children.length:-1)+f,z=b.concat(j);O>-1&&O<j.children.length;){const H=j.children[O];if(C=m(H,O,z)(),C[0]===Hc)return C;O=typeof C[1]=="number"?C[1]:O+f}}return v}}}function CC(t){return Array.isArray(t)?t:typeof t=="number"?[kC,t]:t==null?Tx:[t]}function df(t,a,l,u){let s,c,f;typeof a=="function"&&typeof l!="function"?(c=void 0,f=a,s=l):(c=a,f=l,s=u),Ex(t,c,m,s);function m(p,h){const b=h[h.length-1],x=b?b.children.indexOf(p):void 0;return f(p,x,b)}}const qc={}.hasOwnProperty,TC={};function EC(t,a){const l=a||TC,u=new Map,s=new Map,c=new Map,f={...oC,...l.handlers},m={all:h,applyData:jC,definitionById:u,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:f,one:p,options:l,patch:AC,wrap:MC};return df(t,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const x=b.type==="definition"?u:s,S=String(b.identifier).toUpperCase();x.has(S)||x.set(S,b)}}),m;function p(b,x){const S=b.type,v=m.handlers[S];if(qc.call(m.handlers,S)&&v)return v(m,b,x);if(m.options.passThrough&&m.options.passThrough.includes(S)){if("children"in b){const{children:O,...z}=b,j=Du(z);return j.children=m.all(b),j}return Du(b)}return(m.options.unknownHandler||NC)(m,b,x)}function h(b){const x=[];if("children"in b){const S=b.children;let v=-1;for(;++v<S.length;){const C=m.one(S[v],b);if(C){if(v&&S[v-1].type==="break"&&(!Array.isArray(C)&&C.type==="text"&&(C.value=sg(C.value)),!Array.isArray(C)&&C.type==="element")){const O=C.children[0];O&&O.type==="text"&&(O.value=sg(O.value))}Array.isArray(C)?x.push(...C):x.push(C)}}}return x}}function AC(t,a){t.position&&(a.position=p2(t))}function jC(t,a){let l=a;if(t&&t.data){const u=t.data.hName,s=t.data.hChildren,c=t.data.hProperties;if(typeof u=="string")if(l.type==="element")l.tagName=u;else{const f="children"in l?l.children:[l];l={type:"element",tagName:u,properties:{},children:f}}l.type==="element"&&c&&Object.assign(l.properties,Du(c)),"children"in l&&l.children&&s!==null&&s!==void 0&&(l.children=s)}return l}function NC(t,a){const l=a.data||{},u="value"in a&&!(qc.call(l,"hProperties")||qc.call(l,"hChildren"))?{type:"text",value:a.value}:{type:"element",tagName:"div",properties:{},children:t.all(a)};return t.patch(a,u),t.applyData(a,u)}function MC(t,a){const l=[];let u=-1;for(a&&l.push({type:"text",value:`
`});++u<t.length;)u&&l.push({type:"text",value:`
`}),l.push(t[u]);return a&&t.length>0&&l.push({type:"text",value:`
`}),l}function sg(t){let a=0,l=t.charCodeAt(a);for(;l===9||l===32;)a++,l=t.charCodeAt(a);return t.slice(a)}function og(t,a){const l=EC(t,a),u=l.one(t,void 0),s=gC(l),c=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function _C(t,a){return t&&"run"in t?async function(l,u){const s=og(l,{file:u,...a});await t.run(s,u)}:function(l,u){return og(l,{file:u,...t||a})}}function cg(t){if(t)throw t}var yc,fg;function DC(){if(fg)return yc;fg=1;var t=Object.prototype.hasOwnProperty,a=Object.prototype.toString,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):a.call(h)==="[object Array]"},c=function(h){if(!h||a.call(h)!=="[object Object]")return!1;var b=t.call(h,"constructor"),x=h.constructor&&h.constructor.prototype&&t.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!b&&!x)return!1;var S;for(S in h);return typeof S>"u"||t.call(h,S)},f=function(h,b){l&&b.name==="__proto__"?l(h,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):h[b.name]=b.newValue},m=function(h,b){if(b==="__proto__")if(t.call(h,b)){if(u)return u(h,b).value}else return;return h[b]};return yc=function p(){var h,b,x,S,v,C,O=arguments[0],z=1,j=arguments.length,H=!1;for(typeof O=="boolean"&&(H=O,O=arguments[1]||{},z=2),(O==null||typeof O!="object"&&typeof O!="function")&&(O={});z<j;++z)if(h=arguments[z],h!=null)for(b in h)x=m(O,b),S=m(h,b),O!==S&&(H&&S&&(c(S)||(v=s(S)))?(v?(v=!1,C=x&&s(x)?x:[]):C=x&&c(x)?x:{},f(O,{name:b,newValue:p(H,C,S)})):typeof S<"u"&&f(O,{name:b,newValue:S}));return O},yc}var RC=DC();const vc=Yc(RC);function Ic(t){if(typeof t!="object"||t===null)return!1;const a=Object.getPrototypeOf(t);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function OC(){const t=[],a={run:l,use:u};return a;function l(...s){let c=-1;const f=s.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);m(null,...s);function m(p,...h){const b=t[++c];let x=-1;if(p){f(p);return}for(;++x<s.length;)(h[x]===null||h[x]===void 0)&&(h[x]=s[x]);s=h,b?zC(b,m)(...h):f(null,...h)}}function u(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),a}}function zC(t,a){let l;return u;function u(...f){const m=t.length>f.length;let p;m&&f.push(s);try{p=t.apply(this,f)}catch(h){const b=h;if(m&&l)throw b;return s(b)}m||(p&&p.then&&typeof p.then=="function"?p.then(c,s):p instanceof Error?s(p):c(p))}function s(f,...m){l||(l=!0,a(f,...m))}function c(f){s(null,f)}}const mt={basename:LC,dirname:UC,extname:BC,join:HC,sep:"/"};function LC(t,a){if(a!==void 0&&typeof a!="string")throw new TypeError('"ext" argument must be a string');Wa(t);let l=0,u=-1,s=t.length,c;if(a===void 0||a.length===0||a.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(c){l=s+1;break}}else u<0&&(c=!0,u=s+1);return u<0?"":t.slice(l,u)}if(a===t)return"";let f=-1,m=a.length-1;for(;s--;)if(t.codePointAt(s)===47){if(c){l=s+1;break}}else f<0&&(c=!0,f=s+1),m>-1&&(t.codePointAt(s)===a.codePointAt(m--)?m<0&&(u=s):(m=-1,u=f));return l===u?u=f:u<0&&(u=t.length),t.slice(l,u)}function UC(t){if(Wa(t),t.length===0)return".";let a=-1,l=t.length,u;for(;--l;)if(t.codePointAt(l)===47){if(u){a=l;break}}else u||(u=!0);return a<0?t.codePointAt(0)===47?"/":".":a===1&&t.codePointAt(0)===47?"//":t.slice(0,a)}function BC(t){Wa(t);let a=t.length,l=-1,u=0,s=-1,c=0,f;for(;a--;){const m=t.codePointAt(a);if(m===47){if(f){u=a+1;break}continue}l<0&&(f=!0,l=a+1),m===46?s<0?s=a:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||l<0||c===0||c===1&&s===l-1&&s===u+1?"":t.slice(s,l)}function HC(...t){let a=-1,l;for(;++a<t.length;)Wa(t[a]),t[a]&&(l=l===void 0?t[a]:l+"/"+t[a]);return l===void 0?".":qC(l)}function qC(t){Wa(t);const a=t.codePointAt(0)===47;let l=IC(t,!a);return l.length===0&&!a&&(l="."),l.length>0&&t.codePointAt(t.length-1)===47&&(l+="/"),a?"/"+l:l}function IC(t,a){let l="",u=0,s=-1,c=0,f=-1,m,p;for(;++f<=t.length;){if(f<t.length)m=t.codePointAt(f);else{if(m===47)break;m=47}if(m===47){if(!(s===f-1||c===1))if(s!==f-1&&c===2){if(l.length<2||u!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(p=l.lastIndexOf("/"),p!==l.length-1){p<0?(l="",u=0):(l=l.slice(0,p),u=l.length-1-l.lastIndexOf("/")),s=f,c=0;continue}}else if(l.length>0){l="",u=0,s=f,c=0;continue}}a&&(l=l.length>0?l+"/..":"..",u=2)}else l.length>0?l+="/"+t.slice(s+1,f):l=t.slice(s+1,f),u=f-s-1;s=f,c=0}else m===46&&c>-1?c++:c=-1}return l}function Wa(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const VC={cwd:FC};function FC(){return"/"}function Vc(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function GC(t){if(typeof t=="string")t=new URL(t);else if(!Vc(t)){const a=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw a.code="ERR_INVALID_ARG_TYPE",a}if(t.protocol!=="file:"){const a=new TypeError("The URL must be of scheme file");throw a.code="ERR_INVALID_URL_SCHEME",a}return YC(t)}function YC(t){if(t.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const a=t.pathname;let l=-1;for(;++l<a.length;)if(a.codePointAt(l)===37&&a.codePointAt(l+1)===50){const u=a.codePointAt(l+2);if(u===70||u===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(a)}const Sc=["history","path","basename","stem","extname","dirname"];class Ax{constructor(a){let l;a?Vc(a)?l={path:a}:typeof a=="string"||PC(a)?l={value:a}:l=a:l={},this.cwd="cwd"in l?"":VC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Sc.length;){const c=Sc[u];c in l&&l[c]!==void 0&&l[c]!==null&&(this[c]=c==="history"?[...l[c]]:l[c])}let s;for(s in l)Sc.includes(s)||(this[s]=l[s])}get basename(){return typeof this.path=="string"?mt.basename(this.path):void 0}set basename(a){wc(a,"basename"),kc(a,"basename"),this.path=mt.join(this.dirname||"",a)}get dirname(){return typeof this.path=="string"?mt.dirname(this.path):void 0}set dirname(a){dg(this.basename,"dirname"),this.path=mt.join(a||"",this.basename)}get extname(){return typeof this.path=="string"?mt.extname(this.path):void 0}set extname(a){if(kc(a,"extname"),dg(this.dirname,"extname"),a){if(a.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(a.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=mt.join(this.dirname,this.stem+(a||""))}get path(){return this.history[this.history.length-1]}set path(a){Vc(a)&&(a=GC(a)),wc(a,"path"),this.path!==a&&this.history.push(a)}get stem(){return typeof this.path=="string"?mt.basename(this.path,this.extname):void 0}set stem(a){wc(a,"stem"),kc(a,"stem"),this.path=mt.join(this.dirname||"",a+(this.extname||""))}fail(a,l,u){const s=this.message(a,l,u);throw s.fatal=!0,s}info(a,l,u){const s=this.message(a,l,u);return s.fatal=void 0,s}message(a,l,u){const s=new xn(a,l,u);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(a){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(a||void 0).decode(this.value)}}function kc(t,a){if(t&&t.includes(mt.sep))throw new Error("`"+a+"` cannot be a path: did not expect `"+mt.sep+"`")}function wc(t,a){if(!t)throw new Error("`"+a+"` cannot be empty")}function dg(t,a){if(!t)throw new Error("Setting `"+a+"` requires `path` to be set too")}function PC(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const XC=(function(t){const u=this.constructor.prototype,s=u[t],c=function(){return s.apply(c,arguments)};return Object.setPrototypeOf(c,u),c}),JC={}.hasOwnProperty;class hf extends XC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=OC()}copy(){const a=new hf;let l=-1;for(;++l<this.attachers.length;){const u=this.attachers[l];a.use(...u)}return a.data(vc(!0,{},this.namespace)),a}data(a,l){return typeof a=="string"?arguments.length===2?(Ec("data",this.frozen),this.namespace[a]=l,this):JC.call(this.namespace,a)&&this.namespace[a]||void 0:a?(Ec("data",this.frozen),this.namespace=a,this):this.namespace}freeze(){if(this.frozen)return this;const a=this;for(;++this.freezeIndex<this.attachers.length;){const[l,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const s=l.call(a,...u);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(a){this.freeze();const l=ku(a),u=this.parser||this.Parser;return Cc("parse",u),u(String(l),l)}process(a,l){const u=this;return this.freeze(),Cc("process",this.parser||this.Parser),Tc("process",this.compiler||this.Compiler),l?s(void 0,l):new Promise(s);function s(c,f){const m=ku(a),p=u.parse(m);u.run(p,m,function(b,x,S){if(b||!x||!S)return h(b);const v=x,C=u.stringify(v,S);KC(C)?S.value=C:S.result=C,h(b,S)});function h(b,x){b||!x?f(b):c?c(x):l(void 0,x)}}}processSync(a){let l=!1,u;return this.freeze(),Cc("processSync",this.parser||this.Parser),Tc("processSync",this.compiler||this.Compiler),this.process(a,s),mg("processSync","process",l),u;function s(c,f){l=!0,cg(c),u=f}}run(a,l,u){hg(a),this.freeze();const s=this.transformers;return!u&&typeof l=="function"&&(u=l,l=void 0),u?c(void 0,u):new Promise(c);function c(f,m){const p=ku(l);s.run(a,p,h);function h(b,x,S){const v=x||a;b?m(b):f?f(v):u(void 0,v,S)}}}runSync(a,l){let u=!1,s;return this.run(a,l,c),mg("runSync","run",u),s;function c(f,m){cg(f),s=m,u=!0}}stringify(a,l){this.freeze();const u=ku(l),s=this.compiler||this.Compiler;return Tc("stringify",s),hg(a),s(a,u)}use(a,...l){const u=this.attachers,s=this.namespace;if(Ec("use",this.frozen),a!=null)if(typeof a=="function")p(a,l);else if(typeof a=="object")Array.isArray(a)?m(a):f(a);else throw new TypeError("Expected usable value, not `"+a+"`");return this;function c(h){if(typeof h=="function")p(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[b,...x]=h;p(b,x)}else f(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function f(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");m(h.plugins),h.settings&&(s.settings=vc(!0,s.settings,h.settings))}function m(h){let b=-1;if(h!=null)if(Array.isArray(h))for(;++b<h.length;){const x=h[b];c(x)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function p(h,b){let x=-1,S=-1;for(;++x<u.length;)if(u[x][0]===h){S=x;break}if(S===-1)u.push([h,...b]);else if(b.length>0){let[v,...C]=b;const O=u[S][1];Ic(O)&&Ic(v)&&(v=vc(!0,O,v)),u[S]=[h,v,...C]}}}}const QC=new hf().freeze();function Cc(t,a){if(typeof a!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Tc(t,a){if(typeof a!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Ec(t,a){if(a)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function hg(t){if(!Ic(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function mg(t,a,l){if(!l)throw new Error("`"+t+"` finished async. Use `"+a+"` instead")}function ku(t){return ZC(t)?t:new Ax(t)}function ZC(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function KC(t){return typeof t=="string"||WC(t)}function WC(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const $C="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",pg=[],gg={allowDangerousHtml:!0},e3=/^(https?|ircs?|mailto|xmpp)$/i,n3=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function t3(t){const a=r3(t),l=l3(t);return a3(a.runSync(a.parse(l),l),t)}function r3(t){const a=t.rehypePlugins||pg,l=t.remarkPlugins||pg,u=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...gg}:gg;return QC().use(Uw).use(l).use(_C,u).use(a)}function l3(t){const a=t.children||"",l=new Ax;return typeof a=="string"&&(l.value=a),l}function a3(t,a){const l=a.allowedElements,u=a.allowElement,s=a.components,c=a.disallowedElements,f=a.skipHtml,m=a.unwrapDisallowed,p=a.urlTransform||i3;for(const b of n3)Object.hasOwn(a,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+$C+b.id,void 0);return df(t,h),v2(t,{Fragment:g.Fragment,components:s,ignoreInvalidStyle:!0,jsx:g.jsx,jsxs:g.jsxs,passKeys:!0,passNode:!0});function h(b,x,S){if(b.type==="raw"&&S&&typeof x=="number")return f?S.children.splice(x,1):S.children[x]={type:"text",value:b.value},x;if(b.type==="element"){let v;for(v in gc)if(Object.hasOwn(gc,v)&&Object.hasOwn(b.properties,v)){const C=b.properties[v],O=gc[v];(O===null||O.includes(b.tagName))&&(b.properties[v]=p(String(C||""),v,b))}}if(b.type==="element"){let v=l?!l.includes(b.tagName):c?c.includes(b.tagName):!1;if(!v&&u&&typeof x=="number"&&(v=!u(b,x,S)),v&&S&&typeof x=="number")return m&&b.children?S.children.splice(x,1,...b.children):S.children.splice(x,1),x}}}function i3(t){const a=t.indexOf(":"),l=t.indexOf("?"),u=t.indexOf("#"),s=t.indexOf("/");return a===-1||s!==-1&&a>s||l!==-1&&a>l||u!==-1&&a>u||e3.test(t.slice(0,a))?t:""}function xg(t,a){const l=String(t);if(typeof a!="string")throw new TypeError("Expected character");let u=0,s=l.indexOf(a);for(;s!==-1;)u++,s=l.indexOf(a,s+a.length);return u}function u3(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function s3(t,a,l){const s=Hu((l||{}).ignore||[]),c=o3(a);let f=-1;for(;++f<c.length;)Ex(t,"text",m);function m(h,b){let x=-1,S;for(;++x<b.length;){const v=b[x],C=S?S.children:void 0;if(s(v,C?C.indexOf(v):void 0,S))return;S=v}if(S)return p(h,b)}function p(h,b){const x=b[b.length-1],S=c[f][0],v=c[f][1];let C=0;const z=x.children.indexOf(h);let j=!1,H=[];S.lastIndex=0;let _=S.exec(h.value);for(;_;){const K=_.index,re={index:_.index,input:_.input,stack:[...b,h]};let I=v(..._,re);if(typeof I=="string"&&(I=I.length>0?{type:"text",value:I}:void 0),I===!1?S.lastIndex=K+1:(C!==K&&H.push({type:"text",value:h.value.slice(C,K)}),Array.isArray(I)?H.push(...I):I&&H.push(I),C=K+_[0].length,j=!0),!S.global)break;_=S.exec(h.value)}return j?(C<h.value.length&&H.push({type:"text",value:h.value.slice(C)}),x.children.splice(z,1,...H)):H=[h],z+H.length}}function o3(t){const a=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const l=!t[0]||Array.isArray(t[0])?t:[t];let u=-1;for(;++u<l.length;){const s=l[u];a.push([c3(s[0]),f3(s[1])])}return a}function c3(t){return typeof t=="string"?new RegExp(u3(t),"g"):t}function f3(t){return typeof t=="function"?t:function(){return t}}const Ac="phrasing",jc=["autolink","link","image","label"];function d3(){return{transforms:[y3],enter:{literalAutolink:m3,literalAutolinkEmail:Nc,literalAutolinkHttp:Nc,literalAutolinkWww:Nc},exit:{literalAutolink:b3,literalAutolinkEmail:x3,literalAutolinkHttp:p3,literalAutolinkWww:g3}}}function h3(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ac,notInConstruct:jc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ac,notInConstruct:jc},{character:":",before:"[ps]",after:"\\/",inConstruct:Ac,notInConstruct:jc}]}}function m3(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Nc(t){this.config.enter.autolinkProtocol.call(this,t)}function p3(t){this.config.exit.autolinkProtocol.call(this,t)}function g3(t){this.config.exit.data.call(this,t);const a=this.stack[this.stack.length-1];a.type,a.url="http://"+this.sliceSerialize(t)}function x3(t){this.config.exit.autolinkEmail.call(this,t)}function b3(t){this.exit(t)}function y3(t){s3(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,v3],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),S3]],{ignore:["link","linkReference"]})}function v3(t,a,l,u,s){let c="";if(!jx(s)||(/^w/i.test(a)&&(l=a+l,a="",c="http://"),!k3(l)))return!1;const f=w3(l+u);if(!f[0])return!1;const m={type:"link",title:null,url:c+a+f[0],children:[{type:"text",value:a+f[0]}]};return f[1]?[m,{type:"text",value:f[1]}]:m}function S3(t,a,l,u){return!jx(u,!0)||/[-\d_]$/.test(l)?!1:{type:"link",title:null,url:"mailto:"+a+"@"+l,children:[{type:"text",value:a+"@"+l}]}}function k3(t){const a=t.split(".");return!(a.length<2||a[a.length-1]&&(/_/.test(a[a.length-1])||!/[a-zA-Z\d]/.test(a[a.length-1]))||a[a.length-2]&&(/_/.test(a[a.length-2])||!/[a-zA-Z\d]/.test(a[a.length-2])))}function w3(t){const a=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!a)return[t,void 0];t=t.slice(0,a.index);let l=a[0],u=l.indexOf(")");const s=xg(t,"(");let c=xg(t,")");for(;u!==-1&&s>c;)t+=l.slice(0,u+1),l=l.slice(u+1),u=l.indexOf(")"),c++;return[t,l]}function jx(t,a){const l=t.input.charCodeAt(t.index-1);return(t.index===0||zr(l)||Lu(l))&&(!a||l!==47)}Nx.peek=D3;function C3(){this.buffer()}function T3(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function E3(){this.buffer()}function A3(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function j3(t){const a=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=ut(this.sliceSerialize(t)).toLowerCase(),l.label=a}function N3(t){this.exit(t)}function M3(t){const a=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=ut(this.sliceSerialize(t)).toLowerCase(),l.label=a}function _3(t){this.exit(t)}function D3(){return"["}function Nx(t,a,l,u){const s=l.createTracker(u);let c=s.move("[^");const f=l.enter("footnoteReference"),m=l.enter("reference");return c+=s.move(l.safe(l.associationId(t),{after:"]",before:c})),m(),f(),c+=s.move("]"),c}function R3(){return{enter:{gfmFootnoteCallString:C3,gfmFootnoteCall:T3,gfmFootnoteDefinitionLabelString:E3,gfmFootnoteDefinition:A3},exit:{gfmFootnoteCallString:j3,gfmFootnoteCall:N3,gfmFootnoteDefinitionLabelString:M3,gfmFootnoteDefinition:_3}}}function O3(t){let a=!1;return t&&t.firstLineBlank&&(a=!0),{handlers:{footnoteDefinition:l,footnoteReference:Nx},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function l(u,s,c,f){const m=c.createTracker(f);let p=m.move("[^");const h=c.enter("footnoteDefinition"),b=c.enter("label");return p+=m.move(c.safe(c.associationId(u),{before:p,after:"]"})),b(),p+=m.move("]:"),u.children&&u.children.length>0&&(m.shift(4),p+=m.move((a?`
`:" ")+c.indentLines(c.containerFlow(u,m.current()),a?Mx:z3))),h(),p}}function z3(t,a,l){return a===0?t:Mx(t,a,l)}function Mx(t,a,l){return(l?"":"    ")+t}const L3=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];_x.peek=I3;function U3(){return{canContainEols:["delete"],enter:{strikethrough:H3},exit:{strikethrough:q3}}}function B3(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:L3}],handlers:{delete:_x}}}function H3(t){this.enter({type:"delete",children:[]},t)}function q3(t){this.exit(t)}function _x(t,a,l,u){const s=l.createTracker(u),c=l.enter("strikethrough");let f=s.move("~~");return f+=l.containerPhrasing(t,{...s.current(),before:f,after:"~"}),f+=s.move("~~"),c(),f}function I3(){return"~"}function V3(t){return t.length}function F3(t,a){const l=a||{},u=(l.align||[]).concat(),s=l.stringLength||V3,c=[],f=[],m=[],p=[];let h=0,b=-1;for(;++b<t.length;){const O=[],z=[];let j=-1;for(t[b].length>h&&(h=t[b].length);++j<t[b].length;){const H=G3(t[b][j]);if(l.alignDelimiters!==!1){const _=s(H);z[j]=_,(p[j]===void 0||_>p[j])&&(p[j]=_)}O.push(H)}f[b]=O,m[b]=z}let x=-1;if(typeof u=="object"&&"length"in u)for(;++x<h;)c[x]=bg(u[x]);else{const O=bg(u);for(;++x<h;)c[x]=O}x=-1;const S=[],v=[];for(;++x<h;){const O=c[x];let z="",j="";O===99?(z=":",j=":"):O===108?z=":":O===114&&(j=":");let H=l.alignDelimiters===!1?1:Math.max(1,p[x]-z.length-j.length);const _=z+"-".repeat(H)+j;l.alignDelimiters!==!1&&(H=z.length+H+j.length,H>p[x]&&(p[x]=H),v[x]=H),S[x]=_}f.splice(1,0,S),m.splice(1,0,v),b=-1;const C=[];for(;++b<f.length;){const O=f[b],z=m[b];x=-1;const j=[];for(;++x<h;){const H=O[x]||"";let _="",K="";if(l.alignDelimiters!==!1){const re=p[x]-(z[x]||0),I=c[x];I===114?_=" ".repeat(re):I===99?re%2?(_=" ".repeat(re/2+.5),K=" ".repeat(re/2-.5)):(_=" ".repeat(re/2),K=_):K=" ".repeat(re)}l.delimiterStart!==!1&&!x&&j.push("|"),l.padding!==!1&&!(l.alignDelimiters===!1&&H==="")&&(l.delimiterStart!==!1||x)&&j.push(" "),l.alignDelimiters!==!1&&j.push(_),j.push(H),l.alignDelimiters!==!1&&j.push(K),l.padding!==!1&&j.push(" "),(l.delimiterEnd!==!1||x!==h-1)&&j.push("|")}C.push(l.delimiterEnd===!1?j.join("").replace(/ +$/,""):j.join(""))}return C.join(`
`)}function G3(t){return t==null?"":String(t)}function bg(t){const a=typeof t=="string"?t.codePointAt(0):0;return a===67||a===99?99:a===76||a===108?108:a===82||a===114?114:0}function Y3(t,a,l,u){const s=l.enter("blockquote"),c=l.createTracker(u);c.move("> "),c.shift(2);const f=l.indentLines(l.containerFlow(t,c.current()),P3);return s(),f}function P3(t,a,l){return">"+(l?"":" ")+t}function X3(t,a){return yg(t,a.inConstruct,!0)&&!yg(t,a.notInConstruct,!1)}function yg(t,a,l){if(typeof a=="string"&&(a=[a]),!a||a.length===0)return l;let u=-1;for(;++u<a.length;)if(t.includes(a[u]))return!0;return!1}function vg(t,a,l,u){let s=-1;for(;++s<l.unsafe.length;)if(l.unsafe[s].character===`
`&&X3(l.stack,l.unsafe[s]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function J3(t,a){const l=String(t);let u=l.indexOf(a),s=u,c=0,f=0;if(typeof a!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===s?++c>f&&(f=c):c=1,s=u+a.length,u=l.indexOf(a,s);return f}function Q3(t,a){return!!(a.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function Z3(t){const a=t.options.fence||"`";if(a!=="`"&&a!=="~")throw new Error("Cannot serialize code with `"+a+"` for `options.fence`, expected `` ` `` or `~`");return a}function K3(t,a,l,u){const s=Z3(l),c=t.value||"",f=s==="`"?"GraveAccent":"Tilde";if(Q3(t,l)){const x=l.enter("codeIndented"),S=l.indentLines(c,W3);return x(),S}const m=l.createTracker(u),p=s.repeat(Math.max(J3(c,s)+1,3)),h=l.enter("codeFenced");let b=m.move(p);if(t.lang){const x=l.enter(`codeFencedLang${f}`);b+=m.move(l.safe(t.lang,{before:b,after:" ",encode:["`"],...m.current()})),x()}if(t.lang&&t.meta){const x=l.enter(`codeFencedMeta${f}`);b+=m.move(" "),b+=m.move(l.safe(t.meta,{before:b,after:`
`,encode:["`"],...m.current()})),x()}return b+=m.move(`
`),c&&(b+=m.move(c+`
`)),b+=m.move(p),h(),b}function W3(t,a,l){return(l?"":"    ")+t}function mf(t){const a=t.options.quote||'"';if(a!=='"'&&a!=="'")throw new Error("Cannot serialize title with `"+a+"` for `options.quote`, expected `\"`, or `'`");return a}function $3(t,a,l,u){const s=mf(l),c=s==='"'?"Quote":"Apostrophe",f=l.enter("definition");let m=l.enter("label");const p=l.createTracker(u);let h=p.move("[");return h+=p.move(l.safe(l.associationId(t),{before:h,after:"]",...p.current()})),h+=p.move("]: "),m(),!t.url||/[\0- \u007F]/.test(t.url)?(m=l.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(l.safe(t.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(m=l.enter("destinationRaw"),h+=p.move(l.safe(t.url,{before:h,after:t.title?" ":`
`,...p.current()}))),m(),t.title&&(m=l.enter(`title${c}`),h+=p.move(" "+s),h+=p.move(l.safe(t.title,{before:h,after:s,...p.current()})),h+=p.move(s),m()),f(),h}function eT(t){const a=t.options.emphasis||"*";if(a!=="*"&&a!=="_")throw new Error("Cannot serialize emphasis with `"+a+"` for `options.emphasis`, expected `*`, or `_`");return a}function Ya(t){return"&#x"+t.toString(16).toUpperCase()+";"}function Ru(t,a,l){const u=Nl(t),s=Nl(a);return u===void 0?s===void 0?l==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Dx.peek=nT;function Dx(t,a,l,u){const s=eT(l),c=l.enter("emphasis"),f=l.createTracker(u),m=f.move(s);let p=f.move(l.containerPhrasing(t,{after:s,before:m,...f.current()}));const h=p.charCodeAt(0),b=Ru(u.before.charCodeAt(u.before.length-1),h,s);b.inside&&(p=Ya(h)+p.slice(1));const x=p.charCodeAt(p.length-1),S=Ru(u.after.charCodeAt(0),x,s);S.inside&&(p=p.slice(0,-1)+Ya(x));const v=f.move(s);return c(),l.attentionEncodeSurroundingInfo={after:S.outside,before:b.outside},m+p+v}function nT(t,a,l){return l.options.emphasis||"*"}function tT(t,a){let l=!1;return df(t,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return l=!0,Hc}),!!((!t.depth||t.depth<3)&&lf(t)&&(a.options.setext||l))}function rT(t,a,l,u){const s=Math.max(Math.min(6,t.depth||1),1),c=l.createTracker(u);if(tT(t,l)){const b=l.enter("headingSetext"),x=l.enter("phrasing"),S=l.containerPhrasing(t,{...c.current(),before:`
`,after:`
`});return x(),b(),S+`
`+(s===1?"=":"-").repeat(S.length-(Math.max(S.lastIndexOf("\r"),S.lastIndexOf(`
`))+1))}const f="#".repeat(s),m=l.enter("headingAtx"),p=l.enter("phrasing");c.move(f+" ");let h=l.containerPhrasing(t,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(h)&&(h=Ya(h.charCodeAt(0))+h.slice(1)),h=h?f+" "+h:f,l.options.closeAtx&&(h+=" "+f),p(),m(),h}Rx.peek=lT;function Rx(t){return t.value||""}function lT(){return"<"}Ox.peek=aT;function Ox(t,a,l,u){const s=mf(l),c=s==='"'?"Quote":"Apostrophe",f=l.enter("image");let m=l.enter("label");const p=l.createTracker(u);let h=p.move("![");return h+=p.move(l.safe(t.alt,{before:h,after:"]",...p.current()})),h+=p.move("]("),m(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(m=l.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(l.safe(t.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(m=l.enter("destinationRaw"),h+=p.move(l.safe(t.url,{before:h,after:t.title?" ":")",...p.current()}))),m(),t.title&&(m=l.enter(`title${c}`),h+=p.move(" "+s),h+=p.move(l.safe(t.title,{before:h,after:s,...p.current()})),h+=p.move(s),m()),h+=p.move(")"),f(),h}function aT(){return"!"}zx.peek=iT;function zx(t,a,l,u){const s=t.referenceType,c=l.enter("imageReference");let f=l.enter("label");const m=l.createTracker(u);let p=m.move("![");const h=l.safe(t.alt,{before:p,after:"]",...m.current()});p+=m.move(h+"]["),f();const b=l.stack;l.stack=[],f=l.enter("reference");const x=l.safe(l.associationId(t),{before:p,after:"]",...m.current()});return f(),l.stack=b,c(),s==="full"||!h||h!==x?p+=m.move(x+"]"):s==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function iT(){return"!"}Lx.peek=uT;function Lx(t,a,l){let u=t.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(u);)s+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++c<l.unsafe.length;){const f=l.unsafe[c],m=l.compilePattern(f);let p;if(f.atBreak)for(;p=m.exec(u);){let h=p.index;u.charCodeAt(h)===10&&u.charCodeAt(h-1)===13&&h--,u=u.slice(0,h)+" "+u.slice(p.index+1)}}return s+u+s}function uT(){return"`"}function Ux(t,a){const l=lf(t);return!!(!a.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(l===t.url||"mailto:"+l===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}Bx.peek=sT;function Bx(t,a,l,u){const s=mf(l),c=s==='"'?"Quote":"Apostrophe",f=l.createTracker(u);let m,p;if(Ux(t,l)){const b=l.stack;l.stack=[],m=l.enter("autolink");let x=f.move("<");return x+=f.move(l.containerPhrasing(t,{before:x,after:">",...f.current()})),x+=f.move(">"),m(),l.stack=b,x}m=l.enter("link"),p=l.enter("label");let h=f.move("[");return h+=f.move(l.containerPhrasing(t,{before:h,after:"](",...f.current()})),h+=f.move("]("),p(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(p=l.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(l.safe(t.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(p=l.enter("destinationRaw"),h+=f.move(l.safe(t.url,{before:h,after:t.title?" ":")",...f.current()}))),p(),t.title&&(p=l.enter(`title${c}`),h+=f.move(" "+s),h+=f.move(l.safe(t.title,{before:h,after:s,...f.current()})),h+=f.move(s),p()),h+=f.move(")"),m(),h}function sT(t,a,l){return Ux(t,l)?"<":"["}Hx.peek=oT;function Hx(t,a,l,u){const s=t.referenceType,c=l.enter("linkReference");let f=l.enter("label");const m=l.createTracker(u);let p=m.move("[");const h=l.containerPhrasing(t,{before:p,after:"]",...m.current()});p+=m.move(h+"]["),f();const b=l.stack;l.stack=[],f=l.enter("reference");const x=l.safe(l.associationId(t),{before:p,after:"]",...m.current()});return f(),l.stack=b,c(),s==="full"||!h||h!==x?p+=m.move(x+"]"):s==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function oT(){return"["}function pf(t){const a=t.options.bullet||"*";if(a!=="*"&&a!=="+"&&a!=="-")throw new Error("Cannot serialize items with `"+a+"` for `options.bullet`, expected `*`, `+`, or `-`");return a}function cT(t){const a=pf(t),l=t.options.bulletOther;if(!l)return a==="*"?"-":"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(l===a)throw new Error("Expected `bullet` (`"+a+"`) and `bulletOther` (`"+l+"`) to be different");return l}function fT(t){const a=t.options.bulletOrdered||".";if(a!=="."&&a!==")")throw new Error("Cannot serialize items with `"+a+"` for `options.bulletOrdered`, expected `.` or `)`");return a}function qx(t){const a=t.options.rule||"*";if(a!=="*"&&a!=="-"&&a!=="_")throw new Error("Cannot serialize rules with `"+a+"` for `options.rule`, expected `*`, `-`, or `_`");return a}function dT(t,a,l,u){const s=l.enter("list"),c=l.bulletCurrent;let f=t.ordered?fT(l):pf(l);const m=t.ordered?f==="."?")":".":cT(l);let p=a&&l.bulletLastUsed?f===l.bulletLastUsed:!1;if(!t.ordered){const b=t.children?t.children[0]:void 0;if((f==="*"||f==="-")&&b&&(!b.children||!b.children[0])&&l.stack[l.stack.length-1]==="list"&&l.stack[l.stack.length-2]==="listItem"&&l.stack[l.stack.length-3]==="list"&&l.stack[l.stack.length-4]==="listItem"&&l.indexStack[l.indexStack.length-1]===0&&l.indexStack[l.indexStack.length-2]===0&&l.indexStack[l.indexStack.length-3]===0&&(p=!0),qx(l)===f&&b){let x=-1;for(;++x<t.children.length;){const S=t.children[x];if(S&&S.type==="listItem"&&S.children&&S.children[0]&&S.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(f=m),l.bulletCurrent=f;const h=l.containerFlow(t,u);return l.bulletLastUsed=f,l.bulletCurrent=c,s(),h}function hT(t){const a=t.options.listItemIndent||"one";if(a!=="tab"&&a!=="one"&&a!=="mixed")throw new Error("Cannot serialize items with `"+a+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return a}function mT(t,a,l,u){const s=hT(l);let c=l.bulletCurrent||pf(l);a&&a.type==="list"&&a.ordered&&(c=(typeof a.start=="number"&&a.start>-1?a.start:1)+(l.options.incrementListMarker===!1?0:a.children.indexOf(t))+c);let f=c.length+1;(s==="tab"||s==="mixed"&&(a&&a.type==="list"&&a.spread||t.spread))&&(f=Math.ceil(f/4)*4);const m=l.createTracker(u);m.move(c+" ".repeat(f-c.length)),m.shift(f);const p=l.enter("listItem"),h=l.indentLines(l.containerFlow(t,m.current()),b);return p(),h;function b(x,S,v){return S?(v?"":" ".repeat(f))+x:(v?c:c+" ".repeat(f-c.length))+x}}function pT(t,a,l,u){const s=l.enter("paragraph"),c=l.enter("phrasing"),f=l.containerPhrasing(t,u);return c(),s(),f}const gT=Hu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function xT(t,a,l,u){return(t.children.some(function(f){return gT(f)})?l.containerPhrasing:l.containerFlow).call(l,t,u)}function bT(t){const a=t.options.strong||"*";if(a!=="*"&&a!=="_")throw new Error("Cannot serialize strong with `"+a+"` for `options.strong`, expected `*`, or `_`");return a}Ix.peek=yT;function Ix(t,a,l,u){const s=bT(l),c=l.enter("strong"),f=l.createTracker(u),m=f.move(s+s);let p=f.move(l.containerPhrasing(t,{after:s,before:m,...f.current()}));const h=p.charCodeAt(0),b=Ru(u.before.charCodeAt(u.before.length-1),h,s);b.inside&&(p=Ya(h)+p.slice(1));const x=p.charCodeAt(p.length-1),S=Ru(u.after.charCodeAt(0),x,s);S.inside&&(p=p.slice(0,-1)+Ya(x));const v=f.move(s+s);return c(),l.attentionEncodeSurroundingInfo={after:S.outside,before:b.outside},m+p+v}function yT(t,a,l){return l.options.strong||"*"}function vT(t,a,l,u){return l.safe(t.value,u)}function ST(t){const a=t.options.ruleRepetition||3;if(a<3)throw new Error("Cannot serialize rules with repetition `"+a+"` for `options.ruleRepetition`, expected `3` or more");return a}function kT(t,a,l){const u=(qx(l)+(l.options.ruleSpaces?" ":"")).repeat(ST(l));return l.options.ruleSpaces?u.slice(0,-1):u}const Vx={blockquote:Y3,break:vg,code:K3,definition:$3,emphasis:Dx,hardBreak:vg,heading:rT,html:Rx,image:Ox,imageReference:zx,inlineCode:Lx,link:Bx,linkReference:Hx,list:dT,listItem:mT,paragraph:pT,root:xT,strong:Ix,text:vT,thematicBreak:kT};function wT(){return{enter:{table:CT,tableData:Sg,tableHeader:Sg,tableRow:ET},exit:{codeText:AT,table:TT,tableData:Mc,tableHeader:Mc,tableRow:Mc}}}function CT(t){const a=t._align;this.enter({type:"table",align:a.map(function(l){return l==="none"?null:l}),children:[]},t),this.data.inTable=!0}function TT(t){this.exit(t),this.data.inTable=void 0}function ET(t){this.enter({type:"tableRow",children:[]},t)}function Mc(t){this.exit(t)}function Sg(t){this.enter({type:"tableCell",children:[]},t)}function AT(t){let a=this.resume();this.data.inTable&&(a=a.replace(/\\([\\|])/g,jT));const l=this.stack[this.stack.length-1];l.type,l.value=a,this.exit(t)}function jT(t,a){return a==="|"?a:t}function NT(t){const a=t||{},l=a.tableCellPadding,u=a.tablePipeAlign,s=a.stringLength,c=l?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:S,table:f,tableCell:p,tableRow:m}};function f(v,C,O,z){return h(b(v,O,z),v.align)}function m(v,C,O,z){const j=x(v,O,z),H=h([j]);return H.slice(0,H.indexOf(`
`))}function p(v,C,O,z){const j=O.enter("tableCell"),H=O.enter("phrasing"),_=O.containerPhrasing(v,{...z,before:c,after:c});return H(),j(),_}function h(v,C){return F3(v,{align:C,alignDelimiters:u,padding:l,stringLength:s})}function b(v,C,O){const z=v.children;let j=-1;const H=[],_=C.enter("table");for(;++j<z.length;)H[j]=x(z[j],C,O);return _(),H}function x(v,C,O){const z=v.children;let j=-1;const H=[],_=C.enter("tableRow");for(;++j<z.length;)H[j]=p(z[j],v,C,O);return _(),H}function S(v,C,O){let z=Vx.inlineCode(v,C,O);return O.stack.includes("tableCell")&&(z=z.replace(/\|/g,"\\$&")),z}}function MT(){return{exit:{taskListCheckValueChecked:kg,taskListCheckValueUnchecked:kg,paragraph:DT}}}function _T(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:RT}}}function kg(t){const a=this.stack[this.stack.length-2];a.type,a.checked=t.type==="taskListCheckValueChecked"}function DT(t){const a=this.stack[this.stack.length-2];if(a&&a.type==="listItem"&&typeof a.checked=="boolean"){const l=this.stack[this.stack.length-1];l.type;const u=l.children[0];if(u&&u.type==="text"){const s=a.children;let c=-1,f;for(;++c<s.length;){const m=s[c];if(m.type==="paragraph"){f=m;break}}f===l&&(u.value=u.value.slice(1),u.value.length===0?l.children.shift():l.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,l.position.start=Object.assign({},u.position.start)))}}this.exit(t)}function RT(t,a,l,u){const s=t.children[0],c=typeof t.checked=="boolean"&&s&&s.type==="paragraph",f="["+(t.checked?"x":" ")+"] ",m=l.createTracker(u);c&&m.move(f);let p=Vx.listItem(t,a,l,{...u,...m.current()});return c&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),p;function h(b){return b+f}}function OT(){return[d3(),R3(),U3(),wT(),MT()]}function zT(t){return{extensions:[h3(),O3(t),B3(),NT(t),_T()]}}const LT={tokenize:VT,partial:!0},Fx={tokenize:FT,partial:!0},Gx={tokenize:GT,partial:!0},Yx={tokenize:YT,partial:!0},UT={tokenize:PT,partial:!0},Px={name:"wwwAutolink",tokenize:qT,previous:Jx},Xx={name:"protocolAutolink",tokenize:IT,previous:Qx},It={name:"emailAutolink",tokenize:HT,previous:Zx},gt={};function BT(){return{text:gt}}let Or=48;for(;Or<123;)gt[Or]=It,Or++,Or===58?Or=65:Or===91&&(Or=97);gt[43]=It;gt[45]=It;gt[46]=It;gt[95]=It;gt[72]=[It,Xx];gt[104]=[It,Xx];gt[87]=[It,Px];gt[119]=[It,Px];function HT(t,a,l){const u=this;let s,c;return f;function f(x){return!Fc(x)||!Zx.call(u,u.previous)||gf(u.events)?l(x):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),m(x))}function m(x){return Fc(x)?(t.consume(x),m):x===64?(t.consume(x),p):l(x)}function p(x){return x===46?t.check(UT,b,h)(x):x===45||x===95||gn(x)?(c=!0,t.consume(x),p):b(x)}function h(x){return t.consume(x),s=!0,p}function b(x){return c&&s&&Sn(u.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),a(x)):l(x)}}function qT(t,a,l){const u=this;return s;function s(f){return f!==87&&f!==119||!Jx.call(u,u.previous)||gf(u.events)?l(f):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(LT,t.attempt(Fx,t.attempt(Gx,c),l),l)(f))}function c(f){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),a(f)}}function IT(t,a,l){const u=this;let s="",c=!1;return f;function f(x){return(x===72||x===104)&&Qx.call(u,u.previous)&&!gf(u.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),s+=String.fromCodePoint(x),t.consume(x),m):l(x)}function m(x){if(Sn(x)&&s.length<5)return s+=String.fromCodePoint(x),t.consume(x),m;if(x===58){const S=s.toLowerCase();if(S==="http"||S==="https")return t.consume(x),p}return l(x)}function p(x){return x===47?(t.consume(x),c?h:(c=!0,p)):l(x)}function h(x){return x===null||Mu(x)||Fe(x)||zr(x)||Lu(x)?l(x):t.attempt(Fx,t.attempt(Gx,b),l)(x)}function b(x){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),a(x)}}function VT(t,a,l){let u=0;return s;function s(f){return(f===87||f===119)&&u<3?(u++,t.consume(f),s):f===46&&u===3?(t.consume(f),c):l(f)}function c(f){return f===null?l(f):a(f)}}function FT(t,a,l){let u,s,c;return f;function f(h){return h===46||h===95?t.check(Yx,p,m)(h):h===null||Fe(h)||zr(h)||h!==45&&Lu(h)?p(h):(c=!0,t.consume(h),f)}function m(h){return h===95?u=!0:(s=u,u=void 0),t.consume(h),f}function p(h){return s||u||!c?l(h):a(h)}}function GT(t,a){let l=0,u=0;return s;function s(f){return f===40?(l++,t.consume(f),s):f===41&&u<l?c(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?t.check(Yx,a,c)(f):f===null||Fe(f)||zr(f)?a(f):(t.consume(f),s)}function c(f){return f===41&&u++,t.consume(f),s}}function YT(t,a,l){return u;function u(m){return m===33||m===34||m===39||m===41||m===42||m===44||m===46||m===58||m===59||m===63||m===95||m===126?(t.consume(m),u):m===38?(t.consume(m),c):m===93?(t.consume(m),s):m===60||m===null||Fe(m)||zr(m)?a(m):l(m)}function s(m){return m===null||m===40||m===91||Fe(m)||zr(m)?a(m):u(m)}function c(m){return Sn(m)?f(m):l(m)}function f(m){return m===59?(t.consume(m),u):Sn(m)?(t.consume(m),f):l(m)}}function PT(t,a,l){return u;function u(c){return t.consume(c),s}function s(c){return gn(c)?l(c):a(c)}}function Jx(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||Fe(t)}function Qx(t){return!Sn(t)}function Zx(t){return!(t===47||Fc(t))}function Fc(t){return t===43||t===45||t===46||t===95||gn(t)}function gf(t){let a=t.length,l=!1;for(;a--;){const u=t[a][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){l=!0;break}if(u._gfmAutolinkLiteralWalkedInto){l=!1;break}}return t.length>0&&!l&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),l}const XT={tokenize:nE,partial:!0};function JT(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:WT,continuation:{tokenize:$T},exit:eE}},text:{91:{name:"gfmFootnoteCall",tokenize:KT},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:QT,resolveTo:ZT}}}}function QT(t,a,l){const u=this;let s=u.events.length;const c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f;for(;s--;){const p=u.events[s][1];if(p.type==="labelImage"){f=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return m;function m(p){if(!f||!f._balanced)return l(p);const h=ut(u.sliceSerialize({start:f.end,end:u.now()}));return h.codePointAt(0)!==94||!c.includes(h.slice(1))?l(p):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(p),t.exit("gfmFootnoteCallLabelMarker"),a(p))}}function ZT(t,a){let l=t.length;for(;l--;)if(t[l][1].type==="labelImage"&&t[l][0]==="enter"){t[l][1];break}t[l+1][1].type="data",t[l+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},t[l+3][1].start),end:Object.assign({},t[t.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},t[l+3][1].end),end:Object.assign({},t[l+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},t[t.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},m=[t[l+1],t[l+2],["enter",u,a],t[l+3],t[l+4],["enter",s,a],["exit",s,a],["enter",c,a],["enter",f,a],["exit",f,a],["exit",c,a],t[t.length-2],t[t.length-1],["exit",u,a]];return t.splice(l,t.length-l+1,...m),t}function KT(t,a,l){const u=this,s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let c=0,f;return m;function m(x){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(x),t.exit("gfmFootnoteCallLabelMarker"),p}function p(x){return x!==94?l(x):(t.enter("gfmFootnoteCallMarker"),t.consume(x),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",h)}function h(x){if(c>999||x===93&&!f||x===null||x===91||Fe(x))return l(x);if(x===93){t.exit("chunkString");const S=t.exit("gfmFootnoteCallString");return s.includes(ut(u.sliceSerialize(S)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(x),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),a):l(x)}return Fe(x)||(f=!0),c++,t.consume(x),x===92?b:h}function b(x){return x===91||x===92||x===93?(t.consume(x),c++,h):h(x)}}function WT(t,a,l){const u=this,s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let c,f=0,m;return p;function p(C){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(C),t.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(C){return C===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(C),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",b):l(C)}function b(C){if(f>999||C===93&&!m||C===null||C===91||Fe(C))return l(C);if(C===93){t.exit("chunkString");const O=t.exit("gfmFootnoteDefinitionLabelString");return c=ut(u.sliceSerialize(O)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(C),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),S}return Fe(C)||(m=!0),f++,t.consume(C),C===92?x:b}function x(C){return C===91||C===92||C===93?(t.consume(C),f++,b):b(C)}function S(C){return C===58?(t.enter("definitionMarker"),t.consume(C),t.exit("definitionMarker"),s.includes(c)||s.push(c),Me(t,v,"gfmFootnoteDefinitionWhitespace")):l(C)}function v(C){return a(C)}}function $T(t,a,l){return t.check(Ka,a,t.attempt(XT,a,l))}function eE(t){t.exit("gfmFootnoteDefinition")}function nE(t,a,l){const u=this;return Me(t,s,"gfmFootnoteDefinitionIndent",5);function s(c){const f=u.events[u.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?a(c):l(c)}}function tE(t){let l=(t||{}).singleTilde;const u={name:"strikethrough",tokenize:c,resolveAll:s};return l==null&&(l=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function s(f,m){let p=-1;for(;++p<f.length;)if(f[p][0]==="enter"&&f[p][1].type==="strikethroughSequenceTemporary"&&f[p][1]._close){let h=p;for(;h--;)if(f[h][0]==="exit"&&f[h][1].type==="strikethroughSequenceTemporary"&&f[h][1]._open&&f[p][1].end.offset-f[p][1].start.offset===f[h][1].end.offset-f[h][1].start.offset){f[p][1].type="strikethroughSequence",f[h][1].type="strikethroughSequence";const b={type:"strikethrough",start:Object.assign({},f[h][1].start),end:Object.assign({},f[p][1].end)},x={type:"strikethroughText",start:Object.assign({},f[h][1].end),end:Object.assign({},f[p][1].start)},S=[["enter",b,m],["enter",f[h][1],m],["exit",f[h][1],m],["enter",x,m]],v=m.parser.constructs.insideSpan.null;v&&In(S,S.length,0,Uu(v,f.slice(h+1,p),m)),In(S,S.length,0,[["exit",x,m],["enter",f[p][1],m],["exit",f[p][1],m],["exit",b,m]]),In(f,h-1,p-h+3,S),p=h+S.length-2;break}}for(p=-1;++p<f.length;)f[p][1].type==="strikethroughSequenceTemporary"&&(f[p][1].type="data");return f}function c(f,m,p){const h=this.previous,b=this.events;let x=0;return S;function S(C){return h===126&&b[b.length-1][1].type!=="characterEscape"?p(C):(f.enter("strikethroughSequenceTemporary"),v(C))}function v(C){const O=Nl(h);if(C===126)return x>1?p(C):(f.consume(C),x++,v);if(x<2&&!l)return p(C);const z=f.exit("strikethroughSequenceTemporary"),j=Nl(C);return z._open=!j||j===2&&!!O,z._close=!O||O===2&&!!j,m(C)}}}class rE{constructor(){this.map=[]}add(a,l,u){lE(this,a,l,u)}consume(a){if(this.map.sort(function(c,f){return c[0]-f[0]}),this.map.length===0)return;let l=this.map.length;const u=[];for(;l>0;)l-=1,u.push(a.slice(this.map[l][0]+this.map[l][1]),this.map[l][2]),a.length=this.map[l][0];u.push(a.slice()),a.length=0;let s=u.pop();for(;s;){for(const c of s)a.push(c);s=u.pop()}this.map.length=0}}function lE(t,a,l,u){let s=0;if(!(l===0&&u.length===0)){for(;s<t.map.length;){if(t.map[s][0]===a){t.map[s][1]+=l,t.map[s][2].push(...u);return}s+=1}t.map.push([a,l,u])}}function aE(t,a){let l=!1;const u=[];for(;a<t.length;){const s=t[a];if(l){if(s[0]==="enter")s[1].type==="tableContent"&&u.push(t[a+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(t[a-1][1].type==="tableDelimiterMarker"){const c=u.length-1;u[c]=u[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(l=!0);a+=1}return u}function iE(){return{flow:{null:{name:"table",tokenize:uE,resolveAll:sE}}}}function uE(t,a,l){const u=this;let s=0,c=0,f;return m;function m(A){let P=u.events.length-1;for(;P>-1;){const ae=u.events[P][1].type;if(ae==="lineEnding"||ae==="linePrefix")P--;else break}const Q=P>-1?u.events[P][1].type:null,de=Q==="tableHead"||Q==="tableRow"?I:p;return de===I&&u.parser.lazy[u.now().line]?l(A):de(A)}function p(A){return t.enter("tableHead"),t.enter("tableRow"),h(A)}function h(A){return A===124||(f=!0,c+=1),b(A)}function b(A){return A===null?l(A):he(A)?c>1?(c=0,u.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),v):l(A):Te(A)?Me(t,b,"whitespace")(A):(c+=1,f&&(f=!1,s+=1),A===124?(t.enter("tableCellDivider"),t.consume(A),t.exit("tableCellDivider"),f=!0,b):(t.enter("data"),x(A)))}function x(A){return A===null||A===124||Fe(A)?(t.exit("data"),b(A)):(t.consume(A),A===92?S:x)}function S(A){return A===92||A===124?(t.consume(A),x):x(A)}function v(A){return u.interrupt=!1,u.parser.lazy[u.now().line]?l(A):(t.enter("tableDelimiterRow"),f=!1,Te(A)?Me(t,C,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):C(A))}function C(A){return A===45||A===58?z(A):A===124?(f=!0,t.enter("tableCellDivider"),t.consume(A),t.exit("tableCellDivider"),O):re(A)}function O(A){return Te(A)?Me(t,z,"whitespace")(A):z(A)}function z(A){return A===58?(c+=1,f=!0,t.enter("tableDelimiterMarker"),t.consume(A),t.exit("tableDelimiterMarker"),j):A===45?(c+=1,j(A)):A===null||he(A)?K(A):re(A)}function j(A){return A===45?(t.enter("tableDelimiterFiller"),H(A)):re(A)}function H(A){return A===45?(t.consume(A),H):A===58?(f=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(A),t.exit("tableDelimiterMarker"),_):(t.exit("tableDelimiterFiller"),_(A))}function _(A){return Te(A)?Me(t,K,"whitespace")(A):K(A)}function K(A){return A===124?C(A):A===null||he(A)?!f||s!==c?re(A):(t.exit("tableDelimiterRow"),t.exit("tableHead"),a(A)):re(A)}function re(A){return l(A)}function I(A){return t.enter("tableRow"),ee(A)}function ee(A){return A===124?(t.enter("tableCellDivider"),t.consume(A),t.exit("tableCellDivider"),ee):A===null||he(A)?(t.exit("tableRow"),a(A)):Te(A)?Me(t,ee,"whitespace")(A):(t.enter("data"),oe(A))}function oe(A){return A===null||A===124||Fe(A)?(t.exit("data"),ee(A)):(t.consume(A),A===92?W:oe)}function W(A){return A===92||A===124?(t.consume(A),oe):oe(A)}}function sE(t,a){let l=-1,u=!0,s=0,c=[0,0,0,0],f=[0,0,0,0],m=!1,p=0,h,b,x;const S=new rE;for(;++l<t.length;){const v=t[l],C=v[1];v[0]==="enter"?C.type==="tableHead"?(m=!1,p!==0&&(wg(S,a,p,h,b),b=void 0,p=0),h={type:"table",start:Object.assign({},C.start),end:Object.assign({},C.end)},S.add(l,0,[["enter",h,a]])):C.type==="tableRow"||C.type==="tableDelimiterRow"?(u=!0,x=void 0,c=[0,0,0,0],f=[0,l+1,0,0],m&&(m=!1,b={type:"tableBody",start:Object.assign({},C.start),end:Object.assign({},C.end)},S.add(l,0,[["enter",b,a]])),s=C.type==="tableDelimiterRow"?2:b?3:1):s&&(C.type==="data"||C.type==="tableDelimiterMarker"||C.type==="tableDelimiterFiller")?(u=!1,f[2]===0&&(c[1]!==0&&(f[0]=f[1],x=wu(S,a,c,s,void 0,x),c=[0,0,0,0]),f[2]=l)):C.type==="tableCellDivider"&&(u?u=!1:(c[1]!==0&&(f[0]=f[1],x=wu(S,a,c,s,void 0,x)),c=f,f=[c[1],l,0,0])):C.type==="tableHead"?(m=!0,p=l):C.type==="tableRow"||C.type==="tableDelimiterRow"?(p=l,c[1]!==0?(f[0]=f[1],x=wu(S,a,c,s,l,x)):f[1]!==0&&(x=wu(S,a,f,s,l,x)),s=0):s&&(C.type==="data"||C.type==="tableDelimiterMarker"||C.type==="tableDelimiterFiller")&&(f[3]=l)}for(p!==0&&wg(S,a,p,h,b),S.consume(a.events),l=-1;++l<a.events.length;){const v=a.events[l];v[0]==="enter"&&v[1].type==="table"&&(v[1]._align=aE(a.events,l))}return t}function wu(t,a,l,u,s,c){const f=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",m="tableContent";l[0]!==0&&(c.end=Object.assign({},Al(a.events,l[0])),t.add(l[0],0,[["exit",c,a]]));const p=Al(a.events,l[1]);if(c={type:f,start:Object.assign({},p),end:Object.assign({},p)},t.add(l[1],0,[["enter",c,a]]),l[2]!==0){const h=Al(a.events,l[2]),b=Al(a.events,l[3]),x={type:m,start:Object.assign({},h),end:Object.assign({},b)};if(t.add(l[2],0,[["enter",x,a]]),u!==2){const S=a.events[l[2]],v=a.events[l[3]];if(S[1].end=Object.assign({},v[1].end),S[1].type="chunkText",S[1].contentType="text",l[3]>l[2]+1){const C=l[2]+1,O=l[3]-l[2]-1;t.add(C,O,[])}}t.add(l[3]+1,0,[["exit",x,a]])}return s!==void 0&&(c.end=Object.assign({},Al(a.events,s)),t.add(s,0,[["exit",c,a]]),c=void 0),c}function wg(t,a,l,u,s){const c=[],f=Al(a.events,l);s&&(s.end=Object.assign({},f),c.push(["exit",s,a])),u.end=Object.assign({},f),c.push(["exit",u,a]),t.add(l+1,0,c)}function Al(t,a){const l=t[a],u=l[0]==="enter"?"start":"end";return l[1][u]}const oE={name:"tasklistCheck",tokenize:fE};function cE(){return{text:{91:oE}}}function fE(t,a,l){const u=this;return s;function s(p){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?l(p):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),c)}function c(p){return Fe(p)?(t.enter("taskListCheckValueUnchecked"),t.consume(p),t.exit("taskListCheckValueUnchecked"),f):p===88||p===120?(t.enter("taskListCheckValueChecked"),t.consume(p),t.exit("taskListCheckValueChecked"),f):l(p)}function f(p){return p===93?(t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),m):l(p)}function m(p){return he(p)?a(p):Te(p)?t.check({tokenize:dE},a,l)(p):l(p)}}function dE(t,a,l){return Me(t,u,"whitespace");function u(s){return s===null?l(s):a(s)}}function hE(t){return ux([BT(),JT(),tE(t),iE(),cE()])}const mE={};function pE(t){const a=this,l=t||mE,u=a.data(),s=u.micromarkExtensions||(u.micromarkExtensions=[]),c=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),f=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);s.push(hE(l)),c.push(OT()),f.push(zT(l))}function Va(t){return t==null?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(Va).join(""):typeof t=="object"&&t&&"props"in t?Va(t.props?.children):""}function Kx(){const t=new Map,a=l=>l.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");return l=>{const u=a(l)||"section",s=t.get(u)??0;return t.set(u,s+1),s===0?u:`${u}-${s}`}}function gE(t,a=1,l=3){const u=Kx(),s=t.split(`
`);let c=!1;const f=[];for(const m of s){const p=m.trimEnd();if(p.trimStart().startsWith("```")){c=!c;continue}if(c)continue;const h=/^(#{1,6})\s+(.+?)\s*$/.exec(p);if(!h)continue;const b=h[1].length;if(b<a||b>l)continue;const x=h[2].replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[*_`]/g,"").trim(),S=u(x);f.push({id:S,text:x,level:b})}return f}const xE=({toc:t,activeId:a,onClickItem:l})=>t.length?g.jsx("aside",{className:"fixed left-[calc(50%+870px/2+48px)] top-[calc(var(--header-height)+48px)] hidden xl:block w-56 2xl:w-64 h-[calc(100vh-var(--header-height)-96px)] overflow-y-auto overflow-x-hidden",children:g.jsx("div",{className:"border-l border-(--border-subtle) pl-4 pr-2",children:g.jsx("nav",{"aria-label":"Table of contents",children:g.jsx("ul",{className:"space-y-2",children:t.map(u=>{const s=u.id===a,c=u.level===1?"pl-0":u.level===2?"pl-3":"pl-6";return g.jsx("li",{className:c,children:g.jsxs("button",{type:"button",onClick:()=>l(u.id),className:["group relative block w-full text-left cursor-pointer","text-[13px] leading-[1.65]","transition-all duration-200 origin-left","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",s?"text-(--fg-base) scale-110":"text-gray-500 hover:text-gray-500/80 hover:scale-105"].join(" "),children:[g.jsx("span",{className:["absolute -left-[22px] top-[9px] h-1.5 w-1.5 rounded-full","bg-(--fg-base)","transition-opacity duration-200",s?"opacity-100":"opacity-0 group-hover:opacity-60"].join(" ")}),u.text]})},u.id)})})})})}):null,Cg=({dir:t})=>g.jsx("span",{className:["shrink-0 w-11 h-11 rounded-full flex items-center justify-center","border border-green-400 text-green-400","bg-transparent group-hover:bg-green-400/10","transition-colors duration-200"].join(" "),children:g.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t==="left"?g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"}):g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),Tg=({children:t,align:a,onClick:l})=>g.jsxs("button",{type:"button",onClick:l,className:["group relative w-full overflow-hidden rounded-2xl","border border-white/10","bg-white/5 hover:bg-white/8","transition-colors duration-200","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",a==="left"?"text-left":"text-right"].join(" "),children:[g.jsx("span",{className:"pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:g.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-(--accent)/0 via-(--accent)/10 to-(--accent)/0"})}),g.jsx("div",{className:"relative p-6 cursor-pointer",children:t})]}),bE=({prevPost:t,nextPost:a,onNavigate:l})=>!t&&!a?null:g.jsx("nav",{className:"mt-16 pt-8 border-t border-(--border-subtle)",children:g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsx("div",{className:"md:col-span-1 h-[88px]",children:t?g.jsx(Tg,{align:"left",onClick:()=>l(t.slug),children:g.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[g.jsx(Cg,{dir:"left"}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"이전 포스트"}),g.jsx("h3",{className:`\r
                      text-[18px] font-bold text-(--fg-base)\r
                      truncate overflow-hidden\r
                    `,children:t.title})]})]})}):g.jsx("div",{className:"w-full h-full"})}),g.jsx("div",{className:"md:col-span-1  h-[88px]",children:a?g.jsx(Tg,{align:"right",onClick:()=>l(a.slug),children:g.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[g.jsxs("div",{className:"min-w-0 text-right",children:[g.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"다음 포스트"}),g.jsx("h3",{className:` \r
                      text-[18px] font-bold text-(--fg-base)\r
                      truncate overflow-hidden\r
                    `,children:a.title})]}),g.jsx(Cg,{dir:"right"})]})}):g.jsx("div",{className:"w-full h-full"})})]})}),yE=Au.memo(function({content:a}){const l=D.useMemo(()=>Kx(),[a]),u=D.useMemo(()=>[pE],[]),s=D.useMemo(()=>({h1:({children:c,...f})=>{const m=Va(c),p=l(m);return g.jsx("h1",{id:p,className:"scroll-mt-[calc(var(--header-height)+24px)]",...f,children:c})},h2:({children:c,...f})=>{const m=Va(c),p=l(m);return g.jsx("h2",{id:p,className:"scroll-mt-[calc(var(--header-height)+24px)]",...f,children:c})},h3:({children:c,...f})=>{const m=Va(c),p=l(m);return g.jsx("h3",{id:p,className:"scroll-mt-[calc(var(--header-height)+24px)]",...f,children:c})}}),[l]);return g.jsx(t3,{remarkPlugins:u,components:s,children:a})}),vE=()=>{const{slug:t}=$1(),a=Ja(),l=D.useMemo(()=>et.find(x=>x.slug===t),[t]),u=D.useMemo(()=>l?.content??"",[l]),s=D.useMemo(()=>u?gE(u,1,3):[],[u]),{prevPost:c,nextPost:f}=D.useMemo(()=>{const x=et.findIndex(S=>S.slug===t);return x===-1?{prevPost:null,nextPost:null}:{prevPost:x>0?et[x-1]:null,nextPost:x<et.length-1?et[x+1]:null}},[t]),[m,p]=D.useState(),h=Au.useRef(!1);D.useEffect(()=>{window.scrollTo(0,0)},[t]);const b=x=>{const S=document.getElementById(x);if(!S)return;h.current=!0,p(K=>K===x?K:x),history.replaceState(null,"",`#${x}`);const v=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim())||80,z=S.getBoundingClientRect().top+window.pageYOffset-v-24;window.scrollTo({top:z,behavior:"smooth"});const j=performance.now();let H=0;const _=()=>{const K=window.scrollY;Math.abs(K-z)<2?H+=1:H=0;const re=performance.now()-j>2200;if(H>=3||re){h.current=!1;return}requestAnimationFrame(_)};requestAnimationFrame(_)};return D.useEffect(()=>{if(!s.length)return;const x=()=>{const z=getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim(),j=parseFloat(z);return Number.isFinite(j)?j:80},S=24;let v=0;const C=()=>{if(v=0,h.current)return;const z=x(),j=window.scrollY+z+S+1;let H=s[0]?.id;for(const _ of s){const K=document.getElementById(_.id);if(K)if(K.offsetTop<=j)H=_.id;else break}p(_=>_===H?_:H)},O=()=>{v||(v=requestAnimationFrame(C))};return C(),window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O),()=>{window.removeEventListener("scroll",O),window.removeEventListener("resize",O),v&&cancelAnimationFrame(v)}},[s,t]),l?g.jsxs("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) overflow-x-hidden",children:[g.jsx("div",{className:"mx-auto max-w-[870px] px-5 md:px-8 pt-[calc(var(--header-height)+48px)] pb-16",children:g.jsxs("article",{className:"w-full",children:[g.jsxs("button",{onClick:()=>a("/blog"),className:"relative z-10 mb-5 text-[13px] text-fg-muted hover:text-fg transition-colors flex items-center gap-2",children:[g.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]}),g.jsxs("div",{className:"mb-10",children:[g.jsx("h1",{className:"text-[36px] md:text-[42px] font-bold leading-tight mb-4",children:l.title}),g.jsxs("div",{className:"w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4",children:[g.jsx("div",{className:"flex flex-wrap gap-2",children:l.tags.map(x=>g.jsx("span",{className:"text-[13px] text-green-300 px-2.5 py-1.5 rounded-full  border border-(--border-subtle) text-fg-muted",children:x},x))}),g.jsx("div",{className:"text-[13px] text-fg-muted whitespace-nowrap md:text-right",children:l.date})]})]}),l.cover&&g.jsx("div",{className:"relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-(--bg-soft)",children:g.jsx("img",{src:l.cover,alt:l.title,className:"absolute inset-0 w-full h-full object-cover"})}),g.jsx("div",{className:"prose prose-invert max-w-none",children:u?g.jsx(yE,{content:u}):g.jsx("p",{className:"text-fg-muted",children:"콘텐츠가 없습니다."})}),g.jsx(bE,{prevPost:c,nextPost:f,onNavigate:x=>a(`/blog/${x}`)})]})}),g.jsx(xE,{toc:s,activeId:m,onClickItem:b})]}):g.jsx("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) flex items-center justify-center",children:g.jsxs("div",{className:"text-center",children:[g.jsx("h1",{className:"text-[32px] font-bold mb-4",children:"포스트를 찾을 수 없습니다"}),g.jsx("button",{onClick:()=>a("/blog"),className:"px-4 py-2 rounded-full border border-(--border-subtle) bg-white/5 hover:bg-white/10 transition-colors",children:"블로그로 돌아가기"})]})})},SE="relative min-h-screen pt-[calc(var(--header-height)+56px)] pb-24 px-5 overflow-hidden",kE="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(125,211,252,0.16),transparent_60%),radial-gradient(800px_420px_at_80%_30%,rgba(167,139,250,0.14),transparent_60%),radial-gradient(700px_360px_at_50%_85%,rgba(34,197,94,0.10),transparent_60%)] [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]",Eg="relative rounded-3xl border border-(--border-subtle) bg-(--bg-elevated)/70 p-6 backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(0,0,0,0.55)] hover:border-white/20 [html[data-theme='light']_&]:bg-white/70 [html[data-theme='light']_&]:shadow-[0_10px_26px_rgba(0,0,0,0.08)] [html[data-theme='light']_&]:hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]",Ag="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(900px_240px_at_10%_0%,rgba(255,255,255,0.14),transparent_55%)] [html[data-theme='light']_&]:bg-[radial-gradient(900px_240px_at_10%_0%,rgba(17,24,39,0.06),transparent_55%)]",wE="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-fg-muted",Gc="inline-flex items-center rounded-full border border-(--border-subtle) bg-(--bg-soft) px-3 py-1 text-[11px] text-fg-muted [html[data-theme='light']_&]:bg-[#f5f5fb]",CE=()=>(D.useEffect(()=>{window.scrollTo(0,0)},[]),g.jsxs("main",{className:SE,children:[g.jsx("div",{className:kE}),g.jsxs("div",{className:"max-w-[760px] mx-auto relative",children:[g.jsxs("section",{className:"text-center mb-12",children:[g.jsx("div",{className:"flex justify-center mb-4",children:g.jsxs("span",{className:`${Gc} gap-2`,children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400"}),g.jsx("span",{className:wE,children:"Contact"})]})}),g.jsx("h1",{className:"text-[34px] md:text-[44px] font-semibold tracking-[-0.02em] mb-4",children:"함께 이야기해요"}),g.jsxs("p",{className:"text-[15px] md:text-[16px] text-fg-muted leading-relaxed max-w-lg mx-auto",children:["프로젝트 제안, 협업, 채용 어떤 주제든 좋습니다.",g.jsx("br",{className:" md:block"}),"가능한 빠르게 확인하고 답변 드리겠습니다."]})]}),g.jsxs("div",{className:"grid gap-5",children:[g.jsxs("div",{className:Eg,children:[g.jsx("div",{className:Ag}),g.jsxs("div",{className:"flex items-center justify-between mb-4 relative",children:[g.jsx("h2",{className:"text-[16px] font-medium text-fg",children:"연락 채널"}),g.jsx("span",{className:Gc,children:"가장 빠른 답변: Email"})]}),g.jsxs("div",{className:"grid gap-3 relative",children:[g.jsx(La,{label:"Email",value:"lanos5019@ajou.ac.kr",href:"mailto:you@example.com",icon:g.jsx(ME,{})}),g.jsx(La,{label:"Phone",value:"010-3465-9425",href:"tel:010-3465-9425",icon:g.jsx(NE,{})}),g.jsx(La,{label:"GitHub",value:"@km-kwon",href:"https://github.com/km-kwon",external:!0,icon:g.jsx(_E,{})}),g.jsx(La,{label:"NPM",value:"@kwon-kyoungmin",href:"https://www.npmjs.com/~kwon-kyoungmin",external:!0,icon:g.jsx(RE,{})}),g.jsx(La,{label:"Apply",value:"Resume (PDF)",href:"/portfolio/resume.pdf",external:!0,icon:g.jsx(DE,{})})]})]}),g.jsxs("div",{className:Eg,children:[g.jsx("div",{className:Ag}),g.jsx("h2",{className:"text-[16px] font-medium text-fg mb-4 relative",children:"응답 안내"}),g.jsxs("div",{className:"grid md:grid-cols-2 gap-4 relative",children:[g.jsx(jg,{icon:g.jsx(TE,{}),title:"평균 응답 시간",value:"24시간 이내",sub:"최대한 빠르게 회신 드리겠습니다."}),g.jsx(jg,{icon:g.jsx(EE,{}),title:"위치",value:"대한민국, 성남",sub:"원격 협업도 가능합니다."})]})]})]})]})]})),La=({label:t,value:a,href:l,external:u,icon:s,download:c})=>g.jsxs("a",{href:l,target:u?"_blank":void 0,rel:u?"noreferrer":void 0,download:c,className:`group relative flex items-center gap-3 rounded-2xl px-4 py-3\r
               border border-(--border-subtle) bg-(--bg-soft)\r
               [html[data-theme='light']_&]:bg-[#f5f5fb]\r
               hover:border-(--accent)/35 hover:bg-(--bg-elevated)\r
               transition-all duration-150 ease-out`,children:[g.jsx("div",{className:`w-9 h-9 rounded-full bg-(--bg-elevated) border border-(--border-subtle)\r
                    flex items-center justify-center shrink-0\r
                    group-hover:border-(--accent)/35 transition-colors`,children:s}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-[11px] text-fg-muted uppercase tracking-wider",children:t}),u&&g.jsx("span",{className:Gc,children:"External"})]}),g.jsx("div",{className:"text-[14px] font-medium truncate group-hover:text-fg transition-colors",children:a})]}),c?g.jsx(jE,{className:`w-4 h-4 text-fg-muted group-hover:text-fg transition-colors shrink-0\r
                   group-hover:translate-y-0.5 transition-transform`}):g.jsx(AE,{className:`w-4 h-4 text-fg-muted group-hover:text-fg transition-colors shrink-0\r
                   group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`})]}),jg=({icon:t,title:a,value:l,sub:u})=>g.jsxs("div",{className:`flex items-start gap-3 rounded-2xl p-4 border border-(--border-subtle) bg-(--bg-soft)\r
                  [html[data-theme='light']_&]:bg-[#f5f5fb]`,children:[g.jsx("div",{className:`w-10 h-10 rounded-full bg-(--bg-elevated) border border-(--border-subtle)\r
                    flex items-center justify-center shrink-0`,children:t}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("p",{className:"text-[12px] font-medium text-fg",children:a}),g.jsx("p",{className:"text-[14px] font-semibold text-fg mt-1",children:l}),g.jsx("p",{className:"text-[12px] text-fg-muted mt-1 leading-relaxed",children:u})]})]}),TE=()=>g.jsx("svg",{className:"w-4 h-4 text-fg-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),EE=()=>g.jsxs("svg",{className:"w-4 h-4 text-fg-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),AE=({className:t})=>g.jsxs("svg",{className:t??"",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7 17L17 7"}),g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 7h7v7"})]}),jE=({className:t})=>g.jsxs("svg",{className:t??"",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 4v12m0 0l-4-4m4 4l4-4"}),g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})]}),NE=()=>g.jsx("svg",{className:"w-4 h-4 text-fg-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),ME=()=>g.jsxs("svg",{className:"w-4 h-4 text-fg-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 8l9 6 9-6"}),g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"})]}),_E=()=>g.jsx("svg",{className:"w-4 h-4 text-fg-muted",viewBox:"0 0 24 24",fill:"currentColor",children:g.jsx("path",{d:"M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.6-1.6-1.5-2-1.5-2-1.2-.9.1-.9.1-.9 1.3.1 2 .9 2 .9 1.2 2.1 3.1 1.5 3.9 1.1.1-.9.5-1.5.8-1.9-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.7-2.8 5.8-5.5 6.1.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z"})}),DE=()=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-newspaper-icon lucide-newspaper",children:[g.jsx("path",{d:"M15 18h-5"}),g.jsx("path",{d:"M18 14h-8"}),g.jsx("path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"}),g.jsx("rect",{width:"8",height:"4",x:"10",y:"6",rx:"1"})]}),RE=({className:t})=>g.jsxs("svg",{className:t??"w-4 h-4",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[g.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"6",stroke:"currentColor",strokeWidth:"1.6"}),g.jsx("path",{d:"M8 16V8l8 8V8",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),OE=()=>{const[t,a]=D.useState(()=>{if(typeof window>"u")return"dark";try{return localStorage.getItem("portfolio-theme")||"dark"}catch{return"dark"}});D.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("portfolio-theme",t)}catch{}}},[t]);const l=D.useCallback(()=>{a(c=>c==="dark"?"light":"dark")},[]),u=D.useCallback(c=>{const f=document.getElementById(c);if(f){const b=f.getBoundingClientRect().top+window.pageYOffset-64-20;window.scrollTo({top:b,behavior:"smooth"})}},[]),s="/portfolio/".replace(/\/$/,"");return g.jsxs(Uy,{basename:s===""?void 0:s,children:[g.jsx(Xy,{theme:t,onToggleTheme:l,onNavClick:u}),g.jsxs(my,{children:[g.jsx(Ua,{path:"/",element:g.jsx(FS,{})}),g.jsx(Ua,{path:"/blog",element:g.jsx(YS,{})}),g.jsx(Ua,{path:"/blog/:slug",element:g.jsx(vE,{})}),g.jsx(Ua,{path:"/contact",element:g.jsx(CE,{})})]}),g.jsx(Wy,{})]})};S1.createRoot(document.getElementById("root")).render(g.jsx(OE,{}));
