import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Posts from 'src/posts.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public posts: Array<string>= Posts;

  constructor() { }

  ngOnInit(): void {
  }

}
