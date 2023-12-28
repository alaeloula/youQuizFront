import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Assignment } from 'src/app/classes/Assignment';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  now = new Date();
  assignments: Assignment[] = [];
  filteredAssignments: Assignment[] = [];
  constructor(private assignmentService:AssignmentService){}
  faPlay = faPlay;

  ngOnInit(): void {
    this.assignmentService.getAssignment().subscribe((assignments)=>{
      this.assignments=assignments;
      this.filteredAssignments = this.assignments.filter(
        (assignment) => new Date(assignment.dateEnd) > this.now
      );
    });


    
  }


}
