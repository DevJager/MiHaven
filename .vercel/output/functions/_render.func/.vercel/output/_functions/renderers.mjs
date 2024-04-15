import { Fragment, Component, options, h } from 'preact';
import { render } from 'preact-render-to-string';
import { Suspense } from 'preact/compat';

function _(e,t){for(let r in t)e[r]=t[r];return e}function n(e,t){return Array.isArray(t)?t.reduce(n,e):null!=t&&!1!==t&&e.push(t),e}function s(p,i,l,c){if(null==p||"object"!=typeof p)return Promise.resolve();let a=p.type,u=p.props,m=[];if(l=l||{},p.__=c,"function"==typeof a&&a!==Fragment&&a!==Suspense){let e,o=p.__c=new Component(u,l);o.__d=!0,o.__v=p,void 0===o.state&&(o.state={});let n=!1,m=a.contextType,d=m&&l[m.__c],h=null!=m?d?d.props.value:m.__p||m.__:l;return p.__=c,a.prototype&&"function"==typeof a.prototype.render?(n=!0,o=p.__c=new a(u,h),o.__d=!0,o.__v=p,o.props=u,o.context=h,void 0===o.state&&(o.state={}),a.getDerivedStateFromProps?o.state=_(_({},o.state),a.getDerivedStateFromProps(o.props,o.state)):o.componentWillMount&&o.componentWillMount(),e=()=>{try{return options.render&&options.render(p),options.__r&&options.__r(p),Promise.resolve(o.render(o.props,o.state,o.context))}catch(t){return t&&t.then?t.then(e,e):Promise.reject(t)}}):e=()=>{try{const e=options.__s;options.__s=!0,options.render&&options.render(p),options.__r&&options.__r(p);const t=Promise.resolve(a.call(p.__c,u,h));return options.__s=e,t}catch(t){return t&&t.then?t.then(e,e):Promise.reject(t)}},options.__b&&options.__b(p),(i?(i(p,n?o:void 0)||Promise.resolve()).then(e):e()).then(e=>(o.getChildContext&&(l=_(_({},l),o.getChildContext())),Array.isArray(e)?(p.__k=[],Promise.all(e.map(e=>(p.__k.push(e),s(e,i,l,p))))):s(e,i,l,p)))}return options.__b&&options.__b(p),u&&n(m=[],u.children).length?(p.__k=[],Promise.all(m.map(e=>(p.__k.push(e),s(e,i,l,p))))):Promise.resolve()}

const contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "p" + this.c.toString();
    },
    signals: /* @__PURE__ */ new Map(),
    propsToSignals: /* @__PURE__ */ new Map()
  };
  contexts.set(result, ctx);
  return ctx;
}
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

function isSignal(x) {
  return x != null && typeof x === "object" && typeof x.peek === "function" && "value" in x;
}
function restoreSignalsOnProps(ctx, props) {
  let propMap;
  if (ctx.propsToSignals.has(props)) {
    propMap = ctx.propsToSignals.get(props);
  } else {
    propMap = /* @__PURE__ */ new Map();
    ctx.propsToSignals.set(props, propMap);
  }
  for (const [key, signal] of propMap) {
    props[key] = signal;
  }
  return propMap;
}
function serializeSignals(ctx, props, attrs, map) {
  const signals = {};
  for (const [key, value] of Object.entries(props)) {
    if (isSignal(value)) {
      props[key] = value.peek();
      map.set(key, value);
      let id;
      if (ctx.signals.has(value)) {
        id = ctx.signals.get(value);
      } else {
        id = incrementId(ctx);
        ctx.signals.set(value, id);
      }
      signals[key] = id;
    }
  }
  if (Object.keys(signals).length) {
    attrs["data-preact-signals"] = JSON.stringify(signals);
  }
}

const StaticHtml = ({ value, name, hydrate = true }) => {
  if (!value)
    return null;
  const tagName = hydrate ? "astro-slot" : "astro-static-slot";
  return h(tagName, { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
let originalConsoleError;
let consoleFilterRefs = 0;
async function check(Component$1, props, children) {
  if (typeof Component$1 !== "function")
    return false;
  if (Component$1.name === "QwikComponent")
    return false;
  if (Component$1.prototype != null && typeof Component$1.prototype.render === "function") {
    return Component.isPrototypeOf(Component$1);
  }
  useConsoleFilter();
  try {
    try {
      const { html } = await renderToStaticMarkup.call(this, Component$1, props, children, void 0);
      if (typeof html !== "string") {
        return false;
      }
      return html == "" ? false : !/<undefined>/.test(html);
    } catch (err) {
      return false;
    }
  } finally {
    finishUsingConsoleFilter();
  }
}
function shouldHydrate(metadata) {
  return metadata?.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
  const ctx = getContext(this.result);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = h(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value,
      name
    });
  }
  let propsMap = restoreSignalsOnProps(ctx, props);
  const newProps = { ...props, ...slots };
  const attrs = {};
  serializeSignals(ctx, props, attrs, propsMap);
  const vNode = h(
    Component,
    newProps,
    children != null ? h(static_html_default, {
      hydrate: shouldHydrate(metadata),
      value: children
    }) : children
  );
  await s(vNode);
  const html = render(vNode);
  return { attrs, html };
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
var server_default = {
  check,
  renderToStaticMarkup,
  supportsAstroStaticSlot: true
};

const renderers = [Object.assign({"name":"@astrojs/preact","clientEntrypoint":"@astrojs/preact/client.js","serverEntrypoint":"@astrojs/preact/server.js"}, { ssr: server_default }),];

export { renderers };
