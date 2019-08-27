/* eslint-disable no-console */
import { LightningElement, wire, track, api } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getTodoList from '@salesforce/apex/ToDoService.getTodoList';
import deleteTodo from '@salesforce/apex/ToDoService.deleteTodo';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LandingPage extends LightningElement {
    
    @wire(getTodoList) todolst

    onRefresh(){ 
        refreshApex(this.todolst)
    }

    onDelete(event){
        event.preventDefault()
        deleteTodo({
            todoid : event.detail
        })
        .then((data) => {
            this.dispatchEvent(new ShowToastEvent({
                "title": "Success!",
                "type" : "success",
                "message": "Record delete!"
            }));
            refreshApex(this.todolst)
            console.log('succcess');
        })
        .catch((error) => {
            this.message = 'Error received: code' + error.errorCode + ', ' +
                'message ' + error.body.message
        })
    }
}