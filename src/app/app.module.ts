import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodolistViewComponent } from './todolist-view/todolist-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
