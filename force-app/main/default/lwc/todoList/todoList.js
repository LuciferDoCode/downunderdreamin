import { LightningElement, api } from 'lwc';

export default class TodoList extends LightningElement {
    @api todolst

    onDelete(event){
        const deleteId = event.currentTarget.dataset.id;
        this.dispatchEvent(new CustomEvent('deletetask', {
            detail : deleteId
        }))
    }
}