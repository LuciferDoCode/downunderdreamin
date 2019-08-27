import { LightningElement, track } from 'lwc';

export default class LevelOne extends LightningElement {
    @track text = 'From Level One';
    handleClick(){
        this.text = 'Updated from level One component';
        const value = this.text;
        this.dispatchEvent(new CustomEvent('leveloneupdate', {
            detail : { value }
        }));
    }
}