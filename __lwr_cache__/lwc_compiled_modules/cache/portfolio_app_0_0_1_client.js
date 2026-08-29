import _tmpl from "./app.html";
import { LightningElement, registerComponent as _registerComponent } from 'lwc';
import Header from 'portfolio/portfolioHeader';
import Home from 'portfolio/portfolioHome';
class App extends LightningElement {
  handleThemeToggle() {
    this.template.host.classList.toggle('dark-mode');
  }
  /*LWC compiler v9.3.4*/
}
const __lwc_component_class_internal = _registerComponent(App, {
  tmpl: _tmpl,
  sel: "portfolio-app",
  apiVersion: 66,
  enableSyntheticElementInternals: true,
  enablePrivateMethods: true
});
export default __lwc_component_class_internal;