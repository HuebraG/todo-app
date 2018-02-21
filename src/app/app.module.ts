import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistViewComponent } from './todolist-view/todolist-view.component';
import { TodolistDetailComponent } from './todolist-detail/todolist-detail.component';
import { TodolistFormComponent } from './todolist-form/todolist-form.component';
import { ListService } from './list.service';


@NgModule({
  declarations: [
    AppComponent,
    TodolistViewComponent,
    TodolistDetailComponent,
    TodolistFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
