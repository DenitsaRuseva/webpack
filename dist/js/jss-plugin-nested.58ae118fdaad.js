"use strict";(globalThis.webpackChunk_3_setting_up_application=globalThis.webpackChunk_3_setting_up_application||[]).push([[960],{3057:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7462),i=/\s*,\s*/g,l=/&/g,a=/\$([\w-]+)/g;const o=function(){function e(e,n){return function(t,r){var i=e.getRule(r)||n&&n.getRule(r);return i?i.selector:r}}function n(e,n){for(var t=n.split(i),r=e.split(i),a="",o=0;o<t.length;o++)for(var s=t[o],u=0;u<r.length;u++){var c=r[u];a&&(a+=", "),a+=-1!==c.indexOf("&")?c.replace(l,s):s+" "+c}return a}function t(e,n,t){if(t)return(0,r.Z)({},t,{index:t.index+1});var i=e.options.nestingLevel;i=void 0===i?1:i+1;var l=(0,r.Z)({},e.options,{nestingLevel:i,index:n.indexOf(e)+1});return delete l.name,l}return{onProcessStyle:function(i,l,o){if("style"!==l.type)return i;var s,u,c=l,p=c.options.parent;for(var d in i){var f=-1!==d.indexOf("&"),v="@"===d[0];if(f||v){if(s=t(c,p,s),f){var g=n(d,c.selector);u||(u=e(p,o)),g=g.replace(a,u);var _=c.key+"-"+d;"replaceRule"in p?p.replaceRule(_,i[d],(0,r.Z)({},s,{selector:g})):p.addRule(_,i[d],(0,r.Z)({},s,{selector:g}))}else v&&p.addRule(d,{},s).addRule(c.key,i[d],{selector:c.selector});delete i[d]}}return i}}}}}]);