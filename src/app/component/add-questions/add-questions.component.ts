import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Level } from 'src/app/classes/level';
import { QuestionReq } from 'src/app/classes/questionReq';
import { Subject } from 'src/app/classes/subject';
import { LevelService } from 'src/app/services/level.service';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{
  @Output() onAddQuestion : EventEmitter<QuestionReq>=new EventEmitter<QuestionReq>();
  numberOfResponses:number=0;
  numberOfCorrectResponses:number=0;
  questionText:string='';
  type:string='';
  level_id:number=0;
  subject_id:number=0;
  levels:Level[]=[];
  subjects:Subject[]=[];
  constructor(private subjectService:SubjectService,private levelService:LevelService) {
  }
  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe((subjects) => (this.subjects = subjects));
    this.levelService.getLeveles().subscribe((levels) => (this.levels = levels));
  }
  onSubmit()
  {
    const newQuestion = {
      numberOfResponses:this.numberOfResponses,
      numberOfCorrectResponses: this.numberOfCorrectResponses,
      questionText:this.questionText,
      type:this.type,
      subject_id:this.subject_id,
      level_id:this.level_id

    };

    
    this.onAddQuestion.emit(newQuestion);
    console.log(newQuestion);
  
    this.numberOfCorrectResponses = 0;
  }
  

}
