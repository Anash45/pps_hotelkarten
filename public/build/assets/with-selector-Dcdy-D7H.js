import{d as M,a as _}from"./app-CzSMpXLj.js";var U=M(),m={exports:{}},d={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W;function q(){if(W)return d;W=1;var a=_();function y(r,u){return r===u&&(r!==0||1/r===1/u)||r!==r&&u!==u}var V=typeof Object.is=="function"?Object.is:y,D=a.useSyncExternalStore,j=a.useRef,p=a.useEffect,w=a.useMemo,z=a.useDebugValue;return d.useSyncExternalStoreWithSelector=function(r,u,v,s,c){var t=j(null);if(t.current===null){var o={hasValue:!1,value:null};t.current=o}else o=t.current;t=w(function(){function R(e){if(!S){if(S=!0,n=e,e=s(e),c!==void 0&&o.hasValue){var i=o.value;if(c(i,e))return l=i}return l=e}if(i=l,V(n,e))return i;var E=s(e);return c!==void 0&&c(i,E)?(n=e,i):(n=e,l=E)}var S=!1,n,l,b=v===void 0?null:v;return[function(){return R(u())},b===null?void 0:function(){return R(b())}]},[u,v,s,c]);var f=D(r,t[0],t[1]);return p(function(){o.hasValue=!0,o.value=f},[f]),z(f),f},d}var h;function x(){return h||(h=1,m.exports=q()),m.exports}var G=x();export{U as r,G as w};
