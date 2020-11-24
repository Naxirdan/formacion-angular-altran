import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import posts from 'src/posts.json'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  @Output() closeModal= new EventEmitter<string>()
  @Input() title: string = 'Instaltran'
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

  close = () => this.closeModal.emit('Modal cerrándose')

}
