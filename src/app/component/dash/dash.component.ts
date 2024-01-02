import { Component, OnInit } from '@angular/core';
import { faTimes, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Assignment } from 'src/app/classes/Assignment';
import { Quiz } from 'src/app/classes/quiz';
import { TemporisationDtoRes } from 'src/app/classes/temporisationDtoRes';
import { validation } from 'src/app/classes/validation';
import { AssignmentValidationService } from 'src/app/services/assignment-validation.service';
import { AssignmentService } from 'src/app/services/assignment.service';
import { QuizService } from 'src/app/services/quiz.service';
import { TemporisationService } from 'src/app/services/temporisation.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  validation_id: number = 0;
  assignment_id: number = 0;
  faTimes = faTimes;
  faPlay = faPlay;
  quizes: Quiz[] = [];
  assignments: Assignment[] = [];
  temporisation: TemporisationDtoRes[] = [];
  currenttemporisation: TemporisationDtoRes | undefined;
  validation: validation[] = [];
  visible: boolean = false;
  indice: number = 0;
  score:number=0;
  test:number=0
  constructor(private quizService: QuizService, private assignmentService: AssignmentService, private temporisationService: TemporisationService, private validationService: ValidationService, private assignmentValidationService: AssignmentValidationService) { }

  ngOnInit(): void {
    this.quizService.getQuiz().subscribe((data: any) => {
      this.quizes = data.content;
    })
    this.assignmentService.getAssignment().subscribe((callback) => {
      this.assignments = callback;
    })
  }

  showDialog(quizId: number, assignment_id: number) {
    this.assignment_id = assignment_id;
    this.indice = 0;
    this.score=0;
    this.visible = true;
    this.temporisationService.getTemporisationsByQuiz(quizId).subscribe((data: any) => {
      this.temporisation = data;
      this.test=data.length;
      console.log(this.test);
      this.currenttemporisation = this.temporisation[0];
      if (this.currenttemporisation && typeof this.currenttemporisation.question.id === 'number') {
        const questionId = this.currenttemporisation.question.id as number
        this.getValidationByQst(questionId);
      }
    });
  }
  getValidationByQst(questionId: number) {

    if (questionId !== undefined && typeof questionId === 'number') {

      this.validationService.getValidationByQst(questionId).subscribe(callback => {
        this.validation = callback
      })
    }
  }


  nextQuestion() {
     const AssignmentValidation = {
      validation_id: this.validation_id,
      assignment_id:  this.assignment_id
    }
    this.validationService.getValidationById(this.validation_id).subscribe((data:any)=>{
      this.score+=(data.point);
    })
    
    this.assignmentValidationService.addanswer(AssignmentValidation).subscribe((data:any)=>{
      
    })

    this.currenttemporisation = this.temporisation[this.indice++];

    if (this.currenttemporisation && typeof this.currenttemporisation.question.id === 'number') {
      const questionId = this.currenttemporisation.question.id as number
      this.getValidationByQst(questionId);
    }else{

    }
    this.test--;
  }

  passed(){
    
    this.assignmentService.getpassed(this.assignment_id).subscribe((data)=>{
      console.log(data);
    });
    this.visible=false;
  }

}
