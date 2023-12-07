import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Quiz } from 'src/app/classes/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  faTimes = faTimes;
  quizes: Quiz[] = [];
  constructor(private quizService: QuizService) { }
  ngOnInit(): void {
    this.quizService.getQuiz().subscribe((data: any) => {
      this.quizes = data.content;
    })
  }
  async deleteQuiz(quiz: Quiz) {
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
      this.quizService.deleteQuiz(quiz).subscribe(
        () => {
          // Supprimez la question du tableau this.questions
          this.quizes = this.quizes.filter(q => q.id !== quiz.id);
          Swal.fire('Supprimé!', 'Le quiz été supprimée.', 'success');
        },
        error => {
          Swal.fire('Erreur!', 'Une erreur est survenue lors de la suppression de la question.', 'error');
        }
      );
    }
  }
  addQuiz(quiz :Quiz)
  {
    this.quizService.addQuiz(quiz).subscribe((quiz)=>{
      this.quizes.push(quiz)
    })
  }

}
