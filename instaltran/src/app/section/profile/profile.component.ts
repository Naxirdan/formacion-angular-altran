import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import posts from 'src/posts.json'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  public title: string = 'Instaltran'
  public postsJson: Array<string> = posts;
  public errorPost: boolean= false;
  constructor() { }

  ngOnInit(): void {}

  moreThan = () => this.postsJson.length < 50

  deletePost = (post) => {
   setTimeout( () => {
     this.errorPost = true
   }, 1000)
  }

}
