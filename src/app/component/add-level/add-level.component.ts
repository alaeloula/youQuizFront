import { Component, Output, EventEmitter, } from '@angular/core';
import { UiService } from "../../services/ui.service";

import { Subscription } from "rxjs";
import { Level } from 'src/app/classes/level';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent {
  @Output() onAddLevel: EventEmitter<Level> = new EventEmitter<Level>();
  description: string = '';
  pointMin: number = 0;
  pointMax: number = 0;
  showAddTask: boolean = false;
  subscription: Subscription | undefined;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }
  onSubmit(): void {
    if (!this.description) {
      alert('Please add a description');
      return;
    }

    const newLevel = {
      description: this.description,
      pointMin: this.pointMin,
      pointMax: this.pointMax,
    };


    this.onAddLevel.emit(newLevel)
    console.log(newLevel);

    this.description = '';
    this.pointMin = 0;
    this.pointMax = 0;
  }

}
