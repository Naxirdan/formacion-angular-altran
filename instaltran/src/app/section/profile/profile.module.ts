import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FeedComponent } from './presenter/feed/feed.component';
import { InfoComponent } from './presenter/info/info.component';


@NgModule({
  declarations: [ProfileComponent, FeedComponent, InfoComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
