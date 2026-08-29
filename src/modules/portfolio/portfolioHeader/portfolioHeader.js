import { LightningElement } from 'lwc';

export default class PortfolioHeader extends LightningElement {

    handleThemeToggle() {
        this.dispatchEvent(
            new CustomEvent('themetoggle')
        );
    }
}