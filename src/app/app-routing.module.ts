import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines/headlines.component';
import { BeautyComponent } from './beauty/beauty.component';
import { EconomyComponent } from './economy/economy.component';
import { EducationComponent } from './education/education.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { MediaComponent } from './media/media.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { WorldComponent } from './world/world.component';
import { ZodiacSignComponent } from './zodiac-sign/zodiac-sign.component';

const routes: Routes = [
 {path:'',component:HeadlinesComponent},
 {path:'technology',component:TechnologyComponent},
 {path:'beauty',component:BeautyComponent},
 {path:'economy',component:EconomyComponent},
 {path:'education',component:EducationComponent},
 {path:'entertainment',component:EntertainmentComponent},
 {path:'media',component:MediaComponent},
 {path:'sports',component:SportsComponent},
 {path:'world',component:WorldComponent},
 {path:'zodiac-sign',component:ZodiacSignComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
