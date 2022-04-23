import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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
  
  constructor(
    private meta: Meta,
  ) { 
    this.alert_message = "";
    this.alert_type = "";
    this.display_alert = true;

    this.meta.addTags([
      {name:'description',content: 'Pagina listado de tareas.'},
      {name:'author',content: 'Jeison Muñoz Rincon'},
      {name:'keyword',content: 'Covinoc,Angular,Listado,Tarea'},
      {name:'viewport',content: 'width=device-width, initial-scale=1'},
      {name:'date',content: '2022-04-23', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'}
    ]);
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
