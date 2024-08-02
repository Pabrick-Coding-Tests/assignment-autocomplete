import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AutocompleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'assignment-autocomplete';
  cities$!: Observable<string[]>;

  constructor(private dataSrv: DataService) {}

  ngOnInit(): void {
    this.cities$ = this.dataSrv.cities$;
  }
}
