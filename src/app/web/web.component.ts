import { Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from '../components/list/list.component';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  @ViewChild(ListComponent) list!: ListComponent;

  public alert_type:string;
  public alert_message:string;
  public display_alert:boolean;
  
  constructor() { 
    this.alert_message = "";
    this.alert_type = "";
    this.display_alert = true;
  }

  ngOnInit(): void {
  }

  updateList(){
    this.list.getList();
  }

  alertListing($_event:any){
    this.display_alert = false;
    this.alert_type = $_event.type;
    this.alert_message = $_event.message;
    setTimeout(()=>{
      this.alert_type = $_event.type;
      this.alert_message = $_event.message;
      this.display_alert = true;
    },5500);
  }
}
