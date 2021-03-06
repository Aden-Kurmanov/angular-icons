import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  private readonly pathToJson = 'assets/custom-icons/icons.json?v1';

  constructor(
    private http: HttpClient
  ) { }

  getIcons(): Observable<any> {
    return this.http.get(this.pathToJson);
  }

}
