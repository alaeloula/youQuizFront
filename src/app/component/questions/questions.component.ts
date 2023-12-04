import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionRes } from 'src/app/classes/QuestionRes';
import { QuestionReq } from 'src/app/classes/questionReq';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  // deleteQuestion(question: QuestionReq): void {
  //   this.questionService
  //     .deleteQuestion(question)
  //     .subscribe(
  //       () => (this.questions = this.questions.filter(s => s.id !== question.id)));
  // }
  async deleteQuestion(question: QuestionRes) {
    const result = await Swal.fire({
      title: 'Confirmation',
      text: 'Êtes-vous sûr de vouloir supprimer cette question ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer'
    });
  
    if (result.isConfirmed) {
      // Si l'utilisateur confirme la suppression, appelez la méthode pour supprimer la question
      this.questionService.deleteQuestion(question).subscribe(
        () => {
          // Supprimez la question du tableau this.questions
          this.questions = this.questions.filter(q => q.id !== question.id);
          Swal.fire('Supprimé!', 'La question a été supprimée.', 'success');
        },
        error => {
          Swal.fire('Erreur!', 'Une erreur est survenue lors de la suppression de la question.', 'error');
        }
      );
    }
  }
  


  questions: QuestionRes[] = [];
  faTimes = faTimes;
  constructor(private questionService: QuestionService) { }
  ngOnInit(): void {
    this.questionService.getQuestion().subscribe((data: any) => {
      this.questions = data.content;
    })
  }

  addQuestion(question: QuestionReq) {
    this.questionService.addQuestion(question).subscribe(
      // (question) => this.questions.push(question)
    )
  }
}
