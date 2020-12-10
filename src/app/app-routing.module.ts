import { ViewTranscriptComponent } from './components/transcript/view-transcript/view-transcript.component';
import { ResultComponent } from './components/result/result.component';
import { TranscriptComponent } from './components/transcript/transcript.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'transcript', pathMatch: 'full' },
  { path: 'transcript', component: TranscriptComponent },
  { path: 'result', component: ResultComponent },
  { path: 'view-transcript/:appNo', component: ViewTranscriptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
