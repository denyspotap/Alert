import { LightningElement, api } from 'lwc';
import { constants } from 'c/constants';

export default class Toast extends LightningElement {

    @api alertStyle;
    @api message;

    get iconHref() {
        return '/_slds/icons/utility-sprite/svg/symbols.svg#warning'
    }

    get toastCSSClass() {
        if(!this.alertStyle) return '';
        return 'slds-notify slds-notify_toast ' + 'slds-theme_warning';
    }
}