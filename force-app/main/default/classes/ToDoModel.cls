public with sharing class ToDoModel {

    public class SelectList{

        @AuraEnabled
        public String label;
        @AuraEnabled
        public String value;

        public SelectList(String label, String value){
            this.label = label;
            this.value = value;
        }

    }

    public class oModel{
        @AuraEnabled
        public String id;
        @AuraEnabled
        public String name;
        @AuraEnabled
        public String category;
        @AuraEnabled
        public Datetime dueDate;
        @AuraEnabled
        public Datetime startDate;
        @AuraEnabled
        public String description;

        public oModel(Todo__c todo){
            this.id = todo.id;
            this.name = todo.Name;
            this.category = todo.Category__c;
            this.dueDate = todo.Due_Date__c;
            this.startDate = todo.Start_Date__c;
            this.description = todo.Description__c;
        }
    }
}
