import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { SubmittedPageComponent } from './submitted-page/submitted-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'quote-form', component: QuoteFormComponent},
  { path: 'submitted', component: SubmittedPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
