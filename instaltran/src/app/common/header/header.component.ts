import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onChangeLang = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  clickDefaultLang = (lang: string) => this.onChangeLang.emit(lang)

}
