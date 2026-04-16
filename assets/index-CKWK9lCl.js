(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function bh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hf={exports:{}},Sl={};var xx;function DT(){if(xx)return Sl;xx=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,s,c){var u=null;if(c!==void 0&&(u=""+c),s.key!==void 0&&(u=""+s.key),"key"in s){c={};for(var f in s)f!=="key"&&(c[f]=s[f])}else c=s;return s=c.ref,{$$typeof:e,type:a,key:u,ref:s!==void 0?s:null,props:c}}return Sl.Fragment=n,Sl.jsx=i,Sl.jsxs=i,Sl}var bx;function NT(){return bx||(bx=1,Hf.exports=DT()),Hf.exports}var x=NT(),Ff={exports:{}},wl={},qf={exports:{}},Gf={};var vx;function RT(){return vx||(vx=1,(function(e){function n(P,ee){var ie=P.length;P.push(ee);e:for(;0<ie;){var oe=ie-1>>>1,D=P[oe];if(0<s(D,ee))P[oe]=ee,P[ie]=D,ie=oe;else break e}}function i(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var ee=P[0],ie=P.pop();if(ie!==ee){P[0]=ie;e:for(var oe=0,D=P.length,L=D>>>1;oe<L;){var J=2*(oe+1)-1,A=P[J],le=J+1,he=P[le];if(0>s(A,ie))le<D&&0>s(he,A)?(P[oe]=he,P[le]=ie,oe=le):(P[oe]=A,P[J]=ie,oe=J);else if(le<D&&0>s(he,ie))P[oe]=he,P[le]=ie,oe=le;else break e}}return ee}function s(P,ee){var ie=P.sortIndex-ee.sortIndex;return ie!==0?ie:P.id-ee.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var m=[],h=[],y=1,g=null,b=3,v=!1,w=!1,E=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function V(P){for(var ee=i(h);ee!==null;){if(ee.callback===null)a(h);else if(ee.startTime<=P)a(h),ee.sortIndex=ee.expirationTime,n(m,ee);else break;ee=i(h)}}function Y(P){if(E=!1,V(P),!w)if(i(m)!==null)w=!0,_||(_=!0,te());else{var ee=i(h);ee!==null&&ne(Y,ee.startTime-P)}}var _=!1,q=-1,X=5,I=-1;function R(){return k?!0:!(e.unstable_now()-I<X)}function Q(){if(k=!1,_){var P=e.unstable_now();I=P;var ee=!0;try{e:{w=!1,E&&(E=!1,N(q),q=-1),v=!0;var ie=b;try{t:{for(V(P),g=i(m);g!==null&&!(g.expirationTime>P&&R());){var oe=g.callback;if(typeof oe=="function"){g.callback=null,b=g.priorityLevel;var D=oe(g.expirationTime<=P);if(P=e.unstable_now(),typeof D=="function"){g.callback=D,V(P),ee=!0;break t}g===i(m)&&a(m),V(P)}else a(m);g=i(m)}if(g!==null)ee=!0;else{var L=i(h);L!==null&&ne(Y,L.startTime-P),ee=!1}}break e}finally{g=null,b=ie,v=!1}ee=void 0}}finally{ee?te():_=!1}}}var te;if(typeof j=="function")te=function(){j(Q)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,se=me.port2;me.port1.onmessage=Q,te=function(){se.postMessage(null)}}else te=function(){C(Q,0)};function ne(P,ee){q=C(function(){P(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(P){switch(b){case 1:case 2:case 3:var ee=3;break;default:ee=b}var ie=b;b=ee;try{return P()}finally{b=ie}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(P,ee){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ie=b;b=P;try{return ee()}finally{b=ie}},e.unstable_scheduleCallback=function(P,ee,ie){var oe=e.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?oe+ie:oe):ie=oe,P){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ie+D,P={id:y++,callback:ee,priorityLevel:P,startTime:ie,expirationTime:D,sortIndex:-1},ie>oe?(P.sortIndex=ie,n(h,P),i(m)===null&&P===i(h)&&(E?(N(q),q=-1):E=!0,ne(Y,ie-oe))):(P.sortIndex=D,n(m,P),w||v||(w=!0,_||(_=!0,te()))),P},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(P){var ee=b;return function(){var ie=b;b=ee;try{return P.apply(this,arguments)}finally{b=ie}}}})(Gf)),Gf}var Sx;function OT(){return Sx||(Sx=1,qf.exports=RT()),qf.exports}var Yf={exports:{}},be={};var wx;function _T(){if(wx)return be;wx=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),b=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=b&&L[b]||L["@@iterator"],typeof L=="function"?L:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,k={};function C(L,J,A){this.props=L,this.context=J,this.refs=k,this.updater=A||w}C.prototype.isReactComponent={},C.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},C.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function N(){}N.prototype=C.prototype;function j(L,J,A){this.props=L,this.context=J,this.refs=k,this.updater=A||w}var V=j.prototype=new N;V.constructor=j,E(V,C.prototype),V.isPureReactComponent=!0;var Y=Array.isArray;function _(){}var q={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function I(L,J,A){var le=A.ref;return{$$typeof:e,type:L,key:J,ref:le!==void 0?le:null,props:A}}function R(L,J){return I(L.type,J,L.props)}function Q(L){return typeof L=="object"&&L!==null&&L.$$typeof===e}function te(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(A){return J[A]})}var me=/\/+/g;function se(L,J){return typeof L=="object"&&L!==null&&L.key!=null?te(""+L.key):J.toString(36)}function ne(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(_,_):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,J,A,le,he){var de=typeof L;(de==="undefined"||de==="boolean")&&(L=null);var Se=!1;if(L===null)Se=!0;else switch(de){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(L.$$typeof){case e:case n:Se=!0;break;case y:return Se=L._init,P(Se(L._payload),J,A,le,he)}}if(Se)return he=he(L),Se=le===""?"."+se(L,0):le,Y(he)?(A="",Se!=null&&(A=Se.replace(me,"$&/")+"/"),P(he,J,A,"",function(en){return en})):he!=null&&(Q(he)&&(he=R(he,A+(he.key==null||L&&L.key===he.key?"":(""+he.key).replace(me,"$&/")+"/")+Se)),J.push(he)),1;Se=0;var ze=le===""?".":le+":";if(Y(L))for(var Ne=0;Ne<L.length;Ne++)le=L[Ne],de=ze+se(le,Ne),Se+=P(le,J,A,de,he);else if(Ne=v(L),typeof Ne=="function")for(L=Ne.call(L),Ne=0;!(le=L.next()).done;)le=le.value,de=ze+se(le,Ne++),Se+=P(le,J,A,de,he);else if(de==="object"){if(typeof L.then=="function")return P(ne(L),J,A,le,he);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function ee(L,J,A){if(L==null)return L;var le=[],he=0;return P(L,le,"","",function(de){return J.call(A,de,he++)}),le}function ie(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(A){(L._status===0||L._status===-1)&&(L._status=1,L._result=A)},function(A){(L._status===0||L._status===-1)&&(L._status=2,L._result=A)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var oe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},D={map:ee,forEach:function(L,J,A){ee(L,function(){J.apply(this,arguments)},A)},count:function(L){var J=0;return ee(L,function(){J++}),J},toArray:function(L){return ee(L,function(J){return J})||[]},only:function(L){if(!Q(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return be.Activity=g,be.Children=D,be.Component=C,be.Fragment=i,be.Profiler=s,be.PureComponent=j,be.StrictMode=a,be.Suspense=m,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,be.__COMPILER_RUNTIME={__proto__:null,c:function(L){return q.H.useMemoCache(L)}},be.cache=function(L){return function(){return L.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(L,J,A){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var le=E({},L.props),he=L.key;if(J!=null)for(de in J.key!==void 0&&(he=""+J.key),J)!X.call(J,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&J.ref===void 0||(le[de]=J[de]);var de=arguments.length-2;if(de===1)le.children=A;else if(1<de){for(var Se=Array(de),ze=0;ze<de;ze++)Se[ze]=arguments[ze+2];le.children=Se}return I(L.type,he,le)},be.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},be.createElement=function(L,J,A){var le,he={},de=null;if(J!=null)for(le in J.key!==void 0&&(de=""+J.key),J)X.call(J,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(he[le]=J[le]);var Se=arguments.length-2;if(Se===1)he.children=A;else if(1<Se){for(var ze=Array(Se),Ne=0;Ne<Se;Ne++)ze[Ne]=arguments[Ne+2];he.children=ze}if(L&&L.defaultProps)for(le in Se=L.defaultProps,Se)he[le]===void 0&&(he[le]=Se[le]);return I(L,de,he)},be.createRef=function(){return{current:null}},be.forwardRef=function(L){return{$$typeof:f,render:L}},be.isValidElement=Q,be.lazy=function(L){return{$$typeof:y,_payload:{_status:-1,_result:L},_init:ie}},be.memo=function(L,J){return{$$typeof:h,type:L,compare:J===void 0?null:J}},be.startTransition=function(L){var J=q.T,A={};q.T=A;try{var le=L(),he=q.S;he!==null&&he(A,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(_,oe)}catch(de){oe(de)}finally{J!==null&&A.types!==null&&(J.types=A.types),q.T=J}},be.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},be.use=function(L){return q.H.use(L)},be.useActionState=function(L,J,A){return q.H.useActionState(L,J,A)},be.useCallback=function(L,J){return q.H.useCallback(L,J)},be.useContext=function(L){return q.H.useContext(L)},be.useDebugValue=function(){},be.useDeferredValue=function(L,J){return q.H.useDeferredValue(L,J)},be.useEffect=function(L,J){return q.H.useEffect(L,J)},be.useEffectEvent=function(L){return q.H.useEffectEvent(L)},be.useId=function(){return q.H.useId()},be.useImperativeHandle=function(L,J,A){return q.H.useImperativeHandle(L,J,A)},be.useInsertionEffect=function(L,J){return q.H.useInsertionEffect(L,J)},be.useLayoutEffect=function(L,J){return q.H.useLayoutEffect(L,J)},be.useMemo=function(L,J){return q.H.useMemo(L,J)},be.useOptimistic=function(L,J){return q.H.useOptimistic(L,J)},be.useReducer=function(L,J,A){return q.H.useReducer(L,J,A)},be.useRef=function(L){return q.H.useRef(L)},be.useState=function(L){return q.H.useState(L)},be.useSyncExternalStore=function(L,J,A){return q.H.useSyncExternalStore(L,J,A)},be.useTransition=function(){return q.H.useTransition()},be.version="19.2.0",be}var Tx;function vh(){return Tx||(Tx=1,Yf.exports=_T()),Yf.exports}var Xf={exports:{}},wt={};var Cx;function LT(){if(Cx)return wt;Cx=1;var e=vh();function n(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(m,h,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:m,containerInfo:h,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,wt.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(n(299));return c(m,h,null,y)},wt.flushSync=function(m){var h=u.T,y=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=h,a.p=y,a.d.f()}},wt.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(m,h))},wt.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},wt.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,g=f(y,h.crossOrigin),b=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?a.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:b,fetchPriority:v}):y==="script"&&a.d.X(m,{crossOrigin:g,integrity:b,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},wt.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=f(h.as,h.crossOrigin);a.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(m)},wt.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,g=f(y,h.crossOrigin);a.d.L(m,y,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},wt.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=f(h.as,h.crossOrigin);a.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(m)},wt.requestFormReset=function(m){a.d.r(m)},wt.unstable_batchedUpdates=function(m,h){return m(h)},wt.useFormState=function(m,h,y){return u.H.useFormState(m,h,y)},wt.useFormStatus=function(){return u.H.useHostTransitionStatus()},wt.version="19.2.0",wt}var Ax;function zT(){if(Ax)return Xf.exports;Ax=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Xf.exports=LT(),Xf.exports}var kx;function BT(){if(kx)return wl;kx=1;var e=OT(),n=vh(),i=zT();function a(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var r=t,l=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(l=r.return),t=r.return;while(t)}return r.tag===3?l:null}function u(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function f(t){if(t.tag===31){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function h(t){var r=t.alternate;if(!r){if(r=c(t),r===null)throw Error(a(188));return r!==t?null:t}for(var l=t,o=r;;){var d=l.return;if(d===null)break;var p=d.alternate;if(p===null){if(o=d.return,o!==null){l=o;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===l)return m(d),t;if(p===o)return m(d),r;p=p.sibling}throw Error(a(188))}if(l.return!==o.return)l=d,o=p;else{for(var S=!1,T=d.child;T;){if(T===l){S=!0,l=d,o=p;break}if(T===o){S=!0,o=d,l=p;break}T=T.sibling}if(!S){for(T=p.child;T;){if(T===l){S=!0,l=p,o=d;break}if(T===o){S=!0,o=p,l=d;break}T=T.sibling}if(!S)throw Error(a(189))}}if(l.alternate!==o)throw Error(a(190))}if(l.tag!==3)throw Error(a(188));return l.stateNode.current===l?t:r}function y(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=y(t),r!==null)return r;t=t.sibling}return null}var g=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),j=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),Q=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function se(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case C:return"Profiler";case k:return"StrictMode";case Y:return"Suspense";case _:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case j:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case V:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return r=t.displayName||null,r!==null?r:se(t.type)||"Memo";case X:r=t._payload,t=t._init;try{return se(t(r))}catch{}}return null}var ne=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},oe=[],D=-1;function L(t){return{current:t}}function J(t){0>D||(t.current=oe[D],oe[D]=null,D--)}function A(t,r){D++,oe[D]=t.current,t.current=r}var le=L(null),he=L(null),de=L(null),Se=L(null);function ze(t,r){switch(A(de,r),A(he,t),A(le,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?Uy(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=Uy(r),t=Hy(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(le),A(le,t)}function Ne(){J(le),J(he),J(de)}function en(t){t.memoizedState!==null&&A(Se,t);var r=le.current,l=Hy(r,t.type);r!==l&&(A(he,t),A(le,l))}function Vn(t){he.current===t&&(J(le),J(he)),Se.current===t&&(J(Se),yl._currentValue=ie)}var ja,us;function Pn(t){if(ja===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);ja=r&&r[1]||"",us=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ja+t+us}var yi=!1;function xi(t,r){if(!t||yi)return"";yi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(r){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(G){var F=G}Reflect.construct(t,[],$)}else{try{$.call()}catch(G){F=G}t.call($.prototype)}}else{try{throw Error()}catch(G){F=G}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(G){if(G&&F&&typeof G.stack=="string")return[G.stack,F.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=o.DetermineComponentFrameRoot(),S=p[0],T=p[1];if(S&&T){var O=S.split(`
`),H=T.split(`
`);for(d=o=0;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(o===O.length||d===H.length)for(o=O.length-1,d=H.length-1;1<=o&&0<=d&&O[o]!==H[d];)d--;for(;1<=o&&0<=d;o--,d--)if(O[o]!==H[d]){if(o!==1||d!==1)do if(o--,d--,0>d||O[o]!==H[d]){var K=`
`+O[o].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=o&&0<=d);break}}}finally{yi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Pn(l):""}function cs(t,r){switch(t.tag){case 26:case 27:case 5:return Pn(t.type);case 16:return Pn("Lazy");case 13:return t.child!==r&&r!==null?Pn("Suspense Fallback"):Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 15:return xi(t.type,!1);case 11:return xi(t.type.render,!1);case 1:return xi(t.type,!0);case 31:return Pn("Activity");default:return""}}function fs(t){try{var r="",l=null;do r+=cs(t,l),l=t,t=t.return;while(t);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var bi=Object.prototype.hasOwnProperty,vi=e.unstable_scheduleCallback,Ma=e.unstable_cancelCallback,ku=e.unstable_shouldYield,Eu=e.unstable_requestPaint,At=e.unstable_now,ju=e.unstable_getCurrentPriorityLevel,Z=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,xe=e.unstable_NormalPriority,Ce=e.unstable_LowPriority,Be=e.unstable_IdlePriority,Ft=e.log,In=e.unstable_setDisableYieldValue,kt=null,ft=null;function Nt(t){if(typeof Ft=="function"&&In(t),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(kt,t)}catch{}}var Fe=Math.clz32?Math.clz32:g2,cr=Math.log,yn=Math.LN2;function g2(t){return t>>>=0,t===0?32:31-(cr(t)/yn|0)|0}var ds=256,hs=262144,ms=4194304;function Hr(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ps(t,r,l){var o=t.pendingLanes;if(o===0)return 0;var d=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~p,o!==0?d=Hr(o):(S&=T,S!==0?d=Hr(S):l||(l=T&~t,l!==0&&(d=Hr(l))))):(T=o&~p,T!==0?d=Hr(T):S!==0?d=Hr(S):l||(l=o&~t,l!==0&&(d=Hr(l)))),d===0?0:r!==0&&r!==d&&(r&p)===0&&(p=d&-d,l=r&-r,p>=l||p===32&&(l&4194048)!==0)?r:d}function Da(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function y2(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wm(){var t=ms;return ms<<=1,(ms&62914560)===0&&(ms=4194304),t}function Mu(t){for(var r=[],l=0;31>l;l++)r.push(t);return r}function Na(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function x2(t,r,l,o,d,p){var S=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var T=t.entanglements,O=t.expirationTimes,H=t.hiddenUpdates;for(l=S&~l;0<l;){var K=31-Fe(l),$=1<<K;T[K]=0,O[K]=-1;var F=H[K];if(F!==null)for(H[K]=null,K=0;K<F.length;K++){var G=F[K];G!==null&&(G.lane&=-536870913)}l&=~$}o!==0&&Tm(t,o,0),p!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~r))}function Tm(t,r,l){t.pendingLanes|=r,t.suspendedLanes&=~r;var o=31-Fe(r);t.entangledLanes|=r,t.entanglements[o]=t.entanglements[o]|1073741824|l&261930}function Cm(t,r){var l=t.entangledLanes|=r;for(t=t.entanglements;l;){var o=31-Fe(l),d=1<<o;d&r|t[o]&r&&(t[o]|=r),l&=~d}}function Am(t,r){var l=r&-r;return l=(l&42)!==0?1:Du(l),(l&(t.suspendedLanes|r))!==0?0:l}function Du(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Nu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function km(){var t=ee.p;return t!==0?t:(t=window.event,t===void 0?32:fx(t.type))}function Em(t,r){var l=ee.p;try{return ee.p=t,r()}finally{ee.p=l}}var fr=Math.random().toString(36).slice(2),gt="__reactFiber$"+fr,Rt="__reactProps$"+fr,Si="__reactContainer$"+fr,Ru="__reactEvents$"+fr,b2="__reactListeners$"+fr,v2="__reactHandles$"+fr,jm="__reactResources$"+fr,Ra="__reactMarker$"+fr;function Ou(t){delete t[gt],delete t[Rt],delete t[Ru],delete t[b2],delete t[v2]}function wi(t){var r=t[gt];if(r)return r;for(var l=t.parentNode;l;){if(r=l[Si]||l[gt]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(t=Ky(t);t!==null;){if(l=t[gt])return l;t=Ky(t)}return r}t=l,l=t.parentNode}return null}function Ti(t){if(t=t[gt]||t[Si]){var r=t.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return t}return null}function Oa(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(a(33))}function Ci(t){var r=t[jm];return r||(r=t[jm]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function mt(t){t[Ra]=!0}var Mm=new Set,Dm={};function Fr(t,r){Ai(t,r),Ai(t+"Capture",r)}function Ai(t,r){for(Dm[t]=r,t=0;t<r.length;t++)Mm.add(r[t])}var S2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nm={},Rm={};function w2(t){return bi.call(Rm,t)?!0:bi.call(Nm,t)?!1:S2.test(t)?Rm[t]=!0:(Nm[t]=!0,!1)}function gs(t,r,l){if(w2(r))if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var o=r.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+l)}}function ys(t,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+l)}}function Un(t,r,l,o){if(o===null)t.removeAttribute(l);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(r,l,""+o)}}function tn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Om(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function T2(t,r,l){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r);if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return d.call(this)},set:function(S){l=""+S,p.call(this,S)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function _u(t){if(!t._valueTracker){var r=Om(t)?"checked":"value";t._valueTracker=T2(t,r,""+t[r])}}function _m(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var l=r.getValue(),o="";return t&&(o=Om(t)?t.checked?"true":"false":t.value),t=o,t!==l?(r.setValue(t),!0):!1}function xs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var C2=/[\n"\\]/g;function nn(t){return t.replace(C2,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Lu(t,r,l,o,d,p,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),r!=null?S==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+tn(r)):t.value!==""+tn(r)&&(t.value=""+tn(r)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),r!=null?zu(t,S,tn(r)):l!=null?zu(t,S,tn(l)):o!=null&&t.removeAttribute("value"),d==null&&p!=null&&(t.defaultChecked=!!p),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+tn(T):t.removeAttribute("name")}function Lm(t,r,l,o,d,p,S,T){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),r!=null||l!=null){if(!(p!=="submit"&&p!=="reset"||r!=null)){_u(t);return}l=l!=null?""+tn(l):"",r=r!=null?""+tn(r):l,T||r===t.value||(t.value=r),t.defaultValue=r}o=o??d,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),_u(t)}function zu(t,r,l){r==="number"&&xs(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ki(t,r,l,o){if(t=t.options,r){r={};for(var d=0;d<l.length;d++)r["$"+l[d]]=!0;for(l=0;l<t.length;l++)d=r.hasOwnProperty("$"+t[l].value),t[l].selected!==d&&(t[l].selected=d),d&&o&&(t[l].defaultSelected=!0)}else{for(l=""+tn(l),r=null,d=0;d<t.length;d++){if(t[d].value===l){t[d].selected=!0,o&&(t[d].defaultSelected=!0);return}r!==null||t[d].disabled||(r=t[d])}r!==null&&(r.selected=!0)}}function zm(t,r,l){if(r!=null&&(r=""+tn(r),r!==t.value&&(t.value=r),l==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=l!=null?""+tn(l):""}function Bm(t,r,l,o){if(r==null){if(o!=null){if(l!=null)throw Error(a(92));if(ne(o)){if(1<o.length)throw Error(a(93));o=o[0]}l=o}l==null&&(l=""),r=l}l=tn(r),t.defaultValue=l,o=t.textContent,o===l&&o!==""&&o!==null&&(t.value=o),_u(t)}function Ei(t,r){if(r){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=r;return}}t.textContent=r}var A2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vm(t,r,l){var o=r.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?o?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":o?t.setProperty(r,l):typeof l!="number"||l===0||A2.has(r)?r==="float"?t.cssFloat=l:t[r]=(""+l).trim():t[r]=l+"px"}function Pm(t,r,l){if(r!=null&&typeof r!="object")throw Error(a(62));if(t=t.style,l!=null){for(var o in l)!l.hasOwnProperty(o)||r!=null&&r.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var d in r)o=r[d],r.hasOwnProperty(d)&&l[d]!==o&&Vm(t,d,o)}else for(var p in r)r.hasOwnProperty(p)&&Vm(t,p,r[p])}function Bu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),E2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(t){return E2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hn(){}var Vu=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ji=null,Mi=null;function Im(t){var r=Ti(t);if(r&&(t=r.stateNode)){var l=t[Rt]||null;e:switch(t=r.stateNode,r.type){case"input":if(Lu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),r=l.name,l.type==="radio"&&r!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+nn(""+r)+'"][type="radio"]'),r=0;r<l.length;r++){var o=l[r];if(o!==t&&o.form===t.form){var d=o[Rt]||null;if(!d)throw Error(a(90));Lu(o,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<l.length;r++)o=l[r],o.form===t.form&&_m(o)}break e;case"textarea":zm(t,l.value,l.defaultValue);break e;case"select":r=l.value,r!=null&&ki(t,!!l.multiple,r,!1)}}}var Iu=!1;function Um(t,r,l){if(Iu)return t(r,l);Iu=!0;try{var o=t(r);return o}finally{if(Iu=!1,(ji!==null||Mi!==null)&&(lo(),ji&&(r=ji,t=Mi,Mi=ji=null,Im(r),t)))for(r=0;r<t.length;r++)Im(t[r])}}function _a(t,r){var l=t.stateNode;if(l===null)return null;var o=l[Rt]||null;if(o===null)return null;l=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(a(231,r,typeof l));return l}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(Fn)try{var La={};Object.defineProperty(La,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",La,La),window.removeEventListener("test",La,La)}catch{Uu=!1}var dr=null,Hu=null,vs=null;function Hm(){if(vs)return vs;var t,r=Hu,l=r.length,o,d="value"in dr?dr.value:dr.textContent,p=d.length;for(t=0;t<l&&r[t]===d[t];t++);var S=l-t;for(o=1;o<=S&&r[l-o]===d[p-o];o++);return vs=d.slice(t,1<o?1-o:void 0)}function Ss(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ws(){return!0}function Fm(){return!1}function Ot(t){function r(l,o,d,p,S){this._reactName=l,this._targetInst=d,this.type=o,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(l=t[T],this[T]=l?l(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ws:Fm,this.isPropagationStopped=Fm,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),r}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ts=Ot(qr),za=g({},qr,{view:0,detail:0}),j2=Ot(za),Fu,qu,Ba,Cs=g({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(Fu=t.screenX-Ba.screenX,qu=t.screenY-Ba.screenY):qu=Fu=0,Ba=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),qm=Ot(Cs),M2=g({},Cs,{dataTransfer:0}),D2=Ot(M2),N2=g({},za,{relatedTarget:0}),Gu=Ot(N2),R2=g({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),O2=Ot(R2),_2=g({},qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L2=Ot(_2),z2=g({},qr,{data:0}),Gm=Ot(z2),B2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I2(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=P2[t])?!!r[t]:!1}function Yu(){return I2}var U2=g({},za,{key:function(t){if(t.key){var r=B2[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Ss(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?V2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(t){return t.type==="keypress"?Ss(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ss(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H2=Ot(U2),F2=g({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=Ot(F2),q2=g({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),G2=Ot(q2),Y2=g({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),X2=Ot(Y2),J2=g({},Cs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K2=Ot(J2),Q2=g({},qr,{newState:0,oldState:0}),Z2=Ot(Q2),W2=[9,13,27,32],Xu=Fn&&"CompositionEvent"in window,Va=null;Fn&&"documentMode"in document&&(Va=document.documentMode);var $2=Fn&&"TextEvent"in window&&!Va,Xm=Fn&&(!Xu||Va&&8<Va&&11>=Va),Jm=" ",Km=!1;function Qm(t,r){switch(t){case"keyup":return W2.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function ew(t,r){switch(t){case"compositionend":return Zm(r);case"keypress":return r.which!==32?null:(Km=!0,Jm);case"textInput":return t=r.data,t===Jm&&Km?null:t;default:return null}}function tw(t,r){if(Di)return t==="compositionend"||!Xu&&Qm(t,r)?(t=Hm(),vs=Hu=dr=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Xm&&r.locale!=="ko"?null:r.data;default:return null}}var nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!nw[t.type]:r==="textarea"}function $m(t,r,l,o){ji?Mi?Mi.push(o):Mi=[o]:ji=o,r=mo(r,"onChange"),0<r.length&&(l=new Ts("onChange","change",null,l,o),t.push({event:l,listeners:r}))}var Pa=null,Ia=null;function rw(t){Ly(t,0)}function As(t){var r=Oa(t);if(_m(r))return t}function ep(t,r){if(t==="change")return r}var tp=!1;if(Fn){var Ju;if(Fn){var Ku="oninput"in document;if(!Ku){var np=document.createElement("div");np.setAttribute("oninput","return;"),Ku=typeof np.oninput=="function"}Ju=Ku}else Ju=!1;tp=Ju&&(!document.documentMode||9<document.documentMode)}function rp(){Pa&&(Pa.detachEvent("onpropertychange",ip),Ia=Pa=null)}function ip(t){if(t.propertyName==="value"&&As(Ia)){var r=[];$m(r,Ia,t,Pu(t)),Um(rw,r)}}function iw(t,r,l){t==="focusin"?(rp(),Pa=r,Ia=l,Pa.attachEvent("onpropertychange",ip)):t==="focusout"&&rp()}function aw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return As(Ia)}function lw(t,r){if(t==="click")return As(r)}function sw(t,r){if(t==="input"||t==="change")return As(r)}function ow(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var qt=typeof Object.is=="function"?Object.is:ow;function Ua(t,r){if(qt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var l=Object.keys(t),o=Object.keys(r);if(l.length!==o.length)return!1;for(o=0;o<l.length;o++){var d=l[o];if(!bi.call(r,d)||!qt(t[d],r[d]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,r){var l=ap(t);t=0;for(var o;l;){if(l.nodeType===3){if(o=t+l.textContent.length,t<=r&&o>=r)return{node:l,offset:r-t};t=o}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ap(l)}}function sp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?sp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function op(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=xs(t.document);r instanceof t.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)t=r.contentWindow;else break;r=xs(t.document)}return r}function Qu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var uw=Fn&&"documentMode"in document&&11>=document.documentMode,Ni=null,Zu=null,Ha=null,Wu=!1;function up(t,r,l){var o=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Wu||Ni==null||Ni!==xs(o)||(o=Ni,"selectionStart"in o&&Qu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ha&&Ua(Ha,o)||(Ha=o,o=mo(Zu,"onSelect"),0<o.length&&(r=new Ts("onSelect","select",null,r,l),t.push({event:r,listeners:o}),r.target=Ni)))}function Gr(t,r){var l={};return l[t.toLowerCase()]=r.toLowerCase(),l["Webkit"+t]="webkit"+r,l["Moz"+t]="moz"+r,l}var Ri={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionrun:Gr("Transition","TransitionRun"),transitionstart:Gr("Transition","TransitionStart"),transitioncancel:Gr("Transition","TransitionCancel"),transitionend:Gr("Transition","TransitionEnd")},$u={},cp={};Fn&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function Yr(t){if($u[t])return $u[t];if(!Ri[t])return t;var r=Ri[t],l;for(l in r)if(r.hasOwnProperty(l)&&l in cp)return $u[t]=r[l];return t}var fp=Yr("animationend"),dp=Yr("animationiteration"),hp=Yr("animationstart"),cw=Yr("transitionrun"),fw=Yr("transitionstart"),dw=Yr("transitioncancel"),mp=Yr("transitionend"),pp=new Map,ec="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ec.push("scrollEnd");function xn(t,r){pp.set(t,r),Fr(r,[t])}var ks=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},rn=[],Oi=0,tc=0;function Es(){for(var t=Oi,r=tc=Oi=0;r<t;){var l=rn[r];rn[r++]=null;var o=rn[r];rn[r++]=null;var d=rn[r];rn[r++]=null;var p=rn[r];if(rn[r++]=null,o!==null&&d!==null){var S=o.pending;S===null?d.next=d:(d.next=S.next,S.next=d),o.pending=d}p!==0&&gp(l,d,p)}}function js(t,r,l,o){rn[Oi++]=t,rn[Oi++]=r,rn[Oi++]=l,rn[Oi++]=o,tc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function nc(t,r,l,o){return js(t,r,l,o),Ms(t)}function Xr(t,r){return js(t,null,null,r),Ms(t)}function gp(t,r,l){t.lanes|=l;var o=t.alternate;o!==null&&(o.lanes|=l);for(var d=!1,p=t.return;p!==null;)p.childLanes|=l,o=p.alternate,o!==null&&(o.childLanes|=l),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(d=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,d&&r!==null&&(d=31-Fe(l),t=p.hiddenUpdates,o=t[d],o===null?t[d]=[r]:o.push(r),r.lane=l|536870912),p):null}function Ms(t){if(50<cl)throw cl=0,df=null,Error(a(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var _i={};function hw(t,r,l,o){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,r,l,o){return new hw(t,r,l,o)}function rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qn(t,r){var l=t.alternate;return l===null?(l=Gt(t.tag,r,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=r,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,r=t.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function yp(t,r){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,r=l.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Ds(t,r,l,o,d,p){var S=0;if(o=t,typeof t=="function")rc(t)&&(S=1);else if(typeof t=="string")S=xT(t,l,le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=Gt(31,l,r,d),t.elementType=I,t.lanes=p,t;case E:return Jr(l.children,d,p,r);case k:S=8,d|=24;break;case C:return t=Gt(12,l,r,d|2),t.elementType=C,t.lanes=p,t;case Y:return t=Gt(13,l,r,d),t.elementType=Y,t.lanes=p,t;case _:return t=Gt(19,l,r,d),t.elementType=_,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j:S=10;break e;case N:S=9;break e;case V:S=11;break e;case q:S=14;break e;case X:S=16,o=null;break e}S=29,l=Error(a(130,t===null?"null":typeof t,"")),o=null}return r=Gt(S,l,r,d),r.elementType=t,r.type=o,r.lanes=p,r}function Jr(t,r,l,o){return t=Gt(7,t,o,r),t.lanes=l,t}function ic(t,r,l){return t=Gt(6,t,null,r),t.lanes=l,t}function xp(t){var r=Gt(18,null,null,0);return r.stateNode=t,r}function ac(t,r,l){return r=Gt(4,t.children!==null?t.children:[],t.key,r),r.lanes=l,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var bp=new WeakMap;function an(t,r){if(typeof t=="object"&&t!==null){var l=bp.get(t);return l!==void 0?l:(r={value:t,source:r,stack:fs(r)},bp.set(t,r),r)}return{value:t,source:r,stack:fs(r)}}var Li=[],zi=0,Ns=null,Fa=0,ln=[],sn=0,hr=null,En=1,jn="";function Gn(t,r){Li[zi++]=Fa,Li[zi++]=Ns,Ns=t,Fa=r}function vp(t,r,l){ln[sn++]=En,ln[sn++]=jn,ln[sn++]=hr,hr=t;var o=En;t=jn;var d=32-Fe(o)-1;o&=~(1<<d),l+=1;var p=32-Fe(r)+d;if(30<p){var S=d-d%5;p=(o&(1<<S)-1).toString(32),o>>=S,d-=S,En=1<<32-Fe(r)+d|l<<d|o,jn=p+t}else En=1<<p|l<<d|o,jn=t}function lc(t){t.return!==null&&(Gn(t,1),vp(t,1,0))}function sc(t){for(;t===Ns;)Ns=Li[--zi],Li[zi]=null,Fa=Li[--zi],Li[zi]=null;for(;t===hr;)hr=ln[--sn],ln[sn]=null,jn=ln[--sn],ln[sn]=null,En=ln[--sn],ln[sn]=null}function Sp(t,r){ln[sn++]=En,ln[sn++]=jn,ln[sn++]=hr,En=r.id,jn=r.overflow,hr=t}var yt=null,Ke=null,De=!1,mr=null,on=!1,oc=Error(a(519));function pr(t){var r=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qa(an(r,t)),oc}function wp(t){var r=t.stateNode,l=t.type,o=t.memoizedProps;switch(r[gt]=t,r[Rt]=o,l){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(l=0;l<dl.length;l++)ke(dl[l],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ke("invalid",r),Lm(r,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ke("invalid",r);break;case"textarea":ke("invalid",r),Bm(r,o.value,o.defaultValue,o.children)}l=o.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||r.textContent===""+l||o.suppressHydrationWarning===!0||Py(r.textContent,l)?(o.popover!=null&&(ke("beforetoggle",r),ke("toggle",r)),o.onScroll!=null&&ke("scroll",r),o.onScrollEnd!=null&&ke("scrollend",r),o.onClick!=null&&(r.onclick=Hn),r=!0):r=!1,r||pr(t,!0)}function Tp(t){for(yt=t.return;yt;)switch(yt.tag){case 5:case 31:case 13:on=!1;return;case 27:case 3:on=!0;return;default:yt=yt.return}}function Bi(t){if(t!==yt)return!1;if(!De)return Tp(t),De=!0,!1;var r=t.tag,l;if((l=r!==3&&r!==27)&&((l=r===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Ef(t.type,t.memoizedProps)),l=!l),l&&Ke&&pr(t),Tp(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Ke=Jy(t)}else if(r===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Ke=Jy(t)}else r===27?(r=Ke,Mr(t.type)?(t=Rf,Rf=null,Ke=t):Ke=r):Ke=yt?cn(t.stateNode.nextSibling):null;return!0}function Kr(){Ke=yt=null,De=!1}function uc(){var t=mr;return t!==null&&(Bt===null?Bt=t:Bt.push.apply(Bt,t),mr=null),t}function qa(t){mr===null?mr=[t]:mr.push(t)}var cc=L(null),Qr=null,Yn=null;function gr(t,r,l){A(cc,r._currentValue),r._currentValue=l}function Xn(t){t._currentValue=cc.current,J(cc)}function fc(t,r,l){for(;t!==null;){var o=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),t===l)break;t=t.return}}function dc(t,r,l,o){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var p=d.dependencies;if(p!==null){var S=d.child;p=p.firstContext;e:for(;p!==null;){var T=p;p=d;for(var O=0;O<r.length;O++)if(T.context===r[O]){p.lanes|=l,T=p.alternate,T!==null&&(T.lanes|=l),fc(p.return,l,t),o||(S=null);break e}p=T.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(a(341));S.lanes|=l,p=S.alternate,p!==null&&(p.lanes|=l),fc(S,l,t),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===t){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function Vi(t,r,l,o){t=null;for(var d=r,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var T=d.type;qt(d.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(d===Se.current){if(S=d.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(yl):t=[yl])}d=d.return}t!==null&&dc(r,t,l,o),r.flags|=262144}function Rs(t){for(t=t.firstContext;t!==null;){if(!qt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zr(t){Qr=t,Yn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function xt(t){return Cp(Qr,t)}function Os(t,r){return Qr===null&&Zr(t),Cp(t,r)}function Cp(t,r){var l=r._currentValue;if(r={context:r,memoizedValue:l,next:null},Yn===null){if(t===null)throw Error(a(308));Yn=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Yn=Yn.next=r;return l}var mw=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(l,o){t.push(o)}};this.abort=function(){r.aborted=!0,t.forEach(function(l){return l()})}},pw=e.unstable_scheduleCallback,gw=e.unstable_NormalPriority,it={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hc(){return{controller:new mw,data:new Map,refCount:0}}function Ga(t){t.refCount--,t.refCount===0&&pw(gw,function(){t.controller.abort()})}var Ya=null,mc=0,Pi=0,Ii=null;function yw(t,r){if(Ya===null){var l=Ya=[];mc=0,Pi=xf(),Ii={status:"pending",value:void 0,then:function(o){l.push(o)}}}return mc++,r.then(Ap,Ap),r}function Ap(){if(--mc===0&&Ya!==null){Ii!==null&&(Ii.status="fulfilled");var t=Ya;Ya=null,Pi=0,Ii=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function xw(t,r){var l=[],o={status:"pending",value:null,reason:null,then:function(d){l.push(d)}};return t.then(function(){o.status="fulfilled",o.value=r;for(var d=0;d<l.length;d++)(0,l[d])(r)},function(d){for(o.status="rejected",o.reason=d,d=0;d<l.length;d++)(0,l[d])(void 0)}),o}var kp=P.S;P.S=function(t,r){uy=At(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&yw(t,r),kp!==null&&kp(t,r)};var Wr=L(null);function pc(){var t=Wr.current;return t!==null?t:qe.pooledCache}function _s(t,r){r===null?A(Wr,Wr.current):A(Wr,r.pool)}function Ep(){var t=pc();return t===null?null:{parent:it._currentValue,pool:t}}var Ui=Error(a(460)),gc=Error(a(474)),Ls=Error(a(542)),zs={then:function(){}};function jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mp(t,r,l){switch(l=t[l],l===void 0?t.push(r):l!==r&&(r.then(Hn,Hn),r=l),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,Np(t),t;default:if(typeof r.status=="string")r.then(Hn,Hn);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=r,t.status="pending",t.then(function(o){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=o}},function(o){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=o}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,Np(t),t}throw ei=r,Ui}}function $r(t){try{var r=t._init;return r(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ei=l,Ui):l}}var ei=null;function Dp(){if(ei===null)throw Error(a(459));var t=ei;return ei=null,t}function Np(t){if(t===Ui||t===Ls)throw Error(a(483))}var Hi=null,Xa=0;function Bs(t){var r=Xa;return Xa+=1,Hi===null&&(Hi=[]),Mp(Hi,t,r)}function Ja(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Vs(t,r){throw r.$$typeof===b?Error(a(525)):(t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function Rp(t){function r(B,z){if(t){var U=B.deletions;U===null?(B.deletions=[z],B.flags|=16):U.push(z)}}function l(B,z){if(!t)return null;for(;z!==null;)r(B,z),z=z.sibling;return null}function o(B){for(var z=new Map;B!==null;)B.key!==null?z.set(B.key,B):z.set(B.index,B),B=B.sibling;return z}function d(B,z){return B=qn(B,z),B.index=0,B.sibling=null,B}function p(B,z,U){return B.index=U,t?(U=B.alternate,U!==null?(U=U.index,U<z?(B.flags|=67108866,z):U):(B.flags|=67108866,z)):(B.flags|=1048576,z)}function S(B){return t&&B.alternate===null&&(B.flags|=67108866),B}function T(B,z,U,W){return z===null||z.tag!==6?(z=ic(U,B.mode,W),z.return=B,z):(z=d(z,U),z.return=B,z)}function O(B,z,U,W){var pe=U.type;return pe===E?K(B,z,U.props.children,W,U.key):z!==null&&(z.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===X&&$r(pe)===z.type)?(z=d(z,U.props),Ja(z,U),z.return=B,z):(z=Ds(U.type,U.key,U.props,null,B.mode,W),Ja(z,U),z.return=B,z)}function H(B,z,U,W){return z===null||z.tag!==4||z.stateNode.containerInfo!==U.containerInfo||z.stateNode.implementation!==U.implementation?(z=ac(U,B.mode,W),z.return=B,z):(z=d(z,U.children||[]),z.return=B,z)}function K(B,z,U,W,pe){return z===null||z.tag!==7?(z=Jr(U,B.mode,W,pe),z.return=B,z):(z=d(z,U),z.return=B,z)}function $(B,z,U){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=ic(""+z,B.mode,U),z.return=B,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return U=Ds(z.type,z.key,z.props,null,B.mode,U),Ja(U,z),U.return=B,U;case w:return z=ac(z,B.mode,U),z.return=B,z;case X:return z=$r(z),$(B,z,U)}if(ne(z)||te(z))return z=Jr(z,B.mode,U,null),z.return=B,z;if(typeof z.then=="function")return $(B,Bs(z),U);if(z.$$typeof===j)return $(B,Os(B,z),U);Vs(B,z)}return null}function F(B,z,U,W){var pe=z!==null?z.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return pe!==null?null:T(B,z,""+U,W);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case v:return U.key===pe?O(B,z,U,W):null;case w:return U.key===pe?H(B,z,U,W):null;case X:return U=$r(U),F(B,z,U,W)}if(ne(U)||te(U))return pe!==null?null:K(B,z,U,W,null);if(typeof U.then=="function")return F(B,z,Bs(U),W);if(U.$$typeof===j)return F(B,z,Os(B,U),W);Vs(B,U)}return null}function G(B,z,U,W,pe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return B=B.get(U)||null,T(z,B,""+W,pe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return B=B.get(W.key===null?U:W.key)||null,O(z,B,W,pe);case w:return B=B.get(W.key===null?U:W.key)||null,H(z,B,W,pe);case X:return W=$r(W),G(B,z,U,W,pe)}if(ne(W)||te(W))return B=B.get(U)||null,K(z,B,W,pe,null);if(typeof W.then=="function")return G(B,z,U,Bs(W),pe);if(W.$$typeof===j)return G(B,z,U,Os(z,W),pe);Vs(z,W)}return null}function ue(B,z,U,W){for(var pe=null,Oe=null,fe=z,we=z=0,Me=null;fe!==null&&we<U.length;we++){fe.index>we?(Me=fe,fe=null):Me=fe.sibling;var _e=F(B,fe,U[we],W);if(_e===null){fe===null&&(fe=Me);break}t&&fe&&_e.alternate===null&&r(B,fe),z=p(_e,z,we),Oe===null?pe=_e:Oe.sibling=_e,Oe=_e,fe=Me}if(we===U.length)return l(B,fe),De&&Gn(B,we),pe;if(fe===null){for(;we<U.length;we++)fe=$(B,U[we],W),fe!==null&&(z=p(fe,z,we),Oe===null?pe=fe:Oe.sibling=fe,Oe=fe);return De&&Gn(B,we),pe}for(fe=o(fe);we<U.length;we++)Me=G(fe,B,we,U[we],W),Me!==null&&(t&&Me.alternate!==null&&fe.delete(Me.key===null?we:Me.key),z=p(Me,z,we),Oe===null?pe=Me:Oe.sibling=Me,Oe=Me);return t&&fe.forEach(function(_r){return r(B,_r)}),De&&Gn(B,we),pe}function ye(B,z,U,W){if(U==null)throw Error(a(151));for(var pe=null,Oe=null,fe=z,we=z=0,Me=null,_e=U.next();fe!==null&&!_e.done;we++,_e=U.next()){fe.index>we?(Me=fe,fe=null):Me=fe.sibling;var _r=F(B,fe,_e.value,W);if(_r===null){fe===null&&(fe=Me);break}t&&fe&&_r.alternate===null&&r(B,fe),z=p(_r,z,we),Oe===null?pe=_r:Oe.sibling=_r,Oe=_r,fe=Me}if(_e.done)return l(B,fe),De&&Gn(B,we),pe;if(fe===null){for(;!_e.done;we++,_e=U.next())_e=$(B,_e.value,W),_e!==null&&(z=p(_e,z,we),Oe===null?pe=_e:Oe.sibling=_e,Oe=_e);return De&&Gn(B,we),pe}for(fe=o(fe);!_e.done;we++,_e=U.next())_e=G(fe,B,we,_e.value,W),_e!==null&&(t&&_e.alternate!==null&&fe.delete(_e.key===null?we:_e.key),z=p(_e,z,we),Oe===null?pe=_e:Oe.sibling=_e,Oe=_e);return t&&fe.forEach(function(MT){return r(B,MT)}),De&&Gn(B,we),pe}function He(B,z,U,W){if(typeof U=="object"&&U!==null&&U.type===E&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case v:e:{for(var pe=U.key;z!==null;){if(z.key===pe){if(pe=U.type,pe===E){if(z.tag===7){l(B,z.sibling),W=d(z,U.props.children),W.return=B,B=W;break e}}else if(z.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===X&&$r(pe)===z.type){l(B,z.sibling),W=d(z,U.props),Ja(W,U),W.return=B,B=W;break e}l(B,z);break}else r(B,z);z=z.sibling}U.type===E?(W=Jr(U.props.children,B.mode,W,U.key),W.return=B,B=W):(W=Ds(U.type,U.key,U.props,null,B.mode,W),Ja(W,U),W.return=B,B=W)}return S(B);case w:e:{for(pe=U.key;z!==null;){if(z.key===pe)if(z.tag===4&&z.stateNode.containerInfo===U.containerInfo&&z.stateNode.implementation===U.implementation){l(B,z.sibling),W=d(z,U.children||[]),W.return=B,B=W;break e}else{l(B,z);break}else r(B,z);z=z.sibling}W=ac(U,B.mode,W),W.return=B,B=W}return S(B);case X:return U=$r(U),He(B,z,U,W)}if(ne(U))return ue(B,z,U,W);if(te(U)){if(pe=te(U),typeof pe!="function")throw Error(a(150));return U=pe.call(U),ye(B,z,U,W)}if(typeof U.then=="function")return He(B,z,Bs(U),W);if(U.$$typeof===j)return He(B,z,Os(B,U),W);Vs(B,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,z!==null&&z.tag===6?(l(B,z.sibling),W=d(z,U),W.return=B,B=W):(l(B,z),W=ic(U,B.mode,W),W.return=B,B=W),S(B)):l(B,z)}return function(B,z,U,W){try{Xa=0;var pe=He(B,z,U,W);return Hi=null,pe}catch(fe){if(fe===Ui||fe===Ls)throw fe;var Oe=Gt(29,fe,null,B.mode);return Oe.lanes=W,Oe.return=B,Oe}finally{}}}var ti=Rp(!0),Op=Rp(!1),yr=!1;function yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function br(t,r,l){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var d=o.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),o.pending=r,r=Ms(t),gp(t,null,l),r}return js(t,o,r,l),Ms(t)}function Ka(t,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194048)!==0)){var o=r.lanes;o&=t.pendingLanes,l|=o,r.lanes=l,Cm(t,l)}}function bc(t,r){var l=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,l===o)){var d=null,p=null;if(l=l.firstBaseUpdate,l!==null){do{var S={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};p===null?d=p=S:p=p.next=S,l=l.next}while(l!==null);p===null?d=p=r:p=p.next=r}else d=p=r;l={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:o.shared,callbacks:o.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=r:t.next=r,l.lastBaseUpdate=r}var vc=!1;function Qa(){if(vc){var t=Ii;if(t!==null)throw t}}function Za(t,r,l,o){vc=!1;var d=t.updateQueue;yr=!1;var p=d.firstBaseUpdate,S=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var O=T,H=O.next;O.next=null,S===null?p=H:S.next=H,S=O;var K=t.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==S&&(T===null?K.firstBaseUpdate=H:T.next=H,K.lastBaseUpdate=O))}if(p!==null){var $=d.baseState;S=0,K=H=O=null,T=p;do{var F=T.lane&-536870913,G=F!==T.lane;if(G?(je&F)===F:(o&F)===F){F!==0&&F===Pi&&(vc=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ue=t,ye=T;F=r;var He=l;switch(ye.tag){case 1:if(ue=ye.payload,typeof ue=="function"){$=ue.call(He,$,F);break e}$=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ye.payload,F=typeof ue=="function"?ue.call(He,$,F):ue,F==null)break e;$=g({},$,F);break e;case 2:yr=!0}}F=T.callback,F!==null&&(t.flags|=64,G&&(t.flags|=8192),G=d.callbacks,G===null?d.callbacks=[F]:G.push(F))}else G={lane:F,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(H=K=G,O=$):K=K.next=G,S|=F;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;G=T,T=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);K===null&&(O=$),d.baseState=O,d.firstBaseUpdate=H,d.lastBaseUpdate=K,p===null&&(d.shared.lanes=0),Cr|=S,t.lanes=S,t.memoizedState=$}}function _p(t,r){if(typeof t!="function")throw Error(a(191,t));t.call(r)}function Lp(t,r){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)_p(l[t],r)}var Fi=L(null),Ps=L(0);function zp(t,r){t=nr,A(Ps,t),A(Fi,r),nr=t|r.baseLanes}function Sc(){A(Ps,nr),A(Fi,Fi.current)}function wc(){nr=Ps.current,J(Fi),J(Ps)}var Yt=L(null),un=null;function vr(t){var r=t.alternate;A(nt,nt.current&1),A(Yt,t),un===null&&(r===null||Fi.current!==null||r.memoizedState!==null)&&(un=t)}function Tc(t){A(nt,nt.current),A(Yt,t),un===null&&(un=t)}function Bp(t){t.tag===22?(A(nt,nt.current),A(Yt,t),un===null&&(un=t)):Sr()}function Sr(){A(nt,nt.current),A(Yt,Yt.current)}function Xt(t){J(Yt),un===t&&(un=null),J(nt)}var nt=L(0);function Is(t){for(var r=t;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Df(l)||Nf(l)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Jn=0,ve=null,Ie=null,at=null,Us=!1,qi=!1,ni=!1,Hs=0,Wa=0,Gi=null,bw=0;function $e(){throw Error(a(321))}function Cc(t,r){if(r===null)return!1;for(var l=0;l<r.length&&l<t.length;l++)if(!qt(t[l],r[l]))return!1;return!0}function Ac(t,r,l,o,d,p){return Jn=p,ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,P.H=t===null||t.memoizedState===null?vg:Ic,ni=!1,p=l(o,d),ni=!1,qi&&(p=Pp(r,l,o,d)),Vp(t),p}function Vp(t){P.H=tl;var r=Ie!==null&&Ie.next!==null;if(Jn=0,at=Ie=ve=null,Us=!1,Wa=0,Gi=null,r)throw Error(a(300));t===null||lt||(t=t.dependencies,t!==null&&Rs(t)&&(lt=!0))}function Pp(t,r,l,o){ve=t;var d=0;do{if(qi&&(Gi=null),Wa=0,qi=!1,25<=d)throw Error(a(301));if(d+=1,at=Ie=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}P.H=Sg,p=r(l,o)}while(qi);return p}function vw(){var t=P.H,r=t.useState()[0];return r=typeof r.then=="function"?$a(r):r,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(ve.flags|=1024),r}function kc(){var t=Hs!==0;return Hs=0,t}function Ec(t,r,l){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~l}function jc(t){if(Us){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Us=!1}Jn=0,at=Ie=ve=null,qi=!1,Wa=Hs=0,Gi=null}function Et(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?ve.memoizedState=at=t:at=at.next=t,at}function rt(){if(Ie===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var r=at===null?ve.memoizedState:at.next;if(r!==null)at=r,Ie=t;else{if(t===null)throw ve.alternate===null?Error(a(467)):Error(a(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},at===null?ve.memoizedState=at=t:at=at.next=t}return at}function Fs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $a(t){var r=Wa;return Wa+=1,Gi===null&&(Gi=[]),t=Mp(Gi,t,r),r=ve,(at===null?r.memoizedState:at.next)===null&&(r=r.alternate,P.H=r===null||r.memoizedState===null?vg:Ic),t}function qs(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $a(t);if(t.$$typeof===j)return xt(t)}throw Error(a(438,String(t)))}function Mc(t){var r=null,l=ve.updateQueue;if(l!==null&&(r=l.memoCache),r==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(r={data:o.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),l===null&&(l=Fs(),ve.updateQueue=l),l.memoCache=r,l=r.data[r.index],l===void 0)for(l=r.data[r.index]=Array(t),o=0;o<t;o++)l[o]=R;return r.index++,l}function Kn(t,r){return typeof r=="function"?r(t):r}function Gs(t){var r=rt();return Dc(r,Ie,t)}function Dc(t,r,l){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=l;var d=t.baseQueue,p=o.pending;if(p!==null){if(d!==null){var S=d.next;d.next=p.next,p.next=S}r.baseQueue=d=p,o.pending=null}if(p=t.baseState,d===null)t.memoizedState=p;else{r=d.next;var T=S=null,O=null,H=r,K=!1;do{var $=H.lane&-536870913;if($!==H.lane?(je&$)===$:(Jn&$)===$){var F=H.revertLane;if(F===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),$===Pi&&(K=!0);else if((Jn&F)===F){H=H.next,F===Pi&&(K=!0);continue}else $={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},O===null?(T=O=$,S=p):O=O.next=$,ve.lanes|=F,Cr|=F;$=H.action,ni&&l(p,$),p=H.hasEagerState?H.eagerState:l(p,$)}else F={lane:$,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},O===null?(T=O=F,S=p):O=O.next=F,ve.lanes|=$,Cr|=$;H=H.next}while(H!==null&&H!==r);if(O===null?S=p:O.next=T,!qt(p,t.memoizedState)&&(lt=!0,K&&(l=Ii,l!==null)))throw l;t.memoizedState=p,t.baseState=S,t.baseQueue=O,o.lastRenderedState=p}return d===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Nc(t){var r=rt(),l=r.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=t;var o=l.dispatch,d=l.pending,p=r.memoizedState;if(d!==null){l.pending=null;var S=d=d.next;do p=t(p,S.action),S=S.next;while(S!==d);qt(p,r.memoizedState)||(lt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),l.lastRenderedState=p}return[p,o]}function Ip(t,r,l){var o=ve,d=rt(),p=De;if(p){if(l===void 0)throw Error(a(407));l=l()}else l=r();var S=!qt((Ie||d).memoizedState,l);if(S&&(d.memoizedState=l,lt=!0),d=d.queue,_c(Fp.bind(null,o,d,t),[t]),d.getSnapshot!==r||S||at!==null&&at.memoizedState.tag&1){if(o.flags|=2048,Yi(9,{destroy:void 0},Hp.bind(null,o,d,l,r),null),qe===null)throw Error(a(349));p||(Jn&127)!==0||Up(o,r,l)}return l}function Up(t,r,l){t.flags|=16384,t={getSnapshot:r,value:l},r=ve.updateQueue,r===null?(r=Fs(),ve.updateQueue=r,r.stores=[t]):(l=r.stores,l===null?r.stores=[t]:l.push(t))}function Hp(t,r,l,o){r.value=l,r.getSnapshot=o,qp(r)&&Gp(t)}function Fp(t,r,l){return l(function(){qp(r)&&Gp(t)})}function qp(t){var r=t.getSnapshot;t=t.value;try{var l=r();return!qt(t,l)}catch{return!0}}function Gp(t){var r=Xr(t,2);r!==null&&Vt(r,t,2)}function Rc(t){var r=Et();if(typeof t=="function"){var l=t;if(t=l(),ni){Nt(!0);try{l()}finally{Nt(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:t},r}function Yp(t,r,l,o){return t.baseState=l,Dc(t,Ie,typeof o=="function"?o:Kn)}function Sw(t,r,l,o,d){if(Js(t))throw Error(a(485));if(t=r.action,t!==null){var p={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};P.T!==null?l(!0):p.isTransition=!1,o(p),l=r.pending,l===null?(p.next=r.pending=p,Xp(r,p)):(p.next=l.next,r.pending=l.next=p)}}function Xp(t,r){var l=r.action,o=r.payload,d=t.state;if(r.isTransition){var p=P.T,S={};P.T=S;try{var T=l(d,o),O=P.S;O!==null&&O(S,T),Jp(t,r,T)}catch(H){Oc(t,r,H)}finally{p!==null&&S.types!==null&&(p.types=S.types),P.T=p}}else try{p=l(d,o),Jp(t,r,p)}catch(H){Oc(t,r,H)}}function Jp(t,r,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(o){Kp(t,r,o)},function(o){return Oc(t,r,o)}):Kp(t,r,l)}function Kp(t,r,l){r.status="fulfilled",r.value=l,Qp(r),t.state=l,r=t.pending,r!==null&&(l=r.next,l===r?t.pending=null:(l=l.next,r.next=l,Xp(t,l)))}function Oc(t,r,l){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do r.status="rejected",r.reason=l,Qp(r),r=r.next;while(r!==o)}t.action=null}function Qp(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function Zp(t,r){return r}function Wp(t,r){if(De){var l=qe.formState;if(l!==null){e:{var o=ve;if(De){if(Ke){t:{for(var d=Ke,p=on;d.nodeType!==8;){if(!p){d=null;break t}if(d=cn(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){Ke=cn(d.nextSibling),o=d.data==="F!";break e}}pr(o)}o=!1}o&&(r=l[0])}}return l=Et(),l.memoizedState=l.baseState=r,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:r},l.queue=o,l=yg.bind(null,ve,o),o.dispatch=l,o=Rc(!1),p=Pc.bind(null,ve,!1,o.queue),o=Et(),d={state:r,dispatch:null,action:t,pending:null},o.queue=d,l=Sw.bind(null,ve,d,p,l),d.dispatch=l,o.memoizedState=t,[r,l,!1]}function $p(t){var r=rt();return eg(r,Ie,t)}function eg(t,r,l){if(r=Dc(t,r,Zp)[0],t=Gs(Kn)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var o=$a(r)}catch(S){throw S===Ui?Ls:S}else o=r;r=rt();var d=r.queue,p=d.dispatch;return l!==r.memoizedState&&(ve.flags|=2048,Yi(9,{destroy:void 0},ww.bind(null,d,l),null)),[o,p,t]}function ww(t,r){t.action=r}function tg(t){var r=rt(),l=Ie;if(l!==null)return eg(r,l,t);rt(),r=r.memoizedState,l=rt();var o=l.queue.dispatch;return l.memoizedState=t,[r,o,!1]}function Yi(t,r,l,o){return t={tag:t,create:l,deps:o,inst:r,next:null},r=ve.updateQueue,r===null&&(r=Fs(),ve.updateQueue=r),l=r.lastEffect,l===null?r.lastEffect=t.next=t:(o=l.next,l.next=t,t.next=o,r.lastEffect=t),t}function ng(){return rt().memoizedState}function Ys(t,r,l,o){var d=Et();ve.flags|=t,d.memoizedState=Yi(1|r,{destroy:void 0},l,o===void 0?null:o)}function Xs(t,r,l,o){var d=rt();o=o===void 0?null:o;var p=d.memoizedState.inst;Ie!==null&&o!==null&&Cc(o,Ie.memoizedState.deps)?d.memoizedState=Yi(r,p,l,o):(ve.flags|=t,d.memoizedState=Yi(1|r,p,l,o))}function rg(t,r){Ys(8390656,8,t,r)}function _c(t,r){Xs(2048,8,t,r)}function Tw(t){ve.flags|=4;var r=ve.updateQueue;if(r===null)r=Fs(),ve.updateQueue=r,r.events=[t];else{var l=r.events;l===null?r.events=[t]:l.push(t)}}function ig(t){var r=rt().memoizedState;return Tw({ref:r,nextImpl:t}),function(){if((Le&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}function ag(t,r){return Xs(4,2,t,r)}function lg(t,r){return Xs(4,4,t,r)}function sg(t,r){if(typeof r=="function"){t=t();var l=r(t);return function(){typeof l=="function"?l():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function og(t,r,l){l=l!=null?l.concat([t]):null,Xs(4,4,sg.bind(null,r,t),l)}function Lc(){}function ug(t,r){var l=rt();r=r===void 0?null:r;var o=l.memoizedState;return r!==null&&Cc(r,o[1])?o[0]:(l.memoizedState=[t,r],t)}function cg(t,r){var l=rt();r=r===void 0?null:r;var o=l.memoizedState;if(r!==null&&Cc(r,o[1]))return o[0];if(o=t(),ni){Nt(!0);try{t()}finally{Nt(!1)}}return l.memoizedState=[o,r],o}function zc(t,r,l){return l===void 0||(Jn&1073741824)!==0&&(je&261930)===0?t.memoizedState=r:(t.memoizedState=l,t=fy(),ve.lanes|=t,Cr|=t,l)}function fg(t,r,l,o){return qt(l,r)?l:Fi.current!==null?(t=zc(t,l,o),qt(t,r)||(lt=!0),t):(Jn&42)===0||(Jn&1073741824)!==0&&(je&261930)===0?(lt=!0,t.memoizedState=l):(t=fy(),ve.lanes|=t,Cr|=t,r)}function dg(t,r,l,o,d){var p=ee.p;ee.p=p!==0&&8>p?p:8;var S=P.T,T={};P.T=T,Pc(t,!1,r,l);try{var O=d(),H=P.S;if(H!==null&&H(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var K=xw(O,o);el(t,r,K,Qt(t))}else el(t,r,o,Qt(t))}catch($){el(t,r,{then:function(){},status:"rejected",reason:$},Qt())}finally{ee.p=p,S!==null&&T.types!==null&&(S.types=T.types),P.T=S}}function Cw(){}function Bc(t,r,l,o){if(t.tag!==5)throw Error(a(476));var d=hg(t).queue;dg(t,d,r,ie,l===null?Cw:function(){return mg(t),l(o)})}function hg(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:ie},next:null};var l={};return r.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:l},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function mg(t){var r=hg(t);r.next===null&&(r=t.alternate.memoizedState),el(t,r.next.queue,{},Qt())}function Vc(){return xt(yl)}function pg(){return rt().memoizedState}function gg(){return rt().memoizedState}function Aw(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var l=Qt();t=xr(l);var o=br(r,t,l);o!==null&&(Vt(o,r,l),Ka(o,r,l)),r={cache:hc()},t.payload=r;return}r=r.return}}function kw(t,r,l){var o=Qt();l={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Js(t)?xg(r,l):(l=nc(t,r,l,o),l!==null&&(Vt(l,t,o),bg(l,r,o)))}function yg(t,r,l){var o=Qt();el(t,r,l,o)}function el(t,r,l,o){var d={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Js(t))xg(r,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var S=r.lastRenderedState,T=p(S,l);if(d.hasEagerState=!0,d.eagerState=T,qt(T,S))return js(t,r,d,0),qe===null&&Es(),!1}catch{}finally{}if(l=nc(t,r,d,o),l!==null)return Vt(l,t,o),bg(l,r,o),!0}return!1}function Pc(t,r,l,o){if(o={lane:2,revertLane:xf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Js(t)){if(r)throw Error(a(479))}else r=nc(t,l,o,2),r!==null&&Vt(r,t,2)}function Js(t){var r=t.alternate;return t===ve||r!==null&&r===ve}function xg(t,r){qi=Us=!0;var l=t.pending;l===null?r.next=r:(r.next=l.next,l.next=r),t.pending=r}function bg(t,r,l){if((l&4194048)!==0){var o=r.lanes;o&=t.pendingLanes,l|=o,r.lanes=l,Cm(t,l)}}var tl={readContext:xt,use:qs,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};tl.useEffectEvent=$e;var vg={readContext:xt,use:qs,useCallback:function(t,r){return Et().memoizedState=[t,r===void 0?null:r],t},useContext:xt,useEffect:rg,useImperativeHandle:function(t,r,l){l=l!=null?l.concat([t]):null,Ys(4194308,4,sg.bind(null,r,t),l)},useLayoutEffect:function(t,r){return Ys(4194308,4,t,r)},useInsertionEffect:function(t,r){Ys(4,2,t,r)},useMemo:function(t,r){var l=Et();r=r===void 0?null:r;var o=t();if(ni){Nt(!0);try{t()}finally{Nt(!1)}}return l.memoizedState=[o,r],o},useReducer:function(t,r,l){var o=Et();if(l!==void 0){var d=l(r);if(ni){Nt(!0);try{l(r)}finally{Nt(!1)}}}else d=r;return o.memoizedState=o.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},o.queue=t,t=t.dispatch=kw.bind(null,ve,t),[o.memoizedState,t]},useRef:function(t){var r=Et();return t={current:t},r.memoizedState=t},useState:function(t){t=Rc(t);var r=t.queue,l=yg.bind(null,ve,r);return r.dispatch=l,[t.memoizedState,l]},useDebugValue:Lc,useDeferredValue:function(t,r){var l=Et();return zc(l,t,r)},useTransition:function(){var t=Rc(!1);return t=dg.bind(null,ve,t.queue,!0,!1),Et().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,l){var o=ve,d=Et();if(De){if(l===void 0)throw Error(a(407));l=l()}else{if(l=r(),qe===null)throw Error(a(349));(je&127)!==0||Up(o,r,l)}d.memoizedState=l;var p={value:l,getSnapshot:r};return d.queue=p,rg(Fp.bind(null,o,p,t),[t]),o.flags|=2048,Yi(9,{destroy:void 0},Hp.bind(null,o,p,l,r),null),l},useId:function(){var t=Et(),r=qe.identifierPrefix;if(De){var l=jn,o=En;l=(o&~(1<<32-Fe(o)-1)).toString(32)+l,r="_"+r+"R_"+l,l=Hs++,0<l&&(r+="H"+l.toString(32)),r+="_"}else l=bw++,r="_"+r+"r_"+l.toString(32)+"_";return t.memoizedState=r},useHostTransitionStatus:Vc,useFormState:Wp,useActionState:Wp,useOptimistic:function(t){var r=Et();r.memoizedState=r.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=l,r=Pc.bind(null,ve,!0,l),l.dispatch=r,[t,r]},useMemoCache:Mc,useCacheRefresh:function(){return Et().memoizedState=Aw.bind(null,ve)},useEffectEvent:function(t){var r=Et(),l={impl:t};return r.memoizedState=l,function(){if((Le&2)!==0)throw Error(a(440));return l.impl.apply(void 0,arguments)}}},Ic={readContext:xt,use:qs,useCallback:ug,useContext:xt,useEffect:_c,useImperativeHandle:og,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:cg,useReducer:Gs,useRef:ng,useState:function(){return Gs(Kn)},useDebugValue:Lc,useDeferredValue:function(t,r){var l=rt();return fg(l,Ie.memoizedState,t,r)},useTransition:function(){var t=Gs(Kn)[0],r=rt().memoizedState;return[typeof t=="boolean"?t:$a(t),r]},useSyncExternalStore:Ip,useId:pg,useHostTransitionStatus:Vc,useFormState:$p,useActionState:$p,useOptimistic:function(t,r){var l=rt();return Yp(l,Ie,t,r)},useMemoCache:Mc,useCacheRefresh:gg};Ic.useEffectEvent=ig;var Sg={readContext:xt,use:qs,useCallback:ug,useContext:xt,useEffect:_c,useImperativeHandle:og,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:cg,useReducer:Nc,useRef:ng,useState:function(){return Nc(Kn)},useDebugValue:Lc,useDeferredValue:function(t,r){var l=rt();return Ie===null?zc(l,t,r):fg(l,Ie.memoizedState,t,r)},useTransition:function(){var t=Nc(Kn)[0],r=rt().memoizedState;return[typeof t=="boolean"?t:$a(t),r]},useSyncExternalStore:Ip,useId:pg,useHostTransitionStatus:Vc,useFormState:tg,useActionState:tg,useOptimistic:function(t,r){var l=rt();return Ie!==null?Yp(l,Ie,t,r):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:gg};Sg.useEffectEvent=ig;function Uc(t,r,l,o){r=t.memoizedState,l=l(o,r),l=l==null?r:g({},r,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Hc={enqueueSetState:function(t,r,l){t=t._reactInternals;var o=Qt(),d=xr(o);d.payload=r,l!=null&&(d.callback=l),r=br(t,d,o),r!==null&&(Vt(r,t,o),Ka(r,t,o))},enqueueReplaceState:function(t,r,l){t=t._reactInternals;var o=Qt(),d=xr(o);d.tag=1,d.payload=r,l!=null&&(d.callback=l),r=br(t,d,o),r!==null&&(Vt(r,t,o),Ka(r,t,o))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var l=Qt(),o=xr(l);o.tag=2,r!=null&&(o.callback=r),r=br(t,o,l),r!==null&&(Vt(r,t,l),Ka(r,t,l))}};function wg(t,r,l,o,d,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,p,S):r.prototype&&r.prototype.isPureReactComponent?!Ua(l,o)||!Ua(d,p):!0}function Tg(t,r,l,o){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,o),r.state!==t&&Hc.enqueueReplaceState(r,r.state,null)}function ri(t,r){var l=r;if("ref"in r){l={};for(var o in r)o!=="ref"&&(l[o]=r[o])}if(t=t.defaultProps){l===r&&(l=g({},l));for(var d in t)l[d]===void 0&&(l[d]=t[d])}return l}function Cg(t){ks(t)}function Ag(t){console.error(t)}function kg(t){ks(t)}function Ks(t,r){try{var l=t.onUncaughtError;l(r.value,{componentStack:r.stack})}catch(o){setTimeout(function(){throw o})}}function Eg(t,r,l){try{var o=t.onCaughtError;o(l.value,{componentStack:l.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Fc(t,r,l){return l=xr(l),l.tag=3,l.payload={element:null},l.callback=function(){Ks(t,r)},l}function jg(t){return t=xr(t),t.tag=3,t}function Mg(t,r,l,o){var d=l.type.getDerivedStateFromError;if(typeof d=="function"){var p=o.value;t.payload=function(){return d(p)},t.callback=function(){Eg(r,l,o)}}var S=l.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Eg(r,l,o),typeof d!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Ew(t,r,l,o,d){if(l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(r=l.alternate,r!==null&&Vi(r,l,d,!0),l=Yt.current,l!==null){switch(l.tag){case 31:case 13:return un===null?so():l.alternate===null&&et===0&&(et=3),l.flags&=-257,l.flags|=65536,l.lanes=d,o===zs?l.flags|=16384:(r=l.updateQueue,r===null?l.updateQueue=new Set([o]):r.add(o),pf(t,o,d)),!1;case 22:return l.flags|=65536,o===zs?l.flags|=16384:(r=l.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([o])},l.updateQueue=r):(l=r.retryQueue,l===null?r.retryQueue=new Set([o]):l.add(o)),pf(t,o,d)),!1}throw Error(a(435,l.tag))}return pf(t,o,d),so(),!1}if(De)return r=Yt.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,o!==oc&&(t=Error(a(422),{cause:o}),qa(an(t,l)))):(o!==oc&&(r=Error(a(423),{cause:o}),qa(an(r,l))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,o=an(o,l),d=Fc(t.stateNode,o,d),bc(t,d),et!==4&&(et=2)),!1;var p=Error(a(520),{cause:o});if(p=an(p,l),ul===null?ul=[p]:ul.push(p),et!==4&&(et=2),r===null)return!0;o=an(o,l),l=r;do{switch(l.tag){case 3:return l.flags|=65536,t=d&-d,l.lanes|=t,t=Fc(l.stateNode,o,t),bc(l,t),!1;case 1:if(r=l.type,p=l.stateNode,(l.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ar===null||!Ar.has(p))))return l.flags|=65536,d&=-d,l.lanes|=d,d=jg(d),Mg(d,t,l,o),bc(l,d),!1}l=l.return}while(l!==null);return!1}var qc=Error(a(461)),lt=!1;function bt(t,r,l,o){r.child=t===null?Op(r,null,l,o):ti(r,t.child,l,o)}function Dg(t,r,l,o,d){l=l.render;var p=r.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return Zr(r),o=Ac(t,r,l,S,p,d),T=kc(),t!==null&&!lt?(Ec(t,r,d),Qn(t,r,d)):(De&&T&&lc(r),r.flags|=1,bt(t,r,o,d),r.child)}function Ng(t,r,l,o,d){if(t===null){var p=l.type;return typeof p=="function"&&!rc(p)&&p.defaultProps===void 0&&l.compare===null?(r.tag=15,r.type=p,Rg(t,r,p,o,d)):(t=Ds(l.type,null,o,r,r.mode,d),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,!Wc(t,d)){var S=p.memoizedProps;if(l=l.compare,l=l!==null?l:Ua,l(S,o)&&t.ref===r.ref)return Qn(t,r,d)}return r.flags|=1,t=qn(p,o),t.ref=r.ref,t.return=r,r.child=t}function Rg(t,r,l,o,d){if(t!==null){var p=t.memoizedProps;if(Ua(p,o)&&t.ref===r.ref)if(lt=!1,r.pendingProps=o=p,Wc(t,d))(t.flags&131072)!==0&&(lt=!0);else return r.lanes=t.lanes,Qn(t,r,d)}return Gc(t,r,l,o,d)}function Og(t,r,l,o){var d=o.children,p=t!==null?t.memoizedState:null;if(t===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((r.flags&128)!==0){if(p=p!==null?p.baseLanes|l:l,t!==null){for(o=r.child=t.child,d=0;o!==null;)d=d|o.lanes|o.childLanes,o=o.sibling;o=d&~p}else o=0,r.child=null;return _g(t,r,p,l,o)}if((l&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&_s(r,p!==null?p.cachePool:null),p!==null?zp(r,p):Sc(),Bp(r);else return o=r.lanes=536870912,_g(t,r,p!==null?p.baseLanes|l:l,l,o)}else p!==null?(_s(r,p.cachePool),zp(r,p),Sr(),r.memoizedState=null):(t!==null&&_s(r,null),Sc(),Sr());return bt(t,r,d,l),r.child}function nl(t,r){return t!==null&&t.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function _g(t,r,l,o,d){var p=pc();return p=p===null?null:{parent:it._currentValue,pool:p},r.memoizedState={baseLanes:l,cachePool:p},t!==null&&_s(r,null),Sc(),Bp(r),t!==null&&Vi(t,r,o,!0),r.childLanes=d,null}function Qs(t,r){return r=Ws({mode:r.mode,children:r.children},t.mode),r.ref=t.ref,t.child=r,r.return=t,r}function Lg(t,r,l){return ti(r,t.child,null,l),t=Qs(r,r.pendingProps),t.flags|=2,Xt(r),r.memoizedState=null,t}function jw(t,r,l){var o=r.pendingProps,d=(r.flags&128)!==0;if(r.flags&=-129,t===null){if(De){if(o.mode==="hidden")return t=Qs(r,o),r.lanes=536870912,nl(null,t);if(Tc(r),(t=Ke)?(t=Xy(t,on),t=t!==null&&t.data==="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:hr!==null?{id:En,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},l=xp(t),l.return=r,r.child=l,yt=r,Ke=null)):t=null,t===null)throw pr(r);return r.lanes=536870912,null}return Qs(r,o)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(Tc(r),d)if(r.flags&256)r.flags&=-257,r=Lg(t,r,l);else if(r.memoizedState!==null)r.child=t.child,r.flags|=128,r=null;else throw Error(a(558));else if(lt||Vi(t,r,l,!1),d=(l&t.childLanes)!==0,lt||d){if(o=qe,o!==null&&(S=Am(o,l),S!==0&&S!==p.retryLane))throw p.retryLane=S,Xr(t,S),Vt(o,t,S),qc;so(),r=Lg(t,r,l)}else t=p.treeContext,Ke=cn(S.nextSibling),yt=r,De=!0,mr=null,on=!1,t!==null&&Sp(r,t),r=Qs(r,o),r.flags|=4096;return r}return t=qn(t.child,{mode:o.mode,children:o.children}),t.ref=r.ref,r.child=t,t.return=r,t}function Zs(t,r){var l=r.ref;if(l===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(a(284));(t===null||t.ref!==l)&&(r.flags|=4194816)}}function Gc(t,r,l,o,d){return Zr(r),l=Ac(t,r,l,o,void 0,d),o=kc(),t!==null&&!lt?(Ec(t,r,d),Qn(t,r,d)):(De&&o&&lc(r),r.flags|=1,bt(t,r,l,d),r.child)}function zg(t,r,l,o,d,p){return Zr(r),r.updateQueue=null,l=Pp(r,o,l,d),Vp(t),o=kc(),t!==null&&!lt?(Ec(t,r,p),Qn(t,r,p)):(De&&o&&lc(r),r.flags|=1,bt(t,r,l,p),r.child)}function Bg(t,r,l,o,d){if(Zr(r),r.stateNode===null){var p=_i,S=l.contextType;typeof S=="object"&&S!==null&&(p=xt(S)),p=new l(o,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Hc,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=o,p.state=r.memoizedState,p.refs={},yc(r),S=l.contextType,p.context=typeof S=="object"&&S!==null?xt(S):_i,p.state=r.memoizedState,S=l.getDerivedStateFromProps,typeof S=="function"&&(Uc(r,l,S,o),p.state=r.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Hc.enqueueReplaceState(p,p.state,null),Za(r,o,p,d),Qa(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),o=!0}else if(t===null){p=r.stateNode;var T=r.memoizedProps,O=ri(l,T);p.props=O;var H=p.context,K=l.contextType;S=_i,typeof K=="object"&&K!==null&&(S=xt(K));var $=l.getDerivedStateFromProps;K=typeof $=="function"||typeof p.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,K||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(T||H!==S)&&Tg(r,p,o,S),yr=!1;var F=r.memoizedState;p.state=F,Za(r,o,p,d),Qa(),H=r.memoizedState,T||F!==H||yr?(typeof $=="function"&&(Uc(r,l,$,o),H=r.memoizedState),(O=yr||wg(r,l,O,o,F,H,S))?(K||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=H),p.props=o,p.state=H,p.context=S,o=O):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{p=r.stateNode,xc(t,r),S=r.memoizedProps,K=ri(l,S),p.props=K,$=r.pendingProps,F=p.context,H=l.contextType,O=_i,typeof H=="object"&&H!==null&&(O=xt(H)),T=l.getDerivedStateFromProps,(H=typeof T=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==$||F!==O)&&Tg(r,p,o,O),yr=!1,F=r.memoizedState,p.state=F,Za(r,o,p,d),Qa();var G=r.memoizedState;S!==$||F!==G||yr||t!==null&&t.dependencies!==null&&Rs(t.dependencies)?(typeof T=="function"&&(Uc(r,l,T,o),G=r.memoizedState),(K=yr||wg(r,l,K,o,F,G,O)||t!==null&&t.dependencies!==null&&Rs(t.dependencies))?(H||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,G,O),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,G,O)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&F===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&F===t.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=G),p.props=o,p.state=G,p.context=O,o=K):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&F===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&F===t.memoizedState||(r.flags|=1024),o=!1)}return p=o,Zs(t,r),o=(r.flags&128)!==0,p||o?(p=r.stateNode,l=o&&typeof l.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,t!==null&&o?(r.child=ti(r,t.child,null,d),r.child=ti(r,null,l,d)):bt(t,r,l,d),r.memoizedState=p.state,t=r.child):t=Qn(t,r,d),t}function Vg(t,r,l,o){return Kr(),r.flags|=256,bt(t,r,l,o),r.child}var Yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(t){return{baseLanes:t,cachePool:Ep()}}function Jc(t,r,l){return t=t!==null?t.childLanes&~l:0,r&&(t|=Kt),t}function Pg(t,r,l){var o=r.pendingProps,d=!1,p=(r.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(nt.current&2)!==0),S&&(d=!0,r.flags&=-129),S=(r.flags&32)!==0,r.flags&=-33,t===null){if(De){if(d?vr(r):Sr(),(t=Ke)?(t=Xy(t,on),t=t!==null&&t.data!=="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:hr!==null?{id:En,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},l=xp(t),l.return=r,r.child=l,yt=r,Ke=null)):t=null,t===null)throw pr(r);return Nf(t)?r.lanes=32:r.lanes=536870912,null}var T=o.children;return o=o.fallback,d?(Sr(),d=r.mode,T=Ws({mode:"hidden",children:T},d),o=Jr(o,d,l,null),T.return=r,o.return=r,T.sibling=o,r.child=T,o=r.child,o.memoizedState=Xc(l),o.childLanes=Jc(t,S,l),r.memoizedState=Yc,nl(null,o)):(vr(r),Kc(r,T))}var O=t.memoizedState;if(O!==null&&(T=O.dehydrated,T!==null)){if(p)r.flags&256?(vr(r),r.flags&=-257,r=Qc(t,r,l)):r.memoizedState!==null?(Sr(),r.child=t.child,r.flags|=128,r=null):(Sr(),T=o.fallback,d=r.mode,o=Ws({mode:"visible",children:o.children},d),T=Jr(T,d,l,null),T.flags|=2,o.return=r,T.return=r,o.sibling=T,r.child=o,ti(r,t.child,null,l),o=r.child,o.memoizedState=Xc(l),o.childLanes=Jc(t,S,l),r.memoizedState=Yc,r=nl(null,o));else if(vr(r),Nf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var H=S.dgst;S=H,o=Error(a(419)),o.stack="",o.digest=S,qa({value:o,source:null,stack:null}),r=Qc(t,r,l)}else if(lt||Vi(t,r,l,!1),S=(l&t.childLanes)!==0,lt||S){if(S=qe,S!==null&&(o=Am(S,l),o!==0&&o!==O.retryLane))throw O.retryLane=o,Xr(t,o),Vt(S,t,o),qc;Df(T)||so(),r=Qc(t,r,l)}else Df(T)?(r.flags|=192,r.child=t.child,r=null):(t=O.treeContext,Ke=cn(T.nextSibling),yt=r,De=!0,mr=null,on=!1,t!==null&&Sp(r,t),r=Kc(r,o.children),r.flags|=4096);return r}return d?(Sr(),T=o.fallback,d=r.mode,O=t.child,H=O.sibling,o=qn(O,{mode:"hidden",children:o.children}),o.subtreeFlags=O.subtreeFlags&65011712,H!==null?T=qn(H,T):(T=Jr(T,d,l,null),T.flags|=2),T.return=r,o.return=r,o.sibling=T,r.child=o,nl(null,o),o=r.child,T=t.child.memoizedState,T===null?T=Xc(l):(d=T.cachePool,d!==null?(O=it._currentValue,d=d.parent!==O?{parent:O,pool:O}:d):d=Ep(),T={baseLanes:T.baseLanes|l,cachePool:d}),o.memoizedState=T,o.childLanes=Jc(t,S,l),r.memoizedState=Yc,nl(t.child,o)):(vr(r),l=t.child,t=l.sibling,l=qn(l,{mode:"visible",children:o.children}),l.return=r,l.sibling=null,t!==null&&(S=r.deletions,S===null?(r.deletions=[t],r.flags|=16):S.push(t)),r.child=l,r.memoizedState=null,l)}function Kc(t,r){return r=Ws({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function Ws(t,r){return t=Gt(22,t,null,r),t.lanes=0,t}function Qc(t,r,l){return ti(r,t.child,null,l),t=Kc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Ig(t,r,l){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r),fc(t.return,r,l)}function Zc(t,r,l,o,d,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:l,tailMode:d,treeForkCount:p}:(S.isBackwards=r,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=l,S.tailMode=d,S.treeForkCount=p)}function Ug(t,r,l){var o=r.pendingProps,d=o.revealOrder,p=o.tail;o=o.children;var S=nt.current,T=(S&2)!==0;if(T?(S=S&1|2,r.flags|=128):S&=1,A(nt,S),bt(t,r,o,l),o=De?Fa:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ig(t,l,r);else if(t.tag===19)Ig(t,l,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(l=r.child,d=null;l!==null;)t=l.alternate,t!==null&&Is(t)===null&&(d=l),l=l.sibling;l=d,l===null?(d=r.child,r.child=null):(d=l.sibling,l.sibling=null),Zc(r,!1,d,l,p,o);break;case"backwards":case"unstable_legacy-backwards":for(l=null,d=r.child,r.child=null;d!==null;){if(t=d.alternate,t!==null&&Is(t)===null){r.child=d;break}t=d.sibling,d.sibling=l,l=d,d=t}Zc(r,!0,l,null,p,o);break;case"together":Zc(r,!1,null,null,void 0,o);break;default:r.memoizedState=null}return r.child}function Qn(t,r,l){if(t!==null&&(r.dependencies=t.dependencies),Cr|=r.lanes,(l&r.childLanes)===0)if(t!==null){if(Vi(t,r,l,!1),(l&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,l=qn(t,t.pendingProps),r.child=l,l.return=r;t.sibling!==null;)t=t.sibling,l=l.sibling=qn(t,t.pendingProps),l.return=r;l.sibling=null}return r.child}function Wc(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&Rs(t)))}function Mw(t,r,l){switch(r.tag){case 3:ze(r,r.stateNode.containerInfo),gr(r,it,t.memoizedState.cache),Kr();break;case 27:case 5:en(r);break;case 4:ze(r,r.stateNode.containerInfo);break;case 10:gr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Tc(r),null;break;case 13:var o=r.memoizedState;if(o!==null)return o.dehydrated!==null?(vr(r),r.flags|=128,null):(l&r.child.childLanes)!==0?Pg(t,r,l):(vr(r),t=Qn(t,r,l),t!==null?t.sibling:null);vr(r);break;case 19:var d=(t.flags&128)!==0;if(o=(l&r.childLanes)!==0,o||(Vi(t,r,l,!1),o=(l&r.childLanes)!==0),d){if(o)return Ug(t,r,l);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),A(nt,nt.current),o)break;return null;case 22:return r.lanes=0,Og(t,r,l,r.pendingProps);case 24:gr(r,it,t.memoizedState.cache)}return Qn(t,r,l)}function Hg(t,r,l){if(t!==null)if(t.memoizedProps!==r.pendingProps)lt=!0;else{if(!Wc(t,l)&&(r.flags&128)===0)return lt=!1,Mw(t,r,l);lt=(t.flags&131072)!==0}else lt=!1,De&&(r.flags&1048576)!==0&&vp(r,Fa,r.index);switch(r.lanes=0,r.tag){case 16:e:{var o=r.pendingProps;if(t=$r(r.elementType),r.type=t,typeof t=="function")rc(t)?(o=ri(t,o),r.tag=1,r=Bg(null,r,t,o,l)):(r.tag=0,r=Gc(null,r,t,o,l));else{if(t!=null){var d=t.$$typeof;if(d===V){r.tag=11,r=Dg(null,r,t,o,l);break e}else if(d===q){r.tag=14,r=Ng(null,r,t,o,l);break e}}throw r=se(t)||t,Error(a(306,r,""))}}return r;case 0:return Gc(t,r,r.type,r.pendingProps,l);case 1:return o=r.type,d=ri(o,r.pendingProps),Bg(t,r,o,d,l);case 3:e:{if(ze(r,r.stateNode.containerInfo),t===null)throw Error(a(387));o=r.pendingProps;var p=r.memoizedState;d=p.element,xc(t,r),Za(r,o,null,l);var S=r.memoizedState;if(o=S.cache,gr(r,it,o),o!==p.cache&&dc(r,[it],l,!0),Qa(),o=S.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:S.cache},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){r=Vg(t,r,o,l);break e}else if(o!==d){d=an(Error(a(424)),r),qa(d),r=Vg(t,r,o,l);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=cn(t.firstChild),yt=r,De=!0,mr=null,on=!0,l=Op(r,null,o,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Kr(),o===d){r=Qn(t,r,l);break e}bt(t,r,o,l)}r=r.child}return r;case 26:return Zs(t,r),t===null?(l=$y(r.type,null,r.pendingProps,null))?r.memoizedState=l:De||(l=r.type,t=r.pendingProps,o=po(de.current).createElement(l),o[gt]=r,o[Rt]=t,vt(o,l,t),mt(o),r.stateNode=o):r.memoizedState=$y(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return en(r),t===null&&De&&(o=r.stateNode=Qy(r.type,r.pendingProps,de.current),yt=r,on=!0,d=Ke,Mr(r.type)?(Rf=d,Ke=cn(o.firstChild)):Ke=d),bt(t,r,r.pendingProps.children,l),Zs(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&De&&((d=o=Ke)&&(o=aT(o,r.type,r.pendingProps,on),o!==null?(r.stateNode=o,yt=r,Ke=cn(o.firstChild),on=!1,d=!0):d=!1),d||pr(r)),en(r),d=r.type,p=r.pendingProps,S=t!==null?t.memoizedProps:null,o=p.children,Ef(d,p)?o=null:S!==null&&Ef(d,S)&&(r.flags|=32),r.memoizedState!==null&&(d=Ac(t,r,vw,null,null,l),yl._currentValue=d),Zs(t,r),bt(t,r,o,l),r.child;case 6:return t===null&&De&&((t=l=Ke)&&(l=lT(l,r.pendingProps,on),l!==null?(r.stateNode=l,yt=r,Ke=null,t=!0):t=!1),t||pr(r)),null;case 13:return Pg(t,r,l);case 4:return ze(r,r.stateNode.containerInfo),o=r.pendingProps,t===null?r.child=ti(r,null,o,l):bt(t,r,o,l),r.child;case 11:return Dg(t,r,r.type,r.pendingProps,l);case 7:return bt(t,r,r.pendingProps,l),r.child;case 8:return bt(t,r,r.pendingProps.children,l),r.child;case 12:return bt(t,r,r.pendingProps.children,l),r.child;case 10:return o=r.pendingProps,gr(r,r.type,o.value),bt(t,r,o.children,l),r.child;case 9:return d=r.type._context,o=r.pendingProps.children,Zr(r),d=xt(d),o=o(d),r.flags|=1,bt(t,r,o,l),r.child;case 14:return Ng(t,r,r.type,r.pendingProps,l);case 15:return Rg(t,r,r.type,r.pendingProps,l);case 19:return Ug(t,r,l);case 31:return jw(t,r,l);case 22:return Og(t,r,l,r.pendingProps);case 24:return Zr(r),o=xt(it),t===null?(d=pc(),d===null&&(d=qe,p=hc(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=l),d=p),r.memoizedState={parent:o,cache:d},yc(r),gr(r,it,d)):((t.lanes&l)!==0&&(xc(t,r),Za(r,null,null,l),Qa()),d=t.memoizedState,p=r.memoizedState,d.parent!==o?(d={parent:o,cache:o},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),gr(r,it,o)):(o=p.cache,gr(r,it,o),o!==d.cache&&dc(r,[it],l,!0))),bt(t,r,r.pendingProps.children,l),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Zn(t){t.flags|=4}function $c(t,r,l,o,d){if((r=(t.mode&32)!==0)&&(r=!1),r){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(py())t.flags|=8192;else throw ei=zs,gc}else t.flags&=-16777217}function Fg(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ix(r))if(py())t.flags|=8192;else throw ei=zs,gc}function $s(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?wm():536870912,t.lanes|=r,Qi|=r)}function rl(t,r){if(!De)switch(t.tailMode){case"hidden":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var o=null;l!==null;)l.alternate!==null&&(o=l),l=l.sibling;o===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qe(t){var r=t.alternate!==null&&t.alternate.child===t.child,l=0,o=0;if(r)for(var d=t.child;d!==null;)l|=d.lanes|d.childLanes,o|=d.subtreeFlags&65011712,o|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)l|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=o,t.childLanes=l,r}function Dw(t,r,l){var o=r.pendingProps;switch(sc(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(r),null;case 1:return Qe(r),null;case 3:return l=r.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Xn(it),Ne(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Bi(r)?Zn(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,uc())),Qe(r),null;case 26:var d=r.type,p=r.memoizedState;return t===null?(Zn(r),p!==null?(Qe(r),Fg(r,p)):(Qe(r),$c(r,d,null,o,l))):p?p!==t.memoizedState?(Zn(r),Qe(r),Fg(r,p)):(Qe(r),r.flags&=-16777217):(t=t.memoizedProps,t!==o&&Zn(r),Qe(r),$c(r,d,t,o,l)),null;case 27:if(Vn(r),l=de.current,d=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&Zn(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Qe(r),null}t=le.current,Bi(r)?wp(r):(t=Qy(d,o,l),r.stateNode=t,Zn(r))}return Qe(r),null;case 5:if(Vn(r),d=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&Zn(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Qe(r),null}if(p=le.current,Bi(r))wp(r);else{var S=po(de.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?p.multiple=!0:o.size&&(p.size=o.size);break;default:p=typeof o.is=="string"?S.createElement(d,{is:o.is}):S.createElement(d)}}p[gt]=r,p[Rt]=o;e:for(S=r.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===r)break e;for(;S.sibling===null;){if(S.return===null||S.return===r)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}r.stateNode=p;e:switch(vt(p,d,o),d){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Zn(r)}}return Qe(r),$c(r,r.type,t===null?null:t.memoizedProps,r.pendingProps,l),null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==o&&Zn(r);else{if(typeof o!="string"&&r.stateNode===null)throw Error(a(166));if(t=de.current,Bi(r)){if(t=r.stateNode,l=r.memoizedProps,o=null,d=yt,d!==null)switch(d.tag){case 27:case 5:o=d.memoizedProps}t[gt]=r,t=!!(t.nodeValue===l||o!==null&&o.suppressHydrationWarning===!0||Py(t.nodeValue,l)),t||pr(r,!0)}else t=po(t).createTextNode(o),t[gt]=r,r.stateNode=t}return Qe(r),null;case 31:if(l=r.memoizedState,t===null||t.memoizedState!==null){if(o=Bi(r),l!==null){if(t===null){if(!o)throw Error(a(318));if(t=r.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[gt]=r}else Kr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qe(r),t=!1}else l=uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return r.flags&256?(Xt(r),r):(Xt(r),null);if((r.flags&128)!==0)throw Error(a(558))}return Qe(r),null;case 13:if(o=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=Bi(r),o!==null&&o.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[gt]=r}else Kr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qe(r),d=!1}else d=uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(Xt(r),r):(Xt(r),null)}return Xt(r),(r.flags&128)!==0?(r.lanes=l,r):(l=o!==null,t=t!==null&&t.memoizedState!==null,l&&(o=r.child,d=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(d=o.alternate.memoizedState.cachePool.pool),p=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==d&&(o.flags|=2048)),l!==t&&l&&(r.child.flags|=8192),$s(r,r.updateQueue),Qe(r),null);case 4:return Ne(),t===null&&wf(r.stateNode.containerInfo),Qe(r),null;case 10:return Xn(r.type),Qe(r),null;case 19:if(J(nt),o=r.memoizedState,o===null)return Qe(r),null;if(d=(r.flags&128)!==0,p=o.rendering,p===null)if(d)rl(o,!1);else{if(et!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(p=Is(t),p!==null){for(r.flags|=128,rl(o,!1),t=p.updateQueue,r.updateQueue=t,$s(r,t),r.subtreeFlags=0,t=l,l=r.child;l!==null;)yp(l,t),l=l.sibling;return A(nt,nt.current&1|2),De&&Gn(r,o.treeForkCount),r.child}t=t.sibling}o.tail!==null&&At()>io&&(r.flags|=128,d=!0,rl(o,!1),r.lanes=4194304)}else{if(!d)if(t=Is(p),t!==null){if(r.flags|=128,d=!0,t=t.updateQueue,r.updateQueue=t,$s(r,t),rl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!p.alternate&&!De)return Qe(r),null}else 2*At()-o.renderingStartTime>io&&l!==536870912&&(r.flags|=128,d=!0,rl(o,!1),r.lanes=4194304);o.isBackwards?(p.sibling=r.child,r.child=p):(t=o.last,t!==null?t.sibling=p:r.child=p,o.last=p)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=At(),t.sibling=null,l=nt.current,A(nt,d?l&1|2:l&1),De&&Gn(r,o.treeForkCount),t):(Qe(r),null);case 22:case 23:return Xt(r),wc(),o=r.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(r.flags|=8192):o&&(r.flags|=8192),o?(l&536870912)!==0&&(r.flags&128)===0&&(Qe(r),r.subtreeFlags&6&&(r.flags|=8192)):Qe(r),l=r.updateQueue,l!==null&&$s(r,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==l&&(r.flags|=2048),t!==null&&J(Wr),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Xn(it),Qe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function Nw(t,r){switch(sc(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Xn(it),Ne(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return Vn(r),null;case 31:if(r.memoizedState!==null){if(Xt(r),r.alternate===null)throw Error(a(340));Kr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 13:if(Xt(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Kr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return J(nt),null;case 4:return Ne(),null;case 10:return Xn(r.type),null;case 22:case 23:return Xt(r),wc(),t!==null&&J(Wr),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Xn(it),null;case 25:return null;default:return null}}function qg(t,r){switch(sc(r),r.tag){case 3:Xn(it),Ne();break;case 26:case 27:case 5:Vn(r);break;case 4:Ne();break;case 31:r.memoizedState!==null&&Xt(r);break;case 13:Xt(r);break;case 19:J(nt);break;case 10:Xn(r.type);break;case 22:case 23:Xt(r),wc(),t!==null&&J(Wr);break;case 24:Xn(it)}}function il(t,r){try{var l=r.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var d=o.next;l=d;do{if((l.tag&t)===t){o=void 0;var p=l.create,S=l.inst;o=p(),S.destroy=o}l=l.next}while(l!==d)}}catch(T){Pe(r,r.return,T)}}function wr(t,r,l){try{var o=r.updateQueue,d=o!==null?o.lastEffect:null;if(d!==null){var p=d.next;o=p;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,d=r;var O=l,H=T;try{H()}catch(K){Pe(d,O,K)}}}o=o.next}while(o!==p)}}catch(K){Pe(r,r.return,K)}}function Gg(t){var r=t.updateQueue;if(r!==null){var l=t.stateNode;try{Lp(r,l)}catch(o){Pe(t,t.return,o)}}}function Yg(t,r,l){l.props=ri(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(o){Pe(t,r,o)}}function al(t,r){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof l=="function"?t.refCleanup=l(o):l.current=o}}catch(d){Pe(t,r,d)}}function Mn(t,r){var l=t.ref,o=t.refCleanup;if(l!==null)if(typeof o=="function")try{o()}catch(d){Pe(t,r,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(d){Pe(t,r,d)}else l.current=null}function Xg(t){var r=t.type,l=t.memoizedProps,o=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":l.autoFocus&&o.focus();break e;case"img":l.src?o.src=l.src:l.srcSet&&(o.srcset=l.srcSet)}}catch(d){Pe(t,t.return,d)}}function ef(t,r,l){try{var o=t.stateNode;$w(o,t.type,l,r),o[Rt]=r}catch(d){Pe(t,t.return,d)}}function Jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Mr(t.type)||t.tag===4}function tf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Mr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,r,l){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,r):(r=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,r.appendChild(t),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Hn));else if(o!==4&&(o===27&&Mr(t.type)&&(l=t.stateNode,r=null),t=t.child,t!==null))for(nf(t,r,l),t=t.sibling;t!==null;)nf(t,r,l),t=t.sibling}function eo(t,r,l){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?l.insertBefore(t,r):l.appendChild(t);else if(o!==4&&(o===27&&Mr(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(eo(t,r,l),t=t.sibling;t!==null;)eo(t,r,l),t=t.sibling}function Kg(t){var r=t.stateNode,l=t.memoizedProps;try{for(var o=t.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);vt(r,o,l),r[gt]=t,r[Rt]=l}catch(p){Pe(t,t.return,p)}}var Wn=!1,st=!1,rf=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,pt=null;function Rw(t,r){if(t=t.containerInfo,Af=wo,t=op(t),Qu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else e:{l=(l=t.ownerDocument)&&l.defaultView||window;var o=l.getSelection&&l.getSelection();if(o&&o.rangeCount!==0){l=o.anchorNode;var d=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{l.nodeType,p.nodeType}catch{l=null;break e}var S=0,T=-1,O=-1,H=0,K=0,$=t,F=null;t:for(;;){for(var G;$!==l||d!==0&&$.nodeType!==3||(T=S+d),$!==p||o!==0&&$.nodeType!==3||(O=S+o),$.nodeType===3&&(S+=$.nodeValue.length),(G=$.firstChild)!==null;)F=$,$=G;for(;;){if($===t)break t;if(F===l&&++H===d&&(T=S),F===p&&++K===o&&(O=S),(G=$.nextSibling)!==null)break;$=F,F=$.parentNode}$=G}l=T===-1||O===-1?null:{start:T,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(kf={focusedElem:t,selectionRange:l},wo=!1,pt=r;pt!==null;)if(r=pt,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,pt=t;else for(;pt!==null;){switch(r=pt,p=r.alternate,t=r.flags,r.tag){case 0:if((t&4)!==0&&(t=r.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)d=t[l],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,l=r,d=p.memoizedProps,p=p.memoizedState,o=l.stateNode;try{var ue=ri(l.type,d);t=o.getSnapshotBeforeUpdate(ue,p),o.__reactInternalSnapshotBeforeUpdate=t}catch(ye){Pe(l,l.return,ye)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,l=t.nodeType,l===9)Mf(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=r.sibling,t!==null){t.return=r.return,pt=t;break}pt=r.return}}function Zg(t,r,l){var o=l.flags;switch(l.tag){case 0:case 11:case 15:er(t,l),o&4&&il(5,l);break;case 1:if(er(t,l),o&4)if(t=l.stateNode,r===null)try{t.componentDidMount()}catch(S){Pe(l,l.return,S)}else{var d=ri(l.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(d,r,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Pe(l,l.return,S)}}o&64&&Gg(l),o&512&&al(l,l.return);break;case 3:if(er(t,l),o&64&&(t=l.updateQueue,t!==null)){if(r=null,l.child!==null)switch(l.child.tag){case 27:case 5:r=l.child.stateNode;break;case 1:r=l.child.stateNode}try{Lp(t,r)}catch(S){Pe(l,l.return,S)}}break;case 27:r===null&&o&4&&Kg(l);case 26:case 5:er(t,l),r===null&&o&4&&Xg(l),o&512&&al(l,l.return);break;case 12:er(t,l);break;case 31:er(t,l),o&4&&ey(t,l);break;case 13:er(t,l),o&4&&ty(t,l),o&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Uw.bind(null,l),sT(t,l))));break;case 22:if(o=l.memoizedState!==null||Wn,!o){r=r!==null&&r.memoizedState!==null||st,d=Wn;var p=st;Wn=o,(st=r)&&!p?tr(t,l,(l.subtreeFlags&8772)!==0):er(t,l),Wn=d,st=p}break;case 30:break;default:er(t,l)}}function Wg(t){var r=t.alternate;r!==null&&(t.alternate=null,Wg(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&Ou(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,_t=!1;function $n(t,r,l){for(l=l.child;l!==null;)$g(t,r,l),l=l.sibling}function $g(t,r,l){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(kt,l)}catch{}switch(l.tag){case 26:st||Mn(l,r),$n(t,r,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:st||Mn(l,r);var o=Ze,d=_t;Mr(l.type)&&(Ze=l.stateNode,_t=!1),$n(t,r,l),ml(l.stateNode),Ze=o,_t=d;break;case 5:st||Mn(l,r);case 6:if(o=Ze,d=_t,Ze=null,$n(t,r,l),Ze=o,_t=d,Ze!==null)if(_t)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(l.stateNode)}catch(p){Pe(l,r,p)}else try{Ze.removeChild(l.stateNode)}catch(p){Pe(l,r,p)}break;case 18:Ze!==null&&(_t?(t=Ze,Gy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),ia(t)):Gy(Ze,l.stateNode));break;case 4:o=Ze,d=_t,Ze=l.stateNode.containerInfo,_t=!0,$n(t,r,l),Ze=o,_t=d;break;case 0:case 11:case 14:case 15:wr(2,l,r),st||wr(4,l,r),$n(t,r,l);break;case 1:st||(Mn(l,r),o=l.stateNode,typeof o.componentWillUnmount=="function"&&Yg(l,r,o)),$n(t,r,l);break;case 21:$n(t,r,l);break;case 22:st=(o=st)||l.memoizedState!==null,$n(t,r,l),st=o;break;default:$n(t,r,l)}}function ey(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ia(t)}catch(l){Pe(r,r.return,l)}}}function ty(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ia(t)}catch(l){Pe(r,r.return,l)}}function Ow(t){switch(t.tag){case 31:case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Qg),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Qg),r;default:throw Error(a(435,t.tag))}}function to(t,r){var l=Ow(t);r.forEach(function(o){if(!l.has(o)){l.add(o);var d=Hw.bind(null,t,o);o.then(d,d)}})}function Lt(t,r){var l=r.deletions;if(l!==null)for(var o=0;o<l.length;o++){var d=l[o],p=t,S=r,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(Mr(T.type)){Ze=T.stateNode,_t=!1;break e}break;case 5:Ze=T.stateNode,_t=!1;break e;case 3:case 4:Ze=T.stateNode.containerInfo,_t=!0;break e}T=T.return}if(Ze===null)throw Error(a(160));$g(p,S,d),Ze=null,_t=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)ny(r,t),r=r.sibling}var bn=null;function ny(t,r){var l=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Lt(r,t),zt(t),o&4&&(wr(3,t,t.return),il(3,t),wr(5,t,t.return));break;case 1:Lt(r,t),zt(t),o&512&&(st||l===null||Mn(l,l.return)),o&64&&Wn&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?o:l.concat(o))));break;case 26:var d=bn;if(Lt(r,t),zt(t),o&512&&(st||l===null||Mn(l,l.return)),o&4){var p=l!==null?l.memoizedState:null;if(o=t.memoizedState,l===null)if(o===null)if(t.stateNode===null){e:{o=t.type,l=t.memoizedProps,d=d.ownerDocument||d;t:switch(o){case"title":p=d.getElementsByTagName("title")[0],(!p||p[Ra]||p[gt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(o),d.head.insertBefore(p,d.querySelector("head > title"))),vt(p,o,l),p[gt]=t,mt(p),o=p;break e;case"link":var S=nx("link","href",d).get(o+(l.href||""));if(S){for(var T=0;T<S.length;T++)if(p=S[T],p.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&p.getAttribute("rel")===(l.rel==null?null:l.rel)&&p.getAttribute("title")===(l.title==null?null:l.title)&&p.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){S.splice(T,1);break t}}p=d.createElement(o),vt(p,o,l),d.head.appendChild(p);break;case"meta":if(S=nx("meta","content",d).get(o+(l.content||""))){for(T=0;T<S.length;T++)if(p=S[T],p.getAttribute("content")===(l.content==null?null:""+l.content)&&p.getAttribute("name")===(l.name==null?null:l.name)&&p.getAttribute("property")===(l.property==null?null:l.property)&&p.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&p.getAttribute("charset")===(l.charSet==null?null:l.charSet)){S.splice(T,1);break t}}p=d.createElement(o),vt(p,o,l),d.head.appendChild(p);break;default:throw Error(a(468,o))}p[gt]=t,mt(p),o=p}t.stateNode=o}else rx(d,t.type,t.stateNode);else t.stateNode=tx(d,o,t.memoizedProps);else p!==o?(p===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):p.count--,o===null?rx(d,t.type,t.stateNode):tx(d,o,t.memoizedProps)):o===null&&t.stateNode!==null&&ef(t,t.memoizedProps,l.memoizedProps)}break;case 27:Lt(r,t),zt(t),o&512&&(st||l===null||Mn(l,l.return)),l!==null&&o&4&&ef(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Lt(r,t),zt(t),o&512&&(st||l===null||Mn(l,l.return)),t.flags&32){d=t.stateNode;try{Ei(d,"")}catch(ue){Pe(t,t.return,ue)}}o&4&&t.stateNode!=null&&(d=t.memoizedProps,ef(t,d,l!==null?l.memoizedProps:d)),o&1024&&(rf=!0);break;case 6:if(Lt(r,t),zt(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,l=t.stateNode;try{l.nodeValue=o}catch(ue){Pe(t,t.return,ue)}}break;case 3:if(xo=null,d=bn,bn=go(r.containerInfo),Lt(r,t),bn=d,zt(t),o&4&&l!==null&&l.memoizedState.isDehydrated)try{ia(r.containerInfo)}catch(ue){Pe(t,t.return,ue)}rf&&(rf=!1,ry(t));break;case 4:o=bn,bn=go(t.stateNode.containerInfo),Lt(r,t),zt(t),bn=o;break;case 12:Lt(r,t),zt(t);break;case 31:Lt(r,t),zt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,to(t,o)));break;case 13:Lt(r,t),zt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ro=At()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,to(t,o)));break;case 22:d=t.memoizedState!==null;var O=l!==null&&l.memoizedState!==null,H=Wn,K=st;if(Wn=H||d,st=K||O,Lt(r,t),st=K,Wn=H,zt(t),o&8192)e:for(r=t.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(l===null||O||Wn||st||ii(t)),l=null,r=t;;){if(r.tag===5||r.tag===26){if(l===null){O=l=r;try{if(p=O.stateNode,d)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=O.stateNode;var $=O.memoizedProps.style,F=$!=null&&$.hasOwnProperty("display")?$.display:null;T.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(ue){Pe(O,O.return,ue)}}}else if(r.tag===6){if(l===null){O=r;try{O.stateNode.nodeValue=d?"":O.memoizedProps}catch(ue){Pe(O,O.return,ue)}}}else if(r.tag===18){if(l===null){O=r;try{var G=O.stateNode;d?Yy(G,!0):Yy(O.stateNode,!1)}catch(ue){Pe(O,O.return,ue)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;l===r&&(l=null),r=r.return}l===r&&(l=null),r.sibling.return=r.return,r=r.sibling}o&4&&(o=t.updateQueue,o!==null&&(l=o.retryQueue,l!==null&&(o.retryQueue=null,to(t,l))));break;case 19:Lt(r,t),zt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,to(t,o)));break;case 30:break;case 21:break;default:Lt(r,t),zt(t)}}function zt(t){var r=t.flags;if(r&2){try{for(var l,o=t.return;o!==null;){if(Jg(o)){l=o;break}o=o.return}if(l==null)throw Error(a(160));switch(l.tag){case 27:var d=l.stateNode,p=tf(t);eo(t,p,d);break;case 5:var S=l.stateNode;l.flags&32&&(Ei(S,""),l.flags&=-33);var T=tf(t);eo(t,T,S);break;case 3:case 4:var O=l.stateNode.containerInfo,H=tf(t);nf(t,H,O);break;default:throw Error(a(161))}}catch(K){Pe(t,t.return,K)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function ry(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;ry(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function er(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Zg(t,r.alternate,r),r=r.sibling}function ii(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:wr(4,r,r.return),ii(r);break;case 1:Mn(r,r.return);var l=r.stateNode;typeof l.componentWillUnmount=="function"&&Yg(r,r.return,l),ii(r);break;case 27:ml(r.stateNode);case 26:case 5:Mn(r,r.return),ii(r);break;case 22:r.memoizedState===null&&ii(r);break;case 30:ii(r);break;default:ii(r)}t=t.sibling}}function tr(t,r,l){for(l=l&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var o=r.alternate,d=t,p=r,S=p.flags;switch(p.tag){case 0:case 11:case 15:tr(d,p,l),il(4,p);break;case 1:if(tr(d,p,l),o=p,d=o.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){Pe(o,o.return,H)}if(o=p,d=o.updateQueue,d!==null){var T=o.stateNode;try{var O=d.shared.hiddenCallbacks;if(O!==null)for(d.shared.hiddenCallbacks=null,d=0;d<O.length;d++)_p(O[d],T)}catch(H){Pe(o,o.return,H)}}l&&S&64&&Gg(p),al(p,p.return);break;case 27:Kg(p);case 26:case 5:tr(d,p,l),l&&o===null&&S&4&&Xg(p),al(p,p.return);break;case 12:tr(d,p,l);break;case 31:tr(d,p,l),l&&S&4&&ey(d,p);break;case 13:tr(d,p,l),l&&S&4&&ty(d,p);break;case 22:p.memoizedState===null&&tr(d,p,l),al(p,p.return);break;case 30:break;default:tr(d,p,l)}r=r.sibling}}function af(t,r){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Ga(l))}function lf(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Ga(t))}function vn(t,r,l,o){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)iy(t,r,l,o),r=r.sibling}function iy(t,r,l,o){var d=r.flags;switch(r.tag){case 0:case 11:case 15:vn(t,r,l,o),d&2048&&il(9,r);break;case 1:vn(t,r,l,o);break;case 3:vn(t,r,l,o),d&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Ga(t)));break;case 12:if(d&2048){vn(t,r,l,o),t=r.stateNode;try{var p=r.memoizedProps,S=p.id,T=p.onPostCommit;typeof T=="function"&&T(S,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Pe(r,r.return,O)}}else vn(t,r,l,o);break;case 31:vn(t,r,l,o);break;case 13:vn(t,r,l,o);break;case 23:break;case 22:p=r.stateNode,S=r.alternate,r.memoizedState!==null?p._visibility&2?vn(t,r,l,o):ll(t,r):p._visibility&2?vn(t,r,l,o):(p._visibility|=2,Xi(t,r,l,o,(r.subtreeFlags&10256)!==0||!1)),d&2048&&af(S,r);break;case 24:vn(t,r,l,o),d&2048&&lf(r.alternate,r);break;default:vn(t,r,l,o)}}function Xi(t,r,l,o,d){for(d=d&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var p=t,S=r,T=l,O=o,H=S.flags;switch(S.tag){case 0:case 11:case 15:Xi(p,S,T,O,d),il(8,S);break;case 23:break;case 22:var K=S.stateNode;S.memoizedState!==null?K._visibility&2?Xi(p,S,T,O,d):ll(p,S):(K._visibility|=2,Xi(p,S,T,O,d)),d&&H&2048&&af(S.alternate,S);break;case 24:Xi(p,S,T,O,d),d&&H&2048&&lf(S.alternate,S);break;default:Xi(p,S,T,O,d)}r=r.sibling}}function ll(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var l=t,o=r,d=o.flags;switch(o.tag){case 22:ll(l,o),d&2048&&af(o.alternate,o);break;case 24:ll(l,o),d&2048&&lf(o.alternate,o);break;default:ll(l,o)}r=r.sibling}}var sl=8192;function Ji(t,r,l){if(t.subtreeFlags&sl)for(t=t.child;t!==null;)ay(t,r,l),t=t.sibling}function ay(t,r,l){switch(t.tag){case 26:Ji(t,r,l),t.flags&sl&&t.memoizedState!==null&&bT(l,bn,t.memoizedState,t.memoizedProps);break;case 5:Ji(t,r,l);break;case 3:case 4:var o=bn;bn=go(t.stateNode.containerInfo),Ji(t,r,l),bn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=sl,sl=16777216,Ji(t,r,l),sl=o):Ji(t,r,l));break;default:Ji(t,r,l)}}function ly(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function ol(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var l=0;l<r.length;l++){var o=r[l];pt=o,oy(o,t)}ly(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sy(t),t=t.sibling}function sy(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&wr(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,no(t)):ol(t);break;default:ol(t)}}function no(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var l=0;l<r.length;l++){var o=r[l];pt=o,oy(o,t)}ly(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:wr(8,r,r.return),no(r);break;case 22:l=r.stateNode,l._visibility&2&&(l._visibility&=-3,no(r));break;default:no(r)}t=t.sibling}}function oy(t,r){for(;pt!==null;){var l=pt;switch(l.tag){case 0:case 11:case 15:wr(8,l,r);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var o=l.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ga(l.memoizedState.cache)}if(o=l.child,o!==null)o.return=l,pt=o;else e:for(l=t;pt!==null;){o=pt;var d=o.sibling,p=o.return;if(Wg(o),o===l){pt=null;break e}if(d!==null){d.return=p,pt=d;break e}pt=p}}}var _w={getCacheForType:function(t){var r=xt(it),l=r.data.get(t);return l===void 0&&(l=t(),r.data.set(t,l)),l},cacheSignal:function(){return xt(it).controller.signal}},Lw=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,Ae=null,je=0,Ve=0,Jt=null,Tr=!1,Ki=!1,sf=!1,nr=0,et=0,Cr=0,ai=0,of=0,Kt=0,Qi=0,ul=null,Bt=null,uf=!1,ro=0,uy=0,io=1/0,ao=null,Ar=null,dt=0,kr=null,Zi=null,rr=0,cf=0,ff=null,cy=null,cl=0,df=null;function Qt(){return(Le&2)!==0&&je!==0?je&-je:P.T!==null?xf():km()}function fy(){if(Kt===0)if((je&536870912)===0||De){var t=hs;hs<<=1,(hs&3932160)===0&&(hs=262144),Kt=t}else Kt=536870912;return t=Yt.current,t!==null&&(t.flags|=32),Kt}function Vt(t,r,l){(t===qe&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)&&(Wi(t,0),Er(t,je,Kt,!1)),Na(t,l),((Le&2)===0||t!==qe)&&(t===qe&&((Le&2)===0&&(ai|=l),et===4&&Er(t,je,Kt,!1)),Dn(t))}function dy(t,r,l){if((Le&6)!==0)throw Error(a(327));var o=!l&&(r&127)===0&&(r&t.expiredLanes)===0||Da(t,r),d=o?Vw(t,r):mf(t,r,!0),p=o;do{if(d===0){Ki&&!o&&Er(t,r,0,!1);break}else{if(l=t.current.alternate,p&&!zw(l)){d=mf(t,r,!1),p=!1;continue}if(d===2){if(p=r,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){r=S;e:{var T=t;d=ul;var O=T.current.memoizedState.isDehydrated;if(O&&(Wi(T,S).flags|=256),S=mf(T,S,!1),S!==2){if(sf&&!O){T.errorRecoveryDisabledLanes|=p,ai|=p,d=4;break e}p=Bt,Bt=d,p!==null&&(Bt===null?Bt=p:Bt.push.apply(Bt,p))}d=S}if(p=!1,d!==2)continue}}if(d===1){Wi(t,0),Er(t,r,0,!0);break}e:{switch(o=t,p=d,p){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Er(o,r,Kt,!Tr);break e;case 2:Bt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(d=ro+300-At(),10<d)){if(Er(o,r,Kt,!Tr),ps(o,0,!0)!==0)break e;rr=r,o.timeoutHandle=Fy(hy.bind(null,o,l,Bt,ao,uf,r,Kt,ai,Qi,Tr,p,"Throttled",-0,0),d);break e}hy(o,l,Bt,ao,uf,r,Kt,ai,Qi,Tr,p,null,-0,0)}}break}while(!0);Dn(t)}function hy(t,r,l,o,d,p,S,T,O,H,K,$,F,G){if(t.timeoutHandle=-1,$=r.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hn},ay(r,p,$);var ue=(p&62914560)===p?ro-At():(p&4194048)===p?uy-At():0;if(ue=vT($,ue),ue!==null){rr=p,t.cancelPendingCommit=ue(Sy.bind(null,t,r,p,l,o,d,S,T,O,K,$,null,F,G)),Er(t,p,S,!H);return}}Sy(t,r,p,l,o,d,S,T,O)}function zw(t){for(var r=t;;){var l=r.tag;if((l===0||l===11||l===15)&&r.flags&16384&&(l=r.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var o=0;o<l.length;o++){var d=l[o],p=d.getSnapshot;d=d.value;try{if(!qt(p(),d))return!1}catch{return!1}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Er(t,r,l,o){r&=~of,r&=~ai,t.suspendedLanes|=r,t.pingedLanes&=~r,o&&(t.warmLanes|=r),o=t.expirationTimes;for(var d=r;0<d;){var p=31-Fe(d),S=1<<p;o[p]=-1,d&=~S}l!==0&&Tm(t,l,r)}function lo(){return(Le&6)===0?(fl(0),!1):!0}function hf(){if(Ae!==null){if(Ve===0)var t=Ae.return;else t=Ae,Yn=Qr=null,jc(t),Hi=null,Xa=0,t=Ae;for(;t!==null;)qg(t.alternate,t),t=t.return;Ae=null}}function Wi(t,r){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,nT(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),rr=0,hf(),qe=t,Ae=l=qn(t.current,null),je=r,Ve=0,Jt=null,Tr=!1,Ki=Da(t,r),sf=!1,Qi=Kt=of=ai=Cr=et=0,Bt=ul=null,uf=!1,(r&8)!==0&&(r|=r&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=r;0<o;){var d=31-Fe(o),p=1<<d;r|=t[d],o&=~p}return nr=r,Es(),l}function my(t,r){ve=null,P.H=tl,r===Ui||r===Ls?(r=Dp(),Ve=3):r===gc?(r=Dp(),Ve=4):Ve=r===qc?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Jt=r,Ae===null&&(et=1,Ks(t,an(r,t.current)))}function py(){var t=Yt.current;return t===null?!0:(je&4194048)===je?un===null:(je&62914560)===je||(je&536870912)!==0?t===un:!1}function gy(){var t=P.H;return P.H=tl,t===null?tl:t}function yy(){var t=P.A;return P.A=_w,t}function so(){et=4,Tr||(je&4194048)!==je&&Yt.current!==null||(Ki=!0),(Cr&134217727)===0&&(ai&134217727)===0||qe===null||Er(qe,je,Kt,!1)}function mf(t,r,l){var o=Le;Le|=2;var d=gy(),p=yy();(qe!==t||je!==r)&&(ao=null,Wi(t,r)),r=!1;var S=et;e:do try{if(Ve!==0&&Ae!==null){var T=Ae,O=Jt;switch(Ve){case 8:hf(),S=6;break e;case 3:case 2:case 9:case 6:Yt.current===null&&(r=!0);var H=Ve;if(Ve=0,Jt=null,$i(t,T,O,H),l&&Ki){S=0;break e}break;default:H=Ve,Ve=0,Jt=null,$i(t,T,O,H)}}Bw(),S=et;break}catch(K){my(t,K)}while(!0);return r&&t.shellSuspendCounter++,Yn=Qr=null,Le=o,P.H=d,P.A=p,Ae===null&&(qe=null,je=0,Es()),S}function Bw(){for(;Ae!==null;)xy(Ae)}function Vw(t,r){var l=Le;Le|=2;var o=gy(),d=yy();qe!==t||je!==r?(ao=null,io=At()+500,Wi(t,r)):Ki=Da(t,r);e:do try{if(Ve!==0&&Ae!==null){r=Ae;var p=Jt;t:switch(Ve){case 1:Ve=0,Jt=null,$i(t,r,p,1);break;case 2:case 9:if(jp(p)){Ve=0,Jt=null,by(r);break}r=function(){Ve!==2&&Ve!==9||qe!==t||(Ve=7),Dn(t)},p.then(r,r);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:jp(p)?(Ve=0,Jt=null,by(r)):(Ve=0,Jt=null,$i(t,r,p,7));break;case 5:var S=null;switch(Ae.tag){case 26:S=Ae.memoizedState;case 5:case 27:var T=Ae;if(S?ix(S):T.stateNode.complete){Ve=0,Jt=null;var O=T.sibling;if(O!==null)Ae=O;else{var H=T.return;H!==null?(Ae=H,oo(H)):Ae=null}break t}}Ve=0,Jt=null,$i(t,r,p,5);break;case 6:Ve=0,Jt=null,$i(t,r,p,6);break;case 8:hf(),et=6;break e;default:throw Error(a(462))}}Pw();break}catch(K){my(t,K)}while(!0);return Yn=Qr=null,P.H=o,P.A=d,Le=l,Ae!==null?0:(qe=null,je=0,Es(),et)}function Pw(){for(;Ae!==null&&!ku();)xy(Ae)}function xy(t){var r=Hg(t.alternate,t,nr);t.memoizedProps=t.pendingProps,r===null?oo(t):Ae=r}function by(t){var r=t,l=r.alternate;switch(r.tag){case 15:case 0:r=zg(l,r,r.pendingProps,r.type,void 0,je);break;case 11:r=zg(l,r,r.pendingProps,r.type.render,r.ref,je);break;case 5:jc(r);default:qg(l,r),r=Ae=yp(r,nr),r=Hg(l,r,nr)}t.memoizedProps=t.pendingProps,r===null?oo(t):Ae=r}function $i(t,r,l,o){Yn=Qr=null,jc(r),Hi=null,Xa=0;var d=r.return;try{if(Ew(t,d,r,l,je)){et=1,Ks(t,an(l,t.current)),Ae=null;return}}catch(p){if(d!==null)throw Ae=d,p;et=1,Ks(t,an(l,t.current)),Ae=null;return}r.flags&32768?(De||o===1?t=!0:Ki||(je&536870912)!==0?t=!1:(Tr=t=!0,(o===2||o===9||o===3||o===6)&&(o=Yt.current,o!==null&&o.tag===13&&(o.flags|=16384))),vy(r,t)):oo(r)}function oo(t){var r=t;do{if((r.flags&32768)!==0){vy(r,Tr);return}t=r.return;var l=Dw(r.alternate,r,nr);if(l!==null){Ae=l;return}if(r=r.sibling,r!==null){Ae=r;return}Ae=r=t}while(r!==null);et===0&&(et=5)}function vy(t,r){do{var l=Nw(t.alternate,t);if(l!==null){l.flags&=32767,Ae=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!r&&(t=t.sibling,t!==null)){Ae=t;return}Ae=t=l}while(t!==null);et=6,Ae=null}function Sy(t,r,l,o,d,p,S,T,O){t.cancelPendingCommit=null;do uo();while(dt!==0);if((Le&6)!==0)throw Error(a(327));if(r!==null){if(r===t.current)throw Error(a(177));if(p=r.lanes|r.childLanes,p|=tc,x2(t,l,p,S,T,O),t===qe&&(Ae=qe=null,je=0),Zi=r,kr=t,rr=l,cf=p,ff=d,cy=o,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fw(xe,function(){return ky(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,d=ee.p,ee.p=2,S=Le,Le|=4;try{Rw(t,r,l)}finally{Le=S,ee.p=d,P.T=o}}dt=1,wy(),Ty(),Cy()}}function wy(){if(dt===1){dt=0;var t=kr,r=Zi,l=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||l){l=P.T,P.T=null;var o=ee.p;ee.p=2;var d=Le;Le|=4;try{ny(r,t);var p=kf,S=op(t.containerInfo),T=p.focusedElem,O=p.selectionRange;if(S!==T&&T&&T.ownerDocument&&sp(T.ownerDocument.documentElement,T)){if(O!==null&&Qu(T)){var H=O.start,K=O.end;if(K===void 0&&(K=H),"selectionStart"in T)T.selectionStart=H,T.selectionEnd=Math.min(K,T.value.length);else{var $=T.ownerDocument||document,F=$&&$.defaultView||window;if(F.getSelection){var G=F.getSelection(),ue=T.textContent.length,ye=Math.min(O.start,ue),He=O.end===void 0?ye:Math.min(O.end,ue);!G.extend&&ye>He&&(S=He,He=ye,ye=S);var B=lp(T,ye),z=lp(T,He);if(B&&z&&(G.rangeCount!==1||G.anchorNode!==B.node||G.anchorOffset!==B.offset||G.focusNode!==z.node||G.focusOffset!==z.offset)){var U=$.createRange();U.setStart(B.node,B.offset),G.removeAllRanges(),ye>He?(G.addRange(U),G.extend(z.node,z.offset)):(U.setEnd(z.node,z.offset),G.addRange(U))}}}}for($=[],G=T;G=G.parentNode;)G.nodeType===1&&$.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<$.length;T++){var W=$[T];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}wo=!!Af,kf=Af=null}finally{Le=d,ee.p=o,P.T=l}}t.current=r,dt=2}}function Ty(){if(dt===2){dt=0;var t=kr,r=Zi,l=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||l){l=P.T,P.T=null;var o=ee.p;ee.p=2;var d=Le;Le|=4;try{Zg(t,r.alternate,r)}finally{Le=d,ee.p=o,P.T=l}}dt=3}}function Cy(){if(dt===4||dt===3){dt=0,Eu();var t=kr,r=Zi,l=rr,o=cy;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?dt=5:(dt=0,Zi=kr=null,Ay(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Ar=null),Nu(l),r=r.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(kt,r,void 0,(r.current.flags&128)===128)}catch{}if(o!==null){r=P.T,d=ee.p,ee.p=2,P.T=null;try{for(var p=t.onRecoverableError,S=0;S<o.length;S++){var T=o[S];p(T.value,{componentStack:T.stack})}}finally{P.T=r,ee.p=d}}(rr&3)!==0&&uo(),Dn(t),d=t.pendingLanes,(l&261930)!==0&&(d&42)!==0?t===df?cl++:(cl=0,df=t):cl=0,fl(0)}}function Ay(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,Ga(r)))}function uo(){return wy(),Ty(),Cy(),ky()}function ky(){if(dt!==5)return!1;var t=kr,r=cf;cf=0;var l=Nu(rr),o=P.T,d=ee.p;try{ee.p=32>l?32:l,P.T=null,l=ff,ff=null;var p=kr,S=rr;if(dt=0,Zi=kr=null,rr=0,(Le&6)!==0)throw Error(a(331));var T=Le;if(Le|=4,sy(p.current),iy(p,p.current,S,l),Le=T,fl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(kt,p)}catch{}return!0}finally{ee.p=d,P.T=o,Ay(t,r)}}function Ey(t,r,l){r=an(l,r),r=Fc(t.stateNode,r,2),t=br(t,r,2),t!==null&&(Na(t,2),Dn(t))}function Pe(t,r,l){if(t.tag===3)Ey(t,t,l);else for(;r!==null;){if(r.tag===3){Ey(r,t,l);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ar===null||!Ar.has(o))){t=an(l,t),l=jg(2),o=br(r,l,2),o!==null&&(Mg(l,o,r,t),Na(o,2),Dn(o));break}}r=r.return}}function pf(t,r,l){var o=t.pingCache;if(o===null){o=t.pingCache=new Lw;var d=new Set;o.set(r,d)}else d=o.get(r),d===void 0&&(d=new Set,o.set(r,d));d.has(l)||(sf=!0,d.add(l),t=Iw.bind(null,t,r,l),r.then(t,t))}function Iw(t,r,l){var o=t.pingCache;o!==null&&o.delete(r),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,qe===t&&(je&l)===l&&(et===4||et===3&&(je&62914560)===je&&300>At()-ro?(Le&2)===0&&Wi(t,0):of|=l,Qi===je&&(Qi=0)),Dn(t)}function jy(t,r){r===0&&(r=wm()),t=Xr(t,r),t!==null&&(Na(t,r),Dn(t))}function Uw(t){var r=t.memoizedState,l=0;r!==null&&(l=r.retryLane),jy(t,l)}function Hw(t,r){var l=0;switch(t.tag){case 31:case 13:var o=t.stateNode,d=t.memoizedState;d!==null&&(l=d.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(r),jy(t,l)}function Fw(t,r){return vi(t,r)}var co=null,ea=null,gf=!1,fo=!1,yf=!1,jr=0;function Dn(t){t!==ea&&t.next===null&&(ea===null?co=ea=t:ea=ea.next=t),fo=!0,gf||(gf=!0,Gw())}function fl(t,r){if(!yf&&fo){yf=!0;do for(var l=!1,o=co;o!==null;){if(t!==0){var d=o.pendingLanes;if(d===0)var p=0;else{var S=o.suspendedLanes,T=o.pingedLanes;p=(1<<31-Fe(42|t)+1)-1,p&=d&~(S&~T),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(l=!0,Ry(o,p))}else p=je,p=ps(o,o===qe?p:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(p&3)===0||Da(o,p)||(l=!0,Ry(o,p));o=o.next}while(l);yf=!1}}function qw(){My()}function My(){fo=gf=!1;var t=0;jr!==0&&tT()&&(t=jr);for(var r=At(),l=null,o=co;o!==null;){var d=o.next,p=Dy(o,r);p===0?(o.next=null,l===null?co=d:l.next=d,d===null&&(ea=l)):(l=o,(t!==0||(p&3)!==0)&&(fo=!0)),o=d}dt!==0&&dt!==5||fl(t),jr!==0&&(jr=0)}function Dy(t,r){for(var l=t.suspendedLanes,o=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-Fe(p),T=1<<S,O=d[S];O===-1?((T&l)===0||(T&o)!==0)&&(d[S]=y2(T,r)):O<=r&&(t.expiredLanes|=T),p&=~T}if(r=qe,l=je,l=ps(t,t===r?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,l===0||t===r&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ma(o),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Da(t,l)){if(r=l&-l,r===t.callbackPriority)return r;switch(o!==null&&Ma(o),Nu(l)){case 2:case 8:l=ae;break;case 32:l=xe;break;case 268435456:l=Be;break;default:l=xe}return o=Ny.bind(null,t),l=vi(l,o),t.callbackPriority=r,t.callbackNode=l,r}return o!==null&&o!==null&&Ma(o),t.callbackPriority=2,t.callbackNode=null,2}function Ny(t,r){if(dt!==0&&dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(uo()&&t.callbackNode!==l)return null;var o=je;return o=ps(t,t===qe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(dy(t,o,r),Dy(t,At()),t.callbackNode!=null&&t.callbackNode===l?Ny.bind(null,t):null)}function Ry(t,r){if(uo())return null;dy(t,r,!0)}function Gw(){rT(function(){(Le&6)!==0?vi(Z,qw):My()})}function xf(){if(jr===0){var t=Pi;t===0&&(t=ds,ds<<=1,(ds&261888)===0&&(ds=256)),jr=t}return jr}function Oy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bs(""+t)}function _y(t,r){var l=r.ownerDocument.createElement("input");return l.name=r.name,l.value=r.value,t.id&&l.setAttribute("form",t.id),r.parentNode.insertBefore(l,r),t=new FormData(t),l.parentNode.removeChild(l),t}function Yw(t,r,l,o,d){if(r==="submit"&&l&&l.stateNode===d){var p=Oy((d[Rt]||null).action),S=o.submitter;S&&(r=(r=S[Rt]||null)?Oy(r.formAction):S.getAttribute("formAction"),r!==null&&(p=r,S=null));var T=new Ts("action","action",null,o,d);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(jr!==0){var O=S?_y(d,S):new FormData(d);Bc(l,{pending:!0,data:O,method:d.method,action:p},null,O)}}else typeof p=="function"&&(T.preventDefault(),O=S?_y(d,S):new FormData(d),Bc(l,{pending:!0,data:O,method:d.method,action:p},p,O))},currentTarget:d}]})}}for(var bf=0;bf<ec.length;bf++){var vf=ec[bf],Xw=vf.toLowerCase(),Jw=vf[0].toUpperCase()+vf.slice(1);xn(Xw,"on"+Jw)}xn(fp,"onAnimationEnd"),xn(dp,"onAnimationIteration"),xn(hp,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(cw,"onTransitionRun"),xn(fw,"onTransitionStart"),xn(dw,"onTransitionCancel"),xn(mp,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function Ly(t,r){r=(r&4)!==0;for(var l=0;l<t.length;l++){var o=t[l],d=o.event;o=o.listeners;e:{var p=void 0;if(r)for(var S=o.length-1;0<=S;S--){var T=o[S],O=T.instance,H=T.currentTarget;if(T=T.listener,O!==p&&d.isPropagationStopped())break e;p=T,d.currentTarget=H;try{p(d)}catch(K){ks(K)}d.currentTarget=null,p=O}else for(S=0;S<o.length;S++){if(T=o[S],O=T.instance,H=T.currentTarget,T=T.listener,O!==p&&d.isPropagationStopped())break e;p=T,d.currentTarget=H;try{p(d)}catch(K){ks(K)}d.currentTarget=null,p=O}}}}function ke(t,r){var l=r[Ru];l===void 0&&(l=r[Ru]=new Set);var o=t+"__bubble";l.has(o)||(zy(r,t,2,!1),l.add(o))}function Sf(t,r,l){var o=0;r&&(o|=4),zy(l,t,o,r)}var ho="_reactListening"+Math.random().toString(36).slice(2);function wf(t){if(!t[ho]){t[ho]=!0,Mm.forEach(function(l){l!=="selectionchange"&&(Kw.has(l)||Sf(l,!1,t),Sf(l,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ho]||(r[ho]=!0,Sf("selectionchange",!1,r))}}function zy(t,r,l,o){switch(fx(r)){case 2:var d=TT;break;case 8:d=CT;break;default:d=Bf}l=d.bind(null,r,l,t),d=void 0,!Uu||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),o?d!==void 0?t.addEventListener(r,l,{capture:!0,passive:d}):t.addEventListener(r,l,!0):d!==void 0?t.addEventListener(r,l,{passive:d}):t.addEventListener(r,l,!1)}function Tf(t,r,l,o,d){var p=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===d)break;if(S===4)for(S=o.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;T!==null;){if(S=wi(T),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){o=p=S;continue e}T=T.parentNode}}o=o.return}Um(function(){var H=p,K=Pu(l),$=[];e:{var F=pp.get(t);if(F!==void 0){var G=Ts,ue=t;switch(t){case"keypress":if(Ss(l)===0)break e;case"keydown":case"keyup":G=H2;break;case"focusin":ue="focus",G=Gu;break;case"focusout":ue="blur",G=Gu;break;case"beforeblur":case"afterblur":G=Gu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=D2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=G2;break;case fp:case dp:case hp:G=O2;break;case mp:G=X2;break;case"scroll":case"scrollend":G=j2;break;case"wheel":G=K2;break;case"copy":case"cut":case"paste":G=L2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Ym;break;case"toggle":case"beforetoggle":G=Z2}var ye=(r&4)!==0,He=!ye&&(t==="scroll"||t==="scrollend"),B=ye?F!==null?F+"Capture":null:F;ye=[];for(var z=H,U;z!==null;){var W=z;if(U=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||U===null||B===null||(W=_a(z,B),W!=null&&ye.push(hl(z,W,U))),He)break;z=z.return}0<ye.length&&(F=new G(F,ue,null,l,K),$.push({event:F,listeners:ye}))}}if((r&7)===0){e:{if(F=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",F&&l!==Vu&&(ue=l.relatedTarget||l.fromElement)&&(wi(ue)||ue[Si]))break e;if((G||F)&&(F=K.window===K?K:(F=K.ownerDocument)?F.defaultView||F.parentWindow:window,G?(ue=l.relatedTarget||l.toElement,G=H,ue=ue?wi(ue):null,ue!==null&&(He=c(ue),ye=ue.tag,ue!==He||ye!==5&&ye!==27&&ye!==6)&&(ue=null)):(G=null,ue=H),G!==ue)){if(ye=qm,W="onMouseLeave",B="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(ye=Ym,W="onPointerLeave",B="onPointerEnter",z="pointer"),He=G==null?F:Oa(G),U=ue==null?F:Oa(ue),F=new ye(W,z+"leave",G,l,K),F.target=He,F.relatedTarget=U,W=null,wi(K)===H&&(ye=new ye(B,z+"enter",ue,l,K),ye.target=U,ye.relatedTarget=He,W=ye),He=W,G&&ue)t:{for(ye=Qw,B=G,z=ue,U=0,W=B;W;W=ye(W))U++;W=0;for(var pe=z;pe;pe=ye(pe))W++;for(;0<U-W;)B=ye(B),U--;for(;0<W-U;)z=ye(z),W--;for(;U--;){if(B===z||z!==null&&B===z.alternate){ye=B;break t}B=ye(B),z=ye(z)}ye=null}else ye=null;G!==null&&By($,F,G,ye,!1),ue!==null&&He!==null&&By($,He,ue,ye,!0)}}e:{if(F=H?Oa(H):window,G=F.nodeName&&F.nodeName.toLowerCase(),G==="select"||G==="input"&&F.type==="file")var Oe=ep;else if(Wm(F))if(tp)Oe=sw;else{Oe=aw;var fe=iw}else G=F.nodeName,!G||G.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?H&&Bu(H.elementType)&&(Oe=ep):Oe=lw;if(Oe&&(Oe=Oe(t,H))){$m($,Oe,l,K);break e}fe&&fe(t,F,H),t==="focusout"&&H&&F.type==="number"&&H.memoizedProps.value!=null&&zu(F,"number",F.value)}switch(fe=H?Oa(H):window,t){case"focusin":(Wm(fe)||fe.contentEditable==="true")&&(Ni=fe,Zu=H,Ha=null);break;case"focusout":Ha=Zu=Ni=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,up($,l,K);break;case"selectionchange":if(uw)break;case"keydown":case"keyup":up($,l,K)}var we;if(Xu)e:{switch(t){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else Di?Qm(t,l)&&(Me="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(Me="onCompositionStart");Me&&(Xm&&l.locale!=="ko"&&(Di||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Di&&(we=Hm()):(dr=K,Hu="value"in dr?dr.value:dr.textContent,Di=!0)),fe=mo(H,Me),0<fe.length&&(Me=new Gm(Me,t,null,l,K),$.push({event:Me,listeners:fe}),we?Me.data=we:(we=Zm(l),we!==null&&(Me.data=we)))),(we=$2?ew(t,l):tw(t,l))&&(Me=mo(H,"onBeforeInput"),0<Me.length&&(fe=new Gm("onBeforeInput","beforeinput",null,l,K),$.push({event:fe,listeners:Me}),fe.data=we)),Yw($,t,H,l,K)}Ly($,r)})}function hl(t,r,l){return{instance:t,listener:r,currentTarget:l}}function mo(t,r){for(var l=r+"Capture",o=[];t!==null;){var d=t,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=_a(t,l),d!=null&&o.unshift(hl(t,d,p)),d=_a(t,r),d!=null&&o.push(hl(t,d,p))),t.tag===3)return o;t=t.return}return[]}function Qw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function By(t,r,l,o,d){for(var p=r._reactName,S=[];l!==null&&l!==o;){var T=l,O=T.alternate,H=T.stateNode;if(T=T.tag,O!==null&&O===o)break;T!==5&&T!==26&&T!==27||H===null||(O=H,d?(H=_a(l,p),H!=null&&S.unshift(hl(l,H,O))):d||(H=_a(l,p),H!=null&&S.push(hl(l,H,O)))),l=l.return}S.length!==0&&t.push({event:r,listeners:S})}var Zw=/\r\n?/g,Ww=/\u0000|\uFFFD/g;function Vy(t){return(typeof t=="string"?t:""+t).replace(Zw,`
`).replace(Ww,"")}function Py(t,r){return r=Vy(r),Vy(t)===r}function Ue(t,r,l,o,d,p){switch(l){case"children":typeof o=="string"?r==="body"||r==="textarea"&&o===""||Ei(t,o):(typeof o=="number"||typeof o=="bigint")&&r!=="body"&&Ei(t,""+o);break;case"className":ys(t,"class",o);break;case"tabIndex":ys(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ys(t,l,o);break;case"style":Pm(t,o,p);break;case"data":if(r!=="object"){ys(t,"data",o);break}case"src":case"href":if(o===""&&(r!=="a"||l!=="href")){t.removeAttribute(l);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(l);break}o=bs(""+o),t.setAttribute(l,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(l==="formAction"?(r!=="input"&&Ue(t,r,"name",d.name,d,null),Ue(t,r,"formEncType",d.formEncType,d,null),Ue(t,r,"formMethod",d.formMethod,d,null),Ue(t,r,"formTarget",d.formTarget,d,null)):(Ue(t,r,"encType",d.encType,d,null),Ue(t,r,"method",d.method,d,null),Ue(t,r,"target",d.target,d,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(l);break}o=bs(""+o),t.setAttribute(l,o);break;case"onClick":o!=null&&(t.onclick=Hn);break;case"onScroll":o!=null&&ke("scroll",t);break;case"onScrollEnd":o!=null&&ke("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(l=o.__html,l!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=l}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}l=bs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(l,""+o):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":o===!0?t.setAttribute(l,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(l,o):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(l,o):t.removeAttribute(l);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(l):t.setAttribute(l,o);break;case"popover":ke("beforetoggle",t),ke("toggle",t),gs(t,"popover",o);break;case"xlinkActuate":Un(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Un(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Un(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Un(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Un(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Un(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Un(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Un(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Un(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":gs(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=k2.get(l)||l,gs(t,l,o))}}function Cf(t,r,l,o,d,p){switch(l){case"style":Pm(t,o,p);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(l=o.__html,l!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=l}}break;case"children":typeof o=="string"?Ei(t,o):(typeof o=="number"||typeof o=="bigint")&&Ei(t,""+o);break;case"onScroll":o!=null&&ke("scroll",t);break;case"onScrollEnd":o!=null&&ke("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dm.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(d=l.endsWith("Capture"),r=l.slice(2,d?l.length-7:void 0),p=t[Rt]||null,p=p!=null?p[l]:null,typeof p=="function"&&t.removeEventListener(r,p,d),typeof o=="function")){typeof p!="function"&&p!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(r,o,d);break e}l in t?t[l]=o:o===!0?t.setAttribute(l,""):gs(t,l,o)}}}function vt(t,r,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",t),ke("load",t);var o=!1,d=!1,p;for(p in l)if(l.hasOwnProperty(p)){var S=l[p];if(S!=null)switch(p){case"src":o=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ue(t,r,p,S,l,null)}}d&&Ue(t,r,"srcSet",l.srcSet,l,null),o&&Ue(t,r,"src",l.src,l,null);return;case"input":ke("invalid",t);var T=p=S=d=null,O=null,H=null;for(o in l)if(l.hasOwnProperty(o)){var K=l[o];if(K!=null)switch(o){case"name":d=K;break;case"type":S=K;break;case"checked":O=K;break;case"defaultChecked":H=K;break;case"value":p=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,r));break;default:Ue(t,r,o,K,l,null)}}Lm(t,p,T,O,H,S,d,!1);return;case"select":ke("invalid",t),o=S=p=null;for(d in l)if(l.hasOwnProperty(d)&&(T=l[d],T!=null))switch(d){case"value":p=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Ue(t,r,d,T,l,null)}r=p,l=S,t.multiple=!!o,r!=null?ki(t,!!o,r,!1):l!=null&&ki(t,!!o,l,!0);return;case"textarea":ke("invalid",t),p=d=o=null;for(S in l)if(l.hasOwnProperty(S)&&(T=l[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":d=T;break;case"children":p=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Ue(t,r,S,T,l,null)}Bm(t,o,d,p);return;case"option":for(O in l)if(l.hasOwnProperty(O)&&(o=l[O],o!=null))switch(O){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ue(t,r,O,o,l,null)}return;case"dialog":ke("beforetoggle",t),ke("toggle",t),ke("cancel",t),ke("close",t);break;case"iframe":case"object":ke("load",t);break;case"video":case"audio":for(o=0;o<dl.length;o++)ke(dl[o],t);break;case"image":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"embed":case"source":case"link":ke("error",t),ke("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in l)if(l.hasOwnProperty(H)&&(o=l[H],o!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ue(t,r,H,o,l,null)}return;default:if(Bu(r)){for(K in l)l.hasOwnProperty(K)&&(o=l[K],o!==void 0&&Cf(t,r,K,o,l,void 0));return}}for(T in l)l.hasOwnProperty(T)&&(o=l[T],o!=null&&Ue(t,r,T,o,l,null))}function $w(t,r,l,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,S=null,T=null,O=null,H=null,K=null;for(G in l){var $=l[G];if(l.hasOwnProperty(G)&&$!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":O=$;default:o.hasOwnProperty(G)||Ue(t,r,G,null,o,$)}}for(var F in o){var G=o[F];if($=l[F],o.hasOwnProperty(F)&&(G!=null||$!=null))switch(F){case"type":p=G;break;case"name":d=G;break;case"checked":H=G;break;case"defaultChecked":K=G;break;case"value":S=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:G!==$&&Ue(t,r,F,G,o,$)}}Lu(t,S,T,O,H,K,p,d);return;case"select":G=S=T=F=null;for(p in l)if(O=l[p],l.hasOwnProperty(p)&&O!=null)switch(p){case"value":break;case"multiple":G=O;default:o.hasOwnProperty(p)||Ue(t,r,p,null,o,O)}for(d in o)if(p=o[d],O=l[d],o.hasOwnProperty(d)&&(p!=null||O!=null))switch(d){case"value":F=p;break;case"defaultValue":T=p;break;case"multiple":S=p;default:p!==O&&Ue(t,r,d,p,o,O)}r=T,l=S,o=G,F!=null?ki(t,!!l,F,!1):!!o!=!!l&&(r!=null?ki(t,!!l,r,!0):ki(t,!!l,l?[]:"",!1));return;case"textarea":G=F=null;for(T in l)if(d=l[T],l.hasOwnProperty(T)&&d!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ue(t,r,T,null,o,d)}for(S in o)if(d=o[S],p=l[S],o.hasOwnProperty(S)&&(d!=null||p!=null))switch(S){case"value":F=d;break;case"defaultValue":G=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==p&&Ue(t,r,S,d,o,p)}zm(t,F,G);return;case"option":for(var ue in l)if(F=l[ue],l.hasOwnProperty(ue)&&F!=null&&!o.hasOwnProperty(ue))switch(ue){case"selected":t.selected=!1;break;default:Ue(t,r,ue,null,o,F)}for(O in o)if(F=o[O],G=l[O],o.hasOwnProperty(O)&&F!==G&&(F!=null||G!=null))switch(O){case"selected":t.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:Ue(t,r,O,F,o,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in l)F=l[ye],l.hasOwnProperty(ye)&&F!=null&&!o.hasOwnProperty(ye)&&Ue(t,r,ye,null,o,F);for(H in o)if(F=o[H],G=l[H],o.hasOwnProperty(H)&&F!==G&&(F!=null||G!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,r));break;default:Ue(t,r,H,F,o,G)}return;default:if(Bu(r)){for(var He in l)F=l[He],l.hasOwnProperty(He)&&F!==void 0&&!o.hasOwnProperty(He)&&Cf(t,r,He,void 0,o,F);for(K in o)F=o[K],G=l[K],!o.hasOwnProperty(K)||F===G||F===void 0&&G===void 0||Cf(t,r,K,F,o,G);return}}for(var B in l)F=l[B],l.hasOwnProperty(B)&&F!=null&&!o.hasOwnProperty(B)&&Ue(t,r,B,null,o,F);for($ in o)F=o[$],G=l[$],!o.hasOwnProperty($)||F===G||F==null&&G==null||Ue(t,r,$,F,o,G)}function Iy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,r=0,l=performance.getEntriesByType("resource"),o=0;o<l.length;o++){var d=l[o],p=d.transferSize,S=d.initiatorType,T=d.duration;if(p&&T&&Iy(S)){for(S=0,T=d.responseEnd,o+=1;o<l.length;o++){var O=l[o],H=O.startTime;if(H>T)break;var K=O.transferSize,$=O.initiatorType;K&&Iy($)&&(O=O.responseEnd,S+=K*(O<T?1:(T-H)/(O-H)))}if(--o,r+=8*(p+S)/(d.duration/1e3),t++,10<t)break}}if(0<t)return r/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Af=null,kf=null;function po(t){return t.nodeType===9?t:t.ownerDocument}function Uy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hy(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function Ef(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jf=null;function tT(){var t=window.event;return t&&t.type==="popstate"?t===jf?!1:(jf=t,!0):(jf=null,!1)}var Fy=typeof setTimeout=="function"?setTimeout:void 0,nT=typeof clearTimeout=="function"?clearTimeout:void 0,qy=typeof Promise=="function"?Promise:void 0,rT=typeof queueMicrotask=="function"?queueMicrotask:typeof qy<"u"?function(t){return qy.resolve(null).then(t).catch(iT)}:Fy;function iT(t){setTimeout(function(){throw t})}function Mr(t){return t==="head"}function Gy(t,r){var l=r,o=0;do{var d=l.nextSibling;if(t.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"||l==="/&"){if(o===0){t.removeChild(d),ia(r);return}o--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")o++;else if(l==="html")ml(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,ml(l);for(var p=l.firstChild;p;){var S=p.nextSibling,T=p.nodeName;p[Ra]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&p.rel.toLowerCase()==="stylesheet"||l.removeChild(p),p=S}}else l==="body"&&ml(t.ownerDocument.body);l=d}while(l);ia(r)}function Yy(t,r){var l=t;t=0;do{var o=l.nextSibling;if(l.nodeType===1?r?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(r?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),o&&o.nodeType===8)if(l=o.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=o}while(l)}function Mf(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var l=r;switch(r=r.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Mf(l),Ou(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function aT(t,r,l,o){for(;t.nodeType===1;){var d=l;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ra])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=cn(t.nextSibling),t===null)break}return null}function lT(t,r,l){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=cn(t.nextSibling),t===null))return null;return t}function Xy(t,r){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=cn(t.nextSibling),t===null))return null;return t}function Df(t){return t.data==="$?"||t.data==="$~"}function Nf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sT(t,r){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=r;else if(t.data!=="$?"||l.readyState!=="loading")r();else{var o=function(){r(),l.removeEventListener("DOMContentLoaded",o)};l.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function cn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return t}var Rf=null;function Jy(t){t=t.nextSibling;for(var r=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(r===0)return cn(t.nextSibling);r--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||r++}t=t.nextSibling}return null}function Ky(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(r===0)return t;r--}else l!=="/$"&&l!=="/&"||r++}t=t.previousSibling}return null}function Qy(t,r,l){switch(r=po(l),t){case"html":if(t=r.documentElement,!t)throw Error(a(452));return t;case"head":if(t=r.head,!t)throw Error(a(453));return t;case"body":if(t=r.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ml(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Ou(t)}var fn=new Map,Zy=new Set;function go(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ir=ee.d;ee.d={f:oT,r:uT,D:cT,C:fT,L:dT,m:hT,X:pT,S:mT,M:gT};function oT(){var t=ir.f(),r=lo();return t||r}function uT(t){var r=Ti(t);r!==null&&r.tag===5&&r.type==="form"?mg(r):ir.r(t)}var ta=typeof document>"u"?null:document;function Wy(t,r,l){var o=ta;if(o&&typeof r=="string"&&r){var d=nn(r);d='link[rel="'+t+'"][href="'+d+'"]',typeof l=="string"&&(d+='[crossorigin="'+l+'"]'),Zy.has(d)||(Zy.add(d),t={rel:t,crossOrigin:l,href:r},o.querySelector(d)===null&&(r=o.createElement("link"),vt(r,"link",t),mt(r),o.head.appendChild(r)))}}function cT(t){ir.D(t),Wy("dns-prefetch",t,null)}function fT(t,r){ir.C(t,r),Wy("preconnect",t,r)}function dT(t,r,l){ir.L(t,r,l);var o=ta;if(o&&t&&r){var d='link[rel="preload"][as="'+nn(r)+'"]';r==="image"&&l&&l.imageSrcSet?(d+='[imagesrcset="'+nn(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(d+='[imagesizes="'+nn(l.imageSizes)+'"]')):d+='[href="'+nn(t)+'"]';var p=d;switch(r){case"style":p=na(t);break;case"script":p=ra(t)}fn.has(p)||(t=g({rel:"preload",href:r==="image"&&l&&l.imageSrcSet?void 0:t,as:r},l),fn.set(p,t),o.querySelector(d)!==null||r==="style"&&o.querySelector(pl(p))||r==="script"&&o.querySelector(gl(p))||(r=o.createElement("link"),vt(r,"link",t),mt(r),o.head.appendChild(r)))}}function hT(t,r){ir.m(t,r);var l=ta;if(l&&t){var o=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+nn(o)+'"][href="'+nn(t)+'"]',p=d;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ra(t)}if(!fn.has(p)&&(t=g({rel:"modulepreload",href:t},r),fn.set(p,t),l.querySelector(d)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(gl(p)))return}o=l.createElement("link"),vt(o,"link",t),mt(o),l.head.appendChild(o)}}}function mT(t,r,l){ir.S(t,r,l);var o=ta;if(o&&t){var d=Ci(o).hoistableStyles,p=na(t);r=r||"default";var S=d.get(p);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(pl(p)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":r},l),(l=fn.get(p))&&Of(t,l);var O=S=o.createElement("link");mt(O),vt(O,"link",t),O._p=new Promise(function(H,K){O.onload=H,O.onerror=K}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,yo(S,r,o)}S={type:"stylesheet",instance:S,count:1,state:T},d.set(p,S)}}}function pT(t,r){ir.X(t,r);var l=ta;if(l&&t){var o=Ci(l).hoistableScripts,d=ra(t),p=o.get(d);p||(p=l.querySelector(gl(d)),p||(t=g({src:t,async:!0},r),(r=fn.get(d))&&_f(t,r),p=l.createElement("script"),mt(p),vt(p,"link",t),l.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(d,p))}}function gT(t,r){ir.M(t,r);var l=ta;if(l&&t){var o=Ci(l).hoistableScripts,d=ra(t),p=o.get(d);p||(p=l.querySelector(gl(d)),p||(t=g({src:t,async:!0,type:"module"},r),(r=fn.get(d))&&_f(t,r),p=l.createElement("script"),mt(p),vt(p,"link",t),l.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(d,p))}}function $y(t,r,l,o){var d=(d=de.current)?go(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(r=na(l.href),l=Ci(d).hoistableStyles,o=l.get(r),o||(o={type:"style",instance:null,count:0,state:null},l.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=na(l.href);var p=Ci(d).hoistableStyles,S=p.get(t);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=d.querySelector(pl(t)))&&!p._p&&(S.instance=p,S.state.loading=5),fn.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},fn.set(t,l),p||yT(d,t,l,S.state))),r&&o===null)throw Error(a(528,""));return S}if(r&&o!==null)throw Error(a(529,""));return null;case"script":return r=l.async,l=l.src,typeof l=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=ra(l),l=Ci(d).hoistableScripts,o=l.get(r),o||(o={type:"script",instance:null,count:0,state:null},l.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function na(t){return'href="'+nn(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function ex(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function yT(t,r,l,o){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?o.loading=1:(r=t.createElement("link"),o.preload=r,r.addEventListener("load",function(){return o.loading|=1}),r.addEventListener("error",function(){return o.loading|=2}),vt(r,"link",l),mt(r),t.head.appendChild(r))}function ra(t){return'[src="'+nn(t)+'"]'}function gl(t){return"script[async]"+t}function tx(t,r,l){if(r.count++,r.instance===null)switch(r.type){case"style":var o=t.querySelector('style[data-href~="'+nn(l.href)+'"]');if(o)return r.instance=o,mt(o),o;var d=g({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),mt(o),vt(o,"style",d),yo(o,l.precedence,t),r.instance=o;case"stylesheet":d=na(l.href);var p=t.querySelector(pl(d));if(p)return r.state.loading|=4,r.instance=p,mt(p),p;o=ex(l),(d=fn.get(d))&&Of(o,d),p=(t.ownerDocument||t).createElement("link"),mt(p);var S=p;return S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),vt(p,"link",o),r.state.loading|=4,yo(p,l.precedence,t),r.instance=p;case"script":return p=ra(l.src),(d=t.querySelector(gl(p)))?(r.instance=d,mt(d),d):(o=l,(d=fn.get(p))&&(o=g({},l),_f(o,d)),t=t.ownerDocument||t,d=t.createElement("script"),mt(d),vt(d,"link",o),t.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(o=r.instance,r.state.loading|=4,yo(o,l.precedence,t));return r.instance}function yo(t,r,l){for(var o=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=o.length?o[o.length-1]:null,p=d,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===r)p=T;else if(p!==d)break}p?p.parentNode.insertBefore(t,p.nextSibling):(r=l.nodeType===9?l.head:l,r.insertBefore(t,r.firstChild))}function Of(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function _f(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var xo=null;function nx(t,r,l){if(xo===null){var o=new Map,d=xo=new Map;d.set(l,o)}else d=xo,o=d.get(l),o||(o=new Map,d.set(l,o));if(o.has(t))return o;for(o.set(t,null),l=l.getElementsByTagName(t),d=0;d<l.length;d++){var p=l[d];if(!(p[Ra]||p[gt]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(r)||"";S=t+S;var T=o.get(S);T?T.push(p):o.set(S,[p])}}return o}function rx(t,r,l){t=t.ownerDocument||t,t.head.insertBefore(l,r==="title"?t.querySelector("head > title"):null)}function xT(t,r,l){if(l===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function ix(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function bT(t,r,l,o){if(l.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var d=na(o.href),p=r.querySelector(pl(d));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(t.count++,t=bo.bind(t),r.then(t,t)),l.state.loading|=4,l.instance=p,mt(p);return}p=r.ownerDocument||r,o=ex(o),(d=fn.get(d))&&Of(o,d),p=p.createElement("link"),mt(p);var S=p;S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),vt(p,"link",o),l.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,r),(r=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=bo.bind(t),r.addEventListener("load",l),r.addEventListener("error",l))}}var Lf=0;function vT(t,r){return t.stylesheets&&t.count===0&&So(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var o=setTimeout(function(){if(t.stylesheets&&So(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+r);0<t.imgBytes&&Lf===0&&(Lf=62500*eT());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&So(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Lf?50:800)+r);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(d)}}:null}function bo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vo=null;function So(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vo=new Map,r.forEach(ST,t),vo=null,bo.call(t))}function ST(t,r){if(!(r.state.loading&4)){var l=vo.get(t);if(l)var o=l.get(null);else{l=new Map,vo.set(t,l);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var S=d[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(l.set(S.dataset.precedence,S),o=S)}o&&l.set(null,o)}d=r.instance,S=d.getAttribute("data-precedence"),p=l.get(S)||o,p===o&&l.set(null,d),l.set(S,d),this.count++,o=bo.bind(this),d.addEventListener("load",o),d.addEventListener("error",o),p?p.parentNode.insertBefore(d,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),r.state.loading|=4}}var yl={$$typeof:j,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function wT(t,r,l,o,d,p,S,T,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.hiddenUpdates=Mu(null),this.identifierPrefix=o,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function ax(t,r,l,o,d,p,S,T,O,H,K,$){return t=new wT(t,r,l,S,O,H,K,$,T),r=1,p===!0&&(r|=24),p=Gt(3,null,null,r),t.current=p,p.stateNode=t,r=hc(),r.refCount++,t.pooledCache=r,r.refCount++,p.memoizedState={element:o,isDehydrated:l,cache:r},yc(p),t}function lx(t){return t?(t=_i,t):_i}function sx(t,r,l,o,d,p){d=lx(d),o.context===null?o.context=d:o.pendingContext=d,o=xr(r),o.payload={element:l},p=p===void 0?null:p,p!==null&&(o.callback=p),l=br(t,o,r),l!==null&&(Vt(l,t,r),Ka(l,t,r))}function ox(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<r?l:r}}function zf(t,r){ox(t,r),(t=t.alternate)&&ox(t,r)}function ux(t){if(t.tag===13||t.tag===31){var r=Xr(t,67108864);r!==null&&Vt(r,t,67108864),zf(t,67108864)}}function cx(t){if(t.tag===13||t.tag===31){var r=Qt();r=Du(r);var l=Xr(t,r);l!==null&&Vt(l,t,r),zf(t,r)}}var wo=!0;function TT(t,r,l,o){var d=P.T;P.T=null;var p=ee.p;try{ee.p=2,Bf(t,r,l,o)}finally{ee.p=p,P.T=d}}function CT(t,r,l,o){var d=P.T;P.T=null;var p=ee.p;try{ee.p=8,Bf(t,r,l,o)}finally{ee.p=p,P.T=d}}function Bf(t,r,l,o){if(wo){var d=Vf(o);if(d===null)Tf(t,r,o,To,l),dx(t,o);else if(kT(d,t,r,l,o))o.stopPropagation();else if(dx(t,o),r&4&&-1<AT.indexOf(t)){for(;d!==null;){var p=Ti(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Hr(p.pendingLanes);if(S!==0){var T=p;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var O=1<<31-Fe(S);T.entanglements[1]|=O,S&=~O}Dn(p),(Le&6)===0&&(io=At()+500,fl(0))}}break;case 31:case 13:T=Xr(p,2),T!==null&&Vt(T,p,2),lo(),zf(p,2)}if(p=Vf(o),p===null&&Tf(t,r,o,To,l),p===d)break;d=p}d!==null&&o.stopPropagation()}else Tf(t,r,o,null,l)}}function Vf(t){return t=Pu(t),Pf(t)}var To=null;function Pf(t){if(To=null,t=wi(t),t!==null){var r=c(t);if(r===null)t=null;else{var l=r.tag;if(l===13){if(t=u(r),t!==null)return t;t=null}else if(l===31){if(t=f(r),t!==null)return t;t=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return To=t,null}function fx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ju()){case Z:return 2;case ae:return 8;case xe:case Ce:return 32;case Be:return 268435456;default:return 32}default:return 32}}var If=!1,Dr=null,Nr=null,Rr=null,xl=new Map,bl=new Map,Or=[],AT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dx(t,r){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":xl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(r.pointerId)}}function vl(t,r,l,o,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:l,eventSystemFlags:o,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Ti(r),r!==null&&ux(r)),t):(t.eventSystemFlags|=o,r=t.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),t)}function kT(t,r,l,o,d){switch(r){case"focusin":return Dr=vl(Dr,t,r,l,o,d),!0;case"dragenter":return Nr=vl(Nr,t,r,l,o,d),!0;case"mouseover":return Rr=vl(Rr,t,r,l,o,d),!0;case"pointerover":var p=d.pointerId;return xl.set(p,vl(xl.get(p)||null,t,r,l,o,d)),!0;case"gotpointercapture":return p=d.pointerId,bl.set(p,vl(bl.get(p)||null,t,r,l,o,d)),!0}return!1}function hx(t){var r=wi(t.target);if(r!==null){var l=c(r);if(l!==null){if(r=l.tag,r===13){if(r=u(l),r!==null){t.blockedOn=r,Em(t.priority,function(){cx(l)});return}}else if(r===31){if(r=f(l),r!==null){t.blockedOn=r,Em(t.priority,function(){cx(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Co(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var l=Vf(t.nativeEvent);if(l===null){l=t.nativeEvent;var o=new l.constructor(l.type,l);Vu=o,l.target.dispatchEvent(o),Vu=null}else return r=Ti(l),r!==null&&ux(r),t.blockedOn=l,!1;r.shift()}return!0}function mx(t,r,l){Co(t)&&l.delete(r)}function ET(){If=!1,Dr!==null&&Co(Dr)&&(Dr=null),Nr!==null&&Co(Nr)&&(Nr=null),Rr!==null&&Co(Rr)&&(Rr=null),xl.forEach(mx),bl.forEach(mx)}function Ao(t,r){t.blockedOn===r&&(t.blockedOn=null,If||(If=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ET)))}var ko=null;function px(t){ko!==t&&(ko=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){ko===t&&(ko=null);for(var r=0;r<t.length;r+=3){var l=t[r],o=t[r+1],d=t[r+2];if(typeof o!="function"){if(Pf(o||l)===null)continue;break}var p=Ti(l);p!==null&&(t.splice(r,3),r-=3,Bc(p,{pending:!0,data:d,method:l.method,action:o},o,d))}}))}function ia(t){function r(O){return Ao(O,t)}Dr!==null&&Ao(Dr,t),Nr!==null&&Ao(Nr,t),Rr!==null&&Ao(Rr,t),xl.forEach(r),bl.forEach(r);for(var l=0;l<Or.length;l++){var o=Or[l];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Or.length&&(l=Or[0],l.blockedOn===null);)hx(l),l.blockedOn===null&&Or.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(o=0;o<l.length;o+=3){var d=l[o],p=l[o+1],S=d[Rt]||null;if(typeof p=="function")S||px(l);else if(S){var T=null;if(p&&p.hasAttribute("formAction")){if(d=p,S=p[Rt]||null)T=S.formAction;else if(Pf(d)!==null)continue}else T=S.action;typeof T=="function"?l[o+1]=T:(l.splice(o,3),o-=3),px(l)}}}function gx(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return d=S})},focusReset:"manual",scroll:"manual"})}function r(){d!==null&&(d(),d=null),o||setTimeout(l,20)}function l(){if(!o&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(l,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),d!==null&&(d(),d=null)}}}function Uf(t){this._internalRoot=t}Eo.prototype.render=Uf.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));var l=r.current,o=Qt();sx(l,o,t,r,null,null)},Eo.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;sx(t.current,2,null,t,null,null),lo(),r[Si]=null}};function Eo(t){this._internalRoot=t}Eo.prototype.unstable_scheduleHydration=function(t){if(t){var r=km();t={blockedOn:null,target:t,priority:r};for(var l=0;l<Or.length&&r!==0&&r<Or[l].priority;l++);Or.splice(l,0,t),l===0&&hx(t)}};var yx=n.version;if(yx!=="19.2.0")throw Error(a(527,yx,"19.2.0"));ee.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(r),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var jT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{kt=jo.inject(jT),ft=jo}catch{}}return wl.createRoot=function(t,r){if(!s(t))throw Error(a(299));var l=!1,o="",d=Cg,p=Ag,S=kg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(S=r.onRecoverableError)),r=ax(t,1,!1,null,null,l,o,null,d,p,S,gx),t[Si]=r.current,wf(t),new Uf(r)},wl.hydrateRoot=function(t,r,l){if(!s(t))throw Error(a(299));var o=!1,d="",p=Cg,S=Ag,T=kg,O=null;return l!=null&&(l.unstable_strictMode===!0&&(o=!0),l.identifierPrefix!==void 0&&(d=l.identifierPrefix),l.onUncaughtError!==void 0&&(p=l.onUncaughtError),l.onCaughtError!==void 0&&(S=l.onCaughtError),l.onRecoverableError!==void 0&&(T=l.onRecoverableError),l.formState!==void 0&&(O=l.formState)),r=ax(t,1,!0,r,l??null,o,d,O,p,S,T,gx),r.context=lx(null),l=r.current,o=Qt(),o=Du(o),d=xr(o),d.callback=null,br(l,d,o),l=o,r.current.lanes=l,Na(r,l),Dn(r),t[Si]=r.current,wf(t),new Eo(r)},wl.version="19.2.0",wl}var Ex;function VT(){if(Ex)return Ff.exports;Ex=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Ff.exports=BT(),Ff.exports}var PT=VT(),M=vh();const Wo=bh(M);var jx="popstate";function IT(e={}){function n(a,s){let{pathname:c,search:u,hash:f}=a.location;return Ld("",{pathname:c,search:u,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(a,s){return typeof s=="string"?s:Hl(s)}return HT(n,i,null,e)}function We(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function An(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function UT(){return Math.random().toString(36).substring(2,10)}function Mx(e,n){return{usr:e.state,key:e.key,idx:n}}function Ld(e,n,i=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?xa(n):n,state:i,key:n&&n.key||a||UT()}}function Hl({pathname:e="/",search:n="",hash:i=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function xa(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substring(i),e=e.substring(0,i));let a=e.indexOf("?");a>=0&&(n.search=e.substring(a),e=e.substring(0,a)),e&&(n.pathname=e)}return n}function HT(e,n,i,a={}){let{window:s=document.defaultView,v5Compat:c=!1}=a,u=s.history,f="POP",m=null,h=y();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function y(){return(u.state||{idx:null}).idx}function g(){f="POP";let k=y(),C=k==null?null:k-h;h=k,m&&m({action:f,location:E.location,delta:C})}function b(k,C){f="PUSH";let N=Ld(E.location,k,C);h=y()+1;let j=Mx(N,h),V=E.createHref(N);try{u.pushState(j,"",V)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;s.location.assign(V)}c&&m&&m({action:f,location:E.location,delta:1})}function v(k,C){f="REPLACE";let N=Ld(E.location,k,C);h=y();let j=Mx(N,h),V=E.createHref(N);u.replaceState(j,"",V),c&&m&&m({action:f,location:E.location,delta:0})}function w(k){return FT(k)}let E={get action(){return f},get location(){return e(s,u)},listen(k){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(jx,g),m=k,()=>{s.removeEventListener(jx,g),m=null}},createHref(k){return n(s,k)},createURL:w,encodeLocation(k){let C=w(k);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:b,replace:v,go(k){return u.go(k)}};return E}function FT(e,n=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),We(i,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:Hl(e);return a=a.replace(/ $/,"%20"),!n&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function Zb(e,n,i="/"){return qT(e,n,i,!1)}function qT(e,n,i,a){let s=typeof n=="string"?xa(n):n,c=sr(s.pathname||"/",i);if(c==null)return null;let u=Wb(e);GT(u);let f=null;for(let m=0;f==null&&m<u.length;++m){let h=nC(c);f=eC(u[m],h,a)}return f}function Wb(e,n=[],i=[],a="",s=!1){let c=(u,f,m=s,h)=>{let y={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(a)&&m)return;We(y.relativePath.startsWith(a),`Absolute route path "${y.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(a.length)}let g=ar([a,y.relativePath]),b=i.concat(y);u.children&&u.children.length>0&&(We(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Wb(u.children,n,b,g,m)),!(u.path==null&&!u.index)&&n.push({path:g,score:WT(g,u.index),routesMeta:b})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))c(u,f);else for(let m of $b(u.path))c(u,f,!0,m)}),n}function $b(e){let n=e.split("/");if(n.length===0)return[];let[i,...a]=n,s=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return s?[c,""]:[c];let u=$b(a.join("/")),f=[];return f.push(...u.map(m=>m===""?c:[c,m].join("/"))),s&&f.push(...u),f.map(m=>e.startsWith("/")&&m===""?"/":m)}function GT(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:$T(n.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var YT=/^:[\w-]+$/,XT=3,JT=2,KT=1,QT=10,ZT=-2,Dx=e=>e==="*";function WT(e,n){let i=e.split("/"),a=i.length;return i.some(Dx)&&(a+=ZT),n&&(a+=JT),i.filter(s=>!Dx(s)).reduce((s,c)=>s+(YT.test(c)?XT:c===""?KT:QT),a)}function $T(e,n){return e.length===n.length&&e.slice(0,-1).every((a,s)=>a===n[s])?e[e.length-1]-n[n.length-1]:0}function eC(e,n,i=!1){let{routesMeta:a}=e,s={},c="/",u=[];for(let f=0;f<a.length;++f){let m=a[f],h=f===a.length-1,y=c==="/"?n:n.slice(c.length)||"/",g=$o({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},y),b=m.route;if(!g&&h&&i&&!a[a.length-1].route.index&&(g=$o({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!g)return null;Object.assign(s,g.params),u.push({params:s,pathname:ar([c,g.pathname]),pathnameBase:sC(ar([c,g.pathnameBase])),route:b}),g.pathnameBase!=="/"&&(c=ar([c,g.pathnameBase]))}return u}function $o(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=tC(e.path,e.caseSensitive,e.end),s=n.match(i);if(!s)return null;let c=s[0],u=c.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((h,{paramName:y,isOptional:g},b)=>{if(y==="*"){let w=f[b]||"";u=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const v=f[b];return g&&!v?h[y]=void 0:h[y]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:u,pattern:e}}function tC(e,n=!1,i=!0){An(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,m)=>(a.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),a]}function nC(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return An(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function sr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}var rC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iC=e=>rC.test(e);function aC(e,n="/"){let{pathname:i,search:a="",hash:s=""}=typeof e=="string"?xa(e):e,c;if(i)if(iC(i))c=i;else{if(i.includes("//")){let u=i;i=i.replace(/\/\/+/g,"/"),An(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${i}`)}i.startsWith("/")?c=Nx(i.substring(1),"/"):c=Nx(i,n)}else c=n;return{pathname:c,search:oC(a),hash:uC(s)}}function Nx(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function Jf(e,n,i,a){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lC(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function e1(e){let n=lC(e);return n.map((i,a)=>a===n.length-1?i.pathname:i.pathnameBase)}function t1(e,n,i,a=!1){let s;typeof e=="string"?s=xa(e):(s={...e},We(!s.pathname||!s.pathname.includes("?"),Jf("?","pathname","search",s)),We(!s.pathname||!s.pathname.includes("#"),Jf("#","pathname","hash",s)),We(!s.search||!s.search.includes("#"),Jf("#","search","hash",s)));let c=e===""||s.pathname==="",u=c?"/":s.pathname,f;if(u==null)f=i;else{let g=n.length-1;if(!a&&u.startsWith("..")){let b=u.split("/");for(;b[0]==="..";)b.shift(),g-=1;s.pathname=b.join("/")}f=g>=0?n[g]:"/"}let m=aC(s,f),h=u&&u!=="/"&&u.endsWith("/"),y=(c||u===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||y)&&(m.pathname+="/"),m}var ar=e=>e.join("/").replace(/\/\/+/g,"/"),sC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),oC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function fC(e){return e.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var n1=["POST","PUT","PATCH","DELETE"];new Set(n1);var dC=["GET",...n1];new Set(dC);var ba=M.createContext(null);ba.displayName="DataRouter";var du=M.createContext(null);du.displayName="DataRouterState";M.createContext(!1);var r1=M.createContext({isTransitioning:!1});r1.displayName="ViewTransition";var hC=M.createContext(new Map);hC.displayName="Fetchers";var mC=M.createContext(null);mC.displayName="Await";var kn=M.createContext(null);kn.displayName="Navigation";var Zl=M.createContext(null);Zl.displayName="Location";var zn=M.createContext({outlet:null,matches:[],isDataRoute:!1});zn.displayName="Route";var Sh=M.createContext(null);Sh.displayName="RouteError";function pC(e,{relative:n}={}){We(Wl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=M.useContext(kn),{hash:s,pathname:c,search:u}=es(e,{relative:n}),f=c;return i!=="/"&&(f=c==="/"?i:ar([i,c])),a.createHref({pathname:f,search:u,hash:s})}function Wl(){return M.useContext(Zl)!=null}function or(){return We(Wl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Zl).location}var i1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function a1(e){M.useContext(kn).static||M.useLayoutEffect(e)}function $l(){let{isDataRoute:e}=M.useContext(zn);return e?MC():gC()}function gC(){We(Wl(),"useNavigate() may be used only in the context of a <Router> component.");let e=M.useContext(ba),{basename:n,navigator:i}=M.useContext(kn),{matches:a}=M.useContext(zn),{pathname:s}=or(),c=JSON.stringify(e1(a)),u=M.useRef(!1);return a1(()=>{u.current=!0}),M.useCallback((m,h={})=>{if(An(u.current,i1),!u.current)return;if(typeof m=="number"){i.go(m);return}let y=t1(m,JSON.parse(c),s,h.relative==="path");e==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:ar([n,y.pathname])),(h.replace?i.replace:i.push)(y,h.state,h)},[n,i,c,s,e])}M.createContext(null);function yC(){let{matches:e}=M.useContext(zn),n=e[e.length-1];return n?n.params:{}}function es(e,{relative:n}={}){let{matches:i}=M.useContext(zn),{pathname:a}=or(),s=JSON.stringify(e1(i));return M.useMemo(()=>t1(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function xC(e,n){return l1(e,n)}function l1(e,n,i,a,s){We(Wl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=M.useContext(kn),{matches:u}=M.useContext(zn),f=u[u.length-1],m=f?f.params:{},h=f?f.pathname:"/",y=f?f.pathnameBase:"/",g=f&&f.route;{let N=g&&g.path||"";s1(h,!g||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let b=or(),v;if(n){let N=typeof n=="string"?xa(n):n;We(y==="/"||N.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${N.pathname}" was given in the \`location\` prop.`),v=N}else v=b;let w=v.pathname||"/",E=w;if(y!=="/"){let N=y.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(N.length).join("/")}let k=Zb(e,{pathname:E});An(g||k!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),An(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=TC(k&&k.map(N=>Object.assign({},N,{params:Object.assign({},m,N.params),pathname:ar([y,c.encodeLocation?c.encodeLocation(N.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?y:ar([y,c.encodeLocation?c.encodeLocation(N.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),u,i,a,s);return n&&C?M.createElement(Zl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},C):C}function bC(){let e=jC(),n=cC(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:c},"ErrorBoundary")," or"," ",M.createElement("code",{style:c},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},n),i?M.createElement("pre",{style:s},i):null,u)}var vC=M.createElement(bC,null),SC=class extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){this.props.onError?this.props.onError(e,n):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?M.createElement(zn.Provider,{value:this.props.routeContext},M.createElement(Sh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wC({routeContext:e,match:n,children:i}){let a=M.useContext(ba);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(zn.Provider,{value:e},i)}function TC(e,n=[],i=null,a=null,s=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let c=e,u=i?.errors;if(u!=null){let y=c.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);We(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,y+1))}let f=!1,m=-1;if(i)for(let y=0;y<c.length;y++){let g=c[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=y),g.route.id){let{loaderData:b,errors:v}=i,w=g.route.loader&&!b.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||w){f=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let h=i&&a?(y,g)=>{a(y,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:fC(i.matches),errorInfo:g})}:void 0;return c.reduceRight((y,g,b)=>{let v,w=!1,E=null,k=null;i&&(v=u&&g.route.id?u[g.route.id]:void 0,E=g.route.errorElement||vC,f&&(m<0&&b===0?(s1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,k=null):m===b&&(w=!0,k=g.route.hydrateFallbackElement||null)));let C=n.concat(c.slice(0,b+1)),N=()=>{let j;return v?j=E:w?j=k:g.route.Component?j=M.createElement(g.route.Component,null):g.route.element?j=g.route.element:j=y,M.createElement(wC,{match:g,routeContext:{outlet:y,matches:C,isDataRoute:i!=null},children:j})};return i&&(g.route.ErrorBoundary||g.route.errorElement||b===0)?M.createElement(SC,{location:i.location,revalidation:i.revalidation,component:E,error:v,children:N(),routeContext:{outlet:null,matches:C,isDataRoute:!0},onError:h}):N()},null)}function wh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function CC(e){let n=M.useContext(ba);return We(n,wh(e)),n}function AC(e){let n=M.useContext(du);return We(n,wh(e)),n}function kC(e){let n=M.useContext(zn);return We(n,wh(e)),n}function Th(e){let n=kC(e),i=n.matches[n.matches.length-1];return We(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function EC(){return Th("useRouteId")}function jC(){let e=M.useContext(Sh),n=AC("useRouteError"),i=Th("useRouteError");return e!==void 0?e:n.errors?.[i]}function MC(){let{router:e}=CC("useNavigate"),n=Th("useNavigate"),i=M.useRef(!1);return a1(()=>{i.current=!0}),M.useCallback(async(s,c={})=>{An(i.current,i1),i.current&&(typeof s=="number"?await e.navigate(s):await e.navigate(s,{fromRouteId:n,...c}))},[e,n])}var Rx={};function s1(e,n,i){!n&&!Rx[e]&&(Rx[e]=!0,An(!1,i))}M.memo(DC);function DC({routes:e,future:n,state:i,unstable_onError:a}){return l1(e,void 0,i,a,n)}function Rl(e){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NC({basename:e="/",children:n=null,location:i,navigationType:a="POP",navigator:s,static:c=!1,unstable_useTransitions:u}){We(!Wl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),m=M.useMemo(()=>({basename:f,navigator:s,static:c,unstable_useTransitions:u,future:{}}),[f,s,c,u]);typeof i=="string"&&(i=xa(i));let{pathname:h="/",search:y="",hash:g="",state:b=null,key:v="default"}=i,w=M.useMemo(()=>{let E=sr(h,f);return E==null?null:{location:{pathname:E,search:y,hash:g,state:b,key:v},navigationType:a}},[f,h,y,g,b,v,a]);return An(w!=null,`<Router basename="${f}"> is not able to match the URL "${h}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:M.createElement(kn.Provider,{value:m},M.createElement(Zl.Provider,{children:n,value:w}))}function RC({children:e,location:n}){return xC(zd(e),n)}function zd(e,n=[]){let i=[];return M.Children.forEach(e,(a,s)=>{if(!M.isValidElement(a))return;let c=[...n,s];if(a.type===M.Fragment){i.push.apply(i,zd(a.props.children,c));return}We(a.type===Rl,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=zd(a.props.children,c)),i.push(u)}),i}var Io="get",Uo="application/x-www-form-urlencoded";function hu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function OC(e){return hu(e)&&e.tagName.toLowerCase()==="button"}function _C(e){return hu(e)&&e.tagName.toLowerCase()==="form"}function LC(e){return hu(e)&&e.tagName.toLowerCase()==="input"}function zC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function BC(e,n){return e.button===0&&(!n||n==="_self")&&!zC(e)}var Mo=null;function VC(){if(Mo===null)try{new FormData(document.createElement("form"),0),Mo=!1}catch{Mo=!0}return Mo}var PC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kf(e){return e!=null&&!PC.has(e)?(An(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uo}"`),null):e}function IC(e,n){let i,a,s,c,u;if(_C(e)){let f=e.getAttribute("action");a=f?sr(f,n):null,i=e.getAttribute("method")||Io,s=Kf(e.getAttribute("enctype"))||Uo,c=new FormData(e)}else if(OC(e)||LC(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||f.getAttribute("action");if(a=m?sr(m,n):null,i=e.getAttribute("formmethod")||f.getAttribute("method")||Io,s=Kf(e.getAttribute("formenctype"))||Kf(f.getAttribute("enctype"))||Uo,c=new FormData(f,e),!VC()){let{name:h,type:y,value:g}=e;if(y==="image"){let b=h?`${h}.`:"";c.append(`${b}x`,"0"),c.append(`${b}y`,"0")}else h&&c.append(h,g)}}else{if(hu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Io,a=null,s=Uo,u=e}return c&&s==="text/plain"&&(u=c,c=void 0),{action:a,method:i.toLowerCase(),encType:s,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ch(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function UC(e,n,i){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${i}`:n&&sr(a.pathname,n)==="/"?a.pathname=`${n.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function HC(e,n){if(e.id in n)return n[e.id];try{let i=await import(e.module);return n[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function FC(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function qC(e,n,i){let a=await Promise.all(e.map(async s=>{let c=n.routes[s.route.id];if(c){let u=await HC(c,i);return u.links?u.links():[]}return[]}));return JC(a.flat(1).filter(FC).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Ox(e,n,i,a,s,c){let u=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,f=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?n.filter((m,h)=>u(m,h)||f(m,h)):c==="data"?n.filter((m,h)=>{let y=a.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(u(m,h)||f(m,h))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function GC(e,n,{includeHydrateFallback:i}={}){return YC(e.map(a=>{let s=n.routes[a.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),i&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function YC(e){return[...new Set(e)]}function XC(e){let n={},i=Object.keys(e).sort();for(let a of i)n[a]=e[a];return n}function JC(e,n){let i=new Set;return new Set(n),e.reduce((a,s)=>{let c=JSON.stringify(XC(s));return i.has(c)||(i.add(c),a.push({key:c,link:s})),a},[])}function o1(){let e=M.useContext(ba);return Ch(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function KC(){let e=M.useContext(du);return Ch(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ah=M.createContext(void 0);Ah.displayName="FrameworkContext";function u1(){let e=M.useContext(Ah);return Ch(e,"You must render this element inside a <HydratedRouter> element"),e}function QC(e,n){let i=M.useContext(Ah),[a,s]=M.useState(!1),[c,u]=M.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:h,onMouseLeave:y,onTouchStart:g}=n,b=M.useRef(null);M.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let E=C=>{C.forEach(N=>{u(N.isIntersecting)})},k=new IntersectionObserver(E,{threshold:.5});return b.current&&k.observe(b.current),()=>{k.disconnect()}}},[e]),M.useEffect(()=>{if(a){let E=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(E)}}},[a]);let v=()=>{s(!0)},w=()=>{s(!1),u(!1)};return i?e!=="intent"?[c,b,{}]:[c,b,{onFocus:Tl(f,v),onBlur:Tl(m,w),onMouseEnter:Tl(h,v),onMouseLeave:Tl(y,w),onTouchStart:Tl(g,v)}]:[!1,b,{}]}function Tl(e,n){return i=>{e&&e(i),i.defaultPrevented||n(i)}}function ZC({page:e,...n}){let{router:i}=o1(),a=M.useMemo(()=>Zb(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?M.createElement($C,{page:e,matches:a,...n}):null}function WC(e){let{manifest:n,routeModules:i}=u1(),[a,s]=M.useState([]);return M.useEffect(()=>{let c=!1;return qC(e,n,i).then(u=>{c||s(u)}),()=>{c=!0}},[e,n,i]),a}function $C({page:e,matches:n,...i}){let a=or(),{manifest:s,routeModules:c}=u1(),{basename:u}=o1(),{loaderData:f,matches:m}=KC(),h=M.useMemo(()=>Ox(e,n,m,s,a,"data"),[e,n,m,s,a]),y=M.useMemo(()=>Ox(e,n,m,s,a,"assets"),[e,n,m,s,a]),g=M.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let w=new Set,E=!1;if(n.forEach(C=>{let N=s.routes[C.route.id];!N||!N.hasLoader||(!h.some(j=>j.route.id===C.route.id)&&C.route.id in f&&c[C.route.id]?.shouldRevalidate||N.hasClientLoader?E=!0:w.add(C.route.id))}),w.size===0)return[];let k=UC(e,u,"data");return E&&w.size>0&&k.searchParams.set("_routes",n.filter(C=>w.has(C.route.id)).map(C=>C.route.id).join(",")),[k.pathname+k.search]},[u,f,a,s,h,n,e,c]),b=M.useMemo(()=>GC(y,s),[y,s]),v=WC(y);return M.createElement(M.Fragment,null,g.map(w=>M.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),b.map(w=>M.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),v.map(({key:w,link:E})=>M.createElement("link",{key:w,nonce:i.nonce,...E})))}function eA(...e){return n=>{e.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var c1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{c1&&(window.__reactRouterVersion="7.10.1")}catch{}function tA({basename:e,children:n,unstable_useTransitions:i,window:a}){let s=M.useRef();s.current==null&&(s.current=IT({window:a,v5Compat:!0}));let c=s.current,[u,f]=M.useState({action:c.action,location:c.location}),m=M.useCallback(h=>{i===!1?f(h):M.startTransition(()=>f(h))},[i]);return M.useLayoutEffect(()=>c.listen(m),[c,m]),M.createElement(NC,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:c,unstable_useTransitions:i===!0})}var f1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ui=M.forwardRef(function({onClick:n,discover:i="render",prefetch:a="none",relative:s,reloadDocument:c,replace:u,state:f,target:m,to:h,preventScrollReset:y,viewTransition:g,...b},v){let{basename:w,unstable_useTransitions:E}=M.useContext(kn),k=typeof h=="string"&&f1.test(h),C,N=!1;if(typeof h=="string"&&k&&(C=h,c1))try{let R=new URL(window.location.href),Q=h.startsWith("//")?new URL(R.protocol+h):new URL(h),te=sr(Q.pathname,w);Q.origin===R.origin&&te!=null?h=te+Q.search+Q.hash:N=!0}catch{An(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=pC(h,{relative:s}),[V,Y,_]=QC(a,b),q=aA(h,{replace:u,state:f,target:m,preventScrollReset:y,relative:s,viewTransition:g,unstable_useTransitions:E});function X(R){n&&n(R),R.defaultPrevented||q(R)}let I=M.createElement("a",{...b,..._,href:C||j,onClick:N||c?n:X,ref:eA(v,Y),target:m,"data-discover":!k&&i==="render"?"true":void 0});return V&&!k?M.createElement(M.Fragment,null,I,M.createElement(ZC,{page:j})):I});ui.displayName="Link";var nA=M.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:a="",end:s=!1,style:c,to:u,viewTransition:f,children:m,...h},y){let g=es(u,{relative:h.relative}),b=or(),v=M.useContext(du),{navigator:w,basename:E}=M.useContext(kn),k=v!=null&&cA(g)&&f===!0,C=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,N=b.pathname,j=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(N=N.toLowerCase(),j=j?j.toLowerCase():null,C=C.toLowerCase()),j&&E&&(j=sr(j,E)||j);const V=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let Y=N===C||!s&&N.startsWith(C)&&N.charAt(V)==="/",_=j!=null&&(j===C||!s&&j.startsWith(C)&&j.charAt(C.length)==="/"),q={isActive:Y,isPending:_,isTransitioning:k},X=Y?n:void 0,I;typeof a=="function"?I=a(q):I=[a,Y?"active":null,_?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(q):c;return M.createElement(ui,{...h,"aria-current":X,className:I,ref:y,style:R,to:u,viewTransition:f},typeof m=="function"?m(q):m)});nA.displayName="NavLink";var rA=M.forwardRef(({discover:e="render",fetcherKey:n,navigate:i,reloadDocument:a,replace:s,state:c,method:u=Io,action:f,onSubmit:m,relative:h,preventScrollReset:y,viewTransition:g,...b},v)=>{let{unstable_useTransitions:w}=M.useContext(kn),E=oA(),k=uA(f,{relative:h}),C=u.toLowerCase()==="get"?"get":"post",N=typeof f=="string"&&f1.test(f),j=V=>{if(m&&m(V),V.defaultPrevented)return;V.preventDefault();let Y=V.nativeEvent.submitter,_=Y?.getAttribute("formmethod")||u,q=()=>E(Y||V.currentTarget,{fetcherKey:n,method:_,navigate:i,replace:s,state:c,relative:h,preventScrollReset:y,viewTransition:g});w&&i!==!1?M.startTransition(()=>q()):q()};return M.createElement("form",{ref:v,method:C,action:k,onSubmit:a?m:j,...b,"data-discover":!N&&e==="render"?"true":void 0})});rA.displayName="Form";function iA(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d1(e){let n=M.useContext(ba);return We(n,iA(e)),n}function aA(e,{target:n,replace:i,state:a,preventScrollReset:s,relative:c,viewTransition:u,unstable_useTransitions:f}={}){let m=$l(),h=or(),y=es(e,{relative:c});return M.useCallback(g=>{if(BC(g,n)){g.preventDefault();let b=i!==void 0?i:Hl(h)===Hl(y),v=()=>m(e,{replace:b,state:a,preventScrollReset:s,relative:c,viewTransition:u});f?M.startTransition(()=>v()):v()}},[h,m,y,i,a,n,e,s,c,u,f])}var lA=0,sA=()=>`__${String(++lA)}__`;function oA(){let{router:e}=d1("useSubmit"),{basename:n}=M.useContext(kn),i=EC(),a=e.fetch,s=e.navigate;return M.useCallback(async(c,u={})=>{let{action:f,method:m,encType:h,formData:y,body:g}=IC(c,n);if(u.navigate===!1){let b=u.fetcherKey||sA();await a(b,i,u.action||f,{preventScrollReset:u.preventScrollReset,formData:y,body:g,formMethod:u.method||m,formEncType:u.encType||h,flushSync:u.flushSync})}else await s(u.action||f,{preventScrollReset:u.preventScrollReset,formData:y,body:g,formMethod:u.method||m,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[a,s,n,i])}function uA(e,{relative:n}={}){let{basename:i}=M.useContext(kn),a=M.useContext(zn);We(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),c={...es(e||".",{relative:n})},u=or();if(e==null){c.search=u.search;let f=new URLSearchParams(c.search),m=f.getAll("index");if(m.some(y=>y==="")){f.delete("index"),m.filter(g=>g).forEach(g=>f.append("index",g));let y=f.toString();c.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ar([i,c.pathname])),Hl(c)}function cA(e,{relative:n}={}){let i=M.useContext(r1);We(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=d1("useViewTransitionState"),s=es(e,{relative:n});if(!i.isTransitioning)return!1;let c=sr(i.currentLocation.pathname,a)||i.currentLocation.pathname,u=sr(i.nextLocation.pathname,a)||i.nextLocation.pathname;return $o(s.pathname,u)!=null||$o(s.pathname,c)!=null}const fA=({theme:e,onToggleTheme:n,onNavClick:i})=>{const a=or(),s=$l(),c=a.pathname==="/",[u,f]=M.useState(!1),m=[{id:"top",label:"Profile"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"lab",label:"Lab"}],h=v=>{f(!1),c?i(v):(s("/"),setTimeout(()=>{i(v)},100))};M.useEffect(()=>(u?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[u]);const y="px-3 py-1.5 rounded-lg text-[13px] font-medium border border-transparent cursor-pointer transition-all duration-300 ease-out hover:text-fg hover:bg-(--bg-soft)",g="text-fg bg-(--bg-soft)",b="text-fg-muted";return x.jsxs(x.Fragment,{children:[x.jsx("header",{className:"fixed inset-x-0 top-0 h-(--header-height) z-20 border-b border-(--border-subtle)",children:x.jsxs("div",{className:"max-w-(--content-max-w) mx-auto h-full px-5 flex items-center justify-between gap-4",children:[x.jsx(ui,{to:"/",className:"tracking-[0.08em] uppercase text-[13px] font-medium text-fg-muted hover:text-(--accent) transition-colors duration-300 cursor-pointer",children:"Frontend · UX"}),x.jsxs("nav",{className:"hidden md:flex items-center gap-1 text-[13px]",children:[m.map(({id:v,label:w})=>x.jsx("button",{className:`${y} ${b}`,onClick:()=>h(v),children:w},v)),x.jsx("span",{className:"text-fg-muted/40 mx-1",children:"·"}),x.jsx(ui,{to:"/blog",className:`${y} ${a.pathname==="/blog"?g:b}`,children:"Blog"})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("button",{className:`md:hidden w-9 h-9 rounded-lg border border-(--border-subtle) bg-(--bg-elevated)\r
                         flex items-center justify-center cursor-pointer\r
                         transition-all duration-300 ease-out\r
                         hover:bg-(--bg-soft) hover:border-(--border-hover)`,"aria-label":"Toggle menu",onClick:()=>f(!u),children:u?x.jsx(pA,{}):x.jsx(mA,{})}),x.jsx("button",{className:`w-9 h-9 rounded-lg border border-(--border-subtle) bg-(--bg-elevated)\r
                         flex items-center justify-center cursor-pointer\r
                         transition-all duration-300 ease-out\r
                         hover:bg-(--bg-soft) hover:border-(--border-hover)`,"aria-label":"Toggle theme",onClick:n,children:e==="dark"?x.jsx(dA,{}):x.jsx(hA,{})}),x.jsx(ui,{to:"/contact",className:`hidden sm:inline-flex text-[13px] px-4 py-2 rounded-lg border
                         transition-all duration-300 ease-out
                         ${a.pathname==="/contact"?"text-(--accent) border-(--accent-border) bg-(--accent-subtle)":"text-fg-muted border-(--border-subtle) bg-(--bg-elevated) hover:bg-(--bg-soft) hover:border-(--border-hover)"}`,children:"Contact"})]})]})}),u&&x.jsx("div",{className:"md:hidden fixed inset-0 bg-black/50 z-9998",onClick:()=>f(!1)}),x.jsx("div",{className:["md:hidden fixed top-0 right-0 bottom-0 w-[280px] z-9999","bg-(--bg-elevated)","border-l border-(--border-subtle)","transition-transform duration-300 ease-out",u?"translate-x-0":"translate-x-full"].join(" "),children:x.jsxs("nav",{className:"flex flex-col p-6 pt-[calc(var(--header-height)+16px)] gap-1",children:[m.map(({id:v,label:w})=>x.jsx("button",{className:`px-4 py-3 rounded-lg text-[14px] text-fg-muted border border-transparent text-left\r
                         transition-all duration-200 ease-out\r
                         hover:bg-(--bg-soft) hover:text-fg`,onClick:()=>h(v),children:w},v)),x.jsx("div",{className:"my-2 border-t border-(--border-subtle)"}),x.jsx(ui,{to:"/blog",className:["px-4 py-3 rounded-lg text-[14px] border border-transparent","transition-all duration-200 ease-out","hover:bg-(--bg-soft)",a.pathname==="/blog"?"text-fg bg-(--bg-soft)":"text-fg-muted"].join(" "),onClick:()=>f(!1),children:"Blog"}),x.jsx("div",{className:"mt-4 pt-4 border-t border-(--border-subtle)",children:x.jsx(ui,{to:"/contact",className:`block w-full text-center text-[14px] px-4 py-3 rounded-lg border border-(--border-subtle)\r
                         bg-(--bg-soft) hover:border-(--border-hover)\r
                         transition-all duration-200 ease-out text-fg`,onClick:()=>f(!1),children:"Contact"})})]})})]})},dA=()=>x.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{fill:"currentColor",d:"M12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4 13H3a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2Zm17 0h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2ZM6.34 6.34a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41l-.7.7Zm12.02 12.02a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7ZM6.34 17.66l-.7.7a1 1 0 1 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41Zm12.02-12.02-.7.7a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"})}),hA=()=>x.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:x.jsx("path",{d:"M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",fill:"currentColor"})}),mA=()=>x.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),pA=()=>x.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),gA=()=>{const e=new Date().getFullYear();return x.jsxs("footer",{className:"max-w-(--content-max-w) mx-auto px-5 pb-8 pt-6 border-t border-(--border-subtle) flex flex-col gap-3 text-[12px] text-fg-dimmed sm:flex-row sm:justify-between sm:items-center",children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsxs("span",{children:["© ",e," Kwon-KyoungMin All rights reserved."]}),x.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-(--accent-border) bg-(--accent-subtle) text-[11px] text-(--accent) font-medium",children:[x.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-(--accent) animate-pulse"}),"Open to Work"]})]}),x.jsx("span",{children:"Built with React · TypeScript · Tailwind CSS"})]})},yA=()=>{const{pathname:e}=or();return M.useEffect(()=>{window.scrollTo(0,0)},[e]),null},xA="text-[12px] uppercase tracking-[0.12em] text-(--accent) font-medium mb-2",Qf=({title:e,value:n})=>x.jsxs("div",{className:`rounded-xl p-3 bg-(--bg-soft) border border-(--border-subtle)\r
      transition-all duration-300 hover:border-(--border-hover)`,children:[x.jsx("div",{className:"text-[11px] text-fg-dimmed mb-1",children:e}),x.jsx("div",{className:"text-[13px] font-medium text-fg",children:n})]}),bA=({onScrollTo:e})=>x.jsxs("section",{id:"top",className:"grid gap-10 mb-20 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] items-start",children:[x.jsxs("div",{className:"pt-2",children:[x.jsx("p",{className:xA,children:"Identity Profile"}),x.jsxs("h1",{className:"text-[clamp(28px,4vw,36px)] font-bold leading-tight mb-4 tracking-tight",children:["안전한 혁신을 설계하는",x.jsx("br",{}),"프론트엔드 엔지니어,"," ",x.jsx("span",{className:"text-(--accent)",children:"권경민"}),"입니다."]}),x.jsxs("p",{className:"text-[15px] text-fg-muted leading-[1.75] max-w-[520px] mb-8",children:[x.jsx("strong",{className:"text-fg font-semibold",children:"3년간"})," 실시간 데이터 시각화 (",x.jsx("strong",{className:"text-fg font-semibold",children:"80K logs/sec"}),")와 대규모 레거시 리팩터링을 경험했습니다.",x.jsx("br",{}),"사이버보안 전공의"," ",x.jsx("strong",{className:"text-fg font-semibold",children:"비판적 사고"}),"로, 견고하면서도 사용자 중심의 인터페이스를 만듭니다."]}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:["Safety First","Risk Management","Team Ownership","Frontend Core"].map(n=>x.jsx("span",{className:`text-[11px] px-3 py-1.5 rounded-full\r
                border border-(--border-subtle) text-fg-muted bg-(--bg-soft)\r
                transition-colors duration-300\r
                hover:border-(--border-hover) hover:text-fg`,children:n},n))}),x.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[x.jsx("button",{className:`text-[13px] px-5 py-2.5 rounded-lg\r
                       bg-(--accent) text-white font-semibold\r
                       hover:bg-(--accent-hover)\r
                       transition-all duration-300 ease-out\r
                       cursor-pointer`,onClick:()=>e("skills"),children:"경력 바로가기"}),x.jsxs("a",{href:"/portfolio/resume.pdf",target:"_blank",rel:"noreferrer",className:`group inline-flex items-center gap-1.5 text-[13px] px-4 py-2.5 rounded-lg\r
                       border border-(--border-subtle) bg-(--bg-elevated)\r
                       text-fg-muted font-medium\r
                       hover:border-(--accent)/40 hover:text-fg\r
                       transition-all duration-300 ease-out`,children:[x.jsxs("svg",{className:"w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 4v12m0 0l-4-4m4 4l4-4"}),x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})]}),"이력서 (PDF)"]}),x.jsxs("button",{className:`inline-flex items-center gap-1.5 text-[13px] text-fg-muted\r
                       hover:text-(--accent) transition-colors duration-300 ease-out cursor-pointer`,onClick:()=>e("about"),children:[x.jsx("span",{children:"소개 더 보기"}),x.jsx("span",{className:"text-[14px] translate-y-px",children:"↳"})]})]})]}),x.jsxs("aside",{className:`rounded-2xl border border-(--border-subtle)\r
                   bg-(--bg-elevated)\r
                   flex flex-col gap-4 text-[13px] p-5\r
                   transition-all duration-300\r
                   hover:border-(--border-hover)\r
                   [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]`,children:[x.jsxs("div",{className:"flex items-center justify-between gap-3",children:[x.jsxs("div",{children:[x.jsx("div",{className:"text-[17px] font-bold tracking-tight font-display",children:"Kwon Kyung-Min"}),x.jsx("div",{className:"text-[12px] text-fg-muted mt-0.5",children:"Frontend Engineer · Security Researcher"})]}),x.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-(--accent-border) text-[11px] uppercase tracking-widest",children:[x.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-(--accent) animate-pulse"}),x.jsx("span",{className:"text-(--accent) font-medium",children:"Building"})]})]}),x.jsxs("div",{className:"flex flex-col gap-2.5",children:[x.jsx(Qf,{title:"Focus",value:"실시간 데이터 시각화, UI 아키텍처"}),x.jsx(Qf,{title:"Strength",value:"비판적 사고, 리스크 관리"}),x.jsx(Qf,{title:"Based in",value:"Seongnam, KR (KST)"})]}),x.jsx("p",{className:"text-[12px] text-fg-dimmed mt-1 leading-relaxed",children:"최근에는 차량 데이터 시각화 성능 개선, Web Worker를 활용한 렌더링 최적화, 그리고 팀의 심리적 안전지대를 만드는 일에 집중하고 있습니다."})]})]}),Fl="rounded-[16px] border border-(--border-subtle) bg-(--bg-elevated) p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-(--accent-border) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)] [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",va="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-8",Sa="text-[12px] uppercase tracking-[0.12em] text-(--accent) font-medium mb-1",wa="text-[22px] font-bold tracking-tight text-fg",mu="text-[14px] text-fg-muted leading-relaxed",ts="text-[11px] px-2.5 py-1 rounded-full border border-(--accent-border) text-(--accent) bg-(--accent-subtle)",Bd="text-[11px] px-2.5 py-1 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted transition-colors duration-200 hover:border-(--border-hover)",vA=e=>`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 border cursor-pointer ${e?"bg-(--accent-subtle) text-(--accent) border-(--accent-border)":"text-fg-muted border-transparent hover:text-fg hover:bg-(--bg-soft)"}`,SA=()=>x.jsxs("section",{id:"about",className:"mb-20",children:[x.jsxs("div",{className:va,children:[x.jsxs("div",{children:[x.jsx("p",{className:Sa,children:"About"}),x.jsx("h2",{className:wa,children:"개발자로서의 가치관"})]}),x.jsx("p",{className:mu,children:"최고의 성과를 지향하되, 최악의 상황을 먼저 대비하는 '안전한 혁신'을 추구합니다."})]}),x.jsxs("div",{className:"grid gap-5 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]",children:[x.jsxs("div",{className:Fl,children:[x.jsx("div",{className:"flex items-center justify-between gap-2 mb-3",children:x.jsx("h3",{className:"text-[16px] font-bold",children:"안전한 혁신 (Safe Innovation)"})}),x.jsxs("div",{className:"text-[14px] text-fg-muted leading-[1.75]",children:[x.jsxs("p",{children:["새로운 기술로 사람들에게 가치를 주는 것을 좋아하지만, 그 과정에서",x.jsx("strong",{className:"text-fg",children:' "기술이 미칠 영향"'}),"을 한번 더 고려합니다.",x.jsx("br",{}),x.jsx("br",{}),"보안을 전공하며 익힌 ",x.jsx("strong",{className:"text-fg",children:"Risk Management"})," 사고방식을 개발에 적용하여, 화려한 기능 이전에 발생할 수 있는 최악의 시나리오를 먼저 방어합니다."]}),x.jsxs("ul",{className:"mt-4 pl-4 list-disc space-y-2.5 text-fg-muted",children:[x.jsxs("li",{children:["사용자 피해 방지를 최우선으로 하는 설계",x.jsx("span",{className:"block text-[12px] text-fg-dimmed mt-0.5",children:"→ CCU2 Log Monitor에서 메모리 누수 방어 로직을 먼저 설계한 후 기능 개발 착수"})]}),x.jsxs("li",{children:["통제 가능한 리스크 안에서의 과감한 기술 도전",x.jsx("span",{className:"block text-[12px] text-fg-dimmed mt-0.5",children:"→ VTDM 레거시 리팩터링 시 DDD 도입으로 의존성을 단계적으로 분리"})]}),x.jsxs("li",{children:["보안적/비판적 사고를 통한 견고한 아키텍처 구축",x.jsx("span",{className:"block text-[12px] text-fg-dimmed mt-0.5",children:"→ RSA/AES 하이브리드 암호화 메신저에서 Wireshark로 평문 노출 0건 검증"})]})]})]})]}),x.jsxs("div",{className:Fl,children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[x.jsx("h3",{className:"text-[16px] font-bold",children:"일하는 태도"}),x.jsx("span",{className:ts,children:"Mindset"})]}),x.jsxs("div",{className:"text-[14px] text-fg-muted leading-[1.75]",children:[x.jsxs("p",{className:"mb-2",children:[x.jsx("strong",{className:"text-fg",children:'"팀의 심리적 안전지대"'}),"가 되고자 합니다."]}),x.jsxs("ul",{className:"mt-1.5 pl-4 list-disc space-y-2.5",children:[x.jsx("li",{children:"'나'보다 '우리(Team)'의 이익을 먼저 고려"}),x.jsxs("li",{children:["문제 발생시 즉각적인 원인 분석 및 해결책 탐색",x.jsx("span",{className:"block text-[12px] text-fg-dimmed mt-0.5",children:"→ DLT 로그 분석 도구에서 1M 로그 검색 병목을 Web Worker로 2초 내 해결"})]}),x.jsxs("li",{children:["끝까지 파고드는 집요함",x.jsx("span",{className:"block text-[12px] text-fg-dimmed mt-0.5",children:"→ 80K logs/sec 환경에서 Log Consistency 이슈를 끝까지 추적해 Race Condition 해결"})]}),x.jsx("li",{children:"동료가 안심하고 등을 맡길 수 있는 신뢰 구축"})]})]})]})]})]}),wA={core:"text-[11px] px-2.5 py-1 rounded-full font-medium bg-(--accent-subtle) border border-(--accent-border) text-(--accent)",experienced:"text-[11px] px-2.5 py-1 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg transition-colors duration-200 hover:border-(--border-hover)",familiar:"text-[11px] px-2.5 py-1 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted transition-colors duration-200 hover:border-(--border-hover)"},Do=({title:e,chipLabel:n,skills:i})=>x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-bold",children:e}),n?x.jsx("span",{className:ts,children:n}):x.jsx(x.Fragment,{})]}),x.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:i.map(a=>x.jsx("span",{className:wA[a.level],children:a.name},a.name))})]}),_x=()=>{const e=[{title:"Frontend Core",skills:[{name:"React.js",level:"core"},{name:"TypeScript",level:"core"},{name:"TailwindCSS",level:"core"},{name:"Zustand",level:"core"},{name:"Next.js",level:"experienced"},{name:"Electron",level:"experienced"},{name:"Node.js",level:"experienced"},{name:"Redux",level:"experienced"},{name:"ZeroMQ",level:"familiar"}]},{title:"Architecture & Perf",skills:[{name:"Web Worker",level:"core"},{name:"Rendering Optimization",level:"core"},{name:"Domain-Driven Design",level:"experienced"},{name:"Event Bus / IPC",level:"experienced"},{name:"Memory Management",level:"experienced"}]},{title:"Security & Infra",skills:[{name:"Cyber Security",level:"experienced"},{name:"Network Forensics",level:"experienced"},{name:"Linux / Shell",level:"experienced"},{name:"GitLab / CI",level:"experienced"},{name:"Docker",level:"familiar"}]},{title:"AI & Mobile",skills:[{name:"Python",level:"experienced"},{name:"Flutter",level:"familiar"},{name:"TensorFlow",level:"familiar"},{name:"Firebase",level:"familiar"},{name:"OpenCV",level:"familiar"}]}];return x.jsxs("div",{className:"space-y-3",children:[x.jsxs("div",{className:"flex items-center gap-3 mb-1 text-[11px] text-fg-muted",children:[x.jsxs("span",{className:"flex items-center gap-1.5",children:[x.jsx("span",{className:"w-2 h-2 rounded-full bg-(--accent)"}),"Core"]}),x.jsxs("span",{className:"flex items-center gap-1.5",children:[x.jsx("span",{className:"w-2 h-2 rounded-full bg-fg"}),"Experienced"]}),x.jsxs("span",{className:"flex items-center gap-1.5",children:[x.jsx("span",{className:"w-2 h-2 rounded-full bg-fg-muted"}),"Familiar"]})]}),x.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[x.jsx(Do,{...e[0]}),x.jsx(Do,{...e[1]})]}),x.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[x.jsx(Do,{...e[2]}),x.jsx(Do,{...e[3]})]})]})},Lx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfElEQVR4Ae2WA8wcQRiG39q2tTszu7XtNnYd1XZ7OzN7eyqDmmF/1jbipI7rhrVt97r/7SW/j81F9yTPYflh99tFmjQlQuc1BRHTQeU2EFdW0jKRCZUfg8LXQTEbICK62RtM7AGxnoLJIDQreXWf8626MqAHqqNUyNL6YOYu6N7wTu4gmJmcmtvWY//mJ+1vFRFhxgwQ/jZ0ciacA+QF0z6QuB1WBaEY10F5D0SFuvYVyprwH6DmVTCZCSpzEjAXzGvva45GTKjGcWiecOnszKl5CcQ9HEMCldHJVQ36nOrxafe79aTKiBliHA0H4FwD1NgOZX4lpAzFOALNKhAA3+ZkkCrse7VQAEweBOVNkTKYPA7dk3/7MPnCNoAOXAPlFMpSPW7belRn+MQCkVvA+B+nCjKs+A3NeA3KH4KJx3GpiidoJ+6CmRnQ+Eh0n1E12hQcCCJuQvcHoeUPkmR0jmH+AZH3ofE5iMyYcmBiGah4V/xgVgK685PQA0FQfglsCUFElEBNqMYEEPMEiHgGJj+CiQ/xab4HNb6A8L/hVjrjmPBPoNJCdPaXA7GagXk7Qrd6xW17b0+0W9odxPCBySdOJWw1aWvkImW0DtQGMbPQ3h8OIDTedyOlELka7QP51wOROSkOwJ0XQH4FqExhC4gYAMYvQPfmB6BFagGTk0DMzaB8Axhfl7jGWmhyPYi8HBpsTDoBMPEX1JWBUqHiHNqvDEL323qT0Oe8jIQyN22l85uYb6CKmRECMI47O1m27iQ189U9TlCaPBr54UZdp5wNPbbW/9EJ5gM0cTr0chMRKhZCWboXjO8E5TnJGho6RGSCCTdUrqEE0qT5B6CGc+DEAtyrAAAAAElFTkSuQmCC",TA=[{id:"career-2",company:"SURESOFTTECH",companyLogo:Lx,position:"AI Simulation Engineer",department:"임베디드 기술 연구소 / 지능형 데이터팀",period:"2026.01 - 현재",transition:"프론트엔드에서 쌓은 실시간 데이터 처리·시각화 역량을 자율주행 시뮬레이션 도메인으로 확장",projects:[{name:"자율주행 궤적 예측 모델(Alpamayo) 시뮬레이션 연동 및 성능 평가 시스템 구축",period:"2026.01 - 현재",role:"AI 시뮬레이션 연동 / 성능 평가",impact:"CARLA 시뮬레이터 × AI 모델 실시간 연동 — 궤적 추론 0.8초 이내, 프레임 드랍 없는 시각화 달성",description:"자율주행 궤적 예측 모델(Alpamayo)을 CARLA 시뮬레이터에 연동하고, 추론 결과를 실시간 검증·시각화하는 평가 환경을 구축. 기존 오프라인 검증 방식을 시뮬레이션 루프 내 실시간 검증으로 전환하여 모델 평가 사이클을 단축.",tasks:["CARLA 소스 커스터마이징으로 시뮬레이터-AI 모델 간 실시간 양방향 데이터 통신 아키텍처 설계","동기/비동기 추론 파이프라인 설계 및 차량 Tick 기반 추론 제어 로직 구현","Point-wise 궤적 정확도 검증 모듈 및 실시간 모니터링 UI 개발","Hugging Face·Waymo Open Dataset 기반 Alpamayo-r1 모델 성능 지표 도출 및 오류 데이터 필터링"],achievements:["추론 지연 0.8초 이내 달성 — 오프라인 대비 모델 평가 피드백 루프 대폭 단축","다중 궤적 데이터를 프레임 드랍 없이 실시간 렌더링하는 모니터링 환경 구축","Waymo 데이터셋 기반 오류 데이터 자동 필터링 파이프라인 구현으로 데이터 검증 공수 절감"],techStack:{languages:["Python","C++"],libs:["CARLA","PyTorch","Hugging Face","NumPy","Pandas"],patterns:["동기/비동기 추론 파이프라인","시뮬레이터-모델 양방향 통신","Point-wise 검증"]}}]},{id:"career-1",company:"SURESOFTTECH",companyLogo:Lx,position:"Frontend Developer",department:"임베디드 기술 연구소 / 차량솔루션 1팀",period:"2023.03 - 2025.12",projects:[{name:"차량 통합 제어기(CCU2) Log Monitor & Analyzer",period:"2024.07 - 2025.06",role:"Frontend Lead / 아키텍처 설계",impact:"초당 8만 건 로그 무중단 처리 — 현업 엔지니어 분석 시간 5분→30초, 고객사 납품 일정 단축에 기여",description:"DLT/CAN/DoIP/SOMEIP 대용량 로그를 실시간 수집·분석하는 Electron 기반 분석 플랫폼. 기존 DLT-Viewer의 한계를 대체하여 비전문가도 직관적으로 분석 가능한 UX 구현.",tasks:["웹 뷰어 → Electron 데스크톱 앱 전환 설계 및 ZeroMQ/IPC 기반 비동기 수집 파이프라인 구축","가상 스크롤 + gridBufferDataObj 기반 탐색 최적화로 수십만 건 탐색 시 0.2초 미만 응답","Zustand 기반 전역 상태 + Custom Store 설계로 실시간 데이터 동기화 안정화","비개발 직군(차량 평가 엔지니어) 대상 UX 피드백 수렴 및 분석 워크플로우 재설계"],achievements:["렌더링 성능 2.3배 향상(1.04s→450ms), 메모리 30% 절감(3.3GB→2.0GB)","로그 분석 시간 5분→30초로 단축 — 엔지니어 일일 분석 처리량 증가에 기여","초당 80,000건 이상 로그를 UI Freezing 없이 실시간 시각화","차트 렌더링 Aggregation 적용으로 3.2s→0.48s(85% 개선)","테스트 코드 및 스크립트 모듈화 도입으로 기능 추가 시 장애 발생률 대폭 감소"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["ZeroMQ","DevExtreme","Zustand","TailwindCSS"],patterns:["이벤트 버스(useEventOn)","CustomStore","무한 스크롤 버퍼링"]}},{name:"사용자 정의 필터링 기반 DLT 로그 분석 툴",period:"2025.07 - 2025.09",role:"Frontend Lead / 성능 최적화",impact:"100만 건 로그 2초 이내 탐색 — 반복 분석 워크플로우 30~40% 단축",description:"수백만 건 DLT/CSV 로그를 사용자 맞춤 UI·필터링으로 분석하는 Electron 기반 툴. 반복 작업 자동화와 사용자 중심 레이아웃으로 현업 분석가의 실사용성에 집중.",tasks:["DevExtreme DataGrid 가상 스크롤 고도화 및 Stream API 기반 대용량 Export 파이프라인 구축","rc-dock 기반 도킹 레이아웃(패널 배치 저장·복원) 및 IPC 외부 뷰어 연동 자동화","정규식 호환성·UI 렌더링 이슈 등 반복 문제 트러블슈팅 플레이북 문서화"],achievements:["100만 건 이상 로그 로딩·탐색 평균 응답 속도 2초 이내 달성","Stream API 도입으로 대용량 CSV Export 시 메모리 사용량 60% 절감","100만 행 데이터 3초 이내 파일 변환·저장 고속 Export 구현","맞춤형 레이아웃 + 외부 뷰어 자동화로 반복 작업 제거, 워크플로우 30~40% 단축"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["rc-dock","DevExtreme DataGrid","Recharts"],patterns:["IPC 통신","가상 스크롤(Virtual Scrolling)","스트리밍 데이터 처리"]}},{name:"차량제어 시험산출물 관리 시스템 고도화(VTDM)",period:"2025.09 - 2025.12",role:"Frontend / 아키텍처 개선",impact:"레거시 코드베이스 30% 경량화 — 리렌더링 80% 감소, 프레임 드랍 0% 달성",description:"차량 테스트/평가 산출물 클라우드 통합 관리 SaaS 플랫폼의 레거시 기술 부채 해소 및 구조적 리팩토링. 단순 기능 추가가 아닌 장기 운영을 고려한 아키텍처 개선에 집중.",tasks:["DDD 기반 아키텍처 재편 및 공통 로직 커스텀 훅 추상화로 유지보수성 강화","무한 스크롤 DOM 연산을 Web Worker로 분리하여 메인 스레드 블로킹 제거","Global → Local State 전환 및 AgGrid/AgChart 커스터마이징으로 대시보드 구현"],achievements:["DDD + 모듈화로 전체 코드베이스(LOC) 30% 절감","컴포넌트 의존성 최적화로 리렌더링 80% 감소(5회→1회)","Web Worker 연산 분산으로 대용량 리스트 스크롤 시 프레임 드랍 0% 달성","Global State 의존도 축소로 사이드 이펙트성 버그 발생 위험 최소화"],techStack:{languages:["React(TypeScript)","Node.js"],libs:["AgGrid","AgChart"],patterns:["Domain-Driven Design(DDD)","Web Worker","Custom Hooks","Docker","Spring Boot 협업"]}}]}],Zf="text-[11px] px-2.5 py-1 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted transition-colors duration-200 hover:border-(--border-hover)",CA=({techStack:e})=>x.jsxs("div",{className:"space-y-2",children:[x.jsx("div",{className:"text-[12px] font-semibold",children:"기술 스택"}),x.jsxs("div",{className:"space-y-1.5",children:[e.languages&&e.languages.length>0&&x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"언어/프레임워크"}),x.jsx("div",{className:"flex flex-wrap gap-1",children:e.languages.map(n=>x.jsx("span",{className:Zf,children:n},n))})]}),e.libs&&e.libs.length>0&&x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"라이브러리"}),x.jsx("div",{className:"flex flex-wrap gap-1",children:e.libs.map(n=>x.jsx("span",{className:Zf,children:n},n))})]}),e.patterns&&e.patterns.length>0&&x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"패턴/기법"}),x.jsx("div",{className:"flex flex-wrap gap-1",children:e.patterns.map(n=>x.jsx("span",{className:Zf,children:n},n))})]})]})]}),h1=({open:e,children:n,durationMs:i=360})=>x.jsx("div",{className:["grid overflow-hidden transition-[grid-template-rows]","ease-[cubic-bezier(.2,.8,.2,1)]",e?"grid-rows-[1fr]":"grid-rows-[0fr]"].join(" "),style:{transitionDuration:`${i}ms`},children:x.jsx("div",{className:"min-h-0 overflow-hidden",children:x.jsx("div",{className:["transition-[opacity,transform] ease-[cubic-bezier(.2,.8,.2,1)]","will-change-[opacity,transform]",e?"opacity-100 translate-y-0":"opacity-0 -translate-y-1"].join(" "),style:{transitionDuration:`${Math.max(220,i-80)}ms`},children:n})})}),AA=({text:e})=>{const n=/(\d[\d,.]*\s*(?:배|%|ms|s|초|분|건|GB|MB|회|개|행)?)(\s*→\s*\d[\d,.]*\s*(?:배|%|ms|s|초|분|건|GB|MB|회|개|행)?)?/g,i=[];let a=0,s;for(;(s=n.exec(e))!==null;)s.index>a&&i.push({text:e.slice(a,s.index),isMetric:!1}),i.push({text:s[0],isMetric:!0}),a=s.index+s[0].length;return a<e.length&&i.push({text:e.slice(a),isMetric:!1}),i.length===0?x.jsx(x.Fragment,{children:e}):x.jsx(x.Fragment,{children:i.map((c,u)=>c.isMetric?x.jsx("span",{className:"font-semibold text-[var(--accent)]",children:c.text},u):x.jsx("span",{children:c.text},u))})},m1=({expanded:e,className:n="w-4 h-4"})=>x.jsx("svg",{className:[n,"shrink-0 text-fg-muted transition-transform duration-200",e?"rotate-180":""].join(" "),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),kA=({project:e})=>{const[n,i]=M.useState(!1);return x.jsxs("article",{className:["rounded-2xl border bg-[var(--bg-soft)] px-4 py-3","transition-colors duration-200",n?"border-gray-400":"border-[var(--border-subtle)]","hover:border-[var(--accent)]/50"].join(" "),children:[x.jsxs("button",{type:"button","aria-expanded":n,onClick:()=>i(a=>!a),className:"w-full text-left cursor-pointer",children:[x.jsxs("div",{className:"flex items-center justify-between gap-3",children:[x.jsxs("div",{className:"min-w-0 flex-1",children:[x.jsx("h4",{className:"text-[15px] font-semibold leading-snug",children:e.name}),x.jsxs("div",{className:"mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5",children:[x.jsx("span",{className:"text-[12px] text-fg-muted",children:e.role}),x.jsx("span",{className:"text-[11px] text-fg-muted opacity-50",children:"|"}),x.jsx("span",{className:"text-[11px] text-fg-muted",children:e.period})]})]}),x.jsx(m1,{expanded:n})]}),e.impact&&x.jsxs("div",{className:["mt-2 flex items-start gap-2 rounded-lg px-3 py-2","bg-[var(--accent)]/[0.06] border border-[var(--accent)]/15"].join(" "),children:[x.jsx("svg",{className:"w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--accent)]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),x.jsx("span",{className:"text-[12px] leading-relaxed font-medium text-[var(--fg-default)]",children:e.impact})]})]}),x.jsx(h1,{open:n,durationMs:360,children:x.jsxs("div",{className:"mt-3",children:[e.description&&x.jsx("p",{className:"text-[12.5px] leading-relaxed text-fg-muted",children:e.description}),x.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),x.jsx("div",{className:"text-[12px] font-semibold mb-2 text-fg-muted",children:"주요 업무"}),x.jsx("ul",{className:"space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted",children:e.tasks.map((a,s)=>x.jsxs("li",{className:"flex gap-2",children:[x.jsx("span",{className:"mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-muted)]/40"}),x.jsx("span",{className:"min-w-0",children:a})]},s))}),e.achievements?.length?x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),x.jsxs("div",{className:"rounded-xl bg-[var(--accent)]/[0.06] border border-[var(--accent)]/20 p-3",children:[x.jsxs("div",{className:"flex items-center gap-1.5 mb-2.5",children:[x.jsx("svg",{className:"w-3.5 h-3.5 text-[var(--accent)]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),x.jsx("span",{className:"text-[12px] font-semibold text-[var(--accent)]",children:"성과"})]}),x.jsx("ul",{className:"space-y-2 text-[12.5px] leading-relaxed",children:e.achievements.map((a,s)=>x.jsxs("li",{className:"flex gap-2",children:[x.jsx("span",{className:"mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"}),x.jsx("span",{className:"min-w-0 text-[var(--fg-default)]",children:x.jsx(AA,{text:a})})]},s))})]})]}):null,e.techStack?x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),x.jsx(CA,{techStack:e.techStack})]}):null]})})]})},EA=({career:e})=>{const[n,i]=M.useState(!0);return x.jsxs("section",{className:"pb-8 last:pb-0",children:[x.jsx("header",{children:x.jsxs("button",{type:"button","aria-expanded":n,onClick:()=>i(a=>!a),className:["w-full rounded-2xl border bg-[var(--bg-elevated)]","px-4 py-3 transition-colors duration-200 cursor-pointer",n?"border-gray-400":"border-[var(--border-subtle)]","hover:border-[var(--accent)]/50"].join(" "),children:[x.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[x.jsxs("div",{className:"flex items-center gap-2.5",children:[e.companyLogo?x.jsx("img",{src:e.companyLogo,alt:`${e.company} logo`,className:"w-9 h-9 shrink-0 object-contain rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] p-1",loading:"lazy"}):x.jsx("div",{className:"w-9 h-9 shrink-0 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)]"}),x.jsxs("div",{className:"min-w-0 text-left",children:[x.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-2 gap-y-1",children:[x.jsx("h3",{className:"text-[16px] font-bold leading-tight truncate",children:e.company}),x.jsx("span",{className:"hidden sm:inline text-[12px] text-fg-muted",children:e.position})]}),e.department&&x.jsx("div",{className:"text-[11px] text-fg-muted mt-0.5",children:e.department})]})]}),x.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[x.jsx("div",{className:"text-[12px] text-fg-muted uppercase tracking-wide",children:e.period}),x.jsx(m1,{expanded:n,className:"w-5 h-5"})]})]}),e.transition&&x.jsx("div",{className:"mt-2.5 flex items-center gap-2 text-left",children:x.jsxs("div",{className:["inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5","bg-[var(--accent)]/[0.08] border border-[var(--accent)]/20"].join(" "),children:[x.jsx("svg",{className:"w-3 h-3 text-[var(--accent)] shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})}),x.jsx("span",{className:"text-[11px] font-medium text-[var(--accent)]",children:e.transition})]})})]})}),x.jsx(h1,{open:n,durationMs:420,children:x.jsx("div",{className:"space-y-4 mt-5 ml-2.5",children:e.projects.map((a,s)=>x.jsx(kA,{project:a,index:s},s))})})]})},jA=()=>x.jsx("div",{className:"space-y-0",children:TA.map(e=>x.jsx(EA,{career:e},e.id))}),MA=[{id:"pkg-1",name:"@broadcast-event-system",description:"“React 애플리케이션을 위한 타입 안전(Type-safe) 이벤트 버스 및 브로드캐스트 서비스입니다. React 훅을 사용할 때만 React가 필요하고, 그 외에는 의존성이 전혀 없는 순수 TypeScript(Zero dependencies)입니다.”",version:"1.0.3",githubUrl:"https://github.com/km-kwon/broadcast-event-system",npmUrl:"https://www.npmjs.com/package/broadcast-event-system",techStack:["React","TypeScript","event-driven","web-broadcast"]},{id:"pkg-2",name:"@circular-queue-react",description:"TypeScript와 React를 위한 고성능 원형 버퍼/큐입니다. 의존성은 없고(React는 선택 사항), 로그 처리, 스트리밍 데이터, 롤링 윈도우, 실시간 UI 업데이트에 좋습니다.",version:"1.0.2",githubUrl:"https://github.com/km-kwon/react-circular-queue",npmUrl:"https://www.npmjs.com/package/circular-queue-react",techStack:["React","TypeScript","Data Structure"]}],DA=()=>x.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:x.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),NA=()=>x.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"currentColor",children:x.jsx("path",{d:"M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"})}),RA=({pkg:e})=>x.jsxs("div",{className:"bg-(--bg-soft) rounded-lg p-4 border border-(--border-subtle) hover:border-(--border-hover) transition-colors",children:[x.jsxs("div",{className:"mb-3 w-full ",children:[x.jsxs("div",{className:"w-full flex justify-between items-center",children:[x.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-bold font-mono",children:e.name}),x.jsxs("span",{className:ts,children:["v",e.version]}),e.downloads&&x.jsxs("span",{className:"text-[11px] text-fg-muted",children:["📦 ",e.downloads]})]}),x.jsxs("div",{className:"flex gap-3 text-[12px]",children:[e.githubUrl&&x.jsxs("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex gap-1.5 text-fg-muted hover:text-fg transition-colors",children:[x.jsx(DA,{}),x.jsx("span",{children:"GitHub"})]}),e.npmUrl&&x.jsxs("a",{href:e.npmUrl,target:"_blank",rel:"noopener noreferrer",className:"flex gap-1.5 text-fg-muted hover:text-fg transition-colors",children:[x.jsx(NA,{}),x.jsx("span",{children:"NPM"})]})]})]}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed",children:e.description})]}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.techStack.map(n=>x.jsx("span",{className:Bd,children:n},n))})]}),OA=()=>x.jsx("div",{className:"grid gap-3 md:grid-cols-1",children:MA.map(e=>x.jsx(RA,{pkg:e},e.id))}),_A=()=>{const[e,n]=M.useState("career"),i=[{key:"career",label:"경력"},{key:"opensource",label:"오픈소스"},{key:"stack",label:"기술 스택"}],a=()=>{switch(e){case"stack":return x.jsx(_x,{});case"career":return x.jsx(jA,{});case"opensource":return x.jsx(OA,{});default:return x.jsx(_x,{})}};return x.jsxs("section",{id:"skills",className:"mb-20",children:[x.jsxs("div",{className:va,children:[x.jsxs("div",{children:[x.jsx("p",{className:Sa,children:"Skills"}),x.jsx("h2",{className:wa,children:"경력 & 전문성"})]}),x.jsx("p",{className:mu,children:"안전하고 견고한 제품을 만들기 위해 사용하는 기술들입니다."})]}),x.jsx("div",{className:"flex gap-2.5 mb-6",children:i.map(s=>x.jsx("button",{onClick:()=>n(s.key),className:vA(e===s.key),children:s.label},s.key))}),x.jsx("div",{className:Fl,children:a()})]})},LA=`요즘 개발자들 사이에서 이런 말, 한 번쯤은 들어봤을 거다.\r
\r
> “코딩? 이젠 AI 쓰면 되지 않냐?”\r
>\r
> “유지보수도 이제 AI가 알아서 해줄 텐데…”\r
\r
겉으로 들으면 그럴싸하다.\r
\r
나도 ChatGPT, Copilot 같은 도구를 매일 쓰고 있고, 확실히 **“손으로 타이핑하는 일”** 은 줄어들고 있다.\r
\r
실제로 VTDM이라는 프로젝트의 개선/유지보수 작업을 혼자 맡았을 때도, 나는 AI를 꽤 공격적으로 활용했다.\r
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
반대로, **1~3번** 에 해당하는:\r
\r
- 도메인/문제 정의\r
- 아키텍처 설계\r
- 변경 영향 범위 판단\r
\r
이 부분은 여전히 **사람의** 역할이 중요하다.\r
\r
VTDM 작업 때 내가 느꼈던 이상한 감각도 여기서 왔다.\r
\r
- “코드 수정” 그 자체는 AI가 많이 대신해 주는데,\r
- 정작 **내가 감당해야 하는 이해 비용과 책임** 은 줄지 않는다.\r
- 오히려 _“AI가 바꿔놓은 코드까지 포함해서”_ 이해해야 할 범위가 늘어난다.\r
\r
> 개선은 계속 되는데,\r
>\r
> 내가 시스템 전체를 “제대로 이해하고 있다”는 느낌은 점점 안 든다.\r
>\r
> 이게 과연 건강한 성장일까?\r
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
> 단순히 AI에게 말을 예쁘게 하는것이 아니라,\r
>\r
> 문제를 제대로 정의하고, 제약을 설정하고, 설계 의도를 언어로 풀어낼 수 있다는 뜻이다.\r
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
즉, VTDM에서 느꼈던 그 기묘한 감각:\r
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
- 나중에는 AI에게 던져도 “뭐가 맞는지 내가 판단할 수 없는 상태”가 올 수 있다. (실제로 오기도 했다.)\r
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
반대로, 이런 것들은 여전히 **사람의 역할이** 가장 중요하다고 생각한다.\r
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
  - “이 변경이 왜 이렇게 설계되었는지”에 대한 **두세 줄 메모(주석)** 남기기\r
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
`,zA=`JS 공부하다 보면 어느 순간 이런 상태가 된다.\r
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
`,BA=`자바스크립트 이벤트 루프를 공부하다 보면 꼭 이런 혼란이 온다.\r
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
`,VA=`React에서 Zustand를 쓰다 보면 “상태는 분명 바뀌었는데 이벤트 핸들러가 옛날 값을 찍는다” 같은 현상을 한 번쯤 만나게 된다.\r
처음엔 **“zustand가 렌더 안 타나?”**, **“React가 업데이트 안 하나?”** 같은 느낌인데… 결국 원인은 React의 아주 고전적인 함정\r
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
### ✅ \`getState()\`가 특히 좋은 케이스\r
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
# 최종 요약\r
\r
- React의 \`useCallback([])\`은 콜백을 고정하며, 콜백 내부에서 참조하는 값은 “생성 시점 렌더 스코프”를 클로저로 캡처한다.\r
- 따라서 리렌더 이후 값이 바뀌어도 콜백은 과거 값을 참조하는 stale closure가 발생할 수 있다.\r
- 일반적인 해결은 의존성 배열에 값을 넣어 콜백을 재생성하는 것이다.\r
- Zustand에서는 \`getState()\`를 통해 store에서 최신 값을 직접 조회함으로써, 클로저 캡처 구조 자체를 제거할 수 있다.\r
- 결과적으로 콜백을 안정적으로 유지하면서도 최신 Zustand 상태를 사용할 수 있다.\r
`,PA=`## 0. 시작: “npm에 올렸는데… 뭔가 허전하다”\r
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
> 여기서 “happy-dom”을 설치한 이유는 뒤에서 나온다. (jsdom이 CI에서 나를 배신함)\r
\r
---\r
\r
### 1-2) vitest config\r
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
> “응… 근데 성공 케이스만 잔뜩 있네?, 실패 상정을 안했네..?”\r
\r
이때부터 **Coverage 기반 라인 추격 게임**이 시작되었다\r
\r
### 내가 했던 루프\r
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
**CI에서 \`npm publish\`는 ‘사람이 개입할 수 없는데’, NPM의 내 계정은 publish에 OTP(2FA)를 요구하고 있었던 것.**\r
\r
---\r
\r
## 6. EOTP가 왜 뜨는지?\r
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
## 7. 해결: CI에서는 “Automation(자동화)용 토큰”으로 간다\r
\r
### 7-1) npm 토큰을 “CI용”으로 발급\r
\r
- 사람이 OTP 치는 방식이 아니라 **CI에서 토큰으로 사용할 거니까**\r
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
## 8. docs-only 릴리즈: “문서만 바뀌었는데 배포는 하기 싫다”의 해결\r
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
그래서 나는 docs-only 릴리즈를 공식 프로세스로 만들었다.\r
\r
---\r
\r
### docs-only 릴리즈 커맨드\r
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
- 결론: CI에서 안정적으로 돌아가는 게 더 중요했다. (절대 아직도 원인 못찾은건 비밀)\r
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
### ✅ 그리고 제일 중요한 건\r
\r
이건 포트폴리오로도 “설득력”이 생기지 않을까..?\r
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
(그리고 난 DevOps 뉴비이기 떄문에 이게 제일 좋은것 같다. 왜냐? 편하니까!)\r
`,IA=`실차/로그 기반 모니터링 UI를 만들다 보면, 어느 순간부터 이런 문장이 몸에 새겨진다.\r
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
Trigger 메시지는 대략 다음과 같은 내용이 있다.\r
\r
- \`FilterType.Log\` → 이벤트 버스 emit (로그 리스트 등)\r
- \`FilterType.View\` → 여러 탭/뷰 스토어 업데이트\r
  - \`LATEST\`는 무조건 업데이트\r
  - \`CUR_PRINT\`는 “현재 보고 있는 탭인지” 조건부 업데이트\r
  - Sync 업데이트 중이면 \`isUpdatingFromSync\` 기준으로 무시\r
- \`FilterType.Chart\` → chart store 갱신 + 다른 chart window에 broadcast\r
\r
이 Trigger의 문제는 **메시지 양이 많고(초당 수백~수천), View 업데이트/Chart broadcast가 UI thread를 잡아먹으면 화면이 끊긴다**는 점이었다.\r
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
그럼에도 구조 자체는 단순했고, 그래서 더더욱 개발자의 입장에서 “최적화가 진짜 필요한지”가 궁금해졌다.\r
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
Wroker의 코드는 대략 이런 느낌:\r
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
이 괴리는 **확인하는 지표가 ‘무엇을 측정하는지’** 와 관련이 있었다.\r
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
1. datas가 커질 때만 time-slice 발동\r
2. 지표는 avg보다 **p95/p99 + worstFrame** 중심으로 본다\r
3. 최적화 대상은 분기 로직이 아니라 **handler 내부 핫스팟**\r
4. 필요하면 “전체 pipeline”이 아니라 “특정 핫스팟만” worker로 뺀다\r
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
그리고 이건 실패가 아니라, **제대로 된 결론** 이며 나의 삽질은 나중에 다른 문제를 위한 거름을 옮긴 과정이다.\r
`,UA=`# useState → useReducer → 도메인  분리 → Store 까지의 이야기

---

> 상태 라이브러리는 언제든 도입할 수 있다.
근데 “내 코드가 그때 덜 아프게 옮겨질 수 있는 구조인가?”는 완전히 다른 얘기다.
이번 리팩터링의 진짜 수확은 미래의 마이그레이션 레일을 깔아둔 것이었다.
> 

---

## 0. 시작: 중첩 상태를 useState로 건드리기 시작했을 때

필터 편집 상태는 아래처럼 **중첩된 구조**였다.

\`\`\`tsx
FilterItem = {
  isChecked: false,
  name: '',
  type: {
    filter: { value: false },
    marker: { value: false, color: '#ffffff' },
  },
  applicationId: { value: '', type: 'none' },
  contextId: { value: '', type: 'none' },
  payLoad: { value: '', type: 'none' },
};
\`\`\`

처음엔 \`useState\`로 갔다. 그런데 토글 하나만 구현해도 JSX가 금방 이렇게 된다.

\`\`\`tsx
<input
  onClick={() => {
    setTempSelectedItem({
      ...tempSelectedItem,
      type: {
        ...tempSelectedItem.type,
        marker: {
          ...tempSelectedItem.type.marker,
          value: !tempSelectedItem.type.marker.value,
        },
      },
    });
  }}
/>
\`\`\`

### 보기만 해도 복잡하며, UI가 하나의 로직처럼 보인다.

- JSX가 길어지고, UI 구조가 로직에 묻힘
- 중첩 스프레드가 복붙이 되면서 오타/누락 위험 급증
- 상태 변경 규칙이 각 컴포넌트/핸들러에 흩어져 추적 불가
- 테스트하려면 UI 이벤트부터 타야 해서 단위 테스트가 어려움

여기서 느낀 건 단순했다.

> 상태 변경 규칙을 UI에서 떼어내야 한다.
“어디서 어떻게 바뀌는가”를 한 곳에서 관리해야 한다.
> 

---

## 1. 전환 1: useReducer 도입 — “변경 규칙을 중앙화”

그래서 \`useReducer\`를 도입했다. 목적은 딱 하나.

> JSX는 dispatch만 한다.
변경 규칙은 reducer가 가진다.
> 

액션을 명세로 만들고 reducer에서만 상태를 바꾸게 했다.

\`\`\`tsx
const selectedItemReducer = (state: FilterItem[], action: EditAction): FilterItem[] => {
  switch (action.type) {
    case 'INIT': return ...
    case 'CHECK_ITEM': return ...
    case 'CHANGE_ITEM_NAME': return ...
    case 'TYPE_TOGGLE': return ...
    case 'CHANGE_EXTRA_INFO': return ...
    case 'ADD_ITEM': return ...
    case 'DELETE_ITEM': return ...
    default: return state
  }
};
\`\`\`

JSX는 이렇게 바뀌었다.

\`\`\`tsx
<input
  type="checkbox"
  checked={item.type.marker.value}
  onChange={() =>
    dispatch({ type: 'TYPE_TOGGLE', payload: { id: item.id, key: 'marker' } })
  }
/>
\`\`\`

### 이때부터

- UI가 다시 “UI”처럼 보이기 시작
- 액션이 명세가 되어 자동완성/오타 방지
- dispatch 로그/액션 기준 디버깅을 통해 상태 추적 용이
- 단위 테스트가 reducer 테스트로 간소화

---

## 2. 하지만: reducer가 거대한 switch가 되면 또 다른 지옥?

useReducer로 UI 직관성은 해결됐는데, 다음 불안이 왔다.

> “액션이 늘면 switch-case가 커진다.
이게 또 관리 지옥이 되지 않을까”
> 

그리고 이런 질문이 생겼다.

> reducer 로직을 외부 함수로 분리하면
JSX 핸들러 함수를 분리하는 거랑 뭐가 다르지?
> 

그렇기에 여기까지만 일단 작성했을 때 중요한 점은 진입 점이라는 것이다.

- JSX에서 함수로 빼면 로직이 다시 곳곳에 퍼질 수 있음 (분산 구조 유지)
- reducer에서 함수로 빼면 여전히 “상태 변경은 reducer를 통해서만” 발생 (집중 구조 유지)

즉, reducer의 switch는 “나쁜 것”이 아니라 정석이고
문제는 **응집도 없이 한 파일에 다 때려 넣는 것**이 진짜 문제임을 알게 되었다

---

## 3. 전환 2(핵심): 도메인 단위 reducer 분리 — “응집도 회복”

그래서 선택한 게 “도메인 분리”였다.

Filter 편집을 자세히 보면, 사실 하나의 덩어리가 아니라 도메인이 있다.

- **item CRUD**: 추가/삭제
- **item 기본 편집**: 체크, 이름 변경
- **type 도메인**: filter/marker 토글, marker color
- **extraInfo 도메인**: applicationId/contextId/payload value/type

파일 구조를 이렇게 가져갔다. 

\`\`\`
domain/filter/
  actions.ts
  reducer.ts                // top reducer: 액션 라우팅만
  reducers/
    itemCrud.ts
    itemEdit.ts
    type.ts
    extraInfo.ts
\`\`\`

top reducer는 “분배”만 한다.

\`\`\`tsx
export function selectedItemReducer(state: FilterItem[], action: EditAction) {
  switch (action.type) {
    case 'ADD_ITEM':
    case 'DELETE_ITEM':
      return reduceItemCrud(state, action);

    case 'CHECK_ITEM':
    case 'CHANGE_ITEM_NAME':
      return reduceItemEdit(state, action);

    case 'TYPE_TOGGLE':
    case 'CHANGE_MARKER_COLOR':
      return reduceType(state, action);

    case 'CHANGE_EXTRA_INFO':
    case 'CHANGE_EXTRA_INFO_TYPE':
      return reduceExtraInfo(state, action);

    default:
      return state;
  }
}
\`\`\`

### 여기서 얻은 이점

- bug가 나면 “어느 도메인 파일을 보면 되는지”가 명확
- 코드 리뷰가 쉬워짐 (책임이 명확)
- 단위 테스트가 도메인 단위로 쪼개짐 (type 테스트, extraInfo 테스트)
- 요구사항 확장 시 “도메인 내부에서만” 확장됨

---

## 4. 이 구조가 미래 Store 마이그레이션을 쉽게 만든다

> 도메인 단위 reducer 분리는 “지금 JSX를 깔끔하게 만드는 리팩터링”으로 끝나지 않는다.
나중에 Zustand/Redux 같은 store로 확장할 때, 마이그레이션을 재작성(rewrite)이 아니라 재배선(re-wiring)으로 바꿔준다.
> 

많은 사람들이 store 도입을 “전역 상태로 올리는 일”로 생각하지만, 실제로 어려운 지점은 그게 아니다.
진짜 비용을 만드는 건 보통 아래 네 가지다.

- 상태 변경 규칙이 UI(컴포넌트/핸들러) 여기저기에 퍼져 있는가?
- 변경 규칙이 **순수 함수(도메인 로직)** 로 분리되어 있는가?
- “무슨 변경이 가능한지”가 액션/명세로 정리되어 있는가?
- 도메인 경계(책임 단위)가 명확히 세워져 있는가?

도메인 단위로 reducer를 분리해 둔 구조는, 이미 위 조건들을 상당 부분 충족한다.
그래서 store로 가는 길이 “큰 수술”이 아니라 “단계적 전환”이 된다.

---

### 4.1 비즈니스 로직이 프레임워크(useReducer)로부터 독립된다

도메인 단위로 reducer를 나눠둔 핵심 가치는 “파일을 예쁘게 쪼갰다”가 아니다.

> 상태 변경 규칙(비즈니스 로직)을 UI/프레임워크 바깥으로 빼서
재사용 가능한 도메인 모듈로 만들어 둔 것 자체가 핵심이다.
> 

즉, 지금은 \`useReducer\`가 도메인 로직을 호출하지만,

- 이후 store(Zustand/Redux)를 도입해도
“같은 도메인 로직”을 그대로 호출할 수 있다.

결과적으로 마이그레이션 시 바뀌는 건 “규칙”이 아니라 **컨테이너(상태 보관/구독/디버깅 도구)** 쪽이 된다.

> 도메인 로직은 유지하고, 컨테이너만 교체할 수 있는 구조.
이게 마이그레이션 난이도를 결정한다.
> 

---

### 4.2 마이그레이션은 ‘갈아엎기’가 아니라 ‘단계적 전환’이 된다

여기서 중요한 포인트는 “store를 쓰면 reducer를 무조건 유지한다/삭제한다”가 아니라,
현실적으로는 **2단계 전환**이 가장 안전하고 자연스럽다는 점이다.

### (1) 1단계: Store를 “어댑터(Wrapper)”로 먼저 도입한다

초기에는 store가 기존 reducer를 그대로 호출하는 방식으로 시작할 수 있다.

- store가 \`dispatch(action)\`을 제공하고
- 그 dispatch가 내부적으로 \`selectedItemReducer(prev, action)\`를 호출해 next state를 만든다

이 단계의 의미는:

- UI 코드를 대거 수정하지 않고도
- store 기반 구독 최적화 / devtools / persistence 같은 “store 인프라”를 먼저 도입할 수 있다는 것

즉, 마이그레이션을 한 번에 끝내려 하지 않고 **리스크를 쪼개는 전략**이 된다.

### (2) 2단계: reducer를 “도메인 순수 업데이트 함수 집합”으로 변환한다 (궁극적으로 더 깔끔)

store 도입이 안정화되면, 다음 단계로 자연스럽게 “변환”이 가능해진다.

- switch(action) 같은 디스패치 레이어는 점점 의미가 줄어들고
- 대신 도메인 모듈에 “업데이트 함수(순수 함수)”만 남겨서
- store action 메서드가 그 함수를 호출하는 구조로 전환한다

예를 들면:

\`\`\`tsx
// domain/type/update.ts
export function toggleMarker(item: FilterItem): FilterItem {
  return {
    ...item,
    type: {
      ...item.type,
      marker: { ...item.type.marker, value: !item.type.marker.value },
    },
  };
}
\`\`\`

store에서는 로직을 새로 쓰는 대신, 이 함수를 호출해 상태를 바꾼다.

\`\`\`tsx
toggleMarker: (id) =>
  set(state => ({
    ...state,
    byId: {
      ...state.byId,
      [id]: toggleMarker(state.byId[id]),
    },
  }));
\`\`\`

이렇게 되면 마이그레이션은 “복붙으로 재작성”이 아니라
**도메인 함수 호출로 연결**되는 형태가 된다.

> store로 확장한 시점부터 reducer를 반드시 유지할 필요는 없다.
중요한 건 reducer라는 형식이 아니라, 그 안에 있던 도메인 변경 규칙을
순수 함수로 남겨 재사용하는 것이다.
> 

---

### 4.3 결국 “마이그레이션 비용”을 결정하는 건 구조다

미래에 store가 필요해지는 순간은 보통 아래 같은 상황에서 온다.

- 페이지를 넘어 편집 상태(draft)를 유지해야 할 때
- 여러 컴포넌트 트리(패널/모달/테이블)가 같은 상태를 공유해야 할 때
- Context 기반 전역화에서 리렌더 병목이 생길 때
- undo/redo, persist, multi-tab 동기화 같은 요구가 붙을 때

이 요구들을 store로 해결하는 건 “도구를 바꾸는 것”이 아니라
“상태의 수명/공유/관찰 가능성”을 확장하는 일이다.

그리고 그 확장의 비용은 “store를 쓰느냐 마느냐”가 아니라,

- 도메인 로직이 UI에 퍼져 있느냐
- 도메인 로직이 순수 함수로 모여 있느냐
- 책임 경계가 세워져 있느냐

이 **구조적 준비 상태**에 의해 결정된다.

> 그래서 도메인 단위 reducer 분리는
“현재의 리팩터링”이면서 동시에
“미래의 확장을 위한 투자(마이그레이션 레일)”다.
> 

---

## 5. 결론: 흐름을 한 줄로 정리하면

- **useState**로 중첩 상태를 직접 업데이트하니 UI가 로직에 잠식됨
- **useReducer**로 상태 변경 규칙을 중앙화해 UI를 정리함
- **도메인 reducer 분리**로 응집도를 회복하고 확장/테스트/유지보수성을 확보함
- 그 결과, 나중에 **store로 갈 때 도메인 로직을 유지한 채 컨테이너만 바꾸는 “점진 마이그레이션”이 가능**해짐

---

이런 고민을 하면서 시간을 꽤 많이 썼다.

“왜 이렇게까지 설계해야 하지?”, “어떤 방식이 진짜 맞는 걸까?”를 계속 되물었고, 성능과 유지보수 관점에서 최선의 선택이 뭔지도 끝없이 저울질했다.

근데 파고들수록 깨달은 건 하나였다. **정답은 딱 하나로 떨어지지 않는다**는 것.

AI에게 물어보니 내가 선택한 방식도 충분히 타당하다고 한다. 결국 중요한 건 “누가 맞냐”가 아니라, **우리 상황에서 어떤 근거로 그 선택을 했는지**였다.

이제는 느낌이나 유행이 아니라, 요구사항과 제약, 팀의 운영 방식까지 포함한 **근거 기반의 최적 선택**이 더 중요하다고 생각한다.`,HA=`## 0. 시니어는 AI를 싫어하지 않았다. 오히려 너무 좋아했다.

나는 막연히 **“전통적 관점의 시니어 개발자라면 AI에 대해 회의적일 것”** 이라 짐작했다.
하지만 현실은 정반대였다.

- 시니어: “AI는 무조건 도입해야지. 이제 업무 프로세스 전체를 자동화해야 해.”
- 나: “오… 그렇죠. 그런데 구체적으로 어떤 단계를 어떤 방식으로 자동화하면 좋을까요?”
- 시니어: “그냥 다 자동화하면 되잖아. 신기술이잖아. 효율이 나오는데 안 할 이유가 없지.”
- 나: (당황하며) “방법론을 좀 더 찾아보겠습니다…”
- 시니어: “하면서 ~~기능 넣는 거, AI 쓰면 한 시간이면 충분하지? 빨리 끝내~”
- 나: “(빠르긴 하겠지만… 안정적으로 돌아갈지는 검증해 봐야 할 텐데…)”

이 대화가 오가는 순간, 내 머릿속에서는 심각한 오류가 발생했다.

> TypeError: 구체적인 기술적 근거 is not a function

AI에 반대하는 것도, 신기술을 거부하는 것도 아닌데 **기묘하게 찝찝했다.**
그 말은 분명 틀린 게 없었지만, **너무나 맞는 말이라서 오히려 아무런 실체도 담고 있지 않은 ‘구호’처럼 들렸기** 때문이다.

---

## 1. 구현의 민주화: “코드 치는 손”은 저렴해졌고, “의도를 정의하는 머리”는 비싸졌다

예전에는 개발자의 가치가 곧 **‘숙련도’** 였다.

- 특정 언어의 문법을 깊게 파고든 사람
- 프레임워크의 복잡한 생명주기를 통달한 사람
- 빌드, 배포, 디버깅의 지옥을 수없이 통과한 사람

이러한 숙련은 분명한 가치가 있었고, 레거시 시스템을 유지보수하는 현시점에도 여전히 유효한 역량이다.
하지만 문제는 그 이후다.

### ✅ AI는 “개발”이라는 행위의 단가를 낮춰버렸다

리액트 컴포넌트, API 핸들러, 타입 정의, 테스트 코드, 문서화.
이제 **“어떻게 구현할 것인가?”** 에 대한 해답은 더 이상 개발자의 삽질이나 검색이 아니라, **“무엇을 만들겠다”는 의도를 설명하는 행위**로 대체되기 시작했다.

그 결과 개발의 병목 현상은 이동했다.

- 과거: 구현하는 **‘손’ (Coding)**
- 현재: 문제를 정의하고 설계하는 **‘머리’ (Intent & Logic)**

이것이 바로 “구현의 민주화”가 의미하는 바다.
**누구나 만들 수 있다는 말은**, 뒤집어 보면 **아무나 만들 수 있다는 뜻**이고, 더 나아가면 **아무렇게나 만들 수도 있다는 위험**을 내포한다.

나의 불안은 바로 이 지점에서 시작되었다.

---

## 2. “업무 전체 자동화”가 매력적으로 들리는 이유: 조직이 선호하는 언어니까

시니어가 외치는 “업무 전체 자동화”는 기술적인 용어라기보다 조직 운영의 언어에 가깝다.

- “리드타임 단축 및 생산성 극대화”
- “단순 반복 업무의 완전 제거”
- “인력 운영의 효율화와 표준화”

전부 맞는 말이다.
시니어가 이 지점을 강조하는 이유도 충분히 이해한다.

시니어는 코드 한 줄보다 **전체 업무의 흐름(Workflow)** 을 책임지는 위치에 있기 때문이다.
개별 구현은 팀원이 하더라도, 프로세스가 꼬여서 발생하는 사고는 결국 시니어가 수습해야 한다.
그래서 그들의 뇌는 다음과 같이 작동한다.

> “개발은 결국 흐름이다. 그 흐름을 자동화하면 생산성과 안정성이 동시에 잡힐 것이다.”

이 논리는 완벽해 보이지만, 치명적인 함정이 있다.
**“자동화”라는 단어가 너무 거대하다는 것**이다.

진정한 자동화란 단순히 ‘할 수 있다’는 선언이 아니라,
**“어디까지 자동화할 것이며, 무엇을 사람이 책임질 것인가”를 정밀하게 설계하는 일**이다.

그 설계가 빠진 자동화는 공허한 구호에 불과하다.
내가 느낀 찝찝함의 정체는 바로 그 **‘비어 있는 설계’** 였다.

---

## 3. 주니어의 실종: 자동화가 ‘성장의 사다리’를 치워버릴 때

전통적인 개발자의 성장 루트는 단계적이었다.

- 주니어: 사소한 UI 수정, 단위 테스트, 운영 보조, 문서 정리를 통해 시스템을 익힘
- 미들: 기능 단위의 설계와 구현, 코드 리뷰를 통한 협업 능력 배양
- 시니어: 전체 아키텍처 설계, 리스크 관리, 조직 조율 및 운영 책임

그런데 시니어가 말하는 **“업무 전체 자동화”** 가 실행되면,
가장 먼저 사라지는 것은 주니어들이 경험을 쌓던 **‘사다리의 아래칸’** 이다.

반복적인 코드 생성, 테스트 초안 작성, 문서화, 단순 분석 업무가 자동화되는 순간, 주니어들은 설 자리를 잃는다.

회사는 말할 것이다.

> “주니어를 뽑아서 가르칠 시간에 AI를 쓰는 게 훨씬 싸고 빠르지 않나?”

하지만 2~3년 뒤, 업계는 똑같은 목소리로 비명을 지를 것이다.

> “AI가 짠 코드를 이해하고 전체를 조망할 줄 아는 미들과 시니어가 없다.”

이것이 **‘숙련도의 단절’** 이다.

자동화는 당장의 생산성을 높여줄지 모르지만, **인재를 숙성시키는 시간과 기회를 앗아간다.**
지금 아낀 비용은 훗날 **‘인간 아키텍트의 부재’** 라는 더 큰 비용으로 돌아올 것이다.

비극적인 것은, 이 미래 비용은 실제로 터지기 전까지 **지표상에 존재하지 않는 것처럼 취급**된다는 사실이다.

---

## 4. 개발의 제조업화: 분업의 경계가 무너지는 지점

그동안 소프트웨어 개발은 철저히 분업화된 제조업 모델을 따랐다.

> 기획 → 디자인 → 프론트엔드 → 백엔드 → QA → 운영

각 단계는 명확한 산출물과 승인 절차, 그리고 책임의 경계가 있었다.
하지만 AI는 이 경계를 허물고 있다.

- 기획자가 직접 프로토타입을 뽑아내고,
- 디자이너가 코드를 생성하며,
- 개발자가 인프라 배포까지 혼자 처리한다.

조직은 이 **‘경계의 파괴’** 를 반긴다. 흐름을 통째로 최적화할 수 있기 때문이다.

그러나 분업은 비효율적이기도 했지만, 동시에 **‘느리지만 안전한’ 품질 체크포인트**이기도 했다.
AI로 흐름을 통째로 연결해버리면, 사람이 책임지던 검증 단계가 함께 녹아내릴 위험이 있다.

제조업에서 창작업으로 돌아가는 것은 환영할 일이지만,
**책임의 주체가 모호해진 채 컨베이어 벨트만 빨라지는 상황**은 대형 사고를 기다리는 복선이 될 수 있다.

---

## 5. 기술부채의 진화: ‘AI Sludge(찌꺼기)’라는 새로운 유형의 레거시

AI가 생성한 결과물은 겉보기엔 훌륭하다.
문제는 그 양이 너무 많고 생성 속도가 압도적이라는 점이다.

- 누구도 깊게 읽지 않는 방대한 PR이 쌓이고,
- 의미 없는 자동 생성 테스트가 늘어나며,
- 서로 다른 스타일의 코드가 뒤섞여 설계 의도가 불분명해진다.

결국 **“사람이 이해할 수 없는 거대한 코드와 프로세스의 덩어리”** 가 형성된다.
이것이 바로 최근 논의되는 **AI Sludge(AI 찌꺼기)** 이다.

과거의 레거시가 시간이 흐르며 굳어진 괴물이었다면,
AI 레거시는 **속도가 만들어낸 괴물**이다.

업무량은 줄어드는 것 같지만, 역설적으로 AI가 뱉어낸 결과물을 정리하고 정합성을 유지하는 비용은 폭증한다.

미래 개발자의 핵심 역량이 코드를 쓰는 것이 아니라,
AI가 만든 결과물 속에서 **‘독소’를 찾아내 정화하는 능력**이 되어야 하는 이유다.

---

## 6. 그래서 내가 느낀 찝찝함의 진짜 정체

처음에는 시니어가 AI를 거부할 것이라 생각해서 불안했다.
하지만 다시 생각해보니 진짜 불안의 이유는 시니어의 **“추상적인 찬성”** 때문이었다.

- 구호: “AI로 업무 전체를 자동화하면 좋다.”
- 엔지니어링: “어떤 업무를 어느 수준까지 자동화하고, 품질 게이트(Quality Gate)를 어디에 둘 것인가?”

내가 느낀 찝찝함은 AI 그 자체가 아니라,
**구체화되지 않은 자동화가 가져올 무책임함에 대한 경고**였다.

실무에서 직접 손을 더럽히며 굴러본 사람들은 알고 있다.
설계 없는 자동화는 ‘실수’를 개선하는 게 아니라, **‘실수’를 대량 생산하는 시스템**이 된다는 것을.

---

## 7. 시니어가 디테일을 말하지 않는 이유에 대한 고찰

물론 이것이 단순히 시니어 개인의 무능은 아닐 것이다.

- **시니어의 시각**: 그들은 기술적 디테일보다 조직 전체의 리스크(보안, 비용, 책임 소재)를 먼저 고려해야 하기에, 안전하고 포괄적인 단어(혁신, 생산성) 뒤로 숨는 경향이 있다.
- **도구의 특성**: AI는 너무나 범용적인 도구라 ‘정답’이라 부를만한 표준 가이드가 아직 부족하다. 디테일한 방법론을 제시하는 것 자체가 큰 리스크가 될 수 있다.

하지만 리더가 구호만 남기고 디테일을 피할 때,
그 공백을 메워야 하는 실무자들의 부담은 가중될 수밖에 없다.

---

## 8. 해결책: AI를 “신기술”이 아닌 “통제 가능한 공학 도구”로 대하기

내가 내린 결론은 명확하다.
AI는 무조건적인 선악의 문제가 아니라,
**“어디에 활용하고, 어디서부터 인간이 책임질 것인가”를 재정의하는 문제**다.

“전체 자동화”라는 추상적 개념을 다음과 같이 구체적으로 분류해야 한다.

### 8-1) 자동화 대상의 전략적 분류

- **생성(Generation)**: 코드/문서/테스트의 초안 작성을 AI에 맡겨 속도를 높인다.
- **검증(Verification)**: AI를 보조 도구로 써서 취약점을 찾되, 인간이 최종 판단한다.
- **운영(Operations)**: 로그 요약이나 장애 알림 분류 등 단순 판단을 자동화한다.

### 8-2) 품질 게이트(Quality Gate)의 명시화

속도가 빨라질수록 검증은 더 촘촘해야 한다.

- AI 생성 코드에 대한 ‘인간 리뷰어’의 필수 승인
- 민감 정보 노출 방지를 위한 자동 스캔 룰 적용
- AI가 이해하지 못하는 비즈니스 로직에 대한 명시적 문서화

---

## 9. 결론: AI 시대의 핵심은 ‘자동화’가 아니라 ‘책임의 재설계’다

AI는 개발자의 일을 뺏는 것이 아니라,
개발자의 책임이 머무는 위치를 바꾼다.

우리는 코드를 치는 기술자에서,
**“자동화된 흐름의 품질을 보장하는 감시자이자 설계자”** 로 진화해야 한다.

구체적인 공학적 설계가 뒷받침되지 않은 자동화는 혁신이 아니라 **대량 생산형 사고**일 뿐이다.
**“누가 최종 책임을 질 것인가?”** 이 질문에 답할 수 없다면 그 자동화는 멈춰야 한다.

---

## PS. 나를 설득하기 위해 남기는 자조적 체크리스트

- “자동화”는 목표가 아니라 수단일 뿐이다.
- “AI를 쓴다”는 말 자체는 아무런 기술적 가치를 지니지 않는다.
- AI가 만든 결과물은 ‘초안’이지 ‘면책권’이 아니다.
- 주니어가 사라지면, 시니어의 자리를 이어받을 다음 세대도 사라진다.
- 결국 모든 장애의 git blame은 인간인 나에게 돌아온다.

---
`,FA=`이전 글에서\r
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
`,qA=`HTML/CSS/JS는 아는데… 그래서 “웹”이 어떻게 화면이 되는 건데?\r
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
`,GA=`개발하다 보면 이런 순간이 있다.\r
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
## 0. 한 줄 정의부터\r
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
# 그렇다면… 어떻게 쓰는데?\r
\r
개념적으로는 이제 알것같지만 실무에서는 보통 어떻게 쓰일까?\r
커링이 “아 이런 데서 써먹는구나” 체감되는 예제들은 다음과 같다.\r
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
export const heroApi = createApiClient({\r
  baseUrl: "/api/super-hero",\r
  defaultHeaders: { "X-Client": "Super-power" },\r
});\r
\r
export const fromisFanLove = createApiClient({\r
  baseUrl: "https://fromis-9-love",\r
});\r
\r
// 호출\r
const projects = await heroApi<ProjectDto[]>("/projects", {\r
  query: { page: 1, size: 20 },\r
});\r
\r
const result = await fromisFanLove<ReprogramResult>("/reprogram", {\r
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
## 3) Zustand + 커링: selector/action factory의 예제\r
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
  byTeam("Car-Solution")(file) && byOwner("경민")(file) && hasTag("0609")(file);\r
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
정리하면 커링이 실무에서 의미 있는 순간은 대부분 다음과 같다.\r
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
`,YA=`“함수가 변수 기억하는 거요”로 끝내면 나중에 꼭 크게 맞는다\r
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
`,XA=`최근에 프론트엔드 아키텍처를 다시 고민하면서\r
\r
- DDD(도메인 주도 설계)\r
- FSD(Feature-Sliced Design)\r
- 그리고 어떤 분이 Velog에 정리해둔 “프론트엔드 도메인 아키텍처” 글을 같이 보게 됐다.\r
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
이것이 핵심이다.\r
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
  - \`CardView\` 하나에 포스트/상품/유저카드의 레이아웃을 다 때려넣기 →\r
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
> 팀장님/기획자가 말하는 단위대로 코드를 잘라야,\r
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
Velog 글은 Redux의 Slice구조를 참고해서 FSD 방식에 적용하여 **조금 더 실전적으로 단순화한 구조**를 제안한다.\r
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
- \`entities\` / \`features\` / \`processes\` 경계가 팀 합의 없이 흔들리면,\r
  - **폴더 구조가 오히려 의사결정 비용이 되고 “어디 두지?”가 반복된다.**\r
- public API / import rule 없이 slice 간 직접 참조가 늘면\r
  - ui/model/api가 레이어를 가로질러 퍼져 보이고 변경 위치 추적이 어려워진다.\r
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
## 6. 앞으로 설계할 때 쓸 수 있는 실전 사항(?)\r
\r
마지막으로, 실제 프로젝트에서 써먹을 수 있는 방법들을 정리해보자.\r
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
\r
어느 방법이든 정답은 없다. 각자 현 상황에 최선인 방법들을 고르는 것이 맞을 것이다.\r
`,JA=Object.assign({"./mdDatas/AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여.md":LA,"./mdDatas/JS 기본 동작원리, “진짜 뼈대”만 잡아보기.md":zA,"./mdDatas/JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편).md":BA,"./mdDatas/React × Zustand × Closure stale closure 방지 전략 기술.md":VA,"./mdDatas/React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기.md":PA,"./mdDatas/React 실시간 Trigger 처리 최적화 삽질기.md":IA,"./mdDatas/useState → useReducer → 도메인 분리 → Store 까지의 이야기.md":UA,"./mdDatas/“AI로 업무 전체 자동화하면 끝 아니야 ”이라는 시니어를 보며 느낀 찝찝함.md":HA,"./mdDatas/브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편).md":FA,"./mdDatas/웹(Web)이란 도대체 뭘까.md":qA,"./mdDatas/커링 컬링도 아니고 이게뭐누.md":GA,"./mdDatas/클로저란 당최 무엇인가.md":YA,"./mdDatas/프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처.md":XA}),Zt=e=>JA[`./mdDatas/${e}.md`]||"",KA=[{id:"react-zustand-closure",slug:"react-zustand-closure-stale-closure",title:"React × Zustand × Closure: stale closure 방지 전략 기술 정리",excerpt:"Zustand 쓰다가 '아니 왜 값이 안 바뀌지?' 하고 3시간 멍때린 적 있나요? 저도요. 결국 범인은 stale closure였습니다… 진짜 황당해서 정리해둔 글입니다. 나처럼 고통받지 말라고.",date:"2025년 12월 15일",tags:["React","Zustand","JavaScript","Closure","State Management"],cover:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Zt("React × Zustand × Closure stale closure 방지 전략 기술")},{id:"js-basic",slug:"js-basic",title:'JS 기본 동작원리, "진짜 뼈대"만 잡아보기',excerpt:"비동기 개념을 계속 외우기만 했다면, 이번엔 뼈대부터 잡자. Heap/Call Stack이 무엇이고, JS가 왜 싱글 스레드인지, 비동기는 누가 처리하는지(Web APIs/Node APIs), 그리고 Task Queue vs Microtask Queue가 실행 순서를 어떻게 갈라놓는지. 딱 이 흐름만 머리에 넣으면 async/await도 결국 같은 얘기라는 걸 이해하게 된다.",date:"2025년 12월 5일",tags:["JavaScript","기초","동작원리"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Zt("JS 기본 동작원리, “진짜 뼈대”만 잡아보기")},{id:"react-trigger-optimization",slug:"react-realtime-trigger-optimization",title:"React 실시간 Trigger 처리 최적화 삽질기 (Worker, Throttle, Time-slicing… 결국 Baseline이 이겼다.)",excerpt:"실시간 이벤트 들어올 때 UI가 뚝뚝 끊기길래, WebWorker부터 throttle까지 별짓 다 해봤습니다. 근데 결국… 가장 단순한 방법이 이겼습니다. 내 삽질의 역사 공유합니다.",date:"2025년 11월 28일",tags:["React","Performance","WebWorker","Optimization"],cover:"https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Zt("React 실시간 Trigger 처리 최적화 삽질기")},{id:"web-fundamentals",slug:"what-is-web",title:"웹(Web)이란 도대체 뭘까?",excerpt:"HTML/CSS/JS는 아는데 ‘그래서 웹이 어떻게 화면이 되는 건데?’ 하고 멈춰본 적 있나요? 저도 그래서 한 번 아주 기초부터 갈아엎고 정리해봤습니다. 웹의 원리 이해하면 프론트가 더 잘 보임.",date:"2025년 10월 20일",tags:["Web","HTTP","Browser","Fundamentals"],cover:"https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:Zt("웹(Web)이란 도대체 뭘까")},{id:"closure-deep-dive",slug:"what-is-closure",title:"클로저란 당최 무엇인가",excerpt:"면접만 가면 꼭 나오는 게 클로저인데… 정작 설명하려면 머릿속이 하얘지는 그 개념. 그래서 빡쳐서(?) 제대로 다시 정리했습니다. 이 글 읽고 나면 최소한 면접에서 우는 일은 없습니다.",date:"2025년 9월 15일",tags:["JavaScript","Closure","Scope","Fundamentals"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Zt("클로저란 당최 무엇인가")},{id:"currying",slug:"what-is-currying",title:"커링?? 컬링도 아니고 이게뭐누",excerpt:"커링 처음 보면 ‘이걸 왜 씀?’ 싶은데, 막상 알아두면 코드가 맘 편해지는 순간이 옵니다. 이 글은 커링을 드디어 사람 언어로 설명해본 글입니다. 예제 많음. 자존감 지킴.",date:"2025년 8월 25일",tags:["JavaScript","Functional Programming","Currying"],cover:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:Zt("커링 컬링도 아니고 이게뭐누")},{id:"react-library-ci-cd",slug:"react-library-test-ci-cd",title:'React 라이브러리 만들고 "테스트 + CI + 자동 배포" 붙이기',excerpt:"npm 배포 한 번 해보겠다고 시작했다가 GitHub Actions, semantic-release, 토큰 지옥까지 거쳐온 이야기. 진짜 별별 오류 다 봄. 그래도 자동 배포 되면 감동합니다. (눈물)",date:"2025년 12월 10일",tags:["React","Library","Testing","CI/CD","npm"],cover:"https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Zt("React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기")},{id:"js-event-loop-part1",slug:"js-event-loop-understanding-part1",title:"JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)",excerpt:"비동기 헷갈리는 사람들 99%가 ‘레이어 구분’을 안 해서 그렇습니다. 엔진 / 런타임 / 브라우저 구분하면 진짜 다 이해됩니다. 나도 이거 알기 전엔 async/await이랑 싸움 중이었음.",date:"2025년 6월 18일",tags:["JavaScript","Event Loop","Asynchronous","Architecture"],cover:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Zt("JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)")},{id:"browser-rendering-part2",slug:"browser-js-rendering-mechanism-part2",title:"브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)",excerpt:"브라우저는 생각보다 훨씬 복잡합니다. 렌더링 파이프라인 보면 ‘아 그래서 리렌더링이 느렸구나…’ 하고 현타 오는 그 글. 성능 최적화 힌트도 같이 담겨있음.",date:"2025년 6월 20일",tags:["Browser","Rendering","JavaScript","Performance"],cover:"https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:Zt("브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)")},{id:"frontend-ddd-fsd",slug:"frontend-ddd-fsd-domain-slice",title:"프론트엔드에서 DDD와 FSD, 그리고 '도메인 슬라이스' 아키텍처",excerpt:"프로젝트가 커질수록 파일이 정신없어지는 이유, 사실 구조 때문입니다. DDD/FSD를 프론트에 맞게 해석해서 ‘아 이래서 구조가 필요한 거구나’ 감이 오도록 써본 글.",date:"2025년 5월 15일",tags:["Architecture","DDD","FSD","Frontend","Design Pattern"],cover:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:Zt("프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처")},{id:"ai-era-maintenance",slug:"ai-era-code-maintenance",title:'AI 시대, "유지보수도 AI가 하면 되지 않나요?"라는 말에 대하여',excerpt:"‘AI가 코드도 짜주는데 유지보수도 하겠지?’라는 말을 들었는데… 현실은 전혀 다릅니다. AI가 잘하는 것과 진짜 사람이 해야 하는 일이 뭐가 다른지 정리한 글. 약간 분노도 섞여 있음.",date:"2026년 1월 1일",tags:["AI","Software Engineering","Maintenance","Opinion"],cover:"https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",category:"devloper",content:Zt("AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여")},{id:"senior-ai-idea",slug:"senior-ai-idea",title:"“AI로 업무 전체 자동화하면 끝 아니야?” 라고 말씀하시는 시니어를 보며 느낀 찝찝함",excerpt:"요즘 들어서 AI 쓰면 금방이잖아? 라는 말을 너무 많이 듣는다. 그리고 마치 구호처럼 느껴진다... 나에게 와닿지 않았던 이유에 대한 고찰과정과 개발자란 직업은 어떻게 변화되어가는지에 대해서 스스로 생각해 보았다.",date:"2026년 1월 15일",tags:["AI","Automation","Technical Debt","Engineering Culture"],cover:"https://plus.unsplash.com/premium_photo-1764695396810-3992d6bc4e51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"devloper",content:Zt("“AI로 업무 전체 자동화하면 끝 아니야 ”이라는 시니어를 보며 느낀 찝찝함")},{id:"reducer-migration-store",slug:"reducer-migration-store",title:"useState → useReducer → 도메인 분리 → Store 까지의 이야기",excerpt:"지역 State를 Reducer로 액션함수로 분리하는 과정에서 응집도를 낮추기 위한 고민, 어떻게 작성해야 차후 전역 State로 빼기 용이할까 생각해본 그 일련의 과정들을 공유한다. (너무 어려웠어...)",date:"2026년 1월 19일",tags:["State","Architecture","Refactoring","Engineering Culture"],cover:"https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"devloper",content:Zt("useState → useReducer → 도메인 분리 → Store 까지의 이야기")}],hn=[...KA].sort((e,n)=>{const i=c=>{const u=c.match(/(\d+)년\s*(\d+)월\s*(\d+)일/);if(u){const[,f,m,h]=u;return new Date(parseInt(f),parseInt(m)-1,parseInt(h))}return new Date(0)},a=i(e.date);return i(n.date).getTime()-a.getTime()}),QA="text-[14px] text-fg-muted leading-relaxed cursor-pointer hover:text-(--accent) transition-colors duration-300",ZA=()=>[...hn].sort(()=>Math.random()-.5).slice(0,2),WA=()=>{const e=$l(),[n]=M.useState(ZA),i=s=>{e(`/blog/${s}`)},a=()=>{e("/blog")};return x.jsxs("section",{id:"experience",className:"mb-20",children:[x.jsx("div",{className:va,children:x.jsxs("div",{className:"w-full",children:[x.jsx("p",{className:Sa,children:"Blog"}),x.jsxs("div",{className:"w-full flex justify-between",children:[x.jsx("h2",{className:wa,children:"기술 블로그"}),x.jsx("p",{className:QA,onClick:a,children:"포스팅 전체 보기 →"})]})]})}),x.jsx("div",{className:"grid gap-6",children:n.map(s=>x.jsx("article",{onClick:()=>i(s.slug),role:"button",tabIndex:0,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&i(s.slug)},className:`group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle) cursor-pointer\r
                       transition-all duration-300 ease-out\r
                       hover:border-(--accent-border) hover:-translate-y-0.5\r
                       [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]\r
                       [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]\r
                       focus:outline-none focus:ring-2 focus:ring-(--accent)/30`,children:x.jsxs("div",{className:"grid md:grid-cols-[240px_1fr] md:h-[200px]",children:[s.cover&&x.jsxs("div",{className:"relative h-[180px] md:h-[200px] bg-(--bg-soft)",children:[x.jsx("img",{src:s.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),x.jsx("div",{className:"absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/55 via-black/15 to-transparent"})]}),x.jsxs("div",{className:"p-6 md:overflow-hidden",children:[x.jsx("h3",{className:"text-[20px] font-semibold leading-snug mb-2 line-clamp-1",children:s.title}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2",children:s.excerpt}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.tags.slice(0,8).map(c=>x.jsx("span",{className:"text-[11px] px-2.5 py-1 rounded-full bg-(--accent-subtle) border border-(--accent-border) text-(--accent)",children:c},c))}),x.jsx("div",{className:"flex items-center justify-between text-[12px] text-fg-muted",children:x.jsx("span",{children:s.date})})]})]})},s.id))})]})};function $A(e){return new Worker("/portfolio/assets/fibWorker-cslZksJc.js",{name:e?.name})}const ek=()=>{const[e,n]=M.useState(null),[i,a]=M.useState(null),[s,c]=M.useState(!1),[u,f]=M.useState(0),m=M.useRef(null);M.useEffect(()=>{const y=new $A;return m.current=y,y.onmessage=g=>{n(g.data.result),a(g.data.time),c(!1)},()=>{m.current?.terminate(),m.current=null}},[]),M.useEffect(()=>{let y;const g=()=>{f(b=>(b+2)%360),y=requestAnimationFrame(g)};return y=requestAnimationFrame(g),()=>cancelAnimationFrame(y)},[]);const h=()=>{m.current&&(c(!0),n(null),a(null),m.current.postMessage({type:"CALCULATE_FIBONACCI",number:45}))};return x.jsx("div",{className:Fl,children:x.jsxs("div",{className:"grid items-center gap-5 md:grid-cols-2",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-medium",children:"Fibonacci Calculator"}),x.jsx("span",{className:ts,children:"Worker Thread"})]}),x.jsxs("p",{className:"text-[13px] text-fg-muted leading-[1.7] mb-5",children:["'계산 시작'을 누르면"," ",x.jsx("strong",{children:"DP가 아닌 피보나치 수열(45번째)"}),"을 계산합니다. 메인 스레드였다면 화면이 멈췄겠지만, Web Worker 덕분에 우측 애니메이션은 멈추지 않습니다."]}),x.jsx("button",{onClick:h,disabled:s,className:"w-full inline-flex items-center justify-center gap-2 text-[13px] px-4 py-2.5 rounded-lg border border-(--accent-border) bg-(--accent-subtle) text-fg enabled:hover:bg-(--accent)/10 enabled:hover:border-(--accent) enabled:hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",children:s?x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"inline-flex h-4 w-4 items-center justify-center",children:x.jsx("span",{className:"h-3 w-3 rounded-full border border-current border-t-transparent animate-spin"})}),x.jsx("span",{children:"계산 중..."})]}):"▶ 무거운 계산 시작 (Fib 45)"})]}),x.jsxs("div",{className:"relative flex flex-col items-center justify-center min-h-40 h-full rounded-2xl border border-(--border-subtle) bg-(--bg) px-5 py-4 overflow-hidden",children:[x.jsx("div",{className:"absolute top-3 right-3 text-[10px] text-fg-muted",children:"Main Thread UI"}),x.jsx("div",{className:"w-6 h-6 rounded-md mb-3 bg-[linear-gradient(135deg,var(--fg),var(--fg-muted))]",style:{transform:`rotate(${u}deg)`}}),x.jsx("span",{className:"text-[11px] text-fg-muted",children:"▲ UI Frame (Always Running)"}),x.jsx("div",{className:"w-full h-px my-4 bg-(--border-subtle)"}),x.jsxs("div",{className:"text-center",children:[x.jsx("div",{className:"text-[11px] text-fg-muted",children:"Result (Fib 45)"}),x.jsx("div",{className:"text-[24px] font-semibold my-1",children:e!==null?e.toLocaleString():"-"}),x.jsx("div",{className:"text-[10px] text-fg-muted",children:i!==null?`Time: ${i.toFixed(1)}ms`:"-"})]})]})]})})},aa=32,Wf=240,Cl=1e4,tk=()=>{const[e,n]=M.useState("idle"),[i,a]=M.useState(null),[s,c]=M.useState(null),[u,f]=M.useState(0),m=M.useRef(null),h=M.useCallback(()=>{n("naive"),a(null);const k=performance.now();requestAnimationFrame(()=>{requestAnimationFrame(()=>{a(performance.now()-k)})})},[]),y=M.useCallback(()=>{n("virtual"),c(null),f(0);const k=performance.now();requestAnimationFrame(()=>{requestAnimationFrame(()=>{c(performance.now()-k)})})},[]),g=M.useCallback(()=>{n("idle"),a(null),c(null),f(0)},[]),b=Math.floor(u/aa),v=Math.ceil(Wf/aa)+2,w=Math.min(b+v,Cl),E=k=>{f(k.currentTarget.scrollTop)};return x.jsx("div",{className:Fl,children:x.jsxs("div",{className:"grid items-center gap-5 md:grid-cols-2",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-medium",children:"Virtual Scroll"}),x.jsx("span",{className:ts,children:"Rendering Opt."})]}),x.jsxs("p",{className:"text-[13px] text-fg-muted leading-[1.7] mb-5",children:[x.jsxs("strong",{children:[Cl.toLocaleString(),"개"]})," 항목을 렌더링합니다. Naive DOM은 모든 요소를 생성하지만, Virtual Scroll은"," ",x.jsx("strong",{children:"뷰포트 내 요소만"})," 렌더링하여 성능을 확보합니다."]}),x.jsxs("div",{className:"flex gap-2 mb-3",children:[x.jsx("button",{onClick:h,disabled:e==="naive",className:"flex-1 text-[12px] px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed "+(e==="naive"?"border-red-400/40 bg-red-500/10 text-red-400":"border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover) hover:text-fg"),children:"Naive DOM"}),x.jsx("button",{onClick:y,disabled:e==="virtual",className:"flex-1 text-[12px] px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed "+(e==="virtual"?"border-(--accent-border) bg-(--accent-subtle) text-(--accent)":"border-(--border-subtle) bg-(--bg-soft) text-fg-muted hover:border-(--border-hover) hover:text-fg"),children:"Virtual Scroll"})]}),e!=="idle"&&x.jsx("button",{onClick:g,className:"w-full text-[11px] px-3 py-1.5 rounded-lg border border-(--border-subtle) text-fg-muted hover:text-fg hover:border-(--border-hover) transition-all duration-200 cursor-pointer",children:"초기화"})]}),x.jsxs("div",{className:"relative flex flex-col min-h-40 h-full rounded-2xl border border-(--border-subtle) bg-(--bg) overflow-hidden",children:[x.jsx("div",{className:"absolute top-3 right-3 text-[10px] text-fg-muted z-10",children:e==="idle"?"대기 중":e==="naive"?`Naive · ${Cl.toLocaleString()} DOM nodes`:`Virtual · ${w-b} DOM nodes`}),e==="idle"&&x.jsx("div",{className:"flex-1 flex items-center justify-center text-[13px] text-fg-muted",children:"왼쪽 버튼을 눌러 비교해 보세요"}),e==="naive"&&x.jsx("div",{className:"overflow-y-auto flex-1",style:{maxHeight:Wf},children:Array.from({length:Cl},(k,C)=>x.jsxs("div",{className:"flex items-center px-4 text-[12px] text-fg-muted border-b border-(--border-subtle)/30",style:{height:aa},children:[x.jsx("span",{className:"w-12 text-fg-dimmed font-mono text-[10px]",children:C+1}),x.jsxs("span",{children:["Row Item #",C+1]})]},C))}),e==="virtual"&&x.jsx("div",{ref:m,className:"overflow-y-auto flex-1",style:{maxHeight:Wf},onScroll:E,children:x.jsx("div",{style:{height:Cl*aa,position:"relative"},children:Array.from({length:w-b},(k,C)=>{const N=b+C;return x.jsxs("div",{className:"absolute left-0 right-0 flex items-center px-4 text-[12px] text-fg-muted border-b border-(--border-subtle)/30",style:{height:aa,top:N*aa},children:[x.jsx("span",{className:"w-12 text-fg-dimmed font-mono text-[10px]",children:N+1}),x.jsxs("span",{children:["Row Item #",N+1]})]},N)})})}),(i!==null||s!==null)&&x.jsxs("div",{className:"flex gap-3 px-4 py-3 border-t border-(--border-subtle) bg-(--bg-soft)",children:[i!==null&&x.jsxs("div",{className:"flex-1 text-center",children:[x.jsx("div",{className:"text-[10px] text-fg-dimmed",children:"Naive"}),x.jsxs("div",{className:"text-[14px] font-semibold text-red-400",children:[i.toFixed(1),"ms"]})]}),s!==null&&x.jsxs("div",{className:"flex-1 text-center",children:[x.jsx("div",{className:"text-[10px] text-fg-dimmed",children:"Virtual"}),x.jsxs("div",{className:"text-[14px] font-semibold text-(--accent)",children:[s.toFixed(1),"ms"]})]})]})]})]})})},nk=()=>x.jsxs("section",{id:"lab",className:"mb-20",children:[x.jsxs("div",{className:va,children:[x.jsxs("div",{children:[x.jsx("p",{className:Sa,children:"Lab"}),x.jsx("h2",{className:wa,children:"프론트엔드 실험실"})]}),x.jsx("p",{className:mu,children:"성능 최적화 기법을 라이브 데모로 직접 체험해 보세요."})]}),x.jsxs("div",{className:"grid gap-5",children:[x.jsx(ek,{}),x.jsx(tk,{})]})]}),rk={id:"gdsc-1st-team-lead-ai-project",title:"Google Developer Student Clubs (GDSC) 1기 팀장",subTitle:"AI 분리수거 리워드 앱 개발 (팀장)",period:["2022.09","2023.08"],mainContent:["GDSC 1기 팀장으로서 Flutter, TensorFlow, Firebase를 활용한 AI 분리수거 리워드 앱 개발 프로젝트 주도.","3개월 단기 프로젝트 기획 단계에서 기능 우선순위를 명확히 선정하고, 일정 및 리스크를 면밀히 관리.","TensorFlow 기반 이미지 분류 모델 학습을 수행하고 모바일 환경에 맞춰 최적화.","Firebase를 활용하여 실시간 데이터베이스 연동 및 리워드 시스템 백엔드 기능 구현.","프론트엔드부터 AI 모델 서빙까지 전체적인 엔드투엔드(End-to-End) 시스템을 설계하고 운영."],result:"국내 50개 팀 중 8위달성, 전사적 시스템의 전략적 설계 및 통합 운영 역량 강화.",tags:["GDSC","Team Lead","Project Manager","AI/ML","Flutter","TensorFlow","Firebase"],type:"activity"},ik=Object.freeze(Object.defineProperty({__proto__:null,gdscActivity:rk},Symbol.toStringTag,{value:"Module"})),ak={id:"ics-lab-research-tor-vpn",title:"ICS Lab 자기주도연구 (교내활동)",subTitle:"다크웹 포렌식 기법 연구",period:["2024.03","2024.06"],mainContent:["Tor와 VPN의 암호화 프로토콜 및 익명성 메커니즘을 심층적으로 비교 분석.","다크웹 환경에서의 사용자 행위 추적 한계점을 파악하고 기술적 난제를 식별.","네트워크 트래픽, 메모리, 시스템 로그 분석을 통합한 실질적인 포렌식 기법 설계.","실제 환경과 유사한 시나리오를 구축하여 설계한 포렌식 기법의 유효성을 검증.","네트워크 보안 및 디지털 포렌식 분야에 기여하며 문제 해결 능력과 독립적인 연구 수행 역량을 향상."],result:"Tor와 VPN의 익명성 차이를 명확히 규명 및 다크웹 사용자 행위 추적을 위한 실질적 포렌식 기법 논문 작성.",tags:["Research","Security","Forensics","Darkweb","Network"],type:"activity"},lk=Object.freeze(Object.defineProperty({__proto__:null,icsLabActivity:ak},Symbol.toStringTag,{value:"Module"})),sk={id:"samteo-night-school-vp",title:"봉사 중앙 동아리 샘터야학 (부회장)",subTitle:"야학 봉사 동아리 (부회장)",period:["2022.09","2024.08"],mainContent:["지역사회 어르신 대상 기초 국어, 수학, 영어 검정고시반 운영 및 수업 봉사 진행 (총 2년 활동).","2023년부터 부회장직을 수행하며 동아리 운영, 기획, 홍보 전반을 총괄.","체계적인 수업 커리큘럼을 구성하고 신규 봉사자 교육을 주도하여 수업 질 향상.","동아리원들의 협력을 유도하고 어르신 맞춤형 학습 지원을 통해 성공적인 운영 견인.","조직 관리 및 기획 경험을 통해 실질적인 리더십과 조직 운영 능력을 발전."],result:"교내 동아리 콘테스트 금상 수상, VMS 우수 지역사회 봉사단 선정(2023.06).",tags:["Volunteering","Education","Club","Leadership","Management"],type:"activity"},ok=Object.freeze(Object.defineProperty({__proto__:null,samteoActivity:sk},Symbol.toStringTag,{value:"Module"})),uk={id:"whois-mentor-cl123",title:"Whois 정보보안 소학회 (멘토)",subTitle:"정보보안 소학회 (멘토)",period:["2019.03","2024.08"],mainContent:["1학년부터 Whois 정보보안 소학회 회원으로 활동하며 웹 프로그래밍, C 언어, 자료구조 스터디에 참여.","3학년부터는 '멘토'로 참여하여 후배 대상 보안 및 개발 관련 교육을 주도적으로 진행.","5년 6개월간 회원 → 멘토로 성장하며 보안 교육 주도","체계적인 커리큘럼 설계와 실습 중심 교육 방식을 도입하여 후배들의 이해도와 학습 효과를 크게 향상."],result:"기술적인 전문성 향상뿐만 아니라, 멘토로서의 리더십과 교육 능력 발전.",tags:["Security","Mentoring","Club","Education","Leadership"],type:"activity"},ck=Object.freeze(Object.defineProperty({__proto__:null,whoisMentorActivity:uk},Symbol.toStringTag,{value:"Module"})),fk={id:"likelion-11th-scrum-master",title:"멋쟁이 사자처럼 11기 (스크럼 마스터)",subTitle:"일정 관리 앱 개발 (스크럼 마스터)",period:["2023.03","2023.09"],mainContent:["11기 멤버로 활동하며 React.js와 Flutter WebView를 활용한 일정 관리 애플리케이션 제작 프로젝트 참여.","프로젝트 개발 과정에 스크럼(Scrum) 애자일 방법론을 적극적으로 적용.","스크럼 마스터 역할을 맡아 전반적인 프로젝트 관리(일정, 이슈 조율)와 팀워크 강화를 주도.","멘토링을 통해 스크럼 마스터로서 효과적인 스프린트 계획 및 실행 방법에 대한 실무적 인사이트를 학습하고 적용."],result:"스크럼 마스터 경험을 통해 프로젝트 관리 능력 및 팀워크 역량 강화, 애자일 스크럼 프로세스에 대한 실무적 이해를 증진.",tags:["Like Lion","Club","Project Development","Scrum Master","Agile","React.js","Flutter","Teamwork"],type:"activity"},dk=Object.freeze(Object.defineProperty({__proto__:null,likelionActivity:fk},Symbol.toStringTag,{value:"Module"})),hk={id:"cyber-security-student-council-director",title:"사이버보안학과 학생회 (집행국장)",subTitle:"사이버보안학과 학생회 (집행국장)",period:["2022.09","2023.12"],mainContent:["사이버보안학과 학생회 `Cloud`의 집행국장으로서 학과 내 행사 및 학습 커뮤니티 기획,운영.","SW 교육과 IT 트렌드 공유를 위한 스터디 프로그램을 직접 기획 및 운영.","학우들의 요구사항 조사 및 다양한 학습 스타일과 참여 가능 시간을 고려한 커리큘럼 설계 및 조율.","단순 행사를 넘어 세미나 등 참여 중심의 운영과 피드백 기반의 개선 활동을 주기적으로 수행.","다른 학생회원들과의 협력 과정에서 의견 조율, 역할 분담, 갈등 완화 등 리더십을 발휘."],result:"학우들의 학습 성장을 이끌며 학생회 조직 주도, 프로젝트 기획 및 이해관계자간 조율 역량을 향상.",tags:["Student Council","Leadership","Planning","Communication","Management","Community"],type:"activity"},mk=Object.freeze(Object.defineProperty({__proto__:null,studentCouncilActivity:hk},Symbol.toStringTag,{value:"Module"})),pk="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",gk={"trouble-shooting":"text-red-400 border-red-400/30",learning:"text-blue-400 border-blue-400/30",achievement:"text-green-400 border-green-400/30","side-project":"text-purple-400 border-purple-400/30",activity:"text-yellow-400 border-yellow-400/30"},yk={"trouble-shooting":"Trouble Shooting",learning:"Learning",achievement:"Achievement","side-project":"Side Project",activity:"Activity"},zx=({activity:e,isActive:n})=>x.jsx("article",{className:"w-full h-full flex flex-col","aria-hidden":!n,children:x.jsxs("div",{className:"w-full flex-1 px-5 py-5 md:px-7 md:py-6 flex flex-col justify-between",children:[x.jsxs("div",{className:"flex w-full flex-col gap-3",children:[x.jsxs("div",{className:"flex w-full justify-between items-center gap-2",children:[x.jsx("span",{className:`inline-flex items-center text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${gk[e.type]}`,children:yk[e.type]}),x.jsx("span",{className:`hidden md:inline-block px-3 py-1 rounded-full\r
                         border border-(--border-subtle) bg-(--bg-soft)\r
                         text-[11px] text-fg-muted`,children:e.period.join(" ~ ")})]}),x.jsx("h3",{className:"text-[18px] md:text-[19px] font-semibold text-fg leading-snug",children:e.title}),x.jsx("p",{className:"text-[12px] md:text-[13px] text-fg-muted",children:e.subTitle}),x.jsx("div",{className:"text-[13px] text-fg-muted leading-[1.7]",children:x.jsx("ul",{className:"space-y-1.5",children:e.mainContent.map((i,a)=>x.jsxs("li",{className:"flex",children:[x.jsx("span",{className:"mt-[3px] mr-1 text-[10px]",children:"•"}),x.jsx("span",{children:i})]},a))})}),e.result&&x.jsx("p",{className:"text-[12px] md:text-[13px] text-green-400",children:e.result}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.tags.map(i=>x.jsx("span",{className:pk,children:i},i))})]}),e.link&&x.jsx("div",{className:"mt-3",children:x.jsxs("a",{href:e.link.href,target:"_blank",rel:"noreferrer",className:`inline-flex items-center gap-1 text-[12px] text-fg-muted\r
                         hover:text-fg transition-colors duration-200`,children:[x.jsx("span",{children:e.link.label}),x.jsx("span",{children:"↗"})]})})]})}),eu=({isActive:e,isPaused:n,duration:i,size:a=16,strokeWidth:s=2})=>{const c=(a-s)/2,u=2*Math.PI*c;return x.jsxs("div",{className:"relative flex items-center justify-center",style:{width:a,height:a},children:[x.jsx("svg",{className:"absolute",width:a,height:a,style:{transform:"rotate(-90deg)"},children:x.jsx("circle",{cx:a/2,cy:a/2,r:c,fill:"none",className:"stroke-(--border-subtle)",strokeWidth:s,opacity:.4})}),x.jsx("svg",{className:"absolute",width:a,height:a,style:{transform:"rotate(-90deg)"},children:x.jsx("circle",{cx:a/2,cy:a/2,r:c,fill:"none",className:"stroke-(--accent)",strokeWidth:s,strokeLinecap:"round",style:{strokeDasharray:u,strokeDashoffset:e?0:u,transition:e?`stroke-dashoffset ${i}ms linear`:"stroke-dashoffset 0ms",animationPlayState:n?"paused":"running"}})}),x.jsx("span",{className:["w-2 h-2 rounded-full","transition-all duration-200 ease-out",e?"bg-(--accent)":"bg-(--bg-elevated) border border-(--border-subtle)"].join(" ")})]})},$f=4e3,Bx=500,xk=Object.assign({"./data/GDSC/index.ts":ik,"./data/ICSLab/index.ts":lk,"./data/Samtor/index.ts":ok,"./data/Whois/index.ts":ck,"./data/lion/index.ts":dk,"./data/majorClub/index.ts":mk}),Al=Object.values(xk).map(e=>e.default??Object.values(e)[0]),bk=()=>{const[e,n]=M.useState(0),[i,a]=M.useState(!0),[s,c]=M.useState(!1),[u,f]=M.useState(!1),m=M.useRef(null),h=M.useRef(null),y=M.useRef(0),g=M.useRef(0),b=Al.length;M.useEffect(()=>{const j=()=>{typeof window>"u"||f(window.innerWidth<1e3)};return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]);const v=M.useCallback(()=>{n(j=>(j+1)%b)},[b]),w=M.useCallback(()=>{n(j=>(j-1+b)%b)},[b]),E=M.useCallback(j=>{n(j),a(!1),setTimeout(()=>a(!0),3e3)},[]);M.useEffect(()=>{if(!i||s){h.current&&(clearInterval(h.current),h.current=null);return}return h.current=setInterval(()=>{v()},$f),()=>{h.current&&clearInterval(h.current)}},[i,s,v]),M.useEffect(()=>{const j=V=>{V.key==="ArrowLeft"?w():V.key==="ArrowRight"&&v()};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[v,w]);const k=j=>{y.current=j.touches[0].clientX},C=j=>{g.current=j.touches[0].clientX},N=()=>{if(!y.current||!g.current)return;const j=y.current-g.current;Math.abs(j)>50&&(j>0?v():w()),y.current=0,g.current=0};return x.jsxs("section",{id:"activity",className:"mb-20",children:[x.jsx("div",{className:va,children:x.jsxs("div",{children:[x.jsx("p",{className:Sa,children:"Activity"}),x.jsx("h2",{className:wa,children:"대외 활동"})]})}),u?x.jsxs("div",{className:"flex flex-col gap-6",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[x.jsxs("div",{className:"relative",children:[x.jsx("div",{ref:m,className:"w-full overflow-hidden",onTouchStart:k,onTouchMove:C,onTouchEnd:N,children:x.jsx("div",{className:`\r
                  flex w-full\r
                  transition-transform\r
                  duration-700\r
                  ease-[cubic-bezier(0.22,0.61,0.36,1)]\r
                  will-change-transform\r
                `,style:{transform:`translate3d(-${e*100}%, 0, 0)`},children:Al.map((j,V)=>x.jsx("div",{className:"w-full mb-1 shrink-0 flex justify-center px-3",children:x.jsx("div",{className:"w-full h-full max-w-3xl rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) transition-all duration-300 hover:border-(--accent-border) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]",children:x.jsx(zx,{activity:j,isActive:V===e})})},j.id))})}),x.jsx("button",{onClick:w,"aria-label":"이전 활동",className:"absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-(--border-subtle) bg-(--bg-elevated)/90 backdrop-blur-sm flex items-center justify-center text-fg-muted hover:text-fg hover:border-(--border-hover) transition-all duration-200 cursor-pointer",children:x.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),x.jsx("button",{onClick:v,"aria-label":"다음 활동",className:"absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-(--border-subtle) bg-(--bg-elevated)/90 backdrop-blur-sm flex items-center justify-center text-fg-muted hover:text-fg hover:border-(--border-hover) transition-all duration-200 cursor-pointer",children:x.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),x.jsxs("div",{className:"relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]",children:[x.jsx("div",{className:"h-px w-full max-w-3xl bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6",children:Al.map((j,V)=>{const Y=V===e;return x.jsxs("button",{type:"button",className:"relative flex flex-col items-center outline-none cursor-pointer shrink-0",onMouseEnter:()=>E(V),onClick:()=>E(V),"aria-label":`${j.title}로 이동`,children:[x.jsx("span",{className:["mb-1 h-[3px] w-5 sm:w-7 rounded-full","bg-(--border-subtle)",Y?"animate-border-pulse":"opacity-40"].join(" ")}),x.jsx(eu,{isActive:Y,isPaused:s||!i,duration:$f,size:16,strokeWidth:2}),x.jsx("span",{className:"mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-[80px] text-center line-clamp-2",children:j.subTitle})]},j.id)})})]})]}):x.jsxs("div",{className:"flex flex-col md:flex-row gap-8",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[x.jsx("div",{className:"w-64 shrink-0",children:x.jsxs("div",{className:"relative py-4",style:{height:Bx},children:[x.jsx("div",{className:"absolute left-[19px] top-4 bottom-4 w-px bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"relative h-full flex flex-col justify-evenly",children:Al.map((j,V)=>{const Y=V===e;return x.jsxs("button",{type:"button",className:"relative flex items-center gap-4 outline-none cursor-pointer group/point text-left pl-1",onMouseEnter:()=>E(V),onClick:()=>E(V),"aria-label":`${j.title}로 이동`,children:[x.jsxs("div",{className:"relative z-10 flex items-center justify-center w-8 h-8 shrink-0",children:[Y&&x.jsx("div",{className:"absolute inset-0 bg-(--accent-subtle) rounded-full"}),x.jsx(eu,{isActive:Y,isPaused:s||!i,duration:$f,size:18,strokeWidth:2})]}),x.jsx("div",{className:"flex flex-col",children:x.jsx("span",{className:["text-[13px] font-medium transition-colors duration-200",Y?"text-fg":"text-fg-muted group-hover/point:text-fg-subtle"].join(" "),children:j.subTitle})})]},j.id)})})]})}),x.jsx("div",{ref:m,className:"flex-1 w-full overflow-hidden",style:{height:Bx},children:x.jsx("div",{className:`\r
                flex flex-col \r
                h-full w-full\r
                transition-transform \r
                duration-700 \r
                ease-[cubic-bezier(0.22,0.61,0.36,1)]\r
                will-change-transform\r
              `,style:{transform:`translate3d(0, -${e*100}%, 0)`},children:Al.map((j,V)=>x.jsx("div",{className:"h-full w-full shrink-0 flex items-center justify-center",children:x.jsx("div",{className:"w-full max-h-full overflow-y-auto rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) transition-all duration-300 hover:border-(--accent-border) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]",children:x.jsx(zx,{activity:j,isActive:V===e})})},j.id))})})]})]})},vk="/portfolio/assets/banner-DP2kVVDA.png",Sk={id:"llm-lstm-bert",banner:vk,title:"리뷰 왓수다 (감성 분석 & 평점 예측)",subTitle:"리뷰 왓수다",subtitle:"SNS/포털 영화 리뷰 감성 분석 및 평점 예측 AI 서비스",summary:"자연어 처리(NLP)와 딥러닝(LSTM/BERT)을 활용하여 텍스트 리뷰의 감성을 분석하고 평점을 예측하는 AI 모델을 개발했습니다. 정형화되지 않은 SNS 리뷰 데이터의 가치를 재발견했습니다.",tags:["Python","TensorFlow","KoNLPy","BERT","Selenium"],links:[],period:"2022.09 – 2022.12",team:"AI Developer 2명, Data Analyst 1명",overview:"단순 별점만으로는 알 수 없는 구체적인 영화 평가를 분석하기 위해 시작된 프로젝트입니다. 네이버 영화 리뷰뿐만 아니라 유튜브, 인스타그램 등 평점 시스템이 없는 SNS의 텍스트 리뷰를 크롤링하여, LSTM과 BERT 모델을 통해 감성(긍정/부정)을 분류하고 예상 평점을 도출하는 시스템을 구축했습니다.",why:[{title:"Why NLP? (KoNLPy & Okt)",desc:"한글은 조사와 어미가 발달한 교착어이므로, 단순 띄어쓰기 기준 토큰화로는 의미 파악이 어렵습니다. 형태소 분석기(Okt)를 도입하여 불용어를 제거하고 실질 형태소만 추출함으로써 모델의 학습 효율을 극대화했습니다."},{title:"Why Hybrid Model? (LSTM & BERT)",desc:"순차적 데이터 처리에 강한 LSTM으로 가벼운 초기 모델을 구축하고, 문맥 양방향 이해도가 높은 BERT(KoBERT)를 도입하여 복잡한 구어체 리뷰의 감성 분류 정확도를 높이는 비교 연구를 수행했습니다."}],role:{percentage:"40% (Data Engineering & Model Training)",tasks:["데이터 파이프라인 구축: Selenium을 활용한 네이버 영화/SNS 리뷰 크롤링 및 CSV 데이터셋(200,000+) 구축","데이터 전처리(Preprocessing): 중복/결측치 제거, 정규 표현식을 이용한 특수문자 정제, KoNLPy 활용 형태소 분석 및 불용어 처리","LSTM 모델 설계 및 학습: Keras Tokenizer를 이용한 정수 인코딩, Padding 처리, 임베딩 레이어 및 LSTM 레이어 구성","성능 최적화: 리뷰 길이 분포 분석을 통한 최적 max_len 설정, 과적합(Overfitting) 방지를 위한 Dropout 및 Early Stopping 적용"]},troubleshooting:[{title:"데이터 불균형으로 인한 예측 편향(Bias) 문제 해결",problem:"초기 모델 학습 시, 긍정 리뷰(평점 8~10점)가 압도적으로 많아 모델이 무조건 '긍정'으로 예측하는 경향(Overfitting) 발생.",cause:"영화 리뷰 데이터 특성상 고평점 리뷰가 저평점보다 3배 이상 많은 'Class Imbalance' 상태였음.",solution:"Oversampling(SMOTE) 대신 데이터의 현실성을 유지하기 위해 Undersampling 기법을 적용하여 라벨별 비율을 1:1로 맞추고, 평점 구간을 1~10에서 1~5로 축소(Binning)하여 클래스 간 경계를 명확히 함.",learning:"모델의 아키텍처만큼이나 '데이터의 질과 분포'가 성능에 결정적인 영향을 미친다는 것을 체감함."},{title:"OOV(Out-Of-Vocabulary) 문제와 임베딩 품질 저하",problem:"신조어나 오타가 많은 SNS 리뷰 특성상, 학습된 단어 사전에 없는 단어(OOV)가 많아 모델의 정확도가 떨어짐.",cause:"기존 형태소 분석기 사전이 최신 인터넷 용어(예: '존잼', '노잼', '핵노잼')를 제대로 인식하지 못함.",solution:"Soynlp와 같은 비지도 학습 기반 토크나이저를 검토했으나, 데이터양의 한계로 사용자 지정 사전(User Dictionary)에 빈도수 높은 신조어를 수동으로 추가하여 형태소 분석기의 커버리지를 넓힘.",learning:"도메인 특화 데이터(SNS 리뷰)를 다룰 때는 범용 라이브러리에만 의존하지 않고, 데이터 특성에 맞는 전처리 커스터마이징이 필수적임을 배움."}],results:["LSTM 모델 정확도 85% 달성 (기존 베이스라인 대비 15% 향상)","평점 없는 SNS 텍스트 리뷰를 1~5점 척도로 정량화하는 모델 구축","비정형 데이터(댓글)의 시각화를 통해 영화 마케팅 인사이트 도출 가능성 확인"],images:[],highlights:[{value:"85%",label:"모델 정확도"},{value:"200K+",label:"학습 데이터"},{value:"15%",label:"성능 향상"}],techDecisions:[{tech:"Python",reason:"ML/DL 생태계(TensorFlow, KoNLPy)의 주력 언어"},{tech:"BERT",reason:"문맥 양방향 이해도가 높아 구어체 리뷰의 감성 분류 정확도 극대화"},{tech:"Selenium",reason:"네이버·유튜브·인스타그램 등 동적 페이지의 리뷰 크롤링"}]},wk=Object.freeze(Object.defineProperty({__proto__:null,llmProject:Sk},Symbol.toStringTag,{value:"Module"})),Tk="/portfolio/assets/banner-CHMNdFhc.png",Ck={id:"mogang",banner:Tk,title:"모강(SW 강의용 다나와 서비스)",subTitle:"모강",subtitle:"SW 강의용 다나와 서비스 (강의 비교 플랫폼)",summary:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위해 1000+개의 강의 데이터를 수집·비교하는 플랫폼입니다. 2024학년도 후배들을 대상으로 배포하여 50+명의 긍정적인 반응을 얻었습니다.",tags:["Next.js","TypeScript","SSR","Styled-Components"],links:[],period:"2023.9 ~ 2024.03",team:"Frontend 1명, Backend 1명, 기획 2명, Designer 1명",overview:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위한 'SW 강의용 다나와' 서비스입니다. 1000개 이상의 방대한 강의 데이터를 효율적으로 처리하고 비교하기 위해 Next.js(SSR)를 도입했습니다. 실제 교내 후배들을 대상으로 서비스를 제공하여 50명 이상의 유저로부터 긍정적인 피드백을 도출했습니다.",why:[{title:"Why Next.js? (SSR 도입)",desc:"1000개 이상의 강의 데이터를 처리하는 데 있어 클라이언트 사이드 렌더링(CSR)보다 서버 사이드 렌더링(SSR) 방식이 초기 로딩 속도와 검색 엔진 최적화(SEO) 측면에서 효율적이라 판단했습니다."},{title:"성장과 학습",desc:"CSR과 SSR의 차이를 이론을 넘어 직접 구현하며 비교해보고 싶었습니다. SSR이 모던 웹의 주요 렌더링 방식으로 떠오름에 따라, 기존 React 기반 지식과 비교하며 기술적 성장을 이루고자 했습니다."}],role:{percentage:"100% (Frontend Lead)",tasks:["Next.js 기반 SSR 아키텍처 설계: 초기 페이지 SSR 렌더링으로 SEO 및 LCP(Largest Contentful Paint) 최적화","SEO 및 성능 최적화: getServerSideProps, next/head 활용 메타 태그 동적 구성, Code Splitting(dynamic import) 및 next/image로 Lighthouse 90점+ 달성","추천 알고리즘 기반 렌더링: 유저 프로필/로그 기반 추천 리스트 UI 구현 및 Context API를 활용한 전역 상태 관리로 Props Drilling 해결","UI/UX 고도화: Atomic Design 패턴 일부 도입으로 컴포넌트 재사용성 강화, Skeleton UI 및 Framer-Motion 애니메이션 적용","반응형 웹 및 크로스 브라우징: Styled-Components 활용, viewport-units-buggyfill로 모바일(iOS/Android) 뷰포트 이슈 해결"]},troubleshooting:[{title:"무한 스크롤 중복 호출(Race Condition) 이슈 해결",problem:"스크롤이 하단에 도달할 때 데이터 로딩 중임에도 fetchNextPage()가 중복 호출되어, 불필요한 API 요청과 UI 중복 렌더링 발생. 특히 네트워크가 느리거나 Skeleton UI가 작을 때 심화됨.",cause:"react-infinite-scroll-component 라이브러리의 내부 스크롤 이벤트 감지 속도가 상태 업데이트(loading state)보다 빨라, 로딩 상태가 true로 변하기 전에 이벤트가 다시 트리거되는 Race Condition 발생.",solution:"1차로 isLoading 플래그를 도입해 중복 실행을 Guard Clause로 차단하고, 2차로 IntersectionObserver를 직접 구현하여 DOM 요소의 가시성(Visibility)을 정밀하게 감지하는 방식으로 제어권을 확보.",learning:"라이브러리에 의존하기보다 내부 동작 원리(DOM 감지 등)를 이해하는 것이 중요함을 깨달음. 비동기 상태 관리 시 Race Condition 위험을 인지하고 IntersectionObserver를 직접 다루며 제어 경험을 쌓음."}],results:["2023년 창업 동아리 캡스톤 디자인 평가 5위 (전체 25개 팀 중)","교내 소학회 내 소스코드 오픈 및 웹 개발 스터디 교재로 활용 (지식 공유)","실제 후배 50+명 대상 베타 테스트 진행 및 긍정적 반응 도출"],images:[],highlights:[{value:"1000+",label:"강의 데이터"},{value:"50+",label:"실사용자"},{value:"90+",label:"Lighthouse 점수"}],techDecisions:[{tech:"Next.js",reason:"1000+ 강의 데이터의 SSR 처리로 초기 로딩 속도와 SEO 최적화"},{tech:"TypeScript",reason:"대규모 데이터 타입 안정성과 IDE 자동완성으로 개발 생산성 향상"},{tech:"SSR",reason:"CSR 대비 초기 로딩 속도 개선 및 검색 엔진 최적화"}]},Ak=Object.freeze(Object.defineProperty({__proto__:null,mogangProject:Ck},Symbol.toStringTag,{value:"Module"})),kk="/portfolio/assets/banner-DIUHLUxm.png",Ek={id:"p2p-service",banner:kk,title:"Multi-Client FTP Server",subTitle:"P2P Service",subtitle:"리눅스 시스템 콜 기반의 동시성 파일 전송 서버",summary:"C언어와 리눅스 시스템 콜을 직접 활용하여 다중 접속을 지원하는 FTP 서버입니다. Fork 기반 멀티프로세싱과 파일 락(Flock)을 통해 데이터 무결성을 보장하는 동시성 제어를 구현했습니다.",tags:["C","Linux","Socket Programming","System Call","Multi-Processing"],links:[],period:"2023.09 ~ 2023.12",team:"Individual (100%)",overview:"네트워크 프로그래밍의 핵심인 소켓(Socket)과 리눅스 시스템 콜(System Call)을 깊이 있게 이해하기 위해 시작된 프로젝트입니다. 단순 1:1 전송을 넘어, `fork()`를 활용해 여러 클라이언트가 동시에 접속하여 파일을 업로드/다운로드할 수 있는 환경을 구축했고, 이 과정에서 발생하는 경쟁 상태(Race Condition)를 제어하기 위한 동기화 메커니즘을 설계했습니다.",why:[{title:"Why Low-Level Implementation?",desc:"고수준 라이브러리 없이 `open`, `read`, `write`, `socket` 등 커널 수준의 시스템 콜을 직접 다루며 OS가 I/O와 네트워크를 처리하는 방식을 근본적으로 이해하고자 했습니다."},{title:"Why Multi-Processing?",desc:"단일 프로세스 모델의 한계를 극복하고, 다수의 클라이언트 요청을 병렬적으로 처리하기 위해 `fork()`를 통한 자식 프로세스 생성 방식을 채택하여 독립적인 세션을 보장했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처: TCP/IP 기반의 연결 지향형 통신 구현 (Bind, Listen, Accept, Connect)","동시성 처리 (Concurrency): `fork()` 시스템 콜을 활용한 다중 클라이언트 접속 처리 및 좀비 프로세스 방지(`waitpid`)","동기화 및 무결성: `flock`을 활용한 파일 잠금(Reader/Writer Lock) 메커니즘 구현으로 데이터 손상 방지","프로토콜 설계 및 기능 구현: 로그인 인증, 파일 리스트(ls), 업로드/다운로드, 삭제 등 커스텀 FTP 명령어 처리 로직 개발","예외 처리 및 시그널 핸들링: `SIGINT` 등 시그널 포착을 통한 안전한 서버/클라이언트 종료 처리"]},troubleshooting:[{title:"동시 파일 접근 시 데이터 무결성 훼손 (Race Condition)",problem:"여러 클라이언트가 동시에 같은 파일에 업로드하거나 삭제를 시도할 때, 파일 내용이 뒤섞이거나 손상되는 경쟁 상태가 발생함.",cause:"운영체제 레벨에서 파일 디스크립터에 대한 동시 접근 제어가 기본적으로 보장되지 않아, Critical Section에 대한 보호 장치가 부재했음.",solution:"`flock()` 시스템 콜을 도입하여 파일 접근 시 Advisory Lock을 걸도록 구현. 쓰기 작업 시에는 Exclusive Lock(배타적 잠금)을, 읽기 시에는 Shared Lock(공유 잠금)을 적용하여 동시성을 제어함.",learning:"멀티 프로세스 환경에서 공유 자원(파일) 관리의 중요성과 OS가 제공하는 동기화 도구(Lock)의 동작 원리를 체득함."},{title:"예기치 않은 연결 종료와 좀비 프로세스 이슈",problem:"클라이언트가 강제 종료(`Ctrl+C`)될 때 서버 측의 자식 프로세스가 제대로 회수되지 않고 좀비 프로세스로 남아 리소스를 점유하는 현상.",cause:"부모 프로세스가 자식 프로세스의 종료 상태를 수신(`wait`)하지 않아 프로세스 테이블에 엔트리가 남음.",solution:"`signal(SIGCHLD)` 핸들러를 등록하고, 핸들러 내부에서 `waitpid()`를 비봉쇄(WNOHANG) 모드로 호출하여 종료된 자식 프로세스를 즉시 회수하도록 로직 개선.",learning:"프로세스 생명주기 관리와 시그널(Signal) 처리를 통한 안정적인 데몬(Daemon) 서버 구조의 필요성을 배움."}],results:["다중 클라이언트 환경에서 안정적인 파일 업로드/다운로드/삭제 기능 구현 완료","Flock 적용 후 동시 접근 시 데이터 오염 0건 달성 (무결성 확보)","로그인 보안 및 접근 제어 로직을 통해 기본적인 보안 파일 서버 구축"],images:[],highlights:[{value:"10+",label:"동시 접속 처리"},{value:"100%",label:"전송 성공률"},{value:"0건",label:"데이터 손상"}],techDecisions:[{tech:"C",reason:"커널 시스템 콜을 직접 호출하여 OS 동작 원리를 깊이 이해하기 위해 선택"},{tech:"Linux",reason:"POSIX 호환 시스템 콜(fork, flock, signal)을 활용한 시스템 프로그래밍 학습"},{tech:"Socket Programming",reason:"TCP/IP 연결 수립부터 데이터 전송까지 네트워크의 근본적인 이해"}]},jk=Object.freeze(Object.defineProperty({__proto__:null,p2pProject:Ek},Symbol.toStringTag,{value:"Module"})),Mk="/portfolio/assets/banner-h9P_7FQW.png",Dk={id:"secure-chat",banner:Mk,title:"Secure Chat (보안 채팅 프로그램)",subTitle:"Secure-Chat",subtitle:"Java Socket & RSA/AES 하이브리드 암호화 메신저",summary:"Java 소켓 프로그래밍으로 1:1 통신을 구현하고, RSA 비대칭키로 AES 대칭키를 안전하게 교환하여 도청이 불가능한 보안 채팅 시스템을 구축했습니다.",tags:["Java","Socket","RSA","AES-256","Multi-Thread"],links:[],period:"2023.03 ~ 2023.06",team:"Individual (100%)",overview:"네트워크 통신의 기초인 소켓(Socket)을 활용해 1:1 채팅 프로그램을 구현하고, 그 위에 보안 계층을 입힌 프로젝트입니다. RSA 공개키 암호화 방식으로 대칭키(AES)를 안전하게 교환(Key Exchange)한 뒤, 실제 대화 내용은 AES-256으로 고속 암호화하여 전송하는 '하이브리드 암호화 시스템'을 직접 설계했습니다.",why:[{title:"Why Hybrid Encryption? (RSA + AES)",desc:"RSA는 보안성이 높지만 연산 속도가 느려 실시간 채팅에 부적합하고, AES는 빠르지만 키 배송(Key Distribution) 보안 문제가 있습니다. 이 둘을 결합해 '키 교환은 RSA, 메시지는 AES'로 처리하는 SSL/TLS의 기본 원리를 구현해보고자 했습니다."},{title:"Why Java Sockets?",desc:"고수준 라이브러리에 의존하지 않고, TCP 연결 수립(3-way handshake)부터 스트림(Stream) 데이터 처리, 스레드 관리까지 네트워크 통신의 로우 레벨 메커니즘을 깊이 있게 이해하기 위해 선택했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처 설계: Server/Client 구조 및 Multi-thread(SendThread, ReceiveThread)를 이용한 양방향 비동기 통신 구현","RSA 키 교환 프로토콜 구현: Server의 공개키(Public Key) 생성 및 배포, Client의 AES 키 암호화 전송 및 Server의 복호화 로직(Key Exchange) 개발","AES-256 메시지 암호화: 대칭키 기반의 실시간 메시지 암호화/복호화 모듈(encryptAES256/decryptAES256) 구현","보안 무결성 검증: 송수신 양측의 평문(Plaintext)과 암호문(Ciphertext) 로그 비교를 통한 기밀성 및 해킹 안전성 검증"]},troubleshooting:[{title:"Socket 입력 스트림의 블로킹(Blocking I/O) 문제 해결",problem:"메시지를 수신하는 동안(readUTF) 스레드가 입력 대기 상태에 빠져, 내가 메시지를 보내고 싶어도(writeUTF) 전송이 불가능해지는 '반이중(Half-duplex)' 현상 발생.",cause:"Java의 기본 InputStream은 블로킹 방식이므로, 단일 스레드에서 송수신을 순차적으로 처리하려다 데드락과 유사한 대기 상태가 됨.",solution:"송신(SendThread)과 수신(ReceiveThread)을 담당하는 스레드를 분리(Multi-threading)하여, 입출력 작업이 서로를 차단하지 않고 독립적으로 수행되도록 아키텍처를 재설계함.",learning:"네트워크 I/O 처리 시 스레드 분리의 필요성과 동시성(Concurrency) 제어의 중요성을 체감함."},{title:"RSA 암호화 데이터 크기 제한(BadPaddingException) 해결",problem:"RSA로 데이터를 암호화할 때 간헐적으로 `javax.crypto.BadPaddingException` 오류가 발생하며 암호화에 실패함.",cause:"RSA 알고리즘은 키 크기(예: 2048bit)에 따라 한 번에 암호화할 수 있는 평문의 길이가 제한됨. 긴 문자열을 RSA로 직접 처리하려다 허용 범위를 초과함.",solution:"RSA는 오직 짧은 데이터인 'AES 대칭키' 교환에만 사용하고, 실제 긴 채팅 메시지는 블록 암호화 방식인 AES로 처리하도록 역할 분담을 명확히 하여 해결.",learning:"비대칭키 암호화의 용도(키 교환/서명)와 대칭키 암호화의 용도(데이터 암호화)를 구분해야 하는 기술적 이유를 명확히 이해함."}],results:["RSA-2048 및 AES-256 기반의 안전한 1:1 채팅 통신 성공","Wireshark 패킷 캡처 시 평문이 노출되지 않음을 확인 (기밀성 확보)","Server/Client 간 키 교환 및 암호화 통신 시연 성공 (터미널 로그 검증)"],images:[],highlights:[{value:"256bit",label:"AES 메시지 암호화"},{value:"2048bit",label:"RSA 키 교환"},{value:"0건",label:"평문 노출"}],techDecisions:[{tech:"Java",reason:"풍부한 암호화 라이브러리(javax.crypto)와 스레드 관리 지원"},{tech:"RSA",reason:"비대칭키로 AES 키를 안전하게 교환하는 SSL/TLS 기본 원리 구현"},{tech:"AES-256",reason:"RSA보다 빠른 대칭키 암호화로 실시간 채팅 메시지 처리"}]},Nk=Object.freeze(Object.defineProperty({__proto__:null,secureChatProject:Dk},Symbol.toStringTag,{value:"Module"})),Rk="/portfolio/assets/banner-xAa91UBm.png",Ok={id:"ssangsang",banner:Rk,title:"쌍상 (봉사 매칭 서비스)",subTitle:"쌍상",subtitle:"자원봉사자-수요자 매칭 크로스 플랫폼 웹앱",summary:"100+명의 동아리 회원이 사용하는 봉사 매칭 서비스. React 웹앱으로 개발하여 접근성을 높이고, 애자일 프로세스로 운영 중입니다.",tags:["React.js","TypeScript","Progressive Web App","Axios","Agile-Scrum"],links:[],period:"2023.01 ~ 현재 운영중",team:"Frontend 2명, Backend 1명",overview:"자원봉사자와 봉사를 받고 싶어하는 사람들을 매칭하기 위한 웹/앱 크로스 플랫폼 서비스입니다. 현재 100명 이상의 동아리 회원들이 실제 봉사 신청 및 관리에 사용하고 있습니다.",why:[{title:"Why React?",desc:"컴포넌트 기반 아키텍처와 선언형 UI를 통해 재사용성과 유지보수성을 확보했습니다. 방대한 커뮤니티와 라이브러리 생태계를 활용해 개발 생산성을 높였습니다."},{title:"Why WebApp?",desc:"하나의 코드로 웹과 모바일 환경(크로스 플랫폼)에 모두 대응하며, 스토어 심사 없이 빠른 배포와 수정이 가능하여 애자일한 운영에 적합하다고 판단했습니다."}],role:{percentage:"60%",tasks:["React-Router-Dom을 활용한 SPA 페이지 전환 및 유저 권한별 접근 제어 (Protected Route) 구현","사용자 경험(UX) 개선: Percentage Loading Indicator, 스크롤 기반 페이지네이션(Infinite Scroll), Skeleton UI 적용","반응형 디자인: viewport width 기준 rem/flex Layout으로 다양한 디바이스 대응","Axios Interceptor를 활용한 Access Token 자동 갱신 및 공통 에러 핸들링 로직 구현","GitHub/Jira/Notion 기반의 애자일 스프린트 운영 및 코드 리뷰 주도"]},troubleshooting:[{title:"React StrictMode와 useEffect 중복 실행 문제",problem:"초기 렌더링 시 useEffect 내 API 호출이 두 번 발생하여 불필요한 트래픽 유발.",cause:"React 18 StrictMode의 개발 환경 특성(마운트-언마운트-마운트)으로 인한 현상. Side-Effect 검증 과정임을 이해.",solution:"AbortController를 활용하여 언마운트 시 이전 요청을 취소(Clean-up)하도록 리팩토링하여 안전한 비동기 처리 구현.",learning:"StrictMode가 잠재적 버그를 찾아주는 도구임을 이해하고, 클린업 함수(Clean-up) 작성의 중요성을 체감."},{title:"비동기 State 업데이트 시점 차이로 인한 필터링 오류",problem:"API로 데이터를 받아온(setVolunteers) 직후 필터링을 수행했으나, 빈 배열이 반환되는 문제 발생.",cause:"setState는 비동기적으로 동작하므로, 상태 업데이트가 완료되기 전에 다음 코드가 실행되어 초기값(빈 배열)을 참조함.",solution:"필터링 로직을 별도의 useEffect로 분리하고, volunteers 상태를 의존성 배열(dependency array)에 추가하여 데이터 변경 시점에 필터링이 수행되도록 수정.",learning:"React의 상태 업데이트 사이클과 의존성 배열의 역할을 명확히 이해하게 됨."}],results:["2023 동아리 콘테스트 금상 수상 (교내 2위)","2023년 6월 우수지역사회봉사단 선정 (VMS 인증)","실사용자 100+명 확보 및 주 단위 기능 개선 사이클 정착"],images:[],highlights:[{value:"100+",label:"실사용자"},{value:"60%",label:"프론트엔드 기여도"},{value:"2위",label:"교내 콘테스트"}],techDecisions:[{tech:"React.js",reason:"컴포넌트 기반 아키텍처로 재사용성과 유지보수성 확보"},{tech:"Progressive Web App",reason:"하나의 코드로 웹/모바일 크로스 플랫폼 대응, 스토어 심사 없이 빠른 배포"}]},_k=Object.freeze(Object.defineProperty({__proto__:null,ssangsangProjects:Ok},Symbol.toStringTag,{value:"Module"})),Lk="/portfolio/assets/banner-xHcB6NbG.png",zk={id:"vary-recycle",banner:Lk,title:"Vary Recycle (분리수거 리워드 서비스)",subTitle:"Vary Recycle",subtitle:"Google 기술 기반, 분리수거 인식 및 리워드 제공 환경 문제 해결 서비스",summary:"UN SDGs(지속 가능한 개발 목표) 중 환경 분야를 대상으로 한 분리수거 리워드 서비스입니다. 80% 정확도의 Computer Vision AI로 쓰레기 종류를 인식하고, 올바른 분리수거 가이드를 제공하여 사용자 행동 변화를 이끌었습니다.",tags:["Flutter","Firebase","TensorFlow","CV Model","Google Solution Challenge"],links:[],period:"2022.09 ~ 2023.08",team:"Frontend 2명, Backend 1명, AI 모델 2명, 데이터 생성 1명",overview:"Vary Recycle은 사용자가 쓰레기를 촬영하면, AI가 실시간으로 종류를 인식하고 맞는 분리수거 방법을 안내해주는 리워드형 서비스입니다. 촬영–인식–가이드–리워드까지 하나의 플로우로 연결하여, 게임처럼 재미있게 분리수거 습관을 만들도록 설계했습니다.",why:[{title:"Why Flutter?",desc:"iOS/Android를 동시에 대응해야 했기 때문에, 단일 코드베이스로 크로스 플랫폼 개발이 가능한 Flutter를 선택했습니다. 위젯 기반 UI와 Hot Reload를 활용해 짧은 기간 내에 여러 화면을 빠르게 설계·반복 개선할 수 있었습니다."},{title:"Why Computer Vision 기반 분리수거?",desc:"환경 문제 해결의 가장 큰 허들은 '귀찮음'과 '정보 부족'이라고 보았습니다. 사용자가 이름을 일일이 입력하는 대신, 카메라 한 번으로 유리병/캔/종이/PET를 자동 분류하고, 바로 분리수거 가이드를 보여줌으로써 진입장벽을 최소화했습니다."}],role:{percentage:"50%",tasks:["Flutter 기반 하이브리드 앱 프론트엔드 개발 50% 담당: 홈, 촬영 화면, 결과 출력, 로그인 등 주요 화면 직접 설계 및 구현","LayoutBuilder, MediaQuery, Flexible 등을 활용해 다양한 해상도·비율에서 깨지지 않는 반응형 UI 구성","AnimatedContainer를 이용해 분리수거 결과에 따라 카드 색상/크기/위치를 애니메이션으로 표현, 사용자 피드백 강화","Firebase Realtime Database 연동: 분리수거 결과 및 AI 학습 로그를 실시간 저장·조회하는 데이터 플로우 구현","Firebase Authentication 적용: 이메일 로그인, 인증 토큰 만료 처리, 세션 유지 로직 설계 및 예외 상황(토큰 만료, 네트워크 에러) 처리","Firebase Security Rules 작성으로 사용자별 데이터 접근 제어 및 읽기/쓰기 권한 분리","TensorFlow 기반 Computer Vision 모델과의 연동을 위해 HTTP 인터페이스(REST API) 설계 및 Flutter 클라이언트 구현","AI 인퍼런스 결과(예: 라벨, 신뢰도)에 따라 UI가 자동으로 상태를 전환하도록 상태 기반 화면 전환 로직 구현","유리병/캔/종이/PET 4종에 대해 약 7,500장의 학습용 이미지 촬영 및 정제, 조명·각도·배경을 달리하여 데이터 다양성 확보 및 오버피팅 방지"]},troubleshooting:[{title:"앱 재실행 시 로그인 상태인데도 로그인 화면으로 라우팅되는 문제",problem:"Firebase Authentication을 사용해 이메일 로그인 기능을 구현했는데, 최초 로그인 후에는 정상 동작하지만 앱을 완전히 종료 후 재실행하면 로그인되어 있음에도 로그인 페이지로 잘못 라우팅되는 문제가 발생.",cause:"앱 시작 직후 FirebaseAuth.instance.currentUser를 바로 조회하면, Firebase가 아직 내부적으로 인증 상태를 복구하기 전이라 null을 반환할 수 있음. 인증 상태 복구가 비동기적으로 동작함에도 이를 고려하지 않고 currentUser만으로 초기 라우팅을 결정한 것이 원인이었음.",solution:"FirebaseAuth.instance.authStateChanges() 스트림을 StreamBuilder로 구독하는 방식으로 초기 라우팅 구조를 전면 수정. 인증 상태 복구 중에는 SplashScreen을 보여주고, snapshot.hasData 여부에 따라 HomePage 또는 LoginPage로 분기하도록 설계하여 비동기 복구 구간을 안전하게 처리함.",learning:"Firebase Authentication의 인증 상태 복구는 비동기이며, ‘로그인 여부’뿐만 아니라 ‘복구가 끝났는지 여부’까지 UI 상태로 분리해야 한다는 것을 배웠음. 이를 계기로 Flutter 위젯 생명주기, 비동기 흐름 제어, 상태 기반 라우팅의 중요성을 몸으로 이해하게 되었고, 이후 다른 프로젝트에서도 모든 초기 라우팅을 스트림/상태 기반으로 설계하게 되는 계기가 되었음."}],results:["2022년 교내 동계 모각소 활동 ‘최우수상’ 수상 (31개 팀 중 1위)","Google Solution Challenge Winter Cup 국내 Top 8 (40+팀 중 8위)","환경·분리수거 문화를 주제로 한 실제 사용자 테스트에서 ‘분리수거 가이드가 직관적이고 재미있다’는 피드백 다수 확보"],images:[],highlights:[{value:"80%",label:"AI 인식 정확도"},{value:"1위",label:"교내 최우수상"},{value:"7500+",label:"학습 이미지"}],techDecisions:[{tech:"Flutter",reason:"단일 코드베이스로 iOS/Android 동시 대응, Hot Reload로 빠른 반복 개발"},{tech:"Firebase",reason:"인증·DB·스토리지를 통합 제공, 서버리스로 빠른 프로토타이핑"},{tech:"TensorFlow",reason:"모바일 환경에서도 실시간 이미지 분류가 가능한 경량화 모델 지원"}]},Bk=Object.freeze(Object.defineProperty({__proto__:null,varyRecycleProjects:zk},Symbol.toStringTag,{value:"Module"})),kh=M.createContext({});function Eh(e){const n=M.useRef(null);return n.current===null&&(n.current=e()),n.current}const Vk=typeof window<"u",p1=Vk?M.useLayoutEffect:M.useEffect,pu=M.createContext(null);function jh(e,n){e.indexOf(n)===-1&&e.push(n)}function ma(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const Ln=(e,n,i)=>i>n?n:i<e?e:i;let Mh=()=>{};const Vr={},g1=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function y1(e){return typeof e=="object"&&e!==null}const x1=e=>/^0[^.\s]+$/u.test(e);function b1(e){let n;return()=>(n===void 0&&(n=e()),n)}const gn=e=>e,Pk=(e,n)=>i=>n(e(i)),ns=(...e)=>e.reduce(Pk),pa=(e,n,i)=>{const a=n-e;return a===0?1:(i-e)/a};class Dh{constructor(){this.subscriptions=[]}add(n){return jh(this.subscriptions,n),()=>ma(this.subscriptions,n)}notify(n,i,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](n,i,a);else for(let c=0;c<s;c++){const u=this.subscriptions[c];u&&u(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ut=e=>e*1e3,pn=e=>e/1e3;function v1(e,n){return n?e*(1e3/n):0}const Ik=(e,n,i)=>{const a=n-e;return((i-e)%a+a)%a+e},S1=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,Uk=1e-7,Hk=12;function Fk(e,n,i,a,s){let c,u,f=0;do u=n+(i-n)/2,c=S1(u,a,s)-e,c>0?i=u:n=u;while(Math.abs(c)>Uk&&++f<Hk);return u}function rs(e,n,i,a){if(e===n&&i===a)return gn;const s=c=>Fk(c,0,1,e,i);return c=>c===0||c===1?c:S1(s(c),n,a)}const w1=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,T1=e=>n=>1-e(1-n),C1=rs(.33,1.53,.69,.99),Nh=T1(C1),A1=w1(Nh),k1=e=>e>=1?1:(e*=2)<1?.5*Nh(e):.5*(2-Math.pow(2,-10*(e-1))),Rh=e=>1-Math.sin(Math.acos(e)),E1=T1(Rh),j1=w1(Rh),qk=rs(.42,0,1,1),Gk=rs(0,0,.58,1),M1=rs(.42,0,.58,1),D1=e=>Array.isArray(e)&&typeof e[0]!="number";function N1(e,n){return D1(e)?e[Ik(0,e.length,n)]:e}const R1=e=>Array.isArray(e)&&typeof e[0]=="number",Yk={linear:gn,easeIn:qk,easeInOut:M1,easeOut:Gk,circIn:Rh,circInOut:j1,circOut:E1,backIn:Nh,backInOut:A1,backOut:C1,anticipate:k1},Xk=e=>typeof e=="string",Vx=e=>{if(R1(e)){Mh(e.length===4);const[n,i,a,s]=e;return rs(n,i,a,s)}else if(Xk(e))return Yk[e];return e},No=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Jk(e,n){let i=new Set,a=new Set,s=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function m(y){u.has(y)&&(h.schedule(y),e()),y(f)}const h={schedule:(y,g=!1,b=!1)=>{const w=b&&s?i:a;return g&&u.add(y),w.add(y),y},cancel:y=>{a.delete(y),u.delete(y)},process:y=>{if(f=y,s){c=!0;return}s=!0;const g=i;i=a,a=g,i.forEach(m),i.clear(),s=!1,c&&(c=!1,h.process(y))}};return h}const Kk=40;function O1(e,n){let i=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,u=No.reduce((j,V)=>(j[V]=Jk(c),j),{}),{setup:f,read:m,resolveKeyframes:h,preUpdate:y,update:g,preRender:b,render:v,postRender:w}=u,E=()=>{const j=Vr.useManualTiming,V=j?s.timestamp:performance.now();i=!1,j||(s.delta=a?1e3/60:Math.max(Math.min(V-s.timestamp,Kk),1)),s.timestamp=V,s.isProcessing=!0,f.process(s),m.process(s),h.process(s),y.process(s),g.process(s),b.process(s),v.process(s),w.process(s),s.isProcessing=!1,i&&n&&(a=!1,e(E))},k=()=>{i=!0,a=!0,s.isProcessing||e(E)};return{schedule:No.reduce((j,V)=>{const Y=u[V];return j[V]=(_,q=!1,X=!1)=>(i||k(),Y.schedule(_,q,X)),j},{}),cancel:j=>{for(let V=0;V<No.length;V++)u[No[V]].cancel(j)},state:s,steps:u}}const{schedule:Ge,cancel:Pr,state:St,steps:ed}=O1(typeof requestAnimationFrame<"u"?requestAnimationFrame:gn,!0);let Ho;function Qk(){Ho=void 0}const Mt={now:()=>(Ho===void 0&&Mt.set(St.isProcessing||Vr.useManualTiming?St.timestamp:performance.now()),Ho),set:e=>{Ho=e,queueMicrotask(Qk)}},_1=e=>n=>typeof n=="string"&&n.startsWith(e),L1=_1("--"),Zk=_1("var(--"),Oh=e=>Zk(e)?Wk.test(e.split("/*")[0].trim()):!1,Wk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Px(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Ta={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ql={...Ta,transform:e=>Ln(0,1,e)},Ro={...Ta,default:1},_l=e=>Math.round(e*1e5)/1e5,_h=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function $k(e){return e==null}const eE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Lh=(e,n)=>i=>!!(typeof i=="string"&&eE.test(i)&&i.startsWith(e)||n&&!$k(i)&&Object.prototype.hasOwnProperty.call(i,n)),z1=(e,n,i)=>a=>{if(typeof a!="string")return a;const[s,c,u,f]=a.match(_h);return{[e]:parseFloat(s),[n]:parseFloat(c),[i]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},tE=e=>Ln(0,255,e),td={...Ta,transform:e=>Math.round(tE(e))},ci={test:Lh("rgb","red"),parse:z1("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:a=1})=>"rgba("+td.transform(e)+", "+td.transform(n)+", "+td.transform(i)+", "+_l(ql.transform(a))+")"};function nE(e){let n="",i="",a="",s="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),s=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),s=e.substring(4,5),n+=n,i+=i,a+=a,s+=s),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const Vd={test:Lh("#"),parse:nE,transform:ci.transform},is=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),zr=is("deg"),_n=is("%"),ce=is("px"),rE=is("vh"),iE=is("vw"),Ix={..._n,parse:e=>_n.parse(e)/100,transform:e=>_n.transform(e*100)},ca={test:Lh("hsl","hue"),parse:z1("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+_n.transform(_l(n))+", "+_n.transform(_l(i))+", "+_l(ql.transform(a))+")"},ct={test:e=>ci.test(e)||Vd.test(e)||ca.test(e),parse:e=>ci.test(e)?ci.parse(e):ca.test(e)?ca.parse(e):Vd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ci.transform(e):ca.transform(e),getAnimatableNone:e=>{const n=ct.parse(e);return n.alpha=0,ct.transform(n)}},aE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lE(e){return isNaN(e)&&typeof e=="string"&&(e.match(_h)?.length||0)+(e.match(aE)?.length||0)>0}const B1="number",V1="color",sE="var",oE="var(",Ux="${}",uE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ga(e){const n=e.toString(),i=[],a={color:[],number:[],var:[]},s=[];let c=0;const f=n.replace(uE,m=>(ct.test(m)?(a.color.push(c),s.push(V1),i.push(ct.parse(m))):m.startsWith(oE)?(a.var.push(c),s.push(sE),i.push(m)):(a.number.push(c),s.push(B1),i.push(parseFloat(m))),++c,Ux)).split(Ux);return{values:i,split:f,indexes:a,types:s}}function cE(e){return ga(e).values}function P1({split:e,types:n}){const i=e.length;return a=>{let s="";for(let c=0;c<i;c++)if(s+=e[c],a[c]!==void 0){const u=n[c];u===B1?s+=_l(a[c]):u===V1?s+=ct.transform(a[c]):s+=a[c]}return s}}function fE(e){return P1(ga(e))}const dE=e=>typeof e=="number"?0:ct.test(e)?ct.getAnimatableNone(e):e,hE=(e,n)=>typeof e=="number"?n?.trim().endsWith("/")?e:0:dE(e);function mE(e){const n=ga(e);return P1(n)(n.values.map((a,s)=>hE(a,n.split[s])))}const Tn={test:lE,parse:cE,createTransformer:fE,getAnimatableNone:mE};function nd(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function pE({hue:e,saturation:n,lightness:i,alpha:a}){e/=360,n/=100,i/=100;let s=0,c=0,u=0;if(!n)s=c=u=i;else{const f=i<.5?i*(1+n):i+n-i*n,m=2*i-f;s=nd(m,f,e+1/3),c=nd(m,f,e),u=nd(m,f,e-1/3)}return{red:Math.round(s*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:a}}function tu(e,n){return i=>i>0?n:e}const Je=(e,n,i)=>e+(n-e)*i,rd=(e,n,i)=>{const a=e*e,s=i*(n*n-a)+a;return s<0?0:Math.sqrt(s)},gE=[Vd,ci,ca],yE=e=>gE.find(n=>n.test(e));function Hx(e){const n=yE(e);if(!n)return!1;let i=n.parse(e);return n===ca&&(i=pE(i)),i}const Fx=(e,n)=>{const i=Hx(e),a=Hx(n);if(!i||!a)return tu(e,n);const s={...i};return c=>(s.red=rd(i.red,a.red,c),s.green=rd(i.green,a.green,c),s.blue=rd(i.blue,a.blue,c),s.alpha=Je(i.alpha,a.alpha,c),ci.transform(s))},Pd=new Set(["none","hidden"]);function xE(e,n){return Pd.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function bE(e,n){return i=>Je(e,n,i)}function zh(e){return typeof e=="number"?bE:typeof e=="string"?Oh(e)?tu:ct.test(e)?Fx:wE:Array.isArray(e)?I1:typeof e=="object"?ct.test(e)?Fx:vE:tu}function I1(e,n){const i=[...e],a=i.length,s=e.map((c,u)=>zh(c)(c,n[u]));return c=>{for(let u=0;u<a;u++)i[u]=s[u](c);return i}}function vE(e,n){const i={...e,...n},a={};for(const s in i)e[s]!==void 0&&n[s]!==void 0&&(a[s]=zh(e[s])(e[s],n[s]));return s=>{for(const c in a)i[c]=a[c](s);return i}}function SE(e,n){const i=[],a={color:0,var:0,number:0};for(let s=0;s<n.values.length;s++){const c=n.types[s],u=e.indexes[c][a[c]],f=e.values[u]??0;i[s]=f,a[c]++}return i}const wE=(e,n)=>{const i=Tn.createTransformer(n),a=ga(e),s=ga(n);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?Pd.has(e)&&!s.values.length||Pd.has(n)&&!a.values.length?xE(e,n):ns(I1(SE(a,s),s.values),i):tu(e,n)};function U1(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?Je(e,n,i):zh(e)(e,n)}const TE=e=>{const n=({timestamp:i})=>e(i);return{start:(i=!0)=>Ge.update(n,i),stop:()=>Pr(n),now:()=>St.isProcessing?St.timestamp:Mt.now()}},H1=(e,n,i=10)=>{let a="";const s=Math.max(Math.round(n/i),2);for(let c=0;c<s;c++)a+=Math.round(e(c/(s-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},nu=2e4;function Bh(e){let n=0;const i=50;let a=e.next(n);for(;!a.done&&n<nu;)n+=i,a=e.next(n);return n>=nu?1/0:n}function F1(e,n=100,i){const a=i({...e,keyframes:[0,n]}),s=Math.min(Bh(a),nu);return{type:"keyframes",ease:c=>a.next(s*c).value/n,duration:pn(s)}}const tt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Id(e,n){return e*Math.sqrt(1-n*n)}const CE=12;function AE(e,n,i){let a=i;for(let s=1;s<CE;s++)a=a-e(a)/n(a);return a}const id=.001;function kE({duration:e=tt.duration,bounce:n=tt.bounce,velocity:i=tt.velocity,mass:a=tt.mass}){let s,c,u=1-n;u=Ln(tt.minDamping,tt.maxDamping,u),e=Ln(tt.minDuration,tt.maxDuration,pn(e)),u<1?(s=h=>{const y=h*u,g=y*e,b=y-i,v=Id(h,u),w=Math.exp(-g);return id-b/v*w},c=h=>{const g=h*u*e,b=g*i+i,v=Math.pow(u,2)*Math.pow(h,2)*e,w=Math.exp(-g),E=Id(Math.pow(h,2),u);return(-s(h)+id>0?-1:1)*((b-v)*w)/E}):(s=h=>{const y=Math.exp(-h*e),g=(h-i)*e+1;return-id+y*g},c=h=>{const y=Math.exp(-h*e),g=(i-h)*(e*e);return y*g});const f=5/e,m=AE(s,c,f);if(e=Ut(e),isNaN(m))return{stiffness:tt.stiffness,damping:tt.damping,duration:e};{const h=Math.pow(m,2)*a;return{stiffness:h,damping:u*2*Math.sqrt(a*h),duration:e}}}const EE=["duration","bounce"],jE=["stiffness","damping","mass"];function qx(e,n){return n.some(i=>e[i]!==void 0)}function ME(e){let n={velocity:tt.velocity,stiffness:tt.stiffness,damping:tt.damping,mass:tt.mass,isResolvedFromDuration:!1,...e};if(!qx(e,jE)&&qx(e,EE))if(n.velocity=0,e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),s=a*a,c=2*Ln(.05,1,1-(e.bounce||0))*Math.sqrt(s);n={...n,mass:tt.mass,stiffness:s,damping:c}}else{const i=kE({...e,velocity:0});n={...n,...i,mass:tt.mass},n.isResolvedFromDuration=!0}return n}function Gl(e=tt.visualDuration,n=tt.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:a,restDelta:s}=i;const c=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],f={done:!1,value:c},{stiffness:m,damping:h,mass:y,duration:g,velocity:b,isResolvedFromDuration:v}=ME({...i,velocity:-pn(i.velocity||0)}),w=b||0,E=h/(2*Math.sqrt(m*y)),k=u-c,C=pn(Math.sqrt(m/y)),N=Math.abs(k)<5;a||(a=N?tt.restSpeed.granular:tt.restSpeed.default),s||(s=N?tt.restDelta.granular:tt.restDelta.default);let j,V,Y,_,q,X;if(E<1)Y=Id(C,E),_=(w+E*C*k)/Y,j=R=>{const Q=Math.exp(-E*C*R);return u-Q*(_*Math.sin(Y*R)+k*Math.cos(Y*R))},q=E*C*_+k*Y,X=E*C*k-_*Y,V=R=>Math.exp(-E*C*R)*(q*Math.sin(Y*R)+X*Math.cos(Y*R));else if(E===1){j=Q=>u-Math.exp(-C*Q)*(k+(w+C*k)*Q);const R=w+C*k;V=Q=>Math.exp(-C*Q)*(C*R*Q-w)}else{const R=C*Math.sqrt(E*E-1);j=se=>{const ne=Math.exp(-E*C*se),P=Math.min(R*se,300);return u-ne*((w+E*C*k)*Math.sinh(P)+R*k*Math.cosh(P))/R};const Q=(w+E*C*k)/R,te=E*C*Q-k*R,me=E*C*k-Q*R;V=se=>{const ne=Math.exp(-E*C*se),P=Math.min(R*se,300);return ne*(te*Math.sinh(P)+me*Math.cosh(P))}}const I={calculatedDuration:v&&g||null,velocity:R=>Ut(V(R)),next:R=>{if(!v&&E<1){const te=Math.exp(-E*C*R),me=Math.sin(Y*R),se=Math.cos(Y*R),ne=u-te*(_*me+k*se),P=Ut(te*(q*me+X*se));return f.done=Math.abs(P)<=a&&Math.abs(u-ne)<=s,f.value=f.done?u:ne,f}const Q=j(R);if(v)f.done=R>=g;else{const te=Ut(V(R));f.done=Math.abs(te)<=a&&Math.abs(u-Q)<=s}return f.value=f.done?u:Q,f},toString:()=>{const R=Math.min(Bh(I),nu),Q=H1(te=>I.next(R*te).value,R,30);return R+"ms "+Q},toTransition:()=>{}};return I}Gl.applyToOptions=e=>{const n=F1(e,100,Gl);return e.ease=n.ease,e.duration=Ut(n.duration),e.type="keyframes",e};const DE=5;function q1(e,n,i){const a=Math.max(n-DE,0);return v1(i-e(a),n-a)}function Ud({keyframes:e,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:m,restDelta:h=.5,restSpeed:y}){const g=e[0],b={done:!1,value:g},v=X=>f!==void 0&&X<f||m!==void 0&&X>m,w=X=>f===void 0?m:m===void 0||Math.abs(f-X)<Math.abs(m-X)?f:m;let E=i*n;const k=g+E,C=u===void 0?k:u(k);C!==k&&(E=C-g);const N=X=>-E*Math.exp(-X/a),j=X=>C+N(X),V=X=>{const I=N(X),R=j(X);b.done=Math.abs(I)<=h,b.value=b.done?C:R};let Y,_;const q=X=>{v(b.value)&&(Y=X,_=Gl({keyframes:[b.value,w(b.value)],velocity:q1(j,X,b.value),damping:s,stiffness:c,restDelta:h,restSpeed:y}))};return q(0),{calculatedDuration:null,next:X=>{let I=!1;return!_&&Y===void 0&&(I=!0,V(X),q(X)),Y!==void 0&&X>=Y?_.next(X-Y):(!I&&V(X),b)}}}function NE(e,n,i){const a=[],s=i||Vr.mix||U1,c=e.length-1;for(let u=0;u<c;u++){let f=s(e[u],e[u+1]);if(n){const m=Array.isArray(n)?n[u]||gn:n;f=ns(m,f)}a.push(f)}return a}function RE(e,n,{clamp:i=!0,ease:a,mixer:s}={}){const c=e.length;if(Mh(c===n.length),c===1)return()=>n[0];if(c===2&&n[0]===n[1])return()=>n[1];const u=e[0]===e[1];e[0]>e[c-1]&&(e=[...e].reverse(),n=[...n].reverse());const f=NE(n,a,s),m=f.length,h=y=>{if(u&&y<e[0])return n[0];let g=0;if(m>1)for(;g<e.length-2&&!(y<e[g+1]);g++);const b=pa(e[g],e[g+1],y);return f[g](b)};return i?y=>h(Ln(e[0],e[c-1],y)):h}function G1(e,n){const i=e[e.length-1];for(let a=1;a<=n;a++){const s=pa(0,n,a);e.push(Je(i,1,s))}}function Y1(e){const n=[0];return G1(n,e.length-1),n}function OE(e,n){return e.map(i=>i*n)}function _E(e,n){return e.map(()=>n||M1).splice(0,e.length-1)}function Ll({duration:e=300,keyframes:n,times:i,ease:a="easeInOut"}){const s=D1(a)?a.map(Vx):Vx(a),c={done:!1,value:n[0]},u=OE(i&&i.length===n.length?i:Y1(n),e),f=RE(u,n,{ease:Array.isArray(s)?s:_E(n,s)});return{calculatedDuration:e,next:m=>(c.value=f(m),c.done=m>=e,c)}}const LE=e=>e!==null;function gu(e,{repeat:n,repeatType:i="loop"},a,s=1){const c=e.filter(LE),f=s<0||n&&i!=="loop"&&n%2===1?0:c.length-1;return!f||a===void 0?c[f]:a}const zE={decay:Ud,inertia:Ud,tween:Ll,keyframes:Ll,spring:Gl};function X1(e){typeof e.type=="string"&&(e.type=zE[e.type])}class Vh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const BE=e=>e/100;class ru extends Vh{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==Mt.now()&&this.tick(Mt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;X1(n);const{type:i=Ll,repeat:a=0,repeatDelay:s=0,repeatType:c,velocity:u=0}=n;let{keyframes:f}=n;const m=i||Ll;m!==Ll&&typeof f[0]!="number"&&(this.mixKeyframes=ns(BE,U1(f[0],f[1])),f=[0,100]);const h=m({...n,keyframes:f});c==="mirror"&&(this.mirroredGenerator=m({...n,keyframes:[...f].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=Bh(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+s,this.totalDuration=this.resolvedDuration*(a+1)-s,this.generator=h}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:s,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:m}=this;if(this.startTime===null)return a.next(0);const{delay:h=0,keyframes:y,repeat:g,repeatType:b,repeatDelay:v,type:w,onUpdate:E,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-s/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const C=this.currentTime-h*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?C<0:C>s;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let j=this.currentTime,V=a;if(g){const X=Math.min(this.currentTime,s)/f;let I=Math.floor(X),R=X%1;!R&&X>=1&&(R=1),R===1&&I--,I=Math.min(I,g+1),!!(I%2)&&(b==="reverse"?(R=1-R,v&&(R-=v/f)):b==="mirror"&&(V=u)),j=Ln(0,1,R)*f}let Y;N?(this.delayState.value=y[0],Y=this.delayState):Y=V.next(j),c&&!N&&(Y.value=c(Y.value));let{done:_}=Y;!N&&m!==null&&(_=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&_);return q&&w!==Ud&&(Y.value=gu(y,this.options,k,this.speed)),E&&E(Y.value),q&&this.finish(),Y}then(n,i){return this.finished.then(n,i)}get duration(){return pn(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+pn(n)}get time(){return pn(this.currentTime)}set time(n){n=Ut(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return q1(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(Mt.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=pn(this.currentTime))}play(){if(this.isStopped)return;const{driver:n=TE,startTime:i}=this.options;this.driver||(this.driver=n(s=>this.tick(s))),this.options.onPlay?.();const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Mt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),n.observe(this)}}function VE(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const fi=e=>e*180/Math.PI,Hd=e=>{const n=fi(Math.atan2(e[1],e[0]));return Fd(n)},PE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Hd,rotateZ:Hd,skewX:e=>fi(Math.atan(e[1])),skewY:e=>fi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Fd=e=>(e=e%360,e<0&&(e+=360),e),Gx=Hd,Yx=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Xx=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),IE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Yx,scaleY:Xx,scale:e=>(Yx(e)+Xx(e))/2,rotateX:e=>Fd(fi(Math.atan2(e[6],e[5]))),rotateY:e=>Fd(fi(Math.atan2(-e[2],e[0]))),rotateZ:Gx,rotate:Gx,skewX:e=>fi(Math.atan(e[4])),skewY:e=>fi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function qd(e){return e.includes("scale")?1:0}function Gd(e,n){if(!e||e==="none")return qd(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,s;if(i)a=IE,s=i;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=PE,s=f}if(!s)return qd(n);const c=a[n],u=s[1].split(",").map(HE);return typeof c=="function"?c(u):u[c]}const UE=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return Gd(i,n)};function HE(e){return parseFloat(e.trim())}const Ca=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Aa=new Set(Ca),Jx=e=>e===Ta||e===ce,FE=new Set(["x","y","z"]),qE=Ca.filter(e=>!FE.has(e));function GE(e){const n=[];return qE.forEach(i=>{const a=e.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Br={width:({x:e},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const s=e.max-e.min;return a==="border-box"?s:s-parseFloat(n)-parseFloat(i)},height:({y:e},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const s=e.max-e.min;return a==="border-box"?s:s-parseFloat(n)-parseFloat(i)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Gd(n,"x"),y:(e,{transform:n})=>Gd(n,"y")};Br.translateX=Br.x;Br.translateY=Br.y;const di=new Set;let Yd=!1,Xd=!1,Jd=!1;function J1(){if(Xd){const e=Array.from(di).filter(a=>a.needsMeasurement),n=new Set(e.map(a=>a.element)),i=new Map;n.forEach(a=>{const s=GE(a);s.length&&(i.set(a,s),a.render())}),e.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const s=i.get(a);s&&s.forEach(([c,u])=>{a.getValue(c)?.set(u)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Xd=!1,Yd=!1,di.forEach(e=>e.complete(Jd)),di.clear()}function K1(){di.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Xd=!0)})}function YE(){Jd=!0,K1(),J1(),Jd=!1}class Ph{constructor(n,i,a,s,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=s,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(di.add(this),Yd||(Yd=!0,Ge.read(K1),Ge.resolveKeyframes(J1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:s}=this;if(n[0]===null){const c=s?.get(),u=n[n.length-1];if(c!==void 0)n[0]=c;else if(a&&i){const f=a.readValue(i,u);f!=null&&(n[0]=f)}n[0]===void 0&&(n[0]=u),s&&c===void 0&&s.set(n[0])}VE(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),di.delete(this)}cancel(){this.state==="scheduled"&&(di.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const XE=e=>e.startsWith("--");function Q1(e,n,i){XE(n)?e.style.setProperty(n,i):e.style[n]=i}const JE={};function Z1(e,n){const i=b1(e);return()=>JE[n]??i()}const KE=Z1(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),W1=Z1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ol=([e,n,i,a])=>`cubic-bezier(${e}, ${n}, ${i}, ${a})`,Kx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ol([0,.65,.55,1]),circOut:Ol([.55,0,1,.45]),backIn:Ol([.31,.01,.66,-.59]),backOut:Ol([.33,1.53,.69,.99])};function $1(e,n){if(e)return typeof e=="function"?W1()?H1(e,n):"ease-out":R1(e)?Ol(e):Array.isArray(e)?e.map(i=>$1(i,n)||Kx.easeOut):Kx[e]}function QE(e,n,i,{delay:a=0,duration:s=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:m}={},h=void 0){const y={[n]:i};m&&(y.offset=m);const g=$1(f,s);Array.isArray(g)&&(y.easing=g);const b={delay:a,duration:s,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return h&&(b.pseudoElement=h),e.animate(y,b)}function Ih(e){return typeof e=="function"&&"applyToOptions"in e}function ZE({type:e,...n}){return Ih(e)&&W1()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class ev extends Vh{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:s,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:m}=n;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=n,Mh(typeof n.type!="string");const h=ZE(n);this.animation=QE(i,a,s,h,c),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=gu(s,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(y),Q1(i,a,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const n=this.options?.element;!this.isPseudoElement&&n?.isConnected&&this.animation.commitStyles?.()}get duration(){const n=this.animation.effect?.getComputedTiming?.().duration||0;return pn(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+pn(n)}get time(){return pn(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ut(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,n&&KE()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),gn):s(this)}}const tv={anticipate:k1,backInOut:A1,circInOut:j1};function WE(e){return e in tv}function $E(e){typeof e.ease=="string"&&WE(e.ease)&&(e.ease=tv[e.ease])}const ad=10;class ej extends ev{constructor(n){$E(n),X1(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:s,element:c,...u}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const f=new ru({...u,autoplay:!1}),m=Math.max(ad,Mt.now()-this.startTime),h=Ln(0,ad,m-ad),y=f.sample(m).value,{name:g}=this.options;c&&g&&Q1(c,g,y),i.setWithVelocity(f.sample(Math.max(0,m-h)).value,y,h),f.stop()}}const Qx=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Tn.test(e)||e==="0")&&!e.startsWith("url("));function tj(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function nj(e,n,i,a){const s=e[0];if(s===null)return!1;if(n==="display"||n==="visibility")return!0;const c=e[e.length-1],u=Qx(s,n),f=Qx(c,n);return!u||!f?!1:tj(e)||(i==="spring"||Ih(i))&&a}function Kd(e){e.duration=0,e.type="keyframes"}const nv=new Set(["opacity","clipPath","filter","transform"]),rj=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function ij(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&rj.test(e[n]))return!0;return!1}const aj=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),lj=b1(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function sj(e){const{motionValue:n,name:i,repeatDelay:a,repeatType:s,damping:c,type:u,keyframes:f}=e;if(!(n?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:y}=n.owner.getProps();return lj()&&i&&(nv.has(i)||aj.has(i)&&ij(f))&&(i!=="transform"||!y)&&!h&&!a&&s!=="mirror"&&c!==0&&u!=="inertia"}const oj=40;class uj extends Vh{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:s=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:m,motionValue:h,element:y,...g}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Mt.now();const b={autoplay:n,delay:i,type:a,repeat:s,repeatDelay:c,repeatType:u,name:m,motionValue:h,element:y,...g},v=y?.KeyframeResolver||Ph;this.keyframeResolver=new v(f,(w,E,k)=>this.onKeyframesResolved(w,E,b,!k),m,h,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(n,i,a,s){this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:m,isHandoff:h,onUpdate:y}=a;this.resolvedAt=Mt.now();let g=!0;nj(n,c,u,f)||(g=!1,(Vr.instantAnimations||!m)&&y?.(gu(n,a,i)),n[0]=n[n.length-1],Kd(a),a.repeat=0);const v={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>oj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},w=g&&!h&&sj(v),E=v.motionValue?.owner?.current;let k;if(w)try{k=new ej({...v,element:E})}catch{k=new ru(v)}else k=new ru(v);k.finished.then(()=>{this.notifyFinished()}).catch(gn),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),YE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}class cj{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>n.finished))}getAll(n){return this.animations[0][n]}setAll(n,i){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=i}attachTimeline(n){const i=this.animations.map(a=>a.attachTimeline(n));return()=>{i.forEach((a,s)=>{a&&a(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return Zx(this.animations,"duration")}get iterationDuration(){return Zx(this.animations,"iterationDuration")}runAll(n){this.animations.forEach(i=>i[n]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Zx(e,n){let i=0;for(let a=0;a<e.length;a++){const s=e[a][n];s!==null&&s>i&&(i=s)}return i}class fj extends cj{then(n,i){return this.finished.finally(n).then(()=>{})}}function rv(e,n,i,a=0,s=1){const c=Array.from(e).sort((h,y)=>h.sortNodePosition(y)).indexOf(n),u=e.size,f=(u-1)*a;return typeof i=="function"?i(c,u):s===1?c*a:f-c*a}const dj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function hj(e){const n=dj.exec(e);if(!n)return[,];const[,i,a,s]=n;return[`--${i??a}`,s]}function iv(e,n,i=1){const[a,s]=hj(e);if(!a)return;const c=window.getComputedStyle(n).getPropertyValue(a);if(c){const u=c.trim();return g1(u)?parseFloat(u):u}return Oh(s)?iv(s,n,i+1):s}const mj={type:"spring",stiffness:500,damping:25,restSpeed:10},pj=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),gj={type:"keyframes",duration:.8},yj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},xj=(e,{keyframes:n})=>n.length>2?gj:Aa.has(e)?e.startsWith("scale")?pj(n[1]):mj:yj;function av(e,n){if(e?.inherit&&n){const{inherit:i,...a}=e;return{...n,...a}}return e}function Uh(e,n){const i=e?.[n]??e?.default??e;return i!==e?av(i,e):i}const bj=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function vj(e){for(const n in e)if(!bj.has(n))return!0;return!1}const Hh=(e,n,i,a={},s,c)=>u=>{const f=Uh(a,e)||{},m=f.delay||a.delay||0;let{elapsed:h=0}=a;h=h-Ut(m);const y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...f,delay:-h,onUpdate:b=>{n.set(b),f.onUpdate&&f.onUpdate(b)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:e,motionValue:n,element:c?void 0:s};vj(f)||Object.assign(y,xj(e,y)),y.duration&&(y.duration=Ut(y.duration)),y.repeatDelay&&(y.repeatDelay=Ut(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let g=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Kd(y),y.delay===0&&(g=!0)),(Vr.instantAnimations||Vr.skipAnimations||s?.shouldSkipAnimations)&&(g=!0,Kd(y),y.delay=0),y.allowFlatten=!f.type&&!f.ease,g&&!c&&n.get()!==void 0){const b=gu(y.keyframes,f);if(b!==void 0){Ge.update(()=>{y.onUpdate(b),y.onComplete()});return}}return f.isSync?new ru(y):new uj(y)};function Wx(e){const n=[{},{}];return e?.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Fh(e,n,i,a){if(typeof n=="function"){const[s,c]=Wx(a);n=n(i!==void 0?i:e.custom,s,c)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[s,c]=Wx(a);n=n(i!==void 0?i:e.custom,s,c)}return n}function hi(e,n,i){const a=e.getProps();return Fh(a,n,i!==void 0?i:a.custom,e)}const lv=new Set(["width","height","top","left","right","bottom",...Ca]),$x=30,Sj=e=>!isNaN(parseFloat(e));class wj{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{const s=Mt.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Mt.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=Sj(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Dh);const a=this.events[n].add(i);return n==="change"?()=>{a(),Ge.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=Mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>$x)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,$x);return v1(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function mi(e,n){return new wj(e,n)}const Qd=e=>Array.isArray(e);function Tj(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,mi(i))}function Cj(e){return Qd(e)?e[e.length-1]||0:e}function Aj(e,n){const i=hi(e,n);let{transitionEnd:a={},transition:s={},...c}=i||{};c={...c,...a};for(const u in c){const f=Cj(c[u]);Tj(e,u,f)}}const ht=e=>!!(e&&e.getVelocity);function kj(e){return!!(ht(e)&&e.add)}function Zd(e,n){const i=e.getValue("willChange");if(kj(i))return i.add(n);if(!i&&Vr.WillChange){const a=new Vr.WillChange("auto");e.addValue("willChange",a),a.add(n)}}function qh(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const Ej="framerAppearId",sv="data-"+qh(Ej);function ov(e){return e.props[sv]}function jj({protectedKeys:e,needsAnimating:n},i){const a=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function Gh(e,n,{delay:i=0,transitionOverride:a,type:s}={}){let{transition:c,transitionEnd:u,...f}=n;const m=e.getDefaultTransition();c=c?av(c,m):m;const h=c?.reduceMotion;a&&(c=a);const y=[],g=s&&e.animationState&&e.animationState.getState()[s];for(const b in f){const v=e.getValue(b,e.latestValues[b]??null),w=f[b];if(w===void 0||g&&jj(g,b))continue;const E={delay:i,...Uh(c||{},b)},k=v.get();if(k!==void 0&&!v.isAnimating()&&!Array.isArray(w)&&w===k&&!E.velocity){Ge.update(()=>v.set(w));continue}let C=!1;if(window.MotionHandoffAnimation){const V=ov(e);if(V){const Y=window.MotionHandoffAnimation(V,b,Ge);Y!==null&&(E.startTime=Y,C=!0)}}Zd(e,b);const N=h??e.shouldReduceMotion;v.start(Hh(b,v,w,N&&lv.has(b)?{type:!1}:E,e,C));const j=v.animation;j&&y.push(j)}if(u){const b=()=>Ge.update(()=>{u&&Aj(e,u)});y.length?Promise.all(y).then(b):b()}return y}function Wd(e,n,i={}){const a=hi(e,n,i.type==="exit"?e.presenceContext?.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(s=i.transitionOverride);const c=a?()=>Promise.all(Gh(e,a,i)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:g}=s;return Mj(e,n,m,h,y,g,i)}:()=>Promise.resolve(),{when:f}=s;if(f){const[m,h]=f==="beforeChildren"?[c,u]:[u,c];return m().then(()=>h())}else return Promise.all([c(),u(i.delay)])}function Mj(e,n,i=0,a=0,s=0,c=1,u){const f=[];for(const m of e.variantChildren)m.notify("AnimationStart",n),f.push(Wd(m,n,{...u,delay:i+(typeof a=="function"?0:a)+rv(e.variantChildren,m,a,s,c)}).then(()=>m.notify("AnimationComplete",n)));return Promise.all(f)}function Dj(e,n,i={}){e.notify("AnimationStart",n);let a;if(Array.isArray(n)){const s=n.map(c=>Wd(e,c,i));a=Promise.all(s)}else if(typeof n=="string")a=Wd(e,n,i);else{const s=typeof n=="function"?hi(e,n,i.custom):n;a=Promise.all(Gh(e,s,i))}return a.then(()=>{e.notify("AnimationComplete",n)})}const Nj={test:e=>e==="auto",parse:e=>e},uv=e=>n=>n.test(e),cv=[Ta,ce,_n,zr,iE,rE,Nj],e0=e=>cv.find(uv(e));function Rj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||x1(e):!0}const Oj=new Set(["brightness","contrast","saturate","opacity"]);function _j(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=i.match(_h)||[];if(!a)return e;const s=i.replace(a,"");let c=Oj.has(n)?1:0;return a!==i&&(c*=100),n+"("+c+s+")"}const Lj=/\b([a-z-]*)\(.*?\)/gu,$d={...Tn,getAnimatableNone:e=>{const n=e.match(Lj);return n?n.map(_j).join(" "):e}},eh={...Tn,getAnimatableNone:e=>{const n=Tn.parse(e);return Tn.createTransformer(e)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},t0={...Ta,transform:Math.round},zj={rotate:zr,rotateX:zr,rotateY:zr,rotateZ:zr,scale:Ro,scaleX:Ro,scaleY:Ro,scaleZ:Ro,skew:zr,skewX:zr,skewY:zr,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:ql,originX:Ix,originY:Ix,originZ:ce},Yh={borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,top:ce,right:ce,bottom:ce,left:ce,inset:ce,insetBlock:ce,insetBlockStart:ce,insetBlockEnd:ce,insetInline:ce,insetInlineStart:ce,insetInlineEnd:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,paddingBlock:ce,paddingBlockStart:ce,paddingBlockEnd:ce,paddingInline:ce,paddingInlineStart:ce,paddingInlineEnd:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,marginBlock:ce,marginBlockStart:ce,marginBlockEnd:ce,marginInline:ce,marginInlineStart:ce,marginInlineEnd:ce,fontSize:ce,backgroundPositionX:ce,backgroundPositionY:ce,...zj,zIndex:t0,fillOpacity:ql,strokeOpacity:ql,numOctaves:t0},Bj={...Yh,color:ct,backgroundColor:ct,outlineColor:ct,fill:ct,stroke:ct,borderColor:ct,borderTopColor:ct,borderRightColor:ct,borderBottomColor:ct,borderLeftColor:ct,filter:$d,WebkitFilter:$d,mask:eh,WebkitMask:eh},fv=e=>Bj[e],Vj=new Set([$d,eh]);function dv(e,n){let i=fv(e);return Vj.has(i)||(i=Tn),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const Pj=new Set(["auto","none","0"]);function Ij(e,n,i){let a=0,s;for(;a<e.length&&!s;){const c=e[a];typeof c=="string"&&!Pj.has(c)&&ga(c).values.length&&(s=e[a]),a++}if(s&&i)for(const c of n)e[c]=dv(i,s)}class Uj extends Ph{constructor(n,i,a,s,c){super(n,i,a,s,c,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let y=0;y<n.length;y++){let g=n[y];if(typeof g=="string"&&(g=g.trim(),Oh(g))){const b=iv(g,i.current);b!==void 0&&(n[y]=b),y===n.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!lv.has(a)||n.length!==2)return;const[s,c]=n,u=e0(s),f=e0(c),m=Px(s),h=Px(c);if(m!==h&&Br[a]){this.needsMeasurement=!0;return}if(u!==f)if(Jx(u)&&Jx(f))for(let y=0;y<n.length;y++){const g=n[y];typeof g=="string"&&(n[y]=parseFloat(g))}else Br[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let s=0;s<n.length;s++)(n[s]===null||Rj(n[s]))&&a.push(s);a.length&&Ij(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Br[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const s=i[i.length-1];s!==void 0&&n.getValue(a,s).jump(s,!1)}measureEndState(){const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const c=a.length-1,u=a[c];a[c]=Br[i](n.measureViewportBox(),window.getComputedStyle(n.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,m])=>{n.getValue(f).set(m)}),this.resolveNoneKeyframes()}}function Xh(e,n,i){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let a=document;n&&(a=n.current);const s=i?.[e]??a.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e).filter(a=>a!=null)}const hv=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function Fo(e){return y1(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Jh}=O1(queueMicrotask,!1),wn={x:!1,y:!1};function mv(){return wn.x||wn.y}function Hj(e){return e==="x"||e==="y"?wn[e]?null:(wn[e]=!0,()=>{wn[e]=!1}):wn.x||wn.y?null:(wn.x=wn.y=!0,()=>{wn.x=wn.y=!1})}function pv(e,n){const i=Xh(e),a=new AbortController,s={passive:!0,...n,signal:a.signal};return[i,s,()=>a.abort()]}function Fj(e){return!(e.pointerType==="touch"||mv())}function qj(e,n,i={}){const[a,s,c]=pv(e,i);return a.forEach(u=>{let f=!1,m=!1,h;const y=()=>{u.removeEventListener("pointerleave",w)},g=k=>{h&&(h(k),h=void 0),y()},b=k=>{f=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),m&&(m=!1,g(k))},v=()=>{f=!0,window.addEventListener("pointerup",b,s),window.addEventListener("pointercancel",b,s)},w=k=>{if(k.pointerType!=="touch"){if(f){m=!0;return}g(k)}},E=k=>{if(!Fj(k))return;m=!1;const C=n(u,k);typeof C=="function"&&(h=C,u.addEventListener("pointerleave",w,s))};u.addEventListener("pointerenter",E,s),u.addEventListener("pointerdown",v,s)}),c}const gv=(e,n)=>n?e===n?!0:gv(e,n.parentElement):!1,Kh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Gj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Yj(e){return Gj.has(e.tagName)||e.isContentEditable===!0}const Xj=new Set(["INPUT","SELECT","TEXTAREA"]);function Jj(e){return Xj.has(e.tagName)||e.isContentEditable===!0}const qo=new WeakSet;function n0(e){return n=>{n.key==="Enter"&&e(n)}}function ld(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const Kj=(e,n)=>{const i=e.currentTarget;if(!i)return;const a=n0(()=>{if(qo.has(i))return;ld(i,"down");const s=n0(()=>{ld(i,"up")}),c=()=>ld(i,"cancel");i.addEventListener("keyup",s,n),i.addEventListener("blur",c,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function r0(e){return Kh(e)&&!mv()}const i0=new WeakSet;function Qj(e,n,i={}){const[a,s,c]=pv(e,i),u=f=>{const m=f.currentTarget;if(!r0(f)||i0.has(f))return;qo.add(m),i.stopPropagation&&i0.add(f);const h=n(m,f),y=(v,w)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",b),qo.has(m)&&qo.delete(m),r0(v)&&typeof h=="function"&&h(v,{success:w})},g=v=>{y(v,m===window||m===document||i.useGlobalTarget||gv(m,v.target))},b=v=>{y(v,!1)};window.addEventListener("pointerup",g,s),window.addEventListener("pointercancel",b,s)};return a.forEach(f=>{(i.useGlobalTarget?window:f).addEventListener("pointerdown",u,s),Fo(f)&&(f.addEventListener("focus",h=>Kj(h,s)),!Yj(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function yu(e){return y1(e)&&"ownerSVGElement"in e}const Go=new WeakMap;let Yo;const yv=(e,n,i)=>(a,s)=>s&&s[0]?s[0][e+"Size"]:yu(a)&&"getBBox"in a?a.getBBox()[n]:a[i],Zj=yv("inline","width","offsetWidth"),Wj=yv("block","height","offsetHeight");function $j({target:e,borderBoxSize:n}){Go.get(e)?.forEach(i=>{i(e,{get width(){return Zj(e,n)},get height(){return Wj(e,n)}})})}function eM(e){e.forEach($j)}function tM(){typeof ResizeObserver>"u"||(Yo=new ResizeObserver(eM))}function nM(e,n){Yo||tM();const i=Xh(e);return i.forEach(a=>{let s=Go.get(a);s||(s=new Set,Go.set(a,s)),s.add(n),Yo?.observe(a)}),()=>{i.forEach(a=>{const s=Go.get(a);s?.delete(n),s?.size||Yo?.unobserve(a)})}}const Xo=new Set;let fa;function rM(){fa=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Xo.forEach(n=>n(e))},window.addEventListener("resize",fa)}function iM(e){return Xo.add(e),fa||rM(),()=>{Xo.delete(e),!Xo.size&&typeof fa=="function"&&(window.removeEventListener("resize",fa),fa=void 0)}}function a0(e,n){return typeof e=="function"?iM(e):nM(e,n)}function xv(e){return yu(e)&&e.tagName==="svg"}const aM=[...cv,ct,Tn],lM=e=>aM.find(uv(e)),l0=()=>({translate:0,scale:1,origin:0,originPoint:0}),da=()=>({x:l0(),y:l0()}),s0=()=>({min:0,max:0}),ot=()=>({x:s0(),y:s0()}),Yl=new WeakMap;function xu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Xl(e){return typeof e=="string"||Array.isArray(e)}const Qh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zh=["initial",...Qh];function bu(e){return xu(e.animate)||Zh.some(n=>Xl(e[n]))}function bv(e){return!!(bu(e)||e.variants)}function sM(e,n,i){for(const a in n){const s=n[a],c=i[a];if(ht(s))e.addValue(a,s);else if(ht(c))e.addValue(a,mi(s,{owner:e}));else if(c!==s)if(e.hasValue(a)){const u=e.getValue(a);u.liveStyle===!0?u.jump(s):u.hasAnimated||u.set(s)}else{const u=e.getStaticValue(a);e.addValue(a,mi(u!==void 0?u:s,{owner:e}))}}for(const a in i)n[a]===void 0&&e.removeValue(a);return n}const th={current:null},vv={current:!1},oM=typeof window<"u";function uM(){if(vv.current=!0,!!oM)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>th.current=e.matches;e.addEventListener("change",n),n()}else th.current=!1}const o0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let iu={};function Sv(e){iu=e}function cM(){return iu}class wv{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:s,skipAnimations:c,blockInitialAnimation:u,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ph,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Mt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Ge.render(this.render,!1,!0))};const{latestValues:h,renderState:y}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=y,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=c,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=bu(i),this.isVariantNode=bv(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:g,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in b){const w=b[v];h[v]!==void 0&&ht(w)&&w.set(h[v])}}mount(n){if(this.hasBeenMounted)for(const i in this.initialValues)this.values.get(i)?.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=n,Yl.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,a)=>this.bindToMotionValue(a,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(vv.current||uM(),this.shouldReduceMotion=th.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Pr(this.notifyUpdate),Pr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&nv.has(n)&&this.current instanceof HTMLElement){const{factory:u,keyframes:f,times:m,ease:h,duration:y}=i.accelerate,g=new ev({element:this.current,name:n,keyframes:f,times:m,ease:h,duration:Ut(y)}),b=u(g);this.valueSubscriptions.set(n,()=>{b(),g.cancel()});return}const a=Aa.has(n);a&&this.onBindTransform&&this.onBindTransform();const s=i.on("change",u=>{this.latestValues[n]=u,this.props.onUpdate&&Ge.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{s(),c&&c(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in iu){const i=iu[n];if(!i)continue;const{isEnabled:a,Feature:s}=i;if(!this.features[n]&&s&&a(this.props)&&(this.features[n]=new s(this)),this.features[n]){const c=this.features[n];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ot()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<o0.length;a++){const s=o0[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const c="on"+s,u=n[c];u&&(this.propEventSubscriptions[s]=this.on(s,u))}this.prevMotionValues=sM(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=mi(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(g1(a)||x1(a))?a=parseFloat(a):!lM(a)&&Tn.test(i)&&(a=dv(n,i)),this.setBaseTarget(n,ht(a)?a.get():a)),ht(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const c=Fh(this.props,i,this.presenceContext?.custom);c&&(a=c[n])}if(i&&a!==void 0)return a;const s=this.getBaseTargetFromProps(this.props,n);return s!==void 0&&!ht(s)?s:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Dh),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Jh.render(this.render)}}class Tv extends wv{constructor(){super(...arguments),this.KeyframeResolver=Uj}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;ht(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Ir{constructor(n){this.isMounted=!1,this.node=n}update(){}}function Cv({top:e,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:e,max:a}}}function fM({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function dM(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),a=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function sd(e){return e===void 0||e===1}function nh({scale:e,scaleX:n,scaleY:i}){return!sd(e)||!sd(n)||!sd(i)}function oi(e){return nh(e)||Av(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Av(e){return u0(e.x)||u0(e.y)}function u0(e){return e&&e!=="0%"}function au(e,n,i){const a=e-i,s=n*a;return i+s}function c0(e,n,i,a,s){return s!==void 0&&(e=au(e,s,a)),au(e,i,a)+n}function rh(e,n=0,i=1,a,s){e.min=c0(e.min,n,i,a,s),e.max=c0(e.max,n,i,a,s)}function kv(e,{x:n,y:i}){rh(e.x,n.translate,n.scale,n.originPoint),rh(e.y,i.translate,i.scale,i.originPoint)}const f0=.999999999999,d0=1.0000000000001;function hM(e,n,i,a=!1){const s=i.length;if(!s)return;n.x=n.y=1;let c,u;for(let f=0;f<s;f++){c=i[f],u=c.projectionDelta;const{visualElement:m}=c.options;m&&m.props.style&&m.props.style.display==="contents"||(a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&(On(e.x,-c.scroll.offset.x),On(e.y,-c.scroll.offset.y)),u&&(n.x*=u.x.scale,n.y*=u.y.scale,kv(e,u)),a&&oi(c.latestValues)&&Jo(e,c.latestValues,c.layout?.layoutBox))}n.x<d0&&n.x>f0&&(n.x=1),n.y<d0&&n.y>f0&&(n.y=1)}function On(e,n){e.min+=n,e.max+=n}function h0(e,n,i,a,s=.5){const c=Je(e.min,e.max,s);rh(e,n,i,c,a)}function m0(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function Jo(e,n,i){const a=i??e;h0(e.x,m0(n.x,a.x),n.scaleX,n.scale,n.originX),h0(e.y,m0(n.y,a.y),n.scaleY,n.scale,n.originY)}function Ev(e,n){return Cv(dM(e.getBoundingClientRect(),n))}function mM(e,n,i){const a=Ev(e,i),{scroll:s}=n;return s&&(On(a.x,s.offset.x),On(a.y,s.offset.y)),a}const pM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},gM=Ca.length;function yM(e,n,i){let a="",s=!0;for(let c=0;c<gM;c++){const u=Ca[c],f=e[u];if(f===void 0)continue;let m=!0;if(typeof f=="number")m=f===(u.startsWith("scale")?1:0);else{const h=parseFloat(f);m=u.startsWith("scale")?h===1:h===0}if(!m||i){const h=hv(f,Yh[u]);if(!m){s=!1;const y=pM[u]||u;a+=`${y}(${h}) `}i&&(n[u]=h)}}return a=a.trim(),i?a=i(n,s?"":a):s&&(a="none"),a}function Wh(e,n,i){const{style:a,vars:s,transformOrigin:c}=e;let u=!1,f=!1;for(const m in n){const h=n[m];if(Aa.has(m)){u=!0;continue}else if(L1(m)){s[m]=h;continue}else{const y=hv(h,Yh[m]);m.startsWith("origin")?(f=!0,c[m]=y):a[m]=y}}if(n.transform||(u||i?a.transform=yM(n,e.transform,i):a.transform&&(a.transform="none")),f){const{originX:m="50%",originY:h="50%",originZ:y=0}=c;a.transformOrigin=`${m} ${h} ${y}`}}function jv(e,{style:n,vars:i},a,s){const c=e.style;let u;for(u in n)c[u]=n[u];s?.applyProjectionStyles(c,a);for(u in i)c.setProperty(u,i[u])}function p0(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const kl={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(ce.test(e))e=parseFloat(e);else return e;const i=p0(e,n.target.x),a=p0(e,n.target.y);return`${i}% ${a}%`}},xM={correct:(e,{treeScale:n,projectionDelta:i})=>{const a=e,s=Tn.parse(e);if(s.length>5)return a;const c=Tn.createTransformer(e),u=typeof s[0]!="number"?1:0,f=i.x.scale*n.x,m=i.y.scale*n.y;s[0+u]/=f,s[1+u]/=m;const h=Je(f,m,.5);return typeof s[2+u]=="number"&&(s[2+u]/=h),typeof s[3+u]=="number"&&(s[3+u]/=h),c(s)}},ih={borderRadius:{...kl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:kl,borderTopRightRadius:kl,borderBottomLeftRadius:kl,borderBottomRightRadius:kl,boxShadow:xM};function Mv(e,{layout:n,layoutId:i}){return Aa.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!ih[e]||e==="opacity")}function $h(e,n,i){const a=e.style,s=n?.style,c={};if(!a)return c;for(const u in a)(ht(a[u])||s&&ht(s[u])||Mv(u,e)||i?.getValue(u)?.liveStyle!==void 0)&&(c[u]=a[u]);return c}function bM(e){return window.getComputedStyle(e)}class Dv extends Tv{constructor(){super(...arguments),this.type="html",this.renderInstance=jv}readValueFromInstance(n,i){if(Aa.has(i))return this.projection?.isProjecting?qd(i):UE(n,i);{const a=bM(n),s=(L1(i)?a.getPropertyValue(i):a[i])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(n,{transformPagePoint:i}){return Ev(n,i)}build(n,i,a){Wh(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return $h(n,i,a)}}function vM(e,n){return e in n}class SM extends wv{constructor(){super(...arguments),this.type="object"}readValueFromInstance(n,i){if(vM(i,n)){const a=n[i];if(typeof a=="string"||typeof a=="number")return a}}getBaseTargetFromProps(){}removeValueFromRenderState(n,i){delete i.output[n]}measureInstanceViewportBox(){return ot()}build(n,i){Object.assign(n.output,i)}renderInstance(n,{output:i}){Object.assign(n,i)}sortInstanceNodePosition(){return 0}}const wM={offset:"stroke-dashoffset",array:"stroke-dasharray"},TM={offset:"strokeDashoffset",array:"strokeDasharray"};function CM(e,n,i=1,a=0,s=!0){e.pathLength=1;const c=s?wM:TM;e[c.offset]=`${-a}`,e[c.array]=`${n} ${i}`}const AM=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Nv(e,{attrX:n,attrY:i,attrScale:a,pathLength:s,pathSpacing:c=1,pathOffset:u=0,...f},m,h,y){if(Wh(e,f,h),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:b}=e;g.transform&&(b.transform=g.transform,delete g.transform),(b.transform||g.transformOrigin)&&(b.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),b.transform&&(b.transformBox=y?.transformBox??"fill-box",delete g.transformBox);for(const v of AM)g[v]!==void 0&&(b[v]=g[v],delete g[v]);n!==void 0&&(g.x=n),i!==void 0&&(g.y=i),a!==void 0&&(g.scale=a),s!==void 0&&CM(g,s,c,u,!1)}const Rv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ov=e=>typeof e=="string"&&e.toLowerCase()==="svg";function kM(e,n,i,a){jv(e,n,void 0,a);for(const s in n.attrs)e.setAttribute(Rv.has(s)?s:qh(s),n.attrs[s])}function _v(e,n,i){const a=$h(e,n,i);for(const s in e)if(ht(e[s])||ht(n[s])){const c=Ca.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[c]=e[s]}return a}class Lv extends Tv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ot}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Aa.has(i)){const a=fv(i);return a&&a.default||0}return i=Rv.has(i)?i:qh(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return _v(n,i,a)}build(n,i,a){Nv(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,s){kM(n,i,a,s)}mount(n){this.isSVGTag=Ov(n.tagName),super.mount(n)}}const EM=Zh.length;function zv(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?zv(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<EM;i++){const a=Zh[i],s=e.props[a];(Xl(s)||s===!1)&&(n[a]=s)}return n}function Bv(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(n[a]!==e[a])return!1;return!0}const jM=[...Qh].reverse(),MM=Qh.length;function DM(e){return n=>Promise.all(n.map(({animation:i,options:a})=>Dj(e,i,a)))}function NM(e){let n=DM(e),i=g0(),a=!0,s=!1;const c=h=>(y,g)=>{const b=hi(e,g,h==="exit"?e.presenceContext?.custom:void 0);if(b){const{transition:v,transitionEnd:w,...E}=b;y={...y,...E,...w}}return y};function u(h){n=h(e)}function f(h){const{props:y}=e,g=zv(e.parent)||{},b=[],v=new Set;let w={},E=1/0;for(let C=0;C<MM;C++){const N=jM[C],j=i[N],V=y[N]!==void 0?y[N]:g[N],Y=Xl(V),_=N===h?j.isActive:null;_===!1&&(E=C);let q=V===g[N]&&V!==y[N]&&Y;if(q&&(a||s)&&e.manuallyAnimateOnMount&&(q=!1),j.protectedKeys={...w},!j.isActive&&_===null||!V&&!j.prevProp||xu(V)||typeof V=="boolean")continue;if(N==="exit"&&j.isActive&&_!==!0){j.prevResolvedValues&&(w={...w,...j.prevResolvedValues});continue}const X=RM(j.prevProp,V);let I=X||N===h&&j.isActive&&!q&&Y||C>E&&Y,R=!1;const Q=Array.isArray(V)?V:[V];let te=Q.reduce(c(N),{});_===!1&&(te={});const{prevResolvedValues:me={}}=j,se={...me,...te},ne=ie=>{I=!0,v.has(ie)&&(R=!0,v.delete(ie)),j.needsAnimating[ie]=!0;const oe=e.getValue(ie);oe&&(oe.liveStyle=!1)};for(const ie in se){const oe=te[ie],D=me[ie];if(w.hasOwnProperty(ie))continue;let L=!1;Qd(oe)&&Qd(D)?L=!Bv(oe,D):L=oe!==D,L?oe!=null?ne(ie):v.add(ie):oe!==void 0&&v.has(ie)?ne(ie):j.protectedKeys[ie]=!0}j.prevProp=V,j.prevResolvedValues=te,j.isActive&&(w={...w,...te}),(a||s)&&e.blockInitialAnimation&&(I=!1);const P=q&&X;I&&(!P||R)&&b.push(...Q.map(ie=>{const oe={type:N};if(typeof ie=="string"&&(a||s)&&!P&&e.manuallyAnimateOnMount&&e.parent){const{parent:D}=e,L=hi(D,ie);if(D.enteringChildren&&L){const{delayChildren:J}=L.transition||{};oe.delay=rv(D.enteringChildren,e,J)}}return{animation:ie,options:oe}}))}if(v.size){const C={};if(typeof y.initial!="boolean"){const N=hi(e,Array.isArray(y.initial)?y.initial[0]:y.initial);N&&N.transition&&(C.transition=N.transition)}v.forEach(N=>{const j=e.getBaseTarget(N),V=e.getValue(N);V&&(V.liveStyle=!0),C[N]=j??null}),b.push({animation:C})}let k=!!b.length;return a&&(y.initial===!1||y.initial===y.animate)&&!e.manuallyAnimateOnMount&&(k=!1),a=!1,s=!1,k?n(b):Promise.resolve()}function m(h,y){if(i[h].isActive===y)return Promise.resolve();e.variantChildren?.forEach(b=>b.animationState?.setActive(h,y)),i[h].isActive=y;const g=f(h);for(const b in i)i[b].protectedKeys={};return g}return{animateChanges:f,setActive:m,setAnimateFunction:u,getState:()=>i,reset:()=>{i=g0(),s=!0}}}function RM(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!Bv(n,e):!1}function li(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function g0(){return{animate:li(!0),whileInView:li(),whileHover:li(),whileTap:li(),whileDrag:li(),whileFocus:li(),exit:li()}}function ah(e,n){e.min=n.min,e.max=n.max}function Sn(e,n){ah(e.x,n.x),ah(e.y,n.y)}function y0(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const Vv=1e-4,OM=1-Vv,_M=1+Vv,Pv=.01,LM=0-Pv,zM=0+Pv;function Dt(e){return e.max-e.min}function BM(e,n,i){return Math.abs(e-n)<=i}function x0(e,n,i,a=.5){e.origin=a,e.originPoint=Je(n.min,n.max,e.origin),e.scale=Dt(i)/Dt(n),e.translate=Je(i.min,i.max,e.origin)-e.originPoint,(e.scale>=OM&&e.scale<=_M||isNaN(e.scale))&&(e.scale=1),(e.translate>=LM&&e.translate<=zM||isNaN(e.translate))&&(e.translate=0)}function zl(e,n,i,a){x0(e.x,n.x,i.x,a?a.originX:void 0),x0(e.y,n.y,i.y,a?a.originY:void 0)}function b0(e,n,i,a=0){const s=a?Je(i.min,i.max,a):i.min;e.min=s+n.min,e.max=e.min+Dt(n)}function VM(e,n,i,a){b0(e.x,n.x,i.x,a?.x),b0(e.y,n.y,i.y,a?.y)}function v0(e,n,i,a=0){const s=a?Je(i.min,i.max,a):i.min;e.min=n.min-s,e.max=e.min+Dt(n)}function lu(e,n,i,a){v0(e.x,n.x,i.x,a?.x),v0(e.y,n.y,i.y,a?.y)}function S0(e,n,i,a,s){return e-=n,e=au(e,1/i,a),s!==void 0&&(e=au(e,1/s,a)),e}function PM(e,n=0,i=1,a=.5,s,c=e,u=e){if(_n.test(n)&&(n=parseFloat(n),n=Je(u.min,u.max,n/100)-u.min),typeof n!="number")return;let f=Je(c.min,c.max,a);e===c&&(f-=n),e.min=S0(e.min,n,i,f,s),e.max=S0(e.max,n,i,f,s)}function w0(e,n,[i,a,s],c,u){PM(e,n[i],n[a],n[s],n.scale,c,u)}const IM=["x","scaleX","originX"],UM=["y","scaleY","originY"];function T0(e,n,i,a){w0(e.x,n,IM,i?i.x:void 0,a?a.x:void 0),w0(e.y,n,UM,i?i.y:void 0,a?a.y:void 0)}function C0(e){return e.translate===0&&e.scale===1}function Iv(e){return C0(e.x)&&C0(e.y)}function A0(e,n){return e.min===n.min&&e.max===n.max}function HM(e,n){return A0(e.x,n.x)&&A0(e.y,n.y)}function k0(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function Uv(e,n){return k0(e.x,n.x)&&k0(e.y,n.y)}function E0(e){return Dt(e.x)/Dt(e.y)}function j0(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function Nn(e){return[e("x"),e("y")]}function FM(e,n,i){let a="";const s=e.x.translate/n.x,c=e.y.translate/n.y,u=i?.z||0;if((s||c||u)&&(a=`translate3d(${s}px, ${c}px, ${u}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:h,rotate:y,rotateX:g,rotateY:b,skewX:v,skewY:w}=i;h&&(a=`perspective(${h}px) ${a}`),y&&(a+=`rotate(${y}deg) `),g&&(a+=`rotateX(${g}deg) `),b&&(a+=`rotateY(${b}deg) `),v&&(a+=`skewX(${v}deg) `),w&&(a+=`skewY(${w}deg) `)}const f=e.x.scale*n.x,m=e.y.scale*n.y;return(f!==1||m!==1)&&(a+=`scale(${f}, ${m})`),a||"none"}const Hv=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],qM=Hv.length,M0=e=>typeof e=="string"?parseFloat(e):e,D0=e=>typeof e=="number"||ce.test(e);function GM(e,n,i,a,s,c){s?(e.opacity=Je(0,i.opacity??1,YM(a)),e.opacityExit=Je(n.opacity??1,0,XM(a))):c&&(e.opacity=Je(n.opacity??1,i.opacity??1,a));for(let u=0;u<qM;u++){const f=Hv[u];let m=N0(n,f),h=N0(i,f);if(m===void 0&&h===void 0)continue;m||(m=0),h||(h=0),m===0||h===0||D0(m)===D0(h)?(e[f]=Math.max(Je(M0(m),M0(h),a),0),(_n.test(h)||_n.test(m))&&(e[f]+="%")):e[f]=h}(n.rotate||i.rotate)&&(e.rotate=Je(n.rotate||0,i.rotate||0,a))}function N0(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const YM=Fv(0,.5,E1),XM=Fv(.5,.95,gn);function Fv(e,n,i){return a=>a<e?0:a>n?1:i(pa(e,n,a))}function qv(e,n,i){const a=ht(e)?e:mi(e);return a.start(Hh("",a,n,i)),a.animation}function Jl(e,n,i,a={passive:!0}){return e.addEventListener(n,i,a),()=>e.removeEventListener(n,i)}const JM=(e,n)=>e.depth-n.depth;class KM{constructor(){this.children=[],this.isDirty=!1}add(n){jh(this.children,n),this.isDirty=!0}remove(n){ma(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(JM),this.isDirty=!1,this.children.forEach(n)}}function QM(e,n){const i=Mt.now(),a=({timestamp:s})=>{const c=s-i;c>=n&&(Pr(a),e(c-n))};return Ge.setup(a,!0),()=>Pr(a)}function Ko(e){return ht(e)?e.get():e}class ZM{constructor(){this.members=[]}add(n){jh(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const s=a.instance;(!s||s.isConnected===!1)&&!a.snapshot&&(ma(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(ma(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){for(let i=this.members.indexOf(n)-1;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1&&a.instance?.isConnected!==!1)return this.promote(a),!0}return!1}promote(n,i){const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:s}=a.options,{layoutDependency:c}=n.options;(s===void 0||s!==c)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),n.root?.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{n.options.onExitComplete?.(),n.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const Qo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},od=["","X","Y","Z"],WM=1e3;let $M=0;function ud(e,n,i,a){const{latestValues:s}=n;s[e]&&(i[e]=s[e],n.setStaticValue(e,0),a&&(a[e]=0))}function Gv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=ov(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:s,layoutId:c}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Ge,!(s||c))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&Gv(a)}function Yv({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(u={},f=n?.()){this.id=$M++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(n3),this.nodes.forEach(o3),this.nodes.forEach(u3),this.nodes.forEach(r3)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new KM)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Dh),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const m=this.eventHandlers.get(u);m&&m.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=yu(u)&&!xv(u),this.instance=u;const{layoutId:f,layout:m,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||f)&&(this.isLayoutDirty=!0),e){let y,g=0;const b=()=>this.root.updateBlockedByResize=!1;Ge.read(()=>{g=window.innerWidth}),e(u,()=>{const v=window.innerWidth;v!==g&&(g=v,this.root.updateBlockedByResize=!0,y&&y(),y=QM(b,250),Qo.hasAnimatedSinceResize&&(Qo.hasAnimatedSinceResize=!1,this.nodes.forEach(_0)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:g,hasRelativeLayoutChanged:b,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||h.getDefaultTransition()||m3,{onLayoutAnimationStart:E,onLayoutAnimationComplete:k}=h.getProps(),C=!this.targetLayout||!Uv(this.targetLayout,v),N=!g&&b;if(this.options.layoutRoot||this.resumeFrom||N||g&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const j={...Uh(w,"layout"),onPlay:E,onComplete:k};(h.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j),this.setAnimationOrigin(y,N)}else g||_0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(c3),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Gv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const g=this.path[y];g.shouldResetTransform=!0,(typeof g.latestValues.x=="string"||typeof g.latestValues.y=="string")&&(g.isLayoutDirty=!0),g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const m=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),m&&this.nodes.forEach(a3),this.nodes.forEach(R0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(O0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(l3),this.nodes.forEach(s3),this.nodes.forEach(e3),this.nodes.forEach(t3)):this.nodes.forEach(O0),this.clearAllSnapshots();const f=Mt.now();St.delta=Ln(0,1e3/60,f-St.timestamp),St.timestamp=f,St.isProcessing=!0,ed.update.process(St),ed.preRender.process(St),ed.render.process(St),St.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(i3),this.sharedNodes.forEach(f3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ge.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ge.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Dt(this.snapshot.measuredBox.x)&&!Dt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ot()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const m=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!s)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!Iv(this.projectionDelta),m=this.getTransformTemplate(),h=m?m(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;u&&this.instance&&(f||oi(this.latestValues)||y)&&(s(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);return u&&(m=this.removeTransform(m)),p3(m),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return ot();const f=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(g3))){const{scroll:h}=this.root;h&&(On(f.x,h.offset.x),On(f.y,h.offset.y))}return f}removeElementScroll(u){const f=ot();if(Sn(f,u),this.scroll?.wasRoot)return f;for(let m=0;m<this.path.length;m++){const h=this.path[m],{scroll:y,options:g}=h;h!==this.root&&y&&g.layoutScroll&&(y.wasRoot&&Sn(f,u),On(f.x,y.offset.x),On(f.y,y.offset.y))}return f}applyTransform(u,f=!1,m){const h=m||ot();Sn(h,u);for(let y=0;y<this.path.length;y++){const g=this.path[y];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(On(h.x,-g.scroll.offset.x),On(h.y,-g.scroll.offset.y)),oi(g.latestValues)&&Jo(h,g.latestValues,g.layout?.layoutBox)}return oi(this.latestValues)&&Jo(h,this.latestValues,this.layout?.layoutBox),h}removeTransform(u){const f=ot();Sn(f,u);for(let m=0;m<this.path.length;m++){const h=this.path[m];if(!oi(h.latestValues))continue;let y;h.instance&&(nh(h.latestValues)&&h.updateSnapshot(),y=ot(),Sn(y,h.measurePageBox())),T0(f,h.latestValues,h.snapshot?.layoutBox,y)}return oi(this.latestValues)&&T0(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==St.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(u||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:g}=this.options;if(!this.layout||!(y||g))return;this.resolvedRelativeTargetAt=St.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ot(),this.targetWithTransforms=ot()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),VM(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Sn(this.target,this.layout.layoutBox),kv(this.target,this.targetDelta)):Sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||nh(this.parent.latestValues)||Av(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,m){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ot(),this.relativeTargetOrigin=ot(),lu(this.relativeTargetOrigin,f,m,this.options.layoutAnchor||void 0),Sn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),f=!!this.resumingFrom||this!==u;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===St.timestamp&&(m=!1),m)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;Sn(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,b=this.treeScale.y;hM(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=ot());const{target:v}=u;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(y0(this.prevProjectionDelta.x,this.projectionDelta.x),y0(this.prevProjectionDelta.y,this.projectionDelta.y)),zl(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==b||!j0(this.projectionDelta.x,this.prevProjectionDelta.x)||!j0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=da(),this.projectionDelta=da(),this.projectionDeltaWithTransform=da()}setAnimationOrigin(u,f=!1){const m=this.snapshot,h=m?m.latestValues:{},y={...this.latestValues},g=da();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const b=ot(),v=m?m.source:void 0,w=this.layout?this.layout.source:void 0,E=v!==w,k=this.getStack(),C=!k||k.members.length<=1,N=!!(E&&!C&&this.options.crossfade===!0&&!this.path.some(h3));this.animationProgress=0;let j;this.mixTargetDelta=V=>{const Y=V/1e3;L0(g.x,u.x,Y),L0(g.y,u.y,Y),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(lu(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),d3(this.relativeTarget,this.relativeTargetOrigin,b,Y),j&&HM(this.relativeTarget,j)&&(this.isProjectionDirty=!1),j||(j=ot()),Sn(j,this.relativeTarget)),E&&(this.animationValues=y,GM(y,h,this.latestValues,Y,N,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Pr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ge.update(()=>{Qo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=mi(0)),this.motionValue.jump(0,!1),this.currentAnimation=qv(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(WM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:m,layout:h,latestValues:y}=u;if(!(!f||!m||!h)){if(this!==u&&this.layout&&h&&Xv(this.options.animationType,this.layout.layoutBox,h.layoutBox)){m=this.target||ot();const g=Dt(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+g;const b=Dt(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+b}Sn(f,m),Jo(f,y),zl(this.projectionDeltaWithTransform,this.layoutCorrected,f,y)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new ZM),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:m}={}){const h=this.getStack();h&&h.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const h={};m.z&&ud("z",u,h,this.animationValues);for(let y=0;y<od.length;y++)ud(`rotate${od[y]}`,u,h,this.animationValues),ud(`skew${od[y]}`,u,h,this.animationValues);u.render();for(const y in h)u.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Ko(f?.pointerEvents)||"",u.transform=m?m(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Ko(f?.pointerEvents)||""),this.hasProjected&&!oi(this.latestValues)&&(u.transform=m?m({},""):"none",this.hasProjected=!1);return}u.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let g=FM(this.projectionDeltaWithTransform,this.treeScale,y);m&&(g=m(y,g)),u.transform=g;const{x:b,y:v}=this.projectionDelta;u.transformOrigin=`${b.origin*100}% ${v.origin*100}% 0`,h.animationValues?u.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:u.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const w in ih){if(y[w]===void 0)continue;const{correct:E,applyTo:k,isCSSVariable:C}=ih[w],N=g==="none"?y[w]:E(y[w],h);if(k){const j=k.length;for(let V=0;V<j;V++)u[k[V]]=N}else C?this.options.visualElement.renderState.vars[w]=N:u[w]=N}this.options.layoutId&&(u.pointerEvents=h===this?Ko(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(R0),this.root.sharedNodes.clear()}}}function e3(e){e.updateLayout()}function t3(e){const n=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:a}=e.layout,{animationType:s}=e.options,c=n.source!==e.layout.source;if(s==="size")Nn(y=>{const g=c?n.measuredBox[y]:n.layoutBox[y],b=Dt(g);g.min=i[y].min,g.max=g.min+b});else if(s==="x"||s==="y"){const y=s==="x"?"y":"x";ah(c?n.measuredBox[y]:n.layoutBox[y],i[y])}else Xv(s,n.layoutBox,i)&&Nn(y=>{const g=c?n.measuredBox[y]:n.layoutBox[y],b=Dt(i[y]);g.max=g.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+b)});const u=da();zl(u,i,n.layoutBox);const f=da();c?zl(f,e.applyTransform(a,!0),n.measuredBox):zl(f,i,n.layoutBox);const m=!Iv(u);let h=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:g,layout:b}=y;if(g&&b){const v=e.options.layoutAnchor||void 0,w=ot();lu(w,n.layoutBox,g.layoutBox,v);const E=ot();lu(E,i,b.layoutBox,v),Uv(w,E)||(h=!0),y.options.layoutRoot&&(e.relativeTarget=E,e.relativeTargetOrigin=w,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:f,layoutDelta:u,hasLayoutChanged:m,hasRelativeLayoutChanged:h})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function n3(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function r3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function i3(e){e.clearSnapshot()}function R0(e){e.clearMeasurements()}function a3(e){e.isLayoutDirty=!0,e.updateLayout()}function O0(e){e.isLayoutDirty=!1}function l3(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function s3(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function _0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function o3(e){e.resolveTargetDelta()}function u3(e){e.calcProjection()}function c3(e){e.resetSkewAndRotation()}function f3(e){e.removeLeadSnapshot()}function L0(e,n,i){e.translate=Je(n.translate,0,i),e.scale=Je(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function z0(e,n,i,a){e.min=Je(n.min,i.min,a),e.max=Je(n.max,i.max,a)}function d3(e,n,i,a){z0(e.x,n.x,i.x,a),z0(e.y,n.y,i.y,a)}function h3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const m3={duration:.45,ease:[.4,0,.1,1]},B0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),V0=B0("applewebkit/")&&!B0("chrome/")?Math.round:gn;function P0(e){e.min=V0(e.min),e.max=V0(e.max)}function p3(e){P0(e.x),P0(e.y)}function Xv(e,n,i){return e==="position"||e==="preserve-aspect"&&!BM(E0(n),E0(i),.2)}function g3(e){return e!==e.root&&e.scroll?.wasRoot}const y3=Yv({attachResizeListener:(e,n)=>Jl(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),cd={current:void 0},Jv=Yv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!cd.current){const e=new y3({});e.mount(window),e.setOptions({layoutScroll:!0}),cd.current=e}return cd.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),em=M.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function I0(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function x3(...e){return n=>{let i=!1;const a=e.map(s=>{const c=I0(s,n);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let s=0;s<a.length;s++){const c=a[s];typeof c=="function"?c():I0(e[s],null)}}}}function b3(...e){return M.useCallback(x3(...e),e)}class v3 extends M.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(Fo(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,s=Fo(a)&&a.offsetWidth||0,c=Fo(a)&&a.offsetHeight||0,u=getComputedStyle(i),f=this.props.sizeRef.current;f.height=parseFloat(u.height),f.width=parseFloat(u.width),f.top=i.offsetTop,f.left=i.offsetLeft,f.right=s-f.width-f.left,f.bottom=c-f.height-f.top}return null}componentDidUpdate(){}render(){return this.props.children}}function S3({children:e,isPresent:n,anchorX:i,anchorY:a,root:s,pop:c}){const u=M.useId(),f=M.useRef(null),m=M.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:h}=M.useContext(em),y=e.props?.ref??e?.ref,g=b3(f,y);return M.useInsertionEffect(()=>{const{width:b,height:v,top:w,left:E,right:k,bottom:C}=m.current;if(n||c===!1||!f.current||!b||!v)return;const N=i==="left"?`left: ${E}`:`right: ${k}`,j=a==="bottom"?`bottom: ${C}`:`top: ${w}`;f.current.dataset.motionPopId=u;const V=document.createElement("style");h&&(V.nonce=h);const Y=s??document.head;return Y.appendChild(V),V.sheet&&V.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${v}px !important;
            ${N}px !important;
            ${j}px !important;
          }
        `),()=>{f.current?.removeAttribute("data-motion-pop-id"),Y.contains(V)&&Y.removeChild(V)}},[n]),x.jsx(v3,{isPresent:n,childRef:f,sizeRef:m,pop:c,children:c===!1?e:M.cloneElement(e,{ref:g})})}const w3=({children:e,initial:n,isPresent:i,onExitComplete:a,custom:s,presenceAffectsLayout:c,mode:u,anchorX:f,anchorY:m,root:h})=>{const y=Eh(T3),g=M.useId();let b=!0,v=M.useMemo(()=>(b=!1,{id:g,initial:n,isPresent:i,custom:s,onExitComplete:w=>{y.set(w,!0);for(const E of y.values())if(!E)return;a&&a()},register:w=>(y.set(w,!1),()=>y.delete(w))}),[i,y,a]);return c&&b&&(v={...v}),M.useMemo(()=>{y.forEach((w,E)=>y.set(E,!1))},[i]),M.useEffect(()=>{!i&&!y.size&&a&&a()},[i]),e=x.jsx(S3,{pop:u==="popLayout",isPresent:i,anchorX:f,anchorY:m,root:h,children:e}),x.jsx(pu.Provider,{value:v,children:e})};function T3(){return new Map}function Kv(e=!0){const n=M.useContext(pu);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:s}=n,c=M.useId();M.useEffect(()=>{if(e)return s(c)},[e]);const u=M.useCallback(()=>e&&a&&a(c),[c,a,e]);return!i&&a?[!1,u]:[!0]}const Oo=e=>e.key||"";function U0(e){const n=[];return M.Children.forEach(e,i=>{M.isValidElement(i)&&n.push(i)}),n}const Qv=({children:e,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:s=!0,mode:c="sync",propagate:u=!1,anchorX:f="left",anchorY:m="top",root:h})=>{const[y,g]=Kv(u),b=M.useMemo(()=>U0(e),[e]),v=u&&!y?[]:b.map(Oo),w=M.useRef(!0),E=M.useRef(b),k=Eh(()=>new Map),C=M.useRef(new Set),[N,j]=M.useState(b),[V,Y]=M.useState(b);p1(()=>{w.current=!1,E.current=b;for(let X=0;X<V.length;X++){const I=Oo(V[X]);v.includes(I)?(k.delete(I),C.current.delete(I)):k.get(I)!==!0&&k.set(I,!1)}},[V,v.length,v.join("-")]);const _=[];if(b!==N){let X=[...b];for(let I=0;I<V.length;I++){const R=V[I],Q=Oo(R);v.includes(Q)||(X.splice(I,0,R),_.push(R))}return c==="wait"&&_.length&&(X=_),Y(U0(X)),j(b),null}const{forceRender:q}=M.useContext(kh);return x.jsx(x.Fragment,{children:V.map(X=>{const I=Oo(X),R=u&&!y?!1:b===V||v.includes(I),Q=()=>{if(C.current.has(I))return;if(k.has(I))C.current.add(I),k.set(I,!0);else return;let te=!0;k.forEach(me=>{me||(te=!1)}),te&&(q?.(),Y(E.current),u&&g?.(),a&&a())};return x.jsx(w3,{isPresent:R,initial:!w.current||i?void 0:!1,custom:n,presenceAffectsLayout:s,mode:c,root:h,onExitComplete:R?void 0:Q,anchorX:f,anchorY:m,children:X},I)})})},Zv=M.createContext({strict:!1}),H0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let F0=!1;function C3(){if(F0)return;const e={};for(const n in H0)e[n]={isEnabled:i=>H0[n].some(a=>!!i[a])};Sv(e),F0=!0}function Wv(){return C3(),cM()}function A3(e){const n=Wv();for(const i in e)n[i]={...n[i],...e[i]};Sv(n)}const k3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function su(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||k3.has(e)}let $v=e=>!su(e);function E3(e){typeof e=="function"&&($v=n=>n.startsWith("on")?!su(n):e(n))}try{E3(require("@emotion/is-prop-valid").default)}catch{}function j3(e,n,i){const a={};for(const s in e)s==="values"&&typeof e.values=="object"||ht(e[s])||($v(s)||i===!0&&su(s)||!n&&!su(s)||e.draggable&&s.startsWith("onDrag"))&&(a[s]=e[s]);return a}const vu=M.createContext({});function M3(e,n){if(bu(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Xl(i)?i:void 0,animate:Xl(a)?a:void 0}}return e.inherit!==!1?n:{}}function D3(e){const{initial:n,animate:i}=M3(e,M.useContext(vu));return M.useMemo(()=>({initial:n,animate:i}),[q0(n),q0(i)])}function q0(e){return Array.isArray(e)?e.join(" "):e}const tm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function eS(e,n,i){for(const a in n)!ht(n[a])&&!Mv(a,i)&&(e[a]=n[a])}function N3({transformTemplate:e},n){return M.useMemo(()=>{const i=tm();return Wh(i,n,e),Object.assign({},i.vars,i.style)},[n])}function R3(e,n){const i=e.style||{},a={};return eS(a,i,e),Object.assign(a,N3(e,n)),a}function O3(e,n){const i={},a=R3(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const tS=()=>({...tm(),attrs:{}});function _3(e,n,i,a){const s=M.useMemo(()=>{const c=tS();return Nv(c,n,Ov(a),e.transformTemplate,e.style),{...c.attrs,style:{...c.style}}},[n]);if(e.style){const c={};eS(c,e.style,e),s.style={...c,...s.style}}return s}const L3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function nm(e){return typeof e!="string"||e.includes("-")?!1:!!(L3.indexOf(e)>-1||/[A-Z]/u.test(e))}function z3(e,n,i,{latestValues:a},s,c=!1,u){const m=(u??nm(e)?_3:O3)(n,a,s,e),h=j3(n,typeof e=="string",c),y=e!==M.Fragment?{...h,...m,ref:i}:{},{children:g}=n,b=M.useMemo(()=>ht(g)?g.get():g,[g]);return M.createElement(e,{...y,children:b})}function B3({scrapeMotionValuesFromProps:e,createRenderState:n},i,a,s){return{latestValues:V3(i,a,s,e),renderState:n()}}function V3(e,n,i,a){const s={},c=a(e,{});for(const b in c)s[b]=Ko(c[b]);let{initial:u,animate:f}=e;const m=bu(e),h=bv(e);n&&h&&!m&&e.inherit!==!1&&(u===void 0&&(u=n.initial),f===void 0&&(f=n.animate));let y=i?i.initial===!1:!1;y=y||u===!1;const g=y?f:u;if(g&&typeof g!="boolean"&&!xu(g)){const b=Array.isArray(g)?g:[g];for(let v=0;v<b.length;v++){const w=Fh(e,b[v]);if(w){const{transitionEnd:E,transition:k,...C}=w;for(const N in C){let j=C[N];if(Array.isArray(j)){const V=y?j.length-1:0;j=j[V]}j!==null&&(s[N]=j)}for(const N in E)s[N]=E[N]}}}return s}const nS=e=>(n,i)=>{const a=M.useContext(vu),s=M.useContext(pu),c=()=>B3(e,n,a,s);return i?c():Eh(c)},P3=nS({scrapeMotionValuesFromProps:$h,createRenderState:tm}),I3=nS({scrapeMotionValuesFromProps:_v,createRenderState:tS}),U3=Symbol.for("motionComponentSymbol");function H3(e,n,i){const a=M.useRef(i);M.useInsertionEffect(()=>{a.current=i});const s=M.useRef(null);return M.useCallback(c=>{c&&e.onMount?.(c);const u=a.current;if(typeof u=="function")if(c){const f=u(c);typeof f=="function"&&(s.current=f)}else s.current?(s.current(),s.current=null):u(c);else u&&(u.current=c);n&&(c?n.mount(c):n.unmount())},[n])}const rS=M.createContext({});function oa(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function F3(e,n,i,a,s,c){const{visualElement:u}=M.useContext(vu),f=M.useContext(Zv),m=M.useContext(pu),h=M.useContext(em),y=h.reducedMotion,g=h.skipAnimations,b=M.useRef(null),v=M.useRef(!1);a=a||f.renderer,!b.current&&a&&(b.current=a(e,{visualState:n,parent:u,props:i,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:y,skipAnimations:g,isSVG:c}),v.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const w=b.current,E=M.useContext(rS);w&&!w.projection&&s&&(w.type==="html"||w.type==="svg")&&q3(b.current,i,s,E);const k=M.useRef(!1);M.useInsertionEffect(()=>{w&&k.current&&w.update(i,m)});const C=i[sv],N=M.useRef(!!C&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(C)&&window.MotionHasOptimisedAnimation?.(C));return p1(()=>{v.current=!0,w&&(k.current=!0,window.MotionIsMounted=!0,w.updateFeatures(),w.scheduleRenderMicrotask(),N.current&&w.animationState&&w.animationState.animateChanges())}),M.useEffect(()=>{w&&(!N.current&&w.animationState&&w.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(C)}),N.current=!1),w.enteringChildren=void 0)}),w}function q3(e,n,i,a){const{layoutId:s,layout:c,drag:u,dragConstraints:f,layoutScroll:m,layoutRoot:h,layoutAnchor:y,layoutCrossfade:g}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:iS(e.parent)),e.projection.setOptions({layoutId:s,layout:c,alwaysMeasureLayout:!!u||f&&oa(f),visualElement:e,animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:m,layoutRoot:h,layoutAnchor:y})}function iS(e){if(e)return e.options.allowProjection!==!1?e.projection:iS(e.parent)}function fd(e,{forwardMotionProps:n=!1,type:i}={},a,s){a&&A3(a);const c=i?i==="svg":nm(e),u=c?I3:P3;function f(h,y){let g;const b={...M.useContext(em),...h,layoutId:G3(h)},{isStatic:v}=b,w=D3(h),E=u(h,v);if(!v&&typeof window<"u"){Y3();const k=X3(b);g=k.MeasureLayout,w.visualElement=F3(e,E,b,s,k.ProjectionNode,c)}return x.jsxs(vu.Provider,{value:w,children:[g&&w.visualElement?x.jsx(g,{visualElement:w.visualElement,...b}):null,z3(e,h,H3(E,w.visualElement,y),E,v,n,c)]})}f.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const m=M.forwardRef(f);return m[U3]=e,m}function G3({layoutId:e}){const n=M.useContext(kh).id;return n&&e!==void 0?n+"-"+e:e}function Y3(e,n){M.useContext(Zv).strict}function X3(e){const n=Wv(),{drag:i,layout:a}=n;if(!i&&!a)return{};const s={...i,...a};return{MeasureLayout:i?.isEnabled(e)||a?.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function J3(e,n){if(typeof Proxy>"u")return fd;const i=new Map,a=(c,u)=>fd(c,u,e,n),s=(c,u)=>a(c,u);return new Proxy(s,{get:(c,u)=>u==="create"?a:(i.has(u)||i.set(u,fd(u,void 0,e,n)),i.get(u))})}const K3=(e,n)=>n.isSVG??nm(e)?new Lv(n):new Dv(n,{allowProjection:e!==M.Fragment});class Q3 extends Ir{constructor(n){super(n),n.animationState||(n.animationState=NM(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();xu(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let Z3=0;class W3 extends Ir{constructor(){super(...arguments),this.id=Z3++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"){const f=hi(this.node,c,u);if(f){const{transition:m,transitionEnd:h,...y}=f;for(const g in y)this.node.getValue(g)?.jump(y[g])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const s=this.node.animationState.setActive("exit",!n);i&&!n&&s.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const $3={animation:{Feature:Q3},exit:{Feature:W3}};function as(e){return{point:{x:e.pageX,y:e.pageY}}}const eD=e=>n=>Kh(n)&&e(n,as(n));function Bl(e,n,i,a){return Jl(e,n,eD(i),a)}const aS=({current:e})=>e?e.ownerDocument.defaultView:null,G0=(e,n)=>Math.abs(e-n);function tD(e,n){const i=G0(e.x,n.x),a=G0(e.y,n.y);return Math.sqrt(i**2+a**2)}const Y0=new Set(["auto","scroll"]);class lS{constructor(n,i,{transformPagePoint:a,contextWindow:s=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=_o(this.lastRawMoveEventInfo,this.transformPagePoint));const v=dd(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,E=tD(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!E)return;const{point:k}=v,{timestamp:C}=St;this.history.push({...k,timestamp:C});const{onStart:N,onMove:j}=this.handlers;w||(N&&N(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),j&&j(this.lastMoveEvent,v)},this.handlePointerMove=(v,w)=>{this.lastMoveEvent=v,this.lastRawMoveEventInfo=w,this.lastMoveEventInfo=_o(w,this.transformPagePoint),Ge.update(this.updatePoint,!0)},this.handlePointerUp=(v,w)=>{this.end();const{onEnd:E,onSessionEnd:k,resumeAnimation:C}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=dd(v.type==="pointercancel"?this.lastMoveEventInfo:_o(w,this.transformPagePoint),this.history);this.startEvent&&E&&E(v,N),k&&k(v,N)},!Kh(n))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=u,this.contextWindow=s||window;const m=as(n),h=_o(m,this.transformPagePoint),{point:y}=h,{timestamp:g}=St;this.history=[{...y,timestamp:g}];const{onSessionStart:b}=i;b&&b(n,dd(h,this.history)),this.removeListeners=ns(Bl(this.contextWindow,"pointermove",this.handlePointerMove),Bl(this.contextWindow,"pointerup",this.handlePointerUp),Bl(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(Y0.has(a.overflowX)||Y0.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,s=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},c={x:s.x-i.x,y:s.y-i.y};c.x===0&&c.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(n,s),Ge.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Pr(this.updatePoint)}}function _o(e,n){return n?{point:n(e.point)}:e}function X0(e,n){return{x:e.x-n.x,y:e.y-n.y}}function dd({point:e},n){return{point:e,delta:X0(e,sS(n)),offset:X0(e,nD(n)),velocity:rD(n,.1)}}function nD(e){return e[0]}function sS(e){return e[e.length-1]}function rD(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const s=sS(e);for(;i>=0&&(a=e[i],!(s.timestamp-a.timestamp>Ut(n)));)i--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&s.timestamp-a.timestamp>Ut(n)*2&&(a=e[1]);const c=pn(s.timestamp-a.timestamp);if(c===0)return{x:0,y:0};const u={x:(s.x-a.x)/c,y:(s.y-a.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function iD(e,{min:n,max:i},a){return n!==void 0&&e<n?e=a?Je(n,e,a.min):Math.max(e,n):i!==void 0&&e>i&&(e=a?Je(i,e,a.max):Math.min(e,i)),e}function J0(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function aD(e,{top:n,left:i,bottom:a,right:s}){return{x:J0(e.x,i,s),y:J0(e.y,n,a)}}function K0(e,n){let i=n.min-e.min,a=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function lD(e,n){return{x:K0(e.x,n.x),y:K0(e.y,n.y)}}function sD(e,n){let i=.5;const a=Dt(e),s=Dt(n);return s>a?i=pa(n.min,n.max-a,e.min):a>s&&(i=pa(e.min,e.max-s,n.min)),Ln(0,1,i)}function oD(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const lh=.35;function uD(e=lh){return e===!1?e=0:e===!0&&(e=lh),{x:Q0(e,"left","right"),y:Q0(e,"top","bottom")}}function Q0(e,n,i){return{min:Z0(e,n),max:Z0(e,i)}}function Z0(e,n){return typeof e=="number"?e:e[n]||0}const cD=new WeakMap;class fD{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ot(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const c=g=>{i&&this.snapToCursor(as(g).point),this.stopAnimation()},u=(g,b)=>{const{drag:v,dragPropagation:w,onDragStart:E}=this.getProps();if(v&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Hj(v),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Nn(C=>{let N=this.getAxisMotionValue(C).get()||0;if(_n.test(N)){const{projection:j}=this.visualElement;if(j&&j.layout){const V=j.layout.layoutBox[C];V&&(N=Dt(V)*(parseFloat(N)/100))}}this.originPoint[C]=N}),E&&Ge.update(()=>E(g,b),!1,!0),Zd(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},f=(g,b)=>{this.latestPointerEvent=g,this.latestPanInfo=b;const{dragPropagation:v,dragDirectionLock:w,onDirectionLock:E,onDrag:k}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:C}=b;if(w&&this.currentDirection===null){this.currentDirection=hD(C),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",b.point,C),this.updateAxis("y",b.point,C),this.visualElement.render(),k&&Ge.update(()=>k(g,b),!1,!0)},m=(g,b)=>{this.latestPointerEvent=g,this.latestPanInfo=b,this.stop(g,b),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:g}=this.getProps();(g||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new lS(n,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:m,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:a,contextWindow:aS(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,s=i||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!s||!a)return;const{velocity:u}=s;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ge.postRender(()=>f(a,s))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:s}=this.getProps();if(!a||!Lo(n,s,this.currentDirection))return;const c=this.getAxisMotionValue(n);let u=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(u=iD(u,this.constraints[n],this.elastic[n])),c.set(u)}resolveConstraints(){const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;n&&oa(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=aD(a.layoutBox,n):this.constraints=!1,this.elastic=uD(i),s!==this.constraints&&!oa(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Nn(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=oD(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!oa(n))return!1;const a=n.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const c=mM(a,s.root,this.visualElement.getTransformPagePoint());let u=lD(s.layout.layoutBox,c);if(i){const f=i(fM(u));this.hasMutatedConstraints=!!f,f&&(u=Cv(f))}return u}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:s,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),m=this.constraints||{},h=Nn(y=>{if(!Lo(y,i,this.currentDirection))return;let g=m&&m[y]||{};(u===!0||u===y)&&(g={min:0,max:0});const b=s?200:1e6,v=s?40:1e7,w={type:"inertia",velocity:a?n[y]:0,bounceStiffness:b,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...c,...g};return this.startAxisValueAnimation(y,w)});return Promise.all(h).then(f)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Zd(this.visualElement,n),a.start(Hh(n,a,0,i,this.visualElement,!1))}stopAnimation(){Nn(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),s=a[i];return s||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Nn(i=>{const{drag:a}=this.getProps();if(!Lo(i,a,this.currentDirection))return;const{projection:s}=this.visualElement,c=this.getAxisMotionValue(i);if(s&&s.layout){const{min:u,max:f}=s.layout.layoutBox[i],m=c.get()||0;c.set(n[i]-Je(u,f,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!oa(i)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Nn(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const m=f.get();s[u]=sD({min:m,max:m},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Nn(u=>{if(!Lo(u,n,null))return;const f=this.getAxisMotionValue(u),{min:m,max:h}=this.constraints[u];f.set(Je(m,h,s[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;cD.set(this.visualElement,this);const n=this.visualElement.current,i=Bl(n,"pointerdown",h=>{const{drag:y,dragListener:g=!0}=this.getProps(),b=h.target,v=b!==n&&Jj(b);y&&g&&!v&&this.start(h)});let a;const s=()=>{const{dragConstraints:h}=this.getProps();oa(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),a||(a=dD(n,h.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,u=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Ge.read(s);const f=Jl(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:y})=>{this.isDragging&&y&&(Nn(g=>{const b=this.getAxisMotionValue(g);b&&(this.originPoint[g]+=h[g].translate,b.set(b.get()+h[g].translate))}),this.visualElement.render())}));return()=>{f(),i(),u(),m&&m(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:c=!1,dragElastic:u=lh,dragMomentum:f=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:s,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function W0(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function dD(e,n,i){const a=a0(e,W0(i)),s=a0(n,W0(i));return()=>{a(),s()}}function Lo(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function hD(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class mD extends Ir{constructor(n){super(n),this.removeGroupControls=gn,this.removeListeners=gn,this.controls=new fD(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||gn}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const hd=e=>(n,i)=>{e&&Ge.update(()=>e(n,i),!1,!0)};class pD extends Ir{constructor(){super(...arguments),this.removePointerDownListener=gn}onPointerDown(n){this.session=new lS(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:aS(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:hd(n),onStart:hd(i),onMove:hd(a),onEnd:(c,u)=>{delete this.session,s&&Ge.postRender(()=>s(c,u))}}}mount(){this.removePointerDownListener=Bl(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let md=!1;class gD extends M.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:s}=this.props,{projection:c}=n;c&&(i.group&&i.group.add(c),a&&a.register&&s&&a.register(c),md&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Qo.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:s,isPresent:c}=this.props,{projection:u}=a;return u&&(u.isPresent=c,n.layoutDependency!==i&&u.setOptions({...u.options,layoutDependency:i}),md=!0,s||n.layoutDependency!==i||i===void 0||n.isPresent!==c?u.willUpdate():this.safeToRemove(),n.isPresent!==c&&(c?u.promote():u.relegate()||Ge.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Jh.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:s}=n;md=!0,s&&(s.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function oS(e){const[n,i]=Kv(),a=M.useContext(kh);return x.jsx(gD,{...e,layoutGroup:a,switchLayoutGroup:M.useContext(rS),isPresent:n,safeToRemove:i})}const yD={pan:{Feature:pD},drag:{Feature:mD,ProjectionNode:Jv,MeasureLayout:oS}};function $0(e,n,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const s="onHover"+i,c=a[s];c&&Ge.postRender(()=>c(n,as(n)))}class xD extends Ir{mount(){const{current:n}=this.node;n&&(this.unmount=qj(n,(i,a)=>($0(this.node,a,"Start"),s=>$0(this.node,s,"End"))))}unmount(){}}class bD extends Ir{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ns(Jl(this.node.current,"focus",()=>this.onFocus()),Jl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function eb(e,n,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const s="onTap"+(i==="End"?"":i),c=a[s];c&&Ge.postRender(()=>c(n,as(n)))}class vD extends Ir{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=Qj(n,(s,c)=>(eb(this.node,c,"Start"),(u,{success:f})=>eb(this.node,u,f?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:a?.tap===!1})}unmount(){}}const sh=new WeakMap,pd=new WeakMap,SD=e=>{const n=sh.get(e.target);n&&n(e)},wD=e=>{e.forEach(SD)};function TD({root:e,...n}){const i=e||document;pd.has(i)||pd.set(i,{});const a=pd.get(i),s=JSON.stringify(n);return a[s]||(a[s]=new IntersectionObserver(wD,{root:e,...n})),a[s]}function CD(e,n,i){const a=TD(n);return sh.set(e,i),a.observe(e),()=>{sh.delete(e),a.unobserve(e)}}const AD={some:0,all:1};class kD extends Ir{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:s="some",once:c}=n,u={root:i?i.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:AD[s]},f=m=>{const{isIntersecting:h}=m;if(this.isInView===h||(this.isInView=h,c&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:g}=this.node.getProps(),b=h?y:g;b&&b(m)};this.stopObserver=CD(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(ED(n,i))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function ED({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const jD={inView:{Feature:kD},tap:{Feature:vD},focus:{Feature:bD},hover:{Feature:xD}},MD={layout:{ProjectionNode:Jv,MeasureLayout:oS}},DD={...$3,...jD,...yD,...MD},It=J3(DD,K3);function rm(e){return typeof e=="object"&&!Array.isArray(e)}function uS(e,n,i,a){return e==null?[]:typeof e=="string"&&rm(n)?Xh(e,i,a):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(s=>s!=null):[e]}function ND(e,n,i){return e*(n+1)}function tb(e,n,i,a){return typeof n=="number"?n:n.startsWith("-")||n.startsWith("+")?Math.max(0,e+parseFloat(n)):n==="<"?i:n.startsWith("<")?Math.max(0,i+parseFloat(n.slice(1))):a.get(n)??e}function RD(e,n,i){for(let a=0;a<e.length;a++){const s=e[a];s.at>n&&s.at<i&&(ma(e,s),a--)}}function OD(e,n,i,a,s,c){RD(e,s,c);for(let u=0;u<n.length;u++)e.push({value:n[u],at:Je(s,c,a[u]),easing:N1(i,u)})}function _D(e,n){for(let i=0;i<e.length;i++)e[i]=e[i]/(n+1)}function LD(e,n){return e.at===n.at?e.value===null?1:n.value===null?-1:0:e.at-n.at}const zD="easeInOut";function BD(e,{defaultTransition:n={},...i}={},a,s){const c=n.duration||.3,u=new Map,f=new Map,m={},h=new Map;let y=0,g=0,b=0;for(let v=0;v<e.length;v++){const w=e[v];if(typeof w=="string"){h.set(w,g);continue}else if(!Array.isArray(w)){h.set(w.name,tb(g,w.at,y,h));continue}let[E,k,C={}]=w;C.at!==void 0&&(g=tb(g,C.at,y,h));let N=0;const j=(V,Y,_,q=0,X=0)=>{const I=VD(V),{delay:R=0,times:Q=Y1(I),type:te=n.type||"keyframes",repeat:me,repeatType:se,repeatDelay:ne=0,...P}=Y;let{ease:ee=n.ease||"easeOut",duration:ie}=Y;const oe=typeof R=="function"?R(q,X):R,D=I.length,L=Ih(te)?te:s?.[te||"keyframes"];if(D<=2&&L){let he=100;if(D===2&&UD(I)){const ze=I[1]-I[0];he=Math.abs(ze)}const de={...n,...P};ie!==void 0&&(de.duration=Ut(ie));const Se=F1(de,he,L);ee=Se.ease,ie=Se.duration}ie??(ie=c);const J=g+oe;Q.length===1&&Q[0]===0&&(Q[1]=1);const A=Q.length-I.length;if(A>0&&G1(Q,A),I.length===1&&I.unshift(null),me){ie=ND(ie,me);const he=[...I],de=[...Q];ee=Array.isArray(ee)?[...ee]:[ee];const Se=[...ee];for(let ze=0;ze<me;ze++){I.push(...he);for(let Ne=0;Ne<he.length;Ne++)Q.push(de[Ne]+(ze+1)),ee.push(Ne===0?"linear":N1(Se,Ne-1))}_D(Q,me)}const le=J+ie;OD(_,I,ee,Q,J,le),N=Math.max(oe+ie,N),b=Math.max(le,b)};if(ht(E)){const V=nb(E,f);j(k,C,rb("default",V))}else{const V=uS(E,k,a,m),Y=V.length;for(let _=0;_<Y;_++){k=k,C=C;const q=V[_],X=nb(q,f);for(const I in k)j(k[I],PD(C,I),rb(I,X),_,Y)}}y=g,g+=N}return f.forEach((v,w)=>{for(const E in v){const k=v[E];k.sort(LD);const C=[],N=[],j=[];for(let q=0;q<k.length;q++){const{at:X,value:I,easing:R}=k[q];C.push(I),N.push(pa(0,b,X)),j.push(R||"easeOut")}N[0]!==0&&(N.unshift(0),C.unshift(C[0]),j.unshift(zD)),N[N.length-1]!==1&&(N.push(1),C.push(null)),u.has(w)||u.set(w,{keyframes:{},transition:{}});const V=u.get(w);V.keyframes[E]=C;const{type:Y,..._}=n;V.transition[E]={..._,duration:b,ease:j,times:N,...i}}}),u}function nb(e,n){return!n.has(e)&&n.set(e,{}),n.get(e)}function rb(e,n){return n[e]||(n[e]=[]),n[e]}function VD(e){return Array.isArray(e)?e:[e]}function PD(e,n){return e&&e[n]?{...e,...e[n]}:{...e}}const ID=e=>typeof e=="number",UD=e=>e.every(ID);function HD(e){const n={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=yu(e)&&!xv(e)?new Lv(n):new Dv(n);i.mount(e),Yl.set(e,i)}function FD(e){const n={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new SM(n);i.mount(e),Yl.set(e,i)}function qD(e,n){return ht(e)||typeof e=="number"||typeof e=="string"&&!rm(n)}function cS(e,n,i,a){const s=[];if(qD(e,n))s.push(qv(e,rm(n)&&n.default||n,i&&(i.default||i)));else{if(e==null)return s;const c=uS(e,n,a),u=c.length;for(let f=0;f<u;f++){const m=c[f],h=m instanceof Element?HD:FD;Yl.has(m)||h(m);const y=Yl.get(m),g={...i};"delay"in g&&typeof g.delay=="function"&&(g.delay=g.delay(f,u)),s.push(...Gh(y,{...n,transition:g},{}))}}return s}function GD(e,n,i){const a=[],s=e.map(u=>{if(Array.isArray(u)&&typeof u[0]=="function"){const f=u[0],m=mi(0);return m.on("change",f),u.length===1?[m,[0,1]]:u.length===2?[m,[0,1],u[1]]:[m,u[1],u[2]]}return u});return BD(s,n,i,{spring:Gl}).forEach(({keyframes:u,transition:f},m)=>{a.push(...cS(m,u,f))}),a}function YD(e){return Array.isArray(e)&&e.some(Array.isArray)}function XD(e={}){const{scope:n,reduceMotion:i}=e;function a(s,c,u){let f=[],m;if(YD(s)){const{onComplete:y,...g}=c||{};typeof y=="function"&&(m=y),f=GD(s,i!==void 0?{reduceMotion:i,...g}:g,n)}else{const{onComplete:y,...g}=u||{};typeof y=="function"&&(m=y),f=cS(s,c,i!==void 0?{reduceMotion:i,...g}:g,n)}const h=new fj(f);return m&&h.finished.then(m),n&&(n.animations.push(h),h.finished.then(()=>{ma(n.animations,h)})),h}return a}const JD=XD(),KD={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},QD={hidden:{opacity:0,y:32,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",damping:28,stiffness:380,mass:.8}},exit:{opacity:0,y:16,scale:.98,transition:{duration:.18,ease:[.4,0,1,1]}}},ZD={visible:{transition:{staggerChildren:.06,delayChildren:.12}}},lr={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.35,ease:[.22,.61,.36,1]}}};function WD(e){const n=e.match(/^([^\d]*)(\d+)(.*)$/);return n?{num:parseInt(n[2],10),prefix:n[1],suffix:n[3]}:{num:0,prefix:"",suffix:e}}const $D=({value:e})=>{const n=/\d/.test(e),{num:i,prefix:a,suffix:s}=WD(e),[c,u]=M.useState(0);return M.useEffect(()=>{if(!n||i===0){u(i);return}const f=JD(0,i,{duration:1.5,ease:[.22,.61,.36,1],onUpdate:m=>u(Math.round(m))});return()=>f.stop()},[i,n]),n?x.jsxs("span",{className:"text-2xl font-bold text-(--accent)",children:[a,c,s]}):x.jsx("span",{className:"text-2xl font-bold text-(--accent)",children:e})},eN=({project:e})=>{const n=new Map((e.techDecisions??[]).map(i=>[i.tech,i.reason]));return x.jsxs(x.Fragment,{children:[x.jsxs(It.div,{className:"mb-6",variants:lr,children:[x.jsxs("div",{className:"flex items-baseline justify-between flex-wrap gap-2 mb-2",children:[e.subTitle&&x.jsx("span",{className:"text-xs font-medium text-(--accent) tracking-wider uppercase",children:e.subTitle}),e.period&&x.jsx("span",{className:"text-xs text-fg-muted font-mono",children:e.period})]}),x.jsx("h3",{className:"text-2xl font-bold mb-2 text-fg",children:e.title}),e.subtitle&&x.jsx("p",{className:"text-sm text-fg-muted leading-relaxed mb-3",children:e.subtitle}),e.team&&x.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs text-fg-dimmed",children:[x.jsx("span",{children:"👥"})," ",e.team]})]}),e.highlights&&e.highlights.length>0&&x.jsx(It.div,{className:`grid gap-3 mb-6 ${e.highlights.length===2?"grid-cols-2":"grid-cols-3"}`,variants:lr,children:e.highlights.map((i,a)=>x.jsxs("div",{className:"flex flex-col items-center justify-center p-4 rounded-xl bg-(--bg-soft) border border-(--border-subtle) text-center",children:[x.jsx($D,{value:i.value}),x.jsx("span",{className:"text-[11px] text-fg-muted mt-1.5",children:i.label})]},a))}),x.jsxs(It.div,{className:"flex flex-wrap items-center gap-2 mb-8",variants:lr,children:[e.tags.map(i=>{const a=n.get(i);return x.jsxs("span",{className:["group relative text-[11px] px-2.5 py-1 rounded-full","bg-(--bg-soft) border border-(--border-subtle) text-fg-muted","transition-colors duration-200","hover:border-(--accent-border) hover:text-(--accent)",a?"cursor-help":""].join(" "),title:a||void 0,children:[i,a&&x.jsx("span",{className:["pointer-events-none absolute z-50","top-full left-1/2 -translate-x-1/2 mt-2","px-3 py-2 rounded-lg","bg-(--bg-elevated) border border-(--border-subtle)","text-[11px] text-fg-muted leading-snug text-left","opacity-0 group-hover:opacity-100","transition-opacity duration-200","w-max max-w-[220px]","shadow-lg"].join(" "),children:a})]},i)}),e.links.length>0&&x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"w-px h-4 bg-(--border-subtle) mx-1"}),e.links.map(i=>x.jsxs("a",{href:i.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[11px] text-fg-muted hover:text-(--accent) transition-colors duration-200",children:[i.label," ",x.jsx("span",{children:"↗"})]},i.label))]})]})]})},tN=({open:e})=>x.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",className:`transition-transform duration-300 ${e?"rotate-180":""}`,children:x.jsx("polyline",{points:"4 6 8 10 12 6"})}),nN=({items:e})=>{const[n,i]=M.useState(null),a=s=>{i(n===s?null:s)};return x.jsxs(It.section,{variants:lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-4",children:"🚨 트러블 슈팅"}),x.jsx("div",{className:"space-y-3",children:e.map((s,c)=>{const u=n===c;return x.jsxs("div",{className:["rounded-xl border overflow-hidden transition-colors duration-300",u?"border-(--accent-border) bg-(--bg-soft)":"border-(--border-subtle) bg-(--bg)"].join(" "),children:[x.jsxs("button",{onClick:()=>a(c),className:"w-full flex items-center gap-3 p-4 text-left cursor-pointer group",children:[x.jsx("span",{className:"flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/10 text-red-400 text-xs font-bold shrink-0",children:String(c+1).padStart(2,"0")}),x.jsx("span",{className:"flex-1 font-medium text-sm text-fg",children:s.title}),x.jsx("span",{className:"text-fg-muted group-hover:text-fg transition-colors",children:x.jsx(tN,{open:u})})]}),x.jsx(Qv,{initial:!1,children:u&&x.jsx(It.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{height:{duration:.3,ease:[.22,.61,.36,1]},opacity:{duration:.2}},className:"overflow-hidden",children:x.jsxs("div",{className:"px-4 pb-4 space-y-3",children:[x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[x.jsxs("div",{className:"p-3 rounded-lg bg-red-500/5 border border-red-500/10",children:[x.jsx("div",{className:"text-[10px] font-bold text-red-400 uppercase tracking-wider mb-2",children:"Before — 문제 & 원인"}),x.jsxs("p",{className:"text-xs text-fg-muted leading-relaxed mb-1.5",children:[x.jsx("span",{className:"font-medium text-red-400/80",children:"문제:"})," ",s.problem]}),x.jsxs("p",{className:"text-xs text-fg-muted leading-relaxed",children:[x.jsx("span",{className:"font-medium text-red-400/80",children:"원인:"})," ",s.cause]})]}),x.jsxs("div",{className:"p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10",children:[x.jsx("div",{className:"text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-2",children:"After — 해결"}),x.jsx("p",{className:"text-xs text-fg-muted leading-relaxed",children:s.solution})]})]}),x.jsxs("div",{className:"p-3 rounded-lg bg-(--bg-elevated) border border-(--border-subtle)",children:[x.jsx("div",{className:"text-[10px] font-bold text-(--accent) uppercase tracking-wider mb-1.5",children:"📚 Learned"}),x.jsx("p",{className:"text-xs text-fg-muted leading-relaxed",children:s.learning})]})]})})})]},c)})})]})};function rN(e){const n=e.indexOf(":");if(n!==-1&&n<60)return{action:e.slice(0,n).trim(),detail:e.slice(n+1).trim()};const i=e.indexOf("→");return i!==-1?{action:e.slice(0,i).trim(),detail:e.slice(i+1).trim()}:{action:e}}const iN=({role:e})=>{const[n,i]=M.useState(!1),a=parseInt(e.percentage)||0,s=3,c=e.tasks,u=n?c:c.slice(0,s),f=c.length>s,h=a===100?"Individual Project":e.percentage;return x.jsxs(It.section,{variants:lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-4",children:"👩🏻‍💻 수행 역할"}),x.jsxs("div",{className:"mb-5",children:[x.jsxs("div",{className:"flex items-baseline justify-between mb-2",children:[x.jsx("span",{className:"text-sm font-medium text-fg",children:h}),x.jsxs("span",{className:"text-lg font-bold text-(--accent)",children:[a,"%"]})]}),x.jsx("div",{className:"h-2.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) overflow-hidden",children:x.jsx(It.div,{className:"h-full rounded-full bg-(--accent)",initial:{width:0},animate:{width:`${a}%`},transition:{duration:1,ease:[.22,.61,.36,1],delay:.2}})})]}),x.jsx("div",{className:"space-y-2.5",children:u.map((y,g)=>{const{action:b,detail:v}=rN(y);return x.jsxs("div",{className:"flex gap-2.5 p-3 rounded-lg bg-(--bg) border border-(--border-subtle) text-xs",children:[x.jsx("span",{className:"text-(--accent) mt-px shrink-0",children:"✓"}),x.jsxs("div",{children:[x.jsx("span",{className:"font-medium text-fg",children:b}),v&&x.jsxs("p",{className:"text-fg-muted mt-0.5 leading-relaxed",children:["→ ",v]})]})]},g)})}),f&&x.jsx("button",{onClick:()=>i(!n),className:"mt-3 text-xs text-(--accent) hover:text-(--accent-hover) transition-colors cursor-pointer",children:n?"접기":`+${c.length-s}개 더보기`})]})};function aN(e){return/수상|금상|최우수|은상|대상|장려|1위|2위|3위/.test(e)?{icon:"🏆",accentClass:"text-yellow-400",bgClass:"bg-yellow-500/5",borderClass:"border-yellow-500/15"}:/Top\s*\d|순위|위\b/i.test(e)?{icon:"🎯",accentClass:"text-yellow-400",bgClass:"bg-yellow-500/5",borderClass:"border-yellow-500/15"}:/%|정확도|점|달성|건|명|확보|성공|완료/.test(e)?{icon:"📊",accentClass:"text-emerald-400",bgClass:"bg-emerald-500/5",borderClass:"border-emerald-500/15"}:{icon:"✨",accentClass:"text-(--accent)",bgClass:"bg-(--bg-soft)",borderClass:"border-(--border-subtle)"}}function lN(e){const n=e.replace(/\b20\d{2}(학년도|년도|년)?\b/g,"").replace(/\d{1,2}월/g,"").replace(/\d{1,2}일/g,""),i=n.match(/(\d[\d,.]*\+?[%점건명위개])/);if(i)return i[1];const a=n.match(/(\d{2,}[\d,.]*\+?)/);return a?a[1]:null}const sN=({results:e})=>x.jsxs(It.section,{variants:lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-4",children:"✨ 성과"}),x.jsx("div",{className:`grid gap-3 ${e.length===1?"grid-cols-1":e.length===2?"grid-cols-1 md:grid-cols-2":"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`,children:e.map((n,i)=>{const{icon:a,accentClass:s,bgClass:c,borderClass:u}=aN(n),f=lN(n);return x.jsxs("div",{className:`flex flex-col p-4 rounded-xl border ${c} ${u}`,children:[x.jsx("span",{className:"text-lg mb-1",children:a}),f&&x.jsx("span",{className:`text-xl font-bold mb-1 ${s}`,children:f}),x.jsx("span",{className:"text-xs text-fg-muted leading-relaxed",children:n})]},i)})})]}),oN=()=>x.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[x.jsx("line",{x1:"4",y1:"4",x2:"12",y2:"12"}),x.jsx("line",{x1:"12",y1:"4",x2:"4",y2:"12"})]}),uN=({project:e,onClose:n})=>{const i=M.useRef(null);return M.useEffect(()=>{i.current?.focus()},[]),M.useEffect(()=>{const a=s=>{s.key==="Escape"&&n()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[n]),M.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),x.jsxs("div",{className:"fixed inset-0 z-9999 flex items-center justify-center px-4",children:[x.jsx(It.div,{className:"absolute inset-0 bg-(--modal-backdrop) backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)_saturate(1.4)]",variants:KD,initial:"hidden",animate:"visible",exit:"exit",onClick:n,"aria-label":"Close project detail"}),x.jsxs(It.div,{ref:i,tabIndex:-1,role:"dialog","aria-modal":"true","aria-label":e.title,className:"relative z-50 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl outline-none bg-(--bg-elevated) border border-(--border-subtle) shadow-(--modal-shadow) [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-r-2xl [&::-webkit-scrollbar-track]:my-2 [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-(--bg-elevated) [&::-webkit-scrollbar-thumb:hover]:bg-gray-300",variants:QD,initial:"hidden",animate:"visible",exit:"exit",children:[x.jsx("button",{onClick:n,"aria-label":"모달 닫기",className:"absolute top-4 right-4 z-50 p-2 rounded-full cursor-pointer bg-(--bg-elevated) text-fg-muted transition-all duration-250 ease-out hover:text-fg hover:scale-110 active:scale-95 border border-(--border-subtle) hover:border-(--border-hover)",children:x.jsx(oN,{})}),e.banner&&x.jsxs("div",{className:"relative w-full h-48 overflow-hidden rounded-t-2xl",children:[x.jsx("img",{src:e.banner,alt:"",className:"w-full h-full object-cover"}),x.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-(--bg-elevated) via-transparent to-transparent"})]}),x.jsxs(It.div,{className:"p-6 md:p-8",variants:ZD,initial:"hidden",animate:"visible",children:[x.jsx(eN,{project:e}),x.jsxs("div",{className:"space-y-10 text-sm leading-relaxed text-fg-muted",children:[e.images&&e.images.length>0&&x.jsxs(It.section,{variants:lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"📸 Screen & Architecture"}),x.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:e.images.map((a,s)=>x.jsxs("div",{className:"space-y-2",children:[x.jsx("div",{className:"rounded-lg overflow-hidden border border-(--border-subtle) bg-(--bg) aspect-video relative",children:x.jsx("img",{src:a.src,alt:a.caption,className:"object-cover w-full h-full"})}),a.caption&&x.jsx("p",{className:"text-xs text-center text-fg-muted",children:a.caption})]},s))})]}),e.overview&&x.jsxs(It.section,{variants:lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"🔎 프로젝트 개요"}),x.jsx("p",{children:e.overview})]}),e.results&&e.results.length>0&&x.jsx(sN,{results:e.results}),e.role&&x.jsx(iN,{role:e.role}),e.why&&x.jsxs(It.section,{variants:lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"💡 기술적 의사결정"}),x.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:e.why.map((a,s)=>x.jsxs("div",{className:"rounded-xl border border-(--border-subtle) overflow-hidden",children:[x.jsx("div",{className:"px-4 py-2.5 bg-(--bg-soft) border-b border-(--border-subtle)",children:x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("span",{className:"text-sm",children:"🤔"}),x.jsx("span",{className:"text-sm font-medium text-fg",children:a.title})]})}),x.jsx("div",{className:"px-4 py-3 bg-(--bg)",children:x.jsx("p",{className:"text-xs text-fg-muted leading-relaxed",children:a.desc})})]},s))})]}),e.troubleshooting&&e.troubleshooting.length>0&&x.jsx(nN,{items:e.troubleshooting})]})]})]})]})},gd=3e3,cN=Object.assign({"./data/LLM/LLM(LSTM-BERT).tsx":wk,"./data/Mogang/mogangData.tsx":Ak,"./data/P2P/P2PService.tsx":jk,"./data/Secure-Chat/Secure-chat.tsx":Nk,"./data/Ssang-sang/ssang-sangData.tsx":_k,"./data/Vary-Recycle/varyRecycle.tsx":Bk}),dn=Object.values(cN).map(e=>e.default??Object.values(e)[0]),fN=()=>{const[e,n]=M.useState(0),[i,a]=M.useState(!1),[s,c]=M.useState(!1),[u,f]=M.useState(null),m=Wo.useRef(0),h=Wo.useRef(0);M.useEffect(()=>{if(i||u)return;const _=setInterval(()=>{n(q=>(q+1)%dn.length)},gd);return()=>clearInterval(_)},[i,u]);const[y]=M.useState(()=>dn.map(()=>({jitterX:Math.random()*20-15,jitterY:Math.random()*30-15,baseRotate:Math.random()*16-10}))),[g,b]=M.useState(null);M.useEffect(()=>{if(typeof window>"u")return;const _=()=>{const q=window.innerWidth,X=q<768;console.log("Projects resize:",{width:q,mobile:X}),b(q),c(X)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const v=dn.find(_=>_.id===u)||null,w=_=>{f(_)},E=()=>{f(null)},C=(()=>{if(!g)return 140;const _=g/(dn.length+1);return Math.min(180,Math.max(70,_*.8))})(),N=(dn.length-1)/2,j=_=>{m.current=_.touches[0].clientX},V=_=>{h.current=_.touches[0].clientX},Y=()=>{if(!m.current||!h.current)return;const _=m.current-h.current;Math.abs(_)>50&&(_>0?n(X=>(X+1)%dn.length):n(X=>(X-1+dn.length)%dn.length)),m.current=0,h.current=0};return x.jsxs(x.Fragment,{children:[x.jsxs("section",{id:"projects",className:"mb-20",children:[x.jsxs("div",{className:va,children:[x.jsxs("div",{children:[x.jsx("p",{className:Sa,children:"Projects"}),x.jsx("h2",{className:wa,children:"주요 프로젝트"})]}),x.jsx("p",{className:mu,children:"아래 포인트나 카드를 클릭하면 상세 모달을 볼 수 있습니다."})]}),s?x.jsxs("div",{className:"flex flex-col gap-6",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[x.jsx("div",{className:"w-full overflow-hidden",onTouchStart:j,onTouchMove:V,onTouchEnd:Y,children:x.jsx("div",{className:"flex w-full transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform",style:{transform:`translate3d(-${e*100}%, 0, 0)`},children:dn.map(_=>x.jsx("div",{className:"w-full shrink-0 flex justify-center px-3",children:x.jsxs("article",{"data-project-id":_.id,className:"w-full max-w-3xl min-h-80 flex flex-col rounded-2xl bg-(--bg-elevated) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)] [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-(--border-subtle) cursor-pointer overflow-hidden",onClick:()=>w(_.id),children:[_.banner&&x.jsxs("div",{className:"relative w-full h-32 shrink-0 overflow-hidden",children:[x.jsx("img",{src:_.banner,alt:"",className:"w-full h-full object-cover grayscale-30"}),x.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.6)] to-transparent"})]}),x.jsxs("div",{className:"relative flex flex-col flex-1 justify-between z-10 p-4 text-[13px] text-fg-muted leading-[1.6]",children:[x.jsxs("div",{children:[x.jsx("h3",{className:"mb-1.5 text-fg text-[15px] font-semibold tracking-[0.02em]",children:_.title}),x.jsx("p",{className:"text-[12px] mb-2.5 line-clamp-2 text-fg opacity-100",children:_.summary}),_.highlights&&_.highlights.length>0&&x.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2.5",children:_.highlights.slice(0,2).map((q,X)=>x.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-(--accent-subtle) border border-(--accent-border) text-(--accent) font-medium",children:[q.value," ",q.label]},X))}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:_.tags.slice(0,6).map(q=>x.jsx("span",{className:Bd,children:q},q))})]}),x.jsx("div",{className:"flex gap-3 text-[11px]  mt-3",children:_.links.map(q=>x.jsxs("a",{href:q.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-fg-muted hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out",onClick:X=>X.stopPropagation(),children:[x.jsx("span",{children:q.label}),x.jsx("span",{children:"↗"})]},q.label))})]})]})},_.id))})}),x.jsxs("div",{className:"relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]",children:[x.jsx("div",{className:"h-px w-full max-w-3xl bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6",children:dn.map((_,q)=>{const X=q===e;return x.jsxs("button",{type:"button",className:"relative flex flex-col items-center outline-none cursor-pointer shrink-0",onMouseEnter:()=>n(q),onClick:()=>n(q),"aria-label":`${_.title}로 이동`,children:[x.jsx("span",{className:["mb-1 h-[3px] w-5 sm:w-7 rounded-full","bg-(--border-subtle)",X?"animate-border-pulse":"opacity-40"].join(" ")}),x.jsx(eu,{isActive:X,isPaused:i,duration:gd,size:16,strokeWidth:2}),x.jsx("span",{className:"mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-20 text-center line-clamp-2",children:_.subTitle})]},_.id)})})]})]}):x.jsxs("div",{className:"relative flex flex-col items-center",children:[x.jsx("div",{className:"relative w-full max-w-5xl h-[260px] flex items-center justify-center mb-10 overflow-visible",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:dn.map((_,q)=>{const X=y[q],I=q===e,Q=(q-N)*C+X.jitterX,te=X.jitterY,me=Math.round(Q),se=Math.round(te+(I?-10:6)),ne=I?`translateX(${me}px) translateY(${se}px) scale(1.05)`:`translateX(${me}px) translateY(${se}px) rotate(${X.baseRotate}deg) scale(0.96)`,P=I?999:100+q,ee=I?1:.8,ie=I?"none":"blur(0.8px)";return x.jsxs("article",{"data-project-id":_.id,className:["group absolute w-full","max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]","rounded-2xl bg-(--bg-elevated)","[html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]","[html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]","border border-(--border-subtle)","cursor-pointer overflow-hidden","transition-all duration-300 ease-out",I?["ring-2 ring-(--accent)","ring-offset-2","ring-offset-(--bg-soft)"].join(" "):"ring-0"].join(" "),style:{zIndex:P,transform:ne,opacity:ee,filter:ie},onClick:()=>w(_.id),onMouseEnter:()=>n(q),onFocus:()=>n(q),tabIndex:0,onKeyDown:oe=>{(oe.key==="Enter"||oe.key===" ")&&(oe.preventDefault(),w(_.id))},role:"button",children:[_.banner&&x.jsxs("div",{className:["absolute inset-0 z-0 pointer-events-none","transition-all duration-200",I?"opacity-20":"opacity-40"].join(" "),children:[x.jsx("img",{src:_.banner,alt:"",className:"w-full h-full object-cover grayscale-30"}),x.jsx("div",{className:["absolute inset-0 bg-linear-to-t to-transparent transition-colors duration-200",I?"from-[rgba(0,0,0,0.6)] [html[data-theme='light']_&]:from-[rgba(0,0,0,0.52)]":"from-[rgba(0,0,0,0.35)] [html[data-theme='light']_&]:from-[rgba(0,0,0,0.3)]"].join(" ")})]}),x.jsxs("div",{className:"relative z-10 p-4 text-[13px] text-fg-muted leading-[1.6]",children:[x.jsx("h3",{className:["mb-1.5","text-fg","transition-all duration-200",I?"text-[15px] font-semibold tracking-[0.02em]":"text-[14px] font-medium tracking-[0.01em]"].join(" "),children:_.title}),x.jsx("p",{className:["transition-all duration-200","text-[12px] mb-2.5 line-clamp-2",I?"text-fg opacity-100":"text-fg-muted opacity-80"].join(" "),children:_.summary}),_.highlights&&_.highlights.length>0&&x.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2.5",children:_.highlights.slice(0,2).map((oe,D)=>x.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-(--accent-subtle) border border-(--accent-border) text-(--accent) font-medium",children:[oe.value," ",oe.label]},D))}),x.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2.5",children:_.tags.slice(0,6).map(oe=>x.jsx("span",{className:Bd,children:oe},oe))}),x.jsx("div",{className:"flex gap-3 text-[11px] mt-1",children:_.links.map(oe=>x.jsxs("a",{href:oe.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-fg-muted hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out",onClick:D=>D.stopPropagation(),children:[x.jsx("span",{children:oe.label}),x.jsx("span",{children:"↗"})]},oe.label))})]})]},_.id)})}),x.jsxs("div",{className:"relative w-full max-w-3xl",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[x.jsx("div",{className:"h-px w-full bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between",children:dn.map((_,q)=>{const X=q===e,I=()=>{n(q),w(_.id)};return x.jsxs("button",{type:"button",className:"relative flex flex-col cursor-pointer items-center outline-none",onMouseEnter:()=>n(q),onFocus:()=>n(q),onClick:I,onKeyDown:R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),I())},children:[x.jsx("span",{className:["mb-1 h-[3px] w-7 rounded-full","bg-(--border-subtle)",X?"animate-border-pulse":"opacity-40"].join(" ")}),x.jsx(eu,{isActive:X,isPaused:i,duration:gd,size:16,strokeWidth:2}),x.jsx("span",{className:"mt-1 text-[10px] text-fg-muted max-w-20 text-center line-clamp-2",children:_.subTitle})]},_.id)})})]})]})]}),x.jsx(Qv,{children:v&&x.jsx(uN,{project:v,onClose:E},v.id)})]})},dN=()=>{const e=M.useCallback(n=>{const i=document.getElementById(n);if(i){const u=i.getBoundingClientRect().top+window.pageYOffset-64-20;window.scrollTo({top:u,behavior:"smooth"})}},[]);return x.jsxs("main",{className:"max-w-(--content-max-w) mx-auto px-5 pt-[calc(var(--header-height)+40px)] pb-20 text-[14px] text-fg leading-[1.6]",children:[x.jsx(bA,{onScrollTo:e}),x.jsx(SA,{}),x.jsx(_A,{}),x.jsx(bk,{}),x.jsx(fN,{}),x.jsx(nk,{}),x.jsx(WA,{})]})},hN=4200,ib=260;function El(...e){return e.filter(Boolean).join(" ")}const mN=()=>{const e=$l(),n=M.useMemo(()=>{const I=new Map;for(const R of hn)for(const Q of R.tags)I.set(Q,(I.get(Q)??0)+1);return Array.from(I.entries()).sort((R,Q)=>Q[1]-R[1]).slice(0,12)},[]),[i,a]=M.useState("ALL"),s=M.useMemo(()=>hn.slice(0,Math.min(3,hn.length)),[]),[c,u]=M.useState(0),[f,m]=M.useState(!1);M.useEffect(()=>{if(s.length<=1)return;const I=()=>{m(!0),window.setTimeout(()=>{u(Q=>(Q+1)%s.length),window.setTimeout(()=>m(!1),20)},ib)},R=window.setInterval(I,hN);return()=>window.clearInterval(R)},[s.length]);const h=s[c],y=M.useMemo(()=>i==="ALL"?hn:hn.filter(I=>I.tags.includes(i)),[i]),g=M.useMemo(()=>y,[y]),b=10,[v,w]=M.useState(b),[E,k]=M.useState(!1),[C,N]=M.useState(!1),j=M.useMemo(()=>g.slice(0,v),[g,v]),V=v<g.length,Y=I=>{I!==i&&(N(!0),setTimeout(()=>{a(I),w(b),k(!1),setTimeout(()=>N(!1),20)},200))},_=M.useCallback(async()=>{!V||E||(k(!0),await new Promise(I=>setTimeout(I,450)),w(I=>Math.min(I+b,g.length)),k(!1))},[V,E,g.length]),q=M.useRef(null);M.useEffect(()=>{const I=q.current;if(!I)return;const R=new IntersectionObserver(Q=>{Q[0]?.isIntersecting&&_()},{root:null,rootMargin:"800px 0px",threshold:0});return R.observe(I),()=>R.disconnect()},[_]);const X=I=>{e(`/blog/${I.slug}`)};return x.jsx("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base)",children:x.jsxs("div",{className:"max-w-[1100px] mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16",children:[x.jsx("div",{className:"flex items-end justify-between gap-4 mb-6",children:x.jsxs("div",{children:[x.jsx("h1",{className:"text-[32px] font-bold tracking-[-0.02em]",children:"Posting"}),x.jsx("p",{className:"text-[13px] text-fg-muted mt-2",children:"Front-End를 공부하며 배운 알뜰신잡"})]})}),h&&x.jsx("section",{className:"mb-10",children:x.jsx("article",{role:"button",tabIndex:0,onClick:()=>X(h),onKeyDown:I=>{(I.key==="Enter"||I.key===" ")&&X(h)},className:El("group relative overflow-hidden rounded-3xl border bg-(--bg-elevated) border-(--border-subtle)","cursor-pointer transition-all duration-300 hover:border-(--accent)","focus:outline-none focus:ring-2 focus:ring-(--accent)/40",f?"opacity-0":"opacity-100","transition-opacity"),style:{transitionDuration:`${ib}ms`},children:x.jsxs("div",{className:"grid md:grid-cols-[320px_1fr]",children:[x.jsxs("div",{className:"relative h-[250px] md:h-[250px] bg-(--bg-soft)",children:[h.cover?x.jsxs(x.Fragment,{children:[x.jsx("img",{src:h.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),x.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent"})]}):x.jsx("div",{className:"absolute inset-0 bg-(--bg-soft)"}),x.jsx("div",{className:"absolute left-5 top-5",children:x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-black/45 border border-white/10 text-white/90",children:"Today's"})})]}),x.jsxs("div",{className:"p-5 h-full flex flex-col justify-between",children:[x.jsx("h2",{className:"text-[22px] md:text-[24px] font-bold leading-snug tracking-[-0.02em] mb-3 line-clamp-1",children:h.title}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-5 line-clamp-2",children:h.excerpt}),x.jsxs("div",{className:"flex flex-col text-[12px] text-fg-muted w-full",children:[x.jsx("div",{className:"flex flex-wrap gap-2 mb-4 overflow-hidden max-h-8",children:h.tags.slice(0,6).map(I=>x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-(--accent)",children:I},I))}),x.jsx("span",{children:h.date})]})]})]})})}),x.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[x.jsxs("button",{type:"button",onClick:()=>Y("ALL"),className:El("text-[12px] px-3 py-1.5 rounded-full border transition-colors",i==="ALL"?"bg-(--bg-elevated) border-(--accent) text-(--fg-base)":"bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"),children:["전체보기 (",hn.length,")"]}),n.map(([I,R])=>x.jsxs("button",{type:"button",onClick:()=>Y(I),className:El("text-[12px] px-3 py-1.5 rounded-full border transition-colors",i===I?"bg-(--bg-elevated) border-(--accent) text-(--fg-base)":"bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"),children:[I," (",R,")"]},I))]}),x.jsxs("section",{className:El("grid gap-6 transition-opacity duration-200",C?"opacity-0":"opacity-100"),children:[j.map(I=>x.jsx("article",{onClick:()=>X(I),role:"button",tabIndex:0,onKeyDown:R=>{(R.key==="Enter"||R.key===" ")&&X(I)},className:El("group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle)","cursor-pointer transition-colors hover:border-(--accent)","focus:outline-none focus:ring-2 focus:ring-(--accent)/40"),children:x.jsxs("div",{className:"grid md:grid-cols-[240px_1fr] md:h-60",children:[I.cover&&x.jsxs("div",{className:"relative h-[180px] md:h-60 bg-(--bg-soft)",children:[x.jsx("img",{src:I.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),x.jsx("div",{className:"absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/55 via-black/15 to-transparent"})]}),x.jsxs("div",{className:"p-6 md:overflow-hidden flex flex-col h-full",children:[x.jsx("h3",{className:"text-[20px] font-semibold leading-snug mb-2 line-clamp-1",children:I.title}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2 shrink-0",children:I.excerpt}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-4 overflow-hidden max-h-14",children:I.tags.slice(0,8).map(R=>x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-(--accent)",children:R},R))}),x.jsx("div",{className:"flex items-center justify-between text-[12px] text-fg-muted mt-auto",children:x.jsx("span",{children:I.date})})]})]})},I.id)),x.jsx("div",{ref:q,className:"h-10"}),E&&x.jsx("div",{className:"py-6 text-center text-[13px] text-fg-muted",children:"불러오는 중..."}),!V&&x.jsx("div",{className:"py-10 text-center text-[13px] text-fg-muted",children:"더 이상 글이 없습니다."})]})]})})};function pN(e,n){const i={};return(e[e.length-1]===""?[...e,""]:e).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const gN=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yN=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,xN={};function ab(e,n){return(xN.jsx?yN:gN).test(e)}const bN=/[ \t\n\f\r]/g;function vN(e){return typeof e=="object"?e.type==="text"?lb(e.value):!1:lb(e)}function lb(e){return e.replace(bN,"")===""}class ls{constructor(n,i,a){this.normal=i,this.property=n,a&&(this.space=a)}}ls.prototype.normal={};ls.prototype.property={};ls.prototype.space=void 0;function fS(e,n){const i={},a={};for(const s of e)Object.assign(i,s.property),Object.assign(a,s.normal);return new ls(i,a,n)}function oh(e){return e.toLowerCase()}class Ht{constructor(n,i){this.attribute=i,this.property=n}}Ht.prototype.attribute="";Ht.prototype.booleanish=!1;Ht.prototype.boolean=!1;Ht.prototype.commaOrSpaceSeparated=!1;Ht.prototype.commaSeparated=!1;Ht.prototype.defined=!1;Ht.prototype.mustUseProperty=!1;Ht.prototype.number=!1;Ht.prototype.overloadedBoolean=!1;Ht.prototype.property="";Ht.prototype.spaceSeparated=!1;Ht.prototype.space=void 0;let SN=0;const Te=gi(),ut=gi(),uh=gi(),re=gi(),Xe=gi(),ha=gi(),Wt=gi();function gi(){return 2**++SN}const ch=Object.freeze(Object.defineProperty({__proto__:null,boolean:Te,booleanish:ut,commaOrSpaceSeparated:Wt,commaSeparated:ha,number:re,overloadedBoolean:uh,spaceSeparated:Xe},Symbol.toStringTag,{value:"Module"})),yd=Object.keys(ch);class im extends Ht{constructor(n,i,a,s){let c=-1;if(super(n,i),sb(this,"space",s),typeof a=="number")for(;++c<yd.length;){const u=yd[c];sb(this,yd[c],(a&ch[u])===ch[u])}}}im.prototype.defined=!0;function sb(e,n,i){i&&(e[n]=i)}function ka(e){const n={},i={};for(const[a,s]of Object.entries(e.properties)){const c=new im(a,e.transform(e.attributes||{},a),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(c.mustUseProperty=!0),n[a]=c,i[oh(a)]=a,i[oh(c.attribute)]=a}return new ls(n,i,e.space)}const dS=ka({properties:{ariaActiveDescendant:null,ariaAtomic:ut,ariaAutoComplete:null,ariaBusy:ut,ariaChecked:ut,ariaColCount:re,ariaColIndex:re,ariaColSpan:re,ariaControls:Xe,ariaCurrent:null,ariaDescribedBy:Xe,ariaDetails:null,ariaDisabled:ut,ariaDropEffect:Xe,ariaErrorMessage:null,ariaExpanded:ut,ariaFlowTo:Xe,ariaGrabbed:ut,ariaHasPopup:null,ariaHidden:ut,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Xe,ariaLevel:re,ariaLive:null,ariaModal:ut,ariaMultiLine:ut,ariaMultiSelectable:ut,ariaOrientation:null,ariaOwns:Xe,ariaPlaceholder:null,ariaPosInSet:re,ariaPressed:ut,ariaReadOnly:ut,ariaRelevant:null,ariaRequired:ut,ariaRoleDescription:Xe,ariaRowCount:re,ariaRowIndex:re,ariaRowSpan:re,ariaSelected:ut,ariaSetSize:re,ariaSort:null,ariaValueMax:re,ariaValueMin:re,ariaValueNow:re,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function hS(e,n){return n in e?e[n]:n}function mS(e,n){return hS(e,n.toLowerCase())}const wN=ka({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ha,acceptCharset:Xe,accessKey:Xe,action:null,allow:null,allowFullScreen:Te,allowPaymentRequest:Te,allowUserMedia:Te,alt:null,as:null,async:Te,autoCapitalize:null,autoComplete:Xe,autoFocus:Te,autoPlay:Te,blocking:Xe,capture:null,charSet:null,checked:Te,cite:null,className:Xe,cols:re,colSpan:null,content:null,contentEditable:ut,controls:Te,controlsList:Xe,coords:re|ha,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Te,defer:Te,dir:null,dirName:null,disabled:Te,download:uh,draggable:ut,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Te,formTarget:null,headers:Xe,height:re,hidden:uh,high:re,href:null,hrefLang:null,htmlFor:Xe,httpEquiv:Xe,id:null,imageSizes:null,imageSrcSet:null,inert:Te,inputMode:null,integrity:null,is:null,isMap:Te,itemId:null,itemProp:Xe,itemRef:Xe,itemScope:Te,itemType:Xe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Te,low:re,manifest:null,max:null,maxLength:re,media:null,method:null,min:null,minLength:re,multiple:Te,muted:Te,name:null,nonce:null,noModule:Te,noValidate:Te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Te,optimum:re,pattern:null,ping:Xe,placeholder:null,playsInline:Te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Te,referrerPolicy:null,rel:Xe,required:Te,reversed:Te,rows:re,rowSpan:re,sandbox:Xe,scope:null,scoped:Te,seamless:Te,selected:Te,shadowRootClonable:Te,shadowRootDelegatesFocus:Te,shadowRootMode:null,shape:null,size:re,sizes:null,slot:null,span:re,spellCheck:ut,src:null,srcDoc:null,srcLang:null,srcSet:null,start:re,step:null,style:null,tabIndex:re,target:null,title:null,translate:null,type:null,typeMustMatch:Te,useMap:null,value:ut,width:re,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Xe,axis:null,background:null,bgColor:null,border:re,borderColor:null,bottomMargin:re,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Te,declare:Te,event:null,face:null,frame:null,frameBorder:null,hSpace:re,leftMargin:re,link:null,longDesc:null,lowSrc:null,marginHeight:re,marginWidth:re,noResize:Te,noHref:Te,noShade:Te,noWrap:Te,object:null,profile:null,prompt:null,rev:null,rightMargin:re,rules:null,scheme:null,scrolling:ut,standby:null,summary:null,text:null,topMargin:re,valueType:null,version:null,vAlign:null,vLink:null,vSpace:re,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Te,disableRemotePlayback:Te,prefix:null,property:null,results:re,security:null,unselectable:null},space:"html",transform:mS}),TN=ka({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Wt,accentHeight:re,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:re,amplitude:re,arabicForm:null,ascent:re,attributeName:null,attributeType:null,azimuth:re,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:re,by:null,calcMode:null,capHeight:re,className:Xe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:re,diffuseConstant:re,direction:null,display:null,dur:null,divisor:re,dominantBaseline:null,download:Te,dx:null,dy:null,edgeMode:null,editable:null,elevation:re,enableBackground:null,end:null,event:null,exponent:re,externalResourcesRequired:null,fill:null,fillOpacity:re,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ha,g2:ha,glyphName:ha,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:re,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:re,horizOriginX:re,horizOriginY:re,id:null,ideographic:re,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:re,k:re,k1:re,k2:re,k3:re,k4:re,kernelMatrix:Wt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:re,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:re,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:re,overlineThickness:re,paintOrder:null,panose1:null,path:null,pathLength:re,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Xe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:re,pointsAtY:re,pointsAtZ:re,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Wt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Wt,rev:Wt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Wt,requiredFeatures:Wt,requiredFonts:Wt,requiredFormats:Wt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:re,specularExponent:re,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:re,strikethroughThickness:re,string:null,stroke:null,strokeDashArray:Wt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:re,strokeOpacity:re,strokeWidth:null,style:null,surfaceScale:re,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Wt,tabIndex:re,tableValues:null,target:null,targetX:re,targetY:re,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Wt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:re,underlineThickness:re,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:re,values:null,vAlphabetic:re,vMathematical:re,vectorEffect:null,vHanging:re,vIdeographic:re,version:null,vertAdvY:re,vertOriginX:re,vertOriginY:re,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:re,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:hS}),pS=ka({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),gS=ka({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:mS}),yS=ka({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),CN={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},AN=/[A-Z]/g,ob=/-[a-z]/g,kN=/^data[-\w.:]+$/i;function EN(e,n){const i=oh(n);let a=n,s=Ht;if(i in e.normal)return e.property[e.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&kN.test(n)){if(n.charAt(4)==="-"){const c=n.slice(5).replace(ob,MN);a="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=n.slice(4);if(!ob.test(c)){let u=c.replace(AN,jN);u.charAt(0)!=="-"&&(u="-"+u),n="data"+u}}s=im}return new s(a,n)}function jN(e){return"-"+e.toLowerCase()}function MN(e){return e.charAt(1).toUpperCase()}const DN=fS([dS,wN,pS,gS,yS],"html"),am=fS([dS,TN,pS,gS,yS],"svg");function NN(e){return e.join(" ").trim()}var la={},xd,ub;function RN(){if(ub)return xd;ub=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,f=/^\s+|\s+$/g,m=`
`,h="/",y="*",g="",b="comment",v="declaration";function w(k,C){if(typeof k!="string")throw new TypeError("First argument must be a string");if(!k)return[];C=C||{};var N=1,j=1;function V(se){var ne=se.match(n);ne&&(N+=ne.length);var P=se.lastIndexOf(m);j=~P?se.length-P:j+se.length}function Y(){var se={line:N,column:j};return function(ne){return ne.position=new _(se),I(),ne}}function _(se){this.start=se,this.end={line:N,column:j},this.source=C.source}_.prototype.content=k;function q(se){var ne=new Error(C.source+":"+N+":"+j+": "+se);if(ne.reason=se,ne.filename=C.source,ne.line=N,ne.column=j,ne.source=k,!C.silent)throw ne}function X(se){var ne=se.exec(k);if(ne){var P=ne[0];return V(P),k=k.slice(P.length),ne}}function I(){X(i)}function R(se){var ne;for(se=se||[];ne=Q();)ne!==!1&&se.push(ne);return se}function Q(){var se=Y();if(!(h!=k.charAt(0)||y!=k.charAt(1))){for(var ne=2;g!=k.charAt(ne)&&(y!=k.charAt(ne)||h!=k.charAt(ne+1));)++ne;if(ne+=2,g===k.charAt(ne-1))return q("End of comment missing");var P=k.slice(2,ne-2);return j+=2,V(P),k=k.slice(ne),j+=2,se({type:b,comment:P})}}function te(){var se=Y(),ne=X(a);if(ne){if(Q(),!X(s))return q("property missing ':'");var P=X(c),ee=se({type:v,property:E(ne[0].replace(e,g)),value:P?E(P[0].replace(e,g)):g});return X(u),ee}}function me(){var se=[];R(se);for(var ne;ne=te();)ne!==!1&&(se.push(ne),R(se));return se}return I(),me()}function E(k){return k?k.replace(f,g):g}return xd=w,xd}var cb;function ON(){if(cb)return la;cb=1;var e=la&&la.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(la,"__esModule",{value:!0}),la.default=i;const n=e(RN());function i(a,s){let c=null;if(!a||typeof a!="string")return c;const u=(0,n.default)(a),f=typeof s=="function";return u.forEach(m=>{if(m.type!=="declaration")return;const{property:h,value:y}=m;f?s(h,y,m):y&&(c=c||{},c[h]=y)}),c}return la}var jl={},fb;function _N(){if(fb)return jl;fb=1,Object.defineProperty(jl,"__esModule",{value:!0}),jl.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,i=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,c=function(h){return!h||i.test(h)||e.test(h)},u=function(h,y){return y.toUpperCase()},f=function(h,y){return"".concat(y,"-")},m=function(h,y){return y===void 0&&(y={}),c(h)?h:(h=h.toLowerCase(),y.reactCompat?h=h.replace(s,f):h=h.replace(a,f),h.replace(n,u))};return jl.camelCase=m,jl}var Ml,db;function LN(){if(db)return Ml;db=1;var e=Ml&&Ml.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},n=e(ON()),i=_N();function a(s,c){var u={};return!s||typeof s!="string"||(0,n.default)(s,function(f,m){f&&m&&(u[(0,i.camelCase)(f,c)]=m)}),u}return a.default=a,Ml=a,Ml}var zN=LN();const BN=bh(zN),xS=bS("end"),lm=bS("start");function bS(e){return n;function n(i){const a=i&&i.position&&i.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function VN(e){const n=lm(e),i=xS(e);if(n&&i)return{start:n,end:i}}function Vl(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?hb(e.position):"start"in e||"end"in e?hb(e):"line"in e||"column"in e?fh(e):""}function fh(e){return mb(e&&e.line)+":"+mb(e&&e.column)}function hb(e){return fh(e&&e.start)+"-"+fh(e&&e.end)}function mb(e){return e&&typeof e=="number"?e:1}class Ct extends Error{constructor(n,i,a){super(),typeof i=="string"&&(a=i,i=void 0);let s="",c={},u=!1;if(i&&("line"in i&&"column"in i?c={place:i}:"start"in i&&"end"in i?c={place:i}:"type"in i?c={ancestors:[i],place:i.position}:c={...i}),typeof n=="string"?s=n:!c.cause&&n&&(u=!0,s=n.message,c.cause=n),!c.ruleId&&!c.source&&typeof a=="string"){const m=a.indexOf(":");m===-1?c.ruleId=a:(c.source=a.slice(0,m),c.ruleId=a.slice(m+1))}if(!c.place&&c.ancestors&&c.ancestors){const m=c.ancestors[c.ancestors.length-1];m&&(c.place=m.position)}const f=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=f?f.line:void 0,this.name=Vl(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=u&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ct.prototype.file="";Ct.prototype.name="";Ct.prototype.reason="";Ct.prototype.message="";Ct.prototype.stack="";Ct.prototype.column=void 0;Ct.prototype.line=void 0;Ct.prototype.ancestors=void 0;Ct.prototype.cause=void 0;Ct.prototype.fatal=void 0;Ct.prototype.place=void 0;Ct.prototype.ruleId=void 0;Ct.prototype.source=void 0;const sm={}.hasOwnProperty,PN=new Map,IN=/[A-Z]/g,UN=new Set(["table","tbody","thead","tfoot","tr"]),HN=new Set(["td","th"]),vS="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function FN(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=n.filePath||void 0;let a;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=ZN(i,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=QN(i,n.jsx,n.jsxs)}const s={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:a,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?am:DN,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},c=SS(s,e,void 0);return c&&typeof c!="string"?c:s.create(e,s.Fragment,{children:c||void 0},void 0)}function SS(e,n,i){if(n.type==="element")return qN(e,n,i);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return GN(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return XN(e,n,i);if(n.type==="mdxjsEsm")return YN(e,n);if(n.type==="root")return JN(e,n,i);if(n.type==="text")return KN(e,n)}function qN(e,n,i){const a=e.schema;let s=a;n.tagName.toLowerCase()==="svg"&&a.space==="html"&&(s=am,e.schema=s),e.ancestors.push(n);const c=TS(e,n.tagName,!1),u=WN(e,n);let f=um(e,n);return UN.has(n.tagName)&&(f=f.filter(function(m){return typeof m=="string"?!vN(m):!0})),wS(e,u,c,n),om(u,f),e.ancestors.pop(),e.schema=a,e.create(n,c,u,i)}function GN(e,n){if(n.data&&n.data.estree&&e.evaluater){const a=n.data.estree.body[0];return a.type,e.evaluater.evaluateExpression(a.expression)}Kl(e,n.position)}function YN(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);Kl(e,n.position)}function XN(e,n,i){const a=e.schema;let s=a;n.name==="svg"&&a.space==="html"&&(s=am,e.schema=s),e.ancestors.push(n);const c=n.name===null?e.Fragment:TS(e,n.name,!0),u=$N(e,n),f=um(e,n);return wS(e,u,c,n),om(u,f),e.ancestors.pop(),e.schema=a,e.create(n,c,u,i)}function JN(e,n,i){const a={};return om(a,um(e,n)),e.create(n,e.Fragment,a,i)}function KN(e,n){return n.value}function wS(e,n,i,a){typeof i!="string"&&i!==e.Fragment&&e.passNode&&(n.node=a)}function om(e,n){if(n.length>0){const i=n.length>1?n:n[0];i&&(e.children=i)}}function QN(e,n,i){return a;function a(s,c,u,f){const h=Array.isArray(u.children)?i:n;return f?h(c,u,f):h(c,u)}}function ZN(e,n){return i;function i(a,s,c,u){const f=Array.isArray(c.children),m=lm(a);return n(s,c,u,f,{columnNumber:m?m.column-1:void 0,fileName:e,lineNumber:m?m.line:void 0},void 0)}}function WN(e,n){const i={};let a,s;for(s in n.properties)if(s!=="children"&&sm.call(n.properties,s)){const c=e4(e,s,n.properties[s]);if(c){const[u,f]=c;e.tableCellAlignToStyle&&u==="align"&&typeof f=="string"&&HN.has(n.tagName)?a=f:i[u]=f}}if(a){const c=i.style||(i.style={});c[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return i}function $N(e,n){const i={};for(const a of n.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const c=a.data.estree.body[0];c.type;const u=c.expression;u.type;const f=u.properties[0];f.type,Object.assign(i,e.evaluater.evaluateExpression(f.argument))}else Kl(e,n.position);else{const s=a.name;let c;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const f=a.value.data.estree.body[0];f.type,c=e.evaluater.evaluateExpression(f.expression)}else Kl(e,n.position);else c=a.value===null?!0:a.value;i[s]=c}return i}function um(e,n){const i=[];let a=-1;const s=e.passKeys?new Map:PN;for(;++a<n.children.length;){const c=n.children[a];let u;if(e.passKeys){const m=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(m){const h=s.get(m)||0;u=m+"-"+h,s.set(m,h+1)}}const f=SS(e,c,u);f!==void 0&&i.push(f)}return i}function e4(e,n,i){const a=EN(e.schema,n);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=a.commaSeparated?pN(i):NN(i)),a.property==="style"){let s=typeof i=="object"?i:t4(e,String(i));return e.stylePropertyNameCase==="css"&&(s=n4(s)),["style",s]}return[e.elementAttributeNameCase==="react"&&a.space?CN[a.property]||a.property:a.attribute,i]}}function t4(e,n){try{return BN(n,{reactCompat:!0})}catch(i){if(e.ignoreInvalidStyle)return{};const a=i,s=new Ct("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=e.filePath||void 0,s.url=vS+"#cannot-parse-style-attribute",s}}function TS(e,n,i){let a;if(!i)a={type:"Literal",value:n};else if(n.includes(".")){const s=n.split(".");let c=-1,u;for(;++c<s.length;){const f=ab(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};u=u?{type:"MemberExpression",object:u,property:f,computed:!!(c&&f.type==="Literal"),optional:!1}:f}a=u}else a=ab(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(a.type==="Literal"){const s=a.value;return sm.call(e.components,s)?e.components[s]:s}if(e.evaluater)return e.evaluater.evaluateExpression(a);Kl(e)}function Kl(e,n){const i=new Ct("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=vS+"#cannot-handle-mdx-estrees-without-createevaluater",i}function n4(e){const n={};let i;for(i in e)sm.call(e,i)&&(n[r4(i)]=e[i]);return n}function r4(e){let n=e.replace(IN,i4);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function i4(e){return"-"+e.toLowerCase()}const bd={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},a4={};function cm(e,n){const i=a4,a=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,s=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return CS(e,a,s)}function CS(e,n,i){if(l4(e)){if("value"in e)return e.type==="html"&&!i?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return pb(e.children,n,i)}return Array.isArray(e)?pb(e,n,i):""}function pb(e,n,i){const a=[];let s=-1;for(;++s<e.length;)a[s]=CS(e[s],n,i);return a.join("")}function l4(e){return!!(e&&typeof e=="object")}const gb=document.createElement("i");function fm(e){const n="&"+e+";";gb.innerHTML=n;const i=gb.textContent;return i.charCodeAt(i.length-1)===59&&e!=="semi"||i===n?!1:i}function $t(e,n,i,a){const s=e.length;let c=0,u;if(n<0?n=-n>s?0:s+n:n=n>s?s:n,i=i>0?i:0,a.length<1e4)u=Array.from(a),u.unshift(n,i),e.splice(...u);else for(i&&e.splice(n,i);c<a.length;)u=a.slice(c,c+1e4),u.unshift(n,0),e.splice(...u),c+=1e4,n+=1e4}function mn(e,n){return e.length>0?($t(e,e.length,0,n),e):n}const yb={}.hasOwnProperty;function AS(e){const n={};let i=-1;for(;++i<e.length;)s4(n,e[i]);return n}function s4(e,n){let i;for(i in n){const s=(yb.call(e,i)?e[i]:void 0)||(e[i]={}),c=n[i];let u;if(c)for(u in c){yb.call(s,u)||(s[u]=[]);const f=c[u];o4(s[u],Array.isArray(f)?f:f?[f]:[])}}}function o4(e,n){let i=-1;const a=[];for(;++i<n.length;)(n[i].add==="after"?e:a).push(n[i]);$t(e,0,0,a)}function kS(e,n){const i=Number.parseInt(e,n);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function Cn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const jt=Ur(/[A-Za-z]/),Tt=Ur(/[\dA-Za-z]/),u4=Ur(/[#-'*+\--9=?A-Z^-~]/);function ou(e){return e!==null&&(e<32||e===127)}const dh=Ur(/\d/),c4=Ur(/[\dA-Fa-f]/),f4=Ur(/[!-/:-@[-`{-~]/);function ge(e){return e!==null&&e<-2}function Ye(e){return e!==null&&(e<0||e===32)}function Ee(e){return e===-2||e===-1||e===32}const Su=Ur(new RegExp("\\p{P}|\\p{S}","u")),pi=Ur(/\s/);function Ur(e){return n;function n(i){return i!==null&&i>-1&&e.test(String.fromCharCode(i))}}function Ea(e){const n=[];let i=-1,a=0,s=0;for(;++i<e.length;){const c=e.charCodeAt(i);let u="";if(c===37&&Tt(e.charCodeAt(i+1))&&Tt(e.charCodeAt(i+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(u=String.fromCharCode(c));else if(c>55295&&c<57344){const f=e.charCodeAt(i+1);c<56320&&f>56319&&f<57344?(u=String.fromCharCode(c,f),s=1):u="�"}else u=String.fromCharCode(c);u&&(n.push(e.slice(a,i),encodeURIComponent(u)),a=i+s+1,u=""),s&&(i+=s,s=0)}return n.join("")+e.slice(a)}function Re(e,n,i,a){const s=a?a-1:Number.POSITIVE_INFINITY;let c=0;return u;function u(m){return Ee(m)?(e.enter(i),f(m)):n(m)}function f(m){return Ee(m)&&c++<s?(e.consume(m),f):(e.exit(i),n(m))}}const d4={tokenize:h4};function h4(e){const n=e.attempt(this.parser.constructs.contentInitial,a,s);let i;return n;function a(f){if(f===null){e.consume(f);return}return e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Re(e,n,"linePrefix")}function s(f){return e.enter("paragraph"),c(f)}function c(f){const m=e.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=m),i=m,u(f)}function u(f){if(f===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(f);return}return ge(f)?(e.consume(f),e.exit("chunkText"),c):(e.consume(f),u)}}const m4={tokenize:p4},xb={tokenize:g4};function p4(e){const n=this,i=[];let a=0,s,c,u;return f;function f(j){if(a<i.length){const V=i[a];return n.containerState=V[1],e.attempt(V[0].continuation,m,h)(j)}return h(j)}function m(j){if(a++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,s&&N();const V=n.events.length;let Y=V,_;for(;Y--;)if(n.events[Y][0]==="exit"&&n.events[Y][1].type==="chunkFlow"){_=n.events[Y][1].end;break}C(a);let q=V;for(;q<n.events.length;)n.events[q][1].end={..._},q++;return $t(n.events,Y+1,0,n.events.slice(V)),n.events.length=q,h(j)}return f(j)}function h(j){if(a===i.length){if(!s)return b(j);if(s.currentConstruct&&s.currentConstruct.concrete)return w(j);n.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(xb,y,g)(j)}function y(j){return s&&N(),C(a),b(j)}function g(j){return n.parser.lazy[n.now().line]=a!==i.length,u=n.now().offset,w(j)}function b(j){return n.containerState={},e.attempt(xb,v,w)(j)}function v(j){return a++,i.push([n.currentConstruct,n.containerState]),b(j)}function w(j){if(j===null){s&&N(),C(0),e.consume(j);return}return s=s||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:c}),E(j)}function E(j){if(j===null){k(e.exit("chunkFlow"),!0),C(0),e.consume(j);return}return ge(j)?(e.consume(j),k(e.exit("chunkFlow")),a=0,n.interrupt=void 0,f):(e.consume(j),E)}function k(j,V){const Y=n.sliceStream(j);if(V&&Y.push(null),j.previous=c,c&&(c.next=j),c=j,s.defineSkip(j.start),s.write(Y),n.parser.lazy[j.start.line]){let _=s.events.length;for(;_--;)if(s.events[_][1].start.offset<u&&(!s.events[_][1].end||s.events[_][1].end.offset>u))return;const q=n.events.length;let X=q,I,R;for(;X--;)if(n.events[X][0]==="exit"&&n.events[X][1].type==="chunkFlow"){if(I){R=n.events[X][1].end;break}I=!0}for(C(a),_=q;_<n.events.length;)n.events[_][1].end={...R},_++;$t(n.events,X+1,0,n.events.slice(q)),n.events.length=_}}function C(j){let V=i.length;for(;V-- >j;){const Y=i[V];n.containerState=Y[1],Y[0].exit.call(n,e)}i.length=j}function N(){s.write([null]),c=void 0,s=void 0,n.containerState._closeFlow=void 0}}function g4(e,n,i){return Re(e,e.attempt(this.parser.constructs.document,n,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ya(e){if(e===null||Ye(e)||pi(e))return 1;if(Su(e))return 2}function wu(e,n,i){const a=[];let s=-1;for(;++s<e.length;){const c=e[s].resolveAll;c&&!a.includes(c)&&(n=c(n,i),a.push(c))}return n}const hh={name:"attention",resolveAll:y4,tokenize:x4};function y4(e,n){let i=-1,a,s,c,u,f,m,h,y;for(;++i<e.length;)if(e[i][0]==="enter"&&e[i][1].type==="attentionSequence"&&e[i][1]._close){for(a=i;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&n.sliceSerialize(e[a][1]).charCodeAt(0)===n.sliceSerialize(e[i][1]).charCodeAt(0)){if((e[a][1]._close||e[i][1]._open)&&(e[i][1].end.offset-e[i][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[i][1].end.offset-e[i][1].start.offset)%3))continue;m=e[a][1].end.offset-e[a][1].start.offset>1&&e[i][1].end.offset-e[i][1].start.offset>1?2:1;const g={...e[a][1].end},b={...e[i][1].start};bb(g,-m),bb(b,m),u={type:m>1?"strongSequence":"emphasisSequence",start:g,end:{...e[a][1].end}},f={type:m>1?"strongSequence":"emphasisSequence",start:{...e[i][1].start},end:b},c={type:m>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[i][1].start}},s={type:m>1?"strong":"emphasis",start:{...u.start},end:{...f.end}},e[a][1].end={...u.start},e[i][1].start={...f.end},h=[],e[a][1].end.offset-e[a][1].start.offset&&(h=mn(h,[["enter",e[a][1],n],["exit",e[a][1],n]])),h=mn(h,[["enter",s,n],["enter",u,n],["exit",u,n],["enter",c,n]]),h=mn(h,wu(n.parser.constructs.insideSpan.null,e.slice(a+1,i),n)),h=mn(h,[["exit",c,n],["enter",f,n],["exit",f,n],["exit",s,n]]),e[i][1].end.offset-e[i][1].start.offset?(y=2,h=mn(h,[["enter",e[i][1],n],["exit",e[i][1],n]])):y=0,$t(e,a-1,i-a+3,h),i=a+h.length-y-2;break}}for(i=-1;++i<e.length;)e[i][1].type==="attentionSequence"&&(e[i][1].type="data");return e}function x4(e,n){const i=this.parser.constructs.attentionMarkers.null,a=this.previous,s=ya(a);let c;return u;function u(m){return c=m,e.enter("attentionSequence"),f(m)}function f(m){if(m===c)return e.consume(m),f;const h=e.exit("attentionSequence"),y=ya(m),g=!y||y===2&&s||i.includes(m),b=!s||s===2&&y||i.includes(a);return h._open=!!(c===42?g:g&&(s||!b)),h._close=!!(c===42?b:b&&(y||!g)),n(m)}}function bb(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const b4={name:"autolink",tokenize:v4};function v4(e,n,i){let a=0;return s;function s(v){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),c}function c(v){return jt(v)?(e.consume(v),u):v===64?i(v):h(v)}function u(v){return v===43||v===45||v===46||Tt(v)?(a=1,f(v)):h(v)}function f(v){return v===58?(e.consume(v),a=0,m):(v===43||v===45||v===46||Tt(v))&&a++<32?(e.consume(v),f):(a=0,h(v))}function m(v){return v===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n):v===null||v===32||v===60||ou(v)?i(v):(e.consume(v),m)}function h(v){return v===64?(e.consume(v),y):u4(v)?(e.consume(v),h):i(v)}function y(v){return Tt(v)?g(v):i(v)}function g(v){return v===46?(e.consume(v),a=0,y):v===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n):b(v)}function b(v){if((v===45||Tt(v))&&a++<63){const w=v===45?b:g;return e.consume(v),w}return i(v)}}const ss={partial:!0,tokenize:S4};function S4(e,n,i){return a;function a(c){return Ee(c)?Re(e,s,"linePrefix")(c):s(c)}function s(c){return c===null||ge(c)?n(c):i(c)}}const ES={continuation:{tokenize:T4},exit:C4,name:"blockQuote",tokenize:w4};function w4(e,n,i){const a=this;return s;function s(u){if(u===62){const f=a.containerState;return f.open||(e.enter("blockQuote",{_container:!0}),f.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(u),e.exit("blockQuoteMarker"),c}return i(u)}function c(u){return Ee(u)?(e.enter("blockQuotePrefixWhitespace"),e.consume(u),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(u))}}function T4(e,n,i){const a=this;return s;function s(u){return Ee(u)?Re(e,c,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u):c(u)}function c(u){return e.attempt(ES,n,i)(u)}}function C4(e){e.exit("blockQuote")}const jS={name:"characterEscape",tokenize:A4};function A4(e,n,i){return a;function a(c){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(c),e.exit("escapeMarker"),s}function s(c){return f4(c)?(e.enter("characterEscapeValue"),e.consume(c),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):i(c)}}const MS={name:"characterReference",tokenize:k4};function k4(e,n,i){const a=this;let s=0,c,u;return f;function f(g){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(g),e.exit("characterReferenceMarker"),m}function m(g){return g===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(g),e.exit("characterReferenceMarkerNumeric"),h):(e.enter("characterReferenceValue"),c=31,u=Tt,y(g))}function h(g){return g===88||g===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(g),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),c=6,u=c4,y):(e.enter("characterReferenceValue"),c=7,u=dh,y(g))}function y(g){if(g===59&&s){const b=e.exit("characterReferenceValue");return u===Tt&&!fm(a.sliceSerialize(b))?i(g):(e.enter("characterReferenceMarker"),e.consume(g),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return u(g)&&s++<c?(e.consume(g),y):i(g)}}const vb={partial:!0,tokenize:j4},Sb={concrete:!0,name:"codeFenced",tokenize:E4};function E4(e,n,i){const a=this,s={partial:!0,tokenize:Y};let c=0,u=0,f;return m;function m(_){return h(_)}function h(_){const q=a.events[a.events.length-1];return c=q&&q[1].type==="linePrefix"?q[2].sliceSerialize(q[1],!0).length:0,f=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),y(_)}function y(_){return _===f?(u++,e.consume(_),y):u<3?i(_):(e.exit("codeFencedFenceSequence"),Ee(_)?Re(e,g,"whitespace")(_):g(_))}function g(_){return _===null||ge(_)?(e.exit("codeFencedFence"),a.interrupt?n(_):e.check(vb,E,V)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),b(_))}function b(_){return _===null||ge(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),g(_)):Ee(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Re(e,v,"whitespace")(_)):_===96&&_===f?i(_):(e.consume(_),b)}function v(_){return _===null||ge(_)?g(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(_))}function w(_){return _===null||ge(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),g(_)):_===96&&_===f?i(_):(e.consume(_),w)}function E(_){return e.attempt(s,V,k)(_)}function k(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),C}function C(_){return c>0&&Ee(_)?Re(e,N,"linePrefix",c+1)(_):N(_)}function N(_){return _===null||ge(_)?e.check(vb,E,V)(_):(e.enter("codeFlowValue"),j(_))}function j(_){return _===null||ge(_)?(e.exit("codeFlowValue"),N(_)):(e.consume(_),j)}function V(_){return e.exit("codeFenced"),n(_)}function Y(_,q,X){let I=0;return R;function R(ne){return _.enter("lineEnding"),_.consume(ne),_.exit("lineEnding"),Q}function Q(ne){return _.enter("codeFencedFence"),Ee(ne)?Re(_,te,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ne):te(ne)}function te(ne){return ne===f?(_.enter("codeFencedFenceSequence"),me(ne)):X(ne)}function me(ne){return ne===f?(I++,_.consume(ne),me):I>=u?(_.exit("codeFencedFenceSequence"),Ee(ne)?Re(_,se,"whitespace")(ne):se(ne)):X(ne)}function se(ne){return ne===null||ge(ne)?(_.exit("codeFencedFence"),q(ne)):X(ne)}}}function j4(e,n,i){const a=this;return s;function s(u){return u===null?i(u):(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),c)}function c(u){return a.parser.lazy[a.now().line]?i(u):n(u)}}const vd={name:"codeIndented",tokenize:D4},M4={partial:!0,tokenize:N4};function D4(e,n,i){const a=this;return s;function s(h){return e.enter("codeIndented"),Re(e,c,"linePrefix",5)(h)}function c(h){const y=a.events[a.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?u(h):i(h)}function u(h){return h===null?m(h):ge(h)?e.attempt(M4,u,m)(h):(e.enter("codeFlowValue"),f(h))}function f(h){return h===null||ge(h)?(e.exit("codeFlowValue"),u(h)):(e.consume(h),f)}function m(h){return e.exit("codeIndented"),n(h)}}function N4(e,n,i){const a=this;return s;function s(u){return a.parser.lazy[a.now().line]?i(u):ge(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),s):Re(e,c,"linePrefix",5)(u)}function c(u){const f=a.events[a.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?n(u):ge(u)?s(u):i(u)}}const R4={name:"codeText",previous:_4,resolve:O4,tokenize:L4};function O4(e){let n=e.length-4,i=3,a,s;if((e[i][1].type==="lineEnding"||e[i][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(a=i;++a<n;)if(e[a][1].type==="codeTextData"){e[i][1].type="codeTextPadding",e[n][1].type="codeTextPadding",i+=2,n-=2;break}}for(a=i-1,n++;++a<=n;)s===void 0?a!==n&&e[a][1].type!=="lineEnding"&&(s=a):(a===n||e[a][1].type==="lineEnding")&&(e[s][1].type="codeTextData",a!==s+2&&(e[s][1].end=e[a-1][1].end,e.splice(s+2,a-s-2),n-=a-s-2,a=s+2),s=void 0);return e}function _4(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function L4(e,n,i){let a=0,s,c;return u;function u(g){return e.enter("codeText"),e.enter("codeTextSequence"),f(g)}function f(g){return g===96?(e.consume(g),a++,f):(e.exit("codeTextSequence"),m(g))}function m(g){return g===null?i(g):g===32?(e.enter("space"),e.consume(g),e.exit("space"),m):g===96?(c=e.enter("codeTextSequence"),s=0,y(g)):ge(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),m):(e.enter("codeTextData"),h(g))}function h(g){return g===null||g===32||g===96||ge(g)?(e.exit("codeTextData"),m(g)):(e.consume(g),h)}function y(g){return g===96?(e.consume(g),s++,y):s===a?(e.exit("codeTextSequence"),e.exit("codeText"),n(g)):(c.type="codeTextData",h(g))}}class z4{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,i){const a=i??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(n,a):n>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(n,i,a){const s=i||0;this.setCursor(Math.trunc(n));const c=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return a&&Dl(this.left,a),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Dl(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Dl(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const i=this.left.splice(n,Number.POSITIVE_INFINITY);Dl(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Dl(this.left,i.reverse())}}}function Dl(e,n){let i=0;if(n.length<1e4)e.push(...n);else for(;i<n.length;)e.push(...n.slice(i,i+1e4)),i+=1e4}function DS(e){const n={};let i=-1,a,s,c,u,f,m,h;const y=new z4(e);for(;++i<y.length;){for(;i in n;)i=n[i];if(a=y.get(i),i&&a[1].type==="chunkFlow"&&y.get(i-1)[1].type==="listItemPrefix"&&(m=a[1]._tokenizer.events,c=0,c<m.length&&m[c][1].type==="lineEndingBlank"&&(c+=2),c<m.length&&m[c][1].type==="content"))for(;++c<m.length&&m[c][1].type!=="content";)m[c][1].type==="chunkText"&&(m[c][1]._isInFirstContentOfListItem=!0,c++);if(a[0]==="enter")a[1].contentType&&(Object.assign(n,B4(y,i)),i=n[i],h=!0);else if(a[1]._container){for(c=i,s=void 0;c--;)if(u=y.get(c),u[1].type==="lineEnding"||u[1].type==="lineEndingBlank")u[0]==="enter"&&(s&&(y.get(s)[1].type="lineEndingBlank"),u[1].type="lineEnding",s=c);else if(!(u[1].type==="linePrefix"||u[1].type==="listItemIndent"))break;s&&(a[1].end={...y.get(s)[1].start},f=y.slice(s,i),f.unshift(a),y.splice(s,i-s+1,f))}}return $t(e,0,Number.POSITIVE_INFINITY,y.slice(0)),!h}function B4(e,n){const i=e.get(n)[1],a=e.get(n)[2];let s=n-1;const c=[];let u=i._tokenizer;u||(u=a.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(u._contentTypeTextTrailing=!0));const f=u.events,m=[],h={};let y,g,b=-1,v=i,w=0,E=0;const k=[E];for(;v;){for(;e.get(++s)[1]!==v;);c.push(s),v._tokenizer||(y=a.sliceStream(v),v.next||y.push(null),g&&u.defineSkip(v.start),v._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=!0),u.write(y),v._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=void 0)),g=v,v=v.next}for(v=i;++b<f.length;)f[b][0]==="exit"&&f[b-1][0]==="enter"&&f[b][1].type===f[b-1][1].type&&f[b][1].start.line!==f[b][1].end.line&&(E=b+1,k.push(E),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(u.events=[],v?(v._tokenizer=void 0,v.previous=void 0):k.pop(),b=k.length;b--;){const C=f.slice(k[b],k[b+1]),N=c.pop();m.push([N,N+C.length-1]),e.splice(N,2,C)}for(m.reverse(),b=-1;++b<m.length;)h[w+m[b][0]]=w+m[b][1],w+=m[b][1]-m[b][0]-1;return h}const V4={resolve:I4,tokenize:U4},P4={partial:!0,tokenize:H4};function I4(e){return DS(e),e}function U4(e,n){let i;return a;function a(f){return e.enter("content"),i=e.enter("chunkContent",{contentType:"content"}),s(f)}function s(f){return f===null?c(f):ge(f)?e.check(P4,u,c)(f):(e.consume(f),s)}function c(f){return e.exit("chunkContent"),e.exit("content"),n(f)}function u(f){return e.consume(f),e.exit("chunkContent"),i.next=e.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,s}}function H4(e,n,i){const a=this;return s;function s(u){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),Re(e,c,"linePrefix")}function c(u){if(u===null||ge(u))return i(u);const f=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?n(u):e.interrupt(a.parser.constructs.flow,i,n)(u)}}function NS(e,n,i,a,s,c,u,f,m){const h=m||Number.POSITIVE_INFINITY;let y=0;return g;function g(C){return C===60?(e.enter(a),e.enter(s),e.enter(c),e.consume(C),e.exit(c),b):C===null||C===32||C===41||ou(C)?i(C):(e.enter(a),e.enter(u),e.enter(f),e.enter("chunkString",{contentType:"string"}),E(C))}function b(C){return C===62?(e.enter(c),e.consume(C),e.exit(c),e.exit(s),e.exit(a),n):(e.enter(f),e.enter("chunkString",{contentType:"string"}),v(C))}function v(C){return C===62?(e.exit("chunkString"),e.exit(f),b(C)):C===null||C===60||ge(C)?i(C):(e.consume(C),C===92?w:v)}function w(C){return C===60||C===62||C===92?(e.consume(C),v):v(C)}function E(C){return!y&&(C===null||C===41||Ye(C))?(e.exit("chunkString"),e.exit(f),e.exit(u),e.exit(a),n(C)):y<h&&C===40?(e.consume(C),y++,E):C===41?(e.consume(C),y--,E):C===null||C===32||C===40||ou(C)?i(C):(e.consume(C),C===92?k:E)}function k(C){return C===40||C===41||C===92?(e.consume(C),E):E(C)}}function RS(e,n,i,a,s,c){const u=this;let f=0,m;return h;function h(v){return e.enter(a),e.enter(s),e.consume(v),e.exit(s),e.enter(c),y}function y(v){return f>999||v===null||v===91||v===93&&!m||v===94&&!f&&"_hiddenFootnoteSupport"in u.parser.constructs?i(v):v===93?(e.exit(c),e.enter(s),e.consume(v),e.exit(s),e.exit(a),n):ge(v)?(e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),y):(e.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||v===91||v===93||ge(v)||f++>999?(e.exit("chunkString"),y(v)):(e.consume(v),m||(m=!Ee(v)),v===92?b:g)}function b(v){return v===91||v===92||v===93?(e.consume(v),f++,g):g(v)}}function OS(e,n,i,a,s,c){let u;return f;function f(b){return b===34||b===39||b===40?(e.enter(a),e.enter(s),e.consume(b),e.exit(s),u=b===40?41:b,m):i(b)}function m(b){return b===u?(e.enter(s),e.consume(b),e.exit(s),e.exit(a),n):(e.enter(c),h(b))}function h(b){return b===u?(e.exit(c),m(u)):b===null?i(b):ge(b)?(e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),Re(e,h,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===u||b===null||ge(b)?(e.exit("chunkString"),h(b)):(e.consume(b),b===92?g:y)}function g(b){return b===u||b===92?(e.consume(b),y):y(b)}}function Pl(e,n){let i;return a;function a(s){return ge(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i=!0,a):Ee(s)?Re(e,a,i?"linePrefix":"lineSuffix")(s):n(s)}}const F4={name:"definition",tokenize:G4},q4={partial:!0,tokenize:Y4};function G4(e,n,i){const a=this;let s;return c;function c(v){return e.enter("definition"),u(v)}function u(v){return RS.call(a,e,f,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function f(v){return s=Cn(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),v===58?(e.enter("definitionMarker"),e.consume(v),e.exit("definitionMarker"),m):i(v)}function m(v){return Ye(v)?Pl(e,h)(v):h(v)}function h(v){return NS(e,y,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function y(v){return e.attempt(q4,g,g)(v)}function g(v){return Ee(v)?Re(e,b,"whitespace")(v):b(v)}function b(v){return v===null||ge(v)?(e.exit("definition"),a.parser.defined.push(s),n(v)):i(v)}}function Y4(e,n,i){return a;function a(f){return Ye(f)?Pl(e,s)(f):i(f)}function s(f){return OS(e,c,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function c(f){return Ee(f)?Re(e,u,"whitespace")(f):u(f)}function u(f){return f===null||ge(f)?n(f):i(f)}}const X4={name:"hardBreakEscape",tokenize:J4};function J4(e,n,i){return a;function a(c){return e.enter("hardBreakEscape"),e.consume(c),s}function s(c){return ge(c)?(e.exit("hardBreakEscape"),n(c)):i(c)}}const K4={name:"headingAtx",resolve:Q4,tokenize:Z4};function Q4(e,n){let i=e.length-2,a=3,s,c;return e[a][1].type==="whitespace"&&(a+=2),i-2>a&&e[i][1].type==="whitespace"&&(i-=2),e[i][1].type==="atxHeadingSequence"&&(a===i-1||i-4>a&&e[i-2][1].type==="whitespace")&&(i-=a+1===i?2:4),i>a&&(s={type:"atxHeadingText",start:e[a][1].start,end:e[i][1].end},c={type:"chunkText",start:e[a][1].start,end:e[i][1].end,contentType:"text"},$t(e,a,i-a+1,[["enter",s,n],["enter",c,n],["exit",c,n],["exit",s,n]])),e}function Z4(e,n,i){let a=0;return s;function s(y){return e.enter("atxHeading"),c(y)}function c(y){return e.enter("atxHeadingSequence"),u(y)}function u(y){return y===35&&a++<6?(e.consume(y),u):y===null||Ye(y)?(e.exit("atxHeadingSequence"),f(y)):i(y)}function f(y){return y===35?(e.enter("atxHeadingSequence"),m(y)):y===null||ge(y)?(e.exit("atxHeading"),n(y)):Ee(y)?Re(e,f,"whitespace")(y):(e.enter("atxHeadingText"),h(y))}function m(y){return y===35?(e.consume(y),m):(e.exit("atxHeadingSequence"),f(y))}function h(y){return y===null||y===35||Ye(y)?(e.exit("atxHeadingText"),f(y)):(e.consume(y),h)}}const W4=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],wb=["pre","script","style","textarea"],$4={concrete:!0,name:"htmlFlow",resolveTo:nR,tokenize:rR},eR={partial:!0,tokenize:aR},tR={partial:!0,tokenize:iR};function nR(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function rR(e,n,i){const a=this;let s,c,u,f,m;return h;function h(A){return y(A)}function y(A){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(A),g}function g(A){return A===33?(e.consume(A),b):A===47?(e.consume(A),c=!0,E):A===63?(e.consume(A),s=3,a.interrupt?n:D):jt(A)?(e.consume(A),u=String.fromCharCode(A),k):i(A)}function b(A){return A===45?(e.consume(A),s=2,v):A===91?(e.consume(A),s=5,f=0,w):jt(A)?(e.consume(A),s=4,a.interrupt?n:D):i(A)}function v(A){return A===45?(e.consume(A),a.interrupt?n:D):i(A)}function w(A){const le="CDATA[";return A===le.charCodeAt(f++)?(e.consume(A),f===le.length?a.interrupt?n:te:w):i(A)}function E(A){return jt(A)?(e.consume(A),u=String.fromCharCode(A),k):i(A)}function k(A){if(A===null||A===47||A===62||Ye(A)){const le=A===47,he=u.toLowerCase();return!le&&!c&&wb.includes(he)?(s=1,a.interrupt?n(A):te(A)):W4.includes(u.toLowerCase())?(s=6,le?(e.consume(A),C):a.interrupt?n(A):te(A)):(s=7,a.interrupt&&!a.parser.lazy[a.now().line]?i(A):c?N(A):j(A))}return A===45||Tt(A)?(e.consume(A),u+=String.fromCharCode(A),k):i(A)}function C(A){return A===62?(e.consume(A),a.interrupt?n:te):i(A)}function N(A){return Ee(A)?(e.consume(A),N):R(A)}function j(A){return A===47?(e.consume(A),R):A===58||A===95||jt(A)?(e.consume(A),V):Ee(A)?(e.consume(A),j):R(A)}function V(A){return A===45||A===46||A===58||A===95||Tt(A)?(e.consume(A),V):Y(A)}function Y(A){return A===61?(e.consume(A),_):Ee(A)?(e.consume(A),Y):j(A)}function _(A){return A===null||A===60||A===61||A===62||A===96?i(A):A===34||A===39?(e.consume(A),m=A,q):Ee(A)?(e.consume(A),_):X(A)}function q(A){return A===m?(e.consume(A),m=null,I):A===null||ge(A)?i(A):(e.consume(A),q)}function X(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||Ye(A)?Y(A):(e.consume(A),X)}function I(A){return A===47||A===62||Ee(A)?j(A):i(A)}function R(A){return A===62?(e.consume(A),Q):i(A)}function Q(A){return A===null||ge(A)?te(A):Ee(A)?(e.consume(A),Q):i(A)}function te(A){return A===45&&s===2?(e.consume(A),P):A===60&&s===1?(e.consume(A),ee):A===62&&s===4?(e.consume(A),L):A===63&&s===3?(e.consume(A),D):A===93&&s===5?(e.consume(A),oe):ge(A)&&(s===6||s===7)?(e.exit("htmlFlowData"),e.check(eR,J,me)(A)):A===null||ge(A)?(e.exit("htmlFlowData"),me(A)):(e.consume(A),te)}function me(A){return e.check(tR,se,J)(A)}function se(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),ne}function ne(A){return A===null||ge(A)?me(A):(e.enter("htmlFlowData"),te(A))}function P(A){return A===45?(e.consume(A),D):te(A)}function ee(A){return A===47?(e.consume(A),u="",ie):te(A)}function ie(A){if(A===62){const le=u.toLowerCase();return wb.includes(le)?(e.consume(A),L):te(A)}return jt(A)&&u.length<8?(e.consume(A),u+=String.fromCharCode(A),ie):te(A)}function oe(A){return A===93?(e.consume(A),D):te(A)}function D(A){return A===62?(e.consume(A),L):A===45&&s===2?(e.consume(A),D):te(A)}function L(A){return A===null||ge(A)?(e.exit("htmlFlowData"),J(A)):(e.consume(A),L)}function J(A){return e.exit("htmlFlow"),n(A)}}function iR(e,n,i){const a=this;return s;function s(u){return ge(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),c):i(u)}function c(u){return a.parser.lazy[a.now().line]?i(u):n(u)}}function aR(e,n,i){return a;function a(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),e.attempt(ss,n,i)}}const lR={name:"htmlText",tokenize:sR};function sR(e,n,i){const a=this;let s,c,u;return f;function f(D){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(D),m}function m(D){return D===33?(e.consume(D),h):D===47?(e.consume(D),Y):D===63?(e.consume(D),j):jt(D)?(e.consume(D),X):i(D)}function h(D){return D===45?(e.consume(D),y):D===91?(e.consume(D),c=0,w):jt(D)?(e.consume(D),N):i(D)}function y(D){return D===45?(e.consume(D),v):i(D)}function g(D){return D===null?i(D):D===45?(e.consume(D),b):ge(D)?(u=g,ee(D)):(e.consume(D),g)}function b(D){return D===45?(e.consume(D),v):g(D)}function v(D){return D===62?P(D):D===45?b(D):g(D)}function w(D){const L="CDATA[";return D===L.charCodeAt(c++)?(e.consume(D),c===L.length?E:w):i(D)}function E(D){return D===null?i(D):D===93?(e.consume(D),k):ge(D)?(u=E,ee(D)):(e.consume(D),E)}function k(D){return D===93?(e.consume(D),C):E(D)}function C(D){return D===62?P(D):D===93?(e.consume(D),C):E(D)}function N(D){return D===null||D===62?P(D):ge(D)?(u=N,ee(D)):(e.consume(D),N)}function j(D){return D===null?i(D):D===63?(e.consume(D),V):ge(D)?(u=j,ee(D)):(e.consume(D),j)}function V(D){return D===62?P(D):j(D)}function Y(D){return jt(D)?(e.consume(D),_):i(D)}function _(D){return D===45||Tt(D)?(e.consume(D),_):q(D)}function q(D){return ge(D)?(u=q,ee(D)):Ee(D)?(e.consume(D),q):P(D)}function X(D){return D===45||Tt(D)?(e.consume(D),X):D===47||D===62||Ye(D)?I(D):i(D)}function I(D){return D===47?(e.consume(D),P):D===58||D===95||jt(D)?(e.consume(D),R):ge(D)?(u=I,ee(D)):Ee(D)?(e.consume(D),I):P(D)}function R(D){return D===45||D===46||D===58||D===95||Tt(D)?(e.consume(D),R):Q(D)}function Q(D){return D===61?(e.consume(D),te):ge(D)?(u=Q,ee(D)):Ee(D)?(e.consume(D),Q):I(D)}function te(D){return D===null||D===60||D===61||D===62||D===96?i(D):D===34||D===39?(e.consume(D),s=D,me):ge(D)?(u=te,ee(D)):Ee(D)?(e.consume(D),te):(e.consume(D),se)}function me(D){return D===s?(e.consume(D),s=void 0,ne):D===null?i(D):ge(D)?(u=me,ee(D)):(e.consume(D),me)}function se(D){return D===null||D===34||D===39||D===60||D===61||D===96?i(D):D===47||D===62||Ye(D)?I(D):(e.consume(D),se)}function ne(D){return D===47||D===62||Ye(D)?I(D):i(D)}function P(D){return D===62?(e.consume(D),e.exit("htmlTextData"),e.exit("htmlText"),n):i(D)}function ee(D){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(D),e.exit("lineEnding"),ie}function ie(D){return Ee(D)?Re(e,oe,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):oe(D)}function oe(D){return e.enter("htmlTextData"),u(D)}}const dm={name:"labelEnd",resolveAll:fR,resolveTo:dR,tokenize:hR},oR={tokenize:mR},uR={tokenize:pR},cR={tokenize:gR};function fR(e){let n=-1;const i=[];for(;++n<e.length;){const a=e[n][1];if(i.push(e[n]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const s=a.type==="labelImage"?4:2;a.type="data",n+=s}}return e.length!==i.length&&$t(e,0,e.length,i),e}function dR(e,n){let i=e.length,a=0,s,c,u,f;for(;i--;)if(s=e[i][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;e[i][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(u){if(e[i][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=i,s.type!=="labelLink")){a=2;break}}else s.type==="labelEnd"&&(u=i);const m={type:e[c][1].type==="labelLink"?"link":"image",start:{...e[c][1].start},end:{...e[e.length-1][1].end}},h={type:"label",start:{...e[c][1].start},end:{...e[u][1].end}},y={type:"labelText",start:{...e[c+a+2][1].end},end:{...e[u-2][1].start}};return f=[["enter",m,n],["enter",h,n]],f=mn(f,e.slice(c+1,c+a+3)),f=mn(f,[["enter",y,n]]),f=mn(f,wu(n.parser.constructs.insideSpan.null,e.slice(c+a+4,u-3),n)),f=mn(f,[["exit",y,n],e[u-2],e[u-1],["exit",h,n]]),f=mn(f,e.slice(u+1)),f=mn(f,[["exit",m,n]]),$t(e,c,e.length,f),e}function hR(e,n,i){const a=this;let s=a.events.length,c,u;for(;s--;)if((a.events[s][1].type==="labelImage"||a.events[s][1].type==="labelLink")&&!a.events[s][1]._balanced){c=a.events[s][1];break}return f;function f(b){return c?c._inactive?g(b):(u=a.parser.defined.includes(Cn(a.sliceSerialize({start:c.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(b),e.exit("labelMarker"),e.exit("labelEnd"),m):i(b)}function m(b){return b===40?e.attempt(oR,y,u?y:g)(b):b===91?e.attempt(uR,y,u?h:g)(b):u?y(b):g(b)}function h(b){return e.attempt(cR,y,g)(b)}function y(b){return n(b)}function g(b){return c._balanced=!0,i(b)}}function mR(e,n,i){return a;function a(g){return e.enter("resource"),e.enter("resourceMarker"),e.consume(g),e.exit("resourceMarker"),s}function s(g){return Ye(g)?Pl(e,c)(g):c(g)}function c(g){return g===41?y(g):NS(e,u,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function u(g){return Ye(g)?Pl(e,m)(g):y(g)}function f(g){return i(g)}function m(g){return g===34||g===39||g===40?OS(e,h,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):y(g)}function h(g){return Ye(g)?Pl(e,y)(g):y(g)}function y(g){return g===41?(e.enter("resourceMarker"),e.consume(g),e.exit("resourceMarker"),e.exit("resource"),n):i(g)}}function pR(e,n,i){const a=this;return s;function s(f){return RS.call(a,e,c,u,"reference","referenceMarker","referenceString")(f)}function c(f){return a.parser.defined.includes(Cn(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?n(f):i(f)}function u(f){return i(f)}}function gR(e,n,i){return a;function a(c){return e.enter("reference"),e.enter("referenceMarker"),e.consume(c),e.exit("referenceMarker"),s}function s(c){return c===93?(e.enter("referenceMarker"),e.consume(c),e.exit("referenceMarker"),e.exit("reference"),n):i(c)}}const yR={name:"labelStartImage",resolveAll:dm.resolveAll,tokenize:xR};function xR(e,n,i){const a=this;return s;function s(f){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(f),e.exit("labelImageMarker"),c}function c(f){return f===91?(e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelImage"),u):i(f)}function u(f){return f===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(f):n(f)}}const bR={name:"labelStartLink",resolveAll:dm.resolveAll,tokenize:vR};function vR(e,n,i){const a=this;return s;function s(u){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelLink"),c}function c(u){return u===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(u):n(u)}}const Sd={name:"lineEnding",tokenize:SR};function SR(e,n){return i;function i(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Re(e,n,"linePrefix")}}const Zo={name:"thematicBreak",tokenize:wR};function wR(e,n,i){let a=0,s;return c;function c(h){return e.enter("thematicBreak"),u(h)}function u(h){return s=h,f(h)}function f(h){return h===s?(e.enter("thematicBreakSequence"),m(h)):a>=3&&(h===null||ge(h))?(e.exit("thematicBreak"),n(h)):i(h)}function m(h){return h===s?(e.consume(h),a++,m):(e.exit("thematicBreakSequence"),Ee(h)?Re(e,f,"whitespace")(h):f(h))}}const Pt={continuation:{tokenize:kR},exit:jR,name:"list",tokenize:AR},TR={partial:!0,tokenize:MR},CR={partial:!0,tokenize:ER};function AR(e,n,i){const a=this,s=a.events[a.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,u=0;return f;function f(v){const w=a.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!a.containerState.marker||v===a.containerState.marker:dh(v)){if(a.containerState.type||(a.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),v===42||v===45?e.check(Zo,i,h)(v):h(v);if(!a.interrupt||v===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),m(v)}return i(v)}function m(v){return dh(v)&&++u<10?(e.consume(v),m):(!a.interrupt||u<2)&&(a.containerState.marker?v===a.containerState.marker:v===41||v===46)?(e.exit("listItemValue"),h(v)):i(v)}function h(v){return e.enter("listItemMarker"),e.consume(v),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||v,e.check(ss,a.interrupt?i:y,e.attempt(TR,b,g))}function y(v){return a.containerState.initialBlankLine=!0,c++,b(v)}function g(v){return Ee(v)?(e.enter("listItemPrefixWhitespace"),e.consume(v),e.exit("listItemPrefixWhitespace"),b):i(v)}function b(v){return a.containerState.size=c+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(v)}}function kR(e,n,i){const a=this;return a.containerState._closeFlow=void 0,e.check(ss,s,c);function s(f){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,Re(e,n,"listItemIndent",a.containerState.size+1)(f)}function c(f){return a.containerState.furtherBlankLines||!Ee(f)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,u(f)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(CR,n,u)(f))}function u(f){return a.containerState._closeFlow=!0,a.interrupt=void 0,Re(e,e.attempt(Pt,n,i),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function ER(e,n,i){const a=this;return Re(e,s,"listItemIndent",a.containerState.size+1);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="listItemIndent"&&u[2].sliceSerialize(u[1],!0).length===a.containerState.size?n(c):i(c)}}function jR(e){e.exit(this.containerState.type)}function MR(e,n,i){const a=this;return Re(e,s,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const u=a.events[a.events.length-1];return!Ee(c)&&u&&u[1].type==="listItemPrefixWhitespace"?n(c):i(c)}}const Tb={name:"setextUnderline",resolveTo:DR,tokenize:NR};function DR(e,n){let i=e.length,a,s,c;for(;i--;)if(e[i][0]==="enter"){if(e[i][1].type==="content"){a=i;break}e[i][1].type==="paragraph"&&(s=i)}else e[i][1].type==="content"&&e.splice(i,1),!c&&e[i][1].type==="definition"&&(c=i);const u={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",c?(e.splice(s,0,["enter",u,n]),e.splice(c+1,0,["exit",e[a][1],n]),e[a][1].end={...e[c][1].end}):e[a][1]=u,e.push(["exit",u,n]),e}function NR(e,n,i){const a=this;let s;return c;function c(h){let y=a.events.length,g;for(;y--;)if(a.events[y][1].type!=="lineEnding"&&a.events[y][1].type!=="linePrefix"&&a.events[y][1].type!=="content"){g=a.events[y][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||g)?(e.enter("setextHeadingLine"),s=h,u(h)):i(h)}function u(h){return e.enter("setextHeadingLineSequence"),f(h)}function f(h){return h===s?(e.consume(h),f):(e.exit("setextHeadingLineSequence"),Ee(h)?Re(e,m,"lineSuffix")(h):m(h))}function m(h){return h===null||ge(h)?(e.exit("setextHeadingLine"),n(h)):i(h)}}const RR={tokenize:OR};function OR(e){const n=this,i=e.attempt(ss,a,e.attempt(this.parser.constructs.flowInitial,s,Re(e,e.attempt(this.parser.constructs.flow,s,e.attempt(V4,s)),"linePrefix")));return i;function a(c){if(c===null){e.consume(c);return}return e.enter("lineEndingBlank"),e.consume(c),e.exit("lineEndingBlank"),n.currentConstruct=void 0,i}function s(c){if(c===null){e.consume(c);return}return e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),n.currentConstruct=void 0,i}}const _R={resolveAll:LS()},LR=_S("string"),zR=_S("text");function _S(e){return{resolveAll:LS(e==="text"?BR:void 0),tokenize:n};function n(i){const a=this,s=this.parser.constructs[e],c=i.attempt(s,u,f);return u;function u(y){return h(y)?c(y):f(y)}function f(y){if(y===null){i.consume(y);return}return i.enter("data"),i.consume(y),m}function m(y){return h(y)?(i.exit("data"),c(y)):(i.consume(y),m)}function h(y){if(y===null)return!0;const g=s[y];let b=-1;if(g)for(;++b<g.length;){const v=g[b];if(!v.previous||v.previous.call(a,a.previous))return!0}return!1}}}function LS(e){return n;function n(i,a){let s=-1,c;for(;++s<=i.length;)c===void 0?i[s]&&i[s][1].type==="data"&&(c=s,s++):(!i[s]||i[s][1].type!=="data")&&(s!==c+2&&(i[c][1].end=i[s-1][1].end,i.splice(c+2,s-c-2),s=c+2),c=void 0);return e?e(i,a):i}}function BR(e,n){let i=0;for(;++i<=e.length;)if((i===e.length||e[i][1].type==="lineEnding")&&e[i-1][1].type==="data"){const a=e[i-1][1],s=n.sliceStream(a);let c=s.length,u=-1,f=0,m;for(;c--;){const h=s[c];if(typeof h=="string"){for(u=h.length;h.charCodeAt(u-1)===32;)f++,u--;if(u)break;u=-1}else if(h===-2)m=!0,f++;else if(h!==-1){c++;break}}if(n._contentTypeTextTrailing&&i===e.length&&(f=0),f){const h={type:i===e.length||m||f<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?u:a.start._bufferIndex+u,_index:a.start._index+c,line:a.end.line,column:a.end.column-f,offset:a.end.offset-f},end:{...a.end}};a.end={...h.start},a.start.offset===a.end.offset?Object.assign(a,h):(e.splice(i,0,["enter",h,n],["exit",h,n]),i+=2)}i++}return e}const VR={42:Pt,43:Pt,45:Pt,48:Pt,49:Pt,50:Pt,51:Pt,52:Pt,53:Pt,54:Pt,55:Pt,56:Pt,57:Pt,62:ES},PR={91:F4},IR={[-2]:vd,[-1]:vd,32:vd},UR={35:K4,42:Zo,45:[Tb,Zo],60:$4,61:Tb,95:Zo,96:Sb,126:Sb},HR={38:MS,92:jS},FR={[-5]:Sd,[-4]:Sd,[-3]:Sd,33:yR,38:MS,42:hh,60:[b4,lR],91:bR,92:[X4,jS],93:dm,95:hh,96:R4},qR={null:[hh,_R]},GR={null:[42,95]},YR={null:[]},XR=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:GR,contentInitial:PR,disable:YR,document:VR,flow:UR,flowInitial:IR,insideSpan:qR,string:HR,text:FR},Symbol.toStringTag,{value:"Module"}));function JR(e,n,i){let a={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const s={},c=[];let u=[],f=[];const m={attempt:q(Y),check:q(_),consume:N,enter:j,exit:V,interrupt:q(_,{interrupt:!0})},h={code:null,containerState:{},defineSkip:E,events:[],now:w,parser:e,previous:null,sliceSerialize:b,sliceStream:v,write:g};let y=n.tokenize.call(h,m);return n.resolveAll&&c.push(n),h;function g(Q){return u=mn(u,Q),k(),u[u.length-1]!==null?[]:(X(n,0),h.events=wu(c,h.events,h),h.events)}function b(Q,te){return QR(v(Q),te)}function v(Q){return KR(u,Q)}function w(){const{_bufferIndex:Q,_index:te,line:me,column:se,offset:ne}=a;return{_bufferIndex:Q,_index:te,line:me,column:se,offset:ne}}function E(Q){s[Q.line]=Q.column,R()}function k(){let Q;for(;a._index<u.length;){const te=u[a._index];if(typeof te=="string")for(Q=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===Q&&a._bufferIndex<te.length;)C(te.charCodeAt(a._bufferIndex));else C(te)}}function C(Q){y=y(Q)}function N(Q){ge(Q)?(a.line++,a.column=1,a.offset+=Q===-3?2:1,R()):Q!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===u[a._index].length&&(a._bufferIndex=-1,a._index++)),h.previous=Q}function j(Q,te){const me=te||{};return me.type=Q,me.start=w(),h.events.push(["enter",me,h]),f.push(me),me}function V(Q){const te=f.pop();return te.end=w(),h.events.push(["exit",te,h]),te}function Y(Q,te){X(Q,te.from)}function _(Q,te){te.restore()}function q(Q,te){return me;function me(se,ne,P){let ee,ie,oe,D;return Array.isArray(se)?J(se):"tokenize"in se?J([se]):L(se);function L(de){return Se;function Se(ze){const Ne=ze!==null&&de[ze],en=ze!==null&&de.null,Vn=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(en)?en:en?[en]:[]];return J(Vn)(ze)}}function J(de){return ee=de,ie=0,de.length===0?P:A(de[ie])}function A(de){return Se;function Se(ze){return D=I(),oe=de,de.partial||(h.currentConstruct=de),de.name&&h.parser.constructs.disable.null.includes(de.name)?he():de.tokenize.call(te?Object.assign(Object.create(h),te):h,m,le,he)(ze)}}function le(de){return Q(oe,D),ne}function he(de){return D.restore(),++ie<ee.length?A(ee[ie]):P}}}function X(Q,te){Q.resolveAll&&!c.includes(Q)&&c.push(Q),Q.resolve&&$t(h.events,te,h.events.length-te,Q.resolve(h.events.slice(te),h)),Q.resolveTo&&(h.events=Q.resolveTo(h.events,h))}function I(){const Q=w(),te=h.previous,me=h.currentConstruct,se=h.events.length,ne=Array.from(f);return{from:se,restore:P};function P(){a=Q,h.previous=te,h.currentConstruct=me,h.events.length=se,f=ne,R()}}function R(){a.line in s&&a.column<2&&(a.column=s[a.line],a.offset+=s[a.line]-1)}}function KR(e,n){const i=n.start._index,a=n.start._bufferIndex,s=n.end._index,c=n.end._bufferIndex;let u;if(i===s)u=[e[i].slice(a,c)];else{if(u=e.slice(i,s),a>-1){const f=u[0];typeof f=="string"?u[0]=f.slice(a):u.shift()}c>0&&u.push(e[s].slice(0,c))}return u}function QR(e,n){let i=-1;const a=[];let s;for(;++i<e.length;){const c=e[i];let u;if(typeof c=="string")u=c;else switch(c){case-5:{u="\r";break}case-4:{u=`
`;break}case-3:{u=`\r
`;break}case-2:{u=n?" ":"	";break}case-1:{if(!n&&s)continue;u=" ";break}default:u=String.fromCharCode(c)}s=c===-2,a.push(u)}return a.join("")}function ZR(e){const a={constructs:AS([XR,...(e||{}).extensions||[]]),content:s(d4),defined:[],document:s(m4),flow:s(RR),lazy:{},string:s(LR),text:s(zR)};return a;function s(c){return u;function u(f){return JR(a,c,f)}}}function WR(e){for(;!DS(e););return e}const Cb=/[\0\t\n\r]/g;function $R(){let e=1,n="",i=!0,a;return s;function s(c,u,f){const m=[];let h,y,g,b,v;for(c=n+(typeof c=="string"?c.toString():new TextDecoder(u||void 0).decode(c)),g=0,n="",i&&(c.charCodeAt(0)===65279&&g++,i=void 0);g<c.length;){if(Cb.lastIndex=g,h=Cb.exec(c),b=h&&h.index!==void 0?h.index:c.length,v=c.charCodeAt(b),!h){n=c.slice(g);break}if(v===10&&g===b&&a)m.push(-3),a=void 0;else switch(a&&(m.push(-5),a=void 0),g<b&&(m.push(c.slice(g,b)),e+=b-g),v){case 0:{m.push(65533),e++;break}case 9:{for(y=Math.ceil(e/4)*4,m.push(-2);e++<y;)m.push(-1);break}case 10:{m.push(-4),e=1;break}default:a=!0,e=1}g=b+1}return f&&(a&&m.push(-5),n&&m.push(n),m.push(null)),m}}const e5=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function t5(e){return e.replace(e5,n5)}function n5(e,n,i){if(n)return n;if(i.charCodeAt(0)===35){const s=i.charCodeAt(1),c=s===120||s===88;return kS(i.slice(c?2:1),c?16:10)}return fm(i)||e}const zS={}.hasOwnProperty;function r5(e,n,i){return typeof n!="string"&&(i=n,n=void 0),i5(i)(WR(ZR(i).document().write($R()(e,n,!0))))}function i5(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(bi),autolinkProtocol:I,autolinkEmail:I,atxHeading:c(yi),blockQuote:c(en),characterEscape:I,characterReference:I,codeFenced:c(Vn),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:c(Vn,u),codeText:c(ja,u),codeTextData:I,data:I,codeFlowValue:I,definition:c(us),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:c(Pn),hardBreakEscape:c(xi),hardBreakTrailing:c(xi),htmlFlow:c(cs,u),htmlFlowData:I,htmlText:c(cs,u),htmlTextData:I,image:c(fs),label:u,link:c(bi),listItem:c(Ma),listItemValue:b,listOrdered:c(vi,g),listUnordered:c(vi),paragraph:c(ku),reference:A,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:c(yi),strong:c(Eu),thematicBreak:c(ju)},exit:{atxHeading:m(),atxHeadingSequence:Y,autolink:m(),autolinkEmail:Ne,autolinkProtocol:ze,blockQuote:m(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:de,characterReference:Se,codeFenced:m(k),codeFencedFence:E,codeFencedFenceInfo:v,codeFencedFenceMeta:w,codeFlowValue:R,codeIndented:m(C),codeText:m(ne),codeTextData:R,data:R,definition:m(),definitionDestinationString:V,definitionLabelString:N,definitionTitleString:j,emphasis:m(),hardBreakEscape:m(te),hardBreakTrailing:m(te),htmlFlow:m(me),htmlFlowData:R,htmlText:m(se),htmlTextData:R,image:m(ee),label:oe,labelText:ie,lineEnding:Q,link:m(P),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:le,resourceDestinationString:D,resourceTitleString:L,resource:J,setextHeading:m(X),setextHeadingLineSequence:q,setextHeadingText:_,strong:m(),thematicBreak:m()}};BS(n,(e||{}).mdastExtensions||[]);const i={};return a;function a(Z){let ae={type:"root",children:[]};const xe={stack:[ae],tokenStack:[],config:n,enter:f,exit:h,buffer:u,resume:y,data:i},Ce=[];let Be=-1;for(;++Be<Z.length;)if(Z[Be][1].type==="listOrdered"||Z[Be][1].type==="listUnordered")if(Z[Be][0]==="enter")Ce.push(Be);else{const Ft=Ce.pop();Be=s(Z,Ft,Be)}for(Be=-1;++Be<Z.length;){const Ft=n[Z[Be][0]];zS.call(Ft,Z[Be][1].type)&&Ft[Z[Be][1].type].call(Object.assign({sliceSerialize:Z[Be][2].sliceSerialize},xe),Z[Be][1])}if(xe.tokenStack.length>0){const Ft=xe.tokenStack[xe.tokenStack.length-1];(Ft[1]||Ab).call(xe,void 0,Ft[0])}for(ae.position={start:Lr(Z.length>0?Z[0][1].start:{line:1,column:1,offset:0}),end:Lr(Z.length>0?Z[Z.length-2][1].end:{line:1,column:1,offset:0})},Be=-1;++Be<n.transforms.length;)ae=n.transforms[Be](ae)||ae;return ae}function s(Z,ae,xe){let Ce=ae-1,Be=-1,Ft=!1,In,kt,ft,Nt;for(;++Ce<=xe;){const Fe=Z[Ce];switch(Fe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Fe[0]==="enter"?Be++:Be--,Nt=void 0;break}case"lineEndingBlank":{Fe[0]==="enter"&&(In&&!Nt&&!Be&&!ft&&(ft=Ce),Nt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Nt=void 0}if(!Be&&Fe[0]==="enter"&&Fe[1].type==="listItemPrefix"||Be===-1&&Fe[0]==="exit"&&(Fe[1].type==="listUnordered"||Fe[1].type==="listOrdered")){if(In){let cr=Ce;for(kt=void 0;cr--;){const yn=Z[cr];if(yn[1].type==="lineEnding"||yn[1].type==="lineEndingBlank"){if(yn[0]==="exit")continue;kt&&(Z[kt][1].type="lineEndingBlank",Ft=!0),yn[1].type="lineEnding",kt=cr}else if(!(yn[1].type==="linePrefix"||yn[1].type==="blockQuotePrefix"||yn[1].type==="blockQuotePrefixWhitespace"||yn[1].type==="blockQuoteMarker"||yn[1].type==="listItemIndent"))break}ft&&(!kt||ft<kt)&&(In._spread=!0),In.end=Object.assign({},kt?Z[kt][1].start:Fe[1].end),Z.splice(kt||Ce,0,["exit",In,Fe[2]]),Ce++,xe++}if(Fe[1].type==="listItemPrefix"){const cr={type:"listItem",_spread:!1,start:Object.assign({},Fe[1].start),end:void 0};In=cr,Z.splice(Ce,0,["enter",cr,Fe[2]]),Ce++,xe++,ft=void 0,Nt=!0}}}return Z[ae][1]._spread=Ft,xe}function c(Z,ae){return xe;function xe(Ce){f.call(this,Z(Ce),Ce),ae&&ae.call(this,Ce)}}function u(){this.stack.push({type:"fragment",children:[]})}function f(Z,ae,xe){this.stack[this.stack.length-1].children.push(Z),this.stack.push(Z),this.tokenStack.push([ae,xe||void 0]),Z.position={start:Lr(ae.start),end:void 0}}function m(Z){return ae;function ae(xe){Z&&Z.call(this,xe),h.call(this,xe)}}function h(Z,ae){const xe=this.stack.pop(),Ce=this.tokenStack.pop();if(Ce)Ce[0].type!==Z.type&&(ae?ae.call(this,Z,Ce[0]):(Ce[1]||Ab).call(this,Z,Ce[0]));else throw new Error("Cannot close `"+Z.type+"` ("+Vl({start:Z.start,end:Z.end})+"): it’s not open");xe.position.end=Lr(Z.end)}function y(){return cm(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function b(Z){if(this.data.expectingFirstListItemValue){const ae=this.stack[this.stack.length-2];ae.start=Number.parseInt(this.sliceSerialize(Z),10),this.data.expectingFirstListItemValue=void 0}}function v(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.lang=Z}function w(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.meta=Z}function E(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function k(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.value=Z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function C(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.value=Z.replace(/(\r?\n|\r)$/g,"")}function N(Z){const ae=this.resume(),xe=this.stack[this.stack.length-1];xe.label=ae,xe.identifier=Cn(this.sliceSerialize(Z)).toLowerCase()}function j(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.title=Z}function V(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.url=Z}function Y(Z){const ae=this.stack[this.stack.length-1];if(!ae.depth){const xe=this.sliceSerialize(Z).length;ae.depth=xe}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function q(Z){const ae=this.stack[this.stack.length-1];ae.depth=this.sliceSerialize(Z).codePointAt(0)===61?1:2}function X(){this.data.setextHeadingSlurpLineEnding=void 0}function I(Z){const xe=this.stack[this.stack.length-1].children;let Ce=xe[xe.length-1];(!Ce||Ce.type!=="text")&&(Ce=At(),Ce.position={start:Lr(Z.start),end:void 0},xe.push(Ce)),this.stack.push(Ce)}function R(Z){const ae=this.stack.pop();ae.value+=this.sliceSerialize(Z),ae.position.end=Lr(Z.end)}function Q(Z){const ae=this.stack[this.stack.length-1];if(this.data.atHardBreak){const xe=ae.children[ae.children.length-1];xe.position.end=Lr(Z.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(ae.type)&&(I.call(this,Z),R.call(this,Z))}function te(){this.data.atHardBreak=!0}function me(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.value=Z}function se(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.value=Z}function ne(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.value=Z}function P(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ae=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ae,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function ee(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ae=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ae,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function ie(Z){const ae=this.sliceSerialize(Z),xe=this.stack[this.stack.length-2];xe.label=t5(ae),xe.identifier=Cn(ae).toLowerCase()}function oe(){const Z=this.stack[this.stack.length-1],ae=this.resume(),xe=this.stack[this.stack.length-1];if(this.data.inReference=!0,xe.type==="link"){const Ce=Z.children;xe.children=Ce}else xe.alt=ae}function D(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.url=Z}function L(){const Z=this.resume(),ae=this.stack[this.stack.length-1];ae.title=Z}function J(){this.data.inReference=void 0}function A(){this.data.referenceType="collapsed"}function le(Z){const ae=this.resume(),xe=this.stack[this.stack.length-1];xe.label=ae,xe.identifier=Cn(this.sliceSerialize(Z)).toLowerCase(),this.data.referenceType="full"}function he(Z){this.data.characterReferenceType=Z.type}function de(Z){const ae=this.sliceSerialize(Z),xe=this.data.characterReferenceType;let Ce;xe?(Ce=kS(ae,xe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ce=fm(ae);const Be=this.stack[this.stack.length-1];Be.value+=Ce}function Se(Z){const ae=this.stack.pop();ae.position.end=Lr(Z.end)}function ze(Z){R.call(this,Z);const ae=this.stack[this.stack.length-1];ae.url=this.sliceSerialize(Z)}function Ne(Z){R.call(this,Z);const ae=this.stack[this.stack.length-1];ae.url="mailto:"+this.sliceSerialize(Z)}function en(){return{type:"blockquote",children:[]}}function Vn(){return{type:"code",lang:null,meta:null,value:""}}function ja(){return{type:"inlineCode",value:""}}function us(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Pn(){return{type:"emphasis",children:[]}}function yi(){return{type:"heading",depth:0,children:[]}}function xi(){return{type:"break"}}function cs(){return{type:"html",value:""}}function fs(){return{type:"image",title:null,url:"",alt:null}}function bi(){return{type:"link",title:null,url:"",children:[]}}function vi(Z){return{type:"list",ordered:Z.type==="listOrdered",start:null,spread:Z._spread,children:[]}}function Ma(Z){return{type:"listItem",spread:Z._spread,checked:null,children:[]}}function ku(){return{type:"paragraph",children:[]}}function Eu(){return{type:"strong",children:[]}}function At(){return{type:"text",value:""}}function ju(){return{type:"thematicBreak"}}}function Lr(e){return{line:e.line,column:e.column,offset:e.offset}}function BS(e,n){let i=-1;for(;++i<n.length;){const a=n[i];Array.isArray(a)?BS(e,a):a5(e,a)}}function a5(e,n){let i;for(i in n)if(zS.call(n,i))switch(i){case"canContainEols":{const a=n[i];a&&e[i].push(...a);break}case"transforms":{const a=n[i];a&&e[i].push(...a);break}case"enter":case"exit":{const a=n[i];a&&Object.assign(e[i],a);break}}}function Ab(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Vl({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Vl({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Vl({start:n.start,end:n.end})+") is still open")}function l5(e){const n=this;n.parser=i;function i(a){return r5(a,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function s5(e,n){const i={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,i),e.applyData(n,i)}function o5(e,n){const i={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,i),[e.applyData(n,i),{type:"text",value:`
`}]}function u5(e,n){const i=n.value?n.value+`
`:"",a={},s=n.lang?n.lang.split(/\s+/):[];s.length>0&&(a.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:a,children:[{type:"text",value:i}]};return n.meta&&(c.data={meta:n.meta}),e.patch(n,c),c=e.applyData(n,c),c={type:"element",tagName:"pre",properties:{},children:[c]},e.patch(n,c),c}function c5(e,n){const i={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function f5(e,n){const i={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function d5(e,n){const i=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(n.identifier).toUpperCase(),s=Ea(a.toLowerCase()),c=e.footnoteOrder.indexOf(a);let u,f=e.footnoteCounts.get(a);f===void 0?(f=0,e.footnoteOrder.push(a),u=e.footnoteOrder.length):u=c+1,f+=1,e.footnoteCounts.set(a,f);const m={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+s,id:i+"fnref-"+s+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(u)}]};e.patch(n,m);const h={type:"element",tagName:"sup",properties:{},children:[m]};return e.patch(n,h),e.applyData(n,h)}function h5(e,n){const i={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function m5(e,n){if(e.options.allowDangerousHtml){const i={type:"raw",value:n.value};return e.patch(n,i),e.applyData(n,i)}}function VS(e,n){const i=n.referenceType;let a="]";if(i==="collapsed"?a+="[]":i==="full"&&(a+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+a}];const s=e.all(n),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const u=s[s.length-1];return u&&u.type==="text"?u.value+=a:s.push({type:"text",value:a}),s}function p5(e,n){const i=String(n.identifier).toUpperCase(),a=e.definitionById.get(i);if(!a)return VS(e,n);const s={src:Ea(a.url||""),alt:n.alt};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"img",properties:s,children:[]};return e.patch(n,c),e.applyData(n,c)}function g5(e,n){const i={src:Ea(n.url)};n.alt!==null&&n.alt!==void 0&&(i.alt=n.alt),n.title!==null&&n.title!==void 0&&(i.title=n.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,a),e.applyData(n,a)}function y5(e,n){const i={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,i);const a={type:"element",tagName:"code",properties:{},children:[i]};return e.patch(n,a),e.applyData(n,a)}function x5(e,n){const i=String(n.identifier).toUpperCase(),a=e.definitionById.get(i);if(!a)return VS(e,n);const s={href:Ea(a.url||"")};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"a",properties:s,children:e.all(n)};return e.patch(n,c),e.applyData(n,c)}function b5(e,n){const i={href:Ea(n.url)};n.title!==null&&n.title!==void 0&&(i.title=n.title);const a={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function v5(e,n,i){const a=e.all(n),s=i?S5(i):PS(n),c={},u=[];if(typeof n.checked=="boolean"){const y=a[0];let g;y&&y.type==="element"&&y.tagName==="p"?g=y:(g={type:"element",tagName:"p",properties:{},children:[]},a.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let f=-1;for(;++f<a.length;){const y=a[f];(s||f!==0||y.type!=="element"||y.tagName!=="p")&&u.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!s?u.push(...y.children):u.push(y)}const m=a[a.length-1];m&&(s||m.type!=="element"||m.tagName!=="p")&&u.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:c,children:u};return e.patch(n,h),e.applyData(n,h)}function S5(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const i=e.children;let a=-1;for(;!n&&++a<i.length;)n=PS(i[a])}return n}function PS(e){const n=e.spread;return n??e.children.length>1}function w5(e,n){const i={},a=e.all(n);let s=-1;for(typeof n.start=="number"&&n.start!==1&&(i.start=n.start);++s<a.length;){const u=a[s];if(u.type==="element"&&u.tagName==="li"&&u.properties&&Array.isArray(u.properties.className)&&u.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const c={type:"element",tagName:n.ordered?"ol":"ul",properties:i,children:e.wrap(a,!0)};return e.patch(n,c),e.applyData(n,c)}function T5(e,n){const i={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function C5(e,n){const i={type:"root",children:e.wrap(e.all(n))};return e.patch(n,i),e.applyData(n,i)}function A5(e,n){const i={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function k5(e,n){const i=e.all(n),a=i.shift(),s=[];if(a){const u={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(n.children[0],u),s.push(u)}if(i.length>0){const u={type:"element",tagName:"tbody",properties:{},children:e.wrap(i,!0)},f=lm(n.children[1]),m=xS(n.children[n.children.length-1]);f&&m&&(u.position={start:f,end:m}),s.push(u)}const c={type:"element",tagName:"table",properties:{},children:e.wrap(s,!0)};return e.patch(n,c),e.applyData(n,c)}function E5(e,n,i){const a=i?i.children:void 0,c=(a?a.indexOf(n):1)===0?"th":"td",u=i&&i.type==="table"?i.align:void 0,f=u?u.length:n.children.length;let m=-1;const h=[];for(;++m<f;){const g=n.children[m],b={},v=u?u[m]:void 0;v&&(b.align=v);let w={type:"element",tagName:c,properties:b,children:[]};g&&(w.children=e.all(g),e.patch(g,w),w=e.applyData(g,w)),h.push(w)}const y={type:"element",tagName:"tr",properties:{},children:e.wrap(h,!0)};return e.patch(n,y),e.applyData(n,y)}function j5(e,n){const i={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}const kb=9,Eb=32;function M5(e){const n=String(e),i=/\r?\n|\r/g;let a=i.exec(n),s=0;const c=[];for(;a;)c.push(jb(n.slice(s,a.index),s>0,!0),a[0]),s=a.index+a[0].length,a=i.exec(n);return c.push(jb(n.slice(s),s>0,!1)),c.join("")}function jb(e,n,i){let a=0,s=e.length;if(n){let c=e.codePointAt(a);for(;c===kb||c===Eb;)a++,c=e.codePointAt(a)}if(i){let c=e.codePointAt(s-1);for(;c===kb||c===Eb;)s--,c=e.codePointAt(s-1)}return s>a?e.slice(a,s):""}function D5(e,n){const i={type:"text",value:M5(String(n.value))};return e.patch(n,i),e.applyData(n,i)}function N5(e,n){const i={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,i),e.applyData(n,i)}const R5={blockquote:s5,break:o5,code:u5,delete:c5,emphasis:f5,footnoteReference:d5,heading:h5,html:m5,imageReference:p5,image:g5,inlineCode:y5,linkReference:x5,link:b5,listItem:v5,list:w5,paragraph:T5,root:C5,strong:A5,table:k5,tableCell:j5,tableRow:E5,text:D5,thematicBreak:N5,toml:zo,yaml:zo,definition:zo,footnoteDefinition:zo};function zo(){}const IS=-1,Tu=0,Il=1,uu=2,hm=3,mm=4,pm=5,gm=6,US=7,HS=8,Mb=typeof self=="object"?self:globalThis,O5=(e,n)=>{const i=(s,c)=>(e.set(c,s),s),a=s=>{if(e.has(s))return e.get(s);const[c,u]=n[s];switch(c){case Tu:case IS:return i(u,s);case Il:{const f=i([],s);for(const m of u)f.push(a(m));return f}case uu:{const f=i({},s);for(const[m,h]of u)f[a(m)]=a(h);return f}case hm:return i(new Date(u),s);case mm:{const{source:f,flags:m}=u;return i(new RegExp(f,m),s)}case pm:{const f=i(new Map,s);for(const[m,h]of u)f.set(a(m),a(h));return f}case gm:{const f=i(new Set,s);for(const m of u)f.add(a(m));return f}case US:{const{name:f,message:m}=u;return i(new Mb[f](m),s)}case HS:return i(BigInt(u),s);case"BigInt":return i(Object(BigInt(u)),s);case"ArrayBuffer":return i(new Uint8Array(u).buffer,u);case"DataView":{const{buffer:f}=new Uint8Array(u);return i(new DataView(f),u)}}return i(new Mb[c](u),s)};return a},Db=e=>O5(new Map,e)(0),sa="",{toString:_5}={},{keys:L5}=Object,Nl=e=>{const n=typeof e;if(n!=="object"||!e)return[Tu,n];const i=_5.call(e).slice(8,-1);switch(i){case"Array":return[Il,sa];case"Object":return[uu,sa];case"Date":return[hm,sa];case"RegExp":return[mm,sa];case"Map":return[pm,sa];case"Set":return[gm,sa];case"DataView":return[Il,i]}return i.includes("Array")?[Il,i]:i.includes("Error")?[US,i]:[uu,i]},Bo=([e,n])=>e===Tu&&(n==="function"||n==="symbol"),z5=(e,n,i,a)=>{const s=(u,f)=>{const m=a.push(u)-1;return i.set(f,m),m},c=u=>{if(i.has(u))return i.get(u);let[f,m]=Nl(u);switch(f){case Tu:{let y=u;switch(m){case"bigint":f=HS,y=u.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+m);y=null;break;case"undefined":return s([IS],u)}return s([f,y],u)}case Il:{if(m){let b=u;return m==="DataView"?b=new Uint8Array(u.buffer):m==="ArrayBuffer"&&(b=new Uint8Array(u)),s([m,[...b]],u)}const y=[],g=s([f,y],u);for(const b of u)y.push(c(b));return g}case uu:{if(m)switch(m){case"BigInt":return s([m,u.toString()],u);case"Boolean":case"Number":case"String":return s([m,u.valueOf()],u)}if(n&&"toJSON"in u)return c(u.toJSON());const y=[],g=s([f,y],u);for(const b of L5(u))(e||!Bo(Nl(u[b])))&&y.push([c(b),c(u[b])]);return g}case hm:return s([f,u.toISOString()],u);case mm:{const{source:y,flags:g}=u;return s([f,{source:y,flags:g}],u)}case pm:{const y=[],g=s([f,y],u);for(const[b,v]of u)(e||!(Bo(Nl(b))||Bo(Nl(v))))&&y.push([c(b),c(v)]);return g}case gm:{const y=[],g=s([f,y],u);for(const b of u)(e||!Bo(Nl(b)))&&y.push(c(b));return g}}const{message:h}=u;return s([f,{name:m,message:h}],u)};return c},Nb=(e,{json:n,lossy:i}={})=>{const a=[];return z5(!(n||i),!!n,new Map,a)(e),a},cu=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Db(Nb(e,n)):structuredClone(e):(e,n)=>Db(Nb(e,n));function B5(e,n){const i=[{type:"text",value:"↩"}];return n>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),i}function V5(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function P5(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=e.options.footnoteBackContent||B5,a=e.options.footnoteBackLabel||V5,s=e.options.footnoteLabel||"Footnotes",c=e.options.footnoteLabelTagName||"h2",u=e.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let m=-1;for(;++m<e.footnoteOrder.length;){const h=e.footnoteById.get(e.footnoteOrder[m]);if(!h)continue;const y=e.all(h),g=String(h.identifier).toUpperCase(),b=Ea(g.toLowerCase());let v=0;const w=[],E=e.footnoteCounts.get(g);for(;E!==void 0&&++v<=E;){w.length>0&&w.push({type:"text",value:" "});let N=typeof i=="string"?i:i(m,v);typeof N=="string"&&(N={type:"text",value:N}),w.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+b+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(m,v),className:["data-footnote-backref"]},children:Array.isArray(N)?N:[N]})}const k=y[y.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const N=k.children[k.children.length-1];N&&N.type==="text"?N.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...w)}else y.push(...w);const C={type:"element",tagName:"li",properties:{id:n+"fn-"+b},children:e.wrap(y,!0)};e.patch(h,C),f.push(C)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...cu(u),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(f,!0)},{type:"text",value:`
`}]}}const Cu=(function(e){if(e==null)return F5;if(typeof e=="function")return Au(e);if(typeof e=="object")return Array.isArray(e)?I5(e):U5(e);if(typeof e=="string")return H5(e);throw new Error("Expected function, string, or object as test")});function I5(e){const n=[];let i=-1;for(;++i<e.length;)n[i]=Cu(e[i]);return Au(a);function a(...s){let c=-1;for(;++c<n.length;)if(n[c].apply(this,s))return!0;return!1}}function U5(e){const n=e;return Au(i);function i(a){const s=a;let c;for(c in e)if(s[c]!==n[c])return!1;return!0}}function H5(e){return Au(n);function n(i){return i&&i.type===e}}function Au(e){return n;function n(i,a,s){return!!(q5(i)&&e.call(this,i,typeof a=="number"?a:void 0,s||void 0))}}function F5(){return!0}function q5(e){return e!==null&&typeof e=="object"&&"type"in e}const FS=[],G5=!0,mh=!1,Y5="skip";function qS(e,n,i,a){let s;typeof n=="function"&&typeof i!="function"?(a=i,i=n):s=n;const c=Cu(s),u=a?-1:1;f(e,void 0,[])();function f(m,h,y){const g=m&&typeof m=="object"?m:{};if(typeof g.type=="string"){const v=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(m.type+(v?"<"+v+">":""))+")"})}return b;function b(){let v=FS,w,E,k;if((!n||c(m,h,y[y.length-1]||void 0))&&(v=X5(i(m,y)),v[0]===mh))return v;if("children"in m&&m.children){const C=m;if(C.children&&v[0]!==Y5)for(E=(a?C.children.length:-1)+u,k=y.concat(C);E>-1&&E<C.children.length;){const N=C.children[E];if(w=f(N,E,k)(),w[0]===mh)return w;E=typeof w[1]=="number"?w[1]:E+u}}return v}}}function X5(e){return Array.isArray(e)?e:typeof e=="number"?[G5,e]:e==null?FS:[e]}function ym(e,n,i,a){let s,c,u;typeof n=="function"&&typeof i!="function"?(c=void 0,u=n,s=i):(c=n,u=i,s=a),qS(e,c,f,s);function f(m,h){const y=h[h.length-1],g=y?y.children.indexOf(m):void 0;return u(m,g,y)}}const ph={}.hasOwnProperty,J5={};function K5(e,n){const i=n||J5,a=new Map,s=new Map,c=new Map,u={...R5,...i.handlers},f={all:h,applyData:Z5,definitionById:a,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:u,one:m,options:i,patch:Q5,wrap:$5};return ym(e,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const g=y.type==="definition"?a:s,b=String(y.identifier).toUpperCase();g.has(b)||g.set(b,y)}}),f;function m(y,g){const b=y.type,v=f.handlers[b];if(ph.call(f.handlers,b)&&v)return v(f,y,g);if(f.options.passThrough&&f.options.passThrough.includes(b)){if("children"in y){const{children:E,...k}=y,C=cu(k);return C.children=f.all(y),C}return cu(y)}return(f.options.unknownHandler||W5)(f,y,g)}function h(y){const g=[];if("children"in y){const b=y.children;let v=-1;for(;++v<b.length;){const w=f.one(b[v],y);if(w){if(v&&b[v-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Rb(w.value)),!Array.isArray(w)&&w.type==="element")){const E=w.children[0];E&&E.type==="text"&&(E.value=Rb(E.value))}Array.isArray(w)?g.push(...w):g.push(w)}}}return g}}function Q5(e,n){e.position&&(n.position=VN(e))}function Z5(e,n){let i=n;if(e&&e.data){const a=e.data.hName,s=e.data.hChildren,c=e.data.hProperties;if(typeof a=="string")if(i.type==="element")i.tagName=a;else{const u="children"in i?i.children:[i];i={type:"element",tagName:a,properties:{},children:u}}i.type==="element"&&c&&Object.assign(i.properties,cu(c)),"children"in i&&i.children&&s!==null&&s!==void 0&&(i.children=s)}return i}function W5(e,n){const i=n.data||{},a="value"in n&&!(ph.call(i,"hProperties")||ph.call(i,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function $5(e,n){const i=[];let a=-1;for(n&&i.push({type:"text",value:`
`});++a<e.length;)a&&i.push({type:"text",value:`
`}),i.push(e[a]);return n&&e.length>0&&i.push({type:"text",value:`
`}),i}function Rb(e){let n=0,i=e.charCodeAt(n);for(;i===9||i===32;)n++,i=e.charCodeAt(n);return e.slice(n)}function Ob(e,n){const i=K5(e,n),a=i.one(e,void 0),s=P5(i),c=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function eO(e,n){return e&&"run"in e?async function(i,a){const s=Ob(i,{file:a,...n});await e.run(s,a)}:function(i,a){return Ob(i,{file:a,...e||n})}}function _b(e){if(e)throw e}var wd,Lb;function tO(){if(Lb)return wd;Lb=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):n.call(h)==="[object Array]"},c=function(h){if(!h||n.call(h)!=="[object Object]")return!1;var y=e.call(h,"constructor"),g=h.constructor&&h.constructor.prototype&&e.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!y&&!g)return!1;var b;for(b in h);return typeof b>"u"||e.call(h,b)},u=function(h,y){i&&y.name==="__proto__"?i(h,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):h[y.name]=y.newValue},f=function(h,y){if(y==="__proto__")if(e.call(h,y)){if(a)return a(h,y).value}else return;return h[y]};return wd=function m(){var h,y,g,b,v,w,E=arguments[0],k=1,C=arguments.length,N=!1;for(typeof E=="boolean"&&(N=E,E=arguments[1]||{},k=2),(E==null||typeof E!="object"&&typeof E!="function")&&(E={});k<C;++k)if(h=arguments[k],h!=null)for(y in h)g=f(E,y),b=f(h,y),E!==b&&(N&&b&&(c(b)||(v=s(b)))?(v?(v=!1,w=g&&s(g)?g:[]):w=g&&c(g)?g:{},u(E,{name:y,newValue:m(N,w,b)})):typeof b<"u"&&u(E,{name:y,newValue:b}));return E},wd}var nO=tO();const Td=bh(nO);function gh(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function rO(){const e=[],n={run:i,use:a};return n;function i(...s){let c=-1;const u=s.pop();if(typeof u!="function")throw new TypeError("Expected function as last argument, not "+u);f(null,...s);function f(m,...h){const y=e[++c];let g=-1;if(m){u(m);return}for(;++g<s.length;)(h[g]===null||h[g]===void 0)&&(h[g]=s[g]);s=h,y?iO(y,f)(...h):u(null,...h)}}function a(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),n}}function iO(e,n){let i;return a;function a(...u){const f=e.length>u.length;let m;f&&u.push(s);try{m=e.apply(this,u)}catch(h){const y=h;if(f&&i)throw y;return s(y)}f||(m&&m.then&&typeof m.then=="function"?m.then(c,s):m instanceof Error?s(m):c(m))}function s(u,...f){i||(i=!0,n(u,...f))}function c(u){s(null,u)}}const Rn={basename:aO,dirname:lO,extname:sO,join:oO,sep:"/"};function aO(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');os(e);let i=0,a=-1,s=e.length,c;if(n===void 0||n.length===0||n.length>e.length){for(;s--;)if(e.codePointAt(s)===47){if(c){i=s+1;break}}else a<0&&(c=!0,a=s+1);return a<0?"":e.slice(i,a)}if(n===e)return"";let u=-1,f=n.length-1;for(;s--;)if(e.codePointAt(s)===47){if(c){i=s+1;break}}else u<0&&(c=!0,u=s+1),f>-1&&(e.codePointAt(s)===n.codePointAt(f--)?f<0&&(a=s):(f=-1,a=u));return i===a?a=u:a<0&&(a=e.length),e.slice(i,a)}function lO(e){if(os(e),e.length===0)return".";let n=-1,i=e.length,a;for(;--i;)if(e.codePointAt(i)===47){if(a){n=i;break}}else a||(a=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function sO(e){os(e);let n=e.length,i=-1,a=0,s=-1,c=0,u;for(;n--;){const f=e.codePointAt(n);if(f===47){if(u){a=n+1;break}continue}i<0&&(u=!0,i=n+1),f===46?s<0?s=n:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||i<0||c===0||c===1&&s===i-1&&s===a+1?"":e.slice(s,i)}function oO(...e){let n=-1,i;for(;++n<e.length;)os(e[n]),e[n]&&(i=i===void 0?e[n]:i+"/"+e[n]);return i===void 0?".":uO(i)}function uO(e){os(e);const n=e.codePointAt(0)===47;let i=cO(e,!n);return i.length===0&&!n&&(i="."),i.length>0&&e.codePointAt(e.length-1)===47&&(i+="/"),n?"/"+i:i}function cO(e,n){let i="",a=0,s=-1,c=0,u=-1,f,m;for(;++u<=e.length;){if(u<e.length)f=e.codePointAt(u);else{if(f===47)break;f=47}if(f===47){if(!(s===u-1||c===1))if(s!==u-1&&c===2){if(i.length<2||a!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(m=i.lastIndexOf("/"),m!==i.length-1){m<0?(i="",a=0):(i=i.slice(0,m),a=i.length-1-i.lastIndexOf("/")),s=u,c=0;continue}}else if(i.length>0){i="",a=0,s=u,c=0;continue}}n&&(i=i.length>0?i+"/..":"..",a=2)}else i.length>0?i+="/"+e.slice(s+1,u):i=e.slice(s+1,u),a=u-s-1;s=u,c=0}else f===46&&c>-1?c++:c=-1}return i}function os(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const fO={cwd:dO};function dO(){return"/"}function yh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function hO(e){if(typeof e=="string")e=new URL(e);else if(!yh(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return mO(e)}function mO(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const n=e.pathname;let i=-1;for(;++i<n.length;)if(n.codePointAt(i)===37&&n.codePointAt(i+1)===50){const a=n.codePointAt(i+2);if(a===70||a===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(n)}const Cd=["history","path","basename","stem","extname","dirname"];class GS{constructor(n){let i;n?yh(n)?i={path:n}:typeof n=="string"||pO(n)?i={value:n}:i=n:i={},this.cwd="cwd"in i?"":fO.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Cd.length;){const c=Cd[a];c in i&&i[c]!==void 0&&i[c]!==null&&(this[c]=c==="history"?[...i[c]]:i[c])}let s;for(s in i)Cd.includes(s)||(this[s]=i[s])}get basename(){return typeof this.path=="string"?Rn.basename(this.path):void 0}set basename(n){kd(n,"basename"),Ad(n,"basename"),this.path=Rn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Rn.dirname(this.path):void 0}set dirname(n){zb(this.basename,"dirname"),this.path=Rn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Rn.extname(this.path):void 0}set extname(n){if(Ad(n,"extname"),zb(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Rn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){yh(n)&&(n=hO(n)),kd(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Rn.basename(this.path,this.extname):void 0}set stem(n){kd(n,"stem"),Ad(n,"stem"),this.path=Rn.join(this.dirname||"",n+(this.extname||""))}fail(n,i,a){const s=this.message(n,i,a);throw s.fatal=!0,s}info(n,i,a){const s=this.message(n,i,a);return s.fatal=void 0,s}message(n,i,a){const s=new Ct(n,i,a);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Ad(e,n){if(e&&e.includes(Rn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Rn.sep+"`")}function kd(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function zb(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function pO(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const gO=(function(e){const a=this.constructor.prototype,s=a[e],c=function(){return s.apply(c,arguments)};return Object.setPrototypeOf(c,a),c}),yO={}.hasOwnProperty;class xm extends gO{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=rO()}copy(){const n=new xm;let i=-1;for(;++i<this.attachers.length;){const a=this.attachers[i];n.use(...a)}return n.data(Td(!0,{},this.namespace)),n}data(n,i){return typeof n=="string"?arguments.length===2?(Md("data",this.frozen),this.namespace[n]=i,this):yO.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Md("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const s=i.call(n,...a);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const i=Vo(n),a=this.parser||this.Parser;return Ed("parse",a),a(String(i),i)}process(n,i){const a=this;return this.freeze(),Ed("process",this.parser||this.Parser),jd("process",this.compiler||this.Compiler),i?s(void 0,i):new Promise(s);function s(c,u){const f=Vo(n),m=a.parse(f);a.run(m,f,function(y,g,b){if(y||!g||!b)return h(y);const v=g,w=a.stringify(v,b);vO(w)?b.value=w:b.result=w,h(y,b)});function h(y,g){y||!g?u(y):c?c(g):i(void 0,g)}}}processSync(n){let i=!1,a;return this.freeze(),Ed("processSync",this.parser||this.Parser),jd("processSync",this.compiler||this.Compiler),this.process(n,s),Vb("processSync","process",i),a;function s(c,u){i=!0,_b(c),a=u}}run(n,i,a){Bb(n),this.freeze();const s=this.transformers;return!a&&typeof i=="function"&&(a=i,i=void 0),a?c(void 0,a):new Promise(c);function c(u,f){const m=Vo(i);s.run(n,m,h);function h(y,g,b){const v=g||n;y?f(y):u?u(v):a(void 0,v,b)}}}runSync(n,i){let a=!1,s;return this.run(n,i,c),Vb("runSync","run",a),s;function c(u,f){_b(u),s=f,a=!0}}stringify(n,i){this.freeze();const a=Vo(i),s=this.compiler||this.Compiler;return jd("stringify",s),Bb(n),s(n,a)}use(n,...i){const a=this.attachers,s=this.namespace;if(Md("use",this.frozen),n!=null)if(typeof n=="function")m(n,i);else if(typeof n=="object")Array.isArray(n)?f(n):u(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function c(h){if(typeof h=="function")m(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[y,...g]=h;m(y,g)}else u(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function u(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(h.plugins),h.settings&&(s.settings=Td(!0,s.settings,h.settings))}function f(h){let y=-1;if(h!=null)if(Array.isArray(h))for(;++y<h.length;){const g=h[y];c(g)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function m(h,y){let g=-1,b=-1;for(;++g<a.length;)if(a[g][0]===h){b=g;break}if(b===-1)a.push([h,...y]);else if(y.length>0){let[v,...w]=y;const E=a[b][1];gh(E)&&gh(v)&&(v=Td(!0,E,v)),a[b]=[h,v,...w]}}}}const xO=new xm().freeze();function Ed(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function jd(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Md(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Bb(e){if(!gh(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Vb(e,n,i){if(!i)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Vo(e){return bO(e)?e:new GS(e)}function bO(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function vO(e){return typeof e=="string"||SO(e)}function SO(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const wO="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Pb=[],Ib={allowDangerousHtml:!0},TO=/^(https?|ircs?|mailto|xmpp)$/i,CO=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function AO(e){const n=kO(e),i=EO(e);return jO(n.runSync(n.parse(i),i),e)}function kO(e){const n=e.rehypePlugins||Pb,i=e.remarkPlugins||Pb,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Ib}:Ib;return xO().use(l5).use(i).use(eO,a).use(n)}function EO(e){const n=e.children||"",i=new GS;return typeof n=="string"&&(i.value=n),i}function jO(e,n){const i=n.allowedElements,a=n.allowElement,s=n.components,c=n.disallowedElements,u=n.skipHtml,f=n.unwrapDisallowed,m=n.urlTransform||MO;for(const y of CO)Object.hasOwn(n,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+wO+y.id,void 0);return ym(e,h),FN(e,{Fragment:x.Fragment,components:s,ignoreInvalidStyle:!0,jsx:x.jsx,jsxs:x.jsxs,passKeys:!0,passNode:!0});function h(y,g,b){if(y.type==="raw"&&b&&typeof g=="number")return u?b.children.splice(g,1):b.children[g]={type:"text",value:y.value},g;if(y.type==="element"){let v;for(v in bd)if(Object.hasOwn(bd,v)&&Object.hasOwn(y.properties,v)){const w=y.properties[v],E=bd[v];(E===null||E.includes(y.tagName))&&(y.properties[v]=m(String(w||""),v,y))}}if(y.type==="element"){let v=i?!i.includes(y.tagName):c?c.includes(y.tagName):!1;if(!v&&a&&typeof g=="number"&&(v=!a(y,g,b)),v&&b&&typeof g=="number")return f&&y.children?b.children.splice(g,1,...y.children):b.children.splice(g,1),g}}}function MO(e){const n=e.indexOf(":"),i=e.indexOf("?"),a=e.indexOf("#"),s=e.indexOf("/");return n===-1||s!==-1&&n>s||i!==-1&&n>i||a!==-1&&n>a||TO.test(e.slice(0,n))?e:""}function Ub(e,n){const i=String(e);if(typeof n!="string")throw new TypeError("Expected character");let a=0,s=i.indexOf(n);for(;s!==-1;)a++,s=i.indexOf(n,s+n.length);return a}function DO(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function NO(e,n,i){const s=Cu((i||{}).ignore||[]),c=RO(n);let u=-1;for(;++u<c.length;)qS(e,"text",f);function f(h,y){let g=-1,b;for(;++g<y.length;){const v=y[g],w=b?b.children:void 0;if(s(v,w?w.indexOf(v):void 0,b))return;b=v}if(b)return m(h,y)}function m(h,y){const g=y[y.length-1],b=c[u][0],v=c[u][1];let w=0;const k=g.children.indexOf(h);let C=!1,N=[];b.lastIndex=0;let j=b.exec(h.value);for(;j;){const V=j.index,Y={index:j.index,input:j.input,stack:[...y,h]};let _=v(...j,Y);if(typeof _=="string"&&(_=_.length>0?{type:"text",value:_}:void 0),_===!1?b.lastIndex=V+1:(w!==V&&N.push({type:"text",value:h.value.slice(w,V)}),Array.isArray(_)?N.push(..._):_&&N.push(_),w=V+j[0].length,C=!0),!b.global)break;j=b.exec(h.value)}return C?(w<h.value.length&&N.push({type:"text",value:h.value.slice(w)}),g.children.splice(k,1,...N)):N=[h],k+N.length}}function RO(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!e[0]||Array.isArray(e[0])?e:[e];let a=-1;for(;++a<i.length;){const s=i[a];n.push([OO(s[0]),_O(s[1])])}return n}function OO(e){return typeof e=="string"?new RegExp(DO(e),"g"):e}function _O(e){return typeof e=="function"?e:function(){return e}}const Dd="phrasing",Nd=["autolink","link","image","label"];function LO(){return{transforms:[HO],enter:{literalAutolink:BO,literalAutolinkEmail:Rd,literalAutolinkHttp:Rd,literalAutolinkWww:Rd},exit:{literalAutolink:UO,literalAutolinkEmail:IO,literalAutolinkHttp:VO,literalAutolinkWww:PO}}}function zO(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Dd,notInConstruct:Nd},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Dd,notInConstruct:Nd},{character:":",before:"[ps]",after:"\\/",inConstruct:Dd,notInConstruct:Nd}]}}function BO(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Rd(e){this.config.enter.autolinkProtocol.call(this,e)}function VO(e){this.config.exit.autolinkProtocol.call(this,e)}function PO(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function IO(e){this.config.exit.autolinkEmail.call(this,e)}function UO(e){this.exit(e)}function HO(e){NO(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,FO],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),qO]],{ignore:["link","linkReference"]})}function FO(e,n,i,a,s){let c="";if(!YS(s)||(/^w/i.test(n)&&(i=n+i,n="",c="http://"),!GO(i)))return!1;const u=YO(i+a);if(!u[0])return!1;const f={type:"link",title:null,url:c+n+u[0],children:[{type:"text",value:n+u[0]}]};return u[1]?[f,{type:"text",value:u[1]}]:f}function qO(e,n,i,a){return!YS(a,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+i,children:[{type:"text",value:n+"@"+i}]}}function GO(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function YO(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let i=n[0],a=i.indexOf(")");const s=Ub(e,"(");let c=Ub(e,")");for(;a!==-1&&s>c;)e+=i.slice(0,a+1),i=i.slice(a+1),a=i.indexOf(")"),c++;return[e,i]}function YS(e,n){const i=e.input.charCodeAt(e.index-1);return(e.index===0||pi(i)||Su(i))&&(!n||i!==47)}XS.peek=t_;function XO(){this.buffer()}function JO(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function KO(){this.buffer()}function QO(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function ZO(e){const n=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=Cn(this.sliceSerialize(e)).toLowerCase(),i.label=n}function WO(e){this.exit(e)}function $O(e){const n=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=Cn(this.sliceSerialize(e)).toLowerCase(),i.label=n}function e_(e){this.exit(e)}function t_(){return"["}function XS(e,n,i,a){const s=i.createTracker(a);let c=s.move("[^");const u=i.enter("footnoteReference"),f=i.enter("reference");return c+=s.move(i.safe(i.associationId(e),{after:"]",before:c})),f(),u(),c+=s.move("]"),c}function n_(){return{enter:{gfmFootnoteCallString:XO,gfmFootnoteCall:JO,gfmFootnoteDefinitionLabelString:KO,gfmFootnoteDefinition:QO},exit:{gfmFootnoteCallString:ZO,gfmFootnoteCall:WO,gfmFootnoteDefinitionLabelString:$O,gfmFootnoteDefinition:e_}}}function r_(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:i,footnoteReference:XS},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(a,s,c,u){const f=c.createTracker(u);let m=f.move("[^");const h=c.enter("footnoteDefinition"),y=c.enter("label");return m+=f.move(c.safe(c.associationId(a),{before:m,after:"]"})),y(),m+=f.move("]:"),a.children&&a.children.length>0&&(f.shift(4),m+=f.move((n?`
`:" ")+c.indentLines(c.containerFlow(a,f.current()),n?JS:i_))),h(),m}}function i_(e,n,i){return n===0?e:JS(e,n,i)}function JS(e,n,i){return(i?"":"    ")+e}const a_=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];KS.peek=c_;function l_(){return{canContainEols:["delete"],enter:{strikethrough:o_},exit:{strikethrough:u_}}}function s_(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:a_}],handlers:{delete:KS}}}function o_(e){this.enter({type:"delete",children:[]},e)}function u_(e){this.exit(e)}function KS(e,n,i,a){const s=i.createTracker(a),c=i.enter("strikethrough");let u=s.move("~~");return u+=i.containerPhrasing(e,{...s.current(),before:u,after:"~"}),u+=s.move("~~"),c(),u}function c_(){return"~"}function f_(e){return e.length}function d_(e,n){const i=n||{},a=(i.align||[]).concat(),s=i.stringLength||f_,c=[],u=[],f=[],m=[];let h=0,y=-1;for(;++y<e.length;){const E=[],k=[];let C=-1;for(e[y].length>h&&(h=e[y].length);++C<e[y].length;){const N=h_(e[y][C]);if(i.alignDelimiters!==!1){const j=s(N);k[C]=j,(m[C]===void 0||j>m[C])&&(m[C]=j)}E.push(N)}u[y]=E,f[y]=k}let g=-1;if(typeof a=="object"&&"length"in a)for(;++g<h;)c[g]=Hb(a[g]);else{const E=Hb(a);for(;++g<h;)c[g]=E}g=-1;const b=[],v=[];for(;++g<h;){const E=c[g];let k="",C="";E===99?(k=":",C=":"):E===108?k=":":E===114&&(C=":");let N=i.alignDelimiters===!1?1:Math.max(1,m[g]-k.length-C.length);const j=k+"-".repeat(N)+C;i.alignDelimiters!==!1&&(N=k.length+N+C.length,N>m[g]&&(m[g]=N),v[g]=N),b[g]=j}u.splice(1,0,b),f.splice(1,0,v),y=-1;const w=[];for(;++y<u.length;){const E=u[y],k=f[y];g=-1;const C=[];for(;++g<h;){const N=E[g]||"";let j="",V="";if(i.alignDelimiters!==!1){const Y=m[g]-(k[g]||0),_=c[g];_===114?j=" ".repeat(Y):_===99?Y%2?(j=" ".repeat(Y/2+.5),V=" ".repeat(Y/2-.5)):(j=" ".repeat(Y/2),V=j):V=" ".repeat(Y)}i.delimiterStart!==!1&&!g&&C.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&N==="")&&(i.delimiterStart!==!1||g)&&C.push(" "),i.alignDelimiters!==!1&&C.push(j),C.push(N),i.alignDelimiters!==!1&&C.push(V),i.padding!==!1&&C.push(" "),(i.delimiterEnd!==!1||g!==h-1)&&C.push("|")}w.push(i.delimiterEnd===!1?C.join("").replace(/ +$/,""):C.join(""))}return w.join(`
`)}function h_(e){return e==null?"":String(e)}function Hb(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function m_(e,n,i,a){const s=i.enter("blockquote"),c=i.createTracker(a);c.move("> "),c.shift(2);const u=i.indentLines(i.containerFlow(e,c.current()),p_);return s(),u}function p_(e,n,i){return">"+(i?"":" ")+e}function g_(e,n){return Fb(e,n.inConstruct,!0)&&!Fb(e,n.notInConstruct,!1)}function Fb(e,n,i){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return i;let a=-1;for(;++a<n.length;)if(e.includes(n[a]))return!0;return!1}function qb(e,n,i,a){let s=-1;for(;++s<i.unsafe.length;)if(i.unsafe[s].character===`
`&&g_(i.stack,i.unsafe[s]))return/[ \t]/.test(a.before)?"":" ";return`\\
`}function y_(e,n){const i=String(e);let a=i.indexOf(n),s=a,c=0,u=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;a!==-1;)a===s?++c>u&&(u=c):c=1,s=a+n.length,a=i.indexOf(n,s);return u}function x_(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function b_(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function v_(e,n,i,a){const s=b_(i),c=e.value||"",u=s==="`"?"GraveAccent":"Tilde";if(x_(e,i)){const g=i.enter("codeIndented"),b=i.indentLines(c,S_);return g(),b}const f=i.createTracker(a),m=s.repeat(Math.max(y_(c,s)+1,3)),h=i.enter("codeFenced");let y=f.move(m);if(e.lang){const g=i.enter(`codeFencedLang${u}`);y+=f.move(i.safe(e.lang,{before:y,after:" ",encode:["`"],...f.current()})),g()}if(e.lang&&e.meta){const g=i.enter(`codeFencedMeta${u}`);y+=f.move(" "),y+=f.move(i.safe(e.meta,{before:y,after:`
`,encode:["`"],...f.current()})),g()}return y+=f.move(`
`),c&&(y+=f.move(c+`
`)),y+=f.move(m),h(),y}function S_(e,n,i){return(i?"":"    ")+e}function bm(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function w_(e,n,i,a){const s=bm(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("definition");let f=i.enter("label");const m=i.createTracker(a);let h=m.move("[");return h+=m.move(i.safe(i.associationId(e),{before:h,after:"]",...m.current()})),h+=m.move("]: "),f(),!e.url||/[\0- \u007F]/.test(e.url)?(f=i.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(i.safe(e.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(f=i.enter("destinationRaw"),h+=m.move(i.safe(e.url,{before:h,after:e.title?" ":`
`,...m.current()}))),f(),e.title&&(f=i.enter(`title${c}`),h+=m.move(" "+s),h+=m.move(i.safe(e.title,{before:h,after:s,...m.current()})),h+=m.move(s),f()),u(),h}function T_(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function Ql(e){return"&#x"+e.toString(16).toUpperCase()+";"}function fu(e,n,i){const a=ya(e),s=ya(n);return a===void 0?s===void 0?i==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:a===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}QS.peek=C_;function QS(e,n,i,a){const s=T_(i),c=i.enter("emphasis"),u=i.createTracker(a),f=u.move(s);let m=u.move(i.containerPhrasing(e,{after:s,before:f,...u.current()}));const h=m.charCodeAt(0),y=fu(a.before.charCodeAt(a.before.length-1),h,s);y.inside&&(m=Ql(h)+m.slice(1));const g=m.charCodeAt(m.length-1),b=fu(a.after.charCodeAt(0),g,s);b.inside&&(m=m.slice(0,-1)+Ql(g));const v=u.move(s);return c(),i.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},f+m+v}function C_(e,n,i){return i.options.emphasis||"*"}function A_(e,n){let i=!1;return ym(e,function(a){if("value"in a&&/\r?\n|\r/.test(a.value)||a.type==="break")return i=!0,mh}),!!((!e.depth||e.depth<3)&&cm(e)&&(n.options.setext||i))}function k_(e,n,i,a){const s=Math.max(Math.min(6,e.depth||1),1),c=i.createTracker(a);if(A_(e,i)){const y=i.enter("headingSetext"),g=i.enter("phrasing"),b=i.containerPhrasing(e,{...c.current(),before:`
`,after:`
`});return g(),y(),b+`
`+(s===1?"=":"-").repeat(b.length-(Math.max(b.lastIndexOf("\r"),b.lastIndexOf(`
`))+1))}const u="#".repeat(s),f=i.enter("headingAtx"),m=i.enter("phrasing");c.move(u+" ");let h=i.containerPhrasing(e,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(h)&&(h=Ql(h.charCodeAt(0))+h.slice(1)),h=h?u+" "+h:u,i.options.closeAtx&&(h+=" "+u),m(),f(),h}ZS.peek=E_;function ZS(e){return e.value||""}function E_(){return"<"}WS.peek=j_;function WS(e,n,i,a){const s=bm(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("image");let f=i.enter("label");const m=i.createTracker(a);let h=m.move("![");return h+=m.move(i.safe(e.alt,{before:h,after:"]",...m.current()})),h+=m.move("]("),f(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(f=i.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(i.safe(e.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(f=i.enter("destinationRaw"),h+=m.move(i.safe(e.url,{before:h,after:e.title?" ":")",...m.current()}))),f(),e.title&&(f=i.enter(`title${c}`),h+=m.move(" "+s),h+=m.move(i.safe(e.title,{before:h,after:s,...m.current()})),h+=m.move(s),f()),h+=m.move(")"),u(),h}function j_(){return"!"}$S.peek=M_;function $S(e,n,i,a){const s=e.referenceType,c=i.enter("imageReference");let u=i.enter("label");const f=i.createTracker(a);let m=f.move("![");const h=i.safe(e.alt,{before:m,after:"]",...f.current()});m+=f.move(h+"]["),u();const y=i.stack;i.stack=[],u=i.enter("reference");const g=i.safe(i.associationId(e),{before:m,after:"]",...f.current()});return u(),i.stack=y,c(),s==="full"||!h||h!==g?m+=f.move(g+"]"):s==="shortcut"?m=m.slice(0,-1):m+=f.move("]"),m}function M_(){return"!"}e2.peek=D_;function e2(e,n,i){let a=e.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(a);)s+="`";for(/[^ \r\n]/.test(a)&&(/^[ \r\n]/.test(a)&&/[ \r\n]$/.test(a)||/^`|`$/.test(a))&&(a=" "+a+" ");++c<i.unsafe.length;){const u=i.unsafe[c],f=i.compilePattern(u);let m;if(u.atBreak)for(;m=f.exec(a);){let h=m.index;a.charCodeAt(h)===10&&a.charCodeAt(h-1)===13&&h--,a=a.slice(0,h)+" "+a.slice(m.index+1)}}return s+a+s}function D_(){return"`"}function t2(e,n){const i=cm(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(i===e.url||"mailto:"+i===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}n2.peek=N_;function n2(e,n,i,a){const s=bm(i),c=s==='"'?"Quote":"Apostrophe",u=i.createTracker(a);let f,m;if(t2(e,i)){const y=i.stack;i.stack=[],f=i.enter("autolink");let g=u.move("<");return g+=u.move(i.containerPhrasing(e,{before:g,after:">",...u.current()})),g+=u.move(">"),f(),i.stack=y,g}f=i.enter("link"),m=i.enter("label");let h=u.move("[");return h+=u.move(i.containerPhrasing(e,{before:h,after:"](",...u.current()})),h+=u.move("]("),m(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(m=i.enter("destinationLiteral"),h+=u.move("<"),h+=u.move(i.safe(e.url,{before:h,after:">",...u.current()})),h+=u.move(">")):(m=i.enter("destinationRaw"),h+=u.move(i.safe(e.url,{before:h,after:e.title?" ":")",...u.current()}))),m(),e.title&&(m=i.enter(`title${c}`),h+=u.move(" "+s),h+=u.move(i.safe(e.title,{before:h,after:s,...u.current()})),h+=u.move(s),m()),h+=u.move(")"),f(),h}function N_(e,n,i){return t2(e,i)?"<":"["}r2.peek=R_;function r2(e,n,i,a){const s=e.referenceType,c=i.enter("linkReference");let u=i.enter("label");const f=i.createTracker(a);let m=f.move("[");const h=i.containerPhrasing(e,{before:m,after:"]",...f.current()});m+=f.move(h+"]["),u();const y=i.stack;i.stack=[],u=i.enter("reference");const g=i.safe(i.associationId(e),{before:m,after:"]",...f.current()});return u(),i.stack=y,c(),s==="full"||!h||h!==g?m+=f.move(g+"]"):s==="shortcut"?m=m.slice(0,-1):m+=f.move("]"),m}function R_(){return"["}function vm(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function O_(e){const n=vm(e),i=e.options.bulletOther;if(!i)return n==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+i+"`) to be different");return i}function __(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function i2(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function L_(e,n,i,a){const s=i.enter("list"),c=i.bulletCurrent;let u=e.ordered?__(i):vm(i);const f=e.ordered?u==="."?")":".":O_(i);let m=n&&i.bulletLastUsed?u===i.bulletLastUsed:!1;if(!e.ordered){const y=e.children?e.children[0]:void 0;if((u==="*"||u==="-")&&y&&(!y.children||!y.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(m=!0),i2(i)===u&&y){let g=-1;for(;++g<e.children.length;){const b=e.children[g];if(b&&b.type==="listItem"&&b.children&&b.children[0]&&b.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(u=f),i.bulletCurrent=u;const h=i.containerFlow(e,a);return i.bulletLastUsed=u,i.bulletCurrent=c,s(),h}function z_(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function B_(e,n,i,a){const s=z_(i);let c=i.bulletCurrent||vm(i);n&&n.type==="list"&&n.ordered&&(c=(typeof n.start=="number"&&n.start>-1?n.start:1)+(i.options.incrementListMarker===!1?0:n.children.indexOf(e))+c);let u=c.length+1;(s==="tab"||s==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(u=Math.ceil(u/4)*4);const f=i.createTracker(a);f.move(c+" ".repeat(u-c.length)),f.shift(u);const m=i.enter("listItem"),h=i.indentLines(i.containerFlow(e,f.current()),y);return m(),h;function y(g,b,v){return b?(v?"":" ".repeat(u))+g:(v?c:c+" ".repeat(u-c.length))+g}}function V_(e,n,i,a){const s=i.enter("paragraph"),c=i.enter("phrasing"),u=i.containerPhrasing(e,a);return c(),s(),u}const P_=Cu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function I_(e,n,i,a){return(e.children.some(function(u){return P_(u)})?i.containerPhrasing:i.containerFlow).call(i,e,a)}function U_(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}a2.peek=H_;function a2(e,n,i,a){const s=U_(i),c=i.enter("strong"),u=i.createTracker(a),f=u.move(s+s);let m=u.move(i.containerPhrasing(e,{after:s,before:f,...u.current()}));const h=m.charCodeAt(0),y=fu(a.before.charCodeAt(a.before.length-1),h,s);y.inside&&(m=Ql(h)+m.slice(1));const g=m.charCodeAt(m.length-1),b=fu(a.after.charCodeAt(0),g,s);b.inside&&(m=m.slice(0,-1)+Ql(g));const v=u.move(s+s);return c(),i.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},f+m+v}function H_(e,n,i){return i.options.strong||"*"}function F_(e,n,i,a){return i.safe(e.value,a)}function q_(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function G_(e,n,i){const a=(i2(i)+(i.options.ruleSpaces?" ":"")).repeat(q_(i));return i.options.ruleSpaces?a.slice(0,-1):a}const l2={blockquote:m_,break:qb,code:v_,definition:w_,emphasis:QS,hardBreak:qb,heading:k_,html:ZS,image:WS,imageReference:$S,inlineCode:e2,link:n2,linkReference:r2,list:L_,listItem:B_,paragraph:V_,root:I_,strong:a2,text:F_,thematicBreak:G_};function Y_(){return{enter:{table:X_,tableData:Gb,tableHeader:Gb,tableRow:K_},exit:{codeText:Q_,table:J_,tableData:Od,tableHeader:Od,tableRow:Od}}}function X_(e){const n=e._align;this.enter({type:"table",align:n.map(function(i){return i==="none"?null:i}),children:[]},e),this.data.inTable=!0}function J_(e){this.exit(e),this.data.inTable=void 0}function K_(e){this.enter({type:"tableRow",children:[]},e)}function Od(e){this.exit(e)}function Gb(e){this.enter({type:"tableCell",children:[]},e)}function Q_(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,Z_));const i=this.stack[this.stack.length-1];i.type,i.value=n,this.exit(e)}function Z_(e,n){return n==="|"?n:e}function W_(e){const n=e||{},i=n.tableCellPadding,a=n.tablePipeAlign,s=n.stringLength,c=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:b,table:u,tableCell:m,tableRow:f}};function u(v,w,E,k){return h(y(v,E,k),v.align)}function f(v,w,E,k){const C=g(v,E,k),N=h([C]);return N.slice(0,N.indexOf(`
`))}function m(v,w,E,k){const C=E.enter("tableCell"),N=E.enter("phrasing"),j=E.containerPhrasing(v,{...k,before:c,after:c});return N(),C(),j}function h(v,w){return d_(v,{align:w,alignDelimiters:a,padding:i,stringLength:s})}function y(v,w,E){const k=v.children;let C=-1;const N=[],j=w.enter("table");for(;++C<k.length;)N[C]=g(k[C],w,E);return j(),N}function g(v,w,E){const k=v.children;let C=-1;const N=[],j=w.enter("tableRow");for(;++C<k.length;)N[C]=m(k[C],v,w,E);return j(),N}function b(v,w,E){let k=l2.inlineCode(v,w,E);return E.stack.includes("tableCell")&&(k=k.replace(/\|/g,"\\$&")),k}}function $_(){return{exit:{taskListCheckValueChecked:Yb,taskListCheckValueUnchecked:Yb,paragraph:tL}}}function eL(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:nL}}}function Yb(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function tL(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const a=i.children[0];if(a&&a.type==="text"){const s=n.children;let c=-1,u;for(;++c<s.length;){const f=s[c];if(f.type==="paragraph"){u=f;break}}u===i&&(a.value=a.value.slice(1),a.value.length===0?i.children.shift():i.position&&a.position&&typeof a.position.start.offset=="number"&&(a.position.start.column++,a.position.start.offset++,i.position.start=Object.assign({},a.position.start)))}}this.exit(e)}function nL(e,n,i,a){const s=e.children[0],c=typeof e.checked=="boolean"&&s&&s.type==="paragraph",u="["+(e.checked?"x":" ")+"] ",f=i.createTracker(a);c&&f.move(u);let m=l2.listItem(e,n,i,{...a,...f.current()});return c&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),m;function h(y){return y+u}}function rL(){return[LO(),n_(),l_(),Y_(),$_()]}function iL(e){return{extensions:[zO(),r_(e),s_(),W_(e),eL()]}}const aL={tokenize:fL,partial:!0},s2={tokenize:dL,partial:!0},o2={tokenize:hL,partial:!0},u2={tokenize:mL,partial:!0},lL={tokenize:pL,partial:!0},c2={name:"wwwAutolink",tokenize:uL,previous:d2},f2={name:"protocolAutolink",tokenize:cL,previous:h2},ur={name:"emailAutolink",tokenize:oL,previous:m2},Bn={};function sL(){return{text:Bn}}let si=48;for(;si<123;)Bn[si]=ur,si++,si===58?si=65:si===91&&(si=97);Bn[43]=ur;Bn[45]=ur;Bn[46]=ur;Bn[95]=ur;Bn[72]=[ur,f2];Bn[104]=[ur,f2];Bn[87]=[ur,c2];Bn[119]=[ur,c2];function oL(e,n,i){const a=this;let s,c;return u;function u(g){return!xh(g)||!m2.call(a,a.previous)||Sm(a.events)?i(g):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),f(g))}function f(g){return xh(g)?(e.consume(g),f):g===64?(e.consume(g),m):i(g)}function m(g){return g===46?e.check(lL,y,h)(g):g===45||g===95||Tt(g)?(c=!0,e.consume(g),m):y(g)}function h(g){return e.consume(g),s=!0,m}function y(g){return c&&s&&jt(a.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(g)):i(g)}}function uL(e,n,i){const a=this;return s;function s(u){return u!==87&&u!==119||!d2.call(a,a.previous)||Sm(a.events)?i(u):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(aL,e.attempt(s2,e.attempt(o2,c),i),i)(u))}function c(u){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(u)}}function cL(e,n,i){const a=this;let s="",c=!1;return u;function u(g){return(g===72||g===104)&&h2.call(a,a.previous)&&!Sm(a.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),s+=String.fromCodePoint(g),e.consume(g),f):i(g)}function f(g){if(jt(g)&&s.length<5)return s+=String.fromCodePoint(g),e.consume(g),f;if(g===58){const b=s.toLowerCase();if(b==="http"||b==="https")return e.consume(g),m}return i(g)}function m(g){return g===47?(e.consume(g),c?h:(c=!0,m)):i(g)}function h(g){return g===null||ou(g)||Ye(g)||pi(g)||Su(g)?i(g):e.attempt(s2,e.attempt(o2,y),i)(g)}function y(g){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(g)}}function fL(e,n,i){let a=0;return s;function s(u){return(u===87||u===119)&&a<3?(a++,e.consume(u),s):u===46&&a===3?(e.consume(u),c):i(u)}function c(u){return u===null?i(u):n(u)}}function dL(e,n,i){let a,s,c;return u;function u(h){return h===46||h===95?e.check(u2,m,f)(h):h===null||Ye(h)||pi(h)||h!==45&&Su(h)?m(h):(c=!0,e.consume(h),u)}function f(h){return h===95?a=!0:(s=a,a=void 0),e.consume(h),u}function m(h){return s||a||!c?i(h):n(h)}}function hL(e,n){let i=0,a=0;return s;function s(u){return u===40?(i++,e.consume(u),s):u===41&&a<i?c(u):u===33||u===34||u===38||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===60||u===63||u===93||u===95||u===126?e.check(u2,n,c)(u):u===null||Ye(u)||pi(u)?n(u):(e.consume(u),s)}function c(u){return u===41&&a++,e.consume(u),s}}function mL(e,n,i){return a;function a(f){return f===33||f===34||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===63||f===95||f===126?(e.consume(f),a):f===38?(e.consume(f),c):f===93?(e.consume(f),s):f===60||f===null||Ye(f)||pi(f)?n(f):i(f)}function s(f){return f===null||f===40||f===91||Ye(f)||pi(f)?n(f):a(f)}function c(f){return jt(f)?u(f):i(f)}function u(f){return f===59?(e.consume(f),a):jt(f)?(e.consume(f),u):i(f)}}function pL(e,n,i){return a;function a(c){return e.consume(c),s}function s(c){return Tt(c)?i(c):n(c)}}function d2(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Ye(e)}function h2(e){return!jt(e)}function m2(e){return!(e===47||xh(e))}function xh(e){return e===43||e===45||e===46||e===95||Tt(e)}function Sm(e){let n=e.length,i=!1;for(;n--;){const a=e[n][1];if((a.type==="labelLink"||a.type==="labelImage")&&!a._balanced){i=!0;break}if(a._gfmAutolinkLiteralWalkedInto){i=!1;break}}return e.length>0&&!i&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}const gL={tokenize:CL,partial:!0};function yL(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:SL,continuation:{tokenize:wL},exit:TL}},text:{91:{name:"gfmFootnoteCall",tokenize:vL},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:xL,resolveTo:bL}}}}function xL(e,n,i){const a=this;let s=a.events.length;const c=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let u;for(;s--;){const m=a.events[s][1];if(m.type==="labelImage"){u=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return f;function f(m){if(!u||!u._balanced)return i(m);const h=Cn(a.sliceSerialize({start:u.end,end:a.now()}));return h.codePointAt(0)!==94||!c.includes(h.slice(1))?i(m):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),n(m))}}function bL(e,n){let i=e.length;for(;i--;)if(e[i][1].type==="labelImage"&&e[i][0]==="enter"){e[i][1];break}e[i+1][1].type="data",e[i+3][1].type="gfmFootnoteCallLabelMarker";const a={type:"gfmFootnoteCall",start:Object.assign({},e[i+3][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},e[i+3][1].end),end:Object.assign({},e[i+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},e[e.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},f=[e[i+1],e[i+2],["enter",a,n],e[i+3],e[i+4],["enter",s,n],["exit",s,n],["enter",c,n],["enter",u,n],["exit",u,n],["exit",c,n],e[e.length-2],e[e.length-1],["exit",a,n]];return e.splice(i,e.length-i+1,...f),e}function vL(e,n,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c=0,u;return f;function f(g){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(g),e.exit("gfmFootnoteCallLabelMarker"),m}function m(g){return g!==94?i(g):(e.enter("gfmFootnoteCallMarker"),e.consume(g),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",h)}function h(g){if(c>999||g===93&&!u||g===null||g===91||Ye(g))return i(g);if(g===93){e.exit("chunkString");const b=e.exit("gfmFootnoteCallString");return s.includes(Cn(a.sliceSerialize(b)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(g),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):i(g)}return Ye(g)||(u=!0),c++,e.consume(g),g===92?y:h}function y(g){return g===91||g===92||g===93?(e.consume(g),c++,h):h(g)}}function SL(e,n,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c,u=0,f;return m;function m(w){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(w){return w===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",y):i(w)}function y(w){if(u>999||w===93&&!f||w===null||w===91||Ye(w))return i(w);if(w===93){e.exit("chunkString");const E=e.exit("gfmFootnoteDefinitionLabelString");return c=Cn(a.sliceSerialize(E)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),b}return Ye(w)||(f=!0),u++,e.consume(w),w===92?g:y}function g(w){return w===91||w===92||w===93?(e.consume(w),u++,y):y(w)}function b(w){return w===58?(e.enter("definitionMarker"),e.consume(w),e.exit("definitionMarker"),s.includes(c)||s.push(c),Re(e,v,"gfmFootnoteDefinitionWhitespace")):i(w)}function v(w){return n(w)}}function wL(e,n,i){return e.check(ss,n,e.attempt(gL,n,i))}function TL(e){e.exit("gfmFootnoteDefinition")}function CL(e,n,i){const a=this;return Re(e,s,"gfmFootnoteDefinitionIndent",5);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="gfmFootnoteDefinitionIndent"&&u[2].sliceSerialize(u[1],!0).length===4?n(c):i(c)}}function AL(e){let i=(e||{}).singleTilde;const a={name:"strikethrough",tokenize:c,resolveAll:s};return i==null&&(i=!0),{text:{126:a},insideSpan:{null:[a]},attentionMarkers:{null:[126]}};function s(u,f){let m=-1;for(;++m<u.length;)if(u[m][0]==="enter"&&u[m][1].type==="strikethroughSequenceTemporary"&&u[m][1]._close){let h=m;for(;h--;)if(u[h][0]==="exit"&&u[h][1].type==="strikethroughSequenceTemporary"&&u[h][1]._open&&u[m][1].end.offset-u[m][1].start.offset===u[h][1].end.offset-u[h][1].start.offset){u[m][1].type="strikethroughSequence",u[h][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},u[h][1].start),end:Object.assign({},u[m][1].end)},g={type:"strikethroughText",start:Object.assign({},u[h][1].end),end:Object.assign({},u[m][1].start)},b=[["enter",y,f],["enter",u[h][1],f],["exit",u[h][1],f],["enter",g,f]],v=f.parser.constructs.insideSpan.null;v&&$t(b,b.length,0,wu(v,u.slice(h+1,m),f)),$t(b,b.length,0,[["exit",g,f],["enter",u[m][1],f],["exit",u[m][1],f],["exit",y,f]]),$t(u,h-1,m-h+3,b),m=h+b.length-2;break}}for(m=-1;++m<u.length;)u[m][1].type==="strikethroughSequenceTemporary"&&(u[m][1].type="data");return u}function c(u,f,m){const h=this.previous,y=this.events;let g=0;return b;function b(w){return h===126&&y[y.length-1][1].type!=="characterEscape"?m(w):(u.enter("strikethroughSequenceTemporary"),v(w))}function v(w){const E=ya(h);if(w===126)return g>1?m(w):(u.consume(w),g++,v);if(g<2&&!i)return m(w);const k=u.exit("strikethroughSequenceTemporary"),C=ya(w);return k._open=!C||C===2&&!!E,k._close=!E||E===2&&!!C,f(w)}}}class kL{constructor(){this.map=[]}add(n,i,a){EL(this,n,i,a)}consume(n){if(this.map.sort(function(c,u){return c[0]-u[0]}),this.map.length===0)return;let i=this.map.length;const a=[];for(;i>0;)i-=1,a.push(n.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),n.length=this.map[i][0];a.push(n.slice()),n.length=0;let s=a.pop();for(;s;){for(const c of s)n.push(c);s=a.pop()}this.map.length=0}}function EL(e,n,i,a){let s=0;if(!(i===0&&a.length===0)){for(;s<e.map.length;){if(e.map[s][0]===n){e.map[s][1]+=i,e.map[s][2].push(...a);return}s+=1}e.map.push([n,i,a])}}function jL(e,n){let i=!1;const a=[];for(;n<e.length;){const s=e[n];if(i){if(s[0]==="enter")s[1].type==="tableContent"&&a.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const c=a.length-1;a[c]=a[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(i=!0);n+=1}return a}function ML(){return{flow:{null:{name:"table",tokenize:DL,resolveAll:NL}}}}function DL(e,n,i){const a=this;let s=0,c=0,u;return f;function f(R){let Q=a.events.length-1;for(;Q>-1;){const se=a.events[Q][1].type;if(se==="lineEnding"||se==="linePrefix")Q--;else break}const te=Q>-1?a.events[Q][1].type:null,me=te==="tableHead"||te==="tableRow"?_:m;return me===_&&a.parser.lazy[a.now().line]?i(R):me(R)}function m(R){return e.enter("tableHead"),e.enter("tableRow"),h(R)}function h(R){return R===124||(u=!0,c+=1),y(R)}function y(R){return R===null?i(R):ge(R)?c>1?(c=0,a.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(R),e.exit("lineEnding"),v):i(R):Ee(R)?Re(e,y,"whitespace")(R):(c+=1,u&&(u=!1,s+=1),R===124?(e.enter("tableCellDivider"),e.consume(R),e.exit("tableCellDivider"),u=!0,y):(e.enter("data"),g(R)))}function g(R){return R===null||R===124||Ye(R)?(e.exit("data"),y(R)):(e.consume(R),R===92?b:g)}function b(R){return R===92||R===124?(e.consume(R),g):g(R)}function v(R){return a.interrupt=!1,a.parser.lazy[a.now().line]?i(R):(e.enter("tableDelimiterRow"),u=!1,Ee(R)?Re(e,w,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):w(R))}function w(R){return R===45||R===58?k(R):R===124?(u=!0,e.enter("tableCellDivider"),e.consume(R),e.exit("tableCellDivider"),E):Y(R)}function E(R){return Ee(R)?Re(e,k,"whitespace")(R):k(R)}function k(R){return R===58?(c+=1,u=!0,e.enter("tableDelimiterMarker"),e.consume(R),e.exit("tableDelimiterMarker"),C):R===45?(c+=1,C(R)):R===null||ge(R)?V(R):Y(R)}function C(R){return R===45?(e.enter("tableDelimiterFiller"),N(R)):Y(R)}function N(R){return R===45?(e.consume(R),N):R===58?(u=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(R),e.exit("tableDelimiterMarker"),j):(e.exit("tableDelimiterFiller"),j(R))}function j(R){return Ee(R)?Re(e,V,"whitespace")(R):V(R)}function V(R){return R===124?w(R):R===null||ge(R)?!u||s!==c?Y(R):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(R)):Y(R)}function Y(R){return i(R)}function _(R){return e.enter("tableRow"),q(R)}function q(R){return R===124?(e.enter("tableCellDivider"),e.consume(R),e.exit("tableCellDivider"),q):R===null||ge(R)?(e.exit("tableRow"),n(R)):Ee(R)?Re(e,q,"whitespace")(R):(e.enter("data"),X(R))}function X(R){return R===null||R===124||Ye(R)?(e.exit("data"),q(R)):(e.consume(R),R===92?I:X)}function I(R){return R===92||R===124?(e.consume(R),X):X(R)}}function NL(e,n){let i=-1,a=!0,s=0,c=[0,0,0,0],u=[0,0,0,0],f=!1,m=0,h,y,g;const b=new kL;for(;++i<e.length;){const v=e[i],w=v[1];v[0]==="enter"?w.type==="tableHead"?(f=!1,m!==0&&(Xb(b,n,m,h,y),y=void 0,m=0),h={type:"table",start:Object.assign({},w.start),end:Object.assign({},w.end)},b.add(i,0,[["enter",h,n]])):w.type==="tableRow"||w.type==="tableDelimiterRow"?(a=!0,g=void 0,c=[0,0,0,0],u=[0,i+1,0,0],f&&(f=!1,y={type:"tableBody",start:Object.assign({},w.start),end:Object.assign({},w.end)},b.add(i,0,[["enter",y,n]])),s=w.type==="tableDelimiterRow"?2:y?3:1):s&&(w.type==="data"||w.type==="tableDelimiterMarker"||w.type==="tableDelimiterFiller")?(a=!1,u[2]===0&&(c[1]!==0&&(u[0]=u[1],g=Po(b,n,c,s,void 0,g),c=[0,0,0,0]),u[2]=i)):w.type==="tableCellDivider"&&(a?a=!1:(c[1]!==0&&(u[0]=u[1],g=Po(b,n,c,s,void 0,g)),c=u,u=[c[1],i,0,0])):w.type==="tableHead"?(f=!0,m=i):w.type==="tableRow"||w.type==="tableDelimiterRow"?(m=i,c[1]!==0?(u[0]=u[1],g=Po(b,n,c,s,i,g)):u[1]!==0&&(g=Po(b,n,u,s,i,g)),s=0):s&&(w.type==="data"||w.type==="tableDelimiterMarker"||w.type==="tableDelimiterFiller")&&(u[3]=i)}for(m!==0&&Xb(b,n,m,h,y),b.consume(n.events),i=-1;++i<n.events.length;){const v=n.events[i];v[0]==="enter"&&v[1].type==="table"&&(v[1]._align=jL(n.events,i))}return e}function Po(e,n,i,a,s,c){const u=a===1?"tableHeader":a===2?"tableDelimiter":"tableData",f="tableContent";i[0]!==0&&(c.end=Object.assign({},ua(n.events,i[0])),e.add(i[0],0,[["exit",c,n]]));const m=ua(n.events,i[1]);if(c={type:u,start:Object.assign({},m),end:Object.assign({},m)},e.add(i[1],0,[["enter",c,n]]),i[2]!==0){const h=ua(n.events,i[2]),y=ua(n.events,i[3]),g={type:f,start:Object.assign({},h),end:Object.assign({},y)};if(e.add(i[2],0,[["enter",g,n]]),a!==2){const b=n.events[i[2]],v=n.events[i[3]];if(b[1].end=Object.assign({},v[1].end),b[1].type="chunkText",b[1].contentType="text",i[3]>i[2]+1){const w=i[2]+1,E=i[3]-i[2]-1;e.add(w,E,[])}}e.add(i[3]+1,0,[["exit",g,n]])}return s!==void 0&&(c.end=Object.assign({},ua(n.events,s)),e.add(s,0,[["exit",c,n]]),c=void 0),c}function Xb(e,n,i,a,s){const c=[],u=ua(n.events,i);s&&(s.end=Object.assign({},u),c.push(["exit",s,n])),a.end=Object.assign({},u),c.push(["exit",a,n]),e.add(i+1,0,c)}function ua(e,n){const i=e[n],a=i[0]==="enter"?"start":"end";return i[1][a]}const RL={name:"tasklistCheck",tokenize:_L};function OL(){return{text:{91:RL}}}function _L(e,n,i){const a=this;return s;function s(m){return a.previous!==null||!a._gfmTasklistFirstContentOfListItem?i(m):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(m),e.exit("taskListCheckMarker"),c)}function c(m){return Ye(m)?(e.enter("taskListCheckValueUnchecked"),e.consume(m),e.exit("taskListCheckValueUnchecked"),u):m===88||m===120?(e.enter("taskListCheckValueChecked"),e.consume(m),e.exit("taskListCheckValueChecked"),u):i(m)}function u(m){return m===93?(e.enter("taskListCheckMarker"),e.consume(m),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),f):i(m)}function f(m){return ge(m)?n(m):Ee(m)?e.check({tokenize:LL},n,i)(m):i(m)}}function LL(e,n,i){return Re(e,a,"whitespace");function a(s){return s===null?i(s):n(s)}}function zL(e){return AS([sL(),yL(),AL(e),ML(),OL()])}const BL={};function VL(e){const n=this,i=e||BL,a=n.data(),s=a.micromarkExtensions||(a.micromarkExtensions=[]),c=a.fromMarkdownExtensions||(a.fromMarkdownExtensions=[]),u=a.toMarkdownExtensions||(a.toMarkdownExtensions=[]);s.push(zL(i)),c.push(rL()),u.push(iL(i))}function Ul(e){return e==null?"":typeof e=="string"||typeof e=="number"?String(e):Array.isArray(e)?e.map(Ul).join(""):typeof e=="object"&&e&&"props"in e?Ul(e.props?.children):""}function p2(){const e=new Map,n=i=>i.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");return i=>{const a=n(i)||"section",s=e.get(a)??0;return e.set(a,s+1),s===0?a:`${a}-${s}`}}function PL(e,n=1,i=3){const a=p2(),s=e.split(`
`);let c=!1;const u=[];for(const f of s){const m=f.trimEnd();if(m.trimStart().startsWith("```")){c=!c;continue}if(c)continue;const h=/^(#{1,6})\s+(.+?)\s*$/.exec(m);if(!h)continue;const y=h[1].length;if(y<n||y>i)continue;const g=h[2].replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[*_`]/g,"").trim(),b=a(g);u.push({id:b,text:g,level:y})}return u}const IL=({toc:e,activeId:n,onClickItem:i})=>e.length?x.jsx("aside",{className:"fixed left-[calc(50%+870px/2+48px)] top-[calc(var(--header-height)+48px)] hidden xl:block w-56 2xl:w-64 h-[calc(100vh-var(--header-height)-96px)] overflow-y-auto overflow-x-hidden",children:x.jsx("div",{className:" pl-4 pr-2",children:x.jsx("nav",{"aria-label":"Table of contents",children:x.jsx("ul",{className:"space-y-2",children:e.map(a=>{const s=a.id===n,c=a.level===1?"pl-0":a.level===2?"pl-3":"pl-6";return x.jsx("li",{className:c,children:x.jsxs("button",{type:"button",onClick:()=>i(a.id),className:["group relative block w-full text-left cursor-pointer","text-[13px] leading-[1.65]","transition-all duration-200 origin-left","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",s?"text-(--fg-base) scale-110":"text-gray-500 hover:text-gray-500/80 hover:scale-105"].join(" "),children:[x.jsx("span",{className:["absolute -left-[22px] top-[9px] h-1.5 w-1.5 rounded-full","bg-(--fg-base)","transition-opacity duration-200",s?"opacity-100":"opacity-0 group-hover:opacity-60"].join(" ")}),a.text]})},a.id)})})})})}):null,Jb=({dir:e})=>x.jsx("span",{className:["shrink-0 w-11 h-11 rounded-full flex items-center justify-center","border border-(--accent) text-(--accent)","bg-transparent group-hover:bg-(--accent-subtle)","transition-colors duration-300"].join(" "),children:x.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e==="left"?x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"}):x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),Kb=({children:e,align:n,onClick:i})=>x.jsxs("button",{type:"button",onClick:i,className:["group relative w-full overflow-hidden rounded-2xl","border border-(--border-subtle)","bg-(--bg-soft) hover:bg-(--bg-elevated)","transition-all duration-300","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",n==="left"?"text-left":"text-right"].join(" "),children:[x.jsx("span",{className:"pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:x.jsx("span",{className:"absolute inset-0 bg-linear-to-r from-(--accent)/0 via-(--accent)/10 to-(--accent)/0"})}),x.jsx("div",{className:"relative p-6 cursor-pointer",children:e})]}),UL=({prevPost:e,nextPost:n,onNavigate:i})=>!e&&!n?null:x.jsx("nav",{className:"mt-16 pt-8 border-t border-(--border-subtle)",children:x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[x.jsx("div",{className:"md:col-span-1 h-[88px]",children:e?x.jsx(Kb,{align:"left",onClick:()=>i(e.slug),children:x.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[x.jsx(Jb,{dir:"left"}),x.jsxs("div",{className:"min-w-0",children:[x.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"이전 포스트"}),x.jsx("h3",{className:`\r
                      text-[18px] font-bold text-(--fg-base)\r
                      truncate overflow-hidden\r
                    `,children:e.title})]})]})}):x.jsx("div",{className:"w-full h-full"})}),x.jsx("div",{className:"md:col-span-1  h-[88px]",children:n?x.jsx(Kb,{align:"right",onClick:()=>i(n.slug),children:x.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[x.jsxs("div",{className:"min-w-0 text-right",children:[x.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"다음 포스트"}),x.jsx("h3",{className:` \r
                      text-[18px] font-bold text-(--fg-base)\r
                      truncate overflow-hidden\r
                    `,children:n.title})]}),x.jsx(Jb,{dir:"right"})]})}):x.jsx("div",{className:"w-full h-full"})})]})}),HL=Wo.memo(function({content:n}){const i=M.useMemo(()=>p2(),[n]),a=M.useMemo(()=>[VL],[]),s=M.useMemo(()=>({h1:({children:c,...u})=>{const f=Ul(c),m=i(f);return x.jsx("h1",{id:m,className:"scroll-mt-[calc(var(--header-height)+24px)]",...u,children:c})},h2:({children:c,...u})=>{const f=Ul(c),m=i(f);return x.jsx("h2",{id:m,className:"scroll-mt-[calc(var(--header-height)+24px)]",...u,children:c})},h3:({children:c,...u})=>{const f=Ul(c),m=i(f);return x.jsx("h3",{id:m,className:"scroll-mt-[calc(var(--header-height)+24px)]",...u,children:c})}}),[i]);return x.jsx(AO,{remarkPlugins:a,components:s,children:n})}),FL=()=>{const{slug:e}=yC(),n=$l(),i=M.useMemo(()=>hn.find(g=>g.slug===e),[e]),a=M.useMemo(()=>i?.content??"",[i]),s=M.useMemo(()=>a?PL(a,1,3):[],[a]),{prevPost:c,nextPost:u}=M.useMemo(()=>{const g=hn.findIndex(b=>b.slug===e);return g===-1?{prevPost:null,nextPost:null}:{prevPost:g>0?hn[g-1]:null,nextPost:g<hn.length-1?hn[g+1]:null}},[e]),[f,m]=M.useState(),h=Wo.useRef(!1),y=g=>{const b=document.getElementById(g);if(!b)return;h.current=!0,m(V=>V===g?V:g),history.replaceState(null,"",`#${g}`);const v=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim())||80,k=b.getBoundingClientRect().top+window.pageYOffset-v-24;window.scrollTo({top:k,behavior:"smooth"});const C=performance.now();let N=0;const j=()=>{const V=window.scrollY;Math.abs(V-k)<2?N+=1:N=0;const Y=performance.now()-C>2200;if(N>=3||Y){h.current=!1;return}requestAnimationFrame(j)};requestAnimationFrame(j)};return M.useEffect(()=>{if(!s.length)return;const g=()=>{const k=getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim(),C=parseFloat(k);return Number.isFinite(C)?C:80},b=24;let v=0;const w=()=>{if(v=0,h.current)return;const k=g(),C=window.scrollY+k+b+1;let N=s[0]?.id;for(const j of s){const V=document.getElementById(j.id);if(V)if(V.offsetTop<=C)N=j.id;else break}m(j=>j===N?j:N)},E=()=>{v||(v=requestAnimationFrame(w))};return w(),window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",E),()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",E),v&&cancelAnimationFrame(v)}},[s,e]),i?x.jsxs("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) overflow-x-hidden",children:[x.jsx("div",{className:"mx-auto max-w-(--content-max-w) px-5 md:px-8 pt-[calc(var(--header-height)+48px)] pb-16",children:x.jsxs("article",{className:"w-full",children:[x.jsxs("button",{onClick:()=>n("/blog"),className:"relative z-10 mb-5 text-[13px] text-fg-muted hover:text-fg transition-colors flex items-center gap-2",children:[x.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]}),x.jsxs("div",{className:"mb-10",children:[x.jsx("h1",{className:"text-[36px] md:text-[42px] font-bold leading-tight mb-4",children:i.title}),x.jsxs("div",{className:"w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4",children:[x.jsx("div",{className:"flex flex-wrap gap-2",children:i.tags.map(g=>x.jsx("span",{className:"text-[13px] text-(--accent) px-2.5 py-1.5",children:g},g))}),x.jsx("div",{className:"text-[13px] text-fg-muted whitespace-nowrap md:text-right",children:i.date})]})]}),i.cover&&x.jsx("div",{className:"relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-(--bg-soft)",children:x.jsx("img",{src:i.cover,alt:i.title,className:"absolute inset-0 w-full h-full object-cover"})}),x.jsx("div",{className:"prose prose-invert max-w-none",children:a?x.jsx(HL,{content:a}):x.jsx("p",{className:"text-fg-muted",children:"콘텐츠가 없습니다."})}),x.jsx(UL,{prevPost:c,nextPost:u,onNavigate:g=>n(`/blog/${g}`)})]})}),x.jsx(IL,{toc:s,activeId:f,onClickItem:y})]}):x.jsx("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) flex items-center justify-center",children:x.jsxs("div",{className:"text-center",children:[x.jsx("h1",{className:"text-[32px] font-bold mb-4",children:"포스트를 찾을 수 없습니다"}),x.jsx("button",{onClick:()=>n("/blog"),className:"px-4 py-2 rounded-full border border-(--border-subtle) bg-(--bg-soft) hover:bg-(--bg-elevated) transition-colors duration-300",children:"블로그로 돌아가기"})]})})},qL="relative min-h-screen pt-[calc(var(--header-height)+56px)] pb-24 px-5 overflow-hidden",GL="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(125,211,252,0.16),transparent_60%),radial-gradient(800px_420px_at_80%_30%,rgba(167,139,250,0.14),transparent_60%),radial-gradient(700px_360px_at_50%_85%,rgba(34,197,94,0.10),transparent_60%)] [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]",Qb="inline-flex items-center rounded-full border border-(--border-subtle) bg-(--bg-soft) px-3 py-1 text-[11px] text-fg-muted [html[data-theme='light']_&]:bg-[#f5f5fb]",YL="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-fg-muted",XL=()=>{const[e,n]=M.useState(!1),i="lanos5019@ajou.ac.kr",a=M.useCallback(()=>{navigator.clipboard.writeText(i).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})},[]);return x.jsxs("main",{className:qL,children:[x.jsx("div",{className:GL}),x.jsxs("div",{className:"max-w-(--content-max-w) mx-auto relative",children:[x.jsxs("section",{className:"text-center mb-14",children:[x.jsx("div",{className:"flex justify-center mb-4",children:x.jsxs("span",{className:`${Qb} gap-2`,children:[x.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-(--accent)"}),x.jsx("span",{className:YL,children:"Contact"})]})}),x.jsx("h1",{className:"text-[34px] md:text-[44px] font-semibold tracking-[-0.02em] mb-4",children:"함께 이야기해요"}),x.jsxs("p",{className:"text-[15px] md:text-[16px] text-fg-muted leading-relaxed max-w-lg mx-auto",children:["프로젝트 제안, 협업, 채용 어떤 주제든 좋습니다.",x.jsx("br",{className:"md:block"}),"편하게 연락 주세요."]})]}),x.jsxs("div",{className:"max-w-lg mx-auto flex flex-col gap-6",children:[x.jsxs("div",{className:"relative group",children:[x.jsxs("a",{href:`mailto:${i}`,className:"relative flex items-center gap-4 rounded-2xl px-5 py-4 border border-(--border-subtle) bg-(--bg-elevated)/70 backdrop-blur-xl shadow-[0_10px_28px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:border-(--accent)/40 [html[data-theme='light']_&]:bg-white/70 [html[data-theme='light']_&]:shadow-[0_8px_22px_rgba(0,0,0,0.07)] [html[data-theme='light']_&]:hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]",children:[x.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(600px_160px_at_10%_0%,rgba(255,255,255,0.12),transparent_55%)] [html[data-theme='light']_&]:bg-[radial-gradient(600px_160px_at_10%_0%,rgba(17,24,39,0.04),transparent_55%)]"}),x.jsx("div",{className:`w-11 h-11 rounded-full bg-(--bg-soft) border border-(--border-subtle)\r
                           flex items-center justify-center shrink-0\r
                           group-hover:border-(--accent)/40 transition-colors`,children:x.jsx(JL,{className:"w-5 h-5 text-(--accent)"})}),x.jsxs("div",{className:"min-w-0 flex-1",children:[x.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[x.jsx("span",{className:"text-[11px] uppercase tracking-wider text-fg-muted",children:"Email"}),x.jsx("span",{className:Qb,children:"가장 빠른 연락처"})]}),x.jsx("span",{className:"text-[16px] md:text-[18px] font-semibold text-fg truncate block",children:i})]})]}),x.jsx("button",{onClick:a,"aria-label":"이메일 복사",className:"absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-xl border border-(--border-subtle) bg-(--bg-soft) flex items-center justify-center cursor-pointer transition-all duration-200 ease-out hover:border-(--accent)/40 hover:bg-(--bg-elevated) active:scale-90",children:e?x.jsx(QL,{className:"w-4 h-4 text-(--accent)"}):x.jsx(KL,{className:"w-4 h-4 text-fg-muted"})})]}),x.jsx("div",{className:"fixed bottom-8 left-1/2 -translate-x-1/2 z-9999 px-4 py-2.5 rounded-xl bg-(--bg-elevated) border border-(--border-subtle) shadow-[0_8px_24px_rgba(0,0,0,0.3)] text-[13px] font-medium text-fg transition-all duration-300 ease-out "+(e?"opacity-100 translate-y-0":"opacity-0 translate-y-3 pointer-events-none"),children:"이메일이 복사되었습니다"}),x.jsxs("a",{href:"/portfolio/resume.pdf",target:"_blank",rel:"noreferrer",className:"group relative flex items-center justify-center gap-3 w-full rounded-2xl px-5 py-4 cursor-pointer bg-(--accent) text-white font-semibold text-[15px] shadow-[0_6px_20px_rgba(32,201,151,0.3)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(32,201,151,0.45)] active:scale-[0.98]",children:[x.jsx(ZL,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"}),x.jsx("span",{children:"이력서 다운로드"}),x.jsx("span",{className:"text-[12px] opacity-70 ml-1",children:"PDF"})]}),x.jsxs("div",{className:"flex items-center justify-center gap-3",children:[x.jsx(_d,{href:"tel:010-3465-9425",label:"Phone",icon:x.jsx(WL,{className:"w-[18px] h-[18px]"})}),x.jsx(_d,{href:"https://github.com/km-kwon",label:"GitHub",external:!0,icon:x.jsx($L,{className:"w-[18px] h-[18px]"})}),x.jsx(_d,{href:"https://www.npmjs.com/~kwon-kyoungmin",label:"NPM",external:!0,icon:x.jsx(e6,{className:"w-[18px] h-[18px]"})})]}),x.jsx("p",{className:"text-center text-[12px] text-fg-muted/60 mt-2",children:"성남, 대한민국 · 원격 협업 가능 · 평균 응답 24h 이내"})]})]})]})},_d=({href:e,label:n,icon:i,external:a})=>x.jsxs("a",{href:e,target:a?"_blank":void 0,rel:a?"noreferrer":void 0,"aria-label":n,className:"group/social relative w-12 h-12 rounded-2xl border border-(--border-subtle) bg-(--bg-elevated)/70 backdrop-blur-xl flex items-center justify-center cursor-pointer text-fg-muted transition-all duration-300 ease-out hover:-translate-y-1 hover:text-fg hover:border-(--accent)/35 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] [html[data-theme='light']_&]:bg-white/70 [html[data-theme='light']_&]:hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]",children:[i,x.jsx("span",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-(--bg-elevated) border border-(--border-subtle) text-[11px] text-fg-muted whitespace-nowrap opacity-0 translate-y-1 pointer-events-none group-hover/social:opacity-100 group-hover/social:translate-y-0 transition-all duration-200 ease-out",children:n})]}),JL=({className:e})=>x.jsxs("svg",{className:e??"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 8l9 6 9-6"}),x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"})]}),KL=({className:e})=>x.jsxs("svg",{className:e??"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[x.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",strokeWidth:1.5,strokeLinecap:"round"}),x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]}),QL=({className:e})=>x.jsx("svg",{className:e??"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),ZL=({className:e})=>x.jsxs("svg",{className:e??"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 4v12m0 0l-4-4m4 4l4-4"}),x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})]}),WL=({className:e})=>x.jsx("svg",{className:e??"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),$L=({className:e})=>x.jsx("svg",{className:e??"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:x.jsx("path",{d:"M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.6-1.6-1.5-2-1.5-2-1.2-.9.1-.9.1-.9 1.3.1 2 .9 2 .9 1.2 2.1 3.1 1.5 3.9 1.1.1-.9.5-1.5.8-1.9-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.7-2.8 5.8-5.5 6.1.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z"})}),e6=({className:e})=>x.jsxs("svg",{className:e??"w-4 h-4",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[x.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"6",stroke:"currentColor",strokeWidth:"1.6"}),x.jsx("path",{d:"M8 16V8l8 8V8",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),t6=()=>{const[e,n]=M.useState(()=>{if(typeof window>"u")return"dark";try{return localStorage.getItem("portfolio-theme")||"dark"}catch{return"dark"}});M.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",e);try{localStorage.setItem("portfolio-theme",e)}catch{}}},[e]);const i=M.useCallback(()=>{n(c=>c==="dark"?"light":"dark")},[]),a=M.useCallback(c=>{const u=document.getElementById(c);if(u){const y=u.getBoundingClientRect().top+window.pageYOffset-64-20;window.scrollTo({top:y,behavior:"smooth"})}},[]),s="/portfolio/".replace(/\/$/,"");return x.jsxs(tA,{basename:s===""?void 0:s,children:[x.jsx(yA,{}),x.jsx(fA,{theme:e,onToggleTheme:i,onNavClick:a}),x.jsxs(RC,{children:[x.jsx(Rl,{path:"/",element:x.jsx(dN,{})}),x.jsx(Rl,{path:"/blog",element:x.jsx(mN,{})}),x.jsx(Rl,{path:"/blog/:slug",element:x.jsx(FL,{})}),x.jsx(Rl,{path:"/contact",element:x.jsx(XL,{})})]}),x.jsx(gA,{})]})};PT.createRoot(document.getElementById("root")).render(x.jsx(t6,{}));
