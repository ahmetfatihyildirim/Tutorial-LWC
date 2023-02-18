import { LightningElement, api } from 'lwc';

export default class CustomViewWithAPI extends LightningElement {
    @api recordId;
    @api objectApiName;
}