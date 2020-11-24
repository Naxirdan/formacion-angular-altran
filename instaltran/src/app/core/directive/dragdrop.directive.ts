import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragdrop]'
})
export class DragdropDirective {

  @Output() onDragOverEvent = new EventEmitter()
  @Output() onDragLeaveEvent = new EventEmitter()
  @Output() onFileDropped = new EventEmitter<Array<File>>()

  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    this.onDragOverEvent.emit();
  }

  @HostListener('dragLeave', ['$event']) onGragLeave(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    this.onDragLeaveEvent.emit()
  }

  @HostListener('drop', ['$event']) onDrop(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    let files = evt.dataTransfer.files
    if(files.length > 0) {
      this.onFileDropped.emit(files as Array<File>)
    }
  }

}
