import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubBreadsMap } from '../model/SubBreadsMap';

export interface BreadsResponse {
  message: SubBreadsMap;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadsService {
  private URL = 'https://dog.ceo/api/breeds/list/all';

  constructor(private http: HttpClient) {}

  getBreadsApiData() {
    return this.http.get<BreadsResponse>(this.URL, {
      responseType: 'json',
    });
  }
}
