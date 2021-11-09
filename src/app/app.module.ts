import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopImageComponent } from './top-image/top-image.component';
import { ButtonComponent } from './button/button.component';
import { SummaryComponent } from './summary/summary.component';
import { AnnualPlanComponent } from './annual-plan/annual-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopImageComponent,
    ButtonComponent,
    SummaryComponent,
    AnnualPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
