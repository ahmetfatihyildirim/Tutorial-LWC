import { LightningElement,wire } from 'lwc';

import retrieve from '@salesforce/apex/AccountHandler.retrieve';

export default class AccountListComponent extends LightningElement {

search='';
visible=false;
accounts=[];

/*@wire (apexMethodName, { apexMethodParams })
propertyOrFunction;
*/

    @wire(retrieve, {searchterm:'$search'}) accounts;

    inputChangeHandler(event){
        this.search=event.target.value;
    }
    checkChangeHandler(event){
        this.visible=event.target.checked;
    }


}

/*
Yukarıdaki Syntax in açıklaması:
The component’s JavaScript prefaces the value of the searchKey parameter with $ to indicate that it’s dynamic and reactive.
It references a property of the component instance. If its value changes, the template rerenders.
https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_wire_method
*/
