import { Component,Output,EventEmitter, } from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import { Subject } from 'src/app/classes/subject';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
  @Output() onAddSubject : EventEmitter<Subject>=new EventEmitter<Subject>();
  title: string='';
  showAddSubject: boolean =false;
  subscription:Subscription |undefined;
  constructor(private uiService :UiService) {
    this.subscription =this.uiService.onToggle().subscribe((value)=> (this.showAddSubject=value))
  }
  onSubmit(): void {
    if (!this.title) {
      alert('Please add a title');
      return;
    }

    const newSubject = {
      title: this.title,
    };

    
    this.onAddSubject.emit(newSubject)
    console.log(newSubject);
  
    this.title = '';
    
  }
}
