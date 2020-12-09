import { LoginComponent } from './components/login/login.component';
import { ResultComponent } from './components/result/result.component';
import { TranscriptComponent } from './components/transcript/transcript.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'transcript', component: TranscriptComponent },
  { path: 'result', component: ResultComponent },
  { path: 'login', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
