public with sharing class ToDoService {
    
    @AuraEnabled(cacheable=true)
    public static Object getCategoryPicklist(){
        ToDoModel.SelectList[] options = new ToDoModel.SelectList[]{};
        Schema.DescribeFieldResult fieldResult = Todo__c.Category__c.getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        for( Schema.PicklistEntry f : ple)
            options.add(new ToDoModel.SelectList(f.getLabel(), f.getValue()));
        return options;
    }

    @AuraEnabled(cacheable=true)
    public static Object getTodoList(){
        Todo__c[] todoLst = [SELECT Id, Name, Category__c, Due_Date__c, Start_Date__c, 
                                Description__c FROM Todo__c 
                                ORDER BY LastModifiedDate DESC];
        return getModelList(todoLst);
    }

    @AuraEnabled
    public static Todo__c createTodo(String todoString){
        ToDoModel.oModel todo = (ToDoModel.oModel) JSON.deserialize(todoString, ToDoModel.oModel.class);
        return persist(getTodo(todo));
    }

    static Todo__c getTodo(ToDoModel.oModel o){
        return new Todo__c(
            Name = o.name,
            Category__c = o.category,
            Due_Date__c = o.dueDate,
            Start_Date__c = o.startDate,
            Description__c = o.description
        );
    }

    static Todo__c persist(Todo__c sobj){
        upsert sobj;
        return sobj;
    }

    static ToDoModel.oModel[] getModelList(Todo__c[] todo_lst){
        ToDoModel.oModel[] mList = new ToDoModel.oModel[]{};
        for (Todo__c todo : todo_lst) {
            mList.add(new ToDoModel.oModel(todo));
        }
        return mList;
    }
}
