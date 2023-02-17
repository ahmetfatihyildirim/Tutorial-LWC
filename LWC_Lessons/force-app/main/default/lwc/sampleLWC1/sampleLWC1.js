import { LightningElement } from 'lwc';

export default class SampleLWC1 extends LightningElement {
    name='Freddie'

    changeHandler(event){
        this.name=event.target.value;

    }
}