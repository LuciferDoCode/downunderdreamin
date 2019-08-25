({
    handleIncrement : function(component, event, helper) {
        var changeValue = event.getParam('changeValue') ;
        component.set('v.lwcCount', component.get('v.lwcCount') + changeValue);
    }
})
