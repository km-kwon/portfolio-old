(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function ph(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uf={exports:{}},xl={};var fx;function fT(){if(fx)return xl;fx=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(a,s,c){var u=null;if(c!==void 0&&(u=""+c),s.key!==void 0&&(u=""+s.key),"key"in s){c={};for(var f in s)f!=="key"&&(c[f]=s[f])}else c=s;return s=c.ref,{$$typeof:e,type:a,key:u,ref:s!==void 0?s:null,props:c}}return xl.Fragment=n,xl.jsx=i,xl.jsxs=i,xl}var dx;function dT(){return dx||(dx=1,Uf.exports=fT()),Uf.exports}var x=dT(),If={exports:{}},bl={},Hf={exports:{}},Ff={};var hx;function hT(){return hx||(hx=1,(function(e){function n(P,ee){var ae=P.length;P.push(ee);e:for(;0<ae;){var ce=ae-1>>>1,D=P[ce];if(0<s(D,ee))P[ce]=ee,P[ae]=D,ae=ce;else break e}}function i(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var ee=P[0],ae=P.pop();if(ae!==ee){P[0]=ae;e:for(var ce=0,D=P.length,_=D>>>1;ce<_;){var J=2*(ce+1)-1,k=P[J],se=J+1,ye=P[se];if(0>s(k,ae))se<D&&0>s(ye,k)?(P[ce]=ye,P[se]=ae,ce=se):(P[ce]=k,P[J]=ae,ce=J);else if(se<D&&0>s(ye,ae))P[ce]=ye,P[se]=ae,ce=se;else break e}}return ee}function s(P,ee){var ae=P.sortIndex-ee.sortIndex;return ae!==0?ae:P.id-ee.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var m=[],h=[],y=1,g=null,b=3,v=!1,w=!1,E=!1,M=!1,C=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function V(P){for(var ee=i(h);ee!==null;){if(ee.callback===null)a(h);else if(ee.startTime<=P)a(h),ee.sortIndex=ee.expirationTime,n(m,ee);else break;ee=i(h)}}function Y(P){if(E=!1,V(P),!w)if(i(m)!==null)w=!0,L||(L=!0,te());else{var ee=i(h);ee!==null&&ne(Y,ee.startTime-P)}}var L=!1,G=-1,Q=5,F=-1;function N(){return M?!0:!(e.unstable_now()-F<Q)}function $(){if(M=!1,L){var P=e.unstable_now();F=P;var ee=!0;try{e:{w=!1,E&&(E=!1,O(G),G=-1),v=!0;var ae=b;try{t:{for(V(P),g=i(m);g!==null&&!(g.expirationTime>P&&N());){var ce=g.callback;if(typeof ce=="function"){g.callback=null,b=g.priorityLevel;var D=ce(g.expirationTime<=P);if(P=e.unstable_now(),typeof D=="function"){g.callback=D,V(P),ee=!0;break t}g===i(m)&&a(m),V(P)}else a(m);g=i(m)}if(g!==null)ee=!0;else{var _=i(h);_!==null&&ne(Y,_.startTime-P),ee=!1}}break e}finally{g=null,b=ae,v=!1}ee=void 0}}finally{ee?te():L=!1}}}var te;if(typeof A=="function")te=function(){A($)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,le=ge.port2;ge.port1.onmessage=$,te=function(){le.postMessage(null)}}else te=function(){C($,0)};function ne(P,ee){G=C(function(){P(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(P){switch(b){case 1:case 2:case 3:var ee=3;break;default:ee=b}var ae=b;b=ee;try{return P()}finally{b=ae}},e.unstable_requestPaint=function(){M=!0},e.unstable_runWithPriority=function(P,ee){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ae=b;b=P;try{return ee()}finally{b=ae}},e.unstable_scheduleCallback=function(P,ee,ae){var ce=e.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ce+ae:ce):ae=ce,P){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ae+D,P={id:y++,callback:ee,priorityLevel:P,startTime:ae,expirationTime:D,sortIndex:-1},ae>ce?(P.sortIndex=ae,n(h,P),i(m)===null&&P===i(h)&&(E?(O(G),G=-1):E=!0,ne(Y,ae-ce))):(P.sortIndex=D,n(m,P),w||v||(w=!0,L||(L=!0,te()))),P},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(P){var ee=b;return function(){var ae=b;b=ee;try{return P.apply(this,arguments)}finally{b=ae}}}})(Ff)),Ff}var mx;function mT(){return mx||(mx=1,Hf.exports=hT()),Hf.exports}var qf={exports:{}},be={};var px;function pT(){if(px)return be;px=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),b=Symbol.iterator;function v(_){return _===null||typeof _!="object"?null:(_=b&&_[b]||_["@@iterator"],typeof _=="function"?_:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function C(_,J,k){this.props=_,this.context=J,this.refs=M,this.updater=k||w}C.prototype.isReactComponent={},C.prototype.setState=function(_,J){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,J,"setState")},C.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function O(){}O.prototype=C.prototype;function A(_,J,k){this.props=_,this.context=J,this.refs=M,this.updater=k||w}var V=A.prototype=new O;V.constructor=A,E(V,C.prototype),V.isPureReactComponent=!0;var Y=Array.isArray;function L(){}var G={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function F(_,J,k){var se=k.ref;return{$$typeof:e,type:_,key:J,ref:se!==void 0?se:null,props:k}}function N(_,J){return F(_.type,J,_.props)}function $(_){return typeof _=="object"&&_!==null&&_.$$typeof===e}function te(_){var J={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(k){return J[k]})}var ge=/\/+/g;function le(_,J){return typeof _=="object"&&_!==null&&_.key!=null?te(""+_.key):J.toString(36)}function ne(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(L,L):(_.status="pending",_.then(function(J){_.status==="pending"&&(_.status="fulfilled",_.value=J)},function(J){_.status==="pending"&&(_.status="rejected",_.reason=J)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function P(_,J,k,se,ye){var de=typeof _;(de==="undefined"||de==="boolean")&&(_=null);var Ee=!1;if(_===null)Ee=!0;else switch(de){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(_.$$typeof){case e:case n:Ee=!0;break;case y:return Ee=_._init,P(Ee(_._payload),J,k,se,ye)}}if(Ee)return ye=ye(_),Ee=se===""?"."+le(_,0):se,Y(ye)?(k="",Ee!=null&&(k=Ee.replace(ge,"$&/")+"/"),P(ye,J,k,"",function($t){return $t})):ye!=null&&($(ye)&&(ye=N(ye,k+(ye.key==null||_&&_.key===ye.key?"":(""+ye.key).replace(ge,"$&/")+"/")+Ee)),J.push(ye)),1;Ee=0;var Ke=se===""?".":se+":";if(Y(_))for(var Ve=0;Ve<_.length;Ve++)se=_[Ve],de=Ke+le(se,Ve),Ee+=P(se,J,k,de,ye);else if(Ve=v(_),typeof Ve=="function")for(_=Ve.call(_),Ve=0;!(se=_.next()).done;)se=se.value,de=Ke+le(se,Ve++),Ee+=P(se,J,k,de,ye);else if(de==="object"){if(typeof _.then=="function")return P(ne(_),J,k,se,ye);throw J=String(_),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function ee(_,J,k){if(_==null)return _;var se=[],ye=0;return P(_,se,"","",function(de){return J.call(k,de,ye++)}),se}function ae(_){if(_._status===-1){var J=_._result;J=J(),J.then(function(k){(_._status===0||_._status===-1)&&(_._status=1,_._result=k)},function(k){(_._status===0||_._status===-1)&&(_._status=2,_._result=k)}),_._status===-1&&(_._status=0,_._result=J)}if(_._status===1)return _._result.default;throw _._result}var ce=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)},D={map:ee,forEach:function(_,J,k){ee(_,function(){J.apply(this,arguments)},k)},count:function(_){var J=0;return ee(_,function(){J++}),J},toArray:function(_){return ee(_,function(J){return J})||[]},only:function(_){if(!$(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};return be.Activity=g,be.Children=D,be.Component=C,be.Fragment=i,be.Profiler=s,be.PureComponent=A,be.StrictMode=a,be.Suspense=m,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,be.__COMPILER_RUNTIME={__proto__:null,c:function(_){return G.H.useMemoCache(_)}},be.cache=function(_){return function(){return _.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(_,J,k){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var se=E({},_.props),ye=_.key;if(J!=null)for(de in J.key!==void 0&&(ye=""+J.key),J)!Q.call(J,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&J.ref===void 0||(se[de]=J[de]);var de=arguments.length-2;if(de===1)se.children=k;else if(1<de){for(var Ee=Array(de),Ke=0;Ke<de;Ke++)Ee[Ke]=arguments[Ke+2];se.children=Ee}return F(_.type,ye,se)},be.createContext=function(_){return _={$$typeof:u,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:c,_context:_},_},be.createElement=function(_,J,k){var se,ye={},de=null;if(J!=null)for(se in J.key!==void 0&&(de=""+J.key),J)Q.call(J,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ye[se]=J[se]);var Ee=arguments.length-2;if(Ee===1)ye.children=k;else if(1<Ee){for(var Ke=Array(Ee),Ve=0;Ve<Ee;Ve++)Ke[Ve]=arguments[Ve+2];ye.children=Ke}if(_&&_.defaultProps)for(se in Ee=_.defaultProps,Ee)ye[se]===void 0&&(ye[se]=Ee[se]);return F(_,de,ye)},be.createRef=function(){return{current:null}},be.forwardRef=function(_){return{$$typeof:f,render:_}},be.isValidElement=$,be.lazy=function(_){return{$$typeof:y,_payload:{_status:-1,_result:_},_init:ae}},be.memo=function(_,J){return{$$typeof:h,type:_,compare:J===void 0?null:J}},be.startTransition=function(_){var J=G.T,k={};G.T=k;try{var se=_(),ye=G.S;ye!==null&&ye(k,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(L,ce)}catch(de){ce(de)}finally{J!==null&&k.types!==null&&(J.types=k.types),G.T=J}},be.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},be.use=function(_){return G.H.use(_)},be.useActionState=function(_,J,k){return G.H.useActionState(_,J,k)},be.useCallback=function(_,J){return G.H.useCallback(_,J)},be.useContext=function(_){return G.H.useContext(_)},be.useDebugValue=function(){},be.useDeferredValue=function(_,J){return G.H.useDeferredValue(_,J)},be.useEffect=function(_,J){return G.H.useEffect(_,J)},be.useEffectEvent=function(_){return G.H.useEffectEvent(_)},be.useId=function(){return G.H.useId()},be.useImperativeHandle=function(_,J,k){return G.H.useImperativeHandle(_,J,k)},be.useInsertionEffect=function(_,J){return G.H.useInsertionEffect(_,J)},be.useLayoutEffect=function(_,J){return G.H.useLayoutEffect(_,J)},be.useMemo=function(_,J){return G.H.useMemo(_,J)},be.useOptimistic=function(_,J){return G.H.useOptimistic(_,J)},be.useReducer=function(_,J,k){return G.H.useReducer(_,J,k)},be.useRef=function(_){return G.H.useRef(_)},be.useState=function(_){return G.H.useState(_)},be.useSyncExternalStore=function(_,J,k){return G.H.useSyncExternalStore(_,J,k)},be.useTransition=function(){return G.H.useTransition()},be.version="19.2.0",be}var gx;function gh(){return gx||(gx=1,qf.exports=pT()),qf.exports}var Gf={exports:{}},wt={};var yx;function gT(){if(yx)return wt;yx=1;var e=gh();function n(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(m,h,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:m,containerInfo:h,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,wt.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(n(299));return c(m,h,null,y)},wt.flushSync=function(m){var h=u.T,y=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=h,a.p=y,a.d.f()}},wt.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(m,h))},wt.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},wt.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,g=f(y,h.crossOrigin),b=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?a.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:b,fetchPriority:v}):y==="script"&&a.d.X(m,{crossOrigin:g,integrity:b,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},wt.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=f(h.as,h.crossOrigin);a.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(m)},wt.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,g=f(y,h.crossOrigin);a.d.L(m,y,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},wt.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=f(h.as,h.crossOrigin);a.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(m)},wt.requestFormReset=function(m){a.d.r(m)},wt.unstable_batchedUpdates=function(m,h){return m(h)},wt.useFormState=function(m,h,y){return u.H.useFormState(m,h,y)},wt.useFormStatus=function(){return u.H.useHostTransitionStatus()},wt.version="19.2.0",wt}var xx;function yT(){if(xx)return Gf.exports;xx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Gf.exports=gT(),Gf.exports}var bx;function xT(){if(bx)return bl;bx=1;var e=mT(),n=gh(),i=yT();function a(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var r=t,l=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(l=r.return),t=r.return;while(t)}return r.tag===3?l:null}function u(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function f(t){if(t.tag===31){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function h(t){var r=t.alternate;if(!r){if(r=c(t),r===null)throw Error(a(188));return r!==t?null:t}for(var l=t,o=r;;){var d=l.return;if(d===null)break;var p=d.alternate;if(p===null){if(o=d.return,o!==null){l=o;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===l)return m(d),t;if(p===o)return m(d),r;p=p.sibling}throw Error(a(188))}if(l.return!==o.return)l=d,o=p;else{for(var S=!1,T=d.child;T;){if(T===l){S=!0,l=d,o=p;break}if(T===o){S=!0,o=d,l=p;break}T=T.sibling}if(!S){for(T=p.child;T;){if(T===l){S=!0,l=p,o=d;break}if(T===o){S=!0,o=p,l=d;break}T=T.sibling}if(!S)throw Error(a(189))}}if(l.alternate!==o)throw Error(a(190))}if(l.tag!==3)throw Error(a(188));return l.stateNode.current===l?t:r}function y(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=y(t),r!==null)return r;t=t.sibling}return null}var g=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),A=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Symbol.for("react.client.reference");function le(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case C:return"Profiler";case M:return"StrictMode";case Y:return"Suspense";case L:return"SuspenseList";case F:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case A:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case V:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return r=t.displayName||null,r!==null?r:le(t.type)||"Memo";case Q:r=t._payload,t=t._init;try{return le(t(r))}catch{}}return null}var ne=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},ce=[],D=-1;function _(t){return{current:t}}function J(t){0>D||(t.current=ce[D],ce[D]=null,D--)}function k(t,r){D++,ce[D]=t.current,t.current=r}var se=_(null),ye=_(null),de=_(null),Ee=_(null);function Ke(t,r){switch(k(de,r),k(ye,t),k(se,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?_y(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=_y(r),t=Ly(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(se),k(se,t)}function Ve(){J(se),J(ye),J(de)}function $t(t){t.memoizedState!==null&&k(Ee,t);var r=se.current,l=Ly(r,t.type);r!==l&&(k(ye,t),k(se,l))}function Vn(t){ye.current===t&&(J(se),J(ye)),Ee.current===t&&(J(Ee),ml._currentValue=ae)}var ka,rs;function Pn(t){if(ka===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);ka=r&&r[1]||"",rs=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ka+t+rs}var gi=!1;function yi(t,r){if(!t||gi)return"";gi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(r){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(q){var H=q}Reflect.construct(t,[],W)}else{try{W.call()}catch(q){H=q}t.call(W.prototype)}}else{try{throw Error()}catch(q){H=q}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(q){if(q&&H&&typeof q.stack=="string")return[q.stack,H.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=o.DetermineComponentFrameRoot(),S=p[0],T=p[1];if(S&&T){var R=S.split(`
`),I=T.split(`
`);for(d=o=0;o<R.length&&!R[o].includes("DetermineComponentFrameRoot");)o++;for(;d<I.length&&!I[d].includes("DetermineComponentFrameRoot");)d++;if(o===R.length||d===I.length)for(o=R.length-1,d=I.length-1;1<=o&&0<=d&&R[o]!==I[d];)d--;for(;1<=o&&0<=d;o--,d--)if(R[o]!==I[d]){if(o!==1||d!==1)do if(o--,d--,0>d||R[o]!==I[d]){var X=`
`+R[o].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=o&&0<=d);break}}}finally{gi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Pn(l):""}function is(t,r){switch(t.tag){case 26:case 27:case 5:return Pn(t.type);case 16:return Pn("Lazy");case 13:return t.child!==r&&r!==null?Pn("Suspense Fallback"):Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 15:return yi(t.type,!1);case 11:return yi(t.type.render,!1);case 1:return yi(t.type,!0);case 31:return Pn("Activity");default:return""}}function as(t){try{var r="",l=null;do r+=is(t,l),l=t,t=t.return;while(t);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var xi=Object.prototype.hasOwnProperty,bi=e.unstable_scheduleCallback,Aa=e.unstable_cancelCallback,Cu=e.unstable_shouldYield,ku=e.unstable_requestPaint,kt=e.unstable_now,Au=e.unstable_getCurrentPriorityLevel,K=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,xe=e.unstable_NormalPriority,Te=e.unstable_LowPriority,Le=e.unstable_IdlePriority,It=e.log,Un=e.unstable_setDisableYieldValue,At=null,ct=null;function Rt(t){if(typeof It=="function"&&Un(t),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(At,t)}catch{}}var He=Math.clz32?Math.clz32:ZS,cr=Math.log,gn=Math.LN2;function ZS(t){return t>>>=0,t===0?32:31-(cr(t)/gn|0)|0}var ls=256,ss=262144,os=4194304;function Fr(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function us(t,r,l){var o=t.pendingLanes;if(o===0)return 0;var d=0,p=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~p,o!==0?d=Fr(o):(S&=T,S!==0?d=Fr(S):l||(l=T&~t,l!==0&&(d=Fr(l))))):(T=o&~p,T!==0?d=Fr(T):S!==0?d=Fr(S):l||(l=o&~t,l!==0&&(d=Fr(l)))),d===0?0:r!==0&&r!==d&&(r&p)===0&&(p=d&-d,l=r&-r,p>=l||p===32&&(l&4194048)!==0)?r:d}function Ea(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function WS(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pm(){var t=os;return os<<=1,(os&62914560)===0&&(os=4194304),t}function Eu(t){for(var r=[],l=0;31>l;l++)r.push(t);return r}function Ma(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $S(t,r,l,o,d,p){var S=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var T=t.entanglements,R=t.expirationTimes,I=t.hiddenUpdates;for(l=S&~l;0<l;){var X=31-He(l),W=1<<X;T[X]=0,R[X]=-1;var H=I[X];if(H!==null)for(I[X]=null,X=0;X<H.length;X++){var q=H[X];q!==null&&(q.lane&=-536870913)}l&=~W}o!==0&&gm(t,o,0),p!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=p&~(S&~r))}function gm(t,r,l){t.pendingLanes|=r,t.suspendedLanes&=~r;var o=31-He(r);t.entangledLanes|=r,t.entanglements[o]=t.entanglements[o]|1073741824|l&261930}function ym(t,r){var l=t.entangledLanes|=r;for(t=t.entanglements;l;){var o=31-He(l),d=1<<o;d&r|t[o]&r&&(t[o]|=r),l&=~d}}function xm(t,r){var l=r&-r;return l=(l&42)!==0?1:Mu(l),(l&(t.suspendedLanes|r))!==0?0:l}function Mu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ju(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bm(){var t=ee.p;return t!==0?t:(t=window.event,t===void 0?32:ix(t.type))}function vm(t,r){var l=ee.p;try{return ee.p=t,r()}finally{ee.p=l}}var fr=Math.random().toString(36).slice(2),pt="__reactFiber$"+fr,Nt="__reactProps$"+fr,vi="__reactContainer$"+fr,Du="__reactEvents$"+fr,e2="__reactListeners$"+fr,t2="__reactHandles$"+fr,Sm="__reactResources$"+fr,ja="__reactMarker$"+fr;function Ru(t){delete t[pt],delete t[Nt],delete t[Du],delete t[e2],delete t[t2]}function Si(t){var r=t[pt];if(r)return r;for(var l=t.parentNode;l;){if(r=l[vi]||l[pt]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(t=Hy(t);t!==null;){if(l=t[pt])return l;t=Hy(t)}return r}t=l,l=t.parentNode}return null}function wi(t){if(t=t[pt]||t[vi]){var r=t.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return t}return null}function Da(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(a(33))}function Ti(t){var r=t[Sm];return r||(r=t[Sm]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ht(t){t[ja]=!0}var wm=new Set,Tm={};function qr(t,r){Ci(t,r),Ci(t+"Capture",r)}function Ci(t,r){for(Tm[t]=r,t=0;t<r.length;t++)wm.add(r[t])}var n2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cm={},km={};function r2(t){return xi.call(km,t)?!0:xi.call(Cm,t)?!1:n2.test(t)?km[t]=!0:(Cm[t]=!0,!1)}function cs(t,r,l){if(r2(r))if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var o=r.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+l)}}function fs(t,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+l)}}function In(t,r,l,o){if(o===null)t.removeAttribute(l);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(r,l,""+o)}}function en(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Am(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function i2(t,r,l){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r);if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return d.call(this)},set:function(S){l=""+S,p.call(this,S)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Nu(t){if(!t._valueTracker){var r=Am(t)?"checked":"value";t._valueTracker=i2(t,r,""+t[r])}}function Em(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var l=r.getValue(),o="";return t&&(o=Am(t)?t.checked?"true":"false":t.value),t=o,t!==l?(r.setValue(t),!0):!1}function ds(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var a2=/[\n"\\]/g;function tn(t){return t.replace(a2,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ou(t,r,l,o,d,p,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),r!=null?S==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+en(r)):t.value!==""+en(r)&&(t.value=""+en(r)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),r!=null?_u(t,S,en(r)):l!=null?_u(t,S,en(l)):o!=null&&t.removeAttribute("value"),d==null&&p!=null&&(t.defaultChecked=!!p),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+en(T):t.removeAttribute("name")}function Mm(t,r,l,o,d,p,S,T){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),r!=null||l!=null){if(!(p!=="submit"&&p!=="reset"||r!=null)){Nu(t);return}l=l!=null?""+en(l):"",r=r!=null?""+en(r):l,T||r===t.value||(t.value=r),t.defaultValue=r}o=o??d,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Nu(t)}function _u(t,r,l){r==="number"&&ds(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ki(t,r,l,o){if(t=t.options,r){r={};for(var d=0;d<l.length;d++)r["$"+l[d]]=!0;for(l=0;l<t.length;l++)d=r.hasOwnProperty("$"+t[l].value),t[l].selected!==d&&(t[l].selected=d),d&&o&&(t[l].defaultSelected=!0)}else{for(l=""+en(l),r=null,d=0;d<t.length;d++){if(t[d].value===l){t[d].selected=!0,o&&(t[d].defaultSelected=!0);return}r!==null||t[d].disabled||(r=t[d])}r!==null&&(r.selected=!0)}}function jm(t,r,l){if(r!=null&&(r=""+en(r),r!==t.value&&(t.value=r),l==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=l!=null?""+en(l):""}function Dm(t,r,l,o){if(r==null){if(o!=null){if(l!=null)throw Error(a(92));if(ne(o)){if(1<o.length)throw Error(a(93));o=o[0]}l=o}l==null&&(l=""),r=l}l=en(r),t.defaultValue=l,o=t.textContent,o===l&&o!==""&&o!==null&&(t.value=o),Nu(t)}function Ai(t,r){if(r){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=r;return}}t.textContent=r}var l2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rm(t,r,l){var o=r.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?o?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":o?t.setProperty(r,l):typeof l!="number"||l===0||l2.has(r)?r==="float"?t.cssFloat=l:t[r]=(""+l).trim():t[r]=l+"px"}function Nm(t,r,l){if(r!=null&&typeof r!="object")throw Error(a(62));if(t=t.style,l!=null){for(var o in l)!l.hasOwnProperty(o)||r!=null&&r.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var d in r)o=r[d],r.hasOwnProperty(d)&&l[d]!==o&&Rm(t,d,o)}else for(var p in r)r.hasOwnProperty(p)&&Rm(t,p,r[p])}function Lu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var s2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),o2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hs(t){return o2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hn(){}var zu=null;function Bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ei=null,Mi=null;function Om(t){var r=wi(t);if(r&&(t=r.stateNode)){var l=t[Nt]||null;e:switch(t=r.stateNode,r.type){case"input":if(Ou(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),r=l.name,l.type==="radio"&&r!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+tn(""+r)+'"][type="radio"]'),r=0;r<l.length;r++){var o=l[r];if(o!==t&&o.form===t.form){var d=o[Nt]||null;if(!d)throw Error(a(90));Ou(o,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<l.length;r++)o=l[r],o.form===t.form&&Em(o)}break e;case"textarea":jm(t,l.value,l.defaultValue);break e;case"select":r=l.value,r!=null&&ki(t,!!l.multiple,r,!1)}}}var Vu=!1;function _m(t,r,l){if(Vu)return t(r,l);Vu=!0;try{var o=t(r);return o}finally{if(Vu=!1,(Ei!==null||Mi!==null)&&(eo(),Ei&&(r=Ei,t=Mi,Mi=Ei=null,Om(r),t)))for(r=0;r<t.length;r++)Om(t[r])}}function Ra(t,r){var l=t.stateNode;if(l===null)return null;var o=l[Nt]||null;if(o===null)return null;l=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(a(231,r,typeof l));return l}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(Fn)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Pu=!1}var dr=null,Uu=null,ms=null;function Lm(){if(ms)return ms;var t,r=Uu,l=r.length,o,d="value"in dr?dr.value:dr.textContent,p=d.length;for(t=0;t<l&&r[t]===d[t];t++);var S=l-t;for(o=1;o<=S&&r[l-o]===d[p-o];o++);return ms=d.slice(t,1<o?1-o:void 0)}function ps(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function gs(){return!0}function zm(){return!1}function Ot(t){function r(l,o,d,p,S){this._reactName=l,this._targetInst=d,this.type=o,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(l=t[T],this[T]=l?l(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?gs:zm,this.isPropagationStopped=zm,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),r}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=Ot(Gr),Oa=g({},Gr,{view:0,detail:0}),u2=Ot(Oa),Iu,Hu,_a,xs=g({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(Iu=t.screenX-_a.screenX,Hu=t.screenY-_a.screenY):Hu=Iu=0,_a=t),Iu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),Bm=Ot(xs),c2=g({},xs,{dataTransfer:0}),f2=Ot(c2),d2=g({},Oa,{relatedTarget:0}),Fu=Ot(d2),h2=g({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),m2=Ot(h2),p2=g({},Gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g2=Ot(p2),y2=g({},Gr,{data:0}),Vm=Ot(y2),x2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S2(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=v2[t])?!!r[t]:!1}function qu(){return S2}var w2=g({},Oa,{key:function(t){if(t.key){var r=x2[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ps(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(t){return t.type==="keypress"?ps(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ps(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T2=Ot(w2),C2=g({},xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=Ot(C2),k2=g({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),A2=Ot(k2),E2=g({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),M2=Ot(E2),j2=g({},xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D2=Ot(j2),R2=g({},Gr,{newState:0,oldState:0}),N2=Ot(R2),O2=[9,13,27,32],Gu=Fn&&"CompositionEvent"in window,La=null;Fn&&"documentMode"in document&&(La=document.documentMode);var _2=Fn&&"TextEvent"in window&&!La,Um=Fn&&(!Gu||La&&8<La&&11>=La),Im=" ",Hm=!1;function Fm(t,r){switch(t){case"keyup":return O2.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ji=!1;function L2(t,r){switch(t){case"compositionend":return qm(r);case"keypress":return r.which!==32?null:(Hm=!0,Im);case"textInput":return t=r.data,t===Im&&Hm?null:t;default:return null}}function z2(t,r){if(ji)return t==="compositionend"||!Gu&&Fm(t,r)?(t=Lm(),ms=Uu=dr=null,ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Um&&r.locale!=="ko"?null:r.data;default:return null}}var B2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!B2[t.type]:r==="textarea"}function Ym(t,r,l,o){Ei?Mi?Mi.push(o):Mi=[o]:Ei=o,r=so(r,"onChange"),0<r.length&&(l=new ys("onChange","change",null,l,o),t.push({event:l,listeners:r}))}var za=null,Ba=null;function V2(t){My(t,0)}function bs(t){var r=Da(t);if(Em(r))return t}function Xm(t,r){if(t==="change")return r}var Jm=!1;if(Fn){var Yu;if(Fn){var Xu="oninput"in document;if(!Xu){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),Xu=typeof Qm.oninput=="function"}Yu=Xu}else Yu=!1;Jm=Yu&&(!document.documentMode||9<document.documentMode)}function Km(){za&&(za.detachEvent("onpropertychange",Zm),Ba=za=null)}function Zm(t){if(t.propertyName==="value"&&bs(Ba)){var r=[];Ym(r,Ba,t,Bu(t)),_m(V2,r)}}function P2(t,r,l){t==="focusin"?(Km(),za=r,Ba=l,za.attachEvent("onpropertychange",Zm)):t==="focusout"&&Km()}function U2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bs(Ba)}function I2(t,r){if(t==="click")return bs(r)}function H2(t,r){if(t==="input"||t==="change")return bs(r)}function F2(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Ht=typeof Object.is=="function"?Object.is:F2;function Va(t,r){if(Ht(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var l=Object.keys(t),o=Object.keys(r);if(l.length!==o.length)return!1;for(o=0;o<l.length;o++){var d=l[o];if(!xi.call(r,d)||!Ht(t[d],r[d]))return!1}return!0}function Wm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $m(t,r){var l=Wm(t);t=0;for(var o;l;){if(l.nodeType===3){if(o=t+l.textContent.length,t<=r&&o>=r)return{node:l,offset:r-t};t=o}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Wm(l)}}function ep(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?ep(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function tp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=ds(t.document);r instanceof t.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)t=r.contentWindow;else break;r=ds(t.document)}return r}function Ju(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var q2=Fn&&"documentMode"in document&&11>=document.documentMode,Di=null,Qu=null,Pa=null,Ku=!1;function np(t,r,l){var o=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ku||Di==null||Di!==ds(o)||(o=Di,"selectionStart"in o&&Ju(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Pa&&Va(Pa,o)||(Pa=o,o=so(Qu,"onSelect"),0<o.length&&(r=new ys("onSelect","select",null,r,l),t.push({event:r,listeners:o}),r.target=Di)))}function Yr(t,r){var l={};return l[t.toLowerCase()]=r.toLowerCase(),l["Webkit"+t]="webkit"+r,l["Moz"+t]="moz"+r,l}var Ri={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionrun:Yr("Transition","TransitionRun"),transitionstart:Yr("Transition","TransitionStart"),transitioncancel:Yr("Transition","TransitionCancel"),transitionend:Yr("Transition","TransitionEnd")},Zu={},rp={};Fn&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function Xr(t){if(Zu[t])return Zu[t];if(!Ri[t])return t;var r=Ri[t],l;for(l in r)if(r.hasOwnProperty(l)&&l in rp)return Zu[t]=r[l];return t}var ip=Xr("animationend"),ap=Xr("animationiteration"),lp=Xr("animationstart"),G2=Xr("transitionrun"),Y2=Xr("transitionstart"),X2=Xr("transitioncancel"),sp=Xr("transitionend"),op=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function yn(t,r){op.set(t,r),qr(r,[t])}var vs=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},nn=[],Ni=0,$u=0;function Ss(){for(var t=Ni,r=$u=Ni=0;r<t;){var l=nn[r];nn[r++]=null;var o=nn[r];nn[r++]=null;var d=nn[r];nn[r++]=null;var p=nn[r];if(nn[r++]=null,o!==null&&d!==null){var S=o.pending;S===null?d.next=d:(d.next=S.next,S.next=d),o.pending=d}p!==0&&up(l,d,p)}}function ws(t,r,l,o){nn[Ni++]=t,nn[Ni++]=r,nn[Ni++]=l,nn[Ni++]=o,$u|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ec(t,r,l,o){return ws(t,r,l,o),Ts(t)}function Jr(t,r){return ws(t,null,null,r),Ts(t)}function up(t,r,l){t.lanes|=l;var o=t.alternate;o!==null&&(o.lanes|=l);for(var d=!1,p=t.return;p!==null;)p.childLanes|=l,o=p.alternate,o!==null&&(o.childLanes|=l),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(d=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,d&&r!==null&&(d=31-He(l),t=p.hiddenUpdates,o=t[d],o===null?t[d]=[r]:o.push(r),r.lane=l|536870912),p):null}function Ts(t){if(50<sl)throw sl=0,cf=null,Error(a(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var Oi={};function J2(t,r,l,o){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,r,l,o){return new J2(t,r,l,o)}function tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qn(t,r){var l=t.alternate;return l===null?(l=Ft(t.tag,r,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=r,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,r=t.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function cp(t,r){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,r=l.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Cs(t,r,l,o,d,p){var S=0;if(o=t,typeof t=="function")tc(t)&&(S=1);else if(typeof t=="string")S=$w(t,l,se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case F:return t=Ft(31,l,r,d),t.elementType=F,t.lanes=p,t;case E:return Qr(l.children,d,p,r);case M:S=8,d|=24;break;case C:return t=Ft(12,l,r,d|2),t.elementType=C,t.lanes=p,t;case Y:return t=Ft(13,l,r,d),t.elementType=Y,t.lanes=p,t;case L:return t=Ft(19,l,r,d),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:S=10;break e;case O:S=9;break e;case V:S=11;break e;case G:S=14;break e;case Q:S=16,o=null;break e}S=29,l=Error(a(130,t===null?"null":typeof t,"")),o=null}return r=Ft(S,l,r,d),r.elementType=t,r.type=o,r.lanes=p,r}function Qr(t,r,l,o){return t=Ft(7,t,o,r),t.lanes=l,t}function nc(t,r,l){return t=Ft(6,t,null,r),t.lanes=l,t}function fp(t){var r=Ft(18,null,null,0);return r.stateNode=t,r}function rc(t,r,l){return r=Ft(4,t.children!==null?t.children:[],t.key,r),r.lanes=l,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var dp=new WeakMap;function rn(t,r){if(typeof t=="object"&&t!==null){var l=dp.get(t);return l!==void 0?l:(r={value:t,source:r,stack:as(r)},dp.set(t,r),r)}return{value:t,source:r,stack:as(r)}}var _i=[],Li=0,ks=null,Ua=0,an=[],ln=0,hr=null,En=1,Mn="";function Gn(t,r){_i[Li++]=Ua,_i[Li++]=ks,ks=t,Ua=r}function hp(t,r,l){an[ln++]=En,an[ln++]=Mn,an[ln++]=hr,hr=t;var o=En;t=Mn;var d=32-He(o)-1;o&=~(1<<d),l+=1;var p=32-He(r)+d;if(30<p){var S=d-d%5;p=(o&(1<<S)-1).toString(32),o>>=S,d-=S,En=1<<32-He(r)+d|l<<d|o,Mn=p+t}else En=1<<p|l<<d|o,Mn=t}function ic(t){t.return!==null&&(Gn(t,1),hp(t,1,0))}function ac(t){for(;t===ks;)ks=_i[--Li],_i[Li]=null,Ua=_i[--Li],_i[Li]=null;for(;t===hr;)hr=an[--ln],an[ln]=null,Mn=an[--ln],an[ln]=null,En=an[--ln],an[ln]=null}function mp(t,r){an[ln++]=En,an[ln++]=Mn,an[ln++]=hr,En=r.id,Mn=r.overflow,hr=t}var gt=null,Xe=null,De=!1,mr=null,sn=!1,lc=Error(a(519));function pr(t){var r=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ia(rn(r,t)),lc}function pp(t){var r=t.stateNode,l=t.type,o=t.memoizedProps;switch(r[pt]=t,r[Nt]=o,l){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(l=0;l<ul.length;l++)ke(ul[l],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ke("invalid",r),Mm(r,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ke("invalid",r);break;case"textarea":ke("invalid",r),Dm(r,o.value,o.defaultValue,o.children)}l=o.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||r.textContent===""+l||o.suppressHydrationWarning===!0||Ny(r.textContent,l)?(o.popover!=null&&(ke("beforetoggle",r),ke("toggle",r)),o.onScroll!=null&&ke("scroll",r),o.onScrollEnd!=null&&ke("scrollend",r),o.onClick!=null&&(r.onclick=Hn),r=!0):r=!1,r||pr(t,!0)}function gp(t){for(gt=t.return;gt;)switch(gt.tag){case 5:case 31:case 13:sn=!1;return;case 27:case 3:sn=!0;return;default:gt=gt.return}}function zi(t){if(t!==gt)return!1;if(!De)return gp(t),De=!0,!1;var r=t.tag,l;if((l=r!==3&&r!==27)&&((l=r===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||kf(t.type,t.memoizedProps)),l=!l),l&&Xe&&pr(t),gp(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Xe=Iy(t)}else if(r===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Xe=Iy(t)}else r===27?(r=Xe,jr(t.type)?(t=Df,Df=null,Xe=t):Xe=r):Xe=gt?un(t.stateNode.nextSibling):null;return!0}function Kr(){Xe=gt=null,De=!1}function sc(){var t=mr;return t!==null&&(Bt===null?Bt=t:Bt.push.apply(Bt,t),mr=null),t}function Ia(t){mr===null?mr=[t]:mr.push(t)}var oc=_(null),Zr=null,Yn=null;function gr(t,r,l){k(oc,r._currentValue),r._currentValue=l}function Xn(t){t._currentValue=oc.current,J(oc)}function uc(t,r,l){for(;t!==null;){var o=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),t===l)break;t=t.return}}function cc(t,r,l,o){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var p=d.dependencies;if(p!==null){var S=d.child;p=p.firstContext;e:for(;p!==null;){var T=p;p=d;for(var R=0;R<r.length;R++)if(T.context===r[R]){p.lanes|=l,T=p.alternate,T!==null&&(T.lanes|=l),uc(p.return,l,t),o||(S=null);break e}p=T.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(a(341));S.lanes|=l,p=S.alternate,p!==null&&(p.lanes|=l),uc(S,l,t),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===t){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function Bi(t,r,l,o){t=null;for(var d=r,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var T=d.type;Ht(d.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(d===Ee.current){if(S=d.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(ml):t=[ml])}d=d.return}t!==null&&cc(r,t,l,o),r.flags|=262144}function As(t){for(t=t.firstContext;t!==null;){if(!Ht(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wr(t){Zr=t,Yn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yt(t){return yp(Zr,t)}function Es(t,r){return Zr===null&&Wr(t),yp(t,r)}function yp(t,r){var l=r._currentValue;if(r={context:r,memoizedValue:l,next:null},Yn===null){if(t===null)throw Error(a(308));Yn=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Yn=Yn.next=r;return l}var Q2=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(l,o){t.push(o)}};this.abort=function(){r.aborted=!0,t.forEach(function(l){return l()})}},K2=e.unstable_scheduleCallback,Z2=e.unstable_NormalPriority,it={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fc(){return{controller:new Q2,data:new Map,refCount:0}}function Ha(t){t.refCount--,t.refCount===0&&K2(Z2,function(){t.controller.abort()})}var Fa=null,dc=0,Vi=0,Pi=null;function W2(t,r){if(Fa===null){var l=Fa=[];dc=0,Vi=gf(),Pi={status:"pending",value:void 0,then:function(o){l.push(o)}}}return dc++,r.then(xp,xp),r}function xp(){if(--dc===0&&Fa!==null){Pi!==null&&(Pi.status="fulfilled");var t=Fa;Fa=null,Vi=0,Pi=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function $2(t,r){var l=[],o={status:"pending",value:null,reason:null,then:function(d){l.push(d)}};return t.then(function(){o.status="fulfilled",o.value=r;for(var d=0;d<l.length;d++)(0,l[d])(r)},function(d){for(o.status="rejected",o.reason=d,d=0;d<l.length;d++)(0,l[d])(void 0)}),o}var bp=P.S;P.S=function(t,r){ny=kt(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&W2(t,r),bp!==null&&bp(t,r)};var $r=_(null);function hc(){var t=$r.current;return t!==null?t:Fe.pooledCache}function Ms(t,r){r===null?k($r,$r.current):k($r,r.pool)}function vp(){var t=hc();return t===null?null:{parent:it._currentValue,pool:t}}var Ui=Error(a(460)),mc=Error(a(474)),js=Error(a(542)),Ds={then:function(){}};function Sp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wp(t,r,l){switch(l=t[l],l===void 0?t.push(r):l!==r&&(r.then(Hn,Hn),r=l),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,Cp(t),t;default:if(typeof r.status=="string")r.then(Hn,Hn);else{if(t=Fe,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=r,t.status="pending",t.then(function(o){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=o}},function(o){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=o}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,Cp(t),t}throw ti=r,Ui}}function ei(t){try{var r=t._init;return r(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ti=l,Ui):l}}var ti=null;function Tp(){if(ti===null)throw Error(a(459));var t=ti;return ti=null,t}function Cp(t){if(t===Ui||t===js)throw Error(a(483))}var Ii=null,qa=0;function Rs(t){var r=qa;return qa+=1,Ii===null&&(Ii=[]),wp(Ii,t,r)}function Ga(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Ns(t,r){throw r.$$typeof===b?Error(a(525)):(t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function kp(t){function r(B,z){if(t){var U=B.deletions;U===null?(B.deletions=[z],B.flags|=16):U.push(z)}}function l(B,z){if(!t)return null;for(;z!==null;)r(B,z),z=z.sibling;return null}function o(B){for(var z=new Map;B!==null;)B.key!==null?z.set(B.key,B):z.set(B.index,B),B=B.sibling;return z}function d(B,z){return B=qn(B,z),B.index=0,B.sibling=null,B}function p(B,z,U){return B.index=U,t?(U=B.alternate,U!==null?(U=U.index,U<z?(B.flags|=67108866,z):U):(B.flags|=67108866,z)):(B.flags|=1048576,z)}function S(B){return t&&B.alternate===null&&(B.flags|=67108866),B}function T(B,z,U,Z){return z===null||z.tag!==6?(z=nc(U,B.mode,Z),z.return=B,z):(z=d(z,U),z.return=B,z)}function R(B,z,U,Z){var he=U.type;return he===E?X(B,z,U.props.children,Z,U.key):z!==null&&(z.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Q&&ei(he)===z.type)?(z=d(z,U.props),Ga(z,U),z.return=B,z):(z=Cs(U.type,U.key,U.props,null,B.mode,Z),Ga(z,U),z.return=B,z)}function I(B,z,U,Z){return z===null||z.tag!==4||z.stateNode.containerInfo!==U.containerInfo||z.stateNode.implementation!==U.implementation?(z=rc(U,B.mode,Z),z.return=B,z):(z=d(z,U.children||[]),z.return=B,z)}function X(B,z,U,Z,he){return z===null||z.tag!==7?(z=Qr(U,B.mode,Z,he),z.return=B,z):(z=d(z,U),z.return=B,z)}function W(B,z,U){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=nc(""+z,B.mode,U),z.return=B,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return U=Cs(z.type,z.key,z.props,null,B.mode,U),Ga(U,z),U.return=B,U;case w:return z=rc(z,B.mode,U),z.return=B,z;case Q:return z=ei(z),W(B,z,U)}if(ne(z)||te(z))return z=Qr(z,B.mode,U,null),z.return=B,z;if(typeof z.then=="function")return W(B,Rs(z),U);if(z.$$typeof===A)return W(B,Es(B,z),U);Ns(B,z)}return null}function H(B,z,U,Z){var he=z!==null?z.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return he!==null?null:T(B,z,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case v:return U.key===he?R(B,z,U,Z):null;case w:return U.key===he?I(B,z,U,Z):null;case Q:return U=ei(U),H(B,z,U,Z)}if(ne(U)||te(U))return he!==null?null:X(B,z,U,Z,null);if(typeof U.then=="function")return H(B,z,Rs(U),Z);if(U.$$typeof===A)return H(B,z,Es(B,U),Z);Ns(B,U)}return null}function q(B,z,U,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return B=B.get(U)||null,T(z,B,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case v:return B=B.get(Z.key===null?U:Z.key)||null,R(z,B,Z,he);case w:return B=B.get(Z.key===null?U:Z.key)||null,I(z,B,Z,he);case Q:return Z=ei(Z),q(B,z,U,Z,he)}if(ne(Z)||te(Z))return B=B.get(U)||null,X(z,B,Z,he,null);if(typeof Z.then=="function")return q(B,z,U,Rs(Z),he);if(Z.$$typeof===A)return q(B,z,U,Es(z,Z),he);Ns(z,Z)}return null}function oe(B,z,U,Z){for(var he=null,Ne=null,fe=z,Se=z=0,je=null;fe!==null&&Se<U.length;Se++){fe.index>Se?(je=fe,fe=null):je=fe.sibling;var Oe=H(B,fe,U[Se],Z);if(Oe===null){fe===null&&(fe=je);break}t&&fe&&Oe.alternate===null&&r(B,fe),z=p(Oe,z,Se),Ne===null?he=Oe:Ne.sibling=Oe,Ne=Oe,fe=je}if(Se===U.length)return l(B,fe),De&&Gn(B,Se),he;if(fe===null){for(;Se<U.length;Se++)fe=W(B,U[Se],Z),fe!==null&&(z=p(fe,z,Se),Ne===null?he=fe:Ne.sibling=fe,Ne=fe);return De&&Gn(B,Se),he}for(fe=o(fe);Se<U.length;Se++)je=q(fe,B,Se,U[Se],Z),je!==null&&(t&&je.alternate!==null&&fe.delete(je.key===null?Se:je.key),z=p(je,z,Se),Ne===null?he=je:Ne.sibling=je,Ne=je);return t&&fe.forEach(function(_r){return r(B,_r)}),De&&Gn(B,Se),he}function pe(B,z,U,Z){if(U==null)throw Error(a(151));for(var he=null,Ne=null,fe=z,Se=z=0,je=null,Oe=U.next();fe!==null&&!Oe.done;Se++,Oe=U.next()){fe.index>Se?(je=fe,fe=null):je=fe.sibling;var _r=H(B,fe,Oe.value,Z);if(_r===null){fe===null&&(fe=je);break}t&&fe&&_r.alternate===null&&r(B,fe),z=p(_r,z,Se),Ne===null?he=_r:Ne.sibling=_r,Ne=_r,fe=je}if(Oe.done)return l(B,fe),De&&Gn(B,Se),he;if(fe===null){for(;!Oe.done;Se++,Oe=U.next())Oe=W(B,Oe.value,Z),Oe!==null&&(z=p(Oe,z,Se),Ne===null?he=Oe:Ne.sibling=Oe,Ne=Oe);return De&&Gn(B,Se),he}for(fe=o(fe);!Oe.done;Se++,Oe=U.next())Oe=q(fe,B,Se,Oe.value,Z),Oe!==null&&(t&&Oe.alternate!==null&&fe.delete(Oe.key===null?Se:Oe.key),z=p(Oe,z,Se),Ne===null?he=Oe:Ne.sibling=Oe,Ne=Oe);return t&&fe.forEach(function(cT){return r(B,cT)}),De&&Gn(B,Se),he}function Ie(B,z,U,Z){if(typeof U=="object"&&U!==null&&U.type===E&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case v:e:{for(var he=U.key;z!==null;){if(z.key===he){if(he=U.type,he===E){if(z.tag===7){l(B,z.sibling),Z=d(z,U.props.children),Z.return=B,B=Z;break e}}else if(z.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Q&&ei(he)===z.type){l(B,z.sibling),Z=d(z,U.props),Ga(Z,U),Z.return=B,B=Z;break e}l(B,z);break}else r(B,z);z=z.sibling}U.type===E?(Z=Qr(U.props.children,B.mode,Z,U.key),Z.return=B,B=Z):(Z=Cs(U.type,U.key,U.props,null,B.mode,Z),Ga(Z,U),Z.return=B,B=Z)}return S(B);case w:e:{for(he=U.key;z!==null;){if(z.key===he)if(z.tag===4&&z.stateNode.containerInfo===U.containerInfo&&z.stateNode.implementation===U.implementation){l(B,z.sibling),Z=d(z,U.children||[]),Z.return=B,B=Z;break e}else{l(B,z);break}else r(B,z);z=z.sibling}Z=rc(U,B.mode,Z),Z.return=B,B=Z}return S(B);case Q:return U=ei(U),Ie(B,z,U,Z)}if(ne(U))return oe(B,z,U,Z);if(te(U)){if(he=te(U),typeof he!="function")throw Error(a(150));return U=he.call(U),pe(B,z,U,Z)}if(typeof U.then=="function")return Ie(B,z,Rs(U),Z);if(U.$$typeof===A)return Ie(B,z,Es(B,U),Z);Ns(B,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,z!==null&&z.tag===6?(l(B,z.sibling),Z=d(z,U),Z.return=B,B=Z):(l(B,z),Z=nc(U,B.mode,Z),Z.return=B,B=Z),S(B)):l(B,z)}return function(B,z,U,Z){try{qa=0;var he=Ie(B,z,U,Z);return Ii=null,he}catch(fe){if(fe===Ui||fe===js)throw fe;var Ne=Ft(29,fe,null,B.mode);return Ne.lanes=Z,Ne.return=B,Ne}finally{}}}var ni=kp(!0),Ap=kp(!1),yr=!1;function pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gc(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function br(t,r,l){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(_e&2)!==0){var d=o.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),o.pending=r,r=Ts(t),up(t,null,l),r}return ws(t,o,r,l),Ts(t)}function Ya(t,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194048)!==0)){var o=r.lanes;o&=t.pendingLanes,l|=o,r.lanes=l,ym(t,l)}}function yc(t,r){var l=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,l===o)){var d=null,p=null;if(l=l.firstBaseUpdate,l!==null){do{var S={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};p===null?d=p=S:p=p.next=S,l=l.next}while(l!==null);p===null?d=p=r:p=p.next=r}else d=p=r;l={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:o.shared,callbacks:o.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=r:t.next=r,l.lastBaseUpdate=r}var xc=!1;function Xa(){if(xc){var t=Pi;if(t!==null)throw t}}function Ja(t,r,l,o){xc=!1;var d=t.updateQueue;yr=!1;var p=d.firstBaseUpdate,S=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,I=R.next;R.next=null,S===null?p=I:S.next=I,S=R;var X=t.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==S&&(T===null?X.firstBaseUpdate=I:T.next=I,X.lastBaseUpdate=R))}if(p!==null){var W=d.baseState;S=0,X=I=R=null,T=p;do{var H=T.lane&-536870913,q=H!==T.lane;if(q?(Me&H)===H:(o&H)===H){H!==0&&H===Vi&&(xc=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var oe=t,pe=T;H=r;var Ie=l;switch(pe.tag){case 1:if(oe=pe.payload,typeof oe=="function"){W=oe.call(Ie,W,H);break e}W=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=pe.payload,H=typeof oe=="function"?oe.call(Ie,W,H):oe,H==null)break e;W=g({},W,H);break e;case 2:yr=!0}}H=T.callback,H!==null&&(t.flags|=64,q&&(t.flags|=8192),q=d.callbacks,q===null?d.callbacks=[H]:q.push(H))}else q={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(I=X=q,R=W):X=X.next=q,S|=H;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);X===null&&(R=W),d.baseState=R,d.firstBaseUpdate=I,d.lastBaseUpdate=X,p===null&&(d.shared.lanes=0),Cr|=S,t.lanes=S,t.memoizedState=W}}function Ep(t,r){if(typeof t!="function")throw Error(a(191,t));t.call(r)}function Mp(t,r){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Ep(l[t],r)}var Hi=_(null),Os=_(0);function jp(t,r){t=nr,k(Os,t),k(Hi,r),nr=t|r.baseLanes}function bc(){k(Os,nr),k(Hi,Hi.current)}function vc(){nr=Os.current,J(Hi),J(Os)}var qt=_(null),on=null;function vr(t){var r=t.alternate;k(nt,nt.current&1),k(qt,t),on===null&&(r===null||Hi.current!==null||r.memoizedState!==null)&&(on=t)}function Sc(t){k(nt,nt.current),k(qt,t),on===null&&(on=t)}function Dp(t){t.tag===22?(k(nt,nt.current),k(qt,t),on===null&&(on=t)):Sr()}function Sr(){k(nt,nt.current),k(qt,qt.current)}function Gt(t){J(qt),on===t&&(on=null),J(nt)}var nt=_(0);function _s(t){for(var r=t;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Mf(l)||jf(l)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Jn=0,ve=null,Pe=null,at=null,Ls=!1,Fi=!1,ri=!1,zs=0,Qa=0,qi=null,ew=0;function $e(){throw Error(a(321))}function wc(t,r){if(r===null)return!1;for(var l=0;l<r.length&&l<t.length;l++)if(!Ht(t[l],r[l]))return!1;return!0}function Tc(t,r,l,o,d,p){return Jn=p,ve=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,P.H=t===null||t.memoizedState===null?hg:Vc,ri=!1,p=l(o,d),ri=!1,Fi&&(p=Np(r,l,o,d)),Rp(t),p}function Rp(t){P.H=Wa;var r=Pe!==null&&Pe.next!==null;if(Jn=0,at=Pe=ve=null,Ls=!1,Qa=0,qi=null,r)throw Error(a(300));t===null||lt||(t=t.dependencies,t!==null&&As(t)&&(lt=!0))}function Np(t,r,l,o){ve=t;var d=0;do{if(Fi&&(qi=null),Qa=0,Fi=!1,25<=d)throw Error(a(301));if(d+=1,at=Pe=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}P.H=mg,p=r(l,o)}while(Fi);return p}function tw(){var t=P.H,r=t.useState()[0];return r=typeof r.then=="function"?Ka(r):r,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(ve.flags|=1024),r}function Cc(){var t=zs!==0;return zs=0,t}function kc(t,r,l){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~l}function Ac(t){if(Ls){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Ls=!1}Jn=0,at=Pe=ve=null,Fi=!1,Qa=zs=0,qi=null}function Et(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?ve.memoizedState=at=t:at=at.next=t,at}function rt(){if(Pe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var r=at===null?ve.memoizedState:at.next;if(r!==null)at=r,Pe=t;else{if(t===null)throw ve.alternate===null?Error(a(467)):Error(a(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},at===null?ve.memoizedState=at=t:at=at.next=t}return at}function Bs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ka(t){var r=Qa;return Qa+=1,qi===null&&(qi=[]),t=wp(qi,t,r),r=ve,(at===null?r.memoizedState:at.next)===null&&(r=r.alternate,P.H=r===null||r.memoizedState===null?hg:Vc),t}function Vs(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ka(t);if(t.$$typeof===A)return yt(t)}throw Error(a(438,String(t)))}function Ec(t){var r=null,l=ve.updateQueue;if(l!==null&&(r=l.memoCache),r==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(r={data:o.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),l===null&&(l=Bs(),ve.updateQueue=l),l.memoCache=r,l=r.data[r.index],l===void 0)for(l=r.data[r.index]=Array(t),o=0;o<t;o++)l[o]=N;return r.index++,l}function Qn(t,r){return typeof r=="function"?r(t):r}function Ps(t){var r=rt();return Mc(r,Pe,t)}function Mc(t,r,l){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=l;var d=t.baseQueue,p=o.pending;if(p!==null){if(d!==null){var S=d.next;d.next=p.next,p.next=S}r.baseQueue=d=p,o.pending=null}if(p=t.baseState,d===null)t.memoizedState=p;else{r=d.next;var T=S=null,R=null,I=r,X=!1;do{var W=I.lane&-536870913;if(W!==I.lane?(Me&W)===W:(Jn&W)===W){var H=I.revertLane;if(H===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),W===Vi&&(X=!0);else if((Jn&H)===H){I=I.next,H===Vi&&(X=!0);continue}else W={lane:0,revertLane:I.revertLane,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},R===null?(T=R=W,S=p):R=R.next=W,ve.lanes|=H,Cr|=H;W=I.action,ri&&l(p,W),p=I.hasEagerState?I.eagerState:l(p,W)}else H={lane:W,revertLane:I.revertLane,gesture:I.gesture,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},R===null?(T=R=H,S=p):R=R.next=H,ve.lanes|=W,Cr|=W;I=I.next}while(I!==null&&I!==r);if(R===null?S=p:R.next=T,!Ht(p,t.memoizedState)&&(lt=!0,X&&(l=Pi,l!==null)))throw l;t.memoizedState=p,t.baseState=S,t.baseQueue=R,o.lastRenderedState=p}return d===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function jc(t){var r=rt(),l=r.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=t;var o=l.dispatch,d=l.pending,p=r.memoizedState;if(d!==null){l.pending=null;var S=d=d.next;do p=t(p,S.action),S=S.next;while(S!==d);Ht(p,r.memoizedState)||(lt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),l.lastRenderedState=p}return[p,o]}function Op(t,r,l){var o=ve,d=rt(),p=De;if(p){if(l===void 0)throw Error(a(407));l=l()}else l=r();var S=!Ht((Pe||d).memoizedState,l);if(S&&(d.memoizedState=l,lt=!0),d=d.queue,Nc(zp.bind(null,o,d,t),[t]),d.getSnapshot!==r||S||at!==null&&at.memoizedState.tag&1){if(o.flags|=2048,Gi(9,{destroy:void 0},Lp.bind(null,o,d,l,r),null),Fe===null)throw Error(a(349));p||(Jn&127)!==0||_p(o,r,l)}return l}function _p(t,r,l){t.flags|=16384,t={getSnapshot:r,value:l},r=ve.updateQueue,r===null?(r=Bs(),ve.updateQueue=r,r.stores=[t]):(l=r.stores,l===null?r.stores=[t]:l.push(t))}function Lp(t,r,l,o){r.value=l,r.getSnapshot=o,Bp(r)&&Vp(t)}function zp(t,r,l){return l(function(){Bp(r)&&Vp(t)})}function Bp(t){var r=t.getSnapshot;t=t.value;try{var l=r();return!Ht(t,l)}catch{return!0}}function Vp(t){var r=Jr(t,2);r!==null&&Vt(r,t,2)}function Dc(t){var r=Et();if(typeof t=="function"){var l=t;if(t=l(),ri){Rt(!0);try{l()}finally{Rt(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:t},r}function Pp(t,r,l,o){return t.baseState=l,Mc(t,Pe,typeof o=="function"?o:Qn)}function nw(t,r,l,o,d){if(Hs(t))throw Error(a(485));if(t=r.action,t!==null){var p={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};P.T!==null?l(!0):p.isTransition=!1,o(p),l=r.pending,l===null?(p.next=r.pending=p,Up(r,p)):(p.next=l.next,r.pending=l.next=p)}}function Up(t,r){var l=r.action,o=r.payload,d=t.state;if(r.isTransition){var p=P.T,S={};P.T=S;try{var T=l(d,o),R=P.S;R!==null&&R(S,T),Ip(t,r,T)}catch(I){Rc(t,r,I)}finally{p!==null&&S.types!==null&&(p.types=S.types),P.T=p}}else try{p=l(d,o),Ip(t,r,p)}catch(I){Rc(t,r,I)}}function Ip(t,r,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(o){Hp(t,r,o)},function(o){return Rc(t,r,o)}):Hp(t,r,l)}function Hp(t,r,l){r.status="fulfilled",r.value=l,Fp(r),t.state=l,r=t.pending,r!==null&&(l=r.next,l===r?t.pending=null:(l=l.next,r.next=l,Up(t,l)))}function Rc(t,r,l){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do r.status="rejected",r.reason=l,Fp(r),r=r.next;while(r!==o)}t.action=null}function Fp(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function qp(t,r){return r}function Gp(t,r){if(De){var l=Fe.formState;if(l!==null){e:{var o=ve;if(De){if(Xe){t:{for(var d=Xe,p=sn;d.nodeType!==8;){if(!p){d=null;break t}if(d=un(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){Xe=un(d.nextSibling),o=d.data==="F!";break e}}pr(o)}o=!1}o&&(r=l[0])}}return l=Et(),l.memoizedState=l.baseState=r,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qp,lastRenderedState:r},l.queue=o,l=cg.bind(null,ve,o),o.dispatch=l,o=Dc(!1),p=Bc.bind(null,ve,!1,o.queue),o=Et(),d={state:r,dispatch:null,action:t,pending:null},o.queue=d,l=nw.bind(null,ve,d,p,l),d.dispatch=l,o.memoizedState=t,[r,l,!1]}function Yp(t){var r=rt();return Xp(r,Pe,t)}function Xp(t,r,l){if(r=Mc(t,r,qp)[0],t=Ps(Qn)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var o=Ka(r)}catch(S){throw S===Ui?js:S}else o=r;r=rt();var d=r.queue,p=d.dispatch;return l!==r.memoizedState&&(ve.flags|=2048,Gi(9,{destroy:void 0},rw.bind(null,d,l),null)),[o,p,t]}function rw(t,r){t.action=r}function Jp(t){var r=rt(),l=Pe;if(l!==null)return Xp(r,l,t);rt(),r=r.memoizedState,l=rt();var o=l.queue.dispatch;return l.memoizedState=t,[r,o,!1]}function Gi(t,r,l,o){return t={tag:t,create:l,deps:o,inst:r,next:null},r=ve.updateQueue,r===null&&(r=Bs(),ve.updateQueue=r),l=r.lastEffect,l===null?r.lastEffect=t.next=t:(o=l.next,l.next=t,t.next=o,r.lastEffect=t),t}function Qp(){return rt().memoizedState}function Us(t,r,l,o){var d=Et();ve.flags|=t,d.memoizedState=Gi(1|r,{destroy:void 0},l,o===void 0?null:o)}function Is(t,r,l,o){var d=rt();o=o===void 0?null:o;var p=d.memoizedState.inst;Pe!==null&&o!==null&&wc(o,Pe.memoizedState.deps)?d.memoizedState=Gi(r,p,l,o):(ve.flags|=t,d.memoizedState=Gi(1|r,p,l,o))}function Kp(t,r){Us(8390656,8,t,r)}function Nc(t,r){Is(2048,8,t,r)}function iw(t){ve.flags|=4;var r=ve.updateQueue;if(r===null)r=Bs(),ve.updateQueue=r,r.events=[t];else{var l=r.events;l===null?r.events=[t]:l.push(t)}}function Zp(t){var r=rt().memoizedState;return iw({ref:r,nextImpl:t}),function(){if((_e&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}function Wp(t,r){return Is(4,2,t,r)}function $p(t,r){return Is(4,4,t,r)}function eg(t,r){if(typeof r=="function"){t=t();var l=r(t);return function(){typeof l=="function"?l():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function tg(t,r,l){l=l!=null?l.concat([t]):null,Is(4,4,eg.bind(null,r,t),l)}function Oc(){}function ng(t,r){var l=rt();r=r===void 0?null:r;var o=l.memoizedState;return r!==null&&wc(r,o[1])?o[0]:(l.memoizedState=[t,r],t)}function rg(t,r){var l=rt();r=r===void 0?null:r;var o=l.memoizedState;if(r!==null&&wc(r,o[1]))return o[0];if(o=t(),ri){Rt(!0);try{t()}finally{Rt(!1)}}return l.memoizedState=[o,r],o}function _c(t,r,l){return l===void 0||(Jn&1073741824)!==0&&(Me&261930)===0?t.memoizedState=r:(t.memoizedState=l,t=iy(),ve.lanes|=t,Cr|=t,l)}function ig(t,r,l,o){return Ht(l,r)?l:Hi.current!==null?(t=_c(t,l,o),Ht(t,r)||(lt=!0),t):(Jn&42)===0||(Jn&1073741824)!==0&&(Me&261930)===0?(lt=!0,t.memoizedState=l):(t=iy(),ve.lanes|=t,Cr|=t,r)}function ag(t,r,l,o,d){var p=ee.p;ee.p=p!==0&&8>p?p:8;var S=P.T,T={};P.T=T,Bc(t,!1,r,l);try{var R=d(),I=P.S;if(I!==null&&I(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var X=$2(R,o);Za(t,r,X,Jt(t))}else Za(t,r,o,Jt(t))}catch(W){Za(t,r,{then:function(){},status:"rejected",reason:W},Jt())}finally{ee.p=p,S!==null&&T.types!==null&&(S.types=T.types),P.T=S}}function aw(){}function Lc(t,r,l,o){if(t.tag!==5)throw Error(a(476));var d=lg(t).queue;ag(t,d,r,ae,l===null?aw:function(){return sg(t),l(o)})}function lg(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:ae},next:null};var l={};return r.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:l},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function sg(t){var r=lg(t);r.next===null&&(r=t.alternate.memoizedState),Za(t,r.next.queue,{},Jt())}function zc(){return yt(ml)}function og(){return rt().memoizedState}function ug(){return rt().memoizedState}function lw(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var l=Jt();t=xr(l);var o=br(r,t,l);o!==null&&(Vt(o,r,l),Ya(o,r,l)),r={cache:fc()},t.payload=r;return}r=r.return}}function sw(t,r,l){var o=Jt();l={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hs(t)?fg(r,l):(l=ec(t,r,l,o),l!==null&&(Vt(l,t,o),dg(l,r,o)))}function cg(t,r,l){var o=Jt();Za(t,r,l,o)}function Za(t,r,l,o){var d={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hs(t))fg(r,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var S=r.lastRenderedState,T=p(S,l);if(d.hasEagerState=!0,d.eagerState=T,Ht(T,S))return ws(t,r,d,0),Fe===null&&Ss(),!1}catch{}finally{}if(l=ec(t,r,d,o),l!==null)return Vt(l,t,o),dg(l,r,o),!0}return!1}function Bc(t,r,l,o){if(o={lane:2,revertLane:gf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hs(t)){if(r)throw Error(a(479))}else r=ec(t,l,o,2),r!==null&&Vt(r,t,2)}function Hs(t){var r=t.alternate;return t===ve||r!==null&&r===ve}function fg(t,r){Fi=Ls=!0;var l=t.pending;l===null?r.next=r:(r.next=l.next,l.next=r),t.pending=r}function dg(t,r,l){if((l&4194048)!==0){var o=r.lanes;o&=t.pendingLanes,l|=o,r.lanes=l,ym(t,l)}}var Wa={readContext:yt,use:Vs,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};Wa.useEffectEvent=$e;var hg={readContext:yt,use:Vs,useCallback:function(t,r){return Et().memoizedState=[t,r===void 0?null:r],t},useContext:yt,useEffect:Kp,useImperativeHandle:function(t,r,l){l=l!=null?l.concat([t]):null,Us(4194308,4,eg.bind(null,r,t),l)},useLayoutEffect:function(t,r){return Us(4194308,4,t,r)},useInsertionEffect:function(t,r){Us(4,2,t,r)},useMemo:function(t,r){var l=Et();r=r===void 0?null:r;var o=t();if(ri){Rt(!0);try{t()}finally{Rt(!1)}}return l.memoizedState=[o,r],o},useReducer:function(t,r,l){var o=Et();if(l!==void 0){var d=l(r);if(ri){Rt(!0);try{l(r)}finally{Rt(!1)}}}else d=r;return o.memoizedState=o.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},o.queue=t,t=t.dispatch=sw.bind(null,ve,t),[o.memoizedState,t]},useRef:function(t){var r=Et();return t={current:t},r.memoizedState=t},useState:function(t){t=Dc(t);var r=t.queue,l=cg.bind(null,ve,r);return r.dispatch=l,[t.memoizedState,l]},useDebugValue:Oc,useDeferredValue:function(t,r){var l=Et();return _c(l,t,r)},useTransition:function(){var t=Dc(!1);return t=ag.bind(null,ve,t.queue,!0,!1),Et().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,l){var o=ve,d=Et();if(De){if(l===void 0)throw Error(a(407));l=l()}else{if(l=r(),Fe===null)throw Error(a(349));(Me&127)!==0||_p(o,r,l)}d.memoizedState=l;var p={value:l,getSnapshot:r};return d.queue=p,Kp(zp.bind(null,o,p,t),[t]),o.flags|=2048,Gi(9,{destroy:void 0},Lp.bind(null,o,p,l,r),null),l},useId:function(){var t=Et(),r=Fe.identifierPrefix;if(De){var l=Mn,o=En;l=(o&~(1<<32-He(o)-1)).toString(32)+l,r="_"+r+"R_"+l,l=zs++,0<l&&(r+="H"+l.toString(32)),r+="_"}else l=ew++,r="_"+r+"r_"+l.toString(32)+"_";return t.memoizedState=r},useHostTransitionStatus:zc,useFormState:Gp,useActionState:Gp,useOptimistic:function(t){var r=Et();r.memoizedState=r.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=l,r=Bc.bind(null,ve,!0,l),l.dispatch=r,[t,r]},useMemoCache:Ec,useCacheRefresh:function(){return Et().memoizedState=lw.bind(null,ve)},useEffectEvent:function(t){var r=Et(),l={impl:t};return r.memoizedState=l,function(){if((_e&2)!==0)throw Error(a(440));return l.impl.apply(void 0,arguments)}}},Vc={readContext:yt,use:Vs,useCallback:ng,useContext:yt,useEffect:Nc,useImperativeHandle:tg,useInsertionEffect:Wp,useLayoutEffect:$p,useMemo:rg,useReducer:Ps,useRef:Qp,useState:function(){return Ps(Qn)},useDebugValue:Oc,useDeferredValue:function(t,r){var l=rt();return ig(l,Pe.memoizedState,t,r)},useTransition:function(){var t=Ps(Qn)[0],r=rt().memoizedState;return[typeof t=="boolean"?t:Ka(t),r]},useSyncExternalStore:Op,useId:og,useHostTransitionStatus:zc,useFormState:Yp,useActionState:Yp,useOptimistic:function(t,r){var l=rt();return Pp(l,Pe,t,r)},useMemoCache:Ec,useCacheRefresh:ug};Vc.useEffectEvent=Zp;var mg={readContext:yt,use:Vs,useCallback:ng,useContext:yt,useEffect:Nc,useImperativeHandle:tg,useInsertionEffect:Wp,useLayoutEffect:$p,useMemo:rg,useReducer:jc,useRef:Qp,useState:function(){return jc(Qn)},useDebugValue:Oc,useDeferredValue:function(t,r){var l=rt();return Pe===null?_c(l,t,r):ig(l,Pe.memoizedState,t,r)},useTransition:function(){var t=jc(Qn)[0],r=rt().memoizedState;return[typeof t=="boolean"?t:Ka(t),r]},useSyncExternalStore:Op,useId:og,useHostTransitionStatus:zc,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,r){var l=rt();return Pe!==null?Pp(l,Pe,t,r):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Ec,useCacheRefresh:ug};mg.useEffectEvent=Zp;function Pc(t,r,l,o){r=t.memoizedState,l=l(o,r),l=l==null?r:g({},r,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Uc={enqueueSetState:function(t,r,l){t=t._reactInternals;var o=Jt(),d=xr(o);d.payload=r,l!=null&&(d.callback=l),r=br(t,d,o),r!==null&&(Vt(r,t,o),Ya(r,t,o))},enqueueReplaceState:function(t,r,l){t=t._reactInternals;var o=Jt(),d=xr(o);d.tag=1,d.payload=r,l!=null&&(d.callback=l),r=br(t,d,o),r!==null&&(Vt(r,t,o),Ya(r,t,o))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var l=Jt(),o=xr(l);o.tag=2,r!=null&&(o.callback=r),r=br(t,o,l),r!==null&&(Vt(r,t,l),Ya(r,t,l))}};function pg(t,r,l,o,d,p,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,p,S):r.prototype&&r.prototype.isPureReactComponent?!Va(l,o)||!Va(d,p):!0}function gg(t,r,l,o){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,o),r.state!==t&&Uc.enqueueReplaceState(r,r.state,null)}function ii(t,r){var l=r;if("ref"in r){l={};for(var o in r)o!=="ref"&&(l[o]=r[o])}if(t=t.defaultProps){l===r&&(l=g({},l));for(var d in t)l[d]===void 0&&(l[d]=t[d])}return l}function yg(t){vs(t)}function xg(t){console.error(t)}function bg(t){vs(t)}function Fs(t,r){try{var l=t.onUncaughtError;l(r.value,{componentStack:r.stack})}catch(o){setTimeout(function(){throw o})}}function vg(t,r,l){try{var o=t.onCaughtError;o(l.value,{componentStack:l.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Ic(t,r,l){return l=xr(l),l.tag=3,l.payload={element:null},l.callback=function(){Fs(t,r)},l}function Sg(t){return t=xr(t),t.tag=3,t}function wg(t,r,l,o){var d=l.type.getDerivedStateFromError;if(typeof d=="function"){var p=o.value;t.payload=function(){return d(p)},t.callback=function(){vg(r,l,o)}}var S=l.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){vg(r,l,o),typeof d!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function ow(t,r,l,o,d){if(l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(r=l.alternate,r!==null&&Bi(r,l,d,!0),l=qt.current,l!==null){switch(l.tag){case 31:case 13:return on===null?to():l.alternate===null&&et===0&&(et=3),l.flags&=-257,l.flags|=65536,l.lanes=d,o===Ds?l.flags|=16384:(r=l.updateQueue,r===null?l.updateQueue=new Set([o]):r.add(o),hf(t,o,d)),!1;case 22:return l.flags|=65536,o===Ds?l.flags|=16384:(r=l.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([o])},l.updateQueue=r):(l=r.retryQueue,l===null?r.retryQueue=new Set([o]):l.add(o)),hf(t,o,d)),!1}throw Error(a(435,l.tag))}return hf(t,o,d),to(),!1}if(De)return r=qt.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,o!==lc&&(t=Error(a(422),{cause:o}),Ia(rn(t,l)))):(o!==lc&&(r=Error(a(423),{cause:o}),Ia(rn(r,l))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,o=rn(o,l),d=Ic(t.stateNode,o,d),yc(t,d),et!==4&&(et=2)),!1;var p=Error(a(520),{cause:o});if(p=rn(p,l),ll===null?ll=[p]:ll.push(p),et!==4&&(et=2),r===null)return!0;o=rn(o,l),l=r;do{switch(l.tag){case 3:return l.flags|=65536,t=d&-d,l.lanes|=t,t=Ic(l.stateNode,o,t),yc(l,t),!1;case 1:if(r=l.type,p=l.stateNode,(l.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(kr===null||!kr.has(p))))return l.flags|=65536,d&=-d,l.lanes|=d,d=Sg(d),wg(d,t,l,o),yc(l,d),!1}l=l.return}while(l!==null);return!1}var Hc=Error(a(461)),lt=!1;function xt(t,r,l,o){r.child=t===null?Ap(r,null,l,o):ni(r,t.child,l,o)}function Tg(t,r,l,o,d){l=l.render;var p=r.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return Wr(r),o=Tc(t,r,l,S,p,d),T=Cc(),t!==null&&!lt?(kc(t,r,d),Kn(t,r,d)):(De&&T&&ic(r),r.flags|=1,xt(t,r,o,d),r.child)}function Cg(t,r,l,o,d){if(t===null){var p=l.type;return typeof p=="function"&&!tc(p)&&p.defaultProps===void 0&&l.compare===null?(r.tag=15,r.type=p,kg(t,r,p,o,d)):(t=Cs(l.type,null,o,r,r.mode,d),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,!Kc(t,d)){var S=p.memoizedProps;if(l=l.compare,l=l!==null?l:Va,l(S,o)&&t.ref===r.ref)return Kn(t,r,d)}return r.flags|=1,t=qn(p,o),t.ref=r.ref,t.return=r,r.child=t}function kg(t,r,l,o,d){if(t!==null){var p=t.memoizedProps;if(Va(p,o)&&t.ref===r.ref)if(lt=!1,r.pendingProps=o=p,Kc(t,d))(t.flags&131072)!==0&&(lt=!0);else return r.lanes=t.lanes,Kn(t,r,d)}return Fc(t,r,l,o,d)}function Ag(t,r,l,o){var d=o.children,p=t!==null?t.memoizedState:null;if(t===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((r.flags&128)!==0){if(p=p!==null?p.baseLanes|l:l,t!==null){for(o=r.child=t.child,d=0;o!==null;)d=d|o.lanes|o.childLanes,o=o.sibling;o=d&~p}else o=0,r.child=null;return Eg(t,r,p,l,o)}if((l&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ms(r,p!==null?p.cachePool:null),p!==null?jp(r,p):bc(),Dp(r);else return o=r.lanes=536870912,Eg(t,r,p!==null?p.baseLanes|l:l,l,o)}else p!==null?(Ms(r,p.cachePool),jp(r,p),Sr(),r.memoizedState=null):(t!==null&&Ms(r,null),bc(),Sr());return xt(t,r,d,l),r.child}function $a(t,r){return t!==null&&t.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function Eg(t,r,l,o,d){var p=hc();return p=p===null?null:{parent:it._currentValue,pool:p},r.memoizedState={baseLanes:l,cachePool:p},t!==null&&Ms(r,null),bc(),Dp(r),t!==null&&Bi(t,r,o,!0),r.childLanes=d,null}function qs(t,r){return r=Ys({mode:r.mode,children:r.children},t.mode),r.ref=t.ref,t.child=r,r.return=t,r}function Mg(t,r,l){return ni(r,t.child,null,l),t=qs(r,r.pendingProps),t.flags|=2,Gt(r),r.memoizedState=null,t}function uw(t,r,l){var o=r.pendingProps,d=(r.flags&128)!==0;if(r.flags&=-129,t===null){if(De){if(o.mode==="hidden")return t=qs(r,o),r.lanes=536870912,$a(null,t);if(Sc(r),(t=Xe)?(t=Uy(t,sn),t=t!==null&&t.data==="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:hr!==null?{id:En,overflow:Mn}:null,retryLane:536870912,hydrationErrors:null},l=fp(t),l.return=r,r.child=l,gt=r,Xe=null)):t=null,t===null)throw pr(r);return r.lanes=536870912,null}return qs(r,o)}var p=t.memoizedState;if(p!==null){var S=p.dehydrated;if(Sc(r),d)if(r.flags&256)r.flags&=-257,r=Mg(t,r,l);else if(r.memoizedState!==null)r.child=t.child,r.flags|=128,r=null;else throw Error(a(558));else if(lt||Bi(t,r,l,!1),d=(l&t.childLanes)!==0,lt||d){if(o=Fe,o!==null&&(S=xm(o,l),S!==0&&S!==p.retryLane))throw p.retryLane=S,Jr(t,S),Vt(o,t,S),Hc;to(),r=Mg(t,r,l)}else t=p.treeContext,Xe=un(S.nextSibling),gt=r,De=!0,mr=null,sn=!1,t!==null&&mp(r,t),r=qs(r,o),r.flags|=4096;return r}return t=qn(t.child,{mode:o.mode,children:o.children}),t.ref=r.ref,r.child=t,t.return=r,t}function Gs(t,r){var l=r.ref;if(l===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(a(284));(t===null||t.ref!==l)&&(r.flags|=4194816)}}function Fc(t,r,l,o,d){return Wr(r),l=Tc(t,r,l,o,void 0,d),o=Cc(),t!==null&&!lt?(kc(t,r,d),Kn(t,r,d)):(De&&o&&ic(r),r.flags|=1,xt(t,r,l,d),r.child)}function jg(t,r,l,o,d,p){return Wr(r),r.updateQueue=null,l=Np(r,o,l,d),Rp(t),o=Cc(),t!==null&&!lt?(kc(t,r,p),Kn(t,r,p)):(De&&o&&ic(r),r.flags|=1,xt(t,r,l,p),r.child)}function Dg(t,r,l,o,d){if(Wr(r),r.stateNode===null){var p=Oi,S=l.contextType;typeof S=="object"&&S!==null&&(p=yt(S)),p=new l(o,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Uc,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=o,p.state=r.memoizedState,p.refs={},pc(r),S=l.contextType,p.context=typeof S=="object"&&S!==null?yt(S):Oi,p.state=r.memoizedState,S=l.getDerivedStateFromProps,typeof S=="function"&&(Pc(r,l,S,o),p.state=r.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Uc.enqueueReplaceState(p,p.state,null),Ja(r,o,p,d),Xa(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),o=!0}else if(t===null){p=r.stateNode;var T=r.memoizedProps,R=ii(l,T);p.props=R;var I=p.context,X=l.contextType;S=Oi,typeof X=="object"&&X!==null&&(S=yt(X));var W=l.getDerivedStateFromProps;X=typeof W=="function"||typeof p.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,X||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(T||I!==S)&&gg(r,p,o,S),yr=!1;var H=r.memoizedState;p.state=H,Ja(r,o,p,d),Xa(),I=r.memoizedState,T||H!==I||yr?(typeof W=="function"&&(Pc(r,l,W,o),I=r.memoizedState),(R=yr||pg(r,l,R,o,H,I,S))?(X||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=I),p.props=o,p.state=I,p.context=S,o=R):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{p=r.stateNode,gc(t,r),S=r.memoizedProps,X=ii(l,S),p.props=X,W=r.pendingProps,H=p.context,I=l.contextType,R=Oi,typeof I=="object"&&I!==null&&(R=yt(I)),T=l.getDerivedStateFromProps,(I=typeof T=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==W||H!==R)&&gg(r,p,o,R),yr=!1,H=r.memoizedState,p.state=H,Ja(r,o,p,d),Xa();var q=r.memoizedState;S!==W||H!==q||yr||t!==null&&t.dependencies!==null&&As(t.dependencies)?(typeof T=="function"&&(Pc(r,l,T,o),q=r.memoizedState),(X=yr||pg(r,l,X,o,H,q,R)||t!==null&&t.dependencies!==null&&As(t.dependencies))?(I||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,q,R),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,q,R)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&H===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&H===t.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=q),p.props=o,p.state=q,p.context=R,o=X):(typeof p.componentDidUpdate!="function"||S===t.memoizedProps&&H===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&H===t.memoizedState||(r.flags|=1024),o=!1)}return p=o,Gs(t,r),o=(r.flags&128)!==0,p||o?(p=r.stateNode,l=o&&typeof l.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,t!==null&&o?(r.child=ni(r,t.child,null,d),r.child=ni(r,null,l,d)):xt(t,r,l,d),r.memoizedState=p.state,t=r.child):t=Kn(t,r,d),t}function Rg(t,r,l,o){return Kr(),r.flags|=256,xt(t,r,l,o),r.child}var qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gc(t){return{baseLanes:t,cachePool:vp()}}function Yc(t,r,l){return t=t!==null?t.childLanes&~l:0,r&&(t|=Xt),t}function Ng(t,r,l){var o=r.pendingProps,d=!1,p=(r.flags&128)!==0,S;if((S=p)||(S=t!==null&&t.memoizedState===null?!1:(nt.current&2)!==0),S&&(d=!0,r.flags&=-129),S=(r.flags&32)!==0,r.flags&=-33,t===null){if(De){if(d?vr(r):Sr(),(t=Xe)?(t=Uy(t,sn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:hr!==null?{id:En,overflow:Mn}:null,retryLane:536870912,hydrationErrors:null},l=fp(t),l.return=r,r.child=l,gt=r,Xe=null)):t=null,t===null)throw pr(r);return jf(t)?r.lanes=32:r.lanes=536870912,null}var T=o.children;return o=o.fallback,d?(Sr(),d=r.mode,T=Ys({mode:"hidden",children:T},d),o=Qr(o,d,l,null),T.return=r,o.return=r,T.sibling=o,r.child=T,o=r.child,o.memoizedState=Gc(l),o.childLanes=Yc(t,S,l),r.memoizedState=qc,$a(null,o)):(vr(r),Xc(r,T))}var R=t.memoizedState;if(R!==null&&(T=R.dehydrated,T!==null)){if(p)r.flags&256?(vr(r),r.flags&=-257,r=Jc(t,r,l)):r.memoizedState!==null?(Sr(),r.child=t.child,r.flags|=128,r=null):(Sr(),T=o.fallback,d=r.mode,o=Ys({mode:"visible",children:o.children},d),T=Qr(T,d,l,null),T.flags|=2,o.return=r,T.return=r,o.sibling=T,r.child=o,ni(r,t.child,null,l),o=r.child,o.memoizedState=Gc(l),o.childLanes=Yc(t,S,l),r.memoizedState=qc,r=$a(null,o));else if(vr(r),jf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var I=S.dgst;S=I,o=Error(a(419)),o.stack="",o.digest=S,Ia({value:o,source:null,stack:null}),r=Jc(t,r,l)}else if(lt||Bi(t,r,l,!1),S=(l&t.childLanes)!==0,lt||S){if(S=Fe,S!==null&&(o=xm(S,l),o!==0&&o!==R.retryLane))throw R.retryLane=o,Jr(t,o),Vt(S,t,o),Hc;Mf(T)||to(),r=Jc(t,r,l)}else Mf(T)?(r.flags|=192,r.child=t.child,r=null):(t=R.treeContext,Xe=un(T.nextSibling),gt=r,De=!0,mr=null,sn=!1,t!==null&&mp(r,t),r=Xc(r,o.children),r.flags|=4096);return r}return d?(Sr(),T=o.fallback,d=r.mode,R=t.child,I=R.sibling,o=qn(R,{mode:"hidden",children:o.children}),o.subtreeFlags=R.subtreeFlags&65011712,I!==null?T=qn(I,T):(T=Qr(T,d,l,null),T.flags|=2),T.return=r,o.return=r,o.sibling=T,r.child=o,$a(null,o),o=r.child,T=t.child.memoizedState,T===null?T=Gc(l):(d=T.cachePool,d!==null?(R=it._currentValue,d=d.parent!==R?{parent:R,pool:R}:d):d=vp(),T={baseLanes:T.baseLanes|l,cachePool:d}),o.memoizedState=T,o.childLanes=Yc(t,S,l),r.memoizedState=qc,$a(t.child,o)):(vr(r),l=t.child,t=l.sibling,l=qn(l,{mode:"visible",children:o.children}),l.return=r,l.sibling=null,t!==null&&(S=r.deletions,S===null?(r.deletions=[t],r.flags|=16):S.push(t)),r.child=l,r.memoizedState=null,l)}function Xc(t,r){return r=Ys({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function Ys(t,r){return t=Ft(22,t,null,r),t.lanes=0,t}function Jc(t,r,l){return ni(r,t.child,null,l),t=Xc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Og(t,r,l){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r),uc(t.return,r,l)}function Qc(t,r,l,o,d,p){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:l,tailMode:d,treeForkCount:p}:(S.isBackwards=r,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=l,S.tailMode=d,S.treeForkCount=p)}function _g(t,r,l){var o=r.pendingProps,d=o.revealOrder,p=o.tail;o=o.children;var S=nt.current,T=(S&2)!==0;if(T?(S=S&1|2,r.flags|=128):S&=1,k(nt,S),xt(t,r,o,l),o=De?Ua:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Og(t,l,r);else if(t.tag===19)Og(t,l,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(l=r.child,d=null;l!==null;)t=l.alternate,t!==null&&_s(t)===null&&(d=l),l=l.sibling;l=d,l===null?(d=r.child,r.child=null):(d=l.sibling,l.sibling=null),Qc(r,!1,d,l,p,o);break;case"backwards":case"unstable_legacy-backwards":for(l=null,d=r.child,r.child=null;d!==null;){if(t=d.alternate,t!==null&&_s(t)===null){r.child=d;break}t=d.sibling,d.sibling=l,l=d,d=t}Qc(r,!0,l,null,p,o);break;case"together":Qc(r,!1,null,null,void 0,o);break;default:r.memoizedState=null}return r.child}function Kn(t,r,l){if(t!==null&&(r.dependencies=t.dependencies),Cr|=r.lanes,(l&r.childLanes)===0)if(t!==null){if(Bi(t,r,l,!1),(l&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,l=qn(t,t.pendingProps),r.child=l,l.return=r;t.sibling!==null;)t=t.sibling,l=l.sibling=qn(t,t.pendingProps),l.return=r;l.sibling=null}return r.child}function Kc(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&As(t)))}function cw(t,r,l){switch(r.tag){case 3:Ke(r,r.stateNode.containerInfo),gr(r,it,t.memoizedState.cache),Kr();break;case 27:case 5:$t(r);break;case 4:Ke(r,r.stateNode.containerInfo);break;case 10:gr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Sc(r),null;break;case 13:var o=r.memoizedState;if(o!==null)return o.dehydrated!==null?(vr(r),r.flags|=128,null):(l&r.child.childLanes)!==0?Ng(t,r,l):(vr(r),t=Kn(t,r,l),t!==null?t.sibling:null);vr(r);break;case 19:var d=(t.flags&128)!==0;if(o=(l&r.childLanes)!==0,o||(Bi(t,r,l,!1),o=(l&r.childLanes)!==0),d){if(o)return _g(t,r,l);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),k(nt,nt.current),o)break;return null;case 22:return r.lanes=0,Ag(t,r,l,r.pendingProps);case 24:gr(r,it,t.memoizedState.cache)}return Kn(t,r,l)}function Lg(t,r,l){if(t!==null)if(t.memoizedProps!==r.pendingProps)lt=!0;else{if(!Kc(t,l)&&(r.flags&128)===0)return lt=!1,cw(t,r,l);lt=(t.flags&131072)!==0}else lt=!1,De&&(r.flags&1048576)!==0&&hp(r,Ua,r.index);switch(r.lanes=0,r.tag){case 16:e:{var o=r.pendingProps;if(t=ei(r.elementType),r.type=t,typeof t=="function")tc(t)?(o=ii(t,o),r.tag=1,r=Dg(null,r,t,o,l)):(r.tag=0,r=Fc(null,r,t,o,l));else{if(t!=null){var d=t.$$typeof;if(d===V){r.tag=11,r=Tg(null,r,t,o,l);break e}else if(d===G){r.tag=14,r=Cg(null,r,t,o,l);break e}}throw r=le(t)||t,Error(a(306,r,""))}}return r;case 0:return Fc(t,r,r.type,r.pendingProps,l);case 1:return o=r.type,d=ii(o,r.pendingProps),Dg(t,r,o,d,l);case 3:e:{if(Ke(r,r.stateNode.containerInfo),t===null)throw Error(a(387));o=r.pendingProps;var p=r.memoizedState;d=p.element,gc(t,r),Ja(r,o,null,l);var S=r.memoizedState;if(o=S.cache,gr(r,it,o),o!==p.cache&&cc(r,[it],l,!0),Xa(),o=S.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:S.cache},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){r=Rg(t,r,o,l);break e}else if(o!==d){d=rn(Error(a(424)),r),Ia(d),r=Rg(t,r,o,l);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=un(t.firstChild),gt=r,De=!0,mr=null,sn=!0,l=Ap(r,null,o,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Kr(),o===d){r=Kn(t,r,l);break e}xt(t,r,o,l)}r=r.child}return r;case 26:return Gs(t,r),t===null?(l=Yy(r.type,null,r.pendingProps,null))?r.memoizedState=l:De||(l=r.type,t=r.pendingProps,o=oo(de.current).createElement(l),o[pt]=r,o[Nt]=t,bt(o,l,t),ht(o),r.stateNode=o):r.memoizedState=Yy(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return $t(r),t===null&&De&&(o=r.stateNode=Fy(r.type,r.pendingProps,de.current),gt=r,sn=!0,d=Xe,jr(r.type)?(Df=d,Xe=un(o.firstChild)):Xe=d),xt(t,r,r.pendingProps.children,l),Gs(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&De&&((d=o=Xe)&&(o=Uw(o,r.type,r.pendingProps,sn),o!==null?(r.stateNode=o,gt=r,Xe=un(o.firstChild),sn=!1,d=!0):d=!1),d||pr(r)),$t(r),d=r.type,p=r.pendingProps,S=t!==null?t.memoizedProps:null,o=p.children,kf(d,p)?o=null:S!==null&&kf(d,S)&&(r.flags|=32),r.memoizedState!==null&&(d=Tc(t,r,tw,null,null,l),ml._currentValue=d),Gs(t,r),xt(t,r,o,l),r.child;case 6:return t===null&&De&&((t=l=Xe)&&(l=Iw(l,r.pendingProps,sn),l!==null?(r.stateNode=l,gt=r,Xe=null,t=!0):t=!1),t||pr(r)),null;case 13:return Ng(t,r,l);case 4:return Ke(r,r.stateNode.containerInfo),o=r.pendingProps,t===null?r.child=ni(r,null,o,l):xt(t,r,o,l),r.child;case 11:return Tg(t,r,r.type,r.pendingProps,l);case 7:return xt(t,r,r.pendingProps,l),r.child;case 8:return xt(t,r,r.pendingProps.children,l),r.child;case 12:return xt(t,r,r.pendingProps.children,l),r.child;case 10:return o=r.pendingProps,gr(r,r.type,o.value),xt(t,r,o.children,l),r.child;case 9:return d=r.type._context,o=r.pendingProps.children,Wr(r),d=yt(d),o=o(d),r.flags|=1,xt(t,r,o,l),r.child;case 14:return Cg(t,r,r.type,r.pendingProps,l);case 15:return kg(t,r,r.type,r.pendingProps,l);case 19:return _g(t,r,l);case 31:return uw(t,r,l);case 22:return Ag(t,r,l,r.pendingProps);case 24:return Wr(r),o=yt(it),t===null?(d=hc(),d===null&&(d=Fe,p=fc(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=l),d=p),r.memoizedState={parent:o,cache:d},pc(r),gr(r,it,d)):((t.lanes&l)!==0&&(gc(t,r),Ja(r,null,null,l),Xa()),d=t.memoizedState,p=r.memoizedState,d.parent!==o?(d={parent:o,cache:o},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),gr(r,it,o)):(o=p.cache,gr(r,it,o),o!==d.cache&&cc(r,[it],l,!0))),xt(t,r,r.pendingProps.children,l),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Zn(t){t.flags|=4}function Zc(t,r,l,o,d){if((r=(t.mode&32)!==0)&&(r=!1),r){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(oy())t.flags|=8192;else throw ti=Ds,mc}else t.flags&=-16777217}function zg(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Zy(r))if(oy())t.flags|=8192;else throw ti=Ds,mc}function Xs(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?pm():536870912,t.lanes|=r,Qi|=r)}function el(t,r){if(!De)switch(t.tailMode){case"hidden":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var o=null;l!==null;)l.alternate!==null&&(o=l),l=l.sibling;o===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Je(t){var r=t.alternate!==null&&t.alternate.child===t.child,l=0,o=0;if(r)for(var d=t.child;d!==null;)l|=d.lanes|d.childLanes,o|=d.subtreeFlags&65011712,o|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)l|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=o,t.childLanes=l,r}function fw(t,r,l){var o=r.pendingProps;switch(ac(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(r),null;case 1:return Je(r),null;case 3:return l=r.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Xn(it),Ve(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(zi(r)?Zn(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,sc())),Je(r),null;case 26:var d=r.type,p=r.memoizedState;return t===null?(Zn(r),p!==null?(Je(r),zg(r,p)):(Je(r),Zc(r,d,null,o,l))):p?p!==t.memoizedState?(Zn(r),Je(r),zg(r,p)):(Je(r),r.flags&=-16777217):(t=t.memoizedProps,t!==o&&Zn(r),Je(r),Zc(r,d,t,o,l)),null;case 27:if(Vn(r),l=de.current,d=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&Zn(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Je(r),null}t=se.current,zi(r)?pp(r):(t=Fy(d,o,l),r.stateNode=t,Zn(r))}return Je(r),null;case 5:if(Vn(r),d=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&Zn(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Je(r),null}if(p=se.current,zi(r))pp(r);else{var S=oo(de.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?p.multiple=!0:o.size&&(p.size=o.size);break;default:p=typeof o.is=="string"?S.createElement(d,{is:o.is}):S.createElement(d)}}p[pt]=r,p[Nt]=o;e:for(S=r.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===r)break e;for(;S.sibling===null;){if(S.return===null||S.return===r)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}r.stateNode=p;e:switch(bt(p,d,o),d){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Zn(r)}}return Je(r),Zc(r,r.type,t===null?null:t.memoizedProps,r.pendingProps,l),null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==o&&Zn(r);else{if(typeof o!="string"&&r.stateNode===null)throw Error(a(166));if(t=de.current,zi(r)){if(t=r.stateNode,l=r.memoizedProps,o=null,d=gt,d!==null)switch(d.tag){case 27:case 5:o=d.memoizedProps}t[pt]=r,t=!!(t.nodeValue===l||o!==null&&o.suppressHydrationWarning===!0||Ny(t.nodeValue,l)),t||pr(r,!0)}else t=oo(t).createTextNode(o),t[pt]=r,r.stateNode=t}return Je(r),null;case 31:if(l=r.memoizedState,t===null||t.memoizedState!==null){if(o=zi(r),l!==null){if(t===null){if(!o)throw Error(a(318));if(t=r.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[pt]=r}else Kr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Je(r),t=!1}else l=sc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return r.flags&256?(Gt(r),r):(Gt(r),null);if((r.flags&128)!==0)throw Error(a(558))}return Je(r),null;case 13:if(o=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=zi(r),o!==null&&o.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[pt]=r}else Kr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Je(r),d=!1}else d=sc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(Gt(r),r):(Gt(r),null)}return Gt(r),(r.flags&128)!==0?(r.lanes=l,r):(l=o!==null,t=t!==null&&t.memoizedState!==null,l&&(o=r.child,d=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(d=o.alternate.memoizedState.cachePool.pool),p=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==d&&(o.flags|=2048)),l!==t&&l&&(r.child.flags|=8192),Xs(r,r.updateQueue),Je(r),null);case 4:return Ve(),t===null&&vf(r.stateNode.containerInfo),Je(r),null;case 10:return Xn(r.type),Je(r),null;case 19:if(J(nt),o=r.memoizedState,o===null)return Je(r),null;if(d=(r.flags&128)!==0,p=o.rendering,p===null)if(d)el(o,!1);else{if(et!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(p=_s(t),p!==null){for(r.flags|=128,el(o,!1),t=p.updateQueue,r.updateQueue=t,Xs(r,t),r.subtreeFlags=0,t=l,l=r.child;l!==null;)cp(l,t),l=l.sibling;return k(nt,nt.current&1|2),De&&Gn(r,o.treeForkCount),r.child}t=t.sibling}o.tail!==null&&kt()>Ws&&(r.flags|=128,d=!0,el(o,!1),r.lanes=4194304)}else{if(!d)if(t=_s(p),t!==null){if(r.flags|=128,d=!0,t=t.updateQueue,r.updateQueue=t,Xs(r,t),el(o,!0),o.tail===null&&o.tailMode==="hidden"&&!p.alternate&&!De)return Je(r),null}else 2*kt()-o.renderingStartTime>Ws&&l!==536870912&&(r.flags|=128,d=!0,el(o,!1),r.lanes=4194304);o.isBackwards?(p.sibling=r.child,r.child=p):(t=o.last,t!==null?t.sibling=p:r.child=p,o.last=p)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=kt(),t.sibling=null,l=nt.current,k(nt,d?l&1|2:l&1),De&&Gn(r,o.treeForkCount),t):(Je(r),null);case 22:case 23:return Gt(r),vc(),o=r.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(r.flags|=8192):o&&(r.flags|=8192),o?(l&536870912)!==0&&(r.flags&128)===0&&(Je(r),r.subtreeFlags&6&&(r.flags|=8192)):Je(r),l=r.updateQueue,l!==null&&Xs(r,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==l&&(r.flags|=2048),t!==null&&J($r),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Xn(it),Je(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function dw(t,r){switch(ac(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Xn(it),Ve(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return Vn(r),null;case 31:if(r.memoizedState!==null){if(Gt(r),r.alternate===null)throw Error(a(340));Kr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 13:if(Gt(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Kr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return J(nt),null;case 4:return Ve(),null;case 10:return Xn(r.type),null;case 22:case 23:return Gt(r),vc(),t!==null&&J($r),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Xn(it),null;case 25:return null;default:return null}}function Bg(t,r){switch(ac(r),r.tag){case 3:Xn(it),Ve();break;case 26:case 27:case 5:Vn(r);break;case 4:Ve();break;case 31:r.memoizedState!==null&&Gt(r);break;case 13:Gt(r);break;case 19:J(nt);break;case 10:Xn(r.type);break;case 22:case 23:Gt(r),vc(),t!==null&&J($r);break;case 24:Xn(it)}}function tl(t,r){try{var l=r.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var d=o.next;l=d;do{if((l.tag&t)===t){o=void 0;var p=l.create,S=l.inst;o=p(),S.destroy=o}l=l.next}while(l!==d)}}catch(T){Be(r,r.return,T)}}function wr(t,r,l){try{var o=r.updateQueue,d=o!==null?o.lastEffect:null;if(d!==null){var p=d.next;o=p;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,d=r;var R=l,I=T;try{I()}catch(X){Be(d,R,X)}}}o=o.next}while(o!==p)}}catch(X){Be(r,r.return,X)}}function Vg(t){var r=t.updateQueue;if(r!==null){var l=t.stateNode;try{Mp(r,l)}catch(o){Be(t,t.return,o)}}}function Pg(t,r,l){l.props=ii(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(o){Be(t,r,o)}}function nl(t,r){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof l=="function"?t.refCleanup=l(o):l.current=o}}catch(d){Be(t,r,d)}}function jn(t,r){var l=t.ref,o=t.refCleanup;if(l!==null)if(typeof o=="function")try{o()}catch(d){Be(t,r,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(d){Be(t,r,d)}else l.current=null}function Ug(t){var r=t.type,l=t.memoizedProps,o=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":l.autoFocus&&o.focus();break e;case"img":l.src?o.src=l.src:l.srcSet&&(o.srcset=l.srcSet)}}catch(d){Be(t,t.return,d)}}function Wc(t,r,l){try{var o=t.stateNode;_w(o,t.type,l,r),o[Nt]=r}catch(d){Be(t,t.return,d)}}function Ig(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&jr(t.type)||t.tag===4}function $c(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&jr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,r,l){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,r):(r=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,r.appendChild(t),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Hn));else if(o!==4&&(o===27&&jr(t.type)&&(l=t.stateNode,r=null),t=t.child,t!==null))for(ef(t,r,l),t=t.sibling;t!==null;)ef(t,r,l),t=t.sibling}function Js(t,r,l){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?l.insertBefore(t,r):l.appendChild(t);else if(o!==4&&(o===27&&jr(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Js(t,r,l),t=t.sibling;t!==null;)Js(t,r,l),t=t.sibling}function Hg(t){var r=t.stateNode,l=t.memoizedProps;try{for(var o=t.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);bt(r,o,l),r[pt]=t,r[Nt]=l}catch(p){Be(t,t.return,p)}}var Wn=!1,st=!1,tf=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,mt=null;function hw(t,r){if(t=t.containerInfo,Tf=go,t=tp(t),Ju(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else e:{l=(l=t.ownerDocument)&&l.defaultView||window;var o=l.getSelection&&l.getSelection();if(o&&o.rangeCount!==0){l=o.anchorNode;var d=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{l.nodeType,p.nodeType}catch{l=null;break e}var S=0,T=-1,R=-1,I=0,X=0,W=t,H=null;t:for(;;){for(var q;W!==l||d!==0&&W.nodeType!==3||(T=S+d),W!==p||o!==0&&W.nodeType!==3||(R=S+o),W.nodeType===3&&(S+=W.nodeValue.length),(q=W.firstChild)!==null;)H=W,W=q;for(;;){if(W===t)break t;if(H===l&&++I===d&&(T=S),H===p&&++X===o&&(R=S),(q=W.nextSibling)!==null)break;W=H,H=W.parentNode}W=q}l=T===-1||R===-1?null:{start:T,end:R}}else l=null}l=l||{start:0,end:0}}else l=null;for(Cf={focusedElem:t,selectionRange:l},go=!1,mt=r;mt!==null;)if(r=mt,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,mt=t;else for(;mt!==null;){switch(r=mt,p=r.alternate,t=r.flags,r.tag){case 0:if((t&4)!==0&&(t=r.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)d=t[l],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,l=r,d=p.memoizedProps,p=p.memoizedState,o=l.stateNode;try{var oe=ii(l.type,d);t=o.getSnapshotBeforeUpdate(oe,p),o.__reactInternalSnapshotBeforeUpdate=t}catch(pe){Be(l,l.return,pe)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,l=t.nodeType,l===9)Ef(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ef(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=r.sibling,t!==null){t.return=r.return,mt=t;break}mt=r.return}}function qg(t,r,l){var o=l.flags;switch(l.tag){case 0:case 11:case 15:er(t,l),o&4&&tl(5,l);break;case 1:if(er(t,l),o&4)if(t=l.stateNode,r===null)try{t.componentDidMount()}catch(S){Be(l,l.return,S)}else{var d=ii(l.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(d,r,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Be(l,l.return,S)}}o&64&&Vg(l),o&512&&nl(l,l.return);break;case 3:if(er(t,l),o&64&&(t=l.updateQueue,t!==null)){if(r=null,l.child!==null)switch(l.child.tag){case 27:case 5:r=l.child.stateNode;break;case 1:r=l.child.stateNode}try{Mp(t,r)}catch(S){Be(l,l.return,S)}}break;case 27:r===null&&o&4&&Hg(l);case 26:case 5:er(t,l),r===null&&o&4&&Ug(l),o&512&&nl(l,l.return);break;case 12:er(t,l);break;case 31:er(t,l),o&4&&Xg(t,l);break;case 13:er(t,l),o&4&&Jg(t,l),o&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=ww.bind(null,l),Hw(t,l))));break;case 22:if(o=l.memoizedState!==null||Wn,!o){r=r!==null&&r.memoizedState!==null||st,d=Wn;var p=st;Wn=o,(st=r)&&!p?tr(t,l,(l.subtreeFlags&8772)!==0):er(t,l),Wn=d,st=p}break;case 30:break;default:er(t,l)}}function Gg(t){var r=t.alternate;r!==null&&(t.alternate=null,Gg(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&Ru(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,_t=!1;function $n(t,r,l){for(l=l.child;l!==null;)Yg(t,r,l),l=l.sibling}function Yg(t,r,l){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(At,l)}catch{}switch(l.tag){case 26:st||jn(l,r),$n(t,r,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:st||jn(l,r);var o=Ze,d=_t;jr(l.type)&&(Ze=l.stateNode,_t=!1),$n(t,r,l),fl(l.stateNode),Ze=o,_t=d;break;case 5:st||jn(l,r);case 6:if(o=Ze,d=_t,Ze=null,$n(t,r,l),Ze=o,_t=d,Ze!==null)if(_t)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(l.stateNode)}catch(p){Be(l,r,p)}else try{Ze.removeChild(l.stateNode)}catch(p){Be(l,r,p)}break;case 18:Ze!==null&&(_t?(t=Ze,Vy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),ra(t)):Vy(Ze,l.stateNode));break;case 4:o=Ze,d=_t,Ze=l.stateNode.containerInfo,_t=!0,$n(t,r,l),Ze=o,_t=d;break;case 0:case 11:case 14:case 15:wr(2,l,r),st||wr(4,l,r),$n(t,r,l);break;case 1:st||(jn(l,r),o=l.stateNode,typeof o.componentWillUnmount=="function"&&Pg(l,r,o)),$n(t,r,l);break;case 21:$n(t,r,l);break;case 22:st=(o=st)||l.memoizedState!==null,$n(t,r,l),st=o;break;default:$n(t,r,l)}}function Xg(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ra(t)}catch(l){Be(r,r.return,l)}}}function Jg(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ra(t)}catch(l){Be(r,r.return,l)}}function mw(t){switch(t.tag){case 31:case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Fg),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Fg),r;default:throw Error(a(435,t.tag))}}function Qs(t,r){var l=mw(t);r.forEach(function(o){if(!l.has(o)){l.add(o);var d=Tw.bind(null,t,o);o.then(d,d)}})}function Lt(t,r){var l=r.deletions;if(l!==null)for(var o=0;o<l.length;o++){var d=l[o],p=t,S=r,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(jr(T.type)){Ze=T.stateNode,_t=!1;break e}break;case 5:Ze=T.stateNode,_t=!1;break e;case 3:case 4:Ze=T.stateNode.containerInfo,_t=!0;break e}T=T.return}if(Ze===null)throw Error(a(160));Yg(p,S,d),Ze=null,_t=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Qg(r,t),r=r.sibling}var xn=null;function Qg(t,r){var l=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Lt(r,t),zt(t),o&4&&(wr(3,t,t.return),tl(3,t),wr(5,t,t.return));break;case 1:Lt(r,t),zt(t),o&512&&(st||l===null||jn(l,l.return)),o&64&&Wn&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?o:l.concat(o))));break;case 26:var d=xn;if(Lt(r,t),zt(t),o&512&&(st||l===null||jn(l,l.return)),o&4){var p=l!==null?l.memoizedState:null;if(o=t.memoizedState,l===null)if(o===null)if(t.stateNode===null){e:{o=t.type,l=t.memoizedProps,d=d.ownerDocument||d;t:switch(o){case"title":p=d.getElementsByTagName("title")[0],(!p||p[ja]||p[pt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(o),d.head.insertBefore(p,d.querySelector("head > title"))),bt(p,o,l),p[pt]=t,ht(p),o=p;break e;case"link":var S=Qy("link","href",d).get(o+(l.href||""));if(S){for(var T=0;T<S.length;T++)if(p=S[T],p.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&p.getAttribute("rel")===(l.rel==null?null:l.rel)&&p.getAttribute("title")===(l.title==null?null:l.title)&&p.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){S.splice(T,1);break t}}p=d.createElement(o),bt(p,o,l),d.head.appendChild(p);break;case"meta":if(S=Qy("meta","content",d).get(o+(l.content||""))){for(T=0;T<S.length;T++)if(p=S[T],p.getAttribute("content")===(l.content==null?null:""+l.content)&&p.getAttribute("name")===(l.name==null?null:l.name)&&p.getAttribute("property")===(l.property==null?null:l.property)&&p.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&p.getAttribute("charset")===(l.charSet==null?null:l.charSet)){S.splice(T,1);break t}}p=d.createElement(o),bt(p,o,l),d.head.appendChild(p);break;default:throw Error(a(468,o))}p[pt]=t,ht(p),o=p}t.stateNode=o}else Ky(d,t.type,t.stateNode);else t.stateNode=Jy(d,o,t.memoizedProps);else p!==o?(p===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):p.count--,o===null?Ky(d,t.type,t.stateNode):Jy(d,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Wc(t,t.memoizedProps,l.memoizedProps)}break;case 27:Lt(r,t),zt(t),o&512&&(st||l===null||jn(l,l.return)),l!==null&&o&4&&Wc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Lt(r,t),zt(t),o&512&&(st||l===null||jn(l,l.return)),t.flags&32){d=t.stateNode;try{Ai(d,"")}catch(oe){Be(t,t.return,oe)}}o&4&&t.stateNode!=null&&(d=t.memoizedProps,Wc(t,d,l!==null?l.memoizedProps:d)),o&1024&&(tf=!0);break;case 6:if(Lt(r,t),zt(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,l=t.stateNode;try{l.nodeValue=o}catch(oe){Be(t,t.return,oe)}}break;case 3:if(fo=null,d=xn,xn=uo(r.containerInfo),Lt(r,t),xn=d,zt(t),o&4&&l!==null&&l.memoizedState.isDehydrated)try{ra(r.containerInfo)}catch(oe){Be(t,t.return,oe)}tf&&(tf=!1,Kg(t));break;case 4:o=xn,xn=uo(t.stateNode.containerInfo),Lt(r,t),zt(t),xn=o;break;case 12:Lt(r,t),zt(t);break;case 31:Lt(r,t),zt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Qs(t,o)));break;case 13:Lt(r,t),zt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Zs=kt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Qs(t,o)));break;case 22:d=t.memoizedState!==null;var R=l!==null&&l.memoizedState!==null,I=Wn,X=st;if(Wn=I||d,st=X||R,Lt(r,t),st=X,Wn=I,zt(t),o&8192)e:for(r=t.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(l===null||R||Wn||st||ai(t)),l=null,r=t;;){if(r.tag===5||r.tag===26){if(l===null){R=l=r;try{if(p=R.stateNode,d)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=R.stateNode;var W=R.memoizedProps.style,H=W!=null&&W.hasOwnProperty("display")?W.display:null;T.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(oe){Be(R,R.return,oe)}}}else if(r.tag===6){if(l===null){R=r;try{R.stateNode.nodeValue=d?"":R.memoizedProps}catch(oe){Be(R,R.return,oe)}}}else if(r.tag===18){if(l===null){R=r;try{var q=R.stateNode;d?Py(q,!0):Py(R.stateNode,!1)}catch(oe){Be(R,R.return,oe)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;l===r&&(l=null),r=r.return}l===r&&(l=null),r.sibling.return=r.return,r=r.sibling}o&4&&(o=t.updateQueue,o!==null&&(l=o.retryQueue,l!==null&&(o.retryQueue=null,Qs(t,l))));break;case 19:Lt(r,t),zt(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Qs(t,o)));break;case 30:break;case 21:break;default:Lt(r,t),zt(t)}}function zt(t){var r=t.flags;if(r&2){try{for(var l,o=t.return;o!==null;){if(Ig(o)){l=o;break}o=o.return}if(l==null)throw Error(a(160));switch(l.tag){case 27:var d=l.stateNode,p=$c(t);Js(t,p,d);break;case 5:var S=l.stateNode;l.flags&32&&(Ai(S,""),l.flags&=-33);var T=$c(t);Js(t,T,S);break;case 3:case 4:var R=l.stateNode.containerInfo,I=$c(t);ef(t,I,R);break;default:throw Error(a(161))}}catch(X){Be(t,t.return,X)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Kg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;Kg(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function er(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)qg(t,r.alternate,r),r=r.sibling}function ai(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:wr(4,r,r.return),ai(r);break;case 1:jn(r,r.return);var l=r.stateNode;typeof l.componentWillUnmount=="function"&&Pg(r,r.return,l),ai(r);break;case 27:fl(r.stateNode);case 26:case 5:jn(r,r.return),ai(r);break;case 22:r.memoizedState===null&&ai(r);break;case 30:ai(r);break;default:ai(r)}t=t.sibling}}function tr(t,r,l){for(l=l&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var o=r.alternate,d=t,p=r,S=p.flags;switch(p.tag){case 0:case 11:case 15:tr(d,p,l),tl(4,p);break;case 1:if(tr(d,p,l),o=p,d=o.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(I){Be(o,o.return,I)}if(o=p,d=o.updateQueue,d!==null){var T=o.stateNode;try{var R=d.shared.hiddenCallbacks;if(R!==null)for(d.shared.hiddenCallbacks=null,d=0;d<R.length;d++)Ep(R[d],T)}catch(I){Be(o,o.return,I)}}l&&S&64&&Vg(p),nl(p,p.return);break;case 27:Hg(p);case 26:case 5:tr(d,p,l),l&&o===null&&S&4&&Ug(p),nl(p,p.return);break;case 12:tr(d,p,l);break;case 31:tr(d,p,l),l&&S&4&&Xg(d,p);break;case 13:tr(d,p,l),l&&S&4&&Jg(d,p);break;case 22:p.memoizedState===null&&tr(d,p,l),nl(p,p.return);break;case 30:break;default:tr(d,p,l)}r=r.sibling}}function nf(t,r){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Ha(l))}function rf(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Ha(t))}function bn(t,r,l,o){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Zg(t,r,l,o),r=r.sibling}function Zg(t,r,l,o){var d=r.flags;switch(r.tag){case 0:case 11:case 15:bn(t,r,l,o),d&2048&&tl(9,r);break;case 1:bn(t,r,l,o);break;case 3:bn(t,r,l,o),d&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Ha(t)));break;case 12:if(d&2048){bn(t,r,l,o),t=r.stateNode;try{var p=r.memoizedProps,S=p.id,T=p.onPostCommit;typeof T=="function"&&T(S,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(R){Be(r,r.return,R)}}else bn(t,r,l,o);break;case 31:bn(t,r,l,o);break;case 13:bn(t,r,l,o);break;case 23:break;case 22:p=r.stateNode,S=r.alternate,r.memoizedState!==null?p._visibility&2?bn(t,r,l,o):rl(t,r):p._visibility&2?bn(t,r,l,o):(p._visibility|=2,Yi(t,r,l,o,(r.subtreeFlags&10256)!==0||!1)),d&2048&&nf(S,r);break;case 24:bn(t,r,l,o),d&2048&&rf(r.alternate,r);break;default:bn(t,r,l,o)}}function Yi(t,r,l,o,d){for(d=d&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var p=t,S=r,T=l,R=o,I=S.flags;switch(S.tag){case 0:case 11:case 15:Yi(p,S,T,R,d),tl(8,S);break;case 23:break;case 22:var X=S.stateNode;S.memoizedState!==null?X._visibility&2?Yi(p,S,T,R,d):rl(p,S):(X._visibility|=2,Yi(p,S,T,R,d)),d&&I&2048&&nf(S.alternate,S);break;case 24:Yi(p,S,T,R,d),d&&I&2048&&rf(S.alternate,S);break;default:Yi(p,S,T,R,d)}r=r.sibling}}function rl(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var l=t,o=r,d=o.flags;switch(o.tag){case 22:rl(l,o),d&2048&&nf(o.alternate,o);break;case 24:rl(l,o),d&2048&&rf(o.alternate,o);break;default:rl(l,o)}r=r.sibling}}var il=8192;function Xi(t,r,l){if(t.subtreeFlags&il)for(t=t.child;t!==null;)Wg(t,r,l),t=t.sibling}function Wg(t,r,l){switch(t.tag){case 26:Xi(t,r,l),t.flags&il&&t.memoizedState!==null&&eT(l,xn,t.memoizedState,t.memoizedProps);break;case 5:Xi(t,r,l);break;case 3:case 4:var o=xn;xn=uo(t.stateNode.containerInfo),Xi(t,r,l),xn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=il,il=16777216,Xi(t,r,l),il=o):Xi(t,r,l));break;default:Xi(t,r,l)}}function $g(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function al(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var l=0;l<r.length;l++){var o=r[l];mt=o,ty(o,t)}$g(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ey(t),t=t.sibling}function ey(t){switch(t.tag){case 0:case 11:case 15:al(t),t.flags&2048&&wr(9,t,t.return);break;case 3:al(t);break;case 12:al(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,Ks(t)):al(t);break;default:al(t)}}function Ks(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var l=0;l<r.length;l++){var o=r[l];mt=o,ty(o,t)}$g(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:wr(8,r,r.return),Ks(r);break;case 22:l=r.stateNode,l._visibility&2&&(l._visibility&=-3,Ks(r));break;default:Ks(r)}t=t.sibling}}function ty(t,r){for(;mt!==null;){var l=mt;switch(l.tag){case 0:case 11:case 15:wr(8,l,r);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var o=l.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ha(l.memoizedState.cache)}if(o=l.child,o!==null)o.return=l,mt=o;else e:for(l=t;mt!==null;){o=mt;var d=o.sibling,p=o.return;if(Gg(o),o===l){mt=null;break e}if(d!==null){d.return=p,mt=d;break e}mt=p}}}var pw={getCacheForType:function(t){var r=yt(it),l=r.data.get(t);return l===void 0&&(l=t(),r.data.set(t,l)),l},cacheSignal:function(){return yt(it).controller.signal}},gw=typeof WeakMap=="function"?WeakMap:Map,_e=0,Fe=null,Ce=null,Me=0,ze=0,Yt=null,Tr=!1,Ji=!1,af=!1,nr=0,et=0,Cr=0,li=0,lf=0,Xt=0,Qi=0,ll=null,Bt=null,sf=!1,Zs=0,ny=0,Ws=1/0,$s=null,kr=null,ft=0,Ar=null,Ki=null,rr=0,of=0,uf=null,ry=null,sl=0,cf=null;function Jt(){return(_e&2)!==0&&Me!==0?Me&-Me:P.T!==null?gf():bm()}function iy(){if(Xt===0)if((Me&536870912)===0||De){var t=ss;ss<<=1,(ss&3932160)===0&&(ss=262144),Xt=t}else Xt=536870912;return t=qt.current,t!==null&&(t.flags|=32),Xt}function Vt(t,r,l){(t===Fe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(Zi(t,0),Er(t,Me,Xt,!1)),Ma(t,l),((_e&2)===0||t!==Fe)&&(t===Fe&&((_e&2)===0&&(li|=l),et===4&&Er(t,Me,Xt,!1)),Dn(t))}function ay(t,r,l){if((_e&6)!==0)throw Error(a(327));var o=!l&&(r&127)===0&&(r&t.expiredLanes)===0||Ea(t,r),d=o?bw(t,r):df(t,r,!0),p=o;do{if(d===0){Ji&&!o&&Er(t,r,0,!1);break}else{if(l=t.current.alternate,p&&!yw(l)){d=df(t,r,!1),p=!1;continue}if(d===2){if(p=r,t.errorRecoveryDisabledLanes&p)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){r=S;e:{var T=t;d=ll;var R=T.current.memoizedState.isDehydrated;if(R&&(Zi(T,S).flags|=256),S=df(T,S,!1),S!==2){if(af&&!R){T.errorRecoveryDisabledLanes|=p,li|=p,d=4;break e}p=Bt,Bt=d,p!==null&&(Bt===null?Bt=p:Bt.push.apply(Bt,p))}d=S}if(p=!1,d!==2)continue}}if(d===1){Zi(t,0),Er(t,r,0,!0);break}e:{switch(o=t,p=d,p){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Er(o,r,Xt,!Tr);break e;case 2:Bt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(d=Zs+300-kt(),10<d)){if(Er(o,r,Xt,!Tr),us(o,0,!0)!==0)break e;rr=r,o.timeoutHandle=zy(ly.bind(null,o,l,Bt,$s,sf,r,Xt,li,Qi,Tr,p,"Throttled",-0,0),d);break e}ly(o,l,Bt,$s,sf,r,Xt,li,Qi,Tr,p,null,-0,0)}}break}while(!0);Dn(t)}function ly(t,r,l,o,d,p,S,T,R,I,X,W,H,q){if(t.timeoutHandle=-1,W=r.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hn},Wg(r,p,W);var oe=(p&62914560)===p?Zs-kt():(p&4194048)===p?ny-kt():0;if(oe=tT(W,oe),oe!==null){rr=p,t.cancelPendingCommit=oe(my.bind(null,t,r,p,l,o,d,S,T,R,X,W,null,H,q)),Er(t,p,S,!I);return}}my(t,r,p,l,o,d,S,T,R)}function yw(t){for(var r=t;;){var l=r.tag;if((l===0||l===11||l===15)&&r.flags&16384&&(l=r.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var o=0;o<l.length;o++){var d=l[o],p=d.getSnapshot;d=d.value;try{if(!Ht(p(),d))return!1}catch{return!1}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Er(t,r,l,o){r&=~lf,r&=~li,t.suspendedLanes|=r,t.pingedLanes&=~r,o&&(t.warmLanes|=r),o=t.expirationTimes;for(var d=r;0<d;){var p=31-He(d),S=1<<p;o[p]=-1,d&=~S}l!==0&&gm(t,l,r)}function eo(){return(_e&6)===0?(ol(0),!1):!0}function ff(){if(Ce!==null){if(ze===0)var t=Ce.return;else t=Ce,Yn=Zr=null,Ac(t),Ii=null,qa=0,t=Ce;for(;t!==null;)Bg(t.alternate,t),t=t.return;Ce=null}}function Zi(t,r){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Bw(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),rr=0,ff(),Fe=t,Ce=l=qn(t.current,null),Me=r,ze=0,Yt=null,Tr=!1,Ji=Ea(t,r),af=!1,Qi=Xt=lf=li=Cr=et=0,Bt=ll=null,sf=!1,(r&8)!==0&&(r|=r&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=r;0<o;){var d=31-He(o),p=1<<d;r|=t[d],o&=~p}return nr=r,Ss(),l}function sy(t,r){ve=null,P.H=Wa,r===Ui||r===js?(r=Tp(),ze=3):r===mc?(r=Tp(),ze=4):ze=r===Hc?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Yt=r,Ce===null&&(et=1,Fs(t,rn(r,t.current)))}function oy(){var t=qt.current;return t===null?!0:(Me&4194048)===Me?on===null:(Me&62914560)===Me||(Me&536870912)!==0?t===on:!1}function uy(){var t=P.H;return P.H=Wa,t===null?Wa:t}function cy(){var t=P.A;return P.A=pw,t}function to(){et=4,Tr||(Me&4194048)!==Me&&qt.current!==null||(Ji=!0),(Cr&134217727)===0&&(li&134217727)===0||Fe===null||Er(Fe,Me,Xt,!1)}function df(t,r,l){var o=_e;_e|=2;var d=uy(),p=cy();(Fe!==t||Me!==r)&&($s=null,Zi(t,r)),r=!1;var S=et;e:do try{if(ze!==0&&Ce!==null){var T=Ce,R=Yt;switch(ze){case 8:ff(),S=6;break e;case 3:case 2:case 9:case 6:qt.current===null&&(r=!0);var I=ze;if(ze=0,Yt=null,Wi(t,T,R,I),l&&Ji){S=0;break e}break;default:I=ze,ze=0,Yt=null,Wi(t,T,R,I)}}xw(),S=et;break}catch(X){sy(t,X)}while(!0);return r&&t.shellSuspendCounter++,Yn=Zr=null,_e=o,P.H=d,P.A=p,Ce===null&&(Fe=null,Me=0,Ss()),S}function xw(){for(;Ce!==null;)fy(Ce)}function bw(t,r){var l=_e;_e|=2;var o=uy(),d=cy();Fe!==t||Me!==r?($s=null,Ws=kt()+500,Zi(t,r)):Ji=Ea(t,r);e:do try{if(ze!==0&&Ce!==null){r=Ce;var p=Yt;t:switch(ze){case 1:ze=0,Yt=null,Wi(t,r,p,1);break;case 2:case 9:if(Sp(p)){ze=0,Yt=null,dy(r);break}r=function(){ze!==2&&ze!==9||Fe!==t||(ze=7),Dn(t)},p.then(r,r);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Sp(p)?(ze=0,Yt=null,dy(r)):(ze=0,Yt=null,Wi(t,r,p,7));break;case 5:var S=null;switch(Ce.tag){case 26:S=Ce.memoizedState;case 5:case 27:var T=Ce;if(S?Zy(S):T.stateNode.complete){ze=0,Yt=null;var R=T.sibling;if(R!==null)Ce=R;else{var I=T.return;I!==null?(Ce=I,no(I)):Ce=null}break t}}ze=0,Yt=null,Wi(t,r,p,5);break;case 6:ze=0,Yt=null,Wi(t,r,p,6);break;case 8:ff(),et=6;break e;default:throw Error(a(462))}}vw();break}catch(X){sy(t,X)}while(!0);return Yn=Zr=null,P.H=o,P.A=d,_e=l,Ce!==null?0:(Fe=null,Me=0,Ss(),et)}function vw(){for(;Ce!==null&&!Cu();)fy(Ce)}function fy(t){var r=Lg(t.alternate,t,nr);t.memoizedProps=t.pendingProps,r===null?no(t):Ce=r}function dy(t){var r=t,l=r.alternate;switch(r.tag){case 15:case 0:r=jg(l,r,r.pendingProps,r.type,void 0,Me);break;case 11:r=jg(l,r,r.pendingProps,r.type.render,r.ref,Me);break;case 5:Ac(r);default:Bg(l,r),r=Ce=cp(r,nr),r=Lg(l,r,nr)}t.memoizedProps=t.pendingProps,r===null?no(t):Ce=r}function Wi(t,r,l,o){Yn=Zr=null,Ac(r),Ii=null,qa=0;var d=r.return;try{if(ow(t,d,r,l,Me)){et=1,Fs(t,rn(l,t.current)),Ce=null;return}}catch(p){if(d!==null)throw Ce=d,p;et=1,Fs(t,rn(l,t.current)),Ce=null;return}r.flags&32768?(De||o===1?t=!0:Ji||(Me&536870912)!==0?t=!1:(Tr=t=!0,(o===2||o===9||o===3||o===6)&&(o=qt.current,o!==null&&o.tag===13&&(o.flags|=16384))),hy(r,t)):no(r)}function no(t){var r=t;do{if((r.flags&32768)!==0){hy(r,Tr);return}t=r.return;var l=fw(r.alternate,r,nr);if(l!==null){Ce=l;return}if(r=r.sibling,r!==null){Ce=r;return}Ce=r=t}while(r!==null);et===0&&(et=5)}function hy(t,r){do{var l=dw(t.alternate,t);if(l!==null){l.flags&=32767,Ce=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!r&&(t=t.sibling,t!==null)){Ce=t;return}Ce=t=l}while(t!==null);et=6,Ce=null}function my(t,r,l,o,d,p,S,T,R){t.cancelPendingCommit=null;do ro();while(ft!==0);if((_e&6)!==0)throw Error(a(327));if(r!==null){if(r===t.current)throw Error(a(177));if(p=r.lanes|r.childLanes,p|=$u,$S(t,l,p,S,T,R),t===Fe&&(Ce=Fe=null,Me=0),Ki=r,Ar=t,rr=l,of=p,uf=d,ry=o,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Cw(xe,function(){return by(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,d=ee.p,ee.p=2,S=_e,_e|=4;try{hw(t,r,l)}finally{_e=S,ee.p=d,P.T=o}}ft=1,py(),gy(),yy()}}function py(){if(ft===1){ft=0;var t=Ar,r=Ki,l=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||l){l=P.T,P.T=null;var o=ee.p;ee.p=2;var d=_e;_e|=4;try{Qg(r,t);var p=Cf,S=tp(t.containerInfo),T=p.focusedElem,R=p.selectionRange;if(S!==T&&T&&T.ownerDocument&&ep(T.ownerDocument.documentElement,T)){if(R!==null&&Ju(T)){var I=R.start,X=R.end;if(X===void 0&&(X=I),"selectionStart"in T)T.selectionStart=I,T.selectionEnd=Math.min(X,T.value.length);else{var W=T.ownerDocument||document,H=W&&W.defaultView||window;if(H.getSelection){var q=H.getSelection(),oe=T.textContent.length,pe=Math.min(R.start,oe),Ie=R.end===void 0?pe:Math.min(R.end,oe);!q.extend&&pe>Ie&&(S=Ie,Ie=pe,pe=S);var B=$m(T,pe),z=$m(T,Ie);if(B&&z&&(q.rangeCount!==1||q.anchorNode!==B.node||q.anchorOffset!==B.offset||q.focusNode!==z.node||q.focusOffset!==z.offset)){var U=W.createRange();U.setStart(B.node,B.offset),q.removeAllRanges(),pe>Ie?(q.addRange(U),q.extend(z.node,z.offset)):(U.setEnd(z.node,z.offset),q.addRange(U))}}}}for(W=[],q=T;q=q.parentNode;)q.nodeType===1&&W.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<W.length;T++){var Z=W[T];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}go=!!Tf,Cf=Tf=null}finally{_e=d,ee.p=o,P.T=l}}t.current=r,ft=2}}function gy(){if(ft===2){ft=0;var t=Ar,r=Ki,l=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||l){l=P.T,P.T=null;var o=ee.p;ee.p=2;var d=_e;_e|=4;try{qg(t,r.alternate,r)}finally{_e=d,ee.p=o,P.T=l}}ft=3}}function yy(){if(ft===4||ft===3){ft=0,ku();var t=Ar,r=Ki,l=rr,o=ry;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?ft=5:(ft=0,Ki=Ar=null,xy(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(kr=null),ju(l),r=r.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(At,r,void 0,(r.current.flags&128)===128)}catch{}if(o!==null){r=P.T,d=ee.p,ee.p=2,P.T=null;try{for(var p=t.onRecoverableError,S=0;S<o.length;S++){var T=o[S];p(T.value,{componentStack:T.stack})}}finally{P.T=r,ee.p=d}}(rr&3)!==0&&ro(),Dn(t),d=t.pendingLanes,(l&261930)!==0&&(d&42)!==0?t===cf?sl++:(sl=0,cf=t):sl=0,ol(0)}}function xy(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,Ha(r)))}function ro(){return py(),gy(),yy(),by()}function by(){if(ft!==5)return!1;var t=Ar,r=of;of=0;var l=ju(rr),o=P.T,d=ee.p;try{ee.p=32>l?32:l,P.T=null,l=uf,uf=null;var p=Ar,S=rr;if(ft=0,Ki=Ar=null,rr=0,(_e&6)!==0)throw Error(a(331));var T=_e;if(_e|=4,ey(p.current),Zg(p,p.current,S,l),_e=T,ol(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(At,p)}catch{}return!0}finally{ee.p=d,P.T=o,xy(t,r)}}function vy(t,r,l){r=rn(l,r),r=Ic(t.stateNode,r,2),t=br(t,r,2),t!==null&&(Ma(t,2),Dn(t))}function Be(t,r,l){if(t.tag===3)vy(t,t,l);else for(;r!==null;){if(r.tag===3){vy(r,t,l);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(kr===null||!kr.has(o))){t=rn(l,t),l=Sg(2),o=br(r,l,2),o!==null&&(wg(l,o,r,t),Ma(o,2),Dn(o));break}}r=r.return}}function hf(t,r,l){var o=t.pingCache;if(o===null){o=t.pingCache=new gw;var d=new Set;o.set(r,d)}else d=o.get(r),d===void 0&&(d=new Set,o.set(r,d));d.has(l)||(af=!0,d.add(l),t=Sw.bind(null,t,r,l),r.then(t,t))}function Sw(t,r,l){var o=t.pingCache;o!==null&&o.delete(r),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Fe===t&&(Me&l)===l&&(et===4||et===3&&(Me&62914560)===Me&&300>kt()-Zs?(_e&2)===0&&Zi(t,0):lf|=l,Qi===Me&&(Qi=0)),Dn(t)}function Sy(t,r){r===0&&(r=pm()),t=Jr(t,r),t!==null&&(Ma(t,r),Dn(t))}function ww(t){var r=t.memoizedState,l=0;r!==null&&(l=r.retryLane),Sy(t,l)}function Tw(t,r){var l=0;switch(t.tag){case 31:case 13:var o=t.stateNode,d=t.memoizedState;d!==null&&(l=d.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(r),Sy(t,l)}function Cw(t,r){return bi(t,r)}var io=null,$i=null,mf=!1,ao=!1,pf=!1,Mr=0;function Dn(t){t!==$i&&t.next===null&&($i===null?io=$i=t:$i=$i.next=t),ao=!0,mf||(mf=!0,Aw())}function ol(t,r){if(!pf&&ao){pf=!0;do for(var l=!1,o=io;o!==null;){if(t!==0){var d=o.pendingLanes;if(d===0)var p=0;else{var S=o.suspendedLanes,T=o.pingedLanes;p=(1<<31-He(42|t)+1)-1,p&=d&~(S&~T),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(l=!0,ky(o,p))}else p=Me,p=us(o,o===Fe?p:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(p&3)===0||Ea(o,p)||(l=!0,ky(o,p));o=o.next}while(l);pf=!1}}function kw(){wy()}function wy(){ao=mf=!1;var t=0;Mr!==0&&zw()&&(t=Mr);for(var r=kt(),l=null,o=io;o!==null;){var d=o.next,p=Ty(o,r);p===0?(o.next=null,l===null?io=d:l.next=d,d===null&&($i=l)):(l=o,(t!==0||(p&3)!==0)&&(ao=!0)),o=d}ft!==0&&ft!==5||ol(t),Mr!==0&&(Mr=0)}function Ty(t,r){for(var l=t.suspendedLanes,o=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var S=31-He(p),T=1<<S,R=d[S];R===-1?((T&l)===0||(T&o)!==0)&&(d[S]=WS(T,r)):R<=r&&(t.expiredLanes|=T),p&=~T}if(r=Fe,l=Me,l=us(t,t===r?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,l===0||t===r&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Aa(o),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Ea(t,l)){if(r=l&-l,r===t.callbackPriority)return r;switch(o!==null&&Aa(o),ju(l)){case 2:case 8:l=ie;break;case 32:l=xe;break;case 268435456:l=Le;break;default:l=xe}return o=Cy.bind(null,t),l=bi(l,o),t.callbackPriority=r,t.callbackNode=l,r}return o!==null&&o!==null&&Aa(o),t.callbackPriority=2,t.callbackNode=null,2}function Cy(t,r){if(ft!==0&&ft!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(ro()&&t.callbackNode!==l)return null;var o=Me;return o=us(t,t===Fe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(ay(t,o,r),Ty(t,kt()),t.callbackNode!=null&&t.callbackNode===l?Cy.bind(null,t):null)}function ky(t,r){if(ro())return null;ay(t,r,!0)}function Aw(){Vw(function(){(_e&6)!==0?bi(K,kw):wy()})}function gf(){if(Mr===0){var t=Vi;t===0&&(t=ls,ls<<=1,(ls&261888)===0&&(ls=256)),Mr=t}return Mr}function Ay(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hs(""+t)}function Ey(t,r){var l=r.ownerDocument.createElement("input");return l.name=r.name,l.value=r.value,t.id&&l.setAttribute("form",t.id),r.parentNode.insertBefore(l,r),t=new FormData(t),l.parentNode.removeChild(l),t}function Ew(t,r,l,o,d){if(r==="submit"&&l&&l.stateNode===d){var p=Ay((d[Nt]||null).action),S=o.submitter;S&&(r=(r=S[Nt]||null)?Ay(r.formAction):S.getAttribute("formAction"),r!==null&&(p=r,S=null));var T=new ys("action","action",null,o,d);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Mr!==0){var R=S?Ey(d,S):new FormData(d);Lc(l,{pending:!0,data:R,method:d.method,action:p},null,R)}}else typeof p=="function"&&(T.preventDefault(),R=S?Ey(d,S):new FormData(d),Lc(l,{pending:!0,data:R,method:d.method,action:p},p,R))},currentTarget:d}]})}}for(var yf=0;yf<Wu.length;yf++){var xf=Wu[yf],Mw=xf.toLowerCase(),jw=xf[0].toUpperCase()+xf.slice(1);yn(Mw,"on"+jw)}yn(ip,"onAnimationEnd"),yn(ap,"onAnimationIteration"),yn(lp,"onAnimationStart"),yn("dblclick","onDoubleClick"),yn("focusin","onFocus"),yn("focusout","onBlur"),yn(G2,"onTransitionRun"),yn(Y2,"onTransitionStart"),yn(X2,"onTransitionCancel"),yn(sp,"onTransitionEnd"),Ci("onMouseEnter",["mouseout","mouseover"]),Ci("onMouseLeave",["mouseout","mouseover"]),Ci("onPointerEnter",["pointerout","pointerover"]),Ci("onPointerLeave",["pointerout","pointerover"]),qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qr("onBeforeInput",["compositionend","keypress","textInput","paste"]),qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function My(t,r){r=(r&4)!==0;for(var l=0;l<t.length;l++){var o=t[l],d=o.event;o=o.listeners;e:{var p=void 0;if(r)for(var S=o.length-1;0<=S;S--){var T=o[S],R=T.instance,I=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;p=T,d.currentTarget=I;try{p(d)}catch(X){vs(X)}d.currentTarget=null,p=R}else for(S=0;S<o.length;S++){if(T=o[S],R=T.instance,I=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;p=T,d.currentTarget=I;try{p(d)}catch(X){vs(X)}d.currentTarget=null,p=R}}}}function ke(t,r){var l=r[Du];l===void 0&&(l=r[Du]=new Set);var o=t+"__bubble";l.has(o)||(jy(r,t,2,!1),l.add(o))}function bf(t,r,l){var o=0;r&&(o|=4),jy(l,t,o,r)}var lo="_reactListening"+Math.random().toString(36).slice(2);function vf(t){if(!t[lo]){t[lo]=!0,wm.forEach(function(l){l!=="selectionchange"&&(Dw.has(l)||bf(l,!1,t),bf(l,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[lo]||(r[lo]=!0,bf("selectionchange",!1,r))}}function jy(t,r,l,o){switch(ix(r)){case 2:var d=iT;break;case 8:d=aT;break;default:d=Lf}l=d.bind(null,r,l,t),d=void 0,!Pu||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),o?d!==void 0?t.addEventListener(r,l,{capture:!0,passive:d}):t.addEventListener(r,l,!0):d!==void 0?t.addEventListener(r,l,{passive:d}):t.addEventListener(r,l,!1)}function Sf(t,r,l,o,d){var p=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===d)break;if(S===4)for(S=o.return;S!==null;){var R=S.tag;if((R===3||R===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;T!==null;){if(S=Si(T),S===null)return;if(R=S.tag,R===5||R===6||R===26||R===27){o=p=S;continue e}T=T.parentNode}}o=o.return}_m(function(){var I=p,X=Bu(l),W=[];e:{var H=op.get(t);if(H!==void 0){var q=ys,oe=t;switch(t){case"keypress":if(ps(l)===0)break e;case"keydown":case"keyup":q=T2;break;case"focusin":oe="focus",q=Fu;break;case"focusout":oe="blur",q=Fu;break;case"beforeblur":case"afterblur":q=Fu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=f2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=A2;break;case ip:case ap:case lp:q=m2;break;case sp:q=M2;break;case"scroll":case"scrollend":q=u2;break;case"wheel":q=D2;break;case"copy":case"cut":case"paste":q=g2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Pm;break;case"toggle":case"beforetoggle":q=N2}var pe=(r&4)!==0,Ie=!pe&&(t==="scroll"||t==="scrollend"),B=pe?H!==null?H+"Capture":null:H;pe=[];for(var z=I,U;z!==null;){var Z=z;if(U=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||U===null||B===null||(Z=Ra(z,B),Z!=null&&pe.push(cl(z,Z,U))),Ie)break;z=z.return}0<pe.length&&(H=new q(H,oe,null,l,X),W.push({event:H,listeners:pe}))}}if((r&7)===0){e:{if(H=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",H&&l!==zu&&(oe=l.relatedTarget||l.fromElement)&&(Si(oe)||oe[vi]))break e;if((q||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,q?(oe=l.relatedTarget||l.toElement,q=I,oe=oe?Si(oe):null,oe!==null&&(Ie=c(oe),pe=oe.tag,oe!==Ie||pe!==5&&pe!==27&&pe!==6)&&(oe=null)):(q=null,oe=I),q!==oe)){if(pe=Bm,Z="onMouseLeave",B="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(pe=Pm,Z="onPointerLeave",B="onPointerEnter",z="pointer"),Ie=q==null?H:Da(q),U=oe==null?H:Da(oe),H=new pe(Z,z+"leave",q,l,X),H.target=Ie,H.relatedTarget=U,Z=null,Si(X)===I&&(pe=new pe(B,z+"enter",oe,l,X),pe.target=U,pe.relatedTarget=Ie,Z=pe),Ie=Z,q&&oe)t:{for(pe=Rw,B=q,z=oe,U=0,Z=B;Z;Z=pe(Z))U++;Z=0;for(var he=z;he;he=pe(he))Z++;for(;0<U-Z;)B=pe(B),U--;for(;0<Z-U;)z=pe(z),Z--;for(;U--;){if(B===z||z!==null&&B===z.alternate){pe=B;break t}B=pe(B),z=pe(z)}pe=null}else pe=null;q!==null&&Dy(W,H,q,pe,!1),oe!==null&&Ie!==null&&Dy(W,Ie,oe,pe,!0)}}e:{if(H=I?Da(I):window,q=H.nodeName&&H.nodeName.toLowerCase(),q==="select"||q==="input"&&H.type==="file")var Ne=Xm;else if(Gm(H))if(Jm)Ne=H2;else{Ne=U2;var fe=P2}else q=H.nodeName,!q||q.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?I&&Lu(I.elementType)&&(Ne=Xm):Ne=I2;if(Ne&&(Ne=Ne(t,I))){Ym(W,Ne,l,X);break e}fe&&fe(t,H,I),t==="focusout"&&I&&H.type==="number"&&I.memoizedProps.value!=null&&_u(H,"number",H.value)}switch(fe=I?Da(I):window,t){case"focusin":(Gm(fe)||fe.contentEditable==="true")&&(Di=fe,Qu=I,Pa=null);break;case"focusout":Pa=Qu=Di=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,np(W,l,X);break;case"selectionchange":if(q2)break;case"keydown":case"keyup":np(W,l,X)}var Se;if(Gu)e:{switch(t){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else ji?Fm(t,l)&&(je="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(je="onCompositionStart");je&&(Um&&l.locale!=="ko"&&(ji||je!=="onCompositionStart"?je==="onCompositionEnd"&&ji&&(Se=Lm()):(dr=X,Uu="value"in dr?dr.value:dr.textContent,ji=!0)),fe=so(I,je),0<fe.length&&(je=new Vm(je,t,null,l,X),W.push({event:je,listeners:fe}),Se?je.data=Se:(Se=qm(l),Se!==null&&(je.data=Se)))),(Se=_2?L2(t,l):z2(t,l))&&(je=so(I,"onBeforeInput"),0<je.length&&(fe=new Vm("onBeforeInput","beforeinput",null,l,X),W.push({event:fe,listeners:je}),fe.data=Se)),Ew(W,t,I,l,X)}My(W,r)})}function cl(t,r,l){return{instance:t,listener:r,currentTarget:l}}function so(t,r){for(var l=r+"Capture",o=[];t!==null;){var d=t,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=Ra(t,l),d!=null&&o.unshift(cl(t,d,p)),d=Ra(t,r),d!=null&&o.push(cl(t,d,p))),t.tag===3)return o;t=t.return}return[]}function Rw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Dy(t,r,l,o,d){for(var p=r._reactName,S=[];l!==null&&l!==o;){var T=l,R=T.alternate,I=T.stateNode;if(T=T.tag,R!==null&&R===o)break;T!==5&&T!==26&&T!==27||I===null||(R=I,d?(I=Ra(l,p),I!=null&&S.unshift(cl(l,I,R))):d||(I=Ra(l,p),I!=null&&S.push(cl(l,I,R)))),l=l.return}S.length!==0&&t.push({event:r,listeners:S})}var Nw=/\r\n?/g,Ow=/\u0000|\uFFFD/g;function Ry(t){return(typeof t=="string"?t:""+t).replace(Nw,`
`).replace(Ow,"")}function Ny(t,r){return r=Ry(r),Ry(t)===r}function Ue(t,r,l,o,d,p){switch(l){case"children":typeof o=="string"?r==="body"||r==="textarea"&&o===""||Ai(t,o):(typeof o=="number"||typeof o=="bigint")&&r!=="body"&&Ai(t,""+o);break;case"className":fs(t,"class",o);break;case"tabIndex":fs(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":fs(t,l,o);break;case"style":Nm(t,o,p);break;case"data":if(r!=="object"){fs(t,"data",o);break}case"src":case"href":if(o===""&&(r!=="a"||l!=="href")){t.removeAttribute(l);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(l);break}o=hs(""+o),t.setAttribute(l,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(l==="formAction"?(r!=="input"&&Ue(t,r,"name",d.name,d,null),Ue(t,r,"formEncType",d.formEncType,d,null),Ue(t,r,"formMethod",d.formMethod,d,null),Ue(t,r,"formTarget",d.formTarget,d,null)):(Ue(t,r,"encType",d.encType,d,null),Ue(t,r,"method",d.method,d,null),Ue(t,r,"target",d.target,d,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(l);break}o=hs(""+o),t.setAttribute(l,o);break;case"onClick":o!=null&&(t.onclick=Hn);break;case"onScroll":o!=null&&ke("scroll",t);break;case"onScrollEnd":o!=null&&ke("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(l=o.__html,l!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=l}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}l=hs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(l,""+o):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":o===!0?t.setAttribute(l,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(l,o):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(l,o):t.removeAttribute(l);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(l):t.setAttribute(l,o);break;case"popover":ke("beforetoggle",t),ke("toggle",t),cs(t,"popover",o);break;case"xlinkActuate":In(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":In(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":In(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":In(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":In(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":In(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":In(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":In(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":In(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":cs(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=s2.get(l)||l,cs(t,l,o))}}function wf(t,r,l,o,d,p){switch(l){case"style":Nm(t,o,p);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(l=o.__html,l!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=l}}break;case"children":typeof o=="string"?Ai(t,o):(typeof o=="number"||typeof o=="bigint")&&Ai(t,""+o);break;case"onScroll":o!=null&&ke("scroll",t);break;case"onScrollEnd":o!=null&&ke("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tm.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(d=l.endsWith("Capture"),r=l.slice(2,d?l.length-7:void 0),p=t[Nt]||null,p=p!=null?p[l]:null,typeof p=="function"&&t.removeEventListener(r,p,d),typeof o=="function")){typeof p!="function"&&p!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(r,o,d);break e}l in t?t[l]=o:o===!0?t.setAttribute(l,""):cs(t,l,o)}}}function bt(t,r,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",t),ke("load",t);var o=!1,d=!1,p;for(p in l)if(l.hasOwnProperty(p)){var S=l[p];if(S!=null)switch(p){case"src":o=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ue(t,r,p,S,l,null)}}d&&Ue(t,r,"srcSet",l.srcSet,l,null),o&&Ue(t,r,"src",l.src,l,null);return;case"input":ke("invalid",t);var T=p=S=d=null,R=null,I=null;for(o in l)if(l.hasOwnProperty(o)){var X=l[o];if(X!=null)switch(o){case"name":d=X;break;case"type":S=X;break;case"checked":R=X;break;case"defaultChecked":I=X;break;case"value":p=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,r));break;default:Ue(t,r,o,X,l,null)}}Mm(t,p,T,R,I,S,d,!1);return;case"select":ke("invalid",t),o=S=p=null;for(d in l)if(l.hasOwnProperty(d)&&(T=l[d],T!=null))switch(d){case"value":p=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Ue(t,r,d,T,l,null)}r=p,l=S,t.multiple=!!o,r!=null?ki(t,!!o,r,!1):l!=null&&ki(t,!!o,l,!0);return;case"textarea":ke("invalid",t),p=d=o=null;for(S in l)if(l.hasOwnProperty(S)&&(T=l[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":d=T;break;case"children":p=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Ue(t,r,S,T,l,null)}Dm(t,o,d,p);return;case"option":for(R in l)if(l.hasOwnProperty(R)&&(o=l[R],o!=null))switch(R){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ue(t,r,R,o,l,null)}return;case"dialog":ke("beforetoggle",t),ke("toggle",t),ke("cancel",t),ke("close",t);break;case"iframe":case"object":ke("load",t);break;case"video":case"audio":for(o=0;o<ul.length;o++)ke(ul[o],t);break;case"image":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"embed":case"source":case"link":ke("error",t),ke("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in l)if(l.hasOwnProperty(I)&&(o=l[I],o!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ue(t,r,I,o,l,null)}return;default:if(Lu(r)){for(X in l)l.hasOwnProperty(X)&&(o=l[X],o!==void 0&&wf(t,r,X,o,l,void 0));return}}for(T in l)l.hasOwnProperty(T)&&(o=l[T],o!=null&&Ue(t,r,T,o,l,null))}function _w(t,r,l,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,S=null,T=null,R=null,I=null,X=null;for(q in l){var W=l[q];if(l.hasOwnProperty(q)&&W!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=W;default:o.hasOwnProperty(q)||Ue(t,r,q,null,o,W)}}for(var H in o){var q=o[H];if(W=l[H],o.hasOwnProperty(H)&&(q!=null||W!=null))switch(H){case"type":p=q;break;case"name":d=q;break;case"checked":I=q;break;case"defaultChecked":X=q;break;case"value":S=q;break;case"defaultValue":T=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,r));break;default:q!==W&&Ue(t,r,H,q,o,W)}}Ou(t,S,T,R,I,X,p,d);return;case"select":q=S=T=H=null;for(p in l)if(R=l[p],l.hasOwnProperty(p)&&R!=null)switch(p){case"value":break;case"multiple":q=R;default:o.hasOwnProperty(p)||Ue(t,r,p,null,o,R)}for(d in o)if(p=o[d],R=l[d],o.hasOwnProperty(d)&&(p!=null||R!=null))switch(d){case"value":H=p;break;case"defaultValue":T=p;break;case"multiple":S=p;default:p!==R&&Ue(t,r,d,p,o,R)}r=T,l=S,o=q,H!=null?ki(t,!!l,H,!1):!!o!=!!l&&(r!=null?ki(t,!!l,r,!0):ki(t,!!l,l?[]:"",!1));return;case"textarea":q=H=null;for(T in l)if(d=l[T],l.hasOwnProperty(T)&&d!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ue(t,r,T,null,o,d)}for(S in o)if(d=o[S],p=l[S],o.hasOwnProperty(S)&&(d!=null||p!=null))switch(S){case"value":H=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==p&&Ue(t,r,S,d,o,p)}jm(t,H,q);return;case"option":for(var oe in l)if(H=l[oe],l.hasOwnProperty(oe)&&H!=null&&!o.hasOwnProperty(oe))switch(oe){case"selected":t.selected=!1;break;default:Ue(t,r,oe,null,o,H)}for(R in o)if(H=o[R],q=l[R],o.hasOwnProperty(R)&&H!==q&&(H!=null||q!=null))switch(R){case"selected":t.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Ue(t,r,R,H,o,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in l)H=l[pe],l.hasOwnProperty(pe)&&H!=null&&!o.hasOwnProperty(pe)&&Ue(t,r,pe,null,o,H);for(I in o)if(H=o[I],q=l[I],o.hasOwnProperty(I)&&H!==q&&(H!=null||q!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,r));break;default:Ue(t,r,I,H,o,q)}return;default:if(Lu(r)){for(var Ie in l)H=l[Ie],l.hasOwnProperty(Ie)&&H!==void 0&&!o.hasOwnProperty(Ie)&&wf(t,r,Ie,void 0,o,H);for(X in o)H=o[X],q=l[X],!o.hasOwnProperty(X)||H===q||H===void 0&&q===void 0||wf(t,r,X,H,o,q);return}}for(var B in l)H=l[B],l.hasOwnProperty(B)&&H!=null&&!o.hasOwnProperty(B)&&Ue(t,r,B,null,o,H);for(W in o)H=o[W],q=l[W],!o.hasOwnProperty(W)||H===q||H==null&&q==null||Ue(t,r,W,H,o,q)}function Oy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lw(){if(typeof performance.getEntriesByType=="function"){for(var t=0,r=0,l=performance.getEntriesByType("resource"),o=0;o<l.length;o++){var d=l[o],p=d.transferSize,S=d.initiatorType,T=d.duration;if(p&&T&&Oy(S)){for(S=0,T=d.responseEnd,o+=1;o<l.length;o++){var R=l[o],I=R.startTime;if(I>T)break;var X=R.transferSize,W=R.initiatorType;X&&Oy(W)&&(R=R.responseEnd,S+=X*(R<T?1:(T-I)/(R-I)))}if(--o,r+=8*(p+S)/(d.duration/1e3),t++,10<t)break}}if(0<t)return r/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Tf=null,Cf=null;function oo(t){return t.nodeType===9?t:t.ownerDocument}function _y(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ly(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function kf(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Af=null;function zw(){var t=window.event;return t&&t.type==="popstate"?t===Af?!1:(Af=t,!0):(Af=null,!1)}var zy=typeof setTimeout=="function"?setTimeout:void 0,Bw=typeof clearTimeout=="function"?clearTimeout:void 0,By=typeof Promise=="function"?Promise:void 0,Vw=typeof queueMicrotask=="function"?queueMicrotask:typeof By<"u"?function(t){return By.resolve(null).then(t).catch(Pw)}:zy;function Pw(t){setTimeout(function(){throw t})}function jr(t){return t==="head"}function Vy(t,r){var l=r,o=0;do{var d=l.nextSibling;if(t.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"||l==="/&"){if(o===0){t.removeChild(d),ra(r);return}o--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")o++;else if(l==="html")fl(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,fl(l);for(var p=l.firstChild;p;){var S=p.nextSibling,T=p.nodeName;p[ja]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&p.rel.toLowerCase()==="stylesheet"||l.removeChild(p),p=S}}else l==="body"&&fl(t.ownerDocument.body);l=d}while(l);ra(r)}function Py(t,r){var l=t;t=0;do{var o=l.nextSibling;if(l.nodeType===1?r?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(r?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),o&&o.nodeType===8)if(l=o.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=o}while(l)}function Ef(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var l=r;switch(r=r.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ef(l),Ru(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Uw(t,r,l,o){for(;t.nodeType===1;){var d=l;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ja])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=un(t.nextSibling),t===null)break}return null}function Iw(t,r,l){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=un(t.nextSibling),t===null))return null;return t}function Uy(t,r){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=un(t.nextSibling),t===null))return null;return t}function Mf(t){return t.data==="$?"||t.data==="$~"}function jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Hw(t,r){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=r;else if(t.data!=="$?"||l.readyState!=="loading")r();else{var o=function(){r(),l.removeEventListener("DOMContentLoaded",o)};l.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function un(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return t}var Df=null;function Iy(t){t=t.nextSibling;for(var r=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(r===0)return un(t.nextSibling);r--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||r++}t=t.nextSibling}return null}function Hy(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(r===0)return t;r--}else l!=="/$"&&l!=="/&"||r++}t=t.previousSibling}return null}function Fy(t,r,l){switch(r=oo(l),t){case"html":if(t=r.documentElement,!t)throw Error(a(452));return t;case"head":if(t=r.head,!t)throw Error(a(453));return t;case"body":if(t=r.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function fl(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Ru(t)}var cn=new Map,qy=new Set;function uo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ir=ee.d;ee.d={f:Fw,r:qw,D:Gw,C:Yw,L:Xw,m:Jw,X:Kw,S:Qw,M:Zw};function Fw(){var t=ir.f(),r=eo();return t||r}function qw(t){var r=wi(t);r!==null&&r.tag===5&&r.type==="form"?sg(r):ir.r(t)}var ea=typeof document>"u"?null:document;function Gy(t,r,l){var o=ea;if(o&&typeof r=="string"&&r){var d=tn(r);d='link[rel="'+t+'"][href="'+d+'"]',typeof l=="string"&&(d+='[crossorigin="'+l+'"]'),qy.has(d)||(qy.add(d),t={rel:t,crossOrigin:l,href:r},o.querySelector(d)===null&&(r=o.createElement("link"),bt(r,"link",t),ht(r),o.head.appendChild(r)))}}function Gw(t){ir.D(t),Gy("dns-prefetch",t,null)}function Yw(t,r){ir.C(t,r),Gy("preconnect",t,r)}function Xw(t,r,l){ir.L(t,r,l);var o=ea;if(o&&t&&r){var d='link[rel="preload"][as="'+tn(r)+'"]';r==="image"&&l&&l.imageSrcSet?(d+='[imagesrcset="'+tn(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(d+='[imagesizes="'+tn(l.imageSizes)+'"]')):d+='[href="'+tn(t)+'"]';var p=d;switch(r){case"style":p=ta(t);break;case"script":p=na(t)}cn.has(p)||(t=g({rel:"preload",href:r==="image"&&l&&l.imageSrcSet?void 0:t,as:r},l),cn.set(p,t),o.querySelector(d)!==null||r==="style"&&o.querySelector(dl(p))||r==="script"&&o.querySelector(hl(p))||(r=o.createElement("link"),bt(r,"link",t),ht(r),o.head.appendChild(r)))}}function Jw(t,r){ir.m(t,r);var l=ea;if(l&&t){var o=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+tn(o)+'"][href="'+tn(t)+'"]',p=d;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=na(t)}if(!cn.has(p)&&(t=g({rel:"modulepreload",href:t},r),cn.set(p,t),l.querySelector(d)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(hl(p)))return}o=l.createElement("link"),bt(o,"link",t),ht(o),l.head.appendChild(o)}}}function Qw(t,r,l){ir.S(t,r,l);var o=ea;if(o&&t){var d=Ti(o).hoistableStyles,p=ta(t);r=r||"default";var S=d.get(p);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(dl(p)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":r},l),(l=cn.get(p))&&Rf(t,l);var R=S=o.createElement("link");ht(R),bt(R,"link",t),R._p=new Promise(function(I,X){R.onload=I,R.onerror=X}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,co(S,r,o)}S={type:"stylesheet",instance:S,count:1,state:T},d.set(p,S)}}}function Kw(t,r){ir.X(t,r);var l=ea;if(l&&t){var o=Ti(l).hoistableScripts,d=na(t),p=o.get(d);p||(p=l.querySelector(hl(d)),p||(t=g({src:t,async:!0},r),(r=cn.get(d))&&Nf(t,r),p=l.createElement("script"),ht(p),bt(p,"link",t),l.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(d,p))}}function Zw(t,r){ir.M(t,r);var l=ea;if(l&&t){var o=Ti(l).hoistableScripts,d=na(t),p=o.get(d);p||(p=l.querySelector(hl(d)),p||(t=g({src:t,async:!0,type:"module"},r),(r=cn.get(d))&&Nf(t,r),p=l.createElement("script"),ht(p),bt(p,"link",t),l.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(d,p))}}function Yy(t,r,l,o){var d=(d=de.current)?uo(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(r=ta(l.href),l=Ti(d).hoistableStyles,o=l.get(r),o||(o={type:"style",instance:null,count:0,state:null},l.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=ta(l.href);var p=Ti(d).hoistableStyles,S=p.get(t);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,S),(p=d.querySelector(dl(t)))&&!p._p&&(S.instance=p,S.state.loading=5),cn.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},cn.set(t,l),p||Ww(d,t,l,S.state))),r&&o===null)throw Error(a(528,""));return S}if(r&&o!==null)throw Error(a(529,""));return null;case"script":return r=l.async,l=l.src,typeof l=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=na(l),l=Ti(d).hoistableScripts,o=l.get(r),o||(o={type:"script",instance:null,count:0,state:null},l.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function ta(t){return'href="'+tn(t)+'"'}function dl(t){return'link[rel="stylesheet"]['+t+"]"}function Xy(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ww(t,r,l,o){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?o.loading=1:(r=t.createElement("link"),o.preload=r,r.addEventListener("load",function(){return o.loading|=1}),r.addEventListener("error",function(){return o.loading|=2}),bt(r,"link",l),ht(r),t.head.appendChild(r))}function na(t){return'[src="'+tn(t)+'"]'}function hl(t){return"script[async]"+t}function Jy(t,r,l){if(r.count++,r.instance===null)switch(r.type){case"style":var o=t.querySelector('style[data-href~="'+tn(l.href)+'"]');if(o)return r.instance=o,ht(o),o;var d=g({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ht(o),bt(o,"style",d),co(o,l.precedence,t),r.instance=o;case"stylesheet":d=ta(l.href);var p=t.querySelector(dl(d));if(p)return r.state.loading|=4,r.instance=p,ht(p),p;o=Xy(l),(d=cn.get(d))&&Rf(o,d),p=(t.ownerDocument||t).createElement("link"),ht(p);var S=p;return S._p=new Promise(function(T,R){S.onload=T,S.onerror=R}),bt(p,"link",o),r.state.loading|=4,co(p,l.precedence,t),r.instance=p;case"script":return p=na(l.src),(d=t.querySelector(hl(p)))?(r.instance=d,ht(d),d):(o=l,(d=cn.get(p))&&(o=g({},l),Nf(o,d)),t=t.ownerDocument||t,d=t.createElement("script"),ht(d),bt(d,"link",o),t.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(o=r.instance,r.state.loading|=4,co(o,l.precedence,t));return r.instance}function co(t,r,l){for(var o=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=o.length?o[o.length-1]:null,p=d,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===r)p=T;else if(p!==d)break}p?p.parentNode.insertBefore(t,p.nextSibling):(r=l.nodeType===9?l.head:l,r.insertBefore(t,r.firstChild))}function Rf(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function Nf(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var fo=null;function Qy(t,r,l){if(fo===null){var o=new Map,d=fo=new Map;d.set(l,o)}else d=fo,o=d.get(l),o||(o=new Map,d.set(l,o));if(o.has(t))return o;for(o.set(t,null),l=l.getElementsByTagName(t),d=0;d<l.length;d++){var p=l[d];if(!(p[ja]||p[pt]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(r)||"";S=t+S;var T=o.get(S);T?T.push(p):o.set(S,[p])}}return o}function Ky(t,r,l){t=t.ownerDocument||t,t.head.insertBefore(l,r==="title"?t.querySelector("head > title"):null)}function $w(t,r,l){if(l===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Zy(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function eT(t,r,l,o){if(l.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var d=ta(o.href),p=r.querySelector(dl(d));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(t.count++,t=ho.bind(t),r.then(t,t)),l.state.loading|=4,l.instance=p,ht(p);return}p=r.ownerDocument||r,o=Xy(o),(d=cn.get(d))&&Rf(o,d),p=p.createElement("link"),ht(p);var S=p;S._p=new Promise(function(T,R){S.onload=T,S.onerror=R}),bt(p,"link",o),l.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,r),(r=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=ho.bind(t),r.addEventListener("load",l),r.addEventListener("error",l))}}var Of=0;function tT(t,r){return t.stylesheets&&t.count===0&&po(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var o=setTimeout(function(){if(t.stylesheets&&po(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+r);0<t.imgBytes&&Of===0&&(Of=62500*Lw());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&po(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Of?50:800)+r);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(d)}}:null}function ho(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)po(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mo=null;function po(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mo=new Map,r.forEach(nT,t),mo=null,ho.call(t))}function nT(t,r){if(!(r.state.loading&4)){var l=mo.get(t);if(l)var o=l.get(null);else{l=new Map,mo.set(t,l);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var S=d[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(l.set(S.dataset.precedence,S),o=S)}o&&l.set(null,o)}d=r.instance,S=d.getAttribute("data-precedence"),p=l.get(S)||o,p===o&&l.set(null,d),l.set(S,d),this.count++,o=ho.bind(this),d.addEventListener("load",o),d.addEventListener("error",o),p?p.parentNode.insertBefore(d,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),r.state.loading|=4}}var ml={$$typeof:A,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function rT(t,r,l,o,d,p,S,T,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.hiddenUpdates=Eu(null),this.identifierPrefix=o,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Wy(t,r,l,o,d,p,S,T,R,I,X,W){return t=new rT(t,r,l,S,R,I,X,W,T),r=1,p===!0&&(r|=24),p=Ft(3,null,null,r),t.current=p,p.stateNode=t,r=fc(),r.refCount++,t.pooledCache=r,r.refCount++,p.memoizedState={element:o,isDehydrated:l,cache:r},pc(p),t}function $y(t){return t?(t=Oi,t):Oi}function ex(t,r,l,o,d,p){d=$y(d),o.context===null?o.context=d:o.pendingContext=d,o=xr(r),o.payload={element:l},p=p===void 0?null:p,p!==null&&(o.callback=p),l=br(t,o,r),l!==null&&(Vt(l,t,r),Ya(l,t,r))}function tx(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<r?l:r}}function _f(t,r){tx(t,r),(t=t.alternate)&&tx(t,r)}function nx(t){if(t.tag===13||t.tag===31){var r=Jr(t,67108864);r!==null&&Vt(r,t,67108864),_f(t,67108864)}}function rx(t){if(t.tag===13||t.tag===31){var r=Jt();r=Mu(r);var l=Jr(t,r);l!==null&&Vt(l,t,r),_f(t,r)}}var go=!0;function iT(t,r,l,o){var d=P.T;P.T=null;var p=ee.p;try{ee.p=2,Lf(t,r,l,o)}finally{ee.p=p,P.T=d}}function aT(t,r,l,o){var d=P.T;P.T=null;var p=ee.p;try{ee.p=8,Lf(t,r,l,o)}finally{ee.p=p,P.T=d}}function Lf(t,r,l,o){if(go){var d=zf(o);if(d===null)Sf(t,r,o,yo,l),ax(t,o);else if(sT(d,t,r,l,o))o.stopPropagation();else if(ax(t,o),r&4&&-1<lT.indexOf(t)){for(;d!==null;){var p=wi(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Fr(p.pendingLanes);if(S!==0){var T=p;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var R=1<<31-He(S);T.entanglements[1]|=R,S&=~R}Dn(p),(_e&6)===0&&(Ws=kt()+500,ol(0))}}break;case 31:case 13:T=Jr(p,2),T!==null&&Vt(T,p,2),eo(),_f(p,2)}if(p=zf(o),p===null&&Sf(t,r,o,yo,l),p===d)break;d=p}d!==null&&o.stopPropagation()}else Sf(t,r,o,null,l)}}function zf(t){return t=Bu(t),Bf(t)}var yo=null;function Bf(t){if(yo=null,t=Si(t),t!==null){var r=c(t);if(r===null)t=null;else{var l=r.tag;if(l===13){if(t=u(r),t!==null)return t;t=null}else if(l===31){if(t=f(r),t!==null)return t;t=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return yo=t,null}function ix(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Au()){case K:return 2;case ie:return 8;case xe:case Te:return 32;case Le:return 268435456;default:return 32}default:return 32}}var Vf=!1,Dr=null,Rr=null,Nr=null,pl=new Map,gl=new Map,Or=[],lT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ax(t,r){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":pl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(r.pointerId)}}function yl(t,r,l,o,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:l,eventSystemFlags:o,nativeEvent:p,targetContainers:[d]},r!==null&&(r=wi(r),r!==null&&nx(r)),t):(t.eventSystemFlags|=o,r=t.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),t)}function sT(t,r,l,o,d){switch(r){case"focusin":return Dr=yl(Dr,t,r,l,o,d),!0;case"dragenter":return Rr=yl(Rr,t,r,l,o,d),!0;case"mouseover":return Nr=yl(Nr,t,r,l,o,d),!0;case"pointerover":var p=d.pointerId;return pl.set(p,yl(pl.get(p)||null,t,r,l,o,d)),!0;case"gotpointercapture":return p=d.pointerId,gl.set(p,yl(gl.get(p)||null,t,r,l,o,d)),!0}return!1}function lx(t){var r=Si(t.target);if(r!==null){var l=c(r);if(l!==null){if(r=l.tag,r===13){if(r=u(l),r!==null){t.blockedOn=r,vm(t.priority,function(){rx(l)});return}}else if(r===31){if(r=f(l),r!==null){t.blockedOn=r,vm(t.priority,function(){rx(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xo(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var l=zf(t.nativeEvent);if(l===null){l=t.nativeEvent;var o=new l.constructor(l.type,l);zu=o,l.target.dispatchEvent(o),zu=null}else return r=wi(l),r!==null&&nx(r),t.blockedOn=l,!1;r.shift()}return!0}function sx(t,r,l){xo(t)&&l.delete(r)}function oT(){Vf=!1,Dr!==null&&xo(Dr)&&(Dr=null),Rr!==null&&xo(Rr)&&(Rr=null),Nr!==null&&xo(Nr)&&(Nr=null),pl.forEach(sx),gl.forEach(sx)}function bo(t,r){t.blockedOn===r&&(t.blockedOn=null,Vf||(Vf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,oT)))}var vo=null;function ox(t){vo!==t&&(vo=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){vo===t&&(vo=null);for(var r=0;r<t.length;r+=3){var l=t[r],o=t[r+1],d=t[r+2];if(typeof o!="function"){if(Bf(o||l)===null)continue;break}var p=wi(l);p!==null&&(t.splice(r,3),r-=3,Lc(p,{pending:!0,data:d,method:l.method,action:o},o,d))}}))}function ra(t){function r(R){return bo(R,t)}Dr!==null&&bo(Dr,t),Rr!==null&&bo(Rr,t),Nr!==null&&bo(Nr,t),pl.forEach(r),gl.forEach(r);for(var l=0;l<Or.length;l++){var o=Or[l];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Or.length&&(l=Or[0],l.blockedOn===null);)lx(l),l.blockedOn===null&&Or.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(o=0;o<l.length;o+=3){var d=l[o],p=l[o+1],S=d[Nt]||null;if(typeof p=="function")S||ox(l);else if(S){var T=null;if(p&&p.hasAttribute("formAction")){if(d=p,S=p[Nt]||null)T=S.formAction;else if(Bf(d)!==null)continue}else T=S.action;typeof T=="function"?l[o+1]=T:(l.splice(o,3),o-=3),ox(l)}}}function ux(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return d=S})},focusReset:"manual",scroll:"manual"})}function r(){d!==null&&(d(),d=null),o||setTimeout(l,20)}function l(){if(!o&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(l,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),d!==null&&(d(),d=null)}}}function Pf(t){this._internalRoot=t}So.prototype.render=Pf.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));var l=r.current,o=Jt();ex(l,o,t,r,null,null)},So.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;ex(t.current,2,null,t,null,null),eo(),r[vi]=null}};function So(t){this._internalRoot=t}So.prototype.unstable_scheduleHydration=function(t){if(t){var r=bm();t={blockedOn:null,target:t,priority:r};for(var l=0;l<Or.length&&r!==0&&r<Or[l].priority;l++);Or.splice(l,0,t),l===0&&lx(t)}};var cx=n.version;if(cx!=="19.2.0")throw Error(a(527,cx,"19.2.0"));ee.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(r),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var uT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{At=wo.inject(uT),ct=wo}catch{}}return bl.createRoot=function(t,r){if(!s(t))throw Error(a(299));var l=!1,o="",d=yg,p=xg,S=bg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(S=r.onRecoverableError)),r=Wy(t,1,!1,null,null,l,o,null,d,p,S,ux),t[vi]=r.current,vf(t),new Pf(r)},bl.hydrateRoot=function(t,r,l){if(!s(t))throw Error(a(299));var o=!1,d="",p=yg,S=xg,T=bg,R=null;return l!=null&&(l.unstable_strictMode===!0&&(o=!0),l.identifierPrefix!==void 0&&(d=l.identifierPrefix),l.onUncaughtError!==void 0&&(p=l.onUncaughtError),l.onCaughtError!==void 0&&(S=l.onCaughtError),l.onRecoverableError!==void 0&&(T=l.onRecoverableError),l.formState!==void 0&&(R=l.formState)),r=Wy(t,1,!0,r,l??null,o,d,R,p,S,T,ux),r.context=$y(null),l=r.current,o=Jt(),o=Mu(o),d=xr(o),d.callback=null,br(l,d,o),l=o,r.current.lanes=l,Ma(r,l),Dn(r),t[vi]=r.current,vf(t),new So(r)},bl.version="19.2.0",bl}var vx;function bT(){if(vx)return If.exports;vx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),If.exports=xT(),If.exports}var vT=bT(),j=gh();const Yo=ph(j);var Sx="popstate";function ST(e={}){function n(a,s){let{pathname:c,search:u,hash:f}=a.location;return Rd("",{pathname:c,search:u,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(a,s){return typeof s=="string"?s:Pl(s)}return TT(n,i,null,e)}function We(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function kn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function wT(){return Math.random().toString(36).substring(2,10)}function wx(e,n){return{usr:e.state,key:e.key,idx:n}}function Rd(e,n,i=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?pa(n):n,state:i,key:n&&n.key||a||wT()}}function Pl({pathname:e="/",search:n="",hash:i=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function pa(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substring(i),e=e.substring(0,i));let a=e.indexOf("?");a>=0&&(n.search=e.substring(a),e=e.substring(0,a)),e&&(n.pathname=e)}return n}function TT(e,n,i,a={}){let{window:s=document.defaultView,v5Compat:c=!1}=a,u=s.history,f="POP",m=null,h=y();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function y(){return(u.state||{idx:null}).idx}function g(){f="POP";let M=y(),C=M==null?null:M-h;h=M,m&&m({action:f,location:E.location,delta:C})}function b(M,C){f="PUSH";let O=Rd(E.location,M,C);h=y()+1;let A=wx(O,h),V=E.createHref(O);try{u.pushState(A,"",V)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;s.location.assign(V)}c&&m&&m({action:f,location:E.location,delta:1})}function v(M,C){f="REPLACE";let O=Rd(E.location,M,C);h=y();let A=wx(O,h),V=E.createHref(O);u.replaceState(A,"",V),c&&m&&m({action:f,location:E.location,delta:0})}function w(M){return CT(M)}let E={get action(){return f},get location(){return e(s,u)},listen(M){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(Sx,g),m=M,()=>{s.removeEventListener(Sx,g),m=null}},createHref(M){return n(s,M)},createURL:w,encodeLocation(M){let C=w(M);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:b,replace:v,go(M){return u.go(M)}};return E}function CT(e,n=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),We(i,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:Pl(e);return a=a.replace(/ $/,"%20"),!n&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function Hb(e,n,i="/"){return kT(e,n,i,!1)}function kT(e,n,i,a){let s=typeof n=="string"?pa(n):n,c=sr(s.pathname||"/",i);if(c==null)return null;let u=Fb(e);AT(u);let f=null;for(let m=0;f==null&&m<u.length;++m){let h=BT(c);f=LT(u[m],h,a)}return f}function Fb(e,n=[],i=[],a="",s=!1){let c=(u,f,m=s,h)=>{let y={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(a)&&m)return;We(y.relativePath.startsWith(a),`Absolute route path "${y.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(a.length)}let g=lr([a,y.relativePath]),b=i.concat(y);u.children&&u.children.length>0&&(We(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Fb(u.children,n,b,g,m)),!(u.path==null&&!u.index)&&n.push({path:g,score:OT(g,u.index),routesMeta:b})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))c(u,f);else for(let m of qb(u.path))c(u,f,!0,m)}),n}function qb(e){let n=e.split("/");if(n.length===0)return[];let[i,...a]=n,s=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return s?[c,""]:[c];let u=qb(a.join("/")),f=[];return f.push(...u.map(m=>m===""?c:[c,m].join("/"))),s&&f.push(...u),f.map(m=>e.startsWith("/")&&m===""?"/":m)}function AT(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:_T(n.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var ET=/^:[\w-]+$/,MT=3,jT=2,DT=1,RT=10,NT=-2,Tx=e=>e==="*";function OT(e,n){let i=e.split("/"),a=i.length;return i.some(Tx)&&(a+=NT),n&&(a+=jT),i.filter(s=>!Tx(s)).reduce((s,c)=>s+(ET.test(c)?MT:c===""?DT:RT),a)}function _T(e,n){return e.length===n.length&&e.slice(0,-1).every((a,s)=>a===n[s])?e[e.length-1]-n[n.length-1]:0}function LT(e,n,i=!1){let{routesMeta:a}=e,s={},c="/",u=[];for(let f=0;f<a.length;++f){let m=a[f],h=f===a.length-1,y=c==="/"?n:n.slice(c.length)||"/",g=Xo({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},y),b=m.route;if(!g&&h&&i&&!a[a.length-1].route.index&&(g=Xo({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!g)return null;Object.assign(s,g.params),u.push({params:s,pathname:lr([c,g.pathname]),pathnameBase:HT(lr([c,g.pathnameBase])),route:b}),g.pathnameBase!=="/"&&(c=lr([c,g.pathnameBase]))}return u}function Xo(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=zT(e.path,e.caseSensitive,e.end),s=n.match(i);if(!s)return null;let c=s[0],u=c.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((h,{paramName:y,isOptional:g},b)=>{if(y==="*"){let w=f[b]||"";u=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const v=f[b];return g&&!v?h[y]=void 0:h[y]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:u,pattern:e}}function zT(e,n=!1,i=!0){kn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,m)=>(a.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),a]}function BT(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return kn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function sr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}var VT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PT=e=>VT.test(e);function UT(e,n="/"){let{pathname:i,search:a="",hash:s=""}=typeof e=="string"?pa(e):e,c;if(i)if(PT(i))c=i;else{if(i.includes("//")){let u=i;i=i.replace(/\/\/+/g,"/"),kn(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${i}`)}i.startsWith("/")?c=Cx(i.substring(1),"/"):c=Cx(i,n)}else c=n;return{pathname:c,search:FT(a),hash:qT(s)}}function Cx(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function Yf(e,n,i,a){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function IT(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function Gb(e){let n=IT(e);return n.map((i,a)=>a===n.length-1?i.pathname:i.pathnameBase)}function Yb(e,n,i,a=!1){let s;typeof e=="string"?s=pa(e):(s={...e},We(!s.pathname||!s.pathname.includes("?"),Yf("?","pathname","search",s)),We(!s.pathname||!s.pathname.includes("#"),Yf("#","pathname","hash",s)),We(!s.search||!s.search.includes("#"),Yf("#","search","hash",s)));let c=e===""||s.pathname==="",u=c?"/":s.pathname,f;if(u==null)f=i;else{let g=n.length-1;if(!a&&u.startsWith("..")){let b=u.split("/");for(;b[0]==="..";)b.shift(),g-=1;s.pathname=b.join("/")}f=g>=0?n[g]:"/"}let m=UT(s,f),h=u&&u!=="/"&&u.endsWith("/"),y=(c||u===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||y)&&(m.pathname+="/"),m}var lr=e=>e.join("/").replace(/\/\/+/g,"/"),HT=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),FT=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qT=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function GT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function YT(e){return e.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Xb=["POST","PUT","PATCH","DELETE"];new Set(Xb);var XT=["GET",...Xb];new Set(XT);var ga=j.createContext(null);ga.displayName="DataRouter";var cu=j.createContext(null);cu.displayName="DataRouterState";j.createContext(!1);var Jb=j.createContext({isTransitioning:!1});Jb.displayName="ViewTransition";var JT=j.createContext(new Map);JT.displayName="Fetchers";var QT=j.createContext(null);QT.displayName="Await";var An=j.createContext(null);An.displayName="Navigation";var Yl=j.createContext(null);Yl.displayName="Location";var zn=j.createContext({outlet:null,matches:[],isDataRoute:!1});zn.displayName="Route";var yh=j.createContext(null);yh.displayName="RouteError";function KT(e,{relative:n}={}){We(Xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=j.useContext(An),{hash:s,pathname:c,search:u}=Ql(e,{relative:n}),f=c;return i!=="/"&&(f=c==="/"?i:lr([i,c])),a.createHref({pathname:f,search:u,hash:s})}function Xl(){return j.useContext(Yl)!=null}function or(){return We(Xl(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Yl).location}var Qb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kb(e){j.useContext(An).static||j.useLayoutEffect(e)}function Jl(){let{isDataRoute:e}=j.useContext(zn);return e?cC():ZT()}function ZT(){We(Xl(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(ga),{basename:n,navigator:i}=j.useContext(An),{matches:a}=j.useContext(zn),{pathname:s}=or(),c=JSON.stringify(Gb(a)),u=j.useRef(!1);return Kb(()=>{u.current=!0}),j.useCallback((m,h={})=>{if(kn(u.current,Qb),!u.current)return;if(typeof m=="number"){i.go(m);return}let y=Yb(m,JSON.parse(c),s,h.relative==="path");e==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:lr([n,y.pathname])),(h.replace?i.replace:i.push)(y,h.state,h)},[n,i,c,s,e])}j.createContext(null);function WT(){let{matches:e}=j.useContext(zn),n=e[e.length-1];return n?n.params:{}}function Ql(e,{relative:n}={}){let{matches:i}=j.useContext(zn),{pathname:a}=or(),s=JSON.stringify(Gb(i));return j.useMemo(()=>Yb(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function $T(e,n){return Zb(e,n)}function Zb(e,n,i,a,s){We(Xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=j.useContext(An),{matches:u}=j.useContext(zn),f=u[u.length-1],m=f?f.params:{},h=f?f.pathname:"/",y=f?f.pathnameBase:"/",g=f&&f.route;{let O=g&&g.path||"";Wb(h,!g||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let b=or(),v;if(n){let O=typeof n=="string"?pa(n):n;We(y==="/"||O.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${O.pathname}" was given in the \`location\` prop.`),v=O}else v=b;let w=v.pathname||"/",E=w;if(y!=="/"){let O=y.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(O.length).join("/")}let M=Hb(e,{pathname:E});kn(g||M!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),kn(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=iC(M&&M.map(O=>Object.assign({},O,{params:Object.assign({},m,O.params),pathname:lr([y,c.encodeLocation?c.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?y:lr([y,c.encodeLocation?c.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),u,i,a,s);return n&&C?j.createElement(Yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},C):C}function eC(){let e=uC(),n=GT(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:c},"ErrorBoundary")," or"," ",j.createElement("code",{style:c},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},n),i?j.createElement("pre",{style:s},i):null,u)}var tC=j.createElement(eC,null),nC=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){this.props.onError?this.props.onError(e,n):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?j.createElement(zn.Provider,{value:this.props.routeContext},j.createElement(yh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function rC({routeContext:e,match:n,children:i}){let a=j.useContext(ga);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(zn.Provider,{value:e},i)}function iC(e,n=[],i=null,a=null,s=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let c=e,u=i?.errors;if(u!=null){let y=c.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);We(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,y+1))}let f=!1,m=-1;if(i)for(let y=0;y<c.length;y++){let g=c[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=y),g.route.id){let{loaderData:b,errors:v}=i,w=g.route.loader&&!b.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||w){f=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let h=i&&a?(y,g)=>{a(y,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:YT(i.matches),errorInfo:g})}:void 0;return c.reduceRight((y,g,b)=>{let v,w=!1,E=null,M=null;i&&(v=u&&g.route.id?u[g.route.id]:void 0,E=g.route.errorElement||tC,f&&(m<0&&b===0?(Wb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,M=null):m===b&&(w=!0,M=g.route.hydrateFallbackElement||null)));let C=n.concat(c.slice(0,b+1)),O=()=>{let A;return v?A=E:w?A=M:g.route.Component?A=j.createElement(g.route.Component,null):g.route.element?A=g.route.element:A=y,j.createElement(rC,{match:g,routeContext:{outlet:y,matches:C,isDataRoute:i!=null},children:A})};return i&&(g.route.ErrorBoundary||g.route.errorElement||b===0)?j.createElement(nC,{location:i.location,revalidation:i.revalidation,component:E,error:v,children:O(),routeContext:{outlet:null,matches:C,isDataRoute:!0},onError:h}):O()},null)}function xh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function aC(e){let n=j.useContext(ga);return We(n,xh(e)),n}function lC(e){let n=j.useContext(cu);return We(n,xh(e)),n}function sC(e){let n=j.useContext(zn);return We(n,xh(e)),n}function bh(e){let n=sC(e),i=n.matches[n.matches.length-1];return We(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function oC(){return bh("useRouteId")}function uC(){let e=j.useContext(yh),n=lC("useRouteError"),i=bh("useRouteError");return e!==void 0?e:n.errors?.[i]}function cC(){let{router:e}=aC("useNavigate"),n=bh("useNavigate"),i=j.useRef(!1);return Kb(()=>{i.current=!0}),j.useCallback(async(s,c={})=>{kn(i.current,Qb),i.current&&(typeof s=="number"?await e.navigate(s):await e.navigate(s,{fromRouteId:n,...c}))},[e,n])}var kx={};function Wb(e,n,i){!n&&!kx[e]&&(kx[e]=!0,kn(!1,i))}j.memo(fC);function fC({routes:e,future:n,state:i,unstable_onError:a}){return Zb(e,void 0,i,a,n)}function jl(e){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dC({basename:e="/",children:n=null,location:i,navigationType:a="POP",navigator:s,static:c=!1,unstable_useTransitions:u}){We(!Xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),m=j.useMemo(()=>({basename:f,navigator:s,static:c,unstable_useTransitions:u,future:{}}),[f,s,c,u]);typeof i=="string"&&(i=pa(i));let{pathname:h="/",search:y="",hash:g="",state:b=null,key:v="default"}=i,w=j.useMemo(()=>{let E=sr(h,f);return E==null?null:{location:{pathname:E,search:y,hash:g,state:b,key:v},navigationType:a}},[f,h,y,g,b,v,a]);return kn(w!=null,`<Router basename="${f}"> is not able to match the URL "${h}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:j.createElement(An.Provider,{value:m},j.createElement(Yl.Provider,{children:n,value:w}))}function hC({children:e,location:n}){return $T(Nd(e),n)}function Nd(e,n=[]){let i=[];return j.Children.forEach(e,(a,s)=>{if(!j.isValidElement(a))return;let c=[...n,s];if(a.type===j.Fragment){i.push.apply(i,Nd(a.props.children,c));return}We(a.type===jl,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=Nd(a.props.children,c)),i.push(u)}),i}var _o="get",Lo="application/x-www-form-urlencoded";function fu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function mC(e){return fu(e)&&e.tagName.toLowerCase()==="button"}function pC(e){return fu(e)&&e.tagName.toLowerCase()==="form"}function gC(e){return fu(e)&&e.tagName.toLowerCase()==="input"}function yC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xC(e,n){return e.button===0&&(!n||n==="_self")&&!yC(e)}var To=null;function bC(){if(To===null)try{new FormData(document.createElement("form"),0),To=!1}catch{To=!0}return To}var vC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xf(e){return e!=null&&!vC.has(e)?(kn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lo}"`),null):e}function SC(e,n){let i,a,s,c,u;if(pC(e)){let f=e.getAttribute("action");a=f?sr(f,n):null,i=e.getAttribute("method")||_o,s=Xf(e.getAttribute("enctype"))||Lo,c=new FormData(e)}else if(mC(e)||gC(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||f.getAttribute("action");if(a=m?sr(m,n):null,i=e.getAttribute("formmethod")||f.getAttribute("method")||_o,s=Xf(e.getAttribute("formenctype"))||Xf(f.getAttribute("enctype"))||Lo,c=new FormData(f,e),!bC()){let{name:h,type:y,value:g}=e;if(y==="image"){let b=h?`${h}.`:"";c.append(`${b}x`,"0"),c.append(`${b}y`,"0")}else h&&c.append(h,g)}}else{if(fu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=_o,a=null,s=Lo,u=e}return c&&s==="text/plain"&&(u=c,c=void 0),{action:a,method:i.toLowerCase(),encType:s,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vh(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function wC(e,n,i){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${i}`:n&&sr(a.pathname,n)==="/"?a.pathname=`${n.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function TC(e,n){if(e.id in n)return n[e.id];try{let i=await import(e.module);return n[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function CC(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function kC(e,n,i){let a=await Promise.all(e.map(async s=>{let c=n.routes[s.route.id];if(c){let u=await TC(c,i);return u.links?u.links():[]}return[]}));return jC(a.flat(1).filter(CC).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Ax(e,n,i,a,s,c){let u=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,f=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?n.filter((m,h)=>u(m,h)||f(m,h)):c==="data"?n.filter((m,h)=>{let y=a.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(u(m,h)||f(m,h))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function AC(e,n,{includeHydrateFallback:i}={}){return EC(e.map(a=>{let s=n.routes[a.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),i&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function EC(e){return[...new Set(e)]}function MC(e){let n={},i=Object.keys(e).sort();for(let a of i)n[a]=e[a];return n}function jC(e,n){let i=new Set;return new Set(n),e.reduce((a,s)=>{let c=JSON.stringify(MC(s));return i.has(c)||(i.add(c),a.push({key:c,link:s})),a},[])}function $b(){let e=j.useContext(ga);return vh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function DC(){let e=j.useContext(cu);return vh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Sh=j.createContext(void 0);Sh.displayName="FrameworkContext";function e1(){let e=j.useContext(Sh);return vh(e,"You must render this element inside a <HydratedRouter> element"),e}function RC(e,n){let i=j.useContext(Sh),[a,s]=j.useState(!1),[c,u]=j.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:h,onMouseLeave:y,onTouchStart:g}=n,b=j.useRef(null);j.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let E=C=>{C.forEach(O=>{u(O.isIntersecting)})},M=new IntersectionObserver(E,{threshold:.5});return b.current&&M.observe(b.current),()=>{M.disconnect()}}},[e]),j.useEffect(()=>{if(a){let E=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(E)}}},[a]);let v=()=>{s(!0)},w=()=>{s(!1),u(!1)};return i?e!=="intent"?[c,b,{}]:[c,b,{onFocus:vl(f,v),onBlur:vl(m,w),onMouseEnter:vl(h,v),onMouseLeave:vl(y,w),onTouchStart:vl(g,v)}]:[!1,b,{}]}function vl(e,n){return i=>{e&&e(i),i.defaultPrevented||n(i)}}function NC({page:e,...n}){let{router:i}=$b(),a=j.useMemo(()=>Hb(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?j.createElement(_C,{page:e,matches:a,...n}):null}function OC(e){let{manifest:n,routeModules:i}=e1(),[a,s]=j.useState([]);return j.useEffect(()=>{let c=!1;return kC(e,n,i).then(u=>{c||s(u)}),()=>{c=!0}},[e,n,i]),a}function _C({page:e,matches:n,...i}){let a=or(),{manifest:s,routeModules:c}=e1(),{basename:u}=$b(),{loaderData:f,matches:m}=DC(),h=j.useMemo(()=>Ax(e,n,m,s,a,"data"),[e,n,m,s,a]),y=j.useMemo(()=>Ax(e,n,m,s,a,"assets"),[e,n,m,s,a]),g=j.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let w=new Set,E=!1;if(n.forEach(C=>{let O=s.routes[C.route.id];!O||!O.hasLoader||(!h.some(A=>A.route.id===C.route.id)&&C.route.id in f&&c[C.route.id]?.shouldRevalidate||O.hasClientLoader?E=!0:w.add(C.route.id))}),w.size===0)return[];let M=wC(e,u,"data");return E&&w.size>0&&M.searchParams.set("_routes",n.filter(C=>w.has(C.route.id)).map(C=>C.route.id).join(",")),[M.pathname+M.search]},[u,f,a,s,h,n,e,c]),b=j.useMemo(()=>AC(y,s),[y,s]),v=OC(y);return j.createElement(j.Fragment,null,g.map(w=>j.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),b.map(w=>j.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),v.map(({key:w,link:E})=>j.createElement("link",{key:w,nonce:i.nonce,...E})))}function LC(...e){return n=>{e.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t1&&(window.__reactRouterVersion="7.10.1")}catch{}function zC({basename:e,children:n,unstable_useTransitions:i,window:a}){let s=j.useRef();s.current==null&&(s.current=ST({window:a,v5Compat:!0}));let c=s.current,[u,f]=j.useState({action:c.action,location:c.location}),m=j.useCallback(h=>{i===!1?f(h):j.startTransition(()=>f(h))},[i]);return j.useLayoutEffect(()=>c.listen(m),[c,m]),j.createElement(dC,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:c,unstable_useTransitions:i===!0})}var n1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ar=j.forwardRef(function({onClick:n,discover:i="render",prefetch:a="none",relative:s,reloadDocument:c,replace:u,state:f,target:m,to:h,preventScrollReset:y,viewTransition:g,...b},v){let{basename:w,unstable_useTransitions:E}=j.useContext(An),M=typeof h=="string"&&n1.test(h),C,O=!1;if(typeof h=="string"&&M&&(C=h,t1))try{let N=new URL(window.location.href),$=h.startsWith("//")?new URL(N.protocol+h):new URL(h),te=sr($.pathname,w);$.origin===N.origin&&te!=null?h=te+$.search+$.hash:O=!0}catch{kn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=KT(h,{relative:s}),[V,Y,L]=RC(a,b),G=UC(h,{replace:u,state:f,target:m,preventScrollReset:y,relative:s,viewTransition:g,unstable_useTransitions:E});function Q(N){n&&n(N),N.defaultPrevented||G(N)}let F=j.createElement("a",{...b,...L,href:C||A,onClick:O||c?n:Q,ref:LC(v,Y),target:m,"data-discover":!M&&i==="render"?"true":void 0});return V&&!M?j.createElement(j.Fragment,null,F,j.createElement(NC,{page:A})):F});ar.displayName="Link";var BC=j.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:a="",end:s=!1,style:c,to:u,viewTransition:f,children:m,...h},y){let g=Ql(u,{relative:h.relative}),b=or(),v=j.useContext(cu),{navigator:w,basename:E}=j.useContext(An),M=v!=null&&GC(g)&&f===!0,C=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,O=b.pathname,A=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(O=O.toLowerCase(),A=A?A.toLowerCase():null,C=C.toLowerCase()),A&&E&&(A=sr(A,E)||A);const V=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let Y=O===C||!s&&O.startsWith(C)&&O.charAt(V)==="/",L=A!=null&&(A===C||!s&&A.startsWith(C)&&A.charAt(C.length)==="/"),G={isActive:Y,isPending:L,isTransitioning:M},Q=Y?n:void 0,F;typeof a=="function"?F=a(G):F=[a,Y?"active":null,L?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(G):c;return j.createElement(ar,{...h,"aria-current":Q,className:F,ref:y,style:N,to:u,viewTransition:f},typeof m=="function"?m(G):m)});BC.displayName="NavLink";var VC=j.forwardRef(({discover:e="render",fetcherKey:n,navigate:i,reloadDocument:a,replace:s,state:c,method:u=_o,action:f,onSubmit:m,relative:h,preventScrollReset:y,viewTransition:g,...b},v)=>{let{unstable_useTransitions:w}=j.useContext(An),E=FC(),M=qC(f,{relative:h}),C=u.toLowerCase()==="get"?"get":"post",O=typeof f=="string"&&n1.test(f),A=V=>{if(m&&m(V),V.defaultPrevented)return;V.preventDefault();let Y=V.nativeEvent.submitter,L=Y?.getAttribute("formmethod")||u,G=()=>E(Y||V.currentTarget,{fetcherKey:n,method:L,navigate:i,replace:s,state:c,relative:h,preventScrollReset:y,viewTransition:g});w&&i!==!1?j.startTransition(()=>G()):G()};return j.createElement("form",{ref:v,method:C,action:M,onSubmit:a?m:A,...b,"data-discover":!O&&e==="render"?"true":void 0})});VC.displayName="Form";function PC(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r1(e){let n=j.useContext(ga);return We(n,PC(e)),n}function UC(e,{target:n,replace:i,state:a,preventScrollReset:s,relative:c,viewTransition:u,unstable_useTransitions:f}={}){let m=Jl(),h=or(),y=Ql(e,{relative:c});return j.useCallback(g=>{if(xC(g,n)){g.preventDefault();let b=i!==void 0?i:Pl(h)===Pl(y),v=()=>m(e,{replace:b,state:a,preventScrollReset:s,relative:c,viewTransition:u});f?j.startTransition(()=>v()):v()}},[h,m,y,i,a,n,e,s,c,u,f])}var IC=0,HC=()=>`__${String(++IC)}__`;function FC(){let{router:e}=r1("useSubmit"),{basename:n}=j.useContext(An),i=oC(),a=e.fetch,s=e.navigate;return j.useCallback(async(c,u={})=>{let{action:f,method:m,encType:h,formData:y,body:g}=SC(c,n);if(u.navigate===!1){let b=u.fetcherKey||HC();await a(b,i,u.action||f,{preventScrollReset:u.preventScrollReset,formData:y,body:g,formMethod:u.method||m,formEncType:u.encType||h,flushSync:u.flushSync})}else await s(u.action||f,{preventScrollReset:u.preventScrollReset,formData:y,body:g,formMethod:u.method||m,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[a,s,n,i])}function qC(e,{relative:n}={}){let{basename:i}=j.useContext(An),a=j.useContext(zn);We(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),c={...Ql(e||".",{relative:n})},u=or();if(e==null){c.search=u.search;let f=new URLSearchParams(c.search),m=f.getAll("index");if(m.some(y=>y==="")){f.delete("index"),m.filter(g=>g).forEach(g=>f.append("index",g));let y=f.toString();c.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:lr([i,c.pathname])),Pl(c)}function GC(e,{relative:n}={}){let i=j.useContext(Jb);We(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=r1("useViewTransitionState"),s=Ql(e,{relative:n});if(!i.isTransitioning)return!1;let c=sr(i.currentLocation.pathname,a)||i.currentLocation.pathname,u=sr(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Xo(s.pathname,u)!=null||Xo(s.pathname,c)!=null}const YC=({theme:e,onToggleTheme:n,onNavClick:i})=>{const a=or(),s=Jl(),c=a.pathname==="/",[u,f]=j.useState(!1),m=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"lab",label:"Lab"}],h=v=>{f(!1),c?i(v):(s("/"),setTimeout(()=>{i(v)},100))};j.useEffect(()=>(u?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[u]);const y="px-3 py-1.5 rounded-lg text-[13px] font-medium border border-transparent cursor-pointer transition-all duration-300 ease-out hover:text-fg hover:bg-(--bg-soft)",g="text-fg bg-(--bg-soft)",b="text-fg-muted";return x.jsxs(x.Fragment,{children:[x.jsx("header",{className:"fixed inset-x-0 top-0 h-(--header-height) z-20 border-b border-(--border-subtle)",children:x.jsxs("div",{className:"max-w-(--content-max-w) mx-auto h-full px-5 flex items-center justify-between gap-4",children:[x.jsx(ar,{to:"/",className:"tracking-[0.08em] uppercase text-[13px] font-medium text-fg-muted hover:text-(--accent) transition-colors duration-300 cursor-pointer",children:"Frontend · UX"}),x.jsxs("nav",{className:"hidden md:flex items-center gap-1 text-[13px]",children:[x.jsx(ar,{to:"/",className:`${y} ${c?g:b}`,children:"Home"}),m.map(({id:v,label:w})=>x.jsx("button",{className:`${y} ${b}`,onClick:()=>h(v),children:w},v)),x.jsx(ar,{to:"/blog",className:`${y} ${a.pathname==="/blog"?g:b}`,children:"Blog"})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("button",{className:`md:hidden w-9 h-9 rounded-lg border border-(--border-subtle) bg-(--bg-elevated)\r
                         flex items-center justify-center cursor-pointer\r
                         transition-all duration-300 ease-out\r
                         hover:bg-(--bg-soft) hover:border-(--border-hover)`,"aria-label":"Toggle menu",onClick:()=>f(!u),children:u?x.jsx(KC,{}):x.jsx(QC,{})}),x.jsx("button",{className:`w-9 h-9 rounded-lg border border-(--border-subtle) bg-(--bg-elevated)\r
                         flex items-center justify-center cursor-pointer\r
                         transition-all duration-300 ease-out\r
                         hover:bg-(--bg-soft) hover:border-(--border-hover)`,"aria-label":"Toggle theme",onClick:n,children:e==="dark"?x.jsx(XC,{}):x.jsx(JC,{})}),x.jsx(ar,{to:"/contact",className:`hidden sm:inline-flex text-[13px] px-4 py-2 rounded-lg border
                         transition-all duration-300 ease-out
                         ${a.pathname==="/contact"?"text-(--accent) border-(--accent-border) bg-(--accent-subtle)":"text-fg-muted border-(--border-subtle) bg-(--bg-elevated) hover:bg-(--bg-soft) hover:border-(--border-hover)"}`,children:"Contact"})]})]})}),u&&x.jsx("div",{className:"md:hidden fixed inset-0 bg-black/50 z-9998",onClick:()=>f(!1)}),x.jsx("div",{className:["md:hidden fixed top-0 right-0 bottom-0 w-[280px] z-9999","bg-(--bg-elevated)","border-l border-(--border-subtle)","transition-transform duration-300 ease-out",u?"translate-x-0":"translate-x-full"].join(" "),children:x.jsxs("nav",{className:"flex flex-col p-6 pt-[calc(var(--header-height)+16px)] gap-1",children:[x.jsx(ar,{to:"/",className:["px-4 py-3 rounded-lg text-[14px] border border-transparent","transition-all duration-200 ease-out","hover:bg-(--bg-soft)",c?"text-fg bg-(--bg-soft)":"text-fg-muted"].join(" "),onClick:()=>f(!1),children:"Home"}),m.map(({id:v,label:w})=>x.jsx("button",{className:`px-4 py-3 rounded-lg text-[14px] text-fg-muted border border-transparent text-left\r
                         transition-all duration-200 ease-out\r
                         hover:bg-(--bg-soft) hover:text-fg`,onClick:()=>h(v),children:w},v)),x.jsx(ar,{to:"/blog",className:["px-4 py-3 rounded-lg text-[14px] border border-transparent","transition-all duration-200 ease-out","hover:bg-(--bg-soft)",a.pathname==="/blog"?"text-fg bg-(--bg-soft)":"text-fg-muted"].join(" "),onClick:()=>f(!1),children:"Blog"}),x.jsx("div",{className:"mt-4 pt-4 border-t border-(--border-subtle)",children:x.jsx(ar,{to:"/contact",className:`block w-full text-center text-[14px] px-4 py-3 rounded-lg border border-(--border-subtle)\r
                         bg-(--bg-soft) hover:border-(--border-hover)\r
                         transition-all duration-200 ease-out text-fg`,onClick:()=>f(!1),children:"Contact"})})]})})]})},XC=()=>x.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{fill:"currentColor",d:"M12 4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0 18a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4 13H3a1 1 0 1 1 0-2h1a1 1 0 0 1 0 2Zm17 0h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2ZM6.34 6.34a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41l-.7.7Zm12.02 12.02a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7ZM6.34 17.66l-.7.7a1 1 0 1 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41Zm12.02-12.02-.7.7a1 1 0 0 1-1.41-1.41l.7-.7a1 1 0 0 1 1.41 1.41ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"})}),JC=()=>x.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:x.jsx("path",{d:"M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",fill:"currentColor"})}),QC=()=>x.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),KC=()=>x.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),ZC=()=>{const e=new Date().getFullYear();return x.jsxs("footer",{className:"max-w-(--content-max-w) mx-auto px-5 pb-8 pt-6 border-t border-(--border-subtle) flex flex-col gap-2 text-[12px] text-fg-dimmed sm:flex-row sm:justify-between sm:items-center",children:[x.jsxs("span",{children:["© ",e," Kwon-KyoungMin All rights reserved."]}),x.jsx("span",{children:"Built with React · TypeScript · Tailwind CSS"})]})},WC=()=>{const{pathname:e}=or();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null},$C="text-[12px] uppercase tracking-[0.12em] text-(--accent) font-medium mb-2",Jf=({title:e,value:n})=>x.jsxs("div",{className:`rounded-xl p-3 bg-(--bg-soft) border border-(--border-subtle)\r
      transition-all duration-300 hover:border-(--border-hover)`,children:[x.jsx("div",{className:"text-[11px] text-fg-dimmed mb-1",children:e}),x.jsx("div",{className:"text-[13px] font-medium text-fg",children:n})]}),ek=({onScrollTo:e})=>x.jsxs("section",{id:"top",className:"grid gap-10 mb-20 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] items-start",children:[x.jsxs("div",{className:"pt-2",children:[x.jsx("p",{className:$C,children:"Identity Profile"}),x.jsxs("h1",{className:"text-[clamp(28px,4vw,36px)] font-bold leading-tight mb-4 tracking-tight",children:[x.jsx("span",{className:"text-(--accent)",children:"'최고'"}),"를 위해",x.jsx("br",{}),x.jsx("span",{className:"text-(--accent)",children:"'최악'"}),"을 대비하는,",x.jsx("br",{}),"'안전한 혁신가' 권경민입니다."]}),x.jsxs("p",{className:"text-[15px] text-fg-muted leading-[1.75] max-w-[520px] mb-8",children:["단순 기능 구현을 것을 넘어, 사용자에게 전달될 가치(Value)와 그 과정의 안전(Safety)을 동시에 설계합니다.",x.jsx("br",{}),"사이버보안을 전공하며 기른 ",x.jsx("strong",{className:"text-fg font-semibold",children:"'비판적 사고'"}),"와"," ",x.jsx("strong",{className:"text-fg font-semibold",children:"'리스크 관리'"})," 역량을 프론트엔드 개발에 녹여내고 있습니다."]}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:["Safety First","Risk Management","Team Ownership","Frontend Core"].map(n=>x.jsx("span",{className:`text-[11px] px-3 py-1.5 rounded-full\r
                border border-(--border-subtle) text-fg-muted bg-(--bg-soft)\r
                transition-colors duration-300\r
                hover:border-(--border-hover) hover:text-fg`,children:n},n))}),x.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[x.jsx("button",{className:`text-[13px] px-5 py-2.5 rounded-lg\r
                       bg-(--accent) text-white font-semibold\r
                       hover:bg-(--accent-hover)\r
                       transition-all duration-300 ease-out\r
                       cursor-pointer`,onClick:()=>e("skills"),children:"경력 바로가기"}),x.jsxs("button",{className:`inline-flex items-center gap-1.5 text-[13px] text-fg-muted\r
                       hover:text-(--accent) transition-colors duration-300 ease-out cursor-pointer`,onClick:()=>e("about"),children:[x.jsx("span",{children:"소개 더 보기"}),x.jsx("span",{className:"text-[14px] translate-y-px",children:"↳"})]})]})]}),x.jsxs("aside",{className:`rounded-2xl border border-(--border-subtle)\r
                   bg-(--bg-elevated)\r
                   flex flex-col gap-4 text-[13px] p-5\r
                   transition-all duration-300\r
                   hover:border-(--border-hover)\r
                   [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]`,children:[x.jsxs("div",{className:"flex items-center justify-between gap-3",children:[x.jsxs("div",{children:[x.jsx("div",{className:"text-[17px] font-bold tracking-tight font-display",children:"Kwon Kyung-Min"}),x.jsx("div",{className:"text-[12px] text-fg-muted mt-0.5",children:"Frontend Engineer · Security Researcher"})]}),x.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-(--accent-border) text-[11px] uppercase tracking-widest",children:[x.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-(--accent) animate-pulse"}),x.jsx("span",{className:"text-(--accent) font-medium",children:"Building"})]})]}),x.jsxs("div",{className:"flex flex-col gap-2.5",children:[x.jsx(Jf,{title:"Focus",value:"Risk Mgmt, Safety, UI Arch"}),x.jsx(Jf,{title:"Strength",value:"Critical Thinking, Stability"}),x.jsx(Jf,{title:"Based in",value:"Seongnam, KR (KST)"})]}),x.jsx("p",{className:"text-[12px] text-fg-dimmed mt-1 leading-relaxed",children:"최근에는 차량 데이터 시각화 성능 개선, Web Worker를 활용한 렌더링 최적화, 그리고 팀의 심리적 안전지대를 만드는 일에 집중하고 있습니다."})]})]}),Jo="rounded-[16px] border border-(--border-subtle) bg-(--bg-elevated) p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-(--accent-border) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)] [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",ya="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-8",xa="text-[12px] uppercase tracking-[0.12em] text-(--accent) font-medium mb-1",ba="text-[22px] font-bold tracking-tight text-fg",du="text-[14px] text-fg-muted leading-relaxed",hu="text-[11px] px-2.5 py-1 rounded-full border border-(--accent-border) text-(--accent) bg-(--accent-subtle)",Qo="text-[11px] px-2.5 py-1 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted transition-colors duration-200 hover:border-(--border-hover)",tk=e=>`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 border cursor-pointer ${e?"bg-(--accent-subtle) text-(--accent) border-(--accent-border)":"text-fg-muted border-transparent hover:text-fg hover:bg-(--bg-soft)"}`,nk=()=>x.jsxs("section",{id:"about",className:"mb-20",children:[x.jsxs("div",{className:ya,children:[x.jsxs("div",{children:[x.jsx("p",{className:xa,children:"About"}),x.jsx("h2",{className:ba,children:"개발자로서의 가치관"})]}),x.jsx("p",{className:du,children:"최고의 성과를 지향하되, 최악의 상황을 먼저 대비하는 '안전한 혁신'을 추구합니다."})]}),x.jsxs("div",{className:"grid gap-5 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]",children:[x.jsxs("div",{className:Jo,children:[x.jsx("div",{className:"flex items-center justify-between gap-2 mb-3",children:x.jsx("h3",{className:"text-[16px] font-bold",children:"안전한 혁신 (Safe Innovation)"})}),x.jsxs("div",{className:"text-[14px] text-fg-muted leading-[1.75]",children:[x.jsxs("p",{children:["새로운 기술로 사람들에게 가치를 주는 것을 좋아하지만, 그 과정에서",x.jsx("strong",{className:"text-fg",children:' "기술이 미칠 영향"'}),"을 한번 더 고려합니다.",x.jsx("br",{}),x.jsx("br",{}),"보안을 전공하며 익힌 ",x.jsx("strong",{className:"text-fg",children:"Risk Management"})," 사고방식을 개발에 적용하여, 화려한 기능 이전에 발생할 수 있는 최악의 시나리오를 먼저 방어합니다."]}),x.jsxs("ul",{className:"mt-4 pl-4 list-disc space-y-1.5 text-fg-muted",children:[x.jsx("li",{children:"사용자 피해 방지를 최우선으로 하는 설계"}),x.jsx("li",{children:"통제 가능한 리스크 안에서의 과감한 기술 도전"}),x.jsx("li",{children:"보안적/비판적 사고를 통한 견고한 아키텍처 구축"})]})]})]}),x.jsxs("div",{className:Jo,children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[x.jsx("h3",{className:"text-[16px] font-bold",children:"일하는 태도"}),x.jsx("span",{className:hu,children:"Mindset"})]}),x.jsxs("div",{className:"text-[14px] text-fg-muted leading-[1.75]",children:[x.jsxs("p",{className:"mb-2",children:[x.jsx("strong",{className:"text-fg",children:'"팀의 심리적 안전지대"'}),"가 되고자 합니다."]}),x.jsxs("ul",{className:"mt-1.5 pl-4 list-disc space-y-1.5",children:[x.jsx("li",{children:"'나'보다 '우리(Team)'의 이익을 먼저 고려"}),x.jsx("li",{children:"문제 발생시 즉각적인 원인 분석 및 해결책 탐색"}),x.jsx("li",{children:"끝까지 파고드는 집요함 (Log Consistency 해결 경험)"}),x.jsx("li",{children:"동료가 안심하고 등을 맡길 수 있는 신뢰 구축"})]})]})]})]})]}),Co=({title:e,chipLabel:n,skills:i})=>x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-bold",children:e}),n?x.jsx("span",{className:hu,children:n}):x.jsx(x.Fragment,{})]}),x.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:i.map(a=>x.jsx("span",{className:Qo,children:a},a))})]}),Ex=()=>{const e=[{title:"Frontend Core",skills:["React.js","Next.js","TypeScript","TailwindCSS","Electron","Node.js","Zustand","Redux","ZeroMQ"]},{title:"Architecture & Perf",skills:["Domain-Driven Design","Web Worker","Event Bus / IPC","Rendering Optimization","Memory Management"]},{title:"Security & Infra",skills:["Cyber Security","Network Forensics","Docker","Linux / Shell","GitLab / CI"]},{title:"AI & Mobile",skills:["Flutter","Python","TensorFlow","Firebase","OpenCV"]}];return x.jsxs("div",{className:"space-y-3",children:[x.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[x.jsx(Co,{...e[0]}),x.jsx(Co,{...e[1]})]}),x.jsxs("div",{className:"grid gap-3 md:grid-cols-2",children:[x.jsx(Co,{...e[2]}),x.jsx(Co,{...e[3]})]})]})},Mx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfElEQVR4Ae2WA8wcQRiG39q2tTszu7XtNnYd1XZ7OzN7eyqDmmF/1jbipI7rhrVt97r/7SW/j81F9yTPYflh99tFmjQlQuc1BRHTQeU2EFdW0jKRCZUfg8LXQTEbICK62RtM7AGxnoLJIDQreXWf8626MqAHqqNUyNL6YOYu6N7wTu4gmJmcmtvWY//mJ+1vFRFhxgwQ/jZ0ciacA+QF0z6QuB1WBaEY10F5D0SFuvYVyprwH6DmVTCZCSpzEjAXzGvva45GTKjGcWiecOnszKl5CcQ9HEMCldHJVQ36nOrxafe79aTKiBliHA0H4FwD1NgOZX4lpAzFOALNKhAA3+ZkkCrse7VQAEweBOVNkTKYPA7dk3/7MPnCNoAOXAPlFMpSPW7belRn+MQCkVvA+B+nCjKs+A3NeA3KH4KJx3GpiidoJ+6CmRnQ+Eh0n1E12hQcCCJuQvcHoeUPkmR0jmH+AZH3ofE5iMyYcmBiGah4V/xgVgK685PQA0FQfglsCUFElEBNqMYEEPMEiHgGJj+CiQ/xab4HNb6A8L/hVjrjmPBPoNJCdPaXA7GagXk7Qrd6xW17b0+0W9odxPCBySdOJWw1aWvkImW0DtQGMbPQ3h8OIDTedyOlELka7QP51wOROSkOwJ0XQH4FqExhC4gYAMYvQPfmB6BFagGTk0DMzaB8Axhfl7jGWmhyPYi8HBpsTDoBMPEX1JWBUqHiHNqvDEL323qT0Oe8jIQyN22l85uYb6CKmRECMI47O1m27iQ189U9TlCaPBr54UZdp5wNPbbW/9EJ5gM0cTr0chMRKhZCWboXjO8E5TnJGho6RGSCCTdUrqEE0qT5B6CGc+DEAtyrAAAAAElFTkSuQmCC",rk=[{id:"career-2",company:"SURESOFTTECH",companyLogo:Mx,position:"AI Simulation Engineer",department:"임베디드 기술 연구소 / 지능형 데이터팀",period:"2026.01 - 현재",transition:"프론트엔드에서 쌓은 실시간 데이터 처리·시각화 역량을 자율주행 시뮬레이션 도메인으로 확장",projects:[{name:"자율주행 궤적 예측 모델(Alpamayo) 시뮬레이션 연동 및 성능 평가 시스템 구축",period:"2026.01 - 현재",role:"AI 시뮬레이션 연동 / 성능 평가",impact:"CARLA 시뮬레이터 × AI 모델 실시간 연동 — 궤적 추론 0.8초 이내, 프레임 드랍 없는 시각화 달성",description:"자율주행 궤적 예측 모델(Alpamayo)을 CARLA 시뮬레이터에 연동하고, 추론 결과를 실시간 검증·시각화하는 평가 환경을 구축. 기존 오프라인 검증 방식을 시뮬레이션 루프 내 실시간 검증으로 전환하여 모델 평가 사이클을 단축.",tasks:["CARLA 소스 커스터마이징으로 시뮬레이터-AI 모델 간 실시간 양방향 데이터 통신 아키텍처 설계","동기/비동기 추론 파이프라인 설계 및 차량 Tick 기반 추론 제어 로직 구현","Point-wise 궤적 정확도 검증 모듈 및 실시간 모니터링 UI 개발","Hugging Face·Waymo Open Dataset 기반 Alpamayo-r1 모델 성능 지표 도출 및 오류 데이터 필터링"],achievements:["추론 지연 0.8초 이내 달성 — 오프라인 대비 모델 평가 피드백 루프 대폭 단축","다중 궤적 데이터를 프레임 드랍 없이 실시간 렌더링하는 모니터링 환경 구축","Waymo 데이터셋 기반 오류 데이터 자동 필터링 파이프라인 구현으로 데이터 검증 공수 절감"],techStack:{languages:["Python","C++"],libs:["CARLA","PyTorch","Hugging Face","NumPy","Pandas"],patterns:["동기/비동기 추론 파이프라인","시뮬레이터-모델 양방향 통신","Point-wise 검증"]}}]},{id:"career-1",company:"SURESOFTTECH",companyLogo:Mx,position:"Frontend Developer",department:"임베디드 기술 연구소 / 차량솔루션 1팀",period:"2023.03 - 2025.12",projects:[{name:"차량 통합 제어기(CCU2) Log Monitor & Analyzer",period:"2024.07 - 2025.06",role:"Frontend Lead / 아키텍처 설계",impact:"초당 8만 건 로그 무중단 처리 — 현업 엔지니어 분석 시간 5분→30초, 고객사 납품 일정 단축에 기여",description:"DLT/CAN/DoIP/SOMEIP 대용량 로그를 실시간 수집·분석하는 Electron 기반 분석 플랫폼. 기존 DLT-Viewer의 한계를 대체하여 비전문가도 직관적으로 분석 가능한 UX 구현.",tasks:["웹 뷰어 → Electron 데스크톱 앱 전환 설계 및 ZeroMQ/IPC 기반 비동기 수집 파이프라인 구축","가상 스크롤 + gridBufferDataObj 기반 탐색 최적화로 수십만 건 탐색 시 0.2초 미만 응답","Zustand 기반 전역 상태 + Custom Store 설계로 실시간 데이터 동기화 안정화","비개발 직군(차량 평가 엔지니어) 대상 UX 피드백 수렴 및 분석 워크플로우 재설계"],achievements:["렌더링 성능 2.3배 향상(1.04s→450ms), 메모리 30% 절감(3.3GB→2.0GB)","로그 분석 시간 5분→30초로 단축 — 엔지니어 일일 분석 처리량 증가에 기여","초당 80,000건 이상 로그를 UI Freezing 없이 실시간 시각화","차트 렌더링 Aggregation 적용으로 3.2s→0.48s(85% 개선)","테스트 코드 및 스크립트 모듈화 도입으로 기능 추가 시 장애 발생률 대폭 감소"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["ZeroMQ","DevExtreme","Zustand","TailwindCSS"],patterns:["이벤트 버스(useEventOn)","CustomStore","무한 스크롤 버퍼링"]}},{name:"사용자 정의 필터링 기반 DLT 로그 분석 툴",period:"2025.07 - 2025.09",role:"Frontend Lead / 성능 최적화",impact:"100만 건 로그 2초 이내 탐색 — 반복 분석 워크플로우 30~40% 단축",description:"수백만 건 DLT/CSV 로그를 사용자 맞춤 UI·필터링으로 분석하는 Electron 기반 툴. 반복 작업 자동화와 사용자 중심 레이아웃으로 현업 분석가의 실사용성에 집중.",tasks:["DevExtreme DataGrid 가상 스크롤 고도화 및 Stream API 기반 대용량 Export 파이프라인 구축","rc-dock 기반 도킹 레이아웃(패널 배치 저장·복원) 및 IPC 외부 뷰어 연동 자동화","정규식 호환성·UI 렌더링 이슈 등 반복 문제 트러블슈팅 플레이북 문서화"],achievements:["100만 건 이상 로그 로딩·탐색 평균 응답 속도 2초 이내 달성","Stream API 도입으로 대용량 CSV Export 시 메모리 사용량 60% 절감","100만 행 데이터 3초 이내 파일 변환·저장 고속 Export 구현","맞춤형 레이아웃 + 외부 뷰어 자동화로 반복 작업 제거, 워크플로우 30~40% 단축"],techStack:{languages:["React(TypeScript)","Electron","Node.js"],libs:["rc-dock","DevExtreme DataGrid","Recharts"],patterns:["IPC 통신","가상 스크롤(Virtual Scrolling)","스트리밍 데이터 처리"]}},{name:"차량제어 시험산출물 관리 시스템 고도화(VTDM)",period:"2025.09 - 2025.12",role:"Frontend / 아키텍처 개선",impact:"레거시 코드베이스 30% 경량화 — 리렌더링 80% 감소, 프레임 드랍 0% 달성",description:"차량 테스트/평가 산출물 클라우드 통합 관리 SaaS 플랫폼의 레거시 기술 부채 해소 및 구조적 리팩토링. 단순 기능 추가가 아닌 장기 운영을 고려한 아키텍처 개선에 집중.",tasks:["DDD 기반 아키텍처 재편 및 공통 로직 커스텀 훅 추상화로 유지보수성 강화","무한 스크롤 DOM 연산을 Web Worker로 분리하여 메인 스레드 블로킹 제거","Global → Local State 전환 및 AgGrid/AgChart 커스터마이징으로 대시보드 구현"],achievements:["DDD + 모듈화로 전체 코드베이스(LOC) 30% 절감","컴포넌트 의존성 최적화로 리렌더링 80% 감소(5회→1회)","Web Worker 연산 분산으로 대용량 리스트 스크롤 시 프레임 드랍 0% 달성","Global State 의존도 축소로 사이드 이펙트성 버그 발생 위험 최소화"],techStack:{languages:["React(TypeScript)","Node.js"],libs:["AgGrid","AgChart"],patterns:["Domain-Driven Design(DDD)","Web Worker","Custom Hooks","Docker","Spring Boot 협업"]}}]}],Qf="text-[11px] px-2.5 py-1 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted transition-colors duration-200 hover:border-(--border-hover)",ik=({techStack:e})=>x.jsxs("div",{className:"space-y-2",children:[x.jsx("div",{className:"text-[12px] font-semibold",children:"기술 스택"}),x.jsxs("div",{className:"space-y-1.5",children:[e.languages&&e.languages.length>0&&x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"언어/프레임워크"}),x.jsx("div",{className:"flex flex-wrap gap-1",children:e.languages.map(n=>x.jsx("span",{className:Qf,children:n},n))})]}),e.libs&&e.libs.length>0&&x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"라이브러리"}),x.jsx("div",{className:"flex flex-wrap gap-1",children:e.libs.map(n=>x.jsx("span",{className:Qf,children:n},n))})]}),e.patterns&&e.patterns.length>0&&x.jsxs("div",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-[11px] text-fg-muted min-w-[80px] text-center",children:"패턴/기법"}),x.jsx("div",{className:"flex flex-wrap gap-1",children:e.patterns.map(n=>x.jsx("span",{className:Qf,children:n},n))})]})]})]}),i1=({open:e,children:n,durationMs:i=360})=>x.jsx("div",{className:["grid overflow-hidden transition-[grid-template-rows]","ease-[cubic-bezier(.2,.8,.2,1)]",e?"grid-rows-[1fr]":"grid-rows-[0fr]"].join(" "),style:{transitionDuration:`${i}ms`},children:x.jsx("div",{className:"min-h-0 overflow-hidden",children:x.jsx("div",{className:["transition-[opacity,transform] ease-[cubic-bezier(.2,.8,.2,1)]","will-change-[opacity,transform]",e?"opacity-100 translate-y-0":"opacity-0 -translate-y-1"].join(" "),style:{transitionDuration:`${Math.max(220,i-80)}ms`},children:n})})}),ak=({text:e})=>{const n=/(\d[\d,.]*\s*(?:배|%|ms|s|초|분|건|GB|MB|회|개|행)?)(\s*→\s*\d[\d,.]*\s*(?:배|%|ms|s|초|분|건|GB|MB|회|개|행)?)?/g,i=[];let a=0,s;for(;(s=n.exec(e))!==null;)s.index>a&&i.push({text:e.slice(a,s.index),isMetric:!1}),i.push({text:s[0],isMetric:!0}),a=s.index+s[0].length;return a<e.length&&i.push({text:e.slice(a),isMetric:!1}),i.length===0?x.jsx(x.Fragment,{children:e}):x.jsx(x.Fragment,{children:i.map((c,u)=>c.isMetric?x.jsx("span",{className:"font-semibold text-[var(--accent)]",children:c.text},u):x.jsx("span",{children:c.text},u))})},a1=({expanded:e,className:n="w-4 h-4"})=>x.jsx("svg",{className:[n,"shrink-0 text-fg-muted transition-transform duration-200",e?"rotate-180":""].join(" "),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),lk=({project:e})=>{const[n,i]=j.useState(!1);return x.jsxs("article",{className:["rounded-2xl border bg-[var(--bg-soft)] px-4 py-3","transition-colors duration-200",n?"border-gray-400":"border-[var(--border-subtle)]","hover:border-[var(--accent)]/50"].join(" "),children:[x.jsxs("button",{type:"button","aria-expanded":n,onClick:()=>i(a=>!a),className:"w-full text-left cursor-pointer",children:[x.jsxs("div",{className:"flex items-center justify-between gap-3",children:[x.jsxs("div",{className:"min-w-0 flex-1",children:[x.jsx("h4",{className:"text-[15px] font-semibold leading-snug",children:e.name}),x.jsxs("div",{className:"mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5",children:[x.jsx("span",{className:"text-[12px] text-fg-muted",children:e.role}),x.jsx("span",{className:"text-[11px] text-fg-muted opacity-50",children:"|"}),x.jsx("span",{className:"text-[11px] text-fg-muted",children:e.period})]})]}),x.jsx(a1,{expanded:n})]}),e.impact&&x.jsxs("div",{className:["mt-2 flex items-start gap-2 rounded-lg px-3 py-2","bg-[var(--accent)]/[0.06] border border-[var(--accent)]/15"].join(" "),children:[x.jsx("svg",{className:"w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--accent)]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),x.jsx("span",{className:"text-[12px] leading-relaxed font-medium text-[var(--fg-default)]",children:e.impact})]})]}),x.jsx(i1,{open:n,durationMs:360,children:x.jsxs("div",{className:"mt-3",children:[e.description&&x.jsx("p",{className:"text-[12.5px] leading-relaxed text-fg-muted",children:e.description}),x.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),x.jsx("div",{className:"text-[12px] font-semibold mb-2 text-fg-muted",children:"주요 업무"}),x.jsx("ul",{className:"space-y-1.5 text-[12.5px] leading-relaxed text-fg-muted",children:e.tasks.map((a,s)=>x.jsxs("li",{className:"flex gap-2",children:[x.jsx("span",{className:"mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--fg-muted)]/40"}),x.jsx("span",{className:"min-w-0",children:a})]},s))}),e.achievements?.length?x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),x.jsxs("div",{className:"rounded-xl bg-[var(--accent)]/[0.06] border border-[var(--accent)]/20 p-3",children:[x.jsxs("div",{className:"flex items-center gap-1.5 mb-2.5",children:[x.jsx("svg",{className:"w-3.5 h-3.5 text-[var(--accent)]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),x.jsx("span",{className:"text-[12px] font-semibold text-[var(--accent)]",children:"성과"})]}),x.jsx("ul",{className:"space-y-2 text-[12.5px] leading-relaxed",children:e.achievements.map((a,s)=>x.jsxs("li",{className:"flex gap-2",children:[x.jsx("span",{className:"mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"}),x.jsx("span",{className:"min-w-0 text-[var(--fg-default)]",children:x.jsx(ak,{text:a})})]},s))})]})]}):null,e.techStack?x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"my-3 h-px bg-[var(--border-subtle)]/70"}),x.jsx(ik,{techStack:e.techStack})]}):null]})})]})},sk=({career:e})=>{const[n,i]=j.useState(!0);return x.jsxs("section",{className:"pb-8 last:pb-0",children:[x.jsx("header",{children:x.jsxs("button",{type:"button","aria-expanded":n,onClick:()=>i(a=>!a),className:["w-full rounded-2xl border bg-[var(--bg-elevated)]","px-4 py-3 transition-colors duration-200 cursor-pointer",n?"border-gray-400":"border-[var(--border-subtle)]","hover:border-[var(--accent)]/50"].join(" "),children:[x.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[x.jsxs("div",{className:"flex items-center gap-2.5",children:[e.companyLogo?x.jsx("img",{src:e.companyLogo,alt:`${e.company} logo`,className:"w-9 h-9 shrink-0 object-contain rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] p-1",loading:"lazy"}):x.jsx("div",{className:"w-9 h-9 shrink-0 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)]"}),x.jsxs("div",{className:"min-w-0 text-left",children:[x.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-2 gap-y-1",children:[x.jsx("h3",{className:"text-[16px] font-bold leading-tight truncate",children:e.company}),x.jsx("span",{className:"hidden sm:inline text-[12px] text-fg-muted",children:e.position})]}),e.department&&x.jsx("div",{className:"text-[11px] text-fg-muted mt-0.5",children:e.department})]})]}),x.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[x.jsx("div",{className:"text-[12px] text-fg-muted uppercase tracking-wide",children:e.period}),x.jsx(a1,{expanded:n,className:"w-5 h-5"})]})]}),e.transition&&x.jsx("div",{className:"mt-2.5 flex items-center gap-2 text-left",children:x.jsxs("div",{className:["inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5","bg-[var(--accent)]/[0.08] border border-[var(--accent)]/20"].join(" "),children:[x.jsx("svg",{className:"w-3 h-3 text-[var(--accent)] shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})}),x.jsx("span",{className:"text-[11px] font-medium text-[var(--accent)]",children:e.transition})]})})]})}),x.jsx(i1,{open:n,durationMs:420,children:x.jsx("div",{className:"space-y-4 mt-5 ml-2.5",children:e.projects.map((a,s)=>x.jsx(lk,{project:a,index:s},s))})})]})},ok=()=>x.jsx("div",{className:"space-y-0",children:rk.map(e=>x.jsx(sk,{career:e},e.id))}),uk=[{id:"pkg-1",name:"@broadcast-event-system",description:"“React 애플리케이션을 위한 타입 안전(Type-safe) 이벤트 버스 및 브로드캐스트 서비스입니다. React 훅을 사용할 때만 React가 필요하고, 그 외에는 의존성이 전혀 없는 순수 TypeScript(Zero dependencies)입니다.”",version:"1.0.3",githubUrl:"https://github.com/km-kwon/broadcast-event-system",npmUrl:"https://www.npmjs.com/package/broadcast-event-system",techStack:["React","TypeScript","event-driven","web-broadcast"]},{id:"pkg-2",name:"@circular-queue-react",description:"TypeScript와 React를 위한 고성능 원형 버퍼/큐입니다. 의존성은 없고(React는 선택 사항), 로그 처리, 스트리밍 데이터, 롤링 윈도우, 실시간 UI 업데이트에 좋습니다.",version:"1.0.2",githubUrl:"https://github.com/km-kwon/react-circular-queue",npmUrl:"https://www.npmjs.com/package/circular-queue-react",techStack:["React","TypeScript","Data Structure"]}],ck=()=>x.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"currentColor",children:x.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),fk=()=>x.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"currentColor",children:x.jsx("path",{d:"M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"})}),dk=({pkg:e})=>x.jsxs("div",{className:"bg-(--bg-soft) rounded-lg p-4 border border-(--border-subtle) hover:border-(--border-hover) transition-colors",children:[x.jsxs("div",{className:"mb-3 w-full ",children:[x.jsxs("div",{className:"w-full flex justify-between items-center",children:[x.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-bold font-mono",children:e.name}),x.jsxs("span",{className:hu,children:["v",e.version]}),e.downloads&&x.jsxs("span",{className:"text-[11px] text-fg-muted",children:["📦 ",e.downloads]})]}),x.jsxs("div",{className:"flex gap-3 text-[12px]",children:[e.githubUrl&&x.jsxs("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex gap-1.5 text-fg-muted hover:text-fg transition-colors",children:[x.jsx(ck,{}),x.jsx("span",{children:"GitHub"})]}),e.npmUrl&&x.jsxs("a",{href:e.npmUrl,target:"_blank",rel:"noopener noreferrer",className:"flex gap-1.5 text-fg-muted hover:text-fg transition-colors",children:[x.jsx(fk,{}),x.jsx("span",{children:"NPM"})]})]})]}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed",children:e.description})]}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.techStack.map(n=>x.jsx("span",{className:Qo,children:n},n))})]}),hk=()=>x.jsx("div",{className:"grid gap-3 md:grid-cols-1",children:uk.map(e=>x.jsx(dk,{pkg:e},e.id))}),mk=()=>{const[e,n]=j.useState("career"),i=[{key:"career",label:"경력"},{key:"opensource",label:"오픈소스"},{key:"stack",label:"기술 스택"}],a=()=>{switch(e){case"stack":return x.jsx(Ex,{});case"career":return x.jsx(ok,{});case"opensource":return x.jsx(hk,{});default:return x.jsx(Ex,{})}};return x.jsxs("section",{id:"skills",className:"mb-20",children:[x.jsxs("div",{className:ya,children:[x.jsxs("div",{children:[x.jsx("p",{className:xa,children:"Skills"}),x.jsx("h2",{className:ba,children:"경력 & 전문성"})]}),x.jsx("p",{className:du,children:"안전하고 견고한 제품을 만들기 위해 사용하는 기술들입니다."})]}),x.jsx("div",{className:"flex gap-2.5 mb-6",children:i.map(s=>x.jsx("button",{onClick:()=>n(s.key),className:tk(e===s.key),children:s.label},s.key))}),x.jsx("div",{className:Jo,children:a()})]})},pk=`요즘 개발자들 사이에서 이런 말, 한 번쯤은 들어봤을 거다.\r
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
`,gk=`JS 공부하다 보면 어느 순간 이런 상태가 된다.\r
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
`,yk=`자바스크립트 이벤트 루프를 공부하다 보면 꼭 이런 혼란이 온다.\r
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
`,xk=`React에서 Zustand를 쓰다 보면 “상태는 분명 바뀌었는데 이벤트 핸들러가 옛날 값을 찍는다” 같은 현상을 한 번쯤 만나게 된다.\r
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
`,bk=`## 0. 시작: “npm에 올렸는데… 뭔가 허전하다”\r
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
`,vk=`실차/로그 기반 모니터링 UI를 만들다 보면, 어느 순간부터 이런 문장이 몸에 새겨진다.\r
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
`,Sk=`# useState → useReducer → 도메인  분리 → Store 까지의 이야기

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

이제는 느낌이나 유행이 아니라, 요구사항과 제약, 팀의 운영 방식까지 포함한 **근거 기반의 최적 선택**이 더 중요하다고 생각한다.`,wk=`## 0. 시니어는 AI를 싫어하지 않았다. 오히려 너무 좋아했다.

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
`,Tk=`이전 글에서\r
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
`,Ck=`HTML/CSS/JS는 아는데… 그래서 “웹”이 어떻게 화면이 되는 건데?\r
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
`,kk=`개발하다 보면 이런 순간이 있다.\r
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
`,Ak=`“함수가 변수 기억하는 거요”로 끝내면 나중에 꼭 크게 맞는다\r
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
`,Ek=`최근에 프론트엔드 아키텍처를 다시 고민하면서\r
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
`,Mk=Object.assign({"./mdDatas/AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여.md":pk,"./mdDatas/JS 기본 동작원리, “진짜 뼈대”만 잡아보기.md":gk,"./mdDatas/JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편).md":yk,"./mdDatas/React × Zustand × Closure stale closure 방지 전략 기술.md":xk,"./mdDatas/React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기.md":bk,"./mdDatas/React 실시간 Trigger 처리 최적화 삽질기.md":vk,"./mdDatas/useState → useReducer → 도메인 분리 → Store 까지의 이야기.md":Sk,"./mdDatas/“AI로 업무 전체 자동화하면 끝 아니야 ”이라는 시니어를 보며 느낀 찝찝함.md":wk,"./mdDatas/브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편).md":Tk,"./mdDatas/웹(Web)이란 도대체 뭘까.md":Ck,"./mdDatas/커링 컬링도 아니고 이게뭐누.md":kk,"./mdDatas/클로저란 당최 무엇인가.md":Ak,"./mdDatas/프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처.md":Ek}),Qt=e=>Mk[`./mdDatas/${e}.md`]||"",jk=[{id:"react-zustand-closure",slug:"react-zustand-closure-stale-closure",title:"React × Zustand × Closure: stale closure 방지 전략 기술 정리",excerpt:"Zustand 쓰다가 '아니 왜 값이 안 바뀌지?' 하고 3시간 멍때린 적 있나요? 저도요. 결국 범인은 stale closure였습니다… 진짜 황당해서 정리해둔 글입니다. 나처럼 고통받지 말라고.",date:"2025년 12월 15일",tags:["React","Zustand","JavaScript","Closure","State Management"],cover:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Qt("React × Zustand × Closure stale closure 방지 전략 기술")},{id:"js-basic",slug:"js-basic",title:'JS 기본 동작원리, "진짜 뼈대"만 잡아보기',excerpt:"비동기 개념을 계속 외우기만 했다면, 이번엔 뼈대부터 잡자. Heap/Call Stack이 무엇이고, JS가 왜 싱글 스레드인지, 비동기는 누가 처리하는지(Web APIs/Node APIs), 그리고 Task Queue vs Microtask Queue가 실행 순서를 어떻게 갈라놓는지. 딱 이 흐름만 머리에 넣으면 async/await도 결국 같은 얘기라는 걸 이해하게 된다.",date:"2025년 12월 5일",tags:["JavaScript","기초","동작원리"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Qt("JS 기본 동작원리, “진짜 뼈대”만 잡아보기")},{id:"react-trigger-optimization",slug:"react-realtime-trigger-optimization",title:"React 실시간 Trigger 처리 최적화 삽질기 (Worker, Throttle, Time-slicing… 결국 Baseline이 이겼다.)",excerpt:"실시간 이벤트 들어올 때 UI가 뚝뚝 끊기길래, WebWorker부터 throttle까지 별짓 다 해봤습니다. 근데 결국… 가장 단순한 방법이 이겼습니다. 내 삽질의 역사 공유합니다.",date:"2025년 11월 28일",tags:["React","Performance","WebWorker","Optimization"],cover:"https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Qt("React 실시간 Trigger 처리 최적화 삽질기")},{id:"web-fundamentals",slug:"what-is-web",title:"웹(Web)이란 도대체 뭘까?",excerpt:"HTML/CSS/JS는 아는데 ‘그래서 웹이 어떻게 화면이 되는 건데?’ 하고 멈춰본 적 있나요? 저도 그래서 한 번 아주 기초부터 갈아엎고 정리해봤습니다. 웹의 원리 이해하면 프론트가 더 잘 보임.",date:"2025년 10월 20일",tags:["Web","HTTP","Browser","Fundamentals"],cover:"https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:Qt("웹(Web)이란 도대체 뭘까")},{id:"closure-deep-dive",slug:"what-is-closure",title:"클로저란 당최 무엇인가",excerpt:"면접만 가면 꼭 나오는 게 클로저인데… 정작 설명하려면 머릿속이 하얘지는 그 개념. 그래서 빡쳐서(?) 제대로 다시 정리했습니다. 이 글 읽고 나면 최소한 면접에서 우는 일은 없습니다.",date:"2025년 9월 15일",tags:["JavaScript","Closure","Scope","Fundamentals"],cover:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Qt("클로저란 당최 무엇인가")},{id:"currying",slug:"what-is-currying",title:"커링?? 컬링도 아니고 이게뭐누",excerpt:"커링 처음 보면 ‘이걸 왜 씀?’ 싶은데, 막상 알아두면 코드가 맘 편해지는 순간이 옵니다. 이 글은 커링을 드디어 사람 언어로 설명해본 글입니다. 예제 많음. 자존감 지킴.",date:"2025년 8월 25일",tags:["JavaScript","Functional Programming","Currying"],cover:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:Qt("커링 컬링도 아니고 이게뭐누")},{id:"react-library-ci-cd",slug:"react-library-test-ci-cd",title:'React 라이브러리 만들고 "테스트 + CI + 자동 배포" 붙이기',excerpt:"npm 배포 한 번 해보겠다고 시작했다가 GitHub Actions, semantic-release, 토큰 지옥까지 거쳐온 이야기. 진짜 별별 오류 다 봄. 그래도 자동 배포 되면 감동합니다. (눈물)",date:"2025년 12월 10일",tags:["React","Library","Testing","CI/CD","npm"],cover:"https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Qt("React 라이브러리 만들고 “테스트 + CI + 자동 배포” 붙이기")},{id:"js-event-loop-part1",slug:"js-event-loop-understanding-part1",title:"JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)",excerpt:"비동기 헷갈리는 사람들 99%가 ‘레이어 구분’을 안 해서 그렇습니다. 엔진 / 런타임 / 브라우저 구분하면 진짜 다 이해됩니다. 나도 이거 알기 전엔 async/await이랑 싸움 중이었음.",date:"2025년 6월 18일",tags:["JavaScript","Event Loop","Asynchronous","Architecture"],cover:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",category:"frontend",content:Qt("JS 이벤트 루프를 이해하려면, 먼저 세 개의 레이어부터 갈라야 한다 (1편)")},{id:"browser-rendering-part2",slug:"browser-js-rendering-mechanism-part2",title:"브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)",excerpt:"브라우저는 생각보다 훨씬 복잡합니다. 렌더링 파이프라인 보면 ‘아 그래서 리렌더링이 느렸구나…’ 하고 현타 오는 그 글. 성능 최적화 힌트도 같이 담겨있음.",date:"2025년 6월 20일",tags:["Browser","Rendering","JavaScript","Performance"],cover:"https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:Qt("브라우저 안에서 JS와 렌더링은 어떻게 돌아가는가 (2편)")},{id:"frontend-ddd-fsd",slug:"frontend-ddd-fsd-domain-slice",title:"프론트엔드에서 DDD와 FSD, 그리고 '도메인 슬라이스' 아키텍처",excerpt:"프로젝트가 커질수록 파일이 정신없어지는 이유, 사실 구조 때문입니다. DDD/FSD를 프론트에 맞게 해석해서 ‘아 이래서 구조가 필요한 거구나’ 감이 오도록 써본 글.",date:"2025년 5월 15일",tags:["Architecture","DDD","FSD","Frontend","Design Pattern"],cover:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"frontend",content:Qt("프론트엔드에서 DDD와 FSD, 그리고 ‘도메인 슬라이스’ 아키텍처")},{id:"ai-era-maintenance",slug:"ai-era-code-maintenance",title:'AI 시대, "유지보수도 AI가 하면 되지 않나요?"라는 말에 대하여',excerpt:"‘AI가 코드도 짜주는데 유지보수도 하겠지?’라는 말을 들었는데… 현실은 전혀 다릅니다. AI가 잘하는 것과 진짜 사람이 해야 하는 일이 뭐가 다른지 정리한 글. 약간 분노도 섞여 있음.",date:"2026년 1월 1일",tags:["AI","Software Engineering","Maintenance","Opinion"],cover:"https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1800&q=80",category:"devloper",content:Qt("AI 시대, “유지보수도 AI가 하면 되지 않나요 ”라는 말에 대하여")},{id:"senior-ai-idea",slug:"senior-ai-idea",title:"“AI로 업무 전체 자동화하면 끝 아니야?” 라고 말씀하시는 시니어를 보며 느낀 찝찝함",excerpt:"요즘 들어서 AI 쓰면 금방이잖아? 라는 말을 너무 많이 듣는다. 그리고 마치 구호처럼 느껴진다... 나에게 와닿지 않았던 이유에 대한 고찰과정과 개발자란 직업은 어떻게 변화되어가는지에 대해서 스스로 생각해 보았다.",date:"2026년 1월 15일",tags:["AI","Automation","Technical Debt","Engineering Culture"],cover:"https://plus.unsplash.com/premium_photo-1764695396810-3992d6bc4e51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"devloper",content:Qt("“AI로 업무 전체 자동화하면 끝 아니야 ”이라는 시니어를 보며 느낀 찝찝함")},{id:"reducer-migration-store",slug:"reducer-migration-store",title:"useState → useReducer → 도메인 분리 → Store 까지의 이야기",excerpt:"지역 State를 Reducer로 액션함수로 분리하는 과정에서 응집도를 낮추기 위한 고민, 어떻게 작성해야 차후 전역 State로 빼기 용이할까 생각해본 그 일련의 과정들을 공유한다. (너무 어려웠어...)",date:"2026년 1월 19일",tags:["State","Architecture","Refactoring","Engineering Culture"],cover:"https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",category:"devloper",content:Qt("useState → useReducer → 도메인 분리 → Store 까지의 이야기")}],dn=[...jk].sort((e,n)=>{const i=c=>{const u=c.match(/(\d+)년\s*(\d+)월\s*(\d+)일/);if(u){const[,f,m,h]=u;return new Date(parseInt(f),parseInt(m)-1,parseInt(h))}return new Date(0)},a=i(e.date);return i(n.date).getTime()-a.getTime()}),Dk="text-[14px] text-fg-muted leading-relaxed cursor-pointer hover:text-(--accent) transition-colors duration-300",Rk=()=>[...dn].sort(()=>Math.random()-.5).slice(0,2),Nk=()=>{const e=Jl(),[n]=j.useState(Rk),i=s=>{e(`/blog/${s}`)},a=()=>{e("/blog")};return x.jsxs("section",{id:"experience",className:"mb-20",children:[x.jsx("div",{className:ya,children:x.jsxs("div",{className:"w-full",children:[x.jsx("p",{className:xa,children:"Blog"}),x.jsxs("div",{className:"w-full flex justify-between",children:[x.jsx("h2",{className:ba,children:"기술 블로그"}),x.jsx("p",{className:Dk,onClick:a,children:"포스팅 전체 보기 →"})]})]})}),x.jsx("div",{className:"grid gap-6",children:n.map(s=>x.jsx("article",{onClick:()=>i(s.slug),role:"button",tabIndex:0,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&i(s.slug)},className:`group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle) cursor-pointer\r
                       transition-all duration-300 ease-out\r
                       hover:border-(--accent-border) hover:-translate-y-0.5\r
                       [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]\r
                       [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]\r
                       focus:outline-none focus:ring-2 focus:ring-(--accent)/30`,children:x.jsxs("div",{className:"grid md:grid-cols-[240px_1fr] md:h-[200px]",children:[s.cover&&x.jsxs("div",{className:"relative h-[180px] md:h-[200px] bg-(--bg-soft)",children:[x.jsx("img",{src:s.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),x.jsx("div",{className:"absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/55 via-black/15 to-transparent"})]}),x.jsxs("div",{className:"p-6 md:overflow-hidden",children:[x.jsx("h3",{className:"text-[20px] font-semibold leading-snug mb-2 line-clamp-1",children:s.title}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2",children:s.excerpt}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.tags.slice(0,8).map(c=>x.jsx("span",{className:"text-[11px] px-2.5 py-1 rounded-full bg-(--accent-subtle) border border-(--accent-border) text-(--accent)",children:c},c))}),x.jsx("div",{className:"flex items-center justify-between text-[12px] text-fg-muted",children:x.jsx("span",{children:s.date})})]})]})},s.id))})]})};function Ok(e){return new Worker("/portfolio/assets/fibWorker-cslZksJc.js",{name:e?.name})}const _k=()=>{const[e,n]=j.useState(null),[i,a]=j.useState(null),[s,c]=j.useState(!1),[u,f]=j.useState(0),m=j.useRef(null);j.useEffect(()=>{const y=new Ok;return m.current=y,y.onmessage=g=>{n(g.data.result),a(g.data.time),c(!1)},()=>{m.current?.terminate(),m.current=null}},[]),j.useEffect(()=>{let y;const g=()=>{f(b=>(b+2)%360),y=requestAnimationFrame(g)};return y=requestAnimationFrame(g),()=>cancelAnimationFrame(y)},[]);const h=()=>{m.current&&(c(!0),n(null),a(null),m.current.postMessage({type:"CALCULATE_FIBONACCI",number:45}))};return x.jsxs("section",{id:"lab",className:"mb-20",children:[x.jsxs("div",{className:ya,children:[x.jsxs("div",{children:[x.jsx("p",{className:xa,children:"Web Worker Lab"}),x.jsx("h2",{className:ba,children:"스레드 분리 실험"})]}),x.jsx("p",{className:du,children:"무거운 계산을 Worker로 분리하여 메인 스레드(UI)를 보호합니다."})]}),x.jsx("div",{className:Jo,children:x.jsxs("div",{className:"grid items-center gap-5 md:grid-cols-2",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[x.jsx("h3",{className:"text-[15px] font-medium",children:"Fibonacci Calculator"}),x.jsx("span",{className:hu,children:"Worker Thread"})]}),x.jsxs("p",{className:"text-[13px] text-fg-muted leading-[1.7] mb-5",children:["'계산 시작'을 누르면"," ",x.jsx("strong",{children:"DP가 아닌 피보나치 수열(45번째)"}),"을 계산합니다. 메인 스레드였다면 화면이 멈췄겠지만, Web Worker 덕분에 우측 애니메이션은 멈추지 않습니다."]}),x.jsx("button",{onClick:h,disabled:s,className:"w-full inline-flex items-center justify-center gap-2 text-[13px] px-4 py-2.5 rounded-lg border border-(--accent-border) bg-(--accent-subtle) text-fg enabled:hover:bg-(--accent)/10 enabled:hover:border-(--accent) enabled:hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",children:s?x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"inline-flex h-4 w-4 items-center justify-center",children:x.jsx("span",{className:"h-3 w-3 rounded-full border border-current border-t-transparent animate-spin"})}),x.jsx("span",{children:"계산 중..."})]}):"▶ 무거운 계산 시작 (Fib 45)"})]}),x.jsxs("div",{className:"relative flex flex-col items-center justify-center min-h-40 h-full rounded-2xl border border-(--border-subtle) bg-(--bg) px-5 py-4 overflow-hidden",children:[x.jsx("div",{className:"absolute top-3 right-3 text-[10px] text-fg-muted",children:"Main Thread UI"}),x.jsx("div",{className:"w-6 h-6 rounded-md mb-3 bg-[linear-gradient(135deg,var(--fg),var(--fg-muted))]",style:{transform:`rotate(${u}deg)`}}),x.jsx("span",{className:"text-[11px] text-fg-muted",children:"▲ UI Frame (Always Running)"}),x.jsx("div",{className:"w-full h-px my-4 bg-(--border-subtle)"}),x.jsxs("div",{className:"text-center",children:[x.jsx("div",{className:"text-[11px] text-fg-muted",children:"Result (Fib 45)"}),x.jsx("div",{className:"text-[24px] font-semibold my-1",children:e!==null?e.toLocaleString():"-"}),x.jsx("div",{className:"text-[10px] text-fg-muted",children:i!==null?`Time: ${i.toFixed(1)}ms`:"-"})]})]})]})})]})},Lk={id:"gdsc-1st-team-lead-ai-project",title:"Google Developer Student Clubs (GDSC) 1기 팀장",subTitle:"AI 분리수거 리워드 앱 개발 (팀장)",period:["2022.09","2023.08"],mainContent:["GDSC 1기 팀장으로서 Flutter, TensorFlow, Firebase를 활용한 AI 분리수거 리워드 앱 개발 프로젝트 주도.","3개월 단기 프로젝트 기획 단계에서 기능 우선순위를 명확히 선정하고, 일정 및 리스크를 면밀히 관리.","TensorFlow 기반 이미지 분류 모델 학습을 수행하고 모바일 환경에 맞춰 최적화.","Firebase를 활용하여 실시간 데이터베이스 연동 및 리워드 시스템 백엔드 기능 구현.","프론트엔드부터 AI 모델 서빙까지 전체적인 엔드투엔드(End-to-End) 시스템을 설계하고 운영."],result:"국내 50개 팀 중 8위달성, 전사적 시스템의 전략적 설계 및 통합 운영 역량 강화.",tags:["GDSC","Team Lead","Project Manager","AI/ML","Flutter","TensorFlow","Firebase"],type:"activity"},zk=Object.freeze(Object.defineProperty({__proto__:null,gdscActivity:Lk},Symbol.toStringTag,{value:"Module"})),Bk={id:"ics-lab-research-tor-vpn",title:"ICS Lab 자기주도연구 (교내활동)",subTitle:"다크웹 포렌식 기법 연구",period:["2024.03","2024.06"],mainContent:["Tor와 VPN의 암호화 프로토콜 및 익명성 메커니즘을 심층적으로 비교 분석.","다크웹 환경에서의 사용자 행위 추적 한계점을 파악하고 기술적 난제를 식별.","네트워크 트래픽, 메모리, 시스템 로그 분석을 통합한 실질적인 포렌식 기법 설계.","실제 환경과 유사한 시나리오를 구축하여 설계한 포렌식 기법의 유효성을 검증.","네트워크 보안 및 디지털 포렌식 분야에 기여하며 문제 해결 능력과 독립적인 연구 수행 역량을 향상."],result:"Tor와 VPN의 익명성 차이를 명확히 규명 및 다크웹 사용자 행위 추적을 위한 실질적 포렌식 기법 논문 작성.",tags:["Research","Security","Forensics","Darkweb","Network"],type:"activity"},Vk=Object.freeze(Object.defineProperty({__proto__:null,icsLabActivity:Bk},Symbol.toStringTag,{value:"Module"})),Pk={id:"samteo-night-school-vp",title:"봉사 중앙 동아리 샘터야학 (부회장)",subTitle:"야학 봉사 동아리 (부회장)",period:["2022.09","2024.08"],mainContent:["지역사회 어르신 대상 기초 국어, 수학, 영어 검정고시반 운영 및 수업 봉사 진행 (총 2년 활동).","2023년부터 부회장직을 수행하며 동아리 운영, 기획, 홍보 전반을 총괄.","체계적인 수업 커리큘럼을 구성하고 신규 봉사자 교육을 주도하여 수업 질 향상.","동아리원들의 협력을 유도하고 어르신 맞춤형 학습 지원을 통해 성공적인 운영 견인.","조직 관리 및 기획 경험을 통해 실질적인 리더십과 조직 운영 능력을 발전."],result:"교내 동아리 콘테스트 금상 수상, VMS 우수 지역사회 봉사단 선정(2023.06).",tags:["Volunteering","Education","Club","Leadership","Management"],type:"activity"},Uk=Object.freeze(Object.defineProperty({__proto__:null,samteoActivity:Pk},Symbol.toStringTag,{value:"Module"})),Ik={id:"whois-mentor-cl123",title:"Whois 정보보안 소학회 (멘토)",subTitle:"정보보안 소학회 (멘토)",period:["2019.03","2024.08"],mainContent:["1학년부터 Whois 정보보안 소학회 회원으로 활동하며 웹 프로그래밍, C 언어, 자료구조 스터디에 참여.","3학년부터는 '멘토'로 참여하여 후배 대상 보안 및 개발 관련 교육을 주도적으로 진행.","5년 6개월간 회원 → 멘토로 성장하며 보안 교육 주도","체계적인 커리큘럼 설계와 실습 중심 교육 방식을 도입하여 후배들의 이해도와 학습 효과를 크게 향상."],result:"기술적인 전문성 향상뿐만 아니라, 멘토로서의 리더십과 교육 능력 발전.",tags:["Security","Mentoring","Club","Education","Leadership"],type:"activity"},Hk=Object.freeze(Object.defineProperty({__proto__:null,whoisMentorActivity:Ik},Symbol.toStringTag,{value:"Module"})),Fk={id:"likelion-11th-scrum-master",title:"멋쟁이 사자처럼 11기 (스크럼 마스터)",subTitle:"일정 관리 앱 개발 (스크럼 마스터)",period:["2023.03","2023.09"],mainContent:["11기 멤버로 활동하며 React.js와 Flutter WebView를 활용한 일정 관리 애플리케이션 제작 프로젝트 참여.","프로젝트 개발 과정에 스크럼(Scrum) 애자일 방법론을 적극적으로 적용.","스크럼 마스터 역할을 맡아 전반적인 프로젝트 관리(일정, 이슈 조율)와 팀워크 강화를 주도.","멘토링을 통해 스크럼 마스터로서 효과적인 스프린트 계획 및 실행 방법에 대한 실무적 인사이트를 학습하고 적용."],result:"스크럼 마스터 경험을 통해 프로젝트 관리 능력 및 팀워크 역량 강화, 애자일 스크럼 프로세스에 대한 실무적 이해를 증진.",tags:["Like Lion","Club","Project Development","Scrum Master","Agile","React.js","Flutter","Teamwork"],type:"activity"},qk=Object.freeze(Object.defineProperty({__proto__:null,likelionActivity:Fk},Symbol.toStringTag,{value:"Module"})),Gk={id:"cyber-security-student-council-director",title:"사이버보안학과 학생회 (집행국장)",subTitle:"사이버보안학과 학생회 (집행국장)",period:["2022.09","2023.12"],mainContent:["사이버보안학과 학생회 `Cloud`의 집행국장으로서 학과 내 행사 및 학습 커뮤니티 기획,운영.","SW 교육과 IT 트렌드 공유를 위한 스터디 프로그램을 직접 기획 및 운영.","학우들의 요구사항 조사 및 다양한 학습 스타일과 참여 가능 시간을 고려한 커리큘럼 설계 및 조율.","단순 행사를 넘어 세미나 등 참여 중심의 운영과 피드백 기반의 개선 활동을 주기적으로 수행.","다른 학생회원들과의 협력 과정에서 의견 조율, 역할 분담, 갈등 완화 등 리더십을 발휘."],result:"학우들의 학습 성장을 이끌며 학생회 조직 주도, 프로젝트 기획 및 이해관계자간 조율 역량을 향상.",tags:["Student Council","Leadership","Planning","Communication","Management","Community"],type:"activity"},Yk=Object.freeze(Object.defineProperty({__proto__:null,studentCouncilActivity:Gk},Symbol.toStringTag,{value:"Module"})),Xk="text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-fg-muted",Jk={"trouble-shooting":"text-red-400 border-red-400/30",learning:"text-blue-400 border-blue-400/30",achievement:"text-green-400 border-green-400/30","side-project":"text-purple-400 border-purple-400/30",activity:"text-yellow-400 border-yellow-400/30"},Qk={"trouble-shooting":"Trouble Shooting",learning:"Learning",achievement:"Achievement","side-project":"Side Project",activity:"Activity"},jx=({activity:e,isActive:n})=>x.jsx("article",{className:"w-full h-full flex flex-col","aria-hidden":!n,children:x.jsxs("div",{className:"w-full flex-1 px-5 py-5 md:px-7 md:py-6 flex flex-col justify-between",children:[x.jsxs("div",{className:"flex w-full flex-col gap-3",children:[x.jsxs("div",{className:"flex w-full justify-between items-center gap-2",children:[x.jsx("span",{className:`inline-flex items-center text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${Jk[e.type]}`,children:Qk[e.type]}),x.jsx("span",{className:`hidden md:inline-block px-3 py-1 rounded-full\r
                         border border-(--border-subtle) bg-(--bg-soft)\r
                         text-[11px] text-fg-muted`,children:e.period.join(" ~ ")})]}),x.jsx("h3",{className:"text-[18px] md:text-[19px] font-semibold text-fg leading-snug",children:e.title}),x.jsx("p",{className:"text-[12px] md:text-[13px] text-fg-muted",children:e.subTitle}),x.jsx("div",{className:"text-[13px] text-fg-muted leading-[1.7]",children:x.jsx("ul",{className:"space-y-1.5",children:e.mainContent.map((i,a)=>x.jsxs("li",{className:"flex",children:[x.jsx("span",{className:"mt-[3px] mr-1 text-[10px]",children:"•"}),x.jsx("span",{children:i})]},a))})}),e.result&&x.jsx("p",{className:"text-[12px] md:text-[13px] text-green-400",children:e.result}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.tags.map(i=>x.jsx("span",{className:Xk,children:i},i))})]}),e.link&&x.jsx("div",{className:"mt-3",children:x.jsxs("a",{href:e.link.href,target:"_blank",rel:"noreferrer",className:`inline-flex items-center gap-1 text-[12px] text-fg-muted\r
                         hover:text-fg transition-colors duration-200`,children:[x.jsx("span",{children:e.link.label}),x.jsx("span",{children:"↗"})]})})]})}),Ko=({isActive:e,isPaused:n,duration:i,size:a=16,strokeWidth:s=2})=>{const c=(a-s)/2,u=2*Math.PI*c;return x.jsxs("div",{className:"relative flex items-center justify-center",style:{width:a,height:a},children:[x.jsx("svg",{className:"absolute",width:a,height:a,style:{transform:"rotate(-90deg)"},children:x.jsx("circle",{cx:a/2,cy:a/2,r:c,fill:"none",className:"stroke-(--border-subtle)",strokeWidth:s,opacity:.4})}),x.jsx("svg",{className:"absolute",width:a,height:a,style:{transform:"rotate(-90deg)"},children:x.jsx("circle",{cx:a/2,cy:a/2,r:c,fill:"none",className:"stroke-(--accent)",strokeWidth:s,strokeLinecap:"round",style:{strokeDasharray:u,strokeDashoffset:e?0:u,transition:e?`stroke-dashoffset ${i}ms linear`:"stroke-dashoffset 0ms",animationPlayState:n?"paused":"running"}})}),x.jsx("span",{className:["w-2 h-2 rounded-full","transition-all duration-200 ease-out",e?"bg-(--accent)":"bg-(--bg-elevated) border border-(--border-subtle)"].join(" ")})]})},Kf=4e3,Dx=500,Kk=Object.assign({"./data/GDSC/index.ts":zk,"./data/ICSLab/index.ts":Vk,"./data/Samtor/index.ts":Uk,"./data/Whois/index.ts":Hk,"./data/lion/index.ts":qk,"./data/majorClub/index.ts":Yk}),Sl=Object.values(Kk).map(e=>e.default??Object.values(e)[0]),Zk=()=>{const[e,n]=j.useState(0),[i,a]=j.useState(!0),[s,c]=j.useState(!1),[u,f]=j.useState(!1),m=j.useRef(null),h=j.useRef(null),y=j.useRef(0),g=j.useRef(0),b=Sl.length;j.useEffect(()=>{const A=()=>{typeof window>"u"||f(window.innerWidth<1e3)};return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);const v=j.useCallback(()=>{n(A=>(A+1)%b)},[b]),w=j.useCallback(()=>{n(A=>(A-1+b)%b)},[b]),E=j.useCallback(A=>{n(A),a(!1),setTimeout(()=>a(!0),3e3)},[]);j.useEffect(()=>{if(!i||s){h.current&&(clearInterval(h.current),h.current=null);return}return h.current=setInterval(()=>{v()},Kf),()=>{h.current&&clearInterval(h.current)}},[i,s,v]),j.useEffect(()=>{const A=V=>{V.key==="ArrowLeft"?w():V.key==="ArrowRight"&&v()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[v,w]);const M=A=>{y.current=A.touches[0].clientX},C=A=>{g.current=A.touches[0].clientX},O=()=>{if(!y.current||!g.current)return;const A=y.current-g.current;Math.abs(A)>50&&(A>0?v():w()),y.current=0,g.current=0};return x.jsxs("section",{id:"activity",className:"mb-20",children:[x.jsx("div",{className:ya,children:x.jsxs("div",{children:[x.jsx("p",{className:xa,children:"Activity"}),x.jsx("h2",{className:ba,children:"대외 활동"})]})}),u?x.jsxs("div",{className:"flex flex-col gap-6",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[x.jsx("div",{ref:m,className:"w-full overflow-hidden",onTouchStart:M,onTouchMove:C,onTouchEnd:O,children:x.jsx("div",{className:`\r
                flex w-full\r
                transition-transform\r
                duration-700\r
                ease-[cubic-bezier(0.22,0.61,0.36,1)]\r
                will-change-transform\r
              `,style:{transform:`translate3d(-${e*100}%, 0, 0)`},children:Sl.map((A,V)=>x.jsx("div",{className:"w-full mb-1 shrink-0 flex justify-center px-3",children:x.jsx("div",{className:"w-full h-full max-w-3xl rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) transition-all duration-300 hover:border-(--accent-border) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]",children:x.jsx(jx,{activity:A,isActive:V===e})})},A.id))})}),x.jsxs("div",{className:"relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]",children:[x.jsx("div",{className:"h-px w-full max-w-3xl bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6",children:Sl.map((A,V)=>{const Y=V===e;return x.jsxs("button",{type:"button",className:"relative flex flex-col items-center outline-none cursor-pointer shrink-0",onMouseEnter:()=>E(V),onClick:()=>E(V),"aria-label":`${A.title}로 이동`,children:[x.jsx("span",{className:["mb-1 h-[3px] w-5 sm:w-7 rounded-full","bg-(--border-subtle)",Y?"animate-border-pulse":"opacity-40"].join(" ")}),x.jsx(Ko,{isActive:Y,isPaused:s||!i,duration:Kf,size:16,strokeWidth:2}),x.jsx("span",{className:"mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-[80px] text-center line-clamp-2",children:A.subTitle})]},A.id)})})]})]}):x.jsxs("div",{className:"flex flex-col md:flex-row gap-8",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[x.jsx("div",{className:"w-64 shrink-0",children:x.jsxs("div",{className:"relative py-4",style:{height:Dx},children:[x.jsx("div",{className:"absolute left-[19px] top-4 bottom-4 w-px bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"relative h-full flex flex-col justify-evenly",children:Sl.map((A,V)=>{const Y=V===e;return x.jsxs("button",{type:"button",className:"relative flex items-center gap-4 outline-none cursor-pointer group/point text-left pl-1",onMouseEnter:()=>E(V),onClick:()=>E(V),"aria-label":`${A.title}로 이동`,children:[x.jsxs("div",{className:"relative z-10 flex items-center justify-center w-8 h-8 shrink-0",children:[Y&&x.jsx("div",{className:"absolute inset-0 bg-(--accent-subtle) rounded-full"}),x.jsx(Ko,{isActive:Y,isPaused:s||!i,duration:Kf,size:18,strokeWidth:2})]}),x.jsx("div",{className:"flex flex-col",children:x.jsx("span",{className:["text-[13px] font-medium transition-colors duration-200",Y?"text-fg":"text-fg-muted group-hover/point:text-fg-subtle"].join(" "),children:A.subTitle})})]},A.id)})})]})}),x.jsx("div",{ref:m,className:"flex-1 w-full overflow-hidden",style:{height:Dx},children:x.jsx("div",{className:`\r
                flex flex-col \r
                h-full w-full\r
                transition-transform \r
                duration-700 \r
                ease-[cubic-bezier(0.22,0.61,0.36,1)]\r
                will-change-transform\r
              `,style:{transform:`translate3d(0, -${e*100}%, 0)`},children:Sl.map((A,V)=>x.jsx("div",{className:"h-full w-full shrink-0 flex items-center justify-center",children:x.jsx("div",{className:"w-full max-h-full overflow-y-auto rounded-2xl border border-(--border-subtle) bg-(--bg-elevated) transition-all duration-300 hover:border-(--accent-border) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]",children:x.jsx(jx,{activity:A,isActive:V===e})})},A.id))})})]})]})},Wk="/portfolio/assets/banner-DP2kVVDA.png",$k={id:"llm-lstm-bert",banner:Wk,title:"리뷰 왓수다 (감성 분석 & 평점 예측)",subTitle:"리뷰 왓수다",subtitle:"SNS/포털 영화 리뷰 감성 분석 및 평점 예측 AI 서비스",summary:"자연어 처리(NLP)와 딥러닝(LSTM/BERT)을 활용하여 텍스트 리뷰의 감성을 분석하고 평점을 예측하는 AI 모델을 개발했습니다. 정형화되지 않은 SNS 리뷰 데이터의 가치를 재발견했습니다.",tags:["Python","TensorFlow","KoNLPy","BERT","Selenium"],links:[],period:"2022.09 – 2022.12",team:"AI Developer 2명, Data Analyst 1명",overview:"단순 별점만으로는 알 수 없는 구체적인 영화 평가를 분석하기 위해 시작된 프로젝트입니다. 네이버 영화 리뷰뿐만 아니라 유튜브, 인스타그램 등 평점 시스템이 없는 SNS의 텍스트 리뷰를 크롤링하여, LSTM과 BERT 모델을 통해 감성(긍정/부정)을 분류하고 예상 평점을 도출하는 시스템을 구축했습니다.",why:[{title:"Why NLP? (KoNLPy & Okt)",desc:"한글은 조사와 어미가 발달한 교착어이므로, 단순 띄어쓰기 기준 토큰화로는 의미 파악이 어렵습니다. 형태소 분석기(Okt)를 도입하여 불용어를 제거하고 실질 형태소만 추출함으로써 모델의 학습 효율을 극대화했습니다."},{title:"Why Hybrid Model? (LSTM & BERT)",desc:"순차적 데이터 처리에 강한 LSTM으로 가벼운 초기 모델을 구축하고, 문맥 양방향 이해도가 높은 BERT(KoBERT)를 도입하여 복잡한 구어체 리뷰의 감성 분류 정확도를 높이는 비교 연구를 수행했습니다."}],role:{percentage:"40% (Data Engineering & Model Training)",tasks:["데이터 파이프라인 구축: Selenium을 활용한 네이버 영화/SNS 리뷰 크롤링 및 CSV 데이터셋(200,000+) 구축","데이터 전처리(Preprocessing): 중복/결측치 제거, 정규 표현식을 이용한 특수문자 정제, KoNLPy 활용 형태소 분석 및 불용어 처리","LSTM 모델 설계 및 학습: Keras Tokenizer를 이용한 정수 인코딩, Padding 처리, 임베딩 레이어 및 LSTM 레이어 구성","성능 최적화: 리뷰 길이 분포 분석을 통한 최적 max_len 설정, 과적합(Overfitting) 방지를 위한 Dropout 및 Early Stopping 적용"]},troubleshooting:[{title:"데이터 불균형으로 인한 예측 편향(Bias) 문제 해결",problem:"초기 모델 학습 시, 긍정 리뷰(평점 8~10점)가 압도적으로 많아 모델이 무조건 '긍정'으로 예측하는 경향(Overfitting) 발생.",cause:"영화 리뷰 데이터 특성상 고평점 리뷰가 저평점보다 3배 이상 많은 'Class Imbalance' 상태였음.",solution:"Oversampling(SMOTE) 대신 데이터의 현실성을 유지하기 위해 Undersampling 기법을 적용하여 라벨별 비율을 1:1로 맞추고, 평점 구간을 1~10에서 1~5로 축소(Binning)하여 클래스 간 경계를 명확히 함.",learning:"모델의 아키텍처만큼이나 '데이터의 질과 분포'가 성능에 결정적인 영향을 미친다는 것을 체감함."},{title:"OOV(Out-Of-Vocabulary) 문제와 임베딩 품질 저하",problem:"신조어나 오타가 많은 SNS 리뷰 특성상, 학습된 단어 사전에 없는 단어(OOV)가 많아 모델의 정확도가 떨어짐.",cause:"기존 형태소 분석기 사전이 최신 인터넷 용어(예: '존잼', '노잼', '핵노잼')를 제대로 인식하지 못함.",solution:"Soynlp와 같은 비지도 학습 기반 토크나이저를 검토했으나, 데이터양의 한계로 사용자 지정 사전(User Dictionary)에 빈도수 높은 신조어를 수동으로 추가하여 형태소 분석기의 커버리지를 넓힘.",learning:"도메인 특화 데이터(SNS 리뷰)를 다룰 때는 범용 라이브러리에만 의존하지 않고, 데이터 특성에 맞는 전처리 커스터마이징이 필수적임을 배움."}],results:["LSTM 모델 정확도 85% 달성 (기존 베이스라인 대비 15% 향상)","평점 없는 SNS 텍스트 리뷰를 1~5점 척도로 정량화하는 모델 구축","비정형 데이터(댓글)의 시각화를 통해 영화 마케팅 인사이트 도출 가능성 확인"],images:[]},eA=Object.freeze(Object.defineProperty({__proto__:null,llmProject:$k},Symbol.toStringTag,{value:"Module"})),tA="/portfolio/assets/banner-CHMNdFhc.png",nA={id:"mogang",banner:tA,title:"모강(SW 강의용 다나와 서비스)",subTitle:"모강",subtitle:"SW 강의용 다나와 서비스 (강의 비교 플랫폼)",summary:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위해 1000+개의 강의 데이터를 수집·비교하는 플랫폼입니다. 2024학년도 후배들을 대상으로 배포하여 50+명의 긍정적인 반응을 얻었습니다.",tags:["Next.js","TypeScript","SSR","Styled-Components"],links:[],period:"2023.9 ~ 2024.03",team:"Frontend 1명, Backend 1명, 기획 2명, Designer 1명",overview:"수강하고 싶은 SW 강의를 선택하기 어려운 소비자들을 위한 'SW 강의용 다나와' 서비스입니다. 1000개 이상의 방대한 강의 데이터를 효율적으로 처리하고 비교하기 위해 Next.js(SSR)를 도입했습니다. 실제 교내 후배들을 대상으로 서비스를 제공하여 50명 이상의 유저로부터 긍정적인 피드백을 도출했습니다.",why:[{title:"Why Next.js? (SSR 도입)",desc:"1000개 이상의 강의 데이터를 처리하는 데 있어 클라이언트 사이드 렌더링(CSR)보다 서버 사이드 렌더링(SSR) 방식이 초기 로딩 속도와 검색 엔진 최적화(SEO) 측면에서 효율적이라 판단했습니다."},{title:"성장과 학습",desc:"CSR과 SSR의 차이를 이론을 넘어 직접 구현하며 비교해보고 싶었습니다. SSR이 모던 웹의 주요 렌더링 방식으로 떠오름에 따라, 기존 React 기반 지식과 비교하며 기술적 성장을 이루고자 했습니다."}],role:{percentage:"100% (Frontend Lead)",tasks:["Next.js 기반 SSR 아키텍처 설계: 초기 페이지 SSR 렌더링으로 SEO 및 LCP(Largest Contentful Paint) 최적화","SEO 및 성능 최적화: getServerSideProps, next/head 활용 메타 태그 동적 구성, Code Splitting(dynamic import) 및 next/image로 Lighthouse 90점+ 달성","추천 알고리즘 기반 렌더링: 유저 프로필/로그 기반 추천 리스트 UI 구현 및 Context API를 활용한 전역 상태 관리로 Props Drilling 해결","UI/UX 고도화: Atomic Design 패턴 일부 도입으로 컴포넌트 재사용성 강화, Skeleton UI 및 Framer-Motion 애니메이션 적용","반응형 웹 및 크로스 브라우징: Styled-Components 활용, viewport-units-buggyfill로 모바일(iOS/Android) 뷰포트 이슈 해결"]},troubleshooting:[{title:"무한 스크롤 중복 호출(Race Condition) 이슈 해결",problem:"스크롤이 하단에 도달할 때 데이터 로딩 중임에도 fetchNextPage()가 중복 호출되어, 불필요한 API 요청과 UI 중복 렌더링 발생. 특히 네트워크가 느리거나 Skeleton UI가 작을 때 심화됨.",cause:"react-infinite-scroll-component 라이브러리의 내부 스크롤 이벤트 감지 속도가 상태 업데이트(loading state)보다 빨라, 로딩 상태가 true로 변하기 전에 이벤트가 다시 트리거되는 Race Condition 발생.",solution:"1차로 isLoading 플래그를 도입해 중복 실행을 Guard Clause로 차단하고, 2차로 IntersectionObserver를 직접 구현하여 DOM 요소의 가시성(Visibility)을 정밀하게 감지하는 방식으로 제어권을 확보.",learning:"라이브러리에 의존하기보다 내부 동작 원리(DOM 감지 등)를 이해하는 것이 중요함을 깨달음. 비동기 상태 관리 시 Race Condition 위험을 인지하고 IntersectionObserver를 직접 다루며 제어 경험을 쌓음."}],results:["2023년 창업 동아리 캡스톤 디자인 평가 5위 (전체 25개 팀 중)","교내 소학회 내 소스코드 오픈 및 웹 개발 스터디 교재로 활용 (지식 공유)","실제 후배 50+명 대상 베타 테스트 진행 및 긍정적 반응 도출"],images:[]},rA=Object.freeze(Object.defineProperty({__proto__:null,mogangProject:nA},Symbol.toStringTag,{value:"Module"})),iA="/portfolio/assets/banner-DIUHLUxm.png",aA={id:"p2p-service",banner:iA,title:"Multi-Client FTP Server",subTitle:"P2P Service",subtitle:"리눅스 시스템 콜 기반의 동시성 파일 전송 서버",summary:"C언어와 리눅스 시스템 콜을 직접 활용하여 다중 접속을 지원하는 FTP 서버입니다. Fork 기반 멀티프로세싱과 파일 락(Flock)을 통해 데이터 무결성을 보장하는 동시성 제어를 구현했습니다.",tags:["C","Linux","Socket Programming","System Call","Multi-Processing"],links:[],period:"2023.09 ~ 2023.12",team:"Individual (100%)",overview:"네트워크 프로그래밍의 핵심인 소켓(Socket)과 리눅스 시스템 콜(System Call)을 깊이 있게 이해하기 위해 시작된 프로젝트입니다. 단순 1:1 전송을 넘어, `fork()`를 활용해 여러 클라이언트가 동시에 접속하여 파일을 업로드/다운로드할 수 있는 환경을 구축했고, 이 과정에서 발생하는 경쟁 상태(Race Condition)를 제어하기 위한 동기화 메커니즘을 설계했습니다.",why:[{title:"Why Low-Level Implementation?",desc:"고수준 라이브러리 없이 `open`, `read`, `write`, `socket` 등 커널 수준의 시스템 콜을 직접 다루며 OS가 I/O와 네트워크를 처리하는 방식을 근본적으로 이해하고자 했습니다."},{title:"Why Multi-Processing?",desc:"단일 프로세스 모델의 한계를 극복하고, 다수의 클라이언트 요청을 병렬적으로 처리하기 위해 `fork()`를 통한 자식 프로세스 생성 방식을 채택하여 독립적인 세션을 보장했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처: TCP/IP 기반의 연결 지향형 통신 구현 (Bind, Listen, Accept, Connect)","동시성 처리 (Concurrency): `fork()` 시스템 콜을 활용한 다중 클라이언트 접속 처리 및 좀비 프로세스 방지(`waitpid`)","동기화 및 무결성: `flock`을 활용한 파일 잠금(Reader/Writer Lock) 메커니즘 구현으로 데이터 손상 방지","프로토콜 설계 및 기능 구현: 로그인 인증, 파일 리스트(ls), 업로드/다운로드, 삭제 등 커스텀 FTP 명령어 처리 로직 개발","예외 처리 및 시그널 핸들링: `SIGINT` 등 시그널 포착을 통한 안전한 서버/클라이언트 종료 처리"]},troubleshooting:[{title:"동시 파일 접근 시 데이터 무결성 훼손 (Race Condition)",problem:"여러 클라이언트가 동시에 같은 파일에 업로드하거나 삭제를 시도할 때, 파일 내용이 뒤섞이거나 손상되는 경쟁 상태가 발생함.",cause:"운영체제 레벨에서 파일 디스크립터에 대한 동시 접근 제어가 기본적으로 보장되지 않아, Critical Section에 대한 보호 장치가 부재했음.",solution:"`flock()` 시스템 콜을 도입하여 파일 접근 시 Advisory Lock을 걸도록 구현. 쓰기 작업 시에는 Exclusive Lock(배타적 잠금)을, 읽기 시에는 Shared Lock(공유 잠금)을 적용하여 동시성을 제어함.",learning:"멀티 프로세스 환경에서 공유 자원(파일) 관리의 중요성과 OS가 제공하는 동기화 도구(Lock)의 동작 원리를 체득함."},{title:"예기치 않은 연결 종료와 좀비 프로세스 이슈",problem:"클라이언트가 강제 종료(`Ctrl+C`)될 때 서버 측의 자식 프로세스가 제대로 회수되지 않고 좀비 프로세스로 남아 리소스를 점유하는 현상.",cause:"부모 프로세스가 자식 프로세스의 종료 상태를 수신(`wait`)하지 않아 프로세스 테이블에 엔트리가 남음.",solution:"`signal(SIGCHLD)` 핸들러를 등록하고, 핸들러 내부에서 `waitpid()`를 비봉쇄(WNOHANG) 모드로 호출하여 종료된 자식 프로세스를 즉시 회수하도록 로직 개선.",learning:"프로세스 생명주기 관리와 시그널(Signal) 처리를 통한 안정적인 데몬(Daemon) 서버 구조의 필요성을 배움."}],results:["다중 클라이언트 환경에서 안정적인 파일 업로드/다운로드/삭제 기능 구현 완료","Flock 적용 후 동시 접근 시 데이터 오염 0건 달성 (무결성 확보)","로그인 보안 및 접근 제어 로직을 통해 기본적인 보안 파일 서버 구축"],images:[]},lA=Object.freeze(Object.defineProperty({__proto__:null,p2pProject:aA},Symbol.toStringTag,{value:"Module"})),sA="/portfolio/assets/banner-h9P_7FQW.png",oA={id:"secure-chat",banner:sA,title:"Secure Chat (보안 채팅 프로그램)",subTitle:"Secure-Chat",subtitle:"Java Socket & RSA/AES 하이브리드 암호화 메신저",summary:"Java 소켓 프로그래밍으로 1:1 통신을 구현하고, RSA 비대칭키로 AES 대칭키를 안전하게 교환하여 도청이 불가능한 보안 채팅 시스템을 구축했습니다.",tags:["Java","Socket","RSA","AES-256","Multi-Thread"],links:[],period:"2023.03 ~ 2023.06",team:"Individual (100%)",overview:"네트워크 통신의 기초인 소켓(Socket)을 활용해 1:1 채팅 프로그램을 구현하고, 그 위에 보안 계층을 입힌 프로젝트입니다. RSA 공개키 암호화 방식으로 대칭키(AES)를 안전하게 교환(Key Exchange)한 뒤, 실제 대화 내용은 AES-256으로 고속 암호화하여 전송하는 '하이브리드 암호화 시스템'을 직접 설계했습니다.",why:[{title:"Why Hybrid Encryption? (RSA + AES)",desc:"RSA는 보안성이 높지만 연산 속도가 느려 실시간 채팅에 부적합하고, AES는 빠르지만 키 배송(Key Distribution) 보안 문제가 있습니다. 이 둘을 결합해 '키 교환은 RSA, 메시지는 AES'로 처리하는 SSL/TLS의 기본 원리를 구현해보고자 했습니다."},{title:"Why Java Sockets?",desc:"고수준 라이브러리에 의존하지 않고, TCP 연결 수립(3-way handshake)부터 스트림(Stream) 데이터 처리, 스레드 관리까지 네트워크 통신의 로우 레벨 메커니즘을 깊이 있게 이해하기 위해 선택했습니다."}],role:{percentage:"100% (Individual)",tasks:["Socket 통신 아키텍처 설계: Server/Client 구조 및 Multi-thread(SendThread, ReceiveThread)를 이용한 양방향 비동기 통신 구현","RSA 키 교환 프로토콜 구현: Server의 공개키(Public Key) 생성 및 배포, Client의 AES 키 암호화 전송 및 Server의 복호화 로직(Key Exchange) 개발","AES-256 메시지 암호화: 대칭키 기반의 실시간 메시지 암호화/복호화 모듈(encryptAES256/decryptAES256) 구현","보안 무결성 검증: 송수신 양측의 평문(Plaintext)과 암호문(Ciphertext) 로그 비교를 통한 기밀성 및 해킹 안전성 검증"]},troubleshooting:[{title:"Socket 입력 스트림의 블로킹(Blocking I/O) 문제 해결",problem:"메시지를 수신하는 동안(readUTF) 스레드가 입력 대기 상태에 빠져, 내가 메시지를 보내고 싶어도(writeUTF) 전송이 불가능해지는 '반이중(Half-duplex)' 현상 발생.",cause:"Java의 기본 InputStream은 블로킹 방식이므로, 단일 스레드에서 송수신을 순차적으로 처리하려다 데드락과 유사한 대기 상태가 됨.",solution:"송신(SendThread)과 수신(ReceiveThread)을 담당하는 스레드를 분리(Multi-threading)하여, 입출력 작업이 서로를 차단하지 않고 독립적으로 수행되도록 아키텍처를 재설계함.",learning:"네트워크 I/O 처리 시 스레드 분리의 필요성과 동시성(Concurrency) 제어의 중요성을 체감함."},{title:"RSA 암호화 데이터 크기 제한(BadPaddingException) 해결",problem:"RSA로 데이터를 암호화할 때 간헐적으로 `javax.crypto.BadPaddingException` 오류가 발생하며 암호화에 실패함.",cause:"RSA 알고리즘은 키 크기(예: 2048bit)에 따라 한 번에 암호화할 수 있는 평문의 길이가 제한됨. 긴 문자열을 RSA로 직접 처리하려다 허용 범위를 초과함.",solution:"RSA는 오직 짧은 데이터인 'AES 대칭키' 교환에만 사용하고, 실제 긴 채팅 메시지는 블록 암호화 방식인 AES로 처리하도록 역할 분담을 명확히 하여 해결.",learning:"비대칭키 암호화의 용도(키 교환/서명)와 대칭키 암호화의 용도(데이터 암호화)를 구분해야 하는 기술적 이유를 명확히 이해함."}],results:["RSA-2048 및 AES-256 기반의 안전한 1:1 채팅 통신 성공","Wireshark 패킷 캡처 시 평문이 노출되지 않음을 확인 (기밀성 확보)","Server/Client 간 키 교환 및 암호화 통신 시연 성공 (터미널 로그 검증)"],images:[]},uA=Object.freeze(Object.defineProperty({__proto__:null,secureChatProject:oA},Symbol.toStringTag,{value:"Module"})),cA="/portfolio/assets/banner-xAa91UBm.png",fA={id:"ssangsang",banner:cA,title:"쌍상 (봉사 매칭 서비스)",subTitle:"쌍상",subtitle:"자원봉사자-수요자 매칭 크로스 플랫폼 웹앱",summary:"100+명의 동아리 회원이 사용하는 봉사 매칭 서비스. React 웹앱으로 개발하여 접근성을 높이고, 애자일 프로세스로 운영 중입니다.",tags:["React.js","TypeScript","Progressive Web App","Axios","Agile-Scrum"],links:[],period:"2023.01 ~ 현재 운영중",team:"Frontend 2명, Backend 1명",overview:"자원봉사자와 봉사를 받고 싶어하는 사람들을 매칭하기 위한 웹/앱 크로스 플랫폼 서비스입니다. 현재 100명 이상의 동아리 회원들이 실제 봉사 신청 및 관리에 사용하고 있습니다.",why:[{title:"Why React?",desc:"컴포넌트 기반 아키텍처와 선언형 UI를 통해 재사용성과 유지보수성을 확보했습니다. 방대한 커뮤니티와 라이브러리 생태계를 활용해 개발 생산성을 높였습니다."},{title:"Why WebApp?",desc:"하나의 코드로 웹과 모바일 환경(크로스 플랫폼)에 모두 대응하며, 스토어 심사 없이 빠른 배포와 수정이 가능하여 애자일한 운영에 적합하다고 판단했습니다."}],role:{percentage:"60%",tasks:["React-Router-Dom을 활용한 SPA 페이지 전환 및 유저 권한별 접근 제어 (Protected Route) 구현","사용자 경험(UX) 개선: Percentage Loading Indicator, 스크롤 기반 페이지네이션(Infinite Scroll), Skeleton UI 적용","반응형 디자인: viewport width 기준 rem/flex Layout으로 다양한 디바이스 대응","Axios Interceptor를 활용한 Access Token 자동 갱신 및 공통 에러 핸들링 로직 구현","GitHub/Jira/Notion 기반의 애자일 스프린트 운영 및 코드 리뷰 주도"]},troubleshooting:[{title:"React StrictMode와 useEffect 중복 실행 문제",problem:"초기 렌더링 시 useEffect 내 API 호출이 두 번 발생하여 불필요한 트래픽 유발.",cause:"React 18 StrictMode의 개발 환경 특성(마운트-언마운트-마운트)으로 인한 현상. Side-Effect 검증 과정임을 이해.",solution:"AbortController를 활용하여 언마운트 시 이전 요청을 취소(Clean-up)하도록 리팩토링하여 안전한 비동기 처리 구현.",learning:"StrictMode가 잠재적 버그를 찾아주는 도구임을 이해하고, 클린업 함수(Clean-up) 작성의 중요성을 체감."},{title:"비동기 State 업데이트 시점 차이로 인한 필터링 오류",problem:"API로 데이터를 받아온(setVolunteers) 직후 필터링을 수행했으나, 빈 배열이 반환되는 문제 발생.",cause:"setState는 비동기적으로 동작하므로, 상태 업데이트가 완료되기 전에 다음 코드가 실행되어 초기값(빈 배열)을 참조함.",solution:"필터링 로직을 별도의 useEffect로 분리하고, volunteers 상태를 의존성 배열(dependency array)에 추가하여 데이터 변경 시점에 필터링이 수행되도록 수정.",learning:"React의 상태 업데이트 사이클과 의존성 배열의 역할을 명확히 이해하게 됨."}],results:["2023 동아리 콘테스트 금상 수상 (교내 2위)","2023년 6월 우수지역사회봉사단 선정 (VMS 인증)","실사용자 100+명 확보 및 주 단위 기능 개선 사이클 정착"],images:[]},dA=Object.freeze(Object.defineProperty({__proto__:null,ssangsangProjects:fA},Symbol.toStringTag,{value:"Module"})),hA="/portfolio/assets/banner-xHcB6NbG.png",mA={id:"vary-recycle",banner:hA,title:"Vary Recycle (분리수거 리워드 서비스)",subTitle:"Vary Recycle",subtitle:"Google 기술 기반, 분리수거 인식 및 리워드 제공 환경 문제 해결 서비스",summary:"UN SDGs(지속 가능한 개발 목표) 중 환경 분야를 대상으로 한 분리수거 리워드 서비스입니다. 80% 정확도의 Computer Vision AI로 쓰레기 종류를 인식하고, 올바른 분리수거 가이드를 제공하여 사용자 행동 변화를 이끌었습니다.",tags:["Flutter","Firebase","TensorFlow","CV Model","Google Solution Challenge"],links:[],period:"2022.09 ~ 2023.08",team:"Frontend 2명, Backend 1명, AI 모델 2명, 데이터 생성 1명",overview:"Vary Recycle은 사용자가 쓰레기를 촬영하면, AI가 실시간으로 종류를 인식하고 맞는 분리수거 방법을 안내해주는 리워드형 서비스입니다. 촬영–인식–가이드–리워드까지 하나의 플로우로 연결하여, 게임처럼 재미있게 분리수거 습관을 만들도록 설계했습니다.",why:[{title:"Why Flutter?",desc:"iOS/Android를 동시에 대응해야 했기 때문에, 단일 코드베이스로 크로스 플랫폼 개발이 가능한 Flutter를 선택했습니다. 위젯 기반 UI와 Hot Reload를 활용해 짧은 기간 내에 여러 화면을 빠르게 설계·반복 개선할 수 있었습니다."},{title:"Why Computer Vision 기반 분리수거?",desc:"환경 문제 해결의 가장 큰 허들은 '귀찮음'과 '정보 부족'이라고 보았습니다. 사용자가 이름을 일일이 입력하는 대신, 카메라 한 번으로 유리병/캔/종이/PET를 자동 분류하고, 바로 분리수거 가이드를 보여줌으로써 진입장벽을 최소화했습니다."}],role:{percentage:"50%",tasks:["Flutter 기반 하이브리드 앱 프론트엔드 개발 50% 담당: 홈, 촬영 화면, 결과 출력, 로그인 등 주요 화면 직접 설계 및 구현","LayoutBuilder, MediaQuery, Flexible 등을 활용해 다양한 해상도·비율에서 깨지지 않는 반응형 UI 구성","AnimatedContainer를 이용해 분리수거 결과에 따라 카드 색상/크기/위치를 애니메이션으로 표현, 사용자 피드백 강화","Firebase Realtime Database 연동: 분리수거 결과 및 AI 학습 로그를 실시간 저장·조회하는 데이터 플로우 구현","Firebase Authentication 적용: 이메일 로그인, 인증 토큰 만료 처리, 세션 유지 로직 설계 및 예외 상황(토큰 만료, 네트워크 에러) 처리","Firebase Security Rules 작성으로 사용자별 데이터 접근 제어 및 읽기/쓰기 권한 분리","TensorFlow 기반 Computer Vision 모델과의 연동을 위해 HTTP 인터페이스(REST API) 설계 및 Flutter 클라이언트 구현","AI 인퍼런스 결과(예: 라벨, 신뢰도)에 따라 UI가 자동으로 상태를 전환하도록 상태 기반 화면 전환 로직 구현","유리병/캔/종이/PET 4종에 대해 약 7,500장의 학습용 이미지 촬영 및 정제, 조명·각도·배경을 달리하여 데이터 다양성 확보 및 오버피팅 방지"]},troubleshooting:[{title:"앱 재실행 시 로그인 상태인데도 로그인 화면으로 라우팅되는 문제",problem:"Firebase Authentication을 사용해 이메일 로그인 기능을 구현했는데, 최초 로그인 후에는 정상 동작하지만 앱을 완전히 종료 후 재실행하면 로그인되어 있음에도 로그인 페이지로 잘못 라우팅되는 문제가 발생.",cause:"앱 시작 직후 FirebaseAuth.instance.currentUser를 바로 조회하면, Firebase가 아직 내부적으로 인증 상태를 복구하기 전이라 null을 반환할 수 있음. 인증 상태 복구가 비동기적으로 동작함에도 이를 고려하지 않고 currentUser만으로 초기 라우팅을 결정한 것이 원인이었음.",solution:"FirebaseAuth.instance.authStateChanges() 스트림을 StreamBuilder로 구독하는 방식으로 초기 라우팅 구조를 전면 수정. 인증 상태 복구 중에는 SplashScreen을 보여주고, snapshot.hasData 여부에 따라 HomePage 또는 LoginPage로 분기하도록 설계하여 비동기 복구 구간을 안전하게 처리함.",learning:"Firebase Authentication의 인증 상태 복구는 비동기이며, ‘로그인 여부’뿐만 아니라 ‘복구가 끝났는지 여부’까지 UI 상태로 분리해야 한다는 것을 배웠음. 이를 계기로 Flutter 위젯 생명주기, 비동기 흐름 제어, 상태 기반 라우팅의 중요성을 몸으로 이해하게 되었고, 이후 다른 프로젝트에서도 모든 초기 라우팅을 스트림/상태 기반으로 설계하게 되는 계기가 되었음."}],results:["2022년 교내 동계 모각소 활동 ‘최우수상’ 수상 (31개 팀 중 1위)","Google Solution Challenge Winter Cup 국내 Top 8 (40+팀 중 8위)","환경·분리수거 문화를 주제로 한 실제 사용자 테스트에서 ‘분리수거 가이드가 직관적이고 재미있다’는 피드백 다수 확보"],images:[]},pA=Object.freeze(Object.defineProperty({__proto__:null,varyRecycleProjects:mA},Symbol.toStringTag,{value:"Module"})),wh=j.createContext({});function Th(e){const n=j.useRef(null);return n.current===null&&(n.current=e()),n.current}const gA=typeof window<"u",l1=gA?j.useLayoutEffect:j.useEffect,mu=j.createContext(null);function Ch(e,n){e.indexOf(n)===-1&&e.push(n)}function Zo(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const Ln=(e,n,i)=>i>n?n:i<e?e:i;let kh=()=>{};const Pr={},s1=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function o1(e){return typeof e=="object"&&e!==null}const u1=e=>/^0[^.\s]+$/u.test(e);function c1(e){let n;return()=>(n===void 0&&(n=e()),n)}const pn=e=>e,yA=(e,n)=>i=>n(e(i)),Kl=(...e)=>e.reduce(yA),Ul=(e,n,i)=>{const a=n-e;return a===0?1:(i-e)/a};class Ah{constructor(){this.subscriptions=[]}add(n){return Ch(this.subscriptions,n),()=>Zo(this.subscriptions,n)}notify(n,i,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](n,i,a);else for(let c=0;c<s;c++){const u=this.subscriptions[c];u&&u(n,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Zt=e=>e*1e3,mn=e=>e/1e3;function f1(e,n){return n?e*(1e3/n):0}const d1=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,xA=1e-7,bA=12;function vA(e,n,i,a,s){let c,u,f=0;do u=n+(i-n)/2,c=d1(u,a,s)-e,c>0?i=u:n=u;while(Math.abs(c)>xA&&++f<bA);return u}function Zl(e,n,i,a){if(e===n&&i===a)return pn;const s=c=>vA(c,0,1,e,i);return c=>c===0||c===1?c:d1(s(c),n,a)}const h1=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,m1=e=>n=>1-e(1-n),p1=Zl(.33,1.53,.69,.99),Eh=m1(p1),g1=h1(Eh),y1=e=>e>=1?1:(e*=2)<1?.5*Eh(e):.5*(2-Math.pow(2,-10*(e-1))),Mh=e=>1-Math.sin(Math.acos(e)),x1=m1(Mh),b1=h1(Mh),SA=Zl(.42,0,1,1),wA=Zl(0,0,.58,1),v1=Zl(.42,0,.58,1),TA=e=>Array.isArray(e)&&typeof e[0]!="number",S1=e=>Array.isArray(e)&&typeof e[0]=="number",CA={linear:pn,easeIn:SA,easeInOut:v1,easeOut:wA,circIn:Mh,circInOut:b1,circOut:x1,backIn:Eh,backInOut:g1,backOut:p1,anticipate:y1},kA=e=>typeof e=="string",Rx=e=>{if(S1(e)){kh(e.length===4);const[n,i,a,s]=e;return Zl(n,i,a,s)}else if(kA(e))return CA[e];return e},ko=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function AA(e,n){let i=new Set,a=new Set,s=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function m(y){u.has(y)&&(h.schedule(y),e()),y(f)}const h={schedule:(y,g=!1,b=!1)=>{const w=b&&s?i:a;return g&&u.add(y),w.add(y),y},cancel:y=>{a.delete(y),u.delete(y)},process:y=>{if(f=y,s){c=!0;return}s=!0;const g=i;i=a,a=g,i.forEach(m),i.clear(),s=!1,c&&(c=!1,h.process(y))}};return h}const EA=40;function w1(e,n){let i=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,u=ko.reduce((A,V)=>(A[V]=AA(c),A),{}),{setup:f,read:m,resolveKeyframes:h,preUpdate:y,update:g,preRender:b,render:v,postRender:w}=u,E=()=>{const A=Pr.useManualTiming,V=A?s.timestamp:performance.now();i=!1,A||(s.delta=a?1e3/60:Math.max(Math.min(V-s.timestamp,EA),1)),s.timestamp=V,s.isProcessing=!0,f.process(s),m.process(s),h.process(s),y.process(s),g.process(s),b.process(s),v.process(s),w.process(s),s.isProcessing=!1,i&&n&&(a=!1,e(E))},M=()=>{i=!0,a=!0,s.isProcessing||e(E)};return{schedule:ko.reduce((A,V)=>{const Y=u[V];return A[V]=(L,G=!1,Q=!1)=>(i||M(),Y.schedule(L,G,Q)),A},{}),cancel:A=>{for(let V=0;V<ko.length;V++)u[ko[V]].cancel(A)},state:s,steps:u}}const{schedule:qe,cancel:Ur,state:vt,steps:Zf}=w1(typeof requestAnimationFrame<"u"?requestAnimationFrame:pn,!0);let zo;function MA(){zo=void 0}const jt={now:()=>(zo===void 0&&jt.set(vt.isProcessing||Pr.useManualTiming?vt.timestamp:performance.now()),zo),set:e=>{zo=e,queueMicrotask(MA)}},T1=e=>n=>typeof n=="string"&&n.startsWith(e),C1=T1("--"),jA=T1("var(--"),jh=e=>jA(e)?DA.test(e.split("/*")[0].trim()):!1,DA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Nx(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const va={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Il={...va,transform:e=>Ln(0,1,e)},Ao={...va,default:1},Rl=e=>Math.round(e*1e5)/1e5,Dh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function RA(e){return e==null}const NA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Rh=(e,n)=>i=>!!(typeof i=="string"&&NA.test(i)&&i.startsWith(e)||n&&!RA(i)&&Object.prototype.hasOwnProperty.call(i,n)),k1=(e,n,i)=>a=>{if(typeof a!="string")return a;const[s,c,u,f]=a.match(Dh);return{[e]:parseFloat(s),[n]:parseFloat(c),[i]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},OA=e=>Ln(0,255,e),Wf={...va,transform:e=>Math.round(OA(e))},ci={test:Rh("rgb","red"),parse:k1("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:a=1})=>"rgba("+Wf.transform(e)+", "+Wf.transform(n)+", "+Wf.transform(i)+", "+Rl(Il.transform(a))+")"};function _A(e){let n="",i="",a="",s="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),s=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),s=e.substring(4,5),n+=n,i+=i,a+=a,s+=s),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const Od={test:Rh("#"),parse:_A,transform:ci.transform},Wl=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Br=Wl("deg"),_n=Wl("%"),ue=Wl("px"),LA=Wl("vh"),zA=Wl("vw"),Ox={..._n,parse:e=>_n.parse(e)/100,transform:e=>_n.transform(e*100)},oa={test:Rh("hsl","hue"),parse:k1("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+_n.transform(Rl(n))+", "+_n.transform(Rl(i))+", "+Rl(Il.transform(a))+")"},ut={test:e=>ci.test(e)||Od.test(e)||oa.test(e),parse:e=>ci.test(e)?ci.parse(e):oa.test(e)?oa.parse(e):Od.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ci.transform(e):oa.transform(e),getAnimatableNone:e=>{const n=ut.parse(e);return n.alpha=0,ut.transform(n)}},BA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function VA(e){return isNaN(e)&&typeof e=="string"&&(e.match(Dh)?.length||0)+(e.match(BA)?.length||0)>0}const A1="number",E1="color",PA="var",UA="var(",_x="${}",IA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function da(e){const n=e.toString(),i=[],a={color:[],number:[],var:[]},s=[];let c=0;const f=n.replace(IA,m=>(ut.test(m)?(a.color.push(c),s.push(E1),i.push(ut.parse(m))):m.startsWith(UA)?(a.var.push(c),s.push(PA),i.push(m)):(a.number.push(c),s.push(A1),i.push(parseFloat(m))),++c,_x)).split(_x);return{values:i,split:f,indexes:a,types:s}}function HA(e){return da(e).values}function M1({split:e,types:n}){const i=e.length;return a=>{let s="";for(let c=0;c<i;c++)if(s+=e[c],a[c]!==void 0){const u=n[c];u===A1?s+=Rl(a[c]):u===E1?s+=ut.transform(a[c]):s+=a[c]}return s}}function FA(e){return M1(da(e))}const qA=e=>typeof e=="number"?0:ut.test(e)?ut.getAnimatableNone(e):e,GA=(e,n)=>typeof e=="number"?n?.trim().endsWith("/")?e:0:qA(e);function YA(e){const n=da(e);return M1(n)(n.values.map((a,s)=>GA(a,n.split[s])))}const Tn={test:VA,parse:HA,createTransformer:FA,getAnimatableNone:YA};function $f(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function XA({hue:e,saturation:n,lightness:i,alpha:a}){e/=360,n/=100,i/=100;let s=0,c=0,u=0;if(!n)s=c=u=i;else{const f=i<.5?i*(1+n):i+n-i*n,m=2*i-f;s=$f(m,f,e+1/3),c=$f(m,f,e),u=$f(m,f,e-1/3)}return{red:Math.round(s*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:a}}function Wo(e,n){return i=>i>0?n:e}const Qe=(e,n,i)=>e+(n-e)*i,ed=(e,n,i)=>{const a=e*e,s=i*(n*n-a)+a;return s<0?0:Math.sqrt(s)},JA=[Od,ci,oa],QA=e=>JA.find(n=>n.test(e));function Lx(e){const n=QA(e);if(!n)return!1;let i=n.parse(e);return n===oa&&(i=XA(i)),i}const zx=(e,n)=>{const i=Lx(e),a=Lx(n);if(!i||!a)return Wo(e,n);const s={...i};return c=>(s.red=ed(i.red,a.red,c),s.green=ed(i.green,a.green,c),s.blue=ed(i.blue,a.blue,c),s.alpha=Qe(i.alpha,a.alpha,c),ci.transform(s))},_d=new Set(["none","hidden"]);function KA(e,n){return _d.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function ZA(e,n){return i=>Qe(e,n,i)}function Nh(e){return typeof e=="number"?ZA:typeof e=="string"?jh(e)?Wo:ut.test(e)?zx:eE:Array.isArray(e)?j1:typeof e=="object"?ut.test(e)?zx:WA:Wo}function j1(e,n){const i=[...e],a=i.length,s=e.map((c,u)=>Nh(c)(c,n[u]));return c=>{for(let u=0;u<a;u++)i[u]=s[u](c);return i}}function WA(e,n){const i={...e,...n},a={};for(const s in i)e[s]!==void 0&&n[s]!==void 0&&(a[s]=Nh(e[s])(e[s],n[s]));return s=>{for(const c in a)i[c]=a[c](s);return i}}function $A(e,n){const i=[],a={color:0,var:0,number:0};for(let s=0;s<n.values.length;s++){const c=n.types[s],u=e.indexes[c][a[c]],f=e.values[u]??0;i[s]=f,a[c]++}return i}const eE=(e,n)=>{const i=Tn.createTransformer(n),a=da(e),s=da(n);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?_d.has(e)&&!s.values.length||_d.has(n)&&!a.values.length?KA(e,n):Kl(j1($A(a,s),s.values),i):Wo(e,n)};function D1(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?Qe(e,n,i):Nh(e)(e,n)}const tE=e=>{const n=({timestamp:i})=>e(i);return{start:(i=!0)=>qe.update(n,i),stop:()=>Ur(n),now:()=>vt.isProcessing?vt.timestamp:jt.now()}},R1=(e,n,i=10)=>{let a="";const s=Math.max(Math.round(n/i),2);for(let c=0;c<s;c++)a+=Math.round(e(c/(s-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},$o=2e4;function Oh(e){let n=0;const i=50;let a=e.next(n);for(;!a.done&&n<$o;)n+=i,a=e.next(n);return n>=$o?1/0:n}function nE(e,n=100,i){const a=i({...e,keyframes:[0,n]}),s=Math.min(Oh(a),$o);return{type:"keyframes",ease:c=>a.next(s*c).value/n,duration:mn(s)}}const tt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Ld(e,n){return e*Math.sqrt(1-n*n)}const rE=12;function iE(e,n,i){let a=i;for(let s=1;s<rE;s++)a=a-e(a)/n(a);return a}const td=.001;function aE({duration:e=tt.duration,bounce:n=tt.bounce,velocity:i=tt.velocity,mass:a=tt.mass}){let s,c,u=1-n;u=Ln(tt.minDamping,tt.maxDamping,u),e=Ln(tt.minDuration,tt.maxDuration,mn(e)),u<1?(s=h=>{const y=h*u,g=y*e,b=y-i,v=Ld(h,u),w=Math.exp(-g);return td-b/v*w},c=h=>{const g=h*u*e,b=g*i+i,v=Math.pow(u,2)*Math.pow(h,2)*e,w=Math.exp(-g),E=Ld(Math.pow(h,2),u);return(-s(h)+td>0?-1:1)*((b-v)*w)/E}):(s=h=>{const y=Math.exp(-h*e),g=(h-i)*e+1;return-td+y*g},c=h=>{const y=Math.exp(-h*e),g=(i-h)*(e*e);return y*g});const f=5/e,m=iE(s,c,f);if(e=Zt(e),isNaN(m))return{stiffness:tt.stiffness,damping:tt.damping,duration:e};{const h=Math.pow(m,2)*a;return{stiffness:h,damping:u*2*Math.sqrt(a*h),duration:e}}}const lE=["duration","bounce"],sE=["stiffness","damping","mass"];function Bx(e,n){return n.some(i=>e[i]!==void 0)}function oE(e){let n={velocity:tt.velocity,stiffness:tt.stiffness,damping:tt.damping,mass:tt.mass,isResolvedFromDuration:!1,...e};if(!Bx(e,sE)&&Bx(e,lE))if(n.velocity=0,e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),s=a*a,c=2*Ln(.05,1,1-(e.bounce||0))*Math.sqrt(s);n={...n,mass:tt.mass,stiffness:s,damping:c}}else{const i=aE({...e,velocity:0});n={...n,...i,mass:tt.mass},n.isResolvedFromDuration=!0}return n}function eu(e=tt.visualDuration,n=tt.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:a,restDelta:s}=i;const c=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],f={done:!1,value:c},{stiffness:m,damping:h,mass:y,duration:g,velocity:b,isResolvedFromDuration:v}=oE({...i,velocity:-mn(i.velocity||0)}),w=b||0,E=h/(2*Math.sqrt(m*y)),M=u-c,C=mn(Math.sqrt(m/y)),O=Math.abs(M)<5;a||(a=O?tt.restSpeed.granular:tt.restSpeed.default),s||(s=O?tt.restDelta.granular:tt.restDelta.default);let A,V,Y,L,G,Q;if(E<1)Y=Ld(C,E),L=(w+E*C*M)/Y,A=N=>{const $=Math.exp(-E*C*N);return u-$*(L*Math.sin(Y*N)+M*Math.cos(Y*N))},G=E*C*L+M*Y,Q=E*C*M-L*Y,V=N=>Math.exp(-E*C*N)*(G*Math.sin(Y*N)+Q*Math.cos(Y*N));else if(E===1){A=$=>u-Math.exp(-C*$)*(M+(w+C*M)*$);const N=w+C*M;V=$=>Math.exp(-C*$)*(C*N*$-w)}else{const N=C*Math.sqrt(E*E-1);A=le=>{const ne=Math.exp(-E*C*le),P=Math.min(N*le,300);return u-ne*((w+E*C*M)*Math.sinh(P)+N*M*Math.cosh(P))/N};const $=(w+E*C*M)/N,te=E*C*$-M*N,ge=E*C*M-$*N;V=le=>{const ne=Math.exp(-E*C*le),P=Math.min(N*le,300);return ne*(te*Math.sinh(P)+ge*Math.cosh(P))}}const F={calculatedDuration:v&&g||null,velocity:N=>Zt(V(N)),next:N=>{if(!v&&E<1){const te=Math.exp(-E*C*N),ge=Math.sin(Y*N),le=Math.cos(Y*N),ne=u-te*(L*ge+M*le),P=Zt(te*(G*ge+Q*le));return f.done=Math.abs(P)<=a&&Math.abs(u-ne)<=s,f.value=f.done?u:ne,f}const $=A(N);if(v)f.done=N>=g;else{const te=Zt(V(N));f.done=Math.abs(te)<=a&&Math.abs(u-$)<=s}return f.value=f.done?u:$,f},toString:()=>{const N=Math.min(Oh(F),$o),$=R1(te=>F.next(N*te).value,N,30);return N+"ms "+$},toTransition:()=>{}};return F}eu.applyToOptions=e=>{const n=nE(e,100,eu);return e.ease=n.ease,e.duration=Zt(n.duration),e.type="keyframes",e};const uE=5;function N1(e,n,i){const a=Math.max(n-uE,0);return f1(i-e(a),n-a)}function zd({keyframes:e,velocity:n=0,power:i=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:m,restDelta:h=.5,restSpeed:y}){const g=e[0],b={done:!1,value:g},v=Q=>f!==void 0&&Q<f||m!==void 0&&Q>m,w=Q=>f===void 0?m:m===void 0||Math.abs(f-Q)<Math.abs(m-Q)?f:m;let E=i*n;const M=g+E,C=u===void 0?M:u(M);C!==M&&(E=C-g);const O=Q=>-E*Math.exp(-Q/a),A=Q=>C+O(Q),V=Q=>{const F=O(Q),N=A(Q);b.done=Math.abs(F)<=h,b.value=b.done?C:N};let Y,L;const G=Q=>{v(b.value)&&(Y=Q,L=eu({keyframes:[b.value,w(b.value)],velocity:N1(A,Q,b.value),damping:s,stiffness:c,restDelta:h,restSpeed:y}))};return G(0),{calculatedDuration:null,next:Q=>{let F=!1;return!L&&Y===void 0&&(F=!0,V(Q),G(Q)),Y!==void 0&&Q>=Y?L.next(Q-Y):(!F&&V(Q),b)}}}function cE(e,n,i){const a=[],s=i||Pr.mix||D1,c=e.length-1;for(let u=0;u<c;u++){let f=s(e[u],e[u+1]);if(n){const m=Array.isArray(n)?n[u]||pn:n;f=Kl(m,f)}a.push(f)}return a}function fE(e,n,{clamp:i=!0,ease:a,mixer:s}={}){const c=e.length;if(kh(c===n.length),c===1)return()=>n[0];if(c===2&&n[0]===n[1])return()=>n[1];const u=e[0]===e[1];e[0]>e[c-1]&&(e=[...e].reverse(),n=[...n].reverse());const f=cE(n,a,s),m=f.length,h=y=>{if(u&&y<e[0])return n[0];let g=0;if(m>1)for(;g<e.length-2&&!(y<e[g+1]);g++);const b=Ul(e[g],e[g+1],y);return f[g](b)};return i?y=>h(Ln(e[0],e[c-1],y)):h}function dE(e,n){const i=e[e.length-1];for(let a=1;a<=n;a++){const s=Ul(0,n,a);e.push(Qe(i,1,s))}}function hE(e){const n=[0];return dE(n,e.length-1),n}function mE(e,n){return e.map(i=>i*n)}function pE(e,n){return e.map(()=>n||v1).splice(0,e.length-1)}function Nl({duration:e=300,keyframes:n,times:i,ease:a="easeInOut"}){const s=TA(a)?a.map(Rx):Rx(a),c={done:!1,value:n[0]},u=mE(i&&i.length===n.length?i:hE(n),e),f=fE(u,n,{ease:Array.isArray(s)?s:pE(n,s)});return{calculatedDuration:e,next:m=>(c.value=f(m),c.done=m>=e,c)}}const gE=e=>e!==null;function pu(e,{repeat:n,repeatType:i="loop"},a,s=1){const c=e.filter(gE),f=s<0||n&&i!=="loop"&&n%2===1?0:c.length-1;return!f||a===void 0?c[f]:a}const yE={decay:zd,inertia:zd,tween:Nl,keyframes:Nl,spring:eu};function O1(e){typeof e.type=="string"&&(e.type=yE[e.type])}class _h{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const xE=e=>e/100;class tu extends _h{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:i}=this.options;i&&i.updatedAt!==jt.now()&&this.tick(jt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;O1(n);const{type:i=Nl,repeat:a=0,repeatDelay:s=0,repeatType:c,velocity:u=0}=n;let{keyframes:f}=n;const m=i||Nl;m!==Nl&&typeof f[0]!="number"&&(this.mixKeyframes=Kl(xE,D1(f[0],f[1])),f=[0,100]);const h=m({...n,keyframes:f});c==="mirror"&&(this.mirroredGenerator=m({...n,keyframes:[...f].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=Oh(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+s,this.totalDuration=this.resolvedDuration*(a+1)-s,this.generator=h}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:a,totalDuration:s,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:m}=this;if(this.startTime===null)return a.next(0);const{delay:h=0,keyframes:y,repeat:g,repeatType:b,repeatDelay:v,type:w,onUpdate:E,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-s/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const C=this.currentTime-h*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?C<0:C>s;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let A=this.currentTime,V=a;if(g){const Q=Math.min(this.currentTime,s)/f;let F=Math.floor(Q),N=Q%1;!N&&Q>=1&&(N=1),N===1&&F--,F=Math.min(F,g+1),!!(F%2)&&(b==="reverse"?(N=1-N,v&&(N-=v/f)):b==="mirror"&&(V=u)),A=Ln(0,1,N)*f}let Y;O?(this.delayState.value=y[0],Y=this.delayState):Y=V.next(A),c&&!O&&(Y.value=c(Y.value));let{done:L}=Y;!O&&m!==null&&(L=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const G=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return G&&w!==zd&&(Y.value=pu(y,this.options,M,this.speed)),E&&E(Y.value),G&&this.finish(),Y}then(n,i){return this.finished.then(n,i)}get duration(){return mn(this.calculatedDuration)}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+mn(n)}get time(){return mn(this.currentTime)}set time(n){n=Zt(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=n,this.tick(n))}getGeneratorVelocity(){const n=this.currentTime;if(n<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(n);const i=this.generator.next(n).value;return N1(a=>this.generator.next(a).value,n,i)}get speed(){return this.playbackSpeed}set speed(n){const i=this.playbackSpeed!==n;i&&this.driver&&this.updateTime(jt.now()),this.playbackSpeed=n,i&&this.driver&&(this.time=mn(this.currentTime))}play(){if(this.isStopped)return;const{driver:n=tE,startTime:i}=this.options;this.driver||(this.driver=n(s=>this.tick(s))),this.options.onPlay?.();const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(jt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),n.observe(this)}}function bE(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const fi=e=>e*180/Math.PI,Bd=e=>{const n=fi(Math.atan2(e[1],e[0]));return Vd(n)},vE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Bd,rotateZ:Bd,skewX:e=>fi(Math.atan(e[1])),skewY:e=>fi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Vd=e=>(e=e%360,e<0&&(e+=360),e),Vx=Bd,Px=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ux=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),SE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Px,scaleY:Ux,scale:e=>(Px(e)+Ux(e))/2,rotateX:e=>Vd(fi(Math.atan2(e[6],e[5]))),rotateY:e=>Vd(fi(Math.atan2(-e[2],e[0]))),rotateZ:Vx,rotate:Vx,skewX:e=>fi(Math.atan(e[4])),skewY:e=>fi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Pd(e){return e.includes("scale")?1:0}function Ud(e,n){if(!e||e==="none")return Pd(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,s;if(i)a=SE,s=i;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=vE,s=f}if(!s)return Pd(n);const c=a[n],u=s[1].split(",").map(TE);return typeof c=="function"?c(u):u[c]}const wE=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return Ud(i,n)};function TE(e){return parseFloat(e.trim())}const Sa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wa=new Set(Sa),Ix=e=>e===va||e===ue,CE=new Set(["x","y","z"]),kE=Sa.filter(e=>!CE.has(e));function AE(e){const n=[];return kE.forEach(i=>{const a=e.getValue(i);a!==void 0&&(n.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),n}const Vr={width:({x:e},{paddingLeft:n="0",paddingRight:i="0",boxSizing:a})=>{const s=e.max-e.min;return a==="border-box"?s:s-parseFloat(n)-parseFloat(i)},height:({y:e},{paddingTop:n="0",paddingBottom:i="0",boxSizing:a})=>{const s=e.max-e.min;return a==="border-box"?s:s-parseFloat(n)-parseFloat(i)},top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Ud(n,"x"),y:(e,{transform:n})=>Ud(n,"y")};Vr.translateX=Vr.x;Vr.translateY=Vr.y;const di=new Set;let Id=!1,Hd=!1,Fd=!1;function _1(){if(Hd){const e=Array.from(di).filter(a=>a.needsMeasurement),n=new Set(e.map(a=>a.element)),i=new Map;n.forEach(a=>{const s=AE(a);s.length&&(i.set(a,s),a.render())}),e.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const s=i.get(a);s&&s.forEach(([c,u])=>{a.getValue(c)?.set(u)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Hd=!1,Id=!1,di.forEach(e=>e.complete(Fd)),di.clear()}function L1(){di.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Hd=!0)})}function EE(){Fd=!0,L1(),_1(),Fd=!1}class Lh{constructor(n,i,a,s,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=a,this.motionValue=s,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(di.add(this),Id||(Id=!0,qe.read(L1),qe.resolveKeyframes(_1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:a,motionValue:s}=this;if(n[0]===null){const c=s?.get(),u=n[n.length-1];if(c!==void 0)n[0]=c;else if(a&&i){const f=a.readValue(i,u);f!=null&&(n[0]=f)}n[0]===void 0&&(n[0]=u),s&&c===void 0&&s.set(n[0])}bE(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),di.delete(this)}cancel(){this.state==="scheduled"&&(di.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ME=e=>e.startsWith("--");function z1(e,n,i){ME(n)?e.style.setProperty(n,i):e.style[n]=i}const jE={};function B1(e,n){const i=c1(e);return()=>jE[n]??i()}const DE=B1(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),V1=B1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Dl=([e,n,i,a])=>`cubic-bezier(${e}, ${n}, ${i}, ${a})`,Hx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Dl([0,.65,.55,1]),circOut:Dl([.55,0,1,.45]),backIn:Dl([.31,.01,.66,-.59]),backOut:Dl([.33,1.53,.69,.99])};function P1(e,n){if(e)return typeof e=="function"?V1()?R1(e,n):"ease-out":S1(e)?Dl(e):Array.isArray(e)?e.map(i=>P1(i,n)||Hx.easeOut):Hx[e]}function RE(e,n,i,{delay:a=0,duration:s=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:m}={},h=void 0){const y={[n]:i};m&&(y.offset=m);const g=P1(f,s);Array.isArray(g)&&(y.easing=g);const b={delay:a,duration:s,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return h&&(b.pseudoElement=h),e.animate(y,b)}function U1(e){return typeof e=="function"&&"applyToOptions"in e}function NE({type:e,...n}){return U1(e)&&V1()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class I1 extends _h{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!n)return;const{element:i,name:a,keyframes:s,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:m}=n;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=n,kh(typeof n.type!="string");const h=NE(n);this.animation=RE(i,a,s,h,c),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=pu(s,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(y),z1(i,a,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const n=this.options?.element;!this.isPseudoElement&&n?.isConnected&&this.animation.commitStyles?.()}get duration(){const n=this.animation.effect?.getComputedTiming?.().duration||0;return mn(Number(n))}get iterationDuration(){const{delay:n=0}=this.options||{};return this.duration+mn(n)}get time(){return mn(Number(this.animation.currentTime)||0)}set time(n){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Zt(n),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(n){this.manualStartTime=this.animation.startTime=n}attachTimeline({timeline:n,rangeStart:i,rangeEnd:a,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,n&&DE()?(this.animation.timeline=n,i&&(this.animation.rangeStart=i),a&&(this.animation.rangeEnd=a),pn):s(this)}}const H1={anticipate:y1,backInOut:g1,circInOut:b1};function OE(e){return e in H1}function _E(e){typeof e.ease=="string"&&OE(e.ease)&&(e.ease=H1[e.ease])}const nd=10;class LE extends I1{constructor(n){_E(n),O1(n),super(n),n.startTime!==void 0&&n.autoplay!==!1&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:a,onComplete:s,element:c,...u}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const f=new tu({...u,autoplay:!1}),m=Math.max(nd,jt.now()-this.startTime),h=Ln(0,nd,m-nd),y=f.sample(m).value,{name:g}=this.options;c&&g&&z1(c,g,y),i.setWithVelocity(f.sample(Math.max(0,m-h)).value,y,h),f.stop()}}const Fx=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Tn.test(e)||e==="0")&&!e.startsWith("url("));function zE(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function BE(e,n,i,a){const s=e[0];if(s===null)return!1;if(n==="display"||n==="visibility")return!0;const c=e[e.length-1],u=Fx(s,n),f=Fx(c,n);return!u||!f?!1:zE(e)||(i==="spring"||U1(i))&&a}function qd(e){e.duration=0,e.type="keyframes"}const F1=new Set(["opacity","clipPath","filter","transform"]),VE=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function PE(e){for(let n=0;n<e.length;n++)if(typeof e[n]=="string"&&VE.test(e[n]))return!0;return!1}const UE=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),IE=c1(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function HE(e){const{motionValue:n,name:i,repeatDelay:a,repeatType:s,damping:c,type:u,keyframes:f}=e;if(!(n?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:y}=n.owner.getProps();return IE()&&i&&(F1.has(i)||UE.has(i)&&PE(f))&&(i!=="transform"||!y)&&!h&&!a&&s!=="mirror"&&c!==0&&u!=="inertia"}const FE=40;class qE extends _h{constructor({autoplay:n=!0,delay:i=0,type:a="keyframes",repeat:s=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:m,motionValue:h,element:y,...g}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=jt.now();const b={autoplay:n,delay:i,type:a,repeat:s,repeatDelay:c,repeatType:u,name:m,motionValue:h,element:y,...g},v=y?.KeyframeResolver||Lh;this.keyframeResolver=new v(f,(w,E,M)=>this.onKeyframesResolved(w,E,b,!M),m,h,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(n,i,a,s){this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:m,isHandoff:h,onUpdate:y}=a;this.resolvedAt=jt.now();let g=!0;BE(n,c,u,f)||(g=!1,(Pr.instantAnimations||!m)&&y?.(pu(n,a,i)),n[0]=n[n.length-1],qd(a),a.repeat=0);const v={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>FE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:n},w=g&&!h&&HE(v),E=v.motionValue?.owner?.current;let M;if(w)try{M=new LE({...v,element:E})}catch{M=new tu(v)}else M=new tu(v);M.finished.then(()=>{this.notifyFinished()}).catch(pn),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),EE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function q1(e,n,i,a=0,s=1){const c=Array.from(e).sort((h,y)=>h.sortNodePosition(y)).indexOf(n),u=e.size,f=(u-1)*a;return typeof i=="function"?i(c,u):s===1?c*a:f-c*a}const GE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function YE(e){const n=GE.exec(e);if(!n)return[,];const[,i,a,s]=n;return[`--${i??a}`,s]}function G1(e,n,i=1){const[a,s]=YE(e);if(!a)return;const c=window.getComputedStyle(n).getPropertyValue(a);if(c){const u=c.trim();return s1(u)?parseFloat(u):u}return jh(s)?G1(s,n,i+1):s}const XE={type:"spring",stiffness:500,damping:25,restSpeed:10},JE=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),QE={type:"keyframes",duration:.8},KE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ZE=(e,{keyframes:n})=>n.length>2?QE:wa.has(e)?e.startsWith("scale")?JE(n[1]):XE:KE;function Y1(e,n){if(e?.inherit&&n){const{inherit:i,...a}=e;return{...n,...a}}return e}function zh(e,n){const i=e?.[n]??e?.default??e;return i!==e?Y1(i,e):i}const WE=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function $E(e){for(const n in e)if(!WE.has(n))return!0;return!1}const Bh=(e,n,i,a={},s,c)=>u=>{const f=zh(a,e)||{},m=f.delay||a.delay||0;let{elapsed:h=0}=a;h=h-Zt(m);const y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...f,delay:-h,onUpdate:b=>{n.set(b),f.onUpdate&&f.onUpdate(b)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:e,motionValue:n,element:c?void 0:s};$E(f)||Object.assign(y,ZE(e,y)),y.duration&&(y.duration=Zt(y.duration)),y.repeatDelay&&(y.repeatDelay=Zt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let g=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(qd(y),y.delay===0&&(g=!0)),(Pr.instantAnimations||Pr.skipAnimations||s?.shouldSkipAnimations)&&(g=!0,qd(y),y.delay=0),y.allowFlatten=!f.type&&!f.ease,g&&!c&&n.get()!==void 0){const b=pu(y.keyframes,f);if(b!==void 0){qe.update(()=>{y.onUpdate(b),y.onComplete()});return}}return f.isSync?new tu(y):new qE(y)};function qx(e){const n=[{},{}];return e?.values.forEach((i,a)=>{n[0][a]=i.get(),n[1][a]=i.getVelocity()}),n}function Vh(e,n,i,a){if(typeof n=="function"){const[s,c]=qx(a);n=n(i!==void 0?i:e.custom,s,c)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[s,c]=qx(a);n=n(i!==void 0?i:e.custom,s,c)}return n}function hi(e,n,i){const a=e.getProps();return Vh(a,n,i!==void 0?i:a.custom,e)}const X1=new Set(["width","height","top","left","right","bottom",...Sa]),Gx=30,eM=e=>!isNaN(parseFloat(e));class tM{constructor(n,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{const s=jt.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=jt.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=eM(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Ah);const a=this.events[n].add(i);return n==="change"?()=>{a(),qe.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=jt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Gx)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Gx);return f1(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ha(e,n){return new tM(e,n)}const Gd=e=>Array.isArray(e);function nM(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,ha(i))}function rM(e){return Gd(e)?e[e.length-1]||0:e}function iM(e,n){const i=hi(e,n);let{transitionEnd:a={},transition:s={},...c}=i||{};c={...c,...a};for(const u in c){const f=rM(c[u]);nM(e,u,f)}}const St=e=>!!(e&&e.getVelocity);function aM(e){return!!(St(e)&&e.add)}function Yd(e,n){const i=e.getValue("willChange");if(aM(i))return i.add(n);if(!i&&Pr.WillChange){const a=new Pr.WillChange("auto");e.addValue("willChange",a),a.add(n)}}function Ph(e){return e.replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const lM="framerAppearId",J1="data-"+Ph(lM);function Q1(e){return e.props[J1]}function sM({protectedKeys:e,needsAnimating:n},i){const a=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,a}function K1(e,n,{delay:i=0,transitionOverride:a,type:s}={}){let{transition:c,transitionEnd:u,...f}=n;const m=e.getDefaultTransition();c=c?Y1(c,m):m;const h=c?.reduceMotion;a&&(c=a);const y=[],g=s&&e.animationState&&e.animationState.getState()[s];for(const b in f){const v=e.getValue(b,e.latestValues[b]??null),w=f[b];if(w===void 0||g&&sM(g,b))continue;const E={delay:i,...zh(c||{},b)},M=v.get();if(M!==void 0&&!v.isAnimating()&&!Array.isArray(w)&&w===M&&!E.velocity){qe.update(()=>v.set(w));continue}let C=!1;if(window.MotionHandoffAnimation){const V=Q1(e);if(V){const Y=window.MotionHandoffAnimation(V,b,qe);Y!==null&&(E.startTime=Y,C=!0)}}Yd(e,b);const O=h??e.shouldReduceMotion;v.start(Bh(b,v,w,O&&X1.has(b)?{type:!1}:E,e,C));const A=v.animation;A&&y.push(A)}if(u){const b=()=>qe.update(()=>{u&&iM(e,u)});y.length?Promise.all(y).then(b):b()}return y}function Xd(e,n,i={}){const a=hi(e,n,i.type==="exit"?e.presenceContext?.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(s=i.transitionOverride);const c=a?()=>Promise.all(K1(e,a,i)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:g}=s;return oM(e,n,m,h,y,g,i)}:()=>Promise.resolve(),{when:f}=s;if(f){const[m,h]=f==="beforeChildren"?[c,u]:[u,c];return m().then(()=>h())}else return Promise.all([c(),u(i.delay)])}function oM(e,n,i=0,a=0,s=0,c=1,u){const f=[];for(const m of e.variantChildren)m.notify("AnimationStart",n),f.push(Xd(m,n,{...u,delay:i+(typeof a=="function"?0:a)+q1(e.variantChildren,m,a,s,c)}).then(()=>m.notify("AnimationComplete",n)));return Promise.all(f)}function uM(e,n,i={}){e.notify("AnimationStart",n);let a;if(Array.isArray(n)){const s=n.map(c=>Xd(e,c,i));a=Promise.all(s)}else if(typeof n=="string")a=Xd(e,n,i);else{const s=typeof n=="function"?hi(e,n,i.custom):n;a=Promise.all(K1(e,s,i))}return a.then(()=>{e.notify("AnimationComplete",n)})}const cM={test:e=>e==="auto",parse:e=>e},Z1=e=>n=>n.test(e),W1=[va,ue,_n,Br,zA,LA,cM],Yx=e=>W1.find(Z1(e));function fM(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||u1(e):!0}const dM=new Set(["brightness","contrast","saturate","opacity"]);function hM(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[a]=i.match(Dh)||[];if(!a)return e;const s=i.replace(a,"");let c=dM.has(n)?1:0;return a!==i&&(c*=100),n+"("+c+s+")"}const mM=/\b([a-z-]*)\(.*?\)/gu,Jd={...Tn,getAnimatableNone:e=>{const n=e.match(mM);return n?n.map(hM).join(" "):e}},Qd={...Tn,getAnimatableNone:e=>{const n=Tn.parse(e);return Tn.createTransformer(e)(n.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},Xx={...va,transform:Math.round},pM={rotate:Br,rotateX:Br,rotateY:Br,rotateZ:Br,scale:Ao,scaleX:Ao,scaleY:Ao,scaleZ:Ao,skew:Br,skewX:Br,skewY:Br,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:Il,originX:Ox,originY:Ox,originZ:ue},Uh={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,inset:ue,insetBlock:ue,insetBlockStart:ue,insetBlockEnd:ue,insetInline:ue,insetInlineStart:ue,insetInlineEnd:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,paddingBlock:ue,paddingBlockStart:ue,paddingBlockEnd:ue,paddingInline:ue,paddingInlineStart:ue,paddingInlineEnd:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,marginBlock:ue,marginBlockStart:ue,marginBlockEnd:ue,marginInline:ue,marginInlineStart:ue,marginInlineEnd:ue,fontSize:ue,backgroundPositionX:ue,backgroundPositionY:ue,...pM,zIndex:Xx,fillOpacity:Il,strokeOpacity:Il,numOctaves:Xx},gM={...Uh,color:ut,backgroundColor:ut,outlineColor:ut,fill:ut,stroke:ut,borderColor:ut,borderTopColor:ut,borderRightColor:ut,borderBottomColor:ut,borderLeftColor:ut,filter:Jd,WebkitFilter:Jd,mask:Qd,WebkitMask:Qd},$1=e=>gM[e],yM=new Set([Jd,Qd]);function ev(e,n){let i=$1(e);return yM.has(i)||(i=Tn),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const xM=new Set(["auto","none","0"]);function bM(e,n,i){let a=0,s;for(;a<e.length&&!s;){const c=e[a];typeof c=="string"&&!xM.has(c)&&da(c).values.length&&(s=e[a]),a++}if(s&&i)for(const c of n)e[c]=ev(i,s)}class vM extends Lh{constructor(n,i,a,s,c){super(n,i,a,s,c,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let y=0;y<n.length;y++){let g=n[y];if(typeof g=="string"&&(g=g.trim(),jh(g))){const b=G1(g,i.current);b!==void 0&&(n[y]=b),y===n.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!X1.has(a)||n.length!==2)return;const[s,c]=n,u=Yx(s),f=Yx(c),m=Nx(s),h=Nx(c);if(m!==h&&Vr[a]){this.needsMeasurement=!0;return}if(u!==f)if(Ix(u)&&Ix(f))for(let y=0;y<n.length;y++){const g=n[y];typeof g=="string"&&(n[y]=parseFloat(g))}else Vr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,a=[];for(let s=0;s<n.length;s++)(n[s]===null||fM(n[s]))&&a.push(s);a.length&&bM(n,a,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vr[a](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const s=i[i.length-1];s!==void 0&&n.getValue(a,s).jump(s,!1)}measureEndState(){const{element:n,name:i,unresolvedKeyframes:a}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const c=a.length-1,u=a[c];a[c]=Vr[i](n.measureViewportBox(),window.getComputedStyle(n.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,m])=>{n.getValue(f).set(m)}),this.resolveNoneKeyframes()}}function tv(e,n,i){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let a=document;const s=i?.[e]??a.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e).filter(a=>a!=null)}const nv=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function Bo(e){return o1(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Ih}=w1(queueMicrotask,!1),wn={x:!1,y:!1};function rv(){return wn.x||wn.y}function SM(e){return e==="x"||e==="y"?wn[e]?null:(wn[e]=!0,()=>{wn[e]=!1}):wn.x||wn.y?null:(wn.x=wn.y=!0,()=>{wn.x=wn.y=!1})}function iv(e,n){const i=tv(e),a=new AbortController,s={passive:!0,...n,signal:a.signal};return[i,s,()=>a.abort()]}function wM(e){return!(e.pointerType==="touch"||rv())}function TM(e,n,i={}){const[a,s,c]=iv(e,i);return a.forEach(u=>{let f=!1,m=!1,h;const y=()=>{u.removeEventListener("pointerleave",w)},g=M=>{h&&(h(M),h=void 0),y()},b=M=>{f=!1,window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",b),m&&(m=!1,g(M))},v=()=>{f=!0,window.addEventListener("pointerup",b,s),window.addEventListener("pointercancel",b,s)},w=M=>{if(M.pointerType!=="touch"){if(f){m=!0;return}g(M)}},E=M=>{if(!wM(M))return;m=!1;const C=n(u,M);typeof C=="function"&&(h=C,u.addEventListener("pointerleave",w,s))};u.addEventListener("pointerenter",E,s),u.addEventListener("pointerdown",v,s)}),c}const av=(e,n)=>n?e===n?!0:av(e,n.parentElement):!1,Hh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,CM=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kM(e){return CM.has(e.tagName)||e.isContentEditable===!0}const AM=new Set(["INPUT","SELECT","TEXTAREA"]);function EM(e){return AM.has(e.tagName)||e.isContentEditable===!0}const Vo=new WeakSet;function Jx(e){return n=>{n.key==="Enter"&&e(n)}}function rd(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const MM=(e,n)=>{const i=e.currentTarget;if(!i)return;const a=Jx(()=>{if(Vo.has(i))return;rd(i,"down");const s=Jx(()=>{rd(i,"up")}),c=()=>rd(i,"cancel");i.addEventListener("keyup",s,n),i.addEventListener("blur",c,n)});i.addEventListener("keydown",a,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),n)};function Qx(e){return Hh(e)&&!rv()}const Kx=new WeakSet;function jM(e,n,i={}){const[a,s,c]=iv(e,i),u=f=>{const m=f.currentTarget;if(!Qx(f)||Kx.has(f))return;Vo.add(m),i.stopPropagation&&Kx.add(f);const h=n(m,f),y=(v,w)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",b),Vo.has(m)&&Vo.delete(m),Qx(v)&&typeof h=="function"&&h(v,{success:w})},g=v=>{y(v,m===window||m===document||i.useGlobalTarget||av(m,v.target))},b=v=>{y(v,!1)};window.addEventListener("pointerup",g,s),window.addEventListener("pointercancel",b,s)};return a.forEach(f=>{(i.useGlobalTarget?window:f).addEventListener("pointerdown",u,s),Bo(f)&&(f.addEventListener("focus",h=>MM(h,s)),!kM(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function Fh(e){return o1(e)&&"ownerSVGElement"in e}const Po=new WeakMap;let Uo;const lv=(e,n,i)=>(a,s)=>s&&s[0]?s[0][e+"Size"]:Fh(a)&&"getBBox"in a?a.getBBox()[n]:a[i],DM=lv("inline","width","offsetWidth"),RM=lv("block","height","offsetHeight");function NM({target:e,borderBoxSize:n}){Po.get(e)?.forEach(i=>{i(e,{get width(){return DM(e,n)},get height(){return RM(e,n)}})})}function OM(e){e.forEach(NM)}function _M(){typeof ResizeObserver>"u"||(Uo=new ResizeObserver(OM))}function LM(e,n){Uo||_M();const i=tv(e);return i.forEach(a=>{let s=Po.get(a);s||(s=new Set,Po.set(a,s)),s.add(n),Uo?.observe(a)}),()=>{i.forEach(a=>{const s=Po.get(a);s?.delete(n),s?.size||Uo?.unobserve(a)})}}const Io=new Set;let ua;function zM(){ua=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Io.forEach(n=>n(e))},window.addEventListener("resize",ua)}function BM(e){return Io.add(e),ua||zM(),()=>{Io.delete(e),!Io.size&&typeof ua=="function"&&(window.removeEventListener("resize",ua),ua=void 0)}}function Zx(e,n){return typeof e=="function"?BM(e):LM(e,n)}function VM(e){return Fh(e)&&e.tagName==="svg"}const PM=[...W1,ut,Tn],UM=e=>PM.find(Z1(e)),Wx=()=>({translate:0,scale:1,origin:0,originPoint:0}),ca=()=>({x:Wx(),y:Wx()}),$x=()=>({min:0,max:0}),dt=()=>({x:$x(),y:$x()}),IM=new WeakMap;function gu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Hl(e){return typeof e=="string"||Array.isArray(e)}const qh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gh=["initial",...qh];function yu(e){return gu(e.animate)||Gh.some(n=>Hl(e[n]))}function sv(e){return!!(yu(e)||e.variants)}function HM(e,n,i){for(const a in n){const s=n[a],c=i[a];if(St(s))e.addValue(a,s);else if(St(c))e.addValue(a,ha(s,{owner:e}));else if(c!==s)if(e.hasValue(a)){const u=e.getValue(a);u.liveStyle===!0?u.jump(s):u.hasAnimated||u.set(s)}else{const u=e.getStaticValue(a);e.addValue(a,ha(u!==void 0?u:s,{owner:e}))}}for(const a in i)n[a]===void 0&&e.removeValue(a);return n}const Kd={current:null},ov={current:!1},FM=typeof window<"u";function qM(){if(ov.current=!0,!!FM)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>Kd.current=e.matches;e.addEventListener("change",n),n()}else Kd.current=!1}const e0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let nu={};function uv(e){nu=e}function GM(){return nu}class YM{scrapeMotionValuesFromProps(n,i,a){return{}}constructor({parent:n,props:i,presenceContext:a,reducedMotionConfig:s,skipAnimations:c,blockInitialAnimation:u,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Lh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=jt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,qe.render(this.render,!1,!0))};const{latestValues:h,renderState:y}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=y,this.parent=n,this.props=i,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=c,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=yu(i),this.isVariantNode=sv(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:g,...b}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in b){const w=b[v];h[v]!==void 0&&St(w)&&w.set(h[v])}}mount(n){if(this.hasBeenMounted)for(const i in this.initialValues)this.values.get(i)?.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=n,IM.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,a)=>this.bindToMotionValue(a,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(ov.current||qM(),this.shouldReduceMotion=Kd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Ur(this.notifyUpdate),Ur(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,i){if(this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)(),i.accelerate&&F1.has(n)&&this.current instanceof HTMLElement){const{factory:u,keyframes:f,times:m,ease:h,duration:y}=i.accelerate,g=new I1({element:this.current,name:n,keyframes:f,times:m,ease:h,duration:Zt(y)}),b=u(g);this.valueSubscriptions.set(n,()=>{b(),g.cancel()});return}const a=wa.has(n);a&&this.onBindTransform&&this.onBindTransform();const s=i.on("change",u=>{this.latestValues[n]=u,this.props.onUpdate&&qe.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{s(),c&&c(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in nu){const i=nu[n];if(!i)continue;const{isEnabled:a,Feature:s}=i;if(!this.features[n]&&s&&a(this.props)&&(this.features[n]=new s(this)),this.features[n]){const c=this.features[n];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):dt()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<e0.length;a++){const s=e0[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const c="on"+s,u=n[c];u&&(this.propEventSubscriptions[s]=this.on(s,u))}this.prevMotionValues=HM(this,this.scrapeMotionValuesFromProps(n,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const a=this.values.get(n);i!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&i!==void 0&&(a=ha(i===null?void 0:i,{owner:this}),this.addValue(n,a)),a}readValue(n,i){let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(s1(a)||u1(a))?a=parseFloat(a):!UM(a)&&Tn.test(i)&&(a=ev(n,i)),this.setBaseTarget(n,St(a)?a.get():a)),St(a)?a.get():a}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const c=Vh(this.props,i,this.presenceContext?.custom);c&&(a=c[n])}if(i&&a!==void 0)return a;const s=this.getBaseTargetFromProps(this.props,n);return s!==void 0&&!St(s)?s:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Ah),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}scheduleRenderMicrotask(){Ih.render(this.render)}}class cv extends YM{constructor(){super(...arguments),this.KeyframeResolver=vM}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){const a=n.style;return a?a[i]:void 0}removeValueFromRenderState(n,{vars:i,style:a}){delete i[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;St(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Ir{constructor(n){this.isMounted=!1,this.node=n}update(){}}function fv({top:e,left:n,right:i,bottom:a}){return{x:{min:n,max:i},y:{min:e,max:a}}}function XM({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function JM(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),a=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function id(e){return e===void 0||e===1}function Zd({scale:e,scaleX:n,scaleY:i}){return!id(e)||!id(n)||!id(i)}function ui(e){return Zd(e)||dv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function dv(e){return t0(e.x)||t0(e.y)}function t0(e){return e&&e!=="0%"}function ru(e,n,i){const a=e-i,s=n*a;return i+s}function n0(e,n,i,a,s){return s!==void 0&&(e=ru(e,s,a)),ru(e,i,a)+n}function Wd(e,n=0,i=1,a,s){e.min=n0(e.min,n,i,a,s),e.max=n0(e.max,n,i,a,s)}function hv(e,{x:n,y:i}){Wd(e.x,n.translate,n.scale,n.originPoint),Wd(e.y,i.translate,i.scale,i.originPoint)}const r0=.999999999999,i0=1.0000000000001;function QM(e,n,i,a=!1){const s=i.length;if(!s)return;n.x=n.y=1;let c,u;for(let f=0;f<s;f++){c=i[f],u=c.projectionDelta;const{visualElement:m}=c.options;m&&m.props.style&&m.props.style.display==="contents"||(a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&(On(e.x,-c.scroll.offset.x),On(e.y,-c.scroll.offset.y)),u&&(n.x*=u.x.scale,n.y*=u.y.scale,hv(e,u)),a&&ui(c.latestValues)&&Ho(e,c.latestValues,c.layout?.layoutBox))}n.x<i0&&n.x>r0&&(n.x=1),n.y<i0&&n.y>r0&&(n.y=1)}function On(e,n){e.min+=n,e.max+=n}function a0(e,n,i,a,s=.5){const c=Qe(e.min,e.max,s);Wd(e,n,i,c,a)}function l0(e,n){return typeof e=="string"?parseFloat(e)/100*(n.max-n.min):e}function Ho(e,n,i){const a=i??e;a0(e.x,l0(n.x,a.x),n.scaleX,n.scale,n.originX),a0(e.y,l0(n.y,a.y),n.scaleY,n.scale,n.originY)}function mv(e,n){return fv(JM(e.getBoundingClientRect(),n))}function KM(e,n,i){const a=mv(e,i),{scroll:s}=n;return s&&(On(a.x,s.offset.x),On(a.y,s.offset.y)),a}const ZM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},WM=Sa.length;function $M(e,n,i){let a="",s=!0;for(let c=0;c<WM;c++){const u=Sa[c],f=e[u];if(f===void 0)continue;let m=!0;if(typeof f=="number")m=f===(u.startsWith("scale")?1:0);else{const h=parseFloat(f);m=u.startsWith("scale")?h===1:h===0}if(!m||i){const h=nv(f,Uh[u]);if(!m){s=!1;const y=ZM[u]||u;a+=`${y}(${h}) `}i&&(n[u]=h)}}return a=a.trim(),i?a=i(n,s?"":a):s&&(a="none"),a}function Yh(e,n,i){const{style:a,vars:s,transformOrigin:c}=e;let u=!1,f=!1;for(const m in n){const h=n[m];if(wa.has(m)){u=!0;continue}else if(C1(m)){s[m]=h;continue}else{const y=nv(h,Uh[m]);m.startsWith("origin")?(f=!0,c[m]=y):a[m]=y}}if(n.transform||(u||i?a.transform=$M(n,e.transform,i):a.transform&&(a.transform="none")),f){const{originX:m="50%",originY:h="50%",originZ:y=0}=c;a.transformOrigin=`${m} ${h} ${y}`}}function pv(e,{style:n,vars:i},a,s){const c=e.style;let u;for(u in n)c[u]=n[u];s?.applyProjectionStyles(c,a);for(u in i)c.setProperty(u,i[u])}function s0(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const wl={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(ue.test(e))e=parseFloat(e);else return e;const i=s0(e,n.target.x),a=s0(e,n.target.y);return`${i}% ${a}%`}},e3={correct:(e,{treeScale:n,projectionDelta:i})=>{const a=e,s=Tn.parse(e);if(s.length>5)return a;const c=Tn.createTransformer(e),u=typeof s[0]!="number"?1:0,f=i.x.scale*n.x,m=i.y.scale*n.y;s[0+u]/=f,s[1+u]/=m;const h=Qe(f,m,.5);return typeof s[2+u]=="number"&&(s[2+u]/=h),typeof s[3+u]=="number"&&(s[3+u]/=h),c(s)}},$d={borderRadius:{...wl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wl,borderTopRightRadius:wl,borderBottomLeftRadius:wl,borderBottomRightRadius:wl,boxShadow:e3};function gv(e,{layout:n,layoutId:i}){return wa.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!$d[e]||e==="opacity")}function Xh(e,n,i){const a=e.style,s=n?.style,c={};if(!a)return c;for(const u in a)(St(a[u])||s&&St(s[u])||gv(u,e)||i?.getValue(u)?.liveStyle!==void 0)&&(c[u]=a[u]);return c}function t3(e){return window.getComputedStyle(e)}class n3 extends cv{constructor(){super(...arguments),this.type="html",this.renderInstance=pv}readValueFromInstance(n,i){if(wa.has(i))return this.projection?.isProjecting?Pd(i):wE(n,i);{const a=t3(n),s=(C1(i)?a.getPropertyValue(i):a[i])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(n,{transformPagePoint:i}){return mv(n,i)}build(n,i,a){Yh(n,i,a.transformTemplate)}scrapeMotionValuesFromProps(n,i,a){return Xh(n,i,a)}}const r3={offset:"stroke-dashoffset",array:"stroke-dasharray"},i3={offset:"strokeDashoffset",array:"strokeDasharray"};function a3(e,n,i=1,a=0,s=!0){e.pathLength=1;const c=s?r3:i3;e[c.offset]=`${-a}`,e[c.array]=`${n} ${i}`}const l3=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function yv(e,{attrX:n,attrY:i,attrScale:a,pathLength:s,pathSpacing:c=1,pathOffset:u=0,...f},m,h,y){if(Yh(e,f,h),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:b}=e;g.transform&&(b.transform=g.transform,delete g.transform),(b.transform||g.transformOrigin)&&(b.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),b.transform&&(b.transformBox=y?.transformBox??"fill-box",delete g.transformBox);for(const v of l3)g[v]!==void 0&&(b[v]=g[v],delete g[v]);n!==void 0&&(g.x=n),i!==void 0&&(g.y=i),a!==void 0&&(g.scale=a),s!==void 0&&a3(g,s,c,u,!1)}const xv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),bv=e=>typeof e=="string"&&e.toLowerCase()==="svg";function s3(e,n,i,a){pv(e,n,void 0,a);for(const s in n.attrs)e.setAttribute(xv.has(s)?s:Ph(s),n.attrs[s])}function vv(e,n,i){const a=Xh(e,n,i);for(const s in e)if(St(e[s])||St(n[s])){const c=Sa.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[c]=e[s]}return a}class o3 extends cv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=dt}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(wa.has(i)){const a=$1(i);return a&&a.default||0}return i=xv.has(i)?i:Ph(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,a){return vv(n,i,a)}build(n,i,a){yv(n,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(n,i,a,s){s3(n,i,a,s)}mount(n){this.isSVGTag=bv(n.tagName),super.mount(n)}}const u3=Gh.length;function Sv(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?Sv(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<u3;i++){const a=Gh[i],s=e.props[a];(Hl(s)||s===!1)&&(n[a]=s)}return n}function wv(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(n[a]!==e[a])return!1;return!0}const c3=[...qh].reverse(),f3=qh.length;function d3(e){return n=>Promise.all(n.map(({animation:i,options:a})=>uM(e,i,a)))}function h3(e){let n=d3(e),i=o0(),a=!0,s=!1;const c=h=>(y,g)=>{const b=hi(e,g,h==="exit"?e.presenceContext?.custom:void 0);if(b){const{transition:v,transitionEnd:w,...E}=b;y={...y,...E,...w}}return y};function u(h){n=h(e)}function f(h){const{props:y}=e,g=Sv(e.parent)||{},b=[],v=new Set;let w={},E=1/0;for(let C=0;C<f3;C++){const O=c3[C],A=i[O],V=y[O]!==void 0?y[O]:g[O],Y=Hl(V),L=O===h?A.isActive:null;L===!1&&(E=C);let G=V===g[O]&&V!==y[O]&&Y;if(G&&(a||s)&&e.manuallyAnimateOnMount&&(G=!1),A.protectedKeys={...w},!A.isActive&&L===null||!V&&!A.prevProp||gu(V)||typeof V=="boolean")continue;if(O==="exit"&&A.isActive&&L!==!0){A.prevResolvedValues&&(w={...w,...A.prevResolvedValues});continue}const Q=m3(A.prevProp,V);let F=Q||O===h&&A.isActive&&!G&&Y||C>E&&Y,N=!1;const $=Array.isArray(V)?V:[V];let te=$.reduce(c(O),{});L===!1&&(te={});const{prevResolvedValues:ge={}}=A,le={...ge,...te},ne=ae=>{F=!0,v.has(ae)&&(N=!0,v.delete(ae)),A.needsAnimating[ae]=!0;const ce=e.getValue(ae);ce&&(ce.liveStyle=!1)};for(const ae in le){const ce=te[ae],D=ge[ae];if(w.hasOwnProperty(ae))continue;let _=!1;Gd(ce)&&Gd(D)?_=!wv(ce,D):_=ce!==D,_?ce!=null?ne(ae):v.add(ae):ce!==void 0&&v.has(ae)?ne(ae):A.protectedKeys[ae]=!0}A.prevProp=V,A.prevResolvedValues=te,A.isActive&&(w={...w,...te}),(a||s)&&e.blockInitialAnimation&&(F=!1);const P=G&&Q;F&&(!P||N)&&b.push(...$.map(ae=>{const ce={type:O};if(typeof ae=="string"&&(a||s)&&!P&&e.manuallyAnimateOnMount&&e.parent){const{parent:D}=e,_=hi(D,ae);if(D.enteringChildren&&_){const{delayChildren:J}=_.transition||{};ce.delay=q1(D.enteringChildren,e,J)}}return{animation:ae,options:ce}}))}if(v.size){const C={};if(typeof y.initial!="boolean"){const O=hi(e,Array.isArray(y.initial)?y.initial[0]:y.initial);O&&O.transition&&(C.transition=O.transition)}v.forEach(O=>{const A=e.getBaseTarget(O),V=e.getValue(O);V&&(V.liveStyle=!0),C[O]=A??null}),b.push({animation:C})}let M=!!b.length;return a&&(y.initial===!1||y.initial===y.animate)&&!e.manuallyAnimateOnMount&&(M=!1),a=!1,s=!1,M?n(b):Promise.resolve()}function m(h,y){if(i[h].isActive===y)return Promise.resolve();e.variantChildren?.forEach(b=>b.animationState?.setActive(h,y)),i[h].isActive=y;const g=f(h);for(const b in i)i[b].protectedKeys={};return g}return{animateChanges:f,setActive:m,setAnimateFunction:u,getState:()=>i,reset:()=>{i=o0(),s=!0}}}function m3(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!wv(n,e):!1}function si(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function o0(){return{animate:si(!0),whileInView:si(),whileHover:si(),whileTap:si(),whileDrag:si(),whileFocus:si(),exit:si()}}function eh(e,n){e.min=n.min,e.max=n.max}function vn(e,n){eh(e.x,n.x),eh(e.y,n.y)}function u0(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}const Tv=1e-4,p3=1-Tv,g3=1+Tv,Cv=.01,y3=0-Cv,x3=0+Cv;function Dt(e){return e.max-e.min}function b3(e,n,i){return Math.abs(e-n)<=i}function c0(e,n,i,a=.5){e.origin=a,e.originPoint=Qe(n.min,n.max,e.origin),e.scale=Dt(i)/Dt(n),e.translate=Qe(i.min,i.max,e.origin)-e.originPoint,(e.scale>=p3&&e.scale<=g3||isNaN(e.scale))&&(e.scale=1),(e.translate>=y3&&e.translate<=x3||isNaN(e.translate))&&(e.translate=0)}function Ol(e,n,i,a){c0(e.x,n.x,i.x,a?a.originX:void 0),c0(e.y,n.y,i.y,a?a.originY:void 0)}function f0(e,n,i,a=0){const s=a?Qe(i.min,i.max,a):i.min;e.min=s+n.min,e.max=e.min+Dt(n)}function v3(e,n,i,a){f0(e.x,n.x,i.x,a?.x),f0(e.y,n.y,i.y,a?.y)}function d0(e,n,i,a=0){const s=a?Qe(i.min,i.max,a):i.min;e.min=n.min-s,e.max=e.min+Dt(n)}function iu(e,n,i,a){d0(e.x,n.x,i.x,a?.x),d0(e.y,n.y,i.y,a?.y)}function h0(e,n,i,a,s){return e-=n,e=ru(e,1/i,a),s!==void 0&&(e=ru(e,1/s,a)),e}function S3(e,n=0,i=1,a=.5,s,c=e,u=e){if(_n.test(n)&&(n=parseFloat(n),n=Qe(u.min,u.max,n/100)-u.min),typeof n!="number")return;let f=Qe(c.min,c.max,a);e===c&&(f-=n),e.min=h0(e.min,n,i,f,s),e.max=h0(e.max,n,i,f,s)}function m0(e,n,[i,a,s],c,u){S3(e,n[i],n[a],n[s],n.scale,c,u)}const w3=["x","scaleX","originX"],T3=["y","scaleY","originY"];function p0(e,n,i,a){m0(e.x,n,w3,i?i.x:void 0,a?a.x:void 0),m0(e.y,n,T3,i?i.y:void 0,a?a.y:void 0)}function g0(e){return e.translate===0&&e.scale===1}function kv(e){return g0(e.x)&&g0(e.y)}function y0(e,n){return e.min===n.min&&e.max===n.max}function C3(e,n){return y0(e.x,n.x)&&y0(e.y,n.y)}function x0(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function Av(e,n){return x0(e.x,n.x)&&x0(e.y,n.y)}function b0(e){return Dt(e.x)/Dt(e.y)}function v0(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}function Rn(e){return[e("x"),e("y")]}function k3(e,n,i){let a="";const s=e.x.translate/n.x,c=e.y.translate/n.y,u=i?.z||0;if((s||c||u)&&(a=`translate3d(${s}px, ${c}px, ${u}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:h,rotate:y,rotateX:g,rotateY:b,skewX:v,skewY:w}=i;h&&(a=`perspective(${h}px) ${a}`),y&&(a+=`rotate(${y}deg) `),g&&(a+=`rotateX(${g}deg) `),b&&(a+=`rotateY(${b}deg) `),v&&(a+=`skewX(${v}deg) `),w&&(a+=`skewY(${w}deg) `)}const f=e.x.scale*n.x,m=e.y.scale*n.y;return(f!==1||m!==1)&&(a+=`scale(${f}, ${m})`),a||"none"}const Ev=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],A3=Ev.length,S0=e=>typeof e=="string"?parseFloat(e):e,w0=e=>typeof e=="number"||ue.test(e);function E3(e,n,i,a,s,c){s?(e.opacity=Qe(0,i.opacity??1,M3(a)),e.opacityExit=Qe(n.opacity??1,0,j3(a))):c&&(e.opacity=Qe(n.opacity??1,i.opacity??1,a));for(let u=0;u<A3;u++){const f=Ev[u];let m=T0(n,f),h=T0(i,f);if(m===void 0&&h===void 0)continue;m||(m=0),h||(h=0),m===0||h===0||w0(m)===w0(h)?(e[f]=Math.max(Qe(S0(m),S0(h),a),0),(_n.test(h)||_n.test(m))&&(e[f]+="%")):e[f]=h}(n.rotate||i.rotate)&&(e.rotate=Qe(n.rotate||0,i.rotate||0,a))}function T0(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const M3=Mv(0,.5,x1),j3=Mv(.5,.95,pn);function Mv(e,n,i){return a=>a<e?0:a>n?1:i(Ul(e,n,a))}function D3(e,n,i){const a=St(e)?e:ha(e);return a.start(Bh("",a,n,i)),a.animation}function Fl(e,n,i,a={passive:!0}){return e.addEventListener(n,i,a),()=>e.removeEventListener(n,i)}const R3=(e,n)=>e.depth-n.depth;class N3{constructor(){this.children=[],this.isDirty=!1}add(n){Ch(this.children,n),this.isDirty=!0}remove(n){Zo(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(R3),this.isDirty=!1,this.children.forEach(n)}}function O3(e,n){const i=jt.now(),a=({timestamp:s})=>{const c=s-i;c>=n&&(Ur(a),e(c-n))};return qe.setup(a,!0),()=>Ur(a)}function Fo(e){return St(e)?e.get():e}class _3{constructor(){this.members=[]}add(n){Ch(this.members,n);for(let i=this.members.length-1;i>=0;i--){const a=this.members[i];if(a===n||a===this.lead||a===this.prevLead)continue;const s=a.instance;(!s||s.isConnected===!1)&&!a.snapshot&&(Zo(this.members,a),a.unmount())}n.scheduleRender()}remove(n){if(Zo(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){for(let i=this.members.indexOf(n)-1;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1&&a.instance?.isConnected!==!1)return this.promote(a),!0}return!1}promote(n,i){const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.updateSnapshot(),n.scheduleRender();const{layoutDependency:s}=a.options,{layoutDependency:c}=n.options;(s===void 0||s!==c)&&(n.resumeFrom=a,i&&(a.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),n.root?.isUpdating&&(n.isLayoutDirty=!0)),n.options.crossfade===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{n.options.onExitComplete?.(),n.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(n=>n.instance&&n.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const qo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ad=["","X","Y","Z"],L3=1e3;let z3=0;function ld(e,n,i,a){const{latestValues:s}=n;s[e]&&(i[e]=s[e],n.setStaticValue(e,0),a&&(a[e]=0))}function jv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=Q1(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:s,layoutId:c}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",qe,!(s||c))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&jv(a)}function Dv({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(u={},f=n?.()){this.id=z3++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(P3),this.nodes.forEach(G3),this.nodes.forEach(Y3),this.nodes.forEach(U3)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new N3)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Ah),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const m=this.eventHandlers.get(u);m&&m.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Fh(u)&&!VM(u),this.instance=u;const{layoutId:f,layout:m,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||f)&&(this.isLayoutDirty=!0),e){let y,g=0;const b=()=>this.root.updateBlockedByResize=!1;qe.read(()=>{g=window.innerWidth}),e(u,()=>{const v=window.innerWidth;v!==g&&(g=v,this.root.updateBlockedByResize=!0,y&&y(),y=O3(b,250),qo.hasAnimatedSinceResize&&(qo.hasAnimatedSinceResize=!1,this.nodes.forEach(A0)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:g,hasRelativeLayoutChanged:b,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||h.getDefaultTransition()||Z3,{onLayoutAnimationStart:E,onLayoutAnimationComplete:M}=h.getProps(),C=!this.targetLayout||!Av(this.targetLayout,v),O=!g&&b;if(this.options.layoutRoot||this.resumeFrom||O||g&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const A={...zh(w,"layout"),onPlay:E,onComplete:M};(h.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A),this.setAnimationOrigin(y,O)}else g||A0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(X3),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const g=this.path[y];g.shouldResetTransform=!0,(typeof g.latestValues.x=="string"||typeof g.latestValues.y=="string")&&(g.isLayoutDirty=!0),g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const m=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),m&&this.nodes.forEach(H3),this.nodes.forEach(C0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(k0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(F3),this.nodes.forEach(q3),this.nodes.forEach(B3),this.nodes.forEach(V3)):this.nodes.forEach(k0),this.clearAllSnapshots();const f=jt.now();vt.delta=Ln(0,1e3/60,f-vt.timestamp),vt.timestamp=f,vt.isProcessing=!0,Zf.update.process(vt),Zf.preRender.process(vt),Zf.render.process(vt),vt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ih.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(I3),this.sharedNodes.forEach(J3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Dt(this.snapshot.measuredBox.x)&&!Dt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=dt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const m=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!s)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!kv(this.projectionDelta),m=this.getTransformTemplate(),h=m?m(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;u&&this.instance&&(f||ui(this.latestValues)||y)&&(s(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);return u&&(m=this.removeTransform(m)),W3(m),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return dt();const f=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some($3))){const{scroll:h}=this.root;h&&(On(f.x,h.offset.x),On(f.y,h.offset.y))}return f}removeElementScroll(u){const f=dt();if(vn(f,u),this.scroll?.wasRoot)return f;for(let m=0;m<this.path.length;m++){const h=this.path[m],{scroll:y,options:g}=h;h!==this.root&&y&&g.layoutScroll&&(y.wasRoot&&vn(f,u),On(f.x,y.offset.x),On(f.y,y.offset.y))}return f}applyTransform(u,f=!1,m){const h=m||dt();vn(h,u);for(let y=0;y<this.path.length;y++){const g=this.path[y];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&(On(h.x,-g.scroll.offset.x),On(h.y,-g.scroll.offset.y)),ui(g.latestValues)&&Ho(h,g.latestValues,g.layout?.layoutBox)}return ui(this.latestValues)&&Ho(h,this.latestValues,this.layout?.layoutBox),h}removeTransform(u){const f=dt();vn(f,u);for(let m=0;m<this.path.length;m++){const h=this.path[m];if(!ui(h.latestValues))continue;let y;h.instance&&(Zd(h.latestValues)&&h.updateSnapshot(),y=dt(),vn(y,h.measurePageBox())),p0(f,h.latestValues,h.snapshot?.layoutBox,y)}return ui(this.latestValues)&&p0(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==vt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(u||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:g}=this.options;if(!this.layout||!(y||g))return;this.resolvedRelativeTargetAt=vt.timestamp;const b=this.getClosestProjectingParent();b&&this.linkedParentVersion!==b.layoutVersion&&!b.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&b&&b.layout?this.createRelativeTarget(b,this.layout.layoutBox,b.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=dt(),this.targetWithTransforms=dt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),v3(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):vn(this.target,this.layout.layoutBox),hv(this.target,this.targetDelta)):vn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?this.createRelativeTarget(b,this.target,b.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Zd(this.parent.latestValues)||dv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,m){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=dt(),this.relativeTargetOrigin=dt(),iu(this.relativeTargetOrigin,f,m,this.options.layoutAnchor||void 0),vn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),f=!!this.resumingFrom||this!==u;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===vt.timestamp&&(m=!1),m)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;vn(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,b=this.treeScale.y;QM(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=dt());const{target:v}=u;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(u0(this.prevProjectionDelta.x,this.projectionDelta.x),u0(this.prevProjectionDelta.y,this.projectionDelta.y)),Ol(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==b||!v0(this.projectionDelta.x,this.prevProjectionDelta.x)||!v0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ca(),this.projectionDelta=ca(),this.projectionDeltaWithTransform=ca()}setAnimationOrigin(u,f=!1){const m=this.snapshot,h=m?m.latestValues:{},y={...this.latestValues},g=ca();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const b=dt(),v=m?m.source:void 0,w=this.layout?this.layout.source:void 0,E=v!==w,M=this.getStack(),C=!M||M.members.length<=1,O=!!(E&&!C&&this.options.crossfade===!0&&!this.path.some(K3));this.animationProgress=0;let A;this.mixTargetDelta=V=>{const Y=V/1e3;E0(g.x,u.x,Y),E0(g.y,u.y,Y),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(iu(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Q3(this.relativeTarget,this.relativeTargetOrigin,b,Y),A&&C3(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=dt()),vn(A,this.relativeTarget)),E&&(this.animationValues=y,E3(y,h,this.latestValues,Y,O,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qe.update(()=>{qo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ha(0)),this.motionValue.jump(0,!1),this.currentAnimation=D3(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(L3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:m,layout:h,latestValues:y}=u;if(!(!f||!m||!h)){if(this!==u&&this.layout&&h&&Rv(this.options.animationType,this.layout.layoutBox,h.layoutBox)){m=this.target||dt();const g=Dt(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+g;const b=Dt(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+b}vn(f,m),Ho(f,y),Ol(this.projectionDeltaWithTransform,this.layoutCorrected,f,y)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new _3),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:m}={}){const h=this.getStack();h&&h.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const h={};m.z&&ld("z",u,h,this.animationValues);for(let y=0;y<ad.length;y++)ld(`rotate${ad[y]}`,u,h,this.animationValues),ld(`skew${ad[y]}`,u,h,this.animationValues);u.render();for(const y in h)u.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Fo(f?.pointerEvents)||"",u.transform=m?m(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Fo(f?.pointerEvents)||""),this.hasProjected&&!ui(this.latestValues)&&(u.transform=m?m({},""):"none",this.hasProjected=!1);return}u.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let g=k3(this.projectionDeltaWithTransform,this.treeScale,y);m&&(g=m(y,g)),u.transform=g;const{x:b,y:v}=this.projectionDelta;u.transformOrigin=`${b.origin*100}% ${v.origin*100}% 0`,h.animationValues?u.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:u.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const w in $d){if(y[w]===void 0)continue;const{correct:E,applyTo:M,isCSSVariable:C}=$d[w],O=g==="none"?y[w]:E(y[w],h);if(M){const A=M.length;for(let V=0;V<A;V++)u[M[V]]=O}else C?this.options.visualElement.renderState.vars[w]=O:u[w]=O}this.options.layoutId&&(u.pointerEvents=h===this?Fo(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(C0),this.root.sharedNodes.clear()}}}function B3(e){e.updateLayout()}function V3(e){const n=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:a}=e.layout,{animationType:s}=e.options,c=n.source!==e.layout.source;if(s==="size")Rn(y=>{const g=c?n.measuredBox[y]:n.layoutBox[y],b=Dt(g);g.min=i[y].min,g.max=g.min+b});else if(s==="x"||s==="y"){const y=s==="x"?"y":"x";eh(c?n.measuredBox[y]:n.layoutBox[y],i[y])}else Rv(s,n.layoutBox,i)&&Rn(y=>{const g=c?n.measuredBox[y]:n.layoutBox[y],b=Dt(i[y]);g.max=g.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+b)});const u=ca();Ol(u,i,n.layoutBox);const f=ca();c?Ol(f,e.applyTransform(a,!0),n.measuredBox):Ol(f,i,n.layoutBox);const m=!kv(u);let h=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:g,layout:b}=y;if(g&&b){const v=e.options.layoutAnchor||void 0,w=dt();iu(w,n.layoutBox,g.layoutBox,v);const E=dt();iu(E,i,b.layoutBox,v),Av(w,E)||(h=!0),y.options.layoutRoot&&(e.relativeTarget=E,e.relativeTargetOrigin=w,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:f,layoutDelta:u,hasLayoutChanged:m,hasRelativeLayoutChanged:h})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function P3(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function U3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function I3(e){e.clearSnapshot()}function C0(e){e.clearMeasurements()}function H3(e){e.isLayoutDirty=!0,e.updateLayout()}function k0(e){e.isLayoutDirty=!1}function F3(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function q3(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function A0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function G3(e){e.resolveTargetDelta()}function Y3(e){e.calcProjection()}function X3(e){e.resetSkewAndRotation()}function J3(e){e.removeLeadSnapshot()}function E0(e,n,i){e.translate=Qe(n.translate,0,i),e.scale=Qe(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function M0(e,n,i,a){e.min=Qe(n.min,i.min,a),e.max=Qe(n.max,i.max,a)}function Q3(e,n,i,a){M0(e.x,n.x,i.x,a),M0(e.y,n.y,i.y,a)}function K3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Z3={duration:.45,ease:[.4,0,.1,1]},j0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),D0=j0("applewebkit/")&&!j0("chrome/")?Math.round:pn;function R0(e){e.min=D0(e.min),e.max=D0(e.max)}function W3(e){R0(e.x),R0(e.y)}function Rv(e,n,i){return e==="position"||e==="preserve-aspect"&&!b3(b0(n),b0(i),.2)}function $3(e){return e!==e.root&&e.scroll?.wasRoot}const ej=Dv({attachResizeListener:(e,n)=>Fl(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),sd={current:void 0},Nv=Dv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!sd.current){const e=new ej({});e.mount(window),e.setOptions({layoutScroll:!0}),sd.current=e}return sd.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Jh=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function N0(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function tj(...e){return n=>{let i=!1;const a=e.map(s=>{const c=N0(s,n);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let s=0;s<a.length;s++){const c=a[s];typeof c=="function"?c():N0(e[s],null)}}}}function nj(...e){return j.useCallback(tj(...e),e)}class rj extends j.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(Bo(i)&&n.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=i.offsetParent,s=Bo(a)&&a.offsetWidth||0,c=Bo(a)&&a.offsetHeight||0,u=getComputedStyle(i),f=this.props.sizeRef.current;f.height=parseFloat(u.height),f.width=parseFloat(u.width),f.top=i.offsetTop,f.left=i.offsetLeft,f.right=s-f.width-f.left,f.bottom=c-f.height-f.top}return null}componentDidUpdate(){}render(){return this.props.children}}function ij({children:e,isPresent:n,anchorX:i,anchorY:a,root:s,pop:c}){const u=j.useId(),f=j.useRef(null),m=j.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:h}=j.useContext(Jh),y=e.props?.ref??e?.ref,g=nj(f,y);return j.useInsertionEffect(()=>{const{width:b,height:v,top:w,left:E,right:M,bottom:C}=m.current;if(n||c===!1||!f.current||!b||!v)return;const O=i==="left"?`left: ${E}`:`right: ${M}`,A=a==="bottom"?`bottom: ${C}`:`top: ${w}`;f.current.dataset.motionPopId=u;const V=document.createElement("style");h&&(V.nonce=h);const Y=s??document.head;return Y.appendChild(V),V.sheet&&V.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${v}px !important;
            ${O}px !important;
            ${A}px !important;
          }
        `),()=>{f.current?.removeAttribute("data-motion-pop-id"),Y.contains(V)&&Y.removeChild(V)}},[n]),x.jsx(rj,{isPresent:n,childRef:f,sizeRef:m,pop:c,children:c===!1?e:j.cloneElement(e,{ref:g})})}const aj=({children:e,initial:n,isPresent:i,onExitComplete:a,custom:s,presenceAffectsLayout:c,mode:u,anchorX:f,anchorY:m,root:h})=>{const y=Th(lj),g=j.useId();let b=!0,v=j.useMemo(()=>(b=!1,{id:g,initial:n,isPresent:i,custom:s,onExitComplete:w=>{y.set(w,!0);for(const E of y.values())if(!E)return;a&&a()},register:w=>(y.set(w,!1),()=>y.delete(w))}),[i,y,a]);return c&&b&&(v={...v}),j.useMemo(()=>{y.forEach((w,E)=>y.set(E,!1))},[i]),j.useEffect(()=>{!i&&!y.size&&a&&a()},[i]),e=x.jsx(ij,{pop:u==="popLayout",isPresent:i,anchorX:f,anchorY:m,root:h,children:e}),x.jsx(mu.Provider,{value:v,children:e})};function lj(){return new Map}function Ov(e=!0){const n=j.useContext(mu);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:s}=n,c=j.useId();j.useEffect(()=>{if(e)return s(c)},[e]);const u=j.useCallback(()=>e&&a&&a(c),[c,a,e]);return!i&&a?[!1,u]:[!0]}const Eo=e=>e.key||"";function O0(e){const n=[];return j.Children.forEach(e,i=>{j.isValidElement(i)&&n.push(i)}),n}const sj=({children:e,custom:n,initial:i=!0,onExitComplete:a,presenceAffectsLayout:s=!0,mode:c="sync",propagate:u=!1,anchorX:f="left",anchorY:m="top",root:h})=>{const[y,g]=Ov(u),b=j.useMemo(()=>O0(e),[e]),v=u&&!y?[]:b.map(Eo),w=j.useRef(!0),E=j.useRef(b),M=Th(()=>new Map),C=j.useRef(new Set),[O,A]=j.useState(b),[V,Y]=j.useState(b);l1(()=>{w.current=!1,E.current=b;for(let Q=0;Q<V.length;Q++){const F=Eo(V[Q]);v.includes(F)?(M.delete(F),C.current.delete(F)):M.get(F)!==!0&&M.set(F,!1)}},[V,v.length,v.join("-")]);const L=[];if(b!==O){let Q=[...b];for(let F=0;F<V.length;F++){const N=V[F],$=Eo(N);v.includes($)||(Q.splice(F,0,N),L.push(N))}return c==="wait"&&L.length&&(Q=L),Y(O0(Q)),A(b),null}const{forceRender:G}=j.useContext(wh);return x.jsx(x.Fragment,{children:V.map(Q=>{const F=Eo(Q),N=u&&!y?!1:b===V||v.includes(F),$=()=>{if(C.current.has(F))return;if(M.has(F))C.current.add(F),M.set(F,!0);else return;let te=!0;M.forEach(ge=>{ge||(te=!1)}),te&&(G?.(),Y(E.current),u&&g?.(),a&&a())};return x.jsx(aj,{isPresent:N,initial:!w.current||i?void 0:!1,custom:n,presenceAffectsLayout:s,mode:c,root:h,onExitComplete:N?void 0:$,anchorX:f,anchorY:m,children:Q},F)})})},_v=j.createContext({strict:!1}),_0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let L0=!1;function oj(){if(L0)return;const e={};for(const n in _0)e[n]={isEnabled:i=>_0[n].some(a=>!!i[a])};uv(e),L0=!0}function Lv(){return oj(),GM()}function uj(e){const n=Lv();for(const i in e)n[i]={...n[i],...e[i]};uv(n)}const cj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function au(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||cj.has(e)}let zv=e=>!au(e);function fj(e){typeof e=="function"&&(zv=n=>n.startsWith("on")?!au(n):e(n))}try{fj(require("@emotion/is-prop-valid").default)}catch{}function dj(e,n,i){const a={};for(const s in e)s==="values"&&typeof e.values=="object"||St(e[s])||(zv(s)||i===!0&&au(s)||!n&&!au(s)||e.draggable&&s.startsWith("onDrag"))&&(a[s]=e[s]);return a}const xu=j.createContext({});function hj(e,n){if(yu(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Hl(i)?i:void 0,animate:Hl(a)?a:void 0}}return e.inherit!==!1?n:{}}function mj(e){const{initial:n,animate:i}=hj(e,j.useContext(xu));return j.useMemo(()=>({initial:n,animate:i}),[z0(n),z0(i)])}function z0(e){return Array.isArray(e)?e.join(" "):e}const Qh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Bv(e,n,i){for(const a in n)!St(n[a])&&!gv(a,i)&&(e[a]=n[a])}function pj({transformTemplate:e},n){return j.useMemo(()=>{const i=Qh();return Yh(i,n,e),Object.assign({},i.vars,i.style)},[n])}function gj(e,n){const i=e.style||{},a={};return Bv(a,i,e),Object.assign(a,pj(e,n)),a}function yj(e,n){const i={},a=gj(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const Vv=()=>({...Qh(),attrs:{}});function xj(e,n,i,a){const s=j.useMemo(()=>{const c=Vv();return yv(c,n,bv(a),e.transformTemplate,e.style),{...c.attrs,style:{...c.style}}},[n]);if(e.style){const c={};Bv(c,e.style,e),s.style={...c,...s.style}}return s}const bj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kh(e){return typeof e!="string"||e.includes("-")?!1:!!(bj.indexOf(e)>-1||/[A-Z]/u.test(e))}function vj(e,n,i,{latestValues:a},s,c=!1,u){const m=(u??Kh(e)?xj:yj)(n,a,s,e),h=dj(n,typeof e=="string",c),y=e!==j.Fragment?{...h,...m,ref:i}:{},{children:g}=n,b=j.useMemo(()=>St(g)?g.get():g,[g]);return j.createElement(e,{...y,children:b})}function Sj({scrapeMotionValuesFromProps:e,createRenderState:n},i,a,s){return{latestValues:wj(i,a,s,e),renderState:n()}}function wj(e,n,i,a){const s={},c=a(e,{});for(const b in c)s[b]=Fo(c[b]);let{initial:u,animate:f}=e;const m=yu(e),h=sv(e);n&&h&&!m&&e.inherit!==!1&&(u===void 0&&(u=n.initial),f===void 0&&(f=n.animate));let y=i?i.initial===!1:!1;y=y||u===!1;const g=y?f:u;if(g&&typeof g!="boolean"&&!gu(g)){const b=Array.isArray(g)?g:[g];for(let v=0;v<b.length;v++){const w=Vh(e,b[v]);if(w){const{transitionEnd:E,transition:M,...C}=w;for(const O in C){let A=C[O];if(Array.isArray(A)){const V=y?A.length-1:0;A=A[V]}A!==null&&(s[O]=A)}for(const O in E)s[O]=E[O]}}}return s}const Pv=e=>(n,i)=>{const a=j.useContext(xu),s=j.useContext(mu),c=()=>Sj(e,n,a,s);return i?c():Th(c)},Tj=Pv({scrapeMotionValuesFromProps:Xh,createRenderState:Qh}),Cj=Pv({scrapeMotionValuesFromProps:vv,createRenderState:Vv}),kj=Symbol.for("motionComponentSymbol");function Aj(e,n,i){const a=j.useRef(i);j.useInsertionEffect(()=>{a.current=i});const s=j.useRef(null);return j.useCallback(c=>{c&&e.onMount?.(c);const u=a.current;if(typeof u=="function")if(c){const f=u(c);typeof f=="function"&&(s.current=f)}else s.current?(s.current(),s.current=null):u(c);else u&&(u.current=c);n&&(c?n.mount(c):n.unmount())},[n])}const Uv=j.createContext({});function la(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ej(e,n,i,a,s,c){const{visualElement:u}=j.useContext(xu),f=j.useContext(_v),m=j.useContext(mu),h=j.useContext(Jh),y=h.reducedMotion,g=h.skipAnimations,b=j.useRef(null),v=j.useRef(!1);a=a||f.renderer,!b.current&&a&&(b.current=a(e,{visualState:n,parent:u,props:i,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:y,skipAnimations:g,isSVG:c}),v.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const w=b.current,E=j.useContext(Uv);w&&!w.projection&&s&&(w.type==="html"||w.type==="svg")&&Mj(b.current,i,s,E);const M=j.useRef(!1);j.useInsertionEffect(()=>{w&&M.current&&w.update(i,m)});const C=i[J1],O=j.useRef(!!C&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(C)&&window.MotionHasOptimisedAnimation?.(C));return l1(()=>{v.current=!0,w&&(M.current=!0,window.MotionIsMounted=!0,w.updateFeatures(),w.scheduleRenderMicrotask(),O.current&&w.animationState&&w.animationState.animateChanges())}),j.useEffect(()=>{w&&(!O.current&&w.animationState&&w.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(C)}),O.current=!1),w.enteringChildren=void 0)}),w}function Mj(e,n,i,a){const{layoutId:s,layout:c,drag:u,dragConstraints:f,layoutScroll:m,layoutRoot:h,layoutAnchor:y,layoutCrossfade:g}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:Iv(e.parent)),e.projection.setOptions({layoutId:s,layout:c,alwaysMeasureLayout:!!u||f&&la(f),visualElement:e,animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:m,layoutRoot:h,layoutAnchor:y})}function Iv(e){if(e)return e.options.allowProjection!==!1?e.projection:Iv(e.parent)}function od(e,{forwardMotionProps:n=!1,type:i}={},a,s){a&&uj(a);const c=i?i==="svg":Kh(e),u=c?Cj:Tj;function f(h,y){let g;const b={...j.useContext(Jh),...h,layoutId:jj(h)},{isStatic:v}=b,w=mj(h),E=u(h,v);if(!v&&typeof window<"u"){Dj();const M=Rj(b);g=M.MeasureLayout,w.visualElement=Ej(e,E,b,s,M.ProjectionNode,c)}return x.jsxs(xu.Provider,{value:w,children:[g&&w.visualElement?x.jsx(g,{visualElement:w.visualElement,...b}):null,vj(e,h,Aj(E,w.visualElement,y),E,v,n,c)]})}f.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const m=j.forwardRef(f);return m[kj]=e,m}function jj({layoutId:e}){const n=j.useContext(wh).id;return n&&e!==void 0?n+"-"+e:e}function Dj(e,n){j.useContext(_v).strict}function Rj(e){const n=Lv(),{drag:i,layout:a}=n;if(!i&&!a)return{};const s={...i,...a};return{MeasureLayout:i?.isEnabled(e)||a?.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function Nj(e,n){if(typeof Proxy>"u")return od;const i=new Map,a=(c,u)=>od(c,u,e,n),s=(c,u)=>a(c,u);return new Proxy(s,{get:(c,u)=>u==="create"?a:(i.has(u)||i.set(u,od(u,void 0,e,n)),i.get(u))})}const Oj=(e,n)=>n.isSVG??Kh(e)?new o3(n):new n3(n,{allowProjection:e!==j.Fragment});class _j extends Ir{constructor(n){super(n),n.animationState||(n.animationState=h3(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();gu(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let Lj=0;class zj extends Ir{constructor(){super(...arguments),this.id=Lj++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;if(n&&a===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"){const f=hi(this.node,c,u);if(f){const{transition:m,transitionEnd:h,...y}=f;for(const g in y)this.node.getValue(g)?.jump(y[g])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const s=this.node.animationState.setActive("exit",!n);i&&!n&&s.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const Bj={animation:{Feature:_j},exit:{Feature:zj}};function $l(e){return{point:{x:e.pageX,y:e.pageY}}}const Vj=e=>n=>Hh(n)&&e(n,$l(n));function _l(e,n,i,a){return Fl(e,n,Vj(i),a)}const Hv=({current:e})=>e?e.ownerDocument.defaultView:null,B0=(e,n)=>Math.abs(e-n);function Pj(e,n){const i=B0(e.x,n.x),a=B0(e.y,n.y);return Math.sqrt(i**2+a**2)}const V0=new Set(["auto","scroll"]);class Fv{constructor(n,i,{transformPagePoint:a,contextWindow:s=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Mo(this.lastRawMoveEventInfo,this.transformPagePoint));const v=ud(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,E=Pj(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!E)return;const{point:M}=v,{timestamp:C}=vt;this.history.push({...M,timestamp:C});const{onStart:O,onMove:A}=this.handlers;w||(O&&O(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,v)},this.handlePointerMove=(v,w)=>{this.lastMoveEvent=v,this.lastRawMoveEventInfo=w,this.lastMoveEventInfo=Mo(w,this.transformPagePoint),qe.update(this.updatePoint,!0)},this.handlePointerUp=(v,w)=>{this.end();const{onEnd:E,onSessionEnd:M,resumeAnimation:C}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=ud(v.type==="pointercancel"?this.lastMoveEventInfo:Mo(w,this.transformPagePoint),this.history);this.startEvent&&E&&E(v,O),M&&M(v,O)},!Hh(n))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=u,this.contextWindow=s||window;const m=$l(n),h=Mo(m,this.transformPagePoint),{point:y}=h,{timestamp:g}=vt;this.history=[{...y,timestamp:g}];const{onSessionStart:b}=i;b&&b(n,ud(h,this.history)),this.removeListeners=Kl(_l(this.contextWindow,"pointermove",this.handlePointerMove),_l(this.contextWindow,"pointerup",this.handlePointerUp),_l(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(n){let i=n.parentElement;for(;i;){const a=getComputedStyle(i);(V0.has(a.overflowX)||V0.has(a.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(n){const i=this.scrollPositions.get(n);if(!i)return;const a=n===window,s=a?{x:window.scrollX,y:window.scrollY}:{x:n.scrollLeft,y:n.scrollTop},c={x:s.x-i.x,y:s.y-i.y};c.x===0&&c.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(n,s),qe.update(this.updatePoint,!0))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ur(this.updatePoint)}}function Mo(e,n){return n?{point:n(e.point)}:e}function P0(e,n){return{x:e.x-n.x,y:e.y-n.y}}function ud({point:e},n){return{point:e,delta:P0(e,qv(n)),offset:P0(e,Uj(n)),velocity:Ij(n,.1)}}function Uj(e){return e[0]}function qv(e){return e[e.length-1]}function Ij(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const s=qv(e);for(;i>=0&&(a=e[i],!(s.timestamp-a.timestamp>Zt(n)));)i--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&s.timestamp-a.timestamp>Zt(n)*2&&(a=e[1]);const c=mn(s.timestamp-a.timestamp);if(c===0)return{x:0,y:0};const u={x:(s.x-a.x)/c,y:(s.y-a.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function Hj(e,{min:n,max:i},a){return n!==void 0&&e<n?e=a?Qe(n,e,a.min):Math.max(e,n):i!==void 0&&e>i&&(e=a?Qe(i,e,a.max):Math.min(e,i)),e}function U0(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function Fj(e,{top:n,left:i,bottom:a,right:s}){return{x:U0(e.x,i,s),y:U0(e.y,n,a)}}function I0(e,n){let i=n.min-e.min,a=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function qj(e,n){return{x:I0(e.x,n.x),y:I0(e.y,n.y)}}function Gj(e,n){let i=.5;const a=Dt(e),s=Dt(n);return s>a?i=Ul(n.min,n.max-a,e.min):a>s&&(i=Ul(e.min,e.max-s,n.min)),Ln(0,1,i)}function Yj(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const th=.35;function Xj(e=th){return e===!1?e=0:e===!0&&(e=th),{x:H0(e,"left","right"),y:H0(e,"top","bottom")}}function H0(e,n,i){return{min:F0(e,n),max:F0(e,i)}}function F0(e,n){return typeof e=="number"?e:e[n]||0}const Jj=new WeakMap;class Qj{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=dt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const c=g=>{i&&this.snapToCursor($l(g).point),this.stopAnimation()},u=(g,b)=>{const{drag:v,dragPropagation:w,onDragStart:E}=this.getProps();if(v&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=SM(v),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rn(C=>{let O=this.getAxisMotionValue(C).get()||0;if(_n.test(O)){const{projection:A}=this.visualElement;if(A&&A.layout){const V=A.layout.layoutBox[C];V&&(O=Dt(V)*(parseFloat(O)/100))}}this.originPoint[C]=O}),E&&qe.update(()=>E(g,b),!1,!0),Yd(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},f=(g,b)=>{this.latestPointerEvent=g,this.latestPanInfo=b;const{dragPropagation:v,dragDirectionLock:w,onDirectionLock:E,onDrag:M}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:C}=b;if(w&&this.currentDirection===null){this.currentDirection=Zj(C),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",b.point,C),this.updateAxis("y",b.point,C),this.visualElement.render(),M&&qe.update(()=>M(g,b),!1,!0)},m=(g,b)=>{this.latestPointerEvent=g,this.latestPanInfo=b,this.stop(g,b),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:g}=this.getProps();(g||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Fv(n,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:m,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:a,contextWindow:Hv(this.visualElement),element:this.visualElement.current})}stop(n,i){const a=n||this.latestPointerEvent,s=i||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!s||!a)return;const{velocity:u}=s;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&qe.postRender(()=>f(a,s))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(n,i,a){const{drag:s}=this.getProps();if(!a||!jo(n,s,this.currentDirection))return;const c=this.getAxisMotionValue(n);let u=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(u=Hj(u,this.constraints[n],this.elastic[n])),c.set(u)}resolveConstraints(){const{dragConstraints:n,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;n&&la(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&a?this.constraints=Fj(a.layoutBox,n):this.constraints=!1,this.elastic=Xj(i),s!==this.constraints&&!la(n)&&a&&this.constraints&&!this.hasMutatedConstraints&&Rn(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=Yj(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!la(n))return!1;const a=n.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const c=KM(a,s.root,this.visualElement.getTransformPagePoint());let u=qj(s.layout.layoutBox,c);if(i){const f=i(XM(u));this.hasMutatedConstraints=!!f,f&&(u=fv(f))}return u}startAnimation(n){const{drag:i,dragMomentum:a,dragElastic:s,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),m=this.constraints||{},h=Rn(y=>{if(!jo(y,i,this.currentDirection))return;let g=m&&m[y]||{};(u===!0||u===y)&&(g={min:0,max:0});const b=s?200:1e6,v=s?40:1e7,w={type:"inertia",velocity:a?n[y]:0,bounceStiffness:b,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...c,...g};return this.startAxisValueAnimation(y,w)});return Promise.all(h).then(f)}startAxisValueAnimation(n,i){const a=this.getAxisMotionValue(n);return Yd(this.visualElement,n),a.start(Bh(n,a,0,i,this.visualElement,!1))}stopAnimation(){Rn(n=>this.getAxisMotionValue(n).stop())}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),s=a[i];return s||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Rn(i=>{const{drag:a}=this.getProps();if(!jo(i,a,this.currentDirection))return;const{projection:s}=this.visualElement,c=this.getAxisMotionValue(i);if(s&&s.layout){const{min:u,max:f}=s.layout.layoutBox[i],m=c.get()||0;c.set(n[i]-Qe(u,f,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!la(i)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Rn(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const m=f.get();s[u]=Gj({min:m,max:m},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),Rn(u=>{if(!jo(u,n,null))return;const f=this.getAxisMotionValue(u),{min:m,max:h}=this.constraints[u];f.set(Qe(m,h,s[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Jj.set(this.visualElement,this);const n=this.visualElement.current,i=_l(n,"pointerdown",h=>{const{drag:y,dragListener:g=!0}=this.getProps(),b=h.target,v=b!==n&&EM(b);y&&g&&!v&&this.start(h)});let a;const s=()=>{const{dragConstraints:h}=this.getProps();la(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),a||(a=Kj(n,h.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,u=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),qe.read(s);const f=Fl(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:y})=>{this.isDragging&&y&&(Rn(g=>{const b=this.getAxisMotionValue(g);b&&(this.originPoint[g]+=h[g].translate,b.set(b.get()+h[g].translate))}),this.visualElement.render())}));return()=>{f(),i(),u(),m&&m(),a&&a()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:c=!1,dragElastic:u=th,dragMomentum:f=!0}=n;return{...n,drag:i,dragDirectionLock:a,dragPropagation:s,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function q0(e){let n=!0;return()=>{if(n){n=!1;return}e()}}function Kj(e,n,i){const a=Zx(e,q0(i)),s=Zx(n,q0(i));return()=>{a(),s()}}function jo(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function Zj(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class Wj extends Ir{constructor(n){super(n),this.removeGroupControls=pn,this.removeListeners=pn,this.controls=new Qj(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pn}update(){const{dragControls:n}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};n!==i&&(this.removeGroupControls(),n&&(this.removeGroupControls=n.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const cd=e=>(n,i)=>{e&&qe.update(()=>e(n,i),!1,!0)};class $j extends Ir{constructor(){super(...arguments),this.removePointerDownListener=pn}onPointerDown(n){this.session=new Fv(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Hv(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:cd(n),onStart:cd(i),onMove:cd(a),onEnd:(c,u)=>{delete this.session,s&&qe.postRender(()=>s(c,u))}}}mount(){this.removePointerDownListener=_l(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let fd=!1;class eD extends j.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a,layoutId:s}=this.props,{projection:c}=n;c&&(i.group&&i.group.add(c),a&&a.register&&s&&a.register(c),fd&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),qo.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:a,drag:s,isPresent:c}=this.props,{projection:u}=a;return u&&(u.isPresent=c,n.layoutDependency!==i&&u.setOptions({...u.options,layoutDependency:i}),fd=!0,s||n.layoutDependency!==i||i===void 0||n.isPresent!==c?u.willUpdate():this.safeToRemove(),n.isPresent!==c&&(c?u.promote():u.relegate()||qe.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:n,layoutAnchor:i}=this.props,{projection:a}=n;a&&(a.options.layoutAnchor=i,a.root.didUpdate(),Ih.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:s}=n;fd=!0,s&&(s.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function Gv(e){const[n,i]=Ov(),a=j.useContext(wh);return x.jsx(eD,{...e,layoutGroup:a,switchLayoutGroup:j.useContext(Uv),isPresent:n,safeToRemove:i})}const tD={pan:{Feature:$j},drag:{Feature:Wj,ProjectionNode:Nv,MeasureLayout:Gv}};function G0(e,n,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const s="onHover"+i,c=a[s];c&&qe.postRender(()=>c(n,$l(n)))}class nD extends Ir{mount(){const{current:n}=this.node;n&&(this.unmount=TM(n,(i,a)=>(G0(this.node,a,"Start"),s=>G0(this.node,s,"End"))))}unmount(){}}class rD extends Ir{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Kl(Fl(this.node.current,"focus",()=>this.onFocus()),Fl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Y0(e,n,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const s="onTap"+(i==="End"?"":i),c=a[s];c&&qe.postRender(()=>c(n,$l(n)))}class iD extends Ir{mount(){const{current:n}=this.node;if(!n)return;const{globalTapTarget:i,propagate:a}=this.node.props;this.unmount=jM(n,(s,c)=>(Y0(this.node,c,"Start"),(u,{success:f})=>Y0(this.node,u,f?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:a?.tap===!1})}unmount(){}}const nh=new WeakMap,dd=new WeakMap,aD=e=>{const n=nh.get(e.target);n&&n(e)},lD=e=>{e.forEach(aD)};function sD({root:e,...n}){const i=e||document;dd.has(i)||dd.set(i,{});const a=dd.get(i),s=JSON.stringify(n);return a[s]||(a[s]=new IntersectionObserver(lD,{root:e,...n})),a[s]}function oD(e,n,i){const a=sD(n);return nh.set(e,i),a.observe(e),()=>{nh.delete(e),a.unobserve(e)}}const uD={some:0,all:1};class cD extends Ir{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:n={}}=this.node.getProps(),{root:i,margin:a,amount:s="some",once:c}=n,u={root:i?i.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:uD[s]},f=m=>{const{isIntersecting:h}=m;if(this.isInView===h||(this.isInView=h,c&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:g}=this.node.getProps(),b=h?y:g;b&&b(m)};this.stopObserver=oD(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(fD(n,i))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function fD({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const dD={inView:{Feature:cD},tap:{Feature:iD},focus:{Feature:rD},hover:{Feature:nD}},hD={layout:{ProjectionNode:Nv,MeasureLayout:Gv}},mD={...Bj,...dD,...tD,...hD},Sn=Nj(mD,Oj),pD={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0,transition:{duration:.2,ease:"easeOut"}}},gD={hidden:{opacity:0,y:32,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",damping:28,stiffness:380,mass:.8}},exit:{opacity:0,y:16,scale:.98,transition:{duration:.18,ease:[.4,0,1,1]}}},yD={visible:{transition:{staggerChildren:.06,delayChildren:.12}}},Lr={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.35,ease:[.22,.61,.36,1]}}},xD=()=>x.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[x.jsx("line",{x1:"4",y1:"4",x2:"12",y2:"12"}),x.jsx("line",{x1:"12",y1:"4",x2:"4",y2:"12"})]}),bD=({project:e,onClose:n})=>{const i=j.useRef(null);return j.useEffect(()=>{i.current?.focus()},[]),j.useEffect(()=>{const a=s=>{s.key==="Escape"&&n()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[n]),j.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),x.jsxs("div",{className:"fixed inset-0 z-9999 flex items-center justify-center px-4",children:[x.jsx(Sn.div,{className:"absolute inset-0 bg-(--modal-backdrop) backdrop-blur-xl [-webkit-backdrop-filter:blur(24px)_saturate(1.4)]",variants:pD,initial:"hidden",animate:"visible",exit:"exit",onClick:n,"aria-label":"Close project detail"}),x.jsx(Sn.div,{ref:i,tabIndex:-1,role:"dialog","aria-modal":"true","aria-label":e.title,className:"relative z-50 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl outline-none bg-(--bg-elevated) border border-(--border-subtle) shadow-(--modal-shadow) [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:rounded-r-2xl [&::-webkit-scrollbar-track]:my-2 [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-(--bg-elevated) [&::-webkit-scrollbar-thumb:hover]:bg-gray-300",variants:gD,initial:"hidden",animate:"visible",exit:"exit",children:x.jsxs(Sn.div,{className:"p-6 md:p-8",variants:yD,initial:"hidden",animate:"visible",children:[x.jsxs(Sn.div,{className:"flex justify-between items-start mb-6",variants:Lr,children:[x.jsxs("div",{children:[x.jsx("h3",{className:"text-2xl font-bold mb-1",children:e.title}),e.subtitle&&x.jsx("p",{className:"text-sm text-fg-muted",children:e.subtitle})]}),x.jsx("button",{onClick:n,"aria-label":"모달 닫기",className:"relative p-2 rounded-full cursor-pointer text-fg-muted transition-all duration-250 ease-out hover:text-fg hover:bg-(--bg-soft) hover:scale-110 active:scale-95 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:transition-all before:duration-300 hover:before:border-(--border-hover) hover:before:scale-110 before:scale-75 before:opacity-0 hover:before:opacity-100",children:x.jsx(xD,{})})]}),x.jsxs(Sn.div,{className:"flex flex-wrap gap-4 text-xs text-fg-muted mb-8 p-4 bg-(--bg-soft) rounded-xl",variants:Lr,children:[e.period&&x.jsxs("div",{children:["📅 ",e.period]}),e.team&&x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"w-px h-3 bg-(--border-subtle) self-center"}),x.jsxs("div",{children:["👥 ",e.team]})]})]}),x.jsxs("div",{className:"space-y-10 text-sm leading-relaxed text-fg-muted",children:[x.jsxs(Sn.section,{variants:Lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"🔎 프로젝트 개요"}),x.jsx("p",{children:e.overview})]}),e.images&&e.images.length>0&&x.jsxs(Sn.section,{variants:Lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"📸 Screen & Architecture"}),x.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:e.images.map((a,s)=>x.jsxs("div",{className:"space-y-2",children:[x.jsx("div",{className:"rounded-lg overflow-hidden border border-(--border-subtle) bg-(--bg) aspect-video relative",children:x.jsx("img",{src:a.src,alt:a.caption,className:"object-cover w-full h-full"})}),a.caption&&x.jsx("p",{className:"text-xs text-center text-fg-muted",children:a.caption})]},s))})]}),e.why&&x.jsxs(Sn.section,{variants:Lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"💡 기술적 의사결정 (Why?)"}),x.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:e.why.map((a,s)=>x.jsxs("div",{className:"p-4 rounded-xl border border-(--border-subtle) bg-(--bg)",children:[x.jsx("div",{className:"font-medium text-fg mb-2",children:a.title}),x.jsx("p",{className:"text-xs",children:a.desc})]},s))})]}),e.role&&x.jsxs(Sn.section,{variants:Lr,children:[x.jsxs("h4",{className:"text-fg font-semibold text-base mb-3",children:["👩🏻‍💻 수행 역할 ( 기여도 ",e.role.percentage," )"]}),x.jsx("ul",{className:"list-disc pl-5 space-y-2",children:e.role.tasks.map((a,s)=>x.jsx("li",{children:a},s))})]}),e.troubleshooting&&x.jsxs(Sn.section,{variants:Lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"🚨 트러블 슈팅"}),x.jsx("div",{className:"space-y-4",children:e.troubleshooting.map((a,s)=>x.jsxs("div",{className:"p-4 rounded-xl bg-[rgba(255,100,100,0.05)] border border-[rgba(255,100,100,0.1)]",children:[x.jsx("div",{className:"font-semibold text-fg mb-2",children:a.title}),x.jsxs("div",{className:"grid gap-2 text-xs",children:[x.jsxs("div",{children:[x.jsx("span",{className:"font-medium text-(--fg)",children:"문제:"})," ",a.problem]}),x.jsxs("div",{children:[x.jsx("span",{className:"font-medium text-(--fg)",children:"원인:"})," ",a.cause]}),x.jsxs("div",{children:[x.jsx("span",{className:"font-medium text-(--fg)",children:"해결:"})," ",a.solution]}),x.jsxs("div",{children:[x.jsx("span",{className:"font-medium text-(--fg)",children:"배움:"})," ",a.learning]})]})]},s))})]}),e.results&&x.jsxs(Sn.section,{variants:Lr,children:[x.jsx("h4",{className:"text-fg font-semibold text-base mb-3",children:"✨ 성과"}),x.jsx("ul",{className:"space-y-2",children:e.results.map((a,s)=>x.jsxs("li",{className:"flex gap-2 items-center",children:[x.jsx("span",{className:"text-yellow-500",children:"🏆"}),x.jsx("span",{children:a})]},s))})]})]})]})})]})},hd=3e3,vD=Object.assign({"./data/LLM/LLM(LSTM-BERT).tsx":eA,"./data/Mogang/mogangData.tsx":rA,"./data/P2P/P2PService.tsx":lA,"./data/Secure-Chat/Secure-chat.tsx":uA,"./data/Ssang-sang/ssang-sangData.tsx":dA,"./data/Vary-Recycle/varyRecycle.tsx":pA}),fn=Object.values(vD).map(e=>e.default??Object.values(e)[0]),SD=()=>{const[e,n]=j.useState(0),[i,a]=j.useState(!1),[s,c]=j.useState(!1),[u,f]=j.useState(null),m=Yo.useRef(0),h=Yo.useRef(0);j.useEffect(()=>{if(i||u)return;const L=setInterval(()=>{n(G=>(G+1)%fn.length)},hd);return()=>clearInterval(L)},[i,u]);const[y]=j.useState(()=>fn.map(()=>({jitterX:Math.random()*20-15,jitterY:Math.random()*30-15,baseRotate:Math.random()*16-10}))),[g,b]=j.useState(null);j.useEffect(()=>{if(typeof window>"u")return;const L=()=>{const G=window.innerWidth,Q=G<768;console.log("Projects resize:",{width:G,mobile:Q}),b(G),c(Q)};return L(),window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]);const v=fn.find(L=>L.id===u)||null,w=L=>{f(L)},E=()=>{f(null)},C=(()=>{if(!g)return 140;const L=g/(fn.length+1);return Math.min(180,Math.max(70,L*.8))})(),O=(fn.length-1)/2,A=L=>{m.current=L.touches[0].clientX},V=L=>{h.current=L.touches[0].clientX},Y=()=>{if(!m.current||!h.current)return;const L=m.current-h.current;Math.abs(L)>50&&(L>0?n(Q=>(Q+1)%fn.length):n(Q=>(Q-1+fn.length)%fn.length)),m.current=0,h.current=0};return x.jsxs(x.Fragment,{children:[x.jsxs("section",{id:"projects",className:"mb-20",children:[x.jsxs("div",{className:ya,children:[x.jsxs("div",{children:[x.jsx("p",{className:xa,children:"Projects"}),x.jsx("h2",{className:ba,children:"주요 프로젝트"})]}),x.jsx("p",{className:du,children:"아래 포인트나 카드를 클릭하면 상세 모달을 볼 수 있습니다."})]}),s?x.jsxs("div",{className:"flex flex-col gap-6",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[x.jsx("div",{className:"w-full overflow-hidden",onTouchStart:A,onTouchMove:V,onTouchEnd:Y,children:x.jsx("div",{className:"flex w-full transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform",style:{transform:`translate3d(-${e*100}%, 0, 0)`},children:fn.map(L=>x.jsx("div",{className:"w-full shrink-0 flex justify-center px-3",children:x.jsxs("article",{"data-project-id":L.id,className:"w-full max-w-3xl min-h-80 flex flex-col rounded-2xl bg-(--bg-elevated) [html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)] [html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-(--border-subtle) cursor-pointer overflow-hidden",onClick:()=>w(L.id),children:[L.banner&&x.jsxs("div",{className:"relative w-full h-32 shrink-0 overflow-hidden",children:[x.jsx("img",{src:L.banner,alt:"",className:"w-full h-full object-cover grayscale-30"}),x.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.6)] to-transparent"})]}),x.jsxs("div",{className:"relative flex flex-col flex-1 justify-between z-10 p-4 text-[13px] text-fg-muted leading-[1.6]",children:[x.jsxs("div",{children:[x.jsx("h3",{className:"mb-1.5 text-fg text-[15px] font-semibold tracking-[0.02em]",children:L.title}),x.jsx("p",{className:"text-[12px] mb-2.5 line-clamp-2 text-fg opacity-100",children:L.summary}),x.jsx("div",{className:"flex flex-wrap gap-1.5",children:L.tags.slice(0,6).map(G=>x.jsx("span",{className:Qo,children:G},G))})]}),x.jsx("div",{className:"flex gap-3 text-[11px]  mt-3",children:L.links.map(G=>x.jsxs("a",{href:G.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-fg-muted hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out",onClick:Q=>Q.stopPropagation(),children:[x.jsx("span",{children:G.label}),x.jsx("span",{children:"↗"})]},G.label))})]})]})},L.id))})}),x.jsxs("div",{className:"relative mt-2 flex justify-center w-full px-3 overflow-visible min-h-[60px]",children:[x.jsx("div",{className:"h-px w-full max-w-3xl bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between max-w-3xl mx-auto px-4 sm:px-6",children:fn.map((L,G)=>{const Q=G===e;return x.jsxs("button",{type:"button",className:"relative flex flex-col items-center outline-none cursor-pointer shrink-0",onMouseEnter:()=>n(G),onClick:()=>n(G),"aria-label":`${L.title}로 이동`,children:[x.jsx("span",{className:["mb-1 h-[3px] w-5 sm:w-7 rounded-full","bg-(--border-subtle)",Q?"animate-border-pulse":"opacity-40"].join(" ")}),x.jsx(Ko,{isActive:Q,isPaused:i,duration:hd,size:16,strokeWidth:2}),x.jsx("span",{className:"mt-1 text-[9px] sm:text-[10px] text-fg-muted max-w-[60px] sm:max-w-20 text-center line-clamp-2",children:L.subTitle})]},L.id)})})]})]}):x.jsxs("div",{className:"relative flex flex-col items-center",children:[x.jsx("div",{className:"relative w-full max-w-5xl h-[260px] flex items-center justify-center mb-10 overflow-visible",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:fn.map((L,G)=>{const Q=y[G],F=G===e,$=(G-O)*C+Q.jitterX,te=Q.jitterY,ge=Math.round($),le=Math.round(te+(F?-10:6)),ne=F?`translateX(${ge}px) translateY(${le}px) scale(1.05)`:`translateX(${ge}px) translateY(${le}px) rotate(${Q.baseRotate}deg) scale(0.96)`,P=F?999:100+G,ee=F?1:.8,ae=F?"none":"blur(0.8px)";return x.jsxs("article",{"data-project-id":L.id,className:["group absolute w-full","max-w-[260px] sm:max-w-[300px] lg:max-w-[320px]","rounded-2xl bg-(--bg-elevated)","[html[data-theme='light']_&]:shadow-[0_1px_3px_rgba(0,0,0,0.04)]","[html[data-theme='light']_&]:hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]","border border-(--border-subtle)","cursor-pointer overflow-hidden","transition-all duration-300 ease-out",F?["ring-2 ring-(--accent)","ring-offset-2","ring-offset-(--bg-soft)"].join(" "):"ring-0"].join(" "),style:{zIndex:P,transform:ne,opacity:ee,filter:ae},onClick:()=>w(L.id),onMouseEnter:()=>n(G),onFocus:()=>n(G),tabIndex:0,onKeyDown:ce=>{(ce.key==="Enter"||ce.key===" ")&&(ce.preventDefault(),w(L.id))},role:"button",children:[L.banner&&x.jsxs("div",{className:["absolute inset-0 z-0 pointer-events-none","transition-all duration-200",F?"opacity-20":"opacity-40"].join(" "),children:[x.jsx("img",{src:L.banner,alt:"",className:"w-full h-full object-cover grayscale-30"}),x.jsx("div",{className:["absolute inset-0 bg-linear-to-t to-transparent transition-colors duration-200",F?"from-[rgba(0,0,0,0.6)] [html[data-theme='light']_&]:from-[rgba(0,0,0,0.52)]":"from-[rgba(0,0,0,0.35)] [html[data-theme='light']_&]:from-[rgba(0,0,0,0.3)]"].join(" ")})]}),x.jsxs("div",{className:"relative z-10 p-4 text-[13px] text-fg-muted leading-[1.6]",children:[x.jsx("h3",{className:["mb-1.5","text-fg","transition-all duration-200",F?"text-[15px] font-semibold tracking-[0.02em]":"text-[14px] font-medium tracking-[0.01em]"].join(" "),children:L.title}),x.jsx("p",{className:["transition-all duration-200","text-[12px] mb-2.5 line-clamp-2",F?"text-fg opacity-100":"text-fg-muted opacity-80"].join(" "),children:L.summary}),x.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2.5",children:L.tags.slice(0,6).map(ce=>x.jsx("span",{className:Qo,children:ce},ce))}),x.jsx("div",{className:"flex gap-3 text-[11px] mt-1",children:L.links.map(ce=>x.jsxs("a",{href:ce.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-fg-muted hover:text-fg hover:-translate-y-px transition-all duration-150 ease-out",onClick:D=>D.stopPropagation(),children:[x.jsx("span",{children:ce.label}),x.jsx("span",{children:"↗"})]},ce.label))})]})]},L.id)})}),x.jsxs("div",{className:"relative w-full max-w-3xl",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[x.jsx("div",{className:"h-px w-full bg-(--border-subtle) opacity-70"}),x.jsx("div",{className:"absolute inset-x-0 -top-2 flex justify-between",children:fn.map((L,G)=>{const Q=G===e,F=()=>{n(G),w(L.id)};return x.jsxs("button",{type:"button",className:"relative flex flex-col cursor-pointer items-center outline-none",onMouseEnter:()=>n(G),onFocus:()=>n(G),onClick:F,onKeyDown:N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),F())},children:[x.jsx("span",{className:["mb-1 h-[3px] w-7 rounded-full","bg-(--border-subtle)",Q?"animate-border-pulse":"opacity-40"].join(" ")}),x.jsx(Ko,{isActive:Q,isPaused:i,duration:hd,size:16,strokeWidth:2}),x.jsx("span",{className:"mt-1 text-[10px] text-fg-muted max-w-20 text-center line-clamp-2",children:L.subTitle})]},L.id)})})]})]})]}),x.jsx(sj,{children:v&&x.jsx(bD,{project:v,onClose:E},v.id)})]})},wD=()=>{const e=j.useCallback(n=>{const i=document.getElementById(n);if(i){const u=i.getBoundingClientRect().top+window.pageYOffset-64-20;window.scrollTo({top:u,behavior:"smooth"})}},[]);return x.jsxs("main",{className:"max-w-(--content-max-w) mx-auto px-5 pt-[calc(var(--header-height)+40px)] pb-20 text-[14px] text-fg leading-[1.6]",children:[x.jsx(ek,{onScrollTo:e}),x.jsx(nk,{}),x.jsx(mk,{}),x.jsx(Zk,{}),x.jsx(SD,{}),x.jsx(_k,{}),x.jsx(Nk,{})]})},TD=4200,X0=260;function Tl(...e){return e.filter(Boolean).join(" ")}const CD=()=>{const e=Jl(),n=j.useMemo(()=>{const F=new Map;for(const N of dn)for(const $ of N.tags)F.set($,(F.get($)??0)+1);return Array.from(F.entries()).sort((N,$)=>$[1]-N[1]).slice(0,12)},[]),[i,a]=j.useState("ALL"),s=j.useMemo(()=>dn.slice(0,Math.min(3,dn.length)),[]),[c,u]=j.useState(0),[f,m]=j.useState(!1);j.useEffect(()=>{if(s.length<=1)return;const F=()=>{m(!0),window.setTimeout(()=>{u($=>($+1)%s.length),window.setTimeout(()=>m(!1),20)},X0)},N=window.setInterval(F,TD);return()=>window.clearInterval(N)},[s.length]);const h=s[c],y=j.useMemo(()=>i==="ALL"?dn:dn.filter(F=>F.tags.includes(i)),[i]),g=j.useMemo(()=>y,[y]),b=10,[v,w]=j.useState(b),[E,M]=j.useState(!1),[C,O]=j.useState(!1),A=j.useMemo(()=>g.slice(0,v),[g,v]),V=v<g.length,Y=F=>{F!==i&&(O(!0),setTimeout(()=>{a(F),w(b),M(!1),setTimeout(()=>O(!1),20)},200))},L=j.useCallback(async()=>{!V||E||(M(!0),await new Promise(F=>setTimeout(F,450)),w(F=>Math.min(F+b,g.length)),M(!1))},[V,E,g.length]),G=j.useRef(null);j.useEffect(()=>{const F=G.current;if(!F)return;const N=new IntersectionObserver($=>{$[0]?.isIntersecting&&L()},{root:null,rootMargin:"800px 0px",threshold:0});return N.observe(F),()=>N.disconnect()},[L]);const Q=F=>{e(`/blog/${F.slug}`)};return x.jsx("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base)",children:x.jsxs("div",{className:"max-w-[1100px] mx-auto px-5 pt-[calc(var(--header-height)+32px)] pb-16",children:[x.jsx("div",{className:"flex items-end justify-between gap-4 mb-6",children:x.jsxs("div",{children:[x.jsx("h1",{className:"text-[32px] font-bold tracking-[-0.02em]",children:"Posting"}),x.jsx("p",{className:"text-[13px] text-fg-muted mt-2",children:"Front-End를 공부하며 배운 알뜰신잡"})]})}),h&&x.jsx("section",{className:"mb-10",children:x.jsx("article",{role:"button",tabIndex:0,onClick:()=>Q(h),onKeyDown:F=>{(F.key==="Enter"||F.key===" ")&&Q(h)},className:Tl("group relative overflow-hidden rounded-3xl border bg-(--bg-elevated) border-(--border-subtle)","cursor-pointer transition-all duration-300 hover:border-(--accent)","focus:outline-none focus:ring-2 focus:ring-(--accent)/40",f?"opacity-0":"opacity-100","transition-opacity"),style:{transitionDuration:`${X0}ms`},children:x.jsxs("div",{className:"grid md:grid-cols-[320px_1fr]",children:[x.jsxs("div",{className:"relative h-[250px] md:h-[250px] bg-(--bg-soft)",children:[h.cover?x.jsxs(x.Fragment,{children:[x.jsx("img",{src:h.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),x.jsx("div",{className:"absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent"})]}):x.jsx("div",{className:"absolute inset-0 bg-(--bg-soft)"}),x.jsx("div",{className:"absolute left-5 top-5",children:x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-black/45 border border-white/10 text-white/90",children:"Today's"})})]}),x.jsxs("div",{className:"p-5 h-full flex flex-col justify-between",children:[x.jsx("h2",{className:"text-[22px] md:text-[24px] font-bold leading-snug tracking-[-0.02em] mb-3 line-clamp-1",children:h.title}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-5 line-clamp-2",children:h.excerpt}),x.jsxs("div",{className:"flex flex-col text-[12px] text-fg-muted w-full",children:[x.jsx("div",{className:"flex flex-wrap gap-2 mb-4 overflow-hidden max-h-8",children:h.tags.slice(0,6).map(F=>x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-(--accent)",children:F},F))}),x.jsx("span",{children:h.date})]})]})]})})}),x.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",children:[x.jsxs("button",{type:"button",onClick:()=>Y("ALL"),className:Tl("text-[12px] px-3 py-1.5 rounded-full border transition-colors",i==="ALL"?"bg-(--bg-elevated) border-(--accent) text-(--fg-base)":"bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"),children:["전체보기 (",dn.length,")"]}),n.map(([F,N])=>x.jsxs("button",{type:"button",onClick:()=>Y(F),className:Tl("text-[12px] px-3 py-1.5 rounded-full border transition-colors",i===F?"bg-(--bg-elevated) border-(--accent) text-(--fg-base)":"bg-(--bg-soft) border-(--border-subtle) text-fg-muted hover:border-(--accent)"),children:[F," (",N,")"]},F))]}),x.jsxs("section",{className:Tl("grid gap-6 transition-opacity duration-200",C?"opacity-0":"opacity-100"),children:[A.map(F=>x.jsx("article",{onClick:()=>Q(F),role:"button",tabIndex:0,onKeyDown:N=>{(N.key==="Enter"||N.key===" ")&&Q(F)},className:Tl("group overflow-hidden rounded-2xl border bg-(--bg-elevated) border-(--border-subtle)","cursor-pointer transition-colors hover:border-(--accent)","focus:outline-none focus:ring-2 focus:ring-(--accent)/40"),children:x.jsxs("div",{className:"grid md:grid-cols-[240px_1fr] md:h-60",children:[F.cover&&x.jsxs("div",{className:"relative h-[180px] md:h-60 bg-(--bg-soft)",children:[x.jsx("img",{src:F.cover,alt:"",className:"absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity",loading:"lazy"}),x.jsx("div",{className:"absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/55 via-black/15 to-transparent"})]}),x.jsxs("div",{className:"p-6 md:overflow-hidden flex flex-col h-full",children:[x.jsx("h3",{className:"text-[20px] font-semibold leading-snug mb-2 line-clamp-1",children:F.title}),x.jsx("p",{className:"text-[13px] text-fg-muted leading-relaxed mb-4 line-clamp-2 shrink-0",children:F.excerpt}),x.jsx("div",{className:"flex flex-wrap gap-2 mb-4 overflow-hidden max-h-14",children:F.tags.slice(0,8).map(N=>x.jsx("span",{className:"text-[11px] px-2.5 py-1.5 rounded-full bg-(--bg-soft) border border-(--border-subtle) text-(--accent)",children:N},N))}),x.jsx("div",{className:"flex items-center justify-between text-[12px] text-fg-muted mt-auto",children:x.jsx("span",{children:F.date})})]})]})},F.id)),x.jsx("div",{ref:G,className:"h-10"}),E&&x.jsx("div",{className:"py-6 text-center text-[13px] text-fg-muted",children:"불러오는 중..."}),!V&&x.jsx("div",{className:"py-10 text-center text-[13px] text-fg-muted",children:"더 이상 글이 없습니다."})]})]})})};function kD(e,n){const i={};return(e[e.length-1]===""?[...e,""]:e).join((i.padRight?" ":"")+","+(i.padLeft===!1?"":" ")).trim()}const AD=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ED=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,MD={};function J0(e,n){return(MD.jsx?ED:AD).test(e)}const jD=/[ \t\n\f\r]/g;function DD(e){return typeof e=="object"?e.type==="text"?Q0(e.value):!1:Q0(e)}function Q0(e){return e.replace(jD,"")===""}class es{constructor(n,i,a){this.normal=i,this.property=n,a&&(this.space=a)}}es.prototype.normal={};es.prototype.property={};es.prototype.space=void 0;function Yv(e,n){const i={},a={};for(const s of e)Object.assign(i,s.property),Object.assign(a,s.normal);return new es(i,a,n)}function rh(e){return e.toLowerCase()}class Ut{constructor(n,i){this.attribute=i,this.property=n}}Ut.prototype.attribute="";Ut.prototype.booleanish=!1;Ut.prototype.boolean=!1;Ut.prototype.commaOrSpaceSeparated=!1;Ut.prototype.commaSeparated=!1;Ut.prototype.defined=!1;Ut.prototype.mustUseProperty=!1;Ut.prototype.number=!1;Ut.prototype.overloadedBoolean=!1;Ut.prototype.property="";Ut.prototype.spaceSeparated=!1;Ut.prototype.space=void 0;let RD=0;const we=pi(),ot=pi(),ih=pi(),re=pi(),Ye=pi(),fa=pi(),Kt=pi();function pi(){return 2**++RD}const ah=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:ot,commaOrSpaceSeparated:Kt,commaSeparated:fa,number:re,overloadedBoolean:ih,spaceSeparated:Ye},Symbol.toStringTag,{value:"Module"})),md=Object.keys(ah);class Zh extends Ut{constructor(n,i,a,s){let c=-1;if(super(n,i),K0(this,"space",s),typeof a=="number")for(;++c<md.length;){const u=md[c];K0(this,md[c],(a&ah[u])===ah[u])}}}Zh.prototype.defined=!0;function K0(e,n,i){i&&(e[n]=i)}function Ta(e){const n={},i={};for(const[a,s]of Object.entries(e.properties)){const c=new Zh(a,e.transform(e.attributes||{},a),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(c.mustUseProperty=!0),n[a]=c,i[rh(a)]=a,i[rh(c.attribute)]=a}return new es(n,i,e.space)}const Xv=Ta({properties:{ariaActiveDescendant:null,ariaAtomic:ot,ariaAutoComplete:null,ariaBusy:ot,ariaChecked:ot,ariaColCount:re,ariaColIndex:re,ariaColSpan:re,ariaControls:Ye,ariaCurrent:null,ariaDescribedBy:Ye,ariaDetails:null,ariaDisabled:ot,ariaDropEffect:Ye,ariaErrorMessage:null,ariaExpanded:ot,ariaFlowTo:Ye,ariaGrabbed:ot,ariaHasPopup:null,ariaHidden:ot,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ye,ariaLevel:re,ariaLive:null,ariaModal:ot,ariaMultiLine:ot,ariaMultiSelectable:ot,ariaOrientation:null,ariaOwns:Ye,ariaPlaceholder:null,ariaPosInSet:re,ariaPressed:ot,ariaReadOnly:ot,ariaRelevant:null,ariaRequired:ot,ariaRoleDescription:Ye,ariaRowCount:re,ariaRowIndex:re,ariaRowSpan:re,ariaSelected:ot,ariaSetSize:re,ariaSort:null,ariaValueMax:re,ariaValueMin:re,ariaValueNow:re,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Jv(e,n){return n in e?e[n]:n}function Qv(e,n){return Jv(e,n.toLowerCase())}const ND=Ta({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:fa,acceptCharset:Ye,accessKey:Ye,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Ye,autoFocus:we,autoPlay:we,blocking:Ye,capture:null,charSet:null,checked:we,cite:null,className:Ye,cols:re,colSpan:null,content:null,contentEditable:ot,controls:we,controlsList:Ye,coords:re|fa,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:ih,draggable:ot,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Ye,height:re,hidden:ih,high:re,href:null,hrefLang:null,htmlFor:Ye,httpEquiv:Ye,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Ye,itemRef:Ye,itemScope:we,itemType:Ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:re,manifest:null,max:null,maxLength:re,media:null,method:null,min:null,minLength:re,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:re,pattern:null,ping:Ye,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Ye,required:we,reversed:we,rows:re,rowSpan:re,sandbox:Ye,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:re,sizes:null,slot:null,span:re,spellCheck:ot,src:null,srcDoc:null,srcLang:null,srcSet:null,start:re,step:null,style:null,tabIndex:re,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:ot,width:re,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ye,axis:null,background:null,bgColor:null,border:re,borderColor:null,bottomMargin:re,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:re,leftMargin:re,link:null,longDesc:null,lowSrc:null,marginHeight:re,marginWidth:re,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:re,rules:null,scheme:null,scrolling:ot,standby:null,summary:null,text:null,topMargin:re,valueType:null,version:null,vAlign:null,vLink:null,vSpace:re,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:re,security:null,unselectable:null},space:"html",transform:Qv}),OD=Ta({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Kt,accentHeight:re,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:re,amplitude:re,arabicForm:null,ascent:re,attributeName:null,attributeType:null,azimuth:re,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:re,by:null,calcMode:null,capHeight:re,className:Ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:re,diffuseConstant:re,direction:null,display:null,dur:null,divisor:re,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:re,enableBackground:null,end:null,event:null,exponent:re,externalResourcesRequired:null,fill:null,fillOpacity:re,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:fa,g2:fa,glyphName:fa,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:re,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:re,horizOriginX:re,horizOriginY:re,id:null,ideographic:re,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:re,k:re,k1:re,k2:re,k3:re,k4:re,kernelMatrix:Kt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:re,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:re,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:re,overlineThickness:re,paintOrder:null,panose1:null,path:null,pathLength:re,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:re,pointsAtY:re,pointsAtZ:re,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Kt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Kt,rev:Kt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Kt,requiredFeatures:Kt,requiredFonts:Kt,requiredFormats:Kt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:re,specularExponent:re,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:re,strikethroughThickness:re,string:null,stroke:null,strokeDashArray:Kt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:re,strokeOpacity:re,strokeWidth:null,style:null,surfaceScale:re,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Kt,tabIndex:re,tableValues:null,target:null,targetX:re,targetY:re,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Kt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:re,underlineThickness:re,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:re,values:null,vAlphabetic:re,vMathematical:re,vectorEffect:null,vHanging:re,vIdeographic:re,version:null,vertAdvY:re,vertOriginX:re,vertOriginY:re,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:re,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Jv}),Kv=Ta({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Zv=Ta({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Qv}),Wv=Ta({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),_D={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},LD=/[A-Z]/g,Z0=/-[a-z]/g,zD=/^data[-\w.:]+$/i;function BD(e,n){const i=rh(n);let a=n,s=Ut;if(i in e.normal)return e.property[e.normal[i]];if(i.length>4&&i.slice(0,4)==="data"&&zD.test(n)){if(n.charAt(4)==="-"){const c=n.slice(5).replace(Z0,PD);a="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=n.slice(4);if(!Z0.test(c)){let u=c.replace(LD,VD);u.charAt(0)!=="-"&&(u="-"+u),n="data"+u}}s=Zh}return new s(a,n)}function VD(e){return"-"+e.toLowerCase()}function PD(e){return e.charAt(1).toUpperCase()}const UD=Yv([Xv,ND,Kv,Zv,Wv],"html"),Wh=Yv([Xv,OD,Kv,Zv,Wv],"svg");function ID(e){return e.join(" ").trim()}var ia={},pd,W0;function HD(){if(W0)return pd;W0=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,f=/^\s+|\s+$/g,m=`
`,h="/",y="*",g="",b="comment",v="declaration";function w(M,C){if(typeof M!="string")throw new TypeError("First argument must be a string");if(!M)return[];C=C||{};var O=1,A=1;function V(le){var ne=le.match(n);ne&&(O+=ne.length);var P=le.lastIndexOf(m);A=~P?le.length-P:A+le.length}function Y(){var le={line:O,column:A};return function(ne){return ne.position=new L(le),F(),ne}}function L(le){this.start=le,this.end={line:O,column:A},this.source=C.source}L.prototype.content=M;function G(le){var ne=new Error(C.source+":"+O+":"+A+": "+le);if(ne.reason=le,ne.filename=C.source,ne.line=O,ne.column=A,ne.source=M,!C.silent)throw ne}function Q(le){var ne=le.exec(M);if(ne){var P=ne[0];return V(P),M=M.slice(P.length),ne}}function F(){Q(i)}function N(le){var ne;for(le=le||[];ne=$();)ne!==!1&&le.push(ne);return le}function $(){var le=Y();if(!(h!=M.charAt(0)||y!=M.charAt(1))){for(var ne=2;g!=M.charAt(ne)&&(y!=M.charAt(ne)||h!=M.charAt(ne+1));)++ne;if(ne+=2,g===M.charAt(ne-1))return G("End of comment missing");var P=M.slice(2,ne-2);return A+=2,V(P),M=M.slice(ne),A+=2,le({type:b,comment:P})}}function te(){var le=Y(),ne=Q(a);if(ne){if($(),!Q(s))return G("property missing ':'");var P=Q(c),ee=le({type:v,property:E(ne[0].replace(e,g)),value:P?E(P[0].replace(e,g)):g});return Q(u),ee}}function ge(){var le=[];N(le);for(var ne;ne=te();)ne!==!1&&(le.push(ne),N(le));return le}return F(),ge()}function E(M){return M?M.replace(f,g):g}return pd=w,pd}var $0;function FD(){if($0)return ia;$0=1;var e=ia&&ia.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ia,"__esModule",{value:!0}),ia.default=i;const n=e(HD());function i(a,s){let c=null;if(!a||typeof a!="string")return c;const u=(0,n.default)(a),f=typeof s=="function";return u.forEach(m=>{if(m.type!=="declaration")return;const{property:h,value:y}=m;f?s(h,y,m):y&&(c=c||{},c[h]=y)}),c}return ia}var Cl={},eb;function qD(){if(eb)return Cl;eb=1,Object.defineProperty(Cl,"__esModule",{value:!0}),Cl.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,i=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,c=function(h){return!h||i.test(h)||e.test(h)},u=function(h,y){return y.toUpperCase()},f=function(h,y){return"".concat(y,"-")},m=function(h,y){return y===void 0&&(y={}),c(h)?h:(h=h.toLowerCase(),y.reactCompat?h=h.replace(s,f):h=h.replace(a,f),h.replace(n,u))};return Cl.camelCase=m,Cl}var kl,tb;function GD(){if(tb)return kl;tb=1;var e=kl&&kl.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},n=e(FD()),i=qD();function a(s,c){var u={};return!s||typeof s!="string"||(0,n.default)(s,function(f,m){f&&m&&(u[(0,i.camelCase)(f,c)]=m)}),u}return a.default=a,kl=a,kl}var YD=GD();const XD=ph(YD),$v=eS("end"),$h=eS("start");function eS(e){return n;function n(i){const a=i&&i.position&&i.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function JD(e){const n=$h(e),i=$v(e);if(n&&i)return{start:n,end:i}}function Ll(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?nb(e.position):"start"in e||"end"in e?nb(e):"line"in e||"column"in e?lh(e):""}function lh(e){return rb(e&&e.line)+":"+rb(e&&e.column)}function nb(e){return lh(e&&e.start)+"-"+lh(e&&e.end)}function rb(e){return e&&typeof e=="number"?e:1}class Ct extends Error{constructor(n,i,a){super(),typeof i=="string"&&(a=i,i=void 0);let s="",c={},u=!1;if(i&&("line"in i&&"column"in i?c={place:i}:"start"in i&&"end"in i?c={place:i}:"type"in i?c={ancestors:[i],place:i.position}:c={...i}),typeof n=="string"?s=n:!c.cause&&n&&(u=!0,s=n.message,c.cause=n),!c.ruleId&&!c.source&&typeof a=="string"){const m=a.indexOf(":");m===-1?c.ruleId=a:(c.source=a.slice(0,m),c.ruleId=a.slice(m+1))}if(!c.place&&c.ancestors&&c.ancestors){const m=c.ancestors[c.ancestors.length-1];m&&(c.place=m.position)}const f=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=f?f.line:void 0,this.name=Ll(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=u&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ct.prototype.file="";Ct.prototype.name="";Ct.prototype.reason="";Ct.prototype.message="";Ct.prototype.stack="";Ct.prototype.column=void 0;Ct.prototype.line=void 0;Ct.prototype.ancestors=void 0;Ct.prototype.cause=void 0;Ct.prototype.fatal=void 0;Ct.prototype.place=void 0;Ct.prototype.ruleId=void 0;Ct.prototype.source=void 0;const em={}.hasOwnProperty,QD=new Map,KD=/[A-Z]/g,ZD=new Set(["table","tbody","thead","tfoot","tr"]),WD=new Set(["td","th"]),tS="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function $D(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const i=n.filePath||void 0;let a;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=sR(i,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=lR(i,n.jsx,n.jsxs)}const s={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:a,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:i,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Wh:UD,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},c=nS(s,e,void 0);return c&&typeof c!="string"?c:s.create(e,s.Fragment,{children:c||void 0},void 0)}function nS(e,n,i){if(n.type==="element")return eR(e,n,i);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return tR(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return rR(e,n,i);if(n.type==="mdxjsEsm")return nR(e,n);if(n.type==="root")return iR(e,n,i);if(n.type==="text")return aR(e,n)}function eR(e,n,i){const a=e.schema;let s=a;n.tagName.toLowerCase()==="svg"&&a.space==="html"&&(s=Wh,e.schema=s),e.ancestors.push(n);const c=iS(e,n.tagName,!1),u=oR(e,n);let f=nm(e,n);return ZD.has(n.tagName)&&(f=f.filter(function(m){return typeof m=="string"?!DD(m):!0})),rS(e,u,c,n),tm(u,f),e.ancestors.pop(),e.schema=a,e.create(n,c,u,i)}function tR(e,n){if(n.data&&n.data.estree&&e.evaluater){const a=n.data.estree.body[0];return a.type,e.evaluater.evaluateExpression(a.expression)}ql(e,n.position)}function nR(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);ql(e,n.position)}function rR(e,n,i){const a=e.schema;let s=a;n.name==="svg"&&a.space==="html"&&(s=Wh,e.schema=s),e.ancestors.push(n);const c=n.name===null?e.Fragment:iS(e,n.name,!0),u=uR(e,n),f=nm(e,n);return rS(e,u,c,n),tm(u,f),e.ancestors.pop(),e.schema=a,e.create(n,c,u,i)}function iR(e,n,i){const a={};return tm(a,nm(e,n)),e.create(n,e.Fragment,a,i)}function aR(e,n){return n.value}function rS(e,n,i,a){typeof i!="string"&&i!==e.Fragment&&e.passNode&&(n.node=a)}function tm(e,n){if(n.length>0){const i=n.length>1?n:n[0];i&&(e.children=i)}}function lR(e,n,i){return a;function a(s,c,u,f){const h=Array.isArray(u.children)?i:n;return f?h(c,u,f):h(c,u)}}function sR(e,n){return i;function i(a,s,c,u){const f=Array.isArray(c.children),m=$h(a);return n(s,c,u,f,{columnNumber:m?m.column-1:void 0,fileName:e,lineNumber:m?m.line:void 0},void 0)}}function oR(e,n){const i={};let a,s;for(s in n.properties)if(s!=="children"&&em.call(n.properties,s)){const c=cR(e,s,n.properties[s]);if(c){const[u,f]=c;e.tableCellAlignToStyle&&u==="align"&&typeof f=="string"&&WD.has(n.tagName)?a=f:i[u]=f}}if(a){const c=i.style||(i.style={});c[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return i}function uR(e,n){const i={};for(const a of n.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const c=a.data.estree.body[0];c.type;const u=c.expression;u.type;const f=u.properties[0];f.type,Object.assign(i,e.evaluater.evaluateExpression(f.argument))}else ql(e,n.position);else{const s=a.name;let c;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const f=a.value.data.estree.body[0];f.type,c=e.evaluater.evaluateExpression(f.expression)}else ql(e,n.position);else c=a.value===null?!0:a.value;i[s]=c}return i}function nm(e,n){const i=[];let a=-1;const s=e.passKeys?new Map:QD;for(;++a<n.children.length;){const c=n.children[a];let u;if(e.passKeys){const m=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(m){const h=s.get(m)||0;u=m+"-"+h,s.set(m,h+1)}}const f=nS(e,c,u);f!==void 0&&i.push(f)}return i}function cR(e,n,i){const a=BD(e.schema,n);if(!(i==null||typeof i=="number"&&Number.isNaN(i))){if(Array.isArray(i)&&(i=a.commaSeparated?kD(i):ID(i)),a.property==="style"){let s=typeof i=="object"?i:fR(e,String(i));return e.stylePropertyNameCase==="css"&&(s=dR(s)),["style",s]}return[e.elementAttributeNameCase==="react"&&a.space?_D[a.property]||a.property:a.attribute,i]}}function fR(e,n){try{return XD(n,{reactCompat:!0})}catch(i){if(e.ignoreInvalidStyle)return{};const a=i,s=new Ct("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=e.filePath||void 0,s.url=tS+"#cannot-parse-style-attribute",s}}function iS(e,n,i){let a;if(!i)a={type:"Literal",value:n};else if(n.includes(".")){const s=n.split(".");let c=-1,u;for(;++c<s.length;){const f=J0(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};u=u?{type:"MemberExpression",object:u,property:f,computed:!!(c&&f.type==="Literal"),optional:!1}:f}a=u}else a=J0(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(a.type==="Literal"){const s=a.value;return em.call(e.components,s)?e.components[s]:s}if(e.evaluater)return e.evaluater.evaluateExpression(a);ql(e)}function ql(e,n){const i=new Ct("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=tS+"#cannot-handle-mdx-estrees-without-createevaluater",i}function dR(e){const n={};let i;for(i in e)em.call(e,i)&&(n[hR(i)]=e[i]);return n}function hR(e){let n=e.replace(KD,mR);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function mR(e){return"-"+e.toLowerCase()}const gd={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},pR={};function rm(e,n){const i=pR,a=typeof i.includeImageAlt=="boolean"?i.includeImageAlt:!0,s=typeof i.includeHtml=="boolean"?i.includeHtml:!0;return aS(e,a,s)}function aS(e,n,i){if(gR(e)){if("value"in e)return e.type==="html"&&!i?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ib(e.children,n,i)}return Array.isArray(e)?ib(e,n,i):""}function ib(e,n,i){const a=[];let s=-1;for(;++s<e.length;)a[s]=aS(e[s],n,i);return a.join("")}function gR(e){return!!(e&&typeof e=="object")}const ab=document.createElement("i");function im(e){const n="&"+e+";";ab.innerHTML=n;const i=ab.textContent;return i.charCodeAt(i.length-1)===59&&e!=="semi"||i===n?!1:i}function Wt(e,n,i,a){const s=e.length;let c=0,u;if(n<0?n=-n>s?0:s+n:n=n>s?s:n,i=i>0?i:0,a.length<1e4)u=Array.from(a),u.unshift(n,i),e.splice(...u);else for(i&&e.splice(n,i);c<a.length;)u=a.slice(c,c+1e4),u.unshift(n,0),e.splice(...u),c+=1e4,n+=1e4}function hn(e,n){return e.length>0?(Wt(e,e.length,0,n),e):n}const lb={}.hasOwnProperty;function lS(e){const n={};let i=-1;for(;++i<e.length;)yR(n,e[i]);return n}function yR(e,n){let i;for(i in n){const s=(lb.call(e,i)?e[i]:void 0)||(e[i]={}),c=n[i];let u;if(c)for(u in c){lb.call(s,u)||(s[u]=[]);const f=c[u];xR(s[u],Array.isArray(f)?f:f?[f]:[])}}}function xR(e,n){let i=-1;const a=[];for(;++i<n.length;)(n[i].add==="after"?e:a).push(n[i]);Wt(e,0,0,a)}function sS(e,n){const i=Number.parseInt(e,n);return i<9||i===11||i>13&&i<32||i>126&&i<160||i>55295&&i<57344||i>64975&&i<65008||(i&65535)===65535||(i&65535)===65534||i>1114111?"�":String.fromCodePoint(i)}function Cn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Mt=Hr(/[A-Za-z]/),Tt=Hr(/[\dA-Za-z]/),bR=Hr(/[#-'*+\--9=?A-Z^-~]/);function lu(e){return e!==null&&(e<32||e===127)}const sh=Hr(/\d/),vR=Hr(/[\dA-Fa-f]/),SR=Hr(/[!-/:-@[-`{-~]/);function me(e){return e!==null&&e<-2}function Ge(e){return e!==null&&(e<0||e===32)}function Ae(e){return e===-2||e===-1||e===32}const bu=Hr(new RegExp("\\p{P}|\\p{S}","u")),mi=Hr(/\s/);function Hr(e){return n;function n(i){return i!==null&&i>-1&&e.test(String.fromCharCode(i))}}function Ca(e){const n=[];let i=-1,a=0,s=0;for(;++i<e.length;){const c=e.charCodeAt(i);let u="";if(c===37&&Tt(e.charCodeAt(i+1))&&Tt(e.charCodeAt(i+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(u=String.fromCharCode(c));else if(c>55295&&c<57344){const f=e.charCodeAt(i+1);c<56320&&f>56319&&f<57344?(u=String.fromCharCode(c,f),s=1):u="�"}else u=String.fromCharCode(c);u&&(n.push(e.slice(a,i),encodeURIComponent(u)),a=i+s+1,u=""),s&&(i+=s,s=0)}return n.join("")+e.slice(a)}function Re(e,n,i,a){const s=a?a-1:Number.POSITIVE_INFINITY;let c=0;return u;function u(m){return Ae(m)?(e.enter(i),f(m)):n(m)}function f(m){return Ae(m)&&c++<s?(e.consume(m),f):(e.exit(i),n(m))}}const wR={tokenize:TR};function TR(e){const n=e.attempt(this.parser.constructs.contentInitial,a,s);let i;return n;function a(f){if(f===null){e.consume(f);return}return e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Re(e,n,"linePrefix")}function s(f){return e.enter("paragraph"),c(f)}function c(f){const m=e.enter("chunkText",{contentType:"text",previous:i});return i&&(i.next=m),i=m,u(f)}function u(f){if(f===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(f);return}return me(f)?(e.consume(f),e.exit("chunkText"),c):(e.consume(f),u)}}const CR={tokenize:kR},sb={tokenize:AR};function kR(e){const n=this,i=[];let a=0,s,c,u;return f;function f(A){if(a<i.length){const V=i[a];return n.containerState=V[1],e.attempt(V[0].continuation,m,h)(A)}return h(A)}function m(A){if(a++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,s&&O();const V=n.events.length;let Y=V,L;for(;Y--;)if(n.events[Y][0]==="exit"&&n.events[Y][1].type==="chunkFlow"){L=n.events[Y][1].end;break}C(a);let G=V;for(;G<n.events.length;)n.events[G][1].end={...L},G++;return Wt(n.events,Y+1,0,n.events.slice(V)),n.events.length=G,h(A)}return f(A)}function h(A){if(a===i.length){if(!s)return b(A);if(s.currentConstruct&&s.currentConstruct.concrete)return w(A);n.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(sb,y,g)(A)}function y(A){return s&&O(),C(a),b(A)}function g(A){return n.parser.lazy[n.now().line]=a!==i.length,u=n.now().offset,w(A)}function b(A){return n.containerState={},e.attempt(sb,v,w)(A)}function v(A){return a++,i.push([n.currentConstruct,n.containerState]),b(A)}function w(A){if(A===null){s&&O(),C(0),e.consume(A);return}return s=s||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:c}),E(A)}function E(A){if(A===null){M(e.exit("chunkFlow"),!0),C(0),e.consume(A);return}return me(A)?(e.consume(A),M(e.exit("chunkFlow")),a=0,n.interrupt=void 0,f):(e.consume(A),E)}function M(A,V){const Y=n.sliceStream(A);if(V&&Y.push(null),A.previous=c,c&&(c.next=A),c=A,s.defineSkip(A.start),s.write(Y),n.parser.lazy[A.start.line]){let L=s.events.length;for(;L--;)if(s.events[L][1].start.offset<u&&(!s.events[L][1].end||s.events[L][1].end.offset>u))return;const G=n.events.length;let Q=G,F,N;for(;Q--;)if(n.events[Q][0]==="exit"&&n.events[Q][1].type==="chunkFlow"){if(F){N=n.events[Q][1].end;break}F=!0}for(C(a),L=G;L<n.events.length;)n.events[L][1].end={...N},L++;Wt(n.events,Q+1,0,n.events.slice(G)),n.events.length=L}}function C(A){let V=i.length;for(;V-- >A;){const Y=i[V];n.containerState=Y[1],Y[0].exit.call(n,e)}i.length=A}function O(){s.write([null]),c=void 0,s=void 0,n.containerState._closeFlow=void 0}}function AR(e,n,i){return Re(e,e.attempt(this.parser.constructs.document,n,i),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ma(e){if(e===null||Ge(e)||mi(e))return 1;if(bu(e))return 2}function vu(e,n,i){const a=[];let s=-1;for(;++s<e.length;){const c=e[s].resolveAll;c&&!a.includes(c)&&(n=c(n,i),a.push(c))}return n}const oh={name:"attention",resolveAll:ER,tokenize:MR};function ER(e,n){let i=-1,a,s,c,u,f,m,h,y;for(;++i<e.length;)if(e[i][0]==="enter"&&e[i][1].type==="attentionSequence"&&e[i][1]._close){for(a=i;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&n.sliceSerialize(e[a][1]).charCodeAt(0)===n.sliceSerialize(e[i][1]).charCodeAt(0)){if((e[a][1]._close||e[i][1]._open)&&(e[i][1].end.offset-e[i][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[i][1].end.offset-e[i][1].start.offset)%3))continue;m=e[a][1].end.offset-e[a][1].start.offset>1&&e[i][1].end.offset-e[i][1].start.offset>1?2:1;const g={...e[a][1].end},b={...e[i][1].start};ob(g,-m),ob(b,m),u={type:m>1?"strongSequence":"emphasisSequence",start:g,end:{...e[a][1].end}},f={type:m>1?"strongSequence":"emphasisSequence",start:{...e[i][1].start},end:b},c={type:m>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[i][1].start}},s={type:m>1?"strong":"emphasis",start:{...u.start},end:{...f.end}},e[a][1].end={...u.start},e[i][1].start={...f.end},h=[],e[a][1].end.offset-e[a][1].start.offset&&(h=hn(h,[["enter",e[a][1],n],["exit",e[a][1],n]])),h=hn(h,[["enter",s,n],["enter",u,n],["exit",u,n],["enter",c,n]]),h=hn(h,vu(n.parser.constructs.insideSpan.null,e.slice(a+1,i),n)),h=hn(h,[["exit",c,n],["enter",f,n],["exit",f,n],["exit",s,n]]),e[i][1].end.offset-e[i][1].start.offset?(y=2,h=hn(h,[["enter",e[i][1],n],["exit",e[i][1],n]])):y=0,Wt(e,a-1,i-a+3,h),i=a+h.length-y-2;break}}for(i=-1;++i<e.length;)e[i][1].type==="attentionSequence"&&(e[i][1].type="data");return e}function MR(e,n){const i=this.parser.constructs.attentionMarkers.null,a=this.previous,s=ma(a);let c;return u;function u(m){return c=m,e.enter("attentionSequence"),f(m)}function f(m){if(m===c)return e.consume(m),f;const h=e.exit("attentionSequence"),y=ma(m),g=!y||y===2&&s||i.includes(m),b=!s||s===2&&y||i.includes(a);return h._open=!!(c===42?g:g&&(s||!b)),h._close=!!(c===42?b:b&&(y||!g)),n(m)}}function ob(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const jR={name:"autolink",tokenize:DR};function DR(e,n,i){let a=0;return s;function s(v){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),c}function c(v){return Mt(v)?(e.consume(v),u):v===64?i(v):h(v)}function u(v){return v===43||v===45||v===46||Tt(v)?(a=1,f(v)):h(v)}function f(v){return v===58?(e.consume(v),a=0,m):(v===43||v===45||v===46||Tt(v))&&a++<32?(e.consume(v),f):(a=0,h(v))}function m(v){return v===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n):v===null||v===32||v===60||lu(v)?i(v):(e.consume(v),m)}function h(v){return v===64?(e.consume(v),y):bR(v)?(e.consume(v),h):i(v)}function y(v){return Tt(v)?g(v):i(v)}function g(v){return v===46?(e.consume(v),a=0,y):v===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n):b(v)}function b(v){if((v===45||Tt(v))&&a++<63){const w=v===45?b:g;return e.consume(v),w}return i(v)}}const ts={partial:!0,tokenize:RR};function RR(e,n,i){return a;function a(c){return Ae(c)?Re(e,s,"linePrefix")(c):s(c)}function s(c){return c===null||me(c)?n(c):i(c)}}const oS={continuation:{tokenize:OR},exit:_R,name:"blockQuote",tokenize:NR};function NR(e,n,i){const a=this;return s;function s(u){if(u===62){const f=a.containerState;return f.open||(e.enter("blockQuote",{_container:!0}),f.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(u),e.exit("blockQuoteMarker"),c}return i(u)}function c(u){return Ae(u)?(e.enter("blockQuotePrefixWhitespace"),e.consume(u),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(u))}}function OR(e,n,i){const a=this;return s;function s(u){return Ae(u)?Re(e,c,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u):c(u)}function c(u){return e.attempt(oS,n,i)(u)}}function _R(e){e.exit("blockQuote")}const uS={name:"characterEscape",tokenize:LR};function LR(e,n,i){return a;function a(c){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(c),e.exit("escapeMarker"),s}function s(c){return SR(c)?(e.enter("characterEscapeValue"),e.consume(c),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):i(c)}}const cS={name:"characterReference",tokenize:zR};function zR(e,n,i){const a=this;let s=0,c,u;return f;function f(g){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(g),e.exit("characterReferenceMarker"),m}function m(g){return g===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(g),e.exit("characterReferenceMarkerNumeric"),h):(e.enter("characterReferenceValue"),c=31,u=Tt,y(g))}function h(g){return g===88||g===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(g),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),c=6,u=vR,y):(e.enter("characterReferenceValue"),c=7,u=sh,y(g))}function y(g){if(g===59&&s){const b=e.exit("characterReferenceValue");return u===Tt&&!im(a.sliceSerialize(b))?i(g):(e.enter("characterReferenceMarker"),e.consume(g),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return u(g)&&s++<c?(e.consume(g),y):i(g)}}const ub={partial:!0,tokenize:VR},cb={concrete:!0,name:"codeFenced",tokenize:BR};function BR(e,n,i){const a=this,s={partial:!0,tokenize:Y};let c=0,u=0,f;return m;function m(L){return h(L)}function h(L){const G=a.events[a.events.length-1];return c=G&&G[1].type==="linePrefix"?G[2].sliceSerialize(G[1],!0).length:0,f=L,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),y(L)}function y(L){return L===f?(u++,e.consume(L),y):u<3?i(L):(e.exit("codeFencedFenceSequence"),Ae(L)?Re(e,g,"whitespace")(L):g(L))}function g(L){return L===null||me(L)?(e.exit("codeFencedFence"),a.interrupt?n(L):e.check(ub,E,V)(L)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),b(L))}function b(L){return L===null||me(L)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),g(L)):Ae(L)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Re(e,v,"whitespace")(L)):L===96&&L===f?i(L):(e.consume(L),b)}function v(L){return L===null||me(L)?g(L):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(L))}function w(L){return L===null||me(L)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),g(L)):L===96&&L===f?i(L):(e.consume(L),w)}function E(L){return e.attempt(s,V,M)(L)}function M(L){return e.enter("lineEnding"),e.consume(L),e.exit("lineEnding"),C}function C(L){return c>0&&Ae(L)?Re(e,O,"linePrefix",c+1)(L):O(L)}function O(L){return L===null||me(L)?e.check(ub,E,V)(L):(e.enter("codeFlowValue"),A(L))}function A(L){return L===null||me(L)?(e.exit("codeFlowValue"),O(L)):(e.consume(L),A)}function V(L){return e.exit("codeFenced"),n(L)}function Y(L,G,Q){let F=0;return N;function N(ne){return L.enter("lineEnding"),L.consume(ne),L.exit("lineEnding"),$}function $(ne){return L.enter("codeFencedFence"),Ae(ne)?Re(L,te,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ne):te(ne)}function te(ne){return ne===f?(L.enter("codeFencedFenceSequence"),ge(ne)):Q(ne)}function ge(ne){return ne===f?(F++,L.consume(ne),ge):F>=u?(L.exit("codeFencedFenceSequence"),Ae(ne)?Re(L,le,"whitespace")(ne):le(ne)):Q(ne)}function le(ne){return ne===null||me(ne)?(L.exit("codeFencedFence"),G(ne)):Q(ne)}}}function VR(e,n,i){const a=this;return s;function s(u){return u===null?i(u):(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),c)}function c(u){return a.parser.lazy[a.now().line]?i(u):n(u)}}const yd={name:"codeIndented",tokenize:UR},PR={partial:!0,tokenize:IR};function UR(e,n,i){const a=this;return s;function s(h){return e.enter("codeIndented"),Re(e,c,"linePrefix",5)(h)}function c(h){const y=a.events[a.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?u(h):i(h)}function u(h){return h===null?m(h):me(h)?e.attempt(PR,u,m)(h):(e.enter("codeFlowValue"),f(h))}function f(h){return h===null||me(h)?(e.exit("codeFlowValue"),u(h)):(e.consume(h),f)}function m(h){return e.exit("codeIndented"),n(h)}}function IR(e,n,i){const a=this;return s;function s(u){return a.parser.lazy[a.now().line]?i(u):me(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),s):Re(e,c,"linePrefix",5)(u)}function c(u){const f=a.events[a.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?n(u):me(u)?s(u):i(u)}}const HR={name:"codeText",previous:qR,resolve:FR,tokenize:GR};function FR(e){let n=e.length-4,i=3,a,s;if((e[i][1].type==="lineEnding"||e[i][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(a=i;++a<n;)if(e[a][1].type==="codeTextData"){e[i][1].type="codeTextPadding",e[n][1].type="codeTextPadding",i+=2,n-=2;break}}for(a=i-1,n++;++a<=n;)s===void 0?a!==n&&e[a][1].type!=="lineEnding"&&(s=a):(a===n||e[a][1].type==="lineEnding")&&(e[s][1].type="codeTextData",a!==s+2&&(e[s][1].end=e[a-1][1].end,e.splice(s+2,a-s-2),n-=a-s-2,a=s+2),s=void 0);return e}function qR(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function GR(e,n,i){let a=0,s,c;return u;function u(g){return e.enter("codeText"),e.enter("codeTextSequence"),f(g)}function f(g){return g===96?(e.consume(g),a++,f):(e.exit("codeTextSequence"),m(g))}function m(g){return g===null?i(g):g===32?(e.enter("space"),e.consume(g),e.exit("space"),m):g===96?(c=e.enter("codeTextSequence"),s=0,y(g)):me(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),m):(e.enter("codeTextData"),h(g))}function h(g){return g===null||g===32||g===96||me(g)?(e.exit("codeTextData"),m(g)):(e.consume(g),h)}function y(g){return g===96?(e.consume(g),s++,y):s===a?(e.exit("codeTextSequence"),e.exit("codeText"),n(g)):(c.type="codeTextData",h(g))}}class YR{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,i){const a=i??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(n,a):n>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(n,i,a){const s=i||0;this.setCursor(Math.trunc(n));const c=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return a&&Al(this.left,a),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Al(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Al(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const i=this.left.splice(n,Number.POSITIVE_INFINITY);Al(this.right,i.reverse())}else{const i=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Al(this.left,i.reverse())}}}function Al(e,n){let i=0;if(n.length<1e4)e.push(...n);else for(;i<n.length;)e.push(...n.slice(i,i+1e4)),i+=1e4}function fS(e){const n={};let i=-1,a,s,c,u,f,m,h;const y=new YR(e);for(;++i<y.length;){for(;i in n;)i=n[i];if(a=y.get(i),i&&a[1].type==="chunkFlow"&&y.get(i-1)[1].type==="listItemPrefix"&&(m=a[1]._tokenizer.events,c=0,c<m.length&&m[c][1].type==="lineEndingBlank"&&(c+=2),c<m.length&&m[c][1].type==="content"))for(;++c<m.length&&m[c][1].type!=="content";)m[c][1].type==="chunkText"&&(m[c][1]._isInFirstContentOfListItem=!0,c++);if(a[0]==="enter")a[1].contentType&&(Object.assign(n,XR(y,i)),i=n[i],h=!0);else if(a[1]._container){for(c=i,s=void 0;c--;)if(u=y.get(c),u[1].type==="lineEnding"||u[1].type==="lineEndingBlank")u[0]==="enter"&&(s&&(y.get(s)[1].type="lineEndingBlank"),u[1].type="lineEnding",s=c);else if(!(u[1].type==="linePrefix"||u[1].type==="listItemIndent"))break;s&&(a[1].end={...y.get(s)[1].start},f=y.slice(s,i),f.unshift(a),y.splice(s,i-s+1,f))}}return Wt(e,0,Number.POSITIVE_INFINITY,y.slice(0)),!h}function XR(e,n){const i=e.get(n)[1],a=e.get(n)[2];let s=n-1;const c=[];let u=i._tokenizer;u||(u=a.parser[i.contentType](i.start),i._contentTypeTextTrailing&&(u._contentTypeTextTrailing=!0));const f=u.events,m=[],h={};let y,g,b=-1,v=i,w=0,E=0;const M=[E];for(;v;){for(;e.get(++s)[1]!==v;);c.push(s),v._tokenizer||(y=a.sliceStream(v),v.next||y.push(null),g&&u.defineSkip(v.start),v._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=!0),u.write(y),v._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=void 0)),g=v,v=v.next}for(v=i;++b<f.length;)f[b][0]==="exit"&&f[b-1][0]==="enter"&&f[b][1].type===f[b-1][1].type&&f[b][1].start.line!==f[b][1].end.line&&(E=b+1,M.push(E),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(u.events=[],v?(v._tokenizer=void 0,v.previous=void 0):M.pop(),b=M.length;b--;){const C=f.slice(M[b],M[b+1]),O=c.pop();m.push([O,O+C.length-1]),e.splice(O,2,C)}for(m.reverse(),b=-1;++b<m.length;)h[w+m[b][0]]=w+m[b][1],w+=m[b][1]-m[b][0]-1;return h}const JR={resolve:KR,tokenize:ZR},QR={partial:!0,tokenize:WR};function KR(e){return fS(e),e}function ZR(e,n){let i;return a;function a(f){return e.enter("content"),i=e.enter("chunkContent",{contentType:"content"}),s(f)}function s(f){return f===null?c(f):me(f)?e.check(QR,u,c)(f):(e.consume(f),s)}function c(f){return e.exit("chunkContent"),e.exit("content"),n(f)}function u(f){return e.consume(f),e.exit("chunkContent"),i.next=e.enter("chunkContent",{contentType:"content",previous:i}),i=i.next,s}}function WR(e,n,i){const a=this;return s;function s(u){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),Re(e,c,"linePrefix")}function c(u){if(u===null||me(u))return i(u);const f=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?n(u):e.interrupt(a.parser.constructs.flow,i,n)(u)}}function dS(e,n,i,a,s,c,u,f,m){const h=m||Number.POSITIVE_INFINITY;let y=0;return g;function g(C){return C===60?(e.enter(a),e.enter(s),e.enter(c),e.consume(C),e.exit(c),b):C===null||C===32||C===41||lu(C)?i(C):(e.enter(a),e.enter(u),e.enter(f),e.enter("chunkString",{contentType:"string"}),E(C))}function b(C){return C===62?(e.enter(c),e.consume(C),e.exit(c),e.exit(s),e.exit(a),n):(e.enter(f),e.enter("chunkString",{contentType:"string"}),v(C))}function v(C){return C===62?(e.exit("chunkString"),e.exit(f),b(C)):C===null||C===60||me(C)?i(C):(e.consume(C),C===92?w:v)}function w(C){return C===60||C===62||C===92?(e.consume(C),v):v(C)}function E(C){return!y&&(C===null||C===41||Ge(C))?(e.exit("chunkString"),e.exit(f),e.exit(u),e.exit(a),n(C)):y<h&&C===40?(e.consume(C),y++,E):C===41?(e.consume(C),y--,E):C===null||C===32||C===40||lu(C)?i(C):(e.consume(C),C===92?M:E)}function M(C){return C===40||C===41||C===92?(e.consume(C),E):E(C)}}function hS(e,n,i,a,s,c){const u=this;let f=0,m;return h;function h(v){return e.enter(a),e.enter(s),e.consume(v),e.exit(s),e.enter(c),y}function y(v){return f>999||v===null||v===91||v===93&&!m||v===94&&!f&&"_hiddenFootnoteSupport"in u.parser.constructs?i(v):v===93?(e.exit(c),e.enter(s),e.consume(v),e.exit(s),e.exit(a),n):me(v)?(e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),y):(e.enter("chunkString",{contentType:"string"}),g(v))}function g(v){return v===null||v===91||v===93||me(v)||f++>999?(e.exit("chunkString"),y(v)):(e.consume(v),m||(m=!Ae(v)),v===92?b:g)}function b(v){return v===91||v===92||v===93?(e.consume(v),f++,g):g(v)}}function mS(e,n,i,a,s,c){let u;return f;function f(b){return b===34||b===39||b===40?(e.enter(a),e.enter(s),e.consume(b),e.exit(s),u=b===40?41:b,m):i(b)}function m(b){return b===u?(e.enter(s),e.consume(b),e.exit(s),e.exit(a),n):(e.enter(c),h(b))}function h(b){return b===u?(e.exit(c),m(u)):b===null?i(b):me(b)?(e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),Re(e,h,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===u||b===null||me(b)?(e.exit("chunkString"),h(b)):(e.consume(b),b===92?g:y)}function g(b){return b===u||b===92?(e.consume(b),y):y(b)}}function zl(e,n){let i;return a;function a(s){return me(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i=!0,a):Ae(s)?Re(e,a,i?"linePrefix":"lineSuffix")(s):n(s)}}const $R={name:"definition",tokenize:tN},eN={partial:!0,tokenize:nN};function tN(e,n,i){const a=this;let s;return c;function c(v){return e.enter("definition"),u(v)}function u(v){return hS.call(a,e,f,i,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function f(v){return s=Cn(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),v===58?(e.enter("definitionMarker"),e.consume(v),e.exit("definitionMarker"),m):i(v)}function m(v){return Ge(v)?zl(e,h)(v):h(v)}function h(v){return dS(e,y,i,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function y(v){return e.attempt(eN,g,g)(v)}function g(v){return Ae(v)?Re(e,b,"whitespace")(v):b(v)}function b(v){return v===null||me(v)?(e.exit("definition"),a.parser.defined.push(s),n(v)):i(v)}}function nN(e,n,i){return a;function a(f){return Ge(f)?zl(e,s)(f):i(f)}function s(f){return mS(e,c,i,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function c(f){return Ae(f)?Re(e,u,"whitespace")(f):u(f)}function u(f){return f===null||me(f)?n(f):i(f)}}const rN={name:"hardBreakEscape",tokenize:iN};function iN(e,n,i){return a;function a(c){return e.enter("hardBreakEscape"),e.consume(c),s}function s(c){return me(c)?(e.exit("hardBreakEscape"),n(c)):i(c)}}const aN={name:"headingAtx",resolve:lN,tokenize:sN};function lN(e,n){let i=e.length-2,a=3,s,c;return e[a][1].type==="whitespace"&&(a+=2),i-2>a&&e[i][1].type==="whitespace"&&(i-=2),e[i][1].type==="atxHeadingSequence"&&(a===i-1||i-4>a&&e[i-2][1].type==="whitespace")&&(i-=a+1===i?2:4),i>a&&(s={type:"atxHeadingText",start:e[a][1].start,end:e[i][1].end},c={type:"chunkText",start:e[a][1].start,end:e[i][1].end,contentType:"text"},Wt(e,a,i-a+1,[["enter",s,n],["enter",c,n],["exit",c,n],["exit",s,n]])),e}function sN(e,n,i){let a=0;return s;function s(y){return e.enter("atxHeading"),c(y)}function c(y){return e.enter("atxHeadingSequence"),u(y)}function u(y){return y===35&&a++<6?(e.consume(y),u):y===null||Ge(y)?(e.exit("atxHeadingSequence"),f(y)):i(y)}function f(y){return y===35?(e.enter("atxHeadingSequence"),m(y)):y===null||me(y)?(e.exit("atxHeading"),n(y)):Ae(y)?Re(e,f,"whitespace")(y):(e.enter("atxHeadingText"),h(y))}function m(y){return y===35?(e.consume(y),m):(e.exit("atxHeadingSequence"),f(y))}function h(y){return y===null||y===35||Ge(y)?(e.exit("atxHeadingText"),f(y)):(e.consume(y),h)}}const oN=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],fb=["pre","script","style","textarea"],uN={concrete:!0,name:"htmlFlow",resolveTo:dN,tokenize:hN},cN={partial:!0,tokenize:pN},fN={partial:!0,tokenize:mN};function dN(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function hN(e,n,i){const a=this;let s,c,u,f,m;return h;function h(k){return y(k)}function y(k){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(k),g}function g(k){return k===33?(e.consume(k),b):k===47?(e.consume(k),c=!0,E):k===63?(e.consume(k),s=3,a.interrupt?n:D):Mt(k)?(e.consume(k),u=String.fromCharCode(k),M):i(k)}function b(k){return k===45?(e.consume(k),s=2,v):k===91?(e.consume(k),s=5,f=0,w):Mt(k)?(e.consume(k),s=4,a.interrupt?n:D):i(k)}function v(k){return k===45?(e.consume(k),a.interrupt?n:D):i(k)}function w(k){const se="CDATA[";return k===se.charCodeAt(f++)?(e.consume(k),f===se.length?a.interrupt?n:te:w):i(k)}function E(k){return Mt(k)?(e.consume(k),u=String.fromCharCode(k),M):i(k)}function M(k){if(k===null||k===47||k===62||Ge(k)){const se=k===47,ye=u.toLowerCase();return!se&&!c&&fb.includes(ye)?(s=1,a.interrupt?n(k):te(k)):oN.includes(u.toLowerCase())?(s=6,se?(e.consume(k),C):a.interrupt?n(k):te(k)):(s=7,a.interrupt&&!a.parser.lazy[a.now().line]?i(k):c?O(k):A(k))}return k===45||Tt(k)?(e.consume(k),u+=String.fromCharCode(k),M):i(k)}function C(k){return k===62?(e.consume(k),a.interrupt?n:te):i(k)}function O(k){return Ae(k)?(e.consume(k),O):N(k)}function A(k){return k===47?(e.consume(k),N):k===58||k===95||Mt(k)?(e.consume(k),V):Ae(k)?(e.consume(k),A):N(k)}function V(k){return k===45||k===46||k===58||k===95||Tt(k)?(e.consume(k),V):Y(k)}function Y(k){return k===61?(e.consume(k),L):Ae(k)?(e.consume(k),Y):A(k)}function L(k){return k===null||k===60||k===61||k===62||k===96?i(k):k===34||k===39?(e.consume(k),m=k,G):Ae(k)?(e.consume(k),L):Q(k)}function G(k){return k===m?(e.consume(k),m=null,F):k===null||me(k)?i(k):(e.consume(k),G)}function Q(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Ge(k)?Y(k):(e.consume(k),Q)}function F(k){return k===47||k===62||Ae(k)?A(k):i(k)}function N(k){return k===62?(e.consume(k),$):i(k)}function $(k){return k===null||me(k)?te(k):Ae(k)?(e.consume(k),$):i(k)}function te(k){return k===45&&s===2?(e.consume(k),P):k===60&&s===1?(e.consume(k),ee):k===62&&s===4?(e.consume(k),_):k===63&&s===3?(e.consume(k),D):k===93&&s===5?(e.consume(k),ce):me(k)&&(s===6||s===7)?(e.exit("htmlFlowData"),e.check(cN,J,ge)(k)):k===null||me(k)?(e.exit("htmlFlowData"),ge(k)):(e.consume(k),te)}function ge(k){return e.check(fN,le,J)(k)}function le(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),ne}function ne(k){return k===null||me(k)?ge(k):(e.enter("htmlFlowData"),te(k))}function P(k){return k===45?(e.consume(k),D):te(k)}function ee(k){return k===47?(e.consume(k),u="",ae):te(k)}function ae(k){if(k===62){const se=u.toLowerCase();return fb.includes(se)?(e.consume(k),_):te(k)}return Mt(k)&&u.length<8?(e.consume(k),u+=String.fromCharCode(k),ae):te(k)}function ce(k){return k===93?(e.consume(k),D):te(k)}function D(k){return k===62?(e.consume(k),_):k===45&&s===2?(e.consume(k),D):te(k)}function _(k){return k===null||me(k)?(e.exit("htmlFlowData"),J(k)):(e.consume(k),_)}function J(k){return e.exit("htmlFlow"),n(k)}}function mN(e,n,i){const a=this;return s;function s(u){return me(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),c):i(u)}function c(u){return a.parser.lazy[a.now().line]?i(u):n(u)}}function pN(e,n,i){return a;function a(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),e.attempt(ts,n,i)}}const gN={name:"htmlText",tokenize:yN};function yN(e,n,i){const a=this;let s,c,u;return f;function f(D){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(D),m}function m(D){return D===33?(e.consume(D),h):D===47?(e.consume(D),Y):D===63?(e.consume(D),A):Mt(D)?(e.consume(D),Q):i(D)}function h(D){return D===45?(e.consume(D),y):D===91?(e.consume(D),c=0,w):Mt(D)?(e.consume(D),O):i(D)}function y(D){return D===45?(e.consume(D),v):i(D)}function g(D){return D===null?i(D):D===45?(e.consume(D),b):me(D)?(u=g,ee(D)):(e.consume(D),g)}function b(D){return D===45?(e.consume(D),v):g(D)}function v(D){return D===62?P(D):D===45?b(D):g(D)}function w(D){const _="CDATA[";return D===_.charCodeAt(c++)?(e.consume(D),c===_.length?E:w):i(D)}function E(D){return D===null?i(D):D===93?(e.consume(D),M):me(D)?(u=E,ee(D)):(e.consume(D),E)}function M(D){return D===93?(e.consume(D),C):E(D)}function C(D){return D===62?P(D):D===93?(e.consume(D),C):E(D)}function O(D){return D===null||D===62?P(D):me(D)?(u=O,ee(D)):(e.consume(D),O)}function A(D){return D===null?i(D):D===63?(e.consume(D),V):me(D)?(u=A,ee(D)):(e.consume(D),A)}function V(D){return D===62?P(D):A(D)}function Y(D){return Mt(D)?(e.consume(D),L):i(D)}function L(D){return D===45||Tt(D)?(e.consume(D),L):G(D)}function G(D){return me(D)?(u=G,ee(D)):Ae(D)?(e.consume(D),G):P(D)}function Q(D){return D===45||Tt(D)?(e.consume(D),Q):D===47||D===62||Ge(D)?F(D):i(D)}function F(D){return D===47?(e.consume(D),P):D===58||D===95||Mt(D)?(e.consume(D),N):me(D)?(u=F,ee(D)):Ae(D)?(e.consume(D),F):P(D)}function N(D){return D===45||D===46||D===58||D===95||Tt(D)?(e.consume(D),N):$(D)}function $(D){return D===61?(e.consume(D),te):me(D)?(u=$,ee(D)):Ae(D)?(e.consume(D),$):F(D)}function te(D){return D===null||D===60||D===61||D===62||D===96?i(D):D===34||D===39?(e.consume(D),s=D,ge):me(D)?(u=te,ee(D)):Ae(D)?(e.consume(D),te):(e.consume(D),le)}function ge(D){return D===s?(e.consume(D),s=void 0,ne):D===null?i(D):me(D)?(u=ge,ee(D)):(e.consume(D),ge)}function le(D){return D===null||D===34||D===39||D===60||D===61||D===96?i(D):D===47||D===62||Ge(D)?F(D):(e.consume(D),le)}function ne(D){return D===47||D===62||Ge(D)?F(D):i(D)}function P(D){return D===62?(e.consume(D),e.exit("htmlTextData"),e.exit("htmlText"),n):i(D)}function ee(D){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(D),e.exit("lineEnding"),ae}function ae(D){return Ae(D)?Re(e,ce,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):ce(D)}function ce(D){return e.enter("htmlTextData"),u(D)}}const am={name:"labelEnd",resolveAll:SN,resolveTo:wN,tokenize:TN},xN={tokenize:CN},bN={tokenize:kN},vN={tokenize:AN};function SN(e){let n=-1;const i=[];for(;++n<e.length;){const a=e[n][1];if(i.push(e[n]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const s=a.type==="labelImage"?4:2;a.type="data",n+=s}}return e.length!==i.length&&Wt(e,0,e.length,i),e}function wN(e,n){let i=e.length,a=0,s,c,u,f;for(;i--;)if(s=e[i][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;e[i][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(u){if(e[i][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=i,s.type!=="labelLink")){a=2;break}}else s.type==="labelEnd"&&(u=i);const m={type:e[c][1].type==="labelLink"?"link":"image",start:{...e[c][1].start},end:{...e[e.length-1][1].end}},h={type:"label",start:{...e[c][1].start},end:{...e[u][1].end}},y={type:"labelText",start:{...e[c+a+2][1].end},end:{...e[u-2][1].start}};return f=[["enter",m,n],["enter",h,n]],f=hn(f,e.slice(c+1,c+a+3)),f=hn(f,[["enter",y,n]]),f=hn(f,vu(n.parser.constructs.insideSpan.null,e.slice(c+a+4,u-3),n)),f=hn(f,[["exit",y,n],e[u-2],e[u-1],["exit",h,n]]),f=hn(f,e.slice(u+1)),f=hn(f,[["exit",m,n]]),Wt(e,c,e.length,f),e}function TN(e,n,i){const a=this;let s=a.events.length,c,u;for(;s--;)if((a.events[s][1].type==="labelImage"||a.events[s][1].type==="labelLink")&&!a.events[s][1]._balanced){c=a.events[s][1];break}return f;function f(b){return c?c._inactive?g(b):(u=a.parser.defined.includes(Cn(a.sliceSerialize({start:c.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(b),e.exit("labelMarker"),e.exit("labelEnd"),m):i(b)}function m(b){return b===40?e.attempt(xN,y,u?y:g)(b):b===91?e.attempt(bN,y,u?h:g)(b):u?y(b):g(b)}function h(b){return e.attempt(vN,y,g)(b)}function y(b){return n(b)}function g(b){return c._balanced=!0,i(b)}}function CN(e,n,i){return a;function a(g){return e.enter("resource"),e.enter("resourceMarker"),e.consume(g),e.exit("resourceMarker"),s}function s(g){return Ge(g)?zl(e,c)(g):c(g)}function c(g){return g===41?y(g):dS(e,u,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function u(g){return Ge(g)?zl(e,m)(g):y(g)}function f(g){return i(g)}function m(g){return g===34||g===39||g===40?mS(e,h,i,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):y(g)}function h(g){return Ge(g)?zl(e,y)(g):y(g)}function y(g){return g===41?(e.enter("resourceMarker"),e.consume(g),e.exit("resourceMarker"),e.exit("resource"),n):i(g)}}function kN(e,n,i){const a=this;return s;function s(f){return hS.call(a,e,c,u,"reference","referenceMarker","referenceString")(f)}function c(f){return a.parser.defined.includes(Cn(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?n(f):i(f)}function u(f){return i(f)}}function AN(e,n,i){return a;function a(c){return e.enter("reference"),e.enter("referenceMarker"),e.consume(c),e.exit("referenceMarker"),s}function s(c){return c===93?(e.enter("referenceMarker"),e.consume(c),e.exit("referenceMarker"),e.exit("reference"),n):i(c)}}const EN={name:"labelStartImage",resolveAll:am.resolveAll,tokenize:MN};function MN(e,n,i){const a=this;return s;function s(f){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(f),e.exit("labelImageMarker"),c}function c(f){return f===91?(e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelImage"),u):i(f)}function u(f){return f===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(f):n(f)}}const jN={name:"labelStartLink",resolveAll:am.resolveAll,tokenize:DN};function DN(e,n,i){const a=this;return s;function s(u){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelLink"),c}function c(u){return u===94&&"_hiddenFootnoteSupport"in a.parser.constructs?i(u):n(u)}}const xd={name:"lineEnding",tokenize:RN};function RN(e,n){return i;function i(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Re(e,n,"linePrefix")}}const Go={name:"thematicBreak",tokenize:NN};function NN(e,n,i){let a=0,s;return c;function c(h){return e.enter("thematicBreak"),u(h)}function u(h){return s=h,f(h)}function f(h){return h===s?(e.enter("thematicBreakSequence"),m(h)):a>=3&&(h===null||me(h))?(e.exit("thematicBreak"),n(h)):i(h)}function m(h){return h===s?(e.consume(h),a++,m):(e.exit("thematicBreakSequence"),Ae(h)?Re(e,f,"whitespace")(h):f(h))}}const Pt={continuation:{tokenize:zN},exit:VN,name:"list",tokenize:LN},ON={partial:!0,tokenize:PN},_N={partial:!0,tokenize:BN};function LN(e,n,i){const a=this,s=a.events[a.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,u=0;return f;function f(v){const w=a.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!a.containerState.marker||v===a.containerState.marker:sh(v)){if(a.containerState.type||(a.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),v===42||v===45?e.check(Go,i,h)(v):h(v);if(!a.interrupt||v===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),m(v)}return i(v)}function m(v){return sh(v)&&++u<10?(e.consume(v),m):(!a.interrupt||u<2)&&(a.containerState.marker?v===a.containerState.marker:v===41||v===46)?(e.exit("listItemValue"),h(v)):i(v)}function h(v){return e.enter("listItemMarker"),e.consume(v),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||v,e.check(ts,a.interrupt?i:y,e.attempt(ON,b,g))}function y(v){return a.containerState.initialBlankLine=!0,c++,b(v)}function g(v){return Ae(v)?(e.enter("listItemPrefixWhitespace"),e.consume(v),e.exit("listItemPrefixWhitespace"),b):i(v)}function b(v){return a.containerState.size=c+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(v)}}function zN(e,n,i){const a=this;return a.containerState._closeFlow=void 0,e.check(ts,s,c);function s(f){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,Re(e,n,"listItemIndent",a.containerState.size+1)(f)}function c(f){return a.containerState.furtherBlankLines||!Ae(f)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,u(f)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(_N,n,u)(f))}function u(f){return a.containerState._closeFlow=!0,a.interrupt=void 0,Re(e,e.attempt(Pt,n,i),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function BN(e,n,i){const a=this;return Re(e,s,"listItemIndent",a.containerState.size+1);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="listItemIndent"&&u[2].sliceSerialize(u[1],!0).length===a.containerState.size?n(c):i(c)}}function VN(e){e.exit(this.containerState.type)}function PN(e,n,i){const a=this;return Re(e,s,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const u=a.events[a.events.length-1];return!Ae(c)&&u&&u[1].type==="listItemPrefixWhitespace"?n(c):i(c)}}const db={name:"setextUnderline",resolveTo:UN,tokenize:IN};function UN(e,n){let i=e.length,a,s,c;for(;i--;)if(e[i][0]==="enter"){if(e[i][1].type==="content"){a=i;break}e[i][1].type==="paragraph"&&(s=i)}else e[i][1].type==="content"&&e.splice(i,1),!c&&e[i][1].type==="definition"&&(c=i);const u={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",c?(e.splice(s,0,["enter",u,n]),e.splice(c+1,0,["exit",e[a][1],n]),e[a][1].end={...e[c][1].end}):e[a][1]=u,e.push(["exit",u,n]),e}function IN(e,n,i){const a=this;let s;return c;function c(h){let y=a.events.length,g;for(;y--;)if(a.events[y][1].type!=="lineEnding"&&a.events[y][1].type!=="linePrefix"&&a.events[y][1].type!=="content"){g=a.events[y][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||g)?(e.enter("setextHeadingLine"),s=h,u(h)):i(h)}function u(h){return e.enter("setextHeadingLineSequence"),f(h)}function f(h){return h===s?(e.consume(h),f):(e.exit("setextHeadingLineSequence"),Ae(h)?Re(e,m,"lineSuffix")(h):m(h))}function m(h){return h===null||me(h)?(e.exit("setextHeadingLine"),n(h)):i(h)}}const HN={tokenize:FN};function FN(e){const n=this,i=e.attempt(ts,a,e.attempt(this.parser.constructs.flowInitial,s,Re(e,e.attempt(this.parser.constructs.flow,s,e.attempt(JR,s)),"linePrefix")));return i;function a(c){if(c===null){e.consume(c);return}return e.enter("lineEndingBlank"),e.consume(c),e.exit("lineEndingBlank"),n.currentConstruct=void 0,i}function s(c){if(c===null){e.consume(c);return}return e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),n.currentConstruct=void 0,i}}const qN={resolveAll:gS()},GN=pS("string"),YN=pS("text");function pS(e){return{resolveAll:gS(e==="text"?XN:void 0),tokenize:n};function n(i){const a=this,s=this.parser.constructs[e],c=i.attempt(s,u,f);return u;function u(y){return h(y)?c(y):f(y)}function f(y){if(y===null){i.consume(y);return}return i.enter("data"),i.consume(y),m}function m(y){return h(y)?(i.exit("data"),c(y)):(i.consume(y),m)}function h(y){if(y===null)return!0;const g=s[y];let b=-1;if(g)for(;++b<g.length;){const v=g[b];if(!v.previous||v.previous.call(a,a.previous))return!0}return!1}}}function gS(e){return n;function n(i,a){let s=-1,c;for(;++s<=i.length;)c===void 0?i[s]&&i[s][1].type==="data"&&(c=s,s++):(!i[s]||i[s][1].type!=="data")&&(s!==c+2&&(i[c][1].end=i[s-1][1].end,i.splice(c+2,s-c-2),s=c+2),c=void 0);return e?e(i,a):i}}function XN(e,n){let i=0;for(;++i<=e.length;)if((i===e.length||e[i][1].type==="lineEnding")&&e[i-1][1].type==="data"){const a=e[i-1][1],s=n.sliceStream(a);let c=s.length,u=-1,f=0,m;for(;c--;){const h=s[c];if(typeof h=="string"){for(u=h.length;h.charCodeAt(u-1)===32;)f++,u--;if(u)break;u=-1}else if(h===-2)m=!0,f++;else if(h!==-1){c++;break}}if(n._contentTypeTextTrailing&&i===e.length&&(f=0),f){const h={type:i===e.length||m||f<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?u:a.start._bufferIndex+u,_index:a.start._index+c,line:a.end.line,column:a.end.column-f,offset:a.end.offset-f},end:{...a.end}};a.end={...h.start},a.start.offset===a.end.offset?Object.assign(a,h):(e.splice(i,0,["enter",h,n],["exit",h,n]),i+=2)}i++}return e}const JN={42:Pt,43:Pt,45:Pt,48:Pt,49:Pt,50:Pt,51:Pt,52:Pt,53:Pt,54:Pt,55:Pt,56:Pt,57:Pt,62:oS},QN={91:$R},KN={[-2]:yd,[-1]:yd,32:yd},ZN={35:aN,42:Go,45:[db,Go],60:uN,61:db,95:Go,96:cb,126:cb},WN={38:cS,92:uS},$N={[-5]:xd,[-4]:xd,[-3]:xd,33:EN,38:cS,42:oh,60:[jR,gN],91:jN,92:[rN,uS],93:am,95:oh,96:HR},e4={null:[oh,qN]},t4={null:[42,95]},n4={null:[]},r4=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:t4,contentInitial:QN,disable:n4,document:JN,flow:ZN,flowInitial:KN,insideSpan:e4,string:WN,text:$N},Symbol.toStringTag,{value:"Module"}));function i4(e,n,i){let a={_bufferIndex:-1,_index:0,line:i&&i.line||1,column:i&&i.column||1,offset:i&&i.offset||0};const s={},c=[];let u=[],f=[];const m={attempt:G(Y),check:G(L),consume:O,enter:A,exit:V,interrupt:G(L,{interrupt:!0})},h={code:null,containerState:{},defineSkip:E,events:[],now:w,parser:e,previous:null,sliceSerialize:b,sliceStream:v,write:g};let y=n.tokenize.call(h,m);return n.resolveAll&&c.push(n),h;function g($){return u=hn(u,$),M(),u[u.length-1]!==null?[]:(Q(n,0),h.events=vu(c,h.events,h),h.events)}function b($,te){return l4(v($),te)}function v($){return a4(u,$)}function w(){const{_bufferIndex:$,_index:te,line:ge,column:le,offset:ne}=a;return{_bufferIndex:$,_index:te,line:ge,column:le,offset:ne}}function E($){s[$.line]=$.column,N()}function M(){let $;for(;a._index<u.length;){const te=u[a._index];if(typeof te=="string")for($=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===$&&a._bufferIndex<te.length;)C(te.charCodeAt(a._bufferIndex));else C(te)}}function C($){y=y($)}function O($){me($)?(a.line++,a.column=1,a.offset+=$===-3?2:1,N()):$!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===u[a._index].length&&(a._bufferIndex=-1,a._index++)),h.previous=$}function A($,te){const ge=te||{};return ge.type=$,ge.start=w(),h.events.push(["enter",ge,h]),f.push(ge),ge}function V($){const te=f.pop();return te.end=w(),h.events.push(["exit",te,h]),te}function Y($,te){Q($,te.from)}function L($,te){te.restore()}function G($,te){return ge;function ge(le,ne,P){let ee,ae,ce,D;return Array.isArray(le)?J(le):"tokenize"in le?J([le]):_(le);function _(de){return Ee;function Ee(Ke){const Ve=Ke!==null&&de[Ke],$t=Ke!==null&&de.null,Vn=[...Array.isArray(Ve)?Ve:Ve?[Ve]:[],...Array.isArray($t)?$t:$t?[$t]:[]];return J(Vn)(Ke)}}function J(de){return ee=de,ae=0,de.length===0?P:k(de[ae])}function k(de){return Ee;function Ee(Ke){return D=F(),ce=de,de.partial||(h.currentConstruct=de),de.name&&h.parser.constructs.disable.null.includes(de.name)?ye():de.tokenize.call(te?Object.assign(Object.create(h),te):h,m,se,ye)(Ke)}}function se(de){return $(ce,D),ne}function ye(de){return D.restore(),++ae<ee.length?k(ee[ae]):P}}}function Q($,te){$.resolveAll&&!c.includes($)&&c.push($),$.resolve&&Wt(h.events,te,h.events.length-te,$.resolve(h.events.slice(te),h)),$.resolveTo&&(h.events=$.resolveTo(h.events,h))}function F(){const $=w(),te=h.previous,ge=h.currentConstruct,le=h.events.length,ne=Array.from(f);return{from:le,restore:P};function P(){a=$,h.previous=te,h.currentConstruct=ge,h.events.length=le,f=ne,N()}}function N(){a.line in s&&a.column<2&&(a.column=s[a.line],a.offset+=s[a.line]-1)}}function a4(e,n){const i=n.start._index,a=n.start._bufferIndex,s=n.end._index,c=n.end._bufferIndex;let u;if(i===s)u=[e[i].slice(a,c)];else{if(u=e.slice(i,s),a>-1){const f=u[0];typeof f=="string"?u[0]=f.slice(a):u.shift()}c>0&&u.push(e[s].slice(0,c))}return u}function l4(e,n){let i=-1;const a=[];let s;for(;++i<e.length;){const c=e[i];let u;if(typeof c=="string")u=c;else switch(c){case-5:{u="\r";break}case-4:{u=`
`;break}case-3:{u=`\r
`;break}case-2:{u=n?" ":"	";break}case-1:{if(!n&&s)continue;u=" ";break}default:u=String.fromCharCode(c)}s=c===-2,a.push(u)}return a.join("")}function s4(e){const a={constructs:lS([r4,...(e||{}).extensions||[]]),content:s(wR),defined:[],document:s(CR),flow:s(HN),lazy:{},string:s(GN),text:s(YN)};return a;function s(c){return u;function u(f){return i4(a,c,f)}}}function o4(e){for(;!fS(e););return e}const hb=/[\0\t\n\r]/g;function u4(){let e=1,n="",i=!0,a;return s;function s(c,u,f){const m=[];let h,y,g,b,v;for(c=n+(typeof c=="string"?c.toString():new TextDecoder(u||void 0).decode(c)),g=0,n="",i&&(c.charCodeAt(0)===65279&&g++,i=void 0);g<c.length;){if(hb.lastIndex=g,h=hb.exec(c),b=h&&h.index!==void 0?h.index:c.length,v=c.charCodeAt(b),!h){n=c.slice(g);break}if(v===10&&g===b&&a)m.push(-3),a=void 0;else switch(a&&(m.push(-5),a=void 0),g<b&&(m.push(c.slice(g,b)),e+=b-g),v){case 0:{m.push(65533),e++;break}case 9:{for(y=Math.ceil(e/4)*4,m.push(-2);e++<y;)m.push(-1);break}case 10:{m.push(-4),e=1;break}default:a=!0,e=1}g=b+1}return f&&(a&&m.push(-5),n&&m.push(n),m.push(null)),m}}const c4=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function f4(e){return e.replace(c4,d4)}function d4(e,n,i){if(n)return n;if(i.charCodeAt(0)===35){const s=i.charCodeAt(1),c=s===120||s===88;return sS(i.slice(c?2:1),c?16:10)}return im(i)||e}const yS={}.hasOwnProperty;function h4(e,n,i){return typeof n!="string"&&(i=n,n=void 0),m4(i)(o4(s4(i).document().write(u4()(e,n,!0))))}function m4(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(xi),autolinkProtocol:F,autolinkEmail:F,atxHeading:c(gi),blockQuote:c($t),characterEscape:F,characterReference:F,codeFenced:c(Vn),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:c(Vn,u),codeText:c(ka,u),codeTextData:F,data:F,codeFlowValue:F,definition:c(rs),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:c(Pn),hardBreakEscape:c(yi),hardBreakTrailing:c(yi),htmlFlow:c(is,u),htmlFlowData:F,htmlText:c(is,u),htmlTextData:F,image:c(as),label:u,link:c(xi),listItem:c(Aa),listItemValue:b,listOrdered:c(bi,g),listUnordered:c(bi),paragraph:c(Cu),reference:k,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:c(gi),strong:c(ku),thematicBreak:c(Au)},exit:{atxHeading:m(),atxHeadingSequence:Y,autolink:m(),autolinkEmail:Ve,autolinkProtocol:Ke,blockQuote:m(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:ye,characterReferenceMarkerNumeric:ye,characterReferenceValue:de,characterReference:Ee,codeFenced:m(M),codeFencedFence:E,codeFencedFenceInfo:v,codeFencedFenceMeta:w,codeFlowValue:N,codeIndented:m(C),codeText:m(ne),codeTextData:N,data:N,definition:m(),definitionDestinationString:V,definitionLabelString:O,definitionTitleString:A,emphasis:m(),hardBreakEscape:m(te),hardBreakTrailing:m(te),htmlFlow:m(ge),htmlFlowData:N,htmlText:m(le),htmlTextData:N,image:m(ee),label:ce,labelText:ae,lineEnding:$,link:m(P),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:se,resourceDestinationString:D,resourceTitleString:_,resource:J,setextHeading:m(Q),setextHeadingLineSequence:G,setextHeadingText:L,strong:m(),thematicBreak:m()}};xS(n,(e||{}).mdastExtensions||[]);const i={};return a;function a(K){let ie={type:"root",children:[]};const xe={stack:[ie],tokenStack:[],config:n,enter:f,exit:h,buffer:u,resume:y,data:i},Te=[];let Le=-1;for(;++Le<K.length;)if(K[Le][1].type==="listOrdered"||K[Le][1].type==="listUnordered")if(K[Le][0]==="enter")Te.push(Le);else{const It=Te.pop();Le=s(K,It,Le)}for(Le=-1;++Le<K.length;){const It=n[K[Le][0]];yS.call(It,K[Le][1].type)&&It[K[Le][1].type].call(Object.assign({sliceSerialize:K[Le][2].sliceSerialize},xe),K[Le][1])}if(xe.tokenStack.length>0){const It=xe.tokenStack[xe.tokenStack.length-1];(It[1]||mb).call(xe,void 0,It[0])}for(ie.position={start:zr(K.length>0?K[0][1].start:{line:1,column:1,offset:0}),end:zr(K.length>0?K[K.length-2][1].end:{line:1,column:1,offset:0})},Le=-1;++Le<n.transforms.length;)ie=n.transforms[Le](ie)||ie;return ie}function s(K,ie,xe){let Te=ie-1,Le=-1,It=!1,Un,At,ct,Rt;for(;++Te<=xe;){const He=K[Te];switch(He[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{He[0]==="enter"?Le++:Le--,Rt=void 0;break}case"lineEndingBlank":{He[0]==="enter"&&(Un&&!Rt&&!Le&&!ct&&(ct=Te),Rt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Rt=void 0}if(!Le&&He[0]==="enter"&&He[1].type==="listItemPrefix"||Le===-1&&He[0]==="exit"&&(He[1].type==="listUnordered"||He[1].type==="listOrdered")){if(Un){let cr=Te;for(At=void 0;cr--;){const gn=K[cr];if(gn[1].type==="lineEnding"||gn[1].type==="lineEndingBlank"){if(gn[0]==="exit")continue;At&&(K[At][1].type="lineEndingBlank",It=!0),gn[1].type="lineEnding",At=cr}else if(!(gn[1].type==="linePrefix"||gn[1].type==="blockQuotePrefix"||gn[1].type==="blockQuotePrefixWhitespace"||gn[1].type==="blockQuoteMarker"||gn[1].type==="listItemIndent"))break}ct&&(!At||ct<At)&&(Un._spread=!0),Un.end=Object.assign({},At?K[At][1].start:He[1].end),K.splice(At||Te,0,["exit",Un,He[2]]),Te++,xe++}if(He[1].type==="listItemPrefix"){const cr={type:"listItem",_spread:!1,start:Object.assign({},He[1].start),end:void 0};Un=cr,K.splice(Te,0,["enter",cr,He[2]]),Te++,xe++,ct=void 0,Rt=!0}}}return K[ie][1]._spread=It,xe}function c(K,ie){return xe;function xe(Te){f.call(this,K(Te),Te),ie&&ie.call(this,Te)}}function u(){this.stack.push({type:"fragment",children:[]})}function f(K,ie,xe){this.stack[this.stack.length-1].children.push(K),this.stack.push(K),this.tokenStack.push([ie,xe||void 0]),K.position={start:zr(ie.start),end:void 0}}function m(K){return ie;function ie(xe){K&&K.call(this,xe),h.call(this,xe)}}function h(K,ie){const xe=this.stack.pop(),Te=this.tokenStack.pop();if(Te)Te[0].type!==K.type&&(ie?ie.call(this,K,Te[0]):(Te[1]||mb).call(this,K,Te[0]));else throw new Error("Cannot close `"+K.type+"` ("+Ll({start:K.start,end:K.end})+"): it’s not open");xe.position.end=zr(K.end)}function y(){return rm(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function b(K){if(this.data.expectingFirstListItemValue){const ie=this.stack[this.stack.length-2];ie.start=Number.parseInt(this.sliceSerialize(K),10),this.data.expectingFirstListItemValue=void 0}}function v(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.lang=K}function w(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.meta=K}function E(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function M(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.value=K.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function C(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.value=K.replace(/(\r?\n|\r)$/g,"")}function O(K){const ie=this.resume(),xe=this.stack[this.stack.length-1];xe.label=ie,xe.identifier=Cn(this.sliceSerialize(K)).toLowerCase()}function A(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.title=K}function V(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.url=K}function Y(K){const ie=this.stack[this.stack.length-1];if(!ie.depth){const xe=this.sliceSerialize(K).length;ie.depth=xe}}function L(){this.data.setextHeadingSlurpLineEnding=!0}function G(K){const ie=this.stack[this.stack.length-1];ie.depth=this.sliceSerialize(K).codePointAt(0)===61?1:2}function Q(){this.data.setextHeadingSlurpLineEnding=void 0}function F(K){const xe=this.stack[this.stack.length-1].children;let Te=xe[xe.length-1];(!Te||Te.type!=="text")&&(Te=kt(),Te.position={start:zr(K.start),end:void 0},xe.push(Te)),this.stack.push(Te)}function N(K){const ie=this.stack.pop();ie.value+=this.sliceSerialize(K),ie.position.end=zr(K.end)}function $(K){const ie=this.stack[this.stack.length-1];if(this.data.atHardBreak){const xe=ie.children[ie.children.length-1];xe.position.end=zr(K.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(ie.type)&&(F.call(this,K),N.call(this,K))}function te(){this.data.atHardBreak=!0}function ge(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.value=K}function le(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.value=K}function ne(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.value=K}function P(){const K=this.stack[this.stack.length-1];if(this.data.inReference){const ie=this.data.referenceType||"shortcut";K.type+="Reference",K.referenceType=ie,delete K.url,delete K.title}else delete K.identifier,delete K.label;this.data.referenceType=void 0}function ee(){const K=this.stack[this.stack.length-1];if(this.data.inReference){const ie=this.data.referenceType||"shortcut";K.type+="Reference",K.referenceType=ie,delete K.url,delete K.title}else delete K.identifier,delete K.label;this.data.referenceType=void 0}function ae(K){const ie=this.sliceSerialize(K),xe=this.stack[this.stack.length-2];xe.label=f4(ie),xe.identifier=Cn(ie).toLowerCase()}function ce(){const K=this.stack[this.stack.length-1],ie=this.resume(),xe=this.stack[this.stack.length-1];if(this.data.inReference=!0,xe.type==="link"){const Te=K.children;xe.children=Te}else xe.alt=ie}function D(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.url=K}function _(){const K=this.resume(),ie=this.stack[this.stack.length-1];ie.title=K}function J(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function se(K){const ie=this.resume(),xe=this.stack[this.stack.length-1];xe.label=ie,xe.identifier=Cn(this.sliceSerialize(K)).toLowerCase(),this.data.referenceType="full"}function ye(K){this.data.characterReferenceType=K.type}function de(K){const ie=this.sliceSerialize(K),xe=this.data.characterReferenceType;let Te;xe?(Te=sS(ie,xe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Te=im(ie);const Le=this.stack[this.stack.length-1];Le.value+=Te}function Ee(K){const ie=this.stack.pop();ie.position.end=zr(K.end)}function Ke(K){N.call(this,K);const ie=this.stack[this.stack.length-1];ie.url=this.sliceSerialize(K)}function Ve(K){N.call(this,K);const ie=this.stack[this.stack.length-1];ie.url="mailto:"+this.sliceSerialize(K)}function $t(){return{type:"blockquote",children:[]}}function Vn(){return{type:"code",lang:null,meta:null,value:""}}function ka(){return{type:"inlineCode",value:""}}function rs(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Pn(){return{type:"emphasis",children:[]}}function gi(){return{type:"heading",depth:0,children:[]}}function yi(){return{type:"break"}}function is(){return{type:"html",value:""}}function as(){return{type:"image",title:null,url:"",alt:null}}function xi(){return{type:"link",title:null,url:"",children:[]}}function bi(K){return{type:"list",ordered:K.type==="listOrdered",start:null,spread:K._spread,children:[]}}function Aa(K){return{type:"listItem",spread:K._spread,checked:null,children:[]}}function Cu(){return{type:"paragraph",children:[]}}function ku(){return{type:"strong",children:[]}}function kt(){return{type:"text",value:""}}function Au(){return{type:"thematicBreak"}}}function zr(e){return{line:e.line,column:e.column,offset:e.offset}}function xS(e,n){let i=-1;for(;++i<n.length;){const a=n[i];Array.isArray(a)?xS(e,a):p4(e,a)}}function p4(e,n){let i;for(i in n)if(yS.call(n,i))switch(i){case"canContainEols":{const a=n[i];a&&e[i].push(...a);break}case"transforms":{const a=n[i];a&&e[i].push(...a);break}case"enter":case"exit":{const a=n[i];a&&Object.assign(e[i],a);break}}}function mb(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Ll({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Ll({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Ll({start:n.start,end:n.end})+") is still open")}function g4(e){const n=this;n.parser=i;function i(a){return h4(a,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function y4(e,n){const i={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,i),e.applyData(n,i)}function x4(e,n){const i={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,i),[e.applyData(n,i),{type:"text",value:`
`}]}function b4(e,n){const i=n.value?n.value+`
`:"",a={},s=n.lang?n.lang.split(/\s+/):[];s.length>0&&(a.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:a,children:[{type:"text",value:i}]};return n.meta&&(c.data={meta:n.meta}),e.patch(n,c),c=e.applyData(n,c),c={type:"element",tagName:"pre",properties:{},children:[c]},e.patch(n,c),c}function v4(e,n){const i={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function S4(e,n){const i={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function w4(e,n){const i=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(n.identifier).toUpperCase(),s=Ca(a.toLowerCase()),c=e.footnoteOrder.indexOf(a);let u,f=e.footnoteCounts.get(a);f===void 0?(f=0,e.footnoteOrder.push(a),u=e.footnoteOrder.length):u=c+1,f+=1,e.footnoteCounts.set(a,f);const m={type:"element",tagName:"a",properties:{href:"#"+i+"fn-"+s,id:i+"fnref-"+s+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(u)}]};e.patch(n,m);const h={type:"element",tagName:"sup",properties:{},children:[m]};return e.patch(n,h),e.applyData(n,h)}function T4(e,n){const i={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function C4(e,n){if(e.options.allowDangerousHtml){const i={type:"raw",value:n.value};return e.patch(n,i),e.applyData(n,i)}}function bS(e,n){const i=n.referenceType;let a="]";if(i==="collapsed"?a+="[]":i==="full"&&(a+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+a}];const s=e.all(n),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const u=s[s.length-1];return u&&u.type==="text"?u.value+=a:s.push({type:"text",value:a}),s}function k4(e,n){const i=String(n.identifier).toUpperCase(),a=e.definitionById.get(i);if(!a)return bS(e,n);const s={src:Ca(a.url||""),alt:n.alt};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"img",properties:s,children:[]};return e.patch(n,c),e.applyData(n,c)}function A4(e,n){const i={src:Ca(n.url)};n.alt!==null&&n.alt!==void 0&&(i.alt=n.alt),n.title!==null&&n.title!==void 0&&(i.title=n.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,a),e.applyData(n,a)}function E4(e,n){const i={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,i);const a={type:"element",tagName:"code",properties:{},children:[i]};return e.patch(n,a),e.applyData(n,a)}function M4(e,n){const i=String(n.identifier).toUpperCase(),a=e.definitionById.get(i);if(!a)return bS(e,n);const s={href:Ca(a.url||"")};a.title!==null&&a.title!==void 0&&(s.title=a.title);const c={type:"element",tagName:"a",properties:s,children:e.all(n)};return e.patch(n,c),e.applyData(n,c)}function j4(e,n){const i={href:Ca(n.url)};n.title!==null&&n.title!==void 0&&(i.title=n.title);const a={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function D4(e,n,i){const a=e.all(n),s=i?R4(i):vS(n),c={},u=[];if(typeof n.checked=="boolean"){const y=a[0];let g;y&&y.type==="element"&&y.tagName==="p"?g=y:(g={type:"element",tagName:"p",properties:{},children:[]},a.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let f=-1;for(;++f<a.length;){const y=a[f];(s||f!==0||y.type!=="element"||y.tagName!=="p")&&u.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!s?u.push(...y.children):u.push(y)}const m=a[a.length-1];m&&(s||m.type!=="element"||m.tagName!=="p")&&u.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:c,children:u};return e.patch(n,h),e.applyData(n,h)}function R4(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const i=e.children;let a=-1;for(;!n&&++a<i.length;)n=vS(i[a])}return n}function vS(e){const n=e.spread;return n??e.children.length>1}function N4(e,n){const i={},a=e.all(n);let s=-1;for(typeof n.start=="number"&&n.start!==1&&(i.start=n.start);++s<a.length;){const u=a[s];if(u.type==="element"&&u.tagName==="li"&&u.properties&&Array.isArray(u.properties.className)&&u.properties.className.includes("task-list-item")){i.className=["contains-task-list"];break}}const c={type:"element",tagName:n.ordered?"ol":"ul",properties:i,children:e.wrap(a,!0)};return e.patch(n,c),e.applyData(n,c)}function O4(e,n){const i={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function _4(e,n){const i={type:"root",children:e.wrap(e.all(n))};return e.patch(n,i),e.applyData(n,i)}function L4(e,n){const i={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function z4(e,n){const i=e.all(n),a=i.shift(),s=[];if(a){const u={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(n.children[0],u),s.push(u)}if(i.length>0){const u={type:"element",tagName:"tbody",properties:{},children:e.wrap(i,!0)},f=$h(n.children[1]),m=$v(n.children[n.children.length-1]);f&&m&&(u.position={start:f,end:m}),s.push(u)}const c={type:"element",tagName:"table",properties:{},children:e.wrap(s,!0)};return e.patch(n,c),e.applyData(n,c)}function B4(e,n,i){const a=i?i.children:void 0,c=(a?a.indexOf(n):1)===0?"th":"td",u=i&&i.type==="table"?i.align:void 0,f=u?u.length:n.children.length;let m=-1;const h=[];for(;++m<f;){const g=n.children[m],b={},v=u?u[m]:void 0;v&&(b.align=v);let w={type:"element",tagName:c,properties:b,children:[]};g&&(w.children=e.all(g),e.patch(g,w),w=e.applyData(g,w)),h.push(w)}const y={type:"element",tagName:"tr",properties:{},children:e.wrap(h,!0)};return e.patch(n,y),e.applyData(n,y)}function V4(e,n){const i={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}const pb=9,gb=32;function P4(e){const n=String(e),i=/\r?\n|\r/g;let a=i.exec(n),s=0;const c=[];for(;a;)c.push(yb(n.slice(s,a.index),s>0,!0),a[0]),s=a.index+a[0].length,a=i.exec(n);return c.push(yb(n.slice(s),s>0,!1)),c.join("")}function yb(e,n,i){let a=0,s=e.length;if(n){let c=e.codePointAt(a);for(;c===pb||c===gb;)a++,c=e.codePointAt(a)}if(i){let c=e.codePointAt(s-1);for(;c===pb||c===gb;)s--,c=e.codePointAt(s-1)}return s>a?e.slice(a,s):""}function U4(e,n){const i={type:"text",value:P4(String(n.value))};return e.patch(n,i),e.applyData(n,i)}function I4(e,n){const i={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,i),e.applyData(n,i)}const H4={blockquote:y4,break:x4,code:b4,delete:v4,emphasis:S4,footnoteReference:w4,heading:T4,html:C4,imageReference:k4,image:A4,inlineCode:E4,linkReference:M4,link:j4,listItem:D4,list:N4,paragraph:O4,root:_4,strong:L4,table:z4,tableCell:V4,tableRow:B4,text:U4,thematicBreak:I4,toml:Do,yaml:Do,definition:Do,footnoteDefinition:Do};function Do(){}const SS=-1,Su=0,Bl=1,su=2,lm=3,sm=4,om=5,um=6,wS=7,TS=8,xb=typeof self=="object"?self:globalThis,F4=(e,n)=>{const i=(s,c)=>(e.set(c,s),s),a=s=>{if(e.has(s))return e.get(s);const[c,u]=n[s];switch(c){case Su:case SS:return i(u,s);case Bl:{const f=i([],s);for(const m of u)f.push(a(m));return f}case su:{const f=i({},s);for(const[m,h]of u)f[a(m)]=a(h);return f}case lm:return i(new Date(u),s);case sm:{const{source:f,flags:m}=u;return i(new RegExp(f,m),s)}case om:{const f=i(new Map,s);for(const[m,h]of u)f.set(a(m),a(h));return f}case um:{const f=i(new Set,s);for(const m of u)f.add(a(m));return f}case wS:{const{name:f,message:m}=u;return i(new xb[f](m),s)}case TS:return i(BigInt(u),s);case"BigInt":return i(Object(BigInt(u)),s);case"ArrayBuffer":return i(new Uint8Array(u).buffer,u);case"DataView":{const{buffer:f}=new Uint8Array(u);return i(new DataView(f),u)}}return i(new xb[c](u),s)};return a},bb=e=>F4(new Map,e)(0),aa="",{toString:q4}={},{keys:G4}=Object,El=e=>{const n=typeof e;if(n!=="object"||!e)return[Su,n];const i=q4.call(e).slice(8,-1);switch(i){case"Array":return[Bl,aa];case"Object":return[su,aa];case"Date":return[lm,aa];case"RegExp":return[sm,aa];case"Map":return[om,aa];case"Set":return[um,aa];case"DataView":return[Bl,i]}return i.includes("Array")?[Bl,i]:i.includes("Error")?[wS,i]:[su,i]},Ro=([e,n])=>e===Su&&(n==="function"||n==="symbol"),Y4=(e,n,i,a)=>{const s=(u,f)=>{const m=a.push(u)-1;return i.set(f,m),m},c=u=>{if(i.has(u))return i.get(u);let[f,m]=El(u);switch(f){case Su:{let y=u;switch(m){case"bigint":f=TS,y=u.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+m);y=null;break;case"undefined":return s([SS],u)}return s([f,y],u)}case Bl:{if(m){let b=u;return m==="DataView"?b=new Uint8Array(u.buffer):m==="ArrayBuffer"&&(b=new Uint8Array(u)),s([m,[...b]],u)}const y=[],g=s([f,y],u);for(const b of u)y.push(c(b));return g}case su:{if(m)switch(m){case"BigInt":return s([m,u.toString()],u);case"Boolean":case"Number":case"String":return s([m,u.valueOf()],u)}if(n&&"toJSON"in u)return c(u.toJSON());const y=[],g=s([f,y],u);for(const b of G4(u))(e||!Ro(El(u[b])))&&y.push([c(b),c(u[b])]);return g}case lm:return s([f,u.toISOString()],u);case sm:{const{source:y,flags:g}=u;return s([f,{source:y,flags:g}],u)}case om:{const y=[],g=s([f,y],u);for(const[b,v]of u)(e||!(Ro(El(b))||Ro(El(v))))&&y.push([c(b),c(v)]);return g}case um:{const y=[],g=s([f,y],u);for(const b of u)(e||!Ro(El(b)))&&y.push(c(b));return g}}const{message:h}=u;return s([f,{name:m,message:h}],u)};return c},vb=(e,{json:n,lossy:i}={})=>{const a=[];return Y4(!(n||i),!!n,new Map,a)(e),a},ou=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?bb(vb(e,n)):structuredClone(e):(e,n)=>bb(vb(e,n));function X4(e,n){const i=[{type:"text",value:"↩"}];return n>1&&i.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),i}function J4(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function Q4(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=e.options.footnoteBackContent||X4,a=e.options.footnoteBackLabel||J4,s=e.options.footnoteLabel||"Footnotes",c=e.options.footnoteLabelTagName||"h2",u=e.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let m=-1;for(;++m<e.footnoteOrder.length;){const h=e.footnoteById.get(e.footnoteOrder[m]);if(!h)continue;const y=e.all(h),g=String(h.identifier).toUpperCase(),b=Ca(g.toLowerCase());let v=0;const w=[],E=e.footnoteCounts.get(g);for(;E!==void 0&&++v<=E;){w.length>0&&w.push({type:"text",value:" "});let O=typeof i=="string"?i:i(m,v);typeof O=="string"&&(O={type:"text",value:O}),w.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+b+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(m,v),className:["data-footnote-backref"]},children:Array.isArray(O)?O:[O]})}const M=y[y.length-1];if(M&&M.type==="element"&&M.tagName==="p"){const O=M.children[M.children.length-1];O&&O.type==="text"?O.value+=" ":M.children.push({type:"text",value:" "}),M.children.push(...w)}else y.push(...w);const C={type:"element",tagName:"li",properties:{id:n+"fn-"+b},children:e.wrap(y,!0)};e.patch(h,C),f.push(C)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...ou(u),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(f,!0)},{type:"text",value:`
`}]}}const wu=(function(e){if(e==null)return $4;if(typeof e=="function")return Tu(e);if(typeof e=="object")return Array.isArray(e)?K4(e):Z4(e);if(typeof e=="string")return W4(e);throw new Error("Expected function, string, or object as test")});function K4(e){const n=[];let i=-1;for(;++i<e.length;)n[i]=wu(e[i]);return Tu(a);function a(...s){let c=-1;for(;++c<n.length;)if(n[c].apply(this,s))return!0;return!1}}function Z4(e){const n=e;return Tu(i);function i(a){const s=a;let c;for(c in e)if(s[c]!==n[c])return!1;return!0}}function W4(e){return Tu(n);function n(i){return i&&i.type===e}}function Tu(e){return n;function n(i,a,s){return!!(e5(i)&&e.call(this,i,typeof a=="number"?a:void 0,s||void 0))}}function $4(){return!0}function e5(e){return e!==null&&typeof e=="object"&&"type"in e}const CS=[],t5=!0,uh=!1,n5="skip";function kS(e,n,i,a){let s;typeof n=="function"&&typeof i!="function"?(a=i,i=n):s=n;const c=wu(s),u=a?-1:1;f(e,void 0,[])();function f(m,h,y){const g=m&&typeof m=="object"?m:{};if(typeof g.type=="string"){const v=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(m.type+(v?"<"+v+">":""))+")"})}return b;function b(){let v=CS,w,E,M;if((!n||c(m,h,y[y.length-1]||void 0))&&(v=r5(i(m,y)),v[0]===uh))return v;if("children"in m&&m.children){const C=m;if(C.children&&v[0]!==n5)for(E=(a?C.children.length:-1)+u,M=y.concat(C);E>-1&&E<C.children.length;){const O=C.children[E];if(w=f(O,E,M)(),w[0]===uh)return w;E=typeof w[1]=="number"?w[1]:E+u}}return v}}}function r5(e){return Array.isArray(e)?e:typeof e=="number"?[t5,e]:e==null?CS:[e]}function cm(e,n,i,a){let s,c,u;typeof n=="function"&&typeof i!="function"?(c=void 0,u=n,s=i):(c=n,u=i,s=a),kS(e,c,f,s);function f(m,h){const y=h[h.length-1],g=y?y.children.indexOf(m):void 0;return u(m,g,y)}}const ch={}.hasOwnProperty,i5={};function a5(e,n){const i=n||i5,a=new Map,s=new Map,c=new Map,u={...H4,...i.handlers},f={all:h,applyData:s5,definitionById:a,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:u,one:m,options:i,patch:l5,wrap:u5};return cm(e,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const g=y.type==="definition"?a:s,b=String(y.identifier).toUpperCase();g.has(b)||g.set(b,y)}}),f;function m(y,g){const b=y.type,v=f.handlers[b];if(ch.call(f.handlers,b)&&v)return v(f,y,g);if(f.options.passThrough&&f.options.passThrough.includes(b)){if("children"in y){const{children:E,...M}=y,C=ou(M);return C.children=f.all(y),C}return ou(y)}return(f.options.unknownHandler||o5)(f,y,g)}function h(y){const g=[];if("children"in y){const b=y.children;let v=-1;for(;++v<b.length;){const w=f.one(b[v],y);if(w){if(v&&b[v-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Sb(w.value)),!Array.isArray(w)&&w.type==="element")){const E=w.children[0];E&&E.type==="text"&&(E.value=Sb(E.value))}Array.isArray(w)?g.push(...w):g.push(w)}}}return g}}function l5(e,n){e.position&&(n.position=JD(e))}function s5(e,n){let i=n;if(e&&e.data){const a=e.data.hName,s=e.data.hChildren,c=e.data.hProperties;if(typeof a=="string")if(i.type==="element")i.tagName=a;else{const u="children"in i?i.children:[i];i={type:"element",tagName:a,properties:{},children:u}}i.type==="element"&&c&&Object.assign(i.properties,ou(c)),"children"in i&&i.children&&s!==null&&s!==void 0&&(i.children=s)}return i}function o5(e,n){const i=n.data||{},a="value"in n&&!(ch.call(i,"hProperties")||ch.call(i,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function u5(e,n){const i=[];let a=-1;for(n&&i.push({type:"text",value:`
`});++a<e.length;)a&&i.push({type:"text",value:`
`}),i.push(e[a]);return n&&e.length>0&&i.push({type:"text",value:`
`}),i}function Sb(e){let n=0,i=e.charCodeAt(n);for(;i===9||i===32;)n++,i=e.charCodeAt(n);return e.slice(n)}function wb(e,n){const i=a5(e,n),a=i.one(e,void 0),s=Q4(i),c=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function c5(e,n){return e&&"run"in e?async function(i,a){const s=wb(i,{file:a,...n});await e.run(s,a)}:function(i,a){return wb(i,{file:a,...e||n})}}function Tb(e){if(e)throw e}var bd,Cb;function f5(){if(Cb)return bd;Cb=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):n.call(h)==="[object Array]"},c=function(h){if(!h||n.call(h)!=="[object Object]")return!1;var y=e.call(h,"constructor"),g=h.constructor&&h.constructor.prototype&&e.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!y&&!g)return!1;var b;for(b in h);return typeof b>"u"||e.call(h,b)},u=function(h,y){i&&y.name==="__proto__"?i(h,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):h[y.name]=y.newValue},f=function(h,y){if(y==="__proto__")if(e.call(h,y)){if(a)return a(h,y).value}else return;return h[y]};return bd=function m(){var h,y,g,b,v,w,E=arguments[0],M=1,C=arguments.length,O=!1;for(typeof E=="boolean"&&(O=E,E=arguments[1]||{},M=2),(E==null||typeof E!="object"&&typeof E!="function")&&(E={});M<C;++M)if(h=arguments[M],h!=null)for(y in h)g=f(E,y),b=f(h,y),E!==b&&(O&&b&&(c(b)||(v=s(b)))?(v?(v=!1,w=g&&s(g)?g:[]):w=g&&c(g)?g:{},u(E,{name:y,newValue:m(O,w,b)})):typeof b<"u"&&u(E,{name:y,newValue:b}));return E},bd}var d5=f5();const vd=ph(d5);function fh(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function h5(){const e=[],n={run:i,use:a};return n;function i(...s){let c=-1;const u=s.pop();if(typeof u!="function")throw new TypeError("Expected function as last argument, not "+u);f(null,...s);function f(m,...h){const y=e[++c];let g=-1;if(m){u(m);return}for(;++g<s.length;)(h[g]===null||h[g]===void 0)&&(h[g]=s[g]);s=h,y?m5(y,f)(...h):u(null,...h)}}function a(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),n}}function m5(e,n){let i;return a;function a(...u){const f=e.length>u.length;let m;f&&u.push(s);try{m=e.apply(this,u)}catch(h){const y=h;if(f&&i)throw y;return s(y)}f||(m&&m.then&&typeof m.then=="function"?m.then(c,s):m instanceof Error?s(m):c(m))}function s(u,...f){i||(i=!0,n(u,...f))}function c(u){s(null,u)}}const Nn={basename:p5,dirname:g5,extname:y5,join:x5,sep:"/"};function p5(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');ns(e);let i=0,a=-1,s=e.length,c;if(n===void 0||n.length===0||n.length>e.length){for(;s--;)if(e.codePointAt(s)===47){if(c){i=s+1;break}}else a<0&&(c=!0,a=s+1);return a<0?"":e.slice(i,a)}if(n===e)return"";let u=-1,f=n.length-1;for(;s--;)if(e.codePointAt(s)===47){if(c){i=s+1;break}}else u<0&&(c=!0,u=s+1),f>-1&&(e.codePointAt(s)===n.codePointAt(f--)?f<0&&(a=s):(f=-1,a=u));return i===a?a=u:a<0&&(a=e.length),e.slice(i,a)}function g5(e){if(ns(e),e.length===0)return".";let n=-1,i=e.length,a;for(;--i;)if(e.codePointAt(i)===47){if(a){n=i;break}}else a||(a=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function y5(e){ns(e);let n=e.length,i=-1,a=0,s=-1,c=0,u;for(;n--;){const f=e.codePointAt(n);if(f===47){if(u){a=n+1;break}continue}i<0&&(u=!0,i=n+1),f===46?s<0?s=n:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||i<0||c===0||c===1&&s===i-1&&s===a+1?"":e.slice(s,i)}function x5(...e){let n=-1,i;for(;++n<e.length;)ns(e[n]),e[n]&&(i=i===void 0?e[n]:i+"/"+e[n]);return i===void 0?".":b5(i)}function b5(e){ns(e);const n=e.codePointAt(0)===47;let i=v5(e,!n);return i.length===0&&!n&&(i="."),i.length>0&&e.codePointAt(e.length-1)===47&&(i+="/"),n?"/"+i:i}function v5(e,n){let i="",a=0,s=-1,c=0,u=-1,f,m;for(;++u<=e.length;){if(u<e.length)f=e.codePointAt(u);else{if(f===47)break;f=47}if(f===47){if(!(s===u-1||c===1))if(s!==u-1&&c===2){if(i.length<2||a!==2||i.codePointAt(i.length-1)!==46||i.codePointAt(i.length-2)!==46){if(i.length>2){if(m=i.lastIndexOf("/"),m!==i.length-1){m<0?(i="",a=0):(i=i.slice(0,m),a=i.length-1-i.lastIndexOf("/")),s=u,c=0;continue}}else if(i.length>0){i="",a=0,s=u,c=0;continue}}n&&(i=i.length>0?i+"/..":"..",a=2)}else i.length>0?i+="/"+e.slice(s+1,u):i=e.slice(s+1,u),a=u-s-1;s=u,c=0}else f===46&&c>-1?c++:c=-1}return i}function ns(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const S5={cwd:w5};function w5(){return"/"}function dh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function T5(e){if(typeof e=="string")e=new URL(e);else if(!dh(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return C5(e)}function C5(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const n=e.pathname;let i=-1;for(;++i<n.length;)if(n.codePointAt(i)===37&&n.codePointAt(i+1)===50){const a=n.codePointAt(i+2);if(a===70||a===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(n)}const Sd=["history","path","basename","stem","extname","dirname"];class AS{constructor(n){let i;n?dh(n)?i={path:n}:typeof n=="string"||k5(n)?i={value:n}:i=n:i={},this.cwd="cwd"in i?"":S5.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Sd.length;){const c=Sd[a];c in i&&i[c]!==void 0&&i[c]!==null&&(this[c]=c==="history"?[...i[c]]:i[c])}let s;for(s in i)Sd.includes(s)||(this[s]=i[s])}get basename(){return typeof this.path=="string"?Nn.basename(this.path):void 0}set basename(n){Td(n,"basename"),wd(n,"basename"),this.path=Nn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Nn.dirname(this.path):void 0}set dirname(n){kb(this.basename,"dirname"),this.path=Nn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Nn.extname(this.path):void 0}set extname(n){if(wd(n,"extname"),kb(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Nn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){dh(n)&&(n=T5(n)),Td(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Nn.basename(this.path,this.extname):void 0}set stem(n){Td(n,"stem"),wd(n,"stem"),this.path=Nn.join(this.dirname||"",n+(this.extname||""))}fail(n,i,a){const s=this.message(n,i,a);throw s.fatal=!0,s}info(n,i,a){const s=this.message(n,i,a);return s.fatal=void 0,s}message(n,i,a){const s=new Ct(n,i,a);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function wd(e,n){if(e&&e.includes(Nn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Nn.sep+"`")}function Td(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function kb(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function k5(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const A5=(function(e){const a=this.constructor.prototype,s=a[e],c=function(){return s.apply(c,arguments)};return Object.setPrototypeOf(c,a),c}),E5={}.hasOwnProperty;class fm extends A5{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=h5()}copy(){const n=new fm;let i=-1;for(;++i<this.attachers.length;){const a=this.attachers[i];n.use(...a)}return n.data(vd(!0,{},this.namespace)),n}data(n,i){return typeof n=="string"?arguments.length===2?(Ad("data",this.frozen),this.namespace[n]=i,this):E5.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Ad("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[i,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const s=i.call(n,...a);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const i=No(n),a=this.parser||this.Parser;return Cd("parse",a),a(String(i),i)}process(n,i){const a=this;return this.freeze(),Cd("process",this.parser||this.Parser),kd("process",this.compiler||this.Compiler),i?s(void 0,i):new Promise(s);function s(c,u){const f=No(n),m=a.parse(f);a.run(m,f,function(y,g,b){if(y||!g||!b)return h(y);const v=g,w=a.stringify(v,b);D5(w)?b.value=w:b.result=w,h(y,b)});function h(y,g){y||!g?u(y):c?c(g):i(void 0,g)}}}processSync(n){let i=!1,a;return this.freeze(),Cd("processSync",this.parser||this.Parser),kd("processSync",this.compiler||this.Compiler),this.process(n,s),Eb("processSync","process",i),a;function s(c,u){i=!0,Tb(c),a=u}}run(n,i,a){Ab(n),this.freeze();const s=this.transformers;return!a&&typeof i=="function"&&(a=i,i=void 0),a?c(void 0,a):new Promise(c);function c(u,f){const m=No(i);s.run(n,m,h);function h(y,g,b){const v=g||n;y?f(y):u?u(v):a(void 0,v,b)}}}runSync(n,i){let a=!1,s;return this.run(n,i,c),Eb("runSync","run",a),s;function c(u,f){Tb(u),s=f,a=!0}}stringify(n,i){this.freeze();const a=No(i),s=this.compiler||this.Compiler;return kd("stringify",s),Ab(n),s(n,a)}use(n,...i){const a=this.attachers,s=this.namespace;if(Ad("use",this.frozen),n!=null)if(typeof n=="function")m(n,i);else if(typeof n=="object")Array.isArray(n)?f(n):u(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function c(h){if(typeof h=="function")m(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[y,...g]=h;m(y,g)}else u(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function u(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(h.plugins),h.settings&&(s.settings=vd(!0,s.settings,h.settings))}function f(h){let y=-1;if(h!=null)if(Array.isArray(h))for(;++y<h.length;){const g=h[y];c(g)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function m(h,y){let g=-1,b=-1;for(;++g<a.length;)if(a[g][0]===h){b=g;break}if(b===-1)a.push([h,...y]);else if(y.length>0){let[v,...w]=y;const E=a[b][1];fh(E)&&fh(v)&&(v=vd(!0,E,v)),a[b]=[h,v,...w]}}}}const M5=new fm().freeze();function Cd(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function kd(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ad(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ab(e){if(!fh(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Eb(e,n,i){if(!i)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function No(e){return j5(e)?e:new AS(e)}function j5(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function D5(e){return typeof e=="string"||R5(e)}function R5(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const N5="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Mb=[],jb={allowDangerousHtml:!0},O5=/^(https?|ircs?|mailto|xmpp)$/i,_5=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function L5(e){const n=z5(e),i=B5(e);return V5(n.runSync(n.parse(i),i),e)}function z5(e){const n=e.rehypePlugins||Mb,i=e.remarkPlugins||Mb,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...jb}:jb;return M5().use(g4).use(i).use(c5,a).use(n)}function B5(e){const n=e.children||"",i=new AS;return typeof n=="string"&&(i.value=n),i}function V5(e,n){const i=n.allowedElements,a=n.allowElement,s=n.components,c=n.disallowedElements,u=n.skipHtml,f=n.unwrapDisallowed,m=n.urlTransform||P5;for(const y of _5)Object.hasOwn(n,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+N5+y.id,void 0);return cm(e,h),$D(e,{Fragment:x.Fragment,components:s,ignoreInvalidStyle:!0,jsx:x.jsx,jsxs:x.jsxs,passKeys:!0,passNode:!0});function h(y,g,b){if(y.type==="raw"&&b&&typeof g=="number")return u?b.children.splice(g,1):b.children[g]={type:"text",value:y.value},g;if(y.type==="element"){let v;for(v in gd)if(Object.hasOwn(gd,v)&&Object.hasOwn(y.properties,v)){const w=y.properties[v],E=gd[v];(E===null||E.includes(y.tagName))&&(y.properties[v]=m(String(w||""),v,y))}}if(y.type==="element"){let v=i?!i.includes(y.tagName):c?c.includes(y.tagName):!1;if(!v&&a&&typeof g=="number"&&(v=!a(y,g,b)),v&&b&&typeof g=="number")return f&&y.children?b.children.splice(g,1,...y.children):b.children.splice(g,1),g}}}function P5(e){const n=e.indexOf(":"),i=e.indexOf("?"),a=e.indexOf("#"),s=e.indexOf("/");return n===-1||s!==-1&&n>s||i!==-1&&n>i||a!==-1&&n>a||O5.test(e.slice(0,n))?e:""}function Db(e,n){const i=String(e);if(typeof n!="string")throw new TypeError("Expected character");let a=0,s=i.indexOf(n);for(;s!==-1;)a++,s=i.indexOf(n,s+n.length);return a}function U5(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function I5(e,n,i){const s=wu((i||{}).ignore||[]),c=H5(n);let u=-1;for(;++u<c.length;)kS(e,"text",f);function f(h,y){let g=-1,b;for(;++g<y.length;){const v=y[g],w=b?b.children:void 0;if(s(v,w?w.indexOf(v):void 0,b))return;b=v}if(b)return m(h,y)}function m(h,y){const g=y[y.length-1],b=c[u][0],v=c[u][1];let w=0;const M=g.children.indexOf(h);let C=!1,O=[];b.lastIndex=0;let A=b.exec(h.value);for(;A;){const V=A.index,Y={index:A.index,input:A.input,stack:[...y,h]};let L=v(...A,Y);if(typeof L=="string"&&(L=L.length>0?{type:"text",value:L}:void 0),L===!1?b.lastIndex=V+1:(w!==V&&O.push({type:"text",value:h.value.slice(w,V)}),Array.isArray(L)?O.push(...L):L&&O.push(L),w=V+A[0].length,C=!0),!b.global)break;A=b.exec(h.value)}return C?(w<h.value.length&&O.push({type:"text",value:h.value.slice(w)}),g.children.splice(M,1,...O)):O=[h],M+O.length}}function H5(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const i=!e[0]||Array.isArray(e[0])?e:[e];let a=-1;for(;++a<i.length;){const s=i[a];n.push([F5(s[0]),q5(s[1])])}return n}function F5(e){return typeof e=="string"?new RegExp(U5(e),"g"):e}function q5(e){return typeof e=="function"?e:function(){return e}}const Ed="phrasing",Md=["autolink","link","image","label"];function G5(){return{transforms:[W5],enter:{literalAutolink:X5,literalAutolinkEmail:jd,literalAutolinkHttp:jd,literalAutolinkWww:jd},exit:{literalAutolink:Z5,literalAutolinkEmail:K5,literalAutolinkHttp:J5,literalAutolinkWww:Q5}}}function Y5(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ed,notInConstruct:Md},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ed,notInConstruct:Md},{character:":",before:"[ps]",after:"\\/",inConstruct:Ed,notInConstruct:Md}]}}function X5(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function jd(e){this.config.enter.autolinkProtocol.call(this,e)}function J5(e){this.config.exit.autolinkProtocol.call(this,e)}function Q5(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function K5(e){this.config.exit.autolinkEmail.call(this,e)}function Z5(e){this.exit(e)}function W5(e){I5(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,$5],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),eO]],{ignore:["link","linkReference"]})}function $5(e,n,i,a,s){let c="";if(!ES(s)||(/^w/i.test(n)&&(i=n+i,n="",c="http://"),!tO(i)))return!1;const u=nO(i+a);if(!u[0])return!1;const f={type:"link",title:null,url:c+n+u[0],children:[{type:"text",value:n+u[0]}]};return u[1]?[f,{type:"text",value:u[1]}]:f}function eO(e,n,i,a){return!ES(a,!0)||/[-\d_]$/.test(i)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+i,children:[{type:"text",value:n+"@"+i}]}}function tO(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function nO(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let i=n[0],a=i.indexOf(")");const s=Db(e,"(");let c=Db(e,")");for(;a!==-1&&s>c;)e+=i.slice(0,a+1),i=i.slice(a+1),a=i.indexOf(")"),c++;return[e,i]}function ES(e,n){const i=e.input.charCodeAt(e.index-1);return(e.index===0||mi(i)||bu(i))&&(!n||i!==47)}MS.peek=fO;function rO(){this.buffer()}function iO(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function aO(){this.buffer()}function lO(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function sO(e){const n=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=Cn(this.sliceSerialize(e)).toLowerCase(),i.label=n}function oO(e){this.exit(e)}function uO(e){const n=this.resume(),i=this.stack[this.stack.length-1];i.type,i.identifier=Cn(this.sliceSerialize(e)).toLowerCase(),i.label=n}function cO(e){this.exit(e)}function fO(){return"["}function MS(e,n,i,a){const s=i.createTracker(a);let c=s.move("[^");const u=i.enter("footnoteReference"),f=i.enter("reference");return c+=s.move(i.safe(i.associationId(e),{after:"]",before:c})),f(),u(),c+=s.move("]"),c}function dO(){return{enter:{gfmFootnoteCallString:rO,gfmFootnoteCall:iO,gfmFootnoteDefinitionLabelString:aO,gfmFootnoteDefinition:lO},exit:{gfmFootnoteCallString:sO,gfmFootnoteCall:oO,gfmFootnoteDefinitionLabelString:uO,gfmFootnoteDefinition:cO}}}function hO(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:i,footnoteReference:MS},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function i(a,s,c,u){const f=c.createTracker(u);let m=f.move("[^");const h=c.enter("footnoteDefinition"),y=c.enter("label");return m+=f.move(c.safe(c.associationId(a),{before:m,after:"]"})),y(),m+=f.move("]:"),a.children&&a.children.length>0&&(f.shift(4),m+=f.move((n?`
`:" ")+c.indentLines(c.containerFlow(a,f.current()),n?jS:mO))),h(),m}}function mO(e,n,i){return n===0?e:jS(e,n,i)}function jS(e,n,i){return(i?"":"    ")+e}const pO=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];DS.peek=vO;function gO(){return{canContainEols:["delete"],enter:{strikethrough:xO},exit:{strikethrough:bO}}}function yO(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:pO}],handlers:{delete:DS}}}function xO(e){this.enter({type:"delete",children:[]},e)}function bO(e){this.exit(e)}function DS(e,n,i,a){const s=i.createTracker(a),c=i.enter("strikethrough");let u=s.move("~~");return u+=i.containerPhrasing(e,{...s.current(),before:u,after:"~"}),u+=s.move("~~"),c(),u}function vO(){return"~"}function SO(e){return e.length}function wO(e,n){const i=n||{},a=(i.align||[]).concat(),s=i.stringLength||SO,c=[],u=[],f=[],m=[];let h=0,y=-1;for(;++y<e.length;){const E=[],M=[];let C=-1;for(e[y].length>h&&(h=e[y].length);++C<e[y].length;){const O=TO(e[y][C]);if(i.alignDelimiters!==!1){const A=s(O);M[C]=A,(m[C]===void 0||A>m[C])&&(m[C]=A)}E.push(O)}u[y]=E,f[y]=M}let g=-1;if(typeof a=="object"&&"length"in a)for(;++g<h;)c[g]=Rb(a[g]);else{const E=Rb(a);for(;++g<h;)c[g]=E}g=-1;const b=[],v=[];for(;++g<h;){const E=c[g];let M="",C="";E===99?(M=":",C=":"):E===108?M=":":E===114&&(C=":");let O=i.alignDelimiters===!1?1:Math.max(1,m[g]-M.length-C.length);const A=M+"-".repeat(O)+C;i.alignDelimiters!==!1&&(O=M.length+O+C.length,O>m[g]&&(m[g]=O),v[g]=O),b[g]=A}u.splice(1,0,b),f.splice(1,0,v),y=-1;const w=[];for(;++y<u.length;){const E=u[y],M=f[y];g=-1;const C=[];for(;++g<h;){const O=E[g]||"";let A="",V="";if(i.alignDelimiters!==!1){const Y=m[g]-(M[g]||0),L=c[g];L===114?A=" ".repeat(Y):L===99?Y%2?(A=" ".repeat(Y/2+.5),V=" ".repeat(Y/2-.5)):(A=" ".repeat(Y/2),V=A):V=" ".repeat(Y)}i.delimiterStart!==!1&&!g&&C.push("|"),i.padding!==!1&&!(i.alignDelimiters===!1&&O==="")&&(i.delimiterStart!==!1||g)&&C.push(" "),i.alignDelimiters!==!1&&C.push(A),C.push(O),i.alignDelimiters!==!1&&C.push(V),i.padding!==!1&&C.push(" "),(i.delimiterEnd!==!1||g!==h-1)&&C.push("|")}w.push(i.delimiterEnd===!1?C.join("").replace(/ +$/,""):C.join(""))}return w.join(`
`)}function TO(e){return e==null?"":String(e)}function Rb(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function CO(e,n,i,a){const s=i.enter("blockquote"),c=i.createTracker(a);c.move("> "),c.shift(2);const u=i.indentLines(i.containerFlow(e,c.current()),kO);return s(),u}function kO(e,n,i){return">"+(i?"":" ")+e}function AO(e,n){return Nb(e,n.inConstruct,!0)&&!Nb(e,n.notInConstruct,!1)}function Nb(e,n,i){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return i;let a=-1;for(;++a<n.length;)if(e.includes(n[a]))return!0;return!1}function Ob(e,n,i,a){let s=-1;for(;++s<i.unsafe.length;)if(i.unsafe[s].character===`
`&&AO(i.stack,i.unsafe[s]))return/[ \t]/.test(a.before)?"":" ";return`\\
`}function EO(e,n){const i=String(e);let a=i.indexOf(n),s=a,c=0,u=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;a!==-1;)a===s?++c>u&&(u=c):c=1,s=a+n.length,a=i.indexOf(n,s);return u}function MO(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function jO(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function DO(e,n,i,a){const s=jO(i),c=e.value||"",u=s==="`"?"GraveAccent":"Tilde";if(MO(e,i)){const g=i.enter("codeIndented"),b=i.indentLines(c,RO);return g(),b}const f=i.createTracker(a),m=s.repeat(Math.max(EO(c,s)+1,3)),h=i.enter("codeFenced");let y=f.move(m);if(e.lang){const g=i.enter(`codeFencedLang${u}`);y+=f.move(i.safe(e.lang,{before:y,after:" ",encode:["`"],...f.current()})),g()}if(e.lang&&e.meta){const g=i.enter(`codeFencedMeta${u}`);y+=f.move(" "),y+=f.move(i.safe(e.meta,{before:y,after:`
`,encode:["`"],...f.current()})),g()}return y+=f.move(`
`),c&&(y+=f.move(c+`
`)),y+=f.move(m),h(),y}function RO(e,n,i){return(i?"":"    ")+e}function dm(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function NO(e,n,i,a){const s=dm(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("definition");let f=i.enter("label");const m=i.createTracker(a);let h=m.move("[");return h+=m.move(i.safe(i.associationId(e),{before:h,after:"]",...m.current()})),h+=m.move("]: "),f(),!e.url||/[\0- \u007F]/.test(e.url)?(f=i.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(i.safe(e.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(f=i.enter("destinationRaw"),h+=m.move(i.safe(e.url,{before:h,after:e.title?" ":`
`,...m.current()}))),f(),e.title&&(f=i.enter(`title${c}`),h+=m.move(" "+s),h+=m.move(i.safe(e.title,{before:h,after:s,...m.current()})),h+=m.move(s),f()),u(),h}function OO(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function Gl(e){return"&#x"+e.toString(16).toUpperCase()+";"}function uu(e,n,i){const a=ma(e),s=ma(n);return a===void 0?s===void 0?i==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:a===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}RS.peek=_O;function RS(e,n,i,a){const s=OO(i),c=i.enter("emphasis"),u=i.createTracker(a),f=u.move(s);let m=u.move(i.containerPhrasing(e,{after:s,before:f,...u.current()}));const h=m.charCodeAt(0),y=uu(a.before.charCodeAt(a.before.length-1),h,s);y.inside&&(m=Gl(h)+m.slice(1));const g=m.charCodeAt(m.length-1),b=uu(a.after.charCodeAt(0),g,s);b.inside&&(m=m.slice(0,-1)+Gl(g));const v=u.move(s);return c(),i.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},f+m+v}function _O(e,n,i){return i.options.emphasis||"*"}function LO(e,n){let i=!1;return cm(e,function(a){if("value"in a&&/\r?\n|\r/.test(a.value)||a.type==="break")return i=!0,uh}),!!((!e.depth||e.depth<3)&&rm(e)&&(n.options.setext||i))}function zO(e,n,i,a){const s=Math.max(Math.min(6,e.depth||1),1),c=i.createTracker(a);if(LO(e,i)){const y=i.enter("headingSetext"),g=i.enter("phrasing"),b=i.containerPhrasing(e,{...c.current(),before:`
`,after:`
`});return g(),y(),b+`
`+(s===1?"=":"-").repeat(b.length-(Math.max(b.lastIndexOf("\r"),b.lastIndexOf(`
`))+1))}const u="#".repeat(s),f=i.enter("headingAtx"),m=i.enter("phrasing");c.move(u+" ");let h=i.containerPhrasing(e,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(h)&&(h=Gl(h.charCodeAt(0))+h.slice(1)),h=h?u+" "+h:u,i.options.closeAtx&&(h+=" "+u),m(),f(),h}NS.peek=BO;function NS(e){return e.value||""}function BO(){return"<"}OS.peek=VO;function OS(e,n,i,a){const s=dm(i),c=s==='"'?"Quote":"Apostrophe",u=i.enter("image");let f=i.enter("label");const m=i.createTracker(a);let h=m.move("![");return h+=m.move(i.safe(e.alt,{before:h,after:"]",...m.current()})),h+=m.move("]("),f(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(f=i.enter("destinationLiteral"),h+=m.move("<"),h+=m.move(i.safe(e.url,{before:h,after:">",...m.current()})),h+=m.move(">")):(f=i.enter("destinationRaw"),h+=m.move(i.safe(e.url,{before:h,after:e.title?" ":")",...m.current()}))),f(),e.title&&(f=i.enter(`title${c}`),h+=m.move(" "+s),h+=m.move(i.safe(e.title,{before:h,after:s,...m.current()})),h+=m.move(s),f()),h+=m.move(")"),u(),h}function VO(){return"!"}_S.peek=PO;function _S(e,n,i,a){const s=e.referenceType,c=i.enter("imageReference");let u=i.enter("label");const f=i.createTracker(a);let m=f.move("![");const h=i.safe(e.alt,{before:m,after:"]",...f.current()});m+=f.move(h+"]["),u();const y=i.stack;i.stack=[],u=i.enter("reference");const g=i.safe(i.associationId(e),{before:m,after:"]",...f.current()});return u(),i.stack=y,c(),s==="full"||!h||h!==g?m+=f.move(g+"]"):s==="shortcut"?m=m.slice(0,-1):m+=f.move("]"),m}function PO(){return"!"}LS.peek=UO;function LS(e,n,i){let a=e.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(a);)s+="`";for(/[^ \r\n]/.test(a)&&(/^[ \r\n]/.test(a)&&/[ \r\n]$/.test(a)||/^`|`$/.test(a))&&(a=" "+a+" ");++c<i.unsafe.length;){const u=i.unsafe[c],f=i.compilePattern(u);let m;if(u.atBreak)for(;m=f.exec(a);){let h=m.index;a.charCodeAt(h)===10&&a.charCodeAt(h-1)===13&&h--,a=a.slice(0,h)+" "+a.slice(m.index+1)}}return s+a+s}function UO(){return"`"}function zS(e,n){const i=rm(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(i===e.url||"mailto:"+i===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}BS.peek=IO;function BS(e,n,i,a){const s=dm(i),c=s==='"'?"Quote":"Apostrophe",u=i.createTracker(a);let f,m;if(zS(e,i)){const y=i.stack;i.stack=[],f=i.enter("autolink");let g=u.move("<");return g+=u.move(i.containerPhrasing(e,{before:g,after:">",...u.current()})),g+=u.move(">"),f(),i.stack=y,g}f=i.enter("link"),m=i.enter("label");let h=u.move("[");return h+=u.move(i.containerPhrasing(e,{before:h,after:"](",...u.current()})),h+=u.move("]("),m(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(m=i.enter("destinationLiteral"),h+=u.move("<"),h+=u.move(i.safe(e.url,{before:h,after:">",...u.current()})),h+=u.move(">")):(m=i.enter("destinationRaw"),h+=u.move(i.safe(e.url,{before:h,after:e.title?" ":")",...u.current()}))),m(),e.title&&(m=i.enter(`title${c}`),h+=u.move(" "+s),h+=u.move(i.safe(e.title,{before:h,after:s,...u.current()})),h+=u.move(s),m()),h+=u.move(")"),f(),h}function IO(e,n,i){return zS(e,i)?"<":"["}VS.peek=HO;function VS(e,n,i,a){const s=e.referenceType,c=i.enter("linkReference");let u=i.enter("label");const f=i.createTracker(a);let m=f.move("[");const h=i.containerPhrasing(e,{before:m,after:"]",...f.current()});m+=f.move(h+"]["),u();const y=i.stack;i.stack=[],u=i.enter("reference");const g=i.safe(i.associationId(e),{before:m,after:"]",...f.current()});return u(),i.stack=y,c(),s==="full"||!h||h!==g?m+=f.move(g+"]"):s==="shortcut"?m=m.slice(0,-1):m+=f.move("]"),m}function HO(){return"["}function hm(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function FO(e){const n=hm(e),i=e.options.bulletOther;if(!i)return n==="*"?"-":"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(i===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+i+"`) to be different");return i}function qO(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function PS(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function GO(e,n,i,a){const s=i.enter("list"),c=i.bulletCurrent;let u=e.ordered?qO(i):hm(i);const f=e.ordered?u==="."?")":".":FO(i);let m=n&&i.bulletLastUsed?u===i.bulletLastUsed:!1;if(!e.ordered){const y=e.children?e.children[0]:void 0;if((u==="*"||u==="-")&&y&&(!y.children||!y.children[0])&&i.stack[i.stack.length-1]==="list"&&i.stack[i.stack.length-2]==="listItem"&&i.stack[i.stack.length-3]==="list"&&i.stack[i.stack.length-4]==="listItem"&&i.indexStack[i.indexStack.length-1]===0&&i.indexStack[i.indexStack.length-2]===0&&i.indexStack[i.indexStack.length-3]===0&&(m=!0),PS(i)===u&&y){let g=-1;for(;++g<e.children.length;){const b=e.children[g];if(b&&b.type==="listItem"&&b.children&&b.children[0]&&b.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(u=f),i.bulletCurrent=u;const h=i.containerFlow(e,a);return i.bulletLastUsed=u,i.bulletCurrent=c,s(),h}function YO(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function XO(e,n,i,a){const s=YO(i);let c=i.bulletCurrent||hm(i);n&&n.type==="list"&&n.ordered&&(c=(typeof n.start=="number"&&n.start>-1?n.start:1)+(i.options.incrementListMarker===!1?0:n.children.indexOf(e))+c);let u=c.length+1;(s==="tab"||s==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(u=Math.ceil(u/4)*4);const f=i.createTracker(a);f.move(c+" ".repeat(u-c.length)),f.shift(u);const m=i.enter("listItem"),h=i.indentLines(i.containerFlow(e,f.current()),y);return m(),h;function y(g,b,v){return b?(v?"":" ".repeat(u))+g:(v?c:c+" ".repeat(u-c.length))+g}}function JO(e,n,i,a){const s=i.enter("paragraph"),c=i.enter("phrasing"),u=i.containerPhrasing(e,a);return c(),s(),u}const QO=wu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function KO(e,n,i,a){return(e.children.some(function(u){return QO(u)})?i.containerPhrasing:i.containerFlow).call(i,e,a)}function ZO(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}US.peek=WO;function US(e,n,i,a){const s=ZO(i),c=i.enter("strong"),u=i.createTracker(a),f=u.move(s+s);let m=u.move(i.containerPhrasing(e,{after:s,before:f,...u.current()}));const h=m.charCodeAt(0),y=uu(a.before.charCodeAt(a.before.length-1),h,s);y.inside&&(m=Gl(h)+m.slice(1));const g=m.charCodeAt(m.length-1),b=uu(a.after.charCodeAt(0),g,s);b.inside&&(m=m.slice(0,-1)+Gl(g));const v=u.move(s+s);return c(),i.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},f+m+v}function WO(e,n,i){return i.options.strong||"*"}function $O(e,n,i,a){return i.safe(e.value,a)}function e_(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function t_(e,n,i){const a=(PS(i)+(i.options.ruleSpaces?" ":"")).repeat(e_(i));return i.options.ruleSpaces?a.slice(0,-1):a}const IS={blockquote:CO,break:Ob,code:DO,definition:NO,emphasis:RS,hardBreak:Ob,heading:zO,html:NS,image:OS,imageReference:_S,inlineCode:LS,link:BS,linkReference:VS,list:GO,listItem:XO,paragraph:JO,root:KO,strong:US,text:$O,thematicBreak:t_};function n_(){return{enter:{table:r_,tableData:_b,tableHeader:_b,tableRow:a_},exit:{codeText:l_,table:i_,tableData:Dd,tableHeader:Dd,tableRow:Dd}}}function r_(e){const n=e._align;this.enter({type:"table",align:n.map(function(i){return i==="none"?null:i}),children:[]},e),this.data.inTable=!0}function i_(e){this.exit(e),this.data.inTable=void 0}function a_(e){this.enter({type:"tableRow",children:[]},e)}function Dd(e){this.exit(e)}function _b(e){this.enter({type:"tableCell",children:[]},e)}function l_(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,s_));const i=this.stack[this.stack.length-1];i.type,i.value=n,this.exit(e)}function s_(e,n){return n==="|"?n:e}function o_(e){const n=e||{},i=n.tableCellPadding,a=n.tablePipeAlign,s=n.stringLength,c=i?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:b,table:u,tableCell:m,tableRow:f}};function u(v,w,E,M){return h(y(v,E,M),v.align)}function f(v,w,E,M){const C=g(v,E,M),O=h([C]);return O.slice(0,O.indexOf(`
`))}function m(v,w,E,M){const C=E.enter("tableCell"),O=E.enter("phrasing"),A=E.containerPhrasing(v,{...M,before:c,after:c});return O(),C(),A}function h(v,w){return wO(v,{align:w,alignDelimiters:a,padding:i,stringLength:s})}function y(v,w,E){const M=v.children;let C=-1;const O=[],A=w.enter("table");for(;++C<M.length;)O[C]=g(M[C],w,E);return A(),O}function g(v,w,E){const M=v.children;let C=-1;const O=[],A=w.enter("tableRow");for(;++C<M.length;)O[C]=m(M[C],v,w,E);return A(),O}function b(v,w,E){let M=IS.inlineCode(v,w,E);return E.stack.includes("tableCell")&&(M=M.replace(/\|/g,"\\$&")),M}}function u_(){return{exit:{taskListCheckValueChecked:Lb,taskListCheckValueUnchecked:Lb,paragraph:f_}}}function c_(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:d_}}}function Lb(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function f_(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const i=this.stack[this.stack.length-1];i.type;const a=i.children[0];if(a&&a.type==="text"){const s=n.children;let c=-1,u;for(;++c<s.length;){const f=s[c];if(f.type==="paragraph"){u=f;break}}u===i&&(a.value=a.value.slice(1),a.value.length===0?i.children.shift():i.position&&a.position&&typeof a.position.start.offset=="number"&&(a.position.start.column++,a.position.start.offset++,i.position.start=Object.assign({},a.position.start)))}}this.exit(e)}function d_(e,n,i,a){const s=e.children[0],c=typeof e.checked=="boolean"&&s&&s.type==="paragraph",u="["+(e.checked?"x":" ")+"] ",f=i.createTracker(a);c&&f.move(u);let m=IS.listItem(e,n,i,{...a,...f.current()});return c&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),m;function h(y){return y+u}}function h_(){return[G5(),dO(),gO(),n_(),u_()]}function m_(e){return{extensions:[Y5(),hO(e),yO(),o_(e),c_()]}}const p_={tokenize:S_,partial:!0},HS={tokenize:w_,partial:!0},FS={tokenize:T_,partial:!0},qS={tokenize:C_,partial:!0},g_={tokenize:k_,partial:!0},GS={name:"wwwAutolink",tokenize:b_,previous:XS},YS={name:"protocolAutolink",tokenize:v_,previous:JS},ur={name:"emailAutolink",tokenize:x_,previous:QS},Bn={};function y_(){return{text:Bn}}let oi=48;for(;oi<123;)Bn[oi]=ur,oi++,oi===58?oi=65:oi===91&&(oi=97);Bn[43]=ur;Bn[45]=ur;Bn[46]=ur;Bn[95]=ur;Bn[72]=[ur,YS];Bn[104]=[ur,YS];Bn[87]=[ur,GS];Bn[119]=[ur,GS];function x_(e,n,i){const a=this;let s,c;return u;function u(g){return!hh(g)||!QS.call(a,a.previous)||mm(a.events)?i(g):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),f(g))}function f(g){return hh(g)?(e.consume(g),f):g===64?(e.consume(g),m):i(g)}function m(g){return g===46?e.check(g_,y,h)(g):g===45||g===95||Tt(g)?(c=!0,e.consume(g),m):y(g)}function h(g){return e.consume(g),s=!0,m}function y(g){return c&&s&&Mt(a.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(g)):i(g)}}function b_(e,n,i){const a=this;return s;function s(u){return u!==87&&u!==119||!XS.call(a,a.previous)||mm(a.events)?i(u):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(p_,e.attempt(HS,e.attempt(FS,c),i),i)(u))}function c(u){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(u)}}function v_(e,n,i){const a=this;let s="",c=!1;return u;function u(g){return(g===72||g===104)&&JS.call(a,a.previous)&&!mm(a.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),s+=String.fromCodePoint(g),e.consume(g),f):i(g)}function f(g){if(Mt(g)&&s.length<5)return s+=String.fromCodePoint(g),e.consume(g),f;if(g===58){const b=s.toLowerCase();if(b==="http"||b==="https")return e.consume(g),m}return i(g)}function m(g){return g===47?(e.consume(g),c?h:(c=!0,m)):i(g)}function h(g){return g===null||lu(g)||Ge(g)||mi(g)||bu(g)?i(g):e.attempt(HS,e.attempt(FS,y),i)(g)}function y(g){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(g)}}function S_(e,n,i){let a=0;return s;function s(u){return(u===87||u===119)&&a<3?(a++,e.consume(u),s):u===46&&a===3?(e.consume(u),c):i(u)}function c(u){return u===null?i(u):n(u)}}function w_(e,n,i){let a,s,c;return u;function u(h){return h===46||h===95?e.check(qS,m,f)(h):h===null||Ge(h)||mi(h)||h!==45&&bu(h)?m(h):(c=!0,e.consume(h),u)}function f(h){return h===95?a=!0:(s=a,a=void 0),e.consume(h),u}function m(h){return s||a||!c?i(h):n(h)}}function T_(e,n){let i=0,a=0;return s;function s(u){return u===40?(i++,e.consume(u),s):u===41&&a<i?c(u):u===33||u===34||u===38||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===60||u===63||u===93||u===95||u===126?e.check(qS,n,c)(u):u===null||Ge(u)||mi(u)?n(u):(e.consume(u),s)}function c(u){return u===41&&a++,e.consume(u),s}}function C_(e,n,i){return a;function a(f){return f===33||f===34||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===63||f===95||f===126?(e.consume(f),a):f===38?(e.consume(f),c):f===93?(e.consume(f),s):f===60||f===null||Ge(f)||mi(f)?n(f):i(f)}function s(f){return f===null||f===40||f===91||Ge(f)||mi(f)?n(f):a(f)}function c(f){return Mt(f)?u(f):i(f)}function u(f){return f===59?(e.consume(f),a):Mt(f)?(e.consume(f),u):i(f)}}function k_(e,n,i){return a;function a(c){return e.consume(c),s}function s(c){return Tt(c)?i(c):n(c)}}function XS(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Ge(e)}function JS(e){return!Mt(e)}function QS(e){return!(e===47||hh(e))}function hh(e){return e===43||e===45||e===46||e===95||Tt(e)}function mm(e){let n=e.length,i=!1;for(;n--;){const a=e[n][1];if((a.type==="labelLink"||a.type==="labelImage")&&!a._balanced){i=!0;break}if(a._gfmAutolinkLiteralWalkedInto){i=!1;break}}return e.length>0&&!i&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),i}const A_={tokenize:__,partial:!0};function E_(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:R_,continuation:{tokenize:N_},exit:O_}},text:{91:{name:"gfmFootnoteCall",tokenize:D_},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:M_,resolveTo:j_}}}}function M_(e,n,i){const a=this;let s=a.events.length;const c=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let u;for(;s--;){const m=a.events[s][1];if(m.type==="labelImage"){u=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return f;function f(m){if(!u||!u._balanced)return i(m);const h=Cn(a.sliceSerialize({start:u.end,end:a.now()}));return h.codePointAt(0)!==94||!c.includes(h.slice(1))?i(m):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),n(m))}}function j_(e,n){let i=e.length;for(;i--;)if(e[i][1].type==="labelImage"&&e[i][0]==="enter"){e[i][1];break}e[i+1][1].type="data",e[i+3][1].type="gfmFootnoteCallLabelMarker";const a={type:"gfmFootnoteCall",start:Object.assign({},e[i+3][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},e[i+3][1].end),end:Object.assign({},e[i+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},e[e.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},f=[e[i+1],e[i+2],["enter",a,n],e[i+3],e[i+4],["enter",s,n],["exit",s,n],["enter",c,n],["enter",u,n],["exit",u,n],["exit",c,n],e[e.length-2],e[e.length-1],["exit",a,n]];return e.splice(i,e.length-i+1,...f),e}function D_(e,n,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c=0,u;return f;function f(g){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(g),e.exit("gfmFootnoteCallLabelMarker"),m}function m(g){return g!==94?i(g):(e.enter("gfmFootnoteCallMarker"),e.consume(g),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",h)}function h(g){if(c>999||g===93&&!u||g===null||g===91||Ge(g))return i(g);if(g===93){e.exit("chunkString");const b=e.exit("gfmFootnoteCallString");return s.includes(Cn(a.sliceSerialize(b)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(g),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):i(g)}return Ge(g)||(u=!0),c++,e.consume(g),g===92?y:h}function y(g){return g===91||g===92||g===93?(e.consume(g),c++,h):h(g)}}function R_(e,n,i){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let c,u=0,f;return m;function m(w){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(w){return w===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",y):i(w)}function y(w){if(u>999||w===93&&!f||w===null||w===91||Ge(w))return i(w);if(w===93){e.exit("chunkString");const E=e.exit("gfmFootnoteDefinitionLabelString");return c=Cn(a.sliceSerialize(E)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(w),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),b}return Ge(w)||(f=!0),u++,e.consume(w),w===92?g:y}function g(w){return w===91||w===92||w===93?(e.consume(w),u++,y):y(w)}function b(w){return w===58?(e.enter("definitionMarker"),e.consume(w),e.exit("definitionMarker"),s.includes(c)||s.push(c),Re(e,v,"gfmFootnoteDefinitionWhitespace")):i(w)}function v(w){return n(w)}}function N_(e,n,i){return e.check(ts,n,e.attempt(A_,n,i))}function O_(e){e.exit("gfmFootnoteDefinition")}function __(e,n,i){const a=this;return Re(e,s,"gfmFootnoteDefinitionIndent",5);function s(c){const u=a.events[a.events.length-1];return u&&u[1].type==="gfmFootnoteDefinitionIndent"&&u[2].sliceSerialize(u[1],!0).length===4?n(c):i(c)}}function L_(e){let i=(e||{}).singleTilde;const a={name:"strikethrough",tokenize:c,resolveAll:s};return i==null&&(i=!0),{text:{126:a},insideSpan:{null:[a]},attentionMarkers:{null:[126]}};function s(u,f){let m=-1;for(;++m<u.length;)if(u[m][0]==="enter"&&u[m][1].type==="strikethroughSequenceTemporary"&&u[m][1]._close){let h=m;for(;h--;)if(u[h][0]==="exit"&&u[h][1].type==="strikethroughSequenceTemporary"&&u[h][1]._open&&u[m][1].end.offset-u[m][1].start.offset===u[h][1].end.offset-u[h][1].start.offset){u[m][1].type="strikethroughSequence",u[h][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},u[h][1].start),end:Object.assign({},u[m][1].end)},g={type:"strikethroughText",start:Object.assign({},u[h][1].end),end:Object.assign({},u[m][1].start)},b=[["enter",y,f],["enter",u[h][1],f],["exit",u[h][1],f],["enter",g,f]],v=f.parser.constructs.insideSpan.null;v&&Wt(b,b.length,0,vu(v,u.slice(h+1,m),f)),Wt(b,b.length,0,[["exit",g,f],["enter",u[m][1],f],["exit",u[m][1],f],["exit",y,f]]),Wt(u,h-1,m-h+3,b),m=h+b.length-2;break}}for(m=-1;++m<u.length;)u[m][1].type==="strikethroughSequenceTemporary"&&(u[m][1].type="data");return u}function c(u,f,m){const h=this.previous,y=this.events;let g=0;return b;function b(w){return h===126&&y[y.length-1][1].type!=="characterEscape"?m(w):(u.enter("strikethroughSequenceTemporary"),v(w))}function v(w){const E=ma(h);if(w===126)return g>1?m(w):(u.consume(w),g++,v);if(g<2&&!i)return m(w);const M=u.exit("strikethroughSequenceTemporary"),C=ma(w);return M._open=!C||C===2&&!!E,M._close=!E||E===2&&!!C,f(w)}}}class z_{constructor(){this.map=[]}add(n,i,a){B_(this,n,i,a)}consume(n){if(this.map.sort(function(c,u){return c[0]-u[0]}),this.map.length===0)return;let i=this.map.length;const a=[];for(;i>0;)i-=1,a.push(n.slice(this.map[i][0]+this.map[i][1]),this.map[i][2]),n.length=this.map[i][0];a.push(n.slice()),n.length=0;let s=a.pop();for(;s;){for(const c of s)n.push(c);s=a.pop()}this.map.length=0}}function B_(e,n,i,a){let s=0;if(!(i===0&&a.length===0)){for(;s<e.map.length;){if(e.map[s][0]===n){e.map[s][1]+=i,e.map[s][2].push(...a);return}s+=1}e.map.push([n,i,a])}}function V_(e,n){let i=!1;const a=[];for(;n<e.length;){const s=e[n];if(i){if(s[0]==="enter")s[1].type==="tableContent"&&a.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const c=a.length-1;a[c]=a[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(i=!0);n+=1}return a}function P_(){return{flow:{null:{name:"table",tokenize:U_,resolveAll:I_}}}}function U_(e,n,i){const a=this;let s=0,c=0,u;return f;function f(N){let $=a.events.length-1;for(;$>-1;){const le=a.events[$][1].type;if(le==="lineEnding"||le==="linePrefix")$--;else break}const te=$>-1?a.events[$][1].type:null,ge=te==="tableHead"||te==="tableRow"?L:m;return ge===L&&a.parser.lazy[a.now().line]?i(N):ge(N)}function m(N){return e.enter("tableHead"),e.enter("tableRow"),h(N)}function h(N){return N===124||(u=!0,c+=1),y(N)}function y(N){return N===null?i(N):me(N)?c>1?(c=0,a.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(N),e.exit("lineEnding"),v):i(N):Ae(N)?Re(e,y,"whitespace")(N):(c+=1,u&&(u=!1,s+=1),N===124?(e.enter("tableCellDivider"),e.consume(N),e.exit("tableCellDivider"),u=!0,y):(e.enter("data"),g(N)))}function g(N){return N===null||N===124||Ge(N)?(e.exit("data"),y(N)):(e.consume(N),N===92?b:g)}function b(N){return N===92||N===124?(e.consume(N),g):g(N)}function v(N){return a.interrupt=!1,a.parser.lazy[a.now().line]?i(N):(e.enter("tableDelimiterRow"),u=!1,Ae(N)?Re(e,w,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(N):w(N))}function w(N){return N===45||N===58?M(N):N===124?(u=!0,e.enter("tableCellDivider"),e.consume(N),e.exit("tableCellDivider"),E):Y(N)}function E(N){return Ae(N)?Re(e,M,"whitespace")(N):M(N)}function M(N){return N===58?(c+=1,u=!0,e.enter("tableDelimiterMarker"),e.consume(N),e.exit("tableDelimiterMarker"),C):N===45?(c+=1,C(N)):N===null||me(N)?V(N):Y(N)}function C(N){return N===45?(e.enter("tableDelimiterFiller"),O(N)):Y(N)}function O(N){return N===45?(e.consume(N),O):N===58?(u=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(N),e.exit("tableDelimiterMarker"),A):(e.exit("tableDelimiterFiller"),A(N))}function A(N){return Ae(N)?Re(e,V,"whitespace")(N):V(N)}function V(N){return N===124?w(N):N===null||me(N)?!u||s!==c?Y(N):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(N)):Y(N)}function Y(N){return i(N)}function L(N){return e.enter("tableRow"),G(N)}function G(N){return N===124?(e.enter("tableCellDivider"),e.consume(N),e.exit("tableCellDivider"),G):N===null||me(N)?(e.exit("tableRow"),n(N)):Ae(N)?Re(e,G,"whitespace")(N):(e.enter("data"),Q(N))}function Q(N){return N===null||N===124||Ge(N)?(e.exit("data"),G(N)):(e.consume(N),N===92?F:Q)}function F(N){return N===92||N===124?(e.consume(N),Q):Q(N)}}function I_(e,n){let i=-1,a=!0,s=0,c=[0,0,0,0],u=[0,0,0,0],f=!1,m=0,h,y,g;const b=new z_;for(;++i<e.length;){const v=e[i],w=v[1];v[0]==="enter"?w.type==="tableHead"?(f=!1,m!==0&&(zb(b,n,m,h,y),y=void 0,m=0),h={type:"table",start:Object.assign({},w.start),end:Object.assign({},w.end)},b.add(i,0,[["enter",h,n]])):w.type==="tableRow"||w.type==="tableDelimiterRow"?(a=!0,g=void 0,c=[0,0,0,0],u=[0,i+1,0,0],f&&(f=!1,y={type:"tableBody",start:Object.assign({},w.start),end:Object.assign({},w.end)},b.add(i,0,[["enter",y,n]])),s=w.type==="tableDelimiterRow"?2:y?3:1):s&&(w.type==="data"||w.type==="tableDelimiterMarker"||w.type==="tableDelimiterFiller")?(a=!1,u[2]===0&&(c[1]!==0&&(u[0]=u[1],g=Oo(b,n,c,s,void 0,g),c=[0,0,0,0]),u[2]=i)):w.type==="tableCellDivider"&&(a?a=!1:(c[1]!==0&&(u[0]=u[1],g=Oo(b,n,c,s,void 0,g)),c=u,u=[c[1],i,0,0])):w.type==="tableHead"?(f=!0,m=i):w.type==="tableRow"||w.type==="tableDelimiterRow"?(m=i,c[1]!==0?(u[0]=u[1],g=Oo(b,n,c,s,i,g)):u[1]!==0&&(g=Oo(b,n,u,s,i,g)),s=0):s&&(w.type==="data"||w.type==="tableDelimiterMarker"||w.type==="tableDelimiterFiller")&&(u[3]=i)}for(m!==0&&zb(b,n,m,h,y),b.consume(n.events),i=-1;++i<n.events.length;){const v=n.events[i];v[0]==="enter"&&v[1].type==="table"&&(v[1]._align=V_(n.events,i))}return e}function Oo(e,n,i,a,s,c){const u=a===1?"tableHeader":a===2?"tableDelimiter":"tableData",f="tableContent";i[0]!==0&&(c.end=Object.assign({},sa(n.events,i[0])),e.add(i[0],0,[["exit",c,n]]));const m=sa(n.events,i[1]);if(c={type:u,start:Object.assign({},m),end:Object.assign({},m)},e.add(i[1],0,[["enter",c,n]]),i[2]!==0){const h=sa(n.events,i[2]),y=sa(n.events,i[3]),g={type:f,start:Object.assign({},h),end:Object.assign({},y)};if(e.add(i[2],0,[["enter",g,n]]),a!==2){const b=n.events[i[2]],v=n.events[i[3]];if(b[1].end=Object.assign({},v[1].end),b[1].type="chunkText",b[1].contentType="text",i[3]>i[2]+1){const w=i[2]+1,E=i[3]-i[2]-1;e.add(w,E,[])}}e.add(i[3]+1,0,[["exit",g,n]])}return s!==void 0&&(c.end=Object.assign({},sa(n.events,s)),e.add(s,0,[["exit",c,n]]),c=void 0),c}function zb(e,n,i,a,s){const c=[],u=sa(n.events,i);s&&(s.end=Object.assign({},u),c.push(["exit",s,n])),a.end=Object.assign({},u),c.push(["exit",a,n]),e.add(i+1,0,c)}function sa(e,n){const i=e[n],a=i[0]==="enter"?"start":"end";return i[1][a]}const H_={name:"tasklistCheck",tokenize:q_};function F_(){return{text:{91:H_}}}function q_(e,n,i){const a=this;return s;function s(m){return a.previous!==null||!a._gfmTasklistFirstContentOfListItem?i(m):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(m),e.exit("taskListCheckMarker"),c)}function c(m){return Ge(m)?(e.enter("taskListCheckValueUnchecked"),e.consume(m),e.exit("taskListCheckValueUnchecked"),u):m===88||m===120?(e.enter("taskListCheckValueChecked"),e.consume(m),e.exit("taskListCheckValueChecked"),u):i(m)}function u(m){return m===93?(e.enter("taskListCheckMarker"),e.consume(m),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),f):i(m)}function f(m){return me(m)?n(m):Ae(m)?e.check({tokenize:G_},n,i)(m):i(m)}}function G_(e,n,i){return Re(e,a,"whitespace");function a(s){return s===null?i(s):n(s)}}function Y_(e){return lS([y_(),E_(),L_(e),P_(),F_()])}const X_={};function J_(e){const n=this,i=e||X_,a=n.data(),s=a.micromarkExtensions||(a.micromarkExtensions=[]),c=a.fromMarkdownExtensions||(a.fromMarkdownExtensions=[]),u=a.toMarkdownExtensions||(a.toMarkdownExtensions=[]);s.push(Y_(i)),c.push(h_()),u.push(m_(i))}function Vl(e){return e==null?"":typeof e=="string"||typeof e=="number"?String(e):Array.isArray(e)?e.map(Vl).join(""):typeof e=="object"&&e&&"props"in e?Vl(e.props?.children):""}function KS(){const e=new Map,n=i=>i.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");return i=>{const a=n(i)||"section",s=e.get(a)??0;return e.set(a,s+1),s===0?a:`${a}-${s}`}}function Q_(e,n=1,i=3){const a=KS(),s=e.split(`
`);let c=!1;const u=[];for(const f of s){const m=f.trimEnd();if(m.trimStart().startsWith("```")){c=!c;continue}if(c)continue;const h=/^(#{1,6})\s+(.+?)\s*$/.exec(m);if(!h)continue;const y=h[1].length;if(y<n||y>i)continue;const g=h[2].replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[*_`]/g,"").trim(),b=a(g);u.push({id:b,text:g,level:y})}return u}const K_=({toc:e,activeId:n,onClickItem:i})=>e.length?x.jsx("aside",{className:"fixed left-[calc(50%+870px/2+48px)] top-[calc(var(--header-height)+48px)] hidden xl:block w-56 2xl:w-64 h-[calc(100vh-var(--header-height)-96px)] overflow-y-auto overflow-x-hidden",children:x.jsx("div",{className:"border-l border-(--border-subtle) pl-4 pr-2",children:x.jsx("nav",{"aria-label":"Table of contents",children:x.jsx("ul",{className:"space-y-2",children:e.map(a=>{const s=a.id===n,c=a.level===1?"pl-0":a.level===2?"pl-3":"pl-6";return x.jsx("li",{className:c,children:x.jsxs("button",{type:"button",onClick:()=>i(a.id),className:["group relative block w-full text-left cursor-pointer","text-[13px] leading-[1.65]","transition-all duration-200 origin-left","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",s?"text-(--fg-base) scale-110":"text-gray-500 hover:text-gray-500/80 hover:scale-105"].join(" "),children:[x.jsx("span",{className:["absolute -left-[22px] top-[9px] h-1.5 w-1.5 rounded-full","bg-(--fg-base)","transition-opacity duration-200",s?"opacity-100":"opacity-0 group-hover:opacity-60"].join(" ")}),a.text]})},a.id)})})})})}):null,Bb=({dir:e})=>x.jsx("span",{className:["shrink-0 w-11 h-11 rounded-full flex items-center justify-center","border border-(--accent) text-(--accent)","bg-transparent group-hover:bg-(--accent-subtle)","transition-colors duration-300"].join(" "),children:x.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e==="left"?x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"}):x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),Vb=({children:e,align:n,onClick:i})=>x.jsxs("button",{type:"button",onClick:i,className:["group relative w-full overflow-hidden rounded-2xl","border border-(--border-subtle)","bg-(--bg-soft) hover:bg-(--bg-elevated)","transition-all duration-300","focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)/60 focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-base)",n==="left"?"text-left":"text-right"].join(" "),children:[x.jsx("span",{className:"pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200",children:x.jsx("span",{className:"absolute inset-0 bg-linear-to-r from-(--accent)/0 via-(--accent)/10 to-(--accent)/0"})}),x.jsx("div",{className:"relative p-6 cursor-pointer",children:e})]}),Z_=({prevPost:e,nextPost:n,onNavigate:i})=>!e&&!n?null:x.jsx("nav",{className:"mt-16 pt-8 border-t border-(--border-subtle)",children:x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[x.jsx("div",{className:"md:col-span-1 h-[88px]",children:e?x.jsx(Vb,{align:"left",onClick:()=>i(e.slug),children:x.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[x.jsx(Bb,{dir:"left"}),x.jsxs("div",{className:"min-w-0",children:[x.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"이전 포스트"}),x.jsx("h3",{className:`\r
                      text-[18px] font-bold text-(--fg-base)\r
                      truncate overflow-hidden\r
                    `,children:e.title})]})]})}):x.jsx("div",{className:"w-full h-full"})}),x.jsx("div",{className:"md:col-span-1  h-[88px]",children:n?x.jsx(Vb,{align:"right",onClick:()=>i(n.slug),children:x.jsxs("div",{className:"flex items-center justify-between gap-4 h-full",children:[x.jsxs("div",{className:"min-w-0 text-right",children:[x.jsx("div",{className:"text-[12px] font-semibold text-fg-muted mb-1",children:"다음 포스트"}),x.jsx("h3",{className:` \r
                      text-[18px] font-bold text-(--fg-base)\r
                      truncate overflow-hidden\r
                    `,children:n.title})]}),x.jsx(Bb,{dir:"right"})]})}):x.jsx("div",{className:"w-full h-full"})})]})}),W_=Yo.memo(function({content:n}){const i=j.useMemo(()=>KS(),[n]),a=j.useMemo(()=>[J_],[]),s=j.useMemo(()=>({h1:({children:c,...u})=>{const f=Vl(c),m=i(f);return x.jsx("h1",{id:m,className:"scroll-mt-[calc(var(--header-height)+24px)]",...u,children:c})},h2:({children:c,...u})=>{const f=Vl(c),m=i(f);return x.jsx("h2",{id:m,className:"scroll-mt-[calc(var(--header-height)+24px)]",...u,children:c})},h3:({children:c,...u})=>{const f=Vl(c),m=i(f);return x.jsx("h3",{id:m,className:"scroll-mt-[calc(var(--header-height)+24px)]",...u,children:c})}}),[i]);return x.jsx(L5,{remarkPlugins:a,components:s,children:n})}),$_=()=>{const{slug:e}=WT(),n=Jl(),i=j.useMemo(()=>dn.find(g=>g.slug===e),[e]),a=j.useMemo(()=>i?.content??"",[i]),s=j.useMemo(()=>a?Q_(a,1,3):[],[a]),{prevPost:c,nextPost:u}=j.useMemo(()=>{const g=dn.findIndex(b=>b.slug===e);return g===-1?{prevPost:null,nextPost:null}:{prevPost:g>0?dn[g-1]:null,nextPost:g<dn.length-1?dn[g+1]:null}},[e]),[f,m]=j.useState(),h=Yo.useRef(!1),y=g=>{const b=document.getElementById(g);if(!b)return;h.current=!0,m(V=>V===g?V:g),history.replaceState(null,"",`#${g}`);const v=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim())||80,M=b.getBoundingClientRect().top+window.pageYOffset-v-24;window.scrollTo({top:M,behavior:"smooth"});const C=performance.now();let O=0;const A=()=>{const V=window.scrollY;Math.abs(V-M)<2?O+=1:O=0;const Y=performance.now()-C>2200;if(O>=3||Y){h.current=!1;return}requestAnimationFrame(A)};requestAnimationFrame(A)};return j.useEffect(()=>{if(!s.length)return;const g=()=>{const M=getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim(),C=parseFloat(M);return Number.isFinite(C)?C:80},b=24;let v=0;const w=()=>{if(v=0,h.current)return;const M=g(),C=window.scrollY+M+b+1;let O=s[0]?.id;for(const A of s){const V=document.getElementById(A.id);if(V)if(V.offsetTop<=C)O=A.id;else break}m(A=>A===O?A:O)},E=()=>{v||(v=requestAnimationFrame(w))};return w(),window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",E),()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",E),v&&cancelAnimationFrame(v)}},[s,e]),i?x.jsxs("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) overflow-x-hidden",children:[x.jsx("div",{className:"mx-auto max-w-(--content-max-w) px-5 md:px-8 pt-[calc(var(--header-height)+48px)] pb-16",children:x.jsxs("article",{className:"w-full",children:[x.jsxs("button",{onClick:()=>n("/blog"),className:"relative z-10 mb-5 text-[13px] text-fg-muted hover:text-fg transition-colors flex items-center gap-2",children:[x.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"목록으로"]}),x.jsxs("div",{className:"mb-10",children:[x.jsx("h1",{className:"text-[36px] md:text-[42px] font-bold leading-tight mb-4",children:i.title}),x.jsxs("div",{className:"w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4",children:[x.jsx("div",{className:"flex flex-wrap gap-2",children:i.tags.map(g=>x.jsx("span",{className:"text-[13px] text-(--accent) px-2.5 py-1.5",children:g},g))}),x.jsx("div",{className:"text-[13px] text-fg-muted whitespace-nowrap md:text-right",children:i.date})]})]}),i.cover&&x.jsx("div",{className:"relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-(--bg-soft)",children:x.jsx("img",{src:i.cover,alt:i.title,className:"absolute inset-0 w-full h-full object-cover"})}),x.jsx("div",{className:"prose prose-invert max-w-none",children:a?x.jsx(W_,{content:a}):x.jsx("p",{className:"text-fg-muted",children:"콘텐츠가 없습니다."})}),x.jsx(Z_,{prevPost:c,nextPost:u,onNavigate:g=>n(`/blog/${g}`)})]})}),x.jsx(K_,{toc:s,activeId:f,onClickItem:y})]}):x.jsx("div",{className:"min-h-screen bg-(--bg-base) text-(--fg-base) flex items-center justify-center",children:x.jsxs("div",{className:"text-center",children:[x.jsx("h1",{className:"text-[32px] font-bold mb-4",children:"포스트를 찾을 수 없습니다"}),x.jsx("button",{onClick:()=>n("/blog"),className:"px-4 py-2 rounded-full border border-(--border-subtle) bg-(--bg-soft) hover:bg-(--bg-elevated) transition-colors duration-300",children:"블로그로 돌아가기"})]})})},eL="relative min-h-screen pt-[calc(var(--header-height)+56px)] pb-24 px-5 overflow-hidden",tL="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(125,211,252,0.16),transparent_60%),radial-gradient(800px_420px_at_80%_30%,rgba(167,139,250,0.14),transparent_60%),radial-gradient(700px_360px_at_50%_85%,rgba(34,197,94,0.10),transparent_60%)] [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]",Pb="relative rounded-3xl border border-(--border-subtle) bg-(--bg-elevated)/70 p-6 backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(0,0,0,0.55)] hover:border-white/20 [html[data-theme='light']_&]:bg-white/70 [html[data-theme='light']_&]:shadow-[0_10px_26px_rgba(0,0,0,0.08)] [html[data-theme='light']_&]:hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]",Ub="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(900px_240px_at_10%_0%,rgba(255,255,255,0.14),transparent_55%)] [html[data-theme='light']_&]:bg-[radial-gradient(900px_240px_at_10%_0%,rgba(17,24,39,0.06),transparent_55%)]",nL="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-fg-muted",mh="inline-flex items-center rounded-full border border-(--border-subtle) bg-(--bg-soft) px-3 py-1 text-[11px] text-fg-muted [html[data-theme='light']_&]:bg-[#f5f5fb]",rL=()=>x.jsxs("main",{className:eL,children:[x.jsx("div",{className:tL}),x.jsxs("div",{className:"max-w-(--content-max-w) mx-auto relative",children:[x.jsxs("section",{className:"text-center mb-12",children:[x.jsx("div",{className:"flex justify-center mb-4",children:x.jsxs("span",{className:`${mh} gap-2`,children:[x.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-(--accent)"}),x.jsx("span",{className:nL,children:"Contact"})]})}),x.jsx("h1",{className:"text-[34px] md:text-[44px] font-semibold tracking-[-0.02em] mb-4",children:"함께 이야기해요"}),x.jsxs("p",{className:"text-[15px] md:text-[16px] text-fg-muted leading-relaxed max-w-lg mx-auto",children:["프로젝트 제안, 협업, 채용 어떤 주제든 좋습니다.",x.jsx("br",{className:" md:block"}),"가능한 빠르게 확인하고 답변 드리겠습니다."]})]}),x.jsxs("div",{className:"grid gap-5",children:[x.jsxs("div",{className:Pb,children:[x.jsx("div",{className:Ub}),x.jsxs("div",{className:"flex items-center justify-between mb-4 relative",children:[x.jsx("h2",{className:"text-[16px] font-medium text-fg",children:"연락 채널"}),x.jsx("span",{className:mh,children:"가장 빠른 답변: Email"})]}),x.jsxs("div",{className:"grid gap-3 relative",children:[x.jsx(Ml,{label:"Email",value:"lanos5019@ajou.ac.kr",href:"mailto:you@example.com",icon:x.jsx(uL,{})}),x.jsx(Ml,{label:"Phone",value:"010-3465-9425",href:"tel:010-3465-9425",icon:x.jsx(oL,{})}),x.jsx(Ml,{label:"GitHub",value:"@km-kwon",href:"https://github.com/km-kwon",external:!0,icon:x.jsx(cL,{})}),x.jsx(Ml,{label:"NPM",value:"@kwon-kyoungmin",href:"https://www.npmjs.com/~kwon-kyoungmin",external:!0,icon:x.jsx(dL,{})}),x.jsx(Ml,{label:"Apply",value:"Resume (PDF)",href:"/portfolio/resume.pdf",external:!0,icon:x.jsx(fL,{})})]})]}),x.jsxs("div",{className:Pb,children:[x.jsx("div",{className:Ub}),x.jsx("h2",{className:"text-[16px] font-medium text-fg mb-4 relative",children:"응답 안내"}),x.jsxs("div",{className:"grid md:grid-cols-2 gap-4 relative",children:[x.jsx(Ib,{icon:x.jsx(iL,{}),title:"평균 응답 시간",value:"24시간 이내",sub:"최대한 빠르게 회신 드리겠습니다."}),x.jsx(Ib,{icon:x.jsx(aL,{}),title:"위치",value:"대한민국, 성남",sub:"원격 협업도 가능합니다."})]})]})]})]})]}),Ml=({label:e,value:n,href:i,external:a,icon:s,download:c})=>x.jsxs("a",{href:i,target:a?"_blank":void 0,rel:a?"noreferrer":void 0,download:c,className:`group relative flex items-center gap-3 rounded-2xl px-4 py-3\r
               border border-(--border-subtle) bg-(--bg-soft)\r
               [html[data-theme='light']_&]:bg-(--bg-soft)\r
               hover:border-(--accent)/35 hover:bg-(--bg-elevated)\r
               transition-all duration-300 ease-out`,children:[x.jsx("div",{className:`w-9 h-9 rounded-full bg-(--bg-elevated) border border-(--border-subtle)\r
                    flex items-center justify-center shrink-0\r
                    group-hover:border-(--accent)/35 transition-colors`,children:s}),x.jsxs("div",{className:"min-w-0 flex-1",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("span",{className:"text-[11px] text-fg-muted uppercase tracking-wider",children:e}),a&&x.jsx("span",{className:mh,children:"External"})]}),x.jsx("div",{className:"text-[14px] font-medium truncate group-hover:text-fg transition-colors",children:n})]}),c?x.jsx(sL,{className:`w-4 h-4 text-fg-muted group-hover:text-fg shrink-0\r
                   group-hover:translate-y-0.5 transition-all duration-300`}):x.jsx(lL,{className:`w-4 h-4 text-fg-muted group-hover:text-fg shrink-0\r
                   group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300`})]}),Ib=({icon:e,title:n,value:i,sub:a})=>x.jsxs("div",{className:`flex items-start gap-3 rounded-2xl p-4 border border-(--border-subtle) bg-(--bg-soft)\r
                  [html[data-theme='light']_&]:bg-(--bg-soft)`,children:[x.jsx("div",{className:`w-10 h-10 rounded-full bg-(--bg-elevated) border border-(--border-subtle)\r
                    flex items-center justify-center shrink-0`,children:e}),x.jsxs("div",{className:"min-w-0",children:[x.jsx("p",{className:"text-[12px] font-medium text-fg",children:n}),x.jsx("p",{className:"text-[14px] font-semibold text-fg mt-1",children:i}),x.jsx("p",{className:"text-[12px] text-fg-muted mt-1 leading-relaxed",children:a})]})]}),iL=()=>x.jsx("svg",{className:"w-4 h-4 text-fg-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),aL=()=>x.jsxs("svg",{className:"w-4 h-4 text-fg-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),lL=({className:e})=>x.jsxs("svg",{className:e??"",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7 17L17 7"}),x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 7h7v7"})]}),sL=({className:e})=>x.jsxs("svg",{className:e??"",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 4v12m0 0l-4-4m4 4l4-4"}),x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})]}),oL=()=>x.jsx("svg",{className:"w-4 h-4 text-fg-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),uL=()=>x.jsxs("svg",{className:"w-4 h-4 text-fg-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 8l9 6 9-6"}),x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"})]}),cL=()=>x.jsx("svg",{className:"w-4 h-4 text-fg-muted",viewBox:"0 0 24 24",fill:"currentColor",children:x.jsx("path",{d:"M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.6-1.6-1.5-2-1.5-2-1.2-.9.1-.9.1-.9 1.3.1 2 .9 2 .9 1.2 2.1 3.1 1.5 3.9 1.1.1-.9.5-1.5.8-1.9-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.7-2.8 5.8-5.5 6.1.5.4.9 1.2.9 2.4v3.5c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z"})}),fL=()=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-newspaper-icon lucide-newspaper",children:[x.jsx("path",{d:"M15 18h-5"}),x.jsx("path",{d:"M18 14h-8"}),x.jsx("path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"}),x.jsx("rect",{width:"8",height:"4",x:"10",y:"6",rx:"1"})]}),dL=({className:e})=>x.jsxs("svg",{className:e??"w-4 h-4",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[x.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"6",stroke:"currentColor",strokeWidth:"1.6"}),x.jsx("path",{d:"M8 16V8l8 8V8",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),hL=()=>{const[e,n]=j.useState(()=>{if(typeof window>"u")return"dark";try{return localStorage.getItem("portfolio-theme")||"dark"}catch{return"dark"}});j.useEffect(()=>{if(!(typeof document>"u")){document.documentElement.setAttribute("data-theme",e);try{localStorage.setItem("portfolio-theme",e)}catch{}}},[e]);const i=j.useCallback(()=>{n(c=>c==="dark"?"light":"dark")},[]),a=j.useCallback(c=>{const u=document.getElementById(c);if(u){const y=u.getBoundingClientRect().top+window.pageYOffset-64-20;window.scrollTo({top:y,behavior:"smooth"})}},[]),s="/portfolio/".replace(/\/$/,"");return x.jsxs(zC,{basename:s===""?void 0:s,children:[x.jsx(WC,{}),x.jsx(YC,{theme:e,onToggleTheme:i,onNavClick:a}),x.jsxs(hC,{children:[x.jsx(jl,{path:"/",element:x.jsx(wD,{})}),x.jsx(jl,{path:"/blog",element:x.jsx(CD,{})}),x.jsx(jl,{path:"/blog/:slug",element:x.jsx($_,{})}),x.jsx(jl,{path:"/contact",element:x.jsx(rL,{})})]}),x.jsx(ZC,{})]})};vT.createRoot(document.getElementById("root")).render(x.jsx(hL,{}));
