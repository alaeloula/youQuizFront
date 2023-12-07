import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionRes } from 'src/app/classes/QuestionRes';
import { QuestionReq } from 'src/app/classes/questionReq';
import { Quiz } from 'src/app/classes/quiz';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import { TemporisationService } from 'src/app/services/temporisation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-temporisation',
  templateUrl: './temporisation.component.html',
  styleUrls: ['./temporisation.component.css']
})
export class TemporisationComponent implements OnInit {
  quizId: number=0;
  questions:QuestionRes[]=[];
  selectedQuestions:QuestionRes[]=[];

  questionsForQuiz: QuestionRes[]=[];
  quiz:Quiz|undefined;

  time:number=14;


  constructor(private route: ActivatedRoute,private questionService:QuestionService,private quizService: QuizService,private temporisationService:TemporisationService,private router :Router) { }

  ngOnInit(): void {  
    this.loadQuestions();
    this.quizId = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.quizId = params['id'];
    });
  }

  loadQuestions(): void {
    this.questionService.getQuestion().subscribe(
      (questions:any) => {
        this.questions = questions.content;
      },
      (error) => {
        console.error('Erreur lors du chargement des questions :', error);
      }
    );
  }

  isSelected(questionId: string): boolean {
    return this.selectedQuestions.some(q => q.id === questionId);
  }

  toggleQuestionSelection(questionId: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;
  
    if (isChecked) {
      const questionToAdd = this.questions.find(q => q.id === questionId);
      if (questionToAdd) {
        this.selectedQuestions.push(questionToAdd);
      }
    } else {
      this.selectedQuestions = this.selectedQuestions.filter(q => q.id !== questionId);
    }
  }
  
  

  onSubmit(){
    this.selectedQuestions.forEach(element => {
      const newTemporisation={
        time:this.time,
        test_id:this.quizId,
        question_id:element.id
      }
      this.temporisationService.addTemporisation(newTemporisation).subscribe(
        
      );
      this.router.navigate(['/quiz'])
    });
    
  }
  


 
}
