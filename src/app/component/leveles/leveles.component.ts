import {Component, Injectable, OnInit} from '@angular/core';
import {LevelService} from "../../services/level.service";
import {Level} from "../../classes/level";

@Component({
  selector: 'app-leveles',
  templateUrl: './leveles.component.html',
  styleUrls: ['./leveles.component.css']
})
export class LevelesComponent implements OnInit{
  levels: Level[] = [];

  constructor(private levelService:LevelService) {
  }
  ngOnInit(): void {
    this.levelService.getLeveles().subscribe((leveles) =>(this.levels=leveles));
  }


}
