import { LightningElement, track } from 'lwc';

export default class LwcHelloWorld extends LightningElement {
    @track welcomeMsg = 'Coming from India.'
    genericChangeHandler(event) {
        const field = event.target.name
        switch (field) {
            case 'welcome-msg':
                this.welcomeMsg = event.target.value
                break
            default:
                break
        }
    }
}