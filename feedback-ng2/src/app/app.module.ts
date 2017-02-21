import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { RegistrationComponent } from './registration/registration.component';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { ResponseComponent } from './response/response.component';
import { AddModifyQuestionsComponent } from './add-modify-questions/add-modify-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    RegistrationComponent,
    QuestionDisplayComponent,
    ResponseComponent,
    AddModifyQuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
