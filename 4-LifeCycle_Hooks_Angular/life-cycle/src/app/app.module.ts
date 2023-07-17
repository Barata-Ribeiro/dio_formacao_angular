import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';

@NgModule({
  declarations: [AppComponent, TitleComponent, CheckSampleComponent],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
