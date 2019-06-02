import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { BannerComponent } from './landing/banner/banner.component';
import { FeaturesComponent } from './landing/features/features.component';

@NgModule({
  declarations: [LandingComponent,BannerComponent,FeaturesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
