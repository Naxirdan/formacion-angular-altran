import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core'

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FilesizePipe } from 'src/app/core/pipe/filesize/filesize.pipe';


@NgModule({
  declarations: [HomeComponent, FilesizePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
  ]
})
export class HomeModule { }
