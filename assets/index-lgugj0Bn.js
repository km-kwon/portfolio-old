(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function Fc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tc={exports:{}},Aa={};var fp;function uy(){if(fp)return Aa;fp=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(u,s,c){var f=null;if(c!==void 0&&(f=""+c),s.key!==void 0&&(f=""+s.key),"key"in s){c={};for(var m in s)m!=="key"&&(c[m]=s[m])}else c=s;return s=c.ref,{$$typeof:t,type:u,key:f,ref:s!==void 0?s:null,props:c}}return Aa.Fragment=a,Aa.jsx=i,Aa.jsxs=i,Aa}var dp;function sy(){return dp||(dp=1,tc.exports=uy()),tc.exports}var x=sy(),lc={exports:{}},ja={},ic={exports:{}},ac={};var hp;function oy(){return hp||(hp=1,(function(t){function a(B,Z){var re=B.length;B.push(Z);e:for(;0<re;){var be=re-1>>>1,T=B[be];if(0<s(T,Z))B[be]=Z,B[re]=T,re=be;else break e}}function i(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var Z=B[0],re=B.pop();if(re!==Z){B[0]=re;e:for(var be=0,T=B.length,M=T>>>1;be<M;){var G=2*(be+1)-1,w=B[G],ie=G+1,pe=B[ie];if(0>s(w,re))ie<T&&0>s(pe,w)?(B[be]=pe,B[ie]=re,be=ie):(B[be]=w,B[G]=re,be=G);else if(ie<T&&0>s(pe,re))B[be]=pe,B[ie]=re,be=ie;else break e}}return Z}function s(B,Z){var re=B.sortIndex-Z.sortIndex;return re!==0?re:B.id-Z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();t.unstable_now=function(){return f.now()-m}}var p=[],h=[],b=1,g=null,S=3,v=!1,C=!1,O=!1,z=!1,j=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function K(B){for(var Z=i(h);Z!==null;){if(Z.callback===null)u(h);else if(Z.startTime<=B)u(h),Z.sortIndex=Z.expirationTime,a(p,Z);else break;Z=i(h)}}function le(B){if(O=!1,K(B),!C)if(i(p)!==null)C=!0,V||(V=!0,Q());else{var Z=i(h);Z!==null&&ne(le,Z.startTime-B)}}var V=!1,ee=-1,oe=5,W=-1;function A(){return z?!0:!(t.unstable_now()-W<oe)}function P(){if(z=!1,V){var B=t.unstable_now();W=B;var Z=!0;try{e:{C=!1,O&&(O=!1,H(ee),ee=-1),v=!0;var re=S;try{n:{for(K(B),g=i(p);g!==null&&!(g.expirationTime>B&&A());){var be=g.callback;if(typeof be=="function"){g.callback=null,S=g.priorityLevel;var T=be(g.expirationTime<=B);if(B=t.unstable_now(),typeof T=="function"){g.callback=T,K(B),Z=!0;break n}g===i(p)&&u(p),K(B)}else u(p);g=i(p)}if(g!==null)Z=!0;else{var M=i(h);M!==null&&ne(le,M.startTime-B),Z=!1}}break e}finally{g=null,S=re,v=!1}Z=void 0}}finally{Z?Q():V=!1}}}var Q;if(typeof D=="function")Q=function(){D(P)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ae=de.port2;de.port1.onmessage=P,Q=function(){ae.postMessage(null)}}else Q=function(){j(P,0)};function ne(B,Z){ee=j(function(){B(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_next=function(B){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var re=S;S=Z;try{return B()}finally{S=re}},t.unstable_requestPaint=function(){z=!0},t.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=S;S=B;try{return Z()}finally{S=re}},t.unstable_scheduleCallback=function(B,Z,re){var be=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?be+re:be):re=be,B){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=re+T,B={id:b++,callback:Z,priorityLevel:B,startTime:re,expirationTime:T,sortIndex:-1},re>be?(B.sortIndex=re,a(h,B),i(p)===null&&B===i(h)&&(O?(H(ee),ee=-1):O=!0,ne(le,re-be))):(B.sortIndex=T,a(p,B),C||v||(C=!0,V||(V=!0,Q()))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var Z=S;return function(){var re=S;S=Z;try{return B.apply(this,arguments)}finally{S=re}}}})(ac)),ac}var mp;function cy(){return mp||(mp=1,ic.exports=oy()),ic.exports}var rc={exports:{}},xe={};var pp;function fy(){if(pp)return xe;pp=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function v(M){return M===null||typeof M!="object"?null:(M=S&&M[S]||M["@@iterator"],typeof M=="function"?M:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,z={};function j(M,G,w){this.props=M,this.context=G,this.refs=z,this.updater=w||C}j.prototype.isReactComponent={},j.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},j.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function H(){}H.prototype=j.prototype;function D(M,G,w){this.props=M,this.context=G,this.refs=z,this.updater=w||C}var K=D.prototype=new H;K.constructor=D,O(K,j.prototype),K.isPureReactComponent=!0;var le=Array.isArray;function V(){}var ee={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function W(M,G,w){var ie=w.ref;return{$$typeof:t,type:M,key:G,ref:ie!==void 0?ie:null,props:w}}function A(M,G){return W(M.type,G,M.props)}function P(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function Q(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(w){return G[w]})}var de=/\/+/g;function ae(M,G){return typeof M=="object"&&M!==null&&M.key!=null?Q(""+M.key):G.toString(36)}function ne(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(V,V):(M.status="pending",M.then(function(G){M.status==="pending"&&(M.status="fulfilled",M.value=G)},function(G){M.status==="pending"&&(M.status="rejected",M.reason=G)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function B(M,G,w,ie,pe){var ce=typeof M;(ce==="undefined"||ce==="boolean")&&(M=null);var Ee=!1;if(M===null)Ee=!0;else switch(ce){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(M.$$typeof){case t:case a:Ee=!0;break;case b:return Ee=M._init,B(Ee(M._payload),G,w,ie,pe)}}if(Ee)return pe=pe(M),Ee=ie===""?"."+ae(M,0):ie,le(pe)?(w="",Ee!=null&&(w=Ee.replace(de,"$&/")+"/"),B(pe,G,w,"",function(In){return In})):pe!=null&&(P(pe)&&(pe=A(pe,w+(pe.key==null||M&&M.key===pe.key?"":(""+pe.key).replace(de,"$&/")+"/")+Ee)),G.push(pe)),1;Ee=0;var Je=ie===""?".":ie+":";if(le(M))for(var Ue=0;Ue<M.length;Ue++)ie=M[Ue],ce=Je+ae(ie,Ue),Ee+=B(ie,G,w,ce,pe);else if(Ue=v(M),typeof Ue=="function")for(M=Ue.call(M),Ue=0;!(ie=M.next()).done;)ie=ie.value,ce=Je+ae(ie,Ue++),Ee+=B(ie,G,w,ce,pe);else if(ce==="object"){if(typeof M.then=="function")return B(ne(M),G,w,ie,pe);throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function Z(M,G,w){if(M==null)return M;var ie=[],pe=0;return B(M,ie,"","",function(ce){return G.call(w,ce,pe++)}),ie}function re(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(w){(M._status===0||M._status===-1)&&(M._status=1,M._result=w)},function(w){(M._status===0||M._status===-1)&&(M._status=2,M._result=w)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var be=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},T={map:Z,forEach:function(M,G,w){Z(M,function(){G.apply(this,arguments)},w)},count:function(M){var G=0;return Z(M,function(){G++}),G},toArray:function(M){return Z(M,function(G){return G})||[]},only:function(M){if(!P(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return xe.Activity=g,xe.Children=T,xe.Component=j,xe.Fragment=i,xe.Profiler=s,xe.PureComponent=D,xe.StrictMode=u,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,xe.__COMPILER_RUNTIME={__proto__:null,c:function(M){return ee.H.useMemoCache(M)}},xe.cache=function(M){return function(){return M.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(M,G,w){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var ie=O({},M.props),pe=M.key;if(G!=null)for(ce in G.key!==void 0&&(pe=""+G.key),G)!oe.call(G,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&G.ref===void 0||(ie[ce]=G[ce]);var ce=arguments.length-2;if(ce===1)ie.children=w;else if(1<ce){for(var Ee=Array(ce),Je=0;Je<ce;Je++)Ee[Je]=arguments[Je+2];ie.children=Ee}return W(M.type,pe,ie)},xe.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},xe.createElement=function(M,G,w){var ie,pe={},ce=null;if(G!=null)for(ie in G.key!==void 0&&(ce=""+G.key),G)oe.call(G,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(pe[ie]=G[ie]);var Ee=arguments.length-2;if(Ee===1)pe.children=w;else if(1<Ee){for(var Je=Array(Ee),Ue=0;Ue<Ee;Ue++)Je[Ue]=arguments[Ue+2];pe.children=Je}if(M&&M.defaultProps)for(ie in Ee=M.defaultProps,Ee)pe[ie]===void 0&&(pe[ie]=Ee[ie]);return W(M,ce,pe)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(M){return{$$typeof:m,render:M}},xe.isValidElement=P,xe.lazy=function(M){return{$$typeof:b,_payload:{_status:-1,_result:M},_init:re}},xe.memo=function(M,G){return{$$typeof:h,type:M,compare:G===void 0?null:G}},xe.startTransition=function(M){var G=ee.T,w={};ee.T=w;try{var ie=M(),pe=ee.S;pe!==null&&pe(w,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(V,be)}catch(ce){be(ce)}finally{G!==null&&w.types!==null&&(G.types=w.types),ee.T=G}},xe.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},xe.use=function(M){return ee.H.use(M)},xe.useActionState=function(M,G,w){return ee.H.useActionState(M,G,w)},xe.useCallback=function(M,G){return ee.H.useCallback(M,G)},xe.useContext=function(M){return ee.H.useContext(M)},xe.useDebugValue=function(){},xe.useDeferredValue=function(M,G){return ee.H.useDeferredValue(M,G)},xe.useEffect=function(M,G){return ee.H.useEffect(M,G)},xe.useEffectEvent=function(M){return ee.H.useEffectEvent(M)},xe.useId=function(){return ee.H.useId()},xe.useImperativeHandle=function(M,G,w){return ee.H.useImperativeHandle(M,G,w)},xe.useInsertionEffect=function(M,G){return ee.H.useInsertionEffect(M,G)},xe.useLayoutEffect=function(M,G){return ee.H.useLayoutEffect(M,G)},xe.useMemo=function(M,G){return ee.H.useMemo(M,G)},xe.useOptimistic=function(M,G){return ee.H.useOptimistic(M,G)},xe.useReducer=function(M,G,w){return ee.H.useReducer(M,G,w)},xe.useRef=function(M){return ee.H.useRef(M)},xe.useState=function(M){return ee.H.useState(M)},xe.useSyncExternalStore=function(M,G,w){return ee.H.useSyncExternalStore(M,G,w)},xe.useTransition=function(){return ee.H.useTransition()},xe.version="19.2.0",xe}var gp;function Gc(){return gp||(gp=1,rc.exports=fy()),rc.exports}var uc={exports:{}},pn={};var xp;function dy(){if(xp)return pn;xp=1;var t=Gc();function a(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var u={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(p,h,b){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:h,implementation:b}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,pn.createPortal=function(p,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(a(299));return c(p,h,null,b)},pn.flushSync=function(p){var h=f.T,b=u.p;try{if(f.T=null,u.p=2,p)return p()}finally{f.T=h,u.p=b,u.d.f()}},pn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(p,h))},pn.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},pn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var b=h.as,g=m(b,h.crossOrigin),S=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?u.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:v}):b==="script"&&u.d.X(p,{crossOrigin:g,integrity:S,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},pn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=m(h.as,h.crossOrigin);u.d.M(p,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(p)},pn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,g=m(b,h.crossOrigin);u.d.L(p,b,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},pn.preloadModule=function(p,h){if(typeof p=="string")if(h){var b=m(h.as,h.crossOrigin);u.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(p)},pn.requestFormReset=function(p){u.d.r(p)},pn.unstable_batchedUpdates=function(p,h){return p(h)},pn.useFormState=function(p,h,b){return f.H.useFormState(p,h,b)},pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},pn.version="19.2.0",pn}var bp;function hy(){if(bp)return uc.exports;bp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),uc.exports=dy(),uc.exports}var yp;function my(){if(yp)return ja;yp=1;var t=cy(),a=Gc(),i=hy();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)n+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,l=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(l=n.return),e=n.return;while(e)}return n.tag===3?l:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(u(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(u(188));return n!==e?null:e}for(var l=e,r=n;;){var o=l.return;if(o===null)break;var d=o.alternate;if(d===null){if(r=o.return,r!==null){l=r;continue}break}if(o.child===d.child){for(d=o.child;d;){if(d===l)return p(o),e;if(d===r)return p(o),n;d=d.sibling}throw Error(u(188))}if(l.return!==r.return)l=o,r=d;else{for(var y=!1,k=o.child;k;){if(k===l){y=!0,l=o,r=d;break}if(k===r){y=!0,r=o,l=d;break}k=k.sibling}if(!y){for(k=d.child;k;){if(k===l){y=!0,l=d,r=o;break}if(k===r){y=!0,r=d,l=o;break}k=k.sibling}if(!y)throw Error(u(189))}}if(l.alternate!==r)throw Error(u(190))}if(l.tag!==3)throw Error(u(188));return l.stateNode.current===l?e:n}function b(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=b(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),D=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case j:return"Profiler";case z:return"StrictMode";case le:return"Suspense";case V:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case D:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case K:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case oe:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}var ne=Array.isArray,B=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},be=[],T=-1;function M(e){return{current:e}}function G(e){0>T||(e.current=be[T],be[T]=null,T--)}function w(e,n){T++,be[T]=e.current,e.current=n}var ie=M(null),pe=M(null),ce=M(null),Ee=M(null);function Je(e,n){switch(w(ce,n),w(pe,e),w(ie,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Om(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Om(n),e=zm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(ie),w(ie,e)}function Ue(){G(ie),G(pe),G(ce)}function In(e){e.memoizedState!==null&&w(Ee,e);var n=ie.current,l=zm(n,e.type);n!==l&&(w(pe,e),w(ie,l))}function xt(e){pe.current===e&&(G(ie),G(pe)),Ee.current===e&&(G(Ee),wa._currentValue=re)}var Oi,Ka;function bt(e){if(Oi===void 0)try{throw Error()}catch(l){var n=l.stack.trim().match(/\n( *(at )?)/);Oi=n&&n[1]||"",Ka=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Oi+e+Ka}var Ul=!1;function Bl(e,n){if(!e||Ul)return"";Ul=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(I){var q=I}Reflect.construct(e,[],X)}else{try{X.call()}catch(I){q=I}e.call(X.prototype)}}else{try{throw Error()}catch(I){q=I}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(I){if(I&&q&&typeof I.stack=="string")return[I.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=r.DetermineComponentFrameRoot(),y=d[0],k=d[1];if(y&&k){var E=y.split(`
`),U=k.split(`
`);for(o=r=0;r<E.length&&!E[r].includes("DetermineComponentFrameRoot");)r++;for(;o<U.length&&!U[o].includes("DetermineComponentFrameRoot");)o++;if(r===E.length||o===U.length)for(r=E.length-1,o=U.length-1;1<=r&&0<=o&&E[r]!==U[o];)o--;for(;1<=r&&0<=o;r--,o--)if(E[r]!==U[o]){if(r!==1||o!==1)do if(r--,o--,0>o||E[r]!==U[o]){var F=`
`+E[r].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=r&&0<=o);break}}}finally{Ul=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?bt(l):""}function Wa(e,n){switch(e.tag){case 26:case 27:case 5:return bt(e.type);case 16:return bt("Lazy");case 13:return e.child!==n&&n!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return Bl(e.type,!1);case 11:return Bl(e.type.render,!1);case 1:return Bl(e.type,!0);case 31:return bt("Activity");default:return""}}function $a(e){try{var n="",l=null;do n+=Wa(e,l),l=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Hl=Object.prototype.hasOwnProperty,ql=t.unstable_scheduleCallback,zi=t.unstable_cancelCallback,qu=t.unstable_shouldYield,Vu=t.unstable_requestPaint,bn=t.unstable_now,Iu=t.unstable_getCurrentPriorityLevel,Y=t.unstable_ImmediatePriority,te=t.unstable_UserBlockingPriority,ge=t.unstable_NormalPriority,ke=t.unstable_LowPriority,Oe=t.unstable_IdlePriority,_n=t.log,yt=t.unstable_setDisableYieldValue,yn=null,rn=null;function kn(e){if(typeof _n=="function"&&yt(e),rn&&typeof rn.setStrictMode=="function")try{rn.setStrictMode(yn,e)}catch{}}var Ve=Math.clz32?Math.clz32:Jx,Vt=Math.log,lt=Math.LN2;function Jx(e){return e>>>=0,e===0?32:31-(Vt(e)/lt|0)|0}var er=256,nr=262144,tr=4194304;function pl(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function lr(e,n,l){var r=e.pendingLanes;if(r===0)return 0;var o=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var k=r&134217727;return k!==0?(r=k&~d,r!==0?o=pl(r):(y&=k,y!==0?o=pl(y):l||(l=k&~e,l!==0&&(o=pl(l))))):(k=r&~d,k!==0?o=pl(k):y!==0?o=pl(y):l||(l=r&~e,l!==0&&(o=pl(l)))),o===0?0:n!==0&&n!==o&&(n&d)===0&&(d=o&-o,l=n&-n,d>=l||d===32&&(l&4194048)!==0)?n:o}function Li(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xx(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pf(){var e=tr;return tr<<=1,(tr&62914560)===0&&(tr=4194304),e}function Fu(e){for(var n=[],l=0;31>l;l++)n.push(e);return n}function Ui(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qx(e,n,l,r,o,d){var y=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var k=e.entanglements,E=e.expirationTimes,U=e.hiddenUpdates;for(l=y&~l;0<l;){var F=31-Ve(l),X=1<<F;k[F]=0,E[F]=-1;var q=U[F];if(q!==null)for(U[F]=null,F=0;F<q.length;F++){var I=q[F];I!==null&&(I.lane&=-536870913)}l&=~X}r!==0&&gf(e,r,0),d!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~n))}function gf(e,n,l){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ve(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|l&261930}function xf(e,n){var l=e.entangledLanes|=n;for(e=e.entanglements;l;){var r=31-Ve(l),o=1<<r;o&n|e[r]&n&&(e[r]|=n),l&=~o}}function bf(e,n){var l=n&-n;return l=(l&42)!==0?1:Gu(l),(l&(e.suspendedLanes|n))!==0?0:l}function Gu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:ip(e.type))}function vf(e,n){var l=Z.p;try{return Z.p=e,n()}finally{Z.p=l}}var It=Math.random().toString(36).slice(2),cn="__reactFiber$"+It,wn="__reactProps$"+It,Vl="__reactContainer$"+It,Pu="__reactEvents$"+It,Zx="__reactListeners$"+It,Kx="__reactHandles$"+It,Sf="__reactResources$"+It,Bi="__reactMarker$"+It;function Ju(e){delete e[cn],delete e[wn],delete e[Pu],delete e[Zx],delete e[Kx]}function Il(e){var n=e[cn];if(n)return n;for(var l=e.parentNode;l;){if(n=l[Vl]||l[cn]){if(l=n.alternate,n.child!==null||l!==null&&l.child!==null)for(e=Im(e);e!==null;){if(l=e[cn])return l;e=Im(e)}return n}e=l,l=e.parentNode}return null}function Fl(e){if(e=e[cn]||e[Vl]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Hi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function Gl(e){var n=e[Sf];return n||(n=e[Sf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[Bi]=!0}var kf=new Set,wf={};function gl(e,n){Yl(e,n),Yl(e+"Capture",n)}function Yl(e,n){for(wf[e]=n,e=0;e<n.length;e++)kf.add(n[e])}var Wx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cf={},Tf={};function $x(e){return Hl.call(Tf,e)?!0:Hl.call(Cf,e)?!1:Wx.test(e)?Tf[e]=!0:(Cf[e]=!0,!1)}function ir(e,n,l){if($x(n))if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+l)}}function ar(e,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+l)}}function vt(e,n,l,r){if(r===null)e.removeAttribute(l);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(n,l,""+r)}}function Fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ef(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function eb(e,n,l){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,d=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(y){l=""+y,d.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xu(e){if(!e._valueTracker){var n=Ef(e)?"checked":"value";e._valueTracker=eb(e,n,""+e[n])}}function Af(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var l=n.getValue(),r="";return e&&(r=Ef(e)?e.checked?"true":"false":e.value),e=r,e!==l?(n.setValue(e),!0):!1}function rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nb=/[\n"\\]/g;function Gn(e){return e.replace(nb,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Qu(e,n,l,r,o,d,y,k){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Fn(n)):e.value!==""+Fn(n)&&(e.value=""+Fn(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Zu(e,y,Fn(n)):l!=null?Zu(e,y,Fn(l)):r!=null&&e.removeAttribute("value"),o==null&&d!=null&&(e.defaultChecked=!!d),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?e.name=""+Fn(k):e.removeAttribute("name")}function jf(e,n,l,r,o,d,y,k){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||l!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Xu(e);return}l=l!=null?""+Fn(l):"",n=n!=null?""+Fn(n):l,k||n===e.value||(e.value=n),e.defaultValue=n}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=k?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Xu(e)}function Zu(e,n,l){n==="number"&&rr(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Pl(e,n,l,r){if(e=e.options,n){n={};for(var o=0;o<l.length;o++)n["$"+l[o]]=!0;for(l=0;l<e.length;l++)o=n.hasOwnProperty("$"+e[l].value),e[l].selected!==o&&(e[l].selected=o),o&&r&&(e[l].defaultSelected=!0)}else{for(l=""+Fn(l),n=null,o=0;o<e.length;o++){if(e[o].value===l){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Mf(e,n,l){if(n!=null&&(n=""+Fn(n),n!==e.value&&(e.value=n),l==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=l!=null?""+Fn(l):""}function Nf(e,n,l,r){if(n==null){if(r!=null){if(l!=null)throw Error(u(92));if(ne(r)){if(1<r.length)throw Error(u(93));r=r[0]}l=r}l==null&&(l=""),n=l}l=Fn(n),e.defaultValue=l,r=e.textContent,r===l&&r!==""&&r!==null&&(e.value=r),Xu(e)}function Jl(e,n){if(n){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=n;return}}e.textContent=n}var tb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Df(e,n,l){var r=n.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,l):typeof l!="number"||l===0||tb.has(n)?n==="float"?e.cssFloat=l:e[n]=(""+l).trim():e[n]=l+"px"}function _f(e,n,l){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,l!=null){for(var r in l)!l.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var o in n)r=n[o],n.hasOwnProperty(o)&&l[o]!==r&&Df(e,o,r)}else for(var d in n)n.hasOwnProperty(d)&&Df(e,d,n[d])}function Ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ib=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ur(e){return ib.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function St(){}var Wu=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xl=null,Ql=null;function Rf(e){var n=Fl(e);if(n&&(e=n.stateNode)){var l=e[wn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Qu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),n=l.name,l.type==="radio"&&n!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Gn(""+n)+'"][type="radio"]'),n=0;n<l.length;n++){var r=l[n];if(r!==e&&r.form===e.form){var o=r[wn]||null;if(!o)throw Error(u(90));Qu(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<l.length;n++)r=l[n],r.form===e.form&&Af(r)}break e;case"textarea":Mf(e,l.value,l.defaultValue);break e;case"select":n=l.value,n!=null&&Pl(e,!!l.multiple,n,!1)}}}var es=!1;function Of(e,n,l){if(es)return e(n,l);es=!0;try{var r=e(n);return r}finally{if(es=!1,(Xl!==null||Ql!==null)&&(Xr(),Xl&&(n=Xl,e=Ql,Ql=Xl=null,Rf(n),e)))for(n=0;n<e.length;n++)Rf(e[n])}}function qi(e,n){var l=e.stateNode;if(l===null)return null;var r=l[wn]||null;if(r===null)return null;l=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(u(231,n,typeof l));return l}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=!1;if(kt)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{ns=!1}var Ft=null,ts=null,sr=null;function zf(){if(sr)return sr;var e,n=ts,l=n.length,r,o="value"in Ft?Ft.value:Ft.textContent,d=o.length;for(e=0;e<l&&n[e]===o[e];e++);var y=l-e;for(r=1;r<=y&&n[l-r]===o[d-r];r++);return sr=o.slice(e,1<r?1-r:void 0)}function or(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Lf(){return!1}function Cn(e){function n(l,r,o,d,y){this._reactName=l,this._targetInst=o,this.type=r,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(l=e[k],this[k]=l?l(d):d[k]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?cr:Lf,this.isPropagationStopped=Lf,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),n}var xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fr=Cn(xl),Ii=g({},xl,{view:0,detail:0}),ab=Cn(Ii),ls,is,Fi,dr=g({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fi&&(Fi&&e.type==="mousemove"?(ls=e.screenX-Fi.screenX,is=e.screenY-Fi.screenY):is=ls=0,Fi=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:is}}),Uf=Cn(dr),rb=g({},dr,{dataTransfer:0}),ub=Cn(rb),sb=g({},Ii,{relatedTarget:0}),as=Cn(sb),ob=g({},xl,{animationName:0,elapsedTime:0,pseudoElement:0}),cb=Cn(ob),fb=g({},xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),db=Cn(fb),hb=g({},xl,{data:0}),Bf=Cn(hb),mb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gb[e])?!!n[e]:!1}function rs(){return xb}var bb=g({},Ii,{key:function(e){if(e.key){var n=mb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yb=Cn(bb),vb=g({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=Cn(vb),Sb=g({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),kb=Cn(Sb),wb=g({},xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cb=Cn(wb),Tb=g({},dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eb=Cn(Tb),Ab=g({},xl,{newState:0,oldState:0}),jb=Cn(Ab),Mb=[9,13,27,32],us=kt&&"CompositionEvent"in window,Gi=null;kt&&"documentMode"in document&&(Gi=document.documentMode);var Nb=kt&&"TextEvent"in window&&!Gi,qf=kt&&(!us||Gi&&8<Gi&&11>=Gi),Vf=" ",If=!1;function Ff(e,n){switch(e){case"keyup":return Mb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zl=!1;function Db(e,n){switch(e){case"compositionend":return Gf(n);case"keypress":return n.which!==32?null:(If=!0,Vf);case"textInput":return e=n.data,e===Vf&&If?null:e;default:return null}}function _b(e,n){if(Zl)return e==="compositionend"||!us&&Ff(e,n)?(e=zf(),sr=ts=Ft=null,Zl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qf&&n.locale!=="ko"?null:n.data;default:return null}}var Rb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rb[e.type]:n==="textarea"}function Pf(e,n,l,r){Xl?Ql?Ql.push(r):Ql=[r]:Xl=r,n=nu(n,"onChange"),0<n.length&&(l=new fr("onChange","change",null,l,r),e.push({event:l,listeners:n}))}var Yi=null,Pi=null;function Ob(e){jm(e,0)}function hr(e){var n=Hi(e);if(Af(n))return e}function Jf(e,n){if(e==="change")return n}var Xf=!1;if(kt){var ss;if(kt){var os="oninput"in document;if(!os){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),os=typeof Qf.oninput=="function"}ss=os}else ss=!1;Xf=ss&&(!document.documentMode||9<document.documentMode)}function Zf(){Yi&&(Yi.detachEvent("onpropertychange",Kf),Pi=Yi=null)}function Kf(e){if(e.propertyName==="value"&&hr(Pi)){var n=[];Pf(n,Pi,e,$u(e)),Of(Ob,n)}}function zb(e,n,l){e==="focusin"?(Zf(),Yi=n,Pi=l,Yi.attachEvent("onpropertychange",Kf)):e==="focusout"&&Zf()}function Lb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hr(Pi)}function Ub(e,n){if(e==="click")return hr(n)}function Bb(e,n){if(e==="input"||e==="change")return hr(n)}function Hb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Rn=typeof Object.is=="function"?Object.is:Hb;function Ji(e,n){if(Rn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var l=Object.keys(e),r=Object.keys(n);if(l.length!==r.length)return!1;for(r=0;r<l.length;r++){var o=l[r];if(!Hl.call(n,o)||!Rn(e[o],n[o]))return!1}return!0}function Wf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $f(e,n){var l=Wf(e);e=0;for(var r;l;){if(l.nodeType===3){if(r=e+l.textContent.length,e<=n&&r>=n)return{node:l,offset:n-e};e=r}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Wf(l)}}function ed(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ed(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=rr(e.document);n instanceof e.HTMLIFrameElement;){try{var l=typeof n.contentWindow.location.href=="string"}catch{l=!1}if(l)e=n.contentWindow;else break;n=rr(e.document)}return n}function cs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var qb=kt&&"documentMode"in document&&11>=document.documentMode,Kl=null,fs=null,Xi=null,ds=!1;function td(e,n,l){var r=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ds||Kl==null||Kl!==rr(r)||(r=Kl,"selectionStart"in r&&cs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&Ji(Xi,r)||(Xi=r,r=nu(fs,"onSelect"),0<r.length&&(n=new fr("onSelect","select",null,n,l),e.push({event:n,listeners:r}),n.target=Kl)))}function bl(e,n){var l={};return l[e.toLowerCase()]=n.toLowerCase(),l["Webkit"+e]="webkit"+n,l["Moz"+e]="moz"+n,l}var Wl={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionrun:bl("Transition","TransitionRun"),transitionstart:bl("Transition","TransitionStart"),transitioncancel:bl("Transition","TransitionCancel"),transitionend:bl("Transition","TransitionEnd")},hs={},ld={};kt&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete Wl.animationend.animation,delete Wl.animationiteration.animation,delete Wl.animationstart.animation),"TransitionEvent"in window||delete Wl.transitionend.transition);function yl(e){if(hs[e])return hs[e];if(!Wl[e])return e;var n=Wl[e],l;for(l in n)if(n.hasOwnProperty(l)&&l in ld)return hs[e]=n[l];return e}var id=yl("animationend"),ad=yl("animationiteration"),rd=yl("animationstart"),Vb=yl("transitionrun"),Ib=yl("transitionstart"),Fb=yl("transitioncancel"),ud=yl("transitionend"),sd=new Map,ms="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ms.push("scrollEnd");function it(e,n){sd.set(e,n),gl(n,[e])}var mr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yn=[],$l=0,ps=0;function pr(){for(var e=$l,n=ps=$l=0;n<e;){var l=Yn[n];Yn[n++]=null;var r=Yn[n];Yn[n++]=null;var o=Yn[n];Yn[n++]=null;var d=Yn[n];if(Yn[n++]=null,r!==null&&o!==null){var y=r.pending;y===null?o.next=o:(o.next=y.next,y.next=o),r.pending=o}d!==0&&od(l,o,d)}}function gr(e,n,l,r){Yn[$l++]=e,Yn[$l++]=n,Yn[$l++]=l,Yn[$l++]=r,ps|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function gs(e,n,l,r){return gr(e,n,l,r),xr(e)}function vl(e,n){return gr(e,null,null,n),xr(e)}function od(e,n,l){e.lanes|=l;var r=e.alternate;r!==null&&(r.lanes|=l);for(var o=!1,d=e.return;d!==null;)d.childLanes|=l,r=d.alternate,r!==null&&(r.childLanes|=l),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(o=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,o&&n!==null&&(o=31-Ve(l),e=d.hiddenUpdates,r=e[o],r===null?e[o]=[n]:r.push(n),n.lane=l|536870912),d):null}function xr(e){if(50<ga)throw ga=0,Eo=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ei={};function Gb(e,n,l,r){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,n,l,r){return new Gb(e,n,l,r)}function xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wt(e,n){var l=e.alternate;return l===null?(l=On(e.tag,n,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=n,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,n=e.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function cd(e,n){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,n=l.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function br(e,n,l,r,o,d){var y=0;if(r=e,typeof e=="function")xs(e)&&(y=1);else if(typeof e=="string")y=Q0(e,l,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=On(31,l,n,o),e.elementType=W,e.lanes=d,e;case O:return Sl(l.children,o,d,n);case z:y=8,o|=24;break;case j:return e=On(12,l,n,o|2),e.elementType=j,e.lanes=d,e;case le:return e=On(13,l,n,o),e.elementType=le,e.lanes=d,e;case V:return e=On(19,l,n,o),e.elementType=V,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:y=10;break e;case H:y=9;break e;case K:y=11;break e;case ee:y=14;break e;case oe:y=16,r=null;break e}y=29,l=Error(u(130,e===null?"null":typeof e,"")),r=null}return n=On(y,l,n,o),n.elementType=e,n.type=r,n.lanes=d,n}function Sl(e,n,l,r){return e=On(7,e,r,n),e.lanes=l,e}function bs(e,n,l){return e=On(6,e,null,n),e.lanes=l,e}function fd(e){var n=On(18,null,null,0);return n.stateNode=e,n}function ys(e,n,l){return n=On(4,e.children!==null?e.children:[],e.key,n),n.lanes=l,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var dd=new WeakMap;function Pn(e,n){if(typeof e=="object"&&e!==null){var l=dd.get(e);return l!==void 0?l:(n={value:e,source:n,stack:$a(n)},dd.set(e,n),n)}return{value:e,source:n,stack:$a(n)}}var ni=[],ti=0,yr=null,Qi=0,Jn=[],Xn=0,Gt=null,ct=1,ft="";function Ct(e,n){ni[ti++]=Qi,ni[ti++]=yr,yr=e,Qi=n}function hd(e,n,l){Jn[Xn++]=ct,Jn[Xn++]=ft,Jn[Xn++]=Gt,Gt=e;var r=ct;e=ft;var o=32-Ve(r)-1;r&=~(1<<o),l+=1;var d=32-Ve(n)+o;if(30<d){var y=o-o%5;d=(r&(1<<y)-1).toString(32),r>>=y,o-=y,ct=1<<32-Ve(n)+o|l<<o|r,ft=d+e}else ct=1<<d|l<<o|r,ft=e}function vs(e){e.return!==null&&(Ct(e,1),hd(e,1,0))}function Ss(e){for(;e===yr;)yr=ni[--ti],ni[ti]=null,Qi=ni[--ti],ni[ti]=null;for(;e===Gt;)Gt=Jn[--Xn],Jn[Xn]=null,ft=Jn[--Xn],Jn[Xn]=null,ct=Jn[--Xn],Jn[Xn]=null}function md(e,n){Jn[Xn++]=ct,Jn[Xn++]=ft,Jn[Xn++]=Gt,ct=n.id,ft=n.overflow,Gt=e}var fn=null,Ye=null,Me=!1,Yt=null,Qn=!1,ks=Error(u(519));function Pt(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zi(Pn(n,e)),ks}function pd(e){var n=e.stateNode,l=e.type,r=e.memoizedProps;switch(n[cn]=e,n[wn]=r,l){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(l=0;l<ba.length;l++)Ce(ba[l],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),jf(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),Nf(n,r.value,r.defaultValue,r.children)}l=r.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||n.textContent===""+l||r.suppressHydrationWarning===!0||_m(n.textContent,l)?(r.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),r.onScroll!=null&&Ce("scroll",n),r.onScrollEnd!=null&&Ce("scrollend",n),r.onClick!=null&&(n.onclick=St),n=!0):n=!1,n||Pt(e,!0)}function gd(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 31:case 13:Qn=!1;return;case 27:case 3:Qn=!0;return;default:fn=fn.return}}function li(e){if(e!==fn)return!1;if(!Me)return gd(e),Me=!0,!1;var n=e.tag,l;if((l=n!==3&&n!==27)&&((l=n===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Vo(e.type,e.memoizedProps)),l=!l),l&&Ye&&Pt(e),gd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Vm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Vm(e)}else n===27?(n=Ye,rl(e.type)?(e=Po,Po=null,Ye=e):Ye=n):Ye=fn?Kn(e.stateNode.nextSibling):null;return!0}function kl(){Ye=fn=null,Me=!1}function ws(){var e=Yt;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Yt=null),e}function Zi(e){Yt===null?Yt=[e]:Yt.push(e)}var Cs=M(null),wl=null,Tt=null;function Jt(e,n,l){w(Cs,n._currentValue),n._currentValue=l}function Et(e){e._currentValue=Cs.current,G(Cs)}function Ts(e,n,l){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===l)break;e=e.return}}function Es(e,n,l,r){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var d=o.dependencies;if(d!==null){var y=o.child;d=d.firstContext;e:for(;d!==null;){var k=d;d=o;for(var E=0;E<n.length;E++)if(k.context===n[E]){d.lanes|=l,k=d.alternate,k!==null&&(k.lanes|=l),Ts(d.return,l,e),r||(y=null);break e}d=k.next}}else if(o.tag===18){if(y=o.return,y===null)throw Error(u(341));y.lanes|=l,d=y.alternate,d!==null&&(d.lanes|=l),Ts(y,l,e),y=null}else y=o.child;if(y!==null)y.return=o;else for(y=o;y!==null;){if(y===e){y=null;break}if(o=y.sibling,o!==null){o.return=y.return,y=o;break}y=y.return}o=y}}function ii(e,n,l,r){e=null;for(var o=n,d=!1;o!==null;){if(!d){if((o.flags&524288)!==0)d=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var y=o.alternate;if(y===null)throw Error(u(387));if(y=y.memoizedProps,y!==null){var k=o.type;Rn(o.pendingProps.value,y.value)||(e!==null?e.push(k):e=[k])}}else if(o===Ee.current){if(y=o.alternate,y===null)throw Error(u(387));y.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(wa):e=[wa])}o=o.return}e!==null&&Es(n,e,l,r),n.flags|=262144}function vr(e){for(e=e.firstContext;e!==null;){if(!Rn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cl(e){wl=e,Tt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dn(e){return xd(wl,e)}function Sr(e,n){return wl===null&&Cl(e),xd(e,n)}function xd(e,n){var l=n._currentValue;if(n={context:n,memoizedValue:l,next:null},Tt===null){if(e===null)throw Error(u(308));Tt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Tt=Tt.next=n;return l}var Yb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(l,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(l){return l()})}},Pb=t.unstable_scheduleCallback,Jb=t.unstable_NormalPriority,en={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function As(){return{controller:new Yb,data:new Map,refCount:0}}function Ki(e){e.refCount--,e.refCount===0&&Pb(Jb,function(){e.controller.abort()})}var Wi=null,js=0,ai=0,ri=null;function Xb(e,n){if(Wi===null){var l=Wi=[];js=0,ai=_o(),ri={status:"pending",value:void 0,then:function(r){l.push(r)}}}return js++,n.then(bd,bd),n}function bd(){if(--js===0&&Wi!==null){ri!==null&&(ri.status="fulfilled");var e=Wi;Wi=null,ai=0,ri=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Qb(e,n){var l=[],r={status:"pending",value:null,reason:null,then:function(o){l.push(o)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var o=0;o<l.length;o++)(0,l[o])(n)},function(o){for(r.status="rejected",r.reason=o,o=0;o<l.length;o++)(0,l[o])(void 0)}),r}var yd=B.S;B.S=function(e,n){tm=bn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xb(e,n),yd!==null&&yd(e,n)};var Tl=M(null);function Ms(){var e=Tl.current;return e!==null?e:Ie.pooledCache}function kr(e,n){n===null?w(Tl,Tl.current):w(Tl,n.pool)}function vd(){var e=Ms();return e===null?null:{parent:en._currentValue,pool:e}}var ui=Error(u(460)),Ns=Error(u(474)),wr=Error(u(542)),Cr={then:function(){}};function Sd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kd(e,n,l){switch(l=e[l],l===void 0?e.push(n):l!==n&&(n.then(St,St),n=l),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cd(e),e;default:if(typeof n.status=="string")n.then(St,St);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=r}},function(r){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cd(e),e}throw Al=n,ui}}function El(e){try{var n=e._init;return n(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Al=l,ui):l}}var Al=null;function wd(){if(Al===null)throw Error(u(459));var e=Al;return Al=null,e}function Cd(e){if(e===ui||e===wr)throw Error(u(483))}var si=null,$i=0;function Tr(e){var n=$i;return $i+=1,si===null&&(si=[]),kd(si,e,n)}function ea(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Er(e,n){throw n.$$typeof===S?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Td(e){function n(R,N){if(e){var L=R.deletions;L===null?(R.deletions=[N],R.flags|=16):L.push(N)}}function l(R,N){if(!e)return null;for(;N!==null;)n(R,N),N=N.sibling;return null}function r(R){for(var N=new Map;R!==null;)R.key!==null?N.set(R.key,R):N.set(R.index,R),R=R.sibling;return N}function o(R,N){return R=wt(R,N),R.index=0,R.sibling=null,R}function d(R,N,L){return R.index=L,e?(L=R.alternate,L!==null?(L=L.index,L<N?(R.flags|=67108866,N):L):(R.flags|=67108866,N)):(R.flags|=1048576,N)}function y(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function k(R,N,L,J){return N===null||N.tag!==6?(N=bs(L,R.mode,J),N.return=R,N):(N=o(N,L),N.return=R,N)}function E(R,N,L,J){var fe=L.type;return fe===O?F(R,N,L.props.children,J,L.key):N!==null&&(N.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===oe&&El(fe)===N.type)?(N=o(N,L.props),ea(N,L),N.return=R,N):(N=br(L.type,L.key,L.props,null,R.mode,J),ea(N,L),N.return=R,N)}function U(R,N,L,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==L.containerInfo||N.stateNode.implementation!==L.implementation?(N=ys(L,R.mode,J),N.return=R,N):(N=o(N,L.children||[]),N.return=R,N)}function F(R,N,L,J,fe){return N===null||N.tag!==7?(N=Sl(L,R.mode,J,fe),N.return=R,N):(N=o(N,L),N.return=R,N)}function X(R,N,L){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=bs(""+N,R.mode,L),N.return=R,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case v:return L=br(N.type,N.key,N.props,null,R.mode,L),ea(L,N),L.return=R,L;case C:return N=ys(N,R.mode,L),N.return=R,N;case oe:return N=El(N),X(R,N,L)}if(ne(N)||Q(N))return N=Sl(N,R.mode,L,null),N.return=R,N;if(typeof N.then=="function")return X(R,Tr(N),L);if(N.$$typeof===D)return X(R,Sr(R,N),L);Er(R,N)}return null}function q(R,N,L,J){var fe=N!==null?N.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return fe!==null?null:k(R,N,""+L,J);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case v:return L.key===fe?E(R,N,L,J):null;case C:return L.key===fe?U(R,N,L,J):null;case oe:return L=El(L),q(R,N,L,J)}if(ne(L)||Q(L))return fe!==null?null:F(R,N,L,J,null);if(typeof L.then=="function")return q(R,N,Tr(L),J);if(L.$$typeof===D)return q(R,N,Sr(R,L),J);Er(R,L)}return null}function I(R,N,L,J,fe){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return R=R.get(L)||null,k(N,R,""+J,fe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return R=R.get(J.key===null?L:J.key)||null,E(N,R,J,fe);case C:return R=R.get(J.key===null?L:J.key)||null,U(N,R,J,fe);case oe:return J=El(J),I(R,N,L,J,fe)}if(ne(J)||Q(J))return R=R.get(L)||null,F(N,R,J,fe,null);if(typeof J.then=="function")return I(R,N,L,Tr(J),fe);if(J.$$typeof===D)return I(R,N,L,Sr(N,J),fe);Er(N,J)}return null}function ue(R,N,L,J){for(var fe=null,De=null,se=N,ve=N=0,je=null;se!==null&&ve<L.length;ve++){se.index>ve?(je=se,se=null):je=se.sibling;var _e=q(R,se,L[ve],J);if(_e===null){se===null&&(se=je);break}e&&se&&_e.alternate===null&&n(R,se),N=d(_e,N,ve),De===null?fe=_e:De.sibling=_e,De=_e,se=je}if(ve===L.length)return l(R,se),Me&&Ct(R,ve),fe;if(se===null){for(;ve<L.length;ve++)se=X(R,L[ve],J),se!==null&&(N=d(se,N,ve),De===null?fe=se:De.sibling=se,De=se);return Me&&Ct(R,ve),fe}for(se=r(se);ve<L.length;ve++)je=I(se,R,ve,L[ve],J),je!==null&&(e&&je.alternate!==null&&se.delete(je.key===null?ve:je.key),N=d(je,N,ve),De===null?fe=je:De.sibling=je,De=je);return e&&se.forEach(function(fl){return n(R,fl)}),Me&&Ct(R,ve),fe}function me(R,N,L,J){if(L==null)throw Error(u(151));for(var fe=null,De=null,se=N,ve=N=0,je=null,_e=L.next();se!==null&&!_e.done;ve++,_e=L.next()){se.index>ve?(je=se,se=null):je=se.sibling;var fl=q(R,se,_e.value,J);if(fl===null){se===null&&(se=je);break}e&&se&&fl.alternate===null&&n(R,se),N=d(fl,N,ve),De===null?fe=fl:De.sibling=fl,De=fl,se=je}if(_e.done)return l(R,se),Me&&Ct(R,ve),fe;if(se===null){for(;!_e.done;ve++,_e=L.next())_e=X(R,_e.value,J),_e!==null&&(N=d(_e,N,ve),De===null?fe=_e:De.sibling=_e,De=_e);return Me&&Ct(R,ve),fe}for(se=r(se);!_e.done;ve++,_e=L.next())_e=I(se,R,ve,_e.value,J),_e!==null&&(e&&_e.alternate!==null&&se.delete(_e.key===null?ve:_e.key),N=d(_e,N,ve),De===null?fe=_e:De.sibling=_e,De=_e);return e&&se.forEach(function(ry){return n(R,ry)}),Me&&Ct(R,ve),fe}function qe(R,N,L,J){if(typeof L=="object"&&L!==null&&L.type===O&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case v:e:{for(var fe=L.key;N!==null;){if(N.key===fe){if(fe=L.type,fe===O){if(N.tag===7){l(R,N.sibling),J=o(N,L.props.children),J.return=R,R=J;break e}}else if(N.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===oe&&El(fe)===N.type){l(R,N.sibling),J=o(N,L.props),ea(J,L),J.return=R,R=J;break e}l(R,N);break}else n(R,N);N=N.sibling}L.type===O?(J=Sl(L.props.children,R.mode,J,L.key),J.return=R,R=J):(J=br(L.type,L.key,L.props,null,R.mode,J),ea(J,L),J.return=R,R=J)}return y(R);case C:e:{for(fe=L.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){l(R,N.sibling),J=o(N,L.children||[]),J.return=R,R=J;break e}else{l(R,N);break}else n(R,N);N=N.sibling}J=ys(L,R.mode,J),J.return=R,R=J}return y(R);case oe:return L=El(L),qe(R,N,L,J)}if(ne(L))return ue(R,N,L,J);if(Q(L)){if(fe=Q(L),typeof fe!="function")throw Error(u(150));return L=fe.call(L),me(R,N,L,J)}if(typeof L.then=="function")return qe(R,N,Tr(L),J);if(L.$$typeof===D)return qe(R,N,Sr(R,L),J);Er(R,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,N!==null&&N.tag===6?(l(R,N.sibling),J=o(N,L),J.return=R,R=J):(l(R,N),J=bs(L,R.mode,J),J.return=R,R=J),y(R)):l(R,N)}return function(R,N,L,J){try{$i=0;var fe=qe(R,N,L,J);return si=null,fe}catch(se){if(se===ui||se===wr)throw se;var De=On(29,se,null,R.mode);return De.lanes=J,De.return=R,De}finally{}}}var jl=Td(!0),Ed=Td(!1),Xt=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _s(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(e,n,l){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,n=xr(e),od(e,null,l),n}return gr(e,r,n,l),xr(e)}function na(e,n,l){if(n=n.updateQueue,n!==null&&(n=n.shared,(l&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,l|=r,n.lanes=l,xf(e,l)}}function Rs(e,n){var l=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,l===r)){var o=null,d=null;if(l=l.firstBaseUpdate,l!==null){do{var y={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};d===null?o=d=y:d=d.next=y,l=l.next}while(l!==null);d===null?o=d=n:d=d.next=n}else o=d=n;l={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:d,shared:r.shared,callbacks:r.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=n:e.next=n,l.lastBaseUpdate=n}var Os=!1;function ta(){if(Os){var e=ri;if(e!==null)throw e}}function la(e,n,l,r){Os=!1;var o=e.updateQueue;Xt=!1;var d=o.firstBaseUpdate,y=o.lastBaseUpdate,k=o.shared.pending;if(k!==null){o.shared.pending=null;var E=k,U=E.next;E.next=null,y===null?d=U:y.next=U,y=E;var F=e.alternate;F!==null&&(F=F.updateQueue,k=F.lastBaseUpdate,k!==y&&(k===null?F.firstBaseUpdate=U:k.next=U,F.lastBaseUpdate=E))}if(d!==null){var X=o.baseState;y=0,F=U=E=null,k=d;do{var q=k.lane&-536870913,I=q!==k.lane;if(I?(Ae&q)===q:(r&q)===q){q!==0&&q===ai&&(Os=!0),F!==null&&(F=F.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var ue=e,me=k;q=n;var qe=l;switch(me.tag){case 1:if(ue=me.payload,typeof ue=="function"){X=ue.call(qe,X,q);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=me.payload,q=typeof ue=="function"?ue.call(qe,X,q):ue,q==null)break e;X=g({},X,q);break e;case 2:Xt=!0}}q=k.callback,q!==null&&(e.flags|=64,I&&(e.flags|=8192),I=o.callbacks,I===null?o.callbacks=[q]:I.push(q))}else I={lane:q,tag:k.tag,payload:k.payload,callback:k.callback,next:null},F===null?(U=F=I,E=X):F=F.next=I,y|=q;if(k=k.next,k===null){if(k=o.shared.pending,k===null)break;I=k,k=I.next,I.next=null,o.lastBaseUpdate=I,o.shared.pending=null}}while(!0);F===null&&(E=X),o.baseState=E,o.firstBaseUpdate=U,o.lastBaseUpdate=F,d===null&&(o.shared.lanes=0),nl|=y,e.lanes=y,e.memoizedState=X}}function Ad(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function jd(e,n){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Ad(l[e],n)}var oi=M(null),Ar=M(0);function Md(e,n){e=zt,w(Ar,e),w(oi,n),zt=e|n.baseLanes}function zs(){w(Ar,zt),w(oi,oi.current)}function Ls(){zt=Ar.current,G(oi),G(Ar)}var zn=M(null),Zn=null;function Kt(e){var n=e.alternate;w(We,We.current&1),w(zn,e),Zn===null&&(n===null||oi.current!==null||n.memoizedState!==null)&&(Zn=e)}function Us(e){w(We,We.current),w(zn,e),Zn===null&&(Zn=e)}function Nd(e){e.tag===22?(w(We,We.current),w(zn,e),Zn===null&&(Zn=e)):Wt()}function Wt(){w(We,We.current),w(zn,zn.current)}function Ln(e){G(zn),Zn===e&&(Zn=null),G(We)}var We=M(0);function jr(e){for(var n=e;n!==null;){if(n.tag===13){var l=n.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Go(l)||Yo(l)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var At=0,ye=null,Be=null,nn=null,Mr=!1,ci=!1,Ml=!1,Nr=0,ia=0,fi=null,Zb=0;function Ze(){throw Error(u(321))}function Bs(e,n){if(n===null)return!1;for(var l=0;l<n.length&&l<e.length;l++)if(!Rn(e[l],n[l]))return!1;return!0}function Hs(e,n,l,r,o,d){return At=d,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?hh:eo,Ml=!1,d=l(r,o),Ml=!1,ci&&(d=_d(n,l,r,o)),Dd(e),d}function Dd(e){B.H=ua;var n=Be!==null&&Be.next!==null;if(At=0,nn=Be=ye=null,Mr=!1,ia=0,fi=null,n)throw Error(u(300));e===null||tn||(e=e.dependencies,e!==null&&vr(e)&&(tn=!0))}function _d(e,n,l,r){ye=e;var o=0;do{if(ci&&(fi=null),ia=0,ci=!1,25<=o)throw Error(u(301));if(o+=1,nn=Be=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=mh,d=n(l,r)}while(ci);return d}function Kb(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?aa(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ye.flags|=1024),n}function qs(){var e=Nr!==0;return Nr=0,e}function Vs(e,n,l){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l}function Is(e){if(Mr){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Mr=!1}At=0,nn=Be=ye=null,ci=!1,ia=Nr=0,fi=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ye.memoizedState=nn=e:nn=nn.next=e,nn}function $e(){if(Be===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=nn===null?ye.memoizedState:nn.next;if(n!==null)nn=n,Be=e;else{if(e===null)throw ye.alternate===null?Error(u(467)):Error(u(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},nn===null?ye.memoizedState=nn=e:nn=nn.next=e}return nn}function Dr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function aa(e){var n=ia;return ia+=1,fi===null&&(fi=[]),e=kd(fi,e,n),n=ye,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?hh:eo),e}function _r(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return aa(e);if(e.$$typeof===D)return dn(e)}throw Error(u(438,String(e)))}function Fs(e){var n=null,l=ye.updateQueue;if(l!==null&&(n=l.memoCache),n==null){var r=ye.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),l===null&&(l=Dr(),ye.updateQueue=l),l.memoCache=n,l=n.data[n.index],l===void 0)for(l=n.data[n.index]=Array(e),r=0;r<e;r++)l[r]=A;return n.index++,l}function jt(e,n){return typeof n=="function"?n(e):n}function Rr(e){var n=$e();return Gs(n,Be,e)}function Gs(e,n,l){var r=e.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=l;var o=e.baseQueue,d=r.pending;if(d!==null){if(o!==null){var y=o.next;o.next=d.next,d.next=y}n.baseQueue=o=d,r.pending=null}if(d=e.baseState,o===null)e.memoizedState=d;else{n=o.next;var k=y=null,E=null,U=n,F=!1;do{var X=U.lane&-536870913;if(X!==U.lane?(Ae&X)===X:(At&X)===X){var q=U.revertLane;if(q===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),X===ai&&(F=!0);else if((At&q)===q){U=U.next,q===ai&&(F=!0);continue}else X={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(k=E=X,y=d):E=E.next=X,ye.lanes|=q,nl|=q;X=U.action,Ml&&l(d,X),d=U.hasEagerState?U.eagerState:l(d,X)}else q={lane:X,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},E===null?(k=E=q,y=d):E=E.next=q,ye.lanes|=X,nl|=X;U=U.next}while(U!==null&&U!==n);if(E===null?y=d:E.next=k,!Rn(d,e.memoizedState)&&(tn=!0,F&&(l=ri,l!==null)))throw l;e.memoizedState=d,e.baseState=y,e.baseQueue=E,r.lastRenderedState=d}return o===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ys(e){var n=$e(),l=n.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=e;var r=l.dispatch,o=l.pending,d=n.memoizedState;if(o!==null){l.pending=null;var y=o=o.next;do d=e(d,y.action),y=y.next;while(y!==o);Rn(d,n.memoizedState)||(tn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),l.lastRenderedState=d}return[d,r]}function Rd(e,n,l){var r=ye,o=$e(),d=Me;if(d){if(l===void 0)throw Error(u(407));l=l()}else l=n();var y=!Rn((Be||o).memoizedState,l);if(y&&(o.memoizedState=l,tn=!0),o=o.queue,Xs(Ld.bind(null,r,o,e),[e]),o.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(r.flags|=2048,di(9,{destroy:void 0},zd.bind(null,r,o,l,n),null),Ie===null)throw Error(u(349));d||(At&127)!==0||Od(r,n,l)}return l}function Od(e,n,l){e.flags|=16384,e={getSnapshot:n,value:l},n=ye.updateQueue,n===null?(n=Dr(),ye.updateQueue=n,n.stores=[e]):(l=n.stores,l===null?n.stores=[e]:l.push(e))}function zd(e,n,l,r){n.value=l,n.getSnapshot=r,Ud(n)&&Bd(e)}function Ld(e,n,l){return l(function(){Ud(n)&&Bd(e)})}function Ud(e){var n=e.getSnapshot;e=e.value;try{var l=n();return!Rn(e,l)}catch{return!0}}function Bd(e){var n=vl(e,2);n!==null&&Mn(n,e,2)}function Ps(e){var n=vn();if(typeof e=="function"){var l=e;if(e=l(),Ml){kn(!0);try{l()}finally{kn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},n}function Hd(e,n,l,r){return e.baseState=l,Gs(e,Be,typeof r=="function"?r:jt)}function Wb(e,n,l,r,o){if(Lr(e))throw Error(u(485));if(e=n.action,e!==null){var d={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?l(!0):d.isTransition=!1,r(d),l=n.pending,l===null?(d.next=n.pending=d,qd(n,d)):(d.next=l.next,n.pending=l.next=d)}}function qd(e,n){var l=n.action,r=n.payload,o=e.state;if(n.isTransition){var d=B.T,y={};B.T=y;try{var k=l(o,r),E=B.S;E!==null&&E(y,k),Vd(e,n,k)}catch(U){Js(e,n,U)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=l(o,r),Vd(e,n,d)}catch(U){Js(e,n,U)}}function Vd(e,n,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(r){Id(e,n,r)},function(r){return Js(e,n,r)}):Id(e,n,l)}function Id(e,n,l){n.status="fulfilled",n.value=l,Fd(n),e.state=l,n=e.pending,n!==null&&(l=n.next,l===n?e.pending=null:(l=l.next,n.next=l,qd(e,l)))}function Js(e,n,l){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=l,Fd(n),n=n.next;while(n!==r)}e.action=null}function Fd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Gd(e,n){return n}function Yd(e,n){if(Me){var l=Ie.formState;if(l!==null){e:{var r=ye;if(Me){if(Ye){n:{for(var o=Ye,d=Qn;o.nodeType!==8;){if(!d){o=null;break n}if(o=Kn(o.nextSibling),o===null){o=null;break n}}d=o.data,o=d==="F!"||d==="F"?o:null}if(o){Ye=Kn(o.nextSibling),r=o.data==="F!";break e}}Pt(r)}r=!1}r&&(n=l[0])}}return l=vn(),l.memoizedState=l.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gd,lastRenderedState:n},l.queue=r,l=ch.bind(null,ye,r),r.dispatch=l,r=Ps(!1),d=$s.bind(null,ye,!1,r.queue),r=vn(),o={state:n,dispatch:null,action:e,pending:null},r.queue=o,l=Wb.bind(null,ye,o,d,l),o.dispatch=l,r.memoizedState=e,[n,l,!1]}function Pd(e){var n=$e();return Jd(n,Be,e)}function Jd(e,n,l){if(n=Gs(e,n,Gd)[0],e=Rr(jt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=aa(n)}catch(y){throw y===ui?wr:y}else r=n;n=$e();var o=n.queue,d=o.dispatch;return l!==n.memoizedState&&(ye.flags|=2048,di(9,{destroy:void 0},$b.bind(null,o,l),null)),[r,d,e]}function $b(e,n){e.action=n}function Xd(e){var n=$e(),l=Be;if(l!==null)return Jd(n,l,e);$e(),n=n.memoizedState,l=$e();var r=l.queue.dispatch;return l.memoizedState=e,[n,r,!1]}function di(e,n,l,r){return e={tag:e,create:l,deps:r,inst:n,next:null},n=ye.updateQueue,n===null&&(n=Dr(),ye.updateQueue=n),l=n.lastEffect,l===null?n.lastEffect=e.next=e:(r=l.next,l.next=e,e.next=r,n.lastEffect=e),e}function Qd(){return $e().memoizedState}function Or(e,n,l,r){var o=vn();ye.flags|=e,o.memoizedState=di(1|n,{destroy:void 0},l,r===void 0?null:r)}function zr(e,n,l,r){var o=$e();r=r===void 0?null:r;var d=o.memoizedState.inst;Be!==null&&r!==null&&Bs(r,Be.memoizedState.deps)?o.memoizedState=di(n,d,l,r):(ye.flags|=e,o.memoizedState=di(1|n,d,l,r))}function Zd(e,n){Or(8390656,8,e,n)}function Xs(e,n){zr(2048,8,e,n)}function e0(e){ye.flags|=4;var n=ye.updateQueue;if(n===null)n=Dr(),ye.updateQueue=n,n.events=[e];else{var l=n.events;l===null?n.events=[e]:l.push(e)}}function Kd(e){var n=$e().memoizedState;return e0({ref:n,nextImpl:e}),function(){if((Re&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function Wd(e,n){return zr(4,2,e,n)}function $d(e,n){return zr(4,4,e,n)}function eh(e,n){if(typeof n=="function"){e=e();var l=n(e);return function(){typeof l=="function"?l():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nh(e,n,l){l=l!=null?l.concat([e]):null,zr(4,4,eh.bind(null,n,e),l)}function Qs(){}function th(e,n){var l=$e();n=n===void 0?null:n;var r=l.memoizedState;return n!==null&&Bs(n,r[1])?r[0]:(l.memoizedState=[e,n],e)}function lh(e,n){var l=$e();n=n===void 0?null:n;var r=l.memoizedState;if(n!==null&&Bs(n,r[1]))return r[0];if(r=e(),Ml){kn(!0);try{e()}finally{kn(!1)}}return l.memoizedState=[r,n],r}function Zs(e,n,l){return l===void 0||(At&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=l,e=im(),ye.lanes|=e,nl|=e,l)}function ih(e,n,l,r){return Rn(l,n)?l:oi.current!==null?(e=Zs(e,l,r),Rn(e,n)||(tn=!0),e):(At&42)===0||(At&1073741824)!==0&&(Ae&261930)===0?(tn=!0,e.memoizedState=l):(e=im(),ye.lanes|=e,nl|=e,n)}function ah(e,n,l,r,o){var d=Z.p;Z.p=d!==0&&8>d?d:8;var y=B.T,k={};B.T=k,$s(e,!1,n,l);try{var E=o(),U=B.S;if(U!==null&&U(k,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=Qb(E,r);ra(e,n,F,Hn(e))}else ra(e,n,r,Hn(e))}catch(X){ra(e,n,{then:function(){},status:"rejected",reason:X},Hn())}finally{Z.p=d,y!==null&&k.types!==null&&(y.types=k.types),B.T=y}}function n0(){}function Ks(e,n,l,r){if(e.tag!==5)throw Error(u(476));var o=rh(e).queue;ah(e,o,n,re,l===null?n0:function(){return uh(e),l(r)})}function rh(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:re},next:null};var l={};return n.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:l},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function uh(e){var n=rh(e);n.next===null&&(n=e.alternate.memoizedState),ra(e,n.next.queue,{},Hn())}function Ws(){return dn(wa)}function sh(){return $e().memoizedState}function oh(){return $e().memoizedState}function t0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var l=Hn();e=Qt(l);var r=Zt(n,e,l);r!==null&&(Mn(r,n,l),na(r,n,l)),n={cache:As()},e.payload=n;return}n=n.return}}function l0(e,n,l){var r=Hn();l={lane:r,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Lr(e)?fh(n,l):(l=gs(e,n,l,r),l!==null&&(Mn(l,e,r),dh(l,n,r)))}function ch(e,n,l){var r=Hn();ra(e,n,l,r)}function ra(e,n,l,r){var o={lane:r,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Lr(e))fh(n,o);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,k=d(y,l);if(o.hasEagerState=!0,o.eagerState=k,Rn(k,y))return gr(e,n,o,0),Ie===null&&pr(),!1}catch{}finally{}if(l=gs(e,n,o,r),l!==null)return Mn(l,e,r),dh(l,n,r),!0}return!1}function $s(e,n,l,r){if(r={lane:2,revertLane:_o(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Lr(e)){if(n)throw Error(u(479))}else n=gs(e,l,r,2),n!==null&&Mn(n,e,2)}function Lr(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function fh(e,n){ci=Mr=!0;var l=e.pending;l===null?n.next=n:(n.next=l.next,l.next=n),e.pending=n}function dh(e,n,l){if((l&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,l|=r,n.lanes=l,xf(e,l)}}var ua={readContext:dn,use:_r,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};ua.useEffectEvent=Ze;var hh={readContext:dn,use:_r,useCallback:function(e,n){return vn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:Zd,useImperativeHandle:function(e,n,l){l=l!=null?l.concat([e]):null,Or(4194308,4,eh.bind(null,n,e),l)},useLayoutEffect:function(e,n){return Or(4194308,4,e,n)},useInsertionEffect:function(e,n){Or(4,2,e,n)},useMemo:function(e,n){var l=vn();n=n===void 0?null:n;var r=e();if(Ml){kn(!0);try{e()}finally{kn(!1)}}return l.memoizedState=[r,n],r},useReducer:function(e,n,l){var r=vn();if(l!==void 0){var o=l(n);if(Ml){kn(!0);try{l(n)}finally{kn(!1)}}}else o=n;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=l0.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var n=vn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ps(e);var n=e.queue,l=ch.bind(null,ye,n);return n.dispatch=l,[e.memoizedState,l]},useDebugValue:Qs,useDeferredValue:function(e,n){var l=vn();return Zs(l,e,n)},useTransition:function(){var e=Ps(!1);return e=ah.bind(null,ye,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,l){var r=ye,o=vn();if(Me){if(l===void 0)throw Error(u(407));l=l()}else{if(l=n(),Ie===null)throw Error(u(349));(Ae&127)!==0||Od(r,n,l)}o.memoizedState=l;var d={value:l,getSnapshot:n};return o.queue=d,Zd(Ld.bind(null,r,d,e),[e]),r.flags|=2048,di(9,{destroy:void 0},zd.bind(null,r,d,l,n),null),l},useId:function(){var e=vn(),n=Ie.identifierPrefix;if(Me){var l=ft,r=ct;l=(r&~(1<<32-Ve(r)-1)).toString(32)+l,n="_"+n+"R_"+l,l=Nr++,0<l&&(n+="H"+l.toString(32)),n+="_"}else l=Zb++,n="_"+n+"r_"+l.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ws,useFormState:Yd,useActionState:Yd,useOptimistic:function(e){var n=vn();n.memoizedState=n.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=l,n=$s.bind(null,ye,!0,l),l.dispatch=n,[e,n]},useMemoCache:Fs,useCacheRefresh:function(){return vn().memoizedState=t0.bind(null,ye)},useEffectEvent:function(e){var n=vn(),l={impl:e};return n.memoizedState=l,function(){if((Re&2)!==0)throw Error(u(440));return l.impl.apply(void 0,arguments)}}},eo={readContext:dn,use:_r,useCallback:th,useContext:dn,useEffect:Xs,useImperativeHandle:nh,useInsertionEffect:Wd,useLayoutEffect:$d,useMemo:lh,useReducer:Rr,useRef:Qd,useState:function(){return Rr(jt)},useDebugValue:Qs,useDeferredValue:function(e,n){var l=$e();return ih(l,Be.memoizedState,e,n)},useTransition:function(){var e=Rr(jt)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:aa(e),n]},useSyncExternalStore:Rd,useId:sh,useHostTransitionStatus:Ws,useFormState:Pd,useActionState:Pd,useOptimistic:function(e,n){var l=$e();return Hd(l,Be,e,n)},useMemoCache:Fs,useCacheRefresh:oh};eo.useEffectEvent=Kd;var mh={readContext:dn,use:_r,useCallback:th,useContext:dn,useEffect:Xs,useImperativeHandle:nh,useInsertionEffect:Wd,useLayoutEffect:$d,useMemo:lh,useReducer:Ys,useRef:Qd,useState:function(){return Ys(jt)},useDebugValue:Qs,useDeferredValue:function(e,n){var l=$e();return Be===null?Zs(l,e,n):ih(l,Be.memoizedState,e,n)},useTransition:function(){var e=Ys(jt)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:aa(e),n]},useSyncExternalStore:Rd,useId:sh,useHostTransitionStatus:Ws,useFormState:Xd,useActionState:Xd,useOptimistic:function(e,n){var l=$e();return Be!==null?Hd(l,Be,e,n):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Fs,useCacheRefresh:oh};mh.useEffectEvent=Kd;function no(e,n,l,r){n=e.memoizedState,l=l(r,n),l=l==null?n:g({},n,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var to={enqueueSetState:function(e,n,l){e=e._reactInternals;var r=Hn(),o=Qt(r);o.payload=n,l!=null&&(o.callback=l),n=Zt(e,o,r),n!==null&&(Mn(n,e,r),na(n,e,r))},enqueueReplaceState:function(e,n,l){e=e._reactInternals;var r=Hn(),o=Qt(r);o.tag=1,o.payload=n,l!=null&&(o.callback=l),n=Zt(e,o,r),n!==null&&(Mn(n,e,r),na(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var l=Hn(),r=Qt(l);r.tag=2,n!=null&&(r.callback=n),n=Zt(e,r,l),n!==null&&(Mn(n,e,l),na(n,e,l))}};function ph(e,n,l,r,o,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,d,y):n.prototype&&n.prototype.isPureReactComponent?!Ji(l,r)||!Ji(o,d):!0}function gh(e,n,l,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(l,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(l,r),n.state!==e&&to.enqueueReplaceState(n,n.state,null)}function Nl(e,n){var l=n;if("ref"in n){l={};for(var r in n)r!=="ref"&&(l[r]=n[r])}if(e=e.defaultProps){l===n&&(l=g({},l));for(var o in e)l[o]===void 0&&(l[o]=e[o])}return l}function xh(e){mr(e)}function bh(e){console.error(e)}function yh(e){mr(e)}function Ur(e,n){try{var l=e.onUncaughtError;l(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function vh(e,n,l){try{var r=e.onCaughtError;r(l.value,{componentStack:l.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function lo(e,n,l){return l=Qt(l),l.tag=3,l.payload={element:null},l.callback=function(){Ur(e,n)},l}function Sh(e){return e=Qt(e),e.tag=3,e}function kh(e,n,l,r){var o=l.type.getDerivedStateFromError;if(typeof o=="function"){var d=r.value;e.payload=function(){return o(d)},e.callback=function(){vh(n,l,r)}}var y=l.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){vh(n,l,r),typeof o!="function"&&(tl===null?tl=new Set([this]):tl.add(this));var k=r.stack;this.componentDidCatch(r.value,{componentStack:k!==null?k:""})})}function i0(e,n,l,r,o){if(l.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=l.alternate,n!==null&&ii(n,l,o,!0),l=zn.current,l!==null){switch(l.tag){case 31:case 13:return Zn===null?Qr():l.alternate===null&&Ke===0&&(Ke=3),l.flags&=-257,l.flags|=65536,l.lanes=o,r===Cr?l.flags|=16384:(n=l.updateQueue,n===null?l.updateQueue=new Set([r]):n.add(r),Mo(e,r,o)),!1;case 22:return l.flags|=65536,r===Cr?l.flags|=16384:(n=l.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},l.updateQueue=n):(l=n.retryQueue,l===null?n.retryQueue=new Set([r]):l.add(r)),Mo(e,r,o)),!1}throw Error(u(435,l.tag))}return Mo(e,r,o),Qr(),!1}if(Me)return n=zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,r!==ks&&(e=Error(u(422),{cause:r}),Zi(Pn(e,l)))):(r!==ks&&(n=Error(u(423),{cause:r}),Zi(Pn(n,l))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,r=Pn(r,l),o=lo(e.stateNode,r,o),Rs(e,o),Ke!==4&&(Ke=2)),!1;var d=Error(u(520),{cause:r});if(d=Pn(d,l),pa===null?pa=[d]:pa.push(d),Ke!==4&&(Ke=2),n===null)return!0;r=Pn(r,l),l=n;do{switch(l.tag){case 3:return l.flags|=65536,e=o&-o,l.lanes|=e,e=lo(l.stateNode,r,e),Rs(l,e),!1;case 1:if(n=l.type,d=l.stateNode,(l.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(tl===null||!tl.has(d))))return l.flags|=65536,o&=-o,l.lanes|=o,o=Sh(o),kh(o,e,l,r),Rs(l,o),!1}l=l.return}while(l!==null);return!1}var io=Error(u(461)),tn=!1;function hn(e,n,l,r){n.child=e===null?Ed(n,null,l,r):jl(n,e.child,l,r)}function wh(e,n,l,r,o){l=l.render;var d=n.ref;if("ref"in r){var y={};for(var k in r)k!=="ref"&&(y[k]=r[k])}else y=r;return Cl(n),r=Hs(e,n,l,y,d,o),k=qs(),e!==null&&!tn?(Vs(e,n,o),Mt(e,n,o)):(Me&&k&&vs(n),n.flags|=1,hn(e,n,r,o),n.child)}function Ch(e,n,l,r,o){if(e===null){var d=l.type;return typeof d=="function"&&!xs(d)&&d.defaultProps===void 0&&l.compare===null?(n.tag=15,n.type=d,Th(e,n,d,r,o)):(e=br(l.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!ho(e,o)){var y=d.memoizedProps;if(l=l.compare,l=l!==null?l:Ji,l(y,r)&&e.ref===n.ref)return Mt(e,n,o)}return n.flags|=1,e=wt(d,r),e.ref=n.ref,e.return=n,n.child=e}function Th(e,n,l,r,o){if(e!==null){var d=e.memoizedProps;if(Ji(d,r)&&e.ref===n.ref)if(tn=!1,n.pendingProps=r=d,ho(e,o))(e.flags&131072)!==0&&(tn=!0);else return n.lanes=e.lanes,Mt(e,n,o)}return ao(e,n,l,r,o)}function Eh(e,n,l,r){var o=r.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|l:l,e!==null){for(r=n.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;r=o&~d}else r=0,n.child=null;return Ah(e,n,d,l,r)}if((l&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&kr(n,d!==null?d.cachePool:null),d!==null?Md(n,d):zs(),Nd(n);else return r=n.lanes=536870912,Ah(e,n,d!==null?d.baseLanes|l:l,l,r)}else d!==null?(kr(n,d.cachePool),Md(n,d),Wt(),n.memoizedState=null):(e!==null&&kr(n,null),zs(),Wt());return hn(e,n,o,l),n.child}function sa(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ah(e,n,l,r,o){var d=Ms();return d=d===null?null:{parent:en._currentValue,pool:d},n.memoizedState={baseLanes:l,cachePool:d},e!==null&&kr(n,null),zs(),Nd(n),e!==null&&ii(e,n,r,!0),n.childLanes=o,null}function Br(e,n){return n=qr({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function jh(e,n,l){return jl(n,e.child,null,l),e=Br(n,n.pendingProps),e.flags|=2,Ln(n),n.memoizedState=null,e}function a0(e,n,l){var r=n.pendingProps,o=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(r.mode==="hidden")return e=Br(n,r),n.lanes=536870912,sa(null,e);if(Us(n),(e=Ye)?(e=qm(e,Qn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Gt!==null?{id:ct,overflow:ft}:null,retryLane:536870912,hydrationErrors:null},l=fd(e),l.return=n,n.child=l,fn=n,Ye=null)):e=null,e===null)throw Pt(n);return n.lanes=536870912,null}return Br(n,r)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(Us(n),o)if(n.flags&256)n.flags&=-257,n=jh(e,n,l);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(tn||ii(e,n,l,!1),o=(l&e.childLanes)!==0,tn||o){if(r=Ie,r!==null&&(y=bf(r,l),y!==0&&y!==d.retryLane))throw d.retryLane=y,vl(e,y),Mn(r,e,y),io;Qr(),n=jh(e,n,l)}else e=d.treeContext,Ye=Kn(y.nextSibling),fn=n,Me=!0,Yt=null,Qn=!1,e!==null&&md(n,e),n=Br(n,r),n.flags|=4096;return n}return e=wt(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hr(e,n){var l=n.ref;if(l===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(u(284));(e===null||e.ref!==l)&&(n.flags|=4194816)}}function ao(e,n,l,r,o){return Cl(n),l=Hs(e,n,l,r,void 0,o),r=qs(),e!==null&&!tn?(Vs(e,n,o),Mt(e,n,o)):(Me&&r&&vs(n),n.flags|=1,hn(e,n,l,o),n.child)}function Mh(e,n,l,r,o,d){return Cl(n),n.updateQueue=null,l=_d(n,r,l,o),Dd(e),r=qs(),e!==null&&!tn?(Vs(e,n,d),Mt(e,n,d)):(Me&&r&&vs(n),n.flags|=1,hn(e,n,l,d),n.child)}function Nh(e,n,l,r,o){if(Cl(n),n.stateNode===null){var d=ei,y=l.contextType;typeof y=="object"&&y!==null&&(d=dn(y)),d=new l(r,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=to,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=r,d.state=n.memoizedState,d.refs={},Ds(n),y=l.contextType,d.context=typeof y=="object"&&y!==null?dn(y):ei,d.state=n.memoizedState,y=l.getDerivedStateFromProps,typeof y=="function"&&(no(n,l,y,r),d.state=n.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&to.enqueueReplaceState(d,d.state,null),la(n,r,d,o),ta(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){d=n.stateNode;var k=n.memoizedProps,E=Nl(l,k);d.props=E;var U=d.context,F=l.contextType;y=ei,typeof F=="object"&&F!==null&&(y=dn(F));var X=l.getDerivedStateFromProps;F=typeof X=="function"||typeof d.getSnapshotBeforeUpdate=="function",k=n.pendingProps!==k,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(k||U!==y)&&gh(n,d,r,y),Xt=!1;var q=n.memoizedState;d.state=q,la(n,r,d,o),ta(),U=n.memoizedState,k||q!==U||Xt?(typeof X=="function"&&(no(n,l,X,r),U=n.memoizedState),(E=Xt||ph(n,l,E,r,q,U,y))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=U),d.props=r,d.state=U,d.context=y,r=E):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{d=n.stateNode,_s(e,n),y=n.memoizedProps,F=Nl(l,y),d.props=F,X=n.pendingProps,q=d.context,U=l.contextType,E=ei,typeof U=="object"&&U!==null&&(E=dn(U)),k=l.getDerivedStateFromProps,(U=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==X||q!==E)&&gh(n,d,r,E),Xt=!1,q=n.memoizedState,d.state=q,la(n,r,d,o),ta();var I=n.memoizedState;y!==X||q!==I||Xt||e!==null&&e.dependencies!==null&&vr(e.dependencies)?(typeof k=="function"&&(no(n,l,k,r),I=n.memoizedState),(F=Xt||ph(n,l,F,r,q,I,E)||e!==null&&e.dependencies!==null&&vr(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,I,E),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,I,E)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=I),d.props=r,d.state=I,d.context=E,r=F):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(n.flags|=1024),r=!1)}return d=r,Hr(e,n),r=(n.flags&128)!==0,d||r?(d=n.stateNode,l=r&&typeof l.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&r?(n.child=jl(n,e.child,null,o),n.child=jl(n,null,l,o)):hn(e,n,l,o),n.memoizedState=d.state,e=n.child):e=Mt(e,n,o),e}function Dh(e,n,l,r){return kl(),n.flags|=256,hn(e,n,l,r),n.child}var ro={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uo(e){return{baseLanes:e,cachePool:vd()}}function so(e,n,l){return e=e!==null?e.childLanes&~l:0,n&&(e|=Bn),e}function _h(e,n,l){var r=n.pendingProps,o=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),y&&(o=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(o?Kt(n):Wt(),(e=Ye)?(e=qm(e,Qn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Gt!==null?{id:ct,overflow:ft}:null,retryLane:536870912,hydrationErrors:null},l=fd(e),l.return=n,n.child=l,fn=n,Ye=null)):e=null,e===null)throw Pt(n);return Yo(e)?n.lanes=32:n.lanes=536870912,null}var k=r.children;return r=r.fallback,o?(Wt(),o=n.mode,k=qr({mode:"hidden",children:k},o),r=Sl(r,o,l,null),k.return=n,r.return=n,k.sibling=r,n.child=k,r=n.child,r.memoizedState=uo(l),r.childLanes=so(e,y,l),n.memoizedState=ro,sa(null,r)):(Kt(n),oo(n,k))}var E=e.memoizedState;if(E!==null&&(k=E.dehydrated,k!==null)){if(d)n.flags&256?(Kt(n),n.flags&=-257,n=co(e,n,l)):n.memoizedState!==null?(Wt(),n.child=e.child,n.flags|=128,n=null):(Wt(),k=r.fallback,o=n.mode,r=qr({mode:"visible",children:r.children},o),k=Sl(k,o,l,null),k.flags|=2,r.return=n,k.return=n,r.sibling=k,n.child=r,jl(n,e.child,null,l),r=n.child,r.memoizedState=uo(l),r.childLanes=so(e,y,l),n.memoizedState=ro,n=sa(null,r));else if(Kt(n),Yo(k)){if(y=k.nextSibling&&k.nextSibling.dataset,y)var U=y.dgst;y=U,r=Error(u(419)),r.stack="",r.digest=y,Zi({value:r,source:null,stack:null}),n=co(e,n,l)}else if(tn||ii(e,n,l,!1),y=(l&e.childLanes)!==0,tn||y){if(y=Ie,y!==null&&(r=bf(y,l),r!==0&&r!==E.retryLane))throw E.retryLane=r,vl(e,r),Mn(y,e,r),io;Go(k)||Qr(),n=co(e,n,l)}else Go(k)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,Ye=Kn(k.nextSibling),fn=n,Me=!0,Yt=null,Qn=!1,e!==null&&md(n,e),n=oo(n,r.children),n.flags|=4096);return n}return o?(Wt(),k=r.fallback,o=n.mode,E=e.child,U=E.sibling,r=wt(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&65011712,U!==null?k=wt(U,k):(k=Sl(k,o,l,null),k.flags|=2),k.return=n,r.return=n,r.sibling=k,n.child=r,sa(null,r),r=n.child,k=e.child.memoizedState,k===null?k=uo(l):(o=k.cachePool,o!==null?(E=en._currentValue,o=o.parent!==E?{parent:E,pool:E}:o):o=vd(),k={baseLanes:k.baseLanes|l,cachePool:o}),r.memoizedState=k,r.childLanes=so(e,y,l),n.memoizedState=ro,sa(e.child,r)):(Kt(n),l=e.child,e=l.sibling,l=wt(l,{mode:"visible",children:r.children}),l.return=n,l.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=l,n.memoizedState=null,l)}function oo(e,n){return n=qr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function qr(e,n){return e=On(22,e,null,n),e.lanes=0,e}function co(e,n,l){return jl(n,e.child,null,l),e=oo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rh(e,n,l){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ts(e.return,n,l)}function fo(e,n,l,r,o,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:l,tailMode:o,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=l,y.tailMode=o,y.treeForkCount=d)}function Oh(e,n,l){var r=n.pendingProps,o=r.revealOrder,d=r.tail;r=r.children;var y=We.current,k=(y&2)!==0;if(k?(y=y&1|2,n.flags|=128):y&=1,w(We,y),hn(e,n,r,l),r=Me?Qi:0,!k&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rh(e,l,n);else if(e.tag===19)Rh(e,l,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(l=n.child,o=null;l!==null;)e=l.alternate,e!==null&&jr(e)===null&&(o=l),l=l.sibling;l=o,l===null?(o=n.child,n.child=null):(o=l.sibling,l.sibling=null),fo(n,!1,o,l,d,r);break;case"backwards":case"unstable_legacy-backwards":for(l=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&jr(e)===null){n.child=o;break}e=o.sibling,o.sibling=l,l=o,o=e}fo(n,!0,l,null,d,r);break;case"together":fo(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Mt(e,n,l){if(e!==null&&(n.dependencies=e.dependencies),nl|=n.lanes,(l&n.childLanes)===0)if(e!==null){if(ii(e,n,l,!1),(l&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,l=wt(e,e.pendingProps),n.child=l,l.return=n;e.sibling!==null;)e=e.sibling,l=l.sibling=wt(e,e.pendingProps),l.return=n;l.sibling=null}return n.child}function ho(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vr(e)))}function r0(e,n,l){switch(n.tag){case 3:Je(n,n.stateNode.containerInfo),Jt(n,en,e.memoizedState.cache),kl();break;case 27:case 5:In(n);break;case 4:Je(n,n.stateNode.containerInfo);break;case 10:Jt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Us(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Kt(n),n.flags|=128,null):(l&n.child.childLanes)!==0?_h(e,n,l):(Kt(n),e=Mt(e,n,l),e!==null?e.sibling:null);Kt(n);break;case 19:var o=(e.flags&128)!==0;if(r=(l&n.childLanes)!==0,r||(ii(e,n,l,!1),r=(l&n.childLanes)!==0),o){if(r)return Oh(e,n,l);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),w(We,We.current),r)break;return null;case 22:return n.lanes=0,Eh(e,n,l,n.pendingProps);case 24:Jt(n,en,e.memoizedState.cache)}return Mt(e,n,l)}function zh(e,n,l){if(e!==null)if(e.memoizedProps!==n.pendingProps)tn=!0;else{if(!ho(e,l)&&(n.flags&128)===0)return tn=!1,r0(e,n,l);tn=(e.flags&131072)!==0}else tn=!1,Me&&(n.flags&1048576)!==0&&hd(n,Qi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=El(n.elementType),n.type=e,typeof e=="function")xs(e)?(r=Nl(e,r),n.tag=1,n=Nh(null,n,e,r,l)):(n.tag=0,n=ao(null,n,e,r,l));else{if(e!=null){var o=e.$$typeof;if(o===K){n.tag=11,n=wh(null,n,e,r,l);break e}else if(o===ee){n.tag=14,n=Ch(null,n,e,r,l);break e}}throw n=ae(e)||e,Error(u(306,n,""))}}return n;case 0:return ao(e,n,n.type,n.pendingProps,l);case 1:return r=n.type,o=Nl(r,n.pendingProps),Nh(e,n,r,o,l);case 3:e:{if(Je(n,n.stateNode.containerInfo),e===null)throw Error(u(387));r=n.pendingProps;var d=n.memoizedState;o=d.element,_s(e,n),la(n,r,null,l);var y=n.memoizedState;if(r=y.cache,Jt(n,en,r),r!==d.cache&&Es(n,[en],l,!0),ta(),r=y.element,d.isDehydrated)if(d={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Dh(e,n,r,l);break e}else if(r!==o){o=Pn(Error(u(424)),n),Zi(o),n=Dh(e,n,r,l);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=Kn(e.firstChild),fn=n,Me=!0,Yt=null,Qn=!0,l=Ed(n,null,r,l),n.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(kl(),r===o){n=Mt(e,n,l);break e}hn(e,n,r,l)}n=n.child}return n;case 26:return Hr(e,n),e===null?(l=Pm(n.type,null,n.pendingProps,null))?n.memoizedState=l:Me||(l=n.type,e=n.pendingProps,r=tu(ce.current).createElement(l),r[cn]=n,r[wn]=e,mn(r,l,e),sn(r),n.stateNode=r):n.memoizedState=Pm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return In(n),e===null&&Me&&(r=n.stateNode=Fm(n.type,n.pendingProps,ce.current),fn=n,Qn=!0,o=Ye,rl(n.type)?(Po=o,Ye=Kn(r.firstChild)):Ye=o),hn(e,n,n.pendingProps.children,l),Hr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((o=r=Ye)&&(r=L0(r,n.type,n.pendingProps,Qn),r!==null?(n.stateNode=r,fn=n,Ye=Kn(r.firstChild),Qn=!1,o=!0):o=!1),o||Pt(n)),In(n),o=n.type,d=n.pendingProps,y=e!==null?e.memoizedProps:null,r=d.children,Vo(o,d)?r=null:y!==null&&Vo(o,y)&&(n.flags|=32),n.memoizedState!==null&&(o=Hs(e,n,Kb,null,null,l),wa._currentValue=o),Hr(e,n),hn(e,n,r,l),n.child;case 6:return e===null&&Me&&((e=l=Ye)&&(l=U0(l,n.pendingProps,Qn),l!==null?(n.stateNode=l,fn=n,Ye=null,e=!0):e=!1),e||Pt(n)),null;case 13:return _h(e,n,l);case 4:return Je(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=jl(n,null,r,l):hn(e,n,r,l),n.child;case 11:return wh(e,n,n.type,n.pendingProps,l);case 7:return hn(e,n,n.pendingProps,l),n.child;case 8:return hn(e,n,n.pendingProps.children,l),n.child;case 12:return hn(e,n,n.pendingProps.children,l),n.child;case 10:return r=n.pendingProps,Jt(n,n.type,r.value),hn(e,n,r.children,l),n.child;case 9:return o=n.type._context,r=n.pendingProps.children,Cl(n),o=dn(o),r=r(o),n.flags|=1,hn(e,n,r,l),n.child;case 14:return Ch(e,n,n.type,n.pendingProps,l);case 15:return Th(e,n,n.type,n.pendingProps,l);case 19:return Oh(e,n,l);case 31:return a0(e,n,l);case 22:return Eh(e,n,l,n.pendingProps);case 24:return Cl(n),r=dn(en),e===null?(o=Ms(),o===null&&(o=Ie,d=As(),o.pooledCache=d,d.refCount++,d!==null&&(o.pooledCacheLanes|=l),o=d),n.memoizedState={parent:r,cache:o},Ds(n),Jt(n,en,o)):((e.lanes&l)!==0&&(_s(e,n),la(n,null,null,l),ta()),o=e.memoizedState,d=n.memoizedState,o.parent!==r?(o={parent:r,cache:r},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),Jt(n,en,r)):(r=d.cache,Jt(n,en,r),r!==o.cache&&Es(n,[en],l,!0))),hn(e,n,n.pendingProps.children,l),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function Nt(e){e.flags|=4}function mo(e,n,l,r,o){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(sm())e.flags|=8192;else throw Al=Cr,Ns}else e.flags&=-16777217}function Lh(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Km(n))if(sm())e.flags|=8192;else throw Al=Cr,Ns}function Vr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?pf():536870912,e.lanes|=n,gi|=n)}function oa(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var r=null;l!==null;)l.alternate!==null&&(r=l),l=l.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,l=0,r=0;if(n)for(var o=e.child;o!==null;)l|=o.lanes|o.childLanes,r|=o.subtreeFlags&65011712,r|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)l|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=l,n}function u0(e,n,l){var r=n.pendingProps;switch(Ss(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return l=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Et(en),Ue(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(li(n)?Nt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ws())),Pe(n),null;case 26:var o=n.type,d=n.memoizedState;return e===null?(Nt(n),d!==null?(Pe(n),Lh(n,d)):(Pe(n),mo(n,o,null,r,l))):d?d!==e.memoizedState?(Nt(n),Pe(n),Lh(n,d)):(Pe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Nt(n),Pe(n),mo(n,o,e,r,l)),null;case 27:if(xt(n),l=ce.current,o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Nt(n);else{if(!r){if(n.stateNode===null)throw Error(u(166));return Pe(n),null}e=ie.current,li(n)?pd(n):(e=Fm(o,r,l),n.stateNode=e,Nt(n))}return Pe(n),null;case 5:if(xt(n),o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Nt(n);else{if(!r){if(n.stateNode===null)throw Error(u(166));return Pe(n),null}if(d=ie.current,li(n))pd(n);else{var y=tu(ce.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?d.multiple=!0:r.size&&(d.size=r.size);break;default:d=typeof r.is=="string"?y.createElement(o,{is:r.is}):y.createElement(o)}}d[cn]=n,d[wn]=r;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(mn(d,o,r),o){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Nt(n)}}return Pe(n),mo(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,l),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Nt(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(u(166));if(e=ce.current,li(n)){if(e=n.stateNode,l=n.memoizedProps,r=null,o=fn,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}e[cn]=n,e=!!(e.nodeValue===l||r!==null&&r.suppressHydrationWarning===!0||_m(e.nodeValue,l)),e||Pt(n,!0)}else e=tu(e).createTextNode(r),e[cn]=n,n.stateNode=e}return Pe(n),null;case 31:if(l=n.memoizedState,e===null||e.memoizedState!==null){if(r=li(n),l!==null){if(e===null){if(!r)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[cn]=n}else kl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),e=!1}else l=ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return n.flags&256?(Ln(n),n):(Ln(n),null);if((n.flags&128)!==0)throw Error(u(558))}return Pe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=li(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[cn]=n}else kl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),o=!1}else o=ws(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(Ln(n),n):(Ln(n),null)}return Ln(n),(n.flags&128)!==0?(n.lanes=l,n):(l=r!==null,e=e!==null&&e.memoizedState!==null,l&&(r=n.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool),d=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==o&&(r.flags|=2048)),l!==e&&l&&(n.child.flags|=8192),Vr(n,n.updateQueue),Pe(n),null);case 4:return Ue(),e===null&&Lo(n.stateNode.containerInfo),Pe(n),null;case 10:return Et(n.type),Pe(n),null;case 19:if(G(We),r=n.memoizedState,r===null)return Pe(n),null;if(o=(n.flags&128)!==0,d=r.rendering,d===null)if(o)oa(r,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=jr(e),d!==null){for(n.flags|=128,oa(r,!1),e=d.updateQueue,n.updateQueue=e,Vr(n,e),n.subtreeFlags=0,e=l,l=n.child;l!==null;)cd(l,e),l=l.sibling;return w(We,We.current&1|2),Me&&Ct(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&bn()>Pr&&(n.flags|=128,o=!0,oa(r,!1),n.lanes=4194304)}else{if(!o)if(e=jr(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Vr(n,e),oa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!d.alternate&&!Me)return Pe(n),null}else 2*bn()-r.renderingStartTime>Pr&&l!==536870912&&(n.flags|=128,o=!0,oa(r,!1),n.lanes=4194304);r.isBackwards?(d.sibling=n.child,n.child=d):(e=r.last,e!==null?e.sibling=d:n.child=d,r.last=d)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=bn(),e.sibling=null,l=We.current,w(We,o?l&1|2:l&1),Me&&Ct(n,r.treeForkCount),e):(Pe(n),null);case 22:case 23:return Ln(n),Ls(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(l&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),l=n.updateQueue,l!==null&&Vr(n,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==l&&(n.flags|=2048),e!==null&&G(Tl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Et(en),Pe(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function s0(e,n){switch(Ss(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Et(en),Ue(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xt(n),null;case 31:if(n.memoizedState!==null){if(Ln(n),n.alternate===null)throw Error(u(340));kl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ln(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));kl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(We),null;case 4:return Ue(),null;case 10:return Et(n.type),null;case 22:case 23:return Ln(n),Ls(),e!==null&&G(Tl),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Et(en),null;case 25:return null;default:return null}}function Uh(e,n){switch(Ss(n),n.tag){case 3:Et(en),Ue();break;case 26:case 27:case 5:xt(n);break;case 4:Ue();break;case 31:n.memoizedState!==null&&Ln(n);break;case 13:Ln(n);break;case 19:G(We);break;case 10:Et(n.type);break;case 22:case 23:Ln(n),Ls(),e!==null&&G(Tl);break;case 24:Et(en)}}function ca(e,n){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var o=r.next;l=o;do{if((l.tag&e)===e){r=void 0;var d=l.create,y=l.inst;r=d(),y.destroy=r}l=l.next}while(l!==o)}}catch(k){Le(n,n.return,k)}}function $t(e,n,l){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var d=o.next;r=d;do{if((r.tag&e)===e){var y=r.inst,k=y.destroy;if(k!==void 0){y.destroy=void 0,o=n;var E=l,U=k;try{U()}catch(F){Le(o,E,F)}}}r=r.next}while(r!==d)}}catch(F){Le(n,n.return,F)}}function Bh(e){var n=e.updateQueue;if(n!==null){var l=e.stateNode;try{jd(n,l)}catch(r){Le(e,e.return,r)}}}function Hh(e,n,l){l.props=Nl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(r){Le(e,n,r)}}function fa(e,n){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof l=="function"?e.refCleanup=l(r):l.current=r}}catch(o){Le(e,n,o)}}function dt(e,n){var l=e.ref,r=e.refCleanup;if(l!==null)if(typeof r=="function")try{r()}catch(o){Le(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(o){Le(e,n,o)}else l.current=null}function qh(e){var n=e.type,l=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break e;case"img":l.src?r.src=l.src:l.srcSet&&(r.srcset=l.srcSet)}}catch(o){Le(e,e.return,o)}}function po(e,n,l){try{var r=e.stateNode;N0(r,e.type,l,n),r[wn]=n}catch(o){Le(e,e.return,o)}}function Vh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rl(e.type)||e.tag===4}function go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xo(e,n,l){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,n):(n=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,n.appendChild(e),l=l._reactRootContainer,l!=null||n.onclick!==null||(n.onclick=St));else if(r!==4&&(r===27&&rl(e.type)&&(l=e.stateNode,n=null),e=e.child,e!==null))for(xo(e,n,l),e=e.sibling;e!==null;)xo(e,n,l),e=e.sibling}function Ir(e,n,l){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?l.insertBefore(e,n):l.appendChild(e);else if(r!==4&&(r===27&&rl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Ir(e,n,l),e=e.sibling;e!==null;)Ir(e,n,l),e=e.sibling}function Ih(e){var n=e.stateNode,l=e.memoizedProps;try{for(var r=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);mn(n,r,l),n[cn]=e,n[wn]=l}catch(d){Le(e,e.return,d)}}var Dt=!1,ln=!1,bo=!1,Fh=typeof WeakSet=="function"?WeakSet:Set,on=null;function o0(e,n){if(e=e.containerInfo,Ho=ou,e=nd(e),cs(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var r=l.getSelection&&l.getSelection();if(r&&r.rangeCount!==0){l=r.anchorNode;var o=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{l.nodeType,d.nodeType}catch{l=null;break e}var y=0,k=-1,E=-1,U=0,F=0,X=e,q=null;n:for(;;){for(var I;X!==l||o!==0&&X.nodeType!==3||(k=y+o),X!==d||r!==0&&X.nodeType!==3||(E=y+r),X.nodeType===3&&(y+=X.nodeValue.length),(I=X.firstChild)!==null;)q=X,X=I;for(;;){if(X===e)break n;if(q===l&&++U===o&&(k=y),q===d&&++F===r&&(E=y),(I=X.nextSibling)!==null)break;X=q,q=X.parentNode}X=I}l=k===-1||E===-1?null:{start:k,end:E}}else l=null}l=l||{start:0,end:0}}else l=null;for(qo={focusedElem:e,selectionRange:l},ou=!1,on=n;on!==null;)if(n=on,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,on=e;else for(;on!==null;){switch(n=on,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)o=e[l],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,l=n,o=d.memoizedProps,d=d.memoizedState,r=l.stateNode;try{var ue=Nl(l.type,o);e=r.getSnapshotBeforeUpdate(ue,d),r.__reactInternalSnapshotBeforeUpdate=e}catch(me){Le(l,l.return,me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,l=e.nodeType,l===9)Fo(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,on=e;break}on=n.return}}function Gh(e,n,l){var r=l.flags;switch(l.tag){case 0:case 11:case 15:Rt(e,l),r&4&&ca(5,l);break;case 1:if(Rt(e,l),r&4)if(e=l.stateNode,n===null)try{e.componentDidMount()}catch(y){Le(l,l.return,y)}else{var o=Nl(l.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Le(l,l.return,y)}}r&64&&Bh(l),r&512&&fa(l,l.return);break;case 3:if(Rt(e,l),r&64&&(e=l.updateQueue,e!==null)){if(n=null,l.child!==null)switch(l.child.tag){case 27:case 5:n=l.child.stateNode;break;case 1:n=l.child.stateNode}try{jd(e,n)}catch(y){Le(l,l.return,y)}}break;case 27:n===null&&r&4&&Ih(l);case 26:case 5:Rt(e,l),n===null&&r&4&&qh(l),r&512&&fa(l,l.return);break;case 12:Rt(e,l);break;case 31:Rt(e,l),r&4&&Jh(e,l);break;case 13:Rt(e,l),r&4&&Xh(e,l),r&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=b0.bind(null,l),B0(e,l))));break;case 22:if(r=l.memoizedState!==null||Dt,!r){n=n!==null&&n.memoizedState!==null||ln,o=Dt;var d=ln;Dt=r,(ln=n)&&!d?Ot(e,l,(l.subtreeFlags&8772)!==0):Rt(e,l),Dt=o,ln=d}break;case 30:break;default:Rt(e,l)}}function Yh(e){var n=e.alternate;n!==null&&(e.alternate=null,Yh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ju(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Tn=!1;function _t(e,n,l){for(l=l.child;l!==null;)Ph(e,n,l),l=l.sibling}function Ph(e,n,l){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(yn,l)}catch{}switch(l.tag){case 26:ln||dt(l,n),_t(e,n,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ln||dt(l,n);var r=Xe,o=Tn;rl(l.type)&&(Xe=l.stateNode,Tn=!1),_t(e,n,l),va(l.stateNode),Xe=r,Tn=o;break;case 5:ln||dt(l,n);case 6:if(r=Xe,o=Tn,Xe=null,_t(e,n,l),Xe=r,Tn=o,Xe!==null)if(Tn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(l.stateNode)}catch(d){Le(l,n,d)}else try{Xe.removeChild(l.stateNode)}catch(d){Le(l,n,d)}break;case 18:Xe!==null&&(Tn?(e=Xe,Bm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ci(e)):Bm(Xe,l.stateNode));break;case 4:r=Xe,o=Tn,Xe=l.stateNode.containerInfo,Tn=!0,_t(e,n,l),Xe=r,Tn=o;break;case 0:case 11:case 14:case 15:$t(2,l,n),ln||$t(4,l,n),_t(e,n,l);break;case 1:ln||(dt(l,n),r=l.stateNode,typeof r.componentWillUnmount=="function"&&Hh(l,n,r)),_t(e,n,l);break;case 21:_t(e,n,l);break;case 22:ln=(r=ln)||l.memoizedState!==null,_t(e,n,l),ln=r;break;default:_t(e,n,l)}}function Jh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ci(e)}catch(l){Le(n,n.return,l)}}}function Xh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ci(e)}catch(l){Le(n,n.return,l)}}function c0(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Fh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Fh),n;default:throw Error(u(435,e.tag))}}function Fr(e,n){var l=c0(e);n.forEach(function(r){if(!l.has(r)){l.add(r);var o=y0.bind(null,e,r);r.then(o,o)}})}function En(e,n){var l=n.deletions;if(l!==null)for(var r=0;r<l.length;r++){var o=l[r],d=e,y=n,k=y;e:for(;k!==null;){switch(k.tag){case 27:if(rl(k.type)){Xe=k.stateNode,Tn=!1;break e}break;case 5:Xe=k.stateNode,Tn=!1;break e;case 3:case 4:Xe=k.stateNode.containerInfo,Tn=!0;break e}k=k.return}if(Xe===null)throw Error(u(160));Ph(d,y,o),Xe=null,Tn=!1,d=o.alternate,d!==null&&(d.return=null),o.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Qh(n,e),n=n.sibling}var at=null;function Qh(e,n){var l=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(n,e),An(e),r&4&&($t(3,e,e.return),ca(3,e),$t(5,e,e.return));break;case 1:En(n,e),An(e),r&512&&(ln||l===null||dt(l,l.return)),r&64&&Dt&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?r:l.concat(r))));break;case 26:var o=at;if(En(n,e),An(e),r&512&&(ln||l===null||dt(l,l.return)),r&4){var d=l!==null?l.memoizedState:null;if(r=e.memoizedState,l===null)if(r===null)if(e.stateNode===null){e:{r=e.type,l=e.memoizedProps,o=o.ownerDocument||o;n:switch(r){case"title":d=o.getElementsByTagName("title")[0],(!d||d[Bi]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=o.createElement(r),o.head.insertBefore(d,o.querySelector("head > title"))),mn(d,r,l),d[cn]=e,sn(d),r=d;break e;case"link":var y=Qm("link","href",o).get(r+(l.href||""));if(y){for(var k=0;k<y.length;k++)if(d=y[k],d.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&d.getAttribute("rel")===(l.rel==null?null:l.rel)&&d.getAttribute("title")===(l.title==null?null:l.title)&&d.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){y.splice(k,1);break n}}d=o.createElement(r),mn(d,r,l),o.head.appendChild(d);break;case"meta":if(y=Qm("meta","content",o).get(r+(l.content||""))){for(k=0;k<y.length;k++)if(d=y[k],d.getAttribute("content")===(l.content==null?null:""+l.content)&&d.getAttribute("name")===(l.name==null?null:l.name)&&d.getAttribute("property")===(l.property==null?null:l.property)&&d.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&d.getAttribute("charset")===(l.charSet==null?null:l.charSet)){y.splice(k,1);break n}}d=o.createElement(r),mn(d,r,l),o.head.appendChild(d);break;default:throw Error(u(468,r))}d[cn]=e,sn(d),r=d}e.stateNode=r}else Zm(o,e.type,e.stateNode);else e.stateNode=Xm(o,r,e.memoizedProps);else d!==r?(d===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):d.count--,r===null?Zm(o,e.type,e.stateNode):Xm(o,r,e.memoizedProps)):r===null&&e.stateNode!==null&&po(e,e.memoizedProps,l.memoizedProps)}break;case 27:En(n,e),An(e),r&512&&(ln||l===null||dt(l,l.return)),l!==null&&r&4&&po(e,e.memoizedProps,l.memoizedProps);break;case 5:if(En(n,e),An(e),r&512&&(ln||l===null||dt(l,l.return)),e.flags&32){o=e.stateNode;try{Jl(o,"")}catch(ue){Le(e,e.return,ue)}}r&4&&e.stateNode!=null&&(o=e.memoizedProps,po(e,o,l!==null?l.memoizedProps:o)),r&1024&&(bo=!0);break;case 6:if(En(n,e),An(e),r&4){if(e.stateNode===null)throw Error(u(162));r=e.memoizedProps,l=e.stateNode;try{l.nodeValue=r}catch(ue){Le(e,e.return,ue)}}break;case 3:if(au=null,o=at,at=lu(n.containerInfo),En(n,e),at=o,An(e),r&4&&l!==null&&l.memoizedState.isDehydrated)try{Ci(n.containerInfo)}catch(ue){Le(e,e.return,ue)}bo&&(bo=!1,Zh(e));break;case 4:r=at,at=lu(e.stateNode.containerInfo),En(n,e),An(e),at=r;break;case 12:En(n,e),An(e);break;case 31:En(n,e),An(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Fr(e,r)));break;case 13:En(n,e),An(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Yr=bn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Fr(e,r)));break;case 22:o=e.memoizedState!==null;var E=l!==null&&l.memoizedState!==null,U=Dt,F=ln;if(Dt=U||o,ln=F||E,En(n,e),ln=F,Dt=U,An(e),r&8192)e:for(n=e.stateNode,n._visibility=o?n._visibility&-2:n._visibility|1,o&&(l===null||E||Dt||ln||Dl(e)),l=null,n=e;;){if(n.tag===5||n.tag===26){if(l===null){E=l=n;try{if(d=E.stateNode,o)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{k=E.stateNode;var X=E.memoizedProps.style,q=X!=null&&X.hasOwnProperty("display")?X.display:null;k.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(ue){Le(E,E.return,ue)}}}else if(n.tag===6){if(l===null){E=n;try{E.stateNode.nodeValue=o?"":E.memoizedProps}catch(ue){Le(E,E.return,ue)}}}else if(n.tag===18){if(l===null){E=n;try{var I=E.stateNode;o?Hm(I,!0):Hm(E.stateNode,!1)}catch(ue){Le(E,E.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;l===n&&(l=null),n=n.return}l===n&&(l=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(l=r.retryQueue,l!==null&&(r.retryQueue=null,Fr(e,l))));break;case 19:En(n,e),An(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Fr(e,r)));break;case 30:break;case 21:break;default:En(n,e),An(e)}}function An(e){var n=e.flags;if(n&2){try{for(var l,r=e.return;r!==null;){if(Vh(r)){l=r;break}r=r.return}if(l==null)throw Error(u(160));switch(l.tag){case 27:var o=l.stateNode,d=go(e);Ir(e,d,o);break;case 5:var y=l.stateNode;l.flags&32&&(Jl(y,""),l.flags&=-33);var k=go(e);Ir(e,k,y);break;case 3:case 4:var E=l.stateNode.containerInfo,U=go(e);xo(e,U,E);break;default:throw Error(u(161))}}catch(F){Le(e,e.return,F)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Rt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gh(e,n.alternate,n),n=n.sibling}function Dl(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:$t(4,n,n.return),Dl(n);break;case 1:dt(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Hh(n,n.return,l),Dl(n);break;case 27:va(n.stateNode);case 26:case 5:dt(n,n.return),Dl(n);break;case 22:n.memoizedState===null&&Dl(n);break;case 30:Dl(n);break;default:Dl(n)}e=e.sibling}}function Ot(e,n,l){for(l=l&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,o=e,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ot(o,d,l),ca(4,d);break;case 1:if(Ot(o,d,l),r=d,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(U){Le(r,r.return,U)}if(r=d,o=r.updateQueue,o!==null){var k=r.stateNode;try{var E=o.shared.hiddenCallbacks;if(E!==null)for(o.shared.hiddenCallbacks=null,o=0;o<E.length;o++)Ad(E[o],k)}catch(U){Le(r,r.return,U)}}l&&y&64&&Bh(d),fa(d,d.return);break;case 27:Ih(d);case 26:case 5:Ot(o,d,l),l&&r===null&&y&4&&qh(d),fa(d,d.return);break;case 12:Ot(o,d,l);break;case 31:Ot(o,d,l),l&&y&4&&Jh(o,d);break;case 13:Ot(o,d,l),l&&y&4&&Xh(o,d);break;case 22:d.memoizedState===null&&Ot(o,d,l),fa(d,d.return);break;case 30:break;default:Ot(o,d,l)}n=n.sibling}}function yo(e,n){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ki(l))}function vo(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ki(e))}function rt(e,n,l,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Kh(e,n,l,r),n=n.sibling}function Kh(e,n,l,r){var o=n.flags;switch(n.tag){case 0:case 11:case 15:rt(e,n,l,r),o&2048&&ca(9,n);break;case 1:rt(e,n,l,r);break;case 3:rt(e,n,l,r),o&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ki(e)));break;case 12:if(o&2048){rt(e,n,l,r),e=n.stateNode;try{var d=n.memoizedProps,y=d.id,k=d.onPostCommit;typeof k=="function"&&k(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Le(n,n.return,E)}}else rt(e,n,l,r);break;case 31:rt(e,n,l,r);break;case 13:rt(e,n,l,r);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?rt(e,n,l,r):da(e,n):d._visibility&2?rt(e,n,l,r):(d._visibility|=2,hi(e,n,l,r,(n.subtreeFlags&10256)!==0||!1)),o&2048&&yo(y,n);break;case 24:rt(e,n,l,r),o&2048&&vo(n.alternate,n);break;default:rt(e,n,l,r)}}function hi(e,n,l,r,o){for(o=o&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,y=n,k=l,E=r,U=y.flags;switch(y.tag){case 0:case 11:case 15:hi(d,y,k,E,o),ca(8,y);break;case 23:break;case 22:var F=y.stateNode;y.memoizedState!==null?F._visibility&2?hi(d,y,k,E,o):da(d,y):(F._visibility|=2,hi(d,y,k,E,o)),o&&U&2048&&yo(y.alternate,y);break;case 24:hi(d,y,k,E,o),o&&U&2048&&vo(y.alternate,y);break;default:hi(d,y,k,E,o)}n=n.sibling}}function da(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var l=e,r=n,o=r.flags;switch(r.tag){case 22:da(l,r),o&2048&&yo(r.alternate,r);break;case 24:da(l,r),o&2048&&vo(r.alternate,r);break;default:da(l,r)}n=n.sibling}}var ha=8192;function mi(e,n,l){if(e.subtreeFlags&ha)for(e=e.child;e!==null;)Wh(e,n,l),e=e.sibling}function Wh(e,n,l){switch(e.tag){case 26:mi(e,n,l),e.flags&ha&&e.memoizedState!==null&&Z0(l,at,e.memoizedState,e.memoizedProps);break;case 5:mi(e,n,l);break;case 3:case 4:var r=at;at=lu(e.stateNode.containerInfo),mi(e,n,l),at=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ha,ha=16777216,mi(e,n,l),ha=r):mi(e,n,l));break;default:mi(e,n,l)}}function $h(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ma(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var r=n[l];on=r,nm(r,e)}$h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)em(e),e=e.sibling}function em(e){switch(e.tag){case 0:case 11:case 15:ma(e),e.flags&2048&&$t(9,e,e.return);break;case 3:ma(e);break;case 12:ma(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gr(e)):ma(e);break;default:ma(e)}}function Gr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var r=n[l];on=r,nm(r,e)}$h(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:$t(8,n,n.return),Gr(n);break;case 22:l=n.stateNode,l._visibility&2&&(l._visibility&=-3,Gr(n));break;default:Gr(n)}e=e.sibling}}function nm(e,n){for(;on!==null;){var l=on;switch(l.tag){case 0:case 11:case 15:$t(8,l,n);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var r=l.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ki(l.memoizedState.cache)}if(r=l.child,r!==null)r.return=l,on=r;else e:for(l=e;on!==null;){r=on;var o=r.sibling,d=r.return;if(Yh(r),r===l){on=null;break e}if(o!==null){o.return=d,on=o;break e}on=d}}}var f0={getCacheForType:function(e){var n=dn(en),l=n.data.get(e);return l===void 0&&(l=e(),n.data.set(e,l)),l},cacheSignal:function(){return dn(en).controller.signal}},d0=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ie=null,we=null,Ae=0,ze=0,Un=null,el=!1,pi=!1,So=!1,zt=0,Ke=0,nl=0,_l=0,ko=0,Bn=0,gi=0,pa=null,jn=null,wo=!1,Yr=0,tm=0,Pr=1/0,Jr=null,tl=null,un=0,ll=null,xi=null,Lt=0,Co=0,To=null,lm=null,ga=0,Eo=null;function Hn(){return(Re&2)!==0&&Ae!==0?Ae&-Ae:B.T!==null?_o():yf()}function im(){if(Bn===0)if((Ae&536870912)===0||Me){var e=nr;nr<<=1,(nr&3932160)===0&&(nr=262144),Bn=e}else Bn=536870912;return e=zn.current,e!==null&&(e.flags|=32),Bn}function Mn(e,n,l){(e===Ie&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(bi(e,0),il(e,Ae,Bn,!1)),Ui(e,l),((Re&2)===0||e!==Ie)&&(e===Ie&&((Re&2)===0&&(_l|=l),Ke===4&&il(e,Ae,Bn,!1)),ht(e))}function am(e,n,l){if((Re&6)!==0)throw Error(u(327));var r=!l&&(n&127)===0&&(n&e.expiredLanes)===0||Li(e,n),o=r?p0(e,n):jo(e,n,!0),d=r;do{if(o===0){pi&&!r&&il(e,n,0,!1);break}else{if(l=e.current.alternate,d&&!h0(l)){o=jo(e,n,!1),d=!1;continue}if(o===2){if(d=n,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var k=e;o=pa;var E=k.current.memoizedState.isDehydrated;if(E&&(bi(k,y).flags|=256),y=jo(k,y,!1),y!==2){if(So&&!E){k.errorRecoveryDisabledLanes|=d,_l|=d,o=4;break e}d=jn,jn=o,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}o=y}if(d=!1,o!==2)continue}}if(o===1){bi(e,0),il(e,n,0,!0);break}e:{switch(r=e,d=o,d){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:il(r,n,Bn,!el);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(o=Yr+300-bn(),10<o)){if(il(r,n,Bn,!el),lr(r,0,!0)!==0)break e;Lt=n,r.timeoutHandle=Lm(rm.bind(null,r,l,jn,Jr,wo,n,Bn,_l,gi,el,d,"Throttled",-0,0),o);break e}rm(r,l,jn,Jr,wo,n,Bn,_l,gi,el,d,null,-0,0)}}break}while(!0);ht(e)}function rm(e,n,l,r,o,d,y,k,E,U,F,X,q,I){if(e.timeoutHandle=-1,X=n.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:St},Wh(n,d,X);var ue=(d&62914560)===d?Yr-bn():(d&4194048)===d?tm-bn():0;if(ue=K0(X,ue),ue!==null){Lt=d,e.cancelPendingCommit=ue(mm.bind(null,e,n,d,l,r,o,y,k,E,F,X,null,q,I)),il(e,d,y,!U);return}}mm(e,n,d,l,r,o,y,k,E)}function h0(e){for(var n=e;;){var l=n.tag;if((l===0||l===11||l===15)&&n.flags&16384&&(l=n.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var r=0;r<l.length;r++){var o=l[r],d=o.getSnapshot;o=o.value;try{if(!Rn(d(),o))return!1}catch{return!1}}if(l=n.child,n.subtreeFlags&16384&&l!==null)l.return=n,n=l;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function il(e,n,l,r){n&=~ko,n&=~_l,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var o=n;0<o;){var d=31-Ve(o),y=1<<d;r[d]=-1,o&=~y}l!==0&&gf(e,l,n)}function Xr(){return(Re&6)===0?(xa(0),!1):!0}function Ao(){if(we!==null){if(ze===0)var e=we.return;else e=we,Tt=wl=null,Is(e),si=null,$i=0,e=we;for(;e!==null;)Uh(e.alternate,e),e=e.return;we=null}}function bi(e,n){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,R0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Lt=0,Ao(),Ie=e,we=l=wt(e.current,null),Ae=n,ze=0,Un=null,el=!1,pi=Li(e,n),So=!1,gi=Bn=ko=_l=nl=Ke=0,jn=pa=null,wo=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var o=31-Ve(r),d=1<<o;n|=e[o],r&=~d}return zt=n,pr(),l}function um(e,n){ye=null,B.H=ua,n===ui||n===wr?(n=wd(),ze=3):n===Ns?(n=wd(),ze=4):ze=n===io?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Un=n,we===null&&(Ke=1,Ur(e,Pn(n,e.current)))}function sm(){var e=zn.current;return e===null?!0:(Ae&4194048)===Ae?Zn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Zn:!1}function om(){var e=B.H;return B.H=ua,e===null?ua:e}function cm(){var e=B.A;return B.A=f0,e}function Qr(){Ke=4,el||(Ae&4194048)!==Ae&&zn.current!==null||(pi=!0),(nl&134217727)===0&&(_l&134217727)===0||Ie===null||il(Ie,Ae,Bn,!1)}function jo(e,n,l){var r=Re;Re|=2;var o=om(),d=cm();(Ie!==e||Ae!==n)&&(Jr=null,bi(e,n)),n=!1;var y=Ke;e:do try{if(ze!==0&&we!==null){var k=we,E=Un;switch(ze){case 8:Ao(),y=6;break e;case 3:case 2:case 9:case 6:zn.current===null&&(n=!0);var U=ze;if(ze=0,Un=null,yi(e,k,E,U),l&&pi){y=0;break e}break;default:U=ze,ze=0,Un=null,yi(e,k,E,U)}}m0(),y=Ke;break}catch(F){um(e,F)}while(!0);return n&&e.shellSuspendCounter++,Tt=wl=null,Re=r,B.H=o,B.A=d,we===null&&(Ie=null,Ae=0,pr()),y}function m0(){for(;we!==null;)fm(we)}function p0(e,n){var l=Re;Re|=2;var r=om(),o=cm();Ie!==e||Ae!==n?(Jr=null,Pr=bn()+500,bi(e,n)):pi=Li(e,n);e:do try{if(ze!==0&&we!==null){n=we;var d=Un;n:switch(ze){case 1:ze=0,Un=null,yi(e,n,d,1);break;case 2:case 9:if(Sd(d)){ze=0,Un=null,dm(n);break}n=function(){ze!==2&&ze!==9||Ie!==e||(ze=7),ht(e)},d.then(n,n);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Sd(d)?(ze=0,Un=null,dm(n)):(ze=0,Un=null,yi(e,n,d,7));break;case 5:var y=null;switch(we.tag){case 26:y=we.memoizedState;case 5:case 27:var k=we;if(y?Km(y):k.stateNode.complete){ze=0,Un=null;var E=k.sibling;if(E!==null)we=E;else{var U=k.return;U!==null?(we=U,Zr(U)):we=null}break n}}ze=0,Un=null,yi(e,n,d,5);break;case 6:ze=0,Un=null,yi(e,n,d,6);break;case 8:Ao(),Ke=6;break e;default:throw Error(u(462))}}g0();break}catch(F){um(e,F)}while(!0);return Tt=wl=null,B.H=r,B.A=o,Re=l,we!==null?0:(Ie=null,Ae=0,pr(),Ke)}function g0(){for(;we!==null&&!qu();)fm(we)}function fm(e){var n=zh(e.alternate,e,zt);e.memoizedProps=e.pendingProps,n===null?Zr(e):we=n}function dm(e){var n=e,l=n.alternate;switch(n.tag){case 15:case 0:n=Mh(l,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=Mh(l,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Is(n);default:Uh(l,n),n=we=cd(n,zt),n=zh(l,n,zt)}e.memoizedProps=e.pendingProps,n===null?Zr(e):we=n}function yi(e,n,l,r){Tt=wl=null,Is(n),si=null,$i=0;var o=n.return;try{if(i0(e,o,n,l,Ae)){Ke=1,Ur(e,Pn(l,e.current)),we=null;return}}catch(d){if(o!==null)throw we=o,d;Ke=1,Ur(e,Pn(l,e.current)),we=null;return}n.flags&32768?(Me||r===1?e=!0:pi||(Ae&536870912)!==0?e=!1:(el=e=!0,(r===2||r===9||r===3||r===6)&&(r=zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),hm(n,e)):Zr(n)}function Zr(e){var n=e;do{if((n.flags&32768)!==0){hm(n,el);return}e=n.return;var l=u0(n.alternate,n,zt);if(l!==null){we=l;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Ke===0&&(Ke=5)}function hm(e,n){do{var l=s0(e.alternate,e);if(l!==null){l.flags&=32767,we=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=l}while(e!==null);Ke=6,we=null}function mm(e,n,l,r,o,d,y,k,E){e.cancelPendingCommit=null;do Kr();while(un!==0);if((Re&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(d=n.lanes|n.childLanes,d|=ps,Qx(e,l,d,y,k,E),e===Ie&&(we=Ie=null,Ae=0),xi=n,ll=e,Lt=l,Co=d,To=o,lm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,v0(ge,function(){return ym(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,o=Z.p,Z.p=2,y=Re,Re|=4;try{o0(e,n,l)}finally{Re=y,Z.p=o,B.T=r}}un=1,pm(),gm(),xm()}}function pm(){if(un===1){un=0;var e=ll,n=xi,l=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||l){l=B.T,B.T=null;var r=Z.p;Z.p=2;var o=Re;Re|=4;try{Qh(n,e);var d=qo,y=nd(e.containerInfo),k=d.focusedElem,E=d.selectionRange;if(y!==k&&k&&k.ownerDocument&&ed(k.ownerDocument.documentElement,k)){if(E!==null&&cs(k)){var U=E.start,F=E.end;if(F===void 0&&(F=U),"selectionStart"in k)k.selectionStart=U,k.selectionEnd=Math.min(F,k.value.length);else{var X=k.ownerDocument||document,q=X&&X.defaultView||window;if(q.getSelection){var I=q.getSelection(),ue=k.textContent.length,me=Math.min(E.start,ue),qe=E.end===void 0?me:Math.min(E.end,ue);!I.extend&&me>qe&&(y=qe,qe=me,me=y);var R=$f(k,me),N=$f(k,qe);if(R&&N&&(I.rangeCount!==1||I.anchorNode!==R.node||I.anchorOffset!==R.offset||I.focusNode!==N.node||I.focusOffset!==N.offset)){var L=X.createRange();L.setStart(R.node,R.offset),I.removeAllRanges(),me>qe?(I.addRange(L),I.extend(N.node,N.offset)):(L.setEnd(N.node,N.offset),I.addRange(L))}}}}for(X=[],I=k;I=I.parentNode;)I.nodeType===1&&X.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<X.length;k++){var J=X[k];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}ou=!!Ho,qo=Ho=null}finally{Re=o,Z.p=r,B.T=l}}e.current=n,un=2}}function gm(){if(un===2){un=0;var e=ll,n=xi,l=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||l){l=B.T,B.T=null;var r=Z.p;Z.p=2;var o=Re;Re|=4;try{Gh(e,n.alternate,n)}finally{Re=o,Z.p=r,B.T=l}}un=3}}function xm(){if(un===4||un===3){un=0,Vu();var e=ll,n=xi,l=Lt,r=lm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,xi=ll=null,bm(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(tl=null),Yu(l),n=n.stateNode,rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(yn,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,o=Z.p,Z.p=2,B.T=null;try{for(var d=e.onRecoverableError,y=0;y<r.length;y++){var k=r[y];d(k.value,{componentStack:k.stack})}}finally{B.T=n,Z.p=o}}(Lt&3)!==0&&Kr(),ht(e),o=e.pendingLanes,(l&261930)!==0&&(o&42)!==0?e===Eo?ga++:(ga=0,Eo=e):ga=0,xa(0)}}function bm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ki(n)))}function Kr(){return pm(),gm(),xm(),ym()}function ym(){if(un!==5)return!1;var e=ll,n=Co;Co=0;var l=Yu(Lt),r=B.T,o=Z.p;try{Z.p=32>l?32:l,B.T=null,l=To,To=null;var d=ll,y=Lt;if(un=0,xi=ll=null,Lt=0,(Re&6)!==0)throw Error(u(331));var k=Re;if(Re|=4,em(d.current),Kh(d,d.current,y,l),Re=k,xa(0,!1),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(yn,d)}catch{}return!0}finally{Z.p=o,B.T=r,bm(e,n)}}function vm(e,n,l){n=Pn(l,n),n=lo(e.stateNode,n,2),e=Zt(e,n,2),e!==null&&(Ui(e,2),ht(e))}function Le(e,n,l){if(e.tag===3)vm(e,e,l);else for(;n!==null;){if(n.tag===3){vm(n,e,l);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tl===null||!tl.has(r))){e=Pn(l,e),l=Sh(2),r=Zt(n,l,2),r!==null&&(kh(l,r,n,e),Ui(r,2),ht(r));break}}n=n.return}}function Mo(e,n,l){var r=e.pingCache;if(r===null){r=e.pingCache=new d0;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(l)||(So=!0,o.add(l),e=x0.bind(null,e,n,l),n.then(e,e))}function x0(e,n,l){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ie===e&&(Ae&l)===l&&(Ke===4||Ke===3&&(Ae&62914560)===Ae&&300>bn()-Yr?(Re&2)===0&&bi(e,0):ko|=l,gi===Ae&&(gi=0)),ht(e)}function Sm(e,n){n===0&&(n=pf()),e=vl(e,n),e!==null&&(Ui(e,n),ht(e))}function b0(e){var n=e.memoizedState,l=0;n!==null&&(l=n.retryLane),Sm(e,l)}function y0(e,n){var l=0;switch(e.tag){case 31:case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(l=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(u(314))}r!==null&&r.delete(n),Sm(e,l)}function v0(e,n){return ql(e,n)}var Wr=null,vi=null,No=!1,$r=!1,Do=!1,al=0;function ht(e){e!==vi&&e.next===null&&(vi===null?Wr=vi=e:vi=vi.next=e),$r=!0,No||(No=!0,k0())}function xa(e,n){if(!Do&&$r){Do=!0;do for(var l=!1,r=Wr;r!==null;){if(e!==0){var o=r.pendingLanes;if(o===0)var d=0;else{var y=r.suspendedLanes,k=r.pingedLanes;d=(1<<31-Ve(42|e)+1)-1,d&=o&~(y&~k),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(l=!0,Tm(r,d))}else d=Ae,d=lr(r,r===Ie?d:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(d&3)===0||Li(r,d)||(l=!0,Tm(r,d));r=r.next}while(l);Do=!1}}function S0(){km()}function km(){$r=No=!1;var e=0;al!==0&&_0()&&(e=al);for(var n=bn(),l=null,r=Wr;r!==null;){var o=r.next,d=wm(r,n);d===0?(r.next=null,l===null?Wr=o:l.next=o,o===null&&(vi=l)):(l=r,(e!==0||(d&3)!==0)&&($r=!0)),r=o}un!==0&&un!==5||xa(e),al!==0&&(al=0)}function wm(e,n){for(var l=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-Ve(d),k=1<<y,E=o[y];E===-1?((k&l)===0||(k&r)!==0)&&(o[y]=Xx(k,n)):E<=n&&(e.expiredLanes|=k),d&=~k}if(n=Ie,l=Ae,l=lr(e,e===n?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,l===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&zi(r),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Li(e,l)){if(n=l&-l,n===e.callbackPriority)return n;switch(r!==null&&zi(r),Yu(l)){case 2:case 8:l=te;break;case 32:l=ge;break;case 268435456:l=Oe;break;default:l=ge}return r=Cm.bind(null,e),l=ql(l,r),e.callbackPriority=n,e.callbackNode=l,n}return r!==null&&r!==null&&zi(r),e.callbackPriority=2,e.callbackNode=null,2}function Cm(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Kr()&&e.callbackNode!==l)return null;var r=Ae;return r=lr(e,e===Ie?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(am(e,r,n),wm(e,bn()),e.callbackNode!=null&&e.callbackNode===l?Cm.bind(null,e):null)}function Tm(e,n){if(Kr())return null;am(e,n,!0)}function k0(){O0(function(){(Re&6)!==0?ql(Y,S0):km()})}function _o(){if(al===0){var e=ai;e===0&&(e=er,er<<=1,(er&261888)===0&&(er=256)),al=e}return al}function Em(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ur(""+e)}function Am(e,n){var l=n.ownerDocument.createElement("input");return l.name=n.name,l.value=n.value,e.id&&l.setAttribute("form",e.id),n.parentNode.insertBefore(l,n),e=new FormData(e),l.parentNode.removeChild(l),e}function w0(e,n,l,r,o){if(n==="submit"&&l&&l.stateNode===o){var d=Em((o[wn]||null).action),y=r.submitter;y&&(n=(n=y[wn]||null)?Em(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var k=new fr("action","action",null,r,o);e.push({event:k,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(al!==0){var E=y?Am(o,y):new FormData(o);Ks(l,{pending:!0,data:E,method:o.method,action:d},null,E)}}else typeof d=="function"&&(k.preventDefault(),E=y?Am(o,y):new FormData(o),Ks(l,{pending:!0,data:E,method:o.method,action:d},d,E))},currentTarget:o}]})}}for(var Ro=0;Ro<ms.length;Ro++){var Oo=ms[Ro],C0=Oo.toLowerCase(),T0=Oo[0].toUpperCase()+Oo.slice(1);it(C0,"on"+T0)}it(id,"onAnimationEnd"),it(ad,"onAnimationIteration"),it(rd,"onAnimationStart"),it("dblclick","onDoubleClick"),it("focusin","onFocus"),it("focusout","onBlur"),it(Vb,"onTransitionRun"),it(Ib,"onTransitionStart"),it(Fb,"onTransitionCancel"),it(ud,"onTransitionEnd"),Yl("onMouseEnter",["mouseout","mouseover"]),Yl("onMouseLeave",["mouseout","mouseover"]),Yl("onPointerEnter",["pointerout","pointerover"]),Yl("onPointerLeave",["pointerout","pointerover"]),gl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gl("onBeforeInput",["compositionend","keypress","textInput","paste"]),gl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ba));function jm(e,n){n=(n&4)!==0;for(var l=0;l<e.length;l++){var r=e[l],o=r.event;r=r.listeners;e:{var d=void 0;if(n)for(var y=r.length-1;0<=y;y--){var k=r[y],E=k.instance,U=k.currentTarget;if(k=k.listener,E!==d&&o.isPropagationStopped())break e;d=k,o.currentTarget=U;try{d(o)}catch(F){mr(F)}o.currentTarget=null,d=E}else for(y=0;y<r.length;y++){if(k=r[y],E=k.instance,U=k.currentTarget,k=k.listener,E!==d&&o.isPropagationStopped())break e;d=k,o.currentTarget=U;try{d(o)}catch(F){mr(F)}o.currentTarget=null,d=E}}}}function Ce(e,n){var l=n[Pu];l===void 0&&(l=n[Pu]=new Set);var r=e+"__bubble";l.has(r)||(Mm(n,e,2,!1),l.add(r))}function zo(e,n,l){var r=0;n&&(r|=4),Mm(l,e,r,n)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Lo(e){if(!e[eu]){e[eu]=!0,kf.forEach(function(l){l!=="selectionchange"&&(E0.has(l)||zo(l,!1,e),zo(l,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[eu]||(n[eu]=!0,zo("selectionchange",!1,n))}}function Mm(e,n,l,r){switch(ip(n)){case 2:var o=ey;break;case 8:o=ny;break;default:o=Ko}l=o.bind(null,n,l,e),o=void 0,!ns||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,l,{capture:!0,passive:o}):e.addEventListener(n,l,!0):o!==void 0?e.addEventListener(n,l,{passive:o}):e.addEventListener(n,l,!1)}function Uo(e,n,l,r,o){var d=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var k=r.stateNode.containerInfo;if(k===o)break;if(y===4)for(y=r.return;y!==null;){var E=y.tag;if((E===3||E===4)&&y.stateNode.containerInfo===o)return;y=y.return}for(;k!==null;){if(y=Il(k),y===null)return;if(E=y.tag,E===5||E===6||E===26||E===27){r=d=y;continue e}k=k.parentNode}}r=r.return}Of(function(){var U=d,F=$u(l),X=[];e:{var q=sd.get(e);if(q!==void 0){var I=fr,ue=e;switch(e){case"keypress":if(or(l)===0)break e;case"keydown":case"keyup":I=yb;break;case"focusin":ue="focus",I=as;break;case"focusout":ue="blur",I=as;break;case"beforeblur":case"afterblur":I=as;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=kb;break;case id:case ad:case rd:I=cb;break;case ud:I=Cb;break;case"scroll":case"scrollend":I=ab;break;case"wheel":I=Eb;break;case"copy":case"cut":case"paste":I=db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Hf;break;case"toggle":case"beforetoggle":I=jb}var me=(n&4)!==0,qe=!me&&(e==="scroll"||e==="scrollend"),R=me?q!==null?q+"Capture":null:q;me=[];for(var N=U,L;N!==null;){var J=N;if(L=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||L===null||R===null||(J=qi(N,R),J!=null&&me.push(ya(N,J,L))),qe)break;N=N.return}0<me.length&&(q=new I(q,ue,null,l,F),X.push({event:q,listeners:me}))}}if((n&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",q&&l!==Wu&&(ue=l.relatedTarget||l.fromElement)&&(Il(ue)||ue[Vl]))break e;if((I||q)&&(q=F.window===F?F:(q=F.ownerDocument)?q.defaultView||q.parentWindow:window,I?(ue=l.relatedTarget||l.toElement,I=U,ue=ue?Il(ue):null,ue!==null&&(qe=c(ue),me=ue.tag,ue!==qe||me!==5&&me!==27&&me!==6)&&(ue=null)):(I=null,ue=U),I!==ue)){if(me=Uf,J="onMouseLeave",R="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(me=Hf,J="onPointerLeave",R="onPointerEnter",N="pointer"),qe=I==null?q:Hi(I),L=ue==null?q:Hi(ue),q=new me(J,N+"leave",I,l,F),q.target=qe,q.relatedTarget=L,J=null,Il(F)===U&&(me=new me(R,N+"enter",ue,l,F),me.target=L,me.relatedTarget=qe,J=me),qe=J,I&&ue)n:{for(me=A0,R=I,N=ue,L=0,J=R;J;J=me(J))L++;J=0;for(var fe=N;fe;fe=me(fe))J++;for(;0<L-J;)R=me(R),L--;for(;0<J-L;)N=me(N),J--;for(;L--;){if(R===N||N!==null&&R===N.alternate){me=R;break n}R=me(R),N=me(N)}me=null}else me=null;I!==null&&Nm(X,q,I,me,!1),ue!==null&&qe!==null&&Nm(X,qe,ue,me,!0)}}e:{if(q=U?Hi(U):window,I=q.nodeName&&q.nodeName.toLowerCase(),I==="select"||I==="input"&&q.type==="file")var De=Jf;else if(Yf(q))if(Xf)De=Bb;else{De=Lb;var se=zb}else I=q.nodeName,!I||I.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?U&&Ku(U.elementType)&&(De=Jf):De=Ub;if(De&&(De=De(e,U))){Pf(X,De,l,F);break e}se&&se(e,q,U),e==="focusout"&&U&&q.type==="number"&&U.memoizedProps.value!=null&&Zu(q,"number",q.value)}switch(se=U?Hi(U):window,e){case"focusin":(Yf(se)||se.contentEditable==="true")&&(Kl=se,fs=U,Xi=null);break;case"focusout":Xi=fs=Kl=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,td(X,l,F);break;case"selectionchange":if(qb)break;case"keydown":case"keyup":td(X,l,F)}var ve;if(us)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Zl?Ff(e,l)&&(je="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(je="onCompositionStart");je&&(qf&&l.locale!=="ko"&&(Zl||je!=="onCompositionStart"?je==="onCompositionEnd"&&Zl&&(ve=zf()):(Ft=F,ts="value"in Ft?Ft.value:Ft.textContent,Zl=!0)),se=nu(U,je),0<se.length&&(je=new Bf(je,e,null,l,F),X.push({event:je,listeners:se}),ve?je.data=ve:(ve=Gf(l),ve!==null&&(je.data=ve)))),(ve=Nb?Db(e,l):_b(e,l))&&(je=nu(U,"onBeforeInput"),0<je.length&&(se=new Bf("onBeforeInput","beforeinput",null,l,F),X.push({event:se,listeners:je}),se.data=ve)),w0(X,e,U,l,F)}jm(X,n)})}function ya(e,n,l){return{instance:e,listener:n,currentTarget:l}}function nu(e,n){for(var l=n+"Capture",r=[];e!==null;){var o=e,d=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||d===null||(o=qi(e,l),o!=null&&r.unshift(ya(e,o,d)),o=qi(e,n),o!=null&&r.push(ya(e,o,d))),e.tag===3)return r;e=e.return}return[]}function A0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nm(e,n,l,r,o){for(var d=n._reactName,y=[];l!==null&&l!==r;){var k=l,E=k.alternate,U=k.stateNode;if(k=k.tag,E!==null&&E===r)break;k!==5&&k!==26&&k!==27||U===null||(E=U,o?(U=qi(l,d),U!=null&&y.unshift(ya(l,U,E))):o||(U=qi(l,d),U!=null&&y.push(ya(l,U,E)))),l=l.return}y.length!==0&&e.push({event:n,listeners:y})}var j0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function Dm(e){return(typeof e=="string"?e:""+e).replace(j0,`
`).replace(M0,"")}function _m(e,n){return n=Dm(n),Dm(e)===n}function He(e,n,l,r,o,d){switch(l){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Jl(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Jl(e,""+r);break;case"className":ar(e,"class",r);break;case"tabIndex":ar(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ar(e,l,r);break;case"style":_f(e,r,d);break;case"data":if(n!=="object"){ar(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||l!=="href")){e.removeAttribute(l);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(l);break}r=ur(""+r),e.setAttribute(l,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(l==="formAction"?(n!=="input"&&He(e,n,"name",o.name,o,null),He(e,n,"formEncType",o.formEncType,o,null),He(e,n,"formMethod",o.formMethod,o,null),He(e,n,"formTarget",o.formTarget,o,null)):(He(e,n,"encType",o.encType,o,null),He(e,n,"method",o.method,o,null),He(e,n,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(l);break}r=ur(""+r),e.setAttribute(l,r);break;case"onClick":r!=null&&(e.onclick=St);break;case"onScroll":r!=null&&Ce("scroll",e);break;case"onScrollEnd":r!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(l=r.__html,l!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}l=ur(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(l,""+r):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":r===!0?e.setAttribute(l,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(l,r):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(l,r):e.removeAttribute(l);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(l):e.setAttribute(l,r);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),ir(e,"popover",r);break;case"xlinkActuate":vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":vt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":vt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":vt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":vt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ir(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=lb.get(l)||l,ir(e,l,r))}}function Bo(e,n,l,r,o,d){switch(l){case"style":_f(e,r,d);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(l=r.__html,l!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=l}}break;case"children":typeof r=="string"?Jl(e,r):(typeof r=="number"||typeof r=="bigint")&&Jl(e,""+r);break;case"onScroll":r!=null&&Ce("scroll",e);break;case"onScrollEnd":r!=null&&Ce("scrollend",e);break;case"onClick":r!=null&&(e.onclick=St);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(o=l.endsWith("Capture"),n=l.slice(2,o?l.length-7:void 0),d=e[wn]||null,d=d!=null?d[l]:null,typeof d=="function"&&e.removeEventListener(n,d,o),typeof r=="function")){typeof d!="function"&&d!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(n,r,o);break e}l in e?e[l]=r:r===!0?e.setAttribute(l,""):ir(e,l,r)}}}function mn(e,n,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var r=!1,o=!1,d;for(d in l)if(l.hasOwnProperty(d)){var y=l[d];if(y!=null)switch(d){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:He(e,n,d,y,l,null)}}o&&He(e,n,"srcSet",l.srcSet,l,null),r&&He(e,n,"src",l.src,l,null);return;case"input":Ce("invalid",e);var k=d=y=o=null,E=null,U=null;for(r in l)if(l.hasOwnProperty(r)){var F=l[r];if(F!=null)switch(r){case"name":o=F;break;case"type":y=F;break;case"checked":E=F;break;case"defaultChecked":U=F;break;case"value":d=F;break;case"defaultValue":k=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(u(137,n));break;default:He(e,n,r,F,l,null)}}jf(e,d,k,E,U,y,o,!1);return;case"select":Ce("invalid",e),r=y=d=null;for(o in l)if(l.hasOwnProperty(o)&&(k=l[o],k!=null))switch(o){case"value":d=k;break;case"defaultValue":y=k;break;case"multiple":r=k;default:He(e,n,o,k,l,null)}n=d,l=y,e.multiple=!!r,n!=null?Pl(e,!!r,n,!1):l!=null&&Pl(e,!!r,l,!0);return;case"textarea":Ce("invalid",e),d=o=r=null;for(y in l)if(l.hasOwnProperty(y)&&(k=l[y],k!=null))switch(y){case"value":r=k;break;case"defaultValue":o=k;break;case"children":d=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(91));break;default:He(e,n,y,k,l,null)}Nf(e,r,o,d);return;case"option":for(E in l)if(l.hasOwnProperty(E)&&(r=l[E],r!=null))switch(E){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:He(e,n,E,r,l,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(r=0;r<ba.length;r++)Ce(ba[r],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in l)if(l.hasOwnProperty(U)&&(r=l[U],r!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:He(e,n,U,r,l,null)}return;default:if(Ku(n)){for(F in l)l.hasOwnProperty(F)&&(r=l[F],r!==void 0&&Bo(e,n,F,r,l,void 0));return}}for(k in l)l.hasOwnProperty(k)&&(r=l[k],r!=null&&He(e,n,k,r,l,null))}function N0(e,n,l,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,d=null,y=null,k=null,E=null,U=null,F=null;for(I in l){var X=l[I];if(l.hasOwnProperty(I)&&X!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":E=X;default:r.hasOwnProperty(I)||He(e,n,I,null,r,X)}}for(var q in r){var I=r[q];if(X=l[q],r.hasOwnProperty(q)&&(I!=null||X!=null))switch(q){case"type":d=I;break;case"name":o=I;break;case"checked":U=I;break;case"defaultChecked":F=I;break;case"value":y=I;break;case"defaultValue":k=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(u(137,n));break;default:I!==X&&He(e,n,q,I,r,X)}}Qu(e,y,k,E,U,F,d,o);return;case"select":I=y=k=q=null;for(d in l)if(E=l[d],l.hasOwnProperty(d)&&E!=null)switch(d){case"value":break;case"multiple":I=E;default:r.hasOwnProperty(d)||He(e,n,d,null,r,E)}for(o in r)if(d=r[o],E=l[o],r.hasOwnProperty(o)&&(d!=null||E!=null))switch(o){case"value":q=d;break;case"defaultValue":k=d;break;case"multiple":y=d;default:d!==E&&He(e,n,o,d,r,E)}n=k,l=y,r=I,q!=null?Pl(e,!!l,q,!1):!!r!=!!l&&(n!=null?Pl(e,!!l,n,!0):Pl(e,!!l,l?[]:"",!1));return;case"textarea":I=q=null;for(k in l)if(o=l[k],l.hasOwnProperty(k)&&o!=null&&!r.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:He(e,n,k,null,r,o)}for(y in r)if(o=r[y],d=l[y],r.hasOwnProperty(y)&&(o!=null||d!=null))switch(y){case"value":q=o;break;case"defaultValue":I=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==d&&He(e,n,y,o,r,d)}Mf(e,q,I);return;case"option":for(var ue in l)if(q=l[ue],l.hasOwnProperty(ue)&&q!=null&&!r.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:He(e,n,ue,null,r,q)}for(E in r)if(q=r[E],I=l[E],r.hasOwnProperty(E)&&q!==I&&(q!=null||I!=null))switch(E){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:He(e,n,E,q,r,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in l)q=l[me],l.hasOwnProperty(me)&&q!=null&&!r.hasOwnProperty(me)&&He(e,n,me,null,r,q);for(U in r)if(q=r[U],I=l[U],r.hasOwnProperty(U)&&q!==I&&(q!=null||I!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(u(137,n));break;default:He(e,n,U,q,r,I)}return;default:if(Ku(n)){for(var qe in l)q=l[qe],l.hasOwnProperty(qe)&&q!==void 0&&!r.hasOwnProperty(qe)&&Bo(e,n,qe,void 0,r,q);for(F in r)q=r[F],I=l[F],!r.hasOwnProperty(F)||q===I||q===void 0&&I===void 0||Bo(e,n,F,q,r,I);return}}for(var R in l)q=l[R],l.hasOwnProperty(R)&&q!=null&&!r.hasOwnProperty(R)&&He(e,n,R,null,r,q);for(X in r)q=r[X],I=l[X],!r.hasOwnProperty(X)||q===I||q==null&&I==null||He(e,n,X,q,r,I)}function Rm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function D0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,l=performance.getEntriesByType("resource"),r=0;r<l.length;r++){var o=l[r],d=o.transferSize,y=o.initiatorType,k=o.duration;if(d&&k&&Rm(y)){for(y=0,k=o.responseEnd,r+=1;r<l.length;r++){var E=l[r],U=E.startTime;if(U>k)break;var F=E.transferSize,X=E.initiatorType;F&&Rm(X)&&(E=E.responseEnd,y+=F*(E<k?1:(k-U)/(E-U)))}if(--r,n+=8*(d+y)/(o.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ho=null,qo=null;function tu(e){return e.nodeType===9?e:e.ownerDocument}function Om(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Io=null;function _0(){var e=window.event;return e&&e.type==="popstate"?e===Io?!1:(Io=e,!0):(Io=null,!1)}var Lm=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,O0=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(e){return Um.resolve(null).then(e).catch(z0)}:Lm;function z0(e){setTimeout(function(){throw e})}function rl(e){return e==="head"}function Bm(e,n){var l=n,r=0;do{var o=l.nextSibling;if(e.removeChild(l),o&&o.nodeType===8)if(l=o.data,l==="/$"||l==="/&"){if(r===0){e.removeChild(o),Ci(n);return}r--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")r++;else if(l==="html")va(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,va(l);for(var d=l.firstChild;d;){var y=d.nextSibling,k=d.nodeName;d[Bi]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&d.rel.toLowerCase()==="stylesheet"||l.removeChild(d),d=y}}else l==="body"&&va(e.ownerDocument.body);l=o}while(l);Ci(n)}function Hm(e,n){var l=e;e=0;do{var r=l.nextSibling;if(l.nodeType===1?n?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(n?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),r&&r.nodeType===8)if(l=r.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=r}while(l)}function Fo(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var l=n;switch(n=n.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Fo(l),Ju(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function L0(e,n,l,r){for(;e.nodeType===1;){var o=l;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Bi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Kn(e.nextSibling),e===null)break}return null}function U0(e,n,l){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Kn(e.nextSibling),e===null))return null;return e}function qm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kn(e.nextSibling),e===null))return null;return e}function Go(e){return e.data==="$?"||e.data==="$~"}function Yo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function B0(e,n){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||l.readyState!=="loading")n();else{var r=function(){n(),l.removeEventListener("DOMContentLoaded",r)};l.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Po=null;function Vm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(n===0)return Kn(e.nextSibling);n--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||n++}e=e.nextSibling}return null}function Im(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(n===0)return e;n--}else l!=="/$"&&l!=="/&"||n++}e=e.previousSibling}return null}function Fm(e,n,l){switch(n=tu(l),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function va(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ju(e)}var Wn=new Map,Gm=new Set;function lu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ut=Z.d;Z.d={f:H0,r:q0,D:V0,C:I0,L:F0,m:G0,X:P0,S:Y0,M:J0};function H0(){var e=Ut.f(),n=Xr();return e||n}function q0(e){var n=Fl(e);n!==null&&n.tag===5&&n.type==="form"?uh(n):Ut.r(e)}var Si=typeof document>"u"?null:document;function Ym(e,n,l){var r=Si;if(r&&typeof n=="string"&&n){var o=Gn(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof l=="string"&&(o+='[crossorigin="'+l+'"]'),Gm.has(o)||(Gm.add(o),e={rel:e,crossOrigin:l,href:n},r.querySelector(o)===null&&(n=r.createElement("link"),mn(n,"link",e),sn(n),r.head.appendChild(n)))}}function V0(e){Ut.D(e),Ym("dns-prefetch",e,null)}function I0(e,n){Ut.C(e,n),Ym("preconnect",e,n)}function F0(e,n,l){Ut.L(e,n,l);var r=Si;if(r&&e&&n){var o='link[rel="preload"][as="'+Gn(n)+'"]';n==="image"&&l&&l.imageSrcSet?(o+='[imagesrcset="'+Gn(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(o+='[imagesizes="'+Gn(l.imageSizes)+'"]')):o+='[href="'+Gn(e)+'"]';var d=o;switch(n){case"style":d=ki(e);break;case"script":d=wi(e)}Wn.has(d)||(e=g({rel:"preload",href:n==="image"&&l&&l.imageSrcSet?void 0:e,as:n},l),Wn.set(d,e),r.querySelector(o)!==null||n==="style"&&r.querySelector(Sa(d))||n==="script"&&r.querySelector(ka(d))||(n=r.createElement("link"),mn(n,"link",e),sn(n),r.head.appendChild(n)))}}function G0(e,n){Ut.m(e,n);var l=Si;if(l&&e){var r=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+Gn(r)+'"][href="'+Gn(e)+'"]',d=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=wi(e)}if(!Wn.has(d)&&(e=g({rel:"modulepreload",href:e},n),Wn.set(d,e),l.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ka(d)))return}r=l.createElement("link"),mn(r,"link",e),sn(r),l.head.appendChild(r)}}}function Y0(e,n,l){Ut.S(e,n,l);var r=Si;if(r&&e){var o=Gl(r).hoistableStyles,d=ki(e);n=n||"default";var y=o.get(d);if(!y){var k={loading:0,preload:null};if(y=r.querySelector(Sa(d)))k.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},l),(l=Wn.get(d))&&Jo(e,l);var E=y=r.createElement("link");sn(E),mn(E,"link",e),E._p=new Promise(function(U,F){E.onload=U,E.onerror=F}),E.addEventListener("load",function(){k.loading|=1}),E.addEventListener("error",function(){k.loading|=2}),k.loading|=4,iu(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:k},o.set(d,y)}}}function P0(e,n){Ut.X(e,n);var l=Si;if(l&&e){var r=Gl(l).hoistableScripts,o=wi(e),d=r.get(o);d||(d=l.querySelector(ka(o)),d||(e=g({src:e,async:!0},n),(n=Wn.get(o))&&Xo(e,n),d=l.createElement("script"),sn(d),mn(d,"link",e),l.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(o,d))}}function J0(e,n){Ut.M(e,n);var l=Si;if(l&&e){var r=Gl(l).hoistableScripts,o=wi(e),d=r.get(o);d||(d=l.querySelector(ka(o)),d||(e=g({src:e,async:!0,type:"module"},n),(n=Wn.get(o))&&Xo(e,n),d=l.createElement("script"),sn(d),mn(d,"link",e),l.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(o,d))}}function Pm(e,n,l,r){var o=(o=ce.current)?lu(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(n=ki(l.href),l=Gl(o).hoistableStyles,r=l.get(n),r||(r={type:"style",instance:null,count:0,state:null},l.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=ki(l.href);var d=Gl(o).hoistableStyles,y=d.get(e);if(y||(o=o.ownerDocument||o,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=o.querySelector(Sa(e)))&&!d._p&&(y.instance=d,y.state.loading=5),Wn.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Wn.set(e,l),d||X0(o,e,l,y.state))),n&&r===null)throw Error(u(528,""));return y}if(n&&r!==null)throw Error(u(529,""));return null;case"script":return n=l.async,l=l.src,typeof l=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=wi(l),l=Gl(o).hoistableScripts,r=l.get(n),r||(r={type:"script",instance:null,count:0,state:null},l.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ki(e){return'href="'+Gn(e)+'"'}function Sa(e){return'link[rel="stylesheet"]['+e+"]"}function Jm(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function X0(e,n,l,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),mn(n,"link",l),sn(n),e.head.appendChild(n))}function wi(e){return'[src="'+Gn(e)+'"]'}function ka(e){return"script[async]"+e}function Xm(e,n,l){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Gn(l.href)+'"]');if(r)return n.instance=r,sn(r),r;var o=g({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),sn(r),mn(r,"style",o),iu(r,l.precedence,e),n.instance=r;case"stylesheet":o=ki(l.href);var d=e.querySelector(Sa(o));if(d)return n.state.loading|=4,n.instance=d,sn(d),d;r=Jm(l),(o=Wn.get(o))&&Jo(r,o),d=(e.ownerDocument||e).createElement("link"),sn(d);var y=d;return y._p=new Promise(function(k,E){y.onload=k,y.onerror=E}),mn(d,"link",r),n.state.loading|=4,iu(d,l.precedence,e),n.instance=d;case"script":return d=wi(l.src),(o=e.querySelector(ka(d)))?(n.instance=o,sn(o),o):(r=l,(o=Wn.get(d))&&(r=g({},l),Xo(r,o)),e=e.ownerDocument||e,o=e.createElement("script"),sn(o),mn(o,"link",r),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,iu(r,l.precedence,e));return n.instance}function iu(e,n,l){for(var r=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,d=o,y=0;y<r.length;y++){var k=r[y];if(k.dataset.precedence===n)d=k;else if(d!==o)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=l.nodeType===9?l.head:l,n.insertBefore(e,n.firstChild))}function Jo(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xo(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var au=null;function Qm(e,n,l){if(au===null){var r=new Map,o=au=new Map;o.set(l,r)}else o=au,r=o.get(l),r||(r=new Map,o.set(l,r));if(r.has(e))return r;for(r.set(e,null),l=l.getElementsByTagName(e),o=0;o<l.length;o++){var d=l[o];if(!(d[Bi]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=e+y;var k=r.get(y);k?k.push(d):r.set(y,[d])}}return r}function Zm(e,n,l){e=e.ownerDocument||e,e.head.insertBefore(l,n==="title"?e.querySelector("head > title"):null)}function Q0(e,n,l){if(l===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Km(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Z0(e,n,l,r){if(l.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var o=ki(r.href),d=n.querySelector(Sa(o));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ru.bind(e),n.then(e,e)),l.state.loading|=4,l.instance=d,sn(d);return}d=n.ownerDocument||n,r=Jm(r),(o=Wn.get(o))&&Jo(r,o),d=d.createElement("link"),sn(d);var y=d;y._p=new Promise(function(k,E){y.onload=k,y.onerror=E}),mn(d,"link",r),l.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,n),(n=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=ru.bind(e),n.addEventListener("load",l),n.addEventListener("error",l))}}var Qo=0;function K0(e,n){return e.stylesheets&&e.count===0&&su(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var r=setTimeout(function(){if(e.stylesheets&&su(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Qo===0&&(Qo=62500*D0());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&su(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Qo?50:800)+n);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(o)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)su(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uu=null;function su(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uu=new Map,n.forEach(W0,e),uu=null,ru.call(e))}function W0(e,n){if(!(n.state.loading&4)){var l=uu.get(e);if(l)var r=l.get(null);else{l=new Map,uu.set(e,l);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<o.length;d++){var y=o[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(l.set(y.dataset.precedence,y),r=y)}r&&l.set(null,r)}o=n.instance,y=o.getAttribute("data-precedence"),d=l.get(y)||r,d===r&&l.set(null,o),l.set(y,o),this.count++,r=ru.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),d?d.parentNode.insertBefore(o,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var wa={$$typeof:D,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function $0(e,n,l,r,o,d,y,k,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.hiddenUpdates=Fu(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Wm(e,n,l,r,o,d,y,k,E,U,F,X){return e=new $0(e,n,l,y,E,U,F,X,k),n=1,d===!0&&(n|=24),d=On(3,null,null,n),e.current=d,d.stateNode=e,n=As(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:r,isDehydrated:l,cache:n},Ds(d),e}function $m(e){return e?(e=ei,e):ei}function ep(e,n,l,r,o,d){o=$m(o),r.context===null?r.context=o:r.pendingContext=o,r=Qt(n),r.payload={element:l},d=d===void 0?null:d,d!==null&&(r.callback=d),l=Zt(e,r,n),l!==null&&(Mn(l,e,n),na(l,e,n))}function np(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<n?l:n}}function Zo(e,n){np(e,n),(e=e.alternate)&&np(e,n)}function tp(e){if(e.tag===13||e.tag===31){var n=vl(e,67108864);n!==null&&Mn(n,e,67108864),Zo(e,67108864)}}function lp(e){if(e.tag===13||e.tag===31){var n=Hn();n=Gu(n);var l=vl(e,n);l!==null&&Mn(l,e,n),Zo(e,n)}}var ou=!0;function ey(e,n,l,r){var o=B.T;B.T=null;var d=Z.p;try{Z.p=2,Ko(e,n,l,r)}finally{Z.p=d,B.T=o}}function ny(e,n,l,r){var o=B.T;B.T=null;var d=Z.p;try{Z.p=8,Ko(e,n,l,r)}finally{Z.p=d,B.T=o}}function Ko(e,n,l,r){if(ou){var o=Wo(r);if(o===null)Uo(e,n,r,cu,l),ap(e,r);else if(ly(o,e,n,l,r))r.stopPropagation();else if(ap(e,r),n&4&&-1<ty.indexOf(e)){for(;o!==null;){var d=Fl(o);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=pl(d.pendingLanes);if(y!==0){var k=d;for(k.pendingLanes|=2,k.entangledLanes|=2;y;){var E=1<<31-Ve(y);k.entanglements[1]|=E,y&=~E}ht(d),(Re&6)===0&&(Pr=bn()+500,xa(0))}}break;case 31:case 13:k=vl(d,2),k!==null&&Mn(k,d,2),Xr(),Zo(d,2)}if(d=Wo(r),d===null&&Uo(e,n,r,cu,l),d===o)break;o=d}o!==null&&r.stopPropagation()}else Uo(e,n,r,null,l)}}function Wo(e){return e=$u(e),$o(e)}var cu=null;function $o(e){if(cu=null,e=Il(e),e!==null){var n=c(e);if(n===null)e=null;else{var l=n.tag;if(l===13){if(e=f(n),e!==null)return e;e=null}else if(l===31){if(e=m(n),e!==null)return e;e=null}else if(l===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cu=e,null}function ip(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Iu()){case Y:return 2;case te:return 8;case ge:case ke:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var ec=!1,ul=null,sl=null,ol=null,Ca=new Map,Ta=new Map,cl=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ap(e,n){switch(e){case"focusin":case"focusout":ul=null;break;case"dragenter":case"dragleave":sl=null;break;case"mouseover":case"mouseout":ol=null;break;case"pointerover":case"pointerout":Ca.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(n.pointerId)}}function Ea(e,n,l,r,o,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:l,eventSystemFlags:r,nativeEvent:d,targetContainers:[o]},n!==null&&(n=Fl(n),n!==null&&tp(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function ly(e,n,l,r,o){switch(n){case"focusin":return ul=Ea(ul,e,n,l,r,o),!0;case"dragenter":return sl=Ea(sl,e,n,l,r,o),!0;case"mouseover":return ol=Ea(ol,e,n,l,r,o),!0;case"pointerover":var d=o.pointerId;return Ca.set(d,Ea(Ca.get(d)||null,e,n,l,r,o)),!0;case"gotpointercapture":return d=o.pointerId,Ta.set(d,Ea(Ta.get(d)||null,e,n,l,r,o)),!0}return!1}function rp(e){var n=Il(e.target);if(n!==null){var l=c(n);if(l!==null){if(n=l.tag,n===13){if(n=f(l),n!==null){e.blockedOn=n,vf(e.priority,function(){lp(l)});return}}else if(n===31){if(n=m(l),n!==null){e.blockedOn=n,vf(e.priority,function(){lp(l)});return}}else if(n===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var l=Wo(e.nativeEvent);if(l===null){l=e.nativeEvent;var r=new l.constructor(l.type,l);Wu=r,l.target.dispatchEvent(r),Wu=null}else return n=Fl(l),n!==null&&tp(n),e.blockedOn=l,!1;n.shift()}return!0}function up(e,n,l){fu(e)&&l.delete(n)}function iy(){ec=!1,ul!==null&&fu(ul)&&(ul=null),sl!==null&&fu(sl)&&(sl=null),ol!==null&&fu(ol)&&(ol=null),Ca.forEach(up),Ta.forEach(up)}function du(e,n){e.blockedOn===n&&(e.blockedOn=null,ec||(ec=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,iy)))}var hu=null;function sp(e){hu!==e&&(hu=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){hu===e&&(hu=null);for(var n=0;n<e.length;n+=3){var l=e[n],r=e[n+1],o=e[n+2];if(typeof r!="function"){if($o(r||l)===null)continue;break}var d=Fl(l);d!==null&&(e.splice(n,3),n-=3,Ks(d,{pending:!0,data:o,method:l.method,action:r},r,o))}}))}function Ci(e){function n(E){return du(E,e)}ul!==null&&du(ul,e),sl!==null&&du(sl,e),ol!==null&&du(ol,e),Ca.forEach(n),Ta.forEach(n);for(var l=0;l<cl.length;l++){var r=cl[l];r.blockedOn===e&&(r.blockedOn=null)}for(;0<cl.length&&(l=cl[0],l.blockedOn===null);)rp(l),l.blockedOn===null&&cl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(r=0;r<l.length;r+=3){var o=l[r],d=l[r+1],y=o[wn]||null;if(typeof d=="function")y||sp(l);else if(y){var k=null;if(d&&d.hasAttribute("formAction")){if(o=d,y=d[wn]||null)k=y.formAction;else if($o(o)!==null)continue}else k=y.action;typeof k=="function"?l[r+1]=k:(l.splice(r,3),r-=3),sp(l)}}}function op(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return o=y})},focusReset:"manual",scroll:"manual"})}function n(){o!==null&&(o(),o=null),r||setTimeout(l,20)}function l(){if(!r&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(l,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),o!==null&&(o(),o=null)}}}function nc(e){this._internalRoot=e}mu.prototype.render=nc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var l=n.current,r=Hn();ep(l,r,e,n,null,null)},mu.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ep(e.current,2,null,e,null,null),Xr(),n[Vl]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var n=yf();e={blockedOn:null,target:e,priority:n};for(var l=0;l<cl.length&&n!==0&&n<cl[l].priority;l++);cl.splice(l,0,e),l===0&&rp(e)}};var cp=a.version;if(cp!=="19.2.0")throw Error(u(527,cp,"19.2.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(n),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var ay={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{yn=pu.inject(ay),rn=pu}catch{}}return ja.createRoot=function(e,n){if(!s(e))throw Error(u(299));var l=!1,r="",o=xh,d=bh,y=yh;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Wm(e,1,!1,null,null,l,r,null,o,d,y,op),e[Vl]=n.current,Lo(e),new nc(n)},ja.hydrateRoot=function(e,n,l){if(!s(e))throw Error(u(299));var r=!1,o="",d=xh,y=bh,k=yh,E=null;return l!=null&&(l.unstable_strictMode===!0&&(r=!0),l.identifierPrefix!==void 0&&(o=l.identifierPrefix),l.onUncaughtError!==void 0&&(d=l.onUncaughtError),l.onCaughtError!==void 0&&(y=l.onCaughtError),l.onRecoverableError!==void 0&&(k=l.onRecoverableError),l.formState!==void 0&&(E=l.formState)),n=Wm(e,1,!0,n,l??null,r,o,E,d,y,k,op),n.context=$m(null),l=n.current,r=Hn(),r=Gu(r),o=Qt(r),o.callback=null,Zt(l,o,r),l=r,n.current.lanes=l,Ui(n,l),ht(n),e[Vl]=n.current,Lo(e),new mu(n)},ja.version="19.2.0",ja}var vp;function py(){if(vp)return lc.exports;vp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),lc.exports=my(),lc.exports}var gy=py(),_=Gc();const Eu=Fc(_);var Sp="popstate";function xy(t={}){function a(u,s){let{pathname:c,search:f,hash:m}=u.location;return Nc("",{pathname:c,search:f,hash:m},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(u,s){return typeof s=="string"?s:Va(s)}return yy(a,i,null,t)}function Qe(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function st(t,a){if(!t){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function by(){return Math.random().toString(36).substring(2,10)}function kp(t,a){return{usr:t.state,key:t.key,idx:a}}function Nc(t,a,i=null,u){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof a=="string"?Ni(a):a,state:i,key:a&&a.key||u||by()}}function Va({pathname:t="/",search:a="",hash:i=""}){return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Ni(t){let a={};if(t){let i=t.indexOf("#");i>=0&&(a.hash=t.substring(i),t=t.substring(0,i));let u=t.indexOf("?");u>=0&&(a.search=t.substring(u),t=t.substring(0,u)),t&&(a.pathname=t)}return a}function yy(t,a,i,u={}){let{window:s=document.defaultView,v5Compat:c=!1}=u,f=s.history,m="POP",p=null,h=b();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function b(){return(f.state||{idx:null}).idx}function g(){m="POP";let z=b(),j=z==null?null:z-h;h=z,p&&p({action:m,location:O.location,delta:j})}function S(z,j){m="PUSH";let H=Nc(O.location,z,j);h=b()+1;let D=kp(H,h),K=O.createHref(H);try{f.pushState(D,"",K)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;s.location.assign(K)}c&&p&&p({action:m,location:O.location,delta:1})}function v(z,j){m="REPLACE";let H=Nc(O.location,z,j);h=b();let D=kp(H,h),K=O.createHref(H);f.replaceState(D,"",K),c&&p&&p({action:m,location:O.location,delta:0})}function C(z){return vy(z)}let O={get action(){return m},get location(){return t(s,f)},listen(z){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(Sp,g),p=z,()=>{s.removeEventListener(Sp,g),p=null}},createHref(z){return a(s,z)},createURL:C,encodeLocation(z){let j=C(z);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:S,replace:v,go(z){return f.go(z)}};return O}function vy(t,a=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(i,"No window.location.(origin|href) available to create URL");let u=typeof t=="string"?t:Va(t);return u=u.replace(/ $/,"%20"),!a&&u.startsWith("//")&&(u=i+u),new URL(u,i)}function Cg(t,a,i="/"){return Sy(t,a,i,!1)}function Sy(t,a,i,u){let s=typeof a=="string"?Ni(a):a,c=Ht(s.pathname||"/",i);if(c==null)return null;let f=Tg(t);ky(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let h=Ry(c);m=Dy(f[p],h,u)}return m}function Tg(t,a=[],i=[],u="",s=!1){let c=(f,m,p=s,h)=>{let b={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(u)&&p)return;Qe(b.relativePath.startsWith(u),`Absolute route path "${b.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(u.length)}let g=Bt([u,b.relativePath]),S=i.concat(b);f.children&&f.children.length>0&&(Qe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Tg(f.children,a,S,g,p)),!(f.path==null&&!f.index)&&a.push({path:g,score:My(g,f.index),routesMeta:S})};return t.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))c(f,m);else for(let p of Eg(f.path))c(f,m,!0,p)}),a}function Eg(t){let a=t.split("/");if(a.length===0)return[];let[i,...u]=a,s=i.endsWith("?"),c=i.replace(/\?$/,"");if(u.length===0)return s?[c,""]:[c];let f=Eg(u.join("/")),m=[];return m.push(...f.map(p=>p===""?c:[c,p].join("/"))),s&&m.push(...f),m.map(p=>t.startsWith("/")&&p===""?"/":p)}function ky(t){t.sort((a,i)=>a.score!==i.score?i.score-a.score:Ny(a.routesMeta.map(u=>u.childrenIndex),i.routesMeta.map(u=>u.childrenIndex)))}var wy=/^:[\w-]+$/,Cy=3,Ty=2,Ey=1,Ay=10,jy=-2,wp=t=>t==="*";function My(t,a){let i=t.split("/"),u=i.length;return i.some(wp)&&(u+=jy),a&&(u+=Ty),i.filter(s=>!wp(s)).reduce((s,c)=>s+(wy.test(c)?Cy:c===""?Ey:Ay),u)}function Ny(t,a){return t.length===a.length&&t.slice(0,-1).every((u,s)=>u===a[s])?t[t.length-1]-a[a.length-1]:0}function Dy(t,a,i=!1){let{routesMeta:u}=t,s={},c="/",f=[];for(let m=0;m<u.length;++m){let p=u[m],h=m===u.length-1,b=c==="/"?a:a.slice(c.length)||"/",g=Au({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},b),S=p.route;if(!g&&h&&i&&!u[u.length-1].route.index&&(g=Au({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},b)),!g)return null;Object.assign(s,g.params),f.push({params:s,pathname:Bt([c,g.pathname]),pathnameBase:By(Bt([c,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(c=Bt([c,g.pathnameBase]))}return f}function Au(t,a){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,u]=_y(t.path,t.caseSensitive,t.end),s=a.match(i);if(!s)return null;let c=s[0],f=c.replace(/(.)\/+$/,"$1"),m=s.slice(1);return{params:u.reduce((h,{paramName:b,isOptional:g},S)=>{if(b==="*"){let C=m[S]||"";f=c.slice(0,c.length-C.length).replace(/(.)\/+$/,"$1")}const v=m[S];return g&&!v?h[b]=void 0:h[b]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:t}}function _y(t,a=!1,i=!0){st(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let u=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(u.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(u.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,a?void 0:"i"),u]}function Ry(t){try{return t.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return st(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),t}}function Ht(t,a){if(a==="/")return t;if(!t.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,u=t.charAt(i);return u&&u!=="/"?null:t.slice(i)||"/"}var Oy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zy=t=>Oy.test(t);function Ly(t,a="/"){let{pathname:i,search:u="",hash:s=""}=typeof t=="string"?Ni(t):t,c;if(i)if(zy(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),st(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Cp(i.substring(1),"/"):c=Cp(i,a)}else c=a;return{pathname:c,search:Hy(u),hash:qy(s)}}function Cp(t,a){let i=a.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function sc(t,a,i,u){return`Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uy(t){return t.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function Ag(t){let a=Uy(t);return a.map((i,u)=>u===a.length-1?i.pathname:i.pathnameBase)}function jg(t,a,i,u=!1){let s;typeof t=="string"?s=Ni(t):(s={...t},Qe(!s.pathname||!s.pathname.includes("?"),sc("?","pathname","search",s)),Qe(!s.pathname||!s.pathname.includes("#"),sc("#","pathname","hash",s)),Qe(!s.search||!s.search.includes("#"),sc("#","search","hash",s)));let c=t===""||s.pathname==="",f=c?"/":s.pathname,m;if(f==null)m=i;else{let g=a.length-1;if(!u&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),g-=1;s.pathname=S.join("/")}m=g>=0?a[g]:"/"}let p=Ly(s,m),h=f&&f!=="/"&&f.endsWith("/"),b=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(h||b)&&(p.pathname+="/"),p}var Bt=t=>t.join("/").replace(/\/\/+/g,"/"),By=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Hy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Vy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Iy(t){return t.map(a=>a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mg=["POST","PUT","PATCH","DELETE"];new Set(Mg);var Fy=["GET",...Mg];new Set(Fy);var Di=_.createContext(null);Di.displayName="DataRouter";var Ru=_.createContext(null);Ru.displayName="DataRouterState";_.createContext(!1);var Ng=_.createContext({isTransitioning:!1});Ng.displayName="ViewTransition";var Gy=_.createContext(new Map);Gy.displayName="Fetchers";var Yy=_.createContext(null);Yy.displayName="Await";var ot=_.createContext(null);ot.displayName="Navigation";var Ga=_.createContext(null);Ga.displayName="Location";var pt=_.createContext({outlet:null,matches:[],isDataRoute:!1});pt.displayName="Route";var Yc=_.createContext(null);Yc.displayName="RouteError";function Py(t,{relative:a}={}){Qe(Ya(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:u}=_.useContext(ot),{hash:s,pathname:c,search:f}=Ja(t,{relative:a}),m=c;return i!=="/"&&(m=c==="/"?i:Bt([i,c])),u.createHref({pathname:m,search:f,hash:s})}function Ya(){return _.useContext(Ga)!=null}function hl(){return Qe(Ya(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Ga).location}var Dg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _g(t){_.useContext(ot).static||_.useLayoutEffect(t)}function Pa(){let{isDataRoute:t}=_.useContext(pt);return t?r1():Jy()}function Jy(){Qe(Ya(),"useNavigate() may be used only in the context of a <Router> component.");let t=_.useContext(Di),{basename:a,navigator:i}=_.useContext(ot),{matches:u}=_.useContext(pt),{pathname:s}=hl(),c=JSON.stringify(Ag(u)),f=_.useRef(!1);return _g(()=>{f.current=!0}),_.useCallback((p,h={})=>{if(st(f.current,Dg),!f.current)return;if(typeof p=="number"){i.go(p);return}let b=jg(p,JSON.parse(c),s,h.relative==="path");t==null&&a!=="/"&&(b.pathname=b.pathname==="/"?a:Bt([a,b.pathname])),(h.replace?i.replace:i.push)(b,h.state,h)},[a,i,c,s,t])}_.createContext(null);function Xy(){let{matches:t}=_.useContext(pt),a=t[t.length-1];return a?a.params:{}}function Ja(t,{relative:a}={}){let{matches:i}=_.useContext(pt),{pathname:u}=hl(),s=JSON.stringify(Ag(i));return _.useMemo(()=>jg(t,JSON.parse(s),u,a==="path"),[t,s,u,a])}function Qy(t,a){return Rg(t,a)}function Rg(t,a,i,u,s){Qe(Ya(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=_.useContext(ot),{matches:f}=_.useContext(pt),m=f[f.length-1],p=m?m.params:{},h=m?m.pathname:"/",b=m?m.pathnameBase:"/",g=m&&m.route;{let H=g&&g.path||"";Og(h,!g||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let S=hl(),v;if(a){let H=typeof a=="string"?Ni(a):a;Qe(b==="/"||H.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`),v=H}else v=S;let C=v.pathname||"/",O=C;if(b!=="/"){let H=b.replace(/^\//,"").split("/");O="/"+C.replace(/^\//,"").split("/").slice(H.length).join("/")}let z=Cg(t,{pathname:O});st(g||z!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),st(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=e1(z&&z.map(H=>Object.assign({},H,{params:Object.assign({},p,H.params),pathname:Bt([b,c.encodeLocation?c.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?b:Bt([b,c.encodeLocation?c.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),f,i,u,s);return a&&j?_.createElement(Ga.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},j):j}function Zy(){let t=a1(),a=Vy(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,u="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:u},c={padding:"2px 4px",backgroundColor:u},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:c},"ErrorBoundary")," or"," ",_.createElement("code",{style:c},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},a),i?_.createElement("pre",{style:s},i):null,f)}var Ky=_.createElement(Zy,null),Wy=class extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){this.props.onError?this.props.onError(t,a):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?_.createElement(pt.Provider,{value:this.props.routeContext},_.createElement(Yc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $y({routeContext:t,match:a,children:i}){let u=_.useContext(Di);return u&&u.static&&u.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),_.createElement(pt.Provider,{value:t},i)}function e1(t,a=[],i=null,u=null,s=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(a.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let c=t,f=i?.errors;if(f!=null){let b=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qe(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,b+1))}let m=!1,p=-1;if(i)for(let b=0;b<c.length;b++){let g=c[b];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=b),g.route.id){let{loaderData:S,errors:v}=i,C=g.route.loader&&!S.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||C){m=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}let h=i&&u?(b,g)=>{u(b,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:Iy(i.matches),errorInfo:g})}:void 0;return c.reduceRight((b,g,S)=>{let v,C=!1,O=null,z=null;i&&(v=f&&g.route.id?f[g.route.id]:void 0,O=g.route.errorElement||Ky,m&&(p<0&&S===0?(Og("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,z=null):p===S&&(C=!0,z=g.route.hydrateFallbackElement||null)));let j=a.concat(c.slice(0,S+1)),H=()=>{let D;return v?D=O:C?D=z:g.route.Component?D=_.createElement(g.route.Component,null):g.route.element?D=g.route.element:D=b,_.createElement($y,{match:g,routeContext:{outlet:b,matches:j,isDataRoute:i!=null},children:D})};return i&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?_.createElement(Wy,{location:i.location,revalidation:i.revalidation,component:O,error:v,children:H(),routeContext:{outlet:null,matches:j,isDataRoute:!0},onError:h}):H()},null)}function Pc(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function n1(t){let a=_.useContext(Di);return Qe(a,Pc(t)),a}function t1(t){let a=_.useContext(Ru);return Qe(a,Pc(t)),a}function l1(t){let a=_.useContext(pt);return Qe(a,Pc(t)),a}function Jc(t){let a=l1(t),i=a.matches[a.matches.length-1];return Qe(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function i1(){return Jc("useRouteId")}function a1(){let t=_.useContext(Yc),a=t1("useRouteError"),i=Jc("useRouteError");return t!==void 0?t:a.errors?.[i]}function r1(){let{router:t}=n1("useNavigate"),a=Jc("useNavigate"),i=_.useRef(!1);return _g(()=>{i.current=!0}),_.useCallback(async(s,c={})=>{st(i.current,Dg),i.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:a,...c}))},[t,a])}var Tp={};function Og(t,a,i){!a&&!Tp[t]&&(Tp[t]=!0,st(!1,i))}_.memo(u1);function u1({routes:t,future:a,state:i,unstable_onError:u}){return Rg(t,void 0,i,u,a)}function ku(t){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function s1({basename:t="/",children:a=null,location:i,navigationType:u="POP",navigator:s,static:c=!1,unstable_useTransitions:f}){Qe(!Ya(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=t.replace(/^\/*/,"/"),p=_.useMemo(()=>({basename:m,navigator:s,static:c,unstable_useTransitions:f,future:{}}),[m,s,c,f]);typeof i=="string"&&(i=Ni(i));let{pathname:h="/",search:b="",hash:g="",state:S=null,key:v="default"}=i,C=_.useMemo(()=>{let O=Ht(h,m);return O==null?null:{location:{pathname:O,search:b,hash:g,state:S,key:v},navigationType:u}},[m,h,b,g,S,v,u]);return st(C!=null,`<Router basename="${m}"> is not able to match the URL "${h}${b}${g}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:_.createElement(ot.Provider,{value:p},_.createElement(Ga.Provider,{children:a,value:C}))}function o1({children:t,location:a}){return Qy(Dc(t),a)}function Dc(t,a=[]){let i=[];return _.Children.forEach(t,(u,s)=>{if(!_.isValidElement(u))return;let c=[...a,s];if(u.type===_.Fragment){i.push.apply(i,Dc(u.props.children,c));return}Qe(u.type===ku,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let f={id:u.props.id||c.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=Dc(u.props.children,c)),i.push(f)}),i}var wu="get",Cu="application/x-www-form-urlencoded";function Ou(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function c1(t){return Ou(t)&&t.tagName.toLowerCase()==="button"}function f1(t){return Ou(t)&&t.tagName.toLowerCase()==="form"}function d1(t){return Ou(t)&&t.tagName.toLowerCase()==="input"}function h1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function m1(t,a){return t.button===0&&(!a||a==="_self")&&!h1(t)}var gu=null;function p1(){if(gu===null)try{new FormData(document.createElement("form"),0),gu=!1}catch{gu=!0}return gu}var g1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function oc(t){return t!=null&&!g1.has(t)?(st(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cu}"`),null):t}function x1(t,a){let i,u,s,c,f;if(f1(t)){let m=t.getAttribute("action");u=m?Ht(m,a):null,i=t.getAttribute("method")||wu,s=oc(t.getAttribute("enctype"))||Cu,c=new FormData(t)}else if(c1(t)||d1(t)&&(t.type==="submit"||t.type==="image")){let m=t.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||m.getAttribute("action");if(u=p?Ht(p,a):null,i=t.getAttribute("formmethod")||m.getAttribute("method")||wu,s=oc(t.getAttribute("formenctype"))||oc(m.getAttribute("enctype"))||Cu,c=new FormData(m,t),!p1()){let{name:h,type:b,value:g}=t;if(b==="image"){let S=h?`${h}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else h&&c.append(h,g)}}else{if(Ou(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=wu,u=null,s=Cu,f=t}return c&&s==="text/plain"&&(f=c,c=void 0),{action:u,method:i.toLowerCase(),encType:s,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xc(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function b1(t,a,i){let u=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return u.pathname==="/"?u.pathname=`_root.${i}`:a&&Ht(u.pathname,a)==="/"?u.pathname=`${a.replace(/\/$/,"")}/_root.${i}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${i}`,u}async function y1(t,a){if(t.id in a)return a[t.id];try{let i=await import(t.module);return a[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function v1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function S1(t,a,i){let u=await Promise.all(t.map(async s=>{let c=a.routes[s.route.id];if(c){let f=await y1(c,i);return f.links?f.links():[]}return[]}));return T1(u.flat(1).filter(v1).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Ep(t,a,i,u,s,c){let f=(p,h)=>i[h]?p.route.id!==i[h].route.id:!0,m=(p,h)=>i[h].pathname!==p.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==p.params["*"];return c==="assets"?a.filter((p,h)=>f(p,h)||m(p,h)):c==="data"?a.filter((p,h)=>{let b=u.routes[p.route.id];if(!b||!b.hasLoader)return!1;if(f(p,h)||m(p,h))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function k1(t,a,{includeHydrateFallback:i}={}){return w1(t.map(u=>{let s=a.routes[u.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),i&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function w1(t){return[...new Set(t)]}function C1(t){let a={},i=Object.keys(t).sort();for(let u of i)a[u]=t[u];return a}function T1(t,a){let i=new Set;return new Set(a),t.reduce((u,s)=>{let c=JSON.stringify(C1(s));return i.has(c)||(i.add(c),u.push({key:c,link:s})),u},[])}function zg(){let t=_.useContext(Di);return Xc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function E1(){let t=_.useContext(Ru);return Xc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Qc=_.createContext(void 0);Qc.displayName="FrameworkContext";function Lg(){let t=_.useContext(Qc);return Xc(t,"You must render this element inside a <HydratedRouter> element"),t}function A1(t,a){let i=_.useContext(Qc),[u,s]=_.useState(!1),[c,f]=_.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:h,onMouseLeave:b,onTouchStart:g}=a,S=_.useRef(null);_.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let O=j=>{j.forEach(H=>{f(H.isIntersecting)})},z=new IntersectionObserver(O,{threshold:.5});return S.current&&z.observe(S.current),()=>{z.disconnect()}}},[t]),_.useEffect(()=>{if(u){let O=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(O)}}},[u]);let v=()=>{s(!0)},C=()=>{s(!1),f(!1)};return i?t!=="intent"?[c,S,{}]:[c,S,{onFocus:Ma(m,v),onBlur:Ma(p,C),onMouseEnter:Ma(h,v),onMouseLeave:Ma(b,C),onTouchStart:Ma(g,v)}]:[!1,S,{}]}function Ma(t,a){return i=>{t&&t(i),i.defaultPrevented||a(i)}}function j1({page:t,...a}){let{router:i}=zg(),u=_.useMemo(()=>Cg(i.routes,t,i.basename),[i.routes,t,i.basename]);return u?_.createElement(N1,{page:t,matches:u,...a}):null}function M1(t){let{manifest:a,routeModules:i}=Lg(),[u,s]=_.useState([]);return _.useEffect(()=>{let c=!1;return S1(t,a,i).then(f=>{c||s(f)}),()=>{c=!0}},[t,a,i]),u}function N1({page:t,matches:a,...i}){let u=hl(),{manifest:s,routeModules:c}=Lg(),{basename:f}=zg(),{loaderData:m,matches:p}=E1(),h=_.useMemo(()=>Ep(t,a,p,s,u,"data"),[t,a,p,s,u]),b=_.useMemo(()=>Ep(t,a,p,s,u,"assets"),[t,a,p,s,u]),g=_.useMemo(()=>{if(t===u.pathname+u.search+u.hash)return[];let C=new Set,O=!1;if(a.forEach(j=>{let H=s.routes[j.route.id];!H||!H.hasLoader||(!h.some(D=>D.route.id===j.route.id)&&j.route.id in m&&c[j.route.id]?.shouldRevalidate||H.hasClientLoader?O=!0:C.add(j.route.id))}),C.size===0)return[];let z=b1(t,f,"data");return O&&C.size>0&&z.searchParams.set("_routes",a.filter(j=>C.has(j.route.id)).map(j=>j.route.id).join(",")),[z.pathname+z.search]},[f,m,u,s,h,a,t,c]),S=_.useMemo(()=>k1(b,s),[b,s]),v=M1(b);return _.createElement(_.Fragment,null,g.map(C=>_.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),S.map(C=>_.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),v.map(({key:C,link:O})=>_.createElement("link",{key:C,nonce:i.nonce,...O})))}function D1(...t){return a=>{t.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var Ug=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ug&&(window.__reactRouterVersion="7.10.1")}catch{}function _1({basename:t,children:a,unstable_useTransitions:i,window:u}){let s=_.useRef();s.current==null&&(s.current=xy({window:u,v5Compat:!0}));let c=s.current,[f,m]=_.useState({action:c.action,location:c.location}),p=_.useCallback(h=>{i===!1?m(h):_.startTransition(()=>m(h))},[i]);return _.useLayoutEffect(()=>c.listen(p),[c,p]),_.createElement(s1,{basename:t,children:a,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i===!0})}var Bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ol=_.forwardRef(function({onClick:a,discover:i="render",prefetch:u="none",relative:s,reloadDocument:c,replace:f,state:m,target:p,to:h,preventScrollReset:b,viewTransition:g,...S},v){let{basename:C,unstable_useTransitions:O}=_.useContext(ot),z=typeof h=="string"&&Bg.test(h),j,H=!1;if(typeof h=="string"&&z&&(j=h,Ug))try{let A=new URL(window.location.href),P=h.startsWith("//")?new URL(A.protocol+h):new URL(h),Q=Ht(P.pathname,C);P.origin===A.origin&&Q!=null?h=Q+P.search+P.hash:H=!0}catch{st(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=Py(h,{relative:s}),[K,le,V]=A1(u,S),ee=L1(h,{replace:f,state:m,target:p,preventScrollReset:b,relative:s,viewTransition:g,unstable_useTransitions:O});function oe(A){a&&a(A),A.defaultPrevented||ee(A)}let W=_.createElement("a",{...S,...V,href:j||D,onClick:H||c?a:oe,ref:D1(v,le),target:p,"data-discover":!z&&i==="render"?"true":void 0});return K&&!z?_.createElement(_.Fragment,null,W,_.createElement(j1,{page:D})):W});Ol.displayName="Link";var R1=_.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:u="",end:s=!1,style:c,to:f,viewTransition:m,children:p,...h},b){let g=Ja(f,{relative:h.relative}),S=hl(),v=_.useContext(Ru),{navigator:C,basename:O}=_.useContext(ot),z=v!=null&&V1(g)&&m===!0,j=C.encodeLocation?C.encodeLocation(g).pathname:g.pathname,H=S.pathname,D=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(H=H.toLowerCase(),D=D?D.toLowerCase():null,j=j.toLowerCase()),D&&O&&(D=Ht(D,O)||D);const K=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let le=H===j||!s&&H.startsWith(j)&&H.charAt(K)==="/",V=D!=null&&(D===j||!s&&D.startsWith(j)&&D.charAt(j.length)==="/"),ee={isActive:le,isPending:V,isTransitioning:z},oe=le?a:void 0,W;typeof u=="function"?W=u(ee):W=[u,le?"active":null,V?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let A=typeof c=="function"?c(ee):c;return _.createElement(Ol,{...h,"aria-current":oe,className:W,ref:b,style:A,to:f,viewTransition:m},typeof p=="function"?p(ee):p)});R1.displayName="NavLink";var O1=_.forwardRef(({discover:t="render",fetcherKey:a,navigate:i,reloadDocument:u,replace:s,state:c,method:f=wu,action:m,onSubmit:p,relative:h,preventScrollReset:b,viewTransition:g,...S},v)=>{let{unstable_useTransitions:C}=_.useContext(ot),O=H1(),z=q1(m,{relative:h}),j=f.toLowerCase()==="get"?"get":"post",H=typeof m=="string"&&Bg.test(m),D=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let le=K.nativeEvent.submitter,V=le?.getAttribute("formmethod")||f,ee=()=>O(le||K.currentTarget,{fetcherKey:a,method:V,navigate:i,replace:s,state:c,relative:h,preventScrollReset:b,viewTransition:g});C&&i!==!1?_.startTransition(()=>ee()):ee()};return _.createElement("form",{ref:v,method:j,action:z,onSubmit:u?p:D,...S,"data-discover":!H&&t==="render"?"true":void 0})});O1.displayName="Form";function z1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hg(t){let a=_.useContext(Di);return Qe(a,z1(t)),a}function L1(t,{target:a,replace:i,state:u,preventScrollReset:s,relative:c,viewTransition:f,unstable_useTransitions:m}={}){let p=Pa(),h=hl(),b=Ja(t,{relative:c});return _.useCallback(g=>{if(m1(g,a)){g.preventDefault();let S=i!==void 0?i:Va(h)===Va(b),v=()=>p(t,{replace:S,state:u,preventScrollReset:s,relative:c,viewTransition:f});m?_.startTransition(()=>v()):v()}},[h,p,b,i,u,a,t,s,c,f,m])}var U1=0,B1=()=>`__${String(++U1)}__`;function H1(){let{router:t}=Hg("useSubmit"),{basename:a}=_.useContext(ot),i=i1(),u=t.fetch,s=t.navigate;return _.useCallback(async(c,f={})=>{let{action:m,method:p,encType:h,formData:b,body:g}=x1(c,a);if(f.navigate===!1){let S=f.fetcherKey||B1();await u(S,i,f.action||m,{preventScrollReset:f.preventScrollReset,formData:b,body:g,formMethod:f.method||p,formEncType:f.encType||h,flushSync:f.flushSync})}else await s(f.action||m,{preventScrollReset:f.preventScrollReset,formData:b,body:g,formMethod:f.method||p,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[u,s,a,i])}function q1(t,{relative:a}={}){let{basename:i}=_.useContext(ot),u=_.useContext(pt);Qe(u,"useFormAction must be used inside a RouteContext");let[s]=u.matches.slice(-1),c={...Ja(t||".",{relative:a})},f=hl();if(t==null){c.search=f.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(b=>b==="")){m.delete("index"),p.filter(g=>g).forEach(g=>m.append("index",g));let b=m.toString();c.search=b?`?${b}`:""}}return(!t||t===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Bt([i,c.pathname])),Va(c)}function V1(t,{relative:a}={}){let i=_.useContext(Ng);Qe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Hg("useViewTransitionState"),s=Ja(t,{relative:a});if(!i.isTransitioning)return!1;let c=Ht(i.currentLocation.pathname,u)||i.currentLocation.pathname,f=Ht(i.nextLocation.pathname,u)||i.nextLocation.pathname;return Au(s.pathname,f)!=null||Au(s.pathname,c)!=null}const I1=({theme:t,onToggleTheme:a,onNavClick:i})=>{const u=hl(),s=Pa(),c=u.pathname==="/",[f,m]=_.useState(!1),p=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"lab",label:"Lab"}],h=b=>{m(!1),c?i(b):(s("/"),setTimeout(()=>{i(b)},100))};return _.useEffect(()=>(f?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[f]),x.jsxs(x.Fragment,{children:[x.jsx("header",{className:"fixed inset-x-0 top-0 h-(--header-height) z-20 border-b backdrop-blur-xl [html[data-theme='dark']_&]:border-white/5 [html[data-theme='light']_&]:border-black/5",children:x.jsxs("div",{className:"max-w-[1040px] mx-auto h-full px-5 flex items-center justify-between gap-3",children:[x.jsx(Ol,{to:"/",className:"tracking-[0.08em] uppercase text-[14px] text-fg-muted hover:text-fg transition-colors cursor-pointer",children:"Frontend · UX"}),x.jsxs("nav",{className:"hidden md:flex items-center gap-4 text-[13px]",children:[x.jsx(Ol,{to:"/",className:`px-2.5 py-1.5 rounded-full text-[13px] border border-transparent cursor-pointer
                         transition-all duration-150 ease-out
                         hover:text-fg hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:-translate-y-px
                         ${c?"text-fg":"text-fg-muted"}`,children:"Home"}),p.map(({id:b,label:g})=>x.jsx("button",{className:`px-2.5 py-1.5 rounded-full text-[13px] text-fg-muted border border-transparent cursor-pointer\r
                           transition-all duration-150 ease-out\r
                           hover:text-fg hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:-translate-y-px`,onClick:()=>h(b),children:g},b)),x.jsx(Ol,{to:"/blog",className:`px-2.5 py-1.5 rounded-full text-[13px] border border-transparent cursor-pointer
                         transition-all duration-150 ease-out
                         hover:text-fg hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:-translate-y-px
                         ${u.pathname==="/blog"?"text-fg":"text-fg-muted"}`,children:"Blog"})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("button",{className:`md:hidden w-9 h-9 rounded-full border border-(--border-subtle) bg-(--bg-elevated)\r
                         flex items-center justify-center cursor-pointer\r
                         transition-all duration-150 ease-out\r
                         hover:bg-(--bg-soft) hover:border-(--accent)/50`,"aria-label":"Toggle menu",onClick:()=>m(!f),children:f?x.jsx(P1,{}):x.jsx(Y1,{})}),x.jsx("button",{className:`w-9 h-9 rounded-full border border-(--border-subtle) bg-(--bg-elevated)\r
                         flex items-center justify-center cursor-pointer\r
                         transition-all duration-150 ease-out\r
                         hover:-translate-y-px hover:bg-(--bg-soft) hover:border-(--accent)/50`,"aria-label":"Toggle theme",onClick:a,children:t==="dark"?x.jsx(F1,{}):x.jsx(G1,{})}),x.jsx("button",{className:`hidden sm:inline-flex text-[13px] px-4 py-2 rounded-full border border-(--border-subtle)\r
                         bg-(--bg-soft) hover:bg-(--bg-elevated) hover:border-(--accent)/50 hover:-translate-y-px\r
                         transition-all duration-150 ease-out`,onClick:()=>h("contact"),children:"Contact"})]})]})}),f&&x.jsx("div",{className:"md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-9998",onClick:()=>m(!1)}),x.jsx("div",{className:["md:hidden fixed top-0 right-0 bottom-0 w-[280px] z-9999","bg-[#0a0a0a] [html[data-theme='light']_&]:bg-white","border-l border-(--border-subtle)","shadow-[-8px_0_24px_rgba(0,0,0,0.5)]","transition-transform duration-300 ease-out",f?"translate-x-0":"translate-x-full"].join(" "),children:x.jsxs("nav",{className:"flex flex-col p-6 pt-[calc(var(--header-height)+16px)] gap-2",children:[x.jsx(Ol,{to:"/",className:["px-4 py-3 rounded-lg text-[14px] border border-transparent","transition-all duration-150 ease-out","hover:bg-(--bg-soft) hover:border-(--border-subtle)",c?"text-fg bg-(--bg-soft)":"text-fg-muted"].join(" "),onClick:()=>m(!1),children:"Home"}),p.map(({id:b,label:g})=>x.jsx("button",{className:`px-4 py-3 rounded-lg text-[14px] text-fg-muted border border-transparent text-left\r
                         transition-all duration-150 ease-out\r
                         hover:bg-(--bg-soft) hover:border-(--border-subtle) hover:text-fg`,onClick:()=>h(b),children:g},b)),x.jsx(Ol,{to:"/blog",className:["px-4 py-3 rounded-lg text-[14px] border border-transparent","transition-all duration-150 ease-out","hover:bg-(--bg-soft) hover:border-(--border-subtle)",u.pathname==="/blog"?"text-fg bg-(--bg-soft)":"text-fg-muted"].join(" "),onClick:()=>m(!1),children:"Blog"}),x.jsx("div",{className:"mt-4 pt-4 border-t border-(--border-subtle)",children:x.jsx("button",{className:`w-full text-[14px] px-4 py-3 rounded-lg border border-(--border-subtle)\r
                         bg-(--bg-soft) hover:bg-(--bg-elevated) hover:border-(--accent)/50\r
                         transition-all duration-150 ease-out text-fg`,onClick:()=>h("contact"),children:"Contact"})})]})})]})},F1=()=>x.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{fill:"currentColor",d:"M12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4 13H3a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2Zm17 0h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2ZM6.34 6.34a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41l-.7.7Zm12.02 12.02a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7ZM6.34 17.66l-.7.7a1 1 0 1 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41Zm12.02-12.02-.7.7a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"})}),G1=()=>x.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:x.jsx("path",{d:"M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",fill:"currentColor"})}),Y1=()=>x.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),P1=()=>x.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),J1=()=>{const t=new Date().getFullYear();return x.jsxs("footer",{className:"max-w-[1040px] mx-auto px-5 pb-6 pt-4 border-t border-white/5 flex flex-col gap-2 text-[11px] text-fg-muted sm:flex-row sm:justify-between",children:[x.jsxs("span",{children:["© ",t," Your Name. All rights reserved."]}),x.jsx("span",{children:"Built with React · TypeScript · minimal black & white."})]})},X1="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",cc=({title:t,value:a})=>x.jsxs("div",{className:"rounded-2xl bg-black/40 border border-white/5 p-2.5 [html[data-theme='light']_&]:bg-[#f6f6fb] [html[data-theme='light']_&]:border-[#e2e2ee]",children:[x.jsx("div",{className:"text-[11px] text-fg-muted mb-1",children:t}),x.jsx("div",{className:"text-[13px] font-medium",children:a})]}),Q1=({onScrollTo:t})=>x.jsxs("section",{id:"top",className:"grid gap-7 mb-14 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)]",children:[x.jsxs("div",{children:[x.jsx("p",{className:X1,children:"Identity Profile"}),x.jsxs("h1",{className:"text-[clamp(28px,4vw,34px)] font-semibold leading-tight mb-3",children:["'최고'를 위해",x.jsx("br",{}),"'최악'을 대비하는,",x.jsx("br",{}),"'안전한 혁신가' 권경민입니다."]}),x.jsxs("p",{className:"text-[14px] text-fg-muted leading-[1.7] max-w-[520px] mb-6",children:["단순 기능 구현을 것을 넘어, 사용자에게 전달될 가치(Value)와 그 과정의 안전(Safety)을 동시에 설계합니다.",x.jsx("br",{}),"사이버보안을 전공하며 기른 ",x.jsx("strong",{children:"'비판적 사고'"}),"와"," ",x.jsx("strong",{children:"'리스크 관리'"})," 역량을 프론트엔드 개발에 녹여내고 있습니다."]}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:["Safety First","Risk Management","Team Ownership","Frontend Core"].map(a=>x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full border border-[var(--border-subtle)] text-fg-muted bg-white/5",children:a},a))}),x.jsxs("div",{className:"flex flex-wrap gap-3",children:[x.jsx("button",{className:`text-[13px] px-4.5 py-2.5 rounded-full border border-[var(--accent)]\r
                       bg-[var(--accent)] text-black font-medium shadow-[0_10px_30px_rgba(0,0,0,0.4)]\r
                       hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)] hover:opacity-95 hover:-translate-y-px\r
                       transition-all duration-150 ease-out\r
                       [html[data-theme='light']_&]:text-white\r
                       [html[data-theme='light']_&]:shadow-[0_6px_20px_rgba(0,0,0,0.15)]\r
                       [html[data-theme='light']_&]:hover:shadow-[0_10px_28px_rgba(0,0,0,0.2)]\r
                       cursor-pointer\r
                       `,onClick:()=>t("skills"),children:x.jsx("strong",{children:"경력 바로가기 "})}),x.jsxs("button",{className:`inline-flex items-center gap-1.5 text-[13px] text-fg-muted\r
                       hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out cursor-pointer`,onClick:()=>t("about"),children:[x.jsx("span",{children:"소개 더 보기"}),x.jsx("span",{className:"text-[14px] translate-y-px",children:"↳"})]})]})]}),x.jsxs("aside",{className:`rounded-3xl border border-[var(--border-subtle)]\r
                   bg-[radial-gradient(circle_at_top_left,#262633_0,#0b0b0d_50%)]\r
                   shadow-[0_18px_40px_rgba(0,0,0,0.35)]\r
                   flex flex-col gap-3.5 text-[13px] p-4.5\r
                   [html[data-theme='light']_&]:bg-[linear-gradient(135deg,#ffffff,#f3f3f8)]\r
                   [html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.1)]`,children:[x.jsxs("div",{className:"flex items-center justify-between gap-3",children:[x.jsxs("div",{children:[x.jsx("div",{className:"text-[16px] font-semibold",children:"Kwon Kyung-Min"}),x.jsx("div",{className:"text-[12px] text-fg-muted",children:"Frontend Engineer · Security Researcher"})]}),x.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[rgba(0,255,128,0.35)] text-[11px] uppercase tracking-[0.16em]",children:[x.jsx("span",{className:"w-[7px] h-[7px] rounded-full bg-[rgba(0,255,153,0.8)] shadow-[0_0_8px_rgba(0,255,153,0.7)] animate-pulse"}),x.jsx("span",{children:"Building Stable Products"})]})]}),x.jsxs("div",{className:"flex flex-col gap-2.5",children:[x.jsx(cc,{title:"Focus",value:"Risk Mgmt, Safety, UI Arch"}),x.jsx(cc,{title:"Strength",value:"Critical Thinking, Stability"}),x.jsx(cc,{title:"Based in",value:"Seongnam, KR (KST)"})]}),x.jsx("p",{className:"text-[11px] text-fg-muted mt-1 leading-relaxed",children:"최근에는 차량 데이터 시각화 성능 개선, Web Worker를 활용한 렌더링 최적화, 그리고 팀의 심리적 안전지대를 만드는 일에 집중하고 있습니다."})]})]}),Ap="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-transform transition-shadow transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/20 [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] [html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",Z1="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5",K1="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",W1="text-[20px] font-semibold tracking-[0.02em]",$1="text-[13px] text-fg-muted leading-relaxed",ev="text-[11px] px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-fg-muted",nv=()=>x.jsxs("section",{id:"about",className:"mb-14",children:[x.jsxs("div",{className:Z1,children:[x.jsxs("div",{children:[x.jsx("p",{className:K1,children:"About"}),x.jsx("h2",{className:W1,children:"개발자로서의 가치관"})]}),x.jsx("p",{className:$1,children:"최고의 성과를 지향하되, 최악의 상황을 먼저 대비하는 '안전한 혁신'을 추구합니다."})]}),x.jsxs("div",{className:"grid gap-4.5 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]",children:[x.jsxs("div",{className:Ap,children:[x.jsx("div",{className:"flex items-center justify-between gap-2 mb-2",children:x.jsx("h3",{className:"text-[15px] font-bold",children:"안전한 혁신 (Safe Innovation)"})}),x.jsxs("div",{className:"text-[13px] text-fg-muted leading-[1.7]",children:[x.jsxs("p",{children:["새로운 기술로 사람들에게 가치를 주는 것을 좋아하지만, 그 과정에서",x.jsx("strong",{children:' "누군가 피해를 보지 않도록" '}),"하는 것을 더 중요하게 생각합니다.",x.jsx("br",{}),x.jsx("br",{}),"보안을 전공하며 익힌 ",x.jsx("strong",{children:"Risk Management"})," 사고방식을 개발에 적용하여, 화려한 기능 이전에 발생할 수 있는 최악의 시나리오를 먼저 방어합니다."]}),x.jsxs("ul",{className:"mt-3 pl-4 list-disc space-y-1",children:[x.jsx("li",{children:"사용자 피해 방지를 최우선으로 하는 설계"}),x.jsx("li",{children:"통제 가능한 리스크 안에서의 과감한 기술 도전"}),x.jsx("li",{children:"보안적/비판적 사고를 통한 견고한 아키텍처 구축"})]})]})]}),x.jsxs("div",{className:Ap,children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-bold",children:"일하는 태도"}),x.jsx("span",{className:ev,children:"Mindset"})]}),x.jsxs("div",{className:"text-[13px] text-fg-muted leading-[1.7]",children:[x.jsxs("p",{className:"mb-2",children:[x.jsx("strong",{children:'"팀의 심리적 안전지대"'}),"가 되고자 합니다."]}),x.jsxs("ul",{className:"mt-1.5 pl-4 list-disc space-y-1",children:[x.jsx("li",{children:"'나'보다 '우리(Team)'의 이익을 먼저 고려"}),x.jsx("li",{children:"문제가 생기면 외부 탓보다 해결책과 내 안의 원인 분석"}),x.jsx("li",{children:"끝까지 파고드는 집요함 (Log Consistency 해결 경험)"}),x.jsx("li",{children:"동료가 안심하고 등을 맡길 수 있는 신뢰 구축"})]})]})]})]})]}),tv="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-transform transition-shadow transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:border-white/20 [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] [html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",lv="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5",iv="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",av="text-[20px] font-semibold tracking-[0.02em]",rv="text-[13px] text-fg-muted leading-relaxed",qg="text-[11px] px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-fg-muted",La="text-[11px] px-2.5 py-1.5 rounded-full bg-[var(--bg-soft)] border border-[var(--border-subtle)] text-fg-muted",uv=t=>`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 border ${t?"bg-[var(--bg-soft)] text-fg border-[var(--border-subtle)]":"text-fg-muted hover:text-fg hover:bg-[var(--bg-soft)]/50 border-transparent"}`,xu=({title:t,chipLabel:a,skills:i})=>x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-bold",children:t}),a?x.jsx("span",{className:qg,children:a}):x.jsx(x.Fragment,{})]}),x.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:i.map(u=>x.jsx("span",{className:La,children:u},u))})]}),jp=()=>{const t=[{title:"Frontend Core",skills:["React.js","Next.js","TypeScript","TailwindCSS","Electron","Node.js","Zustand","Redux","ZeroMQ"]},{title:"Architecture & Perf",skills:["Domain-Driven Design","Web Worker","Event Bus / IPC","Rendering Optimization","Memory Management"]},{title:"Security & Infra",skills:["Cyber Security","Network Forensics","Docker","Linux / Shell","GitLab / CI"]},{title:"AI & Mobile",skills:["Flutter","Python","TensorFlow","Firebase","OpenCV"]}];return x.jsxs("div",{className:"space-y-3",children:[x.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[x.jsx(xu,{...t[0]}),x.jsx(xu,{...t[1]})]}),x.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[x.jsx(xu,{...t[2]}),x.jsx(xu,{...t[3]})]})]})},sv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfElEQVR4Ae2WA8wcQRiG39q2tTszu7XtNnYd1XZ7OzN7eyqDmmF/1jbipI7rhrVt97r/7SW/j81F9yTPYflh99tFmjQlQuc1BRHTQeU2EFdW0jKRCZUfg8LXQTEbICK62RtM7AGxnoLJIDQreXWf8626MqAHqqNUyNL6YOYu6N7wTu4gmJmcmtvWY//mJ+1vFRFhxgwQ/jZ0ciacA+QF0z6QuB1WBaEY10F5D0SFuvYVyprwH6DmVTCZCSpzEjAXzGvva45GTKjGcWiecOnszKl5CcQ9HEMCldHJVQ36nOrxafe79aTKiBliHA0H4FwD1NgOZX4lpAzFOALNKhAA3+ZkkCrse7VQAEweBOVNkTKYPA7dk3/7MPnCNoAOXAPlFMpSPW7belRn+MQCkVvA+B+nCjKs+A3NeA3KH4KJx3GpiidoJ+6CmRnQ+Eh0n1E12hQcCCJuQvcHoeUPkmR0jmH+AZH3ofE5iMyYcmBiGah4V/xgVgK685PQA0FQfglsCUFElEBNqMYEEPMEiHgGJj+CiQ/xab4HNb6A8L/hVjrjmPBPoNJCdPaXA7GagXk7Qrd6xW17b0+0W9odxPCBySdOJWw1aWvkImW0DtQGMbPQ3h8OIDTedyOlELka7QP51wOROSkOwJ0XQH4FqExhC4gYAMYvQPfmB6BFagGTk0DMzaB8Axhfl7jGWmhyPYi8HBpsTDoBMPEX1JWBUqHiHNqvDEL323qT0Oe8jIQyN22l85uYb6CKmRECMI47O1m27iQ189U9TlCaPBr54UZdp5wNPbbW/9EJ5gM0cTr0chMRKhZCWboXjO8E5TnJGho6RGSCCTdUrqEE0qT5B6CGc+DEAtyrAAAAAElFTkSuQmCC",ov=[{id:"career-1",company:"SURESOFTTECH",companyLogo:sv,position:"Frontend Developer",period:"2023.03 - 현재",projects:[{name:"차량 통합 제어기(CCU2) Log Monitor & Analyzer",period:"2024.07 - 2025.06",role:"Frontend Lead / 아키텍처 설계",description:"DLT/CAN/DoIP/SOMEIP 대용량 로그를 실시간 수집·분석하여 차량 상태를 진단하는 Electron 기반 Log Analyzer. 기존 DLT-Viewer 한계를 극복하고 비전문가도 쉽게 분석 가능한 UX/성능 중심 데스크톱 앱 구축.",tasks:["React + Node.js + Spring 기반 웹 뷰어를 Electron 데스크톱 앱으로 재설계하여 성능 한계 극복","ZeroMQ 기반 실시간 통신 파이프라인 구축으로 초당 80,000+ 메시지를 UI 멈춤 없이 비동기 처리","useMemo/Zustand 최적화 및 TraceTable 내부 캐싱 메소드 오버라이딩으로 렌더링 2.3배 개선 (1.04s → 450ms), 메모리 30% 절감 (10분 평균 3.3GB → 2.0GB)","PREV/NEXT 증분 로딩 + 스크롤 오프셋 보정 기반 무한 스크롤 엔진 구현으로 수십만 로그를 0.2s 이내 지연으로 탐색","gridBufferDataObj 기반 전/후방 데이터 삽입 및 인덱스 동기화로 데이터 정합성 100% 확보","Aggregation 기법 적용으로 실시간 로그 차트 렌더링 85% 개선 (3.2s → 0.48s)","현재 화면 기준 탐색 + 페이지 이동 방식으로 검색 성능 60% 개선 (4.5s → 1.8s)","스크립트 모듈화 + 테스트 코드 적용으로 기능 추가 시 장애 발생률 90% 이상 감소"],achievements:["렌더링 성능 2.3배 향상 및 메모리 사용량 30% 절감","수작업 로그 분석 시간 90% 단축 (5min → 30s)","실시간 차트 렌더링 속도 85% 개선 (3.2s → 0.48s)","분석 정확도 98% 달성"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["ZeroMQ","DevExtreme","Zustand","TailwindCSS"],patterns:["이벤트 버스(useEventOn)","CustomStore","무한 스크롤 버퍼링"]}},{name:"사용자 정의 필터링 기반 DLT 로그 분석 툴",period:"2025.07 - 2025.09",role:"Frontend Lead / 성능 최적화",description:"수백만 건 로그(DLT/CSV)를 실시간에 가깝게 시각화하고 사용자 맞춤 UI·필터링으로 분석 효율을 극대화하는 Electron 기반 로그 분석 툴. 현업 분석가 워크플로우 단축과 정확도 향상에 집중.",tasks:["rc-dock 기반 도킹 레이아웃 저장/복원 기능 구현으로 반복 UI 설정 작업 제거","DevExtreme DataGrid 가상 스크롤 적용/튜닝으로 100만+ 데이터 로딩·탐색 평균 2s 이내 응답 달성","스트리밍 기반 Export 구현으로 100만 행 CSV Export를 3초 이내 안정 처리","IPC 기반 필터 파일 자동 생성 + 외부 DLT 뷰어 실행 자동화로 수동 작업 감소","자동 스크롤/정규식 호환/타입 오류 등 반복 이슈 해결 과정을 플레이북으로 문서화하여 안정성 및 대응 속도 향상"],achievements:["100만 건 로그 로딩/탐색 평균 응답 속도 2s 이내 달성","사용자 맞춤 레이아웃 제공으로 업무 효율 40% 이상 개선","외부 뷰어 연동 및 Export 자동화로 워크플로우 30% 단축"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["rc-dock","DevExtreme DataGrid","Recharts"],patterns:["IPC 통신","가상 스크롤(Virtual Scrolling)","스트리밍 데이터 처리"]}},{name:"차량제어 시험산출물 관리 시스템 고도화(VTDM)",period:"2025.09 - 현재",role:"Frontend Developer / 유지보수·아키텍처 개선",description:"차량 테스트/평가 산출물을 클라우드에서 통합 관리하는 웹 플랫폼(SaaS) 유지보수 및 고도화. 레거시 기술 부채로 인한 유지보수 난이도와 대용량 조회 성능 문제를 해결하기 위해 도메인 중심 재설계 및 렌더링 최적화 주도.",tasks:["DDD 도입으로 기능 중심 파편화 구조를 도메인 중심으로 재편, 공통 로직을 Util/Custom Hook으로 모듈화하여 LOC 30% 절감 및 유지보수 효율 향상","컴포넌트 의존성 그래프 분석 후 Global State → Local State 전환 및 렌더 트리거 통합으로 불필요 리렌더링 5회 → 1회로 단축","무한 스크롤 시 DOM 계산 병목을 Web Worker로 분리하여 메인 스레드 블로킹 제거 및 스크롤 끊김 해소","AgGrid/AgChart 커스터마이징을 통해 로그 테이블·분석 그래프 컴포넌트 개발, 대시보드 내 시스템 로그 모니터링 기능 구현","화이트리스트 기반 유저 관리 및 Hotfix 프로세스 정립으로 운영 안정성 및 보안성 강화"],achievements:["DDD 기반 구조 재편으로 3개월 내 코드베이스 30% 경량화","중복 로직 모듈화로 신규 기능 개발 시간 단축","핵심 컴포넌트 리렌더링 80% 감소 (5회 → 1회)","Web Worker 도입으로 대용량 리스트 스크롤 Frame Drop 0% 달성","전역 상태 오남용 방지 설계로 Side-effect성 버그 발생률 최소화"],techStack:{languages:["React(TypeScript)","Node.js"],libs:["AgGrid","AgChart"],patterns:["Domain-Driven Design(DDD)","Web Worker","Custom Hooks","Docker","Spring Boot 협업"]}}]}],cv=({techStack:t})=>x.jsxs("div",{className:"space-y-2",children:[x.jsx("div",{className:"text-[12px] font-semibold",children:"기술 스택"}),x.jsxs("div",{className:"space-y-1.5",children:[t.languages&&t.languages.length>0&&x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"언어/프레임워크"}),x.jsx("div",{className:"flex flex-wrap gap-1",children:t.languages.map(a=>x.jsx("span",{className:La,children:a},a))})]}),t.libs&&t.libs.length>0&&x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"라이브러리"}),x.jsx("div",{className:"flex flex-wrap gap-1",children:t.libs.map(a=>x.jsx("span",{className:La,children:a},a))})]}),t.patterns&&t.patterns.length>0&&x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"패턴/기법"}),x.jsx("div",{className:"flex flex-wrap gap-1",children:t.patterns.map(a=>x.jsx("span",{className:La,children:a},a))})]})]})]}),Vg=({open:t,children:a,durationMs:i=360})=>x.jsx("div",{className:["grid overflow-hidden","transition-[grid-template-rows]","ease-[cubic-bezier(.2,.8,.2,1)]",t?"grid-rows-[1fr]":"grid-rows-[0fr]"].join(" "),style:{transitionDuration:`${i}ms`},children:x.jsx("div",{className:"min-h-0 overflow-hidden",children:x.jsx("div",{className:["transition-[opacity,transform]","ease-[cubic-bezier(.2,.8,.2,1)]","will-change-[opacity,transform]",t?"opacity-100 translate-y-0":"opacity-0 -translate-y-1"].join(" "),style:{transitionDuration:`${Math.max(220,i-80)}ms`},children:a})})}),fv=({project:t})=>{const[a,i]=_.useState(!1);return x.jsxs("article",{className:["rounded-2xl border bg-[var(--bg-soft)] px-4 py-3","transition-colors duration-200",a?"border-gray-400":"border-[var(--border-subtle)]","hover:border-[var(--accent)]/50"].join(" "),children:[x.jsxs("button",{type:"button","aria-expanded":a,onClick:u=>{u.stopPropagation(),i(s=>!s)},className:"w-full flex items-center justify-between gap-3 text-left cursor-pointer",children:[x.jsxs("div",{className:"min-w-0 flex-1",children:[x.jsx("h4",{className:"text-[15px] font-semibold leading-snug",children:t.name}),x.jsx("div",{className:"mt-0.5 text-[12px] text-fg-muted",children:t.role})]}),x.jsx("span",{className:"shrink-0 text-[11px] text-fg-muted",children:t.period}),x.jsx("svg",{className:["w-4 h-4 shrink-0 text-fg-muted transition-transform duration-200",a?"rotate-180":""].join(" "),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),x.jsx(Vg,{open:a,durationMs:360,children:x.jsxs("div",{className:"mt-3",children:[t.description&&x.jsx("p",{className:"text-[12.5px] leading-relaxed text-fg-muted",children:t.description}),x.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),x.jsx("ul",{className:"space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted",children:t.tasks.map((u,s)=>x.jsxs("li",{className:"flex gap-2",children:[x.jsx("span",{className:"mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-muted)]/40"}),x.jsx("span",{className:"min-w-0",children:u})]},s))}),t.achievements?.length?x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),x.jsx("div",{className:"text-[12px] font-semibold mb-2",children:"성과"}),x.jsx("ul",{className:"space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted",children:t.achievements.map((u,s)=>x.jsxs("li",{className:"flex gap-2",children:[x.jsx("span",{className:"mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/70"}),x.jsx("span",{className:"min-w-0",children:u})]},s))})]}):null,t.techStack?x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),x.jsx(cv,{techStack:t.techStack})]}):null]})})]})},dv=({career:t})=>{const[a,i]=_.useState(!0);return x.jsxs("section",{className:"pb-8 last:pb-0",children:[x.jsx("header",{children:x.jsx("button",{type:"button","aria-expanded":a,onClick:()=>i(u=>!u),className:["w-full rounded-2xl border bg-[var(--bg-elevated)]","px-4 py-3 flex items-start justify-between gap-3","transition-colors duration-200 cursor-pointer",a?"border-gray-400":"border-[var(--border-subtle)]","hover:border-[var(--accent)]/50"].join(" "),children:x.jsxs("div",{className:"min-w-0 flex w-full items-center justify-between",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[t.companyLogo?x.jsx("img",{src:t.companyLogo,alt:`${t.company} logo`,className:"w-9 h-9 shrink-0 object-contain rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] p-1",loading:"lazy"}):x.jsx("div",{className:"w-9 h-9 shrink-0 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)]"}),x.jsx("div",{className:"min-w-0",children:x.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-2 gap-y-1",children:[x.jsx("h3",{className:"text-[16px] font-bold leading-tight truncate",children:t.company}),x.jsx("span",{className:"text-[12px] text-fg-muted",children:t.position})]})})]}),x.jsxs("div",{className:"flex h-full items-center gap-3",children:[x.jsx("div",{className:"text-[12px] text-fg-muted uppercase tracking-wide",children:t.period}),x.jsx("svg",{className:["w-5 h-5 text-fg-muted transition-transform duration-200",a?"rotate-180":""].join(" "),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]})})}),x.jsx(Vg,{open:a,durationMs:420,children:x.jsx("div",{className:"space-y-4 mt-5 ml-2.5",children:t.projects.map((u,s)=>x.jsx(fv,{project:u,index:s},s))})})]})},hv=()=>x.jsx("div",{className:"space-y-0",children:ov.map(t=>x.jsx(dv,{career:t},t.id))}),mv=[{id:"pkg-1",name:"@broadcast-event-system",description:"“React 애플리케이션을 위한 타입 안전(Type-safe) 이벤트 버스 및 브로드캐스트 서비스입니다. React 훅을 사용할 때만 React가 필요하고, 그 외에는 의존성이 전혀 없는 순수 TypeScript(Zero dependencies)입니다.”",version:"1.0.3",githubUrl:"https://github.com/km-kwon/broadcast-event-system",npmUrl:"https://www.npmjs.com/package/broadcast-event-system",techStack:["React","TypeScript","event-driven","web-broadcast"]},{id:"pkg-2",name:"@circular-queue-react",description:"TypeScript와 React를 위한 고성능 원형 버퍼/큐입니다. 의존성은 없고(React는 선택 사항), 로그 처리, 스트리밍 데이터, 롤링 윈도우, 실시간 UI 업데이트에 좋습니다.",version:"1.0.2",githubUrl:"https://github.com/km-kwon/react-circular-queue",npmUrl:"https://www.npmjs.com/package/circular-queue-react",techStack:["React","TypeScript","Data Structure"]}],pv=()=>x.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:x.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),gv=()=>x.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"currentColor",children:x.jsx("path",{d:"M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"})}),xv=({pkg:t})=>x.jsxs("div",{className:"bg-[var(--bg-soft)] rounded-lg p-4 border border-[var(--border-subtle)] hover:border-white/20 transition-colors",children:[x.jsxs("div",{className:"mb-3 w-full ",children:[x.jsxs("div",{className:"w-full flex justify-between items-center",children:[x.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-bold font-mono",children:t.name}),x.jsxs("span",{className:qg,children:["v",t.version]}),t.downloads&&x.jsxs("span",{className:"text-[11px] text-fg-muted",children:["📦 ",t.downloads]})]}),x.jsxs("div",{className:"flex gap-3 text-[12px]",children:[t.githubUrl&&x.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex gap-1.5 text-fg-muted hover:text-fg transition-colors",children:[x.jsx(pv,{}),x.jsx("span",{children:"GitHub"})]}),t.npmUrl&&x.jsxs("a",{href:t.npmUrl,target:"_blank",rel:"noopener noreferrer",className:"flex gap-1.5 text-fg-muted hover:text-fg transition-colors",children:[x.jsx(gv,{}),x.jsx("span",{children:"NPM"})]})]})]}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed",children:t.description})]}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:t.techStack.map(a=>x.jsx("span",{className:La,children:a},a))})]}),bv=()=>x.jsx("div",{className:"grid gap-3 md:grid-cols-1",children:mv.map(t=>x.jsx(xv,{pkg:t},t.id))}),yv=()=>{const[t,a]=_.useState("career"),i=[{key:"career",label:"경력"},{key:"opensource",label:"오픈소스"},{key:"stack",label:"기술 스택"}],u=()=>{switch(t){case"stack":return x.jsx(jp,{});case"career":return x.jsx(hv,{});case"opensource":return x.jsx(bv,{});default:return x.jsx(jp,{})}};return x.jsxs("section",{id:"skills",className:"mb-14",children:[x.jsxs("div",{className:lv,children:[x.jsxs("div",{children:[x.jsx("p",{className:iv,children:"Skills"}),x.jsx("h2",{className:av,children:"경력 & 전문성"})]}),x.jsx("p",{className:rv,children:"안전하고 견고한 제품을 만들기 위해 사용하는 기술들입니다."})]}),x.jsx("div",{className:"flex gap-2 mb-4",children:i.map(s=>x.jsx("button",{onClick:()=>a(s.key),className:uv(t===s.key),children:s.label},s.key))}),x.jsx("div",{className:tv,children:u()})]})},vv=`# AI 시대, “유지보수도 AI가 하면 되지 않나요?”라는 말에 대하여

### – Vibe Coding, 프롬프트, 그리고 VTDM 개선 작업에서 느낀 점

요즘 개발자들 사이에서 이런 말, 한 번쯤은 들어봤을 거다.

> “코딩? 이젠 AI 쓰면 되지 않냐?”
> 
> 
> “유지보수도 이제 AI가 알아서 해줄 텐데…”
> 

겉으로 들으면 그럴싸하다.

나도 ChatGPT, Copilot 같은 도구를 매일 쓰고 있고, 확실히 **“손으로 타이핑하는 일”**은 줄어들고 있다.

실제로 VTDM 개선/유지보수 작업을 맡았을 때도, 나는 AI를 꽤 공격적으로 활용했다.

인수인계 시간은 길지 않았고, 이미 돌아가고 있는 서비스에 개선·요구사항은 계속 들어오는 상황이었다.

- 기존 구조 전체를 완벽히 이해할 시간은 부족하고,
- 그렇다고 “모릅니다”라고 하며 일을 거절할 수도 없고.

그래서 내가 선택한 전략은 이거였다.

> “일단 내가 이해한 요구사항과 지금까지 파악한 구조를 최대한 텍스트로 정리해서
> 
> 
> AI에게 던져놓고, 구현/개선은 AI를 최대한 부려먹자.”
> 

실제로 이 방식은 **꽤 잘 먹혔다.**

- 구현 속도는 빨라졌고,
- 작은 기능 추가나 리팩토링은 AI 도움으로 금방금방 처리됐고,
- 눈에 보이는 개선도 꾸준히 쌓였다.

그런데 어느 순간 이런 생각이 들기 시작했다.

> “내가 직접 코드를 치는 시간은 점점 줄어드는데,
> 
> 
> **이 시스템을 이해하는 비용은 줄지 않고 오히려 늘어나고 있는 것 같다.**
> 
> 이게 과연 옳은 상황인가?”
> 

이 글은 그 질문에서 시작한다.

---

## 1. 유지보수의 본질은 “코드 몇 줄 고치는 것”이 아니다

VTDM를 포함해서, 유지보수 작업을 해본 사람은 안다.

우리가 시간을 쓰는 포인트는 대부분 **타이핑**이 아니라 **이해**다.

조금만 쪼개보면 유지보수는 대략 이런 단계를 거친다.

1. **도메인 이해**
    - 이 기능이 “왜” 존재하는지?
    - 어떤 비즈니스 규칙/정책/예외를 만족해야 하는지?
2. **현재 구조 이해**
    - 이 코드가 어느 모듈/서비스/컴포넌트와 연결되어 있는지?
    - 바꿨을 때 어디까지 파급효과가 갈 수 있는지?
3. **변경 설계**
    - 어디를 수정하고, 어디는 건드리면 안 되는지?
    - 추상화 수준을 올릴지 내릴지?
    - 나중에 다시 바뀔 걸 감안하면 어떤 구조가 버틸 수 있는지?
4. **구현 + 테스트**
    - 실제 코드 수정
    - 테스트 작성/수정
    - 배포/롤백 전략까지 포함한 검증

AI가 가장 잘 도와줄 수 있는 부분은 **4번**이다.

우리가 생각한 설계를 구현해 주고, 코드 템플릿을 만들어주고, 테스트 코드까지 어느 정도 뽑아줄 수 있다.

반대로, **1~3번**에 해당하는:

- 도메인/문제 정의
- 아키텍처 설계
- 변경 영향 범위 판단

이 부분은 여전히 **사람의 머리**에서 결정된다.

VTDM 작업 때 내가 느꼈던 이상한 감각도 여기서 왔다.

- “코드 수정” 그 자체는 AI가 많이 대신해 주는데,
- 정작 **내가 감당해야 하는 이해 비용과 책임**은 줄지 않는다.
- 오히려 *“AI가 바꿔놓은 코드까지 포함해서”* 이해해야 할 범위가 늘어난다.

> 개선은 계속 되는데,
> 
> 
> 내가 시스템 전체를 “제대로 이해하고 있다”는 느낌은 점점 안 든다.
> 
> 이게 과연 건강한 상태일까?
> 

---

## 2. 프롬프트 엔지니어링 = 새로운 설계 방식

AI를 쓸 때 우리가 작성하는 프롬프트는 사실 **요구사항 + 설계 + 제약 조건이 섞인 자유형 명세서**에 가깝다.

예를 들어, 같은 기능이라도 이런 차이가 있다.

- “로그인 화면 만들어줘”
- “이메일/비밀번호 기반 로그인 폼을 만들고,
    - 입력값은 클라이언트에서 1차 검증,
    - 서버 에러 메시지는 토스트로 노출,
    - 로딩 상태/에러 상태를 명확하게 분리,
    - React + Zustand 조합,
    - 나중에 소셜 로그인이 추가될 걸 감안해서 확장 가능한 구조로 작성해줘”

둘 다 “로그인 화면”이라는 기능을 요구하지만,

**결과물의 구조·품질·유지보수성은 완전 달라진다.**

여기서 중요한 포인트:

> 프롬프트를 잘 쓴다는 건
> 
> 
> 단순히 “AI에게 말을 예쁘게 한다”가 아니라,
> 
> **문제를 제대로 정의하고, 제약을 설정하고,
> 설계 의도를 언어로 풀어낼 수 있다**는 뜻이다.
> 

나는 VTDM 작업을 하면서 이걸 아주 많이 느꼈다.

- 내가 도메인/요구사항을 대충 이해한 상태에서 AI에게 시키면
    
    → 코드도 그 수준에서 “대충” 나온다.
    
- 내가 요구사항/맥락을 깊게 이해하고,
    
    엣지 케이스까지 프롬프트에 녹여서 지시하면
    
    → 코드도 훨씬 안정적이고, 나중에 수정하기 편한 구조로 나온다.
    

그래서 지금은 이렇게 생각한다.

> “프롬프트 엔지니어링”은 AI와 잘 노는 기술이 아니라,
> 
> 
> **엔지니어링 능력을 텍스트로 표현하는 새로운 인터페이스**다.
> 

문제는, 이게 또 다른 종류의 부담을 만든다는 것이다.

- 코드를 직접 치는 시간은 줄었는데,
- 오히려 **프롬프트를 잘 쓰기 위한 이해/설계 시간**은 더 늘어난다.

즉,

VTDM에서 느꼈던 그 기묘한 감각:

> “손으로 치는 코드는 줄어가는데,
> 
> 
> 머리로 이해해야 하는 범위와 책임은 오히려 늘어나는 상태”
> 

이건 이상한 게 아니라,

어쩌면 **“AI 도입 초기에 자연스럽게 거쳐야 할 과도기 상태”**일 수도 있다.

---

## 3. Vibe Coding: 어디까지는 좋고, 어디부터는 위험한가

“바이브 코딩(vibe coding)”이라는 말도 요즘 많이 보인다.

AI랑 이런저런 대화를 주고받으면서 적당히 신나게 코드를 만들어 가는 방식.

솔직히 말해서,

**토이 프로젝트, 개인 실험, 작은 사이드 프로젝트**에서는

이 방식이 정말 잘 먹힌다. 나도 이런 상황에서는 그냥 즐긴다.

문제는, VTDM처럼:

- 실제 팀이 쓰고,
- 고객/실제 업무가 걸려 있고,
- 계속해서 요구사항과 유지보수가 발생하는 시스템에

이 vibe를 그대로 가져올 때이다.

이런 시스템에서는,

- 변경의 파급효과를 예측해야 하고
- 장애/보안/규격 측면에서의 리스크를 관리해야 하고
- 팀이 교체되어도 이해 가능한 구조를 유지해야 한다.

여기서 만약

> “어차피 나중에 AI가 또 잘 바꿔주겠지”
> 

라는 마인드로 계속 덕지덕지 붙이기만 하면,

- **코드는 점점 복잡해지고**
- **이해 비용은 기하급수적으로 늘고**
- 나중에는 AI에게 던져도 “뭐가 맞는지 내가 판단할 수 없는 상태”가 올 수 있다.

VTDM 개선 작업을 하면서 내가 느낀 불편함은 바로 이 지점이었다.

> “지금은 개선이 잘 되고 있는 것처럼 보이는데,
> 
> 
> 이 구조를 1~2년 뒤에 누군가에게 넘겨줘도 괜찮을까?”
> 

---

## 4. AI가 도와줄 수 있는 것 vs 절대 넘기면 안 되는 것

AI를 “과대평가”하지도, “과소평가”하지도 않으려면

역할을 명확히 나눌 필요가 있다.

### AI가 정말 잘하는 것

- 반복적인 패턴 변환 (JS → TS, 스타일 정리, API 호출 패턴 통일 등)
- 보일러플레이트 코드 생성 (API 클라이언트, DTO, 폼 코드 등)
- 테스트 코드/문서 초안 작성
- 함수/파일 단위의 코드 설명 및 리뷰 보조

실제로 VTDM에서도 이런 일들은 AI 덕을 많이 봤다.

- 반복되는 CRUD/폼 처리
- 비슷한 패턴의 페이지/컴포넌트들
- 타입 보강, 리팩토링 초안

이건 AI한테 시켜놓고, 나는 그만큼 도메인 이해와 구조 고민에 더 시간을 쓸 수 있었다.

### AI에게 넘기면 위험한 것

반대로, 이런 것들은 여전히 **사람 책임**이다.

- 이 변경이 **비즈니스적으로** 맞는지 판단
- 도메인 전문가들이 합의한 규칙/정책/예외를 이해하고 반영
- 우리 회사의 인프라/조직 구조/프로세스를 고려한 변경 설계
- 장애 발생 시 “왜 이런 설계를 했는지”까지 설명해야 하는 책임

AI는 말 그대로 **강력한 공구**다.

> 어디를 파낼지, 어디를 남길지,
> 
> 
> 어느 정도까지 깊게 들어갈지는
> 
> 결국 사람이 결정해야 한다.
> 

---

## 5. 그럼, VTDM에서 내가 느낀 그 상황은 “옳은가?”

이제 처음 질문으로 돌아가 보자.

> “나는 AI를 열심히 써서 VTDM를 개선하고 있고,
> 
> 
> 코드를 직접 치는 시간은 줄어들었고,
> 
> 개선 자체는 잘 되고 있다.
> 
> 하지만 이해 비용은 줄지 않고, 오히려 늘어나는 느낌이다.
> 
> 이게 과연 옳은 상황일까?”
> 

내 결론은 이렇다.

1. **단기적으로는 꽤 괜찮은 전략일 수 있다.**
    - 인수인계 시간이 짧았고,
    - 시스템 전체를 한 번에 다 이해할 수 없는 상황에서,
    - “요구사항을 빠르게 반영하면서, 동시에 맥락을 점진적으로 넓혀가는 전략”으로서는 충분히 의미가 있다.
2. **하지만 그대로 계속 가면, 중장기적으로 리스크가 된다.**
    - 이해되지 않은 채로 AI가 바꾼 코드가 쌓이면,
    - 나중에는 나조차 “왜 이렇게 됐는지” 설명하기 어려운 상태에 도달한다.
    - 그 순간부터는 AI한테 던져도, 그 결과를 내가 검증할 수가 없다. (가장 무서운 지점)

그래서 내가 요즘 스스로에게 걸어놓은 기준은 이거다.

- **“내가 이해하지 못하는 코드/설계는 승인하지 않는다.”**
- AI가 짜준 코드라도,
    - 내가 디버깅할 수 있을 정도로
    - 흐름과 책임을 설명할 수 있을 정도로
    - 최소한의 그림은 잡힌 상태가 아니면
        
        → 그냥 다시 짜거나, 더 단순한 구조를 요구한다.
        

그리고 가능하면 이런 식으로 “지식 부채”를 같이 갚으려고 한다.

- 기능 개발을 할 때
    - 관련된 모듈/도메인에 대한 **간단한 다이어그램** 하나씩 추가
    - “이 변경이 왜 이렇게 설계되었는지”에 대한 **두세 줄 메모** 남기기
- 도메인 단위로 **폴더/상태/API**를 정리하는 리팩토링을
    
    작은 단위로 조금씩 끼워 넣기 (FSD/도메인 아키텍처 쪽 고민이 여기 붙음)
    

즉,

> “AI를 안 쓰자”가 아니라,
> 
> 
> “AI를 쓰면서도 내가 감당 가능한 이해 범위를 유지하자”에 가깝다.
> 

---

## 6. 앞으로 개발자의 역할은 어떻게 바뀔까?

이 모든 경험을 통해 지금은 이렇게 생각하게 됐다.

- “AI 쓰면 되지 않냐”는 말은
    
    개발을 단순 구현 노동으로 보는 사람의 관점에 가깝고,
    
- “AI를 써도 설계·도메인·품질 책임은 사람이 진다”는 말은
    
    현업 엔지니어 관점에 훨씬 가깝다.
    

AI가 코드를 대신 써줄 수는 있다.

하지만,

> “무엇을, 어떻게 만들어야 하는가?”를 결정하는 일,
그리고 그 결정에 책임지는 일은
아직은, 그리고 꽤 오랫동안, 사람의 몫이다.
> 

VTDM 개선 작업을 하면서 나는 그걸 더 강하게 느끼게 됐다.

- AI 덕분에 **개선 속도는 빨라졌고**,
- 동시에 **내가 책임져야 할 이해/설계의 범위도 커졌고**,
- 그래서 그 두 가지를 어떻게 균형 맞출지 계속 고민하는 중이다.

아마 이 균형을 어디에 두느냐가,

앞으로 개발자 커리어에서 중요한 선택 포인트가 될 것 같다.

AI가 내 일을 “빼앗아가는 도구”가 아니라,

**내가 책임지는 범위를 더 넓혀주는 도구**가 되도록 쓰고 싶다.

그리고 지금 그 중간 지점 어딘가에서,

하루하루 삽질하면서 감을 잡아가는 중이다.`,Sv=`# JS 기본 동작원리, “진짜 뼈대”만 잡아보기

JS 공부하다 보면 어느 순간 이런 상태가 된다.

> “콜스택? 이벤트루프? 비동기?
>
> 머리로는 아는데… 왜 그런지 느낌이 안 와…”

그래서 오늘은 **기본기에 충실하게**

“JS가 어떻게 실행되고, 비동기는 어떻게 굴러가며, 브라우저/Node는 뭐가 다른지”를 **뼈대 중심**으로 정리해본다.

---

## 0. 한 문장 요약부터

JS의 실행은 결국 이거다.

> JS는 싱글 스레드로 콜스택에서 실행되고, 비동기는 호스트(브라우저/Node)가 맡았다가 큐에 넣고, 이벤트 루프가 스택이 빌 때 다시 실행시킨다.

이 한 줄이 이해되면 나머지 개념은 다 “그림 맞추기”가 된다.

---

## 1. JS는 어디서 실행되냐?

### 브라우저

브라우저는 내부에 **JS 엔진**이 있다.

- Chrome / Edge: V8
- Firefox: SpiderMonkey
- Safari: JavaScriptCore

브라우저에서 JS는 보통 HTML 파싱 중 \`<script>\` 만나면 실행된다.

(기본은 DOM 생성 잠깐 멈추고 JS부터 실행하는 흐름)

### Node.js

Node는 브라우저 없이도 JS를 돌리게 해주는 런타임.

- JS 엔진(V8 같은 것) + 시스템 기능(파일, 네트워크 등)을 묶어줌
- 이벤트 루프/I/O는 보통 **libuv** 기반

즉 **브라우저냐 Node냐**는 “JS 문법” 차이가 아니라,

> JS 엔진이 붙어있는 ‘호스트 환경’이 다르다
>
> (브라우저는 DOM/렌더링, Node는 파일/서버/CLI)

---

## 2. JS 엔진의 핵심 구조: Heap + Call Stack

JS 실행 원리를 이해할 때 제일 먼저 잡아야 할 두 개:

### 2-1) Memory Heap

- 객체/배열/함수 같은 **데이터 덩어리**가 저장되는 공간
- 참조가 끊기면 GC가 정리함 (가비지 컬렉션)

### 2-2) Call Stack

- “지금 실행 중인 함수가 뭔지”를 쌓아두는 스택(LIFO)
- **함수 호출 → push**, 함수 종료 → pop

예를 들어 이런 코드:

\`\`\`jsx
functionadd(a, b) {
return a + b;
}

functionavg(a, b) {
returnadd(a, b) /2;
}

console.log(avg(10,20));
\`\`\`

실행 흐름 느낌:

1. \`console.log(...)\` push
2. \`avg(...)\` push
3. \`add(...)\` push
4. add 끝 → pop
5. avg 끝 → pop
6. log 끝 → pop

**스택이 비는 순간**이 엄청 중요하다.

왜냐면 그때 비동기 콜백들이 “들어올 기회”를 얻기 때문.

---

## 3. JS는 싱글 스레드다 (이게 모든 것의 시작)

JS는 기본적으로 **한 번에 한 줄기 실행(싱글 스레드)** 이다.

그래서 콜스택에 무거운 일이 걸리면:

- 클릭 이벤트 처리도 못 하고
- setTimeout 콜백도 못 하고
- 화면 업데이트도 밀리고
- 체감은 “버벅임”으로 나타남

즉,

> 메인 스레드(콜스택)가 막히면 모든 게 멈춘다.

그런데도 웹에서는 “동시에 여러 일”이 되는 것처럼 보이잖아?

그걸 가능하게 하는 게 다음 파트.

---

## 4. 비동기는 누가 해주냐? (Web APIs / Node APIs)

중요 포인트:

> setTimeout, 네트워크 요청, DOM 이벤트 같은 건
>
> **JS 엔진이 직접 처리하는 게 아니다.**

### 브라우저라면

- Web APIs(타이머, fetch/XHR, DOM 이벤트 등)가 맡는다.

### Node라면

- Node의 시스템 API(파일 I/O, 네트워크 등)가 맡고
- 내부적으로 이벤트 루프/libuv가 돌려준다.

즉 JS는 “요청만 던지고”, 실제 작업은 호스트가 처리한 뒤

완료되면 “콜백을 큐에 넣어” 다시 JS로 돌아오게 한다.

---

## 5. 큐가 2개다: Task Queue / Microtask Queue

이거 체감상 제일 중요함. 실행 순서가 여기서 갈린다.

### 5-1) Task Queue (매크로태스크)

대략 이런 애들이 여기 들어온다:

- \`setTimeout\`, \`setInterval\`
- 사용자 이벤트(click 등)
- (환경에 따라) 메시지 이벤트 등

### 5-2) Microtask Queue

대략 이런 애들이 여기에 들어온다:

- \`Promise.then / catch / finally\`
- \`queueMicrotask\`
- (브라우저) MutationObserver 등

그리고 **마이크로태스크가 우선순위가 더 높다.**

---

## 6. Event Loop: “스택 비면, 큐에서 꺼내서 실행”

이벤트 루프를 어렵게 말하면 복잡한데, 진짜 뼈대는 다음과 같다.

1. 콜스택이 비었나 확인
2. 비었으면 **Task Queue에서 하나 꺼내 실행**
3. 그 Task가 끝나면 **Microtask를 먼저 싹 비움**
4. 다음 Task로 넘어감

여기서 “마이크로태스크를 먼저 싹 비운다”가 포인트.

---

## 7. 실행 순서 감 잡기 예제 (국룰)

\`\`\`jsx
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
\`\`\`

대부분 결과:

> A → D → C → B

이유:

- A, D는 동기라서 콜스택에서 즉시 실행
- Promise.then은 **Microtask**
- setTimeout은 **Task**
- 그래서 **microtask가 task보다 먼저 끼어든다**

---

## 8. “0ms setTimeout인데 왜 바로 안 찍힘?”의 정체

\`setTimeout(fn, 0)\`은 “지금 당장”이 아니라

> “최소 0ms 뒤에, Task Queue에 넣어줄게”
>
> (단, 콜스택이 비어야 실행됨)

이라서, 이미 스택이 바쁘면 계속 밀린다.

---

## 9. Node에서도 결국 뼈대는 같다

Node도 본질은 동일하다.

- JS는 콜스택에서 실행 (싱글 스레드)
- 비동기 작업은 호스트가 처리
- 완료되면 큐에 넣고 이벤트 루프가 다시 실행

차이는 “호스트가 제공하는 기능”이 다르다는 점:

- 브라우저: DOM/렌더링/이벤트 중심
- Node: 파일/네트워크/서버/CLI 중심

---

## 오늘의 결론

- JS 실행의 중심은 **Call Stack**이다.
- 비동기는 **호스트(Web APIs/Node APIs)** 가 처리하고
- 완료된 콜백은 **큐**에 들어갔다가
- **Event Loop**가 **스택이 비었을 때** 다시 실행시킨다.
- 그리고 **Promise 계열(Microtask)이 setTimeout(Task)보다 먼저 실행되는 경우가 많다.**
`,kv=`# JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)

### – ECMAScript, V8, 브라우저/Node를 한 번에 정리해보기

자바스크립트 이벤트 루프를 공부하다 보면 꼭 이런 혼란이 온다.

> “V8이 이벤트 루프 돌리는 거 아냐?”
>
> “setTimeout은 브라우저가 하는 거라며?”
>
> “ECMAScript? 그건 또 뭐야…?”

검색해 보면 “매크로 태스크 / 마이크로태스크 / 이벤트 루프” 설명은 많은데,

**“누가 뭘 하는지”**에 대한 계층 구조를 정확히 찍어주는 설명은 의외로 잘 안 보인다.

그래서 이 글에서는 이벤트 루프 얘기하기 전에, 먼저 이 셋을 분리해서 정리해보려고 한다.

- **ECMAScript 스펙**
- **JS 엔진(V8 등)**
- **호스트 환경(브라우저, Node.js 등)**

이 세 개를 구분해서 보면

Promise, async/await, setTimeout, Node의 libuv까지 한 번에 머릿속에 정리가 된다.

---

## 0. 큰 그림 먼저: 세 레이어를 한 방에 보고 가기

먼저 전체 구조를 한 컷으로 보면:

\`\`\`
[ECMAScript 스펙]
  - 자바스크립트 언어의 "룰북" (문서)

        ↓ 이걸 구현한 게

[JS 엔진 (V8, SpiderMonkey, JavaScriptCore...)]
  - 파서, 컴파일러(JIT), 실행기
  - 콜 스택, 힙, GC
  - Promise, microtask queue 구현

        ↓ 이 엔진을 품고 돌리는

[호스트 환경 (브라우저, Node.js, Deno...)]
  - 이벤트 루프 (타이머, I/O, UI 이벤트 처리)
  - DOM, setTimeout, fetch, fs, net, ...
  - "지금 이 콜백 실행해줘"라고 엔진에게 부탁
\`\`\`

조금 더 구체적으로 말하면:

- **ECMAScript**: “자바스크립트는 이렇게 동작해야 한다”라고 적힌 **설명서/규격 문서**
- **V8 같은 엔진**: 그 규격을 실제 코드로 구현한 **C++ 프로그램**
- **브라우저/Node 같은 호스트**: OS 위에서 돌아가면서,
  **엔진을 안에 품고, 이벤트 루프와 각종 API(DOM/타이머/네트워크 등)를 제공하는 껍데기**

여기까지만 잡혀도, “누가 이벤트 루프를 돌리냐”, “setTimeout은 어디 꺼냐” 같은 질문이 훨씬 덜 헷갈린다.

---

## 1. ECMAScript: 자바스크립트의 “법전”

### 1-1. ECMAScript가 뭔데?

우리가 보통 “자바스크립트”라고 부르는 언어의 공식 이름이 사실 **ECMAScript**다.

- TC39라는 위원회가 매년 ECMAScript 2020, 2021, 2022… 이런 식으로 스펙을 찍어낸다.
- 이 문서 안에는:
  - 문법: \`if\`, \`for\`, \`function\`, \`class\`, \`async/await\`…
  - 타입 시스템: Number, String, Object, Symbol, BigInt…
  - 빌트인 객체: \`Array.prototype.map\`, \`Promise\`, \`Map\`, \`Set\`…
  - 심지어 **Promise가 resolve 되면 어떤 “Job”이 큐에 들어가고, 언제 실행되어야 하는지**까지
    알고리즘 수준으로 적혀 있다.

중요한 포인트:

> ECMAScript는 문서다.
>
> 코드가 아니다.

그래서 여기에는 “타이머를 이런 OS API로 구현해라” 이런 말은 없다.

단지:

> “Promise가 resolve되면 PromiseReactionJob을 Job Queue에 추가해라”

같은 말만 써 있고, 그 Job Queue를 **어떻게 / 언제 처리할지**는

엔진/호스트 쪽에서 구현해야 할 내용이다.

### 1-2. ECMAScript가 **하지 않는 것들**

ECMAScript 스펙에는 **다음이 없다**:

- \`window\`, \`document\`, \`addEventListener\`
- \`setTimeout\`, \`setInterval\`
- \`XMLHttpRequest\`, \`fetch\`
- DOM, CSS, Canvas
- 파일 시스템, TCP 소켓, HTTP 서버…

이건 모두 “언어”가 아니라 **플랫폼 API**다.

그래서 구조를 이렇게 볼 수 있다.

- ECMAScript: 순수 언어 스펙
- 그 위에 브라우저/Node가 **자기만의 API**를 얹어서 “환경”을 만든다.

---

## 2. JS 엔진(V8 등): 스펙을 코드로 만든 C++ 프로그램

이제 두 번째 레이어.

### 2-1. V8은 정확히 뭔가?

V8은 구글이 만든 **자바스크립트 엔진**이다.

- 크롬, 엣지(요즘), Node.js, Deno 등이 V8을 안에 품고 있다.
- 하는 일:
  1. JS 소스 코드를 문자열로 입력받는다.
  2. 토큰화/파싱 → AST 생성.
  3. 바이트코드 / 머신코드로 **컴파일(JIT)**.
  4. 런타임에 그 코드를 실행하면서 콜 스택/힙/GC 관리.
  5. \`Promise\`, \`Map\`, \`Set\`, \`Array.prototype.map\` 같은 빌트인 동작 구현.
  6. **Promise Job Queue / Microtask Queue**도 여기서 관리.

한 줄로 말하면:

> “ECMAScript 스펙에 적힌 규칙을
>
> 실제로 지켜가며 자바스크립트를 실행해주는 C++ 프로그램”

우리가 흔히 “JS가 컴파일된다”, “엔진이 최적화한다”고 말하는 대상이 바로 이 엔진이다.

### 2-2. V8이 **모르는** 것들

이게 포인트다:

> V8은 setTimeout, DOM, 네트워크, 이벤트 루프 전체를 혼자서 책임지지 않는다.

V8은:

- JS 코드 파싱/실행
- Promise 상태 관리, microtask queue, GC 등 “언어 레벨 런타임” 구현

까지 담당하고,

- **“언제 어떤 JS를 실행해야 하는지”**,
- **“타이머/네트워크/이벤트에서 들어오는 콜백은 언제 실행해야 하는지”**

는 **호스트(브라우저/Node)**가 결정한다.

즉, V8은 “실행기”,

브라우저/Node는 “언제 무엇을 실행시킬지 스케줄링하는 운영자” 역할.

---

## 3. 호스트 환경: 브라우저, Node.js, Deno…

세 번째 레이어가 여기다.

### 3-1. 호스트 환경의 역할

브라우저(Chrome, Firefox, Safari…)나 Node.js는 한마디로

> OS 위에서 돌아가는 큰 프로그램이고,
>
> 그 안에 V8 같은 엔진을 **임베딩(embed)** 해서 JS를 실행한다.

이 호스트 환경이 하는 일은 대략 이렇다:

1. **엔진(V8)을 초기화하고, JS 코드 실행**
   - 예: \`<script>\` 태그 실행, Node.js에서 \`node app.js\` 실행
2. **플랫폼 API 제공**
   - 브라우저:
     - DOM, \`window\`, \`document\`, \`addEventListener\`, \`fetch\`, \`setTimeout\`…
   - Node.js:
     - \`fs\`, \`http\`, \`net\`, \`setTimeout\`(libuv 기반), \`process\`…
3. **이벤트 루프와 Task 큐 관리**
   - 타이머, 네트워크, 사용자 입력 등 시스템 이벤트를 감시하고
   - 콜백을 Task/Microtask 큐에 쌓아두었다가,
   - 적절한 타이밍에 **V8에 “이 콜백 실행해줘”라고 요청**한다.

즉, 호스트는:

> \\*\\*“세상의 모든 입력(I/O, 타이머, 사용자 이벤트)을 받아서
>
> 자바스크립트 콜백 호출로 변환해주는 거대한 어댑터”\\*\\*라고 보면 된다.

### 3-2. 브라우저 엔진 vs JS 엔진

여기서 헷갈리기 쉬운 개념:

- **브라우저 엔진**(예: Blink, WebKit, Gecko)은 사실 여러 컴포넌트 묶음이다.
  - **렌더링 엔진**: HTML 파싱, DOM, CSS, 레이아웃, 페인트
  - **JS 엔진**: V8(Chrome/Edge), SpiderMonkey(Firefox), JavaScriptCore(Safari)
  - 네트워크, GPU, 프로세스 관리, 등등…
- 즉:
  - V8 = 브라우저 엔진 안에서 “JS만 담당하는 모듈”
  - 브라우저 엔진 = V8 + 렌더링 + DOM + 이벤트 루프… 전체 덩어리

Node.js 쪽은 조금 다르지만 구조는 비슷하다.

- JS 엔진: V8
- 이벤트 루프 + IO: libuv
- 파일 시스템, HTTP, 등: Node Core 모듈

---

## 4. 세 레이어를 “이벤트 루프” 관점에서 다시 연결해보기

이제 진짜 하고 싶은 이야기:

**이 세 레벨이 어떻게 합쳐져서 이벤트 루프/비동기 동작을 만드는가?**

### 4-1. ECMAScript 레벨에서 보는 비동기: Job Queue

ECMAScript는 이벤트 루프를 직접 구현하지 않는다. 대신 이렇게 말한다:

- “Promise가 resolve되면 \`PromiseReactionJob\`이라는 Job을 만들어 Job Queue에 넣어라.”
- “호스트는 적절한 타이밍에 이 Job들을 꺼내 실행해야 한다.”

여기서 말하는 Job이 바로 우리가 흔히 부르는 **마이크로태스크**의 추상 모델이다.

즉 ECMAScript는:

- “어떤 일이 ‘나중에 실행되어야 하는지’”를 정의하고
- “어떤 순서로 Job을 처리해야 하는지”를 알고리즘으로 적어둔다.

### 4-2. 엔진(V8)의 역할: Microtask Queue 구현

V8은 ECMAScript에서 요구한 Job Queue를 실제로 구현한다.

- \`Promise.then\`, \`queueMicrotask\`가 호출되면:
  - V8 내부의 microtask queue에 콜백과 관련 데이터가 쌓인다.
- 그리고 호스트가 “지금 microtask 처리해”라고 호출하면
  - V8은 queue가 빌 때까지 그 Job들을 처리한다.

여기서 중요한 구조:

> “microtask queue”라는 구조는 엔진이 갖고 있고,
> “언제 비울지” 결정하는 것은 호스트다.

### 4-3. 호스트(브라우저)의 역할: Task → Microtask → 렌더링

브라우저 이벤트 루프는 대략 이렇게 돈다:

1. **Task 하나 선택**
   - 예: 타이머 콜백, 클릭 이벤트 콜백, \`<script>\` 실행 등
2. 그 Task 안의 JS를 V8에게 실행시키기
   - 동기 코드, 그 안에서 Promise.then, queueMicrotask 등록 가능
3. Task 실행이 끝나 콜 스택이 비면
4. **이제 microtask 처리 타이밍**
   - V8의 microtask queue를 비움 (Promise.then, queueMicrotask 등)
5. 렌더링 타이밍이면
   - DOM 변경사항을 기반으로 레이아웃/페인트
6. 다음 Task로

그래서 흔히 나오는 패턴:

\`\`\`jsx
setTimeout(() => console.log("macro"), 0);
Promise.resolve().then(() => console.log("micro"));
\`\`\`

실행 순서:

1. 현재 스크립트(하나의 Task) 실행
   - Promise.then → microtask queue
   - setTimeout → Task queue
2. Task 종료 → **microtask queue 비움** → \`"micro"\`
3. 그 다음 Task에서 \`"macro"\`

→ **항상 \`Promise.then\`이 \`setTimeout(0)\`보다 먼저**인 이유가 이 구조에서 나온다.

Node.js도 구조는 비슷하지만,

- libuv 이벤트 루프가 \`timers → poll → check\` 같은 phase를 가지고 있고
- 각 phase 끝에서 \`process.nextTick\` queue와 V8 microtask queue를 비워주는 식으로 동작한다.

---

## 5. 정리: “누가 뭘 하는지”만 정확히 기억하면 된다

다시 한 번, 핵심만 정리해보면:

### 1) ECMAScript 스펙

- 자바스크립트 언어의 **룰북/문서**
- “Promise가 resolve되면 이런 Job을 큐에 넣어야 한다”,
  “Job은 이렇게 run-to-completion 해야 한다” 정도까지 정의
- DOM, 브라우저, setTimeout, 파일 IO에 대한 건 **전혀 모른다**

### 2) JS 엔진(V8 등)

- ECMAScript 스펙을 실제 C++ 코드로 구현한 **실행기**
- 파싱/컴파일/JIT/GC, \`Promise\`, microtask queue 구현
- Promise.then/queueMicrotask → 엔진 내부 microtask queue에 쌓음
- 하지만:
  - **언제** 그 큐를 비울지는 호스트가 정해준 타이밍에 맞춰 호출해야 함

### 3) 호스트 환경(브라우저, Node.js…)

- OS 위에서 돌아가는 큰 프로그램
- 엔진(V8)을 심어서 JS를 실행시키고
- 이벤트 루프 + Task 큐를 직접 관리
- 타이머/네트워크/사용자 입력 등을 감시하다가,
  - “이 콜백 실행할 차례야” → V8에 JS 콜백 실행 요청
- 브라우저: DOM/렌더링 + 각종 Web API 제공
- Node: 파일 시스템, 네트워크, 서버 API 등 제공

---

## 6. 그래서 앞으로 이벤트 루프 공부할 때는…

이제 문서나 글을 읽을 때 이런 식으로 구분해서 보는 게 좋다.

- “ECMAScript Job Queue” → **언어 스펙 레벨 이야기**
- “Promise.then, microtask queue” → **엔진(V8) 레벨 구현 + 호스트 타이밍**
- “setTimeout, 클릭 이벤트, libuv phase” → **호스트(브라우저/Node) 레벨 이야기**

이 세 레벨만 분리해서 생각해도:

- 왜 Promise.then이 setTimeout보다 먼저인지
- 왜 브라우저/Node 이벤트 루프가 서로 조금씩 다르게 설명되는지
- 왜 “V8 혼자 이벤트 루프를 돌린다”고 말하면 틀린 건지

이런 것들이 전부 납득이 갈 거다.
`,wv=`# React × Zustand × Closure: \`useCallback\` 쓰다가 stale closure에 뚝배기 맞은 썰 (그리고 구조적으로 막는 법)

React에서 Zustand를 쓰다 보면 “상태는 분명 바뀌었는데 이벤트 핸들러가 옛날 값을 찍는다” 같은 현상을 한 번쯤 만나게 된다.
처음엔 **“zustand가 렌더 안 타나?”**, **“React가 업데이트 안 하나?”** 같은 느낌인데… 결국 원인은 React의 아주 고전적인 함정:

> **stale closure**
> (리렌더로 값은 바뀌었는데, 콜백 함수는 옛날 값을 클로저로 물고 있는 상태)

이 글은 내가 실제로 겪었던 stale closure 케이스를 기준으로,
**왜 이런 일이 생기는지(메모리/렌더 관점)**,
그리고 **Zustand에서 이걸 구조적으로 차단하는 패턴(getState)**까지 정리한 글이다.

---

## 0. 상황: “값은 바뀌는데 핸들러는 옛날 값만 본다”

예를 들어 이런 코드가 있다고 치자.

\`\`\`tsx
const value = useStore((s) => s.value);

const handle = useCallback(() => {
  console.log(value);
}, []);
\`\`\`

\`value\`가 바뀌면 컴포넌트는 리렌더가 되고 화면도 바뀐다.
근데 \`handle()\`을 눌러보면 콘솔엔 **첫 렌더 때 value만 계속 찍힌다.**

“아니… UI는 바뀌는데 왜 handle만 과거에 살고 있냐?”

이게 stale closure다.

---

## 1. stale closure의 본질: “콜백은 과거 렌더의 메모리를 들고 있다”

React 컴포넌트는 리렌더될 때마다 **함수 본문을 다시 실행**한다.

즉 이 코드:

\`\`\`tsx
function Component() {
  const value = useStore((s) => s.value);
  // ...
}
\`\`\`

는 \`value\`가 바뀌면 \`Component()\`가 다시 실행되며 **새로운 렌더 컨텍스트**가 만들어진다.

여기서 중요한 포인트:

- 렌더마다 \`value\`는 새로운 값으로 계산된다.
- 렌더마다 \`handle\` 같은 함수도 “원칙적으로” 새로 만들어질 수 있다.
- 그런데 \`useCallback([])\`은 “함수를 재생성하지 말아라”라는 강력한 힌트를 준다.

그래서 결과적으로 이런 일이 발생한다.

### ✅ \`useCallback([])\`이 하는 일

- 첫 렌더 시점에 \`handle\`을 만들고
- 그 \`handle\`을 계속 재사용한다(참조 안정성 유지)

### ✅ closure가 하는 일

- \`handle\` 내부에서 참조한 \`value\`는
- **handle이 생성되던 시점의 렌더 스코프 값을 캡처한다**

즉:

> \`handle\`은 “첫 렌더의 value”를 클로저로 물고 있고,
> \`useCallback([])\`은 그 함수를 계속 재사용하게 만들기 때문에
> 이후 렌더에서 \`value\`가 바뀌어도 \`handle\`은 갱신되지 않는다.

**stale closure = “함수가 만들어질 당시의 스냅샷을 계속 들고 있음”**
이게 핵심이다.

---

## 2. 의존성 배열로 해결: 가장 정석, 가장 흔한 방식

정석은 이거다.

\`\`\`tsx
const handle = useCallback(() => {
  console.log(value);
}, [value]);
\`\`\`

\`value\`가 바뀌면 콜백도 다시 만들어지고,
새 콜백은 최신 \`value\`를 클로저로 캡처한다.

### 장점

- React 방식에 가장 충실
- 코드 의도가 명확 (\`handle\`이 \`value\`에 의존한다)

### 단점(현업에서 자주 문제되는 포인트)

- 콜백이 자주 재생성됨
- 이 콜백이 props로 내려가거나, memoized component의 비교 기준이 되면
  **리렌더링 폭탄**으로 이어질 수 있음
- 특히 \`value\`가 빈번히 변하는 값이면(예: 스트리밍 로그, 입력, 마우스, 타이머)
  \`[value]\`는 사실상 “useCallback 쓰는 의미가 줄어든다”

결국 “정석이긴 한데, 구조적으로 이게 맞나?”라는 생각이 든다.

---

## 3. Zustand에서 \`getState()\`를 쓰면 왜 stale closure가 구조적으로 사라질까?

여기서 Zustand가 등장한다.

Zustand는 React state처럼 “컴포넌트 내부 상태”가 아니라,
**컴포넌트 바깥 전역 store 객체**에 상태가 존재한다.

중요한 차이:

### React state / selector 기반 값

- 렌더 시점에 선택되고(=스냅샷)
- 그 렌더 스코프에 캡처될 수 있음(=클로저 위험)

### Zustand store (\`useStore.getState()\`)

- React 렌더 스코프와 무관하게
- store 객체에서 “지금 이 순간의 값”을 읽는다

즉 이런 코드:

\`\`\`tsx
const handle = useCallback(() => {
  const current = useStore.getState().value;
  console.log(current);
}, []);
\`\`\`

여기서 \`handle\`은 첫 렌더 때 만들어지고 계속 재사용되지만,
**매번 실행될 때마다 store에서 최신 값을 조회**한다.

### ✅ 이 방식이 stale closure를 원천 차단하는 이유

stale closure가 성립하려면 조건이 필요하다:

- 함수 내부에서 “렌더 스코프 변수(value)”를 참조해야 한다

근데 \`getState()\` 방식은 아예 렌더 스코프 변수를 참조하지 않는다.

> 클로저로 \`value\`를 캡처하지 않고
> 매번 글로벌 store에서 “현재 값”을 조회한다.

그래서 구조적으로 stale closure가 발생할 여지가 없다.

---

## 4. 메모리/구조 관점으로 더 정확히 말하면

여기서 “전역 힙(global heap)” 같은 표현을 쓰면 좀 더 정확해진다.

### React 값(\`const value = useStore(selector)\`)

- 렌더 프레임 안에서 생성된 “스냅샷”
- 클로저가 캡처하는 대상
- \`useCallback([])\` 같은 것과 결합되면 stale 가능

### Zustand store (\`useStore.getState()\`)

- 컴포넌트 외부의 store 객체가 들고 있는 상태
- 함수 실행 시점에 store를 조회
- 콜백이 오래 살아도 상관없음 (항상 현재 store를 읽으니까)

정리하면:

> React 렌더 스코프 안의 값은 “캡처되는 값”이고
> Zustand \`getState()\`는 “조회되는 값”이다.

캡처(capture) vs 조회(read)의 차이가 곧 stale 여부를 결정한다.

---

## 5. 그럼 무조건 \`getState()\`가 정답이냐? (주의할 점)

여기서 한 번 더 전문가 관점으로 정리하면,
\`getState()\`가 만능은 아니고 “사용처”가 있다.

### ✅ \`getState()\`가 특히 강력한 케이스

- 이벤트 핸들러 (onClick, onKeyDown, onSubmit 등)
- setInterval / setTimeout 콜백
- 외부 라이브러리 콜백(WebSocket, worker, native event)
- 리렌더 사이클과 독립적인 로직(업로드 진행률, 스트리밍, polling 등)

즉 “콜백이 오래 살아남고, 최신 상태가 꼭 필요”한 영역에 최고다.

### ⚠️ 주의: React 렌더와 store 읽기의 타이밍이 다를 수 있다

React는 concurrent 모드에서 렌더를 지연/중단/재시도할 수 있다.
그런데 \`getState()\`는 “그 순간 store의 실제 값”을 읽는다.

그래서:

- “렌더에 반영된 값”과
- “getState로 읽은 값”이
  아주 특정 상황에서 **타이밍 차이**가 날 수 있다.

다만 일반적인 UI 이벤트/상호작용 수준에서는 실무적으로 큰 문제는 잘 안 생기고,
오히려 이벤트 핸들러는 “최신 값”이 필요한 경우가 더 많다.

---

## 6. 내가 정리한 실전 패턴들

### 패턴 A: “핸들러는 getState로 최신값 읽고, 렌더는 selector로”

가장 현실적인 하이브리드.

\`\`\`tsx
const value = useStore((s) => s.value);

const handle = useCallback(() => {
  const current = useStore.getState().value;
  // 최신 값 기준으로 처리
}, []);
\`\`\`

- UI는 \`value\`로 렌더 (React 방식)
- 핸들러는 \`getState()\`로 최신 값 보장

### 패턴 B: “setter도 getState로 안정화”

setter가 store에 들어있으면 그 참조는 보통 안정적이지만,
복잡해질수록 안정화를 위해 \`getState()\`를 쓰기도 한다.

\`\`\`tsx
const handle = useCallback(() => {
  const { value, setValue } = useStore.getState();
  setValue(value + 1);
}, []);
\`\`\`

---

## 7. 결론: “클로저를 고정시키는 게 문제가 아니라, 캡처된 값을 쓰는 게 문제다”

이 글의 결론을 한 문장으로 줄이면 이거다.

> stale closure의 원인은 \`useCallback\`이 아니라
> \`useCallback\`이 “캡처된 값”을 갱신하지 못하게 만드는 구조다.

그래서 해결책도 2가지 계열로 나뉜다.

### 1) React 정석: 의존성 배열로 캡처를 최신화

- \`useCallback(fn, [value])\`
- 값이 바뀌면 fn도 바뀐다

### 2) Zustand 실전: 캡처를 제거하고 store에서 직접 조회

- \`useStore.getState()\`
- fn은 고정돼도 내부는 매번 최신 조회

---

# 최종 요약 (문서용)

- React의 \`useCallback([])\`은 콜백을 고정하며, 콜백 내부에서 참조하는 값은 “생성 시점 렌더 스코프”를 클로저로 캡처한다.
- 따라서 리렌더 이후 값이 바뀌어도 콜백은 과거 값을 참조하는 stale closure가 발생할 수 있다.
- 일반적인 해결은 의존성 배열에 값을 넣어 콜백을 재생성하는 것이다.
- Zustand에서는 \`getState()\`를 통해 store에서 최신 값을 직접 조회함으로써, 클로저 캡처 구조 자체를 제거할 수 있다.
- 결과적으로 콜백을 안정적으로 유지하면서도 최신 Zustand 상태를 사용할 수 있다.
`,Cv=`# React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기 (찐 삽질기 / EOTP 지옥 포함)

## 0. 시작: “npm에 올렸는데… 뭔가 허전하다”

내가 만든 React 라이브러리를 npm에 배포했다.

근데 딱 거기까지 하고 나니까 이런 생각이 들었다.

- 테스트가 없으면… 내가 나중에 리팩토링하다 터뜨려도 모른다
- 배포는 매번 수동이면… 언젠가 귀찮아서 안 하게 된다
- 커버리지가 없으면… 테스트가 “있긴 한데 구멍 난 느낌”이다
- CI가 없으면… PR 머지하고 나서 터진 걸 뒤늦게 알게 된다

그래서 목표를 잡았다.

✅ **Vitest + React Testing Library로 테스트**

✅ **Coverage 뽑아서 구멍 난 라인 직접 추격**

✅ **GitHub Actions로 CI**

✅ **Git 태그 푸시하면 npm 자동 배포**

✅ **그리고 마지막 보스: EOTP(OTP) 에러 해결**

프로젝트는 이런 느낌:

- TypeScript 기반 원형 큐/버퍼 라이브러리
- 저수준 CircularBuffer + 고수준 BufferManager + React hook(useCircularBuffer)

---

## 1. 테스트 환경 세팅 (여기까진 “음… 쉽네?”)

### 1-1) 설치

테스트는 Vitest로 갔다.

그리고 React hook 테스트는 Testing Library의 \`renderHook\`을 썼다.

\`\`\`bash
npm install -D vitest@2.1.6 \\
  @testing-library/react \\
  @testing-library/jest-dom \\
  @testing-library/user-event \\
  @vitejs/plugin-react \\
  @vitest/coverage-v8 \\
  happy-dom
\`\`\`

> 여기서 “happy-dom”은 뒤에서 나온다. (jsdom이 CI에서 나를 배신함)

---

### 1-2) vitest config

Vite쪽 경고 싫어서 config 확장자는 \`.mts\`로 갔다.

**vitest.config.mts**

\`\`\`tsx
import { defineConfig }from"vitest/config";
import reactfrom"@vitejs/plugin-react";

exportdefaultdefineConfig({
plugins: [react()],
test: {
environment:"happy-dom",
setupFiles:"./__test__/setup.ts",
include: ["__test__/**/*.test.{ts,tsx}"],
coverage: {
provider:"v8",
reporter: ["text","json","html"],
include: ["src/**/*.{ts,tsx}"],
exclude: [
"node_modules/",
"__test__/",
"dist/",
"coverage/",
"src/types/**",
"src/index.ts",
"src/hooks/index.ts",
      ],
    },
  },
});
\`\`\`

**test/setup.ts**

\`\`\`tsx
import "@testing-library/jest-dom/vitest";
\`\`\`

**package.json scripts**

\`\`\`json
{
  "scripts": {
    "test": "vitest run",
    "test:coverage": "vitest run --coverage",
    "build": "tsc && tsc -p tsconfig.esm.json"
  }
}
\`\`\`

---

## 2. 테스트 작성: “AI 도움도 받긴 했는데, 커버리지가 결국 나를 일하게 만들더라”

처음에는 솔직히 테스트를 빨리 늘리고 싶어서, 기본 케이스들은 AI 도움도 받았다.

근데 딱 테스트 돌려보면 느낌이 온다.

> “응… 성공 케이스만 잔뜩 있네?”

그래서 방향을 바꿨다.

이때부터는 “테스트 많이 쓰기”가 아니라 **Coverage 기반 라인 추격 게임**이 시작된다.

### 내가 했던 루프 (이거 진짜 중요)

1. \`npm run test:coverage\` 돌림
2. coverage report에서 **빨간 줄(미커버 라인)** 찾음
3. 그 라인이 어떤 조건에서 실행되는지 분석
4. 그 조건을 억지로 만들어서 테스트 추가
5. 다시 커버리지 확인
6. 반복… 반복… 반복…

이 방식으로 가니까 커버리지가 “쭉쭉” 오른다.

**99%대는 테스트 수가 아니라 “구멍을 메우는 집착”**이더라.

---

## 3. CI 붙이기: 이제 PR 날려도 마음이 편해짐

### 3-1) CI workflow

Node 버전 매트릭스로 돌렸다. (18/20/22)

- \`npm ci\`로 lock 기반 설치
- test → build 순으로

> 여기서 느낀 점: CI는 “안전벨트”가 아니라 “에어백”이다.
>
> 에어백은 사고가 나야 고마움을 안다.

---

### 3-2) 커버리지 업로드(CodeCov)

커버리지 job은 CI job이랑 분리했다.

- 이유: 테스트 매트릭스랑 커버리지 업로드를 섞으면 로그가 지저분해지고
- 커버리지 업로드는 한 번만 하면 된다

---

## 4. 자동 배포: 태그 푸시하면 npm 배포 끝 (여기까진 완벽)

배포 트리거를 “태그 푸시(v\\*)”로 잡았다.

**publish.yml 핵심**

\`\`\`yaml
on:
push:
tags: -'v*'
\`\`\`

즉, 내가 하는 일은 이것뿐:

\`\`\`bash
git tag v1.0.2
git push origin v1.0.2
\`\`\`

끝.

이제 Actions가 알아서 테스트/빌드/배포를 한다.

…였는데…

---

## 5. (대망) 배포 마지막에서 터진다: EOTP 지옥 오픈

배포 로그를 보는데, 빌드까지는 완벽했다.

- tarball 파일 목록 쭉 나오고
- “Publishing to registry…” 뜨고
- “Signed provenance statement…” 이런 멋있는 문장도 뜨고

나는 이미 “됐다”라고 생각했다.

근데 마지막에 갑자기 이게 튀어나온다:

\`\`\`
npm errorcode EOTP
npm error This operation requiresa one-time passwordfrom your authenticator.
\`\`\`

### 순간 내 머릿속:

> “OTP? 내가 지금 로컬에서 배포하는 것도 아닌데…
>
> 여긴 GitHub Actions runner인데…
>
> 누가 폰을 들고 OTP를 입력해주지…?”

딱 이때 깨달았다.

**CI에서 \`npm publish\`는 ‘사람이 개입할 수 없는데’, 내 계정은 publish에 OTP(2FA)를 요구하고 있었던 것.**

---

## 6. EOTP가 왜 뜨는지 “진짜로” 뜯어보기

### 6-1) 로컬 배포 vs CI 배포는 완전히 다르다

- 로컬 배포: 내가 직접 실행하니까, OTP 있으면 붙여서 해결 가능
  \`\`\`bash
  npm publish --otp=123456
  \`\`\`
- CI 배포: GitHub Actions는 사람이 없다
  → OTP 입력할 창도 없고, 입력할 사람도 없다
  → “그럼 CI 배포는 어떻게 하라고?”가 포인트

여기서 필요한 게 **CI용 토큰**이다.

---

## 7. 해결: CI에서는 “Automation(자동화) 용 토큰”으로 간다

내가 한 해결 흐름은 이거다.

### 7-1) npm 토큰을 “CI용”으로 새로 발급

npm 사이트에서 토큰 만들 때, 핵심은 이런 느낌이다.

- **CI에서 사용할 거니까** 사람이 OTP 치는 방식이 아니라
- **토큰으로 인증이 끝나야 한다**
- 그리고 publish 권한이 있어야 한다

그래서 만든 토큰을 GitHub Secrets에 넣는다:

- repo settings → Secrets → \`NPM_TOKEN\`

---

### 7-2) GitHub Actions에서 토큰을 인증으로 물려준다

publish workflow에서 \`NODE_AUTH_TOKEN\`을 환경변수로 주입하면 된다.

\`\`\`yaml
-name:Publishtonpm
run:npmpublish--provenance--accesspublic
env:
NODE_AUTH_TOKEN:\${{secrets.NPM_TOKEN}}
\`\`\`

여기까지 해도, 토큰이 “일반 토큰”이면 계정 설정에 따라 또 막힐 수 있다.

이 경우는 두 가지를 확인했다:

### 체크 1) 토큰 권한이 publish 가능한 권한인지

- read만 있으면 당연히 publish 못한다
- write/publish 권한이 있어야 한다

### 체크 2) 계정의 2FA 정책이 “토큰/자동화 publish도 막는” 형태인지

- 계정 설정에서 publish 작업에 OTP를 강제하면,
  어떤 토큰은 여전히 EOTP를 띄울 수도 있다.
- 그래서 “자동화 전용 토큰 성격”으로 맞춰야 CI가 산다.

(이 부분 때문에 나는 한 번 더 토큰을 다시 발급했다. 진짜 귀찮았다.)

---

### 7-3) 최종적으로 성공했을 때의 감정

EOTP 지옥을 뚫고 \`npm publish\`가 초록불로 끝나면

그때부터 진짜 “아 이제 배포는 시스템이 한다” 느낌이 든다.

내가 하는 건 태그 푸시 뿐이다.

---

## 8. docs-only 릴리즈: “문서만 바뀌었는데 배포는 하기 싫다”의 현실 해결

이거 나도 엄청 고민했다.

### 문제 상황

- GitHub에서 README만 수정했다
- 근데 npm 페이지 README는 배포된 패키지 기준이라 안 바뀐다
- “문서 오타 하나”로 버전 올리는 게 뭔가 찜찜하다

### 결론(현실 버전)

**npm 페이지의 README까지 최신으로 유지하려면 결국 “patch 릴리즈”를 해야 한다.**

그래서 나는 docs-only 릴리즈를 “공식 프로세스”로 만들었다.

---

### docs-only 릴리즈 커맨드 (진짜 그대로 따라하면 됨)

### 1) 문서 수정 커밋

\`\`\`bash
git add README.md
git commit -m"docs: update README"
git push origin master
\`\`\`

### 2) patch 버전 올리기 (package.json 버전 업데이트)

npm을 쓰면:

\`\`\`bash
npm version patch
\`\`\`

이 명령이 하는 일:

- package.json version을 1.0.2 → 1.0.3으로 올리고
- 자동으로 git commit도 만들고
- 태그까지 만들게 설정할 수도 있음(환경에 따라)

나는 태그 트리거 배포를 쓰니까, 보통 이렇게 갔다:

\`\`\`bash
git push origin master
\`\`\`

### 3) 태그 푸시 (자동 배포 트리거)

\`\`\`bash
git tag v1.0.3
git push origin v1.0.3
\`\`\`

### 4) 결과

- GitHub Actions가 publish workflow 실행
- 테스트/빌드 통과하면 npm에 1.0.3 배포
- npm 페이지 README도 최신으로 따라옴

> “문서 변경인데 배포까지 하냐?”가 고민이긴 한데,
>
> 실사용자가 npm 페이지를 보고 설치하는 구조면 이게 제일 깔끔하더라.

---

## 9. 재밌는(?) 삽질 모음: 내가 실제로 막혔던 것들

### 9-1) jsdom이 CI에서만 터짐 → happy-dom으로 전환

로컬에서는 잘 도는데 CI에서만 이상하게 jsdom 초기화 오류가 났다.

그때는 그냥 “환경 차이”라고 생각했고, 빠르게 happy-dom으로 갈아탔다.

- 결론: CI에서 안정적으로 돌아가는 게 더 중요했다

---

### 9-2) “popped is used before being assigned” 같은 TS 경고

hook 테스트 쓸 때 이런거 자주 만난다.

\`\`\`tsx
letpopped:number[];

act(() => {
  popped = result.current.popHead(3);
});

expect(popped).toEqual([1,2,3]);
\`\`\`

TS는 \`act()\` 콜백에서 반드시 할당된다는 걸 증명 못 하니까 경고를 띄운다.

테스트 코드에서는 보통 이렇게 처리했다:

\`\`\`tsx
let popped!: number[];

act(() => {
  popped = result.current.popHead(3);
});

expect(popped).toEqual([1, 2, 3]);
\`\`\`

---

### 9-3) 커버리지 구멍 메우기: 진짜 고통인데, 끝나면 뿌듯함

커버리지 99% 찍는 과정은 거의 이런 느낌이었다:

- “아니 이 라인은 도대체 언제 타는 거야?”
- “오케이. 그럼 강제로 예외 상황을 만들자.”
- “아… 이런 입력에서 터지는구나”
- “테스트 추가”
- “coverage 올라감”
- “또 다음 빨간 줄….”

근데 이 과정 덕분에,

- 방어코드가 진짜로 작동하는지 확인했고
- “내 코드의 경계조건”을 내가 제일 잘 알게 됐다

---

## 10. 최종적으로 내가 얻은 것

이제 내 라이브러리는 이런 흐름이 됐다.

### ✅ 개발 흐름

- PR 올리면 CI가 테스트/빌드 자동 체크
- 커버리지도 확인 가능
- 안정성 생김

### ✅ 배포 흐름

- 태그 푸시하면 자동 배포
- 사람이 하는 일 최소화
- 실수 확 줄어듦

### ✅ 그리고 제일 중요한 것

이건 포트폴리오로도 “설득력”이 생긴다.

- “테스트 했다”가 아니라
- “테스트+커버리지+CI+자동배포까지 붙여서 운영 가능한 라이브러리로 만들었다”
  가 되니까.

---

## 11. 다음에 할 것

- 성능 벤치마크(원형 큐는 성능 이야기가 잘 먹힘)
- docs를 더 친절하게 (사용 예제/주의사항/edge case)
- 릴리즈 노트 자동 생성까지 붙이면 완성형

## Ps. 삽질 안하려면…

1. 배포 자동화는 **브랜치 푸시가 아니라 태그(vX.Y.Z) 푸시 트리거**로 구성하기
2. \`npm publish\`는 CI에서 돌릴 거면 **토큰 권한(write/publish)부터 확인하기**
3. CI에서 \`EOTP\` 뜨면 “내가 OTP를 못 치는 환경”이라는 걸 먼저 인정하기
4. \`NODE_AUTH_TOKEN\` 환경변수로 인증을 넘기는지 workflow에서 확인하기
5. 토큰 범위 제한(특정 패키지만 허용) 걸려 있으면 **패키지 포함 여부** 확인하기
6. 테스트는 “AI로 초안 → 커버리지 빨간 줄 추격” 루프로 마무리하기
7. 로컬 OK, CI FAIL이면 환경 차이(특히 DOM 환경)부터 의심하고 빠르게 대체안 준비하기
8. docs만 바뀌어도 npm README까지 최신 유지하려면 **docs-only patch 릴리즈**가 현실 해답
9. 태그 수동이면: \`npm version patch\` 후에 **태그 생성/푸시 순서** 실수하지 않기
10. 배포 성공 로그 확인은 “빌드 성공”이 아니라 **publish 단계 끝까지** 보고 환호하기(진짜 중요)

---

## 마무리: “그냥 배포”에서 “운영 가능한 라이브러리”로

처음엔 “테스트랑 CI 붙이는 게 그렇게 대단한가?” 싶었는데,

막상 해보니까 진짜 체감이 크다.

특히 EOTP는…

**배포 다 됐다고 방심한 순간 뒤통수 맞는** 타입이라 더 기억에 남는다.

이제는 내가 태그만 푸시하면

나머지는 GitHub Actions가 다 한다.

(그리고 이게 제일 좋다)
`,Tv=`# React 실시간 Trigger 처리 최적화 삽질기

### Worker, Throttle, Time-slicing… 결국 Baseline이 이겼다

실차/로그 기반 모니터링 UI를 만들다 보면, 어느 순간부터 이런 문장이 몸에 새겨진다.

> “데이터는 계속 들어오고, UI는 멈추면 안 된다.”

이번 글은 **ZeroMQ로 들어오는 trigger 이벤트(로그/뷰/차트)를 React 상태로 반영하는 파이프라인**에서,

UI 버벅임을 줄이기 위해 **WebWorker / throttle / frame time-slicing / batched updates**까지 다 해본 뒤,

**결국 baseline(그냥 바로 처리)이 가장 빠르고 합리적이었다**는 결론에 도달하기까지의 기록이다.

---

## 0. 목표: “빠른 처리”가 아니라 “버벅임 없는 UI”

이번 최적화의 목적은 단순히 “평균 처리시간(avg)을 줄이기”가 아니었다.

- 데이터 처리량은 앞으로도 계속 증가할 수 있고
- 사용자 입장에서는 “평균이 빠른 것”보다
- \\*가끔 멈추는 순간(프리즈/버벅임)\\*\\*이 훨씬 치명적이다

그래서 이번에 측정하고 싶었던 건 크게 두 가지였다.

1. **Trigger 처리의 계산 성능(처리 시간/처리량)**
2. **UI가 실제로 얼마나 부드러운지(FPS/최악 프레임)**

즉, “CPU에서 빨리 끝내는가?”뿐 아니라

“메인 스레드를 얼마나 오래 붙잡는가?”를 같이 보려 했다.

---

## 1. 배경: Trigger가 하는 일

Trigger 메시지는 대략 이런 역할을 수행한다.

- \`FilterType.Log\` → 이벤트 버스 emit (로그 리스트 등)
- \`FilterType.View\` → 여러 탭/뷰 스토어 업데이트
  - \`LATEST\`는 무조건 업데이트
  - \`CUR_PRINT\`는 “현재 보고 있는 탭인지” 조건부 업데이트
  - Sync 업데이트 중이면 \`isUpdatingFromSync\` 기준으로 무시
- \`FilterType.Chart\` → chart store 갱신 + 다른 chart window에 broadcast

핵심은 **메시지 양이 많고(초당 수백~수천), View 업데이트/Chart broadcast가 UI thread를 잡아먹으면 화면이 끊긴다**는 점이었다.

---

## 2. 문제: UI 버벅임이 발생

초기 구현은 “received datas를 forEach 돌면서 즉시 처리” 방식이었다.

### Baseline(초기 코드)의 특징

- 데이터가 들어오는 즉시 처리
- 분기 로직은 명확
- store 업데이트/handler 호출이 곧바로 실행됨
- 단점: 특정 타이밍에 데이터가 몰리면, 한 프레임에 처리량이 커져서 **“뚝” 끊길 수 있음**

그럼에도 구조 자체는 단순했고, 그래서 더더욱 “최적화가 진짜 필요한지”가 궁금해졌다.

---

## 3. 무엇을 측정하려 했나(목적): “이 최적화가 진짜 이득인가?”

최적화는 “느낌상 좋아질” 수 있지만, 실제로는 반대도 흔하다.

그래서 이번엔 **Baseline vs Optimized(Worker/Time-slicing/Throttle 등)** 를 가능한 한 같은 조건에서 비교하려 했다.

### ✅ 측정 목적(What)

- **Trigger 처리 자체가 얼마나 걸리는지**
- **메시지를 얼마나 빨리 소화하는지**
- **UI 프레임이 얼마나 안정적인지**
- **꼬리 지연(tail latency: p95/p99)이 얼마나 나쁜지**

---

## 4. 어떻게 측정했나(방법): Perf 로그 + FPS/LongTask 관측

### 4-1) Perf 로그에서 측정한 것들

콘솔에 찍은 로그는 대략 이런 형태였다.

\`\`\`
[PERF:baseline] n=341 avg=3.23ms p95=12.00ms max=57.90ms | msgs=5128
[PERF:optimized] n=39 avg=15.11ms p95=87.40ms max=101.80ms | msgs=2406 chunks=39
\`\`\`

각 수치의 의미는 아래와 같다.

### ✅ n (Samples, 샘플 수)

- **측정한 배치 처리 횟수**
- Baseline은 작은 배치를 자주 처리하므로 n이 커지고
- Optimized는 배치를 모아서(또는 chunk로) 처리하므로 n이 작아지는 경향이 있다

> ⚠️ 주의: n이 작다고 성능이 좋은 게 아니다. “한 번에 많이 처리했을 뿐”일 수 있다.

### ✅ msgs (Messages, 처리한 메시지 수)

- 측정 구간 동안 **총 처리한 메시지 개수**
- 비교할 때 msgs가 비슷해야 공정하다(= 같은 양을 처리했다는 뜻)

### ✅ avg (평균 처리 시간)

- 배치 1회 처리에 걸린 **평균 시간**
- 다만 UI 체감은 평균보다 **tail(p95/p99)**에 더 민감한 경우가 많다

### ✅ p95 / p99 (백분위)

- p95: 95%의 배치가 이 시간 안에 끝남
- p99: 99%의 배치가 이 시간 안에 끝남

UI 관점에서 중요한 이유:

- 16ms(60fps) 안에 끝나는 비율이 높아야 버벅임이 줄어든다
- “가끔 엄청 느린 케이스”가 체감을 망친다

### ✅ max (최대값)

- 측정 구간 중 **가장 느렸던 1회**
- max가 크면 “한 번 멈춘 경험”으로 사용자에게 강하게 각인될 수 있다

### ✅ chunks (Optimized에서만)

- time-slicing처럼 “한 배치를 몇 조각으로 나눴는지” 정도를 의미
- chunk 분할 자체도 오버헤드가 될 수 있다

---

### 4-2) FPS 로그에서 측정한 것들

내가 따로 찍은 로그:

\`\`\`
[TriggerFPS] fps=34 worstFrame=185.3ms
[TriggerFPS] fps=2  worstFrame=736.6ms
\`\`\`

이건 “처리 속도”가 아니라 **사용자가 느끼는 부드러움**에 훨씬 직결된다.

### ✅ fps

- 초당 프레임 수
- 높을수록 부드럽고, 낮아질수록 끊긴다

### ✅ worstFrame

- 측정 구간에서 **가장 오래 걸린 프레임(렌더/스크립트 포함)**
- 이 값이 큰 순간이 곧 “뚝 멈춘 순간”이다
  (100ms만 넘어도 체감은 거의 프리즈에 가깝다)

---

## 5. 첫 번째 시도: Worker로 분기/필터링을 offload하자

아이디어는 이거였다.

> “View/Chart에서 조건 검사/필터링이 많으니까, 그걸 worker로 빼면 main thread가 가벼워지지 않을까?”

### Worker 구조

- main thread는 worker에 payload를 던짐
- worker는 \`datas\`를 돌며 \`actions\`를 생성해서 전달
- main thread는 actions를 받아 handler/store update 수행

대략 이런 느낌:

\`\`\`tsx
self.onmessage =(e) => {
const { datas, receivingTabIds, lastClickedId, baseIndex } = e.data;
const actions = [];

for (const itemof datas) {
switch (item.filterType) {
caseFilterType.Log:
        actions.push({type:'LOG', item });
break;

caseFilterType.View:
        actions.push({type:'VIEW_LATEST', item });
if (receivingTabIds.includes(lastClickedId)) {
          actions.push({type:'VIEW_CUR_PRINT', item });
        }
break;

caseFilterType.Chart:
if (receivingTabIds.includes(lastClickedId) && item.baseIndex >= baseIndex) {
          actions.push({type:'CHART', item });
        }
break;
    }
  }

postMessage(actions);
};
\`\`\`

---

## 6. 결과: “수치상으로는 Worker가 훨씬 느렸다”

실측 로그를 보면 worker쪽이 크게 느렸다.

예시:

\`\`\`
[PERF:worker] avgTotal=227.87ms | avgWorker=225.76ms | avgApply=2.11ms | msgs/s=212 | actions/s=672
\`\`\`

반면 baseline:

\`\`\`
[PERF:baseline] avgTotal=3.23ms | avgApply=3.23ms | msgs/s=496
\`\`\`

개선 작업을 이어가도 결론은 비슷했다.

- **Samples**
  - Optimized(큰 배치): 58회
  - Baseline(작은 배치): 268회
- **Messages**
  - 둘 다 ~3,700개 수준 (동일량)
- **Avg / P50 / P95 / P99 / Max**
  - Baseline 압승
- **Throughput**
  - baseline: 337 ops/s
  - optimized: 71 ops/s

결론은 명확했다.

> “이 workload에서는 worker 통신 오버헤드가 병렬 처리 이득을 압도한다.”

---

## 7. “그런데 체감 UI는 좀 부드러운 느낌도…?”의 함정

이상한 포인트가 하나 있었다.

- 수치상으론 optimized/worker가 느린데
- 체감으로는 “버벅임이 줄어든 것 같다”는 순간도 있었다

이 괴리는 **우리가 찍는 지표가 ‘무엇을 측정하는지’**와 관련이 있었다.

### 7-1) queue 대기 시간/스케줄링 비용이 포함된다

optimized 방식은 대개

- 데이터를 모으고(queue)
- 프레임 단위로 나눠 처리(time-slicing)
- 혹은 worker round-trip

이 과정에서 **실제 연산 시간 외의 ‘기다리는 시간’**이 들어가면서 perf 상 시간은 커질 수 있다.

### 7-2) FPS는 평균이 아니라 Tail이 결정한다

사람이 느끼는 버벅임은 평균이 아니라 **worstFrame / p95~p99**가 좌우한다.

실제 로그에서도 optimized는 최악 프레임이 크게 튀었다.

\`\`\`
[TriggerFPS] fps=2 worstFrame=736.6ms
\`\`\`

이 한 방이 체감에서 “멈췄다”로 남는다.

---

## 8. 두 번째 시도: Throttle로 state 변경을 줄이면 빨라지지 않을까?

특히 chart broadcast가 많아서 “20fps 정도로 제한하면 좋아 보였다.”

\`\`\`tsx
const throttledBroadcast = throttle((channel, payload) => {
  broadcastService.broadcast(channel, payload);
}, 50); // 20fps
\`\`\`

직관은 맞아 보인다.

> “state 변경을 줄이면 리렌더가 줄고 빨라지겠지?”

그런데 실제 수치는 더 좋아지지 않았다.

### 왜? (내가 내린 결론 + 추가 의견)

### 8-1) “state 변경 수”가 병목이 아닐 수 있다

- handler 내부 store update가 무겁거나
- payload 생성/가공이 무겁거나
- tree 변환/대용량 객체 가공이 무거우면
  broadcast 횟수만 줄여도 전체 비용은 크게 줄지 않는다.

### 8-2) throttle 자체도 비용이 있다

timer/args 저장/클로저 등 오버헤드가 있고, 작은 배치에서 특히 손해가 커질 수 있다.

### 8-3) React/Zustand는 이미 어느 정도 batching이 된다

React 18 이후 batching이 강화되었고, 상태 업데이트도 사용 방식에 따라 자동으로 묶이는 경우가 있다.

즉 “또 배치/또 throttle”은 중복 최적화가 되어 손해가 날 수 있다.

---

## 9. 세 번째 시도: Frame Time-slicing (requestAnimationFrame 기반 분할)

이번엔 접근을 바꿨다.

> “평균이 조금 느려져도 좋다. 대신 UI가 끊기지만 않으면 된다.”

프레임 예산(\`frameBudgetMs\`)을 정해 분할 처리하고,

\`unstable_batchedUpdates\`로 React 업데이트도 묶어보았다.

중간에 \`unstable_batchedUpdates\` 관련 이슈도 있었지만 결국 해결했다.

### 그런데…

최종적으로 baseline이 수치상 계속 이겼다.

---

## 10. “Baseline이 빠른데, 왜 버벅임이 있었나?”

정리해보면 baseline은 평균적으로 아주 빠르다.

- avg 2~3ms
- p95 12ms (16ms 목표에 근접/달성)

문제는 **p99/max 구간에서 50~70ms 튀는 순간**이 있다는 점이다. 보통 이런 순간이 원인이다:

- datas가 큰 배치로 몰려 들어오는 순간
- handler가 큰 객체를 만들거나 깊은 복사를 하는 순간
- GC가 터지는 순간
- 특정 viewType이 유독 무거운 업데이트를 수행하는 순간 (tree 변환, 대용량 가공 등)

즉:

> baseline의 문제는 “항상 느림”이 아니라 “가끔 한 방이 큼”이다.

---

## 11. 최종 방향성: Baseline 유지 + “큰 배치일 때만” 보호장치

결론적으로 가장 합리적이었던 전략은 이거다.

- **기본은 baseline처럼 즉시 처리**
- 다만 **datas가 일정 크기 이상으로 커질 때만** 분할 처리/프레임 분산 같은 보호장치 발동

예시:

\`\`\`tsx
if (datas.length > 200) {
  // chunk 처리 or time-slice
} else {
  // baseline 즉시 처리
}
\`\`\`

이 방식이 좋은 이유:

- 평소(대부분)는 baseline의 빠른 경로를 탄다
- 위험한 순간(큰 배치 몰림)만 방어한다
- “최적화 오버헤드”를 항상 지불하지 않는다

---

## 12. 성능 측정: 어떻게 재고, 뭘 봐야 하나?

이번 작업에서 확실히 배운 점은:

> 성능은 “체감”과 “숫자” 둘 다 봐야 하고, 숫자도 “무슨 숫자냐”가 중요하다.

### 우리가 본 지표들

### 처리 시간

- avg / p50 / p95 / p99 / max
- **UI 체감은 p95~p99 + max가 중요**
- avg만 보면 속기 쉽다

### Samples

- baseline이 더 자주 호출되었다
- optimized는 배치를 크게 묶어 호출 횟수가 적었다
  → 호출 횟수가 적다고 빠른 게 아니다(한 번에 더 많이 처리하면 더 느릴 수 있음)

### Throughput

- baseline 337 ops/s vs optimized 71 ops/s
  → baseline이 처리량 측면에서도 안정적이었다

### FPS / worstFrame

- fps가 낮고 worstFrame이 크면 체감 버벅임이 생긴다
- worstFrame은 “한 번 멈춘 순간”을 그대로 보여준다

---

## 13. “왜 최적화했는데 더 느려졌나?” 정리 (내 의견 + 최종 결론)

내 결론은 이렇다.

### 13-1) 오버헤드가 이득보다 컸다

worker, queue, slice, rAF, time-slicing…

이 모든 건 “추가 구조”이고, 구조 자체가 비용이다.

현재 workload는

- 평균 배치가 아주 큰 편이 아니고 (10~20개 수준이 자주 들어옴)
- handler가 즉시 처리해도 충분히 빠른 편이라
  “추가 구조 비용”이 오히려 총 비용을 키웠다.

### 13-2) 진짜 병목은 분기/조건이 아니라 handler 내부일 가능성이 크다

worker가 분기만 대신해도, handler/store update가 무거우면 근본 병목은 그대로다.

### 13-3) React batching은 이미 생각보다 잘 되어 있다

React 18 환경에서 같은 tick 내 setState는 배치되는 경우가 많다.

내가 직접 배치를 넣은 것이 중복 최적화가 되었을 수 있다.

### 13-4) UI 부드러움의 핵심은 평균이 아니라 Tail

이번 실측에서는 optimized가 tail(p95/p99/worstFrame)까지 baseline보다 좋지 않았다.

그래서 더더욱 baseline 유지가 맞았다.

---

## 14. 최종 결론

### ✅ 지금 상황에서의 최선

- **Baseline 유지가 정답**
- worker는 이 workload에서는 손해
- throttle/time-slicing은 “항상 켜는 최적화”가 아니라
  “필요할 때만 발동하는 보호장치”로 쓰는 게 더 합리적

### ✅ 앞으로의 개선 포인트

Baseline이 이미 p95 12ms라 충분히 좋다.

그래도 p99/max(50~70ms)를 줄이고 싶다면:

- 큰 배치일 때만 chunk로 쪼개기
- 특정 viewType/chartType 핫스팟 프로파일링
- tree 변환 등 무거운 구간에 캐시/구조 개선 고려

---

## 15. 다음에 내가 한다면(추천 체크리스트)

1. baseline 유지
2. datas가 커질 때만 time-slice 발동
3. 지표는 avg보다 **p95/p99 + worstFrame** 중심으로 본다
4. 최적화 대상은 분기 로직이 아니라 **handler 내부 핫스팟**
5. 필요하면 “전체 pipeline”이 아니라 “특정 핫스팟만” worker로 뺀다

---

## 덤: 이번 삽질에서 얻은 교훈

> “최적화는 멋진 아이디어가 아니라, 측정 가능한 문제를 해결하는 과정이다.”

worker도, batching도, throttle도 다 멋있다.

근데 내 시스템에서는 baseline이 가장 빠르다.

그리고 이건 실패가 아니라, **제대로 된 결론**이다.
`,Ev=`# 브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)

### – 프로세스 구조, V8 isolate, 렌더링 파이프라인까지 한 번에 정리

이전 글에서

> “ECMAScript(스펙) / JS 엔진(V8) / 호스트(브라우저/Node)”

이렇게 세 레이어로 나눠서 JS 이벤트 루프를 봤다면,

이번에는 **브라우저 쪽을 확대**해서 들여다볼 차례다.

- 브라우저는 프로세스를 어떻게 나눠 쓰고 있는지?
- V8은 어디에 올라가서 돌아가는지?
- DOM 업데이트 → 화면 픽셀로 찍히기까지 어떤 파이프라인을 거치는지?

실제 구조를 알고 나면,

- “메인 스레드가 바쁘면 왜 렌더링이 멈추는지”
- “requestAnimationFrame이 왜 ‘프레임 기준’ 콜백인지”
- “Web Worker를 쓰면 뭐가 풀리고, 뭐는 여전히 막히는지”

같은 것들이 훨씬 더 직관적으로 보인다.

---

## 0. 큰 그림: 브라우저는 사실 **여러 프로세스 + 여러 스레드**다

크롬(Chromium) 기반 브라우저를 기준으로 보면, 구조는 대략 이렇다:

- **브라우저 프로세스 (Browser Process)**
  - 탭 관리, 주소창, 히스토리, 네트워크 요청 등 “브라우저 전체” 관장
- **렌더러 프로세스 (Renderer Process)**
  - 탭 한 개당 최소 1개 (사이트 격리 전략에 따라 더 세분화될 수도 있음)
  - 이 프로세스 안에서:
    - DOM, CSSOM, 레이아웃, 페인트
    - JS 엔진(V8)
    - 메인 스레드 + 워커 스레드들
- **GPU 프로세스 (GPU Process)**
  - GPU와 통신, 컴포지팅/렌더링 관련 작업 담당
- 그 외 여러 유틸리티/플러그인 프로세스 등

우리가 JS, DOM, CSS, Reflow/자식 요소 이런 거 이야기할 때

**대부분은 “렌더러 프로세스” 내부 이야기**다.

그리고 그 렌더러 프로세스 안의 **메인 스레드**에

V8, DOM, 스타일/레이아웃 로직이 같이 올라가 있다.

---

## 1. 렌더러 프로세스 내부: 메인 스레드와 V8 Isolate

### 1-1. 메인 스레드(Main Thread)가 하는 일

렌더러 프로세스의 메인 스레드는 말 그대로 “한 탭의 뇌”다.

- JS 실행 (V8)
- DOM 조작
- 스타일 계산 (Style/Recalculate Style)
- 레이아웃(Layout)
- 일부 페인트 단계
- 사용자 입력 이벤트 처리 (click, input 등 디스패치)

즉, 우리가

\`\`\`jsx
while (true) {} // 이런 바보 코드
\`\`\`

같은 걸 메인 스레드에서 돌리면,

이 탭은 ==**죽었다고 봐도 됨**== 😂

- JS도 못 돌리고
- DOM 업데이트도 안 되고
- 마우스 클릭도 응답 없고
- 스크롤도 안 되고
- 렌더링도 못 한다

이게 바로 “싱글 스레드 UI의 지옥” 포인트고,

여기에 맞춰 **이벤트 루프 + 렌더링 파이프라인**이 설계되어 있다.

### 1-2. V8과 Isolate 개념

V8은 내부적으로 **Isolate**라는 개념을 쓴다.

- **Isolate = 독립된 JS 런타임 인스턴스**
  - 자기만의 힙, 스택, GC, microtask queue를 가진다.
  - 기본적으로 한 Isolate는 한 스레드에 바인딩된다고 보면 된다.
- 크롬에서는 **렌더러 프로세스 안에 최소 1개의 Isolate**가 있고,
  - 각 탭/오리진 조합에 따라 더 세분화되는 경우도 있다(사이트 격리 정책 등).

중요 포인트:

> 한 탭(렌더러 프로세스) 안의 메인 스레드에 **“V8 Isolate + DOM + 렌더링 로직”**이 같이 얹혀 있다.

그래서:

- JS가 돌면서 DOM을 조작하는 게 “동기”로 보이는 이유,
- DOM API가 JS에서 바로 호출 가능한 이유

모두 **같은 스레드, 같은 프로세스 안에 있기 때문**이다.

---

## 2. 렌더링 파이프라인: HTML → DOM → 픽셀까지

브라우저 렌더링 파이프라인을 간략히 정리하면:

1. **DOM 트리 생성 (Parsing)**
2. **CSSOM 트리 생성**
3. **Render Tree 생성 (DOM + CSSOM 결합)**
4. **Layout (Reflow)**
   - 각 노드의 위치와 크기 계산
5. **Paint (Rasterization 준비)**
   - 어떤 색/선/텍스트가 어디에 그려져야 하는지
6. **Compositing (합성)**
   - 레이어를 GPU로 보내고, 최종 프레임 조립

이 중 **1~4단계 + 일부 아날로그한 Paint**는

메인 스레드에서 DOM/CSS/레이아웃 알고리즘으로 수행되고,

실제 헤비한 래스터라이즈/컴포지팅은 GPU 프로세스 쪽에서 더 처리된다.

### 2-1. DOM/CSSOM 생성

- HTML 파서가 HTML을 읽으면서 **DOM 트리**를 만든다.
- \`<style>\`, CSS 파일, 인라인 스타일 등을 파싱해서 **CSSOM**을 만든다.
- 둘을 합쳐서 “이 요소는 이 스타일을 가진다”라는 **Styled DOM / Render Tree**를 형성.

이 과정에서 JS가 끼어들면:

- \`<script>\` 태그를 만나면
  - JS 실행(V8) → DOM 읽기/쓰기 가능
  - DOM 완성 시점에 영향을 줄 수도 있음
- \`document.write\`, 동적 생성, 동적 CSS 주입 등으로 렌더링 흐름이 흔들릴 수 있다.

### 2-2. Layout (Reflow)

DOM과 스타일 정보를 기반으로:

- 각 요소의 **위치(x, y)**, **크기(width, height)** 등을 계산한다.
- flex, grid, position, margin, padding 등 CSS 레이아웃 규칙을 다 적용.

레거시 표현으로는 “Reflow”라고 부르는 단계.

JS에서 렌더링 타이밍과 상관 없이

DOM을 마구 변경하면:

- 브라우저가 **레이아웃을 재계산(Reflow)** 해야 하고,
- 이건 메인 스레드에서 꽤 무거운 작업일 수 있다.

### 2-3. Paint + Raster + Compositing

레이아웃 결과를 토대로:

- 각 요소를 어떻게 그릴지(Paint) 결정하고,
- 레이어(layer) 단위로 나눠서,
- GPU 프로세스 쪽에서 래스터라이즈(텍스처 만들기)하고,
- 여러 레이어를 합성(Compositing)해서 하나의 프레임 이미지로 만든다.

**position: fixed**, **transform**, **opacity**, **will-change** 같은 속성이

왜 “레이어 승격”과 연결되어 성능에 영향을 주는지 바로 여기와 관계 있다.

요약하면:

> 메인 스레드: “무엇을, 어디에, 어떻게 그릴지” 결정
>
> GPU: “결정된 걸 실제 픽셀로 찍어내는” 고성능 노동자

---

## 3. 이벤트 루프와 렌더링 타이밍의 관계

이제 이전 글에서 이야기했던 **Task/Microtask + 렌더링** 흐름과 연결해보자.

하나의 렌더러 프로세스 메인 스레드에서의 루프를

엄청 단순화하면 이런 그림이 된다:

\`\`\`
[1] Task 실행 (JS 콜백, 이벤트 핸들러 등)
[2] Microtask 실행 (Promise.then, queueMicrotask 등)
[3] 렌더링 타이밍이면 → 렌더링 파이프라인 (스타일, 레이아웃, 페인트, 합성)
[4] 다음 Task...
\`\`\`

그래서 다음과 같은 현상이 생긴다.

### 3-1. JS가 오래 돌면 렌더링이 막힌다

\`\`\`jsx
button.addEventListener("click", () => {
  const start = performance.now();
  while (performance.now() - start < 2000) {
    // 2초 동안 바쁜 루프
  }
});
\`\`\`

- 이 while이 돌아가는 동안:
  - 메인 스레드는 JS 실행에 100% 사용됨.
  - 이벤트 루프가 다음 Task로 못 넘어감.
  - Microtask도 안 돌아감 (콜 스택이 안 비니까).
  - 렌더링 파이프라인도 못 됨.

그래서 UI는 그대로 멈춰 있고,

브라우저는 “응답 없음” 팝업을 띄우고 싶어 한다.

이게 “JS는 싱글 스레드라서 UI가 멈출 수 있다”의 실체다.

### 3-2. requestAnimationFrame이 “프레임 맞춰 호출”되는 이유

\`requestAnimationFrame(callback)\`은:

- **다음 렌더링 시점 직전에** callback을 실행해달라는 요청이다.
- 이벤트 루프 입장에선:
  - Task, Microtask 처리 이후,
  - 렌더링을 하기 직전에, rAF 콜백 호출 → 그 안에서 DOM 업데이트 → 그걸 가지고 렌더링.

그래서 애니메이션 로직을 rAF 안에 넣으면:

- 프레임 단위로 DOM 변경
- 렌더링 타이밍과 동기화된 JS 실행

을 보장받을 수 있다.

### 3-3. Microtask 과사용 = 렌더링 Starvation 가능

\`Promise.then\`, \`queueMicrotask\`는 microtask 큐에 들어가고,

이 큐는 Task와 Task 사이에 “다 비워질 때까지” 실행된다.

\`\`\`jsx
functionloop() {
queueMicrotask(loop);
}
loop();
\`\`\`

같은 코드를 돌리면 어떻게 될까?

- Task 하나 끝날 때마다 microtask 큐를 비워야 하는데
- 큐를 비울 때마다 또 새 microtask가 들어감
- → 사실상 이벤트 루프가 **다음 Task로 못 넘어감**
- → 렌더링, 입력 처리 모두 막힘

즉, **microtask만으로도 UI를 굳혀버릴 수 있다**는 걸 기억해야 한다.

---

## 4. Web Worker는 어디에 서 있고, 뭐가 해결/미해결?

> “싱글 스레드가 문제면 Worker 쓰면 되지 않나요?”

**Web Worker**는 렌더러 프로세스 안에서 **별도 스레드**로 생성된다.

- Worker 스레드 안에도 **V8 Isolate**가 하나 더 붙는다.
- 그 안에서 JS를 돌릴 수 있고,
  메인 스레드와는 \`postMessage\`로 메시지 교환.

장점:

- 무거운 계산/파싱/데이터 처리 로직을 Worker로 넘기면
  메인 스레드가 그만큼 가벼워짐.
- 메인 스레드는 DOM/렌더링/이벤트 처리에 집중 가능.

하지만:

- Worker는 **DOM에 직접 접근할 수 없다.**
  (\`document\`, \`window\` 없음)
- 최종 DOM 업데이트는 여전히 메인 스레드가 해야 한다.
- 즉, “화면에 반영되는 부분”은 여전히 싱글 스레드 목이 좁다.

정리하면:

> Worker = 메인 스레드 짐을 덜어주는 노동자,
>
> 하지만 **UI/렌더링 목줄은 여전히 메인 스레드**에 묶여 있다.

---

## 5. 실제로 이 구조를 어떻게 활용할까? (실무 관점 몇 가지)

실제 프론트 작업/실시간 모니터링 UI/대시보드 같은 걸 만들면서

알아두면 좋은 실전 팁들을 구조에 맞춰 연결해보면:

1. **메인 스레드를 오래 점유하는 코드 피하기**
   - 큰 JSON 파싱, 복잡한 연산 → Web Worker로 넘기기
   - 큰 배열 map/filter/reduce 연속 호출 → chunk로 나누고 \`setTimeout\`/\`rAF\`로 쪼개기
2. **DOM 변경은 “배치해서” 하기**
   - 루프 안에서 DOM 읽기/쓰기 섞어 쓰지 말고,
     - 먼저 읽기
     - 나중에 쓰기
   - React/프레임워크들이 “렌더 → 커밋” 단계를 나누는 이유도 비슷한 맥락.
3. **Promise/microtask는 “즉시 후속 처리”에만 쓰기**
   - 상태 변경 직후, 그에 의존하는 후속 처리 한 번 정도는 OK
   - microtask 안에서 또 microtask 무한으로 만드는 패턴은 조심 (렌더링 못 함)
4. **requestAnimationFrame은 애니메이션 전용으로**
   - 스크롤, 드래그, 그래프 실시간 업데이트 같은 것들
   - “프레임 당 1번 갱신”이 보기에 제일 자연스러움
     (setInterval 16ms와는 느낌이 다르다)

---

## 6. 마무리: 브라우저를 “작은 운영체제”처럼 보기

이제 전체를 한 번 더 요약해보면:

- 브라우저는:
  - 브라우저 프로세스 + 렌더러 프로세스 + GPU 프로세스 등으로 이루어진 “작은 OS” 같고
- 렌더러 프로세스 안에서는:
  - 메인 스레드 위에 **V8 Isolate + DOM + 렌더링 로직**이 같이 올라가 돌아가며
- 이벤트 루프는:
  - Task → Microtask → 렌더링 파이프라인 → Task…
    이런 순환을 계속 돌리고 있다.

이 구조를 알고 나면,

- “왜 JS와 렌더링이 서로 영향을 주는지”
- “왜 어떤 코드는 프레임 드랍을 만들고, 어떤 패턴은 부드럽게 느껴지는지”
- “왜 Web Worker를 써도 DOM 쪽 병목이 완전히 사라지지 않는지”

같은 것들이 **“감”이 아니라 구조적으로 이해**된다.
`,Av=`# 웹(Web)이란 도대체 뭘까?

HTML/CSS/JS는 아는데… 그래서 “웹”이 어떻게 화면이 되는 건데?

웹 개발 조금만 하다 보면 이런 시점이 온다.

- HTML은 구조
- CSS는 스타일
- JS는 동작

여기까지는 알겠는데…

> “그래서… 웹이 뭐임?”
> “왜 URL 치면 화면이 뜨는 거지?”
> “그 HTML 문자열이 어떻게 픽셀이 되는 거야?”

나도 이 지점에서 한동안 멈춰 있었음.
문서 보면 “DOM, CSSOM, 렌더 트리, 레이아웃, 페인트” 이런 단어가 나오는데 그냥 외우면 끝이 아니더라.

그래서 오늘은 “웹을 **동작 원리 관점**”에서 한 번 제대로 풀어보려고 한다.

결론부터 말하면:

> 웹은 “화면 기술”이 아니라
> **리소스(문서)를 주소로 요청하고, 응답을 받아, 브라우저가 해석해서 보여주는 시스템**이다.

이 관점이 잡히면 HTML/CSS/JS가 왜 그렇게 나뉘어 있고,
React/Vue가 왜 등장했고, 웹 성능이 왜 중요한지까지 줄줄이 이어진다.

---

## 0. 웹의 본질: “주소로 리소스를 찾고 → 프로토콜로 주고받고 → 브라우저가 해석한다”

웹을 한 줄로 요약하면 이거다.

> **URL로 리소스를 식별하고 → HTTP로 요청/응답하고 → 브라우저가 해석해서 렌더링한다.**

여기서 3요소만 제대로 잡으면 웹의 절반은 끝난다.

### 0-1) URL: “어디에 뭐가 있는지”를 식별하는 체계

URL은 그냥 주소가 아니다. “리소스 식별자”다.

- \`https://example.com/posts/1\`
- \`https://cdn.example.com/app.js\`
- \`https://api.example.com/users\`

이건 전부 **“무언가를 가리키는 것”**이지, 꼭 HTML만 가리키는 게 아니다.

웹에서 리소스는:

- HTML 문서
- CSS 파일
- JS 번들
- 이미지/폰트
- JSON(API 응답)
- video/audio
- wasm
- …등등 전부 포함된다.

### 0-2) HTTP: “그걸 어떻게 주고받는지”를 정하는 규칙

HTTP는 “웹의 운송 규칙”이다.

- 클라이언트(브라우저)가 요청(request)을 보내고
- 서버가 응답(response)을 준다.

그리고 그 요청/응답에는 메타데이터가 붙는다.

- Method: GET/POST/PUT/DELETE…
- Status: 200/301/404/500…
- Header: Content-Type, Cache-Control, Cookie…

여기서 **Content-Type**이 진짜 중요하다.

브라우저는 응답을 받을 때 이렇게 생각한다.

> “이게 HTML이야? JS야? 이미지야? JSON이야?”

그 판단이 렌더링 흐름을 결정한다.

### 0-3) 브라우저: “받은 리소스를 이해하고 실행/렌더링하는 런타임”

브라우저는 단순한 뷰어가 아니다.

- 네트워크 요청도 하고
- HTML/CSS 파싱도 하고
- JS 실행도 하고
- GPU로 렌더링도 한다

말 그대로 **웹 앱을 실행하는 운영체제급 런타임**에 가깝다.

---

## 1. HTML: “문서의 구조와 의미(semantic)를 정의하는 언어”

HTML을 처음 배울 때 다들 이렇게 외운다.

> HTML = HyperText Markup Language

근데 진짜 중요한 건 HyperText보다 Markup이다.

HTML은 “프로그래밍 언어”가 아니라
**문서의 구조를 선언하는 언어**다.

- \`<h1>\`: 이건 제목이다
- \`<p>\`: 이건 문단이다
- \`<nav>\`: 이건 내비게이션이다
- \`<button>\`: 이건 버튼이다

즉 HTML은 “무엇이 무엇인지”를 알려주는 **의미 기반 문서**다.

그래서 HTML에는:

- 변수 없음
- if 없음
- for 없음

대신 “구조/의미/관계”만 있다.

---

## 2. 브라우저는 HTML 문자열을 그대로 쓰지 않는다 → DOM을 만든다

여기서 웹 동작의 핵심이 시작된다.

HTML은 그냥 텍스트다.

\`\`\`html
<div><p>Hello</p></div>
\`\`\`

이걸 텍스트 그대로는 “화면”으로 만들 수 없다.
그래서 브라우저는 HTML을 파싱해서 **DOM 트리**로 바꾼다.

> HTML → Parsing → DOM(Document Object Model)

DOM은 쉽게 말하면:

- 문서를 **트리 구조 객체**로 만든 것
- JS가 \`document.querySelector()\`로 만지는 그 대상

HTML이 “문서 문자열”이라면,
DOM은 “렌더링/조작 가능한 객체 모델”이다.

---

## 3. CSS: “문서를 어떻게 보이게 할지”를 규칙으로 정의한다 (그리고 CSSOM)

CSS는 스타일 언어인데, 여기서도 중요한 포인트가 있다.

### 3-1) CSS가 생긴 이유 = HTML이 스타일로 오염되던 시절을 끝내기 위해

옛날 HTML은 \`<table>\`로 레이아웃 만들고
\`<font>\`로 폰트 바꾸고
\`bgcolor\`로 배경색 넣고 난리였다.

결국 HTML이 문서가 아니라 “디자인 스크립트”가 돼버림.

그래서 탄생한 철학이 이거다.

> 구조(HTML)와 표현(CSS)을 분리하자.

이게 지금 웹 개발의 근간이다.

### 3-2) 브라우저는 CSS도 문자열로 쓰지 않는다 → CSSOM

CSS도 결국 텍스트다.

\`\`\`css
p {
  color: red;
}
\`\`\`

브라우저는 이것도 파싱해서 트리화한다.

> CSS → Parsing → CSSOM(CSS Object Model)

DOM과 CSSOM이 둘 다 준비되어야 “렌더링”을 시작할 수 있다.

---

## 4. JS(JavaScript): “동작과 로직”을 담당한다

그리고 여기서 오해하면 안 되는 사실 하나

JS는 웹에 “행동”을 부여한다.

- 클릭하면 열리고
- 스크롤하면 로딩되고
- 서버에서 데이터를 가져오고
- 화면이 동적으로 바뀌고

여기까지는 다들 아는데, 진짜 중요한 사실:

> JS 엔진은 **JS 코드만 실행한다**
> DOM 조작, 네트워크 요청, 타이머는 JS 언어 자체 기능이 아니라 **브라우저(Web API)가 제공**한다.

즉:

- V8 같은 JS 엔진: “자바스크립트 실행기”
- Web APIs: “DOM, fetch, setTimeout, event 등 기능 제공자”
- Event Loop: “둘 사이를 연결하는 스케줄러”

이 삼각형을 이해해야 “웹이 돌아가는 방식”이 명확해진다.

---

## 5. 브라우저 렌더링 파이프라인: HTML/CSS가 “픽셀”이 되는 과정

여기부터가 찐이다.

웹은 HTML/CSS/JS를 “그냥 보여주는 게 아니라”
일련의 파이프라인으로 **픽셀을 만들어낸다.**

브라우저는 대략 이런 단계로 움직인다.

### 5-1) 파싱 단계

1. HTML 다운로드
2. HTML 파싱 → **DOM 생성**
3. CSS 다운로드
4. CSS 파싱 → **CSSOM 생성**

### 5-2) 렌더 트리(Render Tree)

5. DOM + CSSOM → **Render Tree 생성**

Render Tree는 “화면에 실제로 그릴 노드들”만 모은 트리다.

- \`display: none\`은 렌더 트리에 안 들어감
  (DOM에는 있어도 화면에는 안 그리니까)
- \`visibility: hidden\`은 들어감
  (공간은 차지하니까)

### 5-3) Layout (Reflow)

6. **Layout**: 각 요소의 위치/크기 계산

여기서 계산되는 게 예를 들어:

- 박스 모델(width/height/padding/margin)
- flex/grid 배치 결과
- line wrapping, 폰트 크기, 줄바꿈
- viewport 기준 상대 단위

### 5-4) Paint

7. **Paint**: 픽셀로 “그릴 준비”를 한다

색, 그림자, 테두리, 텍스트 같은 것들을
“어떤 순서로 어떤 픽셀을 그릴지” 기록한다.

### 5-5) Composite

8. **Composite**: 레이어를 합쳐 최종 화면에 출력

요즘 브라우저는 성능 때문에 레이어를 나눠 GPU에서 합성(composite)한다.

그래서 \`transform\`, \`opacity\` 같은 속성은 레이아웃을 다시 안 하고도 애니메이션이 가능해진다.

---

## 6. 그래서 “성능 최적화”라는 게 왜 나오는가?

JS가 DOM/CSSOM을 건드리면
렌더링 파이프라인이 다시 돈다.

- DOM 변경 → Render Tree 재생성 가능
- 레이아웃 관련 CSS 변경 → Layout 발생
- Paint 관련 변경 → Paint 발생
- transform/opacity → Paint 없이 Composite만 발생할 수 있음

그래서 성능 최적화에서 자주 나오는 말들이 다 여기서 나온다.

- “리플로우 줄여라”
- “레이아웃 스래싱(layout thrashing) 조심해라”
- “requestAnimationFrame 써라”
- “쓰로틀/디바운스 해라”
- “transform/opacity로 애니메이션 해라”

즉 성능은 “코드가 빠르냐 느리냐”보다
**렌더링 파이프라인을 얼마나 덜 흔드냐**가 훨씬 중요해진다.

---

## 7. JS는 어디서 실행될까? (엔진 vs 브라우저)

브라우저는 크게 두 덩어리로 보면 된다.

### 7-1) JS 엔진 (V8, SpiderMonkey, JSC)

- JS 실행
- JIT 컴파일
- GC(가비지 컬렉션)
- 콜 스택 관리

### 7-2) 브라우저 런타임(Web APIs)

- DOM API
- fetch/XHR
- timer
- event system
- rendering pipeline

즉 JS는 브라우저 안에서 혼자 사는 게 아니라,
브라우저가 제공하는 API와 이벤트 루프 위에서 돌아간다.

---

## 8. 내가 이해한 “웹”의 정의

정리하면 웹은 단순히 “HTML/CSS/JS 묶음”이 아니다.

> 웹은 리소스를 URL로 식별하고,
> HTTP로 요청/응답하며,
> 브라우저가 DOM/CSSOM으로 해석해 렌더링하는 시스템이다.

그리고 우리가 하는 “웹 개발”은
이 시스템 위에 앱을 올리는 일이다.

- 문서를 만들고(HTML)
- 보여주고(CSS)
- 반응하게 하고(JS)
- 서버랑 통신하고(fetch)
- 성능 튜닝하고(rendering pipeline)
- 프레임워크로 복잡도 관리하고(React/Vue)

---

## 마치며: 웹이 “화면”이 아니라 “파이프라인”이라는 걸 이해하면 다 연결된다

웹을 “화면 만드는 기술”로만 보면
각 기술이 따로 노는 느낌이 든다.

근데 웹을:

> **요청 → 응답 → 해석 → 렌더링**
> 이라는 파이프라인으로 보면

HTML/CSS/JS가 왜 존재하는지,
브라우저가 왜 그렇게 복잡한지,
SPA가 왜 등장했는지,
성능 최적화가 왜 중요한지까지 전부 한 줄로 이어진다.
`,jv=`# 커링?? 컬링도 아니고 이게 뭐누 (근데 실무에서 은근 자주 만남)

개발하다 보면 이런 순간이 있다.

- 함수 하나 만들었는데
- 매번 똑같은 인자(설정/키/옵션)를 계속 넣고 있고
- 코드가 점점 \`() => () => () =>\` 처럼 이상해지기 시작함

그때 누가 옆에서 한마디 한다.

> “그거 커링이잖아”

…커링?
컬링도 아니고?
카레도 아니고?

오늘은 그 커링을 **“외워서 쓰는 게 아니라” 이해해서 쓰는 관점**으로 정리해본다.

---

## 0. 한 줄 정의부터 박자 맞추기

커링(currying)은 딱 이거다.

> **다인자 함수 \`f(a, b, c)\`를 \`f(a)(b)(c)\`처럼, 인자를 “쪼개서 순차적으로 받는 함수 체인”으로 바꾸는 기법**

조금 더 덜 폼 잡으면:

> **인자를 한 번에 다 받지 않고, 하나(또는 몇 개)씩 나눠 받는 함수로 바꾸는 것**

여기서 중요한 건 “쪼갠다”가 아니라 **“함수로 바꾼다”**는 점.

---

## 1. 예제로 보는 커링: “아 그냥 함수가 함수를 반환하는거구나”

### 1-1) 일반 함수

\`\`\`js
function add(a, b) {
  return a + b;
}

add(2, 3); // 5
\`\`\`

### 1-2) 커링된 함수

\`\`\`js
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = curriedAdd(2);
add2(3); // 5
add2(10); // 12
\`\`\`

여기서 핵심:

- \`curriedAdd(2)\`를 호출하면
- “2를 기억하는 함수”가 하나 만들어지고
- 그 함수는 나중에 \`b\`만 받아서 계산함

그럼 질문.

> “근데 a=2를 어떻게 기억해?”

정답: **클로저(closure)**

---

## 2. 커링이 가능한 이유 = 클로저 때문임

커링은 결국 이런 구조다.

\`\`\`js
function makeAdder(a) {
  return function (b) {
    return a + b; // 외부 스코프 변수 a를 기억함
  };
}
\`\`\`

- \`makeAdder(2)\`가 끝나면 원래는 \`a\`가 사라져야 한다
- 근데 내부 함수가 \`a\`를 참조하고 있음
- 그래서 JS 런타임이 \`a\`를 메모리 어딘가에 남겨둠
- 내부 함수가 계속 \`a\`를 사용할 수 있음

즉:

> 클로저는 “상태를 기억하는 능력”이고
> 커링은 그 능력을 이용해서 “인자를 쪼개서 받는 패턴”을 만드는 것이다.

---

## 3. 커링의 진짜 맛: “인자 일부를 고정한 함수를 만들 수 있다”

커링이 실무에서 빛나는 순간은 보통 이거다.

> “공통 인자를 미리 고정하고, 나중에 나머지만 받아 쓰고 싶다”

예를 들어 곱셈:

\`\`\`js
const curryMultiply = (a) => (b) => a * b;

const double = curryMultiply(2);
const triple = curryMultiply(3);

double(10); // 20
triple(10); // 30
\`\`\`

여기서 \`double\`, \`triple\`은 사실상:

- 의미 있는 이름을 가진 “특화 함수”가 됨
- 재사용성이 갑자기 좋아짐
- 코드가 읽기 쉬워짐

---

## 4. 커링 vs 부분 적용(Partial Application)

(실무에서 헷갈리기 쉬운 포인트)

여기서 다들 한 번씩 멈춘다.

> “커링이랑 부분 적용이랑 뭐가 달라?”

엄밀히 말하면:

### ✅ 커링(currying)

- \`f(a, b, c)\` → \`f(a)(b)(c)\`
- **항상 인자 하나씩 받는 형태로 변환**

### ✅ 부분 적용(partial application)

- \`f(a, b, c)\`에 일부 인자를 먼저 넣어서
- \`g(b, c)\` 같은 **새 함수를 만드는 것**

실무에서는 둘을 엄격히 구분 안 하고
“인자 일부 고정해서 함수 만드는 패턴”을 그냥 커링이라고 부르는 경우가 많다.

중요한 건 용어 싸움이 아니라:

> “공통 인자를 고정해서 코드 중복을 줄인다”
> 이 실전 효용임.

---

# 그렇다면… 어떻게 쓰는데? (실전 패턴 모음)

이제부터가 진짜다.
커링이 “아 이런 데서 써먹는구나” 체감되는 예제들.

---

## 1) 공통 설정 고정하는 API 클라이언트 (baseUrl/헤더/에러처리)

### 아이디어

- 1단계: 프로젝트/도메인별 공통 설정을 고정
- 2단계: path와 옵션만 넣어서 호출

\`\`\`ts
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface BaseConfig {
  baseUrl: string;
  defaultHeaders?: Record<string, string>;
}

interface RequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined>;
}

export const createApiClient =
  (baseConfig: BaseConfig) =>
  async <T = unknown>(
    path: string,
    options: RequestOptions = {}
  ): Promise<T> => {
    const url = new URL(path, baseConfig.baseUrl);

    if (options.query) {
      Object.entries(options.query).forEach(([key, value]) => {
        if (value !== undefined) url.searchParams.set(key, String(value));
      });
    }

    const res = await fetch(url.toString(), {
      method: options.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        ...baseConfig.defaultHeaders,
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
      throw new Error(\`API Error: \${res.status} \${res.statusText}\`);
    }

    return (await res.json()) as T;
  };
\`\`\`

### 사용 예시

\`\`\`ts
export const hmgApi = createApiClient({
  baseUrl: "/api/v1",
  defaultHeaders: { "X-Client": "HMG-VTDM" },
});

export const sumsApi = createApiClient({
  baseUrl: "https://sums.internal.hmg",
});

// 호출
const projects = await hmgApi<ProjectDto[]>("/projects", {
  query: { page: 1, size: 20 },
});

const result = await sumsApi<ReprogramResult>("/reprogram", {
  method: "POST",
  body: { vin, ecuId, fileId },
});
\`\`\`

포인트:

- \`createApiClient(baseConfig)\`에서 **baseConfig를 클로저로 고정**
- 이후엔 매번 baseUrl/header 반복 없이 path만 넣으면 됨
- 그리고 공통 에러 핸들링도 한 군데로 모인다

---

## 2) React 이벤트 핸들러: JSX에서 인라인 람다 줄이기

리스트/테이블에서 흔히 이런 코드가 나온다.

\`\`\`tsx
onClick={() => handleClick(row.id, "DETAIL")}
\`\`\`

이 패턴도 괜찮긴 한데, JSX가 복잡해지고
실수로 \`stopPropagation\` 같은 것도 빼먹기 쉬움.

커링으로 핸들러 “팩토리”를 만들면 깔끔해진다.

\`\`\`tsx
const createRowClickHandler =
  (rowId: string, mode: "DETAIL" | "EDIT") => (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("clicked:", rowId, mode);
  };

// 사용
{
  rows.map((row) => (
    <tr
      key={row.id}
      onClick={createRowClickHandler(row.id, "DETAIL")}
      className="cursor-pointer hover:bg-slate-50"
    >
      ...
    </tr>
  ));
}
\`\`\`

장점:

- JSX가 “선언적”으로 보임
- 핸들러 로직이 분리됨
- 의도 파악이 쉬움

---

## 3) Zustand + 커링: selector/action factory에서 진짜 유용

### 3-1) selector를 커링으로 만들기

\`\`\`ts
interface User {
  id: number;
  name: string;
}

interface UserState {
  users: User[];
}

const selectUserById = (id: number) => (state: UserState) =>
  state.users.find((u) => u.id === id);

// 사용
const user = useUserStore(selectUserById(1001));
\`\`\`

여기서 \`selectUserById(1001)\`는

- id가 “고정된 selector”
- Zustand는 나중에 state를 넣어서 호출

즉 커링이 “Zustand selector 패턴”에 자연스럽게 붙는다.

### 3-2) action도 커링으로 만들기 (+ stale closure 회피까지)

\`\`\`ts
export const createPermissionToggleHandler = (permissionKey: string) => () => {
  const toggle = usePermissionStore.getState().togglePermission;
  toggle(permissionKey);
};

// 사용
<Button onClick={createPermissionToggleHandler("ADMIN_PAGE_ACCESS")}>
  토글
</Button>;
\`\`\`

포인트:

- \`permissionKey\`는 커링+클로저로 고정
- \`getState()\`로 액션을 가져오면 stale closure도 피하기 좋음

---

## 4) 필터/정렬: 조합 가능한 predicate 만들기

“조건 함수(predictate)”를 커링으로 만들면 조합이 깔끔해진다.

\`\`\`ts
interface FileMeta {
  id: string;
  team?: string;
  owner?: string;
  tags: string[];
}

const byTeam = (team: string) => (file: FileMeta) => file.team === team;
const byOwner = (owner: string) => (file: FileMeta) => file.owner === owner;
const hasTag = (tag: string) => (file: FileMeta) => file.tags.includes(tag);

const filterWith =
  <T>(predicate: (item: T) => boolean) =>
  (list: T[]) =>
    list.filter(predicate);
\`\`\`

사용:

\`\`\`ts
const complexPredicate = (file: FileMeta) =>
  byTeam("VTDM")(file) && byOwner("남훈")(file) && hasTag("J1979")(file);

const filtered = filterWith(complexPredicate)(files);
\`\`\`

이 스타일이 좋은 이유:

- “조건(설정)”과 “실제 데이터”가 분리됨
- UI에서 조건을 바꿔도 predicate 구성만 바꾸면 됨

---

## 5) 폼 검증: “라벨 고정 + 값만 넣는” 검증기 만들기

\`\`\`ts
type Validator = (value: string) => string | null;

const required =
  (label: string): Validator =>
  (value) =>
    value.trim() === "" ? \`\${label}을(를) 입력해주세요.\` : null;

const maxLength =
  (label: string, max: number): Validator =>
  (value) =>
    value.length > max ? \`\${label}은(는) 최대 \${max}자까지 가능합니다.\` : null;

const combineValidators =
  (...validators: Validator[]): Validator =>
  (value) => {
    for (const v of validators) {
      const err = v(value);
      if (err) return err;
    }
    return null;
  };
\`\`\`

사용:

\`\`\`ts
const validateProjectName = combineValidators(
  required("프로젝트 이름"),
  maxLength("프로젝트 이름", 50)
);

const error = validateProjectName(form.name);
if (error) toast.error(error);
\`\`\`

- 라벨/제약 조건을 미리 고정해두면
- 입력값만 넣어서 검사 가능
- 폼이 커질수록 효과가 커짐

---

# 커링을 쓸 때 흔히 하는 실수/주의점 (중요)

커링이 멋있어서 막 쓰면 오히려 코드가 더 어려워질 수 있다.

### ✅ 1) “너무 쪼개면” 읽기 어려움

\`f(a)(b)(c)(d)(e)\`는 솔직히 눈 아픔.

- 인자 2~3개 정도에서 가장 실용적
- “공통 설정을 고정하는 의도”가 있을 때만

### ✅ 2) React 렌더링에서 “매번 새 함수 만드는” 문제

JSX에서 \`createHandler(row.id)\`를 호출하면
리렌더 때마다 새 함수가 만들어진다.

- 보통 큰 문제는 아니지만
- props로 내려가고 memo가 걸려있으면 영향이 생길 수 있음

이때는 \`useCallback\`으로 팩토리를 메모이즈 하거나,
핸들러 생성 위치를 위로 올리거나(정책적으로 관리) 하면 된다.

### ✅ 3) 커링 = 무조건 함수형 프로그래밍… 이건 아님

커링은 그냥 “패턴”이다.
필요할 때만 쓰는 게 제일 깔끔하다.

---

# 결론: 커링은 “인자를 쪼개는 기술”이 아니라 “공통을 고정하는 도구”다

정리하면 커링이 실무에서 의미 있는 순간은 대부분 이거다.

> **매번 반복되는 인자(설정/환경/키/옵션)를 먼저 고정하고**
> 나머지 값만 받아서 쓰도록 만들 때

- API 클라이언트 설정 고정
- React 핸들러에 인자 전달 깔끔하게
- Zustand selector/action factory
- 필터/검증 같은 조건 기반 함수 조합

이렇게 “반복되는 인자”가 보이면
커링을 한 번 떠올려볼 만하다.
`,Mv=`# 클로저란 당최 무엇인가

“함수가 변수 기억하는 거요”로 끝내면 나중에 꼭 크게 맞는다

JS 좀 하다 보면 클로저는 무조건 마주친다.

- 커링할 때
- 콜백 쓸 때
- 이벤트 핸들러 만들 때
- React에서 \`useCallback\` 썼는데 상태가 안 바뀌는 것처럼 보일 때
- Zustand/Redux에서 selector/action 만들 때

근데 대부분 설명이 이렇게 끝난다.

> “클로저는 반환된 내부 함수다.”
> “내부 함수가 외부 스코프를 기억한다.”

맞긴 한데… 이 설명만으로는 실전 버그가 생겼을 때 해결이 안 된다.
“왜 기억하는데?”, “어디에 기억하는데?”, “언제까지 기억하는데?” 이런 질문에 답이 안 나옴.

그래서 오늘은 클로저를 **엔진/메모리 관점까지 포함해서** “정확히” 정리해본다.

---

## 1. 클로저의 정확한 정의: “반환된 함수”가 아니라 “함수 + 환경”이다

클로저를 전문가스럽게(?) 한 문장으로 정리하면:

> **클로저(closure)는 “함수(function)”와 “그 함수가 선언될 당시의 렉시컬 환경(lexical environment)”이 함께 묶여서 유지되는 런타임 개념이다.**

중요한 포인트는 이거다.

- “반환된 내부 함수”는 **클로저가 눈에 띄는 대표 패턴**일 뿐이고
- \`return\`이 없어도, 외부 스코프 변수를 참조하는 함수는 클로저가 될 수 있다

예를 들면 이런 것도 클로저다.

- 이벤트 핸들러
- setTimeout/setInterval 콜백
- Promise then/catch 콜백
- subscribe callback
- React hook 내부 함수들

즉 “반환”은 본질이 아니다.

> **외부 스코프 변수를 참조하는 함수가 그 외부 스코프보다 오래 살아남는 순간, 클로저가 된다.**

---

## 2. 클로저를 이해하려면 “렉시컬 스코프”부터 잡아야 한다

### 2-1. 렉시컬 스코프(lexical scope)란?

JS는 **렉시컬 스코프 언어**다.

이 말은 스코프가

- “어디서 호출됐냐(call site)”가 아니라
- **“어디서 선언됐냐(define site)”**로 결정된다는 뜻.

즉 코드 위치가 스코프를 정한다.

\`\`\`js
const x = 10;

function outer() {
  const y = 20;

  function inner() {
    console.log(x, y);
  }

  return inner;
}
\`\`\`

\`inner\`는 코드상 \`outer\` 내부에서 선언되었기 때문에
\`outer\`의 \`y\`에 접근할 수 있다.

여기서 핵심은 “호출 위치”가 아니다.

\`\`\`js
const f = outer();
f(); // 여기서 호출 위치가 outer 밖이어도 y 접근 가능
\`\`\`

호출을 어디서 하든 상관 없다.
선언이 어디서 되었는지가 스코프를 결정한다.

---

## 3. 렉시컬 환경(Lexical Environment)은 엔진이 실제로 스코프를 구현하는 방식이다

여기부터가 “왜 클로저가 가능한지”의 정답.

JS 엔진은 스코프를 그냥 감으로 처리하지 않는다.
각 스코프마다 내부적으로 “환경 객체”를 만든다.

렉시컬 환경은 크게 이렇게 구성된다.

### 3-1. Environment Record (식별자 저장소)

현재 스코프에 선언된 변수/함수/매개변수들이 저장되는 “테이블” 같은 것.

예: \`{ y: 20 }\`

### 3-2. Outer Environment Reference (바깥 스코프 링크)

지금 스코프의 바깥 스코프(부모 환경)를 가리키는 포인터.

즉:

> Environment Record + Outer Reference
> 이게 묶여서 “렉시컬 환경”이 된다.

그리고 우리가 흔히 말하는 **스코프 체인**은:

> “Outer Reference를 따라 올라가는 연결 리스트 체인”이다.

어떤 변수를 찾을 때 엔진은 이렇게 한다.

1. 현재 Environment Record에서 찾고
2. 없으면 Outer Environment로 올라가고
3. 또 없으면 계속 올라가고
4. 끝까지 없으면 \`ReferenceError\`

---

## 4. 클로저가 “기억한다”는 게 정확히 뭔데? (메모리 관점)

보통 함수 호출이 끝나면 지역 변수는 “사라진다”고 배운다.

- 호출 스택(stack frame)이 정리되니까
- 지역 변수도 함께 날아간다

근데 클로저는 외부 함수가 끝났는데도 변수에 접근한다.

> “그럼 이 변수는 어디에 남아있냐?”

여기서 핵심은 GC(가비지 컬렉터)다.

### 4-1. 원래라면

\`outer()\`가 끝나면 \`y\`는 없어져야 한다.

### 4-2. 그런데…

\`inner\`가 \`y\`를 참조하고 있고,
\`inner\` 함수가 밖으로 나가서 계속 살아있으면?

\`\`\`js
function outer() {
  const y = 20;

  return function inner() {
    console.log(y);
  };
}

const f = outer();
f(); // 20
\`\`\`

엔진 입장에서 \`inner\`는 \`y\`가 있는 렉시컬 환경을 계속 참조한다.

즉:

- \`inner\`가 살아있다
- \`inner\`가 어떤 환경(렉시컬 환경)을 참조한다
- 그 환경에 \`y\`가 있다
- 그러면 GC는 “아직 참조 중이네?” 하고 안 지운다

결과적으로:

> **클로저가 참조하는 렉시컬 환경은 힙(heap)에 유지될 수 있다.**
> (정확히는 엔진 구현마다 다르지만, “스택에서 사라져야 할 것들이 살아남는다”는 현상은 동일)

그리고 \`inner\`에 대한 참조가 모두 끊기면?

\`\`\`js
f = null; // 참조 제거
\`\`\`

그때서야 GC가 회수한다.

---

## 5. “return이 없으면 클로저가 아니다?” → 완전 아니다

클로저는 “반환”이 아니라 “생존” 문제다.

\`\`\`js
let saved;

function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  saved = inner; // return 없이도 외부로 나감
}

outer();
saved(); // 10
\`\`\`

\`inner\`가 \`x\`를 참조하고 있고
\`inner\`가 \`saved\`에 저장되면서 outer보다 오래 살아남았다.

=> 클로저다.

---

## 6. 클로저를 왜 쓰냐? 실전에서 진짜 많이 쓰는 4가지

### 6-1. 정보 은닉 / 캡슐화 (private state)

클래스 없이도 “외부에서 접근 못 하는 상태”를 만들 수 있다.

\`\`\`js
function createCounter() {
  let count = 0;

  return {
    inc() {
      return ++count;
    },
    get() {
      return count;
    },
  };
}

const c = createCounter();
c.inc(); // 1
c.inc(); // 2
c.get(); // 2
\`\`\`

\`count\`는 외부에서 직접 못 만진다.
오직 클로저를 통해서만 접근 가능.

이게 JS에서 “private 변수” 구현하는 전통적인 방식.

---

### 6-2. 커링 / 부분 적용 (상태를 가진 함수)

커링은 사실상 클로저 응용이다.

\`\`\`js
const makeAdder = (x) => (y) => x + y;

const add10 = makeAdder(10);
add10(5); // 15
add10(20); // 30
\`\`\`

\`x=10\`을 기억하는 함수가 만들어지는 것 자체가 클로저다.

---

### 6-3. 비동기/콜백에서 “값 고정”

예전 \`var\` 시절에 특히 유명한 케이스.

\`\`\`js
for (var i = 0; i < 3; i++) {
  (function (copy) {
    setTimeout(() => console.log(copy), 100);
  })(i);
}
\`\`\`

IIFE가 \`copy\`를 캡처해서
각 타이머마다 다른 값을 찍게 만든다.

요즘은 \`let\`이 있어서 단순해졌지만, 원리는 여전히:

> “비동기 환경에서 값을 고정하려면 클로저가 필요하다”

---

### 6-4. React / Hooks / Zustand에서 “기본 동작 방식 그 자체”

React는 렌더마다 함수가 새로 실행된다.
그 렌더 스코프 안에서 만들어진 핸들러/이펙트는 전부 클로저다.

그래서 이런 stale closure가 터진다.

\`\`\`tsx
const value = useStore((s) => s.value);

const handle = useCallback(() => {
  console.log(value); // 오래된 value를 캡처할 수 있음
}, []);
\`\`\`

이게 바로 “클로저를 잘못 쓰면 상태가 안 바뀌는 것처럼 보이는” 현상.

---

## 7. 클로저의 부작용/주의점 (여기 진짜 중요)

### 7-1. 불필요한 메모리 유지

클로저가 거대한 객체를 참조하면, 그 객체가 회수되지 않는다.

예: 대형 배열, 이미지 데이터, huge map 같은 거 캡처하면
“생각보다 메모리 오래 잡아먹는” 문제가 생긴다.

### 7-2. stale closure 버그

React에서 가장 많이 맞는 버그.

- \`useCallback([])\`
- \`useEffect([])\`
- \`setInterval\` 안에서 state 사용
- debounce/throttle 콜백

=> 최신 값이 아니라 “그때 캡처된 값”만 본다.

해결은:

- 의존성 배열에 넣어서 최신화하거나
- \`useRef\`로 최신 값을 유지하거나
- Zustand면 \`getState()\`로 최신 값을 읽어오거나

### 7-3. 디버깅 난이도 상승

클로저가 중첩되면 “이 변수가 어느 시점 값인지” 추적이 어려워진다.
특히 팀 코드에서 \`() => () => () =>\` 남발하면 지옥 열린다.

---

## 8. 한 번에 요약

- **클로저란?**
  → **함수 + 그 함수가 선언될 당시의 렉시컬 환경을 함께 유지하는 런타임 구조**

- **왜 가능한가?**
  → 함수가 외부 변수를 참조하면 엔진은 그 렉시컬 환경을 유지하고,
  참조가 남아있으면 GC가 회수하지 않는다.

- **왜 쓰나?**
  → 캡슐화, 상태가 있는 함수(커링), 콜백에서 값 고정, React/Hooks 기반 동작

- **주의할 점**
  → 메모리 유지, stale closure 버그, 디버깅 어려움

---

## 마치며: 클로저는 “신기한 기술”이 아니라 “JS가 스코프를 구현하는 방식”이다

클로저는 뭔가 특별한 기능이 아니라,
JS가 렉시컬 스코프를 구현하는 과정에서 자연스럽게 생긴 메커니즘이다.

그리고 그 위에:

- 커링
- 캡슐화
- 이벤트 처리
- React Hooks
- 상태 관리 라이브러리

같은 현대 JS 개발의 대부분이 올라가 있다.

즉 클로저는 “알면 좋은 것”이 아니라

> **모르면 언젠가 크게 맞는 것**이다.
`,Nv=`# 프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처

최근에 프론트엔드 아키텍처를 다시 고민하면서

- DDD(도메인 주도 설계)
- FSD(Feature-Sliced Design)
- 그리고 어떤 분이 Velog에 정리해둔 “프론트엔드 도메인 아키텍처” 글
  을 같이 보게 됐다.

특히 “기술 단위로 나눈 폴더 구조”에서 레거시 유지보수를 하다 보면

**도메인(업무) 기준으로 코드가 안 보이는 문제**가 크게 와 닿는다.

이 글에서는:

1. DDD를 프론트 기준으로 간단히 정리하고
2. Velog 글에서 말하는 “도메인 슬라이스(Vertical Slice)” 개념을 풀어보고
3. 전통적인 FSD와 어떻게 다른지 비교하고
4. 앞으로 설계할 때 쓸 수 있는 실전 가이드를 정리해본다.

---

## 1. DDD(도메인 주도 설계)를 프론트 기준으로 다시 보자

### 1-1. DDD가 말하고 싶은 한 줄 요약

DDD를 아주 거칠게 한 줄로 줄이면 이거다.

> “코드를 기술 단위가 아니라 비즈니스 도메인 단위로 모델링하자.”

여기서 말하는 도메인(Domain)은

“유사한 업무들의 집합”이다.

예를 들면:

- 결제(Payment)
- 회원(User)
- 주문(Order)
- 차량제어(Vehicle Control)
- 로그 분석(Log Analytics)
- 진단 세션(Diagnostic Session) …

**핵심 아이디어는 두 가지**다.

1. **코드 구조와 이름이 실제 업무 용어와 대응되게 만들자**
   - 클래스/함수/파일 이름이
     “기획에서 쓰는 단어”와 자연스럽게 매핑되게.
   - 예: \`updateCampaign\`, \`DiagnosticSession\`, \`VehicleReprogrammingRequest\`
2. **변화·규칙이 다른 ‘덩어리’마다 Bounded Context로 쪼개자**
   - 같은 “Campaign”이라는 단어라도
     - ECU 업데이트 컨텍스트의 Campaign
     - 테스트 산출물 관리 컨텍스트의 Campaign
       가 의미와 규칙이 다르면,
       **각각 다른 컨텍스트로 분리**해야 한다.

프론트 개발 쪽에서 실무적으로 번역하면:

- \`services/\`, \`utils/\`, \`components/\` 같은 **기술 기준 폴더** 대신
- \`user/\`, \`cart/\`, \`payment/\`, \`vehicle-diagnosis/\` 같은 **도메인 기준 폴더**로 나누는 것에 가깝다.

### 1-2. DDD에서 중요한 개념 (프론트 친화 버전)

DDD 책에는 더 많은 개념이 나오지만,

프론트에서 특히 중요한 건 이 정도다.

### 1) Ubiquitous Language (보편 언어)

- 기획/PO/QA/개발자가 모두 **같은 용어를 쓴다.**
- 그 용어가 그대로 코드에도 박힌다.
  - “업데이트 프로세스”, “SUMS 동기화”, “진단 세션”, “캠페인 검증” 같은 단어들이
  - 파일명, 컴포넌트명, 상태명에 자연스럽게 등장해야 한다.

### 2) Bounded Context

- 한 도메인 안에서 **용어, 규칙, 모델이 일관되게 통하는 경계**.
- 예를 들어,
  - “ECU 업데이트” 컨텍스트의 \`Campaign\`과
  - “시험 산출물 관리” 컨텍스트의 \`Campaign\`이 의미가 다르면
    → 아예 **서로 다른 컨텍스트**로 분리해야 한다. (같은 타입으로 묶지 말기)

### 3) Domain Model

- 업무 규칙과 상태를 표현하는 모델 집합.
- 백엔드에선 Entity, Value Object, Domain Service 등으로 많이 나누지만
- 프론트에선 조금 단순하게:

> “도메인 관련 상태 + 비즈니스 로직 + 타입 정의 묶음”

정도로 봐도 충분하다.

즉, 프론트에서 DDD를 크게 거창하게 가져갈 필요는 없고,

> “코드를 비즈니스 기준으로 나눈다”

이게 핵심이라고 보면 된다.

---

## 2. 도메인 단위 “슬라이스(Vertical Slice)”란 무엇인가?

Velog 글에서 말하는 키워드가 바로 “Slice”다.

여기에는 두 가지 의미가 섞여 있다.

1. Redux Toolkit의 Slice
2. FSD(Feature-Sliced Design)의 Slice

그리고 이 두 개를 일반화한 개념이 **“도메인 단위 수직 슬라이스(Vertical Slice)”**다.

### 2-1. 왜 도메인 단위로 잘라야 할까?

글의 출발점은 이런 문제들이다.

- **과도한 공통화**
  - \`CardView\` 하나에 포스트/상품/유저카드 다 때려넣기 →
    분기(if/삼항연산자) 지옥
- **“관심사 분리”의 역설**
  - 로직을 A/B/C/D로 잘게 쪼개놓았더니
    항상 A→B→C→D 순서로 같이 호출해야 하는 구조가 됨
  - 한 단계 빼먹으면 버그
- **기술별 폴더 구조의 한계**
  - \`ui/\`, \`hooks/\`, \`api/\`, \`utils/\`로 나눴더니
    작은 요구사항 하나 바꾸려 해도
    폴더를 계속 왔다갔다 해야 함

그래서 나온 결론이 이거다.

> “실제로 변경이 일어나는 단위 = 도메인이다.
>
> 사장님/기획자가 말하는 단위대로 코드를 잘라야,
>
> 변경 범위가 명확해진다.”

예를 들어,

- “유저 프로필에 팔로워 수 추가해 주세요”
  → **user 도메인**만 건드리면 끝.
- “장바구니에 할인 금액 보여 주세요”
  → **cart/payment 도메인**만 수정.

### 2-2. Redux Slice와 FSD Slice

글에서 말하는 “slice”는 두 가지에서 왔다.

### 1) Redux Toolkit의 slice

\`\`\`tsx
const userSlice = createSlice({
  name: "user",
  initialState: { ... },
  reducers: { ... },
});
\`\`\`

- \`userSlice\`, \`productSlice\`, \`cartSlice\`처럼
  **도메인별로 state + reducer가 뭉쳐 있는 단위**.
- 예전처럼 \`actions/\`, \`reducers/\`를 폴더로 찢어놓으면
  - 한 기능 수정할 때 여러 폴더를 왔다 갔다 해야 하는데
- slice로 묶으면
  - “유저 관련 건은 \`userSlice\`만 보면 된다” 수준이 된다.

### 2) FSD의 slice

전형적인 FSD 구조를 아주 간단히 적으면:

\`\`\`
src/
  entities/
    user/
      ui/
      model/
      api/
    product/
    cart/
\`\`\`

- \`entities/user/\` 자체가 **user 도메인 slice**
- 그 안에 UI, 상태, API까지 다 들어 있다.
  → 이게 바로 도메인 단위 수직 슬라이스.

### 2-3. Vertical Slice Architecture를 그림으로

전통적인 “수평 레이어 구조”는 대략 이런 느낌이다.

\`\`\`
src/
  components/   # UI
  hooks/        # 로직
  services/     # API
  utils/        # 유틸
\`\`\`

이 구조의 문제는:

- 기능 하나 수정하려면
  \`components\` → \`hooks\` → \`services\` → \`utils\`를 계속 왔다갔다 해야 한다.

반대로, 수직 슬라이스 구조는 이렇게 간다.

\`\`\`
src/
  user/
    components/
    hooks/
    api/
    utils/
  product/
  cart/
\`\`\`

- “유저 관련 수정”이면 \`user/\` 안만 보면 된다.

피자 비유를 빌리면,

- 수평으로 자르면: 도우/치즈/토핑을 레이어별로 따로 자른 느낌
- 수직으로 자르면: 한 조각에 도우+치즈+토핑이 모두 포함된 슬라이스

Redux slice와 FSD slice에 공통으로 흐르는 철학이 바로 이 “도메인 단위 vertical slice”다.

---

## 3. Velog 글에서 제안하는 “프론트엔드 도메인 아키텍처”

이제 본론.

Velog 글은 FSD를 참고해서 **조금 더 실전적으로 단순화한 구조**를 제안한다.

### 3-1. 전체 레이어 구조

글쓴이가 제안하는 기본 구조는 이렇다.

\`\`\`
src/
  pages/     # 라우트/페이지 단위 UI
  state/     # 도메인 상태 관리 (Redux slice, Zustand store 등)
  api/       # API 호출 + 프론트 도메인에 맞게 데이터 변환
  stories/   # Storybook
  test/      # 테스트
\`\`\`

포인트 몇 가지:

- FSD의 \`entities/\` + \`features/\`를 **\`state/\` 하나로 합침**
  → 둘을 애매하게 나누다가 오히려 도메인 경계가 흐려지는 걸 피하자.
- \`api/\`는 최상위 레벨에 두고, 그 안을 \`user.ts\`, \`post.ts\`처럼 **도메인별 파일로 나눈다.**

디렉토리 구조는 약간 수평처럼 보이지만,

**각 레이어 안에서는 도메인 기준으로 쪼개져 있는 형태**다.

### 3-2. Pages 레이어: 라우트/섹션 중심

- 페이지는 라우트 기준으로 폴더를 쪼갠다.

\`\`\`
pages/
  home/
    index.tsx
    hero-section.tsx
    feature-section.tsx
\`\`\`

- 컴포넌트 분리는 “재사용”보다는 **섹션 구획 나누기**에 초점을 둔다.
  (홈 상단, 피쳐 영역, 리스트 영역 등)
- 중요한 철학:

> “도메인 UI는 공통화하지 않는다.”

- 포스트 카드 vs 상품 카드
  → 겉보기엔 비슷해도 요구사항이 금방 갈라지므로,
  분기 지옥 만들지 말고 **도메인별/페이지별로 따로 구현**한다.
- 대신 슬로건은 이거다.

> “상태/로직은 재사용, UI는 반복.”

또 하나 포인트:

- Pages는 여러 도메인을 자유롭게 참조해도 된다.
  → 여기서 SRP를 강하게 주장하지 않는다.
  → 페이지는 “여러 도메인의 조합”이 들어오는 곳이기 때문.

### 3-3. State 레이어: 도메인 slice 한 방에

- \`state/user.ts\`, \`state/post.ts\`, \`state/cart.ts\`처럼
  **파일 하나 = 도메인 slice 하나**로 본다.
- Redux slice / Zustand store를 떠올리면 이해가 쉽다.

특히 강조하는 철학이 몇 가지 있다.

### 1) List + Detail을 한 store에서 같이 다룬다

\`\`\`tsx
// state/post.ts 예시 느낌
const usePost = create({
  state: {
    posts: [],
    currentPost: null,
  },
  actions: (state) => ({
    likePost: () => {
      // currentPost, posts 둘 다 갱신
    },
    addComment: (content) => {
      // postId를 인자로 안 받고, currentPost에서 읽어서 사용
    },
  }),
});
\`\`\`

- List와 Detail를 **한 store에서 같이 관리**한다.
- 좋아요/댓글 같은 액션 내부에서
  - 리스트와 디테일 상태를 같이 갱신해버린다.
- UI가 “좋아요 → 리스트 리로드 → 디테일 리로드” 같은 순서를 직접 호출하지 않도록.

### 2) Action은 “순수함수”보다 “상태 지향 함수”

- ❌ UI에서 \`currentPost.id\`를 꺼내 매번 인자로 넘기는 방식
- ✅ 액션 내부에서 \`state.currentPost\`에 바로 접근하는 방식

이렇게 하면:

- UI에서 호출하는 인터페이스는 단순해지고,
- 변경이 생겨도 **state 레이어 안에서만 로직 변경**하면 된다.

### 3) 상태 관리 라이브러리 추상화

- \`state/\` 안에서 Zustand/Redux를 직접 쓰기보다는
  \`createStore\` 같은 팩토리로 한 번 감싼다.
- 나중에 라이브러리를 바꾸더라도
  \`usePost()\` 같은 인터페이스는 유지되게.

→ DDD에서 말하는 “도메인과 인프라 분리”를

프론트 기준으로 가져온 느낌이다.

### 3-4. API 레이어: BFF 느낌으로 가공/병합

- API 레이어에서 **서버 응답을 프론트 도메인 모델로 가공/병합**한다.

예를 들어,

- \`1234567\` → \`1.2M\` (표시용 \`followerCountDisplay\`)
- \`2024-01-15\` → \`3일 전\` (표시용 \`createdAtDisplay\`)
- “내가 좋아요 누른 포스트인지 여부” → \`isLikedByMe\`

또한, 여러 백엔드 엔드포인트를 조합해야 하면

이 레이어에서 병합해서 반환한다.

거의 BFF(Backend For Frontend) 같은 역할.

UI/State에서는

> “이미 프론트 도메인에 맞게 가공된 객체”만 쓴다.

이 원칙을 강조한다.

### 3-5. UI 컴포넌트 규칙

UI 쪽에서 제안하는 규칙은 꽤 실용적이다.

1. **글로벌 도메인 상태는 props로 깊게 전달하지 말고, 훅에서 직접 읽기**

   \`\`\`tsx
   // ❌
   function PostDetail({ currentPost, posts }: Props) { ... }

   // ✅
   function PostDetail() {
     const { currentPost, posts } = usePost();
   }
   \`\`\`

2. **도메인 객체는 필드 단위로 쪼개지 말고 객체 통째로 넘기기**

   \`\`\`tsx
   // ❌
   <PostCard title={post.title} thumbnail={post.thumbnail} ... />

   // ✅
   <PostCard post={post} />
   \`\`\`

이유는 단순하다.

- 도메인 속성은 계속 늘어나고 바뀐다.
- props로 필드를 하나씩 넘기기 시작하면,
  - 새로운 필드가 추가될 때마다
  - 상위/하위 컴포넌트 모두 수정해야 하는 **전파 지옥**이 발생한다.

마지막으로, 의존성 흐름은 이렇게 단순하게 가져간다.

\`\`\`
pages → state → api
\`\`\`

---

## 4. “순정 FSD” vs 이 글의 “도메인 아키텍처”

이제 전형적인 FSD 구조와 비교해 보자.

### 4-1. 전형적인 FSD 구조

아주 간단하게 쓰면:

\`\`\`
src/
  app/
  pages/
  processes/
  features/
  entities/
  shared/
\`\`\`

- **entities**: 핵심 도메인 단위 (User, Product, Cart…)
- **features**: 유즈케이스 단위 (“로그인”, “검색”, “필터링” 등)
- 각 레이어 안에서도 다시 도메인 slice (\`entities/user\`, \`features/auth\` 등)로 나뉜다.

**장점**

- 도메인 + 유즈케이스를 구조적으로 잘 표현할 수 있다.
- 대규모 제품 기준 best practice가 많이 정리되어 있다.

**단점**

- \`entities\` / \`features\` / \`processes\` 경계가 실제 요구사항과 잘 안 맞기 시작하면,
  - **폴더만 많고 어디에 뭘 둬야 할지 애매해진다.**
- hooks/store/ui가 여기저기 흩어져 사용되면
  - “이 기능 수정하려면 어디를 건드려야 하지?”가 다시 혼란스러워진다.

### 4-2. Velog 글 구조 vs FSD

간단 비교표로 보면:

| 관점             | FSD 전형                                     | Velog “도메인 아키텍처”                        |
| ---------------- | -------------------------------------------- | ---------------------------------------------- |
| 최상위 레이어    | app/pages/processes/features/entities/shared | pages/state/api/stories/test                   |
| 도메인 분할 단위 | entities/, features/ 아래의 slice            | \`state/*.ts\`, \`api/*.ts\` 파일 단위             |
| 도메인 UI 위치   | entities/ui, features/ui 등                  | 대부분 pages 내부, 도메인 UI 공통화 거의 안 함 |
| 상태 관리 위치   | entities/model, features/model 등            | \`state/\`에서 전역 도메인 상태 관리             |
| API 위치         | shared/api, entities/api 등                  | 최상위 \`api/\`에서 도메인별 파일 분할           |
| 철학 키워드      | “도메인 + 유즈케이스 Layering”               | “도메인 vertical slice + 레이어 최소화”        |

본질은 둘 다 **도메인 중심**이지만,

- FSD는 **레이어 정의와 규칙이 많은 프레임워크 느낌**이고,
- Velog 글 구조는 **스타트업/실전용으로 최소한만 남긴 축약판**에 가깝다.

레이어가 많을수록 설계 자유도는 늘어나지만,

팀 합의/규칙 준수가 안 되면 오히려 혼란만 늘어날 수 있다.

실제 유지보수를 많이 해본 사람에게는

Velog 스타일의 “간결한 도메인 아키텍처”가 더 몸에 잘 맞을 수도 있다.

---

## 5. 레거시 유지보수 지옥과 DDD/FSD 관점

지금까지 얘기를 실제 상황에 대입해 보면:

- 처음에는 어느 정도 FSD-ish한 규칙으로 잘 설계된 서비스가 있을 수 있다.
- 이후에 다른 프로젝트에 투입되었는데,
  - 기존 서비스는 \`components/hooks/services/utils\` 같은 기술 중심 폴더 구조거나,
  - 또는 FSD 같긴 한데 \`entities/features\` 경계가 흐릿해진 상태일 수 있다.

이 때 유지보수에 들어가면 생기는 문제가 바로 이거다.

> “작은 요구사항 하나 고치려는데,
>
> 관련 코드가 **도메인 기준이 아니라 ‘기술 종류’ 기준으로 산개**되어 있어서
>
> 맥락 읽기가 너무 힘들다.”

DDD/FSD 관점에서 보면 딱 이 상태다.

> **변경이 일어나는 단위(도메인)**와
>
> **코드가 묶여 있는 단위(폴더/모듈)**가
>
> 완전히 어긋나 있는 상태.

이게 바로 “레거시 유지보수 지옥”을 만든다.

그래서 결국 자연스럽게:

- “도메인 기준으로 잘라야겠다”
- “Vertical Slice / 도메인 슬라이스 구조를 써야겠다”

라는 쪽으로 관심이 옮아간다.

---

## 6. 앞으로 설계할 때 쓸 수 있는 실전 가이드

마지막으로, 실제 프로젝트에서 써먹을 수 있는 가이드를 정리해보자.

### 6-1. 새 서비스 설계할 때

1. **최상위부터 도메인 단위로 생각하기**
   - 예: \`vehicle/\`, \`diagnostics/\`, \`campaign/\`, \`storage/\`, \`auth/\` …
   - 이걸 FSD-style로 가져갈지,
   - Velog-style로 \`state/*.ts\`, \`api/*.ts\`로 가져갈지 선택.
2. **레이어는 단순하게**

   복잡한 레이어가 팀에 잘 스며들 자신이 없으면,

   이렇게 단순한 구조가 오히려 좋다.

   \`\`\`
   pages/   # 라우트·섹션 중심 UI
   state/   # 도메인 상태 + 비즈니스 로직 (Zustand/Redux 추상화)
   api/     # 도메인 데이터 전처리, 병합
   shared/  # (있다면) 디자인 시스템/저수준 util 컴포넌트
   \`\`\`

3. **UI 공통화는 디자인 시스템 컴포넌트까지만**
   - 버튼, 인풋, 모달, 토글 같은 “순수 UI”만 재사용.
   - “캠페인 카드”, “테스트 세션 리스트”처럼 **도메인 UI는 비슷해 보여도 각각 구현**.
4. **도메인 훅 / 상태는 항상 도메인 이름으로**
   - \`useCampaign()\`, \`useVehicle()\`, \`useDiagSession()\`
   - 액션 이름도 도메인 언어 그대로:
     \`startReprogramming\`, \`injectCanMessage\`, \`validateCampaign\` …

### 6-2. 레거시/유지보수 프로젝트에서 DDD 도입하기

기존 서비스를 한 번에 갈아엎기보다는

**도메인 단위로 “섬”을 하나씩 만드는 전략**이 현실적이다.

1. 자주 건드리는 화면/기능 하나를 고른다.
   - 그 도메인에 대해
     - \`state/XXX.ts\` (혹은 \`entities/xxx/\`)로 **도메인 store**를 추출하고
     - \`api/xxx.ts\`로 API + 데이터 가공 로직을 옮긴다.
     - 페이지에서는 \`useXXX\` 훅만 쓰도록 점차 정리한다.
2. 이렇게 도메인 섬이 하나 생기면,
   - 그 도메인 관련 요구사항이 들어올 때마다
   - “아, 이건 \`XXX\` 슬라이스부터 보면 되겠다”라는 기준점이 생긴다.
3. 이런 섬들이 늘어나면서,
   - 자연스럽게 도메인 경계가 드러나고,
   - 새 기능은 처음부터 그 경계 안에서 설계하면 된다.

---

## 마무리

정리하면:

- **DDD**는 “코드를 비즈니스 도메인 기준으로 나누자”는 철학이고,
- **FSD**는 이걸 프론트 쪽에 맞게 체계화한 아키텍처 스타일,
- Velog에서 제안한 “프론트엔드 도메인 아키텍처”는
  - FSD를 참고하되
  - 레이어를 \`pages/state/api\` 정도로 단순화하고
  - 도메인 UI는 과감히 중복 허용하고
  - 상태/액션/API를 도메인 단위로 강하게 묶는 **실전형 축약 버전**이라고 볼 수 있다.

우리가 레거시 유지보수에서 느끼는 고통의 상당 부분은,

> **“도메인 기준 변화 vs 기술 기준 폴더 구조”**의 미스매치

에서 온다.

DDD/FSD/도메인 슬라이스 아키텍처는

결국 이 간극을 줄이기 위한 도구들이다.

앞으로 새로 짓는 서비스든, 레거시를 점진적으로 리팩터링하든,

“**도메인 기준으로 코드를 자르자**”는 이 관점 하나만 머릿속에 계속 붙잡고 가도

아키텍처는 훨씬 건강한 방향으로 흘러갈 거라고 믿는다.
`,Dv=Object.assign({"./mdDatas/AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여.md":vv,"./mdDatas/JS 기본 동작원리, “진짜 뼈대”만 잡아보기.md":Sv,"./mdDatas/JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편).md":kv,"./mdDatas/React × Zustand × Closure stale closure 방지 전략 기술.md":wv,"./mdDatas/React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기 (찐 삽질기).md":Cv,"./mdDatas/React 실시간 Trigger 처리 최적화 삽질기.md":Tv,"./mdDatas/브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편).md":Ev,"./mdDatas/웹(Web)이란 도대체 뭘까.md":Av,"./mdDatas/커링 컬링도 아니고 이게뭐누.md":jv,"./mdDatas/클로저란 당최 무엇인가.md":Mv,"./mdDatas/프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처.md":Nv}),et=t=>Dv[`./mdDatas/${t}.md`]||"";console.log(et("React 실시간 Trigger 처리 최적화 삽질기"));const nt=[{id:"react-zustand-closure",slug:"react-zustand-closure-stale-closure",title:"React × Zustand × Closure: stale closure 방지 전략 기술 정리",excerpt:"Zustand 쓰다가 '아니 왜 값이 안 바뀌지?' 하고 3시간 멍때린 적 있나요? 저도요. 결국 범인은 stale closure였습니다… 진짜 황당해서 정리해둔 글입니다. 나처럼 고통받지 말라고.",date:"2024년 12월 15일",tags:["React","Zustand","JavaScript","Closure","State Management"],cover:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:et("React × Zustand × Closure stale closure 방지 전략 기술")},{id:"js-basic",slug:"js-basic",title:'JS 기본 동작원리, "진짜 뼈대"만 잡아보기',excerpt:"비동기 개념을 계속 외우기만 했다면, 이번엔 뼈대부터 잡자. Heap/Call Stack이 무엇이고, JS가 왜 싱글 스레드인지, 비동기는 누가 처리하는지(Web APIs/Node APIs), 그리고 Task Queue vs Microtask Queue가 실행 순서를 어떻게 갈라놓는지. 딱 이 흐름만 머리에 넣으면 async/await도 결국 같은 얘기라는 걸 이해하게 된다.",date:"2025년 12월 5일",tags:["JavaScript","기초","동작원리"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:et("JS 기본 동작원리, “진짜 뼈대”만 잡아보기")},{id:"react-trigger-optimization",slug:"react-realtime-trigger-optimization",title:"React 실시간 Trigger 처리 최적화 삽질기",excerpt:"실시간 이벤트 들어올 때 UI가 뚝뚝 끊기길래, WebWorker부터 throttle까지 별짓 다 해봤습니다. 근데 결국… 가장 단순한 방법이 이겼습니다. 내 삽질의 역사 공유합니다.",date:"2024년 11월 28일",tags:["React","Performance","WebWorker","Optimization"],cover:"https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:et("React 실시간 Trigger 처리 최적화 삽질기")},{id:"web-fundamentals",slug:"what-is-web",title:"웹(Web)이란 도대체 뭘까?",excerpt:"HTML/CSS/JS는 아는데 ‘그래서 웹이 어떻게 화면이 되는 건데?’ 하고 멈춰본 적 있나요? 저도 그래서 한 번 아주 기초부터 갈아엎고 정리해봤습니다. 웹의 원리 이해하면 프론트가 더 잘 보임.",date:"2024년 10월 20일",tags:["Web","HTTP","Browser","Fundamentals"],cover:"https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:et("웹(Web)이란 도대체 뭘까")},{id:"closure-deep-dive",slug:"what-is-closure",title:"클로저란 당최 무엇인가",excerpt:"면접만 가면 꼭 나오는 게 클로저인데… 정작 설명하려면 머릿속이 하얘지는 그 개념. 그래서 빡쳐서(?) 제대로 다시 정리했습니다. 이 글 읽고 나면 최소한 면접에서 우는 일은 없습니다.",date:"2024년 09월 15일",tags:["JavaScript","Closure","Scope","Fundamentals"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:et("클로저란 당최 무엇인가")},{id:"currying",slug:"what-is-currying",title:"커링?? 컬링도 아니고 이게뭐누",excerpt:"커링 처음 보면 ‘이걸 왜 씀?’ 싶은데, 막상 알아두면 코드가 맘 편해지는 순간이 옵니다. 이 글은 커링을 드디어 사람 언어로 설명해본 글입니다. 예제 많음. 자존감 지킴.",date:"2024년 08월 25일",tags:["JavaScript","Functional Programming","Currying"],cover:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:et("커링 컬링도 아니고 이게뭐누")},{id:"react-library-ci-cd",slug:"react-library-test-ci-cd",title:'React 라이브러리 만들고 "테스트 + CI + 자동 배포" 붙이기 (찐 삽질기)',excerpt:"npm 배포 한 번 해보겠다고 시작했다가 GitHub Actions, semantic-release, 토큰 지옥까지 거쳐온 이야기. 진짜 별별 오류 다 봄. 그래도 자동 배포 되면 감동합니다. (눈물)",date:"2024년 07월 10일",tags:["React","Library","Testing","CI/CD","npm"],cover:"https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:et("React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기 (찐 삽질기)")},{id:"js-event-loop-part1",slug:"js-event-loop-understanding-part1",title:"JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)",excerpt:"비동기 헷갈리는 사람들 99%가 ‘레이어 구분’을 안 해서 그렇습니다. 엔진 / 런타임 / 브라우저 구분하면 진짜 다 이해됩니다. 나도 이거 알기 전엔 async/await이랑 싸움 중이었음.",date:"2024년 06월 18일",tags:["JavaScript","Event Loop","Asynchronous","Architecture"],cover:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:et("JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)")},{id:"browser-rendering-part2",slug:"browser-js-rendering-mechanism-part2",title:"브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)",excerpt:"브라우저는 생각보다 훨씬 복잡합니다. 렌더링 파이프라인 보면 ‘아 그래서 리렌더링이 느렸구나…’ 하고 현타 오는 그 글. 성능 최적화 힌트도 같이 담겨있음.",date:"2024년 06월 20일",tags:["Browser","Rendering","JavaScript","Performance"],cover:"https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:et("브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)")},{id:"frontend-ddd-fsd",slug:"frontend-ddd-fsd-domain-slice",title:"프론트엔드에서 DDD와 FSD, 그리고 '도메인 슬라이스' 아키텍처",excerpt:"프로젝트가 커질수록 파일이 정신없어지는 이유, 사실 구조 때문입니다. DDD/FSD를 프론트에 맞게 해석해서 ‘아 이래서 구조가 필요한 거구나’ 감이 오도록 써본 글.",date:"2024년 05월 15일",tags:["Architecture","DDD","FSD","Frontend","Design Pattern"],cover:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:et("프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처")},{id:"ai-era-maintenance",slug:"ai-era-code-maintenance",title:'AI 시대, "유지보수도 AI가 하면 되지 않나요?"라는 말에 대하여',excerpt:"‘AI가 코드도 짜주는데 유지보수도 하겠지?’라는 말을 들었는데… 현실은 전혀 다릅니다. AI가 잘하는 것과 진짜 사람이 해야 하는 일이 뭐가 다른지 정리한 글. 약간 분노도 섞여 있음.",date:"2024년 04월 22일",tags:["AI","Software Engineering","Maintenance","Opinion"],cover:"https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:et("AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여")}],_v="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5 w-full",Rv="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",Ov="text-[20px] font-semibold tracking-[0.02em]",zv="text-[13px] text-fg-muted leading-relaxed cursor-pointer",Lv=()=>[...nt].sort(()=>Math.random()-.5).slice(0,2),Uv=()=>{const t=Pa(),[a]=_.useState(Lv),i=s=>{t(`/blog/${s}`)},u=()=>{t("/blog")};return x.jsxs("section",{id:"experience",className:"mb-14",children:[x.jsx("div",{className:_v,children:x.jsxs("div",{className:"w-full",children:[x.jsx("p",{className:Rv,children:"Blog"}),x.jsxs("div",{className:"w-full flex justify-between",children:[x.jsx("h2",{className:Ov,children:"기술 블로그"}),x.jsx("p",{className:zv,onClick:u,children:"포스팅 전체 보기 →"})]})]})}),x.jsx("div",{className:"grid gap-6",children:a.map(s=>x.jsx("article",{onClick:()=>i(s.slug),role:"button",tabIndex:0,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&i(s.slug)},className:"group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle) cursor-pointer transition-colors hover:border-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent)/40",children:x.jsxs("div",{className:"grid md:grid-cols-[240px_1fr] md:h-[200px]",children:[s.cover&&x.jsxs("div",{className:"relative h-[180px] md:h-[200px] bg-(--bg-soft)",children:[x.jsx("img",{src:s.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),x.jsx("div",{className:"absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/55 via-black/15 to-transparent"})]}),x.jsxs("div",{className:"p-6 md:overflow-hidden",children:[x.jsx("h3",{className:"text-[20px] font-semibold leading-snug mb-2",children:s.title}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2",children:s.excerpt}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.tags.slice(0,8).map(c=>x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",children:c},c))}),x.jsx("div",{className:"flex items-center justify-between text-[12px] text-fg-muted",children:x.jsx("span",{children:s.date})})]})]})},s.id))})]})};function Bv(t){return new Worker("/portfolio/assets/fibWorker-cslZksJc.js",{name:t?.name})}const Hv="rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) p-5 shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-transform transition-shadow transition-colors duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.5)] hover:border-white/20 [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] [html[data-theme='light']_&]:hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]",qv="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-5",Vv="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",Iv="text-[20px] font-semibold tracking-[0.02em]",Fv="text-[13px] text-fg-muted leading-relaxed",Gv="text-[11px] px-2.5 py-1 rounded-full border border-(--border-subtle) text-fg-muted",Yv=()=>{const[t,a]=_.useState(null),[i,u]=_.useState(null),[s,c]=_.useState(!1),[f,m]=_.useState(0),p=_.useRef(null);_.useEffect(()=>{const b=new Bv;return p.current=b,b.onmessage=g=>{a(g.data.result),u(g.data.time),c(!1)},()=>{p.current?.terminate(),p.current=null}},[]),_.useEffect(()=>{let b;const g=()=>{m(S=>(S+2)%360),b=requestAnimationFrame(g)};return b=requestAnimationFrame(g),()=>cancelAnimationFrame(b)},[]);const h=()=>{p.current&&(c(!0),a(null),u(null),p.current.postMessage({type:"CALCULATE_FIBONACCI",number:45}))};return x.jsxs("section",{id:"lab",className:"mb-14",children:[x.jsxs("div",{className:qv,children:[x.jsxs("div",{children:[x.jsx("p",{className:Vv,children:"Web Worker Lab"}),x.jsx("h2",{className:Iv,children:"스레드 분리 실험"})]}),x.jsx("p",{className:Fv,children:"무거운 계산을 Worker로 분리하여 메인 스레드(UI)를 보호합니다."})]}),x.jsx("div",{className:Hv,children:x.jsxs("div",{className:"grid items-center gap-5 md:grid-cols-2",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-medium",children:"Fibonacci Calculator"}),x.jsx("span",{className:Gv,children:"Worker Thread"})]}),x.jsxs("p",{className:"text-[13px] text-fg-muted leading-[1.7] mb-5",children:["'계산 시작'을 누르면"," ",x.jsx("strong",{children:"DP가 아닌 피보나치 수열(45번째)"}),"을 계산합니다. 메인 스레드였다면 화면이 멈췄겠지만, Web Worker 덕분에 우측 애니메이션은 멈추지 않습니다."]}),x.jsx("button",{onClick:h,disabled:s,className:"w-full inline-flex items-center justify-center gap-2 text-[13px] px-4 py-2.5 rounded-full border border-(--border-subtle) bg-(--bg-elevated) text-fg enabled:hover:bg-(--bg-soft) enabled:hover:border-white/20 enabled:hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",children:s?x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"inline-flex h-4 w-4 items-center justify-center",children:x.jsx("span",{className:"h-3 w-3 rounded-full border border-current border-t-transparent animate-spin"})}),x.jsx("span",{children:"계산 중..."})]}):"▶ 무거운 계산 시작 (Fib 45)"})]}),x.jsxs("div",{className:"relative flex flex-col items-center justify-center min-h-[160px] h-full rounded-2xl border border-(--border-subtle) bg-(--bg) px-5 py-4 overflow-hidden",children:[x.jsx("div",{className:"absolute top-3 right-3 text-[10px] text-fg-muted",children:"Main Thread UI"}),x.jsx("div",{className:"w-6 h-6 rounded-md mb-3 bg-[linear-gradient(135deg,var(--fg),var(--fg-muted))]",style:{transform:`rotate(${f}deg)`}}),x.jsx("span",{className:"text-[11px] text-fg-muted",children:"▲ UI Frame (Always Running)"}),x.jsx("div",{className:"w-full h-px my-4 bg-(--border-subtle)"}),x.jsxs("div",{className:"text-center",children:[x.jsx("div",{className:"text-[11px] text-fg-muted",children:"Result (Fib 45)"}),x.jsx("div",{className:"text-[24px] font-semibold my-1",children:t!==null?t.toLocaleString():"-"}),x.jsx("div",{className:"text-[10px] text-fg-muted",children:i!==null?`Time: ${i.toFixed(1)}ms`:"-"})]})]})]})})]})},Pv={id:"gdsc-1st-team-lead-ai-project",title:"Google Developer Student Clubs (GDSC) 1기 팀장",subTitle:"AI 분리수거 리워드 앱 개발 (팀장)",period:["2022.09","2023.08"],mainContent:["GDSC 1기 멤버이자 팀장으로서 Flutter, TensorFlow, Firebase를 활용한 AI 분리수거 리워드 앱 개발 프로젝트 주도.","3개월 단기 프로젝트의 성공을 위해 기획 단계에서 기능 우선순위를 명확히 선정하고, 일정 및 리스크를 면밀히 관리.","TensorFlow 기반 이미지 분류 모델 학습을 수행하고 모바일 환경에 맞춰 최적화.","Firebase를 활용하여 실시간 데이터베이스 연동 및 리워드 시스템 백엔드 기능 구현.","프론트엔드부터 AI 모델 서빙까지 전체적인 엔드투엔드(End-to-End) 시스템을 설계하고 운영."],result:"국내 50개 팀 중 8위달성, 전사적 시스템의 전략적 설계 및 통합 운영 역량 강화.",tags:["GDSC","Team Lead","Project Manager","AI/ML","Flutter","TensorFlow","Firebase","Agile","Git"],type:"activity"},Jv=Object.freeze(Object.defineProperty({__proto__:null,gdscActivity:Pv},Symbol.toStringTag,{value:"Module"})),Xv={id:"ics-lab-research-tor-vpn",title:"ICS Lab 자기주도연구 (교내활동)",subTitle:"Tor와 VPN의 익명성 메커니즘 비교 및 다크웹 포렌식 기법 연구",period:["2024.03","2024.06"],mainContent:["Tor와 VPN의 암호화 프로토콜 및 익명성 메커니즘을 심층적으로 비교 분석.","다크웹 환경에서의 사용자 행위 추적 한계점을 파악하고 기술적 난제를 식별.","네트워크 트래픽, 메모리, 시스템 로그 분석을 통합한 실질적인 포렌식 기법 설계.","실제 환경과 유사한 시나리오를 구축하여 설계한 포렌식 기법의 유효성을 검증.","네트워크 보안 및 디지털 포렌식 분야에 기여하며 문제 해결 능력과 독립적인 연구 수행 역량을 향상."],result:"Tor와 VPN의 익명성 차이를 명확히 규명 및 다크웹 사용자 행위 추적을 위한 실질적 포렌식 기법 논문 작성.",tags:["Research","Security","Forensics","Darkweb","Network"],type:"activity"},Qv=Object.freeze(Object.defineProperty({__proto__:null,icsLabActivity:Xv},Symbol.toStringTag,{value:"Module"})),Zv={id:"samteo-night-school-vp",title:"봉사 중앙 동아리 샘터야학 (부회장)",subTitle:"야학 봉사 중앙 동아리 샘터야학 (부회장)",period:["2022.09","2024.08"],mainContent:["지역사회 어르신 대상 기초 국어, 수학, 영어 검정고시반 운영 및 수업 봉사 진행 (총 2년 활동).","2023년부터 부회장직을 수행하며 동아리 운영, 기획, 홍보 전반을 총괄.","체계적인 수업 커리큘럼을 구성하고 신규 봉사자 교육을 주도하여 수업 질 향상.","동아리원들의 협력을 유도하고 어르신 맞춤형 학습 지원을 통해 성공적인 운영 견인.","조직 관리 및 기획 경험을 통해 실질적인 리더십과 조직 운영 능력을 발전."],result:"교내 동아리 콘테스트 금상 수상, VMS 우수 지역사회 봉사단 선정(2023.06).",tags:["Volunteering","Education","Club","Leadership","Management"],type:"activity"},Kv=Object.freeze(Object.defineProperty({__proto__:null,samteoActivity:Zv},Symbol.toStringTag,{value:"Module"})),Wv={id:"whois-mentor-cl123",title:"Whois 정보보안 소학회 (멘토)",subTitle:"사이버보안학과 내 정보보안 소학회 (멘토)",period:["2019.03","2024.08"],mainContent:["1학년부터 Whois 정보보안 소학회 회원으로 활동하며 웹 프로그래밍, C 언어, 자료구조 스터디에 참여.","3학년부터는 '멘토'로 참여하여 후배 대상 보안 및 개발 관련 교육을 주도적으로 진행.","5년 6개월간 회원 → 멘토로 성장하며 보안 교육 주도","체계적인 커리큘럼 설계와 실습 중심 교육 방식을 도입하여 후배들의 이해도와 학습 효과를 크게 향상."],result:"기술적인 전문성 향상뿐만 아니라, 멘토로서의 리더십과 교육 능력 발전.",tags:["Security","Mentoring","Club","Education","Leadership"],type:"activity"},$v=Object.freeze(Object.defineProperty({__proto__:null,whoisMentorActivity:Wv},Symbol.toStringTag,{value:"Module"})),eS={id:"likelion-11th-scrum-master",title:"멋쟁이 사자처럼 11기 (스크럼 마스터)",subTitle:"React.js 및 Flutter WebView 활용 일정 관리 앱 개발 (스크럼 마스터)",period:["2023.03","2023.09"],mainContent:["멋쟁이 사자처럼 11기 멤버로 활동하며 React.js와 Flutter WebView를 활용한 일정 관리 애플리케이션 제작 프로젝트 참여.","프로젝트 개발 과정에 스크럼(Scrum) 애자일 방법론을 적극적으로 적용.","스크럼 마스터 역할을 맡아 전반적인 프로젝트 관리(일정, 이슈 조율)와 팀워크 강화를 주도.","멘토링을 통해 스크럼 마스터로서 효과적인 스프린트 계획 및 실행 방법에 대한 실무적 인사이트를 학습하고 적용."],result:"스크럼 마스터 경험을 통해 프로젝트 관리 능력 및 팀워크 역량 강화, 애자일 스크럼 프로세스에 대한 실무적 이해를 증진.",tags:["Like Lion","Club","Project Development","Scrum Master","Agile","React.js","Flutter","Teamwork"],type:"activity"},nS=Object.freeze(Object.defineProperty({__proto__:null,likelionActivity:eS},Symbol.toStringTag,{value:"Module"})),tS={id:"cyber-security-student-council-director",title:"사이버보안학과 학생회 (집행국장)",subTitle:"사이버보안학과 학생회",period:["2022.09","2023.12"],mainContent:["사이버보안학과 학생회 `Cloud`의 집행국장으로서 학과 내 주요 행사 및 학습 커뮤니티 운영을 기획하고 실행.","SW 교육과 IT 트렌드 공유를 위한 스터디 프로그램을 직접 기획 및 운영.","학우들의 요구사항을 면밀히 조사하여 다양한 학습 스타일과 참여 가능 시간을 고려한 커리큘럼 설계 및 조율을 주도.","단순 행사를 넘어 세미나 등 참여 중심의 운영과 피드백 기반의 개선 활동을 주기적으로 수행.","다른 학생회원들과의 협력 과정에서 의견 조율, 역할 분담, 갈등 완화 등 리더십을 발휘."],result:"후배와 학우들의 학습 성장을 이끌며 학생회 목표 설정 및 강점 활용 역할 배분으로 조직 주도, 프로젝트 기획 및 이해관계자간 조율 역량을 향상.",tags:["Student Council","Leadership","Planning","Communication","Management","Community"],type:"activity"},lS=Object.freeze(Object.defineProperty({__proto__:null,studentCouncilActivity:tS},Symbol.toStringTag,{value:"Module"})),iS="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",aS={"trouble-shooting":"text-red-400 border-red-400/30",learning:"text-blue-400 border-blue-400/30",achievement:"text-green-400 border-green-400/30","side-project":"text-purple-400 border-purple-400/30",activity:"text-yellow-400 border-yellow-400/30"},rS={"trouble-shooting":"Trouble Shooting",learning:"Learning",achievement:"Achievement","side-project":"Side Project",activity:"Activity"},Mp=({activity:t,isActive:a})=>x.jsx("article",{className:"w-full min-h-[320px] flex flex-col","aria-hidden":!a,children:x.jsxs("div",{className:"w-full flex-1 px-5 py-5 md:px-7 md:py-6 flex flex-col justify-between",children:[x.jsxs("div",{className:"flex w-full flex-col gap-3",children:[x.jsxs("div",{className:"flex w-full justify-between items-center gap-2",children:[x.jsx("span",{className:`inline-flex items-center text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${aS[t.type]}`,children:rS[t.type]}),x.jsx("span",{className:`hidden md:inline-block px-3 py-1 rounded-full\r
                         border border-(--border-subtle) bg-(--bg-soft)\r
                         text-[11px] text-fg-muted`,children:t.period.join(" ~ ")})]}),x.jsx("h3",{className:"text-[18px] md:text-[19px] font-semibold text-fg leading-snug",children:t.title}),x.jsx("p",{className:"text-[12px] md:text-[13px] text-fg-muted",children:t.subTitle}),x.jsx("div",{className:"text-[13px] text-fg-muted leading-[1.7]",children:x.jsx("ul",{className:"space-y-1.5",children:t.mainContent.map((i,u)=>x.jsxs("li",{className:"flex",children:[x.jsx("span",{className:"mt-[3px] mr-1 text-[10px]",children:"•"}),x.jsx("span",{children:i})]},u))})}),t.result&&x.jsx("p",{className:"text-[12px] md:text-[13px] text-green-400",children:t.result}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:t.tags.map(i=>x.jsx("span",{className:iS,children:i},i))})]}),t.link&&x.jsx("div",{className:"mt-3",children:x.jsxs("a",{href:t.link.href,target:"_blank",rel:"noreferrer",className:`inline-flex items-center gap-1 text-[12px] text-fg-muted\r
                         hover:text-fg transition-colors duration-200`,children:[x.jsx("span",{children:t.link.label}),x.jsx("span",{children:"↗"})]})})]})}),ju=({isActive:t,isPaused:a,duration:i,size:u=16,strokeWidth:s=2})=>{const c=(u-s)/2,f=2*Math.PI*c;return x.jsxs("div",{className:"relative flex items-center justify-center",style:{width:u,height:u},children:[x.jsx("svg",{className:"absolute",width:u,height:u,style:{transform:"rotate(-90deg)"},children:x.jsx("circle",{cx:u/2,cy:u/2,r:c,fill:"none",className:"stroke-(--border-subtle)",strokeWidth:s,opacity:.4})}),x.jsx("svg",{className:"absolute",width:u,height:u,style:{transform:"rotate(-90deg)"},children:x.jsx("circle",{cx:u/2,cy:u/2,r:c,fill:"none",className:"stroke-(--accent)",strokeWidth:s,strokeLinecap:"round",style:{strokeDasharray:f,strokeDashoffset:t?0:f,transition:t?`stroke-dashoffset ${i}ms linear`:"stroke-dashoffset 0ms",animationPlayState:a?"paused":"running"}})}),x.jsx("span",{className:["w-2 h-2 rounded-full","transition-all duration-200 ease-out",t?"bg-(--accent)":"bg-(--bg-elevated) border border-(--border-subtle)"].join(" ")})]})},fc=4e3,Np=500,uS=Object.assign({"./data/GDSC/index.ts":Jv,"./data/ICSLab/index.ts":Qv,"./data/Samtor/index.ts":Kv,"./data/Whois/index.ts":$v,"./data/lion/index.ts":nS,"./data/majorClub/index.ts":lS}),Na=Object.values(uS).map(t=>t.default??Object.values(t)[0]),sS="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-3",oS="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",cS="text-[20px] font-semibold tracking-[0.02em]",fS=()=>{const[t,a]=_.useState(0),[i,u]=_.useState(!0),[s,c]=_.useState(!1),[f,m]=_.useState(!1),p=_.useRef(null),h=_.useRef(null),b=_.useRef(0),g=_.useRef(0),S=Na.length;_.useEffect(()=>{const D=()=>{typeof window>"u"||m(window.innerWidth<1e3)};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const v=_.useCallback(()=>{a(D=>(D+1)%S)},[S]),C=_.useCallback(()=>{a(D=>(D-1+S)%S)},[S]),O=_.useCallback(D=>{a(D),u(!1),setTimeout(()=>u(!0),3e3)},[]);_.useEffect(()=>{if(!i||s){h.current&&(clearInterval(h.current),h.current=null);return}return h.current=setInterval(()=>{v()},fc),()=>{h.current&&clearInterval(h.current)}},[i,s,v]),_.useEffect(()=>{const D=K=>{K.key==="ArrowLeft"?C():K.key==="ArrowRight"&&v()};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[v,C]);const z=D=>{b.current=D.touches[0].clientX},j=D=>{g.current=D.touches[0].clientX},H=()=>{if(!b.current||!g.current)return;const D=b.current-g.current;Math.abs(D)>50&&(D>0?v():C()),b.current=0,g.current=0};return x.jsxs("section",{id:"activity",className:"mb-13",children:[x.jsx("div",{className:sS,children:x.jsxs("div",{children:[x.jsx("p",{className:oS,children:"Activity"}),x.jsx("h2",{className:cS,children:"대외 활동"})]})}),f?x.jsxs("div",{className:"flex flex-col gap-6",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[x.jsx("div",{ref:p,className:"w-full overflow-hidden",onTouchStart:z,onTouchMove:j,onTouchEnd:H,children:x.jsx("div",{className:`\r
                flex w-full\r
                transition-transform\r
                duration-700\r
                ease-[cubic-bezier(0.22,0.61,0.36,1)]\r
                will-change-transform\r
              `,style:{transform:`translate3d(-${t*100}%, 0, 0)`},children:Na.map((D,K)=>x.jsx("div",{className:"w-full shrink-0 flex justify-center px-3",children:x.jsx("div",{className:"w-full max-w-3xl rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) shadow-[0_14px_34px_rgba(0,0,0,0.32)] [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)]",children:x.jsx(Mp,{activity:D,isActive:K===t})})},D.id))})}),x.jsxs("div",{className:"relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]",children:[x.jsx("div",{className:"h-px w-full max-w-3xl bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6",children:Na.map((D,K)=>{const le=K===t;return x.jsxs("button",{type:"button",className:"relative flex flex-col items-center outline-none cursor-pointer shrink-0",onMouseEnter:()=>O(K),onClick:()=>O(K),"aria-label":`${D.title}로 이동`,children:[x.jsx("span",{className:["mb-1 h-[3px] w-5 sm:w-7 rounded-full","bg-(--border-subtle)",le?"animate-border-pulse":"opacity-40"].join(" ")}),x.jsx(ju,{isActive:le,isPaused:s||!i,duration:fc,size:16,strokeWidth:2}),x.jsx("span",{className:"mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-[80px] text-center line-clamp-2",children:D.subTitle})]},D.id)})})]})]}):x.jsxs("div",{className:"flex flex-col md:flex-row gap-8",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[x.jsx("div",{className:"w-64 shrink-0",children:x.jsxs("div",{className:"relative py-4",style:{height:Np},children:[x.jsx("div",{className:"absolute left-[19px] top-4 bottom-4 w-px bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"relative h-full flex flex-col justify-evenly",children:Na.map((D,K)=>{const le=K===t;return x.jsxs("button",{type:"button",className:"relative flex items-center gap-4 outline-none cursor-pointer group/point text-left pl-1",onMouseEnter:()=>O(K),onClick:()=>O(K),"aria-label":`${D.title}로 이동`,children:[x.jsxs("div",{className:"relative z-10 flex items-center justify-center w-8 h-8 shrink-0",children:[le&&x.jsx("div",{className:"absolute inset-0 bg-blue-500/10 rounded-full blur-sm"}),x.jsx(ju,{isActive:le,isPaused:s||!i,duration:fc,size:18,strokeWidth:2})]}),x.jsx("div",{className:"flex flex-col",children:x.jsx("span",{className:["text-[13px] font-medium transition-colors duration-200",le?"text-fg":"text-fg-muted group-hover/point:text-fg-subtle"].join(" "),children:D.subTitle})})]},D.id)})})]})}),x.jsx("div",{ref:p,className:"flex-1 w-full overflow-hidden",style:{height:Np},children:x.jsx("div",{className:`\r
                flex flex-col \r
                h-full w-full\r
                transition-transform \r
                duration-700 \r
                ease-[cubic-bezier(0.22,0.61,0.36,1)]\r
                will-change-transform\r
              `,style:{transform:`translate3d(0, -${t*100}%, 0)`},children:Na.map((D,K)=>x.jsx("div",{className:"h-full w-full shrink-0 flex items-center justify-center",children:x.jsx("div",{className:"w-full max-h-full overflow-y-auto rounded-3xl border border-(--border-subtle) bg-(--bg-elevated) shadow-[0_14px_34px_rgba(0,0,0,0.32)] [html[data-theme='light']_&]:shadow-[0_8px_20px_rgba(0,0,0,0.08)]",children:x.jsx(Mp,{activity:D,isActive:K===t})})},D.id))})})]})]})},dS="/portfolio/assets/banner-DP2kVVDA.png",hS={id:"llm-lstm-bert",banner:dS,title:"리뷰 왓수다 (감성 분석 & 평점 예측)",subTitle:"리뷰 왓수다",subtitle:"SNS/포털 영화 리뷰 감성 분석 및 평점 예측 AI 서비스",summary:"자연어 처리(NLP)와 딥러닝(LSTM/BERT)을 활용하여 텍스트 리뷰의 감성을 분석하고 평점을 예측하는 AI 모델을 개발했습니다. 정형화되지 않은 SNS 리뷰 데이터의 가치를 재발견했습니다.",tags:["Python","TensorFlow","KoNLPy","BERT","Selenium"],links:[{label:"Github",href:"#"},{label:"Demo",href:"#"}],period:"2022.09 – 2022.12",team:"AI Developer 2명, Data Analyst 1명",overview:"단순 별점만으로는 알 수 없는 구체적인 영화 평가를 분석하기 위해 시작된 프로젝트입니다. 네이버 영화 리뷰뿐만 아니라 유튜브, 인스타그램 등 평점 시스템이 없는 SNS의 텍스트 리뷰를 크롤링하여, LSTM과 BERT 모델을 통해 감성(긍정/부정)을 분류하고 예상 평점을 도출하는 시스템을 구축했습니다.",why:[{title:"Why NLP? (KoNLPy & Okt)",desc:"한글은 조사와 어미가 발달한 교착어이므로, 단순 띄어쓰기 기준 토큰화로는 의미 파악이 어렵습니다. 형태소 분석기(Okt)를 도입하여 불용어를 제거하고 실질 형태소만 추출함으로써 모델의 학습 효율을 극대화했습니다."},{title:"Why Hybrid Model? (LSTM & BERT)",desc:"순차적 데이터 처리에 강한 LSTM으로 가벼운 초기 모델을 구축하고, 문맥 양방향 이해도가 높은 BERT(KoBERT)를 도입하여 복잡한 구어체 리뷰의 감성 분류 정확도를 높이는 비교 연구를 수행했습니다."}],role:{percentage:"40% (Data Engineering & Model Training)",tasks:["데이터 파이프라인 구축: Selenium을 활용한 네이버 영화/SNS 리뷰 크롤링 및 CSV 데이터셋(200,000+) 구축","데이터 전처리(Preprocessing): 중복/결측치 제거, 정규 표현식을 이용한 특수문자 정제, KoNLPy 활용 형태소 분석 및 불용어 처리","LSTM 모델 설계 및 학습: Keras Tokenizer를 이용한 정수 인코딩, Padding 처리, 임베딩 레이어 및 LSTM 레이어 구성","성능 최적화: 리뷰 길이 분포 분석을 통한 최적 max_len 설정, 과적합(Overfitting) 방지를 위한 Dropout 및 Early Stopping 적용"]},troubleshooting:[{title:"데이터 불균형으로 인한 예측 편향(Bias) 문제 해결",problem:"초기 모델 학습 시, 긍정 리뷰(평점 8~10점)가 압도적으로 많아 모델이 무조건 '긍정'으로 예측하는 경향(Overfitting) 발생.",cause:"영화 리뷰 데이터 특성상 고평점 리뷰가 저평점보다 3배 이상 많은 'Class Imbalance' 상태였음.",solution:"Oversampling(SMOTE) 대신 데이터의 현실성을 유지하기 위해 Undersampling 기법을 적용하여 라벨별 비율을 1:1로 맞추고, 평점 구간을 1~10에서 1~5로 축소(Binning)하여 클래스 간 경계를 명확히 함.",learning:"모델의 아키텍처만큼이나 '데이터의 질과 분포'가 성능에 결정적인 영향을 미친다는 것을 체감함."},{title:"OOV(Out-Of-Vocabulary) 문제와 임베딩 품질 저하",problem:"신조어나 오타가 많은 SNS 리뷰 특성상, 학습된 단어 사전에 없는 단어(OOV)가 많아 모델의 정확도가 떨어짐.",cause:"기존 형태소 분석기 사전이 최신 인터넷 용어(예: '존잼', '노잼', '핵노잼')를 제대로 인식하지 못함.",solution:"Soynlp와 같은 비지도 학습 기반 토크나이저를 검토했으나, 데이터양의 한계로 사용자 지정 사전(User Dictionary)에 빈도수 높은 신조어를 수동으로 추가하여 형태소 분석기의 커버리지를 넓힘.",learning:"도메인 특화 데이터(SNS 리뷰)를 다룰 때는 범용 라이브러리에만 의존하지 않고, 데이터 특성에 맞는 전처리 커스터마이징이 필수적임을 배움."}],results:["LSTM 모델 정확도 85% 달성 (기존 베이스라인 대비 15% 향상)","평점 없는 SNS 텍스트 리뷰를 1~5점 척도로 정량화하는 모델 구축","비정형 데이터(댓글)의 시각화를 통해 영화 마케팅 인사이트 도출 가능성 확인"],images:[]},mS=Object.freeze(Object.defineProperty({__proto__:null,llmProject:hS},Symbol.toStringTag,{value:"Module"})),pS="/portfolio/assets/banner-CHMNdFhc.png",gS={id:"mogang",banner:pS,title:"모강(SW 강의용 다나와 서비스)",subTitle:"모강",subtitle:"SW 강의용 다나와 서비스 (강의 비교 플랫폼)",summary:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위해 1000+개의 강의 데이터를 수집·비교하는 플랫폼입니다. 2024학년도 후배들을 대상으로 배포하여 50+명의 긍정적인 반응을 얻었습니다.",tags:["Next.js","TypeScript","SSR","Styled-Components"],links:[{label:"Github",href:"#"}],period:"2023.9 ~ 2024.03",team:"Frontend 1명, Backend 1명, 기획 2명, Designer 1명",overview:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위한 'SW 강의용 다나와' 서비스입니다. 1000개 이상의 방대한 강의 데이터를 효율적으로 처리하고 비교하기 위해 Next.js(SSR)를 도입했습니다. 실제 교내 후배들을 대상으로 서비스를 제공하여 50명 이상의 유저로부터 긍정적인 피드백을 도출했습니다.",why:[{title:"Why Next.js? (SSR 도입)",desc:"1000개 이상의 강의 데이터를 처리하는 데 있어 클라이언트 사이드 렌더링(CSR)보다 서버 사이드 렌더링(SSR) 방식이 초기 로딩 속도와 검색 엔진 최적화(SEO) 측면에서 효율적이라 판단했습니다."},{title:"성장과 학습",desc:"CSR과 SSR의 차이를 이론을 넘어 직접 구현하며 비교해보고 싶었습니다. SSR이 모던 웹의 주요 렌더링 방식으로 떠오름에 따라, 기존 React 기반 지식과 비교하며 기술적 성장을 이루고자 했습니다."}],role:{percentage:"100% (Frontend Lead)",tasks:["Next.js 기반 SSR 아키텍처 설계: 초기 페이지 SSR 렌더링으로 SEO 및 LCP(Largest Contentful Paint) 최적화","SEO 및 성능 최적화: getServerSideProps, next/head 활용 메타 태그 동적 구성, Code Splitting(dynamic import) 및 next/image로 Lighthouse 90점+ 달성","추천 알고리즘 기반 렌더링: 유저 프로필/로그 기반 추천 리스트 UI 구현 및 Context API를 활용한 전역 상태 관리로 Props Drilling 해결","UI/UX 고도화: Atomic Design 패턴 일부 도입으로 컴포넌트 재사용성 강화, Skeleton UI 및 Framer-Motion 애니메이션 적용","반응형 웹 및 크로스 브라우징: Styled-Components 활용, viewport-units-buggyfill로 모바일(iOS/Android) 뷰포트 이슈 해결"]},troubleshooting:[{title:"무한 스크롤 중복 호출(Race Condition) 이슈 해결",problem:"스크롤이 하단에 도달할 때 데이터 로딩 중임에도 fetchNextPage()가 중복 호출되어, 불필요한 API 요청과 UI 중복 렌더링 발생. 특히 네트워크가 느리거나 Skeleton UI가 작을 때 심화됨.",cause:"react-infinite-scroll-component 라이브러리의 내부 스크롤 이벤트 감지 속도가 상태 업데이트(loading state)보다 빨라, 로딩 상태가 true로 변하기 전에 이벤트가 다시 트리거되는 Race Condition 발생.",solution:"1차로 isLoading 플래그를 도입해 중복 실행을 Guard Clause로 차단하고, 2차로 IntersectionObserver를 직접 구현하여 DOM 요소의 가시성(Visibility)을 정밀하게 감지하는 방식으로 제어권을 확보.",learning:"라이브러리에 의존하기보다 내부 동작 원리(DOM 감지 등)를 이해하는 것이 중요함을 깨달음. 비동기 상태 관리 시 Race Condition 위험을 인지하고 IntersectionObserver를 직접 다루며 제어 경험을 쌓음."}],results:["2023년 창업 동아리 캡스톤 디자인 평가 5위 (전체 25개 팀 중)","교내 소학회 내 소스코드 오픈 및 웹 개발 스터디 교재로 활용 (지식 공유)","실제 후배 50+명 대상 베타 테스트 진행 및 긍정적 반응 도출"],images:[]},xS=Object.freeze(Object.defineProperty({__proto__:null,mogangProject:gS},Symbol.toStringTag,{value:"Module"})),bS="/portfolio/assets/banner-DIUHLUxm.png",yS={id:"p2p-service",banner:bS,title:"Multi-Client FTP Server",subTitle:"P2P Service",subtitle:"리눅스 시스템 콜 기반의 동시성 파일 전송 서버",summary:"C언어와 리눅스 시스템 콜을 직접 활용하여 다중 접속을 지원하는 FTP 서버입니다. Fork 기반 멀티프로세싱과 파일 락(Flock)을 통해 데이터 무결성을 보장하는 동시성 제어를 구현했습니다.",tags:["C","Linux","Socket Programming","System Call","Multi-Processing"],links:[{label:"Github",href:"#"}],period:"2023.09 ~ 2023.12",team:"Individual (100%)",overview:"네트워크 프로그래밍의 핵심인 소켓(Socket)과 리눅스 시스템 콜(System Call)을 깊이 있게 이해하기 위해 시작된 프로젝트입니다. 단순 1:1 전송을 넘어, `fork()`를 활용해 여러 클라이언트가 동시에 접속하여 파일을 업로드/다운로드할 수 있는 환경을 구축했고, 이 과정에서 발생하는 경쟁 상태(Race Condition)를 제어하기 위한 동기화 메커니즘을 설계했습니다.",why:[{title:"Why Low-Level Implementation?",desc:"고수준 라이브러리 없이 `open`, `read`, `write`, `socket` 등 커널 수준의 시스템 콜을 직접 다루며 OS가 I/O와 네트워크를 처리하는 방식을 근본적으로 이해하고자 했습니다."},{title:"Why Multi-Processing?",desc:"단일 프로세스 모델의 한계를 극복하고, 다수의 클라이언트 요청을 병렬적으로 처리하기 위해 `fork()`를 통한 자식 프로세스 생성 방식을 채택하여 독립적인 세션을 보장했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처: TCP/IP 기반의 연결 지향형 통신 구현 (Bind, Listen, Accept, Connect)","동시성 처리 (Concurrency): `fork()` 시스템 콜을 활용한 다중 클라이언트 접속 처리 및 좀비 프로세스 방지(`waitpid`)","동기화 및 무결성: `flock`을 활용한 파일 잠금(Reader/Writer Lock) 메커니즘 구현으로 데이터 손상 방지","프로토콜 설계 및 기능 구현: 로그인 인증, 파일 리스트(ls), 업로드/다운로드, 삭제 등 커스텀 FTP 명령어 처리 로직 개발","예외 처리 및 시그널 핸들링: `SIGINT` 등 시그널 포착을 통한 안전한 서버/클라이언트 종료 처리"]},troubleshooting:[{title:"동시 파일 접근 시 데이터 무결성 훼손 (Race Condition)",problem:"여러 클라이언트가 동시에 같은 파일에 업로드하거나 삭제를 시도할 때, 파일 내용이 뒤섞이거나 손상되는 경쟁 상태가 발생함.",cause:"운영체제 레벨에서 파일 디스크립터에 대한 동시 접근 제어가 기본적으로 보장되지 않아, Critical Section에 대한 보호 장치가 부재했음.",solution:"`flock()` 시스템 콜을 도입하여 파일 접근 시 Advisory Lock을 걸도록 구현. 쓰기 작업 시에는 Exclusive Lock(배타적 잠금)을, 읽기 시에는 Shared Lock(공유 잠금)을 적용하여 동시성을 제어함.",learning:"멀티 프로세스 환경에서 공유 자원(파일) 관리의 중요성과 OS가 제공하는 동기화 도구(Lock)의 동작 원리를 체득함."},{title:"예기치 않은 연결 종료와 좀비 프로세스 이슈",problem:"클라이언트가 강제 종료(`Ctrl+C`)될 때 서버 측의 자식 프로세스가 제대로 회수되지 않고 좀비 프로세스로 남아 리소스를 점유하는 현상.",cause:"부모 프로세스가 자식 프로세스의 종료 상태를 수신(`wait`)하지 않아 프로세스 테이블에 엔트리가 남음.",solution:"`signal(SIGCHLD)` 핸들러를 등록하고, 핸들러 내부에서 `waitpid()`를 비봉쇄(WNOHANG) 모드로 호출하여 종료된 자식 프로세스를 즉시 회수하도록 로직 개선.",learning:"프로세스 생명주기 관리와 시그널(Signal) 처리를 통한 안정적인 데몬(Daemon) 서버 구조의 필요성을 배움."}],results:["다중 클라이언트 환경에서 안정적인 파일 업로드/다운로드/삭제 기능 구현 완료","Flock 적용 후 동시 접근 시 데이터 오염 0건 달성 (무결성 확보)","로그인 보안 및 접근 제어 로직을 통해 기본적인 보안 파일 서버 구축"],images:[]},vS=Object.freeze(Object.defineProperty({__proto__:null,p2pProject:yS},Symbol.toStringTag,{value:"Module"})),SS="/portfolio/assets/banner-h9P_7FQW.png",kS={id:"secure-chat",banner:SS,title:"Secure Chat (보안 채팅 프로그램)",subTitle:"Secure-Chat",subtitle:"Java Socket & RSA/AES 하이브리드 암호화 메신저",summary:"Java 소켓 프로그래밍으로 1:1 통신을 구현하고, RSA 비대칭키로 AES 대칭키를 안전하게 교환하여 도청이 불가능한 보안 채팅 시스템을 구축했습니다.",tags:["Java","Socket","RSA","AES-256","Multi-Thread"],links:[{label:"Github",href:"#"}],period:"2023.03 ~ 2023.06",team:"Individual (100%)",overview:"네트워크 통신의 기초인 소켓(Socket)을 활용해 1:1 채팅 프로그램을 구현하고, 그 위에 보안 계층을 입힌 프로젝트입니다. RSA 공개키 암호화 방식으로 대칭키(AES)를 안전하게 교환(Key Exchange)한 뒤, 실제 대화 내용은 AES-256으로 고속 암호화하여 전송하는 '하이브리드 암호화 시스템'을 직접 설계했습니다.",why:[{title:"Why Hybrid Encryption? (RSA + AES)",desc:"RSA는 보안성이 높지만 연산 속도가 느려 실시간 채팅에 부적합하고, AES는 빠르지만 키 배송(Key Distribution) 보안 문제가 있습니다. 이 둘을 결합해 '키 교환은 RSA, 메시지는 AES'로 처리하는 SSL/TLS의 기본 원리를 구현해보고자 했습니다."},{title:"Why Java Sockets?",desc:"고수준 라이브러리에 의존하지 않고, TCP 연결 수립(3-way handshake)부터 스트림(Stream) 데이터 처리, 스레드 관리까지 네트워크 통신의 로우 레벨 메커니즘을 깊이 있게 이해하기 위해 선택했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처 설계: Server/Client 구조 및 Multi-thread(SendThread, ReceiveThread)를 이용한 양방향 비동기 통신 구현","RSA 키 교환 프로토콜 구현: Server의 공개키(Public Key) 생성 및 배포, Client의 AES 키 암호화 전송 및 Server의 복호화 로직(Key Exchange) 개발","AES-256 메시지 암호화: 대칭키 기반의 실시간 메시지 암호화/복호화 모듈(encryptAES256/decryptAES256) 구현","보안 무결성 검증: 송수신 양측의 평문(Plaintext)과 암호문(Ciphertext) 로그 비교를 통한 기밀성 및 해킹 안전성 검증"]},troubleshooting:[{title:"Socket 입력 스트림의 블로킹(Blocking I/O) 문제 해결",problem:"메시지를 수신하는 동안(readUTF) 스레드가 입력 대기 상태에 빠져, 내가 메시지를 보내고 싶어도(writeUTF) 전송이 불가능해지는 '반이중(Half-duplex)' 현상 발생.",cause:"Java의 기본 InputStream은 블로킹 방식이므로, 단일 스레드에서 송수신을 순차적으로 처리하려다 데드락과 유사한 대기 상태가 됨.",solution:"송신(SendThread)과 수신(ReceiveThread)을 담당하는 스레드를 분리(Multi-threading)하여, 입출력 작업이 서로를 차단하지 않고 독립적으로 수행되도록 아키텍처를 재설계함.",learning:"네트워크 I/O 처리 시 스레드 분리의 필요성과 동시성(Concurrency) 제어의 중요성을 체감함."},{title:"RSA 암호화 데이터 크기 제한(BadPaddingException) 해결",problem:"RSA로 데이터를 암호화할 때 간헐적으로 `javax.crypto.BadPaddingException` 오류가 발생하며 암호화에 실패함.",cause:"RSA 알고리즘은 키 크기(예: 2048bit)에 따라 한 번에 암호화할 수 있는 평문의 길이가 제한됨. 긴 문자열을 RSA로 직접 처리하려다 허용 범위를 초과함.",solution:"RSA는 오직 짧은 데이터인 'AES 대칭키' 교환에만 사용하고, 실제 긴 채팅 메시지는 블록 암호화 방식인 AES로 처리하도록 역할 분담을 명확히 하여 해결.",learning:"비대칭키 암호화의 용도(키 교환/서명)와 대칭키 암호화의 용도(데이터 암호화)를 구분해야 하는 기술적 이유를 명확히 이해함."}],results:["RSA-2048 및 AES-256 기반의 안전한 1:1 채팅 통신 성공","Wireshark 패킷 캡처 시 평문이 노출되지 않음을 확인 (기밀성 확보)","Server/Client 간 키 교환 및 암호화 통신 시연 성공 (터미널 로그 검증)"],images:[]},wS=Object.freeze(Object.defineProperty({__proto__:null,secureChatProject:kS},Symbol.toStringTag,{value:"Module"})),CS="/portfolio/assets/banner-xAa91UBm.png",TS={id:"ssangsang",banner:CS,title:"쌍상 (봉사 매칭 서비스)",subTitle:"쌍상",subtitle:"자원봉사자-수요자 매칭 크로스 플랫폼 웹앱",summary:"100+명의 동아리 회원이 사용하는 봉사 매칭 서비스. React 웹앱으로 개발하여 접근성을 높이고, 애자일 프로세스로 운영 중입니다.",tags:["React.js","TypeScript","Progressive Web App","Axios","Agile-Scrum"],links:[{label:"Github",href:"https://github.com/your-repo"},{label:"Live",href:"https://your-service.com"}],period:"2023.01 ~ 현재 운영중",team:"Frontend 2명, Backend 1명",overview:"자원봉사자와 봉사를 받고 싶어하는 사람들을 매칭하기 위한 웹/앱 크로스 플랫폼 서비스입니다. 현재 100명 이상의 동아리 회원들이 실제 봉사 신청 및 관리에 사용하고 있습니다.",why:[{title:"Why React?",desc:"컴포넌트 기반 아키텍처와 선언형 UI를 통해 재사용성과 유지보수성을 확보했습니다. 방대한 커뮤니티와 라이브러리 생태계를 활용해 개발 생산성을 높였습니다."},{title:"Why WebApp?",desc:"하나의 코드로 웹과 모바일 환경(크로스 플랫폼)에 모두 대응하며, 스토어 심사 없이 빠른 배포와 수정이 가능하여 애자일한 운영에 적합하다고 판단했습니다."}],role:{percentage:"60%",tasks:["React-Router-Dom을 활용한 SPA 페이지 전환 및 유저 권한별 접근 제어 (Protected Route) 구현","사용자 경험(UX) 개선: Percentage Loading Indicator, 스크롤 기반 페이지네이션(Infinite Scroll), Skeleton UI 적용","반응형 디자인: viewport width 기준 rem/flex Layout으로 다양한 디바이스 대응","Axios Interceptor를 활용한 Access Token 자동 갱신 및 공통 에러 핸들링 로직 구현","GitHub/Jira/Notion 기반의 애자일 스프린트 운영 및 코드 리뷰 주도"]},troubleshooting:[{title:"React StrictMode와 useEffect 중복 실행 문제",problem:"초기 렌더링 시 useEffect 내 API 호출이 두 번 발생하여 불필요한 트래픽 유발.",cause:"React 18 StrictMode의 개발 환경 특성(마운트-언마운트-마운트)으로 인한 현상. Side-Effect 검증 과정임을 이해.",solution:"AbortController를 활용하여 언마운트 시 이전 요청을 취소(Clean-up)하도록 리팩토링하여 안전한 비동기 처리 구현.",learning:"StrictMode가 잠재적 버그를 찾아주는 도구임을 이해하고, 클린업 함수(Clean-up) 작성의 중요성을 체감."},{title:"비동기 State 업데이트 시점 차이로 인한 필터링 오류",problem:"API로 데이터를 받아온(setVolunteers) 직후 필터링을 수행했으나, 빈 배열이 반환되는 문제 발생.",cause:"setState는 비동기적으로 동작하므로, 상태 업데이트가 완료되기 전에 다음 코드가 실행되어 초기값(빈 배열)을 참조함.",solution:"필터링 로직을 별도의 useEffect로 분리하고, volunteers 상태를 의존성 배열(dependency array)에 추가하여 데이터 변경 시점에 필터링이 수행되도록 수정.",learning:"React의 상태 업데이트 사이클과 의존성 배열의 역할을 명확히 이해하게 됨."}],results:["2023 동아리 콘테스트 금상 수상 (교내 2위)","2023년 6월 우수지역사회봉사단 선정 (VMS 인증)","실사용자 100+명 확보 및 주 단위 기능 개선 사이클 정착"],images:[]},ES=Object.freeze(Object.defineProperty({__proto__:null,ssangsangProjects:TS},Symbol.toStringTag,{value:"Module"})),AS="/portfolio/assets/banner-xHcB6NbG.png",jS={id:"vary-recycle",banner:AS,title:"Vary Recycle (분리수거 리워드 서비스)",subTitle:"Vary Recycle",subtitle:"Google 기술 기반, 분리수거 인식 및 리워드 제공 환경 문제 해결 서비스",summary:"UN SDGs(지속 가능한 개발 목표) 중 환경 분야를 대상으로 한 분리수거 리워드 서비스입니다. 80% 정확도의 Computer Vision AI로 쓰레기 종류를 인식하고, 올바른 분리수거 가이드를 제공하여 사용자 행동 변화를 이끌었습니다.",tags:["Flutter","Firebase Realtime Database","Firebase Authentication","TensorFlow","Computer Vision","Google Solution Challenge"],links:[{label:"Github",href:"https://github.com/your-vary-recycle"},{label:"프로젝트 진행과정",href:"https://your-notion-or-blog.com/vary-recycle"},{label:"소개영상",href:"https://youtu.be/your-vary-recycle-demo"}],period:"2022.09 ~ 2023.08",team:"Frontend 2명, Backend 1명, AI 모델 2명, 데이터 생성 1명",overview:"Vary Recycle은 사용자가 쓰레기를 촬영하면, AI가 실시간으로 종류를 인식하고 맞는 분리수거 방법을 안내해주는 리워드형 서비스입니다. 촬영–인식–가이드–리워드까지 하나의 플로우로 연결하여, 게임처럼 재미있게 분리수거 습관을 만들도록 설계했습니다.",why:[{title:"Why Flutter?",desc:"iOS/Android를 동시에 대응해야 했기 때문에, 단일 코드베이스로 크로스 플랫폼 개발이 가능한 Flutter를 선택했습니다. 위젯 기반 UI와 Hot Reload를 활용해 짧은 기간 내에 여러 화면을 빠르게 설계·반복 개선할 수 있었습니다."},{title:"Why Computer Vision 기반 분리수거?",desc:"환경 문제 해결의 가장 큰 허들은 '귀찮음'과 '정보 부족'이라고 보았습니다. 사용자가 이름을 일일이 입력하는 대신, 카메라 한 번으로 유리병/캔/종이/PET를 자동 분류하고, 바로 분리수거 가이드를 보여줌으로써 진입장벽을 최소화했습니다."}],role:{percentage:"50%",tasks:["Flutter 기반 하이브리드 앱 프론트엔드 개발 50% 담당: 홈, 촬영 화면, 결과 출력, 로그인 등 주요 화면 직접 설계 및 구현","LayoutBuilder, MediaQuery, Flexible 등을 활용해 다양한 해상도·비율에서 깨지지 않는 반응형 UI 구성","AnimatedContainer를 이용해 분리수거 결과에 따라 카드 색상/크기/위치를 애니메이션으로 표현, 사용자 피드백 강화","Firebase Realtime Database 연동: 분리수거 결과 및 AI 학습 로그를 실시간 저장·조회하는 데이터 플로우 구현","Firebase Authentication 적용: 이메일 로그인, 인증 토큰 만료 처리, 세션 유지 로직 설계 및 예외 상황(토큰 만료, 네트워크 에러) 처리","Firebase Security Rules 작성으로 사용자별 데이터 접근 제어 및 읽기/쓰기 권한 분리","TensorFlow 기반 Computer Vision 모델과의 연동을 위해 HTTP 인터페이스(REST API) 설계 및 Flutter 클라이언트 구현","AI 인퍼런스 결과(예: 라벨, 신뢰도)에 따라 UI가 자동으로 상태를 전환하도록 상태 기반 화면 전환 로직 구현","유리병/캔/종이/PET 4종에 대해 약 7,500장의 학습용 이미지 촬영 및 정제, 조명·각도·배경을 달리하여 데이터 다양성 확보 및 오버피팅 방지"]},troubleshooting:[{title:"앱 재실행 시 로그인 상태인데도 로그인 화면으로 라우팅되는 문제",problem:"Firebase Authentication을 사용해 이메일 로그인 기능을 구현했는데, 최초 로그인 후에는 정상 동작하지만 앱을 완전히 종료 후 재실행하면 로그인되어 있음에도 로그인 페이지로 잘못 라우팅되는 문제가 발생.",cause:"앱 시작 직후 FirebaseAuth.instance.currentUser를 바로 조회하면, Firebase가 아직 내부적으로 인증 상태를 복구하기 전이라 null을 반환할 수 있음. 인증 상태 복구가 비동기적으로 동작함에도 이를 고려하지 않고 currentUser만으로 초기 라우팅을 결정한 것이 원인이었음.",solution:"FirebaseAuth.instance.authStateChanges() 스트림을 StreamBuilder로 구독하는 방식으로 초기 라우팅 구조를 전면 수정. 인증 상태 복구 중에는 SplashScreen을 보여주고, snapshot.hasData 여부에 따라 HomePage 또는 LoginPage로 분기하도록 설계하여 비동기 복구 구간을 안전하게 처리함.",learning:"Firebase Authentication의 인증 상태 복구는 비동기이며, ‘로그인 여부’뿐만 아니라 ‘복구가 끝났는지 여부’까지 UI 상태로 분리해야 한다는 것을 배웠음. 이를 계기로 Flutter 위젯 생명주기, 비동기 흐름 제어, 상태 기반 라우팅의 중요성을 몸으로 이해하게 되었고, 이후 다른 프로젝트에서도 모든 초기 라우팅을 스트림/상태 기반으로 설계하게 되는 계기가 되었음."}],results:["2022년 교내 동계 모각소 활동 ‘최우수상’ 수상 (31개 팀 중 1위)","Google Solution Challenge Winter Cup 국내 Top 8 (40+팀 중 8위)","환경·분리수거 문화를 주제로 한 실제 사용자 테스트에서 ‘분리수거 가이드가 직관적이고 재미있다’는 피드백 다수 확보"],images:[]},MS=Object.freeze(Object.defineProperty({__proto__:null,varyRecycleProjects:jS},Symbol.toStringTag,{value:"Module"})),NS=({project:t,isVisible:a,fromOffset:i,onClose:u})=>x.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity duration-200 "+(a?"opacity-100":"opacity-0 pointer-events-none"),children:[x.jsx("button",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:u,"aria-label":"Close project detail"}),x.jsx("div",{className:"relative z-50 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-[transform,opacity] duration-200 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-r-2xl [&::-webkit-scrollbar-track]:my-2 [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-(--bg-elevated) [&::-webkit-scrollbar-thumb:hover]:bg-gray-300",style:i?{transform:a?"translate3d(0,0,0) scale(1)":`translate3d(${i.x}px, ${i.y}px, 0) scale(0.9)`,transformOrigin:"center center"}:void 0,children:x.jsxs("div",{className:"p-6 md:p-8",children:[x.jsxs("div",{className:"flex justify-between items-start mb-6",children:[x.jsxs("div",{children:[x.jsx("h3",{className:"text-2xl font-bold mb-1",children:t.title}),t.subtitle&&x.jsx("p",{className:"text-sm text-fg-muted",children:t.subtitle})]}),x.jsx("button",{onClick:u,className:"p-2 rounded-full hover:bg-(--bg-soft) transition-colors",children:"✕"})]}),x.jsxs("div",{className:"flex flex-wrap gap-4 text-xs text-fg-muted mb-8 p-4 bg-(--bg-soft) rounded-xl",children:[t.period&&x.jsxs("div",{children:["📅 ",t.period]}),t.team&&x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"w-px h-3 bg-(--border-subtle) self-center"}),x.jsxs("div",{children:["👥 ",t.team]})]})]}),x.jsxs("div",{className:"space-y-10 text-sm leading-relaxed text-fg-muted",children:[x.jsxs("section",{children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"🔎 프로젝트 개요"}),x.jsx("p",{children:t.overview})]}),t.images&&t.images.length>0&&x.jsxs("section",{children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"📸 Screen & Architecture"}),x.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:t.images.map((s,c)=>x.jsxs("div",{className:"space-y-2",children:[x.jsx("div",{className:"rounded-lg overflow-hidden border border-(--border-subtle) bg-(--bg) aspect-video relative",children:x.jsx("img",{src:s.src,alt:s.caption,className:"object-cover w-full h-full"})}),s.caption&&x.jsx("p",{className:"text-xs text-center text-fg-muted",children:s.caption})]},c))})]}),t.why&&x.jsxs("section",{children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"💡 기술적 의사결정 (Why?)"}),x.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:t.why.map((s,c)=>x.jsxs("div",{className:"p-4 rounded-xl border border-(--border-subtle) bg-(--bg)",children:[x.jsx("div",{className:"font-medium text-fg mb-2",children:s.title}),x.jsx("p",{className:"text-xs",children:s.desc})]},c))})]}),t.role&&x.jsxs("section",{children:[x.jsxs("h4",{className:"text-fg font-semibold text-base mb-3",children:["👩🏻‍💻 수행 역할 ( 기여도 ",t.role.percentage," )"]}),x.jsx("ul",{className:"list-disc pl-5 space-y-2",children:t.role.tasks.map((s,c)=>x.jsx("li",{children:s},c))})]}),t.troubleshooting&&x.jsxs("section",{children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"🚨 트러블 슈팅"}),x.jsx("div",{className:"space-y-4",children:t.troubleshooting.map((s,c)=>x.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(255,100,100,0.05)] border border-[rgba(255,100,100,0.1)]",children:[x.jsx("div",{className:"font-semibold text-fg mb-2",children:s.title}),x.jsxs("div",{className:"grid gap-2 text-xs",children:[x.jsxs("div",{children:[x.jsx("span",{className:"font-medium text-(--fg)",children:"문제:"})," ",s.problem]}),x.jsxs("div",{children:[x.jsx("span",{className:"font-medium text-(--fg)",children:"원인:"})," ",s.cause]}),x.jsxs("div",{children:[x.jsx("span",{className:"font-medium text-(--fg)",children:"해결:"})," ",s.solution]}),x.jsxs("div",{children:[x.jsx("span",{className:"font-medium text-(--fg)",children:"배움:"})," ",s.learning]})]})]},c))})]}),t.results&&x.jsxs("section",{children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"✨ 성과"}),x.jsx("ul",{className:"space-y-2",children:t.results.map((s,c)=>x.jsxs("li",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-yellow-500",children:"🏆"}),x.jsx("span",{children:s})]},c))})]})]})]})})]}),dc=3e3,DS=Object.assign({"./data/LLM/LLM(LSTM-BERT).tsx":mS,"./data/Mogang/mogangData.tsx":xS,"./data/P2P/P2PService.tsx":vS,"./data/Secure-Chat/Secure-chat.tsx":wS,"./data/Ssang-sang/ssang-sangData.tsx":ES,"./data/Vary-Recycle/varyRecycle.tsx":MS}),$n=Object.values(DS).map(t=>t.default??Object.values(t)[0]),_S="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between mb-8",RS="text-[11px] uppercase tracking-[0.16em] text-fg-muted mb-3",OS="text-[20px] font-semibold tracking-[0.02em]",zS="text-[13px] text-fg-muted leading-relaxed",Dp="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",LS=()=>{const[t,a]=_.useState(0),[i,u]=_.useState(!1),[s,c]=_.useState(!1),[f,m]=_.useState(null),[p,h]=_.useState(!1),[b,g]=_.useState(null),S=Eu.useRef(0),v=Eu.useRef(0);_.useEffect(()=>{if(i||f)return;const A=setInterval(()=>{a(P=>(P+1)%$n.length)},dc);return()=>clearInterval(A)},[i,f]);const[C]=_.useState(()=>$n.map(()=>({jitterX:Math.random()*20-15,jitterY:Math.random()*30-15,baseRotate:Math.random()*16-10}))),[O,z]=_.useState(null);_.useEffect(()=>{if(typeof window>"u")return;const A=()=>{const P=window.innerWidth,Q=P<768;console.log("Projects resize:",{width:P,mobile:Q}),z(P),c(Q)};return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);const j=$n.find(A=>A.id===f)||null,H=(A,P)=>{const Q=P.getBoundingClientRect(),de=window.innerWidth,ae=window.innerHeight,ne=Q.left+Q.width/2,B=Q.top+Q.height/2,Z=de/2,re=ae/2,be=ne-Z,T=B-re;m(A),g({x:be,y:T}),requestAnimationFrame(()=>{h(!0)})},D=()=>{h(!1),setTimeout(()=>{m(null),g(null)},220)};_.useEffect(()=>{if(!j)return;const A=P=>{P.key==="Escape"&&D()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[j]),_.useEffect(()=>(j?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[j]);const le=(()=>{if(!O)return 140;const A=O/($n.length+1);return Math.min(180,Math.max(70,A*.8))})(),V=($n.length-1)/2,ee=A=>{S.current=A.touches[0].clientX},oe=A=>{v.current=A.touches[0].clientX},W=()=>{if(!S.current||!v.current)return;const A=S.current-v.current;Math.abs(A)>50&&(A>0?a(Q=>(Q+1)%$n.length):a(Q=>(Q-1+$n.length)%$n.length)),S.current=0,v.current=0};return x.jsxs(x.Fragment,{children:[x.jsxs("section",{id:"projects",className:"mb-16",children:[x.jsxs("div",{className:_S,children:[x.jsxs("div",{children:[x.jsx("p",{className:RS,children:"Projects"}),x.jsx("h2",{className:OS,children:"주요 프로젝트"})]}),x.jsx("p",{className:zS,children:"아래 포인트나 카드를 클릭하면 상세 모달을 볼 수 있습니다."})]}),s?x.jsxs("div",{className:"flex flex-col gap-6",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[x.jsx("div",{className:"w-full overflow-hidden",onTouchStart:ee,onTouchMove:oe,onTouchEnd:W,children:x.jsx("div",{className:"flex w-full transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform",style:{transform:`translate3d(-${t*100}%, 0, 0)`},children:$n.map(A=>x.jsx("div",{className:"w-full shrink-0 flex justify-center px-3",children:x.jsxs("article",{"data-project-id":A.id,className:"w-full max-w-3xl min-h-[320px] flex flex-col rounded-2xl bg-(--bg-elevated) shadow-[0_16px_36px_rgba(0,0,0,0.55)] [html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.12)] border border-(--border-subtle) cursor-pointer overflow-hidden",onClick:P=>H(A.id,P.currentTarget),children:[A.banner&&x.jsxs("div",{className:"relative w-full h-32 shrink-0 overflow-hidden",children:[x.jsx("img",{src:A.banner,alt:"",className:"w-full h-full object-cover grayscale-[30%]"}),x.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[color:rgba(0,0,0,0.6)] to-transparent"})]}),x.jsxs("div",{className:"relative flex flex-col flex-1 justify-between z-10 p-4 text-[13px] text-fg-muted leading-[1.6]",children:[x.jsxs("div",{children:[x.jsx("h3",{className:"mb-1.5 text-fg text-[15px] font-semibold tracking-[0.02em]",children:A.title}),x.jsx("p",{className:"text-[12px] mb-2.5 line-clamp-2 text-fg opacity-100",children:A.summary}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:A.tags.slice(0,6).map(P=>x.jsx("span",{className:Dp,children:P},P))})]}),x.jsx("div",{className:"flex gap-3 text-[11px]  mt-3",children:A.links.map(P=>x.jsxs("a",{href:P.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-fg-muted hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out",onClick:Q=>Q.stopPropagation(),children:[x.jsx("span",{children:P.label}),x.jsx("span",{children:"↗"})]},P.label))})]})]})},A.id))})}),x.jsxs("div",{className:"relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]",children:[x.jsx("div",{className:"h-px w-full max-w-3xl bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6",children:$n.map((A,P)=>{const Q=P===t;return x.jsxs("button",{type:"button",className:"relative flex flex-col items-center outline-none cursor-pointer shrink-0",onMouseEnter:()=>a(P),onClick:()=>a(P),"aria-label":`${A.title}로 이동`,children:[x.jsx("span",{className:["mb-1 h-[3px] w-5 sm:w-7 rounded-full","bg-(--border-subtle)",Q?"animate-border-pulse":"opacity-40"].join(" ")}),x.jsx(ju,{isActive:Q,isPaused:i,duration:dc,size:16,strokeWidth:2}),x.jsx("span",{className:"mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-[80px] text-center line-clamp-2",children:A.subTitle})]},A.id)})})]})]}):x.jsxs("div",{className:"relative flex flex-col items-center",children:[x.jsx("div",{className:"relative w-full max-w-5xl h-[260px] flex items-center justify-center mb-10 overflow-visible",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:$n.map((A,P)=>{const Q=C[P],de=P===t,ne=(P-V)*le+Q.jitterX,B=Q.jitterY,Z=Math.round(ne),re=Math.round(B+(de?-10:6)),be=de?`translateX(${Z}px) translateY(${re}px) scale(1.05)`:`translateX(${Z}px) translateY(${re}px) rotate(${Q.baseRotate}deg) scale(0.96)`,T=de?999:100+P,M=de?1:.8,G=de?"none":"blur(0.8px)";return x.jsxs("article",{"data-project-id":A.id,className:["group absolute w-full","max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]","rounded-2xl bg-(--bg-elevated)","shadow-[0_16px_36px_rgba(0,0,0,0.55)]","[html[data-theme='light']_&]:shadow-[0_10px_24px_rgba(0,0,0,0.12)]","border border-(--border-subtle)","cursor-pointer overflow-hidden","transition-all duration-250 ease-out",de?["ring-2 ring-(--accent)","ring-offset-2","ring-offset-[color:var(--bg-soft)]"].join(" "):"ring-0"].join(" "),style:{zIndex:T,transform:be,opacity:M,filter:G},onClick:w=>H(A.id,w.currentTarget),onMouseEnter:()=>a(P),onFocus:()=>a(P),tabIndex:0,onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),H(A.id,w.currentTarget))},role:"button",children:[A.banner&&x.jsxs("div",{className:["absolute inset-0 z-0 pointer-events-none","transition-all duration-200",de?"opacity-20":"opacity-40"].join(" "),children:[x.jsx("img",{src:A.banner,alt:"",className:"w-full h-full object-cover grayscale-[30%]"}),x.jsx("div",{className:["absolute inset-0 bg-gradient-to-t to-transparent transition-colors duration-200",de?"from-[color:rgba(0,0,0,0.6)] [html[data-theme='light']_&]:from-[color:rgba(0,0,0,0.52)]":"from-[color:rgba(0,0,0,0.35)] [html[data-theme='light']_&]:from-[color:rgba(0,0,0,0.3)]"].join(" ")})]}),x.jsxs("div",{className:"relative z-10 p-4 text-[13px] text-fg-muted leading-[1.6]",children:[x.jsx("h3",{className:["mb-1.5","text-fg","transition-all duration-200",de?"text-[15px] font-semibold tracking-[0.02em]":"text-[14px] font-medium tracking-[0.01em]"].join(" "),children:A.title}),x.jsx("p",{className:["transition-all duration-200","text-[12px] mb-2.5 line-clamp-2",de?"text-fg opacity-100":"text-fg-muted opacity-80"].join(" "),children:A.summary}),x.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2.5",children:A.tags.slice(0,6).map(w=>x.jsx("span",{className:Dp,children:w},w))}),x.jsx("div",{className:"flex gap-3 text-[11px] mt-1",children:A.links.map(w=>x.jsxs("a",{href:w.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-fg-muted hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out",onClick:ie=>ie.stopPropagation(),children:[x.jsx("span",{children:w.label}),x.jsx("span",{children:"↗"})]},w.label))})]})]},A.id)})}),x.jsxs("div",{className:"relative w-full max-w-3xl",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[x.jsx("div",{className:"h-px w-full bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between",children:$n.map((A,P)=>{const Q=P===t,de=()=>{a(P);const ae=document.querySelector(`[data-project-id="${A.id}"]`);ae&&H(A.id,ae)};return x.jsxs("button",{type:"button",className:"relative flex flex-col cursor-pointer items-center outline-none",onMouseEnter:()=>a(P),onFocus:()=>a(P),onClick:de,onKeyDown:ae=>{(ae.key==="Enter"||ae.key===" ")&&(ae.preventDefault(),de())},children:[x.jsx("span",{className:["mb-1 h-[3px] w-7 rounded-full","bg-(--border-subtle)",Q?"animate-border-pulse":"opacity-40"].join(" ")}),x.jsx(ju,{isActive:Q,isPaused:i,duration:dc,size:16,strokeWidth:2}),x.jsx("span",{className:"mt-1 text-[10px] text-fg-muted max-w-[80px] text-center line-clamp-2",children:A.subTitle})]},A.id)})})]})]})]}),j&&x.jsx(NS,{project:j,isVisible:p,fromOffset:b,onClose:D})]})},US=()=>{const t=_.useCallback(a=>{const i=document.getElementById(a);if(i){const f=i.getBoundingClientRect().top+window.pageYOffset-64-20;window.scrollTo({top:f,behavior:"smooth"})}},[]);return x.jsxs("main",{className:"max-w-[1040px] mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16 text-sm text-fg",children:[x.jsx(Q1,{onScrollTo:t}),x.jsx(nv,{}),x.jsx(yv,{}),x.jsx(fS,{}),x.jsx(LS,{}),x.jsx(Yv,{}),x.jsx(Uv,{})]})},BS=4200,_p=260;function Da(...t){return t.filter(Boolean).join(" ")}const HS=()=>{const t=Pa();_.useEffect(()=>{window.scrollTo(0,0)},[]);const a=_.useMemo(()=>{const W=new Map;for(const A of nt)for(const P of A.tags)W.set(P,(W.get(P)??0)+1);return Array.from(W.entries()).sort((A,P)=>P[1]-A[1]).slice(0,12)},[]),[i,u]=_.useState("ALL"),s=_.useMemo(()=>nt.slice(0,Math.min(3,nt.length)),[]),[c,f]=_.useState(0),[m,p]=_.useState(!1);_.useEffect(()=>{if(s.length<=1)return;const W=()=>{p(!0),window.setTimeout(()=>{f(P=>(P+1)%s.length),window.setTimeout(()=>p(!1),20)},_p)},A=window.setInterval(W,BS);return()=>window.clearInterval(A)},[s.length]);const h=s[c],b=_.useMemo(()=>i==="ALL"?nt:nt.filter(W=>W.tags.includes(i)),[i]),g=_.useMemo(()=>b,[b]),S=10,[v,C]=_.useState(S),[O,z]=_.useState(!1),[j,H]=_.useState(!1),D=_.useMemo(()=>g.slice(0,v),[g,v]),K=v<g.length,le=W=>{W!==i&&(H(!0),setTimeout(()=>{u(W),C(S),z(!1),setTimeout(()=>H(!1),20)},200))},V=_.useCallback(async()=>{!K||O||(z(!0),await new Promise(W=>setTimeout(W,450)),C(W=>Math.min(W+S,g.length)),z(!1))},[K,O,g.length]),ee=_.useRef(null);_.useEffect(()=>{const W=ee.current;if(!W)return;const A=new IntersectionObserver(P=>{P[0]?.isIntersecting&&V()},{root:null,rootMargin:"800px 0px",threshold:0});return A.observe(W),()=>A.disconnect()},[V]);const oe=W=>{t(`/blog/${W.slug}`)};return x.jsx("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base)",children:x.jsxs("div",{className:"max-w-[1040px] mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16",children:[x.jsx("div",{className:"flex items-end justify-between gap-4 mb-6",children:x.jsxs("div",{children:[x.jsx("h1",{className:"text-[32px] font-bold tracking-[-0.02em]",children:"Posting"}),x.jsx("p",{className:"text-[13px] text-fg-muted mt-2",children:"Front-End를 공부하며 배운 알뜰신잡"})]})}),h&&x.jsx("section",{className:"mb-10",children:x.jsx("article",{role:"button",tabIndex:0,onClick:()=>oe(h),onKeyDown:W=>{(W.key==="Enter"||W.key===" ")&&oe(h)},className:Da("group relative overflow-hidden rounded-3xl border bg-(--bg-elevated) border-(--border-subtle)","cursor-pointer transition-colors hover:border-(--accent)","focus:outline-none focus:ring-2 focus:ring-(--accent)/40",m?"opacity-0":"opacity-100","transition-opacity"),style:{transitionDuration:`${_p}ms`},children:x.jsxs("div",{className:"grid md:grid-cols-[320px_1fr]",children:[x.jsxs("div",{className:"relative h-[250px] md:h-[250px] bg-(--bg-soft)",children:[h.cover?x.jsxs(x.Fragment,{children:[x.jsx("img",{src:h.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),x.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"})]}):x.jsx("div",{className:"absolute inset-0 bg-(--bg-soft)"}),x.jsx("div",{className:"absolute left-5 top-5",children:x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-black/45 border border-white/10 text-white/90",children:"Today's"})})]}),x.jsxs("div",{className:"p-5 h-full flex flex-col justify-between",children:[x.jsx("h2",{className:"text-[22px] md:text-[24px] font-bold leading-snug tracking-[-0.02em] mb-3",children:h.title}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-5 line-clamp-3",children:h.excerpt}),x.jsxs("div",{className:"flex flex-col text-[12px] text-fg-muted w-full",children:[x.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:h.tags.slice(0,6).map(W=>x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",children:W},W))}),x.jsx("span",{children:h.date})]})]})]})})}),x.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[x.jsxs("button",{type:"button",onClick:()=>le("ALL"),className:Da("text-[12px] px-3 py-1.5 rounded-full border transition-colors",i==="ALL"?"bg-(--bg-elevated) border-(--accent) text-(--fg-base)":"bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"),children:["전체보기 (",nt.length,")"]}),a.map(([W,A])=>x.jsxs("button",{type:"button",onClick:()=>le(W),className:Da("text-[12px] px-3 py-1.5 rounded-full border transition-colors",i===W?"bg-(--bg-elevated) border-(--accent) text-(--fg-base)":"bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"),children:[W," (",A,")"]},W))]}),x.jsxs("section",{className:Da("grid gap-6 transition-opacity duration-200",j?"opacity-0":"opacity-100"),children:[D.map(W=>x.jsx("article",{onClick:()=>oe(W),role:"button",tabIndex:0,onKeyDown:A=>{(A.key==="Enter"||A.key===" ")&&oe(W)},className:Da("group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle)","cursor-pointer transition-colors hover:border-(--accent)","focus:outline-none focus:ring-2 focus:ring-(--accent)/40"),children:x.jsxs("div",{className:"grid md:grid-cols-[240px_1fr] md:h-[200px]",children:[W.cover&&x.jsxs("div",{className:"relative h-[180px] md:h-[200px] bg-(--bg-soft)",children:[x.jsx("img",{src:W.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),x.jsx("div",{className:"absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/55 via-black/15 to-transparent"})]}),x.jsxs("div",{className:"p-6 md:overflow-hidden",children:[x.jsx("h3",{className:"text-[20px] font-semibold leading-snug mb-2",children:W.title}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2",children:W.excerpt}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:W.tags.slice(0,8).map(A=>x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",children:A},A))}),x.jsx("div",{className:"flex items-center justify-between text-[12px] text-fg-muted",children:x.jsx("span",{children:W.date})})]})]})},W.id)),x.jsx("div",{ref:ee,className:"h-10"}),O&&x.jsx("div",{className:"py-6 text-center text-[13px] text-fg-muted",children:"불러오는 중..."}),!K&&x.jsx("div",{className:"py-10 text-center text-[13px] text-fg-muted",children:"더 이상 글이 없습니다."})]})]})})};function qS(t,a){const i={};return(t[t.length-1]===""?[...t,""]:t).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const VS=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,IS=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,FS={};function Rp(t,a){return(FS.jsx?IS:VS).test(t)}const GS=/[ \t\n\f\r]/g;function YS(t){return typeof t=="object"?t.type==="text"?Op(t.value):!1:Op(t)}function Op(t){return t.replace(GS,"")===""}class Xa{constructor(a,i,u){this.normal=i,this.property=a,u&&(this.space=u)}}Xa.prototype.normal={};Xa.prototype.property={};Xa.prototype.space=void 0;function Ig(t,a){const i={},u={};for(const s of t)Object.assign(i,s.property),Object.assign(u,s.normal);return new Xa(i,u,a)}function _c(t){return t.toLowerCase()}class Dn{constructor(a,i){this.attribute=i,this.property=a}}Dn.prototype.attribute="";Dn.prototype.booleanish=!1;Dn.prototype.boolean=!1;Dn.prototype.commaOrSpaceSeparated=!1;Dn.prototype.commaSeparated=!1;Dn.prototype.defined=!1;Dn.prototype.mustUseProperty=!1;Dn.prototype.number=!1;Dn.prototype.overloadedBoolean=!1;Dn.prototype.property="";Dn.prototype.spaceSeparated=!1;Dn.prototype.space=void 0;let PS=0;const Se=Ll(),an=Ll(),Rc=Ll(),$=Ll(),Ge=Ll(),ji=Ll(),qn=Ll();function Ll(){return 2**++PS}const Oc=Object.freeze(Object.defineProperty({__proto__:null,boolean:Se,booleanish:an,commaOrSpaceSeparated:qn,commaSeparated:ji,number:$,overloadedBoolean:Rc,spaceSeparated:Ge},Symbol.toStringTag,{value:"Module"})),hc=Object.keys(Oc);class Zc extends Dn{constructor(a,i,u,s){let c=-1;if(super(a,i),zp(this,"space",s),typeof u=="number")for(;++c<hc.length;){const f=hc[c];zp(this,hc[c],(u&Oc[f])===Oc[f])}}}Zc.prototype.defined=!0;function zp(t,a,i){i&&(t[a]=i)}function _i(t){const a={},i={};for(const[u,s]of Object.entries(t.properties)){const c=new Zc(u,t.transform(t.attributes||{},u),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(u)&&(c.mustUseProperty=!0),a[u]=c,i[_c(u)]=u,i[_c(c.attribute)]=u}return new Xa(a,i,t.space)}const Fg=_i({properties:{ariaActiveDescendant:null,ariaAtomic:an,ariaAutoComplete:null,ariaBusy:an,ariaChecked:an,ariaColCount:$,ariaColIndex:$,ariaColSpan:$,ariaControls:Ge,ariaCurrent:null,ariaDescribedBy:Ge,ariaDetails:null,ariaDisabled:an,ariaDropEffect:Ge,ariaErrorMessage:null,ariaExpanded:an,ariaFlowTo:Ge,ariaGrabbed:an,ariaHasPopup:null,ariaHidden:an,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ge,ariaLevel:$,ariaLive:null,ariaModal:an,ariaMultiLine:an,ariaMultiSelectable:an,ariaOrientation:null,ariaOwns:Ge,ariaPlaceholder:null,ariaPosInSet:$,ariaPressed:an,ariaReadOnly:an,ariaRelevant:null,ariaRequired:an,ariaRoleDescription:Ge,ariaRowCount:$,ariaRowIndex:$,ariaRowSpan:$,ariaSelected:an,ariaSetSize:$,ariaSort:null,ariaValueMax:$,ariaValueMin:$,ariaValueNow:$,ariaValueText:null,role:null},transform(t,a){return a==="role"?a:"aria-"+a.slice(4).toLowerCase()}});function Gg(t,a){return a in t?t[a]:a}function Yg(t,a){return Gg(t,a.toLowerCase())}const JS=_i({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ji,acceptCharset:Ge,accessKey:Ge,action:null,allow:null,allowFullScreen:Se,allowPaymentRequest:Se,allowUserMedia:Se,alt:null,as:null,async:Se,autoCapitalize:null,autoComplete:Ge,autoFocus:Se,autoPlay:Se,blocking:Ge,capture:null,charSet:null,checked:Se,cite:null,className:Ge,cols:$,colSpan:null,content:null,contentEditable:an,controls:Se,controlsList:Ge,coords:$|ji,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Se,defer:Se,dir:null,dirName:null,disabled:Se,download:Rc,draggable:an,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Se,formTarget:null,headers:Ge,height:$,hidden:Rc,high:$,href:null,hrefLang:null,htmlFor:Ge,httpEquiv:Ge,id:null,imageSizes:null,imageSrcSet:null,inert:Se,inputMode:null,integrity:null,is:null,isMap:Se,itemId:null,itemProp:Ge,itemRef:Ge,itemScope:Se,itemType:Ge,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Se,low:$,manifest:null,max:null,maxLength:$,media:null,method:null,min:null,minLength:$,multiple:Se,muted:Se,name:null,nonce:null,noModule:Se,noValidate:Se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Se,optimum:$,pattern:null,ping:Ge,placeholder:null,playsInline:Se,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Se,referrerPolicy:null,rel:Ge,required:Se,reversed:Se,rows:$,rowSpan:$,sandbox:Ge,scope:null,scoped:Se,seamless:Se,selected:Se,shadowRootClonable:Se,shadowRootDelegatesFocus:Se,shadowRootMode:null,shape:null,size:$,sizes:null,slot:null,span:$,spellCheck:an,src:null,srcDoc:null,srcLang:null,srcSet:null,start:$,step:null,style:null,tabIndex:$,target:null,title:null,translate:null,type:null,typeMustMatch:Se,useMap:null,value:an,width:$,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ge,axis:null,background:null,bgColor:null,border:$,borderColor:null,bottomMargin:$,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Se,declare:Se,event:null,face:null,frame:null,frameBorder:null,hSpace:$,leftMargin:$,link:null,longDesc:null,lowSrc:null,marginHeight:$,marginWidth:$,noResize:Se,noHref:Se,noShade:Se,noWrap:Se,object:null,profile:null,prompt:null,rev:null,rightMargin:$,rules:null,scheme:null,scrolling:an,standby:null,summary:null,text:null,topMargin:$,valueType:null,version:null,vAlign:null,vLink:null,vSpace:$,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Se,disableRemotePlayback:Se,prefix:null,property:null,results:$,security:null,unselectable:null},space:"html",transform:Yg}),XS=_i({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:qn,accentHeight:$,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:$,amplitude:$,arabicForm:null,ascent:$,attributeName:null,attributeType:null,azimuth:$,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:$,by:null,calcMode:null,capHeight:$,className:Ge,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:$,diffuseConstant:$,direction:null,display:null,dur:null,divisor:$,dominantBaseline:null,download:Se,dx:null,dy:null,edgeMode:null,editable:null,elevation:$,enableBackground:null,end:null,event:null,exponent:$,externalResourcesRequired:null,fill:null,fillOpacity:$,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ji,g2:ji,glyphName:ji,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:$,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:$,horizOriginX:$,horizOriginY:$,id:null,ideographic:$,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:$,k:$,k1:$,k2:$,k3:$,k4:$,kernelMatrix:qn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:$,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:$,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:$,overlineThickness:$,paintOrder:null,panose1:null,path:null,pathLength:$,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ge,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:$,pointsAtY:$,pointsAtZ:$,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:qn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:qn,rev:qn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:qn,requiredFeatures:qn,requiredFonts:qn,requiredFormats:qn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:$,specularExponent:$,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:$,strikethroughThickness:$,string:null,stroke:null,strokeDashArray:qn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:$,strokeOpacity:$,strokeWidth:null,style:null,surfaceScale:$,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:qn,tabIndex:$,tableValues:null,target:null,targetX:$,targetY:$,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:qn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:$,underlineThickness:$,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:$,values:null,vAlphabetic:$,vMathematical:$,vectorEffect:null,vHanging:$,vIdeographic:$,version:null,vertAdvY:$,vertOriginX:$,vertOriginY:$,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:$,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Gg}),Pg=_i({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,a){return"xlink:"+a.slice(5).toLowerCase()}}),Jg=_i({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Yg}),Xg=_i({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,a){return"xml:"+a.slice(3).toLowerCase()}}),QS={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ZS=/[A-Z]/g,Lp=/-[a-z]/g,KS=/^data[-\w.:]+$/i;function WS(t,a){const i=_c(a);let u=a,s=Dn;if(i in t.normal)return t.property[t.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&KS.test(a)){if(a.charAt(4)==="-"){const c=a.slice(5).replace(Lp,e2);u="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=a.slice(4);if(!Lp.test(c)){let f=c.replace(ZS,$S);f.charAt(0)!=="-"&&(f="-"+f),a="data"+f}}s=Zc}return new s(u,a)}function $S(t){return"-"+t.toLowerCase()}function e2(t){return t.charAt(1).toUpperCase()}const n2=Ig([Fg,JS,Pg,Jg,Xg],"html"),Kc=Ig([Fg,XS,Pg,Jg,Xg],"svg");function t2(t){return t.join(" ").trim()}var Ti={},mc,Up;function l2(){if(Up)return mc;Up=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,a=/\n/g,i=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,m=/^\s+|\s+$/g,p=`
`,h="/",b="*",g="",S="comment",v="declaration";function C(z,j){if(typeof z!="string")throw new TypeError("First argument must be a string");if(!z)return[];j=j||{};var H=1,D=1;function K(ae){var ne=ae.match(a);ne&&(H+=ne.length);var B=ae.lastIndexOf(p);D=~B?ae.length-B:D+ae.length}function le(){var ae={line:H,column:D};return function(ne){return ne.position=new V(ae),W(),ne}}function V(ae){this.start=ae,this.end={line:H,column:D},this.source=j.source}V.prototype.content=z;function ee(ae){var ne=new Error(j.source+":"+H+":"+D+": "+ae);if(ne.reason=ae,ne.filename=j.source,ne.line=H,ne.column=D,ne.source=z,!j.silent)throw ne}function oe(ae){var ne=ae.exec(z);if(ne){var B=ne[0];return K(B),z=z.slice(B.length),ne}}function W(){oe(i)}function A(ae){var ne;for(ae=ae||[];ne=P();)ne!==!1&&ae.push(ne);return ae}function P(){var ae=le();if(!(h!=z.charAt(0)||b!=z.charAt(1))){for(var ne=2;g!=z.charAt(ne)&&(b!=z.charAt(ne)||h!=z.charAt(ne+1));)++ne;if(ne+=2,g===z.charAt(ne-1))return ee("End of comment missing");var B=z.slice(2,ne-2);return D+=2,K(B),z=z.slice(ne),D+=2,ae({type:S,comment:B})}}function Q(){var ae=le(),ne=oe(u);if(ne){if(P(),!oe(s))return ee("property missing ':'");var B=oe(c),Z=ae({type:v,property:O(ne[0].replace(t,g)),value:B?O(B[0].replace(t,g)):g});return oe(f),Z}}function de(){var ae=[];A(ae);for(var ne;ne=Q();)ne!==!1&&(ae.push(ne),A(ae));return ae}return W(),de()}function O(z){return z?z.replace(m,g):g}return mc=C,mc}var Bp;function i2(){if(Bp)return Ti;Bp=1;var t=Ti&&Ti.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(Ti,"__esModule",{value:!0}),Ti.default=i;const a=t(l2());function i(u,s){let c=null;if(!u||typeof u!="string")return c;const f=(0,a.default)(u),m=typeof s=="function";return f.forEach(p=>{if(p.type!=="declaration")return;const{property:h,value:b}=p;m?s(h,b,p):b&&(c=c||{},c[h]=b)}),c}return Ti}var _a={},Hp;function a2(){if(Hp)return _a;Hp=1,Object.defineProperty(_a,"__esModule",{value:!0}),_a.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,a=/-([a-z])/g,i=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,c=function(h){return!h||i.test(h)||t.test(h)},f=function(h,b){return b.toUpperCase()},m=function(h,b){return"".concat(b,"-")},p=function(h,b){return b===void 0&&(b={}),c(h)?h:(h=h.toLowerCase(),b.reactCompat?h=h.replace(s,m):h=h.replace(u,m),h.replace(a,f))};return _a.camelCase=p,_a}var Ra,qp;function r2(){if(qp)return Ra;qp=1;var t=Ra&&Ra.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},a=t(i2()),i=a2();function u(s,c){var f={};return!s||typeof s!="string"||(0,a.default)(s,function(m,p){m&&p&&(f[(0,i.camelCase)(m,c)]=p)}),f}return u.default=u,Ra=u,Ra}var u2=r2();const s2=Fc(u2),Qg=Zg("end"),Wc=Zg("start");function Zg(t){return a;function a(i){const u=i&&i.position&&i.position[t]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function o2(t){const a=Wc(t),i=Qg(t);if(a&&i)return{start:a,end:i}}function Ua(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Vp(t.position):"start"in t||"end"in t?Vp(t):"line"in t||"column"in t?zc(t):""}function zc(t){return Ip(t&&t.line)+":"+Ip(t&&t.column)}function Vp(t){return zc(t&&t.start)+"-"+zc(t&&t.end)}function Ip(t){return t&&typeof t=="number"?t:1}class xn extends Error{constructor(a,i,u){super(),typeof i=="string"&&(u=i,i=void 0);let s="",c={},f=!1;if(i&&("line"in i&&"column"in i?c={place:i}:"start"in i&&"end"in i?c={place:i}:"type"in i?c={ancestors:[i],place:i.position}:c={...i}),typeof a=="string"?s=a:!c.cause&&a&&(f=!0,s=a.message,c.cause=a),!c.ruleId&&!c.source&&typeof u=="string"){const p=u.indexOf(":");p===-1?c.ruleId=u:(c.source=u.slice(0,p),c.ruleId=u.slice(p+1))}if(!c.place&&c.ancestors&&c.ancestors){const p=c.ancestors[c.ancestors.length-1];p&&(c.place=p.position)}const m=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=m?m.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=m?m.line:void 0,this.name=Ua(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=f&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xn.prototype.file="";xn.prototype.name="";xn.prototype.reason="";xn.prototype.message="";xn.prototype.stack="";xn.prototype.column=void 0;xn.prototype.line=void 0;xn.prototype.ancestors=void 0;xn.prototype.cause=void 0;xn.prototype.fatal=void 0;xn.prototype.place=void 0;xn.prototype.ruleId=void 0;xn.prototype.source=void 0;const $c={}.hasOwnProperty,c2=new Map,f2=/[A-Z]/g,d2=new Set(["table","tbody","thead","tfoot","tr"]),h2=new Set(["td","th"]),Kg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function m2(t,a){if(!a||a.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=a.filePath||void 0;let u;if(a.development){if(typeof a.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=k2(i,a.jsxDEV)}else{if(typeof a.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof a.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=S2(i,a.jsx,a.jsxs)}const s={Fragment:a.Fragment,ancestors:[],components:a.components||{},create:u,elementAttributeNameCase:a.elementAttributeNameCase||"react",evaluater:a.createEvaluater?a.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:a.ignoreInvalidStyle||!1,passKeys:a.passKeys!==!1,passNode:a.passNode||!1,schema:a.space==="svg"?Kc:n2,stylePropertyNameCase:a.stylePropertyNameCase||"dom",tableCellAlignToStyle:a.tableCellAlignToStyle!==!1},c=Wg(s,t,void 0);return c&&typeof c!="string"?c:s.create(t,s.Fragment,{children:c||void 0},void 0)}function Wg(t,a,i){if(a.type==="element")return p2(t,a,i);if(a.type==="mdxFlowExpression"||a.type==="mdxTextExpression")return g2(t,a);if(a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement")return b2(t,a,i);if(a.type==="mdxjsEsm")return x2(t,a);if(a.type==="root")return y2(t,a,i);if(a.type==="text")return v2(t,a)}function p2(t,a,i){const u=t.schema;let s=u;a.tagName.toLowerCase()==="svg"&&u.space==="html"&&(s=Kc,t.schema=s),t.ancestors.push(a);const c=ex(t,a.tagName,!1),f=w2(t,a);let m=nf(t,a);return d2.has(a.tagName)&&(m=m.filter(function(p){return typeof p=="string"?!YS(p):!0})),$g(t,f,c,a),ef(f,m),t.ancestors.pop(),t.schema=u,t.create(a,c,f,i)}function g2(t,a){if(a.data&&a.data.estree&&t.evaluater){const u=a.data.estree.body[0];return u.type,t.evaluater.evaluateExpression(u.expression)}Ia(t,a.position)}function x2(t,a){if(a.data&&a.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(a.data.estree);Ia(t,a.position)}function b2(t,a,i){const u=t.schema;let s=u;a.name==="svg"&&u.space==="html"&&(s=Kc,t.schema=s),t.ancestors.push(a);const c=a.name===null?t.Fragment:ex(t,a.name,!0),f=C2(t,a),m=nf(t,a);return $g(t,f,c,a),ef(f,m),t.ancestors.pop(),t.schema=u,t.create(a,c,f,i)}function y2(t,a,i){const u={};return ef(u,nf(t,a)),t.create(a,t.Fragment,u,i)}function v2(t,a){return a.value}function $g(t,a,i,u){typeof i!="string"&&i!==t.Fragment&&t.passNode&&(a.node=u)}function ef(t,a){if(a.length>0){const i=a.length>1?a:a[0];i&&(t.children=i)}}function S2(t,a,i){return u;function u(s,c,f,m){const h=Array.isArray(f.children)?i:a;return m?h(c,f,m):h(c,f)}}function k2(t,a){return i;function i(u,s,c,f){const m=Array.isArray(c.children),p=Wc(u);return a(s,c,f,m,{columnNumber:p?p.column-1:void 0,fileName:t,lineNumber:p?p.line:void 0},void 0)}}function w2(t,a){const i={};let u,s;for(s in a.properties)if(s!=="children"&&$c.call(a.properties,s)){const c=T2(t,s,a.properties[s]);if(c){const[f,m]=c;t.tableCellAlignToStyle&&f==="align"&&typeof m=="string"&&h2.has(a.tagName)?u=m:i[f]=m}}if(u){const c=i.style||(i.style={});c[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return i}function C2(t,a){const i={};for(const u of a.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&t.evaluater){const c=u.data.estree.body[0];c.type;const f=c.expression;f.type;const m=f.properties[0];m.type,Object.assign(i,t.evaluater.evaluateExpression(m.argument))}else Ia(t,a.position);else{const s=u.name;let c;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&t.evaluater){const m=u.value.data.estree.body[0];m.type,c=t.evaluater.evaluateExpression(m.expression)}else Ia(t,a.position);else c=u.value===null?!0:u.value;i[s]=c}return i}function nf(t,a){const i=[];let u=-1;const s=t.passKeys?new Map:c2;for(;++u<a.children.length;){const c=a.children[u];let f;if(t.passKeys){const p=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(p){const h=s.get(p)||0;f=p+"-"+h,s.set(p,h+1)}}const m=Wg(t,c,f);m!==void 0&&i.push(m)}return i}function T2(t,a,i){const u=WS(t.schema,a);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=u.commaSeparated?qS(i):t2(i)),u.property==="style"){let s=typeof i=="object"?i:E2(t,String(i));return t.stylePropertyNameCase==="css"&&(s=A2(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&u.space?QS[u.property]||u.property:u.attribute,i]}}function E2(t,a){try{return s2(a,{reactCompat:!0})}catch(i){if(t.ignoreInvalidStyle)return{};const u=i,s=new xn("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=Kg+"#cannot-parse-style-attribute",s}}function ex(t,a,i){let u;if(!i)u={type:"Literal",value:a};else if(a.includes(".")){const s=a.split(".");let c=-1,f;for(;++c<s.length;){const m=Rp(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};f=f?{type:"MemberExpression",object:f,property:m,computed:!!(c&&m.type==="Literal"),optional:!1}:m}u=f}else u=Rp(a)&&!/^[a-z]/.test(a)?{type:"Identifier",name:a}:{type:"Literal",value:a};if(u.type==="Literal"){const s=u.value;return $c.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(u);Ia(t)}function Ia(t,a){const i=new xn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:a,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=t.filePath||void 0,i.url=Kg+"#cannot-handle-mdx-estrees-without-createevaluater",i}function A2(t){const a={};let i;for(i in t)$c.call(t,i)&&(a[j2(i)]=t[i]);return a}function j2(t){let a=t.replace(f2,M2);return a.slice(0,3)==="ms-"&&(a="-"+a),a}function M2(t){return"-"+t.toLowerCase()}const pc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},N2={};function tf(t,a){const i=N2,u=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,s=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return nx(t,u,s)}function nx(t,a,i){if(D2(t)){if("value"in t)return t.type==="html"&&!i?"":t.value;if(a&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Fp(t.children,a,i)}return Array.isArray(t)?Fp(t,a,i):""}function Fp(t,a,i){const u=[];let s=-1;for(;++s<t.length;)u[s]=nx(t[s],a,i);return u.join("")}function D2(t){return!!(t&&typeof t=="object")}const Gp=document.createElement("i");function lf(t){const a="&"+t+";";Gp.innerHTML=a;const i=Gp.textContent;return i.charCodeAt(i.length-1)===59&&t!=="semi"||i===a?!1:i}function Vn(t,a,i,u){const s=t.length;let c=0,f;if(a<0?a=-a>s?0:s+a:a=a>s?s:a,i=i>0?i:0,u.length<1e4)f=Array.from(u),f.unshift(a,i),t.splice(...f);else for(i&&t.splice(a,i);c<u.length;)f=u.slice(c,c+1e4),f.unshift(a,0),t.splice(...f),c+=1e4,a+=1e4}function tt(t,a){return t.length>0?(Vn(t,t.length,0,a),t):a}const Yp={}.hasOwnProperty;function tx(t){const a={};let i=-1;for(;++i<t.length;)_2(a,t[i]);return a}function _2(t,a){let i;for(i in a){const s=(Yp.call(t,i)?t[i]:void 0)||(t[i]={}),c=a[i];let f;if(c)for(f in c){Yp.call(s,f)||(s[f]=[]);const m=c[f];R2(s[f],Array.isArray(m)?m:m?[m]:[])}}}function R2(t,a){let i=-1;const u=[];for(;++i<a.length;)(a[i].add==="after"?t:u).push(a[i]);Vn(t,0,0,u)}function lx(t,a){const i=Number.parseInt(t,a);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function ut(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Sn=ml(/[A-Za-z]/),gn=ml(/[\dA-Za-z]/),O2=ml(/[#-'*+\--9=?A-Z^-~]/);function Mu(t){return t!==null&&(t<32||t===127)}const Lc=ml(/\d/),z2=ml(/[\dA-Fa-f]/),L2=ml(/[!-/:-@[-`{-~]/);function he(t){return t!==null&&t<-2}function Fe(t){return t!==null&&(t<0||t===32)}function Te(t){return t===-2||t===-1||t===32}const zu=ml(new RegExp("\\p{P}|\\p{S}","u")),zl=ml(/\s/);function ml(t){return a;function a(i){return i!==null&&i>-1&&t.test(String.fromCharCode(i))}}function Ri(t){const a=[];let i=-1,u=0,s=0;for(;++i<t.length;){const c=t.charCodeAt(i);let f="";if(c===37&&gn(t.charCodeAt(i+1))&&gn(t.charCodeAt(i+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(f=String.fromCharCode(c));else if(c>55295&&c<57344){const m=t.charCodeAt(i+1);c<56320&&m>56319&&m<57344?(f=String.fromCharCode(c,m),s=1):f="�"}else f=String.fromCharCode(c);f&&(a.push(t.slice(u,i),encodeURIComponent(f)),u=i+s+1,f=""),s&&(i+=s,s=0)}return a.join("")+t.slice(u)}function Ne(t,a,i,u){const s=u?u-1:Number.POSITIVE_INFINITY;let c=0;return f;function f(p){return Te(p)?(t.enter(i),m(p)):a(p)}function m(p){return Te(p)&&c++<s?(t.consume(p),m):(t.exit(i),a(p))}}const U2={tokenize:B2};function B2(t){const a=t.attempt(this.parser.constructs.contentInitial,u,s);let i;return a;function u(m){if(m===null){t.consume(m);return}return t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),Ne(t,a,"linePrefix")}function s(m){return t.enter("paragraph"),c(m)}function c(m){const p=t.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=p),i=p,f(m)}function f(m){if(m===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(m);return}return he(m)?(t.consume(m),t.exit("chunkText"),c):(t.consume(m),f)}}const H2={tokenize:q2},Pp={tokenize:V2};function q2(t){const a=this,i=[];let u=0,s,c,f;return m;function m(D){if(u<i.length){const K=i[u];return a.containerState=K[1],t.attempt(K[0].continuation,p,h)(D)}return h(D)}function p(D){if(u++,a.containerState._closeFlow){a.containerState._closeFlow=void 0,s&&H();const K=a.events.length;let le=K,V;for(;le--;)if(a.events[le][0]==="exit"&&a.events[le][1].type==="chunkFlow"){V=a.events[le][1].end;break}j(u);let ee=K;for(;ee<a.events.length;)a.events[ee][1].end={...V},ee++;return Vn(a.events,le+1,0,a.events.slice(K)),a.events.length=ee,h(D)}return m(D)}function h(D){if(u===i.length){if(!s)return S(D);if(s.currentConstruct&&s.currentConstruct.concrete)return C(D);a.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return a.containerState={},t.check(Pp,b,g)(D)}function b(D){return s&&H(),j(u),S(D)}function g(D){return a.parser.lazy[a.now().line]=u!==i.length,f=a.now().offset,C(D)}function S(D){return a.containerState={},t.attempt(Pp,v,C)(D)}function v(D){return u++,i.push([a.currentConstruct,a.containerState]),S(D)}function C(D){if(D===null){s&&H(),j(0),t.consume(D);return}return s=s||a.parser.flow(a.now()),t.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:c}),O(D)}function O(D){if(D===null){z(t.exit("chunkFlow"),!0),j(0),t.consume(D);return}return he(D)?(t.consume(D),z(t.exit("chunkFlow")),u=0,a.interrupt=void 0,m):(t.consume(D),O)}function z(D,K){const le=a.sliceStream(D);if(K&&le.push(null),D.previous=c,c&&(c.next=D),c=D,s.defineSkip(D.start),s.write(le),a.parser.lazy[D.start.line]){let V=s.events.length;for(;V--;)if(s.events[V][1].start.offset<f&&(!s.events[V][1].end||s.events[V][1].end.offset>f))return;const ee=a.events.length;let oe=ee,W,A;for(;oe--;)if(a.events[oe][0]==="exit"&&a.events[oe][1].type==="chunkFlow"){if(W){A=a.events[oe][1].end;break}W=!0}for(j(u),V=ee;V<a.events.length;)a.events[V][1].end={...A},V++;Vn(a.events,oe+1,0,a.events.slice(ee)),a.events.length=V}}function j(D){let K=i.length;for(;K-- >D;){const le=i[K];a.containerState=le[1],le[0].exit.call(a,t)}i.length=D}function H(){s.write([null]),c=void 0,s=void 0,a.containerState._closeFlow=void 0}}function V2(t,a,i){return Ne(t,t.attempt(this.parser.constructs.document,a,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Mi(t){if(t===null||Fe(t)||zl(t))return 1;if(zu(t))return 2}function Lu(t,a,i){const u=[];let s=-1;for(;++s<t.length;){const c=t[s].resolveAll;c&&!u.includes(c)&&(a=c(a,i),u.push(c))}return a}const Uc={name:"attention",resolveAll:I2,tokenize:F2};function I2(t,a){let i=-1,u,s,c,f,m,p,h,b;for(;++i<t.length;)if(t[i][0]==="enter"&&t[i][1].type==="attentionSequence"&&t[i][1]._close){for(u=i;u--;)if(t[u][0]==="exit"&&t[u][1].type==="attentionSequence"&&t[u][1]._open&&a.sliceSerialize(t[u][1]).charCodeAt(0)===a.sliceSerialize(t[i][1]).charCodeAt(0)){if((t[u][1]._close||t[i][1]._open)&&(t[i][1].end.offset-t[i][1].start.offset)%3&&!((t[u][1].end.offset-t[u][1].start.offset+t[i][1].end.offset-t[i][1].start.offset)%3))continue;p=t[u][1].end.offset-t[u][1].start.offset>1&&t[i][1].end.offset-t[i][1].start.offset>1?2:1;const g={...t[u][1].end},S={...t[i][1].start};Jp(g,-p),Jp(S,p),f={type:p>1?"strongSequence":"emphasisSequence",start:g,end:{...t[u][1].end}},m={type:p>1?"strongSequence":"emphasisSequence",start:{...t[i][1].start},end:S},c={type:p>1?"strongText":"emphasisText",start:{...t[u][1].end},end:{...t[i][1].start}},s={type:p>1?"strong":"emphasis",start:{...f.start},end:{...m.end}},t[u][1].end={...f.start},t[i][1].start={...m.end},h=[],t[u][1].end.offset-t[u][1].start.offset&&(h=tt(h,[["enter",t[u][1],a],["exit",t[u][1],a]])),h=tt(h,[["enter",s,a],["enter",f,a],["exit",f,a],["enter",c,a]]),h=tt(h,Lu(a.parser.constructs.insideSpan.null,t.slice(u+1,i),a)),h=tt(h,[["exit",c,a],["enter",m,a],["exit",m,a],["exit",s,a]]),t[i][1].end.offset-t[i][1].start.offset?(b=2,h=tt(h,[["enter",t[i][1],a],["exit",t[i][1],a]])):b=0,Vn(t,u-1,i-u+3,h),i=u+h.length-b-2;break}}for(i=-1;++i<t.length;)t[i][1].type==="attentionSequence"&&(t[i][1].type="data");return t}function F2(t,a){const i=this.parser.constructs.attentionMarkers.null,u=this.previous,s=Mi(u);let c;return f;function f(p){return c=p,t.enter("attentionSequence"),m(p)}function m(p){if(p===c)return t.consume(p),m;const h=t.exit("attentionSequence"),b=Mi(p),g=!b||b===2&&s||i.includes(p),S=!s||s===2&&b||i.includes(u);return h._open=!!(c===42?g:g&&(s||!S)),h._close=!!(c===42?S:S&&(b||!g)),a(p)}}function Jp(t,a){t.column+=a,t.offset+=a,t._bufferIndex+=a}const G2={name:"autolink",tokenize:Y2};function Y2(t,a,i){let u=0;return s;function s(v){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(v),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),c}function c(v){return Sn(v)?(t.consume(v),f):v===64?i(v):h(v)}function f(v){return v===43||v===45||v===46||gn(v)?(u=1,m(v)):h(v)}function m(v){return v===58?(t.consume(v),u=0,p):(v===43||v===45||v===46||gn(v))&&u++<32?(t.consume(v),m):(u=0,h(v))}function p(v){return v===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(v),t.exit("autolinkMarker"),t.exit("autolink"),a):v===null||v===32||v===60||Mu(v)?i(v):(t.consume(v),p)}function h(v){return v===64?(t.consume(v),b):O2(v)?(t.consume(v),h):i(v)}function b(v){return gn(v)?g(v):i(v)}function g(v){return v===46?(t.consume(v),u=0,b):v===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(v),t.exit("autolinkMarker"),t.exit("autolink"),a):S(v)}function S(v){if((v===45||gn(v))&&u++<63){const C=v===45?S:g;return t.consume(v),C}return i(v)}}const Qa={partial:!0,tokenize:P2};function P2(t,a,i){return u;function u(c){return Te(c)?Ne(t,s,"linePrefix")(c):s(c)}function s(c){return c===null||he(c)?a(c):i(c)}}const ix={continuation:{tokenize:X2},exit:Q2,name:"blockQuote",tokenize:J2};function J2(t,a,i){const u=this;return s;function s(f){if(f===62){const m=u.containerState;return m.open||(t.enter("blockQuote",{_container:!0}),m.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(f),t.exit("blockQuoteMarker"),c}return i(f)}function c(f){return Te(f)?(t.enter("blockQuotePrefixWhitespace"),t.consume(f),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),a):(t.exit("blockQuotePrefix"),a(f))}}function X2(t,a,i){const u=this;return s;function s(f){return Te(f)?Ne(t,c,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):c(f)}function c(f){return t.attempt(ix,a,i)(f)}}function Q2(t){t.exit("blockQuote")}const ax={name:"characterEscape",tokenize:Z2};function Z2(t,a,i){return u;function u(c){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(c),t.exit("escapeMarker"),s}function s(c){return L2(c)?(t.enter("characterEscapeValue"),t.consume(c),t.exit("characterEscapeValue"),t.exit("characterEscape"),a):i(c)}}const rx={name:"characterReference",tokenize:K2};function K2(t,a,i){const u=this;let s=0,c,f;return m;function m(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),p}function p(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),h):(t.enter("characterReferenceValue"),c=31,f=gn,b(g))}function h(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),c=6,f=z2,b):(t.enter("characterReferenceValue"),c=7,f=Lc,b(g))}function b(g){if(g===59&&s){const S=t.exit("characterReferenceValue");return f===gn&&!lf(u.sliceSerialize(S))?i(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),a)}return f(g)&&s++<c?(t.consume(g),b):i(g)}}const Xp={partial:!0,tokenize:$2},Qp={concrete:!0,name:"codeFenced",tokenize:W2};function W2(t,a,i){const u=this,s={partial:!0,tokenize:le};let c=0,f=0,m;return p;function p(V){return h(V)}function h(V){const ee=u.events[u.events.length-1];return c=ee&&ee[1].type==="linePrefix"?ee[2].sliceSerialize(ee[1],!0).length:0,m=V,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),b(V)}function b(V){return V===m?(f++,t.consume(V),b):f<3?i(V):(t.exit("codeFencedFenceSequence"),Te(V)?Ne(t,g,"whitespace")(V):g(V))}function g(V){return V===null||he(V)?(t.exit("codeFencedFence"),u.interrupt?a(V):t.check(Xp,O,K)(V)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),S(V))}function S(V){return V===null||he(V)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(V)):Te(V)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Ne(t,v,"whitespace")(V)):V===96&&V===m?i(V):(t.consume(V),S)}function v(V){return V===null||he(V)?g(V):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),C(V))}function C(V){return V===null||he(V)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(V)):V===96&&V===m?i(V):(t.consume(V),C)}function O(V){return t.attempt(s,K,z)(V)}function z(V){return t.enter("lineEnding"),t.consume(V),t.exit("lineEnding"),j}function j(V){return c>0&&Te(V)?Ne(t,H,"linePrefix",c+1)(V):H(V)}function H(V){return V===null||he(V)?t.check(Xp,O,K)(V):(t.enter("codeFlowValue"),D(V))}function D(V){return V===null||he(V)?(t.exit("codeFlowValue"),H(V)):(t.consume(V),D)}function K(V){return t.exit("codeFenced"),a(V)}function le(V,ee,oe){let W=0;return A;function A(ne){return V.enter("lineEnding"),V.consume(ne),V.exit("lineEnding"),P}function P(ne){return V.enter("codeFencedFence"),Te(ne)?Ne(V,Q,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ne):Q(ne)}function Q(ne){return ne===m?(V.enter("codeFencedFenceSequence"),de(ne)):oe(ne)}function de(ne){return ne===m?(W++,V.consume(ne),de):W>=f?(V.exit("codeFencedFenceSequence"),Te(ne)?Ne(V,ae,"whitespace")(ne):ae(ne)):oe(ne)}function ae(ne){return ne===null||he(ne)?(V.exit("codeFencedFence"),ee(ne)):oe(ne)}}}function $2(t,a,i){const u=this;return s;function s(f){return f===null?i(f):(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c)}function c(f){return u.parser.lazy[u.now().line]?i(f):a(f)}}const gc={name:"codeIndented",tokenize:nk},ek={partial:!0,tokenize:tk};function nk(t,a,i){const u=this;return s;function s(h){return t.enter("codeIndented"),Ne(t,c,"linePrefix",5)(h)}function c(h){const b=u.events[u.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?f(h):i(h)}function f(h){return h===null?p(h):he(h)?t.attempt(ek,f,p)(h):(t.enter("codeFlowValue"),m(h))}function m(h){return h===null||he(h)?(t.exit("codeFlowValue"),f(h)):(t.consume(h),m)}function p(h){return t.exit("codeIndented"),a(h)}}function tk(t,a,i){const u=this;return s;function s(f){return u.parser.lazy[u.now().line]?i(f):he(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),s):Ne(t,c,"linePrefix",5)(f)}function c(f){const m=u.events[u.events.length-1];return m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?a(f):he(f)?s(f):i(f)}}const lk={name:"codeText",previous:ak,resolve:ik,tokenize:rk};function ik(t){let a=t.length-4,i=3,u,s;if((t[i][1].type==="lineEnding"||t[i][1].type==="space")&&(t[a][1].type==="lineEnding"||t[a][1].type==="space")){for(u=i;++u<a;)if(t[u][1].type==="codeTextData"){t[i][1].type="codeTextPadding",t[a][1].type="codeTextPadding",i+=2,a-=2;break}}for(u=i-1,a++;++u<=a;)s===void 0?u!==a&&t[u][1].type!=="lineEnding"&&(s=u):(u===a||t[u][1].type==="lineEnding")&&(t[s][1].type="codeTextData",u!==s+2&&(t[s][1].end=t[u-1][1].end,t.splice(s+2,u-s-2),a-=u-s-2,u=s+2),s=void 0);return t}function ak(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function rk(t,a,i){let u=0,s,c;return f;function f(g){return t.enter("codeText"),t.enter("codeTextSequence"),m(g)}function m(g){return g===96?(t.consume(g),u++,m):(t.exit("codeTextSequence"),p(g))}function p(g){return g===null?i(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),p):g===96?(c=t.enter("codeTextSequence"),s=0,b(g)):he(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),p):(t.enter("codeTextData"),h(g))}function h(g){return g===null||g===32||g===96||he(g)?(t.exit("codeTextData"),p(g)):(t.consume(g),h)}function b(g){return g===96?(t.consume(g),s++,b):s===u?(t.exit("codeTextSequence"),t.exit("codeText"),a(g)):(c.type="codeTextData",h(g))}}class uk{constructor(a){this.left=a?[...a]:[],this.right=[]}get(a){if(a<0||a>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+a+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return a<this.left.length?this.left[a]:this.right[this.right.length-a+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(a,i){const u=i??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(a,u):a>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-a+this.left.length).reverse():this.left.slice(a).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(a,i,u){const s=i||0;this.setCursor(Math.trunc(a));const c=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return u&&Oa(this.left,u),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(a){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(a)}pushMany(a){this.setCursor(Number.POSITIVE_INFINITY),Oa(this.left,a)}unshift(a){this.setCursor(0),this.right.push(a)}unshiftMany(a){this.setCursor(0),Oa(this.right,a.reverse())}setCursor(a){if(!(a===this.left.length||a>this.left.length&&this.right.length===0||a<0&&this.left.length===0))if(a<this.left.length){const i=this.left.splice(a,Number.POSITIVE_INFINITY);Oa(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-a,Number.POSITIVE_INFINITY);Oa(this.left,i.reverse())}}}function Oa(t,a){let i=0;if(a.length<1e4)t.push(...a);else for(;i<a.length;)t.push(...a.slice(i,i+1e4)),i+=1e4}function ux(t){const a={};let i=-1,u,s,c,f,m,p,h;const b=new uk(t);for(;++i<b.length;){for(;i in a;)i=a[i];if(u=b.get(i),i&&u[1].type==="chunkFlow"&&b.get(i-1)[1].type==="listItemPrefix"&&(p=u[1]._tokenizer.events,c=0,c<p.length&&p[c][1].type==="lineEndingBlank"&&(c+=2),c<p.length&&p[c][1].type==="content"))for(;++c<p.length&&p[c][1].type!=="content";)p[c][1].type==="chunkText"&&(p[c][1]._isInFirstContentOfListItem=!0,c++);if(u[0]==="enter")u[1].contentType&&(Object.assign(a,sk(b,i)),i=a[i],h=!0);else if(u[1]._container){for(c=i,s=void 0;c--;)if(f=b.get(c),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(s&&(b.get(s)[1].type="lineEndingBlank"),f[1].type="lineEnding",s=c);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;s&&(u[1].end={...b.get(s)[1].start},m=b.slice(s,i),m.unshift(u),b.splice(s,i-s+1,m))}}return Vn(t,0,Number.POSITIVE_INFINITY,b.slice(0)),!h}function sk(t,a){const i=t.get(a)[1],u=t.get(a)[2];let s=a-1;const c=[];let f=i._tokenizer;f||(f=u.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const m=f.events,p=[],h={};let b,g,S=-1,v=i,C=0,O=0;const z=[O];for(;v;){for(;t.get(++s)[1]!==v;);c.push(s),v._tokenizer||(b=u.sliceStream(v),v.next||b.push(null),g&&f.defineSkip(v.start),v._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(b),v._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),g=v,v=v.next}for(v=i;++S<m.length;)m[S][0]==="exit"&&m[S-1][0]==="enter"&&m[S][1].type===m[S-1][1].type&&m[S][1].start.line!==m[S][1].end.line&&(O=S+1,z.push(O),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(f.events=[],v?(v._tokenizer=void 0,v.previous=void 0):z.pop(),S=z.length;S--;){const j=m.slice(z[S],z[S+1]),H=c.pop();p.push([H,H+j.length-1]),t.splice(H,2,j)}for(p.reverse(),S=-1;++S<p.length;)h[C+p[S][0]]=C+p[S][1],C+=p[S][1]-p[S][0]-1;return h}const ok={resolve:fk,tokenize:dk},ck={partial:!0,tokenize:hk};function fk(t){return ux(t),t}function dk(t,a){let i;return u;function u(m){return t.enter("content"),i=t.enter("chunkContent",{contentType:"content"}),s(m)}function s(m){return m===null?c(m):he(m)?t.check(ck,f,c)(m):(t.consume(m),s)}function c(m){return t.exit("chunkContent"),t.exit("content"),a(m)}function f(m){return t.consume(m),t.exit("chunkContent"),i.next=t.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,s}}function hk(t,a,i){const u=this;return s;function s(f){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),Ne(t,c,"linePrefix")}function c(f){if(f===null||he(f))return i(f);const m=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?a(f):t.interrupt(u.parser.constructs.flow,i,a)(f)}}function sx(t,a,i,u,s,c,f,m,p){const h=p||Number.POSITIVE_INFINITY;let b=0;return g;function g(j){return j===60?(t.enter(u),t.enter(s),t.enter(c),t.consume(j),t.exit(c),S):j===null||j===32||j===41||Mu(j)?i(j):(t.enter(u),t.enter(f),t.enter(m),t.enter("chunkString",{contentType:"string"}),O(j))}function S(j){return j===62?(t.enter(c),t.consume(j),t.exit(c),t.exit(s),t.exit(u),a):(t.enter(m),t.enter("chunkString",{contentType:"string"}),v(j))}function v(j){return j===62?(t.exit("chunkString"),t.exit(m),S(j)):j===null||j===60||he(j)?i(j):(t.consume(j),j===92?C:v)}function C(j){return j===60||j===62||j===92?(t.consume(j),v):v(j)}function O(j){return!b&&(j===null||j===41||Fe(j))?(t.exit("chunkString"),t.exit(m),t.exit(f),t.exit(u),a(j)):b<h&&j===40?(t.consume(j),b++,O):j===41?(t.consume(j),b--,O):j===null||j===32||j===40||Mu(j)?i(j):(t.consume(j),j===92?z:O)}function z(j){return j===40||j===41||j===92?(t.consume(j),O):O(j)}}function ox(t,a,i,u,s,c){const f=this;let m=0,p;return h;function h(v){return t.enter(u),t.enter(s),t.consume(v),t.exit(s),t.enter(c),b}function b(v){return m>999||v===null||v===91||v===93&&!p||v===94&&!m&&"_hiddenFootnoteSupport"in f.parser.constructs?i(v):v===93?(t.exit(c),t.enter(s),t.consume(v),t.exit(s),t.exit(u),a):he(v)?(t.enter("lineEnding"),t.consume(v),t.exit("lineEnding"),b):(t.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||v===91||v===93||he(v)||m++>999?(t.exit("chunkString"),b(v)):(t.consume(v),p||(p=!Te(v)),v===92?S:g)}function S(v){return v===91||v===92||v===93?(t.consume(v),m++,g):g(v)}}function cx(t,a,i,u,s,c){let f;return m;function m(S){return S===34||S===39||S===40?(t.enter(u),t.enter(s),t.consume(S),t.exit(s),f=S===40?41:S,p):i(S)}function p(S){return S===f?(t.enter(s),t.consume(S),t.exit(s),t.exit(u),a):(t.enter(c),h(S))}function h(S){return S===f?(t.exit(c),p(f)):S===null?i(S):he(S)?(t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),Ne(t,h,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),b(S))}function b(S){return S===f||S===null||he(S)?(t.exit("chunkString"),h(S)):(t.consume(S),S===92?g:b)}function g(S){return S===f||S===92?(t.consume(S),b):b(S)}}function Ba(t,a){let i;return u;function u(s){return he(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),i=!0,u):Te(s)?Ne(t,u,i?"linePrefix":"lineSuffix")(s):a(s)}}const mk={name:"definition",tokenize:gk},pk={partial:!0,tokenize:xk};function gk(t,a,i){const u=this;let s;return c;function c(v){return t.enter("definition"),f(v)}function f(v){return ox.call(u,t,m,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function m(v){return s=ut(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),v===58?(t.enter("definitionMarker"),t.consume(v),t.exit("definitionMarker"),p):i(v)}function p(v){return Fe(v)?Ba(t,h)(v):h(v)}function h(v){return sx(t,b,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function b(v){return t.attempt(pk,g,g)(v)}function g(v){return Te(v)?Ne(t,S,"whitespace")(v):S(v)}function S(v){return v===null||he(v)?(t.exit("definition"),u.parser.defined.push(s),a(v)):i(v)}}function xk(t,a,i){return u;function u(m){return Fe(m)?Ba(t,s)(m):i(m)}function s(m){return cx(t,c,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(m)}function c(m){return Te(m)?Ne(t,f,"whitespace")(m):f(m)}function f(m){return m===null||he(m)?a(m):i(m)}}const bk={name:"hardBreakEscape",tokenize:yk};function yk(t,a,i){return u;function u(c){return t.enter("hardBreakEscape"),t.consume(c),s}function s(c){return he(c)?(t.exit("hardBreakEscape"),a(c)):i(c)}}const vk={name:"headingAtx",resolve:Sk,tokenize:kk};function Sk(t,a){let i=t.length-2,u=3,s,c;return t[u][1].type==="whitespace"&&(u+=2),i-2>u&&t[i][1].type==="whitespace"&&(i-=2),t[i][1].type==="atxHeadingSequence"&&(u===i-1||i-4>u&&t[i-2][1].type==="whitespace")&&(i-=u+1===i?2:4),i>u&&(s={type:"atxHeadingText",start:t[u][1].start,end:t[i][1].end},c={type:"chunkText",start:t[u][1].start,end:t[i][1].end,contentType:"text"},Vn(t,u,i-u+1,[["enter",s,a],["enter",c,a],["exit",c,a],["exit",s,a]])),t}function kk(t,a,i){let u=0;return s;function s(b){return t.enter("atxHeading"),c(b)}function c(b){return t.enter("atxHeadingSequence"),f(b)}function f(b){return b===35&&u++<6?(t.consume(b),f):b===null||Fe(b)?(t.exit("atxHeadingSequence"),m(b)):i(b)}function m(b){return b===35?(t.enter("atxHeadingSequence"),p(b)):b===null||he(b)?(t.exit("atxHeading"),a(b)):Te(b)?Ne(t,m,"whitespace")(b):(t.enter("atxHeadingText"),h(b))}function p(b){return b===35?(t.consume(b),p):(t.exit("atxHeadingSequence"),m(b))}function h(b){return b===null||b===35||Fe(b)?(t.exit("atxHeadingText"),m(b)):(t.consume(b),h)}}const wk=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Zp=["pre","script","style","textarea"],Ck={concrete:!0,name:"htmlFlow",resolveTo:Ak,tokenize:jk},Tk={partial:!0,tokenize:Nk},Ek={partial:!0,tokenize:Mk};function Ak(t){let a=t.length;for(;a--&&!(t[a][0]==="enter"&&t[a][1].type==="htmlFlow"););return a>1&&t[a-2][1].type==="linePrefix"&&(t[a][1].start=t[a-2][1].start,t[a+1][1].start=t[a-2][1].start,t.splice(a-2,2)),t}function jk(t,a,i){const u=this;let s,c,f,m,p;return h;function h(w){return b(w)}function b(w){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(w),g}function g(w){return w===33?(t.consume(w),S):w===47?(t.consume(w),c=!0,O):w===63?(t.consume(w),s=3,u.interrupt?a:T):Sn(w)?(t.consume(w),f=String.fromCharCode(w),z):i(w)}function S(w){return w===45?(t.consume(w),s=2,v):w===91?(t.consume(w),s=5,m=0,C):Sn(w)?(t.consume(w),s=4,u.interrupt?a:T):i(w)}function v(w){return w===45?(t.consume(w),u.interrupt?a:T):i(w)}function C(w){const ie="CDATA[";return w===ie.charCodeAt(m++)?(t.consume(w),m===ie.length?u.interrupt?a:Q:C):i(w)}function O(w){return Sn(w)?(t.consume(w),f=String.fromCharCode(w),z):i(w)}function z(w){if(w===null||w===47||w===62||Fe(w)){const ie=w===47,pe=f.toLowerCase();return!ie&&!c&&Zp.includes(pe)?(s=1,u.interrupt?a(w):Q(w)):wk.includes(f.toLowerCase())?(s=6,ie?(t.consume(w),j):u.interrupt?a(w):Q(w)):(s=7,u.interrupt&&!u.parser.lazy[u.now().line]?i(w):c?H(w):D(w))}return w===45||gn(w)?(t.consume(w),f+=String.fromCharCode(w),z):i(w)}function j(w){return w===62?(t.consume(w),u.interrupt?a:Q):i(w)}function H(w){return Te(w)?(t.consume(w),H):A(w)}function D(w){return w===47?(t.consume(w),A):w===58||w===95||Sn(w)?(t.consume(w),K):Te(w)?(t.consume(w),D):A(w)}function K(w){return w===45||w===46||w===58||w===95||gn(w)?(t.consume(w),K):le(w)}function le(w){return w===61?(t.consume(w),V):Te(w)?(t.consume(w),le):D(w)}function V(w){return w===null||w===60||w===61||w===62||w===96?i(w):w===34||w===39?(t.consume(w),p=w,ee):Te(w)?(t.consume(w),V):oe(w)}function ee(w){return w===p?(t.consume(w),p=null,W):w===null||he(w)?i(w):(t.consume(w),ee)}function oe(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||Fe(w)?le(w):(t.consume(w),oe)}function W(w){return w===47||w===62||Te(w)?D(w):i(w)}function A(w){return w===62?(t.consume(w),P):i(w)}function P(w){return w===null||he(w)?Q(w):Te(w)?(t.consume(w),P):i(w)}function Q(w){return w===45&&s===2?(t.consume(w),B):w===60&&s===1?(t.consume(w),Z):w===62&&s===4?(t.consume(w),M):w===63&&s===3?(t.consume(w),T):w===93&&s===5?(t.consume(w),be):he(w)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(Tk,G,de)(w)):w===null||he(w)?(t.exit("htmlFlowData"),de(w)):(t.consume(w),Q)}function de(w){return t.check(Ek,ae,G)(w)}function ae(w){return t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),ne}function ne(w){return w===null||he(w)?de(w):(t.enter("htmlFlowData"),Q(w))}function B(w){return w===45?(t.consume(w),T):Q(w)}function Z(w){return w===47?(t.consume(w),f="",re):Q(w)}function re(w){if(w===62){const ie=f.toLowerCase();return Zp.includes(ie)?(t.consume(w),M):Q(w)}return Sn(w)&&f.length<8?(t.consume(w),f+=String.fromCharCode(w),re):Q(w)}function be(w){return w===93?(t.consume(w),T):Q(w)}function T(w){return w===62?(t.consume(w),M):w===45&&s===2?(t.consume(w),T):Q(w)}function M(w){return w===null||he(w)?(t.exit("htmlFlowData"),G(w)):(t.consume(w),M)}function G(w){return t.exit("htmlFlow"),a(w)}}function Mk(t,a,i){const u=this;return s;function s(f){return he(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c):i(f)}function c(f){return u.parser.lazy[u.now().line]?i(f):a(f)}}function Nk(t,a,i){return u;function u(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(Qa,a,i)}}const Dk={name:"htmlText",tokenize:_k};function _k(t,a,i){const u=this;let s,c,f;return m;function m(T){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(T),p}function p(T){return T===33?(t.consume(T),h):T===47?(t.consume(T),le):T===63?(t.consume(T),D):Sn(T)?(t.consume(T),oe):i(T)}function h(T){return T===45?(t.consume(T),b):T===91?(t.consume(T),c=0,C):Sn(T)?(t.consume(T),H):i(T)}function b(T){return T===45?(t.consume(T),v):i(T)}function g(T){return T===null?i(T):T===45?(t.consume(T),S):he(T)?(f=g,Z(T)):(t.consume(T),g)}function S(T){return T===45?(t.consume(T),v):g(T)}function v(T){return T===62?B(T):T===45?S(T):g(T)}function C(T){const M="CDATA[";return T===M.charCodeAt(c++)?(t.consume(T),c===M.length?O:C):i(T)}function O(T){return T===null?i(T):T===93?(t.consume(T),z):he(T)?(f=O,Z(T)):(t.consume(T),O)}function z(T){return T===93?(t.consume(T),j):O(T)}function j(T){return T===62?B(T):T===93?(t.consume(T),j):O(T)}function H(T){return T===null||T===62?B(T):he(T)?(f=H,Z(T)):(t.consume(T),H)}function D(T){return T===null?i(T):T===63?(t.consume(T),K):he(T)?(f=D,Z(T)):(t.consume(T),D)}function K(T){return T===62?B(T):D(T)}function le(T){return Sn(T)?(t.consume(T),V):i(T)}function V(T){return T===45||gn(T)?(t.consume(T),V):ee(T)}function ee(T){return he(T)?(f=ee,Z(T)):Te(T)?(t.consume(T),ee):B(T)}function oe(T){return T===45||gn(T)?(t.consume(T),oe):T===47||T===62||Fe(T)?W(T):i(T)}function W(T){return T===47?(t.consume(T),B):T===58||T===95||Sn(T)?(t.consume(T),A):he(T)?(f=W,Z(T)):Te(T)?(t.consume(T),W):B(T)}function A(T){return T===45||T===46||T===58||T===95||gn(T)?(t.consume(T),A):P(T)}function P(T){return T===61?(t.consume(T),Q):he(T)?(f=P,Z(T)):Te(T)?(t.consume(T),P):W(T)}function Q(T){return T===null||T===60||T===61||T===62||T===96?i(T):T===34||T===39?(t.consume(T),s=T,de):he(T)?(f=Q,Z(T)):Te(T)?(t.consume(T),Q):(t.consume(T),ae)}function de(T){return T===s?(t.consume(T),s=void 0,ne):T===null?i(T):he(T)?(f=de,Z(T)):(t.consume(T),de)}function ae(T){return T===null||T===34||T===39||T===60||T===61||T===96?i(T):T===47||T===62||Fe(T)?W(T):(t.consume(T),ae)}function ne(T){return T===47||T===62||Fe(T)?W(T):i(T)}function B(T){return T===62?(t.consume(T),t.exit("htmlTextData"),t.exit("htmlText"),a):i(T)}function Z(T){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),re}function re(T){return Te(T)?Ne(t,be,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):be(T)}function be(T){return t.enter("htmlTextData"),f(T)}}const af={name:"labelEnd",resolveAll:Lk,resolveTo:Uk,tokenize:Bk},Rk={tokenize:Hk},Ok={tokenize:qk},zk={tokenize:Vk};function Lk(t){let a=-1;const i=[];for(;++a<t.length;){const u=t[a][1];if(i.push(t[a]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const s=u.type==="labelImage"?4:2;u.type="data",a+=s}}return t.length!==i.length&&Vn(t,0,t.length,i),t}function Uk(t,a){let i=t.length,u=0,s,c,f,m;for(;i--;)if(s=t[i][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[i][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(f){if(t[i][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=i,s.type!=="labelLink")){u=2;break}}else s.type==="labelEnd"&&(f=i);const p={type:t[c][1].type==="labelLink"?"link":"image",start:{...t[c][1].start},end:{...t[t.length-1][1].end}},h={type:"label",start:{...t[c][1].start},end:{...t[f][1].end}},b={type:"labelText",start:{...t[c+u+2][1].end},end:{...t[f-2][1].start}};return m=[["enter",p,a],["enter",h,a]],m=tt(m,t.slice(c+1,c+u+3)),m=tt(m,[["enter",b,a]]),m=tt(m,Lu(a.parser.constructs.insideSpan.null,t.slice(c+u+4,f-3),a)),m=tt(m,[["exit",b,a],t[f-2],t[f-1],["exit",h,a]]),m=tt(m,t.slice(f+1)),m=tt(m,[["exit",p,a]]),Vn(t,c,t.length,m),t}function Bk(t,a,i){const u=this;let s=u.events.length,c,f;for(;s--;)if((u.events[s][1].type==="labelImage"||u.events[s][1].type==="labelLink")&&!u.events[s][1]._balanced){c=u.events[s][1];break}return m;function m(S){return c?c._inactive?g(S):(f=u.parser.defined.includes(ut(u.sliceSerialize({start:c.end,end:u.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(S),t.exit("labelMarker"),t.exit("labelEnd"),p):i(S)}function p(S){return S===40?t.attempt(Rk,b,f?b:g)(S):S===91?t.attempt(Ok,b,f?h:g)(S):f?b(S):g(S)}function h(S){return t.attempt(zk,b,g)(S)}function b(S){return a(S)}function g(S){return c._balanced=!0,i(S)}}function Hk(t,a,i){return u;function u(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),s}function s(g){return Fe(g)?Ba(t,c)(g):c(g)}function c(g){return g===41?b(g):sx(t,f,m,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function f(g){return Fe(g)?Ba(t,p)(g):b(g)}function m(g){return i(g)}function p(g){return g===34||g===39||g===40?cx(t,h,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):b(g)}function h(g){return Fe(g)?Ba(t,b)(g):b(g)}function b(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),a):i(g)}}function qk(t,a,i){const u=this;return s;function s(m){return ox.call(u,t,c,f,"reference","referenceMarker","referenceString")(m)}function c(m){return u.parser.defined.includes(ut(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?a(m):i(m)}function f(m){return i(m)}}function Vk(t,a,i){return u;function u(c){return t.enter("reference"),t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),s}function s(c){return c===93?(t.enter("referenceMarker"),t.consume(c),t.exit("referenceMarker"),t.exit("reference"),a):i(c)}}const Ik={name:"labelStartImage",resolveAll:af.resolveAll,tokenize:Fk};function Fk(t,a,i){const u=this;return s;function s(m){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(m),t.exit("labelImageMarker"),c}function c(m){return m===91?(t.enter("labelMarker"),t.consume(m),t.exit("labelMarker"),t.exit("labelImage"),f):i(m)}function f(m){return m===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(m):a(m)}}const Gk={name:"labelStartLink",resolveAll:af.resolveAll,tokenize:Yk};function Yk(t,a,i){const u=this;return s;function s(f){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelLink"),c}function c(f){return f===94&&"_hiddenFootnoteSupport"in u.parser.constructs?i(f):a(f)}}const xc={name:"lineEnding",tokenize:Pk};function Pk(t,a){return i;function i(u){return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),Ne(t,a,"linePrefix")}}const Tu={name:"thematicBreak",tokenize:Jk};function Jk(t,a,i){let u=0,s;return c;function c(h){return t.enter("thematicBreak"),f(h)}function f(h){return s=h,m(h)}function m(h){return h===s?(t.enter("thematicBreakSequence"),p(h)):u>=3&&(h===null||he(h))?(t.exit("thematicBreak"),a(h)):i(h)}function p(h){return h===s?(t.consume(h),u++,p):(t.exit("thematicBreakSequence"),Te(h)?Ne(t,m,"whitespace")(h):m(h))}}const Nn={continuation:{tokenize:Kk},exit:$k,name:"list",tokenize:Zk},Xk={partial:!0,tokenize:ew},Qk={partial:!0,tokenize:Wk};function Zk(t,a,i){const u=this,s=u.events[u.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,f=0;return m;function m(v){const C=u.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(C==="listUnordered"?!u.containerState.marker||v===u.containerState.marker:Lc(v)){if(u.containerState.type||(u.containerState.type=C,t.enter(C,{_container:!0})),C==="listUnordered")return t.enter("listItemPrefix"),v===42||v===45?t.check(Tu,i,h)(v):h(v);if(!u.interrupt||v===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),p(v)}return i(v)}function p(v){return Lc(v)&&++f<10?(t.consume(v),p):(!u.interrupt||f<2)&&(u.containerState.marker?v===u.containerState.marker:v===41||v===46)?(t.exit("listItemValue"),h(v)):i(v)}function h(v){return t.enter("listItemMarker"),t.consume(v),t.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||v,t.check(Qa,u.interrupt?i:b,t.attempt(Xk,S,g))}function b(v){return u.containerState.initialBlankLine=!0,c++,S(v)}function g(v){return Te(v)?(t.enter("listItemPrefixWhitespace"),t.consume(v),t.exit("listItemPrefixWhitespace"),S):i(v)}function S(v){return u.containerState.size=c+u.sliceSerialize(t.exit("listItemPrefix"),!0).length,a(v)}}function Kk(t,a,i){const u=this;return u.containerState._closeFlow=void 0,t.check(Qa,s,c);function s(m){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Ne(t,a,"listItemIndent",u.containerState.size+1)(m)}function c(m){return u.containerState.furtherBlankLines||!Te(m)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,f(m)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,t.attempt(Qk,a,f)(m))}function f(m){return u.containerState._closeFlow=!0,u.interrupt=void 0,Ne(t,t.attempt(Nn,a,i),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m)}}function Wk(t,a,i){const u=this;return Ne(t,s,"listItemIndent",u.containerState.size+1);function s(c){const f=u.events[u.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===u.containerState.size?a(c):i(c)}}function $k(t){t.exit(this.containerState.type)}function ew(t,a,i){const u=this;return Ne(t,s,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const f=u.events[u.events.length-1];return!Te(c)&&f&&f[1].type==="listItemPrefixWhitespace"?a(c):i(c)}}const Kp={name:"setextUnderline",resolveTo:nw,tokenize:tw};function nw(t,a){let i=t.length,u,s,c;for(;i--;)if(t[i][0]==="enter"){if(t[i][1].type==="content"){u=i;break}t[i][1].type==="paragraph"&&(s=i)}else t[i][1].type==="content"&&t.splice(i,1),!c&&t[i][1].type==="definition"&&(c=i);const f={type:"setextHeading",start:{...t[u][1].start},end:{...t[t.length-1][1].end}};return t[s][1].type="setextHeadingText",c?(t.splice(s,0,["enter",f,a]),t.splice(c+1,0,["exit",t[u][1],a]),t[u][1].end={...t[c][1].end}):t[u][1]=f,t.push(["exit",f,a]),t}function tw(t,a,i){const u=this;let s;return c;function c(h){let b=u.events.length,g;for(;b--;)if(u.events[b][1].type!=="lineEnding"&&u.events[b][1].type!=="linePrefix"&&u.events[b][1].type!=="content"){g=u.events[b][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||g)?(t.enter("setextHeadingLine"),s=h,f(h)):i(h)}function f(h){return t.enter("setextHeadingLineSequence"),m(h)}function m(h){return h===s?(t.consume(h),m):(t.exit("setextHeadingLineSequence"),Te(h)?Ne(t,p,"lineSuffix")(h):p(h))}function p(h){return h===null||he(h)?(t.exit("setextHeadingLine"),a(h)):i(h)}}const lw={tokenize:iw};function iw(t){const a=this,i=t.attempt(Qa,u,t.attempt(this.parser.constructs.flowInitial,s,Ne(t,t.attempt(this.parser.constructs.flow,s,t.attempt(ok,s)),"linePrefix")));return i;function u(c){if(c===null){t.consume(c);return}return t.enter("lineEndingBlank"),t.consume(c),t.exit("lineEndingBlank"),a.currentConstruct=void 0,i}function s(c){if(c===null){t.consume(c);return}return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),a.currentConstruct=void 0,i}}const aw={resolveAll:dx()},rw=fx("string"),uw=fx("text");function fx(t){return{resolveAll:dx(t==="text"?sw:void 0),tokenize:a};function a(i){const u=this,s=this.parser.constructs[t],c=i.attempt(s,f,m);return f;function f(b){return h(b)?c(b):m(b)}function m(b){if(b===null){i.consume(b);return}return i.enter("data"),i.consume(b),p}function p(b){return h(b)?(i.exit("data"),c(b)):(i.consume(b),p)}function h(b){if(b===null)return!0;const g=s[b];let S=-1;if(g)for(;++S<g.length;){const v=g[S];if(!v.previous||v.previous.call(u,u.previous))return!0}return!1}}}function dx(t){return a;function a(i,u){let s=-1,c;for(;++s<=i.length;)c===void 0?i[s]&&i[s][1].type==="data"&&(c=s,s++):(!i[s]||i[s][1].type!=="data")&&(s!==c+2&&(i[c][1].end=i[s-1][1].end,i.splice(c+2,s-c-2),s=c+2),c=void 0);return t?t(i,u):i}}function sw(t,a){let i=0;for(;++i<=t.length;)if((i===t.length||t[i][1].type==="lineEnding")&&t[i-1][1].type==="data"){const u=t[i-1][1],s=a.sliceStream(u);let c=s.length,f=-1,m=0,p;for(;c--;){const h=s[c];if(typeof h=="string"){for(f=h.length;h.charCodeAt(f-1)===32;)m++,f--;if(f)break;f=-1}else if(h===-2)p=!0,m++;else if(h!==-1){c++;break}}if(a._contentTypeTextTrailing&&i===t.length&&(m=0),m){const h={type:i===t.length||p||m<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?f:u.start._bufferIndex+f,_index:u.start._index+c,line:u.end.line,column:u.end.column-m,offset:u.end.offset-m},end:{...u.end}};u.end={...h.start},u.start.offset===u.end.offset?Object.assign(u,h):(t.splice(i,0,["enter",h,a],["exit",h,a]),i+=2)}i++}return t}const ow={42:Nn,43:Nn,45:Nn,48:Nn,49:Nn,50:Nn,51:Nn,52:Nn,53:Nn,54:Nn,55:Nn,56:Nn,57:Nn,62:ix},cw={91:mk},fw={[-2]:gc,[-1]:gc,32:gc},dw={35:vk,42:Tu,45:[Kp,Tu],60:Ck,61:Kp,95:Tu,96:Qp,126:Qp},hw={38:rx,92:ax},mw={[-5]:xc,[-4]:xc,[-3]:xc,33:Ik,38:rx,42:Uc,60:[G2,Dk],91:Gk,92:[bk,ax],93:af,95:Uc,96:lk},pw={null:[Uc,aw]},gw={null:[42,95]},xw={null:[]},bw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:gw,contentInitial:cw,disable:xw,document:ow,flow:dw,flowInitial:fw,insideSpan:pw,string:hw,text:mw},Symbol.toStringTag,{value:"Module"}));function yw(t,a,i){let u={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const s={},c=[];let f=[],m=[];const p={attempt:ee(le),check:ee(V),consume:H,enter:D,exit:K,interrupt:ee(V,{interrupt:!0})},h={code:null,containerState:{},defineSkip:O,events:[],now:C,parser:t,previous:null,sliceSerialize:S,sliceStream:v,write:g};let b=a.tokenize.call(h,p);return a.resolveAll&&c.push(a),h;function g(P){return f=tt(f,P),z(),f[f.length-1]!==null?[]:(oe(a,0),h.events=Lu(c,h.events,h),h.events)}function S(P,Q){return Sw(v(P),Q)}function v(P){return vw(f,P)}function C(){const{_bufferIndex:P,_index:Q,line:de,column:ae,offset:ne}=u;return{_bufferIndex:P,_index:Q,line:de,column:ae,offset:ne}}function O(P){s[P.line]=P.column,A()}function z(){let P;for(;u._index<f.length;){const Q=f[u._index];if(typeof Q=="string")for(P=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===P&&u._bufferIndex<Q.length;)j(Q.charCodeAt(u._bufferIndex));else j(Q)}}function j(P){b=b(P)}function H(P){he(P)?(u.line++,u.column=1,u.offset+=P===-3?2:1,A()):P!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===f[u._index].length&&(u._bufferIndex=-1,u._index++)),h.previous=P}function D(P,Q){const de=Q||{};return de.type=P,de.start=C(),h.events.push(["enter",de,h]),m.push(de),de}function K(P){const Q=m.pop();return Q.end=C(),h.events.push(["exit",Q,h]),Q}function le(P,Q){oe(P,Q.from)}function V(P,Q){Q.restore()}function ee(P,Q){return de;function de(ae,ne,B){let Z,re,be,T;return Array.isArray(ae)?G(ae):"tokenize"in ae?G([ae]):M(ae);function M(ce){return Ee;function Ee(Je){const Ue=Je!==null&&ce[Je],In=Je!==null&&ce.null,xt=[...Array.isArray(Ue)?Ue:Ue?[Ue]:[],...Array.isArray(In)?In:In?[In]:[]];return G(xt)(Je)}}function G(ce){return Z=ce,re=0,ce.length===0?B:w(ce[re])}function w(ce){return Ee;function Ee(Je){return T=W(),be=ce,ce.partial||(h.currentConstruct=ce),ce.name&&h.parser.constructs.disable.null.includes(ce.name)?pe():ce.tokenize.call(Q?Object.assign(Object.create(h),Q):h,p,ie,pe)(Je)}}function ie(ce){return P(be,T),ne}function pe(ce){return T.restore(),++re<Z.length?w(Z[re]):B}}}function oe(P,Q){P.resolveAll&&!c.includes(P)&&c.push(P),P.resolve&&Vn(h.events,Q,h.events.length-Q,P.resolve(h.events.slice(Q),h)),P.resolveTo&&(h.events=P.resolveTo(h.events,h))}function W(){const P=C(),Q=h.previous,de=h.currentConstruct,ae=h.events.length,ne=Array.from(m);return{from:ae,restore:B};function B(){u=P,h.previous=Q,h.currentConstruct=de,h.events.length=ae,m=ne,A()}}function A(){u.line in s&&u.column<2&&(u.column=s[u.line],u.offset+=s[u.line]-1)}}function vw(t,a){const i=a.start._index,u=a.start._bufferIndex,s=a.end._index,c=a.end._bufferIndex;let f;if(i===s)f=[t[i].slice(u,c)];else{if(f=t.slice(i,s),u>-1){const m=f[0];typeof m=="string"?f[0]=m.slice(u):f.shift()}c>0&&f.push(t[s].slice(0,c))}return f}function Sw(t,a){let i=-1;const u=[];let s;for(;++i<t.length;){const c=t[i];let f;if(typeof c=="string")f=c;else switch(c){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=a?" ":"	";break}case-1:{if(!a&&s)continue;f=" ";break}default:f=String.fromCharCode(c)}s=c===-2,u.push(f)}return u.join("")}function kw(t){const u={constructs:tx([bw,...(t||{}).extensions||[]]),content:s(U2),defined:[],document:s(H2),flow:s(lw),lazy:{},string:s(rw),text:s(uw)};return u;function s(c){return f;function f(m){return yw(u,c,m)}}}function ww(t){for(;!ux(t););return t}const Wp=/[\0\t\n\r]/g;function Cw(){let t=1,a="",i=!0,u;return s;function s(c,f,m){const p=[];let h,b,g,S,v;for(c=a+(typeof c=="string"?c.toString():new TextDecoder(f||void 0).decode(c)),g=0,a="",i&&(c.charCodeAt(0)===65279&&g++,i=void 0);g<c.length;){if(Wp.lastIndex=g,h=Wp.exec(c),S=h&&h.index!==void 0?h.index:c.length,v=c.charCodeAt(S),!h){a=c.slice(g);break}if(v===10&&g===S&&u)p.push(-3),u=void 0;else switch(u&&(p.push(-5),u=void 0),g<S&&(p.push(c.slice(g,S)),t+=S-g),v){case 0:{p.push(65533),t++;break}case 9:{for(b=Math.ceil(t/4)*4,p.push(-2);t++<b;)p.push(-1);break}case 10:{p.push(-4),t=1;break}default:u=!0,t=1}g=S+1}return m&&(u&&p.push(-5),a&&p.push(a),p.push(null)),p}}const Tw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ew(t){return t.replace(Tw,Aw)}function Aw(t,a,i){if(a)return a;if(i.charCodeAt(0)===35){const s=i.charCodeAt(1),c=s===120||s===88;return lx(i.slice(c?2:1),c?16:10)}return lf(i)||t}const hx={}.hasOwnProperty;function jw(t,a,i){return typeof a!="string"&&(i=a,a=void 0),Mw(i)(ww(kw(i).document().write(Cw()(t,a,!0))))}function Mw(t){const a={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(Hl),autolinkProtocol:W,autolinkEmail:W,atxHeading:c(Ul),blockQuote:c(In),characterEscape:W,characterReference:W,codeFenced:c(xt),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:c(xt,f),codeText:c(Oi,f),codeTextData:W,data:W,codeFlowValue:W,definition:c(Ka),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:c(bt),hardBreakEscape:c(Bl),hardBreakTrailing:c(Bl),htmlFlow:c(Wa,f),htmlFlowData:W,htmlText:c(Wa,f),htmlTextData:W,image:c($a),label:f,link:c(Hl),listItem:c(zi),listItemValue:S,listOrdered:c(ql,g),listUnordered:c(ql),paragraph:c(qu),reference:w,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:c(Ul),strong:c(Vu),thematicBreak:c(Iu)},exit:{atxHeading:p(),atxHeadingSequence:le,autolink:p(),autolinkEmail:Ue,autolinkProtocol:Je,blockQuote:p(),characterEscapeValue:A,characterReferenceMarkerHexadecimal:pe,characterReferenceMarkerNumeric:pe,characterReferenceValue:ce,characterReference:Ee,codeFenced:p(z),codeFencedFence:O,codeFencedFenceInfo:v,codeFencedFenceMeta:C,codeFlowValue:A,codeIndented:p(j),codeText:p(ne),codeTextData:A,data:A,definition:p(),definitionDestinationString:K,definitionLabelString:H,definitionTitleString:D,emphasis:p(),hardBreakEscape:p(Q),hardBreakTrailing:p(Q),htmlFlow:p(de),htmlFlowData:A,htmlText:p(ae),htmlTextData:A,image:p(Z),label:be,labelText:re,lineEnding:P,link:p(B),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:ie,resourceDestinationString:T,resourceTitleString:M,resource:G,setextHeading:p(oe),setextHeadingLineSequence:ee,setextHeadingText:V,strong:p(),thematicBreak:p()}};mx(a,(t||{}).mdastExtensions||[]);const i={};return u;function u(Y){let te={type:"root",children:[]};const ge={stack:[te],tokenStack:[],config:a,enter:m,exit:h,buffer:f,resume:b,data:i},ke=[];let Oe=-1;for(;++Oe<Y.length;)if(Y[Oe][1].type==="listOrdered"||Y[Oe][1].type==="listUnordered")if(Y[Oe][0]==="enter")ke.push(Oe);else{const _n=ke.pop();Oe=s(Y,_n,Oe)}for(Oe=-1;++Oe<Y.length;){const _n=a[Y[Oe][0]];hx.call(_n,Y[Oe][1].type)&&_n[Y[Oe][1].type].call(Object.assign({sliceSerialize:Y[Oe][2].sliceSerialize},ge),Y[Oe][1])}if(ge.tokenStack.length>0){const _n=ge.tokenStack[ge.tokenStack.length-1];(_n[1]||$p).call(ge,void 0,_n[0])}for(te.position={start:dl(Y.length>0?Y[0][1].start:{line:1,column:1,offset:0}),end:dl(Y.length>0?Y[Y.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<a.transforms.length;)te=a.transforms[Oe](te)||te;return te}function s(Y,te,ge){let ke=te-1,Oe=-1,_n=!1,yt,yn,rn,kn;for(;++ke<=ge;){const Ve=Y[ke];switch(Ve[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ve[0]==="enter"?Oe++:Oe--,kn=void 0;break}case"lineEndingBlank":{Ve[0]==="enter"&&(yt&&!kn&&!Oe&&!rn&&(rn=ke),kn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:kn=void 0}if(!Oe&&Ve[0]==="enter"&&Ve[1].type==="listItemPrefix"||Oe===-1&&Ve[0]==="exit"&&(Ve[1].type==="listUnordered"||Ve[1].type==="listOrdered")){if(yt){let Vt=ke;for(yn=void 0;Vt--;){const lt=Y[Vt];if(lt[1].type==="lineEnding"||lt[1].type==="lineEndingBlank"){if(lt[0]==="exit")continue;yn&&(Y[yn][1].type="lineEndingBlank",_n=!0),lt[1].type="lineEnding",yn=Vt}else if(!(lt[1].type==="linePrefix"||lt[1].type==="blockQuotePrefix"||lt[1].type==="blockQuotePrefixWhitespace"||lt[1].type==="blockQuoteMarker"||lt[1].type==="listItemIndent"))break}rn&&(!yn||rn<yn)&&(yt._spread=!0),yt.end=Object.assign({},yn?Y[yn][1].start:Ve[1].end),Y.splice(yn||ke,0,["exit",yt,Ve[2]]),ke++,ge++}if(Ve[1].type==="listItemPrefix"){const Vt={type:"listItem",_spread:!1,start:Object.assign({},Ve[1].start),end:void 0};yt=Vt,Y.splice(ke,0,["enter",Vt,Ve[2]]),ke++,ge++,rn=void 0,kn=!0}}}return Y[te][1]._spread=_n,ge}function c(Y,te){return ge;function ge(ke){m.call(this,Y(ke),ke),te&&te.call(this,ke)}}function f(){this.stack.push({type:"fragment",children:[]})}function m(Y,te,ge){this.stack[this.stack.length-1].children.push(Y),this.stack.push(Y),this.tokenStack.push([te,ge||void 0]),Y.position={start:dl(te.start),end:void 0}}function p(Y){return te;function te(ge){Y&&Y.call(this,ge),h.call(this,ge)}}function h(Y,te){const ge=this.stack.pop(),ke=this.tokenStack.pop();if(ke)ke[0].type!==Y.type&&(te?te.call(this,Y,ke[0]):(ke[1]||$p).call(this,Y,ke[0]));else throw new Error("Cannot close `"+Y.type+"` ("+Ua({start:Y.start,end:Y.end})+"): it’s not open");ge.position.end=dl(Y.end)}function b(){return tf(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function S(Y){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(Y),10),this.data.expectingFirstListItemValue=void 0}}function v(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.lang=Y}function C(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.meta=Y}function O(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function z(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function j(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y.replace(/(\r?\n|\r)$/g,"")}function H(Y){const te=this.resume(),ge=this.stack[this.stack.length-1];ge.label=te,ge.identifier=ut(this.sliceSerialize(Y)).toLowerCase()}function D(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.title=Y}function K(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.url=Y}function le(Y){const te=this.stack[this.stack.length-1];if(!te.depth){const ge=this.sliceSerialize(Y).length;te.depth=ge}}function V(){this.data.setextHeadingSlurpLineEnding=!0}function ee(Y){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(Y).codePointAt(0)===61?1:2}function oe(){this.data.setextHeadingSlurpLineEnding=void 0}function W(Y){const ge=this.stack[this.stack.length-1].children;let ke=ge[ge.length-1];(!ke||ke.type!=="text")&&(ke=bn(),ke.position={start:dl(Y.start),end:void 0},ge.push(ke)),this.stack.push(ke)}function A(Y){const te=this.stack.pop();te.value+=this.sliceSerialize(Y),te.position.end=dl(Y.end)}function P(Y){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ge=te.children[te.children.length-1];ge.position.end=dl(Y.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&a.canContainEols.includes(te.type)&&(W.call(this,Y),A.call(this,Y))}function Q(){this.data.atHardBreak=!0}function de(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function ae(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function ne(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function B(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=te,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function Z(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=te,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function re(Y){const te=this.sliceSerialize(Y),ge=this.stack[this.stack.length-2];ge.label=Ew(te),ge.identifier=ut(te).toLowerCase()}function be(){const Y=this.stack[this.stack.length-1],te=this.resume(),ge=this.stack[this.stack.length-1];if(this.data.inReference=!0,ge.type==="link"){const ke=Y.children;ge.children=ke}else ge.alt=te}function T(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.url=Y}function M(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.title=Y}function G(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function ie(Y){const te=this.resume(),ge=this.stack[this.stack.length-1];ge.label=te,ge.identifier=ut(this.sliceSerialize(Y)).toLowerCase(),this.data.referenceType="full"}function pe(Y){this.data.characterReferenceType=Y.type}function ce(Y){const te=this.sliceSerialize(Y),ge=this.data.characterReferenceType;let ke;ge?(ke=lx(te,ge==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ke=lf(te);const Oe=this.stack[this.stack.length-1];Oe.value+=ke}function Ee(Y){const te=this.stack.pop();te.position.end=dl(Y.end)}function Je(Y){A.call(this,Y);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(Y)}function Ue(Y){A.call(this,Y);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(Y)}function In(){return{type:"blockquote",children:[]}}function xt(){return{type:"code",lang:null,meta:null,value:""}}function Oi(){return{type:"inlineCode",value:""}}function Ka(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function bt(){return{type:"emphasis",children:[]}}function Ul(){return{type:"heading",depth:0,children:[]}}function Bl(){return{type:"break"}}function Wa(){return{type:"html",value:""}}function $a(){return{type:"image",title:null,url:"",alt:null}}function Hl(){return{type:"link",title:null,url:"",children:[]}}function ql(Y){return{type:"list",ordered:Y.type==="listOrdered",start:null,spread:Y._spread,children:[]}}function zi(Y){return{type:"listItem",spread:Y._spread,checked:null,children:[]}}function qu(){return{type:"paragraph",children:[]}}function Vu(){return{type:"strong",children:[]}}function bn(){return{type:"text",value:""}}function Iu(){return{type:"thematicBreak"}}}function dl(t){return{line:t.line,column:t.column,offset:t.offset}}function mx(t,a){let i=-1;for(;++i<a.length;){const u=a[i];Array.isArray(u)?mx(t,u):Nw(t,u)}}function Nw(t,a){let i;for(i in a)if(hx.call(a,i))switch(i){case"canContainEols":{const u=a[i];u&&t[i].push(...u);break}case"transforms":{const u=a[i];u&&t[i].push(...u);break}case"enter":case"exit":{const u=a[i];u&&Object.assign(t[i],u);break}}}function $p(t,a){throw t?new Error("Cannot close `"+t.type+"` ("+Ua({start:t.start,end:t.end})+"): a different token (`"+a.type+"`, "+Ua({start:a.start,end:a.end})+") is open"):new Error("Cannot close document, a token (`"+a.type+"`, "+Ua({start:a.start,end:a.end})+") is still open")}function Dw(t){const a=this;a.parser=i;function i(u){return jw(u,{...a.data("settings"),...t,extensions:a.data("micromarkExtensions")||[],mdastExtensions:a.data("fromMarkdownExtensions")||[]})}}function _w(t,a){const i={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(a),!0)};return t.patch(a,i),t.applyData(a,i)}function Rw(t,a){const i={type:"element",tagName:"br",properties:{},children:[]};return t.patch(a,i),[t.applyData(a,i),{type:"text",value:`
`}]}function Ow(t,a){const i=a.value?a.value+`
`:"",u={},s=a.lang?a.lang.split(/\s+/):[];s.length>0&&(u.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:u,children:[{type:"text",value:i}]};return a.meta&&(c.data={meta:a.meta}),t.patch(a,c),c=t.applyData(a,c),c={type:"element",tagName:"pre",properties:{},children:[c]},t.patch(a,c),c}function zw(t,a){const i={type:"element",tagName:"del",properties:{},children:t.all(a)};return t.patch(a,i),t.applyData(a,i)}function Lw(t,a){const i={type:"element",tagName:"em",properties:{},children:t.all(a)};return t.patch(a,i),t.applyData(a,i)}function Uw(t,a){const i=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",u=String(a.identifier).toUpperCase(),s=Ri(u.toLowerCase()),c=t.footnoteOrder.indexOf(u);let f,m=t.footnoteCounts.get(u);m===void 0?(m=0,t.footnoteOrder.push(u),f=t.footnoteOrder.length):f=c+1,m+=1,t.footnoteCounts.set(u,m);const p={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+s,id:i+"fnref-"+s+(m>1?"-"+m:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};t.patch(a,p);const h={type:"element",tagName:"sup",properties:{},children:[p]};return t.patch(a,h),t.applyData(a,h)}function Bw(t,a){const i={type:"element",tagName:"h"+a.depth,properties:{},children:t.all(a)};return t.patch(a,i),t.applyData(a,i)}function Hw(t,a){if(t.options.allowDangerousHtml){const i={type:"raw",value:a.value};return t.patch(a,i),t.applyData(a,i)}}function px(t,a){const i=a.referenceType;let u="]";if(i==="collapsed"?u+="[]":i==="full"&&(u+="["+(a.label||a.identifier)+"]"),a.type==="imageReference")return[{type:"text",value:"!["+a.alt+u}];const s=t.all(a),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const f=s[s.length-1];return f&&f.type==="text"?f.value+=u:s.push({type:"text",value:u}),s}function qw(t,a){const i=String(a.identifier).toUpperCase(),u=t.definitionById.get(i);if(!u)return px(t,a);const s={src:Ri(u.url||""),alt:a.alt};u.title!==null&&u.title!==void 0&&(s.title=u.title);const c={type:"element",tagName:"img",properties:s,children:[]};return t.patch(a,c),t.applyData(a,c)}function Vw(t,a){const i={src:Ri(a.url)};a.alt!==null&&a.alt!==void 0&&(i.alt=a.alt),a.title!==null&&a.title!==void 0&&(i.title=a.title);const u={type:"element",tagName:"img",properties:i,children:[]};return t.patch(a,u),t.applyData(a,u)}function Iw(t,a){const i={type:"text",value:a.value.replace(/\r?\n|\r/g," ")};t.patch(a,i);const u={type:"element",tagName:"code",properties:{},children:[i]};return t.patch(a,u),t.applyData(a,u)}function Fw(t,a){const i=String(a.identifier).toUpperCase(),u=t.definitionById.get(i);if(!u)return px(t,a);const s={href:Ri(u.url||"")};u.title!==null&&u.title!==void 0&&(s.title=u.title);const c={type:"element",tagName:"a",properties:s,children:t.all(a)};return t.patch(a,c),t.applyData(a,c)}function Gw(t,a){const i={href:Ri(a.url)};a.title!==null&&a.title!==void 0&&(i.title=a.title);const u={type:"element",tagName:"a",properties:i,children:t.all(a)};return t.patch(a,u),t.applyData(a,u)}function Yw(t,a,i){const u=t.all(a),s=i?Pw(i):gx(a),c={},f=[];if(typeof a.checked=="boolean"){const b=u[0];let g;b&&b.type==="element"&&b.tagName==="p"?g=b:(g={type:"element",tagName:"p",properties:{},children:[]},u.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:a.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let m=-1;for(;++m<u.length;){const b=u[m];(s||m!==0||b.type!=="element"||b.tagName!=="p")&&f.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!s?f.push(...b.children):f.push(b)}const p=u[u.length-1];p&&(s||p.type!=="element"||p.tagName!=="p")&&f.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:c,children:f};return t.patch(a,h),t.applyData(a,h)}function Pw(t){let a=!1;if(t.type==="list"){a=t.spread||!1;const i=t.children;let u=-1;for(;!a&&++u<i.length;)a=gx(i[u])}return a}function gx(t){const a=t.spread;return a??t.children.length>1}function Jw(t,a){const i={},u=t.all(a);let s=-1;for(typeof a.start=="number"&&a.start!==1&&(i.start=a.start);++s<u.length;){const f=u[s];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const c={type:"element",tagName:a.ordered?"ol":"ul",properties:i,children:t.wrap(u,!0)};return t.patch(a,c),t.applyData(a,c)}function Xw(t,a){const i={type:"element",tagName:"p",properties:{},children:t.all(a)};return t.patch(a,i),t.applyData(a,i)}function Qw(t,a){const i={type:"root",children:t.wrap(t.all(a))};return t.patch(a,i),t.applyData(a,i)}function Zw(t,a){const i={type:"element",tagName:"strong",properties:{},children:t.all(a)};return t.patch(a,i),t.applyData(a,i)}function Kw(t,a){const i=t.all(a),u=i.shift(),s=[];if(u){const f={type:"element",tagName:"thead",properties:{},children:t.wrap([u],!0)};t.patch(a.children[0],f),s.push(f)}if(i.length>0){const f={type:"element",tagName:"tbody",properties:{},children:t.wrap(i,!0)},m=Wc(a.children[1]),p=Qg(a.children[a.children.length-1]);m&&p&&(f.position={start:m,end:p}),s.push(f)}const c={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(a,c),t.applyData(a,c)}function Ww(t,a,i){const u=i?i.children:void 0,c=(u?u.indexOf(a):1)===0?"th":"td",f=i&&i.type==="table"?i.align:void 0,m=f?f.length:a.children.length;let p=-1;const h=[];for(;++p<m;){const g=a.children[p],S={},v=f?f[p]:void 0;v&&(S.align=v);let C={type:"element",tagName:c,properties:S,children:[]};g&&(C.children=t.all(g),t.patch(g,C),C=t.applyData(g,C)),h.push(C)}const b={type:"element",tagName:"tr",properties:{},children:t.wrap(h,!0)};return t.patch(a,b),t.applyData(a,b)}function $w(t,a){const i={type:"element",tagName:"td",properties:{},children:t.all(a)};return t.patch(a,i),t.applyData(a,i)}const eg=9,ng=32;function eC(t){const a=String(t),i=/\r?\n|\r/g;let u=i.exec(a),s=0;const c=[];for(;u;)c.push(tg(a.slice(s,u.index),s>0,!0),u[0]),s=u.index+u[0].length,u=i.exec(a);return c.push(tg(a.slice(s),s>0,!1)),c.join("")}function tg(t,a,i){let u=0,s=t.length;if(a){let c=t.codePointAt(u);for(;c===eg||c===ng;)u++,c=t.codePointAt(u)}if(i){let c=t.codePointAt(s-1);for(;c===eg||c===ng;)s--,c=t.codePointAt(s-1)}return s>u?t.slice(u,s):""}function nC(t,a){const i={type:"text",value:eC(String(a.value))};return t.patch(a,i),t.applyData(a,i)}function tC(t,a){const i={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(a,i),t.applyData(a,i)}const lC={blockquote:_w,break:Rw,code:Ow,delete:zw,emphasis:Lw,footnoteReference:Uw,heading:Bw,html:Hw,imageReference:qw,image:Vw,inlineCode:Iw,linkReference:Fw,link:Gw,listItem:Yw,list:Jw,paragraph:Xw,root:Qw,strong:Zw,table:Kw,tableCell:$w,tableRow:Ww,text:nC,thematicBreak:tC,toml:bu,yaml:bu,definition:bu,footnoteDefinition:bu};function bu(){}const xx=-1,Uu=0,Ha=1,Nu=2,rf=3,uf=4,sf=5,of=6,bx=7,yx=8,lg=typeof self=="object"?self:globalThis,iC=(t,a)=>{const i=(s,c)=>(t.set(c,s),s),u=s=>{if(t.has(s))return t.get(s);const[c,f]=a[s];switch(c){case Uu:case xx:return i(f,s);case Ha:{const m=i([],s);for(const p of f)m.push(u(p));return m}case Nu:{const m=i({},s);for(const[p,h]of f)m[u(p)]=u(h);return m}case rf:return i(new Date(f),s);case uf:{const{source:m,flags:p}=f;return i(new RegExp(m,p),s)}case sf:{const m=i(new Map,s);for(const[p,h]of f)m.set(u(p),u(h));return m}case of:{const m=i(new Set,s);for(const p of f)m.add(u(p));return m}case bx:{const{name:m,message:p}=f;return i(new lg[m](p),s)}case yx:return i(BigInt(f),s);case"BigInt":return i(Object(BigInt(f)),s);case"ArrayBuffer":return i(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:m}=new Uint8Array(f);return i(new DataView(m),f)}}return i(new lg[c](f),s)};return u},ig=t=>iC(new Map,t)(0),Ei="",{toString:aC}={},{keys:rC}=Object,za=t=>{const a=typeof t;if(a!=="object"||!t)return[Uu,a];const i=aC.call(t).slice(8,-1);switch(i){case"Array":return[Ha,Ei];case"Object":return[Nu,Ei];case"Date":return[rf,Ei];case"RegExp":return[uf,Ei];case"Map":return[sf,Ei];case"Set":return[of,Ei];case"DataView":return[Ha,i]}return i.includes("Array")?[Ha,i]:i.includes("Error")?[bx,i]:[Nu,i]},yu=([t,a])=>t===Uu&&(a==="function"||a==="symbol"),uC=(t,a,i,u)=>{const s=(f,m)=>{const p=u.push(f)-1;return i.set(m,p),p},c=f=>{if(i.has(f))return i.get(f);let[m,p]=za(f);switch(m){case Uu:{let b=f;switch(p){case"bigint":m=yx,b=f.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+p);b=null;break;case"undefined":return s([xx],f)}return s([m,b],f)}case Ha:{if(p){let S=f;return p==="DataView"?S=new Uint8Array(f.buffer):p==="ArrayBuffer"&&(S=new Uint8Array(f)),s([p,[...S]],f)}const b=[],g=s([m,b],f);for(const S of f)b.push(c(S));return g}case Nu:{if(p)switch(p){case"BigInt":return s([p,f.toString()],f);case"Boolean":case"Number":case"String":return s([p,f.valueOf()],f)}if(a&&"toJSON"in f)return c(f.toJSON());const b=[],g=s([m,b],f);for(const S of rC(f))(t||!yu(za(f[S])))&&b.push([c(S),c(f[S])]);return g}case rf:return s([m,f.toISOString()],f);case uf:{const{source:b,flags:g}=f;return s([m,{source:b,flags:g}],f)}case sf:{const b=[],g=s([m,b],f);for(const[S,v]of f)(t||!(yu(za(S))||yu(za(v))))&&b.push([c(S),c(v)]);return g}case of:{const b=[],g=s([m,b],f);for(const S of f)(t||!yu(za(S)))&&b.push(c(S));return g}}const{message:h}=f;return s([m,{name:p,message:h}],f)};return c},ag=(t,{json:a,lossy:i}={})=>{const u=[];return uC(!(a||i),!!a,new Map,u)(t),u},Du=typeof structuredClone=="function"?(t,a)=>a&&("json"in a||"lossy"in a)?ig(ag(t,a)):structuredClone(t):(t,a)=>ig(ag(t,a));function sC(t,a){const i=[{type:"text",value:"↩"}];return a>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(a)}]}),i}function oC(t,a){return"Back to reference "+(t+1)+(a>1?"-"+a:"")}function cC(t){const a=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=t.options.footnoteBackContent||sC,u=t.options.footnoteBackLabel||oC,s=t.options.footnoteLabel||"Footnotes",c=t.options.footnoteLabelTagName||"h2",f=t.options.footnoteLabelProperties||{className:["sr-only"]},m=[];let p=-1;for(;++p<t.footnoteOrder.length;){const h=t.footnoteById.get(t.footnoteOrder[p]);if(!h)continue;const b=t.all(h),g=String(h.identifier).toUpperCase(),S=Ri(g.toLowerCase());let v=0;const C=[],O=t.footnoteCounts.get(g);for(;O!==void 0&&++v<=O;){C.length>0&&C.push({type:"text",value:" "});let H=typeof i=="string"?i:i(p,v);typeof H=="string"&&(H={type:"text",value:H}),C.push({type:"element",tagName:"a",properties:{href:"#"+a+"fnref-"+S+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(p,v),className:["data-footnote-backref"]},children:Array.isArray(H)?H:[H]})}const z=b[b.length-1];if(z&&z.type==="element"&&z.tagName==="p"){const H=z.children[z.children.length-1];H&&H.type==="text"?H.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(...C)}else b.push(...C);const j={type:"element",tagName:"li",properties:{id:a+"fn-"+S},children:t.wrap(b,!0)};t.patch(h,j),m.push(j)}if(m.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...Du(f),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(m,!0)},{type:"text",value:`
`}]}}const Bu=(function(t){if(t==null)return mC;if(typeof t=="function")return Hu(t);if(typeof t=="object")return Array.isArray(t)?fC(t):dC(t);if(typeof t=="string")return hC(t);throw new Error("Expected function, string, or object as test")});function fC(t){const a=[];let i=-1;for(;++i<t.length;)a[i]=Bu(t[i]);return Hu(u);function u(...s){let c=-1;for(;++c<a.length;)if(a[c].apply(this,s))return!0;return!1}}function dC(t){const a=t;return Hu(i);function i(u){const s=u;let c;for(c in t)if(s[c]!==a[c])return!1;return!0}}function hC(t){return Hu(a);function a(i){return i&&i.type===t}}function Hu(t){return a;function a(i,u,s){return!!(pC(i)&&t.call(this,i,typeof u=="number"?u:void 0,s||void 0))}}function mC(){return!0}function pC(t){return t!==null&&typeof t=="object"&&"type"in t}const vx=[],gC=!0,Bc=!1,xC="skip";function Sx(t,a,i,u){let s;typeof a=="function"&&typeof i!="function"?(u=i,i=a):s=a;const c=Bu(s),f=u?-1:1;m(t,void 0,[])();function m(p,h,b){const g=p&&typeof p=="object"?p:{};if(typeof g.type=="string"){const v=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(S,"name",{value:"node ("+(p.type+(v?"<"+v+">":""))+")"})}return S;function S(){let v=vx,C,O,z;if((!a||c(p,h,b[b.length-1]||void 0))&&(v=bC(i(p,b)),v[0]===Bc))return v;if("children"in p&&p.children){const j=p;if(j.children&&v[0]!==xC)for(O=(u?j.children.length:-1)+f,z=b.concat(j);O>-1&&O<j.children.length;){const H=j.children[O];if(C=m(H,O,z)(),C[0]===Bc)return C;O=typeof C[1]=="number"?C[1]:O+f}}return v}}}function bC(t){return Array.isArray(t)?t:typeof t=="number"?[gC,t]:t==null?vx:[t]}function cf(t,a,i,u){let s,c,f;typeof a=="function"&&typeof i!="function"?(c=void 0,f=a,s=i):(c=a,f=i,s=u),Sx(t,c,m,s);function m(p,h){const b=h[h.length-1],g=b?b.children.indexOf(p):void 0;return f(p,g,b)}}const Hc={}.hasOwnProperty,yC={};function vC(t,a){const i=a||yC,u=new Map,s=new Map,c=new Map,f={...lC,...i.handlers},m={all:h,applyData:kC,definitionById:u,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:f,one:p,options:i,patch:SC,wrap:CC};return cf(t,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const g=b.type==="definition"?u:s,S=String(b.identifier).toUpperCase();g.has(S)||g.set(S,b)}}),m;function p(b,g){const S=b.type,v=m.handlers[S];if(Hc.call(m.handlers,S)&&v)return v(m,b,g);if(m.options.passThrough&&m.options.passThrough.includes(S)){if("children"in b){const{children:O,...z}=b,j=Du(z);return j.children=m.all(b),j}return Du(b)}return(m.options.unknownHandler||wC)(m,b,g)}function h(b){const g=[];if("children"in b){const S=b.children;let v=-1;for(;++v<S.length;){const C=m.one(S[v],b);if(C){if(v&&S[v-1].type==="break"&&(!Array.isArray(C)&&C.type==="text"&&(C.value=rg(C.value)),!Array.isArray(C)&&C.type==="element")){const O=C.children[0];O&&O.type==="text"&&(O.value=rg(O.value))}Array.isArray(C)?g.push(...C):g.push(C)}}}return g}}function SC(t,a){t.position&&(a.position=o2(t))}function kC(t,a){let i=a;if(t&&t.data){const u=t.data.hName,s=t.data.hChildren,c=t.data.hProperties;if(typeof u=="string")if(i.type==="element")i.tagName=u;else{const f="children"in i?i.children:[i];i={type:"element",tagName:u,properties:{},children:f}}i.type==="element"&&c&&Object.assign(i.properties,Du(c)),"children"in i&&i.children&&s!==null&&s!==void 0&&(i.children=s)}return i}function wC(t,a){const i=a.data||{},u="value"in a&&!(Hc.call(i,"hProperties")||Hc.call(i,"hChildren"))?{type:"text",value:a.value}:{type:"element",tagName:"div",properties:{},children:t.all(a)};return t.patch(a,u),t.applyData(a,u)}function CC(t,a){const i=[];let u=-1;for(a&&i.push({type:"text",value:`
`});++u<t.length;)u&&i.push({type:"text",value:`
`}),i.push(t[u]);return a&&t.length>0&&i.push({type:"text",value:`
`}),i}function rg(t){let a=0,i=t.charCodeAt(a);for(;i===9||i===32;)a++,i=t.charCodeAt(a);return t.slice(a)}function ug(t,a){const i=vC(t,a),u=i.one(t,void 0),s=cC(i),c=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function TC(t,a){return t&&"run"in t?async function(i,u){const s=ug(i,{file:u,...a});await t.run(s,u)}:function(i,u){return ug(i,{file:u,...t||a})}}function sg(t){if(t)throw t}var bc,og;function EC(){if(og)return bc;og=1;var t=Object.prototype.hasOwnProperty,a=Object.prototype.toString,i=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):a.call(h)==="[object Array]"},c=function(h){if(!h||a.call(h)!=="[object Object]")return!1;var b=t.call(h,"constructor"),g=h.constructor&&h.constructor.prototype&&t.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!b&&!g)return!1;var S;for(S in h);return typeof S>"u"||t.call(h,S)},f=function(h,b){i&&b.name==="__proto__"?i(h,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):h[b.name]=b.newValue},m=function(h,b){if(b==="__proto__")if(t.call(h,b)){if(u)return u(h,b).value}else return;return h[b]};return bc=function p(){var h,b,g,S,v,C,O=arguments[0],z=1,j=arguments.length,H=!1;for(typeof O=="boolean"&&(H=O,O=arguments[1]||{},z=2),(O==null||typeof O!="object"&&typeof O!="function")&&(O={});z<j;++z)if(h=arguments[z],h!=null)for(b in h)g=m(O,b),S=m(h,b),O!==S&&(H&&S&&(c(S)||(v=s(S)))?(v?(v=!1,C=g&&s(g)?g:[]):C=g&&c(g)?g:{},f(O,{name:b,newValue:p(H,C,S)})):typeof S<"u"&&f(O,{name:b,newValue:S}));return O},bc}var AC=EC();const yc=Fc(AC);function qc(t){if(typeof t!="object"||t===null)return!1;const a=Object.getPrototypeOf(t);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function jC(){const t=[],a={run:i,use:u};return a;function i(...s){let c=-1;const f=s.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);m(null,...s);function m(p,...h){const b=t[++c];let g=-1;if(p){f(p);return}for(;++g<s.length;)(h[g]===null||h[g]===void 0)&&(h[g]=s[g]);s=h,b?MC(b,m)(...h):f(null,...h)}}function u(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),a}}function MC(t,a){let i;return u;function u(...f){const m=t.length>f.length;let p;m&&f.push(s);try{p=t.apply(this,f)}catch(h){const b=h;if(m&&i)throw b;return s(b)}m||(p&&p.then&&typeof p.then=="function"?p.then(c,s):p instanceof Error?s(p):c(p))}function s(f,...m){i||(i=!0,a(f,...m))}function c(f){s(null,f)}}const mt={basename:NC,dirname:DC,extname:_C,join:RC,sep:"/"};function NC(t,a){if(a!==void 0&&typeof a!="string")throw new TypeError('"ext" argument must be a string');Za(t);let i=0,u=-1,s=t.length,c;if(a===void 0||a.length===0||a.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(c){i=s+1;break}}else u<0&&(c=!0,u=s+1);return u<0?"":t.slice(i,u)}if(a===t)return"";let f=-1,m=a.length-1;for(;s--;)if(t.codePointAt(s)===47){if(c){i=s+1;break}}else f<0&&(c=!0,f=s+1),m>-1&&(t.codePointAt(s)===a.codePointAt(m--)?m<0&&(u=s):(m=-1,u=f));return i===u?u=f:u<0&&(u=t.length),t.slice(i,u)}function DC(t){if(Za(t),t.length===0)return".";let a=-1,i=t.length,u;for(;--i;)if(t.codePointAt(i)===47){if(u){a=i;break}}else u||(u=!0);return a<0?t.codePointAt(0)===47?"/":".":a===1&&t.codePointAt(0)===47?"//":t.slice(0,a)}function _C(t){Za(t);let a=t.length,i=-1,u=0,s=-1,c=0,f;for(;a--;){const m=t.codePointAt(a);if(m===47){if(f){u=a+1;break}continue}i<0&&(f=!0,i=a+1),m===46?s<0?s=a:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||i<0||c===0||c===1&&s===i-1&&s===u+1?"":t.slice(s,i)}function RC(...t){let a=-1,i;for(;++a<t.length;)Za(t[a]),t[a]&&(i=i===void 0?t[a]:i+"/"+t[a]);return i===void 0?".":OC(i)}function OC(t){Za(t);const a=t.codePointAt(0)===47;let i=zC(t,!a);return i.length===0&&!a&&(i="."),i.length>0&&t.codePointAt(t.length-1)===47&&(i+="/"),a?"/"+i:i}function zC(t,a){let i="",u=0,s=-1,c=0,f=-1,m,p;for(;++f<=t.length;){if(f<t.length)m=t.codePointAt(f);else{if(m===47)break;m=47}if(m===47){if(!(s===f-1||c===1))if(s!==f-1&&c===2){if(i.length<2||u!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(p=i.lastIndexOf("/"),p!==i.length-1){p<0?(i="",u=0):(i=i.slice(0,p),u=i.length-1-i.lastIndexOf("/")),s=f,c=0;continue}}else if(i.length>0){i="",u=0,s=f,c=0;continue}}a&&(i=i.length>0?i+"/..":"..",u=2)}else i.length>0?i+="/"+t.slice(s+1,f):i=t.slice(s+1,f),u=f-s-1;s=f,c=0}else m===46&&c>-1?c++:c=-1}return i}function Za(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const LC={cwd:UC};function UC(){return"/"}function Vc(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function BC(t){if(typeof t=="string")t=new URL(t);else if(!Vc(t)){const a=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw a.code="ERR_INVALID_ARG_TYPE",a}if(t.protocol!=="file:"){const a=new TypeError("The URL must be of scheme file");throw a.code="ERR_INVALID_URL_SCHEME",a}return HC(t)}function HC(t){if(t.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const a=t.pathname;let i=-1;for(;++i<a.length;)if(a.codePointAt(i)===37&&a.codePointAt(i+1)===50){const u=a.codePointAt(i+2);if(u===70||u===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(a)}const vc=["history","path","basename","stem","extname","dirname"];class kx{constructor(a){let i;a?Vc(a)?i={path:a}:typeof a=="string"||qC(a)?i={value:a}:i=a:i={},this.cwd="cwd"in i?"":LC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<vc.length;){const c=vc[u];c in i&&i[c]!==void 0&&i[c]!==null&&(this[c]=c==="history"?[...i[c]]:i[c])}let s;for(s in i)vc.includes(s)||(this[s]=i[s])}get basename(){return typeof this.path=="string"?mt.basename(this.path):void 0}set basename(a){kc(a,"basename"),Sc(a,"basename"),this.path=mt.join(this.dirname||"",a)}get dirname(){return typeof this.path=="string"?mt.dirname(this.path):void 0}set dirname(a){cg(this.basename,"dirname"),this.path=mt.join(a||"",this.basename)}get extname(){return typeof this.path=="string"?mt.extname(this.path):void 0}set extname(a){if(Sc(a,"extname"),cg(this.dirname,"extname"),a){if(a.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(a.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=mt.join(this.dirname,this.stem+(a||""))}get path(){return this.history[this.history.length-1]}set path(a){Vc(a)&&(a=BC(a)),kc(a,"path"),this.path!==a&&this.history.push(a)}get stem(){return typeof this.path=="string"?mt.basename(this.path,this.extname):void 0}set stem(a){kc(a,"stem"),Sc(a,"stem"),this.path=mt.join(this.dirname||"",a+(this.extname||""))}fail(a,i,u){const s=this.message(a,i,u);throw s.fatal=!0,s}info(a,i,u){const s=this.message(a,i,u);return s.fatal=void 0,s}message(a,i,u){const s=new xn(a,i,u);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(a){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(a||void 0).decode(this.value)}}function Sc(t,a){if(t&&t.includes(mt.sep))throw new Error("`"+a+"` cannot be a path: did not expect `"+mt.sep+"`")}function kc(t,a){if(!t)throw new Error("`"+a+"` cannot be empty")}function cg(t,a){if(!t)throw new Error("Setting `"+a+"` requires `path` to be set too")}function qC(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const VC=(function(t){const u=this.constructor.prototype,s=u[t],c=function(){return s.apply(c,arguments)};return Object.setPrototypeOf(c,u),c}),IC={}.hasOwnProperty;class ff extends VC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=jC()}copy(){const a=new ff;let i=-1;for(;++i<this.attachers.length;){const u=this.attachers[i];a.use(...u)}return a.data(yc(!0,{},this.namespace)),a}data(a,i){return typeof a=="string"?arguments.length===2?(Tc("data",this.frozen),this.namespace[a]=i,this):IC.call(this.namespace,a)&&this.namespace[a]||void 0:a?(Tc("data",this.frozen),this.namespace=a,this):this.namespace}freeze(){if(this.frozen)return this;const a=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const s=i.call(a,...u);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(a){this.freeze();const i=vu(a),u=this.parser||this.Parser;return wc("parse",u),u(String(i),i)}process(a,i){const u=this;return this.freeze(),wc("process",this.parser||this.Parser),Cc("process",this.compiler||this.Compiler),i?s(void 0,i):new Promise(s);function s(c,f){const m=vu(a),p=u.parse(m);u.run(p,m,function(b,g,S){if(b||!g||!S)return h(b);const v=g,C=u.stringify(v,S);YC(C)?S.value=C:S.result=C,h(b,S)});function h(b,g){b||!g?f(b):c?c(g):i(void 0,g)}}}processSync(a){let i=!1,u;return this.freeze(),wc("processSync",this.parser||this.Parser),Cc("processSync",this.compiler||this.Compiler),this.process(a,s),dg("processSync","process",i),u;function s(c,f){i=!0,sg(c),u=f}}run(a,i,u){fg(a),this.freeze();const s=this.transformers;return!u&&typeof i=="function"&&(u=i,i=void 0),u?c(void 0,u):new Promise(c);function c(f,m){const p=vu(i);s.run(a,p,h);function h(b,g,S){const v=g||a;b?m(b):f?f(v):u(void 0,v,S)}}}runSync(a,i){let u=!1,s;return this.run(a,i,c),dg("runSync","run",u),s;function c(f,m){sg(f),s=m,u=!0}}stringify(a,i){this.freeze();const u=vu(i),s=this.compiler||this.Compiler;return Cc("stringify",s),fg(a),s(a,u)}use(a,...i){const u=this.attachers,s=this.namespace;if(Tc("use",this.frozen),a!=null)if(typeof a=="function")p(a,i);else if(typeof a=="object")Array.isArray(a)?m(a):f(a);else throw new TypeError("Expected usable value, not `"+a+"`");return this;function c(h){if(typeof h=="function")p(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[b,...g]=h;p(b,g)}else f(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function f(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");m(h.plugins),h.settings&&(s.settings=yc(!0,s.settings,h.settings))}function m(h){let b=-1;if(h!=null)if(Array.isArray(h))for(;++b<h.length;){const g=h[b];c(g)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function p(h,b){let g=-1,S=-1;for(;++g<u.length;)if(u[g][0]===h){S=g;break}if(S===-1)u.push([h,...b]);else if(b.length>0){let[v,...C]=b;const O=u[S][1];qc(O)&&qc(v)&&(v=yc(!0,O,v)),u[S]=[h,v,...C]}}}}const FC=new ff().freeze();function wc(t,a){if(typeof a!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Cc(t,a){if(typeof a!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Tc(t,a){if(a)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function fg(t){if(!qc(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function dg(t,a,i){if(!i)throw new Error("`"+t+"` finished async. Use `"+a+"` instead")}function vu(t){return GC(t)?t:new kx(t)}function GC(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function YC(t){return typeof t=="string"||PC(t)}function PC(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const JC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",hg=[],mg={allowDangerousHtml:!0},XC=/^(https?|ircs?|mailto|xmpp)$/i,QC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ZC(t){const a=KC(t),i=WC(t);return $C(a.runSync(a.parse(i),i),t)}function KC(t){const a=t.rehypePlugins||hg,i=t.remarkPlugins||hg,u=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...mg}:mg;return FC().use(Dw).use(i).use(TC,u).use(a)}function WC(t){const a=t.children||"",i=new kx;return typeof a=="string"&&(i.value=a),i}function $C(t,a){const i=a.allowedElements,u=a.allowElement,s=a.components,c=a.disallowedElements,f=a.skipHtml,m=a.unwrapDisallowed,p=a.urlTransform||eT;for(const b of QC)Object.hasOwn(a,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+JC+b.id,void 0);return cf(t,h),m2(t,{Fragment:x.Fragment,components:s,ignoreInvalidStyle:!0,jsx:x.jsx,jsxs:x.jsxs,passKeys:!0,passNode:!0});function h(b,g,S){if(b.type==="raw"&&S&&typeof g=="number")return f?S.children.splice(g,1):S.children[g]={type:"text",value:b.value},g;if(b.type==="element"){let v;for(v in pc)if(Object.hasOwn(pc,v)&&Object.hasOwn(b.properties,v)){const C=b.properties[v],O=pc[v];(O===null||O.includes(b.tagName))&&(b.properties[v]=p(String(C||""),v,b))}}if(b.type==="element"){let v=i?!i.includes(b.tagName):c?c.includes(b.tagName):!1;if(!v&&u&&typeof g=="number"&&(v=!u(b,g,S)),v&&S&&typeof g=="number")return m&&b.children?S.children.splice(g,1,...b.children):S.children.splice(g,1),g}}}function eT(t){const a=t.indexOf(":"),i=t.indexOf("?"),u=t.indexOf("#"),s=t.indexOf("/");return a===-1||s!==-1&&a>s||i!==-1&&a>i||u!==-1&&a>u||XC.test(t.slice(0,a))?t:""}function pg(t,a){const i=String(t);if(typeof a!="string")throw new TypeError("Expected character");let u=0,s=i.indexOf(a);for(;s!==-1;)u++,s=i.indexOf(a,s+a.length);return u}function nT(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function tT(t,a,i){const s=Bu((i||{}).ignore||[]),c=lT(a);let f=-1;for(;++f<c.length;)Sx(t,"text",m);function m(h,b){let g=-1,S;for(;++g<b.length;){const v=b[g],C=S?S.children:void 0;if(s(v,C?C.indexOf(v):void 0,S))return;S=v}if(S)return p(h,b)}function p(h,b){const g=b[b.length-1],S=c[f][0],v=c[f][1];let C=0;const z=g.children.indexOf(h);let j=!1,H=[];S.lastIndex=0;let D=S.exec(h.value);for(;D;){const K=D.index,le={index:D.index,input:D.input,stack:[...b,h]};let V=v(...D,le);if(typeof V=="string"&&(V=V.length>0?{type:"text",value:V}:void 0),V===!1?S.lastIndex=K+1:(C!==K&&H.push({type:"text",value:h.value.slice(C,K)}),Array.isArray(V)?H.push(...V):V&&H.push(V),C=K+D[0].length,j=!0),!S.global)break;D=S.exec(h.value)}return j?(C<h.value.length&&H.push({type:"text",value:h.value.slice(C)}),g.children.splice(z,1,...H)):H=[h],z+H.length}}function lT(t){const a=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!t[0]||Array.isArray(t[0])?t:[t];let u=-1;for(;++u<i.length;){const s=i[u];a.push([iT(s[0]),aT(s[1])])}return a}function iT(t){return typeof t=="string"?new RegExp(nT(t),"g"):t}function aT(t){return typeof t=="function"?t:function(){return t}}const Ec="phrasing",Ac=["autolink","link","image","label"];function rT(){return{transforms:[hT],enter:{literalAutolink:sT,literalAutolinkEmail:jc,literalAutolinkHttp:jc,literalAutolinkWww:jc},exit:{literalAutolink:dT,literalAutolinkEmail:fT,literalAutolinkHttp:oT,literalAutolinkWww:cT}}}function uT(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ec,notInConstruct:Ac},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ec,notInConstruct:Ac},{character:":",before:"[ps]",after:"\\/",inConstruct:Ec,notInConstruct:Ac}]}}function sT(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function jc(t){this.config.enter.autolinkProtocol.call(this,t)}function oT(t){this.config.exit.autolinkProtocol.call(this,t)}function cT(t){this.config.exit.data.call(this,t);const a=this.stack[this.stack.length-1];a.type,a.url="http://"+this.sliceSerialize(t)}function fT(t){this.config.exit.autolinkEmail.call(this,t)}function dT(t){this.exit(t)}function hT(t){tT(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,mT],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),pT]],{ignore:["link","linkReference"]})}function mT(t,a,i,u,s){let c="";if(!wx(s)||(/^w/i.test(a)&&(i=a+i,a="",c="http://"),!gT(i)))return!1;const f=xT(i+u);if(!f[0])return!1;const m={type:"link",title:null,url:c+a+f[0],children:[{type:"text",value:a+f[0]}]};return f[1]?[m,{type:"text",value:f[1]}]:m}function pT(t,a,i,u){return!wx(u,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+a+"@"+i,children:[{type:"text",value:a+"@"+i}]}}function gT(t){const a=t.split(".");return!(a.length<2||a[a.length-1]&&(/_/.test(a[a.length-1])||!/[a-zA-Z\d]/.test(a[a.length-1]))||a[a.length-2]&&(/_/.test(a[a.length-2])||!/[a-zA-Z\d]/.test(a[a.length-2])))}function xT(t){const a=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!a)return[t,void 0];t=t.slice(0,a.index);let i=a[0],u=i.indexOf(")");const s=pg(t,"(");let c=pg(t,")");for(;u!==-1&&s>c;)t+=i.slice(0,u+1),i=i.slice(u+1),u=i.indexOf(")"),c++;return[t,i]}function wx(t,a){const i=t.input.charCodeAt(t.index-1);return(t.index===0||zl(i)||zu(i))&&(!a||i!==47)}Cx.peek=ET;function bT(){this.buffer()}function yT(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function vT(){this.buffer()}function ST(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function kT(t){const a=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=ut(this.sliceSerialize(t)).toLowerCase(),i.label=a}function wT(t){this.exit(t)}function CT(t){const a=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=ut(this.sliceSerialize(t)).toLowerCase(),i.label=a}function TT(t){this.exit(t)}function ET(){return"["}function Cx(t,a,i,u){const s=i.createTracker(u);let c=s.move("[^");const f=i.enter("footnoteReference"),m=i.enter("reference");return c+=s.move(i.safe(i.associationId(t),{after:"]",before:c})),m(),f(),c+=s.move("]"),c}function AT(){return{enter:{gfmFootnoteCallString:bT,gfmFootnoteCall:yT,gfmFootnoteDefinitionLabelString:vT,gfmFootnoteDefinition:ST},exit:{gfmFootnoteCallString:kT,gfmFootnoteCall:wT,gfmFootnoteDefinitionLabelString:CT,gfmFootnoteDefinition:TT}}}function jT(t){let a=!1;return t&&t.firstLineBlank&&(a=!0),{handlers:{footnoteDefinition:i,footnoteReference:Cx},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(u,s,c,f){const m=c.createTracker(f);let p=m.move("[^");const h=c.enter("footnoteDefinition"),b=c.enter("label");return p+=m.move(c.safe(c.associationId(u),{before:p,after:"]"})),b(),p+=m.move("]:"),u.children&&u.children.length>0&&(m.shift(4),p+=m.move((a?`
`:" ")+c.indentLines(c.containerFlow(u,m.current()),a?Tx:MT))),h(),p}}function MT(t,a,i){return a===0?t:Tx(t,a,i)}function Tx(t,a,i){return(i?"":"    ")+t}const NT=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Ex.peek=zT;function DT(){return{canContainEols:["delete"],enter:{strikethrough:RT},exit:{strikethrough:OT}}}function _T(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:NT}],handlers:{delete:Ex}}}function RT(t){this.enter({type:"delete",children:[]},t)}function OT(t){this.exit(t)}function Ex(t,a,i,u){const s=i.createTracker(u),c=i.enter("strikethrough");let f=s.move("~~");return f+=i.containerPhrasing(t,{...s.current(),before:f,after:"~"}),f+=s.move("~~"),c(),f}function zT(){return"~"}function LT(t){return t.length}function UT(t,a){const i=a||{},u=(i.align||[]).concat(),s=i.stringLength||LT,c=[],f=[],m=[],p=[];let h=0,b=-1;for(;++b<t.length;){const O=[],z=[];let j=-1;for(t[b].length>h&&(h=t[b].length);++j<t[b].length;){const H=BT(t[b][j]);if(i.alignDelimiters!==!1){const D=s(H);z[j]=D,(p[j]===void 0||D>p[j])&&(p[j]=D)}O.push(H)}f[b]=O,m[b]=z}let g=-1;if(typeof u=="object"&&"length"in u)for(;++g<h;)c[g]=gg(u[g]);else{const O=gg(u);for(;++g<h;)c[g]=O}g=-1;const S=[],v=[];for(;++g<h;){const O=c[g];let z="",j="";O===99?(z=":",j=":"):O===108?z=":":O===114&&(j=":");let H=i.alignDelimiters===!1?1:Math.max(1,p[g]-z.length-j.length);const D=z+"-".repeat(H)+j;i.alignDelimiters!==!1&&(H=z.length+H+j.length,H>p[g]&&(p[g]=H),v[g]=H),S[g]=D}f.splice(1,0,S),m.splice(1,0,v),b=-1;const C=[];for(;++b<f.length;){const O=f[b],z=m[b];g=-1;const j=[];for(;++g<h;){const H=O[g]||"";let D="",K="";if(i.alignDelimiters!==!1){const le=p[g]-(z[g]||0),V=c[g];V===114?D=" ".repeat(le):V===99?le%2?(D=" ".repeat(le/2+.5),K=" ".repeat(le/2-.5)):(D=" ".repeat(le/2),K=D):K=" ".repeat(le)}i.delimiterStart!==!1&&!g&&j.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&H==="")&&(i.delimiterStart!==!1||g)&&j.push(" "),i.alignDelimiters!==!1&&j.push(D),j.push(H),i.alignDelimiters!==!1&&j.push(K),i.padding!==!1&&j.push(" "),(i.delimiterEnd!==!1||g!==h-1)&&j.push("|")}C.push(i.delimiterEnd===!1?j.join("").replace(/ +$/,""):j.join(""))}return C.join(`
`)}function BT(t){return t==null?"":String(t)}function gg(t){const a=typeof t=="string"?t.codePointAt(0):0;return a===67||a===99?99:a===76||a===108?108:a===82||a===114?114:0}function HT(t,a,i,u){const s=i.enter("blockquote"),c=i.createTracker(u);c.move("> "),c.shift(2);const f=i.indentLines(i.containerFlow(t,c.current()),qT);return s(),f}function qT(t,a,i){return">"+(i?"":" ")+t}function VT(t,a){return xg(t,a.inConstruct,!0)&&!xg(t,a.notInConstruct,!1)}function xg(t,a,i){if(typeof a=="string"&&(a=[a]),!a||a.length===0)return i;let u=-1;for(;++u<a.length;)if(t.includes(a[u]))return!0;return!1}function bg(t,a,i,u){let s=-1;for(;++s<i.unsafe.length;)if(i.unsafe[s].character===`
`&&VT(i.stack,i.unsafe[s]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function IT(t,a){const i=String(t);let u=i.indexOf(a),s=u,c=0,f=0;if(typeof a!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===s?++c>f&&(f=c):c=1,s=u+a.length,u=i.indexOf(a,s);return f}function FT(t,a){return!!(a.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function GT(t){const a=t.options.fence||"`";if(a!=="`"&&a!=="~")throw new Error("Cannot serialize code with `"+a+"` for `options.fence`, expected `` ` `` or `~`");return a}function YT(t,a,i,u){const s=GT(i),c=t.value||"",f=s==="`"?"GraveAccent":"Tilde";if(FT(t,i)){const g=i.enter("codeIndented"),S=i.indentLines(c,PT);return g(),S}const m=i.createTracker(u),p=s.repeat(Math.max(IT(c,s)+1,3)),h=i.enter("codeFenced");let b=m.move(p);if(t.lang){const g=i.enter(`codeFencedLang${f}`);b+=m.move(i.safe(t.lang,{before:b,after:" ",encode:["`"],...m.current()})),g()}if(t.lang&&t.meta){const g=i.enter(`codeFencedMeta${f}`);b+=m.move(" "),b+=m.move(i.safe(t.meta,{before:b,after:`
`,encode:["`"],...m.current()})),g()}return b+=m.move(`
`),c&&(b+=m.move(c+`
`)),b+=m.move(p),h(),b}function PT(t,a,i){return(i?"":"    ")+t}function df(t){const a=t.options.quote||'"';if(a!=='"'&&a!=="'")throw new Error("Cannot serialize title with `"+a+"` for `options.quote`, expected `\"`, or `'`");return a}function JT(t,a,i,u){const s=df(i),c=s==='"'?"Quote":"Apostrophe",f=i.enter("definition");let m=i.enter("label");const p=i.createTracker(u);let h=p.move("[");return h+=p.move(i.safe(i.associationId(t),{before:h,after:"]",...p.current()})),h+=p.move("]: "),m(),!t.url||/[\0- \u007F]/.test(t.url)?(m=i.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(i.safe(t.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(m=i.enter("destinationRaw"),h+=p.move(i.safe(t.url,{before:h,after:t.title?" ":`
`,...p.current()}))),m(),t.title&&(m=i.enter(`title${c}`),h+=p.move(" "+s),h+=p.move(i.safe(t.title,{before:h,after:s,...p.current()})),h+=p.move(s),m()),f(),h}function XT(t){const a=t.options.emphasis||"*";if(a!=="*"&&a!=="_")throw new Error("Cannot serialize emphasis with `"+a+"` for `options.emphasis`, expected `*`, or `_`");return a}function Fa(t){return"&#x"+t.toString(16).toUpperCase()+";"}function _u(t,a,i){const u=Mi(t),s=Mi(a);return u===void 0?s===void 0?i==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Ax.peek=QT;function Ax(t,a,i,u){const s=XT(i),c=i.enter("emphasis"),f=i.createTracker(u),m=f.move(s);let p=f.move(i.containerPhrasing(t,{after:s,before:m,...f.current()}));const h=p.charCodeAt(0),b=_u(u.before.charCodeAt(u.before.length-1),h,s);b.inside&&(p=Fa(h)+p.slice(1));const g=p.charCodeAt(p.length-1),S=_u(u.after.charCodeAt(0),g,s);S.inside&&(p=p.slice(0,-1)+Fa(g));const v=f.move(s);return c(),i.attentionEncodeSurroundingInfo={after:S.outside,before:b.outside},m+p+v}function QT(t,a,i){return i.options.emphasis||"*"}function ZT(t,a){let i=!1;return cf(t,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return i=!0,Bc}),!!((!t.depth||t.depth<3)&&tf(t)&&(a.options.setext||i))}function KT(t,a,i,u){const s=Math.max(Math.min(6,t.depth||1),1),c=i.createTracker(u);if(ZT(t,i)){const b=i.enter("headingSetext"),g=i.enter("phrasing"),S=i.containerPhrasing(t,{...c.current(),before:`
`,after:`
`});return g(),b(),S+`
`+(s===1?"=":"-").repeat(S.length-(Math.max(S.lastIndexOf("\r"),S.lastIndexOf(`
`))+1))}const f="#".repeat(s),m=i.enter("headingAtx"),p=i.enter("phrasing");c.move(f+" ");let h=i.containerPhrasing(t,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(h)&&(h=Fa(h.charCodeAt(0))+h.slice(1)),h=h?f+" "+h:f,i.options.closeAtx&&(h+=" "+f),p(),m(),h}jx.peek=WT;function jx(t){return t.value||""}function WT(){return"<"}Mx.peek=$T;function Mx(t,a,i,u){const s=df(i),c=s==='"'?"Quote":"Apostrophe",f=i.enter("image");let m=i.enter("label");const p=i.createTracker(u);let h=p.move("![");return h+=p.move(i.safe(t.alt,{before:h,after:"]",...p.current()})),h+=p.move("]("),m(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(m=i.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(i.safe(t.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(m=i.enter("destinationRaw"),h+=p.move(i.safe(t.url,{before:h,after:t.title?" ":")",...p.current()}))),m(),t.title&&(m=i.enter(`title${c}`),h+=p.move(" "+s),h+=p.move(i.safe(t.title,{before:h,after:s,...p.current()})),h+=p.move(s),m()),h+=p.move(")"),f(),h}function $T(){return"!"}Nx.peek=e3;function Nx(t,a,i,u){const s=t.referenceType,c=i.enter("imageReference");let f=i.enter("label");const m=i.createTracker(u);let p=m.move("![");const h=i.safe(t.alt,{before:p,after:"]",...m.current()});p+=m.move(h+"]["),f();const b=i.stack;i.stack=[],f=i.enter("reference");const g=i.safe(i.associationId(t),{before:p,after:"]",...m.current()});return f(),i.stack=b,c(),s==="full"||!h||h!==g?p+=m.move(g+"]"):s==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function e3(){return"!"}Dx.peek=n3;function Dx(t,a,i){let u=t.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(u);)s+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++c<i.unsafe.length;){const f=i.unsafe[c],m=i.compilePattern(f);let p;if(f.atBreak)for(;p=m.exec(u);){let h=p.index;u.charCodeAt(h)===10&&u.charCodeAt(h-1)===13&&h--,u=u.slice(0,h)+" "+u.slice(p.index+1)}}return s+u+s}function n3(){return"`"}function _x(t,a){const i=tf(t);return!!(!a.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(i===t.url||"mailto:"+i===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}Rx.peek=t3;function Rx(t,a,i,u){const s=df(i),c=s==='"'?"Quote":"Apostrophe",f=i.createTracker(u);let m,p;if(_x(t,i)){const b=i.stack;i.stack=[],m=i.enter("autolink");let g=f.move("<");return g+=f.move(i.containerPhrasing(t,{before:g,after:">",...f.current()})),g+=f.move(">"),m(),i.stack=b,g}m=i.enter("link"),p=i.enter("label");let h=f.move("[");return h+=f.move(i.containerPhrasing(t,{before:h,after:"](",...f.current()})),h+=f.move("]("),p(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(p=i.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(i.safe(t.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(p=i.enter("destinationRaw"),h+=f.move(i.safe(t.url,{before:h,after:t.title?" ":")",...f.current()}))),p(),t.title&&(p=i.enter(`title${c}`),h+=f.move(" "+s),h+=f.move(i.safe(t.title,{before:h,after:s,...f.current()})),h+=f.move(s),p()),h+=f.move(")"),m(),h}function t3(t,a,i){return _x(t,i)?"<":"["}Ox.peek=l3;function Ox(t,a,i,u){const s=t.referenceType,c=i.enter("linkReference");let f=i.enter("label");const m=i.createTracker(u);let p=m.move("[");const h=i.containerPhrasing(t,{before:p,after:"]",...m.current()});p+=m.move(h+"]["),f();const b=i.stack;i.stack=[],f=i.enter("reference");const g=i.safe(i.associationId(t),{before:p,after:"]",...m.current()});return f(),i.stack=b,c(),s==="full"||!h||h!==g?p+=m.move(g+"]"):s==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function l3(){return"["}function hf(t){const a=t.options.bullet||"*";if(a!=="*"&&a!=="+"&&a!=="-")throw new Error("Cannot serialize items with `"+a+"` for `options.bullet`, expected `*`, `+`, or `-`");return a}function i3(t){const a=hf(t),i=t.options.bulletOther;if(!i)return a==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===a)throw new Error("Expected `bullet` (`"+a+"`) and `bulletOther` (`"+i+"`) to be different");return i}function a3(t){const a=t.options.bulletOrdered||".";if(a!=="."&&a!==")")throw new Error("Cannot serialize items with `"+a+"` for `options.bulletOrdered`, expected `.` or `)`");return a}function zx(t){const a=t.options.rule||"*";if(a!=="*"&&a!=="-"&&a!=="_")throw new Error("Cannot serialize rules with `"+a+"` for `options.rule`, expected `*`, `-`, or `_`");return a}function r3(t,a,i,u){const s=i.enter("list"),c=i.bulletCurrent;let f=t.ordered?a3(i):hf(i);const m=t.ordered?f==="."?")":".":i3(i);let p=a&&i.bulletLastUsed?f===i.bulletLastUsed:!1;if(!t.ordered){const b=t.children?t.children[0]:void 0;if((f==="*"||f==="-")&&b&&(!b.children||!b.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(p=!0),zx(i)===f&&b){let g=-1;for(;++g<t.children.length;){const S=t.children[g];if(S&&S.type==="listItem"&&S.children&&S.children[0]&&S.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(f=m),i.bulletCurrent=f;const h=i.containerFlow(t,u);return i.bulletLastUsed=f,i.bulletCurrent=c,s(),h}function u3(t){const a=t.options.listItemIndent||"one";if(a!=="tab"&&a!=="one"&&a!=="mixed")throw new Error("Cannot serialize items with `"+a+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return a}function s3(t,a,i,u){const s=u3(i);let c=i.bulletCurrent||hf(i);a&&a.type==="list"&&a.ordered&&(c=(typeof a.start=="number"&&a.start>-1?a.start:1)+(i.options.incrementListMarker===!1?0:a.children.indexOf(t))+c);let f=c.length+1;(s==="tab"||s==="mixed"&&(a&&a.type==="list"&&a.spread||t.spread))&&(f=Math.ceil(f/4)*4);const m=i.createTracker(u);m.move(c+" ".repeat(f-c.length)),m.shift(f);const p=i.enter("listItem"),h=i.indentLines(i.containerFlow(t,m.current()),b);return p(),h;function b(g,S,v){return S?(v?"":" ".repeat(f))+g:(v?c:c+" ".repeat(f-c.length))+g}}function o3(t,a,i,u){const s=i.enter("paragraph"),c=i.enter("phrasing"),f=i.containerPhrasing(t,u);return c(),s(),f}const c3=Bu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function f3(t,a,i,u){return(t.children.some(function(f){return c3(f)})?i.containerPhrasing:i.containerFlow).call(i,t,u)}function d3(t){const a=t.options.strong||"*";if(a!=="*"&&a!=="_")throw new Error("Cannot serialize strong with `"+a+"` for `options.strong`, expected `*`, or `_`");return a}Lx.peek=h3;function Lx(t,a,i,u){const s=d3(i),c=i.enter("strong"),f=i.createTracker(u),m=f.move(s+s);let p=f.move(i.containerPhrasing(t,{after:s,before:m,...f.current()}));const h=p.charCodeAt(0),b=_u(u.before.charCodeAt(u.before.length-1),h,s);b.inside&&(p=Fa(h)+p.slice(1));const g=p.charCodeAt(p.length-1),S=_u(u.after.charCodeAt(0),g,s);S.inside&&(p=p.slice(0,-1)+Fa(g));const v=f.move(s+s);return c(),i.attentionEncodeSurroundingInfo={after:S.outside,before:b.outside},m+p+v}function h3(t,a,i){return i.options.strong||"*"}function m3(t,a,i,u){return i.safe(t.value,u)}function p3(t){const a=t.options.ruleRepetition||3;if(a<3)throw new Error("Cannot serialize rules with repetition `"+a+"` for `options.ruleRepetition`, expected `3` or more");return a}function g3(t,a,i){const u=(zx(i)+(i.options.ruleSpaces?" ":"")).repeat(p3(i));return i.options.ruleSpaces?u.slice(0,-1):u}const Ux={blockquote:HT,break:bg,code:YT,definition:JT,emphasis:Ax,hardBreak:bg,heading:KT,html:jx,image:Mx,imageReference:Nx,inlineCode:Dx,link:Rx,linkReference:Ox,list:r3,listItem:s3,paragraph:o3,root:f3,strong:Lx,text:m3,thematicBreak:g3};function x3(){return{enter:{table:b3,tableData:yg,tableHeader:yg,tableRow:v3},exit:{codeText:S3,table:y3,tableData:Mc,tableHeader:Mc,tableRow:Mc}}}function b3(t){const a=t._align;this.enter({type:"table",align:a.map(function(i){return i==="none"?null:i}),children:[]},t),this.data.inTable=!0}function y3(t){this.exit(t),this.data.inTable=void 0}function v3(t){this.enter({type:"tableRow",children:[]},t)}function Mc(t){this.exit(t)}function yg(t){this.enter({type:"tableCell",children:[]},t)}function S3(t){let a=this.resume();this.data.inTable&&(a=a.replace(/\\([\\|])/g,k3));const i=this.stack[this.stack.length-1];i.type,i.value=a,this.exit(t)}function k3(t,a){return a==="|"?a:t}function w3(t){const a=t||{},i=a.tableCellPadding,u=a.tablePipeAlign,s=a.stringLength,c=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:S,table:f,tableCell:p,tableRow:m}};function f(v,C,O,z){return h(b(v,O,z),v.align)}function m(v,C,O,z){const j=g(v,O,z),H=h([j]);return H.slice(0,H.indexOf(`
`))}function p(v,C,O,z){const j=O.enter("tableCell"),H=O.enter("phrasing"),D=O.containerPhrasing(v,{...z,before:c,after:c});return H(),j(),D}function h(v,C){return UT(v,{align:C,alignDelimiters:u,padding:i,stringLength:s})}function b(v,C,O){const z=v.children;let j=-1;const H=[],D=C.enter("table");for(;++j<z.length;)H[j]=g(z[j],C,O);return D(),H}function g(v,C,O){const z=v.children;let j=-1;const H=[],D=C.enter("tableRow");for(;++j<z.length;)H[j]=p(z[j],v,C,O);return D(),H}function S(v,C,O){let z=Ux.inlineCode(v,C,O);return O.stack.includes("tableCell")&&(z=z.replace(/\|/g,"\\$&")),z}}function C3(){return{exit:{taskListCheckValueChecked:vg,taskListCheckValueUnchecked:vg,paragraph:E3}}}function T3(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:A3}}}function vg(t){const a=this.stack[this.stack.length-2];a.type,a.checked=t.type==="taskListCheckValueChecked"}function E3(t){const a=this.stack[this.stack.length-2];if(a&&a.type==="listItem"&&typeof a.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const u=i.children[0];if(u&&u.type==="text"){const s=a.children;let c=-1,f;for(;++c<s.length;){const m=s[c];if(m.type==="paragraph"){f=m;break}}f===i&&(u.value=u.value.slice(1),u.value.length===0?i.children.shift():i.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,i.position.start=Object.assign({},u.position.start)))}}this.exit(t)}function A3(t,a,i,u){const s=t.children[0],c=typeof t.checked=="boolean"&&s&&s.type==="paragraph",f="["+(t.checked?"x":" ")+"] ",m=i.createTracker(u);c&&m.move(f);let p=Ux.listItem(t,a,i,{...u,...m.current()});return c&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),p;function h(b){return b+f}}function j3(){return[rT(),AT(),DT(),x3(),C3()]}function M3(t){return{extensions:[uT(),jT(t),_T(),w3(t),T3()]}}const N3={tokenize:L3,partial:!0},Bx={tokenize:U3,partial:!0},Hx={tokenize:B3,partial:!0},qx={tokenize:H3,partial:!0},D3={tokenize:q3,partial:!0},Vx={name:"wwwAutolink",tokenize:O3,previous:Fx},Ix={name:"protocolAutolink",tokenize:z3,previous:Gx},qt={name:"emailAutolink",tokenize:R3,previous:Yx},gt={};function _3(){return{text:gt}}let Rl=48;for(;Rl<123;)gt[Rl]=qt,Rl++,Rl===58?Rl=65:Rl===91&&(Rl=97);gt[43]=qt;gt[45]=qt;gt[46]=qt;gt[95]=qt;gt[72]=[qt,Ix];gt[104]=[qt,Ix];gt[87]=[qt,Vx];gt[119]=[qt,Vx];function R3(t,a,i){const u=this;let s,c;return f;function f(g){return!Ic(g)||!Yx.call(u,u.previous)||mf(u.events)?i(g):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),m(g))}function m(g){return Ic(g)?(t.consume(g),m):g===64?(t.consume(g),p):i(g)}function p(g){return g===46?t.check(D3,b,h)(g):g===45||g===95||gn(g)?(c=!0,t.consume(g),p):b(g)}function h(g){return t.consume(g),s=!0,p}function b(g){return c&&s&&Sn(u.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),a(g)):i(g)}}function O3(t,a,i){const u=this;return s;function s(f){return f!==87&&f!==119||!Fx.call(u,u.previous)||mf(u.events)?i(f):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(N3,t.attempt(Bx,t.attempt(Hx,c),i),i)(f))}function c(f){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),a(f)}}function z3(t,a,i){const u=this;let s="",c=!1;return f;function f(g){return(g===72||g===104)&&Gx.call(u,u.previous)&&!mf(u.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),s+=String.fromCodePoint(g),t.consume(g),m):i(g)}function m(g){if(Sn(g)&&s.length<5)return s+=String.fromCodePoint(g),t.consume(g),m;if(g===58){const S=s.toLowerCase();if(S==="http"||S==="https")return t.consume(g),p}return i(g)}function p(g){return g===47?(t.consume(g),c?h:(c=!0,p)):i(g)}function h(g){return g===null||Mu(g)||Fe(g)||zl(g)||zu(g)?i(g):t.attempt(Bx,t.attempt(Hx,b),i)(g)}function b(g){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),a(g)}}function L3(t,a,i){let u=0;return s;function s(f){return(f===87||f===119)&&u<3?(u++,t.consume(f),s):f===46&&u===3?(t.consume(f),c):i(f)}function c(f){return f===null?i(f):a(f)}}function U3(t,a,i){let u,s,c;return f;function f(h){return h===46||h===95?t.check(qx,p,m)(h):h===null||Fe(h)||zl(h)||h!==45&&zu(h)?p(h):(c=!0,t.consume(h),f)}function m(h){return h===95?u=!0:(s=u,u=void 0),t.consume(h),f}function p(h){return s||u||!c?i(h):a(h)}}function B3(t,a){let i=0,u=0;return s;function s(f){return f===40?(i++,t.consume(f),s):f===41&&u<i?c(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?t.check(qx,a,c)(f):f===null||Fe(f)||zl(f)?a(f):(t.consume(f),s)}function c(f){return f===41&&u++,t.consume(f),s}}function H3(t,a,i){return u;function u(m){return m===33||m===34||m===39||m===41||m===42||m===44||m===46||m===58||m===59||m===63||m===95||m===126?(t.consume(m),u):m===38?(t.consume(m),c):m===93?(t.consume(m),s):m===60||m===null||Fe(m)||zl(m)?a(m):i(m)}function s(m){return m===null||m===40||m===91||Fe(m)||zl(m)?a(m):u(m)}function c(m){return Sn(m)?f(m):i(m)}function f(m){return m===59?(t.consume(m),u):Sn(m)?(t.consume(m),f):i(m)}}function q3(t,a,i){return u;function u(c){return t.consume(c),s}function s(c){return gn(c)?i(c):a(c)}}function Fx(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||Fe(t)}function Gx(t){return!Sn(t)}function Yx(t){return!(t===47||Ic(t))}function Ic(t){return t===43||t===45||t===46||t===95||gn(t)}function mf(t){let a=t.length,i=!1;for(;a--;){const u=t[a][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){i=!0;break}if(u._gfmAutolinkLiteralWalkedInto){i=!1;break}}return t.length>0&&!i&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}const V3={tokenize:Q3,partial:!0};function I3(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:P3,continuation:{tokenize:J3},exit:X3}},text:{91:{name:"gfmFootnoteCall",tokenize:Y3},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:F3,resolveTo:G3}}}}function F3(t,a,i){const u=this;let s=u.events.length;const c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f;for(;s--;){const p=u.events[s][1];if(p.type==="labelImage"){f=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return m;function m(p){if(!f||!f._balanced)return i(p);const h=ut(u.sliceSerialize({start:f.end,end:u.now()}));return h.codePointAt(0)!==94||!c.includes(h.slice(1))?i(p):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(p),t.exit("gfmFootnoteCallLabelMarker"),a(p))}}function G3(t,a){let i=t.length;for(;i--;)if(t[i][1].type==="labelImage"&&t[i][0]==="enter"){t[i][1];break}t[i+1][1].type="data",t[i+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},t[i+3][1].start),end:Object.assign({},t[t.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},t[i+3][1].end),end:Object.assign({},t[i+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},t[t.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},m=[t[i+1],t[i+2],["enter",u,a],t[i+3],t[i+4],["enter",s,a],["exit",s,a],["enter",c,a],["enter",f,a],["exit",f,a],["exit",c,a],t[t.length-2],t[t.length-1],["exit",u,a]];return t.splice(i,t.length-i+1,...m),t}function Y3(t,a,i){const u=this,s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let c=0,f;return m;function m(g){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),p}function p(g){return g!==94?i(g):(t.enter("gfmFootnoteCallMarker"),t.consume(g),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",h)}function h(g){if(c>999||g===93&&!f||g===null||g===91||Fe(g))return i(g);if(g===93){t.exit("chunkString");const S=t.exit("gfmFootnoteCallString");return s.includes(ut(u.sliceSerialize(S)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),a):i(g)}return Fe(g)||(f=!0),c++,t.consume(g),g===92?b:h}function b(g){return g===91||g===92||g===93?(t.consume(g),c++,h):h(g)}}function P3(t,a,i){const u=this,s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let c,f=0,m;return p;function p(C){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(C),t.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(C){return C===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(C),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",b):i(C)}function b(C){if(f>999||C===93&&!m||C===null||C===91||Fe(C))return i(C);if(C===93){t.exit("chunkString");const O=t.exit("gfmFootnoteDefinitionLabelString");return c=ut(u.sliceSerialize(O)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(C),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),S}return Fe(C)||(m=!0),f++,t.consume(C),C===92?g:b}function g(C){return C===91||C===92||C===93?(t.consume(C),f++,b):b(C)}function S(C){return C===58?(t.enter("definitionMarker"),t.consume(C),t.exit("definitionMarker"),s.includes(c)||s.push(c),Ne(t,v,"gfmFootnoteDefinitionWhitespace")):i(C)}function v(C){return a(C)}}function J3(t,a,i){return t.check(Qa,a,t.attempt(V3,a,i))}function X3(t){t.exit("gfmFootnoteDefinition")}function Q3(t,a,i){const u=this;return Ne(t,s,"gfmFootnoteDefinitionIndent",5);function s(c){const f=u.events[u.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?a(c):i(c)}}function Z3(t){let i=(t||{}).singleTilde;const u={name:"strikethrough",tokenize:c,resolveAll:s};return i==null&&(i=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function s(f,m){let p=-1;for(;++p<f.length;)if(f[p][0]==="enter"&&f[p][1].type==="strikethroughSequenceTemporary"&&f[p][1]._close){let h=p;for(;h--;)if(f[h][0]==="exit"&&f[h][1].type==="strikethroughSequenceTemporary"&&f[h][1]._open&&f[p][1].end.offset-f[p][1].start.offset===f[h][1].end.offset-f[h][1].start.offset){f[p][1].type="strikethroughSequence",f[h][1].type="strikethroughSequence";const b={type:"strikethrough",start:Object.assign({},f[h][1].start),end:Object.assign({},f[p][1].end)},g={type:"strikethroughText",start:Object.assign({},f[h][1].end),end:Object.assign({},f[p][1].start)},S=[["enter",b,m],["enter",f[h][1],m],["exit",f[h][1],m],["enter",g,m]],v=m.parser.constructs.insideSpan.null;v&&Vn(S,S.length,0,Lu(v,f.slice(h+1,p),m)),Vn(S,S.length,0,[["exit",g,m],["enter",f[p][1],m],["exit",f[p][1],m],["exit",b,m]]),Vn(f,h-1,p-h+3,S),p=h+S.length-2;break}}for(p=-1;++p<f.length;)f[p][1].type==="strikethroughSequenceTemporary"&&(f[p][1].type="data");return f}function c(f,m,p){const h=this.previous,b=this.events;let g=0;return S;function S(C){return h===126&&b[b.length-1][1].type!=="characterEscape"?p(C):(f.enter("strikethroughSequenceTemporary"),v(C))}function v(C){const O=Mi(h);if(C===126)return g>1?p(C):(f.consume(C),g++,v);if(g<2&&!i)return p(C);const z=f.exit("strikethroughSequenceTemporary"),j=Mi(C);return z._open=!j||j===2&&!!O,z._close=!O||O===2&&!!j,m(C)}}}class K3{constructor(){this.map=[]}add(a,i,u){W3(this,a,i,u)}consume(a){if(this.map.sort(function(c,f){return c[0]-f[0]}),this.map.length===0)return;let i=this.map.length;const u=[];for(;i>0;)i-=1,u.push(a.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),a.length=this.map[i][0];u.push(a.slice()),a.length=0;let s=u.pop();for(;s;){for(const c of s)a.push(c);s=u.pop()}this.map.length=0}}function W3(t,a,i,u){let s=0;if(!(i===0&&u.length===0)){for(;s<t.map.length;){if(t.map[s][0]===a){t.map[s][1]+=i,t.map[s][2].push(...u);return}s+=1}t.map.push([a,i,u])}}function $3(t,a){let i=!1;const u=[];for(;a<t.length;){const s=t[a];if(i){if(s[0]==="enter")s[1].type==="tableContent"&&u.push(t[a+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(t[a-1][1].type==="tableDelimiterMarker"){const c=u.length-1;u[c]=u[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(i=!0);a+=1}return u}function eE(){return{flow:{null:{name:"table",tokenize:nE,resolveAll:tE}}}}function nE(t,a,i){const u=this;let s=0,c=0,f;return m;function m(A){let P=u.events.length-1;for(;P>-1;){const ae=u.events[P][1].type;if(ae==="lineEnding"||ae==="linePrefix")P--;else break}const Q=P>-1?u.events[P][1].type:null,de=Q==="tableHead"||Q==="tableRow"?V:p;return de===V&&u.parser.lazy[u.now().line]?i(A):de(A)}function p(A){return t.enter("tableHead"),t.enter("tableRow"),h(A)}function h(A){return A===124||(f=!0,c+=1),b(A)}function b(A){return A===null?i(A):he(A)?c>1?(c=0,u.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),v):i(A):Te(A)?Ne(t,b,"whitespace")(A):(c+=1,f&&(f=!1,s+=1),A===124?(t.enter("tableCellDivider"),t.consume(A),t.exit("tableCellDivider"),f=!0,b):(t.enter("data"),g(A)))}function g(A){return A===null||A===124||Fe(A)?(t.exit("data"),b(A)):(t.consume(A),A===92?S:g)}function S(A){return A===92||A===124?(t.consume(A),g):g(A)}function v(A){return u.interrupt=!1,u.parser.lazy[u.now().line]?i(A):(t.enter("tableDelimiterRow"),f=!1,Te(A)?Ne(t,C,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):C(A))}function C(A){return A===45||A===58?z(A):A===124?(f=!0,t.enter("tableCellDivider"),t.consume(A),t.exit("tableCellDivider"),O):le(A)}function O(A){return Te(A)?Ne(t,z,"whitespace")(A):z(A)}function z(A){return A===58?(c+=1,f=!0,t.enter("tableDelimiterMarker"),t.consume(A),t.exit("tableDelimiterMarker"),j):A===45?(c+=1,j(A)):A===null||he(A)?K(A):le(A)}function j(A){return A===45?(t.enter("tableDelimiterFiller"),H(A)):le(A)}function H(A){return A===45?(t.consume(A),H):A===58?(f=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(A),t.exit("tableDelimiterMarker"),D):(t.exit("tableDelimiterFiller"),D(A))}function D(A){return Te(A)?Ne(t,K,"whitespace")(A):K(A)}function K(A){return A===124?C(A):A===null||he(A)?!f||s!==c?le(A):(t.exit("tableDelimiterRow"),t.exit("tableHead"),a(A)):le(A)}function le(A){return i(A)}function V(A){return t.enter("tableRow"),ee(A)}function ee(A){return A===124?(t.enter("tableCellDivider"),t.consume(A),t.exit("tableCellDivider"),ee):A===null||he(A)?(t.exit("tableRow"),a(A)):Te(A)?Ne(t,ee,"whitespace")(A):(t.enter("data"),oe(A))}function oe(A){return A===null||A===124||Fe(A)?(t.exit("data"),ee(A)):(t.consume(A),A===92?W:oe)}function W(A){return A===92||A===124?(t.consume(A),oe):oe(A)}}function tE(t,a){let i=-1,u=!0,s=0,c=[0,0,0,0],f=[0,0,0,0],m=!1,p=0,h,b,g;const S=new K3;for(;++i<t.length;){const v=t[i],C=v[1];v[0]==="enter"?C.type==="tableHead"?(m=!1,p!==0&&(Sg(S,a,p,h,b),b=void 0,p=0),h={type:"table",start:Object.assign({},C.start),end:Object.assign({},C.end)},S.add(i,0,[["enter",h,a]])):C.type==="tableRow"||C.type==="tableDelimiterRow"?(u=!0,g=void 0,c=[0,0,0,0],f=[0,i+1,0,0],m&&(m=!1,b={type:"tableBody",start:Object.assign({},C.start),end:Object.assign({},C.end)},S.add(i,0,[["enter",b,a]])),s=C.type==="tableDelimiterRow"?2:b?3:1):s&&(C.type==="data"||C.type==="tableDelimiterMarker"||C.type==="tableDelimiterFiller")?(u=!1,f[2]===0&&(c[1]!==0&&(f[0]=f[1],g=Su(S,a,c,s,void 0,g),c=[0,0,0,0]),f[2]=i)):C.type==="tableCellDivider"&&(u?u=!1:(c[1]!==0&&(f[0]=f[1],g=Su(S,a,c,s,void 0,g)),c=f,f=[c[1],i,0,0])):C.type==="tableHead"?(m=!0,p=i):C.type==="tableRow"||C.type==="tableDelimiterRow"?(p=i,c[1]!==0?(f[0]=f[1],g=Su(S,a,c,s,i,g)):f[1]!==0&&(g=Su(S,a,f,s,i,g)),s=0):s&&(C.type==="data"||C.type==="tableDelimiterMarker"||C.type==="tableDelimiterFiller")&&(f[3]=i)}for(p!==0&&Sg(S,a,p,h,b),S.consume(a.events),i=-1;++i<a.events.length;){const v=a.events[i];v[0]==="enter"&&v[1].type==="table"&&(v[1]._align=$3(a.events,i))}return t}function Su(t,a,i,u,s,c){const f=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",m="tableContent";i[0]!==0&&(c.end=Object.assign({},Ai(a.events,i[0])),t.add(i[0],0,[["exit",c,a]]));const p=Ai(a.events,i[1]);if(c={type:f,start:Object.assign({},p),end:Object.assign({},p)},t.add(i[1],0,[["enter",c,a]]),i[2]!==0){const h=Ai(a.events,i[2]),b=Ai(a.events,i[3]),g={type:m,start:Object.assign({},h),end:Object.assign({},b)};if(t.add(i[2],0,[["enter",g,a]]),u!==2){const S=a.events[i[2]],v=a.events[i[3]];if(S[1].end=Object.assign({},v[1].end),S[1].type="chunkText",S[1].contentType="text",i[3]>i[2]+1){const C=i[2]+1,O=i[3]-i[2]-1;t.add(C,O,[])}}t.add(i[3]+1,0,[["exit",g,a]])}return s!==void 0&&(c.end=Object.assign({},Ai(a.events,s)),t.add(s,0,[["exit",c,a]]),c=void 0),c}function Sg(t,a,i,u,s){const c=[],f=Ai(a.events,i);s&&(s.end=Object.assign({},f),c.push(["exit",s,a])),u.end=Object.assign({},f),c.push(["exit",u,a]),t.add(i+1,0,c)}function Ai(t,a){const i=t[a],u=i[0]==="enter"?"start":"end";return i[1][u]}const lE={name:"tasklistCheck",tokenize:aE};function iE(){return{text:{91:lE}}}function aE(t,a,i){const u=this;return s;function s(p){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?i(p):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),c)}function c(p){return Fe(p)?(t.enter("taskListCheckValueUnchecked"),t.consume(p),t.exit("taskListCheckValueUnchecked"),f):p===88||p===120?(t.enter("taskListCheckValueChecked"),t.consume(p),t.exit("taskListCheckValueChecked"),f):i(p)}function f(p){return p===93?(t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),m):i(p)}function m(p){return he(p)?a(p):Te(p)?t.check({tokenize:rE},a,i)(p):i(p)}}function rE(t,a,i){return Ne(t,u,"whitespace");function u(s){return s===null?i(s):a(s)}}function uE(t){return tx([_3(),I3(),Z3(t),eE(),iE()])}const sE={};function oE(t){const a=this,i=t||sE,u=a.data(),s=u.micromarkExtensions||(u.micromarkExtensions=[]),c=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),f=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);s.push(uE(i)),c.push(j3()),f.push(M3(i))}function qa(t){return t==null?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(qa).join(""):typeof t=="object"&&t&&"props"in t?qa(t.props?.children):""}function Px(){const t=new Map,a=i=>i.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");return i=>{const u=a(i)||"section",s=t.get(u)??0;return t.set(u,s+1),s===0?u:`${u}-${s}`}}function cE(t,a=1,i=3){const u=Px(),s=t.split(`
`);let c=!1;const f=[];for(const m of s){const p=m.trimEnd();if(p.trimStart().startsWith("```")){c=!c;continue}if(c)continue;const h=/^(#{1,6})\s+(.+?)\s*$/.exec(p);if(!h)continue;const b=h[1].length;if(b<a||b>i)continue;const g=h[2].replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[*_`]/g,"").trim(),S=u(g);f.push({id:S,text:g,level:b})}return f}const fE=({toc:t,activeId:a,onClickItem:i})=>t.length?x.jsx("aside",{className:"fixed left-[calc(50%+870px/2+48px)] top-[calc(var(--header-height)+48px)] hidden xl:block w-56 2xl:w-64 h-[calc(100vh-var(--header-height)-96px)] overflow-y-auto overflow-x-hidden",children:x.jsx("div",{className:"border-l border-(--border-subtle) pl-4 pr-2",children:x.jsx("nav",{"aria-label":"Table of contents",children:x.jsx("ul",{className:"space-y-2",children:t.map(u=>{const s=u.id===a,c=u.level===1?"pl-0":u.level===2?"pl-3":"pl-6";return x.jsx("li",{className:c,children:x.jsxs("button",{type:"button",onClick:()=>i(u.id),className:["group relative block w-full text-left cursor-pointer","text-[13px] leading-[1.65]","transition-all duration-200 origin-left","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",s?"text-(--fg-base) scale-110":"text-gray-500 hover:text-gray-500/80 hover:scale-105"].join(" "),children:[x.jsx("span",{className:["absolute -left-[22px] top-[9px] h-1.5 w-1.5 rounded-full","bg-(--fg-base)","transition-opacity duration-200",s?"opacity-100":"opacity-0 group-hover:opacity-60"].join(" ")}),u.text]})},u.id)})})})})}):null,kg=({dir:t})=>x.jsx("span",{className:["shrink-0 w-11 h-11 rounded-full flex items-center justify-center","border border-green-400 text-green-400","bg-transparent group-hover:bg-green-400/10","transition-colors duration-200"].join(" "),children:x.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t==="left"?x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"}):x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),wg=({children:t,align:a,onClick:i})=>x.jsxs("button",{type:"button",onClick:i,className:["group relative w-full overflow-hidden rounded-2xl","border border-white/10","bg-white/5 hover:bg-white/8","transition-colors duration-200","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",a==="left"?"text-left":"text-right"].join(" "),children:[x.jsx("span",{className:"pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:x.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-(--accent)/0 via-(--accent)/10 to-(--accent)/0"})}),x.jsx("div",{className:"relative p-6 cursor-pointer",children:t})]}),dE=({prevPost:t,nextPost:a,onNavigate:i})=>!t&&!a?null:x.jsx("nav",{className:"mt-16 pt-8 border-t border-(--border-subtle)",children:x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[x.jsx("div",{className:"md:col-span-1 h-[88px]",children:t?x.jsx(wg,{align:"left",onClick:()=>i(t.slug),children:x.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[x.jsx(kg,{dir:"left"}),x.jsxs("div",{className:"min-w-0",children:[x.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"이전 포스트"}),x.jsx("h3",{className:`
                      text-[18px] font-bold text-(--fg-base)
                      truncate overflow-hidden
                    `,children:t.title})]})]})}):x.jsx("div",{className:"w-full h-full"})}),x.jsx("div",{className:"md:col-span-1  h-[88px]",children:a?x.jsx(wg,{align:"right",onClick:()=>i(a.slug),children:x.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[x.jsxs("div",{className:"min-w-0 text-right",children:[x.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"다음 포스트"}),x.jsx("h3",{className:` 
                      text-[18px] font-bold text-(--fg-base)
                      truncate overflow-hidden
                    `,children:a.title})]}),x.jsx(kg,{dir:"right"})]})}):x.jsx("div",{className:"w-full h-full"})})]})}),hE=Eu.memo(function({content:a}){const i=_.useMemo(()=>Px(),[a]),u=_.useMemo(()=>[oE],[]),s=_.useMemo(()=>({h1:({children:c,...f})=>{const m=qa(c),p=i(m);return x.jsx("h1",{id:p,className:"scroll-mt-[calc(var(--header-height)+24px)]",...f,children:c})},h2:({children:c,...f})=>{const m=qa(c),p=i(m);return x.jsx("h2",{id:p,className:"scroll-mt-[calc(var(--header-height)+24px)]",...f,children:c})},h3:({children:c,...f})=>{const m=qa(c),p=i(m);return x.jsx("h3",{id:p,className:"scroll-mt-[calc(var(--header-height)+24px)]",...f,children:c})}}),[i]);return x.jsx(ZC,{remarkPlugins:u,components:s,children:a})}),mE=()=>{const{slug:t}=Xy(),a=Pa(),i=_.useMemo(()=>nt.find(g=>g.slug===t),[t]),u=_.useMemo(()=>i?.content??"",[i]),s=_.useMemo(()=>u?cE(u,1,3):[],[u]),{prevPost:c,nextPost:f}=_.useMemo(()=>{const g=nt.findIndex(S=>S.slug===t);return g===-1?{prevPost:null,nextPost:null}:{prevPost:g>0?nt[g-1]:null,nextPost:g<nt.length-1?nt[g+1]:null}},[t]),[m,p]=_.useState(),h=Eu.useRef(!1);_.useEffect(()=>{window.scrollTo(0,0)},[t]);const b=g=>{const S=document.getElementById(g);if(!S)return;h.current=!0,p(K=>K===g?K:g),history.replaceState(null,"",`#${g}`);const v=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim())||80,z=S.getBoundingClientRect().top+window.pageYOffset-v-24;window.scrollTo({top:z,behavior:"smooth"});const j=performance.now();let H=0;const D=()=>{const K=window.scrollY;Math.abs(K-z)<2?H+=1:H=0;const le=performance.now()-j>2200;if(H>=3||le){h.current=!1;return}requestAnimationFrame(D)};requestAnimationFrame(D)};return _.useEffect(()=>{if(!s.length)return;const g=()=>{const z=getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim(),j=parseFloat(z);return Number.isFinite(j)?j:80},S=24;let v=0;const C=()=>{if(v=0,h.current)return;const z=g(),j=window.scrollY+z+S+1;let H=s[0]?.id;for(const D of s){const K=document.getElementById(D.id);if(K)if(K.offsetTop<=j)H=D.id;else break}p(D=>D===H?D:H)},O=()=>{v||(v=requestAnimationFrame(C))};return C(),window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O),()=>{window.removeEventListener("scroll",O),window.removeEventListener("resize",O),v&&cancelAnimationFrame(v)}},[s,t]),i?x.jsxs("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) overflow-x-hidden",children:[x.jsx("div",{className:"mx-auto max-w-[870px] px-5 md:px-8 pt-[calc(var(--header-height)+48px)] pb-16",children:x.jsxs("article",{className:"w-full",children:[x.jsxs("button",{onClick:()=>a("/blog"),className:"relative z-10 mb-5 text-[13px] text-fg-muted hover:text-fg transition-colors flex items-center gap-2",children:[x.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]}),x.jsxs("div",{className:"mb-10",children:[x.jsx("h1",{className:"text-[36px] md:text-[42px] font-bold leading-tight mb-4",children:i.title}),x.jsxs("div",{className:"w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4",children:[x.jsx("div",{className:"flex flex-wrap gap-2",children:i.tags.map(g=>x.jsx("span",{className:"text-[13px] text-green-300 px-2.5 py-1.5 rounded-full  border border-(--border-subtle) text-fg-muted",children:g},g))}),x.jsx("div",{className:"text-[13px] text-fg-muted whitespace-nowrap md:text-right",children:i.date})]})]}),i.cover&&x.jsx("div",{className:"relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-(--bg-soft)",children:x.jsx("img",{src:i.cover,alt:i.title,className:"absolute inset-0 w-full h-full object-cover"})}),x.jsx("div",{className:"prose prose-invert max-w-none",children:u?x.jsx(hE,{content:u}):x.jsx("p",{className:"text-fg-muted",children:"콘텐츠가 없습니다."})}),x.jsx(dE,{prevPost:c,nextPost:f,onNavigate:g=>a(`/blog/${g}`)})]})}),x.jsx(fE,{toc:s,activeId:m,onClickItem:b})]}):x.jsx("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) flex items-center justify-center",children:x.jsxs("div",{className:"text-center",children:[x.jsx("h1",{className:"text-[32px] font-bold mb-4",children:"포스트를 찾을 수 없습니다"}),x.jsx("button",{onClick:()=>a("/blog"),className:"px-4 py-2 rounded-full border border-(--border-subtle) bg-white/5 hover:bg-white/10 transition-colors",children:"블로그로 돌아가기"})]})})},pE=()=>{const[t,a]=_.useState(()=>{if(typeof window>"u")return"dark";try{return localStorage.getItem("portfolio-theme")||"dark"}catch{return"dark"}});_.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",t);try{localStorage.setItem("portfolio-theme",t)}catch{}}},[t]);const i=_.useCallback(()=>{a(c=>c==="dark"?"light":"dark")},[]),u=_.useCallback(c=>{const f=document.getElementById(c);if(f){const b=f.getBoundingClientRect().top+window.pageYOffset-64-20;window.scrollTo({top:b,behavior:"smooth"})}},[]),s="/portfolio/".replace(/\/$/,"");return x.jsxs(_1,{basename:s===""?void 0:s,children:[x.jsx(I1,{theme:t,onToggleTheme:i,onNavClick:u}),x.jsxs(o1,{children:[x.jsx(ku,{path:"/",element:x.jsx(US,{})}),x.jsx(ku,{path:"/blog",element:x.jsx(HS,{})}),x.jsx(ku,{path:"/blog/:slug",element:x.jsx(mE,{})})]}),x.jsx(J1,{})]})};gy.createRoot(document.getElementById("root")).render(x.jsx(pE,{}));
