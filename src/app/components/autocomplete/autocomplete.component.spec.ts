import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteComponent } from './autocomplete.component';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;
  let listMock: string[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteComponent],
    }).compileComponents();

    listMock = ['London', 'Lerida', 'Madrid'];
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    component.list = listMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when type L on input text', () => {
    beforeEach(() => {
      fixture.detectChanges(); // ngOnInit Lifecycle hook is run here

      let inputElement = fixture.nativeElement.querySelector('#autocomplete');
      inputElement.value = 'l';
      inputElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
    });

    it('should show current input', () => {
      expect(component.currentInput).toBe('l');
    });

    it('should show suggestions list', () => {
      let listElement =
        fixture.nativeElement.querySelector('#autocomplete-list');
      expect(listElement).toBeTruthy();
    });

    it('should filter all items starting with L', () => {
      expect(component.filteredList).toEqual(['London', 'Lerida']);
    });
  });
});
