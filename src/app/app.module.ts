import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    AddAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }
}
