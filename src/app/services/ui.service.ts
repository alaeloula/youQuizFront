import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
    toggleAddSubject() {
      this.showAddSubject= !this.showAddSubject;
      this.subject.next(this.showAddSubject);
    }
  private showAddLevel:boolean=false;
  private showAddSubject:boolean=false;
  private subject = new Subject<boolean>();
  
    constructor() {}
  
    toggleAddLevel():void{
      
      this.showAddLevel= !this.showAddLevel;
      this.subject.next(this.showAddLevel);
  
    }
   
    onToggle():Observable<boolean>{
      return  this.subject.asObservable()
    }
}
