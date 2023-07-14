import { LightningElement, api } from 'lwc';
import { constants } from 'c/constants';

export default class Modal extends LightningElement {

    @api alertStyle;
    @api message;

    get headerCSSClass() {
        return 'slds-modal__header ' + constants.styleToCSSClassMap.get(this.alertStyle);
    }
}