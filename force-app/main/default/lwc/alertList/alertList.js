import { LightningElement, wire, api, track } from 'lwc';
import getAlertList from '@salesforce/apex/AlertListController.getAlertList';

export default class AlertList extends LightningElement {
    @api recordId;

    alerts;

    @wire(getAlertList, { recordId: '$recordId' })
    wiredAlertList({ error, data }) {
        if (data) {
            this.alerts = data.map(alert => {
                return {
                    ...alert, 
                    isToast: alert.Type__c === 'Toast',
                    isAlert: alert.Type__c === 'Alert',
                    isModal: alert.Type__c === 'Modal'
                };
            });
            console.log('data', JSON.parse(JSON.stringify(this.alerts)))
        } else if (error) {
            console.log('error', error)
        }
    }
}