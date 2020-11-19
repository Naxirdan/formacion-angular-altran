import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { SectionRoutingModule } from './section-routing.module';



@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
  ]
})
export class SectionModule { }
