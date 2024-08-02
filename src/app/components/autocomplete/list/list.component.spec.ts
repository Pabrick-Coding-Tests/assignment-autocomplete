import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let dataMock: string[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
    }).compileComponents();

    dataMock = ['London'];
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.data = dataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should render', () => {
    let compiled: HTMLElement;

    beforeEach(() => {
      compiled = fixture.nativeElement as HTMLElement;
    });

    it('first city', () => {
      expect(compiled.querySelector('li')?.textContent).toContain(dataMock[0]);
    });
  });

  describe('when click', () => {
    it('should emit city', fakeAsync(() => {
      spyOn(component.onClickEmt, 'emit');
      const button = fixture.debugElement.nativeElement.querySelector('button');
      button.click();
      expect(component.onClickEmt.emit).toHaveBeenCalledWith(dataMock[0]);
    }));
  });
});
