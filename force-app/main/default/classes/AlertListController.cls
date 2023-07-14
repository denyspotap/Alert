public with sharing class AlertListController {

    @AuraEnabled(cacheable=true)
    public static List<Alert__c> getAlertList(Id recordId) {
        String sobjectApiName = recordId.getSObjectType().getDescribe().getName();
        return [
            SELECT Type__c, Style__c, Message__c FROM Alert__c WHERE Sobject_API_Name__c = :sobjectApiName
            WITH SECURITY_ENFORCED
        ];
    }
}