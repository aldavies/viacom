import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftRailComponent } from './left-rail/left-rail.component';
import { TopComponentComponent } from './top-component/top-component.component';
import { CompCommunicationService } from './comp-communication.service';
import { BottomComponentComponent } from './bottom-component/bottom-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftRailComponent,
    TopComponentComponent,
    BottomComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CompCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
