import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceHomeworkService } from 'src/app/api/homework.service';

@Component({
  selector: 'app-new-homework',
  templateUrl: './new-homework.component.html',
  styleUrls: ['./new-homework.component.scss']
})
export class NewHomeworkComponent implements OnInit {

  public formNewHomework: FormGroup;
  
  @Output('eventNew') newHomework:any = new EventEmitter();
  @Output('error') error = new EventEmitter();

  constructor(
    protected homeworkService:ServiceHomeworkService
  ) { 
    this.formNewHomework = new FormGroup({
      title: new FormControl(null, Validators.required),
      status: new FormControl(false),
    })
  }

  ngOnInit(): void {
  }
  
  addHomework(){
    try {
      if(this.formNewHomework.valid){
        
        let data = {
          state: (this.formNewHomework.get('status')?.value == true)? true: false,
          title: this.formNewHomework.get('title')?.value
        }
  
        this.homeworkService.setHomeworks(data).subscribe(
          (res:any)=>{
            this.newHomework.emit();
            this.resetValues();
            this.error.emit({type:'success',message:'Tarea Añadida.'});
          },
          (error:any)=>{
            this.error.emit({type:'warning',message:'Intente más tarde.'});
          }
        )
      }else{
        this.error.emit({type:'warning',message:'Complete la Información.'});
      }
    } catch (error) {
      this.error.emit({type:'warning',message:'Intente más tarde.'});
    }
  }

  resetValues(){
    this.formNewHomework.get('status')?.setValue(false);
    this.formNewHomework.get('title')?.setValue("")
  }
}
