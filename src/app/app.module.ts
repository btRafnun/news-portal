import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponenet } from './navbar/navbar.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { EconomyComponent } from './economy/economy.component';
import { MediaComponent } from './media/media.component';
import { WorldComponent } from './world/world.component';
import { ZodiacSignComponent } from './zodiac-sign/zodiac-sign.component';
import { EducationComponent } from './education/education.component';
import { BeautyComponent } from './beauty/beauty.component';
import {NewsApiService} from './Service/news-api.service';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponenet,
    HeadlinesComponent,
    TechnologyComponent,
    SportsComponent,
    EntertainmentComponent,
    EconomyComponent,
    MediaComponent,
    WorldComponent,
    ZodiacSignComponent,
    EducationComponent,
    BeautyComponent,
    PostComponent,
   // NewsApiService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
