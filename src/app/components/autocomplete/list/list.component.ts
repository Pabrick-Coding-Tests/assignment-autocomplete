import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() data!: string[];
  @Output() onClickEmt: EventEmitter<string> = new EventEmitter();

  public trackItems(index: number, item: string) {
    return `${index}:${item}`;
  }

  public onClickOption(item: string) {
    this.onClickEmt.emit(item);
  }
}
