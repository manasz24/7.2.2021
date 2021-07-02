import { LightningElement,api } from 'lwc';
export default class LwctoAura extends LightningElement {
@api messagefromAura
callAura(){
    const event=new CustomEvent('sendmsg',{
        detail:{
            "msg":"Hello from Child LWC"
        }
    })
    this.dispatchEvent(event)
}
}