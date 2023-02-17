import { LightningElement } from 'lwc';

export default class Visible_functions extends LightningElement {
    areDetailsVisible=false;
    
    changeHandler(event){
        this.areDetailsVisible=event.target.checked;
    }
}