import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'instaltran';

  onDetect = () => console.log('Hola');

  unDetect = () => console.log('ha salido')

  droppedFile = (files: Array<File>) => console.log(files);
}
