import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from '../shared/header/header.component';
import { BannerComponent } from './landing/banner/banner.component';
import { FeaturesComponent } from './landing/features/features.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      {
        path: '', component: HeaderComponent, outlet: 'header'
      },
      { 
        path: '', component: BannerComponent, outlet: 'banner' 
      },
      { 
        path: '', component: FeaturesComponent, outlet: 'feature' 
      },
      {
        path: '', component: FooterComponent, outlet: 'footer'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
