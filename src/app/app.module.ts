import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {formsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    formsModule,
    HttpModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
