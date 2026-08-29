import _implicitStylesheets from "./portfolioHome.css";
import _implicitScopedStylesheets from "./portfolioHome.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<section${"a0:id"} class="hero-section${0}"${2}><div class="hero-container${0}"${2}><div class="hero-content${0}"${2}><p class="eyebrow${0}"${2}>Salesforce Developer &amp; Integration Specialist</p><h1${3}>Building scalable<span class="highlight${0}"${2}>Salesforce solutions</span>that solve real business problems.</h1><p class="hero-description${0}"${2}>I help businesses build Salesforce applications, integrations, automation, and modern digital experiences using Salesforce, LWC, Apex, and Workato.</p><div class="hero-actions${0}"${2}><a${"a13:href"} class="primary-button${0}"${2}>View My Work</a><a${"a15:href"} class="secondary-button${0}"${2}>Book a Session</a></div><div class="hero-links${0}"${2}><a href="https://github.com/" target="_blank"${3}>GitHub</a><a href="https://www.linkedin.com/" target="_blank"${3}>LinkedIn</a><a${"a22:href"}${3}>Contact Me</a></div></div><div class="hero-visual${0}"${2}><div class="profile-card${0}"${2}><div class="profile-avatar${0}"${2}>AP</div><h2${3}>Abhinav Potdar</h2><p${3}>Salesforce Developer</p><div class="technology-list${0}"${2}><span${3}>Salesforce</span><span${3}>LWC</span><span${3}>Apex</span><span${3}>Workato</span></div></div></div></div></section>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, fid: api_scoped_frag_id, sp: api_static_part, st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1, [api_static_part(0, {
    attrs: {
      "id": api_scoped_id("home")
    }
  }, null), api_static_part(13, {
    attrs: {
      "href": api_scoped_frag_id("#projects")
    }
  }, null), api_static_part(15, {
    attrs: {
      "href": api_scoped_frag_id("#booking")
    }
  }, null), api_static_part(22, {
    attrs: {
      "href": api_scoped_frag_id("#contact")
    }
  }, null)])];
  /*LWC compiler v9.3.4*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-75i8q3tm8q5";
tmpl.legacyStylesheetToken = "portfolio-portfolioHome_portfolioHome";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
