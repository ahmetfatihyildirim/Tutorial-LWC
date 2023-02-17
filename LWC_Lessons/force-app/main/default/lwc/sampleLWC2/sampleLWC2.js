import { LightningElement } from 'lwc';

export default class SampleLWC2 extends LightningElement {
    greeting='Friend';

    changeHandler(event){
        this.greeting=event.target.value;
    }

    buttonHandler(){
        alert('Button Clicked');
    }
}