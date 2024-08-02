import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'autocomplete',
  standalone: true,
  imports: [FormsModule, ListComponent],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent implements OnInit {
  @Input() list!: string[];
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    const isClickedInside = this.eRef.nativeElement.contains(event.target);
    this.isListShowed = isClickedInside ? true : false;
  }

  isListShowed = false;
  currentInput!: string;
  currentPlaceholder!: string;
  filteredList: string[] = [];

  constructor(private eRef: ElementRef) {}

  ngOnInit(): void {
    this.currentPlaceholder = this.list[0] ?? 'Name';
    // This is done because the first element is 'Name'
    // so I have assumed is the placeholder.
  }

  public onChangeInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.isListShowed = true;
      const filter = target.value.toLocaleLowerCase();
      this.filteredList = this.list.filter((item) =>
        item.toLocaleLowerCase().startsWith(filter)
      );
    }
  }

  public onListClicked(item: string) {
    this.currentInput = item;
    this.filteredList = [];
  }
}
