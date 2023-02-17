import { LightningElement,api } from 'lwc';
import getRecords from '@salesforce/apex/EmailMessageController.getRecords';
import setRecords from '@salesforce/apex/EmailMessageController.setRecords';
import { NavigationMixin } from "lightning/navigation";

export default class EmailNotification extends NavigationMixin(LightningElement) {

@api recordId;
@api emailRead=false;
@api emailMessageId;

connectedCallback(){
    this.GetRecordsFromEmailMessageObject();
}

GetRecordsFromEmailMessageObject(){
    getRecords({recordId:this.recordId})
    .then(result=>{
        if(result !=null){
            this.emailRead =false;
            this.emailMessageId = result;
        }
       else{
        this.emailRead =true;
        this.emailMessageId =null;
       }
    });
}

updateEmailReadStatus(){
    setRecords({recordId:this.emailMessageId})
    .then(()=>{
        this.navigate();
    });
}

navigate(){
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: this.emailMessageId,
            objectApiName: 'EmailMessage',
            actionName: 'view'
        }
    });
}
}
//https://sfdcsaga.blogspot.com/