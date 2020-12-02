import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filetype'
})
export class FiletypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
