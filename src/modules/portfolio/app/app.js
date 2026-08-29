import { LightningElement } from 'lwc';
import Header from 'portfolio/portfolioHeader';
import Home from 'portfolio/portfolioHome';

export default class App extends LightningElement {

    handleThemeToggle() {
        this.template.host.classList.toggle('dark-mode');
    }
}