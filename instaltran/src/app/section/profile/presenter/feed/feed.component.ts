import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input() posts: Array<string>;
  @Input() error: boolean;
  @Output() clickDelete= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.posts)
  }

  onClickDelete = (p) => this.clickDelete.emit(p)

}
