import { Component, OnInit, ChangeDetectionStrategy, DoCheck, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PostResponse } from 'src/app/core/api/model/posts.model';
import { PostFacade } from 'src/app/core/store/post/facade/post.facade';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  private postsSubscription: Subscription;
  private postsListSubscription: Subscription;
  private modalSubscription: Subscription;
  public bsModalRef= new BsModalRef();

  public listPosts: Observable<Array<PostResponse>>

  constructor(private _postFacade: PostFacade, private bsModalService: BsModalService) {
    this.listPosts = this._postFacade.getListPosts$()
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  onClickPost = (id: number) => this.postsSubscription = this._postFacade.getPost$(id).subscribe(res => console.log(res));

  onViewDetail = (id: number) => {
    this.bsModalRef = this.bsModalService.show(ProfileComponent, {ignoreBackdropClick: true, initialState: { title: 'Título del Modal' }} )
    this.modalSubscription = this.bsModalRef.content.closeModal.subscribe( res => {
      this.bsModalRef.hide()
    })
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe()
    this.postsListSubscription.unsubscribe()
    this.modalSubscription.unsubscribe()
  }

}
