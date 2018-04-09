import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { StackSearchService } from './stackSearch.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [StackSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
