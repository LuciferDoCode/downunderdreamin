/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class LevelTwo extends LightningElement {
    @track text = 'From Level Two';
    handleClick(){
        this.text = 'Updated from level two component';
        const value = this.text;
        this.dispatchEvent(new CustomEvent('leveltwoupdate', {
            detail : { value }
        }));
    }
    updateText(event){
        this.text = event.detail.value;
        const value = this.text;
        this.dispatchEvent(new CustomEvent('leveltwoupdate', {
            detail : { value }
        }));
    }
}