import{l as V,t as ni,k as ri}from"./client.DaaCOydI.js";var b,v,U,j,A=0,I=[],m=[],u=V,P=u.__b,T=u.__r,z=u.diffed,B=u.__c,G=u.unmount,J=u.__;function K(t,i){u.__h&&u.__h(v,t,A||i),A=0;var n=v.__H||(v.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:m}),n.__[t]}function oi(t,i){var n=K(b++,3);!u.__s&&M(n.__H,i)&&(n.__=t,n.i=i,v.__H.__h.push(n))}function L(t){return A=5,H(function(){return{current:t}},[])}function H(t,i){var n=K(b++,7);return M(n.__H,i)?(n.__V=t(),n.i=i,n.__h=t,n.__V):n.__}function fi(){for(var t;t=I.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(S),t.__H.__h.forEach(C),t.__H.__h=[]}catch(i){t.__H.__h=[],u.__e(i,t.__v)}}u.__b=function(t){v=null,P&&P(t)},u.__=function(t,i){t&&i.__k&&i.__k.__m&&(t.__m=i.__k.__m),J&&J(t,i)},u.__r=function(t){T&&T(t),b=0;var i=(v=t.__c).__H;i&&(U===v?(i.__h=[],v.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=m,n.__N=n.i=void 0})):(i.__h.forEach(S),i.__h.forEach(C),i.__h=[],b=0)),U=v},u.diffed=function(t){z&&z(t);var i=t.__c;i&&i.__H&&(i.__H.__h.length&&(I.push(i)!==1&&j===u.requestAnimationFrame||((j=u.requestAnimationFrame)||ei)(fi)),i.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==m&&(n.__=n.__V),n.i=void 0,n.__V=m})),U=v=null},u.__c=function(t,i){i.some(function(n){try{n.__h.forEach(S),n.__h=n.__h.filter(function(r){return!r.__||C(r)})}catch(r){i.some(function(e){e.__h&&(e.__h=[])}),i=[],u.__e(r,n.__v)}}),B&&B(t,i)},u.unmount=function(t){G&&G(t);var i,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{S(r)}catch(e){i=e}}),n.__H=void 0,i&&u.__e(i,n.__v))};var D=typeof requestAnimationFrame=="function";function ei(t){var i,n=function(){clearTimeout(r),D&&cancelAnimationFrame(i),setTimeout(t)},r=setTimeout(n,100);D&&(i=requestAnimationFrame(n))}function S(t){var i=v,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),v=i}function C(t){var i=v;t.__c=t.__(),v=i}function M(t,i){return!t||t.length!==i.length||i.some(function(n,r){return n!==t[r]})}var _i=Symbol.for("preact-signals");function E(){if(h>1)h--;else{for(var t,i=!1;p!==void 0;){var n=p;for(p=void 0,F++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&W(n))try{n.c()}catch(e){i||(t=e,i=!0)}n=r}}if(F=0,h--,i)throw t}}function ai(t){if(h>0)return t();h++;try{return t()}finally{E()}}var o=void 0;function ci(t){var i=o;o=void 0;try{return t()}finally{o=i}}var p=void 0,h=0,F=0,g=0;function Q(t){if(o!==void 0){var i=t.n;if(i===void 0||i.t!==o)return i={i:0,S:t,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:i},o.s!==void 0&&(o.s.n=i),o.s=i,t.n=i,32&o.f&&t.S(i),i;if(i.i===-1)return i.i=0,i.n!==void 0&&(i.n.p=i.p,i.p!==void 0&&(i.p.n=i.n),i.p=o.s,i.n=void 0,o.s.n=i,o.s=i),i}}function s(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}s.prototype.brand=_i;s.prototype.h=function(){return!0};s.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};s.prototype.U=function(t){if(this.t!==void 0){var i=t.e,n=t.x;i!==void 0&&(i.x=n,t.e=void 0),n!==void 0&&(n.e=i,t.x=void 0),t===this.t&&(this.t=n)}};s.prototype.subscribe=function(t){var i=this;return x(function(){var n=i.value,r=o;o=void 0;try{t(n)}finally{o=r}})};s.prototype.valueOf=function(){return this.value};s.prototype.toString=function(){return this.value+""};s.prototype.toJSON=function(){return this.value};s.prototype.peek=function(){var t=o;o=void 0;try{return this.value}finally{o=t}};Object.defineProperty(s.prototype,"value",{get:function(){var t=Q(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(F>100)throw new Error("Cycle detected");this.v=t,this.i++,g++,h++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{E()}}}});function R(t){return new s(t)}function W(t){for(var i=t.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function X(t){for(var i=t.s;i!==void 0;i=i.n){var n=i.S.n;if(n!==void 0&&(i.r=n),i.S.n=i,i.i=-1,i.n===void 0){t.s=i;break}}}function Y(t){for(var i=t.s,n=void 0;i!==void 0;){var r=i.p;i.i===-1?(i.S.U(i),r!==void 0&&(r.n=i.n),i.n!==void 0&&(i.n.p=r)):n=i,i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=r}t.s=n}function c(t){s.call(this,void 0),this.x=t,this.s=void 0,this.g=g-1,this.f=4}(c.prototype=new s).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===g))return!0;if(this.g=g,this.f|=1,this.i>0&&!W(this))return this.f&=-2,!0;var t=o;try{X(this),o=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return o=t,Y(this),this.f&=-2,!0};c.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}s.prototype.S.call(this,t)};c.prototype.U=function(t){if(this.t!==void 0&&(s.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};c.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(c.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=Q(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Z(t){return new c(t)}function ii(t){var i=t.u;if(t.u=void 0,typeof i=="function"){h++;var n=o;o=void 0;try{i()}catch(r){throw t.f&=-2,t.f|=8,O(t),r}finally{o=n,E()}}}function O(t){for(var i=t.s;i!==void 0;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,ii(t)}function ui(t){if(o!==this)throw new Error("Out-of-order effect");Y(this),o=t,this.f&=-2,8&this.f&&O(this),E()}function l(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}l.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var i=this.x();typeof i=="function"&&(this.u=i)}finally{t()}};l.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,ii(this),X(this),h++;var t=o;return o=this,ui.bind(this,t)};l.prototype.N=function(){2&this.f||(this.f|=2,this.o=p,p=this)};l.prototype.d=function(){this.f|=8,1&this.f||O(this)};function x(t){var i=new l(t);try{i.c()}catch(n){throw i.d(),n}return i.d.bind(i)}var k,N;function d(t,i){V[t]=i.bind(null,V[t]||function(){})}function w(t){N&&N(),N=t&&t.S()}function ti(t){var i=this,n=t.data,r=vi(n);r.value=n;var e=H(function(){for(var f=i.__v;f=f.__;)if(f.__c){f.__c.__$f|=4;break}return i.__$u.c=function(){var _;!ni(e.peek())&&((_=i.base)==null?void 0:_.nodeType)===3?i.base.data=e.peek():(i.__$f|=1,i.setState({}))},Z(function(){var _=r.value.value;return _===0?0:_===!0?"":_||""})},[]);return e.value}ti.displayName="_st";Object.defineProperties(s.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:ti},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});d("__b",function(t,i){if(typeof i.type=="string"){var n,r=i.props;for(var e in r)if(e!=="children"){var f=r[e];f instanceof s&&(n||(i.__np=n={}),n[e]=f,r[e]=f.peek())}}t(i)});d("__r",function(t,i){w();var n,r=i.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(e){var f;return x(function(){f=this}),f.c=function(){r.__$f|=1,r.setState({})},f}())),k=r,w(n),t(i)});d("__e",function(t,i,n,r){w(),k=void 0,t(i,n,r)});d("diffed",function(t,i){w(),k=void 0;var n;if(typeof i.type=="string"&&(n=i.__e)){var r=i.__np,e=i.props;if(r){var f=n.U;if(f)for(var _ in f){var a=f[_];a!==void 0&&!(_ in r)&&(a.d(),f[_]=void 0)}else n.U=f={};for(var y in r){var $=f[y],q=r[y];$===void 0?($=si(n,y,q,e),f[y]=$):$.o(q,e)}}}t(i)});function si(t,i,n,r){var e=i in t&&t.ownerSVGElement===void 0,f=R(n);return{o:function(_,a){f.value=_,r=a},d:x(function(){var _=f.value.value;r[i]!==_&&(r[i]=_,e?t[i]=_:_?t.setAttribute(i,_):t.removeAttribute(i))})}}d("unmount",function(t,i){if(typeof i.type=="string"){var n=i.__e;if(n){var r=n.U;if(r){n.U=void 0;for(var e in r){var f=r[e];f&&f.d()}}}}else{var _=i.__c;if(_){var a=_.__$u;a&&(_.__$u=void 0,a.d())}}t(i)});d("__h",function(t,i,n,r){(r<3||r===9)&&(i.__$f|=2),t(i,n,r)});ri.prototype.shouldComponentUpdate=function(t,i){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var r in i)return!0;for(var e in t)if(e!=="__source"&&t[e]!==this.props[e])return!0;for(var f in this.props)if(!(f in t))return!0;return!1};function vi(t){return H(function(){return R(t)},[])}function di(t){var i=L(t);return i.current=t,k.__$f|=4,H(function(){return Z(function(){return i.current()})},[])}function pi(t){var i=L(t);i.current=t,oi(function(){return x(function(){return i.current()})},[])}export{s as Signal,ai as batch,Z as computed,x as effect,R as signal,ci as untracked,di as useComputed,vi as useSignal,pi as useSignalEffect};
