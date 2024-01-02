import { Component, OnInit } from '@angular/core';
import { faTimes, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Quiz } from 'src/app/classes/quiz';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  faTimes = faTimes;
  faPlay = faPlay;
  quizes: Quiz[] = [];
  temporisation: TemporisationDtoRes[] = [];
  validation: validation[] = [];
  visible: boolean = false;
  indice:number=0;
  constructor(private quizService: QuizService, private temporisationService: TemporisationService, private validationService: ValidationService) { }
 
  ngOnInit(): void {
    this.quizService.getQuiz().subscribe((data: any) => {
      this.quizes = data.content;
    })
  }


  showDialog(quizId: number) {
    this.visible = true;
    this.temporisationService.getTemporisationsByQuiz(quizId).subscribe(callback => {
      this.temporisation = callback;
    });
    this.indice=this.temporisation.length;
    if (this.temporisation && this.temporisation.length > 0 && typeof this.temporisation[0].question.id === 'number') {
      const questionId = this.temporisation[0].question.id as number
      this.getValidationByQst(questionId);
    }
  }
  getValidationByQst(questionId : number |undefined){
    if (questionId !== undefined && typeof questionId === 'string') {
      const parsedQuestionId = parseInt(questionId, 10);

    this.validationService.getValidationByQst(questionId).subscribe(callback => {
      this.validation=callback
    })
  }



}
