import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingsModule } from './main-routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_ICONS } from './config/icons';
import { MainLayoutModule } from '../../layouts/main/main-layouts.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingsModule,
    MainLayoutModule,
    NzIconModule.forChild(NZ_ICONS),
  ],
  declarations: [MainComponent, HomePageComponent]
})
export class MainModule { }
