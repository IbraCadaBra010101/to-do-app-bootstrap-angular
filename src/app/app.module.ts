import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ToDosComponent} from './components/to-dos/to-dos.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/layout/header/header.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {AddTodoComponent} from './components/add-todo/add-todo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    TodoItemComponent,
    HeaderComponent,
    FooterComponent,
    AddTodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
