import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Added by me
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLoginComponent } from './components/my-login.component';
import { MyCartComponent } from './components/my-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLoginComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
