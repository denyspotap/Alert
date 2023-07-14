
class Constants {

    styleToIconMap = new Map([
        ['Warning', 'warning'],
        ['Info', 'info'],
        ['Success', 'success'],
        ['Error', 'error'],
    ]); 
    
    styleToCSSClassMap = new Map([
        ['Warning', 'slds-theme_warning'],
        ['Info', 'slds-theme_info'],
        ['Success', 'slds-theme_success'],
        ['Error', 'slds-theme_error'],
    ]);

    getIconHref(alertStyle) {
        return '/_slds/icons/utility-sprite/svg/symbols.svg#' + styleToIconMap.get(alertStyle);
    }
}

export const constants = new Constants();