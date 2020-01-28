var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function $(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t,n){if(e){const s=i(e,t,n);return e[0](s)}}function i(e,n,s){return e[1]?t({},t(n.$$scope.ctx,e[1](s?s(n):{}))):n.$$scope.ctx}function a(e,n,s,r){return e[1]?t({},t(n.$$scope.changed||{},e[1](r?r(s):{}))):n.$$scope.changed||{}}function l(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function g(){return f(" ")}function m(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function v(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}let h;function b(e){h=e}function x(e){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(e)}const y=[],_=[],w=[],k=[],C=Promise.resolve();let S=!1;function W(e){w.push(e)}function T(){const e=new Set;do{for(;y.length;){const e=y.shift();b(e),H(e.$$)}for(;_.length;)_.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];e.has(n)||(n(),e.add(n))}w.length=0}while(y.length);for(;k.length;)k.pop()();S=!1}function H(e){e.fragment&&(e.update(e.dirty),r(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(W))}const M=new Set;let A;function L(e,t){e&&e.i&&(M.delete(e),e.i(t))}function E(e,t,n,s){if(e&&e.o){if(M.has(e))return;M.add(e),A.c.push(()=>{M.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function j(e,t,s){const{fragment:$,on_mount:c,on_destroy:i,after_update:a}=e.$$;$.m(t,s),W(()=>{const t=c.map(n).filter(o);i?i.push(...t):r(t),e.$$.on_mount=[]}),a.forEach(W)}function q(e,t){e.$$.fragment&&(r(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function z(e,t){e.$$.dirty||(y.push(e),S||(S=!0,C.then(T)),e.$$.dirty=s()),e.$$.dirty[t]=!0}function B(t,n,o,$,c,i){const a=h;b(t);const l=n.props||{},d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:s(),dirty:null};let p=!1;var u;d.ctx=o?o(t,l,(e,n,s=n)=>(d.ctx&&c(d.ctx[e],d.ctx[e]=s)&&(d.bound[e]&&d.bound[e](s),p&&z(t,e)),n)):l,d.update(),p=!0,r(d.before_update),d.fragment=$(d.ctx),n.target&&(n.hydrate?d.fragment.l((u=n.target,Array.from(u.childNodes))):d.fragment.c(),n.intro&&L(t.$$.fragment),j(t,n.target,n.anchor),T()),b(a)}class I{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function N(...e){return e.map(e=>`var(--${function(e,t=""){return e.replace(/[^a-zA-Z0-9-_]/g,t)}(e)}, ${e})`).join(" ")}const O=()=>({}),X=()=>({}),F=()=>({}),G=()=>({});function P(e){var t,n,s,r,o,$,f;const v=e.$$slots.above,h=c(v,e,G),b=e.$$slots.default,x=c(b,e,null),y=e.$$slots.below,_=c(y,e,X);return{c(){t=u("div"),n=u("div"),h&&h.c(),s=g(),r=u("div"),x&&x.c(),o=g(),$=u("div"),_&&_.c(),m(n,"class","above svelte-1j7sf9s"),m(r,"class","center svelte-1j7sf9s"),m($,"class","below svelte-1j7sf9s"),m(t,"class","cover svelte-1j7sf9s")},l(e){h&&h.l(div0_nodes),x&&x.l(div1_nodes),_&&_.l(div2_nodes)},m(c,i){d(c,t,i),l(t,n),h&&h.m(n,null),e.div0_binding(n),l(t,s),l(t,r),x&&x.m(r,null),l(t,o),l(t,$),_&&_.m($,null),e.div2_binding($),e.div3_binding(t),f=!0},p(e,t){h&&h.p&&e.$$scope&&h.p(a(v,t,e,F),i(v,t,G)),x&&x.p&&e.$$scope&&x.p(a(b,t,e,null),i(b,t,null)),_&&_.p&&e.$$scope&&_.p(a(y,t,e,O),i(y,t,X))},i(e){f||(L(h,e),L(x,e),L(_,e),f=!0)},o(e){E(h,e),E(x,e),E(_,e),f=!1},d(n){n&&p(t),h&&h.d(n),e.div0_binding(null),x&&x.d(n),_&&_.d(n),e.div2_binding(null),e.div3_binding(null)}}}function R(e,t,n){let s,r,o,{space:$="s0",minHeight:c="100vh",pad:i=!0}=t;x(()=>{n("cover",s.style.minHeight=N(c),s),i&&n("cover",s.style.padding=N($),s),n("above",r.style.marginBottom=N($),r),n("below",o.style.marginTop=N($),o)});let{$$slots:a={},$$scope:l}=t;return e.$set=(e=>{"space"in e&&n("space",$=e.space),"minHeight"in e&&n("minHeight",c=e.minHeight),"pad"in e&&n("pad",i=e.pad),"$$scope"in e&&n("$$scope",l=e.$$scope)}),{space:$,minHeight:c,pad:i,cover:s,above:r,below:o,div0_binding:function(e){_[e?"unshift":"push"](()=>{n("above",r=e)})},div2_binding:function(e){_[e?"unshift":"push"](()=>{n("below",o=e)})},div3_binding:function(e){_[e?"unshift":"push"](()=>{n("cover",s=e)})},$$slots:a,$$scope:l}}class Z extends I{constructor(e){super(),B(this,e,R,P,$,["space","minHeight","pad"])}}function D(e){var t,n;const s=e.$$slots.default,r=c(s,e,null);return{c(){t=u("div"),r&&r.c(),m(t,"class","grid svelte-1w6bbvw")},l(e){r&&r.l(div_nodes)},m(s,o){d(s,t,o),r&&r.m(t,null),e.div_binding(t),n=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(a(s,t,e,null),i(s,t,null))},i(e){n||(L(r,e),n=!0)},o(e){E(r,e),n=!1},d(n){n&&p(t),r&&r.d(n),e.div_binding(null)}}}function J(e,t,n){let s,{min:r="12rem",space:o="s0"}=t;x(()=>{n("grid",s.style.gridGap=`var(--${o}, ${o})`,s),n("grid",s.style.gridTemplateColumns=`repeat(auto-fit, minmax(${N(r)}, 1fr))`,s)});let{$$slots:$={},$$scope:c}=t;return e.$set=(e=>{"min"in e&&n("min",r=e.min),"space"in e&&n("space",o=e.space),"$$scope"in e&&n("$$scope",c=e.$$scope)}),{min:r,space:o,grid:s,div_binding:function(e){_[e?"unshift":"push"](()=>{n("grid",s=e)})},$$slots:$,$$scope:c}}class K extends I{constructor(e){super(),B(this,e,J,D,$,["min","space"])}}function Q(e){var t,n;const s=e.$$slots.default,r=c(s,e,null);return{c(){t=u("div"),r&&r.c(),m(t,"class","box svelte-1puxyt3")},l(e){r&&r.l(div_nodes)},m(s,o){d(s,t,o),r&&r.m(t,null),e.div_binding(t),n=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(a(s,t,e,null),i(s,t,null))},i(e){n||(L(r,e),n=!0)},o(e){E(r,e),n=!1},d(n){n&&p(t),r&&r.d(n),e.div_binding(null)}}}function U(e,t,n){let s,{padding:r="s1",color:o="color-primary",backgroundColor:$="color-secondary",borderWidth:c="border-medium",borderStyle:i="solid",borderColor:a="color-primary"}=t;x(()=>{n("box",s.style.padding=N(r),s),n("box",s.style.color=N(o),s),n("box",s.style.backgroundColor=N($),s),c?n("box",s.style.border=N(c,i,a),s):(n("box",s.style.outline="0.125rem solid transparent",s),n("box",s.style.outlineOffset="-0.125rem",s))});let{$$slots:l={},$$scope:d}=t;return e.$set=(e=>{"padding"in e&&n("padding",r=e.padding),"color"in e&&n("color",o=e.color),"backgroundColor"in e&&n("backgroundColor",$=e.backgroundColor),"borderWidth"in e&&n("borderWidth",c=e.borderWidth),"borderStyle"in e&&n("borderStyle",i=e.borderStyle),"borderColor"in e&&n("borderColor",a=e.borderColor),"$$scope"in e&&n("$$scope",d=e.$$scope)}),{padding:r,color:o,backgroundColor:$,borderWidth:c,borderStyle:i,borderColor:a,box:s,div_binding:function(e){_[e?"unshift":"push"](()=>{n("box",s=e)})},$$slots:l,$$scope:d}}class V extends I{constructor(e){super(),B(this,e,U,Q,$,["padding","color","backgroundColor","borderWidth","borderStyle","borderColor"])}}function Y(e){var t,n;const s=e.$$slots.default,r=c(s,e,null);return{c(){t=u("div"),r&&r.c(),m(t,"class","stack svelte-tgxxg6")},l(e){r&&r.l(div_nodes)},m(s,o){d(s,t,o),r&&r.m(t,null),e.div_binding(t),n=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(a(s,t,e,null),i(s,t,null))},i(e){n||(L(r,e),n=!0)},o(e){E(r,e),n=!1},d(n){n&&p(t),r&&r.d(n),e.div_binding(null)}}}function ee(e,t,n){let s,{space:r="s0",recursive:o=!1,splitAfter:$=""}=t;x(()=>{o?s.querySelectorAll("* + *").forEach(e=>e.style.marginTop=N(r)):s.querySelectorAll(".stack > * + *").forEach(e=>e.style.marginTop=N(r)),$&&s.querySelectorAll(`.stack > :nth-child(${$})`).forEach(e=>e.style.marginBottom="auto")});let{$$slots:c={},$$scope:i}=t;return e.$set=(e=>{"space"in e&&n("space",r=e.space),"recursive"in e&&n("recursive",o=e.recursive),"splitAfter"in e&&n("splitAfter",$=e.splitAfter),"$$scope"in e&&n("$$scope",i=e.$$scope)}),{space:r,recursive:o,splitAfter:$,stack:s,div_binding:function(e){_[e?"unshift":"push"](()=>{n("stack",s=e)})},$$slots:c,$$scope:i}}class te extends I{constructor(e){super(),B(this,e,ee,Y,$,["space","recursive","splitAfter"])}}const ne=()=>({}),se=()=>({}),re=()=>({}),oe=()=>({});function $e(e){var t,n,s,r,o,$,f;const v=e.$$slots.left,h=c(v,e,oe),b=e.$$slots.default,x=c(b,e,null),y=e.$$slots.right,_=c(y,e,se);return{c(){t=u("div"),n=u("div"),h&&h.c(),s=g(),r=u("div"),x&&x.c(),o=g(),$=u("div"),_&&_.c(),m(n,"class","left svelte-dzugkd"),m(r,"class","center svelte-dzugkd"),m($,"class","right svelte-dzugkd"),m(t,"class","bracket svelte-dzugkd")},l(e){h&&h.l(div0_nodes),x&&x.l(div1_nodes),_&&_.l(div2_nodes)},m(c,i){d(c,t,i),l(t,n),h&&h.m(n,null),e.div0_binding(n),l(t,s),l(t,r),x&&x.m(r,null),e.div1_binding(r),l(t,o),l(t,$),_&&_.m($,null),e.div2_binding($),e.div3_binding(t),f=!0},p(e,t){h&&h.p&&e.$$scope&&h.p(a(v,t,e,re),i(v,t,oe)),x&&x.p&&e.$$scope&&x.p(a(b,t,e,null),i(b,t,null)),_&&_.p&&e.$$scope&&_.p(a(y,t,e,ne),i(y,t,se))},i(e){f||(L(h,e),L(x,e),L(_,e),f=!0)},o(e){E(h,e),E(x,e),E(_,e),f=!1},d(n){n&&p(t),h&&h.d(n),e.div0_binding(null),x&&x.d(n),e.div1_binding(null),_&&_.d(n),e.div2_binding(null),e.div3_binding(null)}}}function ce(e,t,n){let s,r,o,$,{maxWidth:c="measure",andText:i=!0,space:a="zero",padding:l="zero",intrinsic:d=!1}=t;x(()=>{n("bracket",s.style.padding=N(l),s),n("left",r.style.marginRight=N(a),r),n("right",$.style.marginLeft=N(a),$),n("center",o.style.maxWidth=N(c),o),d&&n("center",o.style.alignItems="center",o),i&&n("center",o.style.textAlign="center",o)});let{$$slots:p={},$$scope:u}=t;return e.$set=(e=>{"maxWidth"in e&&n("maxWidth",c=e.maxWidth),"andText"in e&&n("andText",i=e.andText),"space"in e&&n("space",a=e.space),"padding"in e&&n("padding",l=e.padding),"intrinsic"in e&&n("intrinsic",d=e.intrinsic),"$$scope"in e&&n("$$scope",u=e.$$scope)}),{maxWidth:c,andText:i,space:a,padding:l,intrinsic:d,bracket:s,left:r,center:o,right:$,div0_binding:function(e){_[e?"unshift":"push"](()=>{n("left",r=e)})},div1_binding:function(e){_[e?"unshift":"push"](()=>{n("center",o=e)})},div2_binding:function(e){_[e?"unshift":"push"](()=>{n("right",$=e)})},div3_binding:function(e){_[e?"unshift":"push"](()=>{n("bracket",s=e)})},$$slots:p,$$scope:u}}class ie extends I{constructor(e){super(),B(this,e,ce,$e,$,["maxWidth","andText","space","padding","intrinsic"])}}function ae(e){var t,n;const s=e.$$slots.default,r=c(s,e,null);return{c(){t=u("div"),r&&r.c(),m(t,"class","cluster svelte-vfokfz")},l(e){r&&r.l(div_nodes)},m(s,o){d(s,t,o),r&&r.m(t,null),e.div_binding(t),n=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(a(s,t,e,null),i(s,t,null))},i(e){n||(L(r,e),n=!0)},o(e){E(r,e),n=!1},d(n){n&&p(t),r&&r.d(n),e.div_binding(null)}}}function le(e,t,n){let s,{justify:r="center",align:o="center",space:$="s0"}=t;x(()=>{s.querySelectorAll(".cluster > *").forEach(e=>{e.style.justifyContent=N(r),e.style.alignItems=N(o),e.style.margin=`calc(${N($)} / 2 * -1)`}),s.querySelectorAll(".cluster > * > *").forEach(e=>e.style.margin=`calc(${N($)} / 2)`)});let{$$slots:c={},$$scope:i}=t;return e.$set=(e=>{"justify"in e&&n("justify",r=e.justify),"align"in e&&n("align",o=e.align),"space"in e&&n("space",$=e.space),"$$scope"in e&&n("$$scope",i=e.$$scope)}),{justify:r,align:o,space:$,cluster:s,div_binding:function(e){_[e?"unshift":"push"](()=>{n("cluster",s=e)})},$$slots:c,$$scope:i}}class de extends I{constructor(e){super(),B(this,e,le,ae,$,["justify","align","space"])}}const pe=()=>({}),ue=()=>({}),fe=()=>({}),ge=()=>({}),me=()=>({}),ve=()=>({}),he=()=>({}),be=()=>({});function xe(e){var t,n,s,r;const o=e.$$slots["not-sidebar"],$=c(o,e,ge),l=e.$$slots.sidebar,f=c(l,e,ue);return{c(){t=u("div"),$&&$.c(),n=g(),s=u("div"),f&&f.c(),m(t,"class","not-sidebar svelte-nnbk3l"),m(s,"class","sidebar svelte-nnbk3l")},l(e){$&&$.l(div0_nodes),f&&f.l(div1_nodes)},m(o,c){d(o,t,c),$&&$.m(t,null),e.div0_binding_1(t),d(o,n,c),d(o,s,c),f&&f.m(s,null),e.div1_binding_1(s),r=!0},p(e,t){$&&$.p&&e.$$scope&&$.p(a(o,t,e,fe),i(o,t,ge)),f&&f.p&&e.$$scope&&f.p(a(l,t,e,pe),i(l,t,ue))},i(e){r||(L($,e),L(f,e),r=!0)},o(e){E($,e),E(f,e),r=!1},d(r){r&&p(t),$&&$.d(r),e.div0_binding_1(null),r&&(p(n),p(s)),f&&f.d(r),e.div1_binding_1(null)}}}function ye(e){var t,n,s,r;const o=e.$$slots.sidebar,$=c(o,e,be),l=e.$$slots["not-sidebar"],f=c(l,e,ve);return{c(){t=u("div"),$&&$.c(),n=g(),s=u("div"),f&&f.c(),m(t,"class","sidebar svelte-nnbk3l"),m(s,"class","not-sidebar svelte-nnbk3l")},l(e){$&&$.l(div0_nodes),f&&f.l(div1_nodes)},m(o,c){d(o,t,c),$&&$.m(t,null),e.div0_binding(t),d(o,n,c),d(o,s,c),f&&f.m(s,null),e.div1_binding(s),r=!0},p(e,t){$&&$.p&&e.$$scope&&$.p(a(o,t,e,he),i(o,t,be)),f&&f.p&&e.$$scope&&f.p(a(l,t,e,me),i(l,t,ve))},i(e){r||(L($,e),L(f,e),r=!0)},o(e){E($,e),E(f,e),r=!1},d(r){r&&p(t),$&&$.d(r),e.div0_binding(null),r&&(p(n),p(s)),f&&f.d(r),e.div1_binding(null)}}}function _e(e){var t,n,s,o,$,c=[ye,xe],i=[];function a(e,t){return"left"===t.side?0:1}return s=a(0,e),o=i[s]=c[s](e),{c(){t=u("div"),n=u("div"),o.c(),m(n,"class","svelte-nnbk3l"),m(t,"class","with-sidebar svelte-nnbk3l")},m(r,o){d(r,t,o),l(t,n),i[s].m(n,null),e.div1_binding_2(t),$=!0},p(e,t){var $=s;(s=a(0,t))===$?i[s].p(e,t):(A={r:0,c:[],p:A},E(i[$],1,1,()=>{i[$]=null}),A.r||r(A.c),A=A.p,(o=i[s])||(o=i[s]=c[s](t)).c(),L(o,1),o.m(n,null))},i(e){$||(L(o),$=!0)},o(e){E(o),$=!1},d(n){n&&p(t),i[s].d(),e.div1_binding_2(null)}}}function we(e,t,n){let s,r,o,{side:$="left",sideWidth:c="",contentMin:i="50%",space:a="s0"}=t;x(()=>{n("notSidebar",r.style.minWidth=N(i),r),c&&n("sidebar",o.style.flexBasis=N(c),o),a&&(s.querySelectorAll(".with-sidebar > *").forEach(e=>e.style.margin=`calc(${N(a)} / 2 * -1)`),s.querySelectorAll(".with-sidebar > * > *").forEach(e=>e.style.margin=`calc(${N(a)} / 2)`),n("notSidebar",r.style.minWidth=`calc(${N(i)} - ${N(a)})`,r))});let{$$slots:l={},$$scope:d}=t;return e.$set=(e=>{"side"in e&&n("side",$=e.side),"sideWidth"in e&&n("sideWidth",c=e.sideWidth),"contentMin"in e&&n("contentMin",i=e.contentMin),"space"in e&&n("space",a=e.space),"$$scope"in e&&n("$$scope",d=e.$$scope)}),{side:$,sideWidth:c,contentMin:i,space:a,withSidebar:s,notSidebar:r,sidebar:o,div0_binding:function(e){_[e?"unshift":"push"](()=>{n("sidebar",o=e)})},div1_binding:function(e){_[e?"unshift":"push"](()=>{n("notSidebar",r=e)})},div0_binding_1:function(e){_[e?"unshift":"push"](()=>{n("notSidebar",r=e)})},div1_binding_1:function(e){_[e?"unshift":"push"](()=>{n("sidebar",o=e)})},div1_binding_2:function(e){_[e?"unshift":"push"](()=>{n("withSidebar",s=e)})},$$slots:l,$$scope:d}}class ke extends I{constructor(e){super(),B(this,e,we,_e,$,["side","sideWidth","contentMin","space"])}}function Ce(e){var t,n,s;const r=e.$$slots.default,o=c(r,e,null);return{c(){t=u("div"),n=u("div"),o&&o.c(),m(n,"class","svelte-ya789e"),m(t,"class","switcher svelte-ya789e")},l(e){o&&o.l(div0_nodes)},m(r,$){d(r,t,$),l(t,n),o&&o.m(n,null),e.div1_binding(t),s=!0},p(e,t){o&&o.p&&e.$$scope&&o.p(a(r,t,e,null),i(r,t,null))},i(e){s||(L(o,e),s=!0)},o(e){E(o,e),s=!1},d(n){n&&p(t),o&&o.d(n),e.div1_binding(null)}}}function Se(e,t,n){let s,{threshold:r="measure",space:o="s0",limit:$="5"}=t;x(()=>{s.querySelectorAll(".switcher > *").forEach(e=>e.style.margin=`calc(${N(o)} / 2 * -1)`),s.querySelectorAll(".switcher > * > *").forEach(e=>{e.style.flexBasis=`calc((${N(r)} - 100% + ${N(o)}) * 999)`,e.style.margin=`calc(${N(o)} / 2)`}),$&&s.querySelectorAll(`.switcher > * > :nth-last-child(n+${$}), .switcher > * > :nth-last-child(n+${$}) ~ *`).forEach(e=>e.style.flexBasis="100%")});let{$$slots:c={},$$scope:i}=t;return e.$set=(e=>{"threshold"in e&&n("threshold",r=e.threshold),"space"in e&&n("space",o=e.space),"limit"in e&&n("limit",$=e.limit),"$$scope"in e&&n("$$scope",i=e.$$scope)}),{threshold:r,space:o,limit:$,switcher:s,div1_binding:function(e){_[e?"unshift":"push"](()=>{n("switcher",s=e)})},$$slots:c,$$scope:i}}class We extends I{constructor(e){super(),B(this,e,Se,Ce,$,["threshold","space","limit"])}}function Te(e){var t,n;const s=e.$$slots.default,r=c(s,e,null);return{c(){t=u("div"),r&&r.c(),m(t,"class","frame svelte-1l9ak52")},l(e){r&&r.l(div_nodes)},m(s,o){d(s,t,o),r&&r.m(t,null),e.div_binding(t),n=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(a(s,t,e,null),i(s,t,null))},i(e){n||(L(r,e),n=!0)},o(e){E(r,e),n=!1},d(n){n&&p(t),r&&r.d(n),e.div_binding(null)}}}function He(e,t,n){let s,{n:r="6",d:o="9"}=t;x(()=>{n("frame",s.style.paddingBottom=`calc(${N(r)} / ${N(o)} * 100%)`,s)});let{$$slots:$={},$$scope:c}=t;return e.$set=(e=>{"n"in e&&n("n",r=e.n),"d"in e&&n("d",o=e.d),"$$scope"in e&&n("$$scope",c=e.$$scope)}),{n:r,d:o,frame:s,div_binding:function(e){_[e?"unshift":"push"](()=>{n("frame",s=e)})},$$slots:$,$$scope:c}}class Me extends I{constructor(e){super(),B(this,e,He,Te,$,["n","d"])}}function Ae(e){var t,n;const s=e.$$slots.default,r=c(s,e,null);return{c(){t=u("div"),r&&r.c(),m(t,"class","reel svelte-q0j2c2")},l(e){r&&r.l(div_nodes)},m(s,o){d(s,t,o),r&&r.m(t,null),e.div_binding(t),n=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(a(s,t,e,null),i(s,t,null))},i(e){n||(L(r,e),n=!0)},o(e){E(r,e),n=!1},d(n){n&&p(t),r&&r.d(n),e.div_binding(null)}}}function Le(e,t,n){let s,{itemWidth:r="auto",space:o="s1",height:$="auto"}=t;x(()=>{n("reel",s.style.height=N($),s),s.querySelectorAll(".reel > * + *").forEach(e=>e.style.marginLeft=N(o)),s.querySelectorAll(".reel > *").forEach(e=>e.style.flex=`0 0 ${N(r)}`)});let{$$slots:c={},$$scope:i}=t;return e.$set=(e=>{"itemWidth"in e&&n("itemWidth",r=e.itemWidth),"space"in e&&n("space",o=e.space),"height"in e&&n("height",$=e.height),"$$scope"in e&&n("$$scope",i=e.$$scope)}),{itemWidth:r,space:o,height:$,reel:s,div_binding:function(e){_[e?"unshift":"push"](()=>{n("reel",s=e)})},$$slots:c,$$scope:i}}class Ee extends I{constructor(e){super(),B(this,e,Le,Ae,$,["itemWidth","space","height"])}}function je(e){var t,n;const s=e.$$slots.default,r=c(s,e,null);return{c(){t=u("div"),r&&r.c(),m(t,"class","imposter svelte-19lqn93")},l(e){r&&r.l(div_nodes)},m(s,o){d(s,t,o),r&&r.m(t,null),e.div_binding(t),n=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(a(s,t,e,null),i(s,t,null))},i(e){n||(L(r,e),n=!0)},o(e){E(r,e),n=!1},d(n){n&&p(t),r&&r.d(n),e.div_binding(null)}}}function qe(e,t,n){let s,{margin:r="s0",fixed:o=!1,breakout:$=!1}=t;x(()=>{o&&n("imposter",s.style.position="fixed",s),$||(n("imposter",s.style.maxWidth=`calc(100% - ${N(r)} * 2)`,s),n("imposter",s.style.maxHeight=`calc(100% - ${N(r)} * 2)`,s))});let{$$slots:c={},$$scope:i}=t;return e.$set=(e=>{"margin"in e&&n("margin",r=e.margin),"fixed"in e&&n("fixed",o=e.fixed),"breakout"in e&&n("breakout",$=e.breakout),"$$scope"in e&&n("$$scope",i=e.$$scope)}),{margin:r,fixed:o,breakout:$,imposter:s,div_binding:function(e){_[e?"unshift":"push"](()=>{n("imposter",s=e)})},$$slots:c,$$scope:i}}class ze extends I{constructor(e){super(),B(this,e,qe,je,$,["margin","fixed","breakout"])}}const Be=()=>({}),Ie=()=>({});function Ne(e){var t,n;const s=e.$$slots.title,r=c(s,e,Ie);return{c(){t=u("div"),r&&r.c(),m(t,"slot","above")},l(e){r&&r.l(div_nodes)},m(e,s){d(e,t,s),r&&r.m(t,null),n=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(a(s,t,e,Be),i(s,t,Ie))},i(e){n||(L(r,e),n=!0)},o(e){E(r,e),n=!1},d(e){e&&p(t),r&&r.d(e)}}}function Oe(e){var t,n;const s=e.$$slots.default,r=c(s,e,null);return{c(){t=g(),r&&r.c()},l(e){r&&r.l(e)},m(e,s){d(e,t,s),r&&r.m(e,s),n=!0},p(e,t){r&&r.p&&e.$$scope&&r.p(a(s,t,e,null),i(s,t,null))},i(e){n||(L(r,e),n=!0)},o(e){E(r,e),n=!1},d(e){e&&p(t),r&&r.d(e)}}}function Xe(e){var t,n=new Z({props:{minHeight:"1rem",$$slots:{default:[Oe],above:[Ne]},$$scope:{ctx:e}}});return{c(){n.$$.fragment.c()},m(e,s){j(n,e,s),t=!0},p(e,t){var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),n.$set(s)},i(e){t||(L(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){q(n,e)}}}function Fe(e){var t,n=new ie({props:{$$slots:{default:[Xe]},$$scope:{ctx:e}}});return{c(){n.$$.fragment.c()},m(e,s){j(n,e,s),t=!0},p(e,t){var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),n.$set(s)},i(e){t||(L(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){q(n,e)}}}function Ge(e){var t,n=new V({props:{backgroundColor:"white",$$slots:{default:[Fe]},$$scope:{ctx:e}}});return{c(){n.$$.fragment.c()},m(e,s){j(n,e,s),t=!0},p(e,t){var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),n.$set(s)},i(e){t||(L(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){q(n,e)}}}function Pe(e,t,n){let{$$slots:s={},$$scope:r}=t;return e.$set=(e=>{"$$scope"in e&&n("$$scope",r=e.$$scope)}),{$$slots:s,$$scope:r}}class Re extends I{constructor(e){super(),B(this,e,Pe,Ge,$,[])}}function Ze(e){var t;return{c(){(t=u("a")).innerHTML="<h1>EveryLayout in Svelte</h1>",m(t,"id","top"),m(t,"href","https://every-layout.dev/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function De(e){var t,n,s=new ie({props:{$$slots:{default:[Ze]},$$scope:{ctx:e}}});return{c(){t=u("div"),s.$$.fragment.c(),m(t,"slot","above")},m(e,r){d(e,t,r),j(s,t,null),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s)}}}function Je(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Stack</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/stack/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Ke(e){var t;return{c(){(t=u("ul")).innerHTML="<li><hr></li> <li><hr></li> <li><hr></li>"},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Qe(e){var t,n,s=new te({props:{recursive:"true",$$slots:{default:[Ke]},$$scope:{ctx:e}}});return{c(){t=g(),s.$$.fragment.c()},m(e,r){d(e,t,r),j(s,e,r),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s,e)}}}function Ue(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Box</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/box/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Ve(t){var n,s,r=new V({});return{c(){n=g(),r.$$.fragment.c()},m(e,t){d(e,n,t),j(r,e,t),s=!0},p:e,i(e){s||(L(r.$$.fragment,e),s=!0)},o(e){E(r.$$.fragment,e),s=!1},d(e){e&&p(n),q(r,e)}}}function Ye(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Bracket</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/center/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function et(e){var t;return{c(){v(t=u("div"),"height","calc(var(--s1) * 2)")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function tt(e){var t,n,s=new V({props:{padding:"zero",$$slots:{default:[et]},$$scope:{ctx:e}}});return{c(){t=u("div"),s.$$.fragment.c(),m(t,"slot","left")},m(e,r){d(e,t,r),j(s,t,null),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s)}}}function nt(e){var t;return{c(){v(t=u("div"),"height","calc(var(--s1) * 2)")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function st(e){var t,n,s=new V({props:{padding:"zero",$$slots:{default:[nt]},$$scope:{ctx:e}}});return{c(){t=u("div"),s.$$.fragment.c(),m(t,"slot","right")},m(e,r){d(e,t,r),j(s,t,null),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s)}}}function rt(t){var n,s,r,o=new V({props:{padding:"s1"}});return{c(){n=g(),o.$$.fragment.c(),s=g()},m(e,t){d(e,n,t),j(o,e,t),d(e,s,t),r=!0},p:e,i(e){r||(L(o.$$.fragment,e),r=!0)},o(e){E(o.$$.fragment,e),r=!1},d(e){e&&p(n),q(o,e),e&&p(s)}}}function ot(e){var t,n,s=new ie({props:{space:"s0",$$slots:{default:[rt],right:[st],left:[tt]},$$scope:{ctx:e}}});return{c(){t=g(),s.$$.fragment.c()},m(e,r){d(e,t,r),j(s,e,r),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s,e)}}}function $t(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Cluster</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/cluster/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function ct(e){var t;return{c(){(t=u("ul")).innerHTML="<li>Content</li> <li>Content</li> <li>Content</li> <li>Content</li> <li>Content</li>",v(t,"list-style","none")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function it(e){var t,n,s=new de({props:{$$slots:{default:[ct]},$$scope:{ctx:e}}});return{c(){t=g(),s.$$.fragment.c()},m(e,r){d(e,t,r),j(s,e,r),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s,e)}}}function at(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Sidebar</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/sidebar/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function lt(e){var t,n,s,r,o;return{c(){(t=u("p")).textContent="A",n=g(),(s=u("p")).textContent="B",r=g(),(o=u("p")).textContent="C"},m(e,$){d(e,t,$),d(e,n,$),d(e,s,$),d(e,r,$),d(e,o,$)},d(e){e&&(p(t),p(n),p(s),p(r),p(o))}}}function dt(e){var t,n,s=new V({props:{padding:"s-2",color:"white",$$slots:{default:[lt]},$$scope:{ctx:e}}});return{c(){t=u("div"),s.$$.fragment.c(),m(t,"slot","sidebar")},m(e,r){d(e,t,r),j(s,t,null),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s)}}}function pt(e){var t;return{c(){(t=u("p")).textContent="Main Content"},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function ut(e){var t,n,s=new V({props:{color:"white",$$slots:{default:[pt]},$$scope:{ctx:e}}});return{c(){t=u("div"),s.$$.fragment.c(),m(t,"slot","not-sidebar")},m(e,r){d(e,t,r),j(s,t,null),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s)}}}function ft(t){var n;return{c(){n=g()},m(e,t){d(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}function gt(e){var t,n,s=new ke({props:{contentMin:"70%",$$slots:{default:[ft],"not-sidebar":[ut],sidebar:[dt]},$$scope:{ctx:e}}});return{c(){t=g(),s.$$.fragment.c()},m(e,r){d(e,t,r),j(s,e,r),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s,e)}}}function mt(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Switcher</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/switcher/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function vt(t){var n,s,r,o=new V({props:{padding:"s0"}}),$=new V({props:{padding:"s0"}}),c=new V({props:{padding:"s0"}});return{c(){o.$$.fragment.c(),n=g(),$.$$.fragment.c(),s=g(),c.$$.fragment.c()},m(e,t){j(o,e,t),d(e,n,t),j($,e,t),d(e,s,t),j(c,e,t),r=!0},p:e,i(e){r||(L(o.$$.fragment,e),L($.$$.fragment,e),L(c.$$.fragment,e),r=!0)},o(e){E(o.$$.fragment,e),E($.$$.fragment,e),E(c.$$.fragment,e),r=!1},d(e){q(o,e),e&&p(n),q($,e),e&&p(s),q(c,e)}}}function ht(e){var t,n,s=new We({props:{threshold:"13rem",$$slots:{default:[vt]},$$scope:{ctx:e}}});return{c(){t=g(),s.$$.fragment.c()},m(e,r){d(e,t,r),j(s,e,r),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s,e)}}}function bt(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Cover</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/cover/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function xt(e){var t;return{c(){(t=u("div")).innerHTML="<hr>",m(t,"slot","above")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function yt(e){var t;return{c(){(t=u("div")).innerHTML="<hr>",m(t,"slot","below")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function _t(t){var n,s,r,o=new V({});return{c(){n=g(),o.$$.fragment.c(),s=g()},m(e,t){d(e,n,t),j(o,e,t),d(e,s,t),r=!0},p:e,i(e){r||(L(o.$$.fragment,e),r=!0)},o(e){E(o.$$.fragment,e),r=!1},d(e){e&&p(n),q(o,e),e&&p(s)}}}function wt(e){var t,n,s=new Z({props:{minHeight:"10vh",$$slots:{default:[_t],below:[yt],above:[xt]},$$scope:{ctx:e}}});return{c(){t=g(),s.$$.fragment.c()},m(e,r){d(e,t,r),j(s,e,r),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s,e)}}}function kt(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Grid</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/grid/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Ct(e){var t;return{c(){t=f("X")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function St(e){var t;return{c(){t=f("o")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Wt(e){var t;return{c(){t=f("o")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Tt(e){var t;return{c(){t=f("o")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Ht(e){var t;return{c(){t=f("X")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Mt(e){var t;return{c(){t=f("o")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function At(e){var t;return{c(){t=f("o")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Lt(e){var t;return{c(){t=f("o")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Et(e){var t;return{c(){t=f("X")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function jt(e){var t,n,s,r,o,$,c,i,a,l=new V({props:{padding:"s-3",color:"white",$$slots:{default:[Ct]},$$scope:{ctx:e}}}),u=new V({props:{padding:"s-3",color:"white",$$slots:{default:[St]},$$scope:{ctx:e}}}),f=new V({props:{padding:"s-3",color:"white",$$slots:{default:[Wt]},$$scope:{ctx:e}}}),m=new V({props:{padding:"s-3",color:"white",$$slots:{default:[Tt]},$$scope:{ctx:e}}}),v=new V({props:{padding:"s-3",color:"white",$$slots:{default:[Ht]},$$scope:{ctx:e}}}),h=new V({props:{padding:"s-3",color:"white",$$slots:{default:[Mt]},$$scope:{ctx:e}}}),b=new V({props:{padding:"s-3",color:"white",$$slots:{default:[At]},$$scope:{ctx:e}}}),x=new V({props:{padding:"s-3",color:"white",$$slots:{default:[Lt]},$$scope:{ctx:e}}}),y=new V({props:{padding:"s-3",color:"white",$$slots:{default:[Et]},$$scope:{ctx:e}}});return{c(){l.$$.fragment.c(),t=g(),u.$$.fragment.c(),n=g(),f.$$.fragment.c(),s=g(),m.$$.fragment.c(),r=g(),v.$$.fragment.c(),o=g(),h.$$.fragment.c(),$=g(),b.$$.fragment.c(),c=g(),x.$$.fragment.c(),i=g(),y.$$.fragment.c()},m(e,p){j(l,e,p),d(e,t,p),j(u,e,p),d(e,n,p),j(f,e,p),d(e,s,p),j(m,e,p),d(e,r,p),j(v,e,p),d(e,o,p),j(h,e,p),d(e,$,p),j(b,e,p),d(e,c,p),j(x,e,p),d(e,i,p),j(y,e,p),a=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),l.$set(n);var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),u.$set(s);var r={};e.$$scope&&(r.$$scope={changed:e,ctx:t}),f.$set(r);var o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),m.$set(o);var $={};e.$$scope&&($.$$scope={changed:e,ctx:t}),v.$set($);var c={};e.$$scope&&(c.$$scope={changed:e,ctx:t}),h.$set(c);var i={};e.$$scope&&(i.$$scope={changed:e,ctx:t}),b.$set(i);var a={};e.$$scope&&(a.$$scope={changed:e,ctx:t}),x.$set(a);var d={};e.$$scope&&(d.$$scope={changed:e,ctx:t}),y.$set(d)},i(e){a||(L(l.$$.fragment,e),L(u.$$.fragment,e),L(f.$$.fragment,e),L(m.$$.fragment,e),L(v.$$.fragment,e),L(h.$$.fragment,e),L(b.$$.fragment,e),L(x.$$.fragment,e),L(y.$$.fragment,e),a=!0)},o(e){E(l.$$.fragment,e),E(u.$$.fragment,e),E(f.$$.fragment,e),E(m.$$.fragment,e),E(v.$$.fragment,e),E(h.$$.fragment,e),E(b.$$.fragment,e),E(x.$$.fragment,e),E(y.$$.fragment,e),a=!1},d(e){q(l,e),e&&p(t),q(u,e),e&&p(n),q(f,e),e&&p(s),q(m,e),e&&p(r),q(v,e),e&&p(o),q(h,e),e&&p($),q(b,e),e&&p(c),q(x,e),e&&p(i),q(y,e)}}}function qt(e){var t,n,s,r=new K({props:{min:"s1",space:"s0",$$slots:{default:[jt]},$$scope:{ctx:e}}});return{c(){t=g(),n=u("div"),r.$$.fragment.c(),v(n,"min-width","8rem")},m(e,o){d(e,t,o),d(e,n,o),j(r,n,null),s=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),r.$set(n)},i(e){s||(L(r.$$.fragment,e),s=!0)},o(e){E(r.$$.fragment,e),s=!1},d(e){e&&(p(t),p(n)),q(r)}}}function zt(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Frame</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/frame/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Bt(e){var t;return{c(){m(t=u("img"),"src","favicon.png"),m(t,"alt","favicon")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function It(e){var t,n=new Me({props:{$$slots:{default:[Bt]},$$scope:{ctx:e}}});return{c(){n.$$.fragment.c()},m(e,s){j(n,e,s),t=!0},p(e,t){var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),n.$set(s)},i(e){t||(L(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){q(n,e)}}}function Nt(e){var t,n,s=new V({props:{padding:"zero",$$slots:{default:[It]},$$scope:{ctx:e}}});return{c(){t=g(),s.$$.fragment.c()},m(e,r){d(e,t,r),j(s,e,r),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s,e)}}}function Ot(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Reel</h5>",m(t,"slot","title"),m(t,"href","https://every-layout.dev/layouts/reel/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Xt(e){var t,n,s,r,o,$,c,i,a,l,f,v,h,b,x,y,_,w,k;return{c(){t=u("img"),n=g(),s=u("img"),r=g(),o=u("img"),$=g(),c=u("img"),i=g(),a=u("img"),l=g(),f=u("img"),v=g(),h=u("img"),b=g(),x=u("img"),y=g(),_=u("img"),w=g(),k=u("img"),m(t,"src","favicon.png"),m(t,"alt","favicon"),m(s,"src","favicon.png"),m(s,"alt","favicon"),m(o,"src","favicon.png"),m(o,"alt","favicon"),m(c,"src","favicon.png"),m(c,"alt","favicon"),m(a,"src","favicon.png"),m(a,"alt","favicon"),m(f,"src","favicon.png"),m(f,"alt","favicon"),m(h,"src","favicon.png"),m(h,"alt","favicon"),m(x,"src","favicon.png"),m(x,"alt","favicon"),m(_,"src","favicon.png"),m(_,"alt","favicon"),m(k,"src","favicon.png"),m(k,"alt","favicon")},m(e,p){d(e,t,p),d(e,n,p),d(e,s,p),d(e,r,p),d(e,o,p),d(e,$,p),d(e,c,p),d(e,i,p),d(e,a,p),d(e,l,p),d(e,f,p),d(e,v,p),d(e,h,p),d(e,b,p),d(e,x,p),d(e,y,p),d(e,_,p),d(e,w,p),d(e,k,p)},d(e){e&&(p(t),p(n),p(s),p(r),p(o),p($),p(c),p(i),p(a),p(l),p(f),p(v),p(h),p(b),p(x),p(y),p(_),p(w),p(k))}}}function Ft(e){var t,n,s=new Ee({props:{itemWidth:"s2",$$slots:{default:[Xt]},$$scope:{ctx:e}}});return{c(){t=u("div"),s.$$.fragment.c(),v(t,"max-width","12rem")},m(e,r){d(e,t,r),j(s,t,null),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s)}}}function Gt(e){var t,n,s=new V({props:{padding:"zero",backgroundColor:"white",$$slots:{default:[Ft]},$$scope:{ctx:e}}});return{c(){t=g(),s.$$.fragment.c()},m(e,r){d(e,t,r),j(s,e,r),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s,e)}}}function Pt(e){var t;return{c(){(t=u("a")).innerHTML="<h5>Imposter</h5>",m(t,"slot","title"),m(t,"href","https://absolutely.every-layout.dev/layouts/imposter/"),m(t,"target","blank")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Rt(e){var t,n,s,r,o,$,c,i,a,l,f;return{c(){(t=u("p")).textContent="I'm important!",n=g(),s=u("br"),r=g(),o=u("br"),$=g(),c=u("br"),i=g(),a=u("br"),l=g(),(f=u("p")).textContent="And scrollable!"},m(e,p){d(e,t,p),d(e,n,p),d(e,s,p),d(e,r,p),d(e,o,p),d(e,$,p),d(e,c,p),d(e,i,p),d(e,a,p),d(e,l,p),d(e,f,p)},d(e){e&&(p(t),p(n),p(s),p(r),p(o),p($),p(c),p(i),p(a),p(l),p(f))}}}function Zt(e){var t,n=new V({props:{color:"white",padding:"s-2",$$slots:{default:[Rt]},$$scope:{ctx:e}}});return{c(){n.$$.fragment.c()},m(e,s){j(n,e,s),t=!0},p(e,t){var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),n.$set(s)},i(e){t||(L(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){q(n,e)}}}function Dt(e){var t,n,s,r,o=new ze({props:{margin:"s1",$$slots:{default:[Zt]},$$scope:{ctx:e}}});return{c(){t=u("div"),(n=u("p")).textContent="Some obscured text. Some obscured text. Some obscured text. Some obscured text. Some obscured text.",s=g(),o.$$.fragment.c(),v(t,"max-width","12rem"),v(t,"position","relative")},m(e,$){d(e,t,$),l(t,n),l(t,s),j(o,t,null),r=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),o.$set(n)},i(e){r||(L(o.$$.fragment,e),r=!0)},o(e){E(o.$$.fragment,e),r=!1},d(e){e&&p(t),q(o)}}}function Jt(e){var t,n,s=new V({props:{padding:"zero",backgroundColor:"white",$$slots:{default:[Dt]},$$scope:{ctx:e}}});return{c(){t=g(),s.$$.fragment.c()},m(e,r){d(e,t,r),j(s,e,r),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s,e)}}}function Kt(e){var t,n,s,r,o,$,c,i,a,l,u,f=new Re({props:{$$slots:{default:[Qe],title:[Je]},$$scope:{ctx:e}}}),m=new Re({props:{$$slots:{default:[Ve],title:[Ue]},$$scope:{ctx:e}}}),v=new Re({props:{$$slots:{default:[ot],title:[Ye]},$$scope:{ctx:e}}}),h=new Re({props:{$$slots:{default:[it],title:[$t]},$$scope:{ctx:e}}}),b=new Re({props:{$$slots:{default:[gt],title:[at]},$$scope:{ctx:e}}}),x=new Re({props:{$$slots:{default:[ht],title:[mt]},$$scope:{ctx:e}}}),y=new Re({props:{$$slots:{default:[wt],title:[bt]},$$scope:{ctx:e}}}),_=new Re({props:{$$slots:{default:[qt],title:[kt]},$$scope:{ctx:e}}}),w=new Re({props:{$$slots:{default:[Nt],title:[zt]},$$scope:{ctx:e}}}),k=new Re({props:{$$slots:{default:[Gt],title:[Ot]},$$scope:{ctx:e}}}),C=new Re({props:{$$slots:{default:[Jt],title:[Pt]},$$scope:{ctx:e}}});return{c(){f.$$.fragment.c(),t=g(),m.$$.fragment.c(),n=g(),v.$$.fragment.c(),s=g(),h.$$.fragment.c(),r=g(),b.$$.fragment.c(),o=g(),x.$$.fragment.c(),$=g(),y.$$.fragment.c(),c=g(),_.$$.fragment.c(),i=g(),w.$$.fragment.c(),a=g(),k.$$.fragment.c(),l=g(),C.$$.fragment.c()},m(e,p){j(f,e,p),d(e,t,p),j(m,e,p),d(e,n,p),j(v,e,p),d(e,s,p),j(h,e,p),d(e,r,p),j(b,e,p),d(e,o,p),j(x,e,p),d(e,$,p),j(y,e,p),d(e,c,p),j(_,e,p),d(e,i,p),j(w,e,p),d(e,a,p),j(k,e,p),d(e,l,p),j(C,e,p),u=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),f.$set(n);var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),m.$set(s);var r={};e.$$scope&&(r.$$scope={changed:e,ctx:t}),v.$set(r);var o={};e.$$scope&&(o.$$scope={changed:e,ctx:t}),h.$set(o);var $={};e.$$scope&&($.$$scope={changed:e,ctx:t}),b.$set($);var c={};e.$$scope&&(c.$$scope={changed:e,ctx:t}),x.$set(c);var i={};e.$$scope&&(i.$$scope={changed:e,ctx:t}),y.$set(i);var a={};e.$$scope&&(a.$$scope={changed:e,ctx:t}),_.$set(a);var l={};e.$$scope&&(l.$$scope={changed:e,ctx:t}),w.$set(l);var d={};e.$$scope&&(d.$$scope={changed:e,ctx:t}),k.$set(d);var p={};e.$$scope&&(p.$$scope={changed:e,ctx:t}),C.$set(p)},i(e){u||(L(f.$$.fragment,e),L(m.$$.fragment,e),L(v.$$.fragment,e),L(h.$$.fragment,e),L(b.$$.fragment,e),L(x.$$.fragment,e),L(y.$$.fragment,e),L(_.$$.fragment,e),L(w.$$.fragment,e),L(k.$$.fragment,e),L(C.$$.fragment,e),u=!0)},o(e){E(f.$$.fragment,e),E(m.$$.fragment,e),E(v.$$.fragment,e),E(h.$$.fragment,e),E(b.$$.fragment,e),E(x.$$.fragment,e),E(y.$$.fragment,e),E(_.$$.fragment,e),E(w.$$.fragment,e),E(k.$$.fragment,e),E(C.$$.fragment,e),u=!1},d(e){q(f,e),e&&p(t),q(m,e),e&&p(n),q(v,e),e&&p(s),q(h,e),e&&p(r),q(b,e),e&&p(o),q(x,e),e&&p($),q(y,e),e&&p(c),q(_,e),e&&p(i),q(w,e),e&&p(a),q(k,e),e&&p(l),q(C,e)}}}function Qt(e){var t;return{c(){(t=u("a")).innerHTML="<p>Back to top</p>",m(t,"href","#top")},m(e,n){d(e,t,n)},d(e){e&&p(t)}}}function Ut(e){var t,n,s=new ie({props:{$$slots:{default:[Qt]},$$scope:{ctx:e}}});return{c(){t=u("div"),s.$$.fragment.c(),m(t,"slot","below")},m(e,r){d(e,t,r),j(s,t,null),n=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i(e){n||(L(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&p(t),q(s)}}}function Vt(e){var t,n,s,r=new K({props:{min:"18rem",$$slots:{default:[Kt]},$$scope:{ctx:e}}});return{c(){t=g(),r.$$.fragment.c(),n=g()},m(e,o){d(e,t,o),j(r,e,o),d(e,n,o),s=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),r.$set(n)},i(e){s||(L(r.$$.fragment,e),s=!0)},o(e){E(r.$$.fragment,e),s=!1},d(e){e&&p(t),q(r,e),e&&p(n)}}}function Yt(e){var t,n=new Z({props:{$$slots:{default:[Vt],below:[Ut],above:[De]},$$scope:{ctx:e}}});return{c(){n.$$.fragment.c()},m(e,s){j(n,e,s),t=!0},p(e,t){var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),n.$set(s)},i(e){t||(L(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){q(n,e)}}}return new class extends I{constructor(e){super(),B(this,e,null,Yt,$,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
