import { LightningElement, api } from 'lwc';

export default class EditViewWithAPI extends LightningElement {
    @api recordId;
    @api objectApiName;
}