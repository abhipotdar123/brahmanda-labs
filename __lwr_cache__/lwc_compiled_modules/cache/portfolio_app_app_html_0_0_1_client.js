import _implicitStylesheets from "./app.css";
import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";
import _portfolioPortfolioHeader from "portfolio/portfolioHeader";
import _portfolioPortfolioHome from "portfolio/portfolioHome";
import {freezeTemplate, registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "portfolio-app": true
  },
  key: 0
};
const stc1 = {
  key: 2
};
const stc2 = {
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_custom_element("portfolio-portfolio-header", _portfolioPortfolioHeader, {
    key: 1,
    on: _m0 || ($ctx._m0 = {
      "themetoggle": api_bind($cmp.handleThemeToggle)
    })
  }), api_element("main", stc1, [api_custom_element("portfolio-portfolio-home", _portfolioPortfolioHome, stc2)])])];
  /*LWC compiler v9.3.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-24qt39rsp84";
tmpl.legacyStylesheetToken = "portfolio-app_app";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
