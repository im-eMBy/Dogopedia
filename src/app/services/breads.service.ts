import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SubBreadsMap {
  [key: string]: string[];
}
interface BreadsResponse {
  message: SubBreadsMap;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadsService {
  private URL = 'https://dog.ceo/api/breeds/list/all';
  breads: string[] = [];
  subbreadsMap: SubBreadsMap = {};

  constructor(private http: HttpClient) {
    this.http
      .get<BreadsResponse>(this.URL, {
        responseType: 'json',
      })
      .subscribe((data: BreadsResponse) => {
        this.breads = Object.keys(data.message);
        this.subbreadsMap = data.message;
      });
  }

  getBreads() {
    return this.breads;
  }
  getSubbreads(bread: string): string[] {
    return this.subbreadsMap[bread];
  }
}
