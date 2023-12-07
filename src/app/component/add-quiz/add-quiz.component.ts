import { Component, Output,EventEmitter } from '@angular/core';
import { Quiz } from 'src/app/classes/quiz';
import { Trainer } from 'src/app/classes/trainer';
import { QuizService } from 'src/app/services/quiz.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
  @Output() onAddQuiz:EventEmitter<Quiz>=new EventEmitter<Quiz>
  trainers:Trainer[]=[];
  successScore: number=0;
  canViewAnswers: boolean= false;
  canSeeResult: boolean= false;
  remarks: string='';
  instructions: string='';
  trainer_matricule:number= 1;
  numberOfChances:number=3;
  constructor(private quizService: QuizService,private trainerService:TrainerService) {
  }

  ngOnInit(): void {
    this.trainerService.getTrainer().subscribe((data: any) => { this.trainers = data.content });
    // this.responseService.getAnswers().subscribe((responses) => (this.responses = responses));
  }
  onSubmit() {

    const newQuiz = {
      successScore: this.successScore,
      canViewAnswers: this.canViewAnswers,
      canSeeResult: this.canSeeResult,
      remarks: this.remarks,
      instructions: this.instructions,
      trainer_matricule: this.trainer_matricule,
      numberOfChances:this.numberOfChances
    };

    this.onAddQuiz.emit(newQuiz);
    this.successScore=0;
    this.canViewAnswers= false;
    this.canSeeResult= false;
    this.remarks='';
    this.instructions='';
    this.trainer_matricule= 1;
    this.successScore=3;
  }
}
