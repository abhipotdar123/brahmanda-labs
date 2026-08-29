import _tmpl from "./portfolioHeader.html";
import { LightningElement, registerComponent as _registerComponent } from 'lwc';
class PortfolioHeader extends LightningElement {
  handleThemeToggle() {
    this.dispatchEvent(new CustomEvent('themetoggle'));
  }
  /*LWC compiler v9.3.4*/
}
const __lwc_component_class_internal = _registerComponent(PortfolioHeader, {
  tmpl: _tmpl,
  sel: "portfolio-portfolio-header",
  apiVersion: 66,
  enableSyntheticElementInternals: true,
  enablePrivateMethods: true
});
export default __lwc_component_class_internal;