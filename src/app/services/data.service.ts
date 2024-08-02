import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  private _citiesURL = 'http://127.0.0.1:3000/';

  public get cities$(): Observable<string[]> {
    return this._http.get<string[]>(this._citiesURL);
  }
}
