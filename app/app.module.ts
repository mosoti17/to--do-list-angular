import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PiesListComponent } from './pies-list.component';
import { AppComponent }   from './app.component';
import { TaskListComponent } from './tasks-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
@NgModule({
  imports: [BrowserModule,FormsModule ],
  declarations: [AppComponent,PiesListComponent,TaskListComponent,EditTaskComponent,NewTaskComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
