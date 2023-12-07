import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { validation } from 'src/app/classes/validation';
import { ValidationService } from 'src/app/services/validation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  faTimes = faTimes;
  validations: validation[] = []


  constructor(private validationService: ValidationService) { }
  ngOnInit(): void {
    this.validationService.getValidation().subscribe(validations => {
      this.validations = validations;
    });
  }
  addValidation(validation:validation) { 
    this.validationService.addValidation(validation).subscribe(
       (validation) => this.validations.push(validation)
    )
  }


  
  async deleteValidation(validation: validation) {
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
      this.validationService.deleteValidation(validation).subscribe(
        () => {
          // Supprimez la question du tableau this.questions
          this.validations = this.validations.filter(v => v.id !== validation.id);
          Swal.fire('Supprimé!', 'La question a été supprimée.', 'success');
        },
        error => {
          Swal.fire('Erreur!', 'Une erreur est survenue lors de la suppression de la question.', 'error');
        }
      );
    }
  }

}
