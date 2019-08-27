import { LightningElement } from 'lwc';
import ShadowTree from 'c/shadowTree';

export default class DocumentCmp extends LightningElement {
    showShadowElement() {
        debugger;
        const shadowTree = this.template.querySelector('c-shadow-tree'); // <div>First</div>
        const div = this.template.querySelector('div');
        
        
    }
}