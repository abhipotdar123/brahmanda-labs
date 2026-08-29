import _implicitStylesheets from "./portfolioHeader.css";
import _implicitScopedStylesheets from "./portfolioHeader.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<header class="site-header${0}"${2}><div class="header-container${0}"${2}><a href="/" class="brand${0}"${2}><span class="brand-name${0}"${2}>Abhinav Potdar</span><span class="brand-role${0}"${2}>Salesforce Developer</span></a><nav class="desktop-nav${0}"${2}><a href="#home"${3}>Home</a><a href="#about"${3}>About</a><a href="#services"${3}>Services</a><a href="#projects"${3}>Projects</a><a href="#blog"${3}>Blog</a><a href="#contact"${3}>Contact</a></nav><button class="theme-button${0}" type="button" title="Toggle theme"${2}>☀</button></div></header>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment} = $api;
  const {_m0} = $ctx;
  return [api_static_fragment($fragment1, 1, [api_static_part(20, {
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.handleThemeToggle)
    })
  }, null)])];
  /*LWC compiler v9.3.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-3k9uivqgvvh";
tmpl.legacyStylesheetToken = "portfolio-portfolioHeader_portfolioHeader";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
