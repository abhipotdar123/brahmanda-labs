import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    handleThemeToggle() {
        document.documentElement.classList.toggle('dark-mode');
    }
}
