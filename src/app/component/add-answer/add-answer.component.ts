import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Answer } from 'src/app/classes/answer';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit{
  
  textResponse:string='';

  @Output() onAddAnswer : EventEmitter<Answer>=new EventEmitter<Answer>();

  answers:Answer[]=[];
  constructor(private answerService:AnswerService) {
  }
  ngOnInit(): void {
    this.answerService.getAnswers().subscribe((answers) => (this.answers = answers));
    
  }
  onSubmit()
  {
    const newAnswer = {
     textResponse:this.textResponse
    };

    
    this.onAddAnswer.emit(newAnswer);
    console.log(newAnswer);
  
    this.textResponse = '';
  }
}
