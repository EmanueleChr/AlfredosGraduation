import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StarComponent } from './elements/star/star.component';
import { CountdownComponent } from './elements/countdown/countdown.component';
import { OminoComponent } from './elements/omino/omino.component';
import { DialogBoyGirlComponent } from './elements/dialog-boy-girl/dialog-boy-girl.component';
import { TypingTextComponent } from './elements/typing-text/typing-text.component';
import { InputComponent } from './elements/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarComponent,
    CountdownComponent,
    OminoComponent,
    DialogBoyGirlComponent,
    TypingTextComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
