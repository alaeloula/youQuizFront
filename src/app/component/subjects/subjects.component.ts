import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Subject } from 'src/app/classes/subject';
import { SubjectService } from 'src/app/services/subject.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit{
  subjects: Subject[] = [];
  subscription:Subscription |undefined;
  faTimes  = faTimes ;
  showAddSubject: boolean =false;

  constructor(private subjectService:SubjectService,private router:Router,private uiService:UiService) {
    this.subscription =this.uiService.onToggle().subscribe((value)=> (this.showAddSubject=value))
  }
  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe((subjects) => (this.subjects = subjects));
  }
  toggleAddSubject() {
    this.uiService.toggleAddSubject();
  }


  hasRoute(route: string) {
    return this.router.url === route;
  }

  deleteSubject(subject: Subject): void {
    this.subjectService
      .deleteTask(subject)
      .subscribe(
        () => (this.subjects = this.subjects.filter(s => s.id !== subject.id)));
  }

  addSubject(subject: Subject): void {
    this.subjectService.addSubject(subject).subscribe((subject) => this.subjects.push(subject))
  }
}
