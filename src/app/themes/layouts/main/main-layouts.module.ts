import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';

const LAYOUTS = [HeaderComponent, FooterComponent];
const NGZORRO_MODULE = [NzMenuModule];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NGZORRO_MODULE
  ],
  declarations: [...LAYOUTS],
  exports: [...LAYOUTS],
})
export class MainLayoutModule { }
