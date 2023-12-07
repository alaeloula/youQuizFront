import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule } from '@angular/material/paginator';

import {FormsModule} from "@angular/forms";

import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LevelesComponent } from './component/leveles/leveles.component';
import { AddLevelComponent } from './component/add-level/add-level.component';
import { DashbordComponent } from './component/dashbord/dashbord.component'
import {HttpClientModule} from "@angular/common/http";
import { ButtonComponent } from './component/button/button.component';
import { SubjectsComponent } from './component/subjects/subjects.component';
import { AddSubjectComponent } from './component/add-subject/add-subject.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { QuestionsComponent } from './component/questions/questions.component';
import { AddQuestionsComponent } from './component/add-questions/add-questions.component';
import { AnswersComponent } from './component/answers/answers.component';
import { AddAnswerComponent } from './component/add-answer/add-answer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddValidationComponent } from './component/add-validation/add-validation.component';
import { ValidationComponent } from './component/validation/validation.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { AddQuizComponent } from './component/add-quiz/add-quiz.component';
import { TemporisationComponent } from './component/temporisation/temporisation.component';
import { AssignmentComponent } from './component/assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    LevelesComponent,
    AddLevelComponent,
    DashbordComponent,
    ButtonComponent,
    SubjectsComponent,
    AddSubjectComponent,
    NotFoundComponent,
    QuestionsComponent,
    AddQuestionsComponent,
    AnswersComponent,
    AddAnswerComponent,
    AddValidationComponent,
    ValidationComponent,
    QuizComponent,
    AddQuizComponent,
    TemporisationComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
      HttpClientModule,
      FormsModule,
      MatPaginatorModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }
}
