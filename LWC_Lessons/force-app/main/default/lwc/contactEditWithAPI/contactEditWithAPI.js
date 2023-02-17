import { LightningElement, api } from 'lwc';

export default class ContactEditWithAPI extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields=["AccountId", "Name", "Title", "Phone", "Email"];

}
//https://afy14-dev-ed.develop.lightning.force.com/lightning/r/Contact/003Dn00000AYyAyIAL/view