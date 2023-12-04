import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Answer } from 'src/app/classes/answer';
import { AnswerService } from 'src/app/services/answer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  faTimes = faTimes;
  answers: Answer[] = [];
  constructor(private answerService: AnswerService) { }
  async deleteAnswer(answer: Answer) {
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
      this.answerService.deleteAnswer(answer).subscribe(
        () => {
          // Supprimez la question du tableau this.questions
          this.answers = this.answers.filter(q => q.id !== answer.id);
          Swal.fire('Supprimé!', 'La question a été supprimée.', 'success');
        },
        error => {
          Swal.fire('Erreur!', 'Une erreur est survenue lors de la suppression de la question.', 'error');
        }
      );
    }
  }

  ngOnInit(): void {
    this.answerService.getAnswers().subscribe((data: any) => {
      this.answers = data;
      console.log(data)
    })
  }

  addAnswer(answer: Answer) {
    this.answerService.addAnswer(answer).subscribe(
      (answer) => this.answers.push(answer)
    )
  }

}
