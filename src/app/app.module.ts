import { ResultComponent } from './components/result/result.component';
import { TranscriptComponent } from './components/transcript/transcript.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TranscriptComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
