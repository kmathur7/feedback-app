import { Routes, RouterModule } from '@angular/router';

//importing components for routes mapping
import { AddModifyQuestionsComponent } from './add-modify-questions/add-modify-questions.component';
import { QuestionDisplayComponent } from './question-display/question-display.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResponseComponent } from './response/response.component';
import { ResultsComponent } from './results/results.component';


const APP_ROUTES: Routes = [
    {path: 'change', component: AddModifyQuestionsComponent},
    {path: 'results', component: ResultsComponent},
    {path: 'response', component: ResponseComponent},
    {path: 'question', component: QuestionDisplayComponent},
    {path: '', component: RegistrationComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);