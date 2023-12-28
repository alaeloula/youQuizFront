import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LevelesComponent} from "./component/leveles/leveles.component";
import { SubjectsComponent } from './component/subjects/subjects.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { QuestionsComponent } from './component/questions/questions.component';
import { AnswersComponent } from './component/answers/answers.component';
import { ValidationComponent } from './component/validation/validation.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { TemporisationComponent } from './component/temporisation/temporisation.component';
import { AssignmentComponent } from './component/assignment/assignment.component';
import { DashComponent } from './component/dash/dash.component';

const routes: Routes = [
  {path :"",component:DashComponent},
  {path:"level",component:LevelesComponent},
  {path:"subject",component:SubjectsComponent},
  {path:"question",component:QuestionsComponent},
  {path:"answer",component:AnswersComponent},
  {path:"validation",component:ValidationComponent},
  {path:"quiz",component:QuizComponent},
  {path:"temporisation/:id",component:TemporisationComponent},
  {path:"showquizes",component:AssignmentComponent},
  // {path:"passerquiz",component:AssignmentComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
