import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceHomeworkService } from 'src/app/api/homework.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output('error') error = new EventEmitter();

  public data:Array<any> = [];
  public paginator:Array<any> = [];
  public paginatorNumber:number = 1;
  
  constructor(
    protected homeworkServices: ServiceHomeworkService
  ) { 
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    try {
      this.homeworkServices.getHomeworks().subscribe(
        (res:any)=>{
          this.data = res;
          this.createSchemePaginator(res);
        },
        (error:any)=>{
          this.error.emit({type:'warning',message:'Intente más tarde.'})
        }
      )
    } catch (error) {
      this.error.emit({type:'warning',message:'Intente más tarde.'})
    }
  }
  
  updateHomework(value:any, id:string){
    try {
      let data = {
        state: value.checked
      }
      this.homeworkServices.updateHomeworks(data,id).subscribe(
        (res:any)=>{
          this.getList();
          this.error.emit({type:'success',message:'Tarea Actualizada.'});
        },
        (error:any)=>{
          this.error.emit({type:'warning',message:'Intente más tarde.'});
        }
      )
    } catch (error) {
      this.error.emit({type:'warning',message:'Intente más tarde.'})
    }
  }

  deleteHomework(id:string){
    try {
      this.homeworkServices.deleteHomeworks(id).subscribe(
        (res:any)=>{
          this.getList();
          this.error.emit({type:'success',message:'Tarea eliminada.'});
        },
        (error:any)=>{
          this.error.emit({type:'warning',message:'Intente más tarde.'});
        }
      )
    } catch (error) {
      this.error.emit({type:'warning',message:'Intente más tarde.'});
    }
  }

  createSchemePaginator(data:any){
    let page:number = 1;
    let dataPage:any = [{page: page, data: []}];
 
    for (let i = 0; i < data.length; i++) {
      if(i !== 0 && i % 10 == 0){
        page++;
        dataPage.push({page: page, data: []})
      }
      dataPage[page-1].data.push(data[i]);
    }
        
    this.paginator = dataPage;
    
  }

  arrowAction(type:string){
    switch(type){
      case 'left': 
          if(this.paginatorNumber > 1){
            this.paginatorNumber--;
          }
          break;
      case 'right': 
          if(this.paginatorNumber < this.paginator.length){
            this.paginatorNumber++;
          }  
        break;
    }
  }

  search(text:any){
    try { 
      let val = text.value;
      let searchResults:any = [];
  
      if(parseInt(val)){
        this.data.forEach((e)=>{
          if(e.id.indexOf(val) != -1){
            searchResults.push(e)
          }
          if(e.title.indexOf(val) != -1){
            searchResults.push(e)
          }
        })
      }else{
        this.data.forEach((e)=>{
          if(e.title.indexOf(val) != -1){
            searchResults.push(e)
          }
        })
      }
      this.paginatorNumber = 1;
      this.createSchemePaginator(searchResults);
    } catch (error) {
      this.error.emit({type:'warning',message:'Intente más tarde.'})
    }
  }
}
