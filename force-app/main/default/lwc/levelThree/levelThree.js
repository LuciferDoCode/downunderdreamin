/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class LevelThree extends LightningElement {
    @track text = 'From Level Three';

    updateText(event){
        this.text = event.detail.value;
    }
}