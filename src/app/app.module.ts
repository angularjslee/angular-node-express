import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';

import {Routes, RouterModule} from '@angular/router';

const routes: Routes = <Routes>[
  {path: '', component: InputUserDataFormComponent},
  {path: 'user/:uid', component: DisplayUserDataComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InputUserDataFormComponent,
    DisplayUserDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
