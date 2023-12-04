import { Component, OnInit } from '@angular/core';
import { LevelService } from "../../services/level.service";
import { Level } from "../../classes/level";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Router } from "@angular/router";
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leveles',
  templateUrl: './leveles.component.html',
  styleUrls: ['./leveles.component.css']
})
export class LevelesComponent implements OnInit {
  levels: Level[] = [];
  showAddLevel: boolean = false;
  subscription: Subscription | undefined;
  faTimes = faTimes;

  constructor(private levelService: LevelService, private router: Router, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddLevel = value))
  }

  ngOnInit(): void {
    this.levelService.getLeveles().subscribe((leveles) => (this.levels = leveles));
  }
  
  toggleAddLevel() {
    this.uiService.toggleAddLevel();
  }


  hasRoute(route: string) {
    return this.router.url === route;
  }

  deleteTask(level: Level): void {
    this.levelService
      .deleteTask(level)
      .subscribe(
        () => (this.levels = this.levels.filter(l => l.id !== level.id)));

  }

  addLevel(level: Level): void {
    this.levelService.addLevel(level).subscribe((level) => this.levels.push(level))
  }


}
