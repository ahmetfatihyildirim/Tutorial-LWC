import { LightningElement, api } from 'lwc';

export default class ContactEditWithAPI extends LightningElement {
    @api recordId;
    @api objectApiName;
}