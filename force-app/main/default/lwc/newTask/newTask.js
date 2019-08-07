/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { LightningElement, track, wire } from 'lwc';
import getCategoryPicklist from '@salesforce/apex/ToDoService.getCategoryPicklist';
import createTodo from '@salesforce/apex/ToDoService.createTodo';

export default class NewTask extends LightningElement {
    @track todo = {}
    
    
    @wire(getCategoryPicklist) options

    genericChangeHandler(event) {
        const field = event.target.name
        switch (field) {
            case 'todo-name':
                this.todo.name = event.target.value
                break
            case 'todo-category':
                this.todo.category = event.target.value
                break
            case 'todo-due-date':
                this.todo.dueDate = event.target.value
                break
            case 'todo-start-date':
                this.todo.startDate = event.target.value
                break
            case 'todo-description':
                this.todo.description = event.target.value
                break
            default:
                break
        }
    }
    
    
    createTodo(event){
        event.preventDefault()
        createTodo({
            todoString : JSON.stringify(this.todo)
        })
        .then((data) => {
            // Dispatches the event.
            this.dispatchEvent(new CustomEvent('refreshlist', {
                data : data
            }))
        })
        .catch((error) => {
            this.message = 'Error received: code' + error.errorCode + ', ' +
                'message ' + error.body.message
        })
    }
    
}