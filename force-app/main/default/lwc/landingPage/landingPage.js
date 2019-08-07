/* eslint-disable no-console */
import { LightningElement, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getTodoList from '@salesforce/apex/ToDoService.getTodoList';

export default class LandingPage extends LightningElement {
    
    @wire(getTodoList) todolst

    onRefresh(){ 
        console.log('fsdkfbks')
        
        refreshApex(this.todolst)
    }
}