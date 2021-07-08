import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSlideComponent } from './slides/home-slide/home-slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashSlideComponent } from './slides/splash-slide/splash-slide.component';
import { MCQQuestionComponent } from './slides/questions/mcq-question/mcq-question.component';
import { SelectComponent } from './slides/questions/select/select.component';
import { MapSelectComponent } from './slides/questions/map-select/map-select.component';
import { ProjectSplashComponent } from './slides/project-splash/project-splash.component';
import { MoneySplashComponent } from './slides/money-splash/money-splash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSlideComponent,
    SplashSlideComponent,
    MCQQuestionComponent,
    SelectComponent,
    MapSelectComponent,
    ProjectSplashComponent,
    MoneySplashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
