import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// importing the router
import { Routing } from './app.routes';

//importing all components 
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { RegistrationComponent } from './registration/registration.component';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { ResponseComponent } from './response/response.component';
import { AddModifyQuestionsComponent } from './add-modify-questions/add-modify-questions.component';

import { UserService } from './common/user.service';
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
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    Routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
