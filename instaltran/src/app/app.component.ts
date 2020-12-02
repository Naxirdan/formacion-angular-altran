import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from './core/service/language.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'instaltran';

  constructor(private translateService: TranslateService,
    private _languageService: LanguageService) {
      this.translateService.setDefaultLang('ca')
    }

  onDetect = () => console.log('Hola');

  unDetect = () => console.log('ha salido')

  droppedFile = (files: Array<File>) => console.log(files);

  changeLanguage = (lang: string) => this._languageService.changeDefaultLanguage(lang)
}
