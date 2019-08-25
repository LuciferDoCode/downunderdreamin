import { LightningElement } from 'lwc';

export default class LwcCalculate extends LightningElement {
    
    handleClick() {
        const changeValue = 1;
        const increaseEvent = new CustomEvent('IncreaseCount',{
            detail : { changeValue }
        });
        this.dispatchEvent(increaseEvent);
    }
}