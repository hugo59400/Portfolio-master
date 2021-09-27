import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddaComponent} from './profile/projects/adda/adda.component';
import {MainComponent} from './profile/main/main.component';
import {IslandsComponent} from './profile/projects/islands/islands.component';
import {PortfolioComponent} from './profile/projects/portfolio/portfolio.component';
import {RaymarchComponent} from './profile/projects/raymarch/raymarch.component';
import {ThurstonComponent} from './profile/projects/thurston/thurston.component';
import {VaisseauComponent} from './profile/projects/vaisseau/vaisseau.component';
import {MasquesComponent} from './profile/projects/masques/masques.component';
import {XrayComponent} from './profile/projects/xray/xray.component';
import {MoteurjeuComponent} from './profile/projects/moteurjeu/moteurjeu.component';
import {JeuvideoComponent} from './profile/projects/jeuvideo/jeuvideo.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'adda', component: AddaComponent },
  { path: 'island', component: IslandsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'raymarch', component: RaymarchComponent },
  { path: 'thurston', component: ThurstonComponent },
  { path: 'vaisseau', component: VaisseauComponent },
  { path: 'masque', component: MasquesComponent },
  { path: 'xray', component: XrayComponent },
  { path: 'moteur', component: MoteurjeuComponent},
  { path: 'jeu_video', component: JeuvideoComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
