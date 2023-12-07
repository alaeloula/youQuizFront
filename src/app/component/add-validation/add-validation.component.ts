import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionRes } from 'src/app/classes/QuestionRes';
import { Answer } from 'src/app/classes/answer';
import { validation } from 'src/app/classes/validation';
import { AnswerService } from 'src/app/services/answer.service';
import { QuestionService } from 'src/app/services/question.service';


@Component({
  selector: 'app-add-validation',
  templateUrl: './add-validation.component.html',
  styleUrls: ['./add-validation.component.css']
})
export class AddValidationComponent implements OnInit {
  @Output() onAddValidation: EventEmitter<validation> = new EventEmitter<validation>();
  questions: QuestionRes[] = [];
  responses: Answer[] = [];
  question_id: number = 0;
  response_id: number = 0;
  point: number = -1;

  constructor(private questionService: QuestionService, private responseService: AnswerService) {
  }

  ngOnInit(): void {
    this.questionService.getQuestion().subscribe((data: any) => { this.questions = data.content });
    this.responseService.getAnswers().subscribe((responses) => (this.responses = responses));
  }
  onSubmit() {

    const newValidation = {
      point: this.point,
      question_id: this.question_id,
      response_id: this.response_id
    };
    this.onAddValidation.emit(newValidation);
    this.point=-1;
    this.question_id=0;
    this.response_id=0;
  }


}
