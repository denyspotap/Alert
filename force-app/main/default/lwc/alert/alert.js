import { LightningElement, api } from 'lwc';
import { constants } from 'c/constants';

export default class Alert extends LightningElement {
    
    @api alertStyle;
    @api message;

    get iconHref() {
        return '/_slds/icons/utility-sprite/svg/symbols.svg#info'
    }

    get alertCSSClass() {
        return 'slds-notify slds-notify_alert ' + 'slds-theme_info'
    }
}