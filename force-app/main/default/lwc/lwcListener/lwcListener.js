import { LightningElement, api } from 'lwc';

export default class LwcListener extends LightningElement {
    @api
    callMeFromAura(){
        console.log('1111');
    }
}